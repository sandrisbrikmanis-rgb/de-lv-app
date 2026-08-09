# EN–DE B1 HIGH Owner Review #12

**Generated:** 2026-08-09T11:02:18.268Z

**Status:** READY FOR OWNER REVIEW — no production changes

## Report header

EN–DE B1 HIGH OWNER REVIEW #12

Block size: 50
Unique cards selected: 50/50
First Card ID: b1-geschlecht
Last Card ID: b1-richten
HIGH findings: 88
Associated MEDIUM: 57
Associated LOW: 5
Associated WARNING: 0
sectionAccents TECHNICAL: 56
sectionAccents PEDAGOGICAL: 8
Duplicate/root links: 0
Metadata anomalies: 39


## Pre-selection integrity gate

Previous HIGH selections loaded: 375
Duplicate previous logical cards: 0
CRITICAL overlap: 0
HIGH #1–#11 exclusions: PASS (pending selection)

## Exclusion verification

CRITICAL-cycle cards excluded: PASS
HIGH #1 cards excluded: 25/25
HIGH #2 cards excluded: 25/25
HIGH #3 cards excluded: 25/25
HIGH #4 cards excluded: 25/25
HIGH #5 cards excluded: 25/25
HIGH #6 cards excluded: 25/25
HIGH #7 cards excluded: 25/25
HIGH #8 cards excluded: 50/50
HIGH #9 cards excluded: 50/50
HIGH #10 cards excluded: 50/50
HIGH #11 cards excluded: 50/50
b1-Gen-1055 resolved false-positive exclusion: PASS
b1-Krüppel-1651 resolved exclusion: PASS
HIGH #4 biegen normalized exclusion: PASS
HIGH #9 Tagung resolution exclusion: PASS
Tageordnung ghost-audit exclusion: PASS
Tagesordnung ghost-context exclusion: PASS
HIGH #11 Gehalt identities excluded: PASS
Duplicate logical cards vs previous HIGH blocks: 0

---

CARD 1/50

Audit Card ID: b1-geschlecht
Production identity: b1-geschlecht
DE: Geschlecht
Current EN: Gender
Card type: standardStudy
Production index: 1086

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.explanation

CURRENT:
masculine, feminine or no gender

LUNA RECOMMENDED:
masculine, feminine, or neuter gender

LUNA REASON:
“No gender” is an incorrect translation of the grammatical term “neuter”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Gender" differs from audit Current EN "masculine, feminine or no gender"

OWNER VERDICT: LABOT
OWNER FINAL EN: masculine, feminine, or neuter gender
OWNER NOTE: OWNER approved linguistic correction.

CARD 1/50

Audit Card ID: b1-geschlecht
Production identity: b1-geschlecht
DE: Geschlecht
Current EN: Gender
Card type: standardStudy
Production index: 1086

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.tip.leftBlocks[0].text

CURRENT:
For the word in grammar Geschlecht = family.

LUNA RECOMMENDED:
For a word in grammar, Geschlecht = grammatical gender.

LUNA REASON:
“Family” is the wrong meaning; the German term refers to grammatical gender.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Gender" differs from audit Current EN "masculine, feminine or no gender"

OWNER VERDICT: LABOT
OWNER FINAL EN: For a word in grammar, Geschlecht = grammatical gender.
OWNER NOTE: OWNER approved linguistic correction.

CARD 1/50

Audit Card ID: b1-geschlecht
Production identity: b1-geschlecht
DE: Geschlecht
Current EN: Gender
Card type: standardStudy
Production index: 1086

SEVERITY: LOW
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.explanation

CURRENT:
["Main","Main"]

LUNA RECOMMENDED:
Use only the existing target token "Main", or add a second matching target occurrence.

LUNA REASON:
Two accents are specified, but “Main” occurs only once.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Gender" differs from audit Current EN "masculine, feminine or no gender"

OWNER VERDICT: LABOT
OWNER FINAL EN: ["Main"]
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 1/50

Audit Card ID: b1-geschlecht
Production identity: b1-geschlecht
DE: Geschlecht
Current EN: Gender
Card type: standardStudy
Production index: 1086

SEVERITY: TECHNICAL
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
["dzimums","dzimte"]

LUNA RECOMMENDED:
Replace with matching English target tokens such as "sex" and "gender".

LUNA REASON:
The accent targets are Latvian and do not occur in the English text.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Gender" differs from audit Current EN "masculine, feminine or no gender"

OWNER VERDICT: LABOT
OWNER FINAL EN: ["sex","gender"]
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 2/50

Audit Card ID: b1-gewinn
Production identity: b1-gewinn
DE: Gewinn
Current EN: Profit
Card type: standardStudy
Production index: 1105

SEVERITY: MEDIUM
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.explanation

CURRENT:
In games, contests and lotteries, it means winning.

LUNA RECOMMENDED:
In games, contests, and lotteries, it means a win or a prize.

LUNA REASON:
“Winning” does not naturally express the noun meaning “prize” here.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Profit" differs from audit Current EN "In games, contests and lotteries, it means winning."

OWNER VERDICT: LABOT
OWNER FINAL EN: In games, contests, and lotteries, it means a win or a prize.
OWNER NOTE: OWNER approved linguistic correction.

CARD 2/50

Audit Card ID: b1-gewinn
Production identity: b1-gewinn
DE: Gewinn
Current EN: Profit
Card type: standardStudy
Production index: 1105

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_EXPRESSION
FIELD: study.examples[2].lv

CURRENT:
Winning the lottery was big.

LUNA RECOMMENDED:
The lottery prize was large.

LUNA REASON:
The sentence is unnatural and does not clearly mean “the prize”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Profit" differs from audit Current EN "In games, contests and lotteries, it means winning."

OWNER VERDICT: LABOT
OWNER FINAL EN: The lottery prize was large.
OWNER NOTE: OWNER approved linguistic correction.

CARD 2/50

Audit Card ID: b1-gewinn
Production identity: b1-gewinn
DE: Gewinn
Current EN: Profit
Card type: standardStudy
Production index: 1105

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.comparison[0].meaning

CURRENT:
Profit / won

LUNA RECOMMENDED:
Profit / prize

LUNA REASON:
“Won” is not the noun meaning of Gewinn in the lottery context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Profit" differs from audit Current EN "In games, contests and lotteries, it means winning."

OWNER VERDICT: LABOT
OWNER FINAL EN: Profit / prize
OWNER NOTE: OWNER approved linguistic correction.

CARD 2/50

Audit Card ID: b1-gewinn
Production identity: b1-gewinn
DE: Gewinn
Current EN: Profit
Card type: standardStudy
Production index: 1105

SEVERITY: MEDIUM
CATEGORY: SPELLING_ERROR
FIELD: study.comparison[2].meaning

CURRENT:
Price / prise

LUNA RECOMMENDED:
Price / prize

LUNA REASON:
“Prise” is a spelling error; the intended word is “prize”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Profit" differs from audit Current EN "In games, contests and lotteries, it means winning."

OWNER VERDICT: LABOT
OWNER FINAL EN: Price / prize
OWNER NOTE: OWNER approved linguistic correction.

CARD 2/50

Audit Card ID: b1-gewinn
Production identity: b1-gewinn
DE: Gewinn
Current EN: Profit
Card type: standardStudy
Production index: 1105

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.tip.leftBlocks[0].text

CURRENT:
In the company Gewinn = profit; in the lottery Gewinn = won.

LUNA RECOMMENDED:
In a company, Gewinn = profit; in a lottery, Gewinn = prize.

LUNA REASON:
“Won” is the wrong part of speech and meaning here.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Profit" differs from audit Current EN "In games, contests and lotteries, it means winning."

OWNER VERDICT: LABOT
OWNER FINAL EN: In a company, Gewinn = profit; in a lottery, Gewinn = prize.
OWNER NOTE: OWNER approved linguistic correction.

CARD 2/50

Audit Card ID: b1-gewinn
Production identity: b1-gewinn
DE: Gewinn
Current EN: Profit
Card type: standardStudy
Production index: 1105

SEVERITY: TECHNICAL
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
["profit","laimests"]

LUNA RECOMMENDED:
Replace "laimests" with the matching English target token "prize".

LUNA REASON:
The second accent target is Latvian and is absent from the English text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Profit" differs from audit Current EN "In games, contests and lotteries, it means winning."

OWNER VERDICT: LABOT
OWNER FINAL EN: ["profit","prize"]
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 3/50

Audit Card ID: b1-sich-gewöhnen
Production identity: b1-sich-gewöhnen
DE: sich gewöhnen
Current EN: Get used to
Card type: standardStudy
Production index: 1110

SEVERITY: HIGH
CATEGORY: TRANSLATION_ERROR
FIELD: study.important.text

CURRENT:
With sich the meaning is 'to get used to'; bez sich gewöhnen often means 'to get used to someone'.

LUNA RECOMMENDED:
With sich, the meaning is 'to get used to'; without sich, gewöhnen often means 'to get someone used to something'.

LUNA REASON:
The field contains Latvian and gives the wrong meaning for gewöhnen without sich.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Get used to" differs from audit Current EN "With sich the meaning is 'to get used to'; bez sich gewöhnen often means 'to get used to someone'."

OWNER VERDICT: LABOT
OWNER FINAL EN: With sich, the meaning is 'to get used to'; without sich, gewöhnen often means 'to get someone used to something'.
OWNER NOTE: OWNER approved linguistic correction.

CARD 3/50

Audit Card ID: b1-sich-gewöhnen
Production identity: b1-sich-gewöhnen
DE: sich gewöhnen
Current EN: Get used to
Card type: standardStudy
Production index: 1110

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.important

CURRENT:
With

LUNA RECOMMENDED:
Without

LUNA REASON:
The second highlight says “With”, but it should emphasize the contrasting “without sich” idea.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Get used to" differs from audit Current EN "With sich the meaning is 'to get used to'; bez sich gewöhnen often means 'to get used to someone'."

OWNER VERDICT: LABOT
OWNER FINAL EN: Without
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 4/50

Audit Card ID: b1-gitter
Production identity: b1-gitter
DE: Gitter
Current EN: Grid
Card type: standardStudy
Production index: 1115

SEVERITY: HIGH
CATEGORY: LEARNER_PERSPECTIVE_ERROR
FIELD: study.important.text

CURRENT:
Das Geländer is more commonly used for margaram; das Gitter is not a general word for any railing.

LUNA RECOMMENDED:
Das Geländer is more commonly used for railings; das Gitter is not a general word for any railing.

LUNA REASON:
The sentence contains the Latvian word “margaram”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Grid" differs from audit Current EN "Das Geländer is more commonly used for margaram; das Gitter is not a general word for any railing."

OWNER VERDICT: LABOT
OWNER FINAL EN: Das Geländer is more commonly used for railings; das Gitter is not a general word for any railing.
OWNER NOTE: OWNER approved linguistic correction.

CARD 4/50

Audit Card ID: b1-gitter
Production identity: b1-gitter
DE: Gitter
Current EN: Grid
Card type: standardStudy
Production index: 1115

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
the door

LUNA RECOMMENDED:
door

LUNA REASON:
The highlighted phrase does not occur in the English target text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Grid" differs from audit Current EN "Das Geländer is more commonly used for margaram; das Gitter is not a general word for any railing."

OWNER VERDICT: LABOT
OWNER FINAL EN: door
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 5/50

Audit Card ID: b1-greifen
Production identity: b1-greifen
DE: greifen
Current EN: To grasp
Card type: standardStudy
Production index: 1140

SEVERITY: HIGH
CATEGORY: TYPO
FIELD: study.explanation

CURRENT:
zu Maaschen greifen

LUNA RECOMMENDED:
zu Maßnahmen greifen

LUNA REASON:
The German expression is misspelled, making the key example inaccurate.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To grasp" differs from audit Current EN "zu Maaschen greifen"

OWNER VERDICT: LABOT
OWNER FINAL EN: zu Maßnahmen greifen
OWNER NOTE: OWNER approved linguistic correction.

CARD 5/50

Audit Card ID: b1-greifen
Production identity: b1-greifen
DE: greifen
Current EN: To grasp
Card type: standardStudy
Production index: 1140

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
Grasp / grasp

LUNA RECOMMENDED:
Grasp / encompass

LUNA REASON:
The second gloss repeats “grasp” and misses the meaning “to encompass”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To grasp" differs from audit Current EN "zu Maaschen greifen"

OWNER VERDICT: LABOT
OWNER FINAL EN: Grasp / encompass
OWNER NOTE: OWNER approved linguistic correction.

CARD 6/50

Audit Card ID: b1-griff
Production identity: b1-griff
DE: Griff
Current EN: The handle
Card type: standardStudy
Production index: 1144

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
Thistle

LUNA RECOMMENDED:
Handle

LUNA REASON:
Henkel means “handle”, not “thistle”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "The handle" differs from audit Current EN "Thistle"

OWNER VERDICT: LABOT
OWNER FINAL EN: Handle
OWNER NOTE: OWNER approved linguistic correction.

CARD 6/50

Audit Card ID: b1-griff
Production identity: b1-griff
DE: Griff
Current EN: The handle
Card type: standardStudy
Production index: 1144

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important.text

