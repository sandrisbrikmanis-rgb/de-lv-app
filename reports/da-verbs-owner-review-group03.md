# DA–DE Verbs — OWNER review Group 03

Avots: `reports/da-verbs-full-audit.md` / `reports/temp/da-verbs-merged-audit.json`
Findings: **101–150** (50 ieraksti)
Fails: `reports/da-verbs-owner-review-group03.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 101

**Audit ID:** DA-VERB-0101
**Verb/Card ID:** `verb-33`
**ID / path:** `verb-33.infinitiv.lv`
**DE (read-only):** brechen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lauzt
**PROPOSED_DA:** At bryde
**Problēma:** Latvian infinitive remnant (lauzt); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (lauzt); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 102

**Audit ID:** DA-VERB-0102
**Verb/Card ID:** `verb-33`
**ID / path:** `verb-33.partizipVergangenheit.lv`
**DE (read-only):** gebrochen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lauzts / salauzts
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 103

**Audit ID:** DA-VERB-0103
**Verb/Card ID:** `verb-33`
**ID / path:** `verb-33.partizipVergangenheit.lv`
**DE (read-only):** gebrochen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lauzts / salauzts
**PROPOSED_DA:** Brudt
**Problēma:** Latvian participle forms with multi-variant chain; not Danish.
**Audita pamatojums:** Latvian participle forms with multi-variant chain; not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 104

**Audit ID:** DA-VERB-0104
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.imperfektIndikativ.lv`
**DE (read-only):** brannte
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dega
**PROPOSED_DA:** Han brændte
**Problēma:** Latvian past form (dega); not Danish.
**Audita pamatojums:** Latvian past form (dega); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 105

**Audit ID:** DA-VERB-0105
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.imperfektKonjunktiv.lv`
**DE (read-only):** brannte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dega
**PROPOSED_DA:** Han ville brænde
**Problēma:** Latvian form (dega) duplicated for subjunctive slot; not Danish.
**Audita pamatojums:** Latvian form (dega) duplicated for subjunctive slot; not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 106

**Audit ID:** DA-VERB-0106
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.infinitiv.lv`
**DE (read-only):** brennen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Degt
**PROPOSED_DA:** At brænde
**Problēma:** Latvian infinitive remnant (degt); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (degt); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 107

**Audit ID:** DA-VERB-0107
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.partizipVergangenheit.lv`
**DE (read-only):** gebrannt
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Dedzis
**PROPOSED_DA:** Brændt
**Problēma:** Latvian participle remnant (dedzis); not Danish.
**Audita pamatojums:** Latvian participle remnant (dedzis); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 108

**Audit ID:** DA-VERB-0108
**Verb/Card ID:** `verb-34`
**ID / path:** `verb-34.praesens.lv`
**DE (read-only):** er brennt
**Severity:** MEDIUM
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han er i brand
**PROPOSED_DA:** Han brænder
**Problēma:** Unnatural periphrasis; brennen present is simply 'brænder'.
**Audita pamatojums:** Unnatural periphrasis; brennen present is simply 'brænder'.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 109

**Audit ID:** DA-VERB-0109
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.imperfektIndikativ.lv`
**DE (read-only):** er brachte
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bar
**PROPOSED_DA:** Han bragte
**Problēma:** bar (carried/bore) ≠ brachte (brought).
**Audita pamatojums:** bar (carried/bore) ≠ brachte (brought).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 110

**Audit ID:** DA-VERB-0110
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.infinitiv.lv`
**DE (read-only):** bringen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Rede
**PROPOSED_DA:** At bringe
**Problēma:** Noun/imperative 'Rede' given where infinitive is required.
**Audita pamatojums:** Noun/imperative 'Rede' given where infinitive is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 111

**Audit ID:** DA-VERB-0111
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.partizipVergangenheit.lv`
**DE (read-only):** gebracht
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Reder / atnest
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 112

