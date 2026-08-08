# BS–DE B1 — FINAL – OWNER ACCEPTED ✅

# BS–DE B1 Final Medium Targeted Report
**Date:** 2026-08-08
**Owner acceptance:** 2026-08-08
**Branch:** `cursor/bs-b1-final-medium-targeted-c1b5`
**Owner fixes PR:** #307 (`cursor/bs-b1-owner-manual-fixes-c1b5`)
**Model:** gpt-5.6-luna
---
## Initial scope
| Kategorija | Skaits |
|---|---:|
| Regression MEDIUM | 58 |
| STALE_AFTER_FIX | 0 |
| STALE_PATH | 8 |
| DUPLICATE | 0 |
| Luna audit candidates | 50 |
| Unique cards | 46 |
---
## Luna verdicts
| Verdict | Skaits |
|---|---:|
| FIX | 28 |
| KEEP | 1 |
| STYLE_ONLY | 0 |
| SOURCE_LV_ISSUE | 2 |
| DE_READ_ONLY | 0 |
| NEEDS_REVIEW | 19 |
---
## Applied fixes
| Metric | Count |
|---|---:|
| FIX verdicts | 28 |
| Applied | 27 |
| Skipped | 1 |
| Main translations | 2 |
| Study fields | 25 |
| Study cards changed | 24 |
### Regression fixes (local, $0)
7 findings from first final regression (1 HIGH + 6 MEDIUM) fixed locally:
`b1-einführen`, `b1-folge`, `b1-lösen`, `b1-verhältnis`, `b1-verletzen`, `b1-weder`
### NEEDS_REVIEW (not auto-fixed)
- `b1-antrag` | study.examples[0].lv | Nedostaje njemačka rečenica; nije sigurno treba li mijenjati glagolsko vrijeme.
- `b1-aufwand` | study.examples[1] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-aussicht` | study.examples[0] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-becken` | study.examples[1] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-bedeutend` | study.examples[1] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-sich-bedienen` | study.examples[1] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-sich-bemühen` | study.examples[0] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-dank-study` | study.examples[1] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-einfallen` | study.examples[1] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- `b1-einsatz` | study.examples[2] | Tekst je prikazan kao [object Object], pa se prevod ne može procijeniti.
- … and 9 more
### SOURCE/LV ISSUES
- `b1-beschwerde` | study.comparison[1].meaning | Bosanski prijevod odgovara značenju Beschwerde; problem je latvijski izvor.
- `b1-dank-study` | study.comparison[4].meaning | „Zahvala“ pravilno prevodi imenicu Dank; latvijski izvor navodi glagol.
---
## Final regression
| Metric | Value |
|---|---:|
| First regression scope | 26 cards |
| First regression findings | 7 (1 HIGH, 6 MEDIUM) |
| Local regression fixes | 7 |
| Verify regression scope | 6 cards |
| Verify findings | **0** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
---
## API usage
| Metric | Value |
|---|---:|
| Model | gpt-5.6-luna |
| Luna review requests | 7 |
| Luna review tokens | 13907 |
| Final regression requests | 1 |
| Final regression tokens | 6678 |
| Verify regression tokens | 6678 |
**cost not reliably calculated**
---
## Validation
| Check | Result |
|---|---|
| JavaScript syntax | **PASS** |
| UTF-8 / mojibake | **PASS** |
| Entries 3367 / study 324 | **PASS** |
| DE READ-ONLY | **PASS** |
| data ≡ www | **PASS** |
| sectionAccents TECHNICAL | **0** |
| LV/EN remnants | **0** |
| Data hash | `1b6463c97ad10e8d4310015c6672d5fa` |
---
## Final status
| Statuss | Rezultāts |
|---|---|
| CRITICAL/HIGH CYCLE | **CLOSED** |
| B1 MEDIUM QUALITY CYCLE | **CLOSED** |
| FINAL TARGETED REGRESSION | **PASS** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| DE READ-ONLY | **PASS** |
| STRUCTURAL PASS | **PASS** |
| FINAL – OWNER ACCEPTED | **YES** |

### Historical audit trail (preserved)
| Statuss | Rezultāts |
|---|---|
| FINAL 58 MEDIUM REVIEWED | **PASS** |
| CONFIRMED FIX APPLIED | **PASS** |
| SOURCE/LV ISSUES (Luna review) | **2** |
| NEEDS_REVIEW (Luna review) | **19** |
| sectionAccents TECHNICAL | **PASS** |
| sectionAccents LANGUAGE | **PASS** |

### Owner acceptance note
Pēc automātiskā kvalitātes cikla projekta īpašnieks manuāli izvērtēja atlikušo review scope (`reports/bs-b1-owner-manual-review.md`). PR **#307** piemēroja **17/17** apstiprinātos labojumus. Trīs gadījumi apzināti atstāti bez izmaiņām: `b1-antrag`, `b1-lösen`, `b1-einfallen`. `b1-einfallen` klasificēts kā false positive.

**BS–DE B1 ir noslēgts ar statusu: FINAL – OWNER ACCEPTED.**

### Post-acceptance regression policy
Pēc FINAL – OWNER ACCEPTED B1 netiek automātiski atvērts jaunam kvalitātes ciklam. Nākotnes izmaiņās pārbaudīt tikai konkrēti mainītās kartītes un to tiešo regression scope. Pilnu B1 auditu atkārtot tikai ar projekta īpašnieka atsevišķu norādījumu.