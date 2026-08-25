# ES–DE A1+A2 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-25
**Auditors:** Cloud Agent (deterministisks)
**Standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Apjoms:** `data/es/a1.js`, `data/es/a2.js` (+ `www/data/es/` mirror)
**ORIGIN_MAIN_SHA:** `1be24b708f9396fbb3c5b4785e1d0d6b5637bf48`
**Production izmaiņas:** **0**

## 1. Kopsavilkums

| Metrika | A1 | A2 | Kopā |
|---------|----|----|------|
| Kartītes | **702/702** | **1640/1640** | **2342** |
| Study objekti (LV / ES) | **134 / 124** | **231 / 231** | **365 / 355** |
| Trūkstošie Study | **10** | **0** | **10** |
| Kartītes ar LV atlikumiem | **24** | **147** | **171** |
| `sectionAccents` neatbilstības | **45** | **581** | **626** |
| `minimalStudy` bez satura | **0** | **18** | **18** |
| Luna coverage | **skipped** | — | — |
| Luna validētie atradumi | **0** | — | — |

## **Verdict: NEEDS_REPAIR**

> **Luna (GPT-5.6) nav palaists** (`--skip-luna` vai nav `OPENAI_API_KEY`). Šis ziņojums satur deterministisko slāni. Lai pabeigtu pilnu auditu ar Luna: `node scripts/run-es-a1-a2-full-audit.js --fresh-luna`.

## 2. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Syntax A1/A2 | PASS |
| Mirror A1/A2 | PASS |
| Mojibake | PASS |
| Parity | FAIL |
| validate-study-design | FAIL |
| DE read-only (top-level) | FAIL |
| Luna lingvistiskais | SKIPPED |

## 3. A1 CRITICAL — trūkstošie Study (10)

| DE | Study ID |
|----|----------|
| Besuch | `a1-besuch` |
| besuchen | `a1-besuchen` |
| Fußball | `a1-fussball-study` |
| ganz | `a1-ganz-study` |
| gefallen | `a1-gefallen-study` |
| Geschichte | `a1-geschichte-study` |
| Geschwister | `a1-geschwister-study` |
| Großeltern | `a1-grosseltern-study` |
| Hand | `a1-hand-study` |
| hübsch | `a1-huebsch` |

## 5. Deterministiskie atradumi (kopsavilkums)

Pilns deterministiskais JSON: `reports/temp/es-de-a1-a2-audit-data.json`

- A1: 10 trūkstošie Study, 24 kartītes ar LV atlikumiem, 6 DE Study neatbilstības
- A2: 147 kartītes ar LV atlikumiem `comparison[].example`, 18 tukšas `minimalStudy`

## 6. Audita metodoloģija

| Rīks | Komanda |
|------|---------|
| Kolektors | `node scripts/audit-es-a1-a2-collect.js` |
| Luna | `node scripts/audit-es-a1-a2-linguistic.js [--test-batch] [--resume]` |
| Orķestrators | `node scripts/run-es-a1-a2-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]` |
| Paritāte | `node scripts/audit-language-parity.js --lang=es` |
| Study dizains | `node scripts/validate-study-design.js --lang=es` |
