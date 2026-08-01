# SR–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | SR–DE (Srpski → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | #231 |
| **Darba rezultāts** | Pilns srpsku valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

---

## 2. IZVEIDOTAIS SATURS

| Komponents | Daudzums |
|------------|----------|
| CEFR vārdi (A1–C2) | 8 618 |
| Study kartītes | 755 |
| Teikumi | 796 |
| Darbības vārdi | 189 |
| Kurss (lekcijas + treniņa kartītes) | 21 lekcija, 402 treniņa kartītes |
| UI lokalizācija | 306 atslēgas (pilna atbilstība LV etalonam) |

### Jaunie faili

```
data/sr/*
languages/sr/*
www/data/sr/*
www/languages/sr/*
scripts/generate-sr-from-bs.js
scripts/generate-sr-ui.js
scripts/fix-sr-de-fields.js
scripts/fix-sr-highlight-mismatches.js
scripts/verify-sr-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili

- `data/sr/a1.js` … `data/sr/c2.js`
- `data/sr/sentences.js`, `data/sr/verbs.js`
- `data/sr/courseLessons.js`, `data/sr/courseTrainingCards.js`
- `data/sr/dialogueIdMap.js`, `data/sr/nounArticles.js`
- `languages/sr/ui.js`, `languages/sr/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili

- `languages/registry.js` — pievienots SR ieraksts
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — SR pievienots valodu sarakstam
- `languages/data-loader.js` — SR `courseLessons` dinamiskā ielāde
- `www/languages/data-loader.js` — sinhronizēts
- `ui.js` / `www/ui.js` — SR Kurss 1–7 treniņa kartīšu atbalsts

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=sr` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=sr` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=sr` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 14 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=sr` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=sr` | ⚠️ Daļējs — routing PASS; HTTP pārbaude nepatiess pozitīvs (skat. piezīmi) |
| `verify-sr-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

**Piezīme par smoke-test-ui:** HTTP pārbaude meklē `"sr"` apakšvirkni `languages/datasets.js` saturā. Kods `sr` neparādās nevienā vārdā šajā failā (līdzīgi kā `mk`, `sl` un `bs`). Routing loģika darbojas korekti. Tas ir zināms ierobežojums, nevis funkcionāla kļūda.

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (srpsku).**

✅ **Visi vācu dati saglabāti nemainīgi.**

Pārbaudītie lauki:

| Lauks | Rezultāts |
|-------|-----------|
| `de` | 0 neatbilstību |
| `de_article` | 0 neatbilstību |
| `de_plural` | 0 neatbilstību |
| Study kartīšu DE saturs (`examples[].de`, `comparison[].word`, `words[].de`, `comparisonTable[].de`) | 0 neatbilstību |
| Piemēru DE teksti | 0 neatbilstību |
| `comparisonTable` DE dati | 0 neatbilstību |
| `verbs.js` DE formas | 0 neatbilstību |
| `sentences.js` DE teikumi | 0 neatbilstību |
| `dialogueIdMap.js` DE saturs | 0 neatbilstību |
| `nounArticles.js` | Kopēts no LV avota bez izmaiņām |
| `courseLessons` DE saturs | 0 neatbilstību |

**Rezultāts: 0 neatbilstību.**

---

## 6. ESOŠO VALODU INTEGRITĀTE (READ-ONLY)

✅ **Esošie valodu faili izmantoti tikai kā atsauces materiāls.**

✅ **Netika veiktas nekādas izmaiņas:**

| Valoda | Statuss |
|--------|---------|
| LV | ✅ Nemainīts |
| ET | ✅ Nemainīts |
| LT | ✅ Nemainīts |
| PL | ✅ Nemainīts |
| RU | ✅ Nemainīts |
| UK | ✅ Nemainīts |
| RO | ✅ Nemainīts |
| BG | ✅ Nemainīts |
| GR | ✅ Nemainīts |
| TR | ✅ Nemainīts |
| SQ | ✅ Nemainīts |
| MK | ✅ Nemainīts |
| SL | ✅ Nemainīts |
| BS | ✅ Nemainīts |

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; parity validācijas bāze; DE lauku atjaunošana |
| **BS** | Tulkošanas starpposms (BS→SR); sectionAccents struktūra; datu ģenerēšanas avots |
| **BS** | UI lokalizācijas veidne (`generate-sr-ui.js`) |
| **BS** | sectionAccents labošanas skripta (`fix-sr-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | LV → … → SL → BS (esošs) → SR (jauns) |
| **UI tulkojums** | BS → SR |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-sr-from-bs.js` — galvenā datu ģenerēšana
2. `scripts/generate-sr-ui.js` — UI lokalizācija
3. `scripts/fix-sr-de-fields.js` — DE lauku atjaunošana no LV avota
4. `scripts/fix-sr-highlight-mismatches.js` — sectionAccents labošana
5. `scripts/verify-sr-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem srpsku valodas avotem (Matica srpska, Rječnik srpskoga jezika) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet srpsku tulkojumus).
- Kurss HTML saturā var būt atsevišķi nepārtulkoti fragmenti, kas prasa manuālu rediģēšanu.
- `smoke-test-ui` HTTP pārbaude rāda nepatiess pozitīvu SR kodam (skat. 4. sadaļu).

---

## 10. GALA SECINĀJUMS

**SR–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīgi (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
