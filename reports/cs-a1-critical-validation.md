# CS–DE A1 CRITICAL VALIDATION

## KOPSAVILKUMS

- Audit type: CRITICAL RE-VALIDATION (read-only)
- Model: GPT-5.6 Luna
- Raw CRITICAL: 36
- CONFIRMED_REAL: 32
- FALSE_POSITIVE: 2
- STALE_ALREADY_FIXED: 0
- DE_SOURCE_ISSUE: 0
- STRUCTURAL_ISSUE: 0
- NEEDS_OWNER_REVIEW: 2
- Status sum: 36 (must equal 36)
- Production changes: 0

## DE READ-ONLY ROOT CAUSE

| Metrika | Vērtība |
|---|---|
| Validator result | FAIL |
| Exact change count | 16 |
| germanIntegrity issues | 16 |
| Affected cards | 16 |
| Baseline SHA (pre-repair) | `1ea6f33b9223dd7093277ac2b06818998668d37c` |
| Current SHA | `563b193f79d170bfc8039578d50597a9b55de3c2` |
| CS file MD5 | `66dada809781b20a2571ce4926309d6b` |
| Post-repair audit hashCs | `66dada809781b20a2571ce4926309d6b` |
| Root-cause classification | **PRE_EXISTING_CHANGE** |
| Final validated status | FAIL_PRE_EXISTING_LV_CS_DE_PARITY |

**Files compared:** data/a1.js (LV reference), data/cs/a1.js (CS production)

**DE fields checked:** de, de_article, de_plural, level, study.*.de

**Repair cycle git DE diff (1ea6f33b..HEAD):** (none — only lv fields changed in 1ea6f33b..HEAD)

Validator does NOT compare a separate DE file or git SHA baseline. It flags when CS production DE fields differ from LV reference at same index. Repair cycle 1ea6f33b..HEAD changed only Czech lv fields (6 lines); no DE field edits. All 16 germanIntegrity CRITICAL issues are pre-existing LV↔CS study DE parity gaps.

### Affected cards (DE parity)

- a1-sprechen-study
- a1-klein-study
- a1-auch-study
- a1-bei
- a1-bitte
- a1-bitte-study
- a1-bringen
- a1-dieser
- a1-ein
- a1-erst
- a1-es
- a1-Wochenende-181
- a1-finden
- a1-Frühstück-207
- a1-gross-study
- a1-hoch-study

### Sample changes

- **a1-sprechen-study** [study.de_strings]: study_de_content_mismatch (3 diffs)
- **a1-klein-study** [study.de_strings]: study_de_content_mismatch (9 diffs)
- **a1-auch-study** [study.de_strings]: study_de_content_mismatch (5 diffs)
- **a1-bei** [study.de_strings]: study_de_content_mismatch (3 diffs)
- **a1-bitte** [study.de_strings]: study_de_content_mismatch (12 diffs)

## STRUCTURAL / ID / ORDER ROOT CAUSE

| Check | Result |
|---|---|
| structure | FAIL |
| card count | PASS (702/702) |
| ID uniqueness | PASS |
| missing IDs | PASS |
| order | PASS |
| Study parity | FAIL (LV=134 CS=124) |
| mirror | PASS |

- Root-cause classification: **PRE_EXISTING_STRUCTURAL_GAP**
- Final validated status: FAIL_PRE_EXISTING
- Study gap: 10 cards
- Missing study in CS: a1-Besuch-87, a1-besuchen-89, a1-Fußball-218, a1-ganz-219, a1-gefallen-225, a1-Geschichte-233, a1-Geschwister-234, a1-Großeltern-251, a1-Hand-267, a1-hübsch-288

Structural FAIL is driven by study count mismatch (LV=134, CS=124): 10 LV entries have study cards but CS lacks study object at same index. No card count or ID/order mismatch. Mirror data/www PASS. These gaps predate repair cycle (repair only changed Czech lv text).

## INTEGRITY

| Check | Result |
|---|---|
| production changes | 0 |
| DE production changes | 0 |
| unexpected changes | 0 |
| syntax | PASS |