CURRENT:
For cups or buckets, often the Henkel fits better than the Griff.

LUNA RECOMMENDED:
For cups or buckets, Henkel is often more appropriate than Griff.

LUNA REASON:
“The Henkel fits better” is unnatural English for choosing the correct word.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "The handle" differs from audit Current EN "Thistle"

OWNER VERDICT: LABOT
OWNER FINAL EN: For cups or buckets, Henkel is often more appropriate than Griff.
OWNER NOTE: OWNER approved linguistic correction.

CARD 6/50

Audit Card ID: b1-griff
Production identity: b1-griff
DE: Griff
Current EN: The handle
Card type: standardStudy
Production index: 1144

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
vieta

LUNA RECOMMENDED:
where

LUNA REASON:
The accent contains a Latvian token that is absent from the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "The handle" differs from audit Current EN "Thistle"

OWNER VERDICT: LABOT
OWNER FINAL EN: where
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 6/50

Audit Card ID: b1-griff
Production identity: b1-griff
DE: Griff
Current EN: The handle
Card type: standardStudy
Production index: 1144

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
satver

LUNA RECOMMENDED:
grab

LUNA REASON:
The accent contains a Latvian token that is absent from the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "The handle" differs from audit Current EN "Thistle"

OWNER VERDICT: LABOT
OWNER FINAL EN: grab
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 7/50

Audit Card ID: b1-hauen
Production identity: b1-hauen
DE: hauen
Current EN: Hit
Card type: standardStudy
Production index: 1207

SEVERITY: MEDIUM
CATEGORY: WORDING_ERROR
FIELD: study.explanation

CURRENT:
hauen colloquially means to strike, cut or strike.

LUNA RECOMMENDED:
hauen colloquially means to hit, chop or strike.

LUNA REASON:
“Strike” is repeated and “chop” better expresses the cutting sense.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Hit" differs from audit Current EN "hauen colloquially means to strike, cut or strike."

OWNER VERDICT: LABOT
OWNER FINAL EN: hauen colloquially means to hit, chop or strike.
OWNER NOTE: OWNER approved linguistic correction.

CARD 7/50

Audit Card ID: b1-hauen
Production identity: b1-hauen
DE: hauen
Current EN: Hit
Card type: standardStudy
Production index: 1207

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.examples[1].lv

CURRENT:
A worker to cut wood.

LUNA RECOMMENDED:
A worker chops wood.

LUNA REASON:
The current text is an incomplete sentence.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Hit" differs from audit Current EN "hauen colloquially means to strike, cut or strike."

OWNER VERDICT: LABOT
OWNER FINAL EN: A worker chops wood.
OWNER NOTE: OWNER approved linguistic correction.

CARD 7/50

Audit Card ID: b1-hauen
Production identity: b1-hauen
DE: hauen
Current EN: Hit
Card type: standardStudy
Production index: 1207

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Hey bro! has a separate phrase "Get lost!"

LUNA RECOMMENDED:
Hau ab! is a separate phrase meaning “Get lost!”

LUNA REASON:
“Hey bro!” is wrong and does not correspond to the German phrase.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Hit" differs from audit Current EN "hauen colloquially means to strike, cut or strike."

OWNER VERDICT: LABOT
OWNER FINAL EN: Hau ab! is a separate phrase meaning “Get lost!”
OWNER NOTE: OWNER approved linguistic correction.

CARD 7/50

Audit Card ID: b1-hauen
Production identity: b1-hauen
DE: hauen
Current EN: Hit
Card type: standardStudy
Production index: 1207

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
trieciens

LUNA RECOMMENDED:
blow

LUNA REASON:
The accent contains a Latvian token absent from the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Hit" differs from audit Current EN "hauen colloquially means to strike, cut or strike."

OWNER VERDICT: LABOT
OWNER FINAL EN: blow
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 8/50

Audit Card ID: b1-herausgeben
Production identity: b1-herausgeben
DE: herausgeben
Current EN: Issue
Card type: standardStudy
Production index: 1247

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
it can also mean to give or give something out.

LUNA RECOMMENDED:
it can also mean to hand something over or give something out.

LUNA REASON:
The repeated “give” is awkward and obscures the second meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Issue" differs from audit Current EN "it can also mean to give or give something out."

OWNER VERDICT: LABOT
OWNER FINAL EN: it can also mean to hand something over or give something out.
OWNER NOTE: OWNER approved linguistic correction.

CARD 8/50

Audit Card ID: b1-herausgeben
Production identity: b1-herausgeben
DE: herausgeben
Current EN: Issue
Card type: standardStudy
Production index: 1247

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
Issue / issue

LUNA RECOMMENDED:
Publish / hand out

LUNA REASON:
The two meanings are duplicated instead of distinguishing publishing from handing out.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Issue" differs from audit Current EN "it can also mean to give or give something out."

OWNER VERDICT: LABOT
OWNER FINAL EN: Publish / hand out
OWNER NOTE: OWNER approved linguistic correction.

CARD 8/50

Audit Card ID: b1-herausgeben
Production identity: b1-herausgeben
DE: herausgeben
Current EN: Issue
Card type: standardStudy
Production index: 1247

SEVERITY: HIGH
CATEGORY: LEARNER_PERSPECTIVE_ERROR
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Verlag gibt heraus = izdod; Behörde gibt heraus = izsniedz.

LUNA RECOMMENDED:
Verlag gibt heraus = publishes; Behörde gibt heraus = issues.

LUNA REASON:
The field contains Latvian translations instead of English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Issue" differs from audit Current EN "it can also mean to give or give something out."

OWNER VERDICT: LABOT
OWNER FINAL EN: Verlag gibt heraus = publishes; Behörde gibt heraus = issues.
OWNER NOTE: OWNER approved linguistic correction.

CARD 8/50

Audit Card ID: b1-herausgeben
Production identity: b1-herausgeben
DE: herausgeben
Current EN: Issue
Card type: standardStudy
Production index: 1247

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
izdod

LUNA RECOMMENDED:
publishes

LUNA REASON:
The accent contains a Latvian token absent from the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Issue" differs from audit Current EN "it can also mean to give or give something out."

OWNER VERDICT: LABOT
OWNER FINAL EN: publishes
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 8/50

Audit Card ID: b1-herausgeben
Production identity: b1-herausgeben
DE: herausgeben
Current EN: Issue
Card type: standardStudy
Production index: 1247

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
izsniedz

LUNA RECOMMENDED:
issues

LUNA REASON:
The accent contains a Latvian token absent from the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Issue" differs from audit Current EN "it can also mean to give or give something out."

OWNER VERDICT: LABOT
OWNER FINAL EN: issues
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 9/50

Audit Card ID: b1-hinweis
Production identity: b1-hinweis
DE: Hinweis
Current EN: Instruction
Card type: standardStudy
Production index: 1276

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
iesaka

LUNA RECOMMENDED:
advises

LUNA REASON:
The accent contains a Latvian word instead of an English word.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Instruction" differs from audit Current EN "iesaka"

OWNER VERDICT: LABOT
OWNER FINAL EN: advises
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 10/50

Audit Card ID: b1-horchen
Production identity: b1-horchen
DE: horchen
Current EN: To listen
Card type: standardStudy
Production index: 1309

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.tip.leftBlocks[0].text

CURRENT:
slepeni

LUNA RECOMMENDED:
furtively

LUNA REASON:
The accent contains a Latvian word instead of an English word.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To listen" differs from audit Current EN "slepeni"

OWNER VERDICT: LABOT
OWNER FINAL EN: furtively
OWNER NOTE: OWNER approved sectionAccent correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Horn • Horn → Horn
Associated repair note: Identisks dubultojums front kartītē nav pedagoģiski jēgpilns.

CARD 11/50

Audit Card ID: b1-hupe
Production identity: b1-hupe
DE: Hupe
Current EN: Horn • Horn
Card type: standardStudy
Production index: 1329

SEVERITY: HIGH
CATEGORY: MEANING
FIELD: study.important.text

CURRENT:
die Hupe = bugle or bugle. Plural: die Hupen.

LUNA RECOMMENDED:
die Hupe = horn or ship's horn. Plural: die Hupen.

LUNA REASON:
Bugle is incorrect here, and the two alternatives are duplicated.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Horn • Horn" differs from audit Current EN "die Hupe = bugle or bugle. Plural: die Hupen."

OWNER VERDICT: LABOT
OWNER FINAL EN: die Hupe = horn. Plural: die Hupen.
OWNER NOTE: “Bugle” nav Hupe parastā nozīme. Nav vajadzīgs arī “ship's horn” kā otrs galvenais gloss; vienkāršais “horn” ir precīzs learner-facing variants.

CARD 12/50

Audit Card ID: b1-irren
Production identity: b1-irren
DE: sich irren
Current EN: To be wrong
Card type: standardStudy
Production index: 1397

SEVERITY: HIGH
CATEGORY: SPELLING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: erren means to err or go astray.

LUNA RECOMMENDED:
Main idea: irren means to err or go astray.

LUNA REASON:
The German headword is misspelled as “erren”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To be wrong" differs from audit Current EN "Main idea: erren means to err or go astray."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: irren means to err or go astray.
OWNER NOTE: “erren” ir kļūdaina vācu lemma.

CARD 12/50

Audit Card ID: b1-irren
Production identity: b1-irren
DE: sich irren
Current EN: To be wrong
Card type: standardStudy
Production index: 1397

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_BROKEN
FIELD: study.sectionAccents.explanation.purple[1]

CURRENT:
Main

LUNA RECOMMENDED:
Remove the duplicate accent or apply it only once.

LUNA REASON:
The token is highlighted four times, but “Main” occurs only once.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To be wrong" differs from audit Current EN "Main idea: erren means to err or go astray."

OWNER VERDICT: LABOT
OWNER FINAL EN: REMOVE DUPLICATE ACCENTS
OWNER NOTE: Saglabāt tikai vienu matching “Main” accent; izņemt visus duplicate “Main” targets bez atbilstoša occurrence.

CARD 13/50

Audit Card ID: b1-kehren
Production identity: b1-kehren
DE: kehren
Current EN: To sweep
Card type: standardStudy
Production index: 1488

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.examples[2].lv

CURRENT:
He glances at the door.

LUNA RECOMMENDED:
He turns his gaze toward the door.

LUNA REASON:
“Glances” changes the meaning from deliberately turning one's gaze.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To sweep" differs from audit Current EN "He glances at the door."

OWNER VERDICT: LABOT
OWNER FINAL EN: He turns his gaze toward the door.
OWNER NOTE: “glances” maina kehren konstrukcijas nozīmi; šeit runa ir par apzinātu skatiena pavēršanu.

CARD 13/50

Audit Card ID: b1-kehren
Production identity: b1-kehren
DE: kehren
Current EN: To sweep
Card type: standardStudy
Production index: 1488

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Kehren is often used with broom and yard; zurückkehren is another word.

LUNA RECOMMENDED:
Kehren is often used with a broom in a yard; zurückkehren is a different word.

LUNA REASON:
The phrase is missing articles and “with broom and yard” is unnatural.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To sweep" differs from audit Current EN "He glances at the door."

OWNER VERDICT: LABOT
OWNER FINAL EN: Kehren is often used with a broom, for example when sweeping a yard; zurückkehren is a different verb.
OWNER NOTE: Dabiskāks EN un skaidrāks learner-facing kontrasts.

CARD 14/50

Audit Card ID: b1-kiefer
Production identity: b1-kiefer
DE: Kiefer
Current EN: Jaw
Card type: standardStudy
Production index: 1503

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important.text

CURRENT:
The article here is not a trifle; der and die completely change the meaning of a word.

LUNA RECOMMENDED:
The article here is not a minor detail; der and die completely change the word's meaning.

LUNA REASON:
“Not a trifle” is unnatural and too literary for this learner explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Jaw" differs from audit Current EN "The article here is not a trifle; der and die completely change the meaning of a word."

OWNER VERDICT: LABOT
OWNER FINAL EN: The article here is not a minor detail; der and die completely change the word's meaning.
OWNER NOTE: Luna correction apstiprināts.

CARD 14/50

Audit Card ID: b1-kiefer
Production identity: b1-kiefer
DE: Kiefer
Current EN: Jaw
Card type: standardStudy
Production index: 1503

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_BROKEN
FIELD: study.sectionAccents.important[0].purple[0]

CURRENT:
change The meaning of a word

LUNA RECOMMENDED:
Use “change the meaning of a word” with matching capitalization.

LUNA REASON:
The accented phrase does not match the English text because “The” has the wrong case.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Jaw" differs from audit Current EN "The article here is not a trifle; der and die completely change the meaning of a word."

OWNER VERDICT: LABOT
OWNER FINAL EN: change the word's meaning
OWNER NOTE: Accent jāatbilst izlabotā important teksta faktiskajai frāzei un capitalization.

CARD 14/50

Audit Card ID: b1-kiefer
Production identity: b1-kiefer
DE: Kiefer
Current EN: Jaw
Card type: standardStudy
Production index: 1503

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_FIELD
FIELD: study.sectionAccents.tip.leftBlocks[0].purple[0]

CURRENT:
artikuls

LUNA RECOMMENDED:
Replace it with the English token “article”.