**Audit ID:** DA-VERB-0112
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.partizipVergangenheit.lv`
**DE (read-only):** gebracht
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Reder / atnest
**PROPOSED_DA:** Bragt
**Problēma:** Garbled/non-Danish forms; does not translate gebracht.
**Audita pamatojums:** Garbled/non-Danish forms; does not translate gebracht.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 113

**Audit ID:** DA-VERB-0113
**Verb/Card ID:** `verb-35`
**ID / path:** `verb-35.praesens.lv`
**DE (read-only):** er bringt
**Severity:** HIGH
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han bærer
**PROPOSED_DA:** Han bringer
**Problēma:** bærer (carries) ≠ bringt (brings).
**Audita pamatojums:** bærer (carries) ≠ bringt (brings).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 114

**Audit ID:** DA-VERB-0114
**Verb/Card ID:** `verb-36`
**ID / path:** `verb-36.imperfektKonjunktiv.lv`
**DE (read-only):** er dächte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ville han mene
**PROPOSED_DA:** Han ville tænke
**Problēma:** mene (mean/opine) ≠ denken (think).
**Audita pamatojums:** mene (mean/opine) ≠ denken (think).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 115

**Audit ID:** DA-VERB-0115
**Verb/Card ID:** `verb-36`
**ID / path:** `verb-36.partizipVergangenheit.lv`
**DE (read-only):** gedacht
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Tilsigtet
**PROPOSED_DA:** Tænkt
**Problēma:** tilsigtet (intended) does not translate gedacht (thought).
**Audita pamatojums:** tilsigtet (intended) does not translate gedacht (thought).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 116

**Audit ID:** DA-VERB-0116
**Verb/Card ID:** `verb-37`
**ID / path:** `verb-37.imperfektIndikativ.lv`
**DE (read-only):** dingte
**Severity:** HIGH
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ansat
**PROPOSED_DA:** Han ansatte
**Problēma:** Past participle given where preterite is required.
**Audita pamatojums:** Past participle given where preterite is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 117

**Audit ID:** DA-VERB-0117
**Verb/Card ID:** `verb-37`
**ID / path:** `verb-37.imperfektKonjunktiv.lv`
**DE (read-only):** dingte
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ansat
**PROPOSED_DA:** Han ville ansætte
**Problēma:** Past participle given where Konjunktiv II is required.
**Audita pamatojums:** Past participle given where Konjunktiv II is required.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 118

**Audit ID:** DA-VERB-0118
**Verb/Card ID:** `verb-37`
**ID / path:** `verb-37.infinitiv.lv`
**DE (read-only):** dingen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At ansætte / at blive enige
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 119

**Audit ID:** DA-VERB-0119
**Verb/Card ID:** `verb-38`
**ID / path:** `verb-38.imperfektKonjunktiv.lv`
**DE (read-only):** er dräsche / er drösche
**Severity:** HIGH
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville tilbede
**PROPOSED_DA:** Han ville tærske
**Problēma:** tilbede (worship) is wrong verb; does not translate dreschen.
**Audita pamatojums:** tilbede (worship) is wrong verb; does not translate dreschen.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 120

**Audit ID:** DA-VERB-0120
**Verb/Card ID:** `verb-38`
**ID / path:** `verb-38.infinitiv.lv`
**DE (read-only):** dreschen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kult
**PROPOSED_DA:** At tærske
**Problēma:** Latvian infinitive remnant (kult); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (kult); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 121

**Audit ID:** DA-VERB-0121
**Verb/Card ID:** `verb-38`
**ID / path:** `verb-38.partizipVergangenheit.lv`
**DE (read-only):** gedroschen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kulter
**PROPOSED_DA:** Tærsket
**Problēma:** Latvian participle remnant (kulter); not Danish.
**Audita pamatojums:** Latvian participle remnant (kulter); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 122

**Audit ID:** DA-VERB-0122
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.infinitiv.lv`
**DE (read-only):** dringen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ielauzties
**PROPOSED_DA:** At trænge ind
**Problēma:** Latvian infinitive remnant (ielauzties); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (ielauzties); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 123

