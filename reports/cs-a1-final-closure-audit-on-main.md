# CS–DE A1 FINAL CLOSURE AUDIT ON MAIN

## AUDITED MAIN

| Key | SHA |
|---|---|
| EXPECTED_MAIN_SHA | `3bfbb4bba56ee9bf1be2df8c539ee58d31736fcb` |
| AUDIT_MAIN_SHA | `3bfbb4bba56ee9bf1be2df8c539ee58d31736fcb` |
| ORIGIN_MAIN_SHA | `3bfbb4bba56ee9bf1be2df8c539ee58d31736fcb` |
| SHA LOCK | **PASS** |

## FINAL STATUS

**CS–DE A1 = NOT CLOSED**




## COVERAGE

| Metric | Value |
|---|---|
| cards | 702/702 |
| Study | 134/134 |
| submitted to Luna | 702 |
| audited by Luna | 702 |
| missing | 0 |
| duplicates | 0 |

## VALIDATED REAL FINDINGS

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 4 |
| MEDIUM | 27 |
| LOW | 8 |

## CLASSIFICATION

| Status | Count |
|---|---|
| CONFIRMED_REAL | 39 |
| CONFIRMED_REPAIR_REGRESSION | 0 |
| FALSE_POSITIVE | 21 |
| STALE_ALREADY_FIXED | 75 |
| OWNER_KEEP | 2 |
| OWNER_OVERRIDE_FALSE_POSITIVE | 2 |
| VALID_CONTEXT_DIFFERENCE | 0 |
| NEEDS_OWNER_REVIEW | 0 |

## STRUCTURAL

MISSING_STUDY_PARITY unique cards = 1

## FOREIGN REMNANTS

| Metric | Count |
|---|---|
| raw | 13 |
| REAL | 0 |
| FALSE_POSITIVE | 8 |

## SECTIONACCENTS

| Metric | Count |
|---|---|
| raw | 71 |
| REAL | 0 |
| STALE | 68 |
| FALSE_POSITIVE | 2 |

## DE

| Metric | Value |
|---|---|
| SOURCE_DE_ISSUE | 0 |
| DE_PARITY_ISSUE | 2 |
| DE changes | 0 |

## REPAIR RETENTION

| Metric | Value |
|---|---|
| CONFIRMED_REAL source | 125 |
| accounted | 125/125 |
| APPLIED retained | 124 |
| NO_OP retained | 1 |
| missing | 0 |
| conflicting | 0 |
| OWNER source | 5 |
| LABOT retained | 3 |
| OWNER_KEEP retained | 2 |
| OWNER unresolved | 0 |
| a1-ferien content repair | PASS |

## INTEGRITY

| Check | Result |
|---|---|
| cards | 702 |
| Study | 134 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |

## REMAINING REAL WORK

#### CLOSURE-A1-00029

- **cardId:** a1-auch-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Ona zde také pracuje.
- **proposedCs:** Já také přijdu.
- **reason:** Český příklad odpovídá lotyšskému zdroji, ale ne německé větě Ich komme auch.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00030

- **cardId:** a1-auch-study
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Také vám přeji hezký den.
- **proposedCs:** Ona zde také pracuje.
- **reason:** Český příklad odpovídá lotyšskému zdroji, ale ne německé větě Sie arbeitet auch hier.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00038

- **cardId:** a1-baden
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Koupat se / být ve vodě / mýt se
- **proposedCs:** Koupat se / být ve vodě / užívat si vodu
- **reason:** „Mýt se“ označuje osobní hygienu a zde nepřesně rozšiřuje význam německého baden.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00042

- **cardId:** a1-dass
- **field:** study.comparison[1].meaning
- **severity:** LOW
- **currentCs:** Protože • Protože
- **proposedCs:** Protože
- **reason:** Stejný český překlad je v aktuálním textu uveden dvakrát.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00043

- **cardId:** a1-der
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Mužský rod určitý člen
- **proposedCs:** Určitý člen mužského rodu
- **reason:** Pořadí slov je v češtině nepřirozené; běžná formulace je „Určitý člen mužského rodu“.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00044

- **cardId:** a1-der
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Na úrovni A1 byste se měli nejprve učit jako mužský článek.
- **proposedCs:** Na úrovni A1 byste se měli nejprve učit der jako určitý člen mužského rodu.
- **reason:** Věta postrádá předmět slovesa „učit se“, takže význam německého „ihn“ není v češtině vyjádřen.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00045

- **cardId:** a1-dieser
- **field:** study.explanation
- **severity:** MEDIUM
- **currentCs:** Ukazuje na blízkou osobu, věc nebo zvíře. Používá se s podstatným jménem mužského rodu.
- **proposedCs:** Ukazuje na konkrétní nebo zdůrazněnou osobu, věc či zvíře. Používá se s podstatným jménem mužského rodu.
- **reason:** Vysvětlení zužuje význam dieser na fyzickou blízkost; může označovat i konkrétní nebo zdůrazněný objekt.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00046

