# BS–DE B1 Luna Targeted Regression Audit #2 Report

**Date:** 2026-08-08
**Model:** gpt-5.6-luna
**Scope:** 36/36 cards (Fix #2 regression)
**Mode:** AUDIT ONLY — data files unchanged

---

## Status

| Status | Result |
|---|---|
| TARGETED AI AUDITED | **36/36** |
| CRITICAL | **0** |
| HIGH | **3** |
| MEDIUM | **20** |
| WARNING | **0** |
| SOURCE/LV ISSUES | **2** |
| PREVIOUS CRITICAL REGRESSION | **PASS** |
| PREVIOUS HIGH REGRESSION | **FAIL** |
| FALSE POSITIVE RECHECK | **PASS** |
| CACHE CONTEXT | **FAIL** (8 real collisions) |
| sectionAccents TECHNICAL | **PASS** (0) |
| sectionAccents LANGUAGE | **PASS** |
| DE READ-ONLY | **PASS** |
| STRUCTURAL PASS | **PASS** |
| data unchanged | **PASS** |

**Decision:** REQUIRES TARGETED FIX

CRITICAL/HIGH regression cycle is **not closed** — 3 HIGH remain. Next step: small targeted fix for `b1-schnitt`, `b1-streichen`, `b1-verbrennen` only, then optional cache-context review. **Do not** start MEDIUM quality pass until HIGH = 0.

---

## CRITICAL recheck — b1-See-2572

- **DE:** See die die Seen
- **LV etalon:** jūra
- **BS:** More
- **Result:** PASS — die See = sea, More correct

---

## False positive recheck

### b1-berichten
- **Field:** study.examples[2].lv
- **Status:** VERIFIED FALSE POSITIVE

### b1-schmieren
- **Field:** study.comparison[1].word
- **Status:** VERIFIED FALSE POSITIVE

### b1-nachdem
- **Field:** study.tip
- **Status:** VERIFIED FALSE POSITIVE

---

## Priority HIGH cards with findings

- `b1-verbrennen` | `study.examples[2].bsText` | HIGH | „Opalio sam ruku“ nije standardni izraz za opeklinu; treba „Opekao sam ruku“.

---

## API usage

| Metric | Value |
|---|---:|
| Model | gpt-5.6-luna |
| Audited cards | 36/36 |
| Batch requests | 3 |
| Retry requests | 0 |
| Total requests | 3 |
| Input tokens | 24549 |
| Cached input tokens | 0 |
| Output tokens | 4979 |
| Reasoning tokens | 3609 |
| Total tokens | 29528 |

**cost not reliably calculated**

---

## CRITICAL/HIGH findings

- `b1-schnitt` | `study.examples[0].bsText` | HIGH | „Posekotina“ nije standardni bosanski oblik; treba „posjekotina“.
- `b1-streichen` | `study.important.text` | HIGH | „Šarati zid“ znači scribble, a ne suprotno značenje „svrtati/precrtati“.
- `b1-verbrennen` | `study.examples[2].bsText` | HIGH | „Opalio sam ruku“ nije standardni izraz za opeklinu; treba „Opekao sam ruku“.

---

## Real cache collisions (scope)

- lietot → Koristiti
  - b1-sich-bedienen (sich bedienen)
  - b1-sich-bedienen (sich bedienen)
  - b1-einsetzen (einsetzen)
- brūce → Rana
  - b1-blase (Blase)
  - b1-schnitt (Schnitt)
- atzīt → Priznati
  - b1-einsehen-706 (einsehen)
  - b1-nachgeben (nachgeben)
- plaisa → Pukotina
  - b1-Riss-2324 (Riss)
  - b1-sprung (Sprung)
- pārsējs • apvienība → Zavoj • udruženje
  - b1-verband (Verband)
  - b1-verbindung (Verbindung)
- savienojums, saikne → Veza, veza
  - b1-verband (Verband)
  - b1-verbindung (Verbindung)
- degt → Gorjeti
  - b1-verbrennen (verbrennen)
  - b1-zünden (zünden)
- aizdedzināt → Zapaliti
  - b1-verbrennen (verbrennen)
  - b1-zünden (zünden)
  - b1-zünden (zünden)

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
| Data hash | `f3f3aac8a201d318f0e66c18d6258e88` |
| Hash unchanged | PASS |