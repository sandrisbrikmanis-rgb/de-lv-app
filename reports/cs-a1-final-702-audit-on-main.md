# CS–DE A1 FINAL 702/702 AUDIT ON MAIN

## AUDITED MAIN

| Key | SHA |
|---|---|
| EXPECTED_MAIN_SHA | `d658e2b591837e9656bbb322fa039faee2293c8d` |
| AUDIT_MAIN_SHA | `d658e2b591837e9656bbb322fa039faee2293c8d` |
| ORIGIN_MAIN_SHA | `d658e2b591837e9656bbb322fa039faee2293c8d` |
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
| HIGH | 21 |
| MEDIUM | 40 |
| LOW | 64 |

## CLASSIFICATION

| Status | Count |
|---|---|
| CONFIRMED_REAL | 125 |
| CONFIRMED_REPAIR_REGRESSION | 0 |
| FALSE_POSITIVE | 21 |
| STALE_ALREADY_FIXED | 53 |
| OWNER_KEEP | 2 |
| OWNER_OVERRIDE_FALSE_POSITIVE | 2 |
| VALID_CONTEXT_DIFFERENCE | 0 |
| NEEDS_OWNER_REVIEW | 5 |

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
| raw | 67 |
| REAL | 14 |
| STALE | 48 |
| FALSE_POSITIVE | 2 |

## DE

| Metric | Value |
|---|---|
| SOURCE_DE_ISSUE | 3 |
| DE_PARITY_ISSUE | 2 |
| DE changes | 0 |

## REPAIR RETENTION

| Metric | Value |
|---|---|
| CONFIRMED_REAL expected | 160 |
| retained | 158 |
| superseded_by_newer_owner_repair | 2 |
| missing | 0 |
| conflicting | 0 |
| Study parity | 14/14 |
| sectionAccents micro remaining | 0 |

## TECHNICAL

| Check | Result |
|---|---|
| cards | 702 |
| Study count | 134 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| production changes | 0 |

## REMAINING REAL WORK

#### FINAL702-A1-00032

- **cardId:** a1-verlieren-620
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Prohrát
- **proposedCs:** Ztratit • Prohrát
- **reason:** „Prohrát“ pokrývá jen význam soutěže či hry; běžný význam „ztratit“ v produkci chybí.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00035

- **cardId:** a1-also
- **field:** study.translation
- **severity:** HIGH
- **currentCs:** Proto
- **proposedCs:** Tedy • Takže
- **reason:** Studijní překlad „Proto“ zaměňuje „also“ za typičtější překlad „deshalb“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00036

- **cardId:** a1-also
- **field:** study.explanation
- **severity:** MEDIUM
- **currentCs:** Používá se k vyvození závěru nebo zobrazení výsledku. Znamená „proto“, „proto“.
- **proposedCs:** Používá se k vyvození závěru nebo vyjádření výsledku. Znamená „tedy“ nebo „takže“.
- **reason:** Vysvětlení opakuje „proto“ a nesprávně popisuje význam německého „also“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00037

- **cardId:** a1-also
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** České „tak“ může být často také deshalb.
- **proposedCs:** České „tak“ může podle kontextu překládat také „also“; „deshalb“ obvykle znamená „proto“.
- **reason:** Tvrzení nesprávně spojuje české „tak“ s německým „deshalb“ místo s „also“ podle kontextu.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00038

- **cardId:** a1-auch-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Já také přijdu.
- **proposedCs:** Ona zde také pracuje.
- **reason:** Český příklad „Já také přijdu“ neodpovídá německé větě o její práci zde.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00039

- **cardId:** a1-auch-study
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Ona zde také pracuje.
- **proposedCs:** Také vám přeji hezký den.
- **reason:** Příklad opakuje předchozí větu a neodpovídá německému přání hezkého dne.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00042

- **cardId:** a1-aus
- **field:** lv
- **severity:** MEDIUM
- **currentCs:** Od • Ven
- **proposedCs:** Z • Zevnitř
- **reason:** „Od“ je pro „aus“ zavádějící a „Ven“ nevyjadřuje základní původ či pohyb zevnitř.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00044

- **cardId:** a1-aufs
- **field:** study.explanation[4]
- **severity:** MEDIUM
- **currentCs:** V hovorové a každodenní řeči se téměř vždy používá aufs místo plného auf das.
- **proposedCs:** V běžné řeči se často používá aufs místo plného auf das; obě podoby jsou gramaticky správné.
- **reason:** Téměř vždy je nepřiměřeně absolutní; plná forma „auf das“ je běžná a gramaticky správná.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00047