- **cardId:** a1-fahren
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Beru dceru do školy.
- **proposedCs:** Vezu dceru do školy.
- **reason:** V daném kontextu fahren znamená vézt dceru dopravním prostředkem, nikoli obecně ji brát.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00047

- **cardId:** a1-fahren
- **field:** study.examples[3].lv
- **severity:** MEDIUM
- **currentCs:** Vezmu tě domů.
- **proposedCs:** Odvezu tě domů.
- **reason:** Vezmu nevyjadřuje odvoz dopravním prostředkem, který zde odpovídá významu fahren.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00048

- **cardId:** a1-fuer
- **field:** lv
- **severity:** HIGH
- **currentCs:** Pro • Pro
- **proposedCs:** Pro • Za
- **reason:** Hlavní český překlad obsahuje stejnou položku dvakrát a chybí běžný význam „za“.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00049

- **cardId:** a1-gefallen-study
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** mít rád • líbit se
- **proposedCs:** Mít rád
- **reason:** Mögen se zde překládá jako „mít rád“; „líbit se“ má jiný význam i českou vazbu.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00052

- **cardId:** a1-hand-study
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Ruka (dlaň)
- **proposedCs:** Ruka
- **reason:** Hand označuje celou ruku, nejen dlaň; závorka význam zbytečně zužuje.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00055

- **cardId:** a1-ihr
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** S malými písmeny se ihr jako adresa pro několik lidí překládá jako vy (Kommt ihr mit? = Jdete spolu?).
- **proposedCs:** S malým ihr jako oslovením několika lidí se překládá jako vy (Kommt ihr mit? = Jdete spolu?).
- **reason:** „Adresa“ znamená adresu, nikoli oslovení; vysvětlení proto významově i formulací klame.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00059

- **cardId:** a1-im
- **field:** study.important[3]
- **severity:** MEDIUM
- **currentCs:** Pro ženy: in der Schule, ne im Schule.
- **proposedCs:** Pro ženský rod: in der Schule, ne im Schule.
- **reason:** Vysvětlení se týká gramatického rodu podstatných jmen, nikoli osob ženského pohlaví.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00060

- **cardId:** a1-in
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Jsem v Berlíně
- **proposedCs:** Jsem v Berlíně.
- **reason:** Česká příkladová věta postrádá koncovou tečku v rozporu s používaným formátováním.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00061

- **cardId:** a1-in
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Chodím do školy
- **proposedCs:** Chodím do školy.
- **reason:** Česká příkladová věta postrádá koncovou tečku v rozporu s používaným formátováním.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00062

- **cardId:** a1-ins
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Jdu do kina
- **proposedCs:** Jdu do kina.
- **reason:** Česká příkladová věta postrádá koncovou tečku v rozporu s používaným formátováním.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00065

- **cardId:** a1-kein
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Nemám peníze
- **proposedCs:** Nemám peníze.
- **reason:** Česká příkladová věta postrádá koncovou tečku v rozporu s používaným formátováním.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00066

- **cardId:** a1-kein
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Nemám čas
- **proposedCs:** Nemám čas.
- **reason:** Česká příkladová věta postrádá koncovou tečku v rozporu s používaným formátováním.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00068

- **cardId:** a1-kennen-study
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Znám ho
- **proposedCs:** Znám ho.
- **reason:** Českému příkladu v produkci chybí koncová tečka.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00070

- **cardId:** a1-können
- **field:** study.comparison[2].meaning
- **severity:** HIGH
- **currentCs:** Musit / být nutné
- **proposedCs:** Muset / být nutné
- **reason:** Standardní český infinitiv je „muset“; produkční „musit“ je v tomto významu nesprávný.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00074

- **cardId:** a1-land
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Kontext určuje, zda máme na mysli zemi, venkov nebo zemi.
- **proposedCs:** Kontext určuje, zda máme na mysli stát, venkov nebo půdu.
- **reason:** Produkční věta opakuje „zemi“ a nerozlišuje významy stát, venkov a půda.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00079

- **cardId:** a1-mal
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Příležitost • Opakování
- **proposedCs:** Případ • Opakování
- **reason:** „Příležitost“ není základní význam německého Mal; správně jde o případ nebo opakování.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00080

- **cardId:** a1-mann
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Přivlastňovací zájmeno (mein/dein/ihr Mann) téměř vždy znamená manžel – manžel.
- **proposedCs:** Přivlastňovací zájmeno (mein/dein/ihr Mann) téměř vždy znamená manžela.
- **reason:** Produkce obsahuje chybný pád i zbytečné opakování slova „manžel“.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00081

- **cardId:** a1-mann
- **field:** study.tip[0]
- **severity:** MEDIUM
- **currentCs:** Přivlastňovací zájmeno (mein/dein/ihr Mann) téměř vždy znamená manžel (manžel).
- **proposedCs:** Přivlastňovací zájmeno (mein/dein/ihr Mann) téměř vždy označuje manžela.
- **reason:** Po slovese „znamenat“ je zde nutný akuzativ „manžela“ a produkce opakuje stejné slovo.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00082

