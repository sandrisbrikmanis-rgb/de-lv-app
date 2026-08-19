# ET–DE A1 pilns lingvistiskais un kvalitātes audits

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.5** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `cc5b5f4e4551fcb9ac99d643755761680e2158da` |
| **DATASET_PRODUCTION_SHA/BLOB** | `ead642601c40f5949a3e92ae3f3cb32c7373b433` |
| **LAST FINAL CLOSURE** | nav |
| **LAST FINAL CLOSURE MAIN SHA** | `none` |
| **LAST FINAL CLOSURE DATASET BLOB** | `none` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **1** |
| **BASELINE STATUS** | **BLOCKED_UNMERGED_CLOSURE** |
| **OWNER HISTORY LOADED** | PARTIAL |
| **DE READ-ONLY** | PASS |

### Neintegrēti repair/closure branchi

- `origin/cursor/et-de-a1-full-audit-ba9e` — production blob `2aaaef9ff88be148fffd7cae97423d97a0aa3ded` (≠ main `ead642601c40f5949a3e92ae3f3cb32c7373b433`)

> **MASTER v1.5:** jaunāks closure/repair saturs nav integrēts `origin/main`. Daļa findingu var būt `UNMERGED_OWNER_REPAIR`, ne jauni defekti.

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.5**
**Papildu standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Audita datums:** 2026-08-19
**Auditors:** deterministiskā pārbaude + **GPT-5.6 Luna** (READ-ONLY)
**Production fails:** `data/et/a1.js` + `www/data/et/a1.js` (mirror)
**Piezīme:** Igaunijas tulkojumi glabājas laukā `lv` (projekta konvencija). DE etalons: `data/a1.js`.
**DE:** STRICT READ-ONLY · **Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Production kartītes | **702** |
| Auditētas kartītes (Luna) | **100%** |
| Study objekti | **124/134** |
| Kopējie atradumi | **171** |
| CRITICAL | **14** |
| HIGH | **95** |
| MEDIUM | **49** |
| LOW | **13** |
| LV/atlikušās valodas fragmenti (determ.) | **46** |
| sectionAccents (validate-study A1) | **41** |
| Syntax | **PASS** |
| Mirror data ↔ www | **PASS** |
| Parity (audit-language-parity --lang=et) | **FAIL** (A1 struktūra) |
| Mojibake | **PASS** (0) |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **ET–DE A1: NEEDS REPAIR**

Trūkst **10** Study objektu. Study laukos konstatēti **LV/atlikušās valodas** fragmenti (**16** kartītēs). Luna audits identificēja papildu valodnieciskos defektus.

## 2. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 702/702 PASS |
| Study skaits | **124/134 FAIL** |
| JS syntax | PASS |
| Mojibake | PASS |
| Mirror | PASS |

## 3. Palaistie skripti

| Skripts | Komanda |
|---------|---------|
| Strukturālais | `node scripts/audit-language-parity.js --lang=et` |
| Mojibake | `node scripts/audit-mojibake.js --lang=et` |
| Study dizains | `node scripts/validate-study-design.js --lang=et` |
| Kolektors | `node scripts/audit-et-a1-collect.js` |
| Luna | `node scripts/audit-et-a1-linguistic.js` |
| Orkestrators | `node scripts/run-et-a1-full-audit.js` |

## 4. Trūkstošie Study objekti (10)

- **Besuch** — study.id: `a1-besuch`, layout: `standardStudy`
- **besuchen** — study.id: `a1-besuchen`, layout: `standardStudy`
- **Fußball** — study.id: `a1-fussball-study`, layout: `standardStudy`
- **ganz** — study.id: `a1-ganz-study`, layout: `standardStudy`
- **gefallen** — study.id: `a1-gefallen-study`, layout: `standardStudy`
- **Geschichte** — study.id: `a1-geschichte-study`, layout: `standardStudy`
- **Geschwister** — study.id: `a1-geschwister-study`, layout: `standardStudy`
- **Großeltern** — study.id: `a1-grosseltern-study`, layout: `standardStudy`
- **Hand** — study.id: `a1-hand-study`, layout: `standardStudy`
- **hübsch** — study.id: `a1-huebsch`, layout: `standardStudy`

## 5.1 CRITICAL atradumi (14)

#### ET-A1-0001
**Card ID:** STRUCT
**Field:** study.count
**CURRENT:** 124
**NEW:** 134
**Problēma:** Study count mismatch LV=134 ET=124
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0075
**Card ID:** a1-Nummer-455
**Field:** etText
**CURRENT:** number
**NEW:** number
**Problēma:** „number“ on inglise, mitte eesti keel. Saksa „Nummer“ eestikeelne vaste on „number“.
**LV etalons (konteksts):** numurs
**DE konteksts:** Nummer
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0096
**Card ID:** a1-bitte
**Field:** study.comparison[0].meaning
**CURRENT:** lūdzu
**NEW:** palun
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0097
**Card ID:** a1-bitte
**Field:** study.comparison[1].meaning
**CURRENT:** lūgums
**NEW:** palve
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** lūgums
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0100
**Card ID:** a1-bitte-study
**Field:** study.comparison[0].meaning
**CURRENT:** lūgums
**NEW:** palve
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** lūgums
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0101
**Card ID:** a1-bitte-study
**Field:** study.comparison[1].meaning
**CURRENT:** lūdzu
**NEW:** palun
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0108
**Card ID:** a1-bringen
**Field:** study.comparison[4].meaning
**CURRENT:** paņemt
**NEW:** võtma
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** paņemt
**DE konteksts:** bringen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0112
**Card ID:** a1-ein
**Field:** study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**NEW:** Laps mängib.
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** Bērns spēlējas.
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0113
**Card ID:** a1-ein
**Field:** study.comparison[0].meaning
**CURRENT:** vīriešu dzimte
**NEW:** meessugu
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** vīriešu dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0114
**Card ID:** a1-ein
**Field:** study.comparison[1].meaning
**CURRENT:** sieviešu dzimte
**NEW:** naissugu
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** sieviešu dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0115
**Card ID:** a1-ein
**Field:** study.comparison[2].meaning
**CURRENT:** vidus dzimte
**NEW:** kesksugu
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** vidus dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0116
**Card ID:** a1-ein
**Field:** study.comparison[3].meaning
**CURRENT:** akuzatīvs
**NEW:** akusatiiv
**Problēma:** The current text is Latvian, not Estonian.
**LV etalons (konteksts):** akuzatīvs
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0122
**Card ID:** a1-es
**Field:** study.comparison[0].meaning
**CURRENT:** tas • bezpersoniska forma
**NEW:** see • umbisikuline vorm
**Problēma:** The phrase “bezpersoniska forma” is Latvian, not Estonian; replace it with the Estonian term.
**LV etalons (konteksts):** tas • bezpersoniska forma
**DE konteksts:** es
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0131
**Card ID:** a1-heißen
**Field:** study.comparison[4].meaning
**CURRENT:** zvanīt
**NEW:** helistama
**Problēma:** Väli sisaldab läti teksti; eestikeelne vaste on „helistama“.
**LV etalons (konteksts):** zvanīt
**DE konteksts:** heißen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.2 HIGH atradumi (95)