LUNA REASON:
The accent contains a Latvian word rather than the English learner text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Jaw" differs from audit Current EN "The article here is not a trifle; der and die completely change the meaning of a word."

OWNER VERDICT: LABOT
OWNER FINAL EN: article
OWNER NOTE: LV token aizstāt ar matching EN tokenu.

CARD 15/50

Audit Card ID: b1-kippen
Production identity: b1-kippen
DE: kippen
Current EN: Overturn
Card type: standardStudy
Production index: 1508

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Main Idea: To kippen means to overturn, tilt, or tilt so that something loses its balance.

LUNA RECOMMENDED:
Main idea: kippen means to overturn or tilt something so that it loses its balance.

LUNA REASON:
“To kippen” is unsuitable here, and “tilt” is unnecessarily duplicated.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Overturn" differs from audit Current EN "Main Idea: To kippen means to overturn, tilt, or tilt so that something loses its balance."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: kippen means to overturn or tilt something so that it loses its balance.
OWNER NOTE: Noņemt nevajadzīgo “To kippen” un duplicate “tilt”.

CARD 15/50

Audit Card ID: b1-kippen
Production identity: b1-kippen
DE: kippen
Current EN: Overturn
Card type: standardStudy
Production index: 1508

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.examples[1].lv

CURRENT:
Does not tilt the chair back.

LUNA RECOMMENDED:
Do not tilt the chair back.

LUNA REASON:
The English is a fragment and does not match the Latvian imperative.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Overturn" differs from audit Current EN "Main Idea: To kippen means to overturn, tilt, or tilt so that something loses its balance."

OWNER VERDICT: LABOT
OWNER FINAL EN: Do not tilt the chair back.
OWNER NOTE: Nepieciešams imperatīvs.

CARD 15/50

Audit Card ID: b1-kippen
Production identity: b1-kippen
DE: kippen
Current EN: Overturn
Card type: standardStudy
Production index: 1508

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.comparison[2].meaning

CURRENT:
To cut

LUNA RECOMMENDED:
To turn over

LUNA REASON:
“umdrehen” means “to turn over”, not “to cut”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Overturn" differs from audit Current EN "Main Idea: To kippen means to overturn, tilt, or tilt so that something loses its balance."

OWNER VERDICT: LABOT
OWNER FINAL EN: To turn over
OWNER NOTE: umdrehen = to turn over / turn around, nevis to cut.

CARD 15/50

Audit Card ID: b1-kippen
Production identity: b1-kippen
DE: kippen
Current EN: Overturn
Card type: standardStudy
Production index: 1508

SEVERITY: MEDIUM
CATEGORY: GRAMMAR_ERROR
FIELD: study.important.text

CURRENT:
kippen is not simply fallen; often the first is a tilt or a sudden change in mood.

LUNA RECOMMENDED:
kippen is not simply fallen; it often involves a tilt or a sudden change in mood.

LUNA REASON:
“Often the first is a tilt” is ungrammatical and unclear.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Overturn" differs from audit Current EN "Main Idea: To kippen means to overturn, tilt, or tilt so that something loses its balance."

OWNER VERDICT: LABOT
OWNER FINAL EN: kippen does not simply mean “to fall”; it often involves tilting or a sudden change in mood.
OWNER NOTE: Luna recommendation joprojām atstāja nedabisko “not simply fallen”. OWNER FINAL ir gramatiski un semantiski skaidrāks.

CARD 15/50

Audit Card ID: b1-kippen
Production identity: b1-kippen
DE: kippen
Current EN: Overturn
Card type: standardStudy
Production index: 1508

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_BROKEN
FIELD: study.sectionAccents.important.purple[1]

CURRENT:
kippen

LUNA RECOMMENDED:
Remove the duplicate accent or apply it only once.

LUNA REASON:
The token is highlighted twice, but it occurs only once in the English text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Overturn" differs from audit Current EN "Main Idea: To kippen means to overturn, tilt, or tilt so that something loses its balance."

OWNER VERDICT: LABOT
OWNER FINAL EN: REMOVE DUPLICATE ACCENT
OWNER NOTE: “kippen” redzamajā tekstā ir tikai viens matching occurrence.

CARD 16/50

Audit Card ID: b1-klappen
Production identity: b1-klappen
DE: klappen
Current EN: Succeed
Card type: standardStudy
Production index: 1516

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_BROKEN
FIELD: study.sectionAccents.explanation.purple[1]

CURRENT:
Main

LUNA RECOMMENDED:
Remove the duplicate accents or highlight matching text only once.

LUNA REASON:
“Main” is repeated four times, but it occurs only once in the explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Succeed" differs from audit Current EN "Main"

OWNER VERDICT: LABOT
OWNER FINAL EN: REMOVE DUPLICATE ACCENTS
OWNER NOTE: Saglabāt tikai vienu matching “Main” accent.

CARD 16/50

Audit Card ID: b1-klappen
Production identity: b1-klappen
DE: klappen
Current EN: Succeed
Card type: standardStudy
Production index: 1516

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_FIELD
FIELD: study.sectionAccents.tip.leftBlocks[0].text.purple[0]

CURRENT:
izdosies

LUNA RECOMMENDED:
Replace it with the English token “work” or remove the accent.

LUNA REASON:
The accent contains a Latvian word and is absent from the English tip.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Succeed" differs from audit Current EN "Main"

OWNER VERDICT: LABOT
OWNER FINAL EN: work
OWNER NOTE: LV token aizstāt ar matching EN learner-facing tokenu.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Needy → Barely enough
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 17/50

Audit Card ID: b1-knapp
Production identity: b1-knapp
DE: knapp
Current EN: Needy
Card type: standardStudy
Production index: 1545

SEVERITY: HIGH
CATEGORY: translation
FIELD: study.translation

CURRENT:
Needy

LUNA RECOMMENDED:
Barely enough

LUNA REASON:
“Needy” usually describes a person lacking basic necessities, not a small or insufficient amount.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Barely enough
OWNER NOTE: “Needy” apzīmē trūcīgu cilvēku un neatbilst šīs kartītes knapp nozīmei.

CARD 17/50

Audit Card ID: b1-knapp
Production identity: b1-knapp
DE: knapp
Current EN: Needy
Card type: standardStudy
Production index: 1545

SEVERITY: MEDIUM
CATEGORY: meaning
FIELD: study.tip.leftBlocks[0].text

CURRENT:
knapp means: enough, but not nearly enough.

LUNA RECOMMENDED:
knapp means: enough, but barely enough.

LUNA REASON:
“Not nearly enough” contradicts the intended meaning of barely sufficient.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: knapp means: enough, but only barely.
OWNER NOTE: “not nearly enough” ir pretēja nozīme. OWNER FINAL ir dabiskāks par “enough, but barely enough”.

CARD 18/50

Audit Card ID: b1-kreuzen
Production identity: b1-kreuzen
DE: kreuzen
Current EN: To cross
Card type: standardStudy
Production index: 1634

SEVERITY: HIGH
CATEGORY: language
FIELD: study.explanation

CURRENT:
kreuzen means to cross or cross. Roads, lines or routes can sich kreuzen - cross.

LUNA RECOMMENDED:
kreuzen means to cross or intersect. Roads, lines, or routes can sich kreuzen—cross or intersect.

LUNA REASON:
The phrase repeats “cross” and leaves the German expression malformed in the English text.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To cross" differs from audit Current EN "kreuzen means to cross or cross. Roads, lines or routes can sich kreuzen - cross."

OWNER VERDICT: LABOT
OWNER FINAL EN: kreuzen means to cross; sich kreuzen means to intersect or cross each other, for example when roads, lines, or routes meet.
OWNER NOTE: Skaidri nodalīt transitive kreuzen un reflexive sich kreuzen lietojumu.

CARD 18/50

Audit Card ID: b1-kreuzen
Production identity: b1-kreuzen
DE: kreuzen
Current EN: To cross
Card type: standardStudy
Production index: 1634

SEVERITY: MEDIUM
CATEGORY: pedagogy
FIELD: study.comparison[0].meaning

CURRENT:
Cross / cross

LUNA RECOMMENDED:
To cross / intersect

LUNA REASON:
The two English glosses are repetitive and do not clearly distinguish the meanings.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To cross" differs from audit Current EN "kreuzen means to cross or cross. Roads, lines or routes can sich kreuzen - cross."

OWNER VERDICT: LABOT
OWNER FINAL EN: To cross / intersect
OWNER NOTE: Novērst duplicate gloss.

CARD 18/50

Audit Card ID: b1-kreuzen
Production identity: b1-kreuzen
DE: kreuzen
Current EN: To cross
Card type: standardStudy
Production index: 1634

SEVERITY: TECHNICAL
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[0].example.purple

CURRENT:
krustojas

LUNA RECOMMENDED:
Replace with the matching English token “intersect”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To cross" differs from audit Current EN "kreuzen means to cross or cross. Roads, lines or routes can sich kreuzen - cross."

OWNER VERDICT: LABOT
OWNER FINAL EN: intersect
OWNER NOTE: LV target aizstāt ar EN.

CARD 18/50

Audit Card ID: b1-kreuzen
Production identity: b1-kreuzen
DE: kreuzen
Current EN: To cross
Card type: standardStudy
Production index: 1634

SEVERITY: TECHNICAL
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[1].example.purple

CURRENT:
we cross

LUNA RECOMMENDED:
Keep only if this is the intended English target; otherwise align it with the example.

LUNA REASON:
The accent is attached to a gloss rather than a matching target example token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To cross" differs from audit Current EN "kreuzen means to cross or cross. Roads, lines or routes can sich kreuzen - cross."

OWNER VERDICT: LABOT
OWNER FINAL EN: cross
OWNER NOTE: Izmantot mācāmo darbības vārda target tokenu, nevis pronoun + gloss fragmentu.

CARD 18/50

Audit Card ID: b1-kreuzen
Production identity: b1-kreuzen
DE: kreuzen
Current EN: To cross
Card type: standardStudy
Production index: 1634

SEVERITY: TECHNICAL
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[2].example.purple

CURRENT:
Mark it

LUNA RECOMMENDED:
Use the exact English target phrase from the example.

LUNA REASON:
The accent does not match the current example text “Please mark the correct answer with a cross.”

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To cross" differs from audit Current EN "kreuzen means to cross or cross. Roads, lines or routes can sich kreuzen - cross."

OWNER VERDICT: LABOT
OWNER FINAL EN: cross
OWNER NOTE: Audit evidence rāda example: “Please mark the correct answer with a cross.” Tāpēc exact target token ir “cross”, nevis “Mark it”.

CARD 19/50

Audit Card ID: b1-kunde-2
Production identity: b1-kunde-2
DE: Kunde
Current EN: Customer
Card type: standardStudy
Production index: 1660
KUNDE SHARED PRODUCTION IDENTITY: YES

SEVERITY: MEDIUM
CATEGORY: language
FIELD: study.explanation

CURRENT:
In an older or literary language, die Kunde can mean a message or message.

LUNA RECOMMENDED:
In older or literary German, die Kunde can mean a message or piece of news.

LUNA REASON:
The phrase repeats “message” and “an older language” is unnatural English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Customer" differs from audit Current EN "In an older or literary language, die Kunde can mean a message or message."

OWNER VERDICT: LABOT
OWNER FINAL EN: In older or literary German, die Kunde can mean a message or piece of news.
OWNER NOTE: Novērst duplicate “message” un precizēt, ka runa ir par German register.

CARD 19/50

Audit Card ID: b1-kunde-2
Production identity: b1-kunde-2
DE: Kunde
Current EN: Customer
Card type: standardStudy
Production index: 1660
KUNDE SHARED PRODUCTION IDENTITY: YES

SEVERITY: MEDIUM
CATEGORY: naturalness
FIELD: study.examples[0].lv

CURRENT:
The customer pays at the cashier.

LUNA RECOMMENDED:
The customer pays at the checkout.

LUNA REASON:
“At the cashier” refers to the person, while this context normally uses “checkout”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Customer" differs from audit Current EN "In an older or literary language, die Kunde can mean a message or message."

OWNER VERDICT: LABOT
OWNER FINAL EN: The customer pays at the checkout.
OWNER NOTE: “at the checkout” ir dabiskāks šajā kontekstā.

CARD 19/50

Audit Card ID: b1-kunde-2
Production identity: b1-kunde-2
DE: Kunde
Current EN: Customer
Card type: standardStudy
Production index: 1660
KUNDE SHARED PRODUCTION IDENTITY: YES

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
klients

LUNA RECOMMENDED:
Replace with the English token “customer”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Customer" differs from audit Current EN "In an older or literary language, die Kunde can mean a message or message."

OWNER VERDICT: LABOT
OWNER FINAL EN: customer
OWNER NOTE: LV token aizstāt ar EN.

CARD 19/50

Audit Card ID: b1-kunde-2
Production identity: b1-kunde-2
DE: Kunde
Current EN: Customer
Card type: standardStudy
Production index: 1660
KUNDE SHARED PRODUCTION IDENTITY: YES

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
kliente

LUNA RECOMMENDED:
Replace with the English token “customer”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Customer" differs from audit Current EN "In an older or literary language, die Kunde can mean a message or message."

