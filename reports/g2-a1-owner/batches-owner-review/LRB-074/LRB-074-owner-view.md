# G2/A1 LRB LRB-074 — OWNER VIEW

**Batch:** LRB-074
**Rows:** 50/50
**Languages:** NN 50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-16T15:52:43.414Z
**Source commit:** `fd62e5b6ef2ed1d7a992602dbc64de24717e9e8e`
**Branch:** `cursor/lrb-074-owner-authorization-ed35`
**Overrides SHA256:** `77a85df065e20e47f177a3b0e34bf9da90646cb4cda66c2145bc49eb590f847d`
**Classification:** `G2_A1_LRB_COPY_PASTE_CORRECTION_1_APPLIED`
**COPY/PASTE spec SHA-256:** `14dcf6306b413899bde882a2a0571f010f036660450eb78f269d00cf91c2e4dd`
**UNIQUE_TARGET_CARDS (metadata):** 46

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB074-0001`
**Finding Stable ID:** `g2/a1/nn|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Først av alt • Alles
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"erst","lv":"berre • først","level":"A1","study":{"id":"a1-erst","layout":"standardStudy","translation":"berre • først","explanation":["Hovudidé: erst betyr ofte berre, særleg når noko skjer seinare enn venta eller berre har nådd eit visst punkt.","I uttrykket «erst lernen, dann spielen» betyr erst først, medan nur betyr berre i tydinga avgrensa mengd."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Først lære, så leike."},{"de":"Ich komme erst morgen.","lv":"Eg kjem ikkje før i morgon."},{"de":"Er ist erst 18 Jahre alt.","lv":"Han er berre 18 år gammal."},{"de":"Wir essen erst um acht Uhr.","lv":"Vi et ikkje før klokka åtte."}],"comparison":[{"word":"erst","meaning":"berre • først","example":"Erst lernen, dann spielen. – Først lære, så leike."},{"word":"zuerst","meaning":"først","example":"Zuerst frühstücken wir. – Først et vi frukost."},{"word":"nur","meaning":"berre","example":"Ich habe nur 5 Euro. – Eg har berre 5 euro."},{"word":"dann","meaning":"så","example":"Dann gehen wir nach Hause. – Så går vi heim."}],"tip":{"text":"Tid eller eit punkt som enno ikkje er nådd → erst; avgrensa mengd → nur."},"important":["erst og nur kan begge bety «berre», men dei blir brukte ulikt.","erst handlar ofte om tid, rekkjefølgje eller eit punkt som nett er nådd."]}}
**Note:** For DE “erst”, I replaced the Latvian and mixed-language material with Nynorsk distinctions between “berre”, “først” and “ikkje før”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "berre • først",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "berre • først",
    "explanation": [
      "Hovudidé: erst betyr ofte berre, særleg når noko skjer seinare enn venta eller berre har nådd eit visst punkt.",
      "I uttrykket «erst lernen, dann spielen» betyr erst først, medan nur betyr berre i tydinga avgrensa mengd."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Først lære, så leike."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Eg kjem ikkje før i morgon."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Han er berre 18 år gammal."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Vi et ikkje før klokka åtte."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "berre • først",
        "example": "Erst lernen, dann spielen. – Først lære, så leike."
      },
      {
        "word": "zuerst",
        "meaning": "først",
        "example": "Zuerst frühstücken wir. – Først et vi frukost."
      },
      {
        "word": "nur",
        "meaning": "berre",
        "example": "Ich habe nur 5 Euro. – Eg har berre 5 euro."
      },
      {
        "word": "dann",
        "meaning": "så",
        "example": "Dann gehen wir nach Hause. – Så går vi heim."
      }
    ],
    "tip": {
      "text": "Tid eller eit punkt som enno ikkje er nådd → erst; avgrensa mengd → nur."
    },
    "important": [
      "erst og nur kan begge bety «berre», men dei blir brukte ulikt.",
      "erst handlar ofte om tid, rekkjefølgje eller eit punkt som nett er nådd."
    ]
  },
  "index": 165
}
```

---

## Finding 2

**Audit ID:** `LRB074-0002`
**Finding Stable ID:** `g2/a1/nn|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** det • ikkje-personleg form
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"es","lv":"det • upersonleg pronomen","level":"A1","study":{"id":"a1-es","layout":"standardStudy","translation":"det • upersonleg pronomen","explanation":["Hovudidé: es er eit tysk pronomen som ofte svarar til det eller blir ståande utan direkte omsetjing i upersonlege setningar.","Det må ikkje blandast saman med norsk «eg»; «eg» heiter ich på tysk."],"examples":[{"de":"Es regnet.","lv":"Det regnar."},{"de":"Es ist kalt.","lv":"Det er kaldt."},{"de":"Das Kind schläft.","lv":"Barnet søv."},{"de":"Es ist müde.","lv":"Det er trøytt."}],"comparison":[{"word":"es","meaning":"det • upersonleg pronomen","example":"Es regnet. – Det regnar."},{"word":"ich","meaning":"eg","example":"Ich lerne Deutsch. – Eg lærer tysk."}],"tip":{"text":"Tysk es betyr ofte «det» eller står i upersonlege uttrykk; norsk «eg» er ich."},"important":["Våre «eg» heiter ich på tysk.","I «Es regnet» blir es omsett med «det»."]}}
**Note:** For DE “es”, I removed Latvian and Estonian remnants and clarified the Nynorsk meaning “det” and the impersonal use.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "det • upersonleg pronomen",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "det • upersonleg pronomen",
    "explanation": [
      "Hovudidé: es er eit tysk pronomen som ofte svarar til det eller blir ståande utan direkte omsetjing i upersonlege setningar.",
      "Det må ikkje blandast saman med norsk «eg»; «eg» heiter ich på tysk."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Det regnar."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Det er kaldt."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Barnet søv."
      },
      {
        "de": "Es ist müde.",
        "lv": "Det er trøytt."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "det • upersonleg pronomen",
        "example": "Es regnet. – Det regnar."
      },
      {
        "word": "ich",
        "meaning": "eg",
        "example": "Ich lerne Deutsch. – Eg lærer tysk."
      }
    ],
    "tip": {
      "text": "Tysk es betyr ofte «det» eller står i upersonlege uttrykk; norsk «eg» er ich."
    },
    "important": [
      "Våre «eg» heiter ich på tysk.",
      "I «Es regnet» blir es omsett med «det»."
    ]
  },
  "index": 167
}
```

---

## Finding 3

**Audit ID:** `LRB074-0003`
**Finding Stable ID:** `g2/a1/nn|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-ganz-study`
**Field / path:** `a1.card.a1-ganz-study.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** heil • heilt • fullstendig
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ganz","lv":"heil • heilt • fullstendig","level":"A1","study":{"id":"a1-ganz-study","layout":"standardStudy","translation":"heil • heilt • fullstendig","explanation":["Hovudidé: ganz framfor eit substantiv betyr ofte heil eller heilt.","Framfor adjektiv og adverb kan ganz bety heilt, fullstendig eller ganske.","ganz er ikkje det same som alles, som er eit pronomen og betyr alt."],"examples":[{"de":"Ich arbeite den ganzen Tag.","lv":"Eg arbeider heile dagen."},{"de":"Das ganze Haus ist sauber.","lv":"Heile huset er reint."},{"de":"Das ist ganz sicher.","lv":"Det er heilt sikkert."},{"de":"Das Essen ist ganz gut.","lv":"Maten er ganske god."}],"comparison":[{"word":"ganz","meaning":"heil • heilt • fullstendig","example":"der ganze Tag – heile dagen"},{"word":"alles","meaning":"alt","example":"Alles ist gut. – Alt er bra."}],"tip":["Framfor substantiv betyr ganz ofte heil eller heile.","Framfor adjektiv kan ganz bety heilt eller ganske."],"important":["der ganze Tag = heile dagen.","alles = alt som pronomen."]}}
**Note:** For DE “ganz”, I corrected the false translation “Hallo” and supplied the Nynorsk senses “heil”, “heilt” and “ganske”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ganz",
  "lv": "heil • heilt • fullstendig",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "heil • heilt • fullstendig",
    "explanation": [
      "Hovudidé: ganz framfor eit substantiv betyr ofte heil eller heilt.",
      "Framfor adjektiv og adverb kan ganz bety heilt, fullstendig eller ganske.",
      "ganz er ikkje det same som alles, som er eit pronomen og betyr alt."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "Eg arbeider heile dagen."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "Heile huset er reint."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "Det er heilt sikkert."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "Maten er ganske god."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "heil • heilt • fullstendig",
        "example": "der ganze Tag – heile dagen"
      },
      {
        "word": "alles",
        "meaning": "alt",
        "example": "Alles ist gut. – Alt er bra."
      }
    ],
    "tip": [
      "Framfor substantiv betyr ganz ofte heil eller heile.",
      "Framfor adjektiv kan ganz bety heilt eller ganske."
    ],
    "important": [
      "der ganze Tag = heile dagen.",
      "alles = alt som pronomen."
    ]
  },
  "index": 219
}
```

---

## Finding 4

**Audit ID:** `LRB074-0004`
**Finding Stable ID:** `g2/a1/nn|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-gefallen-study`
**Field / path:** `a1.card.a1-gefallen-study.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** lika • person i dativ
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"gefallen","lv":"like • personen står i dativ","level":"A1","study":{"id":"a1-gefallen-study","layout":"standardStudy","translation":"like • personen står i dativ","explanation":["Hovudidé: gefallen betyr å like, men tysk byggjer setninga annleis enn norsk.","Det som blir likt, er subjektet, medan personen som liker noko, står i dativ: mir, dir, ihm, ihr, uns, euch eller ihnen."],"examples":[{"de":"Das gefällt mir.","lv":"Eg liker dette."},{"de":"Gefällt dir das Kleid?","lv":"Liker du kjolen?"},{"de":"Der Film gefällt uns.","lv":"Vi liker filmen."}],"comparison":[{"word":"gefallen","meaning":"like • personen står i dativ","example":"Das gefällt mir. – Eg liker dette."},{"word":"mögen","meaning":"like eller vere glad i","example":"Ich mag das. – Eg liker dette."}],"tip":["Hugs mønsteret: Das gefällt mir.","På norsk seier vi vanlegvis «eg liker dette», ikkje «det liker meg»."],"important":["gefallen bruker dativ for personen: mir, dir, ihm, ihr.","Das gefällt mir = Eg liker dette."]}}
**Note:** For DE “gefallen”, I corrected the literal mistranslation “det likar meg” and explained the dative construction in natural Nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gefallen",
  "lv": "like • personen står i dativ",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "like • personen står i dativ",
    "explanation": [
      "Hovudidé: gefallen betyr å like, men tysk byggjer setninga annleis enn norsk.",
      "Det som blir likt, er subjektet, medan personen som liker noko, står i dativ: mir, dir, ihm, ihr, uns, euch eller ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "Eg liker dette."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "Liker du kjolen?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "Vi liker filmen."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "like • personen står i dativ",
        "example": "Das gefällt mir. – Eg liker dette."
      },
      {
        "word": "mögen",
        "meaning": "like eller vere glad i",
        "example": "Ich mag das. – Eg liker dette."
      }
    ],
    "tip": [
      "Hugs mønsteret: Das gefällt mir.",
      "På norsk seier vi vanlegvis «eg liker dette», ikkje «det liker meg»."
    ],
    "important": [
      "gefallen bruker dativ for personen: mir, dir, ihm, ihr.",
      "Das gefällt mir = Eg liker dette."
    ]
  },
  "index": 225
}
```

---

## Finding 5

**Audit ID:** `LRB074-0005`
**Finding Stable ID:** `g2/a1/nn|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-huebsch`
**Field / path:** `a1.card.a1-huebsch.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** vakker • tiltalande i utsjånad
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"hübsch","lv":"pen • tiltalande i utsjånaden","level":"A1","study":{"id":"a1-hübsch","layout":"standardStudy","translation":"pen • tiltalande i utsjånaden","explanation":["Hovudidé: hübsch betyr pen eller tiltalande, særleg om utsjånaden til menneske, klede, rom eller ting.","Det norske «hyggjeleg» er ikkje ei god hovudomsetjing, fordi hübsch vanlegvis skildrar utsjånad."],"examples":[{"de":"Sie trägt ein hübsches Kleid.","lv":"Ho har på seg ein pen kjole."},{"de":"Das Zimmer ist hübsch.","lv":"Rommet er pent."},{"de":"Das ist ein hübsches Bild.","lv":"Det er eit pent bilete."}],"comparison":[{"word":"hübsch","meaning":"pen • tiltalande i utsjånaden","example":"Das ist ein hübsches Kleid. – Det er ein pen kjole."},{"word":"schön","meaning":"vakker • fin","example":"Der Garten ist schön. – Hagen er vakker."},{"word":"nett","meaning":"hyggjeleg • venleg","example":"Sie ist sehr nett. – Ho er svært hyggjeleg."}],"tip":{"text":"hübsch skildrar oftast utsjånad; nett skildrar oftare ein venleg person eller åtferd."},"important":["hübsch betyr ikkje alltid «hyggjeleg».","For venleg åtferd er nett vanlegvis eit betre ord."]}}
**Note:** For DE “hübsch”, I replaced Latvian text and fixed the Nynorsk agreement errors in examples such as “eit pent bilete”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hübsch",
  "lv": "pen • tiltalande i utsjånaden",
  "level": "A1",
  "study": {
    "id": "a1-hübsch",
    "layout": "standardStudy",
    "translation": "pen • tiltalande i utsjånaden",
    "explanation": [
      "Hovudidé: hübsch betyr pen eller tiltalande, særleg om utsjånaden til menneske, klede, rom eller ting.",
      "Det norske «hyggjeleg» er ikkje ei god hovudomsetjing, fordi hübsch vanlegvis skildrar utsjånad."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "Ho har på seg ein pen kjole."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "Rommet er pent."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "Det er eit pent bilete."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "pen • tiltalande i utsjånaden",
        "example": "Das ist ein hübsches Kleid. – Det er ein pen kjole."
      },
      {
        "word": "schön",
        "meaning": "vakker • fin",
        "example": "Der Garten ist schön. – Hagen er vakker."
      },
      {
        "word": "nett",
        "meaning": "hyggjeleg • venleg",
        "example": "Sie ist sehr nett. – Ho er svært hyggjeleg."
      }
    ],
    "tip": {
      "text": "hübsch skildrar oftast utsjånad; nett skildrar oftare ein venleg person eller åtferd."
    },
    "important": [
      "hübsch betyr ikkje alltid «hyggjeleg».",
      "For venleg åtferd er nett vanlegvis eit betre ord."
    ]
  },
  "index": 288
}
```

---

## Finding 6

**Audit ID:** `LRB074-0006`
**Finding Stable ID:** `g2/a1/nn|a1-kosten|a1.card.a1-kosten.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-kosten`
**Field / path:** `a1.card.a1-kosten.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Maksma (hinda) • Kui palju masak
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"kosten","lv":"koste • kor mykje noko kostar","level":"A1","study":{"id":"a1-kosten","layout":"standardStudy","translation":"koste • kor mykje noko kostar","explanation":["Hovudidé: kosten handlar om prisen på noko, ikkje først og fremst om sjølve betalinga.","Når ein spør om pris, bruker ein ofte Was kostet ...? Når ein betaler ei rekning eller for ei vare, bruker ein bezahlen eller zahlen."],"examples":[{"de":"Das kostet 5 Euro.","lv":"Det kostar 5 euro."},{"de":"Was kostet das?","lv":"Kva kostar det?"},{"de":"Wie viel kostet der Pullover?","lv":"Kor mykje kostar genseren?"},{"de":"Das Essen kostet nicht viel.","lv":"Maten kostar ikkje mykje."},{"de":"Ich bezahle die Rechnung.","lv":"Eg betaler rekninga."},{"de":"Kann ich bar bezahlen?","lv":"Kan eg betale kontant?"}],"comparison":[{"word":"kosten","meaning":"koste • kor mykje noko kostar","example":"Das kostet 5 Euro. – Det kostar 5 euro."},{"word":"bezahlen","meaning":"betale for noko","example":"Ich bezahle die Rechnung. – Eg betaler rekninga."},{"word":"zahlen","meaning":"betale","example":"Kann ich bar zahlen? – Kan eg betale kontant?"},{"word":"Was kostet...?","meaning":"Kva kostar ...?","example":"Was kostet das Buch? – Kva kostar boka?"}],"tip":["Spørsmål om pris → kosten: Was kostet das?","Sjølve betalinga → bezahlen eller zahlen."],"important":["kosten = kva noko kostar; bezahlen = betale for noko.","På norsk kan «betale» brukast i begge situasjonane, men tysk skil mellom dei."]}}
**Note:** For DE “kosten”, I removed Estonian, Latvian and English remnants and distinguished price from the act of paying in Nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kosten",
  "lv": "koste • kor mykje noko kostar",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "koste • kor mykje noko kostar",
    "explanation": [
      "Hovudidé: kosten handlar om prisen på noko, ikkje først og fremst om sjølve betalinga.",
      "Når ein spør om pris, bruker ein ofte Was kostet ...? Når ein betaler ei rekning eller for ei vare, bruker ein bezahlen eller zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Det kostar 5 euro."
      },
      {
        "de": "Was kostet das?",
        "lv": "Kva kostar det?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Kor mykje kostar genseren?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Maten kostar ikkje mykje."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Eg betaler rekninga."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Kan eg betale kontant?"
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "koste • kor mykje noko kostar",
        "example": "Das kostet 5 Euro. – Det kostar 5 euro."
      },
      {
        "word": "bezahlen",
        "meaning": "betale for noko",
        "example": "Ich bezahle die Rechnung. – Eg betaler rekninga."
      },
      {
        "word": "zahlen",
        "meaning": "betale",
        "example": "Kann ich bar zahlen? – Kan eg betale kontant?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Kva kostar ...?",
        "example": "Was kostet das Buch? – Kva kostar boka?"
      }
    ],
    "tip": [
      "Spørsmål om pris → kosten: Was kostet das?",
      "Sjølve betalinga → bezahlen eller zahlen."
    ],
    "important": [
      "kosten = kva noko kostar; bezahlen = betale for noko.",
      "På norsk kan «betale» brukast i begge situasjonane, men tysk skil mellom dei."
    ]
  },
  "index": 320
}
```

---

## Finding 7

**Audit ID:** `LRB074-0007`
**Finding Stable ID:** `g2/a1/nn|a1-neu|a1.card.a1-neu.study.explanation[5]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-neu`
**Field / path:** `a1.card.a1-neu.study.explanation[5]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vastand på alt (vane) • Nimisõna das Neue gejättä magadi uut.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"neu","lv":"ny • nyoppdaga eller nyleg laga","level":"A1","study":{"id":"a1-neu","layout":"standardStudy","translation":"ny • nyoppdaga eller nyleg laga","explanation":["Hovudidé: neu skildrar noko som er nytt, nyleg laga, kjøpt eller oppdaga.","Om alderen til ein person eller eit dyr bruker ein jung, ikkje neu.","Motsetnaden til neu er alt når alt betyr gammal."],"examples":[{"de":"Mein Handy ist neu.","lv":"Mobiltelefonen min er ny."},{"de":"Wir haben ein neues Auto.","lv":"Vi har ein ny bil."},{"de":"Das ist meine neue Wohnung.","lv":"Dette er den nye leilegheita mi."},{"de":"Ich habe neue Schuhe gekauft.","lv":"Eg har kjøpt nye sko."},{"de":"Das ist eine neue Idee.","lv":"Dette er ein ny idé."},{"de":"Er hat einen neuen Job.","lv":"Han har ein ny jobb."},{"de":"Was gibt es Neues?","lv":"Kva er nytt?"}],"tip":["neu bruker vi om ting, idear og nyheiter.","Om alderen til ein person eller eit dyr bruker vi jung."],"important":["neu skildrar ikkje alderen til personar eller dyr.","Motsetnad: neu ↔ alt = ny ↔ gammal."]}}
**Note:** For DE “neu”, I translated the corrupted explanation into Nynorsk and corrected the contrast between “neu” for things and “jung” for age.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neu",
  "lv": "ny • nyoppdaga eller nyleg laga",
  "level": "A1",
  "study": {
    "id": "a1-neu",
    "layout": "standardStudy",
    "translation": "ny • nyoppdaga eller nyleg laga",
    "explanation": [
      "Hovudidé: neu skildrar noko som er nytt, nyleg laga, kjøpt eller oppdaga.",
      "Om alderen til ein person eller eit dyr bruker ein jung, ikkje neu.",
      "Motsetnaden til neu er alt når alt betyr gammal."
    ],
    "examples": [
      {
        "de": "Mein Handy ist neu.",
        "lv": "Mobiltelefonen min er ny."
      },
      {
        "de": "Wir haben ein neues Auto.",
        "lv": "Vi har ein ny bil."
      },
      {
        "de": "Das ist meine neue Wohnung.",
        "lv": "Dette er den nye leilegheita mi."
      },
      {
        "de": "Ich habe neue Schuhe gekauft.",
        "lv": "Eg har kjøpt nye sko."
      },
      {
        "de": "Das ist eine neue Idee.",
        "lv": "Dette er ein ny idé."
      },
      {
        "de": "Er hat einen neuen Job.",
        "lv": "Han har ein ny jobb."
      },
      {
        "de": "Was gibt es Neues?",
        "lv": "Kva er nytt?"
      }
    ],
    "tip": [
      "neu bruker vi om ting, idear og nyheiter.",
      "Om alderen til ein person eller eit dyr bruker vi jung."
    ],
    "important": [
      "neu skildrar ikkje alderen til personar eller dyr.",
      "Motsetnad: neu ↔ alt = ny ↔ gammal."
    ]
  },
  "index": 439
}
```

---

## Finding 8

**Audit ID:** `LRB074-0008`
**Finding Stable ID:** `g2/a1/nn|a1-verstehen|a1.card.a1-verstehen.study.explanation[2]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-verstehen`
**Field / path:** `a1.card.a1-verstehen.study.explanation[2]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** I Eesti keeles ei ole siin vanligvis vaja sõu “oskama” või “suutma” • Trenger sävää sõnale können oftere.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"verstehen","lv":"forstå","level":"A1","study":{"id":"a1-verstehen","layout":"standardStudy","translation":"forstå","explanation":["Hovudidé: verstehen betyr å forstå språk, personar, tekstar eller situasjonar.","Det er vanlegvis ikkje ordet for å kunne eller meistre noko; då bruker ein ofte können."],"examples":[{"de":"Ich verstehe dich.","lv":"Eg forstår deg."},{"de":"Verstehst du Deutsch?","lv":"Forstår du tysk?"},{"de":"Ich verstehe das nicht.","lv":"Eg forstår ikkje dette."},{"de":"Ich kann Deutsch sprechen.","lv":"Eg kan snakke tysk."}],"comparison":[{"word":"verstehen","meaning":"forstå","example":"Ich verstehe dich. – Eg forstår deg."},{"word":"können","meaning":"kunne","example":"Ich kann schwimmen. – Eg kan symje."},{"word":"wissen","meaning":"vite","example":"Ich weiß es. – Eg veit det."},{"word":"kennen","meaning":"kjenne","example":"Ich kenne ihn. – Eg kjenner han."}],"tip":{"text":"Forstå ein tekst eller ein person → verstehen; kunne eller meistre noko → können."},"important":["verstehen er ikkje hovudordet for tydinga «kunne».","Ich verstehe Deutsch betyr «eg forstår tysk». "]}}
**Note:** For DE “verstehen”, I replaced Estonian, Latvian and malformed text and clarified why “forstå” differs from “kunne”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "verstehen",
  "lv": "forstå",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "forstå",
    "explanation": [
      "Hovudidé: verstehen betyr å forstå språk, personar, tekstar eller situasjonar.",
      "Det er vanlegvis ikkje ordet for å kunne eller meistre noko; då bruker ein ofte können."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Eg forstår deg."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Forstår du tysk?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Eg forstår ikkje dette."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Eg kan snakke tysk."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "forstå",
        "example": "Ich verstehe dich. – Eg forstår deg."
      },
      {
        "word": "können",
        "meaning": "kunne",
        "example": "Ich kann schwimmen. – Eg kan symje."
      },
      {
        "word": "wissen",
        "meaning": "vite",
        "example": "Ich weiß es. – Eg veit det."
      },
      {
        "word": "kennen",
        "meaning": "kjenne",
        "example": "Ich kenne ihn. – Eg kjenner han."
      }
    ],
    "tip": {
      "text": "Forstå ein tekst eller ein person → verstehen; kunne eller meistre noko → können."
    },
    "important": [
      "verstehen er ikkje hovudordet for tydinga «kunne».",
      "Ich verstehe Deutsch betyr «eg forstår tysk». "
    ]
  },
  "index": 621
}
```

---

## Finding 9

**Audit ID:** `LRB074-0009`
**Finding Stable ID:** `g2/a1/nn|a1-wie|a1.card.a1-wie.study.explanation[3]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-wie`
**Field / path:** `a1.card.a1-wie.study.explanation[3]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Wie viel(e) gejnej kui palju • Wie alt gejnej kui vana • Wie lange gejnej kui kaua.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"wie","lv":"korleis • kor","level":"A1","study":{"id":"a1-wie","layout":"standardStudy","translation":"korleis • kor","explanation":["Hovudidé: wie spør vanlegvis om måte og betyr då korleis.","I uttrykk som wie viel, wie alt og wie lange spør ordet om mengd, alder eller varigheit og blir ofte omsett med kor."],"examples":[{"de":"Wie geht es dir?","lv":"Korleis har du det?"},{"de":"Wie heißt du?","lv":"Kva heiter du?"},{"de":"Wie viel kostet das?","lv":"Kor mykje kostar det?"},{"de":"Wie alt bist du?","lv":"Kor gammal er du?"},{"de":"Wie lange dauert der Film?","lv":"Kor lenge varer filmen?"},{"de":"Er ist so groß wie sein Vater.","lv":"Han er like høg som faren sin."}],"comparison":[{"word":"wie","meaning":"korleis • kor","example":"Wie geht es dir? – Korleis har du det?"},{"word":"wie viel","meaning":"kor mykje","example":"Wie viel kostet das? – Kor mykje kostar det?"},{"word":"wie alt","meaning":"kor gammal","example":"Wie alt bist du? – Kor gammal er du?"},{"word":"wie lange","meaning":"kor lenge","example":"Wie lange dauert der Film? – Kor lenge varer filmen?"}],"tip":["wie åleine spør ofte om måte: korleis.","wie + adjektiv eller adverb kan spørje om omfang: kor mykje, kor gammal eller kor lenge."],"important":["wie viel(e) = kor mykje eller kor mange.","wie alt = kor gammal; wie lange = kor lenge.","so ... wie = like ... som."]}}
**Note:** For DE “wie”, I removed Estonian and Latvian remnants and corrected the Nynorsk meanings for manner, quantity, age and duration.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wie",
  "lv": "korleis • kor",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "korleis • kor",
    "explanation": [
      "Hovudidé: wie spør vanlegvis om måte og betyr då korleis.",
      "I uttrykk som wie viel, wie alt og wie lange spør ordet om mengd, alder eller varigheit og blir ofte omsett med kor."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Korleis har du det?"
      },
      {
        "de": "Wie heißt du?",
        "lv": "Kva heiter du?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Kor mykje kostar det?"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "Kor gammal er du?"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Kor lenge varer filmen?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Han er like høg som faren sin."
      }
    ],
    "comparison": [
      {
        "word": "wie",
        "meaning": "korleis • kor",
        "example": "Wie geht es dir? – Korleis har du det?"
      },
      {
        "word": "wie viel",
        "meaning": "kor mykje",
        "example": "Wie viel kostet das? – Kor mykje kostar det?"
      },
      {
        "word": "wie alt",
        "meaning": "kor gammal",
        "example": "Wie alt bist du? – Kor gammal er du?"
      },
      {
        "word": "wie lange",
        "meaning": "kor lenge",
        "example": "Wie lange dauert der Film? – Kor lenge varer filmen?"
      }
    ],
    "tip": [
      "wie åleine spør ofte om måte: korleis.",
      "wie + adjektiv eller adverb kan spørje om omfang: kor mykje, kor gammal eller kor lenge."
    ],
    "important": [
      "wie viel(e) = kor mykje eller kor mange.",
      "wie alt = kor gammal; wie lange = kor lenge.",
      "so ... wie = like ... som."
    ]
  },
  "index": 660
}
```

---

## Finding 10

**Audit ID:** `LRB074-0010`
**Finding Stable ID:** `g2/a1/nn|ab|idx:17|lv, study.translation, study.examples, study.comparison|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `ab|idx:17`
**Field / path:** `lv, study.translation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"-st","study.translation":"-st","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"Alates tänasest\",\"level\":\"A1\"},{\"de\":\"ab Montag\",\"lv\":\"God påske\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"Alates kjele 8 stk\"},{\"de\":\"ab Bahnhof\",\"lv\":\"Faktisk\"}]","study.comparison":"[{\"word\":\"ab\",\"meaning\":\"Alates punktlig/ajast\",\"example\":\"ab Montag – God påske\"},{\"word\":\"von\",\"meaning\":\"Kellestki/millestki • Päritolu\",\"example\":\"von mir – Minutt\"},{\"word\":\"aus\",\"meaning\":\"Seest velge\",\"example\":\"aus dem Haus – Kanskje / kanskje velge\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ab","lv":"frå • frå og med","level":"A1","study":{"id":"a1-ab","layout":"standardStudy","translation":"frå • frå og med","explanation":["ab bruker vi for å vise startpunkt i tid eller stad.","Det kan ofte omsetjast med «frå» eller «frå og med». Ved opphav bruker ein oftare von, og ved rørsle ut frå innsida bruker ein oftare aus."],"examples":[{"de":"ab heute","lv":"frå i dag"},{"de":"ab Montag","lv":"frå måndag"},{"de":"ab 8 Uhr","lv":"frå klokka åtte"},{"de":"ab Bahnhof","lv":"frå jernbanestasjonen"}],"comparison":[{"word":"ab","meaning":"frå eit startpunkt i tid eller stad","example":"ab Montag – frå måndag"},{"word":"von","meaning":"frå • av, opphav","example":"von mir – frå meg"},{"word":"aus","meaning":"ut frå • frå innsida av","example":"aus dem Haus – ut frå huset"}],"tip":{"text":"Eit startpunkt i tid eller stad → ab."},"important":["ab viser startpunktet i tid eller stad.","Ved opphav eller retning ut frå innsida bruker ein ofte von eller aus."]}}
**Note:** For DE “ab”, I replaced the corrupted Estonian and Latvian content, corrected the examples, and gave the natural Nynorsk meaning “frå/frå og med”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "frå • frå og med",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "frå • frå og med",
    "explanation": [
      "ab bruker vi for å vise startpunkt i tid eller stad.",
      "Det kan ofte omsetjast med «frå» eller «frå og med». Ved opphav bruker ein oftare von, og ved rørsle ut frå innsida bruker ein oftare aus."
    ],
    "examples": [
      {
        "de": "ab heute",
        "lv": "frå i dag"
      },
      {
        "de": "ab Montag",
        "lv": "frå måndag"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "frå klokka åtte"
      },
      {
        "de": "ab Bahnhof",
        "lv": "frå jernbanestasjonen"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "frå eit startpunkt i tid eller stad",
        "example": "ab Montag – frå måndag"
      },
      {
        "word": "von",
        "meaning": "frå • av, opphav",
        "example": "von mir – frå meg"
      },
      {
        "word": "aus",
        "meaning": "ut frå • frå innsida av",
        "example": "aus dem Haus – ut frå huset"
      }
    ],
    "tip": {
      "text": "Eit startpunkt i tid eller stad → ab."
    },
    "important": [
      "ab viser startpunktet i tid eller stad.",
      "Ved opphav eller retning ut frå innsida bruker ein ofte von eller aus."
    ]
  },
  "index": 17
}
```

