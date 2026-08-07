# BS–DE A1 pilns audits

**Audita datums:** 2026-08-06  
**Audita veids:** Pilns BS–DE A1 audits pēc projekta vienotā valodu audita un kvalitātes standarta  
**Režīms:** Tikai audits — datu faili netika mainīti

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Ierakstu skaits | 702 |
| Study karšu skaits | 134 (visas `standardStudy`) |
| comparisonStudy | 0 (atbilst LV etalonam) |
| Kritiski atradumi | 0 |
| Augsti atradumi | 82 |
| Vidēji atradumi | 275 |
| Zemi atradumi | 0 |
| WARNING | 57 |

### Statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ **PASS** | 702/702 ieraksti, ID/secība/struktūra sakrīt ar LV etalonu; `data/` un `www/` identiski; JS sintakse derīga |
| **AI AUDITED** | ✅ **PASS** | Visi 702 galvenie tulkojumi un 134 Study kartītes pārbaudīti (automātika + AI interpretācija); atradumi dokumentēti |
| **PRODUCTION READY** | ❌ **NE** | 82 augsti + 275 vidēji sectionAccents atradumi; nepieciešama labošanas kārta |
| **FINAL – OWNER ACCEPTED** | ❌ **NE** | Nav veikta native speaker izlase; PRODUCTION READY nav sasniegts |

---

## 2. Auditētie faili un etalons

| Loma | Ceļš |
|---|---|
| LV–DE etalons (tikai lasīšana) | `data/a1.js` |
| BS datu fails | `data/bs/a1.js` |
| BS www slānis | `www/data/bs/a1.js` |

**LV–DE etalons netika mainīts.**

---

## 3. Palaistie skripti

