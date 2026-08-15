# CS–DE Kurss Členy — OWNER review (all findings)

READ-ONLY OWNER source prep. **No production repairs in this phase.**

**Source audit:** `reports/cs-kurs-articles-full-audit.md`
**Audit JSON:** `reports/temp/cs-kurs-articles-audit/full-audit.json`
**Luna PROPOSED** = audit recommendation only — **not** automatic OWNER NEW.

## OWNER batch index

Review index only — no separate batch files.

- **001–050** (batch 1)
- **051–100** (batch 2)
- **101–150** (batch 3)
- **151–200** (batch 4)
- **201–250** (batch 5)
- **251–300** (batch 6)
- **301–315** (batch 7)

## Normalization summary

| Metric | Value |
|--------|-------|
| Raw audit findings (findings array) | **398** |
| Luna findings (source=luna) | **254** |
| Deterministic FOREIGN_LEFTOVER candidates | **144** |
| FALSE_POSITIVE (audit trail) | **1** |
| qualityFindings (excludes non-error categories) | **373** |
| Normalized OWNER objects | **315** |
| Status PENDING | **315** |
| CURRENT_MISMATCH_REVIEW_REQUIRED | **0** |
| Shared production target groups (2+ OWNER) | **23** |
| Exact duplicate findings (post-audit dedupe) | **0** |
| DET+LUNA FOREIGN_LEFTOVER merges | **83** |
| SOURCE_DE_ISSUE findings | **24** |
| DE_PARITY_ISSUE findings | **9** |
| OWNER review batches (50/batch) | **7** |
| Production changes | **0** |
| DE changes | **0** |
| LV MASTER changes | **0** |

### Luna severity (qualityFindings only)

CRITICAL: 9, HIGH: 318, MEDIUM: 42, LOW: 4

### FOREIGN_LEFTOVER reconciliation

- A (DET+LUNA FL merged): **83**
- B (deterministic FL only): **61**
- C (deterministic false positive): **0**
- D (same target, different finding category): **23** shared-target groups

### Validation gate

✅ **PASS** — all audit findings accounted; OWNER NEW empty; production/DE/LV MASTER = 0 changes.

---

## Shared production targets

Multiple OWNER objects on the same `(objectId, production field)` — distinct problems, not deduped in this phase.

### Shared: kurssArticlesLesson|block[3].example[5]

Primary OWNER ID: #013
Related OWNER IDs: #014
Target: kurssArticlesLesson/block[3]/example[5]
Field: block[3].example[5]
Reason: Multiple distinct findings on same production target (2 OWNER objects): PEDAGOGICAL_ISSUE; SOURCE_DE_ISSUE

### Shared: kurssArticlesLesson|block[4].explain

Primary OWNER ID: #017
Related OWNER IDs: #018
Target: kurssArticlesLesson/block[4]/explain
Field: block[4].explain
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_TERMINOLOGY; CS_ORTHOGRAPHY

### Shared: kurssLesson10|intro

Primary OWNER ID: #151
Related OWNER IDs: #152
Target: kurssLesson10/intro
Field: intro
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_NATURALNESS; DE_PARITY_ISSUE

### Shared: kurssLesson10|title

Primary OWNER ID: #149
Related OWNER IDs: #150
Target: kurssLesson10/title
Field: title
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_NATURALNESS; DE_PARITY_ISSUE

### Shared: kurssLesson11|intro

Primary OWNER ID: #157
Related OWNER IDs: #158
Target: kurssLesson11/intro
Field: intro
Reason: Multiple distinct findings on same production target (2 OWNER objects): PEDAGOGICAL_ISSUE; DE_PARITY_ISSUE

### Shared: kurssLesson11|subtitle

Primary OWNER ID: #155
Related OWNER IDs: #156
Target: kurssLesson11/subtitle
Field: subtitle
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_NATURALNESS; DE_PARITY_ISSUE

### Shared: kurssLesson11|title

Primary OWNER ID: #153
Related OWNER IDs: #154
Target: kurssLesson11/title
Field: title
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_NATURALNESS; DE_PARITY_ISSUE

### Shared: kurssLesson16|sections[2].items[11].heading

Primary OWNER ID: #110
Related OWNER IDs: #111
Target: kurssLesson16/section[2]/item[11]/heading
Field: sections[2].items[11].heading
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; SOURCE_DE_ISSUE

### Shared: kurssLesson16|sections[2].items[11].text

Primary OWNER ID: #112
Related OWNER IDs: #113, #114
Target: kurssLesson16/section[2]/item[11]/text
Field: sections[2].items[11].text
Reason: Multiple distinct findings on same production target (3 OWNER objects): CS_TERMINOLOGY; SEMANTIC_MISMATCH; SOURCE_DE_ISSUE

### Shared: kurssLesson16|sections[2].items[6].heading

Primary OWNER ID: #099
Related OWNER IDs: #100
Target: kurssLesson16/section[2]/item[6]/heading
Field: sections[2].items[6].heading
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; SOURCE_DE_ISSUE

### Shared: kurssLesson16|sections[2].items[6].text

Primary OWNER ID: #101
Related OWNER IDs: #102
Target: kurssLesson16/section[2]/item[6]/text
Field: sections[2].items[6].text
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_GRAMMAR; SOURCE_DE_ISSUE

### Shared: kurssLesson19|sections[2].items[2].text

Primary OWNER ID: #249
Related OWNER IDs: #250
Target: kurssLesson19/section[2]/item[2]/text
Field: sections[2].items[2].text
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_GRAMMAR; SOURCE_DE_ISSUE

### Shared: kurssLesson19|sections[2].items[4].heading

Primary OWNER ID: #251
Related OWNER IDs: #252
Target: kurssLesson19/section[2]/item[4]/heading
Field: sections[2].items[4].heading
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; SOURCE_DE_ISSUE

### Shared: kurssLesson19|sections[2].items[4].text

Primary OWNER ID: #253
Related OWNER IDs: #254
Target: kurssLesson19/section[2]/item[4]/text
Field: sections[2].items[4].text
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_TERMINOLOGY; SOURCE_DE_ISSUE

### Shared: kurssLesson19|sections[2].items[5].heading

Primary OWNER ID: #255
Related OWNER IDs: #256
Target: kurssLesson19/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; SOURCE_DE_ISSUE

### Shared: kurssLesson20|sections[4].cards[0].task

Primary OWNER ID: #277
Related OWNER IDs: #278
Target: kurssLesson20/section[4]/card[0]/task
Field: sections[4].cards[0].task
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; PEDAGOGICAL_ISSUE

### Shared: kurssLesson3|legacyGramatika.section[1].example[0]

Primary OWNER ID: #026
Related OWNER IDs: #027
Target: kurssLesson3/legacyGramatika/section[1]/example[0]
Field: legacyGramatika.section[1].example[0]
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; CS_GRAMMAR

### Shared: kurssLesson3|legacyGramatika.section[1].example[1]

Primary OWNER ID: #028
Related OWNER IDs: #029
Target: kurssLesson3/legacyGramatika/section[1]/example[1]
Field: legacyGramatika.section[1].example[1]
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; CS_GRAMMAR

### Shared: kurssLesson3|legacyGramatika.section[1].example[3]

Primary OWNER ID: #031
Related OWNER IDs: #032
Target: kurssLesson3/legacyGramatika/section[1]/example[3]
Field: legacyGramatika.section[1].example[3]
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; CS_GRAMMAR

### Shared: kurssLesson9|sections[2].items[0].heading

Primary OWNER ID: #140
Related OWNER IDs: #141
Target: kurssLesson9/section[2]/item[0]/heading
Field: sections[2].items[0].heading
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; DE_PARITY_ISSUE

### Shared: kurssLesson9|sections[2].items[0].text

Primary OWNER ID: #142
Related OWNER IDs: #143
Target: kurssLesson9/section[2]/item[0]/text
Field: sections[2].items[0].text
Reason: Multiple distinct findings on same production target (2 OWNER objects): PEDAGOGICAL_ISSUE; DE_PARITY_ISSUE

### Shared: kurssLesson9|sections[2].items[3].heading

Primary OWNER ID: #145
Related OWNER IDs: #146
Target: kurssLesson9/section[2]/item[3]/heading
Field: sections[2].items[3].heading
Reason: Multiple distinct findings on same production target (2 OWNER objects): FOREIGN_LEFTOVER; DE_PARITY_ISSUE

### Shared: kurssLesson9|sections[2].items[3].text

Primary OWNER ID: #147
Related OWNER IDs: #148
Target: kurssLesson9/section[2]/item[3]/text
Field: sections[2].items[3].text
Reason: Multiple distinct findings on same production target (2 OWNER objects): CS_GRAMMAR; DE_PARITY_ISSUE

---

## OWNER findings

### #001

Audit ID: ART-HTML-002
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/intro
Field: COURSE_LESSON_HTML.intro
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Německý článek se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem.

LV MASTER context:
Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Tāpēc lietvārdus vislabāk mācīties kopā ar artikulu.

Luna PROPOSED:
Německý člen se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Německý člen se ne vždy shoduje s českým rodem. Podstatná jména se proto nejlépe učí společně se členem.

OWNER note:

---

### #002

Audit ID: ART-HTML-003
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[0]/h4
Field: block[0].h4
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
• Příklady článků

LV MASTER context:
• Artikulu piemēri

Luna PROPOSED:
• Příklady členů

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
• Příklady členů

OWNER note:

---

### #003

Audit ID: ART-HTML-009
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[1]/explain
Field: block[1].explain
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
DER jsou často mužské osoby, dny, měsíce, roční období a některá slova s ​​určitými konci.

DE context:
DER jsou  | asto mu | sk | osoby, dny, m | ce, ro | obdob

LV MASTER context:
DER bieži ir vīriešu personas, dienas, mēneši, gadalaiki un daži vārdi ar noteiktām galotnēm.

Luna PROPOSED:
Člen der se často používá u označení mužských osob, dnů, měsíců, ročních období a u některých slov s určitými koncovkami.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Člen der se často používá u označení mužských osob, dnů, měsíců, ročních období a u některých slov s určitými koncovkami.

OWNER note:

---

### #004