- **cardId:** a1-mögen
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Ich mag... je v češtině obvykle „Líbí se mi...“.
- **proposedCs:** Ich mag... se v češtině obvykle překládá jako „Mám rád/a...“ nebo podle kontextu „Líbí se mi...“.
- **reason:** Výklad uvádí „líbí se mi“ jako obvyklý překlad, ač u lidí a činností je základní význam „mám rád/a“.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00083

- **cardId:** a1-mögen
- **field:** study.tip.text
- **severity:** MEDIUM
- **currentCs:** Pamatujte: Ich mag... = Líbí se mi...
- **proposedCs:** Pamatujte: Ich mag... = Mám rád/a...
- **reason:** Tip podává „líbí se mi“ jako základní ekvivalent, což může u lidí a oblíbených činností měnit význam.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00099

- **cardId:** a1-ob
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Jestli / kdy
- **proposedCs:** Když / jestli
- **reason:** U časového wenn je české „když“, nikoli „kdy“; produkční dvojice proto obsahuje nesprávný ekvivalent.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00111

- **cardId:** a1-sie-study
- **field:** study.important[2]
- **severity:** MEDIUM
- **currentCs:** Nesprávně: sie kocht → Správně: Sie kocht
- **proposedCs:** Na začátku věty se sie píše s velkým písmenem: Sie kocht = Ona vaří; uprostřed věty: sie kocht.
- **reason:** The study text incorrectly marks lowercase sie kocht as wrong; lowercase is correct for “she” when not sentence-initial.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00121

- **cardId:** a1-vor
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Před • Před
- **proposedCs:** Před • Za
- **reason:** The translation omits the clock-time meaning of vor, where fünf vor acht means five minutes to eight.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00122

- **cardId:** a1-vor
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Před • Před
- **proposedCs:** Před • Za
- **reason:** The current Czech translation duplicates “Před” and omits the valid clock-time meaning “Za”.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00125

- **cardId:** a1-wenn
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Jestliže • Kdy
- **proposedCs:** Jestliže • Když
- **reason:** In the temporal meaning shown, German wenn translates as Czech “když,” not the interrogative “kdy”.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00126

- **cardId:** a1-wenn
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Jestliže • Kdy
- **proposedCs:** Jestliže • Když
- **reason:** The current Czech translation duplicates the semantic error by using interrogative “Kdy” for temporal wenn.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00127

- **cardId:** a1-wenn
- **field:** study.explanation[2]
- **severity:** MEDIUM
- **currentCs:** Pokud se jedná o opakovaný nebo obecný čas, přeložte jako kdy.
- **proposedCs:** Pokud se jedná o opakovaný nebo obecný čas, přeložte jako „když“.
- **reason:** The explanation gives the wrong Czech equivalent for repeated or general time; it should say “když”, not “kdy”.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00128

- **cardId:** a1-wenn
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Jestli / kdy
- **proposedCs:** Jestliže / když
- **reason:** The comparison incorrectly uses interrogative “kdy”; the relevant meanings are conditional “jestliže” and temporal “když”.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00130

- **cardId:** a1-wie
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Jak • Kolik
- **proposedCs:** Jak • Kolik • Jako
- **reason:** The card context includes comparisons such as so ... wie, where wie correctly means “jako”; that meaning is missing.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00131

- **cardId:** a1-wie
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Jak • Kolik
- **proposedCs:** Jak • Kolik • Jako
- **reason:** The current Czech translation omits the comparison meaning “jako”, which is required by the card’s study context.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00133

- **cardId:** a1-zug
- **field:** study.explanation[1]
- **severity:** LOW
- **currentCs:** Používá se v každodenních situacích při řízení, příjezdu a odjezdu.
- **proposedCs:** Používá se v každodenních situacích při cestování, příjezdu a odjezdu.
- **reason:** “Řízení” suggests driving, which is not the normal context for a train; “cestování” is accurate.
- **validationStatus:** CONFIRMED_REAL

#### CLOSURE-A1-00141

- **cardId:** a1-urlaub
- **field:** study.tip[0]
- **severity:** MEDIUM
- **currentCs:** Pouze jednotné číslo. Odejít z práce - vždy v jednotném čísle.
- **proposedCs:** Obvykle jednotné číslo. Jde o dovolenou z práce.
- **reason:** The current tip incorrectly equates Urlaub with leaving employment and uses an unjustifiably absolute statement.
- **validationStatus:** CONFIRMED_REAL


---

- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Raw deterministic: 27
- Raw Luna: 115
- Validated total: 142
- JSON: `reports/temp/cs-a1-final-closure-audit-on-main.json`
- Validated JSON: `reports/temp/cs-a1-final-closure-audit-on-main-validated.json`

_Audited: 2026-08-13 | production changes: 0_
