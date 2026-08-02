# NB–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | NB–DE (Norsk Bokmål → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | #238 |
| **Darba rezultāts** | Pilns norvēģu bokmål valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/nb/*
languages/nb/*
www/data/nb/*
www/languages/nb/*
scripts/generate-nb-from-sv.js
scripts/generate-nb-ui.js
scripts/fix-nb-de-fields.js
scripts/fix-nb-highlight-mismatches.js
scripts/fix-nb-lv-structure.js
scripts/verify-nb-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili

- `data/nb/a1.js` … `data/nb/c2.js`
- `data/nb/sentences.js`, `data/nb/verbs.js`
- `data/nb/courseLessons.js`, `data/nb/courseTrainingCards.js`
- `data/nb/dialogueIdMap.js`, `data/nb/nounArticles.js`
- `languages/nb/ui.js`, `languages/nb/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili

- `languages/registry.js` — pievienots NB ieraksts (Norsk Bokmål)
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — NB pievienots valodu sarakstam
- `languages/data-loader.js` — NB `courseLessons` dinamiskā ielāde
- `www/languages/data-loader.js` — sinhronizēts
- `ui.js` / `www/ui.js` — NB Kurss 1–7 treniņa kartīšu atbalsts

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=nb` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=nb` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=nb` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 20 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=nb` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=nb` | ⚠️ Daļējs — routing PASS; HTTP pārbaude nepatiess pozitīvs (skat. piezīmi) |
| `verify-nb-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

**Piezīme par smoke-test-ui:** HTTP pārbaude meklē `"nb"` apakšvirkni `languages/datasets.js` saturā. Kods `nb` neparādās nevienā vārdā šajā failā (līdzīgi kā `sv`, `sk`, `mk`, `sl`, `bs`, `sr`, `hr`, `cs`). Routing loģika darbojas korekti. Tas ir zināms ierobežojums, nevis funkcionāla kļūda.

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (norsk bokmål).**

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

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; parity validācijas bāze; DE lauku atjaunošana |
| **SV** | Tulkošanas starpposms (SV→NB); datu ģenerēšanas avots; sectionAccents struktūra |
| **SV** | UI lokalizācijas veidne (`generate-nb-ui.js`) |
| **SV** | Kurss treniņa kartīšu avots (`data/sv/courseTrainingCards.js`) |
| **SV** | sectionAccents labošanas skripta (`fix-nb-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | SV (esošs) → NB (jauns) |
| **UI tulkojums** | SV → NB (norsk bokmål) |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-nb-from-sv.js` — galvenā datu ģenerēšana
2. `scripts/generate-nb-ui.js` — UI lokalizācija
3. `scripts/fix-nb-de-fields.js` — DE lauku atjaunošana no LV avota
4. `scripts/fix-nb-lv-structure.js` — Study struktūras izlīdzināšana ar LV etalonu
5. `scripts/fix-nb-highlight-mismatches.js` — sectionAccents labošana
6. `scripts/verify-nb-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem norvēģu bokmål valodas avotiem (Språkrådet, Bokmålsordboka, NAOB) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet norvēģu tulkojumus).
- 52 tip formas tika pārveidotas no plakana uz rindu masīvu ar `fix-nb-highlight-mismatches.js`.
- 3 sectionAccents termini tika noņemti, jo netika atrasta droša atbilstība tekstā.
- `smoke-test-ui` HTTP pārbaude rāda nepatiess pozitīvu NB kodam (skat. 4. sadaļu).

---

## 10. GALA SECINĀJUMS

**NB–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīti (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
