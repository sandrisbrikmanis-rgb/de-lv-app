# DA–DE Sätze targeted regression audit (READ-ONLY)

**Date:** 2026-08-16
**Scope:** Production `data/da/sentences.js` after PR [#555](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/555) OWNER signed repair
**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)
**Authoritative source:** `reports/da-sentences-owner-decisions-signed.md`
**Production changes during audit:** 0

## Summary

| Metric | Value |
|--------|-------|
| OWNER signed findings loaded | **252** |
| LABOT findings loaded | **228** |
| Unique OWNER repairs expected | **213** |
| Unique OWNER repairs found (dedup) | **213** |
| EXACT_MATCH | **213/213** |
| MISMATCH | **0** |
| MISSING_SENTENCE | **0** |
| MISSING_FIELD | **0** |
| NELABOT checked (unique cards) | **20** |
| Unauthorized NELABOT changes | **1** |
| NEEDS_SOURCE_REVIEW checked | **2** |
| Unauthorized NEEDS_SOURCE_REVIEW changes | **0** |
| Changed sentences (strict lv) | **208** |
| Changed sentences (normalized lv) | **207** |
| No-op LABOT (pre-existing OWNER NEW) | **6** |
| Zero-width-only LABOT | **1** |
| Changed sentences audited (LABOT scope) | **213** |
| Changed fields audited | **208** |
| CRITICAL | **0** |
| HIGH | **7** |
| MEDIUM | **13** |
| LOW | **3** |
| FALSE_POSITIVE | **0** |
| LV remnants | **0** |
| EN remnants | **0** |
| Other foreign remnants | **0** |
| Mixed-language remnants | **0** |
| Placeholders | **0** |
| Zero-width | **0** |
| Mojibake | **0** |
| OWNER risk artifacts | **1** |
| DE changed sentences | **0** |
| DE changed fields | **0** |
| Unexpected production changes | **0** |
| Sentence count | **796/796** |
| Syntax | **PASS** |
| ID/order | **PASS** |
| Structure | **PASS** |
| Mirror sync | **PASS** |
| Luna batches exported | **5** |
| Luna quality findings | **21** |

### Verdict

**DA–DE SENTENCES TARGETED REGRESSION AUDIT — FAIL**

## Reconstruction note

Reconstruction reconciles: normalized lv changes + no-op LABOT = 213.

## sentence-541 special case

Pre-repair production DA was `Spis så meget som du vil!` (audit typo omitted *som*). Signed `DA_CURRENT` corrected before apply. Authoritative expected production value: **`Tag for dig!`**. Current production:

`Tag for dig!`

## Findings

### DA-SENT-REG-0001 [HIGH]

- **Sentence/Card ID:** `sentence-576`
- **Field:** `lv`
- **DE_CURRENT:** Wie geht es dir?
- **DA_CURRENT:** Hvordan har du det?
- **Problem:** Unauthorized change on NELABOT sentence
- **Recommended correction:** Hvordan har du det

### DA-SENT-REG-0002 [MEDIUM]

- **Sentence/Card ID:** `sentence-383`
- **Field:** `lv`
- **DE_CURRENT:** Vorhanden sein.
- **DA_CURRENT:** Være til stede • Være tilgængelig
- **Problem:** OWNER risk artifact in production: MULTI_VARIANT_BULLET
- **Recommended correction:** Single natural Danish sentence without placeholders/multi-variant chains

### DA-SENT-REG-0003 [MEDIUM]

- **Sentence/Card ID:** `sentence-17`
- **Field:** `lv`
- **DE_CURRENT:** Kein Durchgang!
- **DA_CURRENT:** Ingen adgang!
- **Problem:** 'Kein Durchgang' is a no-through-traffic / no-passage sign (do not pass through), not a no-entry sign. 'Ingen adgang' means no access/admission — a different concept.
- **Recommended correction:** Ingen gennemgang!

### DA-SENT-REG-0004 [MEDIUM]

- **Sentence/Card ID:** `sentence-42`
- **Field:** `lv`
- **DE_CURRENT:** Heraus mit der Sprache!
- **DA_CURRENT:** Kom nu frem med det!
- **Problem:** German explicitly demands speech ('mit der Sprache'). Danish 'Kom nu frem med det' is a generic 'come on, reveal it' and does not convey the speak-up/confess idiom tied to language.
- **Recommended correction:** Ud med sproget!

### DA-SENT-REG-0005 [HIGH]

