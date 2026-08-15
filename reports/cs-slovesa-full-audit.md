# CS–DE Slovesa FULL AUDIT

## KOPSAVILKUMS

- Dataset: Slovesa
- Audit mode: READ-ONLY
- Total objects: 189
- Audited objects: 189
- Coverage: 100%
- Batch size: 50
- Batch count: 4
- CRITICAL: 2
- HIGH: 282
- MEDIUM: 123
- LOW: 11
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

**Deterministisko atradumu skaits:** 1

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 189/189 |
| Lingvistisko atradumu skaits | 417 |
| API pieprasījumi | 4 |
| Tokeni | 84524 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

(Nav attiecināms šim datasetam)

## SECTIONACCENTS VALIDĀCIJA

(Nav attiecināms)

## FINDINGS

### CRITICAL (2)

### Finding 1: verb-151

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-151
- **Field:** forms.infinitiv.csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** TAM
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Text „TAM“ není český překlad slovesa a nevyjadřuje jeho význam.
- **Recommended CS:** Strkat / tlačit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 2: verb-169

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-169
- **Field:** forms.infinitiv.csText
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Show
- **DE source:** weisen
- **LV reference:** rādīt
- **Problem:** Anglické slovo v českém poli je jazyková kontaminace; překlad má být český.
- **Recommended CS:** Ukázat
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (282)

### Finding 1: verb-3

- **Dataset:** slovesa
- **Batch:** 001-050
- **Card/Index:** verb-3
- **Field:** imperfektIndikativ
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Zakódoval
- **DE source:** er biss
- **LV reference:** viņš koda
- **Problem:** Foreign remnant in verb form imperfektIndikativ: PL_CHAR
- **Recommended CS:** (Czech form)
- **Rationale:** Slovesa audit

