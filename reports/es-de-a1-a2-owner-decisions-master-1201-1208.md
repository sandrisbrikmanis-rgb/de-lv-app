# ES–DE A1+A2 OWNER DECISIONS — MASTER 1201–1208

**Findings:** 1201–1208
**OWNER decisions:** 8/8
**DE:** STRICT READ-ONLY
**Production apply:** NAV VEIKTS

> AUTHORITATIVE OWNER MAPPING. Apply tikai `Status: LABOT` rindas ar precīzu `Card ID` + `Field/path` + `CURRENT` exact-match. Mismatch → SKIP. Ierakstīt tieši `NEW`; netulkot, nepārfrāzēt un neimprovizēt.

| # | Finding | Card ID | Field/path | CURRENT | NEW | Status |
|---:|---|---|---|---|---|---|
| 1201 | `ES-A1A2-LUNA-1201` | `a2-leise` | `study.examples[1].lv` | `por favor guarda silencio` | `Por favor, guarda silencio.` | **LABOT** |
| 1202 | `ES-A1A2-LUNA-1202` | `a2-leise` | `study.examples[2].lv` | `la música es tranquila.` | `La música está baja.` | **LABOT** |
| 1203 | `ES-A1A2-LUNA-1203` | `a2-leise` | `study.examples[3].lv` | `por favor habla en voz baja.` | `Por favor, habla en voz baja.` | **LABOT** |
| 1204 | `ES-A1A2-LUNA-1204` | `a2-schon` | `study.examples[0].lv` | `ya estoy en casa` | `Ya estoy en casa.` | **LABOT** |
| 1205 | `ES-A1A2-LUNA-1205` | `a2-nur` | `study.examples[0].lv` | `Man ir tikai desmit eiro.` | `Solo tengo diez euros.` | **LABOT** |
| 1206 | `ES-A1A2-LUNA-1206` | `a2-nur` | `study.examples[1].lv` | `man ir tikai desmit eiro.` | `solo tengo diez euros.` | **LABOT** |
| 1207 | `ES-A1A2-LUNA-1207` | `a2-nur` | `study.examples[3].lv` | `es gribu tikai kafiju.` | `solo quiero café.` | **LABOT** |
| 1208 | `ES-A1A2-LUNA-1208` | `a2-ueber` | `study.translation` | `más de • más de • para` | `más de • encima de • sobre` | **LABOT** |

## APPLY NOTE

- DE lauki ir **STRICT READ-ONLY**.
- Mainīt tikai tabulā norādīto `Field/path`.
- Pirms katras izmaiņas: actual current value === `CURRENT`.
- Ja exact-match nav: **SKIP** tikai konkrēto rindu.
- Pēc ieraksta: actual value === `NEW`.
- Nekāds papildu cleanup, pārfrāzēšana vai blakus lauku labošana nav atļauta.