- **cardId:** a1-baden
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** čeština často říká jednoduše „plavat“, ale v němčině si musíte vybrat podle situace.
- **proposedCs:** Čeština často říká jednoduše „plavat“, ale v němčině si musíte vybrat podle situace.
- **reason:** Samostatná věta po odrážce má začínat velkým písmenem.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00048

- **cardId:** a1-bleiben
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Zůstávám doma
- **proposedCs:** Zůstávám doma.
- **reason:** Samostatné české oznamovací větě chybí koncová tečka.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00049

- **cardId:** a1-bleiben
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Jdu domů
- **proposedCs:** Jdu domů.
- **reason:** Samostatné české oznamovací větě chybí koncová tečka.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00050

- **cardId:** a1-bringen
- **field:** study.examples[2].lv
- **severity:** MEDIUM
- **currentCs:** Donese knihu do školy.
- **proposedCs:** Přináší knihu do školy.
- **reason:** Dokonavé „donese“ obvykle vyjadřuje budoucí dokončení, ne německý přítomný význam.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00051

- **cardId:** a1-bringen
- **field:** study.comparison[1].meaning
- **severity:** LOW
- **currentCs:** Vzít / vzít
- **proposedCs:** Vzít / brát
- **reason:** Obě části významu jsou stejné; druhá má uvádět nedokonavý protějšek.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00052

- **cardId:** a1-da
- **field:** study.comparison[0].meaning
- **severity:** LOW
- **currentCs:** Tam • Zde • Zde (obecně)
- **proposedCs:** Tam • Tady • Zde (obecně)
- **reason:** Druhá položka se opakuje; v tomto významu české „te“ odpovídá slovu „tady“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00053

- **cardId:** a1-das
- **field:** lv
- **severity:** HIGH
- **currentCs:** Neuter určitý člen
- **proposedCs:** Určitý člen středního rodu
- **reason:** Text obsahuje anglický remnant „Neuter“ místo plně českého označení.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00054

- **cardId:** a1-das
- **field:** study.comparison[1].meaning
- **severity:** MEDIUM
- **currentCs:** Tenhle
- **proposedCs:** Tohle
- **reason:** Samostatné německé „dies“ je zde neutrální „tohle“, nikoli mužské „tenhle“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00055

- **cardId:** a1-das
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Je to moje auto
- **proposedCs:** Je to moje auto.
- **reason:** Samostatné české oznamovací větě chybí koncová tečka.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00056

- **cardId:** a1-der
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Mužský rod určitý člen
- **proposedCs:** Určitý člen mužského rodu
- **reason:** Současné pořadí slov je v češtině nepřirozené; přirozené je „určitý člen mužského rodu“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00057

- **cardId:** a1-die
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Ženský určitý člen
- **proposedCs:** Určitý člen ženského rodu
- **reason:** Současné pořadí slov je v češtině nepřirozené a významově nejasné.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00058

- **cardId:** a1-dieser
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Líbí se mi tento pes
- **proposedCs:** Líbí se mi tento pes.
- **reason:** Samostatné české oznamovací větě chybí koncová tečka.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00059

- **cardId:** a1-eis
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Jím zmrzlinu
- **proposedCs:** Jím zmrzlinu.
- **reason:** Samostatné české oznamovací větě chybí koncová tečka.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00060

- **cardId:** a1-eis
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Chceš zmrzlinu
- **proposedCs:** Chceš zmrzlinu?
- **reason:** Český překlad otázky postrádá koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00061

- **cardId:** a1-etwas
- **field:** study.comparison[1].meaning
- **severity:** LOW
- **currentCs:** Něco (hovorové)
- **proposedCs:** Něco (hovorově)
- **reason:** Závorková poznámka vyžaduje příslovce „hovorově“, nikoli přídavné jméno „hovorové“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00062

- **cardId:** a1-etwas
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Máš trochu času
- **proposedCs:** Máš trochu času?
- **reason:** Překlad otázky postrádá koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00063

- **cardId:** a1-etwas
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Jsem trochu unavený
- **proposedCs:** Jsem trochu unavený.
- **reason:** Oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00064

- **cardId:** a1-etwas
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Něco pro tebe mám
- **proposedCs:** Něco pro tebe mám.
- **reason:** Oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00065

- **cardId:** a1-euch
- **field:** lv
- **severity:** HIGH
- **currentCs:** Ty • Ty
- **proposedCs:** Vás • Vám
- **reason:** „Euch“ je množné číslo v akuzativu nebo dativu; „Ty“ neodpovídá významu ani pádu.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00066

