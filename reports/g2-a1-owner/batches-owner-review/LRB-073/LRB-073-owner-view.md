# G2/A1 LRB LRB-073 — OWNER VIEW

**Batch:** LRB-073
**Rows:** 50/50
**Languages:** NL 42, NN 8
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-16T16:55:28.558Z
**Source commit:** `ed805f9c3d60b5f36e64f0d728cf32fe00da5704`
**Branch:** `cursor/lrb-073-owner-authorization-ed35`
**Overrides SHA256:** `573bf0b5765cd2ca34ffe631b90b98331ba46384255767cea9daaabc5be83cbe`
**Classification:** `LRB_073_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT`
**COPY/PASTE spec SHA-256:** `bf7aa8e132cf914e17f6df1fe75518a16d10ab8bfa24d27ad04f055528f27756`

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB073-0001`
**Finding Stable ID:** `g2/a1/nl|legen|idx:363|study.explanation, study.examples[1].lv, study.comparison[].example|UNTRANSLATED_TEXT|gpt-5.6-luna`
**Lang:** nl
**Card:** `legen|idx:363`
**Field / path:** `study.explanation, study.examples[1].lv, study.comparison[].example`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: legen betekent iets horizontaal neerleggen.\",\"Legen lieto, ja tu pats pārvieto lietu un noliec to uz galda, gultas vai citas virsmas.\",\"Dit verschilt van liegen, wat betekent dat iets al ligt of rust.\",\"Op A1-niveau is het belangrijkste verschil: legen = neerleggen, liegen = liggen.\"]","study.examples[1].lv":null,"study.comparison[].example":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"legen","lv":"Nolikt","level":"A1","study":{"id":"a1-legen","layout":"standardStudy","translation":"neerleggen","explanation":["Hoofdidee: legen betekent iets liggend of horizontaal neerleggen.","Je gebruikt legen wanneer je zelf iets verplaatst en het op een tafel, bed of ander oppervlak neerlegt.","Dit verschilt van liegen, dat betekent dat iets al ergens ligt.","Op A1-niveau is het belangrijkste verschil: legen = neerleggen, liegen = liggen."],"examples":[{"de":"Ich lege das Buch auf den Tisch.","lv":"Ik leg het boek op tafel."},{"de":"Leg den Schlüssel hierhin.","lv":"Leg de sleutel hier neer."},{"de":"Sie legt das Kind ins Bett.","lv":"Zij legt het kind in bed."},{"de":"Das Buch liegt auf dem Tisch.","lv":"Het boek ligt op tafel."}],"comparison":[{"word":"legen","meaning":"neerleggen","example":"Ik leg het boek op tafel."},{"word":"liegen","meaning":"liggen","example":"Het boek ligt op tafel."},{"word":"stellen","meaning":"rechtop zetten","example":"Ik zet de fles op tafel."},{"word":"setzen","meaning":"neerzetten / gaan zitten","example":"Ik ga zitten."}],"tip":{"text":"Onthoud: jij legt iets neer → legen; iets ligt er al → liegen."},"important":["legen en liegen zijn niet hetzelfde.","Ich lege das Buch = ik leg het boek neer. Das Buch liegt = het boek ligt."]}}
**Note:** PENDING — On nl card legen|idx:363, the cited path study.explanation, study.examples[1].lv, study.comparison[].example does not exist. For the UNTRANSLATED_TEXT claim concerning Latvian “["Galvenā doma: legen nozīmē nolikt kaut ko guļus vai horizontāli.","legen lieto, ja tu pats pārvieto lietu un noliec to uz galda, gultas vai citas virsmas.","Tas atšķiras no liegen, kas no…” / German “legen”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "legen",
  "lv": "Nolikt",
  "level": "A1",
  "study": {
    "id": "a1-legen",
    "layout": "standardStudy",
    "translation": "neerleggen",
    "explanation": [
      "Hoofdidee: legen betekent iets liggend of horizontaal neerleggen.",
      "Je gebruikt legen wanneer je zelf iets verplaatst en het op een tafel, bed of ander oppervlak neerlegt.",
      "Dit verschilt van liegen, dat betekent dat iets al ergens ligt.",
      "Op A1-niveau is het belangrijkste verschil: legen = neerleggen, liegen = liggen."
    ],
    "examples": [
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Ik leg het boek op tafel."
      },
      {
        "de": "Leg den Schlüssel hierhin.",
        "lv": "Leg de sleutel hier neer."
      },
      {
        "de": "Sie legt das Kind ins Bett.",
        "lv": "Zij legt het kind in bed."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Het boek ligt op tafel."
      }
    ],
    "comparison": [
      {
        "word": "legen",
        "meaning": "neerleggen",
        "example": "Ik leg het boek op tafel."
      },
      {
        "word": "liegen",
        "meaning": "liggen",
        "example": "Het boek ligt op tafel."
      },
      {
        "word": "stellen",
        "meaning": "rechtop zetten",
        "example": "Ik zet de fles op tafel."
      },
      {
        "word": "setzen",
        "meaning": "neerzetten / gaan zitten",
        "example": "Ik ga zitten."
      }
    ],
    "tip": {
      "text": "Onthoud: jij legt iets neer → legen; iets ligt er al → liegen."
    },
    "important": [
      "legen en liegen zijn niet hetzelfde.",
      "Ich lege das Buch = ik leg het boek neer. Das Buch liegt = het boek ligt."
    ]
  },
  "index": 363
}
```

---

## Finding 2

**Audit ID:** `LRB073-0002`
**Finding Stable ID:** `g2/a1/nl|leise|idx:368|study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nl
**Card:** `leise|idx:368`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-leise-study","layout":"standardStudy","translation":"Kluss","explanation":["Hoofdidee: Stil of zacht in volume.","Leise galvenokārt nozīmē: mazs skaļums.","Omschrijft vaak: geluid/stem/muziek.","Leise raksturo mazu skaļumu vai klusu balsi/skaņu."],"examples":[{"de":"Bitte sei leise.","lv":"Lūdzu, esi kluss."},{"de":"Bitte sei leise.","lv":"Lūdzu, esi kluss."},{"de":"Die Musik ist leise.","lv":"Mūzika ir klusa."},{"de":"Sprich bitte leise.","lv":"Lūdzu, runā klusi."}],"tip":["leise = stil","Gebruik leise als de context bij deze betekenis past."],"important":["leise = stil in termen van geluid.","leise = volume.","Stil of zacht in volume."],"sectionAccents":{"explanation":{"green":["leise"],"purple":["kluss"],"orange":["kluss"]},"examples":[{"de":{"green":["leise","leise"]},"lv":{"purple":["kluss"]}},{"de":{"green":["leise","leise"]},"lv":{"purple":["kluss"]}},{"de":{"green":["leise","leise"]},"lv":{"purple":["klusa"]}},{"de":{"green":["leise","leise"]},"lv":{"purple":["klusi"]}}],"tip":[{"purple":["kluss"]}],"important":[{"green":["leise"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"leise","lv":"Kluss","level":"A1","study":{"id":"a1-leise-study","layout":"standardStudy","translation":"stil • zacht","explanation":["Hoofdidee: stil of zacht van volume.","leise betekent vooral: met een laag volume.","Het beschrijft vaak geluid, een stem of muziek.","leise beschrijft een laag volume of een zachte stem of klank."],"examples":[{"de":"Bitte sei leise.","lv":"Wees alsjeblieft stil."},{"de":"Bitte sei leise.","lv":"Wees alsjeblieft stil."},{"de":"Die Musik ist leise.","lv":"De muziek staat zacht."},{"de":"Sprich bitte leise.","lv":"Praat alsjeblieft zacht."}],"tip":["leise = stil of zacht","Gebruik leise wanneer het om een laag volume gaat."],"important":["leise = stil of zacht wat geluid betreft.","leise gaat over volume.","Stil of zacht van volume."]}}
**Note:** PENDING — On nl card leise|idx:368, the finding spans study; the captured production value begins “{"study.translation":"Kluss","study.explanation":"[\"Hoofdidee: Stil of zacht in volume.\",\"Leise galvenokārt nozīmē: mazs skaļums.\",\"Omschrijft vaak: geluid/stem/muziek.\",\"Leise rakst…”. Review the listed subfields separately against Latvian “kluss” / German “leise” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "leise",
  "lv": "Kluss",
  "level": "A1",
  "study": {
    "id": "a1-leise-study",
    "layout": "standardStudy",
    "translation": "stil • zacht",
    "explanation": [
      "Hoofdidee: stil of zacht van volume.",
      "leise betekent vooral: met een laag volume.",
      "Het beschrijft vaak geluid, een stem of muziek.",
      "leise beschrijft een laag volume of een zachte stem of klank."
    ],
    "examples": [
      {
        "de": "Bitte sei leise.",
        "lv": "Wees alsjeblieft stil."
      },
      {
        "de": "Bitte sei leise.",
        "lv": "Wees alsjeblieft stil."
      },
      {
        "de": "Die Musik ist leise.",
        "lv": "De muziek staat zacht."
      },
      {
        "de": "Sprich bitte leise.",
        "lv": "Praat alsjeblieft zacht."
      }
    ],
    "tip": [
      "leise = stil of zacht",
      "Gebruik leise wanneer het om een laag volume gaat."
    ],
    "important": [
      "leise = stil of zacht wat geluid betreft.",
      "leise gaat over volume.",
      "Stil of zacht van volume."
    ]
  },
  "index": 368
}
```

---

## Finding 3

**Audit ID:** `LRB073-0003`
**Finding Stable ID:** `g2/a1/nl|liegen|idx:377|study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nl
**Card:** `liegen|idx:377`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-liegen","layout":"standardStudy","translation":"Atrasties • Gulēt","explanation":["Hoofdidee: liegen betekent liggen of zich bevinden in een horizontale positie.","Over een mens betekent liegen vaak liggen.","Over een ding betekent liegen dat het ergens ligt.","Dit verschilt van legen, wat betekent iets neerleggen."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Grāmata atrodas uz galda."},{"de":"Mein Handy liegt im Auto.","lv":"Mans telefons atrodas automašīnā."},{"de":"Er liegt im Bett.","lv":"Viņš guļ gultā."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Es nolieku grāmatu uz galda."}],"comparison":[{"word":"liegen","meaning":"Atrasties / gulēt","example":"Het boek ligt hier."},{"word":"legen","meaning":"Nolikt","example":"Ik leg het boek hier neer."},{"word":"stehen","meaning":"Stāvēt / atrasties stāvus","example":"De fles staat op tafel."},{"word":"sein","meaning":"Zijn","example":"Ik ben hier."}],"tip":{"text":"Atceries: lieta jau ir vietā → liegen; tu to noliec → legen."},"important":["liegen toont een staat of locatie.","legen toont een actie: iemand legt iets neer."],"sectionAccents":{"explanation":{"blue":["liegen","legen"],"purple":["atrasties","gulēt","nolikt"],"yellow":["lietu"]},"examples":[{"de":{"blue":["liegt"],"yellow":["Buch","Tisch"]},"lv":{"purple":["atrodas"],"yellow":["Grāmata","galda"]}},{"de":{"blue":["liegt"],"yellow":["Handy","Auto"]},"lv":{"purple":["atrodas"],"yellow":["telefons","automašīnā"]}},{"de":{"blue":["liegt"],"green":["Bett"]},"lv":{"purple":["guļ"],"green":["gultā"]}},{"de":{"red":["lege"],"yellow":["Buch","Tisch"]},"lv":{"red":["nolieku"],"yellow":["grāmatu","galda"]}}],"comparison":[{"word":{"green":["liegen"]},"meaning":{"purple":["atrasties","gulēt"]},"example":{"blue":["liegt"]}},{"word":{"green":["legen"]},"meaning":{"purple":["nolikt"]},"example":{"red":["lege"]}},{"word":{"green":["stehen"]},"meaning":{"purple":["stāvēt"]},"example":{"yellow":["steht"]}},{"word":{"green":["sein"]},"meaning":{"purple":["Zijn"]},"example":{"green":["bin"]}}],"tip":{"left":{"blue":["liegen"],"purple":["ir vietā"],"red":["legen","noliec"]}},"important":[{"blue":["liegen"],"purple":["stāvokli","atrašanās vietu"]},{"red":["legen"],"purple":["darbību","noliek"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"liegen","lv":"Atrasties • Gulēt","level":"A1","study":{"id":"a1-liegen","layout":"standardStudy","translation":"liggen • zich bevinden","explanation":["Hoofdidee: liegen betekent horizontaal liggen of zich bevinden.","Bij een persoon betekent liegen vaak liggen.","Bij een voorwerp betekent liegen dat het ergens ligt.","Dit verschilt van legen, dat betekent iets neerleggen."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Het boek ligt op tafel."},{"de":"Mein Handy liegt im Auto.","lv":"Mijn telefoon ligt in de auto."},{"de":"Er liegt im Bett.","lv":"Hij ligt in bed."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Ik leg het boek op tafel."}],"comparison":[{"word":"liegen","meaning":"liggen / zich bevinden","example":"Het boek ligt hier."},{"word":"legen","meaning":"neerleggen","example":"Ik leg het boek hier neer."},{"word":"stehen","meaning":"staan / rechtop staan","example":"De fles staat op tafel."},{"word":"sein","meaning":"zijn","example":"Ik ben hier."}],"tip":{"text":"Onthoud: iets ligt er al → liegen; jij legt het neer → legen."},"important":["liegen toont een staat of locatie.","legen toont een actie: iemand legt iets neer."]}}
**Note:** PENDING — On nl card liegen|idx:377, the finding spans study; the captured production value begins “{"study.translation":"Atrasties • Gulēt","study.explanation":"[\"Hoofdidee: liegen betekent liggen of zich bevinden in een horizontale positie.\",\"Over een mens betekent liegen vaak liggen…”. Review the listed subfields separately against Latvian “atrasties • gulēt” / German “liegen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "Atrasties • Gulēt",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "liggen • zich bevinden",
    "explanation": [
      "Hoofdidee: liegen betekent horizontaal liggen of zich bevinden.",
      "Bij een persoon betekent liegen vaak liggen.",
      "Bij een voorwerp betekent liegen dat het ergens ligt.",
      "Dit verschilt van legen, dat betekent iets neerleggen."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Het boek ligt op tafel."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Mijn telefoon ligt in de auto."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Hij ligt in bed."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Ik leg het boek op tafel."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "liggen / zich bevinden",
        "example": "Het boek ligt hier."
      },
      {
        "word": "legen",
        "meaning": "neerleggen",
        "example": "Ik leg het boek hier neer."
      },
      {
        "word": "stehen",
        "meaning": "staan / rechtop staan",
        "example": "De fles staat op tafel."
      },
      {
        "word": "sein",
        "meaning": "zijn",
        "example": "Ik ben hier."
      }
    ],
    "tip": {
      "text": "Onthoud: iets ligt er al → liegen; jij legt het neer → legen."
    },
    "important": [
      "liegen toont een staat of locatie.",
      "legen toont een actie: iemand legt iets neer."
    ]
  },
  "index": 377
}
```

---

## Finding 4

**Audit ID:** `LRB073-0004`
**Finding Stable ID:** `g2/a1/nl|links|a1.card.links.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nl
**Card:** `links`
**Field / path:** `a1.card.links.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Pa kreisi • Kreisais
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"links","lv":"links • linker","level":"A1"}
**Note:** PENDING — On nl card links, a1.card.links.native currently reads “Pa kreisi • Kreisais” for Latvian “pa kreisi • kreisais” / German “links”. Select the exact nl sense or approved alternatives for this specific card before owner_new is entered.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "links",
  "lv": "links • linker",
  "level": "A1",
  "index": 380
}
```

---

## Finding 5

**Audit ID:** `LRB073-0005`
**Finding Stable ID:** `g2/a1/nl|machen|idx:386|study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nl
**Card:** `machen|idx:386`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-machen","layout":"standardStudy","translation":"Darīt • Taisīt","explanation":["Hoofdidee: machen is een erg veel voorkomend woord dat doen of maken betekent.","Als het over een actie gaat in het algemeen, vertaal je het als doen.","Als je iets vormt of bereidt, vertaal je het als maken of bereiden.","In veel uitdrukkingen vertaal je machen natuurlijk naar het Nederlands, niet letterlijk."],"examples":[{"de":"Was machst du?","lv":"Ko tu dari?"},{"de":"Ich mache Hausaufgaben.","lv":"Es pildu mājasdarbus."},{"de":"Wir machen Pizza.","lv":"Mēs taisām picu."},{"de":"Das macht Spaß.","lv":"Tas ir jautri."}],"tip":{"text":"Atceries: Was machst du? = Ko tu dari?"},"important":["machen is een erg breed woord, maar in het Nederlands moet je het vaak natuurlijk naar de situatie vertalen.","Das macht Spaß betekent 'dat is leuk', niet letterlijk 'dat maakt plezier'."],"sectionAccents":{"explanation":{"blue":["machen"],"purple":["darīt","taisīt","pagatavot"],"green":["darbību","frāzēs"]},"examples":[{"de":{"blue":["machst"]},"lv":{"purple":["dari"]}},{"de":{"blue":["mache"],"yellow":["Hausaufgaben"]},"lv":{"purple":["pildu"],"yellow":["mājasdarbus"]}},{"de":{"blue":["machen"],"yellow":["Pizza"]},"lv":{"purple":["taisām"],"yellow":["picu"]}},{"de":{"blue":["macht Spaß"]},"lv":{"purple":["ir jautri"]}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{"blue":["Was machst du"],"purple":["ko tu dari"]}},"important":[{"blue":["machen"],"purple":["dabiski"]},{"blue":["Das macht Spaß"],"purple":["tas ir jautri"],"red":["taisa prieku"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"machen","lv":"Darīt • Taisīt","level":"A1","study":{"id":"a1-machen","layout":"standardStudy","translation":"doen • maken","explanation":["Hoofdidee: machen is een erg veel voorkomend woord dat doen of maken betekent.","Als het over een actie gaat in het algemeen, vertaal je het als doen.","Als je iets vormt of bereidt, vertaal je het als maken of bereiden.","In veel uitdrukkingen vertaal je machen natuurlijk naar het Nederlands, niet letterlijk."],"examples":[{"de":"Was machst du?","lv":"Wat doe je?"},{"de":"Ich mache Hausaufgaben.","lv":"Ik maak mijn huiswerk."},{"de":"Wir machen Pizza.","lv":"Wij maken pizza."},{"de":"Das macht Spaß.","lv":"Dat is leuk."}],"tip":{"text":"Onthoud: Was machst du? = Wat doe je?"},"important":["machen is een erg breed woord, maar in het Nederlands moet je het vaak natuurlijk naar de situatie vertalen.","Das macht Spaß betekent 'dat is leuk', niet letterlijk 'dat maakt plezier'."]}}
**Note:** PENDING — On nl card machen|idx:386, the finding spans study; the captured production value begins “{"study.translation":"Darīt • Taisīt","study.explanation":"[\"Hoofdidee: machen is een erg veel voorkomend woord dat doen of maken betekent.\",\"Als het over een actie gaat in het algemeen,…”. Review the listed subfields separately against Latvian “darīt • taisīt” / German “machen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "Darīt • Taisīt",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "doen • maken",
    "explanation": [
      "Hoofdidee: machen is een erg veel voorkomend woord dat doen of maken betekent.",
      "Als het over een actie gaat in het algemeen, vertaal je het als doen.",
      "Als je iets vormt of bereidt, vertaal je het als maken of bereiden.",
      "In veel uitdrukkingen vertaal je machen natuurlijk naar het Nederlands, niet letterlijk."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Wat doe je?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Ik maak mijn huiswerk."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Wij maken pizza."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Dat is leuk."
      }
    ],
    "tip": {
      "text": "Onthoud: Was machst du? = Wat doe je?"
    },
    "important": [
      "machen is een erg breed woord, maar in het Nederlands moet je het vaak natuurlijk naar de situatie vertalen.",
      "Das macht Spaß betekent 'dat is leuk', niet letterlijk 'dat maakt plezier'."
    ]
  },
  "index": 386
}
```

---

## Finding 6

**Audit ID:** `LRB073-0006`
**Finding Stable ID:** `g2/a1/nl|Mal|idx:390|study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** nl
**Card:** `Mal|idx:390`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-mal","layout":"standardStudy","translation":"Reize","explanation":["Hoofdidee: das Mal betekent een keer als een gelegenheid of case.","Je gebruikt het vaak met getallen: ein Mal, zwei Mal, drei Mal.","Met ordinaalgetallen: das erste Mal, das zweite Mal.","Verwar het niet met de conversatie-deeltje mal (Komm mal her!) — dat heeft een andere betekenis."],"examples":[{"de":"Das erste Mal war schwer.","lv":"Pirmo reizi bija grūti."},{"de":"Ich war schon zwei Mal in Berlin.","lv":"Es jau divreiz biju Berlīnē."},{"de":"Ein Mal reicht.","lv":"Vienreiz pietiek."},{"de":"Noch ein Mal, bitte!","lv":"Vēl vienu reizi, lūdzu!"}],"tip":{"text":"Atceries: das Mal = reize (lietvārds); mal bez artikula = sarunvalodas daļiņa."},"important":["das Mal / die Male — zelfstandig naamwoord met artikel.","ein Mal, zwei Mal — het aantal keren.","mal zonder artikel (Komm mal her!) is niet hetzelfde als das Mal."],"sectionAccents":{"explanation":{"blue":["das Mal","ein Mal","zwei Mal","das erste Mal"],"purple":["reizi","notikumu","gadījumu"]},"examples":[{"de":{"blue":["erste Mal"]},"lv":{"purple":["pirmo reizi"]}},{"de":{"blue":["zwei Mal"]},"lv":{"purple":["divreiz"]}},{"de":{"blue":["Ein Mal"]},"lv":{"purple":["vienreiz"]}},{"de":{"blue":["ein Mal"]},"lv":{"purple":["reizi"]}}],"tip":{"blue":["das Mal","mal"],"purple":["lietvārds","daļiņa"]},"important":[{"blue":["das Mal","die Male"]},{"blue":["ein Mal","zwei Mal"],"purple":["reizes"]},{"blue":["mal"],"purple":["das Mal"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Mal","lv":"Reize","level":"A1","de_article":"das","de_plural":"die Male","study":{"id":"a1-mal","layout":"standardStudy","translation":"keer","explanation":["Hoofdidee: das Mal betekent een keer als gelegenheid of geval.","Je gebruikt het vaak met telwoorden: ein Mal, zwei Mal, drei Mal.","Met rangtelwoorden: das erste Mal, das zweite Mal.","Verwar het niet met het gespreksdeeltje mal in Komm mal her!; dat heeft een andere functie."],"examples":[{"de":"Das erste Mal war schwer.","lv":"De eerste keer was moeilijk."},{"de":"Ich war schon zwei Mal in Berlin.","lv":"Ik ben al twee keer in Berlijn geweest."},{"de":"Ein Mal reicht.","lv":"Eén keer is genoeg."},{"de":"Noch ein Mal, bitte!","lv":"Nog één keer, alsjeblieft!"}],"tip":{"text":"Onthoud: das Mal = keer (zelfstandig naamwoord); mal zonder lidwoord = gespreksdeeltje."},"important":["das Mal / die Male — zelfstandig naamwoord met artikel.","ein Mal, zwei Mal — het aantal keren.","mal zonder artikel (Komm mal her!) is niet hetzelfde als das Mal."]}}
**Note:** PENDING — On nl card Mal|idx:390, the finding spans study; the captured production value begins “{"study.translation":"Reize","study.explanation":"[\"Hoofdidee: das Mal betekent een keer als een gelegenheid of case.\",\"Je gebruikt het vaak met getallen: ein Mal, zwei Mal, drei Mal.\",…”. Review the listed subfields separately against Latvian “reize” / German “Mal” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mal",
  "de_article": "das",
  "de_plural": "die Male",
  "lv": "Reize",
  "level": "A1",
  "study": {
    "id": "a1-mal",
    "layout": "standardStudy",
    "translation": "keer",
    "explanation": [
      "Hoofdidee: das Mal betekent een keer als gelegenheid of geval.",
      "Je gebruikt het vaak met telwoorden: ein Mal, zwei Mal, drei Mal.",
      "Met rangtelwoorden: das erste Mal, das zweite Mal.",
      "Verwar het niet met het gespreksdeeltje mal in Komm mal her!; dat heeft een andere functie."
    ],
    "examples": [
      {
        "de": "Das erste Mal war schwer.",
        "lv": "De eerste keer was moeilijk."
      },
      {
        "de": "Ich war schon zwei Mal in Berlin.",
        "lv": "Ik ben al twee keer in Berlijn geweest."
      },
      {
        "de": "Ein Mal reicht.",
        "lv": "Eén keer is genoeg."
      },
      {
        "de": "Noch ein Mal, bitte!",
        "lv": "Nog één keer, alsjeblieft!"
      }
    ],
    "tip": {
      "text": "Onthoud: das Mal = keer (zelfstandig naamwoord); mal zonder lidwoord = gespreksdeeltje."
    },
    "important": [
      "das Mal / die Male — zelfstandig naamwoord met artikel.",
      "ein Mal, zwei Mal — het aantal keren.",
      "mal zonder artikel (Komm mal her!) is niet hetzelfde als das Mal."
    ]
  },
  "index": 390
}
```

---

## Finding 7

**Audit ID:** `LRB073-0007`
**Finding Stable ID:** `g2/a1/nl|malen|a1.card.malen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nl
**Card:** `malen`
**Field / path:** `a1.card.malen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Gleznot • Krāsot
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"malen","lv":"schilderen • kleuren","level":"A1"}
**Note:** PENDING — On nl card malen, a1.card.malen.native currently reads “Gleznot • Krāsot” for Latvian “gleznot • krāsot” / German “malen”. Select the exact nl sense or approved alternatives for this specific card before owner_new is entered.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "malen",
  "lv": "schilderen • kleuren",
  "level": "A1",
  "index": 391
}
```