### Finding 2: verb-3

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-3
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** ORTHOGRAPHY
- **Current CS text:** Skus
- **DE source:** beißen
- **LV reference:** kost
- **Problem:** Skus není spisovný český infinitiv a navíc působí jako slovenská kontaminace.
- **Recommended CS:** Kousnout
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 3: verb-3

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-3
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zakódoval
- **DE source:** er biss
- **LV reference:** viņš koda
- **Problem:** Zakódoval znamená zakódoval; německé biss je minulý čas slovesa kousat.
- **Recommended CS:** Kousl
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 4: verb-3

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-3
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Kouše
- **DE source:** er bisse
- **LV reference:** viņš kostu
- **Problem:** Kouše je přítomný indikativ; německý konjunktiv vyjadřuje podmiňovací způsob.
- **Recommended CS:** Kousl by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 5: verb-4

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-4
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Skrýt
- **DE source:** bergen
- **LV reference:** slēpt
- **Problem:** Bergen znamená zachránit nebo vyzvednout, nikoli skrýt.
- **Recommended CS:** Zachránit
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 6: verb-4

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-4
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Schovává se
- **DE source:** er birgt
- **LV reference:** viņš slēpj
- **Problem:** Schovává se znamená ukrývá se; německé birgt zde znamená zachraňuje.
- **Recommended CS:** Zachraňuje
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: verb-4

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-4
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Schoval se
- **DE source:** er barg
- **LV reference:** viņš slēpa
- **Problem:** Barg není schoval se, ale zachránil nebo vyzvedl.
- **Recommended CS:** Zachránil
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 8: verb-4

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-4
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Schoval by se
- **DE source:** er bürge / er bärge
- **LV reference:** viņš slēptu
- **Problem:** Překlad zachovává chybný význam skrývání a navíc přidává reflexivitu.
- **Recommended CS:** Zachránil by
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 9: verb-4

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-4
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Skryté / uložené
- **DE source:** geborgen
- **LV reference:** paslēpts / paglābts
- **Problem:** Geborgen znamená zachráněný nebo v bezpečí, ne skrytý či uložený.
- **Recommended CS:** Zachráněný
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 10: verb-5

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-5
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vybuchl
- **DE source:** er barst / er borst
- **LV reference:** viņš plīsa
- **Problem:** Bersten znamená prasknout nebo puknout, nikoli vybuchnout.
- **Recommended CS:** Praskl
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: verb-7

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-7
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Ukloní se
- **DE source:** er biegt
- **LV reference:** viņš loka
- **Problem:** Ukloní se znamená pokloní se; biegen znamená ohýbat.
- **Recommended CS:** Ohýbá
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 12: verb-8

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-8
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Slíbit
- **DE source:** bieten
- **LV reference:** solīt
- **Problem:** Bieten znamená nabídnout, zatímco slíbit odpovídá německému versprechen.
- **Recommended CS:** Nabídnout
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 13: verb-8

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-8
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Slibuje
- **DE source:** er bietet
- **LV reference:** viņš sola
- **Problem:** Slibuje znamená slibuje; bieten znamená nabízí.
- **Recommended CS:** Nabízí
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 14: verb-8

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-8
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Slíbil
- **DE source:** er bot
- **LV reference:** viņš solīja
- **Problem:** Slíbil je významově jiné sloveso; bot je minulý čas nabídnout.
- **Recommended CS:** Nabídl
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 15: verb-8

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-8
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Slíbil by
- **DE source:** er böte
- **LV reference:** viņš solītu
- **Problem:** Překlad zachovává chybný význam slibu místo nabídky.
- **Recommended CS:** Nabídl by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 16: verb-9

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-9
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Síto
- **DE source:** binden
- **LV reference:** siet
- **Problem:** Síto je podstatné jméno; binden znamená vázat.
- **Recommended CS:** Vázat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 17: verb-9

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-9
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** ORTHOGRAPHY
- **Current CS text:** On seno
- **DE source:** er bindet
- **LV reference:** viņš sien
- **Problem:** Současný text je chybný a nesrozumitelný; správně je on váže.
- **Recommended CS:** On váže
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 18: verb-9

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-9
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zaséval
- **DE source:** er band
- **LV reference:** viņš sēja
- **Problem:** Zaséval znamená sowal; band je minulý čas vázat.
- **Recommended CS:** Vázal
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 19: verb-9

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-9
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Proséval
- **DE source:** er bände
- **LV reference:** viņš sietu
- **Problem:** Proséval znamená prosíval nebo proséval; neodpovídá bind.
- **Recommended CS:** Vázal by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 20: verb-9

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-9
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Síto
- **DE source:** gebunden
- **LV reference:** siets
- **Problem:** Síto je podstatné jméno; gebunden znamená svázaný nebo vázaný.
- **Recommended CS:** Svázaný
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 21: verb-10

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-10
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zeptat se
- **DE source:** bitten
- **LV reference:** lūgt
- **Problem:** Zeptat se znamená fragen; bitten znamená prosit nebo požádat.
- **Recommended CS:** Prosit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 22: verb-10

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-10
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zeptal se
- **DE source:** er bat
- **LV reference:** viņš lūdza
- **Problem:** Bat je minulý čas prosit/požádat, nikoli zeptat se.
- **Recommended CS:** Požádal
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 23: verb-10

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-10
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Modlil by se
- **DE source:** er bäte
- **LV reference:** viņš lūgtu
- **Problem:** Modlil by se znamená modlil by se; bäte znamená požádal by nebo prosil by.
- **Recommended CS:** Požádal by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 24: verb-12

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-12
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Bylo by to hořké
- **DE source:** es göre / es gärte
- **LV reference:** tas rūgtu
- **Problem:** Hořké znamená bitter; německý tvar je kondicionál slovesa kvasit.
- **Recommended CS:** Kvasilo by to
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 25: verb-12

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-12
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Žito
- **DE source:** gegoren / gegärt
- **LV reference:** rūdzis
- **Problem:** Žito je obilnina; německé příčestí znamená vykvašené nebo zkvašené.
- **Recommended CS:** Vykvašené
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 26: verb-13

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-13
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** V jejím lůně
- **DE source:** sie gebiert
- **LV reference:** viņa dzemdē
- **Problem:** V jejím lůně není slovesný překlad; gebiert znamená rodí nebo porodí.
- **Recommended CS:** Rodí
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 27: verb-19

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-19
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Poručík
- **DE source:** gießen
- **LV reference:** liet
- **Problem:** Poručík je vojenská hodnost; gießen znamená lít nebo nalévat.
- **Recommended CS:** Lít
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 28: verb-19

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-19
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Prší
- **DE source:** er gösse
- **LV reference:** viņš lietu
- **Problem:** Prší znamená prší; gösse je kondicionál slovesa lít.
- **Recommended CS:** Lil by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 29: verb-19

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-19
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Věc
- **DE source:** gegossen
- **LV reference:** liets
- **Problem:** Věc je podstatné jméno; gegossen znamená litý nebo odlitý.
- **Recommended CS:** Litý
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 30: verb-20

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-20
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Napodoboval
- **DE source:** er glich
- **LV reference:** viņš līdzinājās
- **Problem:** Napodoboval znamená imitoval; gleichen znamená podobat se.
- **Recommended CS:** Podobal se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 31: verb-20

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-20
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Napodoboval by
- **DE source:** er gliche
- **LV reference:** viņš līdzinātos
- **Problem:** Překlad používá význam napodobování místo podobnosti.
- **Recommended CS:** Podobal by se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 32: verb-22

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-22
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Řeřavý
- **DE source:** glimmen
- **LV reference:** kvēlot
- **Problem:** Řeřavý je přídavné jméno; německý výraz je slovesný infinitiv.
- **Recommended CS:** Žhnout
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 33: verb-22

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-22
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Září
- **DE source:** er glimmt
- **LV reference:** viņš kvēlo
- **Problem:** Září znamená svítí; glimmen znamená žhnout nebo doutnat.
- **Recommended CS:** Žhne
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 34: verb-22

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-22
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zářil
- **DE source:** er glimmte / er glomm
- **LV reference:** viņš kvēloja
- **Problem:** Zářil znamená svítil; glimmte/glomm znamená žhnul nebo doutnal.
- **Recommended CS:** Žhnul
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 35: verb-22

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-22
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zářil by
- **DE source:** er glimmte
- **LV reference:** viņš kvēlotu
- **Problem:** Překlad používá význam záření místo žhnutí.
- **Recommended CS:** Žhnul by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 36: verb-25

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-25
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Řezat
- **DE source:** hauen
- **LV reference:** cirst
- **Problem:** Řezat znamená schneiden; hauen zde znamená sekat nebo udeřit.
- **Recommended CS:** Sekat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 37: verb-25

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-25
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vybral
- **DE source:** er haut
- **LV reference:** viņš cērt
- **Problem:** Vybral znamená zvolil; haut znamená seká nebo udeřuje.
- **Recommended CS:** Seká
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 38: verb-25

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-25
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vyštěkl
- **DE source:** er hieb
- **LV reference:** viņš cirta
- **Problem:** Vyštěkl znamená řekl ostře nebo zaštěkal; hieb znamená udeřil či sekal.
- **Recommended CS:** Udeřil
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 39: verb-25

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-25
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vyřezal by
- **DE source:** er hiebe
- **LV reference:** viņš cirstu
- **Problem:** Vyřezal by znamená vyřezal; hiebe je kondicionál udeřit nebo sekat.
- **Recommended CS:** Udeřil by
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 40: verb-25

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-25
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vyřezávané
- **DE source:** gehauen
- **LV reference:** cirsts
- **Problem:** Vyřezávané znamená carved; gehauen znamená sekané nebo udeřené.
- **Recommended CS:** Sekané
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 41: verb-26

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-26
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Přinesl
- **DE source:** er hob
- **LV reference:** viņš cēla
- **Problem:** Přinesl znamená brought; hob je minulý čas zvednout.
- **Recommended CS:** Zvedl
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 42: verb-26

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-26
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Postavil by
- **DE source:** er höbe
- **LV reference:** viņš celtu
- **Problem:** Postavil by znamená erected; höbe znamená zvedl by.
- **Recommended CS:** Zvedl by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 43: verb-26

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-26
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Postavený
- **DE source:** gehoben
- **LV reference:** celts
- **Problem:** Postavený znamená erected; gehoben znamená zvednutý.
- **Recommended CS:** Zvednutý
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 44: verb-27

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-27
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vědět / vědět
- **DE source:** kennen
- **LV reference:** pazīt / zināt
- **Problem:** Kennen znamená znát; vědět odpovídá německému wissen. Překlad je navíc duplicitní.
- **Recommended CS:** Znát
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 45: verb-27

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-27
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Ví
- **DE source:** er kennt
- **LV reference:** viņš pazīst
- **Problem:** Ví znamená weiß; kennt znamená zná.
- **Recommended CS:** Zná
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 46: verb-27

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-27
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Věděl
- **DE source:** kannte
- **LV reference:** pazina
- **Problem:** Věděl odpovídá wissen; kante je minulý čas znát.
- **Recommended CS:** Znal
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 47: verb-27

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-27
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Věděl
- **DE source:** kannte
- **LV reference:** pazina
- **Problem:** Tvar neodpovídá významu kennen ani podmiňovacímu způsobu.
- **Recommended CS:** Znal by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 48: verb-27

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-27
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Známost
- **DE source:** gekannt
- **LV reference:** pazinis
- **Problem:** Známost je podstatné jméno; gekannt znamená znal nebo poznal.
- **Recommended CS:** Znal
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 49: verb-29

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-29
- **Field:** forms.praesens.csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vtipkuje
- **DE source:** er kneift
- **LV reference:** viņš kniebj
- **Problem:** Vtipkuje znamená žertuje; kneifen znamená štípat nebo svírat.
- **Recommended CS:** Štípe
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 50: verb-30

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-30
- **Field:** forms.infinitiv.csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Pobyt
- **DE source:** bleiben
- **LV reference:** palikt
- **Problem:** Pobyt je podstatné jméno; německý výraz je infinitiv.
- **Recommended CS:** Zůstat
- **Rationale:** Luna linguistic audit (1 confidence)