## CONFIRMED_REAL REPAIR LIST (32)

### CRIT-01: a1-es — `entry[167].study.info[0]`

- **DE:** es
- **currentCs:** Český “es” = vācu “ich”
- **proposedCs:** České „já“ = německé „ich“
- **reason:** Czech field contains Latvian words and the Latvian pronoun „es“ instead of Czech „já“.
- **confidence:** 0.99

### CRIT-02: a1-es — `entry[167].study.info[1]`

- **DE:** es
- **currentCs:** Vācu “es” = tas • Tā • Bezpersoniska forma
- **proposedCs:** Německé „es“ = to • ono • bezosobní forma
- **reason:** Czech field is Latvian text; it must use Czech equivalents for German „es“.
- **confidence:** 0.99

### CRIT-03: a1-fahren — `entry[172].study.important.example`

- **DE:** fahren
- **currentCs:** Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • Vest • Aizvest atkarībā no konteksta.
- **proposedCs:** V němčině jedno a totéž sloveso často znamená: jezdit • vézt • odvézt v závislosti na kontextu.
- **reason:** The complete example is Latvian rather than Czech, including Latvian vocabulary and grammar.
- **confidence:** 0.99

### CRIT-04: a1-fahren — `entry[172].study.accents.green[1]`

- **DE:** fahren
- **currentCs:** Transportlīdzekli
- **proposedCs:** dopravní prostředek
- **reason:** „Transportlīdzekli“ is Latvian and is not valid Czech production text.
- **confidence:** 0.99

### CRIT-05: a1-fahren — `entry[172].study.accents.green[5]`

- **DE:** fahren
- **currentCs:** Velosipēdu
- **proposedCs:** jízdní kolo
- **reason:** „Velosipēdu“ is Latvian and is not valid Czech production text.
- **confidence:** 0.99

### CRIT-07: a1-in — `entry[295].study.sectionAccents.important[0].purple[0]`

- **DE:** in
- **currentCs:** Berlīnē
- **proposedCs:** v Berlíně
- **reason:** The Czech field contains Latvian text; the German meaning requires the Czech phrase “v Berlíně”.
- **confidence:** HIGH

### CRIT-08: a1-land — `entry[351].study.sectionAccents.comparison[3].meaning.purple[1]`

- **DE:** Land
- **currentCs:** planēta
- **proposedCs:** země
- **reason:** “planēta” is Latvian for “planet” and does not match German “Land”; the Czech equivalent is “země”.
- **confidence:** HIGH

### CRIT-09: a1-sitzen — `entry[558].study.sectionAccents.explanation.purple[0]`

- **DE:** sitzen
- **currentCs:** sēdēt
- **proposedCs:** sedět
- **reason:** The field contains the Latvian infinitive “sēdēt”, not Czech; German “sitzen” translates as “sedět”.
- **confidence:** HIGH

### CRIT-10: a1-sitzen — `entry[558].study.sectionAccents.explanation.purple[1]`

- **DE:** sitzen
- **currentCs:** sēž
- **proposedCs:** sedí
- **reason:** “sēž” is Latvian, while the Czech third-person form corresponding to “sitzen” is “sedí”.
- **confidence:** HIGH

### CRIT-11: a1-sitzen — `entry[558].study.sectionAccents.comparison[0].meaning.purple[0]`

- **DE:** sitzen
- **currentCs:** sēdēt
- **proposedCs:** sedět
- **reason:** The field contains Latvian “sēdēt”; the correct Czech translation of German “sitzen” is “sedět”.
- **confidence:** HIGH

### CRIT-12: a1-stehen — `entry[576].study.sectionAccents.comparison[1].meaning.purple[0]`

- **DE:** stehen
- **currentCs:** sēdēt
- **proposedCs:** stát
- **reason:** The current text is Latvian for “sit”, contradicting German “stehen”; the correct Czech translation is “stát”.
- **confidence:** HIGH

### CRIT-14: a1-essen — `entry[690].study.sectionAccents.explanation.purple[0]`

