# EN–DE B1 HIGH AUDIT #13

**Generated:** 2026-08-09T11:57:37.322Z

**Status:** READY FOR OWNER REVIEW — no production changes

## Report header

EN–DE B1 HIGH AUDIT #13

Block size: 48
Unique cards selected: 48/48
First Card ID: b1-rösten
Last Card ID: b1-steuer-2
HIGH findings: 77
Associated MEDIUM: 55
Associated LOW: 7
Associated WARNING: 0
sectionAccents TECHNICAL: 54
sectionAccents PEDAGOGICAL: 6
Duplicate/root links: 0
Metadata anomalies: 41


## Pre-selection integrity gate

Previous HIGH selections loaded: 425
Duplicate previous logical cards: 0
CRITICAL overlap: 0
HIGH #1–#12 exclusions: PASS (pending selection)

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
HIGH #12 cards excluded: 50/50
b1-Gen-1055 resolved false-positive exclusion: PASS
b1-Krüppel-1651 resolved exclusion: PASS
HIGH #4 biegen normalized exclusion: PASS
HIGH #9 Tagung resolution exclusion: PASS
Tageordnung ghost-audit exclusion: PASS
Tagesordnung ghost-context exclusion: PASS
HIGH #11 Gehalt identities excluded: PASS
Duplicate logical cards vs previous HIGH blocks: 0

---

CARD 1/48

Audit Card ID: b1-rösten
Production identity: b1-rösten
DE: rösten
Current EN: To toast
Card type: standardStudy
Production index: 2336

SEVERITY: MEDIUM
CATEGORY: NATURALNESS_ERROR
FIELD: study.explanation

CURRENT:
Main idea: rösten means to roast or roast food, especially coffee, bread, seeds or nuts.

LUNA RECOMMENDED:
Main idea: rösten means to roast or toast food, especially coffee, bread, seeds, or nuts.

LUNA REASON:
The repeated “roast” is awkward and omits the useful “toast” distinction.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To toast" differs from audit Current EN "Main idea: rösten means to roast or roast food, especially coffee, bread, seeds or nuts."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 1/48

Audit Card ID: b1-rösten
Production identity: b1-rösten
DE: rösten
Current EN: To toast
Card type: standardStudy
Production index: 2336

SEVERITY: MEDIUM
CATEGORY: COLLOCATION_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
Fry on a pan

LUNA RECOMMENDED:
To fry in a pan

LUNA REASON:
“Fry on a pan” is an incorrect preposition and lacks an infinitive.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To toast" differs from audit Current EN "Main idea: rösten means to roast or roast food, especially coffee, bread, seeds or nuts."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 1/48

Audit Card ID: b1-rösten
Production identity: b1-rösten
DE: rösten
Current EN: To toast
Card type: standardStudy
Production index: 2336

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT_ERROR
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
cept uz pannas

LUNA RECOMMENDED:
fry in a pan

LUNA REASON:
The accent contains a Latvian phrase instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To toast" differs from audit Current EN "Main idea: rösten means to roast or roast food, especially coffee, bread, seeds or nuts."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 2/48

Audit Card ID: b1-rüsten
Production identity: b1-rüsten
DE: rüsten
Current EN: To prepare
Card type: standardStudy
Production index: 2366

SEVERITY: MEDIUM
CATEGORY: UNCLEAR wording
FIELD: study.explanation

CURRENT:
Main idea: rüsten means to prepare or equip. In a military context, it means to arm or arm.

LUNA RECOMMENDED:
In a military context, it means to arm or equip with weapons.

LUNA REASON:
The repeated “arm” is unclear and does not distinguish the two meanings.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To prepare" differs from audit Current EN "In a military context, it means to arm or arm."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 2/48

Audit Card ID: b1-rüsten
Production identity: b1-rüsten
DE: rüsten
Current EN: To prepare
Card type: standardStudy
Production index: 2366

SEVERITY: HIGH
CATEGORY: GRAMMAR
FIELD: study.tip

CURRENT:
If preparation involves equipment, der rüsten.

LUNA RECOMMENDED:
If preparation involves equipment, use rüsten.

LUNA REASON:
“der rüsten” incorrectly adds an article to a German verb.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To prepare" differs from audit Current EN "In a military context, it means to arm or arm."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 2/48

Audit Card ID: b1-rüsten
Production identity: b1-rüsten
DE: rüsten
Current EN: To prepare
Card type: standardStudy
Production index: 2366

SEVERITY: MEDIUM
CATEGORY: MEANING omission
FIELD: study.comparison[0].meaning

CURRENT:
To prepare, to equip • To arm

LUNA RECOMMENDED:
To prepare, to equip oneself • To arm

LUNA REASON:
The reflexive sense of the German verb is not clearly represented.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To prepare" differs from audit Current EN "In a military context, it means to arm or arm."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 2/48

Audit Card ID: b1-rüsten
Production identity: b1-rüsten
DE: rüsten
Current EN: To prepare
Card type: standardStudy
Production index: 2366

SEVERITY: LOW
CATEGORY: BROKEN SECTION ACCENT
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
sagatavoties

LUNA RECOMMENDED:
to prepare

LUNA REASON:
The accent contains a Latvian token absent from the English text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To prepare" differs from audit Current EN "In a military context, it means to arm or arm."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 3/48

Audit Card ID: b1-saat
Production identity: b1-saat
DE: Saat
Current EN: Seed
Card type: standardStudy
Production index: 2370

SEVERITY: HIGH
CATEGORY: MEANING error
FIELD: study.examples[0].lv

CURRENT:
The volume germinates.

LUNA RECOMMENDED:
The crop is germinating.

LUNA REASON:
“Volume” is a mistranslation of the growing crop or sowing.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Seed" differs from audit Current EN "The volume germinates."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 3/48

Audit Card ID: b1-saat
Production identity: b1-saat
DE: Saat
Current EN: Seed
Card type: standardStudy
Production index: 2370

SEVERITY: HIGH
CATEGORY: MEANING error
FIELD: study.examples[2].lv

CURRENT:
Volume is growing well.

LUNA RECOMMENDED:
The crop is growing well.

LUNA REASON:
“Volume” is a Latvian-influenced mistranslation in an English example.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Seed" differs from audit Current EN "The volume germinates."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 3/48

Audit Card ID: b1-saat
Production identity: b1-saat
DE: Saat
Current EN: Seed
Card type: standardStudy
Production index: 2370

SEVERITY: HIGH
CATEGORY: MEANING error
FIELD: study.comparison[0].meaning

CURRENT:
Seed, vol

LUNA RECOMMENDED:
Seed, crop, or sowing

LUNA REASON:
“Vol” is not an English meaning here and omits the field/crop sense.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Seed" differs from audit Current EN "The volume germinates."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 4/48

Audit Card ID: b1-schicht
Production identity: b1-schicht
DE: Schicht
Current EN: Layer
Card type: standardStudy
Production index: 2427

SEVERITY: HIGH
CATEGORY: MEANING error
FIELD: study.explanation

CURRENT:
Main idea: die Schicht means layer or layer. In a work context, it means change.

LUNA RECOMMENDED:
In a work context, it means shift.

LUNA REASON:
“Change” is the wrong meaning for a work shift.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Layer" differs from audit Current EN "In a work context, it means change."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 4/48

Audit Card ID: b1-schicht
Production identity: b1-schicht
DE: Schicht
Current EN: Layer
Card type: standardStudy
Production index: 2427

SEVERITY: MEDIUM
CATEGORY: MEANING error
FIELD: study.comparison[0].meaning

CURRENT:
Layer, round • Shift of work

LUNA RECOMMENDED:
Layer, stratum • Work shift

LUNA REASON:
“Round” and “shift of work” are inaccurate or unnatural glosses.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Layer" differs from audit Current EN "In a work context, it means change."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 4/48

Audit Card ID: b1-schicht
Production identity: b1-schicht
DE: Schicht
Current EN: Layer
Card type: standardStudy
Production index: 2427

SEVERITY: LOW
CATEGORY: UNNATURAL phrasing
FIELD: study.tip

CURRENT:
The surface has Schicht; work can have Schicht as a shift.

LUNA RECOMMENDED:
A surface can have a Schicht, or layer; at work, Schicht can mean a shift.

LUNA REASON:
The sentence is awkward and leaves the German word unexplained.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Layer" differs from audit Current EN "In a work context, it means change."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 4/48

Audit Card ID: b1-schicht
Production identity: b1-schicht
DE: Schicht
Current EN: Layer
Card type: standardStudy
Production index: 2427

SEVERITY: LOW
CATEGORY: BROKEN SECTION ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
in shift

LUNA RECOMMENDED:
night shift

LUNA REASON:
The highlighted phrase does not occur in the English example.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Layer" differs from audit Current EN "In a work context, it means change."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 5/48

Audit Card ID: b1-schmelzen
Production identity: b1-schmelzen
DE: schmelzen
Current EN: Moving
Card type: standardStudy
Production index: 2478

