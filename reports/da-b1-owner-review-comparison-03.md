# DA–DE B1 — OWNER review Comparison part 03

Avots: `reports/da-b1-full-audit.md` / `reports/temp/da-b1-audit-data.json`
Findings: **153–232** (50 ieraksti)
Fails: `reports/da-b1-owner-review-comparison-03.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-b1-owner-decisions-${slug}.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`lv` un Study DA laukus).
> sectionAccents: var lietot **FJERN `termins`** vai pilnu jaunu tekstu.

## Finding 153

**Audit ID:** DA-B1-0153
**Card ID:** b1-beschließen
**ID / path:** `b1-beschließen.study.comparison[0].example`
**DE (read-only):** beschließen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Rat beschließt neue Regeln. = Padome pieņem jaunus noteikumus.
**PROPOSED_DA:** Der Rat beschließt neue Regeln. = Bestyrelsen vedtager nye regler.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 154

**Audit ID:** DA-B1-0154
**Card ID:** b1-beschließen
**ID / path:** `b1-beschließen.study.comparison[1].example`
**DE (read-only):** beschließen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich entscheide mich morgen. = Es izlemšu rīt.
**PROPOSED_DA:** Ich entscheide mich morgen. = Jeg izlemšu i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 155

**Audit ID:** DA-B1-0155
**Card ID:** b1-beschließen
**ID / path:** `b1-beschließen.study.comparison[2].example`
**DE (read-only):** beschließen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Bitte schließen Sie die Tür. = Lūdzu, aizveriet durvis.
**PROPOSED_DA:** Bitte schließen Sie die Tür. = Lūdzu, aizveriet durvis.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 158

**Audit ID:** DA-B1-0158
**Card ID:** b1-beschwerde
**ID / path:** `b1-beschwerde.study.comparison[0].example`
**DE (read-only):** Beschwerde
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Beschwerde ist berechtigt. = Sūdzība ir pamatota.
**PROPOSED_DA:** Die Beschwerde ist berechtigt. = Sūdzība er pamatota.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 159

**Audit ID:** DA-B1-0159
**Card ID:** b1-beschwerde
**ID / path:** `b1-beschwerde.study.comparison[1].example`
**DE (read-only):** Beschwerde
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Klage läuft noch. = Prasība vēl turpinās.
**PROPOSED_DA:** Die Klage läuft noch. = Prasība vēl turpinās.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 160

**Audit ID:** DA-B1-0160
**Card ID:** b1-beschwerde
**ID / path:** `b1-beschwerde.study.comparison[2].example`
**DE (read-only):** Beschwerde
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich habe Schmerzen. = Man sāp.
**PROPOSED_DA:** Ich habe Schmerzen. = Jeg har sāp.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 163

**Audit ID:** DA-B1-0163
**Card ID:** b1-besorgen
**ID / path:** `b1-besorgen.study.comparison[0].example`
**DE (read-only):** besorgen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich besorge Brot. = Es sagādāju maizi.
**PROPOSED_DA:** Ich besorge Brot. = Jeg sagādāju maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 164

**Audit ID:** DA-B1-0164
**Card ID:** b1-besorgen
**ID / path:** `b1-besorgen.study.comparison[1].example`
**DE (read-only):** besorgen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich kaufe Brot. = Es pērku maizi.
**PROPOSED_DA:** Ich kaufe Brot. = Jeg pērku maizi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 165

**Audit ID:** DA-B1-0165
**Card ID:** b1-besorgen
**ID / path:** `b1-besorgen.study.comparison[2].example`
**DE (read-only):** besorgen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich kümmere mich um das Kind. = Es rūpējos par bērnu.
**PROPOSED_DA:** Ich kümmere mich um das Kind. = Jeg rūpējos par bērnu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 168

**Audit ID:** DA-B1-0168
**Card ID:** b1-bestehen
**ID / path:** `b1-bestehen.study.comparison[0].example`
**DE (read-only):** bestehen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Problem besteht noch. = Problēma vēl pastāv.
**PROPOSED_DA:** Das Problem besteht noch. = Problemet eksisterer stadig.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 169

**Audit ID:** DA-B1-0169
**Card ID:** b1-bestehen
**ID / path:** `b1-bestehen.study.comparison[1].example`
**DE (read-only):** bestehen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Team besteht aus fünf Personen. = Komanda sastāv no piecām personām.
**PROPOSED_DA:** Das Team besteht aus fünf Personen. = Holdet består af fem personer.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 170

**Audit ID:** DA-B1-0170
**Card ID:** b1-bestehen
**ID / path:** `b1-bestehen.study.comparison[2].example`
**DE (read-only):** bestehen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er besteht auf seiner Meinung. = Viņš uzstāj uz savu viedokli.
**PROPOSED_DA:** Er besteht auf seiner Meinung. = Han insisterer på sin mening.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 177

**Audit ID:** DA-B1-0177
**Card ID:** b1-bestimmen
**ID / path:** `b1-bestimmen.study.comparison[1].example`
**DE (read-only):** bestimmen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir entscheiden morgen. = Mēs izlemsim rīt.
**PROPOSED_DA:** Wir entscheiden morgen. = Vi izlemsim i morgen.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 178

**Audit ID:** DA-B1-0178
**Card ID:** b1-bestimmen
**ID / path:** `b1-bestimmen.study.comparison[2].example`
**DE (read-only):** bestimmen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir legen den Termin fest. = Mēs oficiāli nosakām termiņu.
**PROPOSED_DA:** Wir legen den Termin fest. = Vi oficiāli nosakām termiņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 181

**Audit ID:** DA-B1-0181
**Card ID:** b1-betrieb
**ID / path:** `b1-betrieb.study.comparison[0].example`
**DE (read-only):** Betrieb
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Betrieb läuft gut. = Uzņēmums darbojas labi.
**PROPOSED_DA:** Der Betrieb läuft gut. = Uzņēmums darbojas labi.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 182

**Audit ID:** DA-B1-0182
**Card ID:** b1-betrieb
**ID / path:** `b1-betrieb.study.comparison[1].example`
**DE (read-only):** Betrieb
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Firma sucht neue Mitarbeiter. = Firma meklē jaunus darbiniekus.
**PROPOSED_DA:** Die Firma sucht neue Mitarbeiter. = Firma meklē jaunus darbiniekus.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 183

**Audit ID:** DA-B1-0183
**Card ID:** b1-betrieb
**ID / path:** `b1-betrieb.study.comparison[2].example`
**DE (read-only):** Betrieb
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Fabrik produziert Möbel. = Rūpnīca ražo mēbeles.
**PROPOSED_DA:** Die Fabrik produziert Möbel. = Rūpnīca ražo mēbeles.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 185

**Audit ID:** DA-B1-0185
**Card ID:** b1-bewegen
**ID / path:** `b1-bewegen.study.comparison[2].example`
**DE (read-only):** bewegen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir verschieben den Tisch. = Mēs pārbīdām galdu.
**PROPOSED_DA:** Wir verschieben den Tisch. = Vi pārbīdām galdu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 186

**Audit ID:** DA-B1-0186
**Card ID:** b1-beziehen
**ID / path:** `b1-beziehen.study.comparison[0].example`
**DE (read-only):** beziehen
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Sie bezieht eine Rente. = Viņa saņem pensiju.
**PROPOSED_DA:** Sie bezieht eine Rente. = Hun får en lille pension.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 187

**Audit ID:** DA-B1-0187
**Card ID:** b1-beziehen
**ID / path:** `b1-beziehen.study.comparison[1].example`
**DE (read-only):** beziehen
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Regel bezieht sich auf alle Schüler. = Noteikums attiecas uz visiem skolēniem.
**PROPOSED_DA:** Die Regel bezieht sich auf alle Schüler. = Reglen gælder for alle elever.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 188

**Audit ID:** DA-B1-0188
**Card ID:** b1-beziehen
**ID / path:** `b1-beziehen.study.comparison[2].example`
**DE (read-only):** beziehen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Wir ziehen morgen ein. = Mēs rīt ievācamies.
**PROPOSED_DA:** Wir ziehen morgen ein. = Vi i morgen ievācamies.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 192

**Audit ID:** DA-B1-0192
**Card ID:** b1-bildschirm
**ID / path:** `b1-bildschirm.study.comparison[0].example`
**DE (read-only):** Bildschirm
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Bildschirm leuchtet. = Ekrāns spīd.
**PROPOSED_DA:** Der Bildschirm leuchtet. = Ekrāns spīd.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 193

**Audit ID:** DA-B1-0193
**Card ID:** b1-bieten
**ID / path:** `b1-bieten.study.comparison[0].example`
**DE (read-only):** bieten
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Programm bietet viele Möglichkeiten. = Programma sniedz daudz iespēju.
**PROPOSED_DA:** Das Programm bietet viele Möglichkeiten. = Skolen tilbyder mange kurser.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 194

**Audit ID:** DA-B1-0194
**Card ID:** b1-bieten
**ID / path:** `b1-bieten.study.comparison[1].example`
**DE (read-only):** bieten
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich biete dir meine Hilfe an. = Es tev piedāvāju savu palīdzību.
**PROPOSED_DA:** Ich biete dir meine Hilfe an. = Jeg tev piedāvāju savu palīdzību.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 196

**Audit ID:** DA-B1-0196
**Card ID:** b1-blase
**ID / path:** `b1-blase.study.comparison[0].example`
**DE (read-only):** Blase
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich habe eine Blase am Fuß. = Man uz pēdas ir tulzna.
**PROPOSED_DA:** Ich habe eine Blase am Fuß. = Jeg har en vabel på foden.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 197

**Audit ID:** DA-B1-0197
**Card ID:** b1-blase
**ID / path:** `b1-blase.study.comparison[1].example`
**DE (read-only):** Blase
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Wunde heilt. = Brūce dzīst.
**PROPOSED_DA:** Die Wunde heilt. = Brūce dzīst.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 200

**Audit ID:** DA-B1-0200
**Card ID:** b1-block
**ID / path:** `b1-block.study.comparison[0].example`
**DE (read-only):** Block
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich brauche einen Block. = Man vajag blociņu.
**PROPOSED_DA:** Ich brauche einen Block. = Jeg har vajag blociņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 201

**Audit ID:** DA-B1-0201
**Card ID:** b1-block
**ID / path:** `b1-block.study.comparison[1].example`
**DE (read-only):** Block
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Heft ist voll. = Burtnīca ir pilna.
**PROPOSED_DA:** Das Heft ist voll. = Burtnīca er pilna.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 204

**Audit ID:** DA-B1-0204
**Card ID:** b1-bloß
**ID / path:** `b1-bloß.study.comparison[0].example`
**DE (read-only):** bloß
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das ist bloß ein Beispiel. = Tas ir tikai piemērs.
**PROPOSED_DA:** Das ist bloß ein Beispiel. = Tas er tikai piemērs.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 205

**Audit ID:** DA-B1-0205
**Card ID:** b1-bloß
**ID / path:** `b1-bloß.study.comparison[1].example`
**DE (read-only):** bloß
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich habe nur eine Frage. = Man ir tikai viens jautājums.
**PROPOSED_DA:** Ich habe nur eine Frage. = Jeg har er tikai viens jautājums.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 206

**Audit ID:** DA-B1-0206
**Card ID:** b1-bloß
**ID / path:** `b1-bloß.study.comparison[2].example`
**DE (read-only):** bloß
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er ist nackt. = Viņš ir kails.
**PROPOSED_DA:** Er ist nackt. = Viņš er kails.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 208

**Audit ID:** DA-B1-0208
**Card ID:** b1-bogen
**ID / path:** `b1-bogen.study.comparison[2].example`
**DE (read-only):** Bogen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Kurve ist scharf. = Līkums ir ass.
**PROPOSED_DA:** Die Kurve ist scharf. = Līkums er ass.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 209

**Audit ID:** DA-B1-0209
**Card ID:** b1-botschaft
**ID / path:** `b1-botschaft.study.comparison[0].example`
**DE (read-only):** Botschaft
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Botschaft ist offen. = Vēstniecība ir atvērta.
**PROPOSED_DA:** Die Botschaft ist offen. = Vēstniecība er atvērta.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 210

**Audit ID:** DA-B1-0210
**Card ID:** b1-botschaft
**ID / path:** `b1-botschaft.study.comparison[1].example`
**DE (read-only):** Botschaft
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich habe eine Nachricht bekommen. = Es saņēmu ziņu.
**PROPOSED_DA:** Ich habe eine Nachricht bekommen. = Jeg saņēmu ziņu.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 211

**Audit ID:** DA-B1-0211
**Card ID:** b1-botschaft
**ID / path:** `b1-botschaft.study.comparison[2].example`
**DE (read-only):** Botschaft
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Die Mitteilung ist kurz. = Paziņojums ir īss.
**PROPOSED_DA:** Die Mitteilung ist kurz. = Paziņojums er īss.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 212

**Audit ID:** DA-B1-0212
**Card ID:** b1-brand
**ID / path:** `b1-brand.study.comparison[0].example`
**DE (read-only):** Brand
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Brand ist gefährlich. = Ugunsgrēks ir bīstams.
**PROPOSED_DA:** Der Brand ist gefährlich. = Ugunsgrēks er bīstams.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 213

**Audit ID:** DA-B1-0213
**Card ID:** b1-brand
**ID / path:** `b1-brand.study.comparison[2].example`
**DE (read-only):** Brand
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Diese Marke ist bekannt. = Šis zīmols ir pazīstams.
**PROPOSED_DA:** Diese Marke ist bekannt. = Šis zīmols er pazīstams.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 215

**Audit ID:** DA-B1-0215
**Card ID:** b1-bund
**ID / path:** `b1-bund.study.comparison[0].example`
**DE (read-only):** Bund
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Bund entscheidet. = Federācija lemj.
**PROPOSED_DA:** Der Bund entscheidet. = Federācija lemj.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 216

**Audit ID:** DA-B1-0216
**Card ID:** b1-bund
**ID / path:** `b1-bund.study.comparison[1].example`
**DE (read-only):** Bund
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Das Bündel ist schwer. = Saišķis ir smags.
**PROPOSED_DA:** Das Bündel ist schwer. = Saišķis er smags.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 217

**Audit ID:** DA-B1-0217
**Card ID:** b1-bund
**ID / path:** `b1-bund.study.comparison[2].example`
**DE (read-only):** Bund
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Der Verein ist klein. = Biedrība ir maza.
**PROPOSED_DA:** Der Verein ist klein. = Biedrība er maza.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 221

**Audit ID:** DA-B1-0221
**Card ID:** b1-dadurch
**ID / path:** `b1-dadurch.study.comparison[0].example`
**DE (read-only):** dadurch
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Dadurch wird es leichter. = Tādējādi tas kļūst vieglāk.
**PROPOSED_DA:** Dadurch wird es leichter. = Tādējādi det kļūst vieglāk.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 222

**Audit ID:** DA-B1-0222
**Card ID:** b1-dadurch
**ID / path:** `b1-dadurch.study.comparison[1].example`
**DE (read-only):** dadurch
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Deshalb bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED_DA:** Deshalb bleibe ich zu Hause. = Tāpēc es palieku hjem.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 223

**Audit ID:** DA-B1-0223
**Card ID:** b1-dadurch
**ID / path:** `b1-dadurch.study.comparison[2].example`
**DE (read-only):** dadurch
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Ich spare Geld, damit ich reisen kann. = Es krāju naudu, lai varētu ceļot.
**PROPOSED_DA:** Ich spare Geld, damit ich reisen kann. = Jeg krāju naudu, lai varētu ceļot.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 224

**Audit ID:** DA-B1-0224
**Card ID:** b1-dagegen
**ID / path:** `b1-dagegen.study.comparison[2].example`
**DE (read-only):** dagegen
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er bleibt, sie hingegen geht. = Viņš paliek, viņa turpretim iet.
**PROPOSED_DA:** Er bleibt, sie hingegen geht. = Viņš paliek, viņa turpretim iet.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 225

**Audit ID:** DA-B1-0225
**Card ID:** b1-daher
**ID / path:** `b1-daher.study.comparison[0].example`
**DE (read-only):** daher
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Es bin müde, daher gehe ich. = Esmu noguris, tāpēc eju.
**PROPOSED_DA:** Es bin müde, daher gehe ich. = Esmu noguris, tāpēc eju.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 226

**Audit ID:** DA-B1-0226
**Card ID:** b1-daher
**ID / path:** `b1-daher.study.comparison[1].example`
**DE (read-only):** daher
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Deshalb warten wir. = Tāpēc mēs gaidām.
**PROPOSED_DA:** Deshalb warten wir. = Tāpēc mēs gaidām.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC, LV_WORD
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 227

**Audit ID:** DA-B1-0227
**Card ID:** b1-daher
**ID / path:** `b1-daher.study.comparison[2].example`
**DE (read-only):** daher
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Er kommt von dort. = Viņš nāk no turienes.
**PROPOSED_DA:** Er kommt von dort. = Viņš nāk no turienes.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 228

**Audit ID:** DA-B1-0228
**Card ID:** b1-dahin
**ID / path:** `b1-dahin.study.comparison[2].example`
**DE (read-only):** dahin
**Severity:** HIGH
**Field:** `study.comparison[2].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Daher kommt das Problem. = No turienes nāk problēma.
**PROPOSED_DA:** Daher kommt das Problem. = No turienes nāk problēma.
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 231

**Audit ID:** DA-B1-0231
**Card ID:** b1-dank-study
**ID / path:** `b1-dank-study.study.comparison[0].example`
**DE (read-only):** Dank
**Severity:** HIGH
**Field:** `study.comparison[0].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Herzlichen Dank! = Sirsnīgs paldies!
**PROPOSED_DA:** Herzlichen Dank! = Mange tak!
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 232

**Audit ID:** DA-B1-0232
**Card ID:** b1-dank-study
**ID / path:** `b1-dank-study.study.comparison[1].example`
**DE (read-only):** Dank
**Severity:** HIGH
**Field:** `study.comparison[1].example`
**Production file:** `data/da/b1.js`
**LV reference:** (skat. LV etalonu `data/b1.js`)
**CURRENT_DA:** Nein, danke. = Nē, paldies.
**PROPOSED_DA:** Nein, danke. = Nej tak
**Problēma:** Comparison piemērā latviešu daļa: LV_DIAC
**Audita pamatojums:** Comparison example jābūt DE = DA formātā; latviešu daļa jāaizstāj ar dāņu
**Avots:** GPT-5.6 Luna audit (`reports/da-b1-full-audit.md`)

**OWNER_DECISION:**

---
