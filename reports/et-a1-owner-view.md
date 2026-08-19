# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **167**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda `et-a1-owner-decisions.md`.
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## Grupas (pa 50 findingiem)

| Grupa | Findings | Fails |
|-------|----------|-------|
| 1–50 | 50 | [et-a1-owner-view-group01.md](./et-a1-owner-view-group01.md) |
| 51–100 | 50 | [et-a1-owner-view-group02.md](./et-a1-owner-view-group02.md) |
| 101–150 | 50 | [et-a1-owner-view-group03.md](./et-a1-owner-view-group03.md) |
| 151–167 | 17 | [et-a1-owner-view-group04.md](./et-a1-owner-view-group04.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `a1-bitte` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0002** `a1-bitte-study` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0003** `a1-Arm-44` · `etText` · MEDIUM · Käsi tähendab peamiselt kätt; saksa Arm vaste on täpsemalt käsivars.
- **ET-A1-0004** `a1-Esslöffel-168` · `etText` · MEDIUM · German märksõna on ainsuses, kuid Estonian vorm "supilusikas" on siin mitmuse om…
- **ET-A1-0005** `a1-Nummer-455` · `etText` · CRITICAL · “number” is English; the Estonian translation is “number”.
- **ET-A1-0006** `a1-von-635` · `etText` · MEDIUM · Estonian -st usually corresponds to German aus; von is generally expressed with …
- **ET-A1-0007** `a1-Weihnachten-648` · `etText` · LOW · The Estonian common noun jõulud is normally written lowercase; the uppercase ref…
- **ET-A1-0008** `a1-baden` · `study.examples[2].lv` · MEDIUM · “Ta ujub väga hästi” tähendab, et ta schwimmt sehr gut, mitte et ta badet/supleb…
- **ET-A1-0009** `a1-besuch` · `study.examples[2].lv` · MEDIUM · „Teeb visiidi” on ebaloomulik; eesti keeles minnakse visiidile.
- **ET-A1-0010** `a1-bis` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0011** `a1-bis` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0012** `a1-bis` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0013** `a1-bis` · `study.examples[3].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0014** `a1-bis` · `study.comparison[2].meaning` · MEDIUM · „Seni, kuni” tähendab „until”; „līdz šim” vaste on „siiani” või „seni”.
- **ET-A1-0015** `a1-bleiben` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0016** `a1-bleiben` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0017** `a1-bleiben` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0018** `a1-bleiben` · `study.examples[3].lv` · HIGH · Läti lause tähendab „Ma lähen koju”, mitte „Ma jään koju”.
- **ET-A1-0019** `a1-da` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0020** `a1-da` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0021** `a1-da` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0022** `a1-da` · `study.examples[3].lv` · MEDIUM · „Da” tähendab siin „sinna/seal”, kuid „siia” vastab sõnale „hier”.
- **ET-A1-0023** `a1-da` · `study.comparison[3].meaning` · MEDIUM · „Siis” tähendab aega; „da” tähendus on siin „seal”.
- **ET-A1-0024** `a1-das` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0025** `a1-das` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0026** `a1-das` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0027** `a1-dass` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0028** `a1-dass` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0029** `a1-dass` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0030** `a1-der` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0031** `a1-der` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0032** `a1-der` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0033** `a1-die` · `study.examples[0].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0034** `a1-die` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0035** `a1-die` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0036** `a1-ein` · `study.tip.text` · MEDIUM · Praegune sõnastus on ebaloomulik ja jätab grammatiliselt puudu selgituse, et ein…
- **ET-A1-0037** `a1-euch` · `study.comparison[0].meaning` · MEDIUM · „Teie“ on omastav asesõna („jūsu“), kuid „jūs“ vaste selles tähenduses on isikul…
- **ET-A1-0038** `a1-geben` · `study.examples[0].lv` · LOW · Estonian sentence starts with a lowercase letter and the word order is less natu…
- **ET-A1-0039** `a1-geben` · `study.examples[2].lv` · HIGH · “Ma võtan raamatu” means “I take the book”, expressing nehmen rather than geben.
- **ET-A1-0040** `a1-geben` · `study.examples[3].lv` · HIGH · “Ma saan kingi” means “I receive a gift”, not “I give a gift” (geben).
- **ET-A1-0041** `a1-gleich` · `study.examples[0].lv` · LOW · The Estonian example sentence starts with a lowercase letter.
- **ET-A1-0042** `a1-gleich` · `study.examples[4].lv` · MEDIUM · “Näeme kohe!” suggests seeing someone immediately; “Näeme varsti!” matches “see …
- **ET-A1-0043** `a1-haben` · `study.examples[3].lv` · HIGH · “Ma tegin seda” means “I did it”, expressing machen rather than haben.
- **ET-A1-0044** `a1-hand-study` · `study.examples[2].lv` · HIGH · “Käsivars” means forearm, while German Hand and the source sentence refer to the…
- **ET-A1-0045** `a1-heißen` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0046** `a1-heißen` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0047** `a1-heißen` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0048** `a1-heißen` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0049** `a1-hoch-study` · `study.examples[0].lv` · LOW · The common noun mägi should not be capitalized mid-sentence; source sentence sho…
- **ET-A1-0050** `a1-hoch-study` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0051** `a1-hoch-study` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0052** `a1-hoch-study` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0053** `a1-hoch-study` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0054** `a1-hoeren-study` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0055** `a1-hoeren-study` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0056** `a1-ihr` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0057** `a1-ihr` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0058** `a1-ihr` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0059** `a1-ihr` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0060** `a1-ihr` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0061** `a1-ihr` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0062** `a1-im` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0063** `a1-im` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0064** `a1-im` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0065** `a1-im` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0066** `a1-im` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0067** `a1-im` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0068** `a1-im` · `study.examples[6].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0069** `a1-im` · `study.examples[7].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0070** `a1-in` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0071** `a1-in` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0072** `a1-in` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0073** `a1-in` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0074** `a1-ins` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0075** `a1-ins` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0076** `a1-ins` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0077** `a1-ins` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0078** `a1-ins` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0079** `a1-ins` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0080** `a1-ins` · `study.examples[6].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0081** `a1-ins` · `study.examples[7].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0082** `a1-ins` · `study.comparison[3].meaning` · MEDIUM · ins means into, not onto a surface; pinnale corresponds to a different German pr…
- **ET-A1-0083** `a1-ins` · `study.comparison[4].meaning` · MEDIUM · ins means into, not zu or juurde; the case is accusative, not dative.
- **ET-A1-0084** `a1-jung` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0085** `a1-jung` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0086** `a1-jung` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0087** `a1-jung` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0088** `a1-jung` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0089** `a1-jung` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0090** `a1-jung` · `study.examples[6].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0091** `a1-kein` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0092** `a1-kein` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0093** `a1-kein` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0094** `a1-kein` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0095** `a1-kein` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0096** `a1-kein` · `study.examples[5].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0097** `a1-kennen-study` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0098** `a1-kennen-study` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0099** `a1-kennen-study` · `study.examples[3].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0100** `a1-kennen-study` · `study.examples[4].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0101** `a1-wissen-study` · `study.examples[1].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0102** `a1-wissen-study` · `study.examples[2].lv` · LOW · Estonian sentence-initial words must be capitalized.
- **ET-A1-0103** `a1-kosten` · `study.examples[4].lv` · HIGH · Estonian sentence says the bill costs a lot, not that I pay the bill.
- **ET-A1-0104** `a1-kosten` · `study.examples[5].lv` · HIGH · The current sentence asks the price instead of asking whether cash payment is po…
- **ET-A1-0105** `a1-kosten` · `study.examples[6].lv` · HIGH · The current sentence says it costs more when paying by card, changing the subjec…
- **ET-A1-0106** `a1-kosten` · `study.examples[7].lv` · HIGH · The current sentence says it costs less immediately, not that I will pay immedia…
- **ET-A1-0107** `a1-laut` · `study.examples[4].lv` · MEDIUM · The current sentence says the sound is loud instead of beautiful.
- **ET-A1-0108** `a1-laut` · `study.examples[5].lv` · MEDIUM · The current sentence adds that the sound is loud, which is absent from the sourc…
- **ET-A1-0109** `a1-laut-study` · `study.examples[2].lv` · MEDIUM · The translation is unnatural and changes “don't speak so loudly” to “don't make …
- **ET-A1-0110** `a1-mal` · `study.examples[2].lv` · MEDIUM · Verb „piisama“ nõuab siin elatiivset vormi: ühest korrast piisab.
- **ET-A1-0111** `a1-natuerlich` · `study.examples[0].lv` · LOW · Lause alguses peavad sõnad „Kas“ ja vastus „Muidugi“ algama suure tähega.
- **ET-A1-0112** `a1-natuerlich` · `study.examples[1].lv` · LOW · Lause alguses peab sõna „See“ algama suure tähega.
- **ET-A1-0113** `a1-natuerlich` · `study.examples[2].lv` · LOW · Lause alguses peab sõna „Muidugi“ algama suure tähega.
- **ET-A1-0114** `a1-natuerlich` · `study.examples[3].lv` · LOW · Lause alguses peab sõna „Tal“ algama suure tähega.
- **ET-A1-0115** `a1-natuerlich` · `study.examples[4].lv` · LOW · Lause alguses peab sõna „Muidugi“ algama suure tähega.
- **ET-A1-0116** `a1-natuerlich` · `study.examples[5].lv` · LOW · Lause alguses peab sõna „See“ algama suure tähega.
- **ET-A1-0117** `a1-nehmen` · `study.examples[0].lv` · LOW · Lause alguses peab sõna „Ma“ algama suure tähega.
- **ET-A1-0118** `a1-nehmen` · `study.examples[1].lv` · LOW · Lause alguses peab sõna „Võta“ algama suure tähega.
- **ET-A1-0119** `a1-nehmen` · `study.examples[2].lv` · LOW · Lause alguses peab sõna „Ma“ algama suure tähega.
- **ET-A1-0120** `a1-nehmen` · `study.examples[3].lv` · LOW · Lause alguses peab sõna „Ma“ algama suure tähega.
- **ET-A1-0121** `a1-neu` · `study.examples[0].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0122** `a1-neu` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0123** `a1-neu` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0124** `a1-neu` · `study.examples[3].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0125** `a1-neu` · `study.examples[4].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0126** `a1-neu` · `study.examples[5].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0127** `a1-neu` · `study.examples[6].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0128** `a1-noch-study` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0129** `a1-noch-study` · `study.examples[2].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0130** `a1-nur-study` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0131** `a1-nur-study` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0132** `a1-nur-study` · `study.examples[3].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0133** `a1-nur-study` · `study.examples[4].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0134** `a1-ob` · `study.examples[0].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0135** `a1-ob` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0136** `a1-ob` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0137** `a1-ob` · `study.examples[3].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0138** `a1-oder` · `study.examples[0].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0139** `a1-oder` · `study.examples[1].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0140** `a1-oder` · `study.examples[2].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0141** `a1-oder` · `study.examples[3].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0142** `a1-passen` · `study.examples[0].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0143** `a1-passen` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0144** `a1-passen` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0145** `a1-passen` · `study.examples[3].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0146** `a1-probieren` · `study.examples[0].lv` · LOW · Käsklause peab eesti keeles algama suure algustähega.
- **ET-A1-0147** `a1-probieren` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0148** `a1-probieren` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0149** `a1-reis` · `study.examples[0].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0150** `a1-reis` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0151** `a1-reis` · `study.examples[2].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0152** `a1-reis` · `study.examples[3].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0153** `a1-sagen-study` · `study.examples[0].lv` · LOW · Küsimus peab eesti keeles algama suure algustähega.
- **ET-A1-0154** `a1-schauen-study` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0155** `a1-schauen-study` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0156** `a1-schon-study` · `study.examples[0].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0157** `a1-schwimmen` · `study.examples[0].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0158** `a1-schwimmen` · `study.examples[1].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0159** `a1-schwimmen` · `study.examples[2].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0160** `a1-schwimmen` · `study.examples[3].lv` · LOW · Täislause peab eesti keeles algama suure algustähega.
- **ET-A1-0161** `a1-sie-study-2` · `study.examples[5].lv` · LOW · Lause alguses peab olema suur algustäht; formaalse pöördumise korral kasutatakse…
- **ET-A1-0162** `a1-über` · `study.comparison[3].meaning` · MEDIUM · „Kohta mingist allikast“ on ebaloomuliku sõnajärjega; „mingi allika kohta“ välje…
- **ET-A1-0163** `a1-unter` · `study.examples[1].lv` · MEDIUM · Estonian lamab means 'lies'; the source says the cat sleeps under the chair.
- **ET-A1-0164** `a1-vor` · `study.examples[2].lv` · MEDIUM · Current Estonian means 'it will be eight in five minutes', not 'it is five to ei…
- **ET-A1-0165** `a1-wer` · `etMain` · MEDIUM · Wer means 'kes' (who); kumb means 'which one of two' and is not a synonym here.
- **ET-A1-0166** `a1-werden` · `study.examples[3].lv` · MEDIUM · The current sentence expresses olema ('to be'), not becoming or changing state a…
- **ET-A1-0167** `a1-einmal` · `study.examples[0].lv` · LOW · Lause alguses peab asesõna olema suure algustähega.
