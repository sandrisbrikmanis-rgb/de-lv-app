# EN–DE B1 HIGH Owner Review #11

**Generated:** 2026-08-09T10:12:54.787Z

**Status:** READY FOR OWNER REVIEW — no production changes

**Block size:** 50 unique cards

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
b1-Gen-1055 resolved false-positive exclusion: PASS
b1-Krüppel-1651 resolved exclusion: PASS
HIGH #4 biegen normalized exclusion: PASS
HIGH #9 Tagung resolution exclusion: PASS
Tageordnung ghost-audit exclusion: PASS
Tagesordnung ghost-context exclusion: PASS
Duplicate logical cards vs previous HIGH blocks: 0

---

## 01 — b1-bestimmen — bestimmen

Production index: 397
Card type: standardStudy
DE: bestimmen
Article: —
Plural: —
LV source: noteikt
Production EN: Determine
Metadata anomaly: Production EN "Determine" differs from audit Current EN "Determine / predict"
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: MEDIUM
Type: MEANING_ERROR
Field: study.comparison[0].meaning
Current EN: Determine / predict
Recommended EN: Determine / designate
Reason: “Predict” does not accurately cover this meaning of bestimmen.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Determine" differs from audit Current EN "Determine / predict"

OWNER VERDICT: LABOT
OWNER FINAL EN: Determine / designate
OWNER NOTE: “predict” nav bestimmen šīs comparison nozīmes ekvivalents; “designate” saglabā nozīmi “noteikt / izraudzīties”.

### Finding 2

Severity: HIGH
Type: TYPO
Field: study.tip.leftBlocks[0].text
Current EN: usually der bestimnen.
Recommended EN: usually bestimmen.
Reason: Contains a malformed German word and an unnecessary article.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Determine" differs from audit Current EN "Determine / predict"

OWNER VERDICT: LABOT
OWNER FINAL EN: Usually use bestimmen.
OWNER NOTE: “bestimnen” ir bojāta forma, artikuls “der” darbības vārdam nav pieļaujams, un pilns angļu teikums ir dabiskāks par fragmentu “usually bestimmen”.

### Finding 3

Severity: HIGH
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: cenu, devu
Recommended EN: Replace the Latvian accent tokens with “price, dose.”
Reason: The section accent contains Latvian tokens.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Determine" differs from audit Current EN "Determine / predict"

OWNER VERDICT: LABOT
OWNER FINAL EN: price, dose
OWNER NOTE: Latviešu accent targets jāaizstāj ar precīziem EN tokeniem no learner-facing tip teksta.

## 02 — b1-bewegen — bewegen

Production index: 421
Card type: standardStudy
DE: bewegen
Article: —
Plural: —
LV source: kustināt
Production EN: To move
Metadata anomaly: Production EN "To move" differs from audit Current EN "Kustini objektu → bewegen; kusties pats → sich bewegen; emocijas → bewegt."
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: HIGH
Type: LATVIAN_IN_EN
Field: study.tip.leftBlocks[0].text
Current EN: Kustini objektu → bewegen; kusties pats → sich bewegen; emocijas → bewegt.
Recommended EN: Move an object → bewegen; move yourself → sich bewegen; emotions → bewegt.
Reason: The entire learner-facing tip is in Latvian rather than English.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To move" differs from audit Current EN "Kustini objektu → bewegen; kusties pats → sich bewegen; emocijas → bewegt."

OWNER VERDICT: LABOT
OWNER FINAL EN: Move an object → bewegen; move yourself → sich bewegen; emotions → bewegt.
OWNER NOTE: Pilns learner-facing tip pašlaik ir jauktā LV/DE valodā.

### Finding 2

Severity: HIGH
Type: LATVIAN_IN_EN
Field: study.important.text
Current EN: Bez sich bewegen is usually 'to move something'
Recommended EN: Without sich bewegen, it usually means “to move something.”
Reason: Contains Latvian “Bez” in an English learner-facing field.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To move" differs from audit Current EN "Kustini objektu → bewegen; kusties pats → sich bewegen; emocijas → bewegt."

OWNER VERDICT: LABOT
OWNER FINAL EN: Without sich, bewegen usually means “to move something”.
OWNER NOTE: “Bez” ir LV atlikums. Vienlaikus saglabāt precīzu kontrastu starp bewegen un sich bewegen.

### Finding 3

Severity: HIGH
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: kustini, kusties, emocijas
Recommended EN: Replace the Latvian accent tokens with the corresponding English tokens.
Reason: The section accent contains Latvian tokens.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To move" differs from audit Current EN "Kustini objektu → bewegen; kusties pats → sich bewegen; emocijas → bewegt."

OWNER VERDICT: LABOT
OWNER FINAL EN: Move an object, move yourself, emotions
OWNER NOTE: Izmantot tikai faktiskajā EN tip tekstā eksistējošus target fragmentus.

## 03 — b1-beziehen — beziehen

Production index: 433
Card type: standardStudy
DE: beziehen
Article: —
Plural: —
LV source: saņemt
Production EN: To receive
Metadata anomaly: Production EN "To receive" differs from audit Current EN "lv: The, The, The"
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.examples[2]
Current EN: lv: The, The, The
Recommended EN: Use one correctly positioned highlight for “The,” or highlight the corresponding target words.
Reason: Three identical highlights do not match the target sentence structure.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To receive" differs from audit Current EN "lv: The, The, The"

OWNER VERDICT: LABOT
OWNER FINAL EN: The
OWNER NOTE: Trīs identiski “The” targets neatbilst vienam faktiskajam occurrence. Šajā repair neizdomāt citus accent targets.

### Finding 2

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.comparison[0].meaning
Current EN: purple: Receive, Receive
Recommended EN: Highlight “Receive” and “move in” respectively.
Reason: Both meanings are highlighted as “Receive,” so the second meaning is misleading.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "To receive" differs from audit Current EN "lv: The, The, The"

OWNER VERDICT: LABOT
OWNER FINAL EN: Receive, move in
OWNER NOTE: Abām beziehen nozīmēm nedrīkst būt viens un tas pats highlight.

### Finding 3

Severity: HIGH
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: attiekties
Recommended EN: Replace the Latvian accent token with “refer to.”
Reason: The section accent contains a Latvian token.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To receive" differs from audit Current EN "lv: The, The, The"

OWNER VERDICT: LABOT
OWNER FINAL EN: refer to
OWNER NOTE: LV token jāaizstāj ar atbilstošo EN learner-facing target.

## 04 — b1-bildschirm — Bildschirm

Production index: 443
Card type: standardStudy
DE: Bildschirm
Article: der
Plural: die Bildschirme
LV source: ekrāns
Production EN: Screen
Metadata anomaly: Production EN "Screen" differs from audit Current EN "Main idea: der Bildschimmer is a screen - the display surface of a computer monitor, phone, tablet or television. Plural: die Bildschimmer."
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: HIGH
Type: SPELLING_ERROR
Field: study.explanation
Current EN: Main idea: der Bildschimmer is a screen - the display surface of a computer monitor, phone, tablet or television. Plural: die Bildschimmer.
Recommended EN: Main idea: der Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: die Bildschirme.
Reason: The German word and plural are misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Screen" differs from audit Current EN "Main idea: der Bildschimmer is a screen - the display surface of a computer monitor, phone, tablet or television. Plural: die Bildschimmer."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: der Bildschirm is a screen—the display surface of a computer monitor, phone, tablet, or television. Plural: die Bildschirme.
OWNER NOTE: Izlabot gan lemma “Bildschimmer”, gan nepareizo plural “Bildschimmer”.

### Finding 2

Severity: HIGH
Type: SPELLING_ERROR
Field: study.important.text
Current EN: der Bildschirm = screen. Plural: die Bildschimmer.
Recommended EN: der Bildschirm = screen. Plural: die Bildschirme.
Reason: The German plural is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Screen" differs from audit Current EN "Main idea: der Bildschimmer is a screen - the display surface of a computer monitor, phone, tablet or television. Plural: die Bildschimmer."

OWNER VERDICT: LABOT
OWNER FINAL EN: der Bildschirm = screen. Plural: die Bildschirme.
OWNER NOTE: Pareizais plural ir die Bildschirme.

## 05 — b1-bieten — bieten

Production index: 449
Card type: standardStudy
DE: bieten
Article: —
Plural: —
LV source: piedāvāt
Production EN: To offer
Metadata anomaly: Production EN "To offer" differs from audit Current EN "Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular."
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: HIGH
Type: SPELLING_AND_GRAMMAR_ERROR
Field: study.explanation
Current EN: Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular.
Recommended EN: Main idea: bieten means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer something to someone in particular.
Reason: “Beet” is a typo for bieten, and the second sentence needs an object.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To offer" differs from audit Current EN "Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: bieten means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer something to someone in particular.
OWNER NOTE: “Beet” ir kļūdains target word; otrajā teikumā trūkst objekta.

### Finding 2

Severity: MEDIUM
Type: UNNATURAL_EXPRESSION
Field: study.comparison[1].meaning
Current EN: Offer someone specific
Recommended EN: Offer something to someone specific
Reason: The current phrase is incomplete and unnatural in English.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To offer" differs from audit Current EN "Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular."

OWNER VERDICT: LABOT
OWNER FINAL EN: Offer something to someone specific
OWNER NOTE: Nepieciešams objekts “something”.

### Finding 3

Severity: MEDIUM
Type: UNNATURAL_OR_MISLEADING_EXPRESSION
Field: study.important.text
Current EN: bieten often describes what a place, programme, or service provides; anbieten emphasizes more on offering assets to someone.
Recommended EN: bieten often describes what a place, programme, or service provides; anbieten places more emphasis on actively offering something to someone.
Reason: “Offering assets” is misleading, and “emphasizes more on” is ungrammatical.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To offer" differs from audit Current EN "Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular."

OWNER VERDICT: LABOT
OWNER FINAL EN: bieten often describes what a place, programme, or service provides; anbieten places more emphasis on actively offering something to someone.
OWNER NOTE: “offering assets” ir semantiski maldinošs, “emphasizes more on” — negramatisks.

