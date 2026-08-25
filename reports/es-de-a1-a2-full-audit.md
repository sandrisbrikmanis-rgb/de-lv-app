# ES–DE A1+A2 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-25  
**Auditors:** Cloud Agent (READ-ONLY deterministiskais audits)  
**Standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`  
**Apjoms:** `data/es/a1.js`, `data/es/a2.js` (+ `www/data/es/` mirror)  
**DE etalons (tikai lasīšana):** `data/a1.js`, `data/a2.js`  
**Piezīme:** Spāņu tulkojumi glabājas laukā `lv` (projekta konvencija, tāpat kā DA/ET).  
**ORIGIN_MAIN_SHA:** `1806917473faa6d5251074a6a22d3631cef0eae9`  
**Production izmaiņas:** **0** (tikai audita ziņojums)

---

## 1. Kopsavilkums

| Metrika | A1 | A2 | Kopā |
|---------|----|----|------|
| Kartītes | **702/702** | **1640/1640** | **2342** |
| Study objekti (LV etalons) | **134** | **231** | **365** |
| Study objekti (ES) | **124** | **231** | **355** |
| Trūkstošie Study | **10** | **0** | **10** |
| Kartītes ar LV atlikumiem Study laukos | **24** | **147** | **171** |
| LV atlikumu instances Study laukos | **65** | **496** | **561** |
| `sectionAccents` neatbilstības | **45** | **581** | **626** |
| `minimalStudy` bez renderējama satura | **0** | **18** | **18** |
| DE lauku neatbilstības (top-level) | **0** | **0** | **0** |
| Semikoli nozīmēs (`;`) | **0** | **0** | **0** |
| Mojibake | **0** | **0** | **0** |
| JS syntax | **PASS** | **PASS** | **PASS** |
| Mirror `data/` ↔ `www/` | **PASS** | **PASS** | **PASS** |

### Gala rezultāts

## **ES–DE A1+A2: NEEDS REPAIR**

A1 līmenī trūkst **10 Study kartīšu** (strukturāli CRITICAL). Abos līmeņos ir plaši **latviešu valodas atlikumi** Study kartīšu `comparison[].example`, `examples[].lv` un citos laukos — galvenokārt A2 (147 kartītes). Papildus: **626 `sectionAccents` neatbilstības**, A2 **18 `minimalStudy`** kartītes bez renderējama satura, un dažās A1 Study kartītēs **DE saturs atšķiras** no LV etalona (piem. `klein`, `bitte`, `es`).

---

## 2. Strukturālā pārbaude

| Pārbaude | A1 | A2 | Kopā |
|----------|----|----|------|
| Kartīšu skaits vs LV | 702/702 PASS | 1640/1640 PASS | PASS |
| `de` secība/identitāte (top-level) | PASS | PASS | PASS |
| Study skaits | **124/134 FAIL** | 231/231 PASS | **FAIL** |
| Study layout vs LV | **10 layout mismatch** | PASS | FAIL |
| JS syntax (`node --check`) | PASS | PASS | PASS |
| Mojibake (`audit-mojibake --lang=es`) | PASS | PASS | PASS |
| Mirror data ↔ www | PASS | PASS | PASS |
| `audit-language-parity --lang=es` | FAIL (A1) | PASS | FAIL |
| `validate-study-design --lang=es` | FAIL | FAIL | FAIL |
| `verify-es-de-compliance` (DE read-only) | FAIL* | PASS | FAIL* |
| `audit-translations --lang=es` | PASS | PASS | PASS |

\* A1 DE neatbilstības (20 instances) ir sekundāras — tās rodas, jo 10 Study objekti pilnībā trūkst ES failā; top-level `de` lauki ir identiski LV etalonam.

---

## 3. A1 atradumi

### 3.1 CRITICAL — trūkstošie Study objekti (10)

Šīm kartītēm LV etalonā ir `standardStudy`, bet ES failā `study` objekts pilnībā nav:

| # | DE vārds | Study ID | Layout |
|---|----------|----------|--------|
| 1 | Besuch | `a1-besuch` | standardStudy |
| 2 | besuchen | `a1-besuchen` | standardStudy |
| 3 | Fußball | `a1-fussball` | standardStudy |
| 4 | ganz | `a1-ganz` | standardStudy |
| 5 | gefallen | `a1-gefallen` | standardStudy |
| 6 | Geschichte | `a1-geschichte` | standardStudy |
| 7 | Geschwister | `a1-geschwister` | standardStudy |
| 8 | Großeltern | `a1-grosseltern` | standardStudy |
| 9 | Hand | `a1-hand` | standardStudy |
| 10 | hübsch | `a1-huebsch` | standardStudy |

**Sekas:** lietotājs redz tikai flashcard (bez ℹ️ Skaidrojums, ⏳ Piemēri, ⚖️ Salīdzinājums u.c.), kas ir tieša vizuālā/strukturālā neatbilstība ar LV-DE (standarts §2.1, §2.3).

### 3.2 HIGH — daļēji bojāti Study objekti

| DE | Problēma |
|----|----------|
| `bitte` | Trūkst `study.tip.text` (salīdzinājumā ar LV) |
| `Bitte` | Trūkst `study.tip.text` (salīdzinājumā ar LV) |

### 3.3 CRITICAL — DE satura neatbilstība Study iekšienē (6 kartītes)

Šīm kartītēm Study iekšējie `de` lauki atšķiras no LV etalona (DE read-only pārkāpums):

- `klein` — piemēru struktūra/saturs atšķiras
- `bitte` — salīdzinājuma `de` vārdi neatbilst LV
- `Bitte` — salīdzinājuma `de` vārdi neatbilst LV
- `bringen` — piemēru `de` saturs atšķiras
- `es` — `study.examples[3].lv` = `"es mi libro."` (semantiski nepareizi; LV: `"Tas ir noguris."`)

### 3.4 HIGH — latviešu valodas atlikumi Study laukos (24 kartītes, 65 instances)

Tipiskie lauki:

- `study.comparison[N].example` — bilingvālais formāts `"DE teikums. – LV tulkojums."` nav aizvietots ar spāņu
- `study.comparison[N].meaning` — latviešu vārdi (`lūdzu`, `lūgums` u.c.)
- `study.examples[N].lv` — pilnīgi latviešu teikumi

**Reprezentatīvi piemēri:**

| Card ID | Lauks | CURRENT (fragment) |
|---------|-------|-------------------|
| `a1-klein-study` | `study.examples[3].lv` | `man ir maza soma.` |
| `a1-bei` | `study.examples[0].lv` | `es esmu pie sava drauga.` |
| `a1-bitte` | `study.comparison[0].meaning` | `lūdzu` |
| `a1-bitte` | `study.comparison[0].example` | `Komm bitte herein. – Lūdzu, nāc iekšā.` |

### 3.5 MEDIUM — `sectionAccents` neatbilstības (45)

`validate-study-design` atrada 45 gadījumus, kur `sectionAccents` termini nav atrodami attiecīgajā sadaļas tekstā. Lielākā daļa korelē ar nepareizu/veco salīdzinājuma piemēru saturu (sk. §3.4).

**Piemēri:** `bis` (termins `bis dass`), `bringen` (vairāki DE akcentu termini piemēros).

---

## 4. A2 atradumi

### 4.1 HIGH — latviešu valodas atlikumi Study laukos (147 kartītes, 496 instances)

Galvenokārt `study.comparison[N].example` laukos saglabājies LV formāts:

```
"Der Zug fährt ab. = Vilciens atiet."
```

**Reprezentatīvs piemērs — `abfahren`:**

| Lauks | CURRENT |
|-------|---------|
| `study.comparison[0].example` | `Der Zug fährt ab. = Vilciens atiet.` |
| `study.comparison[0].meaning` | `salir / salir / partir` (dublēta nozīme — stilistiska problēma) |

Šis defekts ir sistemātisks: **~147 no 231** A2 Study kartītēm satur vismaz vienu LV atlikumu.

### 4.2 HIGH — `minimalStudy` bez renderējama satura (18 kartītes)

Kartītēm ar `layout: "minimalStudy"` nav neviena no obligātajām renderējamajām sadaļām (`explanation`, `examples`, `comparison`, `tip`, `important`):

| DE vārds | Study ID |
|----------|----------|
| Aschenputtel | `a2-aschenputtel` |
| Gott | `a2-gott` |
| Keller | `a2-keller` |
| Kellner | `a2-kellner` |
| Kerl | `a2-kerl` |
| Kette | `a2-kette` |
| Kilo | `a2-kilo` |
| Kinn | `a2-kinn` |
| Kiste | `a2-kiste` |
| Kloß | `a2-kloss` |
| Knie | `a2-knie` |
| Knopf | `a2-knopf` |
| Koffer | `a2-koffer` |
| Kohle | `a2-kohle` |
| Kommode | `a2-kommode` |
| Konto | `a2-konto` |
| Kopf | `a2-kopf` |
| Korb | `a2-korb` |

**Sekas:** Study karte renderējas kā tukša (standarts §2.3.12 — tukšas sadaļas nedrīkst parādīties).

### 4.3 MEDIUM — `sectionAccents` neatbilstības (581)

`validate-study-design` atrada 581 `sectionAccentIssues` A2 failā. Tipiski: spāņu termini (`conducir`, `ahora`, `piefrase`) norādīti `comparison.example` akcentos, bet pats piemēra teksts vēl satur LV daļu vai neatbilstošus terminus.

---

## 5. Deterministiskie vārti (kopsavilkums)

| Vārts | Rezultāts |
|-------|-----------|
| Syntax A1/A2 | **PASS** |
| Mirror A1/A2 | **PASS** |
| Mojibake | **PASS** (0 hits) |
| Semikoli (`;`) | **PASS** (0) |
| Placeholder/TODO | **PASS** (0) |
| Top-level DE identitāte | **PASS** |
| Study skaits A1 | **FAIL** (124/134) |
| Study skaits A2 | **PASS** (231/231) |
| LV remnants A1 Study | **FAIL** (24 kartītes) |
| LV remnants A2 Study | **FAIL** (147 kartītes) |
| sectionAccents A1 | **FAIL** (45) |
| sectionAccents A2 | **FAIL** (581) |
| minimalStudy render A2 | **FAIL** (18) |

---

## 6. Ieteicamā labošanas secība

1. **A1 — pievienot 10 trūkstošos Study objektus** no LV etalona ar pilnu spāņu tulkojumu (visas sadaļas + `sectionAccents`).
2. **A1+A2 — masveida LV atlikumu tīrīšana** `study.comparison[].example` un `study.examples[].lv` laukos (prioritāte A2: 147 kartītes).
3. **A1 — labot DE satura neatbilstības** Study iekšienē (`klein`, `bitte`, `Bitte`, `bringen`, `es`).
4. **A1 — papildināt `bitte`/`Bitte` `study.tip.text`.**
5. **A2 — 18 `minimalStudy` kartītes** — pievienot minimālo renderējamo saturu vai pāriet uz `standardStudy` pēc LV etalona.
6. **Pēc labojumiem — atkārtot:** `audit-es-a1-a2-collect.js`, `validate-study-design --lang=es`, `audit-language-parity --lang=es`, `verify-es-de-compliance`.
7. **Sinhronizēt** `www/data/es/a1.js` un `www/data/es/a2.js`.

---

## 7. Audita metodoloģija

| Rīks | Komanda |
|------|---------|
| Kolektors | `node scripts/audit-es-a1-a2-collect.js` |
| Orķestrators | `node scripts/run-es-a1-a2-full-audit.js` |
| Strukturālā paritāte | `node scripts/audit-language-parity.js --lang=es` |
| Study dizains | `node scripts/validate-study-design.js --lang=es` |
| Mojibake | `node scripts/audit-mojibake.js --lang=es` |
| Tulkošanas | `node scripts/audit-translations.js --lang=es` |
| DE read-only | `node scripts/verify-es-de-compliance.js` |
| Syntax | `node --check data/es/a1.js` / `a2.js` |

**Neveikts šajā auditā (ārpus A1+A2 apjoma vai nav Luna/OWNER vēstures):**

- Pilns lingvistiskais GPT-5.6 Luna audits katram laukam (kā ET A1 FULL_DISCOVERY)
- Ekrānuzņēmumu vizuālā salīdzināšana (standarts §2.4) — ieteicams pēc strukturālo labojumu
- B1–C2, sentences, verbs, Kurss — nav šī audita apjomā

**OWNER review:** Nav konfigurēts `audit-post-run.js` modulis `es-a1-a2`; šis ir sākotnējais READ-ONLY atradumu audits bez OWNER artefaktiem.

---

## 8. Artefakti

| Fails | Apraksts |
|-------|----------|
| `reports/es-de-a1-a2-full-audit.md` | Šis ziņojums |
| `reports/temp/es-de-a1-a2-audit-data.json` | Deterministiskie atradumi (pilns) |
| `reports/temp/es-de-a1-a2-full-audit.json` | Kopsavilkuma JSON |
| `reports/temp/es-parity.json` | `audit-language-parity` izvade |
| `reports/temp/es-validate-study.json` | `validate-study-design` izvade |
| `reports/temp/es-mojibake.json` | Mojibake skenēšana |
| `reports/temp/es-de-compliance.json` | DE read-only pārbaude |
