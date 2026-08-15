# CS–DE Kurss Výslovnost — OWNER review (all findings)

READ-ONLY OWNER source. **No production repairs.** Fill **Status** and **OWNER NEW** per finding.

**Source audit:** `reports/cs-kurs-pronunciation-full-audit.md`
**Audit JSON:** `reports/temp/cs-kurs-pronunciation-audit/full-audit.json`
**Luna PROPOSED** = audit recommendation only — **not** automatic production replacement.

## Summary

| Metric | Value |
|--------|-------|
| Quality findings (real) | **268** |
| Unique targets (findingId) | **175** |
| FALSE_POSITIVE (excluded) | 5 |
| SOURCE_DE_ISSUE (excluded) | 23 |
| Production changes | **0** |

### Severity

CRITICAL: 6, HIGH: 205, MEDIUM: 54, LOW: 3

### Category (top)

- FOREIGN_LEFTOVER: 132
- PHONETIC_ERROR: 33
- SEMANTIC_MISMATCH: 25
- PEDAGOGICAL_ISSUE: 25
- TRANSCRIPTION_ISSUE: 22
- CS_TERMINOLOGY: 12
- CS_ORTHOGRAPHY: 11
- CS_NATURALNESS: 3
- CS_GRAMMAR: 2
- MISLEADING_APPROXIMATION: 2
- CS_SEMANTIC_MISMATCH: 1

---

## Finding 001

**Finding ID:** kurssPronunciationLesson/section[0]/example[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Teplý (varm) — teplý
### Luna PROPOSED
Warm (varm) — teplý
### DE context
Tepl | varm)  | tepl
### LV MASTER context
warm (varm) — silts
### Reason
Uživatelský text obsahuje lotyšské slovo „varm“ místo německého příkladu; český překlad je navíc duplicitně uveden jako „teplý — teplý“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 002

