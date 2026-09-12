# G2/A1 LRB LRB-102 — OWNER VIEW

**Batch:** LRB-102
**Rows:** 50/50
**Languages:** TR 20 + UK 30
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-12T18:37:14.850Z
**Source commit:** `35af3560bac7132af7bb2bc16e80af1d51258023`
**Branch:** `cursor/lrb-102-owner-review-pc2-3db2`
**Overrides SHA256:** `150365ddecc86bcd2c313a227820848be79f064cc39fc2ec1d67593563d3e8cd`

> OWNER approved overrides applied mechanically. All 50 LABOT. No Cursor linguistic analysis.

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB102-0001`
**Finding Stable ID:** `g2/a1/tr|noch mal|idx:701|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `noch mal|idx:701`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Tekrar","study.translation":"Tekrar","study.explanation":"[\"Ana fikir: Tekrar anlamına gelir - bir eylemi tekrarlamak veya tekrarlanmasını istemek.\"]","study.examples":"[{\"de\":\"Noch mal, bitte.\",\"lv\":\"Bir kez daha lütfen.\"},{\"de\":\"Noch mal, bitte.\",\"lv\":\"Bir kez daha lütfen\"},{\"de\":\"Sag das noch mal.\",\"lv\":\"Tekrar söyle\"}]","study.tip":"[\"Bağlam bu anlama uyduğu zaman noch mal'ı kullanın.\",\"Bağlam bu anlama uyduğu zaman noch mal'ı kullanın.\"]","study.important":"[\"Yine, bir eylemi tekrarlamak veya tekrarlanmasını istemek anlamına gelir.\",\"Noch mal: Kullanmadan önce bağlamı kontrol edin.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"tekrar • bir kez daha","study.translation":"tekrar • bir kez daha","study.explanation":"[\"Ana fikir: noch mal, bir eylemi tekrarlamak veya bir şeyin yeniden söylenmesini istemek için kullanılır.\",\"Bu ifade günlük konuşmada “tekrar” ve “bir kez daha” anlamına gelir.\"]","study.examples":"[{\"de\":\"Noch mal, bitte.\",\"lv\":\"Bir kez daha, lütfen.\"},{\"de\":\"Noch mal, bitte.\",\"lv\":\"Bir kez daha, lütfen.\"},{\"de\":\"Sag das noch mal.\",\"lv\":\"Bunu tekrar söyle.\"}]","study.tip":"[\"Bir şeyin yeniden yapılmasını isterken noch mal kullanılır.\"]","study.important":"[\"noch mal = tekrar / bir kez daha.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Punctuation and duplicated guidance; incomplete “again/one more time” headword nuance.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "noch mal",
  "lv": "tekrar • bir kez daha",
  "level": "A1",
  "study": {
    "id": "a1-noch-mal",
    "layout": "standardStudy",
    "translation": "tekrar • bir kez daha",
    "explanation": [
      "Ana fikir: noch mal, bir eylemi tekrarlamak veya bir şeyin yeniden söylenmesini istemek için kullanılır.",
      "Bu ifade günlük konuşmada “tekrar” ve “bir kez daha” anlamına gelir."
    ],
    "examples": [
      {
        "de": "Noch mal, bitte.",
        "lv": "Bir kez daha, lütfen."
      },
      {
        "de": "Noch mal, bitte.",
        "lv": "Bir kez daha, lütfen."
      },
      {
        "de": "Sag das noch mal.",
        "lv": "Bunu tekrar söyle."
      }
    ],
    "tip": [
      "Bir şeyin yeniden yapılmasını isterken noch mal kullanılır."
    ],
    "important": [
      "noch mal = tekrar / bir kez daha."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "noch mal",
  "lv": "Tekrar",
  "level": "A1",
  "study": {
    "id": "a1-noch-mal",
    "layout": "standardStudy",
    "translation": "Tekrar",
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
        "lv": "Tekrar söyle"
      }
    ],
    "tip": [
      "Bağlam bu anlama uyduğu zaman noch mal'ı kullanın.",
      "Bağlam bu anlama uyduğu zaman noch mal'ı kullanın."
    ],
    "important": [
      "Yine, bir eylemi tekrarlamak veya tekrarlanmasını istemek anlamına gelir.",
      "Noch mal: Kullanmadan önce bağlamı kontrol edin."
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

## Finding 2

**Audit ID:** `LRB102-0002`
**Finding Stable ID:** `g2/a1/tr|Obst|idx:693|lv, study.translation, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Obst|idx:693`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Meyve","study.translation":"Meyve","study.explanation":"[\"Ana fikir: Genellikle meyve hakkında. Almancada çoğul *kalıp Obsts yoktur.\",\"Das Obst esas olarak şu anlama gelir: genel olarak meyve.\",\"Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil).\"]","study.examples":"[{\"de\":\"Wir essen viel Obst.\",\"lv\":\"Çok fazla meyve yiyoruz.\"},{\"de\":\"Wir essen viel Obst.\",\"lv\":\"Çok fazla meyve yiyoruz.\"},{\"de\":\"Obst ist gesund.\",\"lv\":\"Meyveler sağlıklıdır.\"},{\"de\":\"Ich mag Obst und Gemüse.\",\"lv\":\"Meyve ve sebzeleri severim.\"},{\"de\":\"Wir essen Obst.\",\"lv\":\"Meyve yeriz.\"}]","study.tip":"[\"Das Obst = meyve\",\"Bağlam anlama uyduğunda da Obst kullanın.\"]","study.important":"[\"Yanlış: die Obsts → Doğru: das Obst\",\"Das Obst = meyve (genel olarak).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"meyve","study.translation":"meyve","study.explanation":"[\"Ana fikir: das Obst, genel olarak meyveyi toplu bir kavram olarak belirtir.\",\"Almancada Obst çoğunlukla sayılamayan tekil bir isim gibi kullanılır; olağan çoğulu *Obsts değildir.\"]","study.examples":"[{\"de\":\"Wir essen viel Obst.\",\"lv\":\"Çok meyve yiyoruz.\"},{\"de\":\"Wir essen viel Obst.\",\"lv\":\"Çok meyve yiyoruz.\"},{\"de\":\"Obst ist gesund.\",\"lv\":\"Meyve sağlıklıdır.\"},{\"de\":\"Ich mag Obst und Gemüse.\",\"lv\":\"Meyve ve sebzeyi severim.\"},{\"de\":\"Wir essen Obst.\",\"lv\":\"Meyve yiyoruz.\"}]","study.tip":"[\"das Obst = genel anlamda meyve.\"]","study.important":"[\"Doğru kullanım: das Obst; genel anlamda çoğul yapılmaz.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: False plural/gender guidance and unnatural collective-fruit examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "meyve",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "meyve",
    "explanation": [
      "Ana fikir: das Obst, genel olarak meyveyi toplu bir kavram olarak belirtir.",
      "Almancada Obst çoğunlukla sayılamayan tekil bir isim gibi kullanılır; olağan çoğulu *Obsts değildir."
    ],
    "examples": [
      {
        "de": "Wir essen viel Obst.",
        "lv": "Çok meyve yiyoruz."
      },
      {
        "de": "Wir essen viel Obst.",
        "lv": "Çok meyve yiyoruz."
      },
      {
        "de": "Obst ist gesund.",
        "lv": "Meyve sağlıklıdır."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Meyve ve sebzeyi severim."
      },
      {
        "de": "Wir essen Obst.",
        "lv": "Meyve yiyoruz."
      }
    ],
    "tip": [
      "das Obst = genel anlamda meyve."
    ],
    "important": [
      "Doğru kullanım: das Obst; genel anlamda çoğul yapılmaz."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "Meyve",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "Meyve",
    "explanation": [
      "Ana fikir: Genellikle meyve hakkında. Almancada çoğul *kalıp Obsts yoktur.",
      "Das Obst esas olarak şu anlama gelir: genel olarak meyve.",
      "Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil)."
    ],
    "examples": [
      {
        "de": "Wir essen viel Obst.",
        "lv": "Çok fazla meyve yiyoruz."
      },
      {
        "de": "Wir essen viel Obst.",
        "lv": "Çok fazla meyve yiyoruz."
      },
      {
        "de": "Obst ist gesund.",
        "lv": "Meyveler sağlıklıdır."
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
      "Das Obst = meyve",
      "Bağlam anlama uyduğunda da Obst kullanın."
    ],
    "important": [
      "Yanlış: die Obsts → Doğru: das Obst",
      "Das Obst = meyve (genel olarak)."
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

## Finding 3

**Audit ID:** `LRB102-0003`
**Finding Stable ID:** `g2/a1/tr|Seite|idx:544|lv; study.translation; study.important; study.examples[0]|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `Seite|idx:544`
**Field / path:** `lv; study.translation; study.important; study.examples[0]`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Sayfa • Sayfa","study.translation":"Sayfa • Sayfa","study.important":"[\"Die Seite = sayfa VEYA sayfa – bağlam belirler.\",\"Her iki anlam için de çoğul: die Seiten.\"]","study.examples[0]":"{\"de\":\"Schlagt die Seite zwanzig auf.\",\"lv\":\"Sayfa 20 'ye gidin.\"}"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sayfa • taraf","study.translation":"sayfa • taraf","study.explanation":"[\"Ana fikir: die Seite bağlama göre “sayfa” veya “taraf” anlamına gelir.\",\"Kitap ve web bağlamında sayfayı; konum, görüş veya destek bağlamında tarafı belirtir.\",\"Her iki anlamda da çoğul biçim die Seiten olur.\"]","study.examples":"[{\"de\":\"Schlagt die Seite zwanzig auf.\",\"lv\":\"Yirminci sayfayı açın.\"},{\"de\":\"Auf der linken Seite ist ein Park.\",\"lv\":\"Sol tarafta bir park var.\"},{\"de\":\"Die Webseite lädt langsam.\",\"lv\":\"Web sayfası yavaş yükleniyor.\"},{\"de\":\"Er steht auf meiner Seite.\",\"lv\":\"O benim tarafımda.\"},{\"de\":\"Das Buch hat 200 Seiten.\",\"lv\":\"Kitabın 200 sayfası var.\"},{\"de\":\"Auf der anderen Seite der Straße.\",\"lv\":\"Sokağın karşı tarafında.\"}]","study.tip":"[\"Kitap veya web sitesi → sayfa; konum veya görüş → taraf.\"]","study.important":"[\"die Seite = sayfa veya taraf; anlamı bağlam belirler.\",\"Çoğul: die Seiten.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Headword duplicated “page” and omitted “side”; example and summary mistranslated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "sayfa • taraf",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "sayfa • taraf",
    "explanation": [
      "Ana fikir: die Seite bağlama göre “sayfa” veya “taraf” anlamına gelir.",
      "Kitap ve web bağlamında sayfayı; konum, görüş veya destek bağlamında tarafı belirtir.",
      "Her iki anlamda da çoğul biçim die Seiten olur."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Yirminci sayfayı açın."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Sol tarafta bir park var."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Web sayfası yavaş yükleniyor."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "O benim tarafımda."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Kitabın 200 sayfası var."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Sokağın karşı tarafında."
      }
    ],
    "tip": [
      "Kitap veya web sitesi → sayfa; konum veya görüş → taraf."
    ],
    "important": [
      "die Seite = sayfa veya taraf; anlamı bağlam belirler.",
      "Çoğul: die Seiten."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

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
      "Bir kitapta, dergide veya web sitesinde die Seite = sayfa (Sayfa 5 = sayfa 5).",
      "Mekansal anlamda, die Seite = yan (auf der linken Seite = solda).",
      "Mecazi anlamda, die Seite aynı zamanda çatışmada veya düşüncede taraf anlamına da gelebilir (auf meiner Seite = benim tarafımda).",
      "Bağlam (kitap/okuma veya öğe/ilişki) doğru anlamı gösteriyor.",
      "Her iki anlam için de çoğul: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Sayfa 20 'ye gidin."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Sol tarafta bir park var."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Web sitesi yavaş yükleniyor."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "O benim tarafımda."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Kitabın 200 sayfası var."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Caddenin karşısında."
      }
    ],
    "tip": [
      "Bir kitap hakkında konuşmak veya → sayfa okumak. Tarafın konumu, yönü veya ilişkisi → hakkında bilgi verir.",
      "Seite X her zaman bir kitabın bir sayfasıdır, yarısı değil."
    ],
    "important": [
      "Die Seite = sayfa VEYA sayfa – bağlam belirler.",
      "Her iki anlam için de çoğul: die Seiten."
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
            "Seite"
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

## Finding 4

**Audit ID:** `LRB102-0004`
**Finding Stable ID:** `g2/a1/tr|sich|idx:547|lv; study.translation; study.comparison|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `sich|idx:547`
**Field / path:** `lv; study.translation; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kendiniz • Kendiniz için","study.translation":"Kendiniz • Kendiniz için","study.comparison":"[{\"word\":\"sich\",\"meaning\":\"Kendim\",\"example\":\"O kendini yıkıyor.\"},{\"word\":\"mich\",\"meaning\":\"Ben/ben onların\",\"example\":\"Kendimi yıkıyorum.\"},{\"word\":\"dich\",\"meaning\":\"Sen/ben du'da\",\"example\":\"Kendini yıkıyorsun.\"},{\"word\":\"ihn\",\"meaning\":\"Onun\",\"example\":\"Onu görüyorum.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kendini • kendisine","study.translation":"kendini • kendisine","study.explanation":"[\"Ana fikir: sich, üçüncü tekil veya çoğul kişiyle kullanılan dönüşlü zamirdir.\",\"Eylem özneye dönüyorsa er/sie/es ve sie/Sie ile sich kullanılır; ich ile mich, du ile dich kullanılır.\",\"Dönüşlü olmayan bir nesne için ihn gibi kişi zamirleri kullanılır.\"]","study.examples":"[{\"de\":\"Er wäscht sich.\",\"lv\":\"O kendini yıkıyor.\"},{\"de\":\"Ich setze mich.\",\"lv\":\"Oturuyorum.\"},{\"de\":\"Sie freut sich.\",\"lv\":\"O seviniyor.\"},{\"de\":\"Ich wasche das Auto.\",\"lv\":\"Arabayı yıkıyorum.\"}]","study.comparison":"[{\"word\":\"sich\",\"meaning\":\"kendini / kendisine\",\"example\":\"Er wäscht sich. – O kendini yıkıyor.\"},{\"word\":\"mich\",\"meaning\":\"kendimi\",\"example\":\"Ich wasche mich. – Kendimi yıkıyorum.\"},{\"word\":\"dich\",\"meaning\":\"kendini\",\"example\":\"Du wäschst dich. – Kendini yıkıyorsun.\"},{\"word\":\"ihn\",\"meaning\":\"onu\",\"example\":\"Ich sehe ihn. – Onu görüyorum.\"}]","study.tip":"{\"text\":\"Eylem özneye dönüyorsa uygun dönüşlü zamiri seç: mich, dich veya sich.\"}","study.important":"[\"sich, er/sie/es ve sie/Sie ile kullanılır.\",\"sich ile ihn aynı görevde değildir.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: Reflexive pronoun person/case meanings and comparison were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sich",
  "lv": "kendini • kendisine",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "kendini • kendisine",
    "explanation": [
      "Ana fikir: sich, üçüncü tekil veya çoğul kişiyle kullanılan dönüşlü zamirdir.",
      "Eylem özneye dönüyorsa er/sie/es ve sie/Sie ile sich kullanılır; ich ile mich, du ile dich kullanılır.",
      "Dönüşlü olmayan bir nesne için ihn gibi kişi zamirleri kullanılır."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "O kendini yıkıyor."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Oturuyorum."
      },
      {
        "de": "Sie freut sich.",
        "lv": "O seviniyor."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Arabayı yıkıyorum."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "kendini / kendisine",
        "example": "Er wäscht sich. – O kendini yıkıyor."
      },
      {
        "word": "mich",
        "meaning": "kendimi",
        "example": "Ich wasche mich. – Kendimi yıkıyorum."
      },
      {
        "word": "dich",
        "meaning": "kendini",
        "example": "Du wäschst dich. – Kendini yıkıyorsun."
      },
      {
        "word": "ihn",
        "meaning": "onu",
        "example": "Ich sehe ihn. – Onu görüyorum."
      }
    ],
    "tip": {
      "text": "Eylem özneye dönüyorsa uygun dönüşlü zamiri seç: mich, dich veya sich."
    },
    "important": [
      "sich, er/sie/es ve sie/Sie ile kullanılır.",
      "sich ile ihn aynı görevde değildir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

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
      "Ana fikir: Eylemin failin kendisiyle ilgili olduğunu gösterir.",
      "Letonca'da genellikle benlik veya benlik olarak tercüme edilir.",
      "Bazı Almanca fiillerde sich zorunlu bir kısımdır, örneğin sich waschen.",
      "A1 seviyesinde dikkat edilmesi gereken önemli bir nokta: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Banyo yapıyor."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Oturuyorum."
      },
      {
        "de": "Sie freut sich.",
        "lv": "O mutlu."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Arabayı yıkıyorum"
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "Kendim",
        "example": "O kendini yıkıyor."
      },
      {
        "word": "mich",
        "meaning": "Ben/ben onların",
        "example": "Kendimi yıkıyorum."
      },
      {
        "word": "dich",
        "meaning": "Sen/ben du'da",
        "example": "Kendini yıkıyorsun."
      },
      {
        "word": "ihn",
        "meaning": "Onun",
        "example": "Onu görüyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: kendinize göre hareket etmek → sich/mich/dich."
    },
    "important": [
      "Sich bağımsız bir isim değildir.",
      "Kişiye göre değişir: ich → mich, du → dich, er/sie/es → sich."
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

## Finding 5

**Audit ID:** `LRB102-0005`
**Finding Stable ID:** `g2/a1/tr|sicher|idx:548|study.examples,study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `sicher|idx:548`
**Field / path:** `study.examples,study.important`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ist das Wasser sicher?\",\"lv\":\"Su güvenli mi?\"},{\"de\":\"Kommst du morgen? – Sicher!\",\"lv\":\"Yarın geleceksin - kesinlikle!\"},{\"de\":\"Er ist sicher zu Hause.\",\"lv\":\"Muhtemelen evdedir.\"},{\"de\":\"Das ist eine sichere Lösung.\",\"lv\":\"Bu güvenli bir çözümdür.\"},{\"de\":\"Ich bin mir sicher.\",\"lv\":\"Eminim\"},{\"de\":\"Fahr sicher!\",\"lv\":\"Güvenli bir şekilde sürün!\"}]","study.important":"[\"Sicher = güvenli (sıfat) VEYA kesinlikle/muhtemelen (zarf).\",\"Sich sicher sein = kesinlikle.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"güvenli • kesinlikle","study.translation":"güvenli • kesinlikle","study.explanation":"[\"Ana fikir: sicher sıfat olarak “güvenli”, zarf olarak “kesinlikle” veya bağlama göre “muhtemelen” anlamına gelebilir.\",\"sich sicher sein kalıbı “emin olmak” demektir.\"]","study.examples":"[{\"de\":\"Ist das Wasser sicher?\",\"lv\":\"Su güvenli mi?\"},{\"de\":\"Kommst du morgen? – Sicher!\",\"lv\":\"Yarın geliyor musun? – Elbette!\"},{\"de\":\"Er ist sicher zu Hause.\",\"lv\":\"O muhtemelen evdedir.\"},{\"de\":\"Das ist eine sichere Lösung.\",\"lv\":\"Bu güvenli bir çözümdür.\"},{\"de\":\"Ich bin mir sicher.\",\"lv\":\"Eminim.\"},{\"de\":\"Fahr sicher!\",\"lv\":\"Güvenli sür!\"}]","study.tip":"[\"İsim niteleniyorsa “güvenli”; bir yargı güçlendiriliyorsa “kesinlikle / muhtemelen”.\"]","study.important":"[\"sicher = güvenli veya kesinlikle / muhtemelen.\",\"sich sicher sein = emin olmak.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Adjective/adverb senses and sich sicher sein were conflated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sicher",
  "lv": "güvenli • kesinlikle",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "güvenli • kesinlikle",
    "explanation": [
      "Ana fikir: sicher sıfat olarak “güvenli”, zarf olarak “kesinlikle” veya bağlama göre “muhtemelen” anlamına gelebilir.",
      "sich sicher sein kalıbı “emin olmak” demektir."
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Su güvenli mi?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Yarın geliyor musun? – Elbette!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "O muhtemelen evdedir."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Bu güvenli bir çözümdür."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Eminim."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Güvenli sür!"
      }
    ],
    "tip": [
      "İsim niteleniyorsa “güvenli”; bir yargı güçlendiriliyorsa “kesinlikle / muhtemelen”."
    ],
    "important": [
      "sicher = güvenli veya kesinlikle / muhtemelen.",
      "sich sicher sein = emin olmak."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sicher",
  "lv": "Güvenli • Kesinlikle",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Güvenli • Kesinlikle",
    "explanation": [
      "Ana fikir: sicher sıfat olarak kesin, zarf olarak ise kesinlikle/muhtemelen anlamına gelir.",
      "Bir yer, durum veya kişi hakkında konuştuğumuzda, sicher = güvenli (ein sicherer Ort = güvenli yer).",
      "Bir cümlede onay veya güvence olarak sicher = kesinlikle/tabii ki (Das ist sicher wahr. = Kesinlikle doğru.).",
      "Elbette! ayrı bir cevap olarak elbette!/muhtemelen! anlamına gelir."
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Su güvenli mi?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Yarın geleceksin - kesinlikle!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "Muhtemelen evdedir."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Bu güvenli bir çözümdür."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Eminim"
      },
      {
        "de": "Fahr sicher!",
        "lv": "Güvenli bir şekilde sürün!"
      }
    ],
    "tip": [
      "Bir yer veya durum hakkında (güvenlik) → güvenli.",
      "Bir cümlede inanç veya teyit olarak → kesinlikle/muhtemelen."
    ],
    "important": [
      "Sicher = güvenli (sıfat) VEYA kesinlikle/muhtemelen (zarf).",
      "Sich sicher sein = kesinlikle."
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

## Finding 6

**Audit ID:** `LRB102-0006`
**Finding Stable ID:** `g2/a1/tr|sie|idx:549|lv,study.explanation,study.examples,study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `sie|idx:549`
**Field / path:** `lv,study.explanation,study.examples,study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Onlar / o","study.explanation":"[\"Ana fikir: Çoğul – birden fazla kişiden bahseder. Fiil -en ile biter: kochen, essen, gehen.\",\"Sie'nin esas anlamı: bir kadın.\",\"Genellikle tekil fiil (- t) ile karakterizedir.\",\"Sie esas olarak şu anlama gelir: birkaç kişi.\",\"Genellikle şu şekilde karakterize edilir: çoğul bir fiil (-en).\",\"Sie esas olarak şu anlama gelir: kibar adres.\",\"Sıklıkla tanımlanır: zorunlu olarak büyük S ile.\",\"Küçük sie, fiil tekil olduğunda onu ifade eder (Sie kocht = o aşçı).\"]","study.examples":"[{\"de\":\"Sie kochen.\",\"lv\":\"Yemek pişiriyorlar.\"},{\"de\":\"Sie kocht.\",\"lv\":\"Yemek yapıyor.\"},{\"de\":\"Sie isst.\",\"lv\":\"O yiyor\"},{\"de\":\"Sie kochen.\",\"lv\":\"Yemek pişiriyorlar.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Futbol oynuyorlar.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Sen yemek yap lütfen\"}]","study.important":"[\"Her zaman büyük S harfiyle nezaketle: Ağu, Ağustos değil.\",\"O: Özür dilerim. Onlar: Seni seviyorum. Siz: Sie kochen.\",\"Yanlış: Sie kocht → Doğru: Sie kocht\",\"Yanlış: Sie kocht (onlar) → Doğru: Sie kochen\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"onlar","study.translation":"onlar","study.explanation":"[\"Ana fikir: küçük harfle sie, çoğul fiille “onlar” anlamına gelir.\",\"Küçük harfle sie ve tekil fiil “o (kadın)” demektir.\",\"Büyük harfle Sie, çoğul fiil çekimiyle kullanılan resmî “siz” hitabıdır.\"]","study.examples":"[{\"de\":\"Sie kochen.\",\"lv\":\"Onlar yemek pişiriyor.\"},{\"de\":\"Sie kocht.\",\"lv\":\"O yemek pişiriyor.\"},{\"de\":\"Sie isst.\",\"lv\":\"O yemek yiyor.\"},{\"de\":\"Sie kochen.\",\"lv\":\"Onlar yemek pişiriyor.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Onlar futbol oynuyor.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Lütfen yemek pişirin.\"}]","study.tip":"[\"Fiil tekilse sie = o; fiil çoğulsa sie = onlar; büyük Sie = resmî siz.\"]","study.important":"[\"sie ve Sie anlamını büyük harf ile fiil çekimi birlikte belirler.\",\"sie kocht = o pişiriyor; sie kochen = onlar pişiriyor.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: she/they/formal-you distinctions contained nonsense residue and wrong examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sie",
  "lv": "onlar",
  "level": "A1",
  "study": {
    "id": "a1-sie-study",
    "layout": "standardStudy",
    "translation": "onlar",
    "explanation": [
      "Ana fikir: küçük harfle sie, çoğul fiille “onlar” anlamına gelir.",
      "Küçük harfle sie ve tekil fiil “o (kadın)” demektir.",
      "Büyük harfle Sie, çoğul fiil çekimiyle kullanılan resmî “siz” hitabıdır."
    ],
    "examples": [
      {
        "de": "Sie kochen.",
        "lv": "Onlar yemek pişiriyor."
      },
      {
        "de": "Sie kocht.",
        "lv": "O yemek pişiriyor."
      },
      {
        "de": "Sie isst.",
        "lv": "O yemek yiyor."
      },
      {
        "de": "Sie kochen.",
        "lv": "Onlar yemek pişiriyor."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Onlar futbol oynuyor."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Lütfen yemek pişirin."
      }
    ],
    "tip": [
      "Fiil tekilse sie = o; fiil çoğulsa sie = onlar; büyük Sie = resmî siz."
    ],
    "important": [
      "sie ve Sie anlamını büyük harf ile fiil çekimi birlikte belirler.",
      "sie kocht = o pişiriyor; sie kochen = onlar pişiriyor."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sie",
  "lv": "Onlar / o",
  "level": "A1",
  "study": {
    "id": "a1-sie-study",
    "layout": "standardStudy",
    "translation": "Onlar / o",
    "explanation": [
      "Ana fikir: Çoğul – birden fazla kişiden bahseder. Fiil -en ile biter: kochen, essen, gehen.",
      "Sie'nin esas anlamı: bir kadın.",
      "Genellikle tekil fiil (- t) ile karakterizedir.",
      "Sie esas olarak şu anlama gelir: birkaç kişi.",
      "Genellikle şu şekilde karakterize edilir: çoğul bir fiil (-en).",
      "Sie esas olarak şu anlama gelir: kibar adres.",
      "Sıklıkla tanımlanır: zorunlu olarak büyük S ile.",
      "Küçük sie, fiil tekil olduğunda onu ifade eder (Sie kocht = o aşçı)."
    ],
    "examples": [
      {
        "de": "Sie kochen.",
        "lv": "Yemek pişiriyorlar."
      },
      {
        "de": "Sie kocht.",
        "lv": "Yemek yapıyor."
      },
      {
        "de": "Sie isst.",
        "lv": "O yiyor"
      },
      {
        "de": "Sie kochen.",
        "lv": "Yemek pişiriyorlar."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Futbol oynuyorlar."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Sen yemek yap lütfen"
      }
    ],
    "tip": [
      "Çoğul: Birden fazla kişiyi ifade eder. Fiil -en ile biter: kochen, essen, gehen.",
      "Bağlam anlama uyduğunda kullanın."
    ],
    "important": [
      "Her zaman büyük S harfiyle nezaketle: Ağu, Ağustos değil.",
      "O: Özür dilerim. Onlar: Seni seviyorum. Siz: Sie kochen.",
      "Yanlış: Sie kocht → Doğru: Sie kocht",
      "Yanlış: Sie kocht (onlar) → Doğru: Sie kochen"
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "sie",
          "kochen"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "sie"
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

## Finding 7

**Audit ID:** `LRB102-0007`
**Finding Stable ID:** `g2/a1/tr|Sie|idx:550|lv,study.explanation,study.examples,study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `Sie|idx:550`
**Field / path:** `lv,study.explanation,study.examples,study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Sen","study.explanation":"[\"Ana fikir: Nezaket adresi - her zaman dodze S. Letonyalı: siz. Çoğu zaman sıradan çoğul bir fiille kullanılır.\",\"Sie temel olarak şu anlama gelir: bir kadın.\",\"Genellikle tekil fiil (- t) ile karakterizedir.\",\"Sie esas olarak şu anlama gelir: birkaç kişi.\",\"Genellikle şu şekilde karakterize edilir: çoğul bir fiil (-en).\",\"Sie esas olarak şu anlama gelir: kibar adres.\",\"Sıklıkla tanımlanır: zorunlu olarak büyük S ile.\",\"Küçük sie, fiil tekil olduğunda onu ifade eder (Sie kocht = o aşçı).\"]","study.examples":"[{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Pişir lütfen.\"},{\"de\":\"Sie kocht.\",\"lv\":\"Yemek yapıyor.\"},{\"de\":\"Sie isst.\",\"lv\":\"O yiyor\"},{\"de\":\"Sie kochen.\",\"lv\":\"Yemek pişiriyorlar.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Futbol oynuyorlar.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Sen yemek yap lütfen\"}]","study.important":"[\"Her zaman büyük S harfiyle nezaketle: Ağu, Ağustos değil.\",\"O: Özür dilerim. Onlar: Seni seviyorum. Siz: Sie kochen.\",\"Yanlış: Sie kocht → Doğru: Sie kocht\",\"Yanlış: Sie kocht (onlar) → Doğru: Sie kochen\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"siz","study.translation":"siz","study.explanation":"[\"Ana fikir: büyük harfle Sie, resmî ve nazik “siz” hitabıdır.\",\"Sie her zaman büyük yazılır ve çoğul fiil çekimi alır.\",\"Küçük sie, tekil fiille “o (kadın)”, çoğul fiille “onlar” olabilir.\"]","study.examples":"[{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Lütfen yemek pişirin.\"},{\"de\":\"Sie kocht.\",\"lv\":\"O yemek pişiriyor.\"},{\"de\":\"Sie isst.\",\"lv\":\"O yemek yiyor.\"},{\"de\":\"Sie kochen.\",\"lv\":\"Onlar yemek pişiriyor.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Onlar futbol oynuyor.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Lütfen yemek pişirin.\"}]","study.tip":"[\"Resmî hitapta Sie her zaman büyük harfle yazılır.\"]","study.important":"[\"Sie = resmî siz; sie = o (kadın) veya onlar.\",\"Anlamı büyük harf ve fiil çekimi birlikte gösterir.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Formal Sie was mistranslated as informal singular and mixed with lowercase sie.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Sie",
  "lv": "siz",
  "level": "A1",
  "study": {
    "id": "a1-sie-study-2",
    "layout": "standardStudy",
    "translation": "siz",
    "explanation": [
      "Ana fikir: büyük harfle Sie, resmî ve nazik “siz” hitabıdır.",
      "Sie her zaman büyük yazılır ve çoğul fiil çekimi alır.",
      "Küçük sie, tekil fiille “o (kadın)”, çoğul fiille “onlar” olabilir."
    ],
    "examples": [
      {
        "de": "Sie kochen, bitte.",
        "lv": "Lütfen yemek pişirin."
      },
      {
        "de": "Sie kocht.",
        "lv": "O yemek pişiriyor."
      },
      {
        "de": "Sie isst.",
        "lv": "O yemek yiyor."
      },
      {
        "de": "Sie kochen.",
        "lv": "Onlar yemek pişiriyor."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Onlar futbol oynuyor."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Lütfen yemek pişirin."
      }
    ],
    "tip": [
      "Resmî hitapta Sie her zaman büyük harfle yazılır."
    ],
    "important": [
      "Sie = resmî siz; sie = o (kadın) veya onlar.",
      "Anlamı büyük harf ve fiil çekimi birlikte gösterir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Sie",
  "lv": "Sen",
  "level": "A1",
  "study": {
    "id": "a1-sie-study-2",
    "layout": "standardStudy",
    "translation": "Sen",
    "explanation": [
      "Ana fikir: Nezaket adresi - her zaman dodze S. Letonyalı: siz. Çoğu zaman sıradan çoğul bir fiille kullanılır.",
      "Sie temel olarak şu anlama gelir: bir kadın.",
      "Genellikle tekil fiil (- t) ile karakterizedir.",
      "Sie esas olarak şu anlama gelir: birkaç kişi.",
      "Genellikle şu şekilde karakterize edilir: çoğul bir fiil (-en).",
      "Sie esas olarak şu anlama gelir: kibar adres.",
      "Sıklıkla tanımlanır: zorunlu olarak büyük S ile.",
      "Küçük sie, fiil tekil olduğunda onu ifade eder (Sie kocht = o aşçı)."
    ],
    "examples": [
      {
        "de": "Sie kochen, bitte.",
        "lv": "Pişir lütfen."
      },
      {
        "de": "Sie kocht.",
        "lv": "Yemek yapıyor."
      },
      {
        "de": "Sie isst.",
        "lv": "O yiyor"
      },
      {
        "de": "Sie kochen.",
        "lv": "Yemek pişiriyorlar."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Futbol oynuyorlar."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Sen yemek yap lütfen"
      }
    ],
    "tip": [
      "Nezaket adresi - her zaman teslimatla S. Letonca: siz. Genellikle sıradan çoğulda bir fiille.",
      "Bağlam bu anlama uygun olduğunda Sie'yi kullanın."
    ],
    "important": [
      "Her zaman büyük S harfiyle nezaketle: Ağu, Ağustos değil.",
      "O: Özür dilerim. Onlar: Seni seviyorum. Siz: Sie kochen.",
      "Yanlış: Sie kocht → Doğru: Sie kocht",
      "Yanlış: Sie kocht (onlar) → Doğru: Sie kochen"
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "Sie",
          "kocht"
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
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
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

## Finding 8

**Audit ID:** `LRB102-0008`
**Finding Stable ID:** `g2/a1/tr|sitzen|idx:558|study.examples,study.comparison,study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `sitzen|idx:558`
**Field / path:** `study.examples,study.comparison,study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ich sitze am Tisch.\",\"lv\":\"Masada oturuyorum.\"},{\"de\":\"Die Kinder sitzen im Bus.\",\"lv\":\"Çocuklar otobüste oturuyor.\"},{\"de\":\"Er steht an der Tür.\",\"lv\":\"Kapı eşiğinde duruyor.\"},{\"de\":\"Die Katze liegt auf dem Sofa.\",\"lv\":\"Kedi kanepede uyuyor.\"}]","study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"Oturmak\",\"example\":\"Masada oturuyorum.\"},{\"word\":\"stehen\",\"meaning\":\"Olmak\",\"example\":\"Kapı açılı duruyor.\"},{\"word\":\"liegen\",\"meaning\":\"Uyumak/uzanmak\",\"example\":\"Kedi orada yatıyor.\"},{\"word\":\"setzen\",\"meaning\":\"Otur / otur\",\"example\":\"Oturuyorum.\"}]","study.important":"[\"Sitzen \\\"oturma\\\" durumunu gösterir.\",\"Oturmak oturmak değil, sich setzendir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"oturmak","study.translation":"oturmak","study.explanation":"[\"Ana fikir: sitzen, bir kişinin veya hayvanın oturur durumda bulunmasını anlatır.\",\"sitzen durumdur; sich setzen ise oturma hareketini, yani “oturmak / oturur hâle gelmek” anlamını verir.\",\"stehen ayakta durmayı, liegen yatay durumda bulunmayı anlatır.\"]","study.examples":"[{\"de\":\"Ich sitze am Tisch.\",\"lv\":\"Masada oturuyorum.\"},{\"de\":\"Die Kinder sitzen im Bus.\",\"lv\":\"Çocuklar otobüste oturuyor.\"},{\"de\":\"Er steht an der Tür.\",\"lv\":\"O kapının yanında ayakta duruyor.\"},{\"de\":\"Die Katze liegt auf dem Sofa.\",\"lv\":\"Kedi kanepede uzanıyor.\"}]","study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"oturmak\",\"example\":\"Ich sitze am Tisch. – Masada oturuyorum.\"},{\"word\":\"stehen\",\"meaning\":\"ayakta durmak\",\"example\":\"Er steht an der Tür. – O kapının yanında ayakta duruyor.\"},{\"word\":\"liegen\",\"meaning\":\"uzanmak / yatay durumda bulunmak\",\"example\":\"Die Katze liegt dort. – Kedi orada uzanıyor.\"},{\"word\":\"setzen\",\"meaning\":\"oturmak / oturur hâle gelmek\",\"example\":\"Ich setze mich. – Oturuyorum.\"}]","study.tip":"{\"text\":\"Durum → sitzen; oturma hareketi → sich setzen.\"}","study.important":"[\"sitzen = oturur durumda olmak; sich setzen = oturmak.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: sitzen/stehen/liegen/sich setzen contrast and example actions were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sitzen",
  "lv": "oturmak",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "oturmak",
    "explanation": [
      "Ana fikir: sitzen, bir kişinin veya hayvanın oturur durumda bulunmasını anlatır.",
      "sitzen durumdur; sich setzen ise oturma hareketini, yani “oturmak / oturur hâle gelmek” anlamını verir.",
      "stehen ayakta durmayı, liegen yatay durumda bulunmayı anlatır."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Masada oturuyorum."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "Çocuklar otobüste oturuyor."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "O kapının yanında ayakta duruyor."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Kedi kanepede uzanıyor."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "oturmak",
        "example": "Ich sitze am Tisch. – Masada oturuyorum."
      },
      {
        "word": "stehen",
        "meaning": "ayakta durmak",
        "example": "Er steht an der Tür. – O kapının yanında ayakta duruyor."
      },
      {
        "word": "liegen",
        "meaning": "uzanmak / yatay durumda bulunmak",
        "example": "Die Katze liegt dort. – Kedi orada uzanıyor."
      },
      {
        "word": "setzen",
        "meaning": "oturmak / oturur hâle gelmek",
        "example": "Ich setze mich. – Oturuyorum."
      }
    ],
    "tip": {
      "text": "Durum → sitzen; oturma hareketi → sich setzen."
    },
    "important": [
      "sitzen = oturur durumda olmak; sich setzen = oturmak."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sitzen",
  "lv": "Oturmak",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "Oturmak",
    "explanation": [
      "Ana fikir: sitzen oturmak demektir.",
      "Sitzen, bir kişinin veya hayvanın oturma pozisyonunu tanımlamak için kullanılır.",
      "Bazen sitzen belli bir yerde olmak anlamına da gelir ama A1'de asıl anlam oturmaktır.",
      "Ayrım önemlidir: sitzen = oturmak, stehen = ayakta durmak, Liegen = uzanmak."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Masada oturuyorum."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "Çocuklar otobüste oturuyor."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "Kapı eşiğinde duruyor."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Kedi kanepede uyuyor."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "Oturmak",
        "example": "Masada oturuyorum."
      },
      {
        "word": "stehen",
        "meaning": "Olmak",
        "example": "Kapı açılı duruyor."
      },
      {
        "word": "liegen",
        "meaning": "Uyumak/uzanmak",
        "example": "Kedi orada yatıyor."
      },
      {
        "word": "setzen",
        "meaning": "Otur / otur",
        "example": "Oturuyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: oturmak → oturmak • Ayakta durmak → stehen • Uzanmak → uzanmak."
    },
    "important": [
      "Sitzen \"oturma\" durumunu gösterir.",
      "Oturmak oturmak değil, sich setzendir."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sitzen"
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
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "red": [
              "steht"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
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
              "sitzen"
            ]
          },
          "meaning": {},
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
              "Olmak"
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
              "setzen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "setze"
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
            "sitzen"
          ]
        },
        {
          "green": [
            "sich setzendir"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB102-0009`
**Finding Stable ID:** `g2/a1/tr|sollen|idx:564|study.explanation,study.examples,study.comparison,study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `sollen|idx:564`
**Field / path:** `study.explanation,study.examples,study.comparison,study.important`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Ana fikir: sollen, birinin talimat verildiği gibi bir şeyi yapması gerektiği veya yapması gerektiği anlamına gelir.\",\"Sollen genellikle başka biri size ne yapacağınızı söylediğinde kullanılır.\",\"Müssen kadar güçlü değildir.\",\"Çok popüler bir ifade You soll ich machen? = Ne yapmalıyım?\"]","study.examples":"[{\"de\":\"Was soll ich machen?\",\"lv\":\"Ne yapmalıyım?\"},{\"de\":\"Du sollst kommen.\",\"lv\":\"Gelmek zorundasın\"},{\"de\":\"Ich soll zu Hause bleiben.\",\"lv\":\"Evde kalmam lazım\"},{\"de\":\"Ich muss jetzt gehen.\",\"lv\":\"Şimdi gitmek zorundayım\"}]","study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"Tavsiyelere uymalı/uymalı\",\"example\":\"Ne yapmalıyım?\"},{\"word\":\"müssen\",\"meaning\":\"Kesinlikle buna ihtiyacım var\",\"example\":\"Gitmek zorundayım.\"},{\"word\":\"können\",\"meaning\":\"To be able to\",\"example\":\"Gelebilirim.\"},{\"word\":\"wollen\",\"meaning\":\"İstiyorum\",\"example\":\"Kalmak istiyorum.\"}]","study.important":"[\"Çok iyi mi? çok popüler bir ifadedir.\",\"Sollen ve müssen aynı şey değil.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"-meli/-malı • gerek","study.translation":"-meli/-malı • gerek","study.explanation":"[\"Ana fikir: sollen, çoğunlukla bir başkasının talimatını, beklentisini veya tavsiyesini aktarır.\",\"müssen doğrudan ve daha güçlü bir zorunluluk belirtir.\",\"Was soll ich machen? “Ne yapmalıyım?” anlamındaki yaygın bir sorudur.\"]","study.examples":"[{\"de\":\"Was soll ich machen?\",\"lv\":\"Ne yapmalıyım?\"},{\"de\":\"Du sollst kommen.\",\"lv\":\"Gelmelisin.\"},{\"de\":\"Ich soll zu Hause bleiben.\",\"lv\":\"Evde kalmam gerekiyor.\"},{\"de\":\"Ich muss jetzt gehen.\",\"lv\":\"Şimdi gitmek zorundayım.\"}]","study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"-meli/-malı; talimat veya tavsiye\",\"example\":\"Was soll ich machen? – Ne yapmalıyım?\"},{\"word\":\"müssen\",\"meaning\":\"zorunda olmak\",\"example\":\"Ich muss gehen. – Gitmek zorundayım.\"},{\"word\":\"können\",\"meaning\":\"-ebilmek\",\"example\":\"Ich kann kommen. – Gelebilirim.\"},{\"word\":\"wollen\",\"meaning\":\"istemek\",\"example\":\"Ich will bleiben. – Kalmak istiyorum.\"}]","study.tip":"{\"text\":\"Başkasının söylediği görev için sollen; doğrudan zorunluluk için müssen kullanılır.\"}","study.important":"[\"sollen ve müssen aynı değildir.\",\"Was soll ich machen? = Ne yapmalıyım?\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: sollen/müssen strength, modal meanings, and Turkish wording were defective.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sollen",
  "lv": "-meli/-malı • gerek",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "-meli/-malı • gerek",
    "explanation": [
      "Ana fikir: sollen, çoğunlukla bir başkasının talimatını, beklentisini veya tavsiyesini aktarır.",
      "müssen doğrudan ve daha güçlü bir zorunluluk belirtir.",
      "Was soll ich machen? “Ne yapmalıyım?” anlamındaki yaygın bir sorudur."
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Ne yapmalıyım?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Gelmelisin."
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Evde kalmam gerekiyor."
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Şimdi gitmek zorundayım."
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "-meli/-malı; talimat veya tavsiye",
        "example": "Was soll ich machen? – Ne yapmalıyım?"
      },
      {
        "word": "müssen",
        "meaning": "zorunda olmak",
        "example": "Ich muss gehen. – Gitmek zorundayım."
      },
      {
        "word": "können",
        "meaning": "-ebilmek",
        "example": "Ich kann kommen. – Gelebilirim."
      },
      {
        "word": "wollen",
        "meaning": "istemek",
        "example": "Ich will bleiben. – Kalmak istiyorum."
      }
    ],
    "tip": {
      "text": "Başkasının söylediği görev için sollen; doğrudan zorunluluk için müssen kullanılır."
    },
    "important": [
      "sollen ve müssen aynı değildir.",
      "Was soll ich machen? = Ne yapmalıyım?"
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sollen",
  "lv": "Olmalı",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "Olmalı",
    "explanation": [
      "Ana fikir: sollen, birinin talimat verildiği gibi bir şeyi yapması gerektiği veya yapması gerektiği anlamına gelir.",
      "Sollen genellikle başka biri size ne yapacağınızı söylediğinde kullanılır.",
      "Müssen kadar güçlü değildir.",
      "Çok popüler bir ifade You soll ich machen? = Ne yapmalıyım?"
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Ne yapmalıyım?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Gelmek zorundasın"
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Evde kalmam lazım"
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Şimdi gitmek zorundayım"
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "Tavsiyelere uymalı/uymalı",
        "example": "Ne yapmalıyım?"
      },
      {
        "word": "müssen",
        "meaning": "Kesinlikle buna ihtiyacım var",
        "example": "Gitmek zorundayım."
      },
      {
        "word": "können",
        "meaning": "To be able to",
        "example": "Gelebilirim."
      },
      {
        "word": "wollen",
        "meaning": "İstiyorum",
        "example": "Kalmak istiyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: birisi size ne yapmanız gerektiğini söyler → sollen • Yapılması gerekir → müssen."
    },
    "important": [
      "Çok iyi mi? çok popüler bir ifadedir.",
      "Sollen ve müssen aynı şey değil."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sollen"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sollst",
              "kommen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "soll",
              "bleiben"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "muss",
              "gehen"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sollen"
            ]
          },
          "meaning": {},
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
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {},
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

## Finding 10

**Audit ID:** `LRB102-0010`
**Finding Stable ID:** `g2/a1/tr|sprechen|idx:5|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `sprechen|idx:5`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Konuş","study.translation":"Konuş","study.explanation":"[\"Ana fikir: Konuşun, konuşun veya dili kullanın.\",\"Sprechen esas olarak şu anlama gelir: konuşmak veya konuşmak.\",\"Çoğunlukla şu özelliklerle karakterize edilir: dil/konuşma.\",\"Sprechen konuşmayı veya dili kullanmayı anlatır.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Almanca konuşuyorum.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"İşten bahsediyoruz.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"Almanca konuşuyorum\"}]","study.comparison":"[{\"word\":\"sprechen\",\"meaning\":\"Speak (süreç, dil)\",\"example\":\"Wir sprechen über die Arbeit. – İşten bahsediyoruz.\"},{\"word\":\"sagen\",\"meaning\":\"Anlat (belirli bir metin)\",\"example\":\"Sag mir die Wahrheit. – Bana gerçeği söyle.\"}]","study.tip":"[\"Sprechen = konuşmak\",\"Bağlam anlama uyduğunda sprechen kullanır.\"]","study.important":"[\"Sprechen = konuşmak.\",\"Konuşun, konuşun veya dil kullanın.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"konuşmak","study.translation":"konuşmak","study.explanation":"[\"Ana fikir: sprechen, konuşmayı veya bir dili kullanmayı anlatır.\",\"sagen ise belirli bir sözü söylemeye odaklanır.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Almanca konuşuyorum.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"İş hakkında konuşuyoruz.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"O öğretmeniyle konuşuyor.\"}]","study.comparison":"[{\"word\":\"sprechen\",\"meaning\":\"konuşmak; konuşma süreci veya dil kullanımı\",\"example\":\"Wir sprechen über die Arbeit. – İş hakkında konuşuyoruz.\"},{\"word\":\"sagen\",\"meaning\":\"söylemek; belirli bir sözü ifade etmek\",\"example\":\"Sag mir die Wahrheit. – Bana gerçeği söyle.\"}]","study.tip":"[\"sprechen = konuşmak; sagen = bir şeyi söylemek.\"]","study.important":"[\"sprechen bir konuşma sürecini veya dil kullanımını anlatır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Headword form, subject alignment, contrast, and foreign-language residue were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sprechen",
  "lv": "konuşmak",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "konuşmak",
    "explanation": [
      "Ana fikir: sprechen, konuşmayı veya bir dili kullanmayı anlatır.",
      "sagen ise belirli bir sözü söylemeye odaklanır."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Almanca konuşuyorum."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "İş hakkında konuşuyoruz."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "O öğretmeniyle konuşuyor."
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "konuşmak; konuşma süreci veya dil kullanımı",
        "example": "Wir sprechen über die Arbeit. – İş hakkında konuşuyoruz."
      },
      {
        "word": "sagen",
        "meaning": "söylemek; belirli bir sözü ifade etmek",
        "example": "Sag mir die Wahrheit. – Bana gerçeği söyle."
      }
    ],
    "tip": [
      "sprechen = konuşmak; sagen = bir şeyi söylemek."
    ],
    "important": [
      "sprechen bir konuşma sürecini veya dil kullanımını anlatır."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sprechen",
  "lv": "Konuş",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "Konuş",
    "explanation": [
      "Ana fikir: Konuşun, konuşun veya dili kullanın.",
      "Sprechen esas olarak şu anlama gelir: konuşmak veya konuşmak.",
      "Çoğunlukla şu özelliklerle karakterize edilir: dil/konuşma.",
      "Sprechen konuşmayı veya dili kullanmayı anlatır."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Almanca konuşuyorum."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "İşten bahsediyoruz."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "Almanca konuşuyorum"
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "Speak (süreç, dil)",
        "example": "Wir sprechen über die Arbeit. – İşten bahsediyoruz."
      },
      {
        "word": "sagen",
        "meaning": "Anlat (belirli bir metin)",
        "example": "Sag mir die Wahrheit. – Bana gerçeği söyle."
      }
    ],
    "tip": [
      "Sprechen = konuşmak",
      "Bağlam anlama uyduğunda sprechen kullanır."
    ],
    "important": [
      "Sprechen = konuşmak.",
      "Konuşun, konuşun veya dil kullanın."
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

## Finding 11

**Audit ID:** `LRB102-0011`
**Finding Stable ID:** `g2/a1/tr|Uhr|idx:698|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Uhr|idx:698`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Saat","study.translation":"Saat","study.explanation":"[\"Ana fikir: Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.\",\"Die Uhr temel olarak şu anlama gelir: cihaz veya saatteki zaman.\",\"Genellikle şu şekilde karakterize edilir: belirli bir zaman.\",\"Die Uhr saat anlamına gelir; saatin içindeki bir cihaz veya zaman (Es ist acht Uhr, meine Uhr).\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz (sekiz).\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz (sekiz).\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Saatim bozuldu.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz (saat).\"},{\"de\":\"die Uhr\",\"lv\":\"Saatteki cihaz/saat • Die Zeit\"}]","study.tip":"[\"Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.\",\"Bağlam bu anlama uygun olduğunda die Uhr'u kullanın.\"]","study.important":"[\"Die Uhr: cihaz (meine Uhr) veya zaman (acht Uhr).\",\"Die Uhr: Kullanmadan önce bağlamı kontrol edin.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"saat","study.translation":"saat","study.explanation":"[\"Ana fikir: die Uhr, saat cihazını veya tam saat bildirimini ifade eder.\",\"Es ist acht Uhr cümlesinde “saat sekiz”; meine Uhr ifadesinde saat cihazı anlamındadır.\",\"die Zeit ise genel olarak “zaman” demektir.\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz.\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Saatim bozuk.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz.\"},{\"de\":\"die Uhr\",\"lv\":\"saat (cihaz veya saat bildirimi) • die Zeit = zaman\"}]","study.tip":"[\"Saat cihazı veya tam saat bildirimi → die Uhr; genel zaman → die Zeit.\"]","study.important":"[\"die Uhr = saat cihazı veya saat bildirimi.\",\"die Zeit = zaman.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Clock/time distinction was repetitive and internally inconsistent.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "saat",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "saat",
    "explanation": [
      "Ana fikir: die Uhr, saat cihazını veya tam saat bildirimini ifade eder.",
      "Es ist acht Uhr cümlesinde “saat sekiz”; meine Uhr ifadesinde saat cihazı anlamındadır.",
      "die Zeit ise genel olarak “zaman” demektir."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Saatim bozuk."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz."
      },
      {
        "de": "die Uhr",
        "lv": "saat (cihaz veya saat bildirimi) • die Zeit = zaman"
      }
    ],
    "tip": [
      "Saat cihazı veya tam saat bildirimi → die Uhr; genel zaman → die Zeit."
    ],
    "important": [
      "die Uhr = saat cihazı veya saat bildirimi.",
      "die Zeit = zaman."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

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

## Finding 12

**Audit ID:** `LRB102-0012`
**Finding Stable ID:** `g2/a1/tr|Urlaub|idx:695|lv, study.translation, study.explanation, study.examples, study.tip, study.important, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Urlaub|idx:695`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important, study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Tatiller","study.translation":"Tatiller","study.explanation":"[\"Ana fikir: sadece tekil. İşten ayrılın - her zaman tekildir.\",\"Der Urlaub w zasadzie oznacza: czas wolny od pracy.\",\"Genellikle şu şekilde karakterize edilir: yalnızca tekil.\",\"Der Urlaub, işten ayrılmanın tekil bir şeklidir (im Urlaub).\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Babam tatilde.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Babam tatilde.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Haftaya tatilim var.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"İspanya'da tatildeyiz.\"},{\"de\":\"im Urlaub\",\"lv\":\"Na wakacjach (w pracy).\"}]","study.tip":"[\"Sadece bir tane. İşten ayrılın - her zaman tekildir.\",\"Bağlam bu anlama uygun olduğunda der Urlaub'u kullanın.\"]","study.important":"[\"Niepoprawnie: die Ferie, der Urlabe (na poziomie A1).\",\"Tatil: tatilde olmak / tatil yapmak.\",\"Yanlış: die Urlaube → Doğru: der Urlaub\",\"İş: der Urlaub (yalnızca tekil).\"]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"İşten ayrılma (yalnızca herkes)\",\"example\":\"Mein Vater ist im Urlaub. – Babam tatilde.\"},{\"word\":\"die Ferien\",\"meaning\":\"Okula/çalışmaya ara vermek (yalnızca masa başında)\",\"example\":\"Die Kinder haben Ferien. – Çocukların tatilleri var.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"tatil • izin","study.translation":"tatil • izin","study.explanation":"[\"Ana fikir: der Urlaub, işten izinli olunan tatil dönemini anlatır.\",\"Urlaub bu temel kullanımda tekildir; im Urlaub ve Urlaub machen yaygın kalıplardır.\",\"die Ferien çoğul kullanılır ve özellikle okul tatilini belirtir.\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Babam tatilde.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Babam tatilde.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Gelecek hafta izinliyim.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"İspanya’da tatil yapıyoruz.\"},{\"de\":\"im Urlaub\",\"lv\":\"tatilde / izinde\"}]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"işten izin veya tatil; tekil\",\"example\":\"Mein Vater ist im Urlaub. – Babam tatilde.\"},{\"word\":\"die Ferien\",\"meaning\":\"özellikle okul tatili; çoğul\",\"example\":\"Die Kinder haben Ferien. – Çocuklar tatilde.\"}]","study.tip":"[\"İşten izin / tatil → der Urlaub; okul tatili → die Ferien.\"]","study.important":"[\"der Urlaub tekil kullanılır.\",\"Urlaub ve Ferien aynı kullanım değildir.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Urlaub/Ferien contrast, number, examples, and Polish residue were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "tatil • izin",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "tatil • izin",
    "explanation": [
      "Ana fikir: der Urlaub, işten izinli olunan tatil dönemini anlatır.",
      "Urlaub bu temel kullanımda tekildir; im Urlaub ve Urlaub machen yaygın kalıplardır.",
      "die Ferien çoğul kullanılır ve özellikle okul tatilini belirtir."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Babam tatilde."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Babam tatilde."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Gelecek hafta izinliyim."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "İspanya’da tatil yapıyoruz."
      },
      {
        "de": "im Urlaub",
        "lv": "tatilde / izinde"
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "işten izin veya tatil; tekil",
        "example": "Mein Vater ist im Urlaub. – Babam tatilde."
      },
      {
        "word": "die Ferien",
        "meaning": "özellikle okul tatili; çoğul",
        "example": "Die Kinder haben Ferien. – Çocuklar tatilde."
      }
    ],
    "tip": [
      "İşten izin / tatil → der Urlaub; okul tatili → die Ferien."
    ],
    "important": [
      "der Urlaub tekil kullanılır.",
      "Urlaub ve Ferien aynı kullanım değildir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        }
      ],
      "tip": [
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "Tatiller",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "Tatiller",
    "explanation": [
      "Ana fikir: sadece tekil. İşten ayrılın - her zaman tekildir.",
      "Der Urlaub w zasadzie oznacza: czas wolny od pracy.",
      "Genellikle şu şekilde karakterize edilir: yalnızca tekil.",
      "Der Urlaub, işten ayrılmanın tekil bir şeklidir (im Urlaub)."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Babam tatilde."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Babam tatilde."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Haftaya tatilim var."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "İspanya'da tatildeyiz."
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
        "example": "Mein Vater ist im Urlaub. – Babam tatilde."
      },
      {
        "word": "die Ferien",
        "meaning": "Okula/çalışmaya ara vermek (yalnızca masa başında)",
        "example": "Die Kinder haben Ferien. – Çocukların tatilleri var."
      }
    ],
    "tip": [
      "Sadece bir tane. İşten ayrılın - her zaman tekildir.",
      "Bağlam bu anlama uygun olduğunda der Urlaub'u kullanın."
    ],
    "important": [
      "Niepoprawnie: die Ferie, der Urlabe (na poziomie A1).",
      "Tatil: tatilde olmak / tatil yapmak.",
      "Yanlış: die Urlaube → Doğru: der Urlaub",
      "İş: der Urlaub (yalnızca tekil)."
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

## Finding 13

**Audit ID:** `LRB102-0013`
**Finding Stable ID:** `g2/a1/tr|vom|idx:634|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `vom|idx:634`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"İLE","study.translation":"İLE","study.explanation":"[\"Vom, von edatının ve dem artikelinin kısaltmasıdır.\",\"Tam biçim: von dem (kime?).\",\"Kökeni veya yönünü belirtmek için eril ve nötr isimlerle birlikte kullanılır.\",\"Kimden gelen soruları yanıtlıyor? ya da nereden?\",\"Uygulamada, tam von dem yerine neredeyse her zaman vom kullanılır.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"İstasyondan geliyorum\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Hediye babamdan.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Doktordan geliyor.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Havaalanından geliyor.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Pazardan.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Kutlamadan dönüyoruz.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Sütünü çiftçiden alıyor.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Mesaj patrondan geliyor.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"Kimden (belirli bir şeyden, kimin için?)\",\"example\":\"vom Bahnhof – İstasyondan\"},{\"word\":\"von\",\"meaning\":\"Gönderen (genel)\",\"example\":\"von mir – Benden\"},{\"word\":\"aus\",\"meaning\":\"İçeriden/kökenden\",\"example\":\"aus Deutschland – Almanya'dan\"},{\"word\":\"ab\",\"meaning\":\"Başlangıç ​​tarihi: (zaman/yer)\",\"example\":\"ab Montag – Pazartesiden itibaren\"},{\"word\":\"zu\",\"meaning\":\"İçeri/Gidiş (ters yön)\",\"example\":\"zum Arzt – Doktora\"}]","study.tip":"[\"Unutmayın: von + dem → vom (kimin için?).\",\"Günlük konuşmada neredeyse hiçbir zaman von dem - vom kullan demiyorsunuz.\"]","study.important":"[\"Vom = von dem, yalnızca eril veya nötr bir isimle, kimin için? çekimde.\",\"Belirli bir şeyin kökenini, kaynağını veya yönünü belirtir.\",\"Kadın cinsiyeti için: von der Mutter, vom Mutter değil.\",\"Aus (menşe ülke) veya ab (başlangıç ​​noktası) ile karıştırılmamalıdır.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"-den/-dan","study.translation":"-den/-dan","study.explanation":"[\"Ana fikir: vom, von + dem birleşimidir ve eril ya da nötr tekil isimlerle dativ kullanılır.\",\"Bir yerden, kişiden veya kaynaktan geliş ve köken bildirir.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"İstasyondan geliyorum.\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Hediye babadan.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"O doktordan geliyor.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"O havaalanından geliyor.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Bu pazardan.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Şenlikten geliyoruz.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"O sütü çiftçiden alıyor.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Mesaj patrondan.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"-den/-dan; von + dem\",\"example\":\"vom Bahnhof – istasyondan\"},{\"word\":\"von\",\"meaning\":\"-den/-dan; genel kaynak veya kişi\",\"example\":\"von mir – benden\"},{\"word\":\"aus\",\"meaning\":\"-den/-dan; içinden veya ülkeden\",\"example\":\"aus Deutschland – Almanya’dan\"},{\"word\":\"ab\",\"meaning\":\"-den/-dan; başlangıç zamanı\",\"example\":\"ab Montag – pazartesiden itibaren\"},{\"word\":\"zu\",\"meaning\":\"-e/-a; yönelme\",\"example\":\"zum Arzt – doktora\"}]","study.tip":"[\"vom = von + dem; yalnızca dativ eril veya nötr tekille kullanılır.\"]","study.important":"[\"vom bir çıkış, kaynak veya köken bildirir.\",\"Dişil isimde von der kullanılır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Source/direction examples and preposition contrasts needed exact Turkish alignment.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vom",
  "lv": "-den/-dan",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "-den/-dan",
    "explanation": [
      "Ana fikir: vom, von + dem birleşimidir ve eril ya da nötr tekil isimlerle dativ kullanılır.",
      "Bir yerden, kişiden veya kaynaktan geliş ve köken bildirir."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "İstasyondan geliyorum."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Hediye babadan."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "O doktordan geliyor."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "O havaalanından geliyor."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Bu pazardan."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Şenlikten geliyoruz."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "O sütü çiftçiden alıyor."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Mesaj patrondan."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "-den/-dan; von + dem",
        "example": "vom Bahnhof – istasyondan"
      },
      {
        "word": "von",
        "meaning": "-den/-dan; genel kaynak veya kişi",
        "example": "von mir – benden"
      },
      {
        "word": "aus",
        "meaning": "-den/-dan; içinden veya ülkeden",
        "example": "aus Deutschland – Almanya’dan"
      },
      {
        "word": "ab",
        "meaning": "-den/-dan; başlangıç zamanı",
        "example": "ab Montag – pazartesiden itibaren"
      },
      {
        "word": "zu",
        "meaning": "-e/-a; yönelme",
        "example": "zum Arzt – doktora"
      }
    ],
    "tip": [
      "vom = von + dem; yalnızca dativ eril veya nötr tekille kullanılır."
    ],
    "important": [
      "vom bir çıkış, kaynak veya köken bildirir.",
      "Dişil isimde von der kullanılır."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": [
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "vom",
  "lv": "İLE",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "İLE",
    "explanation": [
      "Vom, von edatının ve dem artikelinin kısaltmasıdır.",
      "Tam biçim: von dem (kime?).",
      "Kökeni veya yönünü belirtmek için eril ve nötr isimlerle birlikte kullanılır.",
      "Kimden gelen soruları yanıtlıyor? ya da nereden?",
      "Uygulamada, tam von dem yerine neredeyse her zaman vom kullanılır."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "İstasyondan geliyorum"
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Hediye babamdan."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Doktordan geliyor."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Havaalanından geliyor."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Pazardan."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Kutlamadan dönüyoruz."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Sütünü çiftçiden alıyor."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Mesaj patrondan geliyor."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "Kimden (belirli bir şeyden, kimin için?)",
        "example": "vom Bahnhof – İstasyondan"
      },
      {
        "word": "von",
        "meaning": "Gönderen (genel)",
        "example": "von mir – Benden"
      },
      {
        "word": "aus",
        "meaning": "İçeriden/kökenden",
        "example": "aus Deutschland – Almanya'dan"
      },
      {
        "word": "ab",
        "meaning": "Başlangıç ​​tarihi: (zaman/yer)",
        "example": "ab Montag – Pazartesiden itibaren"
      },
      {
        "word": "zu",
        "meaning": "İçeri/Gidiş (ters yön)",
        "example": "zum Arzt – Doktora"
      }
    ],
    "tip": [
      "Unutmayın: von + dem → vom (kimin için?).",
      "Günlük konuşmada neredeyse hiçbir zaman von dem - vom kullan demiyorsunuz."
    ],
    "important": [
      "Vom = von dem, yalnızca eril veya nötr bir isimle, kimin için? çekimde.",
      "Belirli bir şeyin kökenini, kaynağını veya yönünü belirtir.",
      "Kadın cinsiyeti için: von der Mutter, vom Mutter değil.",
      "Aus (menşe ülke) veya ab (başlangıç ​​noktası) ile karıştırılmamalıdır."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vom",
          "von dem"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "vom"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          ]
        },
        {},
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

## Finding 14

**Audit ID:** `LRB102-0014`
**Finding Stable ID:** `g2/a1/tr|vor|idx:636|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `vor|idx:636`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Önce • Önce","study.translation":"Önce • Önce","study.explanation":"[\"Ana fikir: vor, zamanda daha erken veya bir yerden önce anlamına gelir.\",\"Zaman açısından vor, daha erken anlamına gelir.\",\"Yer açısından vor, önce veya içeri anlamına gelir.\",\"Saat zaman diliminde vor \\\"kadar\\\" anlamına gelir, ör. fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Yemekten önce ellerimi yıkarım.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Araba evin önüne park edilmiş.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Saat beşe sekiz var.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Yemek yedikten sonra yürüyüşe çıkıyoruz.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Önce/önce\",\"example\":\"Yemekten önce...\"},{\"word\":\"nach\",\"meaning\":\"Sonra / bitene kadar\",\"example\":\"Yemekten sonra...\"},{\"word\":\"neben\",\"meaning\":\"Yakın\",\"example\":\"Evin yanında.\"},{\"word\":\"hinter\",\"meaning\":\"İçin\",\"example\":\"Evin arkasında.\"}]","study.tip":"{\"text\":\"Unutmayın: zamandan önce, yerden önce → vor.\"}","study.important":"[\"Vor hem zaman hem de yer anlamına gelebilir.\",\"Vor dem Essen = yemekten önce • Vor dem Haus = evden önce.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"önce • önünde","study.translation":"önce • önünde","study.explanation":"[\"Ana fikir: vor, zaman bağlamında “önce”, yer bağlamında “önünde” anlamına gelir.\",\"Saat söylerken vor, sonraki saate kalan dakikayı belirtir.\",\"nach “sonra”, hinter “arkasında”, neben “yanında” anlamındadır.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Yemekten önce ellerimi yıkarım.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Araba evin önünde duruyor.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Saat sekize beş var.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Yemekten sonra yürüyüşe çıkıyoruz.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"önce / önünde\",\"example\":\"Vor dem Essen... – Yemekten önce...\"},{\"word\":\"nach\",\"meaning\":\"sonra / -e doğru\",\"example\":\"Nach dem Essen... – Yemekten sonra...\"},{\"word\":\"neben\",\"meaning\":\"yanında\",\"example\":\"Neben dem Haus. – Evin yanında.\"},{\"word\":\"hinter\",\"meaning\":\"arkasında\",\"example\":\"Hinter dem Haus. – Evin arkasında.\"}]","study.tip":"{\"text\":\"Zaman → önce; yer → önünde.\"}","study.important":"[\"vor bağlama göre zaman veya yer ilişkisi kurar.\",\"fünf vor acht = sekize beş var.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: Clock expression and German comparison examples were mistranslated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "önce • önünde",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "önce • önünde",
    "explanation": [
      "Ana fikir: vor, zaman bağlamında “önce”, yer bağlamında “önünde” anlamına gelir.",
      "Saat söylerken vor, sonraki saate kalan dakikayı belirtir.",
      "nach “sonra”, hinter “arkasında”, neben “yanında” anlamındadır."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Yemekten önce ellerimi yıkarım."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Araba evin önünde duruyor."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Saat sekize beş var."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Yemekten sonra yürüyüşe çıkıyoruz."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "önce / önünde",
        "example": "Vor dem Essen... – Yemekten önce..."
      },
      {
        "word": "nach",
        "meaning": "sonra / -e doğru",
        "example": "Nach dem Essen... – Yemekten sonra..."
      },
      {
        "word": "neben",
        "meaning": "yanında",
        "example": "Neben dem Haus. – Evin yanında."
      },
      {
        "word": "hinter",
        "meaning": "arkasında",
        "example": "Hinter dem Haus. – Evin arkasında."
      }
    ],
    "tip": {
      "text": "Zaman → önce; yer → önünde."
    },
    "important": [
      "vor bağlama göre zaman veya yer ilişkisi kurar.",
      "fünf vor acht = sekize beş var."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "vor",
  "lv": "Önce • Önce",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Önce • Önce",
    "explanation": [
      "Ana fikir: vor, zamanda daha erken veya bir yerden önce anlamına gelir.",
      "Zaman açısından vor, daha erken anlamına gelir.",
      "Yer açısından vor, önce veya içeri anlamına gelir.",
      "Saat zaman diliminde vor \"kadar\" anlamına gelir, ör. fünf vor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Yemekten önce ellerimi yıkarım."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Araba evin önüne park edilmiş."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Saat beşe sekiz var."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Yemek yedikten sonra yürüyüşe çıkıyoruz."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Önce/önce",
        "example": "Yemekten önce..."
      },
      {
        "word": "nach",
        "meaning": "Sonra / bitene kadar",
        "example": "Yemekten sonra..."
      },
      {
        "word": "neben",
        "meaning": "Yakın",
        "example": "Evin yanında."
      },
      {
        "word": "hinter",
        "meaning": "İçin",
        "example": "Evin arkasında."
      }
    ],
    "tip": {
      "text": "Unutmayın: zamandan önce, yerden önce → vor."
    },
    "important": [
      "Vor hem zaman hem de yer anlamına gelebilir.",
      "Vor dem Essen = yemekten önce • Vor dem Haus = evden önce."
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
        "left": {}
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

## Finding 15

**Audit ID:** `LRB102-0015`
**Finding Stable ID:** `g2/a1/tr|was|idx:644|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `was|idx:644`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kim • Ne","study.translation":"Kim • Ne","study.explanation":"[\"Ana fikir: Şeyler ve olaylarla ilgili soru kelimesi nedir - Letonca'da cümlenin kısmına bağlı olarak ne veya ne'dir.\",\"İnsanlara kişiler değil, nesneler, olaylar ve gerçekler soruldu.\",\"Almancada, çekimden sonra değişmezsiniz - her zaman öyleymiş gibi görünür.\",\"Cümlenin öznesi \\\"by\\\" ise Letonca'da kas (Was ist das? = Nedir?) olarak çevrilir.\",\"Was bir fiilin nesnesi (nesnesi) ise, Letonca'da ko (Was machst du? = Ne yapıyorsun?) olarak çevrilir.\",\"İnsanlara wer (kim/kim) soruluyor ve bu sorulmuyor.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Bu nedir?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Ne oldu?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Ne yapıyorsun\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Ne içmek istersin?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Bu kelime ne anlama geliyor?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"En sevdiğiniz yemek nedir?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Ne dedin?\"}]","study.tip":"[\"Kendisi değişmez - Almanca'da her zaman öyleydi • Letonca'da, cümlenin kısmına göre kim veya ne olduğunu seçin.\",\"Hızlı ipucu: Eğer soru \\\"Şu...\\\" ile cevaplanabiliyorsa, \\\"kim\\\" kullanın. • Cevap, tümleç olarak fiilden sonra geliyorsa, ko kullanın.\"]","study.important":"[\"İnsanlara nesneler, olaylar ve gerçekler soruldu • Asla insanlar hakkında değil.\",\"İnsanlara wer (kim/kim) soruluyor ve bu sorulmuyor.\",\"Was für (ein/eine) birisi/ne anlamına gelir ve kalite veya tür hakkında soru sorar (Was für ein Film ist das? = Ne tür bir film?).\",\"Yanlış: Pasif miydik? → Doğru: Daha pasif mi?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ne","study.translation":"ne","study.explanation":"[\"Ana fikir: was, şeyler, olaylar veya içerik hakkında “ne?” sorusunu sorar.\",\"Kişiler için wer kullanılır; was für... ise “nasıl bir / ne tür” anlamına gelir.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Bu ne?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Ne oldu?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Şu anda ne yapıyorsun?\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Ne içmek istersin?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Bu sözcük ne anlama geliyor?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"En sevdiğin yemek nedir?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Ne dedin?\"}]","study.tip":"[\"Kişi → wer; şey, olay veya içerik → was.\"]","study.important":"[\"was = ne; kişiler için kullanılmaz.\",\"was für... = ne tür / nasıl bir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Question-word scope and guidance contained unnatural or false explanations.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "was",
  "lv": "ne",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "ne",
    "explanation": [
      "Ana fikir: was, şeyler, olaylar veya içerik hakkında “ne?” sorusunu sorar.",
      "Kişiler için wer kullanılır; was für... ise “nasıl bir / ne tür” anlamına gelir."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Bu ne?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Ne oldu?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Şu anda ne yapıyorsun?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Ne içmek istersin?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Bu sözcük ne anlama geliyor?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "En sevdiğin yemek nedir?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Ne dedin?"
      }
    ],
    "tip": [
      "Kişi → wer; şey, olay veya içerik → was."
    ],
    "important": [
      "was = ne; kişiler için kullanılmaz.",
      "was für... = ne tür / nasıl bir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "was",
  "lv": "Kim • Ne",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Kim • Ne",
    "explanation": [
      "Ana fikir: Şeyler ve olaylarla ilgili soru kelimesi nedir - Letonca'da cümlenin kısmına bağlı olarak ne veya ne'dir.",
      "İnsanlara kişiler değil, nesneler, olaylar ve gerçekler soruldu.",
      "Almancada, çekimden sonra değişmezsiniz - her zaman öyleymiş gibi görünür.",
      "Cümlenin öznesi \"by\" ise Letonca'da kas (Was ist das? = Nedir?) olarak çevrilir.",
      "Was bir fiilin nesnesi (nesnesi) ise, Letonca'da ko (Was machst du? = Ne yapıyorsun?) olarak çevrilir.",
      "İnsanlara wer (kim/kim) soruluyor ve bu sorulmuyor."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Bu nedir?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Ne oldu?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Ne yapıyorsun"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Ne içmek istersin?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Bu kelime ne anlama geliyor?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "En sevdiğiniz yemek nedir?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Ne dedin?"
      }
    ],
    "tip": [
      "Kendisi değişmez - Almanca'da her zaman öyleydi • Letonca'da, cümlenin kısmına göre kim veya ne olduğunu seçin.",
      "Hızlı ipucu: Eğer soru \"Şu...\" ile cevaplanabiliyorsa, \"kim\" kullanın. • Cevap, tümleç olarak fiilden sonra geliyorsa, ko kullanın."
    ],
    "important": [
      "İnsanlara nesneler, olaylar ve gerçekler soruldu • Asla insanlar hakkında değil.",
      "İnsanlara wer (kim/kim) soruluyor ve bu sorulmuyor.",
      "Was für (ein/eine) birisi/ne anlamına gelir ve kalite veya tür hakkında soru sorar (Was für ein Film ist das? = Ne tür bir film?).",
      "Yanlış: Pasif miydik? → Doğru: Daha pasif mi?"
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
            "ko"
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

## Finding 16

**Audit ID:** `LRB102-0016`
**Finding Stable ID:** `g2/a1/tr|wenn|idx:655|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `wenn|idx:655`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Eğer • Ne zaman","study.translation":"Eğer • Ne zaman","study.explanation":"[\"Ana fikir: wen, duruma bağlı olarak olup olmayacağı veya ne zaman olacağı anlamına gelir.\",\"Eğer bu bir koşulsa, sanki tercüme edin.\",\"Tekrarlayan veya genel zaman için, ne zaman şeklinde tercüme edin.\",\"Wen'den sonra fiil genellikle Almanca bir cümleyle biter.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Vaktiniz varsa uğrayın.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Yağmur yağarsa evde kalırım.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Yorgun olduğumda kahve içerim.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Gelip gelmeyeceğini bilmiyorum.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Eğer/ne zaman\",\"example\":\"Eğer zamanın varsa...\"},{\"word\":\"ob\",\"meaning\":\"Veya dolaylı bir soruda\",\"example\":\"Bilmiyorum, yoksa...\"},{\"word\":\"wann\",\"meaning\":\"O noktaya geldiğinde\",\"example\":\"Ne zaman geliyorsun?\"},{\"word\":\"weil\",\"meaning\":\"Çünkü\",\"example\":\"Kalıyorum, çünkü hastalanıyorum.\"}]","study.tip":"{\"text\":\"Unutmayın: koşul → wen • Soru \\\"ne zaman?\\\" → İstiyorum.\"}","study.important":"[\"Wenn ve Wann aynı değil.\",\"Ne zaman geleceksin? bir soru var. Wenn du kommst... bir koşul/zamandır.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"eğer • -dığında/-diğinde","study.translation":"eğer • -dığında/-diğinde","study.explanation":"[\"Ana fikir: wenn, koşul bildirirken “eğer”, tekrarlanan veya şimdiki/gelecekteki zaman ilişkilerinde “-dığında” anlamına gelir.\",\"wenn ile başlayan yan cümlede çekimli fiil sona gider.\",\"wann doğrudan veya dolaylı zaman sorularında, ob ise “olup olmadığını” anlamında kullanılır.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Vaktin varsa uğra.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Yağmur yağdığında evde kalırım.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Yorgun olduğumda kahve içerim.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Onun gelip gelmeyeceğini bilmiyorum.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"eğer / -dığında\",\"example\":\"Wenn du Zeit hast... – Vaktin varsa...\"},{\"word\":\"ob\",\"meaning\":\"olup olmadığını\",\"example\":\"Ich weiß nicht, ob... – ...olup olmadığını bilmiyorum.\"},{\"word\":\"wann\",\"meaning\":\"ne zaman\",\"example\":\"Wann kommst du? – Ne zaman geliyorsun?\"},{\"word\":\"weil\",\"meaning\":\"çünkü\",\"example\":\"Ich bleibe, weil ich krank bin. – Hasta olduğum için kalıyorum.\"}]","study.tip":"{\"text\":\"Koşul veya tekrarlanan zaman → wenn; zaman sorusu → wann.\"}","study.important":"[\"wenn yan cümlesinde çekimli fiil sona gider.\",\"wenn ve wann aynı görevde değildir.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: Conditional/temporal wenn and wenn/wann/ob contrast required correction.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wenn",
  "lv": "eğer • -dığında/-diğinde",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "eğer • -dığında/-diğinde",
    "explanation": [
      "Ana fikir: wenn, koşul bildirirken “eğer”, tekrarlanan veya şimdiki/gelecekteki zaman ilişkilerinde “-dığında” anlamına gelir.",
      "wenn ile başlayan yan cümlede çekimli fiil sona gider.",
      "wann doğrudan veya dolaylı zaman sorularında, ob ise “olup olmadığını” anlamında kullanılır."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Vaktin varsa uğra."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Yağmur yağdığında evde kalırım."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Yorgun olduğumda kahve içerim."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Onun gelip gelmeyeceğini bilmiyorum."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "eğer / -dığında",
        "example": "Wenn du Zeit hast... – Vaktin varsa..."
      },
      {
        "word": "ob",
        "meaning": "olup olmadığını",
        "example": "Ich weiß nicht, ob... – ...olup olmadığını bilmiyorum."
      },
      {
        "word": "wann",
        "meaning": "ne zaman",
        "example": "Wann kommst du? – Ne zaman geliyorsun?"
      },
      {
        "word": "weil",
        "meaning": "çünkü",
        "example": "Ich bleibe, weil ich krank bin. – Hasta olduğum için kalıyorum."
      }
    ],
    "tip": {
      "text": "Koşul veya tekrarlanan zaman → wenn; zaman sorusu → wann."
    },
    "important": [
      "wenn yan cümlesinde çekimli fiil sona gider.",
      "wenn ve wann aynı görevde değildir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wenn",
  "lv": "Eğer • Ne zaman",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Eğer • Ne zaman",
    "explanation": [
      "Ana fikir: wen, duruma bağlı olarak olup olmayacağı veya ne zaman olacağı anlamına gelir.",
      "Eğer bu bir koşulsa, sanki tercüme edin.",
      "Tekrarlayan veya genel zaman için, ne zaman şeklinde tercüme edin.",
      "Wen'den sonra fiil genellikle Almanca bir cümleyle biter."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Vaktiniz varsa uğrayın."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Yağmur yağarsa evde kalırım."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Yorgun olduğumda kahve içerim."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Gelip gelmeyeceğini bilmiyorum."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "Eğer/ne zaman",
        "example": "Eğer zamanın varsa..."
      },
      {
        "word": "ob",
        "meaning": "Veya dolaylı bir soruda",
        "example": "Bilmiyorum, yoksa..."
      },
      {
        "word": "wann",
        "meaning": "O noktaya geldiğinde",
        "example": "Ne zaman geliyorsun?"
      },
      {
        "word": "weil",
        "meaning": "Çünkü",
        "example": "Kalıyorum, çünkü hastalanıyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: koşul → wen • Soru \"ne zaman?\" → İstiyorum."
    },
    "important": [
      "Wenn ve Wann aynı değil.",
      "Ne zaman geleceksin? bir soru var. Wenn du kommst... bir koşul/zamandır."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wen"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wenn",
              "regnet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wenn",
              "bin"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "ob"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "wenn"
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
          "example": {}
        },
        {
          "word": {
            "green": [
              "wann"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "weil"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "weil"
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
            "wenn"
          ],
          "yellow": [
            "wann"
          ]
        },
        {
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

## Finding 17

**Audit ID:** `LRB102-0017`
**Finding Stable ID:** `g2/a1/tr|wer|idx:656|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `wer|idx:656`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kim • Kim","study.translation":"Kim • Kim","study.explanation":"[\"Ana fikir: wer, bir kişinin kimliğiyle ilgili bir soru kelimesidir - Letonca'da \\\"kim\\\" veya \\\"kim\\\" anlamına gelir.\",\"Şeyler veya olaylar hakkında değil, insanlar hakkında sorular sorduk.\",\"Şeyler ve olaylar sizin aracılığınızla sorulur, ver.\",\"Almanca'da Wer genellikle bir cümlenin öznesidir (yalın) - Wer is das? = Nedir bu?\",\"Birkaç kişiden hangisi diye sorduğumuzda sıklıkla wer z von (wer von euch = hanginiz) kelimesini kullanırız.\",\"Wer, çeşitliliğe bağlı olarak biçimini değiştirir: wen (suçlama), wem (datif), wessen (genitive) - en sık A1 düzeyinde ortaya çıkan wer biçimidir.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Bu nedir?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Sen kimsin\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Bugün ne geliyor?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Öğretmenin kim\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Hanginiz Almanca konuşuyor?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Bunu kim söyledi?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Kim biraz kahve ister?\"}]","study.tip":"[\"We, insanlara (kim/kim) - nesneler ve olaylar hakkında sorular sorar, sizi kullanırız.\",\"Birkaç kişi arasında seçim yapmak için wer von... (hangisi...) ifadesini kullanın.\"]","study.important":"[\"Sadece insanlar hakkında sorular sorduk, nesneler hakkında asla.\",\"Şeyler ve olaylar sizin aracılığınızla sorulur, ver.\",\"Wer, biçimini çekimle değiştirir: wen, wem, wessen - ancak temel biçim wer'dir.\",\"Yanlış: Pasif miydik? → Doğru: Daha pasif mi?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kim","study.translation":"kim","study.explanation":"[\"Ana fikir: wer, kişiler hakkında “kim?” sorusunu sorar.\",\"Hâle göre wer, wen, wem ve wessen biçimleri kullanılır.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Bu kim?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Sen kimsin?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Bugün kim geliyor?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Öğretmenin kim?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Aranızdan kim Almanca konuşuyor?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Bunu kim söyledi?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Kim kahve ister?\"}]","study.tip":"[\"Kişi sorusu → wer; şey veya olay sorusu → was.\"]","study.important":"[\"wer yalnızca kişiler için kullanılır.\",\"Nominativ wer; Akkusativ wen; Dativ wem; Genitiv wessen.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Person-question case paradigm and Turkish examples/guidance were incomplete.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wer",
  "lv": "kim",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "kim",
    "explanation": [
      "Ana fikir: wer, kişiler hakkında “kim?” sorusunu sorar.",
      "Hâle göre wer, wen, wem ve wessen biçimleri kullanılır."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Bu kim?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Sen kimsin?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Bugün kim geliyor?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Öğretmenin kim?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Aranızdan kim Almanca konuşuyor?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Bunu kim söyledi?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Kim kahve ister?"
      }
    ],
    "tip": [
      "Kişi sorusu → wer; şey veya olay sorusu → was."
    ],
    "important": [
      "wer yalnızca kişiler için kullanılır.",
      "Nominativ wer; Akkusativ wen; Dativ wem; Genitiv wessen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wer",
  "lv": "Kim • Kim",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Kim • Kim",
    "explanation": [
      "Ana fikir: wer, bir kişinin kimliğiyle ilgili bir soru kelimesidir - Letonca'da \"kim\" veya \"kim\" anlamına gelir.",
      "Şeyler veya olaylar hakkında değil, insanlar hakkında sorular sorduk.",
      "Şeyler ve olaylar sizin aracılığınızla sorulur, ver.",
      "Almanca'da Wer genellikle bir cümlenin öznesidir (yalın) - Wer is das? = Nedir bu?",
      "Birkaç kişiden hangisi diye sorduğumuzda sıklıkla wer z von (wer von euch = hanginiz) kelimesini kullanırız.",
      "Wer, çeşitliliğe bağlı olarak biçimini değiştirir: wen (suçlama), wem (datif), wessen (genitive) - en sık A1 düzeyinde ortaya çıkan wer biçimidir."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Bu nedir?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Sen kimsin"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Bugün ne geliyor?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Öğretmenin kim"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Hanginiz Almanca konuşuyor?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Bunu kim söyledi?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Kim biraz kahve ister?"
      }
    ],
    "tip": [
      "We, insanlara (kim/kim) - nesneler ve olaylar hakkında sorular sorar, sizi kullanırız.",
      "Birkaç kişi arasında seçim yapmak için wer von... (hangisi...) ifadesini kullanın."
    ],
    "important": [
      "Sadece insanlar hakkında sorular sorduk, nesneler hakkında asla.",
      "Şeyler ve olaylar sizin aracılığınızla sorulur, ver.",
      "Wer, biçimini çekimle değiştirir: wen, wem, wessen - ancak temel biçim wer'dir.",
      "Yanlış: Pasif miydik? → Doğru: Daha pasif mi?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wer"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "blue": [
            "wer"
          ]
        },
        {
          "blue": [
            "wer von"
          ]
        }
      ],
      "important": [
        {},
        {},
        {
          "blue": [
            "wer"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB102-0018`
**Finding Stable ID:** `g2/a1/tr|wissen|idx:311|lv, study.translation, study.explanation, study.tip|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `wissen|idx:311`
**Field / path:** `lv, study.translation, study.explanation, study.tip`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bilmek","study.translation":"Bilmek","study.explanation":"[\"Ana fikir: bir gerçeği, cevabı veya bilgiyi bilmek.\",\"Wissen esas olarak şu anlama gelir: bilgi/gerçek.\",\"Genellikle şu şekilde karakterize edilir: cevaplar, veriler.\",\"Bir gerçeği, bir yanıtı veya bilgiyi bildiğinizde Wissen'i kullanırız.\"]","study.tip":"[\"Wissen = bilmek\",\"Bağlam bu anlama uyduğunda wisen'i kullanın.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bilmek","study.translation":"bilmek","study.explanation":"[\"Ana fikir: wissen, bir bilgiyi veya gerçeği bilmek anlamına gelir.\",\"Bir kişi, yer veya nesneyle tanışıklık için kennen kullanılır.\"]","study.examples":"[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"Onun nerede oturduğunu biliyorum.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"Bunu nereden biliyorsunuz?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"Cevabı biliyorum.\"}]","study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"bir gerçeği veya bilgiyi bilmek\",\"example\":\"Ich weiß, wo er wohnt. – Onun nerede oturduğunu biliyorum.\"},{\"word\":\"kennen\",\"meaning\":\"bir kişiyi, yeri veya şeyi tanımak\",\"example\":\"Ich kenne die Stadt. – Şehri tanıyorum.\"}]","study.tip":"[\"Bilgi veya gerçek → wissen; tanışıklık → kennen.\"]","study.important":"[\"wissen ve kennen aynı değildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: wissen/kennen contrast, formal address, and examples were defective.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wissen",
  "lv": "bilmek",
  "level": "A1",
  "id": "a1-wissen",
  "study": {
    "id": "a1-wissen-study",
    "layout": "standardStudy",
    "translation": "bilmek",
    "explanation": [
      "Ana fikir: wissen, bir bilgiyi veya gerçeği bilmek anlamına gelir.",
      "Bir kişi, yer veya nesneyle tanışıklık için kennen kullanılır."
    ],
    "examples": [
      {
        "de": "Ich weiß, wo er wohnt.",
        "lv": "Onun nerede oturduğunu biliyorum."
      },
      {
        "de": "Woher wissen Sie das?",
        "lv": "Bunu nereden biliyorsunuz?"
      },
      {
        "de": "Ich weiß die Antwort.",
        "lv": "Cevabı biliyorum."
      }
    ],
    "comparison": [
      {
        "word": "wissen",
        "meaning": "bir gerçeği veya bilgiyi bilmek",
        "example": "Ich weiß, wo er wohnt. – Onun nerede oturduğunu biliyorum."
      },
      {
        "word": "kennen",
        "meaning": "bir kişiyi, yeri veya şeyi tanımak",
        "example": "Ich kenne die Stadt. – Şehri tanıyorum."
      }
    ],
    "tip": [
      "Bilgi veya gerçek → wissen; tanışıklık → kennen."
    ],
    "important": [
      "wissen ve kennen aynı değildir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wissen",
  "lv": "Bilmek",
  "level": "A1",
  "id": "a1-wissen",
  "study": {
    "id": "a1-wissen-study",
    "layout": "standardStudy",
    "translation": "Bilmek",
    "explanation": [
      "Ana fikir: bir gerçeği, cevabı veya bilgiyi bilmek.",
      "Wissen esas olarak şu anlama gelir: bilgi/gerçek.",
      "Genellikle şu şekilde karakterize edilir: cevaplar, veriler.",
      "Bir gerçeği, bir yanıtı veya bilgiyi bildiğinizde Wissen'i kullanırız."
    ],
    "examples": [
      {
        "de": "Ich weiß, wo er wohnt.",
        "lv": "Nerede yaşadığını biliyorum."
      },
      {
        "de": "Woher wissen Sie das?",
        "lv": "Bunu nasıl biliyorsun?"
      },
      {
        "de": "Ich weiß die Antwort.",
        "lv": "Cevabı biliyorum."
      }
    ],
    "comparison": [
      {
        "word": "wissen",
        "meaning": "Bilmek (gerçek, bilgi)",
        "example": "Ich weiß, wo er wohnt. – Nerede yaşadığını biliyorum."
      },
      {
        "word": "kennen",
        "meaning": "Know (kişi, yer, şey)",
        "example": "Ich kenne die Stadt. – Bu şehri biliyorum."
      }
    ],
    "tip": [
      "Wissen = bilmek",
      "Bağlam bu anlama uyduğunda wisen'i kullanın."
    ],
    "important": [
      "Wissen = bir gerçeği bilmek.",
      "Wissen = bilmek.",
      "Bir gerçeği, cevabı veya bilgiyi öğrenin."
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

## Finding 19

**Audit ID:** `LRB102-0019`
**Finding Stable ID:** `g2/a1/tr|Zeit|idx:699|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Zeit|idx:699`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Zaman (an/zaman dilimi)","study.translation":"Zaman (an/zaman dilimi)","study.explanation":"[\"Ana fikir: Bir kavram olarak zaman • Bir an, bir şans, bir zaman dilimi.\",\"Die Zeit her şeyden önce bir an, bir şanstır.\",\"Genellikle şu şekilde karakterize edilir: soyut bir kavram.\",\"Die Zeit soyut bir kavramdır • Zaman, an veya şans (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Zamanım yok.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Zamanım yok\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Zamanın var mı?\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Zaman hızla geçiyor.\"}]","study.tip":"[\"Bir kavram olarak zaman • Bir an, bir şans, bir zaman dilimidir.\",\"Bağlam bu anlama uygun olduğunda die Zeit'ı kullanın.\"]","study.important":"[\"Die Zeit: Kullanmadan önce içeriğini kontrol edin.\",\"Die Zeit: Kullanmadan önce içeriğini kontrol edin.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"zaman","study.translation":"zaman","study.explanation":"[\"Ana fikir: die Zeit, genel olarak zamanı, süreyi veya bir işi yapma fırsatını belirtir.\",\"Saat cihazı veya tam saat bildirimi için die Uhr kullanılır.\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Zamanım yok.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Zamanım yok.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Vaktin var mı?\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Zaman çabuk geçiyor.\"}]","study.tip":"[\"Genel zaman veya süre → die Zeit; saat cihazı / tam saat → die Uhr.\"]","study.important":"[\"die Zeit = zaman; die Uhr = saat.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Zeit/Uhr distinction and duplicated guidance needed repair.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Zeit",
  "de_article": "die",
  "de_plural": "die Zeiten",
  "lv": "zaman",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "zaman",
    "explanation": [
      "Ana fikir: die Zeit, genel olarak zamanı, süreyi veya bir işi yapma fırsatını belirtir.",
      "Saat cihazı veya tam saat bildirimi için die Uhr kullanılır."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Zamanım yok."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Zamanım yok."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Vaktin var mı?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Zaman çabuk geçiyor."
      }
    ],
    "tip": [
      "Genel zaman veya süre → die Zeit; saat cihazı / tam saat → die Uhr."
    ],
    "important": [
      "die Zeit = zaman; die Uhr = saat."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

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
      "Ana fikir: Bir kavram olarak zaman • Bir an, bir şans, bir zaman dilimi.",
      "Die Zeit her şeyden önce bir an, bir şanstır.",
      "Genellikle şu şekilde karakterize edilir: soyut bir kavram.",
      "Die Zeit soyut bir kavramdır • Zaman, an veya şans (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Zamanım yok."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Zamanım yok"
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Zamanın var mı?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Zaman hızla geçiyor."
      }
    ],
    "tip": [
      "Bir kavram olarak zaman • Bir an, bir şans, bir zaman dilimidir.",
      "Bağlam bu anlama uygun olduğunda die Zeit'ı kullanın."
    ],
    "important": [
      "Die Zeit: Kullanmadan önce içeriğini kontrol edin.",
      "Die Zeit: Kullanmadan önce içeriğini kontrol edin."
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

## Finding 20

**Audit ID:** `LRB102-0020`
**Finding Stable ID:** `g2/a1/tr|zum|idx:672|lv; study.translation; study.examples[].lv; study.comparison[].meaning; study.tip[]; study.important[]|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `zum|idx:672`
**Field / path:** `lv; study.translation; study.examples[].lv; study.comparison[].meaning; study.tip[]; study.important[]`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":" • Saate kadar","study.translation":" • Saate kadar","study.examples[].lv":null,"study.comparison[].meaning":null,"study.tip[]":null,"study.important[]":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"-e/-a • -ye/-ya","study.translation":"-e/-a • -ye/-ya","study.explanation":"[\"Ana fikir: zum, zu + dem birleşimidir ve eril ya da nötr tekil isimlerle dativ kullanılır.\",\"Bir kişiye, yere, etkinliğe veya amaca yönelmeyi belirtir.\",\"Dişil isimlerde zur kullanılır.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Doktora gidiyorum.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"İstasyona gidiyoruz.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"O süpermarkete gidiyor.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"Yemeğe gel!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"O havaalanına gidiyor.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"Konsere gidiyoruz.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"Hediye doğum günü için.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"Kuaföre gidiyorum.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"-e/-a; zu + dem\",\"example\":\"zum Arzt – doktora\"},{\"word\":\"zur\",\"meaning\":\"-e/-a; zu + der\",\"example\":\"zur Schule – okula\"},{\"word\":\"zu\",\"meaning\":\"evde\",\"example\":\"zu Hause – evde\"},{\"word\":\"nach\",\"meaning\":\"-e/-a; şehir veya ülke yönü\",\"example\":\"nach Berlin – Berlin’e\"},{\"word\":\"bei\",\"meaning\":\"-de/-da; bir kişinin yanında\",\"example\":\"beim Arzt – doktorda\"}]","study.tip":"[\"zum = zu + dem; dişil isimlerle zur kullanılır.\"]","study.important":"[\"zum yön veya amaç bildirir ve dativ gerektirir.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: zu + dem case/direction semantics and comparison values contained residue/errors.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zum",
  "lv": "-e/-a • -ye/-ya",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "-e/-a • -ye/-ya",
    "explanation": [
      "Ana fikir: zum, zu + dem birleşimidir ve eril ya da nötr tekil isimlerle dativ kullanılır.",
      "Bir kişiye, yere, etkinliğe veya amaca yönelmeyi belirtir.",
      "Dişil isimlerde zur kullanılır."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Doktora gidiyorum."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "İstasyona gidiyoruz."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "O süpermarkete gidiyor."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Yemeğe gel!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "O havaalanına gidiyor."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Konsere gidiyoruz."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Hediye doğum günü için."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Kuaföre gidiyorum."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "-e/-a; zu + dem",
        "example": "zum Arzt – doktora"
      },
      {
        "word": "zur",
        "meaning": "-e/-a; zu + der",
        "example": "zur Schule – okula"
      },
      {
        "word": "zu",
        "meaning": "evde",
        "example": "zu Hause – evde"
      },
      {
        "word": "nach",
        "meaning": "-e/-a; şehir veya ülke yönü",
        "example": "nach Berlin – Berlin’e"
      },
      {
        "word": "bei",
        "meaning": "-de/-da; bir kişinin yanında",
        "example": "beim Arzt – doktorda"
      }
    ],
    "tip": [
      "zum = zu + dem; dişil isimlerle zur kullanılır."
    ],
    "important": [
      "zum yön veya amaç bildirir ve dativ gerektirir."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "zum",
  "lv": " • Saate kadar",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": " • Saate kadar",
    "explanation": [
      "Zum, zu edatının ve dem artikelinin kısaltmasıdır.",
      "Tam form: zu dem (kime?).",
      "Yön veya amacı belirtirken eril ve nötr isimlerle birlikte kullanılır.",
      "Çoğu zaman bir şey ya da biri anlamına gelir • Bir doktor, bir istasyon, bir arkadaş.",
      "Pratikte tam zu dem yerine neredeyse her zaman zum kullanılır."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Doktora gidiyorum."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "İstasyona gidiyoruz."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Mağazaya gidiyor."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Gel yemek ye!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Havaalanına gidiyor."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Bir konsere gidiyoruz."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Hediye doğum günü içindir."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Kuaföre gidiyorum."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "Kime / Kimden (kim?)",
        "example": "zum Arzt – Doktora"
      },
      {
        "word": "zur",
        "meaning": "Kime/içine (karısının ailesi)",
        "example": "zur Schule – Okula"
      },
      {
        "word": "zu",
        "meaning": "/w/'ye de",
        "example": "zu Hause – Evde"
      },
      {
        "word": "nach",
        "meaning": "Hedef (şehirler/ülkeler)",
        "example": "nach Berlin – Berlin'e"
      },
      {
        "word": "bei",
        "meaning": "W (lokalizacja)",
        "example": "beim Arzt – Doktora"
      }
    ],
    "tip": [
      "Unutmayın: zu + dem → zum (kimin için?).",
      "Dişil kelimeler için: zu + der → zur."
    ],
    "important": [
      "Zum = zu dem, yalnızca eril veya cinsiyetsiz bir isimle, kimin için? çekimde.",
      "Bir yönü veya hedefi belirtir: doktora, istasyona, bir arkadaşa.",
      "Dişil cinsiyet durumunda zur kullanılır: zur Bank, zur Post.",
      "BEI (içinde bulunur) veya nach (makalesi olmayan şehirler) ile karıştırılmamalıdır."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zum",
          "zu dem"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "zum"
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
              "zur"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          ]
        },
        {},
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

## Finding 21

**Audit ID:** `LRB102-0021`
**Finding Stable ID:** `g2/a1/uk|ab|idx:17|lv, study.translation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `ab|idx:17`
**Field / path:** `lv, study.translation, study.examples`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"від","study.translation":"від","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"від сьогодні\",\"level\":\"A1\"},{\"de\":\"ab Montag\",\"lv\":\"з понеділка\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"з 8\"},{\"de\":\"ab Bahnhof\",\"lv\":\"від ст\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"з • починаючи з","study.translation":"з • починаючи з","study.explanation":"[\"Головна думка: ab позначає початкову точку в часі, місці або маршруті.\",\"У часовому значенні часто перекладається як «з» або «починаючи з».\"]","study.examples":"[{\"de\":\"ab heute\",\"level\":\"A1\",\"lv\":\"від сьогодні\"},{\"de\":\"ab Montag\",\"lv\":\"з понеділка\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"з восьмої години\"},{\"de\":\"ab Bahnhof\",\"lv\":\"від вокзалу\"}]","study.comparison":"[{\"word\":\"ab\",\"meaning\":\"починаючи з певної точки або часу\",\"example\":\"ab Montag – з понеділка\"},{\"word\":\"von\",\"meaning\":\"від когось або чогось\",\"example\":\"von mir – від мене\"},{\"word\":\"aus\",\"meaning\":\"зсередини / з\",\"example\":\"aus dem Haus – з будинку\"}]","study.tip":"{\"text\":\"Запам’ятай: початкова точка в часі або місці → ab.\"}","study.important":"[\"ab позначає початкову точку.\",\"von указує на джерело, а aus — на рух ізсередини.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: Starting-point senses and truncated time/station examples were defective.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "з • починаючи з",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "з • починаючи з",
    "explanation": [
      "Головна думка: ab позначає початкову точку в часі, місці або маршруті.",
      "У часовому значенні часто перекладається як «з» або «починаючи з»."
    ],
    "examples": [
      {
        "de": "ab heute",
        "level": "A1",
        "lv": "від сьогодні"
      },
      {
        "de": "ab Montag",
        "lv": "з понеділка"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "з восьмої години"
      },
      {
        "de": "ab Bahnhof",
        "lv": "від вокзалу"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "починаючи з певної точки або часу",
        "example": "ab Montag – з понеділка"
      },
      {
        "word": "von",
        "meaning": "від когось або чогось",
        "example": "von mir – від мене"
      },
      {
        "word": "aus",
        "meaning": "зсередини / з",
        "example": "aus dem Haus – з будинку"
      }
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
    "tip": {
      "text": "Запам’ятай: початкова точка в часі або місці → ab."
    },
    "important": [
      "ab позначає початкову точку.",
      "von указує на джерело, а aus — на рух ізсередини."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ab",
  "lv": "від",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "від",
    "explanation": "Використовується, коли щось починається з певного часу, місця чи точки. Часто означає «починаючи з».",
    "examples": [
      {
        "de": "ab heute",
        "lv": "від сьогодні",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "з понеділка"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "з 8"
      },
      {
        "de": "ab Bahnhof",
        "lv": "від ст"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "починаючи з точки/часу",
        "example": "ab Montag – з понеділка"
      },
      {
        "word": "von",
        "meaning": "з когось/чого • походження",
        "example": "von mir – від мене"
      },
      {
        "word": "aus",
        "meaning": "зсередини",
        "example": "aus dem Haus – з дому / з дому"
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
              "від"
            ]
          }
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
          "lv": {
            "purple": [
              "від"
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
              "від"
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
        "left": {
          "blue": [
            "ab"
          ]
        }
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
          ],
          "purple": [
            "зсередини"
          ]
        }
      ]
    },
    "tip": {
      "text": "Пам'ятай: початкова точка в часі/місці → ab."
    },
    "important": [
      "ab показує початкову точку в часі або місці.",
      "Якщо думка виникає або рухається назовні зсередини, частіше використовуються von або aus."
    ]
  }
}
```

---

## Finding 22

**Audit ID:** `LRB102-0022`
**Finding Stable ID:** `g2/a1/uk|aber|idx:21|lv, study.translation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `aber|idx:21`
**Field / path:** `lv, study.translation, study.examples`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"але","study.translation":"але","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Я хочу піти, але не маю часу.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"їжа була смачною, але завищеною ціною.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"він правий, але я думаю інакше.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"але • проте","study.translation":"але • проте","study.explanation":"[\"Головна думка: aber поєднує дві думки й виражає протиставлення або заперечення.\",\"sondern уживають після заперечення в конструкції «не..., а...», а jedoch є формальнішим відповідником «проте».\"]","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Я хочу піти разом, але не маю часу.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"Їжа була смачною, але надто дорогою.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"Він має рацію, але я дивлюся на це інакше.\"}]","study.comparison":"[{\"word\":\"aber\",\"meaning\":\"але\",\"example\":\"Ich komme, aber später. – Я прийду, але пізніше.\"},{\"word\":\"sondern\",\"meaning\":\"не..., а...\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Я хотів / хотіла не чаю, а кави.\"},{\"word\":\"jedoch\",\"meaning\":\"проте; формальніше\",\"example\":\"Es ist kalt, jedoch sonnig. – Холодно, проте сонячно.\"}]","study.tip":"{\"text\":\"Після заперечення для виправлення вживай sondern; в інших протиставленнях — aber.\"}","study.important":"[\"aber = але / проте.\",\"aber і sondern не взаємозамінні в конструкції «не..., а...».\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: aber/sondern contrast was reversed and target grammar/alignment was faulty.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "але • проте",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "але • проте",
    "explanation": [
      "Головна думка: aber поєднує дві думки й виражає протиставлення або заперечення.",
      "sondern уживають після заперечення в конструкції «не..., а...», а jedoch є формальнішим відповідником «проте»."
    ],
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Я хочу піти разом, але не маю часу."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Їжа була смачною, але надто дорогою."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Він має рацію, але я дивлюся на це інакше."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "але",
        "example": "Ich komme, aber später. – Я прийду, але пізніше."
      },
      {
        "word": "sondern",
        "meaning": "не..., а...",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Я хотів / хотіла не чаю, а кави."
      },
      {
        "word": "jedoch",
        "meaning": "проте; формальніше",
        "example": "Es ist kalt, jedoch sonnig. – Холодно, проте сонячно."
      }
    ],
    "tip": {
      "text": "Після заперечення для виправлення вживай sondern; в інших протиставленнях — aber."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
      "aber = але / проте.",
      "aber і sondern не взаємозамінні в конструкції «не..., а...»."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "aber",
  "lv": "але",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "але",
    "explanation": "Використовується для введення контрасту або вираження заперечення. Часто означає «але», «проте» або «але».",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Я хочу піти, але не маю часу."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "їжа була смачною, але завищеною ціною."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "він правий, але я думаю інакше."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "протилежність • заперечення • однак",
        "example": "Ich komme, aber später. – Я прийду, але пізніше."
      },
      {
        "word": "sondern",
        "meaning": "не • але",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Я хотіла чаю, а не кави."
      },
      {
        "word": "jedoch",
        "meaning": "проте",
        "example": "Es ist kalt, jedoch sonnig. – Холодно, але сонячно."
      }
    ],
    "tip": {
      "text": "Пам'ятай: протилежність/заперечення → aber."
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
              "але"
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
              "але"
            ]
          }
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
            ],
            "purple": [
              "але"
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
        "left": {
          "green": [
            "aber"
          ],
          "purple": [
            "заперечення"
          ]
        }
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
          ],
          "purple": [
            "але"
          ]
        }
      ]
    },
    "important": [
      "aber показує опозицію або опозицію.",
      "Коли протилежне «не..., але...», німецька мова зазвичай використовує sondern."
    ]
  }
}
```

---

## Finding 23

**Audit ID:** `LRB102-0023`
**Finding Stable ID:** `g2/a1/uk|also|idx:26|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `also|idx:26`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"тому","study.translation":"тому","study.explanation":"Використовується, щоб зробити висновок або показати результат. Означає «отже», «отже».","study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"йде дощ, тому я залишаюся вдома.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"ти хворий, тому не йди на роботу.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"Я багато вивчив, тому тепер розумію.\"}]","study.comparison":"[{\"word\":\"also\",\"meaning\":\"так • тому\",\"example\":\"Es regnet, also bleibe ich zu Hause. – Йде дощ, тому я залишаюся вдома.\"},{\"word\":\"auch\",\"meaning\":\"також\",\"example\":\"Ich komme auch. – Я теж піду.\"},{\"word\":\"deshalb\",\"meaning\":\"тому\",\"example\":\"Es regnet, deshalb bleibe ich zu Hause. – Йде дощ, тому я залишаюся вдома.\"}]","study.tip":"{\"text\":\"Пам'ятай: висновок → also.\"}","study.important":"[\"also показує висновок: наступна думка випливає зі сказаного раніше.\",\"Латиське «так» також часто може бути deshalb.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"отже • тож","study.translation":"отже • тож","study.explanation":"[\"Головна думка: also вводить висновок або наслідок: «отже», «тож».\",\"auch означає «також», а deshalb — «тому» й так само виражає наслідок.\"]","study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"Іде дощ, отже я залишаюся вдома.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"Ти хворий / хвора, отже не йдеш на роботу.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"Я багато вчився / вчилася, отже тепер це розумію.\"}]","study.comparison":"[{\"word\":\"also\",\"meaning\":\"отже / тож\",\"example\":\"Es regnet, also bleibe ich zu Hause. – Іде дощ, отже я залишаюся вдома.\"},{\"word\":\"auch\",\"meaning\":\"також / теж\",\"example\":\"Ich komme auch. – Я теж прийду.\"},{\"word\":\"deshalb\",\"meaning\":\"тому\",\"example\":\"Es regnet, deshalb bleibe ich zu Hause. – Іде дощ, тому я залишаюся вдома.\"}]","study.tip":"{\"text\":\"Висновок або наслідок → also; додавання «також» → auch.\"}","study.important":"[\"Німецьке also означає «отже / тож», а не «також».\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: also was narrowed to “therefore”; result/addition contrast and examples were faulty.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "отже • тож",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "отже • тож",
    "explanation": [
      "Головна думка: also вводить висновок або наслідок: «отже», «тож».",
      "auch означає «також», а deshalb — «тому» й так само виражає наслідок."
    ],
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Іде дощ, отже я залишаюся вдома."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Ти хворий / хвора, отже не йдеш на роботу."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Я багато вчився / вчилася, отже тепер це розумію."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "отже / тож",
        "example": "Es regnet, also bleibe ich zu Hause. – Іде дощ, отже я залишаюся вдома."
      },
      {
        "word": "auch",
        "meaning": "також / теж",
        "example": "Ich komme auch. – Я теж прийду."
      },
      {
        "word": "deshalb",
        "meaning": "тому",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Іде дощ, тому я залишаюся вдома."
      }
    ],
    "tip": {
      "text": "Висновок або наслідок → also; додавання «також» → auch."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "important": [
      "Німецьке also означає «отже / тож», а не «також»."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "also",
  "lv": "тому",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "тому",
    "explanation": "Використовується, щоб зробити висновок або показати результат. Означає «отже», «отже».",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "йде дощ, тому я залишаюся вдома."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "ти хворий, тому не йди на роботу."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Я багато вивчив, тому тепер розумію."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "так • тому",
        "example": "Es regnet, also bleibe ich zu Hause. – Йде дощ, тому я залишаюся вдома."
      },
      {
        "word": "auch",
        "meaning": "також",
        "example": "Ich komme auch. – Я теж піду."
      },
      {
        "word": "deshalb",
        "meaning": "тому",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Йде дощ, тому я залишаюся вдома."
      }
    ],
    "tip": {
      "text": "Пам'ятай: висновок → also."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {
            "purple": [
              "тому"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {
            "purple": [
              "тому"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {
            "purple": [
              "тому"
            ]
          }
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
            ],
            "purple": [
              "тому"
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
            ],
            "purple": [
              "тому"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "green": [
            "also"
          ],
          "purple": [
            "висновок"
          ]
        }
      },
      "important": [
        {
          "green": [
            "also"
          ],
          "purple": [
            "висновок"
          ]
        },
        {
          "green": [
            "deshalb"
          ]
        }
      ]
    },
    "important": [
      "also показує висновок: наступна думка випливає зі сказаного раніше.",
      "Латиське «так» також часто може бути deshalb."
    ]
  }
}
```

---

## Finding 24

**Audit ID:** `LRB102-0024`
**Finding Stable ID:** `g2/a1/uk|an|idx:12|lv, study.translation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `an|idx:12`
**Field / path:** `lv, study.translation, study.examples`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"біля • на • поруч","study.translation":"при • на поверхні • на краю","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"на стіні / на стіні\"},{\"de\":\"am Fenster\",\"lv\":\"у вікні\"},{\"de\":\"am Meer\",\"lv\":\"на березі моря\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"біля • на","study.translation":"біля • на","study.explanation":"[\"Головна думка: an указує на близькість або контакт із вертикальною поверхнею.\",\"am — це скорочення an dem; конкретний переклад залежить від місця.\"]","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"на стіні / біля стіни\"},{\"de\":\"am Fenster\",\"lv\":\"біля вікна\"},{\"de\":\"am Meer\",\"lv\":\"біля моря\"}]","study.comparison":"[{\"word\":\"an\",\"meaning\":\"біля / на вертикальній поверхні\",\"example\":\"an der Wand – на стіні / біля стіни\"},{\"word\":\"auf\",\"meaning\":\"на горизонтальній поверхні\",\"example\":\"auf dem Tisch – на столі\"},{\"word\":\"bei\",\"meaning\":\"у когось / у певному місці\",\"example\":\"beim Arzt – у лікаря\"}]","study.tip":"{\"text\":\"Вертикальна поверхня або край → an; горизонтальна поверхня → auf.\"}","study.important":"[\"an керує давальним відмінком для місця й знахідним для напрямку.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Vertical-contact/proximity meanings and an/auf/bei contrasts needed correction.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "біля • на",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "біля • на",
    "explanation": [
      "Головна думка: an указує на близькість або контакт із вертикальною поверхнею.",
      "am — це скорочення an dem; конкретний переклад залежить від місця."
    ],
    "examples": [
      {
        "de": "an der Wand",
        "lv": "на стіні / біля стіни"
      },
      {
        "de": "am Fenster",
        "lv": "біля вікна"
      },
      {
        "de": "am Meer",
        "lv": "біля моря"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "біля / на вертикальній поверхні",
        "example": "an der Wand – на стіні / біля стіни"
      },
      {
        "word": "auf",
        "meaning": "на горизонтальній поверхні",
        "example": "auf dem Tisch – на столі"
      },
      {
        "word": "bei",
        "meaning": "у когось / у певному місці",
        "example": "beim Arzt – у лікаря"
      }
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "tip": {
      "text": "Вертикальна поверхня або край → an; горизонтальна поверхня → auf."
    },
    "important": [
      "an керує давальним відмінком для місця й знахідним для напрямку."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "an",
  "lv": "біля • на • поруч",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "при • на поверхні • на краю",
    "explanation": "Використовується, коли щось знаходиться біля стіни, вікна, дверей, річки, берега моря чи іншого краю/поверхні.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "на стіні / на стіні"
      },
      {
        "de": "am Fenster",
        "lv": "у вікні"
      },
      {
        "de": "am Meer",
        "lv": "на березі моря"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "на поверхні або краю",
        "example": "an der Wand – біля стіни"
      },
      {
        "word": "auf",
        "meaning": "на горизонтальній поверхні",
        "example": "auf dem Tisch – на столі"
      },
      {
        "word": "bei",
        "meaning": "до особи чи місця",
        "example": "beim Arzt – до лікаря"
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
        "left": {
          "blue": [
            "an"
          ],
          "green": [
            "стіни",
            "вікна",
            "краю"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "an"
          ],
          "green": [
            "поверхні",
            "стіни",
            "вікна",
            "краю"
          ]
        },
        {
          "yellow": [
            "auf"
          ],
          "purple": [
            "на горизонтальній поверхні"
          ]
        }
      ]
    },
    "tip": {
      "text": "Пам'ятай: біля стіни/вікна/краю → an."
    },
    "important": [
      "an — це не просто «at». Це часто означає поблизу поверхні, стіни, вікна чи краю.",
      "auf зазвичай використовується на горизонтальній поверхні."
    ]
  }
}
```

---

## Finding 25

**Audit ID:** `LRB102-0025`
**Finding Stable ID:** `g2/a1/uk|auch|idx:48|lv; study.examples|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `auch|idx:48`
**Field / path:** `lv; study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"також","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Я теж піду.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"я теж піду\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"вона теж тут працює.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"також • теж","study.translation":"також • теж","study.explanation":"[\"Головна думка: auch додає ще одну особу, дію або ознаку зі значенням «також / теж».\",\"Місце auch у реченні залежить від того, який елемент потрібно підкреслити.\"]","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Я теж прийду.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"Вона теж працює тут.\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"Я також бажаю Вам гарного дня.\"}]","study.tip":"[\"Став auch ближче до того слова або частини речення, яку додаєш.\"]","study.important":"[\"auch = також / теж.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: All examples were scrambled or unnatural and the full card needed rebuilding.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auch",
  "lv": "також • теж",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "також • теж",
    "explanation": [
      "Головна думка: auch додає ще одну особу, дію або ознаку зі значенням «також / теж».",
      "Місце auch у реченні залежить від того, який елемент потрібно підкреслити."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Я теж прийду."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Вона теж працює тут."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Я також бажаю Вам гарного дня."
      }
    ],
    "tip": [
      "Став auch ближче до того слова або частини речення, яку додаєш."
    ],
    "important": [
      "auch = також / теж."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "auch",
  "lv": "також",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "також",
    "explanation": [
      "Головна думка: найбільш поширене і нейтральне «також».",
      "auch в основному означає: просте «також».",
      "Часто характеризується: складання.",
      "auch є найпоширенішим словом для «також»."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Я теж піду."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "я теж піду"
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "вона теж тут працює."
      }
    ],
    "tip": [
      "auch = також",
      "Використовується в auch, коли контекст відповідає цьому значенню."
    ],
    "important": [
      "Ich auch wünsche Ihnen не правильний порядок слів.",
      "auch = також.",
      "Неправильно: Ich auch wünsche Ihnen einen schönen Tag."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "auch",
          "auch"
        ],
        "purple": [
          "також"
        ],
        "green": [
          "Також"
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
        {
          "purple": [
            "також"
          ]
        }
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

## Finding 26

**Audit ID:** `LRB102-0026`
**Finding Stable ID:** `g2/a1/uk|auf|idx:49|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `auf|idx:49`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"до","study.translation":"до","study.explanation":"Використовується для вказівки напрямку до місця або верхньої частини поверхні.","study.examples":"[{\"de\":\"Ich stelle das Buch auf den Tisch.\",\"lv\":\"Я кладу книгу на стіл.\"},{\"de\":\"Wir fahren auf den Berg.\",\"lv\":\"ми йдемо на гору.\"},{\"de\":\"Die Katze springt auf das Sofa.\",\"lv\":\"кіт стрибає на дивані.\"}]","study.comparison":"[{\"word\":\"auf\",\"meaning\":\"до (на поверхню або вгору)\",\"example\":\"Ich stelle das Glas auf den Tisch. – Ставлю склянку на стіл.\"},{\"word\":\"an\",\"meaning\":\"на (вертикальна поверхня)\",\"example\":\"Ich hänge das Bild an die Wand. – Вішаю картину на стіну.\"},{\"word\":\"in\",\"meaning\":\"всередині\",\"example\":\"Ich lege das Buch in die Tasche. – Я поклав книгу в сумку.\"}]","study.tip":"{\"text\":\"Пам'ятай: на поверхні/над → auf.\"}","study.important":"[\"auf - це не будь-яке \\\"on\\\". Це часто означає переміщення або перебування на поверхні/над поверхнею.\",\"Якщо щось знаходиться біля вертикальної поверхні, вам часто потрібні an; якщо всередині, вам потрібні in.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"на","study.translation":"на","study.explanation":"[\"Головна думка: auf із знахідним відмінком указує напрямок на поверхню або до певних відкритих місць.\",\"Для місця без руху auf уживається з давальним відмінком.\"]","study.examples":"[{\"de\":\"Ich stelle das Buch auf den Tisch.\",\"lv\":\"Я ставлю книжку на стіл.\"},{\"de\":\"Wir fahren auf den Berg.\",\"lv\":\"Ми їдемо на гору.\"},{\"de\":\"Die Katze springt auf das Sofa.\",\"lv\":\"Кіт стрибає на диван.\"}]","study.comparison":"[{\"word\":\"auf\",\"meaning\":\"на поверхню\",\"example\":\"Ich stelle das Glas auf den Tisch. – Я ставлю склянку на стіл.\"},{\"word\":\"an\",\"meaning\":\"до вертикальної поверхні\",\"example\":\"Ich hänge das Bild an die Wand. – Я вішаю картину на стіну.\"},{\"word\":\"in\",\"meaning\":\"усередину\",\"example\":\"Ich lege das Buch in die Tasche. – Я кладу книжку в сумку.\"}]","study.tip":"{\"text\":\"Напрямок «куди?» → auf + Akkusativ; місце «де?» → auf + Dativ.\"}","study.important":"[\"auf не завжди означає місце: з Akkusativ воно часто виражає напрямок.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Movement onto a surface, verbs, cases, and comparison alignment were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auf",
  "lv": "на",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "на",
    "explanation": [
      "Головна думка: auf із знахідним відмінком указує напрямок на поверхню або до певних відкритих місць.",
      "Для місця без руху auf уживається з давальним відмінком."
    ],
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Я ставлю книжку на стіл."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Ми їдемо на гору."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Кіт стрибає на диван."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "на поверхню",
        "example": "Ich stelle das Glas auf den Tisch. – Я ставлю склянку на стіл."
      },
      {
        "word": "an",
        "meaning": "до вертикальної поверхні",
        "example": "Ich hänge das Bild an die Wand. – Я вішаю картину на стіну."
      },
      {
        "word": "in",
        "meaning": "усередину",
        "example": "Ich lege das Buch in die Tasche. – Я кладу книжку в сумку."
      }
    ],
    "tip": {
      "text": "Напрямок «куди?» → auf + Akkusativ; місце «де?» → auf + Dativ."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "important": [
      "auf не завжди означає місце: з Akkusativ воно часто виражає напрямок."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "auf",
  "lv": "до",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "до",
    "explanation": "Використовується для вказівки напрямку до місця або верхньої частини поверхні.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Я кладу книгу на стіл."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "ми йдемо на гору."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "кіт стрибає на дивані."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "до (на поверхню або вгору)",
        "example": "Ich stelle das Glas auf den Tisch. – Ставлю склянку на стіл."
      },
      {
        "word": "an",
        "meaning": "на (вертикальна поверхня)",
        "example": "Ich hänge das Bild an die Wand. – Вішаю картину на стіну."
      },
      {
        "word": "in",
        "meaning": "всередині",
        "example": "Ich lege das Buch in die Tasche. – Я поклав книгу в сумку."
      }
    ],
    "tip": {
      "text": "Пам'ятай: на поверхні/над → auf."
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
        "left": {
          "blue": [
            "auf"
          ],
          "green": [
            "поверхні"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "auf"
          ],
          "green": [
            "поверхні"
          ]
        },
        {
          "green": [
            "an"
          ],
          "yellow": [
            "in"
          ],
          "purple": [
            "всередині"
          ]
        }
      ]
    },
    "important": [
      "auf - це не будь-яке \"on\". Це часто означає переміщення або перебування на поверхні/над поверхнею.",
      "Якщо щось знаходиться біля вертикальної поверхні, вам часто потрібні an; якщо всередині, вам потрібні in."
    ]
  }
}
```

---

## Finding 27

**Audit ID:** `LRB102-0027`
**Finding Stable ID:** `g2/a1/uk|aufs|idx:60|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `aufs|idx:60`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"до • на • де?","study.translation":"до • на • де?","study.explanation":"[\"aufs є абревіатурою прийменника auf і артикля das.\",\"Повна форма: auf das (де?).\",\"Вживається, коли дія вказує напрямок на певну річ чи поверхню - відповідає на питання де?\",\"Часто вживається з рухом: піднятися, сісти, посадити, під'їхати до чогось.\",\"У розмовній і повсякденній мові майже завжди вживається aufs замість повного auf das.\"]","study.examples":"[{\"de\":\"Ich gehe aufs Dach.\",\"lv\":\"я йду на дах\"},{\"de\":\"Sie setzt sich aufs Sofa.\",\"lv\":\"вона сідає на диван.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"ми їдемо в сільську місцевість.\"},{\"de\":\"Stell die Tasche aufs Bett.\",\"lv\":\"покласти сумку на ліжко.\"},{\"de\":\"Er springt aufs Pferd.\",\"lv\":\"він сідає на коня.\"},{\"de\":\"Leg das Buch aufs Regal.\",\"lv\":\"поставити книгу на полицю.\"},{\"de\":\"Komm schnell aufs Boot!\",\"lv\":\"швидше до човна!\"},{\"de\":\"Wir gehen aufs Fest.\",\"lv\":\"ми йдемо на вечірку.\"}]","study.comparison":"[{\"word\":\"aufs\",\"meaning\":\"до конкретного випадку (акк.)\",\"example\":\"aufs Dach – на даху\"},{\"word\":\"auf\",\"meaning\":\"на поверхню або вгору\",\"example\":\"auf den Tisch – на столі\"},{\"word\":\"an\",\"meaning\":\"на вертикальній поверхні\",\"example\":\"an die Wand – біля стіни\"},{\"word\":\"ins\",\"meaning\":\"всередину\",\"example\":\"ins Zimmer – в кімнаті\"},{\"word\":\"zum\",\"meaning\":\"до / на (кому?)\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"Пам'ятай: auf + das → aufs (де?, де?).\",\"У розмовній мові повне auf das майже не вимовляється - вживається aufs.\"]","study.important":"[\"aufs = auf das, тільки з іменником будь-якого роду де? у флексії.\",\"Відповісти куди? — рух до певного місця чи поверхні.\",\"На горизонтальній поверхні замість aufs часто використовується auf den.\",\"Не плутайте з an (на стіні) або ins (у приміщенні).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"на • куди?","study.translation":"на • куди?","study.explanation":"[\"Головна думка: aufs — це скорочення auf das.\",\"Уживається з іменником середнього роду в знахідному відмінку й зазвичай відповідає на питання «куди?».\"]","study.examples":"[{\"de\":\"Ich gehe aufs Dach.\",\"lv\":\"Я йду на дах.\"},{\"de\":\"Sie setzt sich aufs Sofa.\",\"lv\":\"Вона сідає на диван.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"Ми їдемо за місто.\"},{\"de\":\"Stell die Tasche aufs Bett.\",\"lv\":\"Постав сумку на ліжко.\"},{\"de\":\"Er springt aufs Pferd.\",\"lv\":\"Він застрибує на коня.\"},{\"de\":\"Leg das Buch aufs Regal.\",\"lv\":\"Поклади книжку на полицю.\"},{\"de\":\"Komm schnell aufs Boot!\",\"lv\":\"Швидше заходь на човен!\"},{\"de\":\"Wir gehen aufs Fest.\",\"lv\":\"Ми йдемо на свято.\"}]","study.comparison":"[{\"word\":\"aufs\",\"meaning\":\"на; auf + das\",\"example\":\"aufs Dach – на дах\"},{\"word\":\"auf\",\"meaning\":\"на; інший рід\",\"example\":\"auf den Tisch – на стіл\"},{\"word\":\"an\",\"meaning\":\"до вертикальної поверхні\",\"example\":\"an die Wand – на стіну\"},{\"word\":\"ins\",\"meaning\":\"усередину; in + das\",\"example\":\"ins Zimmer – у кімнату\"},{\"word\":\"zum\",\"meaning\":\"до особи або місця\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"aufs = auf + das і зазвичай позначає напрямок.\"]","study.important":"[\"aufs відповідає на «куди?», а auf dem — на «де?».\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: aufs contraction, accusative direction, and multiple examples were mistranslated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aufs",
  "lv": "на • куди?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "на • куди?",
    "explanation": [
      "Головна думка: aufs — це скорочення auf das.",
      "Уживається з іменником середнього роду в знахідному відмінку й зазвичай відповідає на питання «куди?»."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Я йду на дах."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Вона сідає на диван."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Ми їдемо за місто."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Постав сумку на ліжко."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Він застрибує на коня."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Поклади книжку на полицю."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Швидше заходь на човен!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Ми йдемо на свято."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "на; auf + das",
        "example": "aufs Dach – на дах"
      },
      {
        "word": "auf",
        "meaning": "на; інший рід",
        "example": "auf den Tisch – на стіл"
      },
      {
        "word": "an",
        "meaning": "до вертикальної поверхні",
        "example": "an die Wand – на стіну"
      },
      {
        "word": "ins",
        "meaning": "усередину; in + das",
        "example": "ins Zimmer – у кімнату"
      },
      {
        "word": "zum",
        "meaning": "до особи або місця",
        "example": "zum Arzt – до лікаря"
      }
    ],
    "tip": [
      "aufs = auf + das і зазвичай позначає напрямок."
    ],
    "important": [
      "aufs відповідає на «куди?», а auf dem — на «де?»."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "aufs",
  "lv": "до • на • де?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "до • на • де?",
    "explanation": [
      "aufs є абревіатурою прийменника auf і артикля das.",
      "Повна форма: auf das (де?).",
      "Вживається, коли дія вказує напрямок на певну річ чи поверхню - відповідає на питання де?",
      "Часто вживається з рухом: піднятися, сісти, посадити, під'їхати до чогось.",
      "У розмовній і повсякденній мові майже завжди вживається aufs замість повного auf das."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "я йду на дах"
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "вона сідає на диван."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "ми їдемо в сільську місцевість."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "покласти сумку на ліжко."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "він сідає на коня."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "поставити книгу на полицю."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "швидше до човна!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "ми йдемо на вечірку."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "до конкретного випадку (акк.)",
        "example": "aufs Dach – на даху"
      },
      {
        "word": "auf",
        "meaning": "на поверхню або вгору",
        "example": "auf den Tisch – на столі"
      },
      {
        "word": "an",
        "meaning": "на вертикальній поверхні",
        "example": "an die Wand – біля стіни"
      },
      {
        "word": "ins",
        "meaning": "всередину",
        "example": "ins Zimmer – в кімнаті"
      },
      {
        "word": "zum",
        "meaning": "до / на (кому?)",
        "example": "zum Arzt – до лікаря"
      }
    ],
    "tip": [
      "Пам'ятай: auf + das → aufs (де?, де?).",
      "У розмовній мові повне auf das майже не вимовляється - вживається aufs."
    ],
    "important": [
      "aufs = auf das, тільки з іменником будь-якого роду де? у флексії.",
      "Відповісти куди? — рух до певного місця чи поверхні.",
      "На горизонтальній поверхні замість aufs часто використовується auf den.",
      "Не плутайте з an (на стіні) або ins (у приміщенні)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "aufs",
          "auf das"
        ],
        "purple": [
          "до",
          "де"
        ],
        "green": [
          "де",
          "рух"
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
          "lv": {
            "purple": [
              "в сільську місцевість"
            ]
          }
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
          "meaning": {
            "purple": [
              "до конкретного випадку"
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
              "на поверхню"
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
          "meaning": {
            "purple": [
              "всередину"
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
              "до"
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
            "де"
          ]
        },
        {
          "green": [
            "рух"
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

## Finding 28

**Audit ID:** `LRB102-0028`
**Finding Stable ID:** `g2/a1/uk|aus|idx:57|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `aus|idx:57`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"з • виходу","study.translation":"з • виходу","study.explanation":"Використовується, коли щось надходить зсередини, виходить назовні або вказує на походження.","study.examples":"[{\"de\":\"Ich komme aus Deutschland.\",\"lv\":\"я з Німеччини.\"},{\"de\":\"Er geht aus dem Haus.\",\"lv\":\"він виходить з дому.\"},{\"de\":\"Ich nehme das Buch aus der Tasche.\",\"lv\":\"Я дістаю книжку з сумки.\"}]","study.comparison":"[{\"word\":\"aus\",\"meaning\":\"зсередини, ззовні\",\"example\":\"aus dem Haus – з дому\"},{\"word\":\"von\",\"meaning\":\"від людини, місця, поверхні\",\"example\":\"von meinem Freund – від мого друга\"},{\"word\":\"ab\",\"meaning\":\"починаючи з точки або часу\",\"example\":\"ab Montag – з понеділка\"}]","study.tip":"{\"text\":\"Пам'ятай: зсередини → aus.\"}","study.important":"[\"aus зазвичай показує рух зсередини або походження.\",\"Якщо це лише відправна точка в часі або місці, часто використовується ab.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"з • із","study.translation":"з • із","study.explanation":"[\"Головна думка: aus указує на походження або рух ізсередини назовні.\",\"Його вживають із давальним відмінком.\"]","study.examples":"[{\"de\":\"Ich komme aus Deutschland.\",\"lv\":\"Я з Німеччини.\"},{\"de\":\"Er geht aus dem Haus.\",\"lv\":\"Він виходить із будинку.\"},{\"de\":\"Ich nehme das Buch aus der Tasche.\",\"lv\":\"Я дістаю книжку із сумки.\"}]","study.comparison":"[{\"word\":\"aus\",\"meaning\":\"ізсередини / з країни\",\"example\":\"aus dem Haus – із будинку\"},{\"word\":\"von\",\"meaning\":\"від особи або джерела\",\"example\":\"von meinem Freund – від мого друга\"},{\"word\":\"ab\",\"meaning\":\"починаючи з часу\",\"example\":\"ab Montag – з понеділка\"}]","study.tip":"{\"text\":\"Рух ізсередини або походження з країни → aus.\"}","study.important":"[\"aus + Dativ позначає рух ізсередини або походження.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Inside-origin semantics and aus/von/ab contrast needed precise repair.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aus",
  "lv": "з • із",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "з • із",
    "explanation": [
      "Головна думка: aus указує на походження або рух ізсередини назовні.",
      "Його вживають із давальним відмінком."
    ],
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Я з Німеччини."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Він виходить із будинку."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Я дістаю книжку із сумки."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "ізсередини / з країни",
        "example": "aus dem Haus – із будинку"
      },
      {
        "word": "von",
        "meaning": "від особи або джерела",
        "example": "von meinem Freund – від мого друга"
      },
      {
        "word": "ab",
        "meaning": "починаючи з часу",
        "example": "ab Montag – з понеділка"
      }
    ],
    "tip": {
      "text": "Рух ізсередини або походження з країни → aus."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "important": [
      "aus + Dativ позначає рух ізсередини або походження."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "aus",
  "lv": "з • виходу",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "з • виходу",
    "explanation": "Використовується, коли щось надходить зсередини, виходить назовні або вказує на походження.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "я з Німеччини."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "він виходить з дому."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Я дістаю книжку з сумки."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "зсередини, ззовні",
        "example": "aus dem Haus – з дому"
      },
      {
        "word": "von",
        "meaning": "від людини, місця, поверхні",
        "example": "von meinem Freund – від мого друга"
      },
      {
        "word": "ab",
        "meaning": "починаючи з точки або часу",
        "example": "ab Montag – з понеділка"
      }
    ],
    "tip": {
      "text": "Пам'ятай: зсередини → aus."
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
              "від"
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
          ],
          "purple": [
            "зсередини"
          ]
        }
      },
      "important": [
        {
          "green": [
            "aus"
          ],
          "purple": [
            "зсередини",
            "походження"
          ]
        },
        {
          "blue": [
            "ab"
          ],
          "purple": [
            "відправна точка"
          ]
        }
      ]
    },
    "important": [
      "aus зазвичай показує рух зсередини або походження.",
      "Якщо це лише відправна точка в часі або місці, часто використовується ab."
    ]
  }
}
```

---

## Finding 29

**Audit ID:** `LRB102-0029`
**Finding Stable ID:** `g2/a1/uk|das|idx:129|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `das|idx:129`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"середній рід артикль","study.translation":"середній рід артикль","study.explanation":"Використовується для іменникием середнього сімейства. У деяких реченнях «das» також може функціонувати як займенник або відносний займенник.","study.examples":"[{\"de\":\"Das ist mein Auto.\",\"lv\":\"це мій auto.\"},{\"de\":\"Das ist gut.\",\"lv\":\"це добре\"},{\"de\":\"Das Buch, das ich lese, ist interessant.\",\"lv\":\"книга яку я читаю цікава.\"}]","study.comparison":"[{\"word\":\"das\",\"meaning\":\"це (артикль / займенник)\",\"example\":\"Das ist mein Auto. – Це мій auto.\"},{\"word\":\"dies\",\"meaning\":\"цей\",\"example\":\"Dies ist mein Auto. – Це мій auto.\"},{\"word\":\"welches\",\"meaning\":\"хто • який • кого\",\"example\":\"Das ist das Buch, welches ich lese. – Це книга, яку я читаю.\"}]","study.tip":"{\"text\":\"Пам'ятай: середній рід → das; що → dass.\"}","study.important":"[\"На рівні A1 das спочатку вивчається як артикль середнього роду.\",\"das не те саме, що dass - das може бути артикль або займенник, dass означає \\\"те\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"означений артикль середнього роду","study.translation":"означений артикль середнього роду","study.explanation":"[\"Головна думка: das — означений артикль середнього роду в називному та знахідному відмінках.\",\"das також може бути вказівним займенником «це» або відносним займенником.\",\"Сполучник «що» пишеться dass із двома s.\"]","study.examples":"[{\"de\":\"Das ist mein Auto.\",\"lv\":\"Це мій автомобіль.\"},{\"de\":\"Das ist gut.\",\"lv\":\"Це добре.\"},{\"de\":\"Das Buch, das ich lese, ist interessant.\",\"lv\":\"Книжка, яку я читаю, цікава.\"}]","study.comparison":"[{\"word\":\"das\",\"meaning\":\"це / артикль / відносний займенник\",\"example\":\"Das ist mein Auto. – Це мій автомобіль.\"},{\"word\":\"dies\",\"meaning\":\"це; вказівне слово\",\"example\":\"Dies ist mein Auto. – Це мій автомобіль.\"},{\"word\":\"welches\",\"meaning\":\"який / яка / яке; відносний займенник\",\"example\":\"Das ist das Buch, welches ich lese. – Це книжка, яку я читаю.\"}]","study.tip":"{\"text\":\"Середній рід → das; сполучник «що» → dass.\"}","study.important":"[\"das і dass — різні слова.\",\"das може бути артиклем або займенником.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: Article/pronoun roles, gender grammar, and das/dass contrast were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "означений артикль середнього роду",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "означений артикль середнього роду",
    "explanation": [
      "Головна думка: das — означений артикль середнього роду в називному та знахідному відмінках.",
      "das також може бути вказівним займенником «це» або відносним займенником.",
      "Сполучник «що» пишеться dass із двома s."
    ],
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Це мій автомобіль."
      },
      {
        "de": "Das ist gut.",
        "lv": "Це добре."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Книжка, яку я читаю, цікава."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "це / артикль / відносний займенник",
        "example": "Das ist mein Auto. – Це мій автомобіль."
      },
      {
        "word": "dies",
        "meaning": "це; вказівне слово",
        "example": "Dies ist mein Auto. – Це мій автомобіль."
      },
      {
        "word": "welches",
        "meaning": "який / яка / яке; відносний займенник",
        "example": "Das ist das Buch, welches ich lese. – Це книжка, яку я читаю."
      }
    ],
    "tip": {
      "text": "Середній рід → das; сполучник «що» → dass."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
      "das і dass — різні слова.",
      "das може бути артиклем або займенником."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "das",
  "lv": "середній рід артикль",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "середній рід артикль",
    "explanation": "Використовується для іменникием середнього сімейства. У деяких реченнях «das» також може функціонувати як займенник або відносний займенник.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "це мій auto."
      },
      {
        "de": "Das ist gut.",
        "lv": "це добре"
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "книга яку я читаю цікава."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "це (артикль / займенник)",
        "example": "Das ist mein Auto. – Це мій auto."
      },
      {
        "word": "dies",
        "meaning": "цей",
        "example": "Dies ist mein Auto. – Це мій auto."
      },
      {
        "word": "welches",
        "meaning": "хто • який • кого",
        "example": "Das ist das Buch, welches ich lese. – Це книга, яку я читаю."
      }
    ],
    "tip": {
      "text": "Пам'ятай: середній рід → das; що → dass."
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
          "red": [
            "dass"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "das"
          ]
        },
        {
          "blue": [
            "das"
          ],
          "purple": [
            "артикль",
            "займенник"
          ],
          "red": [
            "dass"
          ]
        }
      ]
    },
    "important": [
      "На рівні A1 das спочатку вивчається як артикль середнього роду.",
      "das не те саме, що dass - das може бути артикль або займенник, dass означає \"те\"."
    ]
  }
}
```

---

## Finding 30

**Audit ID:** `LRB102-0030`
**Finding Stable ID:** `g2/a1/uk|dass|idx:130|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `dass|idx:130`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"що","study.translation":"що","study.explanation":"Вводить допоміжне речення, яке виражає факт, думку чи твердження.","study.examples":"[{\"de\":\"Ich weiß, dass du müde bist.\",\"lv\":\"я знаю, що ти втомився.\"},{\"de\":\"Er sagt, dass er kommt.\",\"lv\":\"каже що прийде.\"},{\"de\":\"Ich glaube, dass das stimmt.\",\"lv\":\"я думаю, що це правильно.\"}]","study.comparison":"[{\"word\":\"dass\",\"meaning\":\"що\",\"example\":\"Ich weiß, dass er kommt. – Я знаю, що він прийде.\"},{\"word\":\"weil\",\"meaning\":\"тому що • тому що\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Я залишаюся вдома, тому що йде дощ.\"},{\"word\":\"damit\",\"meaning\":\"до\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Я вивчаю німецьку мову, щоб мати можливість працювати в Німеччині.\"},{\"word\":\"ob\",\"meaning\":\"або\",\"example\":\"Ich weiß nicht, ob er kommt. – Не знаю, чи він прийде.\"}]","study.tip":"{\"text\":\"Пам'ятай: що → dass.\"}","study.important":"[\"dass означає «що» та вводить допоміжне речення.\",\"Не плутати з das, який може бути артикль або «те».\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"що","study.translation":"що","study.explanation":"[\"Головна думка: dass — сполучник «що», який вводить підрядне речення.\",\"У підрядному реченні з dass відмінюване дієслово зазвичай стоїть у кінці.\"]","study.examples":"[{\"de\":\"Ich weiß, dass du müde bist.\",\"lv\":\"Я знаю, що ти втомився / втомилася.\"},{\"de\":\"Er sagt, dass er kommt.\",\"lv\":\"Він каже, що прийде.\"},{\"de\":\"Ich glaube, dass das stimmt.\",\"lv\":\"Я думаю, що це правда.\"}]","study.comparison":"[{\"word\":\"dass\",\"meaning\":\"що\",\"example\":\"Ich weiß, dass er kommt. – Я знаю, що він прийде.\"},{\"word\":\"weil\",\"meaning\":\"тому що\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Я залишаюся вдома, тому що йде дощ.\"},{\"word\":\"damit\",\"meaning\":\"щоб\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Я вивчаю німецьку, щоб мати змогу працювати в Німеччині.\"},{\"word\":\"ob\",\"meaning\":\"чи\",\"example\":\"Ich weiß nicht, ob er kommt. – Я не знаю, чи він прийде.\"}]","study.tip":"{\"text\":\"Після dass відмінюване дієслово став у кінець підрядного речення.\"}","study.important":"[\"dass = сполучник «що»; das = артикль або займенник.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Subordinate-clause grammar and dass/weil/damit/ob meanings were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "що",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "що",
    "explanation": [
      "Головна думка: dass — сполучник «що», який вводить підрядне речення.",
      "У підрядному реченні з dass відмінюване дієслово зазвичай стоїть у кінці."
    ],
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Я знаю, що ти втомився / втомилася."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Він каже, що прийде."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Я думаю, що це правда."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "що",
        "example": "Ich weiß, dass er kommt. – Я знаю, що він прийде."
      },
      {
        "word": "weil",
        "meaning": "тому що",
        "example": "Ich bleibe zu Hause, weil es regnet. – Я залишаюся вдома, тому що йде дощ."
      },
      {
        "word": "damit",
        "meaning": "щоб",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Я вивчаю німецьку, щоб мати змогу працювати в Німеччині."
      },
      {
        "word": "ob",
        "meaning": "чи",
        "example": "Ich weiß nicht, ob er kommt. – Я не знаю, чи він прийде."
      }
    ],
    "tip": {
      "text": "Після dass відмінюване дієслово став у кінець підрядного речення."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    },
    "important": [
      "dass = сполучник «що»; das = артикль або займенник."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dass",
  "lv": "що",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "що",
    "explanation": "Вводить допоміжне речення, яке виражає факт, думку чи твердження.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "я знаю, що ти втомився."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "каже що прийде."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "я думаю, що це правильно."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "що",
        "example": "Ich weiß, dass er kommt. – Я знаю, що він прийде."
      },
      {
        "word": "weil",
        "meaning": "тому що • тому що",
        "example": "Ich bleibe zu Hause, weil es regnet. – Я залишаюся вдома, тому що йде дощ."
      },
      {
        "word": "damit",
        "meaning": "до",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Я вивчаю німецьку мову, щоб мати можливість працювати в Німеччині."
      },
      {
        "word": "ob",
        "meaning": "або",
        "example": "Ich weiß nicht, ob er kommt. – Не знаю, чи він прийде."
      }
    ],
    "tip": {
      "text": "Пам'ятай: що → dass."
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
              "що"
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
              "що"
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
              "що"
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
              "що"
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
              "тому що"
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
        "left": {
          "blue": [
            "dass"
          ],
          "purple": [
            "що"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "dass"
          ],
          "purple": [
            "що"
          ],
          "green": [
            "допоміжне речення"
          ]
        },
        {
          "red": [
            "das"
          ],
          "yellow": [
            "артикль"
          ]
        }
      ]
    },
    "important": [
      "dass означає «що» та вводить допоміжне речення.",
      "Не плутати з das, який може бути артикль або «те»."
    ]
  }
}
```

---

## Finding 31

**Audit ID:** `LRB102-0031`
**Finding Stable ID:** `g2/a1/uk|der|idx:134|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `der|idx:134`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"чоловічий рід артикль","study.translation":"чоловічий рід артикль","study.explanation":"Вживається з чоловічим родом іменникиem. У деяких реченнях «der» також може функціонувати як займенник або відносний займенник.","study.examples":"[{\"de\":\"Der Mann ist hier.\",\"lv\":\"чоловік тут.\"},{\"de\":\"Der Bus kommt.\",\"lv\":\"автобус їде.\"},{\"de\":\"Der Lehrer spricht.\",\"lv\":\"говорить учитель.\"}]","study.tip":"{\"text\":\"Пам'ятай: чоловічий рід → der.\"}","study.important":"[\"На рівні A1 der спочатку вивчається як артикль чоловічого роду.\",\"Займенник і відносне використання з’являються пізніше.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"означений артикль чоловічого роду","study.translation":"означений артикль чоловічого роду","study.explanation":"[\"Головна думка: der — означений артикль чоловічого роду в називному відмінку однини.\",\"Форма артикля змінюється залежно від роду, числа й відмінка.\"]","study.examples":"[{\"de\":\"Der Mann ist hier.\",\"lv\":\"Чоловік тут.\"},{\"de\":\"Der Bus kommt.\",\"lv\":\"Автобус прибуває.\"},{\"de\":\"Der Lehrer spricht.\",\"lv\":\"Учитель говорить.\"}]","study.tip":"{\"text\":\"Чоловічий рід, Nominativ, однина → der.\"}","study.important":"[\"der уживається перед іменником чоловічого роду в називному відмінку.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Masculine nominative article explanation and examples needed grammatical repair.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "der",
  "lv": "означений артикль чоловічого роду",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "означений артикль чоловічого роду",
    "explanation": [
      "Головна думка: der — означений артикль чоловічого роду в називному відмінку однини.",
      "Форма артикля змінюється залежно від роду, числа й відмінка."
    ],
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Чоловік тут."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Автобус прибуває."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Учитель говорить."
      }
    ],
    "tip": {
      "text": "Чоловічий рід, Nominativ, однина → der."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "important": [
      "der уживається перед іменником чоловічого роду в називному відмінку."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "der",
  "lv": "чоловічий рід артикль",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "чоловічий рід артикль",
    "explanation": "Вживається з чоловічим родом іменникиem. У деяких реченнях «der» також може функціонувати як займенник або відносний займенник.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "чоловік тут."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "автобус їде."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "говорить учитель."
      }
    ],
    "tip": {
      "text": "Пам'ятай: чоловічий рід → der."
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
        "left": {
          "blue": [
            "der"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der"
          ]
        },
        {
          "red": [
            "Займенник",
            "відносне"
          ]
        }
      ]
    },
    "important": [
      "На рівні A1 der спочатку вивчається як артикль чоловічого роду.",
      "Займенник і відносне використання з’являються пізніше."
    ]
  }
}
```

---

## Finding 32

**Audit ID:** `LRB102-0032`
**Finding Stable ID:** `g2/a1/uk|die|idx:137|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `die|idx:137`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"жіночий рід артикль","study.translation":"жіночий рід артикль","study.explanation":"Використовується для іменникиem жіночого роду. У деяких реченнях «die» також може функціонувати як займенник або відносний займенник.","study.examples":"[{\"de\":\"Die Frau ist hier.\",\"lv\":\"жінка тут.\"},{\"de\":\"Die Katze schläft.\",\"lv\":\"кошеня спить.\"},{\"de\":\"Die Lehrerin erklärt.\",\"lv\":\"пояснює вчитель.\"}]","study.tip":"{\"text\":\"Пам'ятай: жіночий рід → die.\"}","study.important":"[\"На рівні A1 die спочатку вивчається як артикль жіночого роду.\",\"В множині die також використовується для всіх сімей.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"означений артикль жіночого роду","study.translation":"означений артикль жіночого роду","study.explanation":"[\"Головна думка: die — означений артикль жіночого роду в називному та знахідному відмінках однини.\",\"die також є формою означеного артикля для множини всіх родів.\"]","study.examples":"[{\"de\":\"Die Frau ist hier.\",\"lv\":\"Жінка тут.\"},{\"de\":\"Die Katze schläft.\",\"lv\":\"Кішка спить.\"},{\"de\":\"Die Lehrerin erklärt.\",\"lv\":\"Учителька пояснює.\"}]","study.tip":"{\"text\":\"Жіночий рід в однині та всі роди в множині часто мають артикль die.\"}","study.important":"[\"die може позначати жіночий рід в однині або множину.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Feminine/plural article explanation and noun translations were inaccurate.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "die",
  "lv": "означений артикль жіночого роду",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "означений артикль жіночого роду",
    "explanation": [
      "Головна думка: die — означений артикль жіночого роду в називному та знахідному відмінках однини.",
      "die також є формою означеного артикля для множини всіх родів."
    ],
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Жінка тут."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Кішка спить."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Учителька пояснює."
      }
    ],
    "tip": {
      "text": "Жіночий рід в однині та всі роди в множині часто мають артикль die."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "important": [
      "die може позначати жіночий рід в однині або множину."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "die",
  "lv": "жіночий рід артикль",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "жіночий рід артикль",
    "explanation": "Використовується для іменникиem жіночого роду. У деяких реченнях «die» також може функціонувати як займенник або відносний займенник.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "жінка тут."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "кошеня спить."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "пояснює вчитель."
      }
    ],
    "tip": {
      "text": "Пам'ятай: жіночий рід → die."
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
        "left": {
          "blue": [
            "die"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "die"
          ]
        },
        {
          "blue": [
            "die"
          ],
          "green": [
            "В множині"
          ],
          "purple": [
            "для всіх сімей"
          ]
        }
      ]
    },
    "important": [
      "На рівні A1 die спочатку вивчається як артикль жіночого роду.",
      "В множині die також використовується для всіх сімей."
    ]
  }
}
```

---

## Finding 33

**Audit ID:** `LRB102-0033`
**Finding Stable ID:** `g2/a1/uk|dieser|idx:139|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `dieser|idx:139`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"цей","study.translation":"цей","study.explanation":"Вказує на людину, предмет або тварину, що знаходиться поблизу. Вживається з іменником чоловічого роду.","study.examples":"[{\"de\":\"Dieser Mann ist nett.\",\"lv\":\"цей чоловік хороший.\"},{\"de\":\"Ich sehe diesen Hund.\",\"lv\":\"мені подобається ця собака\"},{\"de\":\"Dieser Stift ist neu.\",\"lv\":\"ця ручка нова.\"}]","study.tip":"{\"text\":\"Пам'ятай: цей + чоловічий рід → dieser.\"}","study.important":"[\"dieser, diese і dieses відрізняються залежно від статі.\",\"Форма В множині знову є diese.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"цей","study.translation":"цей","study.explanation":"[\"Головна думка: dieser указує на конкретну особу або річ: «цей».\",\"Закінчення змінюється за родом, числом і відмінком: dieser, diese, dieses, diesen.\"]","study.examples":"[{\"de\":\"Dieser Mann ist nett.\",\"lv\":\"Цей чоловік привітний.\"},{\"de\":\"Ich sehe diesen Hund.\",\"lv\":\"Я бачу цього собаку.\"},{\"de\":\"Dieser Stift ist neu.\",\"lv\":\"Ця ручка нова.\"}]","study.tip":"{\"text\":\"Узгоджуй dieser з граматичним родом і відмінком німецького іменника.\"}","study.important":"[\"dieser відмінюється; форма залежить від іменника та його ролі в реченні.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Demonstrative declension, case, and target grammatical gender needed repair.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dieser",
  "lv": "цей",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "цей",
    "explanation": [
      "Головна думка: dieser указує на конкретну особу або річ: «цей».",
      "Закінчення змінюється за родом, числом і відмінком: dieser, diese, dieses, diesen."
    ],
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Цей чоловік привітний."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Я бачу цього собаку."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "Ця ручка нова."
      }
    ],
    "tip": {
      "text": "Узгоджуй dieser з граматичним родом і відмінком німецького іменника."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {}
      ]
    },
    "important": [
      "dieser відмінюється; форма залежить від іменника та його ролі в реченні."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dieser",
  "lv": "цей",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "цей",
    "explanation": "Вказує на людину, предмет або тварину, що знаходиться поблизу. Вживається з іменником чоловічого роду.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "цей чоловік хороший."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "мені подобається ця собака"
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "ця ручка нова."
      }
    ],
    "tip": {
      "text": "Пам'ятай: цей + чоловічий рід → dieser."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "Dieser"
            ]
          },
          "lv": {
            "purple": [
              "цей"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "diesen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Dieser"
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
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "dieser"
          ],
          "purple": [
            "цей"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "dieser"
          ],
          "green": [
            "diese"
          ],
          "yellow": [
            "dieses"
          ]
        },
        {
          "red": [
            "diese"
          ],
          "green": [
            "В множині"
          ]
        }
      ]
    },
    "important": [
      "dieser, diese і dieses відрізняються залежно від статі.",
      "Форма В множині знову є diese."
    ]
  }
}
```

---

## Finding 34

**Audit ID:** `LRB102-0034`
**Finding Stable ID:** `g2/a1/uk|einmal|idx:700|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `einmal|idx:700`
**Field / path:** `lv and study target-language fields`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"раз • раз","study target-language fields":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"один раз • колись","study.translation":"один раз • колись","study.explanation":"[\"Головна думка: einmal означає «один раз» або, у розповіді про минуле, «колись».\",\"Скорочена розмовна форма — mal.\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Я колись був / була в Берліні.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Я колись був / була в Берліні.\"}]","study.tip":"[\"Кількість повторів → один раз; невизначений час у минулому → колись.\"]","study.important":"[\"einmal = один раз / колись.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: One-time/former-time senses were repetitive and guidance was defective.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "один раз • колись",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "один раз • колись",
    "explanation": [
      "Головна думка: einmal означає «один раз» або, у розповіді про минуле, «колись».",
      "Скорочена розмовна форма — mal."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Я колись був / була в Берліні."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Я колись був / була в Берліні."
      }
    ],
    "tip": [
      "Кількість повторів → один раз; невизначений час у минулому → колись."
    ],
    "important": [
      "einmal = один раз / колись."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "einmal",
  "lv": "раз • раз",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "раз • раз",
    "explanation": [
      "Головна думка: Посилається на час або минуле (колись я був...).",
      "einmal в основному означає: колись / у минулому.",
      "Часто характеризується: погодними умовами.",
      "einmal вказує на один час або минуле (колись я...)."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Одного разу я був у Берліні."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Одного разу я був у Берліні."
      }
    ],
    "tip": [
      "einmal = один раз",
      "Використовується в einmal, коли контекст відповідає цьому значенню."
    ],
    "important": [
      "einmal = один раз або один раз у минулому.",
      "Посилається на час або минуле (колись я був...)."
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
        {
          "purple": [
            "один раз"
          ]
        },
        {
          "purple": [
            "один раз"
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

## Finding 35

**Audit ID:** `LRB102-0035`
**Finding Stable ID:** `g2/a1/uk|es|idx:167|study.examples.lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** uk
**Card:** `es|idx:167`
**Field / path:** `study.examples.lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"воно • це • безособовий займенник","study.translation":"воно • це • безособовий займенник","study.explanation":"[\"Головна думка: es — займенник середнього роду або формальний підмет у безособових конструкціях.\",\"У висловах про погоду чи стан es часто не перекладається окремим словом.\"]","study.examples":"[{\"de\":\"Es regnet.\",\"lv\":\"Іде дощ.\"},{\"de\":\"Es ist kalt.\",\"lv\":\"Холодно.\"},{\"de\":\"Das Kind schläft.\",\"lv\":\"Дитина спить.\"},{\"de\":\"Es ist müde.\",\"lv\":\"Воно втомлене.\"}]","study.comparison":"[{\"word\":\"es\",\"meaning\":\"воно / це; безособова форма\",\"example\":\"Es regnet. – Іде дощ.\"},{\"word\":\"ich\",\"meaning\":\"я; займенник першої особи\",\"example\":\"Ich lerne Deutsch. – Я вивчаю німецьку.\"}]","study.info":"[\"Українське «я» = німецьке ich\",\"Німецьке es = «воно / це» або безособова форма\"]","study.tip":"{\"text\":\"Запам’ятай: українське «я» → ich, а німецьке es → «воно / це» або безособова конструкція.\"}","study.important":"[\"es може замінювати іменник середнього роду або бути формальним підметом.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"info":[{},{}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Two non-source examples, scrambled pairs, and Latvian-specific residue had to be removed.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "воно • це • безособовий займенник",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "воно • це • безособовий займенник",
    "explanation": [
      "Головна думка: es — займенник середнього роду або формальний підмет у безособових конструкціях.",
      "У висловах про погоду чи стан es часто не перекладається окремим словом."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Іде дощ."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Холодно."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Дитина спить."
      },
      {
        "de": "Es ist müde.",
        "lv": "Воно втомлене."
      }
    ],
    "info": [
      "Українське «я» = німецьке ich",
      "Німецьке es = «воно / це» або безособова форма"
    ],
    "tip": {
      "text": "Запам’ятай: українське «я» → ich, а німецьке es → «воно / це» або безособова конструкція."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    },
    "important": [
      "es може замінювати іменник середнього роду або бути формальним підметом."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "воно / це; безособова форма",
        "example": "Es regnet. – Іде дощ."
      },
      {
        "word": "ich",
        "meaning": "я; займенник першої особи",
        "example": "Ich lerne Deutsch. – Я вивчаю німецьку."
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "es",
  "lv": "it • it • безособова форма",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "it • it • безособова форма",
    "explanation": [
      "Головна ідея: es — це займенник.",
      "Його використовують: це, в безособових конструкціях."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Я вивчаю німецьку мову."
      },
      {
        "de": "Es ist kalt.",
        "lv": "він втомився."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "вона тут працює."
      },
      {
        "de": "Es ist müde.",
        "lv": "це моя книга."
      },
      {
        "de": "Es regnet.",
        "lv": "іде дощ"
      },
      {
        "de": "Es schneit.",
        "lv": "сніг"
      }
    ],
    "info": [
      "латиське \"es\" = німецьке \"ich\"",
      "німецьке «я» = воно; так; неособова форма"
    ],
    "tip": {
      "text": "Пам'ятай: латиське «es» → ich, а не німецьке es."
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
        {},
        {}
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
        {}
      ],
      "tip": {
        "left": {
          "red": [
            "ich"
          ]
        }
      },
      "important": [
        {},
        {
          "red": [
            "ich"
          ]
        }
      ]
    },
    "important": [
      "Німецьке я – це не латиське я.",
      "латиське «I» німецькою — ich; Німецький es часто означає це/це або не перекладається.",
      "Лативський \"es\" німецькою — ich; німецька es часто означає це або не перекладається."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "це • безособова форма",
        "example": "Es regnet. – Йде дощ."
      },
      {
        "word": "ich",
        "meaning": "es (особа)",
        "example": "Ich lerne Deutsch. – Я вивчаю німецьку мову."
      }
    ]
  }
}
```

---

## Finding 36

**Audit ID:** `LRB102-0036`
**Finding Stable ID:** `g2/a1/uk|ihr|idx:292|study.translation; study.explanation; study.examples|MEANING_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `ihr|idx:292`
**Field / path:** `study.translation; study.explanation; study.examples`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"ти • її","study.explanation":"[\"Головна думка: ihr - це два різні займенники з однаковим написанням - звернення до кількох людей (ви) і давальна форма займенника sie (вона/вона).\",\"З маленькими ihr як звернення до кількох людей, це перекладається як ви (Kommt ihr mit? = Ви йдете разом?).\",\"ihr як присвійний займенник означає її (ihr Buch = її книга).\",\"ihr як давальна форма (від sie) означає їй (Ich gebe ihr das Buch. = Я даю їй книгу.).\",\"Дієслівна форма (kommt, habt) показує, що йдеться про ти - звертання до кількох осіб.\",\"Ввічливе звернення завжди пишеться з великої літери Sie, а не ihr.\"]","study.examples":"[{\"de\":\"Kommt ihr heute Abend?\",\"lv\":\"ти прийдеш сьогодні ввечері?\"},{\"de\":\"Ich gebe ihr das Buch.\",\"lv\":\"я даю їй книгу.\"},{\"de\":\"Wo wohnt ihr?\",\"lv\":\"де ти живеш\"},{\"de\":\"Er schreibt ihr einen Brief.\",\"lv\":\"він пише їй листа.\"},{\"de\":\"Habt ihr Zeit?\",\"lv\":\"у вас є час?\"},{\"de\":\"Das ist ihr Auto.\",\"lv\":\"це її машина.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ви • їй • її","study.translation":"ви • їй • її","study.explanation":"[\"Головна думка: ihr має кілька значень, які визначає граматична роль.\",\"Як особовий займенник ihr = «ви» для кількох людей; у давальному відмінку ihr = «їй»; як присвійне слово ihr = «її».\"]","study.examples":"[{\"de\":\"Kommt ihr heute Abend?\",\"lv\":\"Ви прийдете сьогодні ввечері?\"},{\"de\":\"Ich gebe ihr das Buch.\",\"lv\":\"Я даю їй книжку.\"},{\"de\":\"Wo wohnt ihr?\",\"lv\":\"Де ви живете?\"},{\"de\":\"Er schreibt ihr einen Brief.\",\"lv\":\"Він пише їй листа.\"},{\"de\":\"Habt ihr Zeit?\",\"lv\":\"У вас є час?\"},{\"de\":\"Das ist ihr Auto.\",\"lv\":\"Це її автомобіль.\"}]","study.tip":"[\"ihr + дієслово у 2-й особі множини → «ви»; після дієслова як Dativ → «їй»; перед іменником → «її».\"]","study.important":"[\"ihr може означати «ви», «їй» або «її»; значення визначає структура речення.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Plural-you, dative-her, and possessive-her meanings were conflated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "ви • їй • її",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "ви • їй • її",
    "explanation": [
      "Головна думка: ihr має кілька значень, які визначає граматична роль.",
      "Як особовий займенник ihr = «ви» для кількох людей; у давальному відмінку ihr = «їй»; як присвійне слово ihr = «її»."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Ви прийдете сьогодні ввечері?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Я даю їй книжку."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Де ви живете?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Він пише їй листа."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "У вас є час?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Це її автомобіль."
      }
    ],
    "tip": [
      "ihr + дієслово у 2-й особі множини → «ви»; після дієслова як Dativ → «їй»; перед іменником → «її»."
    ],
    "important": [
      "ihr може означати «ви», «їй» або «її»; значення визначає структура речення."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ihr",
  "lv": "ти • її",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "ти • її",
    "explanation": [
      "Головна думка: ihr - це два різні займенники з однаковим написанням - звернення до кількох людей (ви) і давальна форма займенника sie (вона/вона).",
      "З маленькими ihr як звернення до кількох людей, це перекладається як ви (Kommt ihr mit? = Ви йдете разом?).",
      "ihr як присвійний займенник означає її (ihr Buch = її книга).",
      "ihr як давальна форма (від sie) означає їй (Ich gebe ihr das Buch. = Я даю їй книгу.).",
      "Дієслівна форма (kommt, habt) показує, що йдеться про ти - звертання до кількох осіб.",
      "Ввічливе звернення завжди пишеться з великої літери Sie, а не ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "ти прийдеш сьогодні ввечері?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "я даю їй книгу."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "де ти живеш"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "він пише їй листа."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "у вас є час?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "це її машина."
      }
    ],
    "tip": [
      "ihr з дієсловом дск. форма (kommt, habt) = ви; ihr поруч із таким словом, як давальний відмінок або належність = її/її.",
      "Перевірте: Habt ihr...? / Kommt ihr...? = ти; Ich gebe ihr... / ihr Buch = її/вона."
    ],
    "important": [
      "ihr = ти (звертання до кількох) АБО вона (давальний відмінок) АБО її (володіння) - залежно від контексту.",
      "Ввічливе звернення завжди пишеться з великої літери Sie, а не ihr.",
      "Неправильно: Ihr (ввічливо) → Правильно: Sie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ihr"
        ],
        "purple": [
          "ви",
          "її"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "її"
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
            "її"
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

## Finding 37

**Audit ID:** `LRB102-0037`
**Finding Stable ID:** `g2/a1/uk|ins|idx:296|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `ins|idx:296`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"в • в • де?","study.translation":"в • в • де?","study.explanation":"[\"ins є абревіатурою прийменника in і артикля das.\",\"Повна форма: in das (де?).\",\"Вживається з іменники будь-якого роду, відповідаючи на питання де? — рух всередину.\",\"Часто з дієслова: gehen, fahren, kommen, legen, stecken.\",\"На практиці ins майже завжди використовується замість повного in das.\"]","study.examples":"[{\"de\":\"Ich gehe ins Kino.\",\"lv\":\"я переходжу до kino.\"},{\"de\":\"Sie geht ins Bett.\",\"lv\":\"вона йде спати.\"},{\"de\":\"Wir fahren ins Ausland.\",\"lv\":\"ми їдемо за кордон.\"},{\"de\":\"Komm ins Haus!\",\"lv\":\"приходь до хати!\"},{\"de\":\"Er steckt das Geld in den Geldbeutel.\",\"lv\":\"він кладе гроші в свій гаманець.\"},{\"de\":\"Wir gehen ins Museum.\",\"lv\":\"йдемо в музей.\"},{\"de\":\"Sie legt die Blumen ins Wasser.\",\"lv\":\"вона ставить квіти у воду.\"},{\"de\":\"Fahr bitte ins Zentrum.\",\"lv\":\"прошу до центру.\"}]","study.comparison":"[{\"word\":\"ins\",\"meaning\":\"всередину, куди? (Акк.)\",\"example\":\"ins Kino – до kino\"},{\"word\":\"im\",\"meaning\":\"в, де? (кому?)\",\"example\":\"im Kino – у кіно\"},{\"word\":\"in\",\"meaning\":\"в / до (з самостійною статтею)\",\"example\":\"in die Stadt – до міста\"},{\"word\":\"aufs\",\"meaning\":\"на поверхню (акк.)\",\"example\":\"aufs Dach – на даху\"},{\"word\":\"zum\",\"meaning\":\"до / на (кому?)\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"Пам'ятай: in + das → ins (де?, де?).\",\"де → ins; де? → im - Це головна відмінність!\"]","study.important":"[\"ins = in das, тільки з іменником будь-якого роду де? у флексії.\",\"Відповідає де?, а не де? - рух, а не розташування.\",\"Для чоловіків: in den Wald; жінок: in die Schule.\",\"Не змішуйте: ins Kino gehen (на kino) проти im Kino sein (буде kino).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"у • всередину • куди?","study.translation":"у • всередину • куди?","study.explanation":"[\"Головна думка: ins — це скорочення in das.\",\"Уживається з іменником середнього роду в знахідному відмінку й позначає напрямок усередину.\",\"Для місця «де?» вживають im = in dem.\"]","study.examples":"[{\"de\":\"Ich gehe ins Kino.\",\"lv\":\"Я йду в кіно.\"},{\"de\":\"Sie geht ins Bett.\",\"lv\":\"Вона лягає спати.\"},{\"de\":\"Wir fahren ins Ausland.\",\"lv\":\"Ми їдемо за кордон.\"},{\"de\":\"Komm ins Haus!\",\"lv\":\"Заходь у будинок!\"},{\"de\":\"Er steckt das Geld in den Geldbeutel.\",\"lv\":\"Він кладе гроші в гаманець.\"},{\"de\":\"Wir gehen ins Museum.\",\"lv\":\"Ми йдемо в музей.\"},{\"de\":\"Sie legt die Blumen ins Wasser.\",\"lv\":\"Вона ставить квіти у воду.\"},{\"de\":\"Fahr bitte ins Zentrum.\",\"lv\":\"Будь ласка, їдь у центр.\"}]","study.comparison":"[{\"word\":\"ins\",\"meaning\":\"усередину; in + das\",\"example\":\"ins Kino – у кіно\"},{\"word\":\"im\",\"meaning\":\"усередині; in + dem\",\"example\":\"im Kino – у кінотеатрі\"},{\"word\":\"in\",\"meaning\":\"у; інший рід\",\"example\":\"in die Stadt – у місто\"},{\"word\":\"aufs\",\"meaning\":\"на; auf + das\",\"example\":\"aufs Dach – на дах\"},{\"word\":\"zum\",\"meaning\":\"до особи або місця\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"Напрямок «куди?» → ins; місце «де?» → im.\"]","study.important":"[\"ins = in + das і зазвичай виражає напрямок.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: in + das direction, location contrast, and several examples were mistranslated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "у • всередину • куди?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "у • всередину • куди?",
    "explanation": [
      "Головна думка: ins — це скорочення in das.",
      "Уживається з іменником середнього роду в знахідному відмінку й позначає напрямок усередину.",
      "Для місця «де?» вживають im = in dem."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Я йду в кіно."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Вона лягає спати."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Ми їдемо за кордон."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Заходь у будинок!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Він кладе гроші в гаманець."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Ми йдемо в музей."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Вона ставить квіти у воду."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Будь ласка, їдь у центр."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "усередину; in + das",
        "example": "ins Kino – у кіно"
      },
      {
        "word": "im",
        "meaning": "усередині; in + dem",
        "example": "im Kino – у кінотеатрі"
      },
      {
        "word": "in",
        "meaning": "у; інший рід",
        "example": "in die Stadt – у місто"
      },
      {
        "word": "aufs",
        "meaning": "на; auf + das",
        "example": "aufs Dach – на дах"
      },
      {
        "word": "zum",
        "meaning": "до особи або місця",
        "example": "zum Arzt – до лікаря"
      }
    ],
    "tip": [
      "Напрямок «куди?» → ins; місце «де?» → im."
    ],
    "important": [
      "ins = in + das і зазвичай виражає напрямок."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ins",
  "lv": "в • в • де?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "в • в • де?",
    "explanation": [
      "ins є абревіатурою прийменника in і артикля das.",
      "Повна форма: in das (де?).",
      "Вживається з іменники будь-якого роду, відповідаючи на питання де? — рух всередину.",
      "Часто з дієслова: gehen, fahren, kommen, legen, stecken.",
      "На практиці ins майже завжди використовується замість повного in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "я переходжу до kino."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "вона йде спати."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "ми їдемо за кордон."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "приходь до хати!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "він кладе гроші в свій гаманець."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "йдемо в музей."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "вона ставить квіти у воду."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "прошу до центру."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "всередину, куди? (Акк.)",
        "example": "ins Kino – до kino"
      },
      {
        "word": "im",
        "meaning": "в, де? (кому?)",
        "example": "im Kino – у кіно"
      },
      {
        "word": "in",
        "meaning": "в / до (з самостійною статтею)",
        "example": "in die Stadt – до міста"
      },
      {
        "word": "aufs",
        "meaning": "на поверхню (акк.)",
        "example": "aufs Dach – на даху"
      },
      {
        "word": "zum",
        "meaning": "до / на (кому?)",
        "example": "zum Arzt – до лікаря"
      }
    ],
    "tip": [
      "Пам'ятай: in + das → ins (де?, де?).",
      "де → ins; де? → im - Це головна відмінність!"
    ],
    "important": [
      "ins = in das, тільки з іменником будь-якого роду де? у флексії.",
      "Відповідає де?, а не де? - рух, а не розташування.",
      "Для чоловіків: in den Wald; жінок: in die Schule.",
      "Не змішуйте: ins Kino gehen (на kino) проти im Kino sein (буде kino)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ins",
          "in das"
        ],
        "purple": [
          "всередину",
          "всередину",
          "де"
        ],
        "green": [
          "де",
          "рух"
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
              "до kino"
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
              "спати"
            ]
          }
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
          "lv": {
            "purple": [
              "гроші"
            ]
          }
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
          "lv": {
            "purple": [
              "до центру"
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
              "всередину"
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
              "де?"
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
              "до",
              "самостійною статтею"
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
              "на поверхню"
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
              "до"
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
          ]
        },
        {
          "red": [
            "im"
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
            "де"
          ]
        },
        {
          "purple": [
            "де"
          ],
          "green": [
            "рух"
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

## Finding 38

**Audit ID:** `LRB102-0038`
**Finding Stable ID:** `g2/a1/uk|jung|idx:304|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `jung|idx:304`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"молодий (про людей)","study.translation":"молодий (про людей)","study.explanation":"[\"Головна думка: jung означає молодий вік — використовується щодо людей і тварин, а не речей.\",\"jung описує вік - протилежність alt (старий).\",\"У латиській мові слово новий має два значення: молодий у віці (jung) і новий/нещодавно створений (neu).\",\"neu, а не jung, використовуються для нещодавно створених або придбаних речей.\",\"jung вживається також у переносному значенні: нове покоління, молода пара, молодь.\",\"Є також іменник die Jugend (юнацтво, молодь).\"]","study.examples":"[{\"de\":\"Sie ist noch jung.\",\"lv\":\"вона ще молода.\"},{\"de\":\"Der Hund ist jung.\",\"lv\":\"собака молода.\"},{\"de\":\"Wir sind noch jung.\",\"lv\":\"ми ще молоді.\"},{\"de\":\"Er sieht sehr jung aus.\",\"lv\":\"він виглядає дуже молодо.\"},{\"de\":\"Das ist ein junges Paar.\",\"lv\":\"це нова пара.\"},{\"de\":\"Die junge Frau lächelt.\",\"lv\":\"молода жінка посміхається.\"},{\"de\":\"Mein Bruder ist jünger als ich.\",\"lv\":\"мій брат молодший за мене.\"}]","study.tip":"[\"jung стосується віку (людей, тварин) - коли говорите про нещодавно створені речі, використовуйте neu.\",\"Контраст: jung ↔ alt (новий ↔ старий).\"]","study.important":"[\"jung описує вік, а не новизну речі.\",\"neu використовується для нових речей (телефон, машина, будинок) замість jung.\",\"Неправильно: Mein Handy ist jung. → Правильно: Mein Handy ist neu.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"молодий","study.translation":"молодий","study.explanation":"[\"Головна думка: jung описує людину або тварину невеликого віку.\",\"Для нової речі зазвичай уживають neu, а не jung.\",\"Порівняльний ступінь: jünger.\"]","study.examples":"[{\"de\":\"Sie ist noch jung.\",\"lv\":\"Вона ще молода.\"},{\"de\":\"Der Hund ist jung.\",\"lv\":\"Пес молодий.\"},{\"de\":\"Wir sind noch jung.\",\"lv\":\"Ми ще молоді.\"},{\"de\":\"Er sieht sehr jung aus.\",\"lv\":\"Він виглядає дуже молодо.\"},{\"de\":\"Das ist ein junges Paar.\",\"lv\":\"Це молода пара.\"},{\"de\":\"Die junge Frau lächelt.\",\"lv\":\"Молода жінка усміхається.\"},{\"de\":\"Mein Bruder ist jünger als ich.\",\"lv\":\"Мій брат молодший за мене.\"}]","study.tip":"[\"Вік людини або тварини → jung; нова річ → neu.\"]","study.important":"[\"jung = молодий; jünger = молодший.\",\"jung і neu не є синонімами.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Young/new contrast and multiple person/animal examples were inaccurate.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "jung",
  "lv": "молодий",
  "level": "A1",
  "study": {
    "id": "a1-jung",
    "layout": "standardStudy",
    "translation": "молодий",
    "explanation": [
      "Головна думка: jung описує людину або тварину невеликого віку.",
      "Для нової речі зазвичай уживають neu, а не jung.",
      "Порівняльний ступінь: jünger."
    ],
    "examples": [
      {
        "de": "Sie ist noch jung.",
        "lv": "Вона ще молода."
      },
      {
        "de": "Der Hund ist jung.",
        "lv": "Пес молодий."
      },
      {
        "de": "Wir sind noch jung.",
        "lv": "Ми ще молоді."
      },
      {
        "de": "Er sieht sehr jung aus.",
        "lv": "Він виглядає дуже молодо."
      },
      {
        "de": "Das ist ein junges Paar.",
        "lv": "Це молода пара."
      },
      {
        "de": "Die junge Frau lächelt.",
        "lv": "Молода жінка усміхається."
      },
      {
        "de": "Mein Bruder ist jünger als ich.",
        "lv": "Мій брат молодший за мене."
      }
    ],
    "tip": [
      "Вік людини або тварини → jung; нова річ → neu."
    ],
    "important": [
      "jung = молодий; jünger = молодший.",
      "jung і neu не є синонімами."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "jung",
  "lv": "молодий (про людей)",
  "level": "A1",
  "study": {
    "id": "a1-jung",
    "layout": "standardStudy",
    "translation": "молодий (про людей)",
    "explanation": [
      "Головна думка: jung означає молодий вік — використовується щодо людей і тварин, а не речей.",
      "jung описує вік - протилежність alt (старий).",
      "У латиській мові слово новий має два значення: молодий у віці (jung) і новий/нещодавно створений (neu).",
      "neu, а не jung, використовуються для нещодавно створених або придбаних речей.",
      "jung вживається також у переносному значенні: нове покоління, молода пара, молодь.",
      "Є також іменник die Jugend (юнацтво, молодь)."
    ],
    "examples": [
      {
        "de": "Sie ist noch jung.",
        "lv": "вона ще молода."
      },
      {
        "de": "Der Hund ist jung.",
        "lv": "собака молода."
      },
      {
        "de": "Wir sind noch jung.",
        "lv": "ми ще молоді."
      },
      {
        "de": "Er sieht sehr jung aus.",
        "lv": "він виглядає дуже молодо."
      },
      {
        "de": "Das ist ein junges Paar.",
        "lv": "це нова пара."
      },
      {
        "de": "Die junge Frau lächelt.",
        "lv": "молода жінка посміхається."
      },
      {
        "de": "Mein Bruder ist jünger als ich.",
        "lv": "мій брат молодший за мене."
      }
    ],
    "tip": [
      "jung стосується віку (людей, тварин) - коли говорите про нещодавно створені речі, використовуйте neu.",
      "Контраст: jung ↔ alt (новий ↔ старий)."
    ],
    "important": [
      "jung описує вік, а не новизну речі.",
      "neu використовується для нових речей (телефон, машина, будинок) замість jung.",
      "Неправильно: Mein Handy ist jung. → Правильно: Mein Handy ist neu."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "jung"
        ],
        "purple": [
          "новий"
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
          "lv": {
            "purple": [
              "молоді"
            ]
          }
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
          "lv": {
            "purple": [
              "молодший"
            ]
          }
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

## Finding 39

**Audit ID:** `LRB102-0039`
**Finding Stable ID:** `g2/a1/uk|kein|idx:308|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `kein|idx:308`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"ніхто • нічого","study.translation":"ніхто • нічого","study.explanation":"[\"Головна думка: kein - це заперечення артикль, яке заперечує іменник - латиська, залежно від контексту, ніхто або ніхто.\",\"kein відмінюється як ein (kein/keine/keinen...) і стоїть перед іменником.\",\"З лічильними іменники (люди), kein часто перекладається як ніхто (kein Mensch = жодна особа).\",\"З необов’язковими або абстрактними іменники, kein часто перекладається як нічого/зовсім (kein Geld = немає грошей/немає грошей).\",\"kein заперечує цілий іменник, а не тільки дієслово (порівняйте nicht).\"]","study.examples":"[{\"de\":\"Ich habe kein Geld.\",\"lv\":\"у мене немає грошей\"},{\"de\":\"Es gibt keine Milch mehr.\",\"lv\":\"молока вже немає зовсім.\"},{\"de\":\"Kein Mensch war da.\",\"lv\":\"там нікого не було.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"я не маю часу\"},{\"de\":\"Das ist kein Problem.\",\"lv\":\"це не проблема.\"},{\"de\":\"Wir haben keine Kinder.\",\"lv\":\"у нас немає дітей.\"}]","study.tip":"[\"kein заперечує іменник (kein + іменник), nicht заперечує дієслово або речення.\",\"kein відмінюється як ein: kein/keine/keinen/keiner.\"]","study.important":"[\"kein + іменник = «немає/немає X», а не «nicht ein X».\",\"Неправильно: Ich habe nicht ein Geld. → Правильно: Ich habe kein Geld.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"жоден • ніякий","study.translation":"жоден • ніякий","study.explanation":"[\"Головна думка: kein заперечує іменник і означає «жоден / ніякий» або передає відсутність.\",\"kein відмінюється за зразком ein: kein, keine, keinen, keinem тощо.\",\"nicht заперечує дію, ознаку або ціле висловлювання, а не неозначений іменник.\"]","study.examples":"[{\"de\":\"Ich habe kein Geld.\",\"lv\":\"У мене немає грошей.\"},{\"de\":\"Es gibt keine Milch mehr.\",\"lv\":\"Молока більше немає.\"},{\"de\":\"Kein Mensch war da.\",\"lv\":\"Там не було жодної людини.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"У мене немає часу.\"},{\"de\":\"Das ist kein Problem.\",\"lv\":\"Це не проблема.\"},{\"de\":\"Wir haben keine Kinder.\",\"lv\":\"У нас немає дітей.\"}]","study.tip":"[\"Іменник із неозначеним артиклем або без артикля → kein; дію чи ознаку → nicht.\"]","study.important":"[\"kein + іменник виражає заперечення або відсутність.\",\"Правильно: Ich habe kein Geld.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: kein was wrongly treated as nobody/nothing; declension and examples needed repair.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kein",
  "lv": "жоден • ніякий",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "жоден • ніякий",
    "explanation": [
      "Головна думка: kein заперечує іменник і означає «жоден / ніякий» або передає відсутність.",
      "kein відмінюється за зразком ein: kein, keine, keinen, keinem тощо.",
      "nicht заперечує дію, ознаку або ціле висловлювання, а не неозначений іменник."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "У мене немає грошей."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Молока більше немає."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Там не було жодної людини."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "У мене немає часу."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Це не проблема."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "У нас немає дітей."
      }
    ],
    "tip": [
      "Іменник із неозначеним артиклем або без артикля → kein; дію чи ознаку → nicht."
    ],
    "important": [
      "kein + іменник виражає заперечення або відсутність.",
      "Правильно: Ich habe kein Geld."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "kein",
  "lv": "ніхто • нічого",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "ніхто • нічого",
    "explanation": [
      "Головна думка: kein - це заперечення артикль, яке заперечує іменник - латиська, залежно від контексту, ніхто або ніхто.",
      "kein відмінюється як ein (kein/keine/keinen...) і стоїть перед іменником.",
      "З лічильними іменники (люди), kein часто перекладається як ніхто (kein Mensch = жодна особа).",
      "З необов’язковими або абстрактними іменники, kein часто перекладається як нічого/зовсім (kein Geld = немає грошей/немає грошей).",
      "kein заперечує цілий іменник, а не тільки дієслово (порівняйте nicht)."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "у мене немає грошей"
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "молока вже немає зовсім."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "там нікого не було."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "я не маю часу"
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "це не проблема."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "у нас немає дітей."
      }
    ],
    "tip": [
      "kein заперечує іменник (kein + іменник), nicht заперечує дієслово або речення.",
      "kein відмінюється як ein: kein/keine/keinen/keiner."
    ],
    "important": [
      "kein + іменник = «немає/немає X», а не «nicht ein X».",
      "Неправильно: Ich habe nicht ein Geld. → Правильно: Ich habe kein Geld."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kein"
        ],
        "purple": [
          "ніхто",
          "немає"
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
              "немає"
            ]
          }
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
          "lv": {
            "purple": [
              "немає"
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

## Finding 40

**Audit ID:** `LRB102-0040`
**Finding Stable ID:** `g2/a1/uk|kennen|idx:310|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `kennen|idx:310`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"знати","study.translation":"знати","study.explanation":"[\"Головна думка: Знати особу, місце або річ з досвіду.\",\"kennen в основному означає: особисте знайомство.\",\"Часто описує: людей, місця.\",\"kennen використовується, коли ви знаєте особу, місце або річ з особистого досвіду.\"]","study.examples":"[{\"de\":\"Ich kenne ihn.\",\"lv\":\"Я знаю його.\"},{\"de\":\"Kennen Sie diese Frau?\",\"lv\":\"ти знаєш цю жінку?\"},{\"de\":\"Wo habt ihr euch kennengelernt?\",\"lv\":\"де ви познайомилися?\"},{\"de\":\"Ich kenne ihn.\",\"lv\":\"я знаю його\"},{\"de\":\"kennen\",\"lv\":\"знати wissen\"}]","study.comparison":"[{\"word\":\"kennen\",\"meaning\":\"знати (особу, місце, річ)\",\"example\":\"Ich kenne ihn. – Я знаю його.\"},{\"word\":\"wissen\",\"meaning\":\"знати (факт, інформація)\",\"example\":\"Ich weiß seinen Namen. – Я знаю його ім'я.\"}]","study.tip":"[\"kennen = знати\",\"Використовується в kennen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"kennen = знати людину/місце.\",\"kennen = знати.\",\"Знати особу, місце або річ з досвіду.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"знати • бути знайомим","study.translation":"знати • бути знайомим","study.explanation":"[\"Головна думка: kennen означає знати людину, місце або річ із досвіду чи бути з ними знайомим.\",\"Для знання факту або інформації вживають wissen.\"]","study.examples":"[{\"de\":\"Ich kenne ihn.\",\"lv\":\"Я його знаю.\"},{\"de\":\"Kennen Sie diese Frau?\",\"lv\":\"Чи знаєте Ви цю жінку?\"},{\"de\":\"Wo habt ihr euch kennengelernt?\",\"lv\":\"Де ви познайомилися?\"},{\"de\":\"Ich kenne ihn.\",\"lv\":\"Я його знаю.\"},{\"de\":\"kennen\",\"lv\":\"знати / бути знайомим; wissen = знати факт\"}]","study.comparison":"[{\"word\":\"kennen\",\"meaning\":\"знати людину, місце або річ\",\"example\":\"Ich kenne ihn. – Я його знаю.\"},{\"word\":\"wissen\",\"meaning\":\"знати факт або інформацію\",\"example\":\"Ich weiß seinen Namen. – Я знаю його ім’я.\"}]","study.tip":"[\"Особисте знайомство → kennen; факт або інформація → wissen.\"]","study.important":"[\"kennen і wissen не є взаємозамінними.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Formal address, kennenlernen example, and kennen/wissen contrast were defective.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kennen",
  "lv": "знати • бути знайомим",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "знати • бути знайомим",
    "explanation": [
      "Головна думка: kennen означає знати людину, місце або річ із досвіду чи бути з ними знайомим.",
      "Для знання факту або інформації вживають wissen."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Я його знаю."
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "Чи знаєте Ви цю жінку?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "Де ви познайомилися?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "Я його знаю."
      },
      {
        "de": "kennen",
        "lv": "знати / бути знайомим; wissen = знати факт"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "знати людину, місце або річ",
        "example": "Ich kenne ihn. – Я його знаю."
      },
      {
        "word": "wissen",
        "meaning": "знати факт або інформацію",
        "example": "Ich weiß seinen Namen. – Я знаю його ім’я."
      }
    ],
    "tip": [
      "Особисте знайомство → kennen; факт або інформація → wissen."
    ],
    "important": [
      "kennen і wissen не є взаємозамінними."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "kennen",
  "lv": "знати",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "знати",
    "explanation": [
      "Головна думка: Знати особу, місце або річ з досвіду.",
      "kennen в основному означає: особисте знайомство.",
      "Часто описує: людей, місця.",
      "kennen використовується, коли ви знаєте особу, місце або річ з особистого досвіду."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Я знаю його."
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "ти знаєш цю жінку?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "де ви познайомилися?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "я знаю його"
      },
      {
        "de": "kennen",
        "lv": "знати wissen"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "знати (особу, місце, річ)",
        "example": "Ich kenne ihn. – Я знаю його."
      },
      {
        "word": "wissen",
        "meaning": "знати (факт, інформація)",
        "example": "Ich weiß seinen Namen. – Я знаю його ім'я."
      }
    ],
    "tip": [
      "kennen = знати",
      "Використовується в kennen, коли контекст відповідає цьому значенню."
    ],
    "important": [
      "kennen = знати людину/місце.",
      "kennen = знати.",
      "Знати особу, місце або річ з досвіду."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kennen",
          "kennen"
        ],
        "purple": [
          "знати"
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
          "lv": {
            "purple": [
              "знати"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "знати"
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

## Finding 41

**Audit ID:** `LRB102-0041`
**Finding Stable ID:** `g2/a1/uk|klein|idx:6|lv, study.translation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** uk
**Card:** `klein|idx:6`
**Field / path:** `lv, study.translation, study.examples`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"маленький","study.translation":"маленький","study.examples":"[{\"de\":\"Das Zimmer ist klein.\",\"lv\":\"Кімната маленька.\"},{\"de\":\"Das Kind ist noch klein.\",\"lv\":\"кімната маленька.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"дитина ще маленька.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"У мене маленька сумка.\"},{\"de\":\"Das Kind ist klein.\",\"lv\":\"дитина маленька.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"маленький","study.translation":"маленький","study.explanation":"[\"Головна думка: klein описує малий розмір, кількість або невеликий вік.\",\"Форма прикметника змінюється перед іменником: ein kleines Zimmer, eine kleine Tasche.\"]","study.examples":"[{\"de\":\"Das Zimmer ist klein.\",\"lv\":\"Кімната маленька.\"},{\"de\":\"Das Kind ist noch klein.\",\"lv\":\"Дитина ще маленька.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"У мене є маленька сумка.\"}]","study.tip":"[\"Перед іменником узгоджуй закінчення klein з родом, відмінком і артиклем.\"]","study.important":"[\"klein = маленький / малий.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Two extra source-inconsistent examples and scrambled pairs had to be removed.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "klein",
  "lv": "маленький",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "маленький",
    "explanation": [
      "Головна думка: klein описує малий розмір, кількість або невеликий вік.",
      "Форма прикметника змінюється перед іменником: ein kleines Zimmer, eine kleine Tasche."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Кімната маленька."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "Дитина ще маленька."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "У мене є маленька сумка."
      }
    ],
    "tip": [
      "Перед іменником узгоджуй закінчення klein з родом, відмінком і артиклем."
    ],
    "important": [
      "klein = маленький / малий."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "klein",
  "lv": "маленький",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "маленький",
    "explanation": [
      "Головна думка: невеликий за розміром або обсягом.",
      "klein в основному означає: малий розмір.",
      "Часто описує: розмір речі/людини."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Кімната маленька."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "кімната маленька."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "дитина ще маленька."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "У мене маленька сумка."
      },
      {
        "de": "Das Kind ist klein.",
        "lv": "дитина маленька."
      }
    ],
    "tip": [
      "klein = малий",
      "Використовується в klein, коли контекст відповідає цьому значенню."
    ],
    "important": [
      "klein = малий розмір.",
      "klein = малий."
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
          "lv": {
            "purple": [
              "маленька"
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
              "маленька"
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
              "маленька"
            ]
          }
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

## Finding 42

**Audit ID:** `LRB102-0042`
**Finding Stable ID:** `g2/a1/uk|können|idx:319|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** uk
**Card:** `können|idx:319`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"вміти • знати","study.translation":"вміти • знати","study.explanation":"[\"Головна думка: können означає вміти або знати, як щось робити.\",\"Коли мова заходить про здібності чи навички, латиш часто каже знати.\",\"Коли мова заходить про можливість, часто кажуть, що можна.\",\"können є модальне дієслово, тому другий дієслово зазвичай стоїть у кінці.\"]","study.examples":"[{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"я можу говорити німецькою\"},{\"de\":\"Kannst du mir helfen?\",\"lv\":\"чи можете ви мені допомогти?\"},{\"de\":\"Wir können heute kommen.\",\"lv\":\"ми можемо прийти сьогодні.\"},{\"de\":\"Er kann gut schwimmen.\",\"lv\":\"він вміє добре плавати.\"}]","study.comparison":"[{\"word\":\"können\",\"meaning\":\"вміти / знати\",\"example\":\"Ich kann schwimmen. = Я вмію плавати.\"},{\"word\":\"dürfen\",\"meaning\":\"бути дозволеним\",\"example\":\"Darf ich gehen? = Чи можу я йти?\"},{\"word\":\"müssen\",\"meaning\":\"потрібно / бути так-\",\"example\":\"Ich muss lernen. = Я повинен вчитися.\"},{\"word\":\"wissen\",\"meaning\":\"знати\",\"example\":\"Ich weiß das. = Я це знаю.\"}]","study.tip":"{\"text\":\"Пам'ятай: навички/здібності → können.\"}","study.important":"[\"können не те саме, що dürfen. können = уміти/знати, dürfen = бути дозволеним.\",\"У реченні з können другий дієслово часто стоїть у кінці: Ich kann schwimmen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"могти • уміти","study.translation":"могти • уміти","study.explanation":"[\"Головна думка: können виражає здатність, уміння або можливість.\",\"Це модальне дієслово, тому друге дієслово в інфінітиві зазвичай стоїть у кінці.\",\"dürfen виражає дозвіл, а wissen — знання факту.\"]","study.examples":"[{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Я вмію говорити німецькою.\"},{\"de\":\"Kannst du mir helfen?\",\"lv\":\"Ти можеш мені допомогти?\"},{\"de\":\"Wir können heute kommen.\",\"lv\":\"Ми можемо прийти сьогодні.\"},{\"de\":\"Er kann gut schwimmen.\",\"lv\":\"Він уміє добре плавати.\"}]","study.comparison":"[{\"word\":\"können\",\"meaning\":\"могти / уміти\",\"example\":\"Ich kann schwimmen. = Я вмію плавати.\"},{\"word\":\"dürfen\",\"meaning\":\"мати дозвіл\",\"example\":\"Darf ich gehen? = Можна мені піти?\"},{\"word\":\"müssen\",\"meaning\":\"мусити / бути змушеним\",\"example\":\"Ich muss lernen. = Я мушу вчитися.\"},{\"word\":\"wissen\",\"meaning\":\"знати факт\",\"example\":\"Ich weiß das. = Я це знаю.\"}]","study.tip":"{\"text\":\"Здатність або можливість → können; дозвіл → dürfen.\"}","study.important":"[\"können не означає «знати факт».\",\"У реченні з können другий інфінітив стоїть у кінці.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: können was wrongly equated with factual knowledge; modality and address were faulty.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "können",
  "lv": "могти • уміти",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "могти • уміти",
    "explanation": [
      "Головна думка: können виражає здатність, уміння або можливість.",
      "Це модальне дієслово, тому друге дієслово в інфінітиві зазвичай стоїть у кінці.",
      "dürfen виражає дозвіл, а wissen — знання факту."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Я вмію говорити німецькою."
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "Ти можеш мені допомогти?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "Ми можемо прийти сьогодні."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "Він уміє добре плавати."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "могти / уміти",
        "example": "Ich kann schwimmen. = Я вмію плавати."
      },
      {
        "word": "dürfen",
        "meaning": "мати дозвіл",
        "example": "Darf ich gehen? = Можна мені піти?"
      },
      {
        "word": "müssen",
        "meaning": "мусити / бути змушеним",
        "example": "Ich muss lernen. = Я мушу вчитися."
      },
      {
        "word": "wissen",
        "meaning": "знати факт",
        "example": "Ich weiß das. = Я це знаю."
      }
    ],
    "tip": {
      "text": "Здатність або можливість → können; дозвіл → dürfen."
    },
    "important": [
      "können не означає «знати факт».",
      "У реченні з können другий інфінітив стоїть у кінці."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "können",
  "lv": "вміти • знати",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "вміти • знати",
    "explanation": [
      "Головна думка: können означає вміти або знати, як щось робити.",
      "Коли мова заходить про здібності чи навички, латиш часто каже знати.",
      "Коли мова заходить про можливість, часто кажуть, що можна.",
      "können є модальне дієслово, тому другий дієслово зазвичай стоїть у кінці."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "я можу говорити німецькою"
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "чи можете ви мені допомогти?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "ми можемо прийти сьогодні."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "він вміє добре плавати."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "вміти / знати",
        "example": "Ich kann schwimmen. = Я вмію плавати."
      },
      {
        "word": "dürfen",
        "meaning": "бути дозволеним",
        "example": "Darf ich gehen? = Чи можу я йти?"
      },
      {
        "word": "müssen",
        "meaning": "потрібно / бути так-",
        "example": "Ich muss lernen. = Я повинен вчитися."
      },
      {
        "word": "wissen",
        "meaning": "знати",
        "example": "Ich weiß das. = Я це знаю."
      }
    ],
    "tip": {
      "text": "Пам'ятай: навички/здібності → können."
    },
    "important": [
      "können не те саме, що dürfen. können = уміти/знати, dürfen = бути дозволеним.",
      "У реченні з können другий дієслово часто стоїть у кінці: Ich kann schwimmen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "können"
        ],
        "purple": [
          "вміти"
        ],
        "green": [
          "можливість"
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
          "lv": {
            "purple": [
              "ми можемо"
            ]
          }
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
          "meaning": {
            "purple": [
              "вміти"
            ]
          },
          "example": {
            "blue": [
              "kann"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dürfen"
            ]
          },
          "meaning": {
            "purple": [
              "бути дозволеним"
            ]
          },
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
              "muss"
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
              "знати"
            ]
          },
          "example": {
            "green": [
              "weiß"
            ]
          }
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
          ],
          "purple": [
            "бути дозволеним"
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

## Finding 43

**Audit ID:** `LRB102-0043`
**Finding Stable ID:** `g2/a1/uk|kosten|idx:320|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** uk
**Card:** `kosten|idx:320`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"платити","study.translation":"платити","study.explanation":"[\"Головна думка: kosten означає заплатити так і так — говорить про ціну речі.\",\"Це слово використовується, коли запитують або кажуть, скільки щось коштує, а не коли людина здійснює платіж.\",\"Питання про ціну німецькою мовою часто починається з Was kostet...?\",\"Латиське слово платити є правильним у цьому контексті: Das kostet 5 Euro. = Коштує 5 євро.\",\"Якщо людина дає гроші за товар чи послугу, німецька мова використовує bezahlen або zahlen.\"]","study.examples":"[{\"de\":\"Das kostet 5 Euro.\",\"lv\":\"коштує 5 євро.\"},{\"de\":\"Was kostet das?\",\"lv\":\"скільки це коштує\"},{\"de\":\"Wie viel kostet der Pullover?\",\"lv\":\"скільки коштує светр?\"},{\"de\":\"Das Essen kostet nicht viel.\",\"lv\":\"їжа коштує недорого.\"},{\"de\":\"Ich bezahle die Rechnung.\",\"lv\":\"я оплачую рахунок\"},{\"de\":\"Kann ich bar bezahlen?\",\"lv\":\"чи можу я заплатити готівкою\"},{\"de\":\"Er zahlt mit Karte.\",\"lv\":\"він платить карткою.\"},{\"de\":\"Ich zahle gleich.\",\"lv\":\"зараз заплачу\"}]","study.comparison":"[{\"word\":\"kosten\",\"meaning\":\"заплатити (ціна) • скільки\",\"example\":\"Das kostet 5 Euro. = Це коштує 5 євро.\"},{\"word\":\"bezahlen\",\"meaning\":\"платити • платити (грошима)\",\"example\":\"Ich bezahle die Rechnung. = Я оплачую рахунок.\"},{\"word\":\"zahlen\",\"meaning\":\"платити • платити\",\"example\":\"Kann ich bar zahlen? = Чи можу я оплатити готівкою?\"},{\"word\":\"Was kostet...?\",\"meaning\":\"скільки це коштує...?\",\"example\":\"Was kostet das Buch? = Скільки коштує книга?\"}]","study.tip":"[\"Пам'ятай: питання ціни → kosten (Was kostet das?).\",\"Пам'ятай: оплата → bezahlen / zahlen (Ich bezahle die Rechnung.).\"]","study.important":"[\"kosten і bezahlen не є синонімами: kosten = скільки це коштує; bezahlen = платити гроші.\",\"У латиській мові «оплата» часто використовується в обох випадках, але в німецькій мові вибір потрібно робити відповідно до ситуації.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"коштувати","study.translation":"коштувати","study.explanation":"[\"Головна думка: kosten називає ціну речі або послуги.\",\"Коли людина здійснює оплату, вживають bezahlen або zahlen.\",\"Питання про ціну часто починається з Was kostet...? або Wie viel kostet...?\"]","study.examples":"[{\"de\":\"Das kostet 5 Euro.\",\"lv\":\"Це коштує 5 євро.\"},{\"de\":\"Was kostet das?\",\"lv\":\"Скільки це коштує?\"},{\"de\":\"Wie viel kostet der Pullover?\",\"lv\":\"Скільки коштує светр?\"},{\"de\":\"Das Essen kostet nicht viel.\",\"lv\":\"Їжа коштує недорого.\"},{\"de\":\"Ich bezahle die Rechnung.\",\"lv\":\"Я оплачую рахунок.\"},{\"de\":\"Kann ich bar bezahlen?\",\"lv\":\"Чи можу я заплатити готівкою?\"},{\"de\":\"Er zahlt mit Karte.\",\"lv\":\"Він платить карткою.\"},{\"de\":\"Ich zahle gleich.\",\"lv\":\"Я зараз заплачу.\"}]","study.comparison":"[{\"word\":\"kosten\",\"meaning\":\"коштувати; мати ціну\",\"example\":\"Das kostet 5 Euro. = Це коштує 5 євро.\"},{\"word\":\"bezahlen\",\"meaning\":\"оплачувати щось\",\"example\":\"Ich bezahle die Rechnung. = Я оплачую рахунок.\"},{\"word\":\"zahlen\",\"meaning\":\"платити\",\"example\":\"Kann ich bar zahlen? = Чи можу я заплатити готівкою?\"},{\"word\":\"Was kostet...?\",\"meaning\":\"скільки коштує...?\",\"example\":\"Was kostet das Buch? = Скільки коштує книжка?\"}]","study.tip":"[\"Ціна речі → kosten.\",\"Дія платника → bezahlen / zahlen.\"]","study.important":"[\"kosten і bezahlen не є синонімами: річ коштує, а людина платить.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{},{}],"important":[{}]}}
**Note:** OWNER approved override: kosten was mistranslated as pay; price/payer distinction and examples were wrong.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kosten",
  "lv": "коштувати",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "коштувати",
    "explanation": [
      "Головна думка: kosten називає ціну речі або послуги.",
      "Коли людина здійснює оплату, вживають bezahlen або zahlen.",
      "Питання про ціну часто починається з Was kostet...? або Wie viel kostet...?"
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Це коштує 5 євро."
      },
      {
        "de": "Was kostet das?",
        "lv": "Скільки це коштує?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Скільки коштує светр?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Їжа коштує недорого."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Я оплачую рахунок."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Чи можу я заплатити готівкою?"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Він платить карткою."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Я зараз заплачу."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "коштувати; мати ціну",
        "example": "Das kostet 5 Euro. = Це коштує 5 євро."
      },
      {
        "word": "bezahlen",
        "meaning": "оплачувати щось",
        "example": "Ich bezahle die Rechnung. = Я оплачую рахунок."
      },
      {
        "word": "zahlen",
        "meaning": "платити",
        "example": "Kann ich bar zahlen? = Чи можу я заплатити готівкою?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "скільки коштує...?",
        "example": "Was kostet das Buch? = Скільки коштує книжка?"
      }
    ],
    "tip": [
      "Ціна речі → kosten.",
      "Дія платника → bezahlen / zahlen."
    ],
    "important": [
      "kosten і bezahlen не є синонімами: річ коштує, а людина платить."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "kosten",
  "lv": "платити",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "платити",
    "explanation": [
      "Головна думка: kosten означає заплатити так і так — говорить про ціну речі.",
      "Це слово використовується, коли запитують або кажуть, скільки щось коштує, а не коли людина здійснює платіж.",
      "Питання про ціну німецькою мовою часто починається з Was kostet...?",
      "Латиське слово платити є правильним у цьому контексті: Das kostet 5 Euro. = Коштує 5 євро.",
      "Якщо людина дає гроші за товар чи послугу, німецька мова використовує bezahlen або zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "коштує 5 євро."
      },
      {
        "de": "Was kostet das?",
        "lv": "скільки це коштує"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "скільки коштує светр?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "їжа коштує недорого."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "я оплачую рахунок"
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "чи можу я заплатити готівкою"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "він платить карткою."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "зараз заплачу"
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "заплатити (ціна) • скільки",
        "example": "Das kostet 5 Euro. = Це коштує 5 євро."
      },
      {
        "word": "bezahlen",
        "meaning": "платити • платити (грошима)",
        "example": "Ich bezahle die Rechnung. = Я оплачую рахунок."
      },
      {
        "word": "zahlen",
        "meaning": "платити • платити",
        "example": "Kann ich bar zahlen? = Чи можу я оплатити готівкою?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "скільки це коштує...?",
        "example": "Was kostet das Buch? = Скільки коштує книга?"
      }
    ],
    "tip": [
      "Пам'ятай: питання ціни → kosten (Was kostet das?).",
      "Пам'ятай: оплата → bezahlen / zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "kosten і bezahlen не є синонімами: kosten = скільки це коштує; bezahlen = платити гроші.",
      "У латиській мові «оплата» часто використовується в обох випадках, але в німецькій мові вибір потрібно робити відповідно до ситуації."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kosten"
        ],
        "purple": [
          "платити",
          "скільки щось коштує"
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
          "lv": {
            "purple": [
              "платити"
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
              "платить"
            ]
          }
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
              "платити",
              "ціна"
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
          "meaning": {
            "purple": [
              "платити",
              "платити"
            ]
          },
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
          "meaning": {
            "purple": [
              "платити",
              "платити"
            ]
          },
          "example": {
            "yellow": [
              "zahlen"
            ],
            "purple": [
              "платити"
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
              "скільки це коштує"
            ]
          },
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
            "kosten",
            "Was kostet"
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
          ],
          "purple": [
            "скільки це коштує",
            "платити"
          ]
        },
        {
          "purple": [
            "ситуації"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 44

**Audit ID:** `LRB102-0044`
**Finding Stable ID:** `g2/a1/uk|Laden|idx:349|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** uk
**Card:** `Laden|idx:349`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"магазин","study.translation":"магазин","study.explanation":"[\"Головна думка: der Laden з великої літери та артиклем der - це іменник - маленький магазин.\",\"laden у нижньому регістрі — це дієслово — завантажити або зарядити.\",\"der Laden у повсякденних термінах часто означає невеликий магазин (im Laden einkaufen = робити покупки в магазині).\",\"В множині: die Läden.\"]","study.examples":"[{\"de\":\"Ich gehe in den Laden.\",\"lv\":\"я йду в магазин\"},{\"de\":\"Der Laden ist geschlossen.\",\"lv\":\"магазин закритий.\"},{\"de\":\"Es gibt viele Läden hier.\",\"lv\":\"тут багато магазинів.\"},{\"de\":\"Ich muss mein Handy laden.\",\"lv\":\"мені потрібно зарядити телефон.\"}]","study.tip":"[\"der Laden з великої літери — іменник (магазин).\",\"laden нижній регістр — дієслово (завантаження/перезарядка).\"]","study.important":"[\"der Laden = зберігати (іменник).\",\"laden = навантаження/заряд (дієслово).\",\"В множині: die Läden.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"магазин","study.translation":"магазин","study.explanation":"[\"Головна думка: der Laden з великої літери — іменник «магазин».\",\"laden з малої літери — дієслово «завантажувати» або «заряджати».\",\"Множина іменника: die Läden.\"]","study.examples":"[{\"de\":\"Ich gehe in den Laden.\",\"lv\":\"Я йду в магазин.\"},{\"de\":\"Der Laden ist geschlossen.\",\"lv\":\"Магазин зачинений.\"},{\"de\":\"Es gibt viele Läden hier.\",\"lv\":\"Тут багато магазинів.\"},{\"de\":\"Ich muss mein Handy laden.\",\"lv\":\"Мені потрібно зарядити телефон.\"}]","study.tip":"[\"der Laden — іменник; laden — дієслово.\"]","study.important":"[\"der Laden = магазин.\",\"laden = завантажувати / заряджати.\",\"Множина: die Läden.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: Noun/verb contrast contained false meanings and unnatural translations.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Laden",
  "de_article": "der",
  "de_plural": "die Läden",
  "lv": "магазин",
  "level": "A1",
  "study": {
    "id": "a1-laden-study",
    "layout": "standardStudy",
    "translation": "магазин",
    "explanation": [
      "Головна думка: der Laden з великої літери — іменник «магазин».",
      "laden з малої літери — дієслово «завантажувати» або «заряджати».",
      "Множина іменника: die Läden."
    ],
    "examples": [
      {
        "de": "Ich gehe in den Laden.",
        "lv": "Я йду в магазин."
      },
      {
        "de": "Der Laden ist geschlossen.",
        "lv": "Магазин зачинений."
      },
      {
        "de": "Es gibt viele Läden hier.",
        "lv": "Тут багато магазинів."
      },
      {
        "de": "Ich muss mein Handy laden.",
        "lv": "Мені потрібно зарядити телефон."
      }
    ],
    "tip": [
      "der Laden — іменник; laden — дієслово."
    ],
    "important": [
      "der Laden = магазин.",
      "laden = завантажувати / заряджати.",
      "Множина: die Läden."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Laden",
  "de_article": "der",
  "de_plural": "die Läden",
  "lv": "магазин",
  "level": "A1",
  "study": {
    "id": "a1-laden-study",
    "layout": "standardStudy",
    "translation": "магазин",
    "explanation": [
      "Головна думка: der Laden з великої літери та артиклем der - це іменник - маленький магазин.",
      "laden у нижньому регістрі — це дієслово — завантажити або зарядити.",
      "der Laden у повсякденних термінах часто означає невеликий магазин (im Laden einkaufen = робити покупки в магазині).",
      "В множині: die Läden."
    ],
    "examples": [
      {
        "de": "Ich gehe in den Laden.",
        "lv": "я йду в магазин"
      },
      {
        "de": "Der Laden ist geschlossen.",
        "lv": "магазин закритий."
      },
      {
        "de": "Es gibt viele Läden hier.",
        "lv": "тут багато магазинів."
      },
      {
        "de": "Ich muss mein Handy laden.",
        "lv": "мені потрібно зарядити телефон."
      }
    ],
    "tip": [
      "der Laden з великої літери — іменник (магазин).",
      "laden нижній регістр — дієслово (завантаження/перезарядка)."
    ],
    "important": [
      "der Laden = зберігати (іменник).",
      "laden = навантаження/заряд (дієслово).",
      "В множині: die Läden."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Laden"
        ],
        "purple": [
          "магазин"
        ],
        "green": [
          "laden"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Laden"
            ]
          },
          "lv": {
            "purple": [
              "магазин"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Laden"
            ]
          },
          "lv": {
            "purple": [
              "магазин"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Läden"
            ]
          },
          "lv": {
            "purple": [
              "магазин"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laden"
            ]
          },
          "lv": {
            "purple": [
              "заряд"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "der Laden"
          ]
        },
        {
          "green": [
            "laden"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "der Laden"
          ]
        },
        {
          "green": [
            "laden"
          ]
        },
        {
          "blue": [
            "die Läden"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB102-0045`
**Finding Stable ID:** `g2/a1/uk|Land|idx:351|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** uk
**Card:** `Land|idx:351`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"країна • земля","study.translation":"країна • земля","study.explanation":"[\"Головна думка: das Land найчастіше означають країну або землю за містом.\",\"Якщо йдеться про Німеччину, Латвію чи іншу територію з кордонами, то перекладається як країна.\",\"Говорячи про сільську місцевість або землю на відміну від міста, перекладіть як сільська місцевість або земля.\",\"Контекст визначає, чи ми маємо на увазі країну, сільську місцевість чи землю.\"]","study.examples":"[{\"de\":\"Deutschland ist ein schönes Land.\",\"lv\":\"Німеччина прекрасна країна.\"},{\"de\":\"Ich komme aus einem kleinen Land.\",\"lv\":\"я з маленької країни.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"ми їдемо в сільську місцевість.\"},{\"de\":\"Auf dem Land ist es ruhig.\",\"lv\":\"в селі тихо.\"}]","study.comparison":"[{\"word\":\"das Land\",\"meaning\":\"країна / земля / сільська місцевість\",\"example\":\"Deutschland ist ein Land.\"},{\"word\":\"die Stadt\",\"meaning\":\"місто\",\"example\":\"Ich wohne in der Stadt.\"},{\"word\":\"das Dorf\",\"meaning\":\"село\",\"example\":\"Er lebt in einem Dorf.\"},{\"word\":\"die Erde\",\"meaning\":\"земля / планета\",\"example\":\"Die Erde ist rund.\"}]","study.tip":"{\"text\":\"Пам'ятай: країна → das Land; місто → die Stadt.\"}","study.important":"[\"aufs Land означає «до села», а не «до села».\",\"das Land не те саме, що die Stadt.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"країна • сільська місцевість • земля","study.translation":"країна • сільська місцевість • земля","study.explanation":"[\"Головна думка: das Land залежно від контексту означає країну, сільську місцевість або землю.\",\"Для території з кордонами це «країна»; у протиставленні місту — «сільська місцевість».\",\"die Erde може означати землю як ґрунт або планету.\"]","study.examples":"[{\"de\":\"Deutschland ist ein schönes Land.\",\"lv\":\"Німеччина — прекрасна країна.\"},{\"de\":\"Ich komme aus einem kleinen Land.\",\"lv\":\"Я з маленької країни.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"Ми їдемо за місто.\"},{\"de\":\"Auf dem Land ist es ruhig.\",\"lv\":\"У сільській місцевості тихо.\"}]","study.comparison":"[{\"word\":\"das Land\",\"meaning\":\"країна / сільська місцевість / земля\",\"example\":\"Deutschland ist ein Land. – Німеччина — країна.\"},{\"word\":\"die Stadt\",\"meaning\":\"місто\",\"example\":\"Ich wohne in der Stadt. – Я живу в місті.\"},{\"word\":\"das Dorf\",\"meaning\":\"село\",\"example\":\"Er lebt in einem Dorf. – Він живе в селі.\"},{\"word\":\"die Erde\",\"meaning\":\"земля / планета Земля\",\"example\":\"Die Erde ist rund. – Земля кругла.\"}]","study.tip":"{\"text\":\"Країна або місцевість поза містом → das Land; місто → die Stadt.\"}","study.important":"[\"aufs Land = за місто / у сільську місцевість.\",\"das Land і die Stadt — протилежні поняття в цьому контексті.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{},{}]}}
**Note:** OWNER approved override: Country/countryside/earth senses and aufs Land guidance were contradictory.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "країна • сільська місцевість • земля",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "країна • сільська місцевість • земля",
    "explanation": [
      "Головна думка: das Land залежно від контексту означає країну, сільську місцевість або землю.",
      "Для території з кордонами це «країна»; у протиставленні місту — «сільська місцевість».",
      "die Erde може означати землю як ґрунт або планету."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Німеччина — прекрасна країна."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Я з маленької країни."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Ми їдемо за місто."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "У сільській місцевості тихо."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "країна / сільська місцевість / земля",
        "example": "Deutschland ist ein Land. – Німеччина — країна."
      },
      {
        "word": "die Stadt",
        "meaning": "місто",
        "example": "Ich wohne in der Stadt. – Я живу в місті."
      },
      {
        "word": "das Dorf",
        "meaning": "село",
        "example": "Er lebt in einem Dorf. – Він живе в селі."
      },
      {
        "word": "die Erde",
        "meaning": "земля / планета Земля",
        "example": "Die Erde ist rund. – Земля кругла."
      }
    ],
    "tip": {
      "text": "Країна або місцевість поза містом → das Land; місто → die Stadt."
    },
    "important": [
      "aufs Land = за місто / у сільську місцевість.",
      "das Land і die Stadt — протилежні поняття в цьому контексті."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "країна • земля",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "країна • земля",
    "explanation": [
      "Головна думка: das Land найчастіше означають країну або землю за містом.",
      "Якщо йдеться про Німеччину, Латвію чи іншу територію з кордонами, то перекладається як країна.",
      "Говорячи про сільську місцевість або землю на відміну від міста, перекладіть як сільська місцевість або земля.",
      "Контекст визначає, чи ми маємо на увазі країну, сільську місцевість чи землю."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Німеччина прекрасна країна."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "я з маленької країни."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "ми їдемо в сільську місцевість."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "в селі тихо."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "країна / земля / сільська місцевість",
        "example": "Deutschland ist ein Land."
      },
      {
        "word": "die Stadt",
        "meaning": "місто",
        "example": "Ich wohne in der Stadt."
      },
      {
        "word": "das Dorf",
        "meaning": "село",
        "example": "Er lebt in einem Dorf."
      },
      {
        "word": "die Erde",
        "meaning": "земля / планета",
        "example": "Die Erde ist rund."
      }
    ],
    "tip": {
      "text": "Пам'ятай: країна → das Land; місто → die Stadt."
    },
    "important": [
      "aufs Land означає «до села», а не «до села».",
      "das Land не те саме, що die Stadt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Land",
          "Land"
        ],
        "purple": [
          "країна",
          "земля",
          "країна"
        ],
        "green": [
          "Німеччину",
          "Латвію",
          "міст"
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
              "країна"
            ],
            "green": [
              "Німеччина"
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
              "країни"
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
              "сільську місцевість"
            ]
          }
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
          "meaning": {
            "purple": [
              "країна",
              "земля"
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
              "місто"
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
              "село"
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
              "земля",
              "планета"
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
            "країна"
          ],
          "yellow": [
            "die Stadt",
            "місто"
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

## Finding 46

**Audit ID:** `LRB102-0046`
**Finding Stable ID:** `g2/a1/uk|lang|idx:352|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** uk
**Card:** `lang|idx:352`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"довгий • довгий","study.translation":"довгий • довгий","study.explanation":"[\"Головна думка: lang просторово означає довгий, часовий означає довгий.\",\"Що стосується розміру чи відстані, lang = довгий (ein langer Tisch = довгий стіл).\",\"Щодо тривалості часу, lang = довгий (ein langer Tag = довгий день).\",\"У фразі den ganzen Tag lang це означає весь день (за довжиною).\",\"В українській мові «довгий» (простір) і «тривалий» (час) — це різні слова, але німецьке lang охоплює обидва значення.\"]","study.examples":"[{\"de\":\"Der Tisch ist sehr lang.\",\"lv\":\"стіл дуже довгий.\"},{\"de\":\"Der Film war sehr lang.\",\"lv\":\"фільм був дуже довгий.\"},{\"de\":\"Wie lange dauert es?\",\"lv\":\"як довго це триває\"},{\"de\":\"Sie hat lange Haare.\",\"lv\":\"у неї довге волосся.\"},{\"de\":\"Ich warte schon lange.\",\"lv\":\"Давно чекаю.\"},{\"de\":\"Den ganzen Tag lang.\",\"lv\":\"весь день (за довжиною).\"}]","study.tip":"[\"За розміром або відстанню (волосся, дорога, стіл) → довгий.\",\"Про час (день, очікування, кіно) → довго.\"]","study.important":"[\"lang = довгий (розмір) АБО довгий (час) - залежно від контексту.\",\"wie lange = як довго (питання часу, а не розміру).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"довгий • тривалий","study.translation":"довгий • тривалий","study.explanation":"[\"Головна думка: lang описує велику довжину в просторі або тривалість у часі.\",\"У просторовому значенні це «довгий», у часовому — «довгий / тривалий» або прислівник «довго».\",\"wie lange питає про тривалість.\"]","study.examples":"[{\"de\":\"Der Tisch ist sehr lang.\",\"lv\":\"Стіл дуже довгий.\"},{\"de\":\"Der Film war sehr lang.\",\"lv\":\"Фільм був дуже тривалим.\"},{\"de\":\"Wie lange dauert es?\",\"lv\":\"Як довго це триває?\"},{\"de\":\"Sie hat lange Haare.\",\"lv\":\"У неї довге волосся.\"},{\"de\":\"Ich warte schon lange.\",\"lv\":\"Я вже давно чекаю.\"},{\"de\":\"Den ganzen Tag lang.\",\"lv\":\"Увесь день.\"}]","study.tip":"[\"Розмір або відстань → довгий; час → тривалий / довго.\"]","study.important":"[\"lang може описувати і просторову довжину, і тривалість.\",\"wie lange = як довго.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Spatial length and temporal duration were duplicated and mistranslated.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lang",
  "lv": "довгий • тривалий",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "довгий • тривалий",
    "explanation": [
      "Головна думка: lang описує велику довжину в просторі або тривалість у часі.",
      "У просторовому значенні це «довгий», у часовому — «довгий / тривалий» або прислівник «довго».",
      "wie lange питає про тривалість."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "Стіл дуже довгий."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Фільм був дуже тривалим."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Як довго це триває?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "У неї довге волосся."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Я вже давно чекаю."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Увесь день."
      }
    ],
    "tip": [
      "Розмір або відстань → довгий; час → тривалий / довго."
    ],
    "important": [
      "lang може описувати і просторову довжину, і тривалість.",
      "wie lange = як довго."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "lang",
  "lv": "довгий • довгий",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "довгий • довгий",
    "explanation": [
      "Головна думка: lang просторово означає довгий, часовий означає довгий.",
      "Що стосується розміру чи відстані, lang = довгий (ein langer Tisch = довгий стіл).",
      "Щодо тривалості часу, lang = довгий (ein langer Tag = довгий день).",
      "У фразі den ganzen Tag lang це означає весь день (за довжиною).",
      "В українській мові «довгий» (простір) і «тривалий» (час) — це різні слова, але німецьке lang охоплює обидва значення."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "стіл дуже довгий."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "фільм був дуже довгий."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "як довго це триває"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "у неї довге волосся."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Давно чекаю."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "весь день (за довжиною)."
      }
    ],
    "tip": [
      "За розміром або відстанню (волосся, дорога, стіл) → довгий.",
      "Про час (день, очікування, кіно) → довго."
    ],
    "important": [
      "lang = довгий (розмір) АБО довгий (час) - залежно від контексту.",
      "wie lange = як довго (питання часу, а не розміру)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lang"
        ],
        "purple": [
          "довгий",
          "довгий"
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
              "довгий"
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
              "довгий"
            ]
          }
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
          "lv": {
            "purple": [
              "довге"
            ]
          }
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
        {
          "blue": [
            "довго"
          ]
        },
        {
          "green": [
            "довго"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "довгий",
            "довгий"
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

## Finding 47

**Audit ID:** `LRB102-0047`
**Finding Stable ID:** `g2/a1/uk|lassen|idx:356|study.explanation; study.examples; study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** uk
**Card:** `lassen|idx:356`
**Field / path:** `study.explanation; study.examples; study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Головна думка: lassen означає залишити щось або дозволити чомусь статися.\",\"Якщо щось залишається на місці, lassen перекладається як відпустка.\",\"Якщо ви даєте комусь дозвіл, lassen перекладається як дозволити.\",\"Дуже частою формою в розмовах є Lass mich! = Залиште мене! або дозвольте мені!\"]","study.examples":"[{\"de\":\"Ich lasse die Tasche hier.\",\"lv\":\"я залишив сумку тут\"},{\"de\":\"Lass das bitte auf dem Tisch.\",\"lv\":\"залиште це на столі, будь ласка.\"},{\"de\":\"Meine Eltern lassen mich gehen.\",\"lv\":\"мої батьки відпустили мене.\"},{\"de\":\"Lass mich in Ruhe!\",\"lv\":\"залиши мене в спокої!\"}]","study.important":"[\"lassen - це не просто «залишити». Це також часто означає «дозволити».\",\"Lass mich in Ruhe! є дуже поширена фраза: \\\"Залиште мене!\\\"\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"залишати • дозволяти","study.translation":"залишати • дозволяти","study.explanation":"[\"Головна думка: lassen означає залишати щось на місці або дозволяти комусь щось зробити.\",\"У конструкції lassen + Infinitiv воно часто передає дозвіл або спонукання.\",\"Lass mich in Ruhe! — поширена фраза «Залиш мене в спокої!».\"]","study.examples":"[{\"de\":\"Ich lasse die Tasche hier.\",\"lv\":\"Я залишаю сумку тут.\"},{\"de\":\"Lass das bitte auf dem Tisch.\",\"lv\":\"Залиш це, будь ласка, на столі.\"},{\"de\":\"Meine Eltern lassen mich gehen.\",\"lv\":\"Батьки дозволяють мені піти.\"},{\"de\":\"Lass mich in Ruhe!\",\"lv\":\"Залиш мене в спокої!\"}]","study.comparison":"[{\"word\":\"lassen\",\"meaning\":\"залишати / дозволяти\",\"example\":\"Ich lasse das hier. – Я залишаю це тут.\"},{\"word\":\"bleiben\",\"meaning\":\"залишатися\",\"example\":\"Ich bleibe hier. – Я залишаюся тут.\"},{\"word\":\"erlauben\",\"meaning\":\"дозволяти\",\"example\":\"Sie erlaubt mir das. – Вона дозволяє мені це.\"},{\"word\":\"geben\",\"meaning\":\"давати\",\"example\":\"Gib mir das Buch. – Дай мені книжку.\"}]","study.tip":"{\"text\":\"Предмет залишається → lassen; хтось отримує дозвіл → lassen + Infinitiv.\"}","study.important":"[\"lassen має значення «залишати» і «дозволяти».\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: lassen was mistranslated as vacation and present-tense examples shifted tense.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lassen",
  "lv": "залишати • дозволяти",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "залишати • дозволяти",
    "explanation": [
      "Головна думка: lassen означає залишати щось на місці або дозволяти комусь щось зробити.",
      "У конструкції lassen + Infinitiv воно часто передає дозвіл або спонукання.",
      "Lass mich in Ruhe! — поширена фраза «Залиш мене в спокої!»."
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Я залишаю сумку тут."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Залиш це, будь ласка, на столі."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Батьки дозволяють мені піти."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Залиш мене в спокої!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "залишати / дозволяти",
        "example": "Ich lasse das hier. – Я залишаю це тут."
      },
      {
        "word": "bleiben",
        "meaning": "залишатися",
        "example": "Ich bleibe hier. – Я залишаюся тут."
      },
      {
        "word": "erlauben",
        "meaning": "дозволяти",
        "example": "Sie erlaubt mir das. – Вона дозволяє мені це."
      },
      {
        "word": "geben",
        "meaning": "давати",
        "example": "Gib mir das Buch. – Дай мені книжку."
      }
    ],
    "tip": {
      "text": "Предмет залишається → lassen; хтось отримує дозвіл → lassen + Infinitiv."
    },
    "important": [
      "lassen має значення «залишати» і «дозволяти»."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "lassen",
  "lv": "залишити • нехай",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "залишити • нехай",
    "explanation": [
      "Головна думка: lassen означає залишити щось або дозволити чомусь статися.",
      "Якщо щось залишається на місці, lassen перекладається як відпустка.",
      "Якщо ви даєте комусь дозвіл, lassen перекладається як дозволити.",
      "Дуже частою формою в розмовах є Lass mich! = Залиште мене! або дозвольте мені!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "я залишив сумку тут"
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "залиште це на столі, будь ласка."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "мої батьки відпустили мене."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "залиши мене в спокої!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "залишити / дозволити",
        "example": "Ich lasse das hier."
      },
      {
        "word": "bleiben",
        "meaning": "залишитися",
        "example": "Ich bleibe hier."
      },
      {
        "word": "erlauben",
        "meaning": "дозволяють",
        "example": "Sie erlaubt mir das."
      },
      {
        "word": "geben",
        "meaning": "дарувати",
        "example": "Gib mir das Buch."
      }
    ],
    "tip": {
      "text": "Пам'ятай: щось залишається → lassen; комусь дозволено → lassen."
    },
    "important": [
      "lassen - це не просто «залишити». Це також часто означає «дозволити».",
      "Lass mich in Ruhe! є дуже поширена фраза: \"Залиште мене!\""
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lassen",
          "Lass mich"
        ],
        "green": [
          "дозвіл"
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
              "залишитися"
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
              "дозволяють"
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
              "дарувати"
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
            "залишається"
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
            "Lass mich in Ruhe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB102-0048`
**Finding Stable ID:** `g2/a1/uk|laufen|idx:357|translation; study.explanation; study.comparison|MISTRANSLATION|gpt-5.6-luna`
**Lang:** uk
**Card:** `laufen|idx:357`
**Field / path:** `translation; study.explanation; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"translation":"бігти • оперувати","study.explanation":"[\"Головна думка: laufen означає бігти, але для пристроїв це може означати бігти.\",\"Для людини чи тварини laufen часто означає бігати або ходити у швидкому темпі.\",\"Для фільму, машини чи програми laufen означає, що це працює або відбувається.\",\"Для руху ніг на рівні A1 найчастіше порівнюють gehen і laufen.\"]","study.comparison":"[{\"word\":\"laufen\",\"meaning\":\"запускати / працювати\",\"example\":\"Er läuft schnell.\"},{\"word\":\"gehen\",\"meaning\":\"йти пішки\",\"example\":\"Ich gehe nach Hause.\"},{\"word\":\"fahren\",\"meaning\":\"їздити на транспорті\",\"example\":\"Ich fahre mit dem Bus.\"},{\"word\":\"funktionieren\",\"meaning\":\"оперувати\",\"example\":\"Das funktioniert gut.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"бігти • працювати","study.translation":"бігти • працювати","study.explanation":"[\"Головна думка: laufen означає бігти або швидко пересуватися пішки; про пристрій, фільм чи програму — працювати або йти.\",\"gehen — іти пішки, fahren — їхати транспортом, funktionieren — функціонувати.\"]","study.examples":"[{\"de\":\"Er läuft sehr schnell.\",\"lv\":\"Він біжить дуже швидко.\"},{\"de\":\"Die Kinder laufen im Park.\",\"lv\":\"Діти бігають у парку.\"},{\"de\":\"Der Film läuft schon.\",\"lv\":\"Фільм уже йде.\"},{\"de\":\"Die Maschine läuft gut.\",\"lv\":\"Машина добре працює.\"}]","study.comparison":"[{\"word\":\"laufen\",\"meaning\":\"бігти / працювати\",\"example\":\"Er läuft schnell. – Він біжить швидко.\"},{\"word\":\"gehen\",\"meaning\":\"іти пішки\",\"example\":\"Ich gehe nach Hause. – Я йду додому.\"},{\"word\":\"fahren\",\"meaning\":\"їхати транспортом\",\"example\":\"Ich fahre mit dem Bus. – Я їду автобусом.\"},{\"word\":\"funktionieren\",\"meaning\":\"працювати / функціонувати\",\"example\":\"Das funktioniert gut. – Це добре працює.\"}]","study.tip":"{\"text\":\"Людина або тварина → бігти; пристрій, фільм чи програма → працювати / йти.\"}","study.important":"[\"laufen має рухове й переносне значення; контекст їх розрізняє.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{}},"important":[{}]}}
**Note:** OWNER approved override: Device sense was mistranslated as operate; run/work contrasts needed repair.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "laufen",
  "lv": "бігти • працювати",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "бігти • працювати",
    "explanation": [
      "Головна думка: laufen означає бігти або швидко пересуватися пішки; про пристрій, фільм чи програму — працювати або йти.",
      "gehen — іти пішки, fahren — їхати транспортом, funktionieren — функціонувати."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Він біжить дуже швидко."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Діти бігають у парку."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Фільм уже йде."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Машина добре працює."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "бігти / працювати",
        "example": "Er läuft schnell. – Він біжить швидко."
      },
      {
        "word": "gehen",
        "meaning": "іти пішки",
        "example": "Ich gehe nach Hause. – Я йду додому."
      },
      {
        "word": "fahren",
        "meaning": "їхати транспортом",
        "example": "Ich fahre mit dem Bus. – Я їду автобусом."
      },
      {
        "word": "funktionieren",
        "meaning": "працювати / функціонувати",
        "example": "Das funktioniert gut. – Це добре працює."
      }
    ],
    "tip": {
      "text": "Людина або тварина → бігти; пристрій, фільм чи програма → працювати / йти."
    },
    "important": [
      "laufen має рухове й переносне значення; контекст їх розрізняє."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "laufen",
  "lv": "бігти • оперувати",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "бігти • оперувати",
    "explanation": [
      "Головна думка: laufen означає бігти, але для пристроїв це може означати бігти.",
      "Для людини чи тварини laufen часто означає бігати або ходити у швидкому темпі.",
      "Для фільму, машини чи програми laufen означає, що це працює або відбувається.",
      "Для руху ніг на рівні A1 найчастіше порівнюють gehen і laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "він дуже швидко бігає."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "діти бігають у парку."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "фільм вже йде."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "машинка працює добре."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "запускати / працювати",
        "example": "Er läuft schnell."
      },
      {
        "word": "gehen",
        "meaning": "йти пішки",
        "example": "Ich gehe nach Hause."
      },
      {
        "word": "fahren",
        "meaning": "їздити на транспорті",
        "example": "Ich fahre mit dem Bus."
      },
      {
        "word": "funktionieren",
        "meaning": "оперувати",
        "example": "Das funktioniert gut."
      }
    ],
    "tip": {
      "text": "Пам'ятай: ноги швидко → laufen; транспорт → fahren."
    },
    "important": [
      "laufen - це не просто «запустити». Для фільму чи пристрою це може означати «йти» або «діяти».",
      "Ich laufe означає рух пішки, а не їзду."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laufen"
        ],
        "purple": [
          "бігти",
          "йти"
        ],
        "green": [
          "тварини",
          "фільм",
          "програми"
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
              "бігає"
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
              "бігають"
            ]
          }
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
          "lv": {
            "purple": [
              "працює"
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
          "meaning": {
            "purple": [
              "йти"
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
          "meaning": {
            "purple": [
              "оперувати"
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
            "ноги швидко"
          ],
          "red": [
            "fahren",
            "транспорт"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "laufen"
          ],
          "purple": [
            "йти"
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

## Finding 49

**Audit ID:** `LRB102-0049`
**Finding Stable ID:** `g2/a1/uk|laut|idx:358|translation; study.explanation; study.examples|POS_ERROR|gpt-5.6-luna`
**Lang:** uk
**Card:** `laut|idx:358`
**Field / path:** `translation; study.explanation; study.examples`
**Severity:** MEDIUM
**Category:** GRAMMAR_MORPHOLOGY_OR_FORM
**CURRENT (captured scope):** {"translation":"голосно","study.explanation":"[\"Головна думка: Прикметник у нижньому регістрі. Описує гучність – наскільки голосний звук або мова.\",\"laut в основному означає: гучний звук.\",\"Часто характеризується: прикметник.\",\"laut в основному означає: звуковий сигнал.\",\"Часто характеризується: іменник (der).\",\"laut у нижньому регістрі - це прикметник - описує, наскільки гучний звук (Die Musik ist laut = музика голосна).\",\"der Laut з великою літерою та артиклем der є іменник — означає звук як річ або сигнал (Der Laut ist schön = звук прекрасний).\",\"В множині: die Laute.\"]","study.examples":"[{\"de\":\"Die Musik ist laut.\",\"lv\":\"Музика голосна.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"музика голосна.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"не говори так голосно!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"це дуже голосно.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"звук прекрасний.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"я чую звук\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"гучний • голосно","study.translation":"гучний • голосно","study.explanation":"[\"Головна думка: laut з малої літери — прикметник або прислівник, що описує велику гучність.\",\"der Laut з великої літери — іменник «звук»; множина die Laute.\"]","study.examples":"[{\"de\":\"Die Musik ist laut.\",\"lv\":\"Музика гучна.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"Музика гучна.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"Не говори так голосно!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"Це дуже голосно.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"Звук гарний.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"Я чую звук.\"}]","study.tip":"[\"laut — гучний / голосно; der Laut — звук.\"]","study.important":"[\"laut і der Laut — різні частини мови.\",\"Прикметник пишеться з малої літери, іменник — з великої.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Adjective/adverb laut was conflated with noun der Laut.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "laut",
  "lv": "гучний • голосно",
  "level": "A1",
  "study": {
    "id": "a1-laut",
    "layout": "standardStudy",
    "translation": "гучний • голосно",
    "explanation": [
      "Головна думка: laut з малої літери — прикметник або прислівник, що описує велику гучність.",
      "der Laut з великої літери — іменник «звук»; множина die Laute."
    ],
    "examples": [
      {
        "de": "Die Musik ist laut.",
        "lv": "Музика гучна."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "Музика гучна."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "Не говори так голосно!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "Це дуже голосно."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "Звук гарний."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "Я чую звук."
      }
    ],
    "tip": [
      "laut — гучний / голосно; der Laut — звук."
    ],
    "important": [
      "laut і der Laut — різні частини мови.",
      "Прикметник пишеться з малої літери, іменник — з великої."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "laut",
  "lv": "голосно",
  "level": "A1",
  "study": {
    "id": "a1-laut",
    "layout": "standardStudy",
    "translation": "голосно",
    "explanation": [
      "Головна думка: Прикметник у нижньому регістрі. Описує гучність – наскільки голосний звук або мова.",
      "laut в основному означає: гучний звук.",
      "Часто характеризується: прикметник.",
      "laut в основному означає: звуковий сигнал.",
      "Часто характеризується: іменник (der).",
      "laut у нижньому регістрі - це прикметник - описує, наскільки гучний звук (Die Musik ist laut = музика голосна).",
      "der Laut з великою літерою та артиклем der є іменник — означає звук як річ або сигнал (Der Laut ist schön = звук прекрасний).",
      "В множині: die Laute."
    ],
    "examples": [
      {
        "de": "Die Musik ist laut.",
        "lv": "Музика голосна."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "музика голосна."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "не говори так голосно!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "це дуже голосно."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "звук прекрасний."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "я чую звук"
      }
    ],
    "tip": [
      "Маленькі laut = голосно (прикметник: ist laut). der Laut з великої літери = звук (іменник: ein Laut, der Laut).",
      "laut = звук"
    ],
    "important": [
      "laut - з малої літери і без артикля - це прикметник.",
      "der Laut з великої літери та артикль der є іменник.",
      "Множина: die Laute (звуки мови, звукові сигнали).",
      "Неправильно: Der Laut ist sehr. → Правильно: Das ist sehr laut."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laut"
        ],
        "purple": [
          "голосна",
          "голосна"
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
              "голосна"
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
              "голосна"
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
              "голосно"
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
              "голосно"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "purple": [
            "голосно"
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

## Finding 50

**Audit ID:** `LRB102-0050`
**Finding Stable ID:** `g2/a1/uk|Laut|idx:359|study.explanation; study.examples|CONTENT_ERROR|gpt-5.6-luna`
**Lang:** uk
**Card:** `Laut|idx:359`
**Field / path:** `study.explanation; study.examples`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Головна думка: Іменник з артиклем der і великою літерою. Означає звук як річ, сигнал або звук мови.\",\"der Laut в основному означає: гучний звук.\",\"Часто характеризується: прикметник.\",\"der Laut в основному означає: звуковий сигнал.\",\"Часто характеризується: іменник (der).\",\"laut у нижньому регістрі - це прикметник - описує, наскільки гучний звук (Die Musik ist laut = музика голосна).\",\"der Laut з великою літерою та артиклем der є іменник — означає звук як річ або сигнал (Der Laut ist schön = звук прекрасний).\",\"В множині: die Laute.\"]","study.examples":"[{\"de\":\"Der Laut ist schön.\",\"lv\":\"Звук прекрасний.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"музика голосна.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"не говори так голосно!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"це дуже голосно.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"звук прекрасний.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"я чую звук\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"звук","study.translation":"звук","study.explanation":"[\"Головна думка: der Laut — іменник чоловічого роду зі значенням «звук», зокрема окремий мовний або чутний звук.\",\"laut з малої літери — прикметник або прислівник «гучний / голосно».\",\"Множина: die Laute.\"]","study.examples":"[{\"de\":\"Der Laut ist schön.\",\"lv\":\"Звук гарний.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"Музика гучна.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"Не говори так голосно!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"Це дуже голосно.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"Звук гарний.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"Я чую звук.\"}]","study.tip":"[\"Артикль der і велика літера → der Laut, «звук»; мала літера → laut, «гучний / голосно».\"]","study.important":"[\"der Laut = звук; laut = гучний / голосно.\",\"Множина: die Laute.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Noun der Laut contained adjective claims and inconsistent examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Laut",
  "de_article": "der",
  "de_plural": "die Laute",
  "lv": "звук",
  "level": "A1",
  "study": {
    "id": "a1-laut-study",
    "layout": "standardStudy",
    "translation": "звук",
    "explanation": [
      "Головна думка: der Laut — іменник чоловічого роду зі значенням «звук», зокрема окремий мовний або чутний звук.",
      "laut з малої літери — прикметник або прислівник «гучний / голосно».",
      "Множина: die Laute."
    ],
    "examples": [
      {
        "de": "Der Laut ist schön.",
        "lv": "Звук гарний."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "Музика гучна."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "Не говори так голосно!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "Це дуже голосно."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "Звук гарний."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "Я чую звук."
      }
    ],
    "tip": [
      "Артикль der і велика літера → der Laut, «звук»; мала літера → laut, «гучний / голосно»."
    ],
    "important": [
      "der Laut = звук; laut = гучний / голосно.",
      "Множина: die Laute."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
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
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Laut",
  "de_article": "der",
  "de_plural": "die Laute",
  "lv": "звук",
  "level": "A1",
  "study": {
    "id": "a1-laut-study",
    "layout": "standardStudy",
    "translation": "звук",
    "explanation": [
      "Головна думка: Іменник з артиклем der і великою літерою. Означає звук як річ, сигнал або звук мови.",
      "der Laut в основному означає: гучний звук.",
      "Часто характеризується: прикметник.",
      "der Laut в основному означає: звуковий сигнал.",
      "Часто характеризується: іменник (der).",
      "laut у нижньому регістрі - це прикметник - описує, наскільки гучний звук (Die Musik ist laut = музика голосна).",
      "der Laut з великою літерою та артиклем der є іменник — означає звук як річ або сигнал (Der Laut ist schön = звук прекрасний).",
      "В множині: die Laute."
    ],
    "examples": [
      {
        "de": "Der Laut ist schön.",
        "lv": "Звук прекрасний."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "музика голосна."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "не говори так голосно!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "це дуже голосно."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "звук прекрасний."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "я чую звук"
      }
    ],
    "tip": [
      "Маленькі laut = голосно (прикметник: ist laut). der Laut з великої літери = звук (іменник: ein Laut, der Laut).",
      "der Laut = звук"
    ],
    "important": [
      "laut - з малої літери і без артикля - це прикметник.",
      "der Laut з великої літери та артикль der є іменник.",
      "Множина: die Laute (звуки мови, звукові сигнали).",
      "Неправильно: Der Laut ist sehr. → Правильно: Das ist sehr laut."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "der Laut",
          "laut"
        ],
        "purple": [
          "звук",
          "звук"
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
              "звук"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laut"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "laut"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "laut"
            ]
          },
          "lv": {}
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
              "звук"
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
              "звук"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "звук"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "laut"
          ]
        }
      ]
    }
  }
}
```

---

