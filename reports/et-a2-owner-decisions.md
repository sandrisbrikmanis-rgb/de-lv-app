# ET–DE A1 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**MAIN_BASE_SHA:** `e0e062fb8fc9b5a4d7824bfb32595c913017f4ee`
**WORK_BRANCH:** `cursor/et-de-a2-full-audit-v18-4a7c`
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)
**Findings:** **508** · sākotnēji visi **PENDING**

Filtrēts pēc [et-a2-pr603-owner-history-validation.md](et-a2-pr603-owner-history-validation.md): tikai **NEW_VALIDATED_REAL_FINDINGS** (16/19).

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-review-GITHUB.md) |
| OWNER VIEW | [et-a2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view.md) |
| Decisions grupa 1–50 | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group01.md) |
| Decisions grupa 51–100 | [et-a2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group02.md) |
| Decisions grupa 101–150 | [et-a2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group03.md) |
| Decisions grupa 151–200 | [et-a2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group04.md) |
| Decisions grupa 201–250 | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group05.md) |
| Decisions grupa 251–300 | [et-a2-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group06.md) |
| Decisions grupa 301–350 | [et-a2-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group07.md) |
| Decisions grupa 351–400 | [et-a2-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group08.md) |
| Decisions grupa 401–450 | [et-a2-owner-decisions-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group09.md) |
| Decisions grupa 451–500 | [et-a2-owner-decisions-group10.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group10.md) |
| Decisions grupa 501–508 | [et-a2-owner-decisions-group11.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group11.md) |

