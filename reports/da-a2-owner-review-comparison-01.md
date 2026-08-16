# DA–DE A2 — OWNER review Comparison part 01

Avots: `reports/da-a2-full-audit.md` / `reports/temp/da-a2-audit-data.json`
Findings: **1–179** (50 ieraksti)
Fails: `reports/da-a2-owner-review-comparison-01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-a2-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 1

**Audit ID:** DA-A2-0001
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.comparison[0].example`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Zug fährt ab. = Vilciens atiet.
**PROPOSED_DA:** Der Zug fährt ab. = Toget afgår.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-A2-0002
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.comparison[1].example`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich fahre morgen weg. = Es rīt aizbraucu prom.
**PROPOSED_DA:** Ich fahre morgen weg. = Jeg i morgen kører væk væk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-A2-0003
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.comparison[2].example`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Wir fahren jetzt los. = Mēs tagad sākam braukt.
**PROPOSED_DA:** Wir fahren jetzt los. = Vi nu begynder braukt.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-A2-0004
**Card ID:** a2-abfahren
**ID / path:** `a2-abfahren.study.comparison[3].example`
**DE (read-only):** abfahren
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Bus geht gleich ab. = Autobuss tūlīt atiet.
**PROPOSED_DA:** Der Bus geht gleich ab. = Bussen straks afgår.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-A2-0024
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.comparison[0].example`
**DE (read-only):** abgeben
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich gebe den Antrag ab. = Es iesniedzu pieteikumu.
**PROPOSED_DA:** Ich gebe den Antrag ab. = Jeg indsender ansøgningen.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-A2-0025
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.comparison[1].example`
**DE (read-only):** abgeben
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich gebe dir den Schlüssel. = Es tev dodu atslēgu.
**PROPOSED_DA:** Ich gebe dir den Schlüssel. = Jeg tev dodu nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-A2-0026
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.comparison[2].example`
**DE (read-only):** abgeben
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich gebe das Buch zurück. = Es atdodu grāmatu atpakaļ.
**PROPOSED_DA:** Ich gebe das Buch zurück. = Jeg atdodu bogen atpakaļ.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-A2-0027
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.comparison[3].example`
**DE (read-only):** abgeben
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich reiche die Unterlagen ein. = Es iesniedzu dokumentus.
**PROPOSED_DA:** Ich reiche die Unterlagen ein. = Jeg indsender dokumentus.
**Problēma:** Comparison piemērā latviešu daļa: LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** DA-A2-0028
**Card ID:** a2-abgeben
**ID / path:** `a2-abgeben.study.comparison[4].example`
**DE (read-only):** abgeben
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich verkaufe mein Fahrrad. = Es pārdodu savu velosipēdu.
**PROPOSED_DA:** Ich verkaufe mein Fahrrad. = Jeg pārdodu savu velosipēdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** DA-A2-0037
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.comparison[0].example`
**DE (read-only):** absagen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich sage den Termin ab. = Es atceļu tikšanos.
**PROPOSED_DA:** Ich sage den Termin ab. = Jeg atceļu tikšanos.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** DA-A2-0038
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.comparison[1].example`
**DE (read-only):** absagen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich lehne das Angebot ab. = Es noraidu piedāvājumu.
**PROPOSED_DA:** Ich lehne das Angebot ab. = Jeg noraidu piedāvājumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** DA-A2-0039
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.comparison[2].example`
**DE (read-only):** absagen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich kündige den Vertrag. = Es uzteicu līgumu.
**PROPOSED_DA:** Ich kündige den Vertrag. = Jeg uzteicu līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** DA-A2-0040
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.comparison[3].example`
**DE (read-only):** absagen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich storniere die Buchung. = Es atceļu rezervāciju.
**PROPOSED_DA:** Ich storniere die Buchung. = Jeg atceļu rezervāciju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** DA-A2-0041
**Card ID:** a2-absagen
**ID / path:** `a2-absagen.study.comparison[4].example`
**DE (read-only):** absagen
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Er sagt nein. = Viņš saka nē.
**PROPOSED_DA:** Er sagt nein. = Viņš saka nē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 51

