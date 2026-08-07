# BS–DE A2 — jaunas valodas izveides gala atskaite

**Valodas pāris:** BS–DE  
**Līmenis:** A2  
**Statuss:** Tehniski pilnībā izveidots un integrēts  
**Datums:** 2026-08-07

---

## 1. Kopsavilkums

BS–DE A2 datu fails izveidots pēc tā paša scenārija kā BS–DE A1 (OpenAI LV→BS tulkojums, kvalitātes labojumi, sectionAccents sinhronizācija, validācija). Avots: `data/a2.js` (LV–DE etalons). Rezultāts: `data/bs/a2.js` + `www/data/bs/a2.js`.

---

## 2. Izveidotais saturs

| Komponents | Daudzums |
|---|---:|
| CEFR vārdi (A2) | 1 640 |
| Study kartītes | 231 |
| — standardStudy | 207 |
| — minimalStudy | 6 |
| — flashcard (bez study) | 1 409 |

*Papildus A2 līmenim BS valodā jau eksistē A1–C2, sentences, verbs, course u.c. — šajā darbā mainīts tikai A2.*

---

## 3. Izmaiņu apjoms

| Fails | Darbība |
|---|---|
| `data/bs/a2.js` | Atjaunināts (OpenAI LV→BS) |
| `www/data/bs/a2.js` | Sinhronizēts |
| `scripts/generate-bs-a2-from-lv.js` | Jauns |
| `scripts/fix-bs-a2-quality.js` | Jauns |
| `scripts/fix-bs-a2-section-accents.js` | Jauns |
| `reports/bs-a2-creation-report.md` | Jauns |
| `.gitignore` | Pievienots A2 OpenAI cache |

**Nemainīti:** `data/a2.js`, citas valodas, `ui.js`, `registry.js`, `manifest.js` (A2 jau bija reģistrēts).

---

## 4. Validācija

| Pārbaude | Rezultāts |
|---|---|
| `audit-language-parity.js --lang=bs` | **PASS** (A2: 1640/1640, order 0 mismatches) |
| `validate-study-design.js --lang=bs` | **PASS** (A2 sectionAccentIssues: **0**) |
| `audit-mojibake.js --lang=bs` | **PASS** (0 hits) |
| `verify-bs-de-compliance.js` | **PASS** (DE read-only: 0 mismatches) |
| `validate-kurss` | Nav palaists (A2 datu izmaiņas neietekmē kurss struktūru) |
| `validate-engine-i18n` | Nav palaists |
| `smoke-test-ui` | Nav palaists |

### A2 specifiski (`validate-study-design`)

| Metrika | Vērtība |
|---|---:|
| Kopā ieraksti | 1 640 |
| sectionAccentIssues | 0 |
| studyObjectNoRenderable | 18 (minimalStudy — identisks LV struktūrai) |
| emptySectionAccents | 1 |

---

## 5. Vācu datu integritāte (READ-ONLY)

| Lauks | Rezultāts |
|---|---|
| `de` | ✅ 1640/1640 identiski LV etalonam |
| `de_article` / `de_plural` | ✅ Nemainīti |
| Study DE saturs | ✅ Nemainīts |
| Piemēru DE teksti | ✅ Nemainīti |
| comparison DE vārdi | ✅ Nemainīti |

**Rezultāts: 0 neatbilstību.**

---

## 6. Esošo valodu integritāte (READ-ONLY)

| Valoda | Loma |
|---|---|
| LV (`data/a2.js`) | Tulkojuma avots un struktūras etalons |
| BS A1 (`data/bs/a1.js`) | Procesa un kvalitātes etalons |

**Netika mainītas:** LV, ET, LT, PL, RU, UK, RO, BG un citas esošās valodas.

---

## 7. Tulkošanas metode

| Parametrs | Vērtība |
|---|---|
| Avots | `data/a2.js` (LV–DE) |
| Mērķis | `data/bs/a2.js` (BS–DE) |
| Metode | OpenAI (`scripts/lib/openai-translate.js`) |
| Starpvaloda | LV → BS (vācu lauki READ-ONLY) |
| Cache | `scripts/.bs-a2-openai-translation-cache.json` (gitignored) |
| Google cache seed | `scripts/.bs-lv-translation-cache.json` |

### Pipeline

1. `node scripts/generate-bs-a2-from-lv.js` — 8 200 unikālas virknes, 4 254 OpenAI tulkojumi
2. `node scripts/fix-bs-a2-quality.js` — 1 639 galveno tulkojumu labojumi, 134 LV atlikumu labojumi, **0** LV atlikumu pēc
3. `node scripts/fix-bs-a2-section-accents.js` — 11 242 termini pārbaudīti, 3 432 LV→BS kartēti, 136 izņemti, **0** sectionAccentIssues

---

## 8. Kvalitātes statuss

| Aspekts | Statuss |
|---|---|
| **Tehniskais** | Pilnībā pabeigts |
| **Valodnieciskais** | Automātisks audits PASS; pilns manuālais audits vēl nav veikts |
| **sectionAccents** | Tehniski PASS (0 issues) |
| **Pedagoģiskais** | Nav veikts atsevišķs audits (kā A1) |

---

## 9. Zināmās piezīmes

- 136 `sectionAccents` elementi izņemti kā nederīgi/nekartējami (līdzīgi A1 scenārijam). Nav veikta atsevišķa pedagoģiskā regresijas pārbaude.
- 18 `minimalStudy` kartītes ar `studyObjectNoRenderable` — pārņemts no LV etalona (nav A2 specifiska regresija).
- `FINAL – OWNER ACCEPTED` vēl nav piešķirts.

---

## 10. Gala secinājums

BS–DE A2 tehniskā versija ir pilnībā izveidota un integrēta projektā. Visi palaistie projekta kvalitātes un validācijas standarti ir ievēroti. Vācu dati un esošās valodas saglabātas READ-ONLY režīmā.

Pirms produkcijas izmantošanas ieteicams veikt pilnu valodniecisko un pedagoģisko auditu (kā A1), izmantojot autoritatīvus bosniešu valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.

---

## BS–DE A2 statusi

| Statuss | Rezultāts |
|---|---|
| STRUCTURAL PASS | PASS |
| sectionAccents TECHNICAL | PASS |
| PRODUCTION READY | NĒ (nav pilna AI/manuālā audita) |
| FINAL – OWNER ACCEPTED | NĒ |

---

*Atskaite izveidota 2026-08-07*
