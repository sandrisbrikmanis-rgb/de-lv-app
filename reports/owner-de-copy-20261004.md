# OWNER copy 2026-10-04

STAGE RESULT: **NEEDS OWNER REVIEW**

Šis darbs piemēro tikai OWNER_DECISION 2026-10-04 divus laukus. B posma vērtības **nav piemērotas** datiem. DE konsekvences audits pierāda DE konsekvenci starp valodām, nevis DE pareizību. Šī atskaite nav OWNER artefaktu gatavības apstiprinājums.

Pamats: `origin/main` `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`. Zars: `cursor/owner-de-copy-20261004-f86b`. Neintegrētie closure/repair zari nav izmantoti kā bāze.

## A1. Atradumi pirms izmaiņas

Meklēts `git grep` pret `HEAD` (`origin/main`) kokos `data/`, `www/data/`, `languages/`, `ui.js`. `reports/` un `crowdin/content/` nav meklēti un nav laboti.

- `Jagderlaubnis`: **64** rindas, pa vienai katrā `b1.js` (LV + 31 valoda, `data/` un `www/data/`).
- `Jagderlaubse`: **64** rindas, tie paši faili. Katrā failā vērtība bija `de_plural` `"die Jagderlaubse"`, `de_article` `"die"`, masīva indekss **1404**.
- `Wetterleuchten`: **64** rindas, pa vienai katrā `c1.js`. Katrā failā `de_article` `"das"`, indekss **553**. LV `data/c1.js` un `www/data/c1.js` lauks `lv` bija `"rūsa"`.
- `languages/` un `ui.js`: **0** trāpījumu nevienam no trim virknēm.

### Jagderlaubnis (HEAD)

- `HEAD:data/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:data/bg/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:data/bs/b1.js:33115:    "de": "Jagderlaubnis",`
- `HEAD:data/cs/b1.js:33598:    "de": "Jagderlaubnis",`
- `HEAD:data/da/b1.js:31677:    "de": "Jagderlaubnis",`
- `HEAD:data/en/b1.js:31572:    "de": "Jagderlaubnis",`
- `HEAD:data/es/b1.js:31683:    "de": "Jagderlaubnis",`
- `HEAD:data/et/b1.js:33602:    "de": "Jagderlaubnis",`
- `HEAD:data/fi/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:data/fr/b1.js:31665:    "de": "Jagderlaubnis",`
- `HEAD:data/gr/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:data/hr/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:data/hu/b1.js:33755:    "de": "Jagderlaubnis",`
- `HEAD:data/is/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:data/it/b1.js:33755:    "de": "Jagderlaubnis",`
- `HEAD:data/lb/b1.js:33755:    "de": "Jagderlaubnis",`
- `HEAD:data/lt/b1.js:33145:    "de": "Jagderlaubnis",`
- `HEAD:data/mk/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:data/nb/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:data/nl/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:data/nn/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:data/pl/b1.js:28822:    "de": "Jagderlaubnis",`
- `HEAD:data/pt/b1.js:33751:    "de": "Jagderlaubnis",`
- `HEAD:data/ro/b1.js:27601:    "de": "Jagderlaubnis",`
- `HEAD:data/ru/b1.js:27532:    "de": "Jagderlaubnis",`
- `HEAD:data/sk/b1.js:28822:    "de": "Jagderlaubnis",`
- `HEAD:data/sl/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:data/sq/b1.js:27800:    "de": "Jagderlaubnis",`
- `HEAD:data/sr/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:data/sv/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:data/tr/b1.js:27800:    "de": "Jagderlaubnis",`
- `HEAD:data/uk/b1.js:31375:    "de": "Jagderlaubnis",`
- `HEAD:www/data/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:www/data/bg/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:www/data/bs/b1.js:33115:    "de": "Jagderlaubnis",`
- `HEAD:www/data/cs/b1.js:33598:    "de": "Jagderlaubnis",`
- `HEAD:www/data/da/b1.js:31677:    "de": "Jagderlaubnis",`
- `HEAD:www/data/en/b1.js:31572:    "de": "Jagderlaubnis",`
- `HEAD:www/data/es/b1.js:31683:    "de": "Jagderlaubnis",`
- `HEAD:www/data/et/b1.js:33602:    "de": "Jagderlaubnis",`
- `HEAD:www/data/fi/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:www/data/fr/b1.js:31665:    "de": "Jagderlaubnis",`
- `HEAD:www/data/gr/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:www/data/hr/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:www/data/hu/b1.js:33755:    "de": "Jagderlaubnis",`
- `HEAD:www/data/is/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:www/data/it/b1.js:33755:    "de": "Jagderlaubnis",`
- `HEAD:www/data/lb/b1.js:33755:    "de": "Jagderlaubnis",`
- `HEAD:www/data/lt/b1.js:33145:    "de": "Jagderlaubnis",`
- `HEAD:www/data/mk/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:www/data/nb/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:www/data/nl/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:www/data/nn/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:www/data/pl/b1.js:28822:    "de": "Jagderlaubnis",`
- `HEAD:www/data/pt/b1.js:33751:    "de": "Jagderlaubnis",`
- `HEAD:www/data/ro/b1.js:27601:    "de": "Jagderlaubnis",`
- `HEAD:www/data/ru/b1.js:27532:    "de": "Jagderlaubnis",`
- `HEAD:www/data/sk/b1.js:28822:    "de": "Jagderlaubnis",`
- `HEAD:www/data/sl/b1.js:33759:    "de": "Jagderlaubnis",`
- `HEAD:www/data/sq/b1.js:27800:    "de": "Jagderlaubnis",`
- `HEAD:www/data/sr/b1.js:27520:    "de": "Jagderlaubnis",`
- `HEAD:www/data/sv/b1.js:33749:    "de": "Jagderlaubnis",`
- `HEAD:www/data/tr/b1.js:27800:    "de": "Jagderlaubnis",`
- `HEAD:www/data/uk/b1.js:31375:    "de": "Jagderlaubnis",`

