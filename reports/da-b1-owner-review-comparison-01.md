# DA–DE B1 — OWNER review Comparison part 01

Avots: `reports/da-b1-full-audit.md` / `reports/temp/da-b1-audit-data.json`
Findings: **1–62** (50 ieraksti)
Fails: `reports/da-b1-owner-review-comparison-01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-b1-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 1

**Audit ID:** DA-B1-0001
**Card ID:** b1-anbauen
**ID / path:** `b1-anbauen.study.comparison[0].example`
**DE (read-only):** anbauen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir bauen Gemüse an. = Mēs audzējam dārzeņus.
**PROPOSED_DA:** Wir bauen Gemüse an. = Vi audzējam dārzeņus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-B1-0002
**Card ID:** b1-anbauen
**ID / path:** `b1-anbauen.study.comparison[1].example`
**DE (read-only):** anbauen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Sie bauen ein Haus. = Viņi būvē māju.
**PROPOSED_DA:** Sie bauen ein Haus. = Viņi būvē māju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-B1-0003
**Card ID:** b1-anbauen
**ID / path:** `b1-anbauen.study.comparison[2].example`
**DE (read-only):** anbauen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich pflanze einen Baum. = Es stādu koku.
**PROPOSED_DA:** Ich pflanze einen Baum. = Jeg stādu koku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-B1-0005
**Card ID:** b1-angeben
**ID / path:** `b1-angeben.study.comparison[0].example`
**DE (read-only):** angeben
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Bitte geben Sie den Namen an. = Lūdzu, norādiet vārdu.
**PROPOSED_DA:** Bitte geben Sie den Namen an. = Angiv venligst din adresse.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-B1-0006
**Card ID:** b1-angeben
**ID / path:** `b1-angeben.study.comparison[1].example`
**DE (read-only):** angeben
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Nennen Sie bitte Ihren Namen. = Lūdzu, nosauciet savu vārdu.
**PROPOSED_DA:** Nennen Sie bitte Ihren Namen. = Lūdzu, nosauciet savu vārdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-B1-0007
**Card ID:** b1-angeben
**ID / path:** `b1-angeben.study.comparison[2].example`
**DE (read-only):** angeben
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er prahlt mit seinem Erfolg. = Viņš lielās ar saviem panākumiem.
**PROPOSED_DA:** Er prahlt mit seinem Erfolg. = Viņš lielās ar saviem panākumiem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-B1-0008
**Card ID:** b1-anbringen
**ID / path:** `b1-anbringen.study.comparison[0].example`
**DE (read-only):** anbringen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich bringe ein Bild an. = Es piestiprinu attēlu.
**PROPOSED_DA:** Ich bringe ein Bild an. = Jeg piestiprinu attēlu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-B1-0009
**Card ID:** b1-anbringen
**ID / path:** `b1-anbringen.study.comparison[1].example`
**DE (read-only):** anbringen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir stellen ein Regal auf. = Mēs uzstādām plauktu.
**PROPOSED_DA:** Wir stellen ein Regal auf. = Vi uzstādām plauktu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-B1-0010
**Card ID:** b1-anbringen
**ID / path:** `b1-anbringen.study.comparison[2].example`
**DE (read-only):** anbringen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir befestigen das Schild an der Wand. = Mēs piestiprinām zīmi pie sienas.
**PROPOSED_DA:** Wir befestigen das Schild an der Wand. = Vi piestiprinām zīmi pie sienas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-B1-0013
**Card ID:** b1-abbauen
**ID / path:** `b1-abbauen.study.comparison[0].example`
**DE (read-only):** abbauen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Firma baut Stellen ab. = Uzņēmums samazina darba vietu skaitu.
**PROPOSED_DA:** Die Firma baut Stellen ab. = Virksomheden reducerer antallet af arbejdspladser.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-B1-0014
**Card ID:** b1-abbauen
**ID / path:** `b1-abbauen.study.comparison[1].example`
**DE (read-only):** abbauen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir bauen das Zelt auf. = Mēs uzceļam telti.
**PROPOSED_DA:** Wir bauen das Zelt auf. = Vi river teltet ned.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-B1-0015
**Card ID:** b1-abbauen
**ID / path:** `b1-abbauen.study.comparison[2].example`
**DE (read-only):** abbauen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir reduzieren die Kosten. = Mēs samazinām izmaksas.
**PROPOSED_DA:** Wir reduzieren die Kosten. = Vi samazinām izmaksas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-B1-0019
**Card ID:** b1-abbrechen
**ID / path:** `b1-abbrechen.study.comparison[0].example`
**DE (read-only):** abbrechen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er bricht den Kurs ab. = Viņš pārtrauc kursu.
**PROPOSED_DA:** Er bricht den Kurs ab. = Viņš pārtrauc kursu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-B1-0020
**Card ID:** b1-abbrechen
**ID / path:** `b1-abbrechen.study.comparison[1].example`
**DE (read-only):** abbrechen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Darf ich Sie kurz unterbrechen? = Vai drīkstu jūs īsi pārtraukt?
**PROPOSED_DA:** Darf ich Sie kurz unterbrechen? = Vai drīkstu jūs īsi pārtraukt?
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-B1-0021
**Card ID:** b1-abbrechen
**ID / path:** `b1-abbrechen.study.comparison[2].example`
**DE (read-only):** abbrechen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir beenden die Arbeit. = Mēs pabeidzam darbu.
**PROPOSED_DA:** Wir beenden die Arbeit. = Vi pabeidzam darbu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-B1-0022
**Card ID:** b1-abdecken
**ID / path:** `b1-abdecken.study.comparison[0].example`
**DE (read-only):** abdecken
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Sie deckt den Tisch ab. = Viņa novāc galdu.
**PROPOSED_DA:** Sie deckt den Tisch ab. = Efter at have spist rydder han bordet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-B1-0023
**Card ID:** b1-abdecken
**ID / path:** `b1-abdecken.study.comparison[1].example`
**DE (read-only):** abdecken
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich decke den Tisch. = Es klāju galdu.
**PROPOSED_DA:** Ich decke den Tisch. = Jeg klāju galdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-B1-0024
**Card ID:** b1-abdecken
**ID / path:** `b1-abdecken.study.comparison[2].example`
**DE (read-only):** abdecken
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich decke das Kind zu. = Es apsedzu bērnu.
**PROPOSED_DA:** Ich decke das Kind zu. = Jeg apsedzu bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-B1-0025
**Card ID:** b1-abgehen
**ID / path:** `b1-abgehen.study.comparison[0].example`
**DE (read-only):** abgehen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Zug geht ab. = Vilciens atiet.
**PROPOSED_DA:** Der Zug geht ab. = Toget afgår.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-B1-0026
**Card ID:** b1-abgehen
**ID / path:** `b1-abgehen.study.comparison[1].example`
**DE (read-only):** abgehen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Sie geht weg. = Viņa aiziet prom.
**PROPOSED_DA:** Sie geht weg. = Hun aiziet væk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-B1-0027
**Card ID:** b1-abgehen
**ID / path:** `b1-abgehen.study.comparison[2].example`
**DE (read-only):** abgehen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Mir fehlt nichts. = Man nekā netrūkst.
**PROPOSED_DA:** Mir fehlt nichts. = Jeg har nekā netrūkst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-B1-0028
**Card ID:** b1-ablegen
**ID / path:** `b1-ablegen.study.comparison[0].example`
**DE (read-only):** ablegen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Sie legt die Prüfung ab. = Viņa kārto eksāmenu.
**PROPOSED_DA:** Sie legt die Prüfung ab. = Han tager en eksamen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** DA-B1-0029
**Card ID:** b1-ablegen
**ID / path:** `b1-ablegen.study.comparison[1].example`
**DE (read-only):** ablegen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED_DA:** Ich lege das Buch auf den Tisch. = Jeg nolieku bogen uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** DA-B1-0030
**Card ID:** b1-abnehmen
**ID / path:** `b1-abnehmen.study.comparison[0].example`
**DE (read-only):** abnehmen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich nehme die Brille ab. = Es noņemu brilles.
**PROPOSED_DA:** Ich nehme die Brille ab. = Jeg noņemu brilles.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** DA-B1-0031
**Card ID:** b1-abnehmen
**ID / path:** `b1-abnehmen.study.comparison[1].example`
**DE (read-only):** abnehmen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er hat zugenommen. = Viņš ir pieņēmies svarā.
**PROPOSED_DA:** Er hat zugenommen. = Viņš er pieņēmies svarā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** DA-B1-0032
**Card ID:** b1-abnehmen
**ID / path:** `b1-abnehmen.study.comparison[2].example`
**DE (read-only):** abnehmen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Sie nimmt mir das Handy weg. = Viņa man atņem telefonu.
**PROPOSED_DA:** Sie nimmt mir das Handy weg. = Hun man atņem telefonu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** DA-B1-0033
**Card ID:** b1-absatz
**ID / path:** `b1-absatz.study.comparison[0].example`
**DE (read-only):** Absatz
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Absatz ist kurz. = Rindkopa ir īsa.
**PROPOSED_DA:** Der Absatz ist kurz. = Rindkopa er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** DA-B1-0034
**Card ID:** b1-absatz
**ID / path:** `b1-absatz.study.comparison[1].example`
**DE (read-only):** Absatz
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Meine Ferse tut weh. = Man sāp papēdis.
**PROPOSED_DA:** Meine Ferse tut weh. = Jeg har sāp papēdis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** DA-B1-0035
**Card ID:** b1-absatz
**ID / path:** `b1-absatz.study.comparison[2].example`
**DE (read-only):** Absatz
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Dieser Abschnitt ist wichtig. = Šis posms ir svarīgs.
**PROPOSED_DA:** Dieser Abschnitt ist wichtig. = Šis posms er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-B1-0038
**Card ID:** b1-abschluss
**ID / path:** `b1-abschluss.study.comparison[0].example`
**DE (read-only):** Abschluss
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Abschluss ist wichtig. = Noslēgums ir svarīgs.
**PROPOSED_DA:** Der Abschluss ist wichtig. = Noslēgums er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-B1-0039
**Card ID:** b1-abschluss
**ID / path:** `b1-abschluss.study.comparison[2].example`
**DE (read-only):** Abschluss
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Prüfung beginnt morgen. = Eksāmens sākas rīt.
**PROPOSED_DA:** Die Prüfung beginnt morgen. = Eksāmens sāsom i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-B1-0040
**Card ID:** b1-abschnitt
**ID / path:** `b1-abschnitt.study.comparison[0].example`
**DE (read-only):** Abschnitt
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Dieser Abschnitt ist wichtig. = Šis posms ir svarīgs.
**PROPOSED_DA:** Dieser Abschnitt ist wichtig. = Denne fase er svær.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-B1-0041
**Card ID:** b1-abschnitt
**ID / path:** `b1-abschnitt.study.comparison[1].example`
**DE (read-only):** Abschnitt
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Absatz ist kurz. = Rindkopa ir īsa.
**PROPOSED_DA:** Der Absatz ist kurz. = Rindkopa er īsa.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** DA-B1-0042
**Card ID:** b1-abschnitt
**ID / path:** `b1-abschnitt.study.comparison[2].example`
**DE (read-only):** Abschnitt
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die erste Phase ist vorbei. = Pirmā fāze ir beigusies.
**PROPOSED_DA:** Die erste Phase ist vorbei. = Pirmā fāze er beigusies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** DA-B1-0044
**Card ID:** b1-anlage
**ID / path:** `b1-anlage.study.comparison[0].example`
**DE (read-only):** Anlage
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Anlage ist modern. = Iekārta ir moderna.
**PROPOSED_DA:** Die Anlage ist modern. = Iekārta er moderna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** DA-B1-0045
**Card ID:** b1-anlage
**ID / path:** `b1-anlage.study.comparison[1].example`
**DE (read-only):** Anlage
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Gerät ist kaputt. = Ierīce ir sabojājusies.
**PROPOSED_DA:** Das Gerät ist kaputt. = Ierīce er sabojājusies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** DA-B1-0046
**Card ID:** b1-anlage
**ID / path:** `b1-anlage.study.comparison[2].example`
**DE (read-only):** Anlage
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Investition lohnt sich. = Ieguldījums atmaksājas.
**PROPOSED_DA:** Die Investition lohnt sich. = Ieguldījums atmaksājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** DA-B1-0047
**Card ID:** b1-anschlag
**ID / path:** `b1-anschlag.study.comparison[0].example`
**DE (read-only):** Anschlag
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Polizei untersucht den Anschlag. = Policija izmeklē atentātu.
**PROPOSED_DA:** Die Polizei untersucht den Anschlag. = Politiet efterforsker attentatet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** DA-B1-0048
**Card ID:** b1-anschlag
**ID / path:** `b1-anschlag.study.comparison[1].example`
**DE (read-only):** Anschlag
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Angriff kam plötzlich. = Uzbrukums sākās pēkšņi.
**PROPOSED_DA:** Der Angriff kam plötzlich. = Uzbrukums sākās pēkšņi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** DA-B1-0049
**Card ID:** b1-anschlag
**ID / path:** `b1-anschlag.study.comparison[2].example`
**DE (read-only):** Anschlag
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich lese die Anzeige. = Es lasu sludinājumu.
**PROPOSED_DA:** Ich lese die Anzeige. = Jeg lasu sludinājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** DA-B1-0050
**Card ID:** b1-anschluss
**ID / path:** `b1-anschluss.study.comparison[2].example`
**DE (read-only):** Anschluss
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich habe Zugang zum Internet. = Man ir piekļuve internetam.
**PROPOSED_DA:** Ich habe Zugang zum Internet. = Jeg har er piekļuve internetam.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 53

**Audit ID:** DA-B1-0053
**Card ID:** b1-ansehen
**ID / path:** `b1-ansehen.study.comparison[0].example`
**DE (read-only):** Ansehen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er hat großes Ansehen. = Viņu ļoti ciena.
**PROPOSED_DA:** Er hat großes Ansehen. = Viņu ļoti ciena.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 54

**Audit ID:** DA-B1-0054
**Card ID:** b1-ansehen
**ID / path:** `b1-ansehen.study.comparison[1].example`
**DE (read-only):** Ansehen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Firma hat einen guten Ruf. = Uzņēmumam ir laba reputācija.
**PROPOSED_DA:** Die Firma hat einen guten Ruf. = Uzņēmumam er laba reputācija.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 55

**Audit ID:** DA-B1-0055
**Card ID:** b1-antrag
**ID / path:** `b1-antrag.study.comparison[0].example`
**DE (read-only):** Antrag
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Antrag wurde angenommen. = Iesniegums tika pieņemts.
**PROPOSED_DA:** Der Antrag wurde angenommen. = Ansøgningen blev afvist.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 56

**Audit ID:** DA-B1-0056
**Card ID:** b1-antrag
**ID / path:** `b1-antrag.study.comparison[1].example`
**DE (read-only):** Antrag
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Meine Bewerbung war erfolgreich. = Mans darba pieteikums bija veiksmīgs.
**PROPOSED_DA:** Meine Bewerbung war erfolgreich. = Mans darba pieteikums bija veiksmīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 58

**Audit ID:** DA-B1-0058
**Card ID:** b1-auftrag
**ID / path:** `b1-auftrag.study.comparison[1].example`
**DE (read-only):** Auftrag
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Aufgabe ist schwer. = Uzdevums ir grūts.
**PROPOSED_DA:** Die Aufgabe ist schwer. = Uzdevums er grūts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 59

**Audit ID:** DA-B1-0059
**Card ID:** b1-auftrag
**ID / path:** `b1-auftrag.study.comparison[2].example`
**DE (read-only):** Auftrag
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Bestellung kommt morgen. = Pasūtījums atnāks rīt.
**PROPOSED_DA:** Die Bestellung kommt morgen. = Pasūtījums atnāks i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 60

**Audit ID:** DA-B1-0060
**Card ID:** b1-aufwand
**ID / path:** `b1-aufwand.study.comparison[0].example`
**DE (read-only):** Aufwand
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Aufwand ist hoch. = Pūles ir lielas.
**PROPOSED_DA:** Der Aufwand ist hoch. = Pūles er lielas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 61

**Audit ID:** DA-B1-0061
**Card ID:** b1-aufwand
**ID / path:** `b1-aufwand.study.comparison[1].example`
**DE (read-only):** Aufwand
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Danke für deine Mühe. = Paldies par tavām pūlēm.
**PROPOSED_DA:** Danke für deine Mühe. = Paldies par tavām pūlēm.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 62

**Audit ID:** DA-B1-0062
**Card ID:** b1-aufführen
**ID / path:** `b1-aufführen.study.comparison[0].example`
**DE (read-only):** aufführen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Theater führt ein Stück auf. = Teātris uzved lugu.
**PROPOSED_DA:** Das Theater führt ein Stück auf. = Teatret opfører et nyt stykke.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---
