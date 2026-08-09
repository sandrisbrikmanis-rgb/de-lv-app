# BS–DE B1 — 19 UNRESOLVED OWNER REVIEW

**Mode:** READ-ONLY OWNER REVIEW PREPARATION  
**Audited main SHA:** `6099c38cb7b8868e3877de9dc02132e677bf938b`  
**Generated:** 2026-08-09  
**Production files modified:** 0

## Audit baseline

| Artifact | Path |
| -------- | ---- |
| Global reconciliation report | `reports/global-main-integration-reconciliation-audit.md` |
| Machine-readable audit | `reports/temp/global-main-integration-reconciliation-audit.json` |
| Reconciliation helper | `reports/temp/audit-global-main-integration-reconciliation.js` |
| Owner manual review scope | `reports/bs-b1-owner-manual-review.md` |
| PR #307 parent commit | `7fcea651` (owner manual review report added) |
| PR #307 apply commit | `3dd07d33` (17 targeted changes) |

PR **#307** body documents: **15** study `examples[].lv` fixes + **2** study `comparison[].meaning` fixes. Three NEEDS_REVIEW items were intentionally left unchanged: `b1-antrag`, `b1-lösen`, `b1-einfallen` (false positive). `b1-vertrauen-study` was also not changed.

No commits modified `data/bs/b1.js` between `3dd07d33` and audited main (`6099c38c`).

---

## GROUP A — PR #307 manual repairs (integration / reconciliation evidence)

**Category:** integration/reconciliation evidence problem — per-item expected-value JSON was missing in `reports/temp/`; values reconstructed from `git diff 7fcea651..3dd07d33`.

