# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **210**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda `et-a1-owner-decisions.md`.
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## Grupas (pa 50 findingiem)

| Grupa | Findings | Fails |
|-------|----------|-------|
| 1–50 | 50 | [et-a1-owner-view-group01.md](./et-a1-owner-view-group01.md) |
| 51–100 | 50 | [et-a1-owner-view-group02.md](./et-a1-owner-view-group02.md) |
| 101–150 | 50 | [et-a1-owner-view-group03.md](./et-a1-owner-view-group03.md) |
| 151–200 | 50 | [et-a1-owner-view-group04.md](./et-a1-owner-view-group04.md) |
| 201–210 | 10 | [et-a1-owner-view-group05.md](./et-a1-owner-view-group05.md) |

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
- **ET-A1-0071** `a1-achten-22` · `etText` · MEDIUM · Järgima tähendab peamiselt järgima; achten tähendab siin tähelepanu pöörama või …
- **ET-A1-0072** `a1-sprechen-study` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-A1-0073** `a1-sprechen-study` · `study.examples[2].lv` · HIGH · Praegune lause kordab esimest näidet ega vasta lähtele: ta räägib oma õpetajaga.
- **ET-A1-0074** `a1-klein-study` · `study.examples[1].lv` · HIGH · Näite tõlge on vahetunud esimese näitega ja ei vasta lähtele.
- **ET-A1-0075** `a1-klein-study` · `study.examples[2].lv` · HIGH · Näite tõlge on vahetunud teise näitega ja ei vasta lähtele.
- **ET-A1-0076** `a1-ab` · `study.comparison[2].meaning` · MEDIUM · „Seest välja” on aus-tähendus; ab väljendab algust punktist või ajast.
- **ET-A1-0077** `a1-auch-study` · `study.examples[1].lv` · HIGH · Näide on vahetunud esimese näitega ja ei vasta lähtele.
- **ET-A1-0078** `a1-auch-study` · `study.examples[2].lv` · HIGH · Praegune lause on teise näite tõlge, mitte soovimise lause.
- **ET-A1-0079** `a1-aufs` · `study.comparison[4].meaning` · MEDIUM · aufs on auf das ehk akkusatiiv; Dativ on siin vale käändetähis.
- **ET-A1-0080** `a1-aus` · `study.comparison[1].meaning` · MEDIUM · aus ei tähenda üldiselt isikult või pinnalt; need tähendused kuuluvad pigem von/…
- **ET-A1-0081** `a1-aus` · `study.comparison[2].meaning` · MEDIUM · „Alates punktist või ajast” on ab-tähendus, mitte aus-tähendus.
- **ET-A1-0082** `a1-bei` · `study.comparison[1].meaning` · MEDIUM · Need asukohad on saksa keeles tavaliselt an, mitte bei; võrdlus vajab sihtsõna t…
- **ET-A1-0083** `a1-bei` · `study.comparison[2].meaning` · MEDIUM · bei väljendab asukohta; suund kellegi juurde on saksa keeles zu.
- **ET-A1-0084** `a1-ganz-219` · `etText` · MEDIUM · „Kõik” tähendab „all/everything”; „ganz” tähendab siin „whole/entire”, mille vas…
- **ET-A1-0085** `a1-nicht-447` · `etText` · HIGH · „Nicht“ vastab eesti keeles „mitte“; „ei“ on verbiga kasutatav eitussõna.
- **ET-A1-0086** `a1-Ostern-467` · `etText` · LOW · Eesti keeles kirjutatakse pühade nimetus „lihavõtted“ üldjuhul väikese algustähe…
- **ET-A1-0087** `a1-bitte` · `study.examples[0].lv` · HIGH · Estonian text corresponds to the second example, not to the Latvian source sente…
- **ET-A1-0088** `a1-bitte` · `study.examples[1].lv` · HIGH · The current text omits the invitation to come in and only translates the interje…
- **ET-A1-0089** `a1-bitte` · `study.examples[2].lv` · HIGH · The coffee request belongs to the first example; this source is only the interje…
- **ET-A1-0090** `a1-bitte` · `study.comparison[0].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0091** `a1-bitte` · `study.comparison[1].meaning` · CRITICAL · The Estonian field contains Latvian text; the noun meaning is palve.
- **ET-A1-0092** `a1-bitte-study` · `study.examples[1].lv` · HIGH · The current interjection does not translate the sentence about fulfilling a requ…
- **ET-A1-0093** `a1-bitte-study` · `study.examples[2].lv` · HIGH · The current coffee request belongs to the other card; this sentence states that …
- **ET-A1-0094** `a1-bitte-study` · `study.comparison[0].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0095** `a1-bitte-study` · `study.comparison[1].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0096** `a1-bleiben` · `study.examples[3].lv` · HIGH · For the authoritative German lemma bleiben, the example must express staying; th…
- **ET-A1-0097** `a1-bringen` · `study.examples[0].lv` · HIGH · The current sentence asks someone to bring water, while the source says that I b…
- **ET-A1-0098** `a1-bringen` · `study.examples[1].lv` · HIGH · The current sentence means I take you home; the source concerns taking a parcel …
- **ET-A1-0099** `a1-bringen` · `study.examples[2].lv` · HIGH · The subject, object and action do not match the source sentence.
- **ET-A1-0100** `a1-bringen` · `study.comparison[1].meaning` · HIGH · Aiznest means to take or carry something away, not to take or pick something up.
- **ET-A1-0101** `a1-bringen` · `study.comparison[2].meaning` · HIGH · Aizvest means to transport or take someone/something by vehicle, not to go and f…
- **ET-A1-0102** `a1-bringen` · `study.comparison[3].meaning` · MEDIUM · The current phrase adds taking along and is not the direct meaning of delivering…
- **ET-A1-0103** `a1-bringen` · `study.comparison[4].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0104** `a1-da` · `study.examples[2].lv` · HIGH · The source says he comes there, not here.
- **ET-A1-0105** `a1-dieser` · `study.examples[1].lv` · HIGH · Näen means see; the current text means I like this dog.
- **ET-A1-0106** `a1-ein` · `study.examples[3].lv` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0107** `a1-ein` · `study.comparison[0].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0108** `a1-ein` · `study.comparison[1].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0109** `a1-ein` · `study.comparison[2].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0110** `a1-ein` · `study.comparison[3].meaning` · CRITICAL · The Estonian field contains Latvian text.
- **ET-A1-0111** `a1-erst` · `study.examples[0].lv` · MEDIUM · Estonian example changes the source meaning from studying and playing to drinkin…
- **ET-A1-0112** `a1-es` · `study.examples[0].lv` · HIGH · The Estonian sentence means “I study German”, not the impersonal weather express…
- **ET-A1-0113** `a1-es` · `study.examples[1].lv` · HIGH · The Estonian sentence means “he/she is tired”, not “it is cold”.
- **ET-A1-0114** `a1-es` · `study.examples[2].lv` · HIGH · The Estonian sentence means “he/she works here”, not “the child is sleeping”.
- **ET-A1-0115** `a1-es` · `study.examples[3].lv` · HIGH · The Estonian sentence means “this is my book”, not “it is tired”.
- **ET-A1-0116** `a1-es` · `study.comparison[0].meaning` · CRITICAL · “bezpersoniska forma” is Latvian, not Estonian.
- **ET-A1-0117** `a1-es` · `study.comparison[1].meaning` · CRITICAL · The meaning field contains the German/Latvian form “es” instead of the Estonian …
- **ET-A1-0118** `a1-euch` · `study.tip.text` · MEDIUM · As a direct object, euch corresponds to Estonian “teid”, not “teie”.
- **ET-A1-0119** `a1-finden` · `study.examples[0].lv` · HIGH · The source says “I find my key”; the Estonian negation reverses the meaning.
- **ET-A1-0120** `a1-finden` · `study.examples[1].lv` · HIGH · The Estonian question about finding a phone does not translate the source opinio…
- **ET-A1-0121** `a1-finden` · `study.examples[2].lv` · HIGH · The Estonian sentence repeats the previous example and does not ask what one thi…
- **ET-A1-0122** `a1-gross-study` · `study.examples[1].lv` · HIGH · The Estonian sentence says “the house is big” instead of stating that Berlin is …
- **ET-A1-0123** `a1-halten` · `study.tip.text` · MEDIUM · „käes” tähendab asukohta, mitte tegevust „hoidma”, mistõttu vihje on semantilise…
- **ET-A1-0124** `a1-heißen` · `study.comparison[4].meaning` · CRITICAL · „zvanīt” on läti, mitte eesti keel; eesti vaste on „helistama”.
- **ET-A1-0125** `a1-hoch-study` · `study.examples[1].lv` · HIGH · Läti näitelause räägib riiulist, kuid eesti tekst tõlgib selle ekslikult mäeks.
- **ET-A1-0126** `a1-jung` · `etMain` · HIGH · Saksa „jung” kirjeldab ka loomi ja paare, nagu näidetes; inimeste piirang on lii…
- **ET-A1-0127** `a1-jung` · `study.translation` · HIGH · Saksa „jung” kirjeldab ka loomi ja paare, nagu näidetes; inimeste piirang on lii…
- **ET-A1-0128** `a1-kosten` · `study.examples[4].lv` · MEDIUM · Näide väljendab arve maksmist, mitte selle maksumust ega verbi kosten tähendust.
- **ET-A1-0129** `a1-kosten` · `study.examples[5].lv` · MEDIUM · Näide käsitleb sularahas maksmist, mitte millegi hinda või maksumust.
- **ET-A1-0130** `a1-kosten` · `study.examples[6].lv` · MEDIUM · Näide väljendab kaardiga maksmist, mitte verbi kosten tähendust.
- **ET-A1-0131** `a1-kosten` · `study.examples[7].lv` · MEDIUM · Näide väljendab kohe maksmist, mitte millegi maksumust.
- **ET-A1-0132** `a1-laden-study` · `study.examples[3].lv` · MEDIUM · Saksakeelne Laden on siin nimisõna „pood”; näide kasutab verbi „laadima” tähendu…
- **ET-A1-0133** `a1-lassen` · `study.tip.text` · MEDIUM · „Midagi jääb” tähendab bleiben; „kellelegi lubatakse” kasutab siin vale käändevo…
- **ET-A1-0134** `a1-laut` · `study.examples[4].lv` · MEDIUM · Näide kirjeldab heli ilu, mitte omadust laut ehk valjuhäälne/vali.
- **ET-A1-0135** `a1-laut` · `study.examples[5].lv` · MEDIUM · Praegune näide tähendab lihtsalt mingi heli kuulmist ega väljenda omadust laut.
- **ET-A1-0136** `a1-laut-study` · `study.examples[1].lv` · MEDIUM · Laut on siin nimisõna „heli”, kuid näide kasutab seda tähendust väljendavat omad…
- **ET-A1-0137** `a1-laut-study` · `study.examples[2].lv` · MEDIUM · Näide kasutab omadussõna „vali/valjult”, mitte nimisõna Laut ehk „heli”.
- **ET-A1-0138** `a1-laut-study` · `study.examples[3].lv` · MEDIUM · Praegune näide väljendab omadussõna „vali”, mitte nimisõna „heli”.
- **ET-A1-0139** `a1-leise-study` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0140** `a1-leise-study` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0141** `a1-leise-study` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0142** `a1-liegen` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0143** `a1-liegen` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0144** `a1-liegen` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0145** `a1-liegen` · `study.examples[3].lv` · MEDIUM · Current text means ‘I put the book on the table’, which illustrates legen, not l…
- **ET-A1-0146** `a1-machen` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0147** `a1-machen` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0148** `a1-machen` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0149** `a1-machen` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0150** `a1-mal` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0151** `a1-mal` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0152** `a1-mal` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0153** `a1-mal` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0154** `a1-mann` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0155** `a1-mann` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0156** `a1-mann` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0157** `a1-mann` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0158** `a1-mann` · `study.examples[4].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0159** `a1-mann` · `study.examples[5].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0160** `a1-mit` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0161** `a1-mit` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0162** `a1-mit` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0163** `a1-mit` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0164** `a1-mögen` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0165** `a1-mögen` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0166** `a1-mögen` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0167** `a1-mögen` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0168** `a1-morgen` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0169** `a1-morgen` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0170** `a1-morgen` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0171** `a1-morgen` · `study.examples[4].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0172** `a1-morgen` · `study.examples[5].lv` · MEDIUM · This card teaches lowercase morgen ‘tomorrow’, but hommik means ‘morning’.
- **ET-A1-0173** `a1-morgen-study` · `study.examples[1].lv` · MEDIUM · This card teaches noun Morgen ‘morning’, but homseni means ‘until tomorrow’.
- **ET-A1-0174** `a1-morgen-study` · `study.examples[2].lv` · MEDIUM · This card teaches Morgen ‘morning’, but homme means ‘tomorrow’.
- **ET-A1-0175** `a1-morgen-study` · `study.examples[3].lv` · MEDIUM · This card teaches Morgen ‘morning’, but homme means ‘tomorrow’.
- **ET-A1-0176** `a1-morgen-study` · `study.examples[4].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0177** `a1-morgen-study` · `study.examples[5].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0178** `a1-müssen` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0179** `a1-müssen` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0180** `a1-müssen` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0181** `a1-müssen` · `study.examples[3].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0182** `a1-nach` · `study.examples[0].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0183** `a1-nach` · `study.examples[1].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0184** `a1-nach` · `study.examples[2].lv` · LOW · Estonian sentences begin with a capital letter.
- **ET-A1-0185** `a1-nach` · `study.examples[3].lv` · MEDIUM · The current Estonian time expression is ungrammatical and unnatural.
- **ET-A1-0186** `a1-nehmen` · `study.tip.text` · MEDIUM · Näited on läti keeles käskivas kõneviisis, kuid eesti tõlge kasutab oleviku 3. p…
- **ET-A1-0187** `a1-probieren` · `study.examples[3].lv` · MEDIUM · Riideeseme proovimise tähendus väljendub eesti keeles loomulikult ühendiga „selg…
- **ET-A1-0188** `a1-probieren` · `study.comparison[1].meaning` · HIGH · Läti „mēģināt“ tähendab siin „proovima“, mitte „testima / kontrollima“.
- **ET-A1-0189** `a1-probieren` · `study.comparison[2].meaning` · HIGH · Läti „pārbaudīt“ tähendab „kontrollima“; „üritama“ tähendab hoopis proovimist võ…
- **ET-A1-0190** `a1-probieren` · `study.comparison[3].meaning` · HIGH · Läti „pielaikot“ tähendab riiete selgaproovimist, mitte kontrollimist.
- **ET-A1-0191** `a1-sich` · `study.comparison[1].meaning` · LOW · „ich puhul” ei ole loomulik ega grammatiline väljend; vormi tähistamisel on vaja…
- **ET-A1-0192** `a1-sich` · `study.comparison[2].meaning` · LOW · „du puhul” ei ole loomulik ega grammatiline väljend; vormi tähistamisel on vaja …
- **ET-A1-0193** `a1-sicher` · `study.examples[3].lv` · MEDIUM · Siin tähendab „sicher” ohutut või turvalist, mitte kindlat lahendust.
- **ET-A1-0194** `a1-sie-study` · `study.examples[0].lv` · HIGH · Praegune tekst muudab mitmuse ainsuseks ja lisab algallikas puuduva Anna ning li…
- **ET-A1-0195** `a1-sie-study` · `study.examples[1].lv` · HIGH · Praegune tekst ei tõlgi algallika tähendust „ta teeb süüa”, vaid annab hoopis mu…
- **ET-A1-0196** `a1-sie-study` · `study.examples[2].lv` · HIGH · Praegune tekst muudab nii isiku, arvu kui ka tegevuse ning ei vasta algallikale.
- **ET-A1-0197** `a1-sie-study` · `study.examples[3].lv` · HIGH · Praegune tekst ei tõlgi „nad teevad süüa”, vaid kirjeldab laste mängimist.
- **ET-A1-0198** `a1-sie-study` · `study.examples[4].lv` · HIGH · Praegune tekst on formaalne pöördumine ja ei vasta algallika mitmuse tähendusele…
- **ET-A1-0199** `a1-sie-study` · `study.examples[5].lv` · HIGH · Praegune tekst on täiesti erineva sisuga; DE „sie” on siin tõlgitud mitmusena, m…
- **ET-A1-0200** `a1-sie-study-2` · `study.examples[1].lv` · HIGH · Suure algustähega „Sie” on formaalne „teie”; praegune tekst kasutab ainsuse kolm…
- **ET-A1-0201** `a1-sie-study-2` · `study.examples[2].lv` · HIGH · Suure algustähega „Sie” nõuab formaalset teietamisvormi, mitte „ta”-vormi.
- **ET-A1-0202** `a1-sie-study-2` · `study.examples[3].lv` · HIGH · Ka siin on DE „Sie” formaalne pöördumine, kuid eestikeelne tekst kasutab mitmuse…
- **ET-A1-0203** `a1-sie-study-2` · `study.examples[4].lv` · HIGH · Suure algustähega „Sie” nõuab formaalset teietamisvormi, mitte „nad”-vormi.
- **ET-A1-0204** `a1-sitzen` · `study.comparison[3].meaning` · LOW · „Istet võtma” on ebaloomulik kalkeeritud väljend; „istuma” on siin loomulikum va…
- **ET-A1-0205** `a1-wenn` · `study.examples[3].lv` · HIGH · Lause väljendab kaudset jah/ei-küsimust ehk ob, mitte wenn-tähendust.
- **ET-A1-0206** `a1-wer` · `study.translation` · MEDIUM · Wer tähendab „kes”; „kumb” vastab pigem saksa sõnale welcher.
- **ET-A1-0207** `a1-wer` · `study.examples[0].lv` · HIGH · Näide küsib „kes?”, kuid praegune tõlge tähendab „mis?” ja vastab saksa was-le.
- **ET-A1-0208** `a1-werden` · `study.examples[0].lv` · MEDIUM · „Ma jään väsinuks” on siin ebaloomulik; saksa „werde müde” vaste on loomulikult …
- **ET-A1-0209** `a1-zu` · `study.comparison[1].meaning` · MEDIUM · „-sse” ja komitatiiv „-dega” on omavahel vastuolus ning väljend on eesti keeles …
- **ET-A1-0210** `a1-zum` · `study.comparison[1].meaning` · HIGH · zum on zu + dem ehk meessoost või kesksoost nimisõna vorm; naissoo vorm on zur.
