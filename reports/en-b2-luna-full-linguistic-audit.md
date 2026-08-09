# EN–DE B2 — Luna full linguistic audit (GPT-5.6 Luna)

**Audit date:** 2026-08-09
**Audit model:** gpt-5.6-luna
**Mode:** READ-ONLY — no production data modified
**Audited files:** `data/en/b2.js`, mirror `www/data/en/b2.js`
**Master reference:** `data/b2.js` (DE READ-ONLY)
**Data integrity:** PASS (MD5 unchanged: data=44e85f0a0fd7b3b1cdd7042cae4d73b2, www=44e85f0a0fd7b3b1cdd7042cae4d73b2)

---

## Scope & coverage

| Metric | Value |
|---|---:|
| Cards expected | **2118** |
| Cards audited | **2118** |
| Cards skipped | 0 |
| Flashcards expected | 2058 |
| Flashcards audited | 2058 |
| Study cards expected | 60 |
| Study cards audited | 60 |
| standardStudy | 15 |
| minimalStudy | 45 |

**Coverage proof:** 2118/2118 cards semantically reviewed by Luna.

---

## Deterministic validation (baseline)

| Check | Result |
|---|---|
| JavaScript syntax | PASS |
| UTF-8 / Mojibake | PASS |
| Structural parity | PASS |
| ID parity/order | PASS |
| DE READ-ONLY (germanIntegrity) | PASS |
| LV remnants (deterministic) | 1 |
| data ≡ www | PASS |

---

## Linguistic findings (Luna)

| Severity | Count |
|---|---:|
| CRITICAL | 10 |
| HIGH | 473 |
| MEDIUM | 452 |
| LOW | 84 |

---

## Non-error classifications

| Verdict | Count |
|---|---:|
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 0 |
| SOURCE_LV_ISSUE | 0 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_REVIEW | 0 |

---

## Known finding verification: b2-bieten

**CONFIRMED** — Latvian remnant in `study.important[1]`:

- **Deterministic (HIGH):** entry[2112].study.important[1] → "Ko vieta/programma sniedz: bieten."
- **Luna:** did not flag this remnant separately (miss); deterministic scan remains authoritative for FOREIGN_REMNANT here.

---

## Renderer / non-linguistic notes (sich verlaufen / verlaufen)

These are **documentation notes** from deterministic `validate-study-design` — not linguistic errors unless Luna flagged EN text:

- `b2-sich verlaufen` — minimalStudy flagged `studyObjectNoRenderable` by validate-study-design (renderer policy, LOW).
- `b2-verlaufen` — same minimalStudy renderer flag (LOW).

**Additional Luna findings on verlaufen cards:**

- b2-verlaufen / study.translation: HIGH — “To roll” is not a normal meaning of verlaufen; the verb can mean proceed or run its course.
- b2-verlaufen / study.explanation: HIGH — “Roll” is incorrect here, and “bez sich” is an untranslated Latvian remnant in the English explanation.

---

## DE SOURCE ISSUES

None flagged by Luna.

---

## Systematic patterns

| Pattern | Count | Sample cards |
|---|---:|---|
| other | 521 | b2-anbelangen-13, b2-angehen-19, b2-anbrechen-25, b2-anbremsen-26, b2-angeblich-28, b2-abberufen-34, b2-abblitzen-35, b2-abbringen-36 |
| semantics | 193 | b2-angebracht-18, b2-abfertigen-42, b2-abgesehen-44, b2-Abnutzung-52, b2-abscheulich-57, b2-abschlagen-59, b2-absondern-63, b2-abstimmen-66 |
| foreign_remnant | 114 | b2-auswärtig-115, b2-bleichen-263, b2-Devisen-384, b2-Devisenbörse-385, b2-Drucksache-454, b2-Fremde-835, b2-Geschwür-954, b2-Geselle-955 |
| naturalness | 73 | b2-barhäuptig-134, b2-Baukredit-139, b2-beispiellos-163, b2-Belieben-183, b2-beschwören-206, b2-billigen-248, b2-brüten-304, b2-Defekt-364 |
| study | 52 | b2-abweisen-74, b2-auswerfen-118, b2-Bauwesen-145, b2-Beförderung-150, b2-blödsinnig-271, b2-brillant-303, b2-Bürde-318, b2-Damm-340 |
| grammar | 34 | b2-Bodenschätze-281, b2-bürgerlich-321, b2-dreschen-441, b2-Drohung-445, b2-Gemüt-920, b2-Gestein-964, b2-Glut-1005, b2-Leitartikel-1238 |
| orthography | 18 | b2-Betäubung-220, b2-blutarm-276, b2-Blutarmut-277, b2-Ehrung-516, b2-Färbung-762, b2-glimmen-1002, b2-Günstling-1044, b2-Luftpost-1268 |
| calque | 14 | b2-deinerseits-368, b2-entmutigen-637, b2-Erdtrabant-669, b2-Gnadenbrot-1007, b2-gutheißen-1051, b2-Landzunge-1213, b2-mitwirken-1333, b2-Ökobauer-1402 |

---

## Detailed findings

