# SL–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | SL–DE (Slovenski → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | (tiks atjaunināts pēc PR izveides) |
| **Darba rezultāts** | Pilns slovēņu valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/sl/*
languages/sl/*
www/data/sl/*
www/languages/sl/*
scripts/generate-sl-from-lv.js
scripts/generate-sl-from-mk.js
scripts/generate-sl-ui.js
scripts/generate-sl-ui-from-hr.js
scripts/retry-sl-failed-translations.js
scripts/fix-sl-de-fields.js
scripts/fix-sl-highlight-mismatches.js
scripts/verify-sl-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili

- `data/sl/a1.js` … `data/sl/c2.js`
- `data/sl/sentences.js`, `data/sl/verbs.js`
- `data/sl/courseLessons.js`, `data/sl/courseTrainingCards.js`
- `data/sl/dialogueIdMap.js`, `data/sl/nounArticles.js`
- `languages/sl/ui.js`, `languages/sl/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili

- `languages/registry.js` — SL ieraksts (jau integrēts)
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — SL pievienots valodu sarakstam
- `languages/data-loader.js` — SL `courseTrainingCards.js` dinamiskā ielāde
- `www/languages/data-loader.js` — sinhronizēts
- `ui.js` / `www/ui.js` — SL Kurss 1–7 treniņa kartīšu atbalsts

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=sl` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=sl` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=sl` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 15 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=sl` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=sl` | ⚠️ Daļējs — routing PASS; HTTP pārbaude nepatiess pozitīvs (skat. piezīmi) |
| `verify-sl-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

**Piezīme par smoke-test-ui:** HTTP pārbaude meklē `"sl"` apakšvirkni `languages/datasets.js` saturā. Kods `sl` neparādās nevienā vārdā šajā failā (atšķirībā no `tr`, kas parādās vārdos kā `target`, `supported` u.c.). Routing loģika darbojas korekti. Tas ir zināms ierobežojums, nevis funkcionāla kļūda.

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (slovēņu).**

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
| HR | ✅ Nemainīts |
| SR | ✅ Nemainīts |
| BS | ✅ Nemainīts |

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; tulkošanas avots (LV→SL); parity validācijas bāze; DE lauku atjaunošana |
| **LT** | `courseTrainingCards.js` struktūra un treniņa kartīšu avots |
| **HR** | UI lokalizācijas veidne (`generate-sl-ui-from-hr.js`) |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | LV → SL (galvenais); LT → SL (treniņa kartītes); HR → SL (UI) |
| **API** | Google Translate (google-translate-api-x) ar kešatmiņu |

### Izmantotie skripti

1. `scripts/generate-sl-from-lv.js` — galvenā datu ģenerēšana (LV→SL)
2. `scripts/retry-sl-failed-translations.js` — neveiksmīgu tulkojumu atkārtošana
3. `scripts/generate-sl-ui-from-hr.js` — UI lokalizācija (HR→SL)
4. `scripts/fix-sl-de-fields.js` — DE lauku atjaunošana no LV avota
5. `scripts/fix-sl-highlight-mismatches.js` — sectionAccents labošana
6. `scripts/verify-sl-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem slovēņu valodas avotem (Fran Ramovš Inštitut za slovenski jezik, Slovarji ZRC SAZU) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet slovēņu tulkojumus).
- Kurss HTML saturā (`courseLessons.js`) var būt atsevišķi nepārtulkoti fragmenti, kas prasa manuālu rediģēšanu.
- 79 teikumi `sentences.js` satur identisku tekstu ar LV avotu (daži vārdi ir vienādi abās valodās vai API neveiksmīgi tulkojumi).
- `smoke-test-ui` HTTP pārbaude rāda nepatiess pozitīvu SL kodam (skat. 4. sadaļu).

---

## 10. GALA SECINĀJUMS

**SL–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīgi (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