### Jagderlaubse (HEAD)

- `HEAD:data/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/bg/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/bs/b1.js:33117:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/cs/b1.js:33600:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/da/b1.js:31679:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/en/b1.js:31574:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/es/b1.js:31685:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/et/b1.js:33604:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/fi/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/fr/b1.js:31667:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/gr/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/hr/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/hu/b1.js:33757:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/is/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/it/b1.js:33757:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/lb/b1.js:33757:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/lt/b1.js:33147:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/mk/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/nb/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/nl/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/nn/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/pl/b1.js:28824:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/pt/b1.js:33753:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/ro/b1.js:27603:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/ru/b1.js:27534:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/sk/b1.js:28824:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/sl/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/sq/b1.js:27802:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/sr/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/sv/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/tr/b1.js:27802:    "de_plural": "die Jagderlaubse",`
- `HEAD:data/uk/b1.js:31377:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/bg/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/bs/b1.js:33117:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/cs/b1.js:33600:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/da/b1.js:31679:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/en/b1.js:31574:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/es/b1.js:31685:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/et/b1.js:33604:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/fi/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/fr/b1.js:31667:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/gr/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/hr/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/hu/b1.js:33757:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/is/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/it/b1.js:33757:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/lb/b1.js:33757:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/lt/b1.js:33147:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/mk/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/nb/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/nl/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/nn/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/pl/b1.js:28824:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/pt/b1.js:33753:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/ro/b1.js:27603:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/ru/b1.js:27534:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/sk/b1.js:28824:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/sl/b1.js:33761:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/sq/b1.js:27802:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/sr/b1.js:27522:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/sv/b1.js:33751:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/tr/b1.js:27802:    "de_plural": "die Jagderlaubse",`
- `HEAD:www/data/uk/b1.js:31377:    "de_plural": "die Jagderlaubse",`

### Wetterleuchten (HEAD)

