# BS–DE B2 — regression fix apply integrity check

**Datums:** 2026-08-08  
**Mode:** $0 integrity check only — **no data changes**

---

## Executive summary

| Question | Answer |
|---|---|
| **A. Cik BS patch reāli tika piemēroti?** | **67** |
| **B. Vai 6 SOURCE_PENDING tika mainīti?** | **NO** |
| **C. Vai sectionAccents faktiski tika mainīti?** | **YES** — cards = **6**, fragments removed = **6** |

**Status:** `READY FOR BS–DE B2 VERIFY REGRESSION`

---

## 1. Neatbilstība Nr. 1 — APPLIED skaits

### Faktiskais stāvoklis (`apply-log.json`)

| applyStatus | Count | Datu maiņa |
|---|---:|---|
| APPLIED | 67 | YES — BS patch piemērots |
| SOURCE_PENDING | 6 | NO — nelabots |
| ALREADY_FIXED | 0 | — |
| STALE_CURRENT_TEXT | 0 | — |
| PATCH_CONFLICT | 0 | — |
| NOT_FOUND | 0 | — |
| **Log ieraksti kopā** | **73** | — |

### Regression avota sadalījums

| Avots | Count | Loma |
|---|---:|---|
| `qualityFindings` (verdict=FIX) | 67 | BS patch manifest — visi piemēroti |
| `otherVerdicts` (SOURCE_LV_ISSUE) | 6 | SOURCE_PENDING — nav piemēroti |
| **Kopā regression output** | **73** | — |

### Skaidrojums

- **APPLIED = 67** ir pareizi: tie ir 67 reāli piemērotie BS patch no `qualityFindings`.
- **SOURCE_PENDING = 6** ir **atsevišķi** ieraksti no `otherVerdicts`, nevis no 67 skaita atņemti.
- **67 − 6 = 61** nav pareiza formula — 6 SOURCE_LV_ISSUE nav iekļauti 67 FIX findings.
- `reports/bs-b2-regression-fixes-apply-report.md` norāda `actual BS patch candidates = 67` — **korekti**.
- Iepriekšējā gala atbildē minētais **61** bija kļūdains kopsavilkums; oficiālajā reportā ir **67**.

### post-apply verify = 67/67

`postApplyVerify` pārbauda **tikai** ierakstus ar `applyStatus = APPLIED` (67), ne SOURCE_PENDING (6). Tas ir konsekvents.

### 67 patch → 42 unikālas kartītes

17 kartītēm ir vairāki patch (piem., `study.rektion` + `study.forms` + `study.explanation`). Kopā: 67 patch / 42 unique cardId.

---

## 2. SOURCE_PENDING — 6 kartītes

| cardId | applyStatus | DATA CHANGED |
|---|---|---|
| `b2-bewähren-229` | SOURCE_PENDING | **NO** |
| `b2-bezähmen-237` | SOURCE_PENDING | **NO** |
| `b2-Buche-305` | SOURCE_PENDING | **NO** |
| `b2-einflussreich-541` | SOURCE_PENDING | **NO** |
| `b2-erbrechen-664` | SOURCE_PENDING | **NO** |
| `b2-Falke-755` | SOURCE_PENDING | **NO** |

**SOURCE_PENDING changed count = 0**

---

## 3. Neatbilstība Nr. 2 — sectionAccents

### Git diff analīze (commit `ff9bc70b` — regression fixes apply)

Salīdzinājums `HEAD~1` → `HEAD` (`data/bs/b2.js`):

| Metrika | Vērtība |
|---|---:|
| sectionAccents modified cards | **6** |
| sectionAccents fragments removed | **6** |
| sectionAccents fragments added/changed | **0** |
| sectionAccents TECHNICAL | **0** |

### Modificētās kartītes

Visas 6 kartītes zaudēja `sectionAccents.explanation.red` fragmentu (stale prievārdu jautājumi), jo regression patch mainīja `study.forms` / `study.rektion`:

1. `b2-sich-erniedrigen` — removed `red: ["vor + kam?"]`
2. `b2-sich-erregen` — removed `red: ["über + ko?"]`
3. `b2-sich-genieren` — removed `red: ["vor + kam?"]`
4. `b2-sich-gesellen` — removed `red: ["zu + kam?"]`
5. `b2-sich-gestalten` — removed `red: ["zu + kam?"]`
6. `b2-sich-grauen` — removed `red: ["vor + kam?"]`

### Kāpēc atskaitē bija `sectionAccents updates = 0`

`fix-bs-b2-section-accents.js` izvade regression apply laikā ziņoja `cardsChanged: 0`, bet `dropped: 6`. Skripta `cardsChanged` skaitītājs neuzskaita tikai fragmentu dzēšanu (drop) kā kartītes izmaiņu, lai gan Git diff faktiski rāda 6 `sectionAccents` JSON izmaiņas.

**Secinājums:** `sectionAccents updates = 0` iepriekšējā gala atbildē bija **neprecīzi**. Faktiski: **6 kartītes, 6 noņemti fragmenti**.

---

## 4. Verify scope integritāte

Fails: `reports/temp/bs-b2-regression-fix-verify-scope.json`

| Pārbaude | Rezultāts |
|---|---|
| Expected cards | 42 |
| Unique IDs | 42 |
| All IDs exist in B2 | YES |
| Duplicate IDs | 0 |
| Matches all APPLIED unique cardIds | YES |
| Includes 6 sectionAccents-modified cards | YES (visas 6 jau ir scope) |

**verify scope valid: YES**

---

## 5. Git diff kontrole (commit `ff9bc70b`)

### BS data changes

| Fails | Mainīts |
|---|---|
| `data/bs/b2.js` | **YES** |
| `www/data/bs/b2.js` | **YES** |

### SOURCE_PENDING data changes

**count = 0**

### sectionAccents changes

| Metrika | Vērtība |
|---|---:|
| cards | 6 |
| fragments removed | 6 |
| fragments added/changed | 0 |

### Unexpected production-file changes

**count = 0** (tikai atļautie: data, www, reports, scripts)

---

## 6. Tehniskā validācija (lokāla, šī pārbaude)

| Check | Result |
|---|---|
| syntax | PASS |
| card count | 2118 |
| study count | 60 |
| DE READ-ONLY | PASS |
| data ≡ www | PASS |
| sectionAccents TECHNICAL | 0 |

---

## 7. Verify regression readiness

```
READY FOR BS–DE B2 VERIFY REGRESSION
```

Integrity mismatch nav bloķējošs. Vienīgās konstatētās neatbilstības ir **reportēšanas precizitāte** (ne datu kļūdas):

1. Iepriekšējā gala atbildē kļūdaini minēts `61` patch candidates — faktiski **67**.
2. Iepriekšējā gala atbildē kļūdaini minēts `sectionAccents updates = 0` — faktiski **6 cards / 6 fragments removed**.

Dati, apply-log un verify scope ir konsekventi. Verify regression var sākt uz `reports/temp/bs-b2-regression-fix-verify-scope.json` (42 kartītes).
