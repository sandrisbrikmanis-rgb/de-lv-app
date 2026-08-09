# EN–DE B1 SECTIONACCENT OUT-OF-SCOPE TRIAGE

**Generated:** 2026-08-09T12:58:57.995Z

Validator issues from `validate-study-design.js` on B1, triaged separately from 214 regression repairs.

| Metric | Count |
| --- | --- |
| Validator issues supplied | 27 |
| Validated | 27 |
| Coverage | 100% |
| REAL ISSUES | 26 |
| FALSE POSITIVES | 1 |
| STALE | 0 |
| Repair required | 26 |
| No repair required | 1 |

## Findings

### #1 — b1-einerlei (einerlei)
- Field: sectionAccents.explanation.purple[0]
- CURRENT: doesn't matter
- TARGET FIELD TEXT: Main idea: einerlei means “no matter” or “it doesn’t matter”. It sounds more formal or old-fashioned than everyday egal.
- **VALIDATION STATUS:** FALSE POSITIVE
- **REPAIR REQUIRED:** NO
- **VALIDATED FINAL:** KEEP
- **REASON:** Field-targeted validation: accent token matches target section English text (including apostrophe/unicode normalization).
- **OWNER VERDICT:** NOT REQUIRED

### OUT-OF-SCOPE SECTIONACCENT FINDING 2

**Card ID:** b1-folge
**Production identity:** b1-folge
**Production index:** 929

**Field:** sectionAccents.explanation.purple[1]

**CURRENT:**
series

**TARGET FIELD TEXT:**
Main Idea: Folge most often means a consequence or result that follows an event. In a media context, Folge means an

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "series"

**REASON:** Accent token "series" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 3

**Card ID:** b1-griff
**Production identity:** b1-griff
**Production index:** 1144

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
grip

**TARGET FIELD TEXT:**
Main idea: Griff is most often a handle - a place behind which an object is grasped. In sports or movement, it can a

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "grip"

**REASON:** Accent token "grip" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 4

**Card ID:** b1-griff
**Production identity:** b1-griff
**Production index:** 1144

**Field:** sectionAccents.comparison[1].meaning.purple[0]

**CURRENT:**
Thistle

**TARGET FIELD TEXT:**
Handle

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT PEDAGOGICAL

**VALIDATED FINAL:**
REPLACE: Thistle → Handle

**REASON:** Accent highlights "Thistle" but target meaning field uses different English token(s): "Handle".

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 5

**Card ID:** b1-herausgeben
**Production identity:** b1-herausgeben
**Production index:** 1247

**Field:** sectionAccents.comparison[0].meaning.purple[0]

**CURRENT:**
Issue

**TARGET FIELD TEXT:**
Publish / hand out

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT PEDAGOGICAL

**VALIDATED FINAL:**
REPLACE: Issue → Publish

**REASON:** Accent highlights "Issue" but target meaning field uses different English token(s): "Publish / hand out".

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 6

**Card ID:** b1-kippen
**Production identity:** b1-kippen
**Production index:** 1508

**Field:** sectionAccents.examples[1].lv.purple[0]

**CURRENT:**
Does

**TARGET FIELD TEXT:**
Do not tilt the chair back.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "Does"

**REASON:** Accent token "Does" not found in field-targeted English text (examples[1].lv).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 7

**Card ID:** b1-lager
**Production identity:** b1-lager
**Production index:** 1704

**Field:** sectionAccents.examples[0].lv.purple[0]

**CURRENT:**
in stock

**TARGET FIELD TEXT:**
The goods are in the warehouse.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "in stock"

**REASON:** Accent token "in stock" not found in field-targeted English text (examples[0].lv).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 8

**Card ID:** b1-kante
**Production identity:** b1-kante
**Production index:** 1710

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
facet

**TARGET FIELD TEXT:**
Main idea: Kante is the edge or ridge of an object. It is not an ordinary territorial boundary, but a physical sharp

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "facet"

**REASON:** Accent token "facet" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 9

**Card ID:** b1-leistung
**Production identity:** b1-leistung
**Production index:** 1762

**Field:** sectionAccents.comparison[0].meaning.purple[2]

**CURRENT:**
power

**TARGET FIELD TEXT:**
Performance / achievement / capacity

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT PEDAGOGICAL

**VALIDATED FINAL:**
REPLACE: power → Performance

**REASON:** Accent highlights "power" but target meaning field uses different English token(s): "Performance / achievement / capacity".

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 10

**Card ID:** b1-nachdem
**Production identity:** b1-nachdem
**Production index:** 1941

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
after when

**TARGET FIELD TEXT:**
Main idea: nachdem introduces a subordinate clause and means after. In German, the verb in this subordinate clause comes at the end.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "after when"

**REASON:** Accent token "after when" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 11

**Card ID:** b1-nachdem
**Production identity:** b1-nachdem
**Production index:** 1941

**Field:** sectionAccents.important.purple[0]