### Finding 4

Severity: LOW
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[1]
Current EN: The hotel offers a beautiful view of the lake.
Recommended EN: Highlight “offers” or “view” instead of “The”.
Reason: The accent highlights an uninformative article rather than the target meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "To offer" differs from audit Current EN "Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular."

OWNER VERDICT: LABOT
OWNER FINAL EN: offers
OWNER NOTE: Highlight target jābūt mācāmajai nozīmei, nevis artikulam “The”.

### Finding 5

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: Opportunities, courses, services or view often etwas bieten = gives/offers something.
Recommended EN: Highlight only English tokens, such as “offers”.
Reason: The accent includes Latvian text that is absent from the English field.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To offer" differs from audit Current EN "Main Idea: Beet means to offer or provide something as an opportunity, service, or benefit. anbieten more often means to actively offer to someone in particular."

OWNER VERDICT: LABOT
OWNER FINAL EN: offers
OWNER NOTE: Accentā izmantot EN tokenu, kas reāli eksistē learner-facing tekstā.

## 06 — b1-block — Block

Production index: 465
Card type: standardStudy
DE: Block
Article: der
Plural: die Blöcke
LV source: bloks
Production EN: Block
Metadata anomaly: Production EN "Block" differs from audit Current EN "For writing Block = block; in structure = block; in material = block."
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: HIGH
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: For writing Block = block; in structure = block; in material = block.
Recommended EN: Highlight only English tokens, such as “block”, “notepad”, and “lump”.
Reason: The accent includes Latvian words that are absent from the English field.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Block" differs from audit Current EN "For writing Block = block; in structure = block; in material = block."

OWNER VERDICT: LABOT
OWNER FINAL EN: block, notepad, lump
OWNER NOTE: Accent targets jābūt tikai EN tokeniem un tiem jāatspoguļo kartītē skaidrotās Block nozīmes.

## 07 — b1-bogen — Bogen

Production index: 474
Card type: standardStudy
DE: Bogen
Article: der
Plural: die Bogen
LV source: loks
Production EN: Circle
Metadata anomaly: —
OWNER CARD VERDICT: LABOT
ASSOCIATED REPAIR — field lv: Circle → Bow
Associated repair note: Front translation un study.translation nedrīkst konfliktēt.

### Finding 1

Severity: HIGH
Type: TRANSLATION_ERROR
Field: study.translation
Current EN: Circle
Recommended EN: Bow
Reason: The provided meaning is “loks”, and the examples explain the bow meaning.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Bow
OWNER NOTE: Šīs kartītes LV source ir “loks”, un konkrētās kartītes pamata nozīme ir bow. Front translation un study.translation nedrīkst konfliktēt.

### Finding 2

Severity: LOW
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[0]
Current EN: The bow is made of wood.
Recommended EN: Highlight “bow” or “wood” instead of “The”.
Reason: The accent highlights an uninformative article rather than the target meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: bow
OWNER NOTE: Highlight mācāmo Bogen nozīmi, nevis “The”.

### Finding 3

Severity: LOW
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[1]
Current EN: The bridge has a beautiful arch.
Recommended EN: Highlight “arch” instead of “The”.
Reason: The accent highlights an uninformative article rather than the target meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: arch
OWNER NOTE: Šajā piemērā Bogen nozīme ir “arch”.

### Finding 4

Severity: LOW
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[2]
Current EN: Please fill out the form.
Recommended EN: Highlight “form” instead of “Please”.
Reason: The accent highlights an uninformative adverb rather than the target meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: form
OWNER NOTE: Šajā piemērā Bogen nozīme ir “form”, nevis “Please”.

## 08 — b1-dadurch — dadurch

Production index: 552
Card type: standardStudy
DE: dadurch
Article: —
Plural: —
LV source: tādējādi
Production EN: Thus
Metadata anomaly: Production EN "Thus" differs from audit Current EN "Main idea: deruch means thus or thereby. It links the above cause with the effect."
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: HIGH
Type: SPELLING_ERROR
Field: study.explanation
Current EN: Main idea: deruch means thus or thereby. It links the above cause with the effect.
Recommended EN: Main idea: dadurch means thus or thereby. It links the cause mentioned above with its effect.
Reason: The German word is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Thus" differs from audit Current EN "Main idea: deruch means thus or thereby. It links the above cause with the effect."

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: dadurch means thus or thereby. It links the cause mentioned above with its effect.
OWNER NOTE: “deruch” ir bojāta lemma.

### Finding 2

Severity: HIGH
Type: SPELLING_ERROR
Field: study.important.text
Current EN: deruch refers to the action or situation mentioned above, not simply to the place.
Recommended EN: dadurch refers to the action or situation mentioned above, not simply to a place.
Reason: The German word is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Thus" differs from audit Current EN "Main idea: deruch means thus or thereby. It links the above cause with the effect."

OWNER VERDICT: LABOT
OWNER FINAL EN: dadurch refers to the action or situation mentioned above, not simply to a place.
OWNER NOTE: Izlabot lemma un artikulu “the place” uz dabisko “a place”.

### Finding 3

Severity: LOW
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.explanation
Current EN: Main idea: deruch means thus or thereby. It links the above cause with the effect.
Recommended EN: Highlight “thus” or “thereby” instead of “Main”.
Reason: The accent highlights a heading word rather than the target meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Thus" differs from audit Current EN "Main idea: deruch means thus or thereby. It links the above cause with the effect."

OWNER VERDICT: LABOT
OWNER FINAL EN: thus, thereby
OWNER NOTE: Pedagoģiski izcelt dadurch angļu nozīmes, nevis heading “Main”.

## 09 — b1-daher — daher

Production index: 555
Card type: standardStudy
DE: daher
Article: —
Plural: —
LV source: tāpēc
Production EN: Therefore
Metadata anomaly: Production EN "Therefore" differs from audit Current EN "Between cause and effect, daher is usually translated as because."
OWNER CARD VERDICT: LABOT

### Finding 1

Severity: HIGH
Type: MEANING_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: Between cause and effect, daher is usually translated as because.
Recommended EN: Between cause and effect, daher is usually translated as therefore.
Reason: Because expresses a cause; daher expresses the result.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Therefore" differs from audit Current EN "Between cause and effect, daher is usually translated as because."

OWNER VERDICT: LABOT
OWNER FINAL EN: When linking a cause to its result, daher is usually translated as “therefore”.
OWNER NOTE: “because” izsaka cēloni; daher šeit izsaka rezultātu.

### Finding 2

Severity: HIGH
Type: MEANING_ERROR
Field: study.important.text
Current EN: daher as 'from there' is rarer; at the front it is better to learn "because".
Recommended EN: daher as 'from there' is rarer; at first, it is better to learn "therefore".
Reason: The recommended core translation is incorrectly given as “because.”
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Therefore" differs from audit Current EN "Between cause and effect, daher is usually translated as because."

OWNER VERDICT: LABOT
OWNER FINAL EN: daher can also mean “from there”, but as a core meaning it is better to learn “therefore”.
OWNER NOTE: Saglabāt sekundāro “from there” nozīmi, bet neiemācīt kļūdaino “because”.

### Finding 3

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[0].lv
Current EN: It's, It's
Recommended EN: It's
Reason: It's is highlighted twice, but appears only once in the English sentence.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Therefore" differs from audit Current EN "Between cause and effect, daher is usually translated as because."

OWNER VERDICT: LABOT
OWNER FINAL EN: It's
OWNER NOTE: Tekstā ir tikai viens atbilstošs occurrence.

### Finding 4

Severity: PEDAGOGICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[2].lv
Current EN: The
Recommended EN: there
Reason: The highlighted target is unrelated to daher’s “from there” meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Therefore" differs from audit Current EN "Between cause and effect, daher is usually translated as because."

OWNER VERDICT: LABOT
OWNER FINAL EN: there
OWNER NOTE: Šajā piemērā jāmāca daher telpiskā nozīme “from there / there”, nevis subject/article elements.

## 10 — b1-dahin — dahin

Production index: 556
Card type: standardStudy
DE: dahin
Article: —
Plural: —
LV source: turp
Production EN: Cont
Metadata anomaly: —
OWNER CARD VERDICT: LABOT
ASSOCIATED REPAIR — field lv: Cont → There / to there
Associated repair note: Front translation un study.translation jāsakrīt.

### Finding 1

Severity: HIGH
Type: WRONG_LANGUAGE_OR_TYPO
Field: study.translation
Current EN: Cont
Recommended EN: There / to there
Reason: Cont is not an English translation of dahin.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: There / to there
OWNER NOTE: “Cont” nav angļu tulkojums. Front translation un study.translation jāsakrīt.

### Finding 2

Severity: HIGH
Type: MEANING_ERROR
Field: study.explanation
Current EN: Main idea: dahin means there, there. In a figurative sense, es ist dahin means that something is lost or lost.
Recommended EN: Main idea: dahin means there or to there. In a figurative sense, es ist dahin means that something is gone or lost.
Reason: The translation repeats words and gives the wrong figurative wording.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: Main idea: dahin means “there” or “to there”. In a figurative sense, es ist dahin means that something is gone or lost.
OWNER NOTE: Noņemt dubultojumu un korekti izskaidrot figuratīvo nozīmi.

### Finding 3

Severity: HIGH
Type: MEANING_ERROR
Field: study.examples[2].lv
Current EN: My hope is for the yard.
Recommended EN: My hope is gone.
Reason: “For the yard” is an incorrect translation of the figurative meaning.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: My hope is gone.
OWNER NOTE: Figuratīvais “dahin” nozīmē “gone/lost”.

### Finding 4

Severity: HIGH
Type: MEANING_ERROR
Field: study.comparison[0].meaning
Current EN: There / there / for the yard
Recommended EN: There / to there / gone
Reason: The figurative meaning is incorrectly translated as “for the yard.”
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: There / to there / gone
OWNER NOTE: Trīs faktiskās mācāmās nozīmes.

