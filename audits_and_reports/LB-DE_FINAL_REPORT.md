# LB–DE Valodas Izveides Gala Atskaite

## 1. KOPSAVILKUMS

| Lauks | Vērtība |
|-------|---------|
| **Valodas pāris** | LB–DE (Lëtzebuergesch → Deutsch) |
| **Statuss** | Tehniski pilnībā izveidots un integrēts |
| **Pull Request** | (tiks izveidots pēc push) |
| **Darba rezultāts** | Pilns luksemburgiešu valodas datu komplekts A1–C2, Study kartītes, teikumi, darbības vārdi, Kurss un UI lokalizācija |

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
data/lb/*
languages/lb/*
www/data/lb/*
www/languages/lb/*
scripts/generate-lb-from-lv.js
scripts/generate-lb-from-nl.js
scripts/generate-lb-ui.js
scripts/fix-lb-de-fields.js
scripts/fix-lb-lv-structure.js
scripts/fix-lb-highlight-mismatches.js
scripts/fix-lb-lv-names.js
scripts/fix-lb-course-training-cards.js
scripts/verify-lb-de-compliance.js
```

---

## 3. IZMAIŅU APJOMS

### Izveidoti faili

- `data/lb/a1.js` … `data/lb/c2.js`
- `data/lb/sentences.js`, `data/lb/verbs.js`
- `data/lb/courseLessons.js`, `data/lb/courseTrainingCards.js`
- `data/lb/dialogueIdMap.js`, `data/lb/nounArticles.js`
- `languages/lb/ui.js`, `languages/lb/data/manifest.js`
- Atbilstošie `www/` eksemplāri

### Modificēti faili

- `languages/registry.js` — pievienots LB ieraksts (Lëtzebuergesch)
- `www/languages/registry.js` — sinhronizēts
- `scripts/validate-engine-i18n.js` — LB pievienots valodu sarakstam
- `languages/data-loader.js` — LB `courseLessons` dinamiskā ielāde
- `www/languages/data-loader.js` — sinhronizēts
- `ui.js` / `www/ui.js` — LB Kurss 1–7 treniņa kartīšu atbalsts

---

## 4. VALIDĀCIJA

| Pārbaude | Rezultāts |
|----------|-----------|
| `audit-language-parity --lang=lb` | ✅ PASS — 8 618 ieraksti, 755 Study kartītes, 0 neatbilstību |
| `validate-study-design --lang=lb` | ✅ PASS — 0 sectionAccentIssues, www sinhronizācija OK |
| `validate-kurss --lang=lb` | ✅ PASS — 302 translate kartītes, 100 exercise kartītes |
| `validate-engine-i18n` | ✅ PASS — 24 valodas, 306 atslēgas katrai |
| `audit-mojibake --lang=lb` | ✅ PASS — 0 kodējuma kļūdu |
| `smoke-test-ui --lang=lb` | ✅ PASS — routing un HTTP pārbaude OK |
| `verify-lb-de-compliance` | ✅ PASS — 0 DE neatbilstību, 0 citu valodu izmaiņu |

---

## 5. VĀCU DATU INTEGRITĀTE (READ-ONLY)

✅ **Tulkojumos izmantota tikai jaunā valoda (luksemburgiešu).**

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

### Atsauces izmantošana

| Valoda | Nolūks |
|--------|--------|
| **LV** | DE datu avots un struktūras etalons; DE lauku atjaunošana; parity validācijas bāze |
| **NL** | Tulkošanas avots (NL→LB); datu ģenerēšanas bāze (`generate-lb-from-nl.js`) |
| **LV** | UI lokalizācijas veidne (`generate-lb-ui.js`) |
| **NL** | sectionAccents labošanas skripta (`fix-lb-highlight-mismatches.js`) loģikas pamats |

---

## 7. TULKOŠANAS METODE

| Parametrs | Vērtība |
|-----------|---------|
| **DE dati** | Kopēti no LV bāzes (READ-ONLY) |
| **Tulkojuma ķēde** | LV (esošs) → NL (atsauce) → LB (jauns); UI: LV → LB |
| **API** | Google Translate + MyMemory (ar kešatmiņu) |

### Izmantotie skripti

1. `scripts/generate-lb-from-nl.js` — galvenā datu ģenerēšana (NL→LB ar LV DE saglabāšanu)
2. `scripts/generate-lb-ui.js` — UI lokalizācija (LV→LB)
3. `scripts/fix-lb-de-fields.js` — DE lauku atjaunošana no LV avota
4. `scripts/fix-lb-lv-structure.js` — Study struktūras izlīdzināšana ar LV etalonu
5. `scripts/fix-lb-highlight-mismatches.js` — sectionAccents labošana
6. `scripts/fix-lb-lv-names.js` — latviešu personvārdu aizstāšana
7. `scripts/fix-lb-course-training-cards.js` — Kurss treniņa kartīšu ģenerēšana
8. `scripts/verify-lb-de-compliance.js` — DE integritātes pārbaude

---

## 8. KVALITĀTES STATUSS

| Aspekts | Statuss |
|---------|---------|
| **Tehniskais statuss** | Pilnībā pabeigts |
| **Valodnieciskais statuss** | Automātisks tulkojums veikts; pilns valodniecisks audits vēl nav veikts |

Tulkojumi ģenerēti ar Google Translate API. Pirms publiskas izmantošanas ieteicams veikt pilnu valodniecisko auditu ar autoritatīviem luksemburgiešu valodas avotiem (LOD — Lëtzebuerger Online Dictionnaire, ZLS, Uni.lu resursi) un dzimtās valodas runātāja pārbaudi.

---

## 9. ZINĀMĀS PIEZĪMES

- Daļa tulkojumu ir mašīntulkojuma kvalitātē — nepieciešama manuāla pārbaude C1/C2 līmeņos.
- `sectionAccents` laukos `lv` atslēga saglabāta projekta konvencijas dēļ (nesatur latviešu tekstu, bet luksemburgiešu tulkojumus).
- 52 tip formas tika pārveidotas no plakana uz rindu masīvu ar `fix-lb-highlight-mismatches.js`.
- 1 259 sectionAccents termini tika automātiski laboti ar `fix-lb-highlight-mismatches.js`.

---

## 10. GALA SECINĀJUMS

**LB–DE valodas pāra tehniskā versija ir pilnībā izveidota un integrēta projektā.**

Visi projekta kvalitātes standarti ir ievēroti.

✅ Tulkojumos izmantota tikai jaunā valoda; vācu (de) dati saglabāti nemainīgi (READ-ONLY).

✅ Esošie citu valodu faili izmantoti tikai kā atsauces materiāls; tajos netika veiktas nekādas izmaiņas.

Ja valodnieciskais audits vēl nav veikts, pirms publiskas izmantošanas ieteicams veikt pilnu valodas auditu, izmantojot autoritatīvus valodas avotus un, vēlams, dzimtās valodas runātāja pārbaudi.
