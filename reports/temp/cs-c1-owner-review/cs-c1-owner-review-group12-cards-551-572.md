# CS–DE C1 OWNER REVIEW — GROUP 12

- Cards: `551–572`
- Count: 22
- Mode: READ-ONLY export for OWNER linguistic review
- DE: READ-ONLY context only

## 01 — c1-Wehrersatzdienst-550

Production index: 550
Card ID: c1-Wehrersatzdienst-550
DE: Wehrersatzdienst
CURRENT CS: Civilní službu místo vojenské služby
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: csText
- CURRENT: Civilní službu místo vojenské služby
- Audit proposed replacement: Civilní služba místo vojenské služby
- Reason: The current Czech phrase is accusative; a standalone vocabulary translation requires the nominative form.
- Rule/category: GRAMMAR

### Cross-dataset finding

NONE

---

## 02 — c1-Weidenkätzchen-551

Production index: 551
Card ID: c1-Weidenkätzchen-551
DE: Weidenkätzchen
CURRENT CS: Mák
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: HIGH
- Field: csText
- CURRENT: Mák
- Audit proposed replacement: Kočičky
- Reason: Weidenkätzchen means willow catkins or pussy willow; mák means poppy.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 03 — c1-Weltanschauung-552

Production index: 552
Card ID: c1-Weltanschauung-552
DE: Weltanschauung
CURRENT CS: Pohled na svět
Card type: Simple
Has Study: NO

### Audit findings

Audit findings: NONE

### Cross-dataset finding

NONE

---

## 04 — c1-Wetterleuchten-553

Production index: 553
Card ID: c1-Wetterleuchten-553
DE: Wetterleuchten
CURRENT CS: Rez
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: HIGH
- Field: csText
- CURRENT: Rez
- Audit proposed replacement: Vzdálené blýskání
- Reason: Wetterleuchten is distant or heat lightning; rez means rust.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 05 — c1-widerrechtlich-554

Production index: 554
Card ID: c1-widerrechtlich-554
DE: widerrechtlich
CURRENT CS: Ilegální
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: csText
- CURRENT: Ilegální
- Audit proposed replacement: Protiprávní
- Reason: Widerrechtlich means contrary to the law; protiprávní is more precise than the broad, colloquial ilegální.
- Rule/category: TRANSLATION

### Cross-dataset finding

NONE

---

## 06 — c1-wiederherstellen-555

Production index: 555
Card ID: c1-wiederherstellen-555
DE: wiederherstellen
CURRENT CS: Obnovit • Obnovit
Card type: Simple
Has Study: NO

### Audit findings

Audit findings: NONE

### Cross-dataset finding

NONE

---

## 07 — c1-zusammenfallen-556

Production index: 556
Card ID: c1-zusammenfallen-556
DE: zusammenfallen
CURRENT CS: Zhroucení • Stát se
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: HIGH
- Field: csText
- CURRENT: Zhroucení • Stát se
- Audit proposed replacement: Zhroutit se • shodovat se
- Reason: The current forms are a noun and an incomplete phrase; the German verb means collapse or coincide.
- Rule/category: GRAMMAR

### Cross-dataset finding

NONE

---

## 08 — c1-zusammenstellen-557

Production index: 557
Card ID: c1-zusammenstellen-557
DE: zusammenstellen
CURRENT CS: Skládat
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: csText
- CURRENT: Skládat
- Audit proposed replacement: Sestavit
- Reason: For compiling or putting components together, sestavit is the precise Czech equivalent; skládat is too general.
- Rule/category: TRANSLATION

### Cross-dataset finding

NONE

---

## 09 — c1-zuschlag

Production index: 558
Card ID: c1-zuschlag
DE: Zuschlag
CURRENT CS: Prémie • Přirážka
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: study.translation
- CURRENT: Prémie • Přirážka
- Audit proposed replacement: Příplatek • Přirážka
- Reason: V uvedených dopravních, pracovních a cenových příkladech Zuschlag znamená příplatek, ne prémii.
- Rule/category: SEMANTICS

Finding 2
- Severity: LOW
- Field: study.tip
- CURRENT: ["Der Zuschlag = příplatek/příplatek (příplatek), nikoli příloha dokumentu.","Den Zuschlag erhalten (v aukcích) = vyhrát aukci/přijmout objednávku."]
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: Der Zuschlag = příplatek/příplatek (příplatek), nikoli příloha dokumentu.
- Audit proposed replacement: Der Zuschlag = příplatek nebo přirážka, nikoli příloha dokumentu.
- Reason: Text obsahuje opakování a nepřirozenou závorku místo jasného rozlišení významů.
- Rule/category: NATURALNESS