| # | ID | Field | Before | OWNER-approved expected | Current main | Evidence | Status |
| --: | --- | ----- | ------ | ----------------------- | ------------ | -------- | ------ |
| 1 | `b1-aufwand` | `study.examples[1].lv` | Nije vredno truda. | Nije vrijedno truda. | Nije vrijedno truda. | `git diff 7fcea651..3dd07d33`; DE: *Das lohnt den Aufwand nicht.*; ekavski→ijekavski | CONFIRMED_MATCH |
| 2 | `b1-aussicht` | `study.examples[0].lv` | Šanse za uspeh su dobre. | Šanse za uspjeh su dobre. | Šanse za uspjeh su dobre. | `git diff 7fcea651..3dd07d33`; DE: *Die Aussicht auf Erfolg ist gut.* | CONFIRMED_MATCH |
| 3 | `b1-becken` | `study.examples[1].lv` | Stavite povrće u činiju. | Stavi povrće u zdjelu. | Stavi povrće u zdjelu. | `git diff 7fcea651..3dd07d33`; DE: *Leg das Gemüse in das Becken.*; basin semantics | CONFIRMED_MATCH |
| 4 | `b1-bedeutend` | `study.examples[1].lv` | Ona je istaknuti doktor. | Ona je istaknuta doktorica. | Ona je istaknuta doktorica. | `git diff 7fcea651..3dd07d33`; DE: *Sie ist eine bedeutende Ärztin.* | CONFIRMED_MATCH |
| 5 | `b1-sich-bedienen` | `study.examples[1].lv` | Koristi moderne tehnike. | Koristi modernu tehniku. | Koristi modernu tehniku. | `git diff 7fcea651..3dd07d33`; DE: *Er bedient sich moderner Technik.* | CONFIRMED_MATCH |
| 6 | `b1-sich-bemühen` | `study.examples[0].lv` | Trudim se da stignem na vreme. | Trudim se da stignem na vrijeme. | Trudim se da stignem na vrijeme. | `git diff 7fcea651..3dd07d33`; DE: *Ich bemühe mich, pünktlich zu sein.* | CONFIRMED_MATCH |
| 7 | `b1-beschwerde` | `study.comparison[1].meaning` | Žalba / pritužba | Tužba | Tužba | `git diff 7fcea651..3dd07d33`; DE comparison word: *die Klage* | CONFIRMED_MATCH |
| 8 | `b1-dank-study` | `study.examples[1].lv` | Hvala vam puno! | Srdačno hvala! | Srdačno hvala! | `git diff 7fcea651..3dd07d33`; DE: *Herzlichen Dank!*; LV: *sirsnīgs paldies!* | CONFIRMED_MATCH |
| 9 | `b1-dank-study` | `study.comparison[4].meaning` | Zahvala | Zahvaliti se | Zahvaliti se | `git diff 7fcea651..3dd07d33`; DE comparison word: *bedanken (sich)* | CONFIRMED_MATCH |
| 10 | `b1-einsatz` | `study.examples[2].lv` | Ulozi su previsoki u ovoj igri. | Ulog je previsok u ovoj igri. | Ulog je previsok u ovoj igri. | `git diff 7fcea651..3dd07d33`; DE: *Bei diesem Spiel ist der Einsatz zu hoch.* | CONFIRMED_MATCH |
| 11 | `b1-empfangen` | `study.examples[1].lv` | Ministar prima goste u gradskoj vijećnici. | Ministrica prima goste u gradskoj vijećnici. | Ministrica prima goste u gradskoj vijećnici. | `git diff 7fcea651..3dd07d33`; DE: *Die Ministerin empfängt die Gäste im Rathaus.* | CONFIRMED_MATCH |
| 12 | `b1-festhalten` | `study.examples[1].lv` | Ona čvrsto drži dete. | Ona čvrsto drži dijete. | Ona čvrsto drži dijete. | `git diff 7fcea651..3dd07d33`; DE: *Sie hält das Kind fest.* | CONFIRMED_MATCH |
| 13 | `b1-kommando` | `study.examples[2].lv` | Kontrolna jedinica preuzima kontrolu. | Zapovjedna jedinica preuzima vodstvo. | Zapovjedna jedinica preuzima vodstvo. | `git diff 7fcea651..3dd07d33`; DE: *Das Kommando übernimmt die Leitung.* | CONFIRMED_MATCH |
| 14 | `b1-kurs` | `study.examples[0].lv` | Pohađala sam kurs nemačkog jezika. | Pohađam kurs njemačkog jezika. | Pohađam kurs njemačkog jezika. | `git diff 7fcea651..3dd07d33`; DE: *Ich besuche einen Deutschkurs.* | CONFIRMED_MATCH |
| 15 | `b1-lager` | `study.examples[0].lv` | Roba je na lageru. | Roba je u skladištu. | Roba je u skladištu. | `git diff 7fcea651..3dd07d33`; DE: *Die Waren liegen im Lager.* | CONFIRMED_MATCH |
| 16 | `b1-trennen` | `study.examples[2].lv` | Razveli su se nakon deset godina. | Rastali su se nakon deset godina. | Rastali su se nakon deset godina. | `git diff 7fcea651..3dd07d33`; DE: *Sie haben sich nach zehn Jahren getrennt.* | CONFIRMED_MATCH |
| 17 | `b1-vertrauen` | `study.examples[0].lv` | Imam puno vjere u tebe. | Imam veliko povjerenje u tebe. | Imam veliko povjerenje u tebe. | `git diff 7fcea651..3dd07d33`; DE: *Ich habe großes Vertrauen zu dir.* | CONFIRMED_MATCH |

**Source of expected values:** PR #307 commit `3dd07d33` production diff (`7fcea651` → `3dd07d33`), cross-checked against `reports/bs-b1-owner-manual-review.md` scope and PR #307 description. Expected values were **not** inferred from current main alone.

**Note:** Rows 7 and 9 are PR #307 comparison fixes that overlap with GROUP B SOURCE_LV_ISSUE cards; integration evidence is listed here; linguistic OWNER decision is in GROUP B below.

---

## GROUP B — SOURCE_LV_ISSUE (linguistic OWNER decision)

**Category:** SOURCE_LV_ISSUE / linguistic OWNER decision — separate from integration evidence closure.

### `b1-beschwerde`

**ID:** `b1-beschwerde`

**GERMAN LEMMA:** die Beschwerde (flashcard); comparison row: **die Klage**

**CURRENT BS:** `Tužba` (field: `study.comparison[1].meaning`)