**Finding ID:** kurssPronunciationLesson/section[0]/example[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Střevo (dostat) — dobrý
### Luna PROPOSED
Gut (gút) — dobrý
### DE context
St | evo (dostat)  | dobr
### LV MASTER context
gut (gūt) — labs
### Reason
„Střevo“ neodpovídá zamýšlenému německému slovu gut a „dostat“ je lotyšský cizí zbytek. Český význam je nesprávný.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 003

**Finding ID:** kurssPronunciationLesson/section[0]/example[1]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Střevo (dostat) — dobrý
### Luna PROPOSED
Gut (gút) — dobrý
### DE context
St | evo (dostat)  | dobr
### LV MASTER context
gut (gūt) — labs
### Reason
Německé gut znamená „dobrý“, nikoli „střevo“; současný text proto neposkytuje správný německý příklad dlouhé samohlásky.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 004

**Finding ID:** kurssPronunciationLesson/section[0]/example[2]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Tat (tat) - práce / akce
### Luna PROPOSED
Tat (tát) — čin / skutek
### DE context
Tat (tat) - pr | ce / akce
### LV MASTER context
Tat (tāt) — darbs / rīcība
### Reason
Tat má dlouhé /aː/, ale přepis „tat“ naznačuje krátké a. Aproximace je proto PEDAGOGICALLY_ACCEPTABLE pouze po označení délky; v současné podobě je pro začátečníka zavádějící.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 005

**Finding ID:** kurssPronunciationLesson/section[0]/example[2]
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Tat (tat) - práce / akce
### Luna PROPOSED
Tat (tát) — čin / skutek
### DE context
Tat (tat) - pr | ce / akce
### LV MASTER context
Tat (tāt) — darbs / rīcība
### Reason
Tat znamená „čin“ nebo „skutek“, ne obecně „práce / akce“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 006

**Finding ID:** kurssPronunciationLesson/section[0]/example[4]
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Weg (weg) - silnice
### Luna PROPOSED
Weg (vék) — cesta
### DE context
Weg (weg) - silnice
### LV MASTER context
Weg (vēk) — ceļš
### Reason
Weg znamená „cesta“, nikoli přesně „silnice“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 007

**Finding ID:** kurssPronunciationLesson/section[0]/example[4]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Weg (weg) - silnice
### Luna PROPOSED
Weg (vék) — cesta
### DE context
Weg (weg) - silnice
### LV MASTER context
Weg (vēk) — ceļš
### Reason
„weg“ není pro začátečníka jasný výslovnostní přepis: neoznačuje dlouhé /eː/ a může vést k výslovnosti německého g jako [g]. Vhodnější česká aproximace je „vék“. Aproximace současného zápisu je MISLEADING_APPROXIMATION.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 008

**Finding ID:** kurssPronunciationLesson/section[0]/example[7]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Schlaf - spánek
### Luna PROPOSED
Schlaf (šlāf) — spánek
### DE context
Schlaf - sp | nek
### LV MASTER context
Schlaf (šlāf) — miegs
### Reason
Příklad Schlaf sice správně ukazuje dlouhé a, ale bez výslovnostní nápovědy nemusí začátečník jasně poznat, že sch se vyslovuje [š] a a je dlouhé.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 009

**Finding ID:** kurssPronunciationLesson/section[1]/example[3]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Lysý (bílý) - brzy
### Luna PROPOSED
Bald (balt) – brzy
### DE context
Lys | brzy
### LV MASTER context
bald (balt) — drīz
### Reason
The Czech text does not contain the German example bald. „Lysý (bílý)“ gives Czech words with unrelated meanings and cannot demonstrate the German pronunciation.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 010

**Finding ID:** kurssPronunciationLesson/section[1]/example[4]
**Severity:** MEDIUM
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Scharf (шарф) - ostrý
### Luna PROPOSED
Scharf (šarf) – ostrý
### DE context
Scharf ( | ostr
### LV MASTER context
scharf (šarf) — ass
### Reason
The pronunciation is written in Cyrillic („шарф“), although the course is for Czech learners. A Czech approximation should use „šarf“. The approximation itself is PEDAGOGICALLY_ACCEPTABLE.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 011

**Finding ID:** kurssPronunciationLesson/section[1]/example[5]
**Severity:** HIGH
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Feld (plsť) — pole
### Luna PROPOSED
Feld (felt) – pole
### DE context
Feld (pls | pole
### LV MASTER context
Feld (felt) — lauks
### Reason
„plsť“ is a Czech translation, not a pronunciation guide. It therefore cannot represent the German pronunciation of Feld; the relevant approximation is „felt“. The current card repeats two Czech meanings instead of showing the sound.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 012

**Finding ID:** kurssPronunciationLesson/section[10]/example[4]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Strauch (štrauh) - keř
### Luna PROPOSED
Strauch (štrau ch; ch jako v německém Ach, nikoli české h) — keř
### DE context
Strauch ( | trauh) - ke
### LV MASTER context
Strauch (štrauh) — krūms
### Reason
Ve slově Strauch je ch německé Ach-Laut /x/, nikoli české h. Zápis „štrauh“ proto obsahuje PHONETICALLY_WRONG aproximaci koncové hlásky. Dvojhláska au je zachycena přibližně správně; problém se týká hlavně ch.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 013

**Finding ID:** kurssPronunciationLesson/section[10]/example[5]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Sträucher (štroiher) - keře
### Luna PROPOSED
Sträucher (štroicher; ch vyslovte jako německé Ich-Laut) — keře
### DE context
Sträucher ( | troiher) - ke
### LV MASTER context
Sträucher (štroiher) — krūmi
### Reason
Ve Sträucher je ch německé Ich-Laut /ç/, nikoli české h. Zápis „štroiher“ je proto PHONETICALLY_WRONG. „oi“ jako přibližný zápis německého äu (/ɔʏ̯/) je PEDAGOGICALLY_ACCEPTABLE, ale koncové ch musí být vysvětleno odděleně.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 014

**Finding ID:** kurssPronunciationLesson/section[10]/example[7]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Mäuse (moise) - myši
### Luna PROPOSED
Mäuse (moize) — myši
### DE context
Mäuse (moise) - my
### LV MASTER context
Mäuse (moize) — peles
### Reason
Ve slově Mäuse se mezi samohláskami písmeno s vyslovuje zněle jako /z/. Zápis „moise“ obsahuje neznělé s, a proto je pro tento detail MISLEADING_APPROXIMATION. Dvojhláska äu je přibližně zachycena zápisem „oi“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 015

**Finding ID:** kurssPronunciationLesson/section[12]/example[0]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Mein (hlavní) - můj
### Luna PROPOSED
Mein (main) — můj
### DE context
Mein (hlavn
### LV MASTER context
mein (main) — mans
### Reason
„hlavní“ je překlad anglického main, nikoli výslovnost německého Mein. Německé Mein znamená „můj“; výslovnost lze pro začátečníky přiblížit jako „main“ (PEDAGOGICALLY_ACCEPTABLE).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 016

**Finding ID:** kurssPronunciationLesson/section[12]/example[2]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Sein (zain) - ona / její / být
### Luna PROPOSED
Sein (zain) — jeho / být
### DE context
Sein (zain) - ona / jej
### LV MASTER context
sein (zain) — viņa / viņas / būt
### Reason
„sein“ neznamená „ona“ ani „její“. Znamená „jeho“ nebo „být“ podle kontextu. Výslovnost „zain“ je pro začátečníky PEDAGOGICALLY_ACCEPTABLE.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 017

**Finding ID:** kurssPronunciationLesson/section[12]/h4
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dvojhlásky: Ahoj
### Luna PROPOSED
Dvojhláska ei
### DE context

### LV MASTER context
Divskaņi: ei
### Reason
Nadpis „Ahoj“ neodpovídá obsahu: následující příklady procvičují německé dvojhláskové ei, nikoli německý pozdrav.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 018

**Finding ID:** kurssPronunciationLesson/section[13]/h4
**Severity:** MEDIUM
**Category:** CS_NATURALNESS
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Přednáška 2 poznámky výslovnosti
### Luna PROPOSED
Poznámky k výslovnosti z přednášky 2
### DE context

### LV MASTER context
2. lekcijas izrunas piezīmes
### Reason
Český slovosled je nepřirozený. Přirozenější je „Poznámky k výslovnosti z přednášky 2“ nebo stručně „Výslovnost — poznámky z přednášky 2“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 019

**Finding ID:** kurssPronunciationLesson/section[13]/li[3]
**Severity:** MEDIUM
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Ve slovesu tun se písmeno „u“ vyslovuje dlouze
### Luna PROPOSED
Ve slově tun se samohláska „u“ vyslovuje dlouze.
### DE context
Ve slovesu tun se p | smeno „u“ vyslovuje dlouze
### LV MASTER context
darbības vārdā tun burts “u” izrunājams garš
### Reason
Formulace zaměňuje písmeno za hlásku: nevyslovuje se samotné písmeno, ale hláska, kterou v daném slově představuje. Pro začátečníka je vhodnější mluvit o dlouhé samohlásce u.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 020

**Finding ID:** kurssPronunciationLesson/section[14]/li[3]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Tj. často stojí dlouho i
### Luna PROPOSED
„ie“ často označuje dlouhé i.
### DE context
Tj.  | asto stoj | dlouho i
### LV MASTER context
ie bieži nozīmē garo i
### Reason
„Tj.“ je zde zjevně chyba nebo zkratka bez významu. V kontextu německé výslovnosti má být uvedeno „ie“. Současná formulace je pro začátečníka nesrozumitelná.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 021

**Finding ID:** kurssPronunciationLesson/section[14]/li[4]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dvojhlásky jsou obvykle dlouhé
### Luna PROPOSED
Dvojhlásky se vyslovují jako spojení dvou samohláskových prvků v jedné slabice.
### DE context
Dvojhl | sky jsou obvykle dlouh
### LV MASTER context
dubultie patskaņi parasti ir gari
### Reason
Dvojhláska není dlouhá samohláska, ale spojení dvou samohláskových prvků v jedné slabice. Tvrzení „dvojhlásky jsou dlouhé“ je proto MISLEADING_APPROXIMATION. Lze říci, že obvykle trvají déle než krátké monoftongy, ale jejich hlavní vlastností je změna kvality.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 022

**Finding ID:** kurssPronunciationLesson/section[2]/example[1]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Tragen (trägen) — nést
### Luna PROPOSED
Tragen (trágen) – nést
### DE context
Tragen (trägen)  | st
### LV MASTER context
tragen (trāgen) — nest
### Reason
The approximation „trägen“ uses ä, but tragen has a long a: [ˈtʁaːɡən] or [ˈtʁaːɡn̩]. This is a PHONETICALLY_WRONG representation of the vowel.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 023

**Finding ID:** kurssPronunciationLesson/section[2]/example[12]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Wieder - znovu
### Luna PROPOSED
Wieder (víder) – znovu
### DE context
Wieder - znovu
### LV MASTER context
wieder (vīder) — atkal
### Reason
The card has no pronunciation approximation, so it does not demonstrate the long ie sound or the pronunciation of the word Wieder.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 024

**Finding ID:** kurssPronunciationLesson/section[2]/example[4]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Segel - plachta
### Luna PROPOSED
Segel (zēgel) – plachta
### DE context
Segel - plachta
### LV MASTER context
Segel (zēgel) — bura
### Reason
The card has no pronunciation approximation, even though it belongs to a pronunciation section and the example demonstrates the ending -el. A beginner is not shown how Segel is pronounced.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 025

**Finding ID:** kurssPronunciationLesson/section[2]/example[5]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Braten (bratr) - pečeně
### Luna PROPOSED
Braten (bráten) – pečeně
### DE context
Braten (bratr) - pe | en
### LV MASTER context
Braten (brāten) — cepetis
### Reason
„bratr“ is not a pronunciation approximation of Braten. The German word has long a and t, approximately „bráten“; the current form also introduces an unrelated Czech lexical item.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 026

**Finding ID:** kurssPronunciationLesson/section[2]/example[7]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Spiegel (spiegel) - zrcadlo
### Luna PROPOSED
Spiegel (špígel) – zrcadlo
### DE context
Spiegel (spiegel) - zrcadlo
### LV MASTER context
Spiegel (špīgel) — spogulis
### Reason
Spiegel begins with German sch [ʃ], not Czech s. „spiegel“ can mislead a Czech beginner into pronouncing /sp/; the approximation should begin „šp…“. The long i should also be shown.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 027

**Finding ID:** kurssPronunciationLesson/section[2]/example[8]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Finger (prst) - prst
### Luna PROPOSED
Finger (finger) – prst
### DE context
Finger (prst) - prst
### LV MASTER context
Finger (finger) — pirksts
### Reason
„prst“ in parentheses is a Czech translation, not a pronunciation guide, and it is repeated after the dash. The card gives no approximation for Finger and therefore does not demonstrate the target ending.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 028

**Finding ID:** kurssPronunciationLesson/section[2]/example[9]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Halter (ohlávka) - držák
### Luna PROPOSED
Halter (halter) – držák
### DE context
Halter (ohl | vka) - dr
### LV MASTER context
Halter (halter) — turētājs
### Reason
„ohlávka“ in parentheses is a translation, not a pronunciation approximation. The card does not show how Halter is pronounced or how the -er ending sounds.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 029

**Finding ID:** kurssPronunciationLesson/section[3]/example[0]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Rahmen (rämen) - rám
### Luna PROPOSED
Rahmen (rámen) – rám
### DE context
Rahmen (rämen) - r
### LV MASTER context
Rahmen (rāmen) — rāmis
### Reason
Rahmen has a long a, [ˈʁaːmən]. The notation „rämen“ suggests ä and therefore a different vowel. The approximation is PHONETICALLY_WRONG.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 030

**Finding ID:** kurssPronunciationLesson/section[3]/example[3]
**Severity:** HIGH
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Zahl (kuře) - číslo
### Luna PROPOSED
Zahl (cāl) – číslo
### DE context
Zahl (ku | e) -  | slo
### LV MASTER context
Zahl (cāl) — skaitlis
### Reason
Výslovnostní přepis v závorce neodpovídá německému slovu. Přibližný přepis „cāl“ je ACCURATE_APPROXIMATION pro [tsaːl].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 031

**Finding ID:** kurssPronunciationLesson/section[3]/example[3]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Zahl (kuře) - číslo
### Luna PROPOSED
Zahl (cāl) – číslo
### DE context
Zahl (ku | e) -  | slo
### LV MASTER context
Zahl (cāl) — skaitlis
### Reason
„Kuře“ je chybný význam i chybná výslovnostní nápověda. Německé Zahl znamená „číslo“ a vyslovuje se přibližně [cāl]; písmeno h zde neoznačuje samostatný zvuk, ale délku samohlásky.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 032

**Finding ID:** kurssPronunciationLesson/section[3]/example[4]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Ihn (īn) - jeho
### Luna PROPOSED
Ihn (īn) – ho / jej
### DE context
Ihn ( | n) - jeho
### LV MASTER context
ihn (īn) — viņu
### Reason
Ihn neznamená „jeho“, ale „ho“ nebo „jej“; „jeho“ je německy sein. Výslovnostní přepis „īn“ je PEDAGOGICALLY_ACCEPTABLE jako přiblížení německému [iːn].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 033

**Finding ID:** kurssPronunciationLesson/section[3]/example[6]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Huhn (hūn) - kuře
### Luna PROPOSED
Huhn (hūn) – kuře
### DE context
Huhn (h | n) - ku
### LV MASTER context
Huhn (hūn) — vista
### Reason
U příkladu z oddílu o němém h chybí výslovnostní přepis. Začátečník tak nevidí, že Huhn se vyslovuje přibližně [hūn] a že h po u pouze označuje délku samohlásky.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 034

**Finding ID:** kurssPronunciationLesson/section[3]/example[9]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Schuh - bota
### Luna PROPOSED
Schuh (šū) – bota
### DE context
Schuh - bota
### LV MASTER context
Schuh (šū) — kurpe
### Reason
Příklad neobsahuje výslovnostní přepis, přestože má demonstrovat němé h po dlouhé samohlásce. Německé Schuh se vyslovuje přibližně [šū].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 035

**Finding ID:** kurssPronunciationLesson/section[3]/h4
**Severity:** HIGH
**Category:** CS_SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Písmeno h jako zeměpisná délka
### Luna PROPOSED
Písmeno h jako označení délky samohlásky
### DE context

### LV MASTER context
Burts h kā garumzīme
### Reason
„Zeměpisná délka“ means geographical longitude. It is unrelated to vowel length and makes the heading semantically incorrect.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 036

**Finding ID:** kurssPronunciationLesson/section[4]/example[0]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Lampe (lampa) - lampa
### Luna PROPOSED
Lampe (lampe) – lampa
### DE context
Lampe (lampa) - lampa
### LV MASTER context
Lampe (lampe) — lampa
### Reason
Závorka obsahuje český překlad, nikoli výslovnostní přepis, a opakuje význam za pomlčkou. Německé Lampe se vyslovuje přibližně [lampe].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 037

**Finding ID:** kurssPronunciationLesson/section[4]/example[1]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Hase (opar) - zajíc
### Luna PROPOSED
Hase (hāze) – zajíc
### DE context
Hase (opar) - zaj
### LV MASTER context
Hase (hāze) — zaķis
### Reason
„Opar“ není význam ani výslovnost slova Hase. Hase znamená „zajíc“ a vyslovuje se přibližně [hāze].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 038

**Finding ID:** kurssPronunciationLesson/section[4]/example[2]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Knabe (zobák) - chlapec
### Luna PROPOSED
Knabe (knābe) – chlapec
### DE context
Knabe (zob | k) - chlapec
### LV MASTER context
Knabe (knābe) — zēns
### Reason
„Zobák“ je chybný význam i chybná výslovnostní nápověda. Knabe znamená „chlapec“ a lze jej přepsat přibližně jako [knābe].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 039

**Finding ID:** kurssPronunciationLesson/section[4]/example[3]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Rabe - havran
### Luna PROPOSED
Rabe (rābe) – havran
### DE context
Rabe - havran
### LV MASTER context
Rabe (rābe) — krauklis
### Reason
Chybí výslovnostní přepis koncového němého e. Rabe se vyslovuje přibližně [rābe], nikoli podle českého čtení bez vysvětlení.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 040

**Finding ID:** kurssPronunciationLesson/section[5]/example[0]
**Severity:** CRITICAL
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Zemřít (dī) - článek "zemřít"
### Luna PROPOSED
Die (dī) – určitý člen „die“
### DE context
Zem | t (d | nek "zem | t"
### LV MASTER context
die (dī) — artikuls “die”
### Reason
Německé die neznamená „zemřít“; to je české sloveso. Die je určitý člen, podle rodu a pádu odpovídající například „ta“ nebo „ty“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 041

**Finding ID:** kurssPronunciationLesson/section[5]/example[0]
**Severity:** MEDIUM
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Zemřít (dī) - článek "zemřít"
### Luna PROPOSED
Die (dī) – určitý člen „die“
### DE context
Zem | t (d | nek "zem | t"
### LV MASTER context
die (dī) — artikuls “die”
### Reason
V kontextu německé gramatiky je vhodnější termín „člen“ než doslovné „článek“. Současná formulace navíc vysvětluje nesprávné české slovo.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 042

**Finding ID:** kurssPronunciationLesson/section[5]/example[1]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Diese - toto / tyto
### Luna PROPOSED
Diese (dīze) – tato / toto / tito / tyto
### DE context
Diese - toto / tyto
### LV MASTER context
diese (dīze) — šī / šie
### Reason
Chybí výslovnostní přepis, a příklad proto nedemonstruje výslovnost ie. Diese se vyslovuje přibližně [dīze]. Překlad je bez kontextu neúplný; slovo může znamenat „tato“, „toto“, „tito“ i „tyto“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 043

**Finding ID:** kurssPronunciationLesson/section[5]/example[3]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Fliege (fliege) - moucha
### Luna PROPOSED
Fliege (flīge) – moucha
### DE context
Fliege (fliege) - moucha
### LV MASTER context
Fliege (flīge) — muša
### Reason
„fliege“ v závorce je pouze německý pravopis, nikoli výslovnostní přepis, a navíc je napsáno malým písmenem. Německé Fliege se vyslovuje přibližně [flīge].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 044

**Finding ID:** kurssPronunciationLesson/section[5]/example[5]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Stiel (stīl) - kmen
### Luna PROPOSED
Stiel (štīl) – stonek / násada
### DE context
Stiel (st | l) - kmen
### LV MASTER context
Stiel (štīl) — kāts
### Reason
St na začátku německého slova se vyslovuje [ʃt], nikoli jako české [st]. Přepis „stīl“ je PHONETICALLY_WRONG; vhodné přiblížení je „štīl“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 045

**Finding ID:** kurssPronunciationLesson/section[5]/example[5]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Stiel (stīl) - kmen
### Luna PROPOSED
Stiel (štīl) – stonek / násada
### DE context
Stiel (st | l) - kmen
### LV MASTER context
Stiel (štīl) — kāts
### Reason
Stiel obvykle znamená „stonek“, „stopka“ nebo „násada“, nikoli obecně „kmen“; pro „kmen“ se v němčině běžně používá Stamm.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 046

**Finding ID:** kurssPronunciationLesson/section[5]/example[6]
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dieb (दीप) - zloděj
### Luna PROPOSED
Dieb (dīp) – zloděj
### DE context
Dieb ( | zlod
### LV MASTER context
Dieb (dīp) — zaglis
### Reason
Výslovnostní přepis obsahuje znaky dévanágarí „दीप“, což je cizí jazykový pozůstatek a pro českého začátečníka nesrozumitelný text.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 047

**Finding ID:** kurssPronunciationLesson/section[5]/example[6]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dieb (दीप) - zloděj
### Luna PROPOSED
Dieb (dīp) – zloděj
### DE context
Dieb ( | zlod
### LV MASTER context
Dieb (dīp) — zaglis
### Reason
Přepis „दीप“ není použitelný český ani latinkový výslovnostní přepis. Německé Dieb se vyslovuje přibližně [diːp]; koncové b se vyslovuje jako [p].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 048

**Finding ID:** kurssPronunciationLesson/section[5]/h4
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dlouhé i = tzn
### Luna PROPOSED
Dlouhé i = ie
### DE context

### LV MASTER context
Garais i = ie
### Reason
„tzn“ je zde zjevně chybná náhrada za německé pravopisné „ie“. Nadpis také pedagogicky směšuje české označení dlouhého i s německou grafickou podobou.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 049

**Finding ID:** kurssPronunciationLesson/section[5]/p[0]
**Severity:** LOW
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dlouhé i se v němčině často píše jako ie.
### Luna PROPOSED
Dlouhý zvuk [iː] se v němčině často zapisuje jako ie.
### DE context
Dlouh | i se v n | in | asto p | e jako ie.
### LV MASTER context
Garais i vācu valodā bieži tiek rakstīts kā ie.
### Reason
Vysvětlení je gramaticky správné, ale pro začátečníky by bylo přesnější mluvit o zápisu dlouhého zvuku [iː], nikoli pouze o „dlouhém i“, protože německé ie označuje grafémové spojení, ne jeden samostatný znak.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 050

**Finding ID:** kurssPronunciationLesson/section[6]/example[0]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Saal (tráva) - sál
### Luna PROPOSED
Saal (zāl) – sál
### DE context
Saal (tr | va) - s
### LV MASTER context
Saal (zāl) — zāle
### Reason
„Tráva“ je chybný význam slova Saal. Saal znamená „sál“; závorka má obsahovat výslovnostní přepis, přibližně [zāl], nikoli český překlad.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 051

**Finding ID:** kurssPronunciationLesson/section[6]/example[0]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Saal (tráva) - sál
### Luna PROPOSED
Saal (zāl) – sál
### DE context
Saal (tr | va) - s
### LV MASTER context
Saal (zāl) — zāle
### Reason
Příklad neukazuje, jak se německé z vyslovuje. Přepis „zāl“ je ACCURATE_APPROXIMATION pro [zaːl] v běžném českém výslovnostním systému a zároveň odděluje výslovnost od významu.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 052

**Finding ID:** kurssPronunciationLesson/section[6]/example[1]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Saat (zeť) - setí
### Luna PROPOSED
Saat (zát) – setí
### DE context
Saat (ze | set
### LV MASTER context
Saat (zāt) — sēja
### Reason
Saat obsahuje dlouhé německé [aː], nikoli dvojhlásku. Přepis „zeť“ je navíc významově i výslovnostně chybný; české slovo „zeť“ se zde nemá používat.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 053

**Finding ID:** kurssPronunciationLesson/section[6]/example[2]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Staat (stát) - země
### Luna PROPOSED
Staat (štát) – stát
### DE context
Staat (st | t) - zem
### LV MASTER context
Staat (štāt) — valsts
### Reason
Staat znamená „stát“ ve smyslu země/státní útvar, nikoli obecně „země“. Výslovnost obsahuje dlouhé [aː], takže nejde o dvojhlásku.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 054

**Finding ID:** kurssPronunciationLesson/section[6]/example[6]
**Severity:** HIGH
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Boot (bōt) - člun
### Luna PROPOSED
Boot (būt) – člun
### DE context
Boot (b | t) -  | lun
### LV MASTER context
Boot (bōt) — laiva
### Reason
Boot má dlouhé [uː], nikoli dvojhlásku. Karta je proto zařazena pod nesprávné téma „Dvojhlásky“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 055

**Finding ID:** kurssPronunciationLesson/section[6]/example[7]
**Severity:** HIGH
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Moor (mōr) - bažina
### Luna PROPOSED
Moor (mór) – bažina
### DE context
Moor (m | r) - ba | ina
### LV MASTER context
Moor (mōr) — purvs
### Reason
Moor obsahuje dlouhou samohlásku [oː], nikoli dvojhlásku. Karta je zařazena pod nesprávné téma.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 056

**Finding ID:** kurssPronunciationLesson/section[6]/example[8]
**Severity:** HIGH
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Moos (mōs) - mech
### Luna PROPOSED
Moos (mós) – mech
### DE context
Moos (m | s) - mech
### LV MASTER context
Moos (mōs) — sūnas
### Reason
Moos obsahuje dlouhé [oː], nikoli dvojhlásku. Karta je zařazena pod nesprávné téma.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 057

**Finding ID:** kurssPronunciationLesson/section[6]/p[0]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Dvojhlásky se obvykle vyslovují dlouze.
### Luna PROPOSED
Německé dvojhlásky se vyslovují jako spojení dvou samohláskových zvuků, nikoli jako jedna dlouhá samohláska.
### DE context
Dvojhl | sky se obvykle vyslovuj | dlouze.
### LV MASTER context
Dubultie patskaņi parasti tiek izrunāti gari.
### Reason
Německé dvojhlásky se nevyslovují jako dlouhé jednoduché samohlásky. Jde o spojení dvou samohláskových prvků, například [aɪ̯], [aʊ̯] nebo [ɔʏ̯]. Současné tvrzení může vést k nesprávné výslovnosti.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 058

**Finding ID:** kurssPronunciationLesson/section[7]/example[2]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Vater (otec) - otec
### Luna PROPOSED
Vater (fátr) – otec
### DE context
Vater (otec) - otec
### LV MASTER context
Vater (fāter) — tēvs
### Reason
Vater je správný německý příklad, ale závorka obsahuje pouze český překlad „otec“, nikoli výslovnostní přepis. Karta proto neukazuje, jak se německé a vyslovuje.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 059

**Finding ID:** kurssPronunciationLesson/section[7]/example[4]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Schrank (shrank) - skříň
### Luna PROPOSED
Schrank (šrank) – skříň
### DE context
Schrank (shrank) - sk
### LV MASTER context
Schrank (šrank) — skapis
### Reason
Přepis „shrank“ používá anglické „sh“, které není přirozený český výslovnostní přepis. Německé sch se v této kartě vyslovuje [š].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 060

**Finding ID:** kurssPronunciationLesson/section[7]/example[5]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Schränke (schrenke) - skříně
### Luna PROPOSED
Schränke (šrénke) – skříně
### DE context
Schränke (schrenke) - sk
### LV MASTER context
Schränke (šrenke) — skapji
### Reason
Přepis „schrenke“ používá anglické „sch“ místo českého „š“ a zároveň dostatečně neodlišuje německé ä od běžného e. Německé Schränke obsahuje [š] a dlouhé otevřené [ɛː] v první slabice.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 061

**Finding ID:** kurssPronunciationLesson/section[7]/example[8]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Tal (daleko) - údolí
### Luna PROPOSED
Tal (tál) – údolí
### DE context
Tal (daleko) -  | dol
### LV MASTER context
Tal (tāl) — ieleja
### Reason
Tal znamená „údolí“, zatímco „daleko“ je chybný český význam. Závorka navíc není výslovnostní přepis; správně je třeba uvést dlouhé německé a.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 062

**Finding ID:** kurssPronunciationLesson/section[7]/p[0]
**Severity:** HIGH
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Ä je transpozice a.
### Luna PROPOSED
Ä je přehláska písmene a. Vyslovuje se podobně jako české e, ale s postavením jazyka pro a.
### DE context
Ä je transpozice a.
### LV MASTER context
ä ir a pārskaņojums.
### Reason
„Transpozice“ není vhodný český termín pro německou přehlásku a věta nevysvětluje, jak se ä vyslovuje. Začátečník se dozví pouze neurčité přirovnání k písmenu a, nikoli rozdíl ve zvuku.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 063

**Finding ID:** kurssPronunciationLesson/section[8]/example[1]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Röschen (rēschen) - rozeta
### Luna PROPOSED
Röschen (röšen) – růžička
### DE context
Röschen (r | schen) - rozeta
### LV MASTER context
Röschen (rēschen) — rozīte
### Reason
Přepis „rēschen“ neukazuje německé ö a používá cizí anglické „sch“. Německé sch se vyslovuje [š]; příklad má zároveň demonstrovat zaokrouhlenou přední samohlásku ö.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 064

**Finding ID:** kurssPronunciationLesson/section[8]/example[1]
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Röschen (rēschen) - rozeta
### Luna PROPOSED
Röschen (röšen) – růžička
### DE context
Röschen (r | schen) - rozeta
### LV MASTER context
Röschen (rēschen) — rozīte
### Reason
Röschen je zdrobnělina od Rose, tedy „růžička“ nebo „malá růže“. Překlad „rozeta“ není pro začátečníka vhodný a mění význam příkladu.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 065

**Finding ID:** kurssPronunciationLesson/section[8]/example[3]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Öfen (öfen) - pece
### Luna PROPOSED
Öfen (přibližně öfen; ö je dlouhé přední zaokrouhlené e) — pece
### DE context
Öfen (öfen) - pece
### LV MASTER context
Öfen (ēfen) — krāsnis
### Reason
Zápis „öfen“ pouze opakuje německé písmeno ö; neposkytuje českému začátečníkovi srozumitelnou výslovnost ani neoznačuje, že v Öfen je dlouhé ö (/øː/). Jako výslovnostní aproximace je proto nedostatečný (PEDAGOGICALLY_ACCEPTABLE pouze v případě, že byla výslovnost ö vysvětlena bezprostředně předtím).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 066

**Finding ID:** kurssPronunciationLesson/section[8]/example[4]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Rock (rok) - sukně
### Luna PROPOSED
Rock (rok; o jako v českém „rok“) — sukně
### DE context
Rock (rok) - sukn
### LV MASTER context
Rock (rok) — svārki
### Reason
Zápis „rök“/„rok“ v aktuální podobě „rok“ neukazuje německé krátké ö (/œ/) v Rock? Pozor: německé slovo Rock samo obsahuje o, nikoli ö, takže je vhodným kontrastním příkladem, ale kontrast musí být pro začátečníka výslovně označen.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 067

**Finding ID:** kurssPronunciationLesson/section[8]/example[5]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Röcke (röke) - sukně
### Luna PROPOSED
Röcke (přibližně röke; krátké ö vyslovte jako přední zaokrouhlenou samohlásku) — sukně
### DE context
Röcke (röke) - sukn
### LV MASTER context
Röcke (röke) — svārki
### Reason
Zápis „röke“ ponechává německé ö bez vysvětlení jeho hodnoty (/œ/). Jako česká výslovnostní pomůcka je proto neúplný; samotné zachování písmene ö začátečníkovi neříká, jak hlásku vyslovit. Aproximace je nanejvýš PEDAGOGICALLY_ACCEPTABLE po předchozím výkladu ö.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 068

**Finding ID:** kurssPronunciationLesson/section[8]/p[0]
**Severity:** HIGH
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Ö je ladění o.
### Luna PROPOSED
Ö je přehláska písmene o. Vyslovuje se podobně jako české e, ale se zaokrouhlenými rty.
### DE context
Ö je lad | o.
### LV MASTER context
ö ir o pārskaņojums.
### Reason
„Ladění“ není v češtině přirozený ani odborně vhodný termín pro německou přehlásku. Věta také nevysvětluje skutečný zvuk ö ani jeho rozdíl oproti o.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 069

**Finding ID:** kurssPronunciationLesson/section[9]/example[1]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Kürzer (kurcer) - kratší
### Luna PROPOSED
Kürzer (přibližně kircér; krátké ü vyslovte s jazykem jako u i, ale se zaokrouhlenými rty) — kratší
### DE context
Kürzer (kurcer) - krat
### LV MASTER context
kürzer (kurcer) — īsāks
### Reason
V „Kürzer (kurcer)“ je ü nahrazeno českým u. To je MISLEADING_APPROXIMATION: německé krátké ü (/ʏ/) není české /u/, ale přední zaokrouhlená samohláska, přibližně mezi i a u. Zápis „c“ pro /ts/ je naopak použitelný.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 070

**Finding ID:** kurssPronunciationLesson/section[9]/example[3]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Künste (künste) — umění
### Luna PROPOSED
Künste (přibližně künste; krátké ü vyslovte s jazykem jako u i, ale se zaokrouhlenými rty) — umění
### DE context
Künste (künste)  | um
### LV MASTER context
Künste (künste) — mākslas
### Reason
„Künste (künste)“ opakuje německé ü a neuvádí jeho výslovnostní hodnotu. Písmeno ü není českému začátečníkovi samo o sobě návodem k výslovnosti; je třeba uvést, že jde o krátké přední zaokrouhlené ü (/ʏ/).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 071

**Finding ID:** kurssPronunciationLesson/section[9]/example[5]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Mütter (mumlat) - matky
### Luna PROPOSED
Mütter (přibližně müter; ü je krátké přední zaokrouhlené ü) — matky
### DE context
Mütter (mumlat) - matky
### LV MASTER context
Mütter (mutter) — mātes
### Reason
„Mütter (mumlat)“ není výslovnostní přepis, ale české sloveso „mumlat“, které navíc významově nesouvisí s německou výslovností ani s překladem „matky“. Jde o zjevnou chybu v kartě; aktuální zápis je pro začátečníka MISLEADING_APPROXIMATION.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 072

**Finding ID:** kurssPronunciationLesson/section[9]/p[0]
**Severity:** HIGH
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssPronunciationLesson
**Field:** lv

### CURRENT
Ü je transpozice u.
### Luna PROPOSED

```
Ü je německá přehláska u. Vyslovuje se jako přední zaokrouhlená samohláska: při poloze jazyka podobné českému i zaokrouhlete rty.
```

### DE context
Ü je transpozice u.
### LV MASTER context
ü ir u pārskaņojums.
### Reason
„Transpozice u“ není v češtině přirozené ani foneticky přesné označení. Ü není pouhá transpozice písmene nebo hlásky u; jde o německou přehlásku a o přední zaokrouhlenou samohlásku. Formulace může vést k chybnému závěru, že se u pouze mechanicky „přepíše“ na ü.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 073

**Finding ID:** kurssConsonantsLesson/section[0]/example[1]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Die Räder (räder) - kola
### Luna PROPOSED
Die Räder (rēder) — kola
### DE context
Die Räder (räder) - kola
### LV MASTER context
die Räder (rēder) — riteņi
### Reason
Přepis „räder“ pouze opakuje německý pravopis a neukazuje výslovnost. Dlouhé německé ä je pro začátečníka vhodné označit například jako „é“ nebo makronem; současný přepis může naznačovat krátké ä.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 074

**Finding ID:** kurssConsonantsLesson/section[0]/example[3]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Bäder (bäder) - koupele
### Luna PROPOSED
Bäder (bēder) — koupele
### DE context
Bäder (bäder) - koupele
### LV MASTER context
Bäder (bēder) — vannas
### Reason
Stejně jako u Räder je „bäder“ německý pravopis, nikoli srozumitelný přepis výslovnosti. Německé ä v Bäder je dlouhé a mělo by být v přepisu zřetelně označeno.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 075

**Finding ID:** kurssConsonantsLesson/section[0]/p[0]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Souhlásky na konci slova se často nevyslovují tak, jak jsou napsány.
### Luna PROPOSED
Na konci slova se v němčině některé znělé souhlásky, například b, d a g, vyslovují nezněle: jako p, t a k.
### DE context
Souhl | sky na konci slova se  | asto nevyslovuj | tak, jak jsou naps | ny.
### LV MASTER context
Vārda beigās līdzskaņi bieži netiek izrunāti tāpat kā rakstīti.
### Reason
Tvrzení je příliš obecné a může vést k chybám. V němčině se na konci slova typicky mění znělé obstruenty b, d, g na neznělé p, t, k; nelze obecně říci, že se souhlásky vyslovují jinak, než se píší.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 076

**Finding ID:** kurssConsonantsLesson/section[1]/example[4]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Mich (mih) - já
### Luna PROPOSED
Mich (mih) – mě / mne
### DE context
Mich (mih) - j
### LV MASTER context
mich (mih) — mani
### Reason
„Mich“ je akuzativní tvar zájmena „já“ a znamená „mě“ nebo „mne“, nikoli „já“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 077

**Finding ID:** kurssConsonantsLesson/section[1]/example[5]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Dich (dih) - ty
### Luna PROPOSED
Dich (dih) – tebe / tě
### DE context
Dich (dih) - ty
### LV MASTER context
dich (dih) — tevi
### Reason
„Dich“ je akuzativní tvar zájmena „ty“ a znamená „tebe“ nebo „tě“, nikoli „ty“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 078

**Finding ID:** kurssConsonantsLesson/section[1]/example[7]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Noch (noh) - ještě
### Luna PROPOSED
Noch (noch) – ještě
### DE context
Noch (noh) - je
### LV MASTER context
noch (noh) — vēl
### Reason
Přepis „noh“ představuje tvrdé německé [x] jako české „h“, což je MISLEADING_APPROXIMATION. Německé [x] je neznělé a artikulačně se přibližuje českému „ch“, nikoli českému „h“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 079

**Finding ID:** kurssConsonantsLesson/section[1]/example[8]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Nacht (naht) - noc
### Luna PROPOSED
Nacht (nacht) – noc
### DE context
Nacht (naht) - noc
### LV MASTER context
Nacht (naht) — nakts
### Reason
Přepis „naht“ představuje tvrdé německé [x] jako české „h“, což je MISLEADING_APPROXIMATION. Pro začátečníka je vhodnější upozornit na podobnost s českým „ch“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 080

**Finding ID:** kurssConsonantsLesson/section[1]/p[0]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
"ch" může být vyslovováno měkké nebo tvrdé. V některých slovech to zní jako "h", v jiných blíže k "k".
### Luna PROPOSED

```
Německé „ch“ má dvě hlavní výslovnosti: měkké [ç] po předních samohláskách a tvrdé [x] po zadních samohláskách. Tvrdé [x] se přibližně podobá českému „ch“; měkké [ç] vyslovujte jako silně změkčené, přední „ch“.
```

### DE context
ch" m | e b | t vyslovov | no m | kk
### LV MASTER context
“ch” var izrunāt mīksti vai cieti. Dažos vārdos tas skan kā “h”, citos tuvāk “k”.
### Reason
Tvrzení, že tvrdé německé „ch“ zní blíže českému „k“, je MISLEADING_APPROXIMATION. Ve slově Nacht/noch jde o neznělou velární frikativu [x], která je pro českého mluvčího výrazně blíže českému „ch“ než „k“. Měkké „ch“ je [ç] a také není totožné s českým „h“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 081

**Finding ID:** kurssConsonantsLesson/section[2]/example[1]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Schüler (schüler) - student
### Luna PROPOSED
Schüler (šýler) – student
### DE context
Schüler (schüler) - student
### LV MASTER context
Schüler (šūler) — skolēns
### Reason
Text v závorce „schüler“ je německý pravopis, nikoli výslovnostní přepis. Začátečník z něj nepozná, že „sch“ se vyslovuje jako „š“ a „ü“ jako přední zaokrouhlená samohláska.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 082

**Finding ID:** kurssConsonantsLesson/section[2]/example[3]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Schraube (šroub) - šroub
### Luna PROPOSED
Schraube (šraube) – šroub
### DE context
Schraube ( | roub) -  | roub
### LV MASTER context
Schraube (šraube) — skrūve
### Reason
„Schraube (šroub)“ není výslovnostní přepis německého slova, ale české slovo se stejným významem. Německé Schraube se vyslovuje přibližně [šraube], nikoli jako české „šroub“; liší se zejména posloupnost samohlásek a koncové -e.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 083

**Finding ID:** kurssConsonantsLesson/section[2]/p[0]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
„sch“ se v němčině vyslovuje jako českýé „š“.
### Luna PROPOSED
„sch“ se v němčině vyslovuje jako české „š“.
### DE context
sch“ se v n | in | vyslovuje jako  | esk
### LV MASTER context
“sch” vācu valodā izrunā kā latviešu “š”.
### Reason
Tvar „českýé“ je pravopisná a gramatická chyba. Správně je „české“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 084

**Finding ID:** kurssConsonantsLesson/section[3]/example[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** section[3].example[0]

### CURRENT
Spielen (špīlen) - hrát si
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Spielen ( | len) - hr | t si
### LV MASTER context
spielen (špīlen) — spēlēt
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 085

**Finding ID:** kurssConsonantsLesson/section[3]/example[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Pružina - skok
### Luna PROPOSED
Sprung (šprung) – skok
### DE context
Pru | ina - skok
### LV MASTER context
Sprung (šprung) — lēciens
### Reason
Položka neobsahuje německý příklad; „Pružina“ je český výraz. V lekci německé výslovnosti tak chybí slovo s počátečním „Spr-“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 086

**Finding ID:** kurssConsonantsLesson/section[3]/example[1]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Pružina - skok
### Luna PROPOSED
Sprung (šprung) – skok
### DE context
Pru | ina - skok
### LV MASTER context
Sprung (šprung) — lēciens
### Reason
„Pružina“ je české slovo a znamená spring, nikoli německý příklad pro počáteční „Sp“. Význam „skok“ odpovídá německému slovu Sprung, které v položce chybí.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 087

**Finding ID:** kurssConsonantsLesson/section[3]/example[2]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Stehen (steen) - stát
### Luna PROPOSED
Stehen (štéen) – stát
### DE context
Stehen (steen) - st
### LV MASTER context
stehen (štēen) — stāvēt
### Reason
Německé stehen začíná výslovností [št-], ale přepis „steen“ vede českého začátečníka k výslovnosti [st-]. Tím příklad nedemonstruje pravidlo probírané v této části.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 088

**Finding ID:** kurssConsonantsLesson/section[3]/example[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Stáj (štal) - stodola
### Luna PROPOSED
Stall (štal) – stáj
### DE context
St | j ( | tal) - stodola
### LV MASTER context
Stall (štal) — kūts
### Reason
Položka používá české slovo „Stáj“ místo německého příkladu. Jde o cizí zbytek v německé části kurzu.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 089

**Finding ID:** kurssConsonantsLesson/section[3]/example[3]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Stáj (štal) - stodola
### Luna PROPOSED
Stall (štal) – stáj
### DE context
St | j ( | tal) - stodola
### LV MASTER context
Stall (štal) — kūts
### Reason
„Stáj“ je české slovo, zatímco německý příklad pro výslovnost počátečního „St“ má být Stall. Navíc český význam „stodola“ neodpovídá slovu „stáj“ přesně.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 090

**Finding ID:** kurssConsonantsLesson/section[3]/example[4]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Stand (stant) - pozice / místo
### Luna PROPOSED
Stand (štant) – pozice / místo
### DE context
Stand (stant) - pozice / m | sto
### LV MASTER context
Stand (štant) — stāvoklis / vieta
### Reason
Německé Stand se vyslovuje přibližně [štant]. Přepis „stant“ zachovává českou výslovnost [st-], a proto nesprávně demonstruje pravidlo pro počáteční „St“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 091

**Finding ID:** kurssConsonantsLesson/section[4]/example[1]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Quartier (quartier) - čtvrť / ubytování
### Luna PROPOSED
Quartier (kvartýr) — čtvrť / ubytování
### DE context
Quartier (quartier) -  | tvr | ubytov
### LV MASTER context
Quartier (kvartīr) — kvartāls / apmešanās vieta
### Reason
Výslovnost „quartier“ je ponechána v německém pravopisu, takže začátečník nedostane českou výslovnostní nápovědu. Přibližná česká transkripce „kvartýr“ je PEDAGOGICALLY_ACCEPTABLE; německé koncové r je navíc vokalizované.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 092

**Finding ID:** kurssConsonantsLesson/section[4]/example[2]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Quer (квер) — napříč
### Luna PROPOSED
Quer (kvér) — napříč
### DE context
Quer ( | nap
### LV MASTER context
quer (kvēr) — šķērsām
### Reason
Výslovnost je zapsána cyrilicí „квер“, což je pro český kurz cizí zápis a navíc neoznačuje německé dlouhé e. Jde o FOREIGN_LEFTOVER; česká přibližná transkripce „kvér“ je PEDAGOGICALLY_ACCEPTABLE.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 093

**Finding ID:** kurssConsonantsLesson/section[5]/example[0]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Sagen (zagen) — říci
### Luna PROPOSED
Sagen (zāgen) — říci
### DE context
Sagen (zagen)  | ci
### LV MASTER context
sagen (zāgen) — teikt
### Reason
Transkripce „zagen“ neukazuje dlouhé německé a [aː], přestože kurz používá délkovou značku v jiných příkladech. „zāgen“ je PEDAGOGICALLY_ACCEPTABLE česká aproximace.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 094

**Finding ID:** kurssConsonantsLesson/section[5]/example[3]
**Severity:** CRITICAL
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Zahl (kuře) - číslo
### Luna PROPOSED
Zahl (cāl) — číslo
### DE context
Zahl (ku | e) -  | slo
### LV MASTER context
Zahl (cāl) — skaitlis
### Reason
„kuře“ není výslovnost slova Zahl, ale české slovo s významem „chicken“. Německé Zahl se vyslovuje přibližně [tsaːl], tedy „cāl“. Současný zápis je PHONETICALLY_WRONG a současně vytváří významový zmatek.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 095

**Finding ID:** kurssConsonantsLesson/section[5]/p[0]
**Severity:** HIGH
**Category:** CS_GRAMMAR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
"S" na začátku slova často zní jako "z". Písmeno „z“ v němčině zní jako českýé „c“.
### Luna PROPOSED
„S“ na začátku slova často zní jako „z“. Písmeno „z“ v němčině zní jako české „c“.
### DE context
S" na za | tku slova  | asto zn | jako "z". P | smeno „z“ v n
### LV MASTER context
Vārda sākumā “s” bieži skan kā “z”. Burts “z” vācu valodā skan kā latviešu “c”.
### Reason
Tvar „českýé“ je gramaticky i pravopisně chybný; správně je „české“. Věcně je přirovnání německého z k českému c ACCURATE_APPROXIMATION.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 096

**Finding ID:** kurssConsonantsLesson/section[6]/example[0]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Vater (otec) - otec
### Luna PROPOSED
Vater (fāter) — otec
### DE context
Vater (otec) - otec
### LV MASTER context
Vater (fāter) — tēvs
### Reason
V závorce je uveden překlad „otec“, nikoli výslovnost. Výslovnostní údaj pro Vater chybí, takže příklad nesplňuje svou funkci. Přibližné „fāter“ je PEDAGOGICALLY_ACCEPTABLE.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 097

**Finding ID:** kurssConsonantsLesson/section[6]/p[0]
**Severity:** HIGH
**Category:** CS_GRAMMAR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
V němčině se „v“ často vyslovuje jako „f“. V cizích slovech to často zní jako českýé „v“.
### Luna PROPOSED
V němčině se „v“ často vyslovuje jako „f“. V cizích slovech často zní jako české „v“.
### DE context
V n | in | se „v“  | asto vyslovuje jako „f“. V ciz | ch slovech to 
### LV MASTER context
Vācu valodā “v” bieži izrunā kā “f”. Svešvārdos tas bieži skan kā latviešu “v”.
### Reason
Tvar „českýé“ je gramaticky i pravopisně chybný; správně je „české“. Obsahové rozlišení mezi běžnými německými slovy s v = [f] a mnoha cizími slovy s [v] je jinak PEDAGOGICALLY_ACCEPTABLE.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 098

**Finding ID:** kurssConsonantsLesson/section[7]/example[0]
**Severity:** MEDIUM
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Felix (Felix) - Felix
### Luna PROPOSED
Felix (fēliks) — Felix
### DE context
Felix (Felix) - Felix
### LV MASTER context
Felix (fēliks) — Fēlikss
### Reason
„Felix“ v závorce opakuje německý pravopis, nikoli výslovnost. Německé Felix má přibližně výslovnost [ˈfeːlɪks], takže současný zápis je pro začátečníka neúplný.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 099

**Finding ID:** kurssConsonantsLesson/section[7]/example[2]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** lv

### CURRENT
Mystik (mūstik) - mystika
### Luna PROPOSED
Mystik (müstik; y jako krátké německé „ü“) — mystika
### DE context
Mystik (m | stik) - mystika
### LV MASTER context
Mystik (mūstik) — mistika
### Reason
Německé y ve slově Mystik označuje krátkou přední zaokrouhlenou samohlásku [ʏ], nikoli dlouhé [uː]. Zápis „mūstik“ je proto PHONETICALLY_WRONG a může vést k nesprávné délce i kvalitě samohlásky.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 100

**Finding ID:** kurssConsonantsLesson/section[7]/example[4]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** section[7].example[4]

### CURRENT
Mythe (ústa) - mýtus
### Luna PROPOSED
Mythe (mýte) – mýtus
### DE context
Mythe ( | sta) - m | tus
### LV MASTER context
Mythe (mūte) — mīts
### Reason
Německé slovo „Mythe“ znamená „mýtus“, nikoli „ústa“. Text proto obsahuje rozporný význam a není jasné, co má závorka označovat.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 101

**Finding ID:** kurssConsonantsLesson/section[9]/li[2]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** section[9].li[2]

### CURRENT
Qu → sq
### Luna PROPOSED
Qu → kv
### DE context
Qu  | sq
### LV MASTER context
qu → kv
### Reason
Německé „qu“ se vyslovuje přibližně jako české „kv“, nikoli „sq“. Jde o foneticky chybnou a pro začátečníka zavádějící pomůcku.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 102

**Finding ID:** kurssConsonantsLesson/section[9]/li[4]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** section[9].li[4]

### CURRENT
V často → f
### Luna PROPOSED
V se často vyslovuje jako f
### DE context
asto 
### LV MASTER context
v bieži → f
### Reason
Shrnutí „V často → f“ je neúplná a nepřirozená věta. Není uvedeno, že německé písmeno v se v mnoha slovech vyslovuje jako [f].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 103

**Finding ID:** kurssConsonantsLesson/section[9]/li[6]
**Severity:** MEDIUM
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssConsonantsLesson
**Field:** section[9].li[6]

### CURRENT
SS → s
### Luna PROPOSED
ß → s
### DE context
SS 
### LV MASTER context
ß → s
### Reason
Celá sekce je věnována písmenu ß, ale shrnutí uvádí „SS“. To může začátečníka zmást; SS a ß jsou pravopisně související, nikoli totožné označení v tomto shrnutí.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 104

**Finding ID:** kurssLesson1/legacyVyslovnost/example[0]
**Severity:** MEDIUM
**Category:** CS_NATURALNESS
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson1
**Field:** legacyHtml.Výslovnost.example[0]

### CURRENT
Na přednáškách je uvedena správná výslovnost slov označených českými písmeny.
### Luna PROPOSED
Na přednáškách je uvedena správná výslovnost slov přepsaná českými písmeny.
### DE context
Na p | edn | ch je uvedena spr | vn | slovnost slov ozna
### LV MASTER context
Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
### Reason
Spojení „slov označených českými písmeny“ není přirozené ani významově přesné. Pravděpodobně se myslí slova přepsaná nebo opatřená výslovnostní pomůckou v českých písmenech.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 105

**Finding ID:** kurssLesson1/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson1
**Field:** legacyHtml.Výslovnost.example[1]

### CURRENT
Wir (člověk) - my. Ve slově wir ī se vždy vyslovuje dlouze.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Wir ( | lov | k) - my. Ve slov | wir  | se v
### LV MASTER context
Wir (vīr) — mēs. Vārdā wir ī izrunājams vienmēr gari.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 106

**Finding ID:** kurssLesson1/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson1
**Field:** legacyHtml.Výslovnost.example[1]

### CURRENT
Wir (člověk) - my. Ve slově wir ī se vždy vyslovuje dlouze.
### Luna PROPOSED
Wir (vīr) – my. Ve slově wir se i vyslovuje vždy dlouze.
### DE context
Wir ( | lov | k) - my. Ve slov | wir  | se v
### LV MASTER context
Wir (vīr) — mēs. Vārdā wir ī izrunājams vienmēr gari.
### Reason
Německé „wir“ znamená „my“, nikoli „člověk“. Závorka proto obsahuje chybný význam a současně není jasné, zda má označovat překlad, nebo výslovnost.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 107

**Finding ID:** kurssLesson2/legacyVyslovnost/example[0]
**Severity:** HIGH
**Category:** MISLEADING_APPROXIMATION
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson2
**Field:** legacyHtml.Výslovnost.example[0]

### CURRENT
Ve slovech ich, nicht, rechnen, zeichnen se hláska ch vyslovuje měkce, jako v českých slovech: technika, Fridrich.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ve slovech ich, nicht, rechnen, zeichnen se hl | ska ch vyslovuje m | kce, jako v  | esk | ch slovech
### LV MASTER context
Vārdos ich, nicht, rechnen, zeichnen skaņu ch izrunā mīksti, apmēram tā, kā latviski vārdos: technika, Frīdrihs.
### Reason
Německé ch ve slovech „ich“, „nicht“, „rechnen“ a „zeichnen“ je palatální [ç]. České ch ve slovech „technika“ a „Fridrich“ je běžně [x], takže uvedené srovnání není přesné a může vést k nesprávné výslovnosti.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 108

**Finding ID:** kurssLesson2/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson2
**Field:** legacyHtml.Výslovnost.example[1]

### CURRENT
Ve slovech arbeiten, zeichnen se dvojhláska ei vyslovuje zhruba jako českýá hláska ploché e následovaná i.
### Luna PROPOSED
Ve slovech arbeiten a zeichnen se dvojhláska ei vyslovuje přibližně jako české aj.
### DE context
Ve slovech arbeiten, zeichnen se dvojhl | ska ei vyslovuje zhruba jako  | esk | hl | ska ploch
### LV MASTER context
Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
### Reason
Text obsahuje překlep „českýá“ místo „česká“. Navíc německé ei se nevyslovuje jako české „e“ následované „i“, ale přibližně jako dvojhláska [aɪ̯]; uvedené srovnání je proto zavádějící.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 109

**Finding ID:** kurssLesson2/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson2
**Field:** legacyHtml.Výslovnost.example[2]

### CURRENT
Shluk souhlásek sp se vyslovuje jako šp: ​​spielen (špīlen).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Shluk souhl | sek sp se vyslovuje jako  | spielen ( | len).
### LV MASTER context
Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 110

**Finding ID:** kurssLesson2/legacyVyslovnost/example[2]
**Severity:** LOW
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson2
**Field:** legacyHtml.Výslovnost.example[2]

### CURRENT
Shluk souhlásek sp se vyslovuje jako šp: ​​spielen (špīlen).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Shluk souhl | sek sp se vyslovuje jako  | spielen ( | len).
### LV MASTER context
Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
### Reason
Před slovem „spielen“ jsou obsaženy neviditelné řídicí znaky. Ty mohou při zobrazení nebo kopírování způsobovat nežádoucí mezery či jiné artefakty; výslovnostní přepis „špīlen“ je jako orientační česká pomůcka přijatelný.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 111

**Finding ID:** kurssLesson2/legacyVyslovnost/example[3]
**Severity:** MEDIUM
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson2
**Field:** legacyHtml.Výslovnost.example[3]

### CURRENT
Sloveso tun u se ve všech osobách vyslovuje dlouze.
### Luna PROPOSED
Sloveso tun se ve všech osobách vyslovuje s dlouhým u.
### DE context
Sloveso tun u se ve v | ech osob | ch vyslovuje dlouze.
### LV MASTER context
Darbības vārdā tun u izrunājams gari visās personās.
### Reason
Ve spojení „Sloveso tun u“ je nadbytečné „u“, které působí jako zbytkový nebo chybný text a znejasňuje, co se má vyslovovat.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 112

**Finding ID:** kurssLesson3/legacyVyslovnost/example[1]
**Severity:** MEDIUM
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson3
**Field:** legacyHtml.Výslovnost.example[1]

### CURRENT
Ck je dvojité k: dick (dikk).
### Luna PROPOSED
Ck jsou dvě písmena pro jednu hlásku [k]: dick (dikk).
### DE context
Ck je dvojit | dick (dikk).
### LV MASTER context
ck ir divkāršs k: dick (dikk).
### Reason
„Ck je dvojité k“ směšuje písmena se zvukem: ck jsou dvě písmena, která v němčině označují jednu souhlásku [k]. Navíc se v tomto pravopisném pravidle běžně píše malé „ck“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 113

**Finding ID:** kurssLesson3/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** MISLEADING_APPROXIMATION
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson3
**Field:** legacyHtml.Výslovnost.example[2]

### CURRENT
V přídavných jménech a příslovcích zní koncovka -ig jako lehké -ich: niedrig (nīdrich).
### Luna PROPOSED
V přídavných jménech a příslovcích se koncovka -ig často vyslovuje s německým měkkým ch [ç]: niedrig (nīdrich).
### DE context
V p | davn | ch jm | nech a p | slovc
### LV MASTER context
Īpašības un apstākļu vārdos galotne -ig izskan kā viegls -ich: niedrig (nīdrich).
### Reason
Německé koncové -ig se ve standardní výslovnosti často vyslovuje [ɪç]. České „ch“ je však [x], nikoli [ç], takže formulace „jako lehké -ich“ a přepis „nīdrich“ mohou vést k nesprávné artikulaci.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 114

**Finding ID:** kurssLesson3/legacyVyslovnost/example[3]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson3
**Field:** legacyHtml.Výslovnost.example[3]

### CURRENT
Pokud koncovka -ig končí na e: -ige, pak se g vyslovuje jako určitá hláska g: niedrige (nídrige) Bänke.
### Luna PROPOSED
Pokud po -ig následuje koncovka -e, vyslovuje se g jako tvrdé [g]: niedrige (nídrige) Bänke.
### DE context
Pokud koncovka -ig kon | na e | ige, pak se g vyslovuje jako ur | it | hl
### LV MASTER context
Ja galotne -ig beidzas ar e: -ige, tad g izrunā kā noteiktu g skaņu: niedrige (nīdrige) Bänke.
### Reason
Formulace „určitá hláska g“ je vágní. Začátečník se nedozví, že v této poloze jde o běžné tvrdé [g], na rozdíl od výslovnosti -ig na konci slova.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 115

**Finding ID:** kurssLesson4/legacyVyslovnost/example[1]
**Severity:** MEDIUM
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson4
**Field:** lv

### CURRENT
H v němčině může být jak zvuk, tak značka délky pro předchozí samohlásku.
### Luna PROPOSED
Písmeno h v němčině může označovat hlásku [h], nebo může být němé a označovat délku předchozí samohlásky.
### DE context
H v n | in | e b | t jak zvuk, tak zna | ka d
### LV MASTER context
h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.
### Reason
Formulace směšuje písmeno a hlásku: písmeno h může označovat hlásku [h], nebo může být němé a označovat délku předchozí samohlásky. H samo o sobě není „zvuk“ ani „značka délky“ bez upřesnění.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 116

**Finding ID:** kurssLesson4/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson4
**Field:** lv

### CURRENT
Je-li h dlouhé, nevyslovuje se jako zvuk: nehmen (nēmen).
### Luna PROPOSED
Je-li h němé a označuje délku předchozí samohlásky, nevyslovuje se jako samostatný zvuk: nehmen (nēmen).
### DE context
Je-li h dlouh | nevyslovuje se jako zvuk | nehmen (n | men).
### LV MASTER context
Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
### Reason
Není správné říkat, že h je dlouhé. Dlouhá je předchozí samohláska; v příkladu nehmen je h němé a pouze označuje její délku. Jde také o terminologické směšování písmene a zvuku.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 117

**Finding ID:** kurssLesson4/legacyVyslovnost/example[3]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson4
**Field:** lv

### CURRENT

```
Pokud za samohláskou následuje pouze jedna souhláska, vyslovuje se samohláska dlouze: die (dī) Feder (fēder), den (dēn).
```

### Luna PROPOSED

```
V otevřené slabice bývá samohláska často dlouhá: die (dī), Feder (fēder). Dlouhá je také v některých dalších pravopisných vzorcích, například den (dēn); toto pravidlo má výjimky.
```

### DE context
Pokud za samohl | skou n | sleduje pouze jedna souhl | ska, vyslovuje se samohl | ska dlouze
### LV MASTER context
Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
### Reason
Pravidlo je podané příliš absolutně a může začátečníka zmást. Délku německé samohlásky nelze obecně určit pouze podle toho, že po ní následuje jedna souhláska; záleží také na typu slabiky, pravopisu a výjimkách. Příklad die navíc žádnou následující souhlásku nemá.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 118

**Finding ID:** kurssLesson5/legacyVyslovnost/example[0]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson5
**Field:** lv

### CURRENT
Tz je zdvojený zvuk z a vyslovuje se jako z: sitzen (zicen).
### Luna PROPOSED
Písmena tz označují hlásku [ts], podobně jako německé z: sitzen (cicen).
### DE context
Tz je zdvojen | zvuk z a vyslovuje se jako z | sitzen (zicen).
### LV MASTER context
tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).
### Reason
Německé tz označuje hlásku [ts], nikoli zdvojený zvuk [z]. Přepis „zicen“ je pro českého žáka zavádějící, protože české z neodpovídá německému [ts]. Jde také o záměnu písmene, hlásky a zvuku.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 119

**Finding ID:** kurssLesson5/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson5
**Field:** lv

### CURRENT
V se v německých slovech vyslovuje jako f: der Vater (fäter).
### Luna PROPOSED
V se v mnoha původně německých slovech vyslovuje jako f: der Vater (fāter).
### DE context
V se v n | meck | ch slovech vyslovuje jako f | der Vater (fäter).
### LV MASTER context
v vācu vārdos izrunā kā f: der Vater (fāter).
### Reason
Přepis „fäter“ nesprávně naznačuje krátkou hlásku podobnou českému ä/e. Ve slově Vater je a dlouhé: [faːtɐ].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 120

**Finding ID:** kurssLesson5/legacyVyslovnost/example[1]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson5
**Field:** lv

### CURRENT
V se v německých slovech vyslovuje jako f: der Vater (fäter).
### Luna PROPOSED

```
V se v mnoha původně německých slovech vyslovuje jako f: der Vater (fāter). V přejatých slovech se může vyslovovat také jako v.
```

### DE context
V se v n | meck | ch slovech vyslovuje jako f | der Vater (fäter).
### LV MASTER context
v vācu vārdos izrunā kā f: der Vater (fāter).
### Reason
Výrok „V se v německých slovech vyslovuje jako f“ je příliš obecný. V přejatých slovech může německé v označovat [v].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 121

**Finding ID:** kurssLesson5/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson5
**Field:** lv

### CURRENT
SS se nazývá escet a vyslovuje se jako českýé s: groß (grōs), weiß (veis).
### Luna PROPOSED
ß se nazývá eszett a vyslovuje se jako české s: groß (grōs), weiß (vais).
### DE context
SS se naz | escet a vyslovuje se jako  | esk | groß (gr | s), weiß (veis).
### LV MASTER context
ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
### Reason
Text obsahuje překlep „českýé s“; správně je „české s“. Navíc se zde hovoří o SS, ale oba příklady obsahují písmeno ß, nikoli skupinu SS.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 122

**Finding ID:** kurssLesson5/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson5
**Field:** lv

### CURRENT
SS se nazývá escet a vyslovuje se jako českýé s: groß (grōs), weiß (veis).
### Luna PROPOSED
Písmeno ß se nazývá eszett a vyslovuje se jako české s: groß (grōs), weiß (vais).
### DE context
SS se naz | escet a vyslovuje se jako  | esk | groß (gr | s), weiß (veis).
### LV MASTER context
ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
### Reason
Písmeno ß se v češtině běžně nazývá eszett; „SS“ není jeho název ani přesný popis v uvedených příkladech. Příklady groß a weiß obsahují ß.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 123

**Finding ID:** kurssLesson6/legacyVyslovnost/example[0]
**Severity:** HIGH
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson6
**Field:** lv

### CURRENT
Ä je podtext samohlásky a a vyslovuje se jako krátké nebo dlouhé úzké e.
### Luna PROPOSED
Ä je přehláska písmene a. Vyslovuje se přibližně jako krátké nebo dlouhé e: der Bäcker (bēker), das Mädchen (mētchen).
### DE context
Ä je podtext samohl | sky a a vyslovuje se jako kr | tk | nebo dlouh | zk
### LV MASTER context
ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.
### Reason
Výraz „podtext samohlásky“ je v češtině nesprávný a významově nejasný. Ä je přehláska písmene a, nikoli podtext. Popis „úzké e“ je pro německé ä navíc nepřesný; jde přibližně o krátké nebo dlouhé [ɛ].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 124

**Finding ID:** kurssLesson6/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** TRANSCRIPTION_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson6
**Field:** lv

### CURRENT
Příklady: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
### Luna PROPOSED
Příklady: das Mädchen (metchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
### DE context
klady | das Mädchen (m | tchen), die Bänke (d | benke), der Vater (d | r f
### LV MASTER context
Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
### Reason
V přepisu „mētchen“ je dlouhé ē, ale ve slově Mädchen je ä krátké. Makronová notace zde proto označuje nesprávnou délku.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 125

**Finding ID:** kurssLesson6/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson6
**Field:** lv

### CURRENT
Ü je podtext samohlásky u. Při jeho vyslovování by měly být rty velmi zaoblené a pokuste se vyslovit i s kulatými rty.
### Luna PROPOSED

```
Ü je přehláska písmene u. Při jeho vyslovování mějte rty výrazně zaoblené a pokuste se vyslovit i, aniž byste zaoblení rtů změnili.
```

### DE context
Ü je podtext samohl | sky u. P | i jeho vyslovov | by m | ly b
### LV MASTER context
ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.
### Reason
„Podtext samohlásky“ je nesprávný termín; správně je „přehláska písmene u“. Druhá věta je navíc gramaticky neobratná a opakuje stejnou instrukci.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 126

**Finding ID:** kurssLesson6/legacyVyslovnost/example[4]
**Severity:** MEDIUM
**Category:** CS_NATURALNESS
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson6
**Field:** lv

### CURRENT
Ö vyslovuje se zaoblenými rty, snaží se vyslovit e: der Löffel.
### Luna PROPOSED
Ö se vyslovuje se zaokrouhlenými rty; postavte jazyk jako při výslovnosti e a rty zaokrouhlete.
### DE context
Ö vyslovuje se zaoblen | mi rty, sna | se vyslovit e | der Löffel.
### LV MASTER context
ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.
### Reason
Věta nemá přirozenou českou formulaci: „snaží se vyslovit e“ střídá neosobní popis s nejasným podmětem. Začátečník také nedostává jasný návod, že jde o kombinaci polohy jazyka pro e a zaokrouhlených rtů.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 127

**Finding ID:** kurssLesson7/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson7
**Field:** legacyHtml.Výslovnost.example[1]

### CURRENT
Sch se vyslovuje jako českýé š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Sch se vyslovuje jako  | esk | die Schaufel (d | aufel), die Schüssel (d | sel).
### LV MASTER context
sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 128

**Finding ID:** kurssLesson7/legacyVyslovnost/example[1]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson7
**Field:** lv

### CURRENT
Sch se vyslovuje jako českýé š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
### Luna PROPOSED
Sch se vyslovuje jako české š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
### DE context
Sch se vyslovuje jako  | esk | die Schaufel (d | aufel), die Schüssel (d | sel).
### LV MASTER context
sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).
### Reason
Text obsahuje překlep „českýé š“; správně je „české š“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 129

**Finding ID:** kurssLesson7/legacyVyslovnost/example[2]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson7
**Field:** lv

### CURRENT
Dvojhláska äu se vyslovuje jako českýé oi: das Fräulein (das froilein).
### Luna PROPOSED
Dvojhláska äu se vyslovuje přibližně jako české oi: das Fräulein (das froilein).
### DE context
Dvojhl | ska äu se vyslovuje jako  | esk | oi | das Fräulein (das froilein).
### LV MASTER context
Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).
### Reason
Text obsahuje překlep „českýé oi“; správně je „české oi“.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 130

**Finding ID:** kurssLesson8/section[2]/item[1]
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson8
**Field:** lv

### CURRENT
Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
### Luna PROPOSED
Ä se někdy vyslovuje také jako otevřenější e, například ve slově der Gärtner (dēr gertner).
### DE context
Ä v | l izrun | ar | plato e, piem | ram, v
### LV MASTER context
ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
### Reason
Celý uživatelsky viditelný text je v lotyštině. Jde o cizojazyčný zbytek, který českému uživateli znemožňuje porozumění.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 131

**Finding ID:** kurssLesson8/section[2]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson8
**Field:** sections[2].items[1]

### CURRENT
Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ä v | l izrun | ar | plato e, piem | ram, v
### LV MASTER context
ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
### Reason
Latviešu atlikums (LV_WORD)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 132

**Finding ID:** kurssLesson8/section[2]/item[4]
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson8
**Field:** lv

### CURRENT
SS izrunā kā s: grüßen (grüsen).
### Luna PROPOSED
ß se vyslovuje jako s: grüßen (grüsen).
### DE context
SS izrun | grüßen (grüsen).
### LV MASTER context
ß izrunā kā s: grüßen (grüsen).
### Reason
Celý uživatelsky viditelný text je v lotyštině. Navíc uvádí „SS“, zatímco příklad grüßen obsahuje ß.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 133

**Finding ID:** kurssLesson8/section[2]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson8
**Field:** sections[2].items[4]

### CURRENT
SS izrunā kā s: grüßen (grüsen).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
SS izrun | grüßen (grüsen).
### LV MASTER context
ß izrunā kā s: grüßen (grüsen).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 134

**Finding ID:** kurssLesson8/section[2]/item[5]
**Severity:** CRITICAL
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson8
**Field:** lv

### CURRENT
Eu izrunā kā oi: deutlich (doitlich).
### Luna PROPOSED
Eu se vyslovuje přibližně jako oi: deutlich (doitlich).
### DE context
Eu izrun | oi | deutlich (doitlich).
### LV MASTER context
eu izrunā kā oi: deutlich (doitlich).
### Reason
Celý uživatelsky viditelný text je v lotyštině. Český uživatel nedostává české vysvětlení pravidla.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 135

**Finding ID:** kurssLesson8/section[2]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson8
**Field:** sections[2].items[5]

### CURRENT
Eu izrunā kā oi: deutlich (doitlich).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Eu izrun | oi | deutlich (doitlich).
### LV MASTER context
eu izrunā kā oi: deutlich (doitlich).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 136

**Finding ID:** kurssLesson10/section[2]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Pareizi jāizrunā patskaņu pārkaņojumi.
### Luna PROPOSED
Správně vyslovujeme přehlásky.
### DE context
Pareizi j | izrun | patska | u p | rka
### LV MASTER context
Pareizi jāizrunā patskaņu pārkaņojumi.
### Reason
Text je celý v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 137

**Finding ID:** kurssLesson10/section[2]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[0]

### CURRENT
Pareizi jāizrunā patskaņu pārkaņojumi.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Pareizi j | izrun | patska | u p | rka
### LV MASTER context
Pareizi jāizrunā patskaņu pārkaņojumi.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 138

**Finding ID:** kurssLesson10/section[2]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
### Luna PROPOSED
Ö se vyslovuje se zaokrouhlenými rty podobně jako české e: wir können, ihr könnt, sie können, der Löffel.
### DE context
Ö izrun | ar apa | ot | m l | m k
### LV MASTER context
ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
### Reason
Text je v lotyštině. Přirovnání německého ö k českému e je pouze přibližné, ale pedagogicky přijatelné (PEDAGOGICALLY_ACCEPTABLE), pokud se výslovně uvede, že rty zůstávají zaokrouhlené.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 139

**Finding ID:** kurssLesson10/section[2]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[1]

### CURRENT
Ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ö izrun | ar apa | ot | m l | m k
### LV MASTER context
ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 140

**Finding ID:** kurssLesson10/section[2]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
### Luna PROPOSED
Ü se vyslovuje se zaokrouhlenými rty podobně jako české i: Müller (miller), Bücher (býcher).
### DE context
Ü izrun | ar apa | ot | m l | m k
### LV MASTER context
ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
### Reason
Text je v lotyštině. Přirovnání německého ü k českému i je pouze přibližné, ale pedagogicky přijatelné (PEDAGOGICALLY_ACCEPTABLE), pokud se zdůrazní zaokrouhlení rtů.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 141

**Finding ID:** kurssLesson10/section[2]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[2]

### CURRENT
Ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ü izrun | ar apa | ot | m l | m k
### LV MASTER context
ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 142

**Finding ID:** kurssLesson10/section[2]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
### Luna PROPOSED
Délka samohlásky často závisí na následujících souhláskách.
### DE context
Patska | u garums vai  | sums atkar | gs no sekojo | iem l
### LV MASTER context
Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 143

**Finding ID:** kurssLesson10/section[2]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[3]

### CURRENT
Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Patska | u garums vai  | sums atkar | gs no sekojo | iem l
### LV MASTER context
Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 144

**Finding ID:** kurssLesson10/section[2]/item[4]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Ja patskanim seko viens līdzskanis, patskani izrunā gari: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
### Luna PROPOSED
Po jedné souhlásce bývá samohláska často dlouhá, nejde však o bezvýjimečné pravidlo.
### DE context
Ja patskanim seko viens l | dzskanis, patskani izrun | gari | Vögel (f | gel), Schüler (
### LV MASTER context
Ja patskanim seko viens līdzskanis, patskani izrunā gari: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
### Reason
Pravidlo, že po jedné souhlásce je samohláska dlouhá, je příliš absolutní. Jde jen o užitečné vodítko; délku ovlivňuje také slabiková struktura, přízvuk a konkrétní slovo.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 145

**Finding ID:** kurssLesson10/section[2]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
### Luna PROPOSED
Následují-li po samohlásce dvě nebo více souhlásek, samohláska bývá krátká: wir können, der Löffel, der Müller.
### DE context
Ja patskanim seko divi vai vair | ki l | dzska | i, patskani izrun | si
### LV MASTER context
Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 146

**Finding ID:** kurssLesson10/section[2]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[5]

### CURRENT
Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ja patskanim seko divi vai vair | ki l | dzska | i, patskani izrun | si
### LV MASTER context
Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
### Reason
Latviešu atlikums (LV_PHRASE)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 147

**Finding ID:** kurssLesson10/section[2]/item[5]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
### Luna PROPOSED
Po dvou nebo více souhláskách bývá samohláska často krátká, nejde však o bezvýjimečné pravidlo.
### DE context
Ja patskanim seko divi vai vair | ki l | dzska | i, patskani izrun | si
### LV MASTER context
Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
### Reason
Pravidlo je formulováno příliš absolutně. Dvě souhlásky často signalizují krátkou samohlásku, ale nejde o univerzální pravidlo německé výslovnosti.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 148

**Finding ID:** kurssLesson10/section[2]/item[6]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
### Luna PROPOSED

```
České o je monoftong, nikoli dvojhláska uo. Německé o se vyslovuje jinak, například ve slovech Fonds, Nominativ a Fotograf.
```

### DE context
esk | valodas o ir divskanis uo. V | cu o skan cit | di, piem | ram
### LV MASTER context
Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
### Reason
Text je převážně v lotyštině; výraz „Český valodas“ je navíc smíšený a gramaticky nesprávný.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 149

**Finding ID:** kurssLesson10/section[2]/item[6]
**Severity:** HIGH
**Category:** SEMANTIC_MISMATCH
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
### Luna PROPOSED
České o je monoftong, nikoli dvojhláska uo.
### DE context
esk | valodas o ir divskanis uo. V | cu o skan cit | di, piem | ram
### LV MASTER context
Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
### Reason
Tvrzení, že české o je dvojhláska uo, je věcně nesprávné. České o je samostatná monoftongická samohláska.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 150

**Finding ID:** kurssLesson10/section[2]/item[6]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[6]

### CURRENT
Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
esk | valodas o ir divskanis uo. V | cu o skan cit | di, piem | ram
### LV MASTER context
Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
### Reason
Latviešu atlikums (LV_WORD)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 151

**Finding ID:** kurssLesson10/section[2]/item[7]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Pareizi izrunā: der Großvater (dēr grōsfāter).
### Luna PROPOSED
Správná výslovnost: der Großvater [deːɐ̯ ˈɡʁoːsˌfaːtɐ].
### DE context
Pareizi izrun | der Großvater (d | r gr | sf | ter).
### LV MASTER context
Pareizi izrunā: der Großvater (dēr grōsfāter).
### Reason
Text je v lotyštině, nikoli v češtině. Uvedená aproximace dlouhého o a výslovnosti ß je pedagogicky přijatelná, ale není přesnou fonetickou transkripcí.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 152

**Finding ID:** kurssLesson10/section[2]/item[7]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[7]

### CURRENT
Pareizi izrunā: der Großvater (dēr grōsfāter).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Pareizi izrun | der Großvater (d | r gr | sf | ter).
### LV MASTER context
Pareizi izrunā: der Großvater (dēr grōsfāter).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 153

**Finding ID:** kurssLesson10/section[2]/item[8]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
### Luna PROPOSED
Dvojhláska ei se vyslovuje podobně jako české aj: seid (zajt), fleißig [ˈflaɪ̯sɪç].
### DE context
Divskani ei izrun | ai | seid (zait), fleißig (flai | ich).
### LV MASTER context
Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
### Reason
Text je v lotyštině, nikoli v češtině. Přirovnání ei k českému ai je pedagogicky přijatelné (PEDAGOGICALLY_ACCEPTABLE).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 154

**Finding ID:** kurssLesson10/section[2]/item[8]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
### Luna PROPOSED
Dvojhláska ei se vyslovuje podobně jako české aj: seid (zajt), fleißig [ˈflaɪ̯sɪç].
### DE context
Divskani ei izrun | ai | seid (zait), fleißig (flai | ich).
### LV MASTER context
Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
### Reason
Zápis „flaišich“ je foneticky zavádějící: ß se vyslovuje jako /s/, nikoli jako /š/, a koncové -ig ve slově fleißig má ve standardní výslovnosti [ɪç], nikoli české /x/. Jde o PHONETICALLY_WRONG aproximaci.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 155

**Finding ID:** kurssLesson10/section[2]/item[8]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[8]

### CURRENT
Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Divskani ei izrun | ai | seid (zait), fleißig (flai | ich).
### LV MASTER context
Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 156

**Finding ID:** kurssLesson10/section[2]/item[9]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
### Luna PROPOSED

```
Německé e může být úzké nebo široké: der Lehrer [deːɐ̯ ˈleːʁɐ]. Kmenové e je dlouhé a úzké; koncové e se v tomto slově nevyslovuje jako samostatné široké e.
```

### DE context
cu e var b | aurs vai plats | der Lehrer (d | r l | rer). Celma 
### LV MASTER context
Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 157

**Finding ID:** kurssLesson10/section[2]/item[9]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** sections[2].items[9]

### CURRENT
Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
cu e var b | aurs vai plats | der Lehrer (d | r l | rer). Celma 
### LV MASTER context
Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
### Reason
Latviešu atlikums (LV_WORD)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 158

**Finding ID:** kurssLesson10/section[2]/item[9]
**Severity:** MEDIUM
**Category:** CS_TERMINOLOGY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson10
**Field:** lv

### CURRENT
Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
### Luna PROPOSED
Ve slově Lehrer je kmenové e dlouhé a úzké. Koncovka -er se vyslovuje přibližně jako [ɐ], nikoli jako samostatné e.
### DE context
cu e var b | aurs vai plats | der Lehrer (d | r l | rer). Celma 
### LV MASTER context
Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
### Reason
Formulace zaměňuje pravopisné písmeno e za skutečný zvuk. Ve slově Lehrer není koncové -er jednoduše „krátké a široké e“; v běžné standardní výslovnosti je koncovka realizována jako [ɐ].

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 159

**Finding ID:** kurssLesson11/section[2]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson11
**Field:** lv

### CURRENT
Eu izrunā kā oi: der Freund (dēr froint), neun (noin).
### Luna PROPOSED
Dvojhláska eu se vyslovuje přibližně jako české oj: der Freund (fro(j)nt), neun (nojn).
### DE context
Eu izrun | oi | der Freund (d | r froint), neun (noin).
### LV MASTER context
eu izrunā kā oi: der Freund (dēr froint), neun (noin).
### Reason
Text je v lotyštině, nikoli v češtině. Přirovnání eu k českému oi je pouze přibližné, ale pedagogicky přijatelné (PEDAGOGICALLY_ACCEPTABLE).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 160

**Finding ID:** kurssLesson11/section[2]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson11
**Field:** sections[2].items[0]

### CURRENT
Eu izrunā kā oi: der Freund (dēr froint), neun (noin).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Eu izrun | oi | der Freund (d | r froint), neun (noin).
### LV MASTER context
eu izrunā kā oi: der Freund (dēr froint), neun (noin).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 161

**Finding ID:** kurssLesson11/section[2]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson11
**Field:** lv

### CURRENT
Z izrunā kā český c: Franz (franc), das Zimmer (cimer).
### Luna PROPOSED
Z se vyslovuje jako české c: Franz (franc), das Zimmer (cimer).
### DE context
Z izrun | esk | Franz (franc), das Zimmer (cimer).
### LV MASTER context
z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
### Reason
Text je v lotyštině, nikoli v češtině. Německé z se skutečně vyslovuje [ts], což odpovídá českému c; jde o ACCURATE_APPROXIMATION.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 162

**Finding ID:** kurssLesson11/section[2]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson11
**Field:** sections[2].items[2]

### CURRENT
Z izrunā kā český c: Franz (franc), das Zimmer (cimer).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Z izrun | esk | Franz (franc), das Zimmer (cimer).
### LV MASTER context
z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 163

**Finding ID:** kurssLesson12/section[2]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** lv

### CURRENT
X izrunā kā ks: Max (maks), Felix (feliks).
### Luna PROPOSED
X se vyslovuje jako ks: Max (maks), Felix (feliks).
### DE context
X izrun | ks | Max (maks), Felix (feliks).
### LV MASTER context
x izrunā kā ks: Max (maks), Felix (feliks).
### Reason
Text je v lotyštině, nikoli v češtině. Přirovnání x ke skupině ks je přesné (ACCURATE_APPROXIMATION).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 164

**Finding ID:** kurssLesson12/section[2]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** sections[2].items[0]

### CURRENT
X izrunā kā ks: Max (maks), Felix (feliks).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
X izrun | ks | Max (maks), Felix (feliks).
### LV MASTER context
x izrunā kā ks: Max (maks), Felix (feliks).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 165

**Finding ID:** kurssLesson12/section[2]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** lv

### CURRENT
Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
### Luna PROPOSED

```
Ve slovech Schwester a am jüngsten se skupina st vyslovuje jako běžné české st: Schwester (švester), jüngsten [ˈjʏŋstən].
```

### DE context
rdos Schwester, am jüngsten st izrun | latviski parasts st | Schwester ( | vester), jüngsten (jünksten).
### LV MASTER context
Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
### Reason
Text je v lotyštině, nikoli v češtině. Výslovnost počátečního Schw- jako šv- je přijatelná.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 166

**Finding ID:** kurssLesson12/section[2]/item[1]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** lv

### CURRENT
Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
### Luna PROPOSED
jüngsten [ˈjʏŋstən], případně pro začátečníky přibližně „jüngstən“.
### DE context
rdos Schwester, am jüngsten st izrun | latviski parasts st | Schwester ( | vester), jüngsten (jünksten).
### LV MASTER context
Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
### Reason
Zápis „jünksten“ je chybný: ve slově jüngsten je ng nosovka [ŋ], nikoli sekvence [nk]. Jde o PHONETICALLY_WRONG aproximaci.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 167

**Finding ID:** kurssLesson12/section[2]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** sections[2].items[1]

### CURRENT
Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos Schwester, am jüngsten st izrun | latviski parasts st | Schwester ( | vester), jüngsten (jünksten).
### LV MASTER context
Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 168

**Finding ID:** kurssLesson12/section[2]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** lv

### CURRENT
H vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
### Luna PROPOSED

```
Ve slově der Federhalter se h vyslovuje jako hláska, zatímco ve slově der Sohn pouze označuje délku předcházející samohlásky.
```

### DE context
H v | rd | der Federhalter ir ska | a, kuru izrun | bet v
### LV MASTER context
h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
### Reason
Text je v lotyštině, nikoli v češtině. Rozlišení mezi vyslovovaným h ve Federhalter a h označujícím délku v Sohn je věcně správné.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 169

**Finding ID:** kurssLesson12/section[2]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson12
**Field:** sections[2].items[2]

### CURRENT
H vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
H v | rd | der Federhalter ir ska | a, kuru izrun | bet v
### LV MASTER context
h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 170

**Finding ID:** kurssLesson13/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** lv

### CURRENT
H vārdā halten ir dzirdama skaņa.
### Luna PROPOSED
Ve slově halten je h slyšitelná hláska.
### DE context
H v | rd | halten ir dzirdama ska | a.
### LV MASTER context
h vārdā halten ir dzirdama skaņa.
### Reason
Text je v lotyštině, nikoli v češtině. Tvrzení o vyslovovaném h ve halten je správné.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 171

**Finding ID:** kurssLesson13/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** sections[3].items[0]

### CURRENT
H vārdā halten ir dzirdama skaņa.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
H v | rd | halten ir dzirdama ska | a.
### LV MASTER context
h vārdā halten ir dzirdama skaņa.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 172

**Finding ID:** kurssLesson13/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** lv

### CURRENT
H vārdā fahren rāda patskaņa garumu.
### Luna PROPOSED
Ve slově fahren h označuje délku předcházející samohlásky.
### DE context
H v | rd | fahren r | da patska | a garumu.
### LV MASTER context
h vārdā fahren rāda patskaņa garumu.
### Reason
Text je v lotyštině, nikoli v češtině. Tvrzení o h ve fahren jako značce délky je správné.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 173

**Finding ID:** kurssLesson13/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** sections[3].items[1]

### CURRENT
H vārdā fahren rāda patskaņa garumu.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
H v | rd | fahren r | da patska | a garumu.
### LV MASTER context
h vārdā fahren rāda patskaņa garumu.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 174

**Finding ID:** kurssLesson13/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** lv

### CURRENT
A vārdā halten izrunā īsi: halten.
### Luna PROPOSED
A ve slově halten se vyslovuje krátce: halten.
### DE context
A v | rd | halten izrun | si | halten.
### LV MASTER context
a vārdā halten izrunā īsi: halten.
### Reason
Text je v lotyštině, nikoli v češtině. Krátké a ve slově halten je správně.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 175

**Finding ID:** kurssLesson13/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** sections[3].items[2]

### CURRENT
A vārdā halten izrunā īsi: halten.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
A v | rd | halten izrun | si | halten.
### LV MASTER context
a vārdā halten izrunā īsi: halten.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 176

**Finding ID:** kurssLesson13/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** lv

### CURRENT
A vārdā tragen izrunā gari: tragen.
### Luna PROPOSED
A ve slově tragen se vyslovuje dlouze: tragen.
### DE context
A v | rd | tragen izrun | gari | tragen.
### LV MASTER context
a vārdā tragen izrunā gari: tragen.
### Reason
Text je v lotyštině, nikoli v češtině. Dlouhé a ve slově tragen je správně.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 177

**Finding ID:** kurssLesson13/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** sections[3].items[3]

### CURRENT
A vārdā tragen izrunā gari: tragen.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
A v | rd | tragen izrun | gari | tragen.
### LV MASTER context
a vārdā tragen izrunā gari: tragen.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 178

**Finding ID:** kurssLesson13/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** lv

### CURRENT
Äu izrunā kā oi: du läufst, er läuft.
### Luna PROPOSED
Dvojhláska äu se vyslovuje přibližně jako české oj: du läufst, er läuft.
### DE context
Äu izrun | oi | du läufst, er läuft.
### LV MASTER context
äu izrunā kā oi: du läufst, er läuft.
### Reason
Text je v lotyštině, nikoli v češtině. Přirovnání äu k českému oj je pouze přibližné, ale pedagogicky přijatelné (PEDAGOGICALLY_ACCEPTABLE).

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 179

**Finding ID:** kurssLesson13/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** sections[3].items[4]

### CURRENT
Äu izrunā kā oi: du läufst, er läuft.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Äu izrun | oi | du läufst, er läuft.
### LV MASTER context
äu izrunā kā oi: du läufst, er läuft.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 180

**Finding ID:** kurssLesson13/section[3]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** lv

### CURRENT
Pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
### Luna PROPOSED
Ve slově Kopf se skupina pf vyslovuje tak, aby byly slyšet obě souhlásky.
### DE context
Pf v | rd | Kopf izrun | ka abus l | dzska
### LV MASTER context
pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
### Reason
Text je v lotyštině, nikoli v češtině. Výslovnost obou složek skupiny pf ve slově Kopf je správně popsána.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 181

**Finding ID:** kurssLesson13/section[3]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson13
**Field:** sections[3].items[5]

### CURRENT
Pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Pf v | rd | Kopf izrun | ka abus l | dzska
### LV MASTER context
pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 182

**Finding ID:** kurssLesson14/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
SS izrunā kā český s.
### Luna PROPOSED
Znak ß se vyslovuje jako české s.
### DE context
SS izrun | esk | s.
### LV MASTER context
ß izrunā kā latviešu s.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 183

**Finding ID:** kurssLesson14/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** sections[3].items[0]

### CURRENT
SS izrunā kā český s.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
SS izrun | esk | s.
### LV MASTER context
ß izrunā kā latviešu s.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 184

**Finding ID:** kurssLesson14/section[3]/item[1]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
### Luna PROPOSED

```
Znak ß se píše uprostřed nebo na konci slova po dlouhé samohlásce či dvojhlásce: die Füße, die Straße. Po krátké samohlásce se píše ss: ich muss, er muss.
```

### DE context
SS raksta v | rda vid | vai beig | s p | c gara patska
### LV MASTER context
ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
### Reason
Tvrzení směšuje použití ß a ss. Příklady die Füße a die Straße obsahují ß, zatímco ich muss a er muss obsahují ss; aktuální formulace proto není přesná.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 185

**Finding ID:** kurssLesson14/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
### Luna PROPOSED

```
Znak ß se píše uprostřed nebo na konci slova po dlouhé samohlásce či dvojhlásce: die Füße, die Straße. Po krátké samohlásce se píše ss: ich muss, er muss.
```

### DE context
SS raksta v | rda vid | vai beig | s p | c gara patska
### LV MASTER context
ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 186

**Finding ID:** kurssLesson14/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** sections[3].items[1]

### CURRENT
SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
SS raksta v | rda vid | vai beig | s p | c gara patska
### LV MASTER context
ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 187

**Finding ID:** kurssLesson14/section[3]/item[2]
**Severity:** HIGH
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
### Luna PROPOSED
Ve tvarech slovesa müssen se píše ss: müssen, ich muss, du musst, ihr müsst.
### DE context
Ja cit | s form | s ir ss, tad pirms galotnes var b | t ß | müssen, ich muss, du musst, ihr müsst.
### LV MASTER context
Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
### Reason
Formulace uvádí možnost ß, ale žádný z uvedených německých příkladů znak ß neobsahuje. Všechny příklady mají ss.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 188

**Finding ID:** kurssLesson14/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
### Luna PROPOSED
Ve tvarech slovesa müssen se píše ss: müssen, ich muss, du musst, ihr müsst.
### DE context
Ja cit | s form | s ir ss, tad pirms galotnes var b | t ß | müssen, ich muss, du musst, ihr müsst.
### LV MASTER context
Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 189

**Finding ID:** kurssLesson14/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** sections[3].items[2]

### CURRENT
Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ja cit | s form | s ir ss, tad pirms galotnes var b | t ß | müssen, ich muss, du musst, ihr müsst.
### LV MASTER context
Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 190

**Finding ID:** kurssLesson14/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
Ö vārdā mögen izrunā kā skaidru ö skaņu.
### Luna PROPOSED
Ve slově mögen se ö vyslovuje jako dlouhá zaokrouhlená přední samohláska, přibližně jako německé ö.
### DE context
Ö v | rd | mögen izrun | skaidru ö ska | u.
### LV MASTER context
ö vārdā mögen izrunā kā skaidru ö skaņu.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 191

**Finding ID:** kurssLesson14/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** sections[3].items[3]

### CURRENT
Ö vārdā mögen izrunā kā skaidru ö skaņu.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ö v | rd | mögen izrun | skaidru ö ska | u.
### LV MASTER context
ö vārdā mögen izrunā kā skaidru ö skaņu.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 192

**Finding ID:** kurssLesson14/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
### Luna PROPOSED
Když po g následuje t, g se vyslovuje podobně jako k: du magst, ihr mögt.
### DE context
Ja p | c g seko t, tad g izklaus | s tuv | k k ska | ai
### LV MASTER context
Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 193

**Finding ID:** kurssLesson14/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** sections[3].items[4]

### CURRENT
Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ja p | c g seko t, tad g izklaus | s tuv | k k ska | ai
### LV MASTER context
Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 194

**Finding ID:** kurssLesson14/section[3]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** lv

### CURRENT
Līdzīgi arī český valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
### Luna PROPOSED
Podobně se v lotyšském slově „smags“ g před s vyslovuje podobně jako k.
### DE context
dz | gi ar | esk | valod | rd
### LV MASTER context
Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
### Reason
Text je převážně v lotyštině; navíc obsahuje české slovo v nesprávně vloženém vícejazyčném kontextu.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 195

**Finding ID:** kurssLesson14/section[3]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson14
**Field:** sections[3].items[5]

### CURRENT
Līdzīgi arī český valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
dz | gi ar | esk | valod | rd
### LV MASTER context
Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 196

**Finding ID:** kurssLesson15/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Ä vārdos Äpfel un schälen izrunā kā šauro e.
### Luna PROPOSED
Ä ve slovech Äpfel a schälen se vyslovuje přibližně jako otevřenější e; v Äpfel je krátké a v schälen dlouhé.
### DE context
Ä v | rdos Äpfel un schälen izrun | auro e.
### LV MASTER context
ä vārdos Äpfel un schälen izrunā kā šauro e.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 197

**Finding ID:** kurssLesson15/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** sections[3].items[0]

### CURRENT
Ä vārdos Äpfel un schälen izrunā kā šauro e.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Ä v | rdos Äpfel un schälen izrun | auro e.
### LV MASTER context
ä vārdos Äpfel un schälen izrunā kā šauro e.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 198

**Finding ID:** kurssLesson15/section[3]/item[0]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Ä vārdos Äpfel un schälen izrunā kā šauro e.
### Luna PROPOSED
Ä ve slovech Äpfel a schälen se vyslovuje přibližně jako otevřenější e; v Äpfel je krátké a v schälen dlouhé.
### DE context
Ä v | rdos Äpfel un schälen izrun | auro e.
### LV MASTER context
ä vārdos Äpfel un schälen izrunā kā šauro e.
### Reason
Označení ä jako „úzké e“ je pro německé ä zavádějící. V Äpfel jde o krátké [ɛ] a ve schälen o dlouhé [ɛː], tedy o otevřenější e.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 199

**Finding ID:** kurssLesson15/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
### Luna PROPOSED
Ve slově Äpfel se ä vyslovuje krátce; po něm následují dvě souhlásky.
### DE context
rd | Äpfel ä izrun | si, jo p | c patska | a seko divi l
### LV MASTER context
Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 200

**Finding ID:** kurssLesson15/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** sections[3].items[1]

### CURRENT
Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | Äpfel ä izrun | si, jo p | c patska | a seko divi l
### LV MASTER context
Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
### Reason
Latviešu atlikums (LV_PHRASE)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 201

**Finding ID:** kurssLesson15/section[3]/item[1]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
### Luna PROPOSED
Ve slově Äpfel se ä vyslovuje krátce; po něm následují dvě souhlásky.
### DE context
rd | Äpfel ä izrun | si, jo p | c patska | a seko divi l
### LV MASTER context
Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
### Reason
Vysvětlení pomocí dvou následujících souhlásek je zde použitelné, ale jako obecné pravidlo je příliš zjednodušené a může vést k chybnému zobecnění.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 202

**Finding ID:** kurssLesson15/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
### Luna PROPOSED
Ve slově schälen se ä vyslovuje dlouze; po něm následuje jediná souhláska.
### DE context
rd | schälen ä izrun | gari, jo p | c patska | a seko viens l
### LV MASTER context
Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 203

**Finding ID:** kurssLesson15/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** sections[3].items[2]

### CURRENT
Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | schälen ä izrun | gari, jo p | c patska | a seko viens l
### LV MASTER context
Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 204

**Finding ID:** kurssLesson15/section[3]/item[2]
**Severity:** MEDIUM
**Category:** PEDAGOGICAL_ISSUE
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
### Luna PROPOSED
Ve slově schälen se ä vyslovuje dlouze; po něm následuje jediná souhláska.
### DE context
rd | schälen ä izrun | gari, jo p | c patska | a seko viens l
### LV MASTER context
Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
### Reason
Počet následujících souhlásek není spolehlivé obecné pravidlo pro délku německé samohlásky. Ve slově schälen je ä skutečně dlouhé, ale formulace by měla být prezentována jen jako pomůcka pro tento příklad.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 205

**Finding ID:** kurssLesson15/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Vārdā gern e ir īss un plats.
### Luna PROPOSED
Ve slově gern je e krátké a otevřenější.
### DE context
rd | gern e ir  | ss un plats.
### LV MASTER context
Vārdā gern e ir īss un plats.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 206

**Finding ID:** kurssLesson15/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** sections[3].items[3]

### CURRENT
Vārdā gern e ir īss un plats.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | gern e ir  | ss un plats.
### LV MASTER context
Vārdā gern e ir īss un plats.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 207

**Finding ID:** kurssLesson15/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
### Luna PROPOSED
Pamatuj: německá dvojhláska ei se vyslovuje přibližně jako české aj: reif, unreif.
### DE context
Atceries | divskanis ei v | cu valod | izrun | ai
### LV MASTER context
Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 208

**Finding ID:** kurssLesson15/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** sections[3].items[4]

### CURRENT
Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Atceries | divskanis ei v | cu valod | izrun | ai
### LV MASTER context
Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
### Reason
Latviešu atlikums (LV_WORD)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 209

**Finding ID:** kurssLesson15/section[3]/item[4]
**Severity:** LOW
**Category:** CS_ORTHOGRAPHY
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson15
**Field:** lv

### CURRENT
Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
### Luna PROPOSED
Pamatuj: německá dvojhláska ei se vyslovuje přibližně jako české aj: reif, unreif.
### DE context
Atceries | divskanis ei v | cu valod | izrun | ai
### LV MASTER context
Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
### Reason
Pro český text je přirozenější a názornější zápis „aj“ než „ai“ při popisu přibližné výslovnosti.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 210

**Finding ID:** kurssLesson16/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** lv

### CURRENT
Vārdos wem, dem, den, der — e ir garš un šaurs.
### Luna PROPOSED
Ve slovech wem, dem, den a der je e dlouhé; vyslovuje se přibližně jako české dlouhé é.
### DE context
rdos wem, dem, den, der  | e ir gar | un  | aurs.
### LV MASTER context
Vārdos wem, dem, den, der — e ir garš un šaurs.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 211

**Finding ID:** kurssLesson16/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** sections[3].items[0]

### CURRENT
Vārdos wem, dem, den, der — e ir garš un šaurs.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos wem, dem, den, der  | e ir gar | un  | aurs.
### LV MASTER context
Vārdos wem, dem, den, der — e ir garš un šaurs.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 212

**Finding ID:** kurssLesson16/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** lv

### CURRENT
Vārdā gehorchen h ir dzirdams: ge-hor-chen.
### Luna PROPOSED
Ve slově gehorchen se h vyslovuje: ge-hor-chen.
### DE context
rd | gehorchen h ir dzirdams | ge-hor-chen.
### LV MASTER context
Vārdā gehorchen h ir dzirdams: ge-hor-chen.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 213

**Finding ID:** kurssLesson16/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** sections[3].items[1]

### CURRENT
Vārdā gehorchen h ir dzirdams: ge-hor-chen.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | gehorchen h ir dzirdams | ge-hor-chen.
### LV MASTER context
Vārdā gehorchen h ir dzirdams: ge-hor-chen.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 214

**Finding ID:** kurssLesson16/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** lv

### CURRENT
Die Wälder: ä izrunā kā šaurais īsais e.
### Luna PROPOSED
Ve slově die Wälder se ä vyslovuje jako krátké otevřenější e.
### DE context
Die Wälder | izrun | aurais  | sais e.
### LV MASTER context
die Wälder: ä izrunā kā šaurais īsais e.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 215

**Finding ID:** kurssLesson16/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** sections[3].items[2]

### CURRENT
Die Wälder: ä izrunā kā šaurais īsais e.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Die Wälder | izrun | aurais  | sais e.
### LV MASTER context
die Wälder: ä izrunā kā šaurais īsais e.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 216

**Finding ID:** kurssLesson16/section[3]/item[2]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** lv

### CURRENT
Die Wälder: ä izrunā kā šaurais īsais e.
### Luna PROPOSED
Ve slově die Wälder se ä vyslovuje jako krátké otevřenější e.
### DE context
Die Wälder | izrun | aurais  | sais e.
### LV MASTER context
die Wälder: ä izrunā kā šaurais īsais e.
### Reason
Přirovnání k „úzkému“ e je pro ä ve Wälder zavádějící. Jde o krátké otevřenější e.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 217

**Finding ID:** kurssLesson16/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** lv

### CURRENT
Die Bäuerinnen: äu izrunā kā oi.
### Luna PROPOSED
Ve slově Bäuerinnen se äu vyslovuje přibližně jako české oj.
### DE context
Die Bäuerinnen | u izrun | oi.
### LV MASTER context
die Bäuerinnen: äu izrunā kā oi.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 218

**Finding ID:** kurssLesson16/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** sections[3].items[3]

### CURRENT
Die Bäuerinnen: äu izrunā kā oi.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Die Bäuerinnen | u izrun | oi.
### LV MASTER context
die Bäuerinnen: äu izrunā kā oi.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 219

**Finding ID:** kurssLesson16/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** lv

### CURRENT
-ie ir garā ī apzīmējums: die Wiese.
### Luna PROPOSED
Skupina -ie označuje dlouhé í: die Wiese.
### DE context
ie ir gar | apz | jums | die Wiese.
### LV MASTER context
-ie ir garā ī apzīmējums: die Wiese.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 220

**Finding ID:** kurssLesson16/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson16
**Field:** sections[3].items[4]

### CURRENT
-ie ir garā ī apzīmējums: die Wiese.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
ie ir gar | apz | jums | die Wiese.
### LV MASTER context
-ie ir garā ī apzīmējums: die Wiese.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 221

**Finding ID:** kurssLesson17/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** lv

### CURRENT
Vārdā werfen pirmais e ir plats: werfen.
### Luna PROPOSED
Ve slově werfen je první e krátké a otevřenější: werfen.
### DE context
rd | werfen pirmais e ir plats | werfen.
### LV MASTER context
Vārdā werfen pirmais e ir plats: werfen.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 222

**Finding ID:** kurssLesson17/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** sections[3].items[0]

### CURRENT
Vārdā werfen pirmais e ir plats: werfen.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | werfen pirmais e ir plats | werfen.
### LV MASTER context
Vārdā werfen pirmais e ir plats: werfen.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 223

**Finding ID:** kurssLesson17/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** lv

### CURRENT
Vārdā wieder e ir plats: wieder.
### Luna PROPOSED
Ve slově wieder se skupina ie vyslovuje jako dlouhé í; koncové e je redukované.
### DE context
rd | wieder e ir plats | wieder.
### LV MASTER context
Vārdā wieder e ir plats: wieder.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 224

**Finding ID:** kurssLesson17/section[3]/item[1]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** lv

### CURRENT
Vārdā wieder e ir plats: wieder.
### Luna PROPOSED
Ve slově wieder se skupina ie vyslovuje jako dlouhé í; koncové e je redukované.
### DE context
rd | wieder e ir plats | wieder.
### LV MASTER context
Vārdā wieder e ir plats: wieder.
### Reason
Není jasné, které e má být „široké“. Pokud jde o první e ve skupině ie, tvrzení je foneticky nesprávné: ie se ve wieder vyslovuje jako dlouhé [í]. Koncové e je redukované [ə], nikoli široké e.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 225

**Finding ID:** kurssLesson17/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** sections[3].items[1]

### CURRENT
Vārdā wieder e ir plats: wieder.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | wieder e ir plats | wieder.
### LV MASTER context
Vārdā wieder e ir plats: wieder.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 226

**Finding ID:** kurssLesson17/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** lv

### CURRENT
Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
### Luna PROPOSED
Ve slovech wieder a die Diele skupina ie označuje dlouhé í: wieder, die Diele.
### DE context
rdos wieder un die Diele ie apz | garo  | wieder, die Diele.
### LV MASTER context
Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 227

**Finding ID:** kurssLesson17/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** sections[3].items[2]

### CURRENT
Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos wieder un die Diele ie apz | garo  | wieder, die Diele.
### LV MASTER context
Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 228

**Finding ID:** kurssLesson17/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** lv

### CURRENT
Vārdā der Spaten sp izrunā kā šp: der Spaten.
### Luna PROPOSED
Na začátku slova Spaten se skupina sp vyslovuje jako šp: der Spaten.
### DE context
rd | der Spaten sp izrun | der Spaten.
### LV MASTER context
Vārdā der Spaten sp izrunā kā šp: der Spaten.
### Reason
Text je v lotyštině, nikoli v češtině.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 229

**Finding ID:** kurssLesson17/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson17
**Field:** sections[3].items[3]

### CURRENT
Vārdā der Spaten sp izrunā kā šp: der Spaten.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | der Spaten sp izrun | der Spaten.
### LV MASTER context
Vārdā der Spaten sp izrunā kā šp: der Spaten.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 230

**Finding ID:** kurssLesson18/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson18
**Field:** lv

### CURRENT
Vārdā wohin h ir dzirdams: wo-hin.
### Luna PROPOSED
Ve slově wohin se h vyslovuje: wo-hin.
### DE context
rd | wohin h ir dzirdams | wo-hin.
### LV MASTER context
Vārdā wohin h ir dzirdams: wo-hin.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 231

**Finding ID:** kurssLesson18/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson18
**Field:** sections[3].items[0]

### CURRENT
Vārdā wohin h ir dzirdams: wo-hin.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | wohin h ir dzirdams | wo-hin.
### LV MASTER context
Vārdā wohin h ir dzirdams: wo-hin.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 232

**Finding ID:** kurssLesson18/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson18
**Field:** lv

### CURRENT
Vārdā wo o ir garš: wo.
### Luna PROPOSED
Ve slově wo je o dlouhé: wo.
### DE context
rd | wo o ir gar | wo.
### LV MASTER context
Vārdā wo o ir garš: wo.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 233

**Finding ID:** kurssLesson18/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson18
**Field:** sections[3].items[1]

### CURRENT
Vārdā wo o ir garš: wo.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | wo o ir gar | wo.
### LV MASTER context
Vārdā wo o ir garš: wo.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 234

**Finding ID:** kurssLesson19/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā vor o izrunā gari.
### Luna PROPOSED
Ve slově vor se o vyslovuje dlouze.
### DE context
rd | vor o izrun | gari.
### LV MASTER context
Vārdā vor o izrunā gari.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 235

**Finding ID:** kurssLesson19/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** sections[3].items[0]

### CURRENT
Vārdā vor o izrunā gari.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | vor o izrun | gari.
### LV MASTER context
Vārdā vor o izrunā gari.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 236

**Finding ID:** kurssLesson19/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā hinter h ir dzirdams, un e ir plats.
### Luna PROPOSED
Ve slově hinter se h vyslovuje; koncové e je redukované, nikoli široké.
### DE context
rd | hinter h ir dzirdams, un e ir plats.
### LV MASTER context
Vārdā hinter h ir dzirdams, un e ir plats.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 237

**Finding ID:** kurssLesson19/section[3]/item[1]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā hinter h ir dzirdams, un e ir plats.
### Luna PROPOSED
Ve slově hinter se h vyslovuje. První i je krátké a koncové e se vyslovuje redukovaně [ə].
### DE context
rd | hinter h ir dzirdams, un e ir plats.
### LV MASTER context
Vārdā hinter h ir dzirdams, un e ir plats.
### Reason
German hinter contains i, not a broad e. The final e is a reduced schwa [ə], while the first vowel is short [ɪ]. The current statement about e being broad is phonetically wrong.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 238

**Finding ID:** kurssLesson19/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** sections[3].items[1]

### CURRENT
Vārdā hinter h ir dzirdams, un e ir plats.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | hinter h ir dzirdams, un e ir plats.
### LV MASTER context
Vārdā hinter h ir dzirdams, un e ir plats.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 239

**Finding ID:** kurssLesson19/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā der Stuhl: st izrunā kā št • H ir garuma zīme un netiek izrunāts.
### Luna PROPOSED
Ve slově der Stuhl se st vyslovuje jako št • h označuje délku a nevyslovuje se.
### DE context
rd | der Stuhl | st izrun | H ir garuma z | me un netiek izrun
### LV MASTER context
Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 240

**Finding ID:** kurssLesson19/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** sections[3].items[2]

### CURRENT
Vārdā der Stuhl: st izrunā kā št • H ir garuma zīme un netiek izrunāts.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | der Stuhl | st izrun | H ir garuma z | me un netiek izrun
### LV MASTER context
Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts.
### Reason
Latviešu atlikums (LV_PHRASE)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 241

**Finding ID:** kurssLesson19/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā der Strauch: st izrunā kā št.
### Luna PROPOSED
Ve slově der Strauch se st vyslovuje jako št.
### DE context
rd | der Strauch | st izrun | t.
### LV MASTER context
Vārdā der Strauch: st izrunā kā št.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 242

**Finding ID:** kurssLesson19/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** sections[3].items[3]

### CURRENT
Vārdā der Strauch: st izrunā kā št.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | der Strauch | st izrun | t.
### LV MASTER context
Vārdā der Strauch: st izrunā kā št.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 243

**Finding ID:** kurssLesson19/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā wachsen: ch izrunā kā k.
### Luna PROPOSED
Ve slově wachsen se ch vyslovuje jako ks.
### DE context
rd | wachsen | ch izrun | k.
### LV MASTER context
Vārdā wachsen: ch izrunā kā k.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 244

**Finding ID:** kurssLesson19/section[3]/item[4]
**Severity:** HIGH
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** lv

### CURRENT
Vārdā wachsen: ch izrunā kā k.
### Luna PROPOSED
Ve slově wachsen se ch vyslovuje jako ks.
### DE context
rd | wachsen | ch izrun | k.
### LV MASTER context
Vārdā wachsen: ch izrunā kā k.
### Reason
In German wachsen, the spelling ch represents [ks], not [k]. The current pronunciation rule is incorrect.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 245

**Finding ID:** kurssLesson19/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson19
**Field:** sections[3].items[4]

### CURRENT
Vārdā wachsen: ch izrunā kā k.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | wachsen | ch izrun | k.
### LV MASTER context
Vārdā wachsen: ch izrunā kā k.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 246

**Finding ID:** kurssLesson20/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.
### Luna PROPOSED
Ve slovech Stockwerk, Stein, Stadt a stecken se st vyslovuje jako št.
### DE context
rdos Stockwerk, Stein, Stadt, stecken | st izrun | t.
### LV MASTER context
Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 247

**Finding ID:** kurssLesson20/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[0]

### CURRENT
Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos Stockwerk, Stein, Stadt, stecken | st izrun | t.
### LV MASTER context
Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 248

**Finding ID:** kurssLesson20/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Vārdos der Ofen, der Boden: o ir garš.
### Luna PROPOSED
Ve slovech der Ofen a der Boden je o dlouhé.
### DE context
rdos der Ofen, der Boden | o ir gar
### LV MASTER context
Vārdos der Ofen, der Boden: o ir garš.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 249

**Finding ID:** kurssLesson20/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[1]

### CURRENT
Vārdos der Ofen, der Boden: o ir garš.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos der Ofen, der Boden | o ir gar
### LV MASTER context
Vārdos der Ofen, der Boden: o ir garš.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 250

**Finding ID:** kurssLesson20/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Sch izrunā kā š: der Schornstein, der Mensch.
### Luna PROPOSED
Spojení písmen sch se vyslovuje jako š: der Schornstein, der Mensch.
### DE context
Sch izrun | der Schornstein, der Mensch.
### LV MASTER context
sch izrunā kā š: der Schornstein, der Mensch.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 251

**Finding ID:** kurssLesson20/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[2]

### CURRENT
Sch izrunā kā š: der Schornstein, der Mensch.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
Sch izrun | der Schornstein, der Mensch.
### LV MASTER context
sch izrunā kā š: der Schornstein, der Mensch.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 252

**Finding ID:** kurssLesson20/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.
### Luna PROPOSED
Ve slovech das Haus a das Holz se h vyslovuje.
### DE context
rdos das Haus, das Holz | h ir dzirdams un j | izrun
### LV MASTER context
Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 253

**Finding ID:** kurssLesson20/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[3]

### CURRENT
Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos das Haus, das Holz | h ir dzirdams un j | izrun
### LV MASTER context
Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 254

**Finding ID:** kurssLesson20/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.
### Luna PROPOSED
Ve slovech die Wohnung a wohnen h označuje délku a nevyslovuje se.
### DE context
rdos die Wohnung, wohnen | h ir garuma z | me, to neizrun
### LV MASTER context
Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 255

**Finding ID:** kurssLesson20/section[3]/item[4]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[4]

### CURRENT
Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos die Wohnung, wohnen | h ir garuma z | me, to neizrun
### LV MASTER context
Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 256

**Finding ID:** kurssLesson20/section[3]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.
### Luna PROPOSED
Ve slovech die Küche a die Dächer se ch vyslovuje jako hláska podobná h, tedy jako německý ich-Laut.
### DE context
rdos die Küche, die Dächer | ch izrun | tipa ska | u, k | cu ich-Laut.
### LV MASTER context
Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 257

**Finding ID:** kurssLesson20/section[3]/item[5]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[5]

### CURRENT
Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos die Küche, die Dächer | ch izrun | tipa ska | u, k | cu ich-Laut.
### LV MASTER context
Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.
### Reason
Latviešu atlikums (LV_WORD)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 258

**Finding ID:** kurssLesson20/section[3]/item[6]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** lv

### CURRENT
Vārdā das Vorhaus: v izrunā kā f.
### Luna PROPOSED
Ve slově das Vorhaus se v vyslovuje jako f.
### DE context
rd | das Vorhaus | v izrun | f.
### LV MASTER context
Vārdā das Vorhaus: v izrunā kā f.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 259

**Finding ID:** kurssLesson20/section[3]/item[6]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson20
**Field:** sections[3].items[6]

### CURRENT
Vārdā das Vorhaus: v izrunā kā f.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | das Vorhaus | v izrun | f.
### LV MASTER context
Vārdā das Vorhaus: v izrunā kā f.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 260

**Finding ID:** kurssLesson21/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** lv

### CURRENT
Vārdā die Axt: x izrunā kā ks.
### Luna PROPOSED
Ve slově die Axt se x vyslovuje jako ks.
### DE context
rd | die Axt | x izrun | ks.
### LV MASTER context
Vārdā die Axt: x izrunā kā ks.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 261

**Finding ID:** kurssLesson21/section[3]/item[0]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** sections[3].items[0]

### CURRENT
Vārdā die Axt: x izrunā kā ks.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | die Axt | x izrun | ks.
### LV MASTER context
Vārdā die Axt: x izrunā kā ks.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 262

**Finding ID:** kurssLesson21/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** lv

### CURRENT
Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.
### Luna PROPOSED
Ve slovech arbeiten, das Beil a steigen se ei vyslovuje přibližně jako aj.
### DE context
rdos arbeiten, das Beil, steigen | ei izrun | ai.
### LV MASTER context
Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 263

**Finding ID:** kurssLesson21/section[3]/item[1]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** sections[3].items[1]

### CURRENT
Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rdos arbeiten, das Beil, steigen | ei izrun | ai.
### LV MASTER context
Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 264

**Finding ID:** kurssLesson21/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** lv

### CURRENT
Vārdā die Scheune: eu izrunā kā oi.
### Luna PROPOSED
Ve slově die Scheune se eu vyslovuje přibližně jako oj.
### DE context
rd | die Scheune | eu izrun | oi.
### LV MASTER context
Vārdā die Scheune: eu izrunā kā oi.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 265

**Finding ID:** kurssLesson21/section[3]/item[2]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** sections[3].items[2]

### CURRENT
Vārdā die Scheune: eu izrunā kā oi.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | die Scheune | eu izrun | oi.
### LV MASTER context
Vārdā die Scheune: eu izrunā kā oi.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 266

**Finding ID:** kurssLesson21/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** lv

### CURRENT
Vārdā die Brücke: ck izrunā kā dubultu k.
### Luna PROPOSED
Ve slově die Brücke se ck vyslovuje jako jedno k.
### DE context
rd | die Brücke | ck izrun | dubultu k.
### LV MASTER context
Vārdā die Brücke: ck izrunā kā dubultu k.
### Reason
Text is in Latvian, not Czech, and is therefore not suitable for Czech learners.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 267

**Finding ID:** kurssLesson21/section[3]/item[3]
**Severity:** HIGH
**Category:** FOREIGN_LEFTOVER
**Source:** DETERMINISTIC
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** sections[3].items[3]

### CURRENT
Vārdā die Brücke: ck izrunā kā dubultu k.
### Luna PROPOSED
(empty — deterministic or no replacement suggested)
### DE context
rd | die Brücke | ck izrun | dubultu k.
### LV MASTER context
Vārdā die Brücke: ck izrunā kā dubultu k.
### Reason
Latviešu atlikums (LV_DIACRITIC)

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## Finding 268

**Finding ID:** kurssLesson21/section[3]/item[3]
**Severity:** MEDIUM
**Category:** PHONETIC_ERROR
**Source:** LUNA
**File:** data/cs/courseLessons.js
**Object:** kurssLesson21
**Field:** lv

### CURRENT
Vārdā die Brücke: ck izrunā kā dubultu k.
### Luna PROPOSED
Ve slově die Brücke se ck vyslovuje jako jedno k.
### DE context
rd | die Brücke | ck izrun | dubultu k.
### LV MASTER context
Vārdā die Brücke: ck izrunā kā dubultu k.
### Reason
German ck represents a single [k] sound, not a geminate or 'double k'. Describing it as double k can mislead beginners into lengthening the consonant.

### OWNER
**Status:**
**OWNER NEW:**
**OWNER note:**

---

## End

Total findings listed: **268**. Production changes: **0**.