SEVERITY: HIGH
CATEGORY: MEANING error
FIELD: study.translation

CURRENT:
Moving

LUNA RECOMMENDED:
To melt

LUNA REASON:
“Moving” is unrelated to the German verb schmelzen.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 5/48

Audit Card ID: b1-schmelzen
Production identity: b1-schmelzen
DE: schmelzen
Current EN: Moving
Card type: standardStudy
Production index: 2478

SEVERITY: HIGH
CATEGORY: MEANING error
FIELD: study.explanation

CURRENT:
Main idea: schmelzen means to melt or fuse. If the substance changes itself, it is translated as 'move' • If someone does it, it translates as 'melting'.

LUNA RECOMMENDED:
schmelzen means to melt. If the substance changes by itself, translate it as “to melt”; if someone melts something, use “to melt” with an object.

LUNA REASON:
“Move” and “melting” are incorrect or inconsistent translations.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 5/48

Audit Card ID: b1-schmelzen
Production identity: b1-schmelzen
DE: schmelzen
Current EN: Moving
Card type: standardStudy
Production index: 2478

SEVERITY: MEDIUM
CATEGORY: MEANING error
FIELD: study.comparison[0].meaning

CURRENT:
Melt or fuse

LUNA RECOMMENDED:
To melt or to melt something

LUNA REASON:
“Fuse” is not the intended basic contrast in this explanation.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 5/48

Audit Card ID: b1-schmelzen
Production identity: b1-schmelzen
DE: schmelzen
Current EN: Moving
Card type: standardStudy
Production index: 2478

SEVERITY: LOW
CATEGORY: BROKEN SECTION ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
melter

LUNA RECOMMENDED:
melt

LUNA REASON:
“Melter” is not present in the English example and is not the intended verb form.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 6/48

Audit Card ID: b1-schmieren
Production identity: b1-schmieren
DE: schmieren
Current EN: To spread • To smear
Card type: standardStudy
Production index: 2484

SEVERITY: HIGH
CATEGORY: REPETITION_AND_MEANING
FIELD: study.explanation

CURRENT:
Main idea: schmieren means to smear, smear, or smear a surface. Colloquially, it can also mean to write sloppily or to scribble.

LUNA RECOMMENDED:
spread, smear, or coat a surface

LUNA REASON:
The same translation is repeated three times and omits the distinct meanings.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spread • To smear" differs from audit Current EN "smear, smear, or smear"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 6/48

Audit Card ID: b1-schmieren
Production identity: b1-schmieren
DE: schmieren
Current EN: To spread • To smear
Card type: standardStudy
Production index: 2484

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.examples[2].lv

CURRENT:
The child clawed at the wall.

LUNA RECOMMENDED:
The child scribbles on the wall.

LUNA REASON:
The sentence describes messy writing or marking, not clawing at the wall.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spread • To smear" differs from audit Current EN "smear, smear, or smear"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 6/48

Audit Card ID: b1-schmieren
Production identity: b1-schmieren
DE: schmieren
Current EN: To spread • To smear
Card type: standardStudy
Production index: 2484

SEVERITY: HIGH
CATEGORY: REPETITION_AND_MEANING
FIELD: study.comparison[0].meaning

CURRENT:
To smear, to smear, to smear

LUNA RECOMMENDED:
To spread, to smear, to scribble messily

LUNA REASON:
Three distinct meanings are incorrectly rendered as the same word.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spread • To smear" differs from audit Current EN "smear, smear, or smear"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 6/48

Audit Card ID: b1-schmieren
Production identity: b1-schmieren
DE: schmieren
Current EN: To spread • To smear
Card type: standardStudy
Production index: 2484

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
To bloom, to paint with the movement of a brush

LUNA RECOMMENDED:
To spread or paint with a brush

LUNA REASON:
“To bloom” is an incorrect translation of streichen in this context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spread • To smear" differs from audit Current EN "smear, smear, or smear"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 6/48

Audit Card ID: b1-schmieren
Production identity: b1-schmieren
DE: schmieren
Current EN: To spread • To smear
Card type: standardStudy
Production index: 2484

SEVERITY: TECHNICAL
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
in the paw

LUNA RECOMMENDED:
scribbles

LUNA REASON:
The accent contains an incorrect English phrase absent from the target sentence.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To spread • To smear" differs from audit Current EN "smear, smear, or smear"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 6/48

Audit Card ID: b1-schmieren
Production identity: b1-schmieren
DE: schmieren
Current EN: To spread • To smear
Card type: standardStudy
Production index: 2484

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.tip.yellow

CURRENT:
sviests

LUNA RECOMMENDED:
butter

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To spread • To smear" differs from audit Current EN "smear, smear, or smear"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 7/48

Audit Card ID: b1-schnitt
Production identity: b1-schnitt
DE: Schnitt
Current EN: Cut
Card type: standardStudy
Production index: 2500

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
piegriezums

LUNA RECOMMENDED:
cut

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Cut" differs from audit Current EN "piegriezums"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 7/48

Audit Card ID: b1-schnitt
Production identity: b1-schnitt
DE: Schnitt
Current EN: Cut
Card type: standardStudy
Production index: 2500

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
assembly

LUNA RECOMMENDED:
editing

LUNA REASON:
“Assembly” is not the wording used in the English example, which says “editing.”

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Cut" differs from audit Current EN "piegriezums"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 7/48

Audit Card ID: b1-schnitt
Production identity: b1-schnitt
DE: Schnitt
Current EN: Cut
Card type: standardStudy
Production index: 2500

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
griezums

LUNA RECOMMENDED:
cut

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Cut" differs from audit Current EN "piegriezums"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 8/48

Audit Card ID: b1-schuldig
Production identity: b1-schuldig
DE: schuldig
Current EN: Guilty
Card type: standardStudy
Production index: 2527

SEVERITY: TECHNICAL
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
owed

LUNA RECOMMENDED:
owe

LUNA REASON:
The accent uses a form absent from the example, which says “I still owe you.”

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Guilty" differs from audit Current EN "owed"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 8/48

Audit Card ID: b1-schuldig
Production identity: b1-schuldig
DE: schuldig
Current EN: Guilty
Card type: standardStudy
Production index: 2527

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
vaina

LUNA RECOMMENDED:
fault

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Guilty" differs from audit Current EN "owed"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 8/48

Audit Card ID: b1-schuldig
Production identity: b1-schuldig
DE: schuldig
Current EN: Guilty
Card type: standardStudy
Production index: 2527

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.comparison[2].example.red

CURRENT:
unschuldig

LUNA RECOMMENDED:
innocent

LUNA REASON:
The accent contains the German label instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Guilty" differs from audit Current EN "owed"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 9/48

Audit Card ID: b1-schützen
Production identity: b1-schützen
DE: schützen
Current EN: To protect
Card type: standardStudy
Production index: 2538

SEVERITY: MEDIUM
CATEGORY: INCOMPLETE_SENTENCE
FIELD: study.examples[2].lv

CURRENT:
Must be protected from the sun.

LUNA RECOMMENDED:
You must protect yourself from the sun.

LUNA REASON:
The English fragment omits the subject and loses the reflexive meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To protect" differs from audit Current EN "Must be protected from the sun."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 9/48

Audit Card ID: b1-schützen
Production identity: b1-schützen
DE: schützen
Current EN: To protect
Card type: standardStudy
Production index: 2538

SEVERITY: MEDIUM
CATEGORY: REPETITION_AND_MEANING
FIELD: study.comparison[0].meaning

CURRENT:
Protect, protect

LUNA RECOMMENDED:
Protect, safeguard

LUNA REASON:
The repeated wording is unhelpful for a comparison of related meanings.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To protect" differs from audit Current EN "Must be protected from the sun."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 9/48

Audit Card ID: b1-schützen
Production identity: b1-schützen
DE: schützen
Current EN: To protect
Card type: standardStudy
Production index: 2538

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.tip.red

CURRENT:
kam?

LUNA RECOMMENDED:
whom?

LUNA REASON:
The accent contains a Latvian case question instead of an English gloss.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To protect" differs from audit Current EN "Must be protected from the sun."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 10/48

Audit Card ID: b1-schwanken
Production identity: b1-schwanken
DE: schwanken
Current EN: To fluctuate
Card type: standardStudy
Production index: 2546

SEVERITY: TECHNICAL
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
in doubt

LUNA RECOMMENDED:
hesitates

LUNA REASON:
The accent does not match the wording of the English example.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To fluctuate" differs from audit Current EN "in doubt"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 10/48

Audit Card ID: b1-schwanken
Production identity: b1-schwanken
DE: schwanken
Current EN: To fluctuate
Card type: standardStudy
Production index: 2546

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.comparison[2].example.red

CURRENT:
zweifle

LUNA RECOMMENDED:
doubt

LUNA REASON:
The accent contains a German form instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To fluctuate" differs from audit Current EN "in doubt"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 11/48

