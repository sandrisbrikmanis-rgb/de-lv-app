# G2/A1 LRB LRB-094 — OWNER VIEW

**Batch:** LRB-094
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T07:41:54.147Z
**Source commit:** `f57cf33381996d8cd7952cdd267317cb4a44bdf6`
**Branch:** `cursor/lrb-094-owner-review-pc2-3db2`
**Input SHA256:** `e4bb20cbc34c9f9bf6a3208c76cc41e593b5b40c23b1a05582e7f625e640a6b4`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-094-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB094-0001`
**Finding Stable ID:** `g2/a1/sl|gefallen|idx:225|study.examples, study.comparison|TARGET_LV_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `gefallen|idx:225`
**Field / path:** `study.examples, study.comparison`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LV_ERROR
**LV source (read-only):** [{"de":"Das gefällt mir.","lv":"man tas patīk."},{"de":"Gefällt dir das Kleid?","lv":"vai tev patīk kleita?"},{"de":"Der Film gefällt uns.","lv":"mums patīk filma."}]
**DE reference (read-only):** gefallen
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Das gefällt mir.\",\"lv\":\"to se mi je všeč.\"},{\"de\":\"Gefällt dir das Kleid?\",\"lv\":\"ti je všeč obleka?\"},{\"de\":\"Der Film gefällt uns.\",\"lv\":\"nam je všeč film.\"}]","study.comparison":"[{\"word\":\"gefallen\",\"meaning\":\"biti všeč • oseba v dajniku\",\"example\":\"Das gefällt mir. – To se mi je všeč.\"},{\"word\":\"mögen\",\"meaning\":\"biti všeč • raje izbrati\",\"example\":\"Ich mag das. – To se mi je všeč.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte gefallen\|idx:225, bet study.examples, study.comparison aptver study.examples, study.comparison; LV “[{"de":"Das gefällt mir.","lv":"man tas patīk."},{"de":"Gefällt dir das Kleid?","lv":"vai…” un DE “gefallen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gefallen",
  "lv": "biti všeč",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "biti všeč",
    "explanation": [
      "Glavna ideja: gefallen pomeni biti všeč, vendar se nemška stavčna struktura razlikuje od slovenščine.",
      "Stvar, ki se ji je všeč, je v nemščini predmet stavka.",
      "Oseba, ki ji je kaj všeč, je v dajniku: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "to se mi je všeč."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "ti je všeč obleka?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "nam je všeč film."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "biti všeč • oseba v dajniku",
        "example": "Das gefällt mir. – To se mi je všeč."
      },
      {
        "word": "mögen",
        "meaning": "biti všeč • raje izbrati",
        "example": "Ich mag das. – To se mi je všeč."
      }
    ],
    "tip": [
      "Zapomnite si konstrukcijo: Das gefällt mir.",
      "Ne ustvarjaj dobesednega slovenskega vrstnega reda."
    ],
    "important": [
      "gefallen uporabljamo z dajnikom: mir, dir, ihm, ihr.",
      "Das gefällt mir = to se mi je všeč."
    ]
  }
}
```

---

## Finding 2

**Audit ID:** `LRB094-0002`
**Finding Stable ID:** `g2/a1/sl|Geschwister|idx:234|lv and study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `Geschwister|idx:234`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** brāļi un māsas
**DE reference (read-only):** Geschwister
**CURRENT (captured scope):** {"lv":"bratje in sestre","study.translation":"bratje in sestre","study.explanation":"[\"Glavna ideja: Geschwister pomeni brate in sestre skupaj.\",\"To besedo običajno uporabljamo samo v množini.\",\"Za eno osebo uporabimo Bruder ali Schwester.\"]","study.examples":"[{\"de\":\"Ich habe zwei Geschwister.\",\"lv\":\"imam dva brata ali sestri.\"},{\"de\":\"Meine Geschwister wohnen in Berlin.\",\"lv\":\"moji bratje in sestre živijo v Berlinu.\"}]","study.comparison":"[{\"word\":\"Geschwister\",\"meaning\":\"bratje in sestre\",\"example\":\"Meine Geschwister – moji bratje in sestre\"},{\"word\":\"Bruder\",\"meaning\":\"brat\",\"example\":\"mein Bruder – moj brat\"},{\"word\":\"Schwester\",\"meaning\":\"sestra\",\"example\":\"meine Schwester – moja sestra\"}]","study.tip":"[\"Geschwister običajno uporabljamo v množini.\",\"Za eno osebo izberi Bruder ali Schwester.\"]","study.important":"[\"Ne uporabljaj ein Geschwister kot navadno A1 obliko ednine.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Geschwister\|idx:234, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “brāļi un māsas” un DE “Geschwister” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Geschwister",
  "de_article": "die",
  "lv": "bratje in sestre",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "bratje in sestre",
    "explanation": [
      "Glavna ideja: Geschwister pomeni brate in sestre skupaj.",
      "To besedo običajno uporabljamo samo v množini.",
      "Za eno osebo uporabimo Bruder ali Schwester."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "imam dva brata ali sestri."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "moji bratje in sestre živijo v Berlinu."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "bratje in sestre",
        "example": "Meine Geschwister – moji bratje in sestre"
      },
      {
        "word": "Bruder",
        "meaning": "brat",
        "example": "mein Bruder – moj brat"
      },
      {
        "word": "Schwester",
        "meaning": "sestra",
        "example": "meine Schwester – moja sestra"
      }
    ],
    "tip": [
      "Geschwister običajno uporabljamo v množini.",
      "Za eno osebo izberi Bruder ali Schwester."
    ],
    "important": [
      "Ne uporabljaj ein Geschwister kot navadno A1 obliko ednine."
    ]
  }
}
```

---

## Finding 3

**Audit ID:** `LRB094-0003`
**Finding Stable ID:** `g2/a1/sl|gleich|idx:243|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `gleich|idx:243`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** tūlīt
**DE reference (read-only):** gleich
**CURRENT (captured scope):** {"study.translation":"tūlīt • vienāds","study.explanation":"[\"Glavna ideja: gleich v smislu časa pomeni takoj, v primerjavi pomeni enak.\",\"Ko gre za čas, gleich = takoj/v trenutku (Ich komme gleich. = Takoj pridem.).\",\"Če gre za primerjavo, gleich = enak/enak (die gleiche Farbe = enaka barva).\",\"gleich var lietot arī kā prievārdu ar datīvu, nozīmē tāpat kā (gleich mir = tāpat kā man).\"]","study.examples":"[{\"de\":\"Ich komme gleich.\",\"lv\":\"takoj pridem.\"},{\"de\":\"Wir haben die gleiche Farbe.\",\"lv\":\"imamo enako barvo.\"},{\"de\":\"Das Essen ist gleich fertig.\",\"lv\":\"jed bo takoj pripravljena.\"},{\"de\":\"Beide Wege sind gleich lang.\",\"lv\":\"oba pota sta enako dolga.\"},{\"de\":\"Bis gleich!\",\"lv\":\"līdz tūlīt!\"},{\"de\":\"Sie sind gleich groß.\",\"lv\":\"enake so višine.\"}]","study.tip":"[\"Za čas (kmalu) → takoj.\",\"Za primerjavo (enak) → enak.\"]","study.important":"[\"gleich = takoj (čas) ALI enak (primerjava).\",\"Bis gleich! = līdz tūlīt! — ierasta atvadu frāze.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte gleich\|idx:243, bet study aptver study.translation, study.explanation, study.examples, study.tip, study.important; LV “tūlīt” un DE “gleich” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gleich",
  "lv": "tūlīt • vienāds",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "tūlīt • vienāds",
    "explanation": [
      "Glavna ideja: gleich v smislu časa pomeni takoj, v primerjavi pomeni enak.",
      "Ko gre za čas, gleich = takoj/v trenutku (Ich komme gleich. = Takoj pridem.).",
      "Če gre za primerjavo, gleich = enak/enak (die gleiche Farbe = enaka barva).",
      "gleich var lietot arī kā prievārdu ar datīvu, nozīmē tāpat kā (gleich mir = tāpat kā man)."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "takoj pridem."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "imamo enako barvo."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "jed bo takoj pripravljena."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "oba pota sta enako dolga."
      },
      {
        "de": "Bis gleich!",
        "lv": "līdz tūlīt!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "enake so višine."
      }
    ],
    "tip": [
      "Za čas (kmalu) → takoj.",
      "Za primerjavo (enak) → enak."
    ],
    "important": [
      "gleich = takoj (čas) ALI enak (primerjava).",
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
              "tūlīt"
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
              "vienāda"
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
              "vienāda"
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

## Finding 4

**Audit ID:** `LRB094-0004`
**Finding Stable ID:** `g2/a1/sl|groß|idx:250|lv and study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `groß|idx:250`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** liels
**DE reference (read-only):** groß
**CURRENT (captured scope):** {"lv":"velik","study.translation":"velik","study.explanation":"[\"Galvenā doma: Liels izmērā vai cilvēkam - garš augumā.\",\"groß galvenokārt nozīmē: liels izmērs.\",\"Bieži raksturo: kopējo izmēru.\"]","study.examples":"[{\"de\":\"Das Haus ist groß.\",\"lv\":\"Māja ir liela.\"},{\"de\":\"Berlin ist eine große Stadt.\",\"lv\":\"māja ir liela.\"},{\"de\":\"Er ist groß.\",\"lv\":\"visok je rasti.\"},{\"de\":\"Das Zimmer ist groß.\",\"lv\":\"soba je velika.\"}]","study.tip":"[\"groß = liels\",\"Izmanto groß, kad konteksts atbilst šai nozīmei.\"]","study.important":"[\"Cilvēkam Er ist groß nozīmē garš augumā.\",\"groß = liels.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte groß\|idx:250, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “liels” un DE “groß” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "groß",
  "lv": "velik",
  "level": "A1",
  "study": {
    "id": "a1-gross-study",
    "layout": "standardStudy",
    "translation": "velik",
    "explanation": [
      "Galvenā doma: Liels izmērā vai cilvēkam - garš augumā.",
      "groß galvenokārt nozīmē: liels izmērs.",
      "Bieži raksturo: kopējo izmēru."
    ],
    "examples": [
      {
        "de": "Das Haus ist groß.",
        "lv": "Māja ir liela."
      },
      {
        "de": "Berlin ist eine große Stadt.",
        "lv": "māja ir liela."
      },
      {
        "de": "Er ist groß.",
        "lv": "visok je rasti."
      },
      {
        "de": "Das Zimmer ist groß.",
        "lv": "soba je velika."
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
          "liels"
        ],
        "green": [
          "Liels"
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
              "liela"
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
              "liela"
            ]
          }
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
          "lv": {
            "purple": [
              "liela"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "liels"
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

## Finding 5

**Audit ID:** `LRB094-0005`
**Finding Stable ID:** `g2/a1/sl|Großeltern|idx:251|lv and study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `Großeltern|idx:251`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** vecvecāki
**DE reference (read-only):** Großeltern
**CURRENT (captured scope):** {"lv":"stari starši","study.translation":"stari starši","study.explanation":"[\"Glavna ideja: Großeltern pomeni babico in dedka skupaj.\",\"To besedo uporabljamo v množini.\",\"V ednini uporabimo Großmutter ali Großvater.\"]","study.examples":"[{\"de\":\"Meine Großeltern wohnen auf dem Land.\",\"lv\":\"moji stari starši živijo na podeželju.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"obiskujem svoje stare starše.\"}]","study.comparison":"[{\"word\":\"Großeltern\",\"meaning\":\"stari starši\",\"example\":\"meine Großeltern – moji stari starši\"},{\"word\":\"Großmutter\",\"meaning\":\"babica\",\"example\":\"meine Großmutter – moja babica\"},{\"word\":\"Großvater\",\"meaning\":\"dedek\",\"example\":\"mein Großvater – moj dedek\"}]","study.tip":"[\"Großeltern je množina.\",\"Za eno osebo uporabimo Großmutter ali Großvater.\"]","study.important":"[\"die Großeltern = stari starši.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Großeltern\|idx:251, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “vecvecāki” un DE “Großeltern” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Großeltern",
  "de_article": "die",
  "lv": "stari starši",
  "level": "A1",
  "study": {
    "id": "a1-grosseltern-study",
    "layout": "standardStudy",
    "translation": "stari starši",
    "explanation": [
      "Glavna ideja: Großeltern pomeni babico in dedka skupaj.",
      "To besedo uporabljamo v množini.",
      "V ednini uporabimo Großmutter ali Großvater."
    ],
    "examples": [
      {
        "de": "Meine Großeltern wohnen auf dem Land.",
        "lv": "moji stari starši živijo na podeželju."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "obiskujem svoje stare starše."
      }
    ],
    "comparison": [
      {
        "word": "Großeltern",
        "meaning": "stari starši",
        "example": "meine Großeltern – moji stari starši"
      },
      {
        "word": "Großmutter",
        "meaning": "babica",
        "example": "meine Großmutter – moja babica"
      },
      {
        "word": "Großvater",
        "meaning": "dedek",
        "example": "mein Großvater – moj dedek"
      }
    ],
    "tip": [
      "Großeltern je množina.",
      "Za eno osebo uporabimo Großmutter ali Großvater."
    ],
    "important": [
      "die Großeltern = stari starši."
    ]
  }
}
```

---

## Finding 6

**Audit ID:** `LRB094-0006`
**Finding Stable ID:** `g2/a1/sl|gut|idx:259|lv and study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `gut|idx:259`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** labs
**DE reference (read-only):** gut
**CURRENT (captured scope):** {"lv":"dober","study.translation":"dober","study.explanation":"[\"Glavna ideja: gut je pridevnik/prislove — dober, uspešno, v redu.\",\"gut opisuje kakovost, zdravje ali način, kako se kaj dogaja (Es geht mir gut. = Dobro mi je.).\",\"Pieklājības frāzē guten Tag/Abend/Morgen gut maina galotni pēc locījuma.\",\"Če gut opisuje glagol, je prislove (gut schwimmen = dobro plavati).\",\"Ne zamenjujte z das Gut - to je samostalnik (posestvo, dvorec) z veliko začetnico in členkom.\"]","study.examples":"[{\"de\":\"Das Essen ist gut.\",\"lv\":\"jed je dobra.\"},{\"de\":\"Wie geht es dir? – Gut, danke!\",\"lv\":\"kako te gre? – dobro, hvala!\"},{\"de\":\"Er spricht gut Deutsch.\",\"lv\":\"govori nemščino dobro.\"},{\"de\":\"Guten Morgen!\",\"lv\":\"dobro jutro!\"},{\"de\":\"Das ist eine gute Idee.\",\"lv\":\"to je dobra ideja.\"},{\"de\":\"Alles ist gut.\",\"lv\":\"vse je v redu.\"}]","study.tip":"[\"gut brez člena je pridevnik/prislove — dober/dobro.\",\"das Gut s veliko črko in členom je povsem drugačna beseda – samostalnik (premoženje, posestvo).\"]","study.important":"[\"gut = dober/dobro (pridevnik/prislove).\",\"das Gut = premoženje/posestvo (samostalnik) – ne zmeši s gut.\",\"Guten Tag/Morgen/Abend — gut maina galotni pēc locījuma.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte gut\|idx:259, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “labs” un DE “gut” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gut",
  "lv": "dober",
  "level": "A1",
  "study": {
    "id": "a1-gut-study",
    "layout": "standardStudy",
    "translation": "dober",
    "explanation": [
      "Glavna ideja: gut je pridevnik/prislove — dober, uspešno, v redu.",
      "gut opisuje kakovost, zdravje ali način, kako se kaj dogaja (Es geht mir gut. = Dobro mi je.).",
      "Pieklājības frāzē guten Tag/Abend/Morgen gut maina galotni pēc locījuma.",
      "Če gut opisuje glagol, je prislove (gut schwimmen = dobro plavati).",
      "Ne zamenjujte z das Gut - to je samostalnik (posestvo, dvorec) z veliko začetnico in členkom."
    ],
    "examples": [
      {
        "de": "Das Essen ist gut.",
        "lv": "jed je dobra."
      },
      {
        "de": "Wie geht es dir? – Gut, danke!",
        "lv": "kako te gre? – dobro, hvala!"
      },
      {
        "de": "Er spricht gut Deutsch.",
        "lv": "govori nemščino dobro."
      },
      {
        "de": "Guten Morgen!",
        "lv": "dobro jutro!"
      },
      {
        "de": "Das ist eine gute Idee.",
        "lv": "to je dobra ideja."
      },
      {
        "de": "Alles ist gut.",
        "lv": "vse je v redu."
      }
    ],
    "tip": [
      "gut brez člena je pridevnik/prislove — dober/dobro.",
      "das Gut s veliko črko in členom je povsem drugačna beseda – samostalnik (premoženje, posestvo)."
    ],
    "important": [
      "gut = dober/dobro (pridevnik/prislove).",
      "das Gut = premoženje/posestvo (samostalnik) – ne zmeši s gut.",
      "Guten Tag/Morgen/Abend — gut maina galotni pēc locījuma."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gut"
        ],
        "purple": [
          "labs",
          "labi"
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
              "labs"
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
              "labi"
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
              "labi"
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
              "labrīt"
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
              "laba"
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
              "kārtībā"
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

## Finding 7

**Audit ID:** `LRB094-0007`
**Finding Stable ID:** `g2/a1/sl|haben|idx:261|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `haben|idx:261`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** man ir
**DE reference (read-only):** haben
**CURRENT (captured scope):** {"lv":"imam","study.translation":"imam","study.explanation":"[\"Galvenā doma: haben nozīmē, ka kādam kaut kas pieder vai ir pieejams.\",\"Latvijska konstrukcija datiba »man ir / tev ir« je v nemščini nominativ + haben: Ich habe ..., Du hast ..., Er hat ... — ne *mir habe.\",\"Po haben sledi akuzativ: Ich habe ein Auto. = Imam avtomobil.\",\"haben uporabljamo tudi kot pomožni glagol v Perfektu: Ich habe gelernt.\"]","study.examples":"[{\"de\":\"Ich habe ein Auto.\",\"lv\":\"imam avtomobil.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"ali imaš čas?\"},{\"de\":\"Wir haben Hunger.\",\"lv\":\"lačni smo.\"},{\"de\":\"Ich habe das gemacht.\",\"lv\":\"to sem naredil.\"}]","study.comparison":"[{\"word\":\"haben\",\"meaning\":\"imam\",\"example\":\"Ich habe Zeit. = Imam čas.\"},{\"word\":\"sein\",\"meaning\":\"biti\",\"example\":\"Ich bin hier. = Sem tukaj.\"},{\"word\":\"bekommen\",\"meaning\":\"prejeti\",\"example\":\"Ich bekomme ein Geschenk. = Prejamem dar.\"},{\"word\":\"machen\",\"meaning\":\"delati / početi\",\"example\":\"Ich mache das. = To delam.\"}]","study.tip":"{\"text\":\"Atceries: Ich habe → man ir.\"}","study.important":"[\"Slovensko »imam« = nemško Ich habe + akuzativ. Ne uporabljaj datiba: napačno *mir habe.\",\"S seinom in dativom: Mir ist kalt. = zebe me. (ni haben!)\",\"V Perfektu: Ich habe gelernt = sem se učil.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte haben\|idx:261, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “man ir” un DE “haben” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "haben",
  "lv": "imam",
  "level": "A1",
  "study": {
    "id": "a1-haben",
    "layout": "standardStudy",
    "translation": "imam",
    "explanation": [
      "Galvenā doma: haben nozīmē, ka kādam kaut kas pieder vai ir pieejams.",
      "Latvijska konstrukcija datiba »man ir / tev ir« je v nemščini nominativ + haben: Ich habe ..., Du hast ..., Er hat ... — ne *mir habe.",
      "Po haben sledi akuzativ: Ich habe ein Auto. = Imam avtomobil.",
      "haben uporabljamo tudi kot pomožni glagol v Perfektu: Ich habe gelernt."
    ],
    "examples": [
      {
        "de": "Ich habe ein Auto.",
        "lv": "imam avtomobil."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "ali imaš čas?"
      },
      {
        "de": "Wir haben Hunger.",
        "lv": "lačni smo."
      },
      {
        "de": "Ich habe das gemacht.",
        "lv": "to sem naredil."
      }
    ],
    "comparison": [
      {
        "word": "haben",
        "meaning": "imam",
        "example": "Ich habe Zeit. = Imam čas."
      },
      {
        "word": "sein",
        "meaning": "biti",
        "example": "Ich bin hier. = Sem tukaj."
      },
      {
        "word": "bekommen",
        "meaning": "prejeti",
        "example": "Ich bekomme ein Geschenk. = Prejamem dar."
      },
      {
        "word": "machen",
        "meaning": "delati / početi",
        "example": "Ich mache das. = To delam."
      }
    ],
    "tip": {
      "text": "Atceries: Ich habe → man ir."
    },
    "important": [
      "Slovensko »imam« = nemško Ich habe + akuzativ. Ne uporabljaj datiba: napačno *mir habe.",
      "S seinom in dativom: Mir ist kalt. = zebe me. (ni haben!)",
      "V Perfektu: Ich habe gelernt = sem se učil."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "haben",
          "Ich habe"
        ],
        "purple": [
          "man ir",
          "tev ir"
        ],
        "yellow": [
          "palīgdarbības vārdu"
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
              "man ir"
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
              "tev ir"
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
              "esam izsalkuši"
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
              "izdarīju"
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
              "man ir"
            ]
          },
          "example": {
            "blue": [
              "habe"
            ],
            "purple": [
              "man ir"
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
              "būt"
            ]
          },
          "example": {
            "green": [
              "bin",
              "esmu"
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
              "saņemt"
            ]
          },
          "example": {
            "yellow": [
              "bekomme",
              "saņemu"
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
              "darīt"
            ]
          },
          "example": {
            "red": [
              "mache",
              "daru"
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
            "man ir"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "habe"
          ],
          "purple": [
            "man ir"
          ]
        },
        {
          "blue": [
            "habe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 8

**Audit ID:** `LRB094-0008`
**Finding Stable ID:** `g2/a1/sl|halten|idx:265|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `halten|idx:265`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** turēt
**DE reference (read-only):** halten
**CURRENT (captured scope):** {"lv":"turēt • apturēt","study.translation":"turēt • apturēt","study.explanation":"[\"Glavna ideja: halten pomeni zadržati, vendar s transportom ali gibanjem lahko pomeni ustaviti ali ustaviti.\",\"S predmetom v roki je halten običajno držati.\",\"Ar autobusu, vilcienu vai auto halten bieži nozīmē apstāties.\",\"Viedokļa frāzē ich halte das für... tas nozīmē uzskatīt par.\"]","study.examples":"[{\"de\":\"Ich halte die Tasche.\",\"lv\":\"držim torbo.\"},{\"de\":\"Der Bus hält hier.\",\"lv\":\"autobuss šeit apstājas.\"},{\"de\":\"Bitte halten Sie an.\",\"lv\":\"prosim, ustavite se.\"},{\"de\":\"Ich halte das für richtig.\",\"lv\":\"mislim, da je to pravilno.\"}]","study.comparison":"[{\"word\":\"halten\",\"meaning\":\"turēt / apstāties\",\"example\":\"Der Bus hält. = Avtobus se ustavi.\"},{\"word\":\"nehmen\",\"meaning\":\"vzeti\",\"example\":\"Ich nehme die Tasche. = Vzamem torbo.\"},{\"word\":\"anhalten\",\"meaning\":\"apturēt\",\"example\":\"Bitte halten Sie an. = Prosim, ustavite se.\"},{\"word\":\"denken\",\"meaning\":\"misliti\",\"example\":\"Ich denke, das ist richtig. = Mislim, da je to pravilno.\"}]","study.tip":"{\"text\":\"Atceries: rokā → halten; transports → hält/apstājas.\"}","study.important":"[\"halten nav tikai “turēt”. Ar transportu tas bieži nozīmē apstāties.\",\"Ich halte das für... ir viedokļa frāze: “es to uzskatu par...”.\",\"Bitte halten Sie an se uporablja ločljivi glagol anhalten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte halten\|idx:265, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “turēt” un DE “halten” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "halten",
  "lv": "turēt • apturēt",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "turēt • apturēt",
    "explanation": [
      "Glavna ideja: halten pomeni zadržati, vendar s transportom ali gibanjem lahko pomeni ustaviti ali ustaviti.",
      "S predmetom v roki je halten običajno držati.",
      "Ar autobusu, vilcienu vai auto halten bieži nozīmē apstāties.",
      "Viedokļa frāzē ich halte das für... tas nozīmē uzskatīt par."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "držim torbo."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "autobuss šeit apstājas."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "prosim, ustavite se."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "mislim, da je to pravilno."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "turēt / apstāties",
        "example": "Der Bus hält. = Avtobus se ustavi."
      },
      {
        "word": "nehmen",
        "meaning": "vzeti",
        "example": "Ich nehme die Tasche. = Vzamem torbo."
      },
      {
        "word": "anhalten",
        "meaning": "apturēt",
        "example": "Bitte halten Sie an. = Prosim, ustavite se."
      },
      {
        "word": "denken",
        "meaning": "misliti",
        "example": "Ich denke, das ist richtig. = Mislim, da je to pravilno."
      }
    ],
    "tip": {
      "text": "Atceries: rokā → halten; transports → hält/apstājas."
    },
    "important": [
      "halten nav tikai “turēt”. Ar transportu tas bieži nozīmē apstāties.",
      "Ich halte das für... ir viedokļa frāze: “es to uzskatu par...”.",
      "Bitte halten Sie an se uporablja ločljivi glagol anhalten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "halten"
        ],
        "purple": [
          "Glavna",
          "Glavna",
          "apstāties",
          "uzskatīt par"
        ],
        "green": [
          "transportom",
          "Glavna"
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
              "apstājieties"
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
              "uzskatu"
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
              "ņemt"
            ]
          },
          "example": {
            "yellow": [
              "nehme",
              "ņemu"
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
              "apturēt"
            ]
          },
          "example": {
            "red": [
              "Stoppen",
              "Apturiet"
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
              "domāt"
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

## Finding 9

**Audit ID:** `LRB094-0009`
**Finding Stable ID:** `g2/a1/sl|Hand|idx:267|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `Hand|idx:267`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** plauksta
**DE reference (read-only):** Hand
**CURRENT (captured scope):** {"lv":"dlan","study.translation":"dlan","study.explanation":"[\"Glavna ideja: die Hand pomeni dlan.\",\"V nemščini sta Arm in Hand dve različni besedi.\",\"V slovenščini se beseda roka pogosto uporablja za oba pojma.\"]","study.examples":"[{\"de\":\"Ich wasche meine Hände.\",\"lv\":\"umivam si roke.\"},{\"de\":\"Sie hält das Glas in der Hand.\",\"lv\":\"drži kozarec v dlani.\"},{\"de\":\"Mein Arm tut weh.\",\"lv\":\"boli me roka.\"}]","study.comparison":"[{\"word\":\"die Hand\",\"meaning\":\"dlan\",\"example\":\"in der Hand – v dlani\"},{\"word\":\"der Arm\",\"meaning\":\"roka\",\"example\":\"Mein Arm tut weh. – Boli me roka.\"}]","study.tip":"[\"Hand = dlan.\",\"Arm = roka od ramena do dlani.\"]","study.important":"[\"V nemščini Hand in Arm nista ista beseda.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Hand\|idx:267, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “plauksta” un DE “Hand” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
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
  "lv": "dlan",
  "level": "A1",
  "study": {
    "id": "a1-hand-study",
    "layout": "standardStudy",
    "translation": "dlan",
    "explanation": [
      "Glavna ideja: die Hand pomeni dlan.",
      "V nemščini sta Arm in Hand dve različni besedi.",
      "V slovenščini se beseda roka pogosto uporablja za oba pojma."
    ],
    "examples": [
      {
        "de": "Ich wasche meine Hände.",
        "lv": "umivam si roke."
      },
      {
        "de": "Sie hält das Glas in der Hand.",
        "lv": "drži kozarec v dlani."
      },
      {
        "de": "Mein Arm tut weh.",
        "lv": "boli me roka."
      }
    ],
    "comparison": [
      {
        "word": "die Hand",
        "meaning": "dlan",
        "example": "in der Hand – v dlani"
      },
      {
        "word": "der Arm",
        "meaning": "roka",
        "example": "Mein Arm tut weh. – Boli me roka."
      }
    ],
    "tip": [
      "Hand = dlan.",
      "Arm = roka od ramena do dlani."
    ],
    "important": [
      "V nemščini Hand in Arm nista ista beseda."
    ]
  }
}
```

---

## Finding 10

**Audit ID:** `LRB094-0010`
**Finding Stable ID:** `g2/a1/sl|heißen|idx:276|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `heißen|idx:276`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** saukties
**DE reference (read-only):** heißen
**CURRENT (captured scope):** {"lv":"saukties • nozīmēt","study.translation":"saukties • nozīmēt","study.explanation":"[\"Glavna ideja: heißen se najpogosteje uporablja za ime osebe.\",\"Izraz Ich heiße... pomeni \\\"ime mi je...\\\".\",\"Z besedami ali izrazi lahko heißen pomeni tudi pomeniti.\",\"Na ravni A1 je najpomembnejši stavek Wie heißt du?\"]","study.examples":"[{\"de\":\"Ich heiße Anna.\",\"lv\":\"ime mi je Anna.\"},{\"de\":\"Wie heißt du?\",\"lv\":\"kako se ti vaš?\"},{\"de\":\"Wie heißt das auf Deutsch?\",\"lv\":\"kako se to imenuje nemščino?\"},{\"de\":\"Was heißt das?\",\"lv\":\"kaj to pomeni?\"}]","study.comparison":"[{\"word\":\"heißen\",\"meaning\":\"biti imenovan / pomeniti\",\"example\":\"Ich heiße Anna. = Ime mi je Anna.\"},{\"word\":\"nennen\",\"meaning\":\"klicati / poimenovati\",\"example\":\"Er nennt mich Tom. = Klical me je Tom.\"},{\"word\":\"bedeuten\",\"meaning\":\"pomeniti\",\"example\":\"Was bedeutet das? = Kaj to pomeni?\"},{\"word\":\"rufen\",\"meaning\":\"saukt / zvanīt\",\"example\":\"Ich rufe dich. = Te pokličem.\"},{\"word\":\"anrufen\",\"meaning\":\"poklicati\",\"example\":\"Ich rufe dich an. = Ti pokličem.\"}]","study.tip":"{\"text\":\"Atceries: Ich heiße... → mani sauc...\"}","study.important":"[\"Wie heißt du? pomeni \\\"Kako ti je ime?\\\", ne dobesedno \\\"kako ti je ime?\\\".\",\"Was heißt das? pogosto pomeni »Kaj to pomeni?«.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte heißen\|idx:276, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “saukties” un DE “heißen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "heißen",
  "lv": "saukties • nozīmēt",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "saukties • nozīmēt",
    "explanation": [
      "Glavna ideja: heißen se najpogosteje uporablja za ime osebe.",
      "Izraz Ich heiße... pomeni \"ime mi je...\".",
      "Z besedami ali izrazi lahko heißen pomeni tudi pomeniti.",
      "Na ravni A1 je najpomembnejši stavek Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "ime mi je Anna."
      },
      {
        "de": "Wie heißt du?",
        "lv": "kako se ti vaš?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "kako se to imenuje nemščino?"
      },
      {
        "de": "Was heißt das?",
        "lv": "kaj to pomeni?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "biti imenovan / pomeniti",
        "example": "Ich heiße Anna. = Ime mi je Anna."
      },
      {
        "word": "nennen",
        "meaning": "klicati / poimenovati",
        "example": "Er nennt mich Tom. = Klical me je Tom."
      },
      {
        "word": "bedeuten",
        "meaning": "pomeniti",
        "example": "Was bedeutet das? = Kaj to pomeni?"
      },
      {
        "word": "rufen",
        "meaning": "saukt / zvanīt",
        "example": "Ich rufe dich. = Te pokličem."
      },
      {
        "word": "anrufen",
        "meaning": "poklicati",
        "example": "Ich rufe dich an. = Ti pokličem."
      }
    ],
    "tip": {
      "text": "Atceries: Ich heiße... → mani sauc..."
    },
    "important": [
      "Wie heißt du? pomeni \"Kako ti je ime?\", ne dobesedno \"kako ti je ime?\".",
      "Was heißt das? pogosto pomeni »Kaj to pomeni?«."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "heißen",
          "Ich heiße",
          "Wie heißt du"
        ],
        "purple": [
          "sauc",
          "nozīmēt"
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
              "mani sauc"
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
              "sauc"
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
              "saucas"
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
              "nozīmē"
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
              "saukties",
              "nozīmēt"
            ]
          },
          "example": {
            "blue": [
              "heiße"
            ],
            "purple": [
              "sauc"
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
              "saukt"
            ]
          },
          "example": {
            "green": [
              "nennt",
              "sauc"
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
              "nozīmēt"
            ]
          },
          "example": {
            "yellow": [
              "bedeutet",
              "nozīmē"
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
              "saukt",
              "zvanīt"
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
            "mani sauc"
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
            "ko tas nozīmē"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB094-0011`
**Finding Stable ID:** `g2/a1/sl|hoch|idx:285|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `hoch|idx:285`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** augsts
**DE reference (read-only):** hoch
**CURRENT (captured scope):** {"lv":"visok","study.translation":"visok","study.explanation":"[\"Galvenā doma: Augsts vertikāli, līmenī vai augstumā.\",\"hoch galvenokārt nozīmē: liels augstumā.\",\"Bieži raksturo: vertikālu augstumu.\"]","study.examples":"[{\"de\":\"Der Berg ist hoch.\",\"lv\":\"Gora je visoka.\"},{\"de\":\"Das Regal ist zwei Meter hoch.\",\"lv\":\"kalns ir augsts.\"},{\"de\":\"Die Miete ist hoch.\",\"lv\":\"streha je visoka.\"},{\"de\":\"Die Mauer ist hoch.\",\"lv\":\"stena je visoka.\"},{\"de\":\"Die Preise sind hoch.\",\"lv\":\"cene so visoke.\"}]","study.tip":"[\"hoch = augsts\",\"Izmanto hoch, kad konteksts atbilst šai nozīmei.\"]","study.important":"[\"Cenām un līmenim bieži lieto hoch.\",\"hoch = augsts.\",\"Augsts vertikāli, līmenī vai augstumā.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte hoch\|idx:285, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “augsts” un DE “hoch” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hoch",
  "lv": "visok",
  "level": "A1",
  "study": {
    "id": "a1-hoch-study",
    "layout": "standardStudy",
    "translation": "visok",
    "explanation": [
      "Galvenā doma: Augsts vertikāli, līmenī vai augstumā.",
      "hoch galvenokārt nozīmē: liels augstumā.",
      "Bieži raksturo: vertikālu augstumu."
    ],
    "examples": [
      {
        "de": "Der Berg ist hoch.",
        "lv": "Gora je visoka."
      },
      {
        "de": "Das Regal ist zwei Meter hoch.",
        "lv": "kalns ir augsts."
      },
      {
        "de": "Die Miete ist hoch.",
        "lv": "streha je visoka."
      },
      {
        "de": "Die Mauer ist hoch.",
        "lv": "stena je visoka."
      },
      {
        "de": "Die Preise sind hoch.",
        "lv": "cene so visoke."
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
          "augsts"
        ],
        "orange": [
          "augsts"
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
              "Gora"
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
              "augsts"
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
              "augsta"
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
              "augsta"
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
              "augsta"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "augsts"
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

## Finding 12

**Audit ID:** `LRB094-0012`
**Finding Stable ID:** `g2/a1/sl|klein|idx:6|study.translation, study.explanation, study.examples.lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `klein|idx:6`
**Field / path:** `study.translation, study.explanation, study.examples.lv`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** mazs
**DE reference (read-only):** klein
**CURRENT (captured scope):** {"study.translation":"majhen","study.explanation":"[\"Galvenā doma: Mazs izmērā vai apjomā.\",\"klein galvenokārt nozīmē: mazs izmērs.\",\"Bieži raksturo: lietas/personas izmēru.\"]","study.examples.lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: sl kartītei klein\|idx:6 ceļš study.translation, study.explanation, study.examples.lv production datos neeksistē; LV “mazs” ir jāizvērtē kopā ar shēmas OWNER, pirms var izveidot jaunu lauku vai noraidīt finding.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "klein",
  "lv": "majhen",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "majhen",
    "explanation": [
      "Galvenā doma: Mazs izmērā vai apjomā.",
      "klein galvenokārt nozīmē: mazs izmērs.",
      "Bieži raksturo: lietas/personas izmēru."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Soba je majhna."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "istaba ir maza."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "bērns vēl ir mazs."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "man ir maza soma."
      },
      {
        "de": "Das Kind ist klein.",
        "lv": "bērns ir mazs."
      }
    ],
    "tip": [
      "klein = majhen",
      "Uporabite klein, kadar kontekst ustreza tej pomenu."
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
          "mazs"
        ],
        "green": [
          "Mazs"
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
              "maza"
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
              "maza"
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
              "mazs"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "mazs"
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

## Finding 13

**Audit ID:** `LRB094-0013`
**Finding Stable ID:** `g2/a1/sl|lassen|idx:356|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `lassen|idx:356`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** atstāt • ļaut
**DE reference (read-only):** lassen
**CURRENT (captured scope):** {"lv":"zapustiti • pustiti","study.translation":"zapustiti • pustiti","study.explanation":"[\"Glavna ideja: lassen pomeni nekaj zapustiti ali pustiti, da se nekaj zgodi.\",\"Če kak ostane na mestu, lassen prevajam kot zapustiti.\",\"Če nekomu daste dovoljenje, se lassen prevede kot dovolite.\",\"V razgovorih je zelo pogost obrazec Lass mich! = Pusti me! ali Pustite me!\"]","study.examples":"[{\"de\":\"Ich lasse die Tasche hier.\",\"lv\":\"zapustim torbo tukaj.\"},{\"de\":\"Lass das bitte auf dem Tisch.\",\"lv\":\"to prosim pusti na mizo.\"},{\"de\":\"Meine Eltern lassen mich gehen.\",\"lv\":\"starši mi pustijo iti.\"},{\"de\":\"Lass mich in Ruhe!\",\"lv\":\"pusti me pri miru!\"}]","study.comparison":"[{\"word\":\"lassen\",\"meaning\":\"zapustiti / pustiti\",\"example\":\"To pustim tukaj.\"},{\"word\":\"bleiben\",\"meaning\":\"ostati\",\"example\":\"Ostanem tukaj.\"},{\"word\":\"erlauben\",\"meaning\":\"dovoliti\",\"example\":\"To mi dovoli.\"},{\"word\":\"geben\",\"meaning\":\"dati\",\"example\":\"Daj mi knjigo.\"}]","study.tip":"{\"text\":\"Atceries: kaut kas paliek → lassen; kādam atļauj → lassen.\"}","study.important":"[\"lassen ni samo »zapustiti«. Pogosto tudi pomeni »pustiti«.\",\"Lass mich in Ruhe! obstaja zelo pogost stavek: \\\"Pusti me pri miru!\\\"\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte lassen\|idx:356, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “atstāt • ļaut” un DE “lassen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lassen",
  "lv": "zapustiti • pustiti",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "zapustiti • pustiti",
    "explanation": [
      "Glavna ideja: lassen pomeni nekaj zapustiti ali pustiti, da se nekaj zgodi.",
      "Če kak ostane na mestu, lassen prevajam kot zapustiti.",
      "Če nekomu daste dovoljenje, se lassen prevede kot dovolite.",
      "V razgovorih je zelo pogost obrazec Lass mich! = Pusti me! ali Pustite me!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "zapustim torbo tukaj."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "to prosim pusti na mizo."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "starši mi pustijo iti."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "pusti me pri miru!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "zapustiti / pustiti",
        "example": "To pustim tukaj."
      },
      {
        "word": "bleiben",
        "meaning": "ostati",
        "example": "Ostanem tukaj."
      },
      {
        "word": "erlauben",
        "meaning": "dovoliti",
        "example": "To mi dovoli."
      },
      {
        "word": "geben",
        "meaning": "dati",
        "example": "Daj mi knjigo."
      }
    ],
    "tip": {
      "text": "Atceries: kaut kas paliek → lassen; kādam atļauj → lassen."
    },
    "important": [
      "lassen ni samo »zapustiti«. Pogosto tudi pomeni »pustiti«.",
      "Lass mich in Ruhe! obstaja zelo pogost stavek: \"Pusti me pri miru!\""
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lassen",
          "Lass mich"
        ],
        "purple": [
          "atstāt",
          "kaut",
          "Liec mani mierā"
        ],
        "green": [
          "vietā",
          "Glavna"
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
              "atstāju"
            ],
            "yellow": [
              "somu"
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
              "ļauj"
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
              "atstāt",
              "ļaut"
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
              "palikt"
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
              "atļaut"
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
              "dot"
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
            "Lass"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 14

**Audit ID:** `LRB094-0014`
**Finding Stable ID:** `g2/a1/sl|laufen|idx:357|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `laufen|idx:357`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** skriet • darboties
**DE reference (read-only):** laufen
**CURRENT (captured scope):** {"lv":"teči • delovati","study.translation":"teči • delati","study.explanation":"[\"Glavna ideja: laufen pomeni teči, vendar s aparati lahko pomeni delovati.\",\"Za osebo ali žival laufen pogosto pomeni teči ali hitro hoje.\",\"Za film, stroj ali program laufen pomeni, da se izvaja ali dogaja.\",\"Za gibanje po nogah se na ravni A1 najpogosteje primerja gehen in laufen.\"]","study.examples":"[{\"de\":\"Er läuft sehr schnell.\",\"lv\":\"teče zelo hitro.\"},{\"de\":\"Die Kinder laufen im Park.\",\"lv\":\"otroci tečejo v vrtu.\"},{\"de\":\"Der Film läuft schon.\",\"lv\":\"film je že predvajan.\"},{\"de\":\"Die Maschine läuft gut.\",\"lv\":\"stroj deluje dobro.\"}]","study.comparison":"[{\"word\":\"laufen\",\"meaning\":\"teči / delovati\",\"example\":\"Teče hitro.\"},{\"word\":\"gehen\",\"meaning\":\"iti peš\",\"example\":\"Grem domov.\"},{\"word\":\"fahren\",\"meaning\":\"voziti s prevozom\",\"example\":\"Vozim se z avtobusom.\"},{\"word\":\"funktionieren\",\"meaning\":\"delovati\",\"example\":\"To dobro deluje.\"}]","study.tip":"{\"text\":\"Atceries: kājas ātri → laufen; transports → fahren.\"}","study.important":"[\"laufen ni samo »teči«. Za film ali napravo lahko pomeni »iti« ali »delati«.\",\"Ich laufe pomeni gibanje peš, ne vožnja.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte laufen\|idx:357, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “skriet • darboties” un DE “laufen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "laufen",
  "lv": "teči • delovati",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "teči • delati",
    "explanation": [
      "Glavna ideja: laufen pomeni teči, vendar s aparati lahko pomeni delovati.",
      "Za osebo ali žival laufen pogosto pomeni teči ali hitro hoje.",
      "Za film, stroj ali program laufen pomeni, da se izvaja ali dogaja.",
      "Za gibanje po nogah se na ravni A1 najpogosteje primerja gehen in laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "teče zelo hitro."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "otroci tečejo v vrtu."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "film je že predvajan."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "stroj deluje dobro."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "teči / delovati",
        "example": "Teče hitro."
      },
      {
        "word": "gehen",
        "meaning": "iti peš",
        "example": "Grem domov."
      },
      {
        "word": "fahren",
        "meaning": "voziti s prevozom",
        "example": "Vozim se z avtobusom."
      },
      {
        "word": "funktionieren",
        "meaning": "delovati",
        "example": "To dobro deluje."
      }
    ],
    "tip": {
      "text": "Atceries: kājas ātri → laufen; transports → fahren."
    },
    "important": [
      "laufen ni samo »teči«. Za film ali napravo lahko pomeni »iti« ali »delati«.",
      "Ich laufe pomeni gibanje peš, ne vožnja."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laufen"
        ],
        "purple": [
          "skriet",
          "darboties",
          "iet"
        ],
        "green": [
          "cilvēku",
          "dzīvnieku",
          "film",
          "Galvenā",
          "program"
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
              "skrien"
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
              "skriet",
              "darboties"
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
              "braukt"
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
              "darboties"
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

## Finding 15

**Audit ID:** `LRB094-0015`
**Finding Stable ID:** `g2/a1/sl|laut|idx:358|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `laut|idx:358`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** skaļš
**DE reference (read-only):** laut
**CURRENT (captured scope):** {"lv":"glasen","study.translation":"glasen","study.explanation":"[\"Glavna ideja: Pridevnik z malo črko. Opisuje intenziteto — kako glasen je zvok ali govor.\",\"laut v glavnem pomeni: glasen zvok.\",\"Pogosto ga označuje: pridevnik.\",\"laut v glavnem pomeni: zvočni signal.\",\"Pogosto ga označuje: samostalnik (der).\",\"laut z malo črko je pridevnik — opisuje, kako glasen je zvok (Die Musik ist laut = glasba je glasna).\",\"der Laut z veliko črko in člankom der je samostalnik — pomeni zvok kot stvar ali signal (Der Laut ist schön = zvok je lep).\",\"Množina: die Laute.\"]","study.examples":"[{\"de\":\"Die Musik ist laut.\",\"lv\":\"Glasba je glasna.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"glasba je glasna.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"ne govorite tako glasno!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"to je zelo glasno.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"zvok je lep.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"slišim nek zvok.\"}]","study.tip":"[\"Small laut = glasen (pridevnik: ist laut). der Laut z veliko začetnico = zvok (samostalnik: ein Laut, der Laut).\",\"laut = zvok\"]","study.important":"[\"laut stoji z malo črko in brez članka — to je pridevnik.\",\"der Laut z veliko črko in člankom der je samostalnik.\",\"Množina: die Laute (jezikovni zvoki, zvočni signali).\",\"Nepravilno: Der Laut ist sehr. → Pravilno: Das ist sehr laut.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte laut\|idx:358, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “skaļš” un DE “laut” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "laut",
  "lv": "glasen",
  "level": "A1",
  "study": {
    "id": "a1-laut",
    "layout": "standardStudy",
    "translation": "glasen",
    "explanation": [
      "Glavna ideja: Pridevnik z malo črko. Opisuje intenziteto — kako glasen je zvok ali govor.",
      "laut v glavnem pomeni: glasen zvok.",
      "Pogosto ga označuje: pridevnik.",
      "laut v glavnem pomeni: zvočni signal.",
      "Pogosto ga označuje: samostalnik (der).",
      "laut z malo črko je pridevnik — opisuje, kako glasen je zvok (Die Musik ist laut = glasba je glasna).",
      "der Laut z veliko črko in člankom der je samostalnik — pomeni zvok kot stvar ali signal (Der Laut ist schön = zvok je lep).",
      "Množina: die Laute."
    ],
    "examples": [
      {
        "de": "Die Musik ist laut.",
        "lv": "Glasba je glasna."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "glasba je glasna."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "ne govorite tako glasno!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "to je zelo glasno."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "zvok je lep."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "slišim nek zvok."
      }
    ],
    "tip": [
      "Small laut = glasen (pridevnik: ist laut). der Laut z veliko začetnico = zvok (samostalnik: ein Laut, der Laut).",
      "laut = zvok"
    ],
    "important": [
      "laut stoji z malo črko in brez članka — to je pridevnik.",
      "der Laut z veliko črko in člankom der je samostalnik.",
      "Množina: die Laute (jezikovni zvoki, zvočni signali).",
      "Nepravilno: Der Laut ist sehr. → Pravilno: Das ist sehr laut."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laut"
        ],
        "purple": [
          "skaļa"
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
              "skaļa"
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
              "skaļa"
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
              "skaļi"
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
              "skaļi"
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
              "skaņa"
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
              "skaņu"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "skaņa"
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

## Finding 16

**Audit ID:** `LRB094-0016`
**Finding Stable ID:** `g2/a1/sl|Laut|idx:359|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `Laut|idx:359`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** skaņa
**DE reference (read-only):** Laut
**CURRENT (captured scope):** {"lv":"zvok","study.translation":"zvok","study.explanation":"[\"Glavna ideja: Samostalnik z членkom in velika črka. Pomeni zvok kot stvar, signal ali jezikovni zvok.\",\"der Laut v glavnem pomeni: glasen zvok.\",\"Pogosto ga označuje: pridevnik.\",\"der Laut v glavnem pomeni: zvočni signal.\",\"Pogosto ga označuje: samostalnik (der).\",\"laut z malo črko je pridevnik — opisuje, kako glasen je zvok (Die Musik ist laut = glasba je glasna).\",\"der Laut z veliko črko in člankom der je samostalnik — pomeni zvok kot stvar ali signal (Der Laut ist schön = zvok je lep).\",\"Množina: die Laute.\"]","study.examples":"[{\"de\":\"Der Laut ist schön.\",\"lv\":\"Zvok je lep.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"glasba je glasna.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"ne govorite tako glasno!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"to je zelo glasno.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"zvok je lep.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"slišim nek zvok.\"}]","study.tip":"[\"Small laut = glasen (pridevnik: ist laut). der Laut z veliko začetnico = zvok (samostalnik: ein Laut, der Laut).\",\"der Laut = zvok\"]","study.important":"[\"laut stoji z malo črko in brez članka — to je pridevnik.\",\"der Laut z veliko črko in člankom der je samostalnik.\",\"Množina: die Laute (jezikovni zvoki, zvočni signali).\",\"Nepravilno: Der Laut ist sehr. → Pravilno: Das ist sehr laut.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Laut\|idx:359, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “skaņa” un DE “Laut” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
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
  "lv": "zvok",
  "level": "A1",
  "study": {
    "id": "a1-laut-study",
    "layout": "standardStudy",
    "translation": "zvok",
    "explanation": [
      "Glavna ideja: Samostalnik z членkom in velika črka. Pomeni zvok kot stvar, signal ali jezikovni zvok.",
      "der Laut v glavnem pomeni: glasen zvok.",
      "Pogosto ga označuje: pridevnik.",
      "der Laut v glavnem pomeni: zvočni signal.",
      "Pogosto ga označuje: samostalnik (der).",
      "laut z malo črko je pridevnik — opisuje, kako glasen je zvok (Die Musik ist laut = glasba je glasna).",
      "der Laut z veliko črko in člankom der je samostalnik — pomeni zvok kot stvar ali signal (Der Laut ist schön = zvok je lep).",
      "Množina: die Laute."
    ],
    "examples": [
      {
        "de": "Der Laut ist schön.",
        "lv": "Zvok je lep."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "glasba je glasna."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "ne govorite tako glasno!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "to je zelo glasno."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "zvok je lep."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "slišim nek zvok."
      }
    ],
    "tip": [
      "Small laut = glasen (pridevnik: ist laut). der Laut z veliko začetnico = zvok (samostalnik: ein Laut, der Laut).",
      "der Laut = zvok"
    ],
    "important": [
      "laut stoji z malo črko in brez članka — to je pridevnik.",
      "der Laut z veliko črko in člankom der je samostalnik.",
      "Množina: die Laute (jezikovni zvoki, zvočni signali).",
      "Nepravilno: Der Laut ist sehr. → Pravilno: Das ist sehr laut."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "der Laut",
          "laut"
        ],
        "purple": [
          "skaņa",
          "skaņas"
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
              "Zvok"
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
              "skaļa"
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
              "skaļi"
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
              "skaļi"
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
              "skaņa"
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
              "skaņu"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "skaņa"
          ]
        }
      ],
      "important": [
        {}
      ]
    }
  }
}
```

---

## Finding 17

**Audit ID:** `LRB094-0017`
**Finding Stable ID:** `g2/a1/sl|legen|idx:363|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `legen|idx:363`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** nolikt
**DE reference (read-only):** legen
**CURRENT (captured scope):** {"lv":"položiti","study.translation":"položiti","study.explanation":"[\"Glavna ideja: legen pomeni položiti kaj vodoravno ali na površino.\",\"legen se uporablja, ko sam premakneš stvar in jo položiš na mizo, posteljo ali drugo površino.\",\"Razlikuje se od liegen, kar pomeni, da nekaj že leži oz.\",\"Na ravni A1 je najpomembnejša razlika: legen = ležati, liegen = ležati.\"]","study.examples":"[{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"položim knjigo na mizo.\"},{\"de\":\"Leg den Schlüssel hierhin.\",\"lv\":\"položi ključ sem.\"},{\"de\":\"Sie legt das Kind ins Bett.\",\"lv\":\"ona položi otroka v posteljo.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"knjiga je na mizi.\"}]","study.comparison":"[{\"word\":\"legen\",\"meaning\":\"položiti\",\"example\":\"Položim knjigo na mizo.\"},{\"word\":\"liegen\",\"meaning\":\"biti • ležati\",\"example\":\"Knjiga leži na mizi.\"},{\"word\":\"stellen\",\"meaning\":\"položiti pokončno\",\"example\":\"Postavim steklenico na mizo.\"},{\"word\":\"setzen\",\"meaning\":\"usesti / usesti si\",\"example\":\"Sedem si.\"}]","study.tip":"{\"text\":\"Atceries: tu noliec → legen; lieta jau atrodas → liegen.\"}","study.important":"[\"legen in liegen nista ista stvar.\",\"Ich lege das Buch = jaz položim knjigo. Das Buch liegt = knjiga je.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte legen\|idx:363, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “nolikt” un DE “legen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "legen",
  "lv": "položiti",
  "level": "A1",
  "study": {
    "id": "a1-legen",
    "layout": "standardStudy",
    "translation": "položiti",
    "explanation": [
      "Glavna ideja: legen pomeni položiti kaj vodoravno ali na površino.",
      "legen se uporablja, ko sam premakneš stvar in jo položiš na mizo, posteljo ali drugo površino.",
      "Razlikuje se od liegen, kar pomeni, da nekaj že leži oz.",
      "Na ravni A1 je najpomembnejša razlika: legen = ležati, liegen = ležati."
    ],
    "examples": [
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "položim knjigo na mizo."
      },
      {
        "de": "Leg den Schlüssel hierhin.",
        "lv": "položi ključ sem."
      },
      {
        "de": "Sie legt das Kind ins Bett.",
        "lv": "ona položi otroka v posteljo."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "knjiga je na mizi."
      }
    ],
    "comparison": [
      {
        "word": "legen",
        "meaning": "položiti",
        "example": "Položim knjigo na mizo."
      },
      {
        "word": "liegen",
        "meaning": "biti • ležati",
        "example": "Knjiga leži na mizi."
      },
      {
        "word": "stellen",
        "meaning": "položiti pokončno",
        "example": "Postavim steklenico na mizo."
      },
      {
        "word": "setzen",
        "meaning": "usesti / usesti si",
        "example": "Sedem si."
      }
    ],
    "tip": {
      "text": "Atceries: tu noliec → legen; lieta jau atrodas → liegen."
    },
    "important": [
      "legen in liegen nista ista stvar.",
      "Ich lege das Buch = jaz položim knjigo. Das Buch liegt = knjiga je."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "legen",
          "liegen"
        ],
        "purple": [
          "nolikt",
          "Galvenā",
          "guļ"
        ],
        "yellow": [
          "lietu",
          "galda",
          "gultas",
          "virsmas"
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
              "nolieku"
            ],
            "yellow": [
              "grāmatu",
              "galda"
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
              "noliec"
            ],
            "yellow": [
              "atslēgu"
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
              "noliek"
            ],
            "green": [
              "bērnu"
            ],
            "yellow": [
              "gultā"
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
              "atrodas"
            ],
            "yellow": [
              "Grāmata",
              "galda"
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
              "nolikt"
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
              "atrasties",
              "gulēt"
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
              "stāvus"
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
              "apsēsties"
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
            "noliec"
          ],
          "red": [
            "liegen",
            "atrodas"
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
            "nolieku"
          ],
          "red": [
            "liegt",
            "atrodas"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB094-0018`
**Finding Stable ID:** `g2/a1/sl|leise|idx:368|study.examples[3].lv|REGISTER_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `leise|idx:368`
**Field / path:** `study.examples[3].lv`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** MEDIUM
**Category:** STYLE_FLUENCY_OR_REGISTER
**Raw category:** REGISTER_MISMATCH
**LV source (read-only):** kluss
**DE reference (read-only):** leise
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: sl kartītei leise\|idx:368 ceļš study.examples[3].lv production datos neeksistē; LV “kluss” ir jāizvērtē kopā ar shēmas OWNER, pirms var izveidot jaunu lauku vai noraidīt finding.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "leise",
  "lv": "tiho",
  "level": "A1",
  "study": {
    "id": "a1-leise-study",
    "layout": "standardStudy",
    "translation": "tiho",
    "explanation": [
      "Glavna ideja: Tiho ali z malo glasnosti.",
      "leise v glavnem pomeni: majhna glasnost.",
      "Pogosto ga označuje: zvok/glas/glasba.",
      "leise opisuje majhno glasnost ali tih glas/zvok."
    ],
    "examples": [
      {
        "de": "Bitte sei leise.",
        "lv": "Prosim bodi tiho."
      },
      {
        "de": "Bitte sei leise.",
        "lv": "prosim bodi tiho."
      },
      {
        "de": "Die Musik ist leise.",
        "lv": "glasba je tiha."
      },
      {
        "de": "Sprich bitte leise.",
        "lv": "prosim, govorite tiho."
      }
    ],
    "tip": [
      "leise = tiho",
      "Uporabite leise, kadar je kontekst primeren za ta pomen."
    ],
    "important": [
      "leise = tiho v zvočnem smislu.",
      "leise = glasnost.",
      "Tiho ali z malo glasnosti."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "leise"
        ],
        "purple": [
          "kluss"
        ],
        "orange": [
          "kluss"
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
              "Prosim"
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
              "kluss"
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
              "klusa"
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
              "klusi"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "kluss"
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

## Finding 19

**Audit ID:** `LRB094-0019`
**Finding Stable ID:** `g2/a1/sl|noch|idx:451|lv and study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `noch|idx:451`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vēl
**DE reference (read-only):** noch
**CURRENT (captured scope):** {"lv":"še","study.translation":"še","study.explanation":"[\"Glavna ideja: Kaj se še dogaja ali še ni konec.\",\"noch v glavnem pomeni: kaj se še dogaja.\",\"Pogosto opisuje: nadaljevanje ali nedokončano stanje.\",\"noch pomeni še: kaj se še dogaja ali še ni konec.\"]","study.examples":"[{\"de\":\"Ich bin noch zu Hause.\",\"lv\":\"Še vedno sem doma.\"},{\"de\":\"Ich bin noch zu Hause.\",\"lv\":\"še vedno sem doma.\"},{\"de\":\"Bist du noch da?\",\"lv\":\"ali si še tukaj?\"}]","study.tip":"[\"Nekaj ​​se še dogaja ali še ni konec.\",\"Uporabite noch, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"noch = še.\",\"Nekaj ​​se še dogaja ali še ni konec.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte noch\|idx:451, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “vēl” un DE “noch” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "noch",
  "lv": "še",
  "level": "A1",
  "study": {
    "id": "a1-noch-study",
    "layout": "standardStudy",
    "translation": "še",
    "explanation": [
      "Glavna ideja: Kaj se še dogaja ali še ni konec.",
      "noch v glavnem pomeni: kaj se še dogaja.",
      "Pogosto opisuje: nadaljevanje ali nedokončano stanje.",
      "noch pomeni še: kaj se še dogaja ali še ni konec."
    ],
    "examples": [
      {
        "de": "Ich bin noch zu Hause.",
        "lv": "Še vedno sem doma."
      },
      {
        "de": "Ich bin noch zu Hause.",
        "lv": "še vedno sem doma."
      },
      {
        "de": "Bist du noch da?",
        "lv": "ali si še tukaj?"
      }
    ],
    "tip": [
      "Nekaj ​​se še dogaja ali še ni konec.",
      "Uporabite noch, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "noch = še.",
      "Nekaj ​​se še dogaja ali še ni konec."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "Vēl"
        ],
        "purple": [
          "vēl"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "noch",
              "noch"
            ]
          },
          "lv": {
            "purple": [
              "vedno"
            ]
          }
        },
        {
          "de": {
            "green": [
              "noch",
              "noch"
            ]
          },
          "lv": {
            "purple": [
              "vēl"
            ]
          }
        },
        {
          "de": {
            "green": [
              "noch",
              "noch"
            ]
          },
          "lv": {
            "purple": [
              "vēl"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Nekaj"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "noch"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 20

**Audit ID:** `LRB094-0020`
**Finding Stable ID:** `g2/a1/sl|nur|idx:456|lv and study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `nur|idx:456`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** tikai • vienīgi
**DE reference (read-only):** nur
**CURRENT (captured scope):** {"lv":"samo • edino","study.translation":"samo • edino","study.explanation":"[\"Glavna ideja: Omejuje količino, število ljudi, izbiro ali možnosti.\",\"nur v glavnem pomeni: omejena količina ali izbira.\",\"Pogosto opisuje: koliko, kaj točno ali kdo edini.\",\"nur pomeni samo, edino, nič več: to omejuje količino ali izbiro.\"]","study.examples":"[{\"de\":\"Ich habe nur zehn Euro.\",\"lv\":\"Imam samo deset evrov.\"},{\"de\":\"Ich habe nur zehn Euro.\",\"lv\":\"imam samo deset evrov.\"},{\"de\":\"Nur du kannst mir helfen.\",\"lv\":\"samo ti mi lahko pomogaš.\"},{\"de\":\"Ich möchte nur Kaffee.\",\"lv\":\"želim samo kavo.\"},{\"de\":\"Ich habe nur acht Euro.\",\"lv\":\"imam samo osem evrov.\"}]","study.tip":"[\"Omejuje količino, število ljudi, izbiro ali možnosti.\",\"Uporablja se le, če kontekst ustreza temu pomenu.\"]","study.important":"[\"Slovenski »samo« v nemščini ni vedno nur.\",\"nur = samo / edino.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte nur\|idx:456, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “tikai • vienīgi” un DE “nur” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nur",
  "lv": "samo • edino",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "samo • edino",
    "explanation": [
      "Glavna ideja: Omejuje količino, število ljudi, izbiro ali možnosti.",
      "nur v glavnem pomeni: omejena količina ali izbira.",
      "Pogosto opisuje: koliko, kaj točno ali kdo edini.",
      "nur pomeni samo, edino, nič več: to omejuje količino ali izbiro."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Imam samo deset evrov."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "imam samo deset evrov."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "samo ti mi lahko pomogaš."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "želim samo kavo."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "imam samo osem evrov."
      }
    ],
    "tip": [
      "Omejuje količino, število ljudi, izbiro ali možnosti.",
      "Uporablja se le, če kontekst ustreza temu pomenu."
    ],
    "important": [
      "Slovenski »samo« v nemščini ni vedno nur.",
      "nur = samo / edino."
    ],
    "sectionAccents": {
      "explanation": {
        "orange": [
          "nur",
          "nur"
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
              "Imam"
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
              "tikai"
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

## Finding 21

**Audit ID:** `LRB094-0021`
**Finding Stable ID:** `g2/a1/sl|ob|idx:457|lv and study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `ob|idx:457`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vai
**DE reference (read-only):** ob
**CURRENT (captured scope):** {"lv":"ali","study.translation":"ali","study.explanation":"[\"Glavna ideja: ob uvede posredno vprašanje in v slovenščini pogosto pomeni ali.\",\"ob se uporablja za besedami kot fragen, wissen, sehen, sagen, ko ni neposrednega vprašanja.\",\"Ob se običajno ne uporablja v neposrednem vprašanju v nemščini.\",\"Na ravni A1 je pomembno razlikovati ob od oder.\"]","study.examples":"[{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"ne vem, ali bo prišel.\"},{\"de\":\"Sie fragt, ob du Zeit hast.\",\"lv\":\"vpraša, ali imaš čas.\"},{\"de\":\"Sag mir, ob das stimmt.\",\"lv\":\"povej mi, ali je to res.\"},{\"de\":\"Kommst du heute oder morgen?\",\"lv\":\"ali boš prišel danes ali jutri?\"}]","study.comparison":"[{\"word\":\"ob\",\"meaning\":\"ali v posrednem vprašanju\",\"example\":\"Ne vem, ali pride.\"},{\"word\":\"oder\",\"meaning\":\"ali izbiro med možnostmi\",\"example\":\"Kava ali čaj?\"},{\"word\":\"wenn\",\"meaning\":\"če / ko\",\"example\":\"Če imaš čas...\"},{\"word\":\"dass\",\"meaning\":\"da\",\"example\":\"Vem, da pride.\"}]","study.tip":"{\"text\":\"Atceries: nezinu, vai... → ob; kafija vai tēja → oder.\"}","study.important":"[\"ob ni navadna oblika »ali« med dvema stvarema.\",\"Kaffee ali Tee? oder se uporablja namesto ob.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte ob\|idx:457, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “vai” un DE “ob” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ob",
  "lv": "ali",
  "level": "A1",
  "study": {
    "id": "a1-ob",
    "layout": "standardStudy",
    "translation": "ali",
    "explanation": [
      "Glavna ideja: ob uvede posredno vprašanje in v slovenščini pogosto pomeni ali.",
      "ob se uporablja za besedami kot fragen, wissen, sehen, sagen, ko ni neposrednega vprašanja.",
      "Ob se običajno ne uporablja v neposrednem vprašanju v nemščini.",
      "Na ravni A1 je pomembno razlikovati ob od oder."
    ],
    "examples": [
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "ne vem, ali bo prišel."
      },
      {
        "de": "Sie fragt, ob du Zeit hast.",
        "lv": "vpraša, ali imaš čas."
      },
      {
        "de": "Sag mir, ob das stimmt.",
        "lv": "povej mi, ali je to res."
      },
      {
        "de": "Kommst du heute oder morgen?",
        "lv": "ali boš prišel danes ali jutri?"
      }
    ],
    "comparison": [
      {
        "word": "ob",
        "meaning": "ali v posrednem vprašanju",
        "example": "Ne vem, ali pride."
      },
      {
        "word": "oder",
        "meaning": "ali izbiro med možnostmi",
        "example": "Kava ali čaj?"
      },
      {
        "word": "wenn",
        "meaning": "če / ko",
        "example": "Če imaš čas..."
      },
      {
        "word": "dass",
        "meaning": "da",
        "example": "Vem, da pride."
      }
    ],
    "tip": {
      "text": "Atceries: nezinu, vai... → ob; kafija vai tēja → oder."
    },
    "important": [
      "ob ni navadna oblika »ali« med dvema stvarema.",
      "Kaffee ali Tee? oder se uporablja namesto ob."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ob",
          "oder"
        ],
        "purple": [
          "vai",
          "netiešu jautājumu",
          "Tiešā jautājumā"
        ],
        "green": [
          "fragen",
          "wissen",
          "sehen",
          "sagen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "ob"
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
              "ob"
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
              "ob"
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
            "red": [
              "oder"
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
            "blue": [
              "ob"
            ]
          }
        },
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
            "red": [
              "oder"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wenn"
            ]
          },
          "meaning": {
            "purple": [
              "ja",
              "kad"
            ]
          },
          "example": {
            "yellow": [
              "Wenn"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dass"
            ]
          },
          "meaning": {
            "purple": [
              "ka"
            ]
          },
          "example": {
            "green": [
              "dass"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "ob"
          ],
          "purple": [
            "nezinu, vai"
          ],
          "red": [
            "oder",
            "kafija vai tēja"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "ob"
          ]
        },
        {
          "red": [
            "oder"
          ],
          "blue": [
            "ob"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 22

**Audit ID:** `LRB094-0022`
**Finding Stable ID:** `g2/a1/sl|oder|idx:459|lv and study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `oder|idx:459`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vai • jeb
**DE reference (read-only):** oder
**CURRENT (captured scope):** {"lv":"ali • ali pa","study.translation":"ali • ali pa","study.explanation":"[\"Glavna ideja: oder se uporablja, ko se odločaš med dvema ali več možnostmi.\",\"V slovenščini oder najpogosteje pomeni ali.\",\"Ni isto kot ob, ki uvaja posredno vprašanje.\",\"V pogovorih je oder lahko tudi na koncu stavka: Du kommst, oder?\"]","study.examples":"[{\"de\":\"Kaffee oder Tee?\",\"lv\":\"kavo ali čaj?\"},{\"de\":\"Heute oder morgen?\",\"lv\":\"danes ali jutri?\"},{\"de\":\"Willst du Pizza oder Salat?\",\"lv\":\"ali hočeš pico ali solato?\"},{\"de\":\"Du kommst, oder?\",\"lv\":\"boš prišel, ali ne?\"}]","study.comparison":"[{\"word\":\"oder\",\"meaning\":\"ali izbiro\",\"example\":\"Kava ali čaj?\"},{\"word\":\"ob\",\"meaning\":\"ali v posrednem vprašanju\",\"example\":\"Ne vem, ali pride.\"},{\"word\":\"und\",\"meaning\":\"in\",\"example\":\"Kava in tort.\"},{\"word\":\"aber\",\"meaning\":\"ampak\",\"example\":\"Pridem, a kasneje.\"}]","study.tip":"{\"text\":\"Atceries: izvēle starp variantiem → oder.\"}","study.important":"[\"oder se uporablja za izbiro: Kaffee oder Tee.\",\"Pri posrednem vprašanju je \\\"ali\\\" običajno ob.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte oder\|idx:459, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “vai • jeb” un DE “oder” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "oder",
  "lv": "ali • ali pa",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "ali • ali pa",
    "explanation": [
      "Glavna ideja: oder se uporablja, ko se odločaš med dvema ali več možnostmi.",
      "V slovenščini oder najpogosteje pomeni ali.",
      "Ni isto kot ob, ki uvaja posredno vprašanje.",
      "V pogovorih je oder lahko tudi na koncu stavka: Du kommst, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "kavo ali čaj?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "danes ali jutri?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "ali hočeš pico ali solato?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "boš prišel, ali ne?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "ali izbiro",
        "example": "Kava ali čaj?"
      },
      {
        "word": "ob",
        "meaning": "ali v posrednem vprašanju",
        "example": "Ne vem, ali pride."
      },
      {
        "word": "und",
        "meaning": "in",
        "example": "Kava in tort."
      },
      {
        "word": "aber",
        "meaning": "ampak",
        "example": "Pridem, a kasneje."
      }
    ],
    "tip": {
      "text": "Atceries: izvēle starp variantiem → oder."
    },
    "important": [
      "oder se uporablja za izbiro: Kaffee oder Tee.",
      "Pri posrednem vprašanju je \"ali\" običajno ob."
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
          "Galvenā"
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
              "vai ne"
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
              "bet"
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
            "Pri"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB094-0023`
**Finding Stable ID:** `g2/a1/sl|passen|idx:471|lv and study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `passen|idx:471`
**Field / path:** `lv and study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** derēt • piestāvēt
**DE reference (read-only):** passen
**CURRENT (captured scope):** {"lv":"ustrezati • primeren biti","study.translation":"ustrezati • primeren biti","study.explanation":"[\"Glavna ideja: passen pomeni ustrezati, ustrezati ali biti primeren.\",\"Za oblačila passen pogosto pomeni ustrezati velikosti.\",\"Za barve ali slog passen pomeni ustrezati.\",\"Pogosta fraza je Das passt. = To drži.\"]","study.examples":"[{\"de\":\"Die Jacke passt mir.\",\"lv\":\"jakna mi drži.\"},{\"de\":\"Das Kleid passt gut.\",\"lv\":\"obleka drži dobro.\"},{\"de\":\"Die Farbe passt zu dir.\",\"lv\":\"ta barva ti pristoji.\"},{\"de\":\"Das passt.\",\"lv\":\"to drži.\"}]","study.comparison":"[{\"word\":\"passen\",\"meaning\":\"ustrezati / primeren biti\",\"example\":\"Jakna mi je primerna.\"},{\"word\":\"stehen\",\"meaning\":\"primeren biti / ustrezati\",\"example\":\"Rdeča ti lepo stoji.\"},{\"word\":\"geeignet sein\",\"meaning\":\"biti primeren\",\"example\":\"To je primerno.\"},{\"word\":\"funktionieren\",\"meaning\":\"delati\",\"example\":\"To deluje.\"}]","study.tip":"{\"text\":\"Atceries: Das passt. = Tas der.\"}","study.important":"[\"passen ni samo za oblačila.\",\"Prav tako pomeni, da čas, načrt ali rešitev drži.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte passen\|idx:471, bet lv and study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “derēt • piestāvēt” un DE “passen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "passen",
  "lv": "ustrezati • primeren biti",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "ustrezati • primeren biti",
    "explanation": [
      "Glavna ideja: passen pomeni ustrezati, ustrezati ali biti primeren.",
      "Za oblačila passen pogosto pomeni ustrezati velikosti.",
      "Za barve ali slog passen pomeni ustrezati.",
      "Pogosta fraza je Das passt. = To drži."
    ],
    "examples": [
      {
        "de": "Die Jacke passt mir.",
        "lv": "jakna mi drži."
      },
      {
        "de": "Das Kleid passt gut.",
        "lv": "obleka drži dobro."
      },
      {
        "de": "Die Farbe passt zu dir.",
        "lv": "ta barva ti pristoji."
      },
      {
        "de": "Das passt.",
        "lv": "to drži."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "ustrezati / primeren biti",
        "example": "Jakna mi je primerna."
      },
      {
        "word": "stehen",
        "meaning": "primeren biti / ustrezati",
        "example": "Rdeča ti lepo stoji."
      },
      {
        "word": "geeignet sein",
        "meaning": "biti primeren",
        "example": "To je primerno."
      },
      {
        "word": "funktionieren",
        "meaning": "delati",
        "example": "To deluje."
      }
    ],
    "tip": {
      "text": "Atceries: Das passt. = Tas der."
    },
    "important": [
      "passen ni samo za oblačila.",
      "Prav tako pomeni, da čas, načrt ali rešitev drži."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "passen",
          "Das passt"
        ],
        "purple": [
          "Glavna",
          "Glavna",
          "Glavna"
        ],
        "yellow": [
          "Glavna",
          "Glavna",
          "Glavna"
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
              "tas der"
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
              "darboties"
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

## Finding 24

**Audit ID:** `LRB094-0024`
**Finding Stable ID:** `g2/a1/sl|probieren|idx:482|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `probieren|idx:482`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** izmēģināt • nogaršot
**DE reference (read-only):** probieren
**CURRENT (captured scope):** {"lv":"poskusiti • okusiti","study.translation":"poskusiti • okusiti","study.explanation":"[\"Glavna ideja: probieren pomeni poskusiti ali okusiti.\",\"Če govoriš o hrani ali pijači, probieren pogosto pomeni okusiti.\",\"Ko gre za dejanje, metodo ali stvar, probieren pomeni poskusiti.\",\"To ni isto kot prüfen, kar pomeni preverjati bolj skrbno.\"]","study.examples":"[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"preizkusi juho!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"želim okusiti torto.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"poskušamo novo metodo.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"ali lahko primerjam jaknino?\"}]","study.comparison":"[{\"word\":\"probieren\",\"meaning\":\"poskusiti / okusiti\",\"example\":\"Poskusi juho!\"},{\"word\":\"versuchen\",\"meaning\":\"poskusiti\",\"example\":\"Poskušam.\"},{\"word\":\"prüfen\",\"meaning\":\"preveri\",\"example\":\"Preveriš račun.\"},{\"word\":\"anprobieren\",\"meaning\":\"primerjati\",\"example\":\"Pribiram si jakno.\"}]","study.tip":"{\"text\":\"Atceries: ēdiens → probieren = nogaršot.\"}","study.important":"[\"probieren ni glavna beseda za uradno preverjanje.\",\"Preverjanje dokumenta ali računa je običajno prüfen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte probieren\|idx:482, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “izmēģināt • nogaršot” un DE “probieren” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "probieren",
  "lv": "poskusiti • okusiti",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "poskusiti • okusiti",
    "explanation": [
      "Glavna ideja: probieren pomeni poskusiti ali okusiti.",
      "Če govoriš o hrani ali pijači, probieren pogosto pomeni okusiti.",
      "Ko gre za dejanje, metodo ali stvar, probieren pomeni poskusiti.",
      "To ni isto kot prüfen, kar pomeni preverjati bolj skrbno."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "preizkusi juho!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "želim okusiti torto."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "poskušamo novo metodo."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "ali lahko primerjam jaknino?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "poskusiti / okusiti",
        "example": "Poskusi juho!"
      },
      {
        "word": "versuchen",
        "meaning": "poskusiti",
        "example": "Poskušam."
      },
      {
        "word": "prüfen",
        "meaning": "preveri",
        "example": "Preveriš račun."
      },
      {
        "word": "anprobieren",
        "meaning": "primerjati",
        "example": "Pribiram si jakno."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → probieren = nogaršot."
    },
    "important": [
      "probieren ni glavna beseda za uradno preverjanje.",
      "Preverjanje dokumenta ali računa je običajno prüfen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "probieren",
          "prüfen"
        ],
        "purple": [
          "Glavna",
          "nogaršot",
          "pārbaudīt"
        ],
        "yellow": [
          "ēdienu",
          "dzērienu",
          "metodo",
          "Glavna"
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
              "izmēģinām"
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
              "izmēģināt",
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
              "mēģināt"
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
              "pārbaudīt"
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
              "pielaikot"
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
            "Preverjanje"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 25

**Audit ID:** `LRB094-0025`
**Finding Stable ID:** `g2/a1/sl|Reis|idx:496|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `Reis|idx:496`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** rīsi
**DE reference (read-only):** Reis
**CURRENT (captured scope):** {"lv":"riž","study.translation":"riž","study.explanation":"Vācu valodā vārdu „der Reis” lieto tikai vienskaitlī, tāpēc teikumā darbības vārdam jābūt vienskaitļa formā (piemēram, „ist”, nevis „sind”). Latviski tomēr bieži saka „rīsi”.","study.examples":"[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"riž je pripravljen.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"jem riž.\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"ali pripravljaš riž?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"riž je okusno.\"}]","study.tip":"{\"text\":\"Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi.\"}","study.important":"[\"der Reis — v nemščini samo ednina (Der Reis ist..., ni *sind).\",\"V latvijskem prevodu se pogosto uporablja množina: riž je pripravljen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Reis\|idx:496, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “rīsi” un DE “Reis” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Reis",
  "de_article": "der",
  "lv": "riž",
  "level": "A1",
  "study": {
    "id": "a1-reis",
    "layout": "standardStudy",
    "translation": "riž",
    "explanation": "Vācu valodā vārdu „der Reis” lieto tikai vienskaitlī, tāpēc teikumā darbības vārdam jābūt vienskaitļa formā (piemēram, „ist”, nevis „sind”). Latviski tomēr bieži saka „rīsi”.",
    "examples": [
      {
        "de": "Der Reis ist fertig.",
        "lv": "riž je pripravljen."
      },
      {
        "de": "Ich esse Reis.",
        "lv": "jem riž."
      },
      {
        "de": "Kochst du Reis?",
        "lv": "ali pripravljaš riž?"
      },
      {
        "de": "Der Reis schmeckt gut.",
        "lv": "riž je okusno."
      }
    ],
    "tip": {
      "text": "Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi."
    },
    "important": [
      "der Reis — v nemščini samo ednina (Der Reis ist..., ni *sind).",
      "V latvijskem prevodu se pogosto uporablja množina: riž je pripravljen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Reis",
          "ist"
        ],
        "purple": [
          "vienskaitlī",
          "rīsi"
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
              "rīsi"
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
              "rīsus"
            ]
          }
        }
      ],
      "tip": {
        "blue": [
          "der Reis"
        ],
        "purple": [
          "vienskaitlis",
          "rīsi"
        ]
      }
    }
  }
}
```

---

## Finding 26

**Audit ID:** `LRB094-0026`
**Finding Stable ID:** `g2/a1/sl|sagen|idx:505|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `sagen|idx:505`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** teikt
**DE reference (read-only):** sagen
**CURRENT (captured scope):** {"lv":"reči","study.translation":"reči","study.explanation":"[\"Glavna misel: Povejte določeno misel, besedo ali stavek.\",\"sagen v glavnem pomeni: povedati konkretno misel.\",\"Pogosto opisuje: besede/stavke.\",\"sagen se uporablja za specifičen govorjen besedilo.\"]","study.examples":"[{\"de\":\"Was hast du gesagt?\",\"lv\":\"kaj si rekel?\"}]","study.comparison":"[{\"word\":\"sagen\",\"meaning\":\"povedati (specifičen tekst)\",\"example\":\"Was hast du gesagt? – Kaj si rekel\"},{\"word\":\"sprechen\",\"meaning\":\"govoriti (jezik, pogovarjati se)\",\"example\":\"Ich spreche Deutsch. – Govorim nemščino.\"}]","study.tip":"[\"sagen = reči\",\"Uporabite sagen, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"sagen = povedati.\",\"Za posredovanje določene misli, besede ali stavka.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte sagen\|idx:505, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “teikt” un DE “sagen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sagen",
  "lv": "reči",
  "level": "A1",
  "study": {
    "id": "a1-sagen-study",
    "layout": "standardStudy",
    "translation": "reči",
    "explanation": [
      "Glavna misel: Povejte določeno misel, besedo ali stavek.",
      "sagen v glavnem pomeni: povedati konkretno misel.",
      "Pogosto opisuje: besede/stavke.",
      "sagen se uporablja za specifičen govorjen besedilo."
    ],
    "examples": [
      {
        "de": "Was hast du gesagt?",
        "lv": "kaj si rekel?"
      }
    ],
    "comparison": [
      {
        "word": "sagen",
        "meaning": "povedati (specifičen tekst)",
        "example": "Was hast du gesagt? – Kaj si rekel"
      },
      {
        "word": "sprechen",
        "meaning": "govoriti (jezik, pogovarjati se)",
        "example": "Ich spreche Deutsch. – Govorim nemščino."
      }
    ],
    "tip": [
      "sagen = reči",
      "Uporabite sagen, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "sagen = povedati.",
      "Za posredovanje določene misli, besede ali stavka."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sagen"
        ],
        "purple": [
          "teikt"
        ],
        "green": [
          "Teikt"
        ]
      },
      "examples": [
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {
          "purple": [
            "teikt"
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

## Finding 27

**Audit ID:** `LRB094-0027`
**Finding Stable ID:** `g2/a1/sl|schauen|idx:510|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `schauen|idx:510`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** skatīties
**DE reference (read-only):** schauen
**CURRENT (captured scope):** {"lv":"gledati","study.translation":"gledati","study.explanation":"[\"Glavna ideja: Gledati ali gledati aktivno.\",\"schauen v glavnem pomeni: aktivno gledati.\",\"Pogosto opisuje: dejanje.\",\"schauen pomeni aktivno gledati.\"]","study.examples":"[{\"de\":\"Ich schaue fern.\",\"lv\":\"Gledam televizijo.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"gledamo skozi okno.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"gledam televizijo.\"}]","study.comparison":"[{\"word\":\"schauen\",\"meaning\":\"gledati (aktivno)\",\"example\":\"Ich schaue aus dem Fenster. – Gledam skozi okno.\"},{\"word\":\"sehen\",\"meaning\":\"videti (brez namere)\",\"example\":\"Ich sehe dich. – Vidim te\"}]","study.tip":"[\"schauen = gledati\",\"Uporabite schauen, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"schauen = gledati.\",\"Aktivno gledati ali pogledati.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte schauen\|idx:510, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “skatīties” un DE “schauen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schauen",
  "lv": "gledati",
  "level": "A1",
  "study": {
    "id": "a1-schauen-study",
    "layout": "standardStudy",
    "translation": "gledati",
    "explanation": [
      "Glavna ideja: Gledati ali gledati aktivno.",
      "schauen v glavnem pomeni: aktivno gledati.",
      "Pogosto opisuje: dejanje.",
      "schauen pomeni aktivno gledati."
    ],
    "examples": [
      {
        "de": "Ich schaue fern.",
        "lv": "Gledam televizijo."
      },
      {
        "de": "Wir schauen aus dem Fenster.",
        "lv": "gledamo skozi okno."
      },
      {
        "de": "Ich schaue fern.",
        "lv": "gledam televizijo."
      }
    ],
    "comparison": [
      {
        "word": "schauen",
        "meaning": "gledati (aktivno)",
        "example": "Ich schaue aus dem Fenster. – Gledam skozi okno."
      },
      {
        "word": "sehen",
        "meaning": "videti (brez namere)",
        "example": "Ich sehe dich. – Vidim te"
      }
    ],
    "tip": [
      "schauen = gledati",
      "Uporabite schauen, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "schauen = gledati.",
      "Aktivno gledati ali pogledati."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "schauen"
        ],
        "purple": [
          "skatīties"
        ],
        "orange": [
          "skatīties"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "schaue"
            ]
          },
          "lv": {}
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
              "skatāmies"
            ]
          }
        },
        {
          "de": {
            "green": [
              "schaue"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "purple": [
            "skatīties"
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

## Finding 28

**Audit ID:** `LRB094-0028`
**Finding Stable ID:** `g2/a1/sl|schon|idx:521|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `schon|idx:521`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** jau
**DE reference (read-only):** schon
**CURRENT (captured scope):** {"lv":"že","study.translation":"že","study.explanation":"[\"Glavna ideja: Nekaj ​​se je že zgodilo ali že velja.\",\"schon v glavnem pomeni: kaj se je že zgodilo ali že velja.\",\"Pogosto opisuje: pretekli dejstvi ali obstoječe stanje.\",\"schon pomeni že: kaj se je že zgodilo ali že velja.\"]","study.examples":"[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"že sem doma.\"}]","study.tip":"[\"Kaj se je že zgodilo ali že velja.\",\"Uporabite schon, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"schon = že.\",\"Kaj se je že zgodilo ali že velja.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte schon\|idx:521, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “jau” un DE “schon” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schon",
  "lv": "že",
  "level": "A1",
  "study": {
    "id": "a1-schon-study",
    "layout": "standardStudy",
    "translation": "že",
    "explanation": [
      "Glavna ideja: Nekaj ​​se je že zgodilo ali že velja.",
      "schon v glavnem pomeni: kaj se je že zgodilo ali že velja.",
      "Pogosto opisuje: pretekli dejstvi ali obstoječe stanje.",
      "schon pomeni že: kaj se je že zgodilo ali že velja."
    ],
    "examples": [
      {
        "de": "Ich bin schon zu Hause.",
        "lv": "že sem doma."
      }
    ],
    "tip": [
      "Kaj se je že zgodilo ali že velja.",
      "Uporabite schon, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "schon = že.",
      "Kaj se je že zgodilo ali že velja."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "schon",
          "schon"
        ],
        "purple": [
          "jau"
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
              "jau"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "jau"
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

## Finding 29

**Audit ID:** `LRB094-0029`
**Finding Stable ID:** `g2/a1/sl|schwimmen|idx:531|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `schwimmen|idx:531`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** peldēt
**DE reference (read-only):** schwimmen
**CURRENT (captured scope):** {"lv":"plavati","study.translation":"plavati","study.explanation":"[\"Glavna ideja: schwimmen pomeni plavati kot gibanje ali šport.\",\"schwimmen se uporablja, ko oseba plava v vodi s plavalnimi gibi.\",\"Če gre za počitek v vodi ali plavanju, se pogosto uporablja baden.\",\"Na ravni A1 je pomembno razlikovati: schwimmen = plavati, baden = kopati.\"]","study.examples":"[{\"de\":\"Ich schwimme gern.\",\"lv\":\"rad imam plavati.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"zelo dobro plava.\"},{\"de\":\"Wir schwimmen im Schwimmbad.\",\"lv\":\"plavamo v bazenu.\"},{\"de\":\"Ich gehe baden.\",\"lv\":\"grem plavalec.\"}]","study.comparison":"[{\"word\":\"schwimmen\",\"meaning\":\"plavati kot gibanje ali šport\",\"example\":\"Plava zelo dobro.\"},{\"word\":\"baden\",\"meaning\":\"plavati / biti v vodi\",\"example\":\"Grem se kopati.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"iti plavalec\",\"example\":\"Gremo plavati.\"},{\"word\":\"duschen\",\"meaning\":\"umivati se pod prho\",\"example\":\"Tuširam se zjutraj.\"}]","study.tip":"{\"text\":\"Atceries: peldēšanas kustība → schwimmen; atpūta ūdenī → baden.\"}","study.important":"[\"schwimmen in baden nista ista stvar.\",\"V slovenščini se pogosto reče »plavati«, vendar je treba v nemščini videti, ali je to gibanje ali plavanje.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte schwimmen\|idx:531, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “peldēt” un DE “schwimmen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schwimmen",
  "lv": "plavati",
  "level": "A1",
  "study": {
    "id": "a1-schwimmen",
    "layout": "standardStudy",
    "translation": "plavati",
    "explanation": [
      "Glavna ideja: schwimmen pomeni plavati kot gibanje ali šport.",
      "schwimmen se uporablja, ko oseba plava v vodi s plavalnimi gibi.",
      "Če gre za počitek v vodi ali plavanju, se pogosto uporablja baden.",
      "Na ravni A1 je pomembno razlikovati: schwimmen = plavati, baden = kopati."
    ],
    "examples": [
      {
        "de": "Ich schwimme gern.",
        "lv": "rad imam plavati."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "zelo dobro plava."
      },
      {
        "de": "Wir schwimmen im Schwimmbad.",
        "lv": "plavamo v bazenu."
      },
      {
        "de": "Ich gehe baden.",
        "lv": "grem plavalec."
      }
    ],
    "comparison": [
      {
        "word": "schwimmen",
        "meaning": "plavati kot gibanje ali šport",
        "example": "Plava zelo dobro."
      },
      {
        "word": "baden",
        "meaning": "plavati / biti v vodi",
        "example": "Grem se kopati."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "iti plavalec",
        "example": "Gremo plavati."
      },
      {
        "word": "duschen",
        "meaning": "umivati se pod prho",
        "example": "Tuširam se zjutraj."
      }
    ],
    "tip": {
      "text": "Atceries: peldēšanas kustība → schwimmen; atpūta ūdenī → baden."
    },
    "important": [
      "schwimmen in baden nista ista stvar.",
      "V slovenščini se pogosto reče »plavati«, vendar je treba v nemščini videti, ali je to gibanje ali plavanje."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "schwimmen"
        ],
        "purple": [
          "peldēt",
          "peldēšanas kustībām"
        ],
        "red": [
          "baden",
          "Galvenā"
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
              "peldēt"
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
              "peld"
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
              "peldam"
            ],
            "green": [
              "baseinā"
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
              "peldēties"
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
              "peldēt",
              "kustība",
              "sports"
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
              "peldēties",
              "ūdenī"
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
              "iet peldēt"
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
              "mazgāties dušā"
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
            "peldēšanas kustība"
          ],
          "red": [
            "baden",
            "atpūta ūdenī"
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
            "peldēt"
          ],
          "blue": [
            "kustība"
          ],
          "red": [
            "peldēšanās"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 30

**Audit ID:** `LRB094-0030`
**Finding Stable ID:** `g2/a1/sl|sehen|idx:539|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `sehen|idx:539`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** redzēt
**DE reference (read-only):** sehen
**CURRENT (captured scope):** {"lv":"videti","study.translation":"videti","study.explanation":"[\"Glavna ideja: sehen pomeni videti z očmi.\",\"Ko gre za to, kar zaznajo oči, se uporablja sehen.\",\"Gledati namerno je pogosto schauen ali ansehen.\",\"Zelo pogost stavek je Ich sehe dich. = Vidim te.\"]","study.examples":"[{\"de\":\"Ich sehe dich.\",\"lv\":\"te vidim.\"},{\"de\":\"Siehst du das Auto?\",\"lv\":\"ali vidiš ta avto?\"},{\"de\":\"Ich sehe nichts.\",\"lv\":\"ne vidim ničesar.\"},{\"de\":\"Wir schauen einen Film.\",\"lv\":\"gledamo film.\"}]","study.comparison":"[{\"word\":\"sehen\",\"meaning\":\"videti\",\"example\":\"Vidim te.\"},{\"word\":\"schauen\",\"meaning\":\"gledati\",\"example\":\"Gledam na sliko.\"},{\"word\":\"ansehen\",\"meaning\":\"si ogledati / gledati\",\"example\":\"Gledam si film.\"},{\"word\":\"hören\",\"meaning\":\"slišati\",\"example\":\"Poslušam glasbo.\"}]","study.tip":"{\"text\":\"Atceries: acis uztver → sehen; apzināti skaties → schauen/ansehen.\"}","study.important":"[\"sehen ni enako kot anschauen.\",\"Ich sehe dich = te vidim; Ich schaue den Film = gledam film.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte sehen\|idx:539, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “redzēt” un DE “sehen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sehen",
  "lv": "videti",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "videti",
    "explanation": [
      "Glavna ideja: sehen pomeni videti z očmi.",
      "Ko gre za to, kar zaznajo oči, se uporablja sehen.",
      "Gledati namerno je pogosto schauen ali ansehen.",
      "Zelo pogost stavek je Ich sehe dich. = Vidim te."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "te vidim."
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "ali vidiš ta avto?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "ne vidim ničesar."
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "gledamo film."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "videti",
        "example": "Vidim te."
      },
      {
        "word": "schauen",
        "meaning": "gledati",
        "example": "Gledam na sliko."
      },
      {
        "word": "ansehen",
        "meaning": "si ogledati / gledati",
        "example": "Gledam si film."
      },
      {
        "word": "hören",
        "meaning": "slišati",
        "example": "Poslušam glasbo."
      }
    ],
    "tip": {
      "text": "Atceries: acis uztver → sehen; apzināti skaties → schauen/ansehen."
    },
    "important": [
      "sehen ni enako kot anschauen.",
      "Ich sehe dich = te vidim; Ich schaue den Film = gledam film."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sehen",
          "Ich sehe"
        ],
        "purple": [
          "Glavna",
          "Glavna"
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
              "redzu"
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
              "redzi"
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
              "neredzu"
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
              "skatāmies"
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
              "redzēt"
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
              "skatīties"
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
              "apskatīt",
              "skatīties"
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
              "dzirdēt"
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
            "acis uztver"
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
            "redzu"
          ],
          "red": [
            "schaue",
            "skatos"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB094-0031`
**Finding Stable ID:** `g2/a1/sl|sein|idx:542|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `sein|idx:542`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** būt
**DE reference (read-only):** sein
**CURRENT (captured scope):** {"lv":"biti","study.translation":"biti","study.explanation":"[\"Glavna ideja: sein pomeni biti.\",\"sein je ena najvažnejših nemških glagolov.\",\"Na ravni A1 so posebej pomembne oblike ich bin, du bist, er ist in wir sind.\",\"sein se uporablja tudi vMany stavkih z lokacijo ali lastnostjo.\"]","study.examples":"[{\"de\":\"Ich bin hier.\",\"lv\":\"sem tukaj.\"},{\"de\":\"Du bist müde.\",\"lv\":\"si utrujen.\"},{\"de\":\"Er ist Lehrer.\",\"lv\":\"je učitelj.\"},{\"de\":\"Wir sind zu Hause.\",\"lv\":\"smo doma.\"}]","study.comparison":"[{\"word\":\"sein\",\"meaning\":\"biti\",\"example\":\"Sem tukaj.\"},{\"word\":\"haben\",\"meaning\":\"imam\",\"example\":\"Imam čas.\"},{\"word\":\"werden\",\"meaning\":\"postati\",\"example\":\"Postavam se utrujen.\"},{\"word\":\"bleiben\",\"meaning\":\"ostati\",\"example\":\"Ostanem tukaj.\"}]","study.tip":"{\"text\":\"Atceries: ich bin = es esmu; du bist = tu esi.\"}","study.important":"[\"sein oblike je treba imeti naučeno posebej: bin, bist, ist, sind.\",\"Ich bin je 'sem' in ne 'sem'.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte sein\|idx:542, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “būt” un DE “sein” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sein",
  "lv": "biti",
  "level": "A1",
  "study": {
    "id": "a1-sein",
    "layout": "standardStudy",
    "translation": "biti",
    "explanation": [
      "Glavna ideja: sein pomeni biti.",
      "sein je ena najvažnejših nemških glagolov.",
      "Na ravni A1 so posebej pomembne oblike ich bin, du bist, er ist in wir sind.",
      "sein se uporablja tudi vMany stavkih z lokacijo ali lastnostjo."
    ],
    "examples": [
      {
        "de": "Ich bin hier.",
        "lv": "sem tukaj."
      },
      {
        "de": "Du bist müde.",
        "lv": "si utrujen."
      },
      {
        "de": "Er ist Lehrer.",
        "lv": "je učitelj."
      },
      {
        "de": "Wir sind zu Hause.",
        "lv": "smo doma."
      }
    ],
    "comparison": [
      {
        "word": "sein",
        "meaning": "biti",
        "example": "Sem tukaj."
      },
      {
        "word": "haben",
        "meaning": "imam",
        "example": "Imam čas."
      },
      {
        "word": "werden",
        "meaning": "postati",
        "example": "Postavam se utrujen."
      },
      {
        "word": "bleiben",
        "meaning": "ostati",
        "example": "Ostanem tukaj."
      }
    ],
    "tip": {
      "text": "Atceries: ich bin = es esmu; du bist = tu esi."
    },
    "important": [
      "sein oblike je treba imeti naučeno posebej: bin, bist, ist, sind.",
      "Ich bin je 'sem' in ne 'sem'."
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
          "Glavna",
          "atrašanās vietu",
          "īpašību"
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
              "esmu"
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
              "esi"
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
              "ir"
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
              "esam"
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
              "būt"
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
              "man ir"
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
              "kļūt"
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
              "palikt"
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
            "es esmu",
            "tu esi"
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

## Finding 32

**Audit ID:** `LRB094-0032`
**Finding Stable ID:** `g2/a1/sl|Seite|idx:544|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `Seite|idx:544`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** lappuse • puse
**DE reference (read-only):** Seite
**CURRENT (captured scope):** {"lv":"stran • stran","study.translation":"stran • stran","study.explanation":"[\"Glavna ideja: die Seite lahko pomeni stran knjige/dokumenta ali stran/rob nečesa.\",\"V knjigi, reviji ali na spletni strani die Seite = stran (Seite 5 = 5. stran).\",\"V prostorskem smislu die Seite = stran (auf der linken Seite = na levi).\",\"V prenesenem pomenu lahko die Seite pomeni tudi stran v sporu ali razmišljanjih (auf meiner Seite = na moji strani).\",\"Kontekst (knjiga/branje ali položaj/odnos) kaže pravilen pomen.\",\"V množini za oba pomena: die Seiten.\"]","study.examples":"[{\"de\":\"Schlagt die Seite zwanzig auf.\",\"lv\":\"odprite dvajseto stran.\"},{\"de\":\"Auf der linken Seite ist ein Park.\",\"lv\":\"na levi strani je park.\"},{\"de\":\"Die Webseite lädt langsam.\",\"lv\":\"spletna stran se počasi nalagala.\"},{\"de\":\"Er steht auf meiner Seite.\",\"lv\":\"je na moji strani.\"},{\"de\":\"Das Buch hat 200 Seiten.\",\"lv\":\"knjiga ima 200 strani.\"},{\"de\":\"Auf der anderen Seite der Straße.\",\"lv\":\"na drugi strani ulice.\"}]","study.tip":"[\"Pogovor o knjigi ali branje → stran. Govori o položaju, smeri ali razmerju → stran.\",\"Stran X je vedno stran v knjigi, ne polovica.\"]","study.important":"[\"die Seite = stran ALI stran — kontekst razloči.\",\"V množini za oba pomena: die Seiten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Seite\|idx:544, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “lappuse • puse” un DE “Seite” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
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
  "lv": "stran • stran",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "stran • stran",
    "explanation": [
      "Glavna ideja: die Seite lahko pomeni stran knjige/dokumenta ali stran/rob nečesa.",
      "V knjigi, reviji ali na spletni strani die Seite = stran (Seite 5 = 5. stran).",
      "V prostorskem smislu die Seite = stran (auf der linken Seite = na levi).",
      "V prenesenem pomenu lahko die Seite pomeni tudi stran v sporu ali razmišljanjih (auf meiner Seite = na moji strani).",
      "Kontekst (knjiga/branje ali položaj/odnos) kaže pravilen pomen.",
      "V množini za oba pomena: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "odprite dvajseto stran."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "na levi strani je park."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "spletna stran se počasi nalagala."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "je na moji strani."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "knjiga ima 200 strani."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "na drugi strani ulice."
      }
    ],
    "tip": [
      "Pogovor o knjigi ali branje → stran. Govori o položaju, smeri ali razmerju → stran.",
      "Stran X je vedno stran v knjigi, ne polovica."
    ],
    "important": [
      "die Seite = stran ALI stran — kontekst razloči.",
      "V množini za oba pomena: die Seiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Seite",
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
              "lappusi"
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
              "lappuse"
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
            "Pogovor"
          ],
          "green": [
            "Pogovor"
          ]
        },
        {
          "blue": [
            "Pogovor"
          ],
          "purple": [
            "Pogovor"
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

## Finding 33

**Audit ID:** `LRB094-0033`
**Finding Stable ID:** `g2/a1/sl|sich|idx:547|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `sich|idx:547`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** sevi • sev
**DE reference (read-only):** sich
**CURRENT (captured scope):** {"lv":"sebe • si","study.translation":"sebe • si","study.explanation":"[\"Glavna ideja: sich kaže, da se dejanje nanaša na samega storilca.\",\"V latvijščini se pogosto prevaja kot jaz ali jaz.\",\"Nekateri nemški glagoli imajo sich kot obvezni del, na primer sich waschen.\",\"Pomembno opozorilo na ravni A1: ich wasche mich, er wäscht sich.\"]","study.examples":"[{\"de\":\"Er wäscht sich.\",\"lv\":\"umiva se.\"},{\"de\":\"Ich setze mich.\",\"lv\":\"sedem si.\"},{\"de\":\"Sie freut sich.\",\"lv\":\"se veseli.\"},{\"de\":\"Ich wasche das Auto.\",\"lv\":\"umivam avto.\"}]","study.comparison":"[{\"word\":\"sich\",\"meaning\":\"sebe / si\",\"example\":\"Umiva se.\"},{\"word\":\"mich\",\"meaning\":\"mene / sebe pri jaz\",\"example\":\"Umivam se.\"},{\"word\":\"dich\",\"meaning\":\"te / sebe pri ti\",\"example\":\"Umivas se.\"},{\"word\":\"ihn\",\"meaning\":\"ga\",\"example\":\"Vidim ga.\"}]","study.tip":"{\"text\":\"Atceries: darbība uz sevi → sich/mich/dich.\"}","study.important":"[\"sich ni samostalen samostalnik.\",\"Spreminja se po osebah: ich → mich, du → dich, er/sie/es → sich.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte sich\|idx:547, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “sevi • sev” un DE “sich” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sich",
  "lv": "sebe • si",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "sebe • si",
    "explanation": [
      "Glavna ideja: sich kaže, da se dejanje nanaša na samega storilca.",
      "V latvijščini se pogosto prevaja kot jaz ali jaz.",
      "Nekateri nemški glagoli imajo sich kot obvezni del, na primer sich waschen.",
      "Pomembno opozorilo na ravni A1: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "umiva se."
      },
      {
        "de": "Ich setze mich.",
        "lv": "sedem si."
      },
      {
        "de": "Sie freut sich.",
        "lv": "se veseli."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "umivam avto."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "sebe / si",
        "example": "Umiva se."
      },
      {
        "word": "mich",
        "meaning": "mene / sebe pri jaz",
        "example": "Umivam se."
      },
      {
        "word": "dich",
        "meaning": "te / sebe pri ti",
        "example": "Umivas se."
      },
      {
        "word": "ihn",
        "meaning": "ga",
        "example": "Vidim ga."
      }
    ],
    "tip": {
      "text": "Atceries: darbība uz sevi → sich/mich/dich."
    },
    "important": [
      "sich ni samostalen samostalnik.",
      "Spreminja se po osebah: ich → mich, du → dich, er/sie/es → sich."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sich",
          "ich wasche mich",
          "er wäscht sich"
        ],
        "purple": [
          "Glavna",
          "se",
          "Glavna"
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
              "mazgājas"
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
              "apsēžos"
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
              "priecājas"
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
              "mazgāju"
            ],
            "yellow": [
              "auto"
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
              "sevi",
              "sev"
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
              "mani",
              "sevi"
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
              "tevi",
              "sevi"
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
              "viņu"
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
            "darbība uz sevi"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "sich"
          ],
          "red": [
            "lietvārds"
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

## Finding 34

**Audit ID:** `LRB094-0034`
**Finding Stable ID:** `g2/a1/sl|sprechen|idx:5|study.translation, study.explanation, study.examples.lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `sprechen|idx:5`
**Field / path:** `study.translation, study.explanation, study.examples.lv`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** runāt
**DE reference (read-only):** sprechen
**CURRENT (captured scope):** {"study.translation":"govoriti","study.explanation":"[\"Glavna ideja: Govoriti, pogovarjati se ali uporabljati jezik.\",\"sprechen v glavnem pomeni: govoriti ali se pogovarjati.\",\"Pogosto opisuje: jezik/pogovor.\",\"sprechen opisuje govorjenje ali uporabo jezika.\"]","study.examples.lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: sl kartītei sprechen\|idx:5 ceļš study.translation, study.explanation, study.examples.lv production datos neeksistē; LV “runāt” ir jāizvērtē kopā ar shēmas OWNER, pirms var izveidot jaunu lauku vai noraidīt finding.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sprechen",
  "lv": "govoriti",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "govoriti",
    "explanation": [
      "Glavna ideja: Govoriti, pogovarjati se ali uporabljati jezik.",
      "sprechen v glavnem pomeni: govoriti ali se pogovarjati.",
      "Pogosto opisuje: jezik/pogovor.",
      "sprechen opisuje govorjenje ali uporabo jezika."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Jaz govorim nemščino."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "mēs runājam par darbu."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "es runāju vāciski."
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "govoriti (proces, jezik)",
        "example": "Wir sprechen über die Arbeit. – Govorimo o delu."
      },
      {
        "word": "sagen",
        "meaning": "povedati (konkreten tekst)",
        "example": "Sag mir die Wahrheit. – Povej mi resnico."
      }
    ],
    "tip": [
      "sprechen = govoriti",
      "Uporabite sprechen, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "sprechen = govoriti.",
      "Govoriti, se pogovarjati ali uporabljati jezik."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "sprechen"
        ],
        "purple": [
          "runāt"
        ],
        "orange": [
          "runāt"
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
              "runāju"
            ]
          }
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
          "lv": {
            "purple": [
              "runāju"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "runāt"
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

## Finding 35

**Audit ID:** `LRB094-0035`
**Finding Stable ID:** `g2/a1/sl|stehen|idx:576|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `stehen|idx:576`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** stāvēt
**DE reference (read-only):** stehen
**CURRENT (captured scope):** {"lv":"stati","study.translation":"stati","study.explanation":"[\"Glavna ideja: stehen pomeni stati ali stati.\",\"Za osebo stehen pomeni stati.\",\"Če je »par« predmetom, »stehen« pomeni, da se kaj nahaja stoječe ali na določenem mestu.\",\"Pomembno je razlikovati: stehen = stati, sitzen = sedeti, liegen = ležati.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"jaz stojim pri vratih.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"stol stoji v kuhinji.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"on sedi pri mizi.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"knjiga je na mizi.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"stati / biti stojuč\",\"example\":\"Stojim tukaj.\"},{\"word\":\"sitzen\",\"meaning\":\"sedeti\",\"example\":\"Sedi pri mizi.\"},{\"word\":\"liegen\",\"meaning\":\"ležati / biti ležeč\",\"example\":\"Knjiga leži tam.\"},{\"word\":\"stellen\",\"meaning\":\"postaviti pokončno\",\"example\":\"Postavim steklenico sem.\"}]","study.tip":"{\"text\":\"Atceries: stāvus → stehen; sēdus → sitzen; guļus → liegen.\"}","study.important":"[\"»stehen« kaže stanje, ne dejanja »položiti«.\",\"Postaviti predmet pokonci je stellen, ne stehen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte stehen\|idx:576, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “stāvēt” un DE “stehen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "stehen",
  "lv": "stati",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "stati",
    "explanation": [
      "Glavna ideja: stehen pomeni stati ali stati.",
      "Za osebo stehen pomeni stati.",
      "Če je »par« predmetom, »stehen« pomeni, da se kaj nahaja stoječe ali na določenem mestu.",
      "Pomembno je razlikovati: stehen = stati, sitzen = sedeti, liegen = ležati."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "jaz stojim pri vratih."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "stol stoji v kuhinji."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "on sedi pri mizi."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "knjiga je na mizi."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "stati / biti stojuč",
        "example": "Stojim tukaj."
      },
      {
        "word": "sitzen",
        "meaning": "sedeti",
        "example": "Sedi pri mizi."
      },
      {
        "word": "liegen",
        "meaning": "ležati / biti ležeč",
        "example": "Knjiga leži tam."
      },
      {
        "word": "stellen",
        "meaning": "postaviti pokončno",
        "example": "Postavim steklenico sem."
      }
    ],
    "tip": {
      "text": "Atceries: stāvus → stehen; sēdus → sitzen; guļus → liegen."
    },
    "important": [
      "»stehen« kaže stanje, ne dejanja »položiti«.",
      "Postaviti predmet pokonci je stellen, ne stehen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "stehen"
        ],
        "purple": [
          "stāvus",
          "stāvus"
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
              "stāvu"
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
              "stāv"
            ],
            "yellow": [
              "Krēsls"
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
              "sēž"
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
              "atrodas"
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
              "stāvēt",
              "stāvus"
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
              "sēdēt"
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
              "gulēt",
              "guļus"
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
              "nolikt stāvus"
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
            "stāvus"
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
            "stāvokli"
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

## Finding 36

**Audit ID:** `LRB094-0036`
**Finding Stable ID:** `g2/a1/sl|über|idx:608|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `über|idx:608`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** virs • par
**DE reference (read-only):** über
**CURRENT (captured scope):** {"lv":"nad • o","study.translation":"nad • o","study.explanation":"[\"Glavna ideja: über pomeni zgoraj ali približno, odvisno od konteksta.\",\"Če je govor o lokaciji, »über« pogosto pomeni nad.\",\"Ko gre za pogovor, besedilo ali temo, über pomeni približno.\",\"Pri gibanju »über« lahko pomeni »čez«.\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"svetilka visi nad mizo.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"govorimo o vremenu.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"otrok teče čez ulico.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"veselim se darila.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"nad / o / preko\",\"example\":\"Wir sprechen über das Wetter.\"},{\"word\":\"auf\",\"meaning\":\"na površini\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"unter\",\"meaning\":\"pod\",\"example\":\"Die Tasche ist unter dem Tisch.\"},{\"word\":\"von\",\"meaning\":\"od / o od vira\",\"example\":\"Ich höre von dir.\"}]","study.tip":"{\"text\":\"Atceries: tēma sarunā → über; virs galda → über.\"}","study.important":"[\"»über« ni le beseda za mesto.\",\"»sprechen über« pomeni »govoriti o«.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte über\|idx:608, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “virs • par” un DE “über” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "über",
  "lv": "nad • o",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "nad • o",
    "explanation": [
      "Glavna ideja: über pomeni zgoraj ali približno, odvisno od konteksta.",
      "Če je govor o lokaciji, »über« pogosto pomeni nad.",
      "Ko gre za pogovor, besedilo ali temo, über pomeni približno.",
      "Pri gibanju »über« lahko pomeni »čez«."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "svetilka visi nad mizo."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "govorimo o vremenu."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "otrok teče čez ulico."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "veselim se darila."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "nad / o / preko",
        "example": "Wir sprechen über das Wetter."
      },
      {
        "word": "auf",
        "meaning": "na površini",
        "example": "Das Buch liegt auf dem Tisch."
      },
      {
        "word": "unter",
        "meaning": "pod",
        "example": "Die Tasche ist unter dem Tisch."
      },
      {
        "word": "von",
        "meaning": "od / o od vira",
        "example": "Ich höre von dir."
      }
    ],
    "tip": {
      "text": "Atceries: tēma sarunā → über; virs galda → über."
    },
    "important": [
      "»über« ni le beseda za mesto.",
      "»sprechen über« pomeni »govoriti o«."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "über"
        ],
        "purple": [
          "virs",
          "par",
          "pāri"
        ],
        "green": [
          "Glavna",
          "Glavna",
          "Glavna"
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
              "virs"
            ],
            "yellow": [
              "galda"
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
              "par"
            ],
            "green": [
              "laiku"
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
              "pāri"
            ],
            "yellow": [
              "ielai"
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
              "par"
            ],
            "yellow": [
              "dāvanu"
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
              "virs",
              "par",
              "pāri"
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
              "uz virsmas"
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
              "zem"
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
              "no"
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
            "tēma",
            "virs"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "über"
          ],
          "purple": [
            "vietas vārds"
          ]
        },
        {
          "blue": [
            "sprechen über"
          ],
          "purple": [
            "runāt par"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 37

**Audit ID:** `LRB094-0037`
**Finding Stable ID:** `g2/a1/sl|um|idx:611|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `um|idx:611`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** ap • pulksten
**DE reference (read-only):** um
**CURRENT (captured scope):** {"lv":"okrog • ob","study.translation":"okrog • ob","study.explanation":"[\"Glavna ideja: »um« zelo pogosto pomeni »ob« s časom ali »okrog« z mestom.\",\"S točnim časom hm pomeni uro.\",\"Z mestom hm pomeni okoli ali okoli.\",\"V besedni zvezi um ... zu pomaga izraziti namen: to.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"pridem ob osmih.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"sedimo okrog mize.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"on gre okrog vogala.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"študiram, da bi govoril nemščino.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"ob / okrog / da\",\"example\":\"Ich komme um acht.\"},{\"word\":\"am\",\"meaning\":\"v dan / pri\",\"example\":\"Am Montag komme ich.\"},{\"word\":\"gegen\",\"meaning\":\"okrog časa / proti\",\"example\":\"Ich komme gegen acht.\"},{\"word\":\"für\",\"meaning\":\"za / v prid\",\"example\":\"Das ist für dich.\"}]","study.tip":"{\"text\":\"Atceries: um acht = pulksten astoņos.\"}","study.important":"[\"»um« s časom je običajno »ob«.\",\"»um ... zu« pogosto pomeni »da bi ...«.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte um\|idx:611, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “ap • pulksten” un DE “um” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "um",
  "lv": "okrog • ob",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "okrog • ob",
    "explanation": [
      "Glavna ideja: »um« zelo pogosto pomeni »ob« s časom ali »okrog« z mestom.",
      "S točnim časom hm pomeni uro.",
      "Z mestom hm pomeni okoli ali okoli.",
      "V besedni zvezi um ... zu pomaga izraziti namen: to."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "pridem ob osmih."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "sedimo okrog mize."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "on gre okrog vogala."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "študiram, da bi govoril nemščino."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "ob / okrog / da",
        "example": "Ich komme um acht."
      },
      {
        "word": "am",
        "meaning": "v dan / pri",
        "example": "Am Montag komme ich."
      },
      {
        "word": "gegen",
        "meaning": "okrog časa / proti",
        "example": "Ich komme gegen acht."
      },
      {
        "word": "für",
        "meaning": "za / v prid",
        "example": "Das ist für dich."
      }
    ],
    "tip": {
      "text": "Atceries: um acht = pulksten astoņos."
    },
    "important": [
      "»um« s časom je običajno »ob«.",
      "»um ... zu« pogosto pomeni »da bi ...«."
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
              "pulksten astoņos"
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
              "ap"
            ],
            "yellow": [
              "galdu"
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
              "ap"
            ],
            "yellow": [
              "stūri"
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
              "lai"
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
              "pulksten",
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
              "dienā",
              "pie"
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
              "pret"
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

## Finding 38

**Audit ID:** `LRB094-0038`
**Finding Stable ID:** `g2/a1/sl|unter|idx:615|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `unter|idx:615`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** zem
**DE reference (read-only):** unter
**CURRENT (captured scope):** {"lv":"pod","study.translation":"pod","study.explanation":"[\"Glavna ideja: pod pomeni pod ali med, odvisno od konteksta.\",\"Če je nekaj pod mizo, stolom ali drugim predmetom, uporabite unter.\",\"Ko govorimo o skupini ljudi, lahko unter pomeni med.\",\"Je nasprotje über, ko se nanaša na smer gor/dol.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"torba je pod mizo.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"mačka leži pod stolom.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"med prijatelji se tako reče.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"svetilka visi nad mizo.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"pod / med\",\"example\":\"Die Tasche ist unter dem Tisch.\"},{\"word\":\"über\",\"meaning\":\"nad / o\",\"example\":\"Die Lampe hängt über dem Tisch.\"},{\"word\":\"zwischen\",\"meaning\":\"med dvema stvarima\",\"example\":\"Zwischen den Häusern.\"},{\"word\":\"auf\",\"meaning\":\"na površini\",\"example\":\"Auf dem Tisch.\"}]","study.tip":"{\"text\":\"Atceries: zem galda → unter dem Tisch.\"}","study.important":"[\"»unter« lahko tudi pomeni »med«, zlasti s predmeti ali skupinami.\",\"»unter« in »über« sta pogosto nasprotja v smislu lokacije.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte unter\|idx:615, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “zem” un DE “unter” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "unter",
  "lv": "pod",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "pod",
    "explanation": [
      "Glavna ideja: pod pomeni pod ali med, odvisno od konteksta.",
      "Če je nekaj pod mizo, stolom ali drugim predmetom, uporabite unter.",
      "Ko govorimo o skupini ljudi, lahko unter pomeni med.",
      "Je nasprotje über, ko se nanaša na smer gor/dol."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "torba je pod mizo."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "mačka leži pod stolom."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "med prijatelji se tako reče."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "svetilka visi nad mizo."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "pod / med",
        "example": "Die Tasche ist unter dem Tisch."
      },
      {
        "word": "über",
        "meaning": "nad / o",
        "example": "Die Lampe hängt über dem Tisch."
      },
      {
        "word": "zwischen",
        "meaning": "med dvema stvarima",
        "example": "Zwischen den Häusern."
      },
      {
        "word": "auf",
        "meaning": "na površini",
        "example": "Auf dem Tisch."
      }
    ],
    "tip": {
      "text": "Atceries: zem galda → unter dem Tisch."
    },
    "important": [
      "»unter« lahko tudi pomeni »med«, zlasti s predmeti ali skupinami.",
      "»unter« in »über« sta pogosto nasprotja v smislu lokacije."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "unter",
          "über"
        ],
        "purple": [
          "Glavna",
          "Glavna"
        ],
        "green": [
          "Glavna"
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
              "zem"
            ],
            "yellow": [
              "galda"
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
              "zem"
            ],
            "yellow": [
              "krēsla"
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
              "starpā"
            ],
            "green": [
              "Draugu"
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
              "virs"
            ],
            "yellow": [
              "galda"
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
              "zem",
              "starp"
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
              "virs",
              "par"
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
              "starp"
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
              "uz virsmas"
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
            "zem galda"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "unter"
          ],
          "purple": [
            "starp"
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

## Finding 39

**Audit ID:** `LRB094-0039`
**Finding Stable ID:** `g2/a1/sl|verstehen|idx:621|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `verstehen|idx:621`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** saprast
**DE reference (read-only):** verstehen
**CURRENT (captured scope):** {"lv":"razumeti","study.translation":"razumeti","study.explanation":"[\"Glavna ideja: verstehen pomeni razumeti.\",\"To se uporablja, ko razumeš jezik, osebo, besedilo ali situacijo.\",\"V slovenščini tu običajno nista potrebna »znati« ali »učiti se«; sta pogosteje »können«.\",\"Zelo pogost stavek je Ich verstehe. = Razumem.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"tebe razumem.\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"ali razumeš nemščino?\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"to ne razumem.\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"znam govoriti nemščino.\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"razumeti\",\"example\":\"Ich verstehe dich.\"},{\"word\":\"können\",\"meaning\":\"znati / podneti\",\"example\":\"Ich kann schwimmen.\"},{\"word\":\"wissen\",\"meaning\":\"vedeti dejstvo\",\"example\":\"Ich weiß das.\"},{\"word\":\"kennen\",\"meaning\":\"poznati\",\"example\":\"Ich kenne ihn.\"}]","study.tip":"{\"text\":\"Atceries: saprast tekstu/cilvēku → verstehen; prast kaut ko darīt → können.\"}","study.important":"[\"»verstehen« ni glavna beseda za pomen »znati«.\",\"Ich verstehe Deutsch pomeni \\\"razumem nemško\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte verstehen\|idx:621, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “saprast” un DE “verstehen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "verstehen",
  "lv": "razumeti",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "razumeti",
    "explanation": [
      "Glavna ideja: verstehen pomeni razumeti.",
      "To se uporablja, ko razumeš jezik, osebo, besedilo ali situacijo.",
      "V slovenščini tu običajno nista potrebna »znati« ali »učiti se«; sta pogosteje »können«.",
      "Zelo pogost stavek je Ich verstehe. = Razumem."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "tebe razumem."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "ali razumeš nemščino?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "to ne razumem."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "znam govoriti nemščino."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "razumeti",
        "example": "Ich verstehe dich."
      },
      {
        "word": "können",
        "meaning": "znati / podneti",
        "example": "Ich kann schwimmen."
      },
      {
        "word": "wissen",
        "meaning": "vedeti dejstvo",
        "example": "Ich weiß das."
      },
      {
        "word": "kennen",
        "meaning": "poznati",
        "example": "Ich kenne ihn."
      }
    ],
    "tip": {
      "text": "Atceries: saprast tekstu/cilvēku → verstehen; prast kaut ko darīt → können."
    },
    "important": [
      "»verstehen« ni glavna beseda za pomen »znati«.",
      "Ich verstehe Deutsch pomeni \"razumem nemško\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "verstehen",
          "Ich verstehe"
        ],
        "purple": [
          "prast",
          "saproti"
        ],
        "red": [
          "können",
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
              "protu"
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
              "saprast"
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
              "zināt"
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
              "pazīt"
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
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 40

**Audit ID:** `LRB094-0040`
**Finding Stable ID:** `g2/a1/sl|vom|idx:634|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `vom|idx:634`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** no
**DE reference (read-only):** vom
**CURRENT (captured scope):** {"lv":"no • ārā","study.translation":"no • ārā","study.explanation":"[\"»vom« je okrajšava predloga »von« in članka »dem«.\",\"Polna oblika: von dem (komu?).\",\"Uporablja se s samostalniki moškim in nevtralnim spolom v dajniku, ko nakazuje izvor ali smer od česa.\",\"Odgovarja na vprašanja koga? ali od kje?\",\"V praksi se skoraj vedno uporablja vom namesto polnega von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"pridem s postaje.\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"darilo je od očeta.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"on pride od zdravnika.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"ona vozijo s letališča.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"to je s tržnice.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"prihajamo iz praznika.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"on vzame mleko od kmeta.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"sporočilo je od šefa.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"od (konkretna stvar, čemu?)\",\"example\":\"vom Bahnhof – od postaje\"},{\"word\":\"von\",\"meaning\":\"od (splošno)\",\"example\":\"von mir – od mene\"},{\"word\":\"aus\",\"meaning\":\"od znotraj / izvor\",\"example\":\"aus Deutschland – iz Nemčije\"},{\"word\":\"ab\",\"meaning\":\"od (čas/mesto)\",\"example\":\"ab Montag – od ponedeljka\"},{\"word\":\"zu\",\"meaning\":\"na / pri (nasprotna smer)\",\"example\":\"zum Arzt – pri zdravniku\"}]","study.tip":"[\"Ne pozabite: von + dem → vom (za koga?).\",\"V pogovornem govoru skoraj nikoli ne rečete von dem - uporabite vom.\"]","study.important":"[\"»vom« = »von dem«, le s samostalniki moškim ali nevtralnim spolom v dajniku.\",\"Označuje izvor, vir ali smer nečesa določenega.\",\"Pri ženskem spolu: »von der Mutter«, ne »vom Mutter«.\",\"Ne sme se zamenjevati z aus (država izvora) ali ab (izhodišče).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte vom\|idx:634, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “no” un DE “vom” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "vom",
  "lv": "no • ārā",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "no • ārā",
    "explanation": [
      "»vom« je okrajšava predloga »von« in članka »dem«.",
      "Polna oblika: von dem (komu?).",
      "Uporablja se s samostalniki moškim in nevtralnim spolom v dajniku, ko nakazuje izvor ali smer od česa.",
      "Odgovarja na vprašanja koga? ali od kje?",
      "V praksi se skoraj vedno uporablja vom namesto polnega von dem."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "pridem s postaje."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "darilo je od očeta."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "on pride od zdravnika."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "ona vozijo s letališča."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "to je s tržnice."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "prihajamo iz praznika."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "on vzame mleko od kmeta."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "sporočilo je od šefa."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "od (konkretna stvar, čemu?)",
        "example": "vom Bahnhof – od postaje"
      },
      {
        "word": "von",
        "meaning": "od (splošno)",
        "example": "von mir – od mene"
      },
      {
        "word": "aus",
        "meaning": "od znotraj / izvor",
        "example": "aus Deutschland – iz Nemčije"
      },
      {
        "word": "ab",
        "meaning": "od (čas/mesto)",
        "example": "ab Montag – od ponedeljka"
      },
      {
        "word": "zu",
        "meaning": "na / pri (nasprotna smer)",
        "example": "zum Arzt – pri zdravniku"
      }
    ],
    "tip": [
      "Ne pozabite: von + dem → vom (za koga?).",
      "V pogovornem govoru skoraj nikoli ne rečete von dem - uporabite vom."
    ],
    "important": [
      "»vom« = »von dem«, le s samostalniki moškim ali nevtralnim spolom v dajniku.",
      "Označuje izvor, vir ali smer nečesa določenega.",
      "Pri ženskem spolu: »von der Mutter«, ne »vom Mutter«.",
      "Ne sme se zamenjevati z aus (država izvora) ali ab (izhodišče)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vom",
          "von dem"
        ],
        "purple": [
          "no"
        ],
        "green": [
          "vom",
          "izcelsmi"
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
              "no stacijas"
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
              "no tēva"
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
              "no ārsta"
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
              "no lidostas"
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
              "no tirgus"
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
              "no svinībām"
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
              "no zemnieka"
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
              "no priekšnieka"
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
              "no"
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
              "no"
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
              "no iekšienes"
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
              "sākot no"
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
              "uz",
              "pie"
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
            "kam?"
          ]
        },
        {
          "purple": [
            "Označuje"
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

## Finding 41

**Audit ID:** `LRB094-0041`
**Finding Stable ID:** `g2/a1/sl|vor|idx:636|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `vor|idx:636`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** {"lv":"pred • sproti","study.translation":"pred • sproti","study.explanation":"[\"Glavna ideja: vor pomeni pred časom ali pred krajem.\",\"Če je govora o času, »vor« pomeni »pred«.\",\"Če je govora o kraju, »vor« pomeni »sproti« ali »pri«.\",\"V urnem času vor pomeni 'do', npr. fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"pred jedjo si umyjem roke.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"avto stoji sproti hiši.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"je brez pet osem.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"po jedi se gremo sprehajati.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"pred / sproti\",\"example\":\"Vor dem Essen...\"},{\"word\":\"nach\",\"meaning\":\"po / v\",\"example\":\"Nach dem Essen...\"},{\"word\":\"neben\",\"meaning\":\"zraven\",\"example\":\"Neben dem Haus.\"},{\"word\":\"hinter\",\"meaning\":\"za\",\"example\":\"Hinter dem Haus.\"}]","study.tip":"{\"text\":\"Atceries: pirms laikā, priekšā vietā → vor.\"}","study.important":"[\"»vor« je lahko čas in kraj.\",\"»vor dem Essen« = »pred jedjo«; »vor dem Haus« = »sproti hiši«.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte vor\|idx:636, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “pirms • priekšā” un DE “vor” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "vor",
  "lv": "pred • sproti",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "pred • sproti",
    "explanation": [
      "Glavna ideja: vor pomeni pred časom ali pred krajem.",
      "Če je govora o času, »vor« pomeni »pred«.",
      "Če je govora o kraju, »vor« pomeni »sproti« ali »pri«.",
      "V urnem času vor pomeni 'do', npr. fünf vor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "pred jedjo si umyjem roke."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "avto stoji sproti hiši."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "je brez pet osem."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "po jedi se gremo sprehajati."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "pred / sproti",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "po / v",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "zraven",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "za",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Atceries: pirms laikā, priekšā vietā → vor."
    },
    "important": [
      "»vor« je lahko čas in kraj.",
      "»vor dem Essen« = »pred jedjo«; »vor dem Haus« = »sproti hiši«."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vor",
          "fünf vor acht"
        ],
        "purple": [
          "pirms",
          "priekšā",
          "Glavna"
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
              "bez piecām"
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
              "blakus"
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
              "aiz"
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

## Finding 42

**Audit ID:** `LRB094-0042`
**Finding Stable ID:** `g2/a1/sl|was|idx:644|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `was|idx:644`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** kas • ko
**DE reference (read-only):** was
**CURRENT (captured scope):** {"lv":"kaj • kaj","study.translation":"kaj • kaj","study.explanation":"[\"Glavna ideja: kaj je vprašalna beseda o stvareh in dogodkih - v latvijščini je kaj ali kaj, odvisno od dela stavka.\",\"»was« sprašuje o stvareh, dogodkih in dejstvih, ne o osebah.\",\"V nemščini se was ne spremeni po pregibu - vedno izgleda kot was.\",\"Če je bil predmet stavka, se v latvijščini prevede kot kas (Was ist das? = Kaj je?).\",\"Če je »was« dopolnilo glagola (predmet), se v slovenščini prevede s »kaj« (Was machst du? = Kaj delaš?).\",\"O osebah sprašuj z »wer« (kaj/kateri), ne s »was«.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Kaj je\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Kaj se je zgodilo?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Kaj delaš zdaj\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Kaj hočeš piti?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Kaj pomeni ta beseda?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Katera je vaša najljubša hrana?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Kaj si rekel\"}]","study.tip":"[\"»was« se sam ne spreminja — v nemščini je vedno »was«; v slovenščini izberi »kaj« ali »kaj« glede na del stavka.\",\"Hiter trik: če je odgovor »To je ...«, uporabi »kaj«; če odgovor pride za glagolom kot dopolnilo, uporabi »kaj«.\"]","study.important":"[\"»was« sprašuje o stvareh, dogodkih in dejstvih — nikoli o osebah.\",\"O osebah sprašuj z »wer« (kaj/kateri), ne s »was«.\",\"»was für (ein/eine)« pomeni »kaj kot« in sprašuje o lastnosti ali vrsti (Was für ein Film ist das? = Kakšen film je to?).\",\"Napačno: Wer ist passiert? → Pravilno: Was ist passiert?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte was\|idx:644, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kas • ko” un DE “was” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "was",
  "lv": "kaj • kaj",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "kaj • kaj",
    "explanation": [
      "Glavna ideja: kaj je vprašalna beseda o stvareh in dogodkih - v latvijščini je kaj ali kaj, odvisno od dela stavka.",
      "»was« sprašuje o stvareh, dogodkih in dejstvih, ne o osebah.",
      "V nemščini se was ne spremeni po pregibu - vedno izgleda kot was.",
      "Če je bil predmet stavka, se v latvijščini prevede kot kas (Was ist das? = Kaj je?).",
      "Če je »was« dopolnilo glagola (predmet), se v slovenščini prevede s »kaj« (Was machst du? = Kaj delaš?).",
      "O osebah sprašuj z »wer« (kaj/kateri), ne s »was«."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Kaj je"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Kaj se je zgodilo?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Kaj delaš zdaj"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Kaj hočeš piti?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Kaj pomeni ta beseda?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Katera je vaša najljubša hrana?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Kaj si rekel"
      }
    ],
    "tip": [
      "»was« se sam ne spreminja — v nemščini je vedno »was«; v slovenščini izberi »kaj« ali »kaj« glede na del stavka.",
      "Hiter trik: če je odgovor »To je ...«, uporabi »kaj«; če odgovor pride za glagolom kot dopolnilo, uporabi »kaj«."
    ],
    "important": [
      "»was« sprašuje o stvareh, dogodkih in dejstvih — nikoli o osebah.",
      "O osebah sprašuj z »wer« (kaj/kateri), ne s »was«.",
      "»was für (ein/eine)« pomeni »kaj kot« in sprašuje o lastnosti ali vrsti (Was für ein Film ist das? = Kakšen film je to?).",
      "Napačno: Wer ist passiert? → Pravilno: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "was"
        ],
        "purple": [
          "kas",
          "ko"
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
              "Kaj"
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
              "Kaj"
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
              "Kaj"
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
              "Ko"
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
              "Kaj"
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
              "Katera"
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
              "Kaj"
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
            "kas",
            "ko"
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

## Finding 43

**Audit ID:** `LRB094-0043`
**Finding Stable ID:** `g2/a1/sl|wenn|idx:655|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `wenn|idx:655`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** {"lv":"če • kdaj","study.translation":"če • kdaj","study.explanation":"[\"Glavna ideja: »wenn« pomeni »če« ali »kdaj« glede na situacijo.\",\"Če je govora o pogoju, prevedi kot »če«.\",\"Če gre za ponavljajoči se ali splošni čas, prevedite kot kdaj.\",\"Po »wenn« se glagol v nemščini običajno nahaja na koncu stavka.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"če imaš čas, se oglasi.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"če pada, ostanem doma.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"ko sem utrujen, pijem kavo.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"ne vem, ali bo prišel.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"če / kdaj\",\"example\":\"Wenn du Zeit hast...\"},{\"word\":\"ob\",\"meaning\":\"ali pri posrednem vprašanju\",\"example\":\"Ich weiß nicht, ob...\"},{\"word\":\"wann\",\"meaning\":\"kdaj v vprašanju\",\"example\":\"Wann kommst du?\"},{\"word\":\"weil\",\"meaning\":\"ker\",\"example\":\"Ich bleibe, weil ich krank bin.\"}]","study.tip":"{\"text\":\"Atceries: nosacījums → wenn; jautājums “kad?” → wann.\"}","study.important":"[\"»wenn« in »wann« nista ista.\",\"»Wann kommst du?« je vprašanje. »Wenn du kommst...« je pogoj/čas.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte wenn\|idx:655, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “ja • kad” un DE “wenn” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wenn",
  "lv": "če • kdaj",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "če • kdaj",
    "explanation": [
      "Glavna ideja: »wenn« pomeni »če« ali »kdaj« glede na situacijo.",
      "Če je govora o pogoju, prevedi kot »če«.",
      "Če gre za ponavljajoči se ali splošni čas, prevedite kot kdaj.",
      "Po »wenn« se glagol v nemščini običajno nahaja na koncu stavka."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "če imaš čas, se oglasi."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "če pada, ostanem doma."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "ko sem utrujen, pijem kavo."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "ne vem, ali bo prišel."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "če / kdaj",
        "example": "Wenn du Zeit hast..."
      },
      {
        "word": "ob",
        "meaning": "ali pri posrednem vprašanju",
        "example": "Ich weiß nicht, ob..."
      },
      {
        "word": "wann",
        "meaning": "kdaj v vprašanju",
        "example": "Wann kommst du?"
      },
      {
        "word": "weil",
        "meaning": "ker",
        "example": "Ich bleibe, weil ich krank bin."
      }
    ],
    "tip": {
      "text": "Atceries: nosacījums → wenn; jautājums “kad?” → wann."
    },
    "important": [
      "»wenn« in »wann« nista ista.",
      "»Wann kommst du?« je vprašanje. »Wenn du kommst...« je pogoj/čas."
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
          "beigās"
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
              "ja"
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
              "ja",
              "kad"
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

## Finding 44

**Audit ID:** `LRB094-0044`
**Finding Stable ID:** `g2/a1/sl|wer|idx:656|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `wer|idx:656`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** {"lv":"kaj • kateri","study.translation":"kaj • kateri","study.explanation":"[\"Glavna ideja: wer je vprašalna beseda o identiteti osebe – v latvijščini je kdo ali kdo.\",\"»wer« sprašuje o osebah, ne o stvareh ali dogodkih.\",\"Stvari in dogodki se sprašujejo z was, ne wer.\",\"»wer« v nemščini je običajno predmet stavka (nominativ) — »Wer ist das?« = »Kaj je to?«?\",\"Če sprašuješ, kateri točno od več oseb, »wer« pogosto uporabite skupaj s »von« (»wer von euch« = »kateri od vas«).\",\"»wer« se spreminja glede na primer: »wen« (akuzativ), »wem« (dativ), »wessen« (genitiv) — na ravni A1 se najpogosteje srečuje »wer«.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Kaj je\"},{\"de\":\"Wer bist du?\",\"lv\":\"Kdo si\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Kaj prihaja danes?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Kaj je tvoja učiteljica?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Kateri od vas govori nemščino?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Kaj je to reklo?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Kateri želi kavo?\"}]","study.tip":"[\"»wer« sprašuje o osebah (kaj/kateri) — za stvari in dogodke uporabi »was«.\",\"Če želite vprašati o izbiri med več osebami, uporabite wer von... (kateri od ...).\"]","study.important":"[\"»wer« sprašuje samo o osebah, nikoli o stvareh.\",\"O stvareh in dogodkih sprašuj s »was«, ne s »wer«.\",\"»wer« se spreminja glede na primer: »wen«, »wem«, »wessen« — vendar je osnovni oblik »wer«.\",\"Napačno: Wer ist passiert? → Pravilno: Was ist passiert?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte wer\|idx:656, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kas • kurš” un DE “wer” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wer",
  "lv": "kaj • kateri",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "kaj • kateri",
    "explanation": [
      "Glavna ideja: wer je vprašalna beseda o identiteti osebe – v latvijščini je kdo ali kdo.",
      "»wer« sprašuje o osebah, ne o stvareh ali dogodkih.",
      "Stvari in dogodki se sprašujejo z was, ne wer.",
      "»wer« v nemščini je običajno predmet stavka (nominativ) — »Wer ist das?« = »Kaj je to?«?",
      "Če sprašuješ, kateri točno od več oseb, »wer« pogosto uporabite skupaj s »von« (»wer von euch« = »kateri od vas«).",
      "»wer« se spreminja glede na primer: »wen« (akuzativ), »wem« (dativ), »wessen« (genitiv) — na ravni A1 se najpogosteje srečuje »wer«."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Kaj je"
      },
      {
        "de": "Wer bist du?",
        "lv": "Kdo si"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Kaj prihaja danes?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Kaj je tvoja učiteljica?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Kateri od vas govori nemščino?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Kaj je to reklo?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Kateri želi kavo?"
      }
    ],
    "tip": [
      "»wer« sprašuje o osebah (kaj/kateri) — za stvari in dogodke uporabi »was«.",
      "Če želite vprašati o izbiri med več osebami, uporabite wer von... (kateri od ...)."
    ],
    "important": [
      "»wer« sprašuje samo o osebah, nikoli o stvareh.",
      "O stvareh in dogodkih sprašuj s »was«, ne s »wer«.",
      "»wer« se spreminja glede na primer: »wen«, »wem«, »wessen« — vendar je osnovni oblik »wer«.",
      "Napačno: Wer ist passiert? → Pravilno: Was ist passiert?"
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
              "Kaj"
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
              "Kdo"
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
              "Kaj"
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

## Finding 45

**Audit ID:** `LRB094-0045`
**Finding Stable ID:** `g2/a1/sl|werden|idx:657|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `werden|idx:657`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** kļūt
**DE reference (read-only):** werden
**CURRENT (captured scope):** {"lv":"postati","study.translation":"postati","study.explanation":"[\"Glavna ideja: »werden« na ravni A1 najpogosteje pomeni »postati«.\",\"Uporablja se, ko se nekaj spremeni ali postane drugačno.\",\"V poznejši nemščini se werden uporablja tudi za prihodnjik in pasiv.\",\"na ravni A1 je najpomembnejši stavek »Ich werde müde.« = »Postajam utrujen.«.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"postajam utrujen.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"postaja mrzlo.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"postaja zdravnica.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"sem utrujen.\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"postati\",\"example\":\"Ich werde müde.\"},{\"word\":\"sein\",\"meaning\":\"biti\",\"example\":\"Ich bin müde.\"},{\"word\":\"bleiben\",\"meaning\":\"ostati\",\"example\":\"Ich bleibe hier.\"},{\"word\":\"machen\",\"meaning\":\"delati / narediti\",\"example\":\"Ich mache das.\"}]","study.tip":"{\"text\":\"Atceries: izmaiņa/stāvoklis kļūst citāds → werden.\"}","study.important":"[\"»werden« ni isto kot »sein«.\",\"»Ich werde müde« = sem postaja utrujen; »Ich bin müde« = sem utrujen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte werden\|idx:657, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “kļūt” un DE “werden” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "werden",
  "lv": "postati",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "postati",
    "explanation": [
      "Glavna ideja: »werden« na ravni A1 najpogosteje pomeni »postati«.",
      "Uporablja se, ko se nekaj spremeni ali postane drugačno.",
      "V poznejši nemščini se werden uporablja tudi za prihodnjik in pasiv.",
      "na ravni A1 je najpomembnejši stavek »Ich werde müde.« = »Postajam utrujen.«."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "postajam utrujen."
      },
      {
        "de": "Es wird kalt.",
        "lv": "postaja mrzlo."
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "postaja zdravnica."
      },
      {
        "de": "Ich bin müde.",
        "lv": "sem utrujen."
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "postati",
        "example": "Ich werde müde."
      },
      {
        "word": "sein",
        "meaning": "biti",
        "example": "Ich bin müde."
      },
      {
        "word": "bleiben",
        "meaning": "ostati",
        "example": "Ich bleibe hier."
      },
      {
        "word": "machen",
        "meaning": "delati / narediti",
        "example": "Ich mache das."
      }
    ],
    "tip": {
      "text": "Atceries: izmaiņa/stāvoklis kļūst citāds → werden."
    },
    "important": [
      "»werden« ni isto kot »sein«.",
      "»Ich werde müde« = sem postaja utrujen; »Ich bin müde« = sem utrujen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "werden",
          "Ich werde"
        ],
        "purple": [
          "kļūt",
          "Galvenā",
          "kļūst"
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
              "kļūstu"
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
              "kļūst"
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
              "kļūst"
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
              "esmu"
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
              "kļūt"
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
              "būt"
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
              "palikt"
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
              "darīt",
              "taisīt"
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
            "izmaiņa",
            "kļūst"
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
            "kļūstu"
          ],
          "red": [
            "bin",
            "esmu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 46

**Audit ID:** `LRB094-0046`
**Finding Stable ID:** `g2/a1/sl|Wetter|idx:658|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0002`
**Lang:** sl
**Card:** `Wetter|idx:658`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** laiks (laikapstākļi)
**DE reference (read-only):** Wetter
**CURRENT (captured scope):** {"lv":"vreme (vremenski pogoji)","study.translation":"vreme (vremenski pogoji)","study.explanation":"[\"Glavna ideja: das Wetter pomeni vreme – sončno, deževno, hladno ali toplo.\",\"Latvijska beseda \\\"laiks\\\" lahko pomeni tako vreme kot čas na uri - v nemščini je drugače.\",\"Pogovarjajte se o vremenu v naravi z das Wetter: Wie ist das Wetter heute?\",\"V stavku se pogosto uporablja »das Wetter« skupaj z besedami kot »warm« ali »kalt«.\",\"Ne zamešaj z »die Zeit« — to je čas kot trenutek ali priložnost (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"kakšno vreme je danes?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"vreme je lepo.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"vreme je slabo.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"pozimi je vreme pogosto hladno.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"govorimo o vremenu.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"jutri bo vreme boljše.\"}]","study.comparison":"[{\"word\":\"Wetter\",\"meaning\":\"vremenski pogoji\",\"example\":\"Das Wetter ist schön.\"},{\"word\":\"Zeit\",\"meaning\":\"čas (moment)\",\"example\":\"Ich habe keine Zeit.\"},{\"word\":\"Regen\",\"meaning\":\"dež\",\"example\":\"Es gibt viel Regen.\"},{\"word\":\"Sonne\",\"meaning\":\"sonce\",\"example\":\"Die Sonne scheint.\"}]","study.tip":"[\"Ko govorimo o soncu, dežju ali zunanji temperaturi, uporabite das Wetter.\",\"Ne pozabite: Wie ist das Wetter? = Koliko je ura? (ne ura).\"]","study.important":"[\"»das Wetter« = vremenski pogoji, ne čas na uri.\",\"»die Zeit« = čas kot moment ali priložnost — druga kartica na A1.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Wetter\|idx:658, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “laiks (laikapstākļi)” un DE “Wetter” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Wetter",
  "de_article": "das",
  "lv": "vreme (vremenski pogoji)",
  "level": "A1",
  "study": {
    "id": "a1-wetter",
    "layout": "standardStudy",
    "translation": "vreme (vremenski pogoji)",
    "explanation": [
      "Glavna ideja: das Wetter pomeni vreme – sončno, deževno, hladno ali toplo.",
      "Latvijska beseda \"laiks\" lahko pomeni tako vreme kot čas na uri - v nemščini je drugače.",
      "Pogovarjajte se o vremenu v naravi z das Wetter: Wie ist das Wetter heute?",
      "V stavku se pogosto uporablja »das Wetter« skupaj z besedami kot »warm« ali »kalt«.",
      "Ne zamešaj z »die Zeit« — to je čas kot trenutek ali priložnost (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Wie ist das Wetter heute?",
        "lv": "kakšno vreme je danes?"
      },
      {
        "de": "Das Wetter ist schön.",
        "lv": "vreme je lepo."
      },
      {
        "de": "Das Wetter ist schlecht.",
        "lv": "vreme je slabo."
      },
      {
        "de": "Im Winter ist das Wetter oft kalt.",
        "lv": "pozimi je vreme pogosto hladno."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "govorimo o vremenu."
      },
      {
        "de": "Morgen wird das Wetter besser.",
        "lv": "jutri bo vreme boljše."
      }
    ],
    "comparison": [
      {
        "word": "Wetter",
        "meaning": "vremenski pogoji",
        "example": "Das Wetter ist schön."
      },
      {
        "word": "Zeit",
        "meaning": "čas (moment)",
        "example": "Ich habe keine Zeit."
      },
      {
        "word": "Regen",
        "meaning": "dež",
        "example": "Es gibt viel Regen."
      },
      {
        "word": "Sonne",
        "meaning": "sonce",
        "example": "Die Sonne scheint."
      }
    ],
    "tip": [
      "Ko govorimo o soncu, dežju ali zunanji temperaturi, uporabite das Wetter.",
      "Ne pozabite: Wie ist das Wetter? = Koliko je ura? (ne ura)."
    ],
    "important": [
      "»das Wetter« = vremenski pogoji, ne čas na uri.",
      "»die Zeit« = čas kot moment ali priložnost — druga kartica na A1."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Wetter",
          "Zeit"
        ],
        "purple": [
          "Glavna"
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
              "laiks"
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
              "laiks"
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
              "laiks"
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
              "laiks"
            ],
            "yellow": [
              "ziemā"
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
              "laiku"
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
              "laiks"
            ],
            "green": [
              "labāks"
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
              "laikapstākļi"
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
              "laiks"
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
              "lietus"
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
              "saule"
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
            "laiks"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 47

**Audit ID:** `LRB094-0047`
**Finding Stable ID:** `g2/a1/sl|wie|idx:660|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0003`
**Lang:** sl
**Card:** `wie|idx:660`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** kā • cik
**DE reference (read-only):** wie
**CURRENT (captured scope):** {"lv":"kako • koliko","study.translation":"kako • koliko","study.explanation":"[\"Glavna ideja: wie sprašuje o vrsti ali kakovosti (kako) in o količini ali številu (koliko), odvisno od konteksta.\",\"»wie« sam (Wie geht's?) sprašuje o vrsti — v slovenščini »kako«.\",\"»wie« + pridevnik (»wie viel«, »wie alt«, »wie lange«) sprašuje o količini, starosti ali trajanju — v slovenščini »koliko«.\",\"»wie viel(e)« pomeni »koliko«; »wie alt« pomeni »koliko let«; »wie lange« pomeni »kako dolgo«.\",\"V primerjavah wie pomeni kot (torej groß wie = velik kot).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"kako ti gre?\"},{\"de\":\"Wie heißt du?\",\"lv\":\"kako se kličeš?\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"koliko stane?\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"koliko let imaš?\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"kako dolgo traja film?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"on je enako visok kot njen oče.\"}]","study.tip":"[\"»wie« sama = »kako« (vrsta); »wie« + pridevnik (»viel/alt/lange«) = »koliko« (količina).\",\"Pri primerjavi »so ... wie« = »tako ... kot«.\"]","study.important":"[\"»wie viel(e)« = »koliko«; »wie alt« = »koliko let«; »wie lange« = »kako dolgo«.\",\"»wie« samo (Wie...?) običajno = »kako«, ne »koliko«.\",\"Napačno: Koliko si star? → Pravilno: Kako si? (Wie geht's?)\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte wie\|idx:660, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kā • cik” un DE “wie” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wie",
  "lv": "kako • koliko",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "kako • koliko",
    "explanation": [
      "Glavna ideja: wie sprašuje o vrsti ali kakovosti (kako) in o količini ali številu (koliko), odvisno od konteksta.",
      "»wie« sam (Wie geht's?) sprašuje o vrsti — v slovenščini »kako«.",
      "»wie« + pridevnik (»wie viel«, »wie alt«, »wie lange«) sprašuje o količini, starosti ali trajanju — v slovenščini »koliko«.",
      "»wie viel(e)« pomeni »koliko«; »wie alt« pomeni »koliko let«; »wie lange« pomeni »kako dolgo«.",
      "V primerjavah wie pomeni kot (torej groß wie = velik kot)."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "kako ti gre?"
      },
      {
        "de": "Wie heißt du?",
        "lv": "kako se kličeš?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "koliko stane?"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "koliko let imaš?"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "kako dolgo traja film?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "on je enako visok kot njen oče."
      }
    ],
    "tip": [
      "»wie« sama = »kako« (vrsta); »wie« + pridevnik (»viel/alt/lange«) = »koliko« (količina).",
      "Pri primerjavi »so ... wie« = »tako ... kot«."
    ],
    "important": [
      "»wie viel(e)« = »koliko«; »wie alt« = »koliko let«; »wie lange« = »kako dolgo«.",
      "»wie« samo (Wie...?) običajno = »kako«, ne »koliko«.",
      "Napačno: Koliko si star? → Pravilno: Kako si? (Wie geht's?)"
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
              "kā"
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
            "Napačno"
          ],
          "blue": [
            "Napačno"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB094-0048`
**Finding Stable ID:** `g2/a1/sl|zu|idx:668|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0004`
**Lang:** sl
**Card:** `zu|idx:668`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** uz • pie
**DE reference (read-only):** zu
**CURRENT (captured scope):** {"lv":"na • pri","study.translation":"na • pri","study.explanation":"[\"Glavna ideja: »zu« zelo pogosto pomeni »na« ali »pri«, vendar pa ima tudi vlogo z infinitivom.\",\"Pri ljudeh in institucijah zu pogosto pomeni pri ali do.\",\"S pridevniki lahko pomeni tudi zu.\",\"V konstrukciji »zu« + neskončnik to pomaga oblikovati neskončnik: »zu lernen«, »zu gehen«.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"grem pri zdravnika.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"gremo v šolo.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"to je predrago.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"nimam časa za učenje.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"na / pri / preveč / infinitiv\",\"example\":\"Ich gehe zum Arzt.\"},{\"word\":\"nach\",\"meaning\":\"na s kraji/državami\",\"example\":\"Ich fahre nach Berlin.\"},{\"word\":\"in\",\"meaning\":\"noter / na mesto\",\"example\":\"Ich gehe in die Schule.\"},{\"word\":\"bei\",\"meaning\":\"pri osebi / pri delu\",\"example\":\"Ich bin bei Anna.\"}]","study.tip":"{\"text\":\"Atceries: pie ārsta → zum Arzt; pārāk dārgi → zu teuer.\"}","study.important":"[\"»zu« ima zelo veliko pomenov, zato vedno poglejte razporeditev.\",\"»zu teuer« pomeni »predrago«, ne »na drago«.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte zu\|idx:668, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “uz • pie” un DE “zu” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zu",
  "lv": "na • pri",
  "level": "A1",
  "study": {
    "id": "a1-zu",
    "layout": "standardStudy",
    "translation": "na • pri",
    "explanation": [
      "Glavna ideja: »zu« zelo pogosto pomeni »na« ali »pri«, vendar pa ima tudi vlogo z infinitivom.",
      "Pri ljudeh in institucijah zu pogosto pomeni pri ali do.",
      "S pridevniki lahko pomeni tudi zu.",
      "V konstrukciji »zu« + neskončnik to pomaga oblikovati neskončnik: »zu lernen«, »zu gehen«."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "grem pri zdravnika."
      },
      {
        "de": "Wir gehen zur Schule.",
        "lv": "gremo v šolo."
      },
      {
        "de": "Das ist zu teuer.",
        "lv": "to je predrago."
      },
      {
        "de": "Ich habe keine Zeit zu lernen.",
        "lv": "nimam časa za učenje."
      }
    ],
    "comparison": [
      {
        "word": "zu",
        "meaning": "na / pri / preveč / infinitiv",
        "example": "Ich gehe zum Arzt."
      },
      {
        "word": "nach",
        "meaning": "na s kraji/državami",
        "example": "Ich fahre nach Berlin."
      },
      {
        "word": "in",
        "meaning": "noter / na mesto",
        "example": "Ich gehe in die Schule."
      },
      {
        "word": "bei",
        "meaning": "pri osebi / pri delu",
        "example": "Ich bin bei Anna."
      }
    ],
    "tip": {
      "text": "Atceries: pie ārsta → zum Arzt; pārāk dārgi → zu teuer."
    },
    "important": [
      "»zu« ima zelo veliko pomenov, zato vedno poglejte razporeditev.",
      "»zu teuer« pomeni »predrago«, ne »na drago«."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zu",
          "zu lernen",
          "zu gehen"
        ],
        "purple": [
          "uz",
          "pie",
          "Galvenā",
          "nenoteiksmi"
        ],
        "green": [
          "Galvenā",
          "Galvenā"
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
              "pie ārsta"
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
              "uz skolu"
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
              "pārāk dārgi"
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
              "mācīties"
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
              "uz",
              "pie",
              "pārāk",
              "infinitīvs"
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
              "uz"
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
              "iekšā",
              "uz vietu"
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
              "pie"
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
            "pie ārsta",
            "pārāk dārgi"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "zu"
          ],
          "purple": [
            "konstrukciju"
          ]
        },
        {
          "blue": [
            "zu teuer"
          ],
          "purple": [
            "pārāk dārgi"
          ],
          "red": [
            "uz dārgi"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 49

**Audit ID:** `LRB094-0049`
**Finding Stable ID:** `g2/a1/sl|Zug|idx:671|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0005`
**Lang:** sl
**Card:** `Zug|idx:671`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** vilciens
**DE reference (read-only):** Zug
**CURRENT (captured scope):** {"lv":"vlak","study.translation":"vlak","study.explanation":"[\"Glavna misel: der Zug na ravni A1 največkrat pomeni vlak.\",\"Uporablja se v vsakdanjih situacijah za vožnjo, prihod in odhod.\",\"V nekaterih drugih pomenih je Zug lahko pohod, osnutek ali značilnost, vendar to niso glavni pomeni A1.\",\"Zelo pogosti frazi sta mit dem Zug fahren in Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"vlak pride ob osmih.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"vozim se z vlakom.\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"vlak je poln.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"avtobus pride pozneje.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"vlak\",\"example\":\"Der Zug kommt.\"},{\"word\":\"die Bahn\",\"meaning\":\"železnica / voznja z vlakom\",\"example\":\"Ich fahre mit der Bahn.\"},{\"word\":\"der Bus\",\"meaning\":\"avtobus\",\"example\":\"Der Bus kommt.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"tramvaj\",\"example\":\"Die Straßenbahn ist hier.\"}]","study.tip":"{\"text\":\"Atceries: konkrēts vilciens → der Zug.\"}","study.important":"[\"»der Zug« v naslovu je treba razumeti kot »vlak«.\",\"Redkejši pomeni niso potrebni v glavnem A1 naslovu.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte Zug\|idx:671, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “vilciens” un DE “Zug” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
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
  "lv": "vlak",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "vlak",
    "explanation": [
      "Glavna misel: der Zug na ravni A1 največkrat pomeni vlak.",
      "Uporablja se v vsakdanjih situacijah za vožnjo, prihod in odhod.",
      "V nekaterih drugih pomenih je Zug lahko pohod, osnutek ali značilnost, vendar to niso glavni pomeni A1.",
      "Zelo pogosti frazi sta mit dem Zug fahren in Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "vlak pride ob osmih."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "vozim se z vlakom."
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "vlak je poln."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "avtobus pride pozneje."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "vlak",
        "example": "Der Zug kommt."
      },
      {
        "word": "die Bahn",
        "meaning": "železnica / voznja z vlakom",
        "example": "Ich fahre mit der Bahn."
      },
      {
        "word": "der Bus",
        "meaning": "avtobus",
        "example": "Der Bus kommt."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "tramvaj",
        "example": "Die Straßenbahn ist hier."
      }
    ],
    "tip": {
      "text": "Atceries: konkrēts vilciens → der Zug."
    },
    "important": [
      "»der Zug« v naslovu je treba razumeti kot »vlak«.",
      "Redkejši pomeni niso potrebni v glavnem A1 naslovu."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Zug",
          "Zug",
          "mit dem Zug fahren"
        ],
        "purple": [
          "Glavna",
          "Glavna"
        ],
        "red": [
          "Glavna",
          "Glavna",
          "Glavna"
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
              "vilciens"
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
              "ar vilcienu"
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
              "vilciens"
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
              "Autobuss"
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
              "vilciens"
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
              "dzelzceļš",
              "vilcienu"
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
              "autobuss"
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
              "tramvajs"
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
            "konkrēts vilciens"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der Zug"
          ],
          "purple": [
            "vilciens"
          ]
        },
        {
          "red": [
            "Retākās nozīmes"
          ],
          "purple": [
            "a1 virsrakstā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 50

**Audit ID:** `LRB094-0050`
**Finding Stable ID:** `g2/a1/sl|zum|idx:672|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SL-L0001`
**Lang:** sl
**Card:** `zum|idx:672`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sl-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** uz • pie
**DE reference (read-only):** zum
**CURRENT (captured scope):** {"lv":"na • pri","study.translation":"na • pri","study.explanation":"[\"»zum« je okrajšava predloga »zu« in članka »dem«.\",\"Polna oblika: zu dem (komu?).\",\"Uporablja se s samostalniki moškim in nevtralnim spolom, ko nakazuje smer ali namen.\",\"Pogosto pomeni nečemu ali nekomu - zdravniku, postaji, prijatelju.\",\"V praksi se skoraj vedno uporablja zum namesto polnega zu dem.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"grem pri zdravnika.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"vozimo na postajo.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"ona gre v trgovino.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"pridi jest!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"on vozi na letališče.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"gremo na koncert.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"darilo je za rojstni dan.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"grem pri frizerja.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"na / pri (čemu?)\",\"example\":\"zum Arzt – pri zdravniku\"},{\"word\":\"zur\",\"meaning\":\"na / pri (ženski spol)\",\"example\":\"zur Schule – v šolo\"},{\"word\":\"zu\",\"meaning\":\"na / pri / preveč\",\"example\":\"zu Hause – doma\"},{\"word\":\"nach\",\"meaning\":\"na (mesta/države)\",\"example\":\"nach Berlin – v Berlín\"},{\"word\":\"bei\",\"meaning\":\"pri (nahajanje)\",\"example\":\"beim Arzt – pri zdravniku\"}]","study.tip":"[\"Ne pozabite: zu + dem → zum (za koga?).\",\"Za ženske besede: zu + der → zur.\"]","study.important":"[\"»zum« = »zu dem«, le s samostalniki moškim ali nevtralnim spolom v dajniku.\",\"Označuje smer ali cilj: k zdravniku, na postajo, k prijatelju.\",\"Pri ženskem spolu uporabi »zur«: »zur Bank«, »zur Post«.\",\"Ne sme se zamenjati z bei (nahaja se na) ali nach (za mesta brez člena).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta sl kartīte zum\|idx:672, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “uz • pie” un DE “zum” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zum",
  "lv": "na • pri",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "na • pri",
    "explanation": [
      "»zum« je okrajšava predloga »zu« in članka »dem«.",
      "Polna oblika: zu dem (komu?).",
      "Uporablja se s samostalniki moškim in nevtralnim spolom, ko nakazuje smer ali namen.",
      "Pogosto pomeni nečemu ali nekomu - zdravniku, postaji, prijatelju.",
      "V praksi se skoraj vedno uporablja zum namesto polnega zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "grem pri zdravnika."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "vozimo na postajo."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "ona gre v trgovino."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "pridi jest!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "on vozi na letališče."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "gremo na koncert."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "darilo je za rojstni dan."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "grem pri frizerja."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "na / pri (čemu?)",
        "example": "zum Arzt – pri zdravniku"
      },
      {
        "word": "zur",
        "meaning": "na / pri (ženski spol)",
        "example": "zur Schule – v šolo"
      },
      {
        "word": "zu",
        "meaning": "na / pri / preveč",
        "example": "zu Hause – doma"
      },
      {
        "word": "nach",
        "meaning": "na (mesta/države)",
        "example": "nach Berlin – v Berlín"
      },
      {
        "word": "bei",
        "meaning": "pri (nahajanje)",
        "example": "beim Arzt – pri zdravniku"
      }
    ],
    "tip": [
      "Ne pozabite: zu + dem → zum (za koga?).",
      "Za ženske besede: zu + der → zur."
    ],
    "important": [
      "»zum« = »zu dem«, le s samostalniki moškim ali nevtralnim spolom v dajniku.",
      "Označuje smer ali cilj: k zdravniku, na postajo, k prijatelju.",
      "Pri ženskem spolu uporabi »zur«: »zur Bank«, »zur Post«.",
      "Ne sme se zamenjati z bei (nahaja se na) ali nach (za mesta brez člena)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zum",
          "zu dem"
        ],
        "purple": [
          "zum",
          "zum"
        ],
        "green": [
          "zum",
          "mērķi"
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
              "pie ārsta"
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
              "uz staciju"
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
              "uz veikalu"
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
              "ēst"
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
              "uz lidostu"
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
              "uz koncertu"
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
              "dzimšanas dienai"
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
              "pie friziera"
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
              "uz",
              "pie"
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
              "uz",
              "pie"
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
              "uz",
              "pie",
              "pārāk"
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
              "uz"
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
              "pie"
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
          ]
        },
        {
          "yellow": [
            "zur"
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
            "kam?"
          ]
        },
        {
          "purple": [
            "Označuje",
            "Označuje"
          ],
          "green": [
            "Označuje"
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