**CURRENT:**
had eaten

**TARGET FIELD TEXT:**
After nachdem, the verb usually goes at the end of the sentence: nachdem ich gegessen hatte.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "had eaten"

**REASON:** Accent token "had eaten" not found in field-targeted English text (important.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 12

**Card ID:** b1-rüsten
**Production identity:** b1-rüsten
**Production index:** 2366

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
In a military context, it means to arm or equip with weapons.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 13

**Card ID:** b1-saat
**Production identity:** b1-saat
**Production index:** 2370

**Field:** sectionAccents.examples[0].lv.purple[0]

**CURRENT:**
Volume

**TARGET FIELD TEXT:**
The crop is germinating.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "Volume"

**REASON:** Accent token "Volume" not found in field-targeted English text (examples[0].lv).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 14

**Card ID:** b1-saat
**Production identity:** b1-saat
**Production index:** 2370

**Field:** sectionAccents.examples[2].lv.purple[0]

**CURRENT:**
Volume

**TARGET FIELD TEXT:**
The crop is growing well.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "Volume"

**REASON:** Accent token "Volume" not found in field-targeted English text (examples[2].lv).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 15

**Card ID:** b1-schicht
**Production identity:** b1-schicht
**Production index:** 2427

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
layer

**TARGET FIELD TEXT:**
In a work context, it means shift.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "layer"

**REASON:** Accent token "layer" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 16

**Card ID:** b1-schmelzen
**Production identity:** b1-schmelzen
**Production index:** 2478

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
schmelzen means to melt. If the substance changes by itself, translate it as “to melt”; if someone melts something, use “to melt” with an object.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 17

**Card ID:** b1-senden
**Production identity:** b1-senden
**Production index:** 2599

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
to send

**TARGET FIELD TEXT:**
In everyday life, it is often more natural for people to use schicken.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "to send"

**REASON:** Accent token "to send" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 18

**Card ID:** b1-sitz
**Production identity:** b1-sitz
**Production index:** 2634

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
Sitz means a seat or seating place. For a company or institution, it means headquarters.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 19

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689

**Field:** sectionAccents.comparison[0].meaning.purple[0]

**CURRENT:**
Tip

**TARGET FIELD TEXT:**
Peak, top, head

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT PEDAGOGICAL

**VALIDATED FINAL:**
REPLACE: Tip → Peak

**REASON:** Accent highlights "Tip" but target meaning field uses different English token(s): "Peak, top, head".

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 20

**Card ID:** b1-spitze
**Production identity:** b1-spitze
**Production index:** 2689

**Field:** sectionAccents.comparison[0].meaning.purple[2]

**CURRENT:**
leadership

**TARGET FIELD TEXT:**
Peak, top, head

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT PEDAGOGICAL

**VALIDATED FINAL:**
REPLACE: leadership → Peak

**REASON:** Accent highlights "leadership" but target meaning field uses different English token(s): "Peak, top, head".

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 21

**Card ID:** b1-stillen
**Production identity:** b1-stillen
**Production index:** 2762

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
to breastfeed

**TARGET FIELD TEXT:**
With needs, thirst, or curiosity, it means to relieve or satisfy them.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REPLACE or REMOVE stale accent "to breastfeed"

**REASON:** Accent token "to breastfeed" not found in field-targeted English text (explanation.root).

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 22

**Card ID:** b1-streichen
**Production identity:** b1-streichen
**Production index:** 2790

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
streichen means to cross out or remove something from a list. With a wall, fence, or paint, it means to paint; with a hand, it means to stroke.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 23

**Card ID:** b1-stürzen
**Production identity:** b1-stürzen
**Production index:** 2819

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
With an object, it can mean to knock something down; it can also mean to overthrow a government or official.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 24

**Card ID:** b1-szene
**Production identity:** b1-szene
**Production index:** 2830

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
a particular social group or scene

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 25

**Card ID:** b1-tau
**Production identity:** b1-tau
**Production index:** 2856

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
Das Tau, on the other hand, means a ship's towline or rope.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 26

**Card ID:** b1-wechsel
**Production identity:** b1-wechsel
**Production index:** 3213

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
Wechsel means a change or switch. In compounds such as Wechselkurs, the meaning becomes more specific.

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING

### OUT-OF-SCOPE SECTIONACCENT FINDING 27

**Card ID:** b1-steuer
**Production identity:** b1-steuer
**Production index:** 3332

**Field:** sectionAccents.explanation.purple[0]

**CURRENT:**
Main

**TARGET FIELD TEXT:**
das Steuer means a rudder or steering wheel

**VALIDATION STATUS:** REAL ISSUE
**SEVERITY:** MEDIUM
**CATEGORY:** SECTIONACCENT TECHNICAL

**VALIDATED FINAL:**
REMOVE stale accent Main

**REASON:** Stale accent from removed 'Main idea:' prefix; target explanation no longer contains 'Main'.

**OWNER VERDICT:** PENDING
