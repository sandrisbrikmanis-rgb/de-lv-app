# G2/A1 LRB LRB-101 — OWNER VIEW

**Batch:** LRB-101
**Rows:** 50/50
**Languages:** TR 50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-12T19:07:00.000Z
**Source commit:** `4b33fed2bdf34eeb514b77af9bc15a6693876646`
**Verified commit:** `4b33fed2bdf34eeb514b77af9bc15a6693876646`
**Branch:** `cursor/lrb-101-owner-review-pc2-3db2`
**Overrides SHA256:** `7cb24d35fb0678696292fe1e412aec569a63a45a31357737058f2167b07304f5`
**GALA PASS:** `LRB_101_FULL_50_50_LINGUISTIC_REVIEW_PASS`

> Independently verified per FULL_50_50 PDF standard. Linguistic review closed (TR 50).

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB101-0001`
**Finding Stable ID:** `g2/a1/tr|bleiben|idx:101|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `bleiben|idx:101`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kalmak","study.translation":"Kalmak","study.explanation":"[\"Ana fikir: bleiben kalmak demektir.\",\"Bleiben, bir kişi veya şeyin kaybolmaması ve aynı yerde veya durumda kalması durumunda kullanılır.\",\"Ayrılmaya gelince, cehennem ve fahrenheit'in tam tersidir.\",\"Çok popüler bir tabir Ich bleibe zu Hause'dur.\"]","study.examples":"[{\"de\":\"Ich bleibe zu Hause.\",\"lv\":\"Evde kalıyorum\"},{\"de\":\"Bleib hier!\",\"lv\":\"Burada kal!\"},{\"de\":\"Wir bleiben noch eine Stunde.\",\"lv\":\"Bir saat daha kalıyoruz.\"},{\"de\":\"Ich gehe nach Hause.\",\"lv\":\"Eve gidiyorum\"}]","study.comparison":"[{\"word\":\"bleiben\",\"meaning\":\"Kalmak\",\"example\":\"Burada kalıyorum.\"},{\"word\":\"gehen\",\"meaning\":\"Yürüyerek git/git\",\"example\":\"Eve gidiyorum.\"},{\"word\":\"fahren\",\"meaning\":\"Ulaşımla gitmek/sürmek\",\"example\":\"Eve sürüyorum.\"},{\"word\":\"warten\",\"meaning\":\"Beklemek\",\"example\":\"Burada bekliyorum.\"}]","study.tip":"{\"text\":\"Unutmayın: → bleiben • Yaprakları yaya olarak → bırakmayın.\"}","study.important":"[\"Bleiben kalmak demektir, beklemek değil.\",\"Onların bleibe hier = Ben burada kalıyorum • Onların değer hier = Ben burada bekliyorum.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kalmak","study.translation":"kalmak","study.explanation":"[\"Ana fikir: bleiben, bir kişinin veya şeyin bulunduğu yerde ya da durumda kalmasını anlatır.\",\"Ayrılmayı anlatan gehen ve fahren ile, beklemeyi anlatan warten’den farklıdır.\"]","study.examples":"[{\"de\":\"Ich bleibe zu Hause.\",\"lv\":\"Evde kalıyorum.\"},{\"de\":\"Bleib hier!\",\"lv\":\"Burada kal!\"},{\"de\":\"Wir bleiben noch eine Stunde.\",\"lv\":\"Bir saat daha kalıyoruz.\"},{\"de\":\"Ich gehe nach Hause.\",\"lv\":\"Eve gidiyorum.\"}]","study.comparison":"[{\"word\":\"bleiben\",\"meaning\":\"kalmak\",\"example\":\"Ich bleibe hier. – Burada kalıyorum.\"},{\"word\":\"gehen\",\"meaning\":\"yürüyerek gitmek\",\"example\":\"Ich gehe nach Hause. – Eve gidiyorum.\"},{\"word\":\"fahren\",\"meaning\":\"araçla gitmek\",\"example\":\"Ich fahre nach Hause. – Eve araçla gidiyorum.\"},{\"word\":\"warten\",\"meaning\":\"beklemek\",\"example\":\"Ich warte hier. – Burada bekliyorum.\"}]","study.tip":"{\"text\":\"Ayrılmamak → bleiben; beklemek → warten.\"}","study.important":"[\"bleiben = kalmak; warten = beklemek.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: bleiben: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bleiben",
  "lv": "kalmak",
  "level": "A1",
  "study": {
    "id": "a1-bleiben",
    "layout": "standardStudy",
    "translation": "kalmak",
    "explanation": [
      "Ana fikir: bleiben, bir kişinin veya şeyin bulunduğu yerde ya da durumda kalmasını anlatır.",
      "Ayrılmayı anlatan gehen ve fahren ile, beklemeyi anlatan warten’den farklıdır."
    ],
    "examples": [
      {
        "de": "Ich bleibe zu Hause.",
        "lv": "Evde kalıyorum."
      },
      {
        "de": "Bleib hier!",
        "lv": "Burada kal!"
      },
      {
        "de": "Wir bleiben noch eine Stunde.",
        "lv": "Bir saat daha kalıyoruz."
      },
      {
        "de": "Ich gehe nach Hause.",
        "lv": "Eve gidiyorum."
      }
    ],
    "comparison": [
      {
        "word": "bleiben",
        "meaning": "kalmak",
        "example": "Ich bleibe hier. – Burada kalıyorum."
      },
      {
        "word": "gehen",
        "meaning": "yürüyerek gitmek",
        "example": "Ich gehe nach Hause. – Eve gidiyorum."
      },
      {
        "word": "fahren",
        "meaning": "araçla gitmek",
        "example": "Ich fahre nach Hause. – Eve araçla gidiyorum."
      },
      {
        "word": "warten",
        "meaning": "beklemek",
        "example": "Ich warte hier. – Burada bekliyorum."
      }
    ],
    "tip": {
      "text": "Ayrılmamak → bleiben; beklemek → warten."
    },
    "important": [
      "bleiben = kalmak; warten = beklemek."
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
      "tip": {},
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
  "de": "bleiben",
  "lv": "Kalmak",
  "level": "A1",
  "study": {
    "id": "a1-bleiben",
    "layout": "standardStudy",
    "translation": "Kalmak",
    "explanation": [
      "Ana fikir: bleiben kalmak demektir.",
      "Bleiben, bir kişi veya şeyin kaybolmaması ve aynı yerde veya durumda kalması durumunda kullanılır.",
      "Ayrılmaya gelince, cehennem ve fahrenheit'in tam tersidir.",
      "Çok popüler bir tabir Ich bleibe zu Hause'dur."
    ],
    "examples": [
      {
        "de": "Ich bleibe zu Hause.",
        "lv": "Evde kalıyorum"
      },
      {
        "de": "Bleib hier!",
        "lv": "Burada kal!"
      },
      {
        "de": "Wir bleiben noch eine Stunde.",
        "lv": "Bir saat daha kalıyoruz."
      },
      {
        "de": "Ich gehe nach Hause.",
        "lv": "Eve gidiyorum"
      }
    ],
    "comparison": [
      {
        "word": "bleiben",
        "meaning": "Kalmak",
        "example": "Burada kalıyorum."
      },
      {
        "word": "gehen",
        "meaning": "Yürüyerek git/git",
        "example": "Eve gidiyorum."
      },
      {
        "word": "fahren",
        "meaning": "Ulaşımla gitmek/sürmek",
        "example": "Eve sürüyorum."
      },
      {
        "word": "warten",
        "meaning": "Beklemek",
        "example": "Burada bekliyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: → bleiben • Yaprakları yaya olarak → bırakmayın."
    },
    "important": [
      "Bleiben kalmak demektir, beklemek değil.",
      "Onların bleibe hier = Ben burada kalıyorum • Onların değer hier = Ben burada bekliyorum."
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
            "bleibe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 2

**Audit ID:** `LRB101-0002`
**Finding Stable ID:** `g2/a1/tr|bringen|idx:111|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `bringen|idx:111`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Getir • Götür","study.translation":"Getir • Götür","study.explanation":"[\"Ana fikir: Birine bir şey getirmek, taşımak veya teslim etmek için araçlar getirmek.\",\"Bir şeyin başka bir yere veya başka bir kişiye taşınması durumunda Bringen kullanırız.\",\"Bu nehmen ile aynı şey değildir çünkü nehmen kendi başına almak demektir.\",\"Holen birini takip etmek, getirmek veya almak anlamına gelir.\",\"Çeviri bağlama göre belirlenir.\"]","study.examples":"[{\"de\":\"Ich bringe dir ein Buch.\",\"lv\":\"Bana su getir lütfen\"},{\"de\":\"Ich bringe das Paket zur Post.\",\"lv\":\"Seni eve götüreceğim\"},{\"de\":\"Ich bringe die Kinder zur Schule.\",\"lv\":\"Kitabı okula götürür.\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Kitabı alıyorum\"}]","study.comparison":"[{\"word\":\"bringen\",\"meaning\":\"Getir / al / teslim et\",\"example\":\"Ich bringe dir ein Buch. – Mir Wasser'ı getir.\"},{\"word\":\"bringen\",\"meaning\":\"Al / Al\",\"example\":\"Ich bringe das Paket zur Post. – Ich nehme das Buch.\"},{\"word\":\"bringen\",\"meaning\":\"Git/ getir\",\"example\":\"Ich bringe die Kinder zur Schule. – Ich dziura Wasser.\"},{\"word\":\"bringen\",\"meaning\":\"Al ve getir\",\"example\":\"Ich bringe dir ein Buch. – Bringst du Brot mit?\"},{\"word\":\"nehmen\",\"meaning\":\"almak\",\"example\":\"Ich nehme das Buch. – Kitabı alıyorum.\"}]","study.tip":"{\"text\":\"Unutmayın: birine gidin → getirin • Kendinize alın → nehmen.\"}","study.important":"[\"Birine ya da bir yere giden yolu gösterin.\",\"Nehmen almak anlamına gelir, ancak diğerine teslim etmek anlamına gelmez.\",\"Letonca çevirisi bağlama göre değişir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"getirmek • götürmek","study.translation":"getirmek • götürmek","study.explanation":"[\"Ana fikir: bringen, bir şeyi bir kişiye veya belirli bir yere ulaştırmak demektir.\",\"Türkçede yön ve bağlama göre getirmek, götürmek veya ulaştırmak diye çevrilir.\",\"nehmen ise bir şeyi almak demektir.\"]","study.examples":"[{\"de\":\"Ich bringe dir ein Buch.\",\"lv\":\"Sana bir kitap getiriyorum.\"},{\"de\":\"Ich bringe das Paket zur Post.\",\"lv\":\"Paketi postaneye götürüyorum.\"},{\"de\":\"Ich bringe die Kinder zur Schule.\",\"lv\":\"Çocukları okula götürüyorum.\"}]","study.comparison":"[{\"word\":\"bringen\",\"meaning\":\"getirmek\",\"example\":\"Ich bringe dir ein Buch. – Sana bir kitap getiriyorum.\"},{\"word\":\"bringen\",\"meaning\":\"götürmek\",\"example\":\"Ich bringe das Paket zur Post. – Paketi postaneye götürüyorum.\"},{\"word\":\"bringen\",\"meaning\":\"götürmek\",\"example\":\"Ich bringe die Kinder zur Schule. – Çocukları okula götürüyorum.\"},{\"word\":\"bringen\",\"meaning\":\"ulaştırmak\",\"example\":\"Ich bringe dir ein Buch. – Sana bir kitap ulaştırıyorum.\"},{\"word\":\"nehmen\",\"meaning\":\"almak\",\"example\":\"Ich nehme das Buch. – Kitabı alıyorum.\"}]","study.tip":"{\"text\":\"Bir şey başka bir kişiye veya yere ulaşıyorsa bringen kullanılır.\"}","study.important":"[\"bringen yönü hedefe doğrudur; nehmen = almak.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: bringen: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bringen",
  "lv": "getirmek • götürmek",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "getirmek • götürmek",
    "explanation": [
      "Ana fikir: bringen, bir şeyi bir kişiye veya belirli bir yere ulaştırmak demektir.",
      "Türkçede yön ve bağlama göre getirmek, götürmek veya ulaştırmak diye çevrilir.",
      "nehmen ise bir şeyi almak demektir."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Sana bir kitap getiriyorum."
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Paketi postaneye götürüyorum."
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Çocukları okula götürüyorum."
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "getirmek",
        "example": "Ich bringe dir ein Buch. – Sana bir kitap getiriyorum."
      },
      {
        "word": "bringen",
        "meaning": "götürmek",
        "example": "Ich bringe das Paket zur Post. – Paketi postaneye götürüyorum."
      },
      {
        "word": "bringen",
        "meaning": "götürmek",
        "example": "Ich bringe die Kinder zur Schule. – Çocukları okula götürüyorum."
      },
      {
        "word": "bringen",
        "meaning": "ulaştırmak",
        "example": "Ich bringe dir ein Buch. – Sana bir kitap ulaştırıyorum."
      },
      {
        "word": "nehmen",
        "meaning": "almak",
        "example": "Ich nehme das Buch. – Kitabı alıyorum."
      }
    ],
    "tip": {
      "text": "Bir şey başka bir kişiye veya yere ulaşıyorsa bringen kullanılır."
    },
    "important": [
      "bringen yönü hedefe doğrudur; nehmen = almak."
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
      "tip": {},
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
  "de": "bringen",
  "lv": "Getir • Götür",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "Getir • Götür",
    "explanation": [
      "Ana fikir: Birine bir şey getirmek, taşımak veya teslim etmek için araçlar getirmek.",
      "Bir şeyin başka bir yere veya başka bir kişiye taşınması durumunda Bringen kullanırız.",
      "Bu nehmen ile aynı şey değildir çünkü nehmen kendi başına almak demektir.",
      "Holen birini takip etmek, getirmek veya almak anlamına gelir.",
      "Çeviri bağlama göre belirlenir."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Bana su getir lütfen"
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Seni eve götüreceğim"
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Kitabı okula götürür."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Kitabı alıyorum"
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "Getir / al / teslim et",
        "example": "Ich bringe dir ein Buch. – Mir Wasser'ı getir."
      },
      {
        "word": "bringen",
        "meaning": "Al / Al",
        "example": "Ich bringe das Paket zur Post. – Ich nehme das Buch."
      },
      {
        "word": "bringen",
        "meaning": "Git/ getir",
        "example": "Ich bringe die Kinder zur Schule. – Ich dziura Wasser."
      },
      {
        "word": "bringen",
        "meaning": "Al ve getir",
        "example": "Ich bringe dir ein Buch. – Bringst du Brot mit?"
      },
      {
        "word": "nehmen",
        "meaning": "almak",
        "example": "Ich nehme das Buch. – Kitabı alıyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: birine gidin → getirin • Kendinize alın → nehmen."
    },
    "important": [
      "Birine ya da bir yere giden yolu gösterin.",
      "Nehmen almak anlamına gelir, ancak diğerine teslim etmek anlamına gelmez.",
      "Letonca çevirisi bağlama göre değişir."
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

## Finding 3

**Audit ID:** `LRB101-0003`
**Finding Stable ID:** `g2/a1/tr|da|idx:126|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `da|idx:126`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Orada","study.translation":"Orada","study.explanation":"[\"Ana fikir: A1 seviyesindeki da en sık orada anlamına gelir.\",\"Da bir yeri gösterir veya daha önce bahsedilen bir şeyi ifade eder.\",\"Duruma bağlı olarak bu, burada veya burada olarak da çevrilebilir.\",\"A1 seviyesinde esas olarak da'yı genel bir yer kelimesi olarak öğreniyoruz.\"]","study.examples":"[{\"de\":\"Da ist mein Auto.\",\"lv\":\"Arabam orada.\"},{\"de\":\"Ich war da.\",\"lv\":\"Oradaydım\"},{\"de\":\"Da kommt er.\",\"lv\":\"İşte geliyor.\"},{\"de\":\"Komm mal da her!\",\"lv\":\"Buraya gel!\"}]","study.comparison":"[{\"word\":\"da\",\"meaning\":\"Orada • Burada • Burada (genel)\",\"example\":\"Benim arabam orada.\"},{\"word\":\"hier\",\"meaning\":\"Burada (belirli bir yerde)\",\"example\":\"Burada benim arabam.\"},{\"word\":\"dort\",\"meaning\":\"Orada (ileri)\",\"example\":\"Orada benim arabam.\"},{\"word\":\"dann\",\"meaning\":\"Sonra\",\"example\":\"Sonra eve gideceğiz.\"}]","study.tip":"{\"text\":\"Unutmayın: General → onu oraya koyacak.\"}","study.important":"[\"Bu, yerin genel adını verecektir.\",\"Oyun özel \\\"burada \\\", pasta daha da\\\" orada \\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"orada • burada","study.translation":"orada • burada","study.explanation":"[\"Ana fikir: da, A1 düzeyinde genel bir yer sözcüğüdür ve çoğunlukla “orada”, bazen “burada” diye çevrilir.\",\"hier belirli bir yakın yeri, dort daha uzaktaki bir yeri, dann ise zamanı veya sırayı belirtir.\"]","study.examples":"[{\"de\":\"Da ist mein Auto.\",\"lv\":\"Arabam orada.\"},{\"de\":\"Ich war da.\",\"lv\":\"Oradaydım.\"},{\"de\":\"Da kommt er.\",\"lv\":\"İşte o geliyor.\"},{\"de\":\"Komm mal da her!\",\"lv\":\"Buraya gelsene!\"}]","study.comparison":"[{\"word\":\"da\",\"meaning\":\"orada / burada; genel yer\",\"example\":\"Da ist mein Auto. – Arabam orada.\"},{\"word\":\"hier\",\"meaning\":\"burada; belirli yakın yer\",\"example\":\"Hier ist mein Auto. – Arabam burada.\"},{\"word\":\"dort\",\"meaning\":\"orada; daha uzak yer\",\"example\":\"Dort ist mein Auto. – Arabam orada.\"},{\"word\":\"dann\",\"meaning\":\"sonra / o zaman\",\"example\":\"Dann gehen wir nach Hause. – Sonra eve gidiyoruz.\"}]","study.tip":"{\"text\":\"Genel yer → da; yakın ve belirli yer → hier; uzak yer → dort.\"}","study.important":"[\"da bir yer sözcüğüdür; dann ile karıştırılmaz.\"]","study.accents":{},"study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: da: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "da",
  "lv": "orada • burada",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "orada • burada",
    "explanation": [
      "Ana fikir: da, A1 düzeyinde genel bir yer sözcüğüdür ve çoğunlukla “orada”, bazen “burada” diye çevrilir.",
      "hier belirli bir yakın yeri, dort daha uzaktaki bir yeri, dann ise zamanı veya sırayı belirtir."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Arabam orada."
      },
      {
        "de": "Ich war da.",
        "lv": "Oradaydım."
      },
      {
        "de": "Da kommt er.",
        "lv": "İşte o geliyor."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Buraya gelsene!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "orada / burada; genel yer",
        "example": "Da ist mein Auto. – Arabam orada."
      },
      {
        "word": "hier",
        "meaning": "burada; belirli yakın yer",
        "example": "Hier ist mein Auto. – Arabam burada."
      },
      {
        "word": "dort",
        "meaning": "orada; daha uzak yer",
        "example": "Dort ist mein Auto. – Arabam orada."
      },
      {
        "word": "dann",
        "meaning": "sonra / o zaman",
        "example": "Dann gehen wir nach Hause. – Sonra eve gidiyoruz."
      }
    ],
    "tip": {
      "text": "Genel yer → da; yakın ve belirli yer → hier; uzak yer → dort."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "accents": {},
    "important": [
      "da bir yer sözcüğüdür; dann ile karıştırılmaz."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "da",
  "lv": "Orada",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "Orada",
    "explanation": [
      "Ana fikir: A1 seviyesindeki da en sık orada anlamına gelir.",
      "Da bir yeri gösterir veya daha önce bahsedilen bir şeyi ifade eder.",
      "Duruma bağlı olarak bu, burada veya burada olarak da çevrilebilir.",
      "A1 seviyesinde esas olarak da'yı genel bir yer kelimesi olarak öğreniyoruz."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Arabam orada."
      },
      {
        "de": "Ich war da.",
        "lv": "Oradaydım"
      },
      {
        "de": "Da kommt er.",
        "lv": "İşte geliyor."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Buraya gel!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "Orada • Burada • Burada (genel)",
        "example": "Benim arabam orada."
      },
      {
        "word": "hier",
        "meaning": "Burada (belirli bir yerde)",
        "example": "Burada benim arabam."
      },
      {
        "word": "dort",
        "meaning": "Orada (ileri)",
        "example": "Orada benim arabam."
      },
      {
        "word": "dann",
        "meaning": "Sonra",
        "example": "Sonra eve gideceğiz."
      }
    ],
    "tip": {
      "text": "Unutmayın: General → onu oraya koyacak."
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
      "Bu, yerin genel adını verecektir.",
      "Oyun özel \"burada \", pasta daha da\" orada \"."
    ]
  }
}
```

---

## Finding 4

**Audit ID:** `LRB101-0004`
**Finding Stable ID:** `g2/a1/tr|das|idx:129|lv; study.translation; study.examples.lv; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `das|idx:129`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Nötr kesin artikel","study.translation":"Nötr kesin artikel","study.examples.lv":null,"study.comparison":"[{\"word\":\"das\",\"meaning\":\"Bu (makale/zamir)\",\"example\":\"Das ist mein Auto. – Bu benim arabam.\"},{\"word\":\"dies\",\"meaning\":\"Bu mu?\",\"example\":\"Dies ist mein Auto. – Bu benim arabam.\"},{\"word\":\"welches\",\"meaning\":\"Kim • Kim • Kim\",\"example\":\"Das ist das Buch, welches ich lese. – Okuduğum bir kitap.\"}]","study.important":"[\"A1 düzeyinde, DAS başlangıçta orta cinsiyet için bir makale olarak incelenir.\",\"Das, dass ile aynı şey değildir - das bir artikel veya zamir olabilir, dass \\\"o\\\" anlamına gelir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nötr belirli artikel","study.translation":"nötr belirli artikel","study.explanation":"[\"Ana fikir: das, nötr isimlerin belirli artikelidir.\",\"das ayrıca “bu” anlamında işaret zamiri veya ilgi zamiri olabilir; dass ise bağlaçtır.\"]","study.examples":"[{\"de\":\"Das ist mein Auto.\",\"lv\":\"Bu benim arabam.\"},{\"de\":\"Das ist gut.\",\"lv\":\"Bu iyi.\"},{\"de\":\"Das Buch, das ich lese, ist interessant.\",\"lv\":\"Okuduğum kitap ilginç.\"}]","study.comparison":"[{\"word\":\"das\",\"meaning\":\"bu; artikel veya zamir\",\"example\":\"Das ist mein Auto. – Bu benim arabam.\"},{\"word\":\"dies\",\"meaning\":\"bu; işaret sözcüğü\",\"example\":\"Dies ist mein Auto. – Bu benim arabam.\"},{\"word\":\"welches\",\"meaning\":\"hangi / -dığı; ilgi zamiri\",\"example\":\"Das ist das Buch, welches ich lese. – Bu, okuduğum kitap.\"}]","study.tip":"{\"text\":\"Nötr isim → das; yan cümle bağlacı → dass.\"}","study.important":"[\"das ve dass farklı sözcüklerdir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: das: individual full-card repair of lv; study.translation; study.examples.lv; study.comparison; study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "nötr belirli artikel",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "nötr belirli artikel",
    "explanation": [
      "Ana fikir: das, nötr isimlerin belirli artikelidir.",
      "das ayrıca “bu” anlamında işaret zamiri veya ilgi zamiri olabilir; dass ise bağlaçtır."
    ],
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Bu benim arabam."
      },
      {
        "de": "Das ist gut.",
        "lv": "Bu iyi."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Okuduğum kitap ilginç."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "bu; artikel veya zamir",
        "example": "Das ist mein Auto. – Bu benim arabam."
      },
      {
        "word": "dies",
        "meaning": "bu; işaret sözcüğü",
        "example": "Dies ist mein Auto. – Bu benim arabam."
      },
      {
        "word": "welches",
        "meaning": "hangi / -dığı; ilgi zamiri",
        "example": "Das ist das Buch, welches ich lese. – Bu, okuduğum kitap."
      }
    ],
    "tip": {
      "text": "Nötr isim → das; yan cümle bağlacı → dass."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "das ve dass farklı sözcüklerdir."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "das",
  "lv": "Nötr kesin artikel",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "Nötr kesin artikel",
    "explanation": "Yumuşak isimler için kullanılır. Bazı cümlelerde, \"that\" göreceli bir zamir veya zamir olarak da kullanılabilir.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Bu benim arabam"
      },
      {
        "de": "Das ist gut.",
        "lv": "Bu iyi."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Okuduğum kitap ilgi çekici."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "Bu (makale/zamir)",
        "example": "Das ist mein Auto. – Bu benim arabam."
      },
      {
        "word": "dies",
        "meaning": "Bu mu?",
        "example": "Dies ist mein Auto. – Bu benim arabam."
      },
      {
        "word": "welches",
        "meaning": "Kim • Kim • Kim",
        "example": "Das ist das Buch, welches ich lese. – Okuduğum bir kitap."
      }
    ],
    "tip": {
      "text": "Atceries: vidas dzimte → das • Ka → das."
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
              "Das"
            ],
            "yellow": [
              "welches"
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
            "das"
          ]
        },
        {
          "blue": [
            "das"
          ],
          "red": [
            "dass"
          ]
        }
      ]
    },
    "important": [
      "A1 düzeyinde, DAS başlangıçta orta cinsiyet için bir makale olarak incelenir.",
      "Das, dass ile aynı şey değildir - das bir artikel veya zamir olabilir, dass \"o\" anlamına gelir."
    ]
  }
}
```

---

## Finding 5

**Audit ID:** `LRB101-0005`
**Finding Stable ID:** `g2/a1/tr|dass|idx:130|lv; study.examples.lv; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `dass|idx:130`
**Field / path:** `lv; study.examples.lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"O","study.examples.lv":null,"study.comparison":"[{\"word\":\"dass\",\"meaning\":\"O\",\"example\":\"Ich weiß, dass er kommt. – Geleceğini biliyorum.\"},{\"word\":\"weil\",\"meaning\":\"Çünkü • Çünkü\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Yağmur yağdığı için evde kalıyorum.\"},{\"word\":\"damit\",\"meaning\":\"Aşağı\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Almanya'da çalışabilmek için Almanca öğreniyorum.\"},{\"word\":\"ob\",\"meaning\":\"Veya\",\"example\":\"Ich weiß nicht, ob er kommt. – Gelip gelmeyeceğini bilmiyorum.\"}]","study.important":"[\"Dass \\\"o\\\" anlamına gelir ve bir yardımcı madde ekler.\",\"Bir makale veya \\\"bu\\\" olabilen Das ile karıştırılmamalıdır.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"-diğini/-dığını • ki","study.translation":"-diğini/-dığını • ki","study.explanation":"[\"Ana fikir: dass, bir olguyu, düşünceyi veya söyleneni aktaran yan cümleyi başlatır.\",\"dass yan cümlesinde çekimli fiil genellikle sonda bulunur.\"]","study.examples":"[{\"de\":\"Ich weiß, dass du müde bist.\",\"lv\":\"Yorgun olduğunu biliyorum.\"},{\"de\":\"Er sagt, dass er kommt.\",\"lv\":\"O, geleceğini söylüyor.\"},{\"de\":\"Ich glaube, dass das stimmt.\",\"lv\":\"Bunun doğru olduğunu düşünüyorum.\"}]","study.comparison":"[{\"word\":\"dass\",\"meaning\":\"-diğini/-dığını; ki\",\"example\":\"Ich weiß, dass er kommt. – Onun geleceğini biliyorum.\"},{\"word\":\"weil\",\"meaning\":\"çünkü\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Yağmur yağdığı için evde kalıyorum.\"},{\"word\":\"damit\",\"meaning\":\"-mesi için\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Almanya’da çalışabilmek için Almanca öğreniyorum.\"},{\"word\":\"ob\",\"meaning\":\"olup olmadığını\",\"example\":\"Ich weiß nicht, ob er kommt. – Onun gelip gelmeyeceğini bilmiyorum.\"}]","study.tip":"{\"text\":\"dass yan cümlesinde çekimli fiil sona gider.\"}","study.important":"[\"dass bir bağlaçtır; das artikel veya zamir olabilir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: dass: individual full-card repair of lv; study.examples.lv; study.comparison; study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "-diğini/-dığını • ki",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "-diğini/-dığını • ki",
    "explanation": [
      "Ana fikir: dass, bir olguyu, düşünceyi veya söyleneni aktaran yan cümleyi başlatır.",
      "dass yan cümlesinde çekimli fiil genellikle sonda bulunur."
    ],
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Yorgun olduğunu biliyorum."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "O, geleceğini söylüyor."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Bunun doğru olduğunu düşünüyorum."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "-diğini/-dığını; ki",
        "example": "Ich weiß, dass er kommt. – Onun geleceğini biliyorum."
      },
      {
        "word": "weil",
        "meaning": "çünkü",
        "example": "Ich bleibe zu Hause, weil es regnet. – Yağmur yağdığı için evde kalıyorum."
      },
      {
        "word": "damit",
        "meaning": "-mesi için",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Almanya’da çalışabilmek için Almanca öğreniyorum."
      },
      {
        "word": "ob",
        "meaning": "olup olmadığını",
        "example": "Ich weiß nicht, ob er kommt. – Onun gelip gelmeyeceğini bilmiyorum."
      }
    ],
    "tip": {
      "text": "dass yan cümlesinde çekimli fiil sona gider."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "dass bir bağlaçtır; das artikel veya zamir olabilir."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dass",
  "lv": "O",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "O",
    "explanation": "Bir olguyu, düşünceyi veya ifadeyi ifade eden yardımcı bir madde getirir.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Yorgun olduğunu biliyorum."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Geleceğini söylüyor."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Bence bu doğru."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "O",
        "example": "Ich weiß, dass er kommt. – Geleceğini biliyorum."
      },
      {
        "word": "weil",
        "meaning": "Çünkü • Çünkü",
        "example": "Ich bleibe zu Hause, weil es regnet. – Yağmur yağdığı için evde kalıyorum."
      },
      {
        "word": "damit",
        "meaning": "Aşağı",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Almanya'da çalışabilmek için Almanca öğreniyorum."
      },
      {
        "word": "ob",
        "meaning": "Veya",
        "example": "Ich weiß nicht, ob er kommt. – Gelip gelmeyeceğini bilmiyorum."
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
          ]
        }
      ]
    },
    "important": [
      "Dass \"o\" anlamına gelir ve bir yardımcı madde ekler.",
      "Bir makale veya \"bu\" olabilen Das ile karıştırılmamalıdır."
    ]
  }
}
```

---

## Finding 6