OWNER VERDICT: LABOT
OWNER FINAL EN: customer
OWNER NOTE: LV token aizstāt ar EN.

CARD 20/50

Audit Card ID: b1-kunde
Production identity: b1-kunde-2
DE: Kunde
Current EN: Customer
Card type: standardStudy
Production index: 1660
KUNDE SHARED PRODUCTION IDENTITY: YES
Audit alias note: Audit ID b1-kunde maps to production identity b1-kunde-2 at index 1660; not an independent production card.

SEVERITY: MEDIUM
CATEGORY: language
FIELD: study.explanation

CURRENT:
die Kunde is a message or message.

LUNA RECOMMENDED:
die Kunde is a message or piece of news.

LUNA REASON:
The English gloss repeats “message” unnecessarily.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Customer" differs from audit Current EN "die Kunde is a message or message."

OWNER VERDICT: LABOT
OWNER FINAL EN: In older or literary German, die Kunde can mean a message or piece of news.
OWNER NOTE: Apzināti izmantot TO PAŠU gala explanation kā CARD 19, lai alias findings neradītu savstarpēju OWNER FINAL collision.

CARD 20/50

Audit Card ID: b1-kunde
Production identity: b1-kunde-2
DE: Kunde
Current EN: Customer
Card type: standardStudy
Production index: 1660
KUNDE SHARED PRODUCTION IDENTITY: YES
Audit alias note: Audit ID b1-kunde maps to production identity b1-kunde-2 at index 1660; not an independent production card.

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
klients

LUNA RECOMMENDED:
Replace with the English token “customer”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Customer" differs from audit Current EN "die Kunde is a message or message."

OWNER VERDICT: LABOT
OWNER FINAL EN: customer
OWNER NOTE: Tas pats production field jānonāk pie vienas konsekventas EN accent vērtības.

CARD 21/50

Audit Card ID: b1-kündigen
Production identity: b1-kündigen
DE: kündigen
Current EN: Terminate the job
Card type: standardStudy
Production index: 1665

SEVERITY: HIGH
CATEGORY: translation
FIELD: study.translation

CURRENT:
Terminate the job

LUNA RECOMMENDED:
To quit one’s job / to give notice

LUNA REASON:
“Terminate the job” does not mean that a person resigns from employment.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To quit one’s job / to give notice
OWNER NOTE: OWNER approved linguistic correction.

CARD 21/50

Audit Card ID: b1-kündigen
Production identity: b1-kündigen
DE: kündigen
Current EN: Terminate the job
Card type: standardStudy
Production index: 1665

SEVERITY: HIGH
CATEGORY: translation
FIELD: study.examples[0].lv

CURRENT:
I commend the work.

LUNA RECOMMENDED:
I quit my job.

LUNA REASON:
“Commend” means praise and is unrelated to kündigen in this context.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: I quit my job.
OWNER NOTE: OWNER approved linguistic correction.

CARD 21/50

Audit Card ID: b1-kündigen
Production identity: b1-kündigen
DE: kündigen
Current EN: Terminate the job
Card type: standardStudy
Production index: 1665

SEVERITY: MEDIUM
CATEGORY: translation
FIELD: study.examples[2].lv

CURRENT:
We break the contract at the end of the month.

LUNA RECOMMENDED:
We terminate the contract at the end of the month.

LUNA REASON:
“Break the contract” is less accurate and can imply a breach rather than formal termination.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: We terminate the contract at the end of the month.
OWNER NOTE: OWNER approved linguistic correction.

CARD 21/50

Audit Card ID: b1-kündigen
Production identity: b1-kündigen
DE: kündigen
Current EN: Terminate the job
Card type: standardStudy
Production index: 1665

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[0].meaning

CURRENT:
uzteikt

LUNA RECOMMENDED:
Replace with the English token “quit”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: quit
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 21/50

Audit Card ID: b1-kündigen
Production identity: b1-kündigen
DE: kündigen
Current EN: Terminate the job
Card type: standardStudy
Production index: 1665

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[1].meaning

CURRENT:
atlaist no darba

LUNA RECOMMENDED:
Replace with the English token “dismiss from work”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: dismiss from work
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 22/50

Audit Card ID: b1-kuppeln
Production identity: b1-kuppeln
DE: kuppeln
Current EN: To connect
Card type: standardStudy
Production index: 1675

SEVERITY: MEDIUM
CATEGORY: grammar
FIELD: study.important

CURRENT:
kuppeln is not a general 'connect' for all cases; connect more often in everyday life.

LUNA RECOMMENDED:
kuppeln is not a general word for “connect” in all situations; verbinden is more common in everyday life.

LUNA REASON:
The second clause lacks a subject and makes the comparison grammatically unclear.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To connect" differs from audit Current EN "kuppeln is not a general 'connect' for all cases; connect more often in everyday life."

OWNER VERDICT: LABOT
OWNER FINAL EN: kuppeln is not a general word for “connect” in all situations; verbinden is more common in everyday life.
OWNER NOTE: OWNER approved linguistic correction.

CARD 22/50

Audit Card ID: b1-kuppeln
Production identity: b1-kuppeln
DE: kuppeln
Current EN: To connect
Card type: standardStudy
Production index: 1675

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[0].example.purple

CURRENT:
piekabina

LUNA RECOMMENDED:
Replace with the English token “hitches”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To connect" differs from audit Current EN "kuppeln is not a general 'connect' for all cases; connect more often in everyday life."

OWNER VERDICT: LABOT
OWNER FINAL EN: hitches
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 22/50

Audit Card ID: b1-kuppeln
Production identity: b1-kuppeln
DE: kuppeln
Current EN: To connect
Card type: standardStudy
Production index: 1675

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[1].example.purple

CURRENT:
savieno

LUNA RECOMMENDED:
Replace with the English token “connects”.

LUNA REASON:
The section accent contains Latvian instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To connect" differs from audit Current EN "kuppeln is not a general 'connect' for all cases; connect more often in everyday life."

OWNER VERDICT: LABOT
OWNER FINAL EN: connects
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 22/50

Audit Card ID: b1-kuppeln
Production identity: b1-kuppeln
DE: kuppeln
Current EN: To connect
Card type: standardStudy
Production index: 1675

SEVERITY: HIGH
CATEGORY: section-accent
FIELD: study.sectionAccents.comparison[2].example.purple

CURRENT:
I connected

LUNA RECOMMENDED:
Align with the current English example or remove the accent.

LUNA REASON:
The accent does not match any current English example text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To connect" differs from audit Current EN "kuppeln is not a general 'connect' for all cases; connect more often in everyday life."

OWNER VERDICT: LABOT
OWNER FINAL EN: connected
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 23/50

Audit Card ID: b1-laden
Production identity: b1-laden
DE: laden
Current EN: To load
Card type: standardStudy
Production index: 1700

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_EXPRESSION
FIELD: study.tip

CURRENT:
Items in the car or battery with electricity → laden.

LUNA RECOMMENDED:
Items in a car or a battery being charged → laden.

LUNA REASON:
“Battery with electricity” is unnatural English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To load" differs from audit Current EN "Items in the car or battery with electricity → laden."

OWNER VERDICT: LABOT
OWNER FINAL EN: Items in a car or a battery being charged → laden.
OWNER NOTE: OWNER approved linguistic correction.

CARD 23/50

Audit Card ID: b1-laden
Production identity: b1-laden
DE: laden
Current EN: To load
Card type: standardStudy
Production index: 1700

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
piekraut

LUNA RECOMMENDED:
load

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To load" differs from audit Current EN "Items in the car or battery with electricity → laden."

OWNER VERDICT: LABOT
OWNER FINAL EN: load
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 24/50

Audit Card ID: b1-lager
Production identity: b1-lager
DE: Lager
Current EN: Warehouse
Card type: standardStudy
Production index: 1704

SEVERITY: MEDIUM
CATEGORY: TRANSLATION_ACCURACY
FIELD: study.examples[0].enText

CURRENT:
The goods are in stock.

LUNA RECOMMENDED:
The goods are in the warehouse.

LUNA REASON:
The German source refers to a warehouse, not necessarily available stock.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Warehouse" differs from audit Current EN "The goods are in stock."

OWNER VERDICT: LABOT
OWNER FINAL EN: The goods are in the warehouse.
OWNER NOTE: OWNER approved linguistic correction.

CARD 24/50

Audit Card ID: b1-lager
Production identity: b1-lager
DE: Lager
Current EN: Warehouse
Card type: standardStudy
Production index: 1704

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
nometne

LUNA RECOMMENDED:
camp

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Warehouse" differs from audit Current EN "The goods are in stock."

OWNER VERDICT: LABOT
OWNER FINAL EN: camp
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 25/50

Audit Card ID: b1-inhalt
Production identity: b1-inhalt
DE: Inhalt
Current EN: Content
Card type: standardStudy
Production index: 1709

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
saturs

LUNA RECOMMENDED:
content

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Content" differs from audit Current EN "saturs"

OWNER VERDICT: LABOT
OWNER FINAL EN: content
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 25/50

Audit Card ID: b1-inhalt
Production identity: b1-inhalt
DE: Inhalt
Current EN: Content
Card type: standardStudy
Production index: 1709

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
apjoms

LUNA RECOMMENDED:
volume

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Content" differs from audit Current EN "saturs"

OWNER VERDICT: LABOT
OWNER FINAL EN: volume
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 25/50

Audit Card ID: b1-inhalt
Production identity: b1-inhalt
DE: Inhalt
Current EN: Content
Card type: standardStudy
Production index: 1709

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[0].example.purple

CURRENT:
Saturs

LUNA RECOMMENDED:
Content

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Content" differs from audit Current EN "saturs"

OWNER VERDICT: LABOT
OWNER FINAL EN: Content
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 25/50

Audit Card ID: b1-inhalt
Production identity: b1-inhalt
DE: Inhalt
Current EN: Content
Card type: standardStudy
Production index: 1709

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[2].example.purple

CURRENT:
Apjoms

LUNA RECOMMENDED:
Volume

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Content" differs from audit Current EN "saturs"

OWNER VERDICT: LABOT
OWNER FINAL EN: Volume
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 26/50

Audit Card ID: b1-kante
Production identity: b1-kante
DE: Kante
Current EN: Edge
Card type: standardStudy
Production index: 1710

SEVERITY: MEDIUM
CATEGORY: MEANING_ACCURACY
FIELD: study.explanation

CURRENT:
Main idea: die Kante is the edge or facet of an object. It is not an ordinary territorial boundary, but a physical sharp or clear edge.

LUNA RECOMMENDED:
Main idea: die Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp or clearly defined edge.

LUNA REASON:
“Facet” can mean a surface, not the physical edge meant here.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Edge" differs from audit Current EN "Main idea: die Kante is the edge or facet of an object. It is not an ordinary territorial boundary, but a physical sharp or clear edge."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: die Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp or clearly defined edge.
OWNER NOTE: OWNER approved linguistic correction.

CARD 26/50

Audit Card ID: b1-kante
Production identity: b1-kante
DE: Kante
Current EN: Edge
Card type: standardStudy
Production index: 1710

SEVERITY: MEDIUM
CATEGORY: TRANSLATION_ACCURACY
FIELD: study.examples[2].enText

CURRENT:
He puts the glass to the side.

LUNA RECOMMENDED:
He puts the glass near the edge.

LUNA REASON:
The current sentence loses the object-edge meaning of Kante.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Edge" differs from audit Current EN "Main idea: die Kante is the edge or facet of an object. It is not an ordinary territorial boundary, but a physical sharp or clear edge."

OWNER VERDICT: LABOT
OWNER FINAL EN: He puts the glass near the edge.
OWNER NOTE: OWNER approved linguistic correction.

CARD 26/50

Audit Card ID: b1-kante
Production identity: b1-kante
DE: Kante
Current EN: Edge
Card type: standardStudy
Production index: 1710

SEVERITY: MEDIUM
CATEGORY: GRAMMAR
FIELD: study.important

CURRENT:
Die Grenze is used for territorial boundaries; for the edge of the object often die Kante.

LUNA RECOMMENDED:
Die Grenze is used for territorial boundaries; the edge of an object is often called die Kante.

LUNA REASON:
The second clause is grammatically incomplete and awkward.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Edge" differs from audit Current EN "Main idea: die Kante is the edge or facet of an object. It is not an ordinary territorial boundary, but a physical sharp or clear edge."

OWNER VERDICT: LABOT
OWNER FINAL EN: Die Grenze is used for territorial boundaries; the edge of an object is often called die Kante.
OWNER NOTE: OWNER approved linguistic correction.

CARD 26/50

Audit Card ID: b1-kante
Production identity: b1-kante
DE: Kante
Current EN: Edge
Card type: standardStudy
Production index: 1710

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
mala

LUNA RECOMMENDED:
edge

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Edge" differs from audit Current EN "Main idea: die Kante is the edge or facet of an object. It is not an ordinary territorial boundary, but a physical sharp or clear edge."

OWNER VERDICT: LABOT
OWNER FINAL EN: edge
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 27/50

Audit Card ID: b1-landen
Production identity: b1-landen
DE: landen
Current EN: Sit down
Card type: standardStudy
Production index: 1715

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Sit down

