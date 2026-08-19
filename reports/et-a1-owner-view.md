# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.5
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `cc5b5f4e4551fcb9ac99d643755761680e2158da`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-v15-ba9e`
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **171**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda `et-a1-owner-decisions.md`.
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## Grupas (pa 50 findingiem)

| Grupa | Findings | Fails |
|-------|----------|-------|
| 1–50 | 50 | [et-a1-owner-view-group01.md](./et-a1-owner-view-group01.md) |
| 51–100 | 50 | [et-a1-owner-view-group02.md](./et-a1-owner-view-group02.md) |
| 101–150 | 50 | [et-a1-owner-view-group03.md](./et-a1-owner-view-group03.md) |
| 151–171 | 21 | [et-a1-owner-view-group04.md](./et-a1-owner-view-group04.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `STRUCT` · `study.count` · CRITICAL · Study count mismatch LV=134 ET=124
- **ET-A1-0002** `a1-Besuch-87` · `study` · HIGH · Trūkst Study objekta vārdam Besuch
- **ET-A1-0003** `a1-besuchen-89` · `study` · HIGH · Trūkst Study objekta vārdam besuchen
- **ET-A1-0004** `a1-bitte` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0005** `a1-bitte-study` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **ET-A1-0006** `a1-Fußball-218` · `study` · HIGH · Trūkst Study objekta vārdam Fußball
- **ET-A1-0007** `a1-ganz-219` · `study` · HIGH · Trūkst Study objekta vārdam ganz
- **ET-A1-0008** `a1-gefallen-225` · `study` · HIGH · Trūkst Study objekta vārdam gefallen
- **ET-A1-0009** `a1-Geschichte-233` · `study` · HIGH · Trūkst Study objekta vārdam Geschichte
- **ET-A1-0010** `a1-Geschwister-234` · `study` · HIGH · Trūkst Study objekta vārdam Geschwister
- **ET-A1-0011** `a1-Großeltern-251` · `study` · HIGH · Trūkst Study objekta vārdam Großeltern
- **ET-A1-0012** `a1-Hand-267` · `study` · HIGH · Trūkst Study objekta vārdam Hand
- **ET-A1-0013** `a1-hübsch-288` · `study` · HIGH · Trūkst Study objekta vārdam hübsch
- **ET-A1-0014** `a1-bitte` · `entry[93].study.comparison[0].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0015** `a1-bitte` · `entry[93].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0016** `a1-bitte` · `entry[93].study.comparison[1].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0017** `a1-bitte` · `entry[93].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0018** `a1-bitte-study` · `entry[94].study.comparison[0].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0019** `a1-bitte-study` · `entry[94].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0020** `a1-bitte-study` · `entry[94].study.comparison[1].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0021** `a1-bitte-study` · `entry[94].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0022** `a1-bringen` · `entry[111].study.comparison[4].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0023** `a1-bringen` · `entry[111].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0024** `a1-ein` · `entry[154].study.examples[3].lv` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0025** `a1-ein` · `entry[154].study.comparison[0].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0026** `a1-ein` · `entry[154].study.comparison[3].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0027** `a1-eis` · `entry[157].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0028** `a1-eis` · `entry[157].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0029** `a1-eis` · `entry[157].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0030** `a1-erst` · `entry[165].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0031** `a1-erst` · `entry[165].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0032** `a1-erst` · `entry[165].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0033** `a1-es` · `entry[167].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0034** `a1-es` · `entry[167].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0035** `a1-etwas` · `entry[169].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0036** `a1-etwas` · `entry[169].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0037** `a1-euch` · `entry[170].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0038** `a1-euch` · `entry[170].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0039** `a1-euch` · `entry[170].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0040** `a1-finden` · `entry[187].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0041** `a1-haben` · `entry[261].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0042** `a1-haben` · `entry[261].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0043** `a1-haben` · `entry[261].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0044** `a1-halten` · `entry[265].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0045** `a1-halten` · `entry[265].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0046** `a1-halten` · `entry[265].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0047** `a1-heißen` · `entry[276].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0048** `a1-heißen` · `entry[276].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0049** `a1-heißen` · `entry[276].study.comparison[4].meaning` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0050** `a1-können` · `entry[319].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0051** `a1-können` · `entry[319].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0052** `a1-können` · `entry[319].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0053** `a1-kosten` · `entry[320].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0054** `a1-kosten` · `entry[320].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0055** `a1-kosten` · `entry[320].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0056** `a1-kosten` · `entry[320].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0057** `a1-fernsehen` · `entry[687].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0058** `a1-fernsehen` · `entry[687].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0059** `a1-fernsehen` · `entry[687].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A1-0060** `a1-da` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **ET-A1-0061** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0062** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0063** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0064** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0065** `a1-reis` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **ET-A1-0066** `a1-bis` · `study.sectionAccents.comparison.example` · MEDIUM · sectionAccents termins "bis dass" nav atrodams sadaļā comparison
- **ET-A1-0067** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "Wasser" nav atrodams sadaļā examples
- **ET-A1-0068** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "dich" nav atrodams sadaļā examples
- **ET-A1-0069** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "bringt" nav atrodams sadaļā examples
- **ET-A1-0070** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "Buch" nav atrodams sadaļā examples
- **ET-A1-0071** `a1-achten-22` · `etText` · MEDIUM · „Järgima” tähendab eeskätt millegi järgimist; „achten” tähendab siin tavaliselt …
- **ET-A1-0072** `a1-Arm-44` · `etText` · MEDIUM · Saksa „Arm” tähendab täpsemalt käsivart; „käsi” tähendab eeskätt kätt ja on seet…
- **ET-A1-0073** `a1-ganz-219` · `etText` · MEDIUM · „Kõik” tähendab „all/everything”, mitte „whole/entire”; saksa „ganz” vastab siin…
- **ET-A1-0074** `a1-nicht-447` · `etText` · MEDIUM · „ei“ tähendab eesti keeles peamiselt „nein“; saksa „nicht“ vaste on „mitte“.
- **ET-A1-0075** `a1-Nummer-455` · `etText` · CRITICAL · „number“ on inglise, mitte eesti keel. Saksa „Nummer“ eestikeelne vaste on „numb…
- **ET-A1-0076** `a1-von-635` · `etText` · MEDIUM · Estonian -st means 'from inside'; German von is generally rendered with -lt when…
- **ET-A1-0077** `a1-Weihnachten-648` · `etText` · LOW · Estonian common nouns, including jõulud, are normally lowercase outside sentence…
- **ET-A1-0078** `a1-sprechen-study` · `study.examples[2].lv` · HIGH · Praegune lause tähendab „Ich spreche Deutsch“ ega tõlgi õpetajaga rääkimist.
- **ET-A1-0079** `a1-klein-study` · `study.examples[1].lv` · HIGH · Praegune tõlge räägib väikesest toast, mitte veel väikesest lapsest.
- **ET-A1-0080** `a1-klein-study` · `study.examples[2].lv` · HIGH · Praegune tõlge kordab eelmise näite sisu ega tõlgi väikest kotti.
- **ET-A1-0081** `a1-an` · `study.comparison[1].meaning` · MEDIUM · Horisontaalsel pinnal paiknemist väljendab saksa keeles tavaliselt auf, mitte an…
- **ET-A1-0082** `a1-auch-study` · `study.examples[1].lv` · HIGH · Praegune lause tähendab „Ma tulen ka“, mitte „Ta töötab ka siin“.
- **ET-A1-0083** `a1-auch-study` · `study.examples[2].lv` · HIGH · Praegune tõlge kordab eelmise näite sisu ega väljenda head päeva soovimist.
- **ET-A1-0084** `a1-auf` · `study.comparison[1].meaning` · MEDIUM · Auf tähendab vertikaalsel pinnal „peal“, mitte üldiselt „juures“; „juures“ vasta…
- **ET-A1-0085** `a1-auf` · `study.comparison[4].meaning` · MEDIUM · aufs on auf + das ehk akusatiiv; „-sse“ ei sobi siin datiivi märgendiga.
- **ET-A1-0086** `a1-aufs` · `study.examples[6].lv` · MEDIUM · „Tule paati“ tähendab tule minu juurde paati; allikas käsib paati sisse minna.
- **ET-A1-0087** `a1-aufs` · `study.comparison[2].meaning` · MEDIUM · Auf väljendab vertikaalsel pinnal paiknemist, mitte pinna juures olemist.
- **ET-A1-0088** `a1-aufs` · `study.comparison[4].meaning` · MEDIUM · aufs on auf + das ehk akusatiiv; praegune „Dativ“ on grammatikaliselt vastuolus.
- **ET-A1-0089** `a1-baden` · `study.examples[2].lv` · MEDIUM · Ujumine vastab schwimmen-ile; baden tähendab suplemist või vees olemist.
- **ET-A1-0090** `a1-baden` · `study.comparison[1].meaning` · LOW · „Ujuma liikumisena“ on ebaloomulik; võrdluses on vaja tegevuse nimisõna „ujumine…
- **ET-A1-0091** `a1-bei` · `study.comparison[1].meaning` · MEDIUM · Need asukohad kuuluvad siin an-i kasutusse, mitte bei tähendusse.
- **ET-A1-0092** `a1-bei` · `study.comparison[2].meaning` · MEDIUM · Bei väljendab kellegi juures olemist; suund kellegi juurde on saksa keeles zu.
- **ET-A1-0093** `a1-bitte` · `study.examples[0].lv` · HIGH · Estonian text means only “Please!”, omitting the requested cup of coffee.
- **ET-A1-0094** `a1-bitte` · `study.examples[1].lv` · HIGH · The current text omits the instruction “come in”.
- **ET-A1-0095** `a1-bitte` · `study.examples[2].lv` · HIGH · This example is swapped with the coffee-request example.
- **ET-A1-0096** `a1-bitte` · `study.comparison[0].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0097** `a1-bitte` · `study.comparison[1].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0098** `a1-bitte-study` · `study.examples[1].lv` · HIGH · The current text is the polite adverb, not the sentence about fulfilling a reque…
- **ET-A1-0099** `a1-bitte-study` · `study.examples[2].lv` · HIGH · The current text is a coffee request and does not translate the source sentence.
- **ET-A1-0100** `a1-bitte-study` · `study.comparison[0].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0101** `a1-bitte-study` · `study.comparison[1].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0102** `a1-bringen` · `study.examples[0].lv` · HIGH · The current sentence asks someone to bring water instead of stating that I bring…
- **ET-A1-0103** `a1-bringen` · `study.examples[1].lv` · HIGH · The current sentence takes a person home instead of taking a package to the post…
- **ET-A1-0104** `a1-bringen` · `study.examples[2].lv` · HIGH · The current subject and object are changed: it says someone takes a book, not th…
- **ET-A1-0105** `a1-bringen` · `study.comparison[1].meaning` · HIGH · Aiznest means to carry or take something away, not to take or pick something up.
- **ET-A1-0106** `a1-bringen` · `study.comparison[2].meaning` · HIGH · Aizvest means to take or transport, usually by vehicle; the current meaning is d…
- **ET-A1-0107** `a1-bringen` · `study.comparison[3].meaning` · MEDIUM · The current phrase adds “take along” and does not directly express delivery or c…
- **ET-A1-0108** `a1-bringen` · `study.comparison[4].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0109** `a1-da` · `study.examples[2].lv` · MEDIUM · Te means “there”; siin means “here”, reversing the location.
- **ET-A1-0110** `a1-der` · `study.examples[1].lv` · MEDIUM · The current text means “the bus is coming”, not “the bus is driving/riding”.
- **ET-A1-0111** `a1-dieser` · `study.examples[1].lv` · HIGH · The current text means “I like this dog”, not “I see this dog”.
- **ET-A1-0112** `a1-ein` · `study.examples[3].lv` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0113** `a1-ein` · `study.comparison[0].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0114** `a1-ein` · `study.comparison[1].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0115** `a1-ein` · `study.comparison[2].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0116** `a1-ein` · `study.comparison[3].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0117** `a1-erst` · `study.examples[0].lv` · MEDIUM · Estonian sentence does not translate the Latvian source example; it introduces u…
- **ET-A1-0118** `a1-es` · `study.examples[0].lv` · HIGH · The Estonian sentence means “I study German” and does not express the impersonal…
- **ET-A1-0119** `a1-es` · `study.examples[1].lv` · HIGH · The Estonian sentence means “he/she is tired,” not “it is cold.”
- **ET-A1-0120** `a1-es` · `study.examples[2].lv` · HIGH · The Estonian sentence means “he/she works here,” not “the child is sleeping.”
- **ET-A1-0121** `a1-es` · `study.examples[3].lv` · HIGH · The Estonian sentence means “this is my book,” not “it is tired.”
- **ET-A1-0122** `a1-es` · `study.comparison[0].meaning` · CRITICAL · The phrase “bezpersoniska forma” is Latvian, not Estonian; replace it with the E…
- **ET-A1-0123** `a1-es` · `study.comparison[1].meaning` · MEDIUM · Latvian “es” means “mina”; the current comparison leaves the foreign form and ca…
- **ET-A1-0124** `a1-euch` · `study.tip.text` · MEDIUM · As a direct object, German euch corresponds to Estonian teid, not teie.
- **ET-A1-0125** `a1-finden` · `study.examples[0].lv` · HIGH · The source says “I find my key”; the current Estonian adds negation and changes …
- **ET-A1-0126** `a1-finden` · `study.examples[1].lv` · HIGH · The current Estonian asks whether someone found a phone instead of expressing an…
- **ET-A1-0127** `a1-finden` · `study.examples[2].lv` · HIGH · The current Estonian gives an opinion instead of asking what someone thinks abou…
- **ET-A1-0128** `a1-gleich` · `study.examples[1].lv` · LOW · “Sama värv” is the natural Estonian collocation for having the same color.
- **ET-A1-0129** `a1-gleich` · `study.examples[4].lv` · LOW · “Kohe” means immediately; the source means “see you in a moment/soon.”
- **ET-A1-0130** `a1-gross-study` · `study.examples[1].lv` · HIGH · The current Estonian translates a different sentence: “the house is big.”
- **ET-A1-0131** `a1-heißen` · `study.comparison[4].meaning` · CRITICAL · Väli sisaldab läti teksti; eestikeelne vaste on „helistama“.
- **ET-A1-0132** `a1-hoch-study` · `study.examples[1].lv` · MEDIUM · Läti näitelause räägib riiulist, kuid eestikeelne tõlge asendab selle ekslikult …
- **ET-A1-0133** `a1-im` · `study.comparison[0].meaning` · LOW · „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
- **ET-A1-0134** `a1-im` · `study.comparison[1].meaning` · LOW · „Akk.“ on saksakeelne lühend; eestikeelne termin on „akusatiiv“.
- **ET-A1-0135** `a1-im` · `study.comparison[3].meaning` · LOW · „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
- **ET-A1-0136** `a1-ins` · `study.comparison[0].meaning` · LOW · „Akk.“ on saksakeelne lühend; eestikeelne termin on „akusatiiv“.
- **ET-A1-0137** `a1-ins` · `study.comparison[1].meaning` · LOW · „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
- **ET-A1-0138** `a1-ins` · `study.comparison[3].meaning` · LOW · „Akk.“ on saksakeelne lühend; eestikeelne termin on „akusatiiv“.
- **ET-A1-0139** `a1-ins` · `study.comparison[4].meaning` · LOW · „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
- **ET-A1-0140** `a1-laden-study` · `study.examples[3].lv` · MEDIUM · 
- **ET-A1-0141** `a1-lassen` · `study.tip.text` · MEDIUM · Impersonaalse tähenduse puhul on loomulikum kasutada vormi „kellelgi lastakse“, …
- **ET-A1-0142** `a1-laut` · `study.examples[4].lv` · MEDIUM · 
- **ET-A1-0143** `a1-laut` · `study.examples[5].lv` · MEDIUM · 
- **ET-A1-0144** `a1-laut-study` · `study.examples[1].lv` · MEDIUM · 
- **ET-A1-0145** `a1-laut-study` · `study.examples[2].lv` · MEDIUM · 
- **ET-A1-0146** `a1-laut-study` · `study.examples[3].lv` · MEDIUM · 
- **ET-A1-0147** `a1-nach` · `study.examples[3].lv` · MEDIUM · Ajaväljend on ebaloomulik; standardne eesti vaste on „kell on kümme minutit üle …
- **ET-A1-0148** `a1-nehmen` · `study.tip.text` · MEDIUM · The source uses imperatives, but the Estonian has third-person present forms.
- **ET-A1-0149** `a1-probieren` · `study.comparison[1].meaning` · HIGH · mēģināt means to try or attempt, not to test or check.
- **ET-A1-0150** `a1-probieren` · `study.comparison[2].meaning` · HIGH · pārbaudīt means to check or test; üritama means to attempt.
- **ET-A1-0151** `a1-probieren` · `study.comparison[3].meaning` · HIGH · pielaikot means to try on, not to check or inspect.
- **ET-A1-0152** `a1-sich` · `study.comparison[1].meaning` · MEDIUM · Ühend „ich puhul” on ebaloomulik ja grammatiliselt puudulik; liitsõna „ich-vormi…
- **ET-A1-0153** `a1-sich` · `study.comparison[2].meaning` · MEDIUM · Ühend „du puhul” on ebaloomulik ja grammatiliselt puudulik; liitsõna „du-vormi p…
- **ET-A1-0154** `a1-sie-study` · `study.examples[0].lv` · HIGH · Lähte-eesti lause tähendab „Nad teevad süüa”, kuid praegune tekst räägib Annast …
- **ET-A1-0155** `a1-sie-study` · `study.examples[1].lv` · HIGH · Lähtelause tähendab „Ta teeb süüa”, kuid praegune tekst ütleb, et Maria on arst …
- **ET-A1-0156** `a1-sie-study` · `study.examples[2].lv` · HIGH · Lähtelause tähendab „Ta sööb”, kuid praegune tekst räägib kahest inimesest, kes …
- **ET-A1-0157** `a1-sie-study` · `study.examples[3].lv` · HIGH · Lähtelause tähendab „Nad teevad süüa”, kuid praegune tekst kirjeldab laste jalgp…
- **ET-A1-0158** `a1-sie-study` · `study.examples[4].lv` · HIGH · Lähtelause tähendab „Nad mängivad jalgpalli”, kuid praegune tekst on proua Kelle…
- **ET-A1-0159** `a1-sie-study` · `study.examples[5].lv` · HIGH · Lähtelause tähendab „Teie teete süüa, palun”, kuid praegune tekst küsib härra Mü…
- **ET-A1-0160** `a1-über` · `study.comparison[3].meaning` · LOW · Sõnajärg on ebaloomulik; „mingi allika kohta” on korrektne väljend.
- **ET-A1-0161** `a1-unter` · `study.examples[3].lv` · MEDIUM · „Laua kohal” tähendab über, mitte unter; tõlge on kaardi märksõnaga vastuolus.
- **ET-A1-0162** `a1-verstehen` · `study.examples[3].lv` · MEDIUM · Praegune lause tähendab „ma oskan rääkida”, mis vastab können, mitte verstehen.
- **ET-A1-0163** `a1-wenn` · `study.examples[3].lv` · HIGH · „Kas” tähistab kaudset jah/ei-küsimust; wenn väljendab tingimust või korduvat ae…
- **ET-A1-0164** `a1-wer` · `study.translation` · HIGH · Wer tähendab „kes”; „kumb” vastab valikuküsimuses pigem welcher’ile.
- **ET-A1-0165** `a1-wer` · `study.examples[0].lv` · HIGH · Wer-küsimus küsib isiku kohta („kes”), mitte asja kohta („mis”).
- **ET-A1-0166** `a1-werden` · `study.examples[3].lv` · MEDIUM · „Ma olen väsinud” vastab verbile sein; werden väljendab muutumist või seisundiss…
- **ET-A1-0167** `a1-zu` · `study.comparison[1].meaning` · MEDIUM · Praegune väljend ühendab suuna tunnuse ja kaasaütleva käände ning on eesti keele…
- **ET-A1-0168** `a1-zum` · `study.comparison[0].meaning` · MEDIUM · Eesti keeles on saksa grammatikatermini Dativ vastena kasutusel eestikeelne kuju…
- **ET-A1-0169** `a1-zum` · `study.comparison[1].meaning` · HIGH · Zum = zu dem; see on maskuliini või neutrumi vorm, mitte feminiini vorm. Feminii…
- **ET-A1-0170** `a1-zum` · `study.comparison[3].meaning` · MEDIUM · Sulgudes olevad nominatiivivormid ei sobitu suunatähisega „-sse“; vaja on illati…
- **ET-A1-0171** `a1-einmal` · `study.examples[0].lv` · LOW · Estonian sentence-initial words must be capitalized.
