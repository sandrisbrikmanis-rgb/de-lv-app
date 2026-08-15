# CS–DE B2 REPAIR — GROUP 17

## Scope

- Dataset: `B2`
- Kartītes: `801–850`
- Režīms: OWNER-prepared exact repair mapping
- DE puse: **READ-ONLY**
- Kartītes ārpus `801–850`: **NEAIZTIKT**
- Composer/Cursor: **COPY-ONLY**

## Exact repair mappings

| # | Card ID | Field | CURRENT | NEW | Status |
|---:|---|---|---|---|---|
| 1 | `b2-flimmern-801` | `csText` | `Třpytit se • Třpytit se • Třpytit se • Třpytit se • Třpytit se` | `Blikat • Mihotat se • Třpytit se • Zableskovat se • Chvět se před očima` | LABOT |
| 2 | `b2-Flugfeld-806` | `csText` | `LETIŠTĚ` | `Letiště` | LABOT |
| 3 | `b2-Flunder-809` | `csText` | `Chata` | `Platýs` | LABOT |
| 4 | `b2-Flussarm-811` | `csText` | `Reflux` | `Říční rameno` | LABOT |
| 5 | `b2-Flussbett-812` | `csText` | `Postel` | `Říční koryto` | LABOT |
| 6 | `b2-folgern-813` | `csText` | `Uzavřít` | `Usoudit • Vyvodit závěr` | LABOT |
| 7 | `b2-formell-817` | `csText` | `Správný • Zdvořilý • Formální • Tuhý` | `Korektní • Zdvořilý • Formální • Strnulý` | LABOT |
| 8 | `b2-Förster-819` | `csText` | `Ranger` | `Lesník` | LABOT |
| 9 | `b2-fortschaffen-821` | `csText` | `Obstarat • Odvézt • Odvézt` | `Odpravit • Odvézt • Odnést` | LABOT |
| 10 | `b2-fortschreiten-822` | `csText` | `Dále rozvíjet` | `Dále se rozvíjet • Postupovat` | LABOT |
| 11 | `b2-Fracht-824` | `csText` | `Náklad • Nákladní` | `Náklad • Přepravné` | LABOT |
| 12 | `b2-fraglos-826` | `csText` | `Nezpochybnitelný • Nezpochybnitelný` | `Nepochybný • Nesporný` | LABOT |
| 13 | `b2-Fraktion-827` | `csText` | `Zlomek` | `Frakce` | LABOT |
| 14 | `b2-Fräser-829` | `csText` | `Frézka • Frézka` | `Frézař • Fréza` | LABOT |
| 15 | `b2-freimütig-833` | `csText` | `Upřímný • Upřímný` | `Otevřený • Upřímný` | LABOT |
| 16 | `b2-Fremde-835` | `csText` | `Cizí • Cizinec` | `Cizina • Cizí prostředí` | LABOT |
| 17 | `b2-friedfertig-837` | `csText` | `Mírumilovný • Vyhovující` | `Mírumilovný • Snášenlivý` | LABOT |
| 18 | `b2-fristlos-838` | `csText` | `Neurčitý` | `Bez výpovědní lhůty • Okamžitý` | LABOT |
| 19 | `b2-Fuhre-845` | `csText` | `Kočár • Náklad` | `Povoz • Náklad` | LABOT |
| 20 | `b2-Führernatur-847` | `csText` | `Typ vůdce • Vůdce` | `Vůdčí typ • Vůdčí osobnost` | LABOT |
| 21 | `b2-Funker-849` | `csText` | `Radista • Radista` | `Radiotelegrafista • Radista` | LABOT |
| 22 | `b2-Funkspruch-850` | `csText` | `Gramorádio` | `Radiogram • Rádiová zpráva` | LABOT |

## COPY-ONLY apply noteikumi

1. Katram mapping vispirms pārbaudīt `actual current value === CURRENT`.
2. Tikai exact match gadījumā rakstīt `NEW`.
3. Ja vērtība nesakrīt → `CURRENT_VALUE_MISMATCH` → **SKIP**.
4. DE laukus, ID/order un kartītes ārpus `801–850` nemainīt.
5. Nekādu Composer paša tulkojumu, interpretāciju vai papildu cleanup.
6. Mirror pusē piemērot tikai identisku apstiprināto CS izmaiņu.
7. Composer nedrīkst aizvietot OWNER `NEW` ar savu variantu.

## Validation

- LABOT mappings: `22`
- expected applied: `22/22`
- `CURRENT_VALUE_MISMATCH`: `0`
- DE changes: `0`
- outside-scope production changes: `0`
- syntax: `PASS`
- ID/order: `PASS`
- mirror/parity: `PASS`

## Piezīme

Šis fails attiecas tikai uz B2 kartītēm `801–850`.
Composer tikai piemēro exact mapping un nepieņem lingvistiskus lēmumus.
