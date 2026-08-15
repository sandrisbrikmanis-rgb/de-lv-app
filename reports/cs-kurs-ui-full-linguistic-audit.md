# CS–DE Kurss UI — pilns lingvistiskais audits

**Model:** GPT-5.6 Luna (`gpt-5.6-luna`)
**Scope:** `languages/cs/ui.js` Kurss UI (`kurss.*`, `menu.course`, `progress.courseHeading`) + renderer registry check (`ui.js`)
**Mode:** READ-ONLY audit — recommendations only

## Executive summary

| Metric | Value |
|--------|-------|
| CS Kurss UI units audited | 98 |
| Total findings | 55 |
| HIGH | 8 |
| MEDIUM | 39 |
| LOW | 8 |
| Foreign-language leftovers | 2 |
| Terminology (CS_TERMINOLOGY) | 23 |
| Naturalness (CS_UI_NATURALNESS) | 11 |
| Grammar/orthography | 2 |
| Functional/renderer | 3 |
| Primary ↔ www sync | PASS (identical) |
| DE changes | **0** |
| LV MASTER changes | **0** |
| Production changes | **0** |

## Coverage

All `kurss.*` keys in `languages/cs/ui.js` plus `menu.course` and `progress.courseHeading` were extracted and audited (100% UI key coverage).

Course **content** (`data/cs/courseLessons.js`, 629 content OWNER findings) was **not** re-audited as new independent content findings.

## Gates

| Gate | Status |
|------|--------|
| CS Kurss UI coverage = 100% | **PASS** (98/98 units) |
| Production changes = 0 | **PASS** |
| DE changes = 0 | **PASS** |
| LV MASTER changes = 0 | **PASS** |
| Audit recommendations NOT applied | **PASS** |
| Existing 629/623 OWNER workflow untouched | **PASS** |
| No new repair script created | **PASS** |

## OWNER REVIEW REQUIRED

- **Kurs / Kurz product label** — CURRENT: „Kurs (multiple keys)“ — PROPOSED (audit): „Kurz or Kurss-aligned term — OWNER decision“ — CS uses „Kurs“ while LV MASTER UI uses „Kurss“. Czech standard is „kurz“; inconsistency across product labels.
- **Poradenství ↔ Tip/Porada terminology** — CURRENT: „Poradenství“ — PROPOSED (audit): „Tip“ — „Poradenství“ means counselling or advisory services and is unnatural as the heading of a short learning tip block. NEEDS_OWNER_REVIEW: use a conventional tip heading.
- **kurss.articles** — CURRENT: „Články“ — PROPOSED (audit): „Členy“ — In Czech language-learning terminology, German grammatical articles are „členy“, not „články“.
- **Přednášky / Výuka přednášek terminology** — CURRENT: „Přednášky“ — PROPOSED (audit): „Lekce“ — „Přednášky“ means lectures and is unnatural for lessons in a language-learning app. NEEDS_OWNER_REVIEW: use „Lekce“ consistently.
- **kurss.exerciseProgress** — CURRENT: „Přednáška {lesson} · Cvičení“ — PROPOSED (audit): „Lekce {lesson} · Cvičení“ — „Přednáška“ is inappropriate for a language-learning lesson and is inconsistent with the natural Czech UI term „Lekce“. NEEDS_OWNER_REVIEW.
- **kurss.exerciseMeta.formIhr** — CURRENT: „Formulář 2/3: Vy (množné číslo)“ — PROPOSED (audit): „Forma 2/3: Vy (množné číslo)“ — „Formulář“ označuje administrativní formulář, nikoli gramatický tvar.
- **kurss.exerciseMeta.formSie** — CURRENT: „Forma 3/3: Sie (slušná forma)“ — PROPOSED (audit): „Forma 3/3: Sie (zdvořilá forma)“ — „Formulář“ je nesprávný termín pro gramatický tvar a „zdvořilá forma“ je v jazykových materiálech přirozenější než „slušná forma“.
- **Přednáška ↔ Lekce (lesson titles)** — CURRENT: „Přednáška 1“ — PROPOSED (audit): „Lekce 1“ — „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.
- **kurss.lessonItems.12.menuDesc** — CURRENT: „Srovnatelné stupně, als/wie, věk a barvy.“ — PROPOSED (audit): „Stupňování, als/wie, věk a barvy.“ — „Srovnatelné stupně“ není správný český gramatický termín pro comparative/superlative degrees.

## Functional / renderer findings

### Finding 1