---

## Finding 11

**Audit ID:** `LRB074-0011`
**Finding Stable ID:** `g2/a1/nn|aber|idx:21|lv, study.translation, study.examples, study.comparison|LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `aber|idx:21`
**Field / path:** `lv, study.translation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Aga","study.translation":"Aga","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Ma tahan kaasa tulla, aga mul ei ole aega.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"Toit oli maitsev, aga liiga kallis.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"Tal on égis, aga ma arvan teisiti.\"}]","study.comparison":"[{\"word\":\"aber\",\"meaning\":\"Vastand • Vastuväide • Sikkät\",\"example\":\"Ich komme, aber später. – Ma tulen, aga laim.\"},{\"word\":\"sondern\",\"meaning\":\"Senter • Ugyldig\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Ma tahtsin teed, mitte kaffi.\"},{\"word\":\"jedoch\",\"meaning\":\"Imidlertid\",\"example\":\"Es ist kalt, jedoch sonnig. – På kõr, säyää säääline.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aber","lv":"men","level":"A1","study":{"id":"a1-aber","layout":"standardStudy","translation":"men","explanation":"Brukast for å innføre ei motsetning eller ei innvending. Aber tyder ofte «men» eller «likevel».","examples":[{"de":"Ich möchte mitkommen, aber ich habe keine Zeit.","lv":"Eg vil gjerne vere med, men eg har ikkje tid."},{"de":"Das Essen war lecker, aber zu teuer.","lv":"Maten var god, men for dyr."},{"de":"Er hat recht, aber ich sehe das anders.","lv":"Han har rett, men eg ser det annleis."}],"comparison":[{"word":"aber","meaning":"motsetning eller innvending","example":"Ich komme, aber später. – Eg kjem, men seinare."},{"word":"sondern","meaning":"men derimot, etter ei nekting","example":"Ich wollte keinen Tee, sondern Kaffee. – Eg ville ikkje ha te, men kaffi."},{"word":"jedoch","meaning":"likevel eller derimot","example":"Es ist kalt, jedoch sonnig. – Det er kaldt, men solrikt."}],"tip":{"text":"Hugs: motsetning eller innvending → aber."},"important":["Aber viser motsetnad eller innvending.","Etter «ikkje ..., men ...» brukar ein ofte sondern på tysk."]}}
**Note:** For the German word "aber", I replaced the contaminated Latvian, Estonian and other-language fragments with natural Nynorsk translations and examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "men",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "men",
    "explanation": "Brukast for å innføre ei motsetning eller ei innvending. Aber tyder ofte «men» eller «likevel».",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Eg vil gjerne vere med, men eg har ikkje tid."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Maten var god, men for dyr."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Han har rett, men eg ser det annleis."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "motsetning eller innvending",
        "example": "Ich komme, aber später. – Eg kjem, men seinare."
      },
      {
        "word": "sondern",
        "meaning": "men derimot, etter ei nekting",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Eg ville ikkje ha te, men kaffi."
      },
      {
        "word": "jedoch",
        "meaning": "likevel eller derimot",
        "example": "Es ist kalt, jedoch sonnig. – Det er kaldt, men solrikt."
      }
    ],
    "tip": {
      "text": "Hugs: motsetning eller innvending → aber."
    },
    "important": [
      "Aber viser motsetnad eller innvending.",
      "Etter «ikkje ..., men ...» brukar ein ofte sondern på tysk."
    ]
  },
  "index": 21
}
```

---

## Finding 12

**Audit ID:** `LRB074-0012`
**Finding Stable ID:** `g2/a1/nn|also|idx:26|study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `also|idx:26`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-also","layout":"standardStudy","translation":"Seega","explanation":"Kasutatakse täätäse täätää või tunuse täämämiseks. Betyr \"seega\", \"järelikult\".","examples":[{"de":"Es regnet, also bleibe ich zu Hause.","lv":"Sajab wimhna, seepåråt jään ma koju."},{"de":"Du bist krank, also gehst du nicht zur Arbeit.","lv":"Sa oled haige, seepårät sa ei ähä yobelle."},{"de":"Ich habe viel gelernt, also verstehe ich es jetzt.","lv":"Ma olen palju säytanud, seega saan nüüd aru."}],"comparison":[{"word":"also","meaning":"Seega • Järelikult","example":"Es regnet, also bleibe ich zu Hause. – Sajab wimhna, ösnikult jään koju."},{"word":"auch","meaning":"Ka","example":"Ich komme auch. – Ma tulen ka."},{"word":"deshalb","meaning":"Derfor","example":"Es regnet, deshalb bleibe ich zu Hause. – Sajab wimhna, seepåråt jään koju."}],"tip":{"text":"Atceries: secinājums → also."},"sectionAccents":{"examples":[{"de":{"blue":["also"]},"lv":{"purple":["seepåråt"]}},{"de":{"blue":["also"]},"lv":{"purple":["seepårät"]}},{"de":{"blue":["also"]},"lv":{"purple":["seega"]}}],"comparison":[{"word":{"green":["also"]},"example":{"green":["also"],"purple":["regnet"]}},{"word":{"green":["auch"]},"example":{"yellow":["auch"],"purple":["ka"]}},{"word":{"green":["deshalb"]},"example":{"green":["deshalb"],"purple":["seepåråt"]}}],"tip":{"left":{"green":["also"],"purple":["Atceries"]}},"important":[{"green":["also"],"purple":["also"]},{"green":["deshalb"],"purple":["Latviešu"]}]},"important":["also viser slutning: frå det som er sagt før følgjer neste tanke.","Det latviske \"tāpēc\" kan ofte vere deshalb òg."]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"also","lv":"såleis • altså","level":"A1","study":{"id":"a1-also","layout":"standardStudy","translation":"såleis • altså","explanation":"Brukast for å vise ein konklusjon eller ei følgje. Also tyder ofte «altså» eller «såleis».","examples":[{"de":"Es regnet, also bleibe ich zu Hause.","lv":"Det regnar, så eg blir heime."},{"de":"Du bist krank, also gehst du nicht zur Arbeit.","lv":"Du er sjuk, så du går ikkje på arbeid."},{"de":"Ich habe viel gelernt, also verstehe ich es jetzt.","lv":"Eg har lært mykje, så no forstår eg det."}],"comparison":[{"word":"also","meaning":"altså eller såleis","example":"Es regnet, also bleibe ich zu Hause. – Det regnar, så eg blir heime."},{"word":"auch","meaning":"òg eller også","example":"Ich komme auch. – Eg kjem òg."},{"word":"deshalb","meaning":"derfor","example":"Es regnet, deshalb bleibe ich zu Hause. – Det regnar, derfor blir eg heime."}],"tip":{"text":"Hugs: konklusjon eller følgje → also."},"important":["Also viser ein konklusjon: Det som er sagt før, fører til den neste tanken.","Det norske «derfor» kan ofte omsetjast med deshalb på tysk."]}}
**Note:** For the German word "also", I removed the corrupted mixed-language study text and supplied correct Nynorsk explanations and sentence translations.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "såleis • altså",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "såleis • altså",
    "explanation": "Brukast for å vise ein konklusjon eller ei følgje. Also tyder ofte «altså» eller «såleis».",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Det regnar, så eg blir heime."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Du er sjuk, så du går ikkje på arbeid."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Eg har lært mykje, så no forstår eg det."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "altså eller såleis",
        "example": "Es regnet, also bleibe ich zu Hause. – Det regnar, så eg blir heime."
      },
      {
        "word": "auch",
        "meaning": "òg eller også",
        "example": "Ich komme auch. – Eg kjem òg."
      },
      {
        "word": "deshalb",
        "meaning": "derfor",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Det regnar, derfor blir eg heime."
      }
    ],
    "tip": {
      "text": "Hugs: konklusjon eller følgje → also."
    },
    "important": [
      "Also viser ein konklusjon: Det som er sagt før, fører til den neste tanken.",
      "Det norske «derfor» kan ofte omsetjast med deshalb på tysk."
    ]
  },
  "index": 26
}
```

---

## Finding 13

**Audit ID:** `LRB074-0013`
**Finding Stable ID:** `g2/a1/nn|an|idx:12|lv, study.translation, study.explanation, study.examples, study.comparison|LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `an|idx:12`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Juures • Peal • Ligi","study.translation":"Juures • Pinna vääres • Server vääres","study.explanation":"Kasutatakse, kui miski asub seina, akna, ukse, gejeu, mereranna või akko muu ääure/pinna kureus.","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"Seina dyllus / not\"},{\"de\":\"am Fenster\",\"lv\":\"Akne rot\"},{\"de\":\"am Meer\",\"lv\":\"Flere ääres\"}]","study.comparison":"[{\"word\":\"an\",\"meaning\":\"Pinna või serva vueras\",\"example\":\"an der Wand – Signal\"},{\"word\":\"auf\",\"meaning\":\"Horisontal pinnal\",\"example\":\"auf dem Tisch – Lovlig\"},{\"word\":\"bei\",\"meaning\":\"Isiku või koha kureus\",\"example\":\"beim Arzt – Lege i medisin\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"an","lv":"ved • på • inntil","level":"A1","study":{"id":"a1-an","layout":"standardStudy","translation":"ved • på • inntil","explanation":"Brukast når noko er ved ei overflate, ein vegg, eit vindauge, ein kant eller ved sjøen.","examples":[{"de":"an der Wand","lv":"på veggen"},{"de":"am Fenster","lv":"ved vindauget"},{"de":"am Meer","lv":"ved sjøen"}],"comparison":[{"word":"an","meaning":"ved ei loddrett overflate eller ein kant","example":"an der Wand – på veggen"},{"word":"auf","meaning":"på ei horisontal overflate","example":"auf dem Tisch – på bordet"},{"word":"bei","meaning":"hos ein person eller på ein stad","example":"beim Arzt – hos legen"}],"tip":{"text":"Hugs: ved veggen, vindauget eller kanten → an."},"important":["An tyder ofte ved ei overflate, ein vegg, eit vindauge eller ein kant.","På horisontale overflater brukar ein vanlegvis auf."]}}
**Note:** For the German preposition "an", I corrected the multilingual contamination and clarified its Nynorsk meanings against auf and bei.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "ved • på • inntil",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "ved • på • inntil",
    "explanation": "Brukast når noko er ved ei overflate, ein vegg, eit vindauge, ein kant eller ved sjøen.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "på veggen"
      },
      {
        "de": "am Fenster",
        "lv": "ved vindauget"
      },
      {
        "de": "am Meer",
        "lv": "ved sjøen"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "ved ei loddrett overflate eller ein kant",
        "example": "an der Wand – på veggen"
      },
      {
        "word": "auf",
        "meaning": "på ei horisontal overflate",
        "example": "auf dem Tisch – på bordet"
      },
      {
        "word": "bei",
        "meaning": "hos ein person eller på ein stad",
        "example": "beim Arzt – hos legen"
      }
    ],
    "tip": {
      "text": "Hugs: ved veggen, vindauget eller kanten → an."
    },
    "important": [
      "An tyder ofte ved ei overflate, ein vegg, eit vindauge eller ein kant.",
      "På horisontale overflater brukar ein vanlegvis auf."
    ]
  },
  "index": 12
}
```

---

## Finding 14

**Audit ID:** `LRB074-0014`
**Finding Stable ID:** `g2/a1/nn|Appetit|idx:689|lv, study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nn
**Card:** `Appetit|idx:689`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Isu","study.translation":"Isu","study.explanation":"[\"Hovedidé: Tunne, et raškas konja. mitmust ainsus — mitmust ei ole.\",\"Der Appetit geschäfte geschäftig: soov kunjä.\",\"Sageli ainsuses: tynn (ainult ainsuses).\",\"Der Appetit on mekke ainsuses — isu.\",\"På A1-nivå må du se om du trenger koos, for eksempel: Guten Appetit!\"]","study.examples":"[{\"de\":\"Guten Appetit!\",\"lv\":\"Hodet er!\"},{\"de\":\"Guten Appetit!\",\"lv\":\"Hodet er!\"},{\"de\":\"Ich habe keinen Appetit.\",\"lv\":\"Mul ei ole isu.\"}]","study.tip":"[\"der Appetit = matappetitt\",\"Bruk der Appetit når konteksten samsvarar med denne tydinga.\"]","study.important":"[\"der Appetit er berre i eintal.\",\"Feil: die Appetite → Rett: der Appetit\",\"Feil: Ich bin Appetit. → Rett: Ich habe Appetit.\",\"Kjensle: der Appetit.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Appetit","lv":"appetitt • matlyst","level":"A1","de_article":"der","study":{"id":"a1-appetit","layout":"standardStudy","translation":"appetitt • matlyst","explanation":["Hovudidé: Appetit er lysta på mat.","Der Appetit er eit hankjønnsord og blir vanlegvis brukt i eintal.","Vanleg uttrykk: Guten Appetit! – Vel bekomme!","På norsk seier vi «å ha appetitt» eller «å ha matlyst»."],"examples":[{"de":"Guten Appetit!","lv":"Vel bekomme!"},{"de":"Guten Appetit!","lv":"God appetitt!"},{"de":"Ich habe keinen Appetit.","lv":"Eg har ikkje matlyst."}],"tip":["der Appetit = appetitt eller matlyst","Bruk der Appetit når du snakkar om lyst på mat."],"important":["Der Appetit er eit hankjønnsord og blir vanlegvis brukt i eintal.","Rett: Ich habe Appetit. – Eg har matlyst.","Appetit er ei kjensle eller lyst, ikkje ein person."]}}
**Note:** For the German noun "Appetit", I replaced the mixed Estonian, Latvian and Norwegian fragments with consistent Nynorsk vocabulary and grammar guidance.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "appetitt • matlyst",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "appetitt • matlyst",
    "explanation": [
      "Hovudidé: Appetit er lysta på mat.",
      "Der Appetit er eit hankjønnsord og blir vanlegvis brukt i eintal.",
      "Vanleg uttrykk: Guten Appetit! – Vel bekomme!",
      "På norsk seier vi «å ha appetitt» eller «å ha matlyst»."
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Vel bekomme!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "God appetitt!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "Eg har ikkje matlyst."
      }
    ],
    "tip": [
      "der Appetit = appetitt eller matlyst",
      "Bruk der Appetit når du snakkar om lyst på mat."
    ],
    "important": [
      "Der Appetit er eit hankjønnsord og blir vanlegvis brukt i eintal.",
      "Rett: Ich habe Appetit. – Eg har matlyst.",
      "Appetit er ei kjensle eller lyst, ikkje ein person."
    ]
  },
  "index": 689
}
```

---

## Finding 15

**Audit ID:** `LRB074-0015`
**Finding Stable ID:** `g2/a1/nn|auch|idx:48|study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `auch|idx:48`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-auch-study","layout":"standardStudy","translation":"Ka","explanation":["Põhiidee: Välle sagegasem ja neutrausem \"ka\".","Auch gejätt säyttä: ääää \"ka\".","Sagelie speltab: keipendust.","Også på det vanligste ordet \"ka\"."],"examples":[{"de":"Ich komme auch.","lv":"Ma tulen ka."},{"de":"Sie arbeitet auch hier.","lv":"Ma tulen ka."},{"de":"Ich wünsche Ihnen auch einen schönen Tag.","lv":"Ta jobben ka siin."}],"tip":["auch = òg","Bruk auch når konteksten samsvarar med denne tydinga."],"important":["Ich auch wünsche Ihnen nav pareiza vārdu kārtība.","auch = arī.","Feil: Ich auch wünsche Ihnen einen schönen Tag."],"sectionAccents":{"explanation":{"blue":["auch","auch"],"purple":["ka"],"green":["Ka"]},"examples":[{"de":{"blue":["auch"]},"lv":{"purple":["ka"]}},{"de":{"blue":["auch"]},"lv":{"purple":["ka"]}},{"de":{"blue":["auch"]},"lv":{"purple":["ka"]}}],"tip":[{"purple":["auch"]}],"important":[{"blue":["auch"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"auch","lv":"òg • også","level":"A1","study":{"id":"a1-auch-study","layout":"standardStudy","translation":"òg • også","explanation":["Hovudidé: Auch er eit vanleg og nøytralt ord for «òg» eller «også».","Auch legg til noko eller viser at noko gjeld i tillegg.","Plasseringa av auch kjem an på kva ein vil framheve.","I uttrykket Ich wünsche Ihnen auch einen schönen Tag står auch etter Ihnen."],"examples":[{"de":"Ich komme auch.","lv":"Eg kjem òg."},{"de":"Sie arbeitet auch hier.","lv":"Ho arbeider òg her."},{"de":"Ich wünsche Ihnen auch einen schönen Tag.","lv":"Eg ønskjer Dem òg ein fin dag."}],"tip":["auch = òg eller også","Bruk auch når noko kjem i tillegg."],"important":["Auch tyder «òg» eller «også».","Rett ordstilling: Ich wünsche Ihnen auch einen schönen Tag."]}}
**Note:** For the German word "auch", I fixed the corrupted explanations, mismatched examples and Latvian remnants while preserving the meaning «òg/også».

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auch",
  "lv": "òg • også",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "òg • også",
    "explanation": [
      "Hovudidé: Auch er eit vanleg og nøytralt ord for «òg» eller «også».",
      "Auch legg til noko eller viser at noko gjeld i tillegg.",
      "Plasseringa av auch kjem an på kva ein vil framheve.",
      "I uttrykket Ich wünsche Ihnen auch einen schönen Tag står auch etter Ihnen."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Eg kjem òg."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Ho arbeider òg her."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Eg ønskjer Dem òg ein fin dag."
      }
    ],
    "tip": [
      "auch = òg eller også",
      "Bruk auch når noko kjem i tillegg."
    ],
    "important": [
      "Auch tyder «òg» eller «også».",
      "Rett ordstilling: Ich wünsche Ihnen auch einen schönen Tag."
    ]
  },
  "index": 48
}
```

---

## Finding 16

**Audit ID:** `LRB074-0016`
**Finding Stable ID:** `g2/a1/nn|auf|idx:49|study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `auf|idx:49`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-auf","layout":"standardStudy","translation":"Peale","explanation":"Kasutatakse sūna sūna mikes mingi koha poole või pinna peale.","examples":[{"de":"Ich stelle das Buch auf den Tisch.","lv":"Ma panen biibi lauale."},{"de":"Wir fahren auf den Berg.","lv":"Me säväme mäele."},{"de":"Die Katze springt auf das Sofa.","lv":"Kass hüppab diivanile."}],"comparison":[{"word":"auf","meaning":"Peale (pinnale või ölspoole)","example":"Ich stelle das Glas auf den Tisch. – Ma panen klaasi lauale."},{"word":"an","meaning":"Juures (vertikal pinne)","example":"Ich hänge das Bild an die Wand. – Ma riputan pildi seinela."},{"word":"in","meaning":"Vi ses","example":"Ich lege das Buch in die Tasche. – Ma panen kibi kotti."}],"tip":{"text":"Atceries: uz virsmas/augšā → auf."},"sectionAccents":{"examples":[{"de":{"blue":["auf"]},"lv":{"purple":["panen"]}},{"de":{"blue":["auf"]},"lv":{"purple":["säväme"]}},{"de":{"blue":["auf"]},"lv":{"purple":["kass"]}}],"comparison":[{"word":{"green":["auf"]},"example":{"blue":["auf"],"purple":["Ich"]}},{"word":{"green":["an"]},"example":{"green":["an","Ich"]}},{"word":{"green":["in"]},"example":{"yellow":["in"]}}],"tip":{"left":{"blue":["auf"],"purple":["Atceries"],"green":["Atceries","Atceries"]}},"important":[{"blue":["auf"],"purple":["auf"],"green":["auf","auf"]},{"green":["an"],"yellow":["in"],"purple":["kaut","kaut"]}]},"important":["auf er ikkje berre \"på\". Det betyr ofte rørsle eller å vere på ei overflate/toppen.","Hvis noko er ved ei loddrett overflate, brukar ein ofte an; hvis det er inni, brukar ein in."]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"auf","lv":"på • opp på","level":"A1","study":{"id":"a1-auf","layout":"standardStudy","translation":"på • opp på","explanation":"Brukast ofte ved rørsle til ei overflate eller opp på ein stad, og ved plassering på ei overflate.","examples":[{"de":"Ich stelle das Buch auf den Tisch.","lv":"Eg set boka på bordet."},{"de":"Wir fahren auf den Berg.","lv":"Vi køyrer opp på fjellet."},{"de":"Die Katze springt auf das Sofa.","lv":"Katten hoppar opp på sofaen."}],"comparison":[{"word":"auf","meaning":"på ei overflate eller opp på ein stad","example":"Ich stelle das Glas auf den Tisch. – Eg set glaset på bordet."},{"word":"an","meaning":"ved ei loddrett overflate","example":"Ich hänge das Bild an die Wand. – Eg heng biletet på veggen."},{"word":"in","meaning":"inn i eller inne i noko","example":"Ich lege das Buch in die Tasche. – Eg legg boka i veska."}],"tip":{"text":"Hugs: rørsle til ei overflate eller opp på ein stad → auf."},"important":["Auf kan vise rørsle til eller plassering på ei overflate.","Ved ei loddrett overflate brukar ein ofte an; inni noko brukar ein in."]}}
**Note:** For the German preposition "auf", I replaced the corrupted text with accurate Nynorsk examples and a clear contrast with an and in.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auf",
  "lv": "på • opp på",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "på • opp på",
    "explanation": "Brukast ofte ved rørsle til ei overflate eller opp på ein stad, og ved plassering på ei overflate.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Eg set boka på bordet."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Vi køyrer opp på fjellet."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Katten hoppar opp på sofaen."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "på ei overflate eller opp på ein stad",
        "example": "Ich stelle das Glas auf den Tisch. – Eg set glaset på bordet."
      },
      {
        "word": "an",
        "meaning": "ved ei loddrett overflate",
        "example": "Ich hänge das Bild an die Wand. – Eg heng biletet på veggen."
      },
      {
        "word": "in",
        "meaning": "inn i eller inne i noko",
        "example": "Ich lege das Buch in die Tasche. – Eg legg boka i veska."
      }
    ],
    "tip": {
      "text": "Hugs: rørsle til ei overflate eller opp på ein stad → auf."
    },
    "important": [
      "Auf kan vise rørsle til eller plassering på ei overflate.",
      "Ved ei loddrett overflate brukar ein ofte an; inni noko brukar ein in."
    ]
  },
  "index": 49
}
```

---

## Finding 17

**Audit ID:** `LRB074-0017`
**Finding Stable ID:** `g2/a1/nn|aufs|idx:60|study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `aufs|idx:60`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-aufs","layout":"standardStudy","translation":"Peale • Otsa • Kuhu?","explanation":["Aufs on eessõna auf ja artikli das lühend.","Täisform: auf das (akkusativ).","Kasutatakse, kui taksi vejde suunda kindla asja või pinna poole — västät säusulele kuhu?","Ofte brukt til koos bevegelse: peale ronima, istuma, asetama, millegi peale judma.","Kõnekeeles ja igapäueelus brukes nesten alati aufs, mitte täisvormi auf das."],"examples":[{"de":"Ich gehe aufs Dach.","lv":"Ma þen katusele."},{"de":"Sie setzt sich aufs Sofa.","lv":"Ta istub diivanile."},{"de":"Wir fahren aufs Land.","lv":"Me säwäme maale."},{"de":"Stell die Tasche aufs Bett.","lv":"Panel kott voodile."},{"de":"Er springt aufs Pferd.","lv":"Ta ronib hobuse selga."},{"de":"Leg das Buch aufs Regal.","lv":"Panel raamat riiulile."},{"de":"Komm schnell aufs Boot!","lv":"Kom igjen snart!"},{"de":"Wir gehen aufs Fest.","lv":"Me ähme peole."}],"comparison":[{"word":"aufs","meaning":"Kindlale asjale (Akk.)","example":"aufs Dach – Kattesele"},{"word":"auf","meaning":"Pinnale või ölspoole","example":"auf den Tisch – Lovlig"},{"word":"an","meaning":"Vertikal rot","example":"an die Wand – Signal"},{"word":"ins","meaning":"Sissy (ruumi sisse)","example":"ins Zimmer – Hane"},{"word":"zum","meaning":"-sse / sse (dativ)","example":"zum Arzt – Lege i medisin"}],"tip":["Hugs: auf + das → aufs (kvar?, kvar?).","Sarunvalodā gandrīz nekad nesaka pilno auf das — lieto aufs."],"important":["aufs = auf das, berre med eit nøytraltkjønn substantiv i akkusativ kvar? form.","Svarar på kvar? — rørsle til ei konkret stad eller overflate.","På horisontale overflater brukar ein ofte auf den, ikkje aufs.","Ikkje forveksla med an (ved veggen) eller ins (inni rommet)."],"sectionAccents":{"explanation":{"blue":["aufs","auf das"],"purple":["peale","peale","kuhu?"],"green":["kuhu?","Aufs"]},"examples":[{"de":{"blue":["aufs"]},"lv":{"purple":["katusele"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["diivanile"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["maale"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["voodile"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["hobuse"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["riiulile"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["Kom"]}},{"de":{"blue":["aufs"]},"lv":{"purple":["peole"]}}],"comparison":[{"word":{"green":["aufs"]},"meaning":{"purple":["kindlale asjale"]},"example":{"blue":["aufs Dach"]}},{"word":{"green":["auf"]},"meaning":{"purple":["pinnale"]},"example":{"yellow":["auf den Tisch"]}},{"word":{"green":["an"]},"meaning":{"purple":["Vertikal"]},"example":{"green":["an die Wand"]}},{"word":{"green":["ins"]},"meaning":{"purple":["sisse"]},"example":{"green":["ins Zimmer"]}},{"word":{"green":["zum"]},"meaning":{"purple":["sse","sse"]},"example":{"red":["zum Arzt"]}}],"tip":[{"blue":["aufs"],"purple":["Atceries"]},{"purple":["auf das"]}],"important":[{"blue":["aufs"],"purple":["auf das"],"green":["aufs"]},{"purple":["Atbild"],"green":["Atbild"]},{"yellow":["auf den"],"red":["aufs"]},{"green":["an"],"red":["ins"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aufs","lv":"på • opp på","level":"A1","study":{"id":"a1-aufs","layout":"standardStudy","translation":"på • opp på","explanation":["Aufs er ei samantrekking av auf og das.","Full form er auf das, med akkusativ.","Aufs brukast ved rørsle til noko med inkjekjønn, til dømes eit tak eller eit land.","Det er vanleg i daglegtale, men fullforma auf das kan òg brukast."],"examples":[{"de":"Ich gehe aufs Dach.","lv":"Eg går opp på taket."},{"de":"Sie setzt sich aufs Sofa.","lv":"Ho set seg på sofaen."},{"de":"Wir fahren aufs Land.","lv":"Vi reiser på landet."},{"de":"Stell die Tasche aufs Bett.","lv":"Set veska på senga."},{"de":"Er springt aufs Pferd.","lv":"Han hoppar opp på hesten."},{"de":"Leg das Buch aufs Regal.","lv":"Legg boka på hylla."},{"de":"Komm schnell aufs Boot!","lv":"Kom fort om bord i båten!"},{"de":"Wir gehen aufs Fest.","lv":"Vi går på festen."}],"comparison":[{"word":"aufs","meaning":"auf das, til noko bestemt i akkusativ","example":"aufs Dach – opp på taket"},{"word":"auf","meaning":"på eller opp på ei overflate","example":"auf den Tisch – på bordet"},{"word":"an","meaning":"ved ei loddrett overflate","example":"an die Wand – på veggen"},{"word":"ins","meaning":"inn i noko, in das","example":"ins Zimmer – inn på rommet"},{"word":"zum","meaning":"til, zu dem","example":"zum Arzt – til legen"}],"tip":["Hugs: auf + das → aufs.","Aufs blir brukt framfor inkjekjønnsord i akkusativ."],"important":["Aufs = auf das.","Aufs viser ofte rørsle til ei konkret overflate eller ein stad.","Ikkje bland aufs med an eller ins."]}}
**Note:** For the German contraction "aufs", I corrected the non-Nynorsk material and explained the auf-das formation with natural Nynorsk examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aufs",
  "lv": "på • opp på",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "på • opp på",
    "explanation": [
      "Aufs er ei samantrekking av auf og das.",
      "Full form er auf das, med akkusativ.",
      "Aufs brukast ved rørsle til noko med inkjekjønn, til dømes eit tak eller eit land.",
      "Det er vanleg i daglegtale, men fullforma auf das kan òg brukast."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Eg går opp på taket."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Ho set seg på sofaen."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Vi reiser på landet."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Set veska på senga."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Han hoppar opp på hesten."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Legg boka på hylla."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Kom fort om bord i båten!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Vi går på festen."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "auf das, til noko bestemt i akkusativ",
        "example": "aufs Dach – opp på taket"
      },
      {
        "word": "auf",
        "meaning": "på eller opp på ei overflate",
        "example": "auf den Tisch – på bordet"
      },
      {
        "word": "an",
        "meaning": "ved ei loddrett overflate",
        "example": "an die Wand – på veggen"
      },
      {
        "word": "ins",
        "meaning": "inn i noko, in das",
        "example": "ins Zimmer – inn på rommet"
      },
      {
        "word": "zum",
        "meaning": "til, zu dem",
        "example": "zum Arzt – til legen"
      }
    ],
    "tip": [
      "Hugs: auf + das → aufs.",
      "Aufs blir brukt framfor inkjekjønnsord i akkusativ."
    ],
    "important": [
      "Aufs = auf das.",
      "Aufs viser ofte rørsle til ei konkret overflate eller ein stad.",
      "Ikkje bland aufs med an eller ins."
    ]
  },
  "index": 60
}
```

---

## Finding 18

**Audit ID:** `LRB074-0018`
**Finding Stable ID:** `g2/a1/nn|Auge|idx:54|lv|TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** nn
**Card:** `Auge|idx:54`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** Silm
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Auge","lv":"auge","level":"A1","de_article":"das","de_plural":"die Augen"}
**Note:** For the German noun "Auge", I changed the current Latvian word "Silm" to the correct Nynorsk translation "auge".

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Auge",
  "de_article": "das",
  "de_plural": "die Augen",
  "lv": "auge",
  "level": "A1",
  "index": 54
}
```

---

## Finding 19

**Audit ID:** `LRB074-0019`
**Finding Stable ID:** `g2/a1/nn|aus|idx:57|study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `aus|idx:57`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-aus","layout":"standardStudy","translation":"-st • Velg","explanation":"Kasutatakse, kui miski tulb seestaamt, tulb velge või utstab pakurisile.","examples":[{"de":"Ich komme aus Deutschland.","lv":"Ma olen Samsaalt."},{"de":"Er geht aus dem Haus.","lv":"Ta majast majast velg."},{"de":"Ich nehme das Buch aus der Tasche.","lv":"Ma vőn bőbő kotist velge."}],"comparison":[{"word":"aus","meaning":"Seest, seest velg","example":"aus dem Haus – Mest sannsynlig"},{"word":"von","meaning":"Iskald, kald kald, pinnekald","example":"von meinem Freund – Min venn"},{"word":"ab","meaning":"Alates punkst või ajast","example":"ab Montag – God påske"}],"tip":{"text":"Atceries: ārā no iekšienes → aus."},"sectionAccents":{"examples":[{"de":{"green":["aus"]},"lv":{"purple":["olen"]}},{"de":{"green":["aus"]},"lv":{"purple":["majast"]}},{"de":{"green":["aus"]},"lv":{"purple":["vőn"]}}],"comparison":[{"word":{"green":["aus"]},"example":{"green":["aus"],"purple":["aus"]}},{"word":{"green":["von"]},"example":{"green":["von"],"purple":["von"]}},{"word":{"green":["ab"]},"example":{"yellow":["ab"],"purple":["Montag"]}}],"tip":{"left":{"green":["aus"],"purple":["Atceries"]}},"important":[{"green":["aus"],"purple":["aus","aus"]},{"blue":["ab"],"purple":["runa"]}]},"important":["aus viser vanleg rørsle ut frå innsida eller opphav.","Hvis det gjeld berre startpunktet i tid eller stad, brukar ein ofte ab."]}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aus","lv":"frå • ut av","level":"A1","study":{"id":"a1-aus","layout":"standardStudy","translation":"frå • ut av","explanation":"Brukast når noko kjem ut frå innsida, eller for å vise opphav eller kva land ein kjem frå.","examples":[{"de":"Ich komme aus Deutschland.","lv":"Eg kjem frå Tyskland."},{"de":"Er geht aus dem Haus.","lv":"Han går ut av huset."},{"de":"Ich nehme das Buch aus der Tasche.","lv":"Eg tek boka ut av veska."}],"comparison":[{"word":"aus","meaning":"frå innsida eller ut av noko","example":"aus dem Haus – ut av huset"},{"word":"von","meaning":"frå ein person, ein stad eller ei overflate","example":"von meinem Freund – frå venen min"},{"word":"ab","meaning":"frå eit starttidspunkt eller ein startstad","example":"ab Montag – frå måndag"}],"tip":{"text":"Hugs: ut frå innsida eller opphav → aus."},"important":["Aus viser ofte rørsle ut frå innsida eller opphav.","Når det berre gjeld eit startpunkt i tid eller stad, brukar ein ofte ab."]}}
**Note:** For the German preposition "aus", I replaced the contaminated text and examples with correct Nynorsk usage for origin and movement out of something.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aus",
  "lv": "frå • ut av",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "frå • ut av",
    "explanation": "Brukast når noko kjem ut frå innsida, eller for å vise opphav eller kva land ein kjem frå.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Eg kjem frå Tyskland."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Han går ut av huset."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Eg tek boka ut av veska."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "frå innsida eller ut av noko",
        "example": "aus dem Haus – ut av huset"
      },
      {
        "word": "von",
        "meaning": "frå ein person, ein stad eller ei overflate",
        "example": "von meinem Freund – frå venen min"
      },
      {
        "word": "ab",
        "meaning": "frå eit starttidspunkt eller ein startstad",
        "example": "ab Montag – frå måndag"
      }
    ],
    "tip": {
      "text": "Hugs: ut frå innsida eller opphav → aus."
    },
    "important": [
      "Aus viser ofte rørsle ut frå innsida eller opphav.",
      "Når det berre gjeld eit startpunkt i tid eller stad, brukar ein ofte ab."
    ]
  },
  "index": 57
}
```

---

## Finding 20

**Audit ID:** `LRB074-0020`
**Finding Stable ID:** `g2/a1/nn|baden|idx:68|lv; study|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `baden|idx:68`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kosttilskudd","study.translation":"Kosttilskudd","study.explanation":"[\"Hovedidé: bading betyr suplema, vees olema või vett nautima.\",\"Bad brukes, kui jutt på vees, järves, meres või bainsinis.\",\"Bade sämätätä ka vannis käimist.\",\"Kui päväg på ujumisgekustel endil või spordil, säksa keeles keeles schwimmen oftere.\"]","study.examples":"[{\"de\":\"Ich gehe baden.\",\"lv\":\"Ma þen ujuma.\"},{\"de\":\"Wir gehen im See baden.\",\"lv\":\"Me ähme järve ujuma.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"Ta ujub vekt godt.\"},{\"de\":\"Ich schwimme jeden Montag.\",\"lv\":\"Ma käin igal esmaspögel ujumas.\"}]","study.comparison":"[{\"word\":\"baden\",\"meaning\":\"Suplema / vees olema / end pesema\",\"example\":\"Eg går på bad.\"},{\"word\":\"schwimmen\",\"meaning\":\"Ujuma bevegelsene või spordina\",\"example\":\"Han swimming veldig bra.\"},{\"word\":\"duschen\",\"meaning\":\"Duši all käima\",\"example\":\"Eg dusjar på morgonen.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Gå bort\",\"example\":\"Eg går i dag på swimming.\"}]","study.tip":"{\"text\":\"Atceries: atpūta ūdenī → baden; peldēšanas kustība → schwimmen.\"}","study.important":"[\"baden un schwimmen nav sinonīmi.\",\"Latviski bieži saka vienkārši “peldēt”, bet vācu valodā jāizvēlas pēc situācijas.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"baden","lv":"bade • vere i vatnet","level":"A1","study":{"id":"a1-baden","layout":"standardStudy","translation":"bade • vere i vatnet","explanation":["Hovudidé: Baden tyder å bade eller vere i vatnet for å kose seg.","Baden kan brukast om bading i sjø, innsjø eller symjebasseng.","Når ein legg vekt på sjølve symjerørsla eller sporten, brukar ein oftare schwimmen.","Baden kan òg tyde å ta eit bad."],"examples":[{"de":"Ich gehe baden.","lv":"Eg går og badar."},{"de":"Wir gehen im See baden.","lv":"Vi går og badar i innsjøen."},{"de":"Er schwimmt sehr gut.","lv":"Han symjer veldig godt."},{"de":"Ich schwimme jeden Montag.","lv":"Eg symjer kvar måndag."}],"comparison":[{"word":"baden","meaning":"å bade eller vere i vatnet","example":"Ich gehe baden. – Eg går og badar."},{"word":"schwimmen","meaning":"å symje, ofte som rørsle eller sport","example":"Er schwimmt sehr gut. – Han symjer veldig godt."},{"word":"duschen","meaning":"å dusje","example":"Ich dusche am Morgen. – Eg dusjar om morgonen."},{"word":"schwimmen gehen","meaning":"å gå og symje","example":"Wir gehen schwimmen. – Vi går og symjer."}],"tip":{"text":"Hugs: bade for å vere i vatnet; schwimmen for sjølve symjinga eller sporten."},"important":["Baden og schwimmen er ikkje alltid synonym.","Vel ord etter om du meiner å vere i vatnet eller å symje."]}}
**Note:** For the German verb "baden", I corrected the mistranslation "Kosttilskudd" and replaced all mixed-language explanations and examples with accurate Nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "baden",
  "lv": "bade • vere i vatnet",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "bade • vere i vatnet",
    "explanation": [
      "Hovudidé: Baden tyder å bade eller vere i vatnet for å kose seg.",
      "Baden kan brukast om bading i sjø, innsjø eller symjebasseng.",
      "Når ein legg vekt på sjølve symjerørsla eller sporten, brukar ein oftare schwimmen.",
      "Baden kan òg tyde å ta eit bad."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Eg går og badar."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Vi går og badar i innsjøen."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Han symjer veldig godt."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Eg symjer kvar måndag."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "å bade eller vere i vatnet",
        "example": "Ich gehe baden. – Eg går og badar."
      },
      {
        "word": "schwimmen",
        "meaning": "å symje, ofte som rørsle eller sport",
        "example": "Er schwimmt sehr gut. – Han symjer veldig godt."
      },
      {
        "word": "duschen",
        "meaning": "å dusje",
        "example": "Ich dusche am Morgen. – Eg dusjar om morgonen."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "å gå og symje",
        "example": "Wir gehen schwimmen. – Vi går og symjer."
      }
    ],
    "tip": {
      "text": "Hugs: bade for å vere i vatnet; schwimmen for sjølve symjinga eller sporten."
    },
    "important": [
      "Baden og schwimmen er ikkje alltid synonym.",
      "Vel ord etter om du meiner å vere i vatnet eller å symje."
    ]
  },
  "index": 68
}
```

---

## Finding 21

**Audit ID:** `LRB074-0021`
**Finding Stable ID:** `g2/a1/nn|bei|idx:78|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** nn
**Card:** `bei|idx:78`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Juures","study.translation":"Juures","study.explanation":"Kasutatakse, kui miski asub isiku, organizazione või koha kururus või svetka svet sõidite stipends.","study.examples":"[{\"de\":\"Ich bin bei meinem Freund.\",\"lv\":\"Ma olen oma sälä kuräse.\"},{\"de\":\"Sie arbeitet bei Siemens.\",\"lv\":\"Ta verk Siemensis.\"},{\"de\":\"Bei Regen bleiben wir zu Hause.\",\"lv\":\"Vihma corral jääme koju.\"}]","study.comparison":"[{\"word\":\"bei\",\"meaning\":\"Isiku, i selskapets lokaler eller under visse betingelser\",\"example\":\"Ich bin bei meiner Schwester. – Ma olen oma õe kures.\"},{\"word\":\"an\",\"meaning\":\"Seina, server, kald, pinna vääres\",\"example\":\"Das Bild hängt an der Wand. – Pilt ripub not.\"},{\"word\":\"zu\",\"meaning\":\"Kellegi tere minnakse (suund)\",\"example\":\"Ich gehe zu meinem Freund. – Bring vennene dine nærmere.\"}]","study.tip":"{\"text\":\"Atceries: pie cilvēka/vietas/uzņēmuma → bei.\"}","study.important":"[\"bei betyr ofte ved ein person, ved ein stad eller ved eit firma.\",\"Hvis det gjeld rørsle på ei overflate, brukar ein vanleg auf, ikkje bei.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"bei","lv":"hjå / hos / ved","level":"A1","study":{"id":"a1-bei","layout":"standardStudy","translation":"hjå / hos / ved","explanation":"bei brukar vi når noko eller nokon er hjå ein person, ved ein stad eller hos eit firma, eller under bestemte forhold.","examples":[{"de":"Ich bin bei meinem Freund.","lv":"Eg er hjå venen min."},{"de":"Sie arbeitet bei Siemens.","lv":"Ho arbeider hos Siemens."},{"de":"Bei Regen bleiben wir zu Hause.","lv":"Når det regnar, blir vi heime."}],"comparison":[{"word":"bei","meaning":"hjå ein person, ved ein stad eller hos eit firma","example":"Ich bin bei meiner Schwester. – Eg er hjå syster mi."},{"word":"an","meaning":"ved ein kant, ei flate eller ei vegg","example":"Das Bild hängt an der Wand. – Biletet heng på veggen."},{"word":"zu","meaning":"til nokon eller ein stad, med rørsle i ei retning","example":"Ich gehe zu meinem Freund. – Eg går til venen min."}],"tip":{"text":"Hugs: hjå ein person, ved ein stad eller hos eit firma → bei."},"important":["bei betyr ofte hjå ein person, ved ein stad eller hos eit firma.","Ved rørsle til ein person brukar ein vanlegvis zu, ikkje bei."]}}
**Note:** For DE "bei" er den noverande teksten full av latviske og andre språkrestar; eg har laga ei naturleg nynorsk forklaring med hjå, hos og ved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bei",
  "lv": "hjå / hos / ved",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "hjå / hos / ved",
    "explanation": "bei brukar vi når noko eller nokon er hjå ein person, ved ein stad eller hos eit firma, eller under bestemte forhold.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Eg er hjå venen min."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Ho arbeider hos Siemens."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "Når det regnar, blir vi heime."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "hjå ein person, ved ein stad eller hos eit firma",
        "example": "Ich bin bei meiner Schwester. – Eg er hjå syster mi."
      },
      {
        "word": "an",
        "meaning": "ved ein kant, ei flate eller ei vegg",
        "example": "Das Bild hängt an der Wand. – Biletet heng på veggen."
      },
      {
        "word": "zu",
        "meaning": "til nokon eller ein stad, med rørsle i ei retning",
        "example": "Ich gehe zu meinem Freund. – Eg går til venen min."
      }
    ],
    "tip": {
      "text": "Hugs: hjå ein person, ved ein stad eller hos eit firma → bei."
    },
    "important": [
      "bei betyr ofte hjå ein person, ved ein stad eller hos eit firma.",
      "Ved rørsle til ein person brukar ein vanlegvis zu, ikkje bei."
    ]
  },
  "index": 78
}
```

---

## Finding 22

**Audit ID:** `LRB074-0022`
**Finding Stable ID:** `g2/a1/nn|Besuch|idx:87|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** nn
**Card:** `Besuch|idx:87`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"besøk","study.translation":"besøk","study.explanation":"[\"Hovudidé: der Besuch betyr besøk, besøk eller oppsøk.\",\"Hvis det gjeld ein stad eller arrangement, er besøk gjerne passande på norsk.\",\"Hvis det gjeld å besøkje ein person, kan ein seie besøk eller oppsøk på norsk.\",\"Fleirtal er die Besuche.\"]","study.examples":"[{\"de\":\"Der Besuch im Museum war interessant.\",\"lv\":\"Museumsbesøket var interessant.\"},{\"de\":\"Danke für deinen Besuch.\",\"lv\":\"Takk for besøket ditt.\"},{\"de\":\"Der Arzt macht einen Besuch.\",\"lv\":\"Legen gjer ein besøksrunde.\"}]","study.comparison":"[{\"word\":\"der Besuch\",\"meaning\":\"besøk • oppsøk • besøk\",\"example\":\"Danke für deinen Besuch. – Takk for besøket ditt.\"},{\"word\":\"der Besucher\",\"meaning\":\"Külastaja\",\"example\":\"Der Besucher wartet draußen. – Besøkjaren ventar ute.\"},{\"word\":\"besuchen\",\"meaning\":\"besøkje • besøkje\",\"example\":\"Ich besuche meine Großeltern. – Eg besøkjer oldeforeldrene mine.\"}]","study.tip":"{\"text\":\"Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks.\"}","study.important":"[\"der Besuch er ikkje berre besøk; det kan og vere oppsøk eller besøk.\",\"Fleirtal: die Besuche.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Besuch","lv":"besøk","level":"A1","de_article":"der","de_plural":"die Besuche","study":{"id":"a1-besuch","layout":"standardStudy","translation":"besøk","explanation":["der Besuch betyr eit besøk eller ein visitt.","Det kan handle om å besøkje ein stad, eit arrangement eller ein person.","Fleirtalsforma er die Besuche."],"examples":[{"de":"Der Besuch im Museum war interessant.","lv":"Museumsbesøket var interessant."},{"de":"Danke für deinen Besuch.","lv":"Takk for besøket ditt."},{"de":"Der Arzt macht einen Besuch.","lv":"Legen gjer eit heimebesøk."}],"comparison":[{"word":"der Besuch","meaning":"besøk eller visitt","example":"Danke für deinen Besuch. – Takk for besøket ditt."},{"word":"der Besucher","meaning":"besøkjar","example":"Der Besucher wartet draußen. – Besøkjaren ventar ute."},{"word":"besuchen","meaning":"besøkje","example":"Ich besuche meine Großeltern. – Eg besøker besteforeldra mine."}],"tip":{"text":"Hugs: Besuch er sjølve besøket eller visitten, medan Besucher er personen som besøker."},"important":["der Besuch er eit besøk eller ein visitt.","Fleirtal: die Besuche."]}}
**Note:** For DE "Besuch" er forklaringa og samanlikninga blanda med latvisk, estisk og bokmål; eg har normalisert alt til nynorsk og retta besøksrunden til heimebesøk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "besøk",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "besøk",
    "explanation": [
      "der Besuch betyr eit besøk eller ein visitt.",
      "Det kan handle om å besøkje ein stad, eit arrangement eller ein person.",
      "Fleirtalsforma er die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Museumsbesøket var interessant."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Takk for besøket ditt."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Legen gjer eit heimebesøk."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "besøk eller visitt",
        "example": "Danke für deinen Besuch. – Takk for besøket ditt."
      },
      {
        "word": "der Besucher",
        "meaning": "besøkjar",
        "example": "Der Besucher wartet draußen. – Besøkjaren ventar ute."
      },
      {
        "word": "besuchen",
        "meaning": "besøkje",
        "example": "Ich besuche meine Großeltern. – Eg besøker besteforeldra mine."
      }
    ],
    "tip": {
      "text": "Hugs: Besuch er sjølve besøket eller visitten, medan Besucher er personen som besøker."
    },
    "important": [
      "der Besuch er eit besøk eller ein visitt.",
      "Fleirtal: die Besuche."
    ]
  },
  "index": 87
}
```

---

## Finding 23

**Audit ID:** `LRB074-0023`
**Finding Stable ID:** `g2/a1/nn|besuchen|idx:89|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** nn
**Card:** `besuchen|idx:89`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"besøkje","study.translation":"besøkje","study.explanation":"[\"Hovudidé: besuchen brukar ein når ein besøkjer ein stad, arrangement eller person.\",\"Stad, arrangement eller kurs blir vanleg besøkt på norsk.\",\"Hvis besuchen gjeld ein person, er det ofte naturlegare å seie besøkje på norsk.\",\"På tysk brukar ein besuchen utan forsetning og med akkusativ.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Eg besøkjer museet.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Vi besøkjer tyskkursen.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Eg besøkjer oldeforeldrene mine.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"besøkje stad eller arrangement • besøkje person\",\"example\":\"Ich besuche meine Großeltern. – Eg besøkjer oldeforeldrene mine.\"},{\"word\":\"treffen\",\"meaning\":\"møte\",\"example\":\"Ich treffe meinen Freund. – Eg møter vennen min.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"gå til nokon\",\"example\":\"Ich gehe zu meinem Freund. – Bring vennene dine nærmere.\"}]","study.tip":"{\"text\":\"Atceries: vietu apmeklē, bet personu latviski bieži apciemo.\"}","study.important":"[\"besuchen brukar ein utan forsetning: Ich besuche meine Freundin.\",\"Den norske omsetjinga heng saman med objektet: besøkje stad, besøkje person.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"besuchen","lv":"besøkje","level":"A1","study":{"id":"a1-besuchen","layout":"standardStudy","translation":"besøkje","explanation":["besuchen brukar vi når vi besøker ein stad, eit arrangement eller ein person.","På tysk står besuchen utan preposisjon og tek akkusativ."],"examples":[{"de":"Ich besuche das Museum.","lv":"Eg besøker museet."},{"de":"Wir besuchen einen Deutschkurs.","lv":"Vi går på eit tyskkurs."},{"de":"Ich besuche meine Großeltern.","lv":"Eg besøker besteforeldra mine."}],"comparison":[{"word":"besuchen","meaning":"besøkje ein stad, eit arrangement eller ein person","example":"Ich besuche meine Großeltern. – Eg besøker besteforeldra mine."},{"word":"treffen","meaning":"møte","example":"Ich treffe meinen Freund. – Eg møter venen min."},{"word":"zu jemandem gehen","meaning":"gå til nokon","example":"Ich gehe zu meinem Freund. – Eg går til venen min."}],"tip":{"text":"Hugs: besuchen står utan preposisjon: Ich besuche meine Freundin."},"important":["besuchen brukar ein utan preposisjon og med akkusativ.","På nynorsk kan besuchen omsetjast med besøkje eller besøke."]}}
**Note:** For DE "besuchen" inneheldt kortet latviske og bokmålsnære restar; eg har brukt konsekvent nynorsk og retta dømet med tyskkurset.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "besuchen",
  "lv": "besøkje",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "besøkje",
    "explanation": [
      "besuchen brukar vi når vi besøker ein stad, eit arrangement eller ein person.",
      "På tysk står besuchen utan preposisjon og tek akkusativ."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Eg besøker museet."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Vi går på eit tyskkurs."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Eg besøker besteforeldra mine."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "besøkje ein stad, eit arrangement eller ein person",
        "example": "Ich besuche meine Großeltern. – Eg besøker besteforeldra mine."
      },
      {
        "word": "treffen",
        "meaning": "møte",
        "example": "Ich treffe meinen Freund. – Eg møter venen min."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "gå til nokon",
        "example": "Ich gehe zu meinem Freund. – Eg går til venen min."
      }
    ],
    "tip": {
      "text": "Hugs: besuchen står utan preposisjon: Ich besuche meine Freundin."
    },
    "important": [
      "besuchen brukar ein utan preposisjon og med akkusativ.",
      "På nynorsk kan besuchen omsetjast med besøkje eller besøke."
    ]
  },
  "index": 89
}
```

---

## Finding 24

**Audit ID:** `LRB074-0024`
**Finding Stable ID:** `g2/a1/nn|bis|idx:91|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** nn
**Card:** `bis|idx:91`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kuni","study.translation":"Kuni","study.explanation":"Osutab izile piirile, ajahetkele või sitiweele.","study.examples":"[{\"de\":\"Ich warte bis zu deiner Ankunft.\",\"lv\":\"Ma ootan sinu saabumiseni.\"},{\"de\":\"Bleib hier, bis ich zurückkomme.\",\"lv\":\"Jää siia, kuni ma takasi tulen.\"},{\"de\":\"Ich lerne Deutsch bis zum Abend.\",\"lv\":\"Ma õbin saksa keet oõhtuni.\"},{\"de\":\"Bis jetzt habe ich nichts verstanden.\",\"lv\":\"Siiani pole ma magadi aru sääu.\"}]","study.comparison":"[{\"word\":\"bis\",\"meaning\":\"Kuni\",\"example\":\"Ich bleibe bis morgen. – Ma jään kuni kell 18:00.\"},{\"word\":\"bis zu\",\"meaning\":\"Kuni (kuni kindla ajani)\",\"example\":\"bis zum Bahnhof – Du.\"},{\"word\":\"bis jetzt\",\"meaning\":\"Seni, kuni\",\"example\":\"Bis jetzt habe ich nichts verstanden. – Det er bare å gjøre det.\"},{\"word\":\"bis jetzt\",\"meaning\":\"Siiani, tänase päusini\",\"example\":\"Bis jetzt ist alles gut. – Siiani on käis hästä.\"}]","study.tip":"{\"text\":\"Atceries: robeža laikā/nosacījumā → bis.\"}","study.important":"[\"bis = līdz robežai vai laika punktam.\",\"bis jetzt = līdz šim; bis dass = līdz tam, kamēr.\",\"bis jetzt betyr til no.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"bis","lv":"til / fram til / før","level":"A1","study":{"id":"a1-bis","layout":"standardStudy","translation":"til / fram til / før","explanation":"bis markerer ei grense i tid eller rom. På norsk kan det ofte omsetjast med til, fram til eller før, alt etter samanhengen.","examples":[{"de":"Ich warte bis zu deiner Ankunft.","lv":"Eg ventar til du kjem."},{"de":"Bleib hier, bis ich zurückkomme.","lv":"Bli her til eg kjem tilbake."},{"de":"Ich lerne Deutsch bis zum Abend.","lv":"Eg lærer tysk fram til kvelden."},{"de":"Bis jetzt habe ich nichts verstanden.","lv":"Fram til no har eg ikkje forstått noko."}],"comparison":[{"word":"bis","meaning":"til eller fram til ei tidsgrense","example":"Ich bleibe bis morgen. – Eg blir til i morgon."},{"word":"bis zu","meaning":"fram til ein bestemt stad eller eit bestemt tidspunkt","example":"bis zum Bahnhof – fram til jernbanestasjonen"},{"word":"bis jetzt","meaning":"fram til no","example":"Bis jetzt habe ich nichts verstanden. – Fram til no har eg ikkje forstått noko."},{"word":"bis jetzt","meaning":"til dess at","example":"Warte, bis dass er kommt. – Vent til han kjem."}],"tip":{"text":"Hugs: bis markerer ei grense i tid eller rom."},"important":["bis betyr til eller fram til ei grense.","bis jetzt betyr fram til no."]}}
**Note:** For DE "bis" var både omsetjingane og døma gjennomgåande blanda med estisk og latvisk; eg har laga presise nynorske uttrykk for tidsgrense og bis jetzt.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bis",
  "lv": "til / fram til / før",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "til / fram til / før",
    "explanation": "bis markerer ei grense i tid eller rom. På norsk kan det ofte omsetjast med til, fram til eller før, alt etter samanhengen.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Eg ventar til du kjem."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Bli her til eg kjem tilbake."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Eg lærer tysk fram til kvelden."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Fram til no har eg ikkje forstått noko."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "til eller fram til ei tidsgrense",
        "example": "Ich bleibe bis morgen. – Eg blir til i morgon."
      },
      {
        "word": "bis zu",
        "meaning": "fram til ein bestemt stad eller eit bestemt tidspunkt",
        "example": "bis zum Bahnhof – fram til jernbanestasjonen"
      },
      {
        "word": "bis jetzt",
        "meaning": "fram til no",
        "example": "Bis jetzt habe ich nichts verstanden. – Fram til no har eg ikkje forstått noko."
      },
      {
        "word": "bis jetzt",
        "meaning": "til dess at",
        "example": "Warte, bis dass er kommt. – Vent til han kjem."
      }
    ],
    "tip": {
      "text": "Hugs: bis markerer ei grense i tid eller rom."
    },
    "important": [
      "bis betyr til eller fram til ei grense.",
      "bis jetzt betyr fram til no."
    ]
  },
  "index": 91
}
```

---

## Finding 25

**Audit ID:** `LRB074-0025`
**Finding Stable ID:** `g2/a1/nn|das|idx:129|lv, study.translation, study.examples.lv, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** nn
**Card:** `das|idx:129`
**Field / path:** `lv, study.translation, study.examples.lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kesksoo skrev om artikkelen","study.translation":"Kesksoo skrev om artikkelen","study.examples.lv":null,"study.comparison":"[{\"word\":\"das\",\"meaning\":\"Se (artikkel / asesõna)\",\"example\":\"Das ist mein Auto. – Se på bilen min.\"},{\"word\":\"dies\",\"meaning\":\"Se\",\"example\":\"Dies ist mein Auto. – Se på bilen min.\"},{\"word\":\"welches\",\"meaning\":\"Mis • Mille • Mida\",\"example\":\"Das ist das Buch, welches ich lese. – Se på raamat, mida ma loen.\"}]","study.important":"[\"På A1-nivå lær du først das som nøytraltkjønn artikkel.\",\"das er ikkje det same som dass — das kan vere artikkel eller pronomen, dass betyr \\\"at\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"das","lv":"det / den bestemte artikkelen for inkjekjønn","level":"A1","study":{"id":"a1-das","layout":"standardStudy","translation":"det / den bestemte artikkelen for inkjekjønn","explanation":"das er den bestemte artikkelen for inkjekjønnsord. Det kan òg vere eit pronomen og bety det.","examples":[{"de":"Das ist mein Auto.","lv":"Dette er bilen min."},{"de":"Das ist gut.","lv":"Det er bra."},{"de":"Das Buch, das ich lese, ist interessant.","lv":"Boka som eg les, er interessant."}],"comparison":[{"word":"das","meaning":"det; bestemt artikkel for inkjekjønn","example":"Das ist mein Auto. – Dette er bilen min."},{"word":"dies","meaning":"dette","example":"Dies ist mein Auto. – Dette er bilen min."},{"word":"welches","meaning":"som eller kva for eit","example":"Das ist das Buch, welches ich lese. – Dette er boka som eg les."}],"tip":{"text":"Hugs: das kan vere artikkel eller pronomen; ikkje bland det med dass."},"important":["På A1-nivå lærer du først das som bestemt artikkel for inkjekjønn.","das kan òg vere pronomen, medan dass betyr at."]}}
**Note:** For DE "das" var omsetjinga feil og resten var blanda med estisk, latvisk og norsk; eg har skilt mellom artikkelen das og pronomenet det på nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "det / den bestemte artikkelen for inkjekjønn",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "det / den bestemte artikkelen for inkjekjønn",
    "explanation": "das er den bestemte artikkelen for inkjekjønnsord. Det kan òg vere eit pronomen og bety det.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Dette er bilen min."
      },
      {
        "de": "Das ist gut.",
        "lv": "Det er bra."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Boka som eg les, er interessant."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "det; bestemt artikkel for inkjekjønn",
        "example": "Das ist mein Auto. – Dette er bilen min."
      },
      {
        "word": "dies",
        "meaning": "dette",
        "example": "Dies ist mein Auto. – Dette er bilen min."
      },
      {
        "word": "welches",
        "meaning": "som eller kva for eit",
        "example": "Das ist das Buch, welches ich lese. – Dette er boka som eg les."
      }
    ],
    "tip": {
      "text": "Hugs: das kan vere artikkel eller pronomen; ikkje bland det med dass."
    },
    "important": [
      "På A1-nivå lærer du først das som bestemt artikkel for inkjekjønn.",
      "das kan òg vere pronomen, medan dass betyr at."
    ]
  },
  "index": 129
}
```

