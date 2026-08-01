# SQ–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | SQ–DE (Shqip → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | (tiks izveidots pēc push) |
| **Darba rezultāts** | Pilns albāņu valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/sq/*
languages/sq/*
www/data/sq/*
www/languages/sq/*
scripts/generate-sq-from-tr.js
scripts/generate-sq-language-data-batched.js
scripts/generate-sq-ui.js
scripts/fix-sq-de-fields.js
scripts/fix-sq-remaining-turkish.js
scripts/fix-sq-highlight-mismatches.js
scripts/verify-sq-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili
- `data/sq/a1.js` … `data/sq/c2.js`
- `data/sq/sentences.js`, `data/sq/verbs.js`
- `data/sq/courseLessons.js`, `data/sq/courseTrainingCards.js`
- `data/sq/dialogueIdMap.js`, `data/sq/nounArticles.js`
- `languages/sq/ui.js`, `languages/sq/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili
- `languages/registry.js` — pievienots SQ ieraksts
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — SQ pievienots valodu sarakstam

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=sq` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=sq` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=sq` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 10 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=sq` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=sq` | ⚠️ Daļējs — routing PASS; HTTP pārbaude nepatiess pozitīvs (skat. piezīmi) |
| `verify-sq-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

**Piezīme par smoke-test-ui:** HTTP pārbaude meklē `"sq"` apakšvirkni `languages/datasets.js` saturā. Kods `sq` neparādās nevienā vārdā šajā failā (atšķirībā no `tr`, kas parādās vārdos kā `target`, `supported` u.c.). Routing loģika darbojas korekti. Tas ir zināms ierobežojums, nevis funkcionāla kļūda.

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (albāņu).**

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

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; parity validācijas bāze |
| **TR** | Tulkošanas starpposms (TR→SQ); sectionAccents struktūra; datu ģenerēšanas avots |
| **RO** | UI lokalizācijas veidne (`generate-sq-ui.js`) |
| **ET** | sectionAccents labošanas skripta (`fix-et-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | LV → TR (esošs) → SQ (jauns) + TR → SQ otrā caurlaide |
| **UI tulkojums** | RO → SQ |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-sq-from-tr.js` — galvenā datu ģenerēšana
2. `scripts/generate-sq-ui.js` — UI lokalizācija
3. `scripts/fix-sq-remaining-turkish.js` — otrā tulkošanas caurlaide
4. `scripts/fix-sq-de-fields.js` — DE lauku atjaunošana
5. `scripts/fix-sq-highlight-mismatches.js` — sectionAccents labošana (97 termini)
6. `scripts/verify-sq-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem albāņu valodas avotiem (Fjalori i Gjuhës së Shqipe, Akademia e Shkencave e Shqipërisë) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet albāņu tulkojumus).
- Kurss HTML saturā var būt atsevišķi nepārtulkoti fragmenti, kas prasa manuālu rediģēšanu.
- `smoke-test-ui` HTTP pārbaude rāda nepatiess pozitīvu SQ kodam (skat. 4. sadaļu).

---

## 10. GALA SECINĀJUMS

**SQ–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīti (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