_... un vēl 232 HIGH atradumi (skat. reports/temp/cs-slovesa-audit/)._


### MEDIUM (123)

### Finding 1: verb-0

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-0
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Smažené / pečené
- **DE source:** gebacken
- **LV reference:** cepts / izcepts
- **Problem:** Smažené znamená smažené, nikoli pečené; německé gebacken odpovídá pečené.
- **Recommended CS:** Pečené
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 2: verb-1

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-1
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Přikázal
- **DE source:** befohlen
- **LV reference:** pavēlēts
- **Problem:** Přikázal je minulý čas, nikoli příčestí; befohlen zde znamená nařízeno.
- **Recommended CS:** Nařízeno
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 3: verb-2

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-2
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Začala
- **DE source:** begonnen
- **LV reference:** sākts
- **Problem:** Začala je ženský rod a minulý čas; pro neutrální es begonnen je vhodné začalo.
- **Recommended CS:** Začalo
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 4: verb-5

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-5
- **Field:** forms.infinitiv.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Prasknutí
- **DE source:** bersten
- **LV reference:** plīst
- **Problem:** Prasknutí je podstatné jméno; německý výraz je infinitiv.
- **Recommended CS:** Prasknout
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 5: verb-5

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-5
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Praskne
- **DE source:** er bärste / er börste
- **LV reference:** viņš plīstu
- **Problem:** Praskne je indikativ; německý konjunktiv vyžaduje český kondicionál.
- **Recommended CS:** Praskl by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 6: verb-5

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-5
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zlomený
- **DE source:** geborsten (er ist)
- **LV reference:** saplīsis
- **Problem:** Zlomený odpovídá zlomení; geborsten znamená prasklý nebo puklý.
- **Recommended CS:** Prasklý
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 7: verb-6

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-6
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Naléhal
- **DE source:** er bewog
- **LV reference:** viņš pamudināja
- **Problem:** Naléhal znamená naléhal; bewog zde znamená pohnul nebo povzbudil.
- **Recommended CS:** Povzbudil
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 8: verb-7

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-7
- **Field:** forms.infinitiv.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Ohyb
- **DE source:** biegen
- **LV reference:** locīt
- **Problem:** Ohyb je podstatné jméno; německý výraz je infinitiv.
- **Recommended CS:** Ohýbat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 9: verb-7

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-7
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Prohnul se
- **DE source:** er bog
- **LV reference:** viņš locīja
- **Problem:** Přidaná reflexivita mění význam; německé er bog je bez se.
- **Recommended CS:** Ohnul
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 10: verb-8

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-8
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Slíbil / nabídl
- **DE source:** geboten
- **LV reference:** solīts / piedāvāts
- **Problem:** Slíbil je minulý čas a neodpovídá významu; geboten zde znamená nabídnuto.
- **Recommended CS:** Nabídnuto
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: verb-10

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-10
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Vyžádáno
- **DE source:** gebeten
- **LV reference:** lūgts
- **Problem:** Vyžádáno vyjadřuje jiný význam; pro gebeten je vhodné požádáno nebo vyprošeno.
- **Recommended CS:** Požádáno
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 12: verb-12

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-12
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Fermentuje to
- **DE source:** es gor / es gärte
- **LV reference:** tas rūga
- **Problem:** Současný text je přítomný čas, zatímco německý tvar je minulý.
- **Recommended CS:** Kvasilo to
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 13: verb-13

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-13
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Narodil se / narodil se
- **DE source:** geboren
- **LV reference:** dzemdēts / piedzimis
- **Problem:** Překlad je dvakrát stejný a narodil se je minulý čas, nikoli příčestí.
- **Recommended CS:** Narozený
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 14: verb-14

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-14
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Fungovalo to
- **DE source:** es gelang
- **LV reference:** tas izdevās
- **Problem:** Fungovalo to znamená fungovalo; gelang znamená podařilo se.
- **Recommended CS:** Podařilo se
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 15: verb-14

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-14
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Šlo by to
- **DE source:** es gelänge
- **LV reference:** tas izdotos
- **Problem:** Šlo by to je obecnější a mění význam; gelänge znamená podařilo by se.
- **Recommended CS:** Podařilo by se
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 16: verb-14

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-14
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Podařilo
- **DE source:** gelungen (es ist)
- **LV reference:** izdevies
- **Problem:** Chybí zvratné se; české podařilo je bez něj neúplné.
- **Recommended CS:** Podařilo se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 17: verb-15

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-15
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Hodil / byl fit
- **DE source:** er galt
- **LV reference:** viņš derēja / bija spēkā
- **Problem:** Byl fit znamená tělesně zdatný; gelten zde znamená být platný nebo platit.
- **Recommended CS:** Platilo / platil
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 18: verb-15

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-15
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Použito / bylo platné
- **DE source:** gegolten
- **LV reference:** derējis / bijis spēkā
- **Problem:** Použito znamená used; gegolten zde znamená platilo nebo bylo platné.
- **Recommended CS:** Platilo
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 19: verb-16

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-16
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Uzdrav se
- **DE source:** genesen (er ist)
- **LV reference:** izveseļojies
- **Problem:** Uzdrav se je rozkazovací způsob; genesen znamená uzdravený nebo zotavený.
- **Recommended CS:** Uzdravený
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 20: verb-17

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-17
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Užil si
- **DE source:** genossen
- **LV reference:** baudīts
- **Problem:** Užil si je minulý čas; zde je potřeba příčestí vyjadřující vychutnaný děj.
- **Recommended CS:** Vychutnaný
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 21: verb-18

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-18
- **Field:** forms.praesens.csText
- **Severity:** MEDIUM
- **Status:** ASPECT
- **Current CS text:** Stane se to
- **DE source:** es geschieht
- **LV reference:** tas notiek
- **Problem:** Stane se to je budoucí nebo dokonavý děj; geschieht je přítomné děje se.
- **Recommended CS:** Děje se to
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 22: verb-18

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-18
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Stalo
- **DE source:** geschehen (es ist)
- **LV reference:** noticis
- **Problem:** Chybí zvratné se; samotné stalo je neúplný překlad.
- **Recommended CS:** Stalo se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 23: verb-19

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-19
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** ASPECT
- **Current CS text:** Nalil
- **DE source:** er goss
- **LV reference:** viņš lēja
- **Problem:** Nalil je dokonavé a znamená nalil; goss odpovídá nedokonavému lil.
- **Recommended CS:** Lil
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 24: verb-20

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-20
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Podobal
- **DE source:** geglichen
- **LV reference:** līdzinājies
- **Problem:** Podobal je minulý čas; vhodný přídavný tvar je podobný.
- **Recommended CS:** Podobný
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 25: verb-21

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-21
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Uklouzl
- **DE source:** geglitten (er ist)
- **LV reference:** slīdējis
- **Problem:** Uklouzl znamená uklouzl nebo upadl; gleiten znamená klouzat.
- **Recommended CS:** Klouzal
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 26: verb-22

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-22
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Řeřavý
- **DE source:** geglimmt / geglommen
- **LV reference:** kvēlojis
- **Problem:** Řeřavý je sice významově blízké, ale není příčestí; vhodnější je rozžhavený.
- **Recommended CS:** Rozžhavený
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 27: verb-24

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-24
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Chytil by se
- **DE source:** er griffe
- **LV reference:** viņš ķertu
- **Problem:** Překlad neoprávněně přidává zvratné se.
- **Recommended CS:** Chytil by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 28: verb-29

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-29
- **Field:** forms.imperfektKonjunktiv.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Štípl by se
- **DE source:** er kniffe
- **LV reference:** viņš kniebtu
- **Problem:** Překlad neoprávněně přidává zvratné se.
- **Recommended CS:** Štípl by
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 29: verb-29

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-29
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Sevřený
- **DE source:** gekniffen
- **LV reference:** kniebts
- **Problem:** Sevřený znamená clenched; gekniffen zde znamená štípnutý.
- **Recommended CS:** Štípnutý
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 30: verb-31

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-31
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Vybělené
- **DE source:** blich
- **LV reference:** balināja
- **Problem:** Vybělené je přídavné jméno, nikoli minulý čas; blich znamená vybledl.
- **Recommended CS:** Vybledl
- **Rationale:** Luna linguistic audit (0.98 confidence)