- `HEAD:data/bg/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:data/bs/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/cs/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/da/c1.js:3959:    "de": "Wetterleuchten",`
- `HEAD:data/en/c1.js:3959:    "de": "Wetterleuchten",`
- `HEAD:data/es/c1.js:3958:    "de": "Wetterleuchten",`
- `HEAD:data/et/c1.js:4583:    "de": "Wetterleuchten",`
- `HEAD:data/fi/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:data/fr/c1.js:3959:    "de": "Wetterleuchten",`
- `HEAD:data/gr/c1.js:4068:    "de": "Wetterleuchten",`
- `HEAD:data/hr/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:data/hu/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/is/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:data/it/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/lb/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/lt/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/mk/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:data/nb/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:data/nl/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/nn/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:data/pl/c1.js:3913:    "de": "Wetterleuchten",`
- `HEAD:data/pt/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/ro/c1.js:3890:    "de": "Wetterleuchten",`
- `HEAD:data/ru/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:data/sk/c1.js:3913:    "de": "Wetterleuchten",`
- `HEAD:data/sl/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:data/sq/c1.js:3910:    "de": "Wetterleuchten",`
- `HEAD:data/sr/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:data/sv/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:data/tr/c1.js:3910:    "de": "Wetterleuchten",`
- `HEAD:data/uk/c1.js:3918:    "de": "Wetterleuchten",`
- `HEAD:www/data/bg/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:www/data/bs/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/cs/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/da/c1.js:3959:    "de": "Wetterleuchten",`
- `HEAD:www/data/en/c1.js:3959:    "de": "Wetterleuchten",`
- `HEAD:www/data/es/c1.js:3958:    "de": "Wetterleuchten",`
- `HEAD:www/data/et/c1.js:4583:    "de": "Wetterleuchten",`
- `HEAD:www/data/fi/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:www/data/fr/c1.js:3959:    "de": "Wetterleuchten",`
- `HEAD:www/data/gr/c1.js:4068:    "de": "Wetterleuchten",`
- `HEAD:www/data/hr/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:www/data/hu/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/is/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:www/data/it/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/lb/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/lt/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/mk/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:www/data/nb/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:www/data/nl/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/nn/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:www/data/pl/c1.js:3913:    "de": "Wetterleuchten",`
- `HEAD:www/data/pt/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/ro/c1.js:3890:    "de": "Wetterleuchten",`
- `HEAD:www/data/ru/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:www/data/sk/c1.js:3913:    "de": "Wetterleuchten",`
- `HEAD:www/data/sl/c1.js:3968:    "de": "Wetterleuchten",`
- `HEAD:www/data/sq/c1.js:3910:    "de": "Wetterleuchten",`
- `HEAD:www/data/sr/c1.js:3911:    "de": "Wetterleuchten",`
- `HEAD:www/data/sv/c1.js:3976:    "de": "Wetterleuchten",`
- `HEAD:www/data/tr/c1.js:3910:    "de": "Wetterleuchten",`
- `HEAD:www/data/uk/c1.js:3918:    "de": "Wetterleuchten",`

## A2–A5. Piemērotās izmaiņas

- 64 `b1.js` failos tikai `de_plural`: `"die Jagderlaubse"` → `"die Jagderlaubnisse"`. Vērtība nokopēta no LV, bez AI.
- Tikai LV `data/c1.js` un `www/data/c1.js`: `lv` `"rūsa"` → `"tālais zibens"`.
- Citu valodu C1 `Wetterleuchten` tulkojumi A posmā nav mainīti. Pārbaude: 64 `c1.js` indeksā 553 joprojām ir `Wetterleuchten` / `das`; `tālais zibens` ir tikai abos LV failos.

Pēc izmaiņas `de_plural` šim ierakstam ir viena kopa visos 64 `b1.js` failos: `die Jagderlaubnisse`.

## Diff kopsavilkums

`git diff --numstat`: **66** faili, katrs `1 1`. `git diff --stat`: 66 files changed, 66 insertions, 66 deletions.

Hunk pārbaude: 66 `+` un 66 `-`. Katrs `b1.js` hunks ir tikai `de_plural` `Jagderlaubse` / `Jagderlaubnisse`. Katrs `c1.js` hunks ir tikai `"lv": "rūsa"` / `"lv": "tālais zibens"`. Citu rindu nav.