LUNA RECOMMENDED:
To land

LUNA REASON:
Landen means “to land,” not “to sit down.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To land
OWNER NOTE: OWNER approved linguistic correction.

CARD 27/50

Audit Card ID: b1-landen
Production identity: b1-landen
DE: landen
Current EN: Sit down
Card type: standardStudy
Production index: 1715

SEVERITY: MEDIUM
CATEGORY: SEMANTIC_HIGHLIGHT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
sit down

LUNA RECOMMENDED:
land

LUNA REASON:
The accent reinforces the incorrect translation.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: land
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 27/50

Audit Card ID: b1-landen
Production identity: b1-landen
DE: landen
Current EN: Sit down
Card type: standardStudy
Production index: 1715

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
ierasties

LUNA RECOMMENDED:
arrive

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: arrive
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 27/50

Audit Card ID: b1-landen
Production identity: b1-landen
DE: landen
Current EN: Sit down
Card type: standardStudy
Production index: 1715

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.sectionAccents.comparison[1].example.purple

CURRENT:
ierodas

LUNA RECOMMENDED:
arrives

LUNA REASON:
Latvian appears in the English accent target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: arrives
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 28/50

Audit Card ID: b1-leisten
Production identity: b1-leisten
DE: leisten
Current EN: Perform
Card type: standardStudy
Production index: 1761

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
To leisten means to do or render some work, service or contribution.

LUNA RECOMMENDED:
Leisten means to perform work, provide a service, or make a contribution.

LUNA REASON:
The current wording is awkward and unnatural in English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Perform" differs from audit Current EN "To leisten means to do or render some work, service or contribution."

OWNER VERDICT: LABOT
OWNER FINAL EN: Leisten means to perform work, provide a service, or make a contribution.
OWNER NOTE: OWNER approved linguistic correction.

CARD 28/50

Audit Card ID: b1-leisten
Production identity: b1-leisten
DE: leisten
Current EN: Perform
Card type: standardStudy
Production index: 1761

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important

CURRENT:
sich leisten is a separate construction with the meaning 'to indulge'.

LUNA RECOMMENDED:
sich leisten is a separate construction meaning 'to afford'.

LUNA REASON:
“To indulge” is inaccurate here; the construction means “to afford”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Perform" differs from audit Current EN "To leisten means to do or render some work, service or contribution."

OWNER VERDICT: LABOT
OWNER FINAL EN: sich leisten is a separate construction meaning 'to afford'.
OWNER NOTE: OWNER approved linguistic correction.

CARD 29/50

Audit Card ID: b1-leistung
Production identity: b1-leistung
DE: Leistung
Current EN: An achievement
Card type: standardStudy
Production index: 1762

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.tip.leftBlocks[0].text

CURRENT:
For man, Leistung = performance; for a motor, Leistung = power.

LUNA RECOMMENDED:
For a person, Leistung means performance; for a motor, it means power.

LUNA REASON:
“For man” is unidiomatic and does not match the general meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "An achievement" differs from audit Current EN "For man, Leistung = performance; for a motor, Leistung = power."

OWNER VERDICT: LABOT
OWNER FINAL EN: For a person, Leistung means performance; for a motor, it means power.
OWNER NOTE: OWNER approved linguistic correction.

CARD 29/50

Audit Card ID: b1-leistung
Production identity: b1-leistung
DE: Leistung
Current EN: An achievement
Card type: standardStudy
Production index: 1762

SEVERITY: LOW
CATEGORY: CAPITALIZATION
FIELD: study.important.text

CURRENT:
Leistung is not just about the end result. it often evaluates performance or power itself.

LUNA RECOMMENDED:
Leistung is not just about the end result. It often evaluates performance or power itself.

LUNA REASON:
The second sentence starts with a lowercase letter.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "An achievement" differs from audit Current EN "For man, Leistung = performance; for a motor, Leistung = power."

OWNER VERDICT: LABOT
OWNER FINAL EN: Leistung is not just about the end result. It often evaluates performance or power itself.
OWNER NOTE: OWNER approved linguistic correction.

CARD 29/50

Audit Card ID: b1-leistung
Production identity: b1-leistung
DE: Leistung
Current EN: An achievement
Card type: standardStudy
Production index: 1762

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.explanation.purple

CURRENT:
Main,Main,Main,Main

LUNA RECOMMENDED:
Main

LUNA REASON:
The same target is highlighted four times, but it appears once in the explanation.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "An achievement" differs from audit Current EN "For man, Leistung = performance; for a motor, Leistung = power."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 29/50

Audit Card ID: b1-leistung
Production identity: b1-leistung
DE: Leistung
Current EN: An achievement
Card type: standardStudy
Production index: 1762

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
Performance

LUNA RECOMMENDED:
Performance,achievement,power

LUNA REASON:
Only one of the three English meanings is highlighted.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "An achievement" differs from audit Current EN "For man, Leistung = performance; for a motor, Leistung = power."

OWNER VERDICT: LABOT
OWNER FINAL EN: Performance,achievement,power
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 30/50

Audit Card ID: b1-locker
Production identity: b1-locker
DE: locker
Current EN: Loose
Card type: standardStudy
Production index: 1791

SEVERITY: HIGH
CATEGORY: GRAMMAR_AND_NATURALNESS
FIELD: study.explanation

CURRENT:
Main idea: locker means loose or loose, when something is not tightly secured. It means relaxed about people, conversation or mood.

LUNA RECOMMENDED:
Main idea: locker means loose when something is not tightly secured. When referring to people, conversation, or mood, it means relaxed.

LUNA REASON:
The explanation repeats “loose” and contains an ungrammatical phrase.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Loose" differs from audit Current EN "Main idea: locker means loose or loose, when something is not tightly secured. It means relaxed about people, conversation or mood."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: locker means loose when something is not tightly secured. When referring to people, conversation, or mood, it means relaxed.
OWNER NOTE: OWNER approved linguistic correction.

CARD 30/50

Audit Card ID: b1-locker
Production identity: b1-locker
DE: locker
Current EN: Loose
Card type: standardStudy
Production index: 1791

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.tip

CURRENT:
Think of the opposite of fest: if it's not tight, it's a locker.

LUNA RECOMMENDED:
Think of the opposite of fest: if it's not tight, it's loose.

LUNA REASON:
A locker is a storage compartment; it is not the English adjective “loose”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Loose" differs from audit Current EN "Main idea: locker means loose or loose, when something is not tightly secured. It means relaxed about people, conversation or mood."

OWNER VERDICT: LABOT
OWNER FINAL EN: Think of the opposite of fest: if it's not tight, it's loose.
OWNER NOTE: OWNER approved linguistic correction.

CARD 30/50

Audit Card ID: b1-locker
Production identity: b1-locker
DE: locker
Current EN: Loose
Card type: standardStudy
Production index: 1791

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
open

LUNA RECOMMENDED:
loose

LUNA REASON:
The highlighted meaning does not match the English comparison meaning “Loose, unattached”.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Loose" differs from audit Current EN "Main idea: locker means loose or loose, when something is not tightly secured. It means relaxed about people, conversation or mood."

OWNER VERDICT: LABOT
OWNER FINAL EN: loose
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 31/50

Audit Card ID: b1-los
Production identity: b1-los
DE: Los
Current EN: Lot
Card type: standardStudy
Production index: 1798

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: das Los is a lottery that is drawn or bought.

LUNA RECOMMENDED:
Main idea: das Los is a lottery ticket or lot that is drawn or bought.

LUNA REASON:
Das Los refers to a ticket or lot, not to the lottery itself.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Lot" differs from audit Current EN "Main idea: das Los is a lottery that is drawn or bought."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: das Los is a lottery ticket or lot that is drawn or bought.
OWNER NOTE: OWNER approved linguistic correction.

CARD 31/50

Audit Card ID: b1-los
Production identity: b1-los
DE: Los
Current EN: Lot
Card type: standardStudy
Production index: 1798

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.examples[1].lv

CURRENT:
With this lottery she won.

LUNA RECOMMENDED:
She won with this ticket.

LUNA REASON:
“With this lottery” is unnatural and changes the meaning of Los.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Lot" differs from audit Current EN "Main idea: das Los is a lottery that is drawn or bought."

OWNER VERDICT: LABOT
OWNER FINAL EN: She won with this ticket.
OWNER NOTE: OWNER approved linguistic correction.

CARD 31/50

Audit Card ID: b1-los
Production identity: b1-los
DE: Los
Current EN: Lot
Card type: standardStudy
Production index: 1798

SEVERITY: HIGH
CATEGORY: WORD_CLASS_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
Won

LUNA RECOMMENDED:
Winnings / prize

LUNA REASON:
The English noun is incorrectly given as the past-tense verb “won”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Lot" differs from audit Current EN "Main idea: das Los is a lottery that is drawn or bought."

OWNER VERDICT: LABOT
OWNER FINAL EN: Winnings / prize
OWNER NOTE: OWNER approved linguistic correction.

CARD 31/50

Audit Card ID: b1-los
Production identity: b1-los
DE: Los
Current EN: Lot
Card type: standardStudy
Production index: 1798

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
loze

LUNA RECOMMENDED:
lot

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Lot" differs from audit Current EN "Main idea: das Los is a lottery that is drawn or bought."

OWNER VERDICT: LABOT
OWNER FINAL EN: lot
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 31/50

Audit Card ID: b1-los
Production identity: b1-los
DE: Los
Current EN: Lot
Card type: standardStudy
Production index: 1798

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
laimests

LUNA RECOMMENDED:
winnings / prize

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Lot" differs from audit Current EN "Main idea: das Los is a lottery that is drawn or bought."

OWNER VERDICT: LABOT
OWNER FINAL EN: winnings / prize
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 31/50

Audit Card ID: b1-los
Production identity: b1-los
DE: Los
Current EN: Lot
Card type: standardStudy
Production index: 1798

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
liktenis

LUNA RECOMMENDED:
fate

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Lot" differs from audit Current EN "Main idea: das Los is a lottery that is drawn or bought."

OWNER VERDICT: LABOT
OWNER FINAL EN: fate
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 32/50

Audit Card ID: b1-macht
Production identity: b1-macht
DE: Macht
Current EN: Power
Card type: standardStudy
Production index: 1814

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.tip

CURRENT:
Die Macht, not die Kraft, thinks in politics and influence.

LUNA RECOMMENDED:
In politics and when talking about influence, think of die Macht, not die Kraft.

LUNA REASON:
The current sentence is ungrammatical and unclear.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Power" differs from audit Current EN "Die Macht, not die Kraft, thinks in politics and influence."

OWNER VERDICT: LABOT
OWNER FINAL EN: In politics and when talking about influence, think of die Macht, not die Kraft.
OWNER NOTE: OWNER approved linguistic correction.

CARD 32/50

Audit Card ID: b1-macht
Production identity: b1-macht
DE: Macht
Current EN: Power
Card type: standardStudy
Production index: 1814

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important

CURRENT:
die Kraft is the force of body or energy.

LUNA RECOMMENDED:
die Kraft is the physical force or energy of the body.

LUNA REASON:
“Force of body” is an unnatural English expression.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Power" differs from audit Current EN "Die Macht, not die Kraft, thinks in politics and influence."

OWNER VERDICT: LABOT
OWNER FINAL EN: die Kraft is the physical force or energy of the body.
OWNER NOTE: OWNER approved linguistic correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Mayor → Measure
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 33/50

Audit Card ID: b1-maß
Production identity: b1-maß
DE: Maß
Current EN: Mayor
Card type: standardStudy
Production index: 1844

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Mayor

LUNA RECOMMENDED:
Measure

LUNA REASON:
“Mayor” is a different word; Maß means “measure”.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Measure
OWNER NOTE: OWNER approved linguistic correction.

CARD 33/50

Audit Card ID: b1-maß
Production identity: b1-maß
DE: Maß
Current EN: Mayor
Card type: standardStudy
Production index: 1844

SEVERITY: MEDIUM
CATEGORY: GRAMMAR_AND_NATURALNESS
FIELD: study.tip

CURRENT:
In the singular, Maß is a measure; in the plural, Maße often has dimensions.

LUNA RECOMMENDED:
In the singular, Maß means a measure; in the plural, Maße often means dimensions.

LUNA REASON:
“Has dimensions” is not the correct verb for this meaning.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: In the singular, Maß means a measure; in the plural, Maße often means dimensions.
OWNER NOTE: OWNER approved linguistic correction.

CARD 33/50

Audit Card ID: b1-maß
Production identity: b1-maß
DE: Maß
Current EN: Mayor
Card type: standardStudy
Production index: 1844

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
mayor

LUNA RECOMMENDED:
measure

LUNA REASON:
The accent uses the incorrect English word “mayor”.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: measure
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 33/50

Audit Card ID: b1-maß
Production identity: b1-maß
DE: Maß
Current EN: Mayor
Card type: standardStudy
Production index: 1844

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
event

LUNA RECOMMENDED:
action / measure

LUNA REASON:
The highlighted word is absent from the English comparison meaning.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: action / measure
OWNER NOTE: OWNER approved sectionAccent correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: After when → After
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.translation

CURRENT:
After when

LUNA RECOMMENDED:
After

