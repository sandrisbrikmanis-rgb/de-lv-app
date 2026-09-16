# G2/A1 LRB LRB-069 — OWNER VIEW

**Batch:** LRB-069
**Rows:** 44/44
**Direction:** DESCENDING
**Reserved for:** LB_BATCH_12
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-16T15:23:57.787Z
**Source commit:** `43766913e00ed918b0d3cd6eb96bc1e9ae98b08d`
**Branch:** `cursor/lrb-069-owner-authorization-aa66`
**Input SHA256:** `4fd1545802b525984074cc116d965b51c89512fa915bf38859c1900c6093bc0a`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-069-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB069-0001`
**Finding Stable ID:** `g2/a1/lb|warm|idx:641|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0005`
**Lang:** lb
**Card:** `warm|idx:641`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** silts
**DE reference (read-only):** warm
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of warm\|idx:641 / lv: exact Luxembourgish wording for German 'warm' (Latvian 'silts') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "warm",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 2

**Audit ID:** `LRB069-0002`
**Finding Stable ID:** `g2/a1/lb|warten|idx:642|lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0006`
**Lang:** lb
**Card:** `warten|idx:642`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** gaidīt
**DE reference (read-only):** warten
**CURRENT (captured scope):** Waarden
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of warten\|idx:642 / lv: exact Luxembourgish wording for German 'warten' (Latvian 'gaidīt') is not established by the supplied evidence; production currently has 'Waarden' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** SEMANTIC_MEANING_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "warten",
  "lv": "Waarden",
  "level": "A1"
}
```

---

## Finding 3

**Audit ID:** `LRB069-0003`
**Finding Stable ID:** `g2/a1/lb|warum|idx:643|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0007`
**Lang:** lb
**Card:** `warum|idx:643`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** kāpēc
**DE reference (read-only):** warum
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of warum\|idx:643 / lv: exact Luxembourgish wording for German 'warum' (Latvian 'kāpēc') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "warum",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 4

