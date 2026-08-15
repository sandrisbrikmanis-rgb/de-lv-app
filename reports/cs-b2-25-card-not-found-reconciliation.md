# CS–DE B2 — 25 CARD_NOT_FOUND Reconciliation

**MODE:** READ-ONLY
**Verdict:** CS–DE B2 CARD_NOT_FOUND RECONCILIATION = COMPLETE / READY FOR OWNER REMAP DECISIONS

## Summary

- CARD_NOT_FOUND input: **25**
- UNIQUE_DE_MATCH_CURRENT_MATCH: **1**
- UNIQUE_DE_MATCH_CURRENT_MISMATCH: **2**
- MULTIPLE_DE_MATCHES: **0**
- FIELD_NOT_FOUND: **0**
- CONFIRMED_ABSENT: **22**
- EXACT_ID_FOUND: **0**
- NO_EXACT_DE_MATCH: **0**
- INVESTIGATE: **0**
- production changes: **0**
- DE changes: **0**
- classified total: **25/25**

## Reconciliation table

| # | Source group | Original cardId | DE | Field | CURRENT | NEW | Production match status | Actual production cardId | Actual current | CURRENT match | OWNER action |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Group 19 | `b2-Geldentwertung-902` | Geldentwertung | `csText` | Znehodnocení peněz | Znehodnocení měny | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 2 | Group 19 | `b2-Geldschein-903` | Geldschein | `csText` | Bankovka • Bankovka | Bankovka • Papírové platidlo | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 3 | Group 19 | `b2-Gelege-906` | Gelege | `csText` | Zdivo | Snůška vajec | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 4 | Group 20 | `b2-Gespinst-951` | Gespinst | `csText` | Pletení • Síť | Předivo • Pavučina | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 5 | Group 20 | `b2-Gespött-952` | Gespött | `csText` | Výsměch • Posměch | Posměch • Terč posměchu | UNIQUE_DE_MATCH_CURRENT_MISMATCH | `b2-Gespött-959` | Prořezávání zoubků | NO | OWNER_REVIEW_CURRENT_MISMATCH |
| 6 | Group 20 | `b2-Gestade-954` | Gestade | `csText` | Pobřeží • Pobřeží | Břeh • Pobřeží | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 7 | Group 20 | `b2-Geständnis-955` | Geständnis | `csText` | Zpověď | Přiznání | UNIQUE_DE_MATCH_CURRENT_MATCH | `b2-Geständnis-962` | Zpověď | YES | REMAP_SAFE |
| 8 | Group 20 | `b2-Gestank-957` | Gestank | `csText` | Zápach • Zápach | Smrad • Zápach | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 9 | Group 24 | `b2-Hypothek-1152` | Hypothek | `csText` | Hypotéka • Hypotéka | Hypotéka • Zástavní právo | UNIQUE_DE_MATCH_CURRENT_MISMATCH | `b2-Hypothek-1154` | Hypotéka | NO | OWNER_REVIEW_CURRENT_MISMATCH |
| 10 | Group 24 | `b2-Illusion-1154` | Illusion | `csText` | Iluze • Iluze | Iluze • Klamná představa | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 11 | Group 24 | `b2-Imker-1156` | Imker | `csText` | Včelař • Včelař | Včelař • Chovatel včel | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 12 | Group 24 | `b2-Import-1158` | Import | `csText` | Importovat • Importovat | Import • Dovoz | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 13 | Group 24 | `b2-importieren-1159` | importieren | `csText` | Dovážet • Dovážet | Importovat • Dovážet | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 14 | Group 24 | `b2-Industrieausrüstung-1162` | Industrieausrüstung | `csText` | Průmyslové zařízení • Průmyslové zařízení | Průmyslové zařízení • Průmyslová výbava | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 15 | Group 24 | `b2-Industrieware-1163` | Industrieware | `csText` | Průmyslové zboží • Průmyslové zboží | Průmyslové zboží • Průmyslový výrobek | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 16 | Group 24 | `b2-inhaltslos-1165` | inhaltslos | `csText` | Prázdný • Bezvýznamný | Obsahově prázdný • Bezobsažný | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 17 | Group 24 | `b2-Inland-1166` | Inland | `csText` | Domácí • Vnitrozemí | Tuzemsko • Vnitrozemí | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 18 | Group 24 | `b2-Innenminister-1167` | Innenminister | `csText` | Ministr vnitra • Ministr vnitra | Ministr vnitra • Šéf resortu vnitra | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 19 | Group 24 | `b2-Insektenvertilgungsmittel-1169` | Insektenvertilgungsmittel | `csText` | Hubič hmyzu | Prostředek na hubení hmyzu • Insekticid | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 20 | Group 24 | `b2-Intensivhaltung-1171` | Intensivhaltung | `csText` | Intenzivní chov hospodářských zvířat | Intenzivní chov zvířat | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 21 | Group 24 | `b2-internieren-1173` | internieren | `csText` | Internovat • Internovat | Internovat • Držet v internaci | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 22 | Group 24 | `b2-Intrige-1176` | Intrige | `csText` | Intriky • Intriky | Intrika • Pleticha | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 23 | Group 24 | `b2-Irrtum-1178` | Irrtum | `csText` | Chyba • Chyba • Mylná představa | Omyl • Chyba • Mylná představa | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 24 | Group 24 | `b2-Jauche-1180` | Jauche | `csText` | Močůvka • Močůvka | Kejda • Močůvka | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |
| 25 | Group 24 | `b2-Joch-1181` | Joch | `csText` | Jho • Jho | Jho • Jařmo | CONFIRMED_ABSENT | `—` | — | NO | REMOVE_FROM_SCOPE_CONFIRMED_ABSENT |

## Diagnostic candidates (non-authoritative)

### b2-Geldentwertung-902
- `b2-Entwertung-648` (Entwertung) — partial_id

### b2-Gelege-906
- `b2-gelegen-908` (gelegen) — partial_id

### b2-Intensivhaltung-1171
- `b2-Haltung-1059` (Haltung) — partial_id

### b2-Joch-1181
- `b2-unterjochen-1842` (unterjochen) — partial_id

_Generated: 2026-08-15T08:32:24.148Z_