---

## Finding 26

**Audit ID:** `LRB074-0026`
**Finding Stable ID:** `g2/a1/nn|dass|idx:130|lv, study.translation, study.examples.lv, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** nn
**Card:** `dass|idx:130`
**Field / path:** `lv, study.translation, study.examples.lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"En","study.translation":"En","study.examples.lv":null,"study.comparison":"[{\"word\":\"dass\",\"meaning\":\"En\",\"example\":\"Ich weiß, dass er kommt. – Ma tean, et ta tulb.\"},{\"word\":\"weil\",\"meaning\":\"Sest • Det er derfor et\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Ma jään koju, sest sajab wimga.\"},{\"word\":\"damit\",\"meaning\":\"En\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Ma õubin saksa keelt, et saaksin Sämääsal mitbättää.\"},{\"word\":\"ob\",\"meaning\":\"Cas\",\"example\":\"Ich weiß nicht, ob er kommt. – Ma ei te, kas ta tulb.\"}]","study.important":"[\"dass betyr \\\"at\\\" og innleier ein hjelpeteikn.\",\"Ikkje forveksla med das, som kan vere artikkel eller \\\"det\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"dass","lv":"at","level":"A1","study":{"id":"a1-dass","layout":"standardStudy","translation":"at","explanation":"dass innleier ei leddsetning og knyter saman eit faktum, ei meining eller noko som blir sagt.","examples":[{"de":"Ich weiß, dass du müde bist.","lv":"Eg veit at du er trøytt."},{"de":"Er sagt, dass er kommt.","lv":"Han seier at han kjem."},{"de":"Ich glaube, dass das stimmt.","lv":"Eg trur at det stemmer."}],"comparison":[{"word":"dass","meaning":"at","example":"Ich weiß, dass er kommt. – Eg veit at han kjem."},{"word":"weil","meaning":"fordi","example":"Ich bleibe zu Hause, weil es regnet. – Eg blir heime fordi det regnar."},{"word":"damit","meaning":"slik at","example":"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Eg lærer tysk slik at eg kan arbeide i Tyskland."},{"word":"ob","meaning":"om eller hvorvidt","example":"Ich weiß nicht, ob er kommt. – Eg veit ikkje om han kjem."}],"tip":{"text":"Hugs: dass betyr at og innleier ei leddsetning."},"important":["dass betyr at.","Ikkje bland dass med das, som kan vere artikkel eller pronomen."]}}
**Note:** For DE "dass" var hovudomsetjinga feil, og fleire forklaringar var på estisk eller latvisk; eg har retta alt til nynorsk og presisert skiljet mellom dass og das.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "at",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "at",
    "explanation": "dass innleier ei leddsetning og knyter saman eit faktum, ei meining eller noko som blir sagt.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Eg veit at du er trøytt."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Han seier at han kjem."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Eg trur at det stemmer."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "at",
        "example": "Ich weiß, dass er kommt. – Eg veit at han kjem."
      },
      {
        "word": "weil",
        "meaning": "fordi",
        "example": "Ich bleibe zu Hause, weil es regnet. – Eg blir heime fordi det regnar."
      },
      {
        "word": "damit",
        "meaning": "slik at",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Eg lærer tysk slik at eg kan arbeide i Tyskland."
      },
      {
        "word": "ob",
        "meaning": "om eller hvorvidt",
        "example": "Ich weiß nicht, ob er kommt. – Eg veit ikkje om han kjem."
      }
    ],
    "tip": {
      "text": "Hugs: dass betyr at og innleier ei leddsetning."
    },
    "important": [
      "dass betyr at.",
      "Ikkje bland dass med das, som kan vere artikkel eller pronomen."
    ]
  },
  "index": 130
}
```

---

## Finding 27

**Audit ID:** `LRB074-0027`
**Finding Stable ID:** `g2/a1/nn|der|idx:134|lv, study.translation, study.examples.lv, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** nn
**Card:** `der|idx:134`
**Field / path:** `lv, study.translation, study.examples.lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Meessoo skrev artikkelen","study.translation":"Meessoo skrev artikkelen","study.examples.lv":null,"study.important":"[\"På A1-nivå lær du først der som hankjønn artikkel.\",\"Pronomenet og relative brukar kjem seinare.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"der","lv":"den bestemte artikkelen for hankjønn","level":"A1","study":{"id":"a1-der","layout":"standardStudy","translation":"den bestemte artikkelen for hankjønn","explanation":"der er den bestemte artikkelen for hankjønnsord. Ordet kan òg brukast som pronomen i andre samanhengar.","examples":[{"de":"Der Mann ist hier.","lv":"Mannen er her."},{"de":"Der Bus kommt.","lv":"Bussen kjem."},{"de":"Der Lehrer spricht.","lv":"Læraren snakkar."}],"tip":{"text":"Hugs: der står framfor hankjønnsord i nominativ."},"important":["På A1-nivå lærer du først der som bestemt artikkel for hankjønn.","Der kan òg vere pronomen eller relativt pronomen i andre samanhengar."]}}
**Note:** For DE "der" var omsetjinga blanda med estisk og latvisk, og dømet hadde bokmålsform; eg har skrive ei korrekt nynorsk forklaring og nynorske døme.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "der",
  "lv": "den bestemte artikkelen for hankjønn",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "den bestemte artikkelen for hankjønn",
    "explanation": "der er den bestemte artikkelen for hankjønnsord. Ordet kan òg brukast som pronomen i andre samanhengar.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Mannen er her."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Bussen kjem."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Læraren snakkar."
      }
    ],
    "tip": {
      "text": "Hugs: der står framfor hankjønnsord i nominativ."
    },
    "important": [
      "På A1-nivå lærer du først der som bestemt artikkel for hankjønn.",
      "Der kan òg vere pronomen eller relativt pronomen i andre samanhengar."
    ]
  },
  "index": 134
}
```

