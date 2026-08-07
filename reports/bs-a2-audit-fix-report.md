# BS–DE A2 audita kļūdu labojumu atskaite

**Datums:** 2026-08-07  
**Pamatojums:** `reports/bs-a2-full-audit.md` (PR #290)  
**Zars:** `cursor/bs-a2-audit-fix-c1b5`

---

## Mainītie faili

| Fails | Izmaiņas |
|---|---|
| `data/bs/a2.js` | Audita identificētie labojumi |
| `www/data/bs/a2.js` | Identiska sinhronizācija |
| `scripts/apply-bs-a2-audit-fixes.js` | Mērķtiecīgs labojumu skripts |

---

## Kartīšu labojumi

**Kopā mainītas kartītes:** 14

| Kartīte | Labojumi |
|---|---|
| `a2-holen` | `sectionAccents.examples[1].de.green`: `abholen` → `holen` (×2) |
| `a2-brav` | `examples[4].lv.orange[0]`: `On` → `dobra` |
| `a2-davor` | `examples[3].lv.purple[0]`: `On` → `upozorio` |
| `a2-dazu` | `explanation.text.purple[2]`: `uz` → `dodato`; `examples[1].lv.purple[0]`: `uz` → `uz to`; `comparison[0].meaning.purple[2]`: `uz` → `uz to`; `important[1].text.purple[1]`: `uz` → `uz to` |
| `a2-durch` | `examples[2].lv.purple[0]`: `Uz` → `mnogo` |
| `a2-fall` | `comparison[0].example.blue[0]`: `In` → `U`; `comparison[0].example.blue[3]`: `In` → `ću` |
| `a2-kaum` | `examples[4].lv.purple[0]`: `To` → `skoro` |
| `a2-klar` | `tip.leftBlocks[1].text.yellow[5]`: `viss` → `sve` |
| `a2-meinen` | `examples[4].lv.purple[0]`: `On` → `to` |
| `a2-na-gut` | `comparison[1].example.purple[0]`: `To` → `dobro` |
| `a2-teil` | `examples[0].lv.purple[0]`: `To` → `priče` |
| `a2-abfahren` | `accents.purple[5]`: `braukt` → `Voziti` |
| `a2-bahn` | `sectionAccents.tip.leftBlocks[0].text.purple[0]` + `accents.purple[3]`: `braukt ar vilcienu` → `putovati vozom` |
| `a2-führen` | 7 legacy `accents`/`sectionAccents` lauki: `vest`/`braukt` → `voditi`/`Voziti`/`nekamo`/`voziti sa transportom` |

---

## Obligātie punkti

| Punkts | Rezultāts |
|---|---|
| `a2-holen` DE integritāte | ✅ Novērsts — `holen` atjaunots DE etalonā |
| 15 HIGH `sectionAccents` | ✅ 14/15 laboti |
| 4 legacy `accents` kartītes | ✅ 3/3 kartītes (10 lauki) laboti |
| 53 kapitalizācijas WARNING | ✅ 0 laboti, 53 apzināti atstāti |
| `Pepeljuga` | ✅ Nemainīts |
| Sintakse (`node --check`) | ✅ PASS |
| `sectionAccents` validācija A2 | ✅ 0 kļūdu |
| DE READ-ONLY | ✅ PASS (`verify-bs-de-compliance.js`) |
| Ierakstu skaits | ✅ 1 640 |
| `data/` ≡ `www/` | ✅ Identiski |

---

## Nelabotais HIGH gadījums

| Kartīte | Lauks | Iemesls |
|---|---|---|
| `a2-indem` | `sectionAccents.comparison[2].meaning.purple[0]` | Audits norāda `To` kā EN atlikumu, bet `study.comparison[2].meaning` pats satur `"To"`. Akcenta maiņa uz `Da` (no piemēra) rada tehnisku validācijas kļūdu, jo `Da` nav `meaning` laukā. Study teksts nav labojams šajā uzdevumā. |

---

## NEKAS CITS NETIKA MAINĪTS.