### Finding 5

Severity: HIGH
Type: MEANING_ERROR
Field: study.important.text
Current EN: dahin shows the direction to a place and dort shows the location. I ist dahin = it is for the yard.
Recommended EN: dahin shows the direction to a place and dort shows the location. Es ist dahin = it is gone.
Reason: I is a typo, and “for the yard” is incorrect.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: LABOT
OWNER FINAL EN: dahin indicates direction to a place, while dort indicates location. Es ist dahin = it is gone.
OWNER NOTE: Izlabot gan “I ist dahin”, gan absurdi burtisko “for the yard”.

### Finding 6

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.explanation
Current EN: Main, Main, Main
Recommended EN: Main
Reason: Main is highlighted three times, but appears once in Main idea.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL

OWNER VERDICT: LABOT
OWNER FINAL EN: there, to there, gone
OWNER NOTE: Šeit ne tikai jāizņem duplicate “Main”; pedagoģiski pareizāk ir izcelt trīs tatsächlich mācāmās dahin nozīmes.

## 11 — b1-daran — daran

Production index: 561
Card type: standardStudy
DE: daran
Article: —
Plural: —
LV source: par to
Production EN: About it
Metadata anomaly: Production EN "About it" differs from audit Current EN "there is no word for it. It refers to a thing, thought or action mentioned above."

### Finding 1

Severity: HIGH
Type: MEANING_ERROR
Field: study.important.text
Current EN: there is no word for it. It refers to a thing, thought or action mentioned above.
Recommended EN: daran is not a place word. It refers to a thing, thought or action mentioned above.
Reason: The sentence lacks the subject and incorrectly describes daran.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "About it" differs from audit Current EN "there is no word for it. It refers to a thing, thought or action mentioned above."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.comparison[1].meaning
Current EN: 
Recommended EN: Highlight “To” or “on” in the target text.
Reason: The target meaning has no highlight despite having target text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "About it" differs from audit Current EN "there is no word for it. It refers to a thing, thought or action mentioned above."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.important
Current EN: there, there, there
Recommended EN: Highlight the relevant target wording, such as “not a place word.”
Reason: The target repeats “there,” which does not occur in the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "About it" differs from audit Current EN "there is no word for it. It refers to a thing, thought or action mentioned above."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 12 — b1-darstellen — darstellen

Production index: 563
Card type: standardStudy
DE: darstellen
Article: —
Plural: —
LV source: attēlot
Production EN: To represent
Metadata anomaly: Production EN "To represent" differs from audit Current EN "She plays doctors."

### Finding 1

Severity: HIGH
Type: GRAMMAR_ERROR
Field: study.examples[2].lv
Current EN: She plays doctors.
Recommended EN: She plays a doctor.
Reason: The singular profession requires “a doctor,” not plural “doctors.”
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To represent" differs from audit Current EN "She plays doctors."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: WRONG_LANGUAGE_OR_UNTRANSLATED_TEXT
Field: study.tip.leftBlocks[0].text
Current EN: Data, graphs, situations and roles werden dargestellt; sev vorstellen = introduce yourself.
Recommended EN: Data, graphs, situations and roles are dargestellt; sich vorstellen = introduce yourself.
Reason: The English field contains Latvian and untranslated German wording.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To represent" differs from audit Current EN "She plays doctors."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: PEDAGOGICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.examples[2].lv
Current EN: She
Recommended EN: plays
Reason: The highlight marks the subject instead of the target meaning of darstellen.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "To represent" differs from audit Current EN "She plays doctors."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 13 — b1-decken — decken

Production index: 570
Card type: standardStudy
DE: decken
Article: —
Plural: —
LV source: segt
Production EN: To cover
Metadata anomaly: Production EN "To cover" differs from audit Current EN "Skaties uz objektu: Tisch decken, Kosten decken, Straße mit Schnee decken."

### Finding 1

Severity: HIGH
Type: WRONG_LANGUAGE_OR_UNTRANSLATED_TEXT
Field: study.tip.leftBlocks[0].text
Current EN: Skaties uz objektu: Tisch decken, Kosten decken, Straße mit Schnee decken.
Recommended EN: Look at the object: Tisch decken, Kosten decken, Straße mit Schnee decken.
Reason: The English field begins with an untranslated Latvian phrase.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To cover" differs from audit Current EN "Skaties uz objektu: Tisch decken, Kosten decken, Straße mit Schnee decken."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: CLARITY_ERROR
Field: study.important.text
Current EN: Tisch decken is not "to set the table" literally, but "to set the table"; Kosten decken = cover costs.
Recommended EN: Tisch decken does not literally mean “to cover the table”; it means “to set the table.” Kosten decken = to cover costs.
Reason: The contrast repeats the same translation and gives the wrong literal gloss.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To cover" differs from audit Current EN "Skaties uz objektu: Tisch decken, Kosten decken, Straße mit Schnee decken."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 14 — b1-dienen — dienen

Production index: 588
Card type: standardStudy
DE: dienen
Article: —
Plural: —
LV source: kalpot
Production EN: To serve
Metadata anomaly: Production EN "To serve" differs from audit Current EN "Main Idea: To serve means to serve or serve a purpose. By als it means “to serve as”."

### Finding 1

Severity: MEDIUM
Type: CLARITY_ERROR
Field: study.explanation
Current EN: Main Idea: To serve means to serve or serve a purpose. By als it means “to serve as”.
Recommended EN: Main idea: dienen means to serve or to be useful for a purpose. With als, it means “to serve as.”
Reason: The explanation is circular and omits the useful-for-a-purpose meaning clearly.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To serve" differs from audit Current EN "Main Idea: To serve means to serve or serve a purpose. By als it means “to serve as”."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: TYPO_OR_MEANING_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: dienen als = to serve as; dien zu = to be useful to someone.
Recommended EN: dienen als = to serve as; dienen zu = to serve a purpose.
Reason: dien is a typo, and dienen zu is not specifically “useful to someone.”
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To serve" differs from audit Current EN "Main Idea: To serve means to serve or serve a purpose. By als it means “to serve as”."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: GRAMMAR_ERROR
Field: study.important.text
Current EN: dien is not usual to "help a man"; to help is usually helfen.
Recommended EN: dienen is not usually used to mean “to help someone”; “to help” is usually helfen.
Reason: The verb is misspelled, and “help a man” is unnatural and misleading.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To serve" differs from audit Current EN "Main Idea: To serve means to serve or serve a purpose. By als it means “to serve as”."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.explanation
Current EN: Main
Recommended EN: Highlight “serve” or “useful” in the target text.
Reason: Main is not the target vocabulary meaning of dienen.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To serve" differs from audit Current EN "Main Idea: To serve means to serve or serve a purpose. By als it means “to serve as”."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 15 — b1-durchführen — durchführen

Production index: 628
Card type: standardStudy
DE: durchführen
Article: —
Plural: —
LV source: veikt
Production EN: Perform
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

### Finding 1

Severity: HIGH
Type: WRONG_WORD_OR_TYPO
Field: study.explanation
Current EN: Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events.
Recommended EN: Main idea: durchführen means to carry out or implement a planned action. It is used with inspections, repairs, experiments and events.
Reason: The German headword is incorrectly written as “gebieben”, and the definition repeats itself.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: UNTRANSLATED_TEXT
Field: study.tip.leftBlocks[0].text
Current EN: Kontrolle, Reparatur, Experiment → durchführen.
Recommended EN: Inspection, repair, experiment → durchführen.
Reason: Most of the explanatory text remains untranslated German.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: WRONG_WORD_OR_TYPO
Field: study.important.text
Current EN: gerünfung is not literally “to lead through”; In B1 texts it usually means to perform.
Recommended EN: durchführen does not literally mean “to lead through”; in B1 texts it usually means “to carry out”.
Reason: The headword is corrupted, and the sentence has incorrect capitalization and wording.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.examples[0].lv.purple[1]
Current EN: are
Recommended EN: Remove this duplicate accent.
Reason: Only one matching occurrence of “are” appears in the English sentence.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text.purple[0]
Current EN: durchführen
Recommended EN: Remove or replace with the matching English term “carry out”.
Reason: The accent contains a German token absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 6

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.important.purple[0]
Current EN: gerünfung
Recommended EN: Remove or replace with the matching English term “carry out”.
Reason: The accent contains a corrupted non-English token absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Perform" differs from audit Current EN "Main idea: gebieben means to carry out or carry out a planned action. It is used with inspections, repairs, experiments and events."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 16 — b1-einbrechen — einbrechen

Production index: 664
Card type: standardStudy
DE: einbrechen
Article: —
Plural: —
LV source: ielauzties
Production EN: Break into
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

### Finding 1

Severity: HIGH
Type: MEANING_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: Crime + house → einbrechen = break into; Dach → invade; Nacht → enter.
Recommended EN: Crime + house → einbrechen = break into; roof → cave in; night → fall.
Reason: German words remain untranslated, and the meanings for roof and night are wrong.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MEANING_ERROR
Field: study.important.text
Current EN: einbrechen is usually not 'break into an object' but 'break into a place'. With parts of buildings, it means invade/collapse.
Recommended EN: einbrechen usually does not mean “break into an object” but “break into a place”. With parts of buildings, it means “cave in” or “collapse”.
Reason: “Invade” is the wrong meaning for parts of buildings.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: LOW
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.explanation.purple[1]
Current EN: Main
Recommended EN: Remove this duplicate accent.
Reason: The second “Main” has no separate matching occurrence in the English explanation.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.explanation.purple[2]
Current EN: Main
Recommended EN: Remove this duplicate accent.
Reason: The third “Main” has no separate matching occurrence in the English explanation.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text.purple[0]
Current EN: ielauzties
Recommended EN: Remove or replace with the matching English term “break into”.
Reason: The accent contains a Latvian token absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 6

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text.purple[1]
Current EN: iebrukt
Recommended EN: Remove or replace with the matching English term “cave in”.
Reason: The accent contains a Latvian token absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 7

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text.purple[2]
Current EN: to join
Recommended EN: Remove this accent.
Reason: “To join” does not occur in the English tip and is not the intended meaning.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Break into" differs from audit Current EN "Crime + house → einbrechen = break into; Dach → invade; Nacht → enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 17 — b1-eindeutig — eindeutig