**ID / key:** renderer.translate.Přeložit
**Fails:** ui.js
**CURRENT:** Přeložit (kurss.sections.translate)
**PROPOSED:** Add „Přeložit“ to universal COURSE_TRANSLATE_SECTION_TITLES registry
**Kategorija:** FUNCTIONAL_RENDERER
**Smagums:** HIGH
**Pamatojums:** CS translate section title not in COURSE_TRANSLATE_SECTION_TITLES — getCourseTranslateCards() returns [] for lessons 7+.

### Finding 2

**ID / key:** renderer.exercise.Cvičení
**Fails:** ui.js
**CURRENT:** Cvičení
**PROPOSED:** Add „Cvičení“ to universal COURSE_EXERCISE_SECTION_TITLES registry
**Kategorija:** FUNCTIONAL_RENDERER
**Smagums:** HIGH
**Pamatojums:** CS exercise section title not in COURSE_EXERCISE_SECTION_TITLES — getCourseExerciseCards() returns [].

### Finding 3

**ID / key:** renderer.exercise.Übung / Cvičení
**Fails:** ui.js
**CURRENT:** Übung / Cvičení
**PROPOSED:** Add „Übung / Cvičení“ to universal COURSE_EXERCISE_SECTION_TITLES registry
**Kategorija:** FUNCTIONAL_RENDERER
**Smagums:** HIGH
**Pamatojums:** CS exercise section title not in COURSE_EXERCISE_SECTION_TITLES — getCourseExerciseCards() returns [].

## Linguistic findings

### Finding 1

**ID / key:** kurss.label-terminology
**Fails:** languages/cs/ui.js
**CURRENT:** Kurs (multiple keys)
**PROPOSED:** Kurz or Kurss-aligned term — OWNER decision
**Kategorija:** CS_TERMINOLOGY
**Smagums:** LOW
**Pamatojums:** CS uses „Kurs“ while LV MASTER UI uses „Kurss“. Czech standard is „kurz“; inconsistency across product labels.

### Finding 2

**ID / key:** kurss.back
**Fails:** languages/cs/ui.js
**CURRENT:** ‹ Kurz
**PROPOSED:** ‹ Kurs
**Kategorija:** UI_INCONSISTENCY
**Smagums:** LOW
**Pamatojums:** The back label uses „Kurz“, while the course panel and title use „Kurs“. „Kurz“ is valid Czech, so this is an internal UI consistency issue rather than a spelling error.

### Finding 3

**ID / key:** kurss.tipTitle
**Fails:** languages/cs/ui.js
**CURRENT:** Poradenství
**PROPOSED:** Tip
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Poradenství“ means counselling or advisory services and is unnatural as the heading of a short learning tip block. NEEDS_OWNER_REVIEW: use a conventional tip heading.

### Finding 4

**ID / key:** kurss.articles
**Fails:** languages/cs/ui.js
**CURRENT:** Články
**PROPOSED:** Členy
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** In Czech language-learning terminology, German grammatical articles are „členy“, not „články“.

### Finding 5

**ID / key:** kurss.pronounsDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Formy nominativ, akkusativ a dativ.
**PROPOSED:** Tvary v nominativu, akuzativu a dativu.
**Kategorija:** CS_GRAMMAR
**Smagums:** MEDIUM
**Pamatojums:** The case names require genitive forms after „formy“; „formy nominativ“ is grammatically incorrect. Czech terminology normally uses „akuzativ“ rather than the German-influenced „akkusativ“ in Czech explanatory text.

### Finding 6

**ID / key:** kurss.lessons
**Fails:** languages/cs/ui.js
**CURRENT:** Přednášky
**PROPOSED:** Lekce
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednášky“ means lectures and is unnatural for lessons in a language-learning app. NEEDS_OWNER_REVIEW: use „Lekce“ consistently.

### Finding 7

**ID / key:** kurss.lessonsDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Výuka přednášek v sekvenčním pořadí od 1 do 21.
**PROPOSED:** Lekce v pořadí od 1 do 21.
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Výuka přednášek“ is unnatural and incorrectly frames the course units as lectures. „V sekvenčním pořadí“ is also unnecessarily bureaucratic for a lesson-list description. NEEDS_OWNER_REVIEW.

### Finding 8

**ID / key:** kurss.verbBasicsDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Osoby, tvary a obecná slovesa.
**PROPOSED:** Osoby, tvary a běžná slovesa.
**Kategorija:** CS_SEMANTIC_MISMATCH
**Smagums:** LOW
**Pamatojums:** „Obecná slovesa“ means general verbs, whereas the intended meaning is common or frequently used verbs.

