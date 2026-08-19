# ET–DE A1 pilns lingvistiskais un kvalitātes audits

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.1**
**Papildu standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Audita datums:** 2026-08-18
**Auditors:** deterministiskā pārbaude + **GPT-5.6 Luna** (READ-ONLY)
**Production fails:** `data/et/a1.js` + `www/data/et/a1.js` (mirror)
**Piezīme:** Igaunijas tulkojumi glabājas laukā `lv` (projekta konvencija). DE etalons: `data/a1.js`.
**DE:** STRICT READ-ONLY · **Production changes:** **0**

**MASTER STANDARD:** `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1  
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`  
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`  
**SCOPE:** ET–DE A1  
**STAGE RESULT:** **NEEDS OWNER REVIEW** (OWNER-PREP §7.6 complete)

| OWNER artefakts | Fails |
|-----------------|-------|
| OWNER VIEW | [et-a1-owner-view.md](./et-a1-owner-view.md) |
| OWNER DECISIONS | [et-a1-owner-decisions.md](./et-a1-owner-decisions.md) |
| GitHub indekss | [et-a1-owner-review-GITHUB.md](./et-a1-owner-review-GITHUB.md) |
| Audit JSON | [et-a1-full-audit.json](./et-a1-full-audit.json) |

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Production kartītes | **702** |
| Auditētas kartītes (Luna) | **100%** |
| Study objekti | **124/134** |
| Kopējie atradumi | **210** |
| CRITICAL | **14** |
| HIGH | **104** |
| MEDIUM | **46** |
| LOW | **46** |
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
#### ET-A1-0090
**Card ID:** a1-bitte
**Field:** study.comparison[0].meaning
**CURRENT:** lūdzu
**NEW:** palun
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0091
**Card ID:** a1-bitte
**Field:** study.comparison[1].meaning
**CURRENT:** lūgums
**NEW:** palve
**Problēma:** The Estonian field contains Latvian text; the noun meaning is palve.
**LV etalons (konteksts):** lūgums
**DE konteksts:** bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0094
**Card ID:** a1-bitte-study
**Field:** study.comparison[0].meaning
**CURRENT:** lūgums
**NEW:** palve
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** lūgums
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0095
**Card ID:** a1-bitte-study
**Field:** study.comparison[1].meaning
**CURRENT:** lūdzu
**NEW:** palun
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** lūdzu
**DE konteksts:** Bitte
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0103
**Card ID:** a1-bringen
**Field:** study.comparison[4].meaning
**CURRENT:** paņemt
**NEW:** võtma
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** paņemt
**DE konteksts:** bringen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0106
**Card ID:** a1-ein
**Field:** study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**NEW:** Laps mängib.
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** Bērns spēlējas.
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0107
**Card ID:** a1-ein
**Field:** study.comparison[0].meaning
**CURRENT:** vīriešu dzimte
**NEW:** meessugu
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** vīriešu dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0108
**Card ID:** a1-ein
**Field:** study.comparison[1].meaning
**CURRENT:** sieviešu dzimte
**NEW:** naissugu
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** sieviešu dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0109
**Card ID:** a1-ein
**Field:** study.comparison[2].meaning
**CURRENT:** vidus dzimte
**NEW:** kesksugu
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** vidus dzimte
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0110
**Card ID:** a1-ein
**Field:** study.comparison[3].meaning
**CURRENT:** akuzatīvs
**NEW:** akusatiiv
**Problēma:** The Estonian field contains Latvian text.
**LV etalons (konteksts):** akuzatīvs
**DE konteksts:** ein
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0116
**Card ID:** a1-es
**Field:** study.comparison[0].meaning
**CURRENT:** tas • bezpersoniska forma
**NEW:** see • umbisikuline vorm
**Problēma:** “bezpersoniska forma” is Latvian, not Estonian.
**LV etalons (konteksts):** tas • bezpersoniska forma
**DE konteksts:** es
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0117
**Card ID:** a1-es
**Field:** study.comparison[1].meaning
**CURRENT:** es (persona)
**NEW:** mina (isik)
**Problēma:** The meaning field contains the German/Latvian form “es” instead of the Estonian pronoun “mina”.
**LV etalons (konteksts):** es (persona)
**DE konteksts:** es
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0124
**Card ID:** a1-heißen
**Field:** study.comparison[4].meaning
**CURRENT:** zvanīt
**NEW:** helistama
**Problēma:** „zvanīt” on läti, mitte eesti keel; eesti vaste on „helistama”.
**LV etalons (konteksts):** zvanīt
**DE konteksts:** heißen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.2 HIGH atradumi (104)

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
#### ET-A1-0073
**Card ID:** a1-sprechen-study
**Field:** study.examples[2].lv
**CURRENT:** ma räägin saksa keelt.
**NEW:** Ta räägib oma õpetajaga.
**Problēma:** Praegune lause kordab esimest näidet ega vasta lähtele: ta räägib oma õpetajaga.
**LV etalons (konteksts):** Viņa runā ar savu skolotāju.
**DE konteksts:** sprechen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0074
**Card ID:** a1-klein-study
**Field:** study.examples[1].lv
**CURRENT:** tuba on väike.
**NEW:** Laps on veel väike.
**Problēma:** Näite tõlge on vahetunud esimese näitega ja ei vasta lähtele.
**LV etalons (konteksts):** Bērns vēl ir mazs.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0075
**Card ID:** a1-klein-study
**Field:** study.examples[2].lv
**CURRENT:** laps on veel väike.
**NEW:** Mul on väike kott.
**Problēma:** Näite tõlge on vahetunud teise näitega ja ei vasta lähtele.
**LV etalons (konteksts):** Man ir maza soma.
**DE konteksts:** klein
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0077
**Card ID:** a1-auch-study
**Field:** study.examples[1].lv
**CURRENT:** ma tulen ka.
**NEW:** Ta töötab ka siin.
**Problēma:** Näide on vahetunud esimese näitega ja ei vasta lähtele.
**LV etalons (konteksts):** Viņa arī strādā šeit.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0078
**Card ID:** a1-auch-study
**Field:** study.examples[2].lv
**CURRENT:** ta töötab ka siin.
**NEW:** Ma soovin teile samuti ilusat päeva.
**Problēma:** Praegune lause on teise näite tõlge, mitte soovimise lause.
**LV etalons (konteksts):** Es arī novēlu jums jauku dienu.
**DE konteksts:** auch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0085
**Card ID:** a1-nicht-447
**Field:** etText
**CURRENT:** ei
**NEW:** mitte
**Problēma:** „Nicht“ vastab eesti keeles „mitte“; „ei“ on verbiga kasutatav eitussõna.
**LV etalons (konteksts):** ne
**DE konteksts:** nicht
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0087
**Card ID:** a1-bitte
**Field:** study.examples[0].lv
**CURRENT:** Palun!
**NEW:** Üks tass kohvi, palun.
**Problēma:** Estonian text corresponds to the second example, not to the Latvian source sentence requesting one coffee.
**LV etalons (konteksts):** Vienu tasi kafijas, lūdzu.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0088
**Card ID:** a1-bitte
**Field:** study.examples[1].lv
**CURRENT:** palun!
**NEW:** Palun, tule sisse!
**Problēma:** The current text omits the invitation to come in and only translates the interjection.
**LV etalons (konteksts):** Lūdzu, nāc iekšā.
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0089
**Card ID:** a1-bitte
**Field:** study.examples[2].lv
**CURRENT:** üks tass kohvi, palun.
**NEW:** Palun!
**Problēma:** The coffee request belongs to the first example; this source is only the interjection.
**LV etalons (konteksts):** Lūdzu!
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0092
**Card ID:** a1-bitte-study
**Field:** study.examples[1].lv
**CURRENT:** palun!
**NEW:** Ta täidab minu palve.
**Problēma:** The current interjection does not translate the sentence about fulfilling a request.
**LV etalons (konteksts):** Viņš izpilda manu lūgumu.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0093
**Card ID:** a1-bitte-study
**Field:** study.examples[2].lv
**CURRENT:** üks tass kohvi, palun.
**NEW:** Tal on kaks palvet.
**Problēma:** The current coffee request belongs to the other card; this sentence states that she has two requests.
**LV etalons (konteksts):** Viņai ir divi lūgumi.
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0096
**Card ID:** a1-bleiben
**Field:** study.examples[3].lv
**CURRENT:** ma lähen koju.
**NEW:** ma jään koju.
**Problēma:** For the authoritative German lemma bleiben, the example must express staying; the Latvian source conflicts with German.
**LV etalons (konteksts):** es eju mājās.
**DE konteksts:** bleiben
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0097
**Card ID:** a1-bringen
**Field:** study.examples[0].lv
**CURRENT:** too mulle palun vett.
**NEW:** Ma toon sulle raamatu.
**Problēma:** The current sentence asks someone to bring water, while the source says that I bring you a book.
**LV etalons (konteksts):** Es tev atnesu grāmatu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0098
**Card ID:** a1-bringen
**Field:** study.examples[1].lv
**CURRENT:** ma viin sind koju.
**NEW:** Ma viin paki postkontorisse.
**Problēma:** The current sentence means I take you home; the source concerns taking a parcel to the post office.
**LV etalons (konteksts):** Es aiznesu paku uz pastu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0099
**Card ID:** a1-bringen
**Field:** study.examples[2].lv
**CURRENT:** ta viib raamatu kooli.
**NEW:** Ma viin lapsed kooli.
**Problēma:** The subject, object and action do not match the source sentence.
**LV etalons (konteksts):** Es aizvedu bērnus uz skolu.
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0100
**Card ID:** a1-bringen
**Field:** study.comparison[1].meaning
**CURRENT:** võtma / kätte võtma
**NEW:** viima
**Problēma:** Aiznest means to take or carry something away, not to take or pick something up.
**LV etalons (konteksts):** aiznest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0101
**Card ID:** a1-bringen
**Field:** study.comparison[2].meaning
**CURRENT:** järele minema / tooma
**NEW:** viima (sõidukiga)
**Problēma:** Aizvest means to transport or take someone/something by vehicle, not to go and fetch.
**LV etalons (konteksts):** aizvest
**DE konteksts:** bringen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0104
**Card ID:** a1-da
**Field:** study.examples[2].lv
**CURRENT:** siin ta tuleb.
**NEW:** seal ta tuleb.
**Problēma:** The source says he comes there, not here.
**LV etalons (konteksts):** te viņš nāk.
**DE konteksts:** da
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0105
**Card ID:** a1-dieser
**Field:** study.examples[1].lv
**CURRENT:** mulle meeldib see koer.
**NEW:** Ma näen seda koera.
**Problēma:** Näen means see; the current text means I like this dog.
**LV etalons (konteksts):** Es redzu šo suni.
**DE konteksts:** dieser
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0112
**Card ID:** a1-es
**Field:** study.examples[0].lv
**CURRENT:** ma õpin saksa keelt.
**NEW:** sajab.
**Problēma:** The Estonian sentence means “I study German”, not the impersonal weather expression “It is raining”.
**LV etalons (konteksts):** Līst.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0113
**Card ID:** a1-es
**Field:** study.examples[1].lv
**CURRENT:** ta on väsinud.
**NEW:** on külm.
**Problēma:** The Estonian sentence means “he/she is tired”, not “it is cold”.
**LV etalons (konteksts):** Ir auksts.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0114
**Card ID:** a1-es
**Field:** study.examples[2].lv
**CURRENT:** ta töötab siin.
**NEW:** laps magab.
**Problēma:** The Estonian sentence means “he/she works here”, not “the child is sleeping”.
**LV etalons (konteksts):** Bērns guļ.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0115
**Card ID:** a1-es
**Field:** study.examples[3].lv
**CURRENT:** see on minu raamat.
**NEW:** see on väsinud.
**Problēma:** The Estonian sentence means “this is my book”, not “it is tired”.
**LV etalons (konteksts):** Tas ir noguris.
**DE konteksts:** es
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0119
**Card ID:** a1-finden
**Field:** study.examples[0].lv
**CURRENT:** ma ei leia oma võtit.
**NEW:** ma leian oma võtme.
**Problēma:** The source says “I find my key”; the Estonian negation reverses the meaning.
**LV etalons (konteksts):** Es atrodu savu atslēgu.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0120
**Card ID:** a1-finden
**Field:** study.examples[1].lv
**CURRENT:** kas sa leidsid oma telefoni?
**NEW:** minu meelest on see hea.
**Problēma:** The Estonian question about finding a phone does not translate the source opinion sentence.
**LV etalons (konteksts):** Man tas šķiet labi.
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0121
**Card ID:** a1-finden
**Field:** study.examples[2].lv
**CURRENT:** minu meelest on see hea.
**NEW:** mida sa filmist arvad?
**Problēma:** The Estonian sentence repeats the previous example and does not ask what one thinks about the film.
**LV etalons (konteksts):** ko tu domā par filmu?
**DE konteksts:** finden
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0122
**Card ID:** a1-gross-study
**Field:** study.examples[1].lv
**CURRENT:** maja on suur.
**NEW:** Berliin on suur linn.
**Problēma:** The Estonian sentence says “the house is big” instead of stating that Berlin is a large city.
**LV etalons (konteksts):** Berlīne ir liela pilsēta.
**DE konteksts:** groß
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0125
**Card ID:** a1-hoch-study
**Field:** study.examples[1].lv
**CURRENT:** mägi on kõrge.
**NEW:** riiul on kaks meetrit kõrge.
**Problēma:** Läti näitelause räägib riiulist, kuid eesti tekst tõlgib selle ekslikult mäeks.
**LV etalons (konteksts):** plaukts ir divus metrus augsts.
**DE konteksts:** hoch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0126
**Card ID:** a1-jung
**Field:** etMain
**CURRENT:** noor (inimeste kohta)
**NEW:** noor
**Problēma:** Saksa „jung” kirjeldab ka loomi ja paare, nagu näidetes; inimeste piirang on liiga kitsas.
**LV etalons (konteksts):** jauns (par cilvēkiem)
**DE konteksts:** jung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0127
**Card ID:** a1-jung
**Field:** study.translation
**CURRENT:** noor (inimeste kohta)
**NEW:** noor
**Problēma:** Saksa „jung” kirjeldab ka loomi ja paare, nagu näidetes; inimeste piirang on liiga kitsas.
**LV etalons (konteksts):** jauns (par cilvēkiem)
**DE konteksts:** jung
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0188
**Card ID:** a1-probieren
**Field:** study.comparison[1].meaning
**CURRENT:** testima / kontrollima
**NEW:** proovima
**Problēma:** Läti „mēģināt“ tähendab siin „proovima“, mitte „testima / kontrollima“.
**LV etalons (konteksts):** mēģināt
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0189
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
#### ET-A1-0190
**Card ID:** a1-probieren
**Field:** study.comparison[3].meaning
**CURRENT:** kontrollima
**NEW:** selga proovima
**Problēma:** Läti „pielaikot“ tähendab riiete selgaproovimist, mitte kontrollimist.
**LV etalons (konteksts):** pielaikot
**DE konteksts:** probieren
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0194
**Card ID:** a1-sie-study
**Field:** study.examples[0].lv
**CURRENT:** Anna teeb süüa. Ta teeb seda iga päev.
**NEW:** Nad teevad süüa.
**Problēma:** Praegune tekst muudab mitmuse ainsuseks ja lisab algallikas puuduva Anna ning lisalause.
**LV etalons (konteksts):** Viņi gatavo.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0195
**Card ID:** a1-sie-study
**Field:** study.examples[1].lv
**CURRENT:** Maria on arst. Ta töötab haiglas.
**NEW:** Ta teeb süüa.
**Problēma:** Praegune tekst ei tõlgi algallika tähendust „ta teeb süüa”, vaid annab hoopis muu sisu.
**LV etalons (konteksts):** viņa gatavo.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0196
**Card ID:** a1-sie-study
**Field:** study.examples[2].lv
**CURRENT:** Anna ja Paul teevad süüa. Nad teevad seda koos.
**NEW:** Ta sööb.
**Problēma:** Praegune tekst muudab nii isiku, arvu kui ka tegevuse ning ei vasta algallikale.
**LV etalons (konteksts):** viņa ēd.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0197
**Card ID:** a1-sie-study
**Field:** study.examples[3].lv
**CURRENT:** Lapsed mängivad aias. Nad mängivad jalgpalli.
**NEW:** Nad teevad süüa.
**Problēma:** Praegune tekst ei tõlgi „nad teevad süüa”, vaid kirjeldab laste mängimist.
**LV etalons (konteksts):** viņi gatavo.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0198
**Card ID:** a1-sie-study
**Field:** study.examples[4].lv
**CURRENT:** proua Keller, kas te teete meelsasti süüa?
**NEW:** Nad mängivad jalgpalli.
**Problēma:** Praegune tekst on formaalne pöördumine ja ei vasta algallika mitmuse tähendusele.
**LV etalons (konteksts):** viņi spēlē futbolu.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0199
**Card ID:** a1-sie-study
**Field:** study.examples[5].lv
**CURRENT:** härra Müller, kas te olete siin uus?
**NEW:** Nad teevad süüa, palun.
**Problēma:** Praegune tekst on täiesti erineva sisuga; DE „sie” on siin tõlgitud mitmusena, mitte formaalse „Teie” pöördumisena.
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0200
**Card ID:** a1-sie-study-2
**Field:** study.examples[1].lv
**CURRENT:** ta teeb süüa.
**NEW:** Te teete süüa.
**Problēma:** Suure algustähega „Sie” on formaalne „teie”; praegune tekst kasutab ainsuse kolmandat isikut.
**LV etalons (konteksts):** viņa gatavo.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0201
**Card ID:** a1-sie-study-2
**Field:** study.examples[2].lv
**CURRENT:** ta sööb.
**NEW:** Te sööte.
**Problēma:** Suure algustähega „Sie” nõuab formaalset teietamisvormi, mitte „ta”-vormi.
**LV etalons (konteksts):** viņa ēd.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0202
**Card ID:** a1-sie-study-2
**Field:** study.examples[3].lv
**CURRENT:** nad teevad süüa.
**NEW:** Te teete süüa.
**Problēma:** Ka siin on DE „Sie” formaalne pöördumine, kuid eestikeelne tekst kasutab mitmuse kolmandat isikut.
**LV etalons (konteksts):** viņi gatavo.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0203
**Card ID:** a1-sie-study-2
**Field:** study.examples[4].lv
**CURRENT:** nad mängivad jalgpalli.
**NEW:** Te mängite jalgpalli.
**Problēma:** Suure algustähega „Sie” nõuab formaalset teietamisvormi, mitte „nad”-vormi.
**LV etalons (konteksts):** viņi spēlē futbolu.
**DE konteksts:** Sie
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0205
**Card ID:** a1-wenn
**Field:** study.examples[3].lv
**CURRENT:** ma ei tea, kas ta tuleb.
**NEW:** kui ta tuleb, olen rõõmus.
**Problēma:** Lause väljendab kaudset jah/ei-küsimust ehk ob, mitte wenn-tähendust.
**LV etalons (konteksts):** es nezinu, vai viņš nāks.
**DE konteksts:** wenn
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0207
**Card ID:** a1-wer
**Field:** study.examples[0].lv
**CURRENT:** Mis see on?
**NEW:** Kes see on?
**Problēma:** Näide küsib „kes?”, kuid praegune tõlge tähendab „mis?” ja vastab saksa was-le.
**LV etalons (konteksts):** Kas tas ir?
**DE konteksts:** wer
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0210
**Card ID:** a1-zum
**Field:** study.comparison[1].meaning
**CURRENT:** -sse / juurde (naissugu)
**NEW:** -sse / juurde (meessugu või kesksugu)
**Problēma:** zum on zu + dem ehk meessoost või kesksoost nimisõna vorm; naissoo vorm on zur.
**LV etalons (konteksts):** uz / pie (siev. dzimte)
**DE konteksts:** zum
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.3 MEDIUM atradumi (46)

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
**Problēma:** Järgima tähendab peamiselt järgima; achten tähendab siin tähelepanu pöörama või tähele panema.
**LV etalons (konteksts):** ievērot
**DE konteksts:** achten
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0076
**Card ID:** a1-ab
**Field:** study.comparison[2].meaning
**CURRENT:** seest välja
**NEW:** alates lähtekohast
**Problēma:** „Seest välja” on aus-tähendus; ab väljendab algust punktist või ajast.
**LV etalons (konteksts):** ārā no iekšienes
**DE konteksts:** ab
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0079
**Card ID:** a1-aufs
**Field:** study.comparison[4].meaning
**CURRENT:** -sse / juurde (Dativ)
**NEW:** kuhu? (Akkusatiiv)
**Problēma:** aufs on auf das ehk akkusatiiv; Dativ on siin vale käändetähis.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0080
**Card ID:** a1-aus
**Field:** study.comparison[1].meaning
**CURRENT:** isikult, kohalt, pinnalt
**NEW:** päritolu või materjal
**Problēma:** aus ei tähenda üldiselt isikult või pinnalt; need tähendused kuuluvad pigem von/an juurde.
**LV etalons (konteksts):** no personas, vietas, virsmas
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0081
**Card ID:** a1-aus
**Field:** study.comparison[2].meaning
**CURRENT:** alates punktist või ajast
**NEW:** mitte alates punktist või ajast
**Problēma:** „Alates punktist või ajast” on ab-tähendus, mitte aus-tähendus.
**LV etalons (konteksts):** sākot no punkta vai laika
**DE konteksts:** aus
**Smagums:** MEDIUM
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0082
**Card ID:** a1-bei
**Field:** study.comparison[1].meaning
**CURRENT:** seina, serva, kalda, pinna ääres
**NEW:** seina, serva, kalda või pinna ääres (an)
**Problēma:** Need asukohad on saksa keeles tavaliselt an, mitte bei; võrdlus vajab sihtsõna täpsustust.
**LV etalons (konteksts):** pie sienas, malas, krasta, virsmas malas
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0083
**Card ID:** a1-bei
**Field:** study.comparison[2].meaning
**CURRENT:** kellegi juurde minnakse (suund)
**NEW:** kellegi juures (asukoht, mitte suund)
**Problēma:** bei väljendab asukohta; suund kellegi juurde on saksa keeles zu.
**LV etalons (konteksts):** pie kāda dodas (virziens)
**DE konteksts:** bei
**Smagums:** MEDIUM
**Kategorija:** COMPARISON
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0084
**Card ID:** a1-ganz-219
**Field:** etText
**CURRENT:** kõik
**NEW:** terve
**Problēma:** „Kõik” tähendab „all/everything”; „ganz” tähendab siin „whole/entire”, mille vaste on „terve”.
**LV etalons (konteksts):** vesels
**DE konteksts:** ganz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0102
**Card ID:** a1-bringen
**Field:** study.comparison[3].meaning
**CURRENT:** kaasa võtma ja kohale tooma
**NEW:** kohale toimetama
**Problēma:** The current phrase adds taking along and is not the direct meaning of delivering or transporting.
**LV etalons (konteksts):** nogādāt
**DE konteksts:** bringen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0111
**Card ID:** a1-erst
**Field:** study.examples[0].lv
**CURRENT:** kõigepealt juua, siis sõita.
**NEW:** kõigepealt õpi, siis mängi.
**Problēma:** Estonian example changes the source meaning from studying and playing to drinking and driving.
**LV etalons (konteksts):** Vispirms mācies, pēc tam spēlējies.
**DE konteksts:** erst
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0118
**Card ID:** a1-euch
**Field:** study.tip.text
**CURRENT:** “euch” vastab küsimusele “kellele?” või on otsesihitis lausetes, kus on “teie”.
**NEW:** “euch” vastab küsimusele “kellele?” või on otsesihitisena “teid”.
**Problēma:** As a direct object, euch corresponds to Estonian “teid”, not “teie”.
**LV etalons (konteksts):** “euch” atbild uz jautājumu “kam?” vai ir tiešais papildinājums teikumos ar “jūs”.
**DE konteksts:** euch
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0123
**Card ID:** a1-halten
**Field:** study.tip.text
**CURRENT:** Pea meeles: käes → halten; transport → hält/peatub.
**NEW:** Pea meeles: eset hoida → halten; transport peatub → hält/peatub.
**Problēma:** „käes” tähendab asukohta, mitte tegevust „hoidma”, mistõttu vihje on semantiliselt ebatäpne.
**LV etalons (konteksts):** Atceries: priekšmetu turēt → halten; apstāties → anhalten; transports pietur → hält.
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0128
**Card ID:** a1-kosten
**Field:** study.examples[4].lv
**CURRENT:** ma maksan arve.
**NEW:** Arve maksab palju.
**Problēma:** Näide väljendab arve maksmist, mitte selle maksumust ega verbi kosten tähendust.
**LV etalons (konteksts):** es maksāju rēķinu.
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0129
**Card ID:** a1-kosten
**Field:** study.examples[5].lv
**CURRENT:** kas ma saan sularahas maksta?
**NEW:** Kui palju see maksab?
**Problēma:** Näide käsitleb sularahas maksmist, mitte millegi hinda või maksumust.
**LV etalons (konteksts):** vai varu maksāt skaidrā naudā?
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0130
**Card ID:** a1-kosten
**Field:** study.examples[6].lv
**CURRENT:** ta maksab kaardiga.
**NEW:** See maksab kaardiga makstes rohkem.
**Problēma:** Näide väljendab kaardiga maksmist, mitte verbi kosten tähendust.
**LV etalons (konteksts):** viņš maksā ar karti.
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0131
**Card ID:** a1-kosten
**Field:** study.examples[7].lv
**CURRENT:** ma maksan kohe.
**NEW:** See maksab kohe vähem.
**Problēma:** Näide väljendab kohe maksmist, mitte millegi maksumust.
**LV etalons (konteksts):** es samaksāšu tūlīt.
**DE konteksts:** kosten
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0132
**Card ID:** a1-laden-study
**Field:** study.examples[3].lv
**CURRENT:** ma pean telefoni laadima.
**NEW:** Pood on avatud.
**Problēma:** Saksakeelne Laden on siin nimisõna „pood”; näide kasutab verbi „laadima” tähendust.
**LV etalons (konteksts):** man jāuzlādē telefons.
**DE konteksts:** Laden
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0133
**Card ID:** a1-lassen
**Field:** study.tip.text
**CURRENT:** Pea meeles: midagi jääb → lassen; kellelegi lubatakse → lassen.
**NEW:** Pea meeles: midagi jäetakse → lassen; kellelgi lubatakse → lassen.
**Problēma:** „Midagi jääb” tähendab bleiben; „kellelegi lubatakse” kasutab siin vale käändevormi.
**LV etalons (konteksts):** Atceries: kaut kas paliek → lassen; kādam atļauj → lassen.
**DE konteksts:** lassen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0134
**Card ID:** a1-laut
**Field:** study.examples[4].lv
**CURRENT:** heli on ilus.
**NEW:** Heli on vali.
**Problēma:** Näide kirjeldab heli ilu, mitte omadust laut ehk valjuhäälne/vali.
**LV etalons (konteksts):** skaņa ir skaista.
**DE konteksts:** laut
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0135
**Card ID:** a1-laut
**Field:** study.examples[5].lv
**CURRENT:** ma kuulen mingit heli.
**NEW:** Ma kuulen valju heli.
**Problēma:** Praegune näide tähendab lihtsalt mingi heli kuulmist ega väljenda omadust laut.
**LV etalons (konteksts):** es dzirdu kādu skaņu.
**DE konteksts:** laut
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0136
**Card ID:** a1-laut-study
**Field:** study.examples[1].lv
**CURRENT:** muusika on vali.
**NEW:** Muusika heli on vali.
**Problēma:** Laut on siin nimisõna „heli”, kuid näide kasutab seda tähendust väljendavat omadussõna „vali”.
**LV etalons (konteksts):** mūzika ir skaļa.
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0137
**Card ID:** a1-laut-study
**Field:** study.examples[2].lv
**CURRENT:** ära räägi nii valjult!
**NEW:** Ära tee nii valju heli!
**Problēma:** Näide kasutab omadussõna „vali/valjult”, mitte nimisõna Laut ehk „heli”.
**LV etalons (konteksts):** nerunā tik skaļi!
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0138
**Card ID:** a1-laut-study
**Field:** study.examples[3].lv
**CURRENT:** see on väga vali.
**NEW:** See on väga vali heli.
**Problēma:** Praegune näide väljendab omadussõna „vali”, mitte nimisõna „heli”.
**LV etalons (konteksts):** tas ir ļoti skaļi.
**DE konteksts:** Laut
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0145
**Card ID:** a1-liegen
**Field:** study.examples[3].lv
**CURRENT:** ma panen raamatu lauale.
**NEW:** Raamat on laual.
**Problēma:** Current text means ‘I put the book on the table’, which illustrates legen, not liegen.
**LV etalons (konteksts):** es nolieku grāmatu uz galda.
**DE konteksts:** liegen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0172
**Card ID:** a1-morgen
**Field:** study.examples[5].lv
**CURRENT:** hommik on ilus.
**NEW:** Homme on ilus.
**Problēma:** This card teaches lowercase morgen ‘tomorrow’, but hommik means ‘morning’.
**LV etalons (konteksts):** rīts ir skaists.
**DE konteksts:** morgen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0173
**Card ID:** a1-morgen-study
**Field:** study.examples[1].lv
**CURRENT:** homseni!
**NEW:** Tere hommikust!
**Problēma:** This card teaches noun Morgen ‘morning’, but homseni means ‘until tomorrow’.
**LV etalons (konteksts):** līdz rīt!
**DE konteksts:** Morgen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0174
**Card ID:** a1-morgen-study
**Field:** study.examples[2].lv
**CURRENT:** ma tulen homme.
**NEW:** Ma tulen hommikul.
**Problēma:** This card teaches Morgen ‘morning’, but homme means ‘tomorrow’.
**LV etalons (konteksts):** es nāku rīt.
**DE konteksts:** Morgen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0175
**Card ID:** a1-morgen-study
**Field:** study.examples[3].lv
**CURRENT:** homme on esmaspäev.
**NEW:** Hommikul on esmaspäev.
**Problēma:** This card teaches Morgen ‘morning’, but homme means ‘tomorrow’.
**LV etalons (konteksts):** rīt ir pirmdiena.
**DE konteksts:** Morgen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0185
**Card ID:** a1-nach
**Field:** study.examples[3].lv
**CURRENT:** on kümme minutit kaheksa läbi.
**NEW:** Kell on kümme minutit üle kaheksa.
**Problēma:** The current Estonian time expression is ungrammatical and unnatural.
**LV etalons (konteksts):** ir desmit pāri astoņiem.
**DE konteksts:** nach
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0186
**Card ID:** a1-nehmen
**Field:** study.tip.text
**CURRENT:** Pea meeles: võtab endale → nehmen; toob kellelegi → bringen.
**NEW:** Pea meeles: võta endale → nehmen; too kellelegi → bringen.
**Problēma:** Näited on läti keeles käskivas kõneviisis, kuid eesti tõlge kasutab oleviku 3. pööret.
**LV etalons (konteksts):** Atceries: paņem sev → nehmen; atnes kādam → bringen.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0187
**Card ID:** a1-probieren
**Field:** study.examples[3].lv
**CURRENT:** kas ma saan jakki proovida?
**NEW:** Kas ma saan jakki selga proovida?
**Problēma:** Riideeseme proovimise tähendus väljendub eesti keeles loomulikult ühendiga „selga proovima“.
**LV etalons (konteksts):** vai es varu pielaikot jaku?
**DE konteksts:** probieren
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0193
**Card ID:** a1-sicher
**Field:** study.examples[3].lv
**CURRENT:** see on kindel lahendus.
**NEW:** see on turvaline lahendus.
**Problēma:** Siin tähendab „sicher” ohutut või turvalist, mitte kindlat lahendust.
**LV etalons (konteksts):** tas ir drošs risinājums.
**DE konteksts:** sicher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0206
**Card ID:** a1-wer
**Field:** study.translation
**CURRENT:** kes • kumb
**NEW:** kes
**Problēma:** Wer tähendab „kes”; „kumb” vastab pigem saksa sõnale welcher.
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0208
**Card ID:** a1-werden
**Field:** study.examples[0].lv
**CURRENT:** ma jään väsinuks.
**NEW:** ma väsin.
**Problēma:** „Ma jään väsinuks” on siin ebaloomulik; saksa „werde müde” vaste on loomulikult „ma väsin”.
**LV etalons (konteksts):** es kļūstu noguris.
**DE konteksts:** werden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0209
**Card ID:** a1-zu
**Field:** study.comparison[1].meaning
**CURRENT:** -sse linnade/riikidega
**NEW:** -sse linnade/riikide puhul
**Problēma:** „-sse” ja komitatiiv „-dega” on omavahel vastuolus ning väljend on eesti keeles ebagrammatiline.
**LV etalons (konteksts):** uz ar pilsētām/valstīm
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
## 5.4 LOW atradumi (46)

#### ET-A1-0072
**Card ID:** a1-sprechen-study
**Field:** study.examples[1].lv
**CURRENT:** me räägime tööst.
**NEW:** Me räägime tööst.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** Mēs runājam par darbu.
**DE konteksts:** sprechen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0086
**Card ID:** a1-Ostern-467
**Field:** etText
**CURRENT:** Lihavõtted
**NEW:** lihavõtted
**Problēma:** Eesti keeles kirjutatakse pühade nimetus „lihavõtted“ üldjuhul väikese algustähega.
**LV etalons (konteksts):** Lieldienas
**DE konteksts:** Ostern
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0139
**Card ID:** a1-leise-study
**Field:** study.examples[1].lv
**CURRENT:** palun, ole vaikne.
**NEW:** Palun, ole vaikne.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** lūdzu, esi kluss.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0140
**Card ID:** a1-leise-study
**Field:** study.examples[2].lv
**CURRENT:** muusika on vaikne.
**NEW:** Muusika on vaikne.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** mūzika ir klusa.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0141
**Card ID:** a1-leise-study
**Field:** study.examples[3].lv
**CURRENT:** palun, räägi vaikselt.
**NEW:** Palun, räägi vaikselt.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** lūdzu, runā klusi.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0142
**Card ID:** a1-liegen
**Field:** study.examples[0].lv
**CURRENT:** raamat on laual.
**NEW:** Raamat on laual.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** grāmata atrodas uz galda.
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0143
**Card ID:** a1-liegen
**Field:** study.examples[1].lv
**CURRENT:** minu telefon on autos.
**NEW:** Minu telefon on autos.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** mans telefons atrodas automašīnā.
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0144
**Card ID:** a1-liegen
**Field:** study.examples[2].lv
**CURRENT:** ta lamab voodis.
**NEW:** Ta lamab voodis.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** viņš guļ gultā.
**DE konteksts:** liegen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0146
**Card ID:** a1-machen
**Field:** study.examples[0].lv
**CURRENT:** mida sa teed?
**NEW:** Mida sa teed?
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** ko tu dari?
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0147
**Card ID:** a1-machen
**Field:** study.examples[1].lv
**CURRENT:** ma teen kodutöid.
**NEW:** Ma teen kodutöid.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es pildu mājasdarbus.
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0148
**Card ID:** a1-machen
**Field:** study.examples[2].lv
**CURRENT:** me teeme pitsat.
**NEW:** Me teeme pitsat.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** mēs taisām picu.
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0149
**Card ID:** a1-machen
**Field:** study.examples[3].lv
**CURRENT:** see on lõbus.
**NEW:** See on lõbus.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** tas ir jautri.
**DE konteksts:** machen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0150
**Card ID:** a1-mal
**Field:** study.examples[0].lv
**CURRENT:** esimest korda oli raske.
**NEW:** Esimest korda oli raske.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** pirmo reizi bija grūti.
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0151
**Card ID:** a1-mal
**Field:** study.examples[1].lv
**CURRENT:** ma olen juba kaks korda Berliinis käinud.
**NEW:** Ma olen juba kaks korda Berliinis käinud.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es jau divreiz biju Berlīnē.
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0152
**Card ID:** a1-mal
**Field:** study.examples[2].lv
**CURRENT:** üks kord piisab.
**NEW:** Üks kord piisab.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** vienreiz pietiek.
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0153
**Card ID:** a1-mal
**Field:** study.examples[3].lv
**CURRENT:** veel üks kord, palun!
**NEW:** Veel üks kord, palun!
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** vēl vienu reizi, lūdzu!
**DE konteksts:** Mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0154
**Card ID:** a1-mann
**Field:** study.examples[0].lv
**CURRENT:** ta on tore mees.
**NEW:** Ta on tore mees.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** viņš ir jauks vīrietis.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0155
**Card ID:** a1-mann
**Field:** study.examples[1].lv
**CURRENT:** see on minu mees.
**NEW:** See on minu mees.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** tas ir mans vīrs.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0156
**Card ID:** a1-mann
**Field:** study.examples[2].lv
**CURRENT:** kui palju mehi on siin?
**NEW:** Kui palju mehi on siin?
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** cik vīriešu ir šeit?
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0157
**Card ID:** a1-mann
**Field:** study.examples[3].lv
**CURRENT:** minu mees töötab Berliinis.
**NEW:** Minu mees töötab Berliinis.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** mans vīrs strādā Berlīnē.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0158
**Card ID:** a1-mann
**Field:** study.examples[4].lv
**CURRENT:** mees kannab ülikonda.
**NEW:** Mees kannab ülikonda.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** vīrietis valkā uzvalku.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0159
**Card ID:** a1-mann
**Field:** study.examples[5].lv
**CURRENT:** tema mees on arst.
**NEW:** Tema mees on arst.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** viņas vīrs ir ārsts.
**DE konteksts:** Mann
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0160
**Card ID:** a1-mit
**Field:** study.examples[0].lv
**CURRENT:** ma tulen sinuga.
**NEW:** Ma tulen sinuga.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es nāku ar tevi.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0161
**Card ID:** a1-mit
**Field:** study.examples[1].lv
**CURRENT:** ma sõidan bussiga.
**NEW:** Ma sõidan bussiga.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es braucu ar autobusu.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0162
**Card ID:** a1-mit
**Field:** study.examples[2].lv
**CURRENT:** ta kirjutab pastakaga.
**NEW:** Ta kirjutab pastakaga.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** viņa raksta ar pildspalvu.
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0163
**Card ID:** a1-mit
**Field:** study.examples[3].lv
**CURRENT:** kas sa tuled kaasa?
**NEW:** Kas sa tuled kaasa?
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** vai tu nāksi līdzi?
**DE konteksts:** mit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0164
**Card ID:** a1-mögen
**Field:** study.examples[0].lv
**CURRENT:** mulle meeldib muusika.
**NEW:** Mulle meeldib muusika.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** man patīk mūzika.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0165
**Card ID:** a1-mögen
**Field:** study.examples[1].lv
**CURRENT:** kas sulle maitseb kohv?
**NEW:** Kas sulle maitseb kohv?
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** vai tev garšo kafija?
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0166
**Card ID:** a1-mögen
**Field:** study.examples[2].lv
**CURRENT:** talle meeldivad lapsed.
**NEW:** Talle meeldivad lapsed.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** viņai patīk bērni.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0167
**Card ID:** a1-mögen
**Field:** study.examples[3].lv
**CURRENT:** ma sooviksin kohvi.
**NEW:** Ma sooviksin kohvi.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es gribētu kafiju.
**DE konteksts:** mögen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0168
**Card ID:** a1-morgen
**Field:** study.examples[1].lv
**CURRENT:** homseni!
**NEW:** Homseni!
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** līdz rīt!
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0169
**Card ID:** a1-morgen
**Field:** study.examples[2].lv
**CURRENT:** ma tulen homme.
**NEW:** Ma tulen homme.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es nāku rīt.
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0170
**Card ID:** a1-morgen
**Field:** study.examples[3].lv
**CURRENT:** homme on esmaspäev.
**NEW:** Homme on esmaspäev.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** rīt ir pirmdiena.
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0171
**Card ID:** a1-morgen
**Field:** study.examples[4].lv
**CURRENT:** tere hommikust!
**NEW:** Tere hommikust!
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** labrīt!
**DE konteksts:** morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0176
**Card ID:** a1-morgen-study
**Field:** study.examples[4].lv
**CURRENT:** tere hommikust!
**NEW:** Tere hommikust!
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** labrīt!
**DE konteksts:** Morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0177
**Card ID:** a1-morgen-study
**Field:** study.examples[5].lv
**CURRENT:** hommik on ilus.
**NEW:** Hommik on ilus.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** rīts ir skaists.
**DE konteksts:** Morgen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0178
**Card ID:** a1-müssen
**Field:** study.examples[0].lv
**CURRENT:** ma pean minema.
**NEW:** Ma pean minema.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** man jāiet.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0179
**Card ID:** a1-müssen
**Field:** study.examples[1].lv
**CURRENT:** sa pead ootama.
**NEW:** Sa pead ootama.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** tev jāgaida.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0180
**Card ID:** a1-müssen
**Field:** study.examples[2].lv
**CURRENT:** me peame õppima.
**NEW:** Me peame õppima.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** mums jāmācās.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0181
**Card ID:** a1-müssen
**Field:** study.examples[3].lv
**CURRENT:** ma pean täna töötama.
**NEW:** Ma pean täna töötama.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** man šodien jāstrādā.
**DE konteksts:** müssen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0182
**Card ID:** a1-nach
**Field:** study.examples[0].lv
**CURRENT:** ma sõidan Berliini.
**NEW:** Ma sõidan Berliini.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** es braucu uz Berlīni.
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0183
**Card ID:** a1-nach
**Field:** study.examples[1].lv
**CURRENT:** me läheme koju.
**NEW:** Me läheme koju.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** mēs ejam uz mājām.
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0184
**Card ID:** a1-nach
**Field:** study.examples[2].lv
**CURRENT:** pärast söömist läheme jalutama.
**NEW:** Pärast söömist läheme jalutama.
**Problēma:** Estonian sentences begin with a capital letter.
**LV etalons (konteksts):** pēc ēšanas mēs ejam pastaigāties.
**DE konteksts:** nach
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0191
**Card ID:** a1-sich
**Field:** study.comparison[1].meaning
**CURRENT:** mind / ennast ich puhul
**NEW:** mind / ennast ich-vormi puhul
**Problēma:** „ich puhul” ei ole loomulik ega grammatiline väljend; vormi tähistamisel on vaja sõna „ich-vormi”.
**LV etalons (konteksts):** mani / sevi pie ich
**DE konteksts:** sich
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0192
**Card ID:** a1-sich
**Field:** study.comparison[2].meaning
**CURRENT:** sind / ennast du puhul
**NEW:** sind / ennast du-vormi puhul
**Problēma:** „du puhul” ei ole loomulik ega grammatiline väljend; vormi tähistamisel on vaja sõna „du-vormi”.
**LV etalons (konteksts):** tevi / sevi pie du
**DE konteksts:** sich
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** LABOT
#### ET-A1-0204
**Card ID:** a1-sitzen
**Field:** study.comparison[3].meaning
**CURRENT:** istet võtma / istuma panema
**NEW:** istuma / istuma panema
**Problēma:** „Istet võtma” on ebaloomulik kalkeeritud väljend; „istuma” on siin loomulikum vaste.
**LV etalons (konteksts):** apsēsties / nosēdināt
**DE konteksts:** sitzen
**Smagums:** LOW
**Kategorija:** NATURALNESS
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
