# G2/A1 LRB LRB-092 — OWNER VIEW

**Batch:** LRB-092
**Rows:** 50/50
**Languages:** SK 50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T09:40:54.104Z
**Source commit:** `fc8a099e22bbab23d0aaf4a34faa70444a499b2a`
**Branch:** `cursor/lrb-092-owner-authorization-ed35`
**Overrides SHA256:** `ac474c64eb79afccbb83a0e06653fd38af8f0e23927bd322c446f58c477deb5d`
**Classification:** `G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED`

> OWNER-approved overrides applied (copy/paste). Pending independent OWNER/GPT post-review.

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB092-0001`
**Finding Stable ID:** `g2/a1/sk|lesen|idx:369|lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `lesen|idx:369`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Na čítanie"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"čítať"}
**Note:** Infinitívna heslová forma; pôvodné „Na čítanie“ bolo účelové spojenie.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lesen",
  "lv": "čítať",
  "level": "A1"
}
```

---

## Finding 2

**Audit ID:** `LRB092-0002`
**Finding Stable ID:** `g2/a1/sk|lieb|idx:373|lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `lieb|idx:373`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Vážení"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"milý"}
**Note:** Pôvodné „Vážení“ bolo oslovenie v množnom čísle, nie význam prídavného mena lieb.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lieb",
  "lv": "milý",
  "level": "A1"
}
```

---

## Finding 3

**Audit ID:** `LRB092-0003`
**Finding Stable ID:** `g2/a1/sk|lieben|idx:375|lv|PART_OF_SPEECH|gpt-5.6-luna`
**Lang:** sk
**Card:** `lieben|idx:375`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** GRAMMAR_MORPHOLOGY_OR_FORM
**CURRENT (captured scope):** {"lv":"Láska"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"milovať"}
**Note:** Infinitívna heslová forma; pôvodné podstatné meno „Láska“ menilo slovný druh.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lieben",
  "lv": "milovať",
  "level": "A1"
}
```

---

## Finding 4

**Audit ID:** `LRB092-0004`
**Finding Stable ID:** `g2/a1/sk|liegen|idx:377|translation; study.explanation; study.examples; study.tip; study.sectionAccents|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `liegen|idx:377`
**Field / path:** `translation; study.explanation; study.examples; study.tip; study.sectionAccents`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":["Hlavná myšlienka: Liegen znamená ležať alebo ležať vodorovne.","Pre ľudí klamstvo často znamená spánok.","Liegen v istom zmysle znamená, že je niekde vonku.","Je to iné ako legen, čo znamená odložiť niečo bokom."],"study.examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Kniha je na stole."},{"de":"Mein Handy liegt im Auto.","lv":"Môj telefón je v aute."},{"de":"Er liegt im Bett.","lv":"Spí v posteli."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Knihu som položil na stôl."}],"study.tip":{"text":"Pamätajte: vec je už na svojom mieste → Liegen • Odložíte → legen."},"study.sectionAccents":{"explanation":{"blue":["liegen","legen"],"yellow":["Liegen"]},"examples":[{"de":{"blue":["liegt"],"yellow":["Buch","Tisch"]},"lv":{}},{"de":{"blue":["liegt"],"yellow":["Handy","Auto"]},"lv":{"yellow":["telefon"]}},{"de":{"blue":["liegt"],"green":["Bett"]},"lv":{}},{"de":{"red":["lege"],"yellow":["Buch","Tisch"]},"lv":{}}],"comparison":[{"word":{"green":["liegen"]},"meaning":{},"example":{}},{"word":{"green":["legen"]},"meaning":{},"example":{"red":["lege"]}},{"word":{"green":["stehen"]},"meaning":{"purple":["Stojan"]},"example":{"yellow":["steht"]}},{"word":{"green":["sein"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["liegen"],"purple":["Pamätajte"],"red":["legen"]}},"important":[{"blue":["liegen"],"purple":["Liegen"]},{"red":["legen"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ležať • nachádzať sa","study":{"id":"a1-liegen","layout":"standardStudy","translation":"ležať • nachádzať sa","explanation":["Hlavná myšlienka: liegen znamená ležať alebo nachádzať sa vo vodorovnej polohe.","Pri človeku liegen často opisuje, že leží.","Pri veci liegen vyjadruje, že sa niekde nachádza.","Liegen treba odlíšiť od legen, ktoré znamená niečo položiť."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Kniha leží na stole."},{"de":"Mein Handy liegt im Auto.","lv":"Môj telefón leží v aute."},{"de":"Er liegt im Bett.","lv":"On leží v posteli."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Položím knihu na stôl."}],"comparison":[{"word":"liegen","meaning":"ležať • nachádzať sa","example":"Das Buch liegt hier. — Kniha leží tu."},{"word":"legen","meaning":"položiť","example":"Ich lege das Buch hierhin. — Položím knihu sem."},{"word":"stehen","meaning":"stáť • byť postavený","example":"Die Flasche steht auf dem Tisch. — Fľaša stojí na stole."},{"word":"sein","meaning":"byť","example":"Ich bin hier. — Som tu."}],"tip":{"text":"Vec už je na mieste → liegen; niekto ju na miesto položí → legen."},"important":["liegen vyjadruje polohu alebo miesto.","legen vyjadruje dej: niekto niečo položí."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Pôvodná karta miešala cudzie jazyky a významy; nahradená je celá karta v slovenčine podľa DE/LV štruktúry.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "ležať • nachádzať sa",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "ležať • nachádzať sa",
    "explanation": [
      "Hlavná myšlienka: liegen znamená ležať alebo nachádzať sa vo vodorovnej polohe.",
      "Pri človeku liegen často opisuje, že leží.",
      "Pri veci liegen vyjadruje, že sa niekde nachádza.",
      "Liegen treba odlíšiť od legen, ktoré znamená niečo položiť."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kniha leží na stole."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Môj telefón leží v aute."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "On leží v posteli."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Položím knihu na stôl."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "ležať • nachádzať sa",
        "example": "Das Buch liegt hier. — Kniha leží tu."
      },
      {
        "word": "legen",
        "meaning": "položiť",
        "example": "Ich lege das Buch hierhin. — Položím knihu sem."
      },
      {
        "word": "stehen",
        "meaning": "stáť • byť postavený",
        "example": "Die Flasche steht auf dem Tisch. — Fľaša stojí na stole."
      },
      {
        "word": "sein",
        "meaning": "byť",
        "example": "Ich bin hier. — Som tu."
      }
    ],
    "tip": {
      "text": "Vec už je na mieste → liegen; niekto ju na miesto položí → legen."
    },
    "important": [
      "liegen vyjadruje polohu alebo miesto.",
      "legen vyjadruje dej: niekto niečo položí."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB092-0005`
**Finding Stable ID:** `g2/a1/sk|Lineal|idx:379|lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `Lineal|idx:379`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Linka"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"pravítko"}
**Note:** Presný slovenský názov školského predmetu Lineal.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Lineal",
  "de_article": "das",
  "de_plural": "die Lineale",
  "lv": "pravítko",
  "level": "A1"
}
```

---

## Finding 6

**Audit ID:** `LRB092-0006`
**Finding Stable ID:** `g2/a1/sk|links|a1.card.links.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `links`
**Field / path:** `a1.card.links.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vľavo • Vľavo
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vľavo • ľavý"}
**Note:** Doplnené obe zdrojové funkcie: príslovka smeru aj prídavné meno.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "links",
  "lv": "vľavo • ľavý",
  "level": "A1"
}
```

---

## Finding 7

**Audit ID:** `LRB092-0007`
**Finding Stable ID:** `g2/a1/sk|links|idx:380|lv|DUPLICATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `links|idx:380`
**Field / path:** `lv`
**Severity:** LOW
**Category:** DUPLICATION
**CURRENT (captured scope):** {"lv":"Vľavo • Vľavo"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vľavo • ľavý"}
**Note:** Doplnené obe zdrojové funkcie: príslovka smeru aj prídavné meno.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "links",
  "lv": "vľavo • ľavý",
  "level": "A1"
}
```

---

## Finding 8

**Audit ID:** `LRB092-0008`
**Finding Stable ID:** `g2/a1/sk|Liter|idx:382|study.explanation; study.sectionAccents|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `Liter|idx:382`
**Field / path:** `study.explanation; study.sectionAccents`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"V Nemecku sa zvyčajne hovorí „der Liter“, ale v Rakúsku a Švajčiarsku môžete počuť aj „das Liter“. Množné číslo zostáva nezmenené: „die Liter“.","study.sectionAccents":{"explanation":{"green":["der Liter"],"blue":["das Liter"],"purple":["die Liter"]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"liter","study":{"id":"a1-liter","layout":"standardStudy","translation":"liter","explanation":"V Nemecku sa zvyčajne používa „der Liter“, v Rakúsku a Švajčiarsku možno počuť aj „das Liter“. Množné číslo zostáva nezmenené: „die Liter“.","sectionAccents":{}}}
**Note:** Normalizovaná slovenská heslová forma a preložené celé vysvetlenie.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Liter",
  "de_article": "der",
  "de_plural": "die Liter",
  "lv": "liter",
  "level": "A1",
  "study": {
    "id": "a1-liter",
    "layout": "standardStudy",
    "translation": "liter",
    "explanation": "V Nemecku sa zvyčajne používa „der Liter“, v Rakúsku a Švajčiarsku možno počuť aj „das Liter“. Množné číslo zostáva nezmenené: „die Liter“.",
    "sectionAccents": {}
  }
}
```

---

## Finding 9

**Audit ID:** `LRB092-0009`
**Finding Stable ID:** `g2/a1/sk|lustig|idx:385|lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `lustig|idx:385`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Hra"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"veselý"}
**Note:** Presný jednoslovný ekvivalent zdrojového „jautrs“; pôvodný tvar bol nesprávny.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lustig",
  "lv": "veselý",
  "level": "A1"
}
```

---

## Finding 10

**Audit ID:** `LRB092-0010`
**Finding Stable ID:** `g2/a1/sk|machen|idx:386|translation; study.tip; study.sectionAccents|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `machen|idx:386`
**Field / path:** `translation; study.tip; study.sectionAccents`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.tip":{"text":"Atceries: Bol machst du? = Kto sa sem darí?"},"study.sectionAccents":{"explanation":{"blue":["machen"]},"examples":[{"de":{"blue":["machst"]},"lv":{}},{"de":{"blue":["mache"],"yellow":["Hausaufgaben"]},"lv":{}},{"de":{"blue":["machen"],"yellow":["Pizza"]},"lv":{}},{"de":{"blue":["macht Spaß"]},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{"blue":["Atceries"],"purple":["Atceries"]}},"important":[{"blue":["machen"]},{"blue":["Das macht Spaß"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"robiť • spraviť","study":{"id":"a1-machen","layout":"standardStudy","translation":"robiť • spraviť","explanation":["Hlavná myšlienka: machen je veľmi časté sloveso s významom robiť alebo spraviť.","Pri všeobecnej činnosti sa zvyčajne prekladá ako robiť.","Pri vytvorení alebo príprave niečoho často znamená spraviť alebo pripraviť.","V ustálených spojeniach sa prekladá prirodzene podľa kontextu, nie doslovne."],"examples":[{"de":"Was machst du?","lv":"Čo robíš?"},{"de":"Ich mache Hausaufgaben.","lv":"Robím si domáce úlohy."},{"de":"Wir machen Pizza.","lv":"Pripravujeme pizzu."},{"de":"Das macht Spaß.","lv":"Je to zábava."}],"tip":{"text":"Was machst du? = Čo robíš?"},"important":["machen má široký význam a treba ho preložiť podľa situácie.","Das macht Spaß znamená „Je to zábava“, nie doslovný preklad jednotlivých slov."],"sectionAccents":{"examples":[{},{},{},{}]}}}
**Note:** Doplnená celá slovenská karta; Luna menila iba časť študijného objektu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "robiť • spraviť",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "robiť • spraviť",
    "explanation": [
      "Hlavná myšlienka: machen je veľmi časté sloveso s významom robiť alebo spraviť.",
      "Pri všeobecnej činnosti sa zvyčajne prekladá ako robiť.",
      "Pri vytvorení alebo príprave niečoho často znamená spraviť alebo pripraviť.",
      "V ustálených spojeniach sa prekladá prirodzene podľa kontextu, nie doslovne."
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
        "lv": "Pripravujeme pizzu."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Je to zábava."
      }
    ],
    "tip": {
      "text": "Was machst du? = Čo robíš?"
    },
    "important": [
      "machen má široký význam a treba ho preložiť podľa situácie.",
      "Das macht Spaß znamená „Je to zábava“, nie doslovný preklad jednotlivých slov."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB092-0011`
**Finding Stable ID:** `g2/a1/sk|Mai|idx:389|lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `Mai|idx:389`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Sila"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"máj"}
**Note:** Slovenský názov mesiaca v základnom tvare a s malým začiatočným písmenom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mai",
  "de_article": "der",
  "lv": "máj",
  "level": "A1"
}
```

---

## Finding 12

**Audit ID:** `LRB092-0012`
**Finding Stable ID:** `g2/a1/sk|Mal|idx:390|translation; study.tip; study.sectionAccents|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `Mal|idx:390`
**Field / path:** `translation; study.tip; study.sectionAccents`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.tip":{"text":"Pamätajte: das Mal = čas (podstatné meno) • Mal bez člena = hovorová častica."},"study.sectionAccents":{"explanation":{"blue":["das Mal","ein Mal","zwei Mal","das erste Mal"]},"examples":[{"de":{"blue":["erste Mal"]},"lv":{}},{"de":{"blue":["zwei Mal"]},"lv":{}},{"de":{"blue":["Ein Mal"]},"lv":{}},{"de":{"blue":["ein Mal"]},"lv":{}}],"tip":{"blue":["das Mal","mal"],"purple":["Pamätajte","Pamätajte"]},"important":[{"blue":["das Mal","die Male"]},{"blue":["ein Mal","zwei Mal"]},{"blue":["mal"],"purple":["das Mal"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"raz","study":{"id":"a1-mal","layout":"standardStudy","translation":"raz","explanation":["Hlavná myšlienka: das Mal označuje jeden raz alebo prípad.","Často sa používa s číslami: ein Mal, zwei Mal, drei Mal.","S radovou číslovkou: das erste Mal, das zweite Mal.","Nezamieňať s hovorovou časticou mal vo vete Komm mal her!"],"examples":[{"de":"Das erste Mal war schwer.","lv":"Prvý raz to bolo ťažké."},{"de":"Ich war schon zwei Mal in Berlin.","lv":"V Berlíne som už bol dvakrát."},{"de":"Ein Mal reicht.","lv":"Jeden raz stačí."},{"de":"Noch ein Mal, bitte!","lv":"Ešte raz, prosím!"}],"tip":{"text":"das Mal = raz alebo prípad; mal bez člena = hovorová častica."},"important":["das Mal • die Male je podstatné meno s členom.","ein Mal • zwei Mal počíta opakovania.","mal bez člena nie je to isté ako das Mal."],"sectionAccents":{"examples":[{},{},{},{}]}}}
**Note:** Nahradená celá karta; pôvodná obsahovala cudzojazyčné a neúplné polia.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mal",
  "de_article": "das",
  "de_plural": "die Male",
  "lv": "raz",
  "level": "A1",
  "study": {
    "id": "a1-mal",
    "layout": "standardStudy",
    "translation": "raz",
    "explanation": [
      "Hlavná myšlienka: das Mal označuje jeden raz alebo prípad.",
      "Často sa používa s číslami: ein Mal, zwei Mal, drei Mal.",
      "S radovou číslovkou: das erste Mal, das zweite Mal.",
      "Nezamieňať s hovorovou časticou mal vo vete Komm mal her!"
    ],
    "examples": [
      {
        "de": "Das erste Mal war schwer.",
        "lv": "Prvý raz to bolo ťažké."
      },
      {
        "de": "Ich war schon zwei Mal in Berlin.",
        "lv": "V Berlíne som už bol dvakrát."
      },
      {
        "de": "Ein Mal reicht.",
        "lv": "Jeden raz stačí."
      },
      {
        "de": "Noch ein Mal, bitte!",
        "lv": "Ešte raz, prosím!"
      }
    ],
    "tip": {
      "text": "das Mal = raz alebo prípad; mal bez člena = hovorová častica."
    },
    "important": [
      "das Mal • die Male je podstatné meno s členom.",
      "ein Mal • zwei Mal počíta opakovania.",
      "mal bez člena nie je to isté ako das Mal."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 13

**Audit ID:** `LRB092-0013`
**Finding Stable ID:** `g2/a1/sk|malen|a1.card.malen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `malen`
**Field / path:** `a1.card.malen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Maľovať • Maľovať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"maľovať • natierať"}
**Note:** Doplnené oba zdrojové významy slovesa malen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "malen",
  "lv": "maľovať • natierať",
  "level": "A1"
}
```

---

## Finding 14

**Audit ID:** `LRB092-0014`
**Finding Stable ID:** `g2/a1/sk|malen|idx:391|lv|DUPLICATION|gpt-5.6-luna`
**Lang:** sk
**Card:** `malen|idx:391`
**Field / path:** `lv`
**Severity:** LOW
**Category:** DUPLICATION
**CURRENT (captured scope):** {"lv":"Maľovať • Maľovať"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"maľovať • natierať"}
**Note:** Doplnené oba zdrojové významy slovesa malen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "malen",
  "lv": "maľovať • natierať",
  "level": "A1"
}
```

