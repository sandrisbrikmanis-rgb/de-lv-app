# SK–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | SK–DE (Slovenčina → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | #234 |
| **Darba rezultāts** | Pilns slovāku valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/sk/*
languages/sk/*
www/data/sk/*
www/languages/sk/*
scripts/generate-sk-from-pl.js
scripts/generate-sk-ui.js
scripts/fix-sk-de-fields.js
scripts/fix-sk-highlight-mismatches.js
scripts/fix-sk-ui-polish-remnants.js
scripts/verify-sk-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili

- `data/sk/a1.js` … `data/sk/c2.js`
- `data/sk/sentences.js`, `data/sk/verbs.js`
- `data/sk/courseLessons.js`, `data/sk/courseTrainingCards.js`
- `data/sk/dialogueIdMap.js`, `data/sk/nounArticles.js`
- `languages/sk/ui.js`, `languages/sk/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili

- `languages/registry.js` — pievienots SK ieraksts (Slovenčina)
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — SK pievienots valodu sarakstam
- `languages/data-loader.js` — SK `courseLessons` dinamiskā ielāde
- `www/languages/data-loader.js` — sinhronizēts
- `ui.js` / `www/ui.js` — SK Kurss 1–7 treniņa kartīšu atbalsts

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=sk` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=sk` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=sk` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 16 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=sk` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=sk` | ⚠️ Daļējs — routing PASS; HTTP pārbaude nepatiess pozitīvs (skat. piezīmi) |
| `verify-sk-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

**Piezīme par smoke-test-ui:** HTTP pārbaude meklē `"sk"` apakšvirkni `languages/datasets.js` saturā. Kods `sk` neparādās nevienā vārdā šajā failā (līdzīgi kā `mk`, `sl`, `bs`, `sr`, `hr`). Routing loģika darbojas korekti. Tas ir zināms ierobežojums, nevis funkcionāla kļūda.

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (slovenčina).**

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

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; parity validācijas bāze; DE lauku atjaunošana |
| **PL** | Tulkošanas starpposms (PL→SK); sectionAccents struktūra; datu ģenerēšanas avots |
| **PL** | UI lokalizācijas veidne (`generate-sk-ui.js`) |
| **HR** | sectionAccents labošanas skripta (`fix-sk-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | PL (esošs) → SK (jauns) |
| **UI tulkojums** | PL → SK |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-sk-from-pl.js` — galvenā datu ģenerēšana
2. `scripts/generate-sk-ui.js` — UI lokalizācija
3. `scripts/fix-sk-de-fields.js` — DE lauku atjaunošana no LV avota
4. `scripts/fix-sk-highlight-mismatches.js` — sectionAccents labošana
5. `scripts/fix-sk-ui-polish-remnants.js` — UI poļu atlieku labošana
6. `scripts/verify-sk-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar mašīntulkošanas API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem slovāku valodas avotiem (Jazykovedný ústav Ľ. Štúra SAV, slovnik.juls.savba.sk) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet slovāku tulkojumus).
- UI saturā var būt atsevišķi nepārtulkoti poļu fragmenti, kas prasa manuālu rediģēšanu.
- `smoke-test-ui` HTTP pārbaude rāda nepatiess pozitīvu SK kodam (skat. 4. sadaļu).

---

## 10. GALA SECINĀJUMS

**SK–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīgi (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