### Cross-dataset finding

NONE

---

## 10 — c1-beziehen-sich-beziehen-auf

Production index: 559
Card ID: c1-beziehen-sich-beziehen-auf
DE: beziehen / sich beziehen auf
CURRENT CS: Aplikovat • Aplikovat na
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.translation
- CURRENT: Aplikovat • Aplikovat na
- Audit proposed replacement: Pobírat • Vztahovat se na
- Reason: Beziehen znamená mimo jiné pobírat nebo nastěhovat se; sich beziehen auf znamená vztahovat se na, ne aplikovat.
- Rule/category: TRANSLATION

Finding 2
- Severity: HIGH
- Field: study.explanation
- CURRENT: ["Hlavní myšlenka: Formální registr: atribut zdroje, pravidelný příjem o důchodu/platu nebo stěhování do bytu.","Příklady hledají typické každodenní použití.","V případě pochybností zkontrolujte, zda se jedná o stav nebo akci.","Kontext a postup určují správnou volbu."]
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: Hlavní myšlenka: Formální registr: atribut zdroje, pravidelný příjem o důchodu/platu nebo stěhování do bytu.
- Audit proposed replacement: Hlavní myšlenka: Formální registr: vztahovat se na zdroj, pobírat důchod nebo plat, případně se nastěhovat do bytu.
- Reason: „Atribut zdroje“ je chybná formulace a „příjem o důchodu/platu“ má být „pobírat důchod nebo plat“.
- Rule/category: SEMANTICS

Finding 3
- Severity: HIGH
- Field: study.examples[0].lv
- CURRENT: 
- Audit proposed replacement: Pobírat • Vztahovat se na
- Reason: Příklad není německá věta a opakuje chybný překlad; karta neposkytuje použitelný studijní příklad.
- Rule/category: STUDY

### Cross-dataset finding

NONE

---

## 11 — c1-beabsichtigen

Production index: 560
Card ID: c1-beabsichtigen
DE: beabsichtigen
CURRENT CS: Zamýšlet • Plánovat
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Co zamýšlíte tímto opatřením?
- Reason: Význam i vykání jsou chybné: Maßnahme je opatření a beabsichtigen zde znamená zamýšlet, ne myslet.
- Rule/category: TRANSLATION

Finding 2
- Severity: MEDIUM
- Field: study.explanation[4]
- CURRENT: 
- Audit proposed replacement: Beabsichtigen znamená záměrně zamýšlet nebo plánovat akci – nejde o vztah, ale o záměr.
- Reason: Spojení „ne vztah“ je v češtině eliptické a nepřirozené; vhodná je plná věta.
- Rule/category: NATURALNESS

Finding 3
- Severity: HIGH
- Field: study.tip[1]
- CURRENT: 
- Audit proposed replacement: Beabsichtigen = zamýšlet
- Reason: Myslet neodpovídá významu německého slovesa; beabsichtigen znamená zamýšlet nebo mít v úmyslu.
- Rule/category: SEMANTICS

Finding 4
- Severity: MEDIUM
- Field: study.important[0]
- CURRENT: 
- Audit proposed replacement: Beabsichtigen + zu + infinitiv: Er beabsichtigt zu gehen.
- Reason: „Nepravidelnost“ je chybný překlad; německé nenoteiksme znamená infinitiv.
- Rule/category: GRAMMAR

### Cross-dataset finding

NONE

---

## 12 — c1-unterstellen

Production index: 561
Card ID: c1-unterstellen
DE: unterstellen
CURRENT CS: Obviňovat • Přičítat bez podkladu
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.examples[0].lv
- CURRENT: 
- Audit proposed replacement: Přičítají mi špatné úmysly.
- Reason: Německá věta vyjadřuje, že někdo mluvčímu něco připisuje, ne pouze jeho pasivní obvinění.
- Rule/category: TRANSLATION

Finding 2
- Severity: HIGH
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Nic mi nepodsouvejte!
- Reason: Sloveso obviňovat vyžaduje jinou vazbu; „nic mě neobviňujte“ je gramaticky chybné.
- Rule/category: GRAMMAR

Finding 3
- Severity: MEDIUM
- Field: study.examples[2].lv
- CURRENT: 
- Audit proposed replacement: Nikomu by se neměla bezdůvodně přičítat zrada.
- Reason: Pasivní konstrukce je možná, ale nepřesně stírá vazbu jemandem etwas unterstellen a zní nepřirozeně.
- Rule/category: NATURALNESS

