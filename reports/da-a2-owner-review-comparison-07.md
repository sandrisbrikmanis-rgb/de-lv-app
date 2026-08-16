# DA–DE A2 — OWNER review Comparison part 07

Avots: `reports/da-a2-full-audit.md` / `reports/temp/da-a2-audit-data.json`
Findings: **924–1035** (50 ieraksti)
Fails: `reports/da-a2-owner-review-comparison-07.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-a2-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 924

**Audit ID:** DA-A2-0924
**Card ID:** a2-leihen
**ID / path:** `a2-leihen.study.comparison[3].example`
**DE (read-only):** leihen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich kaufe das Buch. = Es pērku grāmatu.
**PROPOSED_DA:** Ich kaufe das Buch. = Jeg pērku bogen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 931

**Audit ID:** DA-A2-0931
**Card ID:** a2-leiter
**ID / path:** `a2-leiter.study.comparison[0].example`
**DE (read-only):** Leiter
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Leiter der Firma. = Uzņēmuma vadītājs. Plural: die Leiter.
**PROPOSED_DA:** Der Leiter der Firma. = Lederen af ​​virksomheden er meget flink.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 932

**Audit ID:** DA-A2-0932
**Card ID:** a2-leiter
**ID / path:** `a2-leiter.study.comparison[1].example`
**DE (read-only):** Leiter
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich steige auf die Leiter. = Es kāpju uz kāpnēm. Plural: die Leitern.
**PROPOSED_DA:** Ich steige auf die Leiter. = Jeg går op ad trappen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 933

**Audit ID:** DA-A2-0933
**Card ID:** a2-leitung
**ID / path:** `a2-leitung.study.comparison[0].example`
**DE (read-only):** Leitung
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Leitung ist kaputt. = Līnija ir bojāta.
**PROPOSED_DA:** Die Leitung ist kaputt. = Den elektriske ledning er beskadiget.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 934

**Audit ID:** DA-A2-0934
**Card ID:** a2-leitung
**ID / path:** `a2-leitung.study.comparison[1].example`
**DE (read-only):** Leitung
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi.
**PROPOSED_DA:** Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 935

**Audit ID:** DA-A2-0935
**Card ID:** a2-leitung
**ID / path:** `a2-leitung.study.comparison[2].example`
**DE (read-only):** Leitung
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das Kabel ist zu kurz. = Kabelis ir par īsu.
**PROPOSED_DA:** Das Kabel ist zu kurz. = Kabelis er par īsu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 936

**Audit ID:** DA-A2-0936
**Card ID:** a2-leitung
**ID / path:** `a2-leitung.study.comparison[3].example`
**DE (read-only):** Leitung
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Telefonleitung ist frei. = Telefona līnija ir brīva.
**PROPOSED_DA:** Die Telefonleitung ist frei. = Telefona līnija er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 937

**Audit ID:** DA-A2-0937
**Card ID:** a2-leitung
**ID / path:** `a2-leitung.study.comparison[4].example`
**DE (read-only):** Leitung
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Wasserleitung tropft. = Ūdens caurule pil.
**PROPOSED_DA:** Die Wasserleitung tropft. = Ūdens caurule pil.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 954

**Audit ID:** DA-A2-0954
**Card ID:** a2-merken
**ID / path:** `a2-merken.study.comparison[0].example`
**DE (read-only):** merken
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich merke den Fehler. = Es pamanu kļūdu.
**PROPOSED_DA:** Ich merke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 955

**Audit ID:** DA-A2-0955
**Card ID:** a2-merken
**ID / path:** `a2-merken.study.comparison[1].example`
**DE (read-only):** merken
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Merk dir das! = Iegaumē to!
**PROPOSED_DA:** Merk dir das! = Iegaumē to!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 956

**Audit ID:** DA-A2-0956
**Card ID:** a2-merken
**ID / path:** `a2-merken.study.comparison[2].example`
**DE (read-only):** merken
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED_DA:** Ich bemerke den Fehler. = Jeg pamanu kļūdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 957

**Audit ID:** DA-A2-0957
**Card ID:** a2-merken
**ID / path:** `a2-merken.study.comparison[4].example`
**DE (read-only):** merken
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich behalte die Nummer. = Es paturu numuru prātā.
**PROPOSED_DA:** Ich behalte die Nummer. = Jeg paturu numuru prātā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 958

**Audit ID:** DA-A2-0958
**Card ID:** a2-mittel
**ID / path:** `a2-mittel.study.comparison[0].example`
**DE (read-only):** Mittel
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** ein Mittel gegen Husten = līdzeklis pret klepu
**PROPOSED_DA:** ein Mittel gegen Husten = Det er et godt middel mod hoste.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 959

**Audit ID:** DA-A2-0959
**Card ID:** a2-mittel
**ID / path:** `a2-mittel.study.comparison[1].example`
**DE (read-only):** Mittel
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das Medikament hilft. = Medikaments palīdz.
**PROPOSED_DA:** Das Medikament hilft. = Medikaments palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 960

**Audit ID:** DA-A2-0960
**Card ID:** a2-mittel
**ID / path:** `a2-mittel.study.comparison[2].example`
**DE (read-only):** Mittel
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Diese Methode ist einfach. = Šī metode ir vienkārša.
**PROPOSED_DA:** Diese Methode ist einfach. = Šī metode er vienkārša.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 961

**Audit ID:** DA-A2-0961
**Card ID:** a2-mittel
**ID / path:** `a2-mittel.study.comparison[4].example`
**DE (read-only):** Mittel
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** finanzielle Mittel = finanšu līdzekļi
**PROPOSED_DA:** finanzielle Mittel = finanšu līdzekļi
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 963

**Audit ID:** DA-A2-0963
**Card ID:** a2-note
**ID / path:** `a2-note.study.comparison[0].example`
**DE (read-only):** Note
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich bekomme eine Note. = Es saņemu atzīmi.
**PROPOSED_DA:** Ich bekomme eine Note. = Jeg fik en god karakter.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 964

**Audit ID:** DA-A2-0964
**Card ID:** a2-note
**ID / path:** `a2-note.study.comparison[1].example`
**DE (read-only):** Note
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Schulnote ist gut. = Skolas atzīme ir laba.
**PROPOSED_DA:** Die Schulnote ist gut. = Skolas atzīme er laba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 965

**Audit ID:** DA-A2-0965
**Card ID:** a2-note
**ID / path:** `a2-note.study.comparison[2].example`
**DE (read-only):** Note
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Musiknote ist hoch. = Mūzikas nots ir augsta.
**PROPOSED_DA:** Die Musiknote ist hoch. = Mūzikas nots er augsta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 972

**Audit ID:** DA-A2-0972
**Card ID:** a2-nutzen
**ID / path:** `a2-nutzen.study.comparison[2].example`
**DE (read-only):** nutzen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Wir verwenden dieses Wort. = Mēs izmantojam šo vārdu.
**PROPOSED_DA:** Wir verwenden dieses Wort. = Vi izmantojam šo vārdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 973

**Audit ID:** DA-A2-0973
**Card ID:** a2-nutzen
**ID / path:** `a2-nutzen.study.comparison[3].example`
**DE (read-only):** nutzen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Nutze die Chance! = Izmanto iespēju!
**PROPOSED_DA:** Nutze die Chance! = Izmanto iespēju!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 974

**Audit ID:** DA-A2-0974
**Card ID:** a2-offen
**ID / path:** `a2-offen.study.comparison[0].example`
**DE (read-only):** offen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Tür ist offen. = Durvis ir vaļā.
**PROPOSED_DA:** Die Tür ist offen. = Døren er åben.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 975

**Audit ID:** DA-A2-0975
**Card ID:** a2-offen
**ID / path:** `a2-offen.study.comparison[1].example`
**DE (read-only):** offen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das Museum ist geöffnet. = Muzejs ir atvērts.
**PROPOSED_DA:** Das Museum ist geöffnet. = Muzejs er atvērts.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 976

**Audit ID:** DA-A2-0976
**Card ID:** a2-offen
**ID / path:** `a2-offen.study.comparison[2].example`
**DE (read-only):** offen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_DA:** Er ist ehrlich. = Viņš er godīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 977

**Audit ID:** DA-A2-0977
**Card ID:** a2-offen
**ID / path:** `a2-offen.study.comparison[3].example`
**DE (read-only):** offen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Platz ist frei. = Vieta ir brīva.
**PROPOSED_DA:** Der Platz ist frei. = Vieta er brīva.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 979

**Audit ID:** DA-A2-0979
**Card ID:** a2-patient
**ID / path:** `a2-patient.study.comparison[1].example`
**DE (read-only):** Patient
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Patientin ruht sich aus. = Paciente atpūšas.
**PROPOSED_DA:** Die Patientin ruht sich aus. = Patienten har det bedre.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 980

**Audit ID:** DA-A2-0980
**Card ID:** a2-patient
**ID / path:** `a2-patient.study.comparison[2].example`
**DE (read-only):** Patient
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Kranke liegt im Bett. = Slimnieks guļ gultā.
**PROPOSED_DA:** Der Kranke liegt im Bett. = Slimnieks guļ gultā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 981

**Audit ID:** DA-A2-0981
**Card ID:** a2-personal
**ID / path:** `a2-personal.study.comparison[0].example`
**DE (read-only):** Personal
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das Personal hilft. = Personāls palīdz.
**PROPOSED_DA:** Das Personal hilft. = Personāls palīdz.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 982

**Audit ID:** DA-A2-0982
**Card ID:** a2-personal
**ID / path:** `a2-personal.study.comparison[1].example`
**DE (read-only):** Personal
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā.
**PROPOSED_DA:** Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 983

**Audit ID:** DA-A2-0983
**Card ID:** a2-personal
**ID / path:** `a2-personal.study.comparison[2].example`
**DE (read-only):** Personal
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das ist persönlich. = Tas ir personīgi.
**PROPOSED_DA:** Das ist persönlich. = Tas er personīgi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 995

**Audit ID:** DA-A2-0995
**Card ID:** a2-riechen
**ID / path:** `a2-riechen.study.comparison[2].example`
**DE (read-only):** riechen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Es riecht nach Kaffee. = Smaržo pēc kafijas.
**PROPOSED_DA:** Es riecht nach Kaffee. = Dufter af kaffe.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 996

**Audit ID:** DA-A2-0996
**Card ID:** a2-rolle
**ID / path:** `a2-rolle.study.comparison[0].example`
**DE (read-only):** Rolle
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Sie spielt eine Rolle. = Viņa spēlē lomu.
**PROPOSED_DA:** Sie spielt eine Rolle. = Hun spiller en vigtig rolle i holdet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 997

**Audit ID:** DA-A2-0997
**Card ID:** a2-rolle
**ID / path:** `a2-rolle.study.comparison[1].example`
**DE (read-only):** Rolle
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Er hat die Hauptrolle. = Viņam ir galvenā loma.
**PROPOSED_DA:** Er hat die Hauptrolle. = Viņam er galvenā loma.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 998

**Audit ID:** DA-A2-0998
**Card ID:** a2-rolle
**ID / path:** `a2-rolle.study.comparison[2].example`
**DE (read-only):** Rolle
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich kaufe eine Papierrolle. = Es pērku papīra rulli.
**PROPOSED_DA:** Ich kaufe eine Papierrolle. = Jeg pērku papīra rulli.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 999

**Audit ID:** DA-A2-0999
**Card ID:** a2-rolle
**ID / path:** `a2-rolle.study.comparison[3].example`
**DE (read-only):** Rolle
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das hat keine Bedeutung. = Tam nav nozīmes.
**PROPOSED_DA:** Das hat keine Bedeutung. = Tam har ikke nozīmes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1000

**Audit ID:** DA-A2-1000
**Card ID:** a2-rolle
**ID / path:** `a2-rolle.study.comparison[4].example`
**DE (read-only):** Rolle
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Das ist ein Teil der Arbeit. = Tā ir daļa no darba.
**PROPOSED_DA:** Das ist ein Teil der Arbeit. = Tā er daļa no darba.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1008

**Audit ID:** DA-A2-1008
**Card ID:** a2-sammeln
**ID / path:** `a2-sammeln.study.comparison[0].example`
**DE (read-only):** sammeln
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Briefmarken sammeln = krāt pastmarkas
**PROPOSED_DA:** Briefmarken sammeln = krāt pastmarkas
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1009

**Audit ID:** DA-A2-1009
**Card ID:** a2-sammeln
**ID / path:** `a2-sammeln.study.comparison[1].example`
**DE (read-only):** sammeln
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Schüler sammeln sich. = Skolēni sapulcējas.
**PROPOSED_DA:** Die Schüler sammeln sich. = Eleverne samles foran skolen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1010

**Audit ID:** DA-A2-1010
**Card ID:** a2-sammeln
**ID / path:** `a2-sammeln.study.comparison[2].example`
**DE (read-only):** sammeln
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich hole Wasser. = Es atnesu ūdeni.
**PROPOSED_DA:** Ich hole Wasser. = Jeg atnesu ūdeni.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1011

**Audit ID:** DA-A2-1011
**Card ID:** a2-sammeln
**ID / path:** `a2-sammeln.study.comparison[3].example`
**DE (read-only):** sammeln
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ich hebe den Zettel auf. = Es paceļu zīmīti.
**PROPOSED_DA:** Ich hebe den Zettel auf. = Jeg paceļu zīmīti.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1012

**Audit ID:** DA-A2-1012
**Card ID:** a2-satz
**ID / path:** `a2-satz.study.comparison[0].example`
**DE (read-only):** Satz
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Satz ist kurz. = Teikums ir īss.
**PROPOSED_DA:** Der Satz ist kurz. = Teikums er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1013

**Audit ID:** DA-A2-1013
**Card ID:** a2-satz
**ID / path:** `a2-satz.study.comparison[1].example`
**DE (read-only):** Satz
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der deutsche Satz ist richtig. = Vācu teikums ir pareizs.
**PROPOSED_DA:** Der deutsche Satz ist richtig. = Vācu teikums er pareizs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1014

**Audit ID:** DA-A2-1014
**Card ID:** a2-satz
**ID / path:** `a2-satz.study.comparison[2].example`
**DE (read-only):** Satz
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Ein Satz Reifen ist teuer. = Riepu komplekts ir dārgs.
**PROPOSED_DA:** Ein Satz Reifen ist teuer. = Jeg køber et sæt dæk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1015

**Audit ID:** DA-A2-1015
**Card ID:** a2-satz
**ID / path:** `a2-satz.study.comparison[4].example`
**DE (read-only):** Satz
**Severity:** HIGH
**Field:** `study.comparison[4].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Der Kaffeesatz bleibt im Glas. = Kafijas biezumi paliek glāzē.
**PROPOSED_DA:** Der Kaffeesatz bleibt im Glas. = Kaffegrums forbliver i glasset.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1023

