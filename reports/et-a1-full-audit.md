# ET–DE A1 pilns lingvistiskais un kvalitātes audits

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.1**
**Papildu standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Audita datums:** 2026-08-19
**Auditors:** deterministiskā pārbaude + **GPT-5.6 Luna** (READ-ONLY)
**Production fails:** `data/et/a1.js` + `www/data/et/a1.js` (mirror)
**Piezīme:** Igaunijas tulkojumi glabājas laukā `lv` (projekta konvencija). DE etalons: `data/a1.js`.
**DE:** STRICT READ-ONLY · **sectionAccents:** auto-repair atļauts (skat. `reports/et-a1-section-accents-repair.md`) · **Citi production labojumi auditā:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Production kartītes | **702** |
| Auditētas kartītes (Luna) | **100%** |
| Study objekti | **124/134** |
| Kopējie atradumi | **216** |
| CRITICAL | **13** |
| HIGH | **99** |
| MEDIUM | **32** |
| LOW | **72** |
| LV/atlikušās valodas fragmenti (determ.) | **46** |
| sectionAccents (validate-study A1) | **0** (pēc auto-repair; bija 41) |
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

## 5.1 CRITICAL atradumi (13)

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
#### ET-A1-0108
**Card ID:** a1-bitte
**Field:** study.comparison[0].meaning
**CURRENT:** lūdzu
**NEW:** palun
**Problēma:** “lūdzu” is Latvian, not Estonian.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0109
**Card ID:** a1-bitte
**Field:** study.comparison[1].meaning
**CURRENT:** lūgums
**NEW:** palve
**Problēma:** “lūgums” is Latvian, not Estonian.
**LV etalons (konteksts):** lūgums
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0112
**Card ID:** a1-bitte-study
**Field:** study.comparison[0].meaning
**CURRENT:** lūgums
**NEW:** palve
**Problēma:** “lūgums” is Latvian, not Estonian.
**LV etalons (konteksts):** lūgums
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0113
**Card ID:** a1-bitte-study
**Field:** study.comparison[1].meaning
**CURRENT:** lūdzu
**NEW:** palun
**Problēma:** “lūdzu” is Latvian, not Estonian.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0121
**Card ID:** a1-bringen
**Field:** study.comparison[4].meaning
**CURRENT:** paņemt
**NEW:** võtma
**Problēma:** “paņemt” is Latvian, not Estonian.
**LV etalons (konteksts):** paņemt
**DE konteksts:** bringen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0124
**Card ID:** a1-ein
**Field:** study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**NEW:** Laps mängib.
**Problēma:** The current text is Latvian and must be translated into Estonian.
**LV etalons (konteksts):** Bērns spēlējas.
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0125
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
#### ET-A1-0126
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
#### ET-A1-0127
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
#### ET-A1-0128
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
#### ET-A1-0133
**Card ID:** a1-es
**Field:** study.comparison[0].meaning
**CURRENT:** tas • bezpersoniska forma
**NEW:** see • umbisikuline vorm
**Problēma:** The phrase “bezpersoniska forma” is Latvian and must be replaced with Estonian.
**LV etalons (konteksts):** tas • bezpersoniska forma
**DE konteksts:** es
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0141
**Card ID:** a1-heißen
**Field:** study.comparison[4].meaning
**CURRENT:** zvanīt
**NEW:** helistama
**Problēma:** “zvanīt” is Latvian, not Estonian; the Estonian equivalent is “helistama”.
**LV etalons (konteksts):** zvanīt
**DE konteksts:** heißen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.2 HIGH atradumi (99)

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
#### ET-A1-0065
**Card ID:** a1-sprechen-study
**Field:** study.examples[2].lv
**CURRENT:** ma räägin saksa keelt.
**NEW:** Ta räägib oma õpetajaga.
**Problēma:** Näide kordab eelmise näite sisu ega tõlgi lauset „Ta räägib oma õpetajaga“.
**LV etalons (konteksts):** Viņa runā ar savu skolotāju.
**DE konteksts:** sprechen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0066
**Card ID:** a1-klein-study
**Field:** study.examples[1].lv
**CURRENT:** tuba on väike.
**NEW:** Laps on veel väike.
**Problēma:** Eestikeelne näide kirjeldab tuba, kuid lähtefraas räägib lapsest.
**LV etalons (konteksts):** Bērns vēl ir mazs.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0067
**Card ID:** a1-klein-study
**Field:** study.examples[2].lv
**CURRENT:** laps on veel väike.
**NEW:** Mul on väike kott.
**Problēma:** Eestikeelne näide kordab eelmise näite sisu ega tõlgi lauset „Mul on väike kott“.
**LV etalons (konteksts):** Man ir maza soma.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0081
**Card ID:** a1-auch-study
**Field:** study.examples[1].lv
**CURRENT:** ma tulen ka.
**NEW:** Ta töötab ka siin.
**Problēma:** Näide kordab esimese näite sisu ega tõlgi lauset „Ta töötab ka siin“.
**LV etalons (konteksts):** Viņa arī strādā šeit.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0082
**Card ID:** a1-auch-study
**Field:** study.examples[2].lv
**CURRENT:** ta töötab ka siin.
**NEW:** Ma soovin teile ka head päeva.
**Problēma:** Eestikeelne näide kordab eelmise näite sisu ega tõlgi päevasesoovi.
**LV etalons (konteksts):** Es arī novēlu jums jauku dienu.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0100
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** ta ujub väga hästi.
**NEW:** Ta supleb väga hästi.
**Problēma:** „Ujub“ vastab verbile schwimmen, mitte baden; see on ka kaardi võrdluses eristatav.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0105
**Card ID:** a1-bitte
**Field:** study.examples[0].lv
**CURRENT:** Palun!
**NEW:** Üks tass kohvi, palun.
**Problēma:** The Estonian text means only “Please!”, omitting the requested coffee.
**LV etalons (konteksts):** Vienu tasi kafijas, lūdzu.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0107
**Card ID:** a1-bitte
**Field:** study.examples[2].lv
**CURRENT:** üks tass kohvi, palun.
**NEW:** Palun!
**Problēma:** This text translates the other example and adds a coffee request absent from the source.
**LV etalons (konteksts):** Lūdzu!
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0110
**Card ID:** a1-bitte-study
**Field:** study.examples[1].lv
**CURRENT:** palun!
**NEW:** Ta täidab minu palve.
**Problēma:** The current text means “please!”, not “He fulfills my request.”
**LV etalons (konteksts):** Viņš izpilda manu lūgumu.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0111
**Card ID:** a1-bitte-study
**Field:** study.examples[2].lv
**CURRENT:** üks tass kohvi, palun.
**NEW:** Tal on kaks palvet.
**Problēma:** The current text means “one coffee, please”, not “She has two requests.”
**LV etalons (konteksts):** Viņai ir divi lūgumi.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0114
**Card ID:** a1-bleiben
**Field:** study.examples[3].lv
**CURRENT:** ma lähen koju.
**NEW:** ma jään koju.
**Problēma:** For German “bleiben”, the Estonian must express staying, not going home.
**LV etalons (konteksts):** es eju mājās.
**DE konteksts:** bleiben
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0115
**Card ID:** a1-bringen
**Field:** study.examples[0].lv
**CURRENT:** too mulle palun vett.
**NEW:** Ma toon sulle raamatu.
**Problēma:** The current text requests water and does not translate “I bring you a book.”
**LV etalons (konteksts):** Es tev atnesu grāmatu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0116
**Card ID:** a1-bringen
**Field:** study.examples[1].lv
**CURRENT:** ma viin sind koju.
**NEW:** Ma viin paki postkontorisse.
**Problēma:** The current text means “I take you home”, not “I take a package to the post office.”
**LV etalons (konteksts):** Es aiznesu paku uz pastu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0117
**Card ID:** a1-bringen
**Field:** study.examples[2].lv
**CURRENT:** ta viib raamatu kooli.
**NEW:** Ma viin lapsed kooli.
**Problēma:** The current text changes both subject and object: it says he takes a book, not I take children.
**LV etalons (konteksts):** Es aizvedu bērnus uz skolu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0123
**Card ID:** a1-dieser
**Field:** study.examples[1].lv
**CURRENT:** mulle meeldib see koer.
**NEW:** Ma näen seda koera.
**Problēma:** The current text means “I like this dog”, not “I see this dog.”
**LV etalons (konteksts):** Es redzu šo suni.
**DE konteksts:** dieser
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0129
**Card ID:** a1-es
**Field:** study.examples[0].lv
**CURRENT:** ma õpin saksa keelt.
**NEW:** Sajab.
**Problēma:** Estonian sentence does not translate the impersonal German/Latvian example “It rains”.
**LV etalons (konteksts):** Līst.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0130
**Card ID:** a1-es
**Field:** study.examples[1].lv
**CURRENT:** ta on väsinud.
**NEW:** On külm.
**Problēma:** Current sentence means “he/she is tired”, not the impersonal expression “it is cold”.
**LV etalons (konteksts):** Ir auksts.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0131
**Card ID:** a1-es
**Field:** study.examples[2].lv
**CURRENT:** ta töötab siin.
**NEW:** Laps magab.
**Problēma:** Current sentence means “he/she works here”, not “the child is sleeping”.
**LV etalons (konteksts):** Bērns guļ.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0132
**Card ID:** a1-es
**Field:** study.examples[3].lv
**CURRENT:** see on minu raamat.
**NEW:** See on väsinud.
**Problēma:** Current sentence means “this is my book”, not “it is tired”.
**LV etalons (konteksts):** Tas ir noguris.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0134
**Card ID:** a1-es
**Field:** study.comparison[1].meaning
**CURRENT:** es (persona)
**NEW:** mina (isik)
**Problēma:** The comparison should identify Latvian “es” as the personal pronoun “mina”, not retain the ambiguous form “es”.
**LV etalons (konteksts):** es (persona)
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0136
**Card ID:** a1-finden
**Field:** study.examples[0].lv
**CURRENT:** ma ei leia oma võtit.
**NEW:** Ma leian oma võtme.
**Problēma:** The negation reverses the meaning: the source says “I find my key”, not “I cannot find it”.
**LV etalons (konteksts):** Es atrodu savu atslēgu.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0137
**Card ID:** a1-finden
**Field:** study.examples[1].lv
**CURRENT:** kas sa leidsid oma telefoni?
**NEW:** Minu meelest on see hea.
**Problēma:** Current sentence asks whether the phone was found; it does not express an opinion that something seems good.
**LV etalons (konteksts):** Man tas šķiet labi.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0138
**Card ID:** a1-finden
**Field:** study.examples[2].lv
**CURRENT:** minu meelest on see hea.
**NEW:** Mida sa filmist arvad?
**Problēma:** Current sentence gives an opinion instead of asking what someone thinks about the film.
**LV etalons (konteksts):** ko tu domā par filmu?
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0139
**Card ID:** a1-finden
**Field:** study.examples[3].lv
**CURRENT:** minu meelest on see hea.
**NEW:** Minu meelest on see hea.
**Problēma:** The translation is correct, but it is duplicated from the preceding mismatched example; the source order requires this sentence here.
**LV etalons (konteksts):** Man tas šķiet labi.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0140
**Card ID:** a1-gross-study
**Field:** study.examples[1].lv
**CURRENT:** maja on suur.
**NEW:** Berliin on suur linn.
**Problēma:** Current sentence says “the house is big”; it does not translate “Berlin is a big city”.
**LV etalons (konteksts):** Berlīne ir liela pilsēta.
**DE konteksts:** groß
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0142
**Card ID:** a1-hoch-study
**Field:** study.examples[1].lv
**CURRENT:** mägi on kõrge.
**NEW:** riiul on kaks meetrit kõrge.
**Problēma:** The source sentence refers to a shelf, but the Estonian says “mountain”; both subject and measurement are mistranslated.
**LV etalons (konteksts):** plaukts ir divus metrus augsts.
**DE konteksts:** hoch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0196
**Card ID:** a1-probieren
**Field:** study.comparison[1].meaning
**CURRENT:** testima / kontrollima
**NEW:** proovima
**Problēma:** Läti „mēģināt“ tähendab „proovima“, mitte „testima / kontrollima“.
**LV etalons (konteksts):** mēģināt
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0197
**Card ID:** a1-probieren
**Field:** study.comparison[2].meaning
**CURRENT:** üritama
**NEW:** kontrollima
**Problēma:** Läti „pārbaudīt“ tähendab „kontrollima“; „üritama“ tähendab hoopis proovimist või püüdmist.
**LV etalons (konteksts):** pārbaudīt
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0198
**Card ID:** a1-probieren
**Field:** study.comparison[3].meaning
**CURRENT:** kontrollima
**NEW:** selga proovima
**Problēma:** „Pielaikot“ tähendab rõivast selga proovima, mitte kontrollima.
**LV etalons (konteksts):** pielaikot
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0203
**Card ID:** a1-sie-study-2
**Field:** study.examples[1].lv
**CURRENT:** ta teeb süüa.
**NEW:** Teete süüa.
**Problēma:** Formaalse „Sie“ vaste peab olema viisakas teine isik, mitte ainsuse kolmas isik „ta“.
**LV etalons (konteksts):** viņa gatavo.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0204
**Card ID:** a1-sie-study-2
**Field:** study.examples[2].lv
**CURRENT:** ta sööb.
**NEW:** Te sööte.
**Problēma:** Formaalse „Sie“ vaste peab olema viisakas teine isik, mitte ainsuse kolmas isik „ta“.
**LV etalons (konteksts):** viņa ēd.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0205
**Card ID:** a1-sie-study-2
**Field:** study.examples[3].lv
**CURRENT:** nad teevad süüa.
**NEW:** Teete süüa.
**Problēma:** „Nad“ tähendab kolmandat isikut; formaalne „Sie“ nõuab eesti keeles viisakat teise isiku vormi.
**LV etalons (konteksts):** viņi gatavo.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0206
**Card ID:** a1-sie-study-2
**Field:** study.examples[4].lv
**CURRENT:** nad mängivad jalgpalli.
**NEW:** Te mängite jalgpalli.
**Problēma:** „Nad“ tähendab kolmandat isikut; formaalne „Sie“ nõuab eesti keeles viisakat teise isiku vormi.
**LV etalons (konteksts):** viņi spēlē futbolu.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0207
**Card ID:** a1-unter
**Field:** study.examples[3].lv
**CURRENT:** lamp ripub laua kohal.
**NEW:** lamp ripub laua all.
**Problēma:** Näide kirjeldab üleval olemist ehk über, mitte unter; eestikeelne lause ei vasta kaardi saksa märksõnale.
**LV etalons (konteksts):** lampa karājas virs galda.
**DE konteksts:** unter
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0208
**Card ID:** a1-verstehen
**Field:** study.examples[3].lv
**CURRENT:** ma oskan saksa keelt rääkida.
**NEW:** ma saan saksa keelest aru.
**Problēma:** Oskama rääkida tähendab können, mitte verstehen; näide ei illustreeri mõistmist.
**LV etalons (konteksts):** es protu runāt vāciski.
**DE konteksts:** verstehen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0209
**Card ID:** a1-vor
**Field:** study.examples[3].lv
**CURRENT:** pärast söömist läheme jalutama.
**NEW:** enne söömist läheme jalutama.
**Problēma:** Praegune näide kasutab vastandsuunda pärast; vor tähendab siin enne.
**LV etalons (konteksts):** pēc ēšanas mēs ejam pastaigāties.
**DE konteksts:** vor
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0210
**Card ID:** a1-wenn
**Field:** study.examples[3].lv
**CURRENT:** ma ei tea, kas ta tuleb.
**NEW:** Kui ta tuleb, siis ma ei tea.
**Problēma:** Kas-ta konstruktsioon tähendab „ob”, mitte „wenn”; praegune näide ei illustreeri tingimuslauset.
**LV etalons (konteksts):** es nezinu, vai viņš nāks.
**DE konteksts:** wenn
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0211
**Card ID:** a1-wer
**Field:** study.translation
**CURRENT:** kes • kumb
**NEW:** kes
**Problēma:** Wer tähendab „kes”; „kumb” vastab pigem saksa sõnale welcher.
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0212
**Card ID:** a1-wer
**Field:** study.examples[0].lv
**CURRENT:** Mis see on?
**NEW:** Kes see on?
**Problēma:** Wer küsib inimese kohta „kes”; „mis see on?” vastab sõnale was.
**LV etalons (konteksts):** Kas tas ir?
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0213
**Card ID:** a1-werden
**Field:** study.examples[3].lv
**CURRENT:** ma olen väsinud.
**NEW:** ma muutun väsinuks.
**Problēma:** „Ma olen väsinud” tähendab sein, mitte werden; werden väljendab muutumist või seisundisse jõudmist.
**LV etalons (konteksts):** es esmu noguris.
**DE konteksts:** werden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0215
**Card ID:** a1-zum
**Field:** study.comparison[1].meaning
**CURRENT:** -sse / juurde (naissugu)
**NEW:** -sse / juurde (mees- või kesksugu)
**Problēma:** zum = zu dem, mida kasutatakse meessoo või kesks soo, mitte naissoo korral.
**LV etalons (konteksts):** uz / pie (siev. dzimte)
**DE konteksts:** zum
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.3 MEDIUM atradumi (32)