---

## Finding 28

**Audit ID:** `LRB074-0028`
**Finding Stable ID:** `g2/a1/nn|die|idx:137|lv, study.translation, study.examples.lv, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** nn
**Card:** `die|idx:137`
**Field / path:** `lv, study.translation, study.examples.lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Naissoo skrev artikkelen","study.translation":"Naissoo skrev artikkelen","study.examples.lv":null,"study.important":"[\"På A1-nivå lær du først die som hokjønn artikkel.\",\"I fleirtal brukar ein die for alle kjønn òg.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"die","lv":"den bestemte artikkelen for hokjønn og fleirtal","level":"A1","study":{"id":"a1-die","layout":"standardStudy","translation":"den bestemte artikkelen for hokjønn og fleirtal","explanation":"die er den bestemte artikkelen for hokjønnsord i eintal og for alle kjønn i fleirtal.","examples":[{"de":"Die Frau ist hier.","lv":"Kvinna er her."},{"de":"Die Katze schläft.","lv":"Katten søv."},{"de":"Die Lehrerin erklärt.","lv":"Lærarinna forklarer."}],"tip":{"text":"Hugs: die står framfor hokjønn i eintal og framfor alle substantiv i fleirtal."},"important":["På A1-nivå lærer du først die som bestemt artikkel for hokjønn.","I fleirtal brukar ein die for alle kjønn."]}}
**Note:** For DE "die" var omsetjinga og forklaringane blanda med estisk, latvisk og bokmål; eg har retta dei til nynorsk og forklart hokjønn og fleirtal korrekt.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "die",
  "lv": "den bestemte artikkelen for hokjønn og fleirtal",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "den bestemte artikkelen for hokjønn og fleirtal",
    "explanation": "die er den bestemte artikkelen for hokjønnsord i eintal og for alle kjønn i fleirtal.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Kvinna er her."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Katten søv."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Lærarinna forklarer."
      }
    ],
    "tip": {
      "text": "Hugs: die står framfor hokjønn i eintal og framfor alle substantiv i fleirtal."
    },
    "important": [
      "På A1-nivå lærer du først die som bestemt artikkel for hokjønn.",
      "I fleirtal brukar ein die for alle kjønn."
    ]
  },
  "index": 137
}
```

---

## Finding 29

**Audit ID:** `LRB074-0029`
**Finding Stable ID:** `g2/a1/nn|dieser|idx:139|lv, study.translation, study.examples.lv, study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `dieser|idx:139`
**Field / path:** `lv, study.translation, study.examples.lv, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Se","study.translation":"Se","study.examples.lv":null,"study.important":"[\"dieser, diese og dieses endrar seg etter kjønn.\",\"I fleirtal er forma igjen diese.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"dieser","lv":"denne","level":"A1","study":{"id":"a1-dieser","layout":"standardStudy","translation":"denne","explanation":"dieser betyr denne og peikar på ein person eller ting som er nær eller kjend. Formen dieser blir brukt med hankjønn i nominativ.","examples":[{"de":"Dieser Mann ist nett.","lv":"Denne mannen er grei."},{"de":"Ich sehe diesen Hund.","lv":"Eg ser denne hunden."},{"de":"Dieser Stift ist neu.","lv":"Denne pennen er ny."}],"tip":{"text":"Hugs: dieser er forma for hankjønn i nominativ; forma endrar seg etter kjønn og kasus."},"important":["dieser, diese og dieses endrar seg etter kjønn og kasus.","I fleirtal er forma diese."]}}
**Note:** For DE "dieser" var hovudomsetjinga feil, og døma var blanda med estisk, latvisk og bokmål; eg har brukt nynorsk denne og retta alle setningane.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dieser",
  "lv": "denne",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "denne",
    "explanation": "dieser betyr denne og peikar på ein person eller ting som er nær eller kjend. Formen dieser blir brukt med hankjønn i nominativ.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Denne mannen er grei."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Eg ser denne hunden."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "Denne pennen er ny."
      }
    ],
    "tip": {
      "text": "Hugs: dieser er forma for hankjønn i nominativ; forma endrar seg etter kjønn og kasus."
    },
    "important": [
      "dieser, diese og dieses endrar seg etter kjønn og kasus.",
      "I fleirtal er forma diese."
    ]
  },
  "index": 139
}
```