- **DE:** essen
- **currentCs:** ēst
- **proposedCs:** jíst
- **reason:** „ēst“ is Latvian. German „essen“ means Czech „jíst“.
- **confidence:** 0.99

### CRIT-16: a1-bedeuten-75 — `csText`

- **DE:** bedeuten
- **currentCs:** Střední
- **proposedCs:** Znamenat
- **reason:** „Střední“ means mittel, not German „bedeuten“. The correct Czech translation is „Znamenat“.
- **confidence:** 0.99

### CRIT-17: a1-Buch-116 — `csText`

- **DE:** Buch
- **currentCs:** Rezervovat
- **proposedCs:** Kniha
- **reason:** „Rezervovat“ means buchen, not German „Buch“. The correct Czech translation is „Kniha“.
- **confidence:** 0.99

### CRIT-18: a1-Erde-164 — `csText`

- **DE:** Erde
- **currentCs:** Přistát
- **proposedCs:** Země
- **reason:** „Přistát“ means landen, not German „Erde“. The correct Czech translation is „Země“.
- **confidence:** 0.99

### CRIT-19: a1-März-396 — `csText`

- **DE:** März
- **currentCs:** Pochod
- **proposedCs:** Březen
- **reason:** České „Pochod“ znamená pochod, nikoli německý měsíc März.
- **confidence:** HIGH

### CRIT-20: a1-bitte — `study.explanation`

- **DE:** bitte
- **currentCs:** ["Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím.","Bitte znamená hlavně: zdvořilost.","Často popisuje: zdvořilé slovo.","Bitte znamená především: požadavek/žádost.","Často charakterizováno: podstatné jméno (zemřít).","Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).","Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).","Množné číslo: zemřít pokousán."]
- **proposedCs:** ["Bitte s malým písmenem je zdvořilostní výraz a znamená prosím.","Die Bitte s velkým písmenem a členem die je podstatné jméno a znamená prosba nebo žádost.","Množné číslo je die Bitten."]
- **reason:** Vysvětlení obsahuje závažné strojové překlady, nesmyslné tvary a chybné rozlišení bitte a die Bitte.
- **confidence:** HIGH

### CRIT-21: a1-bitte-study — `study.explanation`

- **DE:** Bitte
- **currentCs:** ["Hlavní myšlenka: Podstatné jméno se členem zemřít a velkým písmenem. Konkrétní požadavek nebo požadavek.","Die Bitte znamená hlavně: zdvořilost.","Často popisuje: zdvořilé slovo.","Die Bitte v podstatě znamená: žádost/žádost.","Často charakterizováno: podstatné jméno (zemřít).","Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).","Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).","Množné číslo: zemřít pokousán."]
- **proposedCs:** ["Die Bitte je podstatné jméno ženského rodu se členem die a znamená prosba nebo žádost.","Píše se s velkým písmenem.","Množné číslo je die Bitten.","Pozor: malé bitte znamená prosím."]
- **reason:** Vysvětlení zaměňuje bitte a die Bitte a obsahuje chybné překlady jako „zemřít“ a „pokousán“.
- **confidence:** HIGH

### CRIT-22: a1-das — `study.translation`

- **DE:** das
- **currentCs:** Neuter určitý člen
- **proposedCs:** Určitý člen středního rodu
- **reason:** Anglické slovo „Neuter“ není český překlad a má být nahrazeno českým označením rodu.
- **confidence:** HIGH

### CRIT-23: a1-die — `study.explanation`

- **DE:** die
- **currentCs:** Používá se s podstatnými jmény ženského rodu. V některých větách může „umřít“ fungovat také jako zájmeno nebo vztažné zájmeno.
- **proposedCs:** Používá se s podstatnými jmény ženského rodu. V některých větách může „die“ fungovat také jako zájmeno nebo vztažné zájmeno.
- **reason:** „Umřít“ je chybný český překlad německého „die“ a významově narušuje vysvětlení zájmena či vztažného zájmena.
- **confidence:** HIGH