LUNA REASON:
“After when” is not natural English for nachdem.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: After
OWNER NOTE: OWNER approved linguistic correction.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.explanation

CURRENT:
Main idea: nachdem introduces a subordinate clause and means after when. In German, the verb in this subordinate clause comes at the end.

LUNA RECOMMENDED:
Main idea: nachdem introduces a subordinate clause and means after. In German, the verb in this subordinate clause comes at the end.

LUNA REASON:
The explanation repeats the incorrect translation “after when.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: nachdem introduces a subordinate clause and means after. In German, the verb in this subordinate clause comes at the end.
OWNER NOTE: OWNER approved linguistic correction.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: LOW
CATEGORY: GRAMMAR_AND_PUNCTUATION
FIELD: study.examples[0].lv

CURRENT:
After i had eaten i went to sleep.

LUNA RECOMMENDED:
After I had eaten, I went to sleep.

LUNA REASON:
English sentences require capital I and a comma after the introductory clause.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: After I had eaten, I went to sleep.
OWNER NOTE: OWNER approved linguistic correction.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: LOW
CATEGORY: PUNCTUATION
FIELD: study.examples[1].lv

CURRENT:
After the course was over we went home.

LUNA RECOMMENDED:
After the course was over, we went home.

LUNA REASON:
A comma is normally used after this introductory subordinate clause.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: After the course was over, we went home.
OWNER NOTE: OWNER approved linguistic correction.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.comparison[0].meaning

CURRENT:
After when

LUNA RECOMMENDED:
After

LUNA REASON:
The comparison repeats the inaccurate translation “after when.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: After
OWNER NOTE: OWNER approved linguistic correction.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
pirms

LUNA RECOMMENDED:
Before

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: Before
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 34/50

Audit Card ID: b1-nachdem
Production identity: b1-nachdem
DE: nachdem
Current EN: After when
Card type: standardStudy
Production index: 1941

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.important.purple[0]

CURRENT:
gegessen hatte

LUNA RECOMMENDED:
had eaten

LUNA REASON:
The accent targets a German phrase absent from the English text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: had eaten
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 35/50

Audit Card ID: b1-nachfrage
Production identity: b1-nachfrage
DE: Nachfrage
Current EN: Request
Card type: standardStudy
Production index: 1943

SEVERITY: HIGH
CATEGORY: SPELLING
FIELD: study.explanation

CURRENT:
Main idea: die Nachfacht in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question.

LUNA RECOMMENDED:
Main idea: die Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question.

LUNA REASON:
“Nachfacht” is a misspelling of the German vocabulary item Nachfrage.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Request" differs from audit Current EN "Main idea: die Nachfacht in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: die Nachfrage in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question.
OWNER NOTE: OWNER approved linguistic correction.

CARD 35/50

Audit Card ID: b1-nachfrage
Production identity: b1-nachfrage
DE: Nachfrage
Current EN: Request
Card type: standardStudy
Production index: 1943

SEVERITY: HIGH
CATEGORY: SPELLING
FIELD: study.tip

CURRENT:
In the market, Nachfacht is the opposite of Angebot.

LUNA RECOMMENDED:
In the market, Nachfrage is the opposite of Angebot.

LUNA REASON:
“Nachfacht” is misspelled in the learner-facing explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Request" differs from audit Current EN "Main idea: die Nachfacht in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question."

OWNER VERDICT: LABOT
OWNER FINAL EN: In the market, Nachfrage is the opposite of Angebot.
OWNER NOTE: OWNER approved linguistic correction.

CARD 35/50

Audit Card ID: b1-nachfrage
Production identity: b1-nachfrage
DE: Nachfrage
Current EN: Request
Card type: standardStudy
Production index: 1943

SEVERITY: HIGH
CATEGORY: SPELLING
FIELD: study.important

CURRENT:
die Nachfacht is not an ordinary question. Die Frage is used for a simple question.

LUNA RECOMMENDED:
die Nachfrage is not an ordinary question. Die Frage is used for a simple question.

LUNA REASON:
“Nachfacht” is misspelled in the learner-facing explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Request" differs from audit Current EN "Main idea: die Nachfacht in economics means the demand for goods or services. In correspondence, it can also mean an inquiry or an additional question."

OWNER VERDICT: LABOT
OWNER FINAL EN: die Nachfrage is not an ordinary question. Die Frage is used for a simple question.
OWNER NOTE: OWNER approved linguistic correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: To strive → To be inclined; to lean
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.translation

CURRENT:
To strive

LUNA RECOMMENDED:
To be inclined; to lean

LUNA REASON:
“To strive” does not express the meanings of neigen in this card.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To be inclined; to lean
OWNER NOTE: OWNER approved linguistic correction.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Physically, it can also mean bowing the head or an object.

LUNA RECOMMENDED:
Physically, it can also mean tilting the head or an object.

LUNA REASON:
“Bowing ... an object” is unnatural and misstates the physical meaning.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Physically, it can also mean tilting the head or an object.
OWNER NOTE: OWNER approved linguistic correction.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_FIELD
FIELD: study.tip

CURRENT:
neigen zu + kam?: nosliece uz kaut ko.

LUNA RECOMMENDED:
neigen zu + what case?: an inclination towards something.

LUNA REASON:
The learner-facing English field contains Latvian text.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: neigen zu + what case?: an inclination towards something.
OWNER NOTE: OWNER approved linguistic correction.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: HIGH
CATEGORY: GRAMMAR_AND_UNNATURAL_ENGLISH
FIELD: study.important

CURRENT:
neigen not sich nähern. neigen shows inclination or inclination, sich nähern shows approach.

LUNA RECOMMENDED:
neigen is not sich nähern. neigen shows an inclination or a slope, while sich nähern means to approach.

LUNA REASON:
The sentence is ungrammatical and repeats “inclination”; the German contrast needs clear English framing.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: neigen is not sich nähern. neigen shows an inclination or a slope, while sich nähern means to approach.
OWNER NOTE: OWNER approved linguistic correction.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
nosliecei

LUNA RECOMMENDED:
inclination

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: inclination
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
tuvoties

LUNA RECOMMENDED:
approach

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: approach
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 36/50

Audit Card ID: b1-neigen
Production identity: b1-neigen
DE: neigen
Current EN: To strive
Card type: standardStudy
Production index: 1972

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.tip.purple[0]

CURRENT:
nosliece

LUNA RECOMMENDED:
inclination

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: inclination
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 37/50

Audit Card ID: b1-neigung
Production identity: b1-neigung
DE: Neigung
Current EN: Inclination
Card type: standardStudy
Production index: 1973

SEVERITY: HIGH
CATEGORY: MEANING_OR_REFERENT_MISMATCH
FIELD: study.examples[1].lv

CURRENT:
His risk appetite is known.

LUNA RECOMMENDED:
Her tendency to take risks is well known.

LUNA REASON:
The English pronoun conflicts with the feminine Latvian source context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Inclination" differs from audit Current EN "His risk appetite is known."

OWNER VERDICT: LABOT
OWNER FINAL EN: Her tendency to take risks is well known.
OWNER NOTE: OWNER approved linguistic correction.

CARD 37/50

Audit Card ID: b1-neigung
Production identity: b1-neigung
DE: Neigung
Current EN: Inclination
Card type: standardStudy
Production index: 1973

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_COLLOCATION
FIELD: study.examples[2].lv

CURRENT:
The slope of the roof is high.

LUNA RECOMMENDED:
The roof has a steep slope.

LUNA REASON:
A slope is normally described as steep, not high, in this context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Inclination" differs from audit Current EN "His risk appetite is known."

OWNER VERDICT: LABOT
OWNER FINAL EN: The roof has a steep slope.
OWNER NOTE: OWNER approved linguistic correction.

CARD 37/50

Audit Card ID: b1-neigung
Production identity: b1-neigung
DE: Neigung
Current EN: Inclination
Card type: standardStudy
Production index: 1973

SEVERITY: MEDIUM
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.comparison[0].meaning

CURRENT:
Inclination, inclination • Inclination

LUNA RECOMMENDED:
Tendency, inclination • Slope

LUNA REASON:
The English meanings are duplicated and omit the distinct technical meaning “slope.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Inclination" differs from audit Current EN "His risk appetite is known."

OWNER VERDICT: LABOT
OWNER FINAL EN: Tendency, inclination • Slope
OWNER NOTE: OWNER approved linguistic correction.

CARD 37/50

Audit Card ID: b1-neigung
Production identity: b1-neigung
DE: Neigung
Current EN: Inclination
Card type: standardStudy
Production index: 1973

SEVERITY: MEDIUM
CATEGORY: GERMAN_IN_ENGLISH_FIELD
FIELD: study.important

CURRENT:
die Neigung is not simply Interesse. Neigung more often shows a constant inclination or slope.

LUNA RECOMMENDED:
die Neigung is not simply interest. Neigung more often shows a persistent tendency or a slope.

LUNA REASON:
German vocabulary labels are left untranslated in learner-facing English prose.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Inclination" differs from audit Current EN "His risk appetite is known."

OWNER VERDICT: LABOT
OWNER FINAL EN: die Neigung is not simply interest. Neigung more often shows a persistent tendency or a slope.
OWNER NOTE: OWNER approved linguistic correction.

CARD 37/50

Audit Card ID: b1-neigung
Production identity: b1-neigung
DE: Neigung
Current EN: Inclination
Card type: standardStudy
Production index: 1973

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
tieksme

LUNA RECOMMENDED:
tendency

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Inclination" differs from audit Current EN "His risk appetite is known."

OWNER VERDICT: LABOT
OWNER FINAL EN: tendency
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 38/50

Audit Card ID: b1-nerven
Production identity: b1-nerven
DE: nerven
Current EN: To annoy
Card type: standardStudy
Production index: 1976

SEVERITY: LOW
CATEGORY: GRAMMAR
FIELD: study.explanation

CURRENT:
Main idea: nerven is colloquial meaning to annoy or get on one's nerves.

LUNA RECOMMENDED:
Main idea: nerven is a colloquial verb meaning to annoy or get on one's nerves.

LUNA REASON:
The explanation is missing the article and noun needed for grammatical English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To annoy" differs from audit Current EN "Main idea: nerven is colloquial meaning to annoy or get on one's nerves."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: nerven is a colloquial verb meaning to annoy or get on one's nerves.
OWNER NOTE: OWNER approved linguistic correction.

CARD 38/50

Audit Card ID: b1-nerven
Production identity: b1-nerven
DE: nerven
Current EN: To annoy
Card type: standardStudy
Production index: 1976

SEVERITY: HIGH
CATEGORY: INACCURATE_TRANSLATION
FIELD: study.important

CURRENT:
nerven is talkative. In a more formal situation, stören is often safer.

LUNA RECOMMENDED:
nerven is colloquial. In a more formal situation, stören is often safer.

LUNA REASON:
“Talkative” incorrectly describes the register of nerven.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To annoy" differs from audit Current EN "Main idea: nerven is colloquial meaning to annoy or get on one's nerves."

OWNER VERDICT: LABOT
OWNER FINAL EN: nerven is colloquial. In a more formal situation, stören is often safer.
OWNER NOTE: OWNER approved linguistic correction.

CARD 38/50

Audit Card ID: b1-nerven
Production identity: b1-nerven
DE: nerven
Current EN: To annoy
Card type: standardStudy
Production index: 1976

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT_TARGET_MISSING
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
sadusmot

LUNA RECOMMENDED:
to anger

LUNA REASON:
The accent contains a Latvian token instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To annoy" differs from audit Current EN "Main idea: nerven is colloquial meaning to annoy or get on one's nerves."

OWNER VERDICT: LABOT
OWNER FINAL EN: to anger
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 39/50

Audit Card ID: b1-nüchtern
Production identity: b1-nüchtern
DE: nüchtern
Current EN: Not drunk
Card type: standardStudy
Production index: 1999

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Main idea: nüchtern means not intoxicated or in a clear mind.

LUNA RECOMMENDED:
Main idea: nüchtern means not intoxicated or clear-headed.

LUNA REASON:
“In a clear mind” is not idiomatic English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Not drunk" differs from audit Current EN "Main idea: nüchtern means not intoxicated or in a clear mind."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: nüchtern means not intoxicated or clear-headed.
OWNER NOTE: OWNER approved linguistic correction.

CARD 39/50

Audit Card ID: b1-nüchtern
Production identity: b1-nüchtern
DE: nüchtern
Current EN: Not drunk
Card type: standardStudy
Production index: 1999

SEVERITY: HIGH
CATEGORY: MEANING_OR_REFERENT_MISMATCH
FIELD: study.examples[2].lv

CURRENT:
He assesses the situation matter-of-factly.

LUNA RECOMMENDED:
She assesses the situation matter-of-factly.

LUNA REASON:
The English pronoun conflicts with the feminine Latvian source context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Not drunk" differs from audit Current EN "Main idea: nüchtern means not intoxicated or in a clear mind."

OWNER VERDICT: LABOT
OWNER FINAL EN: She assesses the situation matter-of-factly.
OWNER NOTE: OWNER approved linguistic correction.

CARD 39/50

