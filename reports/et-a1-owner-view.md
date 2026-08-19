# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **216**

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
| 201–216 | 16 | [et-a1-owner-view-group05.md](./et-a1-owner-view-group05.md) |

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
- **ET-A1-0060** `a1-Arm-44` · `etText` · MEDIUM · Saksa Arm tähendab käsivart; käsi tähendab eeskätt kätt ja ei ole siin täpne vas…
- **ET-A1-0061** `a1-ganz-219` · `etText` · MEDIUM · „Kõik” tähendab „all/everything”, mitte „whole/entire”, mis on „ganz” põhitähend…
- **ET-A1-0062** `a1-kochen-317` · `etText` · MEDIUM · „Valmistama” tähendab üldiselt valmistamist; „kochen” täpsem vaste on „toitu val…
- **ET-A1-0063** `a1-nicht-447` · `etText` · MEDIUM · „Ei“ tähendab eesti keeles peamiselt „nein“; „nicht“ vaste on „mitte“.
- **ET-A1-0064** `a1-sprechen-study` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0065** `a1-sprechen-study` · `study.examples[2].lv` · HIGH · Näide kordab eelmise näite sisu ega tõlgi lauset „Ta räägib oma õpetajaga“.
- **ET-A1-0066** `a1-klein-study` · `study.examples[1].lv` · HIGH · Eestikeelne näide kirjeldab tuba, kuid lähtefraas räägib lapsest.
- **ET-A1-0067** `a1-klein-study` · `study.examples[2].lv` · HIGH · Eestikeelne näide kordab eelmise näite sisu ega tõlgi lauset „Mul on väike kott“…
- **ET-A1-0068** `a1-an` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0069** `a1-an` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0070** `a1-an` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0071** `a1-ab` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0072** `a1-ab` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0073** `a1-ab` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0074** `a1-ab` · `study.examples[3].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0075** `a1-aber` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0076** `a1-aber` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0077** `a1-aber` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0078** `a1-also` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0079** `a1-also` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0080** `a1-also` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0081** `a1-auch-study` · `study.examples[1].lv` · HIGH · Näide kordab esimese näite sisu ega tõlgi lauset „Ta töötab ka siin“.
- **ET-A1-0082** `a1-auch-study` · `study.examples[2].lv` · HIGH · Eestikeelne näide kordab eelmise näite sisu ega tõlgi päevasesoovi.
- **ET-A1-0083** `a1-auf` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0084** `a1-auf` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0085** `a1-auf` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0086** `a1-auf` · `study.comparison[1].meaning` · MEDIUM · Sulgudes olev väljend on praegu grammatilise seoseta nimisõnafraas.
- **ET-A1-0087** `a1-aus` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0088** `a1-aus` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0089** `a1-aus` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0090** `a1-aufs` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0091** `a1-aufs` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0092** `a1-aufs` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0093** `a1-aufs` · `study.examples[3].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0094** `a1-aufs` · `study.examples[4].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0095** `a1-aufs` · `study.examples[5].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0096** `a1-aufs` · `study.examples[6].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0097** `a1-aufs` · `study.examples[7].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0098** `a1-baden` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0099** `a1-baden` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0100** `a1-baden` · `study.examples[2].lv` · HIGH · „Ujub“ vastab verbile schwimmen, mitte baden; see on ka kaardi võrdluses eristat…
- **ET-A1-0101** `a1-baden` · `study.examples[3].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0102** `a1-bei` · `study.examples[0].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0103** `a1-bei` · `study.examples[1].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0104** `a1-bei` · `study.examples[2].lv` · LOW · Lause algus peab olema suure algustähega.
- **ET-A1-0105** `a1-bitte` · `study.examples[0].lv` · HIGH · The Estonian text means only “Please!”, omitting the requested coffee.
- **ET-A1-0106** `a1-bitte` · `study.examples[1].lv` · MEDIUM · The translation omits the imperative “come in” and is reduced to “please”.
- **ET-A1-0107** `a1-bitte` · `study.examples[2].lv` · HIGH · This text translates the other example and adds a coffee request absent from the…
- **ET-A1-0108** `a1-bitte` · `study.comparison[0].meaning` · CRITICAL · “lūdzu” is Latvian, not Estonian.
- **ET-A1-0109** `a1-bitte` · `study.comparison[1].meaning` · CRITICAL · “lūgums” is Latvian, not Estonian.
- **ET-A1-0110** `a1-bitte-study` · `study.examples[1].lv` · HIGH · The current text means “please!”, not “He fulfills my request.”
- **ET-A1-0111** `a1-bitte-study` · `study.examples[2].lv` · HIGH · The current text means “one coffee, please”, not “She has two requests.”
- **ET-A1-0112** `a1-bitte-study` · `study.comparison[0].meaning` · CRITICAL · “lūgums” is Latvian, not Estonian.
- **ET-A1-0113** `a1-bitte-study` · `study.comparison[1].meaning` · CRITICAL · “lūdzu” is Latvian, not Estonian.
- **ET-A1-0114** `a1-bleiben` · `study.examples[3].lv` · HIGH · For German “bleiben”, the Estonian must express staying, not going home.
- **ET-A1-0115** `a1-bringen` · `study.examples[0].lv` · HIGH · The current text requests water and does not translate “I bring you a book.”
- **ET-A1-0116** `a1-bringen` · `study.examples[1].lv` · HIGH · The current text means “I take you home”, not “I take a package to the post offi…
- **ET-A1-0117** `a1-bringen` · `study.examples[2].lv` · HIGH · The current text changes both subject and object: it says he takes a book, not I…
- **ET-A1-0118** `a1-bringen` · `study.comparison[1].meaning` · MEDIUM · “võtma” means take, while aiznest is carrying or taking something away.
- **ET-A1-0119** `a1-bringen` · `study.comparison[2].meaning` · MEDIUM · aizvest means taking or transporting someone/something, not fetching.
- **ET-A1-0120** `a1-bringen` · `study.comparison[3].meaning` · LOW · “kohale toimetama” is the natural concise equivalent of “deliver/transport”.
- **ET-A1-0121** `a1-bringen` · `study.comparison[4].meaning` · CRITICAL · “paņemt” is Latvian, not Estonian.
- **ET-A1-0122** `a1-dass` · `study.comparison[2].meaning` · MEDIUM · “et” can mean dass, but “lai” expresses purpose and should be distinguished as “…
- **ET-A1-0123** `a1-dieser` · `study.examples[1].lv` · HIGH · The current text means “I like this dog”, not “I see this dog.”
- **ET-A1-0124** `a1-ein` · `study.examples[3].lv` · CRITICAL · The current text is Latvian and must be translated into Estonian.
- **ET-A1-0125** `a1-ein` · `study.comparison[0].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0126** `a1-ein` · `study.comparison[1].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0127** `a1-ein` · `study.comparison[2].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0128** `a1-ein` · `study.comparison[3].meaning` · CRITICAL · The current text is Latvian, not Estonian.
- **ET-A1-0129** `a1-es` · `study.examples[0].lv` · HIGH · Estonian sentence does not translate the impersonal German/Latvian example “It r…
- **ET-A1-0130** `a1-es` · `study.examples[1].lv` · HIGH · Current sentence means “he/she is tired”, not the impersonal expression “it is c…
- **ET-A1-0131** `a1-es` · `study.examples[2].lv` · HIGH · Current sentence means “he/she works here”, not “the child is sleeping”.
- **ET-A1-0132** `a1-es` · `study.examples[3].lv` · HIGH · Current sentence means “this is my book”, not “it is tired”.
- **ET-A1-0133** `a1-es` · `study.comparison[0].meaning` · CRITICAL · The phrase “bezpersoniska forma” is Latvian and must be replaced with Estonian.
- **ET-A1-0134** `a1-es` · `study.comparison[1].meaning` · HIGH · The comparison should identify Latvian “es” as the personal pronoun “mina”, not …
- **ET-A1-0135** `a1-euch` · `study.tip.text` · MEDIUM · As a direct object, the Estonian equivalent is “teid”, not the subject/genitive …
- **ET-A1-0136** `a1-finden` · `study.examples[0].lv` · HIGH · The negation reverses the meaning: the source says “I find my key”, not “I canno…
- **ET-A1-0137** `a1-finden` · `study.examples[1].lv` · HIGH · Current sentence asks whether the phone was found; it does not express an opinio…
- **ET-A1-0138** `a1-finden` · `study.examples[2].lv` · HIGH · Current sentence gives an opinion instead of asking what someone thinks about th…
- **ET-A1-0139** `a1-finden` · `study.examples[3].lv` · HIGH · The translation is correct, but it is duplicated from the preceding mismatched e…
- **ET-A1-0140** `a1-gross-study` · `study.examples[1].lv` · HIGH · Current sentence says “the house is big”; it does not translate “Berlin is a big…
- **ET-A1-0141** `a1-heißen` · `study.comparison[4].meaning` · CRITICAL · “zvanīt” is Latvian, not Estonian; the Estonian equivalent is “helistama”.
- **ET-A1-0142** `a1-hoch-study` · `study.examples[1].lv` · HIGH · The source sentence refers to a shelf, but the Estonian says “mountain”; both su…
- **ET-A1-0143** `a1-jung` · `etMain` · MEDIUM · German “jung” also applies to animals and things; the qualifier incorrectly rest…
- **ET-A1-0144** `a1-jung` · `study.translation` · MEDIUM · German “jung” also applies to animals and things; the qualifier incorrectly rest…
- **ET-A1-0145** `a1-können` · `study.comparison[2].meaning` · MEDIUM · Vajama tähendab 'needima', mitte kohustust või vajalikkust; saksa müssen-vastena…
- **ET-A1-0146** `a1-kosten` · `study.examples[4].lv` · MEDIUM · Maksan arve tähendab 'ich bezahle die Rechnung', mitte 'die Rechnung kostet'.
- **ET-A1-0147** `a1-kosten` · `study.examples[5].lv` · MEDIUM · Sularahas maksma tähendab tasumist; kosten väljendab asja või hinna maksumust.
- **ET-A1-0148** `a1-kosten` · `study.examples[7].lv` · MEDIUM · Ma maksan kohe tähendab 'ich werde sofort bezahlen', mitte 'es kostet'.
- **ET-A1-0149** `a1-kosten` · `study.comparison[1].meaning` · MEDIUM · Ära maksma tähendab tasumist ja kuulub bezahlen tähendusse, mitte kosten juurde.
- **ET-A1-0150** `a1-kosten` · `study.comparison[2].meaning` · MEDIUM · Ära maksma tähendab tasumist ja kuulub bezahlen tähendusse, mitte kosten juurde.
- **ET-A1-0151** `a1-laden-study` · `study.examples[3].lv` · MEDIUM · Telefoni laadima vastab saksa verbile laden, kuid kaardil olev Laden on nimisõna…
- **ET-A1-0152** `a1-laut` · `study.examples[4].lv` · MEDIUM · Ilus heli vastab tähendusele 'schöner Klang', mitte omadussõnale laut ehk vali.
- **ET-A1-0153** `a1-laut` · `study.examples[5].lv` · MEDIUM · Praegune lause tähendab lihtsalt 'ma kuulen heli' ega väljenda omadust vali ehk …
- **ET-A1-0154** `a1-laut-study` · `study.examples[1].lv` · MEDIUM · Laut on nimisõna 'heli'; praegune lause kasutab ainult omadussõna vali.
- **ET-A1-0155** `a1-laut-study` · `study.examples[2].lv` · MEDIUM · Praegune lause tähendab 'ära räägi nii valjult' ega õpeta nimisõna heli.
- **ET-A1-0156** `a1-laut-study` · `study.examples[3].lv` · MEDIUM · Praeguses lauses puudub nimisõna heli; see on omadussõna vali kasutus.
- **ET-A1-0157** `a1-leise-study` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0158** `a1-leise-study` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0159** `a1-leise-study` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0160** `a1-liegen` · `study.examples[3].lv` · MEDIUM · Ma panen raamatu lauale means legen, not liegen; the German lemma denotes an alr…
- **ET-A1-0161** `a1-mal` · `study.examples[0].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0162** `a1-mal` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0163** `a1-mal` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0164** `a1-mal` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0165** `a1-mann` · `study.examples[0].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0166** `a1-mann` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0167** `a1-mann` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0168** `a1-mann` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0169** `a1-mann` · `study.examples[4].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0170** `a1-mann` · `study.examples[5].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0171** `a1-mit` · `study.examples[0].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0172** `a1-mit` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0173** `a1-mit` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0174** `a1-mit` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0175** `a1-mögen` · `study.examples[0].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0176** `a1-mögen` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0177** `a1-mögen` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0178** `a1-mögen` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0179** `a1-morgen` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0180** `a1-morgen` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0181** `a1-morgen` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0182** `a1-morgen-study` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0183** `a1-morgen-study` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0184** `a1-morgen-study` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0185** `a1-müssen` · `study.examples[0].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0186** `a1-müssen` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0187** `a1-müssen` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0188** `a1-müssen` · `study.examples[3].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0189** `a1-nach` · `study.examples[0].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0190** `a1-nach` · `study.examples[1].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0191** `a1-nach` · `study.examples[2].lv` · LOW · Estonian sentence beginnings must be capitalized.
- **ET-A1-0192** `a1-nach` · `study.examples[3].lv` · MEDIUM · The current time expression is a literal, unnatural calque; üle kaheksa is idiom…
- **ET-A1-0193** `a1-nehmen` · `study.tip.text` · MEDIUM · Pärast „Pea meeles“ on siin loomulikumad ja allikaga kooskõlas imperatiivid „võt…
- **ET-A1-0194** `a1-ob` · `study.examples[3].lv` · MEDIUM · „Ob“ esineb kaudses küsimuses; praegune eestikeelne näide on otsene küsimus ja i…
- **ET-A1-0195** `a1-passen` · `study.comparison[1].meaning` · MEDIUM · „Seisma“ ei tähenda rõivaste või värvi kohta „sobima“; see moonutab kaardil õpet…
- **ET-A1-0196** `a1-probieren` · `study.comparison[1].meaning` · HIGH · Läti „mēģināt“ tähendab „proovima“, mitte „testima / kontrollima“.
- **ET-A1-0197** `a1-probieren` · `study.comparison[2].meaning` · HIGH · Läti „pārbaudīt“ tähendab „kontrollima“; „üritama“ tähendab hoopis proovimist võ…
- **ET-A1-0198** `a1-probieren` · `study.comparison[3].meaning` · HIGH · „Pielaikot“ tähendab rõivast selga proovima, mitte kontrollima.
- **ET-A1-0199** `a1-schwimmen` · `study.comparison[0].meaning` · LOW · Praegune väljend on kohmakas; nimisõnaline vorm on selles võrdluses loomulikum.
- **ET-A1-0200** `a1-sich` · `study.comparison[1].meaning` · LOW · „ich puhul“ ei ole loomulik ega korrektne väljend; võrdlus vajab sobivat kaassõn…
- **ET-A1-0201** `a1-sich` · `study.comparison[2].meaning` · LOW · „du puhul“ ei ole loomulik ega korrektne väljend; võrdlus vajab sobivat kaassõna…
- **ET-A1-0202** `a1-sicher` · `study.examples[3].lv` · MEDIUM · „Sicher“ tähendab siin ohutut, mitte kindlat lahendust; ülejäänud kaart kasutab …
- **ET-A1-0203** `a1-sie-study-2` · `study.examples[1].lv` · HIGH · Formaalse „Sie“ vaste peab olema viisakas teine isik, mitte ainsuse kolmas isik …
- **ET-A1-0204** `a1-sie-study-2` · `study.examples[2].lv` · HIGH · Formaalse „Sie“ vaste peab olema viisakas teine isik, mitte ainsuse kolmas isik …
- **ET-A1-0205** `a1-sie-study-2` · `study.examples[3].lv` · HIGH · „Nad“ tähendab kolmandat isikut; formaalne „Sie“ nõuab eesti keeles viisakat tei…
- **ET-A1-0206** `a1-sie-study-2` · `study.examples[4].lv` · HIGH · „Nad“ tähendab kolmandat isikut; formaalne „Sie“ nõuab eesti keeles viisakat tei…
- **ET-A1-0207** `a1-unter` · `study.examples[3].lv` · HIGH · Näide kirjeldab üleval olemist ehk über, mitte unter; eestikeelne lause ei vasta…
- **ET-A1-0208** `a1-verstehen` · `study.examples[3].lv` · HIGH · Oskama rääkida tähendab können, mitte verstehen; näide ei illustreeri mõistmist.
- **ET-A1-0209** `a1-vor` · `study.examples[3].lv` · HIGH · Praegune näide kasutab vastandsuunda pärast; vor tähendab siin enne.
- **ET-A1-0210** `a1-wenn` · `study.examples[3].lv` · HIGH · Kas-ta konstruktsioon tähendab „ob”, mitte „wenn”; praegune näide ei illustreeri…
- **ET-A1-0211** `a1-wer` · `study.translation` · HIGH · Wer tähendab „kes”; „kumb” vastab pigem saksa sõnale welcher.
- **ET-A1-0212** `a1-wer` · `study.examples[0].lv` · HIGH · Wer küsib inimese kohta „kes”; „mis see on?” vastab sõnale was.
- **ET-A1-0213** `a1-werden` · `study.examples[3].lv` · HIGH · „Ma olen väsinud” tähendab sein, mitte werden; werden väljendab muutumist või se…
- **ET-A1-0214** `a1-zu` · `study.comparison[1].meaning` · MEDIUM · -ga tähendab 'koos'; sihtkoha puhul on vaja sisseütlevat käänet: linnadesse/riik…
- **ET-A1-0215** `a1-zum` · `study.comparison[1].meaning` · HIGH · zum = zu dem, mida kasutatakse meessoo või kesks soo, mitte naissoo korral.
- **ET-A1-0216** `a1-zum` · `study.comparison[3].meaning` · MEDIUM · Linnade ja riikide nimedega kasutatakse sihtkoha tähenduses tavaliselt nach, mit…