Finding 4
- Severity: HIGH
- Field: study.examples[3].lv
- CURRENT: 
- Audit proposed replacement: Je mu přičítána nevěra.
- Reason: Untreue znamená nevěru, nikoli nedůvěru; zároveň je vhodné zachovat německou vazbu.
- Rule/category: TRANSLATION

Finding 5
- Severity: HIGH
- Field: study.examples[4].lv
- CURRENT: 
- Audit proposed replacement: Neoprávněné obvinění • Předpoklad
- Reason: Vina je zde nepřesná formulace a voraussetzen znamená předpokládat, ne předpovídat.
- Rule/category: TRANSLATION

Finding 6
- Severity: HIGH
- Field: study.explanation[2]
- CURRENT: 
- Audit proposed replacement: Často charakterizováno: obviňováním / připisováním.
- Reason: „Přitažlivost“ je významový omyl; v tomto kontextu jde o připisování vlastnosti či úmyslu.
- Rule/category: TRANSLATION

### Cross-dataset finding

NONE

---

## 13 — c1-voraussetzen

Production index: 562
Card ID: c1-voraussetzen
DE: voraussetzen
CURRENT CS: Brát jako podmínku
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: study.sectionAccents.explanation
- CURRENT: {"green":["voraussetzen","voraus"],"purple":["Hlavní"]}
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: voraus
- Audit proposed replacement: (term matching Czech section text)
- Reason: Accent term "voraus" not found in section text
- Rule/category: FINDING

Finding 2
- Severity: MEDIUM
- Field: study.examples[0].lv
- CURRENT: 
- Audit proposed replacement: Předpokládáme základní znalosti.
- Reason: Překlad je srozumitelný, ale „akceptovat jako předpoklad“ není přirozená česká vazba pro voraussetzen.
- Rule/category: NATURALNESS

Finding 3
- Severity: MEDIUM
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Předpokládáme základní znalosti.
- Reason: Česká věta působí kalkově; běžná a přesná formulace je „předpokládáme základní znalosti“.
- Rule/category: NATURALNESS

Finding 4
- Severity: MEDIUM
- Field: study.tip[0]
- CURRENT: 
- Audit proposed replacement: Voraussetzen = předpokládat
- Reason: „Předpokládat předpoklad“ je tautologické a v češtině nepřirozené.
- Rule/category: NATURALNESS

Finding 5
- Severity: HIGH
- Field: study.important[0]
- CURRENT: 
- Audit proposed replacement: Voraussetzen je sloveso znamenající „předpokládat“; vyjadřuje předpoklad.
- Reason: Text obsahuje nesmyslné gramatické tvrzení a nesprávně označuje sloveso jako předložku.
- Rule/category: SEMANTICS

### Cross-dataset finding

Cross-dataset 1
- DE: voraussetzen
- Severity: HIGH
- Variants: vyžadovat • být předpokladem | brát jako podmínku
- Locations: b2:b2-voraussetzen-1988, c1:c1-voraussetzen

---

## 14 — c1-bewahren

Production index: 563
Card ID: c1-bewahren
DE: bewahren
CURRENT CS: Chránit • Chránit
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.translation
- CURRENT: Chránit • Chránit
- Audit proposed replacement: Chránit • Zachovat
- Reason: Oba české významy jsou duplicitní; druhý význam bewahren je zachovat či uchovat.
- Rule/category: SEMANTICS

Finding 2
- Severity: MEDIUM
- Field: study.examples[0].lv
- CURRENT: 
- Audit proposed replacement: Zachováváme tradice.
- Reason: Bewahren zde znamená zachovávat tradice, nikoli dodržovat pravidla či tradice.
- Rule/category: TRANSLATION

Finding 3
- Severity: HIGH
- Field: study.examples[4].lv
- CURRENT: 
- Audit proposed replacement: Chránit/zachovat • Udržovat v platnosti
- Reason: České pole obsahuje německé slovo; jeho český ekvivalent je „udržovat v platnosti“.
- Rule/category: SECTIONACCENTS_LANGUAGE

Finding 4
- Severity: MEDIUM
- Field: study.important[2]
- CURRENT: 
- Audit proposed replacement: Bewahren → chránit, zachovat.
- Reason: Výčet významů opakuje „chránit“ a neuvádí význam zachovat.
- Rule/category: NATURALNESS

### Cross-dataset finding

NONE

---

## 15 — c1-aufrechterhalten

Production index: 564
Card ID: c1-aufrechterhalten
DE: aufrechterhalten
CURRENT CS: Zachovat v platnosti
Card type: standardStudy
Has Study: YES

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: study.sectionAccents.explanation
- CURRENT: {"green":["aufrechterhalten","erhält","auf"]}
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: erhält
- Audit proposed replacement: (term matching Czech section text)
- Reason: Accent term "erhält" not found in section text
- Rule/category: FINDING

