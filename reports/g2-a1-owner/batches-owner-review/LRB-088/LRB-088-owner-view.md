# G2/A1 LRB LRB-088 — OWNER VIEW

**Batch:** LRB-088
**Rows:** 50/50
**Languages:** SK 50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T13:17:00.557Z
**Source commit:** `ecc92b2dc2fef84d2f1d23b6818e8e50c6807641`
**Branch:** `cursor/lrb-088-owner-authorization-ed35`
**Overrides SHA256:** `d3da4dc065da97dd1b699c4eda96025c6df23e875d16aaf7e0a86d2cb0cb6219`
**Classification:** `G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED`

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB088-0001`
**Finding Stable ID:** `g2/a1/sk|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-einmal`
**Field / path:** `a1.card.a1-einmal.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Raz • Raz
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Raz","study":{"translation":"Raz","explanation":["Hlavná myšlienka: einmal označuje jeden výskyt deja alebo neurčitú chvíľu v minulosti.","Pri počte opakovaní einmal znamená, že sa niečo stane raz.","V rozprávaní môže einmal uvádzať udalosť, ktorá sa kedysi stala."],"examples":[{"de":"Ich war einmal in Berlin.","lv":"Raz som bol v Berlíne."},{"de":"Ich war einmal in Berlin.","lv":"Raz som bol v Berlíne."}],"tip":["einmal = raz.","Kontext ukazuje, či ide o jeden výskyt alebo neurčitú chvíľu v minulosti."],"important":["Pri počte opakovaní einmal znamená raz.","V rozprávaní môže einmal odkazovať na neurčitú minulosť."],"id":"a1-einmal","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "Raz",
  "level": "A1",
  "study": {
    "translation": "Raz",
    "explanation": [
      "Hlavná myšlienka: einmal označuje jeden výskyt deja alebo neurčitú chvíľu v minulosti.",
      "Pri počte opakovaní einmal znamená, že sa niečo stane raz.",
      "V rozprávaní môže einmal uvádzať udalosť, ktorá sa kedysi stala."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Raz som bol v Berlíne."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Raz som bol v Berlíne."
      }
    ],
    "tip": [
      "einmal = raz.",
      "Kontext ukazuje, či ide o jeden výskyt alebo neurčitú chvíľu v minulosti."
    ],
    "important": [
      "Pri počte opakovaní einmal znamená raz.",
      "V rozprávaní môže einmal odkazovať na neurčitú minulosť."
    ],
    "id": "a1-einmal",
    "layout": "standardStudy"
  }
}
```

---

## Finding 2

**Audit ID:** `LRB088-0002`
**Finding Stable ID:** `g2/a1/sk|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-eis`
**Field / path:** `a1.card.a1-eis.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Zmrzlina • Zmrzlina
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ľad • Zmrzlina","study":{"translation":"Ľad • Zmrzlina","explanation":["Hlavná myšlienka: das Eis môže znamenať ľad aj zmrzlinu.","Ak ide o studenú zamrznutú vodu, po slovensky sa zvyčajne povie ľad.","Ak ide o jedlo alebo dezert, das Eis v bežnej nemčine veľmi často znamená zmrzlinu.","Kontext zvyčajne hneď ukáže, ktorý význam je myslený.","Na úrovni A1 sú dôležité najmä spojenia ein Eis essen a Eis im Glas."],"examples":[{"de":"Ich esse ein Eis.","lv":"Jem zmrzlinu."},{"de":"Möchtest du ein Eis?","lv":"Chceš zmrzlinu?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"V zime je na jazere ľad."},{"de":"Das Eis ist kalt.","lv":"Ľad je studený."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Dám si zmrzlinu s čokoládou."}],"comparison":[{"word":"das Eis","meaning":"ľad • zmrzlina","example":"Ich esse ein Eis. = Jem zmrzlinu."},{"word":"der Schnee","meaning":"sneh","example":"Der Schnee ist weiß. = Sneh je biely."},{"word":"kalt","meaning":"studený","example":"Das Wasser ist kalt. = Voda je studená."},{"word":"das Dessert","meaning":"dezert","example":"Eis ist ein Dessert. = Zmrzlina je dezert."}],"tip":{"text":"Zapamätaj si: jedlo → zmrzlina; zima alebo voda → ľad."},"important":["V slovenčine sú ľad a zmrzlina dve rôzne slová, ale v nemčine sa pre oba významy často používa das Eis.","Rozhoduje kontext: pri jedle ide o zmrzlinu, pri studenom povrchu alebo vode o ľad."],"id":"a1-eis","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Ľad • Zmrzlina",
  "level": "A1",
  "study": {
    "translation": "Ľad • Zmrzlina",
    "explanation": [
      "Hlavná myšlienka: das Eis môže znamenať ľad aj zmrzlinu.",
      "Ak ide o studenú zamrznutú vodu, po slovensky sa zvyčajne povie ľad.",
      "Ak ide o jedlo alebo dezert, das Eis v bežnej nemčine veľmi často znamená zmrzlinu.",
      "Kontext zvyčajne hneď ukáže, ktorý význam je myslený.",
      "Na úrovni A1 sú dôležité najmä spojenia ein Eis essen a Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Jem zmrzlinu."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Chceš zmrzlinu?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "V zime je na jazere ľad."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Ľad je studený."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Dám si zmrzlinu s čokoládou."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "ľad • zmrzlina",
        "example": "Ich esse ein Eis. = Jem zmrzlinu."
      },
      {
        "word": "der Schnee",
        "meaning": "sneh",
        "example": "Der Schnee ist weiß. = Sneh je biely."
      },
      {
        "word": "kalt",
        "meaning": "studený",
        "example": "Das Wasser ist kalt. = Voda je studená."
      },
      {
        "word": "das Dessert",
        "meaning": "dezert",
        "example": "Eis ist ein Dessert. = Zmrzlina je dezert."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: jedlo → zmrzlina; zima alebo voda → ľad."
    },
    "important": [
      "V slovenčine sú ľad a zmrzlina dve rôzne slová, ale v nemčine sa pre oba významy často používa das Eis.",
      "Rozhoduje kontext: pri jedle ide o zmrzlinu, pri studenom povrchu alebo vode o ľad."
    ],
    "id": "a1-eis",
    "layout": "standardStudy"
  }
}
```

---

## Finding 3

**Audit ID:** `LRB088-0003`
**Finding Stable ID:** `g2/a1/sk|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-eis`
**Field / path:** `a1.card.a1-eis.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Zmrzlina • Zmrzlina
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ľad • Zmrzlina","study":{"translation":"Ľad • Zmrzlina","explanation":["Hlavná myšlienka: das Eis môže znamenať ľad aj zmrzlinu.","Ak ide o studenú zamrznutú vodu, po slovensky sa zvyčajne povie ľad.","Ak ide o jedlo alebo dezert, das Eis v bežnej nemčine veľmi často znamená zmrzlinu.","Kontext zvyčajne hneď ukáže, ktorý význam je myslený.","Na úrovni A1 sú dôležité najmä spojenia ein Eis essen a Eis im Glas."],"examples":[{"de":"Ich esse ein Eis.","lv":"Jem zmrzlinu."},{"de":"Möchtest du ein Eis?","lv":"Chceš zmrzlinu?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"V zime je na jazere ľad."},{"de":"Das Eis ist kalt.","lv":"Ľad je studený."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Dám si zmrzlinu s čokoládou."}],"comparison":[{"word":"das Eis","meaning":"ľad • zmrzlina","example":"Ich esse ein Eis. = Jem zmrzlinu."},{"word":"der Schnee","meaning":"sneh","example":"Der Schnee ist weiß. = Sneh je biely."},{"word":"kalt","meaning":"studený","example":"Das Wasser ist kalt. = Voda je studená."},{"word":"das Dessert","meaning":"dezert","example":"Eis ist ein Dessert. = Zmrzlina je dezert."}],"tip":{"text":"Zapamätaj si: jedlo → zmrzlina; zima alebo voda → ľad."},"important":["V slovenčine sú ľad a zmrzlina dve rôzne slová, ale v nemčine sa pre oba významy často používa das Eis.","Rozhoduje kontext: pri jedle ide o zmrzlinu, pri studenom povrchu alebo vode o ľad."],"id":"a1-eis","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Ľad • Zmrzlina",
  "level": "A1",
  "study": {
    "translation": "Ľad • Zmrzlina",
    "explanation": [
      "Hlavná myšlienka: das Eis môže znamenať ľad aj zmrzlinu.",
      "Ak ide o studenú zamrznutú vodu, po slovensky sa zvyčajne povie ľad.",
      "Ak ide o jedlo alebo dezert, das Eis v bežnej nemčine veľmi často znamená zmrzlinu.",
      "Kontext zvyčajne hneď ukáže, ktorý význam je myslený.",
      "Na úrovni A1 sú dôležité najmä spojenia ein Eis essen a Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Jem zmrzlinu."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Chceš zmrzlinu?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "V zime je na jazere ľad."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Ľad je studený."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Dám si zmrzlinu s čokoládou."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "ľad • zmrzlina",
        "example": "Ich esse ein Eis. = Jem zmrzlinu."
      },
      {
        "word": "der Schnee",
        "meaning": "sneh",
        "example": "Der Schnee ist weiß. = Sneh je biely."
      },
      {
        "word": "kalt",
        "meaning": "studený",
        "example": "Das Wasser ist kalt. = Voda je studená."
      },
      {
        "word": "das Dessert",
        "meaning": "dezert",
        "example": "Eis ist ein Dessert. = Zmrzlina je dezert."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: jedlo → zmrzlina; zima alebo voda → ľad."
    },
    "important": [
      "V slovenčine sú ľad a zmrzlina dve rôzne slová, ale v nemčine sa pre oba významy často používa das Eis.",
      "Rozhoduje kontext: pri jedle ide o zmrzlinu, pri studenom povrchu alebo vode o ľad."
    ],
    "id": "a1-eis",
    "layout": "standardStudy"
  }
}
```

---

## Finding 4

**Audit ID:** `LRB088-0004`
**Finding Stable ID:** `g2/a1/sk|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Prvý • Len
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Až • Iba • Najprv","study":{"translation":"Až • Iba • Najprv","explanation":["Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.","erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.","Ich bin erst 18. — Mám iba 18 rokov.","Es ist erst Montag. — Je iba pondelok.","Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Najprv sa uč, potom sa hraj."},{"de":"Ich komme erst morgen.","lv":"Prídem až zajtra."},{"de":"Er ist erst 18 Jahre alt.","lv":"Má iba 18 rokov."},{"de":"Wir essen erst um acht Uhr.","lv":"Jeme až o ôsmej."}],"comparison":[{"word":"erst","meaning":"až • iba • najprv","example":"Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."},{"word":"zuerst","meaning":"najprv • spočiatku","example":"Zuerst frühstücken wir. = Najprv raňajkujeme."},{"word":"nur","meaning":"iba • len","example":"Ich habe nur 5 Euro. = Mám iba 5 eur."},{"word":"dann","meaning":"potom","example":"Dann gehen wir nach Hause. = Potom ideme domov."}],"tip":{"text":"Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."},"important":["erst a zuerst nie sú úplné synonymá.","erst často znamená „až“ alebo „iba“.","zuerst zvyčajne znamená „najprv“."],"id":"a1-erst","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Až • Iba • Najprv",
  "level": "A1",
  "study": {
    "translation": "Až • Iba • Najprv",
    "explanation": [
      "Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.",
      "erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.",
      "Ich bin erst 18. — Mám iba 18 rokov.",
      "Es ist erst Montag. — Je iba pondelok.",
      "Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Najprv sa uč, potom sa hraj."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Prídem až zajtra."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Má iba 18 rokov."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Jeme až o ôsmej."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "až • iba • najprv",
        "example": "Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."
      },
      {
        "word": "zuerst",
        "meaning": "najprv • spočiatku",
        "example": "Zuerst frühstücken wir. = Najprv raňajkujeme."
      },
      {
        "word": "nur",
        "meaning": "iba • len",
        "example": "Ich habe nur 5 Euro. = Mám iba 5 eur."
      },
      {
        "word": "dann",
        "meaning": "potom",
        "example": "Dann gehen wir nach Hause. = Potom ideme domov."
      }
    ],
    "tip": {
      "text": "Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."
    },
    "important": [
      "erst a zuerst nie sú úplné synonymá.",
      "erst často znamená „až“ alebo „iba“.",
      "zuerst zvyčajne znamená „najprv“."
    ],
    "id": "a1-erst",
    "layout": "standardStudy"
  }
}
```

---

## Finding 5

**Audit ID:** `LRB088-0005`
**Finding Stable ID:** `g2/a1/sk|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Prvý • Len
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Až • Iba • Najprv","study":{"translation":"Až • Iba • Najprv","explanation":["Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.","erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.","Ich bin erst 18. — Mám iba 18 rokov.","Es ist erst Montag. — Je iba pondelok.","Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Najprv sa uč, potom sa hraj."},{"de":"Ich komme erst morgen.","lv":"Prídem až zajtra."},{"de":"Er ist erst 18 Jahre alt.","lv":"Má iba 18 rokov."},{"de":"Wir essen erst um acht Uhr.","lv":"Jeme až o ôsmej."}],"comparison":[{"word":"erst","meaning":"až • iba • najprv","example":"Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."},{"word":"zuerst","meaning":"najprv • spočiatku","example":"Zuerst frühstücken wir. = Najprv raňajkujeme."},{"word":"nur","meaning":"iba • len","example":"Ich habe nur 5 Euro. = Mám iba 5 eur."},{"word":"dann","meaning":"potom","example":"Dann gehen wir nach Hause. = Potom ideme domov."}],"tip":{"text":"Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."},"important":["erst a zuerst nie sú úplné synonymá.","erst často znamená „až“ alebo „iba“.","zuerst zvyčajne znamená „najprv“."],"id":"a1-erst","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Až • Iba • Najprv",
  "level": "A1",
  "study": {
    "translation": "Až • Iba • Najprv",
    "explanation": [
      "Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.",
      "erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.",
      "Ich bin erst 18. — Mám iba 18 rokov.",
      "Es ist erst Montag. — Je iba pondelok.",
      "Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Najprv sa uč, potom sa hraj."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Prídem až zajtra."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Má iba 18 rokov."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Jeme až o ôsmej."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "až • iba • najprv",
        "example": "Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."
      },
      {
        "word": "zuerst",
        "meaning": "najprv • spočiatku",
        "example": "Zuerst frühstücken wir. = Najprv raňajkujeme."
      },
      {
        "word": "nur",
        "meaning": "iba • len",
        "example": "Ich habe nur 5 Euro. = Mám iba 5 eur."
      },
      {
        "word": "dann",
        "meaning": "potom",
        "example": "Dann gehen wir nach Hause. = Potom ideme domov."
      }
    ],
    "tip": {
      "text": "Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."
    },
    "important": [
      "erst a zuerst nie sú úplné synonymá.",
      "erst často znamená „až“ alebo „iba“.",
      "zuerst zvyčajne znamená „najprv“."
    ],
    "id": "a1-erst",
    "layout": "standardStudy"
  }
}
```

---

## Finding 6

**Audit ID:** `LRB088-0006`
**Finding Stable ID:** `g2/a1/sk|a1-erst|a1.card.a1-erst.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Prvý často hovorí o čase, postupnosti alebo dosiahnutí bodu • Nur obmedzuje množstvo.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Až • Iba • Najprv","study":{"translation":"Až • Iba • Najprv","explanation":["Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.","erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.","Ich bin erst 18. — Mám iba 18 rokov.","Es ist erst Montag. — Je iba pondelok.","Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Najprv sa uč, potom sa hraj."},{"de":"Ich komme erst morgen.","lv":"Prídem až zajtra."},{"de":"Er ist erst 18 Jahre alt.","lv":"Má iba 18 rokov."},{"de":"Wir essen erst um acht Uhr.","lv":"Jeme až o ôsmej."}],"comparison":[{"word":"erst","meaning":"až • iba • najprv","example":"Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."},{"word":"zuerst","meaning":"najprv • spočiatku","example":"Zuerst frühstücken wir. = Najprv raňajkujeme."},{"word":"nur","meaning":"iba • len","example":"Ich habe nur 5 Euro. = Mám iba 5 eur."},{"word":"dann","meaning":"potom","example":"Dann gehen wir nach Hause. = Potom ideme domov."}],"tip":{"text":"Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."},"important":["erst a zuerst nie sú úplné synonymá.","erst často znamená „až“ alebo „iba“.","zuerst zvyčajne znamená „najprv“."],"id":"a1-erst","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Až • Iba • Najprv",
  "level": "A1",
  "study": {
    "translation": "Až • Iba • Najprv",
    "explanation": [
      "Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.",
      "erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.",
      "Ich bin erst 18. — Mám iba 18 rokov.",
      "Es ist erst Montag. — Je iba pondelok.",
      "Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Najprv sa uč, potom sa hraj."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Prídem až zajtra."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Má iba 18 rokov."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Jeme až o ôsmej."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "až • iba • najprv",
        "example": "Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."
      },
      {
        "word": "zuerst",
        "meaning": "najprv • spočiatku",
        "example": "Zuerst frühstücken wir. = Najprv raňajkujeme."
      },
      {
        "word": "nur",
        "meaning": "iba • len",
        "example": "Ich habe nur 5 Euro. = Mám iba 5 eur."
      },
      {
        "word": "dann",
        "meaning": "potom",
        "example": "Dann gehen wir nach Hause. = Potom ideme domov."
      }
    ],
    "tip": {
      "text": "Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."
    },
    "important": [
      "erst a zuerst nie sú úplné synonymá.",
      "erst často znamená „až“ alebo „iba“.",
      "zuerst zvyčajne znamená „najprv“."
    ],
    "id": "a1-erst",
    "layout": "standardStudy"
  }
}
```

---

## Finding 7

**Audit ID:** `LRB088-0007`
**Finding Stable ID:** `g2/a1/sk|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Prvý • Len
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Až • Iba • Najprv","study":{"translation":"Až • Iba • Najprv","explanation":["Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.","erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.","Ich bin erst 18. — Mám iba 18 rokov.","Es ist erst Montag. — Je iba pondelok.","Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Najprv sa uč, potom sa hraj."},{"de":"Ich komme erst morgen.","lv":"Prídem až zajtra."},{"de":"Er ist erst 18 Jahre alt.","lv":"Má iba 18 rokov."},{"de":"Wir essen erst um acht Uhr.","lv":"Jeme až o ôsmej."}],"comparison":[{"word":"erst","meaning":"až • iba • najprv","example":"Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."},{"word":"zuerst","meaning":"najprv • spočiatku","example":"Zuerst frühstücken wir. = Najprv raňajkujeme."},{"word":"nur","meaning":"iba • len","example":"Ich habe nur 5 Euro. = Mám iba 5 eur."},{"word":"dann","meaning":"potom","example":"Dann gehen wir nach Hause. = Potom ideme domov."}],"tip":{"text":"Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."},"important":["erst a zuerst nie sú úplné synonymá.","erst často znamená „až“ alebo „iba“.","zuerst zvyčajne znamená „najprv“."],"id":"a1-erst","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Až • Iba • Najprv",
  "level": "A1",
  "study": {
    "translation": "Až • Iba • Najprv",
    "explanation": [
      "Hlavná myšlienka: erst často znamená až alebo iba, v spojení s poradím aj najprv.",
      "erst často naznačuje, že sa niečo deje neskôr, než sa očakávalo.",
      "Ich bin erst 18. — Mám iba 18 rokov.",
      "Es ist erst Montag. — Je iba pondelok.",
      "Erst lernen, dann spielen. — Najprv sa uč, potom sa hraj."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Najprv sa uč, potom sa hraj."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Prídem až zajtra."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Má iba 18 rokov."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Jeme až o ôsmej."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "až • iba • najprv",
        "example": "Erst lernen, dann spielen. = Najprv sa uč, potom sa hraj."
      },
      {
        "word": "zuerst",
        "meaning": "najprv • spočiatku",
        "example": "Zuerst frühstücken wir. = Najprv raňajkujeme."
      },
      {
        "word": "nur",
        "meaning": "iba • len",
        "example": "Ich habe nur 5 Euro. = Mám iba 5 eur."
      },
      {
        "word": "dann",
        "meaning": "potom",
        "example": "Dann gehen wir nach Hause. = Potom ideme domov."
      }
    ],
    "tip": {
      "text": "Pri čase alebo dosiahnutí určitého bodu býva erst často „až/iba“; pri poradí môže znamenať „najprv“."
    },
    "important": [
      "erst a zuerst nie sú úplné synonymá.",
      "erst často znamená „až“ alebo „iba“.",
      "zuerst zvyčajne znamená „najprv“."
    ],
    "id": "a1-erst",
    "layout": "standardStudy"
  }
}
```

---

## Finding 8

**Audit ID:** `LRB088-0008`
**Finding Stable ID:** `g2/a1/sk|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Do • Do • Neosobná forma
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"To • Ono • Neosobná forma","study":{"translation":"To • Ono • Neosobná forma","explanation":["Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.","Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."],"examples":[{"de":"Es regnet.","lv":"Prší."},{"de":"Es ist kalt.","lv":"Je zima."},{"de":"Das Kind schläft.","lv":"Dieťa spí."},{"de":"Es ist müde.","lv":"Je unavené."}],"comparison":[{"word":"es","meaning":"to • ono • neosobná forma","example":"Es regnet. = Prší."},{"word":"ich","meaning":"ja","example":"Ich lerne Deutsch. = Učím sa po nemecky."}],"info":["Slovenské „ja“ = nemecké „ich“.","Nemecké „es“ = to, ono alebo neosobná forma."],"tip":{"text":"Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."},"important":["ich a es nie sú to isté.","Nemecké es neznamená slovenské „ja“.","Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."],"id":"a1-es","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "To • Ono • Neosobná forma",
  "level": "A1",
  "study": {
    "translation": "To • Ono • Neosobná forma",
    "explanation": [
      "Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.",
      "Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Prší."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Je zima."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Dieťa spí."
      },
      {
        "de": "Es ist müde.",
        "lv": "Je unavené."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "to • ono • neosobná forma",
        "example": "Es regnet. = Prší."
      },
      {
        "word": "ich",
        "meaning": "ja",
        "example": "Ich lerne Deutsch. = Učím sa po nemecky."
      }
    ],
    "info": [
      "Slovenské „ja“ = nemecké „ich“.",
      "Nemecké „es“ = to, ono alebo neosobná forma."
    ],
    "tip": {
      "text": "Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."
    },
    "important": [
      "ich a es nie sú to isté.",
      "Nemecké es neznamená slovenské „ja“.",
      "Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."
    ],
    "id": "a1-es",
    "layout": "standardStudy"
  }
}
```

---

## Finding 9

**Audit ID:** `LRB088-0009`
**Finding Stable ID:** `g2/a1/sk|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** to • bezosôbna forma
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"To • Ono • Neosobná forma","study":{"translation":"To • Ono • Neosobná forma","explanation":["Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.","Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."],"examples":[{"de":"Es regnet.","lv":"Prší."},{"de":"Es ist kalt.","lv":"Je zima."},{"de":"Das Kind schläft.","lv":"Dieťa spí."},{"de":"Es ist müde.","lv":"Je unavené."}],"comparison":[{"word":"es","meaning":"to • ono • neosobná forma","example":"Es regnet. = Prší."},{"word":"ich","meaning":"ja","example":"Ich lerne Deutsch. = Učím sa po nemecky."}],"info":["Slovenské „ja“ = nemecké „ich“.","Nemecké „es“ = to, ono alebo neosobná forma."],"tip":{"text":"Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."},"important":["ich a es nie sú to isté.","Nemecké es neznamená slovenské „ja“.","Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."],"id":"a1-es","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "To • Ono • Neosobná forma",
  "level": "A1",
  "study": {
    "translation": "To • Ono • Neosobná forma",
    "explanation": [
      "Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.",
      "Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Prší."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Je zima."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Dieťa spí."
      },
      {
        "de": "Es ist müde.",
        "lv": "Je unavené."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "to • ono • neosobná forma",
        "example": "Es regnet. = Prší."
      },
      {
        "word": "ich",
        "meaning": "ja",
        "example": "Ich lerne Deutsch. = Učím sa po nemecky."
      }
    ],
    "info": [
      "Slovenské „ja“ = nemecké „ich“.",
      "Nemecké „es“ = to, ono alebo neosobná forma."
    ],
    "tip": {
      "text": "Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."
    },
    "important": [
      "ich a es nie sú to isté.",
      "Nemecké es neznamená slovenské „ja“.",
      "Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."
    ],
    "id": "a1-es",
    "layout": "standardStudy"
  }
}
```

---

## Finding 10

**Audit ID:** `LRB088-0010`
**Finding Stable ID:** `g2/a1/sk|a1-es|a1.card.a1-es.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Lotyšské „ja“ je v nemčine ich • Nemecké es často znamená toto/tie alebo sa neprekladá.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"To • Ono • Neosobná forma","study":{"translation":"To • Ono • Neosobná forma","explanation":["Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.","Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."],"examples":[{"de":"Es regnet.","lv":"Prší."},{"de":"Es ist kalt.","lv":"Je zima."},{"de":"Das Kind schläft.","lv":"Dieťa spí."},{"de":"Es ist müde.","lv":"Je unavené."}],"comparison":[{"word":"es","meaning":"to • ono • neosobná forma","example":"Es regnet. = Prší."},{"word":"ich","meaning":"ja","example":"Ich lerne Deutsch. = Učím sa po nemecky."}],"info":["Slovenské „ja“ = nemecké „ich“.","Nemecké „es“ = to, ono alebo neosobná forma."],"tip":{"text":"Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."},"important":["ich a es nie sú to isté.","Nemecké es neznamená slovenské „ja“.","Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."],"id":"a1-es","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "To • Ono • Neosobná forma",
  "level": "A1",
  "study": {
    "translation": "To • Ono • Neosobná forma",
    "explanation": [
      "Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.",
      "Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Prší."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Je zima."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Dieťa spí."
      },
      {
        "de": "Es ist müde.",
        "lv": "Je unavené."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "to • ono • neosobná forma",
        "example": "Es regnet. = Prší."
      },
      {
        "word": "ich",
        "meaning": "ja",
        "example": "Ich lerne Deutsch. = Učím sa po nemecky."
      }
    ],
    "info": [
      "Slovenské „ja“ = nemecké „ich“.",
      "Nemecké „es“ = to, ono alebo neosobná forma."
    ],
    "tip": {
      "text": "Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."
    },
    "important": [
      "ich a es nie sú to isté.",
      "Nemecké es neznamená slovenské „ja“.",
      "Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."
    ],
    "id": "a1-es",
    "layout": "standardStudy"
  }
}
```

---

## Finding 11

**Audit ID:** `LRB088-0011`
**Finding Stable ID:** `g2/a1/sk|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Do • Do • Neosobná forma
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"To • Ono • Neosobná forma","study":{"translation":"To • Ono • Neosobná forma","explanation":["Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.","Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."],"examples":[{"de":"Es regnet.","lv":"Prší."},{"de":"Es ist kalt.","lv":"Je zima."},{"de":"Das Kind schläft.","lv":"Dieťa spí."},{"de":"Es ist müde.","lv":"Je unavené."}],"comparison":[{"word":"es","meaning":"to • ono • neosobná forma","example":"Es regnet. = Prší."},{"word":"ich","meaning":"ja","example":"Ich lerne Deutsch. = Učím sa po nemecky."}],"info":["Slovenské „ja“ = nemecké „ich“.","Nemecké „es“ = to, ono alebo neosobná forma."],"tip":{"text":"Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."},"important":["ich a es nie sú to isté.","Nemecké es neznamená slovenské „ja“.","Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."],"id":"a1-es","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "To • Ono • Neosobná forma",
  "level": "A1",
  "study": {
    "translation": "To • Ono • Neosobná forma",
    "explanation": [
      "Hlavná myšlienka: es je zámeno stredného rodu a používa sa aj v neosobných vetách.",
      "Podľa kontextu sa prekladá ako to alebo ono, prípadne sa do slovenčiny vôbec neprekladá."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Prší."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Je zima."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Dieťa spí."
      },
      {
        "de": "Es ist müde.",
        "lv": "Je unavené."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "to • ono • neosobná forma",
        "example": "Es regnet. = Prší."
      },
      {
        "word": "ich",
        "meaning": "ja",
        "example": "Ich lerne Deutsch. = Učím sa po nemecky."
      }
    ],
    "info": [
      "Slovenské „ja“ = nemecké „ich“.",
      "Nemecké „es“ = to, ono alebo neosobná forma."
    ],
    "tip": {
      "text": "Zapamätaj si: slovenské „ja“ je po nemecky ich, nie es."
    },
    "important": [
      "ich a es nie sú to isté.",
      "Nemecké es neznamená slovenské „ja“.",
      "Slovenské „ja“ je po nemecky ich; nemecké es často znamená to alebo ono, prípadne sa neprekladá."
    ],
    "id": "a1-es",
    "layout": "standardStudy"
  }
}
```

---

## Finding 12

**Audit ID:** `LRB088-0012`
**Finding Stable ID:** `g2/a1/sk|a1-essen-study|a1.card.a1-essen-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-essen-study`
**Field / path:** `a1.card.a1-essen-study.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Jedlo • Jedlo
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Jedlo","study":{"translation":"Jedlo","explanation":["Hlavná myšlienka: das Essen je podstatné meno a znamená jedlo.","Sloveso essen znamená jesť.","Podstatné meno das Essen sa píše s veľkým E a používa sa s členom.","Význam podstatného mena alebo slovesa ukazuje pravopis a vetný kontext."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Jedlo chutí dobre."},{"de":"Was wollt ihr essen?","lv":"Čo chcete jesť?"},{"de":"Wir essen um 12 Uhr.","lv":"Jeme o dvanástej."},{"de":"Das Essen ist fertig.","lv":"Jedlo je hotové."},{"de":"Das Essen schmeckt sehr gut.","lv":"Jedlo chutí veľmi dobre."},{"de":"Das Essen schmeckt gut.","lv":"Jedlo chutí dobre."}],"tip":["das Essen = jedlo.","essen = jesť."],"important":["essen je sloveso bez člena.","das Essen je podstatné meno a nie je to isté ako essen.","Činnosť: essen.","Podstatné meno: das Essen."],"id":"a1-essen-study","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Jedlo",
  "level": "A1",
  "study": {
    "translation": "Jedlo",
    "explanation": [
      "Hlavná myšlienka: das Essen je podstatné meno a znamená jedlo.",
      "Sloveso essen znamená jesť.",
      "Podstatné meno das Essen sa píše s veľkým E a používa sa s členom.",
      "Význam podstatného mena alebo slovesa ukazuje pravopis a vetný kontext."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Jedlo chutí dobre."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Čo chcete jesť?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Jeme o dvanástej."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Jedlo je hotové."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Jedlo chutí veľmi dobre."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Jedlo chutí dobre."
      }
    ],
    "tip": [
      "das Essen = jedlo.",
      "essen = jesť."
    ],
    "important": [
      "essen je sloveso bez člena.",
      "das Essen je podstatné meno a nie je to isté ako essen.",
      "Činnosť: essen.",
      "Podstatné meno: das Essen."
    ],
    "id": "a1-essen-study",
    "layout": "standardStudy"
  }
}
```

---

## Finding 13

**Audit ID:** `LRB088-0013`
**Finding Stable ID:** `g2/a1/sk|a1-essen-study|a1.card.a1-essen-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-essen-study`
**Field / path:** `a1.card.a1-essen-study.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Jedlo • Jedlo
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Jedlo","study":{"translation":"Jedlo","explanation":["Hlavná myšlienka: das Essen je podstatné meno a znamená jedlo.","Sloveso essen znamená jesť.","Podstatné meno das Essen sa píše s veľkým E a používa sa s členom.","Význam podstatného mena alebo slovesa ukazuje pravopis a vetný kontext."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Jedlo chutí dobre."},{"de":"Was wollt ihr essen?","lv":"Čo chcete jesť?"},{"de":"Wir essen um 12 Uhr.","lv":"Jeme o dvanástej."},{"de":"Das Essen ist fertig.","lv":"Jedlo je hotové."},{"de":"Das Essen schmeckt sehr gut.","lv":"Jedlo chutí veľmi dobre."},{"de":"Das Essen schmeckt gut.","lv":"Jedlo chutí dobre."}],"tip":["das Essen = jedlo.","essen = jesť."],"important":["essen je sloveso bez člena.","das Essen je podstatné meno a nie je to isté ako essen.","Činnosť: essen.","Podstatné meno: das Essen."],"id":"a1-essen-study","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Jedlo",
  "level": "A1",
  "study": {
    "translation": "Jedlo",
    "explanation": [
      "Hlavná myšlienka: das Essen je podstatné meno a znamená jedlo.",
      "Sloveso essen znamená jesť.",
      "Podstatné meno das Essen sa píše s veľkým E a používa sa s členom.",
      "Význam podstatného mena alebo slovesa ukazuje pravopis a vetný kontext."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Jedlo chutí dobre."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Čo chcete jesť?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Jeme o dvanástej."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Jedlo je hotové."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Jedlo chutí veľmi dobre."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Jedlo chutí dobre."
      }
    ],
    "tip": [
      "das Essen = jedlo.",
      "essen = jesť."
    ],
    "important": [
      "essen je sloveso bez člena.",
      "das Essen je podstatné meno a nie je to isté ako essen.",
      "Činnosť: essen.",
      "Podstatné meno: das Essen."
    ],
    "id": "a1-essen-study",
    "layout": "standardStudy"
  }
}
```

---

## Finding 14

**Audit ID:** `LRB088-0014`
**Finding Stable ID:** `g2/a1/sk|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-etwas`
**Field / path:** `a1.card.a1-etwas.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Niečo • Trochu
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Niečo • Trochu","study":{"translation":"Niečo • Trochu","explanation":["Hlavná myšlienka: etwas najčastejšie znamená niečo. Pred prídavným menom môže znamenať trochu.","Ich habe etwas gesehen. — Niečo som videl.","Das ist etwas teuer. — Je to trochu drahé."],"examples":[{"de":"Ich möchte etwas trinken.","lv":"Chcel by som niečo piť."},{"de":"Hast du etwas Zeit?","lv":"Máš trochu času?"},{"de":"Ich bin etwas müde.","lv":"Som trochu unavený."},{"de":"Ich habe etwas für dich.","lv":"Mám pre teba niečo."},{"de":"Das ist etwas teuer.","lv":"Je to trochu drahé."}],"comparison":[{"word":"etwas","meaning":"niečo • trochu","example":"Ich brauche etwas. = Niečo potrebujem."},{"word":"was","meaning":"niečo (hovorovo)","example":"Willst du was trinken? = Chceš niečo piť?"},{"word":"ein bisschen","meaning":"trochu","example":"Ich bin ein bisschen müde. = Som trochu unavený."},{"word":"nichts","meaning":"nič","example":"Ich brauche nichts. = Nič nepotrebujem."}],"tip":{"text":"Zapamätaj si: vec → niečo; miera → trochu."},"important":["Pred prídavným menom etwas často znamená trochu.","etwas nie je to isté ako nichts: etwas znamená, že niečo existuje, nichts znamená nič.","Slovenský tvar závisí od vety, napríklad etwas trinken = niečo piť."],"id":"a1-etwas","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "Niečo • Trochu",
  "level": "A1",
  "study": {
    "translation": "Niečo • Trochu",
    "explanation": [
      "Hlavná myšlienka: etwas najčastejšie znamená niečo. Pred prídavným menom môže znamenať trochu.",
      "Ich habe etwas gesehen. — Niečo som videl.",
      "Das ist etwas teuer. — Je to trochu drahé."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Chcel by som niečo piť."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Máš trochu času?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Som trochu unavený."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Mám pre teba niečo."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Je to trochu drahé."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "niečo • trochu",
        "example": "Ich brauche etwas. = Niečo potrebujem."
      },
      {
        "word": "was",
        "meaning": "niečo (hovorovo)",
        "example": "Willst du was trinken? = Chceš niečo piť?"
      },
      {
        "word": "ein bisschen",
        "meaning": "trochu",
        "example": "Ich bin ein bisschen müde. = Som trochu unavený."
      },
      {
        "word": "nichts",
        "meaning": "nič",
        "example": "Ich brauche nichts. = Nič nepotrebujem."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: vec → niečo; miera → trochu."
    },
    "important": [
      "Pred prídavným menom etwas často znamená trochu.",
      "etwas nie je to isté ako nichts: etwas znamená, že niečo existuje, nichts znamená nič.",
      "Slovenský tvar závisí od vety, napríklad etwas trinken = niečo piť."
    ],
    "id": "a1-etwas",
    "layout": "standardStudy"
  }
}
```

---

## Finding 15

**Audit ID:** `LRB088-0015`
**Finding Stable ID:** `g2/a1/sk|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-etwas`
**Field / path:** `a1.card.a1-etwas.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Niečo • Trochu
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Niečo • Trochu","study":{"translation":"Niečo • Trochu","explanation":["Hlavná myšlienka: etwas najčastejšie znamená niečo. Pred prídavným menom môže znamenať trochu.","Ich habe etwas gesehen. — Niečo som videl.","Das ist etwas teuer. — Je to trochu drahé."],"examples":[{"de":"Ich möchte etwas trinken.","lv":"Chcel by som niečo piť."},{"de":"Hast du etwas Zeit?","lv":"Máš trochu času?"},{"de":"Ich bin etwas müde.","lv":"Som trochu unavený."},{"de":"Ich habe etwas für dich.","lv":"Mám pre teba niečo."},{"de":"Das ist etwas teuer.","lv":"Je to trochu drahé."}],"comparison":[{"word":"etwas","meaning":"niečo • trochu","example":"Ich brauche etwas. = Niečo potrebujem."},{"word":"was","meaning":"niečo (hovorovo)","example":"Willst du was trinken? = Chceš niečo piť?"},{"word":"ein bisschen","meaning":"trochu","example":"Ich bin ein bisschen müde. = Som trochu unavený."},{"word":"nichts","meaning":"nič","example":"Ich brauche nichts. = Nič nepotrebujem."}],"tip":{"text":"Zapamätaj si: vec → niečo; miera → trochu."},"important":["Pred prídavným menom etwas často znamená trochu.","etwas nie je to isté ako nichts: etwas znamená, že niečo existuje, nichts znamená nič.","Slovenský tvar závisí od vety, napríklad etwas trinken = niečo piť."],"id":"a1-etwas","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "Niečo • Trochu",
  "level": "A1",
  "study": {
    "translation": "Niečo • Trochu",
    "explanation": [
      "Hlavná myšlienka: etwas najčastejšie znamená niečo. Pred prídavným menom môže znamenať trochu.",
      "Ich habe etwas gesehen. — Niečo som videl.",
      "Das ist etwas teuer. — Je to trochu drahé."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Chcel by som niečo piť."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Máš trochu času?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Som trochu unavený."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Mám pre teba niečo."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Je to trochu drahé."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "niečo • trochu",
        "example": "Ich brauche etwas. = Niečo potrebujem."
      },
      {
        "word": "was",
        "meaning": "niečo (hovorovo)",
        "example": "Willst du was trinken? = Chceš niečo piť?"
      },
      {
        "word": "ein bisschen",
        "meaning": "trochu",
        "example": "Ich bin ein bisschen müde. = Som trochu unavený."
      },
      {
        "word": "nichts",
        "meaning": "nič",
        "example": "Ich brauche nichts. = Nič nepotrebujem."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: vec → niečo; miera → trochu."
    },
    "important": [
      "Pred prídavným menom etwas často znamená trochu.",
      "etwas nie je to isté ako nichts: etwas znamená, že niečo existuje, nichts znamená nič.",
      "Slovenský tvar závisí od vety, napríklad etwas trinken = niečo piť."
    ],
    "id": "a1-etwas",
    "layout": "standardStudy"
  }
}
```

---

## Finding 16

**Audit ID:** `LRB088-0016`
**Finding Stable ID:** `g2/a1/sk|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-euch`
**Field / path:** `a1.card.a1-euch.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vy • Vy
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vás • Vám","study":{"translation":"Vás • Vám","explanation":"euch je zámeno druhej osoby množného čísla. V akuzatíve znamená „vás“ a v datíve „vám“.","examples":[{"de":"Ich sehe euch.","lv":"Vidím vás."},{"de":"Ich helfe euch.","lv":"Pomáham vám."},{"de":"Ich gebe euch das Buch.","lv":"Dávam vám tú knihu."},{"de":"Ich danke euch.","lv":"Ďakujem vám."},{"de":"Ihr erinnert euch.","lv":"Spomínate si."}],"comparison":[{"word":"ihr","meaning":"vy","example":"Ihr seid freundlich. = Ste milí."},{"word":"euch","meaning":"vás • vám","example":"Ich helfe euch. = Pomáham vám."},{"word":"euer","meaning":"váš","example":"Das ist euer Haus. = To je váš dom."}],"info":["ihr = vy (podmet)","euch = vás (akuzatív) alebo vám (datív)","euer = váš (privlastňovací tvar)"],"tip":{"text":"euch označuje viac oslovených ľudí a podľa pádu znamená „vás“ alebo „vám“.","example":"Pomáham vám. = Ich helfe euch. Vidím vás. = Ich sehe euch. Rozprávam vám. = Ich erzähle euch."},"id":"a1-euch","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "Vás • Vám",
  "level": "A1",
  "study": {
    "translation": "Vás • Vám",
    "explanation": "euch je zámeno druhej osoby množného čísla. V akuzatíve znamená „vás“ a v datíve „vám“.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Vidím vás."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Pomáham vám."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Dávam vám tú knihu."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Ďakujem vám."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Spomínate si."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "vy",
        "example": "Ihr seid freundlich. = Ste milí."
      },
      {
        "word": "euch",
        "meaning": "vás • vám",
        "example": "Ich helfe euch. = Pomáham vám."
      },
      {
        "word": "euer",
        "meaning": "váš",
        "example": "Das ist euer Haus. = To je váš dom."
      }
    ],
    "info": [
      "ihr = vy (podmet)",
      "euch = vás (akuzatív) alebo vám (datív)",
      "euer = váš (privlastňovací tvar)"
    ],
    "tip": {
      "text": "euch označuje viac oslovených ľudí a podľa pádu znamená „vás“ alebo „vám“.",
      "example": "Pomáham vám. = Ich helfe euch. Vidím vás. = Ich sehe euch. Rozprávam vám. = Ich erzähle euch."
    },
    "id": "a1-euch",
    "layout": "standardStudy"
  }
}
```

---

## Finding 17

**Audit ID:** `LRB088-0017`
**Finding Stable ID:** `g2/a1/sk|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-euch`
**Field / path:** `a1.card.a1-euch.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vy • Vy
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vás • Vám","study":{"translation":"Vás • Vám","explanation":"euch je zámeno druhej osoby množného čísla. V akuzatíve znamená „vás“ a v datíve „vám“.","examples":[{"de":"Ich sehe euch.","lv":"Vidím vás."},{"de":"Ich helfe euch.","lv":"Pomáham vám."},{"de":"Ich gebe euch das Buch.","lv":"Dávam vám tú knihu."},{"de":"Ich danke euch.","lv":"Ďakujem vám."},{"de":"Ihr erinnert euch.","lv":"Spomínate si."}],"comparison":[{"word":"ihr","meaning":"vy","example":"Ihr seid freundlich. = Ste milí."},{"word":"euch","meaning":"vás • vám","example":"Ich helfe euch. = Pomáham vám."},{"word":"euer","meaning":"váš","example":"Das ist euer Haus. = To je váš dom."}],"info":["ihr = vy (podmet)","euch = vás (akuzatív) alebo vám (datív)","euer = váš (privlastňovací tvar)"],"tip":{"text":"euch označuje viac oslovených ľudí a podľa pádu znamená „vás“ alebo „vám“.","example":"Pomáham vám. = Ich helfe euch. Vidím vás. = Ich sehe euch. Rozprávam vám. = Ich erzähle euch."},"id":"a1-euch","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "Vás • Vám",
  "level": "A1",
  "study": {
    "translation": "Vás • Vám",
    "explanation": "euch je zámeno druhej osoby množného čísla. V akuzatíve znamená „vás“ a v datíve „vám“.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Vidím vás."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Pomáham vám."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Dávam vám tú knihu."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Ďakujem vám."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Spomínate si."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "vy",
        "example": "Ihr seid freundlich. = Ste milí."
      },
      {
        "word": "euch",
        "meaning": "vás • vám",
        "example": "Ich helfe euch. = Pomáham vám."
      },
      {
        "word": "euer",
        "meaning": "váš",
        "example": "Das ist euer Haus. = To je váš dom."
      }
    ],
    "info": [
      "ihr = vy (podmet)",
      "euch = vás (akuzatív) alebo vám (datív)",
      "euer = váš (privlastňovací tvar)"
    ],
    "tip": {
      "text": "euch označuje viac oslovených ľudí a podľa pádu znamená „vás“ alebo „vám“.",
      "example": "Pomáham vám. = Ich helfe euch. Vidím vás. = Ich sehe euch. Rozprávam vám. = Ich erzähle euch."
    },
    "id": "a1-euch",
    "layout": "standardStudy"
  }
}
```

---

## Finding 18

**Audit ID:** `LRB088-0018`
**Finding Stable ID:** `g2/a1/sk|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-fahren`
**Field / path:** `a1.card.a1-fahren.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Jazdiť • Jazdiť • Brať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ísť dopravou • Viezť","study":{"translation":"Ísť dopravou • Viezť","explanation":["Hlavná myšlienka: fahren znamená ísť alebo jazdiť dopravným prostriedkom a v niektorých vetách aj viezť či odviezť niekoho.","fahren sa používa pri ceste autom, autobusom, vlakom, bicyklom alebo iným dopravným prostriedkom.","Ak je vo vete osoba ako predmet, fahren môže znamenať viezť alebo odviezť.","Pri pohybe pešo sa zvyčajne používa gehen alebo laufen."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Idem do Berlína."},{"de":"Ich fahre mit dem Auto.","lv":"Idem autom."},{"de":"Ich fahre meine Tochter zur Schule.","lv":"Veziem svoju dcéru do školy."},{"de":"Ich fahre dich nach Hause.","lv":"Odveziem ťa domov."},{"de":"Wir fahren morgen nach München.","lv":"Zajtra ideme do Mníchova."}],"comparison":[{"word":"fahren","meaning":"ísť alebo jazdiť dopravou","example":"Ich fahre mit dem Bus."},{"word":"gehen","meaning":"ísť pešo","example":"Ich gehe nach Hause."},{"word":"laufen","meaning":"bežať • ísť","example":"Er läuft schnell."},{"word":"bringen","meaning":"priniesť • dopraviť","example":"Ich bringe das Buch."},{"word":"mitnehmen","meaning":"vziať so sebou","example":"Ich nehme dich mit."}],"tip":{"text":"Zapamätaj si: dopravný prostriedok → fahren; pešo → gehen."},"important":{"text":"fahren neznamená iba „ísť dopravou“.","example":"Podľa kontextu môže fahren znamenať ísť alebo jazdiť dopravou, viezť či odviezť."},"id":"a1-fahren","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fahren",
  "lv": "Ísť dopravou • Viezť",
  "level": "A1",
  "study": {
    "translation": "Ísť dopravou • Viezť",
    "explanation": [
      "Hlavná myšlienka: fahren znamená ísť alebo jazdiť dopravným prostriedkom a v niektorých vetách aj viezť či odviezť niekoho.",
      "fahren sa používa pri ceste autom, autobusom, vlakom, bicyklom alebo iným dopravným prostriedkom.",
      "Ak je vo vete osoba ako predmet, fahren môže znamenať viezť alebo odviezť.",
      "Pri pohybe pešo sa zvyčajne používa gehen alebo laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Idem do Berlína."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Idem autom."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Veziem svoju dcéru do školy."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Odveziem ťa domov."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Zajtra ideme do Mníchova."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "ísť alebo jazdiť dopravou",
        "example": "Ich fahre mit dem Bus."
      },
      {
        "word": "gehen",
        "meaning": "ísť pešo",
        "example": "Ich gehe nach Hause."
      },
      {
        "word": "laufen",
        "meaning": "bežať • ísť",
        "example": "Er läuft schnell."
      },
      {
        "word": "bringen",
        "meaning": "priniesť • dopraviť",
        "example": "Ich bringe das Buch."
      },
      {
        "word": "mitnehmen",
        "meaning": "vziať so sebou",
        "example": "Ich nehme dich mit."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: dopravný prostriedok → fahren; pešo → gehen."
    },
    "important": {
      "text": "fahren neznamená iba „ísť dopravou“.",
      "example": "Podľa kontextu môže fahren znamenať ísť alebo jazdiť dopravou, viezť či odviezť."
    },
    "id": "a1-fahren",
    "layout": "standardStudy"
  }
}
```

---

## Finding 19

**Audit ID:** `LRB088-0019`
**Finding Stable ID:** `g2/a1/sk|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-fahren`
**Field / path:** `a1.card.a1-fahren.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Jazdiť • Jazdiť • Brať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ísť dopravou • Viezť","study":{"translation":"Ísť dopravou • Viezť","explanation":["Hlavná myšlienka: fahren znamená ísť alebo jazdiť dopravným prostriedkom a v niektorých vetách aj viezť či odviezť niekoho.","fahren sa používa pri ceste autom, autobusom, vlakom, bicyklom alebo iným dopravným prostriedkom.","Ak je vo vete osoba ako predmet, fahren môže znamenať viezť alebo odviezť.","Pri pohybe pešo sa zvyčajne používa gehen alebo laufen."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Idem do Berlína."},{"de":"Ich fahre mit dem Auto.","lv":"Idem autom."},{"de":"Ich fahre meine Tochter zur Schule.","lv":"Veziem svoju dcéru do školy."},{"de":"Ich fahre dich nach Hause.","lv":"Odveziem ťa domov."},{"de":"Wir fahren morgen nach München.","lv":"Zajtra ideme do Mníchova."}],"comparison":[{"word":"fahren","meaning":"ísť alebo jazdiť dopravou","example":"Ich fahre mit dem Bus."},{"word":"gehen","meaning":"ísť pešo","example":"Ich gehe nach Hause."},{"word":"laufen","meaning":"bežať • ísť","example":"Er läuft schnell."},{"word":"bringen","meaning":"priniesť • dopraviť","example":"Ich bringe das Buch."},{"word":"mitnehmen","meaning":"vziať so sebou","example":"Ich nehme dich mit."}],"tip":{"text":"Zapamätaj si: dopravný prostriedok → fahren; pešo → gehen."},"important":{"text":"fahren neznamená iba „ísť dopravou“.","example":"Podľa kontextu môže fahren znamenať ísť alebo jazdiť dopravou, viezť či odviezť."},"id":"a1-fahren","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fahren",
  "lv": "Ísť dopravou • Viezť",
  "level": "A1",
  "study": {
    "translation": "Ísť dopravou • Viezť",
    "explanation": [
      "Hlavná myšlienka: fahren znamená ísť alebo jazdiť dopravným prostriedkom a v niektorých vetách aj viezť či odviezť niekoho.",
      "fahren sa používa pri ceste autom, autobusom, vlakom, bicyklom alebo iným dopravným prostriedkom.",
      "Ak je vo vete osoba ako predmet, fahren môže znamenať viezť alebo odviezť.",
      "Pri pohybe pešo sa zvyčajne používa gehen alebo laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Idem do Berlína."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Idem autom."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Veziem svoju dcéru do školy."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Odveziem ťa domov."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Zajtra ideme do Mníchova."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "ísť alebo jazdiť dopravou",
        "example": "Ich fahre mit dem Bus."
      },
      {
        "word": "gehen",
        "meaning": "ísť pešo",
        "example": "Ich gehe nach Hause."
      },
      {
        "word": "laufen",
        "meaning": "bežať • ísť",
        "example": "Er läuft schnell."
      },
      {
        "word": "bringen",
        "meaning": "priniesť • dopraviť",
        "example": "Ich bringe das Buch."
      },
      {
        "word": "mitnehmen",
        "meaning": "vziať so sebou",
        "example": "Ich nehme dich mit."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: dopravný prostriedok → fahren; pešo → gehen."
    },
    "important": {
      "text": "fahren neznamená iba „ísť dopravou“.",
      "example": "Podľa kontextu môže fahren znamenať ísť alebo jazdiť dopravou, viezť či odviezť."
    },
    "id": "a1-fahren",
    "layout": "standardStudy"
  }
}
```

---

## Finding 20

**Audit ID:** `LRB088-0020`
**Finding Stable ID:** `g2/a1/sk|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-finden`
**Field / path:** `a1.card.a1-finden.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Nájsť • Zvážiť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nájsť • Myslieť si","study":{"translation":"Nájsť • Myslieť si","explanation":["Hlavná myšlienka: finden najčastejšie znamená nájsť.","V rozhovore finden veľmi často znamená aj myslieť si alebo považovať niečo za nejaké.","Pri stratenej veci sa prekladá ako nájsť.","Pri názore sa prekladá ako myslieť si alebo považovať."],"examples":[{"de":"Ich finde meinen Schlüssel.","lv":"Nachádzam svoj kľúč."},{"de":"Ich finde das gut.","lv":"Myslím si, že je to dobré."},{"de":"Wie findest du den Film?","lv":"Čo si myslíš o tom filme?"}],"comparison":[{"word":"finden","meaning":"nájsť • myslieť si","example":"Ich finde das gut. = Myslím si, že je to dobré."}],"tip":{"text":"Zapamätaj si: stratená vec → finden; názor → ich finde ..."},"important":["finden neznamená iba „nájsť“.","Ich finde das gut znamená „Myslím si, že je to dobré“, nie doslovné „Nájdem to dobre“."],"id":"a1-finden","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "Nájsť • Myslieť si",
  "level": "A1",
  "study": {
    "translation": "Nájsť • Myslieť si",
    "explanation": [
      "Hlavná myšlienka: finden najčastejšie znamená nájsť.",
      "V rozhovore finden veľmi často znamená aj myslieť si alebo považovať niečo za nejaké.",
      "Pri stratenej veci sa prekladá ako nájsť.",
      "Pri názore sa prekladá ako myslieť si alebo považovať."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Nachádzam svoj kľúč."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Myslím si, že je to dobré."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Čo si myslíš o tom filme?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "nájsť • myslieť si",
        "example": "Ich finde das gut. = Myslím si, že je to dobré."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: stratená vec → finden; názor → ich finde ..."
    },
    "important": [
      "finden neznamená iba „nájsť“.",
      "Ich finde das gut znamená „Myslím si, že je to dobré“, nie doslovné „Nájdem to dobre“."
    ],
    "id": "a1-finden",
    "layout": "standardStudy"
  }
}
```

---

## Finding 21

**Audit ID:** `LRB088-0021`
**Finding Stable ID:** `g2/a1/sk|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-finden`
**Field / path:** `a1.card.a1-finden.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Nájsť • Zvážiť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nájsť • Myslieť si","study":{"translation":"Nájsť • Myslieť si","explanation":["Hlavná myšlienka: finden najčastejšie znamená nájsť.","V rozhovore finden veľmi často znamená aj myslieť si alebo považovať niečo za nejaké.","Pri stratenej veci sa prekladá ako nájsť.","Pri názore sa prekladá ako myslieť si alebo považovať."],"examples":[{"de":"Ich finde meinen Schlüssel.","lv":"Nachádzam svoj kľúč."},{"de":"Ich finde das gut.","lv":"Myslím si, že je to dobré."},{"de":"Wie findest du den Film?","lv":"Čo si myslíš o tom filme?"}],"comparison":[{"word":"finden","meaning":"nájsť • myslieť si","example":"Ich finde das gut. = Myslím si, že je to dobré."}],"tip":{"text":"Zapamätaj si: stratená vec → finden; názor → ich finde ..."},"important":["finden neznamená iba „nájsť“.","Ich finde das gut znamená „Myslím si, že je to dobré“, nie doslovné „Nájdem to dobre“."],"id":"a1-finden","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "Nájsť • Myslieť si",
  "level": "A1",
  "study": {
    "translation": "Nájsť • Myslieť si",
    "explanation": [
      "Hlavná myšlienka: finden najčastejšie znamená nájsť.",
      "V rozhovore finden veľmi často znamená aj myslieť si alebo považovať niečo za nejaké.",
      "Pri stratenej veci sa prekladá ako nájsť.",
      "Pri názore sa prekladá ako myslieť si alebo považovať."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Nachádzam svoj kľúč."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Myslím si, že je to dobré."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Čo si myslíš o tom filme?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "nájsť • myslieť si",
        "example": "Ich finde das gut. = Myslím si, že je to dobré."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: stratená vec → finden; názor → ich finde ..."
    },
    "important": [
      "finden neznamená iba „nájsť“.",
      "Ich finde das gut znamená „Myslím si, že je to dobré“, nie doslovné „Nájdem to dobre“."
    ],
    "id": "a1-finden",
    "layout": "standardStudy"
  }
}
```

---

## Finding 22

**Audit ID:** `LRB088-0022`
**Finding Stable ID:** `g2/a1/sk|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-frau`
**Field / path:** `a1.card.a1-frau.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Žena • Manželka
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Žena • Manželka","study":{"translation":"Žena • Manželka","explanation":["Hlavná myšlienka: die Frau môže znamenať ženu ako osobu alebo manželku.","Ak ide všeobecne o osobu ženského pohlavia, die Frau = žena.","Ak ide o manželskú partnerku, die Frau = manželka; meine Frau = moja manželka.","Privlastňovacie zámeno pred Frau, napríklad meine, deine alebo seine Frau, takmer vždy označuje manželku.","Množné číslo je die Frauen.","Aj der Mann môže znamenať muža alebo manžela."],"examples":[{"de":"Sie ist eine nette Frau.","lv":"Ona je milá žena."},{"de":"Das ist meine Frau.","lv":"Toto je moja manželka."},{"de":"Wie viele Frauen sind hier?","lv":"Koľko žien je tu?"},{"de":"Meine Frau arbeitet in Berlin.","lv":"Moja manželka pracuje v Berlíne."},{"de":"Die Frau trägt ein Kleid.","lv":"Tá žena má na sebe šaty."},{"de":"Seine Frau ist Ärztin.","lv":"Jeho manželka je lekárka."}],"tip":["S privlastňovacím slovom, napríklad meine, deine alebo seine Frau, sa takmer vždy myslí manželka.","Bez privlastňovacieho slova, napríklad die Frau alebo eine Frau, sa zvyčajne myslí žena."],"important":["die Frau = žena alebo manželka podľa kontextu.","meine Frau = moja manželka; hovorovo aj moja žena.","Množné číslo je die Frauen."],"id":"a1-frau","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Žena • Manželka",
  "level": "A1",
  "study": {
    "translation": "Žena • Manželka",
    "explanation": [
      "Hlavná myšlienka: die Frau môže znamenať ženu ako osobu alebo manželku.",
      "Ak ide všeobecne o osobu ženského pohlavia, die Frau = žena.",
      "Ak ide o manželskú partnerku, die Frau = manželka; meine Frau = moja manželka.",
      "Privlastňovacie zámeno pred Frau, napríklad meine, deine alebo seine Frau, takmer vždy označuje manželku.",
      "Množné číslo je die Frauen.",
      "Aj der Mann môže znamenať muža alebo manžela."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Ona je milá žena."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Toto je moja manželka."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Koľko žien je tu?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Moja manželka pracuje v Berlíne."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Tá žena má na sebe šaty."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Jeho manželka je lekárka."
      }
    ],
    "tip": [
      "S privlastňovacím slovom, napríklad meine, deine alebo seine Frau, sa takmer vždy myslí manželka.",
      "Bez privlastňovacieho slova, napríklad die Frau alebo eine Frau, sa zvyčajne myslí žena."
    ],
    "important": [
      "die Frau = žena alebo manželka podľa kontextu.",
      "meine Frau = moja manželka; hovorovo aj moja žena.",
      "Množné číslo je die Frauen."
    ],
    "id": "a1-frau",
    "layout": "standardStudy"
  }
}
```

---

## Finding 23

**Audit ID:** `LRB088-0023`
**Finding Stable ID:** `g2/a1/sk|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-frau`
**Field / path:** `a1.card.a1-frau.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Žena • Manželka
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Žena • Manželka","study":{"translation":"Žena • Manželka","explanation":["Hlavná myšlienka: die Frau môže znamenať ženu ako osobu alebo manželku.","Ak ide všeobecne o osobu ženského pohlavia, die Frau = žena.","Ak ide o manželskú partnerku, die Frau = manželka; meine Frau = moja manželka.","Privlastňovacie zámeno pred Frau, napríklad meine, deine alebo seine Frau, takmer vždy označuje manželku.","Množné číslo je die Frauen.","Aj der Mann môže znamenať muža alebo manžela."],"examples":[{"de":"Sie ist eine nette Frau.","lv":"Ona je milá žena."},{"de":"Das ist meine Frau.","lv":"Toto je moja manželka."},{"de":"Wie viele Frauen sind hier?","lv":"Koľko žien je tu?"},{"de":"Meine Frau arbeitet in Berlin.","lv":"Moja manželka pracuje v Berlíne."},{"de":"Die Frau trägt ein Kleid.","lv":"Tá žena má na sebe šaty."},{"de":"Seine Frau ist Ärztin.","lv":"Jeho manželka je lekárka."}],"tip":["S privlastňovacím slovom, napríklad meine, deine alebo seine Frau, sa takmer vždy myslí manželka.","Bez privlastňovacieho slova, napríklad die Frau alebo eine Frau, sa zvyčajne myslí žena."],"important":["die Frau = žena alebo manželka podľa kontextu.","meine Frau = moja manželka; hovorovo aj moja žena.","Množné číslo je die Frauen."],"id":"a1-frau","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Žena • Manželka",
  "level": "A1",
  "study": {
    "translation": "Žena • Manželka",
    "explanation": [
      "Hlavná myšlienka: die Frau môže znamenať ženu ako osobu alebo manželku.",
      "Ak ide všeobecne o osobu ženského pohlavia, die Frau = žena.",
      "Ak ide o manželskú partnerku, die Frau = manželka; meine Frau = moja manželka.",
      "Privlastňovacie zámeno pred Frau, napríklad meine, deine alebo seine Frau, takmer vždy označuje manželku.",
      "Množné číslo je die Frauen.",
      "Aj der Mann môže znamenať muža alebo manžela."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Ona je milá žena."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Toto je moja manželka."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Koľko žien je tu?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Moja manželka pracuje v Berlíne."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Tá žena má na sebe šaty."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Jeho manželka je lekárka."
      }
    ],
    "tip": [
      "S privlastňovacím slovom, napríklad meine, deine alebo seine Frau, sa takmer vždy myslí manželka.",
      "Bez privlastňovacieho slova, napríklad die Frau alebo eine Frau, sa zvyčajne myslí žena."
    ],
    "important": [
      "die Frau = žena alebo manželka podľa kontextu.",
      "meine Frau = moja manželka; hovorovo aj moja žena.",
      "Množné číslo je die Frauen."
    ],
    "id": "a1-frau",
    "layout": "standardStudy"
  }
}
```

---

## Finding 24

**Audit ID:** `LRB088-0024`
**Finding Stable ID:** `g2/a1/sk|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Pro • Pro
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pre • Za","study":{"translation":"Pre • Za","explanation":["Hlavná myšlienka: für je predložka, ktorá sa vždy spája s akuzatívom; po slovensky najčastejšie znamená pre alebo za.","Pri príjemcovi alebo účele für = pre, napríklad für dich = pre teba.","Pri odmene, platbe alebo dôvode für = za, napríklad danke für das Geschenk = ďakujem za darček.","für vyžaduje akuzatív bez ohľadu na význam."],"examples":[{"de":"Das ist für dich.","lv":"To je pre teba."},{"de":"Danke für die Hilfe.","lv":"Ďakujem za pomoc."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Kupujem darček pre svoju matku."},{"de":"Was bezahlst du für das Auto?","lv":"Koľko platíš za auto?"},{"de":"Das Buch ist für Kinder.","lv":"Tá kniha je pre deti."},{"de":"Für heute ist das genug.","lv":"Na dnes to stačí."}],"tip":["für sa vždy spája s akuzatívom.","Príjemca alebo účel → pre; odmena, dôvod alebo platba → za."],"important":["für + Akkusativ, napríklad für mich, für dich, für das Kind.","danke für a bezahlen für sa prekladajú so „za“, nie s „pre“."],"id":"a1-fuer","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "Pre • Za",
  "level": "A1",
  "study": {
    "translation": "Pre • Za",
    "explanation": [
      "Hlavná myšlienka: für je predložka, ktorá sa vždy spája s akuzatívom; po slovensky najčastejšie znamená pre alebo za.",
      "Pri príjemcovi alebo účele für = pre, napríklad für dich = pre teba.",
      "Pri odmene, platbe alebo dôvode für = za, napríklad danke für das Geschenk = ďakujem za darček.",
      "für vyžaduje akuzatív bez ohľadu na význam."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "To je pre teba."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Ďakujem za pomoc."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Kupujem darček pre svoju matku."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Koľko platíš za auto?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Tá kniha je pre deti."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Na dnes to stačí."
      }
    ],
    "tip": [
      "für sa vždy spája s akuzatívom.",
      "Príjemca alebo účel → pre; odmena, dôvod alebo platba → za."
    ],
    "important": [
      "für + Akkusativ, napríklad für mich, für dich, für das Kind.",
      "danke für a bezahlen für sa prekladajú so „za“, nie s „pre“."
    ],
    "id": "a1-fuer",
    "layout": "standardStudy"
  }
}
```

---

## Finding 25

**Audit ID:** `LRB088-0025`
**Finding Stable ID:** `g2/a1/sk|a1-fuer|a1.card.a1-fuer.study.tip[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.study.tip[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Príjemca/zámer → za • Výmena/dôvod/platba → za.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pre • Za","study":{"translation":"Pre • Za","explanation":["Hlavná myšlienka: für je predložka, ktorá sa vždy spája s akuzatívom; po slovensky najčastejšie znamená pre alebo za.","Pri príjemcovi alebo účele für = pre, napríklad für dich = pre teba.","Pri odmene, platbe alebo dôvode für = za, napríklad danke für das Geschenk = ďakujem za darček.","für vyžaduje akuzatív bez ohľadu na význam."],"examples":[{"de":"Das ist für dich.","lv":"To je pre teba."},{"de":"Danke für die Hilfe.","lv":"Ďakujem za pomoc."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Kupujem darček pre svoju matku."},{"de":"Was bezahlst du für das Auto?","lv":"Koľko platíš za auto?"},{"de":"Das Buch ist für Kinder.","lv":"Tá kniha je pre deti."},{"de":"Für heute ist das genug.","lv":"Na dnes to stačí."}],"tip":["für sa vždy spája s akuzatívom.","Príjemca alebo účel → pre; odmena, dôvod alebo platba → za."],"important":["für + Akkusativ, napríklad für mich, für dich, für das Kind.","danke für a bezahlen für sa prekladajú so „za“, nie s „pre“."],"id":"a1-fuer","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "Pre • Za",
  "level": "A1",
  "study": {
    "translation": "Pre • Za",
    "explanation": [
      "Hlavná myšlienka: für je predložka, ktorá sa vždy spája s akuzatívom; po slovensky najčastejšie znamená pre alebo za.",
      "Pri príjemcovi alebo účele für = pre, napríklad für dich = pre teba.",
      "Pri odmene, platbe alebo dôvode für = za, napríklad danke für das Geschenk = ďakujem za darček.",
      "für vyžaduje akuzatív bez ohľadu na význam."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "To je pre teba."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Ďakujem za pomoc."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Kupujem darček pre svoju matku."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Koľko platíš za auto?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Tá kniha je pre deti."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Na dnes to stačí."
      }
    ],
    "tip": [
      "für sa vždy spája s akuzatívom.",
      "Príjemca alebo účel → pre; odmena, dôvod alebo platba → za."
    ],
    "important": [
      "für + Akkusativ, napríklad für mich, für dich, für das Kind.",
      "danke für a bezahlen für sa prekladajú so „za“, nie s „pre“."
    ],
    "id": "a1-fuer",
    "layout": "standardStudy"
  }
}
```

---

## Finding 26

**Audit ID:** `LRB088-0026`
**Finding Stable ID:** `g2/a1/sk|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Pro • Pro
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pre • Za","study":{"translation":"Pre • Za","explanation":["Hlavná myšlienka: für je predložka, ktorá sa vždy spája s akuzatívom; po slovensky najčastejšie znamená pre alebo za.","Pri príjemcovi alebo účele für = pre, napríklad für dich = pre teba.","Pri odmene, platbe alebo dôvode für = za, napríklad danke für das Geschenk = ďakujem za darček.","für vyžaduje akuzatív bez ohľadu na význam."],"examples":[{"de":"Das ist für dich.","lv":"To je pre teba."},{"de":"Danke für die Hilfe.","lv":"Ďakujem za pomoc."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Kupujem darček pre svoju matku."},{"de":"Was bezahlst du für das Auto?","lv":"Koľko platíš za auto?"},{"de":"Das Buch ist für Kinder.","lv":"Tá kniha je pre deti."},{"de":"Für heute ist das genug.","lv":"Na dnes to stačí."}],"tip":["für sa vždy spája s akuzatívom.","Príjemca alebo účel → pre; odmena, dôvod alebo platba → za."],"important":["für + Akkusativ, napríklad für mich, für dich, für das Kind.","danke für a bezahlen für sa prekladajú so „za“, nie s „pre“."],"id":"a1-fuer","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "Pre • Za",
  "level": "A1",
  "study": {
    "translation": "Pre • Za",
    "explanation": [
      "Hlavná myšlienka: für je predložka, ktorá sa vždy spája s akuzatívom; po slovensky najčastejšie znamená pre alebo za.",
      "Pri príjemcovi alebo účele für = pre, napríklad für dich = pre teba.",
      "Pri odmene, platbe alebo dôvode für = za, napríklad danke für das Geschenk = ďakujem za darček.",
      "für vyžaduje akuzatív bez ohľadu na význam."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "To je pre teba."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Ďakujem za pomoc."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Kupujem darček pre svoju matku."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Koľko platíš za auto?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Tá kniha je pre deti."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Na dnes to stačí."
      }
    ],
    "tip": [
      "für sa vždy spája s akuzatívom.",
      "Príjemca alebo účel → pre; odmena, dôvod alebo platba → za."
    ],
    "important": [
      "für + Akkusativ, napríklad für mich, für dich, für das Kind.",
      "danke für a bezahlen für sa prekladajú so „za“, nie s „pre“."
    ],
    "id": "a1-fuer",
    "layout": "standardStudy"
  }
}
```

---

## Finding 27

**Audit ID:** `LRB088-0027`
**Finding Stable ID:** `g2/a1/sk|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ganz-study`
**Field / path:** `a1.card.a1-ganz-study.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** celý • všetko dohromady • úplne
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Celý • Úplne • Celkom","study":{"translation":"Celý • Úplne • Celkom","explanation":["Hlavná myšlienka: ganz pri podstatnom mene znamená celý alebo všetok.","Pred prídavným menom alebo príslovkou môže ganz znamenať úplne, celkom alebo dosť.","ganz nie je to isté ako zámeno alles."],"examples":[{"de":"Ich arbeite den ganzen Tag.","lv":"Pracujem celý deň."},{"de":"Das ganze Haus ist sauber.","lv":"Celý dom je čistý."},{"de":"Das ist ganz sicher.","lv":"To je úplne isté."},{"de":"Das Essen ist ganz gut.","lv":"Jedlo je celkom dobré."}],"comparison":[{"word":"ganz","meaning":"celý • všetok • úplne","example":"der ganze Tag = celý deň"},{"word":"alles","meaning":"všetko","example":"Alles ist gut. = Všetko je v poriadku."}],"tip":["Pred podstatným menom ganz často znamená celý alebo všetok.","Pred prídavným menom ganz často znamená úplne alebo celkom."],"important":["der ganze Tag = celý deň.","alles = všetko ako zámeno."],"id":"a1-ganz-study","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ganz",
  "lv": "Celý • Úplne • Celkom",
  "level": "A1",
  "study": {
    "translation": "Celý • Úplne • Celkom",
    "explanation": [
      "Hlavná myšlienka: ganz pri podstatnom mene znamená celý alebo všetok.",
      "Pred prídavným menom alebo príslovkou môže ganz znamenať úplne, celkom alebo dosť.",
      "ganz nie je to isté ako zámeno alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "Pracujem celý deň."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "Celý dom je čistý."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "To je úplne isté."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "Jedlo je celkom dobré."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "celý • všetok • úplne",
        "example": "der ganze Tag = celý deň"
      },
      {
        "word": "alles",
        "meaning": "všetko",
        "example": "Alles ist gut. = Všetko je v poriadku."
      }
    ],
    "tip": [
      "Pred podstatným menom ganz často znamená celý alebo všetok.",
      "Pred prídavným menom ganz často znamená úplne alebo celkom."
    ],
    "important": [
      "der ganze Tag = celý deň.",
      "alles = všetko ako zámeno."
    ],
    "id": "a1-ganz-study",
    "layout": "standardStudy"
  }
}
```

---

## Finding 28

**Audit ID:** `LRB088-0028`
**Finding Stable ID:** `g2/a1/sk|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-gefallen-study`
**Field / path:** `a1.card.a1-gefallen-study.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** páčiť sa • osoba v datíve
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Páčiť sa","study":{"translation":"Páčiť sa","explanation":["Hlavná myšlienka: gefallen znamená páčiť sa; pri tejto väzbe je dôležité určiť podmet a osobu v datíve.","Vec, ktorá sa niekomu páči, je v nemčine podmetom.","Osoba, ktorej sa niečo páči, je v datíve: mir, dir, ihm, ihr, uns, euch, ihnen."],"examples":[{"de":"Das gefällt mir.","lv":"To sa mi páči."},{"de":"Gefällt dir das Kleid?","lv":"Páčia sa ti tie šaty?"},{"de":"Der Film gefällt uns.","lv":"Ten film sa nám páči."}],"comparison":[{"word":"gefallen","meaning":"páčiť sa • osoba v datíve","example":"Das gefällt mir. = To sa mi páči."},{"word":"mögen","meaning":"mať rád • obľubovať","example":"Ich mag das. = Mám to rád."}],"tip":["Zapamätaj si konštrukciu: Das gefällt mir.","Páčiaca sa vec je podmet a osoba je v datíve."],"important":["gefallen sa používa s osobou v datíve: mir, dir, ihm, ihr.","Das gefällt mir = To sa mi páči."],"id":"a1-gefallen-study","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gefallen",
  "lv": "Páčiť sa",
  "level": "A1",
  "study": {
    "translation": "Páčiť sa",
    "explanation": [
      "Hlavná myšlienka: gefallen znamená páčiť sa; pri tejto väzbe je dôležité určiť podmet a osobu v datíve.",
      "Vec, ktorá sa niekomu páči, je v nemčine podmetom.",
      "Osoba, ktorej sa niečo páči, je v datíve: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "To sa mi páči."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "Páčia sa ti tie šaty?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "Ten film sa nám páči."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "páčiť sa • osoba v datíve",
        "example": "Das gefällt mir. = To sa mi páči."
      },
      {
        "word": "mögen",
        "meaning": "mať rád • obľubovať",
        "example": "Ich mag das. = Mám to rád."
      }
    ],
    "tip": [
      "Zapamätaj si konštrukciu: Das gefällt mir.",
      "Páčiaca sa vec je podmet a osoba je v datíve."
    ],
    "important": [
      "gefallen sa používa s osobou v datíve: mir, dir, ihm, ihr.",
      "Das gefällt mir = To sa mi páči."
    ],
    "id": "a1-gefallen-study",
    "layout": "standardStudy"
  }
}
```

---

## Finding 29

**Audit ID:** `LRB088-0029`
**Finding Stable ID:** `g2/a1/sk|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-gleich`
**Field / path:** `a1.card.a1-gleich.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Okamžite • Rovnaký
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Hneď • Rovnaký","study":{"translation":"Hneď • Rovnaký","explanation":["Hlavná myšlienka: gleich v časovom význame znamená hneď alebo o chvíľu, pri porovnaní znamená rovnaký.","Ak ide o čas, gleich = hneď alebo o chvíľu: Ich komme gleich. = Hneď prídem.","Pri porovnaní gleich = rovnaký alebo taký istý: die gleiche Farbe = rovnaká farba.","Správny význam ukazuje kontext."],"examples":[{"de":"Ich komme gleich.","lv":"Hneď prídem."},{"de":"Wir haben die gleiche Farbe.","lv":"Máme rovnakú farbu."},{"de":"Das Essen ist gleich fertig.","lv":"Jedlo bude o chvíľu hotové."},{"de":"Beide Wege sind gleich lang.","lv":"Obe cesty sú rovnako dlhé."},{"de":"Bis gleich!","lv":"Uvidíme sa o chvíľu!"},{"de":"Sie sind gleich groß.","lv":"Sú rovnako vysokí."}],"tip":["Pri čase → hneď alebo o chvíľu.","Pri porovnaní → rovnaký alebo rovnako."],"important":["gleich = hneď pri čase alebo rovnaký pri porovnaní.","Bis gleich! je bežné rozlúčenie vo význame „Uvidíme sa o chvíľu!“"],"id":"a1-gleich","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gleich",
  "lv": "Hneď • Rovnaký",
  "level": "A1",
  "study": {
    "translation": "Hneď • Rovnaký",
    "explanation": [
      "Hlavná myšlienka: gleich v časovom význame znamená hneď alebo o chvíľu, pri porovnaní znamená rovnaký.",
      "Ak ide o čas, gleich = hneď alebo o chvíľu: Ich komme gleich. = Hneď prídem.",
      "Pri porovnaní gleich = rovnaký alebo taký istý: die gleiche Farbe = rovnaká farba.",
      "Správny význam ukazuje kontext."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Hneď prídem."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Máme rovnakú farbu."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Jedlo bude o chvíľu hotové."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Obe cesty sú rovnako dlhé."
      },
      {
        "de": "Bis gleich!",
        "lv": "Uvidíme sa o chvíľu!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Sú rovnako vysokí."
      }
    ],
    "tip": [
      "Pri čase → hneď alebo o chvíľu.",
      "Pri porovnaní → rovnaký alebo rovnako."
    ],
    "important": [
      "gleich = hneď pri čase alebo rovnaký pri porovnaní.",
      "Bis gleich! je bežné rozlúčenie vo význame „Uvidíme sa o chvíľu!“"
    ],
    "id": "a1-gleich",
    "layout": "standardStudy"
  }
}
```

---

## Finding 30

**Audit ID:** `LRB088-0030`
**Finding Stable ID:** `g2/a1/sk|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-gleich`
**Field / path:** `a1.card.a1-gleich.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Okamžite • Rovnaký
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Hneď • Rovnaký","study":{"translation":"Hneď • Rovnaký","explanation":["Hlavná myšlienka: gleich v časovom význame znamená hneď alebo o chvíľu, pri porovnaní znamená rovnaký.","Ak ide o čas, gleich = hneď alebo o chvíľu: Ich komme gleich. = Hneď prídem.","Pri porovnaní gleich = rovnaký alebo taký istý: die gleiche Farbe = rovnaká farba.","Správny význam ukazuje kontext."],"examples":[{"de":"Ich komme gleich.","lv":"Hneď prídem."},{"de":"Wir haben die gleiche Farbe.","lv":"Máme rovnakú farbu."},{"de":"Das Essen ist gleich fertig.","lv":"Jedlo bude o chvíľu hotové."},{"de":"Beide Wege sind gleich lang.","lv":"Obe cesty sú rovnako dlhé."},{"de":"Bis gleich!","lv":"Uvidíme sa o chvíľu!"},{"de":"Sie sind gleich groß.","lv":"Sú rovnako vysokí."}],"tip":["Pri čase → hneď alebo o chvíľu.","Pri porovnaní → rovnaký alebo rovnako."],"important":["gleich = hneď pri čase alebo rovnaký pri porovnaní.","Bis gleich! je bežné rozlúčenie vo význame „Uvidíme sa o chvíľu!“"],"id":"a1-gleich","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gleich",
  "lv": "Hneď • Rovnaký",
  "level": "A1",
  "study": {
    "translation": "Hneď • Rovnaký",
    "explanation": [
      "Hlavná myšlienka: gleich v časovom význame znamená hneď alebo o chvíľu, pri porovnaní znamená rovnaký.",
      "Ak ide o čas, gleich = hneď alebo o chvíľu: Ich komme gleich. = Hneď prídem.",
      "Pri porovnaní gleich = rovnaký alebo taký istý: die gleiche Farbe = rovnaká farba.",
      "Správny význam ukazuje kontext."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Hneď prídem."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Máme rovnakú farbu."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Jedlo bude o chvíľu hotové."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Obe cesty sú rovnako dlhé."
      },
      {
        "de": "Bis gleich!",
        "lv": "Uvidíme sa o chvíľu!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Sú rovnako vysokí."
      }
    ],
    "tip": [
      "Pri čase → hneď alebo o chvíľu.",
      "Pri porovnaní → rovnaký alebo rovnako."
    ],
    "important": [
      "gleich = hneď pri čase alebo rovnaký pri porovnaní.",
      "Bis gleich! je bežné rozlúčenie vo význame „Uvidíme sa o chvíľu!“"
    ],
    "id": "a1-gleich",
    "layout": "standardStudy"
  }
}
```

---

## Finding 31

**Audit ID:** `LRB088-0031`
**Finding Stable ID:** `g2/a1/sk|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-halten`
**Field / path:** `a1.card.a1-halten.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Podržať • Zastaviť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Držať • Zastaviť","study":{"translation":"Držať • Zastaviť","explanation":["Hlavná myšlienka: halten najčastejšie znamená držať.","Pri autobuse, vlaku alebo inom dopravnom prostriedku môže halten znamenať zastaviť alebo stáť na zastávke.","Oddeliteľné sloveso anhalten znamená zastaviť sa alebo zastaviť niečo.","Konštrukcia etwas für ... halten znamená považovať niečo za niečo."],"examples":[{"de":"Ich halte die Tasche.","lv":"Držím tašku."},{"de":"Der Bus hält hier.","lv":"Autobus tu zastavuje."},{"de":"Bitte halten Sie an.","lv":"Prosím, zastavte."},{"de":"Ich halte das für richtig.","lv":"Považujem to za správne."}],"comparison":[{"word":"halten","meaning":"držať • pri doprave zastaviť","example":"Der Bus hält. = Autobus zastavuje."},{"word":"nehmen","meaning":"vziať","example":"Ich nehme die Tasche. = Beriem tašku."},{"word":"anhalten","meaning":"zastaviť sa • zastaviť","example":"Bitte halten Sie an. = Prosím, zastavte."},{"word":"denken","meaning":"myslieť","example":"Ich denke, das ist richtig. = Myslím si, že je to správne."}],"tip":{"text":"Zapamätaj si: predmet držať → halten; zastaviť sa → anhalten; dopravný prostriedok zastavuje → hält."},"important":["halten najčastejšie znamená držať.","Der Bus hält znamená „Autobus zastavuje“.","Vo vete Bitte halten Sie an. je použité oddeliteľné sloveso anhalten."],"id":"a1-halten","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "halten",
  "lv": "Držať • Zastaviť",
  "level": "A1",
  "study": {
    "translation": "Držať • Zastaviť",
    "explanation": [
      "Hlavná myšlienka: halten najčastejšie znamená držať.",
      "Pri autobuse, vlaku alebo inom dopravnom prostriedku môže halten znamenať zastaviť alebo stáť na zastávke.",
      "Oddeliteľné sloveso anhalten znamená zastaviť sa alebo zastaviť niečo.",
      "Konštrukcia etwas für ... halten znamená považovať niečo za niečo."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Držím tašku."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Autobus tu zastavuje."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Prosím, zastavte."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Považujem to za správne."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "držať • pri doprave zastaviť",
        "example": "Der Bus hält. = Autobus zastavuje."
      },
      {
        "word": "nehmen",
        "meaning": "vziať",
        "example": "Ich nehme die Tasche. = Beriem tašku."
      },
      {
        "word": "anhalten",
        "meaning": "zastaviť sa • zastaviť",
        "example": "Bitte halten Sie an. = Prosím, zastavte."
      },
      {
        "word": "denken",
        "meaning": "myslieť",
        "example": "Ich denke, das ist richtig. = Myslím si, že je to správne."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: predmet držať → halten; zastaviť sa → anhalten; dopravný prostriedok zastavuje → hält."
    },
    "important": [
      "halten najčastejšie znamená držať.",
      "Der Bus hält znamená „Autobus zastavuje“.",
      "Vo vete Bitte halten Sie an. je použité oddeliteľné sloveso anhalten."
    ],
    "id": "a1-halten",
    "layout": "standardStudy"
  }
}
```

---

## Finding 32

**Audit ID:** `LRB088-0032`
**Finding Stable ID:** `g2/a1/sk|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-halten`
**Field / path:** `a1.card.a1-halten.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Podržať • Zastaviť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Držať • Zastaviť","study":{"translation":"Držať • Zastaviť","explanation":["Hlavná myšlienka: halten najčastejšie znamená držať.","Pri autobuse, vlaku alebo inom dopravnom prostriedku môže halten znamenať zastaviť alebo stáť na zastávke.","Oddeliteľné sloveso anhalten znamená zastaviť sa alebo zastaviť niečo.","Konštrukcia etwas für ... halten znamená považovať niečo za niečo."],"examples":[{"de":"Ich halte die Tasche.","lv":"Držím tašku."},{"de":"Der Bus hält hier.","lv":"Autobus tu zastavuje."},{"de":"Bitte halten Sie an.","lv":"Prosím, zastavte."},{"de":"Ich halte das für richtig.","lv":"Považujem to za správne."}],"comparison":[{"word":"halten","meaning":"držať • pri doprave zastaviť","example":"Der Bus hält. = Autobus zastavuje."},{"word":"nehmen","meaning":"vziať","example":"Ich nehme die Tasche. = Beriem tašku."},{"word":"anhalten","meaning":"zastaviť sa • zastaviť","example":"Bitte halten Sie an. = Prosím, zastavte."},{"word":"denken","meaning":"myslieť","example":"Ich denke, das ist richtig. = Myslím si, že je to správne."}],"tip":{"text":"Zapamätaj si: predmet držať → halten; zastaviť sa → anhalten; dopravný prostriedok zastavuje → hält."},"important":["halten najčastejšie znamená držať.","Der Bus hält znamená „Autobus zastavuje“.","Vo vete Bitte halten Sie an. je použité oddeliteľné sloveso anhalten."],"id":"a1-halten","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "halten",
  "lv": "Držať • Zastaviť",
  "level": "A1",
  "study": {
    "translation": "Držať • Zastaviť",
    "explanation": [
      "Hlavná myšlienka: halten najčastejšie znamená držať.",
      "Pri autobuse, vlaku alebo inom dopravnom prostriedku môže halten znamenať zastaviť alebo stáť na zastávke.",
      "Oddeliteľné sloveso anhalten znamená zastaviť sa alebo zastaviť niečo.",
      "Konštrukcia etwas für ... halten znamená považovať niečo za niečo."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Držím tašku."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Autobus tu zastavuje."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Prosím, zastavte."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Považujem to za správne."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "držať • pri doprave zastaviť",
        "example": "Der Bus hält. = Autobus zastavuje."
      },
      {
        "word": "nehmen",
        "meaning": "vziať",
        "example": "Ich nehme die Tasche. = Beriem tašku."
      },
      {
        "word": "anhalten",
        "meaning": "zastaviť sa • zastaviť",
        "example": "Bitte halten Sie an. = Prosím, zastavte."
      },
      {
        "word": "denken",
        "meaning": "myslieť",
        "example": "Ich denke, das ist richtig. = Myslím si, že je to správne."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: predmet držať → halten; zastaviť sa → anhalten; dopravný prostriedok zastavuje → hält."
    },
    "important": [
      "halten najčastejšie znamená držať.",
      "Der Bus hält znamená „Autobus zastavuje“.",
      "Vo vete Bitte halten Sie an. je použité oddeliteľné sloveso anhalten."
    ],
    "id": "a1-halten",
    "layout": "standardStudy"
  }
}
```

---

## Finding 33

**Audit ID:** `LRB088-0033`
**Finding Stable ID:** `g2/a1/sk|a1-heissen|a1.card.a1-heissen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-heissen`
**Field / path:** `a1.card.a1-heissen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Hovorte si • Zmysel
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Volať sa • Znamenať","study":{"translation":"Volať sa • Znamenať","explanation":["Hlavná myšlienka: heißen sa najčastejšie používa na vyjadrenie mena.","Ich heiße ... znamená „Volám sa ...“.","Pri slovách alebo výrazoch môže heißen znamenať aj znamenať.","Na úrovni A1 je najdôležitejšia otázka Wie heißt du?"],"examples":[{"de":"Ich heiße Anna.","lv":"Volám sa Anna."},{"de":"Wie heißt du?","lv":"Ako sa voláš?"},{"de":"Wie heißt das auf Deutsch?","lv":"Ako sa to povie po nemecky?"},{"de":"Was heißt das?","lv":"Čo to znamená?"}],"comparison":[{"word":"heißen","meaning":"volať sa • znamenať","example":"Ich heiße Anna. = Volám sa Anna."},{"word":"nennen","meaning":"nazvať • volať","example":"Er nennt mich Tom. = Volá ma Tom."},{"word":"bedeuten","meaning":"znamenať","example":"Was bedeutet das? = Čo to znamená?"},{"word":"rufen","meaning":"volať • zavolať","example":"Ich rufe dich. = Volám ťa."},{"word":"anrufen","meaning":"telefonovať • zavolať","example":"Ich rufe dich an. = Zavolám ti."}],"tip":{"text":"Zapamätaj si: Ich heiße ... = Volám sa ..."},"important":["Wie heißt du? znamená „Ako sa voláš?“","Was heißt das? často znamená „Čo to znamená?“"],"id":"a1-heißen","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "heißen",
  "lv": "Volať sa • Znamenať",
  "level": "A1",
  "study": {
    "translation": "Volať sa • Znamenať",
    "explanation": [
      "Hlavná myšlienka: heißen sa najčastejšie používa na vyjadrenie mena.",
      "Ich heiße ... znamená „Volám sa ...“.",
      "Pri slovách alebo výrazoch môže heißen znamenať aj znamenať.",
      "Na úrovni A1 je najdôležitejšia otázka Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Volám sa Anna."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Ako sa voláš?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Ako sa to povie po nemecky?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Čo to znamená?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "volať sa • znamenať",
        "example": "Ich heiße Anna. = Volám sa Anna."
      },
      {
        "word": "nennen",
        "meaning": "nazvať • volať",
        "example": "Er nennt mich Tom. = Volá ma Tom."
      },
      {
        "word": "bedeuten",
        "meaning": "znamenať",
        "example": "Was bedeutet das? = Čo to znamená?"
      },
      {
        "word": "rufen",
        "meaning": "volať • zavolať",
        "example": "Ich rufe dich. = Volám ťa."
      },
      {
        "word": "anrufen",
        "meaning": "telefonovať • zavolať",
        "example": "Ich rufe dich an. = Zavolám ti."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: Ich heiße ... = Volám sa ..."
    },
    "important": [
      "Wie heißt du? znamená „Ako sa voláš?“",
      "Was heißt das? často znamená „Čo to znamená?“"
    ],
    "id": "a1-heißen",
    "layout": "standardStudy"
  }
}
```

---

## Finding 34

**Audit ID:** `LRB088-0034`
**Finding Stable ID:** `g2/a1/sk|a1-heissen|a1.card.a1-heissen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-heissen`
**Field / path:** `a1.card.a1-heissen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Hovorte si • Zmysel
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Volať sa • Znamenať","study":{"translation":"Volať sa • Znamenať","explanation":["Hlavná myšlienka: heißen sa najčastejšie používa na vyjadrenie mena.","Ich heiße ... znamená „Volám sa ...“.","Pri slovách alebo výrazoch môže heißen znamenať aj znamenať.","Na úrovni A1 je najdôležitejšia otázka Wie heißt du?"],"examples":[{"de":"Ich heiße Anna.","lv":"Volám sa Anna."},{"de":"Wie heißt du?","lv":"Ako sa voláš?"},{"de":"Wie heißt das auf Deutsch?","lv":"Ako sa to povie po nemecky?"},{"de":"Was heißt das?","lv":"Čo to znamená?"}],"comparison":[{"word":"heißen","meaning":"volať sa • znamenať","example":"Ich heiße Anna. = Volám sa Anna."},{"word":"nennen","meaning":"nazvať • volať","example":"Er nennt mich Tom. = Volá ma Tom."},{"word":"bedeuten","meaning":"znamenať","example":"Was bedeutet das? = Čo to znamená?"},{"word":"rufen","meaning":"volať • zavolať","example":"Ich rufe dich. = Volám ťa."},{"word":"anrufen","meaning":"telefonovať • zavolať","example":"Ich rufe dich an. = Zavolám ti."}],"tip":{"text":"Zapamätaj si: Ich heiße ... = Volám sa ..."},"important":["Wie heißt du? znamená „Ako sa voláš?“","Was heißt das? často znamená „Čo to znamená?“"],"id":"a1-heißen","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "heißen",
  "lv": "Volať sa • Znamenať",
  "level": "A1",
  "study": {
    "translation": "Volať sa • Znamenať",
    "explanation": [
      "Hlavná myšlienka: heißen sa najčastejšie používa na vyjadrenie mena.",
      "Ich heiße ... znamená „Volám sa ...“.",
      "Pri slovách alebo výrazoch môže heißen znamenať aj znamenať.",
      "Na úrovni A1 je najdôležitejšia otázka Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Volám sa Anna."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Ako sa voláš?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Ako sa to povie po nemecky?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Čo to znamená?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "volať sa • znamenať",
        "example": "Ich heiße Anna. = Volám sa Anna."
      },
      {
        "word": "nennen",
        "meaning": "nazvať • volať",
        "example": "Er nennt mich Tom. = Volá ma Tom."
      },
      {
        "word": "bedeuten",
        "meaning": "znamenať",
        "example": "Was bedeutet das? = Čo to znamená?"
      },
      {
        "word": "rufen",
        "meaning": "volať • zavolať",
        "example": "Ich rufe dich. = Volám ťa."
      },
      {
        "word": "anrufen",
        "meaning": "telefonovať • zavolať",
        "example": "Ich rufe dich an. = Zavolám ti."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: Ich heiße ... = Volám sa ..."
    },
    "important": [
      "Wie heißt du? znamená „Ako sa voláš?“",
      "Was heißt das? často znamená „Čo to znamená?“"
    ],
    "id": "a1-heißen",
    "layout": "standardStudy"
  }
}
```

---

## Finding 35

**Audit ID:** `LRB088-0035`
**Finding Stable ID:** `g2/a1/sk|a1-hoeren-study|a1.card.a1-hoeren-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-hoeren-study`
**Field / path:** `a1.card.a1-hoeren-study.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Počúvať • Počúvať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Počuť • Počúvať","study":{"translation":"Počuť • Počúvať","explanation":["Hlavná myšlienka: hören znamená počuť zvuk alebo počúvať hudbu či hovorené slovo.","Podľa kontextu vyjadruje vnímanie zvuku alebo vedomé počúvanie.","Používa sa pri zvukoch, hudbe a tom, čo človek počuje."],"examples":[{"de":"Ich höre Musik.","lv":"Počúvam hudbu."},{"de":"Die Kinder hören eine Geschichte.","lv":"Deti počúvajú príbeh."},{"de":"Ich höre dich.","lv":"Počujem ťa."}],"tip":["Pri hudbe alebo príbehu sa hören často prekladá ako počúvať.","Pri zachytení zvuku sa hören prekladá ako počuť."],"important":["hören môže znamenať počuť aj počúvať.","Správny slovenský význam určuje kontext."],"id":"a1-hoeren-study","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hören",
  "lv": "Počuť • Počúvať",
  "level": "A1",
  "study": {
    "translation": "Počuť • Počúvať",
    "explanation": [
      "Hlavná myšlienka: hören znamená počuť zvuk alebo počúvať hudbu či hovorené slovo.",
      "Podľa kontextu vyjadruje vnímanie zvuku alebo vedomé počúvanie.",
      "Používa sa pri zvukoch, hudbe a tom, čo človek počuje."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Počúvam hudbu."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Deti počúvajú príbeh."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Počujem ťa."
      }
    ],
    "tip": [
      "Pri hudbe alebo príbehu sa hören často prekladá ako počúvať.",
      "Pri zachytení zvuku sa hören prekladá ako počuť."
    ],
    "important": [
      "hören môže znamenať počuť aj počúvať.",
      "Správny slovenský význam určuje kontext."
    ],
    "id": "a1-hoeren-study",
    "layout": "standardStudy"
  }
}
```

---

## Finding 36

**Audit ID:** `LRB088-0036`
**Finding Stable ID:** `g2/a1/sk|a1-hoeren-study|a1.card.a1-hoeren-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-hoeren-study`
**Field / path:** `a1.card.a1-hoeren-study.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Počúvať • Počúvať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Počuť • Počúvať","study":{"translation":"Počuť • Počúvať","explanation":["Hlavná myšlienka: hören znamená počuť zvuk alebo počúvať hudbu či hovorené slovo.","Podľa kontextu vyjadruje vnímanie zvuku alebo vedomé počúvanie.","Používa sa pri zvukoch, hudbe a tom, čo človek počuje."],"examples":[{"de":"Ich höre Musik.","lv":"Počúvam hudbu."},{"de":"Die Kinder hören eine Geschichte.","lv":"Deti počúvajú príbeh."},{"de":"Ich höre dich.","lv":"Počujem ťa."}],"tip":["Pri hudbe alebo príbehu sa hören často prekladá ako počúvať.","Pri zachytení zvuku sa hören prekladá ako počuť."],"important":["hören môže znamenať počuť aj počúvať.","Správny slovenský význam určuje kontext."],"id":"a1-hoeren-study","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hören",
  "lv": "Počuť • Počúvať",
  "level": "A1",
  "study": {
    "translation": "Počuť • Počúvať",
    "explanation": [
      "Hlavná myšlienka: hören znamená počuť zvuk alebo počúvať hudbu či hovorené slovo.",
      "Podľa kontextu vyjadruje vnímanie zvuku alebo vedomé počúvanie.",
      "Používa sa pri zvukoch, hudbe a tom, čo človek počuje."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Počúvam hudbu."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Deti počúvajú príbeh."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Počujem ťa."
      }
    ],
    "tip": [
      "Pri hudbe alebo príbehu sa hören často prekladá ako počúvať.",
      "Pri zachytení zvuku sa hören prekladá ako počuť."
    ],
    "important": [
      "hören môže znamenať počuť aj počúvať.",
      "Správny slovenský význam určuje kontext."
    ],
    "id": "a1-hoeren-study",
    "layout": "standardStudy"
  }
}
```

---

## Finding 37

**Audit ID:** `LRB088-0037`
**Finding Stable ID:** `g2/a1/sk|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-huebsch`
**Field / path:** `a1.card.a1-huebsch.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** pekný • atraktívny vzhľadom
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pekný","study":{"translation":"Pekný","explanation":["Hlavná myšlienka: hübsch znamená pekný, pôvabný alebo vzhľadovo príťažlivý.","hübsch často opisuje vzhľad človeka, oblečenia, miestnosti alebo predmetu.","Slovenské milý môže byť v niektorých kontextoch možné, ale ako hlavný preklad je príliš široké.","Povahu alebo milé správanie v nemčine častejšie vyjadruje nett."],"examples":[{"de":"Sie trägt ein hübsches Kleid.","lv":"Má na sebe pekné šaty."},{"de":"Das Zimmer ist hübsch.","lv":"Izba je pekná."},{"de":"Das ist ein hübsches Bild.","lv":"To je pekný obraz."}],"comparison":[{"word":"hübsch","meaning":"pekný • vzhľadovo príťažlivý","example":"Das ist ein hübsches Kleid. = To sú pekné šaty."},{"word":"schön","meaning":"krásny • príjemný","example":"Der Garten ist schön. = Záhrada je krásna."},{"word":"nett","meaning":"milý • láskavý","example":"Sie ist sehr nett. = Je veľmi milá."}],"tip":{"text":"Zapamätaj si: hübsch opisuje najmä pekný vzhľad, kým nett častejšie opisuje milého človeka alebo správanie."},"important":["hübsch nie je univerzálny preklad slovenského slova „milý“.","Pri povahe alebo láskavom správaní je zvyčajne vhodnejšie nett."],"id":"a1-huebsch","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hübsch",
  "lv": "Pekný",
  "level": "A1",
  "study": {
    "translation": "Pekný",
    "explanation": [
      "Hlavná myšlienka: hübsch znamená pekný, pôvabný alebo vzhľadovo príťažlivý.",
      "hübsch často opisuje vzhľad človeka, oblečenia, miestnosti alebo predmetu.",
      "Slovenské milý môže byť v niektorých kontextoch možné, ale ako hlavný preklad je príliš široké.",
      "Povahu alebo milé správanie v nemčine častejšie vyjadruje nett."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "Má na sebe pekné šaty."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "Izba je pekná."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "To je pekný obraz."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "pekný • vzhľadovo príťažlivý",
        "example": "Das ist ein hübsches Kleid. = To sú pekné šaty."
      },
      {
        "word": "schön",
        "meaning": "krásny • príjemný",
        "example": "Der Garten ist schön. = Záhrada je krásna."
      },
      {
        "word": "nett",
        "meaning": "milý • láskavý",
        "example": "Sie ist sehr nett. = Je veľmi milá."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: hübsch opisuje najmä pekný vzhľad, kým nett častejšie opisuje milého človeka alebo správanie."
    },
    "important": [
      "hübsch nie je univerzálny preklad slovenského slova „milý“.",
      "Pri povahe alebo láskavom správaní je zvyčajne vhodnejšie nett."
    ],
    "id": "a1-huebsch",
    "layout": "standardStudy"
  }
}
```

---

## Finding 38

**Audit ID:** `LRB088-0038`
**Finding Stable ID:** `g2/a1/sk|a1-ihr|a1.card.a1-ihr.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vy • Ona
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vy • Jej","study":{"translation":"Vy • Jej","explanation":["Hlavná myšlienka: ihr má viac použití — označuje neformálne „vy“ pre viac osôb, datív zámena sie „jej“ alebo privlastňovacie „jej“.","Ako oslovenie viacerých ľudí sa ihr prekladá ako vy: Kommt ihr mit? = Idete s nami?","Ako privlastňovacie zámeno ihr znamená jej: ihr Buch = jej kniha.","Ako datív zámena sie ihr znamená jej: Ich gebe ihr das Buch. = Dávam jej tú knihu.","Tvar slovesa, napríklad kommt alebo habt, ukazuje použitie „vy“.","Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr."],"examples":[{"de":"Kommt ihr heute Abend?","lv":"Prídete dnes večer?"},{"de":"Ich gebe ihr das Buch.","lv":"Dávam jej tú knihu."},{"de":"Wo wohnt ihr?","lv":"Kde bývate?"},{"de":"Er schreibt ihr einen Brief.","lv":"Píše jej list."},{"de":"Habt ihr Zeit?","lv":"Máte čas?"},{"de":"Das ist ihr Auto.","lv":"To je jej auto."}],"tip":["ihr so slovesom v druhej osobe množného čísla, napríklad kommt alebo habt, znamená „vy“; datívne alebo privlastňovacie ihr znamená „jej“.","Habt ihr ...? a Kommt ihr ...? = vy; Ich gebe ihr ... a ihr Buch = jej."],"important":["ihr = vy pri oslovení viacerých osôb alebo jej v datíve a pri privlastnení; rozhoduje kontext.","Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr.","Nesprávne ako zdvorilé oslovenie: Ihr. Správne: Sie."],"id":"a1-ihr","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "Vy • Jej",
  "level": "A1",
  "study": {
    "translation": "Vy • Jej",
    "explanation": [
      "Hlavná myšlienka: ihr má viac použití — označuje neformálne „vy“ pre viac osôb, datív zámena sie „jej“ alebo privlastňovacie „jej“.",
      "Ako oslovenie viacerých ľudí sa ihr prekladá ako vy: Kommt ihr mit? = Idete s nami?",
      "Ako privlastňovacie zámeno ihr znamená jej: ihr Buch = jej kniha.",
      "Ako datív zámena sie ihr znamená jej: Ich gebe ihr das Buch. = Dávam jej tú knihu.",
      "Tvar slovesa, napríklad kommt alebo habt, ukazuje použitie „vy“.",
      "Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Prídete dnes večer?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Dávam jej tú knihu."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Kde bývate?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Píše jej list."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Máte čas?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "To je jej auto."
      }
    ],
    "tip": [
      "ihr so slovesom v druhej osobe množného čísla, napríklad kommt alebo habt, znamená „vy“; datívne alebo privlastňovacie ihr znamená „jej“.",
      "Habt ihr ...? a Kommt ihr ...? = vy; Ich gebe ihr ... a ihr Buch = jej."
    ],
    "important": [
      "ihr = vy pri oslovení viacerých osôb alebo jej v datíve a pri privlastnení; rozhoduje kontext.",
      "Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr.",
      "Nesprávne ako zdvorilé oslovenie: Ihr. Správne: Sie."
    ],
    "id": "a1-ihr",
    "layout": "standardStudy"
  }
}
```

---

## Finding 39

**Audit ID:** `LRB088-0039`
**Finding Stable ID:** `g2/a1/sk|a1-ihr|a1.card.a1-ihr.study.tip[0]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.study.tip[0]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ihr so ​​slovesom dsk. tvar (kommt, habt) = ty • Ihr vedľa slova ako datív alebo privlastňovacie = ona/jej.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vy • Jej","study":{"translation":"Vy • Jej","explanation":["Hlavná myšlienka: ihr má viac použití — označuje neformálne „vy“ pre viac osôb, datív zámena sie „jej“ alebo privlastňovacie „jej“.","Ako oslovenie viacerých ľudí sa ihr prekladá ako vy: Kommt ihr mit? = Idete s nami?","Ako privlastňovacie zámeno ihr znamená jej: ihr Buch = jej kniha.","Ako datív zámena sie ihr znamená jej: Ich gebe ihr das Buch. = Dávam jej tú knihu.","Tvar slovesa, napríklad kommt alebo habt, ukazuje použitie „vy“.","Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr."],"examples":[{"de":"Kommt ihr heute Abend?","lv":"Prídete dnes večer?"},{"de":"Ich gebe ihr das Buch.","lv":"Dávam jej tú knihu."},{"de":"Wo wohnt ihr?","lv":"Kde bývate?"},{"de":"Er schreibt ihr einen Brief.","lv":"Píše jej list."},{"de":"Habt ihr Zeit?","lv":"Máte čas?"},{"de":"Das ist ihr Auto.","lv":"To je jej auto."}],"tip":["ihr so slovesom v druhej osobe množného čísla, napríklad kommt alebo habt, znamená „vy“; datívne alebo privlastňovacie ihr znamená „jej“.","Habt ihr ...? a Kommt ihr ...? = vy; Ich gebe ihr ... a ihr Buch = jej."],"important":["ihr = vy pri oslovení viacerých osôb alebo jej v datíve a pri privlastnení; rozhoduje kontext.","Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr.","Nesprávne ako zdvorilé oslovenie: Ihr. Správne: Sie."],"id":"a1-ihr","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "Vy • Jej",
  "level": "A1",
  "study": {
    "translation": "Vy • Jej",
    "explanation": [
      "Hlavná myšlienka: ihr má viac použití — označuje neformálne „vy“ pre viac osôb, datív zámena sie „jej“ alebo privlastňovacie „jej“.",
      "Ako oslovenie viacerých ľudí sa ihr prekladá ako vy: Kommt ihr mit? = Idete s nami?",
      "Ako privlastňovacie zámeno ihr znamená jej: ihr Buch = jej kniha.",
      "Ako datív zámena sie ihr znamená jej: Ich gebe ihr das Buch. = Dávam jej tú knihu.",
      "Tvar slovesa, napríklad kommt alebo habt, ukazuje použitie „vy“.",
      "Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Prídete dnes večer?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Dávam jej tú knihu."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Kde bývate?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Píše jej list."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Máte čas?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "To je jej auto."
      }
    ],
    "tip": [
      "ihr so slovesom v druhej osobe množného čísla, napríklad kommt alebo habt, znamená „vy“; datívne alebo privlastňovacie ihr znamená „jej“.",
      "Habt ihr ...? a Kommt ihr ...? = vy; Ich gebe ihr ... a ihr Buch = jej."
    ],
    "important": [
      "ihr = vy pri oslovení viacerých osôb alebo jej v datíve a pri privlastnení; rozhoduje kontext.",
      "Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr.",
      "Nesprávne ako zdvorilé oslovenie: Ihr. Správne: Sie."
    ],
    "id": "a1-ihr",
    "layout": "standardStudy"
  }
}
```

---

## Finding 40

**Audit ID:** `LRB088-0040`
**Finding Stable ID:** `g2/a1/sk|a1-ihr|a1.card.a1-ihr.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vy • Ona
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vy • Jej","study":{"translation":"Vy • Jej","explanation":["Hlavná myšlienka: ihr má viac použití — označuje neformálne „vy“ pre viac osôb, datív zámena sie „jej“ alebo privlastňovacie „jej“.","Ako oslovenie viacerých ľudí sa ihr prekladá ako vy: Kommt ihr mit? = Idete s nami?","Ako privlastňovacie zámeno ihr znamená jej: ihr Buch = jej kniha.","Ako datív zámena sie ihr znamená jej: Ich gebe ihr das Buch. = Dávam jej tú knihu.","Tvar slovesa, napríklad kommt alebo habt, ukazuje použitie „vy“.","Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr."],"examples":[{"de":"Kommt ihr heute Abend?","lv":"Prídete dnes večer?"},{"de":"Ich gebe ihr das Buch.","lv":"Dávam jej tú knihu."},{"de":"Wo wohnt ihr?","lv":"Kde bývate?"},{"de":"Er schreibt ihr einen Brief.","lv":"Píše jej list."},{"de":"Habt ihr Zeit?","lv":"Máte čas?"},{"de":"Das ist ihr Auto.","lv":"To je jej auto."}],"tip":["ihr so slovesom v druhej osobe množného čísla, napríklad kommt alebo habt, znamená „vy“; datívne alebo privlastňovacie ihr znamená „jej“.","Habt ihr ...? a Kommt ihr ...? = vy; Ich gebe ihr ... a ihr Buch = jej."],"important":["ihr = vy pri oslovení viacerých osôb alebo jej v datíve a pri privlastnení; rozhoduje kontext.","Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr.","Nesprávne ako zdvorilé oslovenie: Ihr. Správne: Sie."],"id":"a1-ihr","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "Vy • Jej",
  "level": "A1",
  "study": {
    "translation": "Vy • Jej",
    "explanation": [
      "Hlavná myšlienka: ihr má viac použití — označuje neformálne „vy“ pre viac osôb, datív zámena sie „jej“ alebo privlastňovacie „jej“.",
      "Ako oslovenie viacerých ľudí sa ihr prekladá ako vy: Kommt ihr mit? = Idete s nami?",
      "Ako privlastňovacie zámeno ihr znamená jej: ihr Buch = jej kniha.",
      "Ako datív zámena sie ihr znamená jej: Ich gebe ihr das Buch. = Dávam jej tú knihu.",
      "Tvar slovesa, napríklad kommt alebo habt, ukazuje použitie „vy“.",
      "Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Prídete dnes večer?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Dávam jej tú knihu."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Kde bývate?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Píše jej list."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Máte čas?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "To je jej auto."
      }
    ],
    "tip": [
      "ihr so slovesom v druhej osobe množného čísla, napríklad kommt alebo habt, znamená „vy“; datívne alebo privlastňovacie ihr znamená „jej“.",
      "Habt ihr ...? a Kommt ihr ...? = vy; Ich gebe ihr ... a ihr Buch = jej."
    ],
    "important": [
      "ihr = vy pri oslovení viacerých osôb alebo jej v datíve a pri privlastnení; rozhoduje kontext.",
      "Zdvorilé oslovenie je vždy Sie s veľkým písmenom, nie ihr.",
      "Nesprávne ako zdvorilé oslovenie: Ihr. Správne: Sie."
    ],
    "id": "a1-ihr",
    "layout": "standardStudy"
  }
}
```

---

## Finding 41

**Audit ID:** `LRB088-0041`
**Finding Stable ID:** `g2/a1/sk|a1-im|a1.card.a1-im.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** V • Kde?
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"V • Kde?","study":{"translation":"V • Kde?","explanation":["im je skrátenie predložky in a člena dem.","Plný tvar je in dem.","Používa sa s podstatnými menami mužského a stredného rodu v datíve, keď ide o polohu a odpoveď na otázku kde?","Používa sa aj pri mesiacoch a ročných obdobiach: im Januar, im Sommer, im Winter.","V praxi sa takmer vždy používa im namiesto plného in dem."],"examples":[{"de":"Ich bin im Park.","lv":"Som v parku."},{"de":"Wir wohnen im Zentrum.","lv":"Bývame v centre."},{"de":"Im Sommer ist es warm.","lv":"V lete je teplo."},{"de":"Er arbeitet im Büro.","lv":"Pracuje v kancelárii."},{"de":"Das Kind spielt im Garten.","lv":"Dieťa sa hrá v záhrade."},{"de":"Im Januar fahre ich nach Wien.","lv":"V januári idem do Viedne."},{"de":"Sie ist im Kino.","lv":"Je v kine."},{"de":"Wir treffen uns im Restaurant.","lv":"Stretneme sa v reštaurácii."}],"comparison":[{"word":"im","meaning":"v • kde? • datív","example":"im Park = v parku"},{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"in","meaning":"v alebo do bez zlúčeného člena","example":"in Berlin = v Berlíne"},{"word":"am","meaning":"pri • kde? • datív","example":"am Fenster = pri okne"},{"word":"auf","meaning":"na povrchu","example":"auf dem Tisch = na stole"}],"tip":["Zapamätaj si: in + dem = im; pri polohe odpovedá na otázku kde?","Smer kam? → ins; poloha kde? → im."],"important":["im = in dem a používa sa s mužským alebo stredným rodom v datíve.","Odpovedá na otázku kde?, nie kam?; vyjadruje polohu, nie smer.","Pri mesiacoch a ročných obdobiach: im März, im Herbst.","Pri ženskom rode: in der Schule, nie im Schule."],"id":"a1-im","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "V • Kde?",
  "level": "A1",
  "study": {
    "translation": "V • Kde?",
    "explanation": [
      "im je skrátenie predložky in a člena dem.",
      "Plný tvar je in dem.",
      "Používa sa s podstatnými menami mužského a stredného rodu v datíve, keď ide o polohu a odpoveď na otázku kde?",
      "Používa sa aj pri mesiacoch a ročných obdobiach: im Januar, im Sommer, im Winter.",
      "V praxi sa takmer vždy používa im namiesto plného in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Som v parku."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Bývame v centre."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "V lete je teplo."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Pracuje v kancelárii."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Dieťa sa hrá v záhrade."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "V januári idem do Viedne."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Je v kine."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Stretneme sa v reštaurácii."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Park = v parku"
      },
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "in",
        "meaning": "v alebo do bez zlúčeného člena",
        "example": "in Berlin = v Berlíne"
      },
      {
        "word": "am",
        "meaning": "pri • kde? • datív",
        "example": "am Fenster = pri okne"
      },
      {
        "word": "auf",
        "meaning": "na povrchu",
        "example": "auf dem Tisch = na stole"
      }
    ],
    "tip": [
      "Zapamätaj si: in + dem = im; pri polohe odpovedá na otázku kde?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "im = in dem a používa sa s mužským alebo stredným rodom v datíve.",
      "Odpovedá na otázku kde?, nie kam?; vyjadruje polohu, nie smer.",
      "Pri mesiacoch a ročných obdobiach: im März, im Herbst.",
      "Pri ženskom rode: in der Schule, nie im Schule."
    ],
    "id": "a1-im",
    "layout": "standardStudy"
  }
}
```

---

## Finding 42

**Audit ID:** `LRB088-0042`
**Finding Stable ID:** `g2/a1/sk|a1-im|a1.card.a1-im.study.tip[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.study.tip[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Kde? → v • Kde? → im - nezamieňajte si tieto dve veci!
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"V • Kde?","study":{"translation":"V • Kde?","explanation":["im je skrátenie predložky in a člena dem.","Plný tvar je in dem.","Používa sa s podstatnými menami mužského a stredného rodu v datíve, keď ide o polohu a odpoveď na otázku kde?","Používa sa aj pri mesiacoch a ročných obdobiach: im Januar, im Sommer, im Winter.","V praxi sa takmer vždy používa im namiesto plného in dem."],"examples":[{"de":"Ich bin im Park.","lv":"Som v parku."},{"de":"Wir wohnen im Zentrum.","lv":"Bývame v centre."},{"de":"Im Sommer ist es warm.","lv":"V lete je teplo."},{"de":"Er arbeitet im Büro.","lv":"Pracuje v kancelárii."},{"de":"Das Kind spielt im Garten.","lv":"Dieťa sa hrá v záhrade."},{"de":"Im Januar fahre ich nach Wien.","lv":"V januári idem do Viedne."},{"de":"Sie ist im Kino.","lv":"Je v kine."},{"de":"Wir treffen uns im Restaurant.","lv":"Stretneme sa v reštaurácii."}],"comparison":[{"word":"im","meaning":"v • kde? • datív","example":"im Park = v parku"},{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"in","meaning":"v alebo do bez zlúčeného člena","example":"in Berlin = v Berlíne"},{"word":"am","meaning":"pri • kde? • datív","example":"am Fenster = pri okne"},{"word":"auf","meaning":"na povrchu","example":"auf dem Tisch = na stole"}],"tip":["Zapamätaj si: in + dem = im; pri polohe odpovedá na otázku kde?","Smer kam? → ins; poloha kde? → im."],"important":["im = in dem a používa sa s mužským alebo stredným rodom v datíve.","Odpovedá na otázku kde?, nie kam?; vyjadruje polohu, nie smer.","Pri mesiacoch a ročných obdobiach: im März, im Herbst.","Pri ženskom rode: in der Schule, nie im Schule."],"id":"a1-im","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "V • Kde?",
  "level": "A1",
  "study": {
    "translation": "V • Kde?",
    "explanation": [
      "im je skrátenie predložky in a člena dem.",
      "Plný tvar je in dem.",
      "Používa sa s podstatnými menami mužského a stredného rodu v datíve, keď ide o polohu a odpoveď na otázku kde?",
      "Používa sa aj pri mesiacoch a ročných obdobiach: im Januar, im Sommer, im Winter.",
      "V praxi sa takmer vždy používa im namiesto plného in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Som v parku."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Bývame v centre."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "V lete je teplo."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Pracuje v kancelárii."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Dieťa sa hrá v záhrade."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "V januári idem do Viedne."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Je v kine."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Stretneme sa v reštaurácii."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Park = v parku"
      },
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "in",
        "meaning": "v alebo do bez zlúčeného člena",
        "example": "in Berlin = v Berlíne"
      },
      {
        "word": "am",
        "meaning": "pri • kde? • datív",
        "example": "am Fenster = pri okne"
      },
      {
        "word": "auf",
        "meaning": "na povrchu",
        "example": "auf dem Tisch = na stole"
      }
    ],
    "tip": [
      "Zapamätaj si: in + dem = im; pri polohe odpovedá na otázku kde?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "im = in dem a používa sa s mužským alebo stredným rodom v datíve.",
      "Odpovedá na otázku kde?, nie kam?; vyjadruje polohu, nie smer.",
      "Pri mesiacoch a ročných obdobiach: im März, im Herbst.",
      "Pri ženskom rode: in der Schule, nie im Schule."
    ],
    "id": "a1-im",
    "layout": "standardStudy"
  }
}
```

---

## Finding 43

**Audit ID:** `LRB088-0043`
**Finding Stable ID:** `g2/a1/sk|a1-im|a1.card.a1-im.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** V • Kde?
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"V • Kde?","study":{"translation":"V • Kde?","explanation":["im je skrátenie predložky in a člena dem.","Plný tvar je in dem.","Používa sa s podstatnými menami mužského a stredného rodu v datíve, keď ide o polohu a odpoveď na otázku kde?","Používa sa aj pri mesiacoch a ročných obdobiach: im Januar, im Sommer, im Winter.","V praxi sa takmer vždy používa im namiesto plného in dem."],"examples":[{"de":"Ich bin im Park.","lv":"Som v parku."},{"de":"Wir wohnen im Zentrum.","lv":"Bývame v centre."},{"de":"Im Sommer ist es warm.","lv":"V lete je teplo."},{"de":"Er arbeitet im Büro.","lv":"Pracuje v kancelárii."},{"de":"Das Kind spielt im Garten.","lv":"Dieťa sa hrá v záhrade."},{"de":"Im Januar fahre ich nach Wien.","lv":"V januári idem do Viedne."},{"de":"Sie ist im Kino.","lv":"Je v kine."},{"de":"Wir treffen uns im Restaurant.","lv":"Stretneme sa v reštaurácii."}],"comparison":[{"word":"im","meaning":"v • kde? • datív","example":"im Park = v parku"},{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"in","meaning":"v alebo do bez zlúčeného člena","example":"in Berlin = v Berlíne"},{"word":"am","meaning":"pri • kde? • datív","example":"am Fenster = pri okne"},{"word":"auf","meaning":"na povrchu","example":"auf dem Tisch = na stole"}],"tip":["Zapamätaj si: in + dem = im; pri polohe odpovedá na otázku kde?","Smer kam? → ins; poloha kde? → im."],"important":["im = in dem a používa sa s mužským alebo stredným rodom v datíve.","Odpovedá na otázku kde?, nie kam?; vyjadruje polohu, nie smer.","Pri mesiacoch a ročných obdobiach: im März, im Herbst.","Pri ženskom rode: in der Schule, nie im Schule."],"id":"a1-im","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "V • Kde?",
  "level": "A1",
  "study": {
    "translation": "V • Kde?",
    "explanation": [
      "im je skrátenie predložky in a člena dem.",
      "Plný tvar je in dem.",
      "Používa sa s podstatnými menami mužského a stredného rodu v datíve, keď ide o polohu a odpoveď na otázku kde?",
      "Používa sa aj pri mesiacoch a ročných obdobiach: im Januar, im Sommer, im Winter.",
      "V praxi sa takmer vždy používa im namiesto plného in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Som v parku."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Bývame v centre."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "V lete je teplo."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Pracuje v kancelárii."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Dieťa sa hrá v záhrade."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "V januári idem do Viedne."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Je v kine."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Stretneme sa v reštaurácii."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Park = v parku"
      },
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "in",
        "meaning": "v alebo do bez zlúčeného člena",
        "example": "in Berlin = v Berlíne"
      },
      {
        "word": "am",
        "meaning": "pri • kde? • datív",
        "example": "am Fenster = pri okne"
      },
      {
        "word": "auf",
        "meaning": "na povrchu",
        "example": "auf dem Tisch = na stole"
      }
    ],
    "tip": [
      "Zapamätaj si: in + dem = im; pri polohe odpovedá na otázku kde?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "im = in dem a používa sa s mužským alebo stredným rodom v datíve.",
      "Odpovedá na otázku kde?, nie kam?; vyjadruje polohu, nie smer.",
      "Pri mesiacoch a ročných obdobiach: im März, im Herbst.",
      "Pri ženskom rode: in der Schule, nie im Schule."
    ],
    "id": "a1-im",
    "layout": "standardStudy"
  }
}
```

---

## Finding 44

**Audit ID:** `LRB088-0044`
**Finding Stable ID:** `g2/a1/sk|a1-in|a1.card.a1-in.study.important[0]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-in`
**Field / path:** `a1.card.a1-in.study.important[0]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** In nie vždy doslova znamená „in“ • Lotyščina sa často používa v Berlíne, v škole, v kine.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"V • Do","study":{"translation":"V • Do","explanation":["Hlavná myšlienka: in zvyčajne znamená v alebo do, keď ide o priestor, krajinu, mesto či budovu.","Pri polohe sa in často prekladá ako v: in Berlin = v Berlíne.","Pri pohybe dovnútra in znamená do: ins Kino = do kina.","Slovenský preklad sa mení podľa kontextu."],"examples":[{"de":"Ich bin in Berlin.","lv":"Som v Berlíne."},{"de":"Ich gehe in die Schule.","lv":"Idem do školy."},{"de":"Das Buch ist in der Tasche.","lv":"Kniha je v taške."},{"de":"Wir gehen ins Kino.","lv":"Ideme do kina."}],"tip":{"text":"Zapamätaj si: poloha vnútri → in s datívom; smer dovnútra → in s akuzatívom."},"important":["in sa neprekladá vždy rovnakým slovom; po slovensky môže byť v Berlíne, v škole alebo do kina.","Pri povrchu sa často používa auf, nie in."],"id":"a1-in","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "in",
  "lv": "V • Do",
  "level": "A1",
  "study": {
    "translation": "V • Do",
    "explanation": [
      "Hlavná myšlienka: in zvyčajne znamená v alebo do, keď ide o priestor, krajinu, mesto či budovu.",
      "Pri polohe sa in často prekladá ako v: in Berlin = v Berlíne.",
      "Pri pohybe dovnútra in znamená do: ins Kino = do kina.",
      "Slovenský preklad sa mení podľa kontextu."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Som v Berlíne."
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Idem do školy."
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Kniha je v taške."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Ideme do kina."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: poloha vnútri → in s datívom; smer dovnútra → in s akuzatívom."
    },
    "important": [
      "in sa neprekladá vždy rovnakým slovom; po slovensky môže byť v Berlíne, v škole alebo do kina.",
      "Pri povrchu sa často používa auf, nie in."
    ],
    "id": "a1-in",
    "layout": "standardStudy"
  }
}
```

---

## Finding 45

**Audit ID:** `LRB088-0045`
**Finding Stable ID:** `g2/a1/sk|a1-ins|a1.card.a1-ins.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** V • V • Kde?
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Do • Kam?","study":{"translation":"Do • Kam?","explanation":["ins je skrátenie predložky in a člena das.","Plný tvar je in das.","Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?","Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.","V praxi sa takmer vždy používa ins namiesto plného in das."],"examples":[{"de":"Ich gehe ins Kino.","lv":"Idem do kina."},{"de":"Sie geht ins Bett.","lv":"Ide do postele."},{"de":"Wir fahren ins Ausland.","lv":"Cestujeme do zahraničia."},{"de":"Komm ins Haus!","lv":"Poď do domu!"},{"de":"Er steckt das Geld in den Geldbeutel.","lv":"Vkladá peniaze do peňaženky."},{"de":"Wir gehen ins Museum.","lv":"Ideme do múzea."},{"de":"Sie legt die Blumen ins Wasser.","lv":"Dáva kvety do vody."},{"de":"Fahr bitte ins Zentrum.","lv":"Choď, prosím, do centra."}],"comparison":[{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"im","meaning":"v • kde? • datív","example":"im Kino = v kine"},{"word":"in","meaning":"v alebo do s nezlúčeným členom","example":"in die Stadt = do mesta"},{"word":"aufs","meaning":"na povrch • akuzatív","example":"aufs Dach = na strechu"},{"word":"zum","meaning":"k • ku • datív","example":"zum Arzt = k lekárovi"}],"tip":["Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?","Smer kam? → ins; poloha kde? → im."],"important":["ins = in das a používa sa so stredným rodom v akuzatíve.","Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.","Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.","Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."],"id":"a1-ins","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "Do • Kam?",
  "level": "A1",
  "study": {
    "translation": "Do • Kam?",
    "explanation": [
      "ins je skrátenie predložky in a člena das.",
      "Plný tvar je in das.",
      "Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?",
      "Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.",
      "V praxi sa takmer vždy používa ins namiesto plného in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Idem do kina."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Ide do postele."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Cestujeme do zahraničia."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Poď do domu!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Vkladá peniaze do peňaženky."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Ideme do múzea."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Dáva kvety do vody."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Choď, prosím, do centra."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Kino = v kine"
      },
      {
        "word": "in",
        "meaning": "v alebo do s nezlúčeným členom",
        "example": "in die Stadt = do mesta"
      },
      {
        "word": "aufs",
        "meaning": "na povrch • akuzatív",
        "example": "aufs Dach = na strechu"
      },
      {
        "word": "zum",
        "meaning": "k • ku • datív",
        "example": "zum Arzt = k lekárovi"
      }
    ],
    "tip": [
      "Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "ins = in das a používa sa so stredným rodom v akuzatíve.",
      "Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.",
      "Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.",
      "Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."
    ],
    "id": "a1-ins",
    "layout": "standardStudy"
  }
}
```

---

## Finding 46

**Audit ID:** `LRB088-0046`
**Finding Stable ID:** `g2/a1/sk|a1-ins|a1.card.a1-ins.study.important[2]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.study.important[2]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Pre mužské: in den Wald • Pre ženy: in die Schule.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Do • Kam?","study":{"translation":"Do • Kam?","explanation":["ins je skrátenie predložky in a člena das.","Plný tvar je in das.","Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?","Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.","V praxi sa takmer vždy používa ins namiesto plného in das."],"examples":[{"de":"Ich gehe ins Kino.","lv":"Idem do kina."},{"de":"Sie geht ins Bett.","lv":"Ide do postele."},{"de":"Wir fahren ins Ausland.","lv":"Cestujeme do zahraničia."},{"de":"Komm ins Haus!","lv":"Poď do domu!"},{"de":"Er steckt das Geld in den Geldbeutel.","lv":"Vkladá peniaze do peňaženky."},{"de":"Wir gehen ins Museum.","lv":"Ideme do múzea."},{"de":"Sie legt die Blumen ins Wasser.","lv":"Dáva kvety do vody."},{"de":"Fahr bitte ins Zentrum.","lv":"Choď, prosím, do centra."}],"comparison":[{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"im","meaning":"v • kde? • datív","example":"im Kino = v kine"},{"word":"in","meaning":"v alebo do s nezlúčeným členom","example":"in die Stadt = do mesta"},{"word":"aufs","meaning":"na povrch • akuzatív","example":"aufs Dach = na strechu"},{"word":"zum","meaning":"k • ku • datív","example":"zum Arzt = k lekárovi"}],"tip":["Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?","Smer kam? → ins; poloha kde? → im."],"important":["ins = in das a používa sa so stredným rodom v akuzatíve.","Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.","Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.","Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."],"id":"a1-ins","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "Do • Kam?",
  "level": "A1",
  "study": {
    "translation": "Do • Kam?",
    "explanation": [
      "ins je skrátenie predložky in a člena das.",
      "Plný tvar je in das.",
      "Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?",
      "Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.",
      "V praxi sa takmer vždy používa ins namiesto plného in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Idem do kina."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Ide do postele."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Cestujeme do zahraničia."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Poď do domu!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Vkladá peniaze do peňaženky."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Ideme do múzea."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Dáva kvety do vody."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Choď, prosím, do centra."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Kino = v kine"
      },
      {
        "word": "in",
        "meaning": "v alebo do s nezlúčeným členom",
        "example": "in die Stadt = do mesta"
      },
      {
        "word": "aufs",
        "meaning": "na povrch • akuzatív",
        "example": "aufs Dach = na strechu"
      },
      {
        "word": "zum",
        "meaning": "k • ku • datív",
        "example": "zum Arzt = k lekárovi"
      }
    ],
    "tip": [
      "Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "ins = in das a používa sa so stredným rodom v akuzatíve.",
      "Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.",
      "Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.",
      "Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."
    ],
    "id": "a1-ins",
    "layout": "standardStudy"
  }
}
```

---

## Finding 47

**Audit ID:** `LRB088-0047`
**Finding Stable ID:** `g2/a1/sk|a1-ins|a1.card.a1-ins.study.tip[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.study.tip[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Kde? → v • Kde? → oni - to je hlavný rozdiel!
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Do • Kam?","study":{"translation":"Do • Kam?","explanation":["ins je skrátenie predložky in a člena das.","Plný tvar je in das.","Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?","Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.","V praxi sa takmer vždy používa ins namiesto plného in das."],"examples":[{"de":"Ich gehe ins Kino.","lv":"Idem do kina."},{"de":"Sie geht ins Bett.","lv":"Ide do postele."},{"de":"Wir fahren ins Ausland.","lv":"Cestujeme do zahraničia."},{"de":"Komm ins Haus!","lv":"Poď do domu!"},{"de":"Er steckt das Geld in den Geldbeutel.","lv":"Vkladá peniaze do peňaženky."},{"de":"Wir gehen ins Museum.","lv":"Ideme do múzea."},{"de":"Sie legt die Blumen ins Wasser.","lv":"Dáva kvety do vody."},{"de":"Fahr bitte ins Zentrum.","lv":"Choď, prosím, do centra."}],"comparison":[{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"im","meaning":"v • kde? • datív","example":"im Kino = v kine"},{"word":"in","meaning":"v alebo do s nezlúčeným členom","example":"in die Stadt = do mesta"},{"word":"aufs","meaning":"na povrch • akuzatív","example":"aufs Dach = na strechu"},{"word":"zum","meaning":"k • ku • datív","example":"zum Arzt = k lekárovi"}],"tip":["Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?","Smer kam? → ins; poloha kde? → im."],"important":["ins = in das a používa sa so stredným rodom v akuzatíve.","Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.","Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.","Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."],"id":"a1-ins","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "Do • Kam?",
  "level": "A1",
  "study": {
    "translation": "Do • Kam?",
    "explanation": [
      "ins je skrátenie predložky in a člena das.",
      "Plný tvar je in das.",
      "Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?",
      "Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.",
      "V praxi sa takmer vždy používa ins namiesto plného in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Idem do kina."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Ide do postele."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Cestujeme do zahraničia."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Poď do domu!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Vkladá peniaze do peňaženky."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Ideme do múzea."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Dáva kvety do vody."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Choď, prosím, do centra."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Kino = v kine"
      },
      {
        "word": "in",
        "meaning": "v alebo do s nezlúčeným členom",
        "example": "in die Stadt = do mesta"
      },
      {
        "word": "aufs",
        "meaning": "na povrch • akuzatív",
        "example": "aufs Dach = na strechu"
      },
      {
        "word": "zum",
        "meaning": "k • ku • datív",
        "example": "zum Arzt = k lekárovi"
      }
    ],
    "tip": [
      "Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "ins = in das a používa sa so stredným rodom v akuzatíve.",
      "Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.",
      "Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.",
      "Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."
    ],
    "id": "a1-ins",
    "layout": "standardStudy"
  }
}
```

---

## Finding 48

**Audit ID:** `LRB088-0048`
**Finding Stable ID:** `g2/a1/sk|a1-ins|a1.card.a1-ins.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** V • V • Kde?
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Do • Kam?","study":{"translation":"Do • Kam?","explanation":["ins je skrátenie predložky in a člena das.","Plný tvar je in das.","Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?","Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.","V praxi sa takmer vždy používa ins namiesto plného in das."],"examples":[{"de":"Ich gehe ins Kino.","lv":"Idem do kina."},{"de":"Sie geht ins Bett.","lv":"Ide do postele."},{"de":"Wir fahren ins Ausland.","lv":"Cestujeme do zahraničia."},{"de":"Komm ins Haus!","lv":"Poď do domu!"},{"de":"Er steckt das Geld in den Geldbeutel.","lv":"Vkladá peniaze do peňaženky."},{"de":"Wir gehen ins Museum.","lv":"Ideme do múzea."},{"de":"Sie legt die Blumen ins Wasser.","lv":"Dáva kvety do vody."},{"de":"Fahr bitte ins Zentrum.","lv":"Choď, prosím, do centra."}],"comparison":[{"word":"ins","meaning":"do • kam? • akuzatív","example":"ins Kino = do kina"},{"word":"im","meaning":"v • kde? • datív","example":"im Kino = v kine"},{"word":"in","meaning":"v alebo do s nezlúčeným členom","example":"in die Stadt = do mesta"},{"word":"aufs","meaning":"na povrch • akuzatív","example":"aufs Dach = na strechu"},{"word":"zum","meaning":"k • ku • datív","example":"zum Arzt = k lekárovi"}],"tip":["Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?","Smer kam? → ins; poloha kde? → im."],"important":["ins = in das a používa sa so stredným rodom v akuzatíve.","Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.","Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.","Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."],"id":"a1-ins","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "Do • Kam?",
  "level": "A1",
  "study": {
    "translation": "Do • Kam?",
    "explanation": [
      "ins je skrátenie predložky in a člena das.",
      "Plný tvar je in das.",
      "Používa sa s podstatnými menami stredného rodu v akuzatíve, keď ide o smer dovnútra a odpoveď na otázku kam?",
      "Často sa spája so slovesami gehen, fahren, kommen, legen a stecken.",
      "V praxi sa takmer vždy používa ins namiesto plného in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Idem do kina."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Ide do postele."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Cestujeme do zahraničia."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Poď do domu!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Vkladá peniaze do peňaženky."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Ideme do múzea."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Dáva kvety do vody."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Choď, prosím, do centra."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "do • kam? • akuzatív",
        "example": "ins Kino = do kina"
      },
      {
        "word": "im",
        "meaning": "v • kde? • datív",
        "example": "im Kino = v kine"
      },
      {
        "word": "in",
        "meaning": "v alebo do s nezlúčeným členom",
        "example": "in die Stadt = do mesta"
      },
      {
        "word": "aufs",
        "meaning": "na povrch • akuzatív",
        "example": "aufs Dach = na strechu"
      },
      {
        "word": "zum",
        "meaning": "k • ku • datív",
        "example": "zum Arzt = k lekárovi"
      }
    ],
    "tip": [
      "Zapamätaj si: in + das = ins; pri smere odpovedá na otázku kam?",
      "Smer kam? → ins; poloha kde? → im."
    ],
    "important": [
      "ins = in das a používa sa so stredným rodom v akuzatíve.",
      "Odpovedá na otázku kam?, nie kde?; vyjadruje smer, nie polohu.",
      "Pri mužskom rode: in den Wald; pri ženskom rode: in die Schule.",
      "Nezamieňaj: ins Kino gehen = ísť do kina; im Kino sein = byť v kine."
    ],
    "id": "a1-ins",
    "layout": "standardStudy"
  }
}
```

---

## Finding 49

**Audit ID:** `LRB088-0049`
**Finding Stable ID:** `g2/a1/sk|a1-kein|a1.card.a1-kein.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-kein`
**Field / path:** `a1.card.a1-kein.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Nikto • Nič
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Žiadny","study":{"translation":"Žiadny","explanation":["Hlavná myšlienka: kein je záporný člen, ktorý neguje podstatné meno; po slovensky podľa kontextu znamená nijaký, žiadny alebo sa vyjadrí slovesným záporom.","kein sa skloňuje podobne ako ein, napríklad kein, keine, keinen, a stojí pred podstatným menom.","Pri počítateľných osobách alebo veciach sa často prekladá ako nijaký alebo žiadny.","Pri nepočítateľných a abstraktných podstatných menách sa v slovenčine často použije spojenie s „nemám“ alebo „nie je“.","kein neguje podstatné meno; nicht zvyčajne neguje inú časť vety alebo celú výpoveď."],"examples":[{"de":"Ich habe kein Geld.","lv":"Nemám peniaze."},{"de":"Es gibt keine Milch mehr.","lv":"Mlieko už nie je."},{"de":"Kein Mensch war da.","lv":"Nebol tam nijaký človek."},{"de":"Ich habe keine Zeit.","lv":"Nemám čas."},{"de":"Das ist kein Problem.","lv":"To nie je nijaký problém."},{"de":"Wir haben keine Kinder.","lv":"Nemáme deti."}],"tip":["kein neguje podstatné meno; nicht neguje inú časť vety alebo celú výpoveď.","kein sa skloňuje podobne ako ein: kein, keine, keinen, keiner."],"important":["kein + podstatné meno vyjadruje, že nijaká alebo žiadna taká vec nie je.","Nesprávne: Ich habe nicht ein Geld. Správne: Ich habe kein Geld."],"id":"a1-kein","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kein",
  "lv": "Žiadny",
  "level": "A1",
  "study": {
    "translation": "Žiadny",
    "explanation": [
      "Hlavná myšlienka: kein je záporný člen, ktorý neguje podstatné meno; po slovensky podľa kontextu znamená nijaký, žiadny alebo sa vyjadrí slovesným záporom.",
      "kein sa skloňuje podobne ako ein, napríklad kein, keine, keinen, a stojí pred podstatným menom.",
      "Pri počítateľných osobách alebo veciach sa často prekladá ako nijaký alebo žiadny.",
      "Pri nepočítateľných a abstraktných podstatných menách sa v slovenčine často použije spojenie s „nemám“ alebo „nie je“.",
      "kein neguje podstatné meno; nicht zvyčajne neguje inú časť vety alebo celú výpoveď."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Nemám peniaze."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Mlieko už nie je."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Nebol tam nijaký človek."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Nemám čas."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "To nie je nijaký problém."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Nemáme deti."
      }
    ],
    "tip": [
      "kein neguje podstatné meno; nicht neguje inú časť vety alebo celú výpoveď.",
      "kein sa skloňuje podobne ako ein: kein, keine, keinen, keiner."
    ],
    "important": [
      "kein + podstatné meno vyjadruje, že nijaká alebo žiadna taká vec nie je.",
      "Nesprávne: Ich habe nicht ein Geld. Správne: Ich habe kein Geld."
    ],
    "id": "a1-kein",
    "layout": "standardStudy"
  }
}
```

---

## Finding 50

**Audit ID:** `LRB088-0050`
**Finding Stable ID:** `g2/a1/sk|a1-kein|a1.card.a1-kein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-kein`
**Field / path:** `a1.card.a1-kein.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Nikto • Nič
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Žiadny","study":{"translation":"Žiadny","explanation":["Hlavná myšlienka: kein je záporný člen, ktorý neguje podstatné meno; po slovensky podľa kontextu znamená nijaký, žiadny alebo sa vyjadrí slovesným záporom.","kein sa skloňuje podobne ako ein, napríklad kein, keine, keinen, a stojí pred podstatným menom.","Pri počítateľných osobách alebo veciach sa často prekladá ako nijaký alebo žiadny.","Pri nepočítateľných a abstraktných podstatných menách sa v slovenčine často použije spojenie s „nemám“ alebo „nie je“.","kein neguje podstatné meno; nicht zvyčajne neguje inú časť vety alebo celú výpoveď."],"examples":[{"de":"Ich habe kein Geld.","lv":"Nemám peniaze."},{"de":"Es gibt keine Milch mehr.","lv":"Mlieko už nie je."},{"de":"Kein Mensch war da.","lv":"Nebol tam nijaký človek."},{"de":"Ich habe keine Zeit.","lv":"Nemám čas."},{"de":"Das ist kein Problem.","lv":"To nie je nijaký problém."},{"de":"Wir haben keine Kinder.","lv":"Nemáme deti."}],"tip":["kein neguje podstatné meno; nicht neguje inú časť vety alebo celú výpoveď.","kein sa skloňuje podobne ako ein: kein, keine, keinen, keiner."],"important":["kein + podstatné meno vyjadruje, že nijaká alebo žiadna taká vec nie je.","Nesprávne: Ich habe nicht ein Geld. Správne: Ich habe kein Geld."],"id":"a1-kein","layout":"standardStudy"}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kein",
  "lv": "Žiadny",
  "level": "A1",
  "study": {
    "translation": "Žiadny",
    "explanation": [
      "Hlavná myšlienka: kein je záporný člen, ktorý neguje podstatné meno; po slovensky podľa kontextu znamená nijaký, žiadny alebo sa vyjadrí slovesným záporom.",
      "kein sa skloňuje podobne ako ein, napríklad kein, keine, keinen, a stojí pred podstatným menom.",
      "Pri počítateľných osobách alebo veciach sa často prekladá ako nijaký alebo žiadny.",
      "Pri nepočítateľných a abstraktných podstatných menách sa v slovenčine často použije spojenie s „nemám“ alebo „nie je“.",
      "kein neguje podstatné meno; nicht zvyčajne neguje inú časť vety alebo celú výpoveď."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Nemám peniaze."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Mlieko už nie je."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Nebol tam nijaký človek."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Nemám čas."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "To nie je nijaký problém."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Nemáme deti."
      }
    ],
    "tip": [
      "kein neguje podstatné meno; nicht neguje inú časť vety alebo celú výpoveď.",
      "kein sa skloňuje podobne ako ein: kein, keine, keinen, keiner."
    ],
    "important": [
      "kein + podstatné meno vyjadruje, že nijaká alebo žiadna taká vec nie je.",
      "Nesprávne: Ich habe nicht ein Geld. Správne: Ich habe kein Geld."
    ],
    "id": "a1-kein",
    "layout": "standardStudy"
  }
}
```

---