`git diff -- crowdin languages ui.js scripts` ir tukšs. Repo skripti nav mainīti.

Jaunie atskaišu faili nav datu rindas:

- `reports/wetterleuchten-proposals.csv`
- `reports/plural-suffix-rule-check.csv`
- `reports/owner-de-copy-20261004.md`

## A6. Verifikācija

Abi skripti nav `origin/main`. Tie palaisti no pagaidu kopijām ar `ROOT=/workspace`. Izvade paliek `/tmp/owner-verify/out/` un netiek komitēta. Klasifikācijas kods nav mainīts.

`scripts/audit-lv-de-verify.js` noliktavā apstājas, ja `git diff -- data www/data languages ui.js` nav tukšs. Pagaidu kopija atļāva tieši šos 66 failus un noraidītu jebkuru citu. Tas ir vienīgais pagaidu grozījums.

### scripts/audit-de-consistency.js

Avots: `origin/cursor/de-consistency-audit-f86b`. Tiešā palaišana: **exit 0**.

Izdrukātais kopsavilkums:

```
{"verdict":"PARTIAL","languages":31,"CHECKED_FIELDS":2386054,"MISMATCHES":7593,"NOT_VERIFIABLE":11036,"COVERAGE":99.5396,"lvAnomalies":618}
```

Verdikts paliek **PARTIAL**, jo `NOT_VERIFIABLE` ir 11036. Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.

`de_plural` MISMATCH skaits:

| avots | de_plural MISMATCH | sadalījums |
| --- | --- | --- |
| iepriekšējais `reports/de-consistency-audit.json` zarā `cursor/de-consistency-audit-f86b` | 12 | EXTRA 12 |
| šī palaišana pēc OWNER labojuma | 12 | EXTRA 12 |

Skaits **nav palielinājies**. Visas 12 rindas ir B2 `Pfahlbau` indekss 1443, `EXTRA`, valodās et, fi, is, nb, nn, sv, kokos `data` un `www`. `Jagderlaubnis` šajā sarakstā nav. `de_plural` TEXT skaits ir 0.

### scripts/audit-lv-de-verify.js

Avots: `origin/cursor/lv-de-verify-f86b`. **exit 0**.

```
{"verdict":"PARTIAL","pass1":"CHECKED","pass2":"NOT_RUN","records":8618,"finding":80,"needsSourceReview":7164,"review":51,"observation":500,"stemReview":20,"caseFindings":0}
```

`PLURAL_STEM_CHECK` / `STEM_MISMATCH`: **20** (iepriekš publicētajā pārskaitē bija 21). `Jagderlaubnis` un `Jagderlaubnisse` šajā sarakstā **nav**. Atlikušie 20 ir tie, kas bija REVIEW arī pirms šī labojuma (Joghurt, Material, Saal, Stadion, Cello, Examen, Hörsaal, Kosmetik, Lesesaal, Prinzip, Speisesaal, Tempo, Wartesaal, Bootsmann, Dressman, Landsmann, Pater, Geschäftsmann, Beweismaterial, gesetzgebende Gewalt).

Pass 2 ir `NOT_RUN`. Bez avota faila DE pareizība nav pierādīta. Verdikts paliek PARTIAL.

## B. Priekšlikumi — nav piemēroti

`reports/wetterleuchten-proposals.csv` ir **31** rinda (reģistra mērķvalodas bez LV). LV jau ir A4 labojums un šajā failā nav.

Nozīme, kas jāpiemēro vēlāk, ja OWNER apstiprina: «tāla zibenošana bez dzirdama pērkona, atblāzma pie apvāršņa». Tulkojums nedrīkst nozīmēt «rūsa», «atspīdums» vai «izdalīšanās».

OWNER šim lemmatam nenodeva DE↔X vārdnīcas failu. `main` G2 NN/PT/RO reģistrs ir terminoloģijas pilots, nevis `Wetterleuchten` šķirklis, tāpēc `source_id` ir tukšs.

AI melnraksts pēc §7.158.A, tikai kur avota nav:

