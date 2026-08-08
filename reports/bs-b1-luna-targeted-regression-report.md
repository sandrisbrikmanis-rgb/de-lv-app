# BS–DE B1 Luna Targeted Regression Audit Report

**Date:** 2026-08-08
**Model:** gpt-5.6-luna
**Scope:** 328/328 targeted cards
**Mode:** AUDIT ONLY — data files unchanged

---

## Status

| Status | Result |
|---|---|
| TARGETED AI AUDITED | **328/328** |
| CRITICAL | **1** |
| HIGH | **37** |
| MEDIUM | **81** |
| WARNING | **13** |
| SOURCE/LV ISSUES | **6** |
| PREVIOUS CRITICAL REGRESSION | **FAIL** |
| PREVIOUS HIGH REGRESSION | **SEE SKIPPED HIGH** |
| CACHE CONTEXT (semantic) | **FAIL** (15 semantic collisions in scope) |
| CACHE CONTEXT (word-field structural) | **33** groups (DE READ-ONLY, not BS errors) |
| sectionAccents TECHNICAL | **FAIL** (-1 issues) |
| sectionAccents LANGUAGE | **PASS** (no new LV remnants flagged) |
| DE READ-ONLY | **PASS** |
| STRUCTURAL PASS | **PASS** |
| data unchanged | **PASS** |

**Recommendation:** REQUIRES TARGETED FIX

---

## Previous CRITICAL regression (4 cards)

### b1-hobeln-1285
- **Current BS lv:** Blanjati • Rendisati
- **DE:** hobeln 
- **BS issues:** none

### b1-See-2572
- **Current BS lv:** Jezero
- **DE:** See die
- **BS issues:** CRITICAL: Die See znači more; „jezero“ odgovara der See.

### b1-Tonne-2897
- **Current BS lv:** Tona
- **DE:** Tonne die
- **BS issues:** none

### b1-Weise-3228
- **Current BS lv:** Način
- **DE:** Weise die
- **BS issues:** none
- **SOURCE/LV ISSUE:** LV izvor „gudrs“ znači mudar, ali DE „die Weise“ = način; BS je tačan.

---

## Skipped HIGH from previous fix (1)

| Field | Value |
|---|---|
| cardId | `b1-nachdem` |
| field | `study.tip` |
| reason skipped | existing_text_mismatch |
| Terra expected text | Gurnite i odmaknite se: nachgeben. |
| actual current text | Nachdem zahtijeva cijelu klauzulu • Danach može stajati sam. |

**Verdict:** FALSE POSITIVE — Terra mis-attributed `nachgeben` tip text to `b1-nachdem`. Actual `b1-nachdem` tip is correct for nachdem usage. Separate `b1-nachgeben` HIGH was applied successfully.

---

## API usage

| Metric | Value |
|---|---:|
| Model | gpt-5.6-luna |
| Audited cards | 328/328 |
| Batch requests | 16 |
| Retry requests | 0 |
| Total requests | 16 |
| Input tokens | 120196 |
| Cached input tokens | 0 |
| Output tokens | 32717 |
| Reasoning tokens | 25412 |
| Total tokens | 152913 |

**cost not reliably calculated**

---

## CRITICAL/HIGH findings

