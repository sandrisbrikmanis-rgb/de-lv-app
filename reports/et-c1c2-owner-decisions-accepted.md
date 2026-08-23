# ET–DE C1/C2 — OWNER DECISIONS ACCEPTED

**Source audit:** PR #622 · MASTER v1.9  
**OWNER review:** ChatGPT linguistic/semantic review of all 131 OWNER backlog findings  
**Scope:** C1 + C2 only  
**DE:** STRICT READ-ONLY  
**Production apply:** NOT performed in this file  

## Coverage

- SOURCE_FINDINGS: **131**
- OWNER_RESOLVED: **131/131**
- PENDING: **0**
- LABOT: **76**
- NELABOT: **3**
- FALSE_POSITIVE: **7**
- NEEDS_SOURCE_REVIEW: **45**

### Policy

- `LABOT` rows below have an explicit OWNER `NEW` and may be used in a later COPY-ONLY apply with exact CURRENT guard.
- `NELABOT` and `FALSE_POSITIVE` must remain unchanged.
- `NEEDS_SOURCE_REVIEW` must not be applied. The 43 sectionAccents findings are intentionally not converted into character-level repairs; they require deterministic deduped sectionAccents repair against the actual Study text. The 2 Study-count findings require exact identification of extra Study objects, not count-only deletion.

## OWNER decisions

| Audit ID | Card ID | Field/path | CURRENT | OWNER STATUS | OWNER NEW | OWNER NOTE |
|---|---|---|---|---|---|---|
| ET-C1C2-0001 | STRUCT-c1 | study.count | 16 | NEEDS_SOURCE_REVIEW |  | Count mismatch alone is insufficient; identify the exact extra C1 Study object before removal. |
| ET-C1C2-0002 | STRUCT-c2 | study.count | 3 | NEEDS_SOURCE_REVIEW |  | Count mismatch alone is insufficient; identify the exact 2 extra C2 Study objects before removal. |
| ET-C1C2-0003 | c1-gelegentlich | entry[340].study.comparison[0].example | Er kommt gelegentlich. = Viņš reizēm atnāk. | LABOT | Er kommt gelegentlich. = Ta tuleb aeg-ajalt. | Replace LV RHS with natural ET; preserve DE prefix. |
| ET-C1C2-0004 | c1-gelegentlich | entry[340].study.comparison[1].example | ein gelegentlicher Besuch = gadījuma apmeklējums | LABOT | ein gelegentlicher Besuch = juhuslik külastus | Replace LV RHS with ET. |
| ET-C1C2-0005 | c1-gelegentlich | entry[340].study.comparison[2].example | gelegentlich des Festes = svētku sakarā | LABOT | gelegentlich des Festes = peo puhul | Replace LV RHS with ET. |
| ET-C1C2-0006 | c1-gelegentlich | entry[340].study.comparison[3].example | Manchmal regnet es. = Reizēm līst. | LABOT | Manchmal regnet es. = Mõnikord sajab vihma. | Replace LV RHS with ET. |
| ET-C1C2-0007 | c1-wahlberechtigt | entry[543].study.comparison[0].example | Er ist wahlberechtigt. = Viņam ir vēlēšanu tiesības. | LABOT | Er ist wahlberechtigt. = Tal on hääleõigus. | Replace LV RHS with ET. |
| ET-C1C2-0008 | c1-wahlberechtigt | entry[543].study.comparison[2].example | Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām. | LABOT | Der Wähler geht zur Wahl. = Valija läheb valima. | Replace LV RHS with ET. |

### sectionAccents — unresolved deterministic source review

The following **43** findings are `NEEDS_SOURCE_REVIEW`. Do **not** apply them as individual character/token edits. Deduplicate by `(Card ID, sectionAccents path)` and rebuild only from actual ET Study text after content repairs.