---

## Finding 8

**Audit ID:** `LRB073-0008`
**Finding Stable ID:** `g2/a1/nl|mögen|idx:413|study.examples[0].lv|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** nl
**Card:** `mögen|idx:413`
**Field / path:** `study.examples[0].lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"mögen","lv":"Patikt","level":"A1","study":{"id":"a1-mögen","layout":"standardStudy","translation":"Patikt","explanation":["Hoofdidee: mögen betekent meestal dat iets je bevalt.","Ich mag... is in het Nederlands meestal 'ik hou van...' of 'ik vind... lekker'.","Möchte ir cita forma, ko lieto pieklājīgai vēlmei: es gribētu.","Op A1-niveau is de belangrijkste uitdrukking Ich mag das."],"examples":[{"de":"Ich mag Musik.","lv":"Ik hou van muziek."},{"de":"Magst du Kaffee?","lv":"Vai tev garšo kafija?"},{"de":"Sie mag Kinder.","lv":"Viņai patīk bērni."},{"de":"Ich möchte einen Kaffee.","lv":"Es gribētu kafiju."}],"comparison":[{"word":"mögen","meaning":"Patikt","example":"Ik hou van muziek."},{"word":"möchte","meaning":"Gribētu","example":"Ik wil koffie."},{"word":"wollen","meaning":"Gribēt","example":"Ik wil naar huis."},{"word":"lieben","meaning":"Mīlēt","example":"Ik hou van je."}],"tip":{"text":"Atceries: Ich mag... = man patīk..."},"important":["mögen is niet het voornaamste woord voor beleefd 'ik wil'. Daarvoor gebruik je meestal möchte.","Ich mag Kaffee betekent 'ik hou van koffie/ik vind koffie lekker'."]}}
**Note:** PENDING — On nl card mögen|idx:413, the cited path study.examples[0].lv does not exist. For the WRONG_LANGUAGE claim concerning Latvian “patikt” / German “mögen”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "mögen",
  "lv": "Patikt",
  "level": "A1",
  "study": {
    "id": "a1-mögen",
    "layout": "standardStudy",
    "translation": "Patikt",
    "explanation": [
      "Hoofdidee: mögen betekent meestal dat iets je bevalt.",
      "Ich mag... is in het Nederlands meestal 'ik hou van...' of 'ik vind... lekker'.",
      "Möchte ir cita forma, ko lieto pieklājīgai vēlmei: es gribētu.",
      "Op A1-niveau is de belangrijkste uitdrukking Ich mag das."
    ],
    "examples": [
      {
        "de": "Ich mag Musik.",
        "lv": "Ik hou van muziek."
      },
      {
        "de": "Magst du Kaffee?",
        "lv": "Vai tev garšo kafija?"
      },
      {
        "de": "Sie mag Kinder.",
        "lv": "Viņai patīk bērni."
      },
      {
        "de": "Ich möchte einen Kaffee.",
        "lv": "Es gribētu kafiju."
      }
    ],
    "comparison": [
      {
        "word": "mögen",
        "meaning": "Patikt",
        "example": "Ik hou van muziek."
      },
      {
        "word": "möchte",
        "meaning": "Gribētu",
        "example": "Ik wil koffie."
      },
      {
        "word": "wollen",
        "meaning": "Gribēt",
        "example": "Ik wil naar huis."
      },
      {
        "word": "lieben",
        "meaning": "Mīlēt",
        "example": "Ik hou van je."
      }
    ],
    "tip": {
      "text": "Atceries: Ich mag... = man patīk..."
    },
    "important": [
      "mögen is niet het voornaamste woord voor beleefd 'ik wil'. Daarvoor gebruik je meestal möchte.",
      "Ich mag Kaffee betekent 'ik hou van koffie/ik vind koffie lekker'."
    ]
  },
  "index": 413
}
```

---

## Finding 9

**Audit ID:** `LRB073-0009`
**Finding Stable ID:** `g2/a1/nl|nach|idx:426|study.examples[1].lv|UNTRANSLATED|gpt-5.6-luna`
**Lang:** nl
**Card:** `nach|idx:426`
**Field / path:** `study.examples[1].lv`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"nach","lv":"Uz • Pēc","level":"A1","study":{"id":"a1-nach","layout":"standardStudy","translation":"Uz • Pēc","explanation":["Hoofdidee: nach betekent naar voor plaatsen en na voor tijd of volgorde.","Met steden en landen zonder artikel betekent nach vaak naar.","Met tijd betekent nach na.","In de uitdrukking nach Hause betekent het naar huis."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Es braucu uz Berlīni."},{"de":"Wir gehen nach Hause.","lv":"Wij gaan naar huis."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Pēc ēšanas mēs ejam pastaigāties."},{"de":"Es ist zehn nach acht.","lv":"Ir desmit pāri astoņiem."}],"comparison":[{"word":"nach","meaning":"Uz / pēc","example":"Ik rij naar Berlijn."},{"word":"zu","meaning":"Uz / pie","example":"Ik ga naar de dokter."},{"word":"in","meaning":"Iekšā / uz vietu ar artikulu","example":"Ik ga naar school."},{"word":"vor","meaning":"Pirms / priekšā","example":"Vóór het eten was ik mijn handen."}],"tip":{"text":"Atceries: nach Hause; nach Berlin; pēc ēšanas."},"important":["nach gebruik je niet met alle plaatsen.","Naar school is meestal in die Schule, niet nach Schule."]}}
**Note:** PENDING — On nl card nach|idx:426, the cited path study.examples[1].lv does not exist. For the UNTRANSLATED claim concerning Latvian “uz • pēc” / German “nach”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nach",
  "lv": "Uz • Pēc",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "Uz • Pēc",
    "explanation": [
      "Hoofdidee: nach betekent naar voor plaatsen en na voor tijd of volgorde.",
      "Met steden en landen zonder artikel betekent nach vaak naar.",
      "Met tijd betekent nach na.",
      "In de uitdrukking nach Hause betekent het naar huis."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Es braucu uz Berlīni."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Wij gaan naar huis."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pēc ēšanas mēs ejam pastaigāties."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Ir desmit pāri astoņiem."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "Uz / pēc",
        "example": "Ik rij naar Berlijn."
      },
      {
        "word": "zu",
        "meaning": "Uz / pie",
        "example": "Ik ga naar de dokter."
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz vietu ar artikulu",
        "example": "Ik ga naar school."
      },
      {
        "word": "vor",
        "meaning": "Pirms / priekšā",
        "example": "Vóór het eten was ik mijn handen."
      }
    ],
    "tip": {
      "text": "Atceries: nach Hause; nach Berlin; pēc ēšanas."
    },
    "important": [
      "nach gebruik je niet met alle plaatsen.",
      "Naar school is meestal in die Schule, niet nach Schule."
    ]
  },
  "index": 426
}
```

---

## Finding 10

**Audit ID:** `LRB073-0010`
**Finding Stable ID:** `g2/a1/nl|noch mal|idx:701|study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `noch mal|idx:701`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-noch-mal","layout":"standardStudy","translation":"Vēlreiz","explanation":["Hoofdidee: Het betekent nogmaals — een actie herhalen of om herhaling vragen."],"examples":[{"de":"Noch mal, bitte.","lv":"Vēlreiz, lūdzu."},{"de":"Noch mal, bitte.","lv":"Vēlreiz, lūdzu."},{"de":"Sag das noch mal.","lv":"Pasaki to vēlreiz."}],"tip":["Gebruik noch mal als de context bij deze betekenis past.","Gebruik noch mal als de context bij deze betekenis past."],"important":["Het betekent nogmaals — een actie herhalen of om herhaling vragen.","noch mal: controleer de context voordat je het gebruikt."],"sectionAccents":{"explanation":{"purple":["vēlreiz"]},"examples":[{"de":{"yellow":["noch mal","noch mal"]},"lv":{"purple":["vēlreiz"]}},{"de":{"yellow":["noch mal","noch mal"]},"lv":{"purple":["vēlreiz"]}},{"de":{"yellow":["noch mal","noch mal"]},"lv":{"purple":["vēlreiz"]}}],"tip":[{}],"important":[{}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"noch mal","lv":"Vēlreiz","level":"A1","study":{"id":"a1-noch-mal","layout":"standardStudy","translation":"nog eens • opnieuw","explanation":["Hoofdidee: Het betekent nogmaals — een actie herhalen of om herhaling vragen."],"examples":[{"de":"Noch mal, bitte.","lv":"Nog eens, alstublieft."},{"de":"Noch mal, bitte.","lv":"Nog eens, alstublieft."},{"de":"Sag das noch mal.","lv":"Zeg dat nog eens."}],"tip":["Gebruik noch mal als de context bij deze betekenis past.","Gebruik noch mal als de context bij deze betekenis past."],"important":["Het betekent nogmaals — een actie herhalen of om herhaling vragen.","noch mal: controleer de context voordat je het gebruikt."]}}
**Note:** PENDING — On nl card noch mal|idx:701, the finding spans study; the captured production value begins “{"study.translation":"Vēlreiz","study.explanation":"[\"Hoofdidee: Het betekent nogmaals — een actie herhalen of om herhaling vragen.\"]","study.examples":"[{\"de\":\"Noch mal, bitte.\",\"lv…”. Review the listed subfields separately against Latvian “vēlreiz” / German “noch mal” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "noch mal",
  "lv": "Vēlreiz",
  "level": "A1",
  "study": {
    "id": "a1-noch-mal",
    "layout": "standardStudy",
    "translation": "nog eens • opnieuw",
    "explanation": [
      "Hoofdidee: Het betekent nogmaals — een actie herhalen of om herhaling vragen."
    ],
    "examples": [
      {
        "de": "Noch mal, bitte.",
        "lv": "Nog eens, alstublieft."
      },
      {
        "de": "Noch mal, bitte.",
        "lv": "Nog eens, alstublieft."
      },
      {
        "de": "Sag das noch mal.",
        "lv": "Zeg dat nog eens."
      }
    ],
    "tip": [
      "Gebruik noch mal als de context bij deze betekenis past.",
      "Gebruik noch mal als de context bij deze betekenis past."
    ],
    "important": [
      "Het betekent nogmaals — een actie herhalen of om herhaling vragen.",
      "noch mal: controleer de context voordat je het gebruikt."
    ]
  },
  "index": 701
}
```

---

## Finding 11

**Audit ID:** `LRB073-0011`
**Finding Stable ID:** `g2/a1/nl|noch|idx:451|study.examples[0].lv; study.explanation; study.tip; study.important|LANGUAGE_MIXUP|gpt-5.6-luna`
**Lang:** nl
**Card:** `noch|idx:451`
**Field / path:** `study.examples[0].lv; study.explanation; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples[0].lv":null,"study.explanation":"[\"Hoofdidee: Iets gaat nog steeds door of is nog niet afgelopen.\",\"Noch galvenokārt nozīmē: kaut kas joprojām turpinās.\",\"Vaak gekenmerkt door: continuatie of onvoltooide toestand.\",\"Noch nozīmē vēl: kaut kas joprojām turpinās vai vēl nav beidzies.\"]","study.tip":"[\"Iets gaat nog steeds door of is nog niet afgelopen.\",\"Gebruik noch als de context bij deze betekenis past.\"]","study.important":"[\"noch = nog.\",\"Iets gaat nog steeds door of is nog niet afgelopen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"noch","lv":"Vēl","level":"A1","study":{"id":"a1-noch-study","layout":"standardStudy","translation":"Vēl","explanation":["Hoofdidee: iets gaat nog door of is nog niet afgelopen.","noch betekent vooral dat iets nog steeds doorgaat.","Het beschrijft vaak voortduring of een onvoltooide toestand.","noch betekent nog: iets gaat nog steeds door of is nog niet afgelopen."],"examples":[{"de":"Ich bin noch zu Hause.","lv":"Ik werk nog."},{"de":"Ich bin noch zu Hause.","lv":"Es vēl esmu mājās."},{"de":"Bist du noch da?","lv":"Vai tu vēl esi šeit?"}],"tip":["Iets gaat nog steeds door of is nog niet afgelopen.","Gebruik noch wanneer iets voortduurt."],"important":["noch = nog.","Iets gaat nog steeds door of is nog niet afgelopen."]}}
**Note:** PENDING — On nl card noch|idx:451, the cited path study.examples[0].lv; study.explanation; study.tip; study.important does not exist. For the LANGUAGE_MIXUP claim concerning Latvian “vēl” / German “noch”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "noch",
  "lv": "Vēl",
  "level": "A1",
  "study": {
    "id": "a1-noch-study",
    "layout": "standardStudy",
    "translation": "Vēl",
    "explanation": [
      "Hoofdidee: iets gaat nog door of is nog niet afgelopen.",
      "noch betekent vooral dat iets nog steeds doorgaat.",
      "Het beschrijft vaak voortduring of een onvoltooide toestand.",
      "noch betekent nog: iets gaat nog steeds door of is nog niet afgelopen."
    ],
    "examples": [
      {
        "de": "Ich bin noch zu Hause.",
        "lv": "Ik werk nog."
      },
      {
        "de": "Ich bin noch zu Hause.",
        "lv": "Es vēl esmu mājās."
      },
      {
        "de": "Bist du noch da?",
        "lv": "Vai tu vēl esi šeit?"
      }
    ],
    "tip": [
      "Iets gaat nog steeds door of is nog niet afgelopen.",
      "Gebruik noch wanneer iets voortduurt."
    ],
    "important": [
      "noch = nog.",
      "Iets gaat nog steeds door of is nog niet afgelopen."
    ]
  },
  "index": 451
}
```

---

## Finding 12

**Audit ID:** `LRB073-0012`
**Finding Stable ID:** `g2/a1/nl|nur|idx:456|study.explanation; study.tip; study.important|LANGUAGE_MIXUP|gpt-5.6-luna`
**Lang:** nl
**Card:** `nur|idx:456`
**Field / path:** `study.explanation; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: Beperkt de hoeveelheid, aantal mensen, keuze of mogelijkheden.\",\"Nur galvenokārt nozīmē: ierobežots daudzums vai izvēle.\",\"Vaak gekenmerkt door: hoeveel, wat precies of wie alleen.\",\"Nur nozīmē tikai, vienīgi, nekas vairāk: tas ierobežo daudzumu vai izvēli.\"]","study.tip":"[\"Beperkt de hoeveelheid, aantal mensen, keuze of mogelijkheden.\",\"Gebruik nur als de context bij deze betekenis past.\"]","study.important":"[\"Het Nederlands 'alleen' is in het Duits niet altijd nur.\",\"nur = alleen / enkel.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"nur","lv":"Tikai • Vienīgi","level":"A1","study":{"id":"a1-nur-study","layout":"standardStudy","translation":"Tikai • Vienīgi","explanation":["Hoofdidee: beperkt de hoeveelheid, het aantal mensen, de keuze of de mogelijkheden.","nur betekent vooral: een beperkte hoeveelheid of keuze.","Het geeft vaak aan hoeveel, wat precies of wie alleen.","nur betekent alleen of slechts, niets meer: het beperkt de hoeveelheid of keuze."],"examples":[{"de":"Ich habe nur zehn Euro.","lv":"Man ir tikai desmit eiro."},{"de":"Ich habe nur zehn Euro.","lv":"Man ir tikai desmit eiro."},{"de":"Nur du kannst mir helfen.","lv":"Tikai tu vari man palīdzēt."},{"de":"Ich möchte nur Kaffee.","lv":"Es gribu tikai kafiju."},{"de":"Ich habe nur acht Euro.","lv":"Man ir tikai astoņi eiro."}],"tip":["Het beperkt de hoeveelheid, het aantal mensen, de keuze of de mogelijkheden.","Gebruik nur wanneer je iets beperkt tot alleen datgene."],"important":["Het Nederlandse alleen is in het Duits niet altijd nur.","nur = alleen / slechts."]}}
**Note:** PENDING — On nl card nur|idx:456, the finding spans study.explanation; study.tip; study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: Beperkt de hoeveelheid, aantal mensen, keuze of mogelijkheden.\",\"Nur galvenokārt nozīmē: ierobežots daudzums vai izvēle.\",\"Vaak gekenmerkt door: hoev…”. Review the listed subfields separately against Latvian “tikai • vienīgi” / German “nur” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nur",
  "lv": "Tikai • Vienīgi",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "Tikai • Vienīgi",
    "explanation": [
      "Hoofdidee: beperkt de hoeveelheid, het aantal mensen, de keuze of de mogelijkheden.",
      "nur betekent vooral: een beperkte hoeveelheid of keuze.",
      "Het geeft vaak aan hoeveel, wat precies of wie alleen.",
      "nur betekent alleen of slechts, niets meer: het beperkt de hoeveelheid of keuze."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Man ir tikai desmit eiro."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Man ir tikai desmit eiro."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "Tikai tu vari man palīdzēt."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "Es gribu tikai kafiju."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Man ir tikai astoņi eiro."
      }
    ],
    "tip": [
      "Het beperkt de hoeveelheid, het aantal mensen, de keuze of de mogelijkheden.",
      "Gebruik nur wanneer je iets beperkt tot alleen datgene."
    ],
    "important": [
      "Het Nederlandse alleen is in het Duits niet altijd nur.",
      "nur = alleen / slechts."
    ]
  },
  "index": 456
}
```

---

## Finding 13

**Audit ID:** `LRB073-0013`
**Finding Stable ID:** `g2/a1/nl|ob|idx:457|lv; study.explanation; study.comparison; study.important|LANGUAGE_MIXUP|gpt-5.6-luna`
**Lang:** nl
**Card:** `ob|idx:457`
**Field / path:** `lv; study.explanation; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Of","study.explanation":"[\"Hoofdidee: ob leidt een indirecte vraag in en betekent in het Nederlands meestal of.\",\"Ob lieto pēc vārdiem kā fragen, wissen, sehen, sagen, ja nav tieša jautājuma.\",\"In een directe vraag gebruik je ob in het Duits meestal niet.\",\"Op A1-niveau is het belangrijk om ob van oder te onderscheiden.\"]","study.comparison":"[{\"word\":\"ob\",\"meaning\":\"Vai netiešā jautājumā\",\"example\":\"Ik weet niet of hij komt.\"},{\"word\":\"oder\",\"meaning\":\"Vai izvēlē starp variantiem\",\"example\":\"Koffie of thee?\"},{\"word\":\"wenn\",\"meaning\":\"Ja / kad\",\"example\":\"Als je tijd hebt...\"},{\"word\":\"dass\",\"meaning\":\"Ka\",\"example\":\"Ik weet dat hij komt.\"}]","study.important":"[\"ob is niet de normale 'of'-vorm tussen twee dingen.\",\"Kaffee oder Tee? gebruikt oder, niet ob.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ob","lv":"of","level":"A1","study":{"id":"a1-ob","layout":"standardStudy","translation":"Of","explanation":["Hoofdidee: ob leidt een indirecte vraag in en betekent in het Nederlands meestal of.","Je gebruikt ob na werkwoorden als fragen, wissen, sehen en sagen wanneer er geen directe vraag is.","In een directe vraag gebruik je ob in het Duits meestal niet.","Op A1-niveau is het belangrijk ob van oder te onderscheiden."],"examples":[{"de":"Ich weiß nicht, ob er kommt.","lv":"Es nezinu, vai viņš nāks."},{"de":"Sie fragt, ob du Zeit hast.","lv":"Viņa jautā, vai tev ir laiks."},{"de":"Sag mir, ob das stimmt.","lv":"Pasaki man, vai tā ir taisnība."},{"de":"Kommst du heute oder morgen?","lv":"Vai tu nāksi šodien vai rīt?"}],"comparison":[{"word":"ob","meaning":"of in een indirecte vraag","example":"Ik weet niet of hij komt."},{"word":"oder","meaning":"of bij een keuze","example":"Koffie of thee?"},{"word":"wenn","meaning":"als / wanneer","example":"Als je tijd hebt..."},{"word":"dass","meaning":"dat","example":"Ik weet dat hij komt."}],"tip":{"text":"Atceries: nezinu, vai... → ob; kafija vai tēja → oder."},"important":["ob is niet de normale 'of'-vorm tussen twee dingen.","Kaffee oder Tee? gebruikt oder, niet ob."]}}
**Note:** PENDING — On nl card ob|idx:457, the finding spans lv; study.explanation; study.comparison; study.important; the captured production value begins “{"lv":"Of","study.explanation":"[\"Hoofdidee: ob leidt een indirecte vraag in en betekent in het Nederlands meestal of.\",\"Ob lieto pēc vārdiem kā fragen, wissen, sehen, sagen, ja nav tieš…”. Review the listed subfields separately against Latvian “vai” / German “ob” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ob",
  "lv": "of",
  "level": "A1",
  "study": {
    "id": "a1-ob",
    "layout": "standardStudy",
    "translation": "Of",
    "explanation": [
      "Hoofdidee: ob leidt een indirecte vraag in en betekent in het Nederlands meestal of.",
      "Je gebruikt ob na werkwoorden als fragen, wissen, sehen en sagen wanneer er geen directe vraag is.",
      "In een directe vraag gebruik je ob in het Duits meestal niet.",
      "Op A1-niveau is het belangrijk ob van oder te onderscheiden."
    ],
    "examples": [
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Es nezinu, vai viņš nāks."
      },
      {
        "de": "Sie fragt, ob du Zeit hast.",
        "lv": "Viņa jautā, vai tev ir laiks."
      },
      {
        "de": "Sag mir, ob das stimmt.",
        "lv": "Pasaki man, vai tā ir taisnība."
      },
      {
        "de": "Kommst du heute oder morgen?",
        "lv": "Vai tu nāksi šodien vai rīt?"
      }
    ],
    "comparison": [
      {
        "word": "ob",
        "meaning": "of in een indirecte vraag",
        "example": "Ik weet niet of hij komt."
      },
      {
        "word": "oder",
        "meaning": "of bij een keuze",
        "example": "Koffie of thee?"
      },
      {
        "word": "wenn",
        "meaning": "als / wanneer",
        "example": "Als je tijd hebt..."
      },
      {
        "word": "dass",
        "meaning": "dat",
        "example": "Ik weet dat hij komt."
      }
    ],
    "tip": {
      "text": "Atceries: nezinu, vai... → ob; kafija vai tēja → oder."
    },
    "important": [
      "ob is niet de normale 'of'-vorm tussen twee dingen.",
      "Kaffee oder Tee? gebruikt oder, niet ob."
    ]
  },
  "index": 457
}
```

---

## Finding 14

