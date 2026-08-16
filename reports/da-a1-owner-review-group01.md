# DA–DE A1 — OWNER review Group 12–61

Avots: `reports/da-a1-full-audit.md`
Findings: **12–61** (50 ieraksti)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez decisions tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).

## Finding 12

**Audit ID:** DA-A1-0012
**Card ID:** a1-sprechen-study
**ID / path:** `a1-sprechen-study.study.explanation[1]`
**DE (read-only):** sprechen
**Severity:** MEDIUM
**Field:** `study.explanation[1]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Sprechen betyder hovedsageligt: ​​at tale eller tale.
**PROPOSED_DA:** Sprechen betyder hovedsageligt: at tale.
**Problēma:** Redundant og unaturlig formulering (at tale eller tale)
**Audita pamatojums:** Dāņu skaidrojumā pietiek ar én hovedbetydning
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-A1-0013
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.explanation[1]`
**DE (read-only):** bitte
**Severity:** MEDIUM
**Field:** `study.explanation[1]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Bitte betyder hovedsageligt: ​​høflighed.
**PROPOSED_DA:** Bitte betyder hovedsageligt: høflighed.
**Problēma:** Zero-width artefakts + mehāniska formula
**Audita pamatojums:** Jānoņem ZW un jāgludina teksts
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-A1-0014
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.explanation[3]`
**DE (read-only):** bitte
**Severity:** MEDIUM
**Field:** `study.explanation[3]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Bitte betyder hovedsageligt: ​​anmodning/anmodning.
**PROPOSED_DA:** Bitte betyder hovedsageligt: anmodning.
**Problēma:** Dublēta vārda anmodning/anmodning
**Audita pamatojums:** Dabisks dāņu skaidrojums bez atkārtojuma
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-A1-0015
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.explanation[4]`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.explanation[4]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ofte karakteriseret ved: navneord (dø).
**PROPOSED_DA:** Ofte karakteriseret ved: navneord (die).
**Problēma:** Artikula drukas kļūda dø → die
**Audita pamatojums:** die Bitte — pareizais vācu artikuls
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-A1-0016
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.explanation[0]`
**DE (read-only):** bitte
**Severity:** MEDIUM
**Field:** `study.explanation[0]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Hovedidé: Høfligt ord med små bogstaver. Har været høflig - tak.
**PROPOSED_DA:** Hovedidé: Høfligt ord med små bogstaver — venligst, tak.
**Problēma:** Anglicisms/mehāniska frāze «Har været høflig»
**Audita pamatojums:** Dabisks dāņu pedagoģisks tonis A1 līmenim
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-A1-0017
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.explanation[0]`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.explanation[0]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Hovedidé: Navneord med artiklen dør og stort bogstav. En specifik anmodning eller anmodning.
**PROPOSED_DA:** Hovedidé: Navneord med artiklen die og stort B. En specifik anmodning.
**Problēma:** Artikula kļūda dør + dublēts anmodning
**Audita pamatojums:** die Bitte — pareizs artikuls un skaidra nozīme
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-A1-0018
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.explanation[1]`
**DE (read-only):** bitte
**Severity:** MEDIUM
**Field:** `study.explanation[1]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Die Bitte betyder i bund og grund: anmodning/anmodning.
**PROPOSED_DA:** Die Bitte betyder i bund og grund: anmodning.
**Problēma:** Dublēts anmodning/anmodning
**Audita pamatojums:** Dabisks dāņu skaidrojums
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-A1-0019
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.explanation[1]`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.explanation[1]`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Die Bitte betyder hovedsageligt: ​​høflighed.
**PROPOSED_DA:** Die Bitte betyder hovedsageligt: en anmodning.
**Problēma:** Nepareiza nozīme die Bitte ≠ høflighed
**Audita pamatojums:** die Bitte ir lietvārds «anmodning», nevis pieklājības vārds
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-A1-0020
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.lv`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `lv`
**Production file:** `data/da/a1.js`
**LV reference:** atnest
**CURRENT_DA:** Medbring • Take away
**PROPOSED_DA:** Medbringe
**Problēma:** Angļu atlikums Take away galvenajā laukā
**Audita pamatojums:** A1 kartītes priekšpusē jābūt tikai dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-A1-0021
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.translation`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.translation`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Medbring • Take away
**PROPOSED_DA:** Medbringe
**Problēma:** Angļu atlikums Study translation
**Audita pamatojums:** Konsekvence ar galveno kartīti
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-A1-0022
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.examples[0].lv`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.examples[0].lv`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Bring mig venligst vand
**PROPOSED_DA:** Jeg bringer dig en bog.
**Problēma:** DA piemērs nesakrīt ar DE (Ich bringe dir ein Buch.)
**Audita pamatojums:** Semantiska atbilstība obligāta
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-A1-0023
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.examples[1].lv`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.examples[1].lv`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Jeg tager dig hjem
**PROPOSED_DA:** Jeg bringer pakken til posthuset.
**Problēma:** DA piemērs nesakrīt ar DE (Ich bringe das Paket zur Post.)
**Audita pamatojums:** Semantiska atbilstība obligāta
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-A1-0024
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.examples[2].lv`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.examples[2].lv`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Han tager bogen med i skole.
**PROPOSED_DA:** Jeg kører børnene i skole.
**Problēma:** DA piemērs nesakrīt ar DE (Ich bringe die Kinder zur Schule.)
**Audita pamatojums:** Semantiska atbilstība obligāta
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-A1-0025
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.comparison[0].example`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich bringe dir ein Buch. – Bring mir Wasser.
**PROPOSED_DA:** Ich bringe dir ein Buch. – Jeg bringer dig en bog.
**Problēma:** Vācu teksts DA comparison piemērā
**Audita pamatojums:** Comparison example jābūt DE = DA formātā dāņu pusē
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-A1-0026
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.comparison[1].example`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich bringe das Paket zur Post. – Ich nehme das Buch.
**PROPOSED_DA:** Ich bringe das Paket zur Post. – Jeg bringer pakken til posthuset.
**Problēma:** Vācu teksts DA comparison piemērā
**Audita pamatojums:** Comparison example jābūt DE = DA formātā dāņu pusē
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-A1-0027
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.comparison[2].example`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich bringe die Kinder zur Schule. – Ich hole Wasser.
**PROPOSED_DA:** Ich bringe die Kinder zur Schule. – Jeg kører børnene i skole.
**Problēma:** Vācu teksts DA comparison piemērā
**Audita pamatojums:** Comparison example jābūt DE = DA formātā dāņu pusē
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-A1-0028
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.comparison[3].example`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich bringe dir ein Buch. – Bringst du Brot mit?
**PROPOSED_DA:** Ich bringe dir ein Buch. – Tager du brød med?
**Problēma:** Vācu teksts DA comparison piemērā
**Audita pamatojums:** mitbringen salīdzinājums jādod dāņu pusē
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-A1-0029
**Card ID:** a1-fahren
**ID / path:** `a1-fahren.lv`
**DE (read-only):** fahren
**Severity:** HIGH
**Field:** `lv`
**Production file:** `data/da/a1.js`
**LV reference:** braukt
**CURRENT_DA:** Kør • Bly • Take away
**PROPOSED_DA:** Køre
**Problēma:** Angļu/atlikuši fragmenti (Bly, Take away)
**Audita pamatojums:** A1 galvenajā laukā viena dabiska dāņu nozīme
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-A1-0030
**Card ID:** a1-ganz
**ID / path:** `a1-ganz.lv`
**DE (read-only):** ganz
**Severity:** MEDIUM
**Field:** `lv`
**Production file:** `data/da/a1.js`
**LV reference:** vesels
**CURRENT_DA:** Alt
**PROPOSED_DA:** Hel • Fuldstændig
**Problēma:** Neprecīza galvenā nozīme (ganz ≠ alt/everything)
**Audita pamatojums:** ganz = hel/fuldstændig/ret; alles = alt
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-A1-0031
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.tip.text`
**DE (read-only):** bitte
**Severity:** MEDIUM
**Field:** `study.tip.text`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** (trūkst)
**PROPOSED_DA:** Husk: bitte med små bogstaver betyder venligst; die Bitte med stort bogstav betyder en anmodning.
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Audita pamatojums:** Strukturāla paritāte ar etalonu
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-A1-0032
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.tip.text`
**DE (read-only):** bitte
**Severity:** MEDIUM
**Field:** `study.tip.text`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** (trūkst)
**PROPOSED_DA:** Husk: die Bitte er et navneord — en anmodning; bitte med små bogstaver er venligst.
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Audita pamatojums:** Strukturāla paritāte ar etalonu
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-A1-0033
**Card ID:** a1-sprechen-study
**ID / path:** `a1-sprechen-study.study.examples[2].lv`
**DE (read-only):** sprechen
**Severity:** HIGH
**Field:** `study.examples[2].lv`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Viņa runā ar savu skolotāju.
**PROPOSED_DA:** Hun taler med sin lærerinde.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-A1-0034
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.comparison[0].meaning`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[0].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** lūdzu
**PROPOSED_DA:** venligst
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-A1-0035
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.comparison[0].example`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Komm bitte herein. – Lūdzu, nāc iekšā.
**PROPOSED_DA:** Komm bitte herein. – Vær så venlig at komme ind.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** DA-A1-0036
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.comparison[1].meaning`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[1].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** lūgums
**PROPOSED_DA:** anmodning
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-A1-0037
**Card ID:** a1-bitte
**ID / path:** `a1-bitte.study.comparison[1].example`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich habe eine Bitte. – Man ir lūgums.
**PROPOSED_DA:** Ich habe eine Bitte. – Jeg har en anmodning.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-A1-0038
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.comparison[0].meaning`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[0].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** lūgums
**PROPOSED_DA:** anmodning
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-A1-0039
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.comparison[0].example`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich habe eine Bitte. – Man ir lūgums.
**PROPOSED_DA:** Ich habe eine Bitte. – Jeg har en anmodning.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-A1-0040
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.comparison[1].meaning`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[1].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** lūdzu
**PROPOSED_DA:** venligst
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-A1-0041
**Card ID:** a1-bitte-study
**ID / path:** `a1-bitte-study.study.comparison[1].example`
**DE (read-only):** bitte
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Komm bitte herein. – Lūdzu, nāc iekšā.
**PROPOSED_DA:** Komm bitte herein. – Vær så venlig at komme ind.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-A1-0042
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.comparison[4].meaning`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.comparison[4].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** paņemt
**PROPOSED_DA:** at tage
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** DA-A1-0043
**Card ID:** a1-bringen
**ID / path:** `a1-bringen.study.comparison[4].example`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich nehme das Buch. – Es paņemu grāmatu.
**PROPOSED_DA:** Ich nehme das Buch. – Jeg tager bogen.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-A1-0044
**Card ID:** a1-ein
**ID / path:** `a1-ein.study.examples[3].lv`
**DE (read-only):** ein
**Severity:** HIGH
**Field:** `study.examples[3].lv`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Bērns spēlējas.
**PROPOSED_DA:** Barnet leger.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-A1-0045
**Card ID:** a1-ein
**ID / path:** `a1-ein.study.comparison[0].meaning`
**DE (read-only):** ein
**Severity:** HIGH
**Field:** `study.comparison[0].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** vīriešu dzimte
**PROPOSED_DA:** hankøn
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-A1-0046
**Card ID:** a1-ein
**ID / path:** `a1-ein.study.comparison[1].meaning`
**DE (read-only):** ein
**Severity:** HIGH
**Field:** `study.comparison[1].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** sieviešu dzimte
**PROPOSED_DA:** hunkøn
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-A1-0047
**Card ID:** a1-ein
**ID / path:** `a1-ein.study.comparison[3].meaning`
**DE (read-only):** ein
**Severity:** HIGH
**Field:** `study.comparison[3].meaning`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** akuzatīvs
**PROPOSED_DA:** akkusativ
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-A1-0048
**Card ID:** a1-eis
**ID / path:** `a1-eis.study.comparison[0].example`
**DE (read-only):** Eis
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich esse ein Eis. = Es ēdu saldējumu.
**PROPOSED_DA:** Ich esse ein Eis. = Jeg spiser en is.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-A1-0049
**Card ID:** a1-eis
**ID / path:** `a1-eis.study.comparison[2].example`
**DE (read-only):** Eis
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Das Wasser ist kalt. = Ūdens ir auksts.
**PROPOSED_DA:** Das Wasser ist kalt. = Vandet er koldt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-A1-0050
**Card ID:** a1-eis
**ID / path:** `a1-eis.study.comparison[3].example`
**DE (read-only):** Eis
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Eis ist ein Dessert. = Saldējums ir deserts.
**PROPOSED_DA:** Eis ist ein Dessert. = Is er en dessert.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 51

**Audit ID:** DA-A1-0051
**Card ID:** a1-erst
**ID / path:** `a1-erst.study.comparison[1].example`
**DE (read-only):** erst
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Zuerst frühstücken wir. = Vispirms mēs brokastojam.
**PROPOSED_DA:** Zuerst frühstücken wir. = Først spiser vi morgenmad.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 52

**Audit ID:** DA-A1-0052
**Card ID:** a1-erst
**ID / path:** `a1-erst.study.comparison[2].example`
**DE (read-only):** erst
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich habe nur 5 Euro. = Man ir tikai 5 eiro.
**PROPOSED_DA:** Ich habe nur 5 Euro. = Jeg har kun 5 euro.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 53

**Audit ID:** DA-A1-0053
**Card ID:** a1-erst
**ID / path:** `a1-erst.study.comparison[3].example`
**DE (read-only):** erst
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Dann gehen wir nach Hause. = Tad mēs ejam mājās.
**PROPOSED_DA:** Dann gehen wir nach Hause. = Så går vi hjem.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 54

**Audit ID:** DA-A1-0054
**Card ID:** a1-es
**ID / path:** `a1-es.study.comparison[0].example`
**DE (read-only):** es
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Es regnet. – Līst.
**PROPOSED_DA:** Es regnet. – Det regner.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 55

**Audit ID:** DA-A1-0055
**Card ID:** a1-es
**ID / path:** `a1-es.study.comparison[1].example`
**DE (read-only):** es
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich lerne Deutsch. – Es mācos vācu valodu.
**PROPOSED_DA:** Ich lerne Deutsch. – Jeg lærer tysk.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 56

**Audit ID:** DA-A1-0056
**Card ID:** a1-etwas
**ID / path:** `a1-etwas.study.comparison[0].example`
**DE (read-only):** etwas
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich brauche etwas. = Man kaut kas vajadzīgs.
**PROPOSED_DA:** Ich brauche etwas. = Jeg har brug for noget.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 57

**Audit ID:** DA-A1-0057
**Card ID:** a1-etwas
**ID / path:** `a1-etwas.study.comparison[2].example`
**DE (read-only):** etwas
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich bin ein bisschen müde. = Es esmu mazliet noguris.
**PROPOSED_DA:** Ich bin ein bisschen müde. = Jeg er lidt træt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 58

**Audit ID:** DA-A1-0058
**Card ID:** a1-euch
**ID / path:** `a1-euch.study.comparison[0].example`
**DE (read-only):** euch
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ihr seid freundlich. = Jūs esat draudzīgi.
**PROPOSED_DA:** Ihr seid freundlich. = I er venlige.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 59

**Audit ID:** DA-A1-0059
**Card ID:** a1-euch
**ID / path:** `a1-euch.study.comparison[1].example`
**DE (read-only):** euch
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich helfe euch. = Es jums palīdzu.
**PROPOSED_DA:** Ich helfe euch. = Jeg hjælper jer.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 60

**Audit ID:** DA-A1-0060
**Card ID:** a1-euch
**ID / path:** `a1-euch.study.comparison[2].example`
**DE (read-only):** euch
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Das ist euer Haus. = Tā ir jūsu māja.
**PROPOSED_DA:** Das ist euer Haus. = Det er jeres hus.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 61

**Audit ID:** DA-A1-0061
**Card ID:** a1-finden
**ID / path:** `a1-finden.study.comparison[0].example`
**DE (read-only):** finden
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a1.js`
**LV reference:** (skat. LV etalonu data/a1.js)
**CURRENT_DA:** Ich finde das gut. = Man tas šķiet labi.
**PROPOSED_DA:** Ich finde das gut. = Jeg synes, det er godt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Audita pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Avots:** GPT-5.6 Luna audit (`reports/da-a1-full-audit.md`)

**OWNER_DECISION:**

---