- **cardId:** a1-fahren
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Vezmu tě domů
- **proposedCs:** Vezmu tě domů.
- **reason:** Oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00067

- **cardId:** a1-fahren
- **field:** study.accents.purple[1]
- **severity:** MEDIUM
- **currentCs:** Braucu
- **proposedCs:** Jedu
- **reason:** „Braucu“ je lotyšský text a v české sekci accentů jde o cizojazyčný zbytek.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00068

- **cardId:** a1-fahren
- **field:** study.accents.green[4]
- **severity:** MEDIUM
- **currentCs:** Vilcienu
- **proposedCs:** Vlakem
- **reason:** „Vilcienu“ je lotyšský text; český překlad má být „Vlakem“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00069

- **cardId:** a1-finden
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Nemohu najít svůj klíč
- **proposedCs:** Nemohu najít svůj klíč.
- **reason:** Oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00070

- **cardId:** a1-finden
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Zdá se mi to dobré.
- **proposedCs:** Našel/našla jsi svůj telefon?
- **reason:** Český překlad odpovídá jiné větě než uvedený německý originál.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00071

- **cardId:** a1-finden
- **field:** study.examples[2].lv
- **severity:** HIGH
- **currentCs:** Co si myslíš o filmu?
- **proposedCs:** Myslím si, že je to dobré.
- **reason:** Český překlad neodpovídá uvedené německé větě „Ich finde das gut.“
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00072

- **cardId:** a1-frau
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Je to pěkná žena.
- **proposedCs:** Je to milá žena.
- **reason:** V tomto kontextu „nett“ vyjadřuje povahu, tedy „milá“, nikoli primárně vzhledovou „pěkná“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00073

- **cardId:** a1-fuer
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Když mluvíme o příjemci nebo záměru, für = pro (für dich = pro vás).
- **proposedCs:** Když mluvíme o příjemci nebo záměru, für = pro (für dich = pro tebe).
- **reason:** „Dich“ je 2. osoba jednotného čísla; české „vás“ je množné číslo nebo vykání.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00074

- **cardId:** a1-ganz-study
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Celý • Úplně
- **proposedCs:** Celý • Úplně • Docela
- **reason:** Hlavní překlad neuvádí běžný význam „docela“, který je relevantní i pro studijní obsah k tomuto slovu.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00075

- **cardId:** a1-geben
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Dávám ti své číslo
- **proposedCs:** Dávám ti své číslo.
- **reason:** Oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00076

- **cardId:** a1-geben
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Beru knihu
- **proposedCs:** Beru knihu.
- **reason:** Výuková věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00077

- **cardId:** a1-geben
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Dostanu dárek
- **proposedCs:** Dostanu dárek.
- **reason:** Výuková věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00078

- **cardId:** a1-gleich
- **field:** study.explanation[2]
- **severity:** LOW
- **currentCs:** Pokud jde o srovnání, gleich = stejný/stejný (die gleiche Farbe = stejná barva).
- **proposedCs:** Pokud jde o srovnání, gleich = stejný (die gleiche Farbe = stejná barva).
- **reason:** Duplicitní překlad stejný/stejný je v učebním vysvětlení zjevná chyba.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00079

- **cardId:** a1-gross-study
- **field:** study.examples[1].lv
- **severity:** HIGH
- **currentCs:** Berlín je velké město.
- **proposedCs:** Dům je velký.
- **reason:** Česká věta překládá jiný podmět i význam než německý originál.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00080

- **cardId:** a1-gut-study
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Jak se máš - dobře, díky!
- **proposedCs:** Jak se máš – dobře, díky!
- **reason:** V dialogu je použit spojovník místo běžného pomlčkového oddělovače.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00081

- **cardId:** a1-haben
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** Česká dativní konstrukce „I have / you have“ v němčině je nominativ + haben: Ich habe ..., Du hast ..., Er hat ... — ne *mir habe.
- **proposedCs:** Anglické „I have / you have“ se v němčině vyjadřuje nominativem + haben: Ich habe ..., Du hast ..., Er hat ... — ne *mir habe.
- **reason:** Text chybně označuje anglickou konstrukci za českou.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00084

- **cardId:** a1-halten
- **field:** study.comparison[2].word
- **severity:** HIGH
- **currentCs:** stoppen
- **proposedCs:** anhalten
- **reason:** Srovnávací pole obsahuje jiné německé sloveso než anhalten.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00087