**Audit ID:** `LRB073-0014`
**Finding Stable ID:** `g2/a1/nl|Obst|idx:693|lv; study.explanation; study.examples[4].lv|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `Obst|idx:693`
**Field / path:** `lv; study.explanation; study.examples[4].lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vruchten","study.explanation":"[\"Hoofdidee: Fruit in het algemeen. In het Duits is er geen meervoudsvorm *die Obsts.\",\"Das Obst galvenokārt nozīmē: augļi kopumā.\",\"Vaak gekenmerkt door: geen geslachtsverschil (alleen enkelvoud).\"]","study.examples[4].lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Obst","lv":"fruit","level":"A1","de_article":"das","study":{"id":"a1-obst","layout":"standardStudy","translation":"Vruchten","explanation":["Hoofdidee: fruit in het algemeen. In het Duits is er geen meervoudsvorm *die Obsts.","das Obst betekent vooral fruit in het algemeen.","Het wordt alleen in het enkelvoud gebruikt."],"examples":[{"de":"Wir essen viel Obst.","lv":"Mēs ēdam daudz augļu."},{"de":"Wir essen viel Obst.","lv":"Mēs ēdam daudz augļu."},{"de":"Obst ist gesund.","lv":"Augļi ir veselīgi."},{"de":"Ich mag Obst und Gemüse.","lv":"Man patīk augļi un dārzeņi."},{"de":"Wir essen Obst.","lv":"Wij eten fruit."}],"tip":["das Obst = fruit","Gebruik das Obst als de context bij deze betekenis past."],"important":["Verkeerd: die Obsts → Juist: das Obst","das Obst = fruit (in het algemeen)."]}}
**Note:** PENDING — On nl card Obst|idx:693, the cited path lv; study.explanation; study.examples[4].lv does not exist. For the TARGET_LANGUAGE_ERROR claim concerning Latvian “augļi” / German “Obst”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "fruit",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "Vruchten",
    "explanation": [
      "Hoofdidee: fruit in het algemeen. In het Duits is er geen meervoudsvorm *die Obsts.",
      "das Obst betekent vooral fruit in het algemeen.",
      "Het wordt alleen in het enkelvoud gebruikt."
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
        "lv": "Man patīk augļi un dārzeņi."
      },
      {
        "de": "Wir essen Obst.",
        "lv": "Wij eten fruit."
      }
    ],
    "tip": [
      "das Obst = fruit",
      "Gebruik das Obst als de context bij deze betekenis past."
    ],
    "important": [
      "Verkeerd: die Obsts → Juist: das Obst",
      "das Obst = fruit (in het algemeen)."
    ]
  },
  "index": 693
}
```

---

## Finding 15

**Audit ID:** `LRB073-0015`
**Finding Stable ID:** `g2/a1/nl|oder|idx:459|study.explanation; study.comparison; study.important|LANGUAGE_MIXUP|gpt-5.6-luna`
**Lang:** nl
**Card:** `oder|idx:459`
**Field / path:** `study.explanation; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: oder gebruik je als je kiest tussen twee of meer opties.\",\"In het Nederlands betekent oder meestal of.\",\"Dit is niet hetzelfde als ob, dat een indirecte vraag inleidt.\",\"In gesprekken kan oder ook aan het einde van de zin staan: Du kommst, oder?\"]","study.comparison":"[{\"word\":\"oder\",\"meaning\":\"Vai izvēlē\",\"example\":\"Koffie of thee?\"},{\"word\":\"ob\",\"meaning\":\"Vai netiešā jautājumā\",\"example\":\"Ik weet niet of hij komt.\"},{\"word\":\"und\",\"meaning\":\"Un\",\"example\":\"Koffie en taart.\"},{\"word\":\"aber\",\"meaning\":\"Bet\",\"example\":\"Ik kom, maar later.\"}]","study.important":"[\"oder gebruik je voor keuze: Kaffee oder Tee.\",\"In een indirecte vraag is 'of' meestal ob.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"oder","lv":"Vai • Jeb","level":"A1","study":{"id":"a1-oder","layout":"standardStudy","translation":"Vai • Jeb","explanation":["Hoofdidee: oder gebruik je als je kiest tussen twee of meer opties.","In het Nederlands betekent oder meestal of.","Dit is niet hetzelfde als ob, dat een indirecte vraag inleidt.","In gesprekken kan oder ook aan het einde van de zin staan: Du kommst, oder?"],"examples":[{"de":"Kaffee oder Tee?","lv":"Kafiju vai tēju?"},{"de":"Heute oder morgen?","lv":"Šodien vai rīt?"},{"de":"Willst du Pizza oder Salat?","lv":"Vai tu gribi picu vai salātus?"},{"de":"Du kommst, oder?","lv":"Tu nāksi, vai ne?"}],"comparison":[{"word":"oder","meaning":"of bij een keuze","example":"Koffie of thee?"},{"word":"ob","meaning":"of in een indirecte vraag","example":"Ik weet niet of hij komt."},{"word":"und","meaning":"en","example":"Koffie en taart."},{"word":"aber","meaning":"maar","example":"Ik kom, maar later."}],"tip":{"text":"Atceries: izvēle starp variantiem → oder."},"important":["oder gebruik je voor keuze: Kaffee oder Tee.","In een indirecte vraag is 'of' meestal ob."]}}
**Note:** PENDING — On nl card oder|idx:459, the finding spans study.explanation; study.comparison; study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: oder gebruik je als je kiest tussen twee of meer opties.\",\"In het Nederlands betekent oder meestal of.\",\"Dit is niet hetzelfde als ob, dat een indire…”. Review the listed subfields separately against Latvian “vai • jeb” / German “oder” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "oder",
  "lv": "Vai • Jeb",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "Vai • Jeb",
    "explanation": [
      "Hoofdidee: oder gebruik je als je kiest tussen twee of meer opties.",
      "In het Nederlands betekent oder meestal of.",
      "Dit is niet hetzelfde als ob, dat een indirecte vraag inleidt.",
      "In gesprekken kan oder ook aan het einde van de zin staan: Du kommst, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Kafiju vai tēju?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Šodien vai rīt?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Vai tu gribi picu vai salātus?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Tu nāksi, vai ne?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "of bij een keuze",
        "example": "Koffie of thee?"
      },
      {
        "word": "ob",
        "meaning": "of in een indirecte vraag",
        "example": "Ik weet niet of hij komt."
      },
      {
        "word": "und",
        "meaning": "en",
        "example": "Koffie en taart."
      },
      {
        "word": "aber",
        "meaning": "maar",
        "example": "Ik kom, maar later."
      }
    ],
    "tip": {
      "text": "Atceries: izvēle starp variantiem → oder."
    },
    "important": [
      "oder gebruik je voor keuze: Kaffee oder Tee.",
      "In een indirecte vraag is 'of' meestal ob."
    ]
  },
  "index": 459
}
```

---

## Finding 16

**Audit ID:** `LRB073-0016`
**Finding Stable ID:** `g2/a1/nl|passen|idx:471|study.explanation; study.comparison; study.important|LANGUAGE_MIXUP|gpt-5.6-luna`
**Lang:** nl
**Card:** `passen|idx:471`
**Field / path:** `study.explanation; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: passen betekent passen, staan of geschikt zijn.\",\"Bij kleding betekent passen meestal passen naar maat.\",\"Bij kleuren of stijl betekent passen goed staan.\",\"Een erg veel voorkomende uitdrukking is Das passt. = Dat past/goed.\"]","study.comparison":"[{\"word\":\"passen\",\"meaning\":\"Derēt / piestāvēt\",\"example\":\"Het jasje past me.\"},{\"word\":\"stehen\",\"meaning\":\"Piestāvēt / stāvēt\",\"example\":\"Rood staat je goed.\"},{\"word\":\"geeignet sein\",\"meaning\":\"Būt piemērotam\",\"example\":\"Dat is geschikt.\"},{\"word\":\"funktionieren\",\"meaning\":\"Darboties\",\"example\":\"Dat werkt.\"}]","study.important":"[\"passen is niet alleen voor kleding.\",\"Het kan ook betekenen dat het moment, plan of oplossing goed uitkomt.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"passen","lv":"Derēt • Piestāvēt","level":"A1","study":{"id":"a1-passen","layout":"standardStudy","translation":"Derēt • Piestāvēt","explanation":["Hoofdidee: passen betekent passen, staan of geschikt zijn.","Bij kleding betekent passen meestal passen naar maat.","Bij kleuren of stijl betekent passen goed staan.","Een erg veel voorkomende uitdrukking is Das passt. = Dat past/goed."],"examples":[{"de":"Die Jacke passt mir.","lv":"Jaka man der."},{"de":"Das Kleid passt gut.","lv":"Kleita labi der."},{"de":"Die Farbe passt zu dir.","lv":"Šī krāsa tev piestāv."},{"de":"Das passt.","lv":"Tas der."}],"comparison":[{"word":"passen","meaning":"passen / goed staan","example":"Het jasje past me."},{"word":"stehen","meaning":"goed staan / staan","example":"Rood staat je goed."},{"word":"geeignet sein","meaning":"geschikt zijn","example":"Dat is geschikt."},{"word":"funktionieren","meaning":"werken","example":"Dat werkt."}],"tip":{"text":"Atceries: Das passt. = Tas der."},"important":["passen is niet alleen voor kleding.","Het kan ook betekenen dat het moment, plan of oplossing goed uitkomt."]}}
**Note:** PENDING — On nl card passen|idx:471, the finding spans study.explanation; study.comparison; study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: passen betekent passen, staan of geschikt zijn.\",\"Bij kleding betekent passen meestal passen naar maat.\",\"Bij kleuren of stijl betekent passen goed s…”. Review the listed subfields separately against Latvian “derēt • piestāvēt” / German “passen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "passen",
  "lv": "Derēt • Piestāvēt",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "Derēt • Piestāvēt",
    "explanation": [
      "Hoofdidee: passen betekent passen, staan of geschikt zijn.",
      "Bij kleding betekent passen meestal passen naar maat.",
      "Bij kleuren of stijl betekent passen goed staan.",
      "Een erg veel voorkomende uitdrukking is Das passt. = Dat past/goed."
    ],
    "examples": [
      {
        "de": "Die Jacke passt mir.",
        "lv": "Jaka man der."
      },
      {
        "de": "Das Kleid passt gut.",
        "lv": "Kleita labi der."
      },
      {
        "de": "Die Farbe passt zu dir.",
        "lv": "Šī krāsa tev piestāv."
      },
      {
        "de": "Das passt.",
        "lv": "Tas der."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "passen / goed staan",
        "example": "Het jasje past me."
      },
      {
        "word": "stehen",
        "meaning": "goed staan / staan",
        "example": "Rood staat je goed."
      },
      {
        "word": "geeignet sein",
        "meaning": "geschikt zijn",
        "example": "Dat is geschikt."
      },
      {
        "word": "funktionieren",
        "meaning": "werken",
        "example": "Dat werkt."
      }
    ],
    "tip": {
      "text": "Atceries: Das passt. = Tas der."
    },
    "important": [
      "passen is niet alleen voor kleding.",
      "Het kan ook betekenen dat het moment, plan of oplossing goed uitkomt."
    ]
  },
  "index": 471
}
```

---

## Finding 17

**Audit ID:** `LRB073-0017`
**Finding Stable ID:** `g2/a1/nl|probieren|idx:482|study.explanation, study.comparison, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `probieren|idx:482`
**Field / path:** `study.explanation, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: probieren betekent proberen of proeven.\",\"Als het om voedsel of drank gaat, betekent probieren vaak proeven.\",\"Als het om een methode, activiteit of ding gaat, betekent probieren proberen.\",\"Dit is niet hetzelfde als prüfen, dat betekent zorgvuldiger controleren.\"]","study.comparison":"[{\"word\":\"probieren\",\"meaning\":\"Izmēģināt / nogaršot\",\"example\":\"Probeer de soep eens!\"},{\"word\":\"versuchen\",\"meaning\":\"Mēģināt\",\"example\":\"Ik probeer het.\"},{\"word\":\"prüfen\",\"meaning\":\"Pārbaudīt\",\"example\":\"Ik controleer de rekening.\"},{\"word\":\"anprobieren\",\"meaning\":\"Pielaikot\",\"example\":\"Ik pas het jasje.\"}]","study.important":"[\"probieren is niet het voornaamste woord voor officieel onderzoeken.\",\"Documenten of rekeningen controleren is meestal prüfen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"probieren","lv":"Izmēģināt • Nogaršot","level":"A1","study":{"id":"a1-probieren","layout":"standardStudy","translation":"Izmēģināt • Nogaršot","explanation":["Hoofdidee: probieren betekent proberen of proeven.","Als het om voedsel of drank gaat, betekent probieren vaak proeven.","Als het om een methode, activiteit of ding gaat, betekent probieren proberen.","Dit is niet hetzelfde als prüfen, dat betekent zorgvuldiger controleren."],"examples":[{"de":"Probier mal die Suppe!","lv":"Pagaršo zupu!"},{"de":"Ich möchte den Kuchen probieren.","lv":"Es gribu nogaršot kūku."},{"de":"Wir probieren eine neue Methode.","lv":"Mēs izmēģinām jaunu metodi."},{"de":"Kann ich die Jacke anprobieren?","lv":"Vai es varu pielaikot jaku?"}],"comparison":[{"word":"probieren","meaning":"proberen / proeven","example":"Proef de soep eens!"},{"word":"versuchen","meaning":"proberen","example":"Ik probeer het."},{"word":"prüfen","meaning":"controleren","example":"Ik controleer de rekening."},{"word":"anprobieren","meaning":"passen","example":"Ik pas het jasje."}],"tip":{"text":"Atceries: ēdiens → probieren = nogaršot."},"important":["probieren is niet het voornaamste woord voor officieel onderzoeken.","Documenten of rekeningen controleren is meestal prüfen."]}}
**Note:** PENDING — On nl card probieren|idx:482, the finding spans study.explanation, study.comparison, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: probieren betekent proberen of proeven.\",\"Als het om voedsel of drank gaat, betekent probieren vaak proeven.\",\"Als het om een methode, activiteit of …”. Review the listed subfields separately against Latvian “["Galvenā doma: probieren nozīmē izmēģināt vai nogaršot.","Ja runa ir par ēdienu vai dzērienu, probieren bieži nozīmē nogaršot.","Ja runa ir par darbību, metodi vai lietu, probieren nozīmē …” / German “probieren” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "probieren",
  "lv": "Izmēģināt • Nogaršot",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "Izmēģināt • Nogaršot",
    "explanation": [
      "Hoofdidee: probieren betekent proberen of proeven.",
      "Als het om voedsel of drank gaat, betekent probieren vaak proeven.",
      "Als het om een methode, activiteit of ding gaat, betekent probieren proberen.",
      "Dit is niet hetzelfde als prüfen, dat betekent zorgvuldiger controleren."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "Pagaršo zupu!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "Es gribu nogaršot kūku."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "Mēs izmēģinām jaunu metodi."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "Vai es varu pielaikot jaku?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "proberen / proeven",
        "example": "Proef de soep eens!"
      },
      {
        "word": "versuchen",
        "meaning": "proberen",
        "example": "Ik probeer het."
      },
      {
        "word": "prüfen",
        "meaning": "controleren",
        "example": "Ik controleer de rekening."
      },
      {
        "word": "anprobieren",
        "meaning": "passen",
        "example": "Ik pas het jasje."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → probieren = nogaršot."
    },
    "important": [
      "probieren is niet het voornaamste woord voor officieel onderzoeken.",
      "Documenten of rekeningen controleren is meestal prüfen."
    ]
  },
  "index": 482
}
```

---

## Finding 18

**Audit ID:** `LRB073-0018`
**Finding Stable ID:** `g2/a1/nl|rechts|a1.card.rechts.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nl
**Card:** `rechts`
**Field / path:** `a1.card.rechts.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Pa labi • Labais
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"rechts","lv":"rechts • rechter","level":"A1"}
**Note:** PENDING — On nl card rechts, a1.card.rechts.native currently reads “Pa labi • Labais” for Latvian “pa labi • labais” / German “rechts”. Select the exact nl sense or approved alternatives for this specific card before owner_new is entered.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "rechts",
  "lv": "rechts • rechter",
  "level": "A1",
  "index": 491
}
```

---

## Finding 19

**Audit ID:** `LRB073-0019`
**Finding Stable ID:** `g2/a1/nl|sagen|idx:505|study.explanation, study.comparison, study.tip, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `sagen|idx:505`
**Field / path:** `study.explanation, study.comparison, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: Een bepaalde gedachte, woord of zin zeggen.\",\"Sagen galvenokārt nozīmē: pateikt konkrētu domu.\",\"Vaak gekenmerkt door: woorden/zinnen.\",\"Sagen lieto konkrētam pateiktam tekstam.\"]","study.comparison":"[{\"word\":\"sagen\",\"meaning\":\"Pasacīt (konkrētu tekstu)\",\"example\":\"Was hast du gesagt? – Wat zei je?\"},{\"word\":\"sprechen\",\"meaning\":\"Runāt (valodu, sarunāties)\",\"example\":\"Ich spreche Deutsch. – Ik spreek Duits.\"}]","study.tip":"[\"sagen = zeggen\",\"Gebruik sagen als de context bij deze betekenis past.\"]","study.important":"[\"sagen = zeggen.\",\"Een bepaalde gedachte, woord of zin zeggen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"sagen","lv":"Teikt","level":"A1","study":{"id":"a1-sagen-study","layout":"standardStudy","translation":"Teikt","explanation":["Hoofdidee: een bepaalde gedachte, een woord of een zin zeggen.","sagen betekent vooral een concrete gedachte uitspreken.","Het gaat vaak om woorden of zinnen.","Je gebruikt sagen voor een concrete uitgesproken tekst."],"examples":[{"de":"Was hast du gesagt?","lv":"Ko tu pateici?"}],"comparison":[{"word":"sagen","meaning":"zeggen (concrete tekst)","example":"Was hast du gesagt? – Wat zei je?"},{"word":"sprechen","meaning":"spreken (een taal / een gesprek voeren)","example":"Ich spreche Deutsch. – Ik spreek Duits."}],"tip":["sagen = zeggen","Gebruik sagen als de context bij deze betekenis past."],"important":["sagen = zeggen.","Een bepaalde gedachte, woord of zin zeggen."]}}
**Note:** PENDING — On nl card sagen|idx:505, the finding spans study.explanation, study.comparison, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: Een bepaalde gedachte, woord of zin zeggen.\",\"Sagen galvenokārt nozīmē: pateikt konkrētu domu.\",\"Vaak gekenmerkt door: woorden/zinnen.\",\"Sagen liet…”. Review the listed subfields separately against Latvian “["Galvenā doma: Pateikt konkrētu domu, vārdu vai teikumu.","sagen galvenokārt nozīmē: pateikt konkrētu domu.","Bieži raksturo: vārdus/teikumus.","sagen lieto konkrētam pateiktam tekstam."]” / German “sagen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sagen",
  "lv": "Teikt",
  "level": "A1",
  "study": {
    "id": "a1-sagen-study",
    "layout": "standardStudy",
    "translation": "Teikt",
    "explanation": [
      "Hoofdidee: een bepaalde gedachte, een woord of een zin zeggen.",
      "sagen betekent vooral een concrete gedachte uitspreken.",
      "Het gaat vaak om woorden of zinnen.",
      "Je gebruikt sagen voor een concrete uitgesproken tekst."
    ],
    "examples": [
      {
        "de": "Was hast du gesagt?",
        "lv": "Ko tu pateici?"
      }
    ],
    "comparison": [
      {
        "word": "sagen",
        "meaning": "zeggen (concrete tekst)",
        "example": "Was hast du gesagt? – Wat zei je?"
      },
      {
        "word": "sprechen",
        "meaning": "spreken (een taal / een gesprek voeren)",
        "example": "Ich spreche Deutsch. – Ik spreek Duits."
      }
    ],
    "tip": [
      "sagen = zeggen",
      "Gebruik sagen als de context bij deze betekenis past."
    ],
    "important": [
      "sagen = zeggen.",
      "Een bepaalde gedachte, woord of zin zeggen."
    ]
  },
  "index": 505
}
```

---

## Finding 20

**Audit ID:** `LRB073-0020`
**Finding Stable ID:** `g2/a1/nl|schauen|idx:510|study.explanation, study.comparison, study.tip, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `schauen|idx:510`
**Field / path:** `study.explanation, study.comparison, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: kijken of actief kijken.\",\"Schauen galvenokārt nozīmē: aktīvi skatīties.\",\"Vaak gekenmerkt door: actie.\",\"Schauen nozīmē aktīvi skatīties.\"]","study.comparison":"[{\"word\":\"schauen\",\"meaning\":\"Skatīties (aktīvi)\",\"example\":\"Ich schaue aus dem Fenster. – Ik kijk uit het raam.\"},{\"word\":\"sehen\",\"meaning\":\"Redzēt (bez nodoma)\",\"example\":\"Ich sehe dich. – Ik zie je.\"}]","study.tip":"[\"schauen = kijken\",\"Gebruik schauen als de context bij deze betekenis past.\"]","study.important":"[\"schauen = kijken.\",\"Actief kijken of kijken.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"schauen","lv":"Skatīties","level":"A1","study":{"id":"a1-schauen-study","layout":"standardStudy","translation":"Skatīties","explanation":["Hoofdidee: actief kijken of even kijken.","schauen betekent vooral actief kijken.","Het beschrijft vaak een bewuste handeling.","schauen betekent actief kijken."],"examples":[{"de":"Ich schaue fern.","lv":"Es skatos televizoru."},{"de":"Wir schauen aus dem Fenster.","lv":"Mēs skatāmies pa logu."},{"de":"Ich schaue fern.","lv":"Es skatos televizoru."}],"comparison":[{"word":"schauen","meaning":"actief kijken","example":"Ich schaue aus dem Fenster. – Ik kijk uit het raam."},{"word":"sehen","meaning":"zien (zonder bedoeling)","example":"Ich sehe dich. – Ik zie je."}],"tip":["schauen = kijken","Gebruik schauen als de context bij deze betekenis past."],"important":["schauen = kijken.","Actief kijken of kijken."]}}
**Note:** PENDING — On nl card schauen|idx:510, the finding spans study.explanation, study.comparison, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: kijken of actief kijken.\",\"Schauen galvenokārt nozīmē: aktīvi skatīties.\",\"Vaak gekenmerkt door: actie.\",\"Schauen nozīmē aktīvi skatīties.\"]","stu…”. Review the listed subfields separately against Latvian “["Galvenā doma: Aktīvi skatīties vai palūkoties.","schauen galvenokārt nozīmē: aktīvi skatīties.","Bieži raksturo: darbību.","schauen nozīmē aktīvi skatīties."]” / German “schauen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "schauen",
  "lv": "Skatīties",
  "level": "A1",
  "study": {
    "id": "a1-schauen-study",
    "layout": "standardStudy",
    "translation": "Skatīties",
    "explanation": [
      "Hoofdidee: actief kijken of even kijken.",
      "schauen betekent vooral actief kijken.",
      "Het beschrijft vaak een bewuste handeling.",
      "schauen betekent actief kijken."
    ],
    "examples": [
      {
        "de": "Ich schaue fern.",
        "lv": "Es skatos televizoru."
      },
      {
        "de": "Wir schauen aus dem Fenster.",
        "lv": "Mēs skatāmies pa logu."
      },
      {
        "de": "Ich schaue fern.",
        "lv": "Es skatos televizoru."
      }
    ],
    "comparison": [
      {
        "word": "schauen",
        "meaning": "actief kijken",
        "example": "Ich schaue aus dem Fenster. – Ik kijk uit het raam."
      },
      {
        "word": "sehen",
        "meaning": "zien (zonder bedoeling)",
        "example": "Ich sehe dich. – Ik zie je."
      }
    ],
    "tip": [
      "schauen = kijken",
      "Gebruik schauen als de context bij deze betekenis past."
    ],
    "important": [
      "schauen = kijken.",
      "Actief kijken of kijken."
    ]
  },
  "index": 510
}
```

---

## Finding 21

**Audit ID:** `LRB073-0021`
**Finding Stable ID:** `g2/a1/nl|schon|idx:521|study.explanation, study.tip, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `schon|idx:521`
**Field / path:** `study.explanation, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: Iets is al gebeurd of is al van kracht.\",\"Schon galvenokārt nozīmē: kaut kas jau ir noticis vai spēkā.\",\"Vaak gekenmerkt door: gebeurde feit of bestaande toestand.\",\"Schon nozīmē jau: kaut kas jau ir noticis vai jau ir spēkā.\"]","study.tip":"[\"Iets is al gebeurd of is al van kracht.\",\"Gebruik schon als de context bij deze betekenis past.\"]","study.important":"[\"schon = al.\",\"Iets is al gebeurd of is al van kracht.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"schon","lv":"Jau","level":"A1","study":{"id":"a1-schon-study","layout":"standardStudy","translation":"Jau","explanation":["Hoofdidee: iets is al gebeurd of geldt al.","schon betekent vooral dat iets al is gebeurd of al geldt.","Het beschrijft vaak een voltooid feit of een bestaande toestand.","schon betekent al: iets is al gebeurd of geldt al."],"examples":[{"de":"Ich bin schon zu Hause.","lv":"Es jau esmu mājās."}],"tip":["Iets is al gebeurd of is al van kracht.","Gebruik schon als de context bij deze betekenis past."],"important":["schon = al.","Iets is al gebeurd of is al van kracht."]}}
**Note:** PENDING — On nl card schon|idx:521, the finding spans study.explanation, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: Iets is al gebeurd of is al van kracht.\",\"Schon galvenokārt nozīmē: kaut kas jau ir noticis vai spēkā.\",\"Vaak gekenmerkt door: gebeurde feit of besta…”. Review the listed subfields separately against Latvian “["Galvenā doma: Kaut kas jau ir noticis vai jau ir spēkā.","schon galvenokārt nozīmē: kaut kas jau ir noticis vai spēkā.","Bieži raksturo: notikušu faktu vai esošu stāvokli.","schon nozīmē …” / German “schon” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "schon",
  "lv": "Jau",
  "level": "A1",
  "study": {
    "id": "a1-schon-study",
    "layout": "standardStudy",
    "translation": "Jau",
    "explanation": [
      "Hoofdidee: iets is al gebeurd of geldt al.",
      "schon betekent vooral dat iets al is gebeurd of al geldt.",
      "Het beschrijft vaak een voltooid feit of een bestaande toestand.",
      "schon betekent al: iets is al gebeurd of geldt al."
    ],
    "examples": [
      {
        "de": "Ich bin schon zu Hause.",
        "lv": "Es jau esmu mājās."
      }
    ],
    "tip": [
      "Iets is al gebeurd of is al van kracht.",
      "Gebruik schon als de context bij deze betekenis past."
    ],
    "important": [
      "schon = al.",
      "Iets is al gebeurd of is al van kracht."
    ]
  },
  "index": 521
}
```

