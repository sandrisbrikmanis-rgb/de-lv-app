# BS–DE B1 — Terra pilns re-audits (pēc fix pass)

**Datums:** 2026-08-08
**Modelis:** gpt-5.6-terra
**Datu hash (MD5):** `85613373456ffc8b4f65a3a603ed32c9` (pirms = pēc: nemainīts)

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| Ieraksti | 3367 |
| Study kartītes | 324 |
| Terra CRITICAL | **4** |
| Terra HIGH | **355** |
| Terra MEDIUM | **624** |
| Terra WARNING | **0** |
| LV atlikumi | 0 |
| REAL CACHE COLLISIONS | 33 |

**Gala lēmums:** B — REQUIRES FIX PASS

---

## 2. BEFORE → AFTER

| Severity | Pirms fix | Pēc fix (re-audit) |
|---|---:|---:|
| CRITICAL | 129 | **4** |
| HIGH | 1138 | **355** |
| MEDIUM | 683 | **624** |
| WARNING | 0 | **0** |

| Pārbaude | Pirms | Pēc |
|---|---:|---:|
| sectionAccents LV remnants | 942 | **0** |
| sectionAccents TECHNICAL | 0 | **0** |
| REAL CACHE COLLISIONS | — | **33** |

---

## 3. Statusu tabula

| Statuss | Rezultāts |
|---|---|
| STRUCTURAL PASS | ✅ PASS |
| AI AUDITED | ✅ PASS (3367/3367) |
| FIX REGRESSION | ⚠️ ISSUES (CRITICAL=4, HIGH=301 mainītajās kartītēs) |
| sectionAccents TECHNICAL | ✅ PASS (0 issues) |
| sectionAccents LANGUAGE | ✅ PASS |
| sectionAccents PEDAGOGICAL | ⚠️ 2175 warnings |
| DE READ-ONLY | ✅ PASS (`verify-bs-de-compliance.js`) |
| CACHE CONTEXT | ❌ 33 REAL |
| PRODUCTION READY | ❌ NĒ |
| FINAL – OWNER ACCEPTED | ⏳ READY FOR OWNER REVIEW |

---

## 4. Terra API statistika

| Metrika | Vērtība |
|---|---:|
| Modelis | gpt-5.6-terra |
| Batch requesti | 72 |
| Retry | 0 |
| Input tokeni | 393727 |
| Output tokeni | 258972 |
| Reasoning tokeni | 147426 |
| Kopā tokeni | 652699 |
| Izmaksas (USD) | $0.6164 |
| Cache context Terra | $0.1410 |
| **Kopējās izmaksas** | **~$0.76** |

### CRITICAL atradumi (4)

| Kartīte | Lauks | Problēma |
|---|---|---|
| `b1-hobeln-1285` | lv | „Planirati” = plānot, nevis ēvelēt koksni |
| `b1-See-2572` | lv | Tulkojums nozīmē „jūra”, bet DE ir See (ezers) |
| `b1-Tonne-2897` | lv | „Ton” = skaņa, nevis mērvienība „tonna” |
| `b1-Weise-3228` | lv | Nepareiza nozīme DE lietvārdam Weise |

---

## 5. Fix regression

Mainītās study kartītes fix pass: **250**
Regression Terra atradumi mainītajās kartītēs: CRITICAL=4, HIGH=301, MEDIUM=535

---

## 6. sectionAccents fix pass

Kartēti: 324 | Izņemti: 112

---

## 7. Cache context

Kandidāti: 424 | SAFE: 391 | **REAL: 33**

---

## 8. Terra atradumi (izlase CRITICAL/HIGH)