- **cardId:** a1-hoeren-study
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Hören = slyšet/poslechnout zvuk.
- **proposedCs:** hören = slyšet zvuk / poslouchat hudbu.
- **reason:** „Poslechnout zvuk“ je nepřirozené a nevhodně vymezuje význam slovesa hören.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00088

- **cardId:** a1-hoeren-study
- **field:** study.explanation[2]
- **severity:** LOW
- **currentCs:** Často charakterizované: zvuky.
- **proposedCs:** Často se používá pro zvuky.
- **reason:** Současná formulace je gramaticky neúplná a v češtině nepřirozená.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00089

- **cardId:** a1-ihr
- **field:** study.explanation[1]
- **severity:** MEDIUM
- **currentCs:** S malými písmeny se ihr jako adresa pro několik lidí překládá jako vy (Kommt ihr mit? = Jdete spolu?).
- **proposedCs:** S malým písmenem se ihr jako oslovení více lidí překládá jako vy (Kommt ihr mit? = Jdete spolu?).
- **reason:** Slovo adresa je chybný překlad pojmu Anrede; jde o oslovení více lidí.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00090

- **cardId:** a1-ihr
- **field:** study.explanation[3]
- **severity:** MEDIUM
- **currentCs:** Ihr jako tvar dativu (od sie) znamená k ní (Ich gebe ihr das Buch. = dávám jí knihu.).
- **proposedCs:** Ihr jako tvar dativu (od sie) znamená jí (Ich gebe ihr das Buch. = Dávám jí knihu.).
- **reason:** Základní český význam dativu ihr je jí; „k ní“ je zde zavádějící.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00093

- **cardId:** a1-im
- **field:** study.explanation[4]
- **severity:** LOW
- **currentCs:** V praxi se téměř vždy používá im místo full in dem.
- **proposedCs:** V praxi se téměř vždy používá im místo plné formy in dem.
- **reason:** Anglické slovo full je cizojazyčný pozůstatek v českém výukovém textu.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00097

- **cardId:** a1-kennen-study
- **field:** study.important[0]
- **severity:** HIGH
- **currentCs:** Kennen = poznat osobu/místo.
- **proposedCs:** Kennen = znát osobu/místo.
- **reason:** „Poznat“ vyjadřuje spíše dokonavé seznámení; pro kennen je zde správně „znát“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00100

- **cardId:** a1-kosten
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Kolik to stojí
- **proposedCs:** Kolik to stojí?
- **reason:** Česká tázací věta v produkci postrádá koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00101

- **cardId:** a1-kosten
- **field:** study.examples[4].lv
- **severity:** LOW
- **currentCs:** Platím účet
- **proposedCs:** Platím účet.
- **reason:** Produkční oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00102

- **cardId:** a1-kosten
- **field:** study.examples[5].lv
- **severity:** LOW
- **currentCs:** Mohu platit v hotovosti
- **proposedCs:** Mohu platit v hotovosti?
- **reason:** Česká tázací věta v produkci postrádá koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00103

- **cardId:** a1-kosten
- **field:** study.examples[7].lv
- **severity:** LOW
- **currentCs:** Teď zaplatím
- **proposedCs:** Teď zaplatím.
- **reason:** Produkční oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00104

- **cardId:** a1-land
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Obec
- **proposedCs:** Vesnice
- **reason:** Základní český překlad německého Dorf je „vesnice“; „obec“ je širší a méně přesné označení.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00105

- **cardId:** a1-lang
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Jak dlouho to trvá
- **proposedCs:** Jak dlouho to trvá?
- **reason:** Česká tázací věta v produkci postrádá koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00107

- **cardId:** a1-laufen
- **field:** study.comparison[2].meaning
- **severity:** MEDIUM
- **currentCs:** Jezdit transportem
- **proposedCs:** Jezdit dopravním prostředkem
- **reason:** „Jezdit transportem“ je nepřirozený kalk; běžné české vyjádření je „jezdit dopravním prostředkem“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00108

- **cardId:** a1-laut
- **field:** study.examples[5].lv
- **severity:** LOW
- **currentCs:** Slyším zvuk
- **proposedCs:** Slyším zvuk.
- **reason:** Produkční oznamovací věta postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00109

- **cardId:** a1-laut-study
- **field:** study.explanation[0]
- **severity:** MEDIUM
- **currentCs:** Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Znamená zvuk jako věc, signál nebo zvuk jazyka.
- **proposedCs:** Hlavní myšlenka: Podstatné jméno se členem der se píše s velkým písmenem. Znamená zvuk jako věc, signál nebo zvuk jazyka.
- **reason:** Vysvětlení obsahuje gramaticky nesrozumitelnou formulaci a neuvádí správně člen der.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00110