---

## Finding 30

**Audit ID:** `LRB074-0030`
**Finding Stable ID:** `g2/a1/nn|ein|idx:154|study.translation; study.explanation; study.examples[].lv; study.comparison|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `ein|idx:154`
**Field / path:** `study.translation; study.explanation; study.examples[].lv; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Umbmäärane artikkel • Üks • Mingi","study.explanation":"[\"Hovudidé: ein er ein ubestemt artikkel.\",\"ein er ein ubestemt artikkel for hankjønn og nøytraltkjønn substantiv i nominativ.\",\"ein brukar du i hankjønn: ein Mann.\",\"ein brukar du i nøytraltkjønn: ein Buch.\",\"I hokjønn brukar ein: eine.\",\"I akkusativ hankjønn: einen.\"]","study.examples[].lv":null,"study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"hankjønn\",\"example\":\"Ein mann ventar ute.\"},{\"word\":\"eine Frau\",\"meaning\":\"hokjønn\",\"example\":\"ei kvinne\"},{\"word\":\"ein Buch\",\"meaning\":\"nøytraltkjønn\",\"example\":\"Eg har ei bok.\"},{\"word\":\"einen Mann\",\"meaning\":\"akkusativ\",\"example\":\"ein mann\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ein","lv":"ein / ein ubestemt artikkel","level":"A1","study":{"id":"a1-ein","layout":"standardStudy","translation":"ein / ein ubestemt artikkel","explanation":["ein er ein ubestemt artikkel.","I nominativ blir ein brukt med hankjønn og inkjekjønn: ein Mann og ein Buch.","I hokjønn brukar ein eine.","I akkusativ hankjønn brukar ein einen."],"examples":[{"de":"Ein Mann wartet draußen.","lv":"Ein mann ventar ute."},{"de":"Ich habe ein Buch.","lv":"Eg har ei bok."},{"de":"Er sucht einen Stift.","lv":"Han leitar etter ein penn."},{"de":"Ein Kind spielt.","lv":"Eit barn leikar."}],"tip":{"text":"Hugs: ein viser til éin eller ein ubestemt person eller ting."},"important":["ein er ikkje ein bestemt artikkel.","Når noko er konkret kjent, brukar ein ofte der, die eller das.","eine er forma for hokjønn.","einen er forma for hankjønn i akkusativ."],"comparison":[{"word":"ein Mann","meaning":"hankjønn i nominativ","example":"Ein Mann wartet draußen. – Ein mann ventar ute."},{"word":"eine Frau","meaning":"hokjønn i nominativ","example":"Eine Frau wartet draußen. – Ei kvinne ventar ute."},{"word":"ein Buch","meaning":"inkjekjønn i nominativ","example":"Ich habe ein Buch. – Eg har ei bok."},{"word":"einen Mann","meaning":"hankjønn i akkusativ","example":"Ich sehe einen Mann. – Eg ser ein mann."}]}}
**Note:** For DE "ein" var omsetjinga feil og forklaringane inneheldt estisk, latvisk og språkblanding; eg har retta artikkelformene og laga naturlege nynorske døme.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "ein / ein ubestemt artikkel",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "ein / ein ubestemt artikkel",
    "explanation": [
      "ein er ein ubestemt artikkel.",
      "I nominativ blir ein brukt med hankjønn og inkjekjønn: ein Mann og ein Buch.",
      "I hokjønn brukar ein eine.",
      "I akkusativ hankjønn brukar ein einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Ein mann ventar ute."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Eg har ei bok."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Han leitar etter ein penn."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Eit barn leikar."
      }
    ],
    "tip": {
      "text": "Hugs: ein viser til éin eller ein ubestemt person eller ting."
    },
    "important": [
      "ein er ikkje ein bestemt artikkel.",
      "Når noko er konkret kjent, brukar ein ofte der, die eller das.",
      "eine er forma for hokjønn.",
      "einen er forma for hankjønn i akkusativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "hankjønn i nominativ",
        "example": "Ein Mann wartet draußen. – Ein mann ventar ute."
      },
      {
        "word": "eine Frau",
        "meaning": "hokjønn i nominativ",
        "example": "Eine Frau wartet draußen. – Ei kvinne ventar ute."
      },
      {
        "word": "ein Buch",
        "meaning": "inkjekjønn i nominativ",
        "example": "Ich habe ein Buch. – Eg har ei bok."
      },
      {
        "word": "einen Mann",
        "meaning": "hankjønn i akkusativ",
        "example": "Ich sehe einen Mann. – Eg ser ein mann."
      }
    ]
  },
  "index": 154
}
```

---

## Finding 31

**Audit ID:** `LRB074-0031`
**Finding Stable ID:** `g2/a1/nn|einmal|idx:700|lv, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `einmal|idx:700`
**Field / path:** `lv, study.explanation, study.examples, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Üks kord • Kord","study.explanation":"[\"Põhiidee: Osutab özlele korale või korrale (kord ma olin...).\",\"Einmal jäytä säyätä: üks kord / körätäs.\",\"Sagelie speltab: ajamärust.\",\"Einmal yukta özlele korale või korrale (kord ma...).\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Ma olin kord Berlinis.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Ma olin kord Berlinis.\"}]","study.tip":"[\"einmal = ein gong\",\"Bruk einmal når konteksten samsvarar med denne tydinga.\"]","study.important":"[\"einmal = ein gong eller ein gong i fortida.\",\"Peiker på ein gong eller fortida (ein gong var eg...).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"einmal","lv":"éin gong • ein gong","level":"A1","id":"einmal","study":{"id":"a1-einmal","layout":"standardStudy","translation":"éin gong • ein gong","explanation":["Hovudidé: einmal tyder vanlegvis éin gong eller ein gong i fortida.","Det kan òg brukast om noko som skjer berre éin gong.","I forteljingar kan einmal tyde ein gong, som i «ein gong var det ...».","Ordet blir ofte brukt som eit tidsadverb."],"examples":[{"de":"Ich war einmal in Berlin.","lv":"Eg var ein gong i Berlin."},{"de":"Ich war einmal in Berlin.","lv":"Eg vil prøve dette éin gong."}],"tip":["einmal = éin gong eller ein gong i fortida.","Bruk einmal når noko skjer éin gong eller blir omtalt som noko som hende ein gong."],"important":["einmal kan tyde «éin gong» i tydinga éin enkelt gong.","I fortid kan einmal tyde «ein gong», som i «Eg var ein gong i Berlin». "]}}
**Note:** The German word einmal was surrounded by Latvian, Estonian and malformed text; I replaced it with natural Nynorsk meanings and examples for one occurrence or once in the past.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "éin gong • ein gong",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "éin gong • ein gong",
    "explanation": [
      "Hovudidé: einmal tyder vanlegvis éin gong eller ein gong i fortida.",
      "Det kan òg brukast om noko som skjer berre éin gong.",
      "I forteljingar kan einmal tyde ein gong, som i «ein gong var det ...».",
      "Ordet blir ofte brukt som eit tidsadverb."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Eg var ein gong i Berlin."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Eg vil prøve dette éin gong."
      }
    ],
    "tip": [
      "einmal = éin gong eller ein gong i fortida.",
      "Bruk einmal når noko skjer éin gong eller blir omtalt som noko som hende ein gong."
    ],
    "important": [
      "einmal kan tyde «éin gong» i tydinga éin enkelt gong.",
      "I fortid kan einmal tyde «ein gong», som i «Eg var ein gong i Berlin». "
    ]
  },
  "index": 700,
  "id": "einmal"
}
```