#### ET-A1-0002
**Card ID:** a1-Besuch-87
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Besuch
**DE konteksts:** Besuch
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0003
**Card ID:** a1-besuchen-89
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam besuchen
**DE konteksts:** besuchen
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0004
**Card ID:** a1-bitte
**Field:** study.tip.text
**CURRENT:** (tukšs)
**NEW:** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0005
**Card ID:** a1-bitte-study
**Field:** study.tip.text
**CURRENT:** (tukšs)
**NEW:** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0006
**Card ID:** a1-Fußball-218
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Fußball
**DE konteksts:** Fußball
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0007
**Card ID:** a1-ganz-219
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam ganz
**DE konteksts:** ganz
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0008
**Card ID:** a1-gefallen-225
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam gefallen
**DE konteksts:** gefallen
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0009
**Card ID:** a1-Geschichte-233
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Geschichte
**DE konteksts:** Geschichte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0010
**Card ID:** a1-Geschwister-234
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Geschwister
**DE konteksts:** Geschwister
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0011
**Card ID:** a1-Großeltern-251
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Großeltern
**DE konteksts:** Großeltern
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0012
**Card ID:** a1-Hand-267
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Hand
**DE konteksts:** Hand
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0013
**Card ID:** a1-hübsch-288
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam hübsch
**DE konteksts:** hübsch
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0014
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[0].meaning
**CURRENT:** lūdzu
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0015
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[0].example
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0016
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[1].meaning
**CURRENT:** lūgums
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0017
**Card ID:** a1-bitte
**Field:** entry[93].study.comparison[1].example
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0018
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[0].meaning
**CURRENT:** lūgums
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0019
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[0].example
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0020
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[1].meaning
**CURRENT:** lūdzu
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0021
**Card ID:** a1-bitte-study
**Field:** entry[94].study.comparison[1].example
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0022
**Card ID:** a1-bringen
**Field:** entry[111].study.comparison[4].meaning
**CURRENT:** paņemt
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0023
**Card ID:** a1-bringen
**Field:** entry[111].study.comparison[4].example
**CURRENT:** Ich nehme das Buch. – Es paņemu grāmatu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0024
**Card ID:** a1-ein
**Field:** entry[154].study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0025
**Card ID:** a1-ein
**Field:** entry[154].study.comparison[0].meaning
**CURRENT:** vīriešu dzimte
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0026
**Card ID:** a1-ein
**Field:** entry[154].study.comparison[3].meaning
**CURRENT:** akuzatīvs
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0027
**Card ID:** a1-eis
**Field:** entry[157].study.comparison[0].example
**CURRENT:** Ich esse ein Eis. = Es ēdu saldējumu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0028
**Card ID:** a1-eis
**Field:** entry[157].study.comparison[2].example
**CURRENT:** Das Wasser ist kalt. = Ūdens ir auksts.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0029
**Card ID:** a1-eis
**Field:** entry[157].study.comparison[3].example
**CURRENT:** Eis ist ein Dessert. = Saldējums ir deserts.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0030
**Card ID:** a1-erst
**Field:** entry[165].study.comparison[1].example
**CURRENT:** Zuerst frühstücken wir. = Vispirms mēs brokastojam.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0031
**Card ID:** a1-erst
**Field:** entry[165].study.comparison[2].example
**CURRENT:** Ich habe nur 5 Euro. = Man ir tikai 5 eiro.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0032
**Card ID:** a1-erst
**Field:** entry[165].study.comparison[3].example
**CURRENT:** Dann gehen wir nach Hause. = Tad mēs ejam mājās.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0033
**Card ID:** a1-es
**Field:** entry[167].study.comparison[0].example
**CURRENT:** Es regnet. – Līst.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0034
**Card ID:** a1-es
**Field:** entry[167].study.comparison[1].example
**CURRENT:** Ich lerne Deutsch. – Es mācos vācu valodu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0035
**Card ID:** a1-etwas
**Field:** entry[169].study.comparison[0].example
**CURRENT:** Ich brauche etwas. = Man kaut kas vajadzīgs.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0036
**Card ID:** a1-etwas
**Field:** entry[169].study.comparison[2].example
**CURRENT:** Ich bin ein bisschen müde. = Es esmu mazliet noguris.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0037
**Card ID:** a1-euch
**Field:** entry[170].study.comparison[0].example
**CURRENT:** Ihr seid freundlich. = Jūs esat draudzīgi.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0038
**Card ID:** a1-euch
**Field:** entry[170].study.comparison[1].example
**CURRENT:** Ich helfe euch. = Es jums palīdzu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0039
**Card ID:** a1-euch
**Field:** entry[170].study.comparison[2].example
**CURRENT:** Das ist euer Haus. = Tā ir jūsu māja.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0040
**Card ID:** a1-finden
**Field:** entry[187].study.comparison[0].example
**CURRENT:** Ich finde das gut. = Man tas šķiet labi.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0041
**Card ID:** a1-haben
**Field:** entry[261].study.comparison[0].example
**CURRENT:** Ich habe Zeit. = Man ir laiks.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0042
**Card ID:** a1-haben
**Field:** entry[261].study.comparison[1].example
**CURRENT:** Ich bin hier. = Es esmu šeit.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0043
**Card ID:** a1-haben
**Field:** entry[261].study.comparison[2].example
**CURRENT:** Ich bekomme ein Geschenk. = Es saņemu dāvanu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0044
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[1].example
**CURRENT:** Ich nehme die Tasche. = Es ņemu somu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0045
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[2].example
**CURRENT:** Bitte halten Sie an. = Lūdzu, apstājieties.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0046
**Card ID:** a1-halten
**Field:** entry[265].study.comparison[3].example
**CURRENT:** Ich denke, das ist richtig. = Es domāju, ka tas ir pareizi.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0047
**Card ID:** a1-heißen
**Field:** entry[276].study.comparison[1].example
**CURRENT:** Er nennt mich Tom. = Viņš mani sauc par Tomu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0048
**Card ID:** a1-heißen
**Field:** entry[276].study.comparison[2].example
**CURRENT:** Was bedeutet das? = Ko tas nozīmē?
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0049
**Card ID:** a1-heißen
**Field:** entry[276].study.comparison[4].meaning
**CURRENT:** zvanīt
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0050
**Card ID:** a1-können
**Field:** entry[319].study.comparison[0].example
**CURRENT:** Ich kann schwimmen. = Es protu peldēt.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0051
**Card ID:** a1-können
**Field:** entry[319].study.comparison[1].example
**CURRENT:** Darf ich gehen? = Vai drīkstu iet?
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0052
**Card ID:** a1-können
**Field:** entry[319].study.comparison[2].example
**CURRENT:** Ich muss lernen. = Man jāmācās.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0053
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[0].example
**CURRENT:** Das kostet 5 Euro. = Tas maksā 5 eiro.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0054
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[1].example
**CURRENT:** Ich bezahle die Rechnung. = Es maksāju rēķinu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0055
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[2].example
**CURRENT:** Kann ich bar zahlen? = Vai varu maksāt skaidrā naudā?
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0056
**Card ID:** a1-kosten
**Field:** entry[320].study.comparison[3].example
**CURRENT:** Was kostet das Buch? = Cik maksā grāmata?
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0057
**Card ID:** a1-fernsehen
**Field:** entry[687].study.comparison[0].example
**CURRENT:** Ich sehe fern. = Es skatos televīziju.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0058
**Card ID:** a1-fernsehen
**Field:** entry[687].study.comparison[1].example
**CURRENT:** Im Fernsehen läuft ein Film. = Televīzijā rāda filmu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0059
**Card ID:** a1-fernsehen
**Field:** entry[687].study.comparison[2].example
**CURRENT:** Ich sehe einen Film. = Es redzu filmu.
**NEW:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0078
**Card ID:** a1-sprechen-study
**Field:** study.examples[2].lv
**CURRENT:** ma räägin saksa keelt.
**NEW:** Ta räägib oma õpetajaga.
**Problēma:** Praegune lause tähendab „Ich spreche Deutsch“ ega tõlgi õpetajaga rääkimist.
**LV etalons (konteksts):** Viņa runā ar savu skolotāju.
**DE konteksts:** sprechen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0079
**Card ID:** a1-klein-study
**Field:** study.examples[1].lv
**CURRENT:** tuba on väike.
**NEW:** Laps on veel väike.
**Problēma:** Praegune tõlge räägib väikesest toast, mitte veel väikesest lapsest.
**LV etalons (konteksts):** Bērns vēl ir mazs.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0080
**Card ID:** a1-klein-study
**Field:** study.examples[2].lv
**CURRENT:** laps on veel väike.
**NEW:** Mul on väike kott.
**Problēma:** Praegune tõlge kordab eelmise näite sisu ega tõlgi väikest kotti.
**LV etalons (konteksts):** Man ir maza soma.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0082
**Card ID:** a1-auch-study
**Field:** study.examples[1].lv
**CURRENT:** ma tulen ka.
**NEW:** Ta töötab ka siin.
**Problēma:** Praegune lause tähendab „Ma tulen ka“, mitte „Ta töötab ka siin“.
**LV etalons (konteksts):** Viņa arī strādā šeit.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0083
**Card ID:** a1-auch-study
**Field:** study.examples[2].lv
**CURRENT:** ta töötab ka siin.
**NEW:** Ma soovin teile ka ilusat päeva.
**Problēma:** Praegune tõlge kordab eelmise näite sisu ega väljenda head päeva soovimist.
**LV etalons (konteksts):** Es arī novēlu jums jauku dienu.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0093
**Card ID:** a1-bitte
**Field:** study.examples[0].lv
**CURRENT:** Palun!
**NEW:** Üks tass kohvi, palun.
**Problēma:** Estonian text means only “Please!”, omitting the requested cup of coffee.
**LV etalons (konteksts):** Vienu tasi kafijas, lūdzu.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0094
**Card ID:** a1-bitte
**Field:** study.examples[1].lv
**CURRENT:** palun!
**NEW:** Palun, tule sisse!
**Problēma:** The current text omits the instruction “come in”.
**LV etalons (konteksts):** Lūdzu, nāc iekšā.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0095
**Card ID:** a1-bitte
**Field:** study.examples[2].lv
**CURRENT:** üks tass kohvi, palun.
**NEW:** Palun!
**Problēma:** This example is swapped with the coffee-request example.
**LV etalons (konteksts):** Lūdzu!
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0098
**Card ID:** a1-bitte-study
**Field:** study.examples[1].lv
**CURRENT:** palun!
**NEW:** Ta täidab minu palve.
**Problēma:** The current text is the polite adverb, not the sentence about fulfilling a request.
**LV etalons (konteksts):** Viņš izpilda manu lūgumu.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0099
**Card ID:** a1-bitte-study
**Field:** study.examples[2].lv
**CURRENT:** üks tass kohvi, palun.
**NEW:** Tal on kaks palvet.
**Problēma:** The current text is a coffee request and does not translate the source sentence.
**LV etalons (konteksts):** Viņai ir divi lūgumi.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0102
**Card ID:** a1-bringen
**Field:** study.examples[0].lv
**CURRENT:** too mulle palun vett.
**NEW:** Ma toon sulle raamatu.
**Problēma:** The current sentence asks someone to bring water instead of stating that I bring you a book.
**LV etalons (konteksts):** Es tev atnesu grāmatu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0103
**Card ID:** a1-bringen
**Field:** study.examples[1].lv
**CURRENT:** ma viin sind koju.
**NEW:** Ma viin paki postkontorisse.
**Problēma:** The current sentence takes a person home instead of taking a package to the post office.
**LV etalons (konteksts):** Es aiznesu paku uz pastu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0104
**Card ID:** a1-bringen
**Field:** study.examples[2].lv
**CURRENT:** ta viib raamatu kooli.
**NEW:** Ma viin lapsed kooli.
**Problēma:** The current subject and object are changed: it says someone takes a book, not that I take children.
**LV etalons (konteksts):** Es aizvedu bērnus uz skolu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0105
**Card ID:** a1-bringen
**Field:** study.comparison[1].meaning
**CURRENT:** võtma / kätte võtma
**NEW:** viima
**Problēma:** Aiznest means to carry or take something away, not to take or pick something up.
**LV etalons (konteksts):** aiznest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0106
**Card ID:** a1-bringen
**Field:** study.comparison[2].meaning
**CURRENT:** järele minema / tooma
**NEW:** viima / sõidutama
**Problēma:** Aizvest means to take or transport, usually by vehicle; the current meaning is different.
**LV etalons (konteksts):** aizvest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0111
**Card ID:** a1-dieser
**Field:** study.examples[1].lv
**CURRENT:** mulle meeldib see koer.
**NEW:** Ma näen seda koera.
**Problēma:** The current text means “I like this dog”, not “I see this dog”.
**LV etalons (konteksts):** Es redzu šo suni.
**DE konteksts:** dieser
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0118
**Card ID:** a1-es
**Field:** study.examples[0].lv
**CURRENT:** ma õpin saksa keelt.
**NEW:** sajab vihma.
**Problēma:** The Estonian sentence means “I study German” and does not express the impersonal es usage in the source.
**LV etalons (konteksts):** Līst.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0119
**Card ID:** a1-es
**Field:** study.examples[1].lv
**CURRENT:** ta on väsinud.
**NEW:** on külm.
**Problēma:** The Estonian sentence means “he/she is tired,” not “it is cold.”
**LV etalons (konteksts):** Ir auksts.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0120
**Card ID:** a1-es
**Field:** study.examples[2].lv
**CURRENT:** ta töötab siin.
**NEW:** Laps magab.
**Problēma:** The Estonian sentence means “he/she works here,” not “the child is sleeping.”
**LV etalons (konteksts):** Bērns guļ.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0121
**Card ID:** a1-es
**Field:** study.examples[3].lv
**CURRENT:** see on minu raamat.
**NEW:** See on väsinud.
**Problēma:** The Estonian sentence means “this is my book,” not “it is tired.”
**LV etalons (konteksts):** Tas ir noguris.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0125
**Card ID:** a1-finden
**Field:** study.examples[0].lv
**CURRENT:** ma ei leia oma võtit.
**NEW:** ma leian oma võtme.
**Problēma:** The source says “I find my key”; the current Estonian adds negation and changes the meaning.
**LV etalons (konteksts):** Es atrodu savu atslēgu.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0126
**Card ID:** a1-finden
**Field:** study.examples[1].lv
**CURRENT:** kas sa leidsid oma telefoni?
**NEW:** minu meelest on see hea.
**Problēma:** The current Estonian asks whether someone found a phone instead of expressing an opinion.
**LV etalons (konteksts):** Man tas šķiet labi.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0127
**Card ID:** a1-finden
**Field:** study.examples[2].lv
**CURRENT:** minu meelest on see hea.
**NEW:** mida sa filmist arvad?
**Problēma:** The current Estonian gives an opinion instead of asking what someone thinks about the film.
**LV etalons (konteksts):** ko tu domā par filmu?
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0130
**Card ID:** a1-gross-study
**Field:** study.examples[1].lv
**CURRENT:** maja on suur.
**NEW:** Berliin on suur linn.
**Problēma:** The current Estonian translates a different sentence: “the house is big.”
**LV etalons (konteksts):** Berlīne ir liela pilsēta.
**DE konteksts:** groß
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0149
**Card ID:** a1-probieren
**Field:** study.comparison[1].meaning
**CURRENT:** testima / kontrollima
**NEW:** proovima / üritama
**Problēma:** mēģināt means to try or attempt, not to test or check.
**LV etalons (konteksts):** mēģināt
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0150
**Card ID:** a1-probieren
**Field:** study.comparison[2].meaning
**CURRENT:** üritama
**NEW:** kontrollima
**Problēma:** pārbaudīt means to check or test; üritama means to attempt.
**LV etalons (konteksts):** pārbaudīt
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0151
**Card ID:** a1-probieren
**Field:** study.comparison[3].meaning
**CURRENT:** kontrollima
**NEW:** selga proovima
**Problēma:** pielaikot means to try on, not to check or inspect.
**LV etalons (konteksts):** pielaikot
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0154
**Card ID:** a1-sie-study
**Field:** study.examples[0].lv
**CURRENT:** Anna teeb süüa. Ta teeb seda iga päev.
**NEW:** Nad teevad süüa.
**Problēma:** Lähte-eesti lause tähendab „Nad teevad süüa”, kuid praegune tekst räägib Annast ainsuses ja lisab infot.
**LV etalons (konteksts):** Viņi gatavo.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0155
**Card ID:** a1-sie-study
**Field:** study.examples[1].lv
**CURRENT:** Maria on arst. Ta töötab haiglas.
**NEW:** Ta teeb süüa.
**Problēma:** Lähtelause tähendab „Ta teeb süüa”, kuid praegune tekst ütleb, et Maria on arst ja töötab haiglas.
**LV etalons (konteksts):** viņa gatavo.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0156
**Card ID:** a1-sie-study
**Field:** study.examples[2].lv
**CURRENT:** Anna ja Paul teevad süüa. Nad teevad seda koos.
**NEW:** Ta sööb.
**Problēma:** Lähtelause tähendab „Ta sööb”, kuid praegune tekst räägib kahest inimesest, kes teevad süüa.
**LV etalons (konteksts):** viņa ēd.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0157
**Card ID:** a1-sie-study
**Field:** study.examples[3].lv
**CURRENT:** Lapsed mängivad aias. Nad mängivad jalgpalli.
**NEW:** Nad teevad süüa.
**Problēma:** Lähtelause tähendab „Nad teevad süüa”, kuid praegune tekst kirjeldab laste jalgpallimängu.
**LV etalons (konteksts):** viņi gatavo.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0158
**Card ID:** a1-sie-study
**Field:** study.examples[4].lv
**CURRENT:** proua Keller, kas te teete meelsasti süüa?
**NEW:** Nad mängivad jalgpalli.
**Problēma:** Lähtelause tähendab „Nad mängivad jalgpalli”, kuid praegune tekst on proua Kelleri poole pöörduv küsimus.
**LV etalons (konteksts):** viņi spēlē futbolu.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0159
**Card ID:** a1-sie-study
**Field:** study.examples[5].lv
**CURRENT:** härra Müller, kas te olete siin uus?
**NEW:** Teie teete süüa, palun.
**Problēma:** Lähtelause tähendab „Teie teete süüa, palun”, kuid praegune tekst küsib härra Mülleri uudsuse kohta.
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0163
**Card ID:** a1-wenn
**Field:** study.examples[3].lv
**CURRENT:** ma ei tea, kas ta tuleb.
**NEW:** kui ta tuleb, olen ma rõõmus.
**Problēma:** „Kas” tähistab kaudset jah/ei-küsimust; wenn väljendab tingimust või korduvat aega.
**LV etalons (konteksts):** es nezinu, vai viņš nāks.
**DE konteksts:** wenn
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0164
**Card ID:** a1-wer
**Field:** study.translation
**CURRENT:** kes • kumb
**NEW:** kes
**Problēma:** Wer tähendab „kes”; „kumb” vastab valikuküsimuses pigem welcher’ile.
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0165
**Card ID:** a1-wer
**Field:** study.examples[0].lv
**CURRENT:** Mis see on?
**NEW:** Kes see on?
**Problēma:** Wer-küsimus küsib isiku kohta („kes”), mitte asja kohta („mis”).
**LV etalons (konteksts):** Kas tas ir?
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0169
**Card ID:** a1-zum
**Field:** study.comparison[1].meaning
**CURRENT:** -sse / juurde (naissugu)
**NEW:** -sse / juurde (meessugu või kesksugu)
**Problēma:** Zum = zu dem; see on maskuliini või neutrumi vorm, mitte feminiini vorm. Feminiin on zur.
**LV etalons (konteksts):** uz / pie (siev. dzimte)
**DE konteksts:** zum
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.3 MEDIUM atradumi (49)