**Audit ID:** DA-VERB-0123
**Verb/Card ID:** `verb-39`
**ID / path:** `verb-39.partizipVergangenheit.lv`
**DE (read-only):** gedrungen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ielauzies
**PROPOSED_DA:** Trængt ind
**Problēma:** Latvian participle remnant (ielauzies); not Danish.
**Audita pamatojums:** Latvian participle remnant (ielauzies); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 124

**Audit ID:** DA-VERB-0124
**Verb/Card ID:** `verb-40`
**ID / path:** `verb-40.imperfektIndikativ.lv`
**DE (read-only):** deuchte
**Severity:** MEDIUM
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det virkede
**PROPOSED_DA:** Det lod til
**Problēma:** dünken means to seem/appear; virkede (worked) is wrong meaning.
**Audita pamatojums:** dünken means to seem/appear; virkede (worked) is wrong meaning.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 125

**Audit ID:** DA-VERB-0125
**Verb/Card ID:** `verb-40`
**ID / path:** `verb-40.imperfektKonjunktiv.lv`
**DE (read-only):** deuchte
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Det virkede
**PROPOSED_DA:** Det ville synes
**Problēma:** Duplicate wrong translation; dünken subjunctive ≠ virkede.
**Audita pamatojums:** Duplicate wrong translation; dünken subjunctive ≠ virkede.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 126

**Audit ID:** DA-VERB-0126
**Verb/Card ID:** `verb-41`
**ID / path:** `verb-41.praesens.lv`
**DE (read-only):** er darf
**Severity:** MEDIUM
**Field:** `praesens.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han kan
**PROPOSED_DA:** Han må
**Problēma:** dürfen expresses permission (may); kan expresses ability (can).
**Audita pamatojums:** dürfen expresses permission (may); kan expresses ability (can).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 127

**Audit ID:** DA-VERB-0127
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.infinitiv.lv`
**DE (read-only):** empfehlen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ieteikt
**PROPOSED_DA:** At anbefale
**Problēma:** Latvian infinitive remnant (ieteikt); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (ieteikt); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 128

**Audit ID:** DA-VERB-0128
**Verb/Card ID:** `verb-42`
**ID / path:** `verb-42.partizipVergangenheit.lv`
**DE (read-only):** empfohlen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Ieteikts
**PROPOSED_DA:** Anbefalet
**Problēma:** Latvian participle remnant (ieteikts); not Danish.
**Audita pamatojums:** Latvian participle remnant (ieteikts); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 129

**Audit ID:** DA-VERB-0129
**Verb/Card ID:** `verb-43`
**ID / path:** `verb-43.infinitiv.lv`
**DE (read-only):** empfinden
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sajust
**PROPOSED_DA:** At føle
**Problēma:** Latvian infinitive remnant (sajust); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (sajust); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 130

**Audit ID:** DA-VERB-0130
**Verb/Card ID:** `verb-43`
**ID / path:** `verb-43.partizipVergangenheit.lv`
**DE (read-only):** empfunden
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sajusts
**PROPOSED_DA:** Følt
**Problēma:** Latvian participle remnant (sajusts); not Danish.
**Audita pamatojums:** Latvian participle remnant (sajusts); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 131