- **cardId:** a1-laut-study
- **field:** study.explanation[4]
- **severity:** MEDIUM
- **currentCs:** Často popisuje: podstatné jméno (der).
- **proposedCs:** Jde o podstatné jméno se členem der.
- **reason:** Věta „Často popisuje“ je v tomto kontextu gramaticky i významově nesrozumitelná.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00111

- **cardId:** a1-laut-study
- **field:** study.important[0]
- **severity:** MEDIUM
- **currentCs:** Laut je malá písmena a nemá žádný člen - je to přídavné jméno.
- **proposedCs:** laut se píše malým písmenem a nemá žádný člen – je to přídavné jméno.
- **reason:** Text má chybnou vazbu „je malá písmena“; zároveň je třeba správně rozlišit malé laut jako přídavné jméno.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00113

- **cardId:** a1-leise-study
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Prosím mluv potichu.
- **proposedCs:** Prosím, mluv potichu.
- **reason:** A comma is required after the introductory polite expression Prosím.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00117

- **cardId:** a1-mal
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Případ • Opakování
- **proposedCs:** Krát • Příležitost
- **reason:** Případ is not an appropriate meaning for German Mal in this translation field.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00121

- **cardId:** a1-machen
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Co to děláš
- **proposedCs:** Co to děláš?
- **reason:** The Czech interrogative sentence is missing its question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00122

- **cardId:** a1-morgen
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Přijdu zítra
- **proposedCs:** Přijdu zítra.
- **reason:** The Czech declarative sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00123

- **cardId:** a1-morgen
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Zítra je pondělí
- **proposedCs:** Zítra je pondělí.
- **reason:** The Czech declarative sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00124

- **cardId:** a1-morgen-study
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Přijdu zítra
- **proposedCs:** Přijdu zítra.
- **reason:** The Czech declarative sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00125

- **cardId:** a1-morgen-study
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Zítra je pondělí
- **proposedCs:** Zítra je pondělí.
- **reason:** The Czech declarative sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00129

- **cardId:** a1-nach
- **field:** study.tip.text
- **severity:** LOW
- **currentCs:** Pamatujte: nach Hause • Nach Berlin • Po jídle.
- **proposedCs:** Pamatujte: nach Hause • nach Berlin • Po jídle.
- **reason:** The phrase after the bullet is a continuation and should use lowercase nach.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00130

- **cardId:** a1-nach
- **field:** study.important[1]
- **severity:** HIGH
- **currentCs:** Do školy se obvykle chodí v die Schule, ne nach Schule.
- **proposedCs:** Do školy se obvykle chodí in die Schule, ne nach Schule.
- **reason:** The German phrase is incorrectly written as v die Schule; the embedded phrase must be in die Schule.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00131

- **cardId:** a1-natuerlich
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Jdeš se mnou? - samozřejmě!
- **proposedCs:** Jdeš se mnou? – Samozřejmě!
- **reason:** The response should use an en dash and begin with a capital letter after the question.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00136

- **cardId:** a1-oder
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Nebo si vyberte
- **proposedCs:** Nebo
- **reason:** Nebo si vyberte is an example-like phrase rather than a concise meaning for the conjunction oder.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00138

- **cardId:** a1-reis
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Jím rýži
- **proposedCs:** Jím rýži.
- **reason:** The Czech sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00139

- **cardId:** a1-sagen-study
- **field:** study.examples[0].lv
- **severity:** MEDIUM
- **currentCs:** Co jsi říkal
- **proposedCs:** Co jsi řekl?
- **reason:** The Czech translation should match the completed past meaning and include the question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00140

- **cardId:** a1-sagen-study
- **field:** study.comparison[0].example
- **severity:** MEDIUM
- **currentCs:** Was hast du gesagt? – Co jsi říkal
- **proposedCs:** Was hast du gesagt? – Co jsi řekl?
- **reason:** The Czech translation uses the less precise říkal and omits the question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00141

- **cardId:** a1-schauen-study
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Dívám se na televizi
- **proposedCs:** Dívám se na televizi.
- **reason:** The Czech sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00142

- **cardId:** a1-schauen-study
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** Aktivně se dívat nebo dívat.
- **proposedCs:** Aktivně sledovat nebo se dívat.
- **reason:** Dívat se nebo dívat is tautological and grammatically incomplete as a natural Czech contrast.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00144

