# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.5
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `69ca798f83400e73ce677d38d7a7ef159c43ccf7`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-post-closure-ba9e`
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **100**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda `et-a1-owner-decisions.md`.
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## Grupas (pa 50 findingiem)

| Grupa | Findings | Fails |
|-------|----------|-------|
| 1–50 | 50 | [et-a1-owner-view-group01.md](./et-a1-owner-view-group01.md) |
| 51–100 | 50 | [et-a1-owner-view-group02.md](./et-a1-owner-view-group02.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `a1-bitte` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0002** `a1-bitte-study` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0003** `a1-Arm-44` · `etText` · MEDIUM · Käsi tähendab tavaliselt kätt; saksa Arm vaste on täpsemalt käsivars.
- **ET-A1-0004** `a1-links-380` · `etText` · MEDIUM · Adverb links tähendab asukohta „vasakul”; „vasakule” tähendab liikumist vasakule…
- **ET-A1-0005** `a1-Weihnachten-648` · `etText` · LOW · Estonian pühade nimetused kirjutatakse üldjuhul väikese algustähega.
- **ET-A1-0006** `a1-an` · `study.comparison[1].meaning` · MEDIUM · Horisontaalsel pinnal vastab tavaliselt auf-ile, mitte an-ile.
- **ET-A1-0007** `a1-ab` · `study.comparison[1].meaning` · MEDIUM · Päritolu väljendavad tavaliselt aus või von; ab tähistab alguspunkti.
- **ET-A1-0008** `a1-ab` · `study.examples[3].lv` · LOW · Ab rõhutab alguspunkti; „jaamast” võib tähendada lihtsalt jaama seest või juures…
- **ET-A1-0009** `a1-baden` · `study.comparison[1].meaning` · MEDIUM · „Ujuma liikumisena” ei ole loomulik ega grammatiline väljend; siin võrreldakse u…
- **ET-A1-0010** `a1-bis` · `study.examples[0].lv` · LOW · Estonian sentence begins with a lowercase letter.
- **ET-A1-0011** `a1-bis` · `study.examples[3].lv` · LOW · Estonian sentence begins with a lowercase letter.
- **ET-A1-0012** `a1-bis` · `study.comparison[2].meaning` · MEDIUM · “Seni, kuni” means “until”, not “up to now”; it does not match “līdz šim”.
- **ET-A1-0013** `a1-es` · `study.translation` · MEDIUM · German es generally means “see” or marks impersonal constructions; “ta” is not a…
- **ET-A1-0015** `a1-geben` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0016** `a1-geben` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0017** `a1-geben` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0018** `a1-geben` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0019** `a1-gleich` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0020** `a1-gleich` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0021** `a1-gleich` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0022** `a1-gleich` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0023** `a1-gleich` · `study.examples[4].lv` · MEDIUM · In this farewell, German gleich means soon, better expressed as varsti in Estoni…
- **ET-A1-0024** `a1-gleich` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0025** `a1-gross-study` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0026** `a1-gross-study` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0027** `a1-gut-study` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0028** `a1-gut-study` · `study.examples[1].lv` · LOW · Both dialogue utterances should begin with capitals.
- **ET-A1-0029** `a1-gut-study` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0030** `a1-gut-study` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0031** `a1-gut-study` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0032** `a1-gut-study` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0033** `a1-haben` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0034** `a1-haben` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0035** `a1-haben` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0036** `a1-haben` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0037** `a1-halten` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0038** `a1-halten` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0039** `a1-halten` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0040** `a1-halten` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0041** `a1-heißen` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0042** `a1-heißen` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0043** `a1-heißen` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0044** `a1-heißen` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0045** `a1-hoeren-study` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0046** `a1-hoeren-study` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0047** `a1-huebsch` · `study.examples[0].lv` · MEDIUM · Seljas olema lisab tähenduse „kandma“, mida lähtefraas ei väljenda.
- **ET-A1-0048** `a1-ihr` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0049** `a1-ihr` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0050** `a1-ihr` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0051** `a1-ihr` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0052** `a1-ihr` · `study.examples[4].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0053** `a1-im` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0054** `a1-im` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0055** `a1-im` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0056** `a1-im` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0057** `a1-im` · `study.examples[4].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0058** `a1-im` · `study.examples[5].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0059** `a1-im` · `study.examples[6].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0060** `a1-im` · `study.examples[7].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0061** `a1-in` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0062** `a1-in` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0063** `a1-in` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0064** `a1-in` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0065** `a1-ins` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0066** `a1-ins` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0067** `a1-ins` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0068** `a1-ins` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0069** `a1-ins` · `study.examples[4].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0070** `a1-ins` · `study.examples[5].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0071** `a1-ins` · `study.examples[6].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0072** `a1-ins` · `study.examples[7].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0073** `a1-jung` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0074** `a1-jung` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0075** `a1-jung` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0076** `a1-jung` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0077** `a1-jung` · `study.examples[4].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0078** `a1-jung` · `study.examples[5].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0079** `a1-jung` · `study.examples[6].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0080** `a1-kein` · `study.examples[0].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0081** `a1-kein` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0082** `a1-kein` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0083** `a1-kein` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0084** `a1-kein` · `study.examples[4].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0085** `a1-kein` · `study.examples[5].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0086** `a1-kennen-study` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0087** `a1-kennen-study` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0088** `a1-kennen-study` · `study.examples[3].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0089** `a1-kennen-study` · `study.examples[4].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0090** `a1-wissen-study` · `study.examples[1].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0091** `a1-wissen-study` · `study.examples[2].lv` · LOW · Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
- **ET-A1-0101** `a1-schwimmen` · `study.comparison[0].meaning` · MEDIUM · „Ujuma” on sihitislik suundumata vorm; siin on vaja nimisõna „ujumine” ja loomul…
- **ET-A1-0102** `a1-sicher` · `study.examples[2].lv` · MEDIUM · Sicher tähendab siin pigem „kindlasti”, mitte „arvatavasti” või „tõenäoliselt”.
- **ET-A1-0103** `a1-sie-study-2` · `study.examples[5].lv` · LOW · Lause alguses peab esimene sõna olema suure algustähega.
- **ET-A1-0104** `a1-sitzen` · `study.examples[2].lv` · MEDIUM · Praegune näide kirjeldab seismist, mitte istumist, mis on kaardi põhitähendus.
- **ET-A1-0105** `a1-sitzen` · `study.examples[3].lv` · MEDIUM · Praegune näide kirjeldab lamamist, mitte istumist, mis on kaardi põhitähendus.
- **ET-A1-0106** `a1-stehen` · `study.examples[2].lv` · MEDIUM · Praegune näide kirjeldab istumist, mitte seismist, mis on kaardi põhitähendus.
- **ET-A1-0107** `a1-wer` · `etMain` · MEDIUM · wer tähendab „kes”; „kumb” vastab saksa sõnale welcher, mitte wer.
- **ET-A1-0108** `a1-einmal` · `study.examples[0].lv` · LOW · Standalone Estonian sentence must begin with a capital letter.
- **ET-A1-0109** `a1-noch-mal` · `study.examples[1].lv` · LOW · Standalone Estonian sentence must begin with a capital letter.
- **ET-A1-0110** `a1-noch-mal` · `study.examples[2].lv` · LOW · Standalone Estonian sentence must begin with a capital letter.