**Audit ID:** DA-A2-0051
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.comparison[0].example`
**DE (read-only):** abschließen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED_DA:** Ich schließe die Tür ab. = Jeg aizslēdzu durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 52

**Audit ID:** DA-A2-0052
**Card ID:** a2-abschließen
**ID / path:** `a2-abschließen.study.comparison[3].example`
**DE (read-only):** abschließen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich unterschreibe den Vertrag. = Es parakstu līgumu.
**PROPOSED_DA:** Ich unterschreibe den Vertrag. = Jeg parakstu līgumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 65

**Audit ID:** DA-A2-0065
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.comparison[0].example`
**DE (read-only):** abstellen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich stelle das Fahrrad ab. = Es novietoju velosipēdu.
**PROPOSED_DA:** Ich stelle das Fahrrad ab. = Jeg parkerer cyklen
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 66

**Audit ID:** DA-A2-0066
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.comparison[1].example`
**DE (read-only):** abstellen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich schalte den Computer aus. = Es izslēdzu datoru.
**PROPOSED_DA:** Ich schalte den Computer aus. = Jeg izslēdzu datoru.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 67

**Audit ID:** DA-A2-0067
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.comparison[2].example`
**DE (read-only):** abstellen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Bus hält an. = Autobuss apstājas.
**PROPOSED_DA:** Der Bus hält an. = Bussen apstājas.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 68