Audit ID: ART-HTML-012
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[1]/example[0]
Field: block[1].example[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
-er → bieži DER, piemēram: der Computer, der Lehrer Ale ne vždy

DE context:
er  | bie | i DER, piem | ram | der Computer, der Lehrer Ale ne v | dy

LV MASTER context:
-er → bieži DER, piemēram: der Computer, der Lehrer bet ne vienmēr

Luna PROPOSED:
-er → často der, například: der Computer, der Lehrer, ale ne vždy.

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
-er → často der, například: der Computer, der Lehrer, ale ne vždy.

OWNER note:

---

### #005

Audit ID: ART-HTML-017
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[1]/example[5]
Field: block[1].example[5]
Category: SEMANTIC_MISMATCH
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Značky aut → pasuje na BMW, pasuje na Mercedes

DE context:
Zna | ky aut  | pasuje na BMW, pasuje na Mercedes

LV MASTER context:
automobiļu markas → der BMW, der Mercedes

Luna PROPOSED:
Značky aut → der BMW, der Mercedes

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Značky aut → der BMW, der Mercedes

OWNER note:

---

### #006

Audit ID: ART-HTML-024
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[1]/example[12]
Field: block[1].example[12]
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Srpen — srpen

DE context:
Srpen  | srpen

LV MASTER context:
der August — augusts

Luna PROPOSED:
Der August — srpen

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der August — srpen

OWNER note:

---

### #007

Audit ID: ART-HTML-029
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[2]/h4
Field: block[2].h4
Category: FOREIGN_LEFTOVER
Severity: CRITICAL
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
♀ Často UMŘI

LV MASTER context:
♀ Bieži DIE

Luna PROPOSED:
♀ Často DIE

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
♀ Často DIE

OWNER note:

---

### #008

Audit ID: ART-HTML-030
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[2]/explain
Field: block[2].explain
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
DIE je často ženského rodu, množného čísla a slova končí na -ung, -heit, -keit, -schaft, -ion, -tät, -ei.

DE context:
DIE je  | asto  | ensk | ho rodu, mno | ho  | sla a slova kon

LV MASTER context:
DIE bieži ir sieviešu personas, daudzskaitlis un vārdi ar galotnēm -ung, -heit, -keit, -schaft, -ion, -tät, -ei.

Luna PROPOSED:
Člen die se často používá u podstatných jmen ženského rodu a v množném čísle. Často se objevuje také u slov s koncovkami -ung, -heit, -keit, -schaft, -ion, -tät a -ei.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Člen die se často používá u podstatných jmen ženského rodu a v množném čísle. Často se objevuje také u slov s koncovkami -ung, -heit, -keit, -schaft, -ion, -tät a -ei.

OWNER note:

---

### #009

Audit ID: ART-HTML-037
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[2]/example[4]
Field: block[2].example[4]
Category: FOREIGN_LEFTOVER
Severity: CRITICAL
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
-ion→ zemřít národ

DE context:
ion | zem | t n | rod

LV MASTER context:
-ion → die Nation

Luna PROPOSED:
-ion → die Nation

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
-ion → die Nation

OWNER note:

---

### #010

Audit ID: ART-HTML-041
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[2]/example[8]
Field: block[2].example[8]
Category: SEMANTIC_MISMATCH
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Motocyklové značky → Harley-Davidson, Yamaha

DE context:
Motocyklov | zna | ky  | Harley-Davidson, Yamaha

LV MASTER context:
motociklu markas → die Harley-Davidson, die Yamaha

Luna PROPOSED:
Motocyklové značky → die Harley-Davidson, die Yamaha

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Motocyklové značky → die Harley-Davidson, die Yamaha

OWNER note:

---

### #011

Audit ID: ART-HTML-043
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[2]/example[10]
Field: block[2].example[10]
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Množné číslo téměř vždy → die Autos, die Häuser, die Kinder

DE context:
Mno | slo t | dy  | die Autos, die Häuser, die Kinder

LV MASTER context:
daudzskaitlis gandrīz vienmēr → die Autos, die Häuser, die Kinder

Luna PROPOSED:
Množné číslo: v 1. a 4. pádě die → die Autos, die Häuser, die Kinder. Ve 3. pádě je den a ve 2. pádě der.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Množné číslo: v 1. a 4. pádě die → die Autos, die Häuser, die Kinder. Ve 3. pádě je den a ve 2. pádě der.

OWNER note:

---

### #012

Audit ID: ART-HTML-055
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[3]/explain
Field: block[3].explain
Category: CS_NATURALNESS
Severity: LOW
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
DAS mají často zdrobněliny s -chen / -lein, mnoho slov s -ment / -um a slovesa jako podstatná jména.

DE context:
DAS maj | asto zdrobn | liny s -chen / -lein, mnoho slov s -ment / -um a slovesa jako podstatn | jm | na.

LV MASTER context:
DAS bieži ir pamazināmie ar -chen / -lein, daudzi vārdi ar -ment / -um un darbības vārdi kā lietvārdi.

Luna PROPOSED:
U DAS jsou častá podstatná jména se zdrobňovacími příponami -chen / -lein, mnoho slov s -ment / -um a slovesa použitá jako podstatná jména.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
U DAS jsou častá podstatná jména se zdrobňovacími příponami -chen / -lein, mnoho slov s -ment / -um a slovesa použitá jako podstatná jména.

OWNER note:

---

### #013

Audit ID: ART-HTML-063
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[3]/example[5]
Field: block[3].example[5]
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Chemické prvky → das Eisen, das Sauerstoff

DE context:
Chemick | prvky  | das Eisen, das Sauerstoff

LV MASTER context:
ķīmiskie elementi → das Eisen, das Sauerstoff

Luna PROPOSED:
U některých chemických prvků se používá DAS, například: das Eisen. Pozor: der Sauerstoff.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Chemické prvky → das Eisen, der Sauerstoff

OWNER note:
Sdílený target s #014; rozšířený Luna text neodpovídá formátu karty — korekce členu u Sauerstoff.

---

### #014

Audit ID: ART-HTML-063
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[3]/example[5]
Field: block[3].example[5]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Chemické prvky → das Eisen, das Sauerstoff

DE context:
Chemick | prvky  | das Eisen, das Sauerstoff

LV MASTER context:
ķīmiskie elementi → das Eisen, das Sauerstoff

Luna PROPOSED:
Chemické prvky → das Eisen, der Sauerstoff

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Chemické prvky → das Eisen, der Sauerstoff

OWNER note:
SOURCE_DE_ISSUE: CS text opraven (der Sauerstoff), DE zdroj neměněn.

---

### #015

Audit ID: ART-HTML-066
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[3]/example[8]
Field: block[3].example[8]
Category: CS_GRAMMAR
Severity: LOW
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Sloveso jako podstatné jméno → das Essen, das Lernen

DE context:
Sloveso jako podstatn | jm | no  | das Essen, das Lernen

LV MASTER context:
darbības vārds kā lietvārds → das Essen, das Lernen

Luna PROPOSED:
Slovesa jako podstatná jména → das Essen, das Lernen

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Slovesa jako podstatná jména → das Essen, das Lernen

OWNER note:

---

### #016

Audit ID: ART-HTML-076
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[4]/h4
Field: block[4].h4
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
! Důležité výjimky / nutno se naučit s článkem

LV MASTER context:
! Svarīgi izņēmumi / jāiemācās ar artikulu

Luna PROPOSED:
! Důležité výjimky / nutno se naučit se členem

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
! Důležité výjimky / nutno se naučit se členem

OWNER note:

---

### #017

Audit ID: ART-HTML-077
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[4]/explain
Field: block[4].explain
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
U některých slov nelze článek spolehlivě určit podle koncovky nebo českýé rodiny. Nejlépe se studují společně s článkem.

DE context:
U n | kter | ch slov nelze  | nek spolehliv | ur | it podle koncovky nebo 

LV MASTER context:
Dažiem vārdiem artikulu nevar droši noteikt pēc galotnes vai latviešu dzimtes. Tos vislabāk mācīties kopā ar artikulu.

Luna PROPOSED:
U některých slov nelze člen spolehlivě určit podle koncovky nebo českého rodu. Nejlépe se učí společně se členem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
U některých slov nelze člen spolehlivě určit podle koncovky nebo českého rodu. Nejlépe se učí společně se členem.

OWNER note:

---

### #018

Audit ID: ART-HTML-077
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/block[4]/explain
Field: block[4].explain
Category: CS_ORTHOGRAPHY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
U některých slov nelze článek spolehlivě určit podle koncovky nebo českýé rodiny. Nejlépe se studují společně s článkem.

DE context:
U n | kter | ch slov nelze  | nek spolehliv | ur | it podle koncovky nebo 

LV MASTER context:
Dažiem vārdiem artikulu nevar droši noteikt pēc galotnes vai latviešu dzimtes. Tos vislabāk mācīties kopā ar artikulu.

Luna PROPOSED:
U některých slov nelze člen spolehlivě určit podle koncovky nebo českého rodu. Nejlépe se učí společně se členem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
U některých slov nelze člen spolehlivě určit podle koncovky nebo českého rodu. Nejlépe se učí společně se členem.

OWNER note:
Sdílený target s #017 — stejný OWNER NEW.

---

### #019

Audit ID: ART-HTML-086
Source object: kurssArticlesLesson
Target: kurssArticlesLesson/bottom_info
Field: COURSE_LESSON_HTML.bottom_info
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Koncovky a skupiny slov pomáhají uhodnout článek, ale nejsou 100% jistým pravidlem. Pokud si nejste jisti, naučte se slovo s článkem.

LV MASTER context:
Galotnes un vārdu grupas palīdz uzminēt artikulu, bet tās nav 100% drošs likums. Ja neesi pārliecināts, mācies vārdu kopā ar artikulu.

Luna PROPOSED:
Koncovky a skupiny slov pomáhají uhodnout člen, ale nejsou stoprocentně spolehlivým pravidlem. Pokud si nejste jisti, naučte se slovo se členem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Koncovky a skupiny slov pomáhají uhodnout člen, ale nejsou stoprocentně spolehlivým pravidlem. Pokud si nejste jisti, naučte se slovo se členem.

OWNER note:

---

### #020

Audit ID: ART-L01-001
Source object: kurssLesson1
Target: kurssLesson1/title
Field: title
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přednáška 1

DE context:
Lesson1

LV MASTER context:
Lekcija 1

Luna PROPOSED:
Lekce 1

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
Kurz konzistentně používá „Přednáška“ (shodně s L2–L21 a intro).

---

### #021

Audit ID: ART-L01-002
Source object: kurssLesson1
Target: kurssLesson1/subtitle
Field: subtitle
Category: CS_GRAMMAR
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přítomná časová slovesa, podstatná jména, gramatika a překlad

DE context:
Lesson1

LV MASTER context:
Darbības vārdi tagadnē, vārdiņi, gramatika un pārtulko

Luna PROPOSED:
Slovesa v přítomném čase, podstatná jména, gramatika a překlad

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Slovesa v přítomném čase, podstatná jména, gramatika a překlad

OWNER note:

---

### #022

Audit ID: ART-L03-001
Source object: kurssLesson3
Target: kurssLesson3/subtitle
Field: subtitle
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Články, názvy míst a překlady

DE context:
kurssLesson3

LV MASTER context:
Artikuli, vietas vārdi un pārtulko

Luna PROPOSED:
Členy, názvy míst a překlady

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Členy, názvy míst a překlady

OWNER note:

---

### #023

Audit ID: ART-L03-002
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/h4
Field: legacyGramatika.section[1].h4
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
2 Články

LV MASTER context:
2 Artikuli

Luna PROPOSED:
2 Členy

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
2 Členy

OWNER note:

---

### #024

Audit ID: ART-L03-004
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/subtitle[0]
Field: legacyGramatika.section[1].subtitle[0]
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Definitivní článek

LV MASTER context:
Noteiktais artikuls

Luna PROPOSED:
Určitý člen

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Určitý člen

OWNER note:

---

### #025

Audit ID: ART-L03-005
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/subtitle[1]
Field: legacyGramatika.section[1].subtitle[1]
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Neurčitý článek

LV MASTER context:
Nenoteiktais artikuls

Luna PROPOSED:
Neurčitý člen

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Neurčitý člen

OWNER note:

---

### #026

Audit ID: ART-L03-006
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[0]
Field: legacyGramatika.section[1].example[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Kolo muži - der

DE context:
Kolo mu | i - der

LV MASTER context:
vīriešu kārta — der

Luna PROPOSED:
Mužský rod — der

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Mužský rod — der

OWNER note:
Sdílený target s #027.

---

### #027

Audit ID: ART-L03-006
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[0]
Field: legacyGramatika.section[1].example[0]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Kolo muži - der

DE context:
Kolo mu | i - der

LV MASTER context:
vīriešu kārta — der

Luna PROPOSED:
Mužský rod — der

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Mužský rod — der

OWNER note:
Sdílený target s #026.

---

### #028

Audit ID: ART-L03-007
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[1]
Field: legacyGramatika.section[1].example[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ženy na řadě - zemřít

DE context:
eny na  | ad | zem

LV MASTER context:
sieviešu kārta — die

Luna PROPOSED:
Ženský rod — die

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ženský rod — die

OWNER note:
Sdílený target s #029.

---

### #029

Audit ID: ART-L03-007
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[1]
Field: legacyGramatika.section[1].example[1]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ženy na řadě - zemřít

DE context:
eny na  | ad | zem

LV MASTER context:
sieviešu kārta — die

Luna PROPOSED:
Ženský rod — die

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ženský rod — die

OWNER note:
Sdílený target s #028.

---

### #030

Audit ID: ART-L03-008
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[2]
Field: legacyGramatika.section[1].example[2]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Střední kolo — das

DE context:
St | edn | kolo  | das

LV MASTER context:
vidējā kārta — das

Luna PROPOSED:
Střední rod — das

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Střední rod — das

OWNER note:

---

### #031

Audit ID: ART-L03-009
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[3]
Field: legacyGramatika.section[1].example[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Určitý člen množného čísla pro všechny tři řády je zemřít.

DE context:
Ur | it | len mno | ho  | sla pro v | echny t

LV MASTER context:
Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.

Luna PROPOSED:
Určitý člen množného čísla pro všechny tři rody je die.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Určitý člen množného čísla pro všechny tři rody je die.

OWNER note:
Sdílený target s #032.

---

### #032

Audit ID: ART-L03-009
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[3]
Field: legacyGramatika.section[1].example[3]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Určitý člen množného čísla pro všechny tři řády je zemřít.

DE context:
Ur | it | len mno | ho  | sla pro v | echny t

LV MASTER context:
Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.

Luna PROPOSED:
Určitý člen množného čísla pro všechny tři rody je die.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Určitý člen množného čísla pro všechny tři rody je die.

OWNER note:
Sdílený target s #031.

---

### #033

Audit ID: ART-L03-013
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[7]
Field: legacyGramatika.section[1].example[7]
Category: GENDER_ERROR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Tah mužů - ein

DE context:
Tah mu | ein

LV MASTER context:
vīriešu kārta — ein

Luna PROPOSED:
Mužský rod — ein

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Mužský rod — ein

OWNER note:

---

### #034

Audit ID: ART-L03-014
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[8]
Field: legacyGramatika.section[1].example[8]
Category: GENDER_ERROR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Tah žen - eine

DE context:
Tah  | en - eine

LV MASTER context:
sieviešu kārta — eine

Luna PROPOSED:
Ženský rod — eine

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ženský rod — eine

OWNER note:

---

### #035

Audit ID: ART-L03-015
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[1]/example[9]
Field: legacyGramatika.section[1].example[9]
Category: GENDER_ERROR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Střední kolo — ein

DE context:
St | edn | kolo  | ein

LV MASTER context:
vidējā kārta — ein

Luna PROPOSED:
Střední rod — ein

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Střední rod — ein

OWNER note:

---

### #036

Audit ID: ART-L03-020
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[2]/note
Field: legacyGramatika.section[2].note
Category: PEDAGOGICAL_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Člen se nepoužívá před vlastními jmény.

DE context:
len se nepou | ed vlastn | mi jm | ny.

LV MASTER context:
Īpašvārdu priekšā artikulu nelieto.

Luna PROPOSED:
Před většinou vlastních jmen se člen nepoužívá.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Před většinou vlastních jmen se člen nepoužívá.

OWNER note:

---

### #037

Audit ID: ART-L03-022
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[3]/h4
Field: legacyGramatika.section[3].h4
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
4 Místo slovesa

LV MASTER context:
4 Darbības vārda vieta

Luna PROPOSED:
Pozice slovesa

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
4 Pozice slovesa

OWNER note:

---

### #038

Audit ID: ART-L03-023
Source object: kurssLesson3
Target: kurssLesson3/legacyGramatika/section[3]/note
Field: legacyGramatika.section[3].note
Category: PEDAGOGICAL_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
V narativní větě je sloveso na druhé pozici.

DE context:
V narativn | je sloveso na druh | pozici.

LV MASTER context:
Stāstāmā teikumā darbības vārds stāv otrā vietā.

Luna PROPOSED:
V oznamovací hlavní větě stojí určité sloveso na druhém místě.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V oznamovací hlavní větě stojí určité sloveso na druhém místě.

OWNER note:

---

### #039

Audit ID: ART-L04-003
Source object: kurssLesson4
Target: kurssLesson4/legacyGramatika/section[0]/note
Field: legacyGramatika.section[0].note
Category: GENDER_ERROR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
V ženském rodě a středním rodě se akuzativ rovná nominativu. Mění se pouze tah mužů.

DE context:
ensk | m rod | a st | edn | m rod | se akuzativ rovn

LV MASTER context:
Sieviešu un vidējā kārtā akuzatīvs ir vienāds ar nominatīvu. Mainās tikai vīriešu kārta.

Luna PROPOSED:
V ženském a středním rodě se akuzativ shoduje s nominativem. Mění se pouze mužský rod.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V ženském a středním rodě se akuzativ shoduje s nominativem. Mění se pouze mužský rod.

OWNER note:

---

### #040

Audit ID: ART-L04-004
Source object: kurssLesson4
Target: kurssLesson4/legacyGramatika/section[0]/example[0]
Field: legacyGramatika.section[0].example[0]
Category: CS_TERMINOLOGY
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Nominace: der Federhalter, die Feder, das Messer.

DE context:
Nominace | der Federhalter, die Feder, das Messer.

LV MASTER context:
Nominativ: der Federhalter, die Feder, das Messer.

Luna PROPOSED:
Nominativ: der Federhalter, die Feder, das Messer.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Nominativ: der Federhalter, die Feder, das Messer.

OWNER note:

---

### #041

Audit ID: ART-L04-007
Source object: kurssLesson4
Target: kurssLesson4/legacyGramatika/section[0]/example[3]
Field: legacyGramatika.section[0].example[3]
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Akce: einen Federhalter, eine Feder, ein Messer.

DE context:
Akce | einen Federhalter, eine Feder, ein Messer.

LV MASTER context:
Akkusativ: einen Federhalter, eine Feder, ein Messer.

Luna PROPOSED:
Akuzativ: einen Federhalter, eine Feder, ein Messer.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Akuzativ: einen Federhalter, eine Feder, ein Messer.

OWNER note:

---

### #042

Audit ID: ART-L05-001
Source object: kurssLesson5
Target: kurssLesson5/subtitle
Field: subtitle
Category: CS_NATURALNESS
Severity: LOW
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wen?, akuzativ, sitzen, fragen a -in koncovka.

DE context:
kurssLesson5

LV MASTER context:
Wen?, akuzatīvs, sitzen, fragen un -in galotne.

Luna PROPOSED:
Wen?, akuzativ, slovesa sitzen a fragen a koncovka -in

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Wen?, akuzativ, slovesa sitzen a fragen a koncovka -in

OWNER note:

---

### #043

Audit ID: ART-L05-003
Source object: kurssLesson5
Target: kurssLesson5/legacyGramatika/section[0]/note
Field: legacyGramatika.section[0].note
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
V češtině odpovídá nominativ na otázku kdo? a akuzativ na otázku co?.

DE context:
tin | odpov | nominativ na ot | zku kdo? a akuzativ na ot | zku co?.

LV MASTER context:
Latviešu valodā nominatīvs atbild uz jautājumu kas?, bet akuzatīvs uz jautājumu ko?.

Luna PROPOSED:
V češtině nominativ odpovídá otázkám kdo? a co?, zatímco akuzativ otázkám koho? a co?.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V češtině nominativ odpovídá otázkám kdo? a co?, zatímco akuzativ otázkám koho? a co?.

OWNER note:

---

### #044

Audit ID: ART-L05-004
Source object: kurssLesson5
Target: kurssLesson5/legacyGramatika/section[0]/example[0]
Field: legacyGramatika.section[0].example[0]
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
V němčině je nominativní otázka wer? osoby a co? předměty.

DE context:
V n | in | je nominativn | ot | zka wer? osoby a co? p | edm

LV MASTER context:
Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.

Luna PROPOSED:
V němčině se v nominativu ptáme wer? u osob a was? u věcí.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V němčině se v nominativu ptáme wer? u osob a was? u věcí.

OWNER note:

---

### #045

Audit ID: ART-L05-005
Source object: kurssLesson5
Target: kurssLesson5/legacyGramatika/section[0]/example[1]
Field: legacyGramatika.section[0].example[1]
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Akuzativní otázka je wen? osoby a co? předměty.

DE context:
Akuzativn | ot | zka je wen? osoby a co? p | edm | ty.

LV MASTER context:
Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.

Luna PROPOSED:
V akuzativu se ptáme wen? u osob a was? u věcí.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V akuzativu se ptáme wen? u osob a was? u věcí.

OWNER note:

---

### #046

Audit ID: ART-L05-006
Source object: kurssLesson5
Target: kurssLesson5/legacyGramatika/section[1]/h4
Field: legacyGramatika.section[1].h4
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Změna článků na akuzativ

LV MASTER context:
Artikulu maiņa akuzatīvā

Luna PROPOSED:
Změna členů v akuzativu

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Změna členů v akuzativu

OWNER note:

---

### #047

Audit ID: ART-L05-007
Source object: kurssLesson5
Target: kurssLesson5/legacyGramatika/section[1]/example[0]
Field: legacyGramatika.section[1].example[0]
Category: CS_TERMINOLOGY
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Nominace: der Vater, die Mutter, das Kind.

DE context:
Nominace | der Vater, die Mutter, das Kind.

LV MASTER context:
Nominativ: der Vater, die Mutter, das Kind.

Luna PROPOSED:
Nominativ: der Vater, die Mutter, das Kind.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Nominativ: der Vater, die Mutter, das Kind.

OWNER note:

---

### #048

Audit ID: ART-L05-009
Source object: kurssLesson5
Target: kurssLesson5/legacyGramatika/section[1]/example[2]
Field: legacyGramatika.section[1].example[2]
Category: CS_TERMINOLOGY
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Nominace: der Federhalter, die Feder, das Messer.

DE context:
Nominace | der Federhalter, die Feder, das Messer.

LV MASTER context:
Nominativ: der Federhalter, die Feder, das Messer.

Luna PROPOSED:
Nominativ: der Federhalter, die Feder, das Messer.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Nominativ: der Federhalter, die Feder, das Messer.

OWNER note:

---

### #049

Audit ID: ART-L06-005
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[2]
Field: legacyGramatika.section[0].example[2]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Číslo jedna je ve všech třech řádech při použití s ​​podstatným jménem: ein v mužském rodě, eine v ženském řádu, ein v středním řádu.

DE context:
slo jedna je ve v | ech t | ech  | dech p | i pou | it

LV MASTER context:
Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.

Luna PROPOSED:
Neurčitý člen má před podstatným jménem v jednotném čísle tyto tvary: ein v mužském rodě, eine v ženském rodě a ein ve středním rodě.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Neurčitý člen má před podstatným jménem v jednotném čísle tyto tvary: ein v mužském rodě, eine v ženském rodě a ein ve středním rodě.

OWNER note:

---

### #050

Audit ID: ART-L06-008
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[5]
Field: legacyGramatika.section[0].example[5]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Saitain v němčině má tvar jednotného a množného čísla: der Schüler ist klein • Die Schüler sind klein.

DE context:
Saitain v n | in | tvar jednotn | ho a mno | ho  | sla

LV MASTER context:
Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.

Luna PROPOSED:
Podstatné jméno Schüler má v němčině tvar jednotného i množného čísla: der Schüler ist klein; die Schüler sind klein.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Podstatné jméno Schüler má v němčině tvar jednotného i množného čísla: der Schüler ist klein; die Schüler sind klein.

OWNER note:

---

### #051

Audit ID: ART-L06-009
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[6]
Field: legacyGramatika.section[0].example[6]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ukazovací zájmeno it se v češtině mění v počtu a pořadí, ale v němčině používá jeden tvar: das.

DE context:
Ukazovac | jmeno it se v  | tin | v po | tu a po | ad

LV MASTER context:
Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.

Luna PROPOSED:
Ukazovací zájmeno to se v češtině mění podle čísla a rodu, ale v němčině se v tomto použití používá jeden tvar: das.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ukazovací zájmeno to se v češtině mění podle čísla a rodu, ale v němčině se v tomto použití používá jeden tvar: das.

OWNER note:

---

### #052

Audit ID: ART-L06-011
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[8]
Field: legacyGramatika.section[0].example[8]
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Der Wagen - vozíky a der Schlitten - saně jsou v češtině množné číslo, ale v němčině se tato slova používají v jednotném i množném čísle.

DE context:
Der Wagen - voz | ky a der Schlitten - san | jsou v  | tin | mno | slo, ale v n

LV MASTER context:
Der Wagen — rati un der Schlitten — ragavas latviešu valodā ir daudzskaitlinieki, bet vācu valodā šos vārdus lieto vienskaitlī un daudzskaitlī.

Luna PROPOSED:
Der Wagen („vozík“) a der Schlitten („sáňky“) jsou v češtině v množném čísle, ale v němčině se tato slova používají v jednotném i množném čísle.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der Wagen („vozík“) a der Schlitten („sáňky“) jsou v češtině v množném čísle, ale v němčině se tato slova používají v jednotném i množném čísle.

OWNER note:

---

### #053

Audit ID: ART-L06-013
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[10]
Field: legacyGramatika.section[0].example[10]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Příklady: der Hammer - die Hämmer • Der Garten — die Gärten • Das Fenster — zemřít Fenster • Das Messer — die Messer.

DE context:
klady | der Hammer - die Hämmer  | Der Garten  | die Gärten  | Das Fenster  | zem

LV MASTER context:
Piemēri: der Hammer — die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer.

Luna PROPOSED:
Příklady: der Hammer — die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Příklady: der Hammer — die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer.

OWNER note:

---

### #054

Audit ID: ART-L06-014
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[11]
Field: legacyGramatika.section[0].example[11]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Podstatná jména ženského rodu zakončená na -el, -er vezměte -n v množném čísle.

DE context:
Podstatn | jm | na  | ensk | ho rodu zakon | en

LV MASTER context:
Sieviešu kārtas lietvārdi ar galotni -el, -er daudzskaitlī pieņem -n.

Luna PROPOSED:
Podstatná jména ženského rodu zakončená na -el nebo -er často přijímají v množném čísle koncovku -n.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Podstatná jména ženského rodu zakončená na -el nebo -er často přijímají v množném čísle koncovku -n.

OWNER note:

---

### #055

Audit ID: ART-L06-018
Source object: kurssLesson6
Target: kurssLesson6/legacyGramatika/section[0]/example[15]
Field: legacyGramatika.section[0].example[15]
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
V narativní větě zaujímá podmět-sloveso druhé místo: er legt den Schlüssel hin • Dann legt er den Schlüssel hin.

DE context:
V narativn | zauj | podm | t-sloveso druh | sto | er legt den Schlüssel hin 

LV MASTER context:
Stāstāmā teikumā izteicējs-darbības vārds stāv otrā vietā: er legt den Schlüssel hin; dann legt er den Schlüssel hin.

Luna PROPOSED:
V oznamovací větě stojí určité sloveso na druhém místě: er legt den Schlüssel hin • Dann legt er den Schlüssel hin.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V oznamovací větě stojí určité sloveso na druhém místě: er legt den Schlüssel hin • Dann legt er den Schlüssel hin.

OWNER note:

---

### #056

Audit ID: ART-L16-023
Source object: kurssLesson16
Target: kurssLesson16/section[1]/title
Field: sections[1].title
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Jména

DE context:
kurssLesson16

LV MASTER context:
Vārdiņi

Luna PROPOSED:
Slovíčka

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Slovíčka

OWNER note:

---

### #057

Audit ID: ART-L16-024
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[0]
Field: sections[1].items[0]
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wem — kam?

DE context:
Wem  | kam?

LV MASTER context:
wem — kam?

Luna PROPOSED:
Wem — komu? / čemu?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Wem — komu? / čemu?

OWNER note:

---

### #058

Audit ID: ART-L16-025
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[1]
Field: sections[1].items[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Schenken — dāvināt

DE context:
Schenken  | vin

LV MASTER context:
schenken — dāvināt

Luna PROPOSED:
Schenken — darovat

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Schenken — darovat

OWNER note:

---

### #059

Audit ID: ART-L16-026
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[2]
Field: sections[1].items[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Dem Sohne — dēlam

DE context:
Dem Sohne  | lam

LV MASTER context:
dem Sohne — dēlam

Luna PROPOSED:
Dem Sohne — synovi

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Dem Sohne — synovi

OWNER note:

---

### #060

Audit ID: ART-L16-027
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[3]
Field: sections[1].items[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Den Söhnen — dēliem

DE context:
Den Söhnen  | liem

LV MASTER context:
den Söhnen — dēliem

Luna PROPOSED:
Den Söhnen — synům

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Den Söhnen — synům

OWNER note:

---

### #061

Audit ID: ART-L16-028
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[4]
Field: sections[1].items[4]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Sich nähern — tuvoties

DE context:
Sich nähern  | tuvoties

LV MASTER context:
sich nähern — tuvoties

Luna PROPOSED:
Sich nähern — přibližovat se

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Sich nähern — přibližovat se

OWNER note:

---

### #062

Audit ID: ART-L16-029
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[5]
Field: sections[1].items[5]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ich nähere mich — es tuvojos

DE context:
Ich nähere mich  | es tuvojos

LV MASTER context:
ich nähere mich — es tuvojos

Luna PROPOSED:
Ich nähere mich — přibližuji se

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ich nähere mich — přibližuji se

OWNER note:

---

### #063

Audit ID: ART-L16-030
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[6]
Field: sections[1].items[6]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Du näherst dich — tu tuvojies

DE context:
Du näherst dich  | tu tuvojies

LV MASTER context:
du näherst dich — tu tuvojies

Luna PROPOSED:
Du näherst dich — přibližuješ se

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Du näherst dich — přibližuješ se

OWNER note:

---

### #064

Audit ID: ART-L16-031
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[7]
Field: sections[1].items[7]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Geben — dot

DE context:
Geben  | dot

LV MASTER context:
geben — dot

Luna PROPOSED:
Geben — dávat

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Geben — dávat

OWNER note:

---

### #065

Audit ID: ART-L16-032
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[8]
Field: sections[1].items[8]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ich gebe — es dodu

DE context:
Ich gebe  | es dodu

LV MASTER context:
ich gebe — es dodu

Luna PROPOSED:
Ich gebe — dávám

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ich gebe — dávám

OWNER note:

---

### #066

Audit ID: ART-L16-033
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[9]
Field: sections[1].items[9]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Du gibst — tu dod

DE context:
Du gibst  | tu dod

LV MASTER context:
du gibst — tu dod

Luna PROPOSED:
Du gibst — dáváš

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Du gibst — dáváš

OWNER note:

---

### #067

Audit ID: ART-L16-034
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[10]
Field: sections[1].items[10]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Er gibt — viņš dod

DE context:
Er gibt  | vi | dod

LV MASTER context:
er gibt — viņš dod

Luna PROPOSED:
Er gibt — dává

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Er gibt — dává

OWNER note:

---

### #068

Audit ID: ART-L16-035
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[11]
Field: sections[1].items[11]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Die Magd — kalpone

DE context:
Die Magd  | kalpone

LV MASTER context:
die Magd — kalpone

Luna PROPOSED:
Die Magd — služka

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Magd — služka

OWNER note:

---

### #069

Audit ID: ART-L16-036
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[12]
Field: sections[1].items[12]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Brot — maize

DE context:
Brot  | maize

LV MASTER context:
Brot — maize

Luna PROPOSED:
Brot — chléb

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Brot — chléb

OWNER note:

---

### #070

Audit ID: ART-L16-037
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[13]
Field: sections[1].items[13]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Milch — piens

DE context:
Milch  | piens

LV MASTER context:
Milch — piens

Luna PROPOSED:
Milch — mléko

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Milch — mléko

OWNER note:

---

### #071

Audit ID: ART-L16-038
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[14]
Field: sections[1].items[14]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Gehorchen — paklausīt

DE context:
Gehorchen  | paklaus

LV MASTER context:
gehorchen — paklausīt

Luna PROPOSED:
Gehorchen — poslouchat

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Gehorchen — poslouchat

OWNER note:

---

### #072

Audit ID: ART-L16-039
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[15]
Field: sections[1].items[15]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Der Knecht — kalps

DE context:
Der Knecht  | kalps

LV MASTER context:
der Knecht — kalps

Luna PROPOSED:
Der Knecht — čeledín

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der Knecht — čeledín

OWNER note:

---

### #073

Audit ID: ART-L16-040
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[16]
Field: sections[1].items[16]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Gehören — piederēt

DE context:
Gehören  | pieder

LV MASTER context:
gehören — piederēt

Luna PROPOSED:
Gehören — patřit

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Gehören — patřit

OWNER note:

---

### #074

Audit ID: ART-L16-041
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[17]
Field: sections[1].items[17]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Das Feld — lauks / tīrums

DE context:
Das Feld  | lauks / t | rums

LV MASTER context:
das Feld — lauks / tīrums

Luna PROPOSED:
Das Feld — pole

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Das Feld — pole

OWNER note:

---

### #075

Audit ID: ART-L16-042
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[18]
Field: sections[1].items[18]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Die Felder — lauki / tīrumi

DE context:
Die Felder  | lauki / t | rumi

LV MASTER context:
die Felder — lauki / tīrumi

Luna PROPOSED:
Die Felder — pole

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Felder — pole

OWNER note:

---

### #076

Audit ID: ART-L16-043
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[19]
Field: sections[1].items[19]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Die Wiese — pļava

DE context:
Die Wiese  | ava

LV MASTER context:
die Wiese — pļava

Luna PROPOSED:
Die Wiese — louka

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Wiese — louka

OWNER note:

---

### #077

Audit ID: ART-L16-044
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[20]
Field: sections[1].items[20]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Die Wiesen — pļavas

DE context:
Die Wiesen  | avas

LV MASTER context:
die Wiesen — pļavas

Luna PROPOSED:
Die Wiesen — louky

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Wiesen — louky

OWNER note:

---

### #078

Audit ID: ART-L16-045
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[21]
Field: sections[1].items[21]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Der Wald — mežs

DE context:
Der Wald  | me

LV MASTER context:
der Wald — mežs

Luna PROPOSED:
Der Wald — les

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der Wald — les

OWNER note:

---

### #079

Audit ID: ART-L16-046
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[22]
Field: sections[1].items[22]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Die Wälder — meži

DE context:
Die Wälder  | me

LV MASTER context:
die Wälder — meži

Luna PROPOSED:
Die Wälder — lesy

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Wälder — lesy

OWNER note:

---

### #080

Audit ID: ART-L16-047
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[23]
Field: sections[1].items[23]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Der Bauer — zemnieks

DE context:
Der Bauer  | zemnieks

LV MASTER context:
der Bauer — zemnieks

Luna PROPOSED:
Der Bauer — zemědělec

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der Bauer — zemědělec

OWNER note:

---

### #081

Audit ID: ART-L16-048
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[24]
Field: sections[1].items[24]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Die Bäuerin — zemniece

DE context:
Die Bäuerin  | zemniece

LV MASTER context:
die Bäuerin — zemniece

Luna PROPOSED:
Die Bäuerin — zemědělkyně

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Bäuerin — zemědělkyně

OWNER note:

---

### #082

Audit ID: ART-L16-049
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[25]
Field: sections[1].items[25]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Folgen — sekot

DE context:
Folgen  | sekot

LV MASTER context:
folgen — sekot

Luna PROPOSED:
Folgen — následovat

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Folgen — následovat

OWNER note:

---

### #083

Audit ID: ART-L16-050
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[26]
Field: sections[1].items[26]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Der Jäger — mednieks

DE context:
Der Jäger  | mednieks

LV MASTER context:
der Jäger — mednieks

Luna PROPOSED:
Der Jäger — myslivec

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der Jäger — myslivec

OWNER note:

---

### #084

Audit ID: ART-L16-051
Source object: kurssLesson16
Target: kurssLesson16/section[1]/item[27]
Field: sections[1].items[27]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Treu — uzticīgs

DE context:
Treu  | uztic | gs

LV MASTER context:
treu — uzticīgs

Luna PROPOSED:
Treu — věrný

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Treu — věrný

OWNER note:

---

### #085

Audit ID: ART-L16-053
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[0]/heading
Field: sections[2].items[0].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dativs

DE context:
Dativ odpov | na ot | zku | wem?  | komu?

LV MASTER context:
Dativs

Luna PROPOSED:
Dativ

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Dativ

OWNER note:

---

### #086

Audit ID: ART-L16-055
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[1]/heading
Field: sections[2].items[1].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vienskaitlis

LV MASTER context:
Vienskaitlis

Luna PROPOSED:
Jednotné číslo

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Jednotné číslo

OWNER note:

---

### #087

Audit ID: ART-L16-056
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[1]/table[0][1]
Field: sections[2].items[1].table[0][1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vīriešu

DE context:
rie

LV MASTER context:
Vīriešu

Luna PROPOSED:
Mužský rod

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Mužský rod

OWNER note:

---

### #088

Audit ID: ART-L16-057
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[1]/table[0][2]
Field: sections[2].items[1].table[0][2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Sieviešu

DE context:
Sievie

LV MASTER context:
Sieviešu

Luna PROPOSED:
Ženský rod

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ženský rod

OWNER note:

---

### #089

Audit ID: ART-L16-058
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[1]/table[0][3]
Field: sections[2].items[1].table[0][3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vidējā

DE context:
Vid

LV MASTER context:
Vidējā

Luna PROPOSED:
Střední rod

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Střední rod

OWNER note:

---

### #090

Audit ID: ART-L16-071
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[2]/heading
Field: sections[2].items[2].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Daudzskaitlis

LV MASTER context:
Daudzskaitlis

Luna PROPOSED:
Množné číslo

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Množné číslo

OWNER note:

---

### #091

Audit ID: ART-L16-072
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[2]/table[0][1]
Field: sections[2].items[2].table[0][1]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Vīriešu

DE context:
rie

LV MASTER context:
Vīriešu

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)

Confidence: high

Status: LABOT

OWNER NEW:
Mužský rod

OWNER note:
Deterministic FL; stejný OWNER NEW jako #087 (jiná tabulka).

---

### #092

Audit ID: ART-L16-073
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[2]/table[0][2]
Field: sections[2].items[2].table[0][2]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Sieviešu

DE context:
Sievie

LV MASTER context:
Sieviešu

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)

Confidence: high

Status: LABOT

OWNER NEW:
Ženský rod

OWNER note:
Deterministic FL; stejný OWNER NEW jako #088.

---

### #093

Audit ID: ART-L16-074
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[2]/table[0][3]
Field: sections[2].items[2].table[0][3]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Vidējā

DE context:
Vid

LV MASTER context:
Vidējā

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Střední rod

OWNER note:
Deterministic FL; stejný OWNER NEW jako #089.

---

### #094

Audit ID: ART-L16-087
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[3]/heading
Field: sections[2].items[3].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Datīva -e

DE context:
Podstatn | jm | na mu | sk | ho a st | edn

LV MASTER context:
Datīva -e

Luna PROPOSED:
Koncovka -e v dativu

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Koncovka -e v dativu

OWNER note:

---

### #095

Audit ID: ART-L16-088
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[3]/text
Field: sections[2].items[3].text
Category: CS_NATURALNESS
Severity: LOW
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Podstatná jména mužského a středního rodu v dativu jednotného čísla mohou mít koncovku -e. V dnešní době se od tohoto konce často upouští.

DE context:
Podstatn | jm | na mu | sk | ho a st | edn

LV MASTER context:
Vīriešu un vidējās kārtas lietvārdi vienskaitļa datīvā var pieņemt galotni -e. Mūsdienās šī galotne bieži atkrīt.

Luna PROPOSED:
Podstatná jména mužského a středního rodu v dativu jednotného čísla mohou mít koncovku -e. V dnešní době se od této koncovky často upouští.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Podstatná jména mužského a středního rodu v dativu jednotného čísla mohou mít koncovku -e. V dnešní době se od této koncovky často upouští.

OWNER note:

---

### #096

Audit ID: ART-L16-093
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[4]/heading
Field: sections[2].items[4].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Sieviešu kārta datīvā

DE context:
Podstatn | jm | na  | ensk | ho rodu nemaj | koncovku v dativu jednotn

LV MASTER context:
Sieviešu kārta datīvā

Luna PROPOSED:
Ženský rod v dativu

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ženský rod v dativu

OWNER note:

---

### #097

Audit ID: ART-L16-094
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[4]/text
Field: sections[2].items[4].text
Category: PEDAGOGICAL_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Podstatná jména ženského rodu nemají koncovku v dativu jednotného čísla.

DE context:
Podstatn | jm | na  | ensk | ho rodu nemaj | koncovku v dativu jednotn

LV MASTER context:
Sieviešu kārtas lietvārdi vienskaitļa datīvā nepieņem galotni.

Luna PROPOSED:
Podstatná jména ženského rodu v dativu jednotného čísla nepřibírají koncovku -e.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Podstatná jména ženského rodu v dativu jednotného čísla nepřibírají koncovku -e.

OWNER note:

---

### #098

Audit ID: ART-L16-098
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Nenoteiktais artikuls datīvā

LV MASTER context:
Nenoteiktais artikuls datīvā

Luna PROPOSED:
Neurčitý člen v dativu

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Neurčitý člen v dativu

OWNER note:

---

### #099

Audit ID: ART-L16-105
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[6]/heading
Field: sections[2].items[6].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Daudzskaitļa datīvs

DE context:
Dativ v mno | sle a podstatn | jm | no maj | asto koncovku -n.

LV MASTER context:
Daudzskaitļa datīvs

Luna PROPOSED:
Dativ množného čísla

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Dativ množného čísla

OWNER note:
Sdílený target s #100.

---

### #100

Audit ID: ART-L16-105
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[6]/heading
Field: sections[2].items[6].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Daudzskaitļa datīvs

DE context:
Dativ v mno | sle a podstatn | jm | no maj | asto koncovku -n.

LV MASTER context:
Daudzskaitļa datīvs

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Dativ množného čísla

OWNER note:
SOURCE_DE_ISSUE: CS heading opraven společně s #099; DE zdroj neměněn.

---

### #101

Audit ID: ART-L16-106
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[6]/text
Field: sections[2].items[6].text
Category: CS_GRAMMAR
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dativ v množném čísle a podstatné jméno mají často koncovku -n.

DE context:
Dativ v mno | sle a podstatn | jm | no maj | asto koncovku -n.

LV MASTER context:
Daudzskaitļa datīvā artikuls un lietvārds bieži pieņem galotni -n.

Luna PROPOSED:
V dativu množného čísla má podstatné jméno často koncovku -n.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V dativu množného čísla má podstatné jméno často koncovku -n.

OWNER note:
Sdílený target s #102.

---

### #102

Audit ID: ART-L16-106
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[6]/text
Field: sections[2].items[6].text
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dativ v množném čísle a podstatné jméno mají často koncovku -n.

DE context:
Dativ v mno | sle a podstatn | jm | no maj | asto koncovku -n.

LV MASTER context:
Daudzskaitļa datīvā artikuls un lietvārds bieži pieņem galotni -n.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V dativu množného čísla má podstatné jméno často koncovku -n.

OWNER note:
SOURCE_DE_ISSUE: CS text opraven společně s #101; DE zdroj neměněn.

---

### #103

Audit ID: ART-L16-111
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[7]/heading
Field: sections[2].items[7].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ja daudzskaitlis jau beidzas ar -n

DE context:
Pokud ji | mno | slo kon | na -n, dal | n se nep | id

LV MASTER context:
Ja daudzskaitlis jau beidzas ar -n

Luna PROPOSED:
Pokud množné číslo již končí na -n

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Pokud množné číslo již končí na -n

OWNER note:

---

### #104

Audit ID: ART-L16-112
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[7]/text
Field: sections[2].items[7].text
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud již množné číslo končí na -n, další -n se nepřidává.

DE context:
Pokud ji | mno | slo kon | na -n, dal | n se nep | id

LV MASTER context:
Ja daudzskaitlis jau beidzas ar -n, vēl vienu -n nepievieno.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; CS text je korektní, DE neměněn.

---

### #105

Audit ID: ART-L16-116
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[8]/heading
Field: sections[2].items[8].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Geben

DE context:
U slovesa geben se e m | v i ve  | osob | jednotn | ho  | sla.

LV MASTER context:
geben

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE: německý slovesný heading záměrný; DE neměněn.

---

### #106

Audit ID: ART-L16-117
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[8]/text
Field: sections[2].items[8].text
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
U slovesa geben se e mění v i ve 2. a 3. osobě jednotného čísla.

DE context:
U slovesa geben se e m | v i ve  | osob | jednotn | ho  | sla.

LV MASTER context:
Darbības vārdā geben 2. un 3. personā vienskaitlī e pārvēršas par i.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; CS popis geben je korektní.

---

### #107

Audit ID: ART-L16-121
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[9]/heading
Field: sections[2].items[9].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Sich nähern

DE context:
Zvratn | sloveso | sich nähern - p | ibl | it se.

LV MASTER context:
sich nähern

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE: německý heading sich nähern záměrný.

---

### #108

Audit ID: ART-L16-122
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[9]/text
Field: sections[2].items[9].text
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Zvratné sloveso: sich nähern - přiblížit se.

DE context:
Zvratn | sloveso | sich nähern - p | ibl | it se.

LV MASTER context:
Atgriezeniskais darbības vārds: sich nähern — tuvoties.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; CS text je korektní.

---

### #109

Audit ID: ART-L16-126
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[10]/heading
Field: sections[2].items[10].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Daudzskaitlis ar Umlaut

LV MASTER context:
Daudzskaitlis ar Umlaut

Luna PROPOSED:
Množné číslo s přehláskou

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Množné číslo s přehláskou

OWNER note:

---

### #110

Audit ID: ART-L16-129
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[11]/heading
Field: sections[2].items[11].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Bez artikula

DE context:
asto pou | van | slova bez  | nku | die Milch, das Brot.

LV MASTER context:
Bez artikula

Luna PROPOSED:
Bez členu

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Bez členu

OWNER note:
Sdílený target s #111.

---

### #111

Audit ID: ART-L16-129
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[11]/heading
Field: sections[2].items[11].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Bez artikula

DE context:
asto pou | van | slova bez  | nku | die Milch, das Brot.

LV MASTER context:
Bez artikula

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Bez členu

OWNER note:
SOURCE_DE_ISSUE: CS heading opraven společně s #110.

---

### #112

Audit ID: ART-L16-130
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[11]/text
Field: sections[2].items[11].text
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Často používaná slova bez článku: die Milch, das Brot.

DE context:
asto pou | van | slova bez  | nku | die Milch, das Brot.

LV MASTER context:
Vārdi, kas bieži lietojami bez artikula: die Milch, das Brot.

Luna PROPOSED:
Často používaná slova bez členu: Milch, Brot.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Často používaná slova bez členu: Milch, Brot.

OWNER note:
Sdílený target s #113, #114.

---

### #113

Audit ID: ART-L16-130
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[11]/text
Field: sections[2].items[11].text
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Často používaná slova bez článku: die Milch, das Brot.

DE context:
asto pou | van | slova bez  | nku | die Milch, das Brot.

LV MASTER context:
Vārdi, kas bieži lietojami bez artikula: die Milch, das Brot.

Luna PROPOSED:
Často používaná slova bez členu: Milch, Brot.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Často používaná slova bez členu: Milch, Brot.

OWNER note:
Sdílený target s #112, #114.

---

### #114

Audit ID: ART-L16-130
Source object: kurssLesson16
Target: kurssLesson16/section[2]/item[11]/text
Field: sections[2].items[11].text
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Často používaná slova bez článku: die Milch, das Brot.

DE context:
asto pou | van | slova bez  | nku | die Milch, das Brot.

LV MASTER context:
Vārdi, kas bieži lietojami bez artikula: die Milch, das Brot.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Často používaná slova bez členu: Milch, Brot.

OWNER note:
SOURCE_DE_ISSUE: CS text opraven společně s #112/#113.

---

### #115

Audit ID: ART-L16-132
Source object: kurssLesson16
Target: kurssLesson16/section[3]/item[0]
Field: sections[3].items[0]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ve slovech wem, dem, den a der je e dlouhé a vyslovuje se přibližně jako české é.

DE context:
Ve slovech wem, dem, den a der je e dlouh | a vyslovuje se p | ibli | jako  | esk

LV MASTER context:
Vārdos wem, dem, den, der — e ir garš un šaurs.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.

---

### #116

Audit ID: ART-L16-133
Source object: kurssLesson16
Target: kurssLesson16/section[3]/item[1]
Field: sections[3].items[1]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ve slově gehorchen se h vyslovuje: ge-hor-chen.

DE context:
Ve slov | gehorchen se h vyslovuje | ge-hor-chen.

LV MASTER context:
Vārdā gehorchen h ir dzirdams: ge-hor-chen.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.

---

### #117

Audit ID: ART-L16-134
Source object: kurssLesson16
Target: kurssLesson16/section[3]/item[2]
Field: sections[3].items[2]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ve slově die Wälder se ä vyslovuje jako krátké otevřené e.

DE context:
Ve slov | die Wälder se ä vyslovuje jako kr | tk | otev | en | e.

LV MASTER context:
die Wälder: ä izrunā kā šaurais īsais e.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.

---

### #118

Audit ID: ART-L16-135
Source object: kurssLesson16
Target: kurssLesson16/section[3]/item[3]
Field: sections[3].items[3]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ve slově die Bäuerinnen se äu vyslovuje přibližně jako české oj.

DE context:
Ve slov | die Bäuerinnen se äu vyslovuje p | ibli | jako  | esk | oj.

LV MASTER context:
die Bäuerinnen: äu izrunā kā oi.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.

---

### #119

Audit ID: ART-L16-136
Source object: kurssLesson16
Target: kurssLesson16/section[3]/item[4]
Field: sections[3].items[4]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ve slově die Wiese se skupina ie vyslovuje jako dlouhé í.

DE context:
Ve slov | die Wiese se skupina ie vyslovuje jako dlouh

LV MASTER context:
-ie ir garā ī apzīmējums: die Wiese.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE dokumentováno; výslovnostní CS text korektní.

---

### #120

Audit ID: ART-L16-139
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

DE context:
Der Vater ruft den Mann.

LV MASTER context:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

Luna PROPOSED:
Doplň správný člen v dativu/akuzativu podle významu věty.

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu/akuzativu podle významu věty.

OWNER note:
Stejný OWNER NEW pro #121–#125.

---

### #121

Audit ID: ART-L16-142
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[1]/task
Field: sections[4].cards[1].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

DE context:
Der Vater ruft die Frau.

LV MASTER context:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu/akuzativu podle významu věty.

OWNER note:

---

### #122

Audit ID: ART-L16-145
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[2]/task
Field: sections[4].cards[2].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

DE context:
Der Vater ruft das Kind.

LV MASTER context:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu/akuzativu podle významu věty.

OWNER note:

---

### #123

Audit ID: ART-L16-148
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[3]/task
Field: sections[4].cards[3].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

DE context:
Der Vater ruft den Sohn.

LV MASTER context:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu/akuzativu podle významu věty.

OWNER note:

---

### #124

Audit ID: ART-L16-151
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[4]/task
Field: sections[4].cards[4].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

DE context:
Der Vater ruft das Fräulein.

LV MASTER context:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu/akuzativu podle významu věty.

OWNER note:

---

### #125

Audit ID: ART-L16-154
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[5]/task
Field: sections[4].cards[5].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

DE context:
Der Vater ruft die Tante.

LV MASTER context:
Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu/akuzativu podle významu věty.

OWNER note:

---

### #126

Audit ID: ART-L16-157
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[6]/task
Field: sections[4].cards[6].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich dem Knechte.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
Doplň správný člen v dativu.

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:
Stejný OWNER NEW pro #127–#133.

---

### #127

Audit ID: ART-L16-160
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[7]/task
Field: sections[4].cards[7].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich der Tochter.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #128

Audit ID: ART-L16-163
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[8]/task
Field: sections[4].cards[8].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich der Magd.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #129

Audit ID: ART-L16-166
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[9]/task
Field: sections[4].cards[9].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich dem Lehrer.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #130

Audit ID: ART-L16-169
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[10]/task
Field: sections[4].cards[10].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich dem Tischler.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #131

Audit ID: ART-L16-172
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[11]/task
Field: sections[4].cards[11].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich der Lehrerin.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #132

Audit ID: ART-L16-175
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[12]/task
Field: sections[4].cards[12].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich dem Mädchen.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #133

Audit ID: ART-L16-178
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[13]/task
Field: sections[4].cards[13].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ieliec pareizo artikulu datīvā.

DE context:
Der Vater nähert sich dem Jäger.

LV MASTER context:
Ieliec pareizo artikulu datīvā.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_WORD)

Confidence: high

Status: LABOT

OWNER NEW:
Doplň správný člen v dativu.

OWNER note:

---

### #134

Audit ID: ART-L16-181
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[14]/task
Field: sections[4].cards[14].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Pārveido daudzskaitlī.

DE context:
Der Vater ruft die Männer, die Frauen, die Kinder, die Söhne, die Fräulein, die Tanten.

LV MASTER context:
Pārveido daudzskaitlī.

Luna PROPOSED:
Převeď do množného čísla.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Převeď do množného čísla.

OWNER note:
Stejný OWNER NEW pro #135.

---

### #135

Audit ID: ART-L16-184
Source object: kurssLesson16
Target: kurssLesson16/section[4]/card[15]/task
Field: sections[4].cards[15].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Pārveido daudzskaitlī.

DE context:
Der Vater nähert sich den Knechten, den Töchtern, den Mägden, den Lehrern, den Tischlern, den Lehrerinnen, den Mädchen, den Jägern.

LV MASTER context:
Pārveido daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Převeď do množného čísla.

OWNER note:

---

### #136

Audit ID: ART-L16-186
Source object: kurssLesson16
Target: kurssLesson16/section[5]/title
Field: sections[5].title
Category: FALSE_POSITIVE
Severity: LOW
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přeložit

DE context:
kurssLesson16

LV MASTER context:
Pārtulko

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: FALSE_POSITIVE

OWNER NEW:

OWNER note:
„Přeložit“ je korektní český název sekce (LV Pārtulko).

---

### #137

Audit ID: ART-XSEC-003
Source object: kurssLesson8
Target: kurssLesson8/section[0]/item[0]
Field: sections[0].items[0]
Category: SOURCE_DE_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Der Lehrer kommt. Alle Schüler stehen auf und grüßen den Lehrer. Sie sagen: „Guten Morgen, Herr Lehrer!“

DE context:
Der Lehrer kommt. Alle Schüler stehen auf und grüßen den Lehrer. Sie sagen | Guten Morgen, Herr Lehrer!“

LV MASTER context:
Der Lehrer kommt. Alle Schüler stehen auf und grüßen den Lehrer. Sie sagen: „Guten Morgen, Herr Lehrer!“

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE: německý dialog v CS kurzu záměrný; DE neměněn.

---

### #138

Audit ID: ART-XSEC-046
Source object: kurssLesson9
Target: kurssLesson9/section[1]/item[11]
Field: sections[1].items[11]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Dieser (dīzer) — šis

DE context:
Dieser (d | zer)  | is

LV MASTER context:
dieser (dīzer) — šis

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Dieser (dízer) — tento

OWNER note:

---

### #139

Audit ID: ART-XSEC-047
Source object: kurssLesson9
Target: kurssLesson9/section[1]/item[12]
Field: sections[1].items[12]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Jener (jēner) — tas

DE context:
Jener (j | ner)  | tas

LV MASTER context:
jener (jēner) — tas

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Jener (jéner) — ten

OWNER note:

---

### #140

Audit ID: ART-XSEC-048
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[0]/heading
Field: sections[2].items[0].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Norādāmie vietniekvārdi

DE context:
Jako ur | it | len uve | te z | jmena dieser a jener.

LV MASTER context:
Norādāmie vietniekvārdi

Luna PROPOSED:
Ukazovací zájmena

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ukazovací zájmena

OWNER note:
Sdílený target s #141.

---

### #141

Audit ID: ART-XSEC-048
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[0]/heading
Field: sections[2].items[0].heading
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Norādāmie vietniekvārdi

DE context:
Jako ur | it | len uve | te z | jmena dieser a jener.

LV MASTER context:
Norādāmie vietniekvārdi

Luna PROPOSED:
Ukazovací zájmena

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ukazovací zájmena

OWNER note:
DE_PARITY_ISSUE: CS heading opraven společně s #140; DE neměněn.

---

### #142

Audit ID: ART-XSEC-049
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[0]/text
Field: sections[2].items[0].text
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Jako určitý člen uveďte zájmena dieser a jener.

DE context:
Jako ur | it | len uve | te z | jmena dieser a jener.

LV MASTER context:
Norādāmos vietniekvārdus dieser un jener loka kā noteikto artikulu.

Luna PROPOSED:
Ukazovací zájmena dieser a jener se skloňují podobně jako určitý člen.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ukazovací zájmena dieser a jener se skloňují podobně jako určitý člen.

OWNER note:
Sdílený target s #143.

---

### #143

Audit ID: ART-XSEC-049
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[0]/text
Field: sections[2].items[0].text
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Jako určitý člen uveďte zájmena dieser a jener.

DE context:
Jako ur | it | len uve | te z | jmena dieser a jener.

LV MASTER context:
Norādāmos vietniekvārdus dieser un jener loka kā noteikto artikulu.

Luna PROPOSED:
Ukazovací zájmena dieser a jener se skloňují podobně jako určitý člen.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ukazovací zájmena dieser a jener se skloňují podobně jako určitý člen.

OWNER note:
DE_PARITY_ISSUE: CS text opraven společně s #142; DE neměněn.

---

### #144

Audit ID: ART-XSEC-050
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[1]/heading
Field: sections[2].items[1].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vienskaitlis

LV MASTER context:
Vienskaitlis

Luna PROPOSED:
Jednotné číslo

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Jednotné číslo

OWNER note:

---

### #145

Audit ID: ART-XSEC-059
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[3]/heading
Field: sections[2].items[3].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Artikulu nelieto

DE context:
Pokud p | ed podstatn | m jm | nem p | edch | jmeno nebo 

LV MASTER context:
Artikulu nelieto

Luna PROPOSED:
Člen se nepoužívá

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Člen se nepoužívá

OWNER note:
Sdílený target s #146.

---

### #146

Audit ID: ART-XSEC-059
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[3]/heading
Field: sections[2].items[3].heading
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Artikulu nelieto

DE context:
Pokud p | ed podstatn | m jm | nem p | edch | jmeno nebo 

LV MASTER context:
Artikulu nelieto

Luna PROPOSED:
Člen se nepoužívá

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Člen se nepoužívá

OWNER note:
DE_PARITY_ISSUE: CS heading opraven společně s #145; DE neměněn.

---

### #147

Audit ID: ART-XSEC-060
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[3]/text
Field: sections[2].items[3].text
Category: CS_GRAMMAR
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud před podstatným jménem předchází zájmeno nebo číselné slovo, člen se nepoužije.

DE context:
Pokud p | ed podstatn | m jm | nem p | edch | jmeno nebo 

LV MASTER context:
Ja lietvārda priekšā stāv vietniekvārds vai skaitļa vārds, artikulu nelieto.

Luna PROPOSED:
Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužívá.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužívá.

OWNER note:
Sdílený target s #148.

---

### #148

Audit ID: ART-XSEC-060
Source object: kurssLesson9
Target: kurssLesson9/section[2]/item[3]/text
Field: sections[2].items[3].text
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud před podstatným jménem předchází zájmeno nebo číselné slovo, člen se nepoužije.

DE context:
Pokud p | ed podstatn | m jm | nem p | edch | jmeno nebo 

LV MASTER context:
Ja lietvārda priekšā stāv vietniekvārds vai skaitļa vārds, artikulu nelieto.

Luna PROPOSED:
Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužívá.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužívá.

OWNER note:
DE_PARITY_ISSUE: CS text opraven společně s #147; DE neměněn.

---

### #149

Audit ID: ART-XSEC-069
Source object: kurssLesson10
Target: kurssLesson10/title
Field: title
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přednáška 10

DE context:
Lesson10

LV MASTER context:
Lekcija 10

Luna PROPOSED:
Lekce 10

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
Kurz konzistentně používá „Přednáška“ (shodně s ostatními lekcemi).

---

### #150

Audit ID: ART-XSEC-069
Source object: kurssLesson10
Target: kurssLesson10/title
Field: title
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přednáška 10

DE context:
Lesson10

LV MASTER context:
Lekcija 10

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
DE_PARITY_ISSUE dokumentováno; stejný důvod jako #149 — Přednáška konvence.

---

### #151

Audit ID: ART-XSEC-071
Source object: kurssLesson10
Target: kurssLesson10/intro
Field: intro
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Desátá přednáška: sein, können, příkazové formy, zdraví, věk a povolání.

DE context:
Lesson10

LV MASTER context:
Desmitā lekcija: sein, können, pavēles formas, veselība, vecums un profesijas.

Luna PROPOSED:
Desátá lekce: sein, können, rozkazovací způsob, zdraví, věk a povolání.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Desátá přednáška: sein, können, rozkazovací způsob, zdraví, věk a povolání.

OWNER note:
Sdílený target s #152; Přednáška konvence zachována.

---

### #152

Audit ID: ART-XSEC-071
Source object: kurssLesson10
Target: kurssLesson10/intro
Field: intro
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Desátá přednáška: sein, können, příkazové formy, zdraví, věk a povolání.

DE context:
Lesson10

LV MASTER context:
Desmitā lekcija: sein, können, pavēles formas, veselība, vecums un profesijas.

Luna PROPOSED:
Desátá lekce: sein, können, rozkazovací způsob, zdraví, věk a povolání.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Desátá přednáška: sein, können, rozkazovací způsob, zdraví, věk a povolání.

OWNER note:
DE_PARITY_ISSUE: CS intro opraven společně s #151; DE neměněn.

---

### #153

Audit ID: ART-XSEC-076
Source object: kurssLesson11
Target: kurssLesson11/title
Field: title
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přednáška 11

DE context:
Lesson11

LV MASTER context:
Lekcija 11

Luna PROPOSED:
Lekce 11

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
Kurz konzistentně používá „Přednáška“.

---

### #154

Audit ID: ART-XSEC-076
Source object: kurssLesson11
Target: kurssLesson11/title
Field: title
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přednáška 11

DE context:
Lesson11

LV MASTER context:
Lekcija 11

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
DE_PARITY_ISSUE dokumentováno; stejný důvod jako #153.

---

### #155

Audit ID: ART-XSEC-077
Source object: kurssLesson11
Target: kurssLesson11/subtitle
Field: subtitle
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Haben, kein/keine/keinen, přivlastňovací a složená podstatná jména

DE context:
Lesson11

LV MASTER context:
Haben, kein/keine/keinen, piederība un saliktie lietvārdi

Luna PROPOSED:
Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména

OWNER note:
Sdílený target s #156.

---

### #156

Audit ID: ART-XSEC-077
Source object: kurssLesson11
Target: kurssLesson11/subtitle
Field: subtitle
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Haben, kein/keine/keinen, přivlastňovací a složená podstatná jména

DE context:
Lesson11

LV MASTER context:
Haben, kein/keine/keinen, piederība un saliktie lietvārdi

Luna PROPOSED:
Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména

OWNER note:
DE_PARITY_ISSUE: CS subtitle opraven společně s #155.

---

### #157

Audit ID: ART-XSEC-078
Source object: kurssLesson11
Target: kurssLesson11/intro
Field: intro
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Jedenáctá přednáška: haben, negace s keinem, držení, složená podstatná jména a slovosled s denn.

DE context:
Lesson11

LV MASTER context:
Vienpadsmitā lekcija: haben, noliegums ar kein, piederības izteikšana, saliktie lietvārdi un vārdu kārtība ar denn.

Luna PROPOSED:
Jedenáctá lekce: haben, zápor s kein/keine/keinen, vyjadřování vlastnictví, složená podstatná jména a slovosled s denn.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Jedenáctá přednáška: haben, zápor s kein/keine/keinen, vyjadřování vlastnictví, složená podstatná jména a slovosled s denn.

OWNER note:
Sdílený target s #158.

---

### #158

Audit ID: ART-XSEC-078
Source object: kurssLesson11
Target: kurssLesson11/intro
Field: intro
Category: DE_PARITY_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Jedenáctá přednáška: haben, negace s keinem, držení, složená podstatná jména a slovosled s denn.

DE context:
Lesson11

LV MASTER context:
Vienpadsmitā lekcija: haben, noliegums ar kein, piederības izteikšana, saliktie lietvārdi un vārdu kārtība ar denn.

Luna PROPOSED:
Jedenáctá lekce: haben, zápor s kein/keine/keinen, vyjadřování vlastnictví, složená podstatná jména a slovosled s denn.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Jedenáctá přednáška: haben, zápor s kein/keine/keinen, vyjadřování vlastnictví, složená podstatná jména a slovosled s denn.

OWNER note:
DE_PARITY_ISSUE: CS intro opraven společně s #157.

---

### #159

Audit ID: ART-XSEC-101
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[2]/heading
Field: sections[3].items[2].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Český datīvs un vācu nominatīvs/akuzatīvs

DE context:
tin | je osoba, kter | co pat | v dativu a p | edm | t v nominativu. V n

LV MASTER context:
Latviešu datīvs un vācu nominatīvs/akuzatīvs

Luna PROPOSED:
Český dativ a německý nominativ/akuzativ

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Český dativ a německý nominativ/akuzativ

OWNER note:

---

### #160

Audit ID: ART-XSEC-102
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[2]/text
Field: sections[3].items[2].text
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
V češtině je osoba, které něco patří, v dativu a předmět v nominativu. V němčině je osoba v nominativu a posedlý předmět v akuzativu.

DE context:
tin | je osoba, kter | co pat | v dativu a p | edm | t v nominativu. V n

LV MASTER context:
Latviešu valodā persona, kam kas pieder, ir datīvā, bet priekšmets — nominatīvā. Vācu valodā persona ir nominatīvā, bet piederošais priekšmets — akuzatīvā.

Luna PROPOSED:
V češtině je osoba, které něco patří, v dativu a vlastněný předmět v nominativu. V němčině je osoba v nominativu a vlastněný předmět v akuzativu.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
V češtině je osoba, které něco patří, v dativu a vlastněný předmět v nominativu. V němčině je osoba v nominativu a vlastněný předmět v akuzativu.

OWNER note:

---

### #161

Audit ID: ART-XSEC-103
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[3]/heading
Field: sections[3].items[3].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Piemēri

LV MASTER context:
Piemēri

Luna PROPOSED:
Příklady

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Příklady

OWNER note:

---

### #162

Audit ID: ART-XSEC-104
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[3]/example[0]
Field: sections[3].items[3].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ich habe einen Tisch — man ir galds

DE context:
Ich habe einen Tisch  | man ir galds

LV MASTER context:
Ich habe einen Tisch — man ir galds

Luna PROPOSED:
Ich habe einen Tisch — Mám stůl

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ich habe einen Tisch — Mám stůl

OWNER note:

---

### #163

Audit ID: ART-XSEC-105
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[3]/example[1]
Field: sections[3].items[3].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Der Vater hat ein Buch — tēvam ir grāmata

DE context:
Der Vater hat ein Buch  | vam ir gr | mata

LV MASTER context:
Der Vater hat ein Buch — tēvam ir grāmata

Luna PROPOSED:
Der Vater hat ein Buch — Otec má knihu

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Der Vater hat ein Buch — Otec má knihu

OWNER note:

---

### #164

Audit ID: ART-XSEC-106
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[3]/example[2]
Field: sections[3].items[3].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Sie haben eine Feder — viņiem ir spalva

DE context:
Sie haben eine Feder  | vi | iem ir spalva

LV MASTER context:
Sie haben eine Feder — viņiem ir spalva

Luna PROPOSED:
Sie haben eine Feder — Oni mají pero

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Sie haben eine Feder — Oni mají pero

OWNER note:

---

### #165

Audit ID: ART-XSEC-108
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[7]/text
Field: sections[3].items[7].text
Category: CS_GRAMMAR
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dvojitá negace českýho jazyka se v němčině nevyjadřuje záporným slovem kein. Záporné slovo kein stojí pouze před podstatným jménem.

DE context:
Dvojit | negace  | esk | ho jazyka se v n | in | nevyjad

LV MASTER context:
Latviešu valodas divkāršo noliegumu vāciski neizsaka ar noliedzamo vārdu kein. Noliedzamais vārds kein stāv tikai lietas vārda priekšā.

Luna PROPOSED:
Dvojitá negace českého jazyka se v němčině nevyjadřuje záporným slovem kein. Záporné slovo kein stojí před podstatným jménem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Dvojitá negace českého jazyka se v němčině nevyjadřuje záporným slovem kein. Záporné slovo kein stojí před podstatným jménem.

OWNER note:

---

### #166

Audit ID: ART-XSEC-109
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[10]/heading
Field: sections[3].items[10].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vārdu kārtība ar denn

DE context:
Obsahuje-li narativn | ta spojku denn, z | st | sloveso na  | pozici. Spojka denn se nepo | jako 

LV MASTER context:
Vārdu kārtība ar denn

Luna PROPOSED:
Slovosled se spojkou denn

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Slovosled se spojkou denn

OWNER note:

---

### #167

Audit ID: ART-XSEC-110
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[10]/text
Field: sections[3].items[10].text
Category: CS_TERMINOLOGY
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Obsahuje-li narativní věta spojku denn, zůstává sloveso na 2. pozici. Spojka denn se nepočítá jako člen věty.

DE context:
Obsahuje-li narativn | ta spojku denn, z | st | sloveso na  | pozici. Spojka denn se nepo | jako 

LV MASTER context:
Ja stāstāmā teikumā ir saiklis denn, darbības vārds paliek 2. vietā. Saikli denn kā teikuma locekli neskaita.

Luna PROPOSED:
Obsahuje-li oznamovací věta spojku denn, zůstává sloveso na 2. pozici. Spojka denn se nepočítá jako větný člen.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Obsahuje-li oznamovací věta spojku denn, zůstává sloveso na 2. pozici. Spojka denn se nepočítá jako větný člen.

OWNER note:

---

### #168

Audit ID: ART-XSEC-111
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[12]/heading
Field: sections[3].items[12].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Saliktie lietvārdi

DE context:
Slo | en | m podstatn | m jm | m p | edch

LV MASTER context:
Saliktie lietvārdi

Luna PROPOSED:
Složená podstatná jména

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Složená podstatná jména

OWNER note:

---

### #169

Audit ID: ART-XSEC-112
Source object: kurssLesson11
Target: kurssLesson11/section[3]/item[12]/text
Field: sections[3].items[12].text
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Složeným podstatným jménům předchází člen posledního podstatného jména. Důraz je kladen na první slovo případu.

DE context:
Slo | en | m podstatn | m jm | m p | edch

LV MASTER context:
Salikto lietvārdu priekšā stāv pēdējā lietvārda artikuls. Uzsvars ir uz pirmā lietas vārda.

Luna PROPOSED:
Před složenými podstatnými jmény stojí člen určený podle posledního podstatného jména. Přízvuk bývá na první části složeniny.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Před složenými podstatnými jmény stojí člen určený podle posledního podstatného jména. Přízvuk bývá na první části složeniny.

OWNER note:

---

### #170

Audit ID: ART-XSEC-118
Source object: kurssLesson12
Target: kurssLesson12/section[1]/item[8]
Field: sections[1].items[8]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Kleiner als ich — mazāks par mani

DE context:
Kleiner als ich  | maz | ks par mani

LV MASTER context:
kleiner als ich — mazāks par mani

Luna PROPOSED:
Kleiner als ich — Menší než já

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Kleiner als ich — Menší než já

OWNER note:

---

### #171

Audit ID: ART-XSEC-120
Source object: kurssLesson12
Target: kurssLesson12/section[3]/item[0]/text
Field: sections[3].items[0].text
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Superlativní stupeň (Komparativ) adjektiv se tvoří od základního stupně (Positiv) s koncovkou -er.

DE context:
Superlativn | stupe | Komparativ) adjektiv se tvo | od z | kladn | ho stupn

LV MASTER context:
Īpašības vārdu pārāko pakāpi (Komparativ) darina no pamata pakāpes (Positiv) ar galotni -er.

Luna PROPOSED:
Druhý stupeň (komparativ) přídavných jmen se tvoří od základního stupně (pozitiv) s koncovkou -er.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Druhý stupeň (komparativ) přídavných jmen se tvoří od základního stupně (pozitiv) s koncovkou -er.

OWNER note:

---

### #172

Audit ID: ART-XSEC-129
Source object: kurssLesson13
Target: kurssLesson13/section[1]/item[9]
Field: sections[1].items[9]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Die Beine — kājas

DE context:
Die Beine  | jas

LV MASTER context:
die Beine — kājas

Luna PROPOSED:
Die Beine — Nohy

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Die Beine — Nohy

OWNER note:

---

### #173

Audit ID: ART-XSEC-130
Source object: kurssLesson13
Target: kurssLesson13/section[1]/item[31]
Field: sections[1].items[31]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Beschneiden — apgriezt

DE context:
Beschneiden  | apgriezt

LV MASTER context:
beschneiden — apgriezt

Luna PROPOSED:
Beschneiden — Ořezávat

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Beschneiden — ořezávat

OWNER note:

---

### #174

Audit ID: ART-XSEC-131
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Saliktie darbības vārdi

DE context:
Pokud je p | edlo | kov | st p | zvu | odd

LV MASTER context:
Saliktie darbības vārdi

Luna PROPOSED:
Odlučitelná slovesa

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Odlučitelná slovesa

OWNER note:

---

### #175

Audit ID: ART-XSEC-135
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/heading
Field: sections[2].items[7].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vietniekvārds jeder

DE context:
jmeno jeder jde v kruz | ch jako  | nky der / die / das.

LV MASTER context:
Vietniekvārds jeder

Luna PROPOSED:
Zájmeno jeder

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Zájmeno jeder

OWNER note:

---

### #176

Audit ID: ART-XSEC-136
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/text
Field: sections[2].items[7].text
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Zájmeno jeder jde v kruzích jako články der / die / das.

DE context:
jmeno jeder jde v kruz | ch jako  | nky der / die / das.

LV MASTER context:
Vietniekvārds jeder lokās kā artikuli der / die / das.

Luna PROPOSED:
Zájmeno jeder se skloňuje jako určitý člen der / die / das.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Zájmeno jeder se skloňuje jako určitý člen der / die / das.

OWNER note:

---

### #177

Audit ID: ART-XSEC-137
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/table[0][1]
Field: sections[2].items[7].table[0][1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vīriešu

DE context:
rie

LV MASTER context:
Vīriešu

Luna PROPOSED:
Mužský rod

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Mužský rod

OWNER note:

---

### #178

Audit ID: ART-XSEC-138
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/table[0][2]
Field: sections[2].items[7].table[0][2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Sieviešu

DE context:
Sievie

LV MASTER context:
Sieviešu

Luna PROPOSED:
Ženský rod

Audit reason:
[DET] Latviešu atlikums (LV_PHRASE)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ženský rod

OWNER note:

---

### #179

Audit ID: ART-XSEC-139
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/table[0][3]
Field: sections[2].items[7].table[0][3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vidējā

DE context:
Vid

LV MASTER context:
Vidējā

Luna PROPOSED:
Střední rod

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Střední rod

OWNER note:

---

### #180

Audit ID: ART-XSEC-140
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/table[1][0]
Field: sections[2].items[7].table[1][0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Nominatīvs

DE context:
Nominat | vs

LV MASTER context:
Nominatīvs

Luna PROPOSED:
Nominativ

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Nominativ

OWNER note:

---

### #181

Audit ID: ART-XSEC-144
Source object: kurssLesson13
Target: kurssLesson13/section[2]/item[7]/table[2][0]
Field: sections[2].items[7].table[2][0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Akuzatīvs

DE context:
Akuzat | vs

LV MASTER context:
Akuzatīvs

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Akuzativ

OWNER note:

---

### #182

Audit ID: ART-XSEC-151
Source object: kurssLesson14
Target: kurssLesson14/section[1]/item[31]
Field: sections[1].items[31]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Munden — labi garšot

DE context:
Munden  | labi gar | ot

LV MASTER context:
munden — labi garšot

Luna PROPOSED:
munden — dobře chutnat

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
munden — dobře chutnat

OWNER note:

---

### #183

Audit ID: ART-XSEC-152
Source object: kurssLesson14
Target: kurssLesson14/section[2]/item[9]/heading
Field: sections[2].items[9].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Svarīgi

DE context:
tin | asto  | me „mus | m se u | it“, „mus | ps

LV MASTER context:
Svarīgi

Luna PROPOSED:
Důležité

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Důležité

OWNER note:

---

### #184

Audit ID: ART-XSEC-172
Source object: kurssLesson15
Target: kurssLesson15/section[0]/item[19]
Field: sections[0].items[19]
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Isst den Apfel!

DE context:
Isst den Apfel!

LV MASTER context:
Isst den Apfel!

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: NELABOT

OWNER NEW:

OWNER note:
SOURCE_DE_ISSUE: německý imperativ záměrný; DE neměněn.

---

### #185

Audit ID: ART-XSEC-175
Source object: kurssLesson15
Target: kurssLesson15/section[1]/item[19]
Field: sections[1].items[19]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Entzweischneiden — pārgriezt uz pusēm

DE context:
Entzweischneiden  | rgriezt uz pus

LV MASTER context:
entzweischneiden — pārgriezt uz pusēm

Luna PROPOSED:
entzweischneiden — překrojit napůl

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
entzweischneiden — překrojit napůl

OWNER note:

---

### #186

Audit ID: ART-XSEC-177
Source object: kurssLesson15
Target: kurssLesson15/section[2]/item[6]/text
Field: sections[2].items[6].text
Category: PEDAGOGICAL_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
U složeného slovesa entzweischneiden je důraz kladen na předponu entzweí-, takže v přítomném čase je předpona oddělena a umístěna na konec věty.

DE context:
U slo | en | ho slovesa entzweischneiden je d | raz kladen na p | edponu entzwe | tak

LV MASTER context:
Saliktajā darbības vārdā entzweischneiden uzsvars ir uz priedēkļa entzweí-, tāpēc tagadnē priedēklis atdalās un nostājas teikuma beigās.

Luna PROPOSED:
Sloveso entzweischneiden je odlučitelné, takže se v přítomném čase jeho část entzwei odděluje a stojí na konci věty.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Sloveso entzweischneiden je odlučitelné, takže se v přítomném čase jeho část entzwei odděluje a stojí na konci věty.

OWNER note:

---

### #187

Audit ID: ART-XSEC-178
Source object: kurssLesson15
Target: kurssLesson15/section[2]/item[6]/example[0]
Field: sections[2].items[6].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm.

DE context:
Ich schneide den Apfel entzwei.  | Es p | rgrie | bolu uz pus | m.

LV MASTER context:
Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm.

Luna PROPOSED:
Ich schneide den Apfel entzwei. — Jablko překrojím napůl.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Ich schneide den Apfel entzwei. — Jablko překrojím napůl.

OWNER note:

---

### #188

Audit ID: ART-XSEC-210
Source object: kurssLesson17
Target: kurssLesson17/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / CRITICAL
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Atdalāmie priedēkļi

DE context:
Slo | en | slovesa auffangen a abwischen maj | zvuk na p | edpon | Proto je sou

LV MASTER context:
Atdalāmie priedēkļi

Luna PROPOSED:
Oddělitelné předpony

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Oddělitelné předpony

OWNER note:

---

### #189

Audit ID: ART-XSEC-211
Source object: kurssLesson17
Target: kurssLesson17/section[2]/item[5]/text
Field: sections[2].items[5].text
Category: CS_NATURALNESS
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Složená slovesa auffangen a abwischen mají přízvuk na předponě. Proto je současná předpona oddělena a umístěna na konec věty.

DE context:
Slo | en | slovesa auffangen a abwischen maj | zvuk na p | edpon | Proto je sou

LV MASTER context:
Saliktajiem darbības vārdiem auffangen un abwischen uzsvars ir uz priedēkļa. Tāpēc priedēklis tagadnē atdalās un nostājas teikuma beigās.

Luna PROPOSED:
Slovesa auffangen a abwischen mají přízvuk na předponě. Proto se předpona v přítomném čase odděluje a klade na konec věty.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Slovesa auffangen a abwischen mají přízvuk na předponě. Proto se předpona v přítomném čase odděluje a kládá na konec věty.

OWNER note:

---

### #190

Audit ID: ART-XSEC-215
Source object: kurssLesson17
Target: kurssLesson17/section[2]/item[6]/text
Field: sections[2].items[6].text
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Fegen a wischen oba znamenají zamést, ale použití je jiné.

DE context:
Fegen a wischen oba znamenaj | zam | st, ale pou | it | je jin

LV MASTER context:
Fegen un wischen abi nozīmē slaucīt, bet lietojums atšķiras.

Luna PROPOSED:
Fegen a wischen označují různé způsoby úklidu: fegen znamená zametat, zatímco wischen znamená vytírat nebo utírat.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Fegen a wischen označují různé způsoby úklidu: fegen znamená zametat, zatímco wischen znamená vytírat nebo utírat.

OWNER note:

---

### #191

Audit ID: ART-XSEC-216
Source object: kurssLesson17
Target: kurssLesson17/section[2]/item[6]/example[0]
Field: sections[2].items[6].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / CRITICAL
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Fegen — slaucīt ar slotu

DE context:
Fegen  | slauc | t ar slotu

LV MASTER context:
fegen — slaucīt ar slotu

Luna PROPOSED:
Fegen — zametat koštětem

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Fegen — zametat koštětem

OWNER note:

---

### #192

Audit ID: ART-XSEC-218
Source object: kurssLesson17
Target: kurssLesson17/section[2]/item[6]/example[2]
Field: sections[2].items[6].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / CRITICAL
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus

DE context:
Wischen / abwischen  | slauc | t ar lupatu, dr | nu, noslauc | t putek | us

LV MASTER context:
wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus

Luna PROPOSED:
Wischen / abwischen — vytírat nebo utírat hadrem či utěrkou, utírat prach

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Wischen / abwischen — vytírat nebo utírat hadrem či utěrkou, utírat prach

OWNER note:

---

### #193

Audit ID: ART-XSEC-222
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / CRITICAL
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

DE context:
Der Knecht sieht den Jäger, den Müller, den Tischler.

LV MASTER context:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

Luna PROPOSED:
Odpověz v jednotném čísle a poté v množném čísle.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Odpověz v jednotném čísle a poté v množném čísle.

OWNER note:
Stejný OWNER NEW pro #195, #197, #199.

---

### #194

Audit ID: ART-XSEC-223
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[0]/task2
Field: sections[4].cards[0].task2
Category: FOREIGN_LEFTOVER
Severity: HIGH / CRITICAL
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Tagad atbildi daudzskaitlī.

DE context:
Der Knecht sieht die Jäger, die Müller, die Tischler.

LV MASTER context:
Tagad atbildi daudzskaitlī.

Luna PROPOSED:
Nyní odpověz v množném čísle.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: LABOT

OWNER NEW:
Nyní odpověz v množném čísle.

OWNER note:
Stejný OWNER NEW pro #196, #198, #200.

---

### #195

Audit ID: ART-XSEC-225
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[1]/task
Field: sections[4].cards[1].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

DE context:
Der Knecht sieht den Besen, die Schaufel, den Garten.

LV MASTER context:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Odpověz v jednotném čísle a poté v množném čísle.

OWNER note:

---

### #196

Audit ID: ART-XSEC-226
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[1]/task2
Field: sections[4].cards[1].task2
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Tagad atbildi daudzskaitlī.

DE context:
Der Knecht sieht die Besen, die Schaufeln, die Gärten.

LV MASTER context:
Tagad atbildi daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Nyní odpověz v množném čísle.

OWNER note:

---

### #197

Audit ID: ART-XSEC-228
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[2]/task
Field: sections[4].cards[2].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

DE context:
Der Knecht spricht mit dem Vetter, mit der Base, mit dem Mädchen.

LV MASTER context:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Odpověz v jednotném čísle a poté v množném čísle.

OWNER note:

---

### #198

Audit ID: ART-XSEC-229
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[2]/task2
Field: sections[4].cards[2].task2
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Tagad atbildi daudzskaitlī.

DE context:
Der Knecht spricht mit den Vettern, mit den Basen, mit den Mädchen.

LV MASTER context:
Tagad atbildi daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Nyní odpověz v množném čísle.

OWNER note:

---

### #199

Audit ID: ART-XSEC-231
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[3]/task
Field: sections[4].cards[3].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

DE context:
Der Knecht arbeitet mit dem Spaten, mit diesem Beil, mit jener Säge.

LV MASTER context:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Odpověz v jednotném čísle a poté v množném čísle.

OWNER note:

---

### #200

Audit ID: ART-XSEC-232
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[3]/task2
Field: sections[4].cards[3].task2
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Tagad atbildi daudzskaitlī.

DE context:
Der Knecht arbeitet mit den Spaten, mit diesen Beilen, mit jenen Sägen.

LV MASTER context:
Tagad atbildi daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: LABOT

OWNER NEW:
Nyní odpověz v množném čísle.

OWNER note:

---

### #201

Audit ID: ART-XSEC-234
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[4]/task
Field: sections[4].cards[4].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

DE context:
Der Knecht hilft diesem Tischler, jener Frau, dem Fräulein.

LV MASTER context:
Atbildi vienskaitlī, pēc tam daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #202

Audit ID: ART-XSEC-235
Source object: kurssLesson17
Target: kurssLesson17/section[4]/card[4]/task2
Field: sections[4].cards[4].task2
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Tagad atbildi daudzskaitlī.

DE context:
Der Knecht hilft diesen Tischlern, jenen Frauen, den Fräulein.

LV MASTER context:
Tagad atbildi daudzskaitlī.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #203

Audit ID: ART-XSEC-236
Source object: kurssLesson18
Target: kurssLesson18/title
Field: title
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Přednáška 18

DE context:
Lesson18

LV MASTER context:
Lekcija 18

Luna PROPOSED:
Lekce 18

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #204

Audit ID: ART-XSEC-237
Source object: kurssLesson18
Target: kurssLesson18/subtitle
Field: subtitle
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wohin / wo, Akkusativ nebo Dativ s / in / auf

DE context:
Lesson18

LV MASTER context:
wohin / wo, Akkusativ vai Dativ ar an / in / auf

Luna PROPOSED:
Wohin / wo, akuzativ nebo dativ s předložkami an / in / auf

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #205

Audit ID: ART-XSEC-238
Source object: kurssLesson18
Target: kurssLesson18/intro
Field: intro
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Osmnáctá přednáška: wohin / wo, Akkusativ nebo Dativ s / in / auf.

DE context:
Lesson18

LV MASTER context:
Astoņpadsmitā lekcija: wohin / wo, Akkusativ vai Dativ ar an / in / auf.

Luna PROPOSED:
Osmnáctá lekce: wohin / wo, akuzativ nebo dativ s předložkami an / in / auf.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #206

Audit ID: ART-XSEC-249
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[1]/text
Field: sections[2].items[1].text
Category: SEMANTIC_MISMATCH
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud akce naznačuje změnu směru nebo místa, použije se Akkusativ. Otázka: Wohin? - kde?

DE context:
Pokud akce nazna | uje zm | nu sm | ru nebo m | sta, pou | ije se Akkusativ. Ot

LV MASTER context:
Ja darbība norāda virzienu vai vietas maiņu, lieto Akkusativ. Jautājums: wohin? — kurp?

Luna PROPOSED:
Pokud akce naznačuje změnu směru nebo místa, použije se Akkusativ. Otázka: Wohin? — kam?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #207

Audit ID: ART-XSEC-250
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[1]/example[0]
Field: sections[2].items[1].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ich gehe an den Tisch. — Es eju pie galda.

DE context:
Ich gehe an den Tisch.  | Es eju pie galda.

LV MASTER context:
Ich gehe an den Tisch. — Es eju pie galda.

Luna PROPOSED:
Ich gehe an den Tisch. — Jdu ke stolu.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #208

Audit ID: ART-XSEC-251
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[1]/example[1]
Field: sections[2].items[1].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.

DE context:
Ich stelle den Korb auf die Bank.  | Es nolieku grozu uz sola.

LV MASTER context:
Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.

Luna PROPOSED:
Ich stelle den Korb auf die Bank. — Pokládám koš na lavici.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #209

Audit ID: ART-XSEC-252
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[1]/example[2]
Field: sections[2].items[1].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā.

DE context:
Ich lege die Äpfel in das Körbchen.  | Es lieku  | bolus grozi

LV MASTER context:
Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā.

Luna PROPOSED:
Ich lege die Äpfel in das Körbchen. — Dávám jablka do košíku.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #210

Audit ID: ART-XSEC-253
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[1]/example[3]
Field: sections[2].items[1].examples[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.

DE context:
Ich gieße das Wasser in den Krug.  | Es leju  | deni kr

LV MASTER context:
Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.

Luna PROPOSED:
Ich gieße das Wasser in den Krug. — Nalévám vodu do džbánu.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #211

Audit ID: ART-XSEC-255
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[2]/text
Field: sections[2].items[2].text
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud akce označuje umístění nebo stav, použije se dativ. Otázka: jo? — kde?

DE context:
Pokud akce ozna | uje um | st | nebo stav, pou | ije se dativ. Ot | zka

LV MASTER context:
Ja darbība norāda atrašanās vietu vai stāvokli, lieto Dativ. Jautājums: wo? — kur?

Luna PROPOSED:
Pokud akce označuje umístění nebo stav, použije se dativ. Otázka: wo? — kde?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #212

Audit ID: ART-XSEC-256
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[2]/example[0]
Field: sections[2].items[2].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Ich stehe an dem Tische. — Es stāvu pie galda.

DE context:
Ich stehe an dem Tische.  | Es st | vu pie galda.

LV MASTER context:
Ich stehe an dem Tische. — Es stāvu pie galda.

Luna PROPOSED:
Ich stehe an dem Tische. — Stojím u stolu.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #213

Audit ID: ART-XSEC-257
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[2]/example[1]
Field: sections[2].items[2].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Der Korb steht auf der Bank. — Grozs stāv uz sola.

DE context:
Der Korb steht auf der Bank.  | Grozs st | v uz sola.

LV MASTER context:
Der Korb steht auf der Bank. — Grozs stāv uz sola.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #214

Audit ID: ART-XSEC-258
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[2]/example[2]
Field: sections[2].items[2].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Die Äpfel sind in dem Körbchen. — Āboli ir groziņā.

DE context:
Die Äpfel sind in dem Körbchen.  | boli ir grozi

LV MASTER context:
Die Äpfel sind in dem Körbchen. — Āboli ir groziņā.

Luna PROPOSED:
Die Äpfel sind in dem Körbchen. — Jablka jsou v košíku.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #215

Audit ID: ART-XSEC-259
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[2]/example[3]
Field: sections[2].items[2].examples[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Das Wasser ist in dem Kruge. — Ūdens ir krūzē.

DE context:
Das Wasser ist in dem Kruge.  | dens ir kr

LV MASTER context:
Das Wasser ist in dem Kruge. — Ūdens ir krūzē.

Luna PROPOSED:
Das Wasser ist in dem Kruge. — Voda je ve džbánu.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #216

Audit ID: ART-XSEC-260
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/heading
Field: sections[2].items[4].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Darbības vārdi ar wo?

DE context:
Tato slovesa  | asto ozna | uj | sto nebo stav, a proto odpov | daj | na ot

LV MASTER context:
Darbības vārdi ar wo?

Luna PROPOSED:
Slovesa s wo?

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #217

Audit ID: ART-XSEC-262
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[0]
Field: sections[2].items[4].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Sein — būt

DE context:
Sein 

LV MASTER context:
sein — būt

Luna PROPOSED:
Sein — být

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #218

Audit ID: ART-XSEC-263
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[1]
Field: sections[2].items[4].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Sich befinden — atrasties

DE context:
Sich befinden  | atrasties

LV MASTER context:
sich befinden — atrasties

Luna PROPOSED:
Sich befinden — nacházet se

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #219

Audit ID: ART-XSEC-264
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[2]
Field: sections[2].items[4].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Arbeiten — strādāt

DE context:
Arbeiten  | str

LV MASTER context:
arbeiten — strādāt

Luna PROPOSED:
Arbeiten — pracovat

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #220

Audit ID: ART-XSEC-265
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[3]
Field: sections[2].items[4].examples[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Liegen — gulēt / atrasties guļus

DE context:
Liegen  | gul | t / atrasties gu | us

LV MASTER context:
liegen — gulēt / atrasties guļus

Luna PROPOSED:
Liegen — ležet / nacházet se ve vodorovné poloze

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #221

Audit ID: ART-XSEC-266
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[4]
Field: sections[2].items[4].examples[4]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Sitzen — sēdēt

DE context:
Sitzen 

LV MASTER context:
sitzen — sēdēt

Luna PROPOSED:
Sitzen — sedět

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #222

Audit ID: ART-XSEC-267
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[5]
Field: sections[2].items[4].examples[5]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Hängen — karāties

DE context:
Hängen  | kar | ties

LV MASTER context:
hängen — karāties

Luna PROPOSED:
Hängen — viset

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #223

Audit ID: ART-XSEC-268
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[6]
Field: sections[2].items[4].examples[6]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Finden — atrast

DE context:
Finden  | atrast

LV MASTER context:
finden — atrast

Luna PROPOSED:
Finden — najít

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #224

Audit ID: ART-XSEC-269
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[7]
Field: sections[2].items[4].examples[7]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Suchen — meklēt

DE context:
Suchen  | mekl

LV MASTER context:
suchen — meklēt

Luna PROPOSED:
Suchen — hledat

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #225

Audit ID: ART-XSEC-270
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[4]/example[8]
Field: sections[2].items[4].examples[8]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Spielen — spēlēt

DE context:
Spielen  | sp

LV MASTER context:
spielen — spēlēt

Luna PROPOSED:
Spielen — hrát

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #226

Audit ID: ART-XSEC-271
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vielu vārdi

DE context:
Podstatn | jm | na obvykle stoj | bez  | lenu.

LV MASTER context:
Vielu vārdi

Luna PROPOSED:
Látková podstatná jména

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #227

Audit ID: ART-XSEC-273
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[5]/example[0]
Field: sections[2].items[5].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ich trinke Milch. — Es dzeru pienu.

DE context:
Ich trinke Milch.  | Es dzeru pienu.

LV MASTER context:
Ich trinke Milch. — Es dzeru pienu.

Luna PROPOSED:
Ich trinke Milch. — Piju mléko.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #228

Audit ID: ART-XSEC-274
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[5]/example[1]
Field: sections[2].items[5].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
In dem Eimer ist Wasser. — Spainī ir ūdens.

DE context:
In dem Eimer ist Wasser.  | Spain | ir  | dens.

LV MASTER context:
In dem Eimer ist Wasser. — Spainī ir ūdens.

Luna PROPOSED:
In dem Eimer ist Wasser. — V kbelíku je voda.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #229

Audit ID: ART-XSEC-275
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[6]/heading
Field: sections[2].items[6].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Konkrēta viela

DE context:
Pokud je l | tka zm | na v ur | it | m mno | stv

LV MASTER context:
Konkrēta viela

Luna PROPOSED:
Konkrétní látka

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #230

Audit ID: ART-XSEC-276
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[6]/text
Field: sections[2].items[6].text
Category: CS_NATURALNESS
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud je látka zmíněna v určitém množství nebo na určitém místě, pak je předmět použit.

DE context:
Pokud je l | tka zm | na v ur | it | m mno | stv

LV MASTER context:
Ja viela tiek minēta noteiktā daudzumā vai konkrētā vietā, tad lieto artikulu.

Luna PROPOSED:
Pokud je látka zmíněna v určitém množství nebo na určitém místě, použije se určitý člen.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #231

Audit ID: ART-XSEC-277
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[6]/example[0]
Field: sections[2].items[6].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.

DE context:
Ich gieße das Wasser in den Krug.  | Es leju  | deni kr

LV MASTER context:
Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #232

Audit ID: ART-XSEC-278
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[7]/heading
Field: sections[2].items[7].heading
Category: FOREIGN_LEFTOVER
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
In + vieta

DE context:
Pokud se p | edlo | ka in nep | ekl | jako „v“, ale vyjad | uje um

LV MASTER context:
in + vieta

Luna PROPOSED:
In + místo

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #233

Audit ID: ART-XSEC-279
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[7]/text
Field: sections[2].items[7].text
Category: PEDAGOGICAL_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud se předložka in nepřekládá jako „v“, ale vyjadřuje umístění, lze ji přeložit s lokativem.

DE context:
Pokud se p | edlo | ka in nep | ekl | jako „v“, ale vyjad | uje um

LV MASTER context:
Ja prievārds in netulkojas kā “iekšā”, bet izsaka atrašanās vietu, to var tulkot ar lokatīvu.

Luna PROPOSED:
Pokud předložka in vyjadřuje místo, nikoli směr dovnitř, překládá se obvykle předložkou „v“ s lokálem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #234

Audit ID: ART-XSEC-280
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[7]/example[0]
Field: sections[2].items[7].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
In dem Eimer — spainī

DE context:
In dem Eimer  | spain

LV MASTER context:
in dem Eimer — spainī

Luna PROPOSED:
In dem Eimer — v kbelíku

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #235

Audit ID: ART-XSEC-281
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[7]/example[1]
Field: sections[2].items[7].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
In dem Zimmer — istabā

DE context:
In dem Zimmer  | istab

LV MASTER context:
in dem Zimmer — istabā

Luna PROPOSED:
In dem Zimmer — v pokoji

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #236

Audit ID: ART-XSEC-282
Source object: kurssLesson18
Target: kurssLesson18/section[2]/item[8]/heading
Field: sections[2].items[8].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Mūsdienu formas

DE context:
Star | formy jako dem Tische, dem Kruge, im Walde se dnes  | asto pou | vaj | krat | dem Tisch, dem Krug, im Wald.

LV MASTER context:
Mūsdienu formas

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #237

Audit ID: ART-XSEC-285
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Das Mädchen geht in den Wald, in den Garten, auf die Wiese, auf den Hof.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
Vyber správný pád: dativ, nebo akuzativ?

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #238

Audit ID: ART-XSEC-288
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[1]/task
Field: sections[4].cards[1].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Es spielt in dem Walde, in dem Garten, auf der Wiese, auf dem Hofe.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #239

Audit ID: ART-XSEC-291
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[2]/task
Field: sections[4].cards[2].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Die Magd kommt in die Küche, in das Zimmer, in den Saal, in den Keller.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #240

Audit ID: ART-XSEC-294
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[3]/task
Field: sections[4].cards[3].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Sie arbeitet in der Küche, in dem Zimmer, in dem Saal, in dem Keller.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #241

Audit ID: ART-XSEC-297
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[4]/task
Field: sections[4].cards[4].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Ich lege den Teller auf die Bank, auf den Stuhl, auf den Tisch, auf das Fensterbrett.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #242

Audit ID: ART-XSEC-300
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[5]/task
Field: sections[4].cards[5].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Er steht auf der Bank, auf dem Stuhl, auf dem Tisch, auf dem Fensterbrett.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #243

Audit ID: ART-XSEC-303
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[6]/task
Field: sections[4].cards[6].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Der Mann stellt sich an dieses Fenster, an jenen Tisch, an die Wand, an den Baum.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #244

Audit ID: ART-XSEC-306
Source object: kurssLesson18
Target: kurssLesson18/section[4]/card[7]/task
Field: sections[4].cards[7].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

DE context:
Er steht an diesem Fenster, an jenem Tisch, an der Wand, an dem Baum.

LV MASTER context:
Izvēlies pareizo locījumu: Dativ vai Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #245

Audit ID: ART-XSEC-310
Source object: kurssLesson19
Target: kurssLesson19/intro
Field: intro
Category: CS_GRAMMAR
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Devatenáctá přednáška: vor, hinter, unter, über, neben, zwischen s Akkusativ nebo Dativ.

DE context:
Lesson19

LV MASTER context:
Deviņpadsmitā lekcija: vor, hinter, unter, über, neben, zwischen ar Akkusativ vai Dativ.

Luna PROPOSED:
Devatenáctá lekce: vor, hinter, unter, über, neben, zwischen s akuzativem nebo dativem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #246

Audit ID: ART-XSEC-324
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[1]/heading
Field: sections[2].items[1].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wohin? → Akkusativ

DE context:
Pokud existuje sm | r / pohyb n | kam, ot | zka je wohin? a pou | Akkusativ.

LV MASTER context:
Wohin? → Akkusativ

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #247

Audit ID: ART-XSEC-325
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[1]/text
Field: sections[2].items[1].text
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud existuje směr / pohyb někam, otázka je wohin? a používá Akkusativ.

DE context:
Pokud existuje sm | r / pohyb n | kam, ot | zka je wohin? a pou | Akkusativ.

LV MASTER context:
Ja ir virziens / kustība uz kaut kurieni, jautājums ir wohin? un lieto Akkusativ.

Luna PROPOSED:
Pokud jde o směr nebo pohyb někam, ptáme se wohin? a používá se Akkusativ.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #248

Audit ID: ART-XSEC-332
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[2]/heading
Field: sections[2].items[2].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wo? → Dativ

DE context:
Pokud existuje um | st | ot | zka zn | a pou | dativ.

LV MASTER context:
Wo? → Dativ

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #249

Audit ID: ART-XSEC-333
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[2]/text
Field: sections[2].items[2].text
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud existuje umístění, otázka zní? a používá dativ.

DE context:
Pokud existuje um | st | ot | zka zn | a pou | dativ.

LV MASTER context:
Ja ir atrašanās vieta, jautājums ir wo? un lieto Dativ.

Luna PROPOSED:
Pokud jde o umístění, ptáme se wo? a používá se dativ.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #250

Audit ID: ART-XSEC-333
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[2]/text
Field: sections[2].items[2].text
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud existuje umístění, otázka zní? a používá dativ.

DE context:
Pokud existuje um | st | ot | zka zn | a pou | dativ.

LV MASTER context:
Ja ir atrašanās vieta, jautājums ir wo? un lieto Dativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #251

Audit ID: ART-XSEC-340
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[4]/heading
Field: sections[2].items[4].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Kopsavilkums: wohin?

DE context:
Wohin?  | Akuzativ

LV MASTER context:
Kopsavilkums: wohin?

Luna PROPOSED:
Shrnutí: wohin?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #252

Audit ID: ART-XSEC-340
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[4]/heading
Field: sections[2].items[4].heading
Category: SOURCE_DE_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Kopsavilkums: wohin?

DE context:
Wohin?  | Akuzativ

LV MASTER context:
Kopsavilkums: wohin?

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #253

Audit ID: ART-XSEC-341
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[4]/text
Field: sections[2].items[4].text
Category: CS_TERMINOLOGY
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wohin? → Akuzativ

DE context:
Wohin?  | Akuzativ

LV MASTER context:
Wohin? → Akkusativ

Luna PROPOSED:
Wohin? → Akkusativ

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #254

Audit ID: ART-XSEC-341
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[4]/text
Field: sections[2].items[4].text
Category: SOURCE_DE_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Wohin? → Akuzativ

DE context:
Wohin?  | Akuzativ

LV MASTER context:
Wohin? → Akkusativ

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #255

Audit ID: ART-XSEC-351
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Kopsavilkums: wo?

DE context:
Co?  | Dativ

LV MASTER context:
Kopsavilkums: wo?

Luna PROPOSED:
Shrnutí: wo?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #256

Audit ID: ART-XSEC-351
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[5]/heading
Field: sections[2].items[5].heading
Category: SOURCE_DE_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Kopsavilkums: wo?

DE context:
Co?  | Dativ

LV MASTER context:
Kopsavilkums: wo?

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #257

Audit ID: ART-XSEC-352
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[5]/text
Field: sections[2].items[5].text
Category: CS_GRAMMAR
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Co? → Dativ

DE context:
Co?  | Dativ

LV MASTER context:
Wo? → Dativ

Luna PROPOSED:
Kde? → Dativ

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #258

Audit ID: ART-XSEC-363
Source object: kurssLesson19
Target: kurssLesson19/section[2]/item[6]/text
Field: sections[2].items[6].text
Category: PEDAGOGICAL_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Gehen - jít, když akce znamená jít nepřetržitě. treten - vstoupit, přiblížit se, nastoupit, pokud chůze končí přestávkou v akci.

DE context:
Gehen - j | t, kdy | akce znamen | t nep | etr | it

LV MASTER context:
gehen — iet, ja darbība nozīmē nepārtrauktu iešanu. treten — ieiet, pieiet, uzkāpt, ja iešana beidzas ar darbības pārtraukumu.

Luna PROPOSED:
Gehen znamená „jít/chodit“. Treten může podle kontextu znamenat „vstoupit“, „šlápnout“, „vkročit“ nebo „nastoupit“.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #259

Audit ID: ART-XSEC-369
Source object: kurssLesson19
Target: kurssLesson19/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.

DE context:
Anna geht in den Garten, an den Teich, vor die Mühle, hinter die Scheune, auf das Feld, über die Brücke, unter den Baum, zwischen den Strauch und die Laube.

LV MASTER context:
Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.

Luna PROPOSED:
Vyber správný pád: wohin? → Akkusativ, wo? → Dativ.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #260

Audit ID: ART-XSEC-372
Source object: kurssLesson19
Target: kurssLesson19/section[4]/card[1]/task
Field: sections[4].cards[1].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.

DE context:
Anna befindet sich oft in dem Garten, an dem Teich, vor der Mühle, hinter der Scheune, auf dem Feld, über dem Wasser, unter dem Baum, zwischen dem Strauch und der Laube.

LV MASTER context:
Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #261

Audit ID: ART-XSEC-376
Source object: kurssLesson20
Target: kurssLesson20/intro
Field: intro
Category: SEMANTIC_MISMATCH
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dvacátá přednáška: dům, podlahy, Dativ/Akkusativ a složená podstatná jména.

DE context:
Lesson20

LV MASTER context:
Divdesmitā lekcija: māja, stāvi, Dativ/Akkusativ un saliktie lietvārdi.

Luna PROPOSED:
Dvacátá přednáška: dům, podlaží, Dativ/Akkusativ a složená podstatná jména.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #262

Audit ID: ART-XSEC-387
Source object: kurssLesson20
Target: kurssLesson20/section[1]/item[11]
Field: sections[1].items[11]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Der Boden — bēniņi / grīda / zeme

DE context:
Der Boden  | ni | i / gr | da / zeme

LV MASTER context:
der Boden — bēniņi / grīda / zeme

Luna PROPOSED:
Der Boden — půda / podlaha / země

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #263

Audit ID: ART-XSEC-388
Source object: kurssLesson20
Target: kurssLesson20/section[1]/item[21]
Field: sections[1].items[21]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Anzünden — aizdedzināt

DE context:
Anzünden  | aizdedzin

LV MASTER context:
anzünden — aizdedzināt

Luna PROPOSED:
Anzünden — zapálit

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #264

Audit ID: ART-XSEC-389
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/heading
Field: sections[2].items[0].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dativs ar wann?

DE context:
Dopravn | slova, kter | odpov | daj | na ot | zku chcete? v p

LV MASTER context:
Dativs ar wann?

Luna PROPOSED:
Dativ s wann?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #265

Audit ID: ART-XSEC-390
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/text
Field: sections[2].items[0].text
Category: CS_GRAMMAR
Severity: CRITICAL
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dopravní slova, která odpovídají na otázku chcete? v přednáškách 19. a 20. — kdy?, stojí s dativem. Dativ odpovídá nejen na wo? — kde?, ale také na přání? - kdy?

DE context:
Dopravn | slova, kter | odpov | daj | na ot | zku chcete? v p

LV MASTER context:
Satiksmes vārdi, kas 19. un 20. lekcijā atbild uz jautājumu wann? — kad?, stāv ar Dativ. Dativs atbild ne tikai uz wo? — kur?, bet arī uz wann? — kad?.

Luna PROPOSED:
Předložková časová určení probíraná v 19. a 20. lekci se pojí s dativem. Dativ odpovídá nejen na wo? — kde?, ale v těchto výrazech také na wann? — kdy?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #266

Audit ID: ART-XSEC-391
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/example[0]
Field: sections[2].items[0].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
An dem Tage / am Tage — dienā

DE context:
An dem Tage / am Tage  | dien

LV MASTER context:
an dem Tage / am Tage — dienā

Luna PROPOSED:
An dem Tage / am Tage — ve dne

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #267

Audit ID: ART-XSEC-392
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/example[1]
Field: sections[2].items[0].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
In der Nacht — naktī

DE context:
In der Nacht  | nakt

LV MASTER context:
in der Nacht — naktī

Luna PROPOSED:
In der Nacht — v noci

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #268

Audit ID: ART-XSEC-393
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/example[2]
Field: sections[2].items[0].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
In dem Sommer / im Sommer — vasarā

DE context:
In dem Sommer / im Sommer  | vasar

LV MASTER context:
in dem Sommer / im Sommer — vasarā

Luna PROPOSED:
In dem Sommer / im Sommer — v létě

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #269

Audit ID: ART-XSEC-394
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/example[3]
Field: sections[2].items[0].examples[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
In dem Januar / im Januar — janvārī

DE context:
In dem Januar / im Januar  | janv

LV MASTER context:
in dem Januar / im Januar — janvārī

Luna PROPOSED:
In dem Januar / im Januar — v lednu

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #270

Audit ID: ART-XSEC-395
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[0]/example[4]
Field: sections[2].items[0].examples[4]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Vor drei Tagen — pirms trīs dienām

DE context:
Vor drei Tagen  | pirms tr | s dien

LV MASTER context:
vor drei Tagen — pirms trīs dienām

Luna PROPOSED:
Vor drei Tagen — před třemi dny

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #271

Audit ID: ART-XSEC-396
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[1]/heading
Field: sections[2].items[1].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Prievārds + artikuls

DE context:
nku se p | ipojuje mnoho p | edlo | ek.

LV MASTER context:
Prievārds + artikuls

Luna PROPOSED:
Předložka + člen

Audit reason:
[DET] Latviešu atlikums (LV_WORD)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #272

Audit ID: ART-XSEC-397
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[1]/text
Field: sections[2].items[1].text
Category: CS_TERMINOLOGY
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
K článku se připojuje mnoho předložek.

DE context:
nku se p | ipojuje mnoho p | edlo | ek.

LV MASTER context:
Daudzas prepozīcijas savienojas ar artikulu.

Luna PROPOSED:
Mnoho předložek se spojuje se členem.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #273

Audit ID: ART-XSEC-403
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[1]/example[5]
Field: sections[2].items[1].examples[5]
Category: SOURCE_DE_ISSUE
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Über das Land → übers Land

DE context:
Über das Land  | bers Land

LV MASTER context:
über das Land → übers Land

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #274

Audit ID: ART-XSEC-404
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[3]/heading
Field: sections[2].items[3].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Saliktie lietvārdi

DE context:
Slo | en | podstatn | jm | na obvykle berou  | len posledn

LV MASTER context:
Saliktie lietvārdi

Luna PROPOSED:
Složená podstatná jména

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #275

Audit ID: ART-XSEC-405
Source object: kurssLesson20
Target: kurssLesson20/section[2]/item[3]/text
Field: sections[2].items[3].text
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Složená podstatná jména obvykle berou člen posledního slova.

DE context:
Slo | en | podstatn | jm | na obvykle berou  | len posledn

LV MASTER context:
Saliktie lietvārdi parasti pieņem pēdējā vārda artikulu.

Luna PROPOSED:
Složená podstatná jména obvykle přebírají člen posledního slova.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #276

Audit ID: ART-XSEC-409
Source object: kurssLesson20
Target: kurssLesson20/section[3]/item[1]
Field: sections[3].items[1]
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Ve slovech der Ofen a der Boden je o dlouhé.

DE context:
Ve slovech der Ofen a der Boden je o dlouh

LV MASTER context:
Vārdos der Ofen, der Boden: o ir garš.

Luna PROPOSED:
Ve slovech der Ofen a der Boden se o vyslovuje dlouze.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #277

Audit ID: ART-XSEC-411
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Wolf lebt in dem Wald.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
Vyber správný pád: wo → dativ, wohin → akuzativ.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #278

Audit ID: ART-XSEC-411
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Wolf lebt in dem Wald.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
Vyber správný pád: wo → dativ, wohin → akuzativ.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #279

Audit ID: ART-XSEC-413
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[1]/task
Field: sections[4].cards[1].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Dieser Mann lebt in dem Haus.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #280

Audit ID: ART-XSEC-415
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[2]/task
Field: sections[4].cards[2].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Schornsteinfeger steht auf dem Dach.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #281

Audit ID: ART-XSEC-417
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[3]/task
Field: sections[4].cards[3].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Knecht arbeitet auf dem Feld.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #282

Audit ID: ART-XSEC-419
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[4]/task
Field: sections[4].cards[4].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Die Magd arbeitet auf der Wiese.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #283

Audit ID: ART-XSEC-421
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[5]/task
Field: sections[4].cards[5].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Holzhauer sägt das Holz in der Scheune.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #284

Audit ID: ART-XSEC-423
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[6]/task
Field: sections[4].cards[6].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Schüler stellt das Glas auf die Kommode.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #285

Audit ID: ART-XSEC-425
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[7]/task
Field: sections[4].cards[7].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Jäger geht in den Wald.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #286

Audit ID: ART-XSEC-427
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[9]/task
Field: sections[4].cards[9].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Ball rollt unter den Schrank.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #287

Audit ID: ART-XSEC-429
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[10]/task
Field: sections[4].cards[10].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Dieser Mann geht über die Brücke.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #288

Audit ID: ART-XSEC-431
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[11]/task
Field: sections[4].cards[11].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Jener Mann steht unter der Brücke.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #289

Audit ID: ART-XSEC-433
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[12]/task
Field: sections[4].cards[12].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Ein Spiegel hängt an der Wand.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #290

Audit ID: ART-XSEC-435
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[13]/task
Field: sections[4].cards[13].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Der Bruder stellt die Vase vor den Spiegel.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #291

Audit ID: ART-XSEC-437
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[15]/task
Field: sections[4].cards[15].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Das Kind spielt gern auf der Straße.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #292

Audit ID: ART-XSEC-439
Source object: kurssLesson20
Target: kurssLesson20/section[4]/card[16]/task
Field: sections[4].cards[16].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

DE context:
Das Kind spielt gern in dem Garten.

LV MASTER context:
Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #293

Audit ID: ART-XSEC-441
Source object: kurssLesson21
Target: kurssLesson21/subtitle
Field: subtitle
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Woher / wohin / wo, von / aus / mit + Dativ

DE context:
Lesson21

LV MASTER context:
woher / wohin / wo, von / aus / mit + Dativ

Luna PROPOSED:
Woher / wohin / wo; von / aus / mit + dativ, wohin + akuzativ

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #294

Audit ID: ART-XSEC-442
Source object: kurssLesson21
Target: kurssLesson21/intro
Field: intro
Category: PEDAGOGICAL_ISSUE
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Dvacátá první přednáška: woher / wohin / wo, von / aus / mit + Dativ.

DE context:
Lesson21

LV MASTER context:
Divdesmit pirmā lekcija: woher / wohin / wo, von / aus / mit + Dativ.

Luna PROPOSED:
Dvacátá první přednáška: woher / wohin / wo; von / aus / mit + dativ, wohin + akuzativ.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #295

Audit ID: ART-XSEC-456
Source object: kurssLesson21
Target: kurssLesson21/section[1]/item[15]
Field: sections[1].items[15]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Finden — atrast

DE context:
Finden  | atrast

LV MASTER context:
finden — atrast

Luna PROPOSED:
finden — najít

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #296

Audit ID: ART-XSEC-459
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[0]/example[0]
Field: sections[2].items[0].examples[0]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Mit — ar

DE context:
Mit  | ar

LV MASTER context:
mit — ar

Luna PROPOSED:
Mit — s

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #297

Audit ID: ART-XSEC-460
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[0]/example[1]
Field: sections[2].items[0].examples[1]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Von — no

DE context:
Von  | no

LV MASTER context:
von — no

Luna PROPOSED:
Von — od / z

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #298

Audit ID: ART-XSEC-461
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[0]/example[2]
Field: sections[2].items[0].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Aus — no / iz

DE context:
Aus  | no / iz

LV MASTER context:
aus — no / iz

Luna PROPOSED:
Aus — z / ze

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #299

Audit ID: ART-XSEC-462
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[0]/example[3]
Field: sections[2].items[0].examples[3]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Mit dem Mann — ar vīru

DE context:
Mit dem Mann  | ar v | ru

LV MASTER context:
mit dem Mann — ar vīru

Luna PROPOSED:
Mit dem Mann — s mužem

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #300

Audit ID: ART-XSEC-463
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[0]/example[4]
Field: sections[2].items[0].examples[4]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Von dem Felde / vom Felde — no lauka

DE context:
Von dem Felde / vom Felde  | no lauka

LV MASTER context:
von dem Felde / vom Felde — no lauka

Luna PROPOSED:
Von dem Felde / vom Felde — z pole

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #301

Audit ID: ART-XSEC-464
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[0]/example[5]
Field: sections[2].items[0].examples[5]
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Aus der Küche — no virtuves

DE context:
Aus der Küche  | no virtuves

LV MASTER context:
aus der Küche — no virtuves

Luna PROPOSED:
Aus der Küche — z kuchyně

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #302

Audit ID: ART-XSEC-469
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[1]/example[2]
Field: sections[2].items[1].examples[2]
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Mūsdienu forma: vom Feld, vom Berg.

DE context:
sdienu forma | vom Feld, vom Berg.

LV MASTER context:
Mūsdienu forma: vom Feld, vom Berg.

Luna PROPOSED:
Současná forma: vom Feld, vom Berg.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #303

Audit ID: ART-XSEC-470
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[2]/heading
Field: sections[2].items[2].heading
Category: FOREIGN_LEFTOVER
Severity: HIGH
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Woher? — no kurienes?

DE context:
Pokud je osoba nebo p | edm | t v m | stnosti, m | st | nebo n

LV MASTER context:
Woher? — no kurienes?

Luna PROPOSED:
Woher? — odkud?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #304

Audit ID: ART-XSEC-471
Source object: kurssLesson21
Target: kurssLesson21/section[2]/item[2]/text
Field: sections[2].items[2].text
Category: CS_NATURALNESS
Severity: MEDIUM
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Pokud je osoba nebo předmět v místnosti, místě nebo nádobě a vychází z ní, použijte aus.

DE context:
Pokud je osoba nebo p | edm | t v m | stnosti, m | st | nebo n

LV MASTER context:
Ja persona vai priekšmets atrodas kādā telpā, vietā vai traukā un nāk ārā no tās, lieto aus.

Luna PROPOSED:
Pokud se osoba nebo předmět nachází v místnosti, na nějakém místě nebo v nádobě a vychází z tohoto prostoru, použijte aus.

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #305

Audit ID: ART-XSEC-487
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[0]/task
Field: sections[4].cards[0].task
Category: FOREIGN_LEFTOVER
Severity: HIGH / HIGH
FOREIGN_LEFTOVER reconciliation: A — Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).
Audit sources: DETERMINISTIC+LUNA
Raw audit finding count: 2

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Der Vater kommt von dem Felde.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
Odpověz podle textu.

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #306

Audit ID: ART-XSEC-489
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[2]/task
Field: sections[4].cards[2].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Er spricht in der Scheune mit den Holzhauern.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #307

Audit ID: ART-XSEC-491
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[3]/task
Field: sections[4].cards[3].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Der Mann steigt von dem Berge.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #308

Audit ID: ART-XSEC-493
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[4]/task
Field: sections[4].cards[4].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Er kommt auf den Hof.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #309

Audit ID: ART-XSEC-495
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[5]/task
Field: sections[4].cards[5].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Er findet den Vater auf dem Hof.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #310

Audit ID: ART-XSEC-497
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[6]/task
Field: sections[4].cards[6].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Die Mutter tritt aus dem Hause.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #311

Audit ID: ART-XSEC-499
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[7]/task
Field: sections[4].cards[7].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Sie geht auf den Hof.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #312

Audit ID: ART-XSEC-501
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[8]/task
Field: sections[4].cards[8].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Sie sieht den Mann auf dem Hof.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #313

Audit ID: ART-XSEC-503
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[10]/task
Field: sections[4].cards[10].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Sie eilt in den Keller.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

### #314

Audit ID: ART-XSEC-504
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[12]/prompt
Field: sections[4].cards[12].prompt
Category: FOREIGN_LEFTOVER
Severity: CRITICAL
Audit sources: LUNA
Raw audit finding count: 1

CURRENT:
Woher steigt sie?

DE context:
Sie steigt aus dem Keller.

LV MASTER context:
Woher steigt sie?

Luna PROPOSED:
Odkud vystupuje?

Audit reason:
[LUNA] (no reason)

Confidence: medium

Status: PENDING

OWNER NEW:

OWNER note:

---

### #315

Audit ID: ART-XSEC-505
Source object: kurssLesson21
Target: kurssLesson21/section[4]/card[12]/task
Field: sections[4].cards[12].task
Category: FOREIGN_LEFTOVER
Severity: HIGH
FOREIGN_LEFTOVER reconciliation: B — Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.
Audit sources: DETERMINISTIC
Raw audit finding count: 1

CURRENT:
Atbildi pēc lasīšanas teksta.

DE context:
Sie steigt aus dem Keller.

LV MASTER context:
Atbildi pēc lasīšanas teksta.

Luna PROPOSED:
(empty — deterministic only or no Luna replacement suggested)

Audit reason:
[DET] Latviešu atlikums (LV_DIACRITIC)

Confidence: high

Status: PENDING

OWNER NEW:

OWNER note:

---

## End