**Audit ID:** `LRB101-0006`
**Finding Stable ID:** `g2/a1/tr|der|idx:134|lv; study.translation; study.examples.lv; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `der|idx:134`
**Field / path:** `lv; study.translation; study.examples.lv; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Belirli bir erkek cinsi türü","study.translation":"Belirli bir erkek cinsi türü","study.examples.lv":null,"study.important":"[\"A1 düzeyinde öncelikle erkek makale olarak çalışmalısınız.\",\"Göreceli zamirler ve uygulamalar daha sonra ortaya çıkar.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"eril belirli artikel","study.translation":"eril belirli artikel","study.explanation":"[\"Ana fikir: der, eril tekil isimlerin nominatif hâlde belirli artikelidir.\",\"der daha ileri yapılarda zamir veya ilgi zamiri olarak da kullanılabilir.\"]","study.examples":"[{\"de\":\"Der Mann ist hier.\",\"lv\":\"Adam burada.\"},{\"de\":\"Der Bus kommt.\",\"lv\":\"Otobüs geliyor.\"},{\"de\":\"Der Lehrer spricht.\",\"lv\":\"Öğretmen konuşuyor.\"}]","study.tip":"{\"text\":\"Eril tekil, Nominativ → der.\"}","study.important":"[\"A1 düzeyinde önce der = eril belirli artikel olarak öğrenilir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: der: individual full-card repair of lv; study.translation; study.examples.lv; study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "der",
  "lv": "eril belirli artikel",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "eril belirli artikel",
    "explanation": [
      "Ana fikir: der, eril tekil isimlerin nominatif hâlde belirli artikelidir.",
      "der daha ileri yapılarda zamir veya ilgi zamiri olarak da kullanılabilir."
    ],
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Adam burada."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Otobüs geliyor."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Öğretmen konuşuyor."
      }
    ],
    "tip": {
      "text": "Eril tekil, Nominativ → der."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "A1 düzeyinde önce der = eril belirli artikel olarak öğrenilir."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "der",
  "lv": "Belirli bir erkek cinsi türü",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "Belirli bir erkek cinsi türü",
    "explanation": "Eril isimlerle birlikte kullanılır. Bazı cümlelerde \"der\" zamiri veya ilgi zamiri olarak da işlev görebilir.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Bu adam burada."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Otobüs geliyor."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Öğretmen konuşur."
      }
    ],
    "tip": {
      "text": "Unutmayın: erkek tipi → der."
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
      "A1 düzeyinde öncelikle erkek makale olarak çalışmalısınız.",
      "Göreceli zamirler ve uygulamalar daha sonra ortaya çıkar."
    ]
  }
}
```

---

## Finding 7

**Audit ID:** `LRB101-0007`
**Finding Stable ID:** `g2/a1/tr|die|idx:137|lv; study.translation; study.examples.lv; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `die|idx:137`
**Field / path:** `lv; study.translation; study.examples.lv; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kadına özel eşya","study.translation":"Kadına özel eşya","study.examples.lv":null,"study.important":"[\"A1 seviyesinde küp ilk olarak kadın eşyası olarak incelenir.\",\"Çoğul aynı zamanda tüm cinsiyetler için de kullanılır.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"dişil belirli artikel","study.translation":"dişil belirli artikel","study.explanation":"[\"Ana fikir: die, dişil tekil isimlerin belirli artikelidir.\",\"die ayrıca bütün cinsiyetlerin çoğulunda kullanılır ve bazı yapılarda zamir olabilir.\"]","study.examples":"[{\"de\":\"Die Frau ist hier.\",\"lv\":\"Kadın burada.\"},{\"de\":\"Die Katze schläft.\",\"lv\":\"Kedi uyuyor.\"},{\"de\":\"Die Lehrerin erklärt.\",\"lv\":\"Kadın öğretmen açıklıyor.\"}]","study.tip":"{\"text\":\"Dişil tekil ve bütün çoğullar → die.\"}","study.important":"[\"die dişil tekili veya çoğulu gösterebilir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: die: individual full-card repair of lv; study.translation; study.examples.lv; study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "die",
  "lv": "dişil belirli artikel",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "dişil belirli artikel",
    "explanation": [
      "Ana fikir: die, dişil tekil isimlerin belirli artikelidir.",
      "die ayrıca bütün cinsiyetlerin çoğulunda kullanılır ve bazı yapılarda zamir olabilir."
    ],
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Kadın burada."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Kedi uyuyor."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Kadın öğretmen açıklıyor."
      }
    ],
    "tip": {
      "text": "Dişil tekil ve bütün çoğullar → die."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "die dişil tekili veya çoğulu gösterebilir."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "die",
  "lv": "Kadına özel eşya",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "Kadına özel eşya",
    "explanation": "Dişi isimlerle birlikte kullanılır. Bazı cümlelerde \"ölmek\" zamir veya ilgi zamiri olarak da işlev görebilir.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Kadın burada."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Yavru kedi uyuyor."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "– öğretmen açıklıyor."
      }
    ],
    "tip": {
      "text": "Unutmayın: kadınlık → ölür."
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
      "A1 seviyesinde küp ilk olarak kadın eşyası olarak incelenir.",
      "Çoğul aynı zamanda tüm cinsiyetler için de kullanılır."
    ]
  }
}
```

---

## Finding 8