| Skripts | Komanda | Rezultāts |
|---|---|---|
| Strukturālais audits | `node scripts/audit-language-parity.js --lang=bs` | A1: PASS (702/702, 134 study, 0 issues) |
| Mojibake audits | `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| Study dizaina validācija | `node scripts/validate-study-design.js --lang=bs` | A1: **1031** sectionAccentIssues |
| Audita kolektors | `node scripts/audit-bs-a1-collect.js` | Struktūra, DE integritāte, tehnika, LV atlikumi, galvenie tulkojumi |
| Atradumu konsolidācija | `node scripts/audit-bs-a1-report-gen.js` | 414 strukturēti atradumi |
| JS sintakses pārbaude | `node --check data/bs/a1.js` | PASS |
| Slāņu identitāte | `diff -q data/bs/a1.js www/data/bs/a1.js` | Identiski (598 340 B) |

**Pagaidu faili (nav Git):** `reports/temp/bs-a1-audit-data.json`, `reports/temp/bs-a1-findings-consolidated.json`, `reports/temp/validate-bs-study.json`, `reports/temp/bs-a1-ai-findings.json`, `reports/temp/bs-a1-findings-md-fragment.md`

**Palīgskripti (audita laikā izveidoti, nemaina datus):** `scripts/audit-bs-a1-collect.js`, `scripts/audit-bs-a1-report-gen.js`, `scripts/audit-bs-a1-write-report.js`

---

## 4. Posmu rezultāti

### 4.1 Strukturālais audits — ✅ PASS

- Ierakstu skaits: LV **702** = BS **702**
- ID pilnīga sakritība un secība: ✅
- `de` lauku secība: ✅
- Lauku struktūra pret LV: ✅ (nav trūkstošu/lieku lauku)
- Study karšu skaits: LV **134** = BS **134**
- `study.layout`: visas **standardStudy** (134/134), atbilst LV
- comparisonStudy: 0 (atbilst LV)
- Unikāli Study ID: ✅
- Tukši obligātie lauki: ✅ nav

### 4.2 Tehniskais audits — ✅ PASS

- JavaScript sintakse: ✅ (`node --check`)
- UTF-8 / mojibake: ✅ (0 atradumu)
- Bojātas diakritiskās zīmes: ✅ nav
- TODO / TBD / `...` / Markdown koda bloki: ✅ nav
- `Translation:` / `Tulkojums:`: ✅ nav
- Bosniešu diakritika (č, ć, đ, š, ž): ✅ lietota datu saturā
- Tehniskie identifikatori un HTML: ✅ nav bojājumu

### 4.3 Tulkojumu pilnīguma audits — ✅ PASS (galvenie lauki)

- Visi 702 ieraksti ar aizpildītu galveno BS tulkojumu (`lv` lauks)
- Study `translation` atšķirības no galvenā: **0** (metodoloģiski konsekventi)

### 4.4 Vācu satura nemainīguma audits — ✅ PASS

100% sakritība starp `data/a1.js` un `data/bs/a1.js`:

- `de`, `de_article`, `de_plural`
- Study vācu piemēri, virsraksti, termini
- `level`, `layout`, tehniskie lauki, ID

**Neatbilstību skaits: 0**

### 4.5 BS valodas kvalitātes audits (702 galvenie tulkojumi)

| Statuss | Skaits |
|---|---:|
| OK | 701 |
| WARNING | 1 |
| ERROR | 0 |

**AI interpretācija:** 701 ieraksts semantiski atbilst LV nozīmei un DE kontekstam; lietotas pamatformas (infinitīvs darbības vārdiem, nominatīvs lietvārdiem). Bosniešu diakritika un dabiskās formas lielākoties konsekventas.

**Vienīgais WARNING:**

- `a1-Weihnachten-648` — `Božić` (heuristiska kapitalizācija); **AI: OK** — pareizs īpašvārds/svētku nosaukums bosniešu valodā.

### 4.6 LV atlikumu audits — ✅ PASS (galvenie un Study teksta lauki)

Automātiskā regex pārbaude galvenajos un Study teksta laukos: **0** LV atlikumu.

**Svarīgi:** sectionAccents satur **82 augstas smaguma** atlikumus (skat. §4.8) — tie nav lietotājam redzamā Study tekstā, bet ir datu kļūda akcentu sistēmā.

### 4.7 Study satura audits (134 kartītes) — ⚠️ ATRADUMI sectionAccents

| Pārbaude | Rezultāts |
|---|---|
| Study teksts bosniešu valodā | ✅ 134/134 — nav LV atlikumu teksta laukos |
| Dabiskums / mehāniskums | ✅ AI: paraugi (sprechen, klein, an, bleiben, wetter, liter, machen, sein, haben, geben u.c.) dabiski |
| Pazaudēts/pievienots saturs | ✅ nav sistemātisku noviržu |
| `a1-liter` bez `examples` | ✅ **nav kļūda** — LV etalons arī bez piemēriem, tikai `explanation` |
| sectionAccents | ❌ **82 augsti + 275 vidēji + 57 WARNING** |

**standardStudy (134):** visas kartītes ar `explanation`; piemēri atbilst LV etalonam (izņemot `a1-liter`, kur LV arī bez piemēriem). Nav nepamatotu comparison sadaļu.

**comparisonStudy (0):** nav (atbilst LV).

### 4.8 sectionAccents un highlight audits — ❌ FAIL

| Avots | Atradumi |
|---|---:|
| `validate-study-design.js` (A1) | 1031 sectionAccentIssues |
| `audit-bs-a1-collect.js` | 439 accent term neatbilstības |
| AI konsolidācija | 82 augsti, 275 vidēji, 57 WARNING |

**Galvenās problēmu kategorijas:**

1. **Latviešu atlikumi akcentos** (mazs, teikt, iet, lietus, laiks, reiz) — 5 Study kartītes, 17 termini
2. **Angļu atlikumi** (At, To) — 6 kartītes, 13 termini — nepareiza sectionAccents lokalizācija
3. **Latviešu prievārdi akcentos** (pie, uz) — 17 kartītes — nav aizstāti ar bosniešu ekvivalentiem (na, kod, u…)
4. **Kapitalizācijas neatbilstības** — 57 WARNING — termins eksistē tekstā ar citu reģistru
5. **Citi accent term neatbilstības** — 94 kartītes — termins nav atrodams BS sadaļas tekstā

**DE apakšvirsrakstu krāsošana:** nav pārbaudīta rendererī (datu audits); DE lauki sectionAccents `de` zaros atbilst LV struktūrai.

### 4.9 data/ un www/ slāņu identitātes audits — ✅ PASS

`data/bs/a1.js` un `www/data/bs/a1.js` ir **bit-identiski** (598 340 baiti).

---

## 5. Atradumu kopsavilkums pēc smaguma

| Pakāpe | Skaits | Apraksts |
|---|---:|---|
| Kritiska | 0 | — |
| Augsta | 82 | sectionAccents: LV/EN atlikumi, neadaptēti `pie`/`uz` |
| Vidēja | 275 | sectionAccents: termins nav BS tekstā |
| Zema | 0 | — |
| WARNING | 57 | Kapitalizācijas iespējamā neatbilstība |

---

## 6. Augstas smaguma atradumi (82)

#### a1-klein-study — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** mazs
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** klein
- **Kļūdas pamatojums:** Latvian remnant "mazs" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-klein-study — study.sectionAccents.explanation.green[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.green[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** Mazs
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** klein
- **Kļūdas pamatojums:** Latvian remnant "Mazs" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-klein-study — study.sectionAccents.tip[0].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip[0].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** mazs
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** klein
- **Kļūdas pamatojums:** Latvian remnant "mazs" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-an — study.sectionAccents.examples[0].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** At
- **LV etalons:** {"examples":[{"de":{"blue":["an"]},"lv":{"purple":["pie","uz"]}},{"de":{"blue":["am"]},"lv":{"purple":["pie"]}},{"de":{"
- **DE konteksts:** an
- **Kļūdas pamatojums:** English remnant "At" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-an — study.sectionAccents.examples[0].lv.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["an"]},"lv":{"purple":["pie","uz"]}},{"de":{"blue":["am"]},"lv":{"purple":["pie"]}},{"de":{"
- **DE konteksts:** an
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-an — study.sectionAccents.examples[1].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[1].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** At
- **LV etalons:** {"examples":[{"de":{"blue":["an"]},"lv":{"purple":["pie","uz"]}},{"de":{"blue":["am"]},"lv":{"purple":["pie"]}},{"de":{"
- **DE konteksts:** an
- **Kļūdas pamatojums:** English remnant "At" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-an — study.sectionAccents.examples[2].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[2].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** At
- **LV etalons:** {"examples":[{"de":{"blue":["an"]},"lv":{"purple":["pie","uz"]}},{"de":{"blue":["am"]},"lv":{"purple":["pie"]}},{"de":{"
- **DE konteksts:** an
- **Kļūdas pamatojums:** English remnant "At" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-an — study.sectionAccents.comparison[0].example.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].example.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** an
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-an — study.sectionAccents.comparison[1].example.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].example.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** an
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-an — study.sectionAccents.comparison[2].example.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].example.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** an
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-an — study.sectionAccents.tip.left.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip.left.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** an
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-an — study.sectionAccents.important[0].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[0].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** an
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-auf — study.sectionAccents.examples[0].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["auf"]},"lv":{"purple":["uz"]}},{"de":{"blue":["auf"]},"lv":{"purple":["uz"]}},{"de":{"blue"
- **DE konteksts:** auf
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-auf — study.sectionAccents.examples[1].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[1].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["auf"]},"lv":{"purple":["uz"]}},{"de":{"blue":["auf"]},"lv":{"purple":["uz"]}},{"de":{"blue"
- **DE konteksts:** auf
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-auf — study.sectionAccents.examples[2].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[2].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["auf"]},"lv":{"purple":["uz"]}},{"de":{"blue":["auf"]},"lv":{"purple":["uz"]}},{"de":{"blue"
- **DE konteksts:** auf
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-auf — study.sectionAccents.comparison[0].example.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].example.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** auf
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-auf — study.sectionAccents.comparison[1].example.green[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].example.green[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** auf
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-auf — study.sectionAccents.tip.left.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip.left.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** auf
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-auf — study.sectionAccents.important[0].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[0].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** auf
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-auf — study.sectionAccents.important[1].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[1].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** auf
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-aufs — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** aufs
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-aufs — study.sectionAccents.comparison[2].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** aufs
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-aufs — study.sectionAccents.comparison[4].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** aufs
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-aufs — study.sectionAccents.comparison[4].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** aufs
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-bei — study.sectionAccents.examples[0].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** At
- **LV etalons:** {"examples":[{"de":{"blue":["bei"]},"lv":{"purple":["pie"]}},{"de":{"blue":["bei"]},"lv":{"purple":["uzņēmumā"]}},{"de":
- **DE konteksts:** bei
- **Kļūdas pamatojums:** English remnant "At" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-bleiben — study.sectionAccents.comparison[1].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** iet
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** bleiben
- **Kļūdas pamatojums:** Latvian remnant "iet" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-dass — study.sectionAccents.examples[0].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["dass"]},"lv":{"purple":["ka"]}},{"de":{"blue":["dass"]},"lv":{"purple":["ka"]}},{"de":{"blu
- **DE konteksts:** dass
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-dass — study.sectionAccents.examples[1].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[1].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["dass"]},"lv":{"purple":["ka"]}},{"de":{"blue":["dass"]},"lv":{"purple":["ka"]}},{"de":{"blu
- **DE konteksts:** dass
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-dass — study.sectionAccents.examples[2].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[2].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"examples":[{"de":{"blue":["dass"]},"lv":{"purple":["ka"]}},{"de":{"blue":["dass"]},"lv":{"purple":["ka"]}},{"de":{"blu
- **DE konteksts:** dass
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-erst — study.sectionAccents.tip.left.green[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip.left.green[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** erst
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-fahren — study.sectionAccents.comparison[2].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** iet
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** fahren
- **Kļūdas pamatojums:** Latvian remnant "iet" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-im — study.sectionAccents.comparison[3].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[3].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** im
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-in — study.sectionAccents.explanation.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** in
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-ins — study.sectionAccents.comparison[2].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** ins
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-ins — study.sectionAccents.comparison[4].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** ins
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-ins — study.sectionAccents.comparison[4].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** ins
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-laufen — study.sectionAccents.explanation.purple[2]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[2]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** iet
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** laufen
- **Kļūdas pamatojums:** Latvian remnant "iet" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-laufen — study.sectionAccents.comparison[1].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** iet
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** laufen
- **Kļūdas pamatojums:** Latvian remnant "iet" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-laufen — study.sectionAccents.important[0].purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[0].purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** iet
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** laufen
- **Kļūdas pamatojums:** Latvian remnant "iet" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-mit — study.sectionAccents.comparison[2].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** mit
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-mit — study.sectionAccents.comparison[3].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[3].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** mit
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-mit — study.sectionAccents.comparison[3].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[3].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** mit
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-nach — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** nach
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-nach — study.sectionAccents.examples[0].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[0].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"explanation":{"blue":["nach","nach Hause"],"purple":["uz","pēc","uz mājām"],"green":["pilsētām","valstīm","laiku"]},"e
- **DE konteksts:** nach
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-nach — study.sectionAccents.comparison[0].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** nach
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-nach — study.sectionAccents.comparison[1].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** nach
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-nach — study.sectionAccents.comparison[1].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** nach
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-passen — study.sectionAccents.important[1].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[1].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** passen
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-sagen-study — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** teikt
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** sagen
- **Kļūdas pamatojums:** Latvian remnant "teikt" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-sagen-study — study.sectionAccents.explanation.green[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.green[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** Teikt
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** sagen
- **Kļūdas pamatojums:** Latvian remnant "Teikt" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-sagen-study — study.sectionAccents.tip[0].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip[0].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** teikt
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** sagen
- **Kļūdas pamatojums:** Latvian remnant "teikt" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-um — study.sectionAccents.examples[3].lv.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.examples[3].lv.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** To
- **LV etalons:** {"explanation":{"blue":["um","um ... zu"],"purple":["pulksten","ap","apkārt","lai"],"green":["laiku","vietu"]},"examples
- **DE konteksts:** um
- **Kļūdas pamatojums:** English remnant "To" in sectionAccents instead of Bosnian translation term.
- **Ieteiktais BS labojums:** Replace with Bosnian terms from examples (e.g. na, uz, kod) matching the BS lv field text.
- **Standarta punkts:** §11 sectionAccents — BS translations in accents

#### a1-um — study.sectionAccents.comparison[1].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** um
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-vom — study.sectionAccents.comparison[4].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** vom
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-vom — study.sectionAccents.comparison[4].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** vom
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-vor — study.sectionAccents.comparison[1].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** vor
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-vor — study.sectionAccents.important[0].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[0].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** vor
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-wetter — study.sectionAccents.comparison[1].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** Wetter
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-wetter — study.sectionAccents.comparison[2].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** lietus
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** Wetter
- **Kļūdas pamatojums:** Latvian remnant "lietus" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-wetter — study.sectionAccents.important[1].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[1].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** Wetter
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zu — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zu — study.sectionAccents.explanation.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zu — study.sectionAccents.comparison[0].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zu — study.sectionAccents.comparison[0].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zu — study.sectionAccents.comparison[1].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zu — study.sectionAccents.comparison[3].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[3].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.explanation.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[0].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[0].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[0].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[1].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[1].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[1].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[2].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[2].meaning.purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[2].meaning.purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[3].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[3].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.comparison[4].meaning.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.comparison[4].meaning.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.important[1].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[1].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** uz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "uz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zum — study.sectionAccents.important[1].purple[1]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.important[1].purple[1]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** pie
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Latvian remnant "pie" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zeit — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** Zeit
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-zeit — study.sectionAccents.tip[0].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip[0].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** laiks
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** Zeit
- **Kļūdas pamatojums:** Latvian remnant "laiks" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-einmal — study.sectionAccents.explanation.purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.explanation.purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** reiz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** einmal
- **Kļūdas pamatojums:** Latvian remnant "reiz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents

#### a1-einmal — study.sectionAccents.tip[1].purple[0]

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents.tip[1].purple[0]
- **Statuss:** ERROR
- **Smagums:** HIGH
- **Esošais BS teksts:** reiz
- **LV etalons:** (LV term in sectionAccents — should be Bosnian)
- **DE konteksts:** einmal
- **Kļūdas pamatojums:** Latvian remnant "reiz" in sectionAccents; BS section text uses Bosnian, accents must match BS text.
- **Ieteiktais BS labojums:** Replace with the exact Bosnian term from the corresponding BS study section (e.g. mali, reći, trčati, vrijeme, jednom).
- **Standarta punkts:** §11 sectionAccents — no LV words in accents


---

## 7. Vidējas smaguma atradumi (grupēti)

Kopā **275** accent term neatbilstības **94** Study kartītēs. Pilns saraksts: `reports/temp/bs-a1-findings-consolidated.json` (meklēt `severity: "medium"`).

 (GRUPĒTI PĒC ID)

Kopā **275** accent term neatbilstības **94** Study kartītēs.

| ID | DE | Terminu skaits | Piemēra termini |
|---|---|---:|---|
| a1-bringen | bringen | 11 | atnest, aiznest, Odneti i doneti, nehmen, holen |
| a1-finden | finden | 8 | viedokli, atrast, Razmotriti, Izgleda, Pronaći |
| a1-legen | legen | 8 | lietu, galda, gultas, virsmas, nolikt |
| a1-über | über | 8 | sarunu, virs, par, Gotovo, Glavna |
| a1-etwas | etwas | 7 | konteksta, lietu, daudzuma, kaut kas, nedaudz |
| a1-liegen | liegen | 7 | lietu, atrasties, Spavati, nolikt, Glavna |
| a1-fahren | fahren | 6 | autobusu, vilcienu, voditi, odvesti, Kod kuće |
| a1-laufen | laufen | 6 | Ljudi, filmu, programmu, skriet, darboties |
| a1-um | um | 6 | laiku, vietu, pulksten, ap, lai |
| a1-unter | unter | 6 | zem, starp, Glavna, Sumrak, Između |
| a1-aufs | aufs | 5 | kurp?, Pokret, virsmu, Na krovu, Skoči konju na leđa |
| a1-besuchen | besuchen | 5 | vietu, personu, apciemot, Posjećujemo, Djedove i bake |
| a1-eis | Eis | 5 | Vode, ledu, ledus, Glavna, Cokolada |
| a1-es | es | 5 | Ich, Er, Sie, Das, Es |
| a1-land | Land | 5 | Latviju, valsti, zemi, lauki, valsts |
| a1-machen | machen | 5 | Aktivnost, U frazama, Uraditi, Napraviti, pagatavot |
| a1-mit | mit | 5 | transportu, autobusu, vilcienu, Zajedno sa |
| a1-baden | baden | 4 | Plivati, jezeru, Plivam |
| a1-da | da | 4 | te, vietu, tur, Ovdje |
| a1-huebsch | hübsch | 4 | izskatu, Uredno • Lijepo, Atraktivno, Haljina |
| a1-ins | ins | 4 | in das, kurp?, Pokret, Spavati |
| a1-mal | Mal | 4 | reizi, notikumu, Dvaput, Glavna |
| a1-mögen | mögen | 4 | Muzika, Glavna, Kafa, Ich |
| a1-natuerlich | natürlich | 4 | protams, dabisks, Glavna, Machen |
| a1-passen | passen | 4 | Odjeća, Kladiti se, Odijevati, Zapamtite |
| a1-vor | vor | 4 | laiku, vietu, pirms, Kući |
| a1-wer | wer | 4 | was, kas, SZO, Sta |
| a1-zu | zu | 4 | Ljudima, Takođe, nenoteiksmi, Učiti se |
| a1-zug | Zug | 4 | vilciens, Vilciens, Nacrt, vaibsts |
| a1-frau | Frau | 3 | sieviete, sieva, Glavna |
| a1-fuer | für | 3 | Za • Za, par |
| a1-gut-study | gut | 3 | labs, labi, Po redu |
| a1-haben | haben | 3 | man ir, tev ir, Glavna |
| a1-halten | halten | 3 | transportu, Prestati, Razmotriti |
| a1-hoch-study | hoch | 3 | augsts, augstu, Visoko |
| a1-jung | jung | 3 | jauns, Imamo, Glavna |
| a1-können | können | 3 | prasmi, Biti u mogućnosti, umjeti |
| a1-kosten | kosten | 3 | Platiti, cenu, Osnovna |
| a1-nach | nach | 3 | laiku, Glavna, Gotovo |
| a1-oder | oder | 3 | vai, Kafa, Pravimo |
| a1-probieren | probieren | 3 | lietu, Glavna, metoda |
| a1-seite | Seite | 3 | lappuse, puse, Glavna |
| a1-verstehen | verstehen | 3 | saprast, saproti, Glavna |
| a1-wenn | wenn | 3 | Stanje, Kada, Ili |
| a1-besuch | Besuch | 2 | Muzeja, U posjeti |
| a1-bitte-study | Bitte | 2 | Zahtjev |
| a1-bleiben | bleiben | 2 | palikt, neiet prom |
| a1-geben | geben | 2 | dot, Nosi |
| a1-gross-study | groß | 2 | Liels, liels |
| a1-heißen | heißen | 2 | sauc, Glavna |
| a1-ihr | ihr | 2 | Ti, Glavna |
| a1-im | im | 2 | Lokacija, kur? |
| a1-in | in | 2 | telpu, valsti |
| a1-laden-study | Laden | 2 | veikals, Shop |
| a1-lang | lang | 2 | ilgs, Dugo vremena |
| a1-lassen | lassen | 2 | Umjesto, Otići |
| a1-müssen | müssen | 2 | Morate, Ich |
| a1-neu | neu | 2 | jauns, Glavna |
| a1-nur-study | nur | 2 | tikai, Tikai |
| a1-reis | Reis | 2 | Zapamtite |
| a1-sich | sich | 2 | sevi, sev |
| a1-sicher | sicher | 2 | noteikti, Vjerovatno |
| a1-sie-study | sie | 2 | Njega, Glavna |
| a1-sitzen | sitzen | 2 | Glavna, Stojeći |
| a1-stehen | stehen | 2 | Stojeći, Glavna |
| a1-wetter | Wetter | 2 | Zapamtite, Najprije |
| a1-wie | wie | 2 | cik, Glavna |
| a1-uhr | Uhr | 2 | pulkstenis, Glavna |
| a1-sprechen-study | sprechen | 1 | Govorimo |
| a1-aber | aber | 1 | Međutim |
| a1-aus | aus | 1 | Od |
| a1-bitte | bitte | 1 | Molim te |
| a1-ein | ein | 1 | Nekoga |
| a1-kein | kein | 1 | neviens |
| a1-kennen-study | kennen | 1 | Znati |
| a1-laut | laut | 1 | Glavna |
| a1-laut-study | Laut | 1 | Glavna |
| a1-leise-study | leise | 1 | kluss |
| a1-mann | Mann | 1 | Glavna |
| a1-nehmen | nehmen | 1 | Nosi |
| a1-noch-study | noch | 1 | Glavna |
| a1-ob | ob | 1 | vai |
| a1-schon-study | schon | 1 | jau |
| a1-schwimmen | schwimmen | 1 | Glavna |
| a1-sein | sein | 1 | Liegen |
| a1-sollen | sollen | 1 | Trebalo bi |
| a1-vom | vom | 1 | izcelsmi |
| a1-was | was | 1 | kas |
| a1-werden | werden | 1 | Se mijenja |
| a1-zum | zum | 1 | Golove |
| a1-ferien | Ferien | 1 | skola |
| a1-zeit | Zeit | 1 | Zapamtite |
| a1-einmal | einmal | 1 | Glavna |
| a1-noch-mal | noch mal | 1 | Opet |



---

## 8. WARNING atradumi (57)

#### a1-sprechen-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Govori
- **LV etalons:** —
- **DE konteksts:** sprechen
- **Kļūdas pamatojums:** Accent term "Govori" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-klein-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Mala
- **LV etalons:** —
- **DE konteksts:** klein
- **Kļūdas pamatojums:** Accent term "Mala" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-auch-study — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Takođe
- **LV etalons:** —
- **DE konteksts:** auch
- **Kļūdas pamatojums:** Accent term "Takođe" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-auch-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Takođe
- **LV etalons:** —
- **DE konteksts:** auch
- **Kļūdas pamatojums:** Accent term "Takođe" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-besuch — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Posjetu
- **LV etalons:** —
- **DE konteksts:** Besuch
- **Kļūdas pamatojums:** Accent term "Posjetu" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-bitte-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Molbu
- **LV etalons:** —
- **DE konteksts:** Bitte
- **Kļūdas pamatojums:** Accent term "Molbu" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-bleiben — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** gehen
- **LV etalons:** —
- **DE konteksts:** bleiben
- **Kļūdas pamatojums:** Accent term "gehen" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-bleiben — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** fahren
- **LV etalons:** —
- **DE konteksts:** bleiben
- **Kļūdas pamatojums:** Accent term "fahren" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-eis — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Jedem
- **LV etalons:** —
- **DE konteksts:** Eis
- **Kļūdas pamatojums:** Accent term "Jedem" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-fahren — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** auto
- **LV etalons:** —
- **DE konteksts:** fahren
- **Kļūdas pamatojums:** Accent term "auto" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-fahren — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Bicikl
- **LV etalons:** —
- **DE konteksts:** fahren
- **Kļūdas pamatojums:** Accent term "Bicikl" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-fahren — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Vozilo
- **LV etalons:** —
- **DE konteksts:** fahren
- **Kļūdas pamatojums:** Accent term "Vozilo" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-fahren — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Idem
- **LV etalons:** —
- **DE konteksts:** fahren
- **Kļūdas pamatojums:** Accent term "Idem" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-frau — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Supruga
- **LV etalons:** —
- **DE konteksts:** Frau
- **Kļūdas pamatojums:** Accent term "Supruga" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-geben — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** nehmen
- **LV etalons:** —
- **DE konteksts:** geben
- **Kļūdas pamatojums:** Accent term "nehmen" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-gleich — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Imamo
- **LV etalons:** —
- **DE konteksts:** gleich
- **Kļūdas pamatojums:** Accent term "Imamo" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-gross-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Kuća
- **LV etalons:** —
- **DE konteksts:** groß
- **Kļūdas pamatojums:** Accent term "Kuća" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-gut-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Dobro
- **LV etalons:** —
- **DE konteksts:** gut
- **Kļūdas pamatojums:** Accent term "Dobro" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-hoch-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Renta
- **LV etalons:** —
- **DE konteksts:** hoch
- **Kļūdas pamatojums:** Accent term "Renta" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-huebsch — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Lijepa
- **LV etalons:** —
- **DE konteksts:** hübsch
- **Kļūdas pamatojums:** Accent term "Lijepa" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-ihr — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Ti
- **LV etalons:** —
- **DE konteksts:** ihr
- **Kļūdas pamatojums:** Accent term "Ti" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-im — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** kam?
- **LV etalons:** —
- **DE konteksts:** im
- **Kļūdas pamatojums:** Accent term "kam?" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-jung — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Novi
- **LV etalons:** —
- **DE konteksts:** jung
- **Kļūdas pamatojums:** Accent term "Novi" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-kein — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Niko
- **LV etalons:** —
- **DE konteksts:** kein
- **Kļūdas pamatojums:** Accent term "Niko" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-kein — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Nemam
- **LV etalons:** —
- **DE konteksts:** kein
- **Kļūdas pamatojums:** Accent term "Nemam" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-kosten — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Koliko
- **LV etalons:** —
- **DE konteksts:** kosten
- **Kļūdas pamatojums:** Accent term "Koliko" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-laden-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Idem
- **LV etalons:** —
- **DE konteksts:** Laden
- **Kļūdas pamatojums:** Accent term "Idem" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-laufen — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Djeca
- **LV etalons:** —
- **DE konteksts:** laufen
- **Kļūdas pamatojums:** Accent term "Djeca" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-laut — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** govori
- **LV etalons:** —
- **DE konteksts:** laut
- **Kļūdas pamatojums:** Accent term "govori" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-laut-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** govori
- **LV etalons:** —
- **DE konteksts:** Laut
- **Kļūdas pamatojums:** Accent term "govori" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-leise-study — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Tiho
- **LV etalons:** —
- **DE konteksts:** leise
- **Kļūdas pamatojums:** Accent term "Tiho" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-machen — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Radi
- **LV etalons:** —
- **DE konteksts:** machen
- **Kļūdas pamatojums:** Accent term "Radi" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-mit — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** ar
- **LV etalons:** —
- **DE konteksts:** mit
- **Kļūdas pamatojums:** Accent term "ar" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-neu — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Imamo
- **LV etalons:** —
- **DE konteksts:** neu
- **Kļūdas pamatojums:** Accent term "Imamo" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-ob — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Ili
- **LV etalons:** —
- **DE konteksts:** ob
- **Kļūdas pamatojums:** Accent term "Ili" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-seite — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Lijevo
- **LV etalons:** —
- **DE konteksts:** Seite
- **Kļūdas pamatojums:** Accent term "Lijevo" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-sicher — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Sigurno
- **LV etalons:** —
- **DE konteksts:** sicher
- **Kļūdas pamatojums:** Accent term "Sigurno" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-sie-study-2 — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Ti
- **LV etalons:** —
- **DE konteksts:** Sie
- **Kļūdas pamatojums:** Accent term "Ti" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-über — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Za
- **LV etalons:** —
- **DE konteksts:** über
- **Kļūdas pamatojums:** Accent term "Za" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-über — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Poklon
- **LV etalons:** —
- **DE konteksts:** über
- **Kļūdas pamatojums:** Accent term "Poklon" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-unter — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** über
- **LV etalons:** —
- **DE konteksts:** unter
- **Kļūdas pamatojums:** Accent term "über" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-vom — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** kam?
- **LV etalons:** —
- **DE konteksts:** vom
- **Kļūdas pamatojums:** Accent term "kam?" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-vom — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** no
- **LV etalons:** —
- **DE konteksts:** vom
- **Kļūdas pamatojums:** Accent term "no" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-vor — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Nakon
- **LV etalons:** —
- **DE konteksts:** vor
- **Kļūdas pamatojums:** Accent term "Nakon" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-was — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Sta
- **LV etalons:** —
- **DE konteksts:** was
- **Kļūdas pamatojums:** Accent term "Sta" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-wenn — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** ja
- **LV etalons:** —
- **DE konteksts:** wenn
- **Kļūdas pamatojums:** Accent term "ja" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-wenn — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** kad
- **LV etalons:** —
- **DE konteksts:** wenn
- **Kļūdas pamatojums:** Accent term "kad" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-wer — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** vas
- **LV etalons:** —
- **DE konteksts:** wer
- **Kļūdas pamatojums:** Accent term "vas" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-zu — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Idem
- **LV etalons:** —
- **DE konteksts:** zu
- **Kļūdas pamatojums:** Accent term "Idem" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-zum — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** kam?
- **LV etalons:** —
- **DE konteksts:** zum
- **Kļūdas pamatojums:** Accent term "kam?" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-essen — study.sectionAccents (explanation)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (explanation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** esse
- **LV etalons:** —
- **DE konteksts:** essen
- **Kļūdas pamatojums:** Accent term "esse" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-gemuese — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Volim
- **LV etalons:** —
- **DE konteksts:** Gemüse
- **Kļūdas pamatojums:** Accent term "Volim" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-ferien — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** praznicima
- **LV etalons:** —
- **DE konteksts:** Ferien
- **Kļūdas pamatojums:** Accent term "praznicima" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-urlaub — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Moj
- **LV etalons:** —
- **DE konteksts:** Urlaub
- **Kļūdas pamatojums:** Accent term "Moj" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-zeit — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Imate
- **LV etalons:** —
- **DE konteksts:** Zeit
- **Kļūdas pamatojums:** Accent term "Imate" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-noch-mal — study.sectionAccents (examples)

- **Fails:** data/bs/a1.js
- **Lauks:** study.sectionAccents (examples)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Opet
- **LV etalons:** —
- **DE konteksts:** noch mal
- **Kļūdas pamatojums:** Accent term "Opet" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in BS text).
- **Ieteiktais BS labojums:** Align accent term casing with BS section text, or adjust BS text to match accent.
- **Standarta punkts:** §11 sectionAccents — term must exist in section text

#### a1-Weihnachten-648 — lv (main translation)

- **Fails:** data/bs/a1.js
- **Lauks:** lv (main translation)
- **Statuss:** WARNING
- **Smagums:** LOW
- **Esošais BS teksts:** Božić
- **LV etalons:** Ziemassvētki
- **DE konteksts:** Weihnachten
- **Kļūdas pamatojums:** Capitalized main translation flagged by heuristic; Božić is correct as proper noun/holiday name in Bosnian.
- **Ieteiktais BS labojums:** No change needed.
- **Standarta punkts:** §7 main translation — capitalization


---

## 9. Galveno BS tulkojumu audits — kopsavilkums

Visi **702** ieraksti pārbaudīti pret LV etalonu, DE vārdu/artikulu un Study kontekstu.

- **701 OK** — semantiski, gramatiski un formāli atbilstoši
- **1 WARNING** — `Božić` (apstiprināts kā pareizs)
- **0 ERROR**

---

## 10. Study satura lingvistiskais audits — kopsavilkums

Visas **134** Study kartītes pārbaudītas:

- Study teksta lauki (`translation`, `title`, `lead`, `explanation`, `examples`, `comparison`, `tip`, `important` u.c.) ir bosniešu valodā
- Nav LV atlikumu Study tekstā
- Personvārdi un termini paraugu kartītēs konsekventi
- Galvenā problēma: **sectionAccents** nav pilnībā lokalizēti (skat. §6–8)

---

## 11. Apliecinājumi

1. **Audita laikā netika mainīts neviens datu vai aplikācijas fails** (`data/bs/a1.js`, `www/data/bs/a1.js`, `data/a1.js`, `ui.js`, `style.css` u.c.).
2. **Izveidoti tikai audita izvades faili:**
   - `reports/bs-a1-full-audit.md` (šis dokuments)
   - `reports/temp/bs-a1-audit-data.json`
   - `reports/temp/bs-a1-findings-consolidated.json`
   - `reports/temp/validate-bs-study.json`
   - `reports/temp/bs-a1-ai-findings.json`
   - `reports/temp/bs-a1-findings-md-fragment.md`
   - `scripts/audit-bs-a1-collect.js`
   - `scripts/audit-bs-a1-report-gen.js`
   - `scripts/audit-bs-a1-write-report.js`

---

## 12. Ieteiktais nākamais solis

Veikt atsevišķu **labošanas posmu** tikai `sectionAccents` lokalizācijai:

1. Aizstāt LV atlikumus (mazs → mali, teikt → reći, iet → ići/trčati, laiks → vrijeme, reiz → jednom, lietus → kiša)
2. Aizstāt angļu At/To ar bosniešu terminiem no attiecīgās sadaļas (na, uz, kod)
3. Aizstāt `pie`/`uz` akcentos ar precīziem bosniešu vārdiem no BS `lv` laukiem
4. Salāgot kapitalizāciju accent terminos ar BS tekstu
5. Sinhronizēt `www/data/bs/a1.js`
6. Atkārtot šo auditu

---

*Atskaite ģenerēta automātiski 2026-08-06T18:14:24.290Z*
