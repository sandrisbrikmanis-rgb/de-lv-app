# BS–DE C2 TARGETED REGRESSION AUDIT

**Date:** 2026-08-08
**Model:** gpt-5.6-luna
**Mode:** AUDIT ONLY — no data files modified

```text
Targeted cards: 34
Reviewed: 34 / 34
Data modifications: NONE

CRITICAL: 0
HIGH: 1
MEDIUM: 0
LOW: 1
SOURCE ISSUES: 0
INFORMATIONAL: 0
PASS: 32 / 34

Unvoreingenommenheit: UNCHANGED
```

## Automatic checks

| Check | Result |
|---|---|
| Structural parity | PASS |
| DE READ-ONLY | PASS |
| JavaScript syntax | PASS |
| Mojibake | PASS (0 hits) |
| data/bs/c2.js ≡ www/data/bs/c2.js | PASS |
| audit-language-parity.js --lang=bs | PASS |
| validate-study-design.js --lang=bs | PASS (C2 unchanged) |
| verify-bs-de-compliance.js | PASS |
| audit-mojibake.js --lang=bs | PASS |
| audit-translations.js --lang=bs | PASS (no C2 issues) |
| audit-study-cards.js --lang=bs | WARNING → INFORMATIONAL (LV etalon) |

## 34-CARD VERIFICATION TABLE

| # | Card ID | German | Current BS | Verdict |
|---:|---|---|---|---|
| 1 | c2-geschenkpackung-39 | Geschenkpackung | Poklon-pakovanje | PASS |
| 2 | c2-krankenversicherung-47 | Krankenversicherung | Zdravstveno osiguranje | PASS |
| 3 | c2-stra-enunterf-hrung-67 | Straßenunterführung | Cestovni podvožnjak | PASS |
| 4 | c2-bereitschaftsdienst-101 | Bereitschaftsdienst | Dežurna služba | PASS |
| 5 | c2-geschwindigkeits-berschreitung-149 | Geschwindigkeitsüberschreitung | Prekoračenje brzine | PASS |
| 6 | c2-hausgemeinschaft-161 | Hausgemeinschaft | Zajednica stanara | PASS |
| 7 | c2-lebenshaltungskosten-171 | Lebenshaltungskosten | Troškovi života | PASS |
| 8 | c2-meisterschaftsspiel-177 | Meisterschaftsspiel | Prvenstvena utakmica | PASS |
| 9 | c2-abgeordnetenhaus-78 | Abgeordnetenhaus | Predstavnički dom | PASS |
| 10 | c2-ausbildungsbeihilfe-84 | Ausbildungsbeihilfe | Naknada za stručno osposobljavanje | PASS |
| 11 | c2-behandlungsraum-16 | Behandlungsraum | Prostorija za liječenje | PASS |
| 12 | c2-berufsbezeichnung-87 | Berufsbezeichnung | Naziv zanimanja | PASS |
| 13 | c2-beschwerdeschrift-191 | Beschwerdeschrift | Pisana žalba | PASS |
| 14 | c2-dorfgemeinschaft-136 | Dorfgemeinschaft | Seoska zajednica | PASS |
| 15 | c2-durchkreuzen-103 | durchkreuzen | Precrtati • Prekrižiti • Preći • Osujetiti | PASS |
| 16 | c2-durchschnittsleistung-106 | Durchschnittsleistung | Prosječan učinak | FINDING (LOW) |
| 17 | c2-empfehlungsschreiben-110 | Empfehlungsschreiben | Preporučno pismo | PASS |
| 18 | c2-entschlossenheit-113 | Entschlossenheit | Odlučnost • Odlučnost • Nepokolebljivost | PASS |
| 19 | c2-errungenschaft-117 | Errungenschaft | Postignuće | PASS |
| 20 | c2-ged-chtnisst-rung-127 | Gedächtnisstörung | Poremećaj pamćenja | PASS |
| 21 | c2-geistesgegenwart-131 | Geistesgegenwart | Prisebnost | PASS |
| 22 | c2-gep-ckaufbewahrung-35 | Gepäckaufbewahrung | Prostor za čuvanje prtljage | PASS |
| 23 | c2-gerechtigkeitsgef-hl-141 | Gerechtigkeitsgefühl | Osjećaj za pravdu | PASS |
| 24 | c2-gesellschaftlich-150 | gesellschaftlich | Društveni | PASS |
| 25 | c2-gewinnauszahlung-156 | Gewinnauszahlung | Isplata dobitka | PASS |
| 26 | c2-konterkarieren-1 | konterkarieren | Osujetiti | PASS |
| 27 | c2-preisausschreiben-187 | Preisausschreiben | Nagradni konkurs | PASS |
| 28 | c2-satelliten-bertragung-189 | Satellitenübertragung | Satelitski prijenos | PASS |
| 29 | c2-scheidungsprozess-190 | Scheidungsprozess | Brakorazvodni postupak | PASS |
| 30 | c2-schlafwagenzimmer-58 | Schlafwagenzimmer | Kabina u spavaćem vagonu | PASS |
| 31 | c2-schlittschuhkufe-59 | Schlittschuhkufe | Klizna krama | FINDING (HIGH) |
| 32 | c2-selbstverteidigung-195 | Selbstverteidigung | Samoodbrana | PASS |
| 33 | c2-fallschirmspringen-119 | Fallschirmspringen | Padobranstvo | PASS |
| 34 | c2-vaterschaftsklage-200 | Vaterschaftsklage | Tužba za utvrđivanje očinstva | PASS |

## FINDINGS

### LOW — c2-durchschnittsleistung-106

**Severity:** LOW
**Card ID:** c2-durchschnittsleistung-106
**German:** Durchschnittsleistung
**Current BS:** Prosječan učinak
**Recommended BS:** Prosječni učinak
**Reason:** Definite adjective better expresses the statistical sense 'average performance'; 'prosječan' can imply merely mediocre performance.

### HIGH — c2-schlittschuhkufe-59

**Severity:** HIGH
**Card ID:** c2-schlittschuhkufe-59
**German:** Schlittschuhkufe
**Current BS:** Klizna krama
**Recommended BS:** Oštrica klizaljke
**Reason:** Current BS is nonsensical; Schlittschuhkufe means the blade of an ice skate.

## Status

**BS–DE C2 TARGETED REGRESSION: NOT CLOSED**

Findings: 2. Next repair cycle required.


## API usage

| Metric | Value |
|---|---:|
| Model | `gpt-5.6-luna` |
| Requests | 2 |
| Total tokens | 5722 |