_... un vēl 93 MEDIUM atradumi (skat. reports/temp/cs-slovesa-audit/)._


### LOW (11)

### Finding 1: verb-3

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-3
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Pokousaný / pokousaný
- **DE source:** gebissen
- **LV reference:** kosts / sakosts
- **Problem:** Význam je správný, ale překlad je omylem dvakrát identický.
- **Recommended CS:** Pokousaný
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 2: verb-11

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-11
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** Zafoukal
- **DE source:** er blies
- **LV reference:** viņš pūta
- **Problem:** Zafoukal je dokonavé jednorázové dění; blies odpovídá nedokonavému foukal.
- **Recommended CS:** Foukal
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 3: verb-17

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-17
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** LOW
- **Status:** ASPECT
- **Current CS text:** Užíval si
- **DE source:** er genoss
- **LV reference:** viņš baudīja
- **Problem:** Genoss vyjadřuje ukončený děj; užíval si je nedokonavé.
- **Recommended CS:** Užil si
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 4: verb-28

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-28
- **Field:** forms.infinitiv.csText
- **Severity:** LOW
- **Status:** ASPECT
- **Current CS text:** Zaznít
- **DE source:** klingen
- **LV reference:** skanēt
- **Problem:** Zaznít je dokonavé a znamená začít znít; obecné klingen odpovídá znít.
- **Recommended CS:** Znít
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 5: verb-33

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-33
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Zlomený / zlomený
- **DE source:** gebrochen
- **LV reference:** lauzts / salauzts
- **Problem:** Význam je správný, ale překlad je omylem dvakrát identický.
- **Recommended CS:** Zlomený
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 6: verb-46

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-46
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Sněden / sněden
- **DE source:** gegessen
- **LV reference:** ēsts / apēsts
- **Problem:** Překlad je duplicitní a současný tvar je méně přirozený než příčestí snědený.
- **Recommended CS:** Snědený
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: verb-47

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-47
- **Field:** forms.imperfektIndikativ.csText
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** Řídil
- **DE source:** er fuhr
- **LV reference:** viņš brauca
- **Problem:** Řídil znamená ovládal vozidlo; fuhr obecně znamená jel nebo cestoval.
- **Recommended CS:** Jel
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 8: verb-49

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-49
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Chycený / chycený
- **DE source:** gefangen
- **LV reference:** ķerts / noķerts
- **Problem:** Význam je správný, ale překlad je omylem dvakrát identický.
- **Recommended CS:** Chycený
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 9: verb-100

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-100
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Vytvořené
- **DE source:** geschaffen
- **LV reference:** radīts
- **Problem:** Samostatný překlad participia má být v základním mužském rodě, ne v neutru.
- **Recommended CS:** Vytvořený
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 10: verb-172

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-172
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Se stal
- **DE source:** geworden
- **LV reference:** kļuvis
- **Problem:** „Se stal“ je indikativní minulý tvar; pro participium je vhodnější „stal se“.
- **Recommended CS:** Stal se
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 11: verb-174

- **Dataset:** slovesa
- **Batch:** linguistic
- **Card/Index:** verb-174
- **Field:** forms.partizipVergangenheit.csText
- **Severity:** LOW
- **Status:** TRANSLATION
- **Current CS text:** Vážený
- **DE source:** gewogen
- **LV reference:** svērts
- **Problem:** „Vážený“ běžně znamená respektovaný; pro „gewogen“ je přesnější „zvážený“.
- **Recommended CS:** Zvážený
- **Rationale:** Luna linguistic audit (0.9 confidence)


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
_Pagaidu artefakti: reports/temp/cs-slovesa-audit/_
