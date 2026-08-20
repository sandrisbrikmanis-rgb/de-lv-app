# ET–DE A2 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**MAIN_BASE_SHA:** `24841308383fabf7eb219f3314041ede4d2f0f10`
**WORK_BRANCH:** `main`
**Audit PR:** [#614](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/614)
**Findings:** **225** · sākotnēji visi **PENDING**

> **Authoritative monolithic tabula** ir zemāk (MASTER §7.23). Papildus — **5 group faili** ērtākai aizpildīšanai.

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

## Navigācija

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-review-GITHUB.md) |
| OWNER VIEW | [et-a2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view.md) |
| Decisions 1–50 (secondary) | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group01.md) |
| Decisions 51–100 (secondary) | [et-a2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group02.md) |
| Decisions 101–150 (secondary) | [et-a2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group03.md) |
| Decisions 151–200 (secondary) | [et-a2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group04.md) |
| Decisions 201–225 (secondary) | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group05.md) |

## Pilna tabula (authoritative monolithic — MASTER §7.23)
| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-A2-0002 | a2-abfahren | entry[2].study.comparison[3].example | Der Bus geht gleich ab. = Buss väljub kohe. saglabāta nemainīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0003 | a2-abgeben | entry[5].study.comparison[2].example | Ich gebe das Buch LV/atlikušās valodas zurück. = Ma annan raamatu tagasi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0004 | a2-abgeben | entry[5].study.comparison[4].example | Ich verkaufe mein LV/atlikušās valodas Fahrrad. = Ma müün oma jalgratta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0005 | a2-absagen | entry[11].study.comparison[3].example | Ich storniere die LV/atlikušās valodas Buchung. = Ma tühistan broneeringu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0006 | a2-absagen | entry[11].study.comparison[4].example | FOREIGN_REMNANT **LABOT** Er sagt nein. = LV/atlikušās valodas Ta ütleb ei. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0007 | a2-abschließen | entry[13].study.comparison[3].example | Ich unterschreibe LV/atlikušās valodas den Vertrag. = Ma fragments aizstāts ar allkirjastan lepingu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0008 | a2-abstellen | entry[16].study.comparison[1].example | Ich schalte den Computer aus. = fragments aizstāts ar Ma lülitan arvuti välja. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0009 | a2-abstellen | entry[16].study.comparison[3].example | Der Fahrer stoppt LV/atlikušās valodas das Auto. = Juht peatab auto. saglabāta nemainīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0010 | a2-angewandt | entry[41].study.comparison[0].example | wird angewandt. = fragments aizstāts ar Seda meetodit rakendatakse. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0011 | a2-angreifen | entry[42].study.comparison[1].example | Die Gruppe attackiert ihn. = fragments aizstāts ar Rühm ründab teda. saglabāta nemainīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0012 | a2-angreifen | entry[42].study.comparison[2].example | Er beleidigt mich. = Ta solvab fragments aizstāts ar mind. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0013 | a2-angreifen | entry[42].study.comparison[3].example | Sie kritisiert den Vorschlag. = fragments aizstāts ar Ta kritiseerib ettepanekut. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0014 | a2-anhänger | entry[44].study.comparison[1].example | Er ist ein Fan der Mannschaft. = fragments aizstāts ar Ta on meeskonna fänn. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0015 | a2-anhänger | entry[44].study.comparison[2].example | Sie hat viele Unterstützer. = fragments aizstāts ar Tal on palju toetajaid. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0016 | a2-anhänger | entry[44].study.comparison[3].example | Der Wohnwagen steht am See. = fragments aizstāts ar Haagissuvila seisab järve ääres. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0017 | a2-anheizen | entry[45].study.comparison[1].example | Wir heizen die Wohnung. = Me kütame korterit. saglabāta nemainīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0018 | a2-anheizen | entry[45].study.comparison[3].example | Das verschärft den Streit. = See fragments aizstāts ar teravdab tüli. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0019 | a2-anlegen | entry[55].study.comparison[1].example | Ich lege das Buch LV/atlikušās valodas auf den Tisch. = fragments aizstāts ar Ma panen raamatu lauale. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0020 | a2-anmelden | entry[57].study.comparison[1].example | Sie sich bitte an. = Palun registreeruge. saglabāta nemainīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0022 | a2-anstellen | entry[65].study.comparison[0].example | Die Firma stellt ihn an. = Firma võtab ta tööle. saglabāta nemainīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0023 | a2-artikel | entry[90].study.comparison[1].example | Der ist neu. = Zeitungsartikel dabisku ET; DE daļa Ajaleheartikkel on uus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0024 | a2-artikel | entry[90].study.comparison[4].example | Der Paragraph ist LV/atlikušās valodas wichtig. = Paragrahv on oluline. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0025 | a2-aufheben | entry[118].study.comparison[0].example | Ich hebe den Schlüssel auf. = fragments aizstāts ar Ma korjan võtme üles. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0026 | a2-aufheben | entry[118].study.comparison[1].example | Ich hebe die Hand. = Ma tõstan fragments aizstāts ar käe. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0027 | a2-auflage | entry[127].study.comparison[0].example | Die Auflage ist hoch. = Tiraaž on fragments aizstāts ar suur. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0029 | a2-aufnahme | entry[132].study.comparison[4].example | Die Aufnahmeprüfung LV/atlikušās ist morgen. = Sisseastumiseksam on homme. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0030 | a2-aufnehmen | entry[133].study.comparison[1].example | Ich nehme das Buch. LV/atlikušās = Ma võtan raamatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0031 | a2-aufrichtig | entry[138].study.comparison[0].example | Entschuldigung. = Siiras vabandus. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0032 | a2-aufrichtig | entry[138].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Herzliche Grüße. = LV/atlikušās Südamlikud tervitused. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0034 | a2-aufrufen | entry[139].study.comparison[3].example | Er fordert uns auf. LV/atlikušās = Ta kutsub meid üles. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0038 | a2-ausziehen | entry[169].study.comparison[3].example | Das Kind zieht sich LV/atlikušās aus. = Laps riietub lahti. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0039 | a2-bank | entry[194].study.comparison[2].example | Die Bankfiliale ist LV/atlikušās geöffnet. = Pangakontor on avatud. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0040 | a2-bank | entry[194].study.comparison[3].example | Wir sitzen auf der Parkbank. = Me istume pargipingil. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0041 | a2-bank | entry[194].study.comparison[5].example | Ich sitze auf einem LV/atlikušās Stuhl. = Ma istun toolil. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0042 | a2-bauer | entry[207].study.comparison[2].example | Wir besuchen einen Bauernhof. = Me külastame talu. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0045 | a2-bedienen | entry[213].study.comparison[0].example | Der Kellner bedient LV/atlikušās uns. = Kelner teenindab meid. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0046 | a2-behalten | entry[221].study.comparison[4].example | Ich bewahre die Quittung auf. = valodas Ma hoian kviitungi alles. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0047 | a2-bekannt | entry[224].study.comparison[0].example | Das ist bekannt. LV/atlikušās = See on teada. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0048 | a2-bekannt | entry[224].study.comparison[2].example | Die Umgebung ist LV/atlikušās mir vertraut. = valodas Ümbrus on mulle tuttav. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0049 | a2-bekannt | entry[224].study.comparison[3].example | Wir sind befreundet. = Me oleme sõbrad. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0050 | a2-bestellen | entry[242].study.comparison[4].example | Ich bearbeite den Text. = Ma töötlen teksti. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0052 | a2-boden | entry[272].study.comparison[0].example | Die Tasche liegt LV/atlikušās auf dem Boden. = valodas Kott on põrandal. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0053 | a2-boden | entry[272].study.comparison[1].example | Der Fußboden ist LV/atlikušās sauber. = Põrand on puhas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0056 | a2-böse | entry[277].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Er ist zornig. = LV/atlikušās Ta on vihane. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0057 | a2-böse | entry[277].study.comparison[4].example | FOREIGN_REMNANT **LABOT** Ich bin sauer. = LV/atlikušās Ma olen pahane. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0059 | a2-brav | entry[285].study.comparison[1].example | Er ist ein guter LV/atlikušās Mensch. = Ta on hea inimene. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0060 | a2-brav | entry[285].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Sie ist nett. = LV/atlikušās Ta on kena. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0061 | a2-dafür | entry[318].study.comparison[3].example | Ich bin dagegen. LV/atlikušās = Ma olen selle vastu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0062 | a2-damit | entry[321].study.comparison[0].example | Ich lerne, damit LV/atlikušās = õpin, et eksami sooritada. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0063 | a2-damit | entry[321].study.comparison[2].example | Ich lerne, um zu LV/atlikušās bestehen. = Ma eksami sooritada. daļa saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0064 | a2-damit | entry[321].study.comparison[3].example | ich hier. = valodas ma siia. daļa saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0065 | study-der-dank | entry[323].study.comparison[0].example | Dank! = Suur tänu! aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0066 | study-der-dank | entry[323].study.comparison[1].example | FOREIGN_REMNANT **LABOT** Nein, danke. = LV/atlikušās | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0067 | study-der-dank | entry[323].study.comparison[4].example | Ich bedanke mich LV/atlikušās Ihnen. = Ma tänan teid. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0069 | a2-darüber | entry[325].study.comparison[1].example | Wir sprechen Problem. = über das Me räägime probleemist. daļa saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0070 | a2-davor | entry[329].study.comparison[0].example | Ich habe Angst davor. = Ma aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0071 | a2-davor | entry[329].study.comparison[1].example | Auto. = steht ein Maja ees seisab daļa saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0072 | a2-davor | entry[329].study.comparison[2].example | wir. = Pärast seda läheme. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0074 | a2-decke | entry[331].study.comparison[1].example | Die Bettdecke ist weich. = valodas aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0075 | a2-decke | entry[331].study.comparison[4].example | Das Bild hängt an der Wand. = valodas seinal. daļa saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0076 | a2-denn | entry[334].study.comparison[1].example | Ich bleibe, weil LV/atlikušās = jään, sest vihma sajab. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0077 | a2-dick | entry[341].study.comparison[0].example | Das Buch ist dick. = Raamat on paks. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0078 | a2-dick | entry[341].study.comparison[1].example | Das Essen ist fett. = Toit on on rasvane. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0079 | a2-dick | entry[341].study.comparison[2].example | Das Papier ist dünn. = Paber on valodas on õhuke. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0080 | a2-doch | entry[346].study.comparison[0].example | FOREIGN_REMNANT **LABOT** Komm doch! = LV/atlikušās Tule ometi! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0081 | a2-doch | entry[346].study.comparison[4].example | Nein. = Kas sa tuled? Ei. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0082 | a2-doktor | entry[347].study.comparison[1].example | Der Arzt hilft mir. = Arst aitab mind. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0083 | a2-dünn | entry[364].study.comparison[0].example | Das Papier ist dünn. = Paber on valodas on õhuke. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0084 | a2-dünn | entry[364].study.comparison[1].example | Das Buch ist dick. = Raamat on paks. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0085 | a2-dünn | entry[364].study.comparison[3].example | Das Fleisch ist mager. = Liha on valodas Liha on lahja. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0086 | a2-dünn | entry[364].study.comparison[4].example | flüssig. = Mesi Mesi on vedel. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0089 | a2-eben | entry[369].study.comparison[0].example | Das ist eben so. LV/atlikušās = Nii see lihtsalt on. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0090 | a2-eben | entry[369].study.comparison[2].example | Ich habe ihn gesehen. = gerade eben Ma nägin teda just äsja. daļa saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0091 | a2-ehrlich | entry[377].study.comparison[0].example | FOREIGN_REMNANT **LABOT** Er ist ehrlich. = LV/atlikušās Ta on aus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0092 | a2-ehrlich | entry[377].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Sie ist nett. = Ta LV/atlikušās on kena. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0093 | a2-eigentlich | entry[378].study.comparison[1].example | FOREIGN_REMNANT **LABOT** Das ist echt. = LV/atlikušās See on ehtne. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0094 | a2-einsteigen | entry[394].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Wir steigen um. = LV/atlikušās Me istume ümber. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0095 | a2-erinnern | entry[420].study.comparison[3].example | Schlüssel. = Mõtle võtmele. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0096 | a2-etwa | entry[439].study.comparison[0].example | Das dauert etwa 20 LV/atlikušās Minuten. = See kestab umbes 20 minutit. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0097 | a2-fach | entry[444].study.comparison[0].example | Das Fach ist leer. LV/atlikušās = Lahter on tühi. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0098 | a2-fach | entry[444].study.comparison[3].example | Das ist mein Fachgebiet. = See on minu eriala. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0099 | a2-fach | entry[444].study.comparison[4].example | Lehrer. = Minu amet on õpetaja. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0101 | a2-fall | entry[455].study.comparison[0].example | komme ich. = Sel juhul tulen ma. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0102 | a2-fall | entry[455].study.comparison[1].example | Der Unfall war schlimm. = Õnnetus oli raske. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0103 | a2-fall | entry[455].study.comparison[3].example | Der Kasus ist wichtig. = Kääne on oluline. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0104 | a2-fehlen | entry[467].study.comparison[0].example | FOREIGN_REMNANT **LABOT** Mir fehlt Geld. = LV/atlikušās Mul puudub raha. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0105 | a2-fehlen | entry[467].study.comparison[2].example | Ich vermisse dich. LV/atlikušās = Ma igatsen sind. valodas | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0106 | a2-fehlen | entry[467].study.comparison[3].example | FOREIGN_REMNANT **LABOT** Er ist abwesend. = LV/atlikušās | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0107 | a2-feuer | entry[484].study.comparison[1].example | Der Brand ist groß. = Tulekahju on suur. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0108 | a2-feuer | entry[484].study.comparison[3].example | Die Feuerwehr kommt. = Tuletõrje tuleb. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0109 | a2-feuer | entry[484].study.comparison[4].example | Die Soldaten geben LV/atlikušās Feuer. = Sõdurid avavad tule. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0110 | a2-folgen | entry[508].study.comparison[2].example | Das Kind gehorcht. LV/atlikušās = Laps kuulab sõna. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0111 | a2-folgen | entry[508].study.comparison[3].example | Sie die Regeln. = Järgige reegleid. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0112 | a2-führen | entry[539].study.comparison[3].example | Ich bringe dich nach Hause. = Ma viin su koju. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0114 | a2-gerade | entry[580].study.comparison[0].example | Ich komme gerade. = Ma tulen praegu. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0115 | a2-gewinnen | entry[592].study.comparison[0].example | Wir gewinnen das LV/atlikušās Spiel. = Me võidame mängu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0116 | a2-gewinnen | entry[592].study.comparison[2].example | Ich bekomme eine LV/atlikušās Nachricht. = Ma saan sõnumi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0117 | a2-gießen | entry[595].study.comparison[3].example | Er schüttet Wasser aus. = Ta valab vee välja. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0120 | a2-indem | entry[703].study.comparison[0].example | Ich lerne, indem LV/atlikušās ich übe. = Ma õpin harjutades. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0121 | a2-indem | entry[703].study.comparison[2].example | Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0133 | a2-kurz | entry[855].study.comparison[1].example | FOREIGN_REMNANT **LABOT** kurz vor acht = LV/atlikušās veidi enne kaheksat | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0134 | a2-lage | entry[857].study.comparison[2].example | Der Standort ist LV/atlikušās gut. = Asukoht on hea. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0135 | a2-leiden | entry[877].study.comparison[0].example | Er leidet an Kopfschmerzen. = valodas Tal on peavalu. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0136 | a2-leiden | entry[877].study.comparison[2].example | Wir leiden unter LV/atlikušās der Hitze. = Me kannatame kuumuse käes. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0137 | a2-leiden | entry[877].study.comparison[4].example | FOREIGN_REMNANT **LABOT** Er ist krank. = LV/atlikušās Ta on haige. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0140 | a2-leiter | entry[880].study.comparison[0].example | Der Leiter der Firma. = Ettevõtte juht. Mitmus: die Leiter. saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0141 | a2-leitung | entry[881].study.comparison[2].example | Das Kabel ist zu LV/atlikušās kurz. = Kaabel on liiga lühike. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0142 | a2-leitung | entry[881].study.comparison[4].example | Die Wasserleitung LV/atlikušās tropft. = Veetoru tilgub. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0144 | a2-merken | entry[936].study.comparison[1].example | FOREIGN_REMNANT **LABOT** Merk dir das! = LV/atlikušās Jäta see meelde! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0145 | a2-mittel | entry[951].study.comparison[0].example | Husten = köharohi aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0146 | a2-mittel | entry[951].study.comparison[1].example | Das Medikament hilft. = Ravim aitab. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0147 | a2-mittel | entry[951].study.comparison[2].example | einfach. = See meetod on lihtne. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0149 | a2-note | entry[1019].study.comparison[1].example | Die Schulnote ist LV/atlikušās gut. = Koolihinne on hea. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0150 | a2-note | entry[1019].study.comparison[2].example | Die Musiknote ist LV/atlikušās hoch. = Noot on kõrge. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0152 | a2-offen | entry[1037].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Er ist ehrlich. = LV/atlikušās Ta on aus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0154 | a2-patient | entry[1064].study.comparison[2].example | Der Kranke liegt im Bett. = Haige lamab voodis. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0155 | a2-rolle | entry[1172].study.comparison[1].example | Er hat die Hauptrolle. = Tal on peaosa. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0156 | a2-satz | entry[1194].study.comparison[1].example | Der deutsche Satz LV/atlikušās ist richtig. = Saksakeelne lause on õige. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0157 | a2-scheinen | entry[1217].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Er wirkt ruhig. = LV/atlikušās Ta näib rahulik. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0159 | a2-schlange | entry[1229].study.comparison[1].example | Die Warteschlange LV/atlikušās ist lang. = Järjekord on pikk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0160 | a2-schlange | entry[1229].study.comparison[2].example | Die Stühle stehen LV/atlikušās in einer Reihe. = valodas Toolid seisavad reas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0161 | a2-schloss | entry[1236].study.comparison[3].example | Ich kaufe ein Fahrradschloss. = valodas Ma ostan jalgrattaluku. ET; DE daļa | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0162 | a2-schloss | entry[1236].study.comparison[4].example | Der Schlüssel ist LV/atlikušās weg. = Võti on kadunud. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0163 | a2-schuld | entry[1256].study.comparison[1].example | FOREIGN_REMNANT **LABOT** Er hat Schulden. = LV/atlikušās Tal on võlad. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0164 | a2-schuld | entry[1256].study.comparison[4].example | FOREIGN_REMNANT **LABOT** Ich bin schuld. = LV/atlikušās Mina olen süüdi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0165 | a2-sich-befinden | entry[1291].study.comparison[1].example | Das Büro ist oben. LV/atlikušās = Kontor on üleval. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0166 | a2-sich-befinden | entry[1291].study.comparison[2].example | Das Buch liegt auf LV/atlikušās dem Tisch. = Raamat lebab laual. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0167 | a2-sich-befinden | entry[1291].study.comparison[3].example | Das Auto steht vor LV/atlikušās dem Haus. = Auto seisab maja ees. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0168 | a2-sich-unterhalten | entry[1305].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Wir reden viel. = LV/atlikušās Me räägime palju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0169 | a2-sich-unterhalten | entry[1305].study.comparison[3].example | Wir amüsieren uns. LV/atlikušās = Me lõbutseme. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0171 | a2-sobald | entry[1325].study.comparison[4].example | gehe ich. = gegessen habe, Pärast söömist lähen ära. ET; DE daļa | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0173 | a2-sonst | entry[1336].study.comparison[1].example | alles gut. = Muidu on kõik hästi. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0174 | a2-sonst | entry[1336].study.comparison[2].example | ich an. = Vastasel juhul helistan. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0176 | a2-steigen | entry[1378].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Ich steige aus. = LV/atlikušās Ma väljun. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0177 | a2-stelle | entry[1380].study.comparison[0].example | Ich suche eine Stelle. = Ma otsin töökohta. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0178 | a2-stelle | entry[1380].study.comparison[4].example | Die Wunde tut weh. LV/atlikušās = Haav valutab. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0180 | a2-stimmen | entry[1388].study.comparison[1].example | Ich stimme dir zu. LV/atlikušās = Ma olen sinuga nõus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0181 | a2-stimmen | entry[1388].study.comparison[3].example | Wir wählen den Präsidenten. = Me valime presidendi. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0182 | a2-stimmen | entry[1388].study.comparison[4].example | FOREIGN_REMNANT **LABOT** Die Farbe passt. = LV/atlikušās Värv sobib. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0183 | a2-stoff | entry[1392].study.comparison[1].example | Das Material ist stabil. = Materjal on vastupidav. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0184 | a2-tafel | entry[1416].study.comparison[0].example | Der Lehrer Tafel. = schreibt an die Õpetaja kirjutab tahvlile. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0185 | a2-tafel | entry[1416].study.comparison[2].example | Die Speisekarte Tisch. = liegt auf dem Menüü on laual. ET; DE daļa | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0186 | a2-tafel | entry[1416].study.comparison[4].example | Schokolade = Tahvel šokolaadi. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0187 | a2-teil | entry[1431].study.comparison[0].example | FOREIGN_REMNANT **LABOT** Ein Teil fehlt. = LV/atlikušās Üks osa puudub. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0188 | a2-teil | entry[1431].study.comparison[1].example | Der erste Teil ist LV/atlikušās leicht. = Esimene osa on lihtne. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0189 | a2-teil | entry[1431].study.comparison[2].example | Das Ersatzteil ist LV/atlikušās teuer. = Varuosa on kallis. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0190 | a2-teil | entry[1431].study.comparison[4].example | Das ist eine gute LV/atlikušās Sache. = See on hea asi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0191 | a2-termin | entry[1438].study.comparison[4].example | Der Zeitpunkt ist LV/atlikušās wichtig. = Ajahetk on oluline. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0192 | a2-tief | entry[1443].study.comparison[0].example | Der See ist tief. LV/atlikušās = Järv on sügav. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0194 | a2-Traube-1464 | entry[1464].lv | Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0195 | a2-treffen | entry[1469].study.comparison[3].example | Ich erreiche dich LV/atlikušās nicht. = Ma ei saa sind kätte. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0197 | a2-übrig | entry[1488].study.comparison[1].example | übrig. = Palju toitu jääb üle. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0198 | a2-übrig | entry[1488].study.comparison[2].example | Der Rest ist für morgen. = Ülejääk on homseks. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0199 | a2-übrig | entry[1488].study.comparison[3].example | Die übrigen Gäste LV/atlikušās kommen später. = valodas Ülejäänud külalised tulevad aizstāts ar hiljem. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0201 | a2-umsonst | entry[1492].study.comparison[2].example | FOREIGN_REMNANT **LABOT** Das ist gratis. = LV/atlikušās See on tasuta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0202 | a2-verbinden | entry[1511].study.comparison[3].example | Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0204 | a2-verkehr | entry[1517].study.comparison[2].example | praktisch. = Verkehr ist Ühistransport on praktiline. saglabāta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0206 | a2-vorstellen | entry[1544].study.comparison[3].example | FOREIGN_REMNANT **LABOT** Was meinst du? = LV/atlikušās Mida sa arvad? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0209 | a2-wählen | entry[1551].study.comparison[3].example | FOREIGN_REMNANT **LABOT** Wir stimmen ab. = LV/atlikušās Me hääletame. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0211 | a2-wahrscheinlich | entry[1555].study.comparison[4].example | Das ist möglich. LV/atlikušās möglich. = See on võimalik. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0213 | a2-wert | entry[1583].study.comparison[1].example | Der Wert ist hoch. = Väärtus Väärtus on aizstāts ar ET; | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0214 | a2-wert | entry[1583].study.comparison[3].example | Die Stadt ist sehenswert. = valodas Linn on vaatamist DE daļa | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0215 | a2-wert | entry[1583].study.comparison[4].example | Das ist wichtig. LV/atlikušās wichtig. = See on oluline. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0217 | a2-wiegen | entry[1589].study.comparison[2].example | Das Gewicht ist normal. = Kaal Kaal on aizstāts ar ET; | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0218 | a2-wiegen | entry[1589].study.comparison[3].example | Ich messe die Länge. = Ma mõõdan aizstāts ar ET; | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0219 | a2-wiegen | entry[1589].study.comparison[4].example | Der Wagen ist neu. = Auto on uus. aizstāts ar ET; | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0220 | a2-ziehen | entry[1599].study.comparison[1].example | HIGH FOREIGN_REMNANT **LABOT** Ich ziehe um. = LV/atlikušās | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0222 | a2-ziehen | entry[1599].study.comparison[4].example | lassen. = Lase teel tõmmata. aizstāts ar ET; | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0223 | a2-zunehmen | entry[1614].study.comparison[1].example | HIGH FOREIGN_REMNANT **LABOT** Ich nehme ab. = LV/atlikušās alla. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0224 | a2-zunehmen | entry[1614].study.comparison[3].example | Die Preise steigen. = Hinnad aizstāts ar ET; | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0225 | a2-zurzeit | entry[1618].study.comparison[0].example | beschäftigt. = valodas Praegu olen DE daļa | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0226 | a2-zurzeit | entry[1618].study.comparison[3].example | möglich. = Praegu pole see Praegu pole DE daļa | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0235 | a2-anordnen-60 | etText | käskima • korrastama | käskima • korraldama | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0236 | a2-auffordern-113 | etText | kutsuma | üles kutsuma | MEDIUM | TRANSLATION | PENDING | | |
| ET-A2-0237 | a2-Ausverkauf-163 | etText | lõpumüük | väljamüük | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0238 | a2-Cafeteria-304 | etText | kafeteeria | kafeteria | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-A2-0245 | a2-Humor-688 | etText | humoor | huumor | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-A2-0247 | a2-jedoch-728 | etText | siiski | siiski | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-A2-0248 | a2-jener-731 | etText | see | too | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0249 | a2-joggen-735 | etText | sörkjooksu tegema | sörkima | MEDIUM | NATURALNESS | PENDING | | |
| ET-A2-0252 | a2-Kostüm-839 | etText | naiste kostüüm | kostüüm | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0253 | a2-Leder-871 | etText | töödeldud nahk | nahk | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0256 | a2-Neffe-1001 | etText | vennapoeg | venna- või õepoeg | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0257 | a2-Nichte-1009 | etText | vennatütar | venna- või õetütar | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0260 | a2-Rindfleisch-1166 | etText | loomaliha | veiseliha | HIGH | SEMANTICS | PENDING | | |
| ET-A2-0263 | a2-selten-1277 | etText | harv | harva | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0264 | a2-so viel-1324 | etText | nii palju • kui palju | nii palju | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0269 | a2-studieren-1407 | etText | õppima | ülikoolis õppima | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0273 | a2-Wild-1592 | etText | ulukiliha | uluk | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0280 | a2-anheizen | study.tip.leftBlocks[0].text | Koos Ofen, Feuer või Grill tähendab anheizen kütma panema või tuld õhutama. | Koos Ofen, Feuer või Grill tähendab anheizen üles kütmist või tule õhutamist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0281 | a2-anheizen | study.tip.leftBlocks[1].text | Koos Stimmung, Diskussion või Streit tähendab see sageli olukorda teravdama. | Koos Stimmung, Diskussion või Streit tähendab see sageli olukorra teravdamist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0282 | a2-anheizen | study.important.text | anheizen võib olla otsese või ülekantud tähendusega. | anheizen võib olla otseses või ülekantud tähenduses. | LOW | GRAMMAR | PENDING | | |
| ET-A2-0284 | a2-anlegen | study.tip.leftBlocks[1].text | Arvutis tähendab Konto/Datei anlegen kontot/faili looma. | Arvutis tähendab Konto/Datei anlegen konto või faili loomist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0285 | a2-anmelden | study.tip.leftBlocks[0].text | Kursuse, testi või ürituse puhul tähendab anmelden tavaliselt end registreerima. | Kursuse, testi või ürituse puhul tähendab anmelden tavaliselt enda registreerumist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0286 | a2-anmelden | study.tip.leftBlocks[1].text | Arsti või asutuse puhul tähendab anmelden sageli end kirja panema või registreeruma. | Arsti või asutuse puhul tähendab anmelden sageli enda kirja panemist või registreerumist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0291 | a2-aschenputtel | etMain | tuhkatriinu | tuhkatriinu | CRITICAL | TRANSLATION | PENDING | | |
| ET-A2-0293 | a2-aufheben | study.tip.leftBlocks[0].text | Kui miski on maas, tähendab aufheben sageli üles tõstma. | Kui miski on maas, tähendab aufheben sageli üles tõstmist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0294 | a2-aufheben | study.tip.leftBlocks[1].text | Kui jutt on reeglist või otsusest, tähendab aufheben tühistama. | Kui jutt on reeglist või otsusest, tähendab aufheben tühistamist. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0297 | a2-aufnahme | study.important.text | die Aufnahme ei ole ainult “fotograafia”. See võib olla ka salvestis, foto või vastuvõtmise protsess. | die Aufnahme ei ole ainult „foto“. See võib olla ka salvestis, foto või vastuvõtmise protsess. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0301 | a2-aufrufen | study.tip.leftBlocks[0].text | Koos Webseite, Datei või Programm tähendab aufrufen avama. | Veebilehe, faili või programmi puhul tähendab aufrufen „avama“. | HIGH | GRAMMAR | PENDING | | |
| ET-A2-0302 | a2-aufrufen | study.tip.leftBlocks[1].text | Koos Namen või Nummer tähendab see välja hüüdma; koos zu + Dativ tähendab see sageli üles kutsuma. | Nime või numbri puhul tähendab see „välja kutsuma“; koos zu + daativiga tähendab see sageli „üles kutsuma“. | HIGH | GRAMMAR | PENDING | | |
| ET-A2-0319 | a2-bitter | study.tip.leftBlocks[1].text | Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valus, karm või terav. | Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valusat, karmi või teravat. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0325 | a2-dabei | study.examples[3].lv | ta aitas ja õppis pealegi palju. | ta aitas ja õppis pealegi palju. | CRITICAL | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0326 | a2-darauf | study.examples[5].lv | veidi pärast seda tuli ta tagasi. | varsti pärast seda tuli ta tagasi. | MEDIUM | NATURALNESS | PENDING | | |
| ET-A2-0327 | a2-darüber | etMain | selle eest | selle kohta • selle kohal | HIGH | SEMANTICS | PENDING | | |
| ET-A2-0337 | a2-ehrlich | study.examples[4].lv | ta on tore. | ta on aus. | HIGH | SEMANTICS | PENDING | | |
| ET-A2-0341 | a2-einsteigen | study.examples[1].lv | palun, sisenege eest. | palun sisenege eesuksest. | MEDIUM | NATURALNESS | PENDING | | |
| ET-A2-0348 | a2-gang | study.translation | koridor • kõnnak • roog | koridor • kõnnak • käik | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0349 | a2-gang | study.examples[3].lv | menüüs on kolm rooga. | menüüs on kolm käiku. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0350 | a2-gang | study.examples[4].lv | esimene roog oli supp. | esimene käik oli supp. | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0356 | a2-indem | study.comparison[2].meaning | et | sellega, et | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0393 | a2-rasen-study | study.examples[2].lv |  |  | MEDIUM | TRANSLATION | PENDING | | |
| ET-A2-0397 | a2-schalten | study.examples[3].lv | kas sa saad, palun, 2. kanalile lülitada? | Kas sa saad palun 2. kanalile ümber lülitada? | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0401 | a2-schloss | study.examples[1].lv | neuschwansteini loss on väga tuntud. | Neuschwansteini loss on väga tuntud. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A2-0402 | a2-sich-befinden | study.examples[4].lv | ma tunnen end täna hästi. | ma asun täna siin. | HIGH | SEMANTICS | PENDING | | |
| ET-A2-0407 | a2-stelle | study.comparison[4].meaning | haav | koht | MEDIUM | SEMANTICS | PENDING | | |
| ET-A2-0422 | a2-während | study.examples[3].lv | ta räägib telefoniga, sel ajal kui ootab. | ta räägib telefoniga, samal ajal kui ta ootab. | MEDIUM | GRAMMAR | PENDING | | |
| ET-A2-0426 | a2-wiegen | study.examples[5].lv | auto seisab õues. | auto kaalub kaks tonni. | MEDIUM | STUDY | PENDING | | |
| ET-A2-0427 | a2-wiegen | study.comparison[4].meaning | auto / vagun | kaaluma / kaal | MEDIUM | STUDY | PENDING | | |
| ET-A2-0437 | a2-gross | study.examples[2].lv | ta on pikka kasvu. | Ta on pikka kasvu. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A2-0439 | a2-hoch | study.examples[2].lv | üür on kõrge. | Üür on kõrge. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A2-0440 | a2-hoch | study.examples[3].lv | müür on kõrge. | Müür on kõrge. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A2-0441 | a2-hoch | study.examples[4].lv | hinnad on kõrged. | Hinnad on kõrged. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A2-0444 | a2-klein | study.examples[3].lv | mul on väike kott. | Mul on väike kott. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-A2-0458 | a2-auch | study.examples[1].lv | ma tulen ka. | Ma tulen ka. | LOW | ORTHOGRAPHY | PENDING | | |