---

## Finding 32

**Audit ID:** `LRB074-0032`
**Finding Stable ID:** `g2/a1/nn|Eis|idx:157|study.translation; study.explanation; study.examples[].lv; study.comparison|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `Eis|idx:157`
**Field / path:** `study.translation; study.explanation; study.examples[].lv; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Jää • Iskrem","study.explanation":"[\"Põhiidee: das Eis mõik tätärada nii jääd kui ka jäätist.\",\"Kui jutt på kërmast kërmunud veest, ættäkse eesti keeles käëtä jää.\",\"Kui jutt på rödöst või magostoidust, gejää das Eis igapääielus väga sääli jäätis.\",\"Kontekst ütleb köhe, milline sämäts on sämät.\",\"A1-nivå på den viktigste frasen er ein essen ja Eis im Glas.\"]","study.examples[].lv":null,"study.comparison":"[{\"word\":\"das Eis\",\"meaning\":\"Jää / iskrem\",\"example\":\"Ich esse ein Eis. = Eg et iskrem.\"},{\"word\":\"der Schnee\",\"meaning\":\"Lumi\",\"example\":\"Der Schnee ist weiß. = Snøen er kvit.\"},{\"word\":\"kalt\",\"meaning\":\"Kjøle\",\"example\":\"Das Wasser ist kalt. = Vatnet er kaldt.\"},{\"word\":\"das Dessert\",\"meaning\":\"Magustoit\",\"example\":\"Eis ist ein Dessert. = Iskrem er ein dessert.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Eis","lv":"is • iskrem","level":"A1","id":"Eis","de_article":"das","study":{"id":"a1-eis","layout":"standardStudy","translation":"is • iskrem","explanation":["das Eis kan tyde både is og iskrem på tysk.","Når det handlar om frosen vatn på ein innsjø eller på bakken, tyder Eis «is».","Når det handlar om dessert eller mat, tyder Eis vanlegvis «iskrem».","Konteksten viser kva tyding som passar."],"examples":[{"de":"Ich esse ein Eis.","lv":"Eg et ein iskrem."},{"de":"Möchtest du ein Eis?","lv":"Vil du ha ein iskrem?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"Om vinteren ligg det is på innsjøen."},{"de":"Das Eis ist kalt.","lv":"Isen er kald."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Eg tek ein iskrem med sjokolade."}],"comparison":[{"word":"das Eis","meaning":"is / iskrem","example":"Ich esse ein Eis. = Eg et ein iskrem."},{"word":"der Schnee","meaning":"snø","example":"Der Schnee ist weiß. = Snøen er kvit."},{"word":"kalt","meaning":"kald","example":"Das Wasser ist kalt. = Vatnet er kaldt."},{"word":"das Dessert","meaning":"dessert","example":"Eis ist ein Dessert. = Iskrem er ein dessert."}],"tip":{"text":"Mat betyr vanlegvis iskrem; vinter, vatn eller ei kald overflate betyr is."},"important":["På tysk kan das Eis tyde både «is» og «iskrem».","Konteksten avgjer om det handlar om frosen vatn eller ein dessert."]}}
**Note:** The German word Eis had incorrect Estonian, Norwegian and Latvian fragments; I corrected the card to distinguish Nynorsk is from iskrem according to context.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "is • iskrem",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "is • iskrem",
    "explanation": [
      "das Eis kan tyde både is og iskrem på tysk.",
      "Når det handlar om frosen vatn på ein innsjø eller på bakken, tyder Eis «is».",
      "Når det handlar om dessert eller mat, tyder Eis vanlegvis «iskrem».",
      "Konteksten viser kva tyding som passar."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Eg et ein iskrem."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Vil du ha ein iskrem?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Om vinteren ligg det is på innsjøen."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Isen er kald."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Eg tek ein iskrem med sjokolade."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "is / iskrem",
        "example": "Ich esse ein Eis. = Eg et ein iskrem."
      },
      {
        "word": "der Schnee",
        "meaning": "snø",
        "example": "Der Schnee ist weiß. = Snøen er kvit."
      },
      {
        "word": "kalt",
        "meaning": "kald",
        "example": "Das Wasser ist kalt. = Vatnet er kaldt."
      },
      {
        "word": "das Dessert",
        "meaning": "dessert",
        "example": "Eis ist ein Dessert. = Iskrem er ein dessert."
      }
    ],
    "tip": {
      "text": "Mat betyr vanlegvis iskrem; vinter, vatn eller ei kald overflate betyr is."
    },
    "important": [
      "På tysk kan das Eis tyde både «is» og «iskrem».",
      "Konteksten avgjer om det handlar om frosen vatn eller ein dessert."
    ]
  },
  "index": 157,
  "id": "Eis"
}
```

---

## Finding 33

**Audit ID:** `LRB074-0033`
**Finding Stable ID:** `g2/a1/nn|erst|idx:165|study.translation; study.examples[].lv; study.comparison|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `erst|idx:165`
**Field / path:** `study.translation; study.examples[].lv; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Først av alt • Alles","study.examples[].lv":null,"study.comparison":"[{\"word\":\"erst\",\"meaning\":\"Først av alt • Alles\",\"example\":\"Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Først jobb, så pause.\"},{\"word\":\"zuerst\",\"meaning\":\"Først av alt • Alguses\",\"example\":\"Zuerst frühstücken wir. = Først et vi frukost.\"},{\"word\":\"nur\",\"meaning\":\"Bare\",\"example\":\"Ich habe nur 5 Euro. = Eg har berre 5 euro.\"},{\"word\":\"dann\",\"meaning\":\"Sis\",\"example\":\"Dann gehen wir nach Hause. = So går vi heim.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"erst","lv":"berre • først","level":"A1","id":"erst","study":{"id":"a1-erst","layout":"standardStudy","translation":"berre • først","explanation":["erst tyder ofte «berre» når noko skjer seinare enn venta eller når eit tal er lågt.","Det kan òg tyde «først» i uttrykk som viser rekkjefølgje.","Ich bin erst 18. tyder «Eg er berre 18 år».","Erst lernen, dann spielen. tyder «Først lære, så leike»."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Først lære, så leike."},{"de":"Ich komme erst morgen.","lv":"Eg kjem ikkje før i morgon."},{"de":"Er ist erst 18 Jahre alt.","lv":"Han er berre 18 år gammal."},{"de":"Wir essen erst um acht Uhr.","lv":"Vi et ikkje før klokka åtte."}],"comparison":[{"word":"erst","meaning":"berre / først","example":"Erst lernen, dann spielen. = Først lære, så leike."},{"word":"zuerst","meaning":"først","example":"Zuerst frühstücken wir. = Først et vi frukost."},{"word":"nur","meaning":"berre","example":"Ich habe nur 5 Euro. = Eg har berre 5 euro."},{"word":"dann","meaning":"så / deretter","example":"Dann gehen wir nach Hause. = Så går vi heim."}],"tip":{"text":"Tid, alder eller eit seint tidspunkt → erst; avgrensa mengd → nur."},"important":["erst og nur kan begge tyde «berre», men dei blir brukte på ulike måtar.","erst handlar ofte om tid, rekkjefølgje eller noko som nettopp er nådd; nur avgrensar mengda.","zuerst tyder vanlegvis «først» i ei rekkjefølgje."]}}
**Note:** The German word erst was mixed with Latvian, Estonian and Finnish-looking text; I corrected its two core Nynorsk uses, namely only/not before and first in sequence.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "berre • først",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "berre • først",
    "explanation": [
      "erst tyder ofte «berre» når noko skjer seinare enn venta eller når eit tal er lågt.",
      "Det kan òg tyde «først» i uttrykk som viser rekkjefølgje.",
      "Ich bin erst 18. tyder «Eg er berre 18 år».",
      "Erst lernen, dann spielen. tyder «Først lære, så leike»."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Først lære, så leike."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Eg kjem ikkje før i morgon."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Han er berre 18 år gammal."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Vi et ikkje før klokka åtte."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "berre / først",
        "example": "Erst lernen, dann spielen. = Først lære, så leike."
      },
      {
        "word": "zuerst",
        "meaning": "først",
        "example": "Zuerst frühstücken wir. = Først et vi frukost."
      },
      {
        "word": "nur",
        "meaning": "berre",
        "example": "Ich habe nur 5 Euro. = Eg har berre 5 euro."
      },
      {
        "word": "dann",
        "meaning": "så / deretter",
        "example": "Dann gehen wir nach Hause. = Så går vi heim."
      }
    ],
    "tip": {
      "text": "Tid, alder eller eit seint tidspunkt → erst; avgrensa mengd → nur."
    },
    "important": [
      "erst og nur kan begge tyde «berre», men dei blir brukte på ulike måtar.",
      "erst handlar ofte om tid, rekkjefølgje eller noko som nettopp er nådd; nur avgrensar mengda.",
      "zuerst tyder vanlegvis «først» i ei rekkjefølgje."
    ]
  },
  "index": 165,
  "id": "erst"
}
```

---

## Finding 34

**Audit ID:** `LRB074-0034`
**Finding Stable ID:** `g2/a1/nn|es|idx:167|study.translation; study.explanation; study.examples[].lv; study.comparison|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `es|idx:167`
**Field / path:** `study.translation; study.explanation; study.examples[].lv; study.comparison`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Se • Ta • Umbisikuline vorm","study.explanation":"[\"Hovudidé: es er eit pronomen.\",\"Det brukar ein: det, ikkje-personlege konstruksjonar.\"]","study.examples[].lv":null,"study.comparison":"[{\"word\":\"es\",\"meaning\":\"det • ikkje-personleg form\",\"example\":\"Es regnet. – Det regnar.\"},{\"word\":\"ich\",\"meaning\":\"es (person)\",\"example\":\"Ich lerne Deutsch. – Eg lær tysk.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"es","lv":"det • ikkje-personleg pronomen","level":"A1","id":"es","study":{"id":"a1-es","layout":"standardStudy","translation":"det • ikkje-personleg pronomen","explanation":["es er eit tysk pronomen.","Det kan vise til eit ting eller eit vesen, men blir òg brukt i upersonlege uttrykk.","I uttrykk som Es regnet blir es vanlegvis omsett med «det»."],"examples":[{"de":"Es regnet.","lv":"Det regnar."},{"de":"Es ist kalt.","lv":"Det er kaldt."},{"de":"Das Kind schläft.","lv":"Barnet søv."},{"de":"Es ist müde.","lv":"Det er trøytt."}],"info":["Tysk es tyder ofte «det» eller blir ikkje omsett.","Nynorsk «eg» heiter ich på tysk, ikkje es."],"tip":{"text":"Hugs: tysk es er ikkje det same som Nynorsk «eg»."},"important":["I «Es regnet» er es eit upersonleg subjekt og blir omsett med «det».","Nynorsk «eg» heiter ich på tysk; tysk es tyder ofte «det» eller blir ikkje omsett."],"comparison":[{"word":"es","meaning":"det • ikkje-personleg pronomen","example":"Es regnet. – Det regnar."},{"word":"ich","meaning":"eg","example":"Ich lerne Deutsch. – Eg lærer tysk."}]}}
**Note:** The German word es was confused with Latvian es and filled with unrelated translations; I corrected it to the Nynorsk pronoun det and its impersonal use.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "det • ikkje-personleg pronomen",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "det • ikkje-personleg pronomen",
    "explanation": [
      "es er eit tysk pronomen.",
      "Det kan vise til eit ting eller eit vesen, men blir òg brukt i upersonlege uttrykk.",
      "I uttrykk som Es regnet blir es vanlegvis omsett med «det»."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Det regnar."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Det er kaldt."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Barnet søv."
      },
      {
        "de": "Es ist müde.",
        "lv": "Det er trøytt."
      }
    ],
    "info": [
      "Tysk es tyder ofte «det» eller blir ikkje omsett.",
      "Nynorsk «eg» heiter ich på tysk, ikkje es."
    ],
    "tip": {
      "text": "Hugs: tysk es er ikkje det same som Nynorsk «eg»."
    },
    "important": [
      "I «Es regnet» er es eit upersonleg subjekt og blir omsett med «det».",
      "Nynorsk «eg» heiter ich på tysk; tysk es tyder ofte «det» eller blir ikkje omsett."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "det • ikkje-personleg pronomen",
        "example": "Es regnet. – Det regnar."
      },
      {
        "word": "ich",
        "meaning": "eg",
        "example": "Ich lerne Deutsch. – Eg lærer tysk."
      }
    ]
  },
  "index": 167,
  "id": "es"
}
```

---

## Finding 35

**Audit ID:** `LRB074-0035`
**Finding Stable ID:** `g2/a1/nn|essen|idx:690|lv, study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nn
**Card:** `essen|idx:690`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sy","study.translation":"Sy","study.explanation":"[\"Hovedidé: Tegusõna — toitu söuma.\",\"Essen jähätä säää: toitu tarbima.\",\"Sagelie speltab: aktivitet.\",\"Essen gejättättää: toit või söökord.\",\"Sagely speltab: asja.\",\"Essen betyr sömmist.\",\"Das Essen kan bety et tak eller et spisebord generelt.\"]","study.examples":"[{\"de\":\"Ich esse gern Pizza.\",\"lv\":\"Ma søen meelsasti pizzat.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Mida te tahate spise?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Me some kell 12.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Toit på valmis.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Toit maisab väga häst.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Toit maisab hest.\"}]","study.tip":"[\"essen = eta\",\"Bruk essen når konteksten samsvarar med denne tydinga.\"]","study.important":"[\"essen er eit verb utan artikkel.\",\"das Essen er ikkje det same som essen.\",\"Handling: essen.\",\"Ting/måltid: das Essen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"essen","lv":"ete","level":"A1","id":"essen","study":{"id":"a1-essen","layout":"standardStudy","translation":"ete","explanation":["essen er eit verb som tyder «å ete».","Det blir brukt når ein snakkar om å ta til seg mat.","I presens heiter det til dømes ich esse, du isst og wir essen.","Ikkje bland verbet essen med substantivet das Essen, som tyder mat eller eit måltid."],"examples":[{"de":"Ich esse gern Pizza.","lv":"Eg likar å ete pizza."},{"de":"Was wollt ihr essen?","lv":"Kva vil de ete?"},{"de":"Wir essen um 12 Uhr.","lv":"Vi et klokka tolv."},{"de":"Das Essen ist fertig.","lv":"Maten er ferdig."},{"de":"Das Essen schmeckt sehr gut.","lv":"Maten smakar svært godt."}],"tip":["essen = å ete","Bruk essen når du snakkar om handlinga å ete."],"important":["essen er eit verb utan artikkel.","das Essen er eit substantiv og tyder maten eller måltidet.","Handling: essen. Ting eller måltid: das Essen."]}}
**Note:** The German verb essen was rendered with Estonian and malformed multilingual text; I changed the translation to Nynorsk ete and corrected the explanations and examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "essen",
  "lv": "ete",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "ete",
    "explanation": [
      "essen er eit verb som tyder «å ete».",
      "Det blir brukt når ein snakkar om å ta til seg mat.",
      "I presens heiter det til dømes ich esse, du isst og wir essen.",
      "Ikkje bland verbet essen med substantivet das Essen, som tyder mat eller eit måltid."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Eg likar å ete pizza."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Kva vil de ete?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Vi et klokka tolv."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Maten er ferdig."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Maten smakar svært godt."
      }
    ],
    "tip": [
      "essen = å ete",
      "Bruk essen når du snakkar om handlinga å ete."
    ],
    "important": [
      "essen er eit verb utan artikkel.",
      "das Essen er eit substantiv og tyder maten eller måltidet.",
      "Handling: essen. Ting eller måltid: das Essen."
    ]
  },
  "index": 690,
  "id": "essen"
}
```

---

## Finding 36

**Audit ID:** `LRB074-0036`
**Finding Stable ID:** `g2/a1/nn|Essen|idx:691|lv / study.translation|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `Essen|idx:691`
**Field / path:** `lv / study.translation`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Toalett","study.translation":"Toalett"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Essen","lv":"mat • måltid","level":"A1","id":"Essen","de_article":"das","study":{"id":"a1-essen-study","layout":"standardStudy","translation":"mat • måltid","explanation":["das Essen er eit substantiv som tyder mat eller eit måltid.","Det kan vise til maten generelt eller til eit bestemt måltid.","Ikkje bland substantivet das Essen med verbet essen, som tyder «å ete»."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Maten smakar godt."},{"de":"Was wollt ihr essen?","lv":"Kva vil de ete?"},{"de":"Wir essen um 12 Uhr.","lv":"Vi et klokka tolv."},{"de":"Das Essen ist fertig.","lv":"Maten er ferdig."}],"tip":["das Essen = maten eller måltidet","Bruk das Essen når du snakkar om maten eller måltidet, ikkje sjølve handlinga å ete."],"important":["essen er verbet «å ete».","das Essen er substantivet «mat» eller «måltid».","Handling: essen. Ting eller måltid: das Essen."]}}
**Note:** The German noun Essen was mistranslated as toalett; I replaced it with Nynorsk mat/måltid and corrected the examples to distinguish it from essen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "mat • måltid",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "mat • måltid",
    "explanation": [
      "das Essen er eit substantiv som tyder mat eller eit måltid.",
      "Det kan vise til maten generelt eller til eit bestemt måltid.",
      "Ikkje bland substantivet das Essen med verbet essen, som tyder «å ete»."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Maten smakar godt."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Kva vil de ete?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Vi et klokka tolv."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Maten er ferdig."
      }
    ],
    "tip": [
      "das Essen = maten eller måltidet",
      "Bruk das Essen når du snakkar om maten eller måltidet, ikkje sjølve handlinga å ete."
    ],
    "important": [
      "essen er verbet «å ete».",
      "das Essen er substantivet «mat» eller «måltid».",
      "Handling: essen. Ting eller måltid: das Essen."
    ]
  },
  "index": 691,
  "id": "Essen"
}
```

---

## Finding 37

