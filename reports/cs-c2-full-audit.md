# CS–DE C2 FULL AUDIT

## KOPSAVILKUMS

- Dataset: C2
- Audit mode: READ-ONLY
- Total objects: 219
- Audited objects: 219
- Coverage: 100%
- Batch size: 50
- Batch count: 5
- CRITICAL: 0
- HIGH: 43
- MEDIUM: 31
- LOW: 1
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

**Deterministisko atradumu skaits:** 0

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 219/219 |
| Lingvistisko atradumu skaits | 75 |
| API pieprasījumi | 6 |
| Tokeni | 38371 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

- standardStudy: 1
- comparisonStudy: 0
- Study struktūras problēmas: 0

## SECTIONACCENTS VALIDĀCIJA

- sectionAccents atradumi: 0
- Statuss: PASS

## FINDINGS

### CRITICAL (0)

_Nav CRITICAL atradumu._


### HIGH (43)

### Finding 1: c2-konterkarieren-1

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-konterkarieren-1
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Rušit
- **DE source:** konterkarieren
- **LV reference:** izjaukt
- **Problem:** „Rušit“ znamená disturb/cancel, zatímco „konterkarieren“ znamená zmařit nebo mařit účinek něčeho.
- **Recommended CS:** Mařit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 2: c2-Stichhaltigkeit-2

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Stichhaltigkeit-2
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Rozumnost
- **DE source:** Stichhaltigkeit
- **LV reference:** pamatotība
- **Problem:** „Rozumnost“ znamená reasonableness; „Stichhaltigkeit“ označuje opodstatněnost, přesvědčivost nebo platnost argumentu.
- **Recommended CS:** Opodstatněnost
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 3: c2-veranschaulichen-5

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-veranschaulichen-5
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Prokazatelně ukázat
- **DE source:** veranschaulichen
- **LV reference:** uzskatāmi parādīt
- **Problem:** „Prokazatelně ukázat“ znamená demonstrably show; „veranschaulichen“ znamená ilustrovat nebo názorně znázornit.
- **Recommended CS:** Znázornit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 4: c2-Teilnehmerausweis-12

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Teilnehmerausweis-12
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Členská karta
- **DE source:** Teilnehmerausweis
- **LV reference:** dalībnieka apliecība
- **Problem:** „Členská karta“ znamená membership card; „Teilnehmerausweis“ je průkaz nebo identifikační karta účastníka.
- **Recommended CS:** Průkaz účastníka
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 5: c2-beaufsichtigen-14

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-beaufsichtigen-14
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Monitor
- **DE source:** beaufsichtigen
- **LV reference:** uzraudzīt
- **Problem:** „Monitor“ není český infinitiv a neodpovídá běžnému českému slovesu pro německé „beaufsichtigen“.
- **Recommended CS:** Dohlížet
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: c2-entgegenkommen-29

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-entgegenkommen-29
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Narazit
- **DE source:** entgegenkommen
- **LV reference:** nākt pretī
- **Problem:** „Narazit“ znamená narazit nebo bump into; „entgegenkommen“ v tomto významu znamená vyjít někomu vstříc.
- **Recommended CS:** Vyjít vstříc
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 7: c2-Katastrophendienst-44

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Katastrophendienst-44
- **Field:** csText
- **Severity:** HIGH
- **Status:** NATURALNESS
- **Current CS text:** Katastrofická služba
- **DE source:** Katastrophendienst
- **LV reference:** katastrofu dienests
- **Problem:** „Katastrofická služba“ je v češtině nepřirozené a znamená spíše catastrophic service; jde o službu při katastrofách.
- **Recommended CS:** Služba pro zvládání katastrof
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 8: c2-Krankheitssymptom-48

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Krankheitssymptom-48
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Příznakem onemocnění
- **DE source:** Krankheitssymptom
- **LV reference:** slimības simptoms
- **Problem:** „Příznakem“ je instrumentál; jako samostatný překlad podstatného jména je nutný nominativ „příznak“.
- **Recommended CS:** Příznak onemocnění
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 9: c2-Lungenentzündung-52

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Lungenentzündung-52
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Rakovina plic
- **DE source:** Lungenentzündung
- **LV reference:** plaušu karsonis
- **Problem:** „Rakovina plic“ znamená rakovina plic, nikoli zánět plic (pneumonie).
- **Recommended CS:** Zápal plic
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 10: c2-Schlafwagenzimmer-58

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Schlafwagenzimmer-58
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Ložnice
- **DE source:** Schlafwagenzimmer
- **LV reference:** guļamistaba
- **Problem:** Výraz označuje oddíl ve spacím voze, ne běžnou ložnici.
- **Recommended CS:** Kupé ve spacím voze
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 11: c2-Schlittschuhkufe-59

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Schlittschuhkufe-59
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Sklon saní
- **DE source:** Schlittschuhkufe
- **LV reference:** ragavu sliece
- **Problem:** „Schlittschuhkufe“ je nůž brusle, zatímco současný text označuje ližinu saní.
- **Recommended CS:** Bruslařský nůž
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 12: c2-selbstverständlich-61

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-selbstverständlich-61
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Samovysvětlující
- **DE source:** selbstverständlich
- **LV reference:** pats par sevi saprotams
- **Problem:** „Samovysvětlující“ znamená self-explanatory; německé slovo znamená samozřejmý nebo pochopitelný.
- **Recommended CS:** Samozřejmý
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 13: c2-sicherheitshalber-62

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-sicherheitshalber-62
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Pro bezpečnost
- **DE source:** sicherheitshalber
- **LV reference:** drošības labad
- **Problem:** Ustálený český ekvivalent pro „sicherheitshalber“ je „pro jistotu“, ne „pro bezpečnost“.
- **Recommended CS:** Pro jistotu
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 14: c2-Straßenunterführung-67

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Straßenunterführung-67
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Pěší tunel
- **DE source:** Straßenunterführung
- **LV reference:** gājēju tunelis
- **Problem:** Jde o podjezd pro silnici, nikoli pěší tunel.
- **Recommended CS:** Silniční podjezd
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 15: c2-Sehenswürdigkeit-76

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Sehenswürdigkeit-76
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Prominentní místo
- **DE source:** Sehenswürdigkeit
- **LV reference:** ievērojama vieta
- **Problem:** „Prominentní místo“ není běžný český ekvivalent pro turistickou nebo historickou pamětihodnost.
- **Recommended CS:** Pamětihodnost
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 16: c2-Abenteuergeschichte-77

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Abenteuergeschichte-77
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Příběh aféry
- **DE source:** Abenteuergeschichte
- **LV reference:** dēku stāsts
- **Problem:** „Příběh aféry“ označuje skandál nebo milostnou aféru, nikoli dobrodružný příběh.
- **Recommended CS:** Dobrodružný příběh
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 17: c2-Berufsbezeichnung-87

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Berufsbezeichnung-87
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Pracovní název
- **DE source:** Berufsbezeichnung
- **LV reference:** amata nosaukums
- **Problem:** „Pracovní název“ znamená pracovní nebo provizorní titul, ne název povolání.
- **Recommended CS:** Označení povolání
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 18: c2-Bereitschaftsdienst-101

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Bereitschaftsdienst-101
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Provozní služba
- **DE source:** Bereitschaftsdienst
- **LV reference:** operatīvais dienests
- **Problem:** „Provozní služba“ znamená operational service, nikoli službu konanou v pohotovosti.
- **Recommended CS:** Pohotovostní služba
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 19: c2-entgegengesetzt-112

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-entgegengesetzt-112
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Opak
- **DE source:** entgegengesetzt
- **LV reference:** pretējs
- **Problem:** „Opak“ je podstatné jméno; německé heslo je přídavné jméno.
- **Recommended CS:** Opačný
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 20: c2-Entschlossenheit-113

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Entschlossenheit-113
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Jistota • Rozhodnost • Nezpochybnitelnost
- **DE source:** Entschlossenheit
- **LV reference:** noteiktība • apņēmība • nešaubīgums
- **Problem:** „Jistota“ a „nezpochybnitelnost“ znamenají certainty/indisputability, nikoli rozhodnost či odhodlanost.
- **Recommended CS:** Rozhodnost • Odhodlanost
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 21: c2-Errungenschaft-117

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Errungenschaft-117
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Úspěch • Prospěch • Zisk
- **DE source:** Errungenschaft
- **LV reference:** sasniegums • ieguvums • guvums
- **Problem:** „Prospěch“ a „zisk“ znamenají benefit/profit; heslo označuje dosažený úspěch či výdobytek.
- **Recommended CS:** Úspěch • Výdobytek
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 22: c2-Fallschirmspringen-119

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Fallschirmspringen-119
- **Field:** csText
- **Severity:** HIGH
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Skydiving
- **DE source:** Fallschirmspringen
- **LV reference:** lēkšana ar izpletni
- **Problem:** „Skydiving“ je anglicismus, nikoli český překlad; význam odpovídá „seskok padákem“.
- **Recommended CS:** Seskok padákem
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 23: c2-Geistesgegenwart-131

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Geistesgegenwart-131
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vynalézavost
- **DE source:** Geistesgegenwart
- **LV reference:** attapība
- **Problem:** „Vynalézavost“ znamená ingenuity; „Geistesgegenwart“ označuje duchapřítomnost a pohotovou reakci.
- **Recommended CS:** Duchapřítomnost
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 24: c2-Dorfgemeinschaft-136

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Dorfgemeinschaft-136
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vesničané
- **DE source:** Dorfgemeinschaft
- **LV reference:** ciema iedzīvotāji
- **Problem:** „Vesničané“ jsou villagers; německé heslo označuje vesnickou komunitu či společenství.
- **Recommended CS:** Vesnická komunita
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 25: c2-Schiedsgericht-142

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Schiedsgericht-142
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Arbitráž
- **DE source:** Schiedsgericht
- **LV reference:** šķīrējtiesa
- **Problem:** „Arbitráž“ je rozhodčí řízení; německé slovo označuje rozhodčí soud či tribunál.
- **Recommended CS:** Rozhodčí soud
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 26: c2-Geschäftsordnung-144

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Geschäftsordnung-144
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Nařízení • Nařízení
- **DE source:** Geschäftsordnung
- **LV reference:** nolikums • reglaments
- **Problem:** „Nařízení“ znamená regulation/order a navíc se opakuje; správný ekvivalent je „jednací řád“.
- **Recommended CS:** Jednací řád
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 27: c2-gesellschaftlich-150

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-gesellschaftlich-150
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:**  • Veřejné společnosti
- **DE source:** gesellschaftlich
- **LV reference:** sabiedrisks • sabiedrības
- **Problem:** Výstup obsahuje prázdnou položku a „veřejné společnosti“ znamená public companies, nikoli společenský/sociální.
- **Recommended CS:** Společenský • Sociální
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 28: c2-Gesellschaftsordnung-151

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gesellschaftsordnung-151
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Veřejné zařízení
- **DE source:** Gesellschaftsordnung
- **LV reference:** sabiedriskā iekārta
- **Problem:** „Veřejné zařízení“ znamená public facility, nikoli společenský řád nebo uspořádání.
- **Recommended CS:** Společenské uspořádání
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: c2-Gesetzesvorlage-152

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gesetzesvorlage-152
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Účtovat
- **DE source:** Gesetzesvorlage
- **LV reference:** likumprojekts
- **Problem:** „Gesetzesvorlage“ je návrh zákona; „účtovat“ znamená charge nebo bill.
- **Recommended CS:** Návrh zákona
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 30: c2-Gewinnauszahlung-156

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gewinnauszahlung-156
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Výplata výher v loterii
- **DE source:** Gewinnauszahlung
- **LV reference:** loterijas laimesta izmaksa
- **Problem:** Německé „Gewinn“ zde znamená zisk nebo výnos; loterie je nepodložené zúžení významu.
- **Recommended CS:** Výplata zisku
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 31: c2-Hausgemeinschaft-161

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Hausgemeinschaft-161
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Rodinní příslušníci • Obyvatelé domu
- **DE source:** Hausgemeinschaft
- **LV reference:** ģimenes locekļi • mājas iedzīvotāji
- **Problem:** „Hausgemeinschaft“ neznamená rodinné příslušníky, ale společenství lidí žijících v jednom domě.
- **Recommended CS:** Společenství obyvatel domu
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 32: c2-Koalitionspartner-167

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Koalitionspartner-167
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Koaličním partnerem
- **DE source:** Koalitionspartner
- **LV reference:** koalīcijas partneris
- **Problem:** Samostatný překlad má být v základním tvaru; instrumentál „koaličním partnerem“ je v tomto poli chybný.
- **Recommended CS:** Koaliční partner
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 33: c2-Lebenserhaltungstrieb-170

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Lebenserhaltungstrieb-170
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Pohon života
- **DE source:** Lebenserhaltungstrieb
- **LV reference:** dzīvības dziņa
- **Problem:** „Pohon života“ není přirozený český termín; německé slovo označuje pud zachování života.
- **Recommended CS:** Pud zachování života
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 34: c2-Lebenshaltungskosten-171

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Lebenshaltungskosten-171
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Prostředky k obživě • Náklady
- **DE source:** Lebenshaltungskosten
- **LV reference:** iztikai nepieciešamie līdzekļi • izmaksas
- **Problem:** Výraz označuje náklady na živobytí; současné varianty jsou buď významově posunuté, nebo příliš obecné.
- **Recommended CS:** Životní náklady
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 35: c2-Meisterschaftsspiel-177

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Meisterschaftsspiel-177
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Mistrovský závod
- **DE source:** Meisterschaftsspiel
- **LV reference:** meistarsacīkstes
- **Problem:** „Spiel“ označuje zápas nebo utkání, nikoli závod.
- **Recommended CS:** Mistrovský zápas
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 36: c2-Pflichtversicherung-184

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Pflichtversicherung-184
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Povinné ručení
- **DE source:** Pflichtversicherung
- **LV reference:** obligātā apdrošināšana
- **Problem:** „Povinné ručení“ je pouze povinné pojištění odpovědnosti z provozu vozidla, nikoli obecné povinné pojištění.
- **Recommended CS:** Povinné pojištění
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 37: c2-populärwissenschaftlich-186

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-populärwissenschaftlich-186
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Populární věda
- **DE source:** populärwissenschaftlich
- **LV reference:** populārzinātnisks
- **Problem:** Německé slovo je přídavné jméno; „populární věda“ je podstatné jméno.
- **Recommended CS:** Populárněvědecký
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 38: c2-rechtsextremistisch-188

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-rechtsextremistisch-188
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Pravicový extremista
- **DE source:** rechtsextremistisch
- **LV reference:** labēji ekstrēmistisks
- **Problem:** Zdrojové slovo je přídavné jméno, zatímco současný překlad je označení osoby.
- **Recommended CS:** Pravicově extremistický
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 39: c2-Staatsangehörigkeit-196

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Staatsangehörigkeit-196
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Státnosti
- **DE source:** Staatsangehörigkeit
- **LV reference:** pavalstniecība
- **Problem:** „Státnosti“ znamená statehood; „Staatsangehörigkeit“ je státní příslušnost nebo občanství.
- **Recommended CS:** Státní příslušnost
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 40: c2-Vaterschaftsklage-200

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Vaterschaftsklage-200
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Žalobu o určení otcovství
- **DE source:** Vaterschaftsklage
- **LV reference:** sūdzība tiesā paternitātes noteikšanai
- **Problem:** Současný překlad je v akuzativu; heslový překlad vyžaduje nominativ „žaloba“.
- **Recommended CS:** Žaloba o určení otcovství
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 41: c2-instand-210

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-instand-210
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** V pořadí
- **DE source:** instand
- **LV reference:** kārtībā
- **Problem:** V pořadí znamená „in sequence“; instand znamená být v provozuschopném či řádném stavu.
- **Recommended CS:** V pořádku
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 42: c2-in Stand-211

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-in Stand-211
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** V pořadí
- **DE source:** in Stand
- **LV reference:** kārtībā
- **Problem:** V pořadí znamená „in sequence“; in Stand znamená být v provozuschopném či řádném stavu.
- **Recommended CS:** V pořádku
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 43: c2-Sachverständige-218

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Sachverständige-218
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zdatný • Odborník
- **DE source:** Sachverständige
- **LV reference:** lietpratējs • eksperts
- **Problem:** Zdatný znamená schopný či zdatný, nikoli odborník nebo znalec; jde o chybný významový ekvivalent.
- **Recommended CS:** Odborník
- **Rationale:** Luna linguistic audit (high confidence)