### Finding 9

**ID / key:** kurss.pronounsSubtitle
**Fails:** languages/cs/ui.js
**CURRENT:** Nominativ, Akkusativ a Dativ - tvary zájmen.
**PROPOSED:** Tvary zájmen v nominativu, akuzativu a dativu.
**Kategorija:** CS_GRAMMAR
**Smagums:** MEDIUM
**Pamatojums:** The case labels are German-influenced and the phrase „Nominativ ... tvary zájmen“ is less grammatical and natural than a construction with case genitives. The hyphen should also be replaced by an en dash or avoided.

### Finding 10

**ID / key:** kurss.vowelsSubtitle
**Fails:** languages/cs/ui.js
**CURRENT:** Samohlásky - dlouhé a krátké
**PROPOSED:** Dlouhé a krátké samohlásky
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** LOW
**Pamatojums:** The title-like phrase „Samohlásky – dlouhé a krátké“ is understandable but less natural than the standard Czech noun phrase „Dlouhé a krátké samohlásky“.

### Finding 11

**ID / key:** kurss.lessonsSubtitle
**Fails:** languages/cs/ui.js
**CURRENT:** Výuka přednášek v sekvenčním pořadí od 1 do 21.
**PROPOSED:** Lekce v pořadí od 1 do 21.
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** This repeats the unnatural „Přednášky“ terminology and the awkward phrase „Výuka přednášek v sekvenčním pořadí“. NEEDS_OWNER_REVIEW.

### Finding 12

**ID / key:** kurss.vowelsTitle
**Fails:** languages/cs/ui.js
**CURRENT:** Samohlásky - dlouhé a krátké
**PROPOSED:** Dlouhé a krátké samohlásky
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** LOW
**Pamatojums:** The wording is understandable, but „Dlouhé a krátké samohlásky“ is the natural Czech title form. The current hyphenated structure reads like a literal label construction.

### Finding 13

**ID / key:** kurss.consonantsDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Nejdůležitější zvuky souhlásek pro začátečníky.
**PROPOSED:** Nejdůležitější souhláskové zvuky pro začátečníky.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** MEDIUM
**Pamatojums:** „Zvuky souhlásek“ is awkward Czech. The intended concept is consonant sounds, which should be expressed as „souhláskové zvuky“ or simply „souhlásky“ depending on the lesson scope.

### Finding 14

**ID / key:** kurss.lessonProgress
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška {lesson} · Přeložil: {current} / {total}
**PROPOSED:** Lekce {lesson} · Překlad: {current} / {total}
**Kategorija:** CS_SEMANTIC_MISMATCH
**Smagums:** HIGH
**Pamatojums:** „Přeložil“ is a masculine past-tense verb meaning „he translated“, not a progress label. A noun such as „Překlad“ or a passive form such as „Přeloženo“ is appropriate. The unit label also uses the unnatural „Přednáška“ terminology. NEEDS_OWNER_REVIEW.

### Finding 15

**ID / key:** kurss.exerciseProgress
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška {lesson} · Cvičení
**PROPOSED:** Lekce {lesson} · Cvičení
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ is inappropriate for a language-learning lesson and is inconsistent with the natural Czech UI term „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 16

**ID / key:** kurss.cta.tapContinue
**Fails:** languages/cs/ui.js
**CURRENT:** Klepněte na pokračovat
**PROPOSED:** Klepněte na tlačítko Pokračovat
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** MEDIUM
**Pamatojums:** „Klepněte na pokračovat“ je v češtině nepřirozené, protože „Pokračovat“ je název akce nebo tlačítka, ne objekt, na který se klepe.

### Finding 17

**ID / key:** kurss.exerciseMeta.fillCase
**Fails:** languages/cs/ui.js
**CURRENT:** Übung I - Použijte správnou konjugaci
**PROPOSED:** Cvičení I – použijte správný pád
**Kategorija:** FOREIGN_LANGUAGE_LEFTOVER
**Smagums:** HIGH
**Pamatojums:** „Übung I“ zůstalo v němčině, přestože jde o český UI text. Navíc „konjugace“ označuje časování sloves, zatímco kontext vyžaduje správný pád.

### Finding 18