Audit Card ID: b1-senden
Production identity: b1-senden
DE: senden
Current EN: To send
Card type: standardStudy
Production index: 2599

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.explanation

CURRENT:
Main Idea: Senden means to send a message or send a signal/broadcast. In everyday life, it is often more natural for people to have schicken.

LUNA RECOMMENDED:
In everyday life, it is often more natural for people to use schicken.

LUNA REASON:
“To have schicken” is ungrammatical and leaves the comparison incomplete.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To send" differs from audit Current EN "In everyday life, it is often more natural for people to have schicken."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 11/48

Audit Card ID: b1-senden
Production identity: b1-senden
DE: senden
Current EN: To send
Card type: standardStudy
Production index: 2599

SEVERITY: MEDIUM
CATEGORY: GRAMMAR_ERROR
FIELD: study.comparison[1].meaning

CURRENT:
Send everyday

LUNA RECOMMENDED:
Send in everyday situations

LUNA REASON:
The phrase is ungrammatical and unclear as an English gloss.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To send" differs from audit Current EN "In everyday life, it is often more natural for people to have schicken."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 11/48

Audit Card ID: b1-senden
Production identity: b1-senden
DE: senden
Current EN: To send
Card type: standardStudy
Production index: 2599

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
raida

LUNA RECOMMENDED:
transmits

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To send" differs from audit Current EN "In everyday life, it is often more natural for people to have schicken."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 11/48

Audit Card ID: b1-senden
Production identity: b1-senden
DE: senden
Current EN: To send
Card type: standardStudy
Production index: 2599

SEVERITY: TECHNICAL
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
sent

LUNA RECOMMENDED:
broadcast

LUNA REASON:
The accent word is absent from the English example, which says “broadcast.”

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To send" differs from audit Current EN "In everyday life, it is often more natural for people to have schicken."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 12/48

Audit Card ID: b1-sinn
Production identity: b1-sinn
DE: Sinn
Current EN: Meaning
Card type: standardStudy
Production index: 2630

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important

CURRENT:
Sinn für Humor is a sense of humor, not literally “sense of humor”.

LUNA RECOMMENDED:
not literally “the meaning of humor”

LUNA REASON:
The current explanation contradicts the English translation of Sinn für Humor.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Meaning" differs from audit Current EN "not literally “sense of humor”"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 12/48

Audit Card ID: b1-sinn
Production identity: b1-sinn
DE: Sinn
Current EN: Meaning
Card type: standardStudy
Production index: 2630

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
feeling

LUNA RECOMMENDED:
sense

LUNA REASON:
The accent gives the wrong highlighted meaning for “sense of humor.”

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Meaning" differs from audit Current EN "not literally “sense of humor”"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 12/48

Audit Card ID: b1-sinn
Production identity: b1-sinn
DE: Sinn
Current EN: Meaning
Card type: standardStudy
Production index: 2630

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.important.red

CURRENT:
feeling

LUNA RECOMMENDED:
the meaning of humor

LUNA REASON:
The highlighted gloss conflicts with the intended contrast in the explanation.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Meaning" differs from audit Current EN "not literally “sense of humor”"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 13/48

Audit Card ID: b1-sitz
Production identity: b1-sitz
DE: Sitz
Current EN: Seat
Card type: standardStudy
Production index: 2634

SEVERITY: MEDIUM
CATEGORY: WORDING_AND_LEVEL
FIELD: study.explanation

CURRENT:
Main idea: der Sitz means a seat or seat. For a company or institution, it means domicile.

LUNA RECOMMENDED:
der Sitz means a seat or seating place. For a company or institution, it means headquarters.

LUNA REASON:
The first meaning is repeated, and “domicile” is overly formal for this B1 explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Seat" differs from audit Current EN "der Sitz means a seat or seat. For a company or institution, it means domicile."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 13/48

Audit Card ID: b1-sitz
Production identity: b1-sitz
DE: Sitz
Current EN: Seat
Card type: standardStudy
Production index: 2634

SEVERITY: MEDIUM
CATEGORY: REPETITION_AND_MEANING
FIELD: study.comparison[0].meaning

CURRENT:
Seat, seat • Seat

LUNA RECOMMENDED:
Seat, seating place • Headquarters

LUNA REASON:
The gloss repeats “seat” and incorrectly gives “seat” for the company meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Seat" differs from audit Current EN "der Sitz means a seat or seat. For a company or institution, it means domicile."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 13/48

Audit Card ID: b1-sitz
Production identity: b1-sitz
DE: Sitz
Current EN: Seat
Card type: standardStudy
Production index: 2634

SEVERITY: HIGH
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.comparison[1].meaning.purple

CURRENT:
vieta

LUNA RECOMMENDED:
place

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Seat" differs from audit Current EN "der Sitz means a seat or seat. For a company or institution, it means domicile."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 14/48

Audit Card ID: b1-sowie
Production identity: b1-sowie
DE: sowie
Current EN: As well as
Card type: standardStudy
Production index: 2660

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.comparison[1].meaning

CURRENT:
un

LUNA RECOMMENDED:
And

LUNA REASON:
The English field contains the Latvian conjunction “un.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "As well as" differs from audit Current EN "un"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 14/48

Audit Card ID: b1-sowie
Production identity: b1-sowie
DE: sowie
Current EN: As well as
Card type: standardStudy
Production index: 2660

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH
FIELD: study.important

CURRENT:
sowie is not automatically just “as soon as”; in lists it often means 'as well as'.

LUNA RECOMMENDED:
sowie does not always mean “as soon as”; in lists, it often means “as well as.”

LUNA REASON:
The English sentence contains Latvian text at the start.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "As well as" differs from audit Current EN "un"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 15/48

Audit Card ID: b1-spannung
Production identity: b1-spannung
DE: Spannung
Current EN: Tension
Card type: standardStudy
Production index: 2668

SEVERITY: MEDIUM
CATEGORY: ACCURACY
FIELD: study.explanation

CURRENT:
Main Idea: die Spannung means tension or tension. In technical language, especially in electricity, it means voltage.

LUNA RECOMMENDED:
Main idea: die Spannung means tension or strain. In technical language, especially in electricity, it means voltage.

LUNA REASON:
“Tension or tension” repeats the same word and is not a useful distinction.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Tension" differs from audit Current EN "Main idea: die Spannung means tension or tension. In technical language, especially in electricity, it means voltage."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 15/48

Audit Card ID: b1-spannung
Production identity: b1-spannung
DE: Spannung
Current EN: Tension
Card type: standardStudy
Production index: 2668

SEVERITY: MEDIUM
CATEGORY: OMISSION
FIELD: study.comparison[0].meaning

CURRENT:
Voltage • In electricity, voltage

LUNA RECOMMENDED:
Tension • In electricity, voltage

LUNA REASON:
The comparison omits the general meaning “tension.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Tension" differs from audit Current EN "Main idea: die Spannung means tension or tension. In technical language, especially in electricity, it means voltage."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 15/48

Audit Card ID: b1-spannung
Production identity: b1-spannung
DE: Spannung
Current EN: Tension
Card type: standardStudy
Production index: 2668

SEVERITY: HIGH
CATEGORY: ACCURACY
FIELD: study.important.text

CURRENT:
In electricity, die Spannung translates as tension, not emotional tension.

LUNA RECOMMENDED:
In electricity, die Spannung translates as voltage, not emotional tension.

LUNA REASON:
It gives the wrong translation for the electrical meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Tension" differs from audit Current EN "Main idea: die Spannung means tension or tension. In technical language, especially in electricity, it means voltage."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 15/48

Audit Card ID: b1-spannung
Production identity: b1-spannung
DE: Spannung
Current EN: Tension
Card type: standardStudy
Production index: 2668

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Tension in a story or relationship; in electricity voltage.

LUNA RECOMMENDED:
Tension in a story or relationship; in electricity, voltage.

LUNA REASON:
The purple accent targets Latvian “spriedze,” not the English word “Tension.”

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Tension" differs from audit Current EN "Main idea: die Spannung means tension or tension. In technical language, especially in electricity, it means voltage."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 16/48

Audit Card ID: b1-spitze
Production identity: b1-spitze
DE: Spitze
Current EN: Spike
Card type: standardStudy
Production index: 2689

SEVERITY: HIGH
CATEGORY: ACCURACY
FIELD: study.translation

CURRENT:
Spike

LUNA RECOMMENDED:
Tip; peak

LUNA REASON:
“Spike” is not the normal translation for a pointed end or highest point.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 16/48

Audit Card ID: b1-spitze
Production identity: b1-spitze
DE: Spitze
Current EN: Spike
Card type: standardStudy
Production index: 2689

SEVERITY: MEDIUM
CATEGORY: ACCURACY
FIELD: study.important.text

CURRENT:
an der Spitze means under the leadership, not just physically above.

LUNA RECOMMENDED:
an der Spitze means at the top or in charge, not just physically above.

LUNA REASON:
“Under the leadership” is unnatural and does not express the phrase clearly.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 16/48