### CRIT-24: a1-die — `study.important[1]`

- **DE:** die
- **currentCs:** Množné číslo kostky se také používá pro všechna pohlaví.
- **proposedCs:** V množném čísle se die používá pro všechny rody.
- **reason:** „Kostky“ je chybný překlad slova die a „pohlaví“ zde nevystihuje český gramatický termín rody.
- **confidence:** HIGH

### CRIT-25: a1-es — `study.explanation`

- **DE:** es
- **currentCs:** Německé „já“ není zvyklé mluvit o sobě. Používá se k označení: to, to nebo neosobní tvar (počasí, čas, různé neosobní věty).
- **proposedCs:** Německé „es“ neznamená „já“. Používá se pro „to“ nebo jako neosobní podoba ve větách o počasí, čase a dalších neosobních dějích.
- **reason:** Text chybně zaměňuje německé „es“ za „já“ a opakuje chybný překlad „to“.
- **confidence:** HIGH

### CRIT-26: a1-es — `study.info[0]`

- **DE:** es
- **currentCs:** Český “es” = vācu “ich”
- **proposedCs:** Lotyšské „es“ = německé „ich“
- **reason:** Text obsahuje lotyšské „vācu“ místo českého „německé“ a významově jde o chybný či smíšený překlad.
- **confidence:** HIGH

### CRIT-27: a1-heißen — `study.translation`

- **DE:** heißen
- **currentCs:** Být nazýván • Podlý
- **proposedCs:** Jmenovat se • Znamenat
- **reason:** „Podlý“ nesouvisí s heißen; český překlad má vyjadřovat jmenování se nebo význam „znamenat“.
- **confidence:** HIGH

### CRIT-29: a1-laden-study — `study.translation`

- **DE:** Laden
- **currentCs:** Nakupovat
- **proposedCs:** Obchod
- **reason:** Velké písmeno v německém „Laden“ označuje podstatné jméno „obchod“, nikoli sloveso „nakupovat“.
- **confidence:** HIGH

### CRIT-30: a1-legen — `study.explanation[3]`

- **DE:** legen / liegen
- **currentCs:** Na úrovni A1 je nejdůležitější rozdíl: legen = ležet, liegen = ležet.
- **proposedCs:** Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet.
- **reason:** Produkce nerozlišuje děj položení u legen a stav ležení u liegen.
- **confidence:** HIGH

### CRIT-31: a1-schauen-study — `study.translation`

- **DE:** schauen
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ znamená náramkové hodinky, nikoli německé sloveso „schauen“.
- **confidence:** HIGH

### CRIT-32: a1-schauen-study — `study.comparison[0].meaning`

- **DE:** schauen
- **currentCs:** Sledovat (aktivně)
- **proposedCs:** Dívat se (aktivně)
- **reason:** „Sledovat“ posouvá význam k aktivnímu sledování; základní ekvivalent „schauen“ je „dívat se“.
- **confidence:** HIGH

### CRIT-33: a1-sehen — `study.comparison[1].meaning`

- **DE:** sehen
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ je nesprávný překlad německého „sehen“; odpovídající český význam je „dívat se“.
- **confidence:** HIGH

### CRIT-34: a1-sich — `study.explanation[1]`

- **DE:** sich
- **currentCs:** V češtině se často překládá jako já nebo já.
- **proposedCs:** V češtině se často překládá jako se, sebe nebo sobě podle pádu.
- **reason:** Text chybně opakuje zájmeno „já“ a nevysvětluje české reflexivní tvary „se“, „sebe“ a „sobě“.
- **confidence:** HIGH

### CRIT-35: a1-sollen — `study.important[0]`

- **DE:** Was soll ich machen?
- **currentCs:** Byl soll ich machen? je velmi častá věta.
- **proposedCs:** Was soll ich machen? je velmi častá věta.
- **reason:** „Byl soll ich machen?“ je zásadní překlep; správná německá fráze zní „Was soll ich machen?“.
- **confidence:** HIGH

