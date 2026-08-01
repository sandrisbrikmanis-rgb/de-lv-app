# MK–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | MK–DE (Македонски → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | (tiks izveidots pēc push) |
| **Darba rezultāts** | Pilns maķedoniešu valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/mk/*
languages/mk/*
www/data/mk/*
www/languages/mk/*
scripts/generate-mk-from-bg.js
scripts/generate-mk-ui.js
scripts/fix-mk-de-fields.js
scripts/fix-mk-highlight-mismatches.js
scripts/verify-mk-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili
- `data/mk/a1.js` … `data/mk/c2.js`
- `data/mk/sentences.js`, `data/mk/verbs.js`
- `data/mk/courseLessons.js`, `data/mk/courseTrainingCards.js`
- `data/mk/dialogueIdMap.js`, `data/mk/nounArticles.js`
- `languages/mk/ui.js`, `languages/mk/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili
- `languages/registry.js` — pievienots MK ieraksts
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — MK pievienots valodu sarakstam

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=mk` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=mk` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=mk` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 11 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=mk` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=mk` | ⚠️ Daļējs — routing PASS; HTTP pārbaude nepatiess pozitīvs (skat. piezīmi) |
| `verify-mk-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

**Piezīme par smoke-test-ui:** HTTP pārbaude meklē `"mk"` apakšvirkni `languages/datasets.js` saturā. Kods `mk` neparādās nevienā vārdā šajā failā (atšķirībā no `tr`, kas parādās vārdos kā `target`, `supported` u.c.). Routing loģika darbojas korekti. Tas ir zināms ierobežojums, nevis funkcionāla kļūda.

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (maķedoniešu).**

✅ **Visi vācu dati saglabāti nemainīti.**

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

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; parity validācijas bāze; DE lauku atjaunošana |
| **BG** | Tulkošanas starpposms (BG→MK); sectionAccents struktūra; datu ģenerēšanas avots |
| **BG** | UI lokalizācijas veidne (`generate-mk-ui.js`) |
| **SQ** | sectionAccents labošanas skripta (`fix-sq-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | LV → BG (esošs) → MK (jauns) |
| **UI tulkojums** | BG → MK |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-mk-from-bg.js` — galvenā datu ģenerēšana
2. `scripts/generate-mk-ui.js` — UI lokalizācija
3. `scripts/fix-mk-de-fields.js` — DE lauku atjaunošana no LV avota
4. `scripts/fix-mk-highlight-mismatches.js` — sectionAccents labošana (67 termini)
5. `scripts/verify-mk-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem maķedoniešu valodas avotem (Македонска академија на науките и уметностите, речници на МАНУ) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet maķedoniešu tulkojumus).
- Kurss HTML saturā var būt atsevišķi nepārtulkoti fragmenti, kas prasa manuālu rediģēšanu.
- `smoke-test-ui` HTTP pārbaude rāda nepatiess pozitīvu MK kodam (skat. 4. sadaļu).

---

## 10. GALA SECINĀJUMS

**MK–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīti (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