- modelis: `grok-4.7-medium` (abas palaišanas)
- prompt versija: `wetterleuchten-proposal-v1`
- prompt SHA-256: `a8946fa3ca2d819b8c315508389e56b107be96356e0cef866b85a768bf76ad45`
- temperatūra: nav uzstādīta
- palaišanas: divas. Trešā nav veikta.
- Atšķirība starp palaišanām = `NEEDS_SOURCE_REVIEW`. Varianti nav kārtoti un nav izvēlēts «labākais». Tabulā abi melnraksti ir savienoti ar `/`; CSV failā atdalītājs ir ` | `.
- Vienāda AI atbilde **nav** avots un **nav** PASS.

Skaits: KEEP 2, PROPOSED 21, NEEDS_SOURCE_REVIEW 8. `OWNER_DECISION` kolonna ir tukša. **Neviena šī vērtība nav ierakstīta `data/` vai `www/data/`.**

| lang | current_value | proposed_value | method | status |
| --- | --- | --- | --- | --- |
| bg | Ръжда | топлинна мълния | AI_DRAFT_TWO_RUNS | PROPOSED |
| bs | Hrđa | toplotna munja | AI_DRAFT_TWO_RUNS | PROPOSED |
| cs | Vzdálené blýskání | Vzdálené blýskání | MEANING_MATCH | KEEP |
| da | Rust | kornmod | AI_DRAFT_TWO_RUNS | PROPOSED |
| en | Sheet lightning | Sheet lightning | MEANING_MATCH | KEEP |
| es | resplandor de tormenta | relámpago de calor | AI_DRAFT_TWO_RUNS | PROPOSED |
| et | hõõguv välk | kauge välk / pälk | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| fi | Hõõguv välk | elosalama | AI_DRAFT_TWO_RUNS | PROPOSED |
| fr | Rouiller | éclair de chaleur | AI_DRAFT_TWO_RUNS | PROPOSED |
| gr | Λαμπερή αστραπή | μακρινή αστραπή / αστραπή θερμότητας | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| hr | Ръжда | toplinska munja | AI_DRAFT_TWO_RUNS | PROPOSED |
| hu | Rozsda | hővillámlás / hővillám | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| is | Hõõguv välk | fjarlæg elding / eldingarbjarmi | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| it | Rūsa | lampo di calore | AI_DRAFT_TWO_RUNS | PROPOSED |
| lb | Rūsa | Wäiten Blëtz / Hëtztblëtz | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| lt | rūdys | amalas | AI_DRAFT_TWO_RUNS | PROPOSED |
| mk | Ръжда | топлинска молња | AI_DRAFT_TWO_RUNS | PROPOSED |
| nb | Hõõguv välk | kornmo | AI_DRAFT_TWO_RUNS | PROPOSED |
| nl | Rūsa | weerlicht | AI_DRAFT_TWO_RUNS | PROPOSED |
| nn | Hõõguv välk | kornmo | AI_DRAFT_TWO_RUNS | PROPOSED |
| pl | Rdza | błyskawica cieplna | AI_DRAFT_TWO_RUNS | PROPOSED |
| pt | Rusa | relâmpago de calor | AI_DRAFT_TWO_RUNS | PROPOSED |
| ro | Rugini | fulger de căldură | AI_DRAFT_TWO_RUNS | PROPOSED |
| ru | Ржавчина | зарница | AI_DRAFT_TWO_RUNS | PROPOSED |
| sk | Rdza | blýskavica | AI_DRAFT_TWO_RUNS | PROPOSED |
| sl | rūsa | bliskavica / toplotna strela | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| sq | Rdza | vetëtimë e largët / vetëtimë e nxehtësisë | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| sr | Ръжда | топлотна муња / зарница | AI_DRAFT_TWO_RUNS | NEEDS_SOURCE_REVIEW |
| sv | Hõõguv välk | kornblixt | AI_DRAFT_TWO_RUNS | PROPOSED |
| tr | Rdza | ısı şimşeği | AI_DRAFT_TWO_RUNS | PROPOSED |
| uk | іржа | блискавиця | AI_DRAFT_TWO_RUNS | PROPOSED |

