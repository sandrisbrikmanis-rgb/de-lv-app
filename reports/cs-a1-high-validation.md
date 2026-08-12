# CS–DE A1 HIGH VALIDATION

## KOPSAVILKUMS

- Audit type: HIGH FULL VALIDATION (read-only)
- Model: GPT-5.6 Luna
- Post-repair audit source: `reports/temp/cs-a1-post-repair-audit.json`
- CRITICAL cycle: CLOSED
- Production changes: 0

## COVERAGE

| Metrika | Vērtība |
|---|---|
| Raw HIGH expected | 371 |
| HIGH loaded | 371 |
| Processed | 371 |
| Missing | 0 |
| Duplicate input findings (technical) | 0 |
| Unique input findings | 371 |
| Status sum | 371/371 |

## CLASSIFICATION

| Status | Count |
|---|---|
| CONFIRMED_REAL | 287 |
| FALSE_POSITIVE | 9 |
| STALE_ALREADY_FIXED | 22 |
| DUPLICATE | 16 |
| DE_SOURCE_ISSUE | 0 |
| PRE_EXISTING_STRUCTURAL_GAP | 30 |
| NEEDS_OWNER_REVIEW | 7 |

## CONFIRMED_REAL REPAIR CANDIDATES (287)

- **HIGH-072** a1-besuchen-89 `csText`: „Zúčastnit se“ znamená teilnehmen; pro německé besuchen je v této kartě správný český překlad „Navšt
- **HIGH-148** a1-bitte `study.tip`: Tip obsahuje anglické slovo „Little“ a nesmyslnou českou větu, což je skutečná chyba v produkci.
- **HIGH-151** a1-bitte-study `study.tip`: Tip stále obsahuje anglické slovo „Little“ a chybný překlad členu die jako „zemřít“.
- **HIGH-172** a1-ein `study.explanation`: The explanation incorrectly limits ein to masculine nouns and uses an unnatural second sentence.
- **HIGH-183** a1-es `study.tip.text`: Production still contains the malformed „českýé“ and incorrectly attributes the source distinction t
- **HIGH-184** a1-es `study.important[0]`: Production still contains malformed Czech and does not clearly distinguish the German pronouns ich a
- **HIGH-013** a1-fahren `entry[172].study.accents.purple[0]`: „Braukt“ is a Latvian remnant in a Czech accent field.
- **HIGH-014** a1-fahren `entry[172].study.accents.purple[2]`: The Czech infinitive requires the diacritic and the intended meaning is vézt.
- **HIGH-015** a1-fahren `entry[172].study.accents.purple[4]`: „Aizvest“ is a Latvian remnant in a Czech accent field.
- **HIGH-016** a1-fahren `entry[172].study.sectionAccents.explanation.purple[1]`: The Czech infinitive is misspelled without the required diacritic.
- **HIGH-017** a1-fahren `entry[172].study.sectionAccents.important[0].text.purple[0]`: „braukt“ is a Latvian remnant in the Czech field.
- **HIGH-018** a1-fahren `entry[172].study.sectionAccents.important[0].example.purple[0]`: „braukt“ is a Latvian remnant in the Czech example field.
- **HIGH-019** a1-fahren `entry[172].study.sectionAccents.important[0].example.purple[1]`: The Czech infinitive is misspelled without the required diacritic.
- **HIGH-020** a1-fahren `entry[172].study.sectionAccents.important[0].example.purple[2]`: „aizvest“ is a Latvian remnant in the Czech example field.
- **HIGH-193** a1-fahren `study.translation`: The current translation overemphasizes řídit and omits the primary meanings jet/jezdit.
- **HIGH-194** a1-fahren `study.explanation[0]`: The explanation wrongly narrows fahren to driving and uses vzít instead of vézt/odvézt.
- **HIGH-195** a1-fahren `study.explanation[2]`: The current text gives incorrect meanings for fahren with a person as object.
- **HIGH-084** a1-ganz-219 `csText`: Všechno means “everything,” not the usual adjective/adverb meaning of German ganz.
- **HIGH-050** a1-in `study.sectionAccents`: The Czech sectionAccents still contains the Latvian form "Berlīnē"; it should use the Czech form "Be
- **HIGH-223** a1-in `study.tip.text`: The current tip repeats "v" and omits the required Czech distinction between v and do.
- **HIGH-245** a1-land `study.important[0]`: The current sentence repeats the same Czech phrase on both sides and fails to express the intended c
- **HIGH-055** a1-reis `entry[496].study.explanation`: The Czech explanation incorrectly refers to Latvians instead of describing Czech usage.
- **HIGH-318** a1-stehen `study.important[1]`: „Šmrnc“ is an unintelligible Czech mistranslation of the German verb stellen.
- **HIGH-319** a1-über `study.translation`: „Pro“ is misleading here; the card's examples require the core meanings nad, o and přes.
- **HIGH-320** a1-über `study.examples[1].lv`: The German noun Wetter means „počasí“, not „čas“.
- **HIGH-321** a1-über `study.explanation[0]`: In the thematic meaning, über means „o“, while „asi“ is incorrect.
- **HIGH-322** a1-über `study.explanation[2]`: For conversation, text or topic, über means „o“, not „asi“.
- **HIGH-323** a1-über `study.comparison[0].meaning`: The comparison incorrectly renders all three meanings as „přes“; the first two should be „nad“ and „
- **HIGH-329** a1-verstehen `study.translation`: Překlad „Pochopit“ neodpovídá zde použitému významu verstehen jako „rozumět“ jazyku, osobě nebo text
- **HIGH-330** a1-verstehen `study.explanation[2]`: Věta obsahuje nevhodnou zmínku o lotyštině a je gramaticky i významově vadná.
- **HIGH-331** a1-verstehen `study.important[0]`: Tvrzení o kořenu slova je v kontextu nesmyslné a nevysvětluje rozdíl mezi verstehen a können.
- **HIGH-361** a1-essen `study.examples[1].lv`: Německé ihr vyžaduje české „chcete“ a otázka má mít otazník.
- **HIGH-362** a1-essen `study.explanation`: Vysvětlení zaměňuje sloveso essen s podstatným jménem a obsahuje nesouvisející tvrzení o dešti.
- **HIGH-064** a1-alle-7 `csText`: Samostatné německé alle zde znamená „všichni“, nikoli „každý“ ve významu each/every.
- **HIGH-065** a1-achten-22 `csText`: Achten auf znamená dbát na nebo věnovat pozornost, ne pozorovat.
- **HIGH-066** a1-anziehen-30 `csText`: „Nasadit“ znamená nasadit předmět; německé „anziehen“ zde znamená obléknout si.
- **HIGH-067** a1-Ärztin-46 `csText`: „Ärztin“ je ženský rod, takže český překlad musí být „lékařka“, nikoli „lékař“.
- **HIGH-068** a1-aufpassen-51 `csText`: „Aufpassen“ znamená dávat pozor; „Buďte opatrní“ je užší situační rozkaz a není základním překladem 
- **HIGH-069** a1-aufstehen-52 `csText`: „Aufstehen“ znamená vstát; „postavit se“ označuje zaujetí stojící polohy a není přesným základním př
- **HIGH-070** a1-Bauch-73 `csText`: „Bauch“ znamená břicho; „žaludek“ je německy „Magen“ a označuje konkrétní orgán.
- **HIGH-071** a1-benutzen-83 `csText`: „Použití“ je podstatné jméno, ale německé „benutzen“ je sloveso; český infinitiv je „Používat“.
- **HIGH-073** a1-bitten-98 `csText`: „Zeptat se“ odpovídá německému „fragen“; „bitten“ znamená požádat nebo prosit.
- **HIGH-074** a1-blond-103 `csText`: „Blondýnka“ je podstatné jméno pro ženu; německé „blond“ je přídavné jméno.
- **HIGH-075** a1-Buchstabe-117 `csText`: „Dopis“ znamená písemnou zprávu, zatímco německé „Buchstabe“ označuje znak abecedy, tedy písmeno.
- **HIGH-076** a1-Cousine-125 `csText`: „Bratranec“ označuje muže, ale německé „Cousine“ je ženská sestřenice.
- **HIGH-077** a1-dein-132 `csText`: „Dein“ je neformální jednotné přivlastňovací zájmeno; „Vaše“ znamená vykání nebo množné číslo.
- **HIGH-078** a1-deutsch-135 `csText`: „Deutsch“ jako přídavné jméno znamená „německý“, nikoli osobu „Němec“.
- **HIGH-079** a1-du-149 `csText`: „Du“ je neformální jednotné zájmeno „ty“; „Vy“ vyjadřuje vykání nebo množné číslo.
- **HIGH-080** a1-Ecke-152 `csText`: „Ecke“ odpovídá českému základnímu tvaru „roh“, zatímco „rohu“ je nepřímý pád.
- **HIGH-081** a1-fett-184 `csText`: „Fett“ je přídavné jméno s významem „tučný“; „tuk“ je podstatné jméno.
- **HIGH-082** a1-frei-199 `csText`: Current Czech text is an infinitive meaning “to release,” not the adjective frei (“free”).
- **HIGH-083** a1-freundlich-203 `csText`: Current Czech text means “species/kind,” while freundlich means “friendly” or “kind.”
- **HIGH-085** a1-gelb-228 `csText`: Current Czech text is the noun “yellow/color yellow”; gelb is the adjective “yellow.”
- **HIGH-086** a1-Glas-241 `csText`: Current Czech text is an accusative or locative form; the dictionary headword is nominative singular
- **HIGH-087** a1-halb-262 `csText`: Current Czech text means “side,” not halb, which means “half” or “half-sized.”
- **HIGH-088** a1-Hälfte-263 `csText`: České „strana“ neodpovídá významu německého Hälfte; správný překlad je „polovina“.
- **HIGH-089** a1-Handschuh-268 `csText`: „Rukavici“ je pádový tvar; slovníkový nominativ jednotného čísla je „rukavice“.
- **HIGH-090** a1-Heft-273 `csText`: Německé Heft ve významu školního sešitu se česky překládá jako „sešit“, ne „notebook“.
- **HIGH-091** a1-Hemd-278 `csText`: „Košili“ je pádový tvar; slovníkový nominativ jednotného čísla je „košile“.
- **HIGH-092** a1-ich-291 `csText`: Německému podmětnému zájmenu ich odpovídá české „já“, nikoli akuzativní „mě“.
- **HIGH-093** a1-Keks-309 `csText`: „Cookie“ je anglicismus a neodpovídá běžnému českému překladu německého „Keks“ jako „sušenka“.
- **HIGH-094** a1-Hut-328 `csText`: Německé „Hut“ znamená klobouk nebo širší pokrývku hlavy; „čepice“ odpovídá spíše slovu „Mütze“.
- **HIGH-095** a1-Koch-340 `csText`: „Koch“ je podstatné jméno označující mužskou osobu, nikoli sloveso „vařit“.
- **HIGH-096** a1-Köchin-341 `csText`: „Köchin“ je podstatné jméno označující kuchařku, nikoli sloveso „vařit“.
- **HIGH-097** a1-Kopf-342 `csText`: „Hlavu“ je akuzativní tvar; jako český heslový překlad německého „Kopf“ má být nominativ „hlava“.
- **HIGH-098** a1-Lehrerin-365 `csText`: „Lehrerin“ označuje ženu, ale české „učitel“ je mužský rod. Správný překlad je „učitelka“.
- **HIGH-099** a1-links-380 `csText`: Druhý význam německého „links“ je přídavné jméno „levý“, nikoli opakované příslovce „vlevo“.
- **HIGH-100** a1-lustig-385 `csText`: „Lustig“ je přídavné jméno, zatímco „zábava“ je podstatné jméno. Správný překlad je „zábavný“.
- **HIGH-101** a1-Minute-407 `csText`: „Minutu“ je 4. pád; heslový tvar německého „Minute“ má být české „minuta“.
- **HIGH-102** a1-Mittag-410 `csText`: Německé „Mittag“ znamená „poledne“. „Oběd“ odpovídá výrazu „Mittagessen“.
- **HIGH-103** a1-nein-436 `csText`: „nein“ je české „ne“, nikoli „žádný“. Aktuální produkční překlad má chybný význam.
- **HIGH-104** a1-nicht-447 `csText`: „nicht“ je částice záporu „ne“, nikoli „žádný“. Aktuální produkční překlad má chybný význam.
- **HIGH-105** a1-Ostern-467 `csText`: „Ostern“ znamená podstatné jméno „Velikonoce“, nikoli přídavné jméno „velikonoční“.
- **HIGH-106** a1-Pferd-474 `csText`: „Pferd“ v jednotném čísle znamená „kůň“. Aktuální „Koně“ je jiný tvar a neodpovídá heslu.
- **HIGH-107** a1-Programm-484 `csText`: „Programm“ je české podstatné jméno „program“, nikoli sloveso „naprogramovat“.
- **HIGH-108** a1-richtig-497 `csText`: „Opravit“ znamená repair/fix, nikoli „richtig“. Německé „richtig“ zde znamená „správný“.
- **HIGH-109** a1-rund-501 `csText`: „Kolo“ je podstatné jméno. Německé přídavné jméno „rund“ znamená „kulatý“.
- **HIGH-110** a1-schmecken-515 `csText`: „Ochutnat“ znamená zkusit chuť; „schmecken“ znamená „chutnat“ nebo mít určitou chuť.
- **HIGH-111** a1-Schnee-517 `csText`: „Bude sněžit“ je slovesný výraz. Německé podstatné jméno „Schnee“ znamená „sníh“.
- **HIGH-112** a1-Sekunde-545 `csText`: „Sekundu“ je akuzativ. Samostatné německé podstatné jméno „Sekunde“ vyžaduje nominativ „sekunda“.

_... un vēl 207 CONFIRMED_REAL (skat. JSON)._

## INTEGRITY

| Check | Result |
|---|---|
| production changes | 0 |
| DE changes | 0 |
| cards | 702 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |

## LUNA STATS

- API requests: 36
- Tokens: 773155

---

_Audita datums: 2026-08-11_
_Artefakti: reports/temp/cs-a1-high-validation/_