- **cardId:** a1-schon-study
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Už jsem doma
- **proposedCs:** Už jsem doma.
- **reason:** The Czech sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00145

- **cardId:** a1-schwimmen
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Plavat
- **proposedCs:** Koupat se
- **reason:** Baden means Koupat se in this comparison; Plavat is the meaning of schwimmen and is incorrect here.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00146

- **cardId:** a1-sehen
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Vidím tě
- **proposedCs:** Vidím tě.
- **reason:** The Czech sentence is missing its final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00147

- **cardId:** a1-sehen
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Vidíš to auto
- **proposedCs:** Vidíš to auto?
- **reason:** The Czech question is missing its question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00148

- **cardId:** a1-sehen
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Nic nevidím
- **proposedCs:** Nic nevidím.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00149

- **cardId:** a1-sehen
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Hodinky
- **proposedCs:** Dívat se
- **reason:** „Hodinky“ znamená wristwatch, nikoli německé schauen; význam je sémanticky chybný.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00150

- **cardId:** a1-sein
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Jsem tady
- **proposedCs:** Jsem tady.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00151

- **cardId:** a1-sein
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Jsi unavený
- **proposedCs:** Jsi unavený.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00152

- **cardId:** a1-sein
- **field:** study.sectionAccents.comparison[3].meaning.purple[0]
- **severity:** HIGH
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** „Pobyt“ je podstatné jméno, zatímco bleiben zde vyžaduje český infinitiv „zůstat“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00154

- **cardId:** a1-sich
- **field:** study.translation
- **severity:** MEDIUM
- **currentCs:** Se • Sebe
- **proposedCs:** Se • Sebe • Sobě
- **reason:** Výčet českých významů opomíjí běžný dativní význam „sobě“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00156

- **cardId:** a1-sich
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Myji auto
- **proposedCs:** Myji auto.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00157

- **cardId:** a1-sicher
- **field:** study.examples[4].lv
- **severity:** LOW
- **currentCs:** Jsem si jistý
- **proposedCs:** Jsem si jistý.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00158

- **cardId:** a1-sicher
- **field:** study.sectionAccents.examples[5].lv.purple[0]
- **severity:** LOW
- **currentCs:** Jezděte
- **proposedCs:** Jeď
- **reason:** „Jezděte“ je formální množné číslo a neodpovídá neformálnímu rozkazu „Fahr sicher!“ ani významu věty.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00159

- **cardId:** a1-sie-study
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Ona jí
- **proposedCs:** Ona jí.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00162

- **cardId:** a1-sollen
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Co mám dělat
- **proposedCs:** Co mám dělat?
- **reason:** Česká otázka v produkci postrádá koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00163

- **cardId:** a1-sollen
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Už musím jít
- **proposedCs:** Už musím jít.
- **reason:** Česká oznamovací věta v produkci postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00165

- **cardId:** a1-sollen
- **field:** study.sectionAccents.important[0].blue[0]
- **severity:** LOW
- **currentCs:** Byl
- **proposedCs:** Měl by
- **reason:** „Byl“ neodpovídá významu sollen; český ekvivalent je „měl by“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00166

- **cardId:** a1-stehen
- **field:** study.comparison[0].meaning
- **severity:** MEDIUM
- **currentCs:** Stát / stát
- **proposedCs:** Stát / být postavený
- **reason:** Druhá část opakuje „stát“ a nevysvětluje odlišný význam stehen u umístění či postavení.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00174

- **cardId:** a1-verstehen
- **field:** study.examples[0].lv
- **severity:** LOW
- **currentCs:** Rozumím ti
- **proposedCs:** Rozumím ti.
- **reason:** The Czech declarative example lacks its sentence-final period.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00175

- **cardId:** a1-verstehen
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Rozumíš německy
- **proposedCs:** Rozumíš německy?
- **reason:** The Czech direct question lacks its required question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00179

- **cardId:** a1-vom
- **field:** study.tip[0]
- **severity:** MEDIUM
- **currentCs:** Pamatujte: von + dem → vom (pro koho?).
- **proposedCs:** Pamatujte: von + dem → vom (od koho? od čeho?).
- **reason:** „Pro koho?“ means „für wen?“ and is incorrect for vom, which expresses origin or source.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00180

- **cardId:** a1-was
- **field:** lv
- **severity:** HIGH
- **currentCs:** Kdo • Co
- **proposedCs:** Co
- **reason:** Was means „co“, while „kdo“ corresponds to wer and is a current semantic error.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00182