**Audit ID:** DA-VERB-0131
**Verb/Card ID:** `verb-44`
**ID / path:** `verb-44.imperfektKonjunktiv.lv`
**DE (read-only):** er erlösche
**Severity:** MEDIUM
**Field:** `imperfektKonjunktiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Han ville forsvinde
**PROPOSED_DA:** Det ville slukke
**Problēma:** forsvinde (disappear) ≠ erlöschen (go out, e.g. fire/light).
**Audita pamatojums:** forsvinde (disappear) ≠ erlöschen (go out, e.g. fire/light).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 132

**Audit ID:** DA-VERB-0132
**Verb/Card ID:** `verb-44`
**ID / path:** `verb-44.infinitiv.lv`
**DE (read-only):** erlöschen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdzist
**PROPOSED_DA:** At slukke
**Problēma:** Latvian infinitive remnant (izdzist); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (izdzist); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 133

**Audit ID:** DA-VERB-0133
**Verb/Card ID:** `verb-44`
**ID / path:** `verb-44.partizipVergangenheit.lv`
**DE (read-only):** erloschen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Izdzisis
**PROPOSED_DA:** Slukket
**Problēma:** Latvian participle remnant (izdzisis); not Danish.
**Audita pamatojums:** Latvian participle remnant (izdzisis); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 134

**Audit ID:** DA-VERB-0134
**Verb/Card ID:** `verb-45`
**ID / path:** `verb-45.infinitiv.lv`
**DE (read-only):** erschrecken
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Blive forvirret
**PROPOSED_DA:** At blive bange
**Problēma:** erschrecken means to startle/frighten; forvirret (confused) is wrong meaning.
**Audita pamatojums:** erschrecken means to startle/frighten; forvirret (confused) is wrong meaning.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 135

**Audit ID:** DA-VERB-0135
**Verb/Card ID:** `verb-45`
**ID / path:** `verb-45.partizipVergangenheit.lv`
**DE (read-only):** erschrocken (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Sabijies
**PROPOSED_DA:** Forskrækket
**Problēma:** Latvian participle remnant (sabijies); not Danish.
**Audita pamatojums:** Latvian participle remnant (sabijies); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 136

**Audit ID:** DA-VERB-0136
**Verb/Card ID:** `verb-46`
**ID / path:** `verb-46.partizipVergangenheit.lv`
**DE (read-only):** gegessen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spist / spist
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 137

**Audit ID:** DA-VERB-0137
**Verb/Card ID:** `verb-46`
**ID / path:** `verb-46.partizipVergangenheit.lv`
**DE (read-only):** gegessen
**Severity:** LOW
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Spist / spist
**PROPOSED_DA:** Spist
**Problēma:** Duplicate variant differing only in capitalization.
**Audita pamatojums:** Duplicate variant differing only in capitalization.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 138

**Audit ID:** DA-VERB-0138
**Verb/Card ID:** `verb-47`
**ID / path:** `verb-47.infinitiv.lv`
**DE (read-only):** fahren
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Brakt
**PROPOSED_DA:** At køre
**Problēma:** Latvian infinitive remnant (braukt); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (braukt); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 139

**Audit ID:** DA-VERB-0139
**Verb/Card ID:** `verb-47`
**ID / path:** `verb-47.partizipVergangenheit.lv`
**DE (read-only):** gefahren (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Braucis / aizbraucis
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 140

**Audit ID:** DA-VERB-0140
**Verb/Card ID:** `verb-47`
**ID / path:** `verb-47.partizipVergangenheit.lv`
**DE (read-only):** gefahren (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Braucis / aizbraucis
**PROPOSED_DA:** Kørt
**Problēma:** Latvian participle forms with multi-variant chain; not Danish.
**Audita pamatojums:** Latvian participle forms with multi-variant chain; not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 141

**Audit ID:** DA-VERB-0141
**Verb/Card ID:** `verb-48`
**ID / path:** `verb-48.infinitiv.lv`
**DE (read-only):** fallen
**Severity:** HIGH
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Krist
**PROPOSED_DA:** At falde
**Problēma:** Latvian infinitive remnant (krist); not Danish.
**Audita pamatojums:** Latvian infinitive remnant (krist); not Danish.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 142

**Audit ID:** DA-VERB-0142
**Verb/Card ID:** `verb-48`
**ID / path:** `verb-48.partizipVergangenheit.lv`
**DE (read-only):** gefallen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Kritisk
**PROPOSED_DA:** Faldet
**Problēma:** Kritisk means critical (adjective); completely wrong for gefallen (fallen).
**Audita pamatojums:** Kritisk means critical (adjective); completely wrong for gefallen (fallen).
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 143

**Audit ID:** DA-VERB-0143
**Verb/Card ID:** `verb-49`
**ID / path:** `verb-49.infinitiv.lv`
**DE (read-only):** fangen
**Severity:** MEDIUM
**Field:** `infinitiv.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** At fange
**PROPOSED_DA:** (Distinct Danish for this verb)
**Problēma:** Duplicate infinitiv DA shared with verb-24 (DE: greifen)
**Audita pamatojums:** Different German verbs should not share identical DA infinitiv
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 144