**Audit ID:** `LRB069-0004`
**Finding Stable ID:** `g2/a1/lb|was|idx:644|lv; study.explanation; study.examples|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0003`
**Lang:** lb
**Card:** `was|idx:644`
**Field / path:** `lv; study.explanation; study.examples`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** kas • ko
**DE reference (read-only):** was
**CURRENT (captured scope):** {"lv":"CAA -","study.explanation":"[\"Galvenā doma: war ir jautājamvārds par lietām un notikumiem — latviski tas ir kas vai ko, atkarībā no teikuma daṭas.\",\"Wat jautā par lietām, notikumiem un factiem, nevis par personām.\",\"Vācu valodā war nemainās pēc locījuma - tas vienmēr izskatās war.\",\"Ja war ir teikuma priekšmets (Sujete), latviski zu tulko ar kas (Was ist das? = Kas tas ir?).\",\"Wann was e Verbverbessernomem (Objet) ass, iwwersat et op Lëtzebuergesh as wat (Was machst du? = Wat mains du?).\",\"Par personām jautā ar wer (kas/kurš), nevis war.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Wéi vill kascht et?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Cash Notiz?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Wousst Dir dat?\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Ko du vēlies dzert?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Wat bedeit dëst Wuert?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Wat ass dein Liiblingskréizerei?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Ko du passacīji?\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of was\|idx:644 / lv; study.explanation; study.examples: the row bundles several production values; the snapshot begins '{"lv":"CAA -","study.explanation":"[\"Galvenā doma: war ir jautājamvārds par lietām un notikumiem — latviski tas ir kas vai ko, a…'. For German 'was' / Latvian 'kas • ko', OWNER must name the exact subfield and provide its complete Luxembourgish replacement; one row-level owner_new would be ambiguous.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "was",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Galvenā doma: war ir jautājamvārds par lietām un notikumiem — latviski tas ir kas vai ko, atkarībā no teikuma daṭas.",
      "Wat jautā par lietām, notikumiem un factiem, nevis par personām.",
      "Vācu valodā war nemainās pēc locījuma - tas vienmēr izskatās war.",
      "Ja war ir teikuma priekšmets (Sujete), latviski zu tulko ar kas (Was ist das? = Kas tas ir?).",
      "Wann was e Verbverbessernomem (Objet) ass, iwwersat et op Lëtzebuergesh as wat (Was machst du? = Wat mains du?).",
      "Par personām jautā ar wer (kas/kurš), nevis war."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Wéi vill kascht et?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Cash Notiz?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Wousst Dir dat?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Ko du vēlies dzert?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Wat bedeit dëst Wuert?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Wat ass dein Liiblingskréizerei?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Ko du passacīji?"
      }
    ],
    "tip": [
      "was selbst ännert sech net — am Däitsche ass et ëmmer was; auf Lëtzebuergesh wielen Sie wat oder wien no der Satzuert.",
      "Schnelle Trick: wann d'Äntwert op d'Fro \"Dat ass ...\" kann sinn, benotz wat; wann d'Äntwert no dem Verb komm wéi e Verbessernomem, benotz wien."
    ],
    "important": [
      "was freet iwwer Saachen, Geschechten an Fakten — aldot net iwwer Persounen.",
      "Par personām jautā ar wer (kas/kurš), nevis war.",
      "was für (ein/eine) bedeit kéng/wat fir a freet no der Eegeschaft oder Aart (Was für ein Film ist das? = Wat fir e Film ass dat?).",
      "Falsch: Wer ist passiert? → Richteg: Was ist passiert?"
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
              "Kas"
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
              "Cash"
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
              "Wousst"
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
              "Kas"
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

## Finding 5

**Audit ID:** `LRB069-0005`
**Finding Stable ID:** `g2/a1/lb|sich waschen|idx:646|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0008`
**Lang:** lb
**Card:** `sich waschen|idx:646`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** mazgāties
**DE reference (read-only):** sich waschen
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of sich waschen\|idx:646 / lv: exact Luxembourgish wording for German 'sich waschen' (Latvian 'mazgāties') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sich waschen",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 6

**Audit ID:** `LRB069-0006`
**Finding Stable ID:** `g2/a1/lb|Weg|idx:647|lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0009`
**Lang:** lb
**Card:** `Weg|idx:647`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** ceļš
**DE reference (read-only):** Weg
**CURRENT (captured scope):** Regioun Road Yol
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Weg\|idx:647 / lv: exact Luxembourgish wording for German 'Weg' (Latvian 'ceļš') is not established by the supplied evidence; production currently has 'Regioun Road Yol' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** SEMANTIC_MEANING_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Weg",
  "de_article": "der",
  "de_plural": "die Wege",
  "lv": "Regioun Road Yol",
  "level": "A1"
}
```

---

## Finding 7

**Audit ID:** `LRB069-0007`
**Finding Stable ID:** `g2/a1/lb|Wein|idx:649|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0010`
**Lang:** lb
**Card:** `Wein|idx:649`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** vīns
**DE reference (read-only):** Wein
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Wein\|idx:649 / lv: exact Luxembourgish wording for German 'Wein' (Latvian 'vīns') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Wein",
  "de_article": "der",
  "de_plural": "die Weine",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 8

**Audit ID:** `LRB069-0008`
**Finding Stable ID:** `g2/a1/lb|weinen|idx:650|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0011`
**Lang:** lb
**Card:** `weinen|idx:650`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** raudāt
**DE reference (read-only):** weinen
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of weinen\|idx:650 / lv: exact Luxembourgish wording for German 'weinen' (Latvian 'raudāt') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "weinen",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 9

**Audit ID:** `LRB069-0009`
**Finding Stable ID:** `g2/a1/lb|weiß|idx:651|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0012`
**Lang:** lb
**Card:** `weiß|idx:651`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** balts
**DE reference (read-only):** weiß
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of weiß\|idx:651 / lv: exact Luxembourgish wording for German 'weiß' (Latvian 'balts') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "weiß",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 10

**Audit ID:** `LRB069-0010`
**Finding Stable ID:** `g2/a1/lb|wenig|idx:654|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0013`
**Lang:** lb
**Card:** `wenig|idx:654`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** maz
**DE reference (read-only):** wenig
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of wenig\|idx:654 / lv: exact Luxembourgish wording for German 'wenig' (Latvian 'maz') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wenig",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 11

**Audit ID:** `LRB069-0011`
**Finding Stable ID:** `g2/a1/lb|wenn|idx:655|lv; study.explanation; study.examples|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0004`
**Lang:** lb
**Card:** `wenn|idx:655`
**Field / path:** `lv; study.explanation; study.examples`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** {"lv":"Yes • Kad","study.explanation":"[\"Galvenā doma: wann nozīmē ja vai kad atkarībā no situācijas.\",\"Wann et ëm eng Bedéngung geet, iwwersat et op Lëtzebuergesh as wann.\",\"Wann et ëm repetéiert oder allgemeng Zäit geet, iwwersat et op Lëtzebuergesh as wann.\",\"Pēc wenn darbības vārds vācu teikumā parasti stāv bijās.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Jo, ir wëll, iegriezies.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Ja līst, es palieku mājās.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Kad esmu noguris, es dzeru kafiju.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Es nezinu, vai viếš nāks.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of wenn\|idx:655 / lv; study.explanation; study.examples: the row bundles several production values; the snapshot begins '{"lv":"Yes • Kad","study.explanation":"[\"Galvenā doma: wann nozīmē ja vai kad atkarībā no situācijas.\",\"Wann et ëm eng Bedéngu…'. For German 'wenn' / Latvian 'ja • kad', OWNER must name the exact subfield and provide its complete Luxembourgish replacement; one row-level owner_new would be ambiguous.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
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

## Finding 12

**Audit ID:** `LRB069-0012`
**Finding Stable ID:** `g2/a1/lb|wer|idx:656|study.explanation; study.examples|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0005`
**Lang:** lb
**Card:** `wer|idx:656`
**Field / path:** `study.explanation; study.examples`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** {"study.explanation":"[\"Haaptsaach: wer ass de Frooswuert fir d'Persounidentitéit — auf Lëtzebuergesh ass dat wien oder ween.\",\"Wer jautā par cilvēkiem, ne par lietām vai notikumiem.\",\"Par lietām un notikumiem jautā ar war, no wen.\",\"Wien ass vācu valodā parasti ir teikuma priekšmets (nominatīvā)? = Kassentasche ir?\",\"Wann d'Fro ass wien genau vun méi Mënschene, benotz wer oft mat von (wer von euch = wien vun iech).\",\"Wer maina formu pēc locījuma: wen (akuzatīvs), wem (datīvs), wessen (ģenitīvs) — A1 līmenī visbiežāk sastopama ir tieši forma wer.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Wéi vill kascht et?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Wéi Dir sidd?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Wat kënnt haut?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"¿Queréis ir tava skolotāja?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Wien vun iech spréchet Däitsch?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"¿Conocéis a Teica?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Wien wëllt Kaffi?\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of wer\|idx:656 / study.explanation; study.examples: the row bundles several production values; the snapshot begins '{"study.explanation":"[\"Haaptsaach: wer ass de Frooswuert fir d'Persounidentitéit — auf Lëtzebuergesh ass dat wien oder ween.\",…'. For German 'wer' / Latvian 'kas • kurš', OWNER must name the exact subfield and provide its complete Luxembourgish replacement; one row-level owner_new would be ambiguous.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
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

## Finding 13

**Audit ID:** `LRB069-0013`
**Finding Stable ID:** `g2/a1/lb|werden|idx:657|lv; study.translation; study.examples[].lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0001`
**Lang:** lb
**Card:** `werden|idx:657`
**Field / path:** `lv; study.translation; study.examples[].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** kļūt
**DE reference (read-only):** werden
**CURRENT (captured scope):** {"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of werden\|idx:657 / lv; study.translation; study.examples[].lv: that exact field is absent from the mapped card; the available snapshot begins '{"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}'. For German 'werden' / Latvian 'kļūt', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "werden",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptsaach: werden um A1-Niveau bedeit meescht ginn.",
      "To lieto, yes chew kas mainās vai kĕūst citāds.",
      "Méi spéit am Däitschen benotz werden och fir d'Zukunft a Passiv.",
      "A1 līmenī replyīgākā frāze ir Ech ginn midd. = Es käschtūstu noguris."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "Et ass nach net gewosst."
      },
      {
        "de": "Es wird kalt.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "D'Visiteuren hu sech dofir entscheet."
      },
      {
        "de": "Ich bin müde.",
        "lv": "Es esmu noguris."
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "CAA -",
        "example": "Ich werde müde."
      },
      {
        "word": "sein",
        "meaning": "Sinn",
        "example": "Ich bin müde."
      },
      {
        "word": "bleiben",
        "meaning": "CAA -",
        "example": "Ich bleibe hier."
      },
      {
        "word": "machen",
        "meaning": "Darīt / taisīt",
        "example": "Ich mache das."
      }
    ],
    "tip": {
      "text": "Atceries: izmaiņa/stāvoklis kļūst citāds → werden."
    },
    "important": [
      "werden ass net dat selb wéi sein.",
      "Ich werde müde = ech ginn midd; Ich bin müde = ech sinn midd."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "werden",
          "Galvenā"
        ],
        "purple": [
          "kļūt",
          "mainās",
          "kļūt"
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
              "ass"
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
              "Dat"
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
              "D'Visiteuren"
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
              "CAA"
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
              "Sinn"
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

## Finding 14

**Audit ID:** `LRB069-0014`
**Finding Stable ID:** `g2/a1/lb|Wetter|idx:658|lv; study.translation; study.examples[].lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0002`
**Lang:** lb
**Card:** `Wetter|idx:658`
**Field / path:** `lv; study.translation; study.examples[].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** laiks (laikapstākļi)
**DE reference (read-only):** Wetter
**CURRENT (captured scope):** {"lv":"Spuerkeess (Wëllapstākṅi)","study.translation":"Spuerkeess (Wëllapstākṅi)","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of Wetter\|idx:658 / lv; study.translation; study.examples[].lv: that exact field is absent from the mapped card; the available snapshot begins '{"lv":"Spuerkeess (Wëllapstākṅi)","study.translation":"Spuerkeess (Wëllapstākṅi)","study.examples[].lv":null}'. For German 'Wetter' / Latvian 'laiks (laikapstākļi)', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Wetter",
  "de_article": "das",
  "lv": "Spuerkeess (Wëllapstākṅi)",
  "level": "A1",
  "study": {
    "id": "a1-wetter",
    "layout": "standardStudy",
    "translation": "Spuerkeess (Wëllapstākṅi)",
    "explanation": [
      "Galvenā doma: d'Wieder nozīmē laikapstākṅus - saulaini, lietaini, auksti vai silti.",
      "Latviešu vārds „laiks“ war nozīmēt gan laikapstākļus, gan laiku pulkstenī — vāciski tas ir atšķirīgi.",
      "Par laiku dabā runā ar d'Wieder: Wéi ass d'Wieder haut?",
      "Am Saz benotz dacks das Wetter zesumme mat Wierder wéi warm oder kalt.",
      "Nesajauc ar die Zeit — tā ir laiks kā brīdis vai iespēja (I habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Wie ist das Wetter heute?",
        "lv": "Kāds wantss šodien?"
      },
      {
        "de": "Das Wetter ist schön.",
        "lv": "D'Wieder ass schéin."
      },
      {
        "de": "Das Wetter ist schlecht.",
        "lv": "Laiks ir slikts."
      },
      {
        "de": "Im Winter ist das Wetter oft kalt.",
        "lv": "Seemā laiks bieži ir auksts."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Même si ça peut servir."
      },
      {
        "de": "Morgen wird das Wetter besser.",
        "lv": "Et gëtt e Labyrinth."
      }
    ],
    "comparison": [
      {
        "word": "Wetter",
        "meaning": "Laikapstākļi",
        "example": "Das Wetter ist schön."
      },
      {
        "word": "Zeit",
        "meaning": "Laiks (brīdis)",
        "example": "Ich habe keine Zeit."
      },
      {
        "word": "Regen",
        "meaning": "CAA -",
        "example": "Es gibt viel Regen."
      },
      {
        "word": "Sonne",
        "meaning": "Kolonn",
        "example": "Die Sonne scheint."
      }
    ],
    "tip": [
      "Wann et ëm d'Sonn, Reen oder d'Temperatur dréisst — benotz das Wetter.",
      "Denkt un: Wie ist das Wetter? = Wéi ass d'Wieder? (net d'Auer)."
    ],
    "important": [
      "das Wetter = Wieder, net d'Zäit an der Auer.",
      "die Zeit = Zäit wéi en Moment oder eng Geleeënheet — eng aner Kaart A1."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Wetter",
          "Zeit"
        ],
        "purple": [
          "laikapstākļus"
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
              "Kāds"
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
              "D'Wieder"
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
              "Seemā"
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
              "Même"
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
              "gëtt"
            ],
            "green": [
              "gëtt"
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
              "CAA"
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
              "Kolonn"
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

## Finding 15

**Audit ID:** `LRB069-0015`
**Finding Stable ID:** `g2/a1/lb|wichtig|idx:659|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0014`
**Lang:** lb
**Card:** `wichtig|idx:659`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** svarīgs
**DE reference (read-only):** wichtig
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of wichtig\|idx:659 / lv: exact Luxembourgish wording for German 'wichtig' (Latvian 'svarīgs') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wichtig",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 16

**Audit ID:** `LRB069-0016`
**Finding Stable ID:** `g2/a1/lb|wie|idx:660|lv; study.translation; study.examples[].lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0003`
**Lang:** lb
**Card:** `wie|idx:660`
**Field / path:** `lv; study.translation; study.examples[].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** kā • cik
**DE reference (read-only):** wie
**CURRENT (captured scope):** {"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of wie\|idx:660 / lv; study.translation; study.examples[].lv: that exact field is absent from the mapped card; the available snapshot begins '{"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}'. For German 'wie' / Latvian 'kā • cik', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
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

## Finding 17

**Audit ID:** `LRB069-0017`
**Finding Stable ID:** `g2/a1/lb|wieder|idx:661|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0015`
**Lang:** lb
**Card:** `wieder|idx:661`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** atkal
**DE reference (read-only):** wieder
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of wieder\|idx:661 / lv: exact Luxembourgish wording for German 'wieder' (Latvian 'atkal') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wieder",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 18

**Audit ID:** `LRB069-0018`
**Finding Stable ID:** `g2/a1/lb|Zigarette|idx:664|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0016`
**Lang:** lb
**Card:** `Zigarette|idx:664`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** cigarete
**DE reference (read-only):** Zigarette
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Zigarette\|idx:664 / lv: exact Luxembourgish wording for German 'Zigarette' (Latvian 'cigarete') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zigarette",
  "de_article": "die",
  "de_plural": "die Zigaretten",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 19

**Audit ID:** `LRB069-0019`
**Finding Stable ID:** `g2/a1/lb|Zitrone|idx:666|lv|SPELLING_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0017`
**Lang:** lb
**Card:** `Zitrone|idx:666`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY_SPELLING_OR_DIACRITICS
**Raw category:** SPELLING_ERROR
**LV source (read-only):** citrons
**DE reference (read-only):** Zitrone
**CURRENT (captured scope):** Citroen
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Zitrone\|idx:666 / lv: exact Luxembourgish wording for German 'Zitrone' (Latvian 'citrons') is not established by the supplied evidence; production currently has 'Citroen' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** ORTHOGRAPHY_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zitrone",
  "de_article": "die",
  "de_plural": "die Zitronen",
  "lv": "Citroen",
  "level": "A1"
}
```

---

## Finding 20

**Audit ID:** `LRB069-0020`
**Finding Stable ID:** `g2/a1/lb|zu|idx:668|lv; study.translation; study.examples[].lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0004`
**Lang:** lb
**Card:** `zu|idx:668`
**Field / path:** `lv; study.translation; study.examples[].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** uz • pie
**DE reference (read-only):** zu
**CURRENT (captured scope):** {"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of zu\|idx:668 / lv; study.translation; study.examples[].lv: that exact field is absent from the mapped card; the available snapshot begins '{"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}'. For German 'zu' / Latvian 'uz • pie', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zu",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-zu",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Galvenā doma: zu Đoti bieži nozīmē uz vai pie, bet tam ir arī loma ar infinitīvu.",
      "Mat Mënsche an Institutiounen zu dacks bedeit bei oder op.",
      "Mat Eegeschaftswierder zu kann ze vill bedeit.",
      "An der Konstruktioun zu + Infinitiv hëleft et d'Infinitiv ze bilden: zu lernen, zu gehen."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Es eju pie ārsta."
      },
      {
        "de": "Wir gehen zur Schule.",
        "lv": "Mēs ejam uz skolu."
      },
      {
        "de": "Das ist zu teuer.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich habe keine Zeit zu lernen.",
        "lv": "Man nav laika mācīties."
      }
    ],
    "comparison": [
      {
        "word": "zu",
        "meaning": "Uz / pie / pārāk / infinitīvs",
        "example": "Ich gehe zum Arzt."
      },
      {
        "word": "nach",
        "meaning": "Uz ar pilsētām/valstīm",
        "example": "Ich fahre nach Berlin."
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz vietu",
        "example": "Ich gehe in die Schule."
      },
      {
        "word": "bei",
        "meaning": "PIE KADA / PIE DARBA",
        "example": "Ich bin bei Anna."
      }
    ],
    "tip": {
      "text": "Atceries: pie ārsta → zum Arzt; pārāk dārgi → zu teuer."
    },
    "important": [
      "zu huet ganz vill Benotzungen, also schafft ëmmer op d'Konstruktioun.",
      "zu teuer nozīmē \"pārāk dārgi\", nevis \"uz dārgi\"."
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
          "pārāk",
          "nenoteiksmi"
        ],
        "green": [
          "cilvēkiem",
          "iestādēm"
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
              "Dat"
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

## Finding 21

**Audit ID:** `LRB069-0021`
**Finding Stable ID:** `g2/a1/lb|Zucker|idx:669|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0001`
**Lang:** lb
**Card:** `Zucker|idx:669`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** cukurs
**DE reference (read-only):** Zucker
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Zucker\|idx:669 / lv: exact Luxembourgish wording for German 'Zucker' (Latvian 'cukurs') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zucker",
  "de_article": "der",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 22

**Audit ID:** `LRB069-0022`
**Finding Stable ID:** `g2/a1/lb|zuerst|idx:670|lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0002`
**Lang:** lb
**Card:** `zuerst|idx:670`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** vispirms
**DE reference (read-only):** zuerst
**CURRENT (captured scope):** Fësch Pirmen
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of zuerst\|idx:670 / lv: exact Luxembourgish wording for German 'zuerst' (Latvian 'vispirms') is not established by the supplied evidence; production currently has 'Fësch Pirmen' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** SEMANTIC_MEANING_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zuerst",
  "lv": "Fësch Pirmen",
  "level": "A1"
}
```

---

## Finding 23

**Audit ID:** `LRB069-0023`
**Finding Stable ID:** `g2/a1/lb|Zug|idx:671|lv; study.translation; study.examples[].lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0005`
**Lang:** lb
**Card:** `Zug|idx:671`
**Field / path:** `lv; study.translation; study.examples[].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** vilciens
**DE reference (read-only):** Zug
**CURRENT (captured scope):** {"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of Zug\|idx:671 / lv; study.translation; study.examples[].lv: that exact field is absent from the mapped card; the available snapshot begins '{"lv":"CAA -","study.translation":"CAA -","study.examples[].lv":null}'. For German 'Zug' / Latvian 'vilciens', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zug",
  "de_article": "der",
  "de_plural": "die Züge",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptsaach: der Zug um A1-Niveau bedeit meescht Zuchter.",
      "Fir dëst ze maachen situācijās par braukšanu, pienākšanu un atiešanu.",
      "Dažās citās nozīmēs Zug war būt gājiens, caurvējš vai vaibsts, bet tās nav galvenās A1 nozīmes.",
      "Ganz dacks Ausdrecker sinn mit dem Zug fahren an Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "Villeciens pienāk pulséiert astoṅos."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Es braucu ar vilcienu."
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "Vilciens ir pilns."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "Autobuss pienāk vēlāk."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "CAA -",
        "example": "Der Zug kommt."
      },
      {
        "word": "die Bahn",
        "meaning": "Dzelzceňš / braukšana ar vilcienu",
        "example": "Ich fahre mit der Bahn."
      },
      {
        "word": "der Bus",
        "meaning": "CAA -",
        "example": "Der Bus kommt."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "CAA -",
        "example": "Die Straßenbahn ist hier."
      }
    ],
    "tip": {
      "text": "Atceries: konkrēts vilciens → der Zug."
    },
    "important": [
      "der Zug virsrakstā jāuztver kā \"vilciens\".",
      "Rarer Bedeitunge sinn am Haaptkäertchen A1 net néideg."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Zug",
          "Zug",
          "mit dem Zug fahren"
        ],
        "purple": [
          "vilciens",
          "Vilciens"
        ],
        "red": [
          "gājiens",
          "caurvējš",
          "vaibsts"
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
              "Villeciens"
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
              "CAA"
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
              "Dzelzceňš",
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
              "CAA"
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
              "CAA"
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

## Finding 24

**Audit ID:** `LRB069-0024`
**Finding Stable ID:** `g2/a1/lb|zum|idx:672|lv; study.explanation|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0001`
**Lang:** lb
**Card:** `zum|idx:672`
**Field / path:** `lv; study.explanation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** uz • pie
**DE reference (read-only):** zum
**CURRENT (captured scope):** {"lv":"CAA -","study.explanation":"[\"Zu dem ir prievārda zu un artikula zu den saīsinājums.\",\"Ganzt Form: zu dem (wen?).\",\"Benotz mat Herrenwierder a Neutrum wann Dir Richtong oder Zil bezeechent.\",\"Dacks bedeit op eppes oder bei wéi — bei der Dokter, op der Statioun, bei engem Frënd.\",\"Praksē gandriz vienmēr dito zum, nevis pilno zu dem.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of zum\|idx:672 / lv; study.explanation: the row bundles several production values; the snapshot begins '{"lv":"CAA -","study.explanation":"[\"Zu dem ir prievārda zu un artikula zu den saīsinājums.\",\"Ganzt Form: zu dem (wen?).\",\"B…'. For German 'zum' / Latvian 'uz • pie', OWNER must name the exact subfield and provide its complete Luxembourgish replacement; one row-level owner_new would be ambiguous.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zum",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Zu dem ir prievārda zu un artikula zu den saīsinājums.",
      "Ganzt Form: zu dem (wen?).",
      "Benotz mat Herrenwierder a Neutrum wann Dir Richtong oder Zil bezeechent.",
      "Dacks bedeit op eppes oder bei wéi — bei der Dokter, op der Statioun, bei engem Frënd.",
      "Praksē gandriz vienmēr dito zum, nevis pilno zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Es eju pie ārsta."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Mēs braucam uz staciju."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Nāc ēst!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Viņš brauc uz lidostu."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Mēs ejam uz koncertu."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Dāvana ir dzimšanas dienai."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Es eju pie friziera."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "Uz /Péiteng (Kam?)",
        "example": "zum Arzt – Pie äersta"
      },
      {
        "word": "zur",
        "meaning": "On / off (femme d'affaires)",
        "example": "zur Schule – op d'Schoul"
      },
      {
        "word": "zu",
        "meaning": "Uz / pie / pārāk",
        "example": "zu Hause – Mājās"
      },
      {
        "word": "nach",
        "meaning": "Us (pilsētas/valstis)",
        "example": "nach Berlin – Uz Berlīni"
      },
      {
        "word": "bei",
        "meaning": "PIE (atrašanās)",
        "example": "beim Arzt – Pie äersta"
      }
    ],
    "tip": [
      "Denkt un: zu + dem → zum (wen?).",
      "Fir Frauenwierder: zu + der → zur."
    ],
    "important": [
      "zum = zu dem, just mat Herrenwierder oder Neutrum Wierder am Dativ (wen?).",
      "Bezeechent Richtong oder Zil: bei der Dokter, op der Statioun, bei engem Frënd.",
      "Fir Frauenwierder benotz zur: zur Bank, zur Post.",
      "Verwieselt net mat bei (Sëtzpunkt bei) oder nach (op Stied ouni Artikel)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zum",
          "zu dem"
        ],
        "purple": [
          "uz",
          "pie"
        ],
        "green": [
          "kam?",
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
              "Dat"
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
              "/Péiteng"
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
              "off",
              "off"
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
              "pilsētas/valstis"
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
            "uz",
            "pie"
          ],
          "green": [
            "mērķi"
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

## Finding 25

**Audit ID:** `LRB069-0025`
**Finding Stable ID:** `g2/a1/lb|zusammen|idx:675|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0003`
**Lang:** lb
**Card:** `zusammen|idx:675`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** kopā
**DE reference (read-only):** zusammen
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of zusammen\|idx:675 / lv: exact Luxembourgish wording for German 'zusammen' (Latvian 'kopā') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zusammen",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 26

**Audit ID:** `LRB069-0026`
**Finding Stable ID:** `g2/a1/lb|zwanzig|idx:677|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0004`
**Lang:** lb
**Card:** `zwanzig|idx:677`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** divdesmit
**DE reference (read-only):** zwanzig
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of zwanzig\|idx:677 / lv: exact Luxembourgish wording for German 'zwanzig' (Latvian 'divdesmit') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zwanzig",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 27

**Audit ID:** `LRB069-0027`
**Finding Stable ID:** `g2/a1/lb|zweihundert|idx:680|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0005`
**Lang:** lb
**Card:** `zweihundert|idx:680`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** divsimt
**DE reference (read-only):** zweihundert
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of zweihundert\|idx:680 / lv: exact Luxembourgish wording for German 'zweihundert' (Latvian 'divsimt') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zweihundert",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 28

**Audit ID:** `LRB069-0028`
**Finding Stable ID:** `g2/a1/lb|zweite|idx:682|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0006`
**Lang:** lb
**Card:** `zweite|idx:682`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** otrais
**DE reference (read-only):** zweite
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of zweite\|idx:682 / lv: exact Luxembourgish wording for German 'zweite' (Latvian 'otrais') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zweite",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 29

**Audit ID:** `LRB069-0029`
**Finding Stable ID:** `g2/a1/lb|Zwiebel|idx:683|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0007`
**Lang:** lb
**Card:** `Zwiebel|idx:683`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** sīpols
**DE reference (read-only):** Zwiebel
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Zwiebel\|idx:683 / lv: exact Luxembourgish wording for German 'Zwiebel' (Latvian 'sīpols') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zwiebel",
  "de_article": "die",
  "de_plural": "die Zwiebeln",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 30

**Audit ID:** `LRB069-0030`
**Finding Stable ID:** `g2/a1/lb|fernsehen|idx:687|lv; study.translation; study.examples[0].lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0002`
**Lang:** lb
**Card:** `fernsehen|idx:687`
**Field / path:** `lv; study.translation; study.examples[0].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** skatīties televizoru
**DE reference (read-only):** fernsehen
**CURRENT (captured scope):** {"lv":"Skatties Televisioun","study.translation":"Skatties Televisioun","study.examples[0].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of fernsehen\|idx:687 / lv; study.translation; study.examples[0].lv: that exact field is absent from the mapped card; the available snapshot begins '{"lv":"Skatties Televisioun","study.translation":"Skatties Televisioun","study.examples[0].lv":null}'. For German 'fernsehen' / Latvian 'skatīties televizoru', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "fernsehen",
  "lv": "Skatties Televisioun",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "Skatties Televisioun",
    "explanation": "Galvenā doma: fernsehen ir sadalāms darbības vārds — ich sehe fern, du siehst fern. Tas nozīmē skatīties televīziju. Ne jaukt ar lietvārdu das Fernsehen (televīzija kā medijs).",
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Šovakar ass Skatos Televisioun."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Vai tu bieži skaties televīzoru?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Bērni pēcpusdienā skatās televīzoru."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "Skatties Televisioun",
        "example": "Ich sehe fern. = Ech gesinn Fernseh."
      },
      {
        "word": "das Fernsehen",
        "meaning": "Televīzija (Medijs)",
        "example": "Im Fernsehen läuft ein Film. = Am Fernseh leeft e Film."
      },
      {
        "word": "sehen",
        "meaning": "CAA -",
        "example": "Ich sehe einen Film. = Ech gesinn e Film."
      }
    ],
    "tip": {
      "leftBlocks": [
        {
          "text": "Par darbību lieto fernsehen (ich sehe fern). Par TV programmu vai mediju lieto das Fernsehen."
        }
      ]
    },
    "important": {
      "text": "Televisioun = darbības vārds (ech kucken Fernseh). televisioun = lietvārds, tikai vienskaitlis."
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fernsehen",
          "sehe",
          "fern"
        ],
        "purple": [
          "skatīties televīziju"
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
          "lv": {
            "purple": [
              "Skatos Televisioun"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Siehst",
              "fern"
            ]
          },
          "lv": {
            "purple": [
              "skaties televīzoru"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sehen",
              "fern"
            ]
          },
          "lv": {
            "purple": [
              "skatās televīzoru"
            ]
          }
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB069-0031`
**Finding Stable ID:** `g2/a1/lb|Fernsehen|idx:688|study.explanation; study.examples[5].lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0003`
**Lang:** lb
**Card:** `Fernsehen|idx:688`
**Field / path:** `study.explanation; study.examples[5].lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** televīzija
**DE reference (read-only):** Fernsehen
**CURRENT (captured scope):** {"study.explanation":"[\"Haaptidee: Substantiv, nëmmen Eenzahl. Beschreift TV als Medium oder Iwwertraach am Ganzen.\",\"Das Fernsehen galvenokārt nozīmē: skatīties pārraidi.\",\"Bieži raksturo: DARBİBU.\",\"Das Fernsehen betekent vooral: TV als medium.\",\"Dacks charakteriséiert: Substantiv (nëmmen Eenzahl).\",\"Fernseh ir darbības vārds, ko war sadalīt: Ech kucken Fernseh, Dir kuckt Fernseh.\",\"Das Fernsehen ir lietvārds un tikai vienskaitlis — tam nav daudzskaitļa formas.\"]","study.examples[5].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of Fernsehen\|idx:688 / study.explanation; study.examples[5].lv: that exact field is absent from the mapped card; the available snapshot begins '{"study.explanation":"[\"Haaptidee: Substantiv, nëmmen Eenzahl. Beschreift TV als Medium oder Iwwertraach am Ganzen.\",\"Das Fern…'. For German 'Fernsehen' / Latvian 'televīzija', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "Televīzija",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "Televīzija",
    "explanation": [
      "Haaptidee: Substantiv, nëmmen Eenzahl. Beschreift TV als Medium oder Iwwertraach am Ganzen.",
      "Das Fernsehen galvenokārt nozīmē: skatīties pārraidi.",
      "Bieži raksturo: DARBİBU.",
      "Das Fernsehen betekent vooral: TV als medium.",
      "Dacks charakteriséiert: Substantiv (nëmmen Eenzahl).",
      "Fernseh ir darbības vārds, ko war sadalīt: Ech kucken Fernseh, Dir kuckt Fernseh.",
      "Das Fernsehen ir lietvārds un tikai vienskaitlis — tam nav daudzskaitļa formas."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Ko šodien rāda televīzijā?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Ko šodien rāda televīzijā?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "Televīzijā tiek rādīta filma."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Televīzijas programma šodien ir garlaicīga."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Šovakar ass Skatos Televisioun."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Wat ginn se am Fernseh?"
      }
    ],
    "tip": [
      "Wann iwwer d'Aktioun geschwat gëtt, benotzt fernsehen (ech gesinn fern). Wann iwwer d'TV Programm oder Medium geschwat gëtt, benotzt das Fernsehen.",
      "Substantiv, nëmmen Eenzahl. Beschreift TV als Medium oder Iwwertraach am Ganzen."
    ],
    "important": [
      "fernsehen ass separabel: sehen + fern.",
      "das Fernsehen ass net a Mehrzahl — et gëtt keng *die Fernsehen.",
      "Falsch: die Fernsehen → Richteg: das Fernsehen",
      "Aktioun: fernsehen → ich sehe fern."
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
              "televīzija"
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
              "televīzija"
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
              "televīzija"
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
              "televīzija"
            ]
          }
        },
        {
          "de": {},
          "lv": {
            "purple": [
              "Televisioun"
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
              "televīzija"
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

## Finding 32

**Audit ID:** `LRB069-0032`
**Finding Stable ID:** `g2/a1/lb|Appetit|idx:689|lv; study.explanation|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0004`
**Lang:** lb
**Card:** `Appetit|idx:689`
**Field / path:** `lv; study.explanation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** apetīte
**DE reference (read-only):** Appetit
**CURRENT (captured scope):** {"lv":"CAA -","study.explanation":"[\"Haaptidee: E Gefill, datt ee wëll iessen. nëmmen Eenzahl — keng Mehrzahl.\",\"Der Appetit galvenokārt nozīmē: vēlme ēst.\",\"Dacks charakteriséiert: en Uewerfläch (nëmmen Eenzahl).\",\"Der Appetit ir tikai vienskaitlis — apetīte.\",\"A1 līmenī tie bieži nāk kopā, piemēram: Gudden Appetit!\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of Appetit\|idx:689 / lv; study.explanation: the row bundles several production values; the snapshot begins '{"lv":"CAA -","study.explanation":"[\"Haaptidee: E Gefill, datt ee wëll iessen. nëmmen Eenzahl — keng Mehrzahl.\",\"Der Appetit g…'. For German 'Appetit' / Latvian 'apetīte', OWNER must name the exact subfield and provide its complete Luxembourgish replacement; one row-level owner_new would be ambiguous.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptidee: E Gefill, datt ee wëll iessen. nëmmen Eenzahl — keng Mehrzahl.",
      "Der Appetit galvenokārt nozīmē: vēlme ēst.",
      "Dacks charakteriséiert: en Uewerfläch (nëmmen Eenzahl).",
      "Der Appetit ir tikai vienskaitlis — apetīte.",
      "A1 līmenī tie bieži nāk kopā, piemēram: Gudden Appetit!"
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Labu apetīti!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "Labu apetīti!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "One nav apetītes."
      }
    ],
    "tip": [
      "der Appetit = Appetit",
      "Benotzt der Appetit, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "der Appetit ass nëmmen an der Eenzahl.",
      "Falsch: die Appetite → Richteg: der Appetit",
      "Falsch: Ich bin Appetit. → Richteg: Ich habe Appetit.",
      "E Gefill: der Appetit."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Appetit",
          "appetit"
        ],
        "purple": [
          "apetīte",
          "Appetit"
        ],
        "yellow": [
          "Appetit"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {
            "purple": [
              "apetīti"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {
            "purple": [
              "apetīti"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {
            "purple": [
              "apetītes"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "apetīte"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "der Appetit"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB069-0033`
**Finding Stable ID:** `g2/a1/lb|essen|idx:690|study.examples; study.explanation|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0005`
**Lang:** lb
**Card:** `essen|idx:690`
**Field / path:** `study.examples; study.explanation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** ēst
**DE reference (read-only):** essen
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ich esse gern Pizza.\",\"lv\":\"Ech iesse Gär Kiischt.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Wat wil je eten\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Mēs ēdam pulksten 12.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Ēdiens ir gatavs.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Dat ass dat „wir\\\"., Hier waren wir nie! '\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Ēdiens garšo labi.\"}]","study.explanation":"[\"Haaptidee: Verb — Iesswaaren iessen.\",\"Iessen galvenokārt nozīmē: patērēt pārtiku.\",\"Bieži raksturo: DARBİBU.\",\"Essen galvenokārt nozīmē: pārtika vai maltīte.\",\"Bieži raksturo: latenu.\",\"Essen nozīmē ēst.\",\"Das Essen var nozīmēt ēdienu vai maltīti kopumā.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of essen\|idx:690 / study.examples; study.explanation: the row bundles several production values; the snapshot begins '{"study.examples":"[{\"de\":\"Ich esse gern Pizza.\",\"lv\":\"Ech iesse Gär Kiischt.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\…'. For German 'essen' / Latvian 'ēst', OWNER must name the exact subfield and provide its complete Luxembourgish replacement; one row-level owner_new would be ambiguous.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "essen",
  "lv": "Ēst",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "Ēst",
    "explanation": [
      "Haaptidee: Verb — Iesswaaren iessen.",
      "Iessen galvenokārt nozīmē: patērēt pārtiku.",
      "Bieži raksturo: DARBİBU.",
      "Essen galvenokārt nozīmē: pārtika vai maltīte.",
      "Bieži raksturo: latenu.",
      "Essen nozīmē ēst.",
      "Das Essen var nozīmēt ēdienu vai maltīti kopumā."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Ech iesse Gär Kiischt."
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
      "essen = iessen",
      "Benotzt essen, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "essen ass en Verb ouni Artikel.",
      "das Essen ass net d'selwecht wéi essen.",
      "Aktioun: essen.",
      "Saach/Maz: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "essen",
          "essen"
        ],
        "purple": [
          "ēst"
        ],
        "blue": [
          "essen",
          "esse"
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
          "lv": {
            "purple": [
              "Wat"
            ]
          }
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
        {
          "purple": [
            "ēst"
          ]
        }
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

## Finding 34

**Audit ID:** `LRB069-0034`
**Finding Stable ID:** `g2/a1/lb|Essen|idx:691|study.examples|CORRUPTED_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0001`
**Lang:** lb
**Card:** `Essen|idx:691`
**Field / path:** `study.examples`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** CONTENT_CORRUPTION_OR_UNRELATED
**Raw category:** CORRUPTED_TRANSLATION
**LV source (read-only):** [{"de":"Das Essen schmeckt gut.","lv":"Ēdiens garšo labi."},{"de":"Was wollt ihr essen?","lv":"ko jūs gribat ēst?"},{"de":"Wir essen um 12 Uhr.","lv":"mēs ēdam pulksten 12."},{"de":"Das Essen ist fertig.","lv":"ēdiens ir gatavs."},{"de":"Das Essen schmeckt sehr gut.","lv":"ēdiens ļoti labi garšo."},{"de":"Das Essen schmeckt gut.","lv":"ēdiens garšo labi."}]
**DE reference (read-only):** Essen
**CURRENT (captured scope):** [{"de":"Das Essen schmeckt gut.","lv":"Ēdiens garšo labi."},{"de":"Was wollt ihr essen?","lv":"Wat wil je eten"},{"de":"Wir essen um 12 Uhr.","lv":"Mēs ēdam pulksten 12."},{"de":"Das Essen ist fertig.","lv":"Ēdiens ir gatavs."},{"de":"Das Essen schmeckt sehr gut.","lv":"Dat ass dat „wir\"., Hier waren wir nie! '"},{"de":"Das Essen schmeckt gut.","lv":"Ēdiens garšo labi."}]
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Essen\|idx:691 / study.examples: exact Luxembourgish wording for German 'Essen' (Latvian '[{"de":"Das Essen schmeckt gut.","lv":"Ēdiens garšo labi."},{"de":"Was wollt ih…') is not established by the supplied evidence; production currently has '[{"de":"Das Essen schmeckt gut.","lv":"Ēdiens garšo labi."},{"de":"Was wollt ihr essen?","lv":"Wat wil je eten"},{"de":"Wir essen…' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** OTHER_OWNER_REVIEW_REQUIRED
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

## Finding 35

**Audit ID:** `LRB069-0035`
**Finding Stable ID:** `g2/a1/lb|Gemüse|idx:692|study.examples|CORRUPTED_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0002`
**Lang:** lb
**Card:** `Gemüse|idx:692`
**Field / path:** `study.examples`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** CONTENT_CORRUPTION_OR_UNRELATED
**Raw category:** CORRUPTED_TRANSLATION
**LV source (read-only):** [{"de":"Ich esse gern Gemüse.","lv":"Es labprāt ēdu dārzeņus."},{"de":"Ich esse gern Gemüse.","lv":"es labprāt ēdu dārzeņus."},{"de":"Das Gemüse ist frisch.","lv":"dārzeņi ir svaigi."},{"de":"Wir kaufen Gemüse auf dem Markt.","lv":"mēs pērkam dārzeņus tirgū."},{"de":"Ich mag Obst und Gemüse.","lv":"man patīk augļi un dārzeņi."},{"de":"Ich esse Gemüse.","lv":"Es ēdu dārzeņus."}]
**DE reference (read-only):** Gemüse
**CURRENT (captured scope):** [{"de":"Ich esse gern Gemüse.","lv":"Ech iesse gär Geméis."},{"de":"Ich esse gern Gemüse.","lv":"Ech iesse gär Geméis."},{"de":"Das Gemüse ist frisch.","lv":"Dat ass dat „wir\"., Hier waren wir nie! '"},{"de":"Wir kaufen Gemüse auf dem Markt.","lv":"Mēs pērkam dārzeņus tirgū."},{"de":"Ich mag Obst und Gemüse.","lv":"Mann patīk augṅi un dārzeʁi."},{"de":"Ich esse Gemüse.","lv":"Ech iessen Geméis."}]
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Gemüse\|idx:692 / study.examples: exact Luxembourgish wording for German 'Gemüse' (Latvian '[{"de":"Ich esse gern Gemüse.","lv":"Es labprāt ēdu dārzeņus."},{"de":"Ich esse…') is not established by the supplied evidence; production currently has '[{"de":"Ich esse gern Gemüse.","lv":"Ech iesse gär Geméis."},{"de":"Ich esse gern Gemüse.","lv":"Ech iesse gär Geméis."},{"de":"D…' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** OTHER_OWNER_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Gemüse",
  "de_article": "das",
  "lv": "Dārzeņi",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "Dārzeņi",
    "explanation": [
      "Galvenā doma: Dārzeṇi kopumā. Vācu valodā nav daudzskaitệa formas *d'Geméis.",
      "Das Gemüse galvenokārt nozīmē: dārzeņi kopumā.",
      "Dacks charakteriséiert: bei kengem Geschlecht (nëmmen Eenzahl)."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Ech iesse gär Geméis."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Ech iesse gär Geméis."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir kaufen Gemüse auf dem Markt.",
        "lv": "Mēs pērkam dārzeņus tirgū."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Mann patīk augṅi un dārzeʁi."
      },
      {
        "de": "Ich esse Gemüse.",
        "lv": "Ech iessen Geméis."
      }
    ],
    "tip": [
      "das Gemüse = Geméis",
      "Benotzt das Gemüse, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "Net richteg: die Gemüse, die Obsts.",
      "Falsch: die Gemüse → Richteg: das Gemüse",
      "das Gemüse = Geméis (insgesamt)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Gemüse",
          "gemüse"
        ],
        "purple": [
          "dārzeņi"
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
          "lv": {
            "purple": [
              "dārzeņu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
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
              "das Gemüse",
              "gemüse"
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
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "dārzeņu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "dārzeʁi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "dārzeņu"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "dārzeņi"
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

## Finding 36

**Audit ID:** `LRB069-0036`
**Finding Stable ID:** `g2/a1/lb|Obst|idx:693|lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0003`
**Lang:** lb
**Card:** `Obst|idx:693`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** augļi
**DE reference (read-only):** Obst
**CURRENT (captured scope):** Uebst
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Obst\|idx:693 / lv: exact Luxembourgish wording for German 'Obst' (Latvian 'augļi') is not established by the supplied evidence; production currently has 'Uebst' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** SEMANTIC_MEANING_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "Uebst",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "Uebst",
    "explanation": [
      "Galvenā doma: Augṅi kopumā. Vācu valodā nav daudzskaitṇa formas *d'Fruucht.",
      "D'Fruucht galvenokārt nozīmē: augṅi kopumā.",
      "Dacks karakteriséiert: net a enger Geschlechtsform (nëmmen Eenzahl)."
    ],
    "examples": [
      {
        "de": "Wir essen viel Obst.",
        "lv": "Mēs ēdam daudz augļu."
      },
      {
        "de": "Wir essen viel Obst.",
        "lv": "Mēs ēdam daudz augļu."
      },
      {
        "de": "Obst ist gesund.",
        "lv": "Augļi ir veselīgi."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Mann patīk augṅi un dārzeʁi."
      },
      {
        "de": "Wir essen Obst.",
        "lv": "Mir iessen Flecht."
      }
    ],
    "tip": [
      "das Obst = Flecht",
      "Benotz das Obst, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "Falsch: die Obsts → Richteg: das Obst",
      "das Obst = Flecht (uewerall)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "Galvenā",
          "Galvenā"
        ],
        "purple": [
          "Augṅi"
        ],
        "yellow": [
          "Galvenā"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "augļu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "augļu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "augļi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "augṅi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "augļu"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "augļi"
          ]
        }
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

## Finding 37

**Audit ID:** `LRB069-0037`
**Finding Stable ID:** `g2/a1/lb|Ferien|idx:694|study.comparison|CORRUPTED_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0004`
**Lang:** lb
**Card:** `Ferien|idx:694`
**Field / path:** `study.comparison`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** CONTENT_CORRUPTION_OR_UNRELATED
**Raw category:** CORRUPTED_TRANSLATION
**LV source (read-only):** [{"word":"die Ferien","meaning":"skolas/studiju brīvlaiks (tikai dsk.)","example":"In den Ferien fahren wir weg. – Brīvdienās mēs braucam kaut kur."},{"word":"der Urlaub","meaning":"atvaļinājums no darba (tikai vsk.)","example":"Ich habe zwei Wochen Urlaub. – Man ir divas nedēļas atvaļinājuma."}]
**DE reference (read-only):** Ferien
**CURRENT (captured scope):** [{"word":"die Ferien","meaning":"Skolas/studiju brīvlaiks (tikai dsk.)","example":"In den Ferien fahren wir weg. – An de Vakanze fueren mir fort."},{"word":"der Urlaub","meaning":"Atvaļinājums no darba (tikai vsk.)","example":"Ich habe zwei Wochen Urlaub. – Deemno ass et wichteg ze wëssen, wéi et ausgesäit."}]
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Ferien\|idx:694 / study.comparison: exact Luxembourgish wording for German 'Ferien' (Latvian '[{"word":"die Ferien","meaning":"skolas/studiju brīvlaiks (tikai dsk.)","exampl…') is not established by the supplied evidence; production currently has '[{"word":"die Ferien","meaning":"Skolas/studiju brīvlaiks (tikai dsk.)","example":"In den Ferien fahren wir weg. – An de Vakanze …' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** OTHER_OWNER_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "Brīvdienas (skola)",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "Brīvdienas (skola)",
    "explanation": [
      "Haaptidee: nëmmen Mehrzahl. Schoul oder Studium Frëtzäit — ëmmer Mehrzahl.",
      "D'Feierdeeg galvenokārt nozīmē: skolas brīvlaiiks.",
      "Dacks charakteriséiert: nëmmen Mehrzahl.",
      "Die Ferien ir tikai daudzskaitlis — vienmēr daudzskaitlī (in den Ferien)."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Brīvdienās mēs braucam pie jūras."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "Brīvdienās man ir daudz laika."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Ko jūs darāt brīvdienās?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Skola brīvdienās ir slēgta."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Brīvdienās mēs braucam pie jūras."
      },
      {
        "de": "In den Ferien",
        "lv": "Brīvdienās (skola)."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "Skolas/studiju brīvlaiks (tikai dsk.)",
        "example": "In den Ferien fahren wir weg. – An de Vakanze fueren mir fort."
      },
      {
        "word": "der Urlaub",
        "meaning": "Atvaļinājums no darba (tikai vsk.)",
        "example": "Ich habe zwei Wochen Urlaub. – Deemno ass et wichteg ze wëssen, wéi et ausgesäit."
      }
    ],
    "tip": [
      "nëmmen Mehrzahl. Schoul oder Studium Frëtzäit — ëmmer Mehrzahl.",
      "Benotzt die Ferien, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "Ferien ëmmer mat Dativ: in den Ferien.",
      "Falsch: in der Ferien → Richteg: in den Ferien",
      "Schoul: die Ferien (nëmmen Mehrzahl).",
      "nëmmen Mehrzahl. Schoul oder Studium Frëtzäit — ëmmer Mehrzahl."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Ferien",
          "ferien"
        ],
        "purple": [
          "skola"
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
          "lv": {
            "purple": [
              "brīvdienas (skola)"
            ]
          }
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

**Audit ID:** `LRB069-0038`
**Finding Stable ID:** `g2/a1/lb|Urlaub|idx:695|study.examples|CORRUPTED_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0005`
**Lang:** lb
**Card:** `Urlaub|idx:695`
**Field / path:** `study.examples`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** CONTENT_CORRUPTION_OR_UNRELATED
**Raw category:** CORRUPTED_TRANSLATION
**LV source (read-only):** [{"de":"Mein Vater ist im Urlaub.","lv":"Mans tēvs ir atvaļinājumā."},{"de":"Mein Vater ist im Urlaub.","lv":"mans tēvs ir atvaļinājumā."},{"de":"Nächste Woche habe ich Urlaub.","lv":"nākamnedēļ man ir atvaļinājums."},{"de":"Wir machen Urlaub in Spanien.","lv":"mēs pavadām atvaļinājumu Spānijā."},{"de":"im Urlaub","lv":"atvaļinājumā (darbs)."}]
**DE reference (read-only):** Urlaub
**CURRENT (captured scope):** [{"de":"Mein Vater ist im Urlaub.","lv":"Mënsche tēvs ər ər ər ər ər."},{"de":"Mein Vater ist im Urlaub.","lv":"Mënsche tēvs ər ər ər ər ər."},{"de":"Nächste Woche habe ich Urlaub.","lv":"Nākamnedēļ man ir atvaļinājums."},{"de":"Wir machen Urlaub in Spanien.","lv":"Произношение на просмотреть онлайн"},{"de":"im Urlaub","lv":"Atvaļinājumā (darbs)."}]
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Urlaub\|idx:695 / study.examples: exact Luxembourgish wording for German 'Urlaub' (Latvian '[{"de":"Mein Vater ist im Urlaub.","lv":"Mans tēvs ir atvaļinājumā."},{"de":"Me…') is not established by the supplied evidence; production currently has '[{"de":"Mein Vater ist im Urlaub.","lv":"Mënsche tēvs ər ər ər ər ər."},{"de":"Mein Vater ist im Urlaub.","lv":"Mënsche tēvs ər ə…' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** OTHER_OWNER_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "Atvaļinājums",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "Atvaļinājums",
    "explanation": [
      "Haaptsaach: just Eenzahl. Aarbechtsferien — ëmmer an der Eenzahl.",
      "Der Urlaub galvenokārt nozīmē: brīvais laiks no darba.",
      "Dacks charakteriséiert duerch: eenzegaarteg.",
      "Der Urlaub ir tikai vienskaitlis — atvaļinājums no darba (im Urlaub)."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Mënsche tēvs ər ər ər ər ər."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Mënsche tēvs ər ər ər ər ər."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Nākamnedēļ man ir atvaļinājums."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Произношение на просмотреть онлайн"
      },
      {
        "de": "im Urlaub",
        "lv": "Atvaļinājumā (darbs)."
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "Atvaļinājums no darba (tikai vsk.)",
        "example": "Mein Vater ist im Urlaub. – Mënsche tēvs ər ər ər ər ər."
      },
      {
        "word": "die Ferien",
        "meaning": "Skolas/studiju brīvlaiks (tikai dsk.)",
        "example": "Die Kinder haben Ferien. – Déi Kanner hunn Ferien."
      }
    ],
    "tip": [
      "just Eenzahl. Aarbechtsferien — ëmmer an der Eenzahl.",
      "Benotz der Urlaub, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "Net richteg: die Ferie, der Urlaube (A1-Niveau).",
      "Urlaub: im Urlaub sein / Urlaub machen.",
      "Falsch: die Urlaube → Richteg: der Urlaub",
      "Aarbecht: der Urlaub (just Eenzahl)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "der Urlaub",
          "urlaub"
        ],
        "purple": [
          "atvaļinājums"
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
          "lv": {
            "purple": [
              "Mënsche"
            ]
          }
        },
        {
          "de": {
            "green": [
              "urlaub"
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
            "green": [
              "urlaub"
            ]
          },
          "lv": {
            "purple": [
              "atvaļinājums"
            ]
          }
        },
        {
          "de": {
            "green": [
              "urlaub"
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
            "green": [
              "urlaub"
            ]
          },
          "lv": {
            "purple": [
              "atvaļinājumā"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "atvaļinājums"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "der Urlaub"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 39

**Audit ID:** `LRB069-0039`
**Finding Stable ID:** `g2/a1/lb|Stadt|idx:696|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0008`
**Lang:** lb
**Card:** `Stadt|idx:696`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** pilsēta
**DE reference (read-only):** Stadt
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Stadt\|idx:696 / lv: exact Luxembourgish wording for German 'Stadt' (Latvian 'pilsēta') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Stadt",
  "de_article": "die",
  "de_plural": "die Städte",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 40

**Audit ID:** `LRB069-0040`
**Finding Stable ID:** `g2/a1/lb|Staat|idx:697|lv|MISSING_TRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0009`
**Lang:** lb
**Card:** `Staat|idx:697`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**Raw category:** MISSING_TRANSLATION
**LV source (read-only):** valsts
**DE reference (read-only):** Staat
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Staat\|idx:697 / lv: exact Luxembourgish wording for German 'Staat' (Latvian 'valsts') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MISSING_TRANSLATION_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Staat",
  "de_article": "der",
  "de_plural": "die Staaten",
  "lv": "CAA -",
  "level": "A1"
}
```

---

## Finding 41

**Audit ID:** `LRB069-0041`
**Finding Stable ID:** `g2/a1/lb|Uhr|idx:698|lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0001`
**Lang:** lb
**Card:** `Uhr|idx:698`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** Pulsufuerderung
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Uhr\|idx:698 / lv: exact Luxembourgish wording for German 'Uhr' (Latvian 'pulkstenis') is not established by the supplied evidence; production currently has 'Pulsufuerderung' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** SEMANTIC_MEANING_REVIEW_REQUIRED
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

## Finding 42

**Audit ID:** `LRB069-0042`
**Finding Stable ID:** `g2/a1/lb|Zeit|idx:699|lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0002`
**Lang:** lb
**Card:** `Zeit|idx:699`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** laiks (brīdis / laika posms)
**DE reference (read-only):** Zeit
**CURRENT (captured scope):** Larch (brīdis / laika posms)
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of Zeit\|idx:699 / lv: exact Luxembourgish wording for German 'Zeit' (Latvian 'laiks (brīdis / laika posms)') is not established by the supplied evidence; production currently has 'Larch (brīdis / laika posms)' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** SEMANTIC_MEANING_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zeit",
  "de_article": "die",
  "de_plural": "die Zeiten",
  "lv": "Larch (brīdis / laika posms)",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "Larch (brīdis / laika posms)",
    "explanation": [
      "Haaptsaach: Zäit wéi e Konzept — en Moment, eng Geleeënheet, eng Zäit-Period.",
      "Die Zeit galvenokārt nozīmē: brīdis, iespēja.",
      "Dacks charakteriseiert: abstrakt Konzept.",
      "Die Zeit ir abstrakts jēdziens — laiks, brīdis vai iespēja (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "MAN NAV VILA."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "MAN NAV VILA."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "¿Queréis ir queréis?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Zäit vergeet schnell."
      }
    ],
    "tip": [
      "Zäit wéi e Konzept — en Moment, eng Geleeënheet, eng Zäit-Period.",
      "Benotz die Zeit, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "die Zeit: préift de Kontext virun der Notze.",
      "die Zeit: préift de Kontext virun der Notze."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "die Zeit",
          "zeit"
        ],
        "purple": [
          "laiks"
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
          "lv": {
            "purple": [
              "MAN"
            ]
          }
        },
        {
          "de": {
            "green": [
              "zeit"
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
            "green": [
              "zeit"
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
              "die Zeit",
              "zeit"
            ]
          },
          "lv": {
            "purple": [
              "Zäit"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "laiks"
          ]
        }
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

## Finding 43

**Audit ID:** `LRB069-0043`
**Finding Stable ID:** `g2/a1/lb|einmal|idx:700|study.examples.lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0003`
**Lang:** lb
**Card:** `einmal|idx:700`
**Field / path:** `study.examples.lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** vienreiz • reiz
**DE reference (read-only):** einmal
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of einmal\|idx:700 / study.examples.lv: that exact field is absent from the mapped card; the available snapshot begins ''. For German 'einmal' / Latvian 'vienreiz • reiz', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
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

## Finding 44

**Audit ID:** `LRB069-0044`
**Finding Stable ID:** `g2/a1/lb|noch mal|idx:701|lv|PLACEHOLDER|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-LB-L0004`
**Lang:** lb
**Card:** `noch mal|idx:701`
**Field / path:** `lv`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** HIGH
**Category:** FORMAT_PLACEHOLDER_OR_ENCODING
**Raw category:** PLACEHOLDER
**LV source (read-only):** vēlreiz
**DE reference (read-only):** noch mal
**CURRENT (captured scope):** CAA -
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of noch mal\|idx:701 / lv: exact Luxembourgish wording for German 'noch mal' (Latvian 'vēlreiz') is not established by the supplied evidence; production currently has 'CAA -' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** OTHER_OWNER_REVIEW_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "noch mal",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-noch-mal",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptidee: Bedeit nach emol — Aktioun widerhueelen oder Widderhuelegung froen."
    ],
    "examples": [
      {
        "de": "Noch mal, bitte.",
        "lv": "Vēlreiz, lūdzu."
      },
      {
        "de": "Noch mal, bitte.",
        "lv": "Vēlreiz, lūdzu."
      },
      {
        "de": "Sag das noch mal.",
        "lv": "Pasaki to vēlreiz."
      }
    ],
    "tip": [
      "Benotz noch mal, wann de Kontext dëser Bedeitong entsprécht.",
      "Benotz noch mal, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "Bedeit nach emol — Aktioun widerhueelen oder Widderhuelegung froen.",
      "noch mal: iwwerpréif de Kontext virun der Notzong."
    ],
    "sectionAccents": {
      "explanation": {
        "purple": [
          "vēlreiz"
        ]
      },
      "examples": [
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {
            "purple": [
              "vēlreiz"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {
            "purple": [
              "vēlreiz"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {
            "purple": [
              "vēlreiz"
            ]
          }
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