### MEDIUM (31)

### Finding 1: c2-unmissverständlich-3

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-unmissverständlich-3
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Nezaměnitelný
- **DE source:** unmissverständlich
- **LV reference:** nepārprotams
- **Problem:** „Nezaměnitelný“ znamená unmistakable, nikoli jednoznačný či naprosto jasný ve smyslu německého výrazu.
- **Recommended CS:** Jednoznačný
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 2: c2-Behandlungsraum-16

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Behandlungsraum-16
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Ordinaci lékaře
- **DE source:** Behandlungsraum
- **LV reference:** ārsta kabinets
- **Problem:** „Ordinace lékaře“ označuje lékařskou ordinaci, zatímco „Behandlungsraum“ je obecně místnost pro ošetření; navíc je zde chybný pád.
- **Recommended CS:** Ošetřovna
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 3: c2-Gehaltsabrechnung-32

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gehaltsabrechnung-32
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Výpočet mzdy
- **DE source:** Gehaltsabrechnung
- **LV reference:** algas aprēķins
- **Problem:** „Gehaltsabrechnung“ je obvykle výplatní páska nebo mzdový výměr, nikoli samotný výpočet mzdy.
- **Recommended CS:** Výplatní páska
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 4: c2-Kostenerstattung-45

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Kostenerstattung-45
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Náhradu nákladů
- **DE source:** Kostenerstattung
- **LV reference:** izmaksu atmaksāšana
- **Problem:** Název je v akuzativu („náhradu“), ale německé podstatné jméno vyžaduje český nominativ „náhrada“.
- **Recommended CS:** Náhrada nákladů
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 5: c2-Kostensteigerung-46

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Kostensteigerung-46
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zvyšující se náklady
- **DE source:** Kostensteigerung
- **LV reference:** izmaksu paaugstināšana
- **Problem:** „Zvyšující se náklady“ označuje rostoucí náklady, zatímco „Kostensteigerung“ je jejich zvýšení.
- **Recommended CS:** Zvýšení nákladů
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 6: c2-Krankenversicherung-47

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Krankenversicherung-47
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Pojištění pro případ nemoci
- **DE source:** Krankenversicherung
- **LV reference:** apdrošinājums slimības gadījumā
- **Problem:** Současná verze je srozumitelná, ale běžný a přesný český termín pro „Krankenversicherung“ je „zdravotní pojištění“.
- **Recommended CS:** Zdravotní pojištění
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: c2-Abgeordnetenhaus-78

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Abgeordnetenhaus-78
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Parlament
- **DE source:** Abgeordnetenhaus
- **LV reference:** parlaments
- **Problem:** Německé slovo označuje konkrétní sněmovnu poslanců, ne obecně jakýkoli parlament.
- **Recommended CS:** Poslanecká sněmovna
- **Rationale:** Luna linguistic audit (MEDIUM confidence)