---

## Finding 22

**Audit ID:** `LRB073-0022`
**Finding Stable ID:** `g2/a1/nl|schwimmen|idx:531|study.explanation; study.comparison[].example; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `schwimmen|idx:531`
**Field / path:** `study.explanation; study.comparison[].example; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: schwimmen betekent zwemmen als beweging of sport.\",\"Schwimmen lieto, ja cilvēks peld ūdenī ar peldēšanas kustībām.\",\"Als het om ontspanning in water of zwemmen gaat, gebruik je vaak baden.\",\"Op A1-niveau is het belangrijk onderscheid: schwimmen = zwemmen, baden = baden.\"]","study.comparison[].example":null,"study.important":"[\"schwimmen en baden zijn niet hetzelfde.\",\"In het Nederlands zeg je vaak 'zwemmen', maar in het Duits moet je kijken of het beweging of baden is.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"schwimmen","lv":"Peldēt","level":"A1","study":{"id":"a1-schwimmen","layout":"standardStudy","translation":"Peldēt","explanation":["Hoofdidee: schwimmen betekent zwemmen als beweging of sport.","Je gebruikt schwimmen wanneer iemand zich met zwembewegingen door het water beweegt.","Voor ontspannen in het water of baden gebruik je vaak baden.","Op A1-niveau is het belangrijke verschil: schwimmen = zwemmen, baden = baden."],"examples":[{"de":"Ich schwimme gern.","lv":"Man patīk peldēt."},{"de":"Er schwimmt sehr gut.","lv":"Viņš ļoti labi peld."},{"de":"Wir schwimmen im Schwimmbad.","lv":"Mēs peldam baseinā."},{"de":"Ich gehe baden.","lv":"Es eju peldēties."}],"comparison":[{"word":"schwimmen","meaning":"Peldēt kā kustība vai sports","example":"Hij zwemt erg goed."},{"word":"baden","meaning":"Peldēties / atrasties ūdenī","example":"Ik ga baden."},{"word":"schwimmen gehen","meaning":"Iet peldēt","example":"Wij gaan zwemmen."},{"word":"duschen","meaning":"Mazgāties dušā","example":"Ik douche 's ochtends."}],"tip":{"text":"Atceries: peldēšanas kustība → schwimmen; atpūta ūdenī → baden."},"important":["schwimmen en baden zijn niet hetzelfde.","In het Nederlands zeg je vaak 'zwemmen', maar in het Duits moet je kijken of het beweging of baden is."]}}
**Note:** PENDING — On nl card schwimmen|idx:531, the cited path study.explanation; study.comparison[].example; study.important does not exist. For the TARGET_LANGUAGE_CONTAMINATION claim concerning Latvian “peldēt” / German “schwimmen”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "schwimmen",
  "lv": "Peldēt",
  "level": "A1",
  "study": {
    "id": "a1-schwimmen",
    "layout": "standardStudy",
    "translation": "Peldēt",
    "explanation": [
      "Hoofdidee: schwimmen betekent zwemmen als beweging of sport.",
      "Je gebruikt schwimmen wanneer iemand zich met zwembewegingen door het water beweegt.",
      "Voor ontspannen in het water of baden gebruik je vaak baden.",
      "Op A1-niveau is het belangrijke verschil: schwimmen = zwemmen, baden = baden."
    ],
    "examples": [
      {
        "de": "Ich schwimme gern.",
        "lv": "Man patīk peldēt."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Viņš ļoti labi peld."
      },
      {
        "de": "Wir schwimmen im Schwimmbad.",
        "lv": "Mēs peldam baseinā."
      },
      {
        "de": "Ich gehe baden.",
        "lv": "Es eju peldēties."
      }
    ],
    "comparison": [
      {
        "word": "schwimmen",
        "meaning": "Peldēt kā kustība vai sports",
        "example": "Hij zwemt erg goed."
      },
      {
        "word": "baden",
        "meaning": "Peldēties / atrasties ūdenī",
        "example": "Ik ga baden."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Iet peldēt",
        "example": "Wij gaan zwemmen."
      },
      {
        "word": "duschen",
        "meaning": "Mazgāties dušā",
        "example": "Ik douche 's ochtends."
      }
    ],
    "tip": {
      "text": "Atceries: peldēšanas kustība → schwimmen; atpūta ūdenī → baden."
    },
    "important": [
      "schwimmen en baden zijn niet hetzelfde.",
      "In het Nederlands zeg je vaak 'zwemmen', maar in het Duits moet je kijken of het beweging of baden is."
    ]
  },
  "index": 531
}
```

---

## Finding 23

**Audit ID:** `LRB073-0023`
**Finding Stable ID:** `g2/a1/nl|sehen|idx:539|study.explanation; study.examples[1].lv; study.comparison[].example; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `sehen|idx:539`
**Field / path:** `study.explanation; study.examples[1].lv; study.comparison[].example; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: sehen betekent zien met de ogen.\",\"Als het gaat om wat je ogen waarnemen, gebruik je sehen.\",\"Bewust kijken is vaak schauen of ansehen.\",\"Een veel gebruikte uitdrukking is Ich sehe dich. = Ik zie je.\"]","study.examples[1].lv":null,"study.comparison[].example":null,"study.important":"[\"sehen is niet hetzelfde als anschauen.\",\"Ich sehe dich = ik zie je; Ich schaue den Film = ik kijk naar de film.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"sehen","lv":"Redzēt","level":"A1","study":{"id":"a1-sehen","layout":"standardStudy","translation":"Redzēt","explanation":["Hoofdidee: sehen betekent zien met de ogen.","Als het gaat om wat je ogen waarnemen, gebruik je sehen.","Bewust kijken is vaak schauen of ansehen.","Een veel gebruikte uitdrukking is Ich sehe dich. = Ik zie je."],"examples":[{"de":"Ich sehe dich.","lv":"Es tevi redzu."},{"de":"Siehst du das Auto?","lv":"Zie je die auto?"},{"de":"Ich sehe nichts.","lv":"Es neko neredzu."},{"de":"Wir schauen einen Film.","lv":"Mēs skatāmies filmu."}],"comparison":[{"word":"sehen","meaning":"Redzēt","example":"Ik zie je."},{"word":"schauen","meaning":"Skatīties","example":"Ik kijk naar de afbeelding."},{"word":"ansehen","meaning":"Apskatīt / skatīties","example":"Ik kijk naar de film."},{"word":"hören","meaning":"Dzirdēt","example":"Ik hoor muziek."}],"tip":{"text":"Atceries: acis uztver → sehen; apzināti skaties → schauen/ansehen."},"important":["sehen is niet hetzelfde als anschauen.","Ich sehe dich = ik zie je; Ich schaue den Film = ik kijk naar de film."]}}
**Note:** PENDING — On nl card sehen|idx:539, the cited path study.explanation; study.examples[1].lv; study.comparison[].example; study.important does not exist. For the TARGET_LANGUAGE_CONTAMINATION claim concerning Latvian “redzēt” / German “sehen”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sehen",
  "lv": "Redzēt",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "Redzēt",
    "explanation": [
      "Hoofdidee: sehen betekent zien met de ogen.",
      "Als het gaat om wat je ogen waarnemen, gebruik je sehen.",
      "Bewust kijken is vaak schauen of ansehen.",
      "Een veel gebruikte uitdrukking is Ich sehe dich. = Ik zie je."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "Es tevi redzu."
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "Zie je die auto?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "Es neko neredzu."
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "Mēs skatāmies filmu."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "Redzēt",
        "example": "Ik zie je."
      },
      {
        "word": "schauen",
        "meaning": "Skatīties",
        "example": "Ik kijk naar de afbeelding."
      },
      {
        "word": "ansehen",
        "meaning": "Apskatīt / skatīties",
        "example": "Ik kijk naar de film."
      },
      {
        "word": "hören",
        "meaning": "Dzirdēt",
        "example": "Ik hoor muziek."
      }
    ],
    "tip": {
      "text": "Atceries: acis uztver → sehen; apzināti skaties → schauen/ansehen."
    },
    "important": [
      "sehen is niet hetzelfde als anschauen.",
      "Ich sehe dich = ik zie je; Ich schaue den Film = ik kijk naar de film."
    ]
  },
  "index": 539
}
```

---

## Finding 24

**Audit ID:** `LRB073-0024`
**Finding Stable ID:** `g2/a1/nl|sein|idx:542|study.translation; study.examples[3].lv; study.comparison[].example; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `sein|idx:542`
**Field / path:** `study.translation; study.examples[3].lv; study.comparison[].example; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Zijn","study.examples[3].lv":null,"study.comparison[].example":null,"study.important":"[\"vormen van sein moet je apart leren: bin, bist, ist, sind.\",\"Ich bin is 'ik ben', niet 'ik zullen zijn'.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"sein","lv":"Zijn","level":"A1","study":{"id":"a1-sein","layout":"standardStudy","translation":"zijn","explanation":["Hoofdidee: sein betekent zijn.","Sein ir viens no svarīgākajiem vācu darbības vārdiem.","Op A1-niveau zijn bijzonder belangrijke vormen ik ben, jij bent, hij is en wij zijn.","Sein lieto arī daudzos teikumos ar atrašanās vietu vai īpašību."],"examples":[{"de":"Ich bin hier.","lv":"Es esmu šeit."},{"de":"Du bist müde.","lv":"Tu esi noguris."},{"de":"Er ist Lehrer.","lv":"Viņš ir skolotājs."},{"de":"Wir sind zu Hause.","lv":"Wij zijn thuis."}],"comparison":[{"word":"sein","meaning":"Zijn","example":"Ik ben hier."},{"word":"haben","meaning":"Ik heb","example":"Ik heb tijd."},{"word":"werden","meaning":"Kļūt","example":"Ik word moe."},{"word":"bleiben","meaning":"Palikt","example":"Ik blijf hier."}],"tip":{"text":"Atceries: ich bin = es esmu; du bist = tu esi."},"important":["De vormen van sein moet je apart leren: bin, bist, ist, sind.","Ich bin betekent 'ik ben', niet 'ik zal zijn'."]}}
**Note:** PENDING — On nl card sein|idx:542, the cited path study.translation; study.examples[3].lv; study.comparison[].example; study.important does not exist. For the TARGET_LANGUAGE_CONTAMINATION claim concerning Latvian “būt” / German “sein”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sein",
  "lv": "Zijn",
  "level": "A1",
  "study": {
    "id": "a1-sein",
    "layout": "standardStudy",
    "translation": "zijn",
    "explanation": [
      "Hoofdidee: sein betekent zijn.",
      "Sein ir viens no svarīgākajiem vācu darbības vārdiem.",
      "Op A1-niveau zijn bijzonder belangrijke vormen ik ben, jij bent, hij is en wij zijn.",
      "Sein lieto arī daudzos teikumos ar atrašanās vietu vai īpašību."
    ],
    "examples": [
      {
        "de": "Ich bin hier.",
        "lv": "Es esmu šeit."
      },
      {
        "de": "Du bist müde.",
        "lv": "Tu esi noguris."
      },
      {
        "de": "Er ist Lehrer.",
        "lv": "Viņš ir skolotājs."
      },
      {
        "de": "Wir sind zu Hause.",
        "lv": "Wij zijn thuis."
      }
    ],
    "comparison": [
      {
        "word": "sein",
        "meaning": "Zijn",
        "example": "Ik ben hier."
      },
      {
        "word": "haben",
        "meaning": "Ik heb",
        "example": "Ik heb tijd."
      },
      {
        "word": "werden",
        "meaning": "Kļūt",
        "example": "Ik word moe."
      },
      {
        "word": "bleiben",
        "meaning": "Palikt",
        "example": "Ik blijf hier."
      }
    ],
    "tip": {
      "text": "Atceries: ich bin = es esmu; du bist = tu esi."
    },
    "important": [
      "De vormen van sein moet je apart leren: bin, bist, ist, sind.",
      "Ich bin betekent 'ik ben', niet 'ik zal zijn'."
    ]
  },
  "index": 542
}
```

---

## Finding 25

**Audit ID:** `LRB073-0025`
**Finding Stable ID:** `g2/a1/nl|Seite|idx:544|study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `Seite|idx:544`
**Field / path:** `study.explanation; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: die Seite kan de pagina van een boek/document of de zijde/kant van iets betekenen.\",\"In een boek, tijdschrift of website is die Seite = pagina (pagina 5 = pagina 5).\",\"In ruimtelijke zin is die Seite = zijde (aan de linkerkant = aan de linkerkant).\",\"In overdrachtelijke zin kan die Seite ook de kant in een conflict of opvatting betekenen (aan mijn kant = aan mijn kant).\",\"Context (boek/lezen of positie/relaties) toont de juiste betekenis.\",\"Meervoud voor beide betekenissen: die Seiten.\"]","study.tip":"[\"Praten over een boek of lezen → pagina. Praten over positie, richting of relaties → zijde.\",\"Pagina X in een boek is altijd pagina, niet zijde.\"]","study.important":"[\"die Seite = pagina OF zijde — context maakt het onderscheid.\",\"Meervoud voor beide betekenissen: die Seiten.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Seite","lv":"Lappuse • Puse","level":"A1","de_article":"die","de_plural":"die Seiten","study":{"id":"a1-seite","layout":"standardStudy","translation":"Lappuse • Puse","explanation":["Hoofdidee: die Seite kan een pagina van een boek of document zijn, maar ook een zijde of kant van iets.","In een boek, tijdschrift of op een website betekent die Seite pagina.","In ruimtelijke zin betekent die Seite zijde of kant.","Figuurlijk kan die Seite ook een kant in een conflict of standpunt betekenen.","De context bepaalt de juiste betekenis.","Het meervoud voor beide betekenissen is die Seiten."],"examples":[{"de":"Schlagt die Seite zwanzig auf.","lv":"Atveriet divdesmito lappusi."},{"de":"Auf der linken Seite ist ein Park.","lv":"Kreisajā pusē ir parks."},{"de":"Die Webseite lädt langsam.","lv":"Tīmekļa lappuse ielādējas lēni."},{"de":"Er steht auf meiner Seite.","lv":"Viņš ir manā pusē."},{"de":"Das Buch hat 200 Seiten.","lv":"Grāmatai ir 200 lappuses."},{"de":"Auf der anderen Seite der Straße.","lv":"Otrā ielas pusē."}],"tip":["Praten over een boek of lezen → pagina. Praten over positie, richting of relaties → zijde.","Pagina X in een boek is altijd pagina, niet zijde."],"important":["die Seite = pagina OF zijde — context maakt het onderscheid.","Meervoud voor beide betekenissen: die Seiten."]}}
**Note:** PENDING — On nl card Seite|idx:544, the finding spans study.explanation; study.tip; study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: die Seite kan de pagina van een boek/document of de zijde/kant van iets betekenen.\",\"In een boek, tijdschrift of website is die Seite = pagina (pagina …”. Review the listed subfields separately against Latvian “lappuse • puse” / German “Seite” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Lappuse • Puse",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Lappuse • Puse",
    "explanation": [
      "Hoofdidee: die Seite kan een pagina van een boek of document zijn, maar ook een zijde of kant van iets.",
      "In een boek, tijdschrift of op een website betekent die Seite pagina.",
      "In ruimtelijke zin betekent die Seite zijde of kant.",
      "Figuurlijk kan die Seite ook een kant in een conflict of standpunt betekenen.",
      "De context bepaalt de juiste betekenis.",
      "Het meervoud voor beide betekenissen is die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Atveriet divdesmito lappusi."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Kreisajā pusē ir parks."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Tīmekļa lappuse ielādējas lēni."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Viņš ir manā pusē."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Grāmatai ir 200 lappuses."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Otrā ielas pusē."
      }
    ],
    "tip": [
      "Praten over een boek of lezen → pagina. Praten over positie, richting of relaties → zijde.",
      "Pagina X in een boek is altijd pagina, niet zijde."
    ],
    "important": [
      "die Seite = pagina OF zijde — context maakt het onderscheid.",
      "Meervoud voor beide betekenissen: die Seiten."
    ]
  },
  "index": 544
}
```

---

## Finding 26

**Audit ID:** `LRB073-0026`
**Finding Stable ID:** `g2/a1/nl|sich|idx:547|study.explanation; study.comparison[].example; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `sich|idx:547`
**Field / path:** `study.explanation; study.comparison[].example; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: sich laat zien dat de actie verwijst naar de doener zelf.\",\"In het Nederlands vertaal je het vaak als jezelf of je.\",\"In sommige Duitse werkwoorden is sich een verplicht onderdeel, bijvoorbeeld sich waschen.\",\"Op A1-niveau is het belangrijk op te merken: ik was me, hij wast zich.\"]","study.comparison[].example":null,"study.important":"[\"sich is geen zelfstandig woord.\",\"Het verandert per persoon: ik → me, jij → je, hij/zij/het → zich.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"sich","lv":"Sevi • Sev","level":"A1","study":{"id":"a1-sich","layout":"standardStudy","translation":"Sevi • Sev","explanation":["Hoofdidee: sich laat zien dat de actie verwijst naar de doener zelf.","In het Nederlands vertaal je het vaak als jezelf of je.","In sommige Duitse werkwoorden is sich een verplicht onderdeel, bijvoorbeeld sich waschen.","Op A1-niveau is het belangrijk op te merken: ik was me, hij wast zich."],"examples":[{"de":"Er wäscht sich.","lv":"Viņš mazgājas."},{"de":"Ich setze mich.","lv":"Es apsēžos."},{"de":"Sie freut sich.","lv":"Viņa priecājas."},{"de":"Ich wasche das Auto.","lv":"Es mazgāju auto."}],"comparison":[{"word":"sich","meaning":"Sevi / sev","example":"Hij wast zich."},{"word":"mich","meaning":"Mani / sevi pie ich","example":"Ik was me."},{"word":"dich","meaning":"Tevi / sevi pie du","example":"Jij wast je."},{"word":"ihn","meaning":"Viņu","example":"Ik zie hem."}],"tip":{"text":"Atceries: darbība uz sevi → sich/mich/dich."},"important":["sich is geen zelfstandig woord.","Het verandert per persoon: ik → me, jij → je, hij/zij/het → zich."]}}
**Note:** PENDING — On nl card sich|idx:547, the cited path study.explanation; study.comparison[].example; study.important does not exist. For the TARGET_LANGUAGE_CONTAMINATION claim concerning Latvian “sevi • sev” / German “sich”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sich",
  "lv": "Sevi • Sev",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "Sevi • Sev",
    "explanation": [
      "Hoofdidee: sich laat zien dat de actie verwijst naar de doener zelf.",
      "In het Nederlands vertaal je het vaak als jezelf of je.",
      "In sommige Duitse werkwoorden is sich een verplicht onderdeel, bijvoorbeeld sich waschen.",
      "Op A1-niveau is het belangrijk op te merken: ik was me, hij wast zich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Viņš mazgājas."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Es apsēžos."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Viņa priecājas."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Es mazgāju auto."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "Sevi / sev",
        "example": "Hij wast zich."
      },
      {
        "word": "mich",
        "meaning": "Mani / sevi pie ich",
        "example": "Ik was me."
      },
      {
        "word": "dich",
        "meaning": "Tevi / sevi pie du",
        "example": "Jij wast je."
      },
      {
        "word": "ihn",
        "meaning": "Viņu",
        "example": "Ik zie hem."
      }
    ],
    "tip": {
      "text": "Atceries: darbība uz sevi → sich/mich/dich."
    },
    "important": [
      "sich is geen zelfstandig woord.",
      "Het verandert per persoon: ik → me, jij → je, hij/zij/het → zich."
    ]
  },
  "index": 547
}
```

---

## Finding 27

**Audit ID:** `LRB073-0027`
**Finding Stable ID:** `g2/a1/nl|sprechen|idx:5|study.explanation, study.examples.lv, study.comparison, study.tip, study.important|LV_TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `sprechen|idx:5`
**Field / path:** `study.explanation, study.examples.lv, study.comparison, study.tip, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: Spreken, converseren of taal gebruiken.\",\"Sprechen betekent vooral: spreken of converseren.\",\"Vaak gekenmerkt door: taal/conversatie.\",\"Sprechen raksturo runāšanu vai valodas lietošanu.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sprechen\",\"meaning\":\"Runāt (process, valoda)\",\"example\":\"Wir sprechen über die Arbeit. – We hebben het over werk.\"},{\"word\":\"sagen\",\"meaning\":\"Pasacīt (konkrētu tekstu)\",\"example\":\"Sag mir die Wahrheit. – Vertel me de waarheid.\"}]","study.tip":"[\"sprechen = spreken\",\"Gebruik sprechen als de context bij deze betekenis past.\"]","study.important":"[\"sprechen = spreken.\",\"Spreken, converseren of taal gebruiken.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"sprechen","lv":"Runāt","level":"A1","study":{"id":"a1-sprechen-study","layout":"standardStudy","translation":"Runāt","explanation":["Hoofdidee: spreken, een gesprek voeren of een taal gebruiken.","sprechen betekent vooral spreken of een gesprek voeren.","Het gaat vaak om taal of een gesprek.","sprechen beschrijft spreken of taalgebruik."],"examples":[{"de":"Ich spreche Deutsch.","lv":"Ik spreek Duits."},{"de":"Wir sprechen über die Arbeit.","lv":"Wij spreken over het werk."},{"de":"Sie spricht mit ihrer Lehrerin.","lv":"Spreek je Engels?"},{"lv":"Hij spreekt met zijn leraar."}],"comparison":[{"word":"sprechen","meaning":"spreken (proces / taal)","example":"Wir sprechen über die Arbeit. – We praten over het werk."},{"word":"sagen","meaning":"zeggen (concrete tekst)","example":"Sag mir die Wahrheit. – Zeg me de waarheid."}],"tip":["sprechen = spreken","Gebruik sprechen als de context bij deze betekenis past."],"important":["sprechen = spreken.","Spreken, converseren of taal gebruiken."]}}
**Note:** PENDING — On nl card sprechen|idx:5, the cited path study.explanation, study.examples.lv, study.comparison, study.tip, study.important does not exist. For the LV_TRANSLATION_ERROR claim concerning Latvian “["Galvenā doma: Runāt, sarunāties vai lietot valodu.","sprechen galvenokārt nozīmē: runāt vai sarunāties.","Bieži raksturo: valodu/sarunu.","sprechen raksturo runāšanu vai valodas lietošanu…” / German “sprechen”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sprechen",
  "lv": "Runāt",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "Runāt",
    "explanation": [
      "Hoofdidee: spreken, een gesprek voeren of een taal gebruiken.",
      "sprechen betekent vooral spreken of een gesprek voeren.",
      "Het gaat vaak om taal of een gesprek.",
      "sprechen beschrijft spreken of taalgebruik."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Ik spreek Duits."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "Wij spreken over het werk."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "Spreek je Engels?"
      },
      {
        "lv": "Hij spreekt met zijn leraar."
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "spreken (proces / taal)",
        "example": "Wir sprechen über die Arbeit. – We praten over het werk."
      },
      {
        "word": "sagen",
        "meaning": "zeggen (concrete tekst)",
        "example": "Sag mir die Wahrheit. – Zeg me de waarheid."
      }
    ],
    "tip": [
      "sprechen = spreken",
      "Gebruik sprechen als de context bij deze betekenis past."
    ],
    "important": [
      "sprechen = spreken.",
      "Spreken, converseren of taal gebruiken."
    ]
  },
  "index": 5
}
```