Production index: 665
Card type: standardStudy
DE: eindeutig
Article: —
Plural: —
LV source: nepārprotams
Production EN: Unmistakable
Metadata anomaly: Production EN "Unmistakable" differs from audit Current EN "Main idea: einveitt means clear and unambiguous, when there is no doubt or two interpretations. This is not the same as einfach = simple."

### Finding 1

Severity: HIGH
Type: WRONG_WORD_OR_TYPO
Field: study.explanation
Current EN: Main idea: einveitt means clear and unambiguous, when there is no doubt or two interpretations. This is not the same as einfach = simple.
Recommended EN: Main idea: eindeutig means clear and unambiguous, when there is no doubt or two possible interpretations. This is not the same as einfach = simple.
Reason: The German headword is misspelled, and “or two interpretations” is incomplete.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Unmistakable" differs from audit Current EN "Main idea: einveitt means clear and unambiguous, when there is no doubt or two interpretations. This is not the same as einfach = simple."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: WRONG_WORD_OR_TYPO
Field: study.tip.leftBlocks[0].text
Current EN: If there is no doubt about the meaning or the result, use einteigt.
Recommended EN: If there is no doubt about the meaning or the result, use eindeutig.
Reason: The German headword is misspelled in the English field.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Unmistakable" differs from audit Current EN "Main idea: einveitt means clear and unambiguous, when there is no doubt or two interpretations. This is not the same as einfach = simple."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: MEANING_ERROR
Field: study.important.text
Current EN: einfach is not einfach: einfach = unequivocal, einfach = simple.
Recommended EN: eindeutig is not einfach: eindeutig = unambiguous, einfach = simple.
Reason: The contrast is corrupted and gives the wrong meaning for eindeutig.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Unmistakable" differs from audit Current EN "Main idea: einveitt means clear and unambiguous, when there is no doubt or two interpretations. This is not the same as einfach = simple."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 18 — b1-einerlei — einerlei

Production index: 667
Card type: standardStudy
DE: einerlei
Article: —
Plural: —
LV source: vienalga
Production EN: Anyway
Metadata anomaly: Production EN "Anyway" differs from audit Current EN "Main idea: einerle means no matter or it doesn't matter. It sounds more formal or old-fashioned than everyday egal."

### Finding 1

Severity: HIGH
Type: WRONG_WORD_OR_TYPO
Field: study.explanation
Current EN: Main idea: einerle means no matter or it doesn't matter. It sounds more formal or old-fashioned than everyday egal.
Recommended EN: Main idea: einerlei means “no matter” or “it doesn’t matter”. It sounds more formal or old-fashioned than everyday egal.
Reason: The German headword is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Anyway" differs from audit Current EN "Main idea: einerle means no matter or it doesn't matter. It sounds more formal or old-fashioned than everyday egal."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: GRAMMAR_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: egal is used more often on a daily basis; einerle recognizes as a more formal "never mind".
Recommended EN: egal is used more often in everyday speech; recognize einerlei as a more formal “no matter”.
Reason: “Einerle recognizes as” is ungrammatical, and the headword is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Anyway" differs from audit Current EN "Main idea: einerle means no matter or it doesn't matter. It sounds more formal or old-fashioned than everyday egal."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: GRAMMAR_ERROR
Field: study.important.text
Current EN: einerle is not a common colloquial word; speaking, it is safer to use egal.
Recommended EN: einerlei is not a common colloquial word; in speech, it is safer to use egal.
Reason: The headword is misspelled, and “speaking” is ungrammatical here.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Anyway" differs from audit Current EN "Main idea: einerle means no matter or it doesn't matter. It sounds more formal or old-fashioned than everyday egal."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: MEDIUM
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text.purple[1]
Current EN: vienalga
Recommended EN: Remove or replace with the matching English term “no matter”.
Reason: The accent contains a Latvian token absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Anyway" differs from audit Current EN "Main idea: einerle means no matter or it doesn't matter. It sounds more formal or old-fashioned than everyday egal."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 19 — b1-einfallen — einfallen

Production index: 670
Card type: standardStudy
DE: einfallen
Article: —
Plural: —
LV source: ienākt prātā
Production EN: Come to mind
Metadata anomaly: Production EN "Come to mind" differs from audit Current EN "Nesaki “ich falle eine Idee ein”. Pareizi: Mir fällt eine Idee ein."

### Finding 1

Severity: HIGH
Type: LATVIAN_IN_ENGLISH
Field: study.important.text
Current EN: Nesaki “ich falle eine Idee ein”. Pareizi: Mir fällt eine Idee ein.
Recommended EN: Do not say “ich falle eine Idee ein”. The correct form is: Mir fällt eine Idee ein.
Reason: The English field contains Latvian text.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Come to mind" differs from audit Current EN "Nesaki “ich falle eine Idee ein”. Pareizi: Mir fällt eine Idee ein."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: TECHNICAL
Type: SECTION_ACCENT_BROKEN
Field: study.tip.leftBlocks[0].text
Current EN: Remember the form: Mir fällt etwas ein = something occurs to me.
Recommended EN: Highlight “occurs to me” or change the accent target from “comes to mind” to “occurs to me”.
Reason: The accent target “comes to mind” is missing from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Come to mind" differs from audit Current EN "Nesaki “ich falle eine Idee ein”. Pareizi: Mir fällt eine Idee ein."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 20 — b1-einfluss — Einfluss

Production index: 672
Card type: standardStudy
DE: Einfluss
Article: der
Plural: die Einflüsse
LV source: ietekme
Production EN: Influence
Metadata anomaly: Production EN "Influence" differs from audit Current EN "Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + ko?."

### Finding 1

Severity: HIGH
Type: LATVIAN_IN_ENGLISH
Field: study.explanation
Current EN: Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + ko?.
Recommended EN: Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + what?
Reason: The construction contains the Latvian interrogative “ko?”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Influence" differs from audit Current EN "Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + ko?."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MEANING_ERROR
Field: study.comparison[2].meaning
Current EN: Exposure / effect
Recommended EN: Effect / impact
Reason: Wirkung means effect or impact here, not exposure.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Influence" differs from audit Current EN "Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + ko?."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: PEDAGOGICAL
Type: SECTION_ACCENT_BROKEN
Field: study.sectionAccents.comparison[2].meaning
Current EN: Exposure / effect
Recommended EN: Highlight “Effect” or “impact” instead of “Exposure”.
Reason: The highlighted word gives a misleading meaning for Wirkung.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Influence" differs from audit Current EN "Main idea: der Einfluss means influence on a person, decision or situation. A very common construction is Einfluss auf + ko?."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 21 — b1-einfügen — einfügen

Production index: 673
Card type: standardStudy
DE: einfügen
Article: —
Plural: —
LV source: ievietot
Production EN: To insert
Metadata anomaly: Production EN "To insert" differs from audit Current EN "einfügen is often a technical/documentary activity; "to add" is more often to add."

### Finding 1

Severity: HIGH
Type: TRANSLATION_ERROR
Field: study.important.text
Current EN: einfügen is often a technical/documentary activity; "to add" is more often to add.
Recommended EN: einfügen is often a technical or document-related activity; “to add” is more often hinzufügen.
Reason: The second clause repeats English and fails to give the German contrast.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To insert" differs from audit Current EN "einfügen is often a technical/documentary activity; "to add" is more often to add."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: SECTION_ACCENT_BROKEN
Field: study.tip.leftBlocks[0].text
Current EN: In a text or document einfügen = insert; sich einfügen = to fit in.
Recommended EN: In a text or document, einfügen means “to insert”; sich einfügen means “to fit in”.
Reason: The accent includes the Latvian word “ievietot” instead of an English target.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To insert" differs from audit Current EN "einfügen is often a technical/documentary activity; "to add" is more often to add."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 22 — b1-einführen — einführen

Production index: 674
Card type: standardStudy
DE: einführen
Article: —
Plural: —
LV source: ieviest
Production EN: To introduce
Metadata anomaly: Production EN "To introduce" differs from audit Current EN "Rules, system or method führt man ein; goods can also be einführen = imported."

### Finding 1

Severity: HIGH
Type: TRANSLATION_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: Rules, system or method führt man ein; goods can also be einführen = imported.
Recommended EN: Rules, systems or methods are introduced; goods can also be imported (einführen).
Reason: The sentence mixes German with ungrammatical English.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To introduce" differs from audit Current EN "Rules, system or method führt man ein; goods can also be einführen = imported."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: PEDAGOGICAL_CLARITY
Field: study.important.text
Current EN: einführen is not the same as vorstellen: vorstellen is to present or introduce, not to introduce.
Recommended EN: einführen is not the same as vorstellen: vorstellen means to present or introduce someone, not to implement something.
Reason: The contrast ends with the same meaning on both sides and is unclear.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To introduce" differs from audit Current EN "Rules, system or method führt man ein; goods can also be einführen = imported."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 23 — b1-einführung — Einführung

Production index: 675
Card type: standardStudy
DE: Einführung
Article: die
Plural: die Einführungen
LV source: ievads
Production EN: Introduction
Metadata anomaly: Production EN "Introduction" differs from audit Current EN "Main idea: die Einführung means introduction or introduction. In a text or course, it is an introduction • In a new system, rules or product - implementation."

### Finding 1