- **Sentence/Card ID:** `sentence-106`
- **Field:** `lv`
- **DE_CURRENT:** Stell dich nicht so an!
- **DA_CURRENT:** Lad nu være!
- **Problem:** 'Stell dich nicht so an' means don't put on airs or act pretentiously. 'Lad nu være' is a vague 'stop it' and loses the pretentious-acting sense entirely.
- **Recommended correction:** Hold op med at stille dig sådan an!

### DA-SENT-REG-0006 [HIGH]

- **Sentence/Card ID:** `sentence-129`
- **Field:** `lv`
- **DE_CURRENT:** Unter vier Augen.
- **DA_CURRENT:** Alene sammen.
- **Problem:** 'Unter vier Augen' is the standard idiom for privately/confidentially (between us). 'Alene sammen' is not a Danish idiom and reads as an awkward calque rather than natural Danish.
- **Recommended correction:** Under fire øjne.

### DA-SENT-REG-0007 [HIGH]

- **Sentence/Card ID:** `sentence-152`
- **Field:** `lv`
- **DE_CURRENT:** Ich bin beauftragt.
- **DA_CURRENT:** Jeg har fået til opgave.
- **Problem:** 'Jeg har fået til opgave' is grammatically incomplete in Danish; the idiom requires an object ('det' or 'en opgave') or a different construction. 'Ich bin beauftragt' means commissioned/authorized, not merely assigned a task in broken form.
- **Recommended correction:** Jeg er blevet bemyndiget.

### DA-SENT-REG-0008 [MEDIUM]

- **Sentence/Card ID:** `sentence-176`
- **Field:** `lv`
- **DE_CURRENT:** Beileid aussprechen.
- **DA_CURRENT:** Udtrykke medfølelse.
- **Problem:** 'Beileid aussprechen' is specifically to offer condolences (at bereavement). 'Udtrykke medfølelse' is broader sympathy and does not pin the condolence register.
- **Recommended correction:** Kondolere. / Udtrykke kondolence.

### DA-SENT-REG-0009 [MEDIUM]