---

## Finding 28

**Audit ID:** `LRB073-0028`
**Finding Stable ID:** `g2/a1/nl|stehen|idx:576|study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `stehen|idx:576`
**Field / path:** `study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: stehen betekent staan of zich staande bevinden.\",\"Voor een persoon betekent stehen staan.\",\"Voor een voorwerp betekent stehen dat het staand is of op een bepaalde plaats staat.\",\"Belangrijk onderscheid: stehen = staan, sitzen = zitten, liegen = liggen/zich liggend bevinden.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Es stāvu pie durvīm.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Krēsls stāv virtuvē.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Hij zit aan tafel.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Grāmata atrodas uz galda.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"Stāvēt / atrasties stāvus\",\"example\":\"Ik sta hier.\"},{\"word\":\"sitzen\",\"meaning\":\"Sēdēt\",\"example\":\"Hij zit aan tafel.\"},{\"word\":\"liegen\",\"meaning\":\"Gulēt / atrasties guļus\",\"example\":\"Het boek ligt daar.\"},{\"word\":\"stellen\",\"meaning\":\"Nolikt stāvus\",\"example\":\"Ik zet de fles neer.\"}]","study.important":"[\"stehen toont een toestand, niet de actie \\\"neerzetten\\\".\",\"Een voorwerp staand neerzetten is stellen, niet stehen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"stehen","lv":"Stāvēt","level":"A1","study":{"id":"a1-stehen","layout":"standardStudy","translation":"Stāvēt","explanation":["Hoofdidee: stehen betekent staan of zich staande bevinden.","Voor een persoon betekent stehen staan.","Voor een voorwerp betekent stehen dat het staand is of op een bepaalde plaats staat.","Belangrijk onderscheid: stehen = staan, sitzen = zitten, liegen = liggen/zich liggend bevinden."],"examples":[{"de":"Ich stehe an der Tür.","lv":"Ik sta bij de deur."},{"de":"Der Stuhl steht in der Küche.","lv":"De stoel staat in de keuken."},{"de":"Er sitzt am Tisch.","lv":"Hij zit aan tafel."},{"de":"Das Buch liegt auf dem Tisch.","lv":"Het boek ligt op tafel."}],"comparison":[{"word":"stehen","meaning":"staan / rechtop staan","example":"Ik sta hier."},{"word":"sitzen","meaning":"zitten","example":"Hij zit aan tafel."},{"word":"liegen","meaning":"liggen","example":"Het boek ligt daar."},{"word":"stellen","meaning":"rechtop zetten","example":"Ik zet de fles neer."}],"tip":{"text":"Atceries: stāvus → stehen; sēdus → sitzen; guļus → liegen."},"important":["stehen toont een toestand, niet de actie \"neerzetten\".","Een voorwerp staand neerzetten is stellen, niet stehen."]}}
**Note:** PENDING — On nl card stehen|idx:576, the finding spans study.explanation, study.examples, study.comparison, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: stehen betekent staan of zich staande bevinden.\",\"Voor een persoon betekent stehen staan.\",\"Voor een voorwerp betekent stehen dat het staand is of op…”. Review the listed subfields separately against Latvian “["Galvenā doma: stehen nozīmē stāvēt vai atrasties stāvus.","Par cilvēku stehen nozīmē stāvēt.","Par priekšmetu stehen nozīmē, ka tas atrodas stāvus vai noteiktā vietā.","Svarīgi nošķirt: s…” / German “stehen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "stehen",
  "lv": "Stāvēt",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "Stāvēt",
    "explanation": [
      "Hoofdidee: stehen betekent staan of zich staande bevinden.",
      "Voor een persoon betekent stehen staan.",
      "Voor een voorwerp betekent stehen dat het staand is of op een bepaalde plaats staat.",
      "Belangrijk onderscheid: stehen = staan, sitzen = zitten, liegen = liggen/zich liggend bevinden."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Ik sta bij de deur."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "De stoel staat in de keuken."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "Hij zit aan tafel."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Het boek ligt op tafel."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "staan / rechtop staan",
        "example": "Ik sta hier."
      },
      {
        "word": "sitzen",
        "meaning": "zitten",
        "example": "Hij zit aan tafel."
      },
      {
        "word": "liegen",
        "meaning": "liggen",
        "example": "Het boek ligt daar."
      },
      {
        "word": "stellen",
        "meaning": "rechtop zetten",
        "example": "Ik zet de fles neer."
      }
    ],
    "tip": {
      "text": "Atceries: stāvus → stehen; sēdus → sitzen; guļus → liegen."
    },
    "important": [
      "stehen toont een toestand, niet de actie \"neerzetten\".",
      "Een voorwerp staand neerzetten is stellen, niet stehen."
    ]
  },
  "index": 576
}
```

---

## Finding 29

**Audit ID:** `LRB073-0029`
**Finding Stable ID:** `g2/a1/nl|über|idx:608|study.explanation, study.important, study.comparison|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `über|idx:608`
**Field / path:** `study.explanation, study.important, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: über betekent boven of over, afhankelijk van de context.\",\"Als het gaat om locatie, betekent über vaak boven.\",\"Als het gaat om gesprek, tekst of onderwerp, betekent über over.\",\"In beweging kan über over betekenen.\"]","study.important":"[\"über is niet alleen een plaatsaanduiding.\",\"sprechen über betekent \\\"praten over\\\".\"]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"Virs / par / pāri\",\"example\":\"Wir sprechen über das Wetter.\"},{\"word\":\"auf\",\"meaning\":\"Uz virsmas\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"unter\",\"meaning\":\"Zem\",\"example\":\"Die Tasche ist unter dem Tisch.\"},{\"word\":\"von\",\"meaning\":\"Van/over uit een bepaalde bron\",\"example\":\"Ich höre von dir.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"über","lv":"Virs • Par","level":"A1","study":{"id":"a1-über","layout":"standardStudy","translation":"Virs • Par","explanation":["Hoofdidee: über betekent boven of over, afhankelijk van de context.","Als het gaat om locatie, betekent über vaak boven.","Als het gaat om gesprek, tekst of onderwerp, betekent über over.","In beweging kan über over betekenen."],"examples":[{"de":"Die Lampe hängt über dem Tisch.","lv":"Lampa karājas virs galda."},{"de":"Wir sprechen über das Wetter.","lv":"Mēs runājam par laiku."},{"de":"Das Kind läuft über die Straße.","lv":"Bērns skrien pāri ielai."},{"de":"Ich freue mich über das Geschenk.","lv":"Es priecājos par dāvanu."}],"comparison":[{"word":"über","meaning":"boven / over","example":"Wir sprechen über das Wetter."},{"word":"auf","meaning":"op een oppervlak","example":"Das Buch liegt auf dem Tisch."},{"word":"unter","meaning":"onder","example":"Die Tasche ist unter dem Tisch."},{"word":"von","meaning":"van / over vanuit een bron","example":"Ich höre von dir."}],"tip":{"text":"Atceries: tēma sarunā → über; virs galda → über."},"important":["über is niet alleen een plaatsaanduiding.","sprechen über betekent \"praten over\"."]}}
**Note:** PENDING — On nl card über|idx:608, the finding spans study.explanation, study.important, study.comparison; the captured production value begins “{"study.explanation":"[\"Hoofdidee: über betekent boven of over, afhankelijk van de context.\",\"Als het gaat om locatie, betekent über vaak boven.\",\"Als het gaat om gesprek, tekst of ond…”. Review the listed subfields separately against Latvian “["Galvenā doma: über nozīmē virs vai par atkarībā no konteksta.","Ja runa ir par atrašanās vietu, über bieži nozīmē virs.","Ja runa ir par sarunu, tekstu vai tēmu, über nozīmē par.","Kustīb…” / German “über” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "über",
  "lv": "Virs • Par",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Virs • Par",
    "explanation": [
      "Hoofdidee: über betekent boven of over, afhankelijk van de context.",
      "Als het gaat om locatie, betekent über vaak boven.",
      "Als het gaat om gesprek, tekst of onderwerp, betekent über over.",
      "In beweging kan über over betekenen."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lampa karājas virs galda."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Mēs runājam par laiku."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Bērns skrien pāri ielai."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Es priecājos par dāvanu."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "boven / over",
        "example": "Wir sprechen über das Wetter."
      },
      {
        "word": "auf",
        "meaning": "op een oppervlak",
        "example": "Das Buch liegt auf dem Tisch."
      },
      {
        "word": "unter",
        "meaning": "onder",
        "example": "Die Tasche ist unter dem Tisch."
      },
      {
        "word": "von",
        "meaning": "van / over vanuit een bron",
        "example": "Ich höre von dir."
      }
    ],
    "tip": {
      "text": "Atceries: tēma sarunā → über; virs galda → über."
    },
    "important": [
      "über is niet alleen een plaatsaanduiding.",
      "sprechen über betekent \"praten over\"."
    ]
  },
  "index": 608
}
```

---

## Finding 30

**Audit ID:** `LRB073-0030`
**Finding Stable ID:** `g2/a1/nl|Uhr|idx:698|study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `Uhr|idx:698`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-uhr","layout":"standardStudy","translation":"Pulkstenis","explanation":["Hoofdidee: Klok of horloge. Ook het uur aanduiden: Es ist acht Uhr.","Die Uhr galvenokārt nozīmē: ierīce vai laiks pulkstenī.","Vaak gebruikt voor: specifiek tijdstip.","Die Uhr nozīmē pulksteni — ierīci vai laiku pulkstenī (Es ist acht Uhr, meine Uhr)."],"examples":[{"de":"Es ist acht Uhr.","lv":"Ir astoņi (pulksten astoņi)."},{"de":"Es ist acht Uhr.","lv":"Ir astoņi (pulksten astoņi)."},{"de":"Meine Uhr ist kaputt.","lv":"Mans pulkstenis ir salūzis."},{"de":"Es ist acht Uhr.","lv":"Ir astoņi."},{"de":"Es ist acht Uhr.","lv":"Het is acht uur (acht uur 's ochtends)."},{"de":"die Uhr","lv":"Ierīce/laiks pulkstenī • Die Zeit"}],"tip":["Klok of horloge. Ook het uur aanduiden: Es ist acht Uhr.","Gebruik die Uhr wanneer de context bij deze betekenis past."],"important":["die Uhr: apparaat (meine Uhr) of tijd (acht Uhr).","die Uhr: controleer de context vóór gebruik."],"sectionAccents":{"explanation":{"blue":["Uhr"],"purple":["pulkstenis"]},"examples":[{"de":{"blue":["uhr"]},"lv":{"purple":["pulksten"]}},{"de":{"blue":["uhr"]},"lv":{"purple":["pulksten"]}},{"de":{"blue":["uhr"]},"lv":{"purple":["pulkstenis"]}},{"de":{"blue":["uhr"]},"lv":{}},{"de":{"blue":["uhr"]},"lv":{"purple":["pulksten"]}},{"de":{"blue":["die Uhr","uhr"]},"lv":{"purple":["pulkstenī"]}}],"tip":[{"purple":["pulkstenis"]}],"important":[{"blue":["die Uhr"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Uhr","lv":"Pulkstenis","level":"A1","de_article":"die","de_plural":"die Uhren","study":{"id":"a1-uhr","layout":"standardStudy","translation":"klok • uur","explanation":["Hoofdidee: klok of horloge; ook voor de aanduiding van het uur, zoals Es ist acht Uhr.","die Uhr betekent een klok of horloge, of een tijdstip op de klok.","Het wordt vaak gebruikt voor een exact tijdstip.","die Uhr betekent een tijdmeetinstrument of een tijdstip."],"examples":[{"de":"Es ist acht Uhr.","lv":"Het is acht uur."},{"de":"Es ist acht Uhr.","lv":"Het is acht uur."},{"de":"Meine Uhr ist kaputt.","lv":"Mijn horloge is kapot."},{"de":"Es ist acht Uhr.","lv":"Het is acht uur."},{"de":"Es ist acht Uhr.","lv":"Het is acht uur."},{"de":"die Uhr","lv":"klok/horloge of tijdstip • die Zeit = tijd"}],"tip":["Klok of horloge. Ook het uur aanduiden: Es ist acht Uhr.","Gebruik die Uhr wanneer de context bij deze betekenis past."],"important":["die Uhr: apparaat (meine Uhr) of tijd (acht Uhr).","die Uhr: controleer de context vóór gebruik."]}}
**Note:** PENDING — On nl card Uhr|idx:698, the finding spans study; the captured production value begins “{"study.translation":"Pulkstenis","study.explanation":"[\"Hoofdidee: Klok of horloge. Ook het uur aanduiden: Es ist acht Uhr.\",\"Die Uhr galvenokārt nozīmē: ierīce vai laiks pulkstenī.\",\…”. Review the listed subfields separately against Latvian “pulkstenis” / German “Uhr” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "Pulkstenis",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "klok • uur",
    "explanation": [
      "Hoofdidee: klok of horloge; ook voor de aanduiding van het uur, zoals Es ist acht Uhr.",
      "die Uhr betekent een klok of horloge, of een tijdstip op de klok.",
      "Het wordt vaak gebruikt voor een exact tijdstip.",
      "die Uhr betekent een tijdmeetinstrument of een tijdstip."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Het is acht uur."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Het is acht uur."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Mijn horloge is kapot."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Het is acht uur."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Het is acht uur."
      },
      {
        "de": "die Uhr",
        "lv": "klok/horloge of tijdstip • die Zeit = tijd"
      }
    ],
    "tip": [
      "Klok of horloge. Ook het uur aanduiden: Es ist acht Uhr.",
      "Gebruik die Uhr wanneer de context bij deze betekenis past."
    ],
    "important": [
      "die Uhr: apparaat (meine Uhr) of tijd (acht Uhr).",
      "die Uhr: controleer de context vóór gebruik."
    ]
  },
  "index": 698
}
```

---

## Finding 31

**Audit ID:** `LRB073-0031`
**Finding Stable ID:** `g2/a1/nl|um|idx:611|study.explanation, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `um|idx:611`
**Field / path:** `study.explanation, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: um betekent vaak het uur met tijd of om/rond met plaats.\",\"Met een exact tijdstip betekent um uur.\",\"Met een plaats betekent um om of rond.\",\"In de uitdrukking um ... zu helpt het het doel uit te drukken: om.\"]","study.important":"[\"um met tijd betekent meestal \\\"uur\\\".\",\"um ... zu betekent vaak \\\"om ...\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"um","lv":"Ap • Pulksten","level":"A1","study":{"id":"a1-um","layout":"standardStudy","translation":"Ap • Pulksten","explanation":["Hoofdidee: um betekent bij een tijdstip vaak om en bij een plaats om of rondom.","Bij een exact tijdstip betekent um om.","Bij een plaats betekent um om of rondom.","In de constructie um ... zu helpt het een doel uit te drukken: om te."],"examples":[{"de":"Ich komme um acht Uhr.","lv":"Es atnākšu pulksten astoņos."},{"de":"Wir sitzen um den Tisch.","lv":"Mēs sēžam ap galdu."},{"de":"Er geht um die Ecke.","lv":"Viņš iet ap stūri."},{"de":"Ich lerne, um Deutsch zu sprechen.","lv":"Es mācos, lai runātu vāciski."}],"comparison":[{"word":"um","meaning":"Pulksten / ap / lai","example":"Ich komme um acht."},{"word":"am","meaning":"Dienā / pie","example":"Am Montag komme ich."},{"word":"gegen","meaning":"Ap laiku / pret","example":"Ich komme gegen acht."},{"word":"für","meaning":"Priekš / par labu","example":"Das ist für dich."}],"tip":{"text":"Atceries: um acht = pulksten astoņos."},"important":["um met tijd betekent meestal \"uur\".","um ... zu betekent vaak \"om ...\"."]}}
**Note:** PENDING — On nl card um|idx:611, the finding spans study.explanation, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: um betekent vaak het uur met tijd of om/rond met plaats.\",\"Met een exact tijdstip betekent um uur.\",\"Met een plaats betekent um om of rond.\",\"In de…”. Review the listed subfields separately against Latvian “["Galvenā doma: um ļoti bieži nozīmē pulksten ar laiku vai ap/apkārt ar vietu.","Ar precīzu laiku um nozīmē pulksten.","Ar vietu um nozīmē ap vai apkārt.","Frāzē um ... zu tas palīdz izteik…” / German “um” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "um",
  "lv": "Ap • Pulksten",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Ap • Pulksten",
    "explanation": [
      "Hoofdidee: um betekent bij een tijdstip vaak om en bij een plaats om of rondom.",
      "Bij een exact tijdstip betekent um om.",
      "Bij een plaats betekent um om of rondom.",
      "In de constructie um ... zu helpt het een doel uit te drukken: om te."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Es atnākšu pulksten astoņos."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Mēs sēžam ap galdu."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Viņš iet ap stūri."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Es mācos, lai runātu vāciski."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "Pulksten / ap / lai",
        "example": "Ich komme um acht."
      },
      {
        "word": "am",
        "meaning": "Dienā / pie",
        "example": "Am Montag komme ich."
      },
      {
        "word": "gegen",
        "meaning": "Ap laiku / pret",
        "example": "Ich komme gegen acht."
      },
      {
        "word": "für",
        "meaning": "Priekš / par labu",
        "example": "Das ist für dich."
      }
    ],
    "tip": {
      "text": "Atceries: um acht = pulksten astoņos."
    },
    "important": [
      "um met tijd betekent meestal \"uur\".",
      "um ... zu betekent vaak \"om ...\"."
    ]
  },
  "index": 611
}
```

---

## Finding 32

**Audit ID:** `LRB073-0032`
**Finding Stable ID:** `g2/a1/nl|unter|idx:615|study.explanation, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `unter|idx:615`
**Field / path:** `study.explanation, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: unter betekent onder of tussen, afhankelijk van de context.\",\"Als iets onder een tafel, stoel of ander voorwerp staat, gebruik je unter.\",\"Als het gaat om een groep mensen, kan unter tussen betekenen.\",\"Het is het tegenovergestelde van het woord über, wat betreft richting omhoog/omlaag.\"]","study.important":"[\"unter kan ook \\\"tussen\\\" betekenen, vooral met mensen of groepen.\",\"unter en über zijn vaak tegengesteld in ruimtelijke zin.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"unter","lv":"Zem","level":"A1","study":{"id":"a1-unter","layout":"standardStudy","translation":"Zem","explanation":["Hoofdidee: unter betekent onder of tussen, afhankelijk van de context.","Als iets zich onder een tafel, stoel of ander voorwerp bevindt, gebruik je unter.","Bij een groep mensen kan unter tussen betekenen.","Bij ruimtelijke richting is het het tegenovergestelde van über."],"examples":[{"de":"Die Tasche ist unter dem Tisch.","lv":"Soma ir zem galda."},{"de":"Die Katze liegt unter dem Stuhl.","lv":"Kaķis guļ zem krēsla."},{"de":"Unter Freunden sagt man das so.","lv":"Draugu starpā tā saka."},{"de":"Die Lampe hängt über dem Tisch.","lv":"Lampa karājas virs galda."}],"comparison":[{"word":"unter","meaning":"Zem / starp","example":"Die Tasche ist unter dem Tisch."},{"word":"über","meaning":"Virs / par","example":"Die Lampe hängt über dem Tisch."},{"word":"zwischen","meaning":"Starp divām lietām","example":"Zwischen den Häusern."},{"word":"auf","meaning":"Uz virsmas","example":"Auf dem Tisch."}],"tip":{"text":"Atceries: zem galda → unter dem Tisch."},"important":["unter kan ook \"tussen\" betekenen, vooral met mensen of groepen.","unter en über zijn vaak tegengesteld in ruimtelijke zin."]}}
**Note:** PENDING — On nl card unter|idx:615, the finding spans study.explanation, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: unter betekent onder of tussen, afhankelijk van de context.\",\"Als iets onder een tafel, stoel of ander voorwerp staat, gebruik je unter.\",\"Als het ga…”. Review the listed subfields separately against Latvian “["Galvenā doma: unter nozīmē zem vai starp atkarībā no konteksta.","Ja kaut kas atrodas zem galda, krēsla vai cita priekšmeta, lieto unter.","Ja runa ir par cilvēku grupu, unter var nozīmēt…” / German “unter” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "unter",
  "lv": "Zem",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "Zem",
    "explanation": [
      "Hoofdidee: unter betekent onder of tussen, afhankelijk van de context.",
      "Als iets zich onder een tafel, stoel of ander voorwerp bevindt, gebruik je unter.",
      "Bij een groep mensen kan unter tussen betekenen.",
      "Bij ruimtelijke richting is het het tegenovergestelde van über."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Soma ir zem galda."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Kaķis guļ zem krēsla."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Draugu starpā tā saka."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lampa karājas virs galda."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "Zem / starp",
        "example": "Die Tasche ist unter dem Tisch."
      },
      {
        "word": "über",
        "meaning": "Virs / par",
        "example": "Die Lampe hängt über dem Tisch."
      },
      {
        "word": "zwischen",
        "meaning": "Starp divām lietām",
        "example": "Zwischen den Häusern."
      },
      {
        "word": "auf",
        "meaning": "Uz virsmas",
        "example": "Auf dem Tisch."
      }
    ],
    "tip": {
      "text": "Atceries: zem galda → unter dem Tisch."
    },
    "important": [
      "unter kan ook \"tussen\" betekenen, vooral met mensen of groepen.",
      "unter en über zijn vaak tegengesteld in ruimtelijke zin."
    ]
  },
  "index": 615
}
```

---

## Finding 33