## Pilna tabula (visi findingi)
| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-A2-0001 | STRUCT | study.count | 232 | 231 | CRITICAL | STRUCTURE | PENDING | | |
| ET-A2-0002 | a2-abfahren | entry[2].study.comparison[1].example | Ich fahre morgen weg. = Es rīt aizbraucu prom. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0003 | a2-abfahren | entry[2].study.comparison[2].example | Wir fahren jetzt los. = Mēs tagad sākam braukt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0004 | a2-abfahren | entry[2].study.comparison[3].example | Der Bus geht gleich ab. = Autobuss tūlīt atiet. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0005 | a2-abgeben | entry[5].study.comparison[1].example | Ich gebe dir den Schlüssel. = Es tev dodu atslēgu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0006 | a2-abgeben | entry[5].study.comparison[2].example | Ich gebe das Buch zurück. = Es atdodu grāmatu atpakaļ. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0007 | a2-abgeben | entry[5].study.comparison[4].example | Ich verkaufe mein Fahrrad. = Es pārdodu savu velosipēdu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0008 | a2-absagen | entry[11].study.comparison[0].example | Ich sage den Termin ab. = Es atceļu tikšanos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0009 | a2-absagen | entry[11].study.comparison[1].example | Ich lehne das Angebot ab. = Es noraidu piedāvājumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0010 | a2-absagen | entry[11].study.comparison[2].example | Ich kündige den Vertrag. = Es uzteicu līgumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0011 | a2-absagen | entry[11].study.comparison[3].example | Ich storniere die Buchung. = Es atceļu rezervāciju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0012 | a2-absagen | entry[11].study.comparison[4].example | Er sagt nein. = Viņš saka nē. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0013 | a2-abschließen | entry[13].study.comparison[0].example | Ich schließe die Tür ab. = Es aizslēdzu durvis. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0014 | a2-abschließen | entry[13].study.comparison[3].example | Ich unterschreibe den Vertrag. = Es parakstu līgumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0015 | a2-abstellen | entry[16].study.comparison[0].example | Ich stelle das Fahrrad ab. = Es novietoju velosipēdu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0016 | a2-abstellen | entry[16].study.comparison[1].example | Ich schalte den Computer aus. = Es izslēdzu datoru. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0017 | a2-abstellen | entry[16].study.comparison[2].example | Der Bus hält an. = Autobuss apstājas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0018 | a2-abstellen | entry[16].study.comparison[3].example | Der Fahrer stoppt das Auto. = Vadītājs aptur auto. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0019 | a2-abstellen | entry[16].study.comparison[4].example | Ich stelle die Tasche neben die Tür. = Es nolieku somu pie durvīm. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0020 | a2-angewandt | entry[41].study.comparison[0].example | Diese Methode wird angewandt. = Šī metode tiek pielietota. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0021 | a2-angewandt | entry[41].study.comparison[1].example | Das ist eine praktische Lösung. = Tas ir praktisks risinājums. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0022 | a2-angreifen | entry[42].study.comparison[0].example | Der Hund greift an. = Suns uzbrūk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0023 | a2-angreifen | entry[42].study.comparison[1].example | Die Gruppe attackiert ihn. = Grupa viņam uzbrūk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0024 | a2-angreifen | entry[42].study.comparison[2].example | Er beleidigt mich. = Viņš mani apvaino. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0025 | a2-angreifen | entry[42].study.comparison[3].example | Sie kritisiert den Vorschlag. = Viņa kritizē priekšlikumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0026 | a2-anhänger | entry[44].study.comparison[1].example | Er ist ein Fan der Mannschaft. = Viņš ir komandas fans. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0027 | a2-anhänger | entry[44].study.comparison[2].example | Sie hat viele Unterstützer. = Viņai ir daudz atbalstītāju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0028 | a2-anhänger | entry[44].study.comparison[3].example | Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0029 | a2-anheizen | entry[45].study.comparison[0].example | Ich heize den Ofen an. = Es iekuru krāsni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0030 | a2-anheizen | entry[45].study.comparison[1].example | Wir heizen die Wohnung. = Mēs apkurinām dzīvokli. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0031 | a2-anheizen | entry[45].study.comparison[3].example | Das verschärft den Streit. = Tas saasina strīdu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0032 | a2-anlegen | entry[55].study.comparison[1].example | Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0033 | a2-anmelden | entry[57].study.comparison[1].example | Melden Sie sich bitte an. = Lūdzu, piesakieties. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0034 | a2-anmelden | entry[57].study.comparison[2].example | Ich registriere mein Konto. = Es reģistrēju savu kontu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0035 | a2-anmelden | entry[57].study.comparison[3].example | Ich buche einen Termin. = Es rezervēju laiku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0036 | a2-anmelden | entry[57].study.comparison[4].example | Ich melde das Problem. = Es ziņoju par problēmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0037 | a2-anstecken | entry[63].study.comparison[1].example | Der Schlüssel steckt im Schloss. = Atslēga ir slēdzenē. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0038 | a2-anstecken | entry[63].study.comparison[3].example | Ich habe mich angesteckt. = Es inficējos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0039 | a2-anstellen | entry[65].study.comparison[0].example | Die Firma stellt ihn an. = Firma viņu pieņem darbā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0040 | a2-anstellen | entry[65].study.comparison[1].example | Wir stellen neue Leute ein. = Mēs pieņemam darbā jaunus cilvēkus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0041 | a2-anstellen | entry[65].study.comparison[2].example | Ich schalte das Licht an. = Es ieslēdzu gaismu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0042 | a2-anstellen | entry[65].study.comparison[3].example | Ich stelle mich an. = Es nostājos rindā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0043 | a2-artikel | entry[90].study.comparison[0].example | Der Artikel ist kurz. = Raksts ir īss. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0044 | a2-artikel | entry[90].study.comparison[1].example | Der Zeitungsartikel ist neu. = Avīzes raksts ir jauns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0045 | a2-artikel | entry[90].study.comparison[2].example | Die Ware ist teuer. = Prece ir dārga. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0046 | a2-artikel | entry[90].study.comparison[4].example | Der Paragraph ist wichtig. = Pants ir svarīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0047 | a2-aufheben | entry[118].study.comparison[0].example | Ich hebe den Schlüssel auf. = Es paceļu atslēgu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0048 | a2-aufheben | entry[118].study.comparison[1].example | Ich hebe die Hand. = Es paceļu roku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0049 | a2-aufheben | entry[118].study.comparison[2].example | Wir sagen den Termin ab. = Mēs atceļam tikšanos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0050 | a2-auflage | entry[127].study.comparison[0].example | Die Auflage ist hoch. = Tirāža ir liela. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0051 | a2-auflage | entry[127].study.comparison[1].example | Die neue Ausgabe ist da. = Jaunais numurs ir klāt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0052 | a2-auflage | entry[127].study.comparison[2].example | Das ist eine Bedingung. = Tas ir nosacījums. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0053 | a2-aufnahme | entry[132].study.comparison[2].example | Das Bild hängt an der Wand. = Attēls karājas pie sienas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0054 | a2-aufnahme | entry[132].study.comparison[4].example | Die Aufnahmeprüfung ist morgen. = Iestājpārbaudījums ir rīt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0055 | a2-aufnehmen | entry[133].study.comparison[1].example | Ich nehme das Buch. = Es ņemu grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0056 | a2-aufnehmen | entry[133].study.comparison[2].example | Ich nehme das Angebot an. = Es pieņemu piedāvājumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0057 | a2-aufnehmen | entry[133].study.comparison[3].example | Wir beginnen die Arbeit. = Mēs sākam darbu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0058 | a2-aufrichtig | entry[138].study.comparison[0].example | Eine aufrichtige Entschuldigung. = Patiesa atvainošanās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0059 | a2-aufrichtig | entry[138].study.comparison[1].example | Er ist ehrlich. = Viņš ir godīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0060 | a2-aufrichtig | entry[138].study.comparison[2].example | Herzliche Grüße. = Sirsnīgi sveicieni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0061 | a2-aufrichtig | entry[138].study.comparison[3].example | Sie spricht offen. = Viņa runā atklāti. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0062 | a2-aufrufen | entry[139].study.comparison[3].example | Er fordert uns auf. = Viņš mūs aicina. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0063 | a2-auftragen | entry[146].study.comparison[0].example | Der Lehrer trägt eine Aufgabe auf. = Skolotājs uzdod uzdevumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0064 | a2-auftragen | entry[146].study.comparison[1].example | Ich gebe dir das Buch. = Es tev dodu grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0065 | a2-auftragen | entry[146].study.comparison[2].example | Wir streichen die Wand an. = Mēs krāsojam sienu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0066 | a2-auftragen | entry[146].study.comparison[3].example | Der Kellner serviert das Essen. = Viesmīlis pasniedz ēdienu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0067 | a2-auftreten | entry[147].study.comparison[0].example | Ein Fehler tritt auf. = Parādās kļūda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0068 | a2-auftreten | entry[147].study.comparison[1].example | Er erscheint um acht. = Viņš ierodas astoņos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0069 | a2-auftreten | entry[147].study.comparison[2].example | Sie spielt im Theater. = Viņa spēlē teātrī. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0070 | a2-auftreten | entry[147].study.comparison[3].example | Er verhält sich ruhig. = Viņš izturas mierīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0071 | a2-aufwenden | entry[149].study.comparison[1].example | Ich gebe viel Geld aus. = Es iztērēju daudz naudas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0072 | a2-aufwenden | entry[149].study.comparison[2].example | Ich verbringe den Abend zu Hause. = Es pavadu vakaru mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0073 | a2-aufwenden | entry[149].study.comparison[3].example | Wir investieren Zeit und Geld. = Mēs ieguldām laiku un naudu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0074 | a2-aufzeichnen | entry[150].study.comparison[1].example | Das Kind zeichnet ein Haus. = Bērns zīmē māju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0075 | a2-aussteigen | entry[159].study.comparison[0].example | Ich steige aus dem Bus aus. = Es izkāpju no autobusa. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0076 | a2-aussteigen | entry[159].study.comparison[1].example | Ich steige in den Zug ein. = Es iekāpju vilcienā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0077 | a2-aussteigen | entry[159].study.comparison[2].example | Wir steigen in Berlin um. = Mēs pārsēžamies Berlīnē. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0078 | a2-aussteigen | entry[159].study.comparison[3].example | Er verlässt die Firma. = Viņš atstāj firmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0079 | a2-auswählen | entry[165].study.comparison[0].example | Ich wähle ein Bild aus. = Es izvēlos attēlu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0080 | a2-auswählen | entry[165].study.comparison[2].example | Such dir ein Buch aus. = Izvēlies sev grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0081 | a2-auswählen | entry[165].study.comparison[3].example | Ich entscheide morgen. = Es izlemšu rīt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0082 | a2-auswählen | entry[165].study.comparison[4].example | Markieren Sie die richtige Antwort. = Atzīmējiet pareizo atbildi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0083 | a2-ausziehen | entry[169].study.comparison[2].example | Wir ziehen nach Riga um. = Mēs pārceļamies uz Rīgu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0084 | a2-ausziehen | entry[169].study.comparison[3].example | Das Kind zieht sich aus. = Bērns izģērbjas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0085 | a2-bahn | entry[187].study.comparison[1].example | Der Zug fährt um acht Uhr ab. = Vilciens atiet astoņos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0086 | a2-bahn | entry[187].study.comparison[3].example | Wir treffen uns am Bahnhof. = Mēs tiekamies stacijā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0087 | a2-bank | entry[194].study.comparison[1].example | Wir sitzen auf einer Bank. = Mēs sēžam uz soliņa. Plural: die Bänke. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0088 | a2-bank | entry[194].study.comparison[2].example | Die Bankfiliale ist geöffnet. = Bankas filiāle ir atvērta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0089 | a2-bank | entry[194].study.comparison[3].example | Wir sitzen auf der Parkbank. = Mēs sēžam uz parka soliņa. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0090 | a2-bank | entry[194].study.comparison[4].example | Das Schiff steckt auf einer Sandbank. = Kuģis ir uzsēdies uz sēkļa. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0091 | a2-bank | entry[194].study.comparison[5].example | Ich sitze auf einem Stuhl. = Es sēžu uz krēsla. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0092 | a2-bauer | entry[207].study.comparison[0].example | Der Bauer arbeitet auf dem Feld. = Zemnieks strādā uz lauka. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0093 | a2-bauer | entry[207].study.comparison[1].example | Der Landwirt führt einen Hof. = Lauksaimnieks vada saimniecību. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0094 | a2-bauer | entry[207].study.comparison[2].example | Wir besuchen einen Bauernhof. = Mēs apmeklējam lauku saimniecību. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0095 | a2-bauer | entry[207].study.comparison[3].example | Die Dame ist eine starke Figur. = Dāma ir spēcīga figūra. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0096 | a2-bauer | entry[207].study.comparison[4].example | Der Spielstein liegt auf dem Brett. = Spēles kauliņš atrodas uz galda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0097 | a2-bedienen | entry[213].study.comparison[0].example | Der Kellner bedient uns. = Viesmīlis mūs apkalpo. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0098 | a2-bedienen | entry[213].study.comparison[2].example | Kannst du mir helfen? = Vai vari man palīdzēt? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0099 | a2-bedienen | entry[213].study.comparison[3].example | Sie serviert das Essen. = Viņa pasniedz ēdienu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0100 | a2-bedienen | entry[213].study.comparison[4].example | Er steuert das Auto. = Viņš vada auto. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0101 | a2-bedienung | entry[214].study.comparison[0].example | Die Bedienung ist freundlich. = Apkalpotājs ir laipns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0102 | a2-bedienung | entry[214].study.comparison[1].example | Der Kellner bringt die Rechnung. = Viesmīlis atnes rēķinu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0103 | a2-bedienung | entry[214].study.comparison[2].example | Die Kellnerin fragt nach Getränken. = Viesmīle jautā par dzērieniem. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0104 | a2-bedienung | entry[214].study.comparison[4].example | Das Personal hilft uns. = Personāls mums palīdz. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0105 | a2-behalten | entry[221].study.comparison[0].example | Du kannst es behalten. = Tu vari to paturēt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0106 | a2-behalten | entry[221].study.comparison[2].example | Ich merke mir die Nummer. = Es iegaumēju numuru. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0107 | a2-behalten | entry[221].study.comparison[4].example | Ich bewahre die Quittung auf. = Es glabāju čeku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0108 | a2-beinahe | entry[222].study.comparison[0].example | Ich hätte beinahe gelacht. = Es gandrīz sāku smieties. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0109 | a2-beinahe | entry[222].study.comparison[1].example | Ich bin fast fertig. = Es esmu gandrīz gatavs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0110 | a2-beinahe | entry[222].study.comparison[4].example | Wir haben es gerade noch geschafft. = Mēs vēl tik tikko paspējām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0111 | a2-bekannt | entry[224].study.comparison[0].example | Das ist bekannt. = Tas ir zināms. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0112 | a2-bekannt | entry[224].study.comparison[1].example | Er ist berühmt. = Viņš ir slavens. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0113 | a2-bekannt | entry[224].study.comparison[2].example | Die Umgebung ist mir vertraut. = Apkārtne man ir pazīstama. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0114 | a2-bekannt | entry[224].study.comparison[3].example | Wir sind befreundet. = Mēs esam draugos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0115 | a2-bekannt | entry[224].study.comparison[4].example | Der Täter ist unbekannt. = Vainīgais ir nezināms. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0116 | a2-bestellen | entry[242].study.comparison[0].example | Ich bestelle Essen. = Es pasūtu ēdienu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0117 | a2-bestellen | entry[242].study.comparison[1].example | Ich reserviere einen Tisch. = Es rezervēju galdiņu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0118 | a2-bestellen | entry[242].study.comparison[2].example | Ich kaufe Brot. = Es pērku maizi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0119 | a2-bestellen | entry[242].study.comparison[4].example | Ich bearbeite den Text. = Es apstrādāju tekstu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0120 | a2-bestimmt | entry[244].study.comparison[2].example | Ich brauche ein konkretes Beispiel. = Man vajag konkrētu piemēru. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0121 | a2-bestimmt | entry[244].study.comparison[3].example | Wir haben einen festen Termin. = Mums ir noteikts termiņš. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0122 | a2-bestimmt | entry[244].study.comparison[4].example | Er kommt wahrscheinlich morgen. = Viņš droši vien atnāks rīt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0123 | a2-birne | entry[255].study.comparison[0].example | Ich esse eine Birne. = Es ēdu bumbieri. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0124 | a2-birne | entry[255].study.comparison[1].example | Die Glühbirne ist kaputt. = Spuldze ir saplīsusi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0125 | a2-birne | entry[255].study.comparison[3].example | Birnen sind Obst. = Bumbieri ir augļi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0126 | a2-bitter | entry[258].study.comparison[0].example | Der Kaffee ist bitter. = Kafija ir rūgta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0127 | a2-bitter | entry[258].study.comparison[1].example | Die Zitrone ist sauer. = Citrons ir skābs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0128 | a2-bitter | entry[258].study.comparison[3].example | Der Lehrer ist streng. = Skolotājs ir stingrs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0129 | a2-bitter | entry[258].study.comparison[4].example | Der Geruch ist unangenehm. = Smarža ir nepatīkama. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0130 | a2-boden | entry[272].study.comparison[0].example | Die Tasche liegt auf dem Boden. = Soma atrodas uz grīdas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0131 | a2-boden | entry[272].study.comparison[1].example | Der Fußboden ist sauber. = Grīda ir tīra. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0132 | a2-boden | entry[272].study.comparison[3].example | Das Haus steht auf festem Grund. = Māja stāv uz stingra pamata. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0133 | a2-borgen | entry[276].study.comparison[0].example | Ich borge mir Geld. = Es aizņemos naudu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0134 | a2-borgen | entry[276].study.comparison[1].example | Kannst du mir das Buch leihen? = Vai vari man aizdot grāmatu? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0135 | a2-borgen | entry[276].study.comparison[3].example | Ich gebe das Buch zurück. = Es atdodu grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0136 | a2-böse | entry[277].study.comparison[0].example | Bist du böse auf mich? = Vai tu esi dusmīgs uz mani? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0137 | a2-böse | entry[277].study.comparison[2].example | Er ist zornig. = Viņš ir nikns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0138 | a2-böse | entry[277].study.comparison[4].example | Ich bin sauer. = Es esmu dusmīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0139 | a2-brav | entry[285].study.comparison[0].example | Das Kind ist brav. = Bērns ir paklausīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0140 | a2-brav | entry[285].study.comparison[1].example | Er ist ein guter Mensch. = Viņš ir labs cilvēks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0141 | a2-brav | entry[285].study.comparison[2].example | Sie ist nett. = Viņa ir jauka. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0142 | a2-brav | entry[285].study.comparison[3].example | Der Verkäufer ist freundlich. = Pārdevējs ir laipns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0143 | a2-brav | entry[285].study.comparison[4].example | Das Kind ist artig. = Bērns ir pieklājīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0144 | a2-brav | entry[285].study.comparison[5].example | Der Hund ist gehorsam. = Suns ir paklausīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0145 | a2-brennen | entry[289].study.comparison[2].example | Ich habe mich verbrannt. = Es apdedzinājos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0146 | a2-brennen | entry[289].study.comparison[3].example | Die Feuerwehr löscht das Feuer. = Ugunsdzēsēji dzēš uguni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0147 | a2-dabei | entry[315].study.comparison[0].example | Ich habe den Schlüssel dabei. = Man ir līdzi atslēga. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0148 | a2-dabei | entry[315].study.comparison[1].example | Bist du morgen mit dabei? = Vai tu rīt arī piedalīsies? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0149 | a2-dabei | entry[315].study.comparison[3].example | Außerdem ist es teuer. = Turklāt tas ir dārgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0150 | a2-dabei | entry[315].study.comparison[4].example | Trotzdem komme ich. = Tomēr es nākšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0151 | a2-dafür | entry[318].study.comparison[1].example | Darum bleibe ich zu Hause. = Tāpēc es palieku mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0152 | a2-dafür | entry[318].study.comparison[2].example | Deshalb komme ich später. = Tāpēc es nākšu vēlāk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0153 | a2-dafür | entry[318].study.comparison[3].example | Ich bin dagegen. = Es esmu pret to. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0154 | a2-dafür | entry[318].study.comparison[4].example | Das ist für das Kind. = Tas ir bērnam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0155 | a2-damit | entry[321].study.comparison[0].example | Ich lerne, damit ich bestehe. = Es mācos, lai nokārtotu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0156 | a2-damit | entry[321].study.comparison[2].example | Ich lerne, um zu bestehen. = Es mācos, lai nokārtotu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0157 | a2-damit | entry[321].study.comparison[3].example | Deshalb bleibe ich hier. = Tāpēc es palieku šeit. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0158 | study-der-dank | entry[323].study.comparison[0].example | Herzlichen Dank! = Sirsnīgs paldies! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0159 | study-der-dank | entry[323].study.comparison[1].example | Nein, danke. = Nē, paldies. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0160 | study-der-dank | entry[323].study.comparison[3].example | Vielen Dank für die Hilfe! = Liels paldies par palīdzību! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0161 | study-der-dank | entry[323].study.comparison[4].example | Ich bedanke mich bei Ihnen. = Es pateicos jums. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0162 | a2-darauf | entry[324].study.comparison[1].example | Ich lege es auf das Buch. = Es lieku to uz grāmatas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0163 | a2-darauf | entry[324].study.comparison[2].example | Danach gehe ich nach Hause. = Pēc tam es eju mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0164 | a2-darauf | entry[324].study.comparison[3].example | Wir sprechen darüber. = Mēs runājam par to. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0165 | a2-darüber | entry[325].study.comparison[0].example | Wir sprechen darüber. = Mēs runājam par to. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0166 | a2-darüber | entry[325].study.comparison[1].example | Wir sprechen über das Problem. = Mēs runājam par problēmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0167 | a2-darüber | entry[325].study.comparison[3].example | Ich habe davon gehört. = Es par to dzirdēju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0168 | a2-darum | entry[326].study.comparison[0].example | Darum bleibe ich hier. = Tāpēc es palieku šeit. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0169 | a2-darum | entry[326].study.comparison[1].example | Deshalb komme ich später. = Tāpēc es nākšu vēlāk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0170 | a2-darum | entry[326].study.comparison[2].example | Deswegen bin ich müde. = Tāpēc esmu noguris. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0171 | a2-darum | entry[326].study.comparison[3].example | Wir sitzen um das Feuer. = Mēs sēžam ap uguni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0172 | a2-davor | entry[329].study.comparison[0].example | Ich habe Angst davor. = Man ir bail no tā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0173 | a2-davor | entry[329].study.comparison[1].example | Vor dem Haus steht ein Auto. = Mājas priekšā stāv auto. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0174 | a2-davor | entry[329].study.comparison[2].example | Danach gehen wir. = Pēc tam mēs ejam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0175 | a2-dazu | entry[330].study.comparison[2].example | Ich war dabei. = Es biju klāt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0176 | a2-dazu | entry[330].study.comparison[3].example | Außerdem ist es teuer. = Turklāt tas ir dārgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0177 | a2-decke | entry[331].study.comparison[1].example | Die Bettdecke ist weich. = Sega ir mīksta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0178 | a2-decke | entry[331].study.comparison[4].example | Das Bild hängt an der Wand. = Attēls karājas pie sienas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0179 | a2-denn | entry[334].study.comparison[1].example | Ich bleibe, weil es regnet. = Es palieku, jo līst. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0180 | a2-denn | entry[334].study.comparison[2].example | Dann gehen wir. = Tad mēs ejam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0181 | a2-denn | entry[334].study.comparison[3].example | Deshalb bleibe ich. = Tāpēc es palieku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0182 | a2-dick | entry[341].study.comparison[0].example | Das Buch ist dick. = Grāmata ir bieza. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0183 | a2-dick | entry[341].study.comparison[1].example | Das Essen ist fett. = Ēdiens ir trekns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0184 | a2-dick | entry[341].study.comparison[2].example | Das Papier ist dünn. = Papīrs ir plāns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0185 | a2-dick | entry[341].study.comparison[4].example | Er ist stark. = Viņš ir stiprs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0186 | a2-doch | entry[346].study.comparison[0].example | Komm doch! = Nāc taču! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0187 | a2-doch | entry[346].study.comparison[1].example | Ich will, aber ich kann nicht. = Es gribu, bet nevaru. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0188 | a2-doch | entry[346].study.comparison[2].example | Es regnet, trotzdem gehe ich. = Līst, tomēr es eju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0189 | a2-doch | entry[346].study.comparison[4].example | Kommst du? Nein. = Vai tu nāksi? Nē. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0190 | a2-doktor | entry[347].study.comparison[0].example | Ich gehe zum Doktor. = Es eju pie ārsta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0191 | a2-doktor | entry[347].study.comparison[1].example | Der Arzt hilft mir. = Ārsts man palīdz. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0192 | a2-doktor | entry[347].study.comparison[2].example | Die Ärztin arbeitet hier. = Ārste strādā šeit. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0193 | a2-doktor | entry[347].study.comparison[4].example | Die Praxis ist offen. = Ārsta prakse ir atvērta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0194 | a2-dünn | entry[364].study.comparison[0].example | Das Papier ist dünn. = Papīrs ir plāns. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0195 | a2-dünn | entry[364].study.comparison[1].example | Das Buch ist dick. = Grāmata ir bieza. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0196 | a2-dünn | entry[364].study.comparison[3].example | Das Fleisch ist mager. = Gaļa ir liesa. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0197 | a2-dünn | entry[364].study.comparison[4].example | Honig ist flüssig. = Medus ir šķidrs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0198 | a2-eben | entry[369].study.comparison[0].example | Das ist eben so. = Tā tas vienkārši ir. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0199 | a2-eben | entry[369].study.comparison[1].example | Ich bin gerade zu Hause. = Es tieši tagad esmu mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0200 | a2-eben | entry[369].study.comparison[2].example | Ich habe ihn gerade eben gesehen. = Es viņu tikko redzēju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0201 | a2-ehrlich | entry[377].study.comparison[0].example | Er ist ehrlich. = Viņš ir godīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0202 | a2-ehrlich | entry[377].study.comparison[2].example | Sie ist nett. = Viņa ir jauka. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0203 | a2-ehrlich | entry[377].study.comparison[3].example | Er ist ein guter Mensch. = Viņš ir labs cilvēks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0204 | a2-eigentlich | entry[378].study.comparison[0].example | Eigentlich habe ich keine Zeit. = Patiesībā man nav laika. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0205 | a2-eigentlich | entry[378].study.comparison[1].example | Das ist echt. = Tas ir īsts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0206 | a2-eigentlich | entry[378].study.comparison[3].example | Das ist wirklich gut. = Tas tiešām ir labi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0207 | a2-einladen | entry[387].study.comparison[1].example | Ich lade das Handy. = Es lādēju telefonu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0208 | a2-einladen | entry[387].study.comparison[3].example | Bring bitte Brot mit. = Paņem līdzi maizi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0209 | a2-einschalten | entry[391].study.comparison[0].example | Ich schalte das Licht ein. = Es ieslēdzu gaismu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0210 | a2-einschalten | entry[391].study.comparison[1].example | Schalte den Computer aus. = Izslēdz datoru. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0211 | a2-einschalten | entry[391].study.comparison[2].example | Mach das Licht an. = Ieslēdz gaismu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0212 | a2-einschalten | entry[391].study.comparison[3].example | Wir beziehen ihn ein. = Mēs viņu iesaistām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0213 | a2-einschlafen | entry[393].study.comparison[1].example | Ich schlafe acht Stunden. = Es guļu astoņas stundas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0214 | a2-einschlafen | entry[393].study.comparison[3].example | Mein Bein wird taub. = Mana kāja kļūst nejutīga. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0215 | a2-einsteigen | entry[394].study.comparison[0].example | Ich steige in den Zug ein. = Es iekāpju vilcienā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0216 | a2-einsteigen | entry[394].study.comparison[1].example | Ich steige hier aus. = Es šeit izkāpju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0217 | a2-einsteigen | entry[394].study.comparison[2].example | Wir steigen um. = Mēs pārsēžamies. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0218 | a2-eintritt | entry[395].study.comparison[2].example | Ich habe eine Eintrittskarte. = Man ir ieejas biļete. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0219 | a2-eintritt | entry[395].study.comparison[3].example | Ich trete dem Verein bei. = Es iestājos biedrībā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0220 | a2-erinnern | entry[420].study.comparison[0].example | Erinnere mich bitte daran. = Lūdzu, atgādini man to. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0221 | a2-erinnern | entry[420].study.comparison[3].example | Denk an den Schlüssel. = Atceries par atslēgu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0222 | a2-etwa | entry[439].study.comparison[0].example | Das dauert etwa 20 Minuten. = Tas ilgst apmēram 20 minūtes. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0223 | a2-etwa | entry[439].study.comparison[1].example | Das dauert ungefähr 20 Minuten. = Tas ilgst aptuveni 20 minūtes. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0224 | a2-etwa | entry[439].study.comparison[3].example | Vielleicht kommt er. = Varbūt viņš atnāks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0225 | a2-fach | entry[444].study.comparison[0].example | Das Fach ist leer. = Nodalījums ir tukšs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0226 | a2-fach | entry[444].study.comparison[1].example | Biologie ist ein Schulfach. = Bioloģija ir mācību priekšmets. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0227 | a2-fach | entry[444].study.comparison[2].example | Das Schrankfach ist klein. = Skapja nodalījums ir mazs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0228 | a2-fach | entry[444].study.comparison[3].example | Das ist mein Fachgebiet. = Tā ir mana specialitāte. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0229 | a2-fach | entry[444].study.comparison[4].example | Mein Beruf ist Lehrer. = Mana profesija ir skolotājs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0230 | a2-fall | entry[455].study.comparison[0].example | In diesem Fall komme ich. = Šajā gadījumā es nākšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0231 | a2-fall | entry[455].study.comparison[1].example | Der Unfall war schlimm. = Negadījums bija smags. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0232 | a2-fall | entry[455].study.comparison[2].example | Die Situation ist schwierig. = Situācija ir grūta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0233 | a2-fall | entry[455].study.comparison[3].example | Der Kasus ist wichtig. = Locījums ir svarīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0234 | a2-fehlen | entry[467].study.comparison[0].example | Mir fehlt Geld. = Man trūkst naudas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0235 | a2-fehlen | entry[467].study.comparison[2].example | Ich vermisse dich. = Man tevis pietrūkst. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0236 | a2-fehlen | entry[467].study.comparison[3].example | Er ist abwesend. = Viņš nav klāt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0237 | a2-feuer | entry[484].study.comparison[1].example | Der Brand ist groß. = Ugunsgrēks ir liels. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0238 | a2-feuer | entry[484].study.comparison[3].example | Die Feuerwehr kommt. = Ugunsdzēsēji brauc. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0239 | a2-feuer | entry[484].study.comparison[4].example | Die Soldaten geben Feuer. = Kareivji atklāj uguni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0240 | a2-folgen | entry[508].study.comparison[1].example | Die Polizei verfolgt den Täter. = Policija vajā vainīgo. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0241 | a2-folgen | entry[508].study.comparison[2].example | Das Kind gehorcht. = Bērns klausa. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0242 | a2-folgen | entry[508].study.comparison[3].example | Befolgen Sie die Regeln. = Ievērojiet noteikumus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0243 | a2-führen | entry[539].study.comparison[0].example | Der Weg führt zum Bahnhof. = Ceļš ved uz staciju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0244 | a2-führen | entry[539].study.comparison[1].example | Sie leitet die Firma. = Viņa vada firmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0245 | a2-führen | entry[539].study.comparison[2].example | Ich fahre nach Hause. = Es braucu mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0246 | a2-führen | entry[539].study.comparison[3].example | Ich bringe dich nach Hause. = Es aizvedīšu tevi mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0247 | a2-führen | entry[539].study.comparison[4].example | Das führt zu Problemen. = Tas noved pie problēmām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0248 | a2-gehören | entry[572].study.comparison[1].example | Er besitzt ein Auto. = Viņam pieder auto. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0249 | a2-genau | entry[576].study.comparison[1].example | Das ist exakt ein Meter. = Tas ir precīzi viens metrs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0250 | a2-genau | entry[576].study.comparison[2].example | Ich bin gerade zu Hause. = Es tieši tagad esmu mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0251 | a2-genau | entry[576].study.comparison[3].example | Er war eben hier. = Viņš tikko bija šeit. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0252 | a2-gerade | entry[580].study.comparison[0].example | Ich komme gerade. = Es tieši tagad nāku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0253 | a2-geschäft | entry[582].study.comparison[3].example | Das Unternehmen wächst. = Uzņēmums aug. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0254 | a2-geschäft | entry[582].study.comparison[4].example | Wir schließen einen Vertrag. = Mēs slēdzam līgumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0255 | a2-gewinnen | entry[592].study.comparison[0].example | Wir gewinnen das Spiel. = Mēs uzvaram spēlē. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0256 | a2-gewinnen | entry[592].study.comparison[2].example | Ich bekomme eine Nachricht. = Es saņemu ziņu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0257 | a2-gewinnen | entry[592].study.comparison[3].example | Er verdient Geld. = Viņš pelna naudu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0258 | a2-gießen | entry[595].study.comparison[0].example | Ich gieße die Blumen. = Es laistu puķes. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0259 | a2-gießen | entry[595].study.comparison[1].example | Ich schenke Tee ein. = Es ieleju tēju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0260 | a2-gießen | entry[595].study.comparison[2].example | Es regnet. = Līst. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0261 | a2-gießen | entry[595].study.comparison[3].example | Er schüttet Wasser aus. = Viņš izlej ūdeni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0262 | a2-grund | entry[607].study.comparison[0].example | Aus diesem Grund komme ich nicht. = Šī iemesla dēļ es nenākšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0263 | a2-grund | entry[607].study.comparison[1].example | Die Ursache ist unbekannt. = Cēlonis nav zināms. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0264 | a2-grund | entry[607].study.comparison[2].example | Der Anlass war ein Fest. = Iemesls bija svētki. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0265 | a2-grund | entry[607].study.comparison[3].example | Der Boden ist nass. = Grīda ir slapja. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0266 | a2-hängen | entry[632].study.comparison[0].example | Das Bild hängt an der Wand. = Attēls karājas pie sienas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0267 | a2-hängen | entry[632].study.comparison[2].example | Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0268 | a2-hängen | entry[632].study.comparison[3].example | Wir hängen das Bild an die Wand. = Mēs piekaram attēlu pie sienas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0269 | a2-indem | entry[703].study.comparison[0].example | Ich lerne, indem ich übe. = Es mācos, trenējoties. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0270 | a2-indem | entry[703].study.comparison[1].example | Während ich koche, höre ich Musik. = Kamēr es gatavoju, klausos mūziku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0271 | a2-indem | entry[703].study.comparison[2].example | Ich lerne, damit ich die Prüfung bestehe. = Es mācos, lai nokārtotu eksāmenu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0272 | a2-indem | entry[703].study.comparison[3].example | Ich lerne, weil ich Deutsch brauche. = Es mācos, jo man vajag vācu valodu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0273 | a2-kaum | entry[783].study.comparison[0].example | Ich habe kaum Zeit. = Man gandrīz nav laika. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0274 | a2-kaum | entry[783].study.comparison[1].example | Ich bin fast fertig. = Es gandrīz esmu gatavs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0275 | a2-kaum | entry[783].study.comparison[3].example | Sobald ich Zeit habe, rufe ich dich an. = Tiklīdz man būs laiks, es tev piezvanīšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0276 | a2-kleiden | entry[810].study.comparison[0].example | Sie kleidet das Kind. = Viņa apģērbj bērnu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0277 | a2-kleiden | entry[810].study.comparison[1].example | Er kleidet sich elegant. = Viņš ģērbjas eleganti. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0278 | a2-kleiden | entry[810].study.comparison[2].example | Die Farbe kleidet dich. = Krāsa tev piestāv. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0279 | a2-kleiden | entry[810].study.comparison[4].example | Sie trägt ein Kleid. = Viņa valkā kleitu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0280 | a2-kurz | entry[855].study.comparison[0].example | Der Text ist kurz. = Teksts ir īss. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0281 | a2-kurz | entry[855].study.comparison[1].example | kurz vor acht = īsi pirms astoņiem | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0282 | a2-kurz | entry[855].study.comparison[2].example | kurz nach dem Essen = īsi pēc ēšanas | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0283 | a2-kurz | entry[855].study.comparison[3].example | Ich komme bald. = Es drīz nākšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0284 | a2-kurz | entry[855].study.comparison[4].example | Der Weg ist lang. = Ceļš ir garš. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0285 | a2-lage | entry[857].study.comparison[0].example | Die Lage ist schwierig. = Situācija ir sarežģīta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0286 | a2-lage | entry[857].study.comparison[1].example | Die Situation ist ernst. = Situācija ir nopietna. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0287 | a2-lage | entry[857].study.comparison[2].example | Der Standort ist gut. = Atrašanās vieta ir laba. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0288 | a2-lage | entry[857].study.comparison[3].example | eine Schicht Farbe = viena krāsas kārta | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0289 | a2-leiden | entry[877].study.comparison[0].example | Er leidet an Kopfschmerzen. = Viņš cieš no galvassāpēm. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0290 | a2-leiden | entry[877].study.comparison[1].example | Sie leidet an Asthma. = Viņa slimo ar astmu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0291 | a2-leiden | entry[877].study.comparison[2].example | Wir leiden unter der Hitze. = Mēs ciešam no karstuma. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0292 | a2-leiden | entry[877].study.comparison[4].example | Er ist krank. = Viņš ir slims. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0293 | a2-leihen | entry[878].study.comparison[1].example | Ich borge mir Geld. = Es aizņemos naudu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0294 | a2-leihen | entry[878].study.comparison[2].example | Wir mieten ein Auto. = Mēs īrējam mašīnu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0295 | a2-leihen | entry[878].study.comparison[3].example | Ich kaufe das Buch. = Es pērku grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0296 | a2-leiter | entry[880].study.comparison[0].example | Der Leiter der Firma. = Uzņēmuma vadītājs. Plural: die Leiter. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0297 | a2-leiter | entry[880].study.comparison[1].example | Ich steige auf die Leiter. = Es kāpju uz kāpnēm. Plural: die Leitern. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0298 | a2-leitung | entry[881].study.comparison[0].example | Die Leitung ist kaputt. = Līnija ir bojāta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0299 | a2-leitung | entry[881].study.comparison[1].example | Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0300 | a2-leitung | entry[881].study.comparison[2].example | Das Kabel ist zu kurz. = Kabelis ir par īsu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0301 | a2-leitung | entry[881].study.comparison[3].example | Die Telefonleitung ist frei. = Telefona līnija ir brīva. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0302 | a2-leitung | entry[881].study.comparison[4].example | Die Wasserleitung tropft. = Ūdens caurule pil. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0303 | a2-merken | entry[936].study.comparison[0].example | Ich merke den Fehler. = Es pamanu kļūdu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0304 | a2-merken | entry[936].study.comparison[1].example | Merk dir das! = Iegaumē to! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0305 | a2-merken | entry[936].study.comparison[2].example | Ich bemerke den Fehler. = Es pamanu kļūdu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0306 | a2-merken | entry[936].study.comparison[4].example | Ich behalte die Nummer. = Es paturu numuru prātā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0307 | a2-mittel | entry[951].study.comparison[0].example | ein Mittel gegen Husten = līdzeklis pret klepu | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0308 | a2-mittel | entry[951].study.comparison[1].example | Das Medikament hilft. = Medikaments palīdz. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0309 | a2-mittel | entry[951].study.comparison[2].example | Diese Methode ist einfach. = Šī metode ir vienkārša. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0310 | a2-mittel | entry[951].study.comparison[4].example | finanzielle Mittel = finanšu līdzekļi | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0311 | a2-note | entry[1019].study.comparison[0].example | Ich bekomme eine Note. = Es saņemu atzīmi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0312 | a2-note | entry[1019].study.comparison[1].example | Die Schulnote ist gut. = Skolas atzīme ir laba. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0313 | a2-note | entry[1019].study.comparison[2].example | Die Musiknote ist hoch. = Mūzikas nots ir augsta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0314 | a2-nutzen | entry[1029].study.comparison[2].example | Wir verwenden dieses Wort. = Mēs izmantojam šo vārdu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0315 | a2-nutzen | entry[1029].study.comparison[3].example | Nutze die Chance! = Izmanto iespēju! | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0316 | a2-offen | entry[1037].study.comparison[0].example | Die Tür ist offen. = Durvis ir vaļā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0317 | a2-offen | entry[1037].study.comparison[1].example | Das Museum ist geöffnet. = Muzejs ir atvērts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0318 | a2-offen | entry[1037].study.comparison[2].example | Er ist ehrlich. = Viņš ir godīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0319 | a2-offen | entry[1037].study.comparison[3].example | Der Platz ist frei. = Vieta ir brīva. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0320 | a2-patient | entry[1064].study.comparison[1].example | Die Patientin ruht sich aus. = Paciente atpūšas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0321 | a2-patient | entry[1064].study.comparison[2].example | Der Kranke liegt im Bett. = Slimnieks guļ gultā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0322 | a2-personal | entry[1068].study.comparison[0].example | Das Personal hilft. = Personāls palīdz. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0323 | a2-personal | entry[1068].study.comparison[1].example | Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0324 | a2-personal | entry[1068].study.comparison[2].example | Das ist persönlich. = Tas ir personīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0325 | a2-riechen | entry[1165].study.comparison[2].example | Es riecht nach Kaffee. = Smaržo pēc kafijas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0326 | a2-rolle | entry[1172].study.comparison[0].example | Sie spielt eine Rolle. = Viņa spēlē lomu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0327 | a2-rolle | entry[1172].study.comparison[1].example | Er hat die Hauptrolle. = Viņam ir galvenā loma. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0328 | a2-rolle | entry[1172].study.comparison[2].example | Ich kaufe eine Papierrolle. = Es pērku papīra rulli. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0329 | a2-rolle | entry[1172].study.comparison[3].example | Das hat keine Bedeutung. = Tam nav nozīmes. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0330 | a2-rolle | entry[1172].study.comparison[4].example | Das ist ein Teil der Arbeit. = Tā ir daļa no darba. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0331 | a2-sammeln | entry[1190].study.comparison[0].example | Briefmarken sammeln = krāt pastmarkas | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0332 | a2-sammeln | entry[1190].study.comparison[1].example | Die Schüler sammeln sich. = Skolēni sapulcējas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0333 | a2-sammeln | entry[1190].study.comparison[2].example | Ich hole Wasser. = Es atnesu ūdeni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0334 | a2-sammeln | entry[1190].study.comparison[3].example | Ich hebe den Zettel auf. = Es paceļu zīmīti. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0335 | a2-satz | entry[1194].study.comparison[0].example | Der Satz ist kurz. = Teikums ir īss. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0336 | a2-satz | entry[1194].study.comparison[1].example | Der deutsche Satz ist richtig. = Vācu teikums ir pareizs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0337 | a2-satz | entry[1194].study.comparison[2].example | Ein Satz Reifen ist teuer. = Riepu komplekts ir dārgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0338 | a2-satz | entry[1194].study.comparison[4].example | Der Kaffeesatz bleibt im Glas. = Kafijas biezumi paliek glāzē. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0339 | a2-scheinen | entry[1217].study.comparison[0].example | Die Sonne scheint. = Saule spīd. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0340 | a2-scheinen | entry[1217].study.comparison[2].example | Er wirkt ruhig. = Viņš šķiet mierīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0341 | a2-scheinen | entry[1217].study.comparison[3].example | Die Lampe leuchtet. = Lampa spīd. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0342 | a2-schlange | entry[1229].study.comparison[1].example | Die Warteschlange ist lang. = Gaidīšanas rinda ir gara. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0343 | a2-schlange | entry[1229].study.comparison[2].example | Die Stühle stehen in einer Reihe. = Krēsli stāv rindā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0344 | a2-schlange | entry[1229].study.comparison[3].example | Eine Schlange ist ein Reptil. = Čūska ir rāpulis. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0345 | a2-schließen | entry[1230].study.comparison[1].example | Ich schließe die Tür ab. = Es aizslēdzu durvis. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0346 | a2-schließen | entry[1230].study.comparison[3].example | Daraus folgere ich etwas. = No tā es kaut ko secinu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0347 | a2-schloss | entry[1236].study.comparison[1].example | Die Burg steht auf dem Berg. = Pils stāv kalnā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0348 | a2-schloss | entry[1236].study.comparison[2].example | Das Türschloss ist kaputt. = Durvju slēdzene ir salūzusi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0349 | a2-schloss | entry[1236].study.comparison[3].example | Ich kaufe ein Fahrradschloss. = Es pērku velosipēda slēdzeni. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0350 | a2-schloss | entry[1236].study.comparison[4].example | Der Schlüssel ist weg. = Atslēga ir pazudusi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0351 | a2-schuld | entry[1256].study.comparison[0].example | Das ist meine Schuld. = Tā ir mana vaina. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0352 | a2-schuld | entry[1256].study.comparison[1].example | Er hat Schulden. = Viņam ir parādi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0353 | a2-schuld | entry[1256].study.comparison[2].example | Ich trage Verantwortung. = Es nesu atbildību. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0354 | a2-schuld | entry[1256].study.comparison[3].example | Das war ein Fehler. = Tā bija kļūda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0355 | a2-schuld | entry[1256].study.comparison[4].example | Ich bin schuld. = Es esmu vainīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0356 | a2-sich-befinden | entry[1291].study.comparison[0].example | Das Büro befindet sich im zweiten Stock. = Birojs atrodas otrajā stāvā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0357 | a2-sich-befinden | entry[1291].study.comparison[1].example | Das Büro ist oben. = Birojs ir augšā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0358 | a2-sich-befinden | entry[1291].study.comparison[2].example | Das Buch liegt auf dem Tisch. = Grāmata atrodas uz galda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0359 | a2-sich-befinden | entry[1291].study.comparison[3].example | Das Auto steht vor dem Haus. = Auto stāv pie mājas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0360 | a2-sich-befinden | entry[1291].study.comparison[4].example | Ich fühle mich gut. = Es jūtos labi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0361 | a2-sich-unterhalten | entry[1305].study.comparison[0].example | Wir unterhalten uns. = Mēs sarunājamies. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0362 | a2-sich-unterhalten | entry[1305].study.comparison[1].example | Ich spreche Deutsch. = Es runāju vāciski. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0363 | a2-sich-unterhalten | entry[1305].study.comparison[2].example | Wir reden viel. = Mēs daudz runājam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0364 | a2-sich-unterhalten | entry[1305].study.comparison[3].example | Wir amüsieren uns. = Mēs izklaidējamies. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0365 | a2-sobald | entry[1325].study.comparison[0].example | Sobald er kommt, gehen wir. = Tiklīdz viņš atnāks, mēs iesim. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0366 | a2-sobald | entry[1325].study.comparison[1].example | Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0367 | a2-sobald | entry[1325].study.comparison[2].example | Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0368 | a2-sobald | entry[1325].study.comparison[3].example | Ich warte, bis du kommst. = Es gaidu, līdz tu atnāksi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0369 | a2-sobald | entry[1325].study.comparison[4].example | Nachdem ich gegessen habe, gehe ich. = Pēc tam kad paēdu, es eju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0370 | a2-sonst | entry[1336].study.comparison[0].example | Komm jetzt, sonst ist es zu spät. = Nāc tagad, citādi būs par vēlu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0371 | a2-sonst | entry[1336].study.comparison[1].example | Ansonsten ist alles gut. = Citādi viss ir labi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0372 | a2-sonst | entry[1336].study.comparison[2].example | Andernfalls rufe ich an. = Pretējā gadījumā es zvanīšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0373 | a2-sonst | entry[1336].study.comparison[3].example | Normalerweise bin ich zu Hause. = Parasti es esmu mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0374 | a2-sonst | entry[1336].study.comparison[4].example | Außerdem ist es teuer. = Turklāt tas ir dārgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0375 | a2-steigen | entry[1378].study.comparison[0].example | Die Preise steigen. = Cenas ceļas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0376 | a2-steigen | entry[1378].study.comparison[1].example | Ich steige in den Bus ein. = Es iekāpju autobusā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0377 | a2-steigen | entry[1378].study.comparison[2].example | Ich steige aus. = Es izkāpju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0378 | a2-steigen | entry[1378].study.comparison[3].example | Ich stehe um sieben auf. = Es pieceļos septiņos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0379 | a2-steigen | entry[1378].study.comparison[4].example | Das Kind klettert auf den Baum. = Bērns rāpjas kokā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0380 | a2-stelle | entry[1380].study.comparison[0].example | Ich suche eine Stelle. = Es meklēju darba vietu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0381 | a2-stelle | entry[1380].study.comparison[3].example | Diese Textstelle ist wichtig. = Šis teksta fragments ir svarīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0382 | a2-stelle | entry[1380].study.comparison[4].example | Die Wunde tut weh. = Brūce sāp. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0383 | a2-stimmen | entry[1388].study.comparison[0].example | Das stimmt. = Tā ir / tas ir pareizi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0384 | a2-stimmen | entry[1388].study.comparison[1].example | Ich stimme dir zu. = Es tev piekrītu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0385 | a2-stimmen | entry[1388].study.comparison[2].example | Wir stimmen darüber ab. = Mēs par to balsojam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0386 | a2-stimmen | entry[1388].study.comparison[3].example | Wir wählen den Präsidenten. = Mēs vēlējam prezidentu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0387 | a2-stimmen | entry[1388].study.comparison[4].example | Die Farbe passt. = Krāsa piestāv. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0388 | a2-stoff | entry[1392].study.comparison[0].example | Der Stoff ist weich. = Audums ir mīksts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0389 | a2-stoff | entry[1392].study.comparison[1].example | Das Material ist stabil. = Materiāls ir izturīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0390 | a2-stoff | entry[1392].study.comparison[2].example | Die Substanz ist gefährlich. = Viela ir bīstama. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0391 | a2-stoff | entry[1392].study.comparison[3].example | Der Unterrichtsstoff ist schwer. = Mācību viela ir grūta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0392 | a2-tafel | entry[1416].study.comparison[0].example | Der Lehrer schreibt an die Tafel. = Skolotājs raksta uz tāfeles. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0393 | a2-tafel | entry[1416].study.comparison[1].example | Die Tabelle steht im Buch. = Tabula ir grāmatā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0394 | a2-tafel | entry[1416].study.comparison[2].example | Die Speisekarte liegt auf dem Tisch. = Ēdienkarte ir uz galda. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0395 | a2-tafel | entry[1416].study.comparison[3].example | Das Schild ist rot. = Zīme ir sarkana. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0396 | a2-tafel | entry[1416].study.comparison[4].example | Eine Tafel Schokolade = šokolādes tāfelīte. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0397 | a2-teil | entry[1431].study.comparison[0].example | Ein Teil fehlt. = Trūkst viena daļa. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0398 | a2-teil | entry[1431].study.comparison[1].example | Der erste Teil ist leicht. = Pirmā daļa ir viegla. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0399 | a2-teil | entry[1431].study.comparison[2].example | Das Ersatzteil ist teuer. = Rezerves detaļa ir dārga. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0400 | a2-teil | entry[1431].study.comparison[3].example | Ich nehme ein Stück Kuchen. = Es ņemu kūkas gabalu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0401 | a2-teil | entry[1431].study.comparison[4].example | Das ist eine gute Sache. = Tā ir laba lieta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0402 | a2-termin | entry[1438].study.comparison[0].example | Ich habe einen Termin. = Man ir pieraksts / norunāts laiks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0403 | a2-termin | entry[1438].study.comparison[1].example | Das Treffen war nett. = Tikšanās bija jauka. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0404 | a2-termin | entry[1438].study.comparison[2].example | Die Frist endet morgen. = Termiņš beidzas rīt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0405 | a2-termin | entry[1438].study.comparison[3].example | Ich habe eine Verabredung. = Man ir sarunāta tikšanās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0406 | a2-termin | entry[1438].study.comparison[4].example | Der Zeitpunkt ist wichtig. = Laika punkts ir svarīgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0407 | a2-tief | entry[1443].study.comparison[0].example | Der See ist tief. = Ezers ir dziļš. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0408 | a2-tief | entry[1443].study.comparison[3].example | Das Wasser ist flach. = Ūdens ir sekls. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0409 | a2-tragen | entry[1458].study.comparison[2].example | Ich bringe dir das Buch. = Es tev atnesu grāmatu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0410 | a2-tragen | entry[1458].study.comparison[3].example | Ich halte das Kind. = Es turu bērnu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0411 | a2-treffen | entry[1469].study.comparison[0].example | Eine Entscheidung treffen = pieņemt lēmumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0412 | a2-treffen | entry[1469].study.comparison[1].example | Wir treffen uns. = Mēs tiekamies. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0413 | a2-treffen | entry[1469].study.comparison[2].example | Ich lerne ihn kennen. = Es ar viņu iepazīstos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0414 | a2-treffen | entry[1469].study.comparison[3].example | Ich erreiche dich nicht. = Es nevaru tevi sazvanīt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0415 | a2-übrig | entry[1488].study.comparison[1].example | Viel Essen bleibt übrig. = Daudz ēdiena paliek pāri. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0416 | a2-übrig | entry[1488].study.comparison[2].example | Der Rest ist für morgen. = Atlikums ir rītdienai. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0417 | a2-übrig | entry[1488].study.comparison[3].example | Die übrigen Gäste kommen später. = Pārējie viesi ieradīsies vēlāk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0418 | a2-übrig | entry[1488].study.comparison[4].example | Das ist unnötig. = Tas ir nevajadzīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0419 | a2-übung | entry[1489].study.comparison[0].example | Diese Übung ist leicht. = Šis vingrinājums ir viegls. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0420 | a2-übung | entry[1489].study.comparison[2].example | Das Training beginnt um sechs. = Treniņš sākas sešos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0421 | a2-übung | entry[1489].study.comparison[3].example | Die Aufgabe ist schwer. = Uzdevums ir grūts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0422 | a2-übung | entry[1489].study.comparison[4].example | In der Praxis ist es anders. = Praksē tas ir citādi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0423 | a2-umsonst | entry[1492].study.comparison[0].example | Ich warte umsonst. = Es gaidu veltīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0424 | a2-umsonst | entry[1492].study.comparison[2].example | Das ist gratis. = Tas ir par brīvu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0425 | a2-umsonst | entry[1492].study.comparison[3].example | Ich suche vergeblich. = Es meklēju veltīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0426 | a2-verbinden | entry[1511].study.comparison[1].example | Das verbindet sich mit Erinnerungen. = Tas saistās ar atmiņām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0427 | a2-verbinden | entry[1511].study.comparison[3].example | Ich schließe den Drucker an. = Es pieslēdzu printeri. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0428 | a2-verbinden | entry[1511].study.comparison[4].example | Der Arzt verbindet die Wunde. = Ārsts pārsien brūci. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0429 | a2-verkehr | entry[1517].study.comparison[0].example | Der Verkehr ist stark. = Satiksme ir intensīva. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0430 | a2-verkehr | entry[1517].study.comparison[1].example | Der Straßenverkehr ist gefährlich. = Ceļu satiksme ir bīstama. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0431 | a2-verkehr | entry[1517].study.comparison[2].example | Öffentlicher Verkehr ist praktisch. = Sabiedriskā satiksme ir praktiska. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0432 | a2-verkehr | entry[1517].study.comparison[4].example | Bewegung ist gesund. = Kustība ir veselīga. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0433 | a2-viertel | entry[1529].study.comparison[0].example | Ein Viertel ist genug. = Ceturtdaļa ir pietiekami. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0434 | a2-viertel | entry[1529].study.comparison[2].example | Ein Drittel bleibt. = Trešdaļa paliek. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0435 | a2-viertel | entry[1529].study.comparison[4].example | Das Quartier ist ruhig. = Kvartāls ir kluss. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0436 | a2-vorstellen | entry[1544].study.comparison[0].example | Ich stelle dir meinen Freund vor. = Es tevi iepazīstinu ar draugu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0437 | a2-vorstellen | entry[1544].study.comparison[1].example | Ich stelle mich vor. = Es stādos priekšā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0438 | a2-vorstellen | entry[1544].study.comparison[2].example | Ich denke an dich. = Es domāju par tevi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0439 | a2-vorstellen | entry[1544].study.comparison[3].example | Was meinst du? = Ko tu domā? | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0440 | a2-vorstellen | entry[1544].study.comparison[4].example | Ich präsentiere den Plan. = Es prezentēju plānu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0441 | a2-wagen | entry[1550].study.comparison[0].example | Der Wagen ist neu. = Automašīna ir jauna. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0442 | a2-wagen | entry[1550].study.comparison[2].example | Das Auto steht da. = Automašīna stāv tur. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0443 | a2-wählen | entry[1551].study.comparison[0].example | Ich wähle eine Nummer. = Es sastādu numuru. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0444 | a2-wählen | entry[1551].study.comparison[1].example | Ich wähle ein Bild aus. = Es izvēlos attēlu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0445 | a2-wählen | entry[1551].study.comparison[3].example | Wir stimmen ab. = Mēs balsojam. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0446 | a2-während | entry[1553].study.comparison[0].example | Während ich arbeite, ist es ruhig. = Kamēr es strādāju, ir kluss. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0447 | a2-während | entry[1553].study.comparison[1].example | Bei Regen bleiben wir zu Hause. = Lietus laikā paliekam mājās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0448 | a2-während | entry[1553].study.comparison[2].example | Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0449 | a2-während | entry[1553].study.comparison[3].example | Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0450 | a2-wahrscheinlich | entry[1555].study.comparison[0].example | Er kommt wahrscheinlich. = Viņš droši vien atnāks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0451 | a2-wahrscheinlich | entry[1555].study.comparison[1].example | Vielleicht kommt er. = Varbūt viņš atnāks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0452 | a2-wahrscheinlich | entry[1555].study.comparison[3].example | Er kommt bestimmt. = Viņš noteikti atnāks. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0453 | a2-wahrscheinlich | entry[1555].study.comparison[4].example | Das ist möglich. = Tas ir iespējams. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0454 | a2-wechseln | entry[1564].study.comparison[2].example | Wir tauschen Plätze. = Mēs samaināmies vietām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0455 | a2-wechseln | entry[1564].study.comparison[3].example | Ich steige um. = Es pārsēžos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0456 | a2-wechseln | entry[1564].study.comparison[4].example | Ich ändere den Plan. = Es mainu plānu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0457 | a2-wert | entry[1583].study.comparison[0].example | Das ist viel wert. = Tas ir daudz vērts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0458 | a2-wert | entry[1583].study.comparison[1].example | Der Wert ist hoch. = Vērtība ir augsta. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0459 | a2-wert | entry[1583].study.comparison[2].example | Das Auto ist teuer. = Auto ir dārgs. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0460 | a2-wert | entry[1583].study.comparison[3].example | Die Stadt ist sehenswert. = Pilsētu ir vērts redzēt. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0461 | a2-wert | entry[1583].study.comparison[4].example | Das ist wichtig. = Tas ir svarīgi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0462 | a2-Weste-1584 | entry[1584].lv | vest | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0463 | a2-wiegen | entry[1589].study.comparison[1].example | Die Waage steht im Bad. = Svari stāv vannasistabā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0464 | a2-wiegen | entry[1589].study.comparison[2].example | Das Gewicht ist normal. = Svars ir normāls. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0465 | a2-wiegen | entry[1589].study.comparison[3].example | Ich messe die Länge. = Es mēru garumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0466 | a2-wiegen | entry[1589].study.comparison[4].example | Der Wagen ist neu. = Automašīna ir jauna. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0467 | a2-ziehen | entry[1599].study.comparison[0].example | Wir ziehen um. = Mēs pārvācamies. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0468 | a2-ziehen | entry[1599].study.comparison[1].example | Ich ziehe um. = Es pārvācos. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0469 | a2-ziehen | entry[1599].study.comparison[4].example | Den Tee ziehen lassen. = Ļaut tējai ievilkties. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0470 | a2-zunehmen | entry[1614].study.comparison[1].example | Ich nehme ab. = Es notievēju. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0471 | a2-zunehmen | entry[1614].study.comparison[2].example | Die Stadt wächst. = Pilsēta aug. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0472 | a2-zunehmen | entry[1614].study.comparison[3].example | Die Preise steigen. = Cenas kāpj. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0473 | a2-zunehmen | entry[1614].study.comparison[4].example | Die Kosten erhöhen sich. = Izmaksas palielinās. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0474 | a2-zurzeit | entry[1618].study.comparison[0].example | Zurzeit bin ich beschäftigt. = Pašlaik esmu aizņemts. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0475 | a2-zurzeit | entry[1618].study.comparison[2].example | Im Moment habe ich keine Zeit. = Šobrīd man nav laika. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0476 | a2-zurzeit | entry[1618].study.comparison[3].example | Derzeit ist das nicht möglich. = Pašlaik tas nav iespējams. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0477 | a2-zurzeit | entry[1618].study.comparison[4].example | Momentan bin ich krank. = Šobrīd esmu slims. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-A2-0478 | a2-abfahren | study.sectionAccents (examples) | grupp | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0479 | a2-bauen | study.sectionAccents (examples) | mudelit | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0480 | a2-job | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0481 | a2-job | study.sectionAccents (examples) | ö | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0486 | a2-job | study.sectionAccents (examples) | d | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0487 | a2-job | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0488 | a2-job | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0489 | a2-job | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0491 | a2-kamm | study.sectionAccents (examples) | harja | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0492 | a2-kamm | study.sectionAccents (examples) | kammi | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0493 | a2-kamm | study.sectionAccents (examples) | hari | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0494 | a2-lage | study.sectionAccents (examples) | kiht | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0495 | a2-leitung | study.sectionAccents (examples) | juhe | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0497 | a2-leitung | study.sectionAccents (examples) | liin | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0499 | a2-leitung | study.sectionAccents (examples) | toru | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0501 | a2-rechnen | study.sectionAccents (explanation) | mit rechnen | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0502 | a2-satz | study.sectionAccents (examples) | komplekti | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0503 | a2-satz | study.sectionAccents (examples) | määr | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0505 | a2-satz | study.sectionAccents (examples) | sete | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0507 | a2-schloss | study.sectionAccents (examples) | lukku | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0508 | a2-wagen | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0509 | a2-wagen | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0510 | a2-wagen | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0511 | a2-wagen | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0516 | a2-wagen | study.sectionAccents (examples) | g | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0518 | a2-wagen | study.sectionAccents (examples) | v | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0522 | a2-wagen | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0523 | a2-abfahren | study.sectionAccents.comparison.example | Rong | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0524 | a2-abfahren | study.sectionAccents.comparison.example | väljub | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0526 | a2-abfahren | study.sectionAccents.comparison.example | sõidan | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-A2-0527 | a2-abfahren | study.sectionAccents.comparison.example | ära | (termins no attiecīgā ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