**DOCUMENTED ALTERNATIVE:** `Žalba / pritužba` (pre-PR #307 value; global audit documented expected)

**CARD CONTEXT:**

- Flashcard front: **Beschwerde** → `Žalbu` (complaint to authority / customer service).
- Study main translation: `Žalba`.
- Comparison [0]: *die Beschwerde* → `Žalba` (complaint).
- Comparison [1]: *die Klage* → `Tužba` (legal court case); example DE: *Die Klage läuft noch.* → BS: *Sudski postupak je još u toku.*
- DE etalon for Klage (LV): *prasība tiesā* (lawsuit), not generic complaint.

**LINGUISTIC ANALYSIS:**

- **Beschwerde** in this deck = everyday/service complaint (`žalba`, `reklamacija`); medical plural *Beschwerden* = symptoms — correctly taught on the card.
- **Klage** in the comparison row is a **legal lawsuit**, not a customer complaint. Bosnian **tužba** is the standard term for a court action; **žalba / pritužba** denote complaint/grievance and match **Beschwerde**, not **Klage**.
- Pre-PR value `Žalba / pritužba` on the *Klage* row conflated complaint with lawsuit and contradicted the example (*sudski postupak*).
- **Tužba** is juridically precise for *Klage* in this row; it does not replace the main flashcard meaning (complaint), which remains **Žalba**.

**RECOMMENDED OWNER DECISION:** KEEP

**RECOMMENDED EXACT BS VALUE:** `Tužba`

**REASON:** For comparison word *die Klage*, *tužba* matches DE legal semantics and the study example; *žalba* remains correct for *die Beschwerde* on the same card (Learning First: one primary meaning per comparison row).

---

### `b1-dank-study`

**ID:** `b1-dank-study`

**GERMAN LEMMA:** der Dank (flashcard noun); comparison row: **bedanken (sich)**

**CURRENT BS:** `Zahvaliti se` (field: `study.comparison[4].meaning`)

**DOCUMENTED ALTERNATIVE:** `Zahvala` (pre-PR #307 value; global audit documented expected)

**CARD CONTEXT:**

- Flashcard front: **Dank** → `Zahvalnost` (noun: gratitude as concept).
- Study teaches noun *Dank* vs colloquial *danke* vs verb *danken* vs reflexive *sich bedanken*.
- Comparison [0]: *der Dank* → `Zahvalnost (imenica)`.
- Comparison [4]: *bedanken (sich)* → `Zahvaliti se`; example: *Ich bedanke mich bei Ihnen.* = *Hvala ti.*
- DE etalon (LV): *pateikties formāli* (verb: to thank formally).

**LINGUISTIC ANALYSIS:**

- *bedanken (sich)* is a **reflexive verb** (formal thanks). Comparison `meaning` should be a verb phrase, not a noun.
- `Zahvala` is a noun (thanks/gratitude) and matches *der Dank*, not *sich bedanken*.
- `Zahvaliti se` correctly encodes word class and aligns with comparison rows for *danken* → `Zahvaliti` and LV *pateikties*.
- Example BS *Hvala ti.* is conversational shorthand in the paired sentence; the `meaning` field should still label the German lemma’s grammar.

**RECOMMENDED OWNER DECISION:** KEEP

**RECOMMENDED EXACT BS VALUE:** `Zahvaliti se`

**REASON:** Noun *Zahvala* on a verb comparison row breaks DE→BS word-class alignment taught on this study card; *Zahvaliti se* is the natural BS equivalent of *sich bedanken*.

---

## BS–DE B1 19 UNRESOLVED OWNER REVIEW

### GROUP A — PR #307

Items checked: **17/17**

| Status | Count |
| ------ | ----: |
| CONFIRMED_MATCH | 17 |
| CONFIRMED_MISSING | 0 |
| CONFIRMED_SUPERSEDED | 0 |
| STILL_UNRESOLVED | 0 |

### GROUP B — SOURCE_LV_ISSUE

Items checked: **2/2**

| Card | Decision | Recommended value |
| ---- | -------- | ----------------- |
| `b1-beschwerde` | KEEP | `Tužba` |
| `b1-dank-study` | KEEP | `Zahvaliti se` |

### RECONCILIATION IMPACT

| Metric | Value |
| ------ | ----: |
| Remaining integration MISSING | 0 |
| Remaining evidence UNRESOLVED (Group A, after OWNER confirms table) | 0 |
| Items requiring OWNER linguistic decision (Group B) | 2 |
| Production files modified | 0 |

**Closure note:** Global audit `reports/global-main-integration-reconciliation-audit.md` was **not** updated in this task. After OWNER accepts Group A reconstruction (17/17 CONFIRMED_MATCH) and Group B recommendations (both KEEP), a separate closure/reconciliation update may mark B1 integration evidence resolved.

---

## Artifacts

| File | Purpose |
| ---- | ------- |
| `reports/bs-b1-19-unresolved-owner-review.md` | This report |
| `reports/temp/bs-b1-19-unresolved-owner-review.json` | Machine-readable repair verification |
| `reports/temp/audit-bs-b1-19-unresolved-owner-review.js` | READ-ONLY verification helper |