**Audit ID:** `LRB101-0008`
**Finding Stable ID:** `g2/a1/tr|dieser|idx:139|lv; study.translation; study.examples.lv; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `dieser|idx:139`
**Field / path:** `lv; study.translation; study.examples.lv; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bu mu?","study.translation":"Bu mu?","study.examples.lv":null,"study.important":"[\"Dieser, diese ve diese cinsiyete göre değişir.\",\"Çoğulu yine diese'dir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bu","study.translation":"bu","study.explanation":"[\"Ana fikir: dieser, belirli veya özellikle vurgulanan eril bir kişi ya da şeyi gösterir.\",\"Biçimi cinsiyet, sayı ve hâle göre değişir: dieser, diese, dieses, diesen.\"]","study.examples":"[{\"de\":\"Dieser Mann ist nett.\",\"lv\":\"Bu adam nazik.\"},{\"de\":\"Ich sehe diesen Hund.\",\"lv\":\"Bu köpeği görüyorum.\"},{\"de\":\"Dieser Stift ist neu.\",\"lv\":\"Bu kalem yeni.\"}]","study.tip":"{\"text\":\"Eril Nominativ → dieser; eril Akkusativ → diesen.\"}","study.important":"[\"dieser çekimlenir; biçim ismin cinsiyetine ve hâline bağlıdır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: dieser: individual full-card repair of lv; study.translation; study.examples.lv; study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dieser",
  "lv": "bu",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "bu",
    "explanation": [
      "Ana fikir: dieser, belirli veya özellikle vurgulanan eril bir kişi ya da şeyi gösterir.",
      "Biçimi cinsiyet, sayı ve hâle göre değişir: dieser, diese, dieses, diesen."
    ],
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Bu adam nazik."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Bu köpeği görüyorum."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "Bu kalem yeni."
      }
    ],
    "tip": {
      "text": "Eril Nominativ → dieser; eril Akkusativ → diesen."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "dieser çekimlenir; biçim ismin cinsiyetine ve hâline bağlıdır."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dieser",
  "lv": "Bu mu?",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "Bu mu?",
    "explanation": "Yakındaki bir kişiyi, nesneyi veya hayvanı belirtir. Erkeksi bir isimle kullanılır.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Bu adam hoş."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Bu köpeği sevdim"
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "Bu kalem yeni."
      }
    ],
    "tip": {
      "text": "Unutmayın: o + erkeksi → öldürücü."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "Dieser"
            ]
          },
          "lv": {}
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
        "left": {}
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
            "Dieser"
          ]
        },
        {
          "red": [
            "diese"
          ]
        }
      ]
    },
    "important": [
      "Dieser, diese ve diese cinsiyete göre değişir.",
      "Çoğulu yine diese'dir."
    ]
  }
}
```

---

## Finding 9

**Audit ID:** `LRB101-0009`
**Finding Stable ID:** `g2/a1/tr|ein|idx:154|study.explanation, study.translation|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `ein|idx:154`
**Field / path:** `study.explanation, study.translation`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Ana fikir: ein belirsiz bir makale.\",\"ein erkek ve nötr cinsiyet isimlerinin nominatif halinde belirsiz bir makale.\",\"ein erkek cinsiyet kullanılır: ein Mann.\",\"ein nötr cinsiyet kullanılır: ein Buch.\",\"Kadın cinsiyet için şunu kullanın: eine.\",\"Yükleme halinde erkek cinsiyet: einen.\"]","study.translation":"Belirsiz artikel • Bir • Birisi"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"belirsiz artikel","study.translation":"belirsiz artikel","study.explanation":"[\"Ana fikir: ein, eril ve nötr isimlerle kullanılan belirsiz artikeldir.\",\"Dişil biçim eine, eril Akkusativ biçim einen olur.\",\"ein her zaman sayı “bir” anlamını vurgulamaz.\"]","study.examples":"[{\"de\":\"Ein Mann wartet draußen.\",\"lv\":\"Dışarıda bir adam bekliyor.\"},{\"de\":\"Ich habe ein Buch.\",\"lv\":\"Bir kitabım var.\"},{\"de\":\"Er sucht einen Stift.\",\"lv\":\"Bir kalem arıyor.\"},{\"de\":\"Ein Kind spielt.\",\"lv\":\"Bir çocuk oynuyor.\"}]","study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"eril cinsiyet\",\"example\":\"Ein Mann wartet draußen. – Dışarıda bir adam bekliyor.\"},{\"word\":\"eine Frau\",\"meaning\":\"dişil cinsiyet\",\"example\":\"eine Frau – bir kadın\"},{\"word\":\"ein Buch\",\"meaning\":\"nötr cinsiyet\",\"example\":\"Ich habe ein Buch. – Bir kitabım var.\"},{\"word\":\"einen Mann\",\"meaning\":\"eril Akkusativ\",\"example\":\"einen Mann – bir adamı\"}]","study.tip":"{\"text\":\"ein yalnızca sayı değildir; çoğu zaman belirsiz artikeldir.\"}","study.important":"[\"ein: eril/nötr; eine: dişil; einen: eril Akkusativ.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: ein: individual full-card repair of study.explanation, study.translation; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "belirsiz artikel",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "belirsiz artikel",
    "explanation": [
      "Ana fikir: ein, eril ve nötr isimlerle kullanılan belirsiz artikeldir.",
      "Dişil biçim eine, eril Akkusativ biçim einen olur.",
      "ein her zaman sayı “bir” anlamını vurgulamaz."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Dışarıda bir adam bekliyor."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Bir kitabım var."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Bir kalem arıyor."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Bir çocuk oynuyor."
      }
    ],
    "tip": {
      "text": "ein yalnızca sayı değildir; çoğu zaman belirsiz artikeldir."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "ein: eril/nötr; eine: dişil; einen: eril Akkusativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "eril cinsiyet",
        "example": "Ein Mann wartet draußen. – Dışarıda bir adam bekliyor."
      },
      {
        "word": "eine Frau",
        "meaning": "dişil cinsiyet",
        "example": "eine Frau – bir kadın"
      },
      {
        "word": "ein Buch",
        "meaning": "nötr cinsiyet",
        "example": "Ich habe ein Buch. – Bir kitabım var."
      },
      {
        "word": "einen Mann",
        "meaning": "eril Akkusativ",
        "example": "einen Mann – bir adamı"
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ein",
  "lv": "Belirsiz artikel • Bir • Birisi",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Belirsiz artikel • Bir • Birisi",
    "explanation": [
      "Ana fikir: ein belirsiz bir makale.",
      "ein erkek ve nötr cinsiyet isimlerinin nominatif halinde belirsiz bir makale.",
      "ein erkek cinsiyet kullanılır: ein Mann.",
      "ein nötr cinsiyet kullanılır: ein Buch.",
      "Kadın cinsiyet için şunu kullanın: eine.",
      "Yükleme halinde erkek cinsiyet: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Dışarıda bir adam bekliyor."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Bir kitabım var."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Bir kalem arıyor."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Çocuk oynuyor."
      }
    ],
    "tip": {
      "text": "Unutmayın: belirsiz biri/birisi → ein."
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
            "der",
            "die",
            "das"
          ],
          "green": [
            "Konu"
          ]
        }
      ]
    },
    "important": [
      "Ein kesin bir artikel değildir.",
      "Konu zaten somut olarak biliniyorsa der, die veya das'a sıklıkla ihtiyaç duyulur.",
      "eine — kadın cinsiyeti.",
      "einen — yükleme hali."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "erkek cinsiyeti",
        "example": "Dışarıda bir erkek bekliyor."
      },
      {
        "word": "eine Frau",
        "meaning": "kadın cinsiyeti",
        "example": "eine Frau"
      },
      {
        "word": "ein Buch",
        "meaning": "nötr cinsiyeti",
        "example": "Ich habe ein Buch."
      },
      {
        "word": "einen Mann",
        "meaning": "yükleme hali",
        "example": "einen Mann"
      }
    ]
  }
}
```

---

## Finding 10

**Audit ID:** `LRB101-0010`
**Finding Stable ID:** `g2/a1/tr|einmal|idx:700|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `einmal|idx:700`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bir kez • Bir kez","study.translation":"Bir kez • Bir kez","study.explanation":"[\"Ana fikir: Zamanı veya geçmişi ifade eder (Ben bir zamanlar...).\",\"Einmal temel olarak şu anlama gelir: bir kez/geçmişte.\",\"Genellikle şu şekilde karakterize edilir: hava koşulları.\",\"Einmal, belirli bir zamanı veya geçmişi ifade eder (bir kez...).\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Bir zamanlar Berlin'deydim.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Bir zamanlar Berlin'deydim.\"}]","study.tip":"[\"Einmal = bir kez\",\"Bağlam bu anlama uygun olduğunda einmal kullanın.\"]","study.important":"[\"Einmal = geçmişte bir veya bir kez.\",\"Zamanı veya geçmişi ifade eder (Ben bir zamanlar...).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bir kez • bir zamanlar","study.translation":"bir kez • bir zamanlar","study.explanation":"[\"Ana fikir: einmal, bir olayın bir kez olduğunu veya geçmişte belirsiz bir zamanı anlatır.\",\"Konuşma dilinde kısalmış biçimi mal olabilir.\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Bir zamanlar Berlin’deydim.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Bir zamanlar Berlin’deydim.\"}]","study.tip":"[\"Tekrar sayısı → bir kez; geçmişte belirsiz zaman → bir zamanlar.\"]","study.important":"[\"einmal = bir kez / bir zamanlar.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: einmal: individual full-card repair of lv/study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "bir kez • bir zamanlar",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "bir kez • bir zamanlar",
    "explanation": [
      "Ana fikir: einmal, bir olayın bir kez olduğunu veya geçmişte belirsiz bir zamanı anlatır.",
      "Konuşma dilinde kısalmış biçimi mal olabilir."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Bir zamanlar Berlin’deydim."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Bir zamanlar Berlin’deydim."
      }
    ],
    "tip": [
      "Tekrar sayısı → bir kez; geçmişte belirsiz zaman → bir zamanlar."
    ],
    "important": [
      "einmal = bir kez / bir zamanlar."
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
  "lv": "Bir kez • Bir kez",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Bir kez • Bir kez",
    "explanation": [
      "Ana fikir: Zamanı veya geçmişi ifade eder (Ben bir zamanlar...).",
      "Einmal temel olarak şu anlama gelir: bir kez/geçmişte.",
      "Genellikle şu şekilde karakterize edilir: hava koşulları.",
      "Einmal, belirli bir zamanı veya geçmişi ifade eder (bir kez...)."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Bir zamanlar Berlin'deydim."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Bir zamanlar Berlin'deydim."
      }
    ],
    "tip": [
      "Einmal = bir kez",
      "Bağlam bu anlama uygun olduğunda einmal kullanın."
    ],
    "important": [
      "Einmal = geçmişte bir veya bir kez.",
      "Zamanı veya geçmişi ifade eder (Ben bir zamanlar...)."
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

## Finding 11

**Audit ID:** `LRB101-0011`
**Finding Stable ID:** `g2/a1/tr|Eis|idx:157|study.translation, study.examples, study.comparison|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `Eis|idx:157`
**Field / path:** `study.translation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Dondurma • Dondurma","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"Dondurma yerim\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"Dondurma istiyorsun\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"Kışın gölde buz var.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"Buz soğuk.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"Biraz çikolatalı dondurma istiyorum.\"}]","study.comparison":"[{\"word\":\"das Eis\",\"meaning\":\"Dondurma / dondurma\",\"example\":\"Ich esse ein Eis. = Dondurma yiyorum.\"},{\"word\":\"der Schnee\",\"meaning\":\"Kar yağacak\",\"example\":\"Der Schnee ist weiß. = Kar beyazdır.\"},{\"word\":\"kalt\",\"meaning\":\"Soğuk\",\"example\":\"Das Wasser ist kalt. = Su soğuktur.\"},{\"word\":\"das Dessert\",\"meaning\":\"Tatlı\",\"example\":\"Eis ist ein Dessert. = Dondurma bir tatlıdır.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"buz • dondurma","study.translation":"buz • dondurma","study.explanation":"[\"Ana fikir: das Eis hem donmuş suyu hem de dondurmayı ifade edebilir.\",\"Yiyecek bağlamında dondurma, kış veya donmuş su bağlamında buz anlamına gelir.\"]","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"Bir dondurma yiyorum.\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"Dondurma ister misin?\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"Kışın gölün üzerinde buz olur.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"Buz soğuk.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"Çikolatalı bir dondurma alıyorum.\"}]","study.comparison":"[{\"word\":\"das Eis\",\"meaning\":\"buz / dondurma\",\"example\":\"Ich esse ein Eis. = Dondurma yiyorum.\"},{\"word\":\"der Schnee\",\"meaning\":\"kar\",\"example\":\"Der Schnee ist weiß. = Kar beyazdır.\"},{\"word\":\"kalt\",\"meaning\":\"soğuk\",\"example\":\"Das Wasser ist kalt. = Su soğuktur.\"},{\"word\":\"das Dessert\",\"meaning\":\"tatlı\",\"example\":\"Eis ist ein Dessert. = Dondurma bir tatlıdır.\"}]","study.tip":"{\"text\":\"Yiyecek → dondurma; donmuş su → buz.\"}","study.important":"[\"das Eis bağlama göre buz veya dondurma demektir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: Eis: individual full-card repair of study.translation, study.examples, study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "buz • dondurma",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "buz • dondurma",
    "explanation": [
      "Ana fikir: das Eis hem donmuş suyu hem de dondurmayı ifade edebilir.",
      "Yiyecek bağlamında dondurma, kış veya donmuş su bağlamında buz anlamına gelir."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Bir dondurma yiyorum."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Dondurma ister misin?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Kışın gölün üzerinde buz olur."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Buz soğuk."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Çikolatalı bir dondurma alıyorum."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "buz / dondurma",
        "example": "Ich esse ein Eis. = Dondurma yiyorum."
      },
      {
        "word": "der Schnee",
        "meaning": "kar",
        "example": "Der Schnee ist weiß. = Kar beyazdır."
      },
      {
        "word": "kalt",
        "meaning": "soğuk",
        "example": "Das Wasser ist kalt. = Su soğuktur."
      },
      {
        "word": "das Dessert",
        "meaning": "tatlı",
        "example": "Eis ist ein Dessert. = Dondurma bir tatlıdır."
      }
    ],
    "tip": {
      "text": "Yiyecek → dondurma; donmuş su → buz."
    },
    "important": [
      "das Eis bağlama göre buz veya dondurma demektir."
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
      "tip": {},
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
  "de": "Eis",
  "de_article": "das",
  "lv": "Dondurma • Dondurma",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Dondurma • Dondurma",
    "explanation": [
      "Ana fikir: das Eis hem dondurma hem de gelato anlamına gelebilir.",
      "Letonca soğuk, donmuş sudan bahsederken genellikle \"buz\" der.",
      "Yemek ya da tatlı söz konusu olduğunda das Eis, günlük yaşamda çoğunlukla dondurma anlamına gelir.",
      "Bağlam genellikle size amaçlanan anlamın ne olduğunu hemen söyler.",
      "A1 düzeyinde en önemli ifadeler ein Eis essen ve Eis im Glas'tır."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Dondurma yerim"
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Dondurma istiyorsun"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Kışın gölde buz var."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Buz soğuk."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Biraz çikolatalı dondurma istiyorum."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Dondurma / dondurma",
        "example": "Ich esse ein Eis. = Dondurma yiyorum."
      },
      {
        "word": "der Schnee",
        "meaning": "Kar yağacak",
        "example": "Der Schnee ist weiß. = Kar beyazdır."
      },
      {
        "word": "kalt",
        "meaning": "Soğuk",
        "example": "Das Wasser ist kalt. = Su soğuktur."
      },
      {
        "word": "das Dessert",
        "meaning": "Tatlı",
        "example": "Eis ist ein Dessert. = Dondurma bir tatlıdır."
      }
    ],
    "tip": {
      "text": "Unutmayın: yiyecek → buz • Kış/su → buz."
    },
    "important": [
      "Dondurma ve gelato Letonca'da iki farklı kelimedir, ancak Almanca das Eis'te her iki kelime de sıklıkla kullanılır.",
      "Bağlam önemlidir: Yiyecek dondurma anlamına gelir, soğuk bir yüzey veya su buz anlamına gelir."
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
              "kar"
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

## Finding 12

**Audit ID:** `LRB101-0012`
**Finding Stable ID:** `g2/a1/tr|erst|idx:165|study.examples, study.comparison|EXAMPLE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `erst|idx:165`
**Field / path:** `study.examples, study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Erst lernen, dann spielen.\",\"lv\":\"Önce iç, sonra sür.\"},{\"de\":\"Ich komme erst morgen.\",\"lv\":\"Yarına kadar orada olmayacağım.\"},{\"de\":\"Er ist erst 18 Jahre alt.\",\"lv\":\"O sadece 18 yaşında.\"},{\"de\":\"Wir essen erst um acht Uhr.\",\"lv\":\"Saat sekize kadar yemek yemiyoruz.\"}]","study.comparison":"[{\"word\":\"erst\",\"meaning\":\"İlk • Yalnızca\",\"example\":\"Erst lernen, dann spielen. – Önce duraklatın. = Önce verilir, sonra ara verilir.\"},{\"word\":\"zuerst\",\"meaning\":\"İlk • Başlangıçta\",\"example\":\"Zuerst frühstücken wir. = Önce kahvaltı yapıyoruz.\"},{\"word\":\"nur\",\"meaning\":\"Sadece\",\"example\":\"Ich habe nur 5 Euro. = Sadece 5 euro'um var.\"},{\"word\":\"dann\",\"meaning\":\"Sonra\",\"example\":\"Dann gehen wir nach Hause. = Sonra eve gideceğiz.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ancak • önce","study.translation":"ancak • önce","study.explanation":"[\"Ana fikir: erst çoğunlukla “ancak / daha” anlamıyla beklenenden geç bir zamanı veya sınırlı bir sayıyı belirtir.\",\"Sıralamada “önce” anlamına da gelebilir; zuerst özellikle ilk adımı, nur ise yalnızca miktar sınırlamasını anlatır.\"]","study.examples":"[{\"de\":\"Erst lernen, dann spielen.\",\"lv\":\"Önce ders çalış, sonra oyna.\"},{\"de\":\"Ich komme erst morgen.\",\"lv\":\"Ancak yarın geleceğim.\"},{\"de\":\"Er ist erst 18 Jahre alt.\",\"lv\":\"O daha 18 yaşında.\"},{\"de\":\"Wir essen erst um acht Uhr.\",\"lv\":\"Ancak saat sekizde yemek yiyoruz.\"}]","study.comparison":"[{\"word\":\"erst\",\"meaning\":\"önce / ancak\",\"example\":\"Erst lernen, dann spielen. – Önce ders çalış, sonra oyna.\"},{\"word\":\"zuerst\",\"meaning\":\"ilk önce\",\"example\":\"Zuerst frühstücken wir. = İlk önce kahvaltı yapıyoruz.\"},{\"word\":\"nur\",\"meaning\":\"yalnızca\",\"example\":\"Ich habe nur 5 Euro. = Yalnızca 5 avrom var.\"},{\"word\":\"dann\",\"meaning\":\"sonra\",\"example\":\"Dann gehen wir nach Hause. = Sonra eve gidiyoruz.\"}]","study.tip":"{\"text\":\"Zaman veya ulaşılan nokta → erst; yalnızca miktar → nur.\"}","study.important":"[\"erst ve zuerst tam eş anlamlı değildir.\"]","study.accents":{},"study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: erst: individual full-card repair of study.examples, study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "ancak • önce",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "ancak • önce",
    "explanation": [
      "Ana fikir: erst çoğunlukla “ancak / daha” anlamıyla beklenenden geç bir zamanı veya sınırlı bir sayıyı belirtir.",
      "Sıralamada “önce” anlamına da gelebilir; zuerst özellikle ilk adımı, nur ise yalnızca miktar sınırlamasını anlatır."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Önce ders çalış, sonra oyna."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Ancak yarın geleceğim."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "O daha 18 yaşında."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Ancak saat sekizde yemek yiyoruz."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "önce / ancak",
        "example": "Erst lernen, dann spielen. – Önce ders çalış, sonra oyna."
      },
      {
        "word": "zuerst",
        "meaning": "ilk önce",
        "example": "Zuerst frühstücken wir. = İlk önce kahvaltı yapıyoruz."
      },
      {
        "word": "nur",
        "meaning": "yalnızca",
        "example": "Ich habe nur 5 Euro. = Yalnızca 5 avrom var."
      },
      {
        "word": "dann",
        "meaning": "sonra",
        "example": "Dann gehen wir nach Hause. = Sonra eve gidiyoruz."
      }
    ],
    "tip": {
      "text": "Zaman veya ulaşılan nokta → erst; yalnızca miktar → nur."
    },
    "accents": {},
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "erst ve zuerst tam eş anlamlı değildir."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "erst",
  "lv": "İlk • Yalnızca",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "İlk • Yalnızca",
    "explanation": [
      "Ana fikir: erst çoğu zaman yalnızca anlamına gelir. Ancak belirli bağlamlarda ilk anlamı da olabilir.",
      "erst genellikle bir şeyin beklenenden daha sonra gerçekleştiğini gösterir.",
      "Ich bin erst 18. — Sadece 18 yaşındayım.",
      "Es ist erst Montag. — Sadece pazartesidir.",
      "Erst lernen, dann spielen. — Önce öğren, sonra oyna."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Önce iç, sonra sür."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Yarına kadar orada olmayacağım."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "O sadece 18 yaşında."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Saat sekize kadar yemek yemiyoruz."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "İlk • Yalnızca",
        "example": "Erst lernen, dann spielen. – Önce duraklatın. = Önce verilir, sonra ara verilir."
      },
      {
        "word": "zuerst",
        "meaning": "İlk • Başlangıçta",
        "example": "Zuerst frühstücken wir. = Önce kahvaltı yapıyoruz."
      },
      {
        "word": "nur",
        "meaning": "Sadece",
        "example": "Ich habe nur 5 Euro. = Sadece 5 euro'um var."
      },
      {
        "word": "dann",
        "meaning": "Sonra",
        "example": "Dann gehen wir nach Hause. = Sonra eve gideceğiz."
      }
    ],
    "tip": {
      "text": "Atceries: laiks/skaits → erst • Daudzumlar → nur."
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
      "Erst ve Nur kulağa \"adil\" gibi gelebilir ama aynı şey değiller.",
      "İlki sıklıkla zamandan, sıralamadan ya da bir noktaya ulaşmaktan bahseder. • Nur miktarı sınırlar.",
      "zuerst genellikle anlamına gelir: ilk olarak."
    ]
  }
}
```

---

## Finding 13

**Audit ID:** `LRB101-0013`
**Finding Stable ID:** `g2/a1/tr|es|idx:167|study.translation, study.examples|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `es|idx:167`
**Field / path:** `study.translation, study.examples`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Kime • Kime • Kişisel olmayan form","study.examples":"[{\"de\":\"Es regnet.\",\"lv\":\"Almanca öğreniyorum.\"},{\"de\":\"Es ist kalt.\",\"lv\":\"Yorgun.\"},{\"de\":\"Das Kind schläft.\",\"lv\":\"Burada çalışıyor.\"},{\"de\":\"Es ist müde.\",\"lv\":\"Bu benim kitabım.\"},{\"de\":\"Es regnet.\",\"lv\":\"Yağmur yağıyor\"},{\"de\":\"Es schneit.\",\"lv\":\"Kar yağıyor\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"o • bu • kişisiz zamir","study.translation":"o • bu • kişisiz zamir","study.explanation":"[\"Ana fikir: es, nötr isimlerin yerini tutan veya kişisiz yapılarda kullanılan bir zamirdir.\",\"Hava ve durum cümlelerinde Türkçeye ayrı bir sözcük olarak çevrilmeyebilir.\"]","study.examples":"[{\"de\":\"Es regnet.\",\"lv\":\"Yağmur yağıyor.\"},{\"de\":\"Es ist kalt.\",\"lv\":\"Hava soğuk.\"},{\"de\":\"Das Kind schläft.\",\"lv\":\"Çocuk uyuyor.\"},{\"de\":\"Es ist müde.\",\"lv\":\"O yorgun.\"}]","study.comparison":"[{\"word\":\"es\",\"meaning\":\"o / bu; kişisiz biçim\",\"example\":\"Es regnet. – Yağmur yağıyor.\"},{\"word\":\"ich\",\"meaning\":\"ben; birinci kişi\",\"example\":\"Ich lerne Deutsch. – Almanca öğreniyorum.\"}]","study.info":"[\"Türkçedeki “ben” = Almanca ich\",\"Almanca es = “o / bu” veya kişisiz yapı\"]","study.tip":"{\"text\":\"Türkçedeki “ben” Almanca ich’tir; Almanca es değildir.\"}","study.important":"[\"es ve ich aynı değildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"info":[{},{}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: es: individual full-card repair of study.translation, study.examples; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "o • bu • kişisiz zamir",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "o • bu • kişisiz zamir",
    "explanation": [
      "Ana fikir: es, nötr isimlerin yerini tutan veya kişisiz yapılarda kullanılan bir zamirdir.",
      "Hava ve durum cümlelerinde Türkçeye ayrı bir sözcük olarak çevrilmeyebilir."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Yağmur yağıyor."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Hava soğuk."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Çocuk uyuyor."
      },
      {
        "de": "Es ist müde.",
        "lv": "O yorgun."
      }
    ],
    "info": [
      "Türkçedeki “ben” = Almanca ich",
      "Almanca es = “o / bu” veya kişisiz yapı"
    ],
    "tip": {
      "text": "Türkçedeki “ben” Almanca ich’tir; Almanca es değildir."
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
      "tip": {},
      "important": [
        {}
      ]
    },
    "important": [
      "es ve ich aynı değildir."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "o / bu; kişisiz biçim",
        "example": "Es regnet. – Yağmur yağıyor."
      },
      {
        "word": "ich",
        "meaning": "ben; birinci kişi",
        "example": "Ich lerne Deutsch. – Almanca öğreniyorum."
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "es",
  "lv": "Kime • Kime • Kişisel olmayan form",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Kime • Kime • Kişisel olmayan form",
    "explanation": [
      "Ana fikir: es bir zamirdir.",
      "Kullanıldığı: bu, kişisiz yapılarda."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Almanca öğreniyorum."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Yorgun."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Burada çalışıyor."
      },
      {
        "de": "Es ist müde.",
        "lv": "Bu benim kitabım."
      },
      {
        "de": "Es regnet.",
        "lv": "Yağmur yağıyor"
      },
      {
        "de": "Es schneit.",
        "lv": "Kar yağıyor"
      }
    ],
    "info": [
      "Łotewskie „es” = niemieckie „ich”",
      "Almanca \"I\" = bu • Yani • kişisel olmayan biçim"
    ],
    "tip": {
      "text": "Unutmayın: Letonca \"es\" → ich, Almanca es değil."
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
            "ich"
          ],
          "blue": [
            "es"
          ]
        }
      ]
    },
    "important": [
      "Alman \"ben\"i Letonya \"ben\"i değil.",
      "Letonca \"I\" Almanca'da ich'dir. • Almanca es genellikle şu/bunlar anlamına gelir veya tercüme edilmez.",
      "Letonca 'es' Almanca'da ich olur; Almanca es genellikle bu anlamına gelir veya çevrilmez."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "bu • kişisiz yapı",
        "example": "Es regnet. – Yağmur yağıyor."
      },
      {
        "word": "ich",
        "meaning": "es (kişi)",
        "example": "Ich lerne Deutsch. – Almanca öğreniyorum."
      }
    ]
  }
}
```

---

## Finding 14

**Audit ID:** `LRB101-0014`
**Finding Stable ID:** `g2/a1/tr|essen|idx:690|lv; study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `essen|idx:690`
**Field / path:** `lv; study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Yemek yemek","study.translation":"Yemek yemek","study.explanation[]":null,"study.examples[].lv":null,"study.tip[]":null,"study.important[]":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"yemek","study.translation":"yemek","study.explanation":"[\"Ana fikir: essen, yiyecek tüketme eylemini anlatan fiildir.\",\"Büyük harfle ve artikel ile das Essen ise yemek veya öğün anlamındaki isimdir.\"]","study.examples":"[{\"de\":\"Ich esse gern Pizza.\",\"lv\":\"Pizza yemeyi severim.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Ne yemek istiyorsunuz?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Saat 12’de yemek yiyoruz.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Yemek hazır.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Yemeğin tadı çok güzel.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Yemeğin tadı güzel.\"}]","study.tip":"[\"Fiil → essen; isim → das Essen.\"]","study.important":"[\"essen artikelsiz fiildir; das Essen isimdir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: essen: individual full-card repair of lv; study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "essen",
  "lv": "yemek",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "yemek",
    "explanation": [
      "Ana fikir: essen, yiyecek tüketme eylemini anlatan fiildir.",
      "Büyük harfle ve artikel ile das Essen ise yemek veya öğün anlamındaki isimdir."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Pizza yemeyi severim."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Ne yemek istiyorsunuz?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Saat 12’de yemek yiyoruz."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Yemek hazır."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Yemeğin tadı çok güzel."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Yemeğin tadı güzel."
      }
    ],
    "tip": [
      "Fiil → essen; isim → das Essen."
    ],
    "important": [
      "essen artikelsiz fiildir; das Essen isimdir."
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
  "de": "essen",
  "lv": "Yemek yemek",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "Yemek yemek",
    "explanation": [
      "Ana fikir: Fiil – yemek.",
      "Essen her şeyden önce yemek yemek demektir.",
      "Çoğunlukla şunu tanımlar: eylem.",
      "Essen temel olarak şu anlama gelir: yiyecek veya yemek.",
      "Genellikle şöyle tanımlanır: yağmur.",
      "Essen yemek demektir.",
      "Das Essen genel olarak yiyecek veya yemek anlamına gelebilir."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Pizza yemeyi severim."
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
        "lv": "Yemek hazır."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Yemeğin tadı çok güzel."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Yemeğin tadı güzel."
      }
    ],
    "tip": [
      "Essen = yemek",
      "Bağlam bu anlama uygun olduğunda essen kullanın."
    ],
    "important": [
      "Essen artikelsiz bir fiildir.",
      "Das Essen, Essen ile aynı şey değil.",
      "Eylem: essen.",
      "Vaka/yemek: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "essen"
        ],
        "blue": [
          "essen"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "esse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
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
            "essen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 15

**Audit ID:** `LRB101-0015`
**Finding Stable ID:** `g2/a1/tr|Essen|idx:691|lv, study.translation, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Essen|idx:691`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Yiyecek • Yemek","study.translation":"Yiyecek • Yemek","study.explanation":"[\"Ana fikir: İsim – yiyecek veya bütün bir öğün.\",\"Das Essen her şeyden önce yemek yemek anlamına gelir.\",\"Çoğunlukla şunu tanımlar: eylem.\",\"Das Essen temel olarak şu anlama gelir: yiyecek veya yemek.\",\"Genellikle şöyle tanımlanır: yağmur.\",\"Essen yemek demektir.\",\"Das Essen genel olarak yiyecek veya yemek anlamına gelebilir.\"]","study.examples":"[{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Yemeğin tadı güzel.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Ne yemek istersin?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Saat 12.00'de yemek yiyoruz.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Yemek hazır.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Yemeğin tadı çok güzel.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Yemeğin tadı güzel.\"}]","study.tip":"[\"Das Essen = yemek\",\"Bağlam anlama uyduğunda da Essen kullanın.\"]","study.important":"[\"Essen artikelsiz bir fiildir.\",\"Das Essen, Essen ile aynı şey değil.\",\"Eylem: essen.\",\"Vaka/yemek: das Essen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"yemek • öğün","study.translation":"yemek • öğün","study.explanation":"[\"Ana fikir: das Essen, yiyeceği veya bir öğünü anlatan isimdir.\",\"essen küçük harfle yazılan “yemek” fiilidir.\"]","study.examples":"[{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Yemeğin tadı güzel.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Ne yemek istiyorsunuz?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Saat 12’de yemek yiyoruz.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Yemek hazır.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Yemeğin tadı çok güzel.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Yemeğin tadı güzel.\"}]","study.tip":"[\"Yemek veya öğün → das Essen; eylem → essen.\"]","study.important":"[\"das Essen yalnızca isimdir; essen fiildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Essen: individual full-card repair of lv, study.translation, study.explanation, study.examples, study.tip, study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "yemek • öğün",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "yemek • öğün",
    "explanation": [
      "Ana fikir: das Essen, yiyeceği veya bir öğünü anlatan isimdir.",
      "essen küçük harfle yazılan “yemek” fiilidir."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Yemeğin tadı güzel."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Ne yemek istiyorsunuz?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Saat 12’de yemek yiyoruz."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Yemek hazır."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Yemeğin tadı çok güzel."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Yemeğin tadı güzel."
      }
    ],
    "tip": [
      "Yemek veya öğün → das Essen; eylem → essen."
    ],
    "important": [
      "das Essen yalnızca isimdir; essen fiildir."
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
      "Das Essen her şeyden önce yemek yemek anlamına gelir.",
      "Çoğunlukla şunu tanımlar: eylem.",
      "Das Essen temel olarak şu anlama gelir: yiyecek veya yemek.",
      "Genellikle şöyle tanımlanır: yağmur.",
      "Essen yemek demektir.",
      "Das Essen genel olarak yiyecek veya yemek anlamına gelebilir."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Yemeğin tadı güzel."
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
        "lv": "Yemek hazır."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Yemeğin tadı çok güzel."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Yemeğin tadı güzel."
      }
    ],
    "tip": [
      "Das Essen = yemek",
      "Bağlam anlama uyduğunda da Essen kullanın."
    ],
    "important": [
      "Essen artikelsiz bir fiildir.",
      "Das Essen, Essen ile aynı şey değil.",
      "Eylem: essen.",
      "Vaka/yemek: das Essen."
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

## Finding 16

**Audit ID:** `LRB101-0016`
**Finding Stable ID:** `g2/a1/tr|euch|idx:170|lv; study.translation; study.examples; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `euch|idx:170`
**Field / path:** `lv; study.translation; study.examples; study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Siz • Siz","study.translation":"Siz • Siz","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Seni görüyorum\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Sana yardım edeceğim\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Sana bir kitap veriyorum\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Teşekkür ederim\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Hatırlıyor musun\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"Sen\",\"example\":\"Ihr seid freundlich. = Siz dostlusunuz.\"},{\"word\":\"euch\",\"meaning\":\"Sen / sana\",\"example\":\"Ich helfe euch. = Size yardım ediyorum.\"},{\"word\":\"euer\",\"meaning\":\"Senin\",\"example\":\"Das ist euer Haus. = O sizin eviniz.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sizi • size • kendinizi","study.translation":"sizi • size • kendinizi","study.explanation":"[\"Ana fikir: euch, ihr zamirinin Akkusativ veya Dativ biçimi ve dönüşlü biçimidir.\",\"Doğrudan nesnede “sizi”, dolaylı nesnede “size” diye çevrilir; dönüşlü kullanım Türkçede çoğu kez fiilin içinde doğal biçimde ifade edilir.\"]","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Sizi görüyorum.\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Size yardım ediyorum.\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Size kitabı veriyorum.\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Size teşekkür ediyorum.\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Siz hatırlıyorsunuz.\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"siz; özne\",\"example\":\"Ihr seid freundlich. = Siz arkadaş canlısısınız.\"},{\"word\":\"euch\",\"meaning\":\"sizi / size / kendinizi\",\"example\":\"Ich helfe euch. = Size yardım ediyorum.\"},{\"word\":\"euer\",\"meaning\":\"sizin; iyelik\",\"example\":\"Das ist euer Haus. = Bu sizin eviniz.\"}]","study.info":"[\"ihr = siz; özne biçimi\",\"euch = sizi / size; nesne biçimi\",\"euer = sizin; iyelik biçimi\"]","study.tip":"{\"text\":\"Özne → ihr; nesne → euch; iyelik → euer.\"}","study.important":"[\"euch yalnızca birden fazla kişiye hitapta kullanılır.\"]","study.accents":{},"study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"info":[{},{},{}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: euch: individual full-card repair of lv; study.translation; study.examples; study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "sizi • size • kendinizi",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "sizi • size • kendinizi",
    "explanation": [
      "Ana fikir: euch, ihr zamirinin Akkusativ veya Dativ biçimi ve dönüşlü biçimidir.",
      "Doğrudan nesnede “sizi”, dolaylı nesnede “size” diye çevrilir; dönüşlü kullanım Türkçede çoğu kez fiilin içinde doğal biçimde ifade edilir."
    ],
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Sizi görüyorum."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Size yardım ediyorum."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Size kitabı veriyorum."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Size teşekkür ediyorum."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Siz hatırlıyorsunuz."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "siz; özne",
        "example": "Ihr seid freundlich. = Siz arkadaş canlısısınız."
      },
      {
        "word": "euch",
        "meaning": "sizi / size / kendinizi",
        "example": "Ich helfe euch. = Size yardım ediyorum."
      },
      {
        "word": "euer",
        "meaning": "sizin; iyelik",
        "example": "Das ist euer Haus. = Bu sizin eviniz."
      }
    ],
    "info": [
      "ihr = siz; özne biçimi",
      "euch = sizi / size; nesne biçimi",
      "euer = sizin; iyelik biçimi"
    ],
    "tip": {
      "text": "Özne → ihr; nesne → euch; iyelik → euer."
    },
    "accents": {},
    "important": [
      "euch yalnızca birden fazla kişiye hitapta kullanılır."
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
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "info": [
        {},
        {},
        {}
      ],
      "tip": {},
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
  "de": "euch",
  "lv": "Siz • Siz",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Siz • Siz",
    "explanation": "\"euch\" ikinci şahıs çoğul zamirdir. Hem doğrudan tamamlayıcı (nerede?) - \"siz\" hem de dolaylı tamamlayıcı (kime?) - \"size\" olarak kullanılır.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Seni görüyorum"
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Sana yardım edeceğim"
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Sana bir kitap veriyorum"
      },
      {
        "de": "Ich danke euch.",
        "lv": "Teşekkür ederim"
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Hatırlıyor musun"
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "Sen",
        "example": "Ihr seid freundlich. = Siz dostlusunuz."
      },
      {
        "word": "euch",
        "meaning": "Sen / sana",
        "example": "Ich helfe euch. = Size yardım ediyorum."
      },
      {
        "word": "euer",
        "meaning": "Senin",
        "example": "Das ist euer Haus. = O sizin eviniz."
      }
    ],
    "info": [
      "ihr = ty (podmiotowa forma zdania)",
      "euch = ty (gdzie? tworzysz) / ty (kogo? tworzysz)",
      "euer = seninki (iyelik formu)"
    ],
    "tip": {
      "text": "“Euch”, “kime?” sorusunun cevabıdır. veya \"sen\" içeren cümlelerin doğrudan tamamlayıcısıdır.",
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

## Finding 17

**Audit ID:** `LRB101-0017`
**Finding Stable ID:** `g2/a1/tr|fahren|idx:172|lv; study.translation; study.explanation; study.examples; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `fahren|idx:172`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sür • Sür • Al","study.translation":"Sür • Sür • Al","study.explanation":"[\"Ana fikir: fahren araba kullanmak anlamına gelir ve bazı cümlelerde birini alıp götürmek anlamına da gelir.\",\"Fahrene, araba, otobüs, tren, bisiklet veya başka bir araçla seyahat ederken kullanılır.\",\"Cümlenin öznesi bir kişi ise fahren yol göstermek, götürmek anlamlarına gelebilir.\",\"Hareket yürüyerek gerçekleşirse, genellikle gehen veya laufen kullanılır.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Berlin'e gidiyorum.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Araba kullanıyorum.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Kızımı okula götürüyorum.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Seni eve götüreceğim\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Yarın Münih'e gidiyoruz.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"Araçla ulaşım\",\"example\":\"Otobüsle gidiyorum.\"},{\"word\":\"gehen\",\"meaning\":\"Yürüyüş\",\"example\":\"Eve gidiyorum.\"},{\"word\":\"laufen\",\"meaning\":\"Koşmak/yürümek\",\"example\":\"Hızlı koşuyor.\"},{\"word\":\"bringen\",\"meaning\":\"Getir/teslim et\",\"example\":\"Kitabı getiriyorum.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Yanına al\",\"example\":\"Seni benimle alıyorum.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"gitmek • sürmek • götürmek","study.translation":"gitmek • sürmek • götürmek","study.explanation":"[\"Ana fikir: fahren araçla gitmek veya araç sürmek; bir kişiyi nesne olarak aldığında götürmek demektir.\",\"Yaya hareket için gehen veya laufen kullanılır.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Berlin’e gidiyorum.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Arabayla gidiyorum.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Kızımı okula götürüyorum.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Seni eve götürüyorum.\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Yarın Münih’e gidiyoruz.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"araçla gitmek / sürmek\",\"example\":\"Ich fahre mit dem Bus. – Otobüsle gidiyorum.\"},{\"word\":\"gehen\",\"meaning\":\"yürüyerek gitmek\",\"example\":\"Ich gehe nach Hause. – Eve yürüyorum.\"},{\"word\":\"laufen\",\"meaning\":\"koşmak / yürümek\",\"example\":\"Er läuft schnell. – O hızlı koşuyor.\"},{\"word\":\"bringen\",\"meaning\":\"getirmek / ulaştırmak\",\"example\":\"Ich bringe das Buch. – Kitabı getiriyorum.\"},{\"word\":\"mitnehmen\",\"meaning\":\"yanına almak\",\"example\":\"Ich nehme dich mit. – Seni yanıma alıyorum.\"}]","study.tip":"{\"text\":\"Araçla hareket → fahren; yaya → gehen.\"}","study.important":"{\"text\":\"fahren yalnızca “sürmek” değildir.\",\"example\":\"Bağlama göre araçla gitmek, sürmek veya birini götürmek anlamına gelir.\"}","study.accents":{},"study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":{}}}
**Note:** OWNER approved override: fahren: individual full-card repair of lv; study.translation; study.explanation; study.examples; study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fahren",
  "lv": "gitmek • sürmek • götürmek",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "gitmek • sürmek • götürmek",
    "explanation": [
      "Ana fikir: fahren araçla gitmek veya araç sürmek; bir kişiyi nesne olarak aldığında götürmek demektir.",
      "Yaya hareket için gehen veya laufen kullanılır."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Berlin’e gidiyorum."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Arabayla gidiyorum."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Kızımı okula götürüyorum."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Seni eve götürüyorum."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Yarın Münih’e gidiyoruz."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "araçla gitmek / sürmek",
        "example": "Ich fahre mit dem Bus. – Otobüsle gidiyorum."
      },
      {
        "word": "gehen",
        "meaning": "yürüyerek gitmek",
        "example": "Ich gehe nach Hause. – Eve yürüyorum."
      },
      {
        "word": "laufen",
        "meaning": "koşmak / yürümek",
        "example": "Er läuft schnell. – O hızlı koşuyor."
      },
      {
        "word": "bringen",
        "meaning": "getirmek / ulaştırmak",
        "example": "Ich bringe das Buch. – Kitabı getiriyorum."
      },
      {
        "word": "mitnehmen",
        "meaning": "yanına almak",
        "example": "Ich nehme dich mit. – Seni yanıma alıyorum."
      }
    ],
    "tip": {
      "text": "Araçla hareket → fahren; yaya → gehen."
    },
    "important": {
      "text": "fahren yalnızca “sürmek” değildir.",
      "example": "Bağlama göre araçla gitmek, sürmek veya birini götürmek anlamına gelir."
    },
    "accents": {},
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
      "tip": {},
      "important": {}
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "fahren",
  "lv": "Sür • Sür • Al",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "Sür • Sür • Al",
    "explanation": [
      "Ana fikir: fahren araba kullanmak anlamına gelir ve bazı cümlelerde birini alıp götürmek anlamına da gelir.",
      "Fahrene, araba, otobüs, tren, bisiklet veya başka bir araçla seyahat ederken kullanılır.",
      "Cümlenin öznesi bir kişi ise fahren yol göstermek, götürmek anlamlarına gelebilir.",
      "Hareket yürüyerek gerçekleşirse, genellikle gehen veya laufen kullanılır."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Berlin'e gidiyorum."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Araba kullanıyorum."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Kızımı okula götürüyorum."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Seni eve götüreceğim"
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Yarın Münih'e gidiyoruz."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "Araçla ulaşım",
        "example": "Otobüsle gidiyorum."
      },
      {
        "word": "gehen",
        "meaning": "Yürüyüş",
        "example": "Eve gidiyorum."
      },
      {
        "word": "laufen",
        "meaning": "Koşmak/yürümek",
        "example": "Hızlı koşuyor."
      },
      {
        "word": "bringen",
        "meaning": "Getir/teslim et",
        "example": "Kitabı getiriyorum."
      },
      {
        "word": "mitnehmen",
        "meaning": "Yanına al",
        "example": "Seni benimle alıyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: araç → fahren • Yürüyerek → gehen."
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

## Finding 18

**Audit ID:** `LRB101-0018`
**Finding Stable ID:** `g2/a1/tr|Ferien|idx:694|lv, study.translation, study.explanation, study.examples, study.tip, study.important, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Ferien|idx:694`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important, study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Tatiller (okul)","study.translation":"Tatiller (okul)","study.explanation":"[\"Ana fikir: yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.\",\"Die Ferien temel olarak şu anlama gelir: okul tatilleri.\",\"Genellikle şu şekilde karakterize edilir: yalnızca çoğul.\",\"Die Ferien yalnızca çoğul olarak görünür - her zaman çoğul olarak (den Ferien'de).\"]","study.examples":"[{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Hafta sonları deniz kenarına gidiyoruz.\"},{\"de\":\"In den Ferien habe ich viel Zeit.\",\"lv\":\"Tatillerde çok zamanım oluyor.\"},{\"de\":\"Was macht ihr in den Ferien?\",\"lv\":\"Tatilde ne yaparsınız?\"},{\"de\":\"Die Schule ist in den Ferien zu.\",\"lv\":\"Okul tatil günlerinde kapalıdır.\"},{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Tatilde deniz kenarına gidiyoruz.\"},{\"de\":\"In den Ferien\",\"lv\":\"Tatilde (okulda).\"}]","study.tip":"[\"Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.\",\"Bağlam bu anlama uygun olduğunda die Ferien'i kullanın.\"]","study.important":"[\"Ferien her zaman davalı durumda: in den Ferien.\",\"Yanlış: in der Ferien → Doğru: in den Ferien\",\"Okul: die Ferien (yalnızca çoğul).\",\"Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.\"]","study.comparison":"[{\"word\":\"die Ferien\",\"meaning\":\"Okula/çalışmaya ara vermek (yalnızca masa başında)\",\"example\":\"In den Ferien fahren wir weg. – Hafta sonları bir yere gidiyoruz.\"},{\"word\":\"der Urlaub\",\"meaning\":\"İşten ayrılma (yalnızca herkes)\",\"example\":\"Ich habe zwei Wochen Urlaub. – İki haftalık iznim var.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"okul tatili","study.translation":"okul tatili","study.explanation":"[\"Ana fikir: die Ferien, okul veya öğrenim tatilini anlatır ve yalnızca çoğul kullanılır.\",\"Yaygın kalıp in den Ferien’dir; işten izin için der Urlaub kullanılır.\"]","study.examples":"[{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Okul tatilinde deniz kenarına gidiyoruz.\"},{\"de\":\"In den Ferien habe ich viel Zeit.\",\"lv\":\"Okul tatilinde çok zamanım oluyor.\"},{\"de\":\"Was macht ihr in den Ferien?\",\"lv\":\"Okul tatilinde ne yapıyorsunuz?\"},{\"de\":\"Die Schule ist in den Ferien zu.\",\"lv\":\"Okul tatilinde okul kapalıdır.\"},{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Okul tatilinde deniz kenarına gidiyoruz.\"},{\"de\":\"In den Ferien\",\"lv\":\"okul tatilinde\"}]","study.comparison":"[{\"word\":\"die Ferien\",\"meaning\":\"okul/öğrenim tatili; çoğul\",\"example\":\"In den Ferien fahren wir weg. – Okul tatilinde bir yere gidiyoruz.\"},{\"word\":\"der Urlaub\",\"meaning\":\"işten izin/tatil; tekil\",\"example\":\"Ich habe zwei Wochen Urlaub. – İki hafta iznim var.\"}]","study.tip":"[\"Okul tatili → die Ferien; işten izin → der Urlaub.\"]","study.important":"[\"die Ferien yalnızca çoğuldur.\",\"Doğru: in den Ferien; yanlış: in der Ferien.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Ferien: individual full-card repair of lv, study.translation, study.explanation, study.examples, study.tip, study.important, study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "okul tatili",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "okul tatili",
    "explanation": [
      "Ana fikir: die Ferien, okul veya öğrenim tatilini anlatır ve yalnızca çoğul kullanılır.",
      "Yaygın kalıp in den Ferien’dir; işten izin için der Urlaub kullanılır."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Okul tatilinde deniz kenarına gidiyoruz."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "Okul tatilinde çok zamanım oluyor."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Okul tatilinde ne yapıyorsunuz?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Okul tatilinde okul kapalıdır."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Okul tatilinde deniz kenarına gidiyoruz."
      },
      {
        "de": "In den Ferien",
        "lv": "okul tatilinde"
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "okul/öğrenim tatili; çoğul",
        "example": "In den Ferien fahren wir weg. – Okul tatilinde bir yere gidiyoruz."
      },
      {
        "word": "der Urlaub",
        "meaning": "işten izin/tatil; tekil",
        "example": "Ich habe zwei Wochen Urlaub. – İki hafta iznim var."
      }
    ],
    "tip": [
      "Okul tatili → die Ferien; işten izin → der Urlaub."
    ],
    "important": [
      "die Ferien yalnızca çoğuldur.",
      "Doğru: in den Ferien; yanlış: in der Ferien."
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
      "Die Ferien temel olarak şu anlama gelir: okul tatilleri.",
      "Genellikle şu şekilde karakterize edilir: yalnızca çoğul.",
      "Die Ferien yalnızca çoğul olarak görünür - her zaman çoğul olarak (den Ferien'de)."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Hafta sonları deniz kenarına gidiyoruz."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "Tatillerde çok zamanım oluyor."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Tatilde ne yaparsınız?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Okul tatil günlerinde kapalıdır."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Tatilde deniz kenarına gidiyoruz."
      },
      {
        "de": "In den Ferien",
        "lv": "Tatilde (okulda)."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "Okula/çalışmaya ara vermek (yalnızca masa başında)",
        "example": "In den Ferien fahren wir weg. – Hafta sonları bir yere gidiyoruz."
      },
      {
        "word": "der Urlaub",
        "meaning": "İşten ayrılma (yalnızca herkes)",
        "example": "Ich habe zwei Wochen Urlaub. – İki haftalık iznim var."
      }
    ],
    "tip": [
      "Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.",
      "Bağlam bu anlama uygun olduğunda die Ferien'i kullanın."
    ],
    "important": [
      "Ferien her zaman davalı durumda: in den Ferien.",
      "Yanlış: in der Ferien → Doğru: in den Ferien",
      "Okul: die Ferien (yalnızca çoğul).",
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

## Finding 19

**Audit ID:** `LRB101-0019`
**Finding Stable ID:** `g2/a1/tr|fernsehen|idx:687|lv; study.translation; study.examples[].lv; study.comparison[].meaning; study.tip.leftBlocks[].text; study.important.text|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `fernsehen|idx:687`
**Field / path:** `lv; study.translation; study.examples[].lv; study.comparison[].meaning; study.tip.leftBlocks[].text; study.important.text`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"TV izle","study.translation":"TV izle","study.examples[].lv":null,"study.comparison[].meaning":null,"study.tip.leftBlocks[].text":null,"study.important.text":"Fernsehen = fiil (ich sehe eğreltiotu). das Fernsehen = isim, yalnızca tekil."}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"televizyon izlemek","study.translation":"televizyon izlemek","study.explanation":"Ana fikir: fernsehen, televizyon izlemek anlamındaki ayrılabilen fiildir: ich sehe fern. das Fernsehen ise televizyonu yayın veya medya olarak anlatan isimdir.","study.examples":"[{\"de\":\"Ich sehe heute Abend fern.\",\"lv\":\"Bu akşam televizyon izliyorum.\"},{\"de\":\"Siehst du oft fern?\",\"lv\":\"Sık sık televizyon izler misin?\"},{\"de\":\"Die Kinder sehen am Nachmittag fern.\",\"lv\":\"Çocuklar öğleden sonra televizyon izliyor.\"}]","study.comparison":"[{\"word\":\"fernsehen\",\"meaning\":\"televizyon izlemek\",\"example\":\"Ich sehe fern. = Televizyon izliyorum.\"},{\"word\":\"das Fernsehen\",\"meaning\":\"televizyon; medya veya yayın\",\"example\":\"Im Fernsehen läuft ein Film. = Televizyonda bir film gösteriliyor.\"},{\"word\":\"sehen\",\"meaning\":\"görmek\",\"example\":\"Ich sehe einen Film. = Bir film görüyorum.\"}]","study.tip":"{\"leftBlocks\":[{\"text\":\"Eylem için fernsehen; televizyon medyası veya yayını için das Fernsehen kullanılır.\"}]}","study.important":"{\"text\":\"fernsehen fiildir; das Fernsehen tekil bir isimdir.\"}","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":{}}}
**Note:** OWNER approved override: fernsehen: individual full-card repair of lv; study.translation; study.examples[].lv; study.comparison[].meaning; study.tip.leftBlocks[].text; study.important.text; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fernsehen",
  "lv": "televizyon izlemek",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "televizyon izlemek",
    "explanation": "Ana fikir: fernsehen, televizyon izlemek anlamındaki ayrılabilen fiildir: ich sehe fern. das Fernsehen ise televizyonu yayın veya medya olarak anlatan isimdir.",
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Bu akşam televizyon izliyorum."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Sık sık televizyon izler misin?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Çocuklar öğleden sonra televizyon izliyor."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "televizyon izlemek",
        "example": "Ich sehe fern. = Televizyon izliyorum."
      },
      {
        "word": "das Fernsehen",
        "meaning": "televizyon; medya veya yayın",
        "example": "Im Fernsehen läuft ein Film. = Televizyonda bir film gösteriliyor."
      },
      {
        "word": "sehen",
        "meaning": "görmek",
        "example": "Ich sehe einen Film. = Bir film görüyorum."
      }
    ],
    "tip": {
      "leftBlocks": [
        {
          "text": "Eylem için fernsehen; televizyon medyası veya yayını için das Fernsehen kullanılır."
        }
      ]
    },
    "important": {
      "text": "fernsehen fiildir; das Fernsehen tekil bir isimdir."
    },
    "sectionAccents": {
      "explanation": {},
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
      "tip": {},
      "important": {}
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "fernsehen",
  "lv": "TV izle",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "TV izle",
    "explanation": "Ana fikir: fernsehen bölünmüş bir fiildir – ich sehe fern, du siehst fern. Bu televizyon izlemek anlamına gelir. Das Fernsehen (araç olarak televizyon) ismiyle karıştırılmamalıdır.",
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Bu gece televizyon izliyorum."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Sık sık televizyon izler misiniz?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Çocuklar öğleden sonra televizyon izliyorlar."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "TV izle",
        "example": "Ich sehe fern. = Televizyon izliyorum."
      },
      {
        "word": "das Fernsehen",
        "meaning": "Televizyon (medya)",
        "example": "Im Fernsehen läuft ein Film. = Televizyonda bir film oynatılıyor."
      },
      {
        "word": "sehen",
        "meaning": "Görmek",
        "example": "Ich sehe einen Film. = Bir film izliyorum."
      }
    ],
    "tip": {
      "leftBlocks": [
        {
          "text": "Eylem için Fernsehen (ich sehe eğreltiotu) kullanılır. Das Fernsehen bir televizyon programında veya ortamında kullanılır."
        }
      ]
    },
    "important": {
      "text": "Fernsehen = fiil (ich sehe eğreltiotu). das Fernsehen = isim, yalnızca tekil."
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fernsehen",
          "sehe",
          "fern"
        ],
        "purple": [
          "izlemek"
        ],
        "green": [
          "das Fernsehen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sehe",
              "fern"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Siehst",
              "fern"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sehen",
              "fern"
            ]
          },
          "lv": {}
        }
      ]
    }
  }
}
```

---

## Finding 20

**Audit ID:** `LRB101-0020`
**Finding Stable ID:** `g2/a1/tr|Fernsehen|idx:688|study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Fernsehen|idx:688`
**Field / path:** `study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"TV","study.explanation[]":null,"study.examples[].lv":null,"study.tip[]":null,"study.important[]":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"televizyon","study.translation":"televizyon","study.explanation":"[\"Ana fikir: das Fernsehen, televizyonu medya veya yayınların bütünü olarak anlatan tekil isimdir.\",\"fernsehen ise ayrılabilen “televizyon izlemek” fiilidir.\",\"das Fernsehen’in çoğulu yoktur.\"]","study.examples":"[{\"de\":\"Was gibt es heute im Fernsehen?\",\"lv\":\"Bugün televizyonda ne var?\"},{\"de\":\"Was gibt es heute im Fernsehen?\",\"lv\":\"Bugün televizyonda ne var?\"},{\"de\":\"Im Fernsehen läuft ein Film.\",\"lv\":\"Televizyonda bir film gösteriliyor.\"},{\"de\":\"Das Fernsehen ist heute langweilig.\",\"lv\":\"Bugünkü televizyon yayını sıkıcı.\"},{\"de\":\"Ich sehe heute Abend fern.\",\"lv\":\"Bu akşam televizyon izliyorum.\"},{\"de\":\"Was gibt es im Fernsehen?\",\"lv\":\"Televizyonda ne var?\"}]","study.tip":"[\"Eylem → fernsehen; medya veya yayın → das Fernsehen.\"]","study.important":"[\"fernsehen = fiil; das Fernsehen = tekil isim.\",\"*die Fernsehen biçimi kullanılmaz.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Fernsehen: individual full-card repair of study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "televizyon",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "televizyon",
    "explanation": [
      "Ana fikir: das Fernsehen, televizyonu medya veya yayınların bütünü olarak anlatan tekil isimdir.",
      "fernsehen ise ayrılabilen “televizyon izlemek” fiilidir.",
      "das Fernsehen’in çoğulu yoktur."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Bugün televizyonda ne var?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Bugün televizyonda ne var?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "Televizyonda bir film gösteriliyor."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Bugünkü televizyon yayını sıkıcı."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Bu akşam televizyon izliyorum."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Televizyonda ne var?"
      }
    ],
    "tip": [
      "Eylem → fernsehen; medya veya yayın → das Fernsehen."
    ],
    "important": [
      "fernsehen = fiil; das Fernsehen = tekil isim.",
      "*die Fernsehen biçimi kullanılmaz."
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
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "TV",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "TV",
    "explanation": [
      "Ana fikir: İsim, yalnızca tekil. Televizyonu genel olarak bir araç veya yayın olarak tanımlar.",
      "Das Fernsehen temel olarak şu anlama gelir: yayını izleyin.",
      "Çoğunlukla şunu tanımlar: eylem.",
      "Das Fernsehen her şeyden önce bir araç olarak televizyondur.",
      "Çoğunlukla şunu tanımlar: isim (yalnızca tekil).",
      "Fernsehen şu şekilde bölünebilen bir fiildir: ich sehe fern, du siehst fern.",
      "Das Fernsehen bir isimdir ve yalnızca tekil hali vardır • Çoğul hali yoktur."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Bugün televizyonda ne var?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Bugün televizyonda ne var?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "Televizyonda bir film var."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Bugünkü televizyon programı sıkıcı."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Bu gece televizyon izliyorum."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Televizyonda ne gösteriliyor?"
      }
    ],
    "tip": [
      "Bir aktiviteden bahsederken fernsehen (ich sehe fern) kullanın. Bir TV programı veya medya hakkında konuşurken das Fernsehen'i kullanın.",
      "İsim, yalnızca tekil. Televizyonu genel olarak bir araç veya yayın olarak tanımlar."
    ],
    "important": [
      "Fernsehen bölünebilir: sehen + eğrelti otu.",
      "Das Fernsehen çoğul değildir - *die Fernsehen değildir.",
      "Yanlış: die Fernsehen → Doğru: das Fernsehen",
      "Eylem: fernsehen → ich sehe eğreltiotu."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "Fernsehen"
        ],
        "yellow": [
          "Fernsehen"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televizyonda"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televizyonda"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "Televizyonda"
            ]
          }
        },
        {
          "de": {
            "green": [
              "das Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televizyon"
            ]
          }
        },
        {
          "de": {},
          "lv": {
            "purple": [
              "televizyon"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "Televizyonda"
            ]
          }
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "green": [
            "fernsehen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 21

**Audit ID:** `LRB101-0021`
**Finding Stable ID:** `g2/a1/tr|finden|idx:187|lv; study.translation; study.explanation; study.examples; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `finden|idx:187`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bul • Düşün","study.translation":"Bul • Düşün","study.explanation":"[\"Ana fikir: bulmak çoğu zaman bulmak anlamına gelir.\",\"Konuşma sırasında bulmak çok sık aynı zamanda bir şeyi düşünmek veya düşünmek anlamına da gelir.\",\"Kayıp bir şey söz konusu olduğunda, bulmak olarak tercüme edilir.\",\"Kanaate gelince, düşünme veya görünme olarak çevrilir.\"]","study.examples":"[{\"de\":\"Ich finde meinen Schlüssel.\",\"lv\":\"Anahtarımı bulamıyorum\"},{\"de\":\"Ich finde das gut.\",\"lv\":\"Telefonunuzu buldunuz mu?\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Bu bana iyi görünüyor.\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Film hakkında ne düşünüyorsunuz?\"}]","study.comparison":"[{\"word\":\"finden\",\"meaning\":\"Bul/düşün\",\"example\":\"Ich finde das gut. = Bunu iyi buluyorum.\"},{\"word\":\"suchen\",\"meaning\":\"Ara\",\"example\":\"Ich suche den Schlüssel. = Anahtarı arıyorum.\"},{\"word\":\"denken\",\"meaning\":\"Düşünmek\",\"example\":\"Seni düşünüyorum. = Seni düşünüyorum.\"},{\"word\":\"glauben\",\"meaning\":\"İnan/düşün\",\"example\":\"Ich glaube, er kommt. = Geleceğini düşünüyorum.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bulmak • düşünmek","study.translation":"bulmak • düşünmek","study.explanation":"[\"Ana fikir: finden, kayıp veya aranan bir şeyi bulmak demektir.\",\"Görüş bildirirken “bir şeyi iyi/kötü bulmak” veya “hakkında ne düşünmek” anlamına gelir.\"]","study.examples":"[{\"de\":\"Ich finde meinen Schlüssel.\",\"lv\":\"Anahtarımı buluyorum.\"},{\"de\":\"Ich finde das gut.\",\"lv\":\"Bunu iyi buluyorum.\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Film hakkında ne düşünüyorsun?\"}]","study.comparison":"[{\"word\":\"finden\",\"meaning\":\"bulmak / bir görüşte olmak\",\"example\":\"Ich finde das gut. = Bunu iyi buluyorum.\"}]","study.tip":"{\"text\":\"Aranan şey → bulmak; görüş → bir şeyi iyi/kötü bulmak.\"}","study.important":"[\"finden hem fiziksel olarak bulmayı hem de görüş bildirmeyi anlatabilir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: finden: individual full-card repair of lv; study.translation; study.explanation; study.examples; study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "bulmak • düşünmek",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "bulmak • düşünmek",
    "explanation": [
      "Ana fikir: finden, kayıp veya aranan bir şeyi bulmak demektir.",
      "Görüş bildirirken “bir şeyi iyi/kötü bulmak” veya “hakkında ne düşünmek” anlamına gelir."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Anahtarımı buluyorum."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Bunu iyi buluyorum."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Film hakkında ne düşünüyorsun?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "bulmak / bir görüşte olmak",
        "example": "Ich finde das gut. = Bunu iyi buluyorum."
      }
    ],
    "tip": {
      "text": "Aranan şey → bulmak; görüş → bir şeyi iyi/kötü bulmak."
    },
    "important": [
      "finden hem fiziksel olarak bulmayı hem de görüş bildirmeyi anlatabilir."
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
        }
      ],
      "tip": {},
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
  "de": "finden",
  "lv": "Bul • Düşün",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Bul • Düşün",
    "explanation": [
      "Ana fikir: bulmak çoğu zaman bulmak anlamına gelir.",
      "Konuşma sırasında bulmak çok sık aynı zamanda bir şeyi düşünmek veya düşünmek anlamına da gelir.",
      "Kayıp bir şey söz konusu olduğunda, bulmak olarak tercüme edilir.",
      "Kanaate gelince, düşünme veya görünme olarak çevrilir."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Anahtarımı bulamıyorum"
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Telefonunuzu buldunuz mu?"
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Bu bana iyi görünüyor."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Film hakkında ne düşünüyorsunuz?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Bul/düşün",
        "example": "Ich finde das gut. = Bunu iyi buluyorum."
      },
      {
        "word": "suchen",
        "meaning": "Ara",
        "example": "Ich suche den Schlüssel. = Anahtarı arıyorum."
      },
      {
        "word": "denken",
        "meaning": "Düşünmek",
        "example": "Seni düşünüyorum. = Seni düşünüyorum."
      },
      {
        "word": "glauben",
        "meaning": "İnan/düşün",
        "example": "Ich glaube, er kommt. = Geleceğini düşünüyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: kayıp şey → bulunan • Görüş → sanırım…"
    },
    "important": [
      "Finden sadece “bul” demek değildir.",
      "Ich finde das gut \"Bunun iyi olduğunu düşünüyorum\" değil, \"Bunun iyi olduğunu düşünüyorum\" anlamına gelir."
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
            "finden"
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

## Finding 22

**Audit ID:** `LRB101-0022`
**Finding Stable ID:** `g2/a1/tr|Frau|idx:198|lv; study.translation; study.explanation; study.examples; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Frau|idx:198`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kadın • Karısı","study.translation":"Kadın • Karısı","study.explanation":"[\"Ana fikir: Die Frau bir kadın (cinsiyet) veya bir eş (eş) anlamına gelebilir.\",\"Eğer mesele yalnızca cinsiyet veya kişi meselesiyse, öl Frau = kadın.\",\"Bir eş söz konusu olduğunda, die Frau = karım (meine Frau = karım).\",\"İyelik zamiri (meine/deine/seine Frau) neredeyse her zaman eş - eş anlamına gelir.\",\"Çoğul: die Frauen.\",\"Erkek formu der Mann aynı çift anlama sahiptir: erkek VE koca.\"]","study.examples":"[{\"de\":\"Sie ist eine nette Frau.\",\"lv\":\"O hoş bir kadın.\"},{\"de\":\"Das ist meine Frau.\",\"lv\":\"Bu benim karım.\"},{\"de\":\"Wie viele Frauen sind hier?\",\"lv\":\"Kaç kadın var?\"},{\"de\":\"Meine Frau arbeitet in Berlin.\",\"lv\":\"Eşim Berlin'de çalışıyor.\"},{\"de\":\"Die Frau trägt ein Kleid.\",\"lv\":\"Kadın elbise giyiyor.\"},{\"de\":\"Seine Frau ist Ärztin.\",\"lv\":\"Karısı doktordur.\"}]","study.comparison":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kadın • eş","study.translation":"kadın • eş","study.explanation":"[\"Ana fikir: die Frau bağlama göre yetişkin kadın veya eş anlamına gelir.\",\"meine/deine/seine Frau gibi iyelikli kullanımlar genellikle eşi belirtir.\",\"Çoğul: die Frauen.\"]","study.examples":"[{\"de\":\"Sie ist eine nette Frau.\",\"lv\":\"O nazik bir kadın.\"},{\"de\":\"Das ist meine Frau.\",\"lv\":\"Bu benim eşim.\"},{\"de\":\"Wie viele Frauen sind hier?\",\"lv\":\"Burada kaç kadın var?\"},{\"de\":\"Meine Frau arbeitet in Berlin.\",\"lv\":\"Eşim Berlin’de çalışıyor.\"},{\"de\":\"Die Frau trägt ein Kleid.\",\"lv\":\"Kadın bir elbise giyiyor.\"},{\"de\":\"Seine Frau ist Ärztin.\",\"lv\":\"Onun eşi doktordur.\"}]","study.tip":"[\"İyelik sözcüğüyle Frau genellikle eş; eine/die Frau ise kadın demektir.\"]","study.important":"[\"die Frau = kadın veya eş; bağlam belirler.\",\"Çoğul: die Frauen.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: Frau: individual full-card repair of lv; study.translation; study.explanation; study.examples; study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "kadın • eş",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "kadın • eş",
    "explanation": [
      "Ana fikir: die Frau bağlama göre yetişkin kadın veya eş anlamına gelir.",
      "meine/deine/seine Frau gibi iyelikli kullanımlar genellikle eşi belirtir.",
      "Çoğul: die Frauen."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "O nazik bir kadın."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Bu benim eşim."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Burada kaç kadın var?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Eşim Berlin’de çalışıyor."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Kadın bir elbise giyiyor."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Onun eşi doktordur."
      }
    ],
    "tip": [
      "İyelik sözcüğüyle Frau genellikle eş; eine/die Frau ise kadın demektir."
    ],
    "important": [
      "die Frau = kadın veya eş; bağlam belirler.",
      "Çoğul: die Frauen."
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
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Kadın • Karısı",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Kadın • Karısı",
    "explanation": [
      "Ana fikir: Die Frau bir kadın (cinsiyet) veya bir eş (eş) anlamına gelebilir.",
      "Eğer mesele yalnızca cinsiyet veya kişi meselesiyse, öl Frau = kadın.",
      "Bir eş söz konusu olduğunda, die Frau = karım (meine Frau = karım).",
      "İyelik zamiri (meine/deine/seine Frau) neredeyse her zaman eş - eş anlamına gelir.",
      "Çoğul: die Frauen.",
      "Erkek formu der Mann aynı çift anlama sahiptir: erkek VE koca."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "O hoş bir kadın."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Bu benim karım."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Kaç kadın var?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Eşim Berlin'de çalışıyor."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Kadın elbise giyiyor."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Karısı doktordur."
      }
    ],
    "tip": [
      "İyelik zamiri (meine/deine/seine Frau) neredeyse her zaman eş anlamına gelir.",
      "Sahiplenici olmadan (die Frau, eine Frau), genellikle bir kadın anlamına gelir."
    ],
    "important": [
      "Die Frau = kadın VEYA eş – bağlama bağlı olarak.",
      "Meine Frau = karım (\"kadınım\" değil).",
      "Çoğul: die Frauen."
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

## Finding 23

**Audit ID:** `LRB101-0023`
**Finding Stable ID:** `g2/a1/tr|für|idx:216|lv; study.translation; study.explanation; study.examples; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `für|idx:216`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Profesyonel • Profesyonel","study.translation":"Profesyonel • Profesyonel","study.explanation":"[\"Ana fikir: für her zaman suçlayıcıyı yöneten bir edattır – Letonca'da genellikle için veya için.\",\"Alıcı veya niyetten bahsederken für = for (für dich = sizin için).\",\"Takas, ücret veya selden bahsetmişken, für = for (danke für das Geschenk = hediye için teşekkür ederim).\",\"Für, anlamından bağımsız olarak her zaman suçlayıcı duruma ihtiyaç duyar.\"]","study.examples":"[{\"de\":\"Das ist für dich.\",\"lv\":\"Bu sizin için.\"},{\"de\":\"Danke für die Hilfe.\",\"lv\":\"Yardımlarınız için teşekkür ederim.\"},{\"de\":\"Ich kaufe ein Geschenk für meine Mutter.\",\"lv\":\"Anneme hediye alıyorum.\"},{\"de\":\"Was bezahlst du für das Auto?\",\"lv\":\"Bir araba için ne kadar ödersiniz?\"},{\"de\":\"Das Buch ist für Kinder.\",\"lv\":\"Kitap çocuklar içindir.\"},{\"de\":\"Für heute ist das genug.\",\"lv\":\"Bugünlük bu kadar.\"}]","study.comparison":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"için","study.translation":"için","study.explanation":"[\"Ana fikir: für, alıcıyı, amacı, nedeni, karşılığı veya bedeli belirten bir edattır.\",\"für her zaman Akkusativ gerektirir.\"]","study.examples":"[{\"de\":\"Das ist für dich.\",\"lv\":\"Bu senin için.\"},{\"de\":\"Danke für die Hilfe.\",\"lv\":\"Yardım için teşekkürler.\"},{\"de\":\"Ich kaufe ein Geschenk für meine Mutter.\",\"lv\":\"Anneme bir hediye alıyorum.\"},{\"de\":\"Was bezahlst du für das Auto?\",\"lv\":\"Araba için ne kadar ödüyorsun?\"},{\"de\":\"Das Buch ist für Kinder.\",\"lv\":\"Kitap çocuklar içindir.\"},{\"de\":\"Für heute ist das genug.\",\"lv\":\"Bugünlük bu yeter.\"}]","study.tip":"[\"für + Akkusativ: für mich, für dich, für das Kind.\"]","study.important":"[\"für her zaman Akkusativ ile kullanılır.\",\"danke für / bezahlen für = bir şey için teşekkür etmek / ödemek.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: für: individual full-card repair of lv; study.translation; study.explanation; study.examples; study.comparison; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "için",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "için",
    "explanation": [
      "Ana fikir: für, alıcıyı, amacı, nedeni, karşılığı veya bedeli belirten bir edattır.",
      "für her zaman Akkusativ gerektirir."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Bu senin için."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Yardım için teşekkürler."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Anneme bir hediye alıyorum."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Araba için ne kadar ödüyorsun?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Kitap çocuklar içindir."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Bugünlük bu yeter."
      }
    ],
    "tip": [
      "für + Akkusativ: für mich, für dich, für das Kind."
    ],
    "important": [
      "für her zaman Akkusativ ile kullanılır.",
      "danke für / bezahlen für = bir şey için teşekkür etmek / ödemek."
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
  "de": "für",
  "lv": "Profesyonel • Profesyonel",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Profesyonel • Profesyonel",
    "explanation": [
      "Ana fikir: für her zaman suçlayıcıyı yöneten bir edattır – Letonca'da genellikle için veya için.",
      "Alıcı veya niyetten bahsederken für = for (für dich = sizin için).",
      "Takas, ücret veya selden bahsetmişken, für = for (danke für das Geschenk = hediye için teşekkür ederim).",
      "Für, anlamından bağımsız olarak her zaman suçlayıcı duruma ihtiyaç duyar."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Bu sizin için."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Yardımlarınız için teşekkür ederim."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Anneme hediye alıyorum."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Bir araba için ne kadar ödersiniz?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Kitap çocuklar içindir."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Bugünlük bu kadar."
      }
    ],
    "tip": [
      "Für her zaman + suçlayıcı - anlamdan bağımsız olarak.",
      "Alıcı/Niyet → • Değiştirme/Sebep/→Ücret."
    ],
    "important": [
      "Für + Akkusativ her zaman, örneğin für mich, für dich, für das Kind.",
      "Danke für / bezahlen für = \"önce\" değil, \"için\"."
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

## Finding 24

**Audit ID:** `LRB101-0024`
**Finding Stable ID:** `g2/a1/tr|Fußball|idx:218|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `Fußball|idx:218`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"futbol","study.translation":"futbol","study.explanation":"[\"Ana fikir: Fußball çoğu zaman futbol sportu anlamına gelir.\",\"Makale ve tekil biçim ile der Fußball, futbol topunu da ifade edebilir.\",\"Çoğul die Fußbälle futbol toplarını değil, birden fazla spor türünü ifade etmez.\"]","study.examples":"[{\"de\":\"Ich spiele Fußball.\",\"lv\":\"futbol oynuyorum.\"},{\"de\":\"Der Fußball liegt im Garten.\",\"lv\":\"futbol topu bahçededir.\"},{\"de\":\"Wir kaufen zwei Fußbälle.\",\"lv\":\"iki futbol topu satın alıyoruz.\"}]","study.comparison":"[{\"word\":\"Fußball\",\"meaning\":\"futbol sportu\",\"example\":\"Ich spiele Fußball. – Futbol oynuyorum.\"},{\"word\":\"der Fußball\",\"meaning\":\"futbol topu\",\"example\":\"Der Fußball ist neu. – Futbol topu yeni.\"}]","study.tip":"[\"Makale olmadan spielen Fußball genellikle futbol oynamak anlamına gelir.\",\"Tekil anlamında ein Fußball ve die Fußbälle futbol topu ve futbol toplarıdır.\"]","study.important":"[\"die Fußbälle futbol toplarını anlamına gelir.\",\"Spor türü Fußball genellikle tekil olarak kullanılır.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"futbol • futbol topu","study.translation":"futbol • futbol topu","study.explanation":"[\"Ana fikir: artikelsiz Fußball çoğunlukla futbol sporunu belirtir.\",\"der/ein Fußball ve çoğul die Fußbälle ise futbol topunu/toplarını ifade eder.\"]","study.examples":"[{\"de\":\"Ich spiele Fußball.\",\"lv\":\"Futbol oynuyorum.\"},{\"de\":\"Der Fußball liegt im Garten.\",\"lv\":\"Futbol topu bahçede duruyor.\"},{\"de\":\"Wir kaufen zwei Fußbälle.\",\"lv\":\"İki futbol topu satın alıyoruz.\"}]","study.comparison":"[{\"word\":\"Fußball\",\"meaning\":\"futbol sporu\",\"example\":\"Ich spiele Fußball. – Futbol oynuyorum.\"},{\"word\":\"der Fußball\",\"meaning\":\"futbol topu\",\"example\":\"Der Fußball ist neu. – Futbol topu yeni.\"}]","study.tip":"[\"spielen + Fußball → spor; ein/der Fußball → top.\"]","study.important":"[\"die Fußbälle = futbol topları; spor adı Fußball genellikle tekildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Fußball: individual full-card repair of lv/study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fußball",
  "de_article": "der",
  "de_plural": "die Fußbälle",
  "lv": "futbol • futbol topu",
  "level": "A1",
  "study": {
    "id": "a1-fussball-study",
    "layout": "standardStudy",
    "translation": "futbol • futbol topu",
    "explanation": [
      "Ana fikir: artikelsiz Fußball çoğunlukla futbol sporunu belirtir.",
      "der/ein Fußball ve çoğul die Fußbälle ise futbol topunu/toplarını ifade eder."
    ],
    "examples": [
      {
        "de": "Ich spiele Fußball.",
        "lv": "Futbol oynuyorum."
      },
      {
        "de": "Der Fußball liegt im Garten.",
        "lv": "Futbol topu bahçede duruyor."
      },
      {
        "de": "Wir kaufen zwei Fußbälle.",
        "lv": "İki futbol topu satın alıyoruz."
      }
    ],
    "comparison": [
      {
        "word": "Fußball",
        "meaning": "futbol sporu",
        "example": "Ich spiele Fußball. – Futbol oynuyorum."
      },
      {
        "word": "der Fußball",
        "meaning": "futbol topu",
        "example": "Der Fußball ist neu. – Futbol topu yeni."
      }
    ],
    "tip": [
      "spielen + Fußball → spor; ein/der Fußball → top."
    ],
    "important": [
      "die Fußbälle = futbol topları; spor adı Fußball genellikle tekildir."
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
  "de": "Fußball",
  "de_article": "der",
  "de_plural": "die Fußbälle",
  "lv": "futbol",
  "level": "A1",
  "study": {
    "id": "a1-fussball-study",
    "layout": "standardStudy",
    "translation": "futbol",
    "explanation": [
      "Ana fikir: Fußball çoğu zaman futbol sportu anlamına gelir.",
      "Makale ve tekil biçim ile der Fußball, futbol topunu da ifade edebilir.",
      "Çoğul die Fußbälle futbol toplarını değil, birden fazla spor türünü ifade etmez."
    ],
    "examples": [
      {
        "de": "Ich spiele Fußball.",
        "lv": "futbol oynuyorum."
      },
      {
        "de": "Der Fußball liegt im Garten.",
        "lv": "futbol topu bahçededir."
      },
      {
        "de": "Wir kaufen zwei Fußbälle.",
        "lv": "iki futbol topu satın alıyoruz."
      }
    ],
    "comparison": [
      {
        "word": "Fußball",
        "meaning": "futbol sportu",
        "example": "Ich spiele Fußball. – Futbol oynuyorum."
      },
      {
        "word": "der Fußball",
        "meaning": "futbol topu",
        "example": "Der Fußball ist neu. – Futbol topu yeni."
      }
    ],
    "tip": [
      "Makale olmadan spielen Fußball genellikle futbol oynamak anlamına gelir.",
      "Tekil anlamında ein Fußball ve die Fußbälle futbol topu ve futbol toplarıdır."
    ],
    "important": [
      "die Fußbälle futbol toplarını anlamına gelir.",
      "Spor türü Fußball genellikle tekil olarak kullanılır."
    ]
  }
}
```

---

## Finding 25

**Audit ID:** `LRB101-0025`
**Finding Stable ID:** `g2/a1/tr|ganz|idx:219|lv/study|MISTRANSLATION|gpt-5.6-luna`
**Lang:** tr
**Card:** `ganz|idx:219`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Sağlıklı","study.translation":"Sağlıklı","study.explanation":"[\"Ana fikir: ganz isimle birlikte bütün veya hepsi anlamına gelir.\",\"Sıfat veya zarf öncesinde ganz tamamen, hiç veya oldukça anlamına gelebilir.\",\"ganz alles zamirine eşit değildir.\"]","study.examples":"[{\"de\":\"Ich arbeite den ganzen Tag.\",\"lv\":\"bütün gün çalışıyorum.\"},{\"de\":\"Das ganze Haus ist sauber.\",\"lv\":\"bütün ev temiz.\"},{\"de\":\"Das ist ganz sicher.\",\"lv\":\"bu tamamen güvenlidir.\"},{\"de\":\"Das Essen ist ganz gut.\",\"lv\":\"yemek oldukça iyidir.\"}]","study.comparison":"[{\"word\":\"ganz\",\"meaning\":\"bütün • hepsi birlikte • tamamen\",\"example\":\"der ganze Tag – bütün gün\"},{\"word\":\"alles\",\"meaning\":\"Tüm\",\"example\":\"Alles ist gut. – Hepsi iyi.\"}]","study.tip":"[\"İsim önünde ganz genellikle hepsi veya bütün anlamına gelir.\",\"Sıfat önünde ganz genellikle tamamen veya oldukça anlamına gelir.\"]","study.important":"[\"der ganze Tag = bütün gün.\",\"alles = hepsi bir zamir olarak.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bütün • tamamen","study.translation":"bütün • tamamen","study.explanation":"[\"Ana fikir: ganz isimle “bütün/tüm”, sıfat veya zarfla “tamamen” ya da “oldukça” anlamına gelir.\",\"alles ise “her şey” anlamındaki zamirdir.\"]","study.examples":"[{\"de\":\"Ich arbeite den ganzen Tag.\",\"lv\":\"Bütün gün çalışıyorum.\"},{\"de\":\"Das ganze Haus ist sauber.\",\"lv\":\"Bütün ev temiz.\"},{\"de\":\"Das ist ganz sicher.\",\"lv\":\"Bu tamamen kesin.\"},{\"de\":\"Das Essen ist ganz gut.\",\"lv\":\"Yemek oldukça iyi.\"}]","study.comparison":"[{\"word\":\"ganz\",\"meaning\":\"bütün / tamamen\",\"example\":\"der ganze Tag – bütün gün\"},{\"word\":\"alles\",\"meaning\":\"her şey\",\"example\":\"Alles ist gut. – Her şey yolunda.\"}]","study.tip":"[\"İsimden önce → bütün; sıfat veya zarftan önce → tamamen / oldukça.\"]","study.important":"[\"ganz ve alles aynı görevde değildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: ganz: individual full-card repair of lv/study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ganz",
  "lv": "bütün • tamamen",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "bütün • tamamen",
    "explanation": [
      "Ana fikir: ganz isimle “bütün/tüm”, sıfat veya zarfla “tamamen” ya da “oldukça” anlamına gelir.",
      "alles ise “her şey” anlamındaki zamirdir."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "Bütün gün çalışıyorum."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "Bütün ev temiz."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "Bu tamamen kesin."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "Yemek oldukça iyi."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "bütün / tamamen",
        "example": "der ganze Tag – bütün gün"
      },
      {
        "word": "alles",
        "meaning": "her şey",
        "example": "Alles ist gut. – Her şey yolunda."
      }
    ],
    "tip": [
      "İsimden önce → bütün; sıfat veya zarftan önce → tamamen / oldukça."
    ],
    "important": [
      "ganz ve alles aynı görevde değildir."
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
  "de": "ganz",
  "lv": "Sağlıklı",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "Sağlıklı",
    "explanation": [
      "Ana fikir: ganz isimle birlikte bütün veya hepsi anlamına gelir.",
      "Sıfat veya zarf öncesinde ganz tamamen, hiç veya oldukça anlamına gelebilir.",
      "ganz alles zamirine eşit değildir."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "bütün gün çalışıyorum."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "bütün ev temiz."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "bu tamamen güvenlidir."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "yemek oldukça iyidir."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "bütün • hepsi birlikte • tamamen",
        "example": "der ganze Tag – bütün gün"
      },
      {
        "word": "alles",
        "meaning": "Tüm",
        "example": "Alles ist gut. – Hepsi iyi."
      }
    ],
    "tip": [
      "İsim önünde ganz genellikle hepsi veya bütün anlamına gelir.",
      "Sıfat önünde ganz genellikle tamamen veya oldukça anlamına gelir."
    ],
    "important": [
      "der ganze Tag = bütün gün.",
      "alles = hepsi bir zamir olarak."
    ]
  }
}
```

---

## Finding 26

**Audit ID:** `LRB101-0026`
**Finding Stable ID:** `g2/a1/tr|geben|idx:223|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `geben|idx:223`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vermek","study.translation":"Vermek","study.explanation":"[\"Ana fikir: geben vermek demektir.\",\"Biri diğerine bir şey verdiğinde Geben'i kullanırız.\",\"Bu nehmen'in ters yönüdür.\",\"Bekommen almak, yani bir şeyi alan olmak demektir.\"]","study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"Kitabı bana ver lütfen\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"Sana numaramı veriyorum\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Kitabı alıyorum\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"Bir hediye alıyorum\"}]","study.comparison":"[{\"word\":\"geben\",\"meaning\":\"Vermek\",\"example\":\"Bana kitabı ver.\"},{\"word\":\"nehmen\",\"meaning\":\"Al / Al\",\"example\":\"Kitabı alıyorum.\"},{\"word\":\"bekommen\",\"meaning\":\"Almak/almak\",\"example\":\"Hediye alıyorum.\"},{\"word\":\"bringen\",\"meaning\":\"Getir/teslim et\",\"example\":\"Bana kitabı getiriyorum.\"}]","study.tip":"{\"text\":\"Unutmayın: verin → geben • Kendiniz için alın → nehmen.\"}","study.important":"[\"Geben ve nehmen zıt yönlerdir.\",\"Bekommen vermek değil almak demektir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vermek","study.translation":"vermek","study.explanation":"[\"Ana fikir: geben, bir şeyin bir kişiden başka bir kişiye geçmesini anlatır.\",\"nehmen almak, bekommen bir şeyi alan olmak, bringen ise bir şeyi ulaştırmak demektir.\"]","study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"Lütfen kitabı bana ver.\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"Sana numaramı veriyorum.\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Kitabı alıyorum.\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"Bir hediye alıyorum.\"}]","study.comparison":"[{\"word\":\"geben\",\"meaning\":\"vermek\",\"example\":\"Gib mir das Buch. – Kitabı bana ver.\"},{\"word\":\"nehmen\",\"meaning\":\"almak\",\"example\":\"Ich nehme das Buch. – Kitabı alıyorum.\"},{\"word\":\"bekommen\",\"meaning\":\"elde etmek / almak\",\"example\":\"Ich bekomme ein Geschenk. – Bir hediye alıyorum.\"},{\"word\":\"bringen\",\"meaning\":\"getirmek\",\"example\":\"Ich bringe dir das Buch. – Sana kitabı getiriyorum.\"}]","study.tip":"{\"text\":\"Birine vermek → geben; kendine almak → nehmen.\"}","study.important":"[\"geben ve nehmen zıt yönleri anlatır.\",\"bekommen = almak/elde etmek.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: geben: individual full-card repair of lv/study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "geben",
  "lv": "vermek",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "vermek",
    "explanation": [
      "Ana fikir: geben, bir şeyin bir kişiden başka bir kişiye geçmesini anlatır.",
      "nehmen almak, bekommen bir şeyi alan olmak, bringen ise bir şeyi ulaştırmak demektir."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Lütfen kitabı bana ver."
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Sana numaramı veriyorum."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Kitabı alıyorum."
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Bir hediye alıyorum."
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "vermek",
        "example": "Gib mir das Buch. – Kitabı bana ver."
      },
      {
        "word": "nehmen",
        "meaning": "almak",
        "example": "Ich nehme das Buch. – Kitabı alıyorum."
      },
      {
        "word": "bekommen",
        "meaning": "elde etmek / almak",
        "example": "Ich bekomme ein Geschenk. – Bir hediye alıyorum."
      },
      {
        "word": "bringen",
        "meaning": "getirmek",
        "example": "Ich bringe dir das Buch. – Sana kitabı getiriyorum."
      }
    ],
    "tip": {
      "text": "Birine vermek → geben; kendine almak → nehmen."
    },
    "important": [
      "geben ve nehmen zıt yönleri anlatır.",
      "bekommen = almak/elde etmek."
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
      "tip": {},
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
  "de": "geben",
  "lv": "Vermek",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "Vermek",
    "explanation": [
      "Ana fikir: geben vermek demektir.",
      "Biri diğerine bir şey verdiğinde Geben'i kullanırız.",
      "Bu nehmen'in ters yönüdür.",
      "Bekommen almak, yani bir şeyi alan olmak demektir."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Kitabı bana ver lütfen"
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Sana numaramı veriyorum"
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Kitabı alıyorum"
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Bir hediye alıyorum"
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "Vermek",
        "example": "Bana kitabı ver."
      },
      {
        "word": "nehmen",
        "meaning": "Al / Al",
        "example": "Kitabı alıyorum."
      },
      {
        "word": "bekommen",
        "meaning": "Almak/almak",
        "example": "Hediye alıyorum."
      },
      {
        "word": "bringen",
        "meaning": "Getir/teslim et",
        "example": "Bana kitabı getiriyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: verin → geben • Kendiniz için alın → nehmen."
    },
    "important": [
      "Geben ve nehmen zıt yönlerdir.",
      "Bekommen vermek değil almak demektir."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "geben"
        ],
        "red": [
          "nehmen",
          "bekommen"
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
              "numaramı"
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

## Finding 27

**Audit ID:** `LRB101-0027`
**Finding Stable ID:** `g2/a1/tr|gefallen|idx:225|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `gefallen|idx:225`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Beğenmek","study.translation":"Beğenmek","study.explanation":"[\"Ana fikir: gefallen hoşlanmak anlamına gelir, ancak Almanca cümle yapısı Letonca'dan farklıdır.\",\"Almanca'da hoşlanan şey cümlenin ana konusudur.\",\"Hoşlanan kişi datif halindedir: mir, dir, ihm, ihr, uns, euch, ihnen.\"]","study.examples":"[{\"de\":\"Das gefällt mir.\",\"lv\":\"bana hoşlanıyorum.\"},{\"de\":\"Gefällt dir das Kleid?\",\"lv\":\"sana elbise hoşlanıyor mu?\"},{\"de\":\"Der Film gefällt uns.\",\"lv\":\"bize film hoşlanıyorum.\"}]","study.comparison":"[{\"word\":\"gefallen\",\"meaning\":\"hoşlanmak • kişi datif halinde\",\"example\":\"Das gefällt mir. – Bana hoşlanıyorum.\"},{\"word\":\"mögen\",\"meaning\":\"hoşlanmak • iyice seçmek\",\"example\":\"Ich mag das. – Bana hoşlanıyorum.\"}]","study.tip":"[\"Yapıyı hatırlayın: Das gefällt mir.\",\"Kelimelerin tam Letonca sırasını oluşturmayın.\"]","study.important":"[\"gefallen datif ile kullanılır: mir, dir, ihm, ihr.\",\"Das gefällt mir = bana hoşlanıyorum.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hoşuna gitmek","study.translation":"hoşuna gitmek","study.explanation":"[\"Ana fikir: gefallen, bir şeyin bir kişinin hoşuna gitmesini anlatır.\",\"Beğenilen şey özne, beğenen kişi Dativ olur: mir, dir, ihm, ihr, uns, euch, ihnen.\",\"mögen yapısında ise beğenen kişi öznedir.\"]","study.examples":"[{\"de\":\"Das gefällt mir.\",\"lv\":\"Bu hoşuma gidiyor.\"},{\"de\":\"Gefällt dir das Kleid?\",\"lv\":\"Elbise hoşuna gidiyor mu?\"},{\"de\":\"Der Film gefällt uns.\",\"lv\":\"Film hoşumuza gidiyor.\"}]","study.comparison":"[{\"word\":\"gefallen\",\"meaning\":\"hoşuna gitmek; kişi Dativ\",\"example\":\"Das gefällt mir. – Bu hoşuma gidiyor.\"},{\"word\":\"mögen\",\"meaning\":\"beğenmek / sevmek\",\"example\":\"Ich mag das. – Bunu beğeniyorum.\"}]","study.tip":"[\"Kalıp: Das gefällt mir.\"]","study.important":"[\"gefallen Dativ ile kullanılır: mir, dir, ihm, ihr, uns, euch, ihnen.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: gefallen: individual full-card repair of lv/study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gefallen",
  "lv": "hoşuna gitmek",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "hoşuna gitmek",
    "explanation": [
      "Ana fikir: gefallen, bir şeyin bir kişinin hoşuna gitmesini anlatır.",
      "Beğenilen şey özne, beğenen kişi Dativ olur: mir, dir, ihm, ihr, uns, euch, ihnen.",
      "mögen yapısında ise beğenen kişi öznedir."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "Bu hoşuma gidiyor."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "Elbise hoşuna gidiyor mu?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "Film hoşumuza gidiyor."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "hoşuna gitmek; kişi Dativ",
        "example": "Das gefällt mir. – Bu hoşuma gidiyor."
      },
      {
        "word": "mögen",
        "meaning": "beğenmek / sevmek",
        "example": "Ich mag das. – Bunu beğeniyorum."
      }
    ],
    "tip": [
      "Kalıp: Das gefällt mir."
    ],
    "important": [
      "gefallen Dativ ile kullanılır: mir, dir, ihm, ihr, uns, euch, ihnen."
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
  "de": "gefallen",
  "lv": "Beğenmek",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "Beğenmek",
    "explanation": [
      "Ana fikir: gefallen hoşlanmak anlamına gelir, ancak Almanca cümle yapısı Letonca'dan farklıdır.",
      "Almanca'da hoşlanan şey cümlenin ana konusudur.",
      "Hoşlanan kişi datif halindedir: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "bana hoşlanıyorum."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "sana elbise hoşlanıyor mu?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "bize film hoşlanıyorum."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "hoşlanmak • kişi datif halinde",
        "example": "Das gefällt mir. – Bana hoşlanıyorum."
      },
      {
        "word": "mögen",
        "meaning": "hoşlanmak • iyice seçmek",
        "example": "Ich mag das. – Bana hoşlanıyorum."
      }
    ],
    "tip": [
      "Yapıyı hatırlayın: Das gefällt mir.",
      "Kelimelerin tam Letonca sırasını oluşturmayın."
    ],
    "important": [
      "gefallen datif ile kullanılır: mir, dir, ihm, ihr.",
      "Das gefällt mir = bana hoşlanıyorum."
    ]
  }
}
```

---

## Finding 28

**Audit ID:** `LRB101-0028`
**Finding Stable ID:** `g2/a1/tr|Gemüse|idx:692|lv, study.translation, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Gemüse|idx:692`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sebze","study.translation":"Sebze","study.explanation":"[\"Ana fikir: Genel olarak sebzeler hakkında. *die Gemüse'nin Almanca'da çoğulu yoktur.\",\"Das Gemüse genel olarak sebze anlamına gelir.\",\"Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil).\"]","study.examples":"[{\"de\":\"Ich esse gern Gemüse.\",\"lv\":\"Sebze yemeyi severim.\"},{\"de\":\"Ich esse gern Gemüse.\",\"lv\":\"Sebze yemeyi severim.\"},{\"de\":\"Das Gemüse ist frisch.\",\"lv\":\"Sebzeler taze.\"},{\"de\":\"Wir kaufen Gemüse auf dem Markt.\",\"lv\":\"Marketten sebze alıyoruz.\"},{\"de\":\"Ich mag Obst und Gemüse.\",\"lv\":\"Meyve ve sebzeleri severim.\"},{\"de\":\"Ich esse Gemüse.\",\"lv\":\"Sebze yerim.\"}]","study.tip":"[\"Das Gemüse = sebzeler\",\"Bağlam bu anlamla eşleştiğinde das Gemüse kullanın.\"]","study.important":"[\"Yanlış: die Gemüse, die Obsts.\",\"Yanlış: die Gemüse → Doğru: das Gemüse\",\"Das Gemüse = sebzeler (genel olarak).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sebze","study.translation":"sebze","study.explanation":"[\"Ana fikir: das Gemüse, sebzeyi genel ve toplu bir kavram olarak belirtir.\",\"Bu anlamda çoğunlukla tekil kullanılır; olağan çoğulu *die Gemüse değildir.\"]","study.examples":"[{\"de\":\"Ich esse gern Gemüse.\",\"lv\":\"Sebze yemeyi severim.\"},{\"de\":\"Ich esse gern Gemüse.\",\"lv\":\"Sebze yemeyi severim.\"},{\"de\":\"Das Gemüse ist frisch.\",\"lv\":\"Sebze taze.\"},{\"de\":\"Wir kaufen Gemüse auf dem Markt.\",\"lv\":\"Pazardan sebze alıyoruz.\"},{\"de\":\"Ich mag Obst und Gemüse.\",\"lv\":\"Meyve ve sebzeyi severim.\"},{\"de\":\"Ich esse Gemüse.\",\"lv\":\"Sebze yiyorum.\"}]","study.tip":"[\"das Gemüse = genel anlamda sebze.\"]","study.important":"[\"Doğru genel kullanım: das Gemüse; *die Gemüse değil.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Gemüse: individual full-card repair of lv, study.translation, study.explanation, study.examples, study.tip, study.important; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Gemüse",
  "de_article": "das",
  "lv": "sebze",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "sebze",
    "explanation": [
      "Ana fikir: das Gemüse, sebzeyi genel ve toplu bir kavram olarak belirtir.",
      "Bu anlamda çoğunlukla tekil kullanılır; olağan çoğulu *die Gemüse değildir."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Sebze yemeyi severim."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Sebze yemeyi severim."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Sebze taze."
      },
      {
        "de": "Wir kaufen Gemüse auf dem Markt.",
        "lv": "Pazardan sebze alıyoruz."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Meyve ve sebzeyi severim."
      },
      {
        "de": "Ich esse Gemüse.",
        "lv": "Sebze yiyorum."
      }
    ],
    "tip": [
      "das Gemüse = genel anlamda sebze."
    ],
    "important": [
      "Doğru genel kullanım: das Gemüse; *die Gemüse değil."
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
  "de": "Gemüse",
  "de_article": "das",
  "lv": "Sebze",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "Sebze",
    "explanation": [
      "Ana fikir: Genel olarak sebzeler hakkında. *die Gemüse'nin Almanca'da çoğulu yoktur.",
      "Das Gemüse genel olarak sebze anlamına gelir.",
      "Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil)."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Sebze yemeyi severim."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Sebze yemeyi severim."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Sebzeler taze."
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
      "Das Gemüse = sebzeler",
      "Bağlam bu anlamla eşleştiğinde das Gemüse kullanın."
    ],
    "important": [
      "Yanlış: die Gemüse, die Obsts.",
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

## Finding 29

**Audit ID:** `LRB101-0029`
**Finding Stable ID:** `g2/a1/tr|Geschichte|idx:233|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `Geschichte|idx:233`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"hikaye","study.translation":"hikaye","study.explanation":"[\"Ana fikir: Geschichte hikaye veya tarih anlamına gelebilir.\",\"Çoğul die Geschichten genellikle hikayeleri anlamına gelir.\",\"Tarih anlamına gelen Geschichte kelimesi genellikle tekil olarak kullanılır.\"]","study.examples":"[{\"de\":\"Er erzählt eine Geschichte.\",\"lv\":\"o bir hikaye anlatıyor.\"},{\"de\":\"Ich lerne Geschichte.\",\"lv\":\"tarih öğreniyorum.\"},{\"de\":\"Das ist die Geschichte Deutschlands.\",\"lv\":\"bu Almanya'nın tarihidir.\"}]","study.comparison":"[{\"word\":\"eine Geschichte\",\"meaning\":\"hikaye\",\"example\":\"eine interessante Geschichte – ilginç bir hikaye\"},{\"word\":\"Geschichte\",\"meaning\":\"tarih\",\"example\":\"Geschichte lernen – tarih öğrenmek\"}]","study.tip":"[\"Eine ve çoğul ile genellikle hikaye söz konusudur.\",\"Bir ders konusu olarak Geschichte tarih anlamına gelir.\"]","study.important":"[\"die Geschichten = hikayeler.\",\"Geschichte tarih olarak genellikle tekil haldir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hikâye • tarih","study.translation":"hikâye • tarih","study.explanation":"[\"Ana fikir: die Geschichte bağlama göre hikâye veya tarih anlamına gelir.\",\"Çoğul die Geschichten genellikle hikâyeleri; ders veya geçmiş bağlamındaki tekil Geschichte tarihi anlatır.\"]","study.examples":"[{\"de\":\"Er erzählt eine Geschichte.\",\"lv\":\"O bir hikâye anlatıyor.\"},{\"de\":\"Ich lerne Geschichte.\",\"lv\":\"Tarih öğreniyorum.\"},{\"de\":\"Das ist die Geschichte Deutschlands.\",\"lv\":\"Bu Almanya’nın tarihidir.\"}]","study.comparison":"[{\"word\":\"eine Geschichte\",\"meaning\":\"bir hikâye\",\"example\":\"eine interessante Geschichte – ilginç bir hikâye\"},{\"word\":\"Geschichte\",\"meaning\":\"tarih\",\"example\":\"Geschichte lernen – tarih öğrenmek\"}]","study.tip":"[\"eine/çoğul → hikâye; ders veya geçmiş → tarih.\"]","study.important":"[\"die Geschichten = hikâyeler; tarih anlamındaki Geschichte genellikle tekildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Geschichte: individual full-card repair of lv/study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Geschichte",
  "de_article": "die",
  "de_plural": "die Geschichten",
  "lv": "hikâye • tarih",
  "level": "A1",
  "study": {
    "id": "a1-geschichte-study",
    "layout": "standardStudy",
    "translation": "hikâye • tarih",
    "explanation": [
      "Ana fikir: die Geschichte bağlama göre hikâye veya tarih anlamına gelir.",
      "Çoğul die Geschichten genellikle hikâyeleri; ders veya geçmiş bağlamındaki tekil Geschichte tarihi anlatır."
    ],
    "examples": [
      {
        "de": "Er erzählt eine Geschichte.",
        "lv": "O bir hikâye anlatıyor."
      },
      {
        "de": "Ich lerne Geschichte.",
        "lv": "Tarih öğreniyorum."
      },
      {
        "de": "Das ist die Geschichte Deutschlands.",
        "lv": "Bu Almanya’nın tarihidir."
      }
    ],
    "comparison": [
      {
        "word": "eine Geschichte",
        "meaning": "bir hikâye",
        "example": "eine interessante Geschichte – ilginç bir hikâye"
      },
      {
        "word": "Geschichte",
        "meaning": "tarih",
        "example": "Geschichte lernen – tarih öğrenmek"
      }
    ],
    "tip": [
      "eine/çoğul → hikâye; ders veya geçmiş → tarih."
    ],
    "important": [
      "die Geschichten = hikâyeler; tarih anlamındaki Geschichte genellikle tekildir."
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
  "de": "Geschichte",
  "de_article": "die",
  "de_plural": "die Geschichten",
  "lv": "hikaye",
  "level": "A1",
  "study": {
    "id": "a1-geschichte-study",
    "layout": "standardStudy",
    "translation": "hikaye",
    "explanation": [
      "Ana fikir: Geschichte hikaye veya tarih anlamına gelebilir.",
      "Çoğul die Geschichten genellikle hikayeleri anlamına gelir.",
      "Tarih anlamına gelen Geschichte kelimesi genellikle tekil olarak kullanılır."
    ],
    "examples": [
      {
        "de": "Er erzählt eine Geschichte.",
        "lv": "o bir hikaye anlatıyor."
      },
      {
        "de": "Ich lerne Geschichte.",
        "lv": "tarih öğreniyorum."
      },
      {
        "de": "Das ist die Geschichte Deutschlands.",
        "lv": "bu Almanya'nın tarihidir."
      }
    ],
    "comparison": [
      {
        "word": "eine Geschichte",
        "meaning": "hikaye",
        "example": "eine interessante Geschichte – ilginç bir hikaye"
      },
      {
        "word": "Geschichte",
        "meaning": "tarih",
        "example": "Geschichte lernen – tarih öğrenmek"
      }
    ],
    "tip": [
      "Eine ve çoğul ile genellikle hikaye söz konusudur.",
      "Bir ders konusu olarak Geschichte tarih anlamına gelir."
    ],
    "important": [
      "die Geschichten = hikayeler.",
      "Geschichte tarih olarak genellikle tekil haldir."
    ]
  }
}
```

---

## Finding 30

**Audit ID:** `LRB101-0030`
**Finding Stable ID:** `g2/a1/tr|Geschwister|idx:234|study.examples[0].lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `Geschwister|idx:234`
**Field / path:** `study.examples[0].lv`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kardeşler","study.translation":"kardeşler","study.explanation":"[\"Ana fikir: Geschwister, erkek ve kız kardeşleri birlikte belirten çoğul bir sözcüktür.\",\"Tek kişi için Bruder veya Schwester kullanılır.\"]","study.examples":"[{\"de\":\"Ich habe zwei Geschwister.\",\"lv\":\"İki kardeşim var.\"},{\"de\":\"Meine Geschwister wohnen in Berlin.\",\"lv\":\"Kardeşlerim Berlin’de yaşıyor.\"}]","study.comparison":"[{\"word\":\"Geschwister\",\"meaning\":\"kardeşler\",\"example\":\"Meine Geschwister – kardeşlerim\"},{\"word\":\"Bruder\",\"meaning\":\"erkek kardeş\",\"example\":\"mein Bruder – erkek kardeşim\"},{\"word\":\"Schwester\",\"meaning\":\"kız kardeş\",\"example\":\"meine Schwester – kız kardeşim\"}]","study.tip":"[\"Geschwister çoğuldur; tek kişi için Bruder veya Schwester kullanılır.\"]","study.important":"[\"A1 düzeyinde *ein Geschwister tekil biçimi kullanılmaz.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Geschwister: individual full-card repair of study.examples[0].lv; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Geschwister",
  "de_article": "die",
  "lv": "kardeşler",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "kardeşler",
    "explanation": [
      "Ana fikir: Geschwister, erkek ve kız kardeşleri birlikte belirten çoğul bir sözcüktür.",
      "Tek kişi için Bruder veya Schwester kullanılır."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "İki kardeşim var."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "Kardeşlerim Berlin’de yaşıyor."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "kardeşler",
        "example": "Meine Geschwister – kardeşlerim"
      },
      {
        "word": "Bruder",
        "meaning": "erkek kardeş",
        "example": "mein Bruder – erkek kardeşim"
      },
      {
        "word": "Schwester",
        "meaning": "kız kardeş",
        "example": "meine Schwester – kız kardeşim"
      }
    ],
    "tip": [
      "Geschwister çoğuldur; tek kişi için Bruder veya Schwester kullanılır."
    ],
    "important": [
      "A1 düzeyinde *ein Geschwister tekil biçimi kullanılmaz."
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
  "de": "Geschwister",
  "de_article": "die",
  "lv": "kardeşler ve kızkardeşler",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "kardeşler ve kızkardeşler",
    "explanation": [
      "Ana fikir: Geschwister kardeşleri ve kızkardeşleri birlikte anlamına gelir.",
      "Bu kelime genellikle yalnızca çoğul olarak kullanılır.",
      "Bir kişi için Bruder veya Schwester kullanın."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "iki kardeşim veya kızkardeşim var."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "kardeşlerim ve kızkardeşlerim Berlin'de yaşıyorlar."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "kardeşler ve kızkardeşler",
        "example": "Meine Geschwister – Benim kardeşlerim"
      },
      {
        "word": "Bruder",
        "meaning": "Kardeş",
        "example": "mein Bruder – benim erkek kardeşim"
      },
      {
        "word": "Schwester",
        "meaning": "Kız kardeş",
        "example": "meine Schwester – benim kızkardeşim"
      }
    ],
    "tip": [
      "Geschwister genellikle çoğul olarak kullanılır.",
      "Bir kişi için Bruder veya Schwester seçin."
    ],
    "important": [
      "Ein Geschwister'ı normal A1 tekil formu olarak kullanmayın."
    ]
  }
}
```

---

## Finding 31

**Audit ID:** `LRB101-0031`
**Finding Stable ID:** `g2/a1/tr|groß|idx:250|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** tr
**Card:** `groß|idx:250`
**Field / path:** `study.examples[1].lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"büyük • uzun boylu","study.translation":"büyük • uzun boylu","study.explanation":"[\"Ana fikir: groß nesnelerde büyük boyutu, şehirlerde genişliği/önemi, kişilerde uzun boyu anlatır.\"]","study.examples":"[{\"de\":\"Das Haus ist groß.\",\"lv\":\"Ev büyük.\"},{\"de\":\"Berlin ist eine große Stadt.\",\"lv\":\"Berlin büyük bir şehirdir.\"},{\"de\":\"Er ist groß.\",\"lv\":\"O uzun boylu.\"},{\"de\":\"Das Zimmer ist groß.\",\"lv\":\"Oda büyük.\"}]","study.tip":"[\"Nesne/yer → büyük; kişi → uzun boylu.\"]","study.important":"[\"Bir kişi için groß çoğunlukla “uzun boylu” demektir.\"]","study.sectionAccents":{"explanation":[{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: groß: individual full-card repair of study.examples[1].lv; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "groß",
  "lv": "büyük • uzun boylu",
  "level": "A1",
  "study": {
    "id": "a1-gross-study",
    "layout": "standardStudy",
    "translation": "büyük • uzun boylu",
    "explanation": [
      "Ana fikir: groß nesnelerde büyük boyutu, şehirlerde genişliği/önemi, kişilerde uzun boyu anlatır."
    ],
    "examples": [
      {
        "de": "Das Haus ist groß.",
        "lv": "Ev büyük."
      },
      {
        "de": "Berlin ist eine große Stadt.",
        "lv": "Berlin büyük bir şehirdir."
      },
      {
        "de": "Er ist groß.",
        "lv": "O uzun boylu."
      },
      {
        "de": "Das Zimmer ist groß.",
        "lv": "Oda büyük."
      }
    ],
    "tip": [
      "Nesne/yer → büyük; kişi → uzun boylu."
    ],
    "important": [
      "Bir kişi için groß çoğunlukla “uzun boylu” demektir."
    ],
    "sectionAccents": {
      "explanation": [
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
  "de": "groß",
  "lv": "Büyük",
  "level": "A1",
  "study": {
    "id": "a1-gross-study",
    "layout": "standardStudy",
    "translation": "Büyük",
    "explanation": [
      "Ana fikir: Büyük boy veya kişi başına - uzun boy.",
      "Groß her şeyden önce büyük boyut anlamına gelir.",
      "Genellikle şu şekilde karakterize edilir: genel boyut."
    ],
    "examples": [
      {
        "de": "Das Haus ist groß.",
        "lv": "Ev büyük."
      },
      {
        "de": "Berlin ist eine große Stadt.",
        "lv": "Ev büyük."
      },
      {
        "de": "Er ist groß.",
        "lv": "Uzun boylu."
      },
      {
        "de": "Das Zimmer ist groß.",
        "lv": "Oda büyük."
      }
    ],
    "tip": [
      "Brüt = büyük",
      "Bağlam anlama uyduğunda groß kullanın."
    ],
    "important": [
      "Bir kişi için Er brüt, uzun anlamına gelir.",
      "Brüt = büyük."
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

## Finding 32

**Audit ID:** `LRB101-0032`
**Finding Stable ID:** `g2/a1/tr|haben|idx:261|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `haben|idx:261`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bende","study.translation":"Bende","study.explanation":"[\"Ana fikir: haben, birisinin bir şeye erişimi olduğu veya erişebildiği anlamına gelir.\",\"Letonca \\\"sahip olduğum/sahip olduğun\\\" datif yapısı Almanca'da yalın + haben şeklindedir: Ich habe…, Du hast…, Er hat… - *mir habe değil.\",\"Haben'i suçlayıcı durum takip ediyor: Ich habe ein Auto. = Bir arabam var.\",\"Haben aynı zamanda mükemmel zamanda yardımcı fiil olarak da kullanılır: Ich habe gelernt.\"]","study.examples":"[{\"de\":\"Ich habe ein Auto.\",\"lv\":\"Bir arabam var\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Zamanın var mı?\"},{\"de\":\"Wir haben Hunger.\",\"lv\":\"Acıktık.\"},{\"de\":\"Ich habe das gemacht.\",\"lv\":\"Yaptım\"}]","study.comparison":"[{\"word\":\"haben\",\"meaning\":\"Bende\",\"example\":\"Ich habe Zeit. = Zamanım var.\"},{\"word\":\"sein\",\"meaning\":\"Olmak\",\"example\":\"Ich bin hier. = Buradayım.\"},{\"word\":\"bekommen\",\"meaning\":\"Almak için\",\"example\":\"Ich bekomme ein Geschenk. = Hediye alıyorum.\"},{\"word\":\"machen\",\"meaning\":\"Yapmak / yapmak\",\"example\":\"Ich mache das. = Bunu yapıyorum.\"}]","study.tip":"{\"text\":\"Atceries: Ich habe → man ir.\"}","study.important":"[\"Letonca \\\"benim\\\" = Almanca Ich habe + suçlayıcı. Datif durumunu kullanmayın: yanlış *mir habe.\",\"Sein ve datif ile: Mir ist kalt. = Üşüyorum. (bu haben değil!)\",\"Mükemmel: Ich habe gelernt = Öğrendim.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sahip olmak • var","study.translation":"sahip olmak • var","study.explanation":"[\"Ana fikir: haben sahipliği, bir şeyin varlığını veya bir durumu ifade eder.\",\"Almancada özne + haben + Akkusativ kullanılır: Ich habe ein Auto.\",\"haben ayrıca Perfekt zamanda yardımcı fiildir.\"]","study.examples":"[{\"de\":\"Ich habe ein Auto.\",\"lv\":\"Bir arabam var.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Vaktin var mı?\"},{\"de\":\"Wir haben Hunger.\",\"lv\":\"Acıktık.\"},{\"de\":\"Ich habe das gemacht.\",\"lv\":\"Bunu yaptım.\"}]","study.comparison":"[{\"word\":\"haben\",\"meaning\":\"sahip olmak / var\",\"example\":\"Ich habe Zeit. = Vaktim var.\"},{\"word\":\"sein\",\"meaning\":\"olmak\",\"example\":\"Ich bin hier. = Buradayım.\"},{\"word\":\"bekommen\",\"meaning\":\"almak / elde etmek\",\"example\":\"Ich bekomme ein Geschenk. = Bir hediye alıyorum.\"},{\"word\":\"machen\",\"meaning\":\"yapmak\",\"example\":\"Ich mache das. = Bunu yapıyorum.\"}]","study.tip":"{\"text\":\"Ich habe... = benim ... var.\"}","study.important":"[\"haben nesnesi çoğunlukla Akkusativ olur.\",\"Perfekt: Ich habe gelernt.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: haben: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "haben",
  "lv": "sahip olmak • var",
  "level": "A1",
  "study": {
    "id": "a1-haben",
    "layout": "standardStudy",
    "translation": "sahip olmak • var",
    "explanation": [
      "Ana fikir: haben sahipliği, bir şeyin varlığını veya bir durumu ifade eder.",
      "Almancada özne + haben + Akkusativ kullanılır: Ich habe ein Auto.",
      "haben ayrıca Perfekt zamanda yardımcı fiildir."
    ],
    "examples": [
      {
        "de": "Ich habe ein Auto.",
        "lv": "Bir arabam var."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Vaktin var mı?"
      },
      {
        "de": "Wir haben Hunger.",
        "lv": "Acıktık."
      },
      {
        "de": "Ich habe das gemacht.",
        "lv": "Bunu yaptım."
      }
    ],
    "comparison": [
      {
        "word": "haben",
        "meaning": "sahip olmak / var",
        "example": "Ich habe Zeit. = Vaktim var."
      },
      {
        "word": "sein",
        "meaning": "olmak",
        "example": "Ich bin hier. = Buradayım."
      },
      {
        "word": "bekommen",
        "meaning": "almak / elde etmek",
        "example": "Ich bekomme ein Geschenk. = Bir hediye alıyorum."
      },
      {
        "word": "machen",
        "meaning": "yapmak",
        "example": "Ich mache das. = Bunu yapıyorum."
      }
    ],
    "tip": {
      "text": "Ich habe... = benim ... var."
    },
    "important": [
      "haben nesnesi çoğunlukla Akkusativ olur.",
      "Perfekt: Ich habe gelernt."
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
      "tip": {},
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
  "de": "haben",
  "lv": "Bende",
  "level": "A1",
  "study": {
    "id": "a1-haben",
    "layout": "standardStudy",
    "translation": "Bende",
    "explanation": [
      "Ana fikir: haben, birisinin bir şeye erişimi olduğu veya erişebildiği anlamına gelir.",
      "Letonca \"sahip olduğum/sahip olduğun\" datif yapısı Almanca'da yalın + haben şeklindedir: Ich habe…, Du hast…, Er hat… - *mir habe değil.",
      "Haben'i suçlayıcı durum takip ediyor: Ich habe ein Auto. = Bir arabam var.",
      "Haben aynı zamanda mükemmel zamanda yardımcı fiil olarak da kullanılır: Ich habe gelernt."
    ],
    "examples": [
      {
        "de": "Ich habe ein Auto.",
        "lv": "Bir arabam var"
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Zamanın var mı?"
      },
      {
        "de": "Wir haben Hunger.",
        "lv": "Acıktık."
      },
      {
        "de": "Ich habe das gemacht.",
        "lv": "Yaptım"
      }
    ],
    "comparison": [
      {
        "word": "haben",
        "meaning": "Bende",
        "example": "Ich habe Zeit. = Zamanım var."
      },
      {
        "word": "sein",
        "meaning": "Olmak",
        "example": "Ich bin hier. = Buradayım."
      },
      {
        "word": "bekommen",
        "meaning": "Almak için",
        "example": "Ich bekomme ein Geschenk. = Hediye alıyorum."
      },
      {
        "word": "machen",
        "meaning": "Yapmak / yapmak",
        "example": "Ich mache das. = Bunu yapıyorum."
      }
    ],
    "tip": {
      "text": "Atceries: Ich habe → man ir."
    },
    "important": [
      "Letonca \"benim\" = Almanca Ich habe + suçlayıcı. Datif durumunu kullanmayın: yanlış *mir habe.",
      "Sein ve datif ile: Mir ist kalt. = Üşüyorum. (bu haben değil!)",
      "Mükemmel: Ich habe gelernt = Öğrendim."
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
            "haben"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB101-0033`
**Finding Stable ID:** `g2/a1/tr|halten|idx:265|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `halten|idx:265`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Basılı tutun • Durdurun","study.translation":"Basılı tutun • Durdurun","study.explanation":"[\"Ana fikir: Halten tutmak anlamına gelir, ancak taşıma veya hareket durumunda durmak veya durmak anlamına da gelebilir.\",\"Elinizde bir nesne varken, genellikle halten tutulmalıdır.\",\"Otobüste, trende veya arabada durmak genellikle durmak anlamına gelir.\",\"In the sentence ich halte das für... it means to consider as.\"]","study.examples":"[{\"de\":\"Ich halte die Tasche.\",\"lv\":\"Çantayı tutuyorum\"},{\"de\":\"Der Bus hält hier.\",\"lv\":\"Otobüs burada durur.\"},{\"de\":\"Bitte halten Sie an.\",\"lv\":\"Lütfen dur\"},{\"de\":\"Ich halte das für richtig.\",\"lv\":\"Bunun doğru olduğunu düşünüyorum.\"}]","study.comparison":"[{\"word\":\"halten\",\"meaning\":\"Tut/durdur\",\"example\":\"Der Bus hält. = Otobüs duruyor.\"},{\"word\":\"nehmen\",\"meaning\":\"Almak\",\"example\":\"Ich nehme die Tasche. = Çantayı alıyorum.\"},{\"word\":\"anhalten\",\"meaning\":\"Durmak\",\"example\":\"Bitte halten Sie an. = Lütfen durun.\"},{\"word\":\"denken\",\"meaning\":\"Düşünmek\",\"example\":\"Ich denke, das ist richtig. = Bunun doğru olduğunu düşünüyorum.\"}]","study.tip":"{\"text\":\"Unutmayın: Eldeki → halten • Nakliye → durdurması/durdurmaları.\"}","study.important":"[\"Halten sadece \\\"tutmak\\\" anlamına gelmiyor. Ulaşımda bu genellikle durmak anlamına gelir.\",\"Ich halte das für... bir görüş ifadesidir: \\\"Bunu... olarak görüyorum \\\".\",\"Bitte halten Sie an ayrılabilir fiil anhalten kullanır.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"tutmak • durmak","study.translation":"tutmak • durmak","study.explanation":"[\"Ana fikir: halten elde tutmak, bir aracın durması veya bir şeyi belirli saymak anlamına gelebilir.\",\"anhalten ayrılabilen “durmak/durdurmak” fiilidir.\"]","study.examples":"[{\"de\":\"Ich halte die Tasche.\",\"lv\":\"Çantayı tutuyorum.\"},{\"de\":\"Der Bus hält hier.\",\"lv\":\"Otobüs burada duruyor.\"},{\"de\":\"Bitte halten Sie an.\",\"lv\":\"Lütfen durun.\"},{\"de\":\"Ich halte das für richtig.\",\"lv\":\"Bunun doğru olduğunu düşünüyorum.\"}]","study.comparison":"[{\"word\":\"halten\",\"meaning\":\"tutmak / durmak\",\"example\":\"Der Bus hält. = Otobüs duruyor.\"},{\"word\":\"nehmen\",\"meaning\":\"almak\",\"example\":\"Ich nehme die Tasche. = Çantayı alıyorum.\"},{\"word\":\"anhalten\",\"meaning\":\"durmak / durdurmak\",\"example\":\"Bitte halten Sie an. = Lütfen durun.\"},{\"word\":\"denken\",\"meaning\":\"düşünmek\",\"example\":\"Ich denke, das ist richtig. = Bunun doğru olduğunu düşünüyorum.\"}]","study.tip":"{\"text\":\"Eldeki nesne → tutmak; araç → durmak; für ile → ... olarak görmek.\"}","study.important":"[\"Ich halte das für... = Bunu ... olarak görüyorum.\",\"Bitte halten Sie an. resmî hitaptır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: halten: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "halten",
  "lv": "tutmak • durmak",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "tutmak • durmak",
    "explanation": [
      "Ana fikir: halten elde tutmak, bir aracın durması veya bir şeyi belirli saymak anlamına gelebilir.",
      "anhalten ayrılabilen “durmak/durdurmak” fiilidir."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Çantayı tutuyorum."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Otobüs burada duruyor."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Lütfen durun."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Bunun doğru olduğunu düşünüyorum."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "tutmak / durmak",
        "example": "Der Bus hält. = Otobüs duruyor."
      },
      {
        "word": "nehmen",
        "meaning": "almak",
        "example": "Ich nehme die Tasche. = Çantayı alıyorum."
      },
      {
        "word": "anhalten",
        "meaning": "durmak / durdurmak",
        "example": "Bitte halten Sie an. = Lütfen durun."
      },
      {
        "word": "denken",
        "meaning": "düşünmek",
        "example": "Ich denke, das ist richtig. = Bunun doğru olduğunu düşünüyorum."
      }
    ],
    "tip": {
      "text": "Eldeki nesne → tutmak; araç → durmak; für ile → ... olarak görmek."
    },
    "important": [
      "Ich halte das für... = Bunu ... olarak görüyorum.",
      "Bitte halten Sie an. resmî hitaptır."
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
      "tip": {},
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
  "de": "halten",
  "lv": "Basılı tutun • Durdurun",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Basılı tutun • Durdurun",
    "explanation": [
      "Ana fikir: Halten tutmak anlamına gelir, ancak taşıma veya hareket durumunda durmak veya durmak anlamına da gelebilir.",
      "Elinizde bir nesne varken, genellikle halten tutulmalıdır.",
      "Otobüste, trende veya arabada durmak genellikle durmak anlamına gelir.",
      "In the sentence ich halte das für... it means to consider as."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Çantayı tutuyorum"
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Otobüs burada durur."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Lütfen dur"
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Bunun doğru olduğunu düşünüyorum."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Tut/durdur",
        "example": "Der Bus hält. = Otobüs duruyor."
      },
      {
        "word": "nehmen",
        "meaning": "Almak",
        "example": "Ich nehme die Tasche. = Çantayı alıyorum."
      },
      {
        "word": "anhalten",
        "meaning": "Durmak",
        "example": "Bitte halten Sie an. = Lütfen durun."
      },
      {
        "word": "denken",
        "meaning": "Düşünmek",
        "example": "Ich denke, das ist richtig. = Bunun doğru olduğunu düşünüyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: Eldeki → halten • Nakliye → durdurması/durdurmaları."
    },
    "important": [
      "Halten sadece \"tutmak\" anlamına gelmiyor. Ulaşımda bu genellikle durmak anlamına gelir.",
      "Ich halte das für... bir görüş ifadesidir: \"Bunu... olarak görüyorum \".",
      "Bitte halten Sie an ayrılabilir fiil anhalten kullanır."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "halten"
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

## Finding 34

**Audit ID:** `LRB101-0034`
**Finding Stable ID:** `g2/a1/tr|Hand|idx:267|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `Hand|idx:267`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"el","study.translation":"el","study.explanation":"[\"Ana fikir: die Hand eli anlamına gelir.\",\"Almanca'da Arm ve Hand iki farklı kelimedir.\",\"Letonca günlük dilde roka kelimesi hem Arm hem de Hand'ı gösterebilir.\"]","study.examples":"[{\"de\":\"Ich wasche meine Hände.\",\"lv\":\"elleri yıkıyorum.\"},{\"de\":\"Sie hält das Glas in der Hand.\",\"lv\":\"elinde bir bardak tutuyor.\"},{\"de\":\"Mein Arm tut weh.\",\"lv\":\"elim ağrıyor.\"}]","study.comparison":"[{\"word\":\"die Hand\",\"meaning\":\"el\",\"example\":\"in der Hand – elde\"},{\"word\":\"der Arm\",\"meaning\":\"El\",\"example\":\"Mein Arm tut weh. – Kolum ağrıyor.\"}]","study.tip":"[\"Hand = el.\",\"Arm = omuzdan ele kadar olan kol.\"]","study.important":"[\"Almanca'da Hand ve Arm aynı kelime değildir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"el","study.translation":"el","study.explanation":"[\"Ana fikir: die Hand bilekten parmaklara kadar olan eldir.\",\"der Arm ise omuzdan ele kadar olan koldur.\"]","study.examples":"[{\"de\":\"Ich wasche meine Hände.\",\"lv\":\"Ellerimi yıkıyorum.\"},{\"de\":\"Sie hält das Glas in der Hand.\",\"lv\":\"Bardağı elinde tutuyor.\"},{\"de\":\"Mein Arm tut weh.\",\"lv\":\"Kolum ağrıyor.\"}]","study.comparison":"[{\"word\":\"die Hand\",\"meaning\":\"el\",\"example\":\"in der Hand – elde\"},{\"word\":\"der Arm\",\"meaning\":\"kol\",\"example\":\"Mein Arm tut weh. – Kolum ağrıyor.\"}]","study.tip":"[\"Hand = el; Arm = kol.\"]","study.important":"[\"Almancada Hand ve Arm farklı sözcüklerdir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: Hand: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Hand",
  "de_article": "die",
  "de_plural": "die Hände",
  "lv": "el",
  "level": "A1",
  "study": {
    "id": "a1-hand-study",
    "layout": "standardStudy",
    "translation": "el",
    "explanation": [
      "Ana fikir: die Hand bilekten parmaklara kadar olan eldir.",
      "der Arm ise omuzdan ele kadar olan koldur."
    ],
    "examples": [
      {
        "de": "Ich wasche meine Hände.",
        "lv": "Ellerimi yıkıyorum."
      },
      {
        "de": "Sie hält das Glas in der Hand.",
        "lv": "Bardağı elinde tutuyor."
      },
      {
        "de": "Mein Arm tut weh.",
        "lv": "Kolum ağrıyor."
      }
    ],
    "comparison": [
      {
        "word": "die Hand",
        "meaning": "el",
        "example": "in der Hand – elde"
      },
      {
        "word": "der Arm",
        "meaning": "kol",
        "example": "Mein Arm tut weh. – Kolum ağrıyor."
      }
    ],
    "tip": [
      "Hand = el; Arm = kol."
    ],
    "important": [
      "Almancada Hand ve Arm farklı sözcüklerdir."
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
  "de": "Hand",
  "de_article": "die",
  "de_plural": "die Hände",
  "lv": "el",
  "level": "A1",
  "study": {
    "id": "a1-hand-study",
    "layout": "standardStudy",
    "translation": "el",
    "explanation": [
      "Ana fikir: die Hand eli anlamına gelir.",
      "Almanca'da Arm ve Hand iki farklı kelimedir.",
      "Letonca günlük dilde roka kelimesi hem Arm hem de Hand'ı gösterebilir."
    ],
    "examples": [
      {
        "de": "Ich wasche meine Hände.",
        "lv": "elleri yıkıyorum."
      },
      {
        "de": "Sie hält das Glas in der Hand.",
        "lv": "elinde bir bardak tutuyor."
      },
      {
        "de": "Mein Arm tut weh.",
        "lv": "elim ağrıyor."
      }
    ],
    "comparison": [
      {
        "word": "die Hand",
        "meaning": "el",
        "example": "in der Hand – elde"
      },
      {
        "word": "der Arm",
        "meaning": "El",
        "example": "Mein Arm tut weh. – Kolum ağrıyor."
      }
    ],
    "tip": [
      "Hand = el.",
      "Arm = omuzdan ele kadar olan kol."
    ],
    "important": [
      "Almanca'da Hand ve Arm aynı kelime değildir."
    ]
  }
}
```

---

## Finding 35

**Audit ID:** `LRB101-0035`
**Finding Stable ID:** `g2/a1/tr|heißen|idx:276|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `heißen|idx:276`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kendinizi arayın • Demek istediğim","study.translation":"Kendinizi arayın • Demek istediğim","study.explanation":"[\"Ana fikir: heißen çoğunlukla birinin adını söylemek için kullanılır.\",\"Ich heiße... ifadesi \\\"benim adım...\\\" anlamına gelir.\",\"Kelimeler veya ifadelerle heißen aynı zamanda ortalama anlamına da gelebilir.\",\"A1 düzeyinde en önemli ifade Wie heißt du?\"]","study.examples":"[{\"de\":\"Ich heiße Anna.\",\"lv\":\"Benim adım Anna.\"},{\"de\":\"Wie heißt du?\",\"lv\":\"Adınız ne?\"},{\"de\":\"Wie heißt das auf Deutsch?\",\"lv\":\"Almanca'da buna ne denir?\"},{\"de\":\"Was heißt das?\",\"lv\":\"Bu ne anlama geliyor\"}]","study.comparison":"[{\"word\":\"heißen\",\"meaning\":\"Çağrılmak/etiketlenmek\",\"example\":\"Ich heiße Anna. = Adım Anna.\"},{\"word\":\"nennen\",\"meaning\":\"Ara/isim\",\"example\":\"Er nennt mich Tom. = Bana Tom diye seslendiyor.\"},{\"word\":\"bedeuten\",\"meaning\":\"Aklınızda bulunsun\",\"example\":\"Was bedeutet das? = Bu ne anlama geliyor?\"},{\"word\":\"rufen\",\"meaning\":\"Ara\",\"example\":\"Ich rufe dich. = Seni çağırıyorum.\"},{\"word\":\"anrufen\",\"meaning\":\"Ara\",\"example\":\"Ich rufe dich an. = Seni arıyorum.\"}]","study.tip":"{\"text\":\"Atceries: Ich heiße... → mani sauc...\"}","study.important":"[\"Peki ne oldu? Kelimenin tam anlamıyla \\\"Adın ne?\\\" değil, \\\"Adın ne?\\\" anlamına gelir.\",\"O da mıydı? genellikle \\\"Bu ne anlama geliyor?\\\" anlamına gelir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"adlandırılmak • anlamına gelmek","study.translation":"adlandırılmak • anlamına gelmek","study.explanation":"[\"Ana fikir: heißen bir kişinin adını söylemek veya bir sözcüğün ne anlama geldiğini sormak için kullanılır.\",\"Ich heiße... = Benim adım...; Was heißt das? = Bu ne anlama geliyor?\"]","study.examples":"[{\"de\":\"Ich heiße Anna.\",\"lv\":\"Benim adım Anna.\"},{\"de\":\"Wie heißt du?\",\"lv\":\"Adın ne?\"},{\"de\":\"Wie heißt das auf Deutsch?\",\"lv\":\"Buna Almanca ne denir?\"},{\"de\":\"Was heißt das?\",\"lv\":\"Bu ne anlama geliyor?\"}]","study.comparison":"[{\"word\":\"heißen\",\"meaning\":\"adlandırılmak / adı olmak\",\"example\":\"Ich heiße Anna. = Benim adım Anna.\"},{\"word\":\"nennen\",\"meaning\":\"adlandırmak\",\"example\":\"Er nennt mich Tom. = Bana Tom diyor.\"},{\"word\":\"bedeuten\",\"meaning\":\"anlamına gelmek\",\"example\":\"Was bedeutet das? = Bu ne anlama geliyor?\"},{\"word\":\"rufen\",\"meaning\":\"seslenmek / çağırmak\",\"example\":\"Ich rufe dich. = Sana sesleniyorum.\"},{\"word\":\"anrufen\",\"meaning\":\"telefonla aramak\",\"example\":\"Ich rufe dich an. = Seni telefonla arıyorum.\"}]","study.tip":"{\"text\":\"Ich heiße... = Benim adım...; Wie heißt du? = Adın ne?\"}","study.important":"[\"heißen ad veya anlam sorabilir; anrufen telefonla aramaktır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: heißen: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "heißen",
  "lv": "adlandırılmak • anlamına gelmek",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "adlandırılmak • anlamına gelmek",
    "explanation": [
      "Ana fikir: heißen bir kişinin adını söylemek veya bir sözcüğün ne anlama geldiğini sormak için kullanılır.",
      "Ich heiße... = Benim adım...; Was heißt das? = Bu ne anlama geliyor?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Benim adım Anna."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Adın ne?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Buna Almanca ne denir?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Bu ne anlama geliyor?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "adlandırılmak / adı olmak",
        "example": "Ich heiße Anna. = Benim adım Anna."
      },
      {
        "word": "nennen",
        "meaning": "adlandırmak",
        "example": "Er nennt mich Tom. = Bana Tom diyor."
      },
      {
        "word": "bedeuten",
        "meaning": "anlamına gelmek",
        "example": "Was bedeutet das? = Bu ne anlama geliyor?"
      },
      {
        "word": "rufen",
        "meaning": "seslenmek / çağırmak",
        "example": "Ich rufe dich. = Sana sesleniyorum."
      },
      {
        "word": "anrufen",
        "meaning": "telefonla aramak",
        "example": "Ich rufe dich an. = Seni telefonla arıyorum."
      }
    ],
    "tip": {
      "text": "Ich heiße... = Benim adım...; Wie heißt du? = Adın ne?"
    },
    "important": [
      "heißen ad veya anlam sorabilir; anrufen telefonla aramaktır."
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
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
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
  "de": "heißen",
  "lv": "Kendinizi arayın • Demek istediğim",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "Kendinizi arayın • Demek istediğim",
    "explanation": [
      "Ana fikir: heißen çoğunlukla birinin adını söylemek için kullanılır.",
      "Ich heiße... ifadesi \"benim adım...\" anlamına gelir.",
      "Kelimeler veya ifadelerle heißen aynı zamanda ortalama anlamına da gelebilir.",
      "A1 düzeyinde en önemli ifade Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Benim adım Anna."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Adınız ne?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Almanca'da buna ne denir?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Bu ne anlama geliyor"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "Çağrılmak/etiketlenmek",
        "example": "Ich heiße Anna. = Adım Anna."
      },
      {
        "word": "nennen",
        "meaning": "Ara/isim",
        "example": "Er nennt mich Tom. = Bana Tom diye seslendiyor."
      },
      {
        "word": "bedeuten",
        "meaning": "Aklınızda bulunsun",
        "example": "Was bedeutet das? = Bu ne anlama geliyor?"
      },
      {
        "word": "rufen",
        "meaning": "Ara",
        "example": "Ich rufe dich. = Seni çağırıyorum."
      },
      {
        "word": "anrufen",
        "meaning": "Ara",
        "example": "Ich rufe dich an. = Seni arıyorum."
      }
    ],
    "tip": {
      "text": "Atceries: Ich heiße... → mani sauc..."
    },
    "important": [
      "Peki ne oldu? Kelimenin tam anlamıyla \"Adın ne?\" değil, \"Adın ne?\" anlamına gelir.",
      "O da mıydı? genellikle \"Bu ne anlama geliyor?\" anlamına gelir."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "heißen",
          "Ich heiße",
          "Wie heißt du"
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

## Finding 36

**Audit ID:** `LRB101-0036`
**Finding Stable ID:** `g2/a1/tr|hoch|idx:285|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `hoch|idx:285`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Yüksek","study.translation":"Yüksek","study.explanation":"[\"Ana fikir: dikey, yatay veya yükseklik olarak yüksek.\",\"Hoch her şeyden önce büyük büyüme anlamına gelir.\",\"Genellikle şu şekilde karakterize edilir: dikey yükseklik.\"]","study.examples":"[{\"de\":\"Der Berg ist hoch.\",\"lv\":\"Üst kısım yüksek.\"},{\"de\":\"Das Regal ist zwei Meter hoch.\",\"lv\":\"Üst kısım yüksek.\"},{\"de\":\"Die Miete ist hoch.\",\"lv\":\"Kiralar yüksek.\"},{\"de\":\"Die Mauer ist hoch.\",\"lv\":\"Duvar yüksek.\"},{\"de\":\"Die Preise sind hoch.\",\"lv\":\"Fiyatlar yüksek.\"}]","study.tip":"[\"Hoh = yüksek\",\"Bağlam bu anlama uygun olduğunda hoch kullanın.\"]","study.important":"[\"Hoch genellikle fiyatları ve seviyeleri belirtmek için kullanılır.\",\"Hoh = yüksek.\",\"Dikey, yatay veya yüksekte boylu.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"yüksek","study.translation":"yüksek","study.explanation":"[\"Ana fikir: hoch dikey yüksekliği ve ayrıca yüksek fiyat, kira veya düzeyi anlatır.\",\"groß genel büyüklük veya kişi boyu için kullanılır; hoch yüksekliği ölçer.\"]","study.examples":"[{\"de\":\"Der Berg ist hoch.\",\"lv\":\"Dağ yüksek.\"},{\"de\":\"Das Regal ist zwei Meter hoch.\",\"lv\":\"Raf iki metre yüksekliğinde.\"},{\"de\":\"Die Miete ist hoch.\",\"lv\":\"Kira yüksek.\"},{\"de\":\"Die Mauer ist hoch.\",\"lv\":\"Duvar yüksek.\"},{\"de\":\"Die Preise sind hoch.\",\"lv\":\"Fiyatlar yüksek.\"}]","study.tip":"[\"Dikey yükseklik, fiyat veya düzey → hoch.\"]","study.important":"[\"hoch yalnızca fiziksel yüksekliği değil, yüksek fiyat ve seviyeyi de anlatır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: hoch: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hoch",
  "lv": "yüksek",
  "level": "A1",
  "study": {
    "id": "a1-hoch-study",
    "layout": "standardStudy",
    "translation": "yüksek",
    "explanation": [
      "Ana fikir: hoch dikey yüksekliği ve ayrıca yüksek fiyat, kira veya düzeyi anlatır.",
      "groß genel büyüklük veya kişi boyu için kullanılır; hoch yüksekliği ölçer."
    ],
    "examples": [
      {
        "de": "Der Berg ist hoch.",
        "lv": "Dağ yüksek."
      },
      {
        "de": "Das Regal ist zwei Meter hoch.",
        "lv": "Raf iki metre yüksekliğinde."
      },
      {
        "de": "Die Miete ist hoch.",
        "lv": "Kira yüksek."
      },
      {
        "de": "Die Mauer ist hoch.",
        "lv": "Duvar yüksek."
      },
      {
        "de": "Die Preise sind hoch.",
        "lv": "Fiyatlar yüksek."
      }
    ],
    "tip": [
      "Dikey yükseklik, fiyat veya düzey → hoch."
    ],
    "important": [
      "hoch yalnızca fiziksel yüksekliği değil, yüksek fiyat ve seviyeyi de anlatır."
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
  "de": "hoch",
  "lv": "Yüksek",
  "level": "A1",
  "study": {
    "id": "a1-hoch-study",
    "layout": "standardStudy",
    "translation": "Yüksek",
    "explanation": [
      "Ana fikir: dikey, yatay veya yükseklik olarak yüksek.",
      "Hoch her şeyden önce büyük büyüme anlamına gelir.",
      "Genellikle şu şekilde karakterize edilir: dikey yükseklik."
    ],
    "examples": [
      {
        "de": "Der Berg ist hoch.",
        "lv": "Üst kısım yüksek."
      },
      {
        "de": "Das Regal ist zwei Meter hoch.",
        "lv": "Üst kısım yüksek."
      },
      {
        "de": "Die Miete ist hoch.",
        "lv": "Kiralar yüksek."
      },
      {
        "de": "Die Mauer ist hoch.",
        "lv": "Duvar yüksek."
      },
      {
        "de": "Die Preise sind hoch.",
        "lv": "Fiyatlar yüksek."
      }
    ],
    "tip": [
      "Hoh = yüksek",
      "Bağlam bu anlama uygun olduğunda hoch kullanın."
    ],
    "important": [
      "Hoch genellikle fiyatları ve seviyeleri belirtmek için kullanılır.",
      "Hoh = yüksek.",
      "Dikey, yatay veya yüksekte boylu."
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

## Finding 37

**Audit ID:** `LRB101-0037`
**Finding Stable ID:** `g2/a1/tr|hören|idx:287|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `hören|idx:287`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Dinleyin • Dinleyin","study.translation":"Dinleyin • Dinleyin","study.explanation":"[\"Ana fikir: ses duymak veya müzik dinlemek.\",\"Hören her şeyden önce: sesi algılamak anlamına gelir.\",\"Genellikle şu şekilde karakterize edilir: sesler.\",\"Hören • Sesleri, müziği ve duyulanları anlatmak için kullanılır.\"]","study.examples":"[{\"de\":\"Ich höre Musik.\",\"lv\":\"Müzik dinliyorum.\"},{\"de\":\"Die Kinder hören eine Geschichte.\",\"lv\":\"Çocuklar hikayeler dinler.\"},{\"de\":\"Ich höre dich.\",\"lv\":\"Seni duyuyorum\"}]","study.tip":"[\"Sesi duyun veya müziği dinleyin.\",\"Bağlam bu anlama uygun olduğunda hören kullanın.\"]","study.important":"[\"Hören = Sesi duymak/dinlemek.\",\"Sesi duyun veya müziği dinleyin.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"duymak • dinlemek","study.translation":"duymak • dinlemek","study.explanation":"[\"Ana fikir: hören sesleri duymayı veya müzik ve anlatı dinlemeyi ifade eder.\",\"Türkçede bağlama göre “duymak” ya da “dinlemek” diye çevrilir.\"]","study.examples":"[{\"de\":\"Ich höre Musik.\",\"lv\":\"Müzik dinliyorum.\"},{\"de\":\"Die Kinder hören eine Geschichte.\",\"lv\":\"Çocuklar bir hikâye dinliyor.\"},{\"de\":\"Ich höre dich.\",\"lv\":\"Seni duyuyorum.\"}]","study.tip":"[\"Ses kendiliğinden algılanıyorsa duymak; dikkatle takip ediliyorsa dinlemek.\"]","study.important":"[\"hören bağlama göre duymak veya dinlemek demektir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: hören: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hören",
  "lv": "duymak • dinlemek",
  "level": "A1",
  "study": {
    "id": "a1-hoeren-study",
    "layout": "standardStudy",
    "translation": "duymak • dinlemek",
    "explanation": [
      "Ana fikir: hören sesleri duymayı veya müzik ve anlatı dinlemeyi ifade eder.",
      "Türkçede bağlama göre “duymak” ya da “dinlemek” diye çevrilir."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Müzik dinliyorum."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Çocuklar bir hikâye dinliyor."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Seni duyuyorum."
      }
    ],
    "tip": [
      "Ses kendiliğinden algılanıyorsa duymak; dikkatle takip ediliyorsa dinlemek."
    ],
    "important": [
      "hören bağlama göre duymak veya dinlemek demektir."
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
  "de": "hören",
  "lv": "Dinleyin • Dinleyin",
  "level": "A1",
  "study": {
    "id": "a1-hoeren-study",
    "layout": "standardStudy",
    "translation": "Dinleyin • Dinleyin",
    "explanation": [
      "Ana fikir: ses duymak veya müzik dinlemek.",
      "Hören her şeyden önce: sesi algılamak anlamına gelir.",
      "Genellikle şu şekilde karakterize edilir: sesler.",
      "Hören • Sesleri, müziği ve duyulanları anlatmak için kullanılır."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Müzik dinliyorum."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Çocuklar hikayeler dinler."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Seni duyuyorum"
      }
    ],
    "tip": [
      "Sesi duyun veya müziği dinleyin.",
      "Bağlam bu anlama uygun olduğunda hören kullanın."
    ],
    "important": [
      "Hören = Sesi duymak/dinlemek.",
      "Sesi duyun veya müziği dinleyin."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "hören"
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
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
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

## Finding 38

**Audit ID:** `LRB101-0038`
**Finding Stable ID:** `g2/a1/tr|hübsch|idx:288|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `hübsch|idx:288`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"güzel","study.translation":"güzel","study.explanation":"[\"Ana fikir: hübsch güzel, çekici veya sevimli anlamına gelir.\",\"hübsch sıklıkla bir kişinin, kıyafetinin, odanın veya nesnenin görünüşünü tanımlar.\",\"Letonca jauks bazı bağlamlarda mümkündür, ancak ana çeviri olarak çok geniştir.\",\"Karakter veya kibar davranış Almanca'da genellikle nett ile tanımlanır.\"]","study.examples":"[{\"de\":\"Sie trägt ein hübsches Kleid.\",\"lv\":\"Güzel bir elbisesi var.\"},{\"de\":\"Das Zimmer ist hübsch.\",\"lv\":\"Oda güzeldir.\"},{\"de\":\"Das ist ein hübsches Bild.\",\"lv\":\"Bu güzel bir resimdir.\"}]","study.comparison":"[{\"word\":\"hübsch\",\"meaning\":\"güzel • görüntüsü çekici\",\"example\":\"Das ist ein hübsches Kleid. – Bu güzel bir elbisedir.\"},{\"word\":\"schön\",\"meaning\":\"güzel • hoştur\",\"example\":\"Der Garten ist schön. – Bahçe güzeldir.\"},{\"word\":\"nett\",\"meaning\":\"hoş • kibar\",\"example\":\"Sie ist sehr nett. – O çok hoştur.\"}]","study.tip":"{\"text\":\"Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos.\"}","study.important":"[\"hübsch jauks kelimesinin evrensel çevirisi değildir.\",\"Bir kişinin karakteri veya kibar davranışı için genellikle nett daha uygundur.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"güzel • hoş","study.translation":"güzel • hoş","study.explanation":"[\"Ana fikir: hübsch bir kişinin, giysinin, odanın veya nesnenin güzel ve hoş görünüşünü anlatır.\",\"schön daha geniş anlamda güzel; nett ise çoğunlukla nazik veya hoş karakter demektir.\"]","study.examples":"[{\"de\":\"Sie trägt ein hübsches Kleid.\",\"lv\":\"O güzel bir elbise giyiyor.\"},{\"de\":\"Das Zimmer ist hübsch.\",\"lv\":\"Oda güzel.\"},{\"de\":\"Das ist ein hübsches Bild.\",\"lv\":\"Bu güzel bir resim.\"}]","study.comparison":"[{\"word\":\"hübsch\",\"meaning\":\"güzel / hoş görünüşlü\",\"example\":\"Das ist ein hübsches Kleid. – Bu güzel bir elbise.\"},{\"word\":\"schön\",\"meaning\":\"güzel\",\"example\":\"Der Garten ist schön. – Bahçe güzel.\"},{\"word\":\"nett\",\"meaning\":\"nazik / hoş\",\"example\":\"Sie ist sehr nett. – O çok nazik.\"}]","study.tip":"{\"text\":\"Görünüş → hübsch; karakter veya davranış → nett.\"}","study.important":"[\"hübsch ve nett aynı anlamda değildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: hübsch: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hübsch",
  "lv": "güzel • hoş",
  "level": "A1",
  "study": {
    "id": "a1-huebsch",
    "layout": "standardStudy",
    "translation": "güzel • hoş",
    "explanation": [
      "Ana fikir: hübsch bir kişinin, giysinin, odanın veya nesnenin güzel ve hoş görünüşünü anlatır.",
      "schön daha geniş anlamda güzel; nett ise çoğunlukla nazik veya hoş karakter demektir."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "O güzel bir elbise giyiyor."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "Oda güzel."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "Bu güzel bir resim."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "güzel / hoş görünüşlü",
        "example": "Das ist ein hübsches Kleid. – Bu güzel bir elbise."
      },
      {
        "word": "schön",
        "meaning": "güzel",
        "example": "Der Garten ist schön. – Bahçe güzel."
      },
      {
        "word": "nett",
        "meaning": "nazik / hoş",
        "example": "Sie ist sehr nett. – O çok nazik."
      }
    ],
    "tip": {
      "text": "Görünüş → hübsch; karakter veya davranış → nett."
    },
    "important": [
      "hübsch ve nett aynı anlamda değildir."
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
      "tip": {},
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
  "de": "hübsch",
  "lv": "güzel",
  "level": "A1",
  "study": {
    "id": "a1-huebsch",
    "layout": "standardStudy",
    "translation": "güzel",
    "explanation": [
      "Ana fikir: hübsch güzel, çekici veya sevimli anlamına gelir.",
      "hübsch sıklıkla bir kişinin, kıyafetinin, odanın veya nesnenin görünüşünü tanımlar.",
      "Letonca jauks bazı bağlamlarda mümkündür, ancak ana çeviri olarak çok geniştir.",
      "Karakter veya kibar davranış Almanca'da genellikle nett ile tanımlanır."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "Güzel bir elbisesi var."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "Oda güzeldir."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "Bu güzel bir resimdir."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "güzel • görüntüsü çekici",
        "example": "Das ist ein hübsches Kleid. – Bu güzel bir elbisedir."
      },
      {
        "word": "schön",
        "meaning": "güzel • hoştur",
        "example": "Der Garten ist schön. – Bahçe güzeldir."
      },
      {
        "word": "nett",
        "meaning": "hoş • kibar",
        "example": "Sie ist sehr nett. – O çok hoştur."
      }
    ],
    "tip": {
      "text": "Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos."
    },
    "important": [
      "hübsch jauks kelimesinin evrensel çevirisi değildir.",
      "Bir kişinin karakteri veya kibar davranışı için genellikle nett daha uygundur."
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

## Finding 39

**Audit ID:** `LRB101-0039`
**Finding Stable ID:** `g2/a1/tr|ihr|idx:292|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `ihr|idx:292`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Siz • O","study.translation":"Siz • O","study.explanation":"[\"Ana fikir: ihr, aynı yazımı olan iki farklı zamirdir - birkaç kişiye (siz) hitap eder ve sie (o) zamirinin datif biçimidir.\",\"Adres olarak küçük ihr harfi kullanıldığında, birden fazla kişiye siz olarak tercüme edilebilir (Kommt ihr mit? = Bizimle geliyor musunuz?).\",\"Sahiplenici bir zamir olarak İhr, onun anlamına gelir (ihr Buch = onun kitabı).\",\"İhr'in datif formu (sie'den) onun için (Ich gebe ihr das Buch. = Ona bir kitap veriyorum.) anlamına gelir.\",\"Fiil formu (kommt, habt), bunun sizinle ilgili olduğunu - birkaç kişiye hitap ettiğini gösterir.\",\"Kibar bir adres her zaman büyük harfle yazılır Sie, ihr değil.\"]","study.examples":"[{\"de\":\"Kommt ihr heute Abend?\",\"lv\":\"Bu gece gelecek misin?\"},{\"de\":\"Ich gebe ihr das Buch.\",\"lv\":\"Ona kitabı veriyorum.\"},{\"de\":\"Wo wohnt ihr?\",\"lv\":\"Yaşadığınız yer\"},{\"de\":\"Er schreibt ihr einen Brief.\",\"lv\":\"Ona bir mektup yazar.\"},{\"de\":\"Habt ihr Zeit?\",\"lv\":\"Zamanın var mı?\"},{\"de\":\"Das ist ihr Auto.\",\"lv\":\"Bu onun arabası.\"}]","study.tip":"[\"Ihr, dsk fiiliyle birlikte kullanılır. form (kommt, habt) = siz • Durum veya iyelik sıfatı olarak bir kelimenin yanında Ihr = o.\",\"Kontrol Habt ihr...? / Kommt ihr...? = sen • Ich gebe ihr... / ihr Buch = onun için.\"]","study.important":"[\"Ihr = siz (birkaç kişiye hitap) VEYA o (datif) VEYA o (kiracı) – bağlama bağlı olarak.\",\"Kibar bir adreste her zaman ihr yerine büyük Sie harfiyle yazarız.\",\"Yanlış: Ihr (kibarca) → Doğru: Ağustos.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"siz • ona • onun","study.translation":"siz • ona • onun","study.explanation":"[\"Ana fikir: ihr yazılışa ve görevine göre çoğul samimi “siz”, Dativ “ona” veya iyelik “onun” olabilir.\",\"Fiil çekimi kommt/habt ise çoğunlukla siz; bir fiilden sonra Dativ ise ona; isimden önce iyelik ise onun anlamındadır.\",\"Resmî hitap Sie büyük harfle yazılır.\"]","study.examples":"[{\"de\":\"Kommt ihr heute Abend?\",\"lv\":\"Bu akşam geliyor musunuz?\"},{\"de\":\"Ich gebe ihr das Buch.\",\"lv\":\"Ona kitabı veriyorum.\"},{\"de\":\"Wo wohnt ihr?\",\"lv\":\"Nerede oturuyorsunuz?\"},{\"de\":\"Er schreibt ihr einen Brief.\",\"lv\":\"Ona bir mektup yazıyor.\"},{\"de\":\"Habt ihr Zeit?\",\"lv\":\"Vaktiniz var mı?\"},{\"de\":\"Das ist ihr Auto.\",\"lv\":\"Bu onun arabası.\"}]","study.tip":"[\"ihr + çoğul fiil → siz; Dativ ihr → ona; isimden önce ihr → onun.\"]","study.important":"[\"ihr bağlama göre siz, ona veya onun demektir.\",\"Resmî siz = Sie.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: ihr: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "siz • ona • onun",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "siz • ona • onun",
    "explanation": [
      "Ana fikir: ihr yazılışa ve görevine göre çoğul samimi “siz”, Dativ “ona” veya iyelik “onun” olabilir.",
      "Fiil çekimi kommt/habt ise çoğunlukla siz; bir fiilden sonra Dativ ise ona; isimden önce iyelik ise onun anlamındadır.",
      "Resmî hitap Sie büyük harfle yazılır."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Bu akşam geliyor musunuz?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Ona kitabı veriyorum."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Nerede oturuyorsunuz?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Ona bir mektup yazıyor."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Vaktiniz var mı?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Bu onun arabası."
      }
    ],
    "tip": [
      "ihr + çoğul fiil → siz; Dativ ihr → ona; isimden önce ihr → onun."
    ],
    "important": [
      "ihr bağlama göre siz, ona veya onun demektir.",
      "Resmî siz = Sie."
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
  "de": "ihr",
  "lv": "Siz • O",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Siz • O",
    "explanation": [
      "Ana fikir: ihr, aynı yazımı olan iki farklı zamirdir - birkaç kişiye (siz) hitap eder ve sie (o) zamirinin datif biçimidir.",
      "Adres olarak küçük ihr harfi kullanıldığında, birden fazla kişiye siz olarak tercüme edilebilir (Kommt ihr mit? = Bizimle geliyor musunuz?).",
      "Sahiplenici bir zamir olarak İhr, onun anlamına gelir (ihr Buch = onun kitabı).",
      "İhr'in datif formu (sie'den) onun için (Ich gebe ihr das Buch. = Ona bir kitap veriyorum.) anlamına gelir.",
      "Fiil formu (kommt, habt), bunun sizinle ilgili olduğunu - birkaç kişiye hitap ettiğini gösterir.",
      "Kibar bir adres her zaman büyük harfle yazılır Sie, ihr değil."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Bu gece gelecek misin?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Ona kitabı veriyorum."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Yaşadığınız yer"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Ona bir mektup yazar."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Zamanın var mı?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Bu onun arabası."
      }
    ],
    "tip": [
      "Ihr, dsk fiiliyle birlikte kullanılır. form (kommt, habt) = siz • Durum veya iyelik sıfatı olarak bir kelimenin yanında Ihr = o.",
      "Kontrol Habt ihr...? / Kommt ihr...? = sen • Ich gebe ihr... / ihr Buch = onun için."
    ],
    "important": [
      "Ihr = siz (birkaç kişiye hitap) VEYA o (datif) VEYA o (kiracı) – bağlama bağlı olarak.",
      "Kibar bir adreste her zaman ihr yerine büyük Sie harfiyle yazarız.",
      "Yanlış: Ihr (kibarca) → Doğru: Ağustos."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ihr"
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
          "lv": {}
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
        {},
        {
          "blue": [
            "Sie"
          ]
        },
        {
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

## Finding 40

**Audit ID:** `LRB101-0040`
**Finding Stable ID:** `g2/a1/tr|im|idx:293|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `im|idx:293`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":" • Nerede?","study.translation":" • Nerede?","study.explanation":"[\"Im, in edatının ve dem artikelinin kısaltmasıdır.\",\"Tam biçim: dem'de (kime?).\",\"Nerede sorusuna cevap verirken eril isimlerle ve herhangi bir cinsiyetteki isimlerle birlikte kullanılır? - konum.\",\"Zaman ve mevsimlerle: Ocak ayında, yazın, kışın.\",\"Pratikte demolarda full yerine im neredeyse her zaman kullanılır.\"]","study.examples":"[{\"de\":\"Ich bin im Park.\",\"lv\":\"Parktayım\"},{\"de\":\"Wir wohnen im Zentrum.\",\"lv\":\"Şehir merkezinde yaşıyoruz.\"},{\"de\":\"Im Sommer ist es warm.\",\"lv\":\"Yazın sıcaktır.\"},{\"de\":\"Er arbeitet im Büro.\",\"lv\":\"Bir ofiste çalışıyor.\"},{\"de\":\"Das Kind spielt im Garten.\",\"lv\":\"Bahçede bir çocuk oynuyor.\"},{\"de\":\"Im Januar fahre ich nach Wien.\",\"lv\":\"Ocak ayında Viyana'ya gittim.\"},{\"de\":\"Sie ist im Kino.\",\"lv\":\"O sinemada.\"},{\"de\":\"Wir treffen uns im Restaurant.\",\"lv\":\"Restoranda buluşuyoruz.\"}]","study.comparison":"[{\"word\":\"im\",\"meaning\":\"İçeride nereye? (kime?)\",\"example\":\"im Park – Parkta\"},{\"word\":\"ins\",\"meaning\":\"İçeriye, nereye? (Ak.)\",\"example\":\"ins Kino – Sinemaya\"},{\"word\":\"in\",\"meaning\":\"Gelen / giden (makale yok)\",\"example\":\"in Berlin – Berlin'de\"},{\"word\":\"am\",\"meaning\":\"In, where? (kime?)\",\"example\":\"am Fenster – Pencerenin yanında\"},{\"word\":\"auf\",\"meaning\":\"Dıştan\",\"example\":\"auf dem Tisch – Masanın üzerinde\"}]","study.tip":"[\"Unutmayın: in + dem → im (kime?, nereye?).\",\"Nerede? → içinde • Nerede? → im - bu ikisini karıştırmayın!\"]","study.important":"[\"Im = in dem, yalnızca eril veya nötr bir isimle, kimin için? çekimde.\",\"Soruların yanıtları: nerede? ve nerede değil? — konum, hareket değil.\",\"Aylar ve mevsimlerle: im März, im Herbst.\",\"Kadınlar için: in der Schule, im Schule değil.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"-de/-da • içinde","study.translation":"-de/-da • içinde","study.explanation":"[\"Ana fikir: im, in + dem birleşimidir ve eril veya nötr tekil isimlerle Dativ kullanılır.\",\"Bir yerde bulunmayı, ayrıca ayları ve mevsimleri belirtir; “nerede?” sorusuna cevap verir.\",\"Yön için ins gibi Akkusativ biçimler kullanılır.\"]","study.examples":"[{\"de\":\"Ich bin im Park.\",\"lv\":\"Parktayım.\"},{\"de\":\"Wir wohnen im Zentrum.\",\"lv\":\"Merkezde oturuyoruz.\"},{\"de\":\"Im Sommer ist es warm.\",\"lv\":\"Yazın hava sıcaktır.\"},{\"de\":\"Er arbeitet im Büro.\",\"lv\":\"O ofiste çalışıyor.\"},{\"de\":\"Das Kind spielt im Garten.\",\"lv\":\"Çocuk bahçede oynuyor.\"},{\"de\":\"Im Januar fahre ich nach Wien.\",\"lv\":\"Ocak ayında Viyana’ya gidiyorum.\"},{\"de\":\"Sie ist im Kino.\",\"lv\":\"O sinemada.\"},{\"de\":\"Wir treffen uns im Restaurant.\",\"lv\":\"Restoranda buluşuyoruz.\"}]","study.comparison":"[{\"word\":\"im\",\"meaning\":\"-de/-da; in + dem\",\"example\":\"im Park – parkta\"},{\"word\":\"ins\",\"meaning\":\"-e/-a; in + das\",\"example\":\"ins Kino – sinemaya\"},{\"word\":\"in\",\"meaning\":\"-de/-da veya içinde\",\"example\":\"in Berlin – Berlin’de\"},{\"word\":\"am\",\"meaning\":\"yanında; an + dem\",\"example\":\"am Fenster – pencerenin yanında\"},{\"word\":\"auf\",\"meaning\":\"üzerinde\",\"example\":\"auf dem Tisch – masanın üzerinde\"}]","study.tip":"[\"Yer “nerede?” → im; yön “nereye?” → ins.\"]","study.important":"[\"im = in dem ve Dativ gerektirir.\",\"Dişil isimlerde in der kullanılır: in der Schule.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: im: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "-de/-da • içinde",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "-de/-da • içinde",
    "explanation": [
      "Ana fikir: im, in + dem birleşimidir ve eril veya nötr tekil isimlerle Dativ kullanılır.",
      "Bir yerde bulunmayı, ayrıca ayları ve mevsimleri belirtir; “nerede?” sorusuna cevap verir.",
      "Yön için ins gibi Akkusativ biçimler kullanılır."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Parktayım."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Merkezde oturuyoruz."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Yazın hava sıcaktır."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "O ofiste çalışıyor."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Çocuk bahçede oynuyor."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "Ocak ayında Viyana’ya gidiyorum."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "O sinemada."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Restoranda buluşuyoruz."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "-de/-da; in + dem",
        "example": "im Park – parkta"
      },
      {
        "word": "ins",
        "meaning": "-e/-a; in + das",
        "example": "ins Kino – sinemaya"
      },
      {
        "word": "in",
        "meaning": "-de/-da veya içinde",
        "example": "in Berlin – Berlin’de"
      },
      {
        "word": "am",
        "meaning": "yanında; an + dem",
        "example": "am Fenster – pencerenin yanında"
      },
      {
        "word": "auf",
        "meaning": "üzerinde",
        "example": "auf dem Tisch – masanın üzerinde"
      }
    ],
    "tip": [
      "Yer “nerede?” → im; yön “nereye?” → ins."
    ],
    "important": [
      "im = in dem ve Dativ gerektirir.",
      "Dişil isimlerde in der kullanılır: in der Schule."
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
  "de": "im",
  "lv": " • Nerede?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": " • Nerede?",
    "explanation": [
      "Im, in edatının ve dem artikelinin kısaltmasıdır.",
      "Tam biçim: dem'de (kime?).",
      "Nerede sorusuna cevap verirken eril isimlerle ve herhangi bir cinsiyetteki isimlerle birlikte kullanılır? - konum.",
      "Zaman ve mevsimlerle: Ocak ayında, yazın, kışın.",
      "Pratikte demolarda full yerine im neredeyse her zaman kullanılır."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Parktayım"
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Şehir merkezinde yaşıyoruz."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Yazın sıcaktır."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Bir ofiste çalışıyor."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Bahçede bir çocuk oynuyor."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "Ocak ayında Viyana'ya gittim."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "O sinemada."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Restoranda buluşuyoruz."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "İçeride nereye? (kime?)",
        "example": "im Park – Parkta"
      },
      {
        "word": "ins",
        "meaning": "İçeriye, nereye? (Ak.)",
        "example": "ins Kino – Sinemaya"
      },
      {
        "word": "in",
        "meaning": "Gelen / giden (makale yok)",
        "example": "in Berlin – Berlin'de"
      },
      {
        "word": "am",
        "meaning": "In, where? (kime?)",
        "example": "am Fenster – Pencerenin yanında"
      },
      {
        "word": "auf",
        "meaning": "Dıştan",
        "example": "auf dem Tisch – Masanın üzerinde"
      }
    ],
    "tip": [
      "Unutmayın: in + dem → im (kime?, nereye?).",
      "Nerede? → içinde • Nerede? → im - bu ikisini karıştırmayın!"
    ],
    "important": [
      "Im = in dem, yalnızca eril veya nötr bir isimle, kimin için? çekimde.",
      "Soruların yanıtları: nerede? ve nerede değil? — konum, hareket değil.",
      "Aylar ve mevsimlerle: im März, im Herbst.",
      "Kadınlar için: in der Schule, im Schule değil."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "im"
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
              "Parktayım"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Im"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Im"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "Restoranda"
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          ]
        },
        {}
      ],
      "important": [
        {
          "blue": [
            "im"
          ],
          "purple": [
            "in dem"
          ]
        },
        {},
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

## Finding 41

**Audit ID:** `LRB101-0041`
**Finding Stable ID:** `g2/a1/tr|in|idx:295|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `in|idx:295`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Aşağı","study.translation":"Aşağı","study.explanation":"[\"Ana fikir: in genellikle bir mekana, ülkeye, şehre veya binaya atıfta bulunurken bir yere veya bir yere anlamına gelir.\",\"Konum durumunda, in genellikle in veya in olarak çevrilir: Berlin'de = Berlin'de.\",\"Merkeze doğru hareketle: ins Kino = sinemaya.\",\"Letonca'ya çeviri, içeriğe bağlı olarak değişir.\"]","study.examples":"[{\"de\":\"Ich bin in Berlin.\",\"lv\":\"Berlin'deyim\"},{\"de\":\"Ich gehe in die Schule.\",\"lv\":\"Okula gidiyorum\"},{\"de\":\"Das Buch ist in der Tasche.\",\"lv\":\"Kitap çantanın içinde.\"},{\"de\":\"Wir gehen ins Kino.\",\"lv\":\"Sinemaya gidiyoruz.\"}]","study.tip":"{\"text\":\"Unutmayın: w/w → w.\"}","study.important":"[\"In her zaman kelimenin tam anlamıyla \\\"in\\\" anlamına gelmez • Letonca Berlin'de, okulda, sinemada sıklıkla kullanılır.\",\"Yüzey alanı söz konusu olduğunda genellikle in yerine auf istersiniz.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"-de/-da • -e/-a","study.translation":"-de/-da • -e/-a","study.explanation":"[\"Ana fikir: in bir yerin içinde bulunmayı veya o yerin içine yönelmeyi anlatır.\",\"Konumda Dativ, yönde Akkusativ kullanılır; Türkçe karşılık bağlama göre -de/-da veya -e/-a olur.\"]","study.examples":"[{\"de\":\"Ich bin in Berlin.\",\"lv\":\"Berlin’deyim.\"},{\"de\":\"Ich gehe in die Schule.\",\"lv\":\"Okula gidiyorum.\"},{\"de\":\"Das Buch ist in der Tasche.\",\"lv\":\"Kitap çantanın içinde.\"},{\"de\":\"Wir gehen ins Kino.\",\"lv\":\"Sinemaya gidiyoruz.\"}]","study.tip":"{\"text\":\"Nerede? → in + Dativ; nereye? → in + Akkusativ.\"}","study.important":"[\"in konum ve yön için farklı hâllerle kullanılır.\",\"Yüzey için çoğu zaman auf kullanılır.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: in: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "in",
  "lv": "-de/-da • -e/-a",
  "level": "A1",
  "study": {
    "id": "a1-in",
    "layout": "standardStudy",
    "translation": "-de/-da • -e/-a",
    "explanation": [
      "Ana fikir: in bir yerin içinde bulunmayı veya o yerin içine yönelmeyi anlatır.",
      "Konumda Dativ, yönde Akkusativ kullanılır; Türkçe karşılık bağlama göre -de/-da veya -e/-a olur."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Berlin’deyim."
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Okula gidiyorum."
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Kitap çantanın içinde."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Sinemaya gidiyoruz."
      }
    ],
    "tip": {
      "text": "Nerede? → in + Dativ; nereye? → in + Akkusativ."
    },
    "important": [
      "in konum ve yön için farklı hâllerle kullanılır.",
      "Yüzey için çoğu zaman auf kullanılır."
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
      "tip": {},
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
  "de": "in",
  "lv": "Aşağı",
  "level": "A1",
  "study": {
    "id": "a1-in",
    "layout": "standardStudy",
    "translation": "Aşağı",
    "explanation": [
      "Ana fikir: in genellikle bir mekana, ülkeye, şehre veya binaya atıfta bulunurken bir yere veya bir yere anlamına gelir.",
      "Konum durumunda, in genellikle in veya in olarak çevrilir: Berlin'de = Berlin'de.",
      "Merkeze doğru hareketle: ins Kino = sinemaya.",
      "Letonca'ya çeviri, içeriğe bağlı olarak değişir."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Berlin'deyim"
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Okula gidiyorum"
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Kitap çantanın içinde."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Sinemaya gidiyoruz."
      }
    ],
    "tip": {
      "text": "Unutmayın: w/w → w."
    },
    "important": [
      "In her zaman kelimenin tam anlamıyla \"in\" anlamına gelmez • Letonca Berlin'de, okulda, sinemada sıklıkla kullanılır.",
      "Yüzey alanı söz konusu olduğunda genellikle in yerine auf istersiniz."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "in"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "in"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "in"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "in"
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
            "in"
          ]
        },
        {
          "yellow": [
            "auf"
          ],
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

**Audit ID:** `LRB101-0042`
**Finding Stable ID:** `g2/a1/tr|ins|idx:296|lv, study.translation, study.explanation, study.examples|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `ins|idx:296`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"W • W • Nerede?","study.translation":"W • W • Nerede?","study.explanation":"[\"Ins, in edatının ve das artikelinin kısaltmasıdır.\",\"Tam form: Das'ta (nerede?).\",\"Nerede sorusuna cevap verirken herhangi bir cinsiyetteki isimlerle birlikte kullanılır? - içe doğru hareket.\",\"Genellikle fiillerle: gehen, fahren, kommen, legen, stecken.\",\"Pratikte tam indas yerine neredeyse her zaman ins kullanılır.\"]","study.examples":"[{\"de\":\"Ich gehe ins Kino.\",\"lv\":\"Sinemaya gidiyorum\"},{\"de\":\"Sie geht ins Bett.\",\"lv\":\"Uyumaya gider.\"},{\"de\":\"Wir fahren ins Ausland.\",\"lv\":\"Yurt dışına gidiyoruz.\"},{\"de\":\"Komm ins Haus!\",\"lv\":\"Eve gel!\"},{\"de\":\"Er steckt das Geld in den Geldbeutel.\",\"lv\":\"Parayı cüzdanına koyar.\"},{\"de\":\"Wir gehen ins Museum.\",\"lv\":\"Müzeye gidiyoruz.\"},{\"de\":\"Sie legt die Blumen ins Wasser.\",\"lv\":\"Çiçekleri suya atar.\"},{\"de\":\"Fahr bitte ins Zentrum.\",\"lv\":\"Lütfen merkeze gidin.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"içine • -e/-a • nereye?","study.translation":"içine • -e/-a • nereye?","study.explanation":"[\"Ana fikir: ins, in + das birleşimidir.\",\"Nötr tekil isimle Akkusativ kullanılır ve içeri doğru yönü, yani “nereye?” sorusunu belirtir.\",\"Konum için im = in dem kullanılır.\"]","study.examples":"[{\"de\":\"Ich gehe ins Kino.\",\"lv\":\"Sinemaya gidiyorum.\"},{\"de\":\"Sie geht ins Bett.\",\"lv\":\"O yatağa gidiyor.\"},{\"de\":\"Wir fahren ins Ausland.\",\"lv\":\"Yurt dışına gidiyoruz.\"},{\"de\":\"Komm ins Haus!\",\"lv\":\"Eve gir!\"},{\"de\":\"Er steckt das Geld in den Geldbeutel.\",\"lv\":\"Parayı cüzdana koyuyor.\"},{\"de\":\"Wir gehen ins Museum.\",\"lv\":\"Müzeye gidiyoruz.\"},{\"de\":\"Sie legt die Blumen ins Wasser.\",\"lv\":\"Çiçekleri suya koyuyor.\"},{\"de\":\"Fahr bitte ins Zentrum.\",\"lv\":\"Lütfen merkeze gidin.\"}]","study.comparison":"[{\"word\":\"ins\",\"meaning\":\"içine / -e; in + das\",\"example\":\"ins Kino – sinemaya\"},{\"word\":\"im\",\"meaning\":\"içinde; in + dem\",\"example\":\"im Kino – sinemada\"},{\"word\":\"in\",\"meaning\":\"içine; başka artikel\",\"example\":\"in die Stadt – şehre\"},{\"word\":\"aufs\",\"meaning\":\"üzerine; auf + das\",\"example\":\"aufs Dach – çatıya\"},{\"word\":\"zum\",\"meaning\":\"bir kişiye/yere doğru\",\"example\":\"zum Arzt – doktora\"}]","study.tip":"[\"Nereye? → ins; nerede? → im.\"]","study.important":"[\"ins = in das, nötr tekil Akkusativ.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: ins: individual full-card repair of lv, study.translation, study.explanation, study.examples; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "içine • -e/-a • nereye?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "içine • -e/-a • nereye?",
    "explanation": [
      "Ana fikir: ins, in + das birleşimidir.",
      "Nötr tekil isimle Akkusativ kullanılır ve içeri doğru yönü, yani “nereye?” sorusunu belirtir.",
      "Konum için im = in dem kullanılır."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Sinemaya gidiyorum."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "O yatağa gidiyor."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Yurt dışına gidiyoruz."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Eve gir!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Parayı cüzdana koyuyor."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Müzeye gidiyoruz."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Çiçekleri suya koyuyor."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Lütfen merkeze gidin."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "içine / -e; in + das",
        "example": "ins Kino – sinemaya"
      },
      {
        "word": "im",
        "meaning": "içinde; in + dem",
        "example": "im Kino – sinemada"
      },
      {
        "word": "in",
        "meaning": "içine; başka artikel",
        "example": "in die Stadt – şehre"
      },
      {
        "word": "aufs",
        "meaning": "üzerine; auf + das",
        "example": "aufs Dach – çatıya"
      },
      {
        "word": "zum",
        "meaning": "bir kişiye/yere doğru",
        "example": "zum Arzt – doktora"
      }
    ],
    "tip": [
      "Nereye? → ins; nerede? → im."
    ],
    "important": [
      "ins = in das, nötr tekil Akkusativ."
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
  "lv": "W • W • Nerede?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "W • W • Nerede?",
    "explanation": [
      "Ins, in edatının ve das artikelinin kısaltmasıdır.",
      "Tam form: Das'ta (nerede?).",
      "Nerede sorusuna cevap verirken herhangi bir cinsiyetteki isimlerle birlikte kullanılır? - içe doğru hareket.",
      "Genellikle fiillerle: gehen, fahren, kommen, legen, stecken.",
      "Pratikte tam indas yerine neredeyse her zaman ins kullanılır."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Sinemaya gidiyorum"
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Uyumaya gider."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Yurt dışına gidiyoruz."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Eve gel!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Parayı cüzdanına koyar."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Müzeye gidiyoruz."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Çiçekleri suya atar."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Lütfen merkeze gidin."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "İçeriye, nereye? (Ak.)",
        "example": "ins Kino – Sinemaya"
      },
      {
        "word": "im",
        "meaning": "İçeride nereye? (kime?)",
        "example": "im Kino – Sinema"
      },
      {
        "word": "in",
        "meaning": "İçeri/için (bağımsız makaleyle)",
        "example": "in die Stadt – Şehre"
      },
      {
        "word": "aufs",
        "meaning": "Yüzeye (aks.)",
        "example": "aufs Dach – Çatıda"
      },
      {
        "word": "zum",
        "meaning": "Kime / Kimden (kim?)",
        "example": "zum Arzt – Doktora"
      }
    ],
    "tip": [
      "Unutmayın: in + das → ins (nerede?, nerede?).",
      "Nerede? → içinde • Nerede? → onlar - ana fark bu!"
    ],
    "important": [
      "Ins = in das, yalnızca herhangi bir cinsiyetten bir isimle, nerede? çekimde.",
      "Soruların yanıtları: nerede? ve nerede değil? — konum değil hareket.",
      "Erkek cinsiyeti için: in den Wald • Women: in die Schule.",
      "Karıştırmayın: ins Kino gehen (sinemaya) ve im Kino sein (sinemada olmak)."
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

## Finding 43

**Audit ID:** `LRB101-0043`
**Finding Stable ID:** `g2/a1/tr|jung|idx:304|lv, study.translation, study.explanation, study.examples|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `jung|idx:304`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Genç (insanlar hakkında)","study.translation":"Genç (insanlar hakkında)","study.explanation":"[\"Ana fikir: jung genç yaş anlamına gelir – nesneleri değil, insanları ve hayvanları ifade eder.\",\"Jung yaşı tanımlar • Bunun tersi alt (eski)'dir.\",\"Letonca'da young kelimesinin iki anlamı vardır: young age (jung) ve young/recently created (neu).\",\"Yakın zamanda oluşturulan veya edinilen öğeler için neu, ne jung kullanın.\",\"Jung aynı zamanda mecazi anlamda da kullanılıyor: yeni nesil, genç çift, gençler.\",\"Ayrıca die Jugend (gençlik) ismi de vardır.\"]","study.examples":"[{\"de\":\"Sie ist noch jung.\",\"lv\":\"O hala genç.\"},{\"de\":\"Der Hund ist jung.\",\"lv\":\"Köpek genç.\"},{\"de\":\"Wir sind noch jung.\",\"lv\":\"Daha genciz.\"},{\"de\":\"Er sieht sehr jung aus.\",\"lv\":\"Çok genç görünüyor.\"},{\"de\":\"Das ist ein junges Paar.\",\"lv\":\"Bu yeni bir çift.\"},{\"de\":\"Die junge Frau lächelt.\",\"lv\":\"Genç kadın gülümsüyor.\"},{\"de\":\"Mein Bruder ist jünger als ich.\",\"lv\":\"Kardeşim benden daha genç.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"genç","study.translation":"genç","study.explanation":"[\"Ana fikir: jung insanların ve hayvanların genç yaşını anlatır.\",\"Yeni üretilmiş veya edinilmiş nesneler için neu kullanılır.\",\"Karşılaştırma biçimi jünger’dir.\"]","study.examples":"[{\"de\":\"Sie ist noch jung.\",\"lv\":\"O hâlâ genç.\"},{\"de\":\"Der Hund ist jung.\",\"lv\":\"Köpek genç.\"},{\"de\":\"Wir sind noch jung.\",\"lv\":\"Biz hâlâ genciz.\"},{\"de\":\"Er sieht sehr jung aus.\",\"lv\":\"O çok genç görünüyor.\"},{\"de\":\"Das ist ein junges Paar.\",\"lv\":\"Bu genç bir çift.\"},{\"de\":\"Die junge Frau lächelt.\",\"lv\":\"Genç kadın gülümsüyor.\"},{\"de\":\"Mein Bruder ist jünger als ich.\",\"lv\":\"Erkek kardeşim benden daha genç.\"}]","study.tip":"[\"Yaş → jung; yeni nesne → neu.\"]","study.important":"[\"jung ve neu aynı değildir.\",\"jünger = daha genç.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: jung: individual full-card repair of lv, study.translation, study.explanation, study.examples; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "jung",
  "lv": "genç",
  "level": "A1",
  "study": {
    "id": "a1-jung",
    "layout": "standardStudy",
    "translation": "genç",
    "explanation": [
      "Ana fikir: jung insanların ve hayvanların genç yaşını anlatır.",
      "Yeni üretilmiş veya edinilmiş nesneler için neu kullanılır.",
      "Karşılaştırma biçimi jünger’dir."
    ],
    "examples": [
      {
        "de": "Sie ist noch jung.",
        "lv": "O hâlâ genç."
      },
      {
        "de": "Der Hund ist jung.",
        "lv": "Köpek genç."
      },
      {
        "de": "Wir sind noch jung.",
        "lv": "Biz hâlâ genciz."
      },
      {
        "de": "Er sieht sehr jung aus.",
        "lv": "O çok genç görünüyor."
      },
      {
        "de": "Das ist ein junges Paar.",
        "lv": "Bu genç bir çift."
      },
      {
        "de": "Die junge Frau lächelt.",
        "lv": "Genç kadın gülümsüyor."
      },
      {
        "de": "Mein Bruder ist jünger als ich.",
        "lv": "Erkek kardeşim benden daha genç."
      }
    ],
    "tip": [
      "Yaş → jung; yeni nesne → neu."
    ],
    "important": [
      "jung ve neu aynı değildir.",
      "jünger = daha genç."
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
  "lv": "Genç (insanlar hakkında)",
  "level": "A1",
  "study": {
    "id": "a1-jung",
    "layout": "standardStudy",
    "translation": "Genç (insanlar hakkında)",
    "explanation": [
      "Ana fikir: jung genç yaş anlamına gelir – nesneleri değil, insanları ve hayvanları ifade eder.",
      "Jung yaşı tanımlar • Bunun tersi alt (eski)'dir.",
      "Letonca'da young kelimesinin iki anlamı vardır: young age (jung) ve young/recently created (neu).",
      "Yakın zamanda oluşturulan veya edinilen öğeler için neu, ne jung kullanın.",
      "Jung aynı zamanda mecazi anlamda da kullanılıyor: yeni nesil, genç çift, gençler.",
      "Ayrıca die Jugend (gençlik) ismi de vardır."
    ],
    "examples": [
      {
        "de": "Sie ist noch jung.",
        "lv": "O hala genç."
      },
      {
        "de": "Der Hund ist jung.",
        "lv": "Köpek genç."
      },
      {
        "de": "Wir sind noch jung.",
        "lv": "Daha genciz."
      },
      {
        "de": "Er sieht sehr jung aus.",
        "lv": "Çok genç görünüyor."
      },
      {
        "de": "Das ist ein junges Paar.",
        "lv": "Bu yeni bir çift."
      },
      {
        "de": "Die junge Frau lächelt.",
        "lv": "Genç kadın gülümsüyor."
      },
      {
        "de": "Mein Bruder ist jünger als ich.",
        "lv": "Kardeşim benden daha genç."
      }
    ],
    "tip": [
      "Jung yaşla ilgilidir (insanlar, hayvanlar) - yakın zamanda ortaya çıkan şeyler hakkında konuşurken neu kullanın.",
      "Aksine: jung ↔ alt (genç ↔ yaşlı)."
    ],
    "important": [
      "Jung şeylerin yeniliğini değil, çağını anlatır.",
      "Yeni şeyler için (telefon, araba, ev) jung yerine neu kullanın.",
      "Yanlış: Mein Handy ist jung. → Doğru: Mein Handy ist neu."
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

## Finding 44

**Audit ID:** `LRB101-0044`
**Finding Stable ID:** `g2/a1/tr|kein|idx:308|lv, study.translation, study.explanation, study.examples|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `kein|idx:308`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Hiç kimse • Hiçbir şey","study.translation":"Hiç kimse • Hiçbir şey","study.explanation":"[\"Ana fikir: kein, içeriğe bağlı olarak Letonya ismini reddeden bir olumsuzlama maddesidir, hiç kimse veya hiç kimse.\",\"Kein, ein (kein/keine/keinen...) gibi eğiktir ve bir ismin önüne gelir.\",\"Sayılabilir isimler (insanlar) söz konusu olduğunda, kein genellikle hiç kimse olarak çevrilir (kein Mensch = hiç kimse).\",\"Bağlayıcı olmayan veya soyut isimler için kein genellikle hiçbir şey/hiçbir şey olarak çevrilir (kein Geld = para yok/para yok).\",\"Kein sadece fiili değil, tüm ismi olumsuzlar (nicht'i karşılaştırın).\"]","study.examples":"[{\"de\":\"Ich habe kein Geld.\",\"lv\":\"Param yok\"},{\"de\":\"Es gibt keine Milch mehr.\",\"lv\":\"Hiç süt kalmadı.\"},{\"de\":\"Kein Mensch war da.\",\"lv\":\"Orada kimse yoktu.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Zamanım yok\"},{\"de\":\"Das ist kein Problem.\",\"lv\":\"Sorun değil.\"},{\"de\":\"Wir haben keine Kinder.\",\"lv\":\"Çocuğumuz yok.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hiçbir • ... yok","study.translation":"hiçbir • ... yok","study.explanation":"[\"Ana fikir: kein bir ismi olumsuzlar ve “hiçbir” ya da Türkçede “... yok” anlamını verir.\",\"ein gibi çekimlenir: kein, keine, keinen, keinem.\",\"nicht ise fiili, sıfatı veya tüm ifadeyi olumsuzlar.\"]","study.examples":"[{\"de\":\"Ich habe kein Geld.\",\"lv\":\"Param yok.\"},{\"de\":\"Es gibt keine Milch mehr.\",\"lv\":\"Hiç süt kalmadı.\"},{\"de\":\"Kein Mensch war da.\",\"lv\":\"Orada hiç kimse yoktu.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Vaktim yok.\"},{\"de\":\"Das ist kein Problem.\",\"lv\":\"Bu bir sorun değil.\"},{\"de\":\"Wir haben keine Kinder.\",\"lv\":\"Çocuğumuz yok.\"}]","study.tip":"[\"İsmi olumsuzlamak → kein; fiil veya sıfatı olumsuzlamak → nicht.\"]","study.important":"[\"kein + isim, yokluk veya olumsuzluk bildirir.\",\"Doğru: Ich habe kein Geld.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{},{}]}}
**Note:** OWNER approved override: kein: individual full-card repair of lv, study.translation, study.explanation, study.examples; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kein",
  "lv": "hiçbir • ... yok",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "hiçbir • ... yok",
    "explanation": [
      "Ana fikir: kein bir ismi olumsuzlar ve “hiçbir” ya da Türkçede “... yok” anlamını verir.",
      "ein gibi çekimlenir: kein, keine, keinen, keinem.",
      "nicht ise fiili, sıfatı veya tüm ifadeyi olumsuzlar."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Param yok."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Hiç süt kalmadı."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Orada hiç kimse yoktu."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Vaktim yok."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Bu bir sorun değil."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Çocuğumuz yok."
      }
    ],
    "tip": [
      "İsmi olumsuzlamak → kein; fiil veya sıfatı olumsuzlamak → nicht."
    ],
    "important": [
      "kein + isim, yokluk veya olumsuzluk bildirir.",
      "Doğru: Ich habe kein Geld."
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
  "lv": "Hiç kimse • Hiçbir şey",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Hiç kimse • Hiçbir şey",
    "explanation": [
      "Ana fikir: kein, içeriğe bağlı olarak Letonya ismini reddeden bir olumsuzlama maddesidir, hiç kimse veya hiç kimse.",
      "Kein, ein (kein/keine/keinen...) gibi eğiktir ve bir ismin önüne gelir.",
      "Sayılabilir isimler (insanlar) söz konusu olduğunda, kein genellikle hiç kimse olarak çevrilir (kein Mensch = hiç kimse).",
      "Bağlayıcı olmayan veya soyut isimler için kein genellikle hiçbir şey/hiçbir şey olarak çevrilir (kein Geld = para yok/para yok).",
      "Kein sadece fiili değil, tüm ismi olumsuzlar (nicht'i karşılaştırın)."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Param yok"
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Hiç süt kalmadı."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Orada kimse yoktu."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Zamanım yok"
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Sorun değil."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Çocuğumuz yok."
      }
    ],
    "tip": [
      "Kein bir ismi (kein + isim) olumsuzlar, nicht ise bir fiili veya cümleyi olumsuzlar.",
      "Kein, ein: kein/keine/keinen/keiner gibi değişir."
    ],
    "important": [
      "Kein + isim = \"X var/yok\", \"nicht ein X\" değil.",
      "Yanlış: Ich habe nicht ein Geld. → Doğru: Ich habe kein Geld."
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

## Finding 45

**Audit ID:** `LRB101-0045`
**Finding Stable ID:** `g2/a1/tr|kennen|idx:310|lv, study.translation, study.explanation, study.examples|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** tr
**Card:** `kennen|idx:310`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bilmek","study.translation":"Bilmek","study.explanation":"[\"Ana fikir: bir kişiyi, yeri veya şeyi deneyimden tanımak.\",\"Kennen her şeyden önce kişisel bilgi demektir.\",\"Sık sık tarif eder: insanlar, yerler.\",\"Kennen, bir kişiyi, yeri veya şeyi kendi deneyiminizden tanıdığınızda kullanılır.\"]","study.examples":"[{\"de\":\"Ich kenne ihn.\",\"lv\":\"Onu tanıyorum.\"},{\"de\":\"Kennen Sie diese Frau?\",\"lv\":\"Bu kadını tanıyor musun?\"},{\"de\":\"Wo habt ihr euch kennengelernt?\",\"lv\":\"Nerede tanıştınız?\"},{\"de\":\"Ich kenne ihn.\",\"lv\":\"Onu tanıyorum\"},{\"de\":\"kennen\",\"lv\":\"Wissen'le tanışın\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"tanımak • bilmek","study.translation":"tanımak • bilmek","study.explanation":"[\"Ana fikir: kennen bir kişiyi, yeri veya şeyi deneyimden tanımak ya da bilmek demektir.\",\"Bir olguyu veya bilgiyi bilmek için wissen kullanılır.\"]","study.examples":"[{\"de\":\"Ich kenne ihn.\",\"lv\":\"Onu tanıyorum.\"},{\"de\":\"Kennen Sie diese Frau?\",\"lv\":\"Bu kadını tanıyor musunuz?\"},{\"de\":\"Wo habt ihr euch kennengelernt?\",\"lv\":\"Nerede tanıştınız?\"},{\"de\":\"Ich kenne ihn.\",\"lv\":\"Onu tanıyorum.\"},{\"de\":\"kennen\",\"lv\":\"tanımak; wissen = bir bilgiyi bilmek\"}]","study.comparison":"[{\"word\":\"kennen\",\"meaning\":\"bir kişiyi, yeri veya şeyi tanımak\",\"example\":\"Ich kenne ihn. – Onu tanıyorum.\"},{\"word\":\"wissen\",\"meaning\":\"bir gerçeği veya bilgiyi bilmek\",\"example\":\"Ich weiß seinen Namen. – Adını biliyorum.\"}]","study.tip":"[\"Tanışıklık → kennen; bilgi veya gerçek → wissen.\"]","study.important":"[\"kennen ve wissen aynı değildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: kennen: individual full-card repair of lv, study.translation, study.explanation, study.examples; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kennen",
  "lv": "tanımak • bilmek",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "tanımak • bilmek",
    "explanation": [
      "Ana fikir: kennen bir kişiyi, yeri veya şeyi deneyimden tanımak ya da bilmek demektir.",
      "Bir olguyu veya bilgiyi bilmek için wissen kullanılır."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Onu tanıyorum."
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "Bu kadını tanıyor musunuz?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "Nerede tanıştınız?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "Onu tanıyorum."
      },
      {
        "de": "kennen",
        "lv": "tanımak; wissen = bir bilgiyi bilmek"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "bir kişiyi, yeri veya şeyi tanımak",
        "example": "Ich kenne ihn. – Onu tanıyorum."
      },
      {
        "word": "wissen",
        "meaning": "bir gerçeği veya bilgiyi bilmek",
        "example": "Ich weiß seinen Namen. – Adını biliyorum."
      }
    ],
    "tip": [
      "Tanışıklık → kennen; bilgi veya gerçek → wissen."
    ],
    "important": [
      "kennen ve wissen aynı değildir."
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
  "lv": "Bilmek",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "Bilmek",
    "explanation": [
      "Ana fikir: bir kişiyi, yeri veya şeyi deneyimden tanımak.",
      "Kennen her şeyden önce kişisel bilgi demektir.",
      "Sık sık tarif eder: insanlar, yerler.",
      "Kennen, bir kişiyi, yeri veya şeyi kendi deneyiminizden tanıdığınızda kullanılır."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Onu tanıyorum."
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "Bu kadını tanıyor musun?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "Nerede tanıştınız?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "Onu tanıyorum"
      },
      {
        "de": "kennen",
        "lv": "Wissen'le tanışın"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "Know (kişi, yer, şey)",
        "example": "Ich kenne ihn. – Onu tanıyorum."
      },
      {
        "word": "wissen",
        "meaning": "Bilmek (gerçek, bilgi)",
        "example": "Ich weiß seinen Namen. – Adını biliyorum."
      }
    ],
    "tip": [
      "Kennen = bilmek",
      "Bağlam anlama uyduğunda Kennen kullanın."
    ],
    "important": [
      "Kennen = bir kişiyi/yeri bilmek.",
      "Kennen = bilmek.",
      "Bir kişiyi, yeri veya şeyi deneyimlerinden tanımak."
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

## Finding 46

**Audit ID:** `LRB101-0046`
**Finding Stable ID:** `g2/a1/tr|klein|idx:6|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** tr
**Card:** `klein|idx:6`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Küçük","study.translation":"Küçük","study.explanation":"[\"Ana fikir: Boyutu veya kapsamı küçük.\",\"Klein esas olarak: küçük boyut anlamına gelir.\",\"Çoğunlukla şunu tanımlar: bir şeyin/kişinin büyüklüğü.\"]","study.examples":"[{\"de\":\"Das Zimmer ist klein.\",\"lv\":\"Oda küçük.\"},{\"de\":\"Das Kind ist noch klein.\",\"lv\":\"Oda küçük.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"Bebek henüz küçük.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"Küçük bir çantam var.\"},{\"de\":\"Das Kind ist klein.\",\"lv\":\"Bebek küçük.\"}]","study.tip":"[\"Klein = küçük\",\"Bağlam anlamla örtüştüğünde yapıştırıcı kullanır.\"]","study.important":"[\"Klein = küçük boyut.\",\"Klein = küçük.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"küçük","study.translation":"küçük","study.explanation":"[\"Ana fikir: klein küçük boyutu, kapsamı veya yaşı anlatır.\",\"İsimden önce sıfat sonu değişir: ein kleines Zimmer, eine kleine Tasche.\"]","study.examples":"[{\"de\":\"Das Zimmer ist klein.\",\"lv\":\"Oda küçük.\"},{\"de\":\"Das Kind ist noch klein.\",\"lv\":\"Çocuk hâlâ küçük.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"Küçük bir çantam var.\"}]","study.tip":"[\"İsimden önce klein, cinsiyet ve hâle göre çekimlenir.\"]","study.important":"[\"klein = küçük.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: klein: individual full-card repair of lv, study.*; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "klein",
  "lv": "küçük",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "küçük",
    "explanation": [
      "Ana fikir: klein küçük boyutu, kapsamı veya yaşı anlatır.",
      "İsimden önce sıfat sonu değişir: ein kleines Zimmer, eine kleine Tasche."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Oda küçük."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "Çocuk hâlâ küçük."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Küçük bir çantam var."
      }
    ],
    "tip": [
      "İsimden önce klein, cinsiyet ve hâle göre çekimlenir."
    ],
    "important": [
      "klein = küçük."
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
  "lv": "Küçük",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "Küçük",
    "explanation": [
      "Ana fikir: Boyutu veya kapsamı küçük.",
      "Klein esas olarak: küçük boyut anlamına gelir.",
      "Çoğunlukla şunu tanımlar: bir şeyin/kişinin büyüklüğü."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Oda küçük."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "Oda küçük."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Bebek henüz küçük."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Küçük bir çantam var."
      },
      {
        "de": "Das Kind ist klein.",
        "lv": "Bebek küçük."
      }
    ],
    "tip": [
      "Klein = küçük",
      "Bağlam anlamla örtüştüğünde yapıştırıcı kullanır."
    ],
    "important": [
      "Klein = küçük boyut.",
      "Klein = küçük."
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

## Finding 47

**Audit ID:** `LRB101-0047`
**Finding Stable ID:** `g2/a1/tr|leise|idx:368|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** tr
**Card:** `leise|idx:368`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sessiz","study.translation":"Sessiz","study.explanation":"[\"Ana fikir: Sessiz veya düşük ses seviyesi.\",\"Leise temel olarak şu anlama gelir: düşük hacim.\",\"Genellikle şu şekilde tanımlanır: ses/ses/müzik.\",\"Leise, düşük ses seviyesini veya düşük sesi/sesi tanımlar.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"Lütfen sessiz olun.\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"Lütfen sessiz ol\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"Müzik sessiz.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"Lütfen sesinizi alçaltın.\"}]","study.tip":"[\"Leise = sessizlik\",\"Bağlam bu anlama uyduğunda leise'yi kullanın.\"]","study.important":"[\"Leise = sessiz bir ses.\",\"Leise = hacim.\",\"Sessiz veya düşük ses seviyesi.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sessiz • alçak sesle","study.translation":"sessiz • alçak sesle","study.explanation":"[\"Ana fikir: leise düşük ses düzeyini anlatır; sıfat olarak “sessiz”, zarf olarak “alçak sesle” demektir.\",\"Karşıtı laut = gürültülü / yüksek sesle.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"Lütfen sessiz ol.\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"Lütfen sessiz ol.\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"Müziğin sesi alçak.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"Lütfen alçak sesle konuş.\"}]","study.tip":"[\"Kişi/ortam → sessiz; konuşma biçimi → alçak sesle.\"]","study.important":"[\"leise bir ses düzeyidir; “sessizlik” ismi değildir.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{}],"important":[{}]}}
**Note:** OWNER approved override: leise: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "leise",
  "lv": "sessiz • alçak sesle",
  "level": "A1",
  "study": {
    "id": "a1-leise-study",
    "layout": "standardStudy",
    "translation": "sessiz • alçak sesle",
    "explanation": [
      "Ana fikir: leise düşük ses düzeyini anlatır; sıfat olarak “sessiz”, zarf olarak “alçak sesle” demektir.",
      "Karşıtı laut = gürültülü / yüksek sesle."
    ],
    "examples": [
      {
        "de": "Bitte sei leise.",
        "lv": "Lütfen sessiz ol."
      },
      {
        "de": "Bitte sei leise.",
        "lv": "Lütfen sessiz ol."
      },
      {
        "de": "Die Musik ist leise.",
        "lv": "Müziğin sesi alçak."
      },
      {
        "de": "Sprich bitte leise.",
        "lv": "Lütfen alçak sesle konuş."
      }
    ],
    "tip": [
      "Kişi/ortam → sessiz; konuşma biçimi → alçak sesle."
    ],
    "important": [
      "leise bir ses düzeyidir; “sessizlik” ismi değildir."
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
  "de": "leise",
  "lv": "Sessiz",
  "level": "A1",
  "study": {
    "id": "a1-leise-study",
    "layout": "standardStudy",
    "translation": "Sessiz",
    "explanation": [
      "Ana fikir: Sessiz veya düşük ses seviyesi.",
      "Leise temel olarak şu anlama gelir: düşük hacim.",
      "Genellikle şu şekilde tanımlanır: ses/ses/müzik.",
      "Leise, düşük ses seviyesini veya düşük sesi/sesi tanımlar."
    ],
    "examples": [
      {
        "de": "Bitte sei leise.",
        "lv": "Lütfen sessiz olun."
      },
      {
        "de": "Bitte sei leise.",
        "lv": "Lütfen sessiz ol"
      },
      {
        "de": "Die Musik ist leise.",
        "lv": "Müzik sessiz."
      },
      {
        "de": "Sprich bitte leise.",
        "lv": "Lütfen sesinizi alçaltın."
      }
    ],
    "tip": [
      "Leise = sessizlik",
      "Bağlam bu anlama uyduğunda leise'yi kullanın."
    ],
    "important": [
      "Leise = sessiz bir ses.",
      "Leise = hacim.",
      "Sessiz veya düşük ses seviyesi."
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

## Finding 48

**Audit ID:** `LRB101-0048`
**Finding Stable ID:** `g2/a1/tr|liegen|idx:377|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** tr
**Card:** `liegen|idx:377`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Be • Sleep","study.translation":"Be • Sleep","study.explanation":"[\"Ana fikir: Liegen yatay olarak yalan söylemek veya yalan söylemek anlamına gelir.\",\"Bir insan için yalan söylemek genellikle uyumak anlamına gelir.\",\"Bir bakıma Liegen onun oralarda bir yerde olduğu anlamına geliyor.\",\"Bir şeyi bir kenara bırakmak anlamına gelen legen'den farklıdır.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Kitap masanın üstünde.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"Telefonum arabada.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"Yatakta uyuyor.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Kitabı masaya koydum.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"Olmak / uyumak\",\"example\":\"Kitap burada yatıyor.\"},{\"word\":\"legen\",\"meaning\":\"Koymak\",\"example\":\"Kitabı buraya koyuyorum.\"},{\"word\":\"stehen\",\"meaning\":\"Stand/Stand\",\"example\":\"Şişe masada duruyor.\"},{\"word\":\"sein\",\"meaning\":\"Olmak\",\"example\":\"Buradayım.\"}]","study.tip":"{\"text\":\"Unutmayın: şey zaten yerli yerindedir → Liegen • Onu bir kenara koyarsınız → efsane.\"}","study.important":"[\"Liegen durumu veya konumu gösterir.\",\"Legen eylemi gösteriyor: Birisi bir şeyi yere koyuyor.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"yatmak • bulunmak","study.translation":"yatmak • bulunmak","study.explanation":"[\"Ana fikir: liegen bir kişinin yatmasını veya bir nesnenin yatay durumda bir yerde bulunmasını anlatır.\",\"legen ise bir şeyi bir yere koyma hareketidir.\",\"stehen dik durumda bulunmayı, sein genel bulunmayı anlatır.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Kitap masanın üzerinde duruyor.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"Telefonum arabada duruyor.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"O yatakta yatıyor.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Kitabı masanın üzerine koyuyorum.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"yatmak / yatay durumda bulunmak\",\"example\":\"Das Buch liegt hier. – Kitap burada duruyor.\"},{\"word\":\"legen\",\"meaning\":\"koymak / yatırmak\",\"example\":\"Ich lege das Buch hierhin. – Kitabı buraya koyuyorum.\"},{\"word\":\"stehen\",\"meaning\":\"dik durmak\",\"example\":\"Die Flasche steht auf dem Tisch. – Şişe masanın üzerinde dik duruyor.\"},{\"word\":\"sein\",\"meaning\":\"olmak / bulunmak\",\"example\":\"Ich bin hier. – Buradayım.\"}]","study.tip":"{\"text\":\"Mevcut yatay durum → liegen; bir şeyi yerleştirme hareketi → legen.\"}","study.important":"[\"liegen durum, legen hareket anlatır.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{}]}}
**Note:** OWNER approved override: liegen: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "yatmak • bulunmak",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "yatmak • bulunmak",
    "explanation": [
      "Ana fikir: liegen bir kişinin yatmasını veya bir nesnenin yatay durumda bir yerde bulunmasını anlatır.",
      "legen ise bir şeyi bir yere koyma hareketidir.",
      "stehen dik durumda bulunmayı, sein genel bulunmayı anlatır."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kitap masanın üzerinde duruyor."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Telefonum arabada duruyor."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "O yatakta yatıyor."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Kitabı masanın üzerine koyuyorum."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "yatmak / yatay durumda bulunmak",
        "example": "Das Buch liegt hier. – Kitap burada duruyor."
      },
      {
        "word": "legen",
        "meaning": "koymak / yatırmak",
        "example": "Ich lege das Buch hierhin. – Kitabı buraya koyuyorum."
      },
      {
        "word": "stehen",
        "meaning": "dik durmak",
        "example": "Die Flasche steht auf dem Tisch. – Şişe masanın üzerinde dik duruyor."
      },
      {
        "word": "sein",
        "meaning": "olmak / bulunmak",
        "example": "Ich bin hier. – Buradayım."
      }
    ],
    "tip": {
      "text": "Mevcut yatay durum → liegen; bir şeyi yerleştirme hareketi → legen."
    },
    "important": [
      "liegen durum, legen hareket anlatır."
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
      "tip": {},
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
  "de": "liegen",
  "lv": "Be • Sleep",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Be • Sleep",
    "explanation": [
      "Ana fikir: Liegen yatay olarak yalan söylemek veya yalan söylemek anlamına gelir.",
      "Bir insan için yalan söylemek genellikle uyumak anlamına gelir.",
      "Bir bakıma Liegen onun oralarda bir yerde olduğu anlamına geliyor.",
      "Bir şeyi bir kenara bırakmak anlamına gelen legen'den farklıdır."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kitap masanın üstünde."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Telefonum arabada."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Yatakta uyuyor."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Kitabı masaya koydum."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Olmak / uyumak",
        "example": "Kitap burada yatıyor."
      },
      {
        "word": "legen",
        "meaning": "Koymak",
        "example": "Kitabı buraya koyuyorum."
      },
      {
        "word": "stehen",
        "meaning": "Stand/Stand",
        "example": "Şişe masada duruyor."
      },
      {
        "word": "sein",
        "meaning": "Olmak",
        "example": "Buradayım."
      }
    ],
    "tip": {
      "text": "Unutmayın: şey zaten yerli yerindedir → Liegen • Onu bir kenara koyarsınız → efsane."
    },
    "important": [
      "Liegen durumu veya konumu gösterir.",
      "Legen eylemi gösteriyor: Birisi bir şeyi yere koyuyor."
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
              "Telefonum"
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

## Finding 49

**Audit ID:** `LRB101-0049`
**Finding Stable ID:** `g2/a1/tr|machen|idx:386|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** tr
**Card:** `machen|idx:386`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Yapmak • Yapmak","study.translation":"Yapmak • Yapmak","study.explanation":"[\"Ana fikir: machen yapmak veya yapmak anlamına gelen çok popüler bir kelimedir.\",\"Genel olarak eyleme gelince, yani nasıl yapılacağı.\",\"Bir şey yapılmış veya hazırlanmışsa, yapmak veya pişirmek olarak tercüme edilir.\",\"Birçok ifadede, machen kelimenin tam anlamıyla değil, Letonca'ya göre doğal olarak çevrilir.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"Ne yapıyorsun\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Ödevimi yapıyorum.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"Pizza yapıyoruz.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"Çok eğlenceli.\"}]","study.tip":"{\"text\":\"Atceries: Machst du muydu? = Kim buraya gelebilir?\"}","study.important":"[\"Machen çok geniş bir kelimedir ancak duruma bağlı olarak Letoncanın sıklıkla doğal bir şekilde çevrilmesi gerekir.\",\"Das macht Spaß, kelimenin tam anlamıyla \\\"eğlenceli\\\" değil, \\\"eğlenceli\\\" anlamına gelir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"yapmak • hazırlamak","study.translation":"yapmak • hazırlamak","study.explanation":"[\"Ana fikir: machen genel olarak bir işi yapmak, bir şey hazırlamak veya bir sonuca yol açmak demektir.\",\"Türkçede kalıba göre doğal karşılık seçilir; Das macht Spaß = Bu eğlenceli.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"Ne yapıyorsun?\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Ödev yapıyorum.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"Pizza yapıyoruz.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"Bu eğlenceli.\"}]","study.tip":"{\"text\":\"machen geniş anlamlıdır; kalıbın doğal Türkçe karşılığını kullan.\"}","study.important":"[\"machen bağlama göre yapmak veya hazırlamak demektir.\",\"Das macht Spaß = Bu eğlenceli.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: machen: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "yapmak • hazırlamak",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "yapmak • hazırlamak",
    "explanation": [
      "Ana fikir: machen genel olarak bir işi yapmak, bir şey hazırlamak veya bir sonuca yol açmak demektir.",
      "Türkçede kalıba göre doğal karşılık seçilir; Das macht Spaß = Bu eğlenceli."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Ne yapıyorsun?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Ödev yapıyorum."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Pizza yapıyoruz."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Bu eğlenceli."
      }
    ],
    "tip": {
      "text": "machen geniş anlamlıdır; kalıbın doğal Türkçe karşılığını kullan."
    },
    "important": [
      "machen bağlama göre yapmak veya hazırlamak demektir.",
      "Das macht Spaß = Bu eğlenceli."
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
      "tip": {},
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
  "de": "machen",
  "lv": "Yapmak • Yapmak",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Yapmak • Yapmak",
    "explanation": [
      "Ana fikir: machen yapmak veya yapmak anlamına gelen çok popüler bir kelimedir.",
      "Genel olarak eyleme gelince, yani nasıl yapılacağı.",
      "Bir şey yapılmış veya hazırlanmışsa, yapmak veya pişirmek olarak tercüme edilir.",
      "Birçok ifadede, machen kelimenin tam anlamıyla değil, Letonca'ya göre doğal olarak çevrilir."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Ne yapıyorsun"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Ödevimi yapıyorum."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Pizza yapıyoruz."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Çok eğlenceli."
      }
    ],
    "tip": {
      "text": "Atceries: Machst du muydu? = Kim buraya gelebilir?"
    },
    "important": [
      "Machen çok geniş bir kelimedir ancak duruma bağlı olarak Letoncanın sıklıkla doğal bir şekilde çevrilmesi gerekir.",
      "Das macht Spaß, kelimenin tam anlamıyla \"eğlenceli\" değil, \"eğlenceli\" anlamına gelir."
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

## Finding 50

**Audit ID:** `LRB101-0050`
**Finding Stable ID:** `g2/a1/tr|Mal|idx:390|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** tr
**Card:** `Mal|idx:390`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Zaman","study.translation":"Zaman","study.explanation":"[\"Ana fikir: das Mal, bir olay veya fırsat olarak bir kez anlamına gelir.\",\"Çoğunlukla sayılarla birlikte kullanılır: ein Mal, zwei Mal, drei Mal.\",\"Sıra numarası ile: das erste mal, das zweite mal.\",\"Konuşma dilindeki mal (Komm mal her!) parçacığıyla konuşmayın • Bunun farklı bir anlamı vardır.\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"İlk sefer zordu.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Zaten iki kez Berlin'e gittim.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"Bir kez yeterli.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"Bir kez daha lütfen!\"}]","study.tip":"{\"text\":\"Unutmayın: das Mal = zaman (isim) • Artikelsiz mal = konuşma dilindeki parçacık.\"}","study.important":"[\"Das Mal / die Male – artikel içeren isim.\",\"Ein Mal, zwei Mal – süreleri sayın.\",\"Makalesi olmayan mal (Komm mal her!) das Mal ile aynı değildir.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kez • defa","study.translation":"kez • defa","study.explanation":"[\"Ana fikir: das Mal bir olayın kaçıncı veya kaç kez gerçekleştiğini anlatan isimdir.\",\"Sayılarla ein Mal, zwei Mal; sıra sayısıyla das erste Mal denir.\",\"Konuşma parçacığı mal, das Mal isminden farklı bir kullanımdır.\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"İlk sefer zordu.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Berlin’de daha önce iki kez bulundum.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"Bir kez yeter.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"Bir kez daha, lütfen!\"}]","study.tip":"{\"text\":\"das Mal = kez/defa; artikelsiz mal konuşma dilinde ayrı bir parçacık olabilir.\"}","study.important":"[\"das Mal / die Male isimdir.\",\"ein Mal, zwei Mal olay sayısını belirtir.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: Mal: individual full-card repair of lv, study; source structure, meaning, grammar and DE-target alignment restored.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mal",
  "de_article": "das",
  "de_plural": "die Male",
  "lv": "kez • defa",
  "level": "A1",
  "study": {
    "id": "a1-mal",
    "layout": "standardStudy",
    "translation": "kez • defa",
    "explanation": [
      "Ana fikir: das Mal bir olayın kaçıncı veya kaç kez gerçekleştiğini anlatan isimdir.",
      "Sayılarla ein Mal, zwei Mal; sıra sayısıyla das erste Mal denir.",
      "Konuşma parçacığı mal, das Mal isminden farklı bir kullanımdır."
    ],
    "examples": [
      {
        "de": "Das erste Mal war schwer.",
        "lv": "İlk sefer zordu."
      },
      {
        "de": "Ich war schon zwei Mal in Berlin.",
        "lv": "Berlin’de daha önce iki kez bulundum."
      },
      {
        "de": "Ein Mal reicht.",
        "lv": "Bir kez yeter."
      },
      {
        "de": "Noch ein Mal, bitte!",
        "lv": "Bir kez daha, lütfen!"
      }
    ],
    "tip": {
      "text": "das Mal = kez/defa; artikelsiz mal konuşma dilinde ayrı bir parçacık olabilir."
    },
    "important": [
      "das Mal / die Male isimdir.",
      "ein Mal, zwei Mal olay sayısını belirtir."
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
      "tip": {},
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
  "de": "Mal",
  "de_article": "das",
  "de_plural": "die Male",
  "lv": "Zaman",
  "level": "A1",
  "study": {
    "id": "a1-mal",
    "layout": "standardStudy",
    "translation": "Zaman",
    "explanation": [
      "Ana fikir: das Mal, bir olay veya fırsat olarak bir kez anlamına gelir.",
      "Çoğunlukla sayılarla birlikte kullanılır: ein Mal, zwei Mal, drei Mal.",
      "Sıra numarası ile: das erste mal, das zweite mal.",
      "Konuşma dilindeki mal (Komm mal her!) parçacığıyla konuşmayın • Bunun farklı bir anlamı vardır."
    ],
    "examples": [
      {
        "de": "Das erste Mal war schwer.",
        "lv": "İlk sefer zordu."
      },
      {
        "de": "Ich war schon zwei Mal in Berlin.",
        "lv": "Zaten iki kez Berlin'e gittim."
      },
      {
        "de": "Ein Mal reicht.",
        "lv": "Bir kez yeterli."
      },
      {
        "de": "Noch ein Mal, bitte!",
        "lv": "Bir kez daha lütfen!"
      }
    ],
    "tip": {
      "text": "Unutmayın: das Mal = zaman (isim) • Artikelsiz mal = konuşma dilindeki parçacık."
    },
    "important": [
      "Das Mal / die Male – artikel içeren isim.",
      "Ein Mal, zwei Mal – süreleri sayın.",
      "Makalesi olmayan mal (Komm mal her!) das Mal ile aynı değildir."
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
            "das Mal"
          ]
        }
      ]
    }
  }
}
```

---

