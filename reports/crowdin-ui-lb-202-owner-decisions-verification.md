# Crowdin UI — lb 202 OWNER decisions verification

**Generated:** 2026-08-28T14:08:03.999Z  
**Reviewer:** GPT-5.6-Luna (linguistic + technical READ-ONLY)  
**Authority JSON SHA:** `1519d302133237fe00b536783ad907ba24fb4f7d`  
**Authority CSV SHA:** `7b82f11da49798e599d37fd8e42fa96a0725f9eb`  
**Režīms:** READ-ONLY — nav production/Crowdin apply

## Rezultāts

**PASS**

## Tehniskā pārbaude

| Metrika | Vērtība |
|---|---:|
| REQUESTED | 202 |
| REVIEWED | 202 |
| DUPLICATE_KEYS | 0 |
| MISSING_KEYS | 0 |
| CURRENT_MISMATCH | 0 |
| PLACEHOLDER_ERRORS | 0 |
| HTML_ERRORS | 0 |
| JSON_CSV_MISMATCH | 0 |
| EMPTY_NEW_VALUE | 0 |
| PRODUCTION_WOULD_CHANGE | 202 |
| TECHNICAL_PASS | YES |

## Lingvistiskā pārbaude

| Metrika | Vērtība |
|---|---:|
| FLAGGED_ROWS | 0 |
| LINGUISTIC_PASS | YES |

### Metodika

- LV diakritiku un latviešu UI leksēmu meklēšana `newValue` tekstā
- `newValue` identiskums ar `current`/`lvSource` (netulkots)
- Placeholder/HTML salīdzinājums ar avotu (tehniski)
- Nav automātiska tulkojuma ģenerēšanas — tikai OWNER decisions audits

## Nākamais solis

Tikai ja `result` ir PASS: COPY-ONLY apply uz `crowdin/ui/lb.json`, `languages/lb/ui.js` un Crowdin (`lb`).