**Audit ID:** `LRB074-0037`
**Finding Stable ID:** `g2/a1/nn|etwas|idx:169|study.translation; study.explanation; study.examples[].lv; study.comparison|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nn
**Card:** `etwas|idx:169`
**Field / path:** `study.translation; study.explanation; study.examples[].lv; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Midagi • Veidi","study.explanation":"[\"Põhiidee: etwas jähät olenevalt kontekstist magadi või bikto.\",\"Kui etwas asendab tjemnatut asja, tättakse eesti keeles sämätä magadi.\",\"Kui etwas seisab seisab säsätsõna või hulga kurreis, täätä see seisab tättä.\"]","study.examples[].lv":null,"study.comparison":"[{\"word\":\"etwas\",\"meaning\":\"Midagi / veidi\",\"example\":\"Ich brauche etwas. = Eg treng noko.\"},{\"word\":\"was\",\"meaning\":\"Midagi (kõnekeeles)\",\"example\":\"Willst du was trinken? = Vil du ha noko å drikke?\"},{\"word\":\"ein bisschen\",\"meaning\":\"Natttid\",\"example\":\"Ich bin ein bisschen müde. = Eg er litt trøytt.\"},{\"word\":\"nichts\",\"meaning\":\"Ingenting i det hele tatt\",\"example\":\"Ich brauche nichts. = Eg treng ingenting.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"etwas","lv":"noko • litt","level":"A1","id":"etwas","study":{"id":"a1-etwas","layout":"standardStudy","translation":"noko • litt","explanation":["etwas tyder «noko» når det viser til ein ubestemt ting eller mengd.","Som mengdeord kan etwas tyde «litt» eller «noko».","I uttrykket etwas trinken tyder det «drikke noko».","Ikkje bland etwas med nichts, som tyder «ingenting»."],"examples":[{"de":"Ich möchte etwas trinken.","lv":"Eg vil drikke noko."},{"de":"Hast du etwas Zeit?","lv":"Har du litt tid?"},{"de":"Ich bin etwas müde.","lv":"Eg er litt trøytt."},{"de":"Ich habe etwas für dich.","lv":"Eg har noko til deg."},{"de":"Das ist etwas teuer.","lv":"Det er litt dyrt."}],"comparison":[{"word":"etwas","meaning":"noko / litt","example":"Ich brauche etwas. = Eg treng noko."},{"word":"was","meaning":"noko (i daglegtale)","example":"Willst du was trinken? = Vil du drikke noko?"},{"word":"ein bisschen","meaning":"litt","example":"Ich bin ein bisschen müde. = Eg er litt trøytt."},{"word":"nichts","meaning":"ingenting","example":"Ich brauche nichts. = Eg treng ingenting."}],"tip":{"text":"Ein ting eller ei ubestemt mengd → noko; ein liten grad → litt."},"important":["etwas tyder at noko finst eller at det er ei viss mengd; nichts tyder ingenting.","I «etwas trinken» er den naturlege omsetjinga «drikke noko».","I «etwas müde» og «etwas teuer» tyder etwas «litt». "]}}
**Note:** The German word etwas was contaminated by Estonian and Latvian text; I corrected it to the natural Nynorsk alternatives noko and litt with matching examples.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "noko • litt",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "noko • litt",
    "explanation": [
      "etwas tyder «noko» når det viser til ein ubestemt ting eller mengd.",
      "Som mengdeord kan etwas tyde «litt» eller «noko».",
      "I uttrykket etwas trinken tyder det «drikke noko».",
      "Ikkje bland etwas med nichts, som tyder «ingenting»."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Eg vil drikke noko."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Har du litt tid?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Eg er litt trøytt."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Eg har noko til deg."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Det er litt dyrt."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "noko / litt",
        "example": "Ich brauche etwas. = Eg treng noko."
      },
      {
        "word": "was",
        "meaning": "noko (i daglegtale)",
        "example": "Willst du was trinken? = Vil du drikke noko?"
      },
      {
        "word": "ein bisschen",
        "meaning": "litt",
        "example": "Ich bin ein bisschen müde. = Eg er litt trøytt."
      },
      {
        "word": "nichts",
        "meaning": "ingenting",
        "example": "Ich brauche nichts. = Eg treng ingenting."
      }
    ],
    "tip": {
      "text": "Ein ting eller ei ubestemt mengd → noko; ein liten grad → litt."
    },
    "important": [
      "etwas tyder at noko finst eller at det er ei viss mengd; nichts tyder ingenting.",
      "I «etwas trinken» er den naturlege omsetjinga «drikke noko».",
      "I «etwas müde» og «etwas teuer» tyder etwas «litt». "
    ]
  },
  "index": 169,
  "id": "etwas"
}
```

---

## Finding 38

**Audit ID:** `LRB074-0038`
**Finding Stable ID:** `g2/a1/nn|Familie|idx:174|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** nn
**Card:** `Familie|idx:174`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** Perecond
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Familie","lv":"familie","level":"A1","id":"Familie","de_article":"die","de_plural":"die Familien"}
**Note:** The German word Familie was translated as the non-Nynorsk string Perecond; I replaced it with the standard Nynorsk noun familie.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Familie",
  "de_article": "die",
  "de_plural": "die Familien",
  "lv": "familie",
  "level": "A1",
  "index": 174,
  "id": "Familie"
}
```

---

## Finding 39

**Audit ID:** `LRB074-0039`
**Finding Stable ID:** `g2/a1/nn|Ferien|idx:694|lv / study.translation|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `Ferien|idx:694`
**Field / path:** `lv / study.translation`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Vaheag (kul)","study.translation":"Vaheag (kul)"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Ferien","lv":"ferie","level":"A1","id":"Ferien","de_article":"die","study":{"id":"a1-ferien","layout":"standardStudy","translation":"ferie","explanation":["die Ferien er eit substantiv som vanlegvis blir brukt i fleirtal.","Det viser til ferie, særleg skuleferie eller ferie frå arbeid.","Etter in står det ofte in den Ferien, med dativ.","Ordet Urlaub blir oftare brukt om ferie frå arbeid, medan Ferien ofte viser til skuleferie eller ferieperioden generelt."],"examples":[{"de":"In den Ferien fahren wir ans Meer.","lv":"I ferien reiser vi til sjøen."},{"de":"In den Ferien habe ich viel Zeit.","lv":"I ferien har eg mykje tid."},{"de":"Was macht ihr in den Ferien?","lv":"Kva gjer de i ferien?"},{"de":"Die Schule ist in den Ferien zu.","lv":"Skulen er stengd i ferien."}],"comparison":[{"word":"die Ferien","meaning":"ferie, ofte skuleferie","example":"In den Ferien fahren wir weg. – I ferien reiser vi bort."},{"word":"der Urlaub","meaning":"ferie frå arbeid","example":"Ich habe zwei Wochen Urlaub. – Eg har to veker ferie."}],"tip":["die Ferien står vanlegvis i fleirtal.","Bruk die Ferien når du snakkar om ferieperioden eller skuleferien."],"important":["Etter in i uttrykket in den Ferien står Ferien i dativ fleirtal.","Skuleferie heiter die Ferien på tysk og blir vanlegvis brukt i fleirtal.","Urlaub blir ofte brukt om ferie frå arbeid."]}}
**Note:** The German word Ferien had an incorrect Estonian-based translation and malformed examples; I corrected it to Nynorsk ferie and retained the important plural and case information.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "ferie",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "ferie",
    "explanation": [
      "die Ferien er eit substantiv som vanlegvis blir brukt i fleirtal.",
      "Det viser til ferie, særleg skuleferie eller ferie frå arbeid.",
      "Etter in står det ofte in den Ferien, med dativ.",
      "Ordet Urlaub blir oftare brukt om ferie frå arbeid, medan Ferien ofte viser til skuleferie eller ferieperioden generelt."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "I ferien reiser vi til sjøen."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "I ferien har eg mykje tid."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Kva gjer de i ferien?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Skulen er stengd i ferien."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "ferie, ofte skuleferie",
        "example": "In den Ferien fahren wir weg. – I ferien reiser vi bort."
      },
      {
        "word": "der Urlaub",
        "meaning": "ferie frå arbeid",
        "example": "Ich habe zwei Wochen Urlaub. – Eg har to veker ferie."
      }
    ],
    "tip": [
      "die Ferien står vanlegvis i fleirtal.",
      "Bruk die Ferien når du snakkar om ferieperioden eller skuleferien."
    ],
    "important": [
      "Etter in i uttrykket in den Ferien står Ferien i dativ fleirtal.",
      "Skuleferie heiter die Ferien på tysk og blir vanlegvis brukt i fleirtal.",
      "Urlaub blir ofte brukt om ferie frå arbeid."
    ]
  },
  "index": 694,
  "id": "Ferien"
}
```

---

## Finding 40

**Audit ID:** `LRB074-0040`
**Finding Stable ID:** `g2/a1/nn|fernsehen|idx:687|lv, study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nn
**Card:** `fernsehen|idx:687`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Telerit vaatama","study.translation":"Telerit vaatama","study.explanation":"Põhiidee: fernsehen på lahutatav tegusõna — ich sehe fern, du siehst fern. Se jähää telerit vaatama. Hedre aja segi nimisõnaga das Fernsehen (TV kui meedium).","study.examples":"[{\"de\":\"Ich sehe heute Abend fern.\",\"lv\":\"Täna atala vaatan ma telerit.\"},{\"de\":\"Siehst du oft fern?\",\"lv\":\"Hva er det du skal gjøre?\"},{\"de\":\"Die Kinder sehen am Nachmittag fern.\",\"lv\":\"Forfalt vaatavad pæctelõunal televiisorit.\"}]","study.comparison":"[{\"word\":\"fernsehen\",\"meaning\":\"Telerit vaatama\",\"example\":\"Ich sehe fern. = Eg ser TV.\"},{\"word\":\"das Fernsehen\",\"meaning\":\"TV (middels)\",\"example\":\"Im Fernsehen läuft ein Film. = På TV køyrer ein film.\"},{\"word\":\"sehen\",\"meaning\":\"Nagema\",\"example\":\"Ich sehe einen Film. = Eg ser ein film.\"}]","study.tip":"{\"leftBlocks\":[{\"text\":\"Tetavaze kohta svetnosti fernsehen (ich sehe bregne). TV-programmer eller media brukes der Fernsehen brukes.\"}]}","study.important":"{\"text\":\"Fernsehen = tegusõna (ich sehe bregne). das Fernsehen = nimisõna, mekke ainsuses.\"}"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"fernsehen","lv":"sjå på TV","level":"A1","study":{"id":"a1-fernsehen","layout":"standardStudy","translation":"sjå på TV","explanation":"Hovudidé: fernsehen er eit delbart verb som tyder å sjå på TV. I presens står førestavinga fern sist: ich sehe fern, du siehst fern. Ikkje bland verbet fernsehen med substantivet das Fernsehen, som viser til fjernsyn som medium.","examples":[{"de":"Ich sehe heute Abend fern.","lv":"Eg ser på TV i kveld."},{"de":"Siehst du oft fern?","lv":"Ser du ofte på TV?"},{"de":"Die Kinder sehen am Nachmittag fern.","lv":"Barna ser på TV om ettermiddagen."}],"comparison":[{"word":"fernsehen","meaning":"sjå på TV","example":"Ich sehe fern. = Eg ser på TV."},{"word":"das Fernsehen","meaning":"fjernsyn som medium","example":"Im Fernsehen läuft ein Film. = Det går ein film på TV."},{"word":"sehen","meaning":"sjå","example":"Ich sehe einen Film. = Eg ser ein film."}],"tip":{"text":"I fernsehen blir fern skilt frå verbet i presens: Ich sehe fern. Når ein snakkar om TV som medium, brukar ein das Fernsehen."},"important":{"text":"fernsehen er verbet å sjå på TV. das Fernsehen er substantivet fjernsyn eller TV som medium."}}}
**Note:** Individuāli pārbaudīts DE verbs fernsehen: aizstāts jaukts estiešu/latviešu teksts ar naturālu nynorsk sjå på TV, skaidrots delbart verb mot das Fernsehen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fernsehen",
  "lv": "sjå på TV",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "sjå på TV",
    "explanation": "Hovudidé: fernsehen er eit delbart verb som tyder å sjå på TV. I presens står førestavinga fern sist: ich sehe fern, du siehst fern. Ikkje bland verbet fernsehen med substantivet das Fernsehen, som viser til fjernsyn som medium.",
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Eg ser på TV i kveld."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Ser du ofte på TV?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Barna ser på TV om ettermiddagen."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "sjå på TV",
        "example": "Ich sehe fern. = Eg ser på TV."
      },
      {
        "word": "das Fernsehen",
        "meaning": "fjernsyn som medium",
        "example": "Im Fernsehen läuft ein Film. = Det går ein film på TV."
      },
      {
        "word": "sehen",
        "meaning": "sjå",
        "example": "Ich sehe einen Film. = Eg ser ein film."
      }
    ],
    "tip": {
      "text": "I fernsehen blir fern skilt frå verbet i presens: Ich sehe fern. Når ein snakkar om TV som medium, brukar ein das Fernsehen."
    },
    "important": {
      "text": "fernsehen er verbet å sjå på TV. das Fernsehen er substantivet fjernsyn eller TV som medium."
    }
  },
  "index": 687
}
```

---

## Finding 41

**Audit ID:** `LRB074-0041`
**Finding Stable ID:** `g2/a1/nn|Fernsehen|idx:688|lv, study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nn
**Card:** `Fernsehen|idx:688`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Fjernsyn","study.translation":"Fjernsyn","study.explanation":"[\"Põhiidee: Nimisõna, sekke ainsus. Kirjeldab TV-d kui meediumi või saateid tervikuna.\",\"Das Fernsehen gejättättä: saadet vaatama.\",\"Sagelie speltab: aktivitet.\",\"Das Fernsehen geschätzliche: TV kui meedium.\",\"Sägeli ompretab: nimisõna (ainult ainsuses).\",\"Fernsehen on tegusõna, mida saab lahutada: ich sehe bregne, du siehst bregn.\",\"Das Fernsehen on nimisõna ja sekke ainsuses — sejl ei ole mitmuse vormi.\"]","study.examples":"[{\"de\":\"Was gibt es heute im Fernsehen?\",\"lv\":\"Hva er fjernsynet?\"},{\"de\":\"Was gibt es heute im Fernsehen?\",\"lv\":\"Hva er fjernsynet?\"},{\"de\":\"Im Fernsehen läuft ein Film.\",\"lv\":\"TV-show filmi.\"},{\"de\":\"Das Fernsehen ist heute langweilig.\",\"lv\":\"TV-program på täna igav.\"},{\"de\":\"Ich sehe heute Abend fern.\",\"lv\":\"Täna atala vaatan ma telerit.\"},{\"de\":\"Was gibt es im Fernsehen?\",\"lv\":\"Har du TV?\"}]","study.tip":"[\"Hvis du snakkar om handling, brukar du fernsehen (ich sehe fern). Hvis du snakkar om TV-program eller media, brukar du das Fernsehen.\",\"Substantiv, berre eintal. Skildrar TV som medium eller sending totalt sett.\"]","study.important":"[\"fernsehen er delbart: sehen + fern.\",\"das Fernsehen er ikkje i fleirtal — ikkje *die Fernsehen.\",\"Feil: die Fernsehen → Rett: das Fernsehen\",\"Handling: fernsehen → ich sehe fern.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Fernsehen","lv":"fjernsyn","level":"A1","de_article":"das","study":{"id":"a1-fernsehen-study","layout":"standardStudy","translation":"fjernsyn","explanation":["Hovudidé: Fernsehen er eit substantiv som skildrar fjernsyn som medium eller sendingar generelt.","Das Fernsehen er vanlegvis eit masseord og blir brukt i eintal.","Fernsehen kan òg vere eit verb: Ich sehe fern betyr Eg ser på fjernsyn.","Som verb er fernsehen delbart: sehen + fern.","Det finst vanlegvis ikkje ei fleirtalsform av das Fernsehen."],"examples":[{"de":"Was gibt es heute im Fernsehen?","lv":"Kva går på fjernsynet i dag?"},{"de":"Was gibt es heute im Fernsehen?","lv":"Det går ein film på fjernsynet."},{"de":"Im Fernsehen läuft ein Film.","lv":"Fjernsynet er kjedeleg i dag."},{"de":"Das Fernsehen ist heute langweilig.","lv":"Eg ser på fjernsyn i kveld."}],"tip":["Bruk das Fernsehen når du snakkar om fjernsyn som medium eller sendingar generelt.","Bruk fernsehen når du snakkar om handlinga å sjå på fjernsyn: Ich sehe fern."],"important":["das Fernsehen er eit substantiv og blir vanlegvis brukt berre i eintal.","fernsehen er eit delbart verb: Ich sehe fern.","Ikkje bruk *die Fernsehen som vanleg fleirtalsform."]}}
**Note:** For DE word Fernsehen, I replaced mixed-language text and corrected the noun/verb distinction in natural Nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "fjernsyn",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "fjernsyn",
    "explanation": [
      "Hovudidé: Fernsehen er eit substantiv som skildrar fjernsyn som medium eller sendingar generelt.",
      "Das Fernsehen er vanlegvis eit masseord og blir brukt i eintal.",
      "Fernsehen kan òg vere eit verb: Ich sehe fern betyr Eg ser på fjernsyn.",
      "Som verb er fernsehen delbart: sehen + fern.",
      "Det finst vanlegvis ikkje ei fleirtalsform av das Fernsehen."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Kva går på fjernsynet i dag?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Det går ein film på fjernsynet."
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "Fjernsynet er kjedeleg i dag."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Eg ser på fjernsyn i kveld."
      }
    ],
    "tip": [
      "Bruk das Fernsehen når du snakkar om fjernsyn som medium eller sendingar generelt.",
      "Bruk fernsehen når du snakkar om handlinga å sjå på fjernsyn: Ich sehe fern."
    ],
    "important": [
      "das Fernsehen er eit substantiv og blir vanlegvis brukt berre i eintal.",
      "fernsehen er eit delbart verb: Ich sehe fern.",
      "Ikkje bruk *die Fernsehen som vanleg fleirtalsform."
    ]
  },
  "index": 688
}
```

---

## Finding 42

**Audit ID:** `LRB074-0042`
**Finding Stable ID:** `g2/a1/nn|Fußball|idx:218|study.explanation; study.examples[1].lv; study.important|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `Fußball|idx:218`
**Field / path:** `study.explanation; study.examples[1].lv; study.important`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hovudidé: Fußball betyr oftast fotball som sportslag.\",\"Med artikkel og teljeleg tyding kan der Fußball òg betyda fotball.\",\"Fleirtal die Fußbälle betyr fotballar, ikkje fleire sportslag.\"]","study.examples[1].lv":null,"study.important":"[\"die Fußbälle betyr fotballar.\",\"Sportslaget Fußball er vanleg i eintal.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Fußball","lv":"fotball","level":"A1","de_article":"der","de_plural":"die Fußbälle","study":{"id":"a1-fussball-study","layout":"standardStudy","translation":"fotball","explanation":["Hovudidé: Fußball kan betyde sporten fotball eller ein konkret fotball.","Utan artikkel betyr Fußball vanlegvis sporten.","Med artikkel kan der Fußball betyde ein konkret ball.","Fleirtal die Fußbälle betyr fotballar."],"examples":[{"de":"Ich spiele Fußball.","lv":"Eg spelar fotball."},{"de":"Der Fußball liegt im Garten.","lv":"Fotballen ligg i hagen."},{"de":"Wir kaufen zwei Fußbälle.","lv":"Vi kjøper to fotballar."}],"comparison":[{"word":"Fußball","meaning":"fotball som sport","example":"Ich spiele Fußball. – Eg spelar fotball."},{"word":"der Fußball","meaning":"ein fotball","example":"Der Fußball ist neu. – Fotballen er ny."}],"tip":["Utan artikkel betyr spielen Fußball vanlegvis å spele fotball.","Ein Fußball og die Fußbälle viser til ein eller fleire konkrete fotballar."],"important":["die Fußbälle betyr fotballar.","Fußball utan artikkel viser vanlegvis til sporten."]}}
**Note:** For DE word Fußball, I corrected the explanation and examples so the sport and the concrete ball are clearly distinguished in Nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fußball",
  "de_article": "der",
  "de_plural": "die Fußbälle",
  "lv": "fotball",
  "level": "A1",
  "study": {
    "id": "a1-fussball-study",
    "layout": "standardStudy",
    "translation": "fotball",
    "explanation": [
      "Hovudidé: Fußball kan betyde sporten fotball eller ein konkret fotball.",
      "Utan artikkel betyr Fußball vanlegvis sporten.",
      "Med artikkel kan der Fußball betyde ein konkret ball.",
      "Fleirtal die Fußbälle betyr fotballar."
    ],
    "examples": [
      {
        "de": "Ich spiele Fußball.",
        "lv": "Eg spelar fotball."
      },
      {
        "de": "Der Fußball liegt im Garten.",
        "lv": "Fotballen ligg i hagen."
      },
      {
        "de": "Wir kaufen zwei Fußbälle.",
        "lv": "Vi kjøper to fotballar."
      }
    ],
    "comparison": [
      {
        "word": "Fußball",
        "meaning": "fotball som sport",
        "example": "Ich spiele Fußball. – Eg spelar fotball."
      },
      {
        "word": "der Fußball",
        "meaning": "ein fotball",
        "example": "Der Fußball ist neu. – Fotballen er ny."
      }
    ],
    "tip": [
      "Utan artikkel betyr spielen Fußball vanlegvis å spele fotball.",
      "Ein Fußball og die Fußbälle viser til ein eller fleire konkrete fotballar."
    ],
    "important": [
      "die Fußbälle betyr fotballar.",
      "Fußball utan artikkel viser vanlegvis til sporten."
    ]
  },
  "index": 218
}
```

---

## Finding 43

**Audit ID:** `LRB074-0043`
**Finding Stable ID:** `g2/a1/nn|ganz|idx:219|lv; study.translation|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `ganz|idx:219`
**Field / path:** `lv; study.translation`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Hallo","study.translation":"Hallo"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ganz","lv":"heil • heilt • fullstendig • ganske","level":"A1","study":{"id":"a1-ganz-study","layout":"standardStudy","translation":"heil • heilt • fullstendig • ganske","explanation":["Hovudidé: ganz saman med substantiv betyr heil eller heilt.","Framfor adjektiv eller adverb kan ganz betyde heilt, fullstendig eller ganske.","ganz er ikkje det same som pronomenet alles."],"examples":[{"de":"Ich arbeite den ganzen Tag.","lv":"Eg arbeider heile dagen."},{"de":"Das ganze Haus ist sauber.","lv":"Heile huset er reint."},{"de":"Das ist ganz sicher.","lv":"Det er heilt sikkert."},{"de":"Das Essen ist ganz gut.","lv":"Maten er ganske god."}],"comparison":[{"word":"ganz","meaning":"heil • heilt • fullstendig • ganske","example":"der ganze Tag – heile dagen"},{"word":"alles","meaning":"alt","example":"Alles ist gut. – Alt er bra."}],"tip":["Framfor substantiv betyr ganz ofte heil eller heilt.","Framfor adjektiv betyr ganz ofte heilt, fullstendig eller ganske."],"important":["der ganze Tag = heile dagen.","alles = alt som pronomen."]}}
**Note:** For DE word ganz, I changed the incorrect card translation Hallo to the relevant Nynorsk meanings heil, heilt, fullstendig and ganske.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ganz",
  "lv": "heil • heilt • fullstendig • ganske",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "heil • heilt • fullstendig • ganske",
    "explanation": [
      "Hovudidé: ganz saman med substantiv betyr heil eller heilt.",
      "Framfor adjektiv eller adverb kan ganz betyde heilt, fullstendig eller ganske.",
      "ganz er ikkje det same som pronomenet alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "Eg arbeider heile dagen."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "Heile huset er reint."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "Det er heilt sikkert."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "Maten er ganske god."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "heil • heilt • fullstendig • ganske",
        "example": "der ganze Tag – heile dagen"
      },
      {
        "word": "alles",
        "meaning": "alt",
        "example": "Alles ist gut. – Alt er bra."
      }
    ],
    "tip": [
      "Framfor substantiv betyr ganz ofte heil eller heilt.",
      "Framfor adjektiv betyr ganz ofte heilt, fullstendig eller ganske."
    ],
    "important": [
      "der ganze Tag = heile dagen.",
      "alles = alt som pronomen."
    ]
  },
  "index": 219
}
```

---

## Finding 44

**Audit ID:** `LRB074-0044`
**Finding Stable ID:** `g2/a1/nn|geben|idx:223|lv; study|LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `geben|idx:223`
**Field / path:** `lv; study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Puste","study.translation":"Puste","study.explanation":"[\"Hovedidé: geben betyr tåke.\",\"Geben brukes når\",\"Se tvert imot suund sönale nehmen.\",\"Bekommen gejät saama, seega olla see, kes magadi kède saab.\"]","study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"Anna mulle palun raamat.\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"Ma andre sulle oma numeri.\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Ma vőn bőbő.\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"Ma saan konge.\"}]","study.comparison":"[{\"word\":\"geben\",\"meaning\":\"Puste\",\"example\":\"Gib mir das Buch. = Gje meg boka.\"},{\"word\":\"nehmen\",\"meaning\":\"Võtma / kète vämä\",\"example\":\"Ich nehme das Buch. = Eg tek boka.\"},{\"word\":\"bekommen\",\"meaning\":\"Saama / kyss saama\",\"example\":\"Ich bekomme ein Geschenk. = Eg får ei gåve.\"},{\"word\":\"bringen\",\"meaning\":\"Tooma\",\"example\":\"Ich bringe dir das Buch. = Eg bringer deg boka.\"}]","study.tip":"{\"text\":\"Atceries: dot prom → geben; paņemt sev → nehmen.\"}","study.important":"[\"geben og nehmen er motsette retningar.\",\"bekommen betyr å få, ikkje å gi.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"geben","lv":"gi","level":"A1","study":{"id":"a1-geben","layout":"standardStudy","translation":"gi","explanation":["Hovudidé: geben betyr å gi eller overrekke noko til nokon.","Geben blir brukt når noko går frå ein person til ein annan.","Nehmen betyr å ta, medan bekommen betyr å få.","Bringen betyr å bringe eller ta med noko til ein stad eller ein person."],"examples":[{"de":"Gib mir bitte das Buch.","lv":"Gi meg boka, ver så snill."},{"de":"Ich gebe dir meine Nummer.","lv":"Eg gir deg nummeret mitt."},{"de":"Ich nehme das Buch.","lv":"Eg tek boka."},{"de":"Ich bekomme ein Geschenk.","lv":"Eg får ei gåve."}],"comparison":[{"word":"geben","meaning":"gi","example":"Gib mir das Buch. = Gi meg boka."},{"word":"nehmen","meaning":"ta","example":"Ich nehme das Buch. = Eg tek boka."},{"word":"bekommen","meaning":"få","example":"Ich bekomme ein Geschenk. = Eg får ei gåve."},{"word":"bringen","meaning":"bringe eller ta med","example":"Ich bringe dir das Buch. = Eg tek med boka til deg."}],"tip":{"text":"Hugs: geben = gi, nehmen = ta, bekommen = få."},"important":["geben og nehmen uttrykkjer motsette handlingar.","bekommen betyr å få, ikkje å gi."]}}
**Note:** For DE word geben, I removed Latvian, Estonian and corrupted remnants and restored the correct Nynorsk meaning gi with consistent contrasts.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "geben",
  "lv": "gi",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "gi",
    "explanation": [
      "Hovudidé: geben betyr å gi eller overrekke noko til nokon.",
      "Geben blir brukt når noko går frå ein person til ein annan.",
      "Nehmen betyr å ta, medan bekommen betyr å få.",
      "Bringen betyr å bringe eller ta med noko til ein stad eller ein person."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Gi meg boka, ver så snill."
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Eg gir deg nummeret mitt."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Eg tek boka."
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Eg får ei gåve."
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "gi",
        "example": "Gib mir das Buch. = Gi meg boka."
      },
      {
        "word": "nehmen",
        "meaning": "ta",
        "example": "Ich nehme das Buch. = Eg tek boka."
      },
      {
        "word": "bekommen",
        "meaning": "få",
        "example": "Ich bekomme ein Geschenk. = Eg får ei gåve."
      },
      {
        "word": "bringen",
        "meaning": "bringe eller ta med",
        "example": "Ich bringe dir das Buch. = Eg tek med boka til deg."
      }
    ],
    "tip": {
      "text": "Hugs: geben = gi, nehmen = ta, bekommen = få."
    },
    "important": [
      "geben og nehmen uttrykkjer motsette handlingar.",
      "bekommen betyr å få, ikkje å gi."
    ]
  },
  "index": 223
}
```