Finding 2
- Severity: MEDIUM
- Field: study.sectionAccents.explanation
- CURRENT: {"green":["aufrechterhalten","erhält","auf"]}
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: auf
- Audit proposed replacement: (term matching Czech section text)
- Reason: Accent term "auf" not found in section text
- Rule/category: FINDING

Finding 3
- Severity: MEDIUM
- Field: study.examples[0].lv
- CURRENT: 
- Audit proposed replacement: Stát udržuje pořádek.
- Reason: U českého spojení „udržovat pořádek“ se „v platnosti“ nepoužívá; jde o významově zbytečný kalk.
- Rule/category: NATURALNESS

Finding 4
- Severity: HIGH
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Je třeba udržovat provoz v chodu.
- Reason: Betrieb znamená provoz, nikoli akci; český překlad také nepřirozeně používá „ponechat v platnosti“.
- Rule/category: TRANSLATION

Finding 5
- Severity: MEDIUM
- Field: study.examples[2].lv
- CURRENT: 
- Audit proposed replacement: Stát udržuje pořádek.
- Reason: U českého spojení „udržovat pořádek“ se „v platnosti“ nepoužívá; jde o významově zbytečný kalk.
- Rule/category: NATURALNESS

Finding 6
- Severity: HIGH
- Field: study.explanation[2]
- CURRENT: 
- Audit proposed replacement: Často charakterizováno: udržováním stavu.
- Reason: Kondice je chybný významový posun; aufrechterhalten se týká zachování stavu, systému či vztahu.
- Rule/category: TRANSLATION

### Cross-dataset finding

NONE

---

## 16 — c1-Hektar-565

Production index: 565
Card ID: c1-Hektar-565
DE: Hektar
CURRENT CS: Hektar
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: LOW
- Field: csText
- CURRENT: Hektar
- Audit proposed replacement: hektar
- Reason: V češtině se obecné podstatné jméno píše s malým počátečním písmenem.
- Rule/category: ORTHOGRAPHY

### Cross-dataset finding

NONE

---

## 17 — c1-Karre-566

Production index: 566
Card ID: c1-Karre-566
DE: Karre
CURRENT CS: Kolečko
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: HIGH
- Field: csText
- CURRENT: Kolečko
- Audit proposed replacement: kára
- Reason: Kolečko znamená především wheelbarrow; německé Karre odpovídá spíše českému kára.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 18 — c1-Karren-567

Production index: 567
Card ID: c1-Karren-567
DE: Karren
CURRENT CS: Kolečko
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: HIGH
- Field: csText
- CURRENT: Kolečko
- Audit proposed replacement: kára
- Reason: Kolečko je významově užší; německé Karren označuje káru nebo vozík.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 19 — c1-Krüppel-568

Production index: 568
Card ID: c1-Krüppel-568
DE: Krüppel
CURRENT CS: Mrzák
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: LOW
- Field: csText
- CURRENT: Mrzák
- Audit proposed replacement: mrzák
- Reason: České obecné podstatné jméno se píše s malým počátečním písmenem; význam překladu je odpovídající.
- Rule/category: ORTHOGRAPHY

### Cross-dataset finding

NONE

---

## 20 — c1-Matsch-569

Production index: 569
Card ID: c1-Matsch-569
DE: Matsch
CURRENT CS: Bláto • Břečka
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: LOW
- Field: csText
- CURRENT: Bláto • Břečka
- Audit proposed replacement: bláto • břečka
- Reason: Obě česká obecná podstatná jména se píší s malým počátečním písmenem.
- Rule/category: ORTHOGRAPHY

### Cross-dataset finding

NONE

---

## 21 — c1-Panter-570

Production index: 570
Card ID: c1-Panter-570
DE: Panter
CURRENT CS: Panter
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: LOW
- Field: csText
- CURRENT: Panter
- Audit proposed replacement: panter
- Reason: České obecné podstatné jméno se píše s malým počátečním písmenem.
- Rule/category: ORTHOGRAPHY

### Cross-dataset finding

NONE

---

## 22 — c1-Panther-571

Production index: 571
Card ID: c1-Panther-571
DE: Panther
CURRENT CS: Panter
Card type: Simple
Has Study: NO

### Audit findings

Finding 1
- Severity: LOW
- Field: csText
- CURRENT: Panter
- Audit proposed replacement: panter
- Reason: České obecné podstatné jméno se píše s malým počátečním písmenem.
- Rule/category: ORTHOGRAPHY

### Cross-dataset finding

NONE

---