**Audit ID:** DA-VERB-0144
**Verb/Card ID:** `verb-49`
**ID / path:** `verb-49.partizipVergangenheit.lv`
**DE (read-only):** gefangen
**Severity:** HIGH
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fanget / fanget
**PROPOSED_DA:** (Single natural Danish form)
**Problēma:** Multi-variant translation chain (• or /)
**Audita pamatojums:** Verb card is not a dictionary; keep one teaching form
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 145

**Audit ID:** DA-VERB-0145
**Verb/Card ID:** `verb-49`
**ID / path:** `verb-49.partizipVergangenheit.lv`
**DE (read-only):** gefangen
**Severity:** LOW
**Field:** `partizipVergangenheit.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Fanget / fanget
**PROPOSED_DA:** Fanget
**Problēma:** Duplicate variant differing only in capitalization.
**Audita pamatojums:** Duplicate variant differing only in capitalization.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 146

**Audit ID:** DA-VERB-0146
**Verb/Card ID:** `verb-50`
**ID / path:** `verb-50.infinitiv`
**DE (read-only):** finden
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Atrast
**PROPOSED_DA:** At finde
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Atrast is Latvian, not Danish; finden = at finde.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 147

**Audit ID:** DA-VERB-0147
**Verb/Card ID:** `verb-50`
**ID / path:** `verb-50.partizipVergangenheit`
**DE (read-only):** gefunden
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Atraster
**PROPOSED_DA:** Fundet
**Problēma:** Latvian-style participle remnant
**Audita pamatojums:** Atraster is not natural Danish; Partizip II of finden is fundet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 148

**Audit ID:** DA-VERB-0148
**Verb/Card ID:** `verb-51`
**ID / path:** `verb-51.infinitiv`
**DE (read-only):** fliegen
**Severity:** CRITICAL
**Field:** `infinitiv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Laisties
**PROPOSED_DA:** At flyve
**Problēma:** Latvian remnant in infinitiv field
**Audita pamatojums:** Laisties is Latvian reflexive, not Danish; fliegen = at flyve.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 149

**Audit ID:** DA-VERB-0149
**Verb/Card ID:** `verb-51`
**ID / path:** `verb-51.partizipVergangenheit`
**DE (read-only):** geflogen (er ist)
**Severity:** CRITICAL
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Lidojis
**PROPOSED_DA:** Fløjet
**Problēma:** Latvian remnant in participle field
**Audita pamatojums:** Lidojis is Latvian; geflogen (sein) = er er fløjet.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---

## Finding 150

**Audit ID:** DA-VERB-0150
**Verb/Card ID:** `verb-52`
**ID / path:** `verb-52.partizipVergangenheit`
**DE (read-only):** geflohen (er ist)
**Severity:** HIGH
**Field:** `partizipVergangenheit`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Løb væk
**PROPOSED_DA:** Flygtet
**Problēma:** Phrase/simple past used instead of past participle
**Audita pamatojums:** geflohen (sein) requires Danish participle flygtet, not the phrase løb væk.
**Avots:** GPT-5.6 Luna audit (`reports/da-verbs-full-audit.md`)

**OWNER_DECISION:**

---