Audit Card ID: b1-nüchtern
Production identity: b1-nüchtern
DE: nüchtern
Current EN: Not drunk
Card type: standardStudy
Production index: 1999

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.tip

CURRENT:
Alcohol, doctor or cool view: nüchtern.

LUNA RECOMMENDED:
Alcohol, a medical examination, or a clear-headed view: nüchtern.

LUNA REASON:
“Cool view” is not a natural rendering of a clear-headed perspective.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Not drunk" differs from audit Current EN "Main idea: nüchtern means not intoxicated or in a clear mind."

OWNER VERDICT: LABOT
OWNER FINAL EN: Alcohol, a medical examination, or a clear-headed view: nüchtern.
OWNER NOTE: OWNER approved linguistic correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
In grammar, Objekt means complement.

LUNA RECOMMENDED:
In grammar, Objekt means object.

LUNA REASON:
The grammatical English term is “object,” not “complement.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: In grammar, Objekt means object.
OWNER NOTE: OWNER approved linguistic correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.examples[2].lv

CURRENT:
In a sentence it is a complementizer.

LUNA RECOMMENDED:
In a sentence it is an object.

LUNA REASON:
“Complementizer” is a different grammatical term.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: In a sentence it is an object.
OWNER NOTE: OWNER approved linguistic correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
Object • Complementizer in grammar

LUNA RECOMMENDED:
Object • Object in grammar

LUNA REASON:
“Complementizer” is not the English term for Objekt.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: Object • Object in grammar
OWNER NOTE: OWNER approved linguistic correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
Subject

LUNA RECOMMENDED:
Object or item

LUNA REASON:
Gegenstand means an object or item, not a grammatical subject.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: Object or item
OWNER NOTE: OWNER approved linguistic correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important

CURRENT:
In everyday life, an Object can also be a building or an observable target; in grammar it is a complementizer.

LUNA RECOMMENDED:
In everyday life, an object can also be a building or a target being observed; in grammar it is an object.

LUNA REASON:
The grammatical term “complementizer” is incorrect.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: In everyday life, an object can also be a building or a target being observed; in grammar it is an object.
OWNER NOTE: OWNER approved linguistic correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
adder

LUNA RECOMMENDED:
object

LUNA REASON:
The accent highlights an unrelated word instead of the grammatical meaning.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: object
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 40/50

Audit Card ID: b1-objekt
Production identity: b1-objekt
DE: Objekt
Current EN: Object
Card type: standardStudy
Production index: 2010

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.important.red

CURRENT:
adder

LUNA RECOMMENDED:
object

LUNA REASON:
The accent highlights an unrelated word instead of the grammatical meaning.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Object" differs from audit Current EN "In grammar, Objekt means complement."

OWNER VERDICT: LABOT
OWNER FINAL EN: object
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 41/50

Audit Card ID: b1-opfern
Production identity: b1-opfern
DE: opfern
Current EN: To sacrifice
Card type: standardStudy
Production index: 2035

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[2].meaning

CURRENT:
To join, to actively help

LUNA RECOMMENDED:
To get involved, to actively help

LUNA REASON:
sich einsetzen means getting involved or committing oneself, not simply joining.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To sacrifice" differs from audit Current EN "To join, to actively help"

OWNER VERDICT: LABOT
OWNER FINAL EN: To get involved, to actively help
OWNER NOTE: OWNER approved linguistic correction.

CARD 41/50

Audit Card ID: b1-opfern
Production identity: b1-opfern
DE: opfern
Current EN: To sacrifice
Card type: standardStudy
Production index: 2035

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
ziedot

LUNA RECOMMENDED:
donate

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To sacrifice" differs from audit Current EN "To join, to actively help"

OWNER VERDICT: LABOT
OWNER FINAL EN: donate
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 41/50

Audit Card ID: b1-opfern
Production identity: b1-opfern
DE: opfern
Current EN: To sacrifice
Card type: standardStudy
Production index: 2035

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
iestāties

LUNA RECOMMENDED:
to get involved

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To sacrifice" differs from audit Current EN "To join, to actively help"

OWNER VERDICT: LABOT
OWNER FINAL EN: to get involved
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 42/50

Audit Card ID: b1-periode
Production identity: b1-periode
DE: Periode
Current EN: Period
Card type: standardStudy
Production index: 2080

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
periods

LUNA RECOMMENDED:
period

LUNA REASON:
The accent does not match the singular English meaning shown in the comparison.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Period" differs from audit Current EN "periods"

OWNER VERDICT: LABOT
OWNER FINAL EN: period
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 42/50

Audit Card ID: b1-periode
Production identity: b1-periode
DE: Periode
Current EN: Period
Card type: standardStudy
Production index: 2080

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
laika posms

LUNA RECOMMENDED:
period of time

LUNA REASON:
The accent contains a Latvian phrase instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Period" differs from audit Current EN "periods"

OWNER VERDICT: LABOT
OWNER FINAL EN: period of time
OWNER NOTE: OWNER approved sectionAccent correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Maintain → To take care of; to tend
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 43/50

Audit Card ID: b1-pflegen
Production identity: b1-pflegen
DE: pflegen
Current EN: Maintain
Card type: standardStudy
Production index: 2099

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Maintain

LUNA RECOMMENDED:
To take care of; to tend

LUNA REASON:
Maintain does not cover the main meaning of pflegen in these contexts.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To take care of; to tend
OWNER NOTE: OWNER approved linguistic correction.

CARD 43/50

Audit Card ID: b1-pflegen
Production identity: b1-pflegen
DE: pflegen
Current EN: Maintain
Card type: standardStudy
Production index: 2099

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
The construction pflegen zu + irregularity means 'tend to do'.

LUNA RECOMMENDED:
The construction pflegen zu + infinitive means “tend to do”.

LUNA REASON:
“Irregularity” is an incorrect translation of infinitive.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: The construction pflegen zu + infinitive means “tend to do”.
OWNER NOTE: OWNER approved linguistic correction.

CARD 43/50

Audit Card ID: b1-pflegen
Production identity: b1-pflegen
DE: pflegen
Current EN: Maintain
Card type: standardStudy
Production index: 2099

SEVERITY: HIGH
CATEGORY: TYPOGRAPHICAL_ERROR
FIELD: study.tip

CURRENT:
Grooming is pflegen; caring more broadly is sich küszimmer um.

LUNA RECOMMENDED:
Grooming or care is pflegen; caring more broadly is sich kümmern um.

LUNA REASON:
The German phrase is misspelled and contains the malformed “küszimmer.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Grooming or care is pflegen; caring more broadly is sich kümmern um.
OWNER NOTE: OWNER approved linguistic correction.

CARD 43/50

Audit Card ID: b1-pflegen
Production identity: b1-pflegen
DE: pflegen
Current EN: Maintain
Card type: standardStudy
Production index: 2099

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important

CURRENT:
pflegen zu + irregular is a special, slightly more formal construction: 'tend to do'.

LUNA RECOMMENDED:
pflegen zu + infinitive is a special, slightly more formal construction: “tend to do”.

LUNA REASON:
“Irregular” incorrectly replaces the grammatical term “infinitive.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: pflegen zu + infinitive is a special, slightly more formal construction: “tend to do”.
OWNER NOTE: OWNER approved linguistic correction.

CARD 43/50

Audit Card ID: b1-pflegen
Production identity: b1-pflegen
DE: pflegen
Current EN: Maintain
Card type: standardStudy
Production index: 2099

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
kopt

LUNA RECOMMENDED:
take care of

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: take care of
OWNER NOTE: OWNER approved sectionAccent correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Inspection → Test; sample; rehearsal
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 44/50

Audit Card ID: b1-probe
Production identity: b1-probe
DE: Probe
Current EN: Inspection
Card type: standardStudy
Production index: 2165

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Inspection

LUNA RECOMMENDED:
Test; sample; rehearsal

LUNA REASON:
Inspection is only one possible sense and excludes the core meanings shown here.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Test; sample; rehearsal
OWNER NOTE: OWNER approved linguistic correction.

CARD 44/50

Audit Card ID: b1-probe
Production identity: b1-probe
DE: Probe
Current EN: Inspection
Card type: standardStudy
Production index: 2165

SEVERITY: MEDIUM
CATEGORY: WORDING_ERROR
FIELD: study.tip

CURRENT:
Laboratory, test or concert - die Probe can be everywhere.

LUNA RECOMMENDED:
In a laboratory, a test, or a concert, die Probe can be used in different senses.

LUNA REASON:
“Can be everywhere” is unnatural and does not explain the contexts clearly.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: In a laboratory, a test, or a concert, die Probe can be used in different senses.
OWNER NOTE: OWNER approved linguistic correction.

CARD 44/50

Audit Card ID: b1-probe
Production identity: b1-probe
DE: Probe
Current EN: Inspection
Card type: standardStudy
Production index: 2165

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
inspection

LUNA RECOMMENDED:
test

LUNA REASON:
The accent highlights a narrower meaning than the comparison text and examples support.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: test
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 44/50

Audit Card ID: b1-probe
Production identity: b1-probe
DE: Probe
Current EN: Inspection
Card type: standardStudy
Production index: 2165

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
paraugs

LUNA RECOMMENDED:
sample

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: sample
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 45/50

Audit Card ID: b1-rang
Production identity: b1-rang
DE: Rang
Current EN: Rank
Card type: standardStudy
Production index: 2213

SEVERITY: MEDIUM
CATEGORY: WORDING_ERROR
FIELD: study.explanation

CURRENT:
der Rang means rank, rank, or place in a hierarchy.

LUNA RECOMMENDED:
der Rang means rank, level, or place in a hierarchy.

LUNA REASON:
“Rank” is unnecessarily repeated; Pakāpe is better represented by “level.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Rank" differs from audit Current EN "der Rang means rank, rank, or place in a hierarchy."

OWNER VERDICT: LABOT
OWNER FINAL EN: der Rang means rank, level, or place in a hierarchy.
OWNER NOTE: OWNER approved linguistic correction.

CARD 45/50

Audit Card ID: b1-rang
Production identity: b1-rang
DE: Rang
Current EN: Rank
Card type: standardStudy
Production index: 2213

SEVERITY: MEDIUM
CATEGORY: WORDING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
Rank, rank, place in the hierarchy

LUNA RECOMMENDED:
Rank, level, place in the hierarchy

LUNA REASON:
The English meaning list repeats “rank” instead of giving the distinct sense “level.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Rank" differs from audit Current EN "der Rang means rank, rank, or place in a hierarchy."

OWNER VERDICT: LABOT
OWNER FINAL EN: Rank, level, place in the hierarchy
OWNER NOTE: OWNER approved linguistic correction.

CARD 45/50

Audit Card ID: b1-rang
Production identity: b1-rang
DE: Rang
Current EN: Rank
Card type: standardStudy
Production index: 2213

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
rangs

LUNA RECOMMENDED:
rank

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Rank" differs from audit Current EN "der Rang means rank, rank, or place in a hierarchy."

OWNER VERDICT: LABOT
OWNER FINAL EN: rank
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 45/50

Audit Card ID: b1-rang
Production identity: b1-rang
DE: Rang
Current EN: Rank
Card type: standardStudy
Production index: 2213

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
rinda

LUNA RECOMMENDED:
row

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Rank" differs from audit Current EN "der Rang means rank, rank, or place in a hierarchy."

OWNER VERDICT: LABOT
OWNER FINAL EN: row
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 45/50

Audit Card ID: b1-rang
Production identity: b1-rang
DE: Rang
Current EN: Rank
Card type: standardStudy
Production index: 2213

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
balkons

LUNA RECOMMENDED:
balcony

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Rank" differs from audit Current EN "der Rang means rank, rank, or place in a hierarchy."

OWNER VERDICT: LABOT
OWNER FINAL EN: balcony
OWNER NOTE: OWNER approved sectionAccent correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Contribution → Installment
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 46/50

Audit Card ID: b1-rate
Production identity: b1-rate
DE: Rate
Current EN: Contribution
Card type: standardStudy
Production index: 2225

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Contribution

LUNA RECOMMENDED:
Installment

LUNA REASON:
“Contribution” does not mean a regular payment installment.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Installment
OWNER NOTE: OWNER approved linguistic correction.

CARD 46/50

Audit Card ID: b1-rate
Production identity: b1-rate
DE: Rate
Current EN: Contribution
Card type: standardStudy
Production index: 2225

SEVERITY: MEDIUM
CATEGORY: COLLOCATION_ERROR
FIELD: study.examples[0].lv

CURRENT:
I pay for the car in parts.

LUNA RECOMMENDED:
I pay for the car in installments.

LUNA REASON:
“In parts” is unnatural for a payment plan.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: I pay for the car in installments.
OWNER NOTE: OWNER approved linguistic correction.

CARD 46/50

Audit Card ID: b1-rate
Production identity: b1-rate
DE: Rate
Current EN: Contribution
Card type: standardStudy
Production index: 2225

SEVERITY: MEDIUM
CATEGORY: NATURALNESS_ERROR
FIELD: study.tip

CURRENT:
A rate with an -e at the end is often the payment part.

LUNA RECOMMENDED:
Rate ending in -e often means an installment.