**Audit ID:** `LRB073-0033`
**Finding Stable ID:** `g2/a1/nl|Urlaub|idx:695|study.explanation; study.tip; study.important; study.comparison|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `Urlaub|idx:695`
**Field / path:** `study.explanation; study.tip; study.important; study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: alleen enkelvoud. Vakantie van werk — altijd enkelvoud.\",\"Der Urlaub galvenokārt nozīmē: brīvais laiks no darba.\",\"Vaak gekenmerkt door: alleen enkelvoud.\",\"Der Urlaub ir tikai vienskaitlis — atvaļinājums no darba (im Urlaub).\"]","study.tip":"[\"alleen enkelvoud. Vakantie van werk — altijd enkelvoud.\",\"Gebruik der Urlaub wanneer de context bij deze betekenis past.\"]","study.important":"[\"Niet correct: die Ferie, der Urlaube (A1-niveau).\",\"Urlaub: im Urlaub sein / Urlaub machen.\",\"Onjuist: die Urlaube → Juist: der Urlaub\",\"Werk: der Urlaub (alleen enkelvoud).\"]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"Atvaļinājums no darba (tikai vsk.)\",\"example\":\"Mein Vater ist im Urlaub. – Mijn vader is in vakantie.\"},{\"word\":\"die Ferien\",\"meaning\":\"Skolas/studiju brīvlaiks (tikai dsk.)\",\"example\":\"Die Kinder haben Ferien. – De kinderen hebben vakantie.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Urlaub","lv":"Atvaļinājums","level":"A1","de_article":"der","study":{"id":"a1-urlaub","layout":"standardStudy","translation":"Atvaļinājums","explanation":["Hoofdidee: vakantie of verlof van het werk; in deze betekenis alleen enkelvoud.","der Urlaub betekent vooral vrije tijd van het werk.","Het wordt in deze betekenis alleen in het enkelvoud gebruikt.","der Urlaub is vakantie of verlof van het werk, zoals in im Urlaub."],"examples":[{"de":"Mein Vater ist im Urlaub.","lv":"Mans tēvs ir atvaļinājumā."},{"de":"Mein Vater ist im Urlaub.","lv":"Mans tēvs ir atvaļinājumā."},{"de":"Nächste Woche habe ich Urlaub.","lv":"Nākamnedēļ man ir atvaļinājums."},{"de":"Wir machen Urlaub in Spanien.","lv":"Mēs pavadām atvaļinājumu Spānijā."},{"de":"im Urlaub","lv":"Atvaļinājumā (darbs)."}],"comparison":[{"word":"der Urlaub","meaning":"vakantie / verlof van het werk (enkelvoud)","example":"Mein Vater ist im Urlaub. – Mijn vader is met vakantie."},{"word":"die Ferien","meaning":"school- of studievakantie (meervoud)","example":"Die Kinder haben Ferien. – De kinderen hebben vakantie."}],"tip":["alleen enkelvoud. Vakantie van werk — altijd enkelvoud.","Gebruik der Urlaub wanneer de context bij deze betekenis past."],"important":["Niet correct: die Ferie, der Urlaube (A1-niveau).","Urlaub: im Urlaub sein / Urlaub machen.","Onjuist: die Urlaube → Juist: der Urlaub","Werk: der Urlaub (alleen enkelvoud)."]}}
**Note:** PENDING — On nl card Urlaub|idx:695, the finding spans study.explanation; study.tip; study.important; study.comparison; the captured production value begins “{"study.explanation":"[\"Hoofdidee: alleen enkelvoud. Vakantie van werk — altijd enkelvoud.\",\"Der Urlaub galvenokārt nozīmē: brīvais laiks no darba.\",\"Vaak gekenmerkt door: alleen enkel…”. Review the listed subfields separately against Latvian “atvaļinājums” / German “Urlaub” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

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
      "Hoofdidee: vakantie of verlof van het werk; in deze betekenis alleen enkelvoud.",
      "der Urlaub betekent vooral vrije tijd van het werk.",
      "Het wordt in deze betekenis alleen in het enkelvoud gebruikt.",
      "der Urlaub is vakantie of verlof van het werk, zoals in im Urlaub."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Mans tēvs ir atvaļinājumā."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Mans tēvs ir atvaļinājumā."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Nākamnedēļ man ir atvaļinājums."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Mēs pavadām atvaļinājumu Spānijā."
      },
      {
        "de": "im Urlaub",
        "lv": "Atvaļinājumā (darbs)."
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "vakantie / verlof van het werk (enkelvoud)",
        "example": "Mein Vater ist im Urlaub. – Mijn vader is met vakantie."
      },
      {
        "word": "die Ferien",
        "meaning": "school- of studievakantie (meervoud)",
        "example": "Die Kinder haben Ferien. – De kinderen hebben vakantie."
      }
    ],
    "tip": [
      "alleen enkelvoud. Vakantie van werk — altijd enkelvoud.",
      "Gebruik der Urlaub wanneer de context bij deze betekenis past."
    ],
    "important": [
      "Niet correct: die Ferie, der Urlaube (A1-niveau).",
      "Urlaub: im Urlaub sein / Urlaub machen.",
      "Onjuist: die Urlaube → Juist: der Urlaub",
      "Werk: der Urlaub (alleen enkelvoud)."
    ]
  },
  "index": 695
}
```

---

## Finding 34

**Audit ID:** `LRB073-0034`
**Finding Stable ID:** `g2/a1/nl|verstehen|idx:621|study.explanation, study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `verstehen|idx:621`
**Field / path:** `study.explanation, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: verstehen betekent begrijpen.\",\"Gebruik het wanneer je een taal, persoon, tekst of situatie begrijpt.\",\"Latviski šeit parasti nevajag “prast” vai “mācēt” • Tie biežāk ir können.\",\"Een veel voorkomende uitdrukking is Ich verstehe. = Ik begrijp het.\"]","study.important":"[\"verstehen is niet het hoofdwoord voor de betekenis \\\"kunnen\\\".\",\"Ich verstehe Deutsch betekent \\\"ik spreek/begrijp Duits\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"verstehen","lv":"Saprast","level":"A1","study":{"id":"a1-verstehen","layout":"standardStudy","translation":"Saprast","explanation":["Hoofdidee: verstehen betekent begrijpen.","Je gebruikt het wanneer je een taal, persoon, tekst of situatie begrijpt.","Voor kunnen of in staat zijn gebruik je doorgaans können, niet verstehen.","Een veelgebruikte uitdrukking is Ich verstehe. = Ik begrijp het."],"examples":[{"de":"Ich verstehe dich.","lv":"Es tevi saprotu."},{"de":"Verstehst du Deutsch?","lv":"Vai tu saproti vāciski?"},{"de":"Ich verstehe das nicht.","lv":"Es to nesaprotu."},{"de":"Ich kann Deutsch sprechen.","lv":"Es protu runāt vāciski."}],"comparison":[{"word":"verstehen","meaning":"Saprast","example":"Ich verstehe dich."},{"word":"können","meaning":"Varēt / prast","example":"Ich kann schwimmen."},{"word":"wissen","meaning":"Zināt faktu","example":"Ich weiß das."},{"word":"kennen","meaning":"Pazīt","example":"Ich kenne ihn."}],"tip":{"text":"Atceries: saprast tekstu/cilvēku → verstehen; prast kaut ko darīt → können."},"important":["verstehen is niet het hoofdwoord voor de betekenis \"kunnen\".","Ich verstehe Deutsch betekent \"ik spreek/begrijp Duits\"."]}}
**Note:** PENDING — On nl card verstehen|idx:621, the finding spans study.explanation, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: verstehen betekent begrijpen.\",\"Gebruik het wanneer je een taal, persoon, tekst of situatie begrijpt.\",\"Latviski šeit parasti nevajag “prast” vai “mā…”. Review the listed subfields separately against Latvian “["Galvenā doma: verstehen nozīmē saprast.","To lieto, ja saproti valodu, cilvēku, tekstu vai situāciju.","Latviski šeit parasti nevajag “prast” vai “mācēt”; tie biežāk ir können.","Ļoti bie…” / German “verstehen” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "verstehen",
  "lv": "Saprast",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "Saprast",
    "explanation": [
      "Hoofdidee: verstehen betekent begrijpen.",
      "Je gebruikt het wanneer je een taal, persoon, tekst of situatie begrijpt.",
      "Voor kunnen of in staat zijn gebruik je doorgaans können, niet verstehen.",
      "Een veelgebruikte uitdrukking is Ich verstehe. = Ik begrijp het."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Es tevi saprotu."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Vai tu saproti vāciski?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Es to nesaprotu."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Es protu runāt vāciski."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "Saprast",
        "example": "Ich verstehe dich."
      },
      {
        "word": "können",
        "meaning": "Varēt / prast",
        "example": "Ich kann schwimmen."
      },
      {
        "word": "wissen",
        "meaning": "Zināt faktu",
        "example": "Ich weiß das."
      },
      {
        "word": "kennen",
        "meaning": "Pazīt",
        "example": "Ich kenne ihn."
      }
    ],
    "tip": {
      "text": "Atceries: saprast tekstu/cilvēku → verstehen; prast kaut ko darīt → können."
    },
    "important": [
      "verstehen is niet het hoofdwoord voor de betekenis \"kunnen\".",
      "Ich verstehe Deutsch betekent \"ik spreek/begrijp Duits\"."
    ]
  },
  "index": 621
}
```

---

## Finding 35

**Audit ID:** `LRB073-0035`
**Finding Stable ID:** `g2/a1/nl|vom|idx:634|study.explanation, study.comparison, study.tip, study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `vom|idx:634`
**Field / path:** `study.explanation, study.comparison, study.tip, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Vom ir prievārda von un artikula dem saīsinājums.\",\"Volledige vorm: van de (wie?).\",\"Gebruik het met mannelijke en neutrale zelfstandig naamwoorden, wanneer je de afkomst of richting van iets aangeeft.\",\"Antwoordt op vragen van waar af? of van waar vandaan?\",\"In de praktijk wordt bijna altijd vom gebruikt in plaats van de volledige von dem.\"]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"No (konkrēta lieta, kam?)\",\"example\":\"vom Bahnhof – Vanaf het station\"},{\"word\":\"von\",\"meaning\":\"No (vispārīgi)\",\"example\":\"von mir – No manis\"},{\"word\":\"aus\",\"meaning\":\"No iekšienes / izcelsme\",\"example\":\"aus Deutschland – No Vācijas\"},{\"word\":\"ab\",\"meaning\":\"Sākot no (laiks/vieta)\",\"example\":\"ab Montag – Vanaf maandag\"},{\"word\":\"zu\",\"meaning\":\"Uz / pie (pretēja virzienam)\",\"example\":\"zum Arzt – Pie ārsta\"}]","study.tip":"[\"Onthoud: von + dem → vom (wie?).\",\"In colloquiale spraak zegt men bijna nooit von dem — gebruik vom.\"]","study.important":"[\"vom = van de, alleen met mannelijke of neutrale zelfstandig naamwoorden in wie?-geval.\",\"Geeft afkomst, bron of richting van iets specifiek aan.\",\"Voor vrouwelijke geslacht: von der Mutter, niet vom Mutter.\",\"Niet verwarren met aus (afkomst uit land) of ab (startpunt).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"vom","lv":"No","level":"A1","study":{"id":"a1-vom","layout":"standardStudy","translation":"No","explanation":["vom is de samentrekking van het voorzetsel von en het lidwoord dem.","De volledige vorm is von dem.","Je gebruikt het bij mannelijke en onzijdige zelfstandige naamwoorden om herkomst of beweging vanaf iets aan te geven.","Het antwoordt vaak op de vraag: waarvan of waarvandaan?","In de praktijk gebruikt men bijna altijd vom in plaats van von dem."],"examples":[{"de":"Ich komme vom Bahnhof.","lv":"Es nāku no stacijas."},{"de":"Das Geschenk ist vom Vater.","lv":"Dāvana ir no tēva."},{"de":"Er kommt vom Arzt.","lv":"Viņš nāk no ārsta."},{"de":"Sie fährt vom Flughafen.","lv":"Viņa brauc no lidostas."},{"de":"Das ist vom Markt.","lv":"Tas ir no tirgus."},{"de":"Wir kommen vom Fest.","lv":"Mēs nākam no svinībām."},{"de":"Er holt Milch vom Bauern.","lv":"Viņš paņem pienu no zemnieka."},{"de":"Die Nachricht ist vom Chef.","lv":"Ziņa ir no priekšnieka."}],"comparison":[{"word":"vom","meaning":"van de / vanaf het (iets bepaalds)","example":"vom Bahnhof – vanaf het station"},{"word":"von","meaning":"van (algemeen)","example":"von mir – van mij"},{"word":"aus","meaning":"uit / herkomst uit","example":"aus Deutschland – uit Duitsland"},{"word":"ab","meaning":"vanaf (tijd of plaats)","example":"ab Montag – vanaf maandag"},{"word":"zu","meaning":"naar / bij (tegengestelde richting)","example":"zum Arzt – naar de dokter"}],"tip":["Onthoud: von + dem → vom (wie?).","In colloquiale spraak zegt men bijna nooit von dem — gebruik vom."],"important":["vom = van de, alleen met mannelijke of neutrale zelfstandig naamwoorden in wie?-geval.","Geeft afkomst, bron of richting van iets specifiek aan.","Voor vrouwelijke geslacht: von der Mutter, niet vom Mutter.","Niet verwarren met aus (afkomst uit land) of ab (startpunt)."]}}
**Note:** PENDING — On nl card vom|idx:634, the finding spans study.explanation, study.comparison, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Vom ir prievārda von un artikula dem saīsinājums.\",\"Volledige vorm: van de (wie?).\",\"Gebruik het met mannelijke en neutrale zelfstandig naamwoorden, wanneer je …”. Review the listed subfields separately against Latvian “["vom ir prievārda von un artikula dem saīsinājums.","Pilnā forma: von dem (kam?).","Lieto ar vīriešu un nekatras dzimtes lietvārdiem, kad norāda izcelsmi vai virzienu no kā.","Atbild uz ja…” / German “vom” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vom",
  "lv": "No",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "No",
    "explanation": [
      "vom is de samentrekking van het voorzetsel von en het lidwoord dem.",
      "De volledige vorm is von dem.",
      "Je gebruikt het bij mannelijke en onzijdige zelfstandige naamwoorden om herkomst of beweging vanaf iets aan te geven.",
      "Het antwoordt vaak op de vraag: waarvan of waarvandaan?",
      "In de praktijk gebruikt men bijna altijd vom in plaats van von dem."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Es nāku no stacijas."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Dāvana ir no tēva."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Viņš nāk no ārsta."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Viņa brauc no lidostas."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Tas ir no tirgus."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Mēs nākam no svinībām."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Viņš paņem pienu no zemnieka."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Ziņa ir no priekšnieka."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "van de / vanaf het (iets bepaalds)",
        "example": "vom Bahnhof – vanaf het station"
      },
      {
        "word": "von",
        "meaning": "van (algemeen)",
        "example": "von mir – van mij"
      },
      {
        "word": "aus",
        "meaning": "uit / herkomst uit",
        "example": "aus Deutschland – uit Duitsland"
      },
      {
        "word": "ab",
        "meaning": "vanaf (tijd of plaats)",
        "example": "ab Montag – vanaf maandag"
      },
      {
        "word": "zu",
        "meaning": "naar / bij (tegengestelde richting)",
        "example": "zum Arzt – naar de dokter"
      }
    ],
    "tip": [
      "Onthoud: von + dem → vom (wie?).",
      "In colloquiale spraak zegt men bijna nooit von dem — gebruik vom."
    ],
    "important": [
      "vom = van de, alleen met mannelijke of neutrale zelfstandig naamwoorden in wie?-geval.",
      "Geeft afkomst, bron of richting van iets specifiek aan.",
      "Voor vrouwelijke geslacht: von der Mutter, niet vom Mutter.",
      "Niet verwarren met aus (afkomst uit land) of ab (startpunt)."
    ]
  },
  "index": 634
}
```

---

## Finding 36

**Audit ID:** `LRB073-0036`
**Finding Stable ID:** `g2/a1/nl|vor|idx:636|study.explanation, study.examples, study.comparison, study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `vor|idx:636`
**Field / path:** `study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: vor betekent voor in tijd of ervoor in plaats.\",\"Als het gaat om tijd, betekent vor voor/vóór.\",\"Als het gaat om plaats, betekent vor ervoor of bij.\",\"Met de kloktijaanduiding betekent vor \\\"tot\\\", bijvoorbeeld vijf voor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Pirms ēšanas es mazgāju rokas.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Auto stāv mājas priekšā.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Het is vijf voor acht.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Pēc ēšanas mēs ejam pastaigāties.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Pirms / priekšā\",\"example\":\"Vor dem Essen...\"},{\"word\":\"nach\",\"meaning\":\"Pēc / uz\",\"example\":\"Nach dem Essen...\"},{\"word\":\"neben\",\"meaning\":\"Blakus\",\"example\":\"Neben dem Haus.\"},{\"word\":\"hinter\",\"meaning\":\"Aiz\",\"example\":\"Hinter dem Haus.\"}]","study.important":"[\"vor kan zowel tijd als plaats zijn.\",\"vor dem Essen = vóór het eten; vor dem Haus = voor het huis.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"vor","lv":"Pirms • Priekšā","level":"A1","study":{"id":"a1-vor","layout":"standardStudy","translation":"Pirms • Priekšā","explanation":["Hoofdidee: vor betekent voor in tijd of ervoor in plaats.","Als het gaat om tijd, betekent vor voor/vóór.","Als het gaat om plaats, betekent vor ervoor of bij.","Met de kloktijaanduiding betekent vor \"tot\", bijvoorbeeld vijf voor acht."],"examples":[{"de":"Vor dem Essen wasche ich die Hände.","lv":"Voor het eten was ik mijn handen."},{"de":"Das Auto steht vor dem Haus.","lv":"De auto staat voor het huis."},{"de":"Es ist fünf vor acht.","lv":"Het is vijf voor acht."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Na het eten gaan we wandelen."}],"comparison":[{"word":"vor","meaning":"voor / vóór","example":"Vor dem Essen..."},{"word":"nach","meaning":"na / naar","example":"Nach dem Essen..."},{"word":"neben","meaning":"naast","example":"Neben dem Haus."},{"word":"hinter","meaning":"achter","example":"Hinter dem Haus."}],"tip":{"text":"Atceries: pirms laikā, priekšā vietā → vor."},"important":["vor kan zowel tijd als plaats zijn.","vor dem Essen = vóór het eten; vor dem Haus = voor het huis."]}}
**Note:** PENDING — On nl card vor|idx:636, the finding spans study.explanation, study.examples, study.comparison, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: vor betekent voor in tijd of ervoor in plaats.\",\"Als het gaat om tijd, betekent vor voor/vóór.\",\"Als het gaat om plaats, betekent vor ervoor of bij.\…”. Review the listed subfields separately against Latvian “["Galvenā doma: vor nozīmē pirms laikā vai priekšā vietā.","Ja runa ir par laiku, vor nozīmē pirms.","Ja runa ir par vietu, vor nozīmē priekšā vai pie.","Pulksteņa laikā vor nozīmē “līdz”, …” / German “vor” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "Pirms • Priekšā",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Pirms • Priekšā",
    "explanation": [
      "Hoofdidee: vor betekent voor in tijd of ervoor in plaats.",
      "Als het gaat om tijd, betekent vor voor/vóór.",
      "Als het gaat om plaats, betekent vor ervoor of bij.",
      "Met de kloktijaanduiding betekent vor \"tot\", bijvoorbeeld vijf voor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Voor het eten was ik mijn handen."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "De auto staat voor het huis."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Het is vijf voor acht."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Na het eten gaan we wandelen."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "voor / vóór",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "na / naar",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "naast",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "achter",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Atceries: pirms laikā, priekšā vietā → vor."
    },
    "important": [
      "vor kan zowel tijd als plaats zijn.",
      "vor dem Essen = vóór het eten; vor dem Haus = voor het huis."
    ]
  },
  "index": 636
}
```

---

## Finding 37

**Audit ID:** `LRB073-0037`
**Finding Stable ID:** `g2/a1/nl|was|idx:644|study.explanation, study.examples, study.tip, study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `was|idx:644`
**Field / path:** `study.explanation, study.examples, study.tip, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: was is het vraagwoord voor dingen en gebeurtenissen — in het Nederlands is dat wat of welke, afhankelijk van het zinsdeelstuk.\",\"Was jautā par lietām, notikumiem un faktiem, nevis par personām.\",\"In het Duits verandert was niet naar geval — het ziet er altijd hetzelfde uit: was.\",\"Als was het onderwerp (subject) is, vertaal je het in het Nederlands met wat (Was ist das? = Wat is het?).\",\"Als was het werkwoordscomplement (object) is, vertaal je het in het Nederlands met wat (Was machst du? = Wat doe je?).\",\"Over personen vraag je met wer (wie), niet was.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Wat is het?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Wat gebeurde er?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Wat doe je nu?\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Wat wil je drinken?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Wat betekent dit woord?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Wat is je favoriete gerecht?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Wat zei je?\"}]","study.tip":"[\"was verandert zelf niet — in het Duits is het altijd was; in het Nederlands kies je was of wat afhankelijk van het zinsdeelstuk.\",\"Snel truucje: als je op de vraag kunt antwoorden met 'Dat is ...', gebruik je was; als het antwoord na het werkwoord als complement komt, gebruik je wat.\"]","study.important":"[\"was vraagt naar dingen, gebeurtenissen en feiten — nooit over personen.\",\"Over personen vraag je met wer (wie), niet was.\",\"was für (ein/eine) betekent welk/wat voor en vraagt naar kwaliteit of soort (Was für ein Film ist das? = Wat voor film is het?).\",\"Onjuist: Wer ist passiert? → Juist: Was ist passiert?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"was","lv":"Kas • Ko","level":"A1","study":{"id":"a1-was","layout":"standardStudy","translation":"Kas • Ko","explanation":["Hoofdidee: was is het vraagwoord voor dingen en gebeurtenissen; in het Nederlands is dat wat.","was vraagt naar dingen, gebeurtenissen en feiten, niet naar personen.","In het Duits verandert was niet van vorm per naamval.","Als was het onderwerp is, vertaal je het met wat: Was ist das? = Wat is dat?","Als was het lijdend voorwerp is, vertaal je het eveneens met wat: Was machst du? = Wat doe je?","Naar personen vraag je met wer, niet met was."],"examples":[{"de":"Was ist das?","lv":"Wat is het?"},{"de":"Was ist passiert?","lv":"Wat gebeurde er?"},{"de":"Was machst du gerade?","lv":"Wat doe je nu?"},{"de":"Was möchtest du trinken?","lv":"Wat wil je drinken?"},{"de":"Was bedeutet dieses Wort?","lv":"Wat betekent dit woord?"},{"de":"Was ist dein Lieblingsessen?","lv":"Wat is je favoriete gerecht?"},{"de":"Was hast du gesagt?","lv":"Wat zei je?"}],"tip":["was verandert niet van vorm; in het Nederlands is de vertaling doorgaans wat.","Onthoud: was voor dingen en gebeurtenissen, wer voor personen."],"important":["was vraagt naar dingen, gebeurtenissen en feiten — nooit over personen.","Over personen vraag je met wer (wie), niet was.","was für (ein/eine) betekent welk/wat voor en vraagt naar kwaliteit of soort (Was für ein Film ist das? = Wat voor film is het?).","Onjuist: Wer ist passiert? → Juist: Was ist passiert?"]}}
**Note:** PENDING — On nl card was|idx:644, the finding spans study.explanation, study.examples, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: was is het vraagwoord voor dingen en gebeurtenissen — in het Nederlands is dat wat of welke, afhankelijk van het zinsdeelstuk.\",\"Was jautā par lietām, …”. Review the listed subfields separately against Latvian “["Galvenā doma: was ir jautājamvārds par lietām un notikumiem — latviski tas ir kas vai ko, atkarībā no teikuma daļas.","was jautā par lietām, notikumiem un faktiem, nevis par personām.","V…” / German “was” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "was",
  "lv": "Kas • Ko",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Kas • Ko",
    "explanation": [
      "Hoofdidee: was is het vraagwoord voor dingen en gebeurtenissen; in het Nederlands is dat wat.",
      "was vraagt naar dingen, gebeurtenissen en feiten, niet naar personen.",
      "In het Duits verandert was niet van vorm per naamval.",
      "Als was het onderwerp is, vertaal je het met wat: Was ist das? = Wat is dat?",
      "Als was het lijdend voorwerp is, vertaal je het eveneens met wat: Was machst du? = Wat doe je?",
      "Naar personen vraag je met wer, niet met was."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Wat is het?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Wat gebeurde er?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Wat doe je nu?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Wat wil je drinken?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Wat betekent dit woord?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Wat is je favoriete gerecht?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Wat zei je?"
      }
    ],
    "tip": [
      "was verandert niet van vorm; in het Nederlands is de vertaling doorgaans wat.",
      "Onthoud: was voor dingen en gebeurtenissen, wer voor personen."
    ],
    "important": [
      "was vraagt naar dingen, gebeurtenissen en feiten — nooit over personen.",
      "Over personen vraag je met wer (wie), niet was.",
      "was für (ein/eine) betekent welk/wat voor en vraagt naar kwaliteit of soort (Was für ein Film ist das? = Wat voor film is het?).",
      "Onjuist: Wer ist passiert? → Juist: Was ist passiert?"
    ]
  },
  "index": 644
}
```

---

## Finding 38

**Audit ID:** `LRB073-0038`
**Finding Stable ID:** `g2/a1/nl|wenn|idx:655|study.explanation, study.comparison, study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `wenn|idx:655`
**Field / path:** `study.explanation, study.comparison, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: wenn betekent als of wanneer, afhankelijk van de situatie.\",\"Als het gaat om een voorwaarde, vertaal je het als als.\",\"Als het gaat om herhaalde of algemene tijd, vertaal je het als wanneer.\",\"Na wenn staat het werkwoord meestal aan het einde van de Duitse zin.\"]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Ja / kad\",\"example\":\"Als je tijd hebt...\"},{\"word\":\"ob\",\"meaning\":\"Vai netiešā jautājumā\",\"example\":\"Ik weet niet of...\"},{\"word\":\"wann\",\"meaning\":\"Kad jautājumā\",\"example\":\"Wanneer kom je?\"},{\"word\":\"weil\",\"meaning\":\"Jo\",\"example\":\"Ik blijf, omdat ik ziek ben.\"}]","study.important":"[\"wenn en wann zijn niet hetzelfde.\",\"Wann kommst du? is een vraag. Wenn du kommst... is een voorwaarde/tijd.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"wenn","lv":"Ja • Kad","level":"A1","study":{"id":"a1-wenn","layout":"standardStudy","translation":"Ja • Kad","explanation":["Hoofdidee: wenn betekent als of wanneer, afhankelijk van de situatie.","Als het gaat om een voorwaarde, vertaal je het als als.","Als het gaat om herhaalde of algemene tijd, vertaal je het als wanneer.","Na wenn staat het werkwoord meestal aan het einde van de Duitse zin."],"examples":[{"de":"Wenn du Zeit hast, komm vorbei.","lv":"Ja tev ir laiks, iegriezies."},{"de":"Wenn es regnet, bleibe ich zu Hause.","lv":"Ja līst, es palieku mājās."},{"de":"Wenn ich müde bin, trinke ich Kaffee.","lv":"Kad esmu noguris, es dzeru kafiju."},{"de":"Ich weiß nicht, ob er kommt.","lv":"Es nezinu, vai viņš nāks."}],"comparison":[{"word":"wenn","meaning":"als / wanneer","example":"Als je tijd hebt..."},{"word":"ob","meaning":"of in een indirecte vraag","example":"Ik weet niet of..."},{"word":"wann","meaning":"wanneer in een vraag","example":"Wanneer kom je?"},{"word":"weil","meaning":"omdat","example":"Ik blijf thuis omdat ik ziek ben."}],"tip":{"text":"Atceries: nosacījums → wenn; jautājums “kad?” → wann."},"important":["wenn en wann zijn niet hetzelfde.","Wann kommst du? is een vraag. Wenn du kommst... is een voorwaarde/tijd."]}}
**Note:** PENDING — On nl card wenn|idx:655, the finding spans study.explanation, study.comparison, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: wenn betekent als of wanneer, afhankelijk van de situatie.\",\"Als het gaat om een voorwaarde, vertaal je het als als.\",\"Als het gaat om herhaalde of a…”. Review the listed subfields separately against Latvian “["Galvenā doma: wenn nozīmē ja vai kad atkarībā no situācijas.","Ja runa ir par nosacījumu, tulko kā ja.","Ja runa ir par atkārtotu vai vispārīgu laiku, tulko kā kad.","Pēc wenn darbības vā…” / German “wenn” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wenn",
  "lv": "Ja • Kad",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Ja • Kad",
    "explanation": [
      "Hoofdidee: wenn betekent als of wanneer, afhankelijk van de situatie.",
      "Als het gaat om een voorwaarde, vertaal je het als als.",
      "Als het gaat om herhaalde of algemene tijd, vertaal je het als wanneer.",
      "Na wenn staat het werkwoord meestal aan het einde van de Duitse zin."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Ja tev ir laiks, iegriezies."
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
        "lv": "Es nezinu, vai viņš nāks."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "als / wanneer",
        "example": "Als je tijd hebt..."
      },
      {
        "word": "ob",
        "meaning": "of in een indirecte vraag",
        "example": "Ik weet niet of..."
      },
      {
        "word": "wann",
        "meaning": "wanneer in een vraag",
        "example": "Wanneer kom je?"
      },
      {
        "word": "weil",
        "meaning": "omdat",
        "example": "Ik blijf thuis omdat ik ziek ben."
      }
    ],
    "tip": {
      "text": "Atceries: nosacījums → wenn; jautājums “kad?” → wann."
    },
    "important": [
      "wenn en wann zijn niet hetzelfde.",
      "Wann kommst du? is een vraag. Wenn du kommst... is een voorwaarde/tijd."
    ]
  },
  "index": 655
}
```