| cardId | field | severity | category | currentEn | proposedEn | reason |
|---|---|---|---|---|---|---|
| b2-Elster-608 | enText | CRITICAL | TRANSLATION | Hiccup | Magpie | Elster means magpie; hiccup is an entirely different word. |
| b2-Gespött-959 | enText | CRITICAL | TRANSLATION | Teething | Mockery | “Teething” is unrelated; Gespött means mockery, ridicule or an object of ridicule. |
| b2-Getriebe-968 | enText | CRITICAL | TRANSLATION | The engine | Gearbox | Getriebe means gearbox or transmission; an engine is a different vehicle component. |
| b2-raffgierig-986 | enText | CRITICAL | TRANSLATION | Spellbinding | Acquisitive | “Spellbinding” means fascinating; raffgierig means grasping, acquisitive or greedy. |
| b2-Hahnenkamm-1058 | enText | CRITICAL | SEMANTICS | Cock sext | Rooster's comb | The current expression is erroneous; Hahnenkamm means a rooster's comb. |
| b2-Hausrat-1073 | enText | CRITICAL | SEMANTICS | Life | Household goods | Hausrat means household belongings or goods; life is unrelated. |
| b2-Herzversagen-1110 | enText | CRITICAL | SEMANTICS | Cardiac arrest • Insufficiency | Heart failure | Herzversagen means heart failure; cardiac arrest and insufficiency are not equivalent here. |
| b2-Rain-1491 | enText | CRITICAL | SEMANTICS | Hedgehog | Hedge | German Rain is a hedge or field boundary, not a hedgehog. |
| b2-Richtfest-1524 | enText | CRITICAL | SEMANTICS | Dragonfly festival | Topping-out ceremony | Richtfest is a ceremony marking completion of a building’s roof framework, not a dragonfly festival. |
| b2-Ringelnatter-1526 | enText | CRITICAL | SEMANTICS | Hungry | Grass snake | Ringelnatter is the common grass snake, not an adjective meaning hungry. |
| b2-anbrechen-25 | enText | HIGH | SEMANTICS | To begin • Hack | To begin • Break into | “Hack” does not express anbrechen as opening or breaking into something. |
| b2-angeblich-28 | enText | HIGH | SEMANTICS | As if • Apparently | Allegedly • Apparently | “As if” means as though, not allegedly; angeblich means allegedly or supposedly. |
| b2-Abenteuerlust-39 | enText | HIGH | SEMANTICS | Lust for an affair | Thirst for adventure | Abenteuerlust means a desire for adventure, not sexual or romantic interest in an affair. |
| b2-abgesehen-44 | enText | HIGH | SEMANTICS | Although • In addition | Apart from • Besides | Abgesehen commonly means apart from or besides; “although” and “in addition” do not express these se |
| b2-Abnutzung-52 | enText | HIGH | SEMANTICS | Attrition • Attrition • Attrition | Wear • Wear and tear • Abrasion | The three English senses are incorrectly duplicated; Abnutzung refers to wear, wear and tear, or abr |
| b2-Affäre-76 | enText | HIGH | TRANSLATION | Affair • Novel | Affair • Love affair | Novel is unrelated; Affäre can specifically refer to a romantic or sexual affair. |
| b2-Areal-89 | enText | HIGH | TRANSLATION | Range | Area | Areal means an area, tract or region, not generally a range. |
| b2-Ausbeutung-96 | enText | HIGH | TRANSLATION | Operation | Exploitation | Ausbeutung means exploitation, especially the unfair use of people or resources, not operation. |
| b2-sich aufdrängen-98 | enText | HIGH | TRANSLATION | To harass | To impose oneself | The reflexive verb means to impose oneself or force oneself on someone, not simply to harass. |
| b2-Augenmaß-102 | enText | HIGH | TRANSLATION | Acumeter | Judgement | Augenmaß means practical judgement or a sense of proportion; Acumeter is not an English equivalent. |
| b2-aussetzen-105 | enText | HIGH | TRANSLATION | Post • Subject • Oppose • Stand | Expose • Subject • Object • Stand in for | Post is not the relevant verb here; aussetzen can mean expose, object, or stand in for someone. |
| b2-ausstatten-108 | enText | HIGH | TRANSLATION | To supply • To design | To equip • To furnish | Ausstatten means to equip or furnish; design is a different activity. |
| b2-austreten-114 | enText | HIGH | TRANSLATION | Evict • Rent • Quit | Tread out • Wear down • Quit | Evict and rent are incorrect here; austreten can mean tread out, wear down, or withdraw. |
| b2-Blutbank-125 | lv | HIGH | SEMANTICS | Blood reserves | Blood bank | Blutbank means a blood bank, not a supply or reserve of blood. |
| b2-Bankleitzahl-128 | lv | HIGH | TRANSLATION | Bank index | Bank sort code | The German banking term corresponds to a bank sort code, especially in British English. |
| b2-Barren-136 | lv | HIGH | SEMANTICS | Tributaries | Parallel bars | In this context Barren means the gymnastics apparatus parallel bars, not waterways. |
| b2-Barrenturnen-137 | lv | HIGH | SEMANTICS | Exercise on tributaries | Parallel-bar gymnastics | The term refers to gymnastics on parallel bars, not exercise on tributaries. |
| b2-bebauen-146 | lv | HIGH | SEMANTICS | Process • Build | Cultivate • Build on | Bebauen means cultivate land or build on/develop land; process is not a relevant sense. |
| b2-befallen-148 | lv | HIGH | SEMANTICS | Come up • Attack | Afflict • Attack | Befallen can mean afflict or attack; come up does not express this meaning. |
| b2-begehren-152 | lv | HIGH | SEMANTICS | Demand • Demand • Like • Covet • Covet | Demand • Request • Desire • Covet • Long for | The current list duplicates senses and incorrectly translates desire as like. |
| b2-begierig-153 | lv | HIGH | GRAMMAR | Craving | Eager | Begierig is an adjective; craving is primarily a noun here and does not match the usual meaning. |
| b2-begnadigen-154 | lv | HIGH | TRANSLATION | To have mercy | To pardon | Begnadigen specifically means to pardon or grant clemency, not merely to have mercy. |
| b2-begünstigen-156 | lv | HIGH | SEMANTICS | Promote • Facilitate • Protect • Support | Promote • Facilitate • Favour • Support | Protect is not the relevant sense; begünstigen can mean favour or give preferential treatment. |
| b2-begutachten-157 | lv | HIGH | SEMANTICS | Give feedback • Evaluate | Assess • Evaluate | Begutachten means examine or assess professionally, not simply give feedback. |
| b2-beharren-158 | lv | HIGH | SEMANTICS | To exist • To remain | To persist • To insist | Beharren means persist or insist stubbornly, not exist or remain. |
| b2-Beihilfe-161 | lv | HIGH | SEMANTICS | State benefit • Bonus | State aid • Allowance | Beihilfe means aid, assistance or an allowance; bonus is a different type of payment. |
| b2-beiläufig-162 | lv | HIGH | SEMANTICS | Accidental • Casual • By the way • Passing by | Incidental • Casual • By the way • In passing | Accidental and passing by do not express the intended incidental or offhand senses. |
| b2-beispiellos-163 | lv | HIGH | NATURALNESS | Not been • Unseen • That which is not comparable to anything | Unprecedented • Unparalleled • Incomparable | The current first and third glosses are ungrammatical or unnatural; these are standard equivalents. |
| b2-beistimmen-166 | lv | HIGH | SEMANTICS | To approve • To support | To agree • To support | Beistimmen means agree with or endorse an opinion, rather than approve in the general sense. |
| b2-beiwohnen-167 | lv | HIGH | SEMANTICS | To be present • To participate | To attend • To be present | Beiwohnen means attend or be present at an event; participate changes the meaning. |
| b2-bejahrt-170 | lv | HIGH | SEMANTICS | In many years | Advanced in years | Bejahrt describes an older person, not something occurring in many years. |
| b2-Straßenbelag-174 | lv | HIGH | SEMANTICS | Street presence | Road surface | Straßenbelag means the surface or paving of a road, not presence on a street. |
| b2-belästigen-177 | lv | HIGH | SEMANTICS | Bother • Bother • Stick in | Bother • Harass • Pester | The list duplicates bother, while stick in is not a relevant English equivalent. |
| b2-beleibt-181 | lv | HIGH | SEMANTICS | Fat • Dear • Full | Fat • Stout • Portly | Dear and full are unrelated meanings; beleibt describes someone as notably fat or stout. |
| b2-Belieben-183 | lv | HIGH | SEMANTICS | Liked • Liking • Wanting | Pleasure • Preference • Wish | The German noun means pleasure, preference or wish; the current forms are unnatural and incomplete. |
| b2-Bergwerk-194 | lv | HIGH | SEMANTICS | Mine • Shaft | Mine • Mining shaft | Bergwerk means a mine; shaft is Schacht, not a direct synonym. |
| b2-beschimpfen-203 | lv | HIGH | SEMANTICS | To curse • To steal • To catch | To insult • To abuse • To vilify | Beschimpfen means insult or verbally abuse; steal and catch are unrelated meanings. |
| b2-besiedeln-208 | lv | HIGH | TRANSLATION | Camp the inhabitants | Settle inhabitants | Besiedeln means settle or populate a place, not camp people. |
| b2-bestechlich-215 | lv | HIGH | SEMANTICS | Buyable • Bribeable | Corruptible • Bribeable | Bestechlich means susceptible to bribery or corruptible, not merely buyable. |
| b2-bestürzt-218 | lv | HIGH | SEMANTICS | Surprised • Confused • Perplexed • Confused | Dismayed • Confused • Perplexed • Bewildered | Bestürzt means deeply upset or dismayed, not merely surprised. |
| b2-bewähren-229 | lv | HIGH | SEMANTICS | To protect • To protect • To protect • To save | To prove oneself | Bewähren means prove oneself or stand the test; the current translations mean protect or save. |
| b2-bezähmen-237 | lv | HIGH | SEMANTICS | Enchant • Captivate | Tame • Subdue | Bezähmen means tame or subdue, not enchant or captivate. |
| b2-Bildnis-247 | lv | HIGH | SEMANTICS | Family name • Portrait • Picture | Portrait • Portrait • Picture | Bildnis means portrait or picture; family name is unrelated. |
| b2-billigen-248 | lv | HIGH | TRANSLATION | Acknowledge as good • Agree | Approve • Agree to | The first gloss is unnatural and does not accurately express billigen as approve or sanction. |
| b2-blähen-258 | lv | HIGH | TRANSLATION | To blow • To inflate • To inflate | To swell • To inflate • To puff up | To blow is not the relevant standalone sense, and the final two glosses are duplicated. |
| b2-bleichen-263 | lv | HIGH | FOREIGN_REMNANT | Balate • Balot • Bleach | Fade • Bleach | The first two entries are non-English remnants; bleichen means fade or bleach. |
| b2-Blutkonserve-274 | lv | HIGH | SEMANTICS | Canned blood | Stored blood | A Blutkonserve is stored blood or a blood unit for transfusion, not blood in a can. |
| b2-Bootsmann-283 | lv | HIGH | TRANSLATION | The boatman | Boatswain | Bootsmann is the naval rank or occupation boatswain, not a generic boatman. |
| b2-Borte-288 | lv | HIGH | TRANSLATION | Border | Trim | Borte is a decorative braid, edging or trim; border is generally not the intended meaning. |
| b2-brach-291 | lv | HIGH | TRANSLATION | Raw • Set aside | Uncultivated • Fallow | Raw is not the agricultural sense; brach describes land left uncultivated or fallow. |
| b2-Brandstätte-293 | lv | HIGH | TRANSLATION | Fire place | Site of the fire | Fireplace means a hearth; the compound refers to the site of a fire and is not written as two words. |
| b2-Buche-305 | lv | HIGH | TRANSLATION | Beech • Hornbeam | Beech | Buche means beech; hornbeam is a different tree. |
| b2-Buckel-310 | lv | HIGH | SEMANTICS | Hump • Cake • Back | Hump • Hunch • Back | “Cake” is unrelated to Buckel; the word refers to a hump or hunch, and colloquially the back. |
| b2-Bügel-311 | lv | HIGH | TRANSLATION | Handle • Hoop • Clothes hanger • Step | Handle • Hoop • Clothes hanger • Stirrup | Bügel means “stirrup” in the equestrian sense, not “step”. |
| b2-Bühnenbildner-313 | lv | HIGH | TRANSLATION | Decorator | Set designer | A Bühnenbildner designs theatrical scenery; “decorator” is too general and misleading. |
| b2-Bundesstaat-315 | lv | HIGH | SEMANTICS | Federation • Federal state | Federal state | “Federation” denotes a federation as a whole, whereas Bundesstaat means a federal state. |
| b2-Bürge-319 | lv | HIGH | SEMANTICS | Guarantor • Ringleader | Guarantor • Surety | “Ringleader” means a leader of wrongdoing and is unrelated to Bürge. |
| b2-dämmern-341 | lv | HIGH | NATURALNESS | At dusk • It gets dark • It dawns • The light sweats | To grow dark • To become dusk • To dawn • To become light | “The light sweats” is not English; the verb describes growing dark or becoming light at dawn. |
| b2-dämpfen-344 | lv | HIGH | TRANSLATION | To silence • To smother • To steam • To stew • To stir | To silence • To smother • To steam • To stew • To braise | “To stir” is unrelated; dämpfen can mean to braise or cook gently in steam. |
| b2-Datei-356 | lv | HIGH | SEMANTICS | Filing cabinet | File | In modern German, Datei means a computer file, not a filing cabinet. |
| b2-Datenträger-358 | lv | HIGH | SEMANTICS | Diskette | Data carrier • Storage medium | A diskette is only one type of Datenträger; the German term means a data carrier or storage medium. |
| b2-dementieren-374 | lv | HIGH | SEMANTICS | Withdraw information | Deny information | Dementieren means to deny or refute information, not to withdraw it. |
| b2-Deutung-383 | lv | HIGH | SEMANTICS | Explanation • Translation • Explanation • Translation | Interpretation • Explanation • Interpretation • Explanation | Deutung means interpretation or explanation, not translation between languages. |
| b2-Devisenbörse-385 | lv | HIGH | SEMANTICS | Currency exchange | Foreign-exchange market | A Devisenbörse is a foreign-exchange market, not a currency-exchange service or transaction. |
| b2-Morddezernat-388 | lv | HIGH | SEMANTICS | Criminal department | Homicide department | Morddezernat specifically denotes a police department dealing with homicide, not a general criminal  |
| b2-dichten-393 | lv | HIGH | SEMANTICS | To sing • To sing | To write poetry • To compose poetry | Dichten means to write or compose poetry, not to sing. |
| b2-diejenige-397 | lv | HIGH | SEMANTICS | So | That one • The one | Diejenige is a feminine demonstrative pronoun meaning “that one” or “the one,” not “so.” |
| b2-dienstlich-400 | lv | HIGH | SEMANTICS | Service position | Official • Work-related | Dienstlich means official or related to one’s work or duties, not “service position.” |
| b2-dingen-402 | lv | HIGH | SEMANTICS | To agree • To agree | To hire • To engage | Dingen means to hire or engage someone, not to agree. |
| b2-Direktion-403 | lv | HIGH | SEMANTICS | Control of prepositions | Management • Directorate | Direktion means management, direction, or a directorate; the current translation is unrelated. |
| b2-Dohle-411 | lv | HIGH | ORTHOGRAPHY | Covarner | Jackdaw | “Covarner” is not an English word; Dohle is a jackdaw. |
| b2-Dom-412 | lv | HIGH | SEMANTICS | Cathedral • Council | Cathedral | Dom means “cathedral” in German; “council” is not an equivalent. |
| b2-Dotterblume-428 | en | HIGH | TRANSLATION | Tadpole | Buttercup | “Tadpole” means a young frog; Dotterblume means “buttercup”. |
| b2-dreschen-441 | en | HIGH | TRANSLATION | Beat the grain • Beat the egg white | Thresh grain • Beat egg whites | Grain is threshed, not beaten; the culinary collocation is usually plural “egg whites”. |
| b2-dringen-443 | en | HIGH | TRANSLATION | To press • To break • To push in • To break in • To require • To demand | Press • Force one's way • Push in • Break in • Require • Demand | “To break” does not convey the sense of forcing one's way; the infinitive formatting is also unneces |
| b2-Drossel-447 | en | HIGH | TRANSLATION | Starling | Thrush | A German Drossel is a thrush; “starling” is a different bird. |
| b2-drosseln-448 | en | HIGH | TRANSLATION | Strangle • Stifle | Throttle • Stifle | The core modern sense is “throttle” or reduce, not physically strangle. |
| b2-Nadeldrucker-449 | en | HIGH | TRANSLATION | Digital printer | Dot-matrix printer | Nadeldrucker specifically means a dot-matrix or impact printer, not a digital printer generally. |
| b2-Druckerei-450 | en | HIGH | TRANSLATION | Typography | Printing works | “Typography” is the design and arrangement of type; Druckerei means a printing works or print shop. |
| b2-Drucksache-454 | en | HIGH | FOREIGN_REMNANT | Bandrole • Printing in postal items | Printed matter • Printed postal matter | “Bandrole” is a Latvian remnant, and the second phrase is not natural English. |
| b2-durcharbeiten-467 | en | HIGH | TRANSLATION | Develop • Read carefully • Knead carefully | Work through • Read carefully • Knead thoroughly | “Develop” is not the relevant sense of durcharbeiten; the verb means to work through something. |
| b2-durchdringen-473 | en | HIGH | SEMANTICS | Push through • Break through • Be overwhelmed | Push through • Break through • Be imbued | “Be overwhelmed” does not mean being filled or imbued with something, the figurative German sense. |
| b2-durchmachen-479 | en | HIGH | TRANSLATION | Survive • Remove • Finish | Go through • Endure • Finish | “Remove” is not a sense of durchmachen; the verb can mean to go through or endure an experience. |
| b2-Dürre-489 | enText | HIGH | TRANSLATION | Dryness | Drought | Dürre means a prolonged lack of rain or water, i.e. drought, not general dryness. |
| b2-Eberesche-494 | enText | HIGH | TRANSLATION | Sulfur moss • Rowan | Rowan | Eberesche means rowan; “sulfur moss” is unrelated and appears to be a source contamination. |
| b2-ehrenamtlich-507 | enText | HIGH | TRANSLATION | Free of charge • In the performance of a duty of honour | Voluntary • Unpaid | Ehrenamtlich describes voluntary or unpaid service, not merely something supplied free of charge. |
| b2-Ehrenwort-514 | enText | HIGH | TRANSLATION | Honorific | Word of honour | Ehrenwort means a solemn promise or word of honour, not an honorific. |
| b2-ehrgeizig-515 | enText | HIGH | SEMANTICS | Greedy | Ambitious | Ehrgeizig means ambitious or driven; greedy refers to wanting excessive money or possessions. |
| b2-eigenhändig-524 | enText | HIGH | SEMANTICS | Self-made | With one's own hands • Personally | Eigenhändig means done personally or with one's own hands; self-made means independently made. |
| b2-einbürgern-535 | enText | HIGH | TRANSLATION | Grant the right of a citizen • To introduce • To take root | To naturalise • To become established • To take root | For people, einbürgern means to naturalise; “grant the right of a citizen” is unnatural and inaccura |
| b2-einfältig-539 | enText | HIGH | SEMANTICS | Self-righteous • Naive | Simple-minded • Naive | Einfältig means simple-minded or naive; self-righteous means morally smug. |
| b2-einflussreich-541 | enText | HIGH | SEMANTICS | Influential • Impressive | Influential | Einflussreich means influential; impressive is a different adjective and is not a synonym here. |
| b2-Einfuhr-544 | enText | HIGH | TRANSLATION | Introduction • Importation • Bringing in • Importing | Import • Importation • Bringing in • Importing | Einfuhr in this context means import or importation, not introduction. |
| b2-Eingabe-546 | enText | HIGH | SEMANTICS | Application • Entering data into the computer | Submission • Data entry | Eingabe means a submission or data input; “application” usually translates Antrag here. |
| b2-eingehend-550 | enText | HIGH | TRANSLATION | Thorough • Petty • Incoming | Thorough • Detailed • Incoming | Eingehend means detailed or in-depth, not petty. |
| b2-eingleisig-557 | enText | HIGH | TRANSLATION | Monorail | Single-track | Eingleisig means single-track, not monorail. |
| b2-Einigkeit-561 | enText | HIGH | SEMANTICS | Unit • Unity • Consensus | Unity • Unity • Consensus | Einigkeit means unity or agreement, not a unit. |
| b2-einleiten-566 | enText | HIGH | TRANSLATION | Enter | Initiate | Einleiten means initiate, introduce or usher in; enter is a different verb. |
| b2-einsichtig-579 | enText | HIGH | SEMANTICS | Sensible • Sane | Sensible • Reasonable | Einsichtig means reasonable or amenable to reason; sane is a different sense. |
| b2-einüben-589 | enText | HIGH | TRANSLATION | Learn to • Stage | Practise • Rehearse | Einüben means practise or rehearse; “learn to” is incomplete and “stage” is inaccurate. |
| b2-einweichen-592 | enText | HIGH | TRANSLATION | Dip | Soak | Einweichen means soak or leave to soak, not merely dip. |
| b2-einweihen-593 | enText | HIGH | TRANSLATION | Solemnly disclose • Confide a secret | Officially open • Confide a secret | Einweihen can mean officially open or inaugurate; it does not mean solemnly disclose. |
| b2-einwilligen-595 | enText | HIGH | SEMANTICS | To agree • To be at ease | To agree • To consent | Einwilligen means agree or consent; “be at ease” is unrelated. |
| b2-Eisgang-602 | enText | HIGH | TRANSLATION | Ice walking | Ice drift | Eisgang refers to the movement or breaking-up of river ice, not walking on ice. |
| b2-entehren-619 | lv | HIGH | NATURALNESS | Rob honour • Disgrace | Dishonour • Disgrace | “Rob honour” is not an idiomatic English collocation for ente​​hren. |
| b2-entfallen-622 | lv | HIGH | SEMANTICS | Fall out • Forget | Be omitted • Slip one’s mind | Entfallen usually means to be omitted or to slip someone’s mind, not “fall out” or simply “forget”. |
| b2-entladen-633 | lv | HIGH | SEMANTICS | Unload • Unload | Unload • Discharge | The electrical or weapon-related sense of entladen is “discharge”, not “unload”. |
| b2-entstellen-644 | lv | HIGH | SEMANTICS | To distort • To freak out • To distort | Distort • Disfigure • Misrepresent | “Freak out” means become panicked; entstellen means disfigure, distort or misrepresent. |
| b2-entwerfen-646 | lv | HIGH | SEMANTICS | Cast • Outline | Draft • Sketch | For entwerfen, “cast” is not the intended sense; the verb means to draft, design or sketch. |
| b2-Entwerter-647 | lv | HIGH | TRANSLATION | Composter | Ticket validator | A German Entwerter is a ticket validator or canceller, not a device for making compost. |
| b2-entziehen-651 | lv | HIGH | GRAMMAR | Take • Away • Avoid • Break away • Escape | Take away • Withdraw • Avoid • Break away • Escape | “Take • Away” is a fragmented phrase; entziehen means take away or withdraw, depending on context. |
| b2-entzückt-654 | lv | HIGH | SEMANTICS | Excited | Delighted | Entzückt means delighted or charmed; “excited” is a different and potentially misleading sense. |
| b2-Erbauer-662 | lv | HIGH | TRANSLATION | Lifter | Builder | Erbauer means builder or constructor, not “lifter”. |
| b2-erbrechen-664 | lv | HIGH | TRANSLATION | Break open • Hack | Vomit | Erbrechen means “vomit”; “break open” and “hack” belong to other German verbs. |
| b2-erdrücken-666 | lv | HIGH | SEMANTICS | To suppress • To suppress | Crush • Overwhelm | Erdrücken means physically crush or figuratively overwhelm; “suppress” is not the core sense. |
| b2-Ernteertrag-694 | lv | HIGH | SEMANTICS | Crop | Crop yield | Ernteertrag specifically means the yield or output of a harvest, not a crop itself. |
| b2-Eröffnung-695 | lv | HIGH | TRANSLATION | Opening • Discovery • Postcard • Announcement • Discovery | Opening • Inauguration • Disclosure • Announcement • Disclosure | “Postcard” is not a meaning of Eröffnung, and “disclosure” is more accurate than “discovery” here. |
| b2-erschlagen-705 | lv | HIGH | TRANSLATION | Knock off | Beat to death | “Knock off” is not the normal translation of erschlagen and can mean finish, steal or kill colloquia |
| b2-erzürnen-727 | lv | HIGH | SEMANTICS | Get angry | Anger • Enrage | Erzürnen is transitive: to anger or enrage someone. “Get angry” translates the reflexive form. |
| b2-exklusiv-737 | lv | HIGH | TRANSLATION | Investigated • Fine • Aristocratic | Exclusive • Select • Upscale | “Investigated” is unrelated; exklusiv means exclusive, select or upscale in these contexts. |
| b2-exportieren-741 | lv | HIGH | TRANSLATION | Export • Take out | Export • Export | “Take out” is not the normal English equivalent of exportieren; it means export in both listed sense |
| b2-exquisit-742 | lv | HIGH | TRANSLATION | Investigated • Subtle | Exquisite • Fine | “Investigated” is unrelated, and “subtle” does not express the usual meaning of exquisit. |
| b2-Fabrikat-745 | lv | HIGH | SEMANTICS | Industrial production • Product | Manufactured product • Product | Fabrikat means a manufactured product, not industrial production. |
| b2-Fachabitur-746 | lv | HIGH | SEMANTICS | Completed vocational school training | Subject-specific higher education entrance qualification | Fachabitur is an entrance qualification, not completed vocational training. |
| b2-fälschlich-759 | lv | HIGH | SEMANTICS | Misguided • Mistaken | Incorrectly • Mistakenly | ‘Misguided’ describes a person or plan, not something being incorrectly asserted or done. |
| b2-Farbige-761 | lv | HIGH | NATURALNESS | The coloured man | A man of colour | ‘Coloured man’ is dated and potentially offensive in modern British English. |
| b2-Faulbaum-771 | lv | HIGH | TRANSLATION | Eve | Alder buckthorn | Faulbaum is alder buckthorn; ‘Eve’ is unrelated. |
| b2-feilen-774 | lv | HIGH | TRANSLATION | To disappoint | To file | Feilen means to file, as with a file tool; it does not mean to disappoint. |
| b2-Fetzen-786 | lv | HIGH | TRANSLATION | Stomach • Risk | Rag • Shred | Fetzen means a rag or shred; neither ‘stomach’ nor ‘risk’ matches the German word. |
| b2-Flugfeld-806 | lv | HIGH | SEMANTICS | Airport | Airfield | Flugfeld means airfield, not airport; an airfield may have no passenger terminal. |
| b2-Flunder-809 | lv | HIGH | TRANSLATION | Hut | Flounder | Flunder is the flatfish flounder; hut is an unrelated English word. |
| b2-Flussarm-811 | lv | HIGH | SEMANTICS | Reflux | River branch | Flussarm is a branch or distributary of a river, not reflux. |
| b2-fortschaffen-821 | lv | HIGH | TRANSLATION | Procure away • Take away • Take away | Remove • Take away • Carry away | Procure away is not idiomatic English, and the final gloss should distinguish carrying something awa |
| b2-Fraktion-827 | lv | HIGH | SEMANTICS | Fraction | Faction | In this political or organisational sense, Fraktion translates as faction, not fraction. |
| b2-Fräser-829 | lv | HIGH | TRANSLATION | Milling machine • Milling machine | Milling machine operator • Milling cutter | Fräser can denote a milling operator or, especially, a milling cutter; it does not mean milling mach |
| b2-freisprechen-834 | lv | HIGH | SEMANTICS | To justify | To acquit | Freisprechen means to acquit or find not guilty, not to justify. |
| b2-friedfertig-837 | lv | HIGH | SEMANTICS | Peaceful • Compliant | Peaceful • Peace-loving | Friedfertig means peaceable or peace-loving; compliant means obedient or willing to conform. |
| b2-Funktionär-854 | lv | HIGH | SEMANTICS | Activist • Employee | Official • Functionary | Funktionär means an official or functionary; activist and employee are not equivalent in general Eng |
| b2-Fürsprache-857 | lv | HIGH | SEMANTICS | Persuasion • Defendable good name | Advocacy • A good word | Fürsprache means advocacy, intercession, or putting in a good word, not persuasion or defendable goo |
| b2-gängig-863 | lv | HIGH | SEMANTICS | Walking | Common | Gängig commonly means common, current, or widely used; walking is not the relevant sense. |
| b2-Garnknäuel-868 | lv | HIGH | TRANSLATION | Lump | Ball of yarn | A Garnknäuel is a ball or skein of yarn, not a lump. |
| b2-Gasableser-870 | lv | HIGH | TRANSLATION | Gas metre | Gas meter reader | The German word denotes a person who reads gas meters, not the meter itself. |
| b2-gebrechlich-877 | lv | HIGH | TRANSLATION | Weak • Withered • Gauden • Crippled • Full of faults | Frail • Infirm • Feeble | “Gauden” is not an English translation, and the list includes several inaccurate senses. |
| b2-Gedeck-879 | lv | HIGH | TRANSLATION | Cutlery for one person | Place setting | Gedeck means a complete place setting, not only cutlery. |
| b2-gedenken-881 | lv | HIGH | TRANSLATION | To be minded • To remember • To remember • To mention | To commemorate • To remember • To think of | “To be minded” is not idiomatic, and “to mention” misses the commemorative sense. |
| b2-Gefährte-884 | lv | HIGH | TRANSLATION | A member | Companion | Gefährte means companion or comrade, not a member. |
| b2-Gefallen-885 | lv | HIGH | SEMANTICS | Liking • Liked | Pleasure • Favour | Das Gefallen is a noun meaning pleasure or favour; “liked” is an adjective. |
| b2-gelaunt-903 | lv | HIGH | TRANSLATION | Oh | In the mood | “Oh” is unrelated; gelaunt means being in a particular mood. |
| b2-Gelehrte-909 | lv | HIGH | SEMANTICS | Scientist | Scholar | Gelehrte means a scholar or learned person; it does not specifically mean scientist. |
| b2-Gemüsebau-919 | lv | HIGH | SEMANTICS | Root crops • Vegetable crops | Vegetable cultivation • Vegetable production | Gemüsebau denotes the cultivation or production of vegetables, not the crops themselves. |
| b2-gemütvoll-921 | lv | HIGH | SEMANTICS | Warm • Cozy | Warm-hearted • Affectionate | Gemütvoll describes a warm-hearted or affectionate person or atmosphere, not simply something cosy. |
| b2-genesen-925 | enText | HIGH | TRANSLATION | Get well • Get well | Recover • Recover | “Get well” is an imperative; the German infinitive means “to recover”. |
| b2-geraten-935 | enText | HIGH | SEMANTICS | Arrive • Get to • Give up • Succeed • Hit | Arrive • Get into • Give in • Turn out well • Bump into | Several renderings are incomplete or semantically off; “geraten” takes meanings such as get into, gi |
| b2-Geratewohl-936 | enText | HIGH | TRANSLATION | Good luck | At random | “Aufs Geratewohl” means “at random” or “without a plan”, not “good luck”. |
| b2-gerinnen-939 | enText | HIGH | SEMANTICS | To coagulate • To congeal • To congeal • To congeal • To freeze | To coagulate • To curdle • To clot • To solidify • To set | “To freeze” is generally gefrieren; the repeated “congeal” entries lose distinct meanings of gerinne |
| b2-Gesandte-943 | enText | HIGH | TRANSLATION | Messenger | Envoy | Gesandte is an official envoy or emissary; “messenger” is a different role. |
| b2-Geschiedene-946 | enText | HIGH | TRANSLATION | Divorce | Divorcee | The German nominalised adjective refers to a divorced person, not the act or state of divorce. |
| b2-Geschwür-954 | enText | HIGH | TRANSLATION | Plant • Ulcer | Boil • Ulcer | “Plant” is unrelated; a boil is a common rendering of the first Latvian sense and German word. |
| b2-Geselle-955 | enText | HIGH | FOREIGN_REMNANT | Zellis • Helper • Guy • Craftsman who passed the exam after school time | Journeyman • Assistant • Fellow • Craftsman who has passed the journeyman's examination | “Zellis” is a Latvian remnant, and the final definition is unnatural and imprecise in English. |
| b2-gewähren-971 | enText | HIGH | TRANSLATION | Give • Assign | Grant • Award | Gewähren means to grant or allow; “assign” means allocate a task, role or item. |
| b2-Gewerbe-977 | enText | HIGH | SEMANTICS | Position • Trade • Permanent work in the field of trade or craft or provision of services | Trade • Occupation • A commercial or craft business, or provision of services | “Position” is incorrect; Gewerbe denotes a trade, occupation or commercial business. |
| b2-gewieft-978 | enText | HIGH | TRANSLATION | Tempered • Shrewd | Seasoned • Shrewd | Gewieft means experienced and cunning; “tempered” usually means hardened or moderated. |
| b2-Gewissheit-980 | enText | HIGH | SEMANTICS | Clarity • Safety • Certainty | Certainty • Assurance • Definiteness | Gewissheit concerns certainty or assurance, not visual clarity or physical safety. |
| b2-Glatze-995 | lv | HIGH | SEMANTICS | Bare head | Bald head | Glatze means a bald area or bald head; bare head usually means a head without a hat. |
| b2-Stirnglatze-996 | lv | HIGH | SEMANTICS | Uncovered forehead | Receding hairline | The German term refers to hair loss at the forehead, not simply an uncovered forehead. |
| b2-gleichmütig-997 | lv | HIGH | SEMANTICS | Composed • Cold-blooded | Composed • Even-tempered | Gleichmütig means calm or even-tempered; cold-blooded implies cruelty or lack of emotion. |
| b2-Gleichnis-998 | lv | HIGH | SEMANTICS | Similarity | Parable | Gleichnis commonly means a parable or figurative comparison, not similarity. |
| b2-glotzen-1003 | lv | HIGH | TRANSLATION | Squint | Stare | Glotzen means to stare or gawk; squint means to partly close the eyes. |
| b2-Gnadenbrot-1007 | lv | HIGH | SEMANTICS | The bread of grace | A living provided out of charity | The German idiom refers to support provided as charity, not literal bread of grace. |
| b2-gnädig-1008 | lv | HIGH | SEMANTICS | Gracious • Respected | Merciful • Gracious | Gnädig means merciful or gracious; respected is a different meaning. |
| b2-grauen-1022 | lv | HIGH | TRANSLATION | Weave | Dawn | In this sense, grauen means to dawn; weave is an unrelated verb. |
| b2-grinsen-1034 | lv | HIGH | SEMANTICS | To smile | To grin | Grinsen means to grin, typically showing the teeth; smile is a broader and less precise term. |
| b2-Gründonnerstag-1038 | lv | HIGH | TRANSLATION | Green Thursday before Easter | Maundy Thursday | The established English name for Gründonnerstag is Maundy Thursday. |
| b2-gurgeln-1045 | lv | HIGH | TRANSLATION | Gargle • Mouth | Gargle | Mouth is a noun and does not translate the verb gurgeln. |
| b2-Gutachten-1047 | lv | HIGH | SEMANTICS | Feedback • Opinion of an expert | Expert report • Expert opinion | Gutachten means a formal expert report or opinion, not general feedback. |
| b2-haaren-1053 | enText | HIGH | SEMANTICS | To throw a feather | Shed hair or feathers | The verb means to shed hair or feathers, not to throw a feather. |
| b2-Hafengebühr-1056 | enText | HIGH | SEMANTICS | Port duty | Port fee | Gebühr means fee or charge; duty has a different taxation meaning here. |
| b2-Hängebrücke-1062 | enText | HIGH | SEMANTICS | Cable-stayed bridge | Suspension bridge | A Hängebrücke is a suspension bridge, which differs structurally from a cable-stayed bridge. |
| b2-Hängsel-1063 | enText | HIGH | TRANSLATION | Sewn clothes hanger | Hanging loop | Hängsel denotes a small hanging loop or attached tab, not a clothes hanger. |
| b2-hänseln-1064 | enText | HIGH | FOREIGN_REMNANT | Nerrot • Squeal | Tease • Taunt | Nerrot is not English, and squeal is not a meaning of hänseln. |
| b2-hantieren-1065 | enText | HIGH | TRANSLATION | To act • Act with what | Handle • Work with | The current phrases are unidiomatic and miss the meaning of handling or working with something. |
| b2-Harsch-1067 | enText | HIGH | SEMANTICS | Sulfur • Frozen snow | Snow crust • Frozen snow | Harsch means a hard crust of snow; sulfur is a different German word, Harz. |
| b2-Hausherr-1072 | enText | HIGH | SEMANTICS | Homemaker • Entertainer | Head of household • Householder | Hausherr means the head or owner of a household, not a homemaker or entertainer. |
| b2-hauteng-1076 | enText | HIGH | GRAMMAR | Tight clothing | Skin-tight | The German item is an adjective; the current noun phrase changes the part of speech and meaning. |
| b2-Heiligtum-1080 | enText | HIGH | SEMANTICS | Holy place • Sanctity | Sanctuary • Sacred site | Heiligtum can mean a sanctuary or sacred site; sanctity means holiness, not a place or object. |
| b2-Heimwerker-1087 | enText | HIGH | SEMANTICS | House craftsman • House master | DIY enthusiast • Home handyman | The current compounds are not idiomatic English; Heimwerker means a home DIY worker or enthusiast. |
| b2-henken-1093 | enText | HIGH | SEMANTICS | Once • Hang a person | Hang • Hang someone | Once is erroneous; henken means to hang someone, especially as an execution. |
| b2-hetzen-1112 | enText | HIGH | SEMANTICS | Kick • Incite • Chase • Hit | Urge on • Incite • Chase • Hound | Kick and hit are incorrect; hetzen means to urge on, incite, chase or hound. |
| b2-Hilfsdienst-1117 | enText | HIGH | SEMANTICS | Help desk | Aid service | A help desk provides assistance to users; Hilfsdienst means an aid or support service. |
| b2-hingeben-1118 | enText | HIGH | TRANSLATION | Give away • Lend away | To give oneself • To devote oneself | ‘Lend away’ is not idiomatic and the usual sense is surrendering or devoting oneself. |
| b2-hinreißen-1120 | enText | HIGH | ORTHOGRAPHY | To seise • To take away | To carry away • To enrapture | ‘Seise’ is misspelled, and ‘take away’ does not capture the figurative sense of hinreißen. |
| b2-Hinsicht-1121 | enText | HIGH | SEMANTICS | Message | Respect • Regard | Hinsicht means respect, regard, or aspect; it does not mean ‘message’. |
| b2-hintergehen-1123 | enText | HIGH | SEMANTICS | To cheat • To disappoint | To cheat • To deceive | hintergehen means to cheat, deceive, or betray, not simply to disappoint. |
| b2-Hinterhalt-1124 | enText | HIGH | SEMANTICS | The hideout | The ambush | Hinterhalt means an ambush or ambush position, not a hideout. |
| b2-Hirschkuh-1130 | enText | HIGH | SEMANTICS | Mother deer | Hind | Hirschkuh is the specific zoological term ‘hind’, not necessarily a mother deer. |
| b2-Hobelbank-1136 | enText | HIGH | SEMANTICS | Planer | Woodworking bench | A Hobelbank is a workbench for woodworking; a planer is a separate tool or machine. |
| b2-hochwertig-1146 | enText | HIGH | SEMANTICS | High value | High-quality | hochwertig normally describes superior quality; ‘high value’ refers to monetary or practical worth. |
| b2-holpern-1150 | enText | HIGH | TRANSLATION | To shake • To twitch | To jolt • To bump along | holpern describes jolting or bumping movement, not twitching and not general shaking. |
| b2-Honorar-1151 | enText | HIGH | SEMANTICS | Royalty | Fee | Honorar means a fee or honorarium; ‘royalty’ is payment based on sales or usage rights. |
| b2-in flagranti-1158 | enText | HIGH | GRAMMAR | Catch • Doing something illegal | To catch someone in the act • While committing an offence | The current fragments are incomplete and omit the idiom’s core meaning, ‘in the act’. |
| b2-innewohnen-1161 | enText | HIGH | SEMANTICS | Home | To be inherent in | innewohnen means to be inherent in or immanent in, not ‘home’. |
| b2-Kaufkraft-1175 | enText | HIGH | SEMANTICS | Money • Also personal purchasing power | Purchasing power • Personal purchasing power | Kaufkraft means purchasing power; ‘money’ is a different concept and the second item is redundant. |
| b2-kompatibel-1189 | en | HIGH | TRANSLATION | Connectable | Compatible | “Kompatibel” means compatible; “connectable” means capable of being connected. |
| b2-Konsequenz-1192 | en | HIGH | SEMANTICS | Consistency • Sequence • Conclusion • Consequence | Consequence • Consistency | The core senses are consequence and consistency; sequence and conclusion are not standard meanings h |
| b2-Korps-1198 | en | HIGH | TRANSLATION | Body | Corps • Body | “Korps” primarily means a corps; “body” alone loses the established English equivalent. |
| b2-korrupt-1200 | en | HIGH | TRANSLATION | Buyable • Bribeable | Corrupt • Bribable | The English adjective is “corrupt”; “buyable” does not express the intended bribery-related sense. |
| b2-Kriegszustand-1203 | en | HIGH | SEMANTICS | Martial law | State of war | “Kriegszustand” means a state of war; martial law is a different concept. |
| b2-Laienkunst-1206 | en | HIGH | TRANSLATION | Artistic self-activity | Amateur art | “Artistic self-activity” is not idiomatic English; “Laienkunst” means amateur art. |
| b2-Landsmann-1211 | en | HIGH | TRANSLATION | Compatriot • County resident | Compatriot • Fellow countryman | “County resident” refers to a resident of an administrative county, not a compatriot or fellow count |
| b2-Landung-1212 | en | HIGH | TRANSLATION | Stand-off • Landing • Landing | Landing • Landing operation | “Stand-off” is unrelated; the noun means landing, including a military landing operation. |
| b2-Landzunge-1213 | en | HIGH | TRANSLATION | The tongue of the earth | Headland • Spit | The literal phrase is not an English geographical term; the usual terms are “headland” or “spit”. |
| b2-lauern-1218 | en | HIGH | TRANSLATION | To snuggle up | To lurk • To lie in wait | “Lauern” means to lurk or lie in wait; “snuggle up” has the opposite sense. |
| b2-Laufsteg-1221 | en | HIGH | TRANSLATION | Tongue in fashion show | Catwalk • Fashion runway | “Laufsteg” means catwalk or fashion runway; “tongue” is a mistranslation. |
| b2-Laufwerk-1222 | en | HIGH | TRANSLATION | Engine • Engine | Drive • Disk drive | “Laufwerk” means a drive or disk drive, not an engine. |
| b2-Lehrstuhl-1228 | en | HIGH | TRANSLATION | Department | Chair • Professorship | A German university “Lehrstuhl” is a chair or professorship, not generally a department. |
| b2-Leichenhalle-1231 | en | HIGH | TRANSLATION | In the chapel cemetery | Morgue • Mortuary | “Leichenhalle” means morgue or mortuary; the current phrase is unrelated and ungrammatical. |
| b2-Leitartikel-1238 | enText | HIGH | TRANSLATION | Introductory article | Editorial | Leitartikel means an editorial, not an introductory article. |
| b2-lispeln-1250 | enText | HIGH | TRANSLATION | To slip | To lisp | Lispeln means to lisp, whereas “to slip” describes an accidental loss of footing or error. |
| b2-Lochband-1254 | enText | HIGH | FOREIGN_REMNANT | Perfolent | Perforated tape | “Perfolent” is a Latvian remnant and does not provide the English translation. |
| b2-Lösegeld-1258 | enText | HIGH | TRANSLATION | Redemption fee | Ransom | Lösegeld is money paid to release a captive, i.e. ransom, not a redemption fee. |
| b2-Luftbad-1263 | enText | HIGH | TRANSLATION | Air swimming | Air bath | Luftbad means exposure of the body to fresh air, conventionally an air bath. |
| b2-luftdicht-1265 | enText | HIGH | SEMANTICS | Air-permeable • Hermetic | Airtight • Hermetically sealed | “Air-permeable” is the opposite of luftdicht; “hermetic” alone is also unnatural here. |
| b2-Mahd-1277 | enText | HIGH | GRAMMAR | Reaped | Mowing | Mahd is a noun meaning mowing or the act of reaping; “reaped” is a past participle. |
| b2-Mieder-1310 | enText | HIGH | TRANSLATION | Tights belt • Bodice | Corset • Bodice | “Tights belt” is not the meaning of Mieder; the garment is a corset or bodice. |
| b2-Milbe-1313 | enText | HIGH | TRANSLATION | Tick | Mite | A Milbe is a mite; a tick is a different type of arachnid. |
| b2-missbilligen-1324 | enText | HIGH | TRANSLATION | Not to recognise as good • Earn | Disapprove of • Condemn | “Earn” is unrelated, and the first phrase is not a natural equivalent of “missbilligen”. |
| b2-missgönnen-1328 | enText | HIGH | TRANSLATION | Not to wish • To ache |  begrudge • Envy | “To ache” is unrelated, while “missgönnen” means to begrudge or envy someone something. |
| b2-Monatsschrift-1338 | enText | HIGH | GRAMMAR | Monthly | Monthly publication | “Monthly” is an adjective and cannot translate this German noun by itself. |
| b2-münden-1342 | enText | HIGH | TRANSLATION | Flow in • Flow in • Go out • Run out | Flow into • Empty into • Lead to • End in | Several equivalents are duplicated or incorrect; the verb means to flow or lead into, or end in. |
| b2-mutieren-1345 | enText | HIGH | TRANSLATION | To speak | Mutate | “To speak” is unrelated; mutieren means to mutate or undergo mutation. |
| b2-nachgiebig-1352 | enText | HIGH | TRANSLATION | Condescending | Yielding | “Condescending” means patronising; nachgiebig means yielding or compliant. |
| b2-nachträglich-1357 | enText | HIGH | TRANSLATION | Later • Additional • Later • For supplements | Later • Additional • Subsequently • In addition | “For supplements” is not an equivalent; the list also unnecessarily duplicates “later”. |
| b2-namens-1361 | enText | HIGH | TRANSLATION | In the name • In the surname | By the name of • In the name of | “Namens” means “by the name of”; “in the surname” is not an English equivalent. |
| b2-Vollnarkose-1365 | enText | HIGH | TRANSLATION | Full narcosis | General anaesthesia | “Full narcosis” is not the normal English term for medical general anaesthesia. |
| b2-Neger-1369 | enText | HIGH | SEMANTICS | A negro | Negro (offensive historical term) | The current term is offensive and should be explicitly marked as historical and offensive in English |
| b2-Nervenarzt-1371 | enText | HIGH | TRANSLATION | Physician in nervous diseases | Neurologist | The current wording is not idiomatic English; “Nervenarzt” traditionally denotes a neurologist or re |
| b2-Neuauflage-1373 | enText | HIGH | ORTHOGRAPHY | Re • Revised edition | New edition • Revised edition | “Re” is an incomplete fragment and does not provide a valid English translation. |
| b2-neuerdings-1374 | enText | HIGH | SEMANTICS | Recently • These days • Again • Again | Recently • Lately • Nowadays | “Again” does not express “neuerdings”, and the final item is duplicated. |
| b2-normieren-1387 | enText | HIGH | TRANSLATION | To ration | To standardise | “Normieren” means to standardise or normalise, not to ration. |
| b2-Notwehr-1390 | enText | HIGH | TRANSLATION | Necessary protection | Self-defence | The established legal and general English equivalent is “self-defence”, not “necessary protection”. |
| b2-Nutzholz-1392 | enText | HIGH | TRANSLATION | Case files | Timber | “Nutzholz” means timber or usable wood; “case files” is unrelated. |
| b2-Operator-1410 | enText | HIGH | TRANSLATION | Large computer crew specialist | Computer operator | The current phrase is unnatural and misrepresents the occupation as a crew specialist. |
| b2-parteilich-1431 | enText | HIGH | SEMANTICS | Partisan • Parties | Partisan • Party-political | Parties is a plural noun and does not translate the adjective parteilich. |
| b2-Peepshow-1437 | enText | HIGH | TRANSLATION | An erotic programme that is watched separately through the box | An erotic show viewed individually through a small window | A peepshow is viewed through a window, not through a box; the current wording is unnatural. |
| b2-Personalakte-1442 | enText | HIGH | TRANSLATION | Personal matter | Personnel file | Personal matter means a private issue; Personalakte means an employee's personnel file. |
| b2-Pfahlbau-1443 | enText | HIGH | TRANSLATION | Pile construction | Pile dwelling | Pfahlbau normally denotes a pile dwelling or stilt-house settlement, not construction activity. |
| b2-pfänden-1444 | enText | HIGH | TRANSLATION | Describe the property • Pledge | To seize property • To levy distraint | Pfänden means legally seizing or attaching property; describe and pledge are incorrect here. |
| b2-Pfandschein-1445 | enText | HIGH | TRANSLATION | Pledge sign | Pawn ticket | A Pfandschein is a pawn ticket or pawnbroker's receipt, not a pledge sign. |
| b2-pfuschen-1447 | enText | HIGH | GRAMMAR | Bad • Unskilled • Sloppy work | To do shoddy work • To botch | The current entries are fragments and nouns; the German verb means to work carelessly or botch somet |
| b2-Pilotstudie-1455 | enText | HIGH | SEMANTICS | Introduction to the research series | Pilot study | Pilotstudie means a preliminary pilot study, not an introduction to a series of studies. |
| b2-Possen-1462 | enText | HIGH | SEMANTICS | Farce • Joke play • Crude joke | Pranks • Antics • Crude jokes | The plural Possen means pranks or antics; the current entries incorrectly repeat the singular theatr |
| b2-postlagernd-1463 | enText | HIGH | TRANSLATION | Upon request | Poste restante | Postlagernd refers to mail held at a post office for collection, known as poste restante. |
| b2-prägen-1464 | enText | HIGH | SEMANTICS | To mint money • To press • To impose • To form • To make | To mint • To emboss • To imprint • To shape • To mould | Impose and make do not express the relevant senses of prägen; emboss, imprint and mould do. |
| b2-Preisträger-1470 | enText | HIGH | ORTHOGRAPHY | Prise winner • Laureate | Prize winner • Laureate | Prise is a spelling error; the correct word is prize. |
| b2-quellen-1482 | enText | HIGH | SEMANTICS | Ooze • Ooze • Drench • Drench • Swell | Ooze • Flow • Soak • Soak • Swell | Drench means to make thoroughly wet, not the meanings of German quellen. |
| b2-Radierung-1487 | enText | HIGH | SEMANTICS | Sharpening • Etching | Etching | Radierung means etching; sharpening is unrelated. |
| b2-rechtsfähig-1501 | enText | HIGH | GRAMMAR | Legal capacity | Legally competent | The German word is an adjective, but the current English is a noun phrase. |
| b2-Reifeprüfung-1516 | enText | HIGH | TRANSLATION | Readiness test | School-leaving examination | Reifeprüfung is an examination qualifying someone for university or completing secondary school. |
| b2-Reifezeugnis-1517 | enText | HIGH | TRANSLATION | Certificate of readiness | School-leaving certificate | Reifezeugnis is a school-leaving or matriculation certificate, not a readiness certificate. |
| b2-rückständig-1533 | enText | HIGH | SEMANTICS | Overdue • Overdue for payment | Backward • In arrears | The first sense means backward or underdeveloped; the payment sense is being in arrears. |
| b2-sächlich-1544 | enText | HIGH | SEMANTICS | ~es Geschlecht gram. • Any gender | Neuter gender (gram.) • Neuter gender | “Sächlich” refers to grammatical neuter gender, not gender of any kind. |
| b2-scheiden-1569 | enText | HIGH | SEMANTICS | [un]separate • Separate • Separate • Sich sch. lassen • Break up • Break up | To separate • To divide • To divorce • To get divorced • To split up • To decide | The current list misses the “decide” sense, leaves German text untranslated, and repeats “break up”  |
| b2-Scheitel-1571 | enText | HIGH | SEMANTICS | Head • Tow • Path | Crown • Top of the head • Parting | “Tow” is incorrect, and “head” and “path” do not convey the specific head-top and hair-parting sense |
| b2-schelmisch-1573 | enText | HIGH | TRANSLATION | Divisive | Mischievous | “Schelmisch” means mischievous or roguish, not tending to cause disagreement. |
| b2-schelten-1574 | enText | HIGH | TRANSLATION | To bart • To bart | To scold • To berate | “To bart” is not an English verb; “schelten” means to scold or rebuke. |
| b2-schlafwandeln-1583 | enText | HIGH | SEMANTICS | To be moonstruck | To sleepwalk | “Moonstruck” means lovestruck or dazed, not walking while asleep. |
| b2-Schlaganfall-1584 | enText | HIGH | SEMANTICS | Paralysis | Stroke | A “Schlaganfall” is a stroke; paralysis can be a consequence but is not the diagnosis itself. |
| b2-Schmarotzer-1591 | enText | HIGH | SEMANTICS | Gluttonous • Parasite | Scrounger • Parasite | “Schmarotzer” is a noun meaning a parasite or scrounger; “gluttonous” is an unrelated adjective. |
| b2-Schmerzensgeld-1593 | enText | HIGH | TRANSLATION | Pain money | Compensation for pain and suffering | “Pain money” is a literal calque; the standard legal term is “compensation for pain and suffering”. |
| b2-schmollen-1595 | enText | HIGH | TRANSLATION | Dressing up | To sulk | “Schmollen” means to sulk or pout, not to dress up. |
| b2-schrill-1603 | enText | HIGH | TRANSLATION | Sharp • Sharp | Shrill • Piercing | Both English items miss the primary sense and duplicate each other. |
| b2-Schutzimpfung-1609 | enText | HIGH | TRANSLATION | Protective grafting | Vaccination | Impfung means vaccination or immunisation; grafting is a different medical procedure. |
| b2-Schwarm-1612 | enText | HIGH | TRANSLATION | Passion • Rapture | Swarm | The supplied senses do not translate Schwarm in the stated context. |
| b2-schwelen-1619 | enText | HIGH | TRANSLATION | Glowing | Smoulder | Schwelen means to smoulder or burn slowly; glowing is a different form and sense. |
| b2-Segelflieger-1626 | enText | HIGH | SEMANTICS | Glider | Glider pilot | A Segelflieger is a person who flies a glider, not the aircraft itself. |
| b2-sickern-1643 | enText | HIGH | TRANSLATION | Drip • Suck | Drip • Seep | Sickern means to seep or trickle; suck is not the relevant meaning. |
| b2-Sorgenkind-1660 | enText | HIGH | TRANSLATION | Care child | Problem child | Sorgenkind is conventionally translated as problem child, not care child. |
| b2-Sorgerecht-1662 | enText | HIGH | SEMANTICS | The right to care | The right of custody | In legal English, Sorgerecht refers to custody or parental responsibility, not general care. |
| b2-Spaltung-1665 | enText | HIGH | FOREIGN_REMNANT | Splitting • [sa]splitting • [sa]splitting | Division • Split • Splitting | The bracketed “[sa]” is a foreign-language remnant and is not valid English. |
| b2-spärlich-1666 | enText | HIGH | SEMANTICS | Scanty • Stingy • Rare | Scanty • Sparse • Rare | “Stingy” usually describes unwillingness to give; it does not mean sparse or meagre here. |
| b2-Spielgerät-1670 | enText | HIGH | TRANSLATION | Sports game inventory | Sports equipment | “Sports game inventory” is not idiomatic English; Spielgerät means equipment or apparatus used for s |
| b2-Spießbürger-1671 | enText | HIGH | SEMANTICS | A resident citizen | A philistine • A petty bourgeois | Spießbürger describes a narrow-minded, conventional person, not simply a resident citizen. |
| b2-Spott-1673 | enText | HIGH | SEMANTICS | Mockery • Teething • Wicked joke | Mockery • Ridicule • Derision | “Teething” is unrelated to Spott and appears to be a mistranslation or typo. |
| b2-spotten-1675 | enText | HIGH | SEMANTICS | Mock • Teething | Mock • Ridicule | “Teething” is unrelated to the verb spotten. |
| b2-spöttisch-1676 | enText | HIGH | SEMANTICS | Mocking • Toothy | Mocking • Derisive | “Toothy” means having prominent teeth and is unrelated to spöttisch. |
| b2-sprengen-1678 | enText | HIGH | FOREIGN_REMNANT | [on]blast • Sprinkle • Water | Blow up • Sprinkle • Water | “[on]” is a foreign-language remnant, and “on blast” is not the verb sense of sprengen. |
| b2-Spruchband-1682 | enText | HIGH | SEMANTICS | Transparent • Poster | Banner • Poster | A Spruchband is a banner or streamer; “transparent” is a false friend from the source language. |
| b2-Stahlwerk-1692 | enText | HIGH | TRANSLATION | Steel foundry | Steelworks | Stahlwerk refers to a steelworks or steel mill, not specifically a foundry. |
| b2-Strafanzeige-1705 | enText | HIGH | SEMANTICS | Initiating a criminal case against someone | Criminal complaint • Police report | A Strafanzeige is a criminal complaint or report, not the initiation of a criminal case itself. |
| b2-stranden-1706 | enText | HIGH | SEMANTICS | Run aground • Have an accident | Run aground • Become stranded | Stranden means to become stranded; it does not generally mean to have an accident. |
| b2-Terrorismus-1729 | enText | HIGH | FOREIGN_REMNANT | Terorisms | Terrorism | The English entry contains a Latvian-style spelling rather than English “terrorism”. |
| b2-Töpferscheibe-1736 | enText | HIGH | FOREIGN_REMNANT | Podnieka ripa | Potter's wheel | The English field contains the Latvian source text. |
| b2-Tor-1737 | enText | HIGH | SEMANTICS | Fool • Trap | Fool | With masculine German “der Tor”, the meaning is “fool”; “trap” is a different German word. |
| b2-totschießen-1740 | enText | HIGH | SEMANTICS | To shoot | To shoot dead | The prefix “tot-” specifies that the shooting causes death. |
| b2-totschlagen-1741 | enText | HIGH | TRANSLATION | Knock off | To beat to death | “Knock off” does not convey killing by beating. |
| b2-treuherzig-1750 | enText | HIGH | SEMANTICS | Hearty • Hearty | Guileless • Warm-hearted | “Hearty” does not express the German adjective’s trusting, ingenuous sense, and the item is duplicat |
| b2-trügen-1757 | enText | HIGH | GRAMMAR | Trick • Deceive | Deceive • Mislead | “Trick” is a noun here, while the German entry is a verb. |
| b2-übersichtlich-1777 | enText | HIGH | SEMANTICS | Transparent | Well-organised | “Übersichtlich” means clearly arranged or easy to survey, not “transparent”. |
| b2-übertragen-1780 | enText | HIGH | SEMANTICS | Transmit • Transmit contagious diseases • Broadcast by radio • [re]translate | Transfer • Transmit contagious diseases • Broadcast by radio • Translate | The first sense is not covered accurately, and “[re]translate” is not standard English for “übersetz |
| b2-übertreten-1781 | enText | HIGH | TRANSLATION | To break the law • To trespass against something | To break the law • To cross something | “Trespass against something” is not the normal English equivalent for crossing over something. |
| b2-umarbeiten-1785 | enText | HIGH | SEMANTICS | Recycle • Remake | Rework • Revise | “Umarbeiten” means to rework or revise, not to recycle. |
| b2-umhören, sich-1791 | enText | HIGH | SEMANTICS | To listen | To ask around | “Sich umhören” means to ask around or make inquiries, not simply to listen. |
| b2-umkreisen-1793 | enText | HIGH | SEMANTICS | Surround • Besiege • Hover • Launch • Circle | Circle • Orbit | “Besiege” and “launch” are unrelated meanings; the verb means to circle or orbit around something. |
| b2-umschließen-1797 | enText | HIGH | SEMANTICS | Turn on • Encompass • Encompass | Enclose • Encompass • Surround | “Turn on” is incorrect; “umschließen” means to enclose, encompass or surround. |
| b2-Umschwung-1800 | enText | HIGH | SEMANTICS | Reversal • Break • Sudden change • Reversal • Turn | Reversal • Turning point • Sudden change • Upheaval • Turnaround | “Break” is not a meaning of “Umschwung”, and “turn” alone is too vague. |
| b2-umständlich-1803 | enText | HIGH | SEMANTICS | Very detailed • Too broad • Burdensome • Complicated | Cumbersome • Complicated • Overly detailed | “Too broad” is not a meaning of “umständlich”; the adjective means cumbersome or overly elaborate. |
| b2-Unfug-1827 | enText | HIGH | SEMANTICS | Misdeed • Absence • Lewd act | Mischief • Nonsense • Lewd conduct | “Absence” is unrelated; “Unfug” means mischief, nonsense or improper conduct. |
| b2-unterbreiten-1835 | enText | HIGH | SEMANTICS | Explain • Present | Submit • Present | “Unterbreiten” means to submit or present, not to explain. |
| b2-Unterhalt-1840 | enText | HIGH | SEMANTICS | Supply • Supply • Supply | Maintenance • Support • Alimony | “Unterhalt” means maintenance, support or alimony, not simply supply. |
| b2-unterirdisch-1841 | enText | HIGH | ORTHOGRAPHY | Underground- | Underground | The trailing hyphen makes the English entry malformed; it is not part of the standalone translation. |
| b2-unterschlagen-1846 | en | HIGH | SEMANTICS | To appropriate | To embezzle | The usual sense is to embezzle or misappropriate, especially money or property, not merely to approp |
| b2-Untertan-1848 | en | HIGH | TRANSLATION | Citizen | Subject | A monarch’s Untertan is a subject, not a citizen. |
| b2-sich unterwerfen-1852 | en | HIGH | SEMANTICS | To obey | To submit • To surrender | The reflexive verb means to submit or surrender, not simply to obey. |
| b2-unvermeidlich-1855 | en | HIGH | TRANSLATION | Imminent • Unavoidable | Inevitable • Unavoidable | “Imminent” means about to happen, not unavoidable. |
| b2-verbittert-1873 | en | HIGH | SEMANTICS | Upset | Bitter • Embittered | “Upset” is too weak; the adjective describes someone made bitter or resentful by experience. |
| b2-verehren-1879 | en | HIGH | FOREIGN_REMNANT | honour • Respect • Comp. [to] give away | Honour • Respect • (colloquial) Give as a gift | “Comp.” and bracketed source notation are foreign/source remnants in the English field. |
| b2-vererben-1883 | en | HIGH | SEMANTICS | Leave • Inherit | Leave as an inheritance • Bequeath | The transitive verb means to leave or bequeath by inheritance; “inherit” has the opposite perspectiv |
| b2-verhasst-1896 | en | HIGH | TRANSLATION | Hated • Unseen | Hated • Detested | “Unseen” means not seen and is unrelated to the meaning of verhasst. |
| b2-verhöhnen-1898 | en | HIGH | TRANSLATION | Mock • Dent | Mock • Ridicule | “Dent” is unrelated; verhöhnen means to mock or ridicule. |
| b2-Verhör-1899 | en | HIGH | FOREIGN_REMNANT | [from] interrogation | Interrogation | Bracketed source morphology is not part of the English translation. |
| b2-verhören-1900 | en | HIGH | FOREIGN_REMNANT | [of] questioning | To interrogate • To question | Bracketed source morphology is a foreign/source remnant, and the current phrase is not a verb transl |
| b2-sich verhören-1901 | en | HIGH | SEMANTICS | Listen again | To mishear • To hear incorrectly | The reflexive verb means to mishear, not to listen again. |
| b2-Vermächtnis-1906 | enText | HIGH | SEMANTICS | Testament | Legacy | Vermächtnis means a legacy or bequest; Testament usually means a will or scripture. |
| b2-Vers-1912 | enText | HIGH | TRANSLATION | Article | Verse | Vers means a line or stanza of poetry; Article translates German Artikel. |
| b2-Versehen-1915 | enText | HIGH | SEMANTICS | Error • Revision | Error • Oversight | Versehen means an oversight or mistake, not revision. |
| b2-verkraften-1918 | enText | HIGH | SEMANTICS | Maintain moral strength to overcome something unpleasant | To cope with something unpleasant | Verkraften means to cope with or withstand something, not to maintain moral strength. |
| b2-vermögend-1927 | enText | HIGH | SEMANTICS | Rich • Fed | Wealthy • Prosperous | Fed means supplied with food, not financially well-off. |
| b2-verordnen-1930 | enText | HIGH | TRANSLATION | Determine • Order • Med. to sign | Determine • Order • Prescribe | In medical use verordnen means prescribe, not to sign. |
| b2-versagen-1934 | enText | HIGH | SEMANTICS | Deny • Refuse • Reject • Disobey • Refuse to serve • Appear cowardly and powerless | Fail • Refuse • Reject • Disobey • Refuse to serve • Fail through cowardice and ineptitude | Versagen primarily means fail; the current list omits this core sense and gives an unnatural final g |
| b2-verspotten-1943 | enText | HIGH | TRANSLATION | Dent • Ridicule | Mock • Ridicule | Dent is unrelated; verspotten means mock or ridicule. |
| b2-verstauchen-1945 | enText | HIGH | SEMANTICS | To dislocate | To sprain | Verstauchen means sprain; dislocate translates ausrenken or verrenken. |
| b2-verwickeln-1959 | enText | HIGH | TRANSLATION | To confuse • Adj. interweave • Interfere | To entangle • To involve • To interfere | The entry contains an unexplained label and misses the senses entangle and involve. |
| b2-Verwirrung-1961 | enText | HIGH | SEMANTICS | Confusion • Embarrassment | Confusion • Bewilderment | Embarrassment means Verlegenheit; Verwirrung means confusion or bewilderment. |
| b2-sich verzögern-1968 | enText | HIGH | SEMANTICS | Delay • Procrastinate | Be delayed • Be postponed | The reflexive verb means be delayed or postponed; procrastinate means deliberately put off a task. |
| b2-verzweifeln-1970 | enText | HIGH | TRANSLATION | Gone out | To despair | “Gone out” does not express the German verb meaning “to despair”. |
| b2-Vorliebe-1999 | enText | HIGH | GRAMMAR | Especially liked | Particular preference | The German word is a noun meaning a special preference, not an adjective or participle. |
| b2-Vorsprung-2005 | enText | HIGH | SEMANTICS | Preeminence • Supremacy • Superiority | Lead • Advantage • Head start | The common contextual meaning is a lead or advantage, not necessarily supremacy or pre-eminence. |
| b2-Wacholder-2017 | enText | HIGH | TRANSLATION | Fir • Juniper | Juniper | Wacholder means “juniper”; “fir” is a different tree. |
| b2-Wade-2019 | enText | HIGH | TRANSLATION | Roe | Calf | The anatomical noun Wade means “calf”; “roe” refers to deer or fish eggs. |
| b2-Wählscheibe-2024 | enText | HIGH | TRANSLATION | Phone dial pad | Rotary dial | A Wählscheibe is the rotating dial on an old telephone, not a modern dial pad. |
| b2-wanken-2030 | enText | HIGH | TRANSLATION | Grilling • Adj. to fluctuate | Wobble • Figuratively: waver | “Grilling” is incorrect, and “Adj.” is an inappropriate remnant in the translation. |
| b2-Warenausgabe-2031 | enText | HIGH | TRANSLATION | Purchase control and issuance | Goods issue • Distribution of goods | The German refers to issuing or distributing goods, not controlling purchases. |
| b2-Wasserwerfer-2036 | enText | HIGH | SEMANTICS | Police car - water cannon | Police water cannon | A Wasserwerfer is a water-cannon vehicle, not a generic police car plus a separate cannon. |
| b2-Wehe-2041 | enText | HIGH | FOREIGN_REMNANT | Dune • Kupena | Dune • Snowdrift | “Kupena” is a foreign-language remnant and must be translated into English. |
| b2-Wehrpflicht-2043 | enText | HIGH | TRANSLATION | Martial law | Compulsory military service • Conscription | Wehrpflicht means compulsory military service, not martial law. |
| b2-Weib-2044 | enText | HIGH | SEMANTICS | Cf. not a woman | Woman (derogatory) | The current wording incorrectly denies the meaning; Weib is a derogatory term for a woman. |
| b2-Werkbank-2054 | enText | HIGH | TRANSLATION | Machine tool | Workbench | Werkbank means a workbench; a machine tool is a different type of equipment. |
| b2-Werkteil-2058 | enText | HIGH | TRANSLATION | Detail | Part • Component | Werkteil means a part or component, not a detail. |
| b2-Wettlauf-2061 | enText | HIGH | FOREIGN_REMNANT | Sp. rush race • Rush | Race • Competition | “Sp.” is an unexplained remnant, and “rush race” is not natural English. |
| b2-wider-2066 | enText | HIGH | TRANSLATION | Vs | Against • Contrary to | Wider is the preposition “against” or “contrary to”, not the abbreviation “vs”. |
| b2-Willkür-2075 | enText | HIGH | GRAMMAR | Arbitrary | Arbitrariness • Arbitrary action | Willkür is a noun; “arbitrary” is an adjective and does not match the part of speech. |
| b2-Windbeutel-2076 | enText | HIGH | TRANSLATION | Wind cake | Cream puff • Windbag | “Wind cake” is a literal but nonstandard rendering; Windbeutel commonly means a cream puff or windba |
| b2-zielbewusst-2078 | enText | HIGH | TRANSLATION | Targeted | Purposeful • Goal-oriented | Zielbewusst describes deliberate focus on a goal, not something merely targeted. |
| b2-zollpflichtig-2081 | enText | HIGH | TRANSLATION | Subject to customs | Dutiable • Subject to customs duty | The German refers specifically to liability for customs duty, not being subject to customs generally |
| b2-zuerkennen-2084 | enText | HIGH | TRANSLATION | To order • To assign | To award • To grant | Zuerkennen means to award or grant something, not generally to order or assign it. |
| b2-Zusage-2091 | enText | HIGH | TRANSLATION | Agreeable answer | Promise • commitment | Zusage means a promise or commitment, not an answer that is agreeable. |
| b2-zutrauen-2097 | enText | HIGH | GRAMMAR | Expect • Think able | Expect someone to be capable • consider someone capable | “Think able” is ungrammatical, and “expect” alone omits the ability-related meaning. |
| b2-Zuversicht-2098 | enText | HIGH | SEMANTICS | Reliance | Confidence • optimism | Zuversicht means confidence or optimism about the future, not reliance on someone or something. |
| b2-sich-abfinden | study.rektion | HIGH | FOREIGN_REMNANT | mit + kam? | mit + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-abfinden | study.explanation | HIGH | FOREIGN_REMNANT | Sich abfinden requires the definite preposition mit + kam?. | Sich abfinden takes the fixed preposition mit + dative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-abfinden | study.forms | HIGH | FOREIGN_REMNANT | mit + kam? | mit + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-abwenden | study.rektion | HIGH | FOREIGN_REMNANT | von + kam? | von + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-abwenden | study.explanation | HIGH | FOREIGN_REMNANT | Sich abwenden requires the definite preposition von + kam?. | Sich abwenden takes the fixed preposition von + dative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-abwenden | study.forms | HIGH | FOREIGN_REMNANT | von + kam? | von + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-befassen | study.rektion | HIGH | FOREIGN_REMNANT | mit + kam? | mit + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-befassen | study.explanation | HIGH | FOREIGN_REMNANT | Sich befassen requires the definite preposition mit + kam?. | Sich befassen takes the fixed preposition mit + dative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-befassen | study.forms | HIGH | FOREIGN_REMNANT | mit + kam? | mit + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-begnuegen | study.rektion | HIGH | FOREIGN_REMNANT | mit + kam? | mit + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-begnuegen | study.explanation | HIGH | FOREIGN_REMNANT | Sich begnügen requires the definite preposition mit + kam?. | Sich begnügen takes the fixed preposition mit + dative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-begnuegen | study.forms | HIGH | FOREIGN_REMNANT | mit + kam? | mit + dative | The Latvian case prompt “kam?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-bemaechtigen | study.translation | HIGH | ORTHOGRAPHY | Seise • Take possession of | Seize • Take possession of | “Seise” is a spelling error; the intended verb is “seize”. |
| b2-sich-bemaechtigen | study.rektion | HIGH | TRANSLATION | + possessive form | + genitive case | The German construction uses the genitive case, not a possessive form as an English grammar category |
| b2-sich-bemaechtigen | study.forms | HIGH | TRANSLATION | + possessive form | + genitive case | The German construction uses the genitive case, not a possessive form as an English grammar category |
| b2-sich-berufen | study.rektion | HIGH | FOREIGN_REMNANT | auf + ko? | auf + accusative | The Latvian case prompt “ko?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-berufen | study.explanation | HIGH | FOREIGN_REMNANT | Sich berufen requires the definite preposition auf + ko?. | Sich berufen takes the fixed preposition auf + accusative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-berufen | study.forms | HIGH | FOREIGN_REMNANT | auf + ko? | auf + accusative | The Latvian case prompt “ko?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-beschraenken | study.rektion | HIGH | FOREIGN_REMNANT | auf + ko? | auf + accusative | The Latvian case prompt “ko?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-beschraenken | study.explanation | HIGH | FOREIGN_REMNANT | Sich beschränken requires the definite preposition auf + ko?. | Sich beschränken takes the fixed preposition auf + accusative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-beschraenken | study.forms | HIGH | FOREIGN_REMNANT | auf + ko? | auf + accusative | The Latvian case prompt “ko?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-betaetigen | study.rektion | HIGH | FOREIGN_REMNANT | in + kur? | in + dative | The Latvian prompt “kur?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-betaetigen | study.explanation | HIGH | FOREIGN_REMNANT | Sich betätigen requires the definite preposition in + where?. | Sich betätigen takes the fixed preposition in + dative. | The source case prompt is translated as awkward “where?” rather than an English case label. |
| b2-sich-betaetigen | study.forms | HIGH | FOREIGN_REMNANT | in + kur? | in + dative | The Latvian prompt “kur?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-einlassen | study.translation | HIGH | SEMANTICS | Let in | Get involved in | “Let in” means allow entry; sich auf etwas einlassen means become involved in or engage with it. |
| b2-sich-einlassen | study.rektion | HIGH | FOREIGN_REMNANT | auf + ko? | auf + accusative | The Latvian case prompt “ko?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-einlassen | study.explanation | HIGH | FOREIGN_REMNANT | Sich einlassen requires the definite preposition auf + ko?. | Sich einlassen takes the fixed preposition auf + accusative. | The explanation contains Latvian and uses the unnatural term “definite preposition”. |
| b2-sich-einlassen | study.forms | HIGH | FOREIGN_REMNANT | auf + ko? | auf + accusative | The Latvian case prompt “ko?” is a foreign-language remnant; use an English grammar label. |
| b2-sich-einpraegen | study.rektion | HIGH | SEMANTICS | in + ko? | direct object in the accusative | Sich etwas einprägen takes an accusative object; it does not require an in-prepositional phrase. |
| b2-sich-einpraegen | study.explanation | HIGH | SEMANTICS | Sich einprägen requires the definite preposition in + ko?. | Sich einprägen takes a direct object in the accusative; it does not require a preposition. | The explanation gives an incorrect prepositional construction and contains the Latvian “ko?”. |
| b2-sich-einpraegen | study.forms | HIGH | FOREIGN_REMNANT | in + ko? | direct object in the accusative | The Latvian case prompt “ko?” is a foreign-language remnant, and the preposition is incorrect. |
| b2-sich-einschleichen | study.rektion | HIGH | FOREIGN_REMNANT | in + ko? | in + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-einschleichen | study.forms | HIGH | FOREIGN_REMNANT | in + ko? | in + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-einschraenken | study.rektion | HIGH | FOREIGN_REMNANT | auf + ko? | auf + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-einschraenken | study.forms | HIGH | FOREIGN_REMNANT | auf + ko? | auf + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-empfehlen | study.rektion | HIGH | FOREIGN_REMNANT | zu + kam? | zu + the dative | The Latvian interrogative kam? remains in the English field. |
| b2-sich-empfehlen | study.forms | HIGH | FOREIGN_REMNANT | zu + kam? | zu + the dative | The Latvian interrogative kam? remains in the English field. |
| b2-sich-empören | study.rektion | HIGH | FOREIGN_REMNANT | über + ko? | über + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-empören | study.forms | HIGH | FOREIGN_REMNANT | über + ko? | über + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-enthalten | study.rektion | HIGH | FOREIGN_REMNANT | von + kam? | von + the dative | The Latvian interrogative kam? remains in the English field. |
| b2-sich-enthalten | study.forms | HIGH | FOREIGN_REMNANT | von + kam? | von + the dative | The Latvian interrogative kam? remains in the English field. |
| b2-sich-entrüsten | study.rektion | HIGH | FOREIGN_REMNANT | über + ko? | über + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-entrüsten | study.forms | HIGH | FOREIGN_REMNANT | über + ko? | über + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-erbarmen | study.rektion | HIGH | FOREIGN_REMNANT | über + ko? | über + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-erbarmen | study.forms | HIGH | FOREIGN_REMNANT | über + ko? | über + the accusative | The Latvian interrogative ko? remains in the English field. |
| b2-sich-ergeben | study.rektion | HIGH | FOREIGN_REMNANT | aus + kam? | aus + the dative (for ‘result from’) | The Latvian interrogative kam? remains in the English field. |
| b2-sich-ergeben | study.explanation | HIGH | SEMANTICS | Sich ergeben requires the definite preposition aus + kam?. | In the sense ‘result from’, sich ergeben takes aus + the dative; the sense ‘surrender’ is used witho | The preposition applies only to one sense; surrender does not take aus. |
| b2-sich-ergeben | study.forms | HIGH | FOREIGN_REMNANT | aus + kam? | aus + the dative (for ‘result from’) | The Latvian interrogative kam? remains in the English field. |
| b2-sich-erniedrigen | study.rektion | HIGH | FOREIGN_REMNANT | vor + kam? | vor + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-erniedrigen | study.explanation | HIGH | FOREIGN_REMNANT | Sich erniedrigen requires the definite preposition vor + kam?. | Sich erniedrigen requires the preposition vor + whom? | The Latvian interrogative kam? remains, and definite preposition is not the intended term here. |
| b2-sich-erniedrigen | study.forms | HIGH | FOREIGN_REMNANT | vor + kam? | vor + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-erregen | study.translation | HIGH | SEMANTICS | Worry about | To get worked up about | Sich erregen means to become agitated or worked up, not generally to worry. |
| b2-sich-erregen | study.rektion | HIGH | FOREIGN_REMNANT | über + ko? | über + what? | The Latvian interrogative ko? is a foreign-language remnant in the English field. |
| b2-sich-erregen | study.explanation | HIGH | FOREIGN_REMNANT | Sich erregen requires the definite preposition über + ko?. | Sich erregen requires the preposition über + what? | The Latvian interrogative ko? remains, and definite preposition is not the intended term here. |
| b2-sich-erregen | study.forms | HIGH | FOREIGN_REMNANT | über + ko? | über + what? | The Latvian interrogative ko? is a foreign-language remnant in the English field. |
| b2-sich-erweisen | study.rektion | HIGH | FOREIGN_REMNANT | als + kas? | als + what? | The Latvian interrogative kas? is a foreign-language remnant in the English field. |
| b2-sich-erweisen | study.explanation | HIGH | FOREIGN_REMNANT | Sich erweisen requires the definite preposition als + what?. | Sich erweisen requires the preposition als + what? | The Latvian interrogative kas? remains, and definite preposition is not the intended term here. |
| b2-sich-erweisen | study.forms | HIGH | FOREIGN_REMNANT | als + kas? | als + what? | The Latvian interrogative kas? is a foreign-language remnant in the English field. |
| b2-sich-fassen | study.translation | HIGH | SEMANTICS | To seise • To receive • To restrain | To compose oneself | The principal reflexive sense is to regain self-control; seise is also misspelled and receive is unr |
| b2-sich-fassen | study.rektion | HIGH | FOREIGN_REMNANT | an + kam? | an + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-fassen | study.explanation | HIGH | FOREIGN_REMNANT | Sich fassen requires the definite preposition an + kam?. | Sich fassen requires the preposition an + whom? | The Latvian interrogative kam? remains, and definite preposition is not the intended term here. |
| b2-sich-fassen | study.forms | HIGH | FOREIGN_REMNANT | an + kam? | an + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-fuegen | study.translation | HIGH | SEMANTICS | Adapt • Obey | To submit • To comply | The entries are bare imperatives and adapt is not the central sense; submit or comply is more accura |
| b2-sich-fuegen | study.rektion | HIGH | FOREIGN_REMNANT | in + ko? | in + what? | The Latvian interrogative ko? is a foreign-language remnant in the English field. |
| b2-sich-fuegen | study.explanation | HIGH | FOREIGN_REMNANT | Sich fügen requires the definite preposition in + ko?. | Sich fügen requires the preposition in + what? | The Latvian interrogative ko? remains, and definite preposition is not the intended term here. |
| b2-sich-fuegen | study.forms | HIGH | FOREIGN_REMNANT | in + ko? | in + what? | The Latvian interrogative ko? is a foreign-language remnant in the English field. |
| b2-sich-genieren | study.rektion | HIGH | FOREIGN_REMNANT | vor + kam? | vor + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-genieren | study.explanation | HIGH | FOREIGN_REMNANT | Sich genieren requires the definite preposition vor + kam?. | Sich genieren requires the preposition vor + whom? | The Latvian interrogative kam? remains, and definite preposition is not the intended term here. |
| b2-sich-genieren | study.forms | HIGH | FOREIGN_REMNANT | vor + kam? | vor + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-gesellen | study.rektion | HIGH | FOREIGN_REMNANT | zu + kam? | zu + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-gesellen | study.explanation | HIGH | FOREIGN_REMNANT | Sich gesellen requires the definite preposition zu + kam?. | Sich gesellen requires the preposition zu + whom? | The Latvian interrogative kam? remains, and definite preposition is not the intended term here. |
| b2-sich-gesellen | study.forms | HIGH | FOREIGN_REMNANT | zu + kam? | zu + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-gestalten | study.translation | HIGH | SEMANTICS | To form into | To take shape | To form into is not idiomatic here; sich gestalten means to take shape or develop. |
| b2-sich-gestalten | study.rektion | HIGH | FOREIGN_REMNANT | zu + kam? | zu + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-gestalten | study.explanation | HIGH | FOREIGN_REMNANT | Sich gestalten requires the definite preposition zu + kam?. | Sich gestalten requires the preposition zu + whom? | The Latvian interrogative kam? remains, and definite preposition is not the intended term here. |
| b2-sich-gestalten | study.forms | HIGH | FOREIGN_REMNANT | zu + kam? | zu + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-grauen | study.rektion | HIGH | FOREIGN_REMNANT | vor + kam? | vor + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-grauen | study.explanation | HIGH | FOREIGN_REMNANT | Sich grauen requires the definite preposition vor + kam?. | Sich grauen requires the preposition vor + whom? | The Latvian interrogative kam? remains, and definite preposition is not the intended term here. |
| b2-sich-grauen | study.forms | HIGH | FOREIGN_REMNANT | vor + kam? | vor + whom? | The Latvian interrogative kam? is a foreign-language remnant in the English field. |
| b2-sich-herausbilden | study.translation | HIGH | SEMANTICS | To form into | To develop; to emerge | The current wording is transitive and does not convey the reflexive meaning of developing or emergin |
| b2-sich-herausbilden | study.rektion | HIGH | FOREIGN_REMNANT | zu + kam? | zu + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-herausbilden | study.explanation | HIGH | FOREIGN_REMNANT | Sich herausbilden requires the definite preposition zu + kam?. | Sich herausbilden requires the preposition zu + [dative]. | The Latvian question word kam? remains in the English explanation; “definite preposition” is also un |
| b2-sich-herausbilden | study.forms | HIGH | FOREIGN_REMNANT | zu + kam? | zu + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-heraushalten | study.rektion | HIGH | FOREIGN_REMNANT | aus + kam? | aus + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-heraushalten | study.explanation | HIGH | FOREIGN_REMNANT | Sich heraushalten requires a certain preposition aus + kam?. | Sich heraushalten requires the preposition aus + [dative]. | The Latvian question word kam? remains in the English explanation. |
| b2-sich-heraushalten | study.forms | HIGH | FOREIGN_REMNANT | aus + kam? | aus + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-herausstellen | study.rektion | HIGH | FOREIGN_REMNANT | als + kas? | als + [predicate complement] | The Latvian question word kas? is an untranslated foreign-language remnant. |
| b2-sich-herausstellen | study.explanation | HIGH | FOREIGN_REMNANT | Sich herausstellen requires the definite preposition als + what?. | Sich herausstellen is used with als + [predicate complement]. | The English explanation retains the Latvian construction and uses an inaccurate description of als. |
| b2-sich-herausstellen | study.forms | HIGH | FOREIGN_REMNANT | als + kas? | als + [predicate complement] | The Latvian question word kas? is an untranslated foreign-language remnant. |
| b2-sich-hervortun | study.rektion | HIGH | FOREIGN_REMNANT | in + kur? | in + [dative] | The Latvian question word kur? is an untranslated foreign-language remnant. |
| b2-sich-hervortun | study.explanation | HIGH | FOREIGN_REMNANT | Sich hervortun requires a definite preposition in + where?. | Sich hervortun is used with in + [dative]. | The English explanation retains a Latvian-derived question and inaccurately calls the preposition de |
| b2-sich-hervortun | study.forms | HIGH | FOREIGN_REMNANT | in + kur? | in + [dative] | The Latvian question word kur? is an untranslated foreign-language remnant. |
| b2-sich-hingeben | study.translation | HIGH | SEMANTICS | Surrender • Surrender | To surrender oneself • to devote oneself | The two distinct Latvian senses have been duplicated instead of distinguishing surrender from devoti |
| b2-sich-hingeben | study.rektion | HIGH | FOREIGN_REMNANT | + kam? | + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-hingeben | study.explanation | HIGH | TRANSLATION | Sich hingeben requires + for whom?. | Sich hingeben is used with a dative object. | The source describes a dative object, not a preposition followed by “for whom?”. |
| b2-sich-hingeben | study.forms | HIGH | FOREIGN_REMNANT | + kam? | + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-leiden-study | study.translation | HIGH | SEMANTICS | Long and severe illness | Suffering; illness; ailment | Leiden does not inherently mean that an illness is long or severe and also commonly means suffering. |
| b2-sich-paaren | study.rektion | HIGH | FOREIGN_REMNANT | mit + kam? | mit + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-paaren | study.explanation | HIGH | FOREIGN_REMNANT | Sich paaren requires the definite preposition mit + kam?. | Sich paaren requires the preposition mit + [dative]. | The Latvian question word kam? remains in the English explanation. |
| b2-sich-paaren | study.forms | HIGH | FOREIGN_REMNANT | mit + kam? | mit + [dative] | The Latvian question word kam? is an untranslated foreign-language remnant. |
| b2-sich-scheren | study.translation | HIGH | SEMANTICS | Take care of | Care about | Sich scheren means to care about or be bothered by something, not to take care of it. |
| b2-sich-versehen | study.translation | HIGH | SEMANTICS | Forget • Equip with | Make a mistake • Equip or provide with | Sich versehen means to make a mistake; “forget” is not its normal meaning. |
| b2-sich-versehen | study.explanation | HIGH | ORTHOGRAPHY | Sich verschein requires the definite preposition mit + kam?. | Sich versehen requires the fixed preposition mit + kam?. | The German verb is misspelled as “verschein”, and “fixed preposition” is the correct term. |
| b2-sich-versoehnen | study.translation | HIGH | SEMANTICS | Put up with | Reconcile with | Sich versöhnen means to reconcile or make peace with someone; “put up with” means tolerate. |
| b2-sich-verwundern | study.translation | HIGH | SEMANTICS | Wonder about | Be surprised by | Sich verwundern means to be surprised or astonished, not to wonder about something. |
| b2-sich-widersetzen | study.translation | HIGH | SEMANTICS | Resist • Face | Resist • Oppose | “Face” means confront or encounter, whereas sich widersetzen means resist or oppose. |
| b2-sich-widersetzen | study.explanation | HIGH | GRAMMAR | Sich widersetzen requires + for whom?. | Sich widersetzen requires the dative (+ whom?). | The verb governs the dative; “for whom?” incorrectly inserts an English preposition. |
| b2-zuwider | study.explanation | HIGH | SEMANTICS | Main idea: zuwider is a word with multiple functions. As a preposition + dative, it means "against,  | Main idea: zuwider is a word with multiple functions. As a preposition + dative, it means "against,  | The idiom is presented with reversed semantic roles: the subject is distasteful to someone, not some |
| b2-zuwider | study.comparison[1].meaning | HIGH | SEMANTICS | Someone won't like it | To be distasteful to someone | “Someone won't like it” is vague and reverses the clearer meaning of the German construction. |
| b2-zuwider | study.tip.leftBlocks[0].text | HIGH | SEMANTICS | Basic meaning: against / opposite (mir zuwider). Idiomatically: jemandem zuwider sein/laufen = to di | Basic meaning: against / contrary to (mir zuwider). Idiomatically: jemandem zuwider sein/laufen = to | The idiomatic translation reverses the semantic relationship and makes the phrase sound unnatural. |
| b2-zuwider | study.important.text | HIGH | SEMANTICS | zuwider + dative = against, opposite. zuwider sein = dislike. It is not the same as wider. | zuwider + dative = against, contrary to. zuwider sein = to be distasteful to someone. It is not the  | “Dislike” omits the construction’s semantic roles and “opposite” is less accurate than contrary to h |
| b2-anbieten | study.important.text | HIGH | ORTHOGRAPHY | anbieten = to offer actively. Divisible: beet ... an. Perfect: angeboten. | anbieten = to offer actively. Divisible: biete ... an. Perfect: angeboten. | “beet” is a typo; the separable present-tense form is biete ... an. |
| b2-fordern | study.translation | HIGH | SEMANTICS | Require • Require | Demand • Request | The equivalents are duplicated, and require does not represent the usual meanings of fordern accurat |
| b2-verlaufen | study.translation | HIGH | SEMANTICS | To proceed • To roll | To proceed • To run its course | “To roll” is not a normal meaning of verlaufen; the verb can mean proceed or run its course. |
| b2-verlaufen | study.explanation | HIGH | SEMANTICS | Verlaufen (bez sich) means to run or roll. Not synonymous with sich verlaufen (get lost). | Verlaufen (without sich) means to proceed or run its course. It is not synonymous with sich verlaufe | “Roll” is incorrect here, and “bez sich” is an untranslated Latvian remnant in the English explanati |
| b2-anbelangen-13 | enText | MEDIUM | SEMANTICS | Refer to | Concern | Anbelangen means to concern or affect; “refer to” usually means mention or make reference to. |
| b2-angehen-19 | enText | MEDIUM | SEMANTICS | Relate to • Turn against | Relate to • Attack | “Turn against” is not the usual translation of angehen when it means confront or attack someone. |
| b2-abberufen-34 | enText | MEDIUM | SEMANTICS | Revoke • Dismiss | Recall • Remove from office | “Revoke” is used for permissions or decisions; abberufen means recall or remove someone from office. |
| b2-abblitzen-35 | enText | MEDIUM | GRAMMAR | Reject | Be rejected | Abblitzen is generally intransitive or passive: someone is rebuffed or rejected, not the person doin |
| b2-abbringen-36 | enText | MEDIUM | SEMANTICS | Dissuade • Dissuade • Divert | Dissuade • Deter • Divert | The first two English equivalents duplicate each other; atturēt is better represented by “deter”. |
| b2-abfertigen-42 | enText | MEDIUM | SEMANTICS | Send • Send away • Serve • Treat unkindly | Dispatch • Send away • Process • Dismiss curtly | In service contexts abfertigen means process or handle someone; “serve” is too broad, and the last s |
| b2-abgetan-46 | enText | MEDIUM | SEMANTICS | Terminated • Settled | Dismissed • Settled | Abgetan means dismissed or dealt with; “terminated” usually implies formally ended employment or an  |
| b2-ableiten-50 | enText | MEDIUM | SEMANTICS | Lead • Divert • Derive | Conduct • Divert • Derive | “Lead” is too general and does not clearly express conducting or draining a substance or signal away |
| b2-Absatzmarkt-56 | enText | MEDIUM | SEMANTICS | Outlet market | Sales market | Absatzmarkt means a market for selling products; “outlet market” suggests a market of retail outlets |
| b2-abschieben-58 | enText | MEDIUM | SEMANTICS | Push away • Banish | Push away • Deport | For removing someone from a country, abschieben is specifically “deport”, not generally “banish”. |
| b2-abschlagen-59 | enText | MEDIUM | SEMANTICS | Cut down • Repel • Repulse • Reject | Cut off • Knock away • Fend off • Reject | “Cut down” is not the usual equivalent of nocirst, and the middle senses are better rendered as knoc |
| b2-abschleppen-60 | enText | MEDIUM | SEMANTICS | Remove the car | Tow away a car | Abschleppen specifically means tow away, especially a vehicle; “remove” is too vague. |
| b2-absondern-63 | enText | MEDIUM | TRANSLATION | Separate • Separate • Isolate | Secrete • Separate • Isolate | The first German sense can mean to secrete or emit, which is missing from the current translation. |
| b2-abstimmen-66 | enText | MEDIUM | TRANSLATION | To vote • To agree | To vote • To coordinate | In this sense, abstimmen means to coordinate or harmonise, not simply to agree. |
| b2-abtragen-71 | enText | MEDIUM | TRANSLATION | Carry away • Carry away • Demolish | Carry away • Wear away • Demolish | The second sense means to wear away or erode, not to carry away. |
| b2-abtreten-72 | enText | MEDIUM | TRANSLATION | Withdraw • Give • Leave | Resign • Cede • Leave | Give is too vague; the relevant senses are resign and cede or hand over. |
| b2-Abzweigung-78 | enText | MEDIUM | TRANSLATION | Branch • Branch | Branch • Turning | For roads or paths, Abzweigung means a turning or junction; the duplicate is unhelpful. |
| b2-affig-80 | enText | MEDIUM | TRANSLATION | Flashy • Conceited | Showy • Conceited | Affig usually means affected or showy; flashy is narrower and suggests brightness or expense. |
| b2-Aufruf-99 | enText | MEDIUM | TRANSLATION | Exclamation • Invitation | Call • Appeal | Aufruf commonly means a public call or appeal; exclamation and invitation are not the best equivalen |
| b2-Äußerlichkeit-103 | enText | MEDIUM | SEMANTICS | Ostentatiousness | Outward appearance | The German noun refers to outward appearance or an external feature, not necessarily ostentation. |
| b2-ausspannen-107 | enText | MEDIUM | NATURALNESS | To unharness • To take away a partner • To rest | To unharness • To steal someone's partner • To relax | The second and third translations are understandable but unnatural and miss the idiomatic senses. |
| b2-ausstopfen-110 | enText | MEDIUM | NATURALNESS | To fill • To fill • To stuff out | To fill • To fill • To stuff | Stuff out is not the normal modern English expression for filling something with material. |
| b2-austragen-112 | enText | MEDIUM | TRANSLATION | Carry • Deliver • Win | Deliver • Carry to term • Fight out | Austragen means deliver, carry a pregnancy to term, or fight/settle something, not generally win. |
| b2-auswärtig-115 | enText | MEDIUM | GRAMMAR | Foreign • Foreign affairs | Foreign • External | Foreign affairs is a noun phrase, whereas the German item is an adjective meaning foreign or externa |
| b2-ausweisen-117 | enText | MEDIUM | TRANSLATION | Expel • Send out • Confirm • Prove | Expel • Deport • Identify • Prove | Ausweisen can mean deport and identify; send out and confirm are less accurate equivalents here. |
| b2-Auszeichnung-121 | enText | MEDIUM | TRANSLATION | Awarding • Award • Badge of honour | Distinction • Award • Badge of honour | Auszeichnung is an award or distinction; awarding refers to the act of giving one, not the item itse |
| b2-Bankscheck-130 | lv | MEDIUM | ORTHOGRAPHY | Bank check | Bank cheque | British English normally spells this banking instrument cheque. |
| b2-Baukredit-139 | lv | MEDIUM | NATURALNESS | Loan for starting construction | Construction loan | Construction loan is the standard concise English term; the current phrasing is awkward and over-spe |
| b2-Baugrube-142 | lv | MEDIUM | NATURALNESS | Construction pit | Building pit | Building pit or excavation is the usual English term; construction pit is not idiomatic. |
| b2-Bauwesen-145 | lv | MEDIUM | STUDY | Construction • Construction | Construction • Building industry | The two English glosses are identical and fail to provide useful sense coverage. |
| b2-bedürfen-147 | lv | MEDIUM | TRANSLATION | Need • Be necessary | Need • Require | Be necessary is not an equivalent verb sense; require supplies the intended second gloss. |
| b2-Beförderung-150 | lv | MEDIUM | STUDY | Delivery • Transportation • Promotion • Promotion | Delivery • Transportation • Promotion | The final two English glosses duplicate each other and add no distinct learning value. |
| b2-bejahen-169 | lv | MEDIUM | SEMANTICS | Confirm • Assert | Affirm • Confirm | Assert means state forcefully, not answer yes to or affirm; the current senses are mismatched. |
| b2-berechtigen-188 | lv | MEDIUM | SEMANTICS | To give rights | To entitle | The verb means to entitle someone to do or receive something, not generally to give rights. |
| b2-beredt-189 | lv | MEDIUM | SEMANTICS | Talkative | Eloquent | Beredt means eloquent or articulate; talkative corresponds more closely to redselig. |
| b2-berufen-196 | lv | MEDIUM | SEMANTICS | Appoint • Invite | Appoint • Call | In this sense berufen means appoint or call, not invite socially. |
| b2-beruhen-198 | lv | MEDIUM | TRANSLATION | To be founded • To be based | To rest on • To be based | Beruhen auf means rest on or be based on; be founded is not the usual equivalent. |
| b2-besänftigen-199 | lv | MEDIUM | SEMANTICS | Calm down • Appease • Appease • Silence | Calm down • Appease • Soothe • Quiet | Silence means stop someone speaking, whereas besänftigen means soothe or calm. |
| b2-Besatzung-200 | lv | MEDIUM | SEMANTICS | Command • Crew • Crew • Occupation military units | Crew • Crew • Crew • Occupying forces | Besatzung means crew or occupying forces; command is not the relevant noun sense. |
| b2-beschatten-202 | lv | MEDIUM | SEMANTICS | Overshadow • Trace | Overshadow • Shadow | To shadow means secretly follow or surveil; trace does not express this sense reliably. |
| b2-beschwören-206 | lv | MEDIUM | NATURALNESS | To swear • To swear • To pray very much | To swear • To swear • To implore | To pray very much is unnatural; beschwören can mean urgently implore. |
| b2-besessen-207 | lv | MEDIUM | SEMANTICS | Obsessed • Overwhelmed • Overwhelmed | Possessed • Obsessed • Consumed | The second and third translations do not clearly convey the possessed or obsessively consumed senses |
| b2-Bestand-211 | lv | MEDIUM | SEMANTICS | Composition • Inventory • Stock | Holdings • Inventory • Stock | Composition is not the usual meaning of Bestand; holdings, stock or inventory are appropriate. |
| b2-bestärken-213 | lv | MEDIUM | SEMANTICS | To strengthen • To strengthen • To invigorate | To strengthen • To reinforce • To encourage | Bestärken can mean reinforce or encourage; invigorate is not the intended interpersonal sense. |
| b2-bestrahlen-216 | lv | MEDIUM | SEMANTICS | Irradiate • Shine | Irradiate • Illuminate | The second sense is to illuminate or shine a light on something; shine is normally intransitive. |
| b2-beteuern-221 | lv | MEDIUM | SEMANTICS | To certify | To assure | Beteuern means assert or assure emphatically, rather than officially certify. |
| b2-Betriebsrat-224 | lv | MEDIUM | TRANSLATION | Company council | Works council | Works council is the established British English term for a German Betriebsrat. |
| b2-Betrug-225 | lv | MEDIUM | SEMANTICS | Fraud • Hoax • Fake • Fraud | Fraud • Deception • Fraud • Swindle | Hoax and fake are not reliable noun equivalents for the listed senses of Betrug. |
| b2-bezeugen-238 | lv | MEDIUM | TRANSLATION | To certify | To testify | Bezeugen means testify, attest or bear witness; certify is narrower and more official. |
| b2-Bezug-239 | lv | MEDIUM | SEMANTICS | Ratio • Connection • Cover | Relation • Connection • Cover | Bezug can mean relation or connection, but ratio normally translates Verhältnis. |
| b2-binnen-250 | lv | MEDIUM | TRANSLATION | During • Inside | Within • By | Binnen means within or by a specified time; during and inside are less precise here. |
| b2-sich blähen-259 | lv | MEDIUM | NATURALNESS | Inflate • Inflate | Swell up • Puff up | The reflexive verb means become swollen or puffed up; the current glosses are duplicated. |
| b2-Blasorchester-260 | lv | MEDIUM | TRANSLATION | Brass band | Wind orchestra | A Blasorchester includes woodwind instruments; brass band is a narrower ensemble type. |
| b2-blenden-264 | lv | MEDIUM | SEMANTICS | Dazzle • Dazzle • Confuse • Mislead | Dazzle • Blind • Confuse • Mislead | The first two glosses are duplicated; one sense should be blind. |
| b2-Blitzlicht-267 | lv | MEDIUM | ORTHOGRAPHY | Flash light | Flash | Flashlight is normally one word and means a torch; the German noun refers to a camera flash. |
| b2-blutarm-276 | lv | MEDIUM | ORTHOGRAPHY | Anemic | Anaemic | Anaemic is the standard British English spelling. |
| b2-Blutarmut-277 | lv | MEDIUM | ORTHOGRAPHY | Anemia | Anaemia | Anaemia is the standard British English spelling. |
| b2-Blutspender-278 | lv | MEDIUM | SEMANTICS | Donor | Blood donor | Donor is too general; the German compound specifically means a person who donates blood. |
| b2-Bodensatz-280 | lv | MEDIUM | TRANSLATION | Sediment • Scum • Yeast | Sediment • Dregs • Lees | Bodensatz means sediment, dregs or lees; yeast is not an accurate standalone gloss. |
| b2-Bodenschätze-281 | lv | MEDIUM | SEMANTICS | Minerals | Mineral resources | The German plural refers to exploitable mineral resources, not minerals in general. |
| b2-Brandanschlag-294 | lv | MEDIUM | SEMANTICS | Arson | Arson attack | Anschlag adds the sense of an attack; arson alone names the act of deliberately setting fire. |
| b2-Brandmal-295 | lv | MEDIUM | SEMANTICS | Burn • Burn scar | Burn mark • Burn scar | Burn alone is too broad; Brandmal refers specifically to a mark or scar caused by burning. |
| b2-Buchführer-306 | lv | MEDIUM | TRANSLATION | Accountant | Bookkeeper | Buchführer specifically means bookkeeper; accountant is a broader occupation. |
| b2-Buchführung-307 | lv | MEDIUM | TRANSLATION | Accounting | Bookkeeping | Buchführung specifically refers to the recording of financial transactions, i.e. bookkeeping. |
| b2-Bühnenbild-312 | lv | MEDIUM | SEMANTICS | Decoration | Stage set | Bühnenbild means the scenery or set design for a stage, not general decoration. |
| b2-Bundesland-314 | lv | MEDIUM | NATURALNESS | Federal land | Federal state | “Federal land” is not the normal English term for a constituent state. |
| b2-Bündnis-317 | lv | MEDIUM | SEMANTICS | Union | Alliance | Bündnis normally means an alliance or pact; “union” suggests a different type of association. |
| b2-bürgerlich-321 | lv | MEDIUM | GRAMMAR | Civic • Citizens • Bourgeois • Bourgeois | Civic • Civil • Bourgeois • Bourgeoisie | “Citizens” is a plural noun, not an adjective; the final sense is the noun “bourgeoisie”. |
| b2-damalig-339 | lv | MEDIUM | GRAMMAR | Then • Of that time | Former • Of that time | “Then” is normally an adverb, while damalig is an adjective meaning former or of that time. |
| b2-Damm-340 | lv | MEDIUM | STUDY | Dam • Dam • Railway embankment | Dam • Embankment • Railway embankment | The second “Dam” duplicates the first and fails to represent the general embankment sense. |
| b2-dampfen-343 | lv | MEDIUM | TRANSLATION | Smoke • Evaporate | To steam • To evaporate | Dampfen refers to emitting steam or vapour; “to smoke” misleadingly suggests smoke from combustion. |
| b2-Darlehen-350 | lv | MEDIUM | SEMANTICS | Loan • Borrowing | Loan | Darlehen is a loan; “borrowing” describes the activity of obtaining a loan, not the loan itself. |
| b2-Defekt-364 | lv | MEDIUM | NATURALNESS | Technical deficiency • Failure | Defect • Fault | “Technical deficiency” and “failure” are awkward or imprecise for the standard noun Defekt. |
| b2-dehnen-367 | lv | MEDIUM | SEMANTICS | To stretch • To stretch • To stretch • To stretch • To drag | To stretch • To extend • To stretch oneself • To elongate • To drag on | The repeated “to stretch” loses distinct senses, and “to drag” should be “to drag on” for time or du |
| b2-Delikt-373 | lv | MEDIUM | NATURALNESS | Crime • Breaking the law | Crime • Offence | The second item is a verb phrase rather than a natural noun equivalent for a legal offence. |
| b2-denkbar-377 | lv | MEDIUM | SEMANTICS | Supposed • Imaginable • Possible | Conceivable • Imaginable • Possible | “Supposed” usually means presumed, whereas denkbar means conceivable or imaginable. |
| b2-deplaziert-378 | lv | MEDIUM | SEMANTICS | Inappropriate • Out of place • Out of time | Inappropriate • Out of place • Untimely | “Out of time” usually means that no time remains; “untimely” conveys the temporal sense here. |
| b2-deponieren-379 | lv | MEDIUM | SEMANTICS | Deposit • Deposit | Deposit • Put down | The duplicate loses the distinct sense of placing or setting something down. |
| b2-derjenige-381 | lv | MEDIUM | SEMANTICS | That | The one • That one | Derjenige is a demonstrative pronoun meaning “the one” or “that one,” not simply “that.” |
| b2-deuten-382 | lv | MEDIUM | SEMANTICS | Explain • Translate • Indicate | Interpret • Explain • Indicate | Deuten can mean interpret or explain; “translate” normally refers to rendering between languages. |
| b2-Devisen-384 | lv | MEDIUM | TRANSLATION | Means of payment in foreign currency | Foreign currency | The standard modern English equivalent is “foreign currency”; the current definition is unnecessaril |
| b2-Diätkost-392 | lv | MEDIUM | NATURALNESS | Dietary nutrition | Diet food | “Dietary nutrition” is redundant and unnatural; “diet food” is the usual learner-level equivalent. |
| b2-donnern-413 | lv | MEDIUM | NATURALNESS | Thunder roar • Rumble • Rumble | Thunder • Roar • Rumble | “Thunder roar” is not a natural verb equivalent, and the final two items are duplicated. |
| b2-Doping-415 | lv | MEDIUM | SEMANTICS | Doping agent | Doping | Doping normally denotes the practice or use of prohibited substances, not the substance itself. |
| b2-Dosenmilch-425 | lv | MEDIUM | SEMANTICS | Condensed milk in cans | Canned milk | Dosenmilch means canned or tinned milk; it does not necessarily mean condensed milk. |
| b2-Dramatiker-432 | en | MEDIUM | ORTHOGRAPHY | Dramatist • Play writer | Dramatist • Playwright | “Play writer” is not the standard English compound; the correct term is “playwright”. |
| b2-drängen-434 | en | MEDIUM | TRANSLATION | Push • Push • Hurry • Hurry • Encourage | Push • Press • Hurry • Urge • Encourage | The list repeats “Push” and “Hurry” and omits the distinct sense “urge”. |
| b2-Drehbleistift-438 | en | MEDIUM | NATURALNESS | Automatic pencil | Mechanical pencil | “Mechanical pencil” is the standard modern British English term for this item. |
| b2-Dressman-442 | en | MEDIUM | NATURALNESS | Model demonstrator in fashion shows | Male fashion model | “Model demonstrator” is unnatural English; the usual term is “male fashion model”. |
| b2-Drohung-445 | en | MEDIUM | SEMANTICS | Threats | Threat | The German headword is singular; “threats” changes it to plural. |
| b2-dumpf-457 | en | MEDIUM | SEMANTICS | Hollow • Muffled • Stuffy • Suffocating • Heavy • Oppressed • Oppressive | Dull • Muffled • Stuffy • Suffocating • Heavy • Depressed • Oppressive | “Oppressed” normally describes people under control; “depressed” better matches the figurative sense |
| b2-Dumpingpreis-459 | en | MEDIUM | NATURALNESS | Dumped price | Dumping price | “Dumping price” is the established English term; “dumped price” is not the usual collocation. |
| b2-durchbringen-471 | en | MEDIUM | SEMANTICS | Get through • Bring through • Achieve • Cure • Waste | Get through • Bring through • Achieve • Nurse through • Waste | “Cure” means heal completely; durchbringen in this sense means to nurse or get someone through an il |
| b2-Durchführung-476 | en | MEDIUM | NATURALNESS | Putting something through • Doing • Doing • Carrying out • Realising | Putting something through • Implementation • Execution • Carrying out • Realisation | “Doing” is too vague and duplicated; the noun commonly means implementation or execution. |
| b2-durchschauen-483 | en | MEDIUM | SEMANTICS | See through • Reveal | See through • See through | “Reveal” is transitive causation; durchschauen means to see through or understand something. |
| b2-durchsehen-485 | en | MEDIUM | STUDY | Examine • Examine • Look through | Examine • Check • Look through | The first two English entries duplicate each other and fail to distinguish “examine” from “check”. |
| b2-durchsetzen-486 | en | MEDIUM | TRANSLATION | Get through • Achieve | Push through • Achieve | “Push through” is the clearer translation for successfully forcing a proposal or measure through. |
| b2-durchstellen-487 | en | MEDIUM | NATURALNESS | Connect a phone conversation | Put someone through on the phone | The standard English telephone collocation is “put someone through”, not “connect a phone conversati |
| b2-effektvoll-499 | enText | MEDIUM | SEMANTICS | Efficient | Effective • Impressive | Effektvoll means producing a strong effect or impression, not efficient. |
| b2-Eheberatung-501 | enText | MEDIUM | TRANSLATION | Family counseling | Marriage counselling | Eheberatung specifically concerns marriage or marital problems, not family counselling generally. |
| b2-ehelich-502 | enText | MEDIUM | NATURALNESS | Marriage- | Marital | “Marriage-” is not a natural English adjective; ehelich means marital or conjugal. |
| b2-eigenwillig-528 | enText | MEDIUM | SEMANTICS | Arbitrary • Obstinate • Obstinate • Overbearing | Headstrong • Self-willed • Stubborn • Wilful | Eigenwillig means headstrong or self-willed; arbitrary and overbearing do not match this core sense. |
| b2-Eilbrief-530 | enText | MEDIUM | NATURALNESS | An urgent letter | Express letter | “Express letter” is the established term for a letter sent by an expedited service. |
| b2-eindringen-537 | enText | MEDIUM | TRANSLATION | Push in • Break in • Soak in • Delve into | Penetrate • Break in • Seep in • Delve into | “Penetrate” and “seep in” better express the relevant senses than “push in” and “soak in”. |
| b2-einfassen-540 | enText | MEDIUM | TRANSLATION | Include • Frame • Frame | Include • Frame • Mount | The jewellery sense means to mount or set a stone, not to frame it. |
| b2-Einfuhrsperre-545 | enText | MEDIUM | NATURALNESS | Import blockade | Import ban | “Import ban” is the standard modern English collocation; “import blockade” is unnatural here. |
| b2-eingehen-549 | enText | MEDIUM | SEMANTICS | Enter • Arrive • Enter • Enter • Shrink • Agree • Bet | Enter • Arrive • Come in • Enter into • Shrink • Agree • Take a bet | “Bet” is not the usual meaning; eingehen can mean enter into or take a bet. |
| b2-eingerechnet-552 | enText | MEDIUM | TRANSLATION | Counted • Credited • Added | Included • Counted • Added | Eingerechnet means included or taken into account; credited is misleading here. |
| b2-einhüllen-560 | enText | MEDIUM | TRANSLATION | Wrap • Coil • Wrap | Wrap • Wrap • Wrap | Coil means wind into a spiral; all listed senses concern wrapping or enveloping. |
| b2-einleuchten-567 | enText | MEDIUM | NATURALNESS | Be understood • Be clear | Make sense • Be clear | “Make sense” is the natural modern equivalent of einleuchten in this sense. |
| b2-einmachen-569 | enText | MEDIUM | SEMANTICS | Preserve • Marinate • Boil | Preserve • Pickle • Make jam | Einmachen means preserve, pickle or make jam; boil alone is not the intended sense. |
| b2-einrechnen-572 | enText | MEDIUM | TRANSLATION | To count • To count | Include • Take into account | Einrechnen means include or take into account, not simply count. |
| b2-Einschreiben-577 | enText | MEDIUM | SEMANTICS | Registered letter or parcel | Registered mail | Einschreiben normally refers to registered mail or a registered letter, not specifically a parcel. |
| b2-Eintracht-587 | enText | MEDIUM | SEMANTICS | Consensus • Agreement • Harmony • Compatibility | Consensus • Agreement • Harmony • Concord | Eintracht means concord or harmony, not compatibility. |
| b2-einwenden-594 | enText | MEDIUM | TRANSLATION | Oppose • Raise objections | Object • Raise objections | Einwenden means object or raise an objection; oppose is broader and less precise. |
| b2-Empfangschef-609 | enText | MEDIUM | TRANSLATION | Hotel administrator | Reception manager | Empfangschef is the manager or chief receptionist at a hotel, not generally an administrator. |
| b2-Empörung-614 | lv | MEDIUM | SEMANTICS | Outrage • Revolt • Mutiny | Outrage | “Revolt” and “mutiny” are different German senses; Empörung means indignation or outrage. |
| b2-entbehren-616 | lv | MEDIUM | SEMANTICS | Do without • Endure • Lack | Do without • Lack | “Endure” is not a normal meaning of entbehren; it means to do without or lack. |
| b2-entfalten-623 | lv | MEDIUM | SEMANTICS | Unwind • Unfold • Develop • Unfold | Unfold • Develop • Expand | “Unwind” is generally entrollen; entfalten means to unfold, develop or expand. |
| b2-sich entfalten-624 | lv | MEDIUM | SEMANTICS | Open up • Loosen • Develop • Unfold | Open up • Develop • Unfold | “Loosen” is not the relevant reflexive sense; sich entfalten means to develop or unfold. |
| b2-entführen-626 | lv | MEDIUM | SEMANTICS | Take away • Kidnap | Abduct • Kidnap | “Take away” is too general and does not convey the sense of abducting or carrying someone off. |
| b2-entmutigen-637 | lv | MEDIUM | NATURALNESS | Take away courage | Discourage | “Take away courage” is a literal but unnatural translation; the normal verb is “discourage”. |
| b2-entnehmen-638 | lv | MEDIUM | SEMANTICS | Take • Take • Take out • Conclude | Take • Remove • Take out • Infer | The repeated “Take” loses distinct senses, and “infer” is more accurate than “conclude” here. |
| b2-entsagen-640 | lv | MEDIUM | SEMANTICS | Give up • Give up | Renounce • Give up | The two entries should distinguish the senses of renouncing or giving something up. |
| b2-entweichen-645 | lv | MEDIUM | SEMANTICS | Move away • Escape • Recede • Emanate | Move away • Escape • Recede • Leak away | “Emanate” means originate or flow out, whereas entweichen means escape or leak away. |
| b2-Erachten-660 | lv | MEDIUM | TRANSLATION | Thoughts • Insight | Opinion • Judgement | The English does not match Erachten, which denotes an opinion or judgement; the German form may need |
| b2-Erdtrabant-669 | lv | MEDIUM | NATURALNESS | Earth companion | Earth satellite | “Earth companion” is a literal, nonstandard rendering; the term means a satellite of the Earth. |
| b2-erhaben-676 | lv | MEDIUM | SEMANTICS | Relief • Convex • Great • Great • Lofty • Sublime • Excellent | Raised • Convex • Lofty • Sublime | “Relief” is a noun and “excellent” is not a standard sense of erhaben; some entries are overly gener |
| b2-Erkenntnis-681 | lv | MEDIUM | SEMANTICS | Cognition • Understanding | Insight • Understanding | “Cognition” refers to mental processes, while Erkenntnis usually means insight, realisation or knowl |
| b2-Erlass-683 | lv | MEDIUM | SEMANTICS | Order • Order • Decree • Dismissal | Order • Ordinance • Decree • Waiver | Erlass does not normally mean dismissal; it can mean a decree, ordinance or remission/waiver. |
| b2-erleiden-687 | lv | MEDIUM | SEMANTICS | Suffer • Endure • Endure • Be defeated | Suffer • Endure • Endure • Suffer defeat | Erleiden means to suffer or undergo something; “be defeated” is not a standalone meaning. |
| b2-erlöschen-688 | lv | MEDIUM | GRAMMAR | Extinguish • Extinguish • Cease to be valid • Expire | Go out • Die out • Cease to be valid • Expire | Erlöschen is intransitive; “extinguish” normally requires an object in English. |
| b2-ersticken-713 | lv | MEDIUM | SEMANTICS | Suffocate • Suffocate • Stifle • Oppress • Oppress • Suffocate • Suffocate | Suffocate • Smother • Stifle • Suppress • Suppress • Suffocate • Suffocate | “Oppress” means tyrannise or burden people; the figurative senses here are “suppress” or “stifle”. |
| b2-erweisen-721 | lv | MEDIUM | SEMANTICS | Show • Show • Do | Show • Demonstrate • Render | “Do” is too broad; erweisen means show/prove or render, especially in fixed expressions. |
| b2-Fahrdamm-752 | lv | MEDIUM | TRANSLATION | Drivable part of the street • Pavement | Carriageway • Roadway | The first phrase is unnatural, and pavement usually means a footpath in British English. |
| b2-fahrlässig-754 | lv | MEDIUM | SEMANTICS | Careless • Sloppy | Careless • Negligent | Sloppy usually describes untidy or poor work, not legal or harmful carelessness. |
| b2-Fallschirmturm-756 | lv | MEDIUM | TRANSLATION | Parachutist tower | Parachute tower | The tower is for parachute training; ‘parachutist tower’ is not the natural compound. |
| b2-Falltür-757 | lv | MEDIUM | NATURALNESS | Hatch • Door built into the floor | Hatch • Trapdoor | ‘Door built into the floor’ is understandable but unnatural; ‘trapdoor’ is the standard term. |
| b2-Fassung-769 | lv | MEDIUM | SEMANTICS | Framework • Envelope • Wording | Framework • Casing • Wording | ‘Envelope’ is not the usual translation for a physical casing or outer covering here. |
| b2-fassungslos-770 | lv | MEDIUM | SEMANTICS | Surprised • Shocked | Dumbfounded • Shocked | Fassungslos means unable to react or speak from shock, stronger than merely surprised. |
| b2-fechten-772 | lv | MEDIUM | GRAMMAR | Fencing | To fence | The German headword is a verb, so the English learner translation should also be a verb. |
| b2-Feingefühl-776 | lv | MEDIUM | SEMANTICS | Delicacy • Tact | Sensitivity • Tact | ‘Delicacy’ is ambiguous and does not naturally convey interpersonal sensitivity here. |
| b2-fernstudieren-779 | lv | MEDIUM | NATURALNESS | Study by correspondence | Study by distance learning | ‘Study by correspondence’ is dated and narrower than modern distance learning. |
| b2-festigen-782 | lv | MEDIUM | STUDY | Strengthen • Strengthen | Strengthen • Consolidate | The duplicate gloss is unhelpful; festigen also means consolidate or make firm. |
| b2-Finsternis-790 | lv | MEDIUM | STUDY | Darkness • Darkness • Eclipse | Darkness • Gloom • Obscurity | The first two glosses are duplicates, and standalone Finsternis is not normally ‘eclipse’. |
| b2-Lieferfirma-794 | lv | MEDIUM | NATURALNESS | Supplier company | Supplier | ‘Supplier company’ is redundant and unnatural; ‘supplier’ conveys the meaning directly. |
| b2-fleckig-799 | lv | MEDIUM | STUDY | Blotchy • Stained • Mottled • Dappled • Mottled | Blotchy • Stained • Mottled • Dappled • Spotted | The final gloss duplicates ‘Mottled’; ‘spotted’ provides a distinct common meaning. |
| b2-flimmern-801 | lv | MEDIUM | STUDY | Twinkle • Twinkle • Twinkle • Twinkle • Twinkle | Flicker • Shimmer • Glimmer • Sparkle • Twinkle | Repeated ‘Twinkle’ is unhelpful and omits the distinct meanings of flimmern. |
| b2-Flosse-803 | lv | MEDIUM | SEMANTICS | Flipper | Fin | Flosse most generally means ‘fin’; ‘flipper’ refers specifically to a limb-like swimming appendage. |
| b2-flüchtig-805 | lv | MEDIUM | STUDY | Fleeting • Superficial • Fleeting • Fleeting • Short-lived | Volatile • Superficial • Momentary • Fleeting • Short-lived | Three repeated equivalents obscure distinct German senses such as volatile and momentary. |
| b2-Flussbett-812 | lv | MEDIUM | TRANSLATION | Bed | Riverbed | Bed alone is too broad; Flussbett specifically means the bed of a river. |
| b2-Förster-819 | lv | MEDIUM | TRANSLATION | Ranger | Forester | Förster is a forester; ranger usually refers to a park or military ranger. |
| b2-Fremde-835 | lv | MEDIUM | SEMANTICS | Foreignness • Foreigner | Foreignness • Foreign land | Die Fremde means a foreign land or abroad; Foreigner is a person and reflects a different German nou |
| b2-fremdgehen-836 | lv | MEDIUM | NATURALNESS | Become unfaithful | Be unfaithful | The German verb normally means to be unfaithful; become unfaithful implies a change of state. |
| b2-fristlos-838 | lv | MEDIUM | SEMANTICS | Indefinite | Without notice | Fristlos, especially of dismissal or termination, means without notice, not merely indefinite. |
| b2-Fuhre-845 | lv | MEDIUM | SEMANTICS | Carriage • Cargo | Cartload • Load | Fuhre means a cartload or load; carriage normally denotes a vehicle or the act of transporting. |
| b2-Funkstation-851 | lv | MEDIUM | SEMANTICS | Broadcasting station | Radio station | Funkstation is a radio station generally; broadcasting station is a narrower type. |
| b2-Fürsorge-856 | lv | MEDIUM | SEMANTICS | Care • Guardianship | Care • Welfare | Fürsorge can mean care or welfare; guardianship is a legal relationship and usually Vormundschaft. |
| b2-Garnspule-869 | lv | MEDIUM | TRANSLATION | Coil • Coil | Spool • Spool | Garnspule specifically means a spool, especially a spool of yarn or thread. |
| b2-Gebärde-875 | lv | MEDIUM | SEMANTICS | Gesture • Feature | Gesture • Facial expression | Gebärde can mean a gesture or facial expression, but not a general feature. |
| b2-gedämpft-878 | lv | MEDIUM | TRANSLATION | Muffled • Silenced • Muffled | Muffled • Muted • Subdued | “Silenced” is too absolute, and the repeated “muffled” should represent distinct senses. |
| b2-Gegenrede-893 | lv | MEDIUM | TRANSLATION | Statement • Objection | Counterargument • Objection | Gegenrede is a reply or counterargument, not a general statement. |
| b2-Amtsgeheimnis-895 | lv | MEDIUM | NATURALNESS | Secret of office | Official secret | “Official secret” is the standard modern English collocation for Amtsgeheimnis. |
| b2-Geländelauf-900 | lv | MEDIUM | ORTHOGRAPHY | Cross country | Cross-country run | The compound adjective needs a hyphen, and “run” makes the meaning explicit. |
| b2-Geldumlauf-907 | lv | MEDIUM | NATURALNESS | Money circulation | Circulation of money | “Money circulation” is understandable but not natural modern English. |
| b2-Geltung-912 | lv | MEDIUM | SEMANTICS | Meaning • Significance | Validity • Significance | Geltung commonly means validity or applicability, not simply meaning. |
| b2-gemäß-915 | lv | MEDIUM | TRANSLATION | After • According to • Accordingly | According to • In accordance with • As appropriate | “After” is misleading here, while “accordingly” is usually an adverb rather than a direct equivalent |
| b2-gemessen-916 | lv | MEDIUM | SEMANTICS | Balanced • Considered | Measured • Deliberate | Gemessen means measured or restrained; “balanced” is not the core sense. |
| b2-Gemüt-920 | lv | MEDIUM | TRANSLATION | Character • Nature • Thoughts • Minds | Temperament • Disposition • Mind | Gemüt refers to temperament, disposition or mind; “thoughts” and plural “minds” are misleading. |
| b2-Genforscher-922 | lv | MEDIUM | NATURALNESS | Gene researcher | Genetic researcher | “Genetic researcher” is the natural English term for a researcher in genetics. |
| b2-Gerede-938 | enText | MEDIUM | SEMANTICS | Speaking • Speech • Vernacular • Gossip | Chatter • Talk • Gossip • Gossip | “Vernacular” means a language variety, not idle or widespread talk. |
| b2-Gerippe-940 | enText | MEDIUM | SEMANTICS | Skeleton • Body • Framework | Skeleton • Skeleton • Framework | “Body” does not normally translate Gerippe; the relevant sense is a skeleton or skeletal frame. |
| b2-Gesamtzahl-942 | enText | MEDIUM | TRANSLATION | Total | Total number | The German compound explicitly means the total number, not merely “total”. |
| b2-Geschehnis-945 | enText | MEDIUM | SEMANTICS | Event • Case • Incident | Event • Occurrence • Incident | “Case” usually means an instance or legal matter, whereas Geschehnis means an occurrence. |
| b2-Geschwätz-950 | enText | MEDIUM | SEMANTICS | Chattering • Lying • Chattering | Chatter • Idle talk • Gossip | Geschwätz means foolish or excessive talk; “lying” is not its direct meaning. |
| b2-Gesichtszug-957 | enText | MEDIUM | SEMANTICS | Feature | Facial feature | “Feature” alone is too broad; Gesichtszug specifically means a facial feature or trait. |
| b2-Gesinnung-958 | enText | MEDIUM | SEMANTICS | Beliefs • Mood | Beliefs • Attitude | Gesinnung can mean attitude or outlook; “mood” usually describes a temporary emotional state. |
| b2-Gestein-964 | enText | MEDIUM | NATURALNESS | The rock | Rock | The definite article is not part of the English headword and makes this dictionary translation unnat |
| b2-Gestell-965 | enText | MEDIUM | SEMANTICS | Rack • Strut • Chassis | Stand • Support • Chassis | A strut is a single supporting component; Gestell more generally means a stand, frame or support. |
| b2-Gestrüpp-966 | enText | MEDIUM | TRANSLATION | Bush | Thicket | Gestrüpp refers to dense undergrowth or a thicket, not normally one bush. |
| b2-gierig-982 | enText | MEDIUM | SEMANTICS | Eager • Covetous • Greedy | Greedy • Covetous • Avaricious | “Eager” is often positive and does not by itself convey the excessive desire implied by gierig. |
| b2-rachgierig-985 | enText | MEDIUM | GRAMMAR | Lust for revenge | Hungry for revenge | The English text is a noun phrase, while the German adjective describes someone hungry for revenge. |
| b2-Giftmüll-987 | enText | MEDIUM | NATURALNESS | Toxic wastes | Toxic waste | The standard uncountable English term is “toxic waste”, matching German Giftmüll. |
| b2-Gipsverband-989 | lv | MEDIUM | TRANSLATION | Plaster bandage | Plaster cast | The German term normally means a medical plaster cast, not merely a plaster bandage. |
| b2-Glashütte-993 | lv | MEDIUM | TRANSLATION | Glass factory | Glassworks | Glashütte specifically denotes a glassworks, rather than a generic glass factory. |
| b2-gleiten-999 | lv | MEDIUM | SEMANTICS | Glide • Soar | Glide | Gleiten means glide; soar is a different motion and is not a direct equivalent. |
| b2-Glied-1000 | lv | MEDIUM | NATURALNESS | Member • Limb • Chain member • Link | Member • Limb • Chain link • Link | A component of a chain is called a chain link, not a chain member. |
| b2-Glut-1005 | lv | MEDIUM | SEMANTICS | Glow • Glow • Great heat | Embers • Heat • Intense heat | Glut denotes glowing embers or intense heat; glow is not the best noun equivalent here. |
| b2-Goldwäscher-1013 | lv | MEDIUM | NATURALNESS | Gold washer | Gold panner | Gold panner is the natural English term for someone who washes gravel to find gold. |
| b2-Götzendienst-1019 | lv | MEDIUM | NATURALNESS | Serving an idol | Idolatry | Idolatry is the standard English noun for worship or service of idols. |
| b2-Grenzbezirk-1029 | lv | MEDIUM | TRANSLATION | Border area | Border district | Bezirk is a district or administrative area, more specific than the general term area. |
| b2-Grenzverkehr-1031 | lv | MEDIUM | TRANSLATION | Border traffic | Cross-border traffic | The usual meaning is traffic or movement across a border, not traffic located at a border. |
| b2-Grundrecht-1039 | lv | MEDIUM | GRAMMAR | Fundamental rights | Fundamental right | The German headword is singular, so the English headword should also be singular. |
| b2-Grundriss-1040 | lv | MEDIUM | SEMANTICS | Plan | Floor plan | Grundriss commonly means a floor plan or building plan; plan alone is too broad. |
| b2-Güte-1048 | lv | MEDIUM | SEMANTICS | Kindness • Quality • Benefit | Kindness • Quality • Goodness | Güte can mean goodness, but benefit is not the relevant sense here. |
| b2-gutheißen-1051 | enText | MEDIUM | NATURALNESS | Acknowledge as good | Approve • Endorse | The current wording is a literal, unnatural rendering; gutheißen means to approve or endorse. |
| b2-Hafenbecken-1055 | enText | MEDIUM | TRANSLATION | Port water area | Harbour basin | Port water area is awkward and does not name the standard geographical feature. |
| b2-Handelsflotte-1060 | enText | MEDIUM | SEMANTICS | Merchant navy | Merchant fleet | The direct term for Handelsflotte is merchant fleet; merchant navy refers more broadly to merchant s |
| b2-Heckklappe-1078 | enText | MEDIUM | NATURALNESS | Car rear trunk door | Tailgate | Tailgate is the standard modern British English term for a vehicle's rear door. |
| b2-Heilkunde-1081 | enText | MEDIUM | SEMANTICS | Treatment • Medicine | Medicine • Medical science | Heilkunde refers to the practice or science of medicine, not a specific treatment. |
| b2-Heilquelle-1082 | enText | MEDIUM | NATURALNESS | Source of healing | Healing spring | The standard English collocation for a therapeutic natural spring is healing spring. |
| b2-Heilpraktiker-1084 | enText | MEDIUM | SEMANTICS | Healer | Alternative practitioner | A Heilpraktiker is a German alternative practitioner, not simply any healer. |
| b2-Heimkehr-1086 | enText | MEDIUM | SEMANTICS | Returning home • To the homeland | Return home • Return to one's homeland | The second item omits the central meaning of returning. |
| b2-Heizkraftwerk-1088 | enText | MEDIUM | SEMANTICS | Thermal power plant | Combined heat and power plant | Heizkraftwerk specifically generates both heat and power, not merely thermal power. |
| b2-Heizöl-1089 | enText | MEDIUM | TRANSLATION | Liquid fuel • Fuel oil | Heating oil • Fuel oil | Liquid fuel is too broad; the specific term Heizöl is heating oil. |
| b2-Heldentat-1090 | enText | MEDIUM | SEMANTICS | Feat | Heroic deed | Feat is too general and does not convey the heroic meaning of Heldentat. |
| b2-herangehen-1095 | enText | MEDIUM | SEMANTICS | Get to work | Approach • Tackle | Get to work is only one context-specific interpretation; the verb generally means approach or tackle |
| b2-herb-1103 | enText | MEDIUM | TRANSLATION | Bitter • Sour • Sour | Bitter • Tart • Acrid | The final two entries are duplicated, and sour is not the best equivalent for the remaining senses. |
| b2-heucheln-1113 | enText | MEDIUM | SEMANTICS | To pretend • To pretend | Pretend • Be hypocritical | The two translations are duplicated; the second sense should convey hypocrisy. |
| b2-hierdurch-1115 | enText | MEDIUM | SEMANTICS | With that • With this | By that • By this | hierdurch means ‘by that/by this means’, not normally ‘with that/this’. |
| b2-Hilfsaktion-1116 | enText | MEDIUM | NATURALNESS | Aid action | Aid campaign | ‘Aid action’ is not a natural modern English collocation for an organised relief effort. |
| b2-hinsichtlich-1122 | enText | MEDIUM | SEMANTICS | Regarding • Due to | Regarding • With regard to | hinsichtlich expresses reference or relation, not causation as in ‘due to’. |
| b2-hinterziehen-1125 | enText | MEDIUM | NATURALNESS | Embezzle money • Not pay taxes | To embezzle money • To evade taxes | The second translation is an ungrammatical fragment and misses the established phrase ‘evade taxes’. |
| b2-hinüberfahren-1126 | enText | MEDIUM | SEMANTICS | To cross • To cross | To drive across • To run over | The duplicate translation loses the distinct senses of driving across and driving over someone or so |
| b2-Hirntumor-1127 | enText | MEDIUM | ORTHOGRAPHY | Brain tumor | Brain tumour | British English normally spells this medical term ‘tumour’. |
| b2-Hochverrat-1144 | enText | MEDIUM | SEMANTICS | Treason | High treason | The German term specifically denotes high treason, a more precise offence than general treason. |
| b2-Laie-1205 | en | MEDIUM | SEMANTICS | A dilettante | A layperson • A non-expert | “Laie” means a layperson or non-expert and is not necessarily a dilettante. |
| b2-Landenge-1209 | en | MEDIUM | NATURALNESS | Isthmus of land | Isthmus | “Isthmus of land” is redundant and unnatural; “isthmus” is the precise noun. |
| b2-latent-1217 | en | MEDIUM | SEMANTICS | Hidden • Imperceptible | Latent • Hidden | “Imperceptible” means unable to be perceived, not latent or potentially present but hidden. |
| b2-Laufmasche-1220 | en | MEDIUM | NATURALNESS | A stitch has come off the sock | A dropped stitch | The current text is an explanatory sentence, not the natural English noun equivalent. |
| b2-Leichtgewicht-1232 | en | MEDIUM | NATURALNESS | Light weight | Lightweight | As a noun for a person or category, the standard English form is the closed compound “lightweight”. |
| b2-leichtsinnig-1234 | en | MEDIUM | SEMANTICS | Frivolous | Reckless • Careless | “Leichtsinnig” usually means reckless or careless; “frivolous” has a different modern sense. |
| b2-leidlich-1236 | en | MEDIUM | NATURALNESS | Tolerable • Tolerable • Half good | Tolerable • Passable • Moderately good | “Half good” is not idiomatic English, and the second entry unnecessarily duplicates “tolerable”. |
| b2-Leuchtreklame-1243 | enText | MEDIUM | NATURALNESS | Light advertising | Illuminated advertising | “Light advertising” is not the normal English collocation for illuminated adverts. |
| b2-Liebesaffäre-1246 | enText | MEDIUM | NATURALNESS | Intimate connection | Love affair | “Intimate connection” is an unnatural and overly vague rendering of Liebesaffäre. |
| b2-liebkosten-1247 | enText | MEDIUM | STUDY | To caress • Caress | To caress • To fondle | The two English entries duplicate each other, and the second lacks the infinitive marker. |
| b2-liederlich-1248 | enText | MEDIUM | STUDY | Sloppy • Sloppy | Sloppy • Slovenly | The two English entries are identical; slovenly supplies the distinct second sense. |
| b2-Litfaßsäule-1253 | enText | MEDIUM | NATURALNESS | Poster pole | Advertising column | “Poster pole” is understandable but not the usual modern English term for this advertising structure |
| b2-Lustspiel-1271 | enText | MEDIUM | NATURALNESS | Comedy • Joke play | Comedy • Light comedy | “Joke play” is not an established English expression for a light comic stage work. |
| b2-Mahnschreiben-1281 | enText | MEDIUM | SEMANTICS | A reminder | A reminder letter | Mahnschreiben specifically denotes a written reminder or dunning letter, not merely a reminder. |
| b2-Marketing-1287 | enText | MEDIUM | SEMANTICS | Marketing • Trade | Marketing | The German word means marketing; “trade” is a different concept and an unsupported extra sense. |
| b2-Marktlücke-1288 | enText | MEDIUM | TRANSLATION | Niche market | Market gap | Marktlücke is an unfilled gap in the market, not a niche market itself. |
| b2-Massenware-1295 | enText | MEDIUM | SEMANTICS | Consumer goods | Mass-produced goods | Massenware refers to mass-produced, often standardized goods; consumer goods is broader. |
| b2-Matinée-1298 | enText | MEDIUM | SEMANTICS | Morning show | Matinee | A matinée is a daytime performance; “morning show” usually suggests a television programme. |
| b2-Meerbusen-1300 | enText | MEDIUM | NATURALNESS | Sea ​​bay | Gulf | “Sea bay” is not a natural English term, and the text contains stray invisible spacing. |
| b2-Meldefrist-1306 | enText | MEDIUM | TRANSLATION | Application deadline | Registration deadline | “Meldefrist” normally means a deadline for registering or reporting, not specifically applying. |
| b2-meutern-1309 | enText | MEDIUM | TRANSLATION | Rebel • Rebel | Mutiny • Rebel | The first English equivalent duplicates the second and misses the specific sense “mutiny”. |
| b2-Militär-1317 | enText | MEDIUM | TRANSLATION | Troops • Army | Military • Army | The German noun refers to the military or armed forces; “troops” is narrower and plural. |
| b2-Minderung-1321 | enText | MEDIUM | TRANSLATION | Diminishing | Reduction | The German noun means a reduction or decrease, whereas “diminishing” is a verb form or participle. |
| b2-minderwertig-1322 | enText | MEDIUM | SEMANTICS | Worthless | Inferior | “Minderwertig” usually means inferior or of low quality; “worthless” is considerably stronger. |
| b2-missfallen-1326 | enText | MEDIUM | GRAMMAR | Don't like | Displease | “Don't like” is a negative sentence fragment, not the verb equivalent needed for this infinitive car |
| b2-misstrauen-1329 | enText | MEDIUM | NATURALNESS | Not to trust | Distrust | “Distrust” is the standard concise verb equivalent; “not to trust” is an awkward negative phrase. |
| b2-mittels-1331 | enText | MEDIUM | NATURALNESS | With the help of something | By means of | “By means of” is the standard formal equivalent of the preposition mittels. |
| b2-mitwirken-1333 | enText | MEDIUM | NATURALNESS | Participate • Act together | Participate • Collaborate | “Act together” is a literal but unnatural equivalent in this sense; “collaborate” is idiomatic. |
| b2-Mitwisser-1334 | enText | MEDIUM | SEMANTICS | Co-conspirator | Accomplice | A Mitwisser is someone who knows about wrongdoing; “co-conspirator” adds a specific conspiracy sense |
| b2-nachdrücklich-1350 | enText | MEDIUM | TRANSLATION | Emphatic • Vigorous • Persuasive • Vigorously • Persuasively | Emphatic • Forceful • Persuasive • Forcefully • Persuasively | “Forceful” better matches the adjective sense than “vigorous”, with the corresponding adverb “forcef |
| b2-nachgehen-1351 | enText | MEDIUM | TRANSLATION | Follow • Find out | Follow up • Investigate | “Find out” is too general; the second sense means to investigate or look into something. |
| b2-Narkosearzt-1363 | enText | MEDIUM | NATURALNESS | Doctor anesthesiologist | Anaesthetist | The current phrase is awkward and uses American spelling; British English normally uses “anaesthetis |
| b2-Neuerscheinung-1376 | enText | MEDIUM | TRANSLATION | New • New edition | New release • New edition | “New” alone is not a suitable noun translation; “new release” conveys the standalone sense. |
| b2-Neuerung-1377 | enText | MEDIUM | SEMANTICS | An upgrade | An innovation | “Neuerung” means an innovation or new development, not specifically an upgrade. |
| b2-Notstand-1389 | enText | MEDIUM | NATURALNESS | Catastrophic state • State of emergency | Emergency situation • State of emergency | “Catastrophic state” is not a natural English equivalent for the first sense. |
| b2-Nutzeffekt-1391 | enText | MEDIUM | SEMANTICS | Efficiency ratio | Utility value | “Nutzeffekt” refers to usefulness or practical benefit; “efficiency ratio” is too narrowly technical |
| b2-Oberhand-1393 | enText | MEDIUM | TRANSLATION | Supremacy | The upper hand | The standard English equivalent of “die Oberhand” is “the upper hand”. |
| b2-obgleich-1395 | enText | MEDIUM | STUDY | Although although | Although | The same translation is repeated unnecessarily. |
| b2-observieren-1398 | enText | MEDIUM | SEMANTICS | Trace • Observe | Monitor • Observe | “Trace” means track or locate, whereas “observieren” means observe or monitor. |
| b2-Ökobauer-1402 | enText | MEDIUM | NATURALNESS | A farmer who produces ecologically clean agricultural products | An organic farmer | The current literal wording is cumbersome; “organic farmer” is the natural modern equivalent. |
| b2-Ölbohrung-1404 | enText | MEDIUM | TRANSLATION | Oil well | Oil drilling | “Ölbohrung” denotes the drilling operation or borehole, not the well itself. |
| b2-Ölpest-1407 | enText | MEDIUM | TRANSLATION | Water and coastal oil pollution | Oil spill | The natural English term for an oil pollution disaster is “oil spill”. |
| b2-Olympiasieger-1409 | enText | MEDIUM | NATURALNESS | Winner of the Olympic Games | Olympic champion | “Olympic champion” is the standard concise English term. |
| b2-Organempfänger-1413 | enText | MEDIUM | NATURALNESS | Transplant organ recipient | Organ transplant recipient | The compound is in the wrong order in English; “organ transplant recipient” is natural. |
| b2-Organspende-1415 | enText | MEDIUM | NATURALNESS | Donating an organ for transplantation | Organ donation | The current phrase is descriptive but awkward as a vocabulary equivalent; “organ donation” is standa |
| b2-Pacht-1422 | enText | MEDIUM | SEMANTICS | Rental | Lease | Pacht specifically means a lease, especially of land or a business, rather than rental in general. |
| b2-Panzerschrank-1427 | enText | MEDIUM | NATURALNESS | Safe • Iron cabinet | Safe • Armoured cabinet | Iron cabinet is not a natural modern term for this type of reinforced safe. |
| b2-Parteibuch-1429 | enText | MEDIUM | NATURALNESS | Party member card | Party membership card | Party membership card is the standard English collocation. |
| b2-Pater-1436 | enText | MEDIUM | NATURALNESS | A Catholic priest • Belonging to an order | A Catholic priest • A member of a religious order | The second item is an incomplete phrase and does not naturally describe a person. |
| b2-Pendelverkehr-1439 | enText | MEDIUM | NATURALNESS | Local commuter traffic | Commuter traffic | Local commuter traffic is awkward; commuter traffic is the standard term. |
| b2-pikiert-1451 | enText | MEDIUM | STUDY | Offended • Offended • Outraged | Offended • Hurt • Indignant | The duplicated entry reduces learning value and omits distinct nuances of pikiert. |
| b2-Plateau-1457 | enText | MEDIUM | SEMANTICS | Flat hill | Plateau | A plateau is a flat elevated area; flat hill is an imprecise and nonstandard definition. |
| b2-Porno-1459 | enText | MEDIUM | NATURALNESS | Work containing pornography | Pornographic work | The proposed wording is the natural English expression for a work containing pornography. |
| b2-prägnant-1465 | enText | MEDIUM | SEMANTICS | Vividly expressed | Concise and striking | Prägnant commonly means concise, clear and striking, not merely vividly expressed. |
| b2-prämieren-1467 | enText | MEDIUM | GRAMMAR | Reward | To award a prize | The English entry should be a verb in infinitive form and specifically means to award a prize. |
| b2-provisorisch-1476 | enText | MEDIUM | NATURALNESS | Provisional • Temporary • For a time | Provisional • Temporary • For the time being | For a time is awkward here; for the time being is the natural expression for a temporary arrangement |
| b2-Psychoterror-1478 | enText | MEDIUM | NATURALNESS | Psychoterror | Psychological terror | Psychoterror is not a standard modern English term; psychological terror is clearer and idiomatic. |
| b2-ranzig-1492 | enText | MEDIUM | NATURALNESS | Rancid • Bitter for cream • Fat • Butter | Rancid • Bitter (of cream, fat or butter) | “Bitter for cream • Fat • Butter” is ungrammatical and unnatural. |
| b2-Rechtsstaat-1502 | enText | MEDIUM | SEMANTICS | Rule of law country | Rule-of-law state | A Rechtsstaat is a state governed by law, not specifically a country described this way. |
| b2-Referenz-1507 | enText | MEDIUM | SEMANTICS | Recommendations | Reference | Referenz normally means reference, not recommendations. |
| b2-regellos-1509 | enText | MEDIUM | SEMANTICS | Irregular | Without rules | Regellos means lacking rules or order, rather than merely irregular. |
| b2-Relief-1520 | enText | MEDIUM | SEMANTICS | Terrain | Relief | Relief means raised or sculpted form, or landform elevation; terrain is too broad. |
| b2-Rüge-1535 | enText | MEDIUM | TRANSLATION | Scolding • Scolding | Reprimand • Rebuke | Rüge denotes a formal reprimand or rebuke; the repeated “scolding” is imprecise. |
| b2-Rüstung-1539 | enText | MEDIUM | STUDY | Armament • Armament | Armament • Armour | The duplicate loses the established second sense of Rüstung: protective armour. |
| b2-sämtlich-1547 | enText | MEDIUM | SEMANTICS | All [without exception] • In full force | All [without exception] • In full | “In full force” means with maximum strength, not completely or in their entirety. |
| b2-sanieren-1549 | enText | MEDIUM | TRANSLATION | To repair • Ek. make profitable | To repair • Econ. to make financially sound | The economic sense is to restore financial viability; the current second item is grammatically incom |
| b2-Sanitätsstelle-1550 | enText | MEDIUM | NATURALNESS | Medical point | Medical station | “Medical point” is not the normal English term for a medical or first-aid station. |
| b2-Satellit-1551 | enText | MEDIUM | SEMANTICS | Pol. satellite • Astr. companion | Political satellite • Astronomical satellite | In astronomy, “Satellit” means a satellite, not a companion; the political sense is a satellite stat |
| b2-sättigen-1552 | enText | MEDIUM | GRAMMAR | [good] feed • Feast • Chem. saturate | To feed [well] • To feast • Chem. to saturate | The first item is ungrammatical and “good” is the wrong adjective; verb entries should use the infin |
| b2-sausen-1554 | enText | MEDIUM | SEMANTICS | Rustle • Whistle • Swish • Swish | Rustle • Whistle • Rush • Roar | The final two senses are duplicated, and “sausen” can mean rushing or roaring depending on context. |
| b2-Schadenersatz-1556 | enText | MEDIUM | NATURALNESS | Material compensation for losses | Compensation for damage or loss | The current phrase is an awkward calque; “Schadenersatz” normally means compensation for damage or l |
| b2-Schaffen-1558 | enText | MEDIUM | SEMANTICS | Creativity • Creation • Work • Activity • Creation | Creative work • Creation • Work | The duplicate “Creation” and generic “Activity” do not accurately present the noun’s creative-work s |
| b2-Schalldämmung-1559 | enText | MEDIUM | TRANSLATION | Noise suppression | Sound insulation | “Schalldämmung” normally means sound insulation or soundproofing, rather than active noise suppressi |
| b2-schärfsichtig-1563 | enText | MEDIUM | NATURALNESS | With a sharp look • Observant | Keen-eyed • Observant | “With a sharp look” is not idiomatic English for someone with sharp or keen eyesight. |
| b2-Scheidewand-1570 | enText | MEDIUM | TRANSLATION | Septum | Partition wall | “Scheidewand” is a partition or dividing wall; “septum” is mainly an anatomical term. |
| b2-Schieber-1577 | enText | MEDIUM | SEMANTICS | Bolt • Arrow • Speculator | Bolt • Slider • Speculator | The relevant mechanical sense is a slider or sliding piece, not an arrow. |
| b2-schillern-1581 | enText | MEDIUM | GRAMMAR | Iridescent • Bathe in different colours | To shimmer • To gleam in different colours | The German item is a verb, but “iridescent” is an adjective and “bathe” is not idiomatic here. |
| b2-Schlagwort-1586 | enText | MEDIUM | NATURALNESS | Slogan • Apt word | Slogan • Catchword | “Apt word” is not a natural English collocation; “catchword” or “keyword” fits this sense. |
| b2-Schleudersitz-1587 | enText | MEDIUM | TRANSLATION | An airplane catapult seat | Aircraft ejection seat | The established English term is “ejection seat”; “catapult seat” is a literal, nonstandard rendering |
| b2-schreiten-1601 | enText | MEDIUM | GRAMMAR | Walking • Go | To stride • To walk | The English items use inconsistent non-infinitive forms; “schreiten” means to stride or walk. |
| b2-Bittschrift-1602 | enText | MEDIUM | SEMANTICS | A request | A petition | A Bittschrift is a formal written petition, not merely any request. |
| b2-Schutzfarbe-1608 | enText | MEDIUM | SEMANTICS | Protective paint | Protective colouring | The German term commonly denotes camouflage or protective coloration, not specifically paint. |
| b2-schwärmen-1613 | enText | MEDIUM | SEMANTICS | Get excited • Rave • Dream | Become enthusiastic • Rave • Enthuse | Dream is not the relevant sense; the verb means to enthuse or rave about something. |
| b2-Schwarzarbeit-1614 | enText | MEDIUM | NATURALNESS | Illegal work for which no taxes are paid | Undeclared work | The current wording is literal and awkward; undeclared work is the standard modern term. |
| b2-Schwarze-1615 | enText | MEDIUM | NATURALNESS | A person with black skin colour | A Black person | The current phrase is awkward and unnecessarily describes skin colour rather than using modern Engli |
| b2-Schwebebahn-1617 | enText | MEDIUM | NATURALNESS | Suspension [railway]. | Suspension railway | The brackets and full stop are not natural English; suspension railway is the established term. |
| b2-Schwerathletik-1620 | enText | MEDIUM | TRANSLATION | Sp. weightlifting | Strength athletics | The abbreviation is unexplained, and weightlifting is narrower than Schwerathletik. |
| b2-schwerfällig-1621 | enText | MEDIUM | SEMANTICS | Heavy • Bulky | Cumbersome • Sluggish | The German adjective commonly describes awkward movement or behaviour, not simply weight or size. |
| b2-Seemacht-1625 | enText | MEDIUM | NATURALNESS | Sea ​​[great] power | Naval power | The bracketed form is unnatural; naval power is the standard English equivalent. |
| b2-Seuchenherd-1642 | enText | MEDIUM | NATURALNESS | The source of the epidemic | Source of infection | Source of infection is the natural English collocation for Seuchenherd. |
| b2-siegreich-1644 | enText | MEDIUM | NATURALNESS | Crowned with victories | Victorious • Triumphant | The current expression is an unnatural literal rendering; these are standard English equivalents. |
| b2-solidarisch-1654 | enText | MEDIUM | NATURALNESS | Solidary | In solidarity | Solidary exists but is rare and unnatural in modern English; in solidarity is idiomatic. |
| b2-Spuk-1683 | enText | MEDIUM | ORTHOGRAPHY | Specter • Ghost • Apparition | Spectre • Ghost • Apparition | “Spectre” is the standard British English spelling; “specter” is chiefly American. |
| b2-starren-1694 | enText | MEDIUM | SEMANTICS | Look closely • Glare | Stare • Gaze fixedly | “Look closely” does not convey the fixed, intense gaze of starren; “glare” adds an angry implication |
| b2-Steckbrief-1699 | enText | MEDIUM | NATURALNESS | Description of the wanted person in the police | Wanted-person description • Wanted poster | The current phrase is awkward and unidiomatic; English uses “wanted-person description” or “wanted p |
| b2-Tagebau-1721 | enText | MEDIUM | TRANSLATION | Open mining of minerals | Open-pit mining | The standard English term for Tagebau is “open-pit mining”; the current phrase is unnatural. |
| b2-tagen-1725 | enText | MEDIUM | TRANSLATION | Hold a sitting • Session | Hold a sitting • Hold a session | The second item is a noun, not a translation of the verb. |
| b2-Totalschaden-1738 | enText | MEDIUM | TRANSLATION | Damage to the vehicle that cannot be repaired after the accident | Total loss | The current text is a cumbersome definition rather than the standard English term. |
| b2-Trabant-1742 | enText | MEDIUM | NATURALNESS | Astr. companion | Astronomical satellite | “Astronomical satellite” is the standard term; “astronomical companion” is not natural here. |
| b2-Trägerrakete-1744 | enText | MEDIUM | TRANSLATION | Launcher | Carrier rocket | “Launcher” is too general; the German term specifically means a carrier rocket. |
| b2-treulos-1751 | enText | MEDIUM | SEMANTICS | Unreliable • Untrustworthy | Disloyal • Unfaithful | “Treulos” describes lack of loyalty or fidelity, not general unreliability. |
| b2-trügerisch-1758 | enText | MEDIUM | SEMANTICS | Deceitful • Deceitful | Deceitful • Deceptive | The two English equivalents are duplicated; “deceptive” supplies the distinct second sense. |
| b2-überbringen-1761 | enText | MEDIUM | GRAMMAR | Deliver a message • A greeting • A letter • A gift | Deliver a message • Deliver greetings • Deliver a letter • Deliver a gift | Only the first item is phrased as a verb phrase; the remaining items are noun fragments. |
| b2-überhören-1769 | enText | MEDIUM | GRAMMAR | Not [to] hear because of carelessness • Pretend not to hear | Fail to hear through carelessness • Pretend not to hear | The bracketed infinitive is not suitable learner English, and the first item is awkwardly phrased. |
| b2-überstehen-1779 | enText | MEDIUM | NATURALNESS | Endure • Endure trouble | Endure • Withstand difficulties | The repeated wording is unnatural; the second sense concerns surviving difficulties. |
| b2-überwältigen-1782 | enText | MEDIUM | SEMANTICS | Overcome • Beat | Overwhelm • Overpower | The core meanings are “overwhelm” and “overpower”; “beat” is too informal and broad. |
| b2-Umbruch-1786 | enText | MEDIUM | SEMANTICS | A big change in politics | A major upheaval | The German noun means a major upheaval or radical change; the current wording is too narrow. |
| b2-umdenken-1787 | enText | MEDIUM | SEMANTICS | Change opinion depending on the situation | Change one's way of thinking | “Umd denken” means to rethink or change one's way of thinking, not to change opinions situationally. |
| b2-Umfeld-1789 | enText | MEDIUM | GRAMMAR | Environment social • Political | Social environment • Political environment | The current phrases have incorrect English word order and inconsistent capitalisation. |
| b2-umschulen-1799 | enText | MEDIUM | NATURALNESS | To teach people with one job another job • To retrain | To train people for a different job • To retrain | The first phrase is unidiomatic English; people are trained for a different job. |
| b2-umsiedeln-1802 | enText | MEDIUM | SEMANTICS | Be forcibly transferred to another place of residence | Relocate • Resettle | The German verb means to relocate or resettle; it does not inherently imply force. |
| b2-unanständig-1808 | enText | MEDIUM | SEMANTICS | Impolite • Misbehaved | Impolite • Indecent | “Unanständig” commonly means indecent or improper; “misbehaved” is not the appropriate adjective her |
| b2-unbebaut-1811 | enText | MEDIUM | NATURALNESS | Uncultivated for land • Unbuilt | Uncultivated • Unbuilt | “Uncultivated for land” is not natural English; “uncultivated” already applies to land. |
| b2-unentbehrlich-1823 | enText | MEDIUM | SEMANTICS | Necessary | Indispensable | “Unentbehrlich” means indispensable or essential, which is stronger than merely “necessary”. |
| b2-unterdrücken-1836 | enText | MEDIUM | SEMANTICS | Suppress • Suppress | Suppress • Oppress | The second sense is “oppress”; repeating “suppress” loses the distinction between the German senses. |
| b2-Untergang-1838 | enText | MEDIUM | SEMANTICS | Decline • Decline • Demise • Collapse | Sunset • Decline • Demise • Collapse | “Untergang” can mean sunset as well as decline or downfall; the current list omits that sense. |
| b2-Unterlage-1843 | enText | MEDIUM | SEMANTICS | Permanent • Mat • Pad • Support • Data • Documentation | Base • Mat • Pad • Support • Documents • Documentation | “Permanent” is unrelated; “Unterlage” can mean a base, support or documents. |
| b2-unterlassen-1844 | en | MEDIUM | NATURALNESS | To stop doing something • Not to do | To stop doing something • To refrain from doing something | “Not to do” is unnatural and does not clearly express the sense of refraining or omitting. |
| b2-Unterstellung-1847 | en | MEDIUM | SEMANTICS | Slander | Insinuation • Allegation | “Unterstellung” usually means an insinuation or allegation; “slander” is a narrower, defamatory sens |
| b2-unterweisen-1850 | en | MEDIUM | SEMANTICS | Show • Instruct | Teach • Instruct | “Show” is too broad; the verb specifically means to teach or instruct. |
| b2-unüberlegt-1854 | en | MEDIUM | STUDY | Reckless • Reckless | Thoughtless • Reckless | The two English entries are duplicated; “unüberlegt” also means thoughtless or ill-considered. |
| b2-unwillkürlich-1858 | en | MEDIUM | STUDY | Unwitting • Unintentional • Unwitting | Involuntary • Unintentional • Unconscious | The first and third entries are duplicated, and “involuntary” is the key translation. |
| b2-üppig-1861 | en | MEDIUM | SEMANTICS | Abundant • Plump | Abundant • Lush | “Plump” normally describes a person or body; üppig commonly means lush or luxuriant here. |
| b2-Urheber-1862 | en | MEDIUM | STUDY | Initiator • Initiator • Author | Originator • Initiator • Author | The first two English entries are duplicated; “originator” supplies the missing sense. |
| b2-Urkunde-1864 | en | MEDIUM | SEMANTICS | Document • Article | Document • Certificate | “Article” is not the usual meaning; an Urkunde is a formal document or certificate. |
| b2-Ursprung-1865 | en | MEDIUM | STUDY | Origin • Origin • [pre]beginning | Origin • Source • Beginning | The first two entries are duplicated, and “[pre]beginning” is not natural English. |
| b2-Verdruss-1877 | en | MEDIUM | TRANSLATION | Dislike • Disappointment • Annoyance | Annoyance • Vexation • Resentment | “Dislike” and “disappointment” do not capture the usual sense of irritation or vexation. |
| b2-Verfahren-1884 | en | MEDIUM | STUDY | behaviour • behaviour • Technique • Method • Jur. process • Case | Behaviour • Conduct • Technique • Method • Legal proceedings • Case | “Behaviour” is duplicated, and “Jur.” is an unnecessary source abbreviation in the English field. |
| b2-Verfall-1885 | en | MEDIUM | STUDY | Collapse • Decline • Decline | Collapse • Decline • Decay | The second and third entries are duplicated; “decay” expresses the missing sense. |
| b2-verfallen-1886 | en | MEDIUM | STUDY | Collapse • Collapse • Decline • Sink | Collapse • Crumble • Decline • Decay | “Collapse” is duplicated, while “sink” is not the best equivalent for the listed decay and decline s |
| b2-Verfasser-1887 | en | MEDIUM | SEMANTICS | Composer • Author | Writer • Author | “Composer” usually refers to a music composer; Verfasser means a writer or author of a text. |
| b2-verführen-1890 | en | MEDIUM | STUDY | Seduce • Seduce | Seduce • Tempt | The two English entries are duplicated; the verb also means to tempt. |
| b2-vergeblich-1891 | en | MEDIUM | STUDY | Vain • Vain | In vain • Futile | The two English entries are duplicated, and “in vain” is the common translation for actions or attem |
| b2-verheeren-1897 | en | MEDIUM | SEMANTICS | To ruin | To devastate • To ravage | “Ruin” is possible but understates the strong sense of causing widespread destruction. |
| b2-Verlauf-1903 | en | MEDIUM | STUDY | Progress • Progress | Course • Development | The two English entries are duplicated; Verlauf commonly means course or development. |
| b2-Vermerk-1907 | enText | MEDIUM | TRANSLATION | Note • Mark | Note • Annotation | A Vermerk is a note or annotation, not normally a mark. |
| b2-Verschluss-1914 | enText | MEDIUM | NATURALNESS | Closing • Lock | Closure • Lock | Closing is not the usual noun for a physical Verschluss; closure or fastener is more natural. |
| b2-verkümmern-1919 | enText | MEDIUM | SEMANTICS | To decline | To wither | Verkümmern specifically means to wither or atrophy, especially through lack of care. |
| b2-verkünden-1920 | enText | MEDIUM | STUDY | Announce • Announce | Announce • Proclaim | The two English entries duplicate each other; proclaim captures the second sense. |
| b2-vermitteln-1926 | enText | MEDIUM | SEMANTICS | Mediate • Procure • Promote | Mediate • Arrange • Convey | Vermitteln commonly means mediate, arrange, or convey; promote is not the usual equivalent here. |
| b2-verspielen-1942 | enText | MEDIUM | SEMANTICS | Play • Lose | Play away • Lose | Verspielen means play away or squander, not simply play. |
| b2-verständig-1944 | enText | MEDIUM | SEMANTICS | Sane • Sensible | Reasonable • Sensible | Sane usually concerns mental health; verständig means reasonable or sensible. |
| b2-vertagen-1950 | enText | MEDIUM | SEMANTICS | Postpone • Put down | Postpone • Adjourn | Vertagen means postpone or adjourn; put down is not equivalent. |
| b2-verwirren-1960 | enText | MEDIUM | STUDY | To confuse • Confuse • Confuse | To confuse • To entangle • To bewilder | The repeated translations do not distinguish the listed senses and are inconsistent in form. |
| b2-vollzählig-1982 | enText | MEDIUM | NATURALNESS | Existing in full | Complete in number; all present | “Existing in full” is not idiomatic English for people or items being complete in number. |
| b2-voraussetzen-1988 | enText | MEDIUM | SEMANTICS | Require • Be a prerequisite | Require • Presuppose | “Be a prerequisite” is the reverse relation; the verb means to require or presuppose something. |
| b2-Vorbehalt-1989 | enText | MEDIUM | TRANSLATION | Condition | Reservation • Proviso | The usual noun senses are “reservation” or “proviso”, rather than simply “condition”. |
| b2-vordringen-1995 | enText | MEDIUM | NATURALNESS | Break forward | Advance | “Break forward” is not a natural English collocation for moving or pushing forward. |
| b2-vornherein-2001 | enText | MEDIUM | TRANSLATION | At the very beginning | From the outset | “From the outset” better captures the fixed adverbial meaning of vornherein. |
| b2-Vorspiel-2004 | enText | MEDIUM | SEMANTICS | Prologue • Prelude • Overture | Foreplay • Prelude • Overture | The common meaning “foreplay” is missing; “prologue” is a less central equivalent here. |
| b2-Vorstand-2006 | enText | MEDIUM | TRANSLATION | Board • Boss • Management • Boss | Board of directors • Management | “Boss” is not a standard equivalent of Vorstand; it usually denotes a board or management body. |
| b2-Vorstrafe-2007 | enText | MEDIUM | TRANSLATION | Previous criminal record | Previous conviction | Vorstrafe refers to a previous conviction or prior sentence, not the whole criminal record. |
| b2-Wahlkampf-2022 | enText | MEDIUM | NATURALNESS | Election battle | Election campaign | The standard modern English collocation is “election campaign”, not “election battle”. |
| b2-wahren-2025 | enText | MEDIUM | TRANSLATION | Save | Preserve | Wahren means to preserve, maintain or uphold; “save” usually conveys a different sense. |
| b2-Wegstrecke-2039 | enText | MEDIUM | TRANSLATION | Road section • Piece | Route • Distance | “Piece” is not a meaning of Wegstrecke; the word refers to a route or distance travelled. |
| b2-Werktätige-2057 | enText | MEDIUM | NATURALNESS | The working one | Working person • Worker | “The working one” is unnatural and does not function as a normal English noun. |
| b2-Wettrennen-2062 | enText | MEDIUM | STUDY | Race • Race | Race • Competition | The two English glosses are duplicated and fail to provide distinct study equivalents. |
| b2-wiedergeben-2073 | enText | MEDIUM | STUDY | Give • Reproduce • Reproduce | Give back • Reproduce • Render | “Give” omits the separable meaning “give back”, and the final two glosses are duplicated. |
| b2-winden-2077 | enText | MEDIUM | STUDY | Twist • Twist • Braid | Twist • Wind • Braid | The first two glosses are duplicated; “wind” is the relevant distinct verb. |
| b2-zollfrei-2080 | enText | MEDIUM | NATURALNESS | Free from customs | Duty-free | “Duty-free” is the standard English collocation for goods exempt from customs duty. |
| b2-zürnen-2088 | enText | MEDIUM | GRAMMAR | Getting angry | To be angry | The English gerund phrase does not match the German infinitive entry or work as a dictionary gloss. |
| b2-zusammenfügen-2092 | enText | MEDIUM | SEMANTICS | To connect | To join together | The German verb specifically means joining parts together; “connect” is broader and less precise. |
| b2-zusammenlegen-2093 | enText | MEDIUM | TRANSLATION | Put • Put [together] | Put together • combine | “Put” alone is incomplete, and the two English equivalents are unnecessarily repetitive. |
| b2-zuschneiden-2094 | enText | MEDIUM | SEMANTICS | To cut | To cut to size • trim | Zuschneiden means cutting material to a particular size or shape, not cutting in general. |
| b2-zuströmen-2095 | enText | MEDIUM | GRAMMAR | Flows in | To flow in | The German entry is an infinitive; “flows in” is a finite third-person form. |
| b2-zuteilen-2096 | enText | MEDIUM | TRANSLATION | Assign • Assign | Allocate • assign | The two senses are duplicated; zuteilen can mean allocating or assigning something. |
| b2-sich-abfinden | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-abwenden | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-befassen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-begnuegen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-bemaechtigen | study.explanation | MEDIUM | GRAMMAR | Sich bemächtigen is used in modern German with the possessive form without a preposition. | Sich bemächtigen is used in modern German with the genitive case, without a preposition. | “Possessive form” is inaccurate English grammar terminology here; the construction takes the genitiv |
| b2-sich-bemaechtigen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-berufen | study.translation | MEDIUM | SEMANTICS | Refer to | Invoke | For sich auf etwas berufen, “invoke” or “appeal to” is more precise than the general “refer to”. |
| b2-sich-berufen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-beschraenken | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-betaetigen | study.translation | MEDIUM | SEMANTICS | Operate • Participate | Engage in • Participate in | “Operate” is not the usual sense of sich betätigen, and “participate” normally takes “in”. |
| b2-sich-betaetigen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-einlassen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-einpraegen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, German Rektion is conventionally translated as “government”, not “management”. |
| b2-sich-einschleichen | study.explanation | MEDIUM | GRAMMAR | Sich einschleichen requires the definite preposition in + ko?. | Sich einschleichen takes the fixed preposition in + the accusative. | “Definite preposition” is incorrect terminology, and ko? is a Latvian remnant. |
| b2-sich-einschraenken | study.explanation | MEDIUM | GRAMMAR | Sich einschränken requires the definite preposition auf + ko?. | Sich einschränken takes auf + the accusative when meaning ‘limit oneself to something’. | The terminology is incorrect, the case marker is Latvian, and the sense needs specification. |
| b2-sich-empfehlen | study.explanation | MEDIUM | GRAMMAR | Sich empfehlen requires the definite preposition zu + kam?. | Sich empfehlen takes the fixed preposition zu + the dative. | “Definite preposition” is incorrect terminology, and kam? is a Latvian remnant. |
| b2-sich-empören | study.translation | MEDIUM | SEMANTICS | Get angry • Revolt | Be outraged • Rebel | Get angry is too weak, while revolt is not the usual modern meaning of sich empören. |
| b2-sich-empören | study.explanation | MEDIUM | GRAMMAR | Sich empören requires the definite preposition über + ko?. | Sich empören takes the fixed preposition über + the accusative. | The terminology is incorrect, and ko? is a Latvian remnant. |
| b2-sich-enthalten | study.explanation | MEDIUM | GRAMMAR | Sich enthalten requires the definite preposition von + kam?. | Sich enthalten takes the fixed preposition von + the dative. | The terminology is incorrect, and kam? is a Latvian remnant. |
| b2-sich-entledigen | study.rektion | MEDIUM | GRAMMAR | + possessive form | + the genitive case | The construction uses the genitive case, not a possessive form as an English grammatical category. |
| b2-sich-entledigen | study.explanation | MEDIUM | GRAMMAR | Sich entledigen is used in modern German with the possessive form without a preposition. | Sich entledigen is used in modern German with a genitive object and no preposition. | Genitive object is the accurate grammatical description; possessive form is misleading. |
| b2-sich-entledigen | study.forms | MEDIUM | GRAMMAR | + possessive form | + the genitive case | The construction uses the genitive case, not a possessive form as an English grammatical category. |
| b2-sich-entrüsten | study.translation | MEDIUM | SEMANTICS | Get angry • Revolt | Be outraged • Be indignant | The German verb means express or feel indignation; revolt is a different modern sense. |
| b2-sich-entrüsten | study.explanation | MEDIUM | GRAMMAR | Sich entrüsten requires the definite preposition über + ko?. | Sich entrüsten takes the fixed preposition über + the accusative. | The terminology is incorrect, and ko? is a Latvian remnant. |
| b2-sich-entsinnen | study.rektion | MEDIUM | GRAMMAR | + possessive form | + the genitive case | The construction uses the genitive case, not a possessive form as an English grammatical category. |
| b2-sich-entsinnen | study.explanation | MEDIUM | GRAMMAR | Sich entsinnen is used in modern German with the possessive form without a preposition, for example: | Sich entsinnen is used in modern German with a genitive object and no preposition, for example: Ich  | Genitive object is the accurate grammatical description; possessive form is misleading. |
| b2-sich-entsinnen | study.forms | MEDIUM | GRAMMAR | + possessive form | + the genitive case | The construction uses the genitive case, not a possessive form as an English grammatical category. |
| b2-sich-erbarmen | study.explanation | MEDIUM | GRAMMAR | Sich erbarmen requires the definite preposition über + ko?. | Sich erbarmen takes the fixed preposition über + the accusative. | The terminology is incorrect, and ko? is a Latvian remnant. |
| b2-sich-erniedrigen | study.translation | MEDIUM | GRAMMAR | Humble yourself | To humble yourself | The English is an imperative; the German entry is an infinitive. |
| b2-sich-erniedrigen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-erregen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-erweisen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-fassen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-fuegen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-genieren | study.translation | MEDIUM | NATURALNESS | To be ashamed | To feel embarrassed | To feel embarrassed is the more natural modern equivalent of sich genieren. |
| b2-sich-genieren | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-gesellen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-gestalten | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-sich-grauen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | Government is the standard English term for the grammatical concept Rektion. |
| b2-haube | study.examples[2].en | MEDIUM | NATURALNESS | He opens the hood of the car. | He opens the bonnet of the car. | Bonnet is the standard British English term for a car's hood. |
| b2-sich-herausbilden | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, Rektion is normally labelled “government” or “valency”, not “management”. |
| b2-sich-heraushalten | study.translation | MEDIUM | NATURALNESS | Keep away from | To stay away from | The translation should represent the reflexive verb and use an infinitive consistent with the card f |
| b2-sich-heraushalten | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, Rektion is normally labelled “government” or “valency”, not “management”. |
| b2-sich-herausstellen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, Rektion is normally labelled “government” or “valency”, not “management”. |
| b2-sich-hervortun | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, Rektion is normally labelled “government” or “valency”, not “management”. |
| b2-sich-hingeben | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, Rektion is normally labelled “government” or “valency”, not “management”. |
| b2-hoch-study | study.translation | MEDIUM | NATURALNESS | Toast "long live!" | A toast ('long live!') | “Toast” is awkward as a standalone translation here; the noun sense is “a toast”. |
| b2-hochwasser | study.comparison[1].meaning | MEDIUM | SEMANTICS | Flood (specific) | Flooding; inundation | “Specific” does not explain the contrast; Überschwemmung refers to flooding or inundation, often a c |
| b2-nachdruck | study.examples[1].en | MEDIUM | SEMANTICS | She demanded an answer. | She insisted on an answer. | The current version conveys demand but loses the source's explicit sense of insistence. |
| b2-nachdruck | study.examples[3].en | MEDIUM | NATURALNESS | This book is already in reprint. | This book has already been reprinted. | “In reprint” is not a natural modern English expression in this sentence. |
| b2-sich-paaren | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | In grammar, Rektion is normally labelled “government” or “valency”, not “management”. |
| b2-sich-revanchieren | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sich-scheren | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sofern | study.examples[0].en | MEDIUM | GRAMMAR | I come when i have time. | I come if I have time. | “I” must be capitalized, and “if” better matches sofern in this conditional sentence. |
| b2-sich-vereinigen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sich-versehen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sich-versoehnen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sich-verstellen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sich-verwundern | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-sich-widersetzen | study.formsLabel | MEDIUM | TRANSLATION | Management: | Government: | “Rektion” in grammatical terminology is translated as “government”, not “management”. |
| b2-zuweisen | study.translation | MEDIUM | SEMANTICS | Assign • Assign | Assign • Allocate | The two English equivalents are duplicated; allocate better reflects assigning funds or resources. |
| b2-zuweisen | study.explanation | MEDIUM | NATURALNESS | Main idea: zuweisen means to officially assign or assign—a task, role, resource, or money to a speci | Main idea: zuweisen means to officially assign or allocate—a task, role, resource, or money—to a spe | “Assign or assign” is repetitive; allocate is the appropriate alternative for resources or money. |
| b2-zuweisen | study.important.text | MEDIUM | NATURALNESS | zuweisen = to assign or assign officially. Perfect: assigned. Divisible: weise ... zu. | zuweisen = to officially assign or allocate. Perfect: zugewiesen. Divisible: weise ... zu. | The translation repeats “assign” and incorrectly translates the German perfect participle as English |
| b2-zuwider | study.translation | MEDIUM | SEMANTICS | Against • Contrary to • Dislike | Against • Contrary to • Be distasteful to | As a standalone equivalent, “dislike” reverses the usual meaning of zuwider sein. |
| b2-aendern | study.translation | MEDIUM | SEMANTICS | Change • Correct | Change • Alter | ändern means change or alter; “correct” normally corresponds to korrigieren, not ändern. |
| b2-bieten | study.examples[1].lv | MEDIUM | ORTHOGRAPHY | Can i offer you something | Can I offer you something? | The pronoun I must be capitalised, and the direct question needs a question mark. |
| b2-anbieten | study.explanation | MEDIUM | SEMANTICS | Main idea: anbieten means to actively offer someone a favour, a drink, a job, or a service. Splittab | Main idea: anbieten means to actively offer someone help, a drink, a job, or a service. Splittable v | Palīdzību means help here; “offer someone a favour” changes the sense to doing a favour for them. |
| b2-anbieten | study.examples[1].lv | MEDIUM | ORTHOGRAPHY | Can i offer you something | Can I offer you something? | The pronoun I must be capitalised, and the direct question needs a question mark. |
| b2-fordern | study.examples[0].lv | MEDIUM | SEMANTICS | She asks for more money. | She demands more money. | In this context prasa translates the forceful sense of fordern: demands, rather than merely asks for |
| b2-fordern | study.examples[4].lv | MEDIUM | ORTHOGRAPHY | To demand • Förden | To demand • fördern | The German comparison word is misspelled: fördern requires r after fö. |
| b2-angebracht-18 | enText | LOW | SEMANTICS | Suitable • Suitable | Suitable • Appropriate | The two German senses are repeated in English; “appropriate” better represents the second sense. |
| b2-anbremsen-26 | enText | LOW | GRAMMAR | Start braking | To start braking | The entry is an infinitive, so the English translation should include “to” for consistent verb repre |
| b2-abscheulich-57 | enText | LOW | SEMANTICS | Disgusting • Disgusting | Disgusting • Revolting | The two German equivalents are repeated; “revolting” provides a distinct natural equivalent for the  |
| b2-abweisen-74 | enText | LOW | STUDY | Reject • Reject | Reject • Turn away | The duplicate obscures the distinct sense of turning someone away or rebuffing them. |
| b2-ausströmen-111 | enText | LOW | TRANSLATION | Ooze • Emanate • Radiate | Flow out • Emanate • Radiate | Ooze implies slow, viscous seepage, while ausströmen generally means to flow or stream out. |
| b2-auswerfen-118 | enText | LOW | STUDY | To throw out • To throw out | To throw out • To eject | The duplicate loses the useful distinction between throwing something out and ejecting it. |
| b2-barhäuptig-134 | lv | LOW | NATURALNESS | With a bare head | Bareheaded | Bareheaded is the natural English adjective corresponding to the German adjective. |
| b2-Betäubung-220 | lv | LOW | ORTHOGRAPHY | Stunning • Stupor • Narcosis • Anesthesia | Stunning • Stupor • Narcosis • Anaesthesia | Anaesthesia is the standard British spelling required for this English target. |
| b2-blödsinnig-271 | lv | LOW | STUDY | Insane • Foolish • Foolish • Stupid | Insane • Idiotic • Foolish • Stupid | Two glosses are duplicated, omitting the distinct sense idiotic. |
| b2-brillant-303 | lv | LOW | STUDY | Excellent • Excellent | Brilliant • Excellent | The two English glosses are duplicated; brilliant is the direct adjective equivalent. |
| b2-brüten-304 | lv | LOW | NATURALNESS | To brood • Constantly thinking about something | To brood • To ponder constantly | The second gloss is a sentence fragment and is less natural as a dictionary gloss. |
| b2-Bürde-318 | lv | LOW | STUDY | Burden • Burden | Burden | The same English item is duplicated unnecessarily. |
| b2-Chorleiter-331 | lv | LOW | NATURALNESS | Choir master | Choirmaster | “Choirmaster” is the standard modern English compound for a choir director. |
| b2-Dachziegel-337 | lv | LOW | SEMANTICS | Tile | Roof tile | “Tile” is too broad; Dachziegel specifically means a tile used on a roof. |
| b2-Dämmerung-342 | lv | LOW | STUDY | Twilight • Twilight • Dawn • Dawn | Twilight • Dawn | Both English translations are duplicated unnecessarily. |
| b2-Darbietung-348 | lv | LOW | STUDY | Performance • Performance | Performance | The same English translation is duplicated unnecessarily. |
| b2-Darstellung-353 | lv | LOW | STUDY | Depiction • Depiction • Outline | Depiction • Representation • Outline | The first two English entries are needlessly duplicated and omit the representation sense. |
| b2-Dasein-354 | lv | LOW | STUDY | Existence • Existence | Existence | The same English translation is duplicated unnecessarily. |
| b2-deinerseits-368 | lv | LOW | NATURALNESS | From your side | On your part | “From your side” is understandable but is an unnatural calque in modern British English. |
| b2-derartig-380 | lv | LOW | NATURALNESS | Such • Such • The like | Such • Such • Of that kind | “The like” is incomplete and unnatural without “and”; “of that kind” is a clear equivalent. |
| b2-Dezernat-387 | lv | LOW | NATURALNESS | Department in the police | Police department | “Police department” is the natural English collocation. |
| b2-dornig-419 | lv | LOW | NATURALNESS | Prickly • Prickly | Thorny • Prickly | The two English items are duplicated; “thorny” captures the distinct sense of covered with thorns. |
| b2-ehrenvoll-512 | enText | LOW | ORTHOGRAPHY | Honorable • Honorable | Honourable | British English spells “honourable” with “ou”; the duplicate can be consolidated. |
| b2-Ehrung-516 | enText | LOW | ORTHOGRAPHY | Honoring • Ceremony of honoring | Honouring • Ceremony of honouring | British English uses “honouring”, not the US spelling “honoring”. |
| b2-Eifer-521 | enText | LOW | ORTHOGRAPHY | Diligence • Diligence • Passion • Ardor • Eagerness | Diligence • Diligence • Passion • Ardour • Eagerness | British English spells “ardour” with “ou”. |
| b2-Eisbrecher-597 | enText | LOW | ORTHOGRAPHY | Ice breaker | Icebreaker | The standard modern English compound is normally written as one word. |
| b2-eisfrei-601 | enText | LOW | ORTHOGRAPHY | Ice free • No ice | Ice-free • No ice | The adjective normally takes a hyphen in this compound. |
| b2-Färbung-762 | lv | LOW | ORTHOGRAPHY | Coloring • Hue | Colouring • Hue | British English uses ‘colouring’, not the US spelling ‘coloring’. |
| b2-Faser-767 | lv | LOW | ORTHOGRAPHY | Fiber | Fibre | British English spells this word ‘fibre’. |
| b2-Glasfiber-992 | lv | LOW | ORTHOGRAPHY | Glass fiber | Glass fibre | British English normally spells this compound with fibre. |
| b2-glimmen-1002 | lv | LOW | ORTHOGRAPHY | To glow • To glow • To smolder | To glow • To glow • To smoulder | Smoulder is the standard British English spelling. |
| b2-Günstling-1044 | lv | LOW | ORTHOGRAPHY | favourite • Protégé | Favourite • Protégé | The two English items should use consistent capitalisation as headword translations. |
| b2-gutmütig-1052 | enText | LOW | ORTHOGRAPHY | Kind hearted | Kind-hearted | The compound adjective requires a hyphen in standard British English. |
| b2-heimatlos-1085 | enText | LOW | NATURALNESS | Without a homeland | Homeless | Without a homeland is understandable but unnatural; homeless is the usual concise adjective. |
| b2-Leistungslohn-1237 | en | LOW | NATURALNESS | Piecework payment | Piece-rate pay | “Piece-rate pay” is the standard modern collocation for payment based on output. |
| b2-Luftpost-1268 | enText | LOW | ORTHOGRAPHY | Air mail | Airmail | The standard modern British spelling is the closed compound “airmail”. |
| b2-Meeresspiegel-1302 | enText | LOW | ORTHOGRAPHY | Sea ​​level | Sea level | The meaning is correct, but the English contains stray invisible spacing. |
| b2-mildern-1315 | enText | LOW | ORTHOGRAPHY | Soothe the pain • Soften the judgment | Soothe the pain • Soften the judgement | Use British spelling “judgement” for this British English translation set. |
| b2-missglücken-1327 | enText | LOW | STUDY | Fail • Fail | Fail • Go wrong | The two listed senses are duplicated; “go wrong” provides a useful distinct equivalent. |
| b2-Muße-1343 | enText | LOW | STUDY | Free time • Free time | Free time • Leisure | The two English equivalents are duplicated; “leisure” gives a distinct natural equivalent. |
| b2-müßig-1344 | enText | LOW | STUDY | Idle • Idle | Idle • Inactive | The two English equivalents are duplicated; “inactive” gives a distinct equivalent. |
| b2-Nachbildung-1348 | enText | LOW | STUDY | Imitation • Imitation | Replica • Imitation | The two English equivalents are duplicated; “replica” provides a distinct equivalent for the first s |
| b2-Teilnarkose-1364 | enText | LOW | ORTHOGRAPHY | Partial anesthesia | Partial anaesthesia | British English spells this “anaesthesia”, not “anesthesia”. |
| b2-Panzerglas-1426 | enText | LOW | ORTHOGRAPHY | Armor glass | Armoured glass | British English uses armoured, not the American spelling armor. |
| b2-sensibel-1639 | enText | LOW | STUDY | Sensitive • Sensitive | Sensitive • Tactful | The duplicate loses the useful distinction between sensitive and tactful or considerate. |
| b2-Tagelöhner-1724 | enText | LOW | ORTHOGRAPHY | Day laborer | Day labourer | British English uses “labourer”. |
| b2-Tatkraft-1727 | enText | LOW | ORTHOGRAPHY | Energy • Vigor | Energy • Vigour | British English uses “vigour”. |
| b2-tönen-1735 | enText | LOW | NATURALNESS | To sound • To tone • To give a shade | To sound • To tone • To give a nuance | “Give a shade” is unnatural for the figurative sense of adding a tone or nuance. |
| b2-Trommelfell-1756 | enText | LOW | ORTHOGRAPHY | Ear drum | Eardrum | The standard modern spelling is the closed compound “eardrum”. |
| b2-väterlich-1868 | en | LOW | ORTHOGRAPHY | Paternal- • Paternal | Paternal • Fatherly | “Paternal-” with a trailing hyphen is not a standalone English translation. |
| b2-vergiften-1894 | en | LOW | STUDY | To poison • To poison | To poison • To kill by poisoning | The two English entries are duplicated; the second source sense specifies killing by poisoning. |
| b2-verkörpern-1917 | enText | LOW | GRAMMAR | Embodying | To embody | The gerund does not match the infinitive verb lemma used in the other translations. |
| b2-vermehren-1922 | enText | LOW | STUDY | Multiply • Multiply | Multiply • Increase | The duplicate entries fail to distinguish multiplying from increasing or augmenting. |
| b2-sich vermehren-1923 | enText | LOW | GRAMMAR | Multiplying | To multiply | The gerund does not match the infinitive form of the reflexive verb. |
| b2-vermindern-1925 | enText | LOW | NATURALNESS | [to] reduce | To reduce | Bracketed optional wording is unnatural in the English learner translation. |
| b2-versetzen-1936 | enText | LOW | STUDY | Move • Move | Move • Transfer | The duplicate entries do not distinguish general movement from transfer or reassignment. |
| b2-Vertretung-1952 | enText | LOW | STUDY | Substitution • Substitution • Representation • Representing | Replacement • Substitution • Representation • Representation | The first two entries duplicate each other, and the final noun sense is better rendered as represent |
| b2-verweilen-1956 | enText | LOW | NATURALNESS | Hang around | Linger | Hang around is colloquial and can suggest socialising; linger is the precise equivalent of verweilen |
| b2-verwöhnen-1962 | enText | LOW | STUDY | Spoil • Spoil | Pamper • Spoil | The duplicate translations do not distinguish pampering from spoiling someone. |
| b2-sich-einschleichen | study.translation | LOW | NATURALNESS | Sneak in • Sneak in | Sneak in • Creep in | The duplicate translation misses the distinct sense of gradually or insidiously entering. |
| b2-sich-einschleichen | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-einschraenken | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-empfehlen | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-empören | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-enthalten | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-entledigen | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-entrüsten | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-entsinnen | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-erbarmen | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-sich-ergeben | study.formsLabel | LOW | NATURALNESS | Management: | Government: | Management is not the standard English heading for grammatical government or valency. |
| b2-haube | study.examples[5].en | LOW | NATURALNESS | Put the lid on the pot as a cover. | Put the lid on the pot. | As a cover is redundant and makes the instruction awkward. |
| b2-hoch-study | study.examples[1].en | LOW | NATURALNESS | Long live you! | Long may you live! | “Long live you!” is understandable but not idiomatic modern English. |
| b2-sich-revanchieren | study.explanation | LOW | NATURALNESS | Sich revanchieren requires the definite preposition bei + kam?. | Sich revanchieren requires the fixed preposition bei + kam?. | “Fixed preposition” is the natural grammatical term; “definite preposition” is not idiomatic here. |
| b2-sich-scheren | study.explanation | LOW | NATURALNESS | Sich scheren requires a definite preposition um + ko?. | Sich scheren requires the fixed preposition um + ko?. | “Fixed preposition” is the natural grammatical term; “definite preposition” is not idiomatic here. |
| b2-sich-vereinigen | study.explanation | LOW | NATURALNESS | Sich vereinigen requires a definite preposition mit + kam?. | Sich vereinigen requires the fixed preposition mit + kam?. | “Fixed preposition” is the natural grammatical term; “definite preposition” is not idiomatic here. |
| b2-sich-versoehnen | study.explanation | LOW | NATURALNESS | Sich versöhnen requires a definite preposition mit + kam?. | Sich versöhnen requires the fixed preposition mit + kam?. | “Fixed preposition” is the natural grammatical term; “definite preposition” is not idiomatic here. |
| b2-sich-verstellen | study.explanation | LOW | NATURALNESS | Sich verstellen requires a definite preposition als + ko?. | Sich verstellen requires the fixed preposition als + ko?. | “Fixed preposition” is the natural grammatical term; “definite preposition” is not idiomatic here. |
| b2-sich-verwundern | study.explanation | LOW | NATURALNESS | Sich verwundern requires a definite preposition über + ko?. | Sich verwundern requires the fixed preposition über + ko?. | “Fixed preposition” is the natural grammatical term; “definite preposition” is not idiomatic here. |
| b2-zuweisen | study.comparison[2].meaning | LOW | SEMANTICS | To divide | To distribute | verteilen normally means distribute; “divide” can suggest splitting something into parts instead. |
| b2-wechseln | study.examples[3].lv | LOW | STUDY | I'm changing schools. | I'm switching schools. | This duplicates the first example; a varied but equally natural translation improves study value. |
| b2-bieten | study.examples[2].lv | LOW | STUDY | The school offers many courses. | The university offers a range of courses. | This repeats the first example almost exactly; varied wording provides better study practice. |
| b2-fordern | study.examples[2].lv | LOW | STUDY | She asks for more money. | She demands more money. | This repeats the first example and also misses the forceful sense of fordern. |
| b2-fördern | study.examples[0].lv | LOW | NATURALNESS | Sport promotes health. | Sport promotes good health. | The English is grammatical; “good health” is the more natural collocation in this general statement. |
| b2-fördern | study.examples[1].lv | LOW | STUDY | Sport promotes health. | Regular exercise promotes good health. | This repeats the first example; varied wording gives more useful practice. |

---

## API usage

| Metric | Value |
|---|---:|
| model | `gpt-5.6-luna` |
| API requests | 41 |
| initial batch requests | 41 |
| retries | 0 |
| input tokens | 136470 |
| cached input tokens | 0 |
| output tokens | 186642 |
| reasoning tokens | 72442 |
| total tokens | 323112 |

---

## Production changes

**Production data file changes: 0**

---

## GALA VERDICT

### EN–DE B2 Luna audit — **REPAIRS REQUIRED**

**Quality findings:** 1019
**Coverage:** 2118/2118

Full semantic Luna review completed for all B2 cards.

This is **AUDIT ONLY** — not `FINAL – OWNER ACCEPTED` and not `PRODUCTION READY`.

---

## Machine-readable artefacts

- `reports/en-b2-luna-full-linguistic-audit.md`
- `reports/temp/en-b2-luna-linguistic-findings.json`
- `reports/temp/.en-b2-luna-audit-stats.json`
- `reports/temp/en-b2-audit-data.json` (deterministic baseline)