- **cardId:** a1-was
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Co teď děláš
- **proposedCs:** Co teď děláš?
- **reason:** The Czech direct question lacks its required question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00183

- **cardId:** a1-was
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Co chceš pít
- **proposedCs:** Co chceš pít?
- **reason:** The Czech direct question lacks its required question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00184

- **cardId:** a1-was
- **field:** study.examples[6].lv
- **severity:** LOW
- **currentCs:** Co jsi říkal
- **proposedCs:** Co jsi říkal?
- **reason:** The Czech direct question lacks its required question mark.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00185

- **cardId:** a1-was
- **field:** study.sectionAccents.important[0].blue[0]
- **severity:** HIGH
- **currentCs:** Byl
- **proposedCs:** was
- **reason:** „Byl“ is a Czech verb and does not translate the German pronoun was, which means „co“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00186

- **cardId:** a1-wenn
- **field:** study.sectionAccents.comparison[1].meaning.purple[0]
- **severity:** MEDIUM
- **currentCs:** Nebo
- **proposedCs:** Zda
- **reason:** In an indirect question, ob means „zda“ or „jestli“, not „nebo“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00187

- **cardId:** a1-wenn
- **field:** study.sectionAccents.comparison[2].meaning.purple[0]
- **severity:** MEDIUM
- **currentCs:** Když
- **proposedCs:** Kdy
- **reason:** Wann is the interrogative „kdy“; „když“ is typically translated by wenn.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00188

- **cardId:** a1-wenn
- **field:** study.important[1]
- **severity:** MEDIUM
- **currentCs:** Kdy přijedeš? je tu otázka. Wenn du kommst... je stav/napětí.
- **proposedCs:** „Kdy přijedeš?“ je otázka. „Wenn du kommst…“ vyjadřuje podmínku.
- **reason:** „Stav/napětí“ is incorrect here; Wenn du kommst expresses a condition.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00189

- **cardId:** a1-wer
- **field:** lv
- **severity:** LOW
- **currentCs:** Kdo • Kdo
- **proposedCs:** Kdo
- **reason:** The current Czech title repeats „Kdo“ and contains no distinct second translation.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00190

- **cardId:** a1-wer
- **field:** study.tip[0]
- **severity:** LOW
- **currentCs:** Wer se ptá na osoby (kdo/kdo) - na věci a události, používáme was.
- **proposedCs:** Wer se ptá na osoby (kdo) – na věci a události používáme was.
- **reason:** The current Czech explanation repeats „kdo“ and has an incorrect hyphen-minus separator.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00191

- **cardId:** a1-wer
- **field:** study.tip[1]
- **severity:** MEDIUM
- **currentCs:** Chcete-li se zeptat na volbu mezi několika lidmi, použijte wer von... (který z...).
- **proposedCs:** Chcete-li se zeptat, kdo z několika lidí, použijte wer von... (kdo z...).
- **reason:** V kontextu volby mezi lidmi české „který z“ významově neodpovídá německému wer von....
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00192

- **cardId:** a1-wer
- **field:** study.important[1]
- **severity:** LOW
- **currentCs:** Věci a události jsou žádány s was, ne wer.
- **proposedCs:** Na věci a události se ptáme pomocí was, ne wer.
- **reason:** Současná věta je nepřirozený český kalk; navržená formulace je přirozená a významově přesná.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00193

- **cardId:** a1-wer
- **field:** study.sectionAccents.important[0].blue[0]
- **severity:** MEDIUM
- **currentCs:** Ptali
- **proposedCs:** wer
- **reason:** Zvýrazněné české slovo „Ptali“ neodpovídá německému heslu wer.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00194

- **cardId:** a1-werden
- **field:** study.examples[3].lv
- **severity:** LOW
- **currentCs:** Jsem unavený
- **proposedCs:** Jsem unavený.
- **reason:** Oznamovací věta v českém studijním příkladu postrádá koncovou tečku.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00195

- **cardId:** a1-werden
- **field:** study.sectionAccents.comparison[2].meaning.purple[0]
- **severity:** MEDIUM
- **currentCs:** Pobyt
- **proposedCs:** Zůstat
- **reason:** Překlad „Pobyt“ neodpovídá slovesu bleiben; správný význam je „zůstat“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00196

- **cardId:** a1-wetter
- **field:** lv
- **severity:** HIGH
- **currentCs:** Čas (počasí)
- **proposedCs:** Počasí
- **reason:** U hesla Wetter je český význam „Čas“ zavádějící; správný základní překlad je „Počasí“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00197