---

## Finding 39

**Audit ID:** `LRB073-0039`
**Finding Stable ID:** `g2/a1/nl|wer|idx:656|study.explanation, study.examples, study.tip, study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `wer|idx:656`
**Field / path:** `study.explanation, study.examples, study.tip, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: wer is het vraagwoord voor personen — in het Nederlands is dat wie of welke.\",\"Wer jautā par cilvēkiem, ne par lietām vai notikumiem.\",\"Over dingen en gebeurtenissen vraag je met was, niet wer.\",\"Wer vācu valodā parasti ir teikuma priekšmets (nominatīvā) — Wer ist das? = Kas tas ir?\",\"Als je vraagt wie precies uit meerdere personen, wordt wer vaak gebruikt met von (wer von euch = wie van jullie).\",\"Wer maina formu pēc locījuma: wen (akuzatīvs), wem (datīvs), wessen (ģenitīvs) — A1 līmenī visbiežāk sastopama ir tieši forma wer.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Wat is het?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Wie ben jij?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Wat komt er vandaag?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Wie is jouw leraar?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Wie van jullie spreekt Duits?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Wie zei dat?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Wie wil koffie?\"}]","study.tip":"[\"wer vraagt naar personen (wie) — voor dingen en gebeurtenissen gebruik je was.\",\"Om te vragen wie uit meerdere personen te kiezen, gebruik je wer von... (wie van...).\"]","study.important":"[\"wer vraagt alleen naar personen, nooit naar dingen.\",\"Over dingen en gebeurtenissen vraag je met was, niet wer.\",\"wer verandert vorm naar geval: wen, wem, wessen — maar de basisvorm is wer.\",\"Onjuist: Wer ist passiert? → Juist: Was ist passiert?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"wer","lv":"Kas • Kurš","level":"A1","study":{"id":"a1-wer","layout":"standardStudy","translation":"Kas • Kurš","explanation":["Hoofdidee: wer is het vraagwoord voor personen; in het Nederlands is dat wie.","wer vraagt naar mensen, niet naar dingen of gebeurtenissen.","Naar dingen en gebeurtenissen vraag je met was, niet met wer.","wer is in het Duits meestal het onderwerp in de nominatief: Wer ist das? = Wie is dat?","Om te vragen welke persoon uit een groep bedoeld wordt, gebruik je vaak wer von: wer von euch = wie van jullie.","wer verandert per naamval: wen (accusatief), wem (datief), wessen (genitief); op A1-niveau komt vooral wer voor."],"examples":[{"de":"Wer ist das?","lv":"Wie is dat?"},{"de":"Wer bist du?","lv":"Wie ben jij?"},{"de":"Wer kommt heute?","lv":"Wie komt er vandaag?"},{"de":"Wer ist deine Lehrerin?","lv":"Wie is jouw lerares?"},{"de":"Wer von euch spricht Deutsch?","lv":"Wie van jullie spreekt Duits?"},{"de":"Wer hat das gesagt?","lv":"Wie heeft dat gezegd?"},{"de":"Wer möchte Kaffee?","lv":"Wie wil koffie?"}],"tip":["wer vraagt naar personen (wie) — voor dingen en gebeurtenissen gebruik je was.","Om te vragen wie uit meerdere personen te kiezen, gebruik je wer von... (wie van...)."],"important":["wer vraagt alleen naar personen, nooit naar dingen.","Over dingen en gebeurtenissen vraag je met was, niet wer.","wer verandert vorm naar geval: wen, wem, wessen — maar de basisvorm is wer.","Onjuist: Wer ist passiert? → Juist: Was ist passiert?"]}}
**Note:** PENDING — On nl card wer|idx:656, the finding spans study.explanation, study.examples, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Hoofdidee: wer is het vraagwoord voor personen — in het Nederlands is dat wie of welke.\",\"Wer jautā par cilvēkiem, ne par lietām vai notikumiem.\",\"Over dingen e…”. Review the listed subfields separately against Latvian “["Galvenā doma: wer ir jautājamvārds par personas identitāti — latviski tas ir kas vai kurš.","wer jautā par cilvēkiem, ne par lietām vai notikumiem.","Par lietām un notikumiem jautā ar was…” / German “wer” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

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
      "Hoofdidee: wer is het vraagwoord voor personen; in het Nederlands is dat wie.",
      "wer vraagt naar mensen, niet naar dingen of gebeurtenissen.",
      "Naar dingen en gebeurtenissen vraag je met was, niet met wer.",
      "wer is in het Duits meestal het onderwerp in de nominatief: Wer ist das? = Wie is dat?",
      "Om te vragen welke persoon uit een groep bedoeld wordt, gebruik je vaak wer von: wer von euch = wie van jullie.",
      "wer verandert per naamval: wen (accusatief), wem (datief), wessen (genitief); op A1-niveau komt vooral wer voor."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Wie is dat?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Wie ben jij?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Wie komt er vandaag?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Wie is jouw lerares?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Wie van jullie spreekt Duits?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Wie heeft dat gezegd?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Wie wil koffie?"
      }
    ],
    "tip": [
      "wer vraagt naar personen (wie) — voor dingen en gebeurtenissen gebruik je was.",
      "Om te vragen wie uit meerdere personen te kiezen, gebruik je wer von... (wie van...)."
    ],
    "important": [
      "wer vraagt alleen naar personen, nooit naar dingen.",
      "Over dingen en gebeurtenissen vraag je met was, niet wer.",
      "wer verandert vorm naar geval: wen, wem, wessen — maar de basisvorm is wer.",
      "Onjuist: Wer ist passiert? → Juist: Was ist passiert?"
    ]
  },
  "index": 656
}
```

---

## Finding 40

**Audit ID:** `LRB073-0040`
**Finding Stable ID:** `g2/a1/nl|wissen|idx:311|study.explanation; study.examples[].lv; study.comparison; study.tip; study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** nl
**Card:** `wissen|idx:311`
**Field / path:** `study.explanation; study.examples[].lv; study.comparison; study.tip; study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Hoofdidee: Weten van feiten, antwoorden of informatie.\",\"Wissen galvenokārt nozīmē: informācija/fakts.\",\"Vaak gekenmerkt door: antwoorden, gegevens.\",\"Wissen lieto, ja zini faktu, atbildi vai informāciju.\"]","study.examples[].lv":null,"study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"Zināt (faktu, informāciju)\",\"example\":\"Ich weiß, wo er wohnt. – Ik weet waar hij woont.\"},{\"word\":\"kennen\",\"meaning\":\"Pazīt (cilvēku, vietu, lietu)\",\"example\":\"Ich kenne die Stadt. – Ik ken de stad.\"}]","study.tip":"[\"wissen = weten\",\"Gebruik wissen wanneer de context bij deze betekenis past.\"]","study.important":"[\"wissen = weten van feiten.\",\"wissen = weten.\",\"Weten van feiten, antwoorden of informatie.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"wissen","lv":"Zināt","level":"A1","id":"a1-wissen","study":{"id":"a1-wissen-study","layout":"standardStudy","translation":"Zināt","explanation":["Hoofdidee: feiten, antwoorden of informatie weten.","wissen betekent vooral een feit of informatie weten.","Het gaat vaak om antwoorden of gegevens.","Je gebruikt wissen wanneer je een feit, antwoord of informatie weet."],"examples":[{"de":"Ich weiß, wo er wohnt.","lv":"Ik weet waar hij woont."},{"de":"Woher wissen Sie das?","lv":"Hoe weet u dat?"},{"de":"Ich weiß die Antwort.","lv":"Ik weet het antwoord."}],"comparison":[{"word":"wissen","meaning":"een feit of informatie weten","example":"Ich weiß, wo er wohnt. – Ik weet waar hij woont."},{"word":"kennen","meaning":"een persoon, plaats of zaak kennen","example":"Ich kenne die Stadt. – Ik ken de stad."}],"tip":["wissen = weten","Gebruik wissen wanneer de context bij deze betekenis past."],"important":["wissen = weten van feiten.","wissen = weten.","Weten van feiten, antwoorden of informatie."]}}
**Note:** PENDING — On nl card wissen|idx:311, the cited path study.explanation; study.examples[].lv; study.comparison; study.tip; study.important does not exist. For the TRANSLATION_ERROR claim concerning Latvian “zināt” / German “wissen”, identify the exact existing target field (or approve a schema addition) and its complete nl wording.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wissen",
  "lv": "Zināt",
  "level": "A1",
  "id": "a1-wissen",
  "study": {
    "id": "a1-wissen-study",
    "layout": "standardStudy",
    "translation": "Zināt",
    "explanation": [
      "Hoofdidee: feiten, antwoorden of informatie weten.",
      "wissen betekent vooral een feit of informatie weten.",
      "Het gaat vaak om antwoorden of gegevens.",
      "Je gebruikt wissen wanneer je een feit, antwoord of informatie weet."
    ],
    "examples": [
      {
        "de": "Ich weiß, wo er wohnt.",
        "lv": "Ik weet waar hij woont."
      },
      {
        "de": "Woher wissen Sie das?",
        "lv": "Hoe weet u dat?"
      },
      {
        "de": "Ich weiß die Antwort.",
        "lv": "Ik weet het antwoord."
      }
    ],
    "comparison": [
      {
        "word": "wissen",
        "meaning": "een feit of informatie weten",
        "example": "Ich weiß, wo er wohnt. – Ik weet waar hij woont."
      },
      {
        "word": "kennen",
        "meaning": "een persoon, plaats of zaak kennen",
        "example": "Ich kenne die Stadt. – Ik ken de stad."
      }
    ],
    "tip": [
      "wissen = weten",
      "Gebruik wissen wanneer de context bij deze betekenis past."
    ],
    "important": [
      "wissen = weten van feiten.",
      "wissen = weten.",
      "Weten van feiten, antwoorden of informatie."
    ]
  },
  "index": 311
}
```

---

## Finding 41

**Audit ID:** `LRB073-0041`
**Finding Stable ID:** `g2/a1/nl|Zeit|idx:699|study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** nl
**Card:** `Zeit|idx:699`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"id":"a1-zeit","layout":"standardStudy","translation":"Laiks (brīdis / laika posms)","explanation":["Hoofdidee: Tijd als concept — moment, kans, tijdsperiode.","Die Zeit galvenokārt nozīmē: brīdis, iespēja.","Vaak gekenmerkt door: abstract concept.","Die Zeit ir abstrakts jēdziens — laiks, brīdis vai iespēja (Ich habe keine Zeit)."],"examples":[{"de":"Ich habe keine Zeit.","lv":"Man nav laika."},{"de":"Ich habe keine Zeit.","lv":"Man nav laika."},{"de":"Hast du Zeit?","lv":"Vai tev ir laiks?"},{"de":"Die Zeit vergeht schnell.","lv":"De tijd gaat snel voorbij."}],"tip":["Tijd als concept — moment, kans, tijdsperiode.","Gebruik die Zeit wanneer de context bij deze betekenis past."],"important":["die Zeit: controleer de context vóór gebruik.","die Zeit: controleer de context vóór gebruik."],"sectionAccents":{"explanation":{"green":["die Zeit","zeit"],"purple":["laiks"],"yellow":["Zeit"]},"examples":[{"de":{"green":["zeit"]},"lv":{"purple":["laika"]}},{"de":{"green":["zeit"]},"lv":{"purple":["laika"]}},{"de":{"green":["zeit"]},"lv":{"purple":["laiks"]}},{"de":{"green":["die Zeit","zeit"]},"lv":{"purple":["tijd"]}}],"tip":[{"purple":["laiks"]}],"important":[{"green":["die Zeit"]}]}}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Zeit","lv":"Laiks (brīdis / laika posms)","level":"A1","de_article":"die","de_plural":"die Zeiten","study":{"id":"a1-zeit","layout":"standardStudy","translation":"tijd (moment / tijdsperiode)","explanation":["Hoofdidee: tijd als begrip, moment of tijdsperiode.","die Zeit betekent vooral tijd of een moment.","Het is een abstract begrip.","die Zeit is het abstracte begrip tijd, een moment of beschikbare tijd, zoals in Ich habe keine Zeit."],"examples":[{"de":"Ich habe keine Zeit.","lv":"Ik heb geen tijd."},{"de":"Ich habe keine Zeit.","lv":"Ik heb geen tijd."},{"de":"Hast du Zeit?","lv":"Heb je tijd?"},{"de":"Die Zeit vergeht schnell.","lv":"De tijd gaat snel voorbij."}],"tip":["Tijd als concept — moment, kans, tijdsperiode.","Gebruik die Zeit wanneer de context bij deze betekenis past."],"important":["die Zeit: controleer de context vóór gebruik.","die Zeit: controleer de context vóór gebruik."]}}
**Note:** PENDING — On nl card Zeit|idx:699, the finding spans study; the captured production value begins “{"study.translation":"Laiks (brīdis / laika posms)","study.explanation":"[\"Hoofdidee: Tijd als concept — moment, kans, tijdsperiode.\",\"Die Zeit galvenokārt nozīmē: brīdis, iespēja.\",\"V…”. Review the listed subfields separately against Latvian “laiks (brīdis / laika posms)” / German “Zeit” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Zeit",
  "de_article": "die",
  "de_plural": "die Zeiten",
  "lv": "Laiks (brīdis / laika posms)",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "tijd (moment / tijdsperiode)",
    "explanation": [
      "Hoofdidee: tijd als begrip, moment of tijdsperiode.",
      "die Zeit betekent vooral tijd of een moment.",
      "Het is een abstract begrip.",
      "die Zeit is het abstracte begrip tijd, een moment of beschikbare tijd, zoals in Ich habe keine Zeit."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Ik heb geen tijd."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Ik heb geen tijd."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Heb je tijd?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "De tijd gaat snel voorbij."
      }
    ],
    "tip": [
      "Tijd als concept — moment, kans, tijdsperiode.",
      "Gebruik die Zeit wanneer de context bij deze betekenis past."
    ],
    "important": [
      "die Zeit: controleer de context vóór gebruik.",
      "die Zeit: controleer de context vóór gebruik."
    ]
  },
  "index": 699
}
```

---

## Finding 42

