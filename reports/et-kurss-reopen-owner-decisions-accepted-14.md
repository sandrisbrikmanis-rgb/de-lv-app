# ET–DE Kurss — REOPEN OWNER DECISIONS ACCEPTED — 14/14

**Purpose:** authoritative OWNER mapping for the 14 `NEEDS_OWNER_DECISION` rows from PR #640.  
**Scope:** L14–L18 only.  
**Status:** OWNER ACCEPTED.  
**DE:** STRICT READ-ONLY.  

All 14 rows are `LABOT`. Cursor must perform COPY-ONLY apply using exact CURRENT match and exact NEW below. No translation, paraphrasing, cleanup, neighboring edits, or DE changes are allowed.

| ID | Lesson | Exact target path | Status | CURRENT | NEW |
|---|---|---|---|---|---|
| ET-KURSS-REOPEN-OWNER-001 | L14 | `kurssLesson14.sections[title=Grammatika].blocks[heading=Wollen].examples[0]` | LABOT | Ich will vorwärts kommen. — Es gribu tikt uz priekšu. | Ich will vorwärts kommen. — Ma tahan edasi jõuda. |
| ET-KURSS-REOPEN-OWNER-002 | L14 | `kurssLesson14.sections[title=Grammatika].blocks[heading=Mögen].examples[0]` | LABOT | Ich mag die Suppe nicht essen. — Es negribu zupu ēst. | Ich mag die Suppe nicht essen. — Ma ei taha suppi süüa. |
| ET-KURSS-REOPEN-OWNER-003 | L15 | `kurssLesson15.sections[title=Gramatika].blocks[heading=entzweischneiden].examples[0]` | LABOT | Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm. | Ich schneide den Apfel entzwei. — Ma lõikan õuna pooleks. |
| ET-KURSS-REOPEN-OWNER-004 | L16 | `kurssLesson16.sections[title=Hääldus].items[2]` | LABOT | die Wälder: ä izrunā kā šaurais īsais e. | die Wälder: ä hääldatakse lühikese e-häälikuna. |
| ET-KURSS-REOPEN-OWNER-005 | L16 | `kurssLesson16.sections[title=Hääldus].items[3]` | LABOT | die Bäuerinnen: äu izrunā kā oi. | die Bäuerinnen: äu hääldatakse nagu oi. |
| ET-KURSS-REOPEN-OWNER-006 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Akkusativ: wohin?].examples[0]` | LABOT | Ich gehe an den Tisch. — Es eju pie galda. | Ich gehe an den Tisch. — Ma lähen laua juurde. |
| ET-KURSS-REOPEN-OWNER-007 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Akkusativ: wohin?].examples[1]` | LABOT | Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola. | Ich stelle den Korb auf die Bank. — Ma panen korvi pingile. |
| ET-KURSS-REOPEN-OWNER-008 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Akkusativ: wohin?].examples[2]` | LABOT | Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā. | Ich lege die Äpfel in das Körbchen. — Ma panen õunad korvikesse. |
| ET-KURSS-REOPEN-OWNER-009 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Akkusativ: wohin?].examples[3]` | LABOT | Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē. | Ich gieße das Wasser in den Krug. — Ma valan vee kannu. |
| ET-KURSS-REOPEN-OWNER-010 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Dativ: wo?].examples[0]` | LABOT | Ich stehe an dem Tische. — Es stāvu pie galda. | Ich stehe an dem Tische. — Ma seisan laua juures. |
| ET-KURSS-REOPEN-OWNER-011 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Dativ: wo?].examples[1]` | LABOT | Der Korb steht auf der Bank. — Grozs stāv uz sola. | Der Korb steht auf der Bank. — Korv seisab pingil. |
| ET-KURSS-REOPEN-OWNER-012 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Dativ: wo?].examples[2]` | LABOT | Die Äpfel sind in dem Körbchen. — Āboli ir groziņā. | Die Äpfel sind in dem Körbchen. — Õunad on korvikeses. |
| ET-KURSS-REOPEN-OWNER-013 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Dativ: wo?].examples[3]` | LABOT | Das Wasser ist in dem Kruge. — Ūdens ir krūzē. | Das Wasser ist in dem Kruge. — Vesi on kannus. |
| ET-KURSS-REOPEN-OWNER-014 | L18 | `kurssLesson18.sections[title=Gramatika].blocks[heading=Ainenimetused].examples[0]` | LABOT | Ich trinke Milch. — Es dzeru pienu. | Ich trinke Milch. — Ma joon piima. |

## Coverage / hard gates

- OWNER findings: **14/14**
- LABOT: **14**
- NELABOT: **0**
- FALSE_POSITIVE: **0**
- NEEDS_OWNER_DECISION: **0**
- PENDING: **0**

Before each write:

```text
actual production value === CURRENT
```

If mismatch: `SKIP` that exact row and report `CURRENT_VALUE_MISMATCH`; do not infer or reconstruct.

After apply:

```text
REQUESTED_LABOT = 14
APPLIED_VERIFIED = 14/14
CURRENT_VALUE_MISMATCH = 0
OWNER_NEW_MISMATCH = 0
MISSING_PATH = 0
DE_CHANGES = 0
UNEXPECTED_CHANGES = 0
```

Then rerun the ET Kurss live/runtime content regression and full deterministic LV-remnant residual scan before restoring closure.

**OWNER VERDICT:** `ET_KURSS_REOPEN_OWNER_14_ACCEPTED`