Audit Card ID: b1-spitze
Production identity: b1-spitze
DE: Spitze
Current EN: Spike
Card type: standardStudy
Production index: 2689

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT
FIELD: study.comparison[0].meaning

CURRENT:
Peak, top, head

LUNA RECOMMENDED:
Tip, peak, leadership

LUNA REASON:
The accent targets Latvian “smaile,” which is absent from the English field.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 17/48

Audit Card ID: b1-stift
Production identity: b1-stift
DE: Stift
Current EN: Pencil
Card type: standardStudy
Production index: 2758

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important.text

CURRENT:
In the technique der Stift can be a pin instead of a pencil.

LUNA RECOMMENDED:
In technical contexts, der Stift can be a pin rather than a pencil.

LUNA REASON:
“In the technique” is unnatural English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Pencil" differs from audit Current EN "In the technique der Stift can be a pin instead of a pencil."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 17/48

Audit Card ID: b1-stift
Production identity: b1-stift
DE: Stift
Current EN: Pencil
Card type: standardStudy
Production index: 2758

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
Tapa

LUNA RECOMMENDED:
pin

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Pencil" differs from audit Current EN "In the technique der Stift can be a pin instead of a pencil."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 17/48

Audit Card ID: b1-stift
Production identity: b1-stift
DE: Stift
Current EN: Pencil
Card type: standardStudy
Production index: 2758

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
pildspalva

LUNA RECOMMENDED:
ballpoint pen

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Pencil" differs from audit Current EN "In the technique der Stift can be a pin instead of a pencil."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 17/48

Audit Card ID: b1-stift
Production identity: b1-stift
DE: Stift
Current EN: Pencil
Card type: standardStudy
Production index: 2758

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.important.red

CURRENT:
tapa

LUNA RECOMMENDED:
pin

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Pencil" differs from audit Current EN "In the technique der Stift can be a pin instead of a pencil."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 18/48

Audit Card ID: b1-stillen
Production identity: b1-stillen
DE: stillen
Current EN: To breastfeed
Card type: standardStudy
Production index: 2762

SEVERITY: MEDIUM
CATEGORY: INACCURATE_OR_UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Main idea: stillen most often means to breastfeed. With need, thirst, or curiosity, it means to appease or satisfy.

LUNA RECOMMENDED:
With needs, thirst, or curiosity, it means to relieve or satisfy them.

LUNA REASON:
“With need” is unnatural, and “appease” is unsuitable for thirst.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To breastfeed" differs from audit Current EN "With need, thirst, or curiosity, it means to appease or satisfy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 18/48

Audit Card ID: b1-stillen
Production identity: b1-stillen
DE: stillen
Current EN: To breastfeed
Card type: standardStudy
Production index: 2762

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
soothes

LUNA RECOMMENDED:
quenches

LUNA REASON:
The highlighted target is missing from the English example and has the wrong meaning.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To breastfeed" differs from audit Current EN "With need, thirst, or curiosity, it means to appease or satisfy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 18/48

Audit Card ID: b1-stillen
Production identity: b1-stillen
DE: stillen
Current EN: To breastfeed
Card type: standardStudy
Production index: 2762

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[2].meaning.purple

CURRENT:
barot

LUNA RECOMMENDED:
to feed

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To breastfeed" differs from audit Current EN "With need, thirst, or curiosity, it means to appease or satisfy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 19/48

Audit Card ID: b1-stoßen
Production identity: b1-stoßen
DE: stoßen
Current EN: Push
Card type: standardStudy
Production index: 2776

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
crashed into

LUNA RECOMMENDED:
hit

LUNA REASON:
The highlighted phrase is absent from the English example.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Push" differs from audit Current EN "crashed into"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 19/48

Audit Card ID: b1-stoßen
Production identity: b1-stoßen
DE: stoßen
Current EN: Push
Card type: standardStudy
Production index: 2776

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[1].meaning.red

CURRENT:
stumt

LUNA RECOMMENDED:
push

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Push" differs from audit Current EN "crashed into"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 19/48

Audit Card ID: b1-stoßen
Production identity: b1-stoßen
DE: stoßen
Current EN: Push
Card type: standardStudy
Production index: 2776

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[2].meaning.red

CURRENT:
satikt

LUNA RECOMMENDED:
meet

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Push" differs from audit Current EN "crashed into"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 19/48

Audit Card ID: b1-stoßen
Production identity: b1-stoßen
DE: stoßen
Current EN: Push
Card type: standardStudy
Production index: 2776

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.important.red

CURRENT:
uzdurties

LUNA RECOMMENDED:
bump into

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Push" differs from audit Current EN "crashed into"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 20/48

Audit Card ID: b1-streichen
Production identity: b1-streichen
DE: streichen
Current EN: Delete
Card type: standardStudy
Production index: 2790

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_OR_PEDAGOGICALLY_UNSUITABLE_ENGLISH
FIELD: study.explanation

CURRENT:
Main idea: streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress.

LUNA RECOMMENDED:
streichen means to cross out or remove something from a list. With a wall, fence, or paint, it means to paint; with a hand, it means to stroke.

LUNA REASON:
The phrasing is awkward, and “caress” is not the usual pedagogical translation here.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Delete" differs from audit Current EN "streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 20/48

Audit Card ID: b1-streichen
Production identity: b1-streichen
DE: streichen
Current EN: Delete
Card type: standardStudy
Production index: 2790

SEVERITY: MEDIUM
CATEGORY: INACCURATE_ENGLISH
FIELD: study.comparison[1].meaning

CURRENT:
Delete file, text or fire

LUNA RECOMMENDED:
Delete a file or text; put out a fire

LUNA REASON:
“Delete fire” is incorrect English and misses löschen’s fire meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Delete" differs from audit Current EN "streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 20/48

Audit Card ID: b1-streichen
Production identity: b1-streichen
DE: streichen
Current EN: Delete
Card type: standardStudy
Production index: 2790

SEVERITY: HIGH
CATEGORY: INACCURATE_ENGLISH
FIELD: study.important.text

CURRENT:
eine Wand streichen means to paint the wall, not to streak the wall.

LUNA RECOMMENDED:
eine Wand streichen means to paint the wall, not to cross out the wall.

LUNA REASON:
“Streak the wall” does not express the contrasted meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Delete" differs from audit Current EN "streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 20/48

Audit Card ID: b1-streichen
Production identity: b1-streichen
DE: streichen
Current EN: Delete
Card type: standardStudy
Production index: 2790

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
let's paint

LUNA RECOMMENDED:
paint

LUNA REASON:
The highlighted phrase is absent from the English example.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Delete" differs from audit Current EN "streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 20/48

Audit Card ID: b1-streichen
Production identity: b1-streichen
DE: streichen
Current EN: Delete
Card type: standardStudy
Production index: 2790

SEVERITY: MEDIUM
CATEGORY: BROKEN_SECTION_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
caressed

LUNA RECOMMENDED:
strokes

LUNA REASON:
The highlighted form is absent and does not match the English example’s tense.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Delete" differs from audit Current EN "streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 20/48

Audit Card ID: b1-streichen
Production identity: b1-streichen
DE: streichen
Current EN: Delete
Card type: standardStudy
Production index: 2790

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text.purple

CURRENT:
saraksta

LUNA RECOMMENDED:
list

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Delete" differs from audit Current EN "streichen means to strike or remove from a list. By wall, fence, or paint, it means to paint • With the hand - to caress."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 21/48

Audit Card ID: b1-strom
Production identity: b1-strom
DE: Strom
Current EN: Current
Card type: standardStudy
Production index: 2804

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
upe

LUNA RECOMMENDED:
river

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Current" differs from audit Current EN "upe"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 21/48

Audit Card ID: b1-strom
Production identity: b1-strom
DE: Strom
Current EN: Current
Card type: standardStudy
Production index: 2804

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[1].meaning.red

CURRENT:
upe

LUNA RECOMMENDED:
river

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Current" differs from audit Current EN "upe"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 22/48

Audit Card ID: b1-stürzen
Production identity: b1-stürzen
DE: stürzen
Current EN: Fall down
Card type: standardStudy
Production index: 2819

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Main idea: stürzen means to fall or topple rapidly. With an object, it can mean overthrow, also overthrow a government or an official.

LUNA RECOMMENDED:
With an object, it can mean to knock something down; it can also mean to overthrow a government or official.

LUNA REASON:
The sentence repeats “overthrow” and is grammatically incomplete.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Fall down" differs from audit Current EN "With an object, it can mean overthrow, also overthrow a government or an official."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 22/48

Audit Card ID: b1-stürzen
Production identity: b1-stürzen
DE: stürzen
Current EN: Fall down
Card type: standardStudy
Production index: 2819

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
krist

LUNA RECOMMENDED:
fall rapidly

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Fall down" differs from audit Current EN "With an object, it can mean overthrow, also overthrow a government or an official."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 22/48