---

## Finding 15

**Audit ID:** `LRB092-0015`
**Finding Stable ID:** `g2/a1/sk|müssen|idx:423|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `müssen|idx:423`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Potreba","study":{"id":"a1-müssen","layout":"standardStudy","translation":"Potreba","explanation":["Hlavná myšlienka: müssen znamená niečo urobiť.","V lotyštine sa müssen často prekladá ako „ja...“, „vy robíte...“, „robíme...“.","V nemeckej vete je druhé sloveso zvyčajne na poslednom mieste.","Na úrovni A1 je najdôležitejšou formou Ich muss..."],"examples":[{"de":"Ich muss gehen.","lv":"Už musím ísť"},{"de":"Du musst warten.","lv":"Musíte počkať."},{"de":"Wir müssen lernen.","lv":"Musíme sa učiť."},{"de":"Ich muss heute arbeiten.","lv":"Dnes musím pracovať"}],"comparison":[{"word":"müssen","meaning":"Musím/musím urobiť","example":"Ich muss gehen."},{"word":"können","meaning":"Môcť/vedieť","example":"Ich kann kommen."},{"word":"wollen","meaning":"Chcem","example":"Ich will nach Hause."},{"word":"dürfen","meaning":"Byť dovolené","example":"Darf ich gehen?"}],"tip":{"text":"Pamätajte si: I must... = musím..."},"important":["Müssen je modálne sloveso.","Druhé sloveso je zvyčajne na konci vety: Ich muss heute arbeiten."],"sectionAccents":{"explanation":{"blue":["müssen","Ich muss"]},"examples":[{"de":{"blue":["muss","gehen"]},"lv":{}},{"de":{"blue":["musst","warten"]},"lv":{}},{"de":{"blue":["müssen","lernen"]},"lv":{}},{"de":{"blue":["muss","arbeiten"]},"lv":{}}],"comparison":[{"word":{"green":["müssen"]},"meaning":{},"example":{"blue":["Muszę"]}},{"word":{"green":["können"]},"meaning":{},"example":{}},{"word":{"green":["wollen"]},"meaning":{},"example":{}},{"word":{"green":["dürfen"]},"meaning":{},"example":{"red":["Darf"]}}],"tip":{"left":{"blue":["Pamätajte"]}},"important":[{"blue":["müssen"],"purple":["Müssen"]},{"blue":["muss","arbeiten"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"musieť","study":{"id":"a1-müssen","layout":"standardStudy","translation":"musieť","explanation":["Hlavná myšlienka: müssen vyjadruje povinnosť alebo nutnosť niečo urobiť.","Po slovensky sa často vyjadruje tvarmi musím, musíš alebo musíme.","V nemčine stojí druhé sloveso spravidla na konci vety.","Na úrovni A1 je základná forma Ich muss... = Musím..."],"examples":[{"de":"Ich muss gehen.","lv":"Musím ísť."},{"de":"Du musst warten.","lv":"Musíš čakať."},{"de":"Wir müssen lernen.","lv":"Musíme sa učiť."},{"de":"Ich muss heute arbeiten.","lv":"Dnes musím pracovať."}],"comparison":[{"word":"müssen","meaning":"musieť","example":"Ich muss gehen. — Musím ísť."},{"word":"können","meaning":"môcť • vedieť","example":"Ich kann kommen. — Môžem prísť."},{"word":"wollen","meaning":"chcieť","example":"Ich will nach Hause. — Chcem ísť domov."},{"word":"dürfen","meaning":"smieť","example":"Darf ich gehen? — Smiem odísť?"}],"tip":{"text":"Ich muss... = Musím..."},"important":["müssen je modálne sloveso.","Druhé sloveso zvyčajne stojí na konci: Ich muss heute arbeiten."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Kompletná karta opravená; odstránený anglický zvyšok a lomkové hodnoty.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "müssen",
  "lv": "musieť",
  "level": "A1",
  "study": {
    "id": "a1-müssen",
    "layout": "standardStudy",
    "translation": "musieť",
    "explanation": [
      "Hlavná myšlienka: müssen vyjadruje povinnosť alebo nutnosť niečo urobiť.",
      "Po slovensky sa často vyjadruje tvarmi musím, musíš alebo musíme.",
      "V nemčine stojí druhé sloveso spravidla na konci vety.",
      "Na úrovni A1 je základná forma Ich muss... = Musím..."
    ],
    "examples": [
      {
        "de": "Ich muss gehen.",
        "lv": "Musím ísť."
      },
      {
        "de": "Du musst warten.",
        "lv": "Musíš čakať."
      },
      {
        "de": "Wir müssen lernen.",
        "lv": "Musíme sa učiť."
      },
      {
        "de": "Ich muss heute arbeiten.",
        "lv": "Dnes musím pracovať."
      }
    ],
    "comparison": [
      {
        "word": "müssen",
        "meaning": "musieť",
        "example": "Ich muss gehen. — Musím ísť."
      },
      {
        "word": "können",
        "meaning": "môcť • vedieť",
        "example": "Ich kann kommen. — Môžem prísť."
      },
      {
        "word": "wollen",
        "meaning": "chcieť",
        "example": "Ich will nach Hause. — Chcem ísť domov."
      },
      {
        "word": "dürfen",
        "meaning": "smieť",
        "example": "Darf ich gehen? — Smiem odísť?"
      }
    ],
    "tip": {
      "text": "Ich muss... = Musím..."
    },
    "important": [
      "müssen je modálne sloveso.",
      "Druhé sloveso zvyčajne stojí na konci: Ich muss heute arbeiten."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 16

**Audit ID:** `LRB092-0016`
**Finding Stable ID:** `g2/a1/sk|nach|idx:426|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `nach|idx:426`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Do • Potom","study":{"id":"a1-nach","layout":"standardStudy","translation":"Do • Potom","explanation":["Hlavná myšlienka: nach znamená s miestami a po čase alebo sekvencii.","Pre mestá a krajiny bez článku nach to často znamená toto.","Postupom času nach znamená po.","Vo fráze nach Hause znamená domov."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Idem do Berlína."},{"de":"Wir gehen nach Hause.","lv":"Ideme domov."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."},{"de":"Es ist zehn nach acht.","lv":"Je desať osem."}],"comparison":[{"word":"nach","meaning":"Do/po","example":"Ich fahre nach Berlin."},{"word":"zu","meaning":"Do/o hod","example":"Ich gehe zum Arzt."},{"word":"in","meaning":"V / na miesto s článkom","example":"Ich gehe in die Schule."},{"word":"vor","meaning":"Pred/predtým","example":"Vor dem Essen wasche ich die Hände."}],"tip":{"text":"Pamätajte: nach Hause • V Berlíne • Po jedle."},"important":["Nach sa nepoužíva na všetkých miestach.","Ľudia zvyčajne chodia do školy v die Schule, nie nach Schule."],"sectionAccents":{"explanation":{"blue":["nach","nach Hause"]},"examples":[{"de":{"blue":["nach"],"green":["Berlin"]},"lv":{"green":["Berlina"]}},{"de":{"blue":["nach Hause"]},"lv":{}},{"de":{"blue":["Nach"],"yellow":["Essen"]},"lv":{}},{"de":{"blue":["nach"]},"lv":{}}],"comparison":[{"word":{"green":["nach"]},"meaning":{},"example":{"blue":["nach"]}},{"word":{"green":["zu"]},"meaning":{},"example":{"yellow":["zum Arzt"]}},{"word":{"green":["in"]},"meaning":{},"example":{"green":["in die Schule"]}},{"word":{"green":["vor"]},"meaning":{},"example":{"red":["Vor"]}}],"tip":{"left":{"blue":["nach Hause","nach"],"purple":["Pamätajte"]}},"important":[{"blue":["nach"]},{"red":["nach Schule"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"do • po","study":{"id":"a1-nach","layout":"standardStudy","translation":"do • po","explanation":["Hlavná myšlienka: nach označuje smer k miestu alebo časovú následnosť.","Pri mestách a krajinách bez člena nach často znamená do.","V časovom význame nach znamená po.","V spojení nach Hause znamená domov."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Idem do Berlína."},{"de":"Wir gehen nach Hause.","lv":"Ideme domov."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."},{"de":"Es ist zehn nach acht.","lv":"Je desať minút po ôsmej."}],"comparison":[{"word":"nach","meaning":"do • po","example":"Ich fahre nach Berlin. — Idem do Berlína."},{"word":"zu","meaning":"k • ku","example":"Ich gehe zum Arzt. — Idem k lekárovi."},{"word":"in","meaning":"do • v","example":"Ich gehe in die Schule. — Idem do školy."},{"word":"vor","meaning":"pred","example":"Vor dem Essen wasche ich die Hände. — Pred jedlom si umývam ruky."}],"tip":{"text":"nach Hause • nach Berlin • nach dem Essen"},"important":["nach sa nepoužíva pri všetkých cieľoch.","Pri škole sa používa in die Schule, nie nach Schule."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Kompletná karta normalizovaná; významy sú oddelené odrážkou a všetky príklady sú po slovensky.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nach",
  "lv": "do • po",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "do • po",
    "explanation": [
      "Hlavná myšlienka: nach označuje smer k miestu alebo časovú následnosť.",
      "Pri mestách a krajinách bez člena nach často znamená do.",
      "V časovom význame nach znamená po.",
      "V spojení nach Hause znamená domov."
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
        "meaning": "do • po",
        "example": "Ich fahre nach Berlin. — Idem do Berlína."
      },
      {
        "word": "zu",
        "meaning": "k • ku",
        "example": "Ich gehe zum Arzt. — Idem k lekárovi."
      },
      {
        "word": "in",
        "meaning": "do • v",
        "example": "Ich gehe in die Schule. — Idem do školy."
      },
      {
        "word": "vor",
        "meaning": "pred",
        "example": "Vor dem Essen wasche ich die Hände. — Pred jedlom si umývam ruky."
      }
    ],
    "tip": {
      "text": "nach Hause • nach Berlin • nach dem Essen"
    },
    "important": [
      "nach sa nepoužíva pri všetkých cieľoch.",
      "Pri škole sa používa in die Schule, nie nach Schule."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 17

**Audit ID:** `LRB092-0017`
**Finding Stable ID:** `g2/a1/sk|natürlich|idx:433|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `natürlich|idx:433`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Samozrejme • Prirodzené","study":{"id":"a1-natuerlich","layout":"standardStudy","translation":"Samozrejme • Prirodzené","explanation":["Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno znamená prirodzený.","V rozhovore, keď niečo potvrdzujete, natürlich = samozrejme (Kommst du mit? – Natürlich! = Prídete? – Samozrejme!).","Keď hovoríme o prírode, pôvode alebo vlastnostiach, natürlich = prírodný (natürliche Schönheit = prirodzená krása).","Kontext (odpoveď/potvrdenie alebo popis) označuje správny význam."],"examples":[{"de":"Kommst du mit? – Natürlich!","lv":"Ideš so mnou? - Samozrejme!"},{"de":"Das ist eine natürliche Reaktion.","lv":"Je to prirodzená reakcia."},{"de":"Natürlich helfe ich dir.","lv":"Samozrejme vám pomôžem."},{"de":"Sie hat natürliche rote Haare.","lv":"Má prirodzené červené vlasy."},{"de":"Natürlich kann ich das machen.","lv":"Samozrejme, že to dokážem."},{"de":"Das ist ganz natürlich.","lv":"To je úplne prirodzené/normálne."}],"tip":["Ako samostatné slovo, potvrdzujúce alebo zodpovedajúce → samozrejme.","Vedľa podstatného mena opisujúceho pôvod alebo kvalitu → prírodný."],"important":["Natürlich = samozrejme (príslovka, potvrdenie) ALEBO prirodzené (prídavné meno).","Prirodzene! ako samostatný výkričník vždy = samozrejme!"],"sectionAccents":{"explanation":{"blue":["natürlich"]},"examples":[{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürliche"]},"lv":{}},{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürliche"]},"lv":{}},{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürlich"]},"lv":{}}],"tip":[{},{}],"important":[{},{"blue":["Prirodzene"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"samozrejme • prirodzený","study":{"id":"a1-natuerlich","layout":"standardStudy","translation":"samozrejme • prirodzený","explanation":["Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno prirodzený.","V odpovedi alebo pri potvrdení znamená natürlich samozrejme.","Pri opise pôvodu či vlastnosti znamená prirodzený alebo prírodný.","Správny význam určuje kontext."],"examples":[{"de":"Kommst du mit? – Natürlich!","lv":"Ideš s nami? – Samozrejme!"},{"de":"Das ist eine natürliche Reaktion.","lv":"Je to prirodzená reakcia."},{"de":"Natürlich helfe ich dir.","lv":"Samozrejme ti pomôžem."},{"de":"Sie hat natürliche rote Haare.","lv":"Má prirodzene ryšavé vlasy."},{"de":"Natürlich kann ich das machen.","lv":"Samozrejme to môžem urobiť."},{"de":"Das ist ganz natürlich.","lv":"Je to úplne prirodzené."}],"tip":["Samostatné potvrdenie → samozrejme.","Opis vlastnosti alebo pôvodu → prirodzený."],"important":["natürlich môže znamenať samozrejme alebo prirodzený.","Samostatné Natürlich! znamená Samozrejme!"],"sectionAccents":{"examples":[{},{},{},{},{},{}]}}}
**Note:** Preložená a zosúladená celá karta vrátane všetkých šiestich príkladov.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "natürlich",
  "lv": "samozrejme • prirodzený",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "samozrejme • prirodzený",
    "explanation": [
      "Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno prirodzený.",
      "V odpovedi alebo pri potvrdení znamená natürlich samozrejme.",
      "Pri opise pôvodu či vlastnosti znamená prirodzený alebo prírodný.",
      "Správny význam určuje kontext."
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
        "lv": "Má prirodzene ryšavé vlasy."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Samozrejme to môžem urobiť."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "Je to úplne prirodzené."
      }
    ],
    "tip": [
      "Samostatné potvrdenie → samozrejme.",
      "Opis vlastnosti alebo pôvodu → prirodzený."
    ],
    "important": [
      "natürlich môže znamenať samozrejme alebo prirodzený.",
      "Samostatné Natürlich! znamená Samozrejme!"
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB092-0018`
**Finding Stable ID:** `g2/a1/sk|neben|idx:434|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `neben|idx:434`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Blízko"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vedľa"}
**Note:** Presný slovenský ekvivalent predložky neben.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neben",
  "lv": "vedľa",
  "level": "A1"
}
```

---

## Finding 19

**Audit ID:** `LRB092-0019`
**Finding Stable ID:** `g2/a1/sk|nehmen|idx:435|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `nehmen|idx:435`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vezmi • Vezmi","study":{"id":"a1-nehmen","layout":"standardStudy","translation":"Vezmi • Vezmi","explanation":["Hlavná myšlienka: nehmen znamená vziať alebo vziať.","Nehmen sa používa, keď si vezmete niečo pre seba alebo si vyberiete.","To nie je to isté ako priniesť, pretože priniesť znamená priniesť alebo vziať od niekoho.","Holen znamená ísť a priniesť/vziať."],"examples":[{"de":"Ich nehme den Bus.","lv":"Idem autobusom"},{"de":"Nimm das Buch!","lv":"Vezmite si knihu!"},{"de":"Ich bringe dir das Buch.","lv":"Priniesol som ti knihu"},{"de":"Ich hole dich ab.","lv":"Vezmem ťa"}],"comparison":[{"word":"nehmen","meaning":"Vezmi / zober","example":"Nimm das Buch!"},{"word":"bringen","meaning":"Priniesť/vziať/doručiť","example":"Ich bringe dir das Buch."},{"word":"holen","meaning":"Choďte/prineste","example":"Ich hole Wasser."},{"word":"mitnehmen","meaning":"Vezmite si to so sebou","example":"Ich nehme dich mit."}],"tip":{"text":"Zapamätaj si: vziať si pre seba → nehmen • Priviesť niekoho → priviesť."},"important":["Ich nehme den Bus znamená v lotyštine „šoférujem autobus“.","Nehmen nie je rovnaký ako prinesený."],"sectionAccents":{"explanation":{"blue":["nehmen"],"red":["holen"]},"examples":[{"de":{"blue":["nehme"],"yellow":["Bus"]},"lv":{"yellow":["autobusom"]}},{"de":{"blue":["Nimm"],"yellow":["Buch"]},"lv":{}},{"de":{"red":["bringe"],"yellow":["Buch"]},"lv":{}},{"de":{"red":["hole"],"green":["dich"]},"lv":{}}],"comparison":[{"word":{"green":["nehmen"]},"meaning":{},"example":{"blue":["Nimm"]}},{"word":{"green":["bringen"]},"meaning":{},"example":{"red":["bringe"]}},{"word":{"green":["holen"]},"meaning":{},"example":{}},{"word":{"green":["mitnehmen"]},"meaning":{},"example":{"green":["nehme","mit"]}}],"tip":{"left":{"blue":["nehmen"],"purple":["Zapamätaj"],"red":["Zapamätaj"]}},"important":[{"blue":["nehme den Bus"]},{"blue":["nehmen"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vziať • zobrať","study":{"id":"a1-nehmen","layout":"standardStudy","translation":"vziať • zobrať","explanation":["Hlavná myšlienka: nehmen znamená vziať alebo zobrať.","Používa sa, keď si niečo berieme alebo vyberáme.","bringen znamená niečo niekomu priniesť alebo odniesť.","holen znamená ísť po niečo a priniesť to alebo niekoho vyzdvihnúť."],"examples":[{"de":"Ich nehme den Bus.","lv":"Idem autobusom."},{"de":"Nimm das Buch!","lv":"Vezmi si knihu!"},{"de":"Ich bringe dir das Buch.","lv":"Prinesiem ti knihu."},{"de":"Ich hole dich ab.","lv":"Prídem po teba."}],"comparison":[{"word":"nehmen","meaning":"vziať • zobrať","example":"Nimm das Buch! — Vezmi si knihu!"},{"word":"bringen","meaning":"priniesť • odniesť","example":"Ich bringe dir das Buch. — Prinesiem ti knihu."},{"word":"holen","meaning":"ísť po • priniesť","example":"Ich hole Wasser. — Idem po vodu."},{"word":"mitnehmen","meaning":"vziať so sebou","example":"Ich nehme dich mit. — Vezmem ťa so sebou."}],"tip":{"text":"Vziať si pre seba → nehmen; priniesť niekomu → bringen."},"important":["Ich nehme den Bus znamená, že idem autobusom.","nehmen nie je to isté ako bringen."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Kompletná karta opravená a lomkové hodnoty nahradené povoleným oddeľovačom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nehmen",
  "lv": "vziať • zobrať",
  "level": "A1",
  "study": {
    "id": "a1-nehmen",
    "layout": "standardStudy",
    "translation": "vziať • zobrať",
    "explanation": [
      "Hlavná myšlienka: nehmen znamená vziať alebo zobrať.",
      "Používa sa, keď si niečo berieme alebo vyberáme.",
      "bringen znamená niečo niekomu priniesť alebo odniesť.",
      "holen znamená ísť po niečo a priniesť to alebo niekoho vyzdvihnúť."
    ],
    "examples": [
      {
        "de": "Ich nehme den Bus.",
        "lv": "Idem autobusom."
      },
      {
        "de": "Nimm das Buch!",
        "lv": "Vezmi si knihu!"
      },
      {
        "de": "Ich bringe dir das Buch.",
        "lv": "Prinesiem ti knihu."
      },
      {
        "de": "Ich hole dich ab.",
        "lv": "Prídem po teba."
      }
    ],
    "comparison": [
      {
        "word": "nehmen",
        "meaning": "vziať • zobrať",
        "example": "Nimm das Buch! — Vezmi si knihu!"
      },
      {
        "word": "bringen",
        "meaning": "priniesť • odniesť",
        "example": "Ich bringe dir das Buch. — Prinesiem ti knihu."
      },
      {
        "word": "holen",
        "meaning": "ísť po • priniesť",
        "example": "Ich hole Wasser. — Idem po vodu."
      },
      {
        "word": "mitnehmen",
        "meaning": "vziať so sebou",
        "example": "Ich nehme dich mit. — Vezmem ťa so sebou."
      }
    ],
    "tip": {
      "text": "Vziať si pre seba → nehmen; priniesť niekomu → bringen."
    },
    "important": [
      "Ich nehme den Bus znamená, že idem autobusom.",
      "nehmen nie je to isté ako bringen."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 20

**Audit ID:** `LRB092-0020`
**Finding Stable ID:** `g2/a1/sk|nennen|idx:437|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `nennen|idx:437`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Zavolajte"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nazvať"}
**Note:** Infinitívna heslová forma zodpovedajúca slovesu nennen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nennen",
  "lv": "nazvať",
  "level": "A1"
}
```

---

## Finding 21

**Audit ID:** `LRB092-0021`
**Finding Stable ID:** `g2/a1/sk|nett|idx:438|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `nett|idx:438`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Pekná"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"milý"}
**Note:** Presný slovenský ekvivalent zdrojového „jauks“.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nett",
  "lv": "milý",
  "level": "A1"
}
```

---

## Finding 22

**Audit ID:** `LRB092-0022`
**Finding Stable ID:** `g2/a1/sk|neu|idx:439|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `neu|idx:439`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Nové (o veciach)","study":{"id":"a1-neu","layout":"standardStudy","translation":"Nové (o veciach)","explanation":["Hlavná myšlienka: neu znamená novú vec – nedávno vytvorenú, zakúpenú alebo prvýkrát použitú.","Neu popisuje veci, spotrebiče, oblečenie, domy, nápady atď. – nie vek človeka alebo zvieraťa.","V lotyštine má slovo mladý dva významy: mladý vo veku (jung) a mladý/nedávno vytvorený (neu).","Pre vek človeka alebo zvieraťa sa používa jung, nie neu.","Neu sa používa aj obrazne: nová práca, nové informácie, nový začiatok.","Opakom je alt (starý) • Podstatné meno das Neue znamená nový."],"examples":[{"de":"Mein Handy ist neu.","lv":"Môj telefón je nový."},{"de":"Wir haben ein neues Auto.","lv":"Máme nové auto."},{"de":"Das ist meine neue Wohnung.","lv":"Toto je môj nový byt."},{"de":"Ich habe neue Schuhe gekauft.","lv":"Kúpil som si nové topánky."},{"de":"Das ist eine neue Idee.","lv":"Toto je nová myšlienka."},{"de":"Er hat einen neuen Job.","lv":"Má novú prácu."},{"de":"Was gibt es Neues?","lv":"Čo je nové"}],"tip":["Neu odkazuje na veci, zariadenia a novinky - keď hovoríme o veku človeka, použite jung.","Opak: neu ↔ alt (nový ↔ starý)."],"important":["Neu opisuje veci a novinky, či vek človeka či zvieraťa.","Na určenie veku osoby alebo zvieraťa použite jung namiesto neu.","Nesprávne: Meine Schwester ist neu. → Správne: Meine Schwester ist jung."],"sectionAccents":{"explanation":{"blue":["neu"],"green":["jung"]},"examples":[{"de":{"blue":["neu"]},"lv":{}},{"de":{"blue":["neues"]},"lv":{}},{"de":{"blue":["neue"]},"lv":{}},{"de":{"blue":["neue"]},"lv":{}},{"de":{"blue":["neue"]},"lv":{}},{"de":{"blue":["neuen"]},"lv":{}},{"de":{"blue":["Neues"]},"lv":{}}],"tip":[{"blue":["neu"],"green":["jung"]},{"blue":["neu"],"purple":["alt"]}],"important":[{"blue":["neu"]},{"green":["jung"],"blue":["neu"]},{"blue":["neu"],"green":["jung"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nový","study":{"id":"a1-neu","layout":"standardStudy","translation":"nový","explanation":["Hlavná myšlienka: neu znamená nový, teda nedávno vytvorený, kúpený alebo prvýkrát používaný.","neu opisuje veci, zariadenia, oblečenie, bývanie či nápady, nie vek človeka alebo zvieraťa.","V slovenčine môže nový označovať aj nízky vek, ale nemčina tu rozlišuje neu a jung.","Pre vek človeka alebo zvieraťa sa používa jung.","neu sa používa aj prenesene: nová práca, nové informácie, nový začiatok.","Opakom je alt; podstatné meno das Neue znamená niečo nové."],"examples":[{"de":"Mein Handy ist neu.","lv":"Môj telefón je nový."},{"de":"Wir haben ein neues Auto.","lv":"Máme nové auto."},{"de":"Das ist meine neue Wohnung.","lv":"Toto je môj nový byt."},{"de":"Ich habe neue Schuhe gekauft.","lv":"Kúpil som si nové topánky."},{"de":"Das ist eine neue Idee.","lv":"Toto je nový nápad."},{"de":"Er hat einen neuen Job.","lv":"Má novú prácu."},{"de":"Was gibt es Neues?","lv":"Čo je nové?"}],"tip":["neu opisuje nové veci a novinky; pri veku človeka použite jung.","Protiklad: neu ↔ alt."],"important":["neu opisuje veci a novinky, nie vek.","Pri veku osoby alebo zvieraťa sa používa jung.","Nesprávne: Meine Schwester ist neu. → Správne: Meine Schwester ist jung."],"sectionAccents":{"examples":[{},{},{},{},{},{},{}]}}}
**Note:** Odstránené zbytočné zúženie v názve a preložená celá karta podľa zdrojovej štruktúry.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neu",
  "lv": "nový",
  "level": "A1",
  "study": {
    "id": "a1-neu",
    "layout": "standardStudy",
    "translation": "nový",
    "explanation": [
      "Hlavná myšlienka: neu znamená nový, teda nedávno vytvorený, kúpený alebo prvýkrát používaný.",
      "neu opisuje veci, zariadenia, oblečenie, bývanie či nápady, nie vek človeka alebo zvieraťa.",
      "V slovenčine môže nový označovať aj nízky vek, ale nemčina tu rozlišuje neu a jung.",
      "Pre vek človeka alebo zvieraťa sa používa jung.",
      "neu sa používa aj prenesene: nová práca, nové informácie, nový začiatok.",
      "Opakom je alt; podstatné meno das Neue znamená niečo nové."
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
        "lv": "Toto je nový nápad."
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
      "neu opisuje nové veci a novinky; pri veku človeka použite jung.",
      "Protiklad: neu ↔ alt."
    ],
    "important": [
      "neu opisuje veci a novinky, nie vek.",
      "Pri veku osoby alebo zvieraťa sa používa jung.",
      "Nesprávne: Meine Schwester ist neu. → Správne: Meine Schwester ist jung."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB092-0023`
**Finding Stable ID:** `g2/a1/sk|neunte|idx:442|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `neunte|idx:442`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Deviaty"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"deviaty"}
**Note:** Slovenské radové číslovky sa ako heslá píšu s malým začiatočným písmenom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neunte",
  "lv": "deviaty",
  "level": "A1"
}
```

---

## Finding 24

**Audit ID:** `LRB092-0024`
**Finding Stable ID:** `g2/a1/sk|neunzehnte|idx:444|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `neunzehnte|idx:444`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Devätnásty"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"devätnásty"}
**Note:** Slovenské radové číslovky sa ako heslá píšu s malým začiatočným písmenom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neunzehnte",
  "lv": "devätnásty",
  "level": "A1"
}
```

---

## Finding 25

**Audit ID:** `LRB092-0025`
**Finding Stable ID:** `g2/a1/sk|neunzigste|idx:446|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `neunzigste|idx:446`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Deväťdesiaty"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"deväťdesiaty"}
**Note:** Slovenské radové číslovky sa ako heslá píšu s malým začiatočným písmenom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neunzigste",
  "lv": "deväťdesiaty",
  "level": "A1"
}
```

---

## Finding 26

**Audit ID:** `LRB092-0026`
**Finding Stable ID:** `g2/a1/sk|nicht|idx:447|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `nicht|idx:447`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"NIE"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nie"}
**Note:** Normalizovaný správny slovenský tvar bez verzál.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nicht",
  "lv": "nie",
  "level": "A1"
}
```

---

## Finding 27

**Audit ID:** `LRB092-0027`
**Finding Stable ID:** `g2/a1/sk|nichts|idx:448|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `nichts|idx:448`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Niť"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nič"}
**Note:** Opravený nesprávny výraz „Niť“ na zámeno nič.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nichts",
  "lv": "nič",
  "level": "A1"
}
```

---

## Finding 28

**Audit ID:** `LRB092-0028`
**Finding Stable ID:** `g2/a1/sk|noch|idx:451|lv, study.translation, study.explanation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `noch|idx:451`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Už","study.translation":"Už","study.explanation":["Hlavná myšlienka: stále sa niečo deje alebo ešte neskončilo.","Noch hlavne znamená: stále sa niečo deje.","Často opisuje: pokračovanie alebo nedokončený stav.","Noch znamená stále: niečo sa stále deje alebo ešte neskončilo."],"study.examples":[{"de":"Ich bin noch zu Hause.","lv":"Som stále doma."},{"de":"Ich bin noch zu Hause.","lv":"Som stále doma"},{"de":"Bist du noch da?","lv":"Si ešte tu?"}]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ešte","study":{"id":"a1-noch-study","layout":"standardStudy","translation":"ešte","explanation":["Hlavná myšlienka: noch vyjadruje, že niečo stále trvá alebo sa ešte neskončilo.","Najčastejšie sa prekladá ako ešte.","Používa sa pri pokračujúcom alebo nedokončenom stave.","Kontext ukazuje, čo ešte trvá alebo sa ešte nestalo."],"examples":[{"de":"Ich bin noch zu Hause.","lv":"Ešte som doma."},{"de":"Ich bin noch zu Hause.","lv":"Ešte som doma."},{"de":"Bist du noch da?","lv":"Si ešte tu?"}],"tip":["noch často znamená ešte.","Použite ho, keď niečo stále pokračuje alebo ešte nie je dokončené."],"important":["noch = ešte.","noch vyjadruje pokračovanie alebo nedokončený stav."],"sectionAccents":{"examples":[{},{},{}]}}}
**Note:** Celá karta preložená a zbavená duplicitného, strojovo opakovaného vysvetlenia.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "noch",
  "lv": "ešte",
  "level": "A1",
  "study": {
    "id": "a1-noch-study",
    "layout": "standardStudy",
    "translation": "ešte",
    "explanation": [
      "Hlavná myšlienka: noch vyjadruje, že niečo stále trvá alebo sa ešte neskončilo.",
      "Najčastejšie sa prekladá ako ešte.",
      "Používa sa pri pokračujúcom alebo nedokončenom stave.",
      "Kontext ukazuje, čo ešte trvá alebo sa ešte nestalo."
    ],
    "examples": [
      {
        "de": "Ich bin noch zu Hause.",
        "lv": "Ešte som doma."
      },
      {
        "de": "Ich bin noch zu Hause.",
        "lv": "Ešte som doma."
      },
      {
        "de": "Bist du noch da?",
        "lv": "Si ešte tu?"
      }
    ],
    "tip": [
      "noch často znamená ešte.",
      "Použite ho, keď niečo stále pokračuje alebo ešte nie je dokončené."
    ],
    "important": [
      "noch = ešte.",
      "noch vyjadruje pokračovanie alebo nedokončený stav."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB092-0029`
**Finding Stable ID:** `g2/a1/sk|normal|idx:452|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `normal|idx:452`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Normálne"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"normálny"}
**Note:** Správny slovenský základný tvar prídavného mena.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "normal",
  "lv": "normálny",
  "level": "A1"
}
```

---

## Finding 30

**Audit ID:** `LRB092-0030`
**Finding Stable ID:** `g2/a1/sk|November|idx:453|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `November|idx:453`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Novembra"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"november"}
**Note:** Názov mesiaca v slovenčine má základný tvar a malé začiatočné písmeno.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "November",
  "de_article": "der",
  "lv": "november",
  "level": "A1"
}
```

---

## Finding 31

**Audit ID:** `LRB092-0031`
**Finding Stable ID:** `g2/a1/sk|nur|idx:456|lv, study.translation, study.explanation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `nur|idx:456`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Iba • Iba","study.translation":"Iba • Iba","study.explanation":["Hlavná myšlienka: obmedzuje množstvo, počet ľudí, výber alebo možnosti.","Nur znamená hlavne: obmedzené množstvo alebo výber.","Často popisuje: koľko, presne alebo kto je jediný.","Nur znamená iba, výlučne, nič viac: obmedzuje množstvo alebo výber."],"study.examples":[{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Nur du kannst mir helfen.","lv":"Len ty mi môžeš pomôcť."},{"de":"Ich möchte nur Kaffee.","lv":"Chcem len kávu"},{"de":"Ich habe nur acht Euro.","lv":"Mám len osem eur."}]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"iba • len","study":{"id":"a1-nur-study","layout":"standardStudy","translation":"iba • len","explanation":["Hlavná myšlienka: nur obmedzuje množstvo, výber alebo možnosti.","Najčastejšie znamená iba alebo len.","Môže určovať jediné množstvo, vec alebo osobu.","Vyjadruje, že nič ďalšie sa nezahŕňa."],"examples":[{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Nur du kannst mir helfen.","lv":"Len ty mi môžeš pomôcť."},{"de":"Ich möchte nur Kaffee.","lv":"Chcem iba kávu."},{"de":"Ich habe nur acht Euro.","lv":"Mám len osem eur."}],"tip":["nur vyjadruje obmedzenie: iba, len, nič viac.","Správny slovenský tvar vyberte podľa kontextu."],"important":["nur = iba • len.","Správny preklad určuje kontext vety."],"sectionAccents":{"examples":[{},{},{},{},{}]}}}
**Note:** Doplnená celá karta vrátane všetkých piatich zdrojových príkladov.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nur",
  "lv": "iba • len",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "iba • len",
    "explanation": [
      "Hlavná myšlienka: nur obmedzuje množstvo, výber alebo možnosti.",
      "Najčastejšie znamená iba alebo len.",
      "Môže určovať jediné množstvo, vec alebo osobu.",
      "Vyjadruje, že nič ďalšie sa nezahŕňa."
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
        "lv": "Chcem iba kávu."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Mám len osem eur."
      }
    ],
    "tip": [
      "nur vyjadruje obmedzenie: iba, len, nič viac.",
      "Správny slovenský tvar vyberte podľa kontextu."
    ],
    "important": [
      "nur = iba • len.",
      "Správny preklad určuje kontext vety."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 32

**Audit ID:** `LRB092-0032`
**Finding Stable ID:** `g2/a1/sk|ob|idx:457|lv, study.translation, study.explanation, study.tip|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `ob|idx:457`
**Field / path:** `lv, study.translation, study.explanation, study.tip`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Alebo","study.translation":"Alebo","study.explanation":["Hlavná myšlienka: ob uvádza nepriamu otázku a v lotyštine najčastejšie znamená resp.","Ob sa používa po slovách ako fragen, wissen, sehen, sagen, keď neexistuje priama otázka.","Ob sa v nemčine zvyčajne nepoužíva v priamej otázke.","Na úrovni A1 je dôležité rozlíšiť ob od oder."],"study.tip":{"text":"Pamätajte: Neviem, či... → ob • Káva alebo čaj → alebo."}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"či","study":{"id":"a1-ob","layout":"standardStudy","translation":"či","explanation":["Hlavná myšlienka: ob uvádza nepriamu otázku a po slovensky najčastejšie znamená či.","Používa sa po slovesách ako fragen, wissen, sehen a sagen, keď nejde o priamu otázku.","V priamej otázke sa ob zvyčajne nepoužíva.","Treba ho odlíšiť od oder."],"examples":[{"de":"Ich weiß nicht, ob er kommt.","lv":"Neviem, či príde."},{"de":"Sie fragt, ob du Zeit hast.","lv":"Pýta sa, či máš čas."},{"de":"Sag mir, ob das stimmt.","lv":"Povedz mi, či je to pravda."},{"de":"Kommst du heute oder morgen?","lv":"Prídeš dnes alebo zajtra?"}],"comparison":[{"word":"ob","meaning":"či v nepriamej otázke","example":"Ich weiß nicht, ob er kommt. — Neviem, či príde."},{"word":"oder","meaning":"alebo pri výbere","example":"Kaffee oder Tee? — Káva alebo čaj?"},{"word":"wenn","meaning":"ak • keď","example":"Wenn du Zeit hast... — Ak máš čas..."},{"word":"dass","meaning":"že","example":"Ich weiß, dass er kommt. — Viem, že príde."}],"tip":{"text":"Neviem, či... → ob; káva alebo čaj → oder."},"important":["ob nie je spojka na výber medzi dvoma vecami.","V spojení Kaffee oder Tee? sa používa oder."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Luna ponechala príklady a porovnania nepreložené; nahradená je celá karta.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ob",
  "lv": "či",
  "level": "A1",
  "study": {
    "id": "a1-ob",
    "layout": "standardStudy",
    "translation": "či",
    "explanation": [
      "Hlavná myšlienka: ob uvádza nepriamu otázku a po slovensky najčastejšie znamená či.",
      "Používa sa po slovesách ako fragen, wissen, sehen a sagen, keď nejde o priamu otázku.",
      "V priamej otázke sa ob zvyčajne nepoužíva.",
      "Treba ho odlíšiť od oder."
    ],
    "examples": [
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Neviem, či príde."
      },
      {
        "de": "Sie fragt, ob du Zeit hast.",
        "lv": "Pýta sa, či máš čas."
      },
      {
        "de": "Sag mir, ob das stimmt.",
        "lv": "Povedz mi, či je to pravda."
      },
      {
        "de": "Kommst du heute oder morgen?",
        "lv": "Prídeš dnes alebo zajtra?"
      }
    ],
    "comparison": [
      {
        "word": "ob",
        "meaning": "či v nepriamej otázke",
        "example": "Ich weiß nicht, ob er kommt. — Neviem, či príde."
      },
      {
        "word": "oder",
        "meaning": "alebo pri výbere",
        "example": "Kaffee oder Tee? — Káva alebo čaj?"
      },
      {
        "word": "wenn",
        "meaning": "ak • keď",
        "example": "Wenn du Zeit hast... — Ak máš čas..."
      },
      {
        "word": "dass",
        "meaning": "že",
        "example": "Ich weiß, dass er kommt. — Viem, že príde."
      }
    ],
    "tip": {
      "text": "Neviem, či... → ob; káva alebo čaj → oder."
    },
    "important": [
      "ob nie je spojka na výber medzi dvoma vecami.",
      "V spojení Kaffee oder Tee? sa používa oder."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB092-0033`
**Finding Stable ID:** `g2/a1/sk|oben|idx:458|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `oben|idx:458`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Vyššie"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hore"}
**Note:** Presný slovenský ekvivalent príslovky oben.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "oben",
  "lv": "hore",
  "level": "A1"
}
```

---

## Finding 34

**Audit ID:** `LRB092-0034`
**Finding Stable ID:** `g2/a1/sk|Obst|idx:693|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `Obst|idx:693`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Ovocie","study":{"id":"a1-obst","layout":"standardStudy","translation":"Ovocie","explanation":["Hlavná myšlienka: O ovocí všeobecne. V nemčine *die Obsts neexistuje množné číslo.","Das Obst znamená hlavne: ovocie vo všeobecnosti.","Často opísané: v akomkoľvek pohlaví (iba v jednotnom čísle)."],"examples":[{"de":"Wir essen viel Obst.","lv":"Jeme veľa ovocia."},{"de":"Wir essen viel Obst.","lv":"Jeme veľa ovocia."},{"de":"Obst ist gesund.","lv":"Ovocie je zdravé."},{"de":"Ich mag Obst und Gemüse.","lv":"Mám rád ovocie a zeleninu."},{"de":"Wir essen Obst.","lv":"Jeme ovocie."}],"tip":["Das Obst = ovocie","Použite da Obst, keď kontext zodpovedá tomuto významu."],"important":["Nesprávne: die Obsts → Správne: das Obst","Das Obst = ovocie (vo všeobecnosti)."],"sectionAccents":{"explanation":{"green":["das Obst","obst"],"yellow":["Obst"]},"examples":[{"de":{"green":["obst"]},"lv":{}},{"de":{"green":["obst"]},"lv":{}},{"de":{"green":["obst"]},"lv":{}},{"de":{"green":["obst"]},"lv":{}},{"de":{"green":["obst"]},"lv":{}}],"tip":[{}],"important":[{"green":["das Obst"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ovocie","study":{"id":"a1-obst","layout":"standardStudy","translation":"ovocie","explanation":["Hlavná myšlienka: Obst označuje ovocie ako celok.","V nemčine sa používa v jednotnom čísle a nemá bežný tvar množného čísla die Obsts.","Je stredného rodu: das Obst."],"examples":[{"de":"Wir essen viel Obst.","lv":"Jeme veľa ovocia."},{"de":"Wir essen viel Obst.","lv":"Jeme veľa ovocia."},{"de":"Obst ist gesund.","lv":"Ovocie je zdravé."},{"de":"Ich mag Obst und Gemüse.","lv":"Mám rád ovocie a zeleninu."},{"de":"Wir essen Obst.","lv":"Jeme ovocie."}],"tip":["das Obst = ovocie","Použite das Obst, keď hovoríte o ovocí všeobecne."],"important":["Nesprávne: die Obsts → správne: das Obst.","das Obst označuje ovocie ako celok."],"sectionAccents":{"examples":[{},{},{},{},{}]}}}
**Note:** Doplnená celá karta a zachovaných všetkých päť zdrojových príkladov.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "ovocie",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "ovocie",
    "explanation": [
      "Hlavná myšlienka: Obst označuje ovocie ako celok.",
      "V nemčine sa používa v jednotnom čísle a nemá bežný tvar množného čísla die Obsts.",
      "Je stredného rodu: das Obst."
    ],
    "examples": [
      {
        "de": "Wir essen viel Obst.",
        "lv": "Jeme veľa ovocia."
      },
      {
        "de": "Wir essen viel Obst.",
        "lv": "Jeme veľa ovocia."
      },
      {
        "de": "Obst ist gesund.",
        "lv": "Ovocie je zdravé."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Mám rád ovocie a zeleninu."
      },
      {
        "de": "Wir essen Obst.",
        "lv": "Jeme ovocie."
      }
    ],
    "tip": [
      "das Obst = ovocie",
      "Použite das Obst, keď hovoríte o ovocí všeobecne."
    ],
    "important": [
      "Nesprávne: die Obsts → správne: das Obst.",
      "das Obst označuje ovocie ako celok."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 35

**Audit ID:** `LRB092-0035`
**Finding Stable ID:** `g2/a1/sk|oder|idx:459|lv, study.translation, study.explanation, study.tip, study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `oder|idx:459`
**Field / path:** `lv, study.translation, study.explanation, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Alebo • Or","study.translation":"Alebo • Or","study.explanation":["Hlavná myšlienka: oder sa používa, keď si vyberáme medzi dvoma alebo viacerými možnosťami.","V lotyštine oder najčastejšie znamená resp.","Toto nie je to isté ako ob, ktoré zavádza nepriamu otázku.","V rozhovoroch možno oder umiestniť aj na koniec vety: Du kommst, oder?"],"study.tip":{"text":"Pamätajte: výber medzi možnosťami → alebo."},"study.important":["Na výber je oder: Kaffee oder Tee.","V nepriamej otázke býva „ak“ ob."]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"alebo","study":{"id":"a1-oder","layout":"standardStudy","translation":"alebo","explanation":["Hlavná myšlienka: oder sa používa pri výbere medzi dvoma alebo viacerými možnosťami.","Po slovensky najčastejšie znamená alebo.","Nie je to to isté ako ob, ktoré uvádza nepriamu otázku.","V rozhovore môže stáť aj na konci vety: Du kommst, oder?"],"examples":[{"de":"Kaffee oder Tee?","lv":"Kávu alebo čaj?"},{"de":"Heute oder morgen?","lv":"Dnes alebo zajtra?"},{"de":"Willst du Pizza oder Salat?","lv":"Chceš pizzu alebo šalát?"},{"de":"Du kommst, oder?","lv":"Prídeš, však?"}],"comparison":[{"word":"oder","meaning":"alebo pri výbere","example":"Kaffee oder Tee? — Káva alebo čaj?"},{"word":"ob","meaning":"či v nepriamej otázke","example":"Ich weiß nicht, ob er kommt. — Neviem, či príde."},{"word":"und","meaning":"a","example":"Kaffee und Kuchen. — Káva a koláč."},{"word":"aber","meaning":"ale","example":"Ich komme, aber später. — Prídem, ale neskôr."}],"tip":{"text":"Výber medzi možnosťami → oder."},"important":["oder sa používa pri výbere.","V nepriamej otázke sa používa ob vo význame či."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Odstránený nadbytočný druhý význam názvu a doplnené všetky chýbajúce časti karty.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "oder",
  "lv": "alebo",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "alebo",
    "explanation": [
      "Hlavná myšlienka: oder sa používa pri výbere medzi dvoma alebo viacerými možnosťami.",
      "Po slovensky najčastejšie znamená alebo.",
      "Nie je to to isté ako ob, ktoré uvádza nepriamu otázku.",
      "V rozhovore môže stáť aj na konci vety: Du kommst, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Kávu alebo čaj?"
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
        "meaning": "alebo pri výbere",
        "example": "Kaffee oder Tee? — Káva alebo čaj?"
      },
      {
        "word": "ob",
        "meaning": "či v nepriamej otázke",
        "example": "Ich weiß nicht, ob er kommt. — Neviem, či príde."
      },
      {
        "word": "und",
        "meaning": "a",
        "example": "Kaffee und Kuchen. — Káva a koláč."
      },
      {
        "word": "aber",
        "meaning": "ale",
        "example": "Ich komme, aber später. — Prídem, ale neskôr."
      }
    ],
    "tip": {
      "text": "Výber medzi možnosťami → oder."
    },
    "important": [
      "oder sa používa pri výbere.",
      "V nepriamej otázke sa používa ob vo význame či."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 36

**Audit ID:** `LRB092-0036`
**Finding Stable ID:** `g2/a1/sk|öffnen|idx:460|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `öffnen|idx:460`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"OTVORENÉ"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"otvoriť"}
**Note:** Infinitívna heslová forma; pôvodné „OTVORENÉ“ bolo prídavné meno vo verzálach.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "öffnen",
  "lv": "otvoriť",
  "level": "A1"
}
```

---

## Finding 37

**Audit ID:** `LRB092-0037`
**Finding Stable ID:** `g2/a1/sk|Ohr|idx:463|lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `Ohr|idx:463`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Rukoväť"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ucho"}
**Note:** Opravený úplne nesúvisiaci pôvodný preklad „Rukoväť“.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Ohr",
  "de_article": "das",
  "de_plural": "die Ohren",
  "lv": "ucho",
  "level": "A1"
}
```

---

## Finding 38

**Audit ID:** `LRB092-0038`
**Finding Stable ID:** `g2/a1/sk|passen|idx:471|lv, study.translation, study.explanation, study.comparison|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `passen|idx:471`
**Field / path:** `lv, study.translation, study.explanation, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sedí • Sedí","study.translation":"Sedí • Sedí","study.explanation":["Hlavná myšlienka: passen znamená sedieť, sedieť alebo byť vhodný.","Passen v prípade oblečenia často znamená úpravu veľkosti.","Pokiaľ ide o farby a štýl, passen znamená fit.","Veľmi populárnou frázou je Das passt. = Hodí sa."],"study.comparison":[{"word":"passen","meaning":"Sedí/sedí","example":"Die Jacke passt mir."},{"word":"stehen","meaning":"Stojan / stojan","example":"Rot steht dir gut."},{"word":"geeignet sein","meaning":"Buďte primeraný","example":"Das ist geeignet."},{"word":"funktionieren","meaning":"Práca","example":"Das funktioniert."}]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sedieť • hodiť sa","study":{"id":"a1-passen","layout":"standardStudy","translation":"sedieť • hodiť sa","explanation":["Hlavná myšlienka: passen znamená sedieť, hodiť sa alebo byť vhodný.","Pri oblečení často znamená sedieť veľkosťou.","Pri farbe alebo štýle znamená hodiť sa či pristať.","Časté spojenie Das passt. znamená Hodí sa to."],"examples":[{"de":"Die Jacke passt mir.","lv":"Bunda mi sedí."},{"de":"Das Kleid passt gut.","lv":"Šaty dobre sedia."},{"de":"Die Farbe passt zu dir.","lv":"Tá farba ti pristane."},{"de":"Das passt.","lv":"Hodí sa to."}],"comparison":[{"word":"passen","meaning":"sedieť • hodiť sa","example":"Die Jacke passt mir. — Bunda mi sedí."},{"word":"stehen","meaning":"pristať • stáť","example":"Rot steht dir gut. — Červená ti pristane."},{"word":"geeignet sein","meaning":"byť vhodný","example":"Das ist geeignet. — Je to vhodné."},{"word":"funktionieren","meaning":"fungovať","example":"Das funktioniert. — Funguje to."}],"tip":{"text":"Das passt. = Hodí sa to."},"important":["passen sa nepoužíva iba pri oblečení.","Môže vyjadriť aj to, že čas, plán alebo riešenie vyhovuje."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Luna vynechala príklady, tip a dôležité poznámky; doplnená je celá karta.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "passen",
  "lv": "sedieť • hodiť sa",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "sedieť • hodiť sa",
    "explanation": [
      "Hlavná myšlienka: passen znamená sedieť, hodiť sa alebo byť vhodný.",
      "Pri oblečení často znamená sedieť veľkosťou.",
      "Pri farbe alebo štýle znamená hodiť sa či pristať.",
      "Časté spojenie Das passt. znamená Hodí sa to."
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
        "lv": "Tá farba ti pristane."
      },
      {
        "de": "Das passt.",
        "lv": "Hodí sa to."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "sedieť • hodiť sa",
        "example": "Die Jacke passt mir. — Bunda mi sedí."
      },
      {
        "word": "stehen",
        "meaning": "pristať • stáť",
        "example": "Rot steht dir gut. — Červená ti pristane."
      },
      {
        "word": "geeignet sein",
        "meaning": "byť vhodný",
        "example": "Das ist geeignet. — Je to vhodné."
      },
      {
        "word": "funktionieren",
        "meaning": "fungovať",
        "example": "Das funktioniert. — Funguje to."
      }
    ],
    "tip": {
      "text": "Das passt. = Hodí sa to."
    },
    "important": [
      "passen sa nepoužíva iba pri oblečení.",
      "Môže vyjadriť aj to, že čas, plán alebo riešenie vyhovuje."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 39

**Audit ID:** `LRB092-0039`
**Finding Stable ID:** `g2/a1/sk|probieren|idx:482|lv and study LV fields|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `probieren|idx:482`
**Field / path:** `lv and study LV fields`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vyskúšajte • Ochutnajte","study":{"id":"a1-probieren","layout":"standardStudy","translation":"Vyskúšajte • Ochutnajte","explanation":["Hlavná myšlienka: probieren znamená ochutnať alebo ochutnať.","Čo sa týka jedla a pitia, probieren často znamená ochutnať.","Pokiaľ ide o akciu, metódu alebo vec, probieren znamená vyskúšať.","To nie je to isté ako prüfen, čo znamená dôkladnejšiu kontrolu."],"examples":[{"de":"Probier mal die Suppe!","lv":"Ochutnajte polievku!"},{"de":"Ich möchte den Kuchen probieren.","lv":"Chcem tortu vyskúšať."},{"de":"Wir probieren eine neue Methode.","lv":"Skúšame novú metódu."},{"de":"Kann ich die Jacke anprobieren?","lv":"Môžem si bundu vyskúšať?"}],"comparison":[{"word":"probieren","meaning":"Vyskúšajte/ochutnajte","example":"Probier mal die Suppe!"},{"word":"versuchen","meaning":"Skúste to","example":"Ich versuche es."},{"word":"prüfen","meaning":"Na kontrolu","example":"Ich prüfe die Rechnung."},{"word":"anprobieren","meaning":"Skúste to","example":"Ich probiere die Jacke an."}],"tip":{"text":"Pamätajte: jedlo → probieren = podľa chuti."},"important":["Probieren nie je hlavné slovo pre formálnu skúšku.","Kontrola dokladu alebo faktúry je zvyčajne prüfen."],"sectionAccents":{"explanation":{"blue":["probieren","prüfen"],"yellow":["metódu"]},"examples":[{"de":{"blue":["Probier"],"yellow":["Suppe"]},"lv":{"yellow":["Ochutnajte"]}},{"de":{"blue":["probieren"],"yellow":["Kuchen"]},"lv":{}},{"de":{"blue":["probieren"],"yellow":["Methode"]},"lv":{"yellow":["metódu"]}},{"de":{"green":["anprobieren"],"yellow":["Jacke"]},"lv":{}}],"comparison":[{"word":{"green":["probieren"]},"meaning":{},"example":{}},{"word":{"green":["versuchen"]},"meaning":{},"example":{"green":["versuche"]}},{"word":{"green":["prüfen"]},"meaning":{},"example":{"red":["prüfe"]}},{"word":{"green":["anprobieren"]},"meaning":{},"example":{"yellow":["probiere","an"]}}],"tip":{"left":{"blue":["probieren"],"purple":["Pamätajte"]}},"important":[{"blue":["probieren"]},{"red":["prüfen"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vyskúšať • ochutnať","study":{"id":"a1-probieren","layout":"standardStudy","translation":"vyskúšať • ochutnať","explanation":["Hlavná myšlienka: probieren znamená vyskúšať alebo ochutnať.","Pri jedle a nápojoch často znamená ochutnať.","Pri činnosti, metóde alebo veci znamená vyskúšať.","prüfen znamená dôkladnejšie skontrolovať."],"examples":[{"de":"Probier mal die Suppe!","lv":"Ochutnaj polievku!"},{"de":"Ich möchte den Kuchen probieren.","lv":"Chcem ochutnať koláč."},{"de":"Wir probieren eine neue Methode.","lv":"Skúšame novú metódu."},{"de":"Kann ich die Jacke anprobieren?","lv":"Môžem si vyskúšať bundu?"}],"comparison":[{"word":"probieren","meaning":"vyskúšať • ochutnať","example":"Probier mal die Suppe! — Ochutnaj polievku!"},{"word":"versuchen","meaning":"pokúsiť sa • skúsiť","example":"Ich versuche es. — Skúsim to."},{"word":"prüfen","meaning":"skontrolovať","example":"Ich prüfe die Rechnung. — Kontrolujem účet."},{"word":"anprobieren","meaning":"vyskúšať si","example":"Ich probiere die Jacke an. — Skúšam si bundu."}],"tip":{"text":"Pri jedle probieren často znamená ochutnať."},"important":["probieren nie je hlavné slovo pre úradnú alebo dôkladnú kontrolu.","Dokument alebo účet sa zvyčajne kontroluje slovesom prüfen."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** Luna zmenila iba názov; všetky ostatné časti boli stále cudzojazyčné.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "probieren",
  "lv": "vyskúšať • ochutnať",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "vyskúšať • ochutnať",
    "explanation": [
      "Hlavná myšlienka: probieren znamená vyskúšať alebo ochutnať.",
      "Pri jedle a nápojoch často znamená ochutnať.",
      "Pri činnosti, metóde alebo veci znamená vyskúšať.",
      "prüfen znamená dôkladnejšie skontrolovať."
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
        "lv": "Môžem si vyskúšať bundu?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "vyskúšať • ochutnať",
        "example": "Probier mal die Suppe! — Ochutnaj polievku!"
      },
      {
        "word": "versuchen",
        "meaning": "pokúsiť sa • skúsiť",
        "example": "Ich versuche es. — Skúsim to."
      },
      {
        "word": "prüfen",
        "meaning": "skontrolovať",
        "example": "Ich prüfe die Rechnung. — Kontrolujem účet."
      },
      {
        "word": "anprobieren",
        "meaning": "vyskúšať si",
        "example": "Ich probiere die Jacke an. — Skúšam si bundu."
      }
    ],
    "tip": {
      "text": "Pri jedle probieren často znamená ochutnať."
    },
    "important": [
      "probieren nie je hlavné slovo pre úradnú alebo dôkladnú kontrolu.",
      "Dokument alebo účet sa zvyčajne kontroluje slovesom prüfen."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 40

**Audit ID:** `LRB092-0040`
**Finding Stable ID:** `g2/a1/sk|rechts|a1.card.rechts.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `rechts`
**Field / path:** `a1.card.rechts.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Správne • Správne
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vpravo • pravý"}
**Note:** Doplnené obe zdrojové funkcie: príslovka smeru aj prídavné meno.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "rechts",
  "lv": "vpravo • pravý",
  "level": "A1"
}
```

---

## Finding 41

**Audit ID:** `LRB092-0041`
**Finding Stable ID:** `g2/a1/sk|Reis|idx:496|lv and study LV fields|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `Reis|idx:496`
**Field / path:** `lv and study LV fields`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Ryža","study":{"id":"a1-reis","layout":"standardStudy","translation":"Ryža","explanation":"V nemčine sa slovo „der Reis“ používa iba v jednotnom čísle, takže sloveso vo vete musí byť jednotné (napr. „ist“, nie „sind“). Lotyši však často hovoria „ryža“.","examples":[{"de":"Der Reis ist fertig.","lv":"Ryža je hotová."},{"de":"Ich esse Reis.","lv":"Jem ryžu"},{"de":"Kochst du Reis?","lv":"Varíte ryžu?"},{"de":"Der Reis schmeckt gut.","lv":"Ryža chutí dobre."}],"tip":{"text":"Pamätajte: der Reis je jednotné číslo v nemčine, ale zvyčajne ryža v lotyštine."},"important":["Der Reis - v nemčine len jednotné číslo (Der Reis ist..., nicht *sind).","Pri preklade do lotyštiny sa často používa množné číslo: ryža je hotová."],"sectionAccents":{"explanation":{"blue":["der Reis","ist"],"purple":["nemčine","Ryż"],"red":["sind"]},"examples":[{"de":{"blue":["Reis","ist"]},"lv":{}},{"de":{"blue":["Reis"]},"lv":{}}],"tip":{"blue":["der Reis"],"purple":["Ryż"]}}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ryža","study":{"id":"a1-reis","layout":"standardStudy","translation":"ryža","explanation":"Nemecké podstatné meno „der Reis“ sa používa iba v jednotnom čísle, preto je aj sloveso v jednotnom čísle, napríklad „ist“, nie „sind“. Slovenské slovo ryža je tiež jednotné číslo.","examples":[{"de":"Der Reis ist fertig.","lv":"Ryža je hotová."},{"de":"Ich esse Reis.","lv":"Jem ryžu."},{"de":"Kochst du Reis?","lv":"Varíš ryžu?"},{"de":"Der Reis schmeckt gut.","lv":"Ryža chutí dobre."}],"tip":{"text":"der Reis je v nemčine jednotné číslo; po slovensky je to ryža."},"important":["der Reis sa v nemčine používa v jednotnom čísle.","Slovenský preklad ryža je tiež jednotné číslo."],"sectionAccents":{"examples":[{},{},{},{}]}}}
**Note:** Luna zmenila iba názov; preložená a významovo opravená je celá karta.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Reis",
  "de_article": "der",
  "lv": "ryža",
  "level": "A1",
  "study": {
    "id": "a1-reis",
    "layout": "standardStudy",
    "translation": "ryža",
    "explanation": "Nemecké podstatné meno „der Reis“ sa používa iba v jednotnom čísle, preto je aj sloveso v jednotnom čísle, napríklad „ist“, nie „sind“. Slovenské slovo ryža je tiež jednotné číslo.",
    "examples": [
      {
        "de": "Der Reis ist fertig.",
        "lv": "Ryža je hotová."
      },
      {
        "de": "Ich esse Reis.",
        "lv": "Jem ryžu."
      },
      {
        "de": "Kochst du Reis?",
        "lv": "Varíš ryžu?"
      },
      {
        "de": "Der Reis schmeckt gut.",
        "lv": "Ryža chutí dobre."
      }
    ],
    "tip": {
      "text": "der Reis je v nemčine jednotné číslo; po slovensky je to ryža."
    },
    "important": [
      "der Reis sa v nemčine používa v jednotnom čísle.",
      "Slovenský preklad ryža je tiež jednotné číslo."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 42

**Audit ID:** `LRB092-0042`
**Finding Stable ID:** `g2/a1/sk|richtig|idx:497|lv|MEANING_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `richtig|idx:497`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Normálne"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"správny"}
**Note:** Presný slovenský základný tvar prídavného mena.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "richtig",
  "lv": "správny",
  "level": "A1"
}
```

---

## Finding 43

**Audit ID:** `LRB092-0043`
**Finding Stable ID:** `g2/a1/sk|Rose|idx:502|lv|MEANING_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `Rose|idx:502`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Rose"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ruža"}
**Note:** Presný slovenský názov rastliny v základnom tvare.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Rose",
  "de_article": "die",
  "de_plural": "die Rosen",
  "lv": "ruža",
  "level": "A1"
}
```

---

## Finding 44

**Audit ID:** `LRB092-0044`
**Finding Stable ID:** `g2/a1/sk|sagen|idx:505|lv and study LV fields|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `sagen|idx:505`
**Field / path:** `lv and study LV fields`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Povedať","study":{"id":"a1-sagen-study","layout":"standardStudy","translation":"Povedať","explanation":["Hlavná myšlienka: Povedzte konkrétnu myšlienku, slovo alebo vetu.","Sagen hlavne znamená: predstaviť konkrétny bod.","Často opisuje: slová/vety.","Sagen sa používa na označenie konkrétneho textu."],"examples":[{"de":"Was hast du gesagt?","lv":"Čo si povedal?"}],"comparison":[{"word":"sagen","meaning":"Povedz (konkrétny text)","example":"Was hast du gesagt? – Čo si povedal?"},{"word":"sprechen","meaning":"Hovor (jazyk, hovor)","example":"Ich spreche Deutsch. – Hovorím po nemecky."}],"tip":["Sagen = povedať","Použite sagen, keď kontext zodpovedá tomuto významu."],"important":["Sagen = povedať.","Na vyjadrenie konkrétnej myšlienky, slova alebo frázy."],"sectionAccents":{"explanation":{"blue":["sagen"]},"examples":[{"de":{},"lv":{}}],"tip":[{}],"important":[{"blue":["sagen"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"povedať","study":{"id":"a1-sagen-study","layout":"standardStudy","translation":"povedať","explanation":["Hlavná myšlienka: sagen znamená povedať konkrétnu myšlienku, slovo alebo vetu.","Najčastejšie označuje konkrétny vyslovený obsah.","Používa sa pri slovách a vetách.","Na všeobecné hovorenie alebo ovládanie jazyka sa používa sprechen."],"examples":[{"de":"Was hast du gesagt?","lv":"Čo si povedal?"}],"comparison":[{"word":"sagen","meaning":"povedať konkrétny obsah","example":"Was hast du gesagt? — Čo si povedal?"},{"word":"sprechen","meaning":"hovoriť • rozprávať","example":"Ich spreche Deutsch. — Hovorím po nemecky."}],"tip":["sagen = povedať","Použite sagen pri konkrétnom vyslovenom obsahu."],"important":["sagen = povedať.","sagen označuje konkrétnu myšlienku, slovo alebo vetu."],"sectionAccents":{"examples":[{}],"comparison":[{},{}]}}}
**Note:** Luna zmenila iba názov; preložená je celá študijná karta.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sagen",
  "lv": "povedať",
  "level": "A1",
  "study": {
    "id": "a1-sagen-study",
    "layout": "standardStudy",
    "translation": "povedať",
    "explanation": [
      "Hlavná myšlienka: sagen znamená povedať konkrétnu myšlienku, slovo alebo vetu.",
      "Najčastejšie označuje konkrétny vyslovený obsah.",
      "Používa sa pri slovách a vetách.",
      "Na všeobecné hovorenie alebo ovládanie jazyka sa používa sprechen."
    ],
    "examples": [
      {
        "de": "Was hast du gesagt?",
        "lv": "Čo si povedal?"
      }
    ],
    "comparison": [
      {
        "word": "sagen",
        "meaning": "povedať konkrétny obsah",
        "example": "Was hast du gesagt? — Čo si povedal?"
      },
      {
        "word": "sprechen",
        "meaning": "hovoriť • rozprávať",
        "example": "Ich spreche Deutsch. — Hovorím po nemecky."
      }
    ],
    "tip": [
      "sagen = povedať",
      "Použite sagen pri konkrétnom vyslovenom obsahu."
    ],
    "important": [
      "sagen = povedať.",
      "sagen označuje konkrétnu myšlienku, slovo alebo vetu."
    ],
    "sectionAccents": {
      "examples": [
        {}
      ],
      "comparison": [
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB092-0045`
**Finding Stable ID:** `g2/a1/sk|schauen|idx:510|lv and study LV fields|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `schauen|idx:510`
**Field / path:** `lv and study LV fields`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Na pozeranie","study":{"id":"a1-schauen-study","layout":"standardStudy","translation":"Na pozeranie","explanation":["Hlavná myšlienka: Aktívne sa pozerať alebo pozerať.","Schauen znamená predovšetkým: aktívne pozorovanie.","Často opisuje: akcia.","Schauen znamená aktívne sa pozerať."],"examples":[{"de":"Ich schaue fern.","lv":"Pozerám televíziu."},{"de":"Wir schauen aus dem Fenster.","lv":"Pozeráme sa z okna."},{"de":"Ich schaue fern.","lv":"Pozerám televíziu"}],"comparison":[{"word":"schauen","meaning":"Sledujte (aktívne)","example":"Ich schaue aus dem Fenster. – Pozerám sa z okna."},{"word":"sehen","meaning":"Vidieť (bez úmyslu)","example":"Ich sehe dich. – Vidím ťa"}],"tip":["Schauen = pozerať sa","Použite schauen, keď kontext zodpovedá tomuto významu."],"important":["Schauen = pozerať sa.","Aktívne pozorujte alebo pozerajte."],"sectionAccents":{"explanation":{"green":["schauen"]},"examples":[{"de":{"green":["schaue"]},"lv":{}},{"de":{"green":["schauen","schauen"]},"lv":{}},{"de":{"green":["schaue"]},"lv":{}}],"tip":[{}],"important":[{"green":["schauen"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"pozerať sa","study":{"id":"a1-schauen-study","layout":"standardStudy","translation":"pozerať sa","explanation":["Hlavná myšlienka: schauen znamená aktívne sa pozerať alebo pozrieť sa.","Najčastejšie opisuje úmyselné pozeranie.","Ide o činnosť, nie iba o schopnosť niečo vidieť.","Tým sa odlišuje od sehen vo význame vidieť."],"examples":[{"de":"Ich schaue fern.","lv":"Pozerám televíziu."},{"de":"Wir schauen aus dem Fenster.","lv":"Pozeráme sa z okna."},{"de":"Ich schaue fern.","lv":"Pozerám televíziu."}],"comparison":[{"word":"schauen","meaning":"pozerať sa","example":"Ich schaue aus dem Fenster. — Pozerám sa z okna."},{"word":"sehen","meaning":"vidieť","example":"Ich sehe dich. — Vidím ťa."}],"tip":["schauen = pozerať sa","Použite schauen pri aktívnom pozeraní."],"important":["schauen = pozerať sa.","schauen opisuje aktívne pozeranie alebo krátke pozretie."],"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{}]}}}
**Note:** Luna zmenila iba názov; preložená je celá študijná karta.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "schauen",
  "lv": "pozerať sa",
  "level": "A1",
  "study": {
    "id": "a1-schauen-study",
    "layout": "standardStudy",
    "translation": "pozerať sa",
    "explanation": [
      "Hlavná myšlienka: schauen znamená aktívne sa pozerať alebo pozrieť sa.",
      "Najčastejšie opisuje úmyselné pozeranie.",
      "Ide o činnosť, nie iba o schopnosť niečo vidieť.",
      "Tým sa odlišuje od sehen vo význame vidieť."
    ],
    "examples": [
      {
        "de": "Ich schaue fern.",
        "lv": "Pozerám televíziu."
      },
      {
        "de": "Wir schauen aus dem Fenster.",
        "lv": "Pozeráme sa z okna."
      },
      {
        "de": "Ich schaue fern.",
        "lv": "Pozerám televíziu."
      }
    ],
    "comparison": [
      {
        "word": "schauen",
        "meaning": "pozerať sa",
        "example": "Ich schaue aus dem Fenster. — Pozerám sa z okna."
      },
      {
        "word": "sehen",
        "meaning": "vidieť",
        "example": "Ich sehe dich. — Vidím ťa."
      }
    ],
    "tip": [
      "schauen = pozerať sa",
      "Použite schauen pri aktívnom pozeraní."
    ],
    "important": [
      "schauen = pozerať sa.",
      "schauen opisuje aktívne pozeranie alebo krátke pozretie."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 46

**Audit ID:** `LRB092-0046`
**Finding Stable ID:** `g2/a1/sk|Schnee|idx:517|lv|MEANING_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `Schnee|idx:517`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Bude sneh"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sneh"}
**Note:** Presný slovenský názov v základnom tvare.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Schnee",
  "de_article": "der",
  "lv": "sneh",
  "level": "A1"
}
```

---

## Finding 47

**Audit ID:** `LRB092-0047`
**Finding Stable ID:** `g2/a1/sk|schon|idx:521|lv and study LV fields|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `schon|idx:521`
**Field / path:** `lv and study LV fields`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Už","study":{"id":"a1-schon-study","layout":"standardStudy","translation":"Už","explanation":["Hlavná myšlienka: niečo sa už stalo alebo už platí.","Schon hlavne znamená: niečo sa už stalo alebo platí.","Často opisuje: skutočnosť, ktorá nastala, alebo existujúci stav.","Schon už znamená: niečo sa už stalo alebo už platí."],"examples":[{"de":"Ich bin schon zu Hause.","lv":"Už som doma"}],"tip":["Niečo sa už stalo alebo je už v platnosti.","Použite schon, keď kontext zodpovedá tomuto významu."],"important":["Schon = už.","Niečo sa už stalo alebo je už v platnosti."],"sectionAccents":{"explanation":{"blue":["schon"]},"examples":[{"de":{"blue":["schon","schon"]},"lv":{}}],"tip":[{}],"important":[{"blue":["schon"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"už","study":{"id":"a1-schon-study","layout":"standardStudy","translation":"už","explanation":["Hlavná myšlienka: schon vyjadruje, že niečo sa už stalo alebo už platí.","Najčastejšie sa prekladá ako už.","Môže opisovať dokončenú udalosť alebo existujúci stav.","Kontext určuje, čo už nastalo alebo platí."],"examples":[{"de":"Ich bin schon zu Hause.","lv":"Už som doma."}],"tip":["schon znamená už.","Použite ho, keď sa niečo už stalo alebo už platí."],"important":["schon = už.","Vyjadruje uskutočnený dej alebo existujúci stav."],"sectionAccents":{"examples":[{}]}}}
**Note:** Luna zmenila iba názov; preložená je celá študijná karta.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "schon",
  "lv": "už",
  "level": "A1",
  "study": {
    "id": "a1-schon-study",
    "layout": "standardStudy",
    "translation": "už",
    "explanation": [
      "Hlavná myšlienka: schon vyjadruje, že niečo sa už stalo alebo už platí.",
      "Najčastejšie sa prekladá ako už.",
      "Môže opisovať dokončenú udalosť alebo existujúci stav.",
      "Kontext určuje, čo už nastalo alebo platí."
    ],
    "examples": [
      {
        "de": "Ich bin schon zu Hause.",
        "lv": "Už som doma."
      }
    ],
    "tip": [
      "schon znamená už.",
      "Použite ho, keď sa niečo už stalo alebo už platí."
    ],
    "important": [
      "schon = už.",
      "Vyjadruje uskutočnený dej alebo existujúci stav."
    ],
    "sectionAccents": {
      "examples": [
        {}
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB092-0048`
**Finding Stable ID:** `g2/a1/sk|sicher|idx:548|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `sicher|idx:548`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bezpečné • Určite","study":{"id":"a1-sicher","layout":"standardStudy","translation":"Bezpečné • Určite","explanation":["Hlavná myšlienka: sicher ako prídavné meno znamená istý, ako príslovka znamená určite/pravdepodobne.","Keď hovoríme o mieste, situácii alebo osobe, sicher = bezpečné (ein sicherer Ort = bezpečné miesto).","Ako potvrdenie alebo uistenie vo vete, sicher = určite/samozrejme (Das ist sicher wahr. = Určite je to pravda.).","Určite! ako samostatná odpoveď znamená samozrejme!/pravdepodobne!"],"examples":[{"de":"Ist das Wasser sicher?","lv":"Je voda bezpečná?"},{"de":"Kommst du morgen? – Sicher!","lv":"Prídete zajtra - určite!"},{"de":"Er ist sicher zu Hause.","lv":"Asi je doma."},{"de":"Das ist eine sichere Lösung.","lv":"Toto je bezpečné riešenie."},{"de":"Ich bin mir sicher.","lv":"Som si istý"},{"de":"Fahr sicher!","lv":"Jazdite bezpečne!"}],"tip":["O mieste alebo situácii (bezpečnosť) → bezpečné.","Ako presvedčenie alebo potvrdenie vo vete → určite/pravdepodobne."],"important":["Sicher = bezpečný (prídavné meno) ALEBO určite/pravdepodobne (príslovka).","Sich sicher sein = určite."],"sectionAccents":{"explanation":{"blue":["sicher"]},"examples":[{"de":{"blue":["sicher"]},"lv":{}},{"de":{"green":["Sicher"]},"lv":{}},{"de":{"green":["sicher"]},"lv":{}},{"de":{"blue":["sichere"]},"lv":{}},{"de":{"green":["sicher"]},"lv":{}},{"de":{"blue":["sicher"]},"lv":{}}],"tip":[{},{}],"important":[{},{"green":["sich sicher sein"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bezpečný • určite","study":{"id":"a1-sicher","layout":"standardStudy","translation":"bezpečný • určite","explanation":["Hlavná myšlienka: sicher ako prídavné meno znamená bezpečný, ako príslovka určite alebo pravdepodobne.","Pri mieste, situácii alebo osobe môže označovať bezpečnosť.","Ako potvrdenie alebo vyjadrenie presvedčenia znamená určite či pravdepodobne.","Samostatné Sicher! znamená Iste! alebo Samozrejme!"],"examples":[{"de":"Ist das Wasser sicher?","lv":"Je tá voda bezpečná?"},{"de":"Kommst du morgen? – Sicher!","lv":"Prídeš zajtra? – Iste!"},{"de":"Er ist sicher zu Hause.","lv":"Určite je doma."},{"de":"Das ist eine sichere Lösung.","lv":"Toto je bezpečné riešenie."},{"de":"Ich bin mir sicher.","lv":"Som si istý."},{"de":"Fahr sicher!","lv":"Jazdi bezpečne!"}],"tip":["Pri bezpečnosti → bezpečný.","Pri presvedčení alebo potvrdení → určite • pravdepodobne."],"important":["sicher môže znamenať bezpečný alebo určite.","sich sicher sein = byť si istý."],"sectionAccents":{"examples":[{},{},{},{},{},{}]}}}
**Note:** Preložená celá karta a nepresné „Asi“ nahradené významovo zodpovedajúcim „Určite“.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sicher",
  "lv": "bezpečný • určite",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "bezpečný • určite",
    "explanation": [
      "Hlavná myšlienka: sicher ako prídavné meno znamená bezpečný, ako príslovka určite alebo pravdepodobne.",
      "Pri mieste, situácii alebo osobe môže označovať bezpečnosť.",
      "Ako potvrdenie alebo vyjadrenie presvedčenia znamená určite či pravdepodobne.",
      "Samostatné Sicher! znamená Iste! alebo Samozrejme!"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Je tá voda bezpečná?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Prídeš zajtra? – Iste!"
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
      "Pri bezpečnosti → bezpečný.",
      "Pri presvedčení alebo potvrdení → určite • pravdepodobne."
    ],
    "important": [
      "sicher môže znamenať bezpečný alebo určite.",
      "sich sicher sein = byť si istý."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 49

**Audit ID:** `LRB092-0049`
**Finding Stable ID:** `g2/a1/sk|sie|idx:549|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `sie|idx:549`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Oni/ona","study":{"id":"a1-sie-study","layout":"standardStudy","translation":"Oni/ona","explanation":["Hlavná myšlienka: Množné číslo – hovorí o viac ako jednej osobe. Sloveso končí na -en: kochen, essen, gehen.","Sie znamená hlavne: jedna žena.","Často charakterizované: slovesom v jednotnom čísle (-t).","Sie znamená hlavne: niekoľko ľudí.","Často charakterizované: sloveso v množnom čísle (-en).","Sie znamená hlavne: zdvorilá adresa.","Často opísané: nevyhnutne s veľkým S.","Malé sie znamená ju, keď je sloveso jednotného čísla (Sie kocht = varí)."],"examples":[{"de":"Sie kochen.","lv":"Oni varia."},{"de":"Sie kocht.","lv":"Ona varí."},{"de":"Sie isst.","lv":"Jedáva"},{"de":"Sie kochen.","lv":"Oni varia."},{"de":"Sie spielen Fußball.","lv":"Hrajú futbal."},{"de":"Sie kochen, bitte.","lv":"Varte, prosím"}],"tip":["Množné číslo - označuje viac ako jednu osobu. Sloveso končí na -en: kochen, essen, gehen.","Použite, keď kontext zodpovedá tomuto významu."],"important":["Zdvorilosť vždy s veľkým S: Aug, nie Aug.","Ona: Prepáč. Oni: Milujem ťa. Vy: Sie kochen.","Nesprávne: Sie kocht → Správne: Sie kocht","Nesprávne: Sie kocht (oni) → Správne: Sie kochen"],"sectionAccents":{"explanation":{"green":["sie","kochen"]},"examples":[{"de":{"green":["sie","sie"]},"lv":{}},{"de":{"blue":["sie","sie"]},"lv":{}},{"de":{"blue":["sie","sie"]},"lv":{}},{"de":{"green":["sie","sie"]},"lv":{}},{"de":{"green":["sie","sie"]},"lv":{}},{"de":{"yellow":["sie"]},"lv":{}}],"tip":[{}],"important":[{"green":["nie"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"oni • ony","study":{"id":"a1-sie-study","layout":"standardStudy","translation":"oni • ony","explanation":["Hlavná myšlienka: malé sie s množným slovesom znamená oni alebo ony.","Malé sie so slovesom v jednotnom čísle znamená ona.","Tvar ju sa používa, keď je sie predmetom v akuzatíve.","Pri význame oni alebo ony je sloveso v množnom čísle.","Typická množná forma slovesa sa končí na -en.","Veľké Sie označuje zdvorilé vykanie.","Veľké Sie má tiež sloveso v množnom čísle.","Správny význam určuje kontext, veľké písmeno a tvar slovesa."],"examples":[{"de":"Sie kochen.","lv":"Oni varia."},{"de":"Sie kocht.","lv":"Ona varí."},{"de":"Sie isst.","lv":"Ona je."},{"de":"Sie kochen.","lv":"Oni varia."},{"de":"Sie spielen Fußball.","lv":"Oni hrajú futbal."},{"de":"Sie kochen, bitte.","lv":"Varte, prosím."}],"tip":["Pri množnom sie má sloveso tvar množného čísla.","Tvar slovesa a kontext rozlišujú významy sie."],"important":["Zdvorilé Sie sa píše s veľkým S.","Ona: sie kocht. Oni alebo ony: sie kochen. Vy: Sie kochen.","Malé sie so slovesom v jednotnom čísle neznamená oni alebo ony.","Množné sie používa sloveso v množnom čísle."],"sectionAccents":{"examples":[{},{},{},{},{},{}]}}}
**Note:** Lomka v názve bola nahradená odrážkou a celá karta bola zjednotená podľa všetkých DE príkladov.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sie",
  "lv": "oni • ony",
  "level": "A1",
  "study": {
    "id": "a1-sie-study",
    "layout": "standardStudy",
    "translation": "oni • ony",
    "explanation": [
      "Hlavná myšlienka: malé sie s množným slovesom znamená oni alebo ony.",
      "Malé sie so slovesom v jednotnom čísle znamená ona.",
      "Tvar ju sa používa, keď je sie predmetom v akuzatíve.",
      "Pri význame oni alebo ony je sloveso v množnom čísle.",
      "Typická množná forma slovesa sa končí na -en.",
      "Veľké Sie označuje zdvorilé vykanie.",
      "Veľké Sie má tiež sloveso v množnom čísle.",
      "Správny význam určuje kontext, veľké písmeno a tvar slovesa."
    ],
    "examples": [
      {
        "de": "Sie kochen.",
        "lv": "Oni varia."
      },
      {
        "de": "Sie kocht.",
        "lv": "Ona varí."
      },
      {
        "de": "Sie isst.",
        "lv": "Ona je."
      },
      {
        "de": "Sie kochen.",
        "lv": "Oni varia."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Oni hrajú futbal."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Varte, prosím."
      }
    ],
    "tip": [
      "Pri množnom sie má sloveso tvar množného čísla.",
      "Tvar slovesa a kontext rozlišujú významy sie."
    ],
    "important": [
      "Zdvorilé Sie sa píše s veľkým S.",
      "Ona: sie kocht. Oni alebo ony: sie kochen. Vy: Sie kochen.",
      "Malé sie so slovesom v jednotnom čísle neznamená oni alebo ony.",
      "Množné sie používa sloveso v množnom čísle."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 50

**Audit ID:** `LRB092-0050`
**Finding Stable ID:** `g2/a1/sk|Sie|idx:550|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `Sie|idx:550`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vy","study":{"id":"a1-sie-study-2","layout":"standardStudy","translation":"Vy","explanation":["Hlavná myšlienka: Zdvorilostná adresa - vždy s dodze S. Lotyšsky: vy. Často so slovesom v bežnom množnom čísle.","Sie v podstate znamená: jedna žena.","Často charakterizované: slovesom v jednotnom čísle (-t).","Sie znamená hlavne: niekoľko ľudí.","Často charakterizované: sloveso v množnom čísle (-en).","Sie znamená hlavne: zdvorilá adresa.","Často opísané: nevyhnutne s veľkým S.","Malé sie znamená ju, keď je sloveso jednotného čísla (Sie kocht = varí)."],"examples":[{"de":"Sie kochen, bitte.","lv":"Varte, prosím."},{"de":"Sie kocht.","lv":"Ona varí."},{"de":"Sie isst.","lv":"Jedáva"},{"de":"Sie kochen.","lv":"Oni varia."},{"de":"Sie spielen Fußball.","lv":"Hrajú futbal."},{"de":"Sie kochen, bitte.","lv":"Varte, prosím"}],"tip":["Zdvorilostná adresa - vždy s dodze S. Lotyšsky: vy. Často so slovesom v bežnom množnom čísle.","Použite Sie, keď je kontext vhodný pre tento význam."],"important":["Zdvorilosť vždy s veľkým S: Aug, nie Aug.","Ona: Prepáč. Oni: Milujem ťa. Vy: Sie kochen.","Nesprávne: Sie kocht → Správne: Sie kocht","Nesprávne: Sie kocht (oni) → Správne: Sie kochen"],"sectionAccents":{"explanation":{"yellow":["Sie","kocht"]},"examples":[{"de":{"yellow":["Sie","sie"]},"lv":{}},{"de":{"yellow":["Sie","sie"]},"lv":{}},{"de":{"yellow":["Sie","sie"]},"lv":{}},{"de":{"yellow":["Sie","sie"]},"lv":{}},{"de":{"yellow":["Sie","sie"]},"lv":{}},{"de":{"yellow":["Sie","sie"]},"lv":{}}],"tip":[{}],"important":[{"yellow":["nie"]}]}}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vy","study":{"id":"a1-sie-study-2","layout":"standardStudy","translation":"vy","explanation":["Hlavná myšlienka: Sie s veľkým S je zdvorilé oslovenie, po slovensky vy.","Malé sie so slovesom v jednotnom čísle môže znamenať ona.","Malé sie so slovesom v množnom čísle môže znamenať oni alebo ony.","Zdvorilé Sie sa vždy píše s veľkým S.","Pri zdvorilom Sie má sloveso tvar množného čísla.","Sie môže zdvorilo oslovovať jednu aj viac osôb.","Na začiatku vety treba význam určiť podľa slovesa a kontextu.","Malé sie môže znamenať ona, ju alebo oni • ony."],"examples":[{"de":"Sie kochen, bitte.","lv":"Varte, prosím."},{"de":"Sie kocht.","lv":"Ona varí."},{"de":"Sie isst.","lv":"Ona je."},{"de":"Sie kochen.","lv":"Oni varia."},{"de":"Sie spielen Fußball.","lv":"Oni hrajú futbal."},{"de":"Sie kochen, bitte.","lv":"Varte, prosím."}],"tip":["Zdvorilé Sie sa vždy píše s veľkým S.","Pri tomto význame má sloveso tvar množného čísla."],"important":["Zdvorilé Sie sa vždy píše s veľkým S.","Sie kochen môže podľa kontextu znamenať Vy varíte alebo Oni varia.","Sie kocht znamená Ona varí, nie zdvorilé vykanie.","Veľké písmeno sa nedá spoľahlivo určiť iba na začiatku vety; rozhoduje aj kontext."],"sectionAccents":{"examples":[{},{},{},{},{},{}]}}}
**Note:** Opravená vnútorná nejednotnosť rovnakého DE príkladu a preložená celá karta bez lomiek.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Sie",
  "lv": "vy",
  "level": "A1",
  "study": {
    "id": "a1-sie-study-2",
    "layout": "standardStudy",
    "translation": "vy",
    "explanation": [
      "Hlavná myšlienka: Sie s veľkým S je zdvorilé oslovenie, po slovensky vy.",
      "Malé sie so slovesom v jednotnom čísle môže znamenať ona.",
      "Malé sie so slovesom v množnom čísle môže znamenať oni alebo ony.",
      "Zdvorilé Sie sa vždy píše s veľkým S.",
      "Pri zdvorilom Sie má sloveso tvar množného čísla.",
      "Sie môže zdvorilo oslovovať jednu aj viac osôb.",
      "Na začiatku vety treba význam určiť podľa slovesa a kontextu.",
      "Malé sie môže znamenať ona, ju alebo oni • ony."
    ],
    "examples": [
      {
        "de": "Sie kochen, bitte.",
        "lv": "Varte, prosím."
      },
      {
        "de": "Sie kocht.",
        "lv": "Ona varí."
      },
      {
        "de": "Sie isst.",
        "lv": "Ona je."
      },
      {
        "de": "Sie kochen.",
        "lv": "Oni varia."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Oni hrajú futbal."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Varte, prosím."
      }
    ],
    "tip": [
      "Zdvorilé Sie sa vždy píše s veľkým S.",
      "Pri tomto význame má sloveso tvar množného čísla."
    ],
    "important": [
      "Zdvorilé Sie sa vždy píše s veľkým S.",
      "Sie kochen môže podľa kontextu znamenať Vy varíte alebo Oni varia.",
      "Sie kocht znamená Ona varí, nie zdvorilé vykanie.",
      "Veľké písmeno sa nedá spoľahlivo určiť iba na začiatku vety; rozhoduje aj kontext."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

---