### Finding 8: c2-Baugenossenschaft-82

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Baugenossenschaft-82
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Bytové družstvo družstvo
- **DE source:** Baugenossenschaft
- **LV reference:** dzīvokļu celtniecības kooperatīvs
- **Problem:** Slovo „družstvo“ je v překladu omylem uvedeno dvakrát.
- **Recommended CS:** Bytové družstvo
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 9: c2-Ausbildungsbeihilfe-84

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Ausbildungsbeihilfe-84
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Příspěvek na školné
- **DE source:** Ausbildungsbeihilfe
- **LV reference:** mācību pabalsts
- **Problem:** Německý výraz označuje podporu vzdělávání nebo odborné přípravy obecně, ne pouze školné.
- **Recommended CS:** Příspěvek na vzdělávání
- **Rationale:** Luna linguistic audit (MEDIUM confidence)

### Finding 10: c2-Berichterstatter-86

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Berichterstatter-86
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Reportér • Reportér • Dopisovatel • Reportér
- **DE source:** Berichterstatter
- **LV reference:** referents • ziņotājs • korespondents • reportieris
- **Problem:** Překlad zbytečně opakuje „reportér“ a nepostihuje běžné významy zpravodaj a referent.
- **Recommended CS:** Zpravodaj • Referent • Korespondent • Reportér
- **Rationale:** Luna linguistic audit (MEDIUM confidence)