Audit Card ID: b1-stürzen
Production identity: b1-stürzen
DE: stürzen
Current EN: Fall down
Card type: standardStudy
Production index: 2819

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[1].meaning.red

CURRENT:
krist

LUNA RECOMMENDED:
fall

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Fall down" differs from audit Current EN "With an object, it can mean overthrow, also overthrow a government or an official."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 22/48

Audit Card ID: b1-stürzen
Production identity: b1-stürzen
DE: stürzen
Current EN: Fall down
Card type: standardStudy
Production index: 2819

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text.purple

CURRENT:
kritiens

LUNA RECOMMENDED:
fall

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Fall down" differs from audit Current EN "With an object, it can mean overthrow, also overthrow a government or an official."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Main idea: die Szene means a scene in a film, theatre or a specific situation. Colloquially, it can also mean a certain environment of people.

LUNA RECOMMENDED:
a particular social group or scene

LUNA REASON:
“Environment of people” is unnatural and unclear in this meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: MEDIUM
CATEGORY: IDIOMATIC_MISTRANSLATION
FIELD: study.examples[1].lv

CURRENT:
Please don't make a scandal.

LUNA RECOMMENDED:
Please don't make a scene.

LUNA REASON:
The idiom keine Szene machen means “make a scene,” not “make a scandal.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.tip.leftBlocks[0].text

CURRENT:
In the movie, it's a scene; in a circle or style of people - Szene.

LUNA RECOMMENDED:
In a film, it is a scene; for a social group or style, use Szene.

LUNA REASON:
The phrase “circle or style of people” is unnatural and unclear.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.examples[2].lv.red

CURRENT:
vidi

LUNA RECOMMENDED:
scene

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[0].meaning.purple

CURRENT:
aina

LUNA RECOMMENDED:
scene

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.comparison[1].meaning.red

CURRENT:
skatuve

LUNA RECOMMENDED:
stage

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 23/48

Audit Card ID: b1-szene
Production identity: b1-szene
DE: Szene
Current EN: The scene
Card type: standardStudy
Production index: 2830

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text.purple

CURRENT:
aina

LUNA RECOMMENDED:
scene

LUNA REASON:
The accent contains a Latvian word instead of the English target.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "The scene" differs from audit Current EN "a certain environment of people"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 24/48

Audit Card ID: b1-tau
Production identity: b1-tau
DE: Tau
Current EN: Dew
Card type: standardStudy
Production index: 2856

SEVERITY: HIGH
CATEGORY: INACCURATE_ENGLISH
FIELD: study.explanation

CURRENT:
Main Idea: der Tau means dew—drops of water on grass or leaves. It is uncountable (singular only). Das Tau, on the other hand, means a ship's tow or rope.

LUNA RECOMMENDED:
Das Tau, on the other hand, means a ship's towline or rope.

LUNA REASON:
“Ship's tow” is not the normal English term for a rope or towline.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Dew" differs from audit Current EN "Das Tau, on the other hand, means a ship's tow or rope."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 24/48

Audit Card ID: b1-tau
Production identity: b1-tau
DE: Tau
Current EN: Dew
Card type: standardStudy
Production index: 2856

SEVERITY: HIGH
CATEGORY: INACCURATE_ENGLISH
FIELD: study.important.text

CURRENT:
der Tau = dew (singular only). das Tau = tow (die Taue). The article completely changes the meaning.

LUNA RECOMMENDED:
das Tau = towline or rope (die Taue).

LUNA REASON:
“Tow” alone does not mean the German noun for a ship’s rope.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Dew" differs from audit Current EN "Das Tau, on the other hand, means a ship's tow or rope."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 25/48

Audit Card ID: b1-taufen
Production identity: b1-taufen
DE: taufen
Current EN: Baptise
Card type: standardStudy
Production index: 2863

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.tip.leftBlocks[0].text

CURRENT:
In church or giving a formal name: taufen.

LUNA RECOMMENDED:
In church or when giving something a formal name: taufen.

LUNA REASON:
The current wording is a fragment with an awkward “giving” construction.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Baptise" differs from audit Current EN "In church or giving a formal name: taufen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 25/48

Audit Card ID: b1-taufen
Production identity: b1-taufen
DE: taufen
Current EN: Baptise
Card type: standardStudy
Production index: 2863

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important.text

CURRENT:
taufen is not to bet; it means to baptise or give a name.

LUNA RECOMMENDED:
taufen does not mean “to bet”; it means to baptise or give a name.

LUNA REASON:
“bet” is an incorrect translation of the contrast word in this context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Baptise" differs from audit Current EN "In church or giving a formal name: taufen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 25/48

Audit Card ID: b1-taufen
Production identity: b1-taufen
DE: taufen
Current EN: Baptise
Card type: standardStudy
Production index: 2863

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.examples[2].lv

CURRENT:
They named the ship Emma.

LUNA RECOMMENDED:
Keep the English text and remove the Latvian accent token “nosauca”.

LUNA REASON:
The section accent contains a Latvian word instead of an English target token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Baptise" differs from audit Current EN "In church or giving a formal name: taufen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 26/48

Audit Card ID: b1-titel
Production identity: b1-titel
DE: Titel
Current EN: Name
Card type: standardStudy
Production index: 2891

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Name

LUNA RECOMMENDED:
Title

LUNA REASON:
Titel primarily translates as “title”; “name” is too narrow and misleading here.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 26/48

Audit Card ID: b1-titel
Production identity: b1-titel
DE: Titel
Current EN: Name
Card type: standardStudy
Production index: 2891

SEVERITY: MEDIUM
CATEGORY: PEDAGOGICAL_SUITABILITY
FIELD: study.examples[1].lv

CURRENT:
I don't know the name of the song.

LUNA RECOMMENDED:
I don't know the title of the song.

LUNA REASON:
The example teaches “name” instead of the target meaning “title.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 26/48

Audit Card ID: b1-titel
Production identity: b1-titel
DE: Titel
Current EN: Name
Card type: standardStudy
Production index: 2891

SEVERITY: MEDIUM
CATEGORY: LANGUAGE_MIXING
FIELD: study.tip.leftBlocks[0].text

CURRENT:
A book, song or film usually has a der Titel.

LUNA RECOMMENDED:
A book, song or film usually has a title.

LUNA REASON:
The German article is incorrectly inserted into the English sentence.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 26/48

Audit Card ID: b1-titel
Production identity: b1-titel
DE: Titel
Current EN: Name
Card type: standardStudy
Production index: 2891

SEVERITY: LOW
CATEGORY: SECTION_ACCENT
FIELD: study.comparison[2].meaning

CURRENT:
Name or title

LUNA RECOMMENDED:
Highlight “Name,” or remove the accent on “word.”

LUNA REASON:
The accent highlights “word,” which is not the meaning shown in the English text.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 27/48

Audit Card ID: b1-ton
Production identity: b1-ton
DE: Ton
Current EN: The sound
Card type: standardStudy
Production index: 2896

SEVERITY: MEDIUM
CATEGORY: INCOMPLETE_TRANSLATION
FIELD: study.translation

CURRENT:
The sound

LUNA RECOMMENDED:
Sound; tone

LUNA REASON:
The translation omits the important meaning “tone.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 27/48

Audit Card ID: b1-ton
Production identity: b1-ton
DE: Ton
Current EN: The sound
Card type: standardStudy
Production index: 2896

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_FIELD
FIELD: study.important.text

CURRENT:
in einem Ton speaking means manner of speaking, not just pitch.

LUNA RECOMMENDED:
“In einem Ton” when speaking refers to a manner of speaking, not just pitch.

LUNA REASON:
The sentence contains the Latvian word “runājot.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 27/48

Audit Card ID: b1-ton
Production identity: b1-ton
DE: Ton
Current EN: The sound
Card type: standardStudy
Production index: 2896

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT
FIELD: study.examples[1].lv

CURRENT:
Please speak in a calm tone.

LUNA RECOMMENDED:
Highlight “calm tone” or remove the accent on “in tone.”

LUNA REASON:
The accent token “in tone” is not present in the English sentence.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 28/48

Audit Card ID: b1-trauen
Production identity: b1-trauen
DE: trauen
Current EN: To trust
Card type: standardStudy
Production index: 2906

SEVERITY: HIGH
CATEGORY: GRAMMAR_ERROR
FIELD: study.examples[2].lv

CURRENT:
He dare not speak alone.

LUNA RECOMMENDED:
He does not dare to speak alone.

LUNA REASON:
The current sentence uses an incorrect verb form and sounds unnatural.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To trust" differs from audit Current EN "He dare not speak alone."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 28/48

Audit Card ID: b1-trauen
Production identity: b1-trauen
DE: trauen
Current EN: To trust
Card type: standardStudy
Production index: 2906

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Trust someone: trauen; dare yourself: sich trauen.

LUNA RECOMMENDED:
Trust someone: trauen; dare to do something: sich trauen.