### CRIT-36: a1-fernsehen-study — `study.important[0]`

- **DE:** Fernsehen
- **currentCs:** Fernsehen je dělitelné: sehen + kapradina.
- **proposedCs:** Fernsehen je dělitelné: sehen + fern.
- **reason:** „Kapradina“ je chybný překlad slova „fern“ a narušuje vysvětlení složení výrazu „Fernsehen“.
- **confidence:** HIGH


## ALL CRITICAL VALIDATIONS

### CRIT-01: a1-es — `entry[167].study.info[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Český “es” = vācu “ich”
- **proposedCs:** České „já“ = německé „ich“
- **reason:** Czech field contains Latvian words and the Latvian pronoun „es“ instead of Czech „já“.

### CRIT-02: a1-es — `entry[167].study.info[1]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Vācu “es” = tas • Tā • Bezpersoniska forma
- **proposedCs:** Německé „es“ = to • ono • bezosobní forma
- **reason:** Czech field is Latvian text; it must use Czech equivalents for German „es“.

### CRIT-03: a1-fahren — `entry[172].study.important.example`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • Vest • Aizvest atkarībā no konteksta.
- **proposedCs:** V němčině jedno a totéž sloveso často znamená: jezdit • vézt • odvézt v závislosti na kontextu.
- **reason:** The complete example is Latvian rather than Czech, including Latvian vocabulary and grammar.

### CRIT-04: a1-fahren — `entry[172].study.accents.green[1]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Transportlīdzekli
- **proposedCs:** dopravní prostředek
- **reason:** „Transportlīdzekli“ is Latvian and is not valid Czech production text.

### CRIT-05: a1-fahren — `entry[172].study.accents.green[5]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Velosipēdu
- **proposedCs:** jízdní kolo
- **reason:** „Velosipēdu“ is Latvian and is not valid Czech production text.

### CRIT-06: a1-in — `entry[295].study.sectionAccents.examples[0].lv.purple[0]`

- **validationStatus:** FALSE_POSITIVE
- **severity:** CRITICAL
- **confidence:** 1
- **currentCs:** Berlīnē
- **proposedCs:** —
- **reason:** The field is explicitly an LV field, and „Berlīnē“ exactly matches the current Latvian source.

### CRIT-07: a1-in — `entry[295].study.sectionAccents.important[0].purple[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Berlīnē
- **proposedCs:** v Berlíně
- **reason:** The Czech field contains Latvian text; the German meaning requires the Czech phrase “v Berlíně”.

### CRIT-08: a1-land — `entry[351].study.sectionAccents.comparison[3].meaning.purple[1]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** planēta
- **proposedCs:** země
- **reason:** “planēta” is Latvian for “planet” and does not match German “Land”; the Czech equivalent is “země”.

### CRIT-09: a1-sitzen — `entry[558].study.sectionAccents.explanation.purple[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** sedět
- **reason:** The field contains the Latvian infinitive “sēdēt”, not Czech; German “sitzen” translates as “sedět”.

### CRIT-10: a1-sitzen — `entry[558].study.sectionAccents.explanation.purple[1]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** sēž
- **proposedCs:** sedí
- **reason:** “sēž” is Latvian, while the Czech third-person form corresponding to “sitzen” is “sedí”.

### CRIT-11: a1-sitzen — `entry[558].study.sectionAccents.comparison[0].meaning.purple[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** sedět
- **reason:** The field contains Latvian “sēdēt”; the correct Czech translation of German “sitzen” is “sedět”.

### CRIT-12: a1-stehen — `entry[576].study.sectionAccents.comparison[1].meaning.purple[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** sēdēt
- **proposedCs:** stát
- **reason:** The current text is Latvian for “sit”, contradicting German “stehen”; the correct Czech translation is “stát”.

### CRIT-13: a1-über — `entry[608].study.sectionAccents.tip.left.purple[0]`

- **validationStatus:** NEEDS_OWNER_REVIEW
- **severity:** CRITICAL
- **confidence:** 0.88
- **currentCs:** tēma
- **proposedCs:** —
- **reason:** „tēma“ is Latvian, not Czech, and does not translate German „über“. Exact Czech wording depends on the intended sense and context.