LUNA REASON:
“Payment part” is unnatural and less clear than “installment”.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Rate ending in -e often means an installment.
OWNER NOTE: OWNER approved linguistic correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Release → To clear; to vacate; to move out
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 47/50

Audit Card ID: b1-räumen
Production identity: b1-räumen
DE: räumen
Current EN: Release
Card type: standardStudy
Production index: 2235

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Release

LUNA RECOMMENDED:
To clear; to vacate; to move out

LUNA REASON:
“Release” does not cover the relevant meanings of “räumen”.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To clear; to vacate; to move out
OWNER NOTE: OWNER approved linguistic correction.

CARD 47/50

Audit Card ID: b1-räumen
Production identity: b1-räumen
DE: räumen
Current EN: Release
Card type: standardStudy
Production index: 2235

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.explanation

CURRENT:
Main idea: räumen means to make room free: to clear, clear or move out. aufräumen means to arrange.

LUNA RECOMMENDED:
Main idea: räumen means to make a place free: to clear, empty, or move out. aufräumen means to tidy up.

LUNA REASON:
The phrasing is ungrammatical, and “arrange” is wrong for cleaning or tidying.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: räumen means to make a place free: to clear, empty, or move out. aufräumen means to tidy up.
OWNER NOTE: OWNER approved linguistic correction.

CARD 47/50

Audit Card ID: b1-räumen
Production identity: b1-räumen
DE: räumen
Current EN: Release
Card type: standardStudy
Production index: 2235

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
Release, harvest, move out

LUNA RECOMMENDED:
To clear, empty, or move out

LUNA REASON:
“Harvest” is unrelated to “räumen” in this context.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To clear, empty, or move out
OWNER NOTE: OWNER approved linguistic correction.

CARD 47/50

Audit Card ID: b1-räumen
Production identity: b1-räumen
DE: räumen
Current EN: Release
Card type: standardStudy
Production index: 2235

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[2].meaning

CURRENT:
Leave room

LUNA RECOMMENDED:
To leave a place

LUNA REASON:
“Leave room” means make space, not depart from a place.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To leave a place
OWNER NOTE: OWNER approved linguistic correction.

CARD 47/50

Audit Card ID: b1-räumen
Production identity: b1-räumen
DE: räumen
Current EN: Release
Card type: standardStudy
Production index: 2235

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.important

CURRENT:
räumen is not just to arrange. Arrange everyday is usually aufräumen.

LUNA RECOMMENDED:
räumen does not just mean to tidy up. In everyday language, “to tidy up” is usually aufräumen.

LUNA REASON:
“Arrange everyday” is ungrammatical and misleading.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: räumen does not just mean to tidy up. In everyday language, “to tidy up” is usually aufräumen.
OWNER NOTE: OWNER approved linguistic correction.

CARD 48/50

Audit Card ID: b1-rausch
Production identity: b1-rausch
DE: Rausch
Current EN: Intoxication
Card type: standardStudy
Production index: 2237

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.examples[1].lv

CURRENT:
The dizziness slowly passed.

LUNA RECOMMENDED:
The intoxication slowly wore off.

LUNA REASON:
“Dizziness” does not match the meaning of German “Rausch”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Intoxication" differs from audit Current EN "The dizziness slowly passed."

OWNER VERDICT: LABOT
OWNER FINAL EN: The intoxication slowly wore off.
OWNER NOTE: OWNER approved linguistic correction.

CARD 48/50

Audit Card ID: b1-rausch
Production identity: b1-rausch
DE: Rausch
Current EN: Intoxication
Card type: standardStudy
Production index: 2237

SEVERITY: MEDIUM
CATEGORY: NATURALNESS_ERROR
FIELD: study.examples[2].lv

CURRENT:
They experienced an intoxication of feeling.

LUNA RECOMMENDED:
They experienced a powerful emotional high.

LUNA REASON:
“An intoxication of feeling” is not natural English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Intoxication" differs from audit Current EN "The dizziness slowly passed."

OWNER VERDICT: LABOT
OWNER FINAL EN: They experienced a powerful emotional high.
OWNER NOTE: OWNER approved linguistic correction.

CARD 48/50

Audit Card ID: b1-rausch
Production identity: b1-rausch
DE: Rausch
Current EN: Intoxication
Card type: standardStudy
Production index: 2237

SEVERITY: MEDIUM
CATEGORY: REPETITION_ERROR
FIELD: study.tip

CURRENT:
Rausch is a state in which a person is intoxicated or intoxicated.

LUNA RECOMMENDED:
Rausch is a state in which a person is intoxicated or carried away by strong emotions.

LUNA REASON:
The repeated adjective makes the explanation faulty and unclear.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Intoxication" differs from audit Current EN "The dizziness slowly passed."

OWNER VERDICT: LABOT
OWNER FINAL EN: Rausch is a state in which a person is intoxicated or carried away by strong emotions.
OWNER NOTE: OWNER approved linguistic correction.

ASSOCIATED TOP-LEVEL OWNER DECISION — field lv: Bursting → To tear; to rip; to burst
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

CARD 49/50

Audit Card ID: b1-reißen
Production identity: b1-reißen
DE: reißen
Current EN: Bursting
Card type: standardStudy
Production index: 2276

SEVERITY: HIGH
CATEGORY: FORM_ERROR
FIELD: study.translation

CURRENT:
Bursting

LUNA RECOMMENDED:
To tear; to rip; to burst

LUNA REASON:
“Bursting” is not an appropriate infinitive translation here.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: To tear; to rip; to burst
OWNER NOTE: OWNER approved linguistic correction.

CARD 49/50

Audit Card ID: b1-reißen
Production identity: b1-reißen
DE: reißen
Current EN: Bursting
Card type: standardStudy
Production index: 2276

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: reißen means to tear oneself or tear something. Reisen with one ß instead is not the same - it means to travel.

LUNA RECOMMENDED:
Main idea: reißen means to tear or be torn. reisen, with s instead of ß, is different and means to travel.

LUNA REASON:
“Tear oneself” is wrong, and “one ß instead” reverses the spelling contrast.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: reißen means to tear or be torn. reisen, with s instead of ß, is different and means to travel.
OWNER NOTE: OWNER approved linguistic correction.

CARD 49/50

Audit Card ID: b1-reißen
Production identity: b1-reißen
DE: reißen
Current EN: Bursting
Card type: standardStudy
Production index: 2276

SEVERITY: MEDIUM
CATEGORY: GRAMMAR_ERROR
FIELD: study.important

CURRENT:
Without object reißen is often broken; with an object - to tear or pull away.

LUNA RECOMMENDED:
Without an object, reißen often means “to break” or “to tear”; with an object, it means “to tear” or “pull away”.

LUNA REASON:
The first clause is ungrammatical and uses the wrong form.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Without an object, reißen often means “to break” or “to tear”; with an object, it means “to tear” or “pull away”.
OWNER NOTE: OWNER approved linguistic correction.

CARD 49/50

Audit Card ID: b1-reißen
Production identity: b1-reißen
DE: reißen
Current EN: Bursting
Card type: standardStudy
Production index: 2276

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.important.yellow

CURRENT:
objektu

LUNA RECOMMENDED:
object

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: object
OWNER NOTE: OWNER approved sectionAccent correction.

CARD 50/50

Audit Card ID: b1-richten
Production identity: b1-richten
DE: richten
Current EN: Direct
Card type: standardStudy
Production index: 2307

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: richten means to point or address something in a certain direction. Legally, it can also mean to sue.

LUNA RECOMMENDED:
Main idea: richten means to point or direct something in a certain direction. In a legal context, it can also mean to judge or try a case.

LUNA REASON:
“To sue” is not the stated legal meaning of “richten”.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Direct" differs from audit Current EN "Main idea: richten means to point or address something in a certain direction. Legally, it can also mean to sue."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: richten means to point or direct something in a certain direction. In a legal context, it can also mean to judge or try a case.
OWNER NOTE: OWNER approved linguistic correction.

CARD 50/50

Audit Card ID: b1-richten
Production identity: b1-richten
DE: richten
Current EN: Direct
Card type: standardStudy
Production index: 2307

SEVERITY: MEDIUM
CATEGORY: GRAMMAR_ERROR
FIELD: study.important

CURRENT:
richten is not common to send; it often means to direct a glance, question or attention.

LUNA RECOMMENDED:
richten is not the usual word for “to send”; it often means to direct a glance, question, or attention.

LUNA REASON:
“Not common to send” is ungrammatical and unnatural.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Direct" differs from audit Current EN "Main idea: richten means to point or address something in a certain direction. Legally, it can also mean to sue."

OWNER VERDICT: LABOT
OWNER FINAL EN: richten is not the usual word for “to send”; it often means to direct a glance, question, or attention.
OWNER NOTE: OWNER approved linguistic correction.

CARD 50/50

Audit Card ID: b1-richten
Production identity: b1-richten
DE: richten
Current EN: Direct
Card type: standardStudy
Production index: 2307

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.important.red

CURRENT:
to send

LUNA RECOMMENDED:
to direct

LUNA REASON:
The highlight contradicts the English explanation, which says “to send” is not the usual meaning.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Direct" differs from audit Current EN "Main idea: richten means to point or address something in a certain direction. Legally, it can also mean to sue."

OWNER VERDICT: LABOT
OWNER FINAL EN: to direct
OWNER NOTE: OWNER approved sectionAccent correction.

## Coverage summary

```text
EN–DE B1 HIGH OWNER REVIEW #12

Block size: 50
Unique cards selected: 50/50
HIGH findings represented: 88
Associated MEDIUM findings: 57
Associated LOW findings: 5
Associated WARNING findings: 0
sectionAccents TECHNICAL: 56
sectionAccents PEDAGOGICAL: 8
Duplicate/root-issue links: 0
Metadata anomalies: 39

CRITICAL-cycle cards excluded: PASS
HIGH #1 cards excluded: 25/25
HIGH #2 cards excluded: 25/25
HIGH #3 cards excluded: 25/25
HIGH #4 cards excluded: 25/25
HIGH #5 cards excluded: 25/25
HIGH #6 cards excluded: 25/25
HIGH #7 cards excluded: 25/25
HIGH #8 cards excluded: 50/50
HIGH #9 cards excluded: 50/50
HIGH #10 cards excluded: 50/50
HIGH #11 cards excluded: 50/50
b1-Gen-1055 resolved false-positive exclusion: PASS
b1-Krüppel-1651 resolved exclusion: PASS
HIGH #4 biegen normalized exclusion: PASS
HIGH #9 Tagung resolution exclusion: PASS
Tageordnung ghost-audit exclusion: PASS
Tagesordnung ghost-context exclusion: PASS
HIGH #11 Gehalt identities excluded: PASS

Previous HIGH selections loaded: 375
Duplicate previous logical cards: 0
Overlap with CRITICAL: 0
Overlap with HIGH #1: 0
Overlap with HIGH #2: 0
Overlap with HIGH #3: 0
Overlap with HIGH #4: 0
Overlap with HIGH #5: 0
Overlap with HIGH #6: 0
Overlap with HIGH #7: 0
Overlap with HIGH #8: 0
Overlap with HIGH #9: 0
Overlap with HIGH #10: 0
Overlap with HIGH #11: 0

Production changes: 0
DE READ-ONLY: PASS
OWNER decisions made: 0
Workflow unresolved HIGH cards before HIGH #12: 73
HIGH #12 selected: 50
Workflow unresolved HIGH cards after HIGH #12: 23
Audit-selection pool before HIGH #12: 98
Audit-selection pool after HIGH #12: 48
Expected arithmetic: 73 - 50 = 23
Calculated workflow remaining: 23
Discrepancy: none
```
---
---
---
---
---

## Owner review progress

EN–DE B1 HIGH #12 OWNER REVIEW — BLOCK 5/5 COMPLETE

Cards/audit entries reviewed (block 5): 10/10
LABOT: 10
NELABOT: 0
Findings owner-resolved (block 5): 37
PENDING remaining cards 41–50: 0

Cumulative cards/audit entries reviewed: 50/50
Cumulative LABOT: 50
Cumulative NELABOT: 0
Cumulative findings owner-resolved: 177
Cumulative PENDING: 0

Associated top-level repairs recorded:
- Hupe — Horn • Horn → Horn
- knapp — Needy → Barely enough
- Maß — Mayor → Measure
- nachdem — After when → After
- neigen — To strive → To be inclined; to lean
- pflegen — Maintain → To take care of; to tend
- Probe — Inspection → Test; sample; rehearsal
- Rate — Contribution → Installment
- räumen — Release → To clear; to vacate; to move out
- reißen — Bursting → To tear; to rip; to burst

Kunde metadata:
Audit IDs: b1-kunde-2 + b1-kunde
Production identity: b1-kunde-2
Production index: 1660
Shared production identity: YES
Expected unique production cards (cards 19–20): 1

Production changes: 0
DE READ-ONLY: PASS

---

## EN–DE B1 HIGH #12 OWNER REVIEW: COMPLETE

Cards reviewed: 50/50
LABOT: 50
NELABOT: 0
PENDING: 0

Production changes: 0
DE READ-ONLY: PASS

HIGH REPAIR #12: READY / NOT STARTED

Next: EN–DE B1 HIGH REPAIR #12
