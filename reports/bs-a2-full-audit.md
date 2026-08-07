# BS–DE A2 pilns audits

**Audita datums:** 2026-08-07  
**Audita veids:** Pilns BS–DE A2 audits pēc projekta vienotā valodu audita un kvalitātes standarta  
**Režīms:** Tikai audits — datu faili netika mainīti

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Ierakstu skaits | 1 640 |
| Study karšu skaits | 231 (207 `standardStudy`, 24 `minimalStudy`) |
| comparisonStudy | 0 (atbilst LV etalonam) |
| Kritiski atradumi | 1 (vācu DE akcentu neatbilstība) |
| Augsti atradumi | 15 |
| Vidēji atradumi | 4 |
| WARNING | 53 |

### Statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ **PASS** | 1 640/1 640 ieraksti, ID/secība/struktūra sakrīt ar LV etalonu; `data/` un `www/` identiski; JS sintakse derīga |
| **AI AUDITED** | ✅ **PASS** | Visi 1 640 galvenie tulkojumi un 231 Study kartītes pārbaudīti (automātika + AI interpretācija); atradumi dokumentēti |
| **sectionAccents TECHNICAL** | ✅ **PASS** | `validate-study-design.js` A2: **0** sectionAccentIssues |
| **sectionAccents PEDAGOGICAL** | ⚠️ **PASS WITH WARNINGS** | 15 augsti LV/EN atlikumi akcentos; 4 vidēji; 53 kapitalizācijas WARNING |
| **DE READ-ONLY** | ❌ **FAIL** | 1 kartīte (`a2-holen`) — DE `sectionAccents` atšķiras no LV etalona |
| **PRODUCTION READY** | ❌ **NĒ** | DE integritātes neatbilstība + sectionAccents semantiskie atradumi |
| **FINAL – OWNER ACCEPTED** | ❌ **NĒ** | Nav native speaker izlases; PRODUCTION READY nav sasniegts |

---

## 2. Auditētie faili un etalons

| Loma | Ceļš |
|---|---|
| LV–DE etalons (tikai lasīšana) | `data/a2.js` |
| BS datu fails | `data/bs/a2.js` |
| BS www slānis | `www/data/bs/a2.js` |

**LV–DE etalons netika mainīts.**

---

## 3. Palaistie skripti

