# ES–DE Kurss Lessons — Luna coverage proof

**Generated:** 2026-08-27  
**Standard:** MASTER v1.9 §7.8 (FIRST_FULL_DISCOVERY)

## Executive summary

| Audit run | Fields sent to Luna | Explicit Luna response | Synthetic/auto PASS | Proof valid? |
|-----------|--------------------:|-----------------------:|--------------------:|:------------:|
| **v1** (PR #676 initial) | 2951 | 790 (findings only) | **2161** | **NO** |
| **v2** (explicit enumeration) | 2951 | *in progress* | **0** (enforced) | *pending* |

**v1 nav derīgs pierādījums.** Parser `parseLunaResponse()` automātiski piešķīra `status: PASS` visiem cardId, ko Luna atbilde neietvēra. Tas **nav** lingvistiska izvērtēšana — tikai inference “nav finding = OK”.

## v1 — kāpēc neiztur pārbaudi

Katram no 60 batch failiem Luna API saņēma visus laukus JSON payloadā (2951 kopā), bet atgrieza tikai **findings** masīvu — ne obligātu PASS katram laukam.

Piemērs `batch-001` (50 lauki):

| Luna atgrieza | Skaitlis | Avots |
|---------------|--------:|-------|
| Explicit FINDING | 19 | Luna API response |
| Synthetic PASS | 31 | `openai-es-kurss-lessons-audit.js` parser fallback |

Kopā v1: **790** explicit + **2161** synthetic = 2951.

Deterministiskais slānis (331 findings) ir **atsevišķs** — tas neaizstāj Luna per-field PASS.

## v2 — labojums un pierādījuma kritēriji

### Koda izmaiņas

1. Luna prompt: **obligāta** `items[]` ar tieši N ierakstiem (viens per cardId).
2. Parser: **neļauj** synthetic PASS (`allowSyntheticPass` default `false`).
3. Katram batch saglabā `batch-NNN-results.json` ar **visiem** `results[]` (PASS + FINDING).
4. `scripts/verify-es-kurss-lessons-luna-coverage.js` — automātiska pārbaude.

### Probe rezultāti (pirms pilna skrējiena)

| Probe | Input | Explicit PASS | Explicit FINDING | Synthetic | Result |
|-------|------:|--------------:|-----------------:|----------:|:------:|
| 10-field test | 10 | 9 | 1 | 0 | PASS |
| 40-field probe | 40 | 26 | 14 | 0 | PASS |

### Pilns v2 skrējiens

- **Dir:** `reports/temp/es-kurss-lessons-full-audit-luna-v2/`
- **Batch size:** 40 fields
- **Batches:** 74
- **Log:** `reports/temp/es-kurss-lessons-full-audit-luna-v2-run.log`

Pārbaudīt pēc pabeigšanas:

```bash
node scripts/verify-es-kurss-lessons-luna-coverage.js --luna-dir=reports/temp/es-kurss-lessons-full-audit-luna-v2
```

Gaidāmais verdict: `PASS — 2951/2951 fields have explicit Luna status (no synthetic PASS)`.

## OWNER lēmumi

OWNER lēmumi sagatavoti uz **v1 audit findings** (919 ieraksti), jo tie satur deterministisko + Luna finding slāni:

- **Linguistic track:** `reports/es-kurss-lessons-owner-decisions.md` (898 findings)
- **Technical track:** `reports/es-kurss-lessons-owner-decisions-technical.md` (21 legacy HTML drift — **nav** tulkojumu LABOT)
- **Full view:** `reports/es-kurss-lessons-owner-decisions-filled-view.md`
- **Machine JSON:** `reports/es-kurss-lessons-owner-decisions-filled.json`

> **Piezīme:** 90 LABOT ierakstu ir LV prozas atlikumi, kam vajag manuālu Spanish NEW pirms apply — sk. `labotMissingNew` kopsavilkumā.
