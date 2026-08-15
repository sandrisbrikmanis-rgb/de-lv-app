# CS–DE B2 REPAIR — GROUP 07

## Scope

- Dataset: `B2`
- Kartītes: `301–350`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `301–350`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY** — nekādus tulkojumus, interpretācijas vai papildu cleanup pašam neveikt.

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-Brettsegeln-301` | `csText` | `Surfování` | `Windsurfing` | LABOT |
| 2 | `b2-brillant-303` | `csText` | `Výborný • Výborný` | `Brilantní • Vynikající` | LABOT |
| 3 | `b2-brüten-304` | `csText` | `Dumat • Neustále o něčem přemýšlet` | `Sedět na vejcích • Dumat` | LABOT |
| 4 | `b2-Buche-305` | `csText` | `Buk • Habr` | `Buk` | LABOT |
| 5 | `b2-Buckel-310` | `csText` | `Hrb • Dort • Hřbet` | `Hrb • Hrbol • Hřbet` | LABOT |
| 6 | `b2-Bügel-311` | `csText` | `Rukojeť • Obruč • Ramínko na šaty • Stupínek` | `Držadlo • Obruč • Ramínko na šaty • Třmen` | LABOT |
| 7 | `b2-Bühnenbildner-313` | `csText` | `Dekoratér` | `Scénograf` | LABOT |
| 8 | `b2-Bundesland-314` | `csText` | `Federální země` | `Spolková země` | LABOT |
| 9 | `b2-Bündnis-317` | `csText` | `Unie` | `Aliance • Spolek` | LABOT |
| 10 | `b2-Bürde-318` | `csText` | `Zátěž • Zátěž` | `Břemeno • Zátěž` | LABOT |
| 11 | `b2-Bürge-319` | `csText` | `Ručitel • Vůdce` | `Ručitel • Garant` | LABOT |
| 12 | `b2-bürgerlich-321` | `csText` | `Občanský • Občané • Buržoazní • Buržoazní` | `Občanský • Měšťanský • Buržoazní • Buržoazní` | LABOT |
| 13 | `b2-Chefredakteur-326` | `csText` | `Řídící redaktor` | `Šéfredaktor` | LABOT |
| 14 | `b2-Cholesterin-330` | `csText` | `Cholesterolu` | `Cholesterol` | LABOT |
| 15 | `b2-Chromosom-332` | `csText` | `Chromozóm` | `Chromozom` | LABOT |
| 16 | `b2-Dachziegel-337` | `csText` | `Dlaždice` | `Střešní taška` | LABOT |
| 17 | `b2-damalig-339` | `csText` | `Tehdy • Té doby` | `Tehdejší • Z té doby` | LABOT |
| 18 | `b2-Damm-340` | `csText` | `Hráz • Hráz • Železniční násep` | `Hráz • Přehrada • Železniční násep` | LABOT |
| 19 | `b2-dämmern-341` | `csText` | `Za soumraku • Stmívá se • Svítá • Světlo se potí` | `Šeřit se • Stmívat se • Svítat • Rozednívat se` | LABOT |
| 20 | `b2-Dämmerung-342` | `csText` | `Soumrak • Soumrak • Svítání • Svítání` | `Soumrak • Šero • Úsvit • Svítání` | LABOT |
| 21 | `b2-dampfen-343` | `csText` | `Kouř • Vypařovat se` | `Kouřit se • Pařit se` | LABOT |
| 22 | `b2-dämpfen-344` | `csText` | `Umlčet • Dusit • Dusit • Dusit • Míchat` | `Tlumit • Potlačit • Vařit v páře • Dusit • Podusit` | LABOT |
| 23 | `b2-Dampfheizung-346` | `csText` | `Parní ohřev` | `Parní vytápění` | LABOT |
| 24 | `b2-darbieten-347` | `csText` | `Poskytnout • Dar` | `Poskytnout • Předložit` | LABOT |
| 25 | `b2-Darbietung-348` | `csText` | `Výkon • Výkon` | `Výkon • Představení` | LABOT |
| 26 | `b2-Darlehen-350` | `csText` | `Půjčka • Půjčka` | `Úvěr • Půjčka` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt:
   `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt:
   `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. Nedrīkst:
   - mainīt DE laukus;
   - mainīt ID vai kartīšu secību;
   - mainīt kartītes ārpus `301–350`;
   - veikt papildu stilistiskus vai lingvistiskus labojumus;
   - aizvietot šeit noteikto `NEW` ar Composer paša variantu.
5. Ja konkrētajai kartītei ir projekta mirror ieraksts, piemērot identisku apstiprināto CS izmaiņu abās mirror pusēs atbilstoši esošajai projekta struktūrai.
6. Pēc apply obligāti pārbaudīt:
   - requested mappings: `26`
   - processed: `26/26`
   - `CURRENT_VALUE_MISMATCH`: `0`
   - DE changes: `0`
   - outside-scope production changes: `0`
   - syntax: `PASS`
   - ID/order: `PASS`
   - mirror/parity: `PASS`

## Īpaši deterministiski fiksēts

- `b2-Chromosom-332`: `Chromozóm` ir atzīmēts ar `PL_CHAR`; labojums → `Chromozom`.

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `301–350`.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
