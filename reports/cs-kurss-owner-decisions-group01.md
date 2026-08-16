# CS–DE Kurss — OWNER decisions Group 01 (findings 1–50)

Avots: `reports/cs-kurss-owner-review-group01.md`

DE un apzināti vāciski mācību prompti = READ-ONLY. Deterministiskie `LV_DIACRITIC` atradumi izrunas transkripcijā nav automātiski kļūdas.

| # | ID / path | OWNER status | CURRENT | NEW / piezīme |
|---:|---|---|---|---|
| 1 | `kurssArticlesLesson/legacyHtml` | **NEEDS_SOURCE_REVIEW** | legacyHtml ir saīsināts auditā | Nepietiek pilna CURRENT, lai droši izveidotu COPY-ONLY mappingu. |
| 2 | `kurssPronunciationLesson/legacyHtml` | **NEEDS_SOURCE_REVIEW** | legacyHtml ir saīsināts auditā | Nepietiek pilna CURRENT, lai droši izveidotu COPY-ONLY mappingu. |
| 3 | `kurssConsonantsLesson/legacyHtml` | **NEEDS_SOURCE_REVIEW** | legacyHtml ir saīsināts auditā | Nepietiek pilna CURRENT, lai droši izveidotu COPY-ONLY mappingu. |
| 4 | `kurssLesson5/legacyHtml` | **NEEDS_SOURCE_REVIEW** | legacyHtml ir saīsināts auditā | Nepietiek pilna CURRENT, lai droši izveidotu COPY-ONLY mappingu. |
| 5 | `kurssLesson8/section[1]/item[12]` | **LABOT** | `fragen (ar akuzatīvu) — ptát se` | `fragen (s akuzativem) — ptát se` |
| 6 | `kurssLesson8/section[1]/item[34]` | **FALSE_POSITIVE** | `der Bäcker (dēr beker) — pekař` | Nemainīt. LV diakritika ir izrunas transkripcijā. |
| 7 | `kurssLesson8/section[1]/item[35]` | **FALSE_POSITIVE** | `der Schneider (dēr šneider) — krejčí` | Nemainīt. LV diakritika ir izrunas transkripcijā. |
| 8 | `kurssLesson8/section[1]/item[36]` | **FALSE_POSITIVE** | `der Gärtner (dēr gertner) — zahradník` | Nemainīt. LV diakritika ir izrunas transkripcijā. |
| 9 | `kurssLesson8/section[2]/item[1]` | **LABOT** | LV teksts | `ä se také vyslovuje jako otevřené e, například ve slově der Gärtner (dēr gertner).` |
| 10 | `kurssLesson8/section[3]/item[7]` | **LABOT** | LV teksts | `U těchto sloves je také v rozkazovacím způsobu jednotného čísla v kmeni místo e samohláska i nebo ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!` |
| 11 | `kurssLesson9/section[1]/item[10]` | **LABOT** | `ruhig (rū-klidně` | `ruhig (rū-ich) — klidně` |
| 12 | `kurssLesson9/section[1]/item[13]` | **FALSE_POSITIVE** | `der Brief (dēr brīf) — dopis` | Nemainīt. |
| 13 | `kurssLesson10/section[1]/item[4]` | **FALSE_POSITIVE** | `ihr seid (īr zeit) — vy jste` | Nemainīt. |
| 14 | `kurssLesson10/section[1]/item[14]` | **FALSE_POSITIVE** | `der Knabe (dēr knābe) — chlapec` | Nemainīt. |
| 15 | `kurssLesson10/section[1]/item[17]` | **FALSE_POSITIVE** | `der Großvater (dēr grōsfāter) — dědeček` | Nemainīt. |
| 16 | `kurssLesson10/section[2]/item[1]` | **LABOT** | LV teksts | `ö se vyslovuje se zaokrouhlenými rty přibližně jako e: wir können, ihr könnt, sie können, der Löffel.` |
| 17 | `kurssLesson10/section[2]/item[2]` | **LABOT** | LV teksts | `ü se vyslovuje se zaokrouhlenými rty přibližně jako i: Müller (müller), Bücher (bücher).` |
| 18 | `kurssLesson11/section[1]/item[6]` | **FALSE_POSITIVE** | `der Bruder (dēr brūder) — bratr` | Nemainīt. |
| 19 | `kurssLesson11/section[1]/item[13]` | **FALSE_POSITIVE** | `der Schreibtisch (dēr šreibtīš) — psací stůl` | Nemainīt. |
| 20 | `kurssLesson11/section[1]/item[18]` | **FALSE_POSITIVE** | `der Freund (dēr froint) — přítel` | Nemainīt. |
| 21 | `kurssLesson11/section[1]/item[21]` | **FALSE_POSITIVE** | `der Stuhl (dēr štūl) — židle` | Nemainīt. |
| 22 | `kurssLesson11/section[1]/item[25]` | **FALSE_POSITIVE** | `die Landkarte (dī lantkarte) — mapa` | Nemainīt. |
| 23 | `kurssLesson11/section[1]/item[28]` | **FALSE_POSITIVE** | `die Schwester (dī švester) — sestra` | Nemainīt. |
| 24 | `kurssLesson12/section[1]/item[13]` | **FALSE_POSITIVE** | `der Vetter (dēr feter) — bratranec` | Nemainīt. |
| 25 | `kurssLesson12/section[1]/item[23]` | **FALSE_POSITIVE** | `das Gummi (das gumī) — guma` | Nemainīt. |
| 26 | `kurssLesson12/section[2]/item[2]` | **LABOT** | jaukts LV/CS teksts | `Ve slově der Federhalter se h vyslovuje jako hláska, zatímco ve slově der Sohn pouze označuje délku předcházející samohlásky.` |
| 27 | `kurssLesson13/section[3]/item[4]` | **LABOT** | LV teksts | `äu se vyslovuje jako oi: du läufst, er läuft.` |
| 28 | `kurssLesson14/section[3]/item[3]` | **LABOT** | LV teksts | `ö ve slově mögen se vyslovuje jako zřetelná hláska ö.` |
| 29 | `kurssLesson15/section[3]/item[0]` | **LABOT** | LV teksts | `ä ve slovech Äpfel a schälen se vyslovuje jako zavřené e.` |
| 30 | `kurssLesson16/section[3]/item[0]` | **LABOT** | jaukts LV/CS teksts | `Ve slovech wem, dem, den a der je e dlouhé a vyslovuje se přibližně jako české é.` |
| 31 | `kurssLesson16/section[3]/item[1]` | **LABOT** | bojāts LV teksts | `Ve slově gehorchen je h slyšitelné: ge-hor-chen.` |
| 32 | `kurssLesson20/section[3]/item[5]` | **LABOT** | jaukts LV/CS teksts | `Ve slovech die Küche a die Dächer se ch vyslovuje jako německý ich-Laut [ç], který v češtině nemá přesný ekvivalent.` |
| 33 | `legacyHtml/training hints` | **NEEDS_SOURCE_REVIEW** | vairāki stringi apvienoti | Vajag precīzus atsevišķos ID + CURRENT. |
| 34 | `kurssLesson11/section[3]/item[1]` | **NEEDS_SOURCE_REVIEW** | `[object Object]` | Audita ieraksts bojāts. Atjaunot faktisko source saturu. |
| 35 | `kurssLesson11/section[3]/item[2]` | **NEEDS_SOURCE_REVIEW** | `[object Object]` | Audita ieraksts bojāts. Atjaunot faktisko source saturu. |
| 36 | `kurssLesson11/section[3]/item[3]` | **NEEDS_SOURCE_REVIEW** | `[object Object]` | Audita ieraksts bojāts. Atjaunot faktisko source saturu. |
| 37 | `kurssLesson11/section[3]/item[4]` | **NEEDS_SOURCE_REVIEW** | `[object Object]` | Audita ieraksts bojāts. Atjaunot faktisko source saturu. |
| 38 | `kurssLesson11/section[3]/item[6]` | **NEEDS_SOURCE_REVIEW** | `[object Object]` | Audita ieraksts bojāts. Atjaunot faktisko source saturu. |
| 39 | `kurssLesson16/subtitle` | **NELABOT** | `Dativ, geben, sich nähern` | Nemainīt. Vācu mācāmie termini. |
| 40 | `kurssLesson20/section[4]/promptTask[10]/task` | **NELABOT** | `Vyber správný pád: wo/wann → Dativ, wohin → Akkusativ.` | Nemainīt. `wann` ir LV reference. |
| 41 | `kurssLesson20/section[4]/promptTask[11]/prompt` | **NELABOT** | vācu prompt | Nemainīt. Vācu mācību prompt. |
| 42 | `kurssLesson20/section[4]/promptTask[11]/task` | **NELABOT** | CS task | Nemainīt. |
| 43 | `kurssLesson20/section[4]/promptTask[12]/prompt` | **NELABOT** | vācu prompt | Nemainīt. Vācu mācību prompt. |
| 44 | `kurssLesson20/section[4]/promptTask[12]/task` | **NELABOT** | CS task | Nemainīt. |
| 45 | `kurssLesson20/section[4]/promptTask[13]/prompt` | **NELABOT** | vācu prompt | Nemainīt. Vācu mācību prompt. |
| 46 | `kurssLesson20/section[4]/promptTask[13]/task` | **NELABOT** | CS task | Nemainīt. |
| 47 | `kurssLesson20/section[4]/promptTask[14]/prompt` | **NELABOT** | vācu prompt | Nemainīt. Vācu mācību prompt. |
| 48 | `kurssLesson20/section[4]/promptTask[14]/task` | **NELABOT** | CS task | Nemainīt. |
| 49 | `kurssLesson20/section[4]/promptTask[15]/prompt` | **NELABOT** | vācu prompt | Nemainīt. Vācu mācību prompt. |
| 50 | `kurssLesson20/section[4]/promptTask[15]/task` | **NELABOT** | CS task | Nemainīt. |

## Kopsavilkums

- LABOT: **13**
- FALSE_POSITIVE: **13**
- NELABOT: **15**
- NEEDS_SOURCE_REVIEW: **9**
- Kopā: **50/50**
- Production changes: **0**
- DE changes: **0**

## Pirms apply

Findingiem **1–4, 33–38** vispirms jāatjauno precīzs source saturs. Tos nedrīkst apply no saīsināta teksta vai `[object Object]`.

Pārējie Group 01 lēmumi ir OWNER mappinga pamats. Šajā posmā apply neveikt.
