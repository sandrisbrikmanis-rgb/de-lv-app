# EN–DE C1/C2 — Luna pilns lingvistiskais audits (GPT-5.6 Luna)

**Audita datums:** 2026-08-10
**Audita modelis:** gpt-5.6-luna
**Režģis:** READ-ONLY — production dati netika mainīti
**Audita faili:** `data/en/c1.js`, `data/en/c2.js`, mirror `www/data/en/`
**Etalons (DE):** `data/c1.js`, `data/c2.js` (DE READ-ONLY)

**Standarti:** LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD, STUDY_CARD_RULES, COMPARISON_STUDY_RULES, UI_UX_VISUAL_COLOR_RULES

## Apjoms

| Metrika | Skaits |
| --- | ---: |
| C1 kartītes | 572 |
| C2 kartītes | 219 |
| Kopā | 791 |
| Flashcards | 775 |
| Study kartītes | 16 |
| Luna auditētas | 791/791 |

## Deterministiskā pārbaude

| Pārbaude | Rezultāts |
| --- | --- |
| Language parity | PASS |
| Sintakse | PASS |
| Mirror (C1/C2) | PASS |
| sectionAccents | 0 |
| Semikoli tulkojumos | 0 |
| LV/svešvalodu atlikumi (auto) | 0 |
| DE tikai lasāms | PASS |

## Luna atradumi (kvalitātes)

| Smagums | Skaits |
| --- | ---: |
| KRITISKA | 6 |
| AUGSTA | 146 |
| VIDĒJA | 151 |
| ZEMA | 15 |

| Kategorija | Skaits |
| --- | ---: |
| SEMANTICS | 154 |
| NATURALNESS | 62 |
| TRANSLATION | 56 |
| STUDY | 18 |
| GRAMMAR | 16 |
| ORTHOGRAPHY | 9 |
| FOREIGN_REMNANT | 3 |

| Nav kļūda (non-error) | Skaits |
| --- | ---: |
| DE_SOURCE_ISSUE | 0 |
| SOURCE_LV_ISSUE | 0 |
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 1 |
| NEEDS_REVIEW | 0 |

## API lietojums

| Metrika | Skaits |
| --- | ---: |
| Batch pieprasījumi | 15 |
| Kopā tokeni | 124699 |

## Gala verdikts

**REPAIRS REQUIRED**

## Top atradumi (max 40)