**Audit ID:** `LRB073-0042`
**Finding Stable ID:** `g2/a1/nl|zum|idx:672|study.explanation, study.comparison, study.tip, study.important|UNTRANSLATED_TEXT|gpt-5.6-luna`
**Lang:** nl
**Card:** `zum|idx:672`
**Field / path:** `study.explanation, study.comparison, study.tip, study.important`
**Severity:** HIGH
**Category:** MISSING_OR_UNTRANSLATED
**CURRENT (captured scope):** {"study.explanation":"[\"Zum ir prievārda zu un artikula dem saīsinājums.\",\"Volledige vorm: naar de (wie?).\",\"Gebruik het met mannelijke en neutrale zelfstandig naamwoorden, wanneer je richting of doel aangeeft.\",\"Betekent vaak naar iets of bij iemand — naar de dokter, naar het station, bij een vriend.\",\"In de praktijk gebruik je bijna altijd zum, niet de volledige zu der.\"]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"Uz / pie (kam?)\",\"example\":\"zum Arzt – Pie ārsta\"},{\"word\":\"zur\",\"meaning\":\"Aan / bij (familie van de vrouw)\",\"example\":\"zur Schule – Uz skolu\"},{\"word\":\"zu\",\"meaning\":\"Uz / pie / pārāk\",\"example\":\"zu Hause – Mājās\"},{\"word\":\"nach\",\"meaning\":\"Uz (pilsētas/valstis)\",\"example\":\"nach Berlin – Uz Berlīni\"},{\"word\":\"bei\",\"meaning\":\"Pie (atrašanās)\",\"example\":\"beim Arzt – Pie ārsta\"}]","study.tip":"[\"Onthoud: zu + dem → zum (wie?).\",\"Voor vrouwelijke geslachtswekende woorden: zu + der → zur.\"]","study.important":"[\"zum = zu dem, alleen met mannelijke of neutrale zelfstandig naamwoorden in wie?-geval.\",\"Geeft richting of doel aan: naar de dokter, naar het station, bij een vriend.\",\"Voor vrouwelijk geslacht gebruik je zur: zur Bank, zur Post.\",\"Niet verwarren met bei (zijn bij) of nach (naar steden zonder artikel).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"zum","lv":"Uz • Pie","level":"A1","study":{"id":"a1-zum","layout":"standardStudy","translation":"Uz • Pie","explanation":["zum is de samentrekking van het voorzetsel zu en het lidwoord dem.","De volledige vorm is zu dem.","Je gebruikt het bij mannelijke en onzijdige zelfstandige naamwoorden om richting of doel aan te geven.","Het betekent vaak naar iets of naar iemand toe, bijvoorbeeld naar de dokter of naar het station.","In de praktijk gebruikt men bijna altijd zum, niet de volledige vorm zu dem."],"examples":[{"de":"Ich gehe zum Arzt.","lv":"Es eju pie ārsta."},{"de":"Wir fahren zum Bahnhof.","lv":"Mēs braucam uz staciju."},{"de":"Sie geht zum Supermarkt.","lv":"Viņa iet uz veikalu."},{"de":"Komm zum Essen!","lv":"Nāc ēst!"},{"de":"Er fährt zum Flughafen.","lv":"Viņš brauc uz lidostu."},{"de":"Wir gehen zum Konzert.","lv":"Mēs ejam uz koncertu."},{"de":"Das Geschenk ist zum Geburtstag.","lv":"Dāvana ir dzimšanas dienai."},{"de":"Ich gehe zum Friseur.","lv":"Es eju pie friziera."}],"comparison":[{"word":"zum","meaning":"naar / bij (mannelijk of onzijdig)","example":"zum Arzt – naar de dokter"},{"word":"zur","meaning":"naar / bij (vrouwelijk)","example":"zur Schule – naar school"},{"word":"zu","meaning":"naar / bij / te","example":"zu Hause – thuis"},{"word":"nach","meaning":"naar (steden en landen)","example":"nach Berlin – naar Berlijn"},{"word":"bei","meaning":"bij (verblijf)","example":"beim Arzt – bij de dokter"}],"tip":["Onthoud: zu + dem → zum (wie?).","Voor vrouwelijke geslachtswekende woorden: zu + der → zur."],"important":["zum = zu dem, alleen met mannelijke of neutrale zelfstandig naamwoorden in wie?-geval.","Geeft richting of doel aan: naar de dokter, naar het station, bij een vriend.","Voor vrouwelijk geslacht gebruik je zur: zur Bank, zur Post.","Niet verwarren met bei (zijn bij) of nach (naar steden zonder artikel)."]}}
**Note:** PENDING — On nl card zum|idx:672, the finding spans study.explanation, study.comparison, study.tip, study.important; the captured production value begins “{"study.explanation":"[\"Zum ir prievārda zu un artikula dem saīsinājums.\",\"Volledige vorm: naar de (wie?).\",\"Gebruik het met mannelijke en neutrale zelfstandig naamwoorden, wanneer je …”. Review the listed subfields separately against Latvian “["zum ir prievārda zu un artikula dem saīsinājums.","Pilnā forma: zu dem (kam?).","Lieto ar vīriešu un nekatras dzimtes lietvārdiem, kad norāda virzienu vai mērķi.","Bieži nozīmē uz kaut ko…” / German “zum” and name each exact field-level replacement; one scalar owner_new cannot safely encode this composite change.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zum",
  "lv": "Uz • Pie",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "Uz • Pie",
    "explanation": [
      "zum is de samentrekking van het voorzetsel zu en het lidwoord dem.",
      "De volledige vorm is zu dem.",
      "Je gebruikt het bij mannelijke en onzijdige zelfstandige naamwoorden om richting of doel aan te geven.",
      "Het betekent vaak naar iets of naar iemand toe, bijvoorbeeld naar de dokter of naar het station.",
      "In de praktijk gebruikt men bijna altijd zum, niet de volledige vorm zu dem."
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
        "lv": "Viņa iet uz veikalu."
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
        "meaning": "naar / bij (mannelijk of onzijdig)",
        "example": "zum Arzt – naar de dokter"
      },
      {
        "word": "zur",
        "meaning": "naar / bij (vrouwelijk)",
        "example": "zur Schule – naar school"
      },
      {
        "word": "zu",
        "meaning": "naar / bij / te",
        "example": "zu Hause – thuis"
      },
      {
        "word": "nach",
        "meaning": "naar (steden en landen)",
        "example": "nach Berlin – naar Berlijn"
      },
      {
        "word": "bei",
        "meaning": "bij (verblijf)",
        "example": "beim Arzt – bij de dokter"
      }
    ],
    "tip": [
      "Onthoud: zu + dem → zum (wie?).",
      "Voor vrouwelijke geslachtswekende woorden: zu + der → zur."
    ],
    "important": [
      "zum = zu dem, alleen met mannelijke of neutrale zelfstandig naamwoorden in wie?-geval.",
      "Geeft richting of doel aan: naar de dokter, naar het station, bij een vriend.",
      "Voor vrouwelijk geslacht gebruik je zur: zur Bank, zur Post.",
      "Niet verwarren met bei (zijn bij) of nach (naar steden zonder artikel)."
    ]
  },
  "index": 672
}
```

---

## Finding 43

**Audit ID:** `LRB073-0043`
**Finding Stable ID:** `g2/a1/nn|a1-ab|a1.card.a1-ab.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-ab`
**Field / path:** `a1.card.a1-ab.study.comparison[1].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Kellestki/millestki • Päritolu
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ab","lv":"-st","level":"A1","study":{"id":"a1-ab","layout":"standardStudy","translation":"-st","explanation":"Kasutatakse, kui miski algab kindlast ajast, koestat või punkst. Betyr ofte \"alates\".","examples":[{"de":"ab heute","lv":"Alates tänasest","level":"A1"},{"de":"ab Montag","lv":"God påske"},{"de":"ab 8 Uhr","lv":"Alates kjele 8 stk"},{"de":"ab Bahnhof","lv":"Faktisk"}],"comparison":[{"word":"ab","meaning":"Alates punktlig/ajast","example":"ab Montag – God påske"},{"word":"von","meaning":"frå nokon/noko • opphav","example":"von mir – Minutt"},{"word":"aus","meaning":"Seest velge","example":"aus dem Haus – Kanskje / kanskje velge"}],"tip":{"text":"Atceries: sākuma punkts laikā/vietā → ab."},"important":["ab viser startpunktet i tid eller stad.","Hvis tanken gjeld opphav eller retning ut frå innsida, brukar ein oftast von eller aus."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-ab.study.comparison[1].meaning for “ab” against Latvian “no kāda/kaut kā • izcelsme” and production “Kellestki/millestki • Päritolu”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "-st",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "-st",
    "explanation": "Kasutatakse, kui miski algab kindlast ajast, koestat või punkst. Betyr ofte \"alates\".",
    "examples": [
      {
        "de": "ab heute",
        "lv": "Alates tänasest",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "God påske"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "Alates kjele 8 stk"
      },
      {
        "de": "ab Bahnhof",
        "lv": "Faktisk"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Alates punktlig/ajast",
        "example": "ab Montag – God påske"
      },
      {
        "word": "von",
        "meaning": "frå nokon/noko • opphav",
        "example": "von mir – Minutt"
      },
      {
        "word": "aus",
        "meaning": "Seest velge",
        "example": "aus dem Haus – Kanskje / kanskje velge"
      }
    ],
    "tip": {
      "text": "Atceries: sākuma punkts laikā/vietā → ab."
    },
    "important": [
      "ab viser startpunktet i tid eller stad.",
      "Hvis tanken gjeld opphav eller retning ut frå innsida, brukar ein oftast von eller aus."
    ]
  },
  "index": 17
}
```

---

## Finding 44

**Audit ID:** `LRB073-0044`
**Finding Stable ID:** `g2/a1/nn|a1-aber|a1.card.a1-aber.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-aber`
**Field / path:** `a1.card.a1-aber.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vastand • Vastuväide • Sikkät
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aber","lv":"Aga","level":"A1","study":{"id":"a1-aber","layout":"standardStudy","translation":"Aga","explanation":"Kasutatakse vastanduse sissetoomiseks või vastuväite ekspretamiseks. Betyr ofte \"igjen\", \"siiski\" eller \"ometi\".","examples":[{"de":"Ich möchte mitkommen, aber ich habe keine Zeit.","lv":"Ma tahan kaasa tulla, aga mul ei ole aega."},{"de":"Das Essen war lecker, aber zu teuer.","lv":"Toit oli maitsev, aga liiga kallis."},{"de":"Er hat recht, aber ich sehe das anders.","lv":"Tal on égis, aga ma arvan teisiti."}],"comparison":[{"word":"aber","meaning":"motsetnad • innvending • men","example":"Ich komme, aber später. – Ma tulen, aga laim."},{"word":"sondern","meaning":"Senter • Ugyldig","example":"Ich wollte keinen Tee, sondern Kaffee. – Ma tahtsin teed, mitte kaffi."},{"word":"jedoch","meaning":"Imidlertid","example":"Es ist kalt, jedoch sonnig. – På kõr, säyää säääline."}],"tip":{"text":"Atceries: pretstats/iebilde → aber."},"important":["aber viser motsetnad eller innvending.","Hvis motsetnaden er \"ikkje..., men i staden...\" brukar ein vanleg sondern på tysk."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-aber.study.comparison[0].meaning for “aber” against Latvian “pretstats • iebilde • tomēr” and production “Vastand • Vastuväide • Sikkät”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "Aga",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "Aga",
    "explanation": "Kasutatakse vastanduse sissetoomiseks või vastuväite ekspretamiseks. Betyr ofte \"igjen\", \"siiski\" eller \"ometi\".",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Ma tahan kaasa tulla, aga mul ei ole aega."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Toit oli maitsev, aga liiga kallis."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Tal on égis, aga ma arvan teisiti."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "motsetnad • innvending • men",
        "example": "Ich komme, aber später. – Ma tulen, aga laim."
      },
      {
        "word": "sondern",
        "meaning": "Senter • Ugyldig",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Ma tahtsin teed, mitte kaffi."
      },
      {
        "word": "jedoch",
        "meaning": "Imidlertid",
        "example": "Es ist kalt, jedoch sonnig. – På kõr, säyää säääline."
      }
    ],
    "tip": {
      "text": "Atceries: pretstats/iebilde → aber."
    },
    "important": [
      "aber viser motsetnad eller innvending.",
      "Hvis motsetnaden er \"ikkje..., men i staden...\" brukar ein vanleg sondern på tysk."
    ]
  },
  "index": 21
}
```

---

## Finding 45

**Audit ID:** `LRB073-0045`
**Finding Stable ID:** `g2/a1/nn|a1-also|a1.card.a1-also.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-also`
**Field / path:** `a1.card.a1-also.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Seega • Järelikult
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"also","lv":"Seega","level":"A1","study":{"id":"a1-also","layout":"standardStudy","translation":"Seega","explanation":"Kasutatakse täätäse täätää või tunuse täämämiseks. Betyr \"seega\", \"järelikult\".","examples":[{"de":"Es regnet, also bleibe ich zu Hause.","lv":"Sajab wimhna, seepåråt jään ma koju."},{"de":"Du bist krank, also gehst du nicht zur Arbeit.","lv":"Sa oled haige, seepårät sa ei ähä yobelle."},{"de":"Ich habe viel gelernt, also verstehe ich es jetzt.","lv":"Ma olen palju säytanud, seega saan nüüd aru."}],"comparison":[{"word":"also","meaning":"altså • dermed","example":"Es regnet, also bleibe ich zu Hause. – Sajab wimhna, ösnikult jään koju."},{"word":"auch","meaning":"Ka","example":"Ich komme auch. – Ma tulen ka."},{"word":"deshalb","meaning":"Derfor","example":"Es regnet, deshalb bleibe ich zu Hause. – Sajab wimhna, seepåråt jään koju."}],"tip":{"text":"Atceries: secinājums → also."},"important":["also viser slutning: frå det som er sagt før følgjer neste tanke.","Det latviske \"tāpēc\" kan ofte vere deshalb òg."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-also.study.comparison[0].meaning for “also” against Latvian “tātad • līdz ar to” and production “Seega • Järelikult”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "Seega",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Seega",
    "explanation": "Kasutatakse täätäse täätää või tunuse täämämiseks. Betyr \"seega\", \"järelikult\".",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Sajab wimhna, seepåråt jään ma koju."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Sa oled haige, seepårät sa ei ähä yobelle."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Ma olen palju säytanud, seega saan nüüd aru."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "altså • dermed",
        "example": "Es regnet, also bleibe ich zu Hause. – Sajab wimhna, ösnikult jään koju."
      },
      {
        "word": "auch",
        "meaning": "Ka",
        "example": "Ich komme auch. – Ma tulen ka."
      },
      {
        "word": "deshalb",
        "meaning": "Derfor",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Sajab wimhna, seepåråt jään koju."
      }
    ],
    "tip": {
      "text": "Atceries: secinājums → also."
    },
    "important": [
      "also viser slutning: frå det som er sagt før følgjer neste tanke.",
      "Det latviske \"tāpēc\" kan ofte vere deshalb òg."
    ]
  },
  "index": 26
}
```

---

## Finding 46

**Audit ID:** `LRB073-0046`
**Finding Stable ID:** `g2/a1/nn|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-besuch`
**Field / path:** `a1.card.a1-besuch.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** besøk • oppsøk • besøk
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Besuch","lv":"besøk","level":"A1","de_article":"der","de_plural":"die Besuche","study":{"id":"a1-besuch","layout":"standardStudy","translation":"besøk","explanation":["Hovudidé: der Besuch betyr besøk, besøk eller oppsøk.","Hvis det gjeld ein stad eller arrangement, er besøk gjerne passande på norsk.","Hvis det gjeld å besøkje ein person, kan ein seie besøk eller oppsøk på norsk.","Fleirtal er die Besuche."],"examples":[{"de":"Der Besuch im Museum war interessant.","lv":"Museumsbesøket var interessant."},{"de":"Danke für deinen Besuch.","lv":"Takk for besøket ditt."},{"de":"Der Arzt macht einen Besuch.","lv":"Legen gjer ein besøksrunde."}],"comparison":[{"word":"der Besuch","meaning":"besøk • vitjing • visitt","example":"Danke für deinen Besuch. – Takk for besøket ditt."},{"word":"der Besucher","meaning":"Külastaja","example":"Der Besucher wartet draußen. – Besøkjaren ventar ute."},{"word":"besuchen","meaning":"besøkje • besøkje","example":"Ich besuche meine Großeltern. – Eg besøkjer oldeforeldrene mine."}],"tip":{"text":"Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."},"important":["der Besuch er ikkje berre besøk; det kan og vere oppsøk eller besøk.","Fleirtal: die Besuche."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-besuch.study.comparison[0].meaning for “Besuch” against Latvian “apmeklējums • apciemojums • vizīte” and production “besøk • oppsøk • besøk”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

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
      "Hovudidé: der Besuch betyr besøk, besøk eller oppsøk.",
      "Hvis det gjeld ein stad eller arrangement, er besøk gjerne passande på norsk.",
      "Hvis det gjeld å besøkje ein person, kan ein seie besøk eller oppsøk på norsk.",
      "Fleirtal er die Besuche."
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
        "lv": "Legen gjer ein besøksrunde."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "besøk • vitjing • visitt",
        "example": "Danke für deinen Besuch. – Takk for besøket ditt."
      },
      {
        "word": "der Besucher",
        "meaning": "Külastaja",
        "example": "Der Besucher wartet draußen. – Besøkjaren ventar ute."
      },
      {
        "word": "besuchen",
        "meaning": "besøkje • besøkje",
        "example": "Ich besuche meine Großeltern. – Eg besøkjer oldeforeldrene mine."
      }
    ],
    "tip": {
      "text": "Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."
    },
    "important": [
      "der Besuch er ikkje berre besøk; det kan og vere oppsøk eller besøk.",
      "Fleirtal: die Besuche."
    ]
  },
  "index": 87
}
```

---

## Finding 47

**Audit ID:** `LRB073-0047`
**Finding Stable ID:** `g2/a1/nn|a1-besuchen|a1.card.a1-besuchen.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-besuchen`
**Field / path:** `a1.card.a1-besuchen.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** besøkje stad eller arrangement • besøkje person
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"besuchen","lv":"besøkje","level":"A1","study":{"id":"a1-besuchen","layout":"standardStudy","translation":"besøkje","explanation":["Hovudidé: besuchen brukar ein når ein besøkjer ein stad, arrangement eller person.","Stad, arrangement eller kurs blir vanleg besøkt på norsk.","Hvis besuchen gjeld ein person, er det ofte naturlegare å seie besøkje på norsk.","På tysk brukar ein besuchen utan forsetning og med akkusativ."],"examples":[{"de":"Ich besuche das Museum.","lv":"Eg besøkjer museet."},{"de":"Wir besuchen einen Deutschkurs.","lv":"Vi besøkjer tyskkursen."},{"de":"Ich besuche meine Großeltern.","lv":"Eg besøkjer oldeforeldrene mine."}],"comparison":[{"word":"besuchen","meaning":"vitje ein stad eller eit arrangement • vitje ein person","example":"Ich besuche meine Großeltern. – Eg besøkjer oldeforeldrene mine."},{"word":"treffen","meaning":"møte","example":"Ich treffe meinen Freund. – Eg møter vennen min."},{"word":"zu jemandem gehen","meaning":"gå til nokon","example":"Ich gehe zu meinem Freund. – Bring vennene dine nærmere."}],"tip":{"text":"Atceries: vietu apmeklē, bet personu latviski bieži apciemo."},"important":["besuchen brukar ein utan forsetning: Ich besuche meine Freundin.","Den norske omsetjinga heng saman med objektet: besøkje stad, besøkje person."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-besuchen.study.comparison[0].meaning for “besuchen” against Latvian “apmeklēt vietu vai pasākumu • apciemot personu” and production “besøkje stad eller arrangement • besøkje person”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

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
      "Hovudidé: besuchen brukar ein når ein besøkjer ein stad, arrangement eller person.",
      "Stad, arrangement eller kurs blir vanleg besøkt på norsk.",
      "Hvis besuchen gjeld ein person, er det ofte naturlegare å seie besøkje på norsk.",
      "På tysk brukar ein besuchen utan forsetning og med akkusativ."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Eg besøkjer museet."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Vi besøkjer tyskkursen."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Eg besøkjer oldeforeldrene mine."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "vitje ein stad eller eit arrangement • vitje ein person",
        "example": "Ich besuche meine Großeltern. – Eg besøkjer oldeforeldrene mine."
      },
      {
        "word": "treffen",
        "meaning": "møte",
        "example": "Ich treffe meinen Freund. – Eg møter vennen min."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "gå til nokon",
        "example": "Ich gehe zu meinem Freund. – Bring vennene dine nærmere."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen brukar ein utan forsetning: Ich besuche meine Freundin.",
      "Den norske omsetjinga heng saman med objektet: besøkje stad, besøkje person."
    ]
  },
  "index": 89
}
```

---

## Finding 48

**Audit ID:** `LRB073-0048`
**Finding Stable ID:** `g2/a1/nn|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-da`
**Field / path:** `a1.card.a1-da.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Sel • Siin • Siinsamas (üldiselt)
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"da","lv":"Forsegle","level":"A1","study":{"id":"a1-da","layout":"standardStudy","translation":"Forsegle","explanation":["Hovedidé: det betyr at på A1-nivå oftest forsegle.","Da utstab dukke või ikkem kumelgi juba mainitule.","Olenevalt tilstitusst säda seda terekada ka kui siin või segl.","På A1-nivå, Łúmime sőna da szőtő szőlő kohamäörsőnana."],"examples":[{"de":"Da ist mein Auto.","lv":"Forsegl på bilen min."},{"de":"Ich war da.","lv":"Ma olin segl."},{"de":"Da kommt er.","lv":"Siin ta tulb."},{"de":"Komm mal da her!","lv":"Kom hit!"}],"comparison":[{"word":"da","meaning":"der • her • der (generelt)","example":"Der er bilen min."},{"word":"hier","meaning":"Siin (kindlas kois)","example":"Her er bilen min."},{"word":"dort","meaning":"Forsegle","example":"Dort er bilen min."},{"word":"dann","meaning":"Sis","example":"Så går vi heim."}],"tip":{"text":"Atceries: vispārīgs tur/te → da."},"important":["da er ein generell stadsordet.","hier betyr konkret \"her\", dort betyr litt lengre bort \"der\"."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-da.study.comparison[0].meaning for “da” against Latvian “tur • te • šeit (vispārīgi)” and production “Sel • Siin • Siinsamas (üldiselt)”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "da",
  "lv": "Forsegle",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "Forsegle",
    "explanation": [
      "Hovedidé: det betyr at på A1-nivå oftest forsegle.",
      "Da utstab dukke või ikkem kumelgi juba mainitule.",
      "Olenevalt tilstitusst säda seda terekada ka kui siin või segl.",
      "På A1-nivå, Łúmime sőna da szőtő szőlő kohamäörsőnana."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Forsegl på bilen min."
      },
      {
        "de": "Ich war da.",
        "lv": "Ma olin segl."
      },
      {
        "de": "Da kommt er.",
        "lv": "Siin ta tulb."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Kom hit!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "der • her • der (generelt)",
        "example": "Der er bilen min."
      },
      {
        "word": "hier",
        "meaning": "Siin (kindlas kois)",
        "example": "Her er bilen min."
      },
      {
        "word": "dort",
        "meaning": "Forsegle",
        "example": "Dort er bilen min."
      },
      {
        "word": "dann",
        "meaning": "Sis",
        "example": "Så går vi heim."
      }
    ],
    "tip": {
      "text": "Atceries: vispārīgs tur/te → da."
    },
    "important": [
      "da er ein generell stadsordet.",
      "hier betyr konkret \"her\", dort betyr litt lengre bort \"der\"."
    ]
  },
  "index": 126
}
```

---

## Finding 49

**Audit ID:** `LRB073-0049`
**Finding Stable ID:** `g2/a1/nn|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-das`
**Field / path:** `a1.card.a1-das.study.comparison[2].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Mis • Mille • Mida
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"das","lv":"Kesksoo skrev om artikkelen","level":"A1","study":{"id":"a1-das","layout":"standardStudy","translation":"Kesksoo skrev om artikkelen","explanation":"Kasutatakse kesksoost nimisvärnte kureus. Noen lauser kan \"das\" toimida ka asesõnana või siduva asesõnana.","examples":[{"de":"Das ist mein Auto.","lv":"Se på bilen min."},{"de":"Das ist gut.","lv":"Se her."},{"de":"Das Buch, das ich lese, ist interessant.","lv":"Raamat, mida ma loen, på interesab."}],"comparison":[{"word":"das","meaning":"Se (artikkel / asesõna)","example":"Das ist mein Auto. – Se på bilen min."},{"word":"dies","meaning":"Se","example":"Dies ist mein Auto. – Se på bilen min."},{"word":"welches","meaning":"kven • kva for ei • som","example":"Das ist das Buch, welches ich lese. – Se på raamat, mida ma loen."}],"tip":{"text":"Atceries: vidus dzimte → das; ka → dass."},"important":["På A1-nivå lær du først das som nøytraltkjønn artikkel.","das er ikkje det same som dass — das kan vere artikkel eller pronomen, dass betyr \"at\"."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-das.study.comparison[2].meaning for “das” against Latvian “kurš • kura • kuru” and production “Mis • Mille • Mida”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "Kesksoo skrev om artikkelen",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "Kesksoo skrev om artikkelen",
    "explanation": "Kasutatakse kesksoost nimisvärnte kureus. Noen lauser kan \"das\" toimida ka asesõnana või siduva asesõnana.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Se på bilen min."
      },
      {
        "de": "Das ist gut.",
        "lv": "Se her."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Raamat, mida ma loen, på interesab."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "Se (artikkel / asesõna)",
        "example": "Das ist mein Auto. – Se på bilen min."
      },
      {
        "word": "dies",
        "meaning": "Se",
        "example": "Dies ist mein Auto. – Se på bilen min."
      },
      {
        "word": "welches",
        "meaning": "kven • kva for ei • som",
        "example": "Das ist das Buch, welches ich lese. – Se på raamat, mida ma loen."
      }
    ],
    "tip": {
      "text": "Atceries: vidus dzimte → das; ka → dass."
    },
    "important": [
      "På A1-nivå lær du først das som nøytraltkjønn artikkel.",
      "das er ikkje det same som dass — das kan vere artikkel eller pronomen, dass betyr \"at\"."
    ]
  },
  "index": 129
}
```

---

## Finding 50

**Audit ID:** `LRB073-0050`
**Finding Stable ID:** `g2/a1/nn|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** nn
**Card:** `a1-dass`
**Field / path:** `a1.card.a1-dass.study.comparison[1].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Sest • Det er derfor et
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"dass","lv":"En","level":"A1","study":{"id":"a1-dass","layout":"standardStudy","translation":"En","explanation":"Juhatab sisse bistillause, mis expressb fakti, mästt või öeldut.","examples":[{"de":"Ich weiß, dass du müde bist.","lv":"Ma tean, et sa oled väsinud."},{"de":"Er sagt, dass er kommt.","lv":"Ta ütleb, et ta tülb."},{"de":"Ich glaube, dass das stimmt.","lv":"Ma arvan, et see on utta."}],"comparison":[{"word":"dass","meaning":"En","example":"Ich weiß, dass er kommt. – Ma tean, et ta tulb."},{"word":"weil","meaning":"fordi • av di","example":"Ich bleibe zu Hause, weil es regnet. – Ma jään koju, sest sajab wimga."},{"word":"damit","meaning":"En","example":"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Ma õubin saksa keelt, et saaksin Sämääsal mitbättää."},{"word":"ob","meaning":"Cas","example":"Ich weiß nicht, ob er kommt. – Ma ei te, kas ta tulb."}],"tip":{"text":"Atceries: ka → dass."},"important":["dass betyr \"at\" og innleier ein hjelpeteikn.","Ikkje forveksla med das, som kan vere artikkel eller \"det\"."]}}
**Note:** Individually reviewed nn exact field a1.card.a1-dass.study.comparison[1].meaning for “dass” against Latvian “jo • tāpēc ka” and production “Sest • Det er derfor et”. The full idiomatic nn sentence or structured value cannot be established with sufficient confidence from this row alone; keep PENDING for a native-speaker formulation.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "En",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "En",
    "explanation": "Juhatab sisse bistillause, mis expressb fakti, mästt või öeldut.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Ma tean, et sa oled väsinud."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Ta ütleb, et ta tülb."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Ma arvan, et see on utta."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "En",
        "example": "Ich weiß, dass er kommt. – Ma tean, et ta tulb."
      },
      {
        "word": "weil",
        "meaning": "fordi • av di",
        "example": "Ich bleibe zu Hause, weil es regnet. – Ma jään koju, sest sajab wimga."
      },
      {
        "word": "damit",
        "meaning": "En",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Ma õubin saksa keelt, et saaksin Sämääsal mitbättää."
      },
      {
        "word": "ob",
        "meaning": "Cas",
        "example": "Ich weiß nicht, ob er kommt. – Ma ei te, kas ta tulb."
      }
    ],
    "tip": {
      "text": "Atceries: ka → dass."
    },
    "important": [
      "dass betyr \"at\" og innleier ein hjelpeteikn.",
      "Ikkje forveksla med das, som kan vere artikkel eller \"det\"."
    ]
  },
  "index": 130
}
```

---