Severity: HIGH
Type: TRANSLATION_ERROR
Field: study.explanation
Current EN: Main idea: die Einführung means introduction or introduction. In a text or course, it is an introduction • In a new system, rules or product - implementation.
Recommended EN: Main idea: die Einführung means introduction or implementation. In a text or course, it is an introduction; for a new system, rules or product, it means implementation.
Reason: The first definition repeats “introduction” and omits the intended contrast.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Introduction" differs from audit Current EN "Main idea: die Einführung means introduction or introduction. In a text or course, it is an introduction • In a new system, rules or product - implementation."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MEANING_ERROR
Field: study.important.text
Current EN: Do not confuse Einführung with Einleitung: Einleitung is usually an introduction to a text, Einführung can also be an introduction to practice.
Recommended EN: Do not confuse Einführung with Einleitung: Einleitung is usually an introduction to a text, while Einführung can also mean implementation in practice.
Reason: “Introduction to practice” is misleading for implementation.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Introduction" differs from audit Current EN "Main idea: die Einführung means introduction or introduction. In a text or course, it is an introduction • In a new system, rules or product - implementation."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 24 — b1-sich-eingewöhnen — sich eingewöhnen

Production index: 676
Card type: standardStudy
DE: sich eingewöhnen
Article: —
Plural: —
LV source: pierast
Production EN: Get used to
Metadata anomaly: Production EN "Get used to" differs from audit Current EN "After moving, we got used to it well."

### Finding 1

Severity: MEDIUM
Type: UNNATURAL_ENGLISH
Field: study.examples[2].lv
Current EN: After moving, we got used to it well.
Recommended EN: After moving, we adapted well.
Reason: “Got used to it well” is unnatural and has an unclear object.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Get used to" differs from audit Current EN "After moving, we got used to it well."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: OTHER_LANGUAGE_IN_ENGLISH
Field: study.tip.leftBlocks[0].text
Current EN: In a new job, school or place, a person muss sich eingewöhnen.
Recommended EN: In a new job, school or place, a person has to get used to the new situation.
Reason: The English field contains the German phrase “muss sich eingewöhnen”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Get used to" differs from audit Current EN "After moving, we got used to it well."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 25 — b1-einhalten — einhalten

Production index: 677
Card type: standardStudy
DE: einhalten
Article: —
Plural: —
LV source: ievērot
Production EN: To observe
Metadata anomaly: Production EN "To observe" differs from audit Current EN "Follow / execute exactly"

### Finding 1

Severity: MEDIUM
Type: PEDAGOGICAL_SUITABILITY
Field: study.comparison[0].meaning
Current EN: Follow / execute exactly
Recommended EN: Follow / comply with precisely
Reason: “Execute” is unsuitable for rules, deadlines, promises, and distances.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To observe" differs from audit Current EN "Follow / execute exactly"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: OTHER_LANGUAGE_IN_ENGLISH
Field: study.tip.leftBlocks[0].text
Current EN: Regeln, Termin, Frist, Abstand einhalten = follow exactly.
Recommended EN: Keeping rules, appointments, deadlines, and distances means following them precisely.
Reason: The explanation is largely left in German rather than translated.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To observe" differs from audit Current EN "Follow / execute exactly"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 26 — b1-einheimisch — einheimisch

Production index: 678
Card type: standardStudy
DE: einheimisch
Article: —
Plural: —
LV source: vietējs
Production EN: Local
Metadata anomaly: Production EN "Local" differs from audit Current EN "People, plants, animals or products from this place → einheimisch."

### Finding 1

Severity: HIGH
Type: SECTION_ACCENT_BROKEN
Field: study.tip.leftBlocks[0].text
Current EN: People, plants, animals or products from this place → einheimisch.
Recommended EN: People, plants, animals or products from this place are described as einheimisch.
Reason: The accent targets include Latvian words that are absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Local" differs from audit Current EN "People, plants, animals or products from this place → einheimisch."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 27 — b1-einheit — Einheit

Production index: 679
Card type: standardStudy
DE: Einheit
Article: die
Plural: die Einheiten
LV source: vienība
Production EN: Unit
Metadata anomaly: Production EN "Unit" differs from audit Current EN "Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context."

### Finding 1

Severity: MEDIUM
Type: MEANING_ERROR
Field: study.explanation
Current EN: Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context.
Recommended EN: Main idea: die Einheit means a unit. It can be a unit of study, a technical unit or a unit of measurement depending on the context.
Reason: The explanation gives “unity” while all listed contexts mean “unit”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Unit" differs from audit Current EN "Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: MEANING_ERROR
Field: study.comparison[2].meaning
Current EN: Department
Recommended EN: Chapter
Reason: Kapitel means “chapter”, not “department”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Unit" differs from audit Current EN "Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: PEDAGOGICAL
Type: SECTION_ACCENT_BROKEN
Field: study.sectionAccents.comparison[2].meaning
Current EN: Department
Recommended EN: Highlight “Chapter” instead of “Department”.
Reason: The highlighted meaning is incorrect for Kapitel.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Unit" differs from audit Current EN "Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: TECHNICAL
Type: SECTION_ACCENT_BROKEN
Field: study.tip.leftBlocks[0].text
Current EN: The context tells: course → study unit; measurement → unit of measure; technique → unit/module.
Recommended EN: Use an English accent target such as “module” instead of the Latvian target “modulis”.
Reason: The “modulis” accent target is missing from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Unit" differs from audit Current EN "Main idea: die Einheit means unity. It can be a unit of study, a technical unit or a unit of measurement depending on the context."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 28 — b1-einheitlich — einheitlich

Production index: 681
Card type: standardStudy
DE: einheitlich
Article: —
Plural: —
LV source: vienots
Production EN: United
Metadata anomaly: —

### Finding 1

Severity: HIGH
Type: MEANING
Field: study.translation
Current EN: United
Recommended EN: Uniform
Reason: “United” does not convey the usual meaning of einheitlich.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MEANING
Field: study.important.text
Current EN: einheitlich = one/equal
Recommended EN: einheitlich = uniform/equal, einzig = the only one.
Reason: “One” is not an appropriate meaning of einheitlich here.
Luna verdict: CONFIRMED
sectionAccents: —

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 29 — b1-einholen — einholen

Production index: 682
Card type: standardStudy
DE: einholen
Article: —
Plural: —
LV source: ievākt
Production EN: Collect
Metadata anomaly: Production EN "Collect" differs from audit Current EN "The runner catches up with the other."

### Finding 1

Severity: MEDIUM
Type: CLARITY
Field: study.examples[2].lv
Current EN: The runner catches up with the other.
Recommended EN: The runner catches up with the other runner.
Reason: “The other” is unclear without a stated noun.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Collect" differs from audit Current EN "The runner catches up with the other."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: MEANING
Field: study.comparison[0].meaning
Current EN: Collect / receive / achieve
Recommended EN: Collect / receive / catch up with
Reason: “Achieve” is not the relevant meaning of einholen.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Collect" differs from audit Current EN "The runner catches up with the other."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: LEARNER_PERSPECTIVE_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: Information, advice or permission holt man ein; the runner can be einholen = to catch up.
Recommended EN: You collect information, advice or permission with einholen; a runner can einholen someone = catch up with them.
Reason: The tip contains the Latvian word “padomu” in its accent data.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Collect" differs from audit Current EN "The runner catches up with the other."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: HIGH
Type: SPELLING
Field: study.important.text
Current EN: Gengemung
Recommended EN: Genehmigung
Reason: The German noun is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Collect" differs from audit Current EN "The runner catches up with the other."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: padomu
Recommended EN: Replace it with “advice”.
Reason: The accent contains a Latvian word absent from the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Collect" differs from audit Current EN "The runner catches up with the other."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 30 — b1-einsatz — Einsatz

Production index: 701
Card type: standardStudy
DE: Einsatz
Article: der
Plural: die Einsätze
LV source: izmantošana
Production EN: Use
Metadata anomaly: Production EN "Use" differs from audit Current EN "Firefighters have been on call for two hours."

### Finding 1

Severity: HIGH
Type: MEANING
Field: study.examples[1].lv
Current EN: Firefighters have been on call for two hours.
Recommended EN: Firefighters have been deployed for two hours.
Reason: im Einsatz means deployed or on duty, not necessarily on call.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Use" differs from audit Current EN "Firefighters have been on call for two hours."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: MEANING
Field: study.comparison[0].meaning
Current EN: Usage / engagement / rate
Recommended EN: Use / involvement / stake
Reason: A bet is a stake, not a rate.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Use" differs from audit Current EN "Firefighters have been on call for two hours."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: MEDIUM
Type: PUNCTUATION
Field: study.explanation
Current EN: zum Einsatz kommen • In games Einsatz can also be a bet.
Recommended EN: zum Einsatz kommen. In games, Einsatz can also mean a stake.
Reason: The bullet separator creates a faulty sentence break.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Use" differs from audit Current EN "Firefighters have been on call for two hours."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: MEDIUM
Type: MEANING
Field: study.tip.leftBlocks[0].text
Current EN: Einsatz always asks: Who is involved or used, and in what situation?
Recommended EN: Einsatz always asks: What is being used or involved, and in what situation?
Reason: “Who” excludes objects and does not match the stated meaning.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Use" differs from audit Current EN "Firefighters have been on call for two hours."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: izmantots
Recommended EN: Replace it with “used”.
Reason: The accent contains a Latvian word absent from the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Use" differs from audit Current EN "Firefighters have been on call for two hours."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 31 — b1-einsetzen — einsetzen

Production index: 708
Card type: standardStudy
DE: einsetzen
Article: —
Plural: —
LV source: izmantot
Production EN: To use
Metadata anomaly: Production EN "To use" differs from audit Current EN "the technique is used"

### Finding 1

Severity: MEDIUM
Type: MEANING
Field: study.explanation
Current EN: the technique is used
Recommended EN: the technology or equipment is used
Reason: “Technique” is the wrong English noun for this meaning of Technik.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To use" differs from audit Current EN "the technique is used"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: LEARNER_PERSPECTIVE_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: Skaties uz objektu: Technik einsetzen, Spieler einsetzen, Regen setzt ein.
Recommended EN: Look at the object: use technology, assign a player, or say that rain begins.
Reason: The tip is largely untranslated and begins with Latvian.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To use" differs from audit Current EN "the technique is used"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: MEDIUM
Type: SPELLING
Field: study.important.text
Current EN: one-sise-fits-all
Recommended EN: one-size-fits-all
Reason: The compound adjective contains a spelling error.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To use" differs from audit Current EN "the technique is used"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: technik einsetzen
Recommended EN: Replace it with an English phrase such as “use technology”.
Reason: The accent highlights German text absent from the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To use" differs from audit Current EN "the technique is used"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 32 — b1-eintreten — eintreten

Production index: 718
Card type: standardStudy
DE: eintreten
Article: —
Plural: —
LV source: ieiet
Production EN: Enter
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

### Finding 1

Severity: HIGH
Type: MEANING
Field: study.explanation
Current EN: eintreten means to enter or enter.
Recommended EN: eintreten means to enter, join, or occur.
Reason: The duplicate “enter” omits the meanings join and occur.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: MEANING
Field: study.comparison[0].meaning
Current EN: Enter / enter
Recommended EN: Enter / join
Reason: The two listed meanings should not be identical.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: PEDAGOGICAL_UNSUITABILITY
Field: study.tip.leftBlocks[0].text
Current EN: In the room tritt man ein; in organisation tritt man ein or bei; consequences treten ein.
Recommended EN: In a room, use eintreten; in an organisation, use eintreten or beitreten; consequences occur.
Reason: The tip is ungrammatical and leaves key German phrases unexplained.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: MEDIUM
Type: COLLOCATION
Field: study.important.text
Current EN: the effect takes place
Recommended EN: the effect occurs
Reason: Effects occur; “take place” is unnatural for this subject.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.explanation
Current EN: Main
Recommended EN: Remove the duplicate “Main” accents or align them with the single occurrence.
Reason: The accent data contains three “Main” highlights, but the text has one.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 6

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: sekas
Recommended EN: Replace it with “consequences”.
Reason: The accent contains a Latvian word absent from the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Enter" differs from audit Current EN "eintreten means to enter or enter."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 33 — b1-empfangen — empfangen

Production index: 740
Card type: standardStudy
DE: empfangen
Article: —
Plural: —
LV source: saņemt
Production EN: To receive
Metadata anomaly: Production EN "To receive" differs from audit Current EN "Receive everyday"

### Finding 1

Severity: MEDIUM
Type: GRAMMAR
Field: study.comparison[1].meaning
Current EN: Receive everyday
Recommended EN: Receive in everyday situations
Reason: The phrase is grammatically incomplete and unclear.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To receive" differs from audit Current EN "Receive everyday"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: GRAMMAR
Field: study.tip.leftBlocks[0].text
Current EN: empfangen of a message or signal; empfangen = to receive people.
Recommended EN: Use empfangen for a message or signal; with people, it means to receive or welcome them.
Reason: “empfangen of” is ungrammatical and the explanation is unclear.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To receive" differs from audit Current EN "Receive everyday"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: CLARITY
Field: study.important.text
Current EN: with guests, it means receiving, not just receiving.
Recommended EN: with guests, it means welcoming or receiving them, not simply receiving something.
Reason: The repeated “receiving” makes the contrast meaningless.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To receive" differs from audit Current EN "Receive everyday"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: to admit
Recommended EN: Replace it with “to welcome” or remove the accent.
Reason: The accent does not match the English tip and changes the meaning.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "To receive" differs from audit Current EN "Receive everyday"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 34 — b1-entfernen — entfernen

Production index: 750
Card type: standardStudy
DE: entfernen
Article: —
Plural: —
LV source: noņemt
Production EN: Remove
Metadata anomaly: Production EN "Remove" differs from audit Current EN "remove, delete, or remove something from a place"

### Finding 1

Severity: MEDIUM
Type: CLARITY
Field: study.explanation
Current EN: remove, delete, or remove something from a place
Recommended EN: remove, delete, or take something away from a place
Reason: The repeated “remove” is redundant and omits the sense take away.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Remove" differs from audit Current EN "remove, delete, or remove something from a place"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: MEANING
Field: study.comparison[1].meaning
Current EN: Take off
Recommended EN: Take away
Reason: wegnehmen means take away, not normally take off.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Remove" differs from audit Current EN "remove, delete, or remove something from a place"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: MEDIUM
Type: PEDAGOGICAL_UNSUITABILITY
Field: study.tip.leftBlocks[0].text
Current EN: Object entfernen = remove; sich entfernen = one moves away.
Recommended EN: Remove an object; sich entfernen means to move away.
Reason: The tip is an awkward German-English mixture rather than clear learner English.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Remove" differs from audit Current EN "remove, delete, or remove something from a place"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 35 — b1-enthalten — enthalten

Production index: 754
Card type: standardStudy
DE: enthalten
Article: —
Plural: —
LV source: saturēt
Production EN: To contain
Metadata anomaly: Production EN "To contain" differs from audit Current EN "Main Idea: enthalten means to contain or contain something as part of a whole."

### Finding 1

Severity: MEDIUM
Type: WORDING_ERROR
Field: study.explanation
Current EN: Main Idea: enthalten means to contain or contain something as part of a whole.
Recommended EN: Main idea: enthalten means to contain or include something as part of a whole.
Reason: “contain or contain” is repetitive and omits the useful meaning “include”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To contain" differs from audit Current EN "Main Idea: enthalten means to contain or contain something as part of a whole."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: GRAMMAR_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: When the idea is "it is inside or included", German often says der enthalten.
Recommended EN: When the idea is “it is inside or included”, German often uses enthalten.
Reason: “der enthalten” is an incorrect German form in the English explanation.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To contain" differs from audit Current EN "Main Idea: enthalten means to contain or contain something as part of a whole."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: MEDIUM
Type: WORDING_ERROR
Field: study.important.text
Current EN: enthalten not halten. halten = hold; enthalten = to contain or contain.
Recommended EN: enthalten is not halten. halten = hold; enthalten = to contain or include.
Reason: The contrast is grammatically incomplete and repeats “contain”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To contain" differs from audit Current EN "Main Idea: enthalten means to contain or contain something as part of a whole."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 36 — b1-entsprechen — entsprechen

Production index: 761
Card type: standardStudy
DE: entsprechen
Article: —
Plural: —
LV source: atbilst
Production EN: Corresponds to
Metadata anomaly: Production EN "Corresponds to" differs from audit Current EN "Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen."

### Finding 1

Severity: HIGH
Type: SPELLING_ERROR
Field: study.explanation
Current EN: Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen.
Recommended EN: Main idea: entsprechen means to meet requirements, rules, a plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwartungen.
Reason: The German verb is misspelled, and “Erwantungen” is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Corresponds to" differs from audit Current EN "Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MEANING_ERROR
Field: study.examples[2].lv
Current EN: The result is not true.
Recommended EN: The result does not correspond to the truth.
Reason: The translation loses the meaning of entsprechen: “correspond to”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Corresponds to" differs from audit Current EN "Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: WRONG_TARGET_WORD
Field: study.tip.leftBlocks[0].text
Current EN: matchen always asks "matches what?" - in German the answer is in the dative.
Recommended EN: entsprechen always asks “corresponds to what?” — in German, the answer is in the dative.
Reason: “matchen” is the wrong German learner target.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Corresponds to" differs from audit Current EN "Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: HIGH
Type: WRONG_TARGET_WORD
Field: study.important.text
Current EN: Do not confuse antvorten with antworten: antvorten = match, antworten = answer.
Recommended EN: Do not confuse entsprechen with antworten: entsprechen = correspond, antworten = answer.
Reason: Both the target verb and its meaning are incorrect.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Corresponds to" differs from audit Current EN "Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.explanation.yellow
Current EN: Main,Main,Main,Main
Recommended EN: Use only one “Main” accent, matching “Main idea”.
Reason: The accent list contains three extra “Main” highlights not present in the text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Corresponds to" differs from audit Current EN "Main idea: mechnen means to meet the requirements, rules, plan or expectations. In German it requires the dative: dem Plan, den Regeln, unseren Erwantungen."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 37 — b1-entstehen — entstehen

Production index: 762
Card type: standardStudy
DE: entstehen
Article: —
Plural: —
LV source: rasties
Production EN: Occur
Metadata anomaly: Production EN "Occur" differs from audit Current EN "Main Idea: To arise means to arise or become as a result of a process."

### Finding 1

Severity: MEDIUM
Type: WORDING_ERROR
Field: study.explanation
Current EN: Main Idea: To arise means to arise or become as a result of a process.
Recommended EN: Main idea: entstehen means to arise or come into being as a result of a process.
Reason: The sentence repeats “arise” and incorrectly replaces the German target with English.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Occur" differs from audit Current EN "Main Idea: To arise means to arise or become as a result of a process."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: WRONG_TARGET_WORD
Field: study.tip.leftBlocks[0].text
Current EN: If the main thing is the result, which is created during the process, use gegen.
Recommended EN: If the main thing is the result that develops during the process, use entstehen.
Reason: “gegen” is the wrong German word and changes the target meaning.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Occur" differs from audit Current EN "Main Idea: To arise means to arise or become as a result of a process."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: GRAMMAR_ERROR
Field: study.important.text
Current EN: to arise does not mean that someone deliberately creates something; it is more der schaffen.
Recommended EN: entstehen does not mean that someone deliberately creates something; schaffen is more suitable for that.
Reason: The final phrase is ungrammatical and contains an incorrect German form.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Occur" differs from audit Current EN "Main Idea: To arise means to arise or become as a result of a process."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.explanation.purple
Current EN: Main,Main,Main,To
Recommended EN: Keep one “Main” accent and one “To” accent, or align accents with existing text.
Reason: The accent list contains two extra “Main” highlights.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Occur" differs from audit Current EN "Main Idea: To arise means to arise or become as a result of a process."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 38 — b1-eröffnen — eröffnen

Production index: 813
Card type: standardStudy
DE: eröffnen
Article: —
Plural: —
LV source: atvērt
Production EN: To open
Metadata anomaly: Production EN "To open" differs from audit Current EN "Kontu, exhibit or sit överfünt man; open the door for me."

### Finding 1

Severity: HIGH
Type: CORRUPTED_TEXT
Field: study.tip.leftBlocks[0].text
Current EN: Kontu, exhibit or sit överfünt man; open the door for me.
Recommended EN: You use eröffnen for an account, an exhibition or a meeting; you use öffnen for a door.
Reason: This text contains Latvian, malformed German, and an unrelated English phrase.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To open" differs from audit Current EN "Kontu, exhibit or sit överfünt man; open the door for me."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: kontu,the exhibition,sit down,durvis
Recommended EN: Replace the non-English or missing tokens with highlights that occur in the corrected English text.
Reason: The accent list contains Latvian/German tokens absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To open" differs from audit Current EN "Kontu, exhibit or sit överfünt man; open the door for me."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 39 — b1-erscheinen — erscheinen

Production index: 818
Card type: standardStudy
DE: erscheinen
Article: —
Plural: —
LV source: parādīties
Production EN: Appear
Metadata anomaly: Production EN "Appear" differs from audit Current EN "Publication erscheint = comes out; man zum Termin erscheint = arrives."

### Finding 1

Severity: HIGH
Type: CORRUPTED_TEXT
Field: study.tip.leftBlocks[0].text
Current EN: Publication erscheint = comes out; man zum Termin erscheint = arrives.
Recommended EN: A publication appears or comes out; a person erscheint zum Termin = arrives at an appointment.
Reason: The German example is malformed and “man” is misleading here.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Appear" differs from audit Current EN "Publication erscheint = comes out; man zum Termin erscheint = arrives."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: comes out,ierodas
Recommended EN: Replace “ierodas” with an English token present in the corrected tip.
Reason: The accent list contains a Latvian word.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Appear" differs from audit Current EN "Publication erscheint = comes out; man zum Termin erscheint = arrives."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 40 — b1-ersetzen — ersetzen

Production index: 821
Card type: standardStudy
DE: ersetzen
Article: —
Plural: —
LV source: aizstāt
Production EN: To replace
Metadata anomaly: Production EN "To replace" differs from audit Current EN "Schaden ersensen means to compensate for damages."

### Finding 1

Severity: HIGH
Type: SPELLING_ERROR
Field: study.explanation
Current EN: Schaden ersensen means to compensate for damages.
Recommended EN: Schaden ersetzen means to compensate for damages.
Reason: The German expression is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To replace" differs from audit Current EN "Schaden ersensen means to compensate for damages."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: SPELLING_ERROR
Field: study.tip.leftBlocks[0].text
Current EN: If something takes the place of something else, use ersensen.
Recommended EN: If something takes the place of something else, use ersetzen.
Reason: The target verb is misspelled.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To replace" differs from audit Current EN "Schaden ersensen means to compensate for damages."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: SPELLING_ERROR
Field: study.important.text
Current EN: Schaden ersensen means to compensate the loss, not to "replace the damage".
Recommended EN: Schaden ersetzen means to compensate for the loss, not to “replace the damage”.
Reason: The German verb is misspelled; “compensate for the loss” is the natural phrasing.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To replace" differs from audit Current EN "Schaden ersensen means to compensate for damages."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 41 — b1-fassen — fassen

Production index: 869
Card type: standardStudy
DE: fassen
Article: —
Plural: —
LV source: satvert
Production EN: To grasp
Metadata anomaly: Production EN "To grasp" differs from audit Current EN "With the hand fassen = to grasp; with the mind fassen = to grasp; Saal fasst = fits."

### Finding 1

Severity: HIGH
Type: CORRUPTED_TEXT
Field: study.tip.leftBlocks[0].text
Current EN: With the hand fassen = to grasp; with the mind fassen = to grasp; Saal fasst = fits.
Recommended EN: With the hand, fassen means “to grasp”; with the mind, it means “to comprehend”; a hall can accommodate people.
Reason: The tip contains Latvian/German fragments and repeats “to grasp”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To grasp" differs from audit Current EN "With the hand fassen = to grasp; with the mind fassen = to grasp; Saal fasst = fits."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: MEANING_ERROR
Field: study.important.text
Current EN: fassen depends on the object: grasps the hand, embraces the thought, embraces people.
Recommended EN: fassen depends on the object: you grasp someone’s hand, comprehend an idea, or accommodate people.
Reason: “Embraces the thought/people” is misleading and the grammar is incomplete.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To grasp" differs from audit Current EN "With the hand fassen = to grasp; with the mind fassen = to grasp; Saal fasst = fits."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: TECHNICAL
Type: SECTION_ACCENT_ERROR
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: satvert,aptvert,ietilpina
Recommended EN: Replace the Latvian tokens with corresponding English tokens from the corrected tip.
Reason: All three accent tokens are Latvian and do not occur in the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To grasp" differs from audit Current EN "With the hand fassen = to grasp; with the mind fassen = to grasp; Saal fasst = fits."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 42 — b1-faul — faul

Production index: 872
Card type: standardStudy
DE: faul
Article: —
Plural: —
LV source: slinks
Production EN: Lazy
Metadata anomaly: Production EN "Lazy" differs from audit Current EN "Main idea: foul about a person means lazy."

### Finding 1

Severity: HIGH
Type: INCORRECT_WORD
Field: study.explanation
Current EN: Main idea: foul about a person means lazy.
Recommended EN: Main idea: faul when used about a person means lazy.
Reason: “Foul” is a different English word and does not translate German “faul” here.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Lazy" differs from audit Current EN "Main idea: foul about a person means lazy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: INCORRECT_WORD
Field: study.tip.leftBlocks[0].text
Current EN: A person can be foul = lazy; the food may be foul = rotten.
Recommended EN: A person can be faul = lazy; food can be faul = rotten.
Reason: The German word is incorrectly replaced with English “foul”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Lazy" differs from audit Current EN "Main idea: foul about a person means lazy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.explanation.purple[1]
Current EN: Main
Recommended EN: Remove or correct this accent mapping; the target occurs only once.
Reason: The second highlighted “Main” has no matching English occurrence.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Lazy" differs from audit Current EN "Main idea: foul about a person means lazy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.explanation.purple[2]
Current EN: Main
Recommended EN: Remove or correct this accent mapping; the target occurs only once.
Reason: The third highlighted “Main” has no matching English occurrence.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Lazy" differs from audit Current EN "Main idea: foul about a person means lazy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 5

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text.purple
Current EN: slinks, sapuvis
Recommended EN: Use matching English targets such as “lazy” and “rotten”.
Reason: The accent targets are Latvian words absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Lazy" differs from audit Current EN "Main idea: foul about a person means lazy."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 43 — b1-festhalten — festhalten

Production index: 889
Card type: standardStudy
DE: festhalten
Article: —
Plural: —
LV source: turēt cieši
Production EN: Hold tight
Metadata anomaly: Production EN "Hold tight" differs from audit Current EN "Do not confuse festhalten with festhalten: festhalten = to hold/fix, festhalten = to establish."

### Finding 1

Severity: HIGH
Type: WRONG_TERM
Field: study.important.text
Current EN: Do not confuse festhalten with festhalten: festhalten = to hold/fix, festhalten = to establish.
Recommended EN: Do not confuse festhalten with feststellen: festhalten = to hold/record, feststellen = to establish.
Reason: Both German verbs are incorrectly given as “festhalten”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Hold tight" differs from audit Current EN "Do not confuse festhalten with festhalten: festhalten = to hold/fix, festhalten = to establish."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MISLEADING_TRANSLATION
Field: study.comparison[0].meaning
Current EN: Hold tight / fix
Recommended EN: Hold tight / record
Reason: “Fix” is misleading for the meaning of recording information.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Hold tight" differs from audit Current EN "Do not confuse festhalten with festhalten: festhalten = to hold/fix, festhalten = to establish."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: MEDIUM
Type: UNNATURAL_EXPRESSION
Field: study.tip.leftBlocks[0].text
Current EN: With the hands festhalten = to hold fast; in writing festhalten = fix.
Recommended EN: With the hands, festhalten means to hold tight; in writing, it means to record.
Reason: “Fix” is unnatural and misleading for written information.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Hold tight" differs from audit Current EN "Do not confuse festhalten with festhalten: festhalten = to hold/fix, festhalten = to establish."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 44 — b1-festlegen — festlegen

Production index: 890
Card type: standardStudy
DE: festlegen
Article: —
Plural: —
LV source: noteikt
Production EN: Determine
Metadata anomaly: Production EN "Determine" differs from audit Current EN "festlegen means to set clearly in advance a term, price, plan, arrangement, or rule."

### Finding 1

Severity: MEDIUM
Type: UNNATURAL_EXPRESSION
Field: study.explanation
Current EN: festlegen means to set clearly in advance a term, price, plan, arrangement, or rule.
Recommended EN: festlegen means to clearly set a deadline, price, plan, arrangement, or rule in advance.
Reason: “Term” is ambiguous here, and the word order is unnatural.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Determine" differs from audit Current EN "festlegen means to set clearly in advance a term, price, plan, arrangement, or rule."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: MIXED_LANGUAGE
Field: study.tip.leftBlocks[0].text
Current EN: Termin, Preis, Regel festlegen = to set clearly ahead.
Recommended EN: Set a deadline, price, or rule clearly in advance.
Reason: The English contains German learner-facing terms and unnatural “set clearly ahead”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Determine" differs from audit Current EN "festlegen means to set clearly in advance a term, price, plan, arrangement, or rule."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: WRONG_TERM
Field: study.important.text
Current EN: festlegen = determine beforehand; to establish = to establish an already existing fact.
Recommended EN: festlegen = to set in advance; feststellen = to establish an already existing fact.
Reason: The second German verb is omitted and the sentence is malformed.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Determine" differs from audit Current EN "festlegen means to set clearly in advance a term, price, plan, arrangement, or rule."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].purple
Current EN: set forward
Recommended EN: Use a matching target such as “set clearly in advance”.
Reason: The highlighted phrase does not occur in the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Determine" differs from audit Current EN "festlegen means to set clearly in advance a term, price, plan, arrangement, or rule."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 45 — b1-feststellen — feststellen

Production index: 893
Card type: standardStudy
DE: feststellen
Article: —
Plural: —
LV source: konstatēt
Production EN: To establish
Metadata anomaly: Production EN "To establish" differs from audit Current EN "Main idea: to ascertain means to establish or ascertain a fact"

### Finding 1

Severity: MEDIUM
Type: WRONG_TERM
Field: study.explanation
Current EN: Main idea: to ascertain means to establish or ascertain a fact
Recommended EN: Main idea: feststellen means to establish or ascertain a fact
Reason: The explanation switches to a different headword instead of explaining “feststellen”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To establish" differs from audit Current EN "Main idea: to ascertain means to establish or ascertain a fact"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: MEDIUM
Type: GRAMMAR
Field: study.examples[2].lv
Current EN: I found you are right.
Recommended EN: I found that you are right.
Reason: The clause needs “that” in this learner example.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To establish" differs from audit Current EN "Main idea: to ascertain means to establish or ascertain a fact"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: HIGH
Type: WRONG_TERM
Field: study.important.text
Current EN: verzetten = to establish an already existing fact; festlegen = to set a decision, term or price.
Recommended EN: feststellen = to establish an already existing fact; festlegen = to set a decision, deadline, or price.
Reason: The first German word is an unrelated Latvian-looking error.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To establish" differs from audit Current EN "Main idea: to ascertain means to establish or ascertain a fact"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].purple
Current EN: faktu, error, disease, deadline, cenu
Recommended EN: Use matching English targets such as “fact”, “error”, “disease”, “term”, and “price”.
Reason: Several accent targets are Latvian or absent from the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To establish" differs from audit Current EN "Main idea: to ascertain means to establish or ascertain a fact"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 46 — b1-folge — Folge

Production index: 929
Card type: standardStudy
DE: Folge
Article: die
Plural: die Folgen
LV source: sekas
Production EN: Consequences
Metadata anomaly: Production EN "Consequences" differs from audit Current EN "Consequence / series"

### Finding 1

Severity: MEDIUM
Type: INCORRECT_MEANING
Field: study.comparison[0].meaning
Current EN: Consequence / series
Recommended EN: Consequence / episode
Reason: In a media context, Folge means an episode, not a series.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Consequences" differs from audit Current EN "Consequence / series"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: INCORRECT_MEANING
Field: study.important.text
Current EN: in the serial it is the series.
Recommended EN: in a TV series, it is an episode.
Reason: Both “serial” and “series” are wrong for this meaning of Folge.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Consequences" differs from audit Current EN "Consequence / series"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.important.purple
Current EN: series
Recommended EN: Use the matching target “episode”.
Reason: The highlighted target reflects the incorrect translation “series”.
Luna verdict: CONFIRMED
sectionAccents: PEDAGOGICAL
Metadata anomaly: Production EN "Consequences" differs from audit Current EN "Consequence / series"

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 47 — b1-futter — Futter

Production index: 972
Card type: standardStudy
DE: Futter
Article: das
Plural: —
LV source: barība
Production EN: Feed
Metadata anomaly: Production EN "Feed" differs from audit Current EN "Futter is given to the animals; the Futter jacket has a lining."

### Finding 1

Severity: HIGH
Type: UNNATURAL_EXPRESSION
Field: study.tip.leftBlocks[0].text
Current EN: Futter is given to the animals; the Futter jacket has a lining.
Recommended EN: Animals are given Futter; in a jacket, Futter means lining.
Reason: “The Futter jacket” is not natural English and suggests a type of jacket.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Feed" differs from audit Current EN "Futter is given to the animals; the Futter jacket has a lining."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: LOW
Type: SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].purple
Current EN: odere
Recommended EN: Use the matching English target “lining”.
Reason: The accent target is Latvian and absent from the English tip.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Feed" differs from audit Current EN "Futter is given to the animals; the Futter jacket has a lining."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 48 — b1-gehalt — Gehalt

Production index: 1027
Card type: standardStudy
DE: Gehalt
Article: das
Plural: die Gehälter
LV source: alga
Production EN: Salary
Metadata anomaly: Production EN "Salary" differs from audit Current EN "For the content of a letter or speech — der Gehalte (die Gehalte)."

### Finding 1

Severity: HIGH
Type: GERMAN_FORM_ERROR_IN_EN_FIELD
Field: study.tip.leftBlocks[0].text
Current EN: For the content of a letter or speech — der Gehalte (die Gehalte).
Recommended EN: For the content of a letter or speech — der Gehalt (die Gehalte).
Reason: The German singular noun is incorrectly written as “der Gehalte”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Salary" differs from audit Current EN "For the content of a letter or speech — der Gehalte (die Gehalte)."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: GERMAN_FORM_ERROR_IN_EN_FIELD
Field: study.important.text
Current EN: der Gehalte = content (die Gehalte).
Recommended EN: der Gehalt = content (die Gehalte).
Reason: The German singular noun is incorrectly written as “der Gehalte”.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Salary" differs from audit Current EN "For the content of a letter or speech — der Gehalte (die Gehalte)."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: LOW
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.explanation
Current EN: ["Main","Main"]
Recommended EN: Use only the existing target token "Main", or add a second matching target occurrence.
Reason: Two accents are specified, but “Main” occurs only once.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "Salary" differs from audit Current EN "For the content of a letter or speech — der Gehalte (die Gehalte)."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 49 — b1-gehalt-2 — Gehalt

Production index: 1027
Card type: standardStudy
DE: Gehalt
Article: das
Plural: die Gehälter
LV source: alga
Production EN: Salary
Metadata anomaly: Production EN "Salary" differs from audit Current EN "On the nature of a letter, speech or text - der Gehalt. For wages - das Gehalt."

### Finding 1

Severity: MEDIUM
Type: INACCURATE_MEANING
Field: study.tip.leftBlocks[0].text
Current EN: On the nature of a letter, speech or text - der Gehalt. For wages - das Gehalt.
Recommended EN: For the content or essence of a letter, speech, or text — der Gehalt. For wages — das Gehalt.
Reason: “On the nature of” is an unnatural and misleading description of the meaning.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Salary" differs from audit Current EN "On the nature of a letter, speech or text - der Gehalt. For wages - das Gehalt."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: LATVIAN_IN_EN_FIELD
Field: study.important.text
Current EN: Nepareizi: die Gehälter par saturu — pareizi: die Gehalte.
Recommended EN: Incorrect for content: die Gehälter — correct: die Gehalte.
Reason: The English field contains an untranslated Latvian sentence.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "Salary" differs from audit Current EN "On the nature of a letter, speech or text - der Gehalt. For wages - das Gehalt."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

## 50 — b1-gelten — gelten

Production index: 1049
Card type: standardStudy
DE: gelten
Article: —
Plural: —
LV source: būt spēkā
Production EN: To be valid
Metadata anomaly: Production EN "To be valid" differs from audit Current EN "Gelten means to be valid or valid at a particular time, place, or situation."

### Finding 1

Severity: MEDIUM
Type: UNNATURAL_EXPRESSION
Field: study.explanation
Current EN: Gelten means to be valid or valid at a particular time, place, or situation.
Recommended EN: gelten means to be in force or to be valid at a particular time, place, or in a particular situation.
Reason: “To be valid or valid” is repetitive and the construction is awkward.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To be valid" differs from audit Current EN "Gelten means to be valid or valid at a particular time, place, or situation."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 2

Severity: HIGH
Type: LATVIAN_IN_EN_FIELD
Field: study.tip.leftBlocks[0].text
Current EN: Regel, Gesetz, Ticket gilt; persona gilt als Expertin.
Recommended EN: A rule, law, or ticket is valid; a person is regarded as an expert.
Reason: The English field contains Latvian and untranslated German learner-facing text.
Luna verdict: CONFIRMED
sectionAccents: —
Metadata anomaly: Production EN "To be valid" differs from audit Current EN "Gelten means to be valid or valid at a particular time, place, or situation."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 3

Severity: LOW
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.explanation
Current EN: ["Main","Main"]
Recommended EN: Use only the existing target token "Main", or add a second matching target occurrence.
Reason: Two accents are specified, but “Main” occurs only once.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To be valid" differs from audit Current EN "Gelten means to be valid or valid at a particular time, place, or situation."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

### Finding 4

Severity: TECHNICAL
Type: BROKEN_SECTION_ACCENT
Field: study.sectionAccents.tip.leftBlocks[0].text
Current EN: ["persona","expertin"]
Recommended EN: Replace with matching English target tokens such as "person" and "expert".
Reason: The accent targets include Latvian or German tokens absent from the English text.
Luna verdict: CONFIRMED
sectionAccents: TECHNICAL
Metadata anomaly: Production EN "To be valid" differs from audit Current EN "Gelten means to be valid or valid at a particular time, place, or situation."

OWNER VERDICT: PENDING
OWNER FINAL EN: PENDING
OWNER NOTE: PENDING

---

## Coverage summary

```text
EN–DE B1 HIGH OWNER REVIEW #11

Block size: 50
Unique cards selected: 50/50
HIGH findings represented: 82
Associated MEDIUM findings: 44
Associated LOW findings: 23
Associated WARNING findings: 0
sectionAccents TECHNICAL: 43
sectionAccents PEDAGOGICAL: 12
Duplicate/root-issue links: 0
Metadata anomalies: 47

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
b1-Gen-1055 resolved false-positive exclusion: PASS
b1-Krüppel-1651 resolved exclusion: PASS
HIGH #4 biegen normalized exclusion: PASS
HIGH #9 Tagung resolution exclusion: PASS
Tageordnung ghost-audit exclusion: PASS

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

Production changes: 0
DE READ-ONLY: PASS
OWNER decisions made: 0
Workflow unresolved HIGH cards before HIGH #11: 123
HIGH #11 selected: 50
Workflow unresolved HIGH cards after HIGH #11: 73
Audit-selection pool before HIGH #11: 148
Audit-selection pool after HIGH #11: 98
Expected arithmetic: 123 - 50 = 73
Calculated workflow remaining: 73
Discrepancy: none
```