**Audit ID:** DA-A2-1023
**Card ID:** a2-scheinen
**ID / path:** `a2-scheinen.study.comparison[0].example`
**DE (read-only):** scheinen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Sonne scheint. = Saule spīd.
**PROPOSED_DA:** Die Sonne scheint. = Solen skinner.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1024

**Audit ID:** DA-A2-1024
**Card ID:** a2-scheinen
**ID / path:** `a2-scheinen.study.comparison[2].example`
**DE (read-only):** scheinen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Er wirkt ruhig. = Viņš šķiet mierīgs.
**PROPOSED_DA:** Er wirkt ruhig. = Viņš šķiet mierīgs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1025

**Audit ID:** DA-A2-1025
**Card ID:** a2-scheinen
**ID / path:** `a2-scheinen.study.comparison[3].example`
**DE (read-only):** scheinen
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Lampe leuchtet. = Lampa spīd.
**PROPOSED_DA:** Die Lampe leuchtet. = Lampa spīd.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1033

**Audit ID:** DA-A2-1033
**Card ID:** a2-schlange
**ID / path:** `a2-schlange.study.comparison[1].example`
**DE (read-only):** Schlange
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Warteschlange ist lang. = Gaidīšanas rinda ir gara.
**PROPOSED_DA:** Die Warteschlange ist lang. = Gaidīšanas rinda er gara.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1034

**Audit ID:** DA-A2-1034
**Card ID:** a2-schlange
**ID / path:** `a2-schlange.study.comparison[2].example`
**DE (read-only):** Schlange
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Die Stühle stehen in einer Reihe. = Krēsli stāv rindā.
**PROPOSED_DA:** Die Stühle stehen in einer Reihe. = Krēsli stāv rindā.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 1035

**Audit ID:** DA-A2-1035
**Card ID:** a2-schlange
**ID / path:** `a2-schlange.study.comparison[3].example`
**DE (read-only):** Schlange
**Severity:** HIGH
**Field:** `study.comparison[3].example`
**Production file:** `data/da/a2.js`
**LV reference:** (skat. LV etalonu `data/a2.js`)
**CURRENT_DA:** Eine Schlange ist ein Reptil. = Čūska ir rāpulis.
**PROPOSED_DA:** Eine Schlange ist ein Reptil. = Jeg ser en slange i skoven.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-a2-full-audit.md`)

**OWNER_DECISION:**

---
