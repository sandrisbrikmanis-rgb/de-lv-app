# CS–DE B2 COPY-ONLY REPAIR APPLY

**MODE:** APPLY
**Final status:** COPY-ONLY REPAIR APPLY = PARTIAL / OWNER RECONCILIATION REQUIRED (CARD_NOT_FOUND)

## Git
- branch: `cursor/cs-b2-owner-copy-only-repair-6ea4`
- HEAD before: `8400573aa829dff8ce953cb6e84526b6e550dcf6`
- HEAD after: `pending commit`
- production files changed: data/cs/b2.js, www/data/cs/b2.js

## Mapping consolidation
- raw mapping rows: 990
- duplicate (cardId, field) rows: 14
- conflicting duplicate rows: 2
- unique mappings: 969
- LABOT unique: 969
- NELABOT / false-positive skipped: 5

## Apply
- requested LABOT: 985
- processed: 969
- APPLIED: 944
- CURRENT_VALUE_MISMATCH: 0
- CARD_NOT_FOUND: 25
- SKIPPED NELABOT: 5
- unexpected changes: 0

## Integrity
- DE READ-ONLY: **PASS**
- other languages READ-ONLY: **PASS**
- syntax: **PASS**
- ID/order: **PASS**
- card count: **PASS**
- study parity: **PASS**
- mirror/layer parity: **PASS**
- exact mapping verification: **PASS**

## CARD_NOT_FOUND
- `b2-Geldentwertung-902` / `csText` — CURRENT `Znehodnocení peněz`, NEW `Znehodnocení měny` (cs-b2-repair-group19-cards-901-950_674d.md)
- `b2-Geldschein-903` / `csText` — CURRENT `Bankovka • Bankovka`, NEW `Bankovka • Papírové platidlo` (cs-b2-repair-group19-cards-901-950_674d.md)
- `b2-Gelege-906` / `csText` — CURRENT `Zdivo`, NEW `Snůška vajec` (cs-b2-repair-group19-cards-901-950_674d.md)
- `b2-Gespinst-951` / `csText` — CURRENT `Pletení • Síť`, NEW `Předivo • Pavučina` (cs-b2-repair-group20-cards-951-1000_f74a.md)
- `b2-Gespött-952` / `csText` — CURRENT `Výsměch • Posměch`, NEW `Posměch • Terč posměchu` (cs-b2-repair-group20-cards-951-1000_f74a.md)
- `b2-Gestade-954` / `csText` — CURRENT `Pobřeží • Pobřeží`, NEW `Břeh • Pobřeží` (cs-b2-repair-group20-cards-951-1000_f74a.md)
- `b2-Geständnis-955` / `csText` — CURRENT `Zpověď`, NEW `Přiznání` (cs-b2-repair-group20-cards-951-1000_f74a.md)
- `b2-Gestank-957` / `csText` — CURRENT `Zápach • Zápach`, NEW `Smrad • Zápach` (cs-b2-repair-group20-cards-951-1000_f74a.md)
- `b2-Hypothek-1152` / `csText` — CURRENT `Hypotéka • Hypotéka`, NEW `Hypotéka • Zástavní právo` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Illusion-1154` / `csText` — CURRENT `Iluze • Iluze`, NEW `Iluze • Klamná představa` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Imker-1156` / `csText` — CURRENT `Včelař • Včelař`, NEW `Včelař • Chovatel včel` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Import-1158` / `csText` — CURRENT `Importovat • Importovat`, NEW `Import • Dovoz` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-importieren-1159` / `csText` — CURRENT `Dovážet • Dovážet`, NEW `Importovat • Dovážet` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Industrieausrüstung-1162` / `csText` — CURRENT `Průmyslové zařízení • Průmyslové zařízení`, NEW `Průmyslové zařízení • Průmyslová výbava` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Industrieware-1163` / `csText` — CURRENT `Průmyslové zboží • Průmyslové zboží`, NEW `Průmyslové zboží • Průmyslový výrobek` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-inhaltslos-1165` / `csText` — CURRENT `Prázdný • Bezvýznamný`, NEW `Obsahově prázdný • Bezobsažný` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Inland-1166` / `csText` — CURRENT `Domácí • Vnitrozemí`, NEW `Tuzemsko • Vnitrozemí` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Innenminister-1167` / `csText` — CURRENT `Ministr vnitra • Ministr vnitra`, NEW `Ministr vnitra • Šéf resortu vnitra` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Insektenvertilgungsmittel-1169` / `csText` — CURRENT `Hubič hmyzu`, NEW `Prostředek na hubení hmyzu • Insekticid` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Intensivhaltung-1171` / `csText` — CURRENT `Intenzivní chov hospodářských zvířat`, NEW `Intenzivní chov zvířat` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-internieren-1173` / `csText` — CURRENT `Internovat • Internovat`, NEW `Internovat • Držet v internaci` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Intrige-1176` / `csText` — CURRENT `Intriky • Intriky`, NEW `Intrika • Pleticha` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Irrtum-1178` / `csText` — CURRENT `Chyba • Chyba • Mylná představa`, NEW `Omyl • Chyba • Mylná představa` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Jauche-1180` / `csText` — CURRENT `Močůvka • Močůvka`, NEW `Kejda • Močůvka` (cs-b2-repair-group24-cards-1151-1200_7f79.md)
- `b2-Joch-1181` / `csText` — CURRENT `Jho • Jho`, NEW `Jho • Jařmo` (cs-b2-repair-group24-cards-1151-1200_7f79.md)

_Generated: 2026-08-15T08:25:35.003Z_