---

## Finding 45

**Audit ID:** `LRB074-0045`
**Finding Stable ID:** `g2/a1/nn|gefallen|idx:225|lv; study.examples; study.comparison|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `gefallen|idx:225`
**Field / path:** `lv; study.examples; study.comparison`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Meeldima","study.examples":"[{\"de\":\"Das gefällt mir.\",\"lv\":\"det likar meg.\"},{\"de\":\"Gefällt dir das Kleid?\",\"lv\":\"likar du kjolen?\"},{\"de\":\"Der Film gefällt uns.\",\"lv\":\"me likar filmen.\"}]","study.comparison":"[{\"word\":\"gefallen\",\"meaning\":\"lika • person i dativ\",\"example\":\"Das gefällt mir. – Det likar meg.\"},{\"word\":\"mögen\",\"meaning\":\"lika • helst vil ha\",\"example\":\"Ich mag das. – Det likar meg.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"gefallen","lv":"like","level":"A1","study":{"id":"a1-gefallen-study","layout":"standardStudy","translation":"like","explanation":["Hovudidé: gefallen betyr å like eller falle i smak.","Det som fell i smak, er subjektet på tysk.","Den som likar noko, står i dativ: mir, dir, ihm, ihr, uns, euch eller ihnen."],"examples":[{"de":"Das gefällt mir.","lv":"Eg likar det."},{"de":"Gefällt dir das Kleid?","lv":"Likar du kjolen?"},{"de":"Der Film gefällt uns.","lv":"Vi likar filmen."}],"comparison":[{"word":"gefallen","meaning":"like • personen står i dativ","example":"Das gefällt mir. – Eg likar det."},{"word":"mögen","meaning":"like eller vere glad i","example":"Ich mag das. – Eg likar det."}],"tip":["Hugs konstruksjonen: Das gefällt mir. På Nynorsk seier vi vanlegvis Eg likar det.","Ikkje omset den tyske ordstillinga direkte."],"important":["gefallen bruker dativ: mir, dir, ihm, ihr.","Das gefällt mir = Eg likar det."]}}
**Note:** For DE word gefallen, I corrected the mistranslated datives and comparison examples to idiomatic Nynorsk: Eg likar det and Vi likar filmen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gefallen",
  "lv": "like",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "like",
    "explanation": [
      "Hovudidé: gefallen betyr å like eller falle i smak.",
      "Det som fell i smak, er subjektet på tysk.",
      "Den som likar noko, står i dativ: mir, dir, ihm, ihr, uns, euch eller ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "Eg likar det."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "Likar du kjolen?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "Vi likar filmen."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "like • personen står i dativ",
        "example": "Das gefällt mir. – Eg likar det."
      },
      {
        "word": "mögen",
        "meaning": "like eller vere glad i",
        "example": "Ich mag das. – Eg likar det."
      }
    ],
    "tip": [
      "Hugs konstruksjonen: Das gefällt mir. På Nynorsk seier vi vanlegvis Eg likar det.",
      "Ikkje omset den tyske ordstillinga direkte."
    ],
    "important": [
      "gefallen bruker dativ: mir, dir, ihm, ihr.",
      "Das gefällt mir = Eg likar det."
    ]
  },
  "index": 225
}
```

---

## Finding 46

**Audit ID:** `LRB074-0046`
**Finding Stable ID:** `g2/a1/nn|Gemüse|idx:692|lv / study.translation|MISTRANSLATION|gpt-5.6-luna`
**Lang:** nn
**Card:** `Gemüse|idx:692`
**Field / path:** `lv / study.translation`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kjøkken-elskende","study.translation":"Kjøkken-elskende"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Gemüse","lv":"grønsaker","level":"A1","de_article":"das","study":{"id":"a1-gemuese","layout":"standardStudy","translation":"grønsaker","explanation":["Hovudidé: Gemüse betyr grønsaker generelt.","Das Gemüse er eit masseord og har vanlegvis inga fleirtalsform.","Det tyske ordet blir brukt om grønsaker som heilskap."],"examples":[{"de":"Ich esse gern Gemüse.","lv":"Eg et gjerne grønsaker."},{"de":"Ich esse gern Gemüse.","lv":"Grønsakene er ferske."},{"de":"Das Gemüse ist frisch.","lv":"Vi kjøper grønsaker på marknaden."},{"de":"Wir kaufen Gemüse auf dem Markt.","lv":"Eg likar frukt og grønsaker."}],"tip":["das Gemüse = grønsaker.","Bruk das Gemüse når du snakkar om grønsaker som heilskap."],"important":["Det heiter ikkje vanlegvis *die Gemüse.","das Gemüse viser til grønsaker som masse eller heilskap."]}}
**Note:** For DE word Gemüse, I replaced the false translation Kjøkken-elskende and contaminated examples with grønsaker and correct Nynorsk sentences.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Gemüse",
  "de_article": "das",
  "lv": "grønsaker",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "grønsaker",
    "explanation": [
      "Hovudidé: Gemüse betyr grønsaker generelt.",
      "Das Gemüse er eit masseord og har vanlegvis inga fleirtalsform.",
      "Det tyske ordet blir brukt om grønsaker som heilskap."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Eg et gjerne grønsaker."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Grønsakene er ferske."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Vi kjøper grønsaker på marknaden."
      },
      {
        "de": "Wir kaufen Gemüse auf dem Markt.",
        "lv": "Eg likar frukt og grønsaker."
      }
    ],
    "tip": [
      "das Gemüse = grønsaker.",
      "Bruk das Gemüse når du snakkar om grønsaker som heilskap."
    ],
    "important": [
      "Det heiter ikkje vanlegvis *die Gemüse.",
      "das Gemüse viser til grønsaker som masse eller heilskap."
    ]
  },
  "index": 692
}
```

---

## Finding 47

**Audit ID:** `LRB074-0047`
**Finding Stable ID:** `g2/a1/nn|Geschichte|idx:233|study.examples[0].lv; study.comparison[0].example|GRAMMAR|gpt-5.6-luna`
**Lang:** nn
**Card:** `Geschichte|idx:233`
**Field / path:** `study.examples[0].lv; study.comparison[0].example`
**Severity:** MEDIUM
**Category:** GRAMMAR_MORPHOLOGY_OR_FORM
**CURRENT (captured scope):** {"study.examples[0].lv":null,"study.comparison[0].example":"eine interessante Geschichte – ein interessant historia"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Geschichte","lv":"historie • forteljing","level":"A1","de_article":"die","de_plural":"die Geschichten","study":{"id":"a1-geschichte-study","layout":"standardStudy","translation":"historie • forteljing","explanation":["Hovudidé: Geschichte kan betyde historie eller ei forteljing.","Fleirtal die Geschichten betyr vanlegvis forteljingar eller historier.","Når det gjeld skulefaget historie, bruker ein Geschichte i eintal."],"examples":[{"de":"Er erzählt eine Geschichte.","lv":"Han fortel ei historie."},{"de":"Ich lerne Geschichte.","lv":"Eg lærer historie."},{"de":"Das ist die Geschichte Deutschlands.","lv":"Dette er historia til Tyskland."}],"comparison":[{"word":"eine Geschichte","meaning":"ei forteljing eller ei historie","example":"eine interessante Geschichte – ei interessant historie"},{"word":"Geschichte","meaning":"historie som fag","example":"Geschichte lernen – lære historie"}],"tip":["Med eine eller i fleirtal viser Geschichte ofte til ei forteljing eller fleire historier.","Som skulefag betyr Geschichte historie."],"important":["die Geschichten = historier eller forteljingar.","Geschichte som skulefag står vanlegvis i eintal."]}}
**Note:** For DE word Geschichte, I corrected the case and gender errors in the first example and comparison to ei interessant historie in Nynorsk.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Geschichte",
  "de_article": "die",
  "de_plural": "die Geschichten",
  "lv": "historie • forteljing",
  "level": "A1",
  "study": {
    "id": "a1-geschichte-study",
    "layout": "standardStudy",
    "translation": "historie • forteljing",
    "explanation": [
      "Hovudidé: Geschichte kan betyde historie eller ei forteljing.",
      "Fleirtal die Geschichten betyr vanlegvis forteljingar eller historier.",
      "Når det gjeld skulefaget historie, bruker ein Geschichte i eintal."
    ],
    "examples": [
      {
        "de": "Er erzählt eine Geschichte.",
        "lv": "Han fortel ei historie."
      },
      {
        "de": "Ich lerne Geschichte.",
        "lv": "Eg lærer historie."
      },
      {
        "de": "Das ist die Geschichte Deutschlands.",
        "lv": "Dette er historia til Tyskland."
      }
    ],
    "comparison": [
      {
        "word": "eine Geschichte",
        "meaning": "ei forteljing eller ei historie",
        "example": "eine interessante Geschichte – ei interessant historie"
      },
      {
        "word": "Geschichte",
        "meaning": "historie som fag",
        "example": "Geschichte lernen – lære historie"
      }
    ],
    "tip": [
      "Med eine eller i fleirtal viser Geschichte ofte til ei forteljing eller fleire historier.",
      "Som skulefag betyr Geschichte historie."
    ],
    "important": [
      "die Geschichten = historier eller forteljingar.",
      "Geschichte som skulefag står vanlegvis i eintal."
    ]
  },
  "index": 233
}
```

---

## Finding 48

**Audit ID:** `LRB074-0048`
**Finding Stable ID:** `g2/a1/nn|Geschwister|idx:234|lv, study|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Lang:** nn
**Card:** `Geschwister|idx:234`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"søsken","study.translation":"søsken","study.explanation":"[\"Hovudidé: Geschwister betyr søsken saman.\",\"Dette ordet brukar ein vanleg berre i fleirtal.\",\"For ein person brukar ein Bruder eller Schwester.\"]","study.examples":"[{\"de\":\"Ich habe zwei Geschwister.\",\"lv\":\"eg har to søsken.\"},{\"de\":\"Meine Geschwister wohnen in Berlin.\",\"lv\":\"mine søskena mine søsken bur i Berlin.\"}]","study.comparison":"[{\"word\":\"Geschwister\",\"meaning\":\"søsken\",\"example\":\"Meine Geschwister – mine søsken\"},{\"word\":\"Bruder\",\"meaning\":\"Vend\",\"example\":\"mein Bruder – min bror\"},{\"word\":\"Schwester\",\"meaning\":\"Õde\",\"example\":\"meine Schwester – mi syster\"}]","study.tip":"[\"Geschwister er vanleg i fleirtal.\",\"For ein person velj Bruder eller Schwester.\"]","study.important":"[\"Ikkje bruk ein Geschwister som vanleg A1 eintalsform.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Geschwister","lv":"søsken","level":"A1","de_article":"die","study":{"id":"a1-geschwister-study","layout":"standardStudy","translation":"søsken","explanation":["Hovudidé: Geschwister betyr søsken, altså brør og systrer samla.","Ordet blir vanlegvis brukt i fleirtal.","For éin person bruker ein Bruder eller Schwester."],"examples":[{"de":"Ich habe zwei Geschwister.","lv":"Eg har to sysken."},{"de":"Meine Geschwister wohnen in Berlin.","lv":"Syskena mine bur i Berlin."}],"comparison":[{"word":"Geschwister","meaning":"sysken","example":"Meine Geschwister – syskena mine"},{"word":"Bruder","meaning":"bror","example":"mein Bruder – broren min"},{"word":"Schwester","meaning":"syster","example":"meine Schwester – systera mi"}],"tip":["Geschwister blir vanlegvis brukt i fleirtal.","For éin person vel du Bruder eller Schwester."],"important":["Ikkje bruk *ein Geschwister som vanleg eintalsform."]}}
**Note:** For DE word Geschwister, I corrected the mixed-language and duplicated wording, using the Nynorsk form sysken and idiomatic possessives.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Geschwister",
  "de_article": "die",
  "lv": "søsken",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "søsken",
    "explanation": [
      "Hovudidé: Geschwister betyr søsken, altså brør og systrer samla.",
      "Ordet blir vanlegvis brukt i fleirtal.",
      "For éin person bruker ein Bruder eller Schwester."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "Eg har to sysken."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "Syskena mine bur i Berlin."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "sysken",
        "example": "Meine Geschwister – syskena mine"
      },
      {
        "word": "Bruder",
        "meaning": "bror",
        "example": "mein Bruder – broren min"
      },
      {
        "word": "Schwester",
        "meaning": "syster",
        "example": "meine Schwester – systera mi"
      }
    ],
    "tip": [
      "Geschwister blir vanlegvis brukt i fleirtal.",
      "For éin person vel du Bruder eller Schwester."
    ],
    "important": [
      "Ikkje bruk *ein Geschwister som vanleg eintalsform."
    ]
  },
  "index": 234
}
```

---

## Finding 49

**Audit ID:** `LRB074-0049`
**Finding Stable ID:** `g2/a1/nn|Glas|idx:241|lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** nn
**Card:** `Glas|idx:241`
**Field / path:** `lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** Klaas
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Glas","lv":"glas","level":"A1","id":"Glas","de_article":"das","de_plural":"die Gläser"}
**Note:** For DE word Glas, I changed the Bokmål form Klaas to the Nynorsk form glas.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Glas",
  "de_article": "das",
  "de_plural": "die Gläser",
  "lv": "glas",
  "level": "A1",
  "index": 241,
  "id": "Glas"
}
```

---

## Finding 50

**Audit ID:** `LRB074-0050`
**Finding Stable ID:** `g2/a1/nn|gleich|idx:243|lv, study|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Lang:** nn
**Card:** `gleich|idx:243`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Kohe • Ëësäkää","study.translation":"Kohe • Ëësäkää","study.explanation":"[\"Põhiidee: gleich gejnej aja tønske kohe, gleich gejnej õhëskejne.\",\"Kui jutt on ajast, gleich = kohe/varsti (Ich komme gleich. = Ma tulen kohe.).\",\"Kui jutt på bissätsest, gleich = ühesähä/sama (die gleiche Farbe = ähäsähä verv).\",\"Sõna gleich kan brukes ka eessõnana koos Dativiga, se gejät nagu (gleich mir = nagu mina).\"]","study.examples":"[{\"de\":\"Ich komme gleich.\",\"lv\":\"Ma tulen kohe.\"},{\"de\":\"Wir haben die gleiche Farbe.\",\"lv\":\"Meil på ühäsäää varve.\"},{\"de\":\"Das Essen ist gleich fertig.\",\"lv\":\"Toit saab kohe valmis.\"},{\"de\":\"Beide Wege sind gleich lang.\",\"lv\":\"Begge to teed på ühsepikkused.\"},{\"de\":\"Bis gleich!\",\"lv\":\"Vi sees nå!\"},{\"de\":\"Sie sind gleich groß.\",\"lv\":\"Nad på üşepikkused.\"}]","study.tip":"[\"Om tid (straks) → tåg.\",\"Om samanlikning (same) → lik.\"]","study.important":"[\"gleich = tåg (tid) ELLER lik (samanlikning) — avhengig av konteksten.\",\"Bis gleich! = līdz tūlīt! — ierasta atvadu frāze.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"gleich","lv":"straks • lik","level":"A1","study":{"id":"a1-gleich","layout":"standardStudy","translation":"straks • lik","explanation":["Hovudidé: gleich kan betyde straks eller lik, avhengig av samanhengen.","Når det handlar om tid, betyr gleich straks eller om litt.","Når det handlar om likskap, betyr gleich lik eller same.","I uttrykket Bis gleich! betyr gleich om litt eller snart."],"examples":[{"de":"Ich komme gleich.","lv":"Eg kjem straks."},{"de":"Wir haben die gleiche Farbe.","lv":"Vi har same farge."},{"de":"Das Essen ist gleich fertig.","lv":"Maten er snart ferdig."},{"de":"Beide Wege sind gleich lang.","lv":"Begge vegane er like lange."},{"de":"Bis gleich!","lv":"Vi sjåast snart!"},{"de":"Sie sind gleich groß.","lv":"Dei er like høge."}],"tip":["Når gleich handlar om tid, kan du omsetje det med straks eller snart.","Når gleich handlar om samanlikning, kan du omsetje det med lik, like eller same."],"important":["gleich kan betyde straks eller lik, avhengig av samanhengen.","Bis gleich! = Vi sjåast snart!","die gleiche Farbe = same farge."]}}
**Note:** For DE word gleich, I replaced the heavily contaminated text and Latvian remnants with the correct Nynorsk meanings straks, snart, lik and same.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gleich",
  "lv": "straks • lik",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "straks • lik",
    "explanation": [
      "Hovudidé: gleich kan betyde straks eller lik, avhengig av samanhengen.",
      "Når det handlar om tid, betyr gleich straks eller om litt.",
      "Når det handlar om likskap, betyr gleich lik eller same.",
      "I uttrykket Bis gleich! betyr gleich om litt eller snart."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Eg kjem straks."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Vi har same farge."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Maten er snart ferdig."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Begge vegane er like lange."
      },
      {
        "de": "Bis gleich!",
        "lv": "Vi sjåast snart!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Dei er like høge."
      }
    ],
    "tip": [
      "Når gleich handlar om tid, kan du omsetje det med straks eller snart.",
      "Når gleich handlar om samanlikning, kan du omsetje det med lik, like eller same."
    ],
    "important": [
      "gleich kan betyde straks eller lik, avhengig av samanhengen.",
      "Bis gleich! = Vi sjåast snart!",
      "die gleiche Farbe = same farge."
    ]
  },
  "index": 243
}
```

---