### CRIT-14: a1-essen — `entry[690].study.sectionAccents.explanation.purple[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** ēst
- **proposedCs:** jíst
- **reason:** „ēst“ is Latvian. German „essen“ means Czech „jíst“.

### CRIT-15: a1-Baum-74 — `csText`

- **validationStatus:** FALSE_POSITIVE
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Strom
- **proposedCs:** —
- **reason:** Czech „Strom“ correctly means German „Baum“; the matching proposed text is not an error.

### CRIT-16: a1-bedeuten-75 — `csText`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Střední
- **proposedCs:** Znamenat
- **reason:** „Střední“ means mittel, not German „bedeuten“. The correct Czech translation is „Znamenat“.

### CRIT-17: a1-Buch-116 — `csText`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Rezervovat
- **proposedCs:** Kniha
- **reason:** „Rezervovat“ means buchen, not German „Buch“. The correct Czech translation is „Kniha“.

### CRIT-18: a1-Erde-164 — `csText`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** 0.99
- **currentCs:** Přistát
- **proposedCs:** Země
- **reason:** „Přistát“ means landen, not German „Erde“. The correct Czech translation is „Země“.

### CRIT-19: a1-März-396 — `csText`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Pochod
- **proposedCs:** Březen
- **reason:** České „Pochod“ znamená pochod, nikoli německý měsíc März.

### CRIT-20: a1-bitte — `study.explanation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** ["Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím.","Bitte znamená hlavně: zdvořilost.","Často popisuje: zdvořilé slovo.","Bitte znamená především: požadavek/žádost.","Často charakterizováno: podstatné jméno (zemřít).","Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).","Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).","Množné číslo: zemřít pokousán."]
- **proposedCs:** ["Bitte s malým písmenem je zdvořilostní výraz a znamená prosím.","Die Bitte s velkým písmenem a členem die je podstatné jméno a znamená prosba nebo žádost.","Množné číslo je die Bitten."]
- **reason:** Vysvětlení obsahuje závažné strojové překlady, nesmyslné tvary a chybné rozlišení bitte a die Bitte.

### CRIT-21: a1-bitte-study — `study.explanation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** ["Hlavní myšlenka: Podstatné jméno se členem zemřít a velkým písmenem. Konkrétní požadavek nebo požadavek.","Die Bitte znamená hlavně: zdvořilost.","Často popisuje: zdvořilé slovo.","Die Bitte v podstatě znamená: žádost/žádost.","Často charakterizováno: podstatné jméno (zemřít).","Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).","Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).","Množné číslo: zemřít pokousán."]
- **proposedCs:** ["Die Bitte je podstatné jméno ženského rodu se členem die a znamená prosba nebo žádost.","Píše se s velkým písmenem.","Množné číslo je die Bitten.","Pozor: malé bitte znamená prosím."]
- **reason:** Vysvětlení zaměňuje bitte a die Bitte a obsahuje chybné překlady jako „zemřít“ a „pokousán“.

### CRIT-22: a1-das — `study.translation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Neuter určitý člen
- **proposedCs:** Určitý člen středního rodu
- **reason:** Anglické slovo „Neuter“ není český překlad a má být nahrazeno českým označením rodu.

### CRIT-23: a1-die — `study.explanation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Používá se s podstatnými jmény ženského rodu. V některých větách může „umřít“ fungovat také jako zájmeno nebo vztažné zájmeno.
- **proposedCs:** Používá se s podstatnými jmény ženského rodu. V některých větách může „die“ fungovat také jako zájmeno nebo vztažné zájmeno.
- **reason:** „Umřít“ je chybný český překlad německého „die“ a významově narušuje vysvětlení zájmena či vztažného zájmena.

### CRIT-24: a1-die — `study.important[1]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Množné číslo kostky se také používá pro všechna pohlaví.
- **proposedCs:** V množném čísle se die používá pro všechny rody.
- **reason:** „Kostky“ je chybný překlad slova die a „pohlaví“ zde nevystihuje český gramatický termín rody.