CSV SHA-256: `d8f951051de5265f0ac7e08d33509ee953b588c9365bff39ed4495177d3b1762`

## C1. Galotņu likumu norāde — nav labojums

Mehāniska pārbaude LV `data/a1.js`…`c2.js` lietvārdiem ar `de_article` `der`/`die`/`das`. Garākā galotne vispirms: `-nis` → `-nisse`, `-ung` → `-ungen`, `-heit` → `-heiten`, `-keit` → `-keiten`, `-schaft` → `-schaften`, `-in` → `-innen`. AI nav izsaukts.

`www/data` LV koks dod to pašu rindu kopu. `Jagderlaubnis` / `die Jagderlaubnisse` sakrīt ar `-nis` → `-nisse` un **nav** sarakstā.

Rindu skaits: **67**.

| likums | rindas |
| --- | --- |
| -in → -innen | 46 |
| -ung → -ungen | 15 |
| -nis → -nisse | 2 |
| -heit → -heiten | 2 |
| -keit → -keiten | 1 |
| -schaft → -schaften | 1 |

Kolonna `expected_form_indication` ir norāde, nevis labojums. Tukšs `de_plural` tabulā ir ∅.

| level | index | de | de_article | de_plural | expected_form_indication |
| --- | --- | --- | --- | --- | --- |
| A1 | 80 | Bein | das | die Beine | die Beinnen |
| A1 | 124 | Cousin | der | die Cousins | die Cousinnen |
| A1 | 238 | Gesundheit | die | ∅ | die Gesundheiten |
| A1 | 338 | Kleidung | die | ∅ | die Kleidungen |
| A1 | 529 | Schwein | das | die Schweine | die Schweinnen |
| A1 | 649 | Wein | der | die Weine | die Weinnen |
| A2 | 22 | Achtung | die | ∅ | die Achtungen |
| A2 | 231 | Benzin | das | ∅ | die Benzinnen |
| A2 | 426 | Erlaubnis | die | ∅ | die Erlaubnisse |
| A2 | 598 | Glühwein | der | die Glühweine | die Glühweinnen |
| A2 | 612 | Gutschein | der | die Gutscheine | die Gutscheinnen |
| A2 | 684 | Hosenbein | das | die Hosenbeine | die Hosenbeinnen |
| A2 | 811 | Kleidung | die | ∅ | die Kleidungen |
| A2 | 906 | Magazin | das | die Magazine | die Magazinnen |
| A2 | 925 | Medizin | die | ∅ | die Medizinnen |
| A2 | 994 | Nahrung | die | ∅ | die Nahrungen |
| A2 | 1334 | Sonnenschein | der | ∅ | die Sonnenscheinnen |
| A2 | 1379 | Stein | der | die Steine | die Steinnen |
| A2 | 1438 | Termin | der | die Termine | die Terminnen |
| A2 | 1446 | Tischtennis | das | ∅ | die Tischtennisse |
| A2 | 1532 | Vitamin | das | die Vitamine | die Vitaminnen |
| A2 | 1579 | Werbung | die | ∅ | die Werbungen |
| B1 | 165 | Arbeitslosigkeit | die | ∅ | die Arbeitslosigkeiten |
| B1 | 187 | Aufschwung | der | die Aufschwünge | die Aufschwungen |
| B1 | 364 | Bernstein | der | die Bernsteine | die Bernsteinnen |
| B1 | 565 | Dasein | das | ∅ | die Daseinnen |
| B1 | 597 | Disziplin | die | die Disziplinen | die Disziplinnen |
| B1 | 924 | Flugschein | der | die Flugscheine | die Flugscheinnen |
| B1 | 1044 | Geldschein | der | die Geldscheine | die Geldscheinnen |
| B1 | 1301 | Holzscheit | das | die Holzscheite | die Holzscheiten |
| B1 | 1419 | Jasmin | der | die Jasmine | die Jasminnen |
| B1 | 1454 | Kamin | der | die Kamine | die Kaminnen |
| B1 | 1775 | Lieferschein | der | die Lieferscheine | die Lieferscheinnen |
| B1 | 1776 | Liefertermin | der | die Liefertermine | die Lieferterminnen |
| B1 | 1805 | Lottoschein | der | die Lottoscheine | die Lottoscheinnen |
| B1 | 1902 | Mondschein | der | ∅ | die Mondscheinnen |
| B1 | 1985 | Nikotin | das | ∅ | die Nikotinnen |
| B1 | 2067 | Passierschein | der | die Passierscheine | die Passierscheinnen |
| B1 | 2420 | Schein | der | die Scheine | die Scheinnen |
| B1 | 2509 | Schornstein | der | die Schornsteine | die Schornsteinnen |
| B1 | 2570 | Schwung | der | die Schwünge | die Schwungen |
| B1 | 2706 | Sprung | der | die Sprünge | die Sprungen |
| B1 | 3061 | Verein | der | die Vereine | die Vereinnen |
| B1 | 3232 | Weitsprung | der | die Weitsprünge | die Weitsprungen |
| B2 | 78 | Abzweigung | die | ∅ | die Abzweigungen |
| B2 | 236 | Bewusstsein | das | die Bewusstseine | die Bewusstseinnen |
| B2 | 330 | Cholesterin | das | ∅ | die Cholesterinnen |
| B2 | 354 | Dasein | das | ∅ | die Daseinnen |
| B2 | 440 | Dreisprung | der | die Dreisprünge | die Dreisprungen |
| B2 | 498 | Edelstein | der | die Edelsteine | die Edelsteinnen |
| B2 | 607 | Elfenbein | das | die Elfenbeine | die Elfenbeinnen |
| B2 | 964 | Gestein | das | die Gesteine | die Gesteinnen |
| B2 | 1142 | Hochsprung | der | die Hochsprünge | die Hochsprungen |
| B2 | 1445 | Pfandschein | der | die Pfandscheine | die Pfandscheinnen |
| B2 | 1491 | Rain | der | die Raine | die Rainnen |
| B2 | 1606 | Schuldschein | der | die Schuldscheine | die Schuldscheinnen |
| B2 | 1630 | Sein | das | ∅ | die Seinnen |
| B2 | 1739 | Totenschein | der | die Totenscheine | die Totenscheinnen |
| B2 | 1800 | Umschwung | der | die Umschwünge | die Umschwungen |
| B2 | 1865 | Ursprung | der | die Ursprünge | die Ursprungen |
| B2 | 2005 | Vorsprung | der | die Vorsprünge | die Vorsprungen |
| C1 | 67 | Geburtsschein | der | die Geburtsscheine | die Geburtsscheinnen |
| C1 | 349 | Gepäckschein | der | die Gepäckscheine | die Gepäckscheinnen |
| C1 | 451 | Rechenschaft | die | ∅ | die Rechenschaften |
| C1 | 542 | Waffenschein | der | die Waffenscheine | die Waffenscheinnen |
| C2 | 20 | Benzingutschein | der | die Benzingutscheine | die Benzingutscheinnen |
| C2 | 38 | Geschenkgutschein | der | die Geschenkgutscheine | die Geschenkgutscheinnen |

CSV SHA-256: `c4975d2cc91e39aec161d214fdac02670be40010cfd227b9a9845ceb153514ec`

## C2. Iekavu piezīmes

Pārbaude, vai tulkojums pret LV vārdnīcu ir zaudējis iekavu piezīmi, **nav iespējama bez avota**. Šāda pārbaude ir vajadzīga. Tā nav izpildīta kā spriedums, un dati šī iemesla dēļ nav mainīti.

## STAGE RESULT

**NEEDS OWNER REVIEW**

A posms ir piemērots un A6 pārbaudes atbilst nosacījumiem: diff ir 66 vienas rindas datu faili, `Jagderlaubnis` nav `STEM_MISMATCH`, `de_plural` MISMATCH skaits nav pieaudzis (12 → 12). B posma 31 vērtība nav piemērota. Astoņām valodām statuss ir `NEEDS_SOURCE_REVIEW`. DE pareizība ar šo auditu nav pasludināta par PASS.