| Kartīte | Lauks | Smagums | Kategorija | EN | Ieteikums | Pamatojums |
| --- | --- | --- | --- | --- | --- | --- |
| c1-gewährleisten-1 | enText | HIGH | SEMANTICS | To provide | To ensure | Gewährleisten means to ensure or guarantee, not merely to provide. |
| c1-Auswirkung-2 | enText | HIGH | SEMANTICS | Influence | Effect | Auswirkung denotes an effect or consequence; influence corresponds more closely to Einfluss. |
| c1-umstritten-3 | enText | HIGH | SEMANTICS | Contradictory | Controversial | Umstritten means controversial or disputed, not contradictory. |
| c1-Belastbarkeit-7 | enText | MEDIUM | NATURALNESS | Stress resistance • Resistance to load | Resilience under stress • Load-bearing capacity | The current phrases are literal calques and are not natural British English. |
| c1-Aktionsprogramm-10 | enText | HIGH | SEMANTICS | programme of events | Action programme | Aktionsprogramm means an action programme, not a programme listing events. |
| c1-Alarmbereitschaft-11 | enText | MEDIUM | NATURALNESS | Alert readiness | State of alert | Alert readiness is an awkward literal rendering; state of alert is idiomatic English. |
| c1-Altweibersommer-12 | enText | HIGH | SEMANTICS | Spring | Indian summer | Altweibersommer is a period of warm autumn weather, known in British English as an Indian summer. |
| c1-Kinderschänder-30 | enText | HIGH | TRANSLATION | Pedophile | Child molester | The German term denotes a child molester or abuser, not specifically a paedophile. |
| c1-Kindesmisshandlung-31 | enText | MEDIUM | SEMANTICS | Violence against children | Child abuse | Kindesmisshandlung is broader than physical violence and is best translated as child abuse. |
| c1-Zivilgesetzbuch-32 | enText | HIGH | SEMANTICS | Civil law | Civil code | Zivilgesetzbuch refers to a codified body of civil law, not civil law in general. |
| c1-Aktie-33 | enText | HIGH | SEMANTICS | Action | Share | In a financial context, Aktie means a share; action is a false-friend translation. |
| c1-Autokennzeichen-38 | enText | MEDIUM | SEMANTICS | Letters and numbers on the car licence plate | Vehicle registration plate | Autokennzeichen denotes the registration plate itself, not the letters and numbers displayed on it. |
| c1-Bäckerhandwerk-39 | enText | MEDIUM | SEMANTICS | Baker's job | Baking trade | Bäckerhandwerk refers to the baking trade or craft, not an individual baker's job. |
| c1-Bergwanderung-41 | enText | HIGH | SEMANTICS | Mountain tourism | Mountain hike | Bergwanderung means a hike in the mountains, not mountain tourism generally. |
| c1-sich beschäftigen-43 | enText | MEDIUM | GRAMMAR | To occupy | To occupy oneself | The reflexive German verb requires the reflexive sense in English to avoid an incomplete translation. |
| c1-Autobahnbrücke-48 | enText | HIGH | SEMANTICS | Road overpass | Motorway bridge | Autobahn specifies a motorway; road overpass is too generic and omits the key meaning. |
| c1-Gepäckträger-70 | lv | HIGH | SEMANTICS | Trunk | Luggage rack | A Gepäckträger is a luggage rack or luggage carrier, not a car's boot or trunk. |
| c1-geschäftlich-71 | lv | HIGH | TRANSLATION | Transaction | Business-related | The German adjective means related to business, whereas “transaction” is an unrelated noun. |
| c1-Geschäftsmann-72 | lv | MEDIUM | SEMANTICS | Entrepreneur | Businessman | Geschäftsmann means businessman or businessperson, not specifically an entrepreneur. |
| c1-Gesichtspunkt-77 | lv | HIGH | SEMANTICS | Opinion | Viewpoint | Gesichtspunkt means viewpoint, aspect or point of view, not an opinion. |
| c1-Gewichtheben-78 | lv | MEDIUM | ORTHOGRAPHY | Weight lifting | Weightlifting | The standard English spelling of the sport is the closed compound “weightlifting”. |
| c1-Tasteninstrument-90 | lv | MEDIUM | SEMANTICS | Keyboard | Keyboard instrument | The German term refers broadly to a keyboard instrument, not specifically an electronic keyboard. |
| c1-Kabelanschluss-92 | lv | MEDIUM | SEMANTICS | Cable television connection | Cable connection | Kabelanschluss means a cable connection generally, without necessarily specifying television. |
| c1-Kostenanschlag-99 | lv | MEDIUM | NATURALNESS | Expenditure estimate | Cost estimate | “Cost estimate” is the standard natural British English equivalent in this context. |
| c1-Krankheitsbild-101 | lv | HIGH | TRANSLATION | Disease scene | Clinical picture | Krankheitsbild means the clinical picture or presentation of a disease, not a disease scene. |
| c1-Lastkraftwagen-102 | lv | HIGH | TRANSLATION | Heavy car | Lorry | Lastkraftwagen means a lorry or heavy goods vehicle, not a heavy car. |
| c1-Morgengymnastik-112 | lv | HIGH | TRANSLATION | Dawn | Morning exercise | Morgengymnastik means morning exercise or morning gymnastics, whereas “dawn” means Morgendämmerung. |
| c1-Rennen mit Hindernissen-131 | enText | HIGH | SEMANTICS | Obstacle course | Obstacle race | The German denotes a race involving obstacles, not the course itself. |
| c1-Rettungsstelle-133 | enText | MEDIUM | NATURALNESS | First aid point | First-aid station | First-aid station is the natural British-English equivalent for a designated medical point. |
| c1-rezeptpflichtig-134 | enText | MEDIUM | TRANSLATION | By prescription | Prescription-only | The adjective means that a medicine legally requires a prescription. |
| c1-Scheibenwischer-136 | enText | HIGH | SEMANTICS | Car window cleaner | Windscreen wiper | A Scheibenwischer is the device that wipes a vehicle's windscreen, not a person or cleaning product. |
| c1-Schiedsrichter-137 | enText | HIGH | SEMANTICS | The judge | Referee | In sport, Schiedsrichter means referee; judge is a different role. |
| c1-Schlussverkauf-138 | enText | MEDIUM | NATURALNESS | Sale of goods at the end of the season at reduced prices | End-of-season sale | The current wording is a cumbersome definition rather than a natural English equivalent. |
| c1-Schutzumschlag-142 | enText | MEDIUM | SEMANTICS | Cover | Dust jacket | For a book, Schutzumschlag specifically means the removable protective outer cover. |
| c1-Schwiegereltern-143 | enText | HIGH | SEMANTICS | Husband's parents | Parents-in-law | The German term covers either spouse's parents and is not restricted to a husband's parents. |
| c1-Stadtrundfahrt-149 | enText | HIGH | SEMANTICS | City ​​trip | City tour | Stadtrundfahrt means a sightseeing tour around a city, not a general city trip. |
| c1-Stellvertreter-151 | enText | MEDIUM | SEMANTICS | Substitute | Deputy | Stellvertreter usually denotes an appointed deputy or representative, not merely a substitute. |
| c1-Steuererklärung-152 | enText | MEDIUM | TRANSLATION | Tax declaration | Tax return | Tax return is the established British-English term for a submitted tax statement. |
| c1-Strampelhöschen-153 | enText | HIGH | SEMANTICS | Baby crawler | Baby romper | A Strampelhöschen is a baby's one-piece garment; baby crawler is not the garment's English name. |
| c1-Stromverbrauch-154 | enText | HIGH | SEMANTICS | Current consumption | Electricity consumption | Here Strom means electricity, whereas current consumption refers to electrical current. |