#### ET-A1-0060
**Card ID:** a1-da
**Field:** study.sectionAccents (explanation)
**CURRENT:** koha
**NEW:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0061
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Ich
**NEW:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0062
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Er
**NEW:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0063
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Sie
**NEW:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0064
**Card ID:** a1-es
**Field:** study.sectionAccents (examples)
**CURRENT:** Das
**NEW:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0065
**Card ID:** a1-reis
**Field:** study.sectionAccents (explanation)
**CURRENT:** ainsus
**NEW:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Statuss:** LABOT
#### ET-A1-0066
**Card ID:** a1-bis
**Field:** study.sectionAccents.comparison.example
**CURRENT:** bis dass
**NEW:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "bis dass" nav atrodams sadaļā comparison
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Statuss:** LABOT
#### ET-A1-0067
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** Wasser
**NEW:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "Wasser" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Statuss:** LABOT
#### ET-A1-0068
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** dich
**NEW:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "dich" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Statuss:** LABOT
#### ET-A1-0069
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** bringt
**NEW:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "bringt" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Statuss:** LABOT
#### ET-A1-0070
**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples.de
**CURRENT:** Buch
**NEW:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "Buch" nav atrodams sadaļā examples
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Statuss:** LABOT
#### ET-A1-0071
**Card ID:** a1-achten-22
**Field:** etText
**CURRENT:** järgima
**NEW:** tähele panema
**Problēma:** „Järgima” tähendab eeskätt millegi järgimist; „achten” tähendab siin tavaliselt tähelepanu pöörama või tähele panema.
**LV etalons (konteksts):** ievērot
**DE konteksts:** achten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0072
**Card ID:** a1-Arm-44
**Field:** etText
**CURRENT:** käsi
**NEW:** käsivars
**Problēma:** Saksa „Arm” tähendab täpsemalt käsivart; „käsi” tähendab eeskätt kätt ja on seetõttu liiga lai või ebatäpne.
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0073
**Card ID:** a1-ganz-219
**Field:** etText
**CURRENT:** kõik
**NEW:** terve
**Problēma:** „Kõik” tähendab „all/everything”, mitte „whole/entire”; saksa „ganz” vastab siin sõnale „terve”.
**LV etalons (konteksts):** vesels
**DE konteksts:** ganz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0074
**Card ID:** a1-nicht-447
**Field:** etText
**CURRENT:** ei
**NEW:** mitte
**Problēma:** „ei“ tähendab eesti keeles peamiselt „nein“; saksa „nicht“ vaste on „mitte“.
**LV etalons (konteksts):** ne
**DE konteksts:** nicht
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0076
**Card ID:** a1-von-635
**Field:** etText
**CURRENT:** -st
**NEW:** -lt
**Problēma:** Estonian -st means 'from inside'; German von is generally rendered with -lt when indicating origin or source.
**LV etalons (konteksts):** no
**DE konteksts:** von
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0081
**Card ID:** a1-an
**Field:** study.comparison[1].meaning
**CURRENT:** horisontaalsel pinnal
**NEW:** mitte an, vaid auf: horisontaalsel pinnal
**Problēma:** Horisontaalsel pinnal paiknemist väljendab saksa keeles tavaliselt auf, mitte an.
**LV etalons (konteksts):** uz horizontālas virsmas
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0084
**Card ID:** a1-auf
**Field:** study.comparison[1].meaning
**CURRENT:** juures (vertikaalne pind)
**NEW:** vertikaalsel pinnal
**Problēma:** Auf tähendab vertikaalsel pinnal „peal“, mitte üldiselt „juures“; „juures“ vastab pigem an/bei-le.
**LV etalons (konteksts):** pie (vertikālas virsmas)
**DE konteksts:** auf
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0085
**Card ID:** a1-auf
**Field:** study.comparison[4].meaning
**CURRENT:** -sse / juurde (Dativ)
**NEW:** peale / -le (Akk.)
**Problēma:** aufs on auf + das ehk akusatiiv; „-sse“ ei sobi siin datiivi märgendiga.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** auf
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0086
**Card ID:** a1-aufs
**Field:** study.examples[6].lv
**CURRENT:** tule kiiresti paati!
**NEW:** Mine kiiresti paati!
**Problēma:** „Tule paati“ tähendab tule minu juurde paati; allikas käsib paati sisse minna.
**LV etalons (konteksts):** Kāp ātri laivā!
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0087
**Card ID:** a1-aufs
**Field:** study.comparison[2].meaning
**CURRENT:** vertikaalse pinna juures
**NEW:** vertikaalsel pinnal
**Problēma:** Auf väljendab vertikaalsel pinnal paiknemist, mitte pinna juures olemist.
**LV etalons (konteksts):** pie vertikālas virsmas
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0088
**Card ID:** a1-aufs
**Field:** study.comparison[4].meaning
**CURRENT:** -sse / juurde (Dativ)
**NEW:** peale / -le (Akk.)
**Problēma:** aufs on auf + das ehk akusatiiv; praegune „Dativ“ on grammatikaliselt vastuolus.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0089
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** ta ujub väga hästi.
**NEW:** Ta supleb väga hästi.
**Problēma:** Ujumine vastab schwimmen-ile; baden tähendab suplemist või vees olemist.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0091
**Card ID:** a1-bei
**Field:** study.comparison[1].meaning
**CURRENT:** seina, serva, kalda, pinna ääres
**NEW:** seina, serva, kalda või pinna ääres → an
**Problēma:** Need asukohad kuuluvad siin an-i kasutusse, mitte bei tähendusse.
**LV etalons (konteksts):** pie sienas, malas, krasta, virsmas malas
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0092
**Card ID:** a1-bei
**Field:** study.comparison[2].meaning
**CURRENT:** kellegi juurde minnakse (suund)
**NEW:** kellegi juures ollakse; juurde minnakse: zu
**Problēma:** Bei väljendab kellegi juures olemist; suund kellegi juurde on saksa keeles zu.
**LV etalons (konteksts):** pie kāda dodas (virziens)
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0107
**Card ID:** a1-bringen
**Field:** study.comparison[3].meaning
**CURRENT:** kaasa võtma ja kohale tooma
**NEW:** kohale toimetama
**Problēma:** The current phrase adds “take along” and does not directly express delivery or conveying.
**LV etalons (konteksts):** nogādāt
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0109
**Card ID:** a1-da
**Field:** study.examples[2].lv
**CURRENT:** siin ta tuleb.
**NEW:** seal ta tuleb.
**Problēma:** Te means “there”; siin means “here”, reversing the location.
**LV etalons (konteksts):** te viņš nāk.
**DE konteksts:** da
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0110
**Card ID:** a1-der
**Field:** study.examples[1].lv
**CURRENT:** buss tuleb.
**NEW:** buss sõidab.
**Problēma:** The current text means “the bus is coming”, not “the bus is driving/riding”.
**LV etalons (konteksts):** autobuss brauc.
**DE konteksts:** der
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0117
**Card ID:** a1-erst
**Field:** study.examples[0].lv
**CURRENT:** kõigepealt juua, siis sõita.
**NEW:** kõigepealt õpi, siis mängi.
**Problēma:** Estonian sentence does not translate the Latvian source example; it introduces unrelated drinking and driving.
**LV etalons (konteksts):** Vispirms mācies, pēc tam spēlējies.
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0123
**Card ID:** a1-es
**Field:** study.comparison[1].meaning
**CURRENT:** es (persona)
**NEW:** mina (isik)
**Problēma:** Latvian “es” means “mina”; the current comparison leaves the foreign form and can confuse it with German es.
**LV etalons (konteksts):** es (persona)
**DE konteksts:** es
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0124
**Card ID:** a1-euch
**Field:** study.tip.text
**CURRENT:** “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teie”.
**NEW:** “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teid”.
**Problēma:** As a direct object, German euch corresponds to Estonian teid, not teie.
**LV etalons (konteksts):** “euch” atbild uz jautājumu “kam?” vai ir tiešais papildinājums teikumos ar “jūs”.
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0132
**Card ID:** a1-hoch-study
**Field:** study.examples[1].lv
**CURRENT:** mägi on kõrge.
**NEW:** riiul on kahe meetri kõrgune.
**Problēma:** Läti näitelause räägib riiulist, kuid eestikeelne tõlge asendab selle ekslikult mäega.
**LV etalons (konteksts):** plaukts ir divus metrus augsts.
**DE konteksts:** hoch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0140
**Card ID:** a1-laden-study
**Field:** study.examples[3].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0141
**Card ID:** a1-lassen
**Field:** study.tip.text
**CURRENT:** Pea meeles: midagi jääb → lassen; kellelegi lubatakse → lassen.
**NEW:** Pea meeles: midagi jääb → lassen; kellelgi lastakse → lassen.
**Problēma:** Impersonaalse tähenduse puhul on loomulikum kasutada vormi „kellelgi lastakse“, mitte „kellelegi lubatakse“.
**LV etalons (konteksts):** Atceries: kaut kas paliek → lassen; kādam atļauj → lassen.
**DE konteksts:** lassen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0142
**Card ID:** a1-laut
**Field:** study.examples[4].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0143
**Card ID:** a1-laut
**Field:** study.examples[5].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0144
**Card ID:** a1-laut-study
**Field:** study.examples[1].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0145
**Card ID:** a1-laut-study
**Field:** study.examples[2].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0146
**Card ID:** a1-laut-study
**Field:** study.examples[3].lv
**CURRENT:** —
**Problēma:** 
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0147
**Card ID:** a1-nach
**Field:** study.examples[3].lv
**CURRENT:** on kümme minutit kaheksa läbi.
**NEW:** kell on kümme minutit üle kaheksa.
**Problēma:** Ajaväljend on ebaloomulik; standardne eesti vaste on „kell on kümme minutit üle kaheksa”.
**LV etalons (konteksts):** ir desmit pāri astoņiem.
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0148
**Card ID:** a1-nehmen
**Field:** study.tip.text
**CURRENT:** Pea meeles: võtab endale → nehmen; toob kellelegi → bringen.
**NEW:** Pea meeles: võta endale → nehmen; too kellelegi → bringen.
**Problēma:** The source uses imperatives, but the Estonian has third-person present forms.
**LV etalons (konteksts):** Atceries: paņem sev → nehmen; atnes kādam → bringen.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0152
**Card ID:** a1-sich
**Field:** study.comparison[1].meaning
**CURRENT:** mind / ennast ich puhul
**NEW:** mind / ennast ich-vormi puhul
**Problēma:** Ühend „ich puhul” on ebaloomulik ja grammatiliselt puudulik; liitsõna „ich-vormi puhul” on korrektne.
**LV etalons (konteksts):** mani / sevi pie ich
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0153
**Card ID:** a1-sich
**Field:** study.comparison[2].meaning
**CURRENT:** sind / ennast du puhul
**NEW:** sind / ennast du-vormi puhul
**Problēma:** Ühend „du puhul” on ebaloomulik ja grammatiliselt puudulik; liitsõna „du-vormi puhul” on korrektne.
**LV etalons (konteksts):** tevi / sevi pie du
**DE konteksts:** sich
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0161
**Card ID:** a1-unter
**Field:** study.examples[3].lv
**CURRENT:** lamp ripub laua kohal.
**NEW:** lamp ripub laua all.
**Problēma:** „Laua kohal” tähendab über, mitte unter; tõlge on kaardi märksõnaga vastuolus.
**LV etalons (konteksts):** lampa karājas virs galda.
**DE konteksts:** unter
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0162
**Card ID:** a1-verstehen
**Field:** study.examples[3].lv
**CURRENT:** ma oskan saksa keelt rääkida.
**NEW:** ma saan saksa keelest aru.
**Problēma:** Praegune lause tähendab „ma oskan rääkida”, mis vastab können, mitte verstehen.
**LV etalons (konteksts):** es protu runāt vāciski.
**DE konteksts:** verstehen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0166
**Card ID:** a1-werden
**Field:** study.examples[3].lv
**CURRENT:** ma olen väsinud.
**NEW:** ma jään väsinuks.
**Problēma:** „Ma olen väsinud” vastab verbile sein; werden väljendab muutumist või seisundisse jõudmist.
**LV etalons (konteksts):** es esmu noguris.
**DE konteksts:** werden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0167
**Card ID:** a1-zu
**Field:** study.comparison[1].meaning
**CURRENT:** -sse linnade/riikidega
**NEW:** -sse: linnadesse/riikidesse
**Problēma:** Praegune väljend ühendab suuna tunnuse ja kaasaütleva käände ning on eesti keeles grammatiliselt vigane.
**LV etalons (konteksts):** uz ar pilsētām/valstīm
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0168
**Card ID:** a1-zum
**Field:** study.comparison[0].meaning
**CURRENT:** -sse / juurde (Dativ)
**NEW:** -sse / juurde (daativ)
**Problēma:** Eesti keeles on saksa grammatikatermini Dativ vastena kasutusel eestikeelne kuju „daativ“.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0170
**Card ID:** a1-zum
**Field:** study.comparison[3].meaning
**CURRENT:** -sse (linnad/riigid)
**NEW:** -sse: linnadesse/riikidesse
**Problēma:** Sulgudes olevad nominatiivivormid ei sobitu suunatähisega „-sse“; vaja on illatiivivorme.
**LV etalons (konteksts):** uz (pilsētas/valstis)
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.4 LOW atradumi (13)

