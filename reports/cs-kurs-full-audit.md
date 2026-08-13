# CS–DE Kurs FULL AUDIT

## KOPSAVILKUMS

- Dataset: Kurs
- Audit mode: READ-ONLY
- Total objects: 21
- Audited objects: 21
- Coverage: 100%
- Batch size: 1
- Batch count: 21
- CRITICAL: 8
- HIGH: 678
- MEDIUM: 94
- LOW: 15
- SOURCE_DE_ISSUE: 0
- NEEDS_OWNER_REVIEW: 0
- FALSE_POSITIVE: 0
- Production changes: 0
- DE changes: 0
- Other-language changes: 0

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | PASS |
| DE READ-ONLY integritāte | PASS |
| Tehniskā kontrole | PASS |
| Ārvalodu atlikumi | PASS |
| sectionAccents | PASS |
| data/www sinhronizācija | PASS |
| JS sintakse | PASS |

**Deterministisko atradumu skaits:** 510

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 21/21 |
| Lingvistisko atradumu skaits | 285 |
| API pieprasījumi | 0 |
| Tokeni | 0 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

(Nav attiecināms šim datasetam)

## SECTIONACCENTS VALIDĀCIJA

(Nav attiecināms)

## FINDINGS

### CRITICAL (8)

### Finding 1: kurssLesson12

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson12
- **Field:** sections[1].items
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Část Slova obsahuje lotyšské překlady místo českých.
- **DE source:** Heißen — Wie heißt du — Ich heiße — Die Grube — Wieviel — Max — Groß — Klein — Kleiner als ich — Alt — Jung — Jünger als ich — So alt wie — Der Vetter — Am ältesten — Ebenso — Wie — Am jüngsten — Faul — Fleißig — Blau — Braun — Gelb — Das Gummi — Grau — Der Baum — Grün — Die Blume — Rot — Die Tinte — Die Kreide — Weiß — Schwarz — Krank — Gesund
- **LV reference:** Lotyšské glosy v celé části Slova
- **Problem:** Glosy jsou převážně lotyšské, takže část není českým studijním materiálem.
- **Recommended CS:** ["Heißen — říkat se","Wie heißt du — Jak se jmenuješ","Ich heiße — Jmenuji se","Die Grube — důl","Wieviel — kolik","Max (maks) — Max","Groß — velký","Klein — malý","Kleiner als ich — menší než já","Alt — starý","Jung — mladý","Jünger als ich — mladší než já","So alt wie — stejně starý jako","Der Vetter (der fetr) — bratranec","Am ältesten (am eltesten) — nejstarší","Ebenso — stejně","Wie — jak / jako","Am jüngsten — nejmladší","Faul — líný","Fleißig — pilný","Blau — modrý","Braun — hnědý","Gelb — žlutý","Das Gummi (das gumi) — guma","Grau — šedý","Der Baum — strom","Grün — zelený","Die Blume — květina","Rot — červený","Die Tinte — inkoust","Die Kreide — křída","Weiß — bílý","Schwarz — černý","Krank — nemocný","Gesund — zdravý"]
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 2: kurssLesson13

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson13
- **Field:** csText.sections[1].items
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Většina položek používá lotyšské překlady, např. „Der Körper — ķermenis“, „Der Kopf — galva“, „Rund — apaļš“ a „Atmen — elpot“.
- **DE source:** German vocabulary: Körper, Mensch, Kopf, Hals, Rumpf, Arm, Hand, Bein, Fuß and related words
- **LV reference:** Lotyšské překlady německé slovní zásoby
- **Problem:** Český kurz obsahuje lotyšské překlady místo češtiny; jde o rozsáhlou kontaminaci celého slovníčku.
- **Recommended CS:** ["Der Körper — tělo","Der Mensch — člověk","Der Kopf — hlava","Der Hals — krk","Der Rumpf — trup","Der Arm — paže","Die Hand — ruka","Die Hände — ruce","Das Bein — noha","Die Beine — nohy","Der Fuß — chodidlo","Die Füße — chodidla","Rund — kulatý","Lang — dlouhý","Kurz — krátký","Klein — malý","Groß — velký","Dick — tlustý","Dünn — tenký","Die Brust — hrudník","Vorn — vpředu","Der Rücken — záda","Hinten — vzadu","Jeder — každý","Jede — každá","Jedes — každé","Der Finger — prst","Die Zehe — prst u nohy","Beide — oba","Der Nagel — nehet","Die Nägel — nehty","Beschneiden — zastřihovat","Reinigen — čistit","Turnen — cvičit","Heben — zvedat","Machen — dělat","Der Schritt — krok","Bleiben — zůstat","Stehen — stát","Sich umkehren — otočit se","Ausstrecken — natáhnout","Senken — spouštět","Drehen — otáčet","Nach links — doleva","Nach rechts — doprava","Halten — držet","Gerade — rovně","Atmen — dýchat","Tief — hluboce"]
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 3: kurssLesson13

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson13
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** STUDY
- **Current CS text:** Vložený objekt csText je na konci poškozený: „Die Feder — d","lessonKey"...“
- **DE source:** Complete lesson data
- **LV reference:** Complete lesson JSON
- **Problem:** Data jsou u konce lekce syntakticky poškozená a poslední slovníková položka je oříznutá.
- **Recommended CS:** Opravit strukturu vloženého objektu a doplnit nedokončenou položku „Die Feder — pírko“ před klíč lessonKey.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 4: kurssLesson14

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson14
- **Field:** csText.sections[1]
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Jména — vajadzēt / būt jādara; Ich muss — man vajag / man jādara; Du musst — tev vajag / tev jādara; Er muss — viņam vajag / viņam jādara; Sie muss — viņai vajag / viņai jādara; Es muss — tam vajag / tam jādara; Wir müssen — mums vajag / mums jādara; Ihr müsst — jums vajag / jums jādara; Sie müssen — viņiem / viņām vajag; Lernen — mācīties; Vorwärts — uz priekšu; Vorwärts kommen — tikt uz priekšu; Wollen — gribēt; Ich will — es gribu; Du willst — tu gribi; Er will — viņš grib; Sie will — viņa grib; Es will — tas grib; Wir wollen — mēs gribam; Ihr wollt — jūs gribat; Sie wollen — viņi / viņas grib; Mögen — gribēt / vēlēties / patikt; Ich mag — es gribu / man patīk; Du magst — tu gribi / tev patīk; Er mag — viņš grib / viņam patīk; Sie mag — viņa grib / viņai patīk; Es mag — tas grib / tam patīk; Wir mögen — mēs gribam; Ihr mögt — jūs gribat; Sie mögen — viņi / viņas grib; Die Suppe — zupa; Munden — labi garšot; Mir — man; Dir — tev; Ihm — viņam; Ihr — viņai; Uns — mums; Euch — jums; Ihnen — viņiem / viņām; Denn — jo
- **DE source:** Müssen, wollen, mögen; lernen; vorwärts; die Suppe; munden; mir; dir; ihm; ihr; uns; euch; ihnen; denn
- **LV reference:** —
- **Problem:** Celá slovní zásoba je převážně lotyšsky, nikoli česky; navíc jsou některé významy německých sloves nepřesné.
- **Recommended CS:** Slovíčka — Müssen — muset; Ich muss — musím; Du musst — musíš; Er muss — musí; Sie muss — musí; Es muss — musí; Wir müssen — musíme; Ihr müsst — musíte; Sie müssen — musí (oni/ony); Lernen — učit se; Vorwärts — vpřed; Vorwärts kommen — dostat se vpřed; Wollen — chtít; Ich will — chci; Du willst — chceš; Er will — chce; Sie will — chce; Es will — chce; Wir wollen — chceme; Ihr wollt — chcete; Sie wollen — chtějí; Mögen — mít rád / chtít; Ich mag — mám rád / chci; Du magst — máš rád / chceš; Er mag — má rád / chce; Sie mag — má ráda / chce; Es mag — má rádo / chce; Wir mögen — máme rádi / chceme; Ihr mögt — máte rádi / chcete; Sie mögen — mají rádi / chtějí; Die Suppe — polévka; Munden — chutnat; Mir — mi; Dir — ti; Ihm — mu; Ihr — jí; Uns — nám; Euch — vám; Ihnen — jim; Denn — protože
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 5: kurssLesson14

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson14
- **Field:** csText.sections[3].items
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** SS izrunā kā český s.; SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.; Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.; Ö vārdā mögen izrunā kā skaidru ö skaņu.; Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du mag
- **DE source:** Aussprache
- **LV reference:** —
- **Problem:** Výslovnostní část je téměř celá lotyšsky; navíc příklady je třeba formulovat konzistentně česky.
- **Recommended CS:** SS se vyslovuje jako české s.; Písmeno ß se píše uprostřed nebo na konci slova po dlouhé samohlásce nebo dvojhlásce: die Füße, die Straße. SS se píše například ve slovech ich muss a er muss.; V některých tvarech se před koncovkou píše ss: müssen, ich muss, du musst, ihr müsst.; Ö ve slově mögen se vyslovuje jako jasná hláska ö.; Když po g následuje t, vyslovuje se g spíše jako k: du magst.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 6: kurssLesson20

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson20
- **Field:** sections[2].items[0].text
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Dopravní slova, která odpovídají na otázku chcete? v přednáškách 19. a 20. — kdy?, stojí s dativem. Dativ odpovídá nejen na wo? — kde?, ale také na přání? - kdy?
- **DE source:** Zeitangaben, die auf die Frage wann? antworten, stehen mit dem Dativ. Der Dativ antwortet nicht nur auf wo?, sondern auch auf wann?
- **LV reference:** Dopravní slova, která odpovídají na otázku chcete? v přednáškách 19. a 20. — kdy?, stojí s dativem. Dativ odpovídá nejen na wo? — kde?, ale také na přání? - kdy?
- **Problem:** Text je gramaticky i významově nesrozumitelný a obsahuje zkomolené či lotyšské části.
- **Recommended CS:** Časová určení, která odpovídají na otázku wann? — kdy?, se pojí s dativem. Dativ neodpovídá jen na otázku wo? — kde?, ale také na otázku wann? — kdy?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 7: kurssLesson20

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson20
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Vložený JSON končí u části "prompt":"Der Wolf lebt in (der Wald).","t a není syntakticky uzavřen.
- **DE source:** (lesson)
- **LV reference:** Celý vložený objekt lekce
- **Problem:** Pole csText není platný JSON, takže lekci nelze spolehlivě načíst ani studovat.
- **Recommended CS:** Opravit vložený JSON a doplnit nebo odstranit neúplnou část za položkou prompt.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 8: kurssLesson21

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson21
- **Field:** sections[4].cards[6]
- **Severity:** CRITICAL
- **Status:** STUDY
- **Current CS text:** {"prompt":"Woher tritt die Mutter?","t"
- **DE source:** Woher tritt die Mutter? Die Mutter tritt aus dem Hause.
- **LV reference:** —
- **Problem:** Karta je syntakticky neplatná: obsahuje osamocené „t“ a chybí task i answer.
- **Recommended CS:** {"prompt":"Woher tritt die Mutter?","task":"Odpověz podle textu.","answer":"Die Mutter tritt aus dem Hause."}
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (678)

### Finding 1: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[2]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Stehen auf — pieceļas
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 2: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[3]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Grüßen (grüsen) — sveicināt
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 3: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[6]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Morgen — rīts
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 4: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[9]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Die Kinder — bērni
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 5: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[10]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Setzt euch (zect oich) — sēstieties!
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 6: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[11]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Sie setzen sich — viņi apsēžas
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 7: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[12]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Fragen (ar akuzatīvu) — jautāt
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 8: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[13]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Sprechen — runāt
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 9: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[16]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Sehr (zēr) — ļoti
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 10: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[18]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Laut — skaļi
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 11: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[25]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Schreiben — rakstīt
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 12: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[27]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Erzählen (ercēlen) — stāstīt
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 13: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[28]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Zuhören — klausīties
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 14: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[29]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Sie hören zu — viņi klausās
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 15: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[31]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Arbeiter — strādnieks
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 16: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[34]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Bäcker (dēr beker) — maiznieks
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 17: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[35]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Schneider (dēr šneider) — drēbnieks
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 18: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[1].items[36]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Gärtner (dēr gertner) — dārznieks
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 19: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[2].items[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen).
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 20: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[2].items[1]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 21: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[2].items[2]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Vārdos Schüler, Bücher — ü ir garš (ū), bet Müller — īss ü.
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 22: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[2].items[3]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Ie izrunā kā garo ī: liest (līst).
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 23: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[2].items[4]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** SS izrunā kā s: grüßen (grüsen).
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 24: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[2].items[5]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Eu izrunā kā oi: deutlich (doitlich).
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 25: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[3].items[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Daudziem darbības vārdiem ar patskani e celmā vienskaitļa 2. un 3. personā tagadnē e vietā ir i vai ie.
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 26: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[3].items[7]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 27: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[3].items[8]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Český valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu si
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC, LV_WORD
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 28: kurssLesson8

- **Dataset:** kurs
- **Batch:** kurssLesson8
- **Card/Index:** kurssLesson8
- **Field:** kurssLesson8.sections[3].items[10]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Pavēles izteiksme: setz(e) dich!, setzt euch!, setzen Sie sich!
- **DE source:** (lesson)
- **LV reference:** kurssLesson8
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 29: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Mehrere (mērere) — vairāki, vairākas
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 30: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[1]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Hier (hīr) — šeit, te
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 31: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[3]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Auch — arī
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 32: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[4]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Langsam (lankzām) — lēni
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 33: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[5]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Schnell (šnel) — ātri
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 34: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[6]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Mehr (mēr) — vairāk
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 35: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[7]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Zumachen — aiztaisīt
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 36: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[9]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Sitzen (zicen) — sēdēt
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 37: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[10]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Ruhig (rū-ich) — mierīgi
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 38: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[11]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Dieser (dīzer) — šis
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 39: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[12]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Jener (jēner) — tas
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 40: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[13]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Brief (dēr brīf) — vēstule
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 41: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[14]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Die Briefe — vēstules
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 42: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[15]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Kurz (kurc) — īss
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 43: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[16]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Rein — tīrs
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 44: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[1].items[17]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Schmutzig (šmucich) — netīrs
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 45: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[2].items[0].heading
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Norādāmie vietniekvārdi
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 46: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[3].cards[0].forms[0].task
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Pārveido šo teikumu 3. personā vienskaitlī.
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 47: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[3].cards[0].forms[1].task
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Pārveido sākuma teikumu 1. personā daudzskaitlī.
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 48: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[3].cards[0].forms[2].task
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Lieto lietas vārdu vienskaitļa vietā daudzskaitli.
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 49: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[3].cards[0].forms[3].task
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Gatavs. Nākamais klikšķis rāda nākamo kartīti.
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit

### Finding 50: kurssLesson9

- **Dataset:** kurs
- **Batch:** kurssLesson9
- **Card/Index:** kurssLesson9
- **Field:** kurssLesson9.sections[3].cards[1].forms[0].task
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Pārveido šo teikumu 3. personā vienskaitlī.
- **DE source:** (lesson)
- **LV reference:** kurssLesson9
- **Problem:** Foreign remnant in lesson: LV_DIACRITIC
- **Recommended CS:** (Czech text)
- **Rationale:** Kurs audit


_... un vēl 628 HIGH atradumi (skat. reports/temp/cs-kurs-audit/)._


### MEDIUM (94)

### Finding 1: kurssLesson1

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson1
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Přítomná časová slovesa
- **DE source:** Present-tense verbs
- **LV reference:** —
- **Problem:** Současné znění je v češtině nepřirozené a významově neobratné.
- **Recommended CS:** Slovesa v přítomném čase
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 2: kurssLesson1

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson1
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Jména
- **DE source:** Nomen / nouns
- **LV reference:** —
- **Problem:** „Jména“ je užší a významově nepřesné; obsah se týká podstatných jmen.
- **Recommended CS:** Podstatná jména
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 3: kurssLesson1

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson1
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Oni / ty přicházíš
- **DE source:** sie kommen / Sie kommen
- **LV reference:** —
- **Problem:** Překlad míchá množné číslo s neformálním jednotným číslem; Sie je vykání, sie v množném čísle znamená oni.
- **Recommended CS:** Oni / Vy přicházíte
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 4: kurssLesson1

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson1
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Oni / ty jdou
- **DE source:** sie gehen / Sie gehen
- **LV reference:** —
- **Problem:** Překlad druhé varianty je v rozporu s vykáním Sie.
- **Recommended CS:** Oni / Vy jdete
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 5: kurssLesson1

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson1
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Oni / Ty stojíš
- **DE source:** sie stehen / Sie stehen
- **LV reference:** —
- **Problem:** „Ty stojíš“ neodpovídá formálnímu zájmenu Sie; správně je „Vy stojíte“.
- **Recommended CS:** Oni / Vy stojíte
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: kurssLesson1

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson1
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Oni / zpíváš
- **DE source:** sie singen / Sie singen
- **LV reference:** —
- **Problem:** „Zpíváš“ je neformální jednotné číslo a neodpovídá vykání Sie ani množnému číslu sie.
- **Recommended CS:** Oni / Vy zpíváte
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 7: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přednáška 2
- **DE source:** (lesson)
- **LV reference:** —
- **Problem:** Německé „lesson“ znamená lekce; „přednáška“ označuje spíše lecture.
- **Recommended CS:** Lekce 2
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 8: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Antworten - odpovědět
- **DE source:** antworten
- **LV reference:** —
- **Problem:** Německé „antworten“ je zde nedokonavé sloveso; české „odpovědět“ mění vid i význam.
- **Recommended CS:** Antworten — odpovídat
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 9: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Rechnen — vypočítat
- **DE source:** rechnen
- **LV reference:** —
- **Problem:** „Rechnen“ znamená obecně počítat; „vypočítat“ je dokonavé a významově užší.
- **Recommended CS:** Rechnen — počítat
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 10: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Ve slovech ich, nicht, rechnen, zeichnen se hláska ch vyslovuje měkce, jako v českých slovech: technika, Fridrich.
- **DE source:** ich, nicht, rechnen, zeichnen
- **LV reference:** —
- **Problem:** České ch ve slovech „technika“ a „Fridrich“ není měkká německá hláska [ç].
- **Recommended CS:** Ve slovech ich, nicht, rechnen, zeichnen se hláska ch vyslovuje jako měkké [ç], přibližně jako velmi měkké české ch.
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 11: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Sloveso tun u se ve všech osobách vyslovuje dlouze.
- **DE source:** tun
- **LV reference:** —
- **Problem:** Ve větě je nadbytečné a gramaticky chybné „u“ po slovese tun.
- **Recommended CS:** Sloveso tun se ve všech osobách vyslovuje s dlouhým u.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 12: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.title
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přednáška 3
- **DE source:** (lesson)
- **LV reference:** —
- **Problem:** Německé „lesson“ znamená „lekce“, nikoli „přednáška“.
- **Recommended CS:** Lekce 3
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 13: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.subtitle
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Články, názvy míst a překlady
- **DE source:** Articles, place names and translations
- **LV reference:** —
- **Problem:** V jazykovědném kontextu „Artikel“ znamená gramatické členy, ne články.
- **Recommended CS:** Členy, názvy míst a překlady
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 14: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.legacyHtml
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Třetí přednáška: dialogy, slova, výslovnost, gramatika a překlad.
- **DE source:** (lesson) Third lesson
- **LV reference:** —
- **Problem:** „Lesson“ se v tomto kurzu překládá jako „lekce“, nikoli „přednáška“.
- **Recommended CS:** Třetí lekce: dialogy, slova, výslovnost, gramatika a překlad.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 15: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.legacyHtml
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Liegen — lehnout si
- **DE source:** liegen
- **LV reference:** —
- **Problem:** „Liegen“ označuje stav „ležet“, zatímco „lehnout si“ vyjadřuje začátek děje.
- **Recommended CS:** Liegen – ležet
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 16: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.legacyHtml
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Liest hier ein Buch? — je tu / je tu kniha?
- **DE source:** Liegt hier ein Buch?
- **LV reference:** —
- **Problem:** Český překlad nevyjadřuje význam slovesa „liegen“ a obsahuje neobratné zdvojení.
- **Recommended CS:** Leží tady kniha? – Je tady kniha?
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 17: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.legacyHtml
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Hängen — pověsit
- **DE source:** hängen
- **LV reference:** —
- **Problem:** V daných příkladech jde o stav „viset“, ne o kauzativní děj „pověsit“.
- **Recommended CS:** Hängen – viset
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 18: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.legacyHtml
- **Severity:** MEDIUM
- **Status:** STUDY
- **Current CS text:** Ck je dvojité k: dick (dikk).
- **DE source:** ck in dick
- **LV reference:** —
- **Problem:** Německé „ck“ nepředstavuje zdvojenou výslovnost /kk/.
- **Recommended CS:** Ck se vyslovuje jako k: dick (dik).
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 19: kurssLesson3

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson3
- **Field:** csText.legacyHtml
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Pokud koncovka -ig končí na e: -ige, pak se g vyslovuje jako určitá hláska g: niedrige (nídrige) Bänke.
- **DE source:** niedrige
- **LV reference:** —
- **Problem:** Původní formulace je nepřirozená a nejasná: koncovka sama nekončí na e.
- **Recommended CS:** Když po koncovce -ig následuje e, tedy ve tvaru -ige, vyslovuje se g jako [g]: niedrige (nídrige) Bänke.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 20: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.title
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přednáška 4
- **DE source:** lesson
- **LV reference:** —
- **Problem:** Přednáška znamená lecture; německé lesson se v tomto kurzu překládá jako lekce.
- **Recommended CS:** Lekce 4
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 21: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.dialogues
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Byl legt das Mädchen hin?
- **DE source:** Wo legt das Mädchen ... hin?
- **LV reference:** —
- **Problem:** Byl je české slovo a v německé otázce nahrazuje správné tázací slovo Wo.
- **Recommended CS:** Wo legt das Mädchen hin?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 22: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.dialogues
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Byl legt du hin?
- **DE source:** Wo legst du hin?
- **LV reference:** —
- **Problem:** Byl je chybná kontaminace češtinou; německé tázací slovo je Wo.
- **Recommended CS:** Wo legst du hin?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 23: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.pronunciation
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Je-li h dlouhé, nevyslovuje se jako zvuk: nehmen (nēmen).
- **DE source:** H als Längenzeichen
- **LV reference:** —
- **Problem:** Písmeno h nemůže být „dlouhé“; zde jde o jeho funkci značky délky.
- **Recommended CS:** Je-li h pouze značkou délky, nevyslovuje se jako zvuk: nehmen (nēmen).
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 24: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.pronunciation
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** die (dī) Feder (fēder), den (dēn)
- **DE source:** die Feder
- **LV reference:** —
- **Problem:** Druhé e ve slově Feder se vyslovuje jako redukovaná samohláska, nikoli jako dlouhé e.
- **Recommended CS:** die (dī) Feder (fēdər), den (dēn)
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 25: kurssLesson5

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson5
- **Field:** csText.title
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přednáška 5
- **DE source:** (lesson)
- **LV reference:** —
- **Problem:** Německé „lesson“ znamená „lekce“, nikoli „přednáška“.
- **Recommended CS:** Lekce 5
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 26: kurssLesson5

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson5
- **Field:** csText.legacyHtml.vocabulary[9]
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Die Lehrerin - učitel
- **DE source:** die Lehrerin – female teacher
- **LV reference:** —
- **Problem:** Německé ženské označení povolání vyžaduje český ženský rod.
- **Recommended CS:** Die Lehrerin – učitelka
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 27: kurssLesson5

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson5
- **Field:** csText.legacyHtml.vocabulary[10]
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Die Schülerin - školačka
- **DE source:** die Schülerin – female pupil/student
- **LV reference:** —
- **Problem:** „Školačka“ zužuje význam na dítě; neutrální překlad v této lekci je „žákyně“.
- **Recommended CS:** Die Schülerin – žákyně
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 28: kurssLesson5

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson5
- **Field:** csText.legacyHtml.pronunciation[2]
- **Severity:** MEDIUM
- **Status:** ORTHOGRAPHY
- **Current CS text:** SS se nazývá escet a vyslovuje se jako českýé s: groß (grōs), weiß (veis).
- **DE source:** ß is called Eszett and pronounced like s
- **LV reference:** —
- **Problem:** Text zaměňuje ß za SS a obsahuje gramatickou chybu „českýé s“.
- **Recommended CS:** ß se nazývá eszett a vyslovuje se jako české s: groß (grós), weiß (vais).
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: kurssLesson6

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson6
- **Field:** title
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přednáška 6
- **DE source:** (lesson)
- **LV reference:** Lesson 6
- **Problem:** Německé „lesson“ znamená „lekce“, nikoli „přednáška“; titul má být krátký a praktický.
- **Recommended CS:** Lekce 6
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 30: kurssLesson6

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson6
- **Field:** legacyHtml.vocabulary.Einige
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Einige (einige) - nějaký
- **DE source:** Einige Messer
- **LV reference:** einige
- **Problem:** Ve spojení „einige Messer“ znamená „einige“ množné „několik“, nikoli singulární „nějaký“.
- **Recommended CS:** Einige (einige) — několik
- **Rationale:** Luna linguistic audit (0.99 confidence)


_... un vēl 64 MEDIUM atradumi (skat. reports/temp/cs-kurs-audit/)._


### LOW (15)

### Finding 1: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Spielen — hrát si • Hrát
- **DE source:** spielen
- **LV reference:** —
- **Problem:** Druhé české heslo nemá být uprostřed položky psáno s velkým písmenem.
- **Recommended CS:** Spielen — hrát si • hrát
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 2: kurssLesson2

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson2
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** českýá hláska ploché e
- **DE source:** arbeiten, zeichnen
- **LV reference:** —
- **Problem:** „českýá“ je pravopisná chyba; správný tvar přídavného jména je „česká“.
- **Recommended CS:** česká hláska ploché e
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 3: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.vocabulary
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Stumpf (stumpf) - tupý, tupý
- **DE source:** stumpf
- **LV reference:** —
- **Problem:** Český význam je uveden dvakrát; duplicita zhoršuje studijní použitelnost.
- **Recommended CS:** Stumpf (stumpf) – tupý
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 4: kurssLesson4

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson4
- **Field:** csText.vocabulary
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Hinausgehen - jít ven, jít ven
- **DE source:** hinausgehen
- **LV reference:** —
- **Problem:** Český překlad je uveden dvakrát.
- **Recommended CS:** Hinausgehen – jít ven
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 5: kurssLesson5

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson5
- **Field:** csText.subtitle
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Wen?, akuzativ, sitzen, fragen a -in koncovka.
- **DE source:** Wen?, Akkusativ, sitzen, fragen und die Endung -in
- **LV reference:** —
- **Problem:** Chybný slovosled českého spojení „-in koncovka“; přirozeně „koncovka -in“.
- **Recommended CS:** Wen?, akuzativ, sitzen, fragen a koncovka -in.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: kurssLesson7

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson7
- **Field:** legacyHtml.vocabulary
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Zpívat - zpívat
- **DE source:** Singen — singen
- **LV reference:** —
- **Problem:** Dvě po sobě jdoucí stejné položky „Zpívat - zpívat“ jsou duplicitní a nepřidávají žádnou studijní informaci.
- **Recommended CS:** —
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: kurssLesson7

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson7
- **Field:** legacyHtml.vocabulary
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Das Lied (das lit) — píseň
- **DE source:** Das Lied
- **LV reference:** —
- **Problem:** Německé „Lied“ má dlouhé /í/; uvedený přepis „lit“ délku nesprávně zanedbává.
- **Recommended CS:** Das Lied (das lít) — píseň
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 8: kurssLesson8

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson8
- **Field:** csText.subtitle
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Zvratná slovesa, e → i/ie záměna a akuzativ.
- **DE source:** Reflexive verbs, e → i/ie change and accusative.
- **LV reference:** Zvratná slovesa, e → i/ie záměna a akuzativ.
- **Problem:** „Záměna“ je zde méně přirozená; „střídání“ přesněji popisuje změnu ve slovesném kmeni.
- **Recommended CS:** Zvratná slovesa, střídání e → i/ie a akuzativ
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 9: kurssLesson9

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson9
- **Field:** sections[2].items[3].text
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Pokud před podstatným jménem předchází zájmeno nebo číselné slovo, člen se nepoužije.
- **DE source:** Wenn vor dem Substantiv ein Pronomen oder Zahlwort steht, wird kein Artikel verwendet.
- **LV reference:** Pokud před podstatným jménem předchází zájmeno nebo číselné slovo, člen se nepoužije.
- **Problem:** Česká formulace je gramaticky i terminologicky nepřirozená: stojí a číslovka.
- **Recommended CS:** Pokud před podstatným jménem stojí zájmeno nebo číslovka, člen se nepoužije.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 10: kurssLesson12

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson12
- **Field:** sections[4].cards[4].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jak se jmenuješ
- **DE source:** Wie heißt du?
- **LV reference:** —
- **Problem:** Přímá otázka v češtině vyžaduje otazník.
- **Recommended CS:** Jak se jmenuješ?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: kurssLesson13

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson13
- **Field:** csText.sections[1].title
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Jména
- **DE source:** Namen
- **LV reference:** Jména
- **Problem:** V kontextu lekce jde o slovníček, nikoli o osobní jména.
- **Recommended CS:** Slovíčka
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 12: kurssLesson15

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson15
- **Field:** intro
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Patnáctá přednáška: sollen, dürfen, essen a ovocná slova.
- **DE source:** (lesson introduction)
- **LV reference:** —
- **Problem:** „Přednáška“ neodpovídá lekci a „ovocná slova“ je v češtině nepřirozené.
- **Recommended CS:** Patnáctá lekce: sollen, dürfen, essen a slovíčka o ovoci.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 13: kurssLesson16

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson16
- **Field:** title
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Přednáška 16
- **DE source:** (lesson)
- **LV reference:** —
- **Problem:** Pro běžný výukový kurz je „lekce“ přirozenější překlad než „přednáška“.
- **Recommended CS:** Lekce 16
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 14: kurssLesson16

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson16
- **Field:** intro
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Šestnáctá přednáška: dativ, geben, sich nähern a dativová cvičení.
- **DE source:** (lesson)
- **LV reference:** —
- **Problem:** „Přednáška“ je zde méně vhodné než „lekce“; „cvičení na dativ“ je přirozenější formulace.
- **Recommended CS:** Šestnáctá lekce: dativ, geben, sich nähern a cvičení na dativ.
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 15: kurssLesson21

- **Dataset:** kurs
- **Batch:** linguistic
- **Card/Index:** kurssLesson21
- **Field:** sections[1].title
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Jména
- **DE source:** Vocabulary section
- **LV reference:** —
- **Problem:** Sekce obsahuje slovní zásobu, nikoli jména osob nebo názvy.
- **Recommended CS:** Slovíčka
- **Rationale:** Luna linguistic audit (0.98 confidence)


## SOURCE_DE_ISSUES

_Nav SOURCE_DE_ISSUE atradumu._


## NEEDS_OWNER_REVIEW

_Nav NEEDS_OWNER_REVIEW atradumu._


## FALSE POSITIVES

_Nav dokumentētu FALSE_POSITIVE._

## GALA STATUSS

- 100% datasets auditēts: **JĀ**
- Neauditēti objekti: 0
- Audits pilnīgs: **JĀ**
- Production dati mainīti: **NĒ (0 izmaiņu)**
- DE READ-ONLY: **PASS**

---

_Audita datums: 2026-08-10_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-kurs-audit/_