#### ET-A1-0060
**Card ID:** a1-Arm-44
**Field:** etText
**CURRENT:** käsi
**NEW:** käsivars
**Problēma:** Saksa Arm tähendab käsivart; käsi tähendab eeskätt kätt ja ei ole siin täpne vaste.
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0061
**Card ID:** a1-ganz-219
**Field:** etText
**CURRENT:** kõik
**NEW:** terve
**Problēma:** „Kõik” tähendab „all/everything”, mitte „whole/entire”, mis on „ganz” põhitähendusena.
**LV etalons (konteksts):** vesels
**DE konteksts:** ganz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0062
**Card ID:** a1-kochen-317
**Field:** etText
**CURRENT:** valmistama
**NEW:** toitu valmistama
**Problēma:** „Valmistama” tähendab üldiselt valmistamist; „kochen” täpsem vaste on „toitu valmistama”.
**LV etalons (konteksts):** gatavot
**DE konteksts:** kochen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0063
**Card ID:** a1-nicht-447
**Field:** etText
**CURRENT:** ei
**NEW:** mitte
**Problēma:** „Ei“ tähendab eesti keeles peamiselt „nein“; „nicht“ vaste on „mitte“.
**LV etalons (konteksts):** ne
**DE konteksts:** nicht
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0086
**Card ID:** a1-auf
**Field:** study.comparison[1].meaning
**CURRENT:** juures (vertikaalne pind)
**NEW:** juures (vertikaalse pinna juures)
**Problēma:** Sulgudes olev väljend on praegu grammatilise seoseta nimisõnafraas.
**LV etalons (konteksts):** pie (vertikālas virsmas)
**DE konteksts:** auf
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0106
**Card ID:** a1-bitte
**Field:** study.examples[1].lv
**CURRENT:** palun!
**NEW:** Palun tule sisse!
**Problēma:** The translation omits the imperative “come in” and is reduced to “please”.
**LV etalons (konteksts):** Lūdzu, nāc iekšā.
**DE konteksts:** bitte
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0118
**Card ID:** a1-bringen
**Field:** study.comparison[1].meaning
**CURRENT:** võtma / kätte võtma
**NEW:** viima / ära viima
**Problēma:** “võtma” means take, while aiznest is carrying or taking something away.
**LV etalons (konteksts):** aiznest
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0119
**Card ID:** a1-bringen
**Field:** study.comparison[2].meaning
**CURRENT:** järele minema / tooma
**NEW:** viima / sõidutama
**Problēma:** aizvest means taking or transporting someone/something, not fetching.
**LV etalons (konteksts):** aizvest
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0122
**Card ID:** a1-dass
**Field:** study.comparison[2].meaning
**CURRENT:** et
**NEW:** selleks et
**Problēma:** “et” can mean dass, but “lai” expresses purpose and should be distinguished as “selleks et”.
**LV etalons (konteksts):** lai
**DE konteksts:** dass
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0135
**Card ID:** a1-euch
**Field:** study.tip.text
**CURRENT:** “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teie”.
**NEW:** “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teid”.
**Problēma:** As a direct object, the Estonian equivalent is “teid”, not the subject/genitive form “teie”.
**LV etalons (konteksts):** “euch” atbild uz jautājumu “kam?” vai ir tiešais papildinājums teikumos ar “jūs”.
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0143
**Card ID:** a1-jung
**Field:** etMain
**CURRENT:** noor (inimeste kohta)
**NEW:** noor
**Problēma:** German “jung” also applies to animals and things; the qualifier incorrectly restricts it to people.
**LV etalons (konteksts):** jauns (par cilvēkiem)
**DE konteksts:** jung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0144
**Card ID:** a1-jung
**Field:** study.translation
**CURRENT:** noor (inimeste kohta)
**NEW:** noor
**Problēma:** German “jung” also applies to animals and things; the qualifier incorrectly restricts it to people.
**LV etalons (konteksts):** jauns (par cilvēkiem)
**DE konteksts:** jung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0145
**Card ID:** a1-können
**Field:** study.comparison[2].meaning
**CURRENT:** vajama / pidama
**NEW:** pidama / olema vaja
**Problēma:** Vajama tähendab 'needima', mitte kohustust või vajalikkust; saksa müssen-vastena sobivad pidama ja olema vaja.
**LV etalons (konteksts):** vajadzēt / būt jā-
**DE konteksts:** können
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0146
**Card ID:** a1-kosten
**Field:** study.examples[4].lv
**CURRENT:** ma maksan arve.
**NEW:** arve maksab palju.
**Problēma:** Maksan arve tähendab 'ich bezahle die Rechnung', mitte 'die Rechnung kostet'.
**LV etalons (konteksts):** es maksāju rēķinu.
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0147
**Card ID:** a1-kosten
**Field:** study.examples[5].lv
**CURRENT:** kas ma saan sularahas maksta?
**NEW:** Kui palju see maksab?
**Problēma:** Sularahas maksma tähendab tasumist; kosten väljendab asja või hinna maksumust.
**LV etalons (konteksts):** vai varu maksāt skaidrā naudā?
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0148
**Card ID:** a1-kosten
**Field:** study.examples[7].lv
**CURRENT:** ma maksan kohe.
**NEW:** See maksab viis eurot.
**Problēma:** Ma maksan kohe tähendab 'ich werde sofort bezahlen', mitte 'es kostet'.
**LV etalons (konteksts):** es samaksāšu tūlīt.
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0149
**Card ID:** a1-kosten
**Field:** study.comparison[1].meaning
**CURRENT:** maksma • ära maksma (raha)
**NEW:** maksma (hinda)
**Problēma:** Ära maksma tähendab tasumist ja kuulub bezahlen tähendusse, mitte kosten juurde.
**LV etalons (konteksts):** maksāt • samaksāt (naudu)
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0150
**Card ID:** a1-kosten
**Field:** study.comparison[2].meaning
**CURRENT:** maksma • ära maksma
**NEW:** maksma (hinda)
**Problēma:** Ära maksma tähendab tasumist ja kuulub bezahlen tähendusse, mitte kosten juurde.
**LV etalons (konteksts):** maksāt • samaksāt
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0151
**Card ID:** a1-laden-study
**Field:** study.examples[3].lv
**CURRENT:** ma pean telefoni laadima.
**NEW:** Ma lähen poodi.
**Problēma:** Telefoni laadima vastab saksa verbile laden, kuid kaardil olev Laden on nimisõna 'pood'.
**LV etalons (konteksts):** man jāuzlādē telefons.
**DE konteksts:** Laden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0152
**Card ID:** a1-laut
**Field:** study.examples[4].lv
**CURRENT:** heli on ilus.
**NEW:** Heli on väga vali.
**Problēma:** Ilus heli vastab tähendusele 'schöner Klang', mitte omadussõnale laut ehk vali.
**LV etalons (konteksts):** skaņa ir skaista.
**DE konteksts:** laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0153
**Card ID:** a1-laut
**Field:** study.examples[5].lv
**CURRENT:** ma kuulen mingit heli.
**NEW:** Ma kuulen mingit valju heli.
**Problēma:** Praegune lause tähendab lihtsalt 'ma kuulen heli' ega väljenda omadust vali ehk laut.
**LV etalons (konteksts):** es dzirdu kādu skaņu.
**DE konteksts:** laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0154
**Card ID:** a1-laut-study
**Field:** study.examples[1].lv
**CURRENT:** muusika on vali.
**NEW:** Muusika heli on vali.
**Problēma:** Laut on nimisõna 'heli'; praegune lause kasutab ainult omadussõna vali.
**LV etalons (konteksts):** mūzika ir skaļa.
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0155
**Card ID:** a1-laut-study
**Field:** study.examples[2].lv
**CURRENT:** ära räägi nii valjult!
**NEW:** See heli on liiga vali.
**Problēma:** Praegune lause tähendab 'ära räägi nii valjult' ega õpeta nimisõna heli.
**LV etalons (konteksts):** nerunā tik skaļi!
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0156
**Card ID:** a1-laut-study
**Field:** study.examples[3].lv
**CURRENT:** see on väga vali.
**NEW:** See heli on väga vali.
**Problēma:** Praeguses lauses puudub nimisõna heli; see on omadussõna vali kasutus.
**LV etalons (konteksts):** tas ir ļoti skaļi.
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0160
**Card ID:** a1-liegen
**Field:** study.examples[3].lv
**CURRENT:** ma panen raamatu lauale.
**NEW:** Raamat on laual.
**Problēma:** Ma panen raamatu lauale means legen, not liegen; the German lemma denotes an already placed object.
**LV etalons (konteksts):** es nolieku grāmatu uz galda.
**DE konteksts:** liegen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0192
**Card ID:** a1-nach
**Field:** study.examples[3].lv
**CURRENT:** on kümme minutit kaheksa läbi.
**NEW:** Kell on kümme minutit üle kaheksa.
**Problēma:** The current time expression is a literal, unnatural calque; üle kaheksa is idiomatic Estonian.
**LV etalons (konteksts):** ir desmit pāri astoņiem.
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0193
**Card ID:** a1-nehmen
**Field:** study.tip.text
**CURRENT:** Pea meeles: võtab endale → nehmen; toob kellelegi → bringen.
**NEW:** Pea meeles: võta endale → nehmen; too kellelegi → bringen.
**Problēma:** Pärast „Pea meeles“ on siin loomulikumad ja allikaga kooskõlas imperatiivid „võta“ ja „too“.
**LV etalons (konteksts):** Atceries: paņem sev → nehmen; atnes kādam → bringen.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0194
**Card ID:** a1-ob
**Field:** study.examples[3].lv
**CURRENT:** kas sa tuled täna või homme?
**NEW:** ma ei tea, kas sa tuled täna või homme.
**Problēma:** „Ob“ esineb kaudses küsimuses; praegune eestikeelne näide on otsene küsimus ja illustreerib pigem „oder“.
**LV etalons (konteksts):** vai tu nāksi šodien vai rīt?
**DE konteksts:** ob
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0195
**Card ID:** a1-passen
**Field:** study.comparison[1].meaning
**CURRENT:** sobima / seisma
**NEW:** sobima / hästi sobima
**Problēma:** „Seisma“ ei tähenda rõivaste või värvi kohta „sobima“; see moonutab kaardil õpetatavat tähenduserinevust.
**LV etalons (konteksts):** piestāvēt / stāvēt
**DE konteksts:** passen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0202
**Card ID:** a1-sicher
**Field:** study.examples[3].lv
**CURRENT:** see on kindel lahendus.
**NEW:** see on ohutu lahendus.
**Problēma:** „Sicher“ tähendab siin ohutut, mitte kindlat lahendust; ülejäänud kaart kasutab selles tähenduses „ohutu“.
**LV etalons (konteksts):** tas ir drošs risinājums.
**DE konteksts:** sicher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0214
**Card ID:** a1-zu
**Field:** study.comparison[1].meaning
**CURRENT:** -sse linnade/riikidega
**NEW:** -sse linnadesse/riikidesse
**Problēma:** -ga tähendab 'koos'; sihtkoha puhul on vaja sisseütlevat käänet: linnadesse/riikidesse.
**LV etalons (konteksts):** uz ar pilsētām/valstīm
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0216
**Card ID:** a1-zum
**Field:** study.comparison[3].meaning
**CURRENT:** -sse (linnad/riigid)
**NEW:** linnade/riikide puhul: nach
**Problēma:** Linnade ja riikide nimedega kasutatakse sihtkoha tähenduses tavaliselt nach, mitte zum.
**LV etalons (konteksts):** uz (pilsētas/valstis)
**DE konteksts:** zum
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.4 LOW atradumi (72)