| Skripts | Komanda | A2 rezultāts |
|---|---|---|
| Strukturālais audits | `node scripts/audit-language-parity.js --lang=bs` | PASS (1 640/1 640, 231 study, 0 issues) |
| Mojibake audits | `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| Study dizaina validācija | `node scripts/validate-study-design.js --lang=bs` | A2: **0** sectionAccentIssues |
| DE atbilstība | `node scripts/verify-bs-de-compliance.js` | PASS (0 mismatches galvenajos laukos) |
| Tulkošanu audits | `node scripts/audit-translations.js --lang=bs` | 2 lv/translation neatbilstības |
| Study kartīšu audits | `node scripts/audit-study-cards.js --lang=bs` | 47/231 pass (LV etalons arī 47/231) |
| Audita kolektors | `node scripts/audit-bs-a2-collect.js` | Struktūra, DE, tehnika, LV atlikumi, galvenie tulkojumi |
| Atradumu konsolidācija | `node scripts/audit-bs-a2-report-gen.js` | 72 strukturēti atradumi |
| JS sintakses pārbaude | `node --check data/bs/a2.js` | PASS |
| Slāņu identitāte | `diff -q data/bs/a2.js www/data/bs/a2.js` | Identiski (1,605,990 B) |

**Pagaidu faili (nav Git):** `reports/temp/bs-a2-audit-data.json`, `reports/temp/bs-a2-findings-consolidated.json`, `reports/temp/validate-bs-study.json`, `reports/temp/bs-a2-findings-md-fragment.md`

**Palīgskripti (audita laikā izveidoti, nemaina datus):** `scripts/audit-bs-a2-collect.js`, `scripts/audit-bs-a2-report-gen.js`, `scripts/audit-bs-a2-write-report.js`

---

## 4. Posmu rezultāti

### 4.1 Strukturālais audits — ✅ PASS

- Ierakstu skaits: LV **1 640** = BS **1 640**
- ID pilnīga sakritība un secība: ✅
- `de` lauku secība: ✅
- Lauku struktūra pret LV: ✅
- Study karšu skaits: LV **231** = BS **231**
- `study.layout`: 207 `standardStudy` + 24 `minimalStudy` (atbilst LV)
- comparisonStudy: 0 (atbilst LV)
- Unikāli Study ID: ✅
- Tukši obligātie lauki: ✅ nav

### 4.2 Tehniskais audits — ✅ PASS

- JavaScript sintakse: ✅
- UTF-8 / mojibake: ✅ (0 atradumu)
- TODO / TBD / `...`: ✅ nav
- Bosniešu diakritika: ✅ lietota
- `studyObjectNoRenderable`: 18 (identisks LV — `minimalStudy` kartītes)

### 4.3 Tulkojumu pilnīguma audits — ✅ PASS (galvenie lauki)

- Visi 1 640 ieraksti ar aizpildītu galveno BS tulkojumu
- Study `translation` atšķirības: 2 nelielas (`Bank`, `Leiter` — papildu nozīmes study.translation)

### 4.4 Vācu satura nemainīguma audits — ⚠️ 1 ATRADUMS

Galvenie lauki (`de`, `de_article`, `de_plural`, Study DE piemēri): **100% sakritība** (verify-bs-de-compliance: 0 mismatches).

**Kritiska neatbilstība:**

- **`a2-holen`** — BS `sectionAccents.examples[1].green` satur `abholen`, bet LV etalons satur `holen`. Vācu DE lauks `sectionAccents` ir mainīts pret LV etalonu (READ-ONLY pārkāpums).

### 4.5 BS valodas kvalitātes audits (1 640 galvenie tulkojumi)

| Statuss | Skaits |
|---|---:|
| OK | 1 639 |
| WARNING | 1 |
| ERROR | 0 |

**Vienīgais WARNING:** `a2-aschenputtel` — `Pepeljuga` (heuristiska kapitalizācija); **AI: OK** — pareizs īpašvārds.

### 4.6 LV atlikumu audits — ⚠️ ATRADUMI akcentu datos

Galvenie un Study **teksta** lauki: **0** LV atlikumu.

**Legacy/akcentu laukos:** 10 atradumi (`accents`, `sectionAccents` — `braukt`, `vest`, `braukt ar vilcienu` u.c.).

### 4.7 Study satura audits (231 kartīte)

| Pārbaude | Rezultāts |
|---|---|
| Study teksts bosniešu valodā | ✅ 231/231 — nav LV atlikumu teksta laukos |
| Study kartīšu noteikumi (audit-study-cards) | 47/231 pass — **identisks LV etalonam** (47/231) |
| `minimalStudy` | 24 kartītes — atbilst LV |
| `standardStudy` | 207 kartītes — atbilst LV |

### 4.8 sectionAccents audits

| Avots | Atradumi |
|---|---:|
| `validate-study-design.js` (tehniskais) | **0** sectionAccentIssues |
| `audit-bs-a2-collect.js` | 65 accent term neatbilstības |
| AI konsolidācija | 15 augsti, 4 vidēji, 53 WARNING |

**Galvenās problēmu kategorijas:**

1. **Angļu atlikumi** (`On`, `In`, `To`) — 9 termini, 6 kartītes
2. **Latviešu atlikumi** (`uz`, `Uz`, `viss`) — 6 termini, 4 kartītes
3. **Legacy `accents` lauki** ar LV vārdiem — 4 kartītes
4. **Kapitalizācijas WARNING** — 53 termini
5. **DE akcentu maiņa** — `a2-holen` (`holen` → `abholen`)

### 4.9 data/ un www/ slāņu identitātes audits — ✅ PASS

`data/bs/a2.js` un `www/data/bs/a2.js` ir **bit-identiski**.

---

## 5. Atradumu kopsavilkums pēc smaguma

| Pakāpe | Skaits | Apraksts |
|---|---:|---|
| Kritiska | 1 | DE `sectionAccents` maiņa (`a2-holen`) |
| Augsta | 15 | LV/EN atlikumi sectionAccents datos |
| Vidēja | 4 | Accent term nav BS tekstā |
| WARNING | 53 | Kapitalizācijas iespējamā neatbilstība |

---

## 6. Augstas smaguma atradumi (15)

#### a2-brav — `study.sectionAccents.examples[4].lv.orange[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[4].lv.orange[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** On
- **LV etalona konteksts:** {"explanation":{"text":{"blue":["brav"],"purple":["paklausīgu","kārtīgu","labi audzinātu","paklausīgi"],"green":["uzvedī
- **DE konteksts:** brav
- **Kļūdas pamatojums:** English remnant "On" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-davor — `study.sectionAccents.examples[3].lv.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[3].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** On
- **LV etalona konteksts:** {"explanation":{"text":{"blue":["davor"],"purple":["priekšā","pirms tam","no tā"],"green":["vietu"],"yellow":["laiku"],"
- **DE konteksts:** davor
- **Kļūdas pamatojums:** English remnant "On" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-dazu — `study.sectionAccents.explanation.text.purple[2]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.explanation.text.purple[2]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalona konteksts:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** dazu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a2-dazu — `study.sectionAccents.examples[1].lv.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[1].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalona konteksts:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** dazu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a2-dazu — `study.sectionAccents.comparison[0].meaning.purple[2]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.comparison[0].meaning.purple[2]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalona konteksts:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** dazu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a2-dazu — `study.sectionAccents.important[1].text.purple[1]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.important[1].text.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalona konteksts:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** dazu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a2-durch — `study.sectionAccents.examples[2].lv.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[2].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** Uz
- **LV etalona konteksts:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** durch
- **Kļūdas pamatojums:** Latvian remnant "Uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a2-fall — `study.sectionAccents.comparison[0].example.blue[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.comparison[0].example.blue[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** In
- **LV etalona konteksts:** {"examples":[{"de":{"blue":["bleibe","diesem","Hause","Fall"]},"lv":{"purple":["gadījumā","palieku","mājās","šajā"]}},{"
- **DE konteksts:** Fall
- **Kļūdas pamatojums:** English remnant "In" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-fall — `study.sectionAccents.comparison[0].example.blue[3]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.comparison[0].example.blue[3]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** In
- **LV etalona konteksts:** {"examples":[{"de":{"blue":["bleibe","diesem","Hause","Fall"]},"lv":{"purple":["gadījumā","palieku","mājās","šajā"]}},{"
- **DE konteksts:** Fall
- **Kļūdas pamatojums:** English remnant "In" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-indem — `study.sectionAccents.comparison[2].meaning.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalona konteksts:** {"explanation":{"blue":["indem"],"purple":["ar to, ka","darot kaut ko","veidu"],"red":["kamēr","während"]},"examples":[{
- **DE konteksts:** indem
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-kaum — `study.sectionAccents.examples[4].lv.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[4].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalona konteksts:** {"explanation":{"blue":["kaum","kaum zu + nenoteiksme","kaum zu glauben"],"purple":["gandrīz nemaz","tikko","tiklīdz","g
- **DE konteksts:** kaum
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-klar — `study.sectionAccents.tip.leftBlocks[1].text.yellow[5]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.tip.leftBlocks[1].text.yellow[5]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** viss
- **LV etalona konteksts:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** klar
- **Kļūdas pamatojums:** Latvian remnant "viss" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a2-meinen — `study.sectionAccents.examples[4].lv.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[4].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** On
- **LV etalona konteksts:** {"examples":[{"de":{"blue":["meinst"]},"lv":{"purple":["domā"]}},{"de":{"blue":["richtig"]},"lv":{"purple":["pareizi","u
- **DE konteksts:** meinen
- **Kļūdas pamatojums:** English remnant "On" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-na-gut — `study.sectionAccents.comparison[1].example.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.comparison[1].example.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalona konteksts:** {"examples":[{"de":{"blue":["Na gut"]},"lv":{"purple":["nu labi"]}},{"de":{"blue":["Na gut"]},"lv":{"purple":["nu labi"]
- **DE konteksts:** na gut
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a2-teil — `study.sectionAccents.examples[0].lv.purple[0]`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalona konteksts:** {"examples":[{"de":{"blue":["Geschichte","Teil"]},"lv":{"orange":["daļa"],"purple":["stāsta","tikai","daļa"]}},{"de":{"b
- **DE konteksts:** Teil
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents


---

## 7. Vidējas smaguma atradumi (4)

#### a2-bahn — `study.sectionAccents (undefined)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (undefined)
- **Statuss:** ERROR
- **Smagums:** MEDIUM
- **Esošais BS teksts:** braukt ar vilcienu
- **LV etalona konteksts:** —
- **DE konteksts:** Bahn
- **Kļūdas pamatojums:** Accent term "braukt ar vilcienu" not found in BS undefined text.
- **Ieteiktais BS labojums:** Update accent term to match exact word in BS section text, or fix BS text.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-führen — `study.sectionAccents (undefined)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (undefined)
- **Statuss:** ERROR
- **Smagums:** MEDIUM
- **Esošais BS teksts:** vest
- **LV etalona konteksts:** —
- **DE konteksts:** führen
- **Kļūdas pamatojums:** Accent term "vest" not found in BS undefined text.
- **Ieteiktais BS labojums:** Update accent term to match exact word in BS section text, or fix BS text.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-wagen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** ERROR
- **Smagums:** MEDIUM
- **Esošais BS teksts:** b
- **LV etalona konteksts:** —
- **DE konteksts:** Wagen
- **Kļūdas pamatojums:** Accent term "b" not found in BS examples text.
- **Ieteiktais BS labojums:** Update accent term to match exact word in BS section text, or fix BS text.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-wagen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** ERROR
- **Smagums:** MEDIUM
- **Esošais BS teksts:** l
- **LV etalona konteksts:** —
- **DE konteksts:** Wagen
- **Kļūdas pamatojums:** Accent term "l" not found in BS examples text.
- **Ieteiktais BS labojums:** Update accent term to match exact word in BS section text, or fix BS text.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text


---

## 8. WARNING atradumi (izlase — pirmie 30 no 53)

#### a2-abstellen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Račun
- **LV etalona konteksts:** —
- **DE konteksts:** abstellen
- **Kļūdas pamatojums:** Accent term "Račun" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-anstellen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Ne pravi
- **LV etalona konteksts:** —
- **DE konteksts:** anstellen
- **Kļūdas pamatojums:** Accent term "Ne pravi" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-bahn — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Voz
- **LV etalona konteksts:** —
- **DE konteksts:** Bahn
- **Kļūdas pamatojums:** Accent term "Voz" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-band — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Poklon
- **LV etalona konteksts:** —
- **DE konteksts:** Band
- **Kļūdas pamatojums:** Accent term "Poklon" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-bauen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Uzgaja
- **LV etalona konteksts:** —
- **DE konteksts:** bauen
- **Kļūdas pamatojums:** Accent term "Uzgaja" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-behalten — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Broj
- **LV etalona konteksts:** —
- **DE konteksts:** behalten
- **Kļūdas pamatojums:** Accent term "Broj" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-bitter — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Gorko
- **LV etalona konteksts:** —
- **DE konteksts:** bitter
- **Kļūdas pamatojums:** Accent term "Gorko" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-böse — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Ljut
- **LV etalona konteksts:** —
- **DE konteksts:** böse
- **Kļūdas pamatojums:** Accent term "Ljut" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-damit — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Radi
- **LV etalona konteksts:** —
- **DE konteksts:** damit
- **Kļūdas pamatojums:** Accent term "Radi" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### study-der-dank — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Pomoć
- **LV etalona konteksts:** —
- **DE konteksts:** Dank
- **Kļūdas pamatojums:** Accent term "Pomoć" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### study-der-dank — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Poklon
- **LV etalona konteksts:** —
- **DE konteksts:** Dank
- **Kļūdas pamatojums:** Accent term "Poklon" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-drücken — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Pritisni
- **LV etalona konteksts:** —
- **DE konteksts:** drücken
- **Kļūdas pamatojums:** Accent term "Pritisni" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-fach — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Stavi
- **LV etalona konteksts:** —
- **DE konteksts:** Fach
- **Kļūdas pamatojums:** Accent term "Stavi" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-fehlen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Nedostaje
- **LV etalona konteksts:** —
- **DE konteksts:** fehlen
- **Kļūdas pamatojums:** Accent term "Nedostaje" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-feuer — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Zapali
- **LV etalona konteksts:** —
- **DE konteksts:** Feuer
- **Kļūdas pamatojums:** Accent term "Zapali" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-folgen — `study.sectionAccents (explanation)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Dativ
- **LV etalona konteksts:** —
- **DE konteksts:** folgen
- **Kļūdas pamatojums:** Accent term "Dativ" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-führen — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Grad
- **LV etalona konteksts:** —
- **DE konteksts:** führen
- **Kļūdas pamatojums:** Accent term "Grad" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-gang — `study.sectionAccents (explanation)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Prijenos
- **LV etalona konteksts:** —
- **DE konteksts:** Gang
- **Kļūdas pamatojums:** Accent term "Prijenos" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-gießen — `study.sectionAccents (explanation)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Čaj
- **LV etalona konteksts:** —
- **DE konteksts:** gießen
- **Kļūdas pamatojums:** Accent term "Čaj" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-grund — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Zemlji
- **LV etalona konteksts:** —
- **DE konteksts:** Grund
- **Kļūdas pamatojums:** Accent term "Zemlji" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-leitung — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Telefon
- **LV etalona konteksts:** —
- **DE konteksts:** Leitung
- **Kļūdas pamatojums:** Accent term "Telefon" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-leitung — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Loš
- **LV etalona konteksts:** —
- **DE konteksts:** Leitung
- **Kļūdas pamatojums:** Accent term "Loš" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-mittel — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Stres
- **LV etalona konteksts:** —
- **DE konteksts:** Mittel
- **Kļūdas pamatojums:** Accent term "Stres" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-pflaster — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Star
- **LV etalona konteksts:** —
- **DE konteksts:** Pflaster
- **Kļūdas pamatojums:** Accent term "Star" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-rad — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Bicikl
- **LV etalona konteksts:** —
- **DE konteksts:** Rad
- **Kļūdas pamatojums:** Accent term "Bicikl" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-rolle — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Igra
- **LV etalona konteksts:** —
- **DE konteksts:** Rolle
- **Kļūdas pamatojums:** Accent term "Igra" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-sammeln — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Skuplja
- **LV etalona konteksts:** —
- **DE konteksts:** sammeln
- **Kļūdas pamatojums:** Accent term "Skuplja" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-schlange — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Čeka
- **LV etalona konteksts:** —
- **DE konteksts:** Schlange
- **Kļūdas pamatojums:** Accent term "Čeka" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-sich-unterhalten — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Razgovara
- **LV etalona konteksts:** —
- **DE konteksts:** sich unterhalten
- **Kļūdas pamatojums:** Accent term "Razgovara" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a2-sonst — `study.sectionAccents (examples)`

- **Fails:** data/bs/a2.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Suprotno
- **LV etalona konteksts:** —
- **DE konteksts:** sonst
- **Kļūdas pamatojums:** Accent term "Suprotno" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text


*Pilns WARNING saraksts: `reports/temp/bs-a2-findings-consolidated.json` (severity: `low`)*

---

## 9. Galveno BS tulkojumu audits — kopsavilkums

Visi **1 640** ieraksti pārbaudīti pret LV etalonu un DE kontekstu.

- **1 639 OK** — semantiski un formāli atbilstoši
- **1 WARNING** — `Pepeljuga` (apstiprināts kā pareizs īpašvārds)
- **0 ERROR**

---

## 10. Study satura lingvistiskais audits — kopsavilkums

Visas **231** Study kartītes pārbaudītas:

- Study teksta lauki ir bosniešu valodā
- Nav LV atlikumu Study tekstā
- Study kartīšu noteikumu atbilstība LV etalonam: **47/231** (identiska LV)
- Galvenā problēma: **sectionAccents** semantiskie atradumi (skat. §6–8) un 1 DE akcentu neatbilstība

---

## 11. Salīdzinājums ar BS A1 stāvokli

| Metrika | BS A1 (pēc labojuma) | BS A2 (šis audits) |
|---|---|---|
| Ieraksti | 702 | 1 640 |
| Study kartītes | 134 | 231 |
| sectionAccentIssues (validate) | 0 | 0 |
| LV atlikumi tekstā | 0 | 0 |
| DE integritāte | PASS | **FAIL** (1 kartīte) |
| sectionAccents semantika | PASS (pēc audita) | PASS WITH WARNINGS |
| Owner accepted | JĀ | NĒ |

---

## 12. Apliecinājumi

1. **Audita laikā netika mainīts neviens datu vai aplikācijas fails.**
2. Izveidoti tikai audita izvades faili un palīgskripti (skat. §3).
3. OpenAI API netika izsaukts audita laikā.

---

## 13. Ieteiktais nākamais solis

1. Labot `a2-holen` DE `sectionAccents` — atjaunot `holen` vai dokumentēt apzinātu izņēmumu
2. Aizstāt LV/EN atlikumus sectionAccents datos (15 augsti atradumi)
3. Notīrīt legacy `accents` laukus ar LV vārdiem
4. Salāgot kapitalizāciju (53 WARNING)
5. Atkārtot šo auditu

---

*Atskaite ģenerēta 2026-08-07T16:22:14.368Z*