- **cardId:** a1-wetter
- **field:** study.sectionAccents.examples[0].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** Kolik
- **proposedCs:** Jaké
- **reason:** V otázce „Jaké je dnes počasí?“ odpovídá německému wie české „Jaké“, nikoli „Kolik“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00198

- **cardId:** a1-wetter
- **field:** study.sectionAccents.examples[5].lv.green[0]
- **severity:** MEDIUM
- **currentCs:** Zítra
- **proposedCs:** lepší
- **reason:** Německému besser odpovídá české „lepší“; „Zítra“ je jiný význam.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00199

- **cardId:** a1-wie
- **field:** study.examples[1].lv
- **severity:** LOW
- **currentCs:** Jak se jmenuješ
- **proposedCs:** Jak se jmenuješ?
- **reason:** Přímá česká otázka postrádá povinný koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00200

- **cardId:** a1-wie
- **field:** study.examples[2].lv
- **severity:** LOW
- **currentCs:** Kolik to stojí
- **proposedCs:** Kolik to stojí?
- **reason:** Přímá česká otázka postrádá povinný koncový otazník.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00201

- **cardId:** a1-wie
- **field:** study.sectionAccents.examples[5].lv.purple[0]
- **severity:** MEDIUM
- **currentCs:** stejně
- **proposedCs:** jako
- **reason:** Ve vazbě so ... wie se české wie překládá jako „jako“, nikoli „stejně“.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00203

- **cardId:** a1-zu
- **field:** study.sectionAccents.comparison[0].meaning.purple
- **severity:** HIGH
- **currentCs:** ["too","too","too","infinitiv"]
- **proposedCs:** K,do,příliš,infinitiv
- **reason:** Zvýraznění obsahuje anglické překlady místo českých významů německého hesla zu.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00205

- **cardId:** a1-fernsehen-study
- **field:** study.examples[5].lv
- **severity:** MEDIUM
- **currentCs:** Co se zobrazuje v televizi?
- **proposedCs:** Co dávají v televizi?
- **reason:** Současná věta znamená, co se zobrazuje, ne přirozené české „Co dávají v televizi?“ odpovídající originálu.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00210

- **cardId:** a1-urlaub
- **field:** study.explanation[0]
- **severity:** HIGH
- **currentCs:** Hlavní myšlenka: pouze jednotné číslo. Dovolená z práce – vždy v jednotném čísle.
- **proposedCs:** Hlavní myšlenka: v běžném významu dovolené se používá obvykle jednotné číslo. Jde o dovolenou z práce.
- **reason:** Absolutní tvrzení „vždy v jednotném čísle“ je věcně nesprávné, protože Urlaube je možné v jiných významech.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00211

- **cardId:** a1-urlaub
- **field:** study.explanation[2]
- **severity:** HIGH
- **currentCs:** Často charakterizován: pouze jednotné číslo.
- **proposedCs:** V běžném významu dovolené se často používá v jednotném čísle.
- **reason:** Tvrzení „pouze jednotné číslo“ je příliš absolutní; množné číslo Urlaube je v jiných kontextech možné.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00212

- **cardId:** a1-urlaub
- **field:** study.explanation[3]
- **severity:** HIGH
- **currentCs:** Der Urlaub je pouze v jednotném čísle – dovolená z práce (im Urlaub).
- **proposedCs:** Der Urlaub se v běžném významu dovolené používá obvykle v jednotném čísle – dovolená z práce (im Urlaub).
- **reason:** Výrok „pouze v jednotném čísle“ je nesprávný a odporuje možnosti množného čísla Urlaube.
- **validationStatus:** CONFIRMED_REAL

#### FINAL702-A1-00213

- **cardId:** a1-urlaub
- **field:** study.important[0]
- **severity:** LOW
- **currentCs:** Nesprávně: die Ferie, der Urlabe (na úrovni A1).
- **proposedCs:** Nesprávně: die Ferie, der Urlaube (na úrovni A1).
- **reason:** „Urlabe“ je chybný německý tvar; v uvedeném příkladu má být množné číslo „Urlaube“.
- **validationStatus:** CONFIRMED_REAL


---

- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Raw deterministic: 29
- Raw Luna: 185
- Validated total: 214
- JSON: `reports/temp/cs-a1-final-702-audit-on-main.json`
- Validated JSON: `reports/temp/cs-a1-final-702-audit-on-main-validated.json`

_Audited: 2026-08-13 | production changes: 0_