LUNA REASON:
“Dare yourself” is not a natural explanation of sich trauen.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To trust" differs from audit Current EN "He dare not speak alone."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 29/48

Audit Card ID: b1-treiben
Production identity: b1-treiben
DE: treiben
Current EN: To occupy
Card type: standardStudy
Production index: 2912

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
To occupy

LUNA RECOMMENDED:
To do; to engage in

LUNA REASON:
treiben in this sense means “to do” or “engage in,” not “to occupy.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 29/48

Audit Card ID: b1-treiben
Production identity: b1-treiben
DE: treiben
Current EN: To occupy
Card type: standardStudy
Production index: 2912

SEVERITY: MEDIUM
CATEGORY: COLLOCATION_ERROR
FIELD: study.examples[0].lv

CURRENT:
He does a lot of sports.

LUNA RECOMMENDED:
He does a lot of sport.

LUNA REASON:
“Do a lot of sports” is not the natural collocation in this context.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 29/48

Audit Card ID: b1-treiben
Production identity: b1-treiben
DE: treiben
Current EN: To occupy
Card type: standardStudy
Production index: 2912

SEVERITY: LOW
CATEGORY: PUNCTUATION
FIELD: study.examples[2].lv

CURRENT:
What are you doing tonight

LUNA RECOMMENDED:
What are you doing tonight?

LUNA REASON:
The question is missing a question mark.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 29/48

Audit Card ID: b1-treiben
Production identity: b1-treiben
DE: treiben
Current EN: To occupy
Card type: standardStudy
Production index: 2912

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[2].meaning

CURRENT:
chase

LUNA RECOMMENDED:
Drive; urge

LUNA REASON:
antreiben generally means “to drive” or “urge,” not “chase.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 30/48

Audit Card ID: b1-trennen
Production identity: b1-trennen
DE: trennen
Current EN: To separate
Card type: standardStudy
Production index: 2914

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_FIELD
FIELD: study.important.text

CURRENT:
sich trennen means to separate; verskeiden means to distinguish by characteristics.

LUNA RECOMMENDED:
sich trennen means to separate; unterscheiden means to distinguish by characteristics.

LUNA REASON:
“verskeiden” is a Latvian/incorrect token and should be unterscheiden.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To separate" differs from audit Current EN "sich trennen means to separate; verskeiden means to distinguish by characteristics."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 31/48

Audit Card ID: b1-übergeben
Production identity: b1-übergeben
DE: übergeben
Current EN: To hand over
Card type: standardStudy
Production index: 2949

SEVERITY: HIGH
CATEGORY: LATVIAN_IN_ENGLISH_FIELD
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Bez sich tas ir nodot; ar sich tas ir vemt.

LUNA RECOMMENDED:
Without sich, it means “to hand over”; with sich, it means “to vomit.”

LUNA REASON:
This field is in Latvian rather than English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To hand over" differs from audit Current EN "Bez sich tas ir nodot; ar sich tas ir vemt."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 32/48

Audit Card ID: b1-überholen
Production identity: b1-überholen
DE: überholen
Current EN: To overtake
Card type: standardStudy
Production index: 2951

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important.text

CURRENT:
Einen Motor überholen means overhauling, not overhauling the engine.

LUNA RECOMMENDED:
Einen Motor überholen means overhauling an engine, not overtaking it.

LUNA REASON:
The contrast repeats “overhauling” and fails to explain the opposite meaning.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To overtake" differs from audit Current EN "Einen Motor überholen means overhauling, not overhauling the engine."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 33/48

Audit Card ID: b1-übernehmen
Production identity: b1-übernehmen
DE: übernehmen
Current EN: Take over
Card type: standardStudy
Production index: 2954

SEVERITY: HIGH
CATEGORY: TYPO_GRAMMAR
FIELD: study.important.text

CURRENT:
Kosten oberkemen means to bear the cost, not just to receive it.

LUNA RECOMMENDED:
Kosten übernehmen means to bear the costs, not just to receive them.

LUNA REASON:
The German verb is misspelled, and the pronouns should agree with plural costs.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Take over" differs from audit Current EN "Kosten oberkemen means to bear the cost, not just to receive it."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 34/48

Audit Card ID: b1-umgehen
Production identity: b1-umgehen
DE: umgehen
Current EN: Get around
Card type: standardStudy
Production index: 2974

SEVERITY: MEDIUM
CATEGORY: OMISSION
FIELD: study.translation

CURRENT:
Get around

LUNA RECOMMENDED:
To deal with; to bypass

LUNA REASON:
The translation omits the important meaning “to deal with.”

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 34/48

Audit Card ID: b1-umgehen
Production identity: b1-umgehen
DE: umgehen
Current EN: Get around
Card type: standardStudy
Production index: 2974

SEVERITY: HIGH
CATEGORY: GRAMMAR
FIELD: study.examples[2].lv

CURRENT:
Must not circumvent the rules.

LUNA RECOMMENDED:
You must not circumvent the rules.

LUNA REASON:
The English sentence is missing its subject.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 34/48

Audit Card ID: b1-umgehen
Production identity: b1-umgehen
DE: umgehen
Current EN: Get around
Card type: standardStudy
Production index: 2974

SEVERITY: MEDIUM
CATEGORY: PEDAGOGICAL_CLARITY
FIELD: study.comparison[1].meaning

CURRENT:
To treat, to treat

LUNA RECOMMENDED:
To treat, to process

LUNA REASON:
The two English glosses are duplicated and do not represent both source meanings.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 35/48

Audit Card ID: b1-unterhalten
Production identity: b1-unterhalten
DE: unterhalten
Current EN: Entertain
Card type: standardStudy
Production index: 3022

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: unterhalten means to entertain or maintain. sich unterhalten means to talk.

LUNA RECOMMENDED:
unterhalten means to entertain or support. sich unterhalten means to talk.

LUNA REASON:
“Maintain” is misleading here; the family-related sense is “support.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Entertain" differs from audit Current EN "unterhalten means to entertain or maintain."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 35/48

Audit Card ID: b1-unterhalten
Production identity: b1-unterhalten
DE: unterhalten
Current EN: Entertain
Card type: standardStudy
Production index: 3022

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
Entertain • Maintain

LUNA RECOMMENDED:
Entertain • Support

LUNA REASON:
“Maintain” is not the suitable learner gloss for supporting a family.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Entertain" differs from audit Current EN "unterhalten means to entertain or maintain."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 35/48

Audit Card ID: b1-unterhalten
Production identity: b1-unterhalten
DE: unterhalten
Current EN: Entertain
Card type: standardStudy
Production index: 3022

SEVERITY: HIGH
CATEGORY: WRONG_LANGUAGE
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Bez sich: to entertain or maintain; with sich: to talk.

LUNA RECOMMENDED:
Without sich: to entertain or support; with sich: to talk.

LUNA REASON:
The English learner text contains the Latvian word “Bez.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Entertain" differs from audit Current EN "unterhalten means to entertain or maintain."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 36/48

Audit Card ID: b1-untersuchung
Production identity: b1-untersuchung
DE: Untersuchung
Current EN: Investigation
Card type: standardStudy
Production index: 3028

SEVERITY: HIGH
CATEGORY: GRAMMAR_MEANING
FIELD: study.explanation

CURRENT:
Main idea: die Untersuchung means investigation, examination or study. The context determines whether it is a doctor, a police officer, or a scientist.

LUNA RECOMMENDED:
The context determines whether it refers to a medical examination, a police investigation, or a scientific study.

LUNA REASON:
The current wording incorrectly says the noun refers to people.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Investigation" differs from audit Current EN "The context determines whether it is a doctor, a police officer, or a scientist."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 36/48

Audit Card ID: b1-untersuchung
Production identity: b1-untersuchung
DE: Untersuchung
Current EN: Investigation
Card type: standardStudy
Production index: 3028

SEVERITY: MEDIUM
CATEGORY: NATURALNESS
FIELD: study.tip.leftBlocks[0].text

CURRENT:
The doctor examines, the police investigate, science investigates: die Untersuchung.

LUNA RECOMMENDED:
The doctor examines, the police investigate, and scientists conduct studies: die Untersuchung.

LUNA REASON:
Science does not naturally “investigate” in this parallel sentence.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Investigation" differs from audit Current EN "The context determines whether it is a doctor, a police officer, or a scientist."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 37/48

Audit Card ID: b1-verändern
Production identity: b1-verändern
DE: verändern
Current EN: To change
Card type: standardStudy
Production index: 3040

SEVERITY: HIGH
CATEGORY: TYPO
FIELD: study.explanation

CURRENT:
Main idea: To change means to change something so that it becomes different. sich veränderen means to change yourself.

LUNA RECOMMENDED:
sich verändern means to change or to change oneself.

LUNA REASON:
The German infinitive is misspelled as “veränderen.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To change" differs from audit Current EN "sich veränderen means to change yourself."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 37/48

Audit Card ID: b1-verändern
Production identity: b1-verändern
DE: verändern
Current EN: To change
Card type: standardStudy
Production index: 3040

