# CS–DE B2 REPAIR — GROUP 41

## Scope
- Dataset: `B2`
- Kartītes: nākamais 50 kartīšu secības bloks pēc Group 40
- Aptuvenais ID diapazons: `2064–2113` / B2 beigu secība
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-widerlich-2068` | `csText` | `Ohavný • Ohavný` | `Odporný • Hnusný` | LABOT |
| 2 | `b2-sich-widersetzen` | `csText` | `Vzdorovat • Tvářit se` | `Vzpírat se • Postavit se proti` | LABOT |
| 3 | `b2-Wiederaufbau-2072` | `csText` | `Restaurování • Rekonstrukce` | `Obnova • Rekonstrukce` | LABOT |
| 4 | `b2-wiedergeben-2073` | `csText` | `Dávat • Rozmnožovat • Rozmnožovat` | `Vrátit • Reprodukovat • Ztvárnit` | LABOT |
| 5 | `b2-Willkür-2075` | `csText` | `Libovolný` | `Svévole • Libovůle` | LABOT |
| 6 | `b2-Windbeutel-2076` | `csText` | `Větrný dort` | `Větrník` | LABOT |
| 7 | `b2-winden-2077` | `csText` | `Zkroutit • Zkroutit • Oplet` | `Vinout • Navíjet • Plést` | LABOT |
| 8 | `b2-zielbewusst-2078` | `csText` | `Cílené` | `Cílevědomý` | LABOT |
| 9 | `b2-Zivildienst-2079` | `csText` | `Civilní službu místo vojenské služby` | `Civilní služba místo vojenské služby` | LABOT |
| 10 | `b2-zollfrei-2080` | `csText` | `Osvobozena od cel` | `Bezcelní • Osvobozený od cla` | LABOT |
| 11 | `b2-zollpflichtig-2081` | `csText` | `Podléhat celnicím` | `Podléhající clu • Povinný k proclení` | LABOT |
| 12 | `b2-Zucht-2082` | `csText` | `Výchova • Kultivace` | `Výchova • Chov` | LABOT |
| 13 | `b2-zuerkennen-2084` | `csText` | `Objednat • Přidělit` | `Přiznat • Přidělit` | LABOT |
| 14 | `b2-Zusage-2091` | `csText` | `Přijatelná odpověď` | `Souhlasná odpověď • Příslib` | LABOT |
| 15 | `b2-zusammenfügen-2092` | `csText` | `Připojit se` | `Spojit • Sestavit` | LABOT |
| 16 | `b2-zusammenlegen-2093` | `csText` | `Dát • Dát [dohromady]` | `Položit • Složit [dohromady]` | LABOT |
| 17 | `b2-zuschneiden-2094` | `csText` | `Řezat` | `Přistřihnout • Přikrojit` | LABOT |
| 18 | `b2-zuströmen-2095` | `csText` | `Proudí dovnitř` | `Přitékat • Proudit k` | LABOT |
| 19 | `b2-zutrauen-2097` | `csText` | `Očekávat • Myslet schopný` | `Očekávat • Považovat za schopného` | LABOT |
| 20 | `b2-zuweisen` | `csText` | `Přiřadit • Přidělit` | `Přidělit • Určit` | LABOT |
| 21 | `b2-zuwider` | `csText` | `Proti • V rozporu s • Nechuť` | `Proti • V rozporu s • Být proti mysli` | LABOT |
| 22 | `b2-zweckmäßig-2104` | `csText` | `Výhodný` | `Účelný • Vhodný` | LABOT |
| 23 | `b2-Zwirn-2107` | `csText` | `Vlákno` | `Nit • Skací příze` | LABOT |
| 24 | `b2-wechseln` | `csText` | `Vyměnit • Vyměnit` | `Vyměnit • Změnit` | LABOT |
| 25 | `b2-fordern` | `csText` | `Vyžadovat • Vyžadovat` | `Požadovat • Žádat` | LABOT |
| 26 | `b2-foerdern` | `csText` | `Podporovat • Podporovat` | `Podporovat • Napomáhat` | LABOT |
| 27 | `b2-sich-verlaufen` | `csText` | `Zmizte` | `Zabloudit • Ztratit se` | LABOT |
| 28 | `b2-verlaufen` | `csText` | `Postupovat • Valit` | `Probíhat • Plynout` | LABOT |

## OWNER validation note
- `b2-Willkür-2075`: pašreizējais `Libovolný` ir īpašības vārds “jebkāds/patvaļīgs”; DE lemma ir lietvārds `patvaļa`.
- `b2-Windbeutel-2076`: burtiskais `Větrný dort` nav dabisks čehu nosaukums; konditorejas izstrādājums ir `Větrník`.
- `b2-wiedergeben-2073`: pašreizējie atkārtotie `Rozmnožovat` neatšķir avota `reproducēt` un `atveidot`.
- `b2-zuerkennen-2084`: `Objednat` = pasūtīt; avota `piespriest` šeit ir `Přiznat`.
- `b2-zusammenfügen-2092`: `Připojit se` ir refleksīvs “pievienoties”, bet avots ir transitīvs `savienot`.
- `b2-sich-verlaufen`: `Zmizte` ir pavēles forma “pazūdiet”; avots ir `apmaldīties`.
- `b2-verlaufen`: `Valit` neatbilst avota `ritēt`; normalizēts uz `Probíhat • Plynout`.
- `b2-aendern`, `b2-bieten`, `b2-anbieten` šajā beigu blokā paliek **NELABOT**.
- Kartītes bez mapping šajā blokā apzināti paliek nemainītas.

## COPY-ONLY apply noteikumi
1. Pirms katras LABOT izmaiņas pārbaudīt `actual current value === CURRENT`.
2. Exact match → `NEW`.
3. Mismatch → `CURRENT_VALUE_MISMATCH` un **SKIP**.
4. DE laukus, ID/order un kartītes ārpus šī bloka nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai cleanup.
6. Mirror pusē tikai identiska apstiprinātā CS izmaiņa.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation
- LABOT mappings: `28`
- expected applied: `28/28`
- CURRENT_VALUE_MISMATCH: `0`
- DE changes: `0`
- outside-scope changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`