### CRIT-25: a1-es — `study.explanation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Německé „já“ není zvyklé mluvit o sobě. Používá se k označení: to, to nebo neosobní tvar (počasí, čas, různé neosobní věty).
- **proposedCs:** Německé „es“ neznamená „já“. Používá se pro „to“ nebo jako neosobní podoba ve větách o počasí, čase a dalších neosobních dějích.
- **reason:** Text chybně zaměňuje německé „es“ za „já“ a opakuje chybný překlad „to“.

### CRIT-26: a1-es — `study.info[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Český “es” = vācu “ich”
- **proposedCs:** Lotyšské „es“ = německé „ich“
- **reason:** Text obsahuje lotyšské „vācu“ místo českého „německé“ a významově jde o chybný či smíšený překlad.

### CRIT-27: a1-heißen — `study.translation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Být nazýván • Podlý
- **proposedCs:** Jmenovat se • Znamenat
- **reason:** „Podlý“ nesouvisí s heißen; český překlad má vyjadřovat jmenování se nebo význam „znamenat“.

### CRIT-28: a1-heißen — `study.comparison[2].meaning`

- **validationStatus:** NEEDS_OWNER_REVIEW
- **severity:** CRITICAL
- **confidence:** MEDIUM
- **currentCs:** Střední
- **proposedCs:** —
- **reason:** Audit uvádí DE „bedeuten“, ale aktuální produkce uvádí „heißen“; jde o nesoulad zdroje a pole, který vyžaduje ověření mapování.

### CRIT-29: a1-laden-study — `study.translation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Nakupovat
- **proposedCs:** Obchod
- **reason:** Velké písmeno v německém „Laden“ označuje podstatné jméno „obchod“, nikoli sloveso „nakupovat“.

### CRIT-30: a1-legen — `study.explanation[3]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Na úrovni A1 je nejdůležitější rozdíl: legen = ležet, liegen = ležet.
- **proposedCs:** Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet.
- **reason:** Produkce nerozlišuje děj položení u legen a stav ležení u liegen.

### CRIT-31: a1-schauen-study — `study.translation`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ znamená náramkové hodinky, nikoli německé sloveso „schauen“.

### CRIT-32: a1-schauen-study — `study.comparison[0].meaning`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Sledovat (aktivně)
- **proposedCs:** Dívat se (aktivně)
- **reason:** „Sledovat“ posouvá význam k aktivnímu sledování; základní ekvivalent „schauen“ je „dívat se“.

### CRIT-33: a1-sehen — `study.comparison[1].meaning`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ je nesprávný překlad německého „sehen“; odpovídající český význam je „dívat se“.

### CRIT-34: a1-sich — `study.explanation[1]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** V češtině se často překládá jako já nebo já.
- **proposedCs:** V češtině se často překládá jako se, sebe nebo sobě podle pádu.
- **reason:** Text chybně opakuje zájmeno „já“ a nevysvětluje české reflexivní tvary „se“, „sebe“ a „sobě“.

### CRIT-35: a1-sollen — `study.important[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Byl soll ich machen? je velmi častá věta.
- **proposedCs:** Was soll ich machen? je velmi častá věta.
- **reason:** „Byl soll ich machen?“ je zásadní překlep; správná německá fráze zní „Was soll ich machen?“.

### CRIT-36: a1-fernsehen-study — `study.important[0]`

- **validationStatus:** CONFIRMED_REAL
- **severity:** CRITICAL
- **confidence:** HIGH
- **currentCs:** Fernsehen je dělitelné: sehen + kapradina.
- **proposedCs:** Fernsehen je dělitelné: sehen + fern.
- **reason:** „Kapradina“ je chybný překlad slova „fern“ a narušuje vysvětlení složení výrazu „Fernsehen“.


---

_Audita datums: 2026-08-11_
_Luna API requests: 6, tokens: 17245_
_Režīms: READ-ONLY_