#### ET-A1-0064
**Card ID:** a1-sprechen-study
**Field:** study.examples[1].lv
**CURRENT:** me räägime tööst.
**NEW:** Me räägime tööst.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Mēs runājam par darbu.
**DE konteksts:** sprechen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0068
**Card ID:** a1-an
**Field:** study.examples[0].lv
**CURRENT:** seina küljes / seinal
**NEW:** Seina küljes / seinal
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** pie sienas / uz sienas
**DE konteksts:** an
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0069
**Card ID:** a1-an
**Field:** study.examples[1].lv
**CURRENT:** akna juures
**NEW:** Akna juures
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** pie loga
**DE konteksts:** an
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0070
**Card ID:** a1-an
**Field:** study.examples[2].lv
**CURRENT:** mere ääres
**NEW:** Mere ääres
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** pie jūras
**DE konteksts:** an
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0071
**Card ID:** a1-ab
**Field:** study.examples[0].lv
**CURRENT:** alates tänasest
**NEW:** Alates tänasest
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** no šodienas
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0072
**Card ID:** a1-ab
**Field:** study.examples[1].lv
**CURRENT:** alates esmaspäevast
**NEW:** Alates esmaspäevast
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** no pirmdienas
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0073
**Card ID:** a1-ab
**Field:** study.examples[2].lv
**CURRENT:** alates kella 8-st
**NEW:** Alates kella 8-st
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** no plkst. 8
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0074
**Card ID:** a1-ab
**Field:** study.examples[3].lv
**CURRENT:** jaamast
**NEW:** Jaamast
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** no stacijas
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0075
**Card ID:** a1-aber
**Field:** study.examples[0].lv
**CURRENT:** ma tahan kaasa tulla, aga mul ei ole aega.
**NEW:** Ma tahan kaasa tulla, aga mul ei ole aega.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es gribu nākt līdzi, bet man nav laika.
**DE konteksts:** aber
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0076
**Card ID:** a1-aber
**Field:** study.examples[1].lv
**CURRENT:** toit oli maitsev, aga liiga kallis.
**NEW:** Toit oli maitsev, aga liiga kallis.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** ēdiens bija garšīgs, bet pārāk dārgs.
**DE konteksts:** aber
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0077
**Card ID:** a1-aber
**Field:** study.examples[2].lv
**CURRENT:** tal on õigus, aga ma arvan teisiti.
**NEW:** Tal on õigus, aga ma arvan teisiti.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** viņam ir taisnība, taču es domāju citādi.
**DE konteksts:** aber
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0078
**Card ID:** a1-also
**Field:** study.examples[0].lv
**CURRENT:** sajab vihma, seepärast jään ma koju.
**NEW:** Sajab vihma, seepärast jään ma koju.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** līst lietus, tāpēc es palieku mājās.
**DE konteksts:** also
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0079
**Card ID:** a1-also
**Field:** study.examples[1].lv
**CURRENT:** sa oled haige, seepärast sa ei lähe tööle.
**NEW:** Sa oled haige, seepärast sa ei lähe tööle.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** tu esi slims, tāpēc neej uz darbu.
**DE konteksts:** also
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0080
**Card ID:** a1-also
**Field:** study.examples[2].lv
**CURRENT:** ma olen palju õppinud, seega saan nüüd aru.
**NEW:** Ma olen palju õppinud, seega saan nüüd aru.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es daudz esmu mācījies, tātad tagad saprotu.
**DE konteksts:** also
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0083
**Card ID:** a1-auf
**Field:** study.examples[0].lv
**CURRENT:** ma panen raamatu lauale.
**NEW:** Ma panen raamatu lauale.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es lieku grāmatu uz galda.
**DE konteksts:** auf
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0084
**Card ID:** a1-auf
**Field:** study.examples[1].lv
**CURRENT:** me sõidame mäele.
**NEW:** Me sõidame mäele.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** mēs braucam uz kalnu.
**DE konteksts:** auf
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0085
**Card ID:** a1-auf
**Field:** study.examples[2].lv
**CURRENT:** kass hüppab diivanile.
**NEW:** Kass hüppab diivanile.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** kaķis lec uz dīvāna.
**DE konteksts:** auf
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0087
**Card ID:** a1-aus
**Field:** study.examples[0].lv
**CURRENT:** ma olen Saksamaalt.
**NEW:** Ma olen Saksamaalt.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es esmu no Vācijas.
**DE konteksts:** aus
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0088
**Card ID:** a1-aus
**Field:** study.examples[1].lv
**CURRENT:** ta läheb majast välja.
**NEW:** Ta läheb majast välja.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** viņš iziet no mājas.
**DE konteksts:** aus
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0089
**Card ID:** a1-aus
**Field:** study.examples[2].lv
**CURRENT:** ma võtan raamatu kotist välja.
**NEW:** Ma võtan raamatu kotist välja.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es izņemu grāmatu no somas.
**DE konteksts:** aus
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0090
**Card ID:** a1-aufs
**Field:** study.examples[0].lv
**CURRENT:** ma lähen katusele.
**NEW:** Ma lähen katusele.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Es eju uz jumta.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0091
**Card ID:** a1-aufs
**Field:** study.examples[1].lv
**CURRENT:** ta istub diivanile.
**NEW:** Ta istub diivanile.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** viņa apsēžas uz dīvāna.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0092
**Card ID:** a1-aufs
**Field:** study.examples[2].lv
**CURRENT:** me sõidame maale.
**NEW:** Me sõidame maale.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** mēs braucam uz laukiem.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0093
**Card ID:** a1-aufs
**Field:** study.examples[3].lv
**CURRENT:** pane kott voodile.
**NEW:** Pane kott voodile.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** noliec somu uz gultas.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0094
**Card ID:** a1-aufs
**Field:** study.examples[4].lv
**CURRENT:** ta ronib hobuse selga.
**NEW:** Ta ronib hobuse selga.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Viņš uzlec zirgam mugurā.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0095
**Card ID:** a1-aufs
**Field:** study.examples[5].lv
**CURRENT:** pane raamat riiulile.
**NEW:** Pane raamat riiulile.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Noliec grāmatu uz plaukta.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0096
**Card ID:** a1-aufs
**Field:** study.examples[6].lv
**CURRENT:** tule kiiresti paati!
**NEW:** Tule kiiresti paati!
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Kāp ātri laivā!
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0097
**Card ID:** a1-aufs
**Field:** study.examples[7].lv
**CURRENT:** me läheme peole.
**NEW:** Me läheme peole.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** mēs ejam uz svinībām.
**DE konteksts:** aufs
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0098
**Card ID:** a1-baden
**Field:** study.examples[0].lv
**CURRENT:** ma lähen ujuma.
**NEW:** Ma lähen ujuma.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es eju peldēties.
**DE konteksts:** baden
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0099
**Card ID:** a1-baden
**Field:** study.examples[1].lv
**CURRENT:** me läheme järve ujuma.
**NEW:** Me läheme järve ujuma.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** mēs ejam peldēties ezerā.
**DE konteksts:** baden
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0101
**Card ID:** a1-baden
**Field:** study.examples[3].lv
**CURRENT:** ma käin igal esmaspäeval ujumas.
**NEW:** Ma käin igal esmaspäeval ujumas.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Es peldu katru pirmdienu.
**DE konteksts:** baden
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0102
**Card ID:** a1-bei
**Field:** study.examples[0].lv
**CURRENT:** ma olen oma sõbra juures.
**NEW:** Ma olen oma sõbra juures.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** es esmu pie sava drauga.
**DE konteksts:** bei
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0103
**Card ID:** a1-bei
**Field:** study.examples[1].lv
**CURRENT:** ta töötab Siemensis.
**NEW:** Ta töötab Siemensis.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** Viņa strādā uzņēmumā Siemens.
**DE konteksts:** bei
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0104
**Card ID:** a1-bei
**Field:** study.examples[2].lv
**CURRENT:** vihma korral jääme koju.
**NEW:** Vihma korral jääme koju.
**Problēma:** Lause algus peab olema suure algustähega.
**LV etalons (konteksts):** lietus laikā mēs paliekam mājās.
**DE konteksts:** bei
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0120
**Card ID:** a1-bringen
**Field:** study.comparison[3].meaning
**CURRENT:** kaasa võtma ja kohale tooma
**NEW:** kohale toimetama
**Problēma:** “kohale toimetama” is the natural concise equivalent of “deliver/transport”.
**LV etalons (konteksts):** nogādāt
**DE konteksts:** bringen
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0157
**Card ID:** a1-leise-study
**Field:** study.examples[1].lv
**CURRENT:** palun, ole vaikne.
**NEW:** Palun, ole vaikne.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** lūdzu, esi kluss.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0158
**Card ID:** a1-leise-study
**Field:** study.examples[2].lv
**CURRENT:** muusika on vaikne.
**NEW:** Muusika on vaikne.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** mūzika ir klusa.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0159
**Card ID:** a1-leise-study
**Field:** study.examples[3].lv
**CURRENT:** palun, räägi vaikselt.
**NEW:** Palun, räägi vaikselt.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** lūdzu, runā klusi.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0161
**Card ID:** a1-mal
**Field:** study.examples[0].lv
**CURRENT:** esimest korda oli raske.
**NEW:** Esimest korda oli raske.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** pirmo reizi bija grūti.
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0162
**Card ID:** a1-mal
**Field:** study.examples[1].lv
**CURRENT:** ma olen juba kaks korda Berliinis käinud.
**NEW:** Ma olen juba kaks korda Berliinis käinud.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es jau divreiz biju Berlīnē.
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0163
**Card ID:** a1-mal
**Field:** study.examples[2].lv
**CURRENT:** üks kord piisab.
**NEW:** Üks kord piisab.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** vienreiz pietiek.
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0164
**Card ID:** a1-mal
**Field:** study.examples[3].lv
**CURRENT:** veel üks kord, palun!
**NEW:** Veel üks kord, palun!
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** vēl vienu reizi, lūdzu!
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0165
**Card ID:** a1-mann
**Field:** study.examples[0].lv
**CURRENT:** ta on tore mees.
**NEW:** Ta on tore mees.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** viņš ir jauks vīrietis.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0166
**Card ID:** a1-mann
**Field:** study.examples[1].lv
**CURRENT:** see on minu mees.
**NEW:** See on minu mees.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** tas ir mans vīrs.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0167
**Card ID:** a1-mann
**Field:** study.examples[2].lv
**CURRENT:** kui palju mehi on siin?
**NEW:** Kui palju mehi on siin?
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** cik vīriešu ir šeit?
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0168
**Card ID:** a1-mann
**Field:** study.examples[3].lv
**CURRENT:** minu mees töötab Berliinis.
**NEW:** Minu mees töötab Berliinis.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** mans vīrs strādā Berlīnē.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0169
**Card ID:** a1-mann
**Field:** study.examples[4].lv
**CURRENT:** mees kannab ülikonda.
**NEW:** Mees kannab ülikonda.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** vīrietis valkā uzvalku.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0170
**Card ID:** a1-mann
**Field:** study.examples[5].lv
**CURRENT:** tema mees on arst.
**NEW:** Tema mees on arst.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** viņas vīrs ir ārsts.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0171
**Card ID:** a1-mit
**Field:** study.examples[0].lv
**CURRENT:** ma tulen sinuga.
**NEW:** Ma tulen sinuga.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es nāku ar tevi.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0172
**Card ID:** a1-mit
**Field:** study.examples[1].lv
**CURRENT:** ma sõidan bussiga.
**NEW:** Ma sõidan bussiga.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es braucu ar autobusu.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0173
**Card ID:** a1-mit
**Field:** study.examples[2].lv
**CURRENT:** ta kirjutab pastakaga.
**NEW:** Ta kirjutab pastakaga.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** viņa raksta ar pildspalvu.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0174
**Card ID:** a1-mit
**Field:** study.examples[3].lv
**CURRENT:** kas sa tuled kaasa?
**NEW:** Kas sa tuled kaasa?
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** vai tu nāksi līdzi?
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0175
**Card ID:** a1-mögen
**Field:** study.examples[0].lv
**CURRENT:** mulle meeldib muusika.
**NEW:** Mulle meeldib muusika.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** man patīk mūzika.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0176
**Card ID:** a1-mögen
**Field:** study.examples[1].lv
**CURRENT:** kas sulle maitseb kohv?
**NEW:** Kas sulle maitseb kohv?
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** vai tev garšo kafija?
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0177
**Card ID:** a1-mögen
**Field:** study.examples[2].lv
**CURRENT:** talle meeldivad lapsed.
**NEW:** Talle meeldivad lapsed.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** viņai patīk bērni.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0178
**Card ID:** a1-mögen
**Field:** study.examples[3].lv
**CURRENT:** ma sooviksin kohvi.
**NEW:** Ma sooviksin kohvi.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es gribētu kafiju.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0179
**Card ID:** a1-morgen
**Field:** study.examples[1].lv
**CURRENT:** homseni!
**NEW:** Homseni!
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** līdz rīt!
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0180
**Card ID:** a1-morgen
**Field:** study.examples[2].lv
**CURRENT:** ma tulen homme.
**NEW:** Ma tulen homme.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es nāku rīt.
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0181
**Card ID:** a1-morgen
**Field:** study.examples[3].lv
**CURRENT:** homme on esmaspäev.
**NEW:** Homme on esmaspäev.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** rīt ir pirmdiena.
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0182
**Card ID:** a1-morgen-study
**Field:** study.examples[1].lv
**CURRENT:** homseni!
**NEW:** Homseni!
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** līdz rīt!
**DE konteksts:** Morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0183
**Card ID:** a1-morgen-study
**Field:** study.examples[2].lv
**CURRENT:** ma tulen homme.
**NEW:** Ma tulen homme.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es nāku rīt.
**DE konteksts:** Morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0184
**Card ID:** a1-morgen-study
**Field:** study.examples[3].lv
**CURRENT:** homme on esmaspäev.
**NEW:** Homme on esmaspäev.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** rīt ir pirmdiena.
**DE konteksts:** Morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0185
**Card ID:** a1-müssen
**Field:** study.examples[0].lv
**CURRENT:** ma pean minema.
**NEW:** Ma pean minema.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** man jāiet.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0186
**Card ID:** a1-müssen
**Field:** study.examples[1].lv
**CURRENT:** sa pead ootama.
**NEW:** Sa pead ootama.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** tev jāgaida.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0187
**Card ID:** a1-müssen
**Field:** study.examples[2].lv
**CURRENT:** me peame õppima.
**NEW:** Me peame õppima.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** mums jāmācās.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0188
**Card ID:** a1-müssen
**Field:** study.examples[3].lv
**CURRENT:** ma pean täna töötama.
**NEW:** Ma pean täna töötama.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** man šodien jāstrādā.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0189
**Card ID:** a1-nach
**Field:** study.examples[0].lv
**CURRENT:** ma sõidan Berliini.
**NEW:** Ma sõidan Berliini.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** es braucu uz Berlīni.
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0190
**Card ID:** a1-nach
**Field:** study.examples[1].lv
**CURRENT:** me läheme koju.
**NEW:** Me läheme koju.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** mēs ejam uz mājām.
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0191
**Card ID:** a1-nach
**Field:** study.examples[2].lv
**CURRENT:** pärast söömist läheme jalutama.
**NEW:** Pärast söömist läheme jalutama.
**Problēma:** Estonian sentence beginnings must be capitalized.
**LV etalons (konteksts):** pēc ēšanas mēs ejam pastaigāties.
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0199
**Card ID:** a1-schwimmen
**Field:** study.comparison[0].meaning
**CURRENT:** ujuma liikumisena või spordina
**NEW:** ujumine kui liikumine või sport
**Problēma:** Praegune väljend on kohmakas; nimisõnaline vorm on selles võrdluses loomulikum.
**LV etalons (konteksts):** peldēt kā kustība vai sports
**DE konteksts:** schwimmen
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0200
**Card ID:** a1-sich
**Field:** study.comparison[1].meaning
**CURRENT:** mind / ennast ich puhul
**NEW:** mind / ennast koos „ich“-iga
**Problēma:** „ich puhul“ ei ole loomulik ega korrektne väljend; võrdlus vajab sobivat kaassõnaühendit.
**LV etalons (konteksts):** mani / sevi pie ich
**DE konteksts:** sich
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0201
**Card ID:** a1-sich
**Field:** study.comparison[2].meaning
**CURRENT:** sind / ennast du puhul
**NEW:** sind / ennast koos „du“-ga
**Problēma:** „du puhul“ ei ole loomulik ega korrektne väljend; võrdlus vajab sobivat kaassõnaühendit.
**LV etalons (konteksts):** tevi / sevi pie du
**DE konteksts:** sich
**Smagums:** LOW
**Kategorija:** GRAMMAR
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