SEVERITY: HIGH
CATEGORY: TYPO
FIELD: study.tip.leftBlocks[0].text

CURRENT:
If something becomes different, veränderen is often used.

LUNA RECOMMENDED:
If something becomes different, verändern is often used.

LUNA REASON:
The German verb is misspelled.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To change" differs from audit Current EN "sich veränderen means to change yourself."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 37/48

Audit Card ID: b1-verändern
Production identity: b1-verändern
DE: verändern
Current EN: To change
Card type: standardStudy
Production index: 3040

SEVERITY: HIGH
CATEGORY: TYPO_WRONG_LANGUAGE
FIELD: study.important.text

CURRENT:
sich veränderen is to change oneself; veränder bez sich means to change something else.

LUNA RECOMMENDED:
sich verändern means to change oneself; verändern without sich means to change something else.

LUNA REASON:
The text contains two misspelled or incomplete German forms.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To change" differs from audit Current EN "sich veränderen means to change yourself."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 38/48

Audit Card ID: b1-verband
Production identity: b1-verband
DE: Verband
Current EN: Bandage
Card type: standardStudy
Production index: 3045

SEVERITY: HIGH
CATEGORY: GRAMMAR
FIELD: study.important.text

CURRENT:
der Verband not die Verbindung: A bandage or association is not a connection.

LUNA RECOMMENDED:
der Verband is not die Verbindung: a bandage or association is not a connection.

LUNA REASON:
The English sentence is missing the verb “is.”

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Bandage" differs from audit Current EN "der Verband not die Verbindung: A bandage or association is not a connection."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 39/48

Audit Card ID: b1-verbindung
Production identity: b1-verbindung
DE: Verbindung
Current EN: Connection
Card type: standardStudy
Production index: 3047

SEVERITY: HIGH
CATEGORY: GRAMMAR
FIELD: study.examples[1].lv

CURRENT:
Has a direct connection to Berlin.

LUNA RECOMMENDED:
There is a direct connection to Berlin.

LUNA REASON:
The English sentence is a fragment with no subject.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Connection" differs from audit Current EN "Has a direct connection to Berlin."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 39/48

Audit Card ID: b1-verbindung
Production identity: b1-verbindung
DE: Verbindung
Current EN: Connection
Card type: standardStudy
Production index: 3047

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.important.text

CURRENT:
die Verbindung is not der Verband. Bandage and bandage are different words.

LUNA RECOMMENDED:
die Verbindung is not der Verband. A connection and a bandage are different words.

LUNA REASON:
The final sentence repeats “bandage” and loses the intended contrast.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Connection" differs from audit Current EN "Has a direct connection to Berlin."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 40/48

Audit Card ID: b1-verbrennen
Production identity: b1-verbrennen
DE: verbrennen
Current EN: To burn
Card type: standardStudy
Production index: 3055

SEVERITY: MEDIUM
CATEGORY: MEANING_CLARITY
FIELD: study.explanation

CURRENT:
Main idea: verbrennen means to burn or burn to the point of destruction. With a body part, it means to burn.

LUNA RECOMMENDED:
Main idea: verbrennen means to burn something or burn up completely. With a body part, it means to burn yourself.

LUNA REASON:
The explanation is repetitive and does not clearly distinguish the meanings.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To burn" differs from audit Current EN "Main idea: verbrennen means to burn or burn to the point of destruction. With a body part, it means to burn."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 40/48

Audit Card ID: b1-verbrennen
Production identity: b1-verbrennen
DE: verbrennen
Current EN: To burn
Card type: standardStudy
Production index: 3055

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
To burn, to burn, to burn

LUNA RECOMMENDED:
To burn, burn up, burn yourself

LUNA REASON:
Three distinct German meanings are incorrectly presented as identical.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To burn" differs from audit Current EN "Main idea: verbrennen means to burn or burn to the point of destruction. With a body part, it means to burn."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 40/48

Audit Card ID: b1-verbrennen
Production identity: b1-verbrennen
DE: verbrennen
Current EN: To burn
Card type: standardStudy
Production index: 3055

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important.text

CURRENT:
sich die Hand verbrennen means to burn the hand, not to burn the hand to the end.

LUNA RECOMMENDED:
sich die Hand verbrennen means to burn your hand, not to burn it completely.

LUNA REASON:
“Burn the hand to the end” is unnatural and unclear English.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To burn" differs from audit Current EN "Main idea: verbrennen means to burn or burn to the point of destruction. With a body part, it means to burn."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 40/48

Audit Card ID: b1-verbrennen
Production identity: b1-verbrennen
DE: verbrennen
Current EN: To burn
Card type: standardStudy
Production index: 3055

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text.purple

CURRENT:
uguns

LUNA RECOMMENDED:
fire

LUNA REASON:
The accent contains a Latvian word that is absent from the English tip.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To burn" differs from audit Current EN "Main idea: verbrennen means to burn or burn to the point of destruction. With a body part, it means to burn."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 41/48

Audit Card ID: b1-verderben
Production identity: b1-verderben
DE: verderben
Current EN: To spoil
Card type: standardStudy
Production index: 3058

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: verderben means to spoil something or spoil yourself. For food, it often means that it is no longer edible.

LUNA RECOMMENDED:
Main idea: verderben means to spoil something or become spoiled. For food, it often means that it is no longer edible.

LUNA REASON:
“Spoil yourself” gives the wrong meaning for the intransitive use.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spoil" differs from audit Current EN "Main idea: verderben means to spoil something or spoil yourself. For food, it often means that it is no longer edible."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 41/48

Audit Card ID: b1-verderben
Production identity: b1-verderben
DE: verderben
Current EN: To spoil
Card type: standardStudy
Production index: 3058

SEVERITY: HIGH
CATEGORY: UNTRANSLATED_GERMAN
FIELD: study.tip.leftBlocks[0].text

CURRENT:
Food, plan or mood can verderben.

LUNA RECOMMENDED:
Food, a plan, or a mood can spoil.

LUNA REASON:
The German verb is left untranslated in an English learner explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spoil" differs from audit Current EN "Main idea: verderben means to spoil something or spoil yourself. For food, it often means that it is no longer edible."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 41/48

Audit Card ID: b1-verderben
Production identity: b1-verderben
DE: verderben
Current EN: To spoil
Card type: standardStudy
Production index: 3058

SEVERITY: LOW
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important.text

CURRENT:
verdorben for food means spoiled, not just bad tasting.

LUNA RECOMMENDED:
verdorben for food means spoiled, not simply tasting bad.

LUNA REASON:
“Bad tasting” is unnatural English in this context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To spoil" differs from audit Current EN "Main idea: verderben means to spoil something or spoil yourself. For food, it often means that it is no longer edible."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 41/48

Audit Card ID: b1-verderben
Production identity: b1-verderben
DE: verderben
Current EN: To spoil
Card type: standardStudy
Production index: 3058

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
broke down

LUNA RECOMMENDED:
spoiled

LUNA REASON:
The accent says “broke down,” but the English example says “has spoiled.”

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "To spoil" differs from audit Current EN "Main idea: verderben means to spoil something or spoil yourself. For food, it often means that it is no longer edible."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 41/48

Audit Card ID: b1-verderben
Production identity: b1-verderben
DE: verderben
Current EN: To spoil
Card type: standardStudy
Production index: 3058

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.important.red

CURRENT:
broke down

LUNA RECOMMENDED:
spoiled

LUNA REASON:
The accent contains wording absent from the important note and gives the wrong meaning.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To spoil" differs from audit Current EN "Main idea: verderben means to spoil something or spoil yourself. For food, it often means that it is no longer edible."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 42/48

Audit Card ID: b1-verletzen
Production identity: b1-verletzen
DE: verletzen
Current EN: To hurt
Card type: standardStudy
Production index: 3089

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
aizvainoja

LUNA RECOMMENDED:
hurt

LUNA REASON:
The accent contains Latvian instead of the English example wording.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To hurt" differs from audit Current EN "aizvainoja"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 42/48

Audit Card ID: b1-verletzen
Production identity: b1-verletzen
DE: verletzen
Current EN: To hurt
Card type: standardStudy
Production index: 3089

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.tip.leftBlocks[0].text.purple

CURRENT:
savaino

LUNA RECOMMENDED:
injure

LUNA REASON:
The accent contains Latvian rather than an English target word.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To hurt" differs from audit Current EN "aizvainoja"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 43/48

Audit Card ID: b1-versichern
Production identity: b1-versichern
DE: versichern
Current EN: To insure
Card type: standardStudy
Production index: 3107

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.comparison[0].meaning

CURRENT:
To insure • To certify

LUNA RECOMMENDED:
To insure • To assure

LUNA REASON:
“Certify” is not the natural meaning of versichern in this speech context.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To insure" differs from audit Current EN "To insure • To certify"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 43/48

Audit Card ID: b1-versichern
Production identity: b1-versichern
DE: versichern
Current EN: To insure
Card type: standardStudy
Production index: 3107