| Kartīte | Lauks | Severity | Problēma |
|---|---|---|---|
| `b1-Abgang-47` | lv | HIGH | „Odlazi” je glagolski oblik, a ne imenica koja odgovara značenju „Abgang” / „aiz |
| `b1-anliegend-122` | lv | HIGH | "U dodatku" means in an addendum or appendix, not enclosed/attached as indicated |
| `b1-Anrede-129` | lv | HIGH | "Govor" means speech, whereas "Anrede" here means a form of address or salutatio |
| `b1-ansehnlich-144` | lv | HIGH | "Izvanredno" means excellent or extraordinary, not considerable/notable. |
| `b1-anstiften-149` | lv | HIGH | "Ohrabriti" means to encourage, while "anstiften" means to incite or induce some |
| `b1-Anwender-162` | lv | HIGH | "Korisnika" is a dependent case form, not the nominative singular noun needed fo |
| `b1-Armee-168` | lv | HIGH | The Bosnian translation is plural, while the German and Latvian entries are sing |
| `b1-Auflauf-179` | lv | HIGH | The translation is not a valid Bosnian word and does not provide the meaning of  |
| `b1-aufrecht-181` | lv | HIGH | "Ravno" is an adverb/neuter form meaning “straight/flat” and does not naturally  |
| `b1-Aufsehen-188` | lv | HIGH | The translation is in the accusative case, not the dictionary/headword form. |
| `b1-Auftritt-201` | lv | HIGH | The translation does not provide the appropriate singular headword for "Auftritt |
| `b1-sich äußern-207` | lv | HIGH | The reflexive element is missing. "Izraziti" means “to express (something),” whe |
| `b1-austrocknen-217` | lv | HIGH | The Bosnian verb is transitive (“to dry something”), while the Latvian source "i |
| `b1-Autoabgase-227` | lv | HIGH | The translation is in genitive plural and is not a valid standalone equivalent f |
| `b1-Barsch-243` | lv | HIGH | The field contains an English word rather than a Bosnian translation. |
| `b1-Basis-244` | lv | HIGH | The translation is in the accusative case instead of the dictionary/headword for |
| `b1-befestigen-274` | lv | HIGH | „Priložiti” znači priložiti dokument ili dodati nešto uz poruku, a ne pričvrstit |
| `b1-befühlen-283` | lv | HIGH | „Dodirnuti” označava običan, često kratak dodir, dok „befühlen” i „aptaustīt” zn |
| `b1-bekämpfen-324` | lv | HIGH | „Boriti se” je neprelazan glagol i obično zahtijeva dopunu „protiv”. „Bekämpfen” |
| `b1-sich bessern-392` | lv | HIGH | The reflexive meaning is missing. "Poboljšati" is normally transitive: to improv |
| `b1-Besuchszeit-400` | lv | HIGH | This means "the visitors' time," not visiting hours or the time designated for v |
| `b1-bewachen-420` | lv | HIGH | "Zaštititi" means to protect, while "bewachen" means to guard, watch, or keep un |
| `b1-Bühne-523` | lv | HIGH | “Pozornici” is a declined dative/locative form, not the nominative noun for “sta |
| `b1-Bulette-524` | lv | HIGH | “Mesne okruglice” means meatballs, whereas a German “Bulette” is a fried minced- |
| `b1-Chipkarte-543` | lv | HIGH | The translation is in the accusative case and does not specifically convey a car |
| `b1-Dampf-558` | lv | HIGH | “Pare” means money or is a plural form; it is not the singular noun for steam. |
| `b1-derselbe-578` | lv | HIGH | The neuter form “isto” does not match the masculine meaning of “derselbe.” |
| `b1-desto-579` | lv | HIGH | The text is not a valid Bosnian expression and does not translate “desto.” |
| `b1-dieselbe-591` | lv | HIGH | The neuter form “isto” does not match the feminine meaning of “dieselbe.” |
| `b1-Diskussion-596` | lv | HIGH | The translation is in the accusative case instead of the nominative dictionary f |

---

## 9. Validācija

| Pārbaude | Rezultāts |
|---|---|
| JavaScript sintakse | ✅ PASS |
| UTF-8 / mojibake | ✅ PASS |
| DE READ-ONLY | ✅ PASS |
| data ≡ www | ✅ PASS |
| Datu faili nemainīti | ✅ PASS |

---

## 10. Secinājums

B1 fix pass būtiski samazināja CRITICAL (129→4) un HIGH (1138→355), novēršot visus sectionAccents LV atlikumus. Tomēr palikuši **4 CRITICAL**, **355 HIGH** un **33 REAL cache collisions** — nepieciešams papildu fix pass.

**NEKO CITU NEAIZTIKT. DATU FAILI NAV MAINĪTI.**
