# DA–DE B1 — final repair regression audit

**Date:** 2026-08-16
**Mode:** READ-ONLY (production changes = 0 in this audit)
**Branch:** `cursor/da-b1-owner-repair-sectionaccents-misc-fffe`
**HEAD:** `8e9aa2d3a698cf13979a2dc62a5c0f2eb0aedd6f`
**Baseline (pre-repair):** `origin/main` (`6ebf38b471a9bc10962cf246c73d4218033c5370`)
**Production:** `data/da/b1.js` + mirror `www/data/da/b1.js`

## 1. OWNER LABOT exact match

| Metrika | Skaitlis |
|---------|--------:|
| Pārbaudīti | **1632** |
| EXACT_MATCH | **1632** |
| MISMATCH | **0** |
| MISSING_CARD | **0** |
| MISSING_FIELD | **0** |
| UNEXPECTED_VALUE | **0** |
| Exact match rate | **100.00%** |

## 2. Remontā skartās kartītes

| Metrika | Skaitlis |
|---------|--------:|
| Auditētas (mainītas vs baseline) | **314** |
| OWNER unikālās kartītes | **314** |

## 3. Severity kopsavilkums

| Severity | Skaitlis |
|----------|--------:|
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **11** |
| LOW | **0** |
| FALSE_POSITIVE | **0** |
| NEEDS_SOURCE_REVIEW | **0** |

## 4. Kategorijas

| Kategorija | Skaitlis |
|------------|--------:|
| Residual stale sectionAccents | **11** |
| Foreign-language remnants | **0** |
| Placeholders | **0** |
| Unexpected production changes | **0** |
| DE changes | **0** |

## 5. Strukturālās pārbaudes

| Pārbaude | Rezultāts |
|----------|-----------|
| syntax | **PASS** |
| ID/order | **PASS** |
| structure | **PASS** |
| DE READ-ONLY | **PASS** |
| Mirror data ↔ www | **PASS** |
| Cards | **3367/3367** |
| Study | **324/324** |
| Parity (--lang=da, B1) | **PASS** |

## 6. Closure kritērijs

| Nosacījums | Prasība | Faktiski |
|------------|---------|----------|
| OWNER exact match | 100% | **100.00%** |
| MISMATCH | 0 | **0** |
| CRITICAL | 0 | **0** |
| HIGH | 0 | **0** |
| MEDIUM | 0 | **11** |
| LOW | 0 | **0** |
| Residual stale sectionAccents | 0 | **11** |
| Foreign remnants | 0 | **0** |
| Placeholders | 0 | **0** |
| DE changes | 0 | **0** |
| Unexpected changes | 0 | **0** |

### Gala verdict

**DA–DE B1 REPAIR: NOT CLOSED**

## 7. Audita piezīmes

- **OWNER exact match:** visi **1632** LABOT ieraksti (`SET` + `FJERN`) atbilst production vērtībām.
- **Unexpected changes:** pēc path normalizācijas (`.purple.[0]` ↔ `.purple[0]`, `lv` top-level) — **0** ārpus scope.
- **Stale sectionAccents:** 11 atradumi uz remontā skartām kartītēm, kas **nav** OWNER FJERN scope; manuāli validēti pret faktisko Study DA saturu.
- **DE READ-ONLY:** salīdzinājums ar `origin/main` — **0** DE lauku izmaiņu.

## 8. Reālie atlikušie atradumi

### DA-B1-FRR-0001 [MEDIUM]

- **Card ID:** b1-absetzen
- **Field:** sectionAccents.examples[2].lv.purple[0]
- **CURRENT_DA:** minister
- **Problēma:** stale_accent: "minister"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Ministeren blev fjernet fra embedet.)

### DA-B1-FRR-0002 [MEDIUM]

- **Card ID:** b1-bestehen
- **Field:** sectionAccents.examples[0].lv.purple[0]
- **CURRENT_DA:** problem
- **Problēma:** stale_accent: "problem"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Problemet eksisterer stadig.)

### DA-B1-FRR-0003 [MEDIUM]

- **Card ID:** b1-dienen
- **Field:** sectionAccents.important.purple[0]
- **CURRENT_DA:** dienen
- **Problēma:** stale_accent: "dienen"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Dien er ikke sædvanligt at "hjælpe en mand" • At hjælpe er normalt helfen.)

### DA-B1-FRR-0004 [MEDIUM]

- **Card ID:** b1-einführen
- **Field:** sectionAccents.comparison[1].meaning.purple[0]
- **CURRENT_DA:** import
- **Problēma:** stale_accent: "import"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: At importere)

### DA-B1-FRR-0005 [MEDIUM]

- **Card ID:** b1-einhalten
- **Field:** sectionAccents.comparison[2].meaning.purple[0]
- **CURRENT_DA:** Hold
- **Problēma:** stale_accent: "Hold"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Holde/holde sig til)

### DA-B1-FRR-0006 [MEDIUM]

- **Card ID:** b1-festhalten
- **Field:** sectionAccents.comparison[1].meaning.purple[0]
- **CURRENT_DA:** Hold
- **Problēma:** stale_accent: "Hold"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Holde)

### DA-B1-FRR-0007 [MEDIUM]

- **Card ID:** b1-hupe
- **Field:** sectionAccents.explanation.purple[0]
- **CURRENT_DA:** horn
- **Problēma:** stale_accent: "horn"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Hovedidé: die Hupe er et bilhorn eller et skibshorn. Det advarer andre i trafikken. Flertal: die Hupen.)

### DA-B1-FRR-0008 [MEDIUM]

- **Card ID:** b1-hupe
- **Field:** sectionAccents.examples[1].lv.purple[0]
- **CURRENT_DA:** horn
- **Problēma:** stale_accent: "horn"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Bilhornet er knækket.)

### DA-B1-FRR-0009 [MEDIUM]

- **Card ID:** b1-kante
- **Field:** sectionAccents.explanation.purple[0]
- **CURRENT_DA:** facet
- **Problēma:** stale_accent: "facet"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Hovedidé: die Kante er kanten eller facetten af et objekt. Det er ikke en almindelig territorial grænse, men en fysisk skarp eller klar kant.)

### DA-B1-FRR-0010 [MEDIUM]

- **Card ID:** b1-senden
- **Field:** sectionAccents.examples[0].lv.purple[0]
- **CURRENT_DA:** send
- **Problēma:** stale_accent: "send"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Jeg sender dig en besked.)

### DA-B1-FRR-0011 [MEDIUM]

- **Card ID:** b1-übergeben
- **Field:** sectionAccents.examples[0].lv.purple[0]
- **CURRENT_DA:** give
- **Problēma:** stale_accent: "give"
- **Pamatojums:** Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: Jeg giver dig nøglen.)

## 9. Apply map avots

- Faili: **36** decision markdown
- LABOT rindas: **1632**
- JSON: `reports/temp/da-b1-owner-apply-map.json`