#### ET-A1-0077
**Card ID:** a1-Weihnachten-648
**Field:** etText
**CURRENT:** Jõulud
**NEW:** jõulud
**Problēma:** Estonian common nouns, including jõulud, are normally lowercase outside sentence-initial position.
**LV etalons (konteksts):** Ziemassvētki
**DE konteksts:** Weihnachten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0090
**Card ID:** a1-baden
**Field:** study.comparison[1].meaning
**CURRENT:** ujuma liikumisena või spordina
**NEW:** ujumine liikumise või spordina
**Problēma:** „Ujuma liikumisena“ on ebaloomulik; võrdluses on vaja tegevuse nimisõna „ujumine“.
**LV etalons (konteksts):** peldēt kā kustība vai sports
**DE konteksts:** baden
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0128
**Card ID:** a1-gleich
**Field:** study.examples[1].lv
**CURRENT:** meil on ühesugune värv.
**NEW:** meil on sama värv.
**Problēma:** “Sama värv” is the natural Estonian collocation for having the same color.
**LV etalons (konteksts):** mums ir vienāda krāsa.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0129
**Card ID:** a1-gleich
**Field:** study.examples[4].lv
**CURRENT:** näeme kohe!
**NEW:** näeme varsti!
**Problēma:** “Kohe” means immediately; the source means “see you in a moment/soon.”
**LV etalons (konteksts):** tiekamies pēc brīža!
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0133
**Card ID:** a1-im
**Field:** study.comparison[0].meaning
**CURRENT:** sees, kus? (Dativ)
**NEW:** sees, kus? (daativ)
**Problēma:** „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
**LV etalons (konteksts):** iekšā, kur? (kam?)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0134
**Card ID:** a1-im
**Field:** study.comparison[1].meaning
**CURRENT:** sisse, kuhu? (Akk.)
**NEW:** sisse, kuhu? (akusatiiv)
**Problēma:** „Akk.“ on saksakeelne lühend; eestikeelne termin on „akusatiiv“.
**LV etalons (konteksts):** uz iekšu, kurp? (Akk.)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0135
**Card ID:** a1-im
**Field:** study.comparison[3].meaning
**CURRENT:** juures, kus? (Dativ)
**NEW:** juures, kus? (daativ)
**Problēma:** „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
**LV etalons (konteksts):** pie, kur? (kam?)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0136
**Card ID:** a1-ins
**Field:** study.comparison[0].meaning
**CURRENT:** sisse, kuhu? (Akk.)
**NEW:** sisse, kuhu? (akusatiiv)
**Problēma:** „Akk.“ on saksakeelne lühend; eestikeelne termin on „akusatiiv“.
**LV etalons (konteksts):** uz iekšu, kurp? (Akk.)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0137
**Card ID:** a1-ins
**Field:** study.comparison[1].meaning
**CURRENT:** sees, kus? (Dativ)
**NEW:** sees, kus? (daativ)
**Problēma:** „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
**LV etalons (konteksts):** iekšā, kur? (kam?)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0138
**Card ID:** a1-ins
**Field:** study.comparison[3].meaning
**CURRENT:** pinnale (Akk.)
**NEW:** pinnale (akusatiiv)
**Problēma:** „Akk.“ on saksakeelne lühend; eestikeelne termin on „akusatiiv“.
**LV etalons (konteksts):** uz virsmu (Akk.)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0139
**Card ID:** a1-ins
**Field:** study.comparison[4].meaning
**CURRENT:** -sse / juurde (Dativ)
**NEW:** -sse / juurde (daativ)
**Problēma:** „Dativ“ on saksakeelne termin; eestikeelne vorm on „daativ“.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0160
**Card ID:** a1-über
**Field:** study.comparison[3].meaning
**CURRENT:** -st / kohta mingist allikast
**NEW:** -st / mingi allika kohta
**Problēma:** Sõnajärg on ebaloomulik; „mingi allika kohta” on korrektne väljend.
**LV etalons (konteksts):** no / par no kāda avota
**DE konteksts:** über
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0171
**Card ID:** a1-einmal
**Field:** study.examples[0].lv
**CURRENT:** ma olin kord Berliinis.
**NEW:** Ma olin kord Berliinis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es reiz biju Berlīnē.
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 6. Metodoloģija

1. `node scripts/audit-language-parity.js --lang=et`
2. `node scripts/audit-mojibake.js --lang=et`
3. `node scripts/validate-study-design.js --lang=et`
4. `node scripts/audit-et-a1-collect.js`
5. `node scripts/audit-et-a1-linguistic.js` — GPT-5.6 Luna 702/702 coverage
6. Deterministisko un Luna atradumu konsolidācija

**Production changes = 0** · **DE changes = 0**

## 7. Pagaidu artefakti

- `reports/temp/et-a1-audit-data.json`
- `reports/temp/et-a1-linguistic-audit.json`
- `reports/temp/et-a1-full-audit-luna/`
- `reports/temp/et-a1-full-audit.json`