- `b1-einsehen-706` | `lv` | HIGH | “Pristati” means “agree/consent,” not DE “einsehen” = realize or acknowledge.
- `b1-Kabelkanal-1440` | `lv` | HIGH | Prevod znači televizijski kanal, a Kabelkanal je kanal/korito za kablove.
- `b1-Riss-2324` | `lv` | HIGH | „Jaz“ znači procjep/jarak, ne pukotina; bolje „pukotina“.
- `b1-See-2572` | `lv` | CRITICAL | Die See znači more; „jezero“ odgovara der See.
- `b1-aufführen` | `study.comparison[2].meaning` | HIGH | nennen ne znači "izvesti".
- `b1-behandeln` | `study.examples[0].bsText` | HIGH | Srpski ekavski oblik „leči“; bosanski je „liječi“.
- `b1-bemerken` | `study.examples[2].bsText` | HIGH | Srpski oblik „primetio“; bosanski je „primijetio“.
- `b1-beraten` | `study.examples[0].bsText` | HIGH | Srpski oblici „Lekar savetuje“; bosanski je „Ljekar savjetuje“.
- `b1-berichten` | `study.examples[2].bsText` | HIGH | „Kolegica“ i „izvještava“ su jednina, a izvor govori o kolegama u množini.
- `b1-blase` | `study.comparison[1].meaning` | HIGH | „Die Wunde“ znači „rana“, a ne „mjehur“.
- `b1-block` | `study.comparison.meaning` | HIGH | Heft i Klotz su prevedeni kao „blok“, pa se gubi razlika u značenju.
- `b1-daher` | `study.translation; study.explanation; study.comparison[0].meaning; study.comparison[1].meaning` | HIGH | Glavno značenje daher je „zato/stoga“, ne „dakle“.
- `b1-einholen` | `study.comparison[2].meaning` | HIGH | überholen znači „prestići“, a ne „dohvatiti“.
- `b1-einsetzen` | `study.tip.leftBlocks[0].text` | HIGH | Tipografska greška u njemačkom primjeru: „settze“ treba biti „setzt“.
- `b1-enthalten` | `study.examples[2].lv` | HIGH | Njemački Bericht i latvijski ziņojums ovdje znače „izvještaj“, ne „poruka“.
- `b1-feststellen` | `study.comparison[2].meaning` | HIGH | bemerken znači „primijetiti”, a ne „utvrditi”.
- `b1-geschlecht` | `study.explanation` | HIGH | Njemački „neuter” treba prevesti kao „srednji rod”, ne „nikakav rod”.
- `b1-geschlecht` | `study.comparison[2].meaning` | HIGH | die Generation znači „generacija”, ne „spol”.
- `b1-kippen` | `study.examples[0].bs` | HIGH | Latvijsko „glāze” ovdje znači „čaša”, ne „staklo”.
- `b1-klappen` | `study.explanation` | HIGH | „znači uspjeh ili dobro” je negramatično i ne prenosi značenje glagola.
- `b1-kürze` | `study.comparison[1].meaning` | HIGH | „in Kürze“ znači „uskoro“, ne „kratkoća“.
- `b1-nachdem` | `study.explanation` | HIGH | „nakon kada“ nije prirodan bosanski prevod za „pēc tam kad“.
- `b1-nachdem` | `study.comparison[0].meaning` | HIGH | „Nakon kada“ je gramatički neprirodno.
- `b1-nachgeben` | `study.comparison[2].meaning` | HIGH | „zugeben“ znači priznati, ne popustiti.
- `b1-pflegen` | `study.comparison[1].meaning` | HIGH | Preveden je imperativ; značenje je „brinuti se o“.
- `b1-pflegen` | `study.comparison[2].meaning` | HIGH | „putzen“ znači čistiti, ne njegovati.
- `b1-pochen` | `study.comparison[1].meaning` | HIGH | „Da kucam“ je pogrešan oblik i lice.
- `b1-rausch` | `study.comparison[2].meaning` | HIGH | die Sucht znači „ovisnost“, ne „opijenost“.
- `b1-schmieren` | `study.comparison[1].word` | HIGH | Naziv poređenja nije njemački glagol iz izvora.
- `b1-schnitt` | `study.comparison[2].meaning` | HIGH | die Wunde znači „rana“, ne „rez“.
- `b1-sprung` | `study.comparison[0].meaning` | HIGH | „Jaz“ znači razmak, ne pukotina.
- `b1-streichen` | `sectionAccents.comparison[0].word` | HIGH | Oznaka je prevedena kao „Bojati“; njemačka oznaka mora ostati „streichen“.
- `b1-strom` | `study.comparison[2].meaning` | HIGH | die Energie znači „energija“, ne „struja“.
- `b1-übersehen` | `study.comparison[2].meaning` | HIGH | bemerken znači „primijetiti“, a ne „previdjeti“.
- `b1-verband` | `study.comparison[2].meaning` | HIGH | die Verbindung znači „veza/savienojums“, ne „zavoj • udruženje“.
- `b1-verbindung` | `study.comparison[2].meaning` | HIGH | der Verband znači „zavoj • udruženje“, ne „veza“.
- `b1-verbrennen` | `study.comparison[2].meaning` | HIGH | anzünden znači „zapaliti“, ne „spaliti“.
- `b1-zünden` | `study.comparison[2].meaning` | HIGH | brennen znači „gorjeti“, ne „paliti“.

---

## Remaining semantic cache collisions (scope)

- darīt|meaning → Uraditi
- lietot|meaning → Koristiti
- rūpnīca|meaning → Fabrika
- saņemt|meaning → Primiti
- tāpēc|meaning → Dakle
- tāpēc / no turienes|meaning → Dakle / odatle
- steigties|meaning → Žuriti
- saņemt ikdienā|meaning → Dobiti / primiti u svakodnevnom govoru
- bēgt|meaning → Bježati
- derēt / piestāvēt|meaning → Odgovarati / pristajati
- virsma|meaning → Površina
- skaņa|meaning → Zvuk
- atrašanās vieta|meaning → Lokacija
- spļaut|meaning → Pljuvati
- mainīt|meaning → Promijeniti

---

## Local validation

| Check | Result |
|---|---|
| Entries | 3367 |
| Study | 324 |
| standardStudy | 323 |
| minimalStudy | 1 |
| data ≡ www | PASS |
| DE READ-ONLY | PASS |
| Data hash | `c4b775534ee2e06b41c0ed1cb4df72bd` |
| Hash unchanged | PASS |