| Audit ID | Card ID | Field/path | OWNER STATUS |
|---|---|---|---|
| ET-C1C2-0009 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0010 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0011 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0012 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0013 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0014 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0015 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0017 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0019 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0020 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0021 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0024 | c1-wettbewerb | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0039 | c1-voraussetzen | study.sectionAccents (explanation) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0040 | c1-aufrechterhalten | study.sectionAccents (explanation) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0041 | c1-aufrechterhalten | study.sectionAccents (explanation) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0042 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0043 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0044 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0046 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0047 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0048 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0049 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0051 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0061 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0062 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0065 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0068 | c2-inwiefern | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0070 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0071 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0072 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0073 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0074 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0075 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0076 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0077 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0082 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0083 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0084 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0085 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0086 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0090 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0091 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |
| ET-C1C2-0093 | c2-inwieweit | study.sectionAccents (examples) | NEEDS_SOURCE_REVIEW |

### Linguistic findings

| Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | OWNER NOTE |
|---|---|---|---|---|---|---|
| ET-C1C2-0097 | c1-Kinderschänder-30 | etText | lapse väärkohtleja | LABOT | lapsepilastaja | Current is too broad; use specific child sexual abuser/molester meaning. |
| ET-C1C2-0098 | c1-Kindesmisshandlung-31 | etText | lastevastane vägivald | LABOT | laste väärkohtlemine | Broader and more exact than only violence. |
| ET-C1C2-0099 | c1-Bergwanderung-41 | etText | mägiturism | LABOT | mägimatk | Exact hiking meaning. |
| ET-C1C2-0100 | c1-Beschäftigung-44 | etText | tegevusala | LABOT | tegevus | Current means field/sector; German is broader. |
| ET-C1C2-0101 | c1-geschäftlich-71 | etText | äri- | LABOT | äriline | Standalone adjective required. |
| ET-C1C2-0102 | c1-Gewichtheben-78 | etText | tõstmine | FALSE_POSITIVE |  | `tõstmine` is the standard Estonian name of the sport weightlifting. |
| ET-C1C2-0103 | c1-Hochzeitsreise-86 | etText | mesinädalate reis | LABOT | pulmareis | More idiomatic lexical equivalent. |
| ET-C1C2-0104 | c1-Kabelanschluss-92 | etText | kaabellevi liitumine | LABOT | kaabeltelevisiooni ühendus | Current denotes joining/subscription process rather than connection. |
| ET-C1C2-0105 | c1-Kostenanschlag-99 | etText | kuluprognoos | LABOT | kulukalkulatsioon | More exact for estimate/cost calculation. |
| ET-C1C2-0106 | c1-Rennen mit Hindernissen-131 | etText | tõkkejooks | FALSE_POSITIVE |  | `tõkkejooks` is a standard and natural Estonian term for a hurdle race. |
| ET-C1C2-0107 | c1-Schlussverkauf-138 | etText | hooajalõpu allahindlus | NELABOT |  | Acceptable established interpretation of Schlussverkauf in retail context. |
| ET-C1C2-0108 | c1-Strampelhöschen-153 | etText | imiku roomik | LABOT | imiku sipupüksid | Current is wrong noun. |
| ET-C1C2-0109 | c1-Terminkalender-157 | etText | tähtajakalender | LABOT | kohtumiste kalender | German refers to appointments/scheduled dates, not deadlines only. |
| ET-C1C2-0110 | c1-verantworten-168 | etText | vastutust võtma | LABOT | vastutama | Exact verb equivalent. |
| ET-C1C2-0111 | c1-Verlegenheit-173 | etText | hämmeldus | LABOT | kimbatus • piinlik olukord | Covers embarrassment/awkward predicament; not mere bewilderment. |
| ET-C1C2-0112 | c1-Basisforschung-206 | etText | põhiuuring | LABOT | alusuuring | Standard term for basic research. |
| ET-C1C2-0113 | c1-Befangenheit-211 | etText | kimbatus • segadus | LABOT | erapoolikus • kallutatus | Use the bias/impartiality sense represented by the audited card. |
| ET-C1C2-0114 | c1-benachteiligen-220 | etText | kahjustama • kahju tekitama | LABOT | ebasoodsasse olukorda seadma | Do not overtranslate as generic damage. |
| ET-C1C2-0115 | c1-bereitwillig-224 | etText | abivalmis • teenistusvalmis | LABOT | vastutulelik • meelsasti nõus | Better willingness sense. |
| ET-C1C2-0116 | c1-Betriebskosten-236 | etText | ettevõtte ekspluatatsioonikulud • tootmiskulud | LABOT | tegevuskulud • käituskulud | Betriebskosten are operating/running costs. |
| ET-C1C2-0117 | c1-Beweismaterial-241 | etText | materiaalsed tõendid | LABOT | tõendusmaterjal | Exact lexical equivalent. |
| ET-C1C2-0118 | c1-bewerben, sich-242 | etText | kandideerima • püüdlema | LABOT | kandideerima • avaldust esitama | `püüdlema` is not the application sense. |
| ET-C1C2-0119 | c1-Computersprache-251 | etText | programmeerimiskeel | FALSE_POSITIVE |  | A programming language is a valid computer-language equivalent in this vocabulary context. |
| ET-C1C2-0120 | c1-Dachgepäckträger-252 | etText | katuse pagasiraam | LABOT | katusepagasiraam | Estonian compound spelling. |
| ET-C1C2-0121 | c1-Dienstleistung-266 | etText | olmeteenus | LABOT | teenus | Current is too narrow. |
| ET-C1C2-0122 | c1-dienstpflichtig-267 | etText | sõjaväeteenistuskohuslane | LABOT | sõjaväeteenistuskohustuslik | Adjective required. |
| ET-C1C2-0123 | c1-sich einschmeicheln-284 | etText | meelitama end sisse | LABOT | end sisse pugema | Natural Estonian idiom. |
| ET-C1C2-0124 | c1-Entziehungskur-303 | etText | võõrutusravi kuur | LABOT | võõrutusravikuur | Compound spelling. |
| ET-C1C2-0125 | c1-Feuerwerkskörper-312 | etText | ilutulestikurakett | LABOT | ilutulestikuvahend | German is broader than rocket. |
| ET-C1C2-0126 | c1-Fortbildungskurse-315 | etText | täienduskoolituskursused | FALSE_POSITIVE |  | Current is correct and natural, merely more explicit. |
| ET-C1C2-0127 | c1-fortgeschritten-316 | etText | üsna hilises arengujärgus | LABOT | edasijõudnud | Standard lexical equivalent. |
| ET-C1C2-0128 | c1-Gebrauchtwaren-325 | etText | kasutatud asjad | LABOT | kasutatud kaubad | Waren = goods. |
| ET-C1C2-0129 | c1-Geburtenrate-326 | etText | sündimuse tase | LABOT | sündimus | More idiomatic standard term. |
| ET-C1C2-0130 | c1-geistesschwach-337 | etText | vaimupuudega | FALSE_POSITIVE |  | Current is semantically appropriate; proposed `vaimselt nõrk` is less exact. |
| ET-C1C2-0131 | c1-Gemeineigentum-343 | etText | ühiskondlik omand | NELABOT |  | Current is a valid equivalent depending on common/social ownership context. |
| ET-C1C2-0132 | c1-Geschäftshaus-358 | etText | kaubamaja | LABOT | ärihoone | `kaubamaja` = department store; German is business/commercial building. |
| ET-C1C2-0133 | c1-gesetzlos-363 | etText | seadusevastane | LABOT | seadusetu | Exact adjective. |
| ET-C1C2-0134 | c1-Gewissensbisse-368 | etText | südametunnistuse piinad | LABOT | süümepiinad | More idiomatic lexical equivalent. |
| ET-C1C2-0135 | c1-gewissermaßen-369 | etText | teataval määral • omal moel • nii-öelda | LABOT | teataval määral • teatud mõttes • nii-öelda | `teatud mõttes` better matches gewissermaßen. |
| ET-C1C2-0136 | c1-Hausdurchsuchung-384 | etText | politseiläbiotsimine | LABOT | politsei läbiotsimine | Correct construction/spelling. |
| ET-C1C2-0137 | c1-sich hinreißen lassen-392 | etText | end kaasa haarata laskma | LABOT | laskma end kaasa haarata | Natural word order. |
| ET-C1C2-0138 | c1-Industrieabwässer-394 | etText | tööstuslikud reoveed | LABOT | tööstuslik reovesi | Natural mass-noun form. |
| ET-C1C2-0139 | c1-Justiz-401 | etText | õigusemõistmine • justiits | LABOT | õigusemõistmine • justiitssüsteem | `justiits` alone is not the right standalone lexical item. |
| ET-C1C2-0140 | c1-Kaution-404 | etText | tagatis • kautsjon • garantii | LABOT | tagatis • kautsjon | Remove overly broad `garantii`. |
| ET-C1C2-0141 | c1-militärpflichtig-429 | etText | ajateenistuskohuslane | LABOT | sõjaväekohustuslik | Adjective and broader military-duty meaning. |
| ET-C1C2-0142 | c1-Parteifunktionär-440 | etText | parteitöötaja | LABOT | parteifunktsionäär | More exact role. |
| ET-C1C2-0143 | c1-Produktionskosten-446 | etText | tootmise omahind | LABOT | tootmiskulud | Exact plural cost concept. |
| ET-C1C2-0144 | c1-rechtswidrig-452 | etText | ebaseaduslikult | LABOT | ebaseaduslik | Adjective required, not adverb. |
| ET-C1C2-0145 | c1-sanktionieren-461 | etText | toetama • sanktsioneerima | LABOT | sanktsioneerima | Remove inaccurate generic `toetama`. |
| ET-C1C2-0146 | c1-Sinnestäuschung-474 | etText | hallutsinatsioon | LABOT | meelepett | German is broader than hallucination. |
| ET-C1C2-0147 | c1-synchronisieren-486 | etText | filmi dubleerima | FALSE_POSITIVE |  | In German, `einen Film synchronisieren` means to dub a film; current matches the source sense. |
| ET-C1C2-0148 | c1-Transfusion-488 | etText | otsene vereülekanne inimeselt inimesele | LABOT | vereülekanne | Remove unjustified narrowing. |
| ET-C1C2-0149 | c1-urteilen-499 | etText | otsustama • arutlema | LABOT | otsustama • hinnangut andma | Keep valid `otsustama`, replace wrong `arutlema`. |
| ET-C1C2-0150 | c1-sich vervollkommnen-534 | etText | oma teadmisi täiendama | LABOT | ennast täiustama | Reflexive meaning is self-improvement, not only knowledge. |
| ET-C1C2-0151 | c1-Volksbefragung-537 | etText | üleriigiline küsitlus • referendum | LABOT | rahvaküsitlus | Do not equate automatically with binding referendum. |
| ET-C1C2-0152 | c2-konterkarieren-1 | etText | nurjama | FALSE_POSITIVE |  | Estonian `nurjama` can mean thwart/frustrate, which matches `konterkarieren`. |
| ET-C1C2-0153 | c2-Teilnehmerausweis-12 | etText | osaleja tunnistus | LABOT | osalejakaart | Better equivalent for an identification/participant card. |
| ET-C1C2-0154 | c2-Behandlungsraum-16 | etText | arsti kabinet | LABOT | raviruum | German is broader than doctor's office. |
| ET-C1C2-0155 | c2-Krankheitsüberträger-49 | etText | haiguse levitaja | LABOT | haiguse edasikandja | More exact carrier/vector sense. |
| ET-C1C2-0156 | c2-Straßenunterführung-67 | etText | jalakäijate tunnel | LABOT | teealune läbipääs | German denotes an underpass beneath a road, not necessarily pedestrian-only tunnel. |
| ET-C1C2-0157 | c2-durchkreuzen-103 | etText | läbi kriipsutama • risti tõmbama • ristuma • nurjama | LABOT | läbi kriipsutama • risti tõmbama • läbi lõikama • nurjama | Replace intransitive `ristuma` with transitive crossing sense. |
| ET-C1C2-0158 | c2-Durchschnittsleistung-106 | etText | keskpärane tulemus • keskmine tulemus | LABOT | keskpärane sooritus • keskmine sooritus | `Leistung` = performance here. |
| ET-C1C2-0159 | c2-Errungenschaft-117 | etText | saavutus • saavutis • võit | LABOT | saavutus • saavutis • edusamm | Remove `võit` = victory. |
| ET-C1C2-0160 | c2-Gedächtnisschwäche-126 | etText | halb mälu | NELABOT |  | Natural and semantically correct Estonian equivalent. |
| ET-C1C2-0161 | c2-Geistesgegenwart-131 | etText | vaimne kohalolek | LABOT | kiire taip • meelekindlus | Current is a literal calque; use presence-of-mind meaning. |
| ET-C1C2-0162 | c2-Dorfgemeinschaft-136 | etText | külaelanikkond | LABOT | külakogukond | Community, not population. |
| ET-C1C2-0163 | c2-Gewinnauszahlung-156 | etText | loteriivõidu väljamaksmine | LABOT | kasumi või võidu väljamaksmine | Current is too narrow. |
| ET-C1C2-0164 | c2-Hausgemeinschaft-161 | etText | pereliikmed • majaelanikud | LABOT | majaelanikud • majaelanike kogukond | Remove unrelated family-members meaning. |
| ET-C1C2-0165 | c2-Lebenserhaltungstrieb-170 | etText | elutahe | LABOT | enesesäilitamisinstinkt | Exact self-preservation instinct. |
| ET-C1C2-0166 | c2-Meisterschaftsspiel-177 | etText | meistrivõistlused | LABOT | meistrivõistluste mäng | Match/game, not entire championship. |
| ET-C1C2-0167 | c2-Preisausschreiben-187 | etText | võistlus | LABOT | auhinnavõistlus | Prize competition. |
| ET-C1C2-0168 | c2-zugrunde, zu Grunde-206 | etText | põhiliselt | LABOT | aluseks | Matches `zugrunde liegen/legen` sense. |
| ET-C1C2-0169 | c1-gelegentlich | study.translation | aeg-ajalt • juhuslik • seoses | LABOT | aeg-ajalt • juhuslik | Remove incorrect `seoses`. |
| ET-C1C2-0170 | c1-gelegentlich | study.comparison[2].meaning | seoses | LABOT | aeg-ajalt | Current meaning does not fit `gelegentlich`. |
| ET-C1C2-0171 | c1-beziehen-sich-beziehen-auf | study.translation | seostama • käima millegi kohta | LABOT | saama (nt pensioni) • millelegi viitama / millegi kohta käima | Restore core `beziehen` + reflexive reference senses. |
| ET-C1C2-0172 | c1-voraussetzen | study.examples[1].lv | me eeldame põhiteadmisi. | LABOT | Me eeldame põhiteadmisi. | Sentence capitalization. |
| ET-C1C2-0173 | c1-bewahren | study.examples[2].lv | me säilitame traditsioone. | LABOT | Me säilitame traditsioone. | Sentence capitalization. |
| ET-C1C2-0174 | c1-aufrechterhalten | study.examples[0].lv | Riik hoiab korda kehtivana. | LABOT | Riik hoiab korda alal. | More idiomatic `aufrechterhalten`. |
| ET-C1C2-0175 | c1-aufrechterhalten | study.examples[1].lv | tegevus tuleb hoida kehtivana. | LABOT | Tegevust tuleb alal hoida. | Grammar + naturalness. |
| ET-C1C2-0176 | c1-aufrechterhalten | study.examples[2].lv | riik hoiab korda kehtivana. | LABOT | Riik hoiab korda alal. | Capitalization + naturalness. |

## Apply gate

Before any repair, Cursor must verify:

1. source accepted coverage = 131/131;
2. PENDING = 0;
3. apply only rows with `OWNER STATUS = LABOT`;
4. actual production value === CURRENT before write;
5. mismatch → skip exact row only;
6. after write actual === OWNER NEW;
7. `NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW` remain untouched;
8. DE changes = 0;
9. mirror + syntax PASS;
10. sectionAccents and Study-count NSR are separate follow-up work and must not be inferred from this file.

**OWNER verdict:** `ET_C1C2_OWNER_REVIEW_131_COMPLETE`