### Finding 11: c2-Bevölkerungsdichte-90

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Bevölkerungsdichte-90
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Hustota obyvatel
- **DE source:** Bevölkerungsdichte
- **LV reference:** iedzīvotāju blīvums
- **Problem:** Standardní český termín je „hustota obyvatelstva“; „hustota obyvatel“ působí neidiomaticky.
- **Recommended CS:** Hustota obyvatelstva
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 12: c2-Rauschgiftdezernat-99

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Rauschgiftdezernat-99
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Divize narkotik
- **DE source:** Rauschgiftdezernat
- **LV reference:** narkotiku apkarošanas nodaļa
- **Problem:** „Dezernat“ je oddělení nebo odbor; „divize narkotik“ je v češtině nepřirozené a významově nepřesné.
- **Recommended CS:** Oddělení pro boj s narkotiky
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 13: c2-durchkreuzen-103

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-durchkreuzen-103
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vyškrtnout • Překřížit • Překřížit • Narušit
- **DE source:** durchkreuzen
- **LV reference:** pārsvītrot • pārvilkt krustu • šķērsot • izjaukt
- **Problem:** Třetí položka opakuje „Překřížit“ a nepokrývá význam zmařit či překazit plán.
- **Recommended CS:** Vyškrtnout • Překřížit • Překazit • Narušit
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 14: c2-Empfehlungsschreiben-110

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Empfehlungsschreiben-110
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Písemné doporučení
- **DE source:** Empfehlungsschreiben
- **LV reference:** rakstisks ieteikums
- **Problem:** Německé slovo označuje konkrétně doporučující dopis, ne obecné písemné doporučení.
- **Recommended CS:** Doporučující dopis
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 15: c2-Entwicklungsland-114

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Entwicklungsland-114
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Země rozvoje
- **DE source:** Entwicklungsland
- **LV reference:** attīstības zeme
- **Problem:** V češtině je ustálené spojení „rozvojová země“; „země rozvoje“ je nepřirozené.
- **Recommended CS:** Rozvojová země
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 16: c2-Gedächtnisstörung-127

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gedächtnisstörung-127
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zhoršení paměti
- **DE source:** Gedächtnisstörung
- **LV reference:** atmiņas traucējumi
- **Problem:** „Zhoršení paměti“ znamená zhoršování paměti, zatímco heslo označuje poruchu či dysfunkci paměti.
- **Recommended CS:** Porucha paměti
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 17: c2-Genossenschaft-140

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Genossenschaft-140
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Družstevní • Artel
- **DE source:** Genossenschaft
- **LV reference:** kooperatīvs • artelis
- **Problem:** „Družstevní“ je přídavné jméno; německé heslo je podstatné jméno označující družstvo.
- **Recommended CS:** Družstvo • Artel
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 18: c2-Gerechtigkeitsgefühl-141

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gerechtigkeitsgefühl-141
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Spravedlnost • Smysl pro spravedlnost
- **DE source:** Gerechtigkeitsgefühl
- **LV reference:** taisnīgums • taisnības izjūta
- **Problem:** „Spravedlnost“ označuje justice/fairness, nikoli pocit či smysl pro spravedlnost.
- **Recommended CS:** Smysl pro spravedlnost
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 19: c2-Geschwindigkeitskontrolle-147

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Geschwindigkeitskontrolle-147
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Ovládání rychlosti
- **DE source:** Geschwindigkeitskontrolle
- **LV reference:** ātruma kontrole
- **Problem:** „Ovládání rychlosti“ znamená speed regulation; heslo označuje kontrolu či měření rychlosti.
- **Recommended CS:** Kontrola rychlosti
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 20: c2-Geschwindigkeitsüberschreitung-149

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Geschwindigkeitsüberschreitung-149
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Nedodržení předepsané rychlosti • Porušení
- **DE source:** Geschwindigkeitsüberschreitung
- **LV reference:** noteiktā ātruma neievērošana • pārkāpšana
- **Problem:** Druhá položka „Porušení“ je příliš obecná; heslo konkrétně označuje překročení povolené rychlosti.
- **Recommended CS:** Překročení rychlosti
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 21: c2-Gewerkschaftsbeitrag-154

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gewerkschaftsbeitrag-154
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Členské poplatky odborů
- **DE source:** Gewerkschaftsbeitrag
- **LV reference:** arodbiedrības biedru maksa
- **Problem:** Německý výraz je jednotné číslo a označuje příspěvek odborům, ne obecné poplatky.
- **Recommended CS:** Odborový příspěvek
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 22: c2-Gleichberechtigung-158

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Gleichberechtigung-158
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Rovnost
- **DE source:** Gleichberechtigung
- **LV reference:** līdztiesība
- **Problem:** „Rovnost“ je obecnější; „Gleichberechtigung“ označuje zejména rovná práva a rovnoprávnost.
- **Recommended CS:** Rovnoprávnost
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 23: c2-menschenfreundlich-178

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-menschenfreundlich-178
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** STUDY
- **Current CS text:** Humánní • Humánní
- **DE source:** menschenfreundlich
- **LV reference:** humāns • cilvēcīgs
- **Problem:** Obě české varianty jsou totožné; druhá varianta má být významově odlišná.
- **Recommended CS:** Humánní • lidský
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 24: c2-Mutterschaftsurlaub-180

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Mutterschaftsurlaub-180
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Mateřské dovolené
- **DE source:** Mutterschaftsurlaub
- **LV reference:** grūtniecības un dzemdību atvaļinājums
- **Problem:** Německý výraz je jednotné číslo; správný český základní tvar je „mateřská dovolená“.
- **Recommended CS:** Mateřská dovolená
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 25: c2-Satellitenübertragung-189

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Satellitenübertragung-189
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Satelitní televizní přenos
- **DE source:** Satellitenübertragung
- **LV reference:** satelīttelevīzijas pārraide
- **Problem:** Německý výraz označuje obecný satelitní přenos; „televizní“ význam nepodloženě zužuje.
- **Recommended CS:** Satelitní přenos
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 26: c2-Beschwerdeschrift-191

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Beschwerdeschrift-191
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Stížnost
- **DE source:** Beschwerdeschrift
- **LV reference:** sūdzība
- **Problem:** „Beschwerdeschrift“ je formální písemné stížní podání; samotná „stížnost“ je příliš obecná.
- **Recommended CS:** Písemná stížnost
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 27: c2-Selbstverteidigung-195

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Selbstverteidigung-195
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Soubor sebeobranných technik
- **DE source:** Selbstverteidigung
- **LV reference:** pašaizsardzības paņēmienu kopums
- **Problem:** Německý výraz označuje sebeobranu obecně, nikoli pouze soubor technik.
- **Recommended CS:** Sebeobrana
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 28: c2-Steuererleichterung-197

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Steuererleichterung-197
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Daňové výhody
- **DE source:** Steuererleichterung
- **LV reference:** nodokļu atvieglojumi
- **Problem:** „Daňové výhody“ jsou obecné daňové benefity; přesný termín pro úlevu je „daňové úlevy“.
- **Recommended CS:** Daňové úlevy
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 29: c2-Strafgesetzbuch-198

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Strafgesetzbuch-198
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jur trestní zákoník
- **DE source:** Strafgesetzbuch
- **LV reference:** jur. kriminālkodekss
- **Problem:** „Jur“ je chybná nebo neúplná zkratka a v překladu není potřebná.
- **Recommended CS:** Trestní zákoník
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: c2-Verhütungsmittel-202

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-Verhütungsmittel-202
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Antikoncepce
- **DE source:** Verhütungsmittel
- **LV reference:** pretapaugļošanās līdzeklis
- **Problem:** Antikoncepce označuje ochranu před početím obecně, ne konkrétní antikoncepční prostředek.
- **Recommended CS:** Antikoncepční prostředek
- **Rationale:** Luna linguistic audit (high confidence)


_... un vēl 1 MEDIUM atradumi (skat. reports/temp/cs-c2-audit/)._


### LOW (1)

### Finding 1: c2-zugunsten, zu Gunsten-207

- **Dataset:** c2
- **Batch:** linguistic
- **Card/Index:** c2-zugunsten, zu Gunsten-207
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Pro dobro • Pro dobro
- **DE source:** zugunsten, zu Gunsten
- **LV reference:** labā • par labu
- **Problem:** Obě německé podoby jsou pravopisné varianty téhož výrazu, proto je opakovaný český překlad zbytečný.
- **Recommended CS:** Ve prospěch
- **Rationale:** Luna linguistic audit (high confidence)


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
_Pagaidu artefakti: reports/temp/cs-c2-audit/_