**Audit ID:** DA-A2-0068
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.comparison[3].example`
**DE (read-only):** abstellen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Fahrer stoppt das Auto. = Vadītājs aptur auto.
**PROPOSED_DA:** Der Fahrer stoppt das Auto. = Vadītājs aptur auto.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 69

**Audit ID:** DA-A2-0069
**Card ID:** a2-abstellen
**ID / path:** `a2-abstellen.study.comparison[4].example`
**DE (read-only):** abstellen
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich stelle die Tasche neben die Tür. = Es nolieku somu pie durvīm.
**PROPOSED_DA:** Ich stelle die Tasche neben die Tür. = Jeg nolieku somu pie durvīm.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 83

**Audit ID:** DA-A2-0083
**Card ID:** a2-angewandt
**ID / path:** `a2-angewandt.study.comparison[0].example`
**DE (read-only):** angewandt
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Diese Methode wird angewandt. = Šī metode tiek pielietota.
**PROPOSED_DA:** Diese Methode wird angewandt. = Denne metode anvendes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 84

**Audit ID:** DA-A2-0084
**Card ID:** a2-angewandt
**ID / path:** `a2-angewandt.study.comparison[1].example`
**DE (read-only):** angewandt
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das ist eine praktische Lösung. = Tas ir praktisks risinājums.
**PROPOSED_DA:** Das ist eine praktische Lösung. = Tas er praktisks risinājums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 92

**Audit ID:** DA-A2-0092
**Card ID:** a2-angreifen
**ID / path:** `a2-angreifen.study.comparison[0].example`
**DE (read-only):** angreifen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Hund greift an. = Suns uzbrūk.
**PROPOSED_DA:** Der Hund greift an. = Hunden angriber manden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 93

**Audit ID:** DA-A2-0093
**Card ID:** a2-angreifen
**ID / path:** `a2-angreifen.study.comparison[1].example`
**DE (read-only):** angreifen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Gruppe attackiert ihn. = Grupa viņam uzbrūk.
**PROPOSED_DA:** Die Gruppe attackiert ihn. = Grupa viņam uzbrūk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 94

**Audit ID:** DA-A2-0094
**Card ID:** a2-angreifen
**ID / path:** `a2-angreifen.study.comparison[2].example`
**DE (read-only):** angreifen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Er beleidigt mich. = Viņš mani apvaino.
**PROPOSED_DA:** Er beleidigt mich. = Viņš mani apvaino.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 95

**Audit ID:** DA-A2-0095
**Card ID:** a2-angreifen
**ID / path:** `a2-angreifen.study.comparison[3].example`
**DE (read-only):** angreifen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Sie kritisiert den Vorschlag. = Viņa kritizē priekšlikumu.
**PROPOSED_DA:** Sie kritisiert den Vorschlag. = Hun kritizē priekšlikumu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 101

**Audit ID:** DA-A2-0101
**Card ID:** a2-anhänger
**ID / path:** `a2-anhänger.study.comparison[1].example`
**DE (read-only):** Anhänger
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Er ist ein Fan der Mannschaft. = Viņš ir komandas fans.
**PROPOSED_DA:** Er ist ein Fan der Mannschaft. = Viņš er komandas fans.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 102

**Audit ID:** DA-A2-0102
**Card ID:** a2-anhänger
**ID / path:** `a2-anhänger.study.comparison[2].example`
**DE (read-only):** Anhänger
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Sie hat viele Unterstützer. = Viņai ir daudz atbalstītāju.
**PROPOSED_DA:** Sie hat viele Unterstützer. = Viņai er daudz atbalstītāju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 103

**Audit ID:** DA-A2-0103
**Card ID:** a2-anhänger
**ID / path:** `a2-anhänger.study.comparison[3].example`
**DE (read-only):** Anhänger
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera.
**PROPOSED_DA:** Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 107

**Audit ID:** DA-A2-0107
**Card ID:** a2-anheizen
**ID / path:** `a2-anheizen.study.comparison[0].example`
**DE (read-only):** anheizen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich heize den Ofen an. = Es iekuru krāsni.
**PROPOSED_DA:** Ich heize den Ofen an. = Jeg iekuru krāsni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 108

**Audit ID:** DA-A2-0108
**Card ID:** a2-anheizen
**ID / path:** `a2-anheizen.study.comparison[1].example`
**DE (read-only):** anheizen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Wir heizen die Wohnung. = Mēs apkurinām dzīvokli.
**PROPOSED_DA:** Wir heizen die Wohnung. = Vi apkurinām dzīvokli.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 109

**Audit ID:** DA-A2-0109
**Card ID:** a2-anheizen
**ID / path:** `a2-anheizen.study.comparison[3].example`
**DE (read-only):** anheizen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das verschärft den Streit. = Tas saasina strīdu.
**PROPOSED_DA:** Das verschärft den Streit. = Tas saasina strīdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 113

**Audit ID:** DA-A2-0113
**Card ID:** a2-anlegen
**ID / path:** `a2-anlegen.study.comparison[1].example`
**DE (read-only):** anlegen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED_DA:** Ich lege das Buch auf den Tisch. = Jeg nolieku bogen uz galda.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 121

**Audit ID:** DA-A2-0121
**Card ID:** a2-anmelden
**ID / path:** `a2-anmelden.study.comparison[1].example`
**DE (read-only):** anmelden
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Melden Sie sich bitte an. = Lūdzu, piesakieties.
**PROPOSED_DA:** Melden Sie sich bitte an. = Tilmeld dig venligst online.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 122

**Audit ID:** DA-A2-0122
**Card ID:** a2-anmelden
**ID / path:** `a2-anmelden.study.comparison[2].example`
**DE (read-only):** anmelden
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich registriere mein Konto. = Es reģistrēju savu kontu.
**PROPOSED_DA:** Ich registriere mein Konto. = Jeg reģistrēju savu kontu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 123

**Audit ID:** DA-A2-0123
**Card ID:** a2-anmelden
**ID / path:** `a2-anmelden.study.comparison[3].example`
**DE (read-only):** anmelden
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich buche einen Termin. = Es rezervēju laiku.
**PROPOSED_DA:** Ich buche einen Termin. = Jeg rezervēju laiku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 124

**Audit ID:** DA-A2-0124
**Card ID:** a2-anmelden
**ID / path:** `a2-anmelden.study.comparison[4].example`
**DE (read-only):** anmelden
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich melde das Problem. = Es ziņoju par problēmu.
**PROPOSED_DA:** Ich melde das Problem. = Jeg ziņoju par problēmu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 133

**Audit ID:** DA-A2-0133
**Card ID:** a2-anstecken
**ID / path:** `a2-anstecken.study.comparison[1].example`
**DE (read-only):** anstecken
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Schlüssel steckt im Schloss. = Atslēga ir slēdzenē.
**PROPOSED_DA:** Der Schlüssel steckt im Schloss. = Atslēga er slēdzenē.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 134

**Audit ID:** DA-A2-0134
**Card ID:** a2-anstecken
**ID / path:** `a2-anstecken.study.comparison[3].example`
**DE (read-only):** anstecken
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich habe mich angesteckt. = Es inficējos.
**PROPOSED_DA:** Ich habe mich angesteckt. = Barnet smittede mig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 147

**Audit ID:** DA-A2-0147
**Card ID:** a2-anstellen
**ID / path:** `a2-anstellen.study.comparison[0].example`
**DE (read-only):** anstellen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Firma stellt ihn an. = Firma viņu pieņem darbā.
**PROPOSED_DA:** Die Firma stellt ihn an. = Virksomheden ansætter nye medarbejdere.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 148

**Audit ID:** DA-A2-0148
**Card ID:** a2-anstellen
**ID / path:** `a2-anstellen.study.comparison[1].example`
**DE (read-only):** anstellen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Wir stellen neue Leute ein. = Mēs pieņemam darbā jaunus cilvēkus.
**PROPOSED_DA:** Wir stellen neue Leute ein. = Vi pieņemam darbā jaunus cilvēkus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 149

**Audit ID:** DA-A2-0149
**Card ID:** a2-anstellen
**ID / path:** `a2-anstellen.study.comparison[2].example`
**DE (read-only):** anstellen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich schalte das Licht an. = Es ieslēdzu gaismu.
**PROPOSED_DA:** Ich schalte das Licht an. = Jeg ieslēdzu gaismu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 150

**Audit ID:** DA-A2-0150
**Card ID:** a2-anstellen
**ID / path:** `a2-anstellen.study.comparison[3].example`
**DE (read-only):** anstellen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich stelle mich an. = Es nostājos rindā.
**PROPOSED_DA:** Ich stelle mich an. = Jeg nostājos rindā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 166

**Audit ID:** DA-A2-0166
**Card ID:** a2-artikel
**ID / path:** `a2-artikel.study.comparison[0].example`
**DE (read-only):** Artikel
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Artikel ist kurz. = Raksts ir īss.
**PROPOSED_DA:** Der Artikel ist kurz. = Raksts er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 167

**Audit ID:** DA-A2-0167
**Card ID:** a2-artikel
**ID / path:** `a2-artikel.study.comparison[1].example`
**DE (read-only):** Artikel
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Zeitungsartikel ist neu. = Avīzes raksts ir jauns.
**PROPOSED_DA:** Der Zeitungsartikel ist neu. = Avīzes raksts er jauns.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 168

**Audit ID:** DA-A2-0168
**Card ID:** a2-artikel
**ID / path:** `a2-artikel.study.comparison[2].example`
**DE (read-only):** Artikel
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Ware ist teuer. = Prece ir dārga.
**PROPOSED_DA:** Die Ware ist teuer. = Prece er dārga.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 169

**Audit ID:** DA-A2-0169
**Card ID:** a2-artikel
**ID / path:** `a2-artikel.study.comparison[4].example`
**DE (read-only):** Artikel
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Paragraph ist wichtig. = Pants ir svarīgs.
**PROPOSED_DA:** Der Paragraph ist wichtig. = Pants er svarīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 178

**Audit ID:** DA-A2-0178
**Card ID:** a2-aufheben
**ID / path:** `a2-aufheben.study.comparison[0].example`
**DE (read-only):** aufheben
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich hebe den Schlüssel auf. = Es paceļu atslēgu.
**PROPOSED_DA:** Ich hebe den Schlüssel auf. = Jeg paceļu nøgle.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 179

**Audit ID:** DA-A2-0179
**Card ID:** a2-aufheben
**ID / path:** `a2-aufheben.study.comparison[1].example`
**DE (read-only):** aufheben
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich hebe die Hand. = Es paceļu roku.
**PROPOSED_DA:** Ich hebe die Hand. = Jeg paceļu roku.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---