- **Sentence/Card ID:** `sentence-215`
- **Field:** `lv`
- **DE_CURRENT:** Bitte sehr.
- **DA_CURRENT:** Værsgo
- **Problem:** 'Bitte sehr' most often answers thanks ('you're welcome'). 'Værsgo' means 'here you are/help yourself' and mismatches that response sense; it also duplicates sentence-213/325 without distinguishing functions.
- **Recommended correction:** Selv tak. / Velbekomme.

### DA-SENT-REG-0010 [HIGH]

- **Sentence/Card ID:** `sentence-230`
- **Field:** `lv`
- **DE_CURRENT:** Mit der Dame ziehen.
- **DA_CURRENT:** Spil damen
- **Problem:** 'Mit der Dame ziehen' is a card/chess idiom for playing the queen card/piece. Danish 'spil damen' is ambiguous: 'dam' most commonly denotes the board game checkers, and the chess queen is normally 'dronningen'.
- **Recommended correction:** Træk med damen. / Spil dronningen.

### DA-SENT-REG-0011 [MEDIUM]

- **Sentence/Card ID:** `sentence-231`
- **Field:** `lv`
- **DE_CURRENT:** Es dämmert.
- **DA_CURRENT:** Det er ved at blive mørkt
- **Problem:** 'Es dämmert' covers both dawn and dusk/twilight. The current rendering only expresses fading light (dusk) and drops the equally common dawn sense.
- **Recommended correction:** Det dæmrer.

### DA-SENT-REG-0012 [MEDIUM]

- **Sentence/Card ID:** `sentence-246`
- **Field:** `lv`
- **DE_CURRENT:** Was hast du?
- **DA_CURRENT:** Hvad er der galt?
- **Problem:** Colloquial 'Was hast du?' addresses the person directly ('what's wrong with you?'). The Danish lacks the second-person target and reads as a generic 'what's wrong?'
- **Recommended correction:** Hvad er der galt med dig? / Hvad fejler du?

### DA-SENT-REG-0013 [MEDIUM]

- **Sentence/Card ID:** `sentence-283`
- **Field:** `lv`
- **DE_CURRENT:** Leben Sie wohl!
- **DA_CURRENT:** Farvel!
- **Problem:** 'Leben Sie wohl' is a formal, literary valediction ('fare thee well'). 'Farvel' is neutral everyday goodbye and loses the formal register and 'live well' nuance.
- **Recommended correction:** Leve vel!

### DA-SENT-REG-0014 [HIGH]

- **Sentence/Card ID:** `sentence-310`
- **Field:** `lv`
- **DE_CURRENT:** Letzte Neuheit!
- **DA_CURRENT:** Seneste nyhed!
- **Problem:** 'Letzte Neuheit' is a retail novelty/new-product headline, not news. 'Seneste nyhed' reads as 'latest news' (Nachricht), which is the wrong semantic field.
- **Recommended correction:** Helt nyt! / Nyeste vare!

### DA-SENT-REG-0015 [LOW]

- **Sentence/Card ID:** `sentence-324`
- **Field:** `lv`
- **DE_CURRENT:** Schon gut!
- **DA_CURRENT:** Det er okay
- **Problem:** 'Schon gut!' dismissively calms or cuts off concern ('alright already / enough'). 'Det er okay' is neutral reassurance and softens the impatient, closing tone.
- **Recommended correction:** Ro på! / Det er godt nok!

### DA-SENT-REG-0016 [MEDIUM]

- **Sentence/Card ID:** `sentence-335`
- **Field:** `lv`
- **DE_CURRENT:** Spaß beiseite!
- **DA_CURRENT:** Spøg til side!
- **Problem:** 'Spaß beiseite' is a fixed phrase meaning 'joking aside / seriously now'. 'Spøg til side' is a calque and not idiomatic Danish; natural equivalents use 'skæmt' or an adverbial framing.
- **Recommended correction:** Skæmt til side! / Nu alvorligt!

### DA-SENT-REG-0017 [LOW]

- **Sentence/Card ID:** `sentence-336`
- **Field:** `lv`
- **DE_CURRENT:** Wie spät ist es?
- **DA_CURRENT:** Hvad er klokken?
- **Problem:** Interrogative Danish should carry a question mark to match the German source punctuation and learner expectations.
- **Recommended correction:** Hvad er klokken?

### DA-SENT-REG-0018 [LOW]

- **Sentence/Card ID:** `sentence-374`
- **Field:** `lv`
- **DE_CURRENT:** Er ist Berliner von Geburt.
- **DA_CURRENT:** Han er berliner af fødsel
- **Problem:** Nationality/origin adjective from a place name should be capitalized in Danish.
- **Recommended correction:** Han er Berliner af fødsel

### DA-SENT-REG-0019 [MEDIUM]

- **Sentence/Card ID:** `sentence-383`
- **Field:** `lv`
- **DE_CURRENT:** Vorhanden sein.
- **DA_CURRENT:** Være til stede • Være tilgængelig
- **Problem:** Bullet-separated multi-variant gloss (•) is an OWNER risk pattern; both variants are semantically valid but the field should ideally be a single natural Danish phrase.
- **Recommended correction:** Være til stede

### DA-SENT-REG-0020 [HIGH]

- **Sentence/Card ID:** `sentence-409`
- **Field:** `lv`
- **DE_CURRENT:** Von Rechts wegen.
- **DA_CURRENT:** Af ret.
- **Problem:** 'Von Rechts wegen' is a fixed legal phrase meaning by law / on legal grounds, not by justice or fairness.
- **Recommended correction:** Ifølge loven

### DA-SENT-REG-0021 [MEDIUM]

- **Sentence/Card ID:** `sentence-503`
- **Field:** `lv`
- **DE_CURRENT:** Steh auf, Hanna, es klingelt!
- **DA_CURRENT:** Rejs dig, Hanna, det ringer!
- **Problem:** DE es klingelt means the doorbell; det ringer in DA usually means the phone is ringing.
- **Recommended correction:** Rejs dig, Hanna, der er ringet på!

### DA-SENT-REG-0022 [MEDIUM]

- **Sentence/Card ID:** `sentence-559`
- **Field:** `lv`
- **DE_CURRENT:** Das Gewitter zieht vorüber.
- **DA_CURRENT:** Uvejret er passeret.
- **Problem:** DE present progressive (storm passing now); er passeret reads as already finished and sounds stiff.
- **Recommended correction:** Uvejret er ved at gå over.

### DA-SENT-REG-0023 [MEDIUM]

- **Sentence/Card ID:** `sentence-748`
- **Field:** `lv`
- **DE_CURRENT:** Welche Handschuhe wünschen Sie?
- **DA_CURRENT:** Hvilken slags handsker ønsker De?
- **Problem:** Singular determiner 'hvilken slags' does not agree with plural 'handsker'; German 'Welche Handschuhe' is a direct which-gloves question, not what-kind.
- **Recommended correction:** Hvilke handsker ønsker De?

## Next step

For each real finding: **finding → OWNER review → COPY-ONLY micro-repair → micro-regression**.