**ID / key:** kurss.exerciseMeta.chooseCasePlural
**Fails:** languages/cs/ui.js
**CURRENT:** Dejte správnou konjugaci a udělejte z ní množné číslo!
**PROPOSED:** Doplňte správný pád a vytvořte množné číslo!
**Kategorija:** CS_SEMANTIC_MISMATCH
**Smagums:** HIGH
**Pamatojums:** „Konjugace“ je nesprávný gramatický termín pro pád a formulace „Dejte ... a udělejte z ní“ je v instrukci nepřirozená.

### Finding 19

**ID / key:** kurss.exerciseMeta.translate
**Fails:** languages/cs/ui.js
**CURRENT:** Übung II - přeložit
**PROPOSED:** Cvičení II – překlad
**Kategorija:** FOREIGN_LANGUAGE_LEFTOVER
**Smagums:** HIGH
**Pamatojums:** „Übung II“ zůstalo v němčině. Infinitiv „přeložit“ navíc není konzistentní s běžným označením cvičení.

### Finding 20

**ID / key:** kurss.exerciseMeta.formDu
**Fails:** languages/cs/ui.js
**CURRENT:** Formulář 1/3: Vy (jednotné číslo)
**PROPOSED:** Forma 1/3: Ty (jednotné číslo)
**Kategorija:** CS_SEMANTIC_MISMATCH
**Smagums:** HIGH
**Pamatojums:** „du“ označuje neformální jednotné číslo, tedy české „ty“, nikoli „Vy“. „Formulář“ je navíc nevhodný překlad německého gramatického tvaru.

### Finding 21

**ID / key:** kurss.exerciseMeta.formIhr
**Fails:** languages/cs/ui.js
**CURRENT:** Formulář 2/3: Vy (množné číslo)
**PROPOSED:** Forma 2/3: Vy (množné číslo)
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Formulář“ označuje administrativní formulář, nikoli gramatický tvar.

### Finding 22

**ID / key:** kurss.exerciseMeta.formSie
**Fails:** languages/cs/ui.js
**CURRENT:** Forma 3/3: Sie (slušná forma)
**PROPOSED:** Forma 3/3: Sie (zdvořilá forma)
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Formulář“ je nesprávný termín pro gramatický tvar a „zdvořilá forma“ je v jazykových materiálech přirozenější než „slušná forma“.

### Finding 23

**ID / key:** kurss.lessonItems.1.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 1
**PROPOSED:** Lekce 1
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 24

**ID / key:** kurss.lessonItems.1.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Slovesa v přítomném čase, slova, gramatika a procvičování.
**PROPOSED:** Slovesa v přítomném čase, slovíčka, gramatika a procvičování.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** LOW
**Pamatojums:** V kontextu jazykového kurzu jsou „slovíčka“ přirozenější než obecné „slova“.

### Finding 25

**ID / key:** kurss.lessonItems.2.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 2
**PROPOSED:** Lekce 2
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 26

**ID / key:** kurss.lessonItems.2.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Dialogy, slova, výslovnost, gramatika a překlad.
**PROPOSED:** Dialogy, slovíčka, výslovnost, gramatika a překlad.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** LOW
**Pamatojums:** V kontextu jazykového kurzu jsou „slovíčka“ přirozenější než obecné „slova“.

### Finding 27

**ID / key:** kurss.lessonItems.3.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 3
**PROPOSED:** Lekce 3
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 28

**ID / key:** kurss.lessonItems.3.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Dialogy, slova, výslovnost, gramatika a překlad.
**PROPOSED:** Dialogy, slovíčka, výslovnost, gramatika a překlad.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** LOW
**Pamatojums:** V kontextu jazykového kurzu jsou „slovíčka“ přirozenější než obecné „slova“.

### Finding 29

**ID / key:** kurss.lessonItems.4.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 4
**PROPOSED:** Lekce 4
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 30

**ID / key:** kurss.lessonItems.5.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 5
**PROPOSED:** Lekce 5
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 31

**ID / key:** kurss.lessonItems.5.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Wen?, akuzativ, sitzen, fragen a -in koncovka.
**PROPOSED:** Wen?, akuzativ, sitzen, fragen a koncovka -in.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** MEDIUM
**Pamatojums:** „-in koncovka“ má nepřirozený slovosled; v češtině se říká „koncovka -in“. Německé „Wen?“ a „sitzen“/„fragen“ jsou záměrné výukové štítky.

### Finding 32

**ID / key:** kurss.lessonItems.6.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 6
**PROPOSED:** Lekce 6
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 33

**ID / key:** kurss.lessonItems.7.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 7
**PROPOSED:** Lekce 7
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 34