SEVERITY: MEDIUM
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
confirmed

LUNA RECOMMENDED:
assured

LUNA REASON:
The accent highlights “confirmed,” but the example says “assured me.”

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "To insure" differs from audit Current EN "To insure • To certify"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 43/48

Audit Card ID: b1-versichern
Production identity: b1-versichern
DE: versichern
Current EN: To insure
Card type: standardStudy
Production index: 3107

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.important.red

CURRENT:
apliecinu

LUNA RECOMMENDED:
assure

LUNA REASON:
The accent contains Latvian and does not match the English note.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To insure" differs from audit Current EN "To insure • To certify"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 44/48

Audit Card ID: b1-vertragen
Production identity: b1-vertragen
DE: vertragen
Current EN: Tolerate
Card type: normal
Production index: 3124

SEVERITY: HIGH
CATEGORY: SECTION_ACCENT
FIELD: study.sectionAccents.examples[1].lv.red

CURRENT:
aizvietoju

LUNA RECOMMENDED:
replaced

LUNA REASON:
The accent contains Latvian instead of the English example wording.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Tolerate" differs from audit Current EN "aizvietoju"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 45/48

Audit Card ID: b1-wechsel
Production identity: b1-wechsel
DE: Wechsel
Current EN: Shift
Card type: standardStudy
Production index: 3213

SEVERITY: MEDIUM
CATEGORY: MEANING_ERROR
FIELD: study.explanation

CURRENT:
Main idea: der Wechsel means change or change. In special phrases such as Exchange rate, the meaning becomes specific.

LUNA RECOMMENDED:
der Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.

LUNA REASON:
The meaning is duplicated, and “Exchange rate” is incorrectly presented as a German phrase.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Shift" differs from audit Current EN "der Wechsel means change or change. In special phrases such as Exchange rate, the meaning becomes specific."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 45/48

Audit Card ID: b1-wechsel
Production identity: b1-wechsel
DE: Wechsel
Current EN: Shift
Card type: standardStudy
Production index: 3213

SEVERITY: HIGH
CATEGORY: TRANSLATION_ERROR
FIELD: study.important.text

CURRENT:
der Exchange rate means the exchange rate, not simply the exchange process.

LUNA RECOMMENDED:
der Wechselkurs means the exchange rate, not simply the process of changing or exchanging.

LUNA REASON:
The German compound is replaced by English, making the explanation incorrect.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Shift" differs from audit Current EN "der Wechsel means change or change. In special phrases such as Exchange rate, the meaning becomes specific."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 46/48

Audit Card ID: b1-zugeben
Production identity: b1-zugeben
DE: zugeben
Current EN: To admit
Card type: standardStudy
Production index: 3292

SEVERITY: HIGH
CATEGORY: GERMAN_TERM_ERROR
FIELD: study.explanation

CURRENT:
Main idea: Zubegen means to admit a mistake or a truth. With food or substances, dazubegen means to add to.

LUNA RECOMMENDED:
zugeben means to admit a mistake or the truth. ... dazugeben means to add something.

LUNA REASON:
Both German verbs are misspelled in the English explanation.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To admit" differs from audit Current EN "Zubegen means to admit a mistake or a truth. ... dazubegen means to add to."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 46/48

Audit Card ID: b1-zugeben
Production identity: b1-zugeben
DE: zugeben
Current EN: To admit
Card type: standardStudy
Production index: 3292

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.important.text

CURRENT:
Gib Salz dazu is to be added to, not acknowledged.

LUNA RECOMMENDED:
Gib Salz dazu means “add salt,” not “admit.”

LUNA REASON:
The current sentence is grammatically awkward and unclear.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To admit" differs from audit Current EN "Zubegen means to admit a mistake or a truth. ... dazubegen means to add to."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 46/48

Audit Card ID: b1-zugeben
Production identity: b1-zugeben
DE: zugeben
Current EN: To admit
Card type: standardStudy
Production index: 3292

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT
FIELD: study.examples[2].lv

CURRENT:
Add a little more salt.

LUNA RECOMMENDED:
Highlight “Add”.

LUNA REASON:
The accent contains a Latvian token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To admit" differs from audit Current EN "Zubegen means to admit a mistake or a truth. ... dazubegen means to add to."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 46/48

Audit Card ID: b1-zugeben
Production identity: b1-zugeben
DE: zugeben
Current EN: To admit
Card type: standardStudy
Production index: 3292

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT
FIELD: study.comparison[1].meaning

CURRENT:
Add to

LUNA RECOMMENDED:
Highlight “Add to”.

LUNA REASON:
The accent contains a Latvian token, not English target text.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To admit" differs from audit Current EN "Zubegen means to admit a mistake or a truth. ... dazubegen means to add to."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: HIGH
CATEGORY: MEANING_ERROR
FIELD: study.translation

CURRENT:
Set fire to

LUNA RECOMMENDED:
Ignite; work or function

LUNA REASON:
“Set fire to” is mainly the meaning of anzünden, not zünden.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: MEDIUM
CATEGORY: UNNATURAL_ENGLISH
FIELD: study.explanation

CURRENT:
Main idea: zünden means to ignite, to set in motion, or to work. Anzünden is often used for specific kindling.

LUNA RECOMMENDED:
Anzünden is often used when lighting something specific.

LUNA REASON:
“Specific kindling” is unnatural and confusing here.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: MEDIUM
CATEGORY: GRAMMAR
FIELD: study.examples[1].lv

CURRENT:
Lighter does not light.

LUNA RECOMMENDED:
The lighter does not light.

LUNA REASON:
The singular count noun needs an article.

Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: PEDAGOGICAL
CATEGORY: SECTION_ACCENT
FIELD: study.explanation

CURRENT:
Main idea: zünden means to ignite, to set in motion, or to work. Anzünden is often used for specific kindling.

LUNA RECOMMENDED:
Highlight “ignite” or “work”.

LUNA REASON:
The accent highlights a heading rather than the key vocabulary.

Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT
FIELD: study.comparison[0].meaning

CURRENT:
To ignite, to work

LUNA RECOMMENDED:
Highlight “To ignite”.

LUNA REASON:
The accent contains a Latvian token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT
FIELD: study.comparison[2].meaning

CURRENT:
To burn

LUNA RECOMMENDED:
Highlight “To burn”.

LUNA REASON:
The accent contains a Latvian token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 47/48

Audit Card ID: b1-zünden
Production identity: b1-zünden
DE: zünden
Current EN: Set fire to
Card type: standardStudy
Production index: 3296

SEVERITY: TECHNICAL
CATEGORY: SECTION_ACCENT
FIELD: study.tip.leftBlocks[0].text

CURRENT:
A mechanism, fire, or idea starts working: zünden.

LUNA RECOMMENDED:
Highlight “starts working”.

LUNA REASON:
The accent contains a Latvian token.

Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

CARD 48/48

Audit Card ID: b1-steuer-2
Production identity: b1-steuer
DE: Steuer
Current EN: Tax
Card type: standardStudy
Production index: 3332

SEVERITY: HIGH
CATEGORY: DUPLICATION
FIELD: study.explanation

CURRENT:
Main idea: die Steuer means tax. The plural is die Steuern. Das Steuer, on the other hand, means a rudder or a steering wheel - the steering device of a ship or car.

LUNA RECOMMENDED:
das Steuer means a rudder or steering wheel

LUNA REASON:
The same meaning is incorrectly repeated.

Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Tax" differs from audit Current EN "das Steuer means the steering wheel or steering wheel"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

---

## Coverage summary

```text
EN–DE B1 HIGH AUDIT #13

Eligible logical cards selected: 48/48
HIGH findings represented: 77
Associated MEDIUM findings: 55
Associated LOW findings: 7
Associated WARNING findings: 0
sectionAccents TECHNICAL: 54
sectionAccents PEDAGOGICAL: 6
Duplicate/root-issue links: 0
Metadata anomalies: 41

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
HIGH #12 cards excluded: 50/50
b1-Gen-1055 resolved false-positive exclusion: PASS
b1-Krüppel-1651 resolved exclusion: PASS
HIGH #4 biegen normalized exclusion: PASS
HIGH #9 Tagung resolution exclusion: PASS
Tageordnung ghost-audit exclusion: PASS
Tagesordnung ghost-context exclusion: PASS
HIGH #11 Gehalt identities excluded: PASS
HIGH #12 Kunde shared identity excluded: PASS

Previous HIGH selections loaded: 425
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
Overlap with HIGH #12: 0

Production changes: 0
DE READ-ONLY: PASS
OWNER decisions made: 0
Workflow unresolved HIGH cards before HIGH #13: 23
HIGH #13 selected: 48
Workflow unresolved HIGH cards after HIGH #13: 0
Audit-selection pool before HIGH #13: 48
Audit-selection pool after HIGH #13: 0
HIGH WORKFLOW SELECTION BACKLOG: EXHAUSTED
```