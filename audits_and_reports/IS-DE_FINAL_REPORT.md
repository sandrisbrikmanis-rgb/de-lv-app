# IS–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | IS–DE (Íslenska → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Darba rezultāts** | Pilns íslensku valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/is/*
languages/is/*
www/data/is/*
www/languages/is/*
scripts/generate-is-from-nb.js
scripts/generate-is-ui.js
scripts/fix-is-de-fields.js
scripts/fix-is-lv-structure.js
scripts/fix-is-highlight-mismatches.js
scripts/verify-is-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili

- `data/is/a1.js` … `data/is/c2.js`
- `data/is/sentences.js`, `data/is/verbs.js`
- `data/is/courseLessons.js`, `data/is/courseTrainingCards.js`
- `data/is/dialogueIdMap.js`, `data/is/nounArticles.js`
- `languages/is/ui.js`, `languages/is/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili

- `languages/registry.js` — pievienots IS ieraksts (Íslenska)
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — IS pievienots valodu sarakstam
- `languages/data-loader.js` — IS `courseLessons` dinamiskā ielāde
- `www/languages/data-loader.js` — sinhronizēts
- `ui.js` / `www/ui.js` — IS Kurss 1–7 treniņa kartīšu atbalsts

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=is` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=is` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=is` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 31 valoda, 306 atslēgas katrai |
| `audit-mojibake --lang=is` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=is` | ✅ PASS — routing un HTTP pārbaude OK |
| `verify-is-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (íslenska).**

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
| SR | ✅ Nemainīts |
| HR | ✅ Nemainīts |
| SK | ✅ Nemainīts |
| CS | ✅ Nemainīts |
| FI | ✅ Nemainīts |
| SV | ✅ Nemainīts |
| NB | ✅ Nemainīts |
| NN | ✅ Nemainīts |
| DA | ✅ Nemainīts |
| NL | ✅ Nemainīts |
| LB | ✅ Nemainīts |
| FR | ✅ Nemainīts |
| IT | ✅ Nemainīts |
| ES | ✅ Nemainīts |
| PT | ✅ Nemainīts |
| HU | ✅ Nemainīts |

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; parity validācijas bāze; DE lauku atjaunošana |
| **NB** | Tulkošanas starpposms (NB→IS); datu ģenerēšanas avots; sectionAccents struktūra |
| **NB** | UI lokalizācijas veidne (`generate-is-ui.js`) |
| **NB** | Kurss treniņa kartīšu avots (`data/nb/courseTrainingCards.js`) |
| **NB** | sectionAccents labošanas skripta (`fix-is-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | NB (esošs) → IS (jauns) |
| **UI tulkojums** | NB → IS |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-is-from-nb.js` — galvenā datu ģenerēšana
2. `scripts/generate-is-ui.js` — UI lokalizācija
3. `scripts/fix-is-de-fields.js` — DE lauku atjaunošana no LV avota
4. `scripts/fix-is-lv-structure.js` — Study struktūras izlīdzināšana ar LV etalonu
5. `scripts/fix-is-highlight-mismatches.js` — sectionAccents labošana
6. `scripts/verify-is-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem íslensku valodas avotiem (Íslensk nútímamálsorðabók, Beygingarlýsing íslensks nútímamáls) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet íslensku tulkojumus).
- 52 tip formas tika pārveidotas no plakana uz rindu masīvu ar `fix-is-highlight-mismatches.js`.

---

## 10. GALA SECINĀJUMS

**IS–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīgi (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