**ID / key:** kurss.lessonItems.7.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Imperativ, forma adresy a množné číslo.
**PROPOSED:** Imperativ, oslovení a množné číslo.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** MEDIUM
**Pamatojums:** „Forma adresy“ je doslovná a v češtině nepřirozená formulace; vhodnější je „oslovení“.

### Finding 35

**ID / key:** kurss.lessonItems.8.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 8
**PROPOSED:** Lekce 8
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 36

**ID / key:** kurss.lessonItems.8.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Zvratná slovesa, e → i/ie záměna a akuzativ.
**PROPOSED:** Zvratná slovesa, střídání e → i/ie a akuzativ.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** MEDIUM
**Pamatojums:** Spojení „e → i/ie záměna“ má nepřirozený slovosled.

### Finding 37

**ID / key:** kurss.lessonItems.9.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 9
**PROPOSED:** Lekce 9
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 38

**ID / key:** kurss.lessonItems.10.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 10
**PROPOSED:** Lekce 10
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 39

**ID / key:** kurss.lessonItems.11.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 11
**PROPOSED:** Lekce 11
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 40

**ID / key:** kurss.lessonItems.11.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Haben, kein/keine/keinen, přivlastňovací a složená podstatná jména.
**PROPOSED:** Haben, kein/keine/keinen, přivlastňovací zájmena a složená podstatná jména.
**Kategorija:** CS_UI_NATURALNESS
**Smagums:** MEDIUM
**Pamatojums:** „Přivlastňovací“ je nedokončené označení; v tomto gramatickém kontextu je vhodné uvést podstatné jméno „zájmena“.

### Finding 41

**ID / key:** kurss.lessonItems.12.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 12
**PROPOSED:** Lekce 12
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 42

**ID / key:** kurss.lessonItems.12.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Srovnatelné stupně, als/wie, věk a barvy.
**PROPOSED:** Stupňování, als/wie, věk a barvy.
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Srovnatelné stupně“ není správný český gramatický termín pro comparative/superlative degrees.

### Finding 43

**ID / key:** kurss.lessonItems.13.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 13
**PROPOSED:** Lekce 13
**Kategorija:** CS_TERMINOLOGY
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ označuje akademický výklad; pro lekci v jazykové aplikaci je přirozenější „Lekce“. NEEDS_OWNER_REVIEW.

### Finding 44

**ID / key:** kurss.lessonItems.14.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 14
**PROPOSED:** Lekce 14
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 45

**ID / key:** kurss.lessonItems.15.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 15
**PROPOSED:** Lekce 15
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 46

**ID / key:** kurss.lessonItems.16.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 16
**PROPOSED:** Lekce 16
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 47

**ID / key:** kurss.lessonItems.17.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 17
**PROPOSED:** Lekce 17
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 48

**ID / key:** kurss.lessonItems.18.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 18
**PROPOSED:** Lekce 18
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 49

**ID / key:** kurss.lessonItems.18.menuDesc
**Fails:** languages/cs/ui.js
**CURRENT:** Wohin / wo, Akkusativ nebo Dativ s / in / auf.
**PROPOSED:** Wohin / wo, Akkusativ nebo Dativ s an / in / auf.
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** The German preposition is „an“, but the Czech text contains „s“, which means German „mit“. This changes the lesson topic.

### Finding 50

**ID / key:** kurss.lessonItems.19.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 19
**PROPOSED:** Lekce 19
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 51

**ID / key:** kurss.lessonItems.20.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 20
**PROPOSED:** Lekce 20
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

### Finding 52

**ID / key:** kurss.lessonItems.21.title
**Fails:** languages/cs/ui.js
**CURRENT:** Přednáška 21
**PROPOSED:** Lekce 21
**Kategorija:** TRANSLATION
**Smagums:** MEDIUM
**Pamatojums:** „Přednáška“ means a lecture and is less natural for a lesson-list item. Use „Lekce“; NEEDS_OWNER_REVIEW.

## Luna run stats

```json
{
  "model": "gpt-5.6-luna",
  "requestCount": 3,
  "initialBatchRequests": 0,
  "retryRequests": 0,
  "batchCount": 3,
  "batchSizes": [
    40,
    40,
    18
  ],
  "retryCount": 0,
  "retryReasons": {},
  "inputTokens": 7618,
  "cachedInputTokens": 0,
  "outputTokens": 9536,
  "reasoningTokens": 3980,
  "totalTokens": 17154,
  "findingsCount": 51,
  "passCount": 47
}
```
