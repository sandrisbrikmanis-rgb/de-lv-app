# PROJECT LANGUAGE MASTER STANDARD

**Versija:** 1.17\
**Versiju ķēde:** v1.13 (Kurss moduļa metodika, iekļauta šajā izlaidumā) → v1.14 → v1.15 → v1.16 → **v1.17** (šis dokuments)\
**Statuss:** AUTHORITATIVE / OBLIGĀTS\
**Mērķis:** viens vienots projekta standarts jaunu valodu izveidei,
auditam, OWNER lēmumiem, COPY-ONLY remontam, regresijas pārbaudei, Git
integrācijai un gala slēgšanai.

------------------------------------------------------------------------

## 0. AUTORITĀTE UN VIENS DARBA CEĻŠ

Šis dokuments ir vienīgais MASTER standarts valodu datu darbam projektā.

Tas konsolidē un aizstāj kā atsevišķi interpretējamus darba standartus:

-   `LANGUAGE_AUDIT_STANDARD.md`
-   `LANGUAGE_AUDIT_STANDARD_3_3_Projekta_konvenciju_interpretacija`
-   `STUDY_CARD_RULES.md`
-   `UI_UX_VISUAL_COLOR_RULES.md`
-   `APP_QUALITY_STANDARD.md`
-   `COMPARISON_STUDY_RULES.md`
-   `NEW LANGUAGE CREATION STANDARD`
-   `NEW LANGUAGE CREATION — FINAL REPORT STANDARD`

Iepriekšējie dokumenti drīkst palikt repozitorijā tikai kā
vēsturiski/reference materiāli. Ja ir pretruna starp tiem un šo MASTER
dokumentu, spēkā ir šis dokuments.

### 0.1. Kategoriski aizliegti paralēli procesa zari

Vienam datasetam vienlaikus ir tikai **viens autoritatīvs darba
stāvoklis** un viens lineārs process:

`origin/main → darba branch → audits → OWNER review → COPY-ONLY repair → regression → closure → CLOSED_PENDING_MAIN_INTEGRATION → merge uz origin/main → post-merge verification → FINAL_CLOSED`

Nav atļauts uzturēt paralēlus A/B/C remonta zarus, alternatīvus OWNER
lēmumu komplektus vai vairākas savstarpēji konkurējošas "gala" versijas.

Ja eksistē vecs vai paralēls branch: 1. to neizmanto kā jauna darba
bāzi; 2. vispirms nosaka, kas jau ir `origin/main`; 3. nepieciešamās vēl
neintegrētās izmaiņas pārnes kontrolēti uz vienīgo aktuālo darba branch;
4. turpmākais darbs turpinās tikai no šī branch.

### 0.2. Viena patiesības ķēde

Katram datasetam autoritātes secība ir:

1.  **aktuālais `origin/main`** --- produkcijas stāvoklis;
2.  **šis MASTER standarts** --- procesa un kvalitātes noteikumi;
3.  **LV MASTER** --- struktūras, ID, secības, renderer/pedagoģiskās
    loģikas etalons;
4.  **DE** --- mācāmās vācu valodas avota dati, STRICT READ-ONLY;
5.  **auditējamās valodas faktiskā production vērtība** --- `CURRENT`;
6.  **OWNER apstiprināts lēmums** --- vienīgais atļautais lingvistiskā
    remonta avots.

Audita `PROPOSED_*`, modeļa ieteikums, validatora findings vai cita
branch saturs **nav OWNER lēmums**.

------------------------------------------------------------------------

# 1. PAMATPRINCIPI

## 1.1. Viena kartīte = viena galvenā nozīme = viens galvenais tulkojums

Šī lietotne nav vārdnīca. Katrai learner-facing kartītei jābūt ātri uztveramai
un nepārprotamai — ordinary flashcard, minimalStudy, standardStudy,
comparisonStudy un jebkurš cits Study tips.

**Hard rule:**

-   parastās flashkartes native-language pusē ir **viena galvenā praktiskā
    nozīme**;
-   sinonīmu ķēdes, vārdnīcas tipa uzskaitījumi un vairāku semantiski
    atšķirīgu nozīmju sabāšana vienā frontē nav atļauta;
-   `•`, `/`, semikoli vai komatu virknes nedrīkst tikt izmantotas, lai
    parastajā frontē apvienotu vairākas atšķirīgas nozīmes;
-   ja vienam DE vārdam mācību vajadzībām nepieciešamas vairākas
    nozīmes, tās jāizskaidro `standardStudy` / `comparisonStudy`, nevis
    jāpārvērš parastā karte par vārdnīcas ierakstu;
-   ja native-language vārds faktiski atbilst citam DE vārdam, to
    nedrīkst piespiest šai kartei; vajadzības gadījumā tas ir atsevišķas
    kartes/source-review jautājums;
-   morfoloģiski vai gramatiski varianti, kas nav atšķirīgas leksiskas
    nozīmes, nav automātiski pārkāpums.

Auditā **visiem kartīšu tipiem** obligāti jābūt deterministiskam kandidātu
scan uz visiem rendererī redzamiem galvenajiem tulkojuma laukiem (`MAIN_TRANSLATION_FIELD_INVENTORY`, sk. §1.1.10):

Scan uz:

```text
•
/
;
```

un citiem projekta definētiem multi-meaning separatoriem.

Šis scans dod kandidātus; gala lingvistiskais statuss tiek validēts pēc
nozīmes.

Atšķirība starp flashkartes `{lang}` un `study.translation` pati par
sevi nav kļūda. Kļūda ir tikai tad, ja tulkojums ir nepareizs, sajaukti
vācu vārdi/konstrukcijas vai saturs ir savstarpēji pretrunīgs.
### 1.1.1. Obligāti

-   `MAIN_TRANSLATION_COUNT = 1` (v1.11 `TRANSLATION_COUNT = 1` ekvivalents);
-   viens learner-facing galvenais tulkojums;
-   tulkojumam jāatbilst konkrētajai DE kartītes nozīmei;
-   alternatīvas nozīmes nedrīkst automātiski apvienot vienā parastā
    flashcard.

### 1.1.2. Aizliegts kā gala production stāvoklis

Piemēri:

`püsiv • pikaajaline • vastupidav`

`püsiv / pikaajaline`

`püsiv; pikaajaline`

vai cita konstrukcija, kas learner-facing laukā faktiski satur vairākus
tulkojuma/nozīmes kandidātus.

Separatoru saraksts nav izsmeļošs. Deterministiskajam auditam jāspēj
atklāt arī strukturāli vai tekstuāli citādi reprezentētus vairāku
tulkojumu kandidātus.

### 1.1.3. MULTIPLE_TRANSLATIONS_DETECTED = OWNER_DECISION_REQUIRED

Ja auditā vai repair/regression posmā parastā flashcard satur vairāk nekā
vienu tulkojumu/nozīmes kandidātu:

`MULTIPLE_TRANSLATIONS_DETECTED = true`

tad obligāti:

`OWNER_DECISION_REQUIRED`

Tas ir **HARD GATE**.

Ne Luna, ne Cursor, ne audits, ne repair skripts nedrīkst automātiski
izvēlēties, kurš variants jāatstāj.

Pat ja viens variants šķiet lingvistiski acīmredzami labāks, automātiska
dzēšana/izvēle ir aizliegta.

### 1.1.4. Audita pienākums

Audits drīkst un tam vajag:

1.  identificēt visus esošos tulkojuma kandidātus;
2.  saglabāt precīzu `CURRENT`;
3.  norādīt DE avota vārdu/nozīmi;
4.  lingvistiski izvērtēt katru kandidātu;
5.  paskaidrot semantiskās atšķirības;
6.  norādīt rekomendēto variantu, ja iespējams;
7.  nodot kartīti OWNER lēmumam.

Audita rekomendācija **nav OWNER lēmums**.

`PROPOSED` / `RECOMMENDED` / Luna priekšlikums nedrīkst kļūt par
production `NEW` bez OWNER apstiprinājuma.

### 1.1.5. OWNER VIEW / DECISIONS obligātie lauki

Katram `MULTIPLE_TRANSLATIONS_DETECTED` findingam OWNER artefaktā jābūt
vismaz:

-   Card ID;
-   Field/path;
-   DE;
-   CURRENT;
-   detected translation candidates;
-   semantic assessment;
-   recommended main translation (ja ir);
-   OWNER NEW;
-   Status.

Pirms OWNER lēmuma:

`Status: OWNER_DECISION_REQUIRED`

`OWNER NEW:` tukšs / unresolved.

OWNER drīkst izlemt:

-   atstāt vienu no esošajiem variantiem;
-   ievadīt citu vienu tulkojumu;
-   pārvietot papildu nozīmi uz Study;
-   pieprasīt atsevišķu kartīti;
-   `NELABOT`, ja konkrētais gadījums pēc OWNER izvērtējuma nav vairāku
    tulkojumu pārkāpums.

### 1.1.6. REPAIR APPLY HARD GATE

COPY-ONLY repair drīkst mainīt šādu kartīti tikai tad, ja OWNER mappingā
ir:

-   `Status: LABOT`;
-   precīzs `Card ID`;
-   precīzs `Field/path`;
-   precīzs `CURRENT`;
-   precīzs OWNER apstiprināts `NEW`;
-   `NEW` satur tieši vienu galveno tulkojumu, ja kartīte paliek parasta
    flashcard.

Aizliegts repair laikā:

-   pašam izvēlēties pirmo variantu;
-   izvēlēties īsāko variantu;
-   izvēlēties Luna `proposed`;
-   izvēlēties auditora `recommended`;
-   dzēst pārējos variantus bez OWNER lēmuma;
-   automātiski pārveidot kartīti par Study;
-   automātiski izveidot jaunu kartīti.

Ja OWNER lēmuma nav:

`SKIP_OWNER_DECISION_REQUIRED`

Production paliek nemainīts.

### 1.1.7. standardStudy izņēmums

Šis noteikums nenozīmē, ka Study saturā aizliegts skaidrot semantiskas
nianses, sinonīmus vai salīdzinājumus.

`standardStudy` drīkst pedagoģiski izskaidrot vairākas nozīmes/atšķirības
atbilstoši Study noteikumiem.

Taču parastās flashcard learner-facing galvenais tulkojums joprojām ir:

`TRANSLATION_COUNT = 1`

Ja viena DE vienība nevar korekti tikt mācīta ar vienu galveno
tulkojumu, tas ir OWNER izvērtējams kandidāts Study vai atsevišķas
kartītes risinājumam.

### 1.1.8. Aizliegta automātiska semantiska izvēle

MASTER v1.11 nostiprina:

**DETECTION** var būt automātiska.\
**SEMANTIC ANALYSIS** var būt automātiska.\
**RECOMMENDATION** var būt automātiska.\
**FINAL SELECTION** vairāku tulkojumu gadījumā pieder tikai OWNER.

Šis princips ir prioritārs pār jebkuru repair automatizāciju.

### 1.1.10. MAIN_TRANSLATION_FIELD_INVENTORY (v1.12)

MASTER v1.12 ievieš obligātu:

`MAIN_TRANSLATION_FIELD_INVENTORY`

Auditoram vispirms jānosaka **visi production lauki**, kurus runtime renderer
izmanto kā galveno learner-facing tulkojumu. Inventāram jāaptver visi kartīšu
tipi.

Required:

`MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%`

`UNMAPPED_MAIN_TRANSLATION_FIELDS = 0`

Nedrīkst pieņemt, ka galvenais tulkojums vienmēr atrodas tikai vienā
universālā laukā, piemēram `lv`.

### 1.1.11. FULL MULTI-TRANSLATION SCAN — ALL CARD TYPES (v1.12)

`MULTI_TRANSLATION_SCAN` scope paplašināts no ordinary flashcards uz **visiem
kartīšu tipiem**:

`ALL_CARD_MAIN_TRANSLATION_FIELDS = 100%`

Jāmeklē vismaz `•`, `/`, `;`, comma/list konstrukcijas, arrays, multi-value
structures un rendererī salikti vairāki tulkojumi. Separator scan ir candidate
detection, nevis gala lingvistisks spriedums.

Katram kandidātam klasifikācija:

`SINGLE_TRANSLATION` / `MULTIPLE_MAIN_TRANSLATIONS_REAL` / `FALSE_POSITIVE`

Ja `MULTIPLE_MAIN_TRANSLATIONS_REAL` → obligāti `OWNER_DECISION_REQUIRED`.

### 1.1.12. Study exception precizēts (v1.12)

Study kartīte drīkst saturēt vairākas nozīmes tikai **skaidrojošajā saturā**
(explanation, examples, comparison, tip, important). Study **galvenais
tulkojums** joprojām ir `MAIN_TRANSLATION_COUNT = 1`.

Piemērs: `finden → leidma` drīkst būt galvenais tulkojums; Study skaidrojumā
drīkst paskaidrot `finden noteiktos kontekstos = arvama`.

### 1.1.13. INVALID AUDIT GATE (v1.12)

Ja audits deklarē `MULTIPLE_TRANSLATION violations = 0`, bet production satur
zināmu regression fixture ar vairākiem galvenajiem tulkojumiem (piem. `finden
→ leidma • arvama`), tad:

`MULTI_TRANSLATION_SCAN = INVALID`

`AUDIT_RESULT = REOPEN_REQUIRED`

Auditu nedrīkst izmantot closure pierādījumam.

### 1.1.14. TOOLING_STANDARD_MISMATCH (v1.12)

Ja MASTER v1.12 ir aktīvs, bet audita tooling skenē tikai ordinary flashcards
vai tikai vienu fiksētu tulkojuma lauku:

`TOOLING_STANDARD_MISMATCH = BLOCKED`

Final closure nav atļauts.
### 1.1.9. Normatīvs piemērs

Production:

`dauerhaft → püsiv • pikaajaline • vastupidav`

Audit:

`MULTIPLE_TRANSLATIONS_DETECTED = true`

Audits drīkst norādīt, ka kandidātiem ir atšķirīgas semantiskas nianses
un sniegt rekomendāciju.

Audits **nedrīkst** automātiski pārvērst production par:

`dauerhaft → püsiv`

Pat ja `püsiv` tiek rekomendēts.

Pareizais stāvoklis pirms OWNER lēmuma:

`Status: OWNER_DECISION_REQUIRED`

Tikai pēc OWNER apstiprinājuma, piemēram:

`Status: LABOT`

`CURRENT: püsiv • pikaajaline • vastupidav`

`NEW: püsiv`

repair drīkst veikt COPY-ONLY izmaiņu.

## 1.2. DE = STRICT READ-ONLY

Bez skaidra OWNER uzdevuma nedrīkst mainīt `de`, `de_article`,
`de_plural`, vācu gramatiku, darbības vārdu formas, Partizip II, DE
piemērus, Study/comparisonStudy DE saturu vai vācu daļu
verbs/sentences/courseLessons datos.

Ja iespējama DE kļūda tiek atrasta, to dokumentē kā `SOURCE_DE_ISSUE` /
`NEEDS_SOURCE_REVIEW`. Auditējamās valodas tekstu nedrīkst mākslīgi
pielāgot kļūdainam vai neskaidram avotam bez OWNER lēmuma.

## 1.3. Citas gatavās valodas = READ-ONLY

Tās drīkst izmantot tikai kā salīdzināšanas atsauci. Nedrīkst tās "pa
ceļam" labot.

## 1.4. LV MASTER loma

LV MASTER ir autoritatīvs struktūrai, ID, secībai, section tipiem,
renderer uzvedībai, progress/flip/next plūsmai, Study sistēmas
arhitektūrai, Kurss pedagoģiskajai loģikai un UI funkcionālajai
struktūrai.

LV teksts **nav automātisks tulkojuma avots**, ko mehāniski kopēt
auditējamajā valodā. Ja LV satur iespējamu kļūdu, to dokumentē; nedrīkst
akli reproducēt.

------------------------------------------------------------------------

# 2. JAUNAS VALODAS IZVEIDE

## 2.1. Tvērums

Jaunai `{lang}-DE` valodai pēc projekta faktiskās struktūras jāaptver
A1--C2, `sentences.js`, `verbs.js`, `courseLessons.js`, course training
cards, noun articles un dialogue ID map, ja attiecas,
`languages/{lang}/ui.js`, manifests/registry/data routing, Study un
comparisonStudy kartītes.

Pilna Teikumu/Sätze audita metodika (deterministisks inventārs, obligāti
25 teikumi vienā Luna batch, blakus konteksts, closure vārti): sk.
**§7.65–§7.90**.

Pilna Verbs/Verben audita metodika (deterministisks inventārs, obligāti
10 pilni verba objekti vienā Luna batch, visu formu kopīga pārbaude,
closure vārti): sk. **§7.91–§7.120**.

## 2.2. Saglabājamā struktūra

Obligāti saglabā ID, objektu un masīvu secību, CEFR sadalījumu, lauku
nosaukumus, JavaScript arhitektūru un renderer datu līgumu.

Bez atsevišķa OWNER uzdevuma nedrīkst pārvietot vārdus starp līmeņiem,
dzēst/pievienot vārdus, mainīt ID, pārdēvēt laukus, mainīt
renderer/CSS/dizainu vai izveidot jaunu Study arhitektūru.

## 2.3. Tulkojuma kvalitāte

Tulkojumam jābūt gramatiski un ortogrāfiski pareizam, dabiskam,
mūsdienīgam, pedagoģiski saprotamam un konsekventam. Nedrīkst izmantot
neveiklu burtisku vai mehānisku tulkojumu.

Neskaidrību gadījumā izmanto autoritatīvus avotus. Vācu valodai
prioritāri: Goethe-Institut, Duden, IDS, DWDS. Auditējamajai valodai ---
valsts valodas institūti, oficiālas/akadēmiskas vārdnīcas un
terminoloģijas datubāzes.

------------------------------------------------------------------------

# 3. STUDY CARD MASTER NOTEIKUMI

## 3.1. `standardStudy`

Izmanto esošo Study Card sistēmu. Pamata lauki: `translation`,
`explanation`, `examples`, `comparison`, `tip`, `important`,
`sectionAccents`.

Pedagoģiskās sadaļas: ℹ️ Skaidrojums, ⏳ Piemēri, ⚖️ Salīdzinājums, 💡
Padoms, ❗ Svarīgi.

Tomēr **projekta faktiskā konvencija ir prioritāra pār mehānisku
validatoru**. Esoša validēta `minimalStudy`, `standardStudy` bez
comparison vai apzināti īsāks saturs nav automātiska kļūda, ja tas
atbilst LV MASTER un renderer līgumam. Tukšas sadaļas nedrīkst
renderēties kā tukši vizuāli bloki.

## 3.2. `comparisonStudy`

`comparisonStudy` ir otrais layout tajā pašā Study sistēmā, nevis
neatkarīgs renderer.

Pamata struktūra: stabils unikāls `id`, `layout: "comparisonStudy"`,
`title`, `subtitle`, `lead`, `words`, `examples`, `comparisonTable`,
`importantComparison` ja izmantots, `tip`, `important`, `mistakes` ja
izmantots, `remember` ja izmantots, `sectionAccents`.

Salīdzinājumiem jābūt pedagoģiski pamatotiem: bieži jaukti vārdi,
līdzīgi jēdzieni vai reāli sinonīmi ar nozīmes atšķirībām. Mākslīgi
salīdzinājumi nav pieļaujami.

Stable ID: lowercase, cipari un `-`, bez atstarpēm, `ä→ae`, `ö→oe`,
`ü→ue`, `ß→ss`, comparison kartēm prefikss `compare-`.

## 3.3. Card title

Visām kartēm virsraksts ir īss, ātri uztverams, satur tikai galvenās
praktiskās nozīmes. Vairākas nozīmes atdala ar `•`. Nav numerācijas,
semikolu virkņu vai garu paskaidrojumu. Papildu nozīmes pieder Study
saturā.

------------------------------------------------------------------------

# 4. SECTIONACCENTS UN VIZUĀLĀ SISTĒMA

`sectionAccents` ir mācību metodikas daļa, nevis dekorācija. Jaunām
Study kartēm tas ir obligāts. Esošās kartes drīkst saglabāt
funkcionējošu atpakaļsavietojamu formātu, ja renderer to atbalsta.

Jāizceļ galvenie DE vārdi/frāzes, galvenie native-language tulkojumi,
nozīmju atšķirības, svarīgās gramatiskās formas un pilnas mācāmās
frāzes.

Nedrīkst izcelt veselus teikumus bez pedagoģiska iemesla, nejaušus
palīgvārdus, daļēju sakritību cita vārda iekšpusē, DE subtitle, galveno
title vai section nosaukumus.

Izmanto tikai projekta esošās krāsas: `blue`, `green`, `yellow`, `red`,
`purple`, `orange`. Comparison sadaļā DE termini/frāzes izmanto projekta
zaļo akcentu un native-language nozīmes --- purpura akcentu.

Responsive: desktop līdz 4 kolonnām, tablet 2, mobile 1, bez
horizontālas overflow.

------------------------------------------------------------------------

# 5. KURSS MASTER NOTEIKUMI

LV Kurss ir funkcionālais un pedagoģiskais MASTER. Visām valodām
identiski jāstrādā lesson ID un secībai, section tipiem, renderer,
progress, flip, next, training/flashcard sistēmai, vizuālajam dizainam
un dinamiskajai treniņu loģikai. Mainās tikai lokalizējamais teksts.

## 5.1. Fictional names

Izdomāti/personu piemēru vārdi jālokalizē dabiski auditējamajai valodai,
saglabājot dzimumu, lomu, attiecības, pedagoģisko nozīmi un konsekvenci.
Reālas identificējamas personas nepārdēvē.

## 5.2. `legacyHtml`

`legacyHtml` nedrīkst labot pēc auditā saīsināta fragmenta. Ja findings
attiecas uz plašu HTML lauku, nolasa pilnu CURRENT lauku, salīdzina ar
LV MASTER struktūru un paredzēto pedagoģisko nozīmi, pārbauda DE/source
nozīmi, sagatavo pilnu autoritatīvu native-language replacement un tikai
pēc OWNER apstiprinājuma drīkst COPY-ONLY apply.

Ja pilns avots nav pieejams: `NEEDS_SOURCE_REVIEW`, nevis minējums.

## 5.3. Kurss LIVE / RUNTIME kvalitātes vārti

Kurss kvalitāti nedrīkst pierādīt tikai ar source failu struktūru vai
statisku validatoru.

Ja Kurss sadaļai ir interaktīva uzvedība, gala regression / closure
obligāti jāpārbauda **faktiski renderētā aplikācijas uzvedība**.

Obligāti jāpārbauda, ja attiecas:

-   lesson open/load;
-   accordion open/close;
-   section saturs nav tukšs;
-   kartes pirmais saturs inicializējas;
-   progress ir redzams un korekts;
-   flip darbojas;
-   next darbojas;
-   exercise/practice deck tiek atrasts;
-   translate deck tiek atrasts;
-   lokalizēts section title nedrīkst būt vienīgais renderer binding
    avots, ja section struktūra/type ļauj drošu strukturālu
    identifikāciju;
-   L8--L21 dynamic training/flashcard sistēmai jābūt funkcionāli
    identiskai LV MASTER.

**Hard rule:**

```text
SOURCE_DATA_EXISTS ≠ RUNTIME_RENDER_PASS
STATIC_VALIDATOR_PASS ≠ LIVE_UI_PASS
```

Kurss nedrīkst saņemt `FINAL_CLOSED_ON_MAIN`, ja obligātā
browser/runtime pārbaude nav PASS.

## 5.4. `legacyHtml` pilna teksta deterministiska pārbaude

`legacyHtml` nedrīkst auditēt tikai kā vienu lielu semantisku objektu un
pēc tam pieņemt, ka visi iekšējie defekti ir atrasti.

Katram `legacyHtml` laukam deterministiskais slānis obligāti:

1.  nolasa **pilnu** production lauku;
2.  parsē vai droši ekstrahē visus learner-facing teksta mezglus;
3.  pārbauda katru teksta mezglu uz:
    -   source-language remnants;
    -   LV remnants;
    -   mixed-language fragmentiem;
    -   placeholderiem;
    -   mojibake;
    -   tukšu learner-facing saturu;
4.  saglabā exact source path / pietiekami precīzu target identitāti;
5.  pēc remonta atkārto scan uz **visa aktuālā production lauka**, ne
    tikai uz iepriekšējiem OWNER targetiem.

Plašs parent finding par visu `legacyHtml` lauku nedrīkst aizstāt
granular residual scan.

Pilna Kurss/Lessons audita metodika (deterministisks inventārs, dialogu
konteksts, shared UI konflikti, closure vārti): sk. **§7.40–§7.64**.

------------------------------------------------------------------------

# 6. UI / UX

Visām UI virknēm jābūt pilnībā lokalizētām. Nedrīkst būt fallback uz LV
produkcijā, hardcoded konkrētas valodas tekstu kopīgajā renderer,
nekonsekventu terminu, valodu sajaukuma, tukšu vai key-name virkņu
lietotāja interfeisā.

Kopīgais renderer, CSS, spacing, fonti, ikonas, krāsas un responsive
uzvedība netiek lokalizēta.

Pilna UI/i18n un vizuālā runtime audita metodika (deterministisks UI
atslēgu un skatu inventārs, desktop/mobile runtime, fallback, shared-key
kontrole, closure vārti): sk. **§7.121–§7.152**.

------------------------------------------------------------------------

# 7. PILNA AUDITA STANDARTS

## 7.1. Audits ir READ-ONLY

Audita laikā production dati netiek mainīti. Audita rezultāts =
findings + pierādījums, nevis remonts.

## 7.2. Coverage — divu slāņu modelis

Pilnam auditam obligāti ir divi neatkarīgi completeness slāņi:

### A. SEMANTIC / LLM DISCOVERY

LLM audits pārbauda:

-   semantiku;
-   dabiskumu;
-   gramatiku;
-   kontekstu;
-   pedagoģisko kvalitāti;
-   nozīmes atbilstību DE.

Obligāti:

```text
OBJECT_COVERAGE = 100%
SEMANTIC_DISCOVERY_COMPLETENESS = NOT_GUARANTEED
```

`OBJECT_COVERAGE = 100%` nozīmē tikai to, ka visi objekti/lauki tika
auditēti, nevis ka stochastic modelis ir izsmēlis visas iespējamās
lingvistiskās kļūdas.

### B. DETERMINISTIC DISCOVERY

Mehāniski pārbaudāmām kvalitātes klasēm jābūt pilnībā skenētām pār
**visu faktisko production scope**.

Obligāti:

```text
DETERMINISTIC_SCOPE_COVERAGE = 100%
DETERMINISTIC_DISCOVERY_COMPLETENESS = 100% REQUIRED
```

Deterministiskajam slānim jāaptver vismaz, ja attiecas:

-   syntax;
-   ID/order;
-   structure;
-   data↔www mirror;
-   Study parity / count;
-   required fields;
-   empty localized fields;
-   placeholders;
-   mojibake;
-   source-language / LV remnants;
-   mixed-language kandidāti;
-   `legacyHtml` learner-facing text nodes;
-   UI fallback / untranslated keys;
-   sectionAccents deterministiskā integritāte;
-   card front multi-meaning separator scan;
-   Kurss renderer/data līguma pārbaudes;
-   browser/runtime obligātie ceļi.

Ja kādu no šīm klasēm tooling objektīvi nespēj pārbaudīt 100%, reportā
to nedrīkst klusējot uzrādīt kā PASS. Jānorāda konkrētais coverage
ierobežojums un closure jābloķē, ja šī klase ir obligāta konkrētajam
datasetam.

## 7.2.1. Deterministic residual scan ir obligāts pēc remonta

Pēc OWNER apply un pirms closure deterministisko defektu pārbaude nedrīkst
būt tikai targeted regression pret OWNER mappingu.

Obligāti atkārtoti skenēt **visu aktuālo production scope** uz
attiecīgajām deterministiskajām kļūdu klasēm.

Piemērs:

```text
310/310 OWNER LABOT retained = PASS
```

pierāda tikai OWNER apply saglabāšanos.

Tas **nepierāda**:

```text
FOREIGN_LANGUAGE_RESIDUAL = 0
```

ja nav veikts full residual scan pār visu production saturu.

Hard rule:

```text
TARGETED_OWNER_REGRESSION ≠ FULL_DETERMINISTIC_RESIDUAL_SCAN
```

Closure vajag abus.

## 7.3. Automātiskie skripti nav OWNER

Validatora rezultāts ir kandidāts: `PASS` --- neatbilstība nav atrasta;
`WARNING` --- potenciāla neatbilstība, vajag interpretāciju; `FAIL` ---
tikai pēc apstiprinātas neatbilstības standartam.

WARNING nedrīkst automātiski kļūt par lingvistisku kļūdu. Ja identiska
struktūra/īpatnība ir LV MASTER, vispirms jāpārbauda, vai tā nav
projekta konvencija.

## 7.4. Finding obligātie dati

Katram finding jābūt: unikāls Audit ID, dataset/lesson/card ID, precīzs
field/path, severity, category, production file, `CURRENT`, DE/source
konteksts ja vajadzīgs, LV MASTER reference ja vajadzīgs, problēmas
skaidrojums, audita pamatojums, `PROPOSED_*` tikai kā ieteikums,
source/auditor.

Audita `PROPOSED_*` nekad nav automātiski piemērojams.

## 7.5. Severity

-   **CRITICAL** --- būtiski nepareiza nozīme, salauzta
    struktūra/renderer, smags valodu sajaukums vai datu integritātes
    problēma.
-   **HIGH** --- skaidra gramatikas, semantikas, būtiska lokalizācijas
    vai pedagoģiska kļūda.
-   **MEDIUM** --- reāla kvalitātes/konsekvences problēma ar
    ierobežotāku ietekmi.
-   **LOW** --- neliela, bet reāla kvalitātes problēma.
-   **INFO/WARNING** --- kandidāts pārbaudei, nevis apstiprināta kļūda.

## 7.6. Obligāta OWNER-PREP GitHub pakotne pēc audita

Katrs pilns vai mērķēts audits, kas atrod vismaz vienu findingu un kura
rezultāts ir `NEEDS OWNER REVIEW`, **nav uzskatāms par pabeigtu**, kamēr
Cursor/aģents tajā pašā audit posmā nav sagatavojis OWNER pārskatam
GitHub-atveramus artefaktus.

Obligāti jāizveido vismaz šādi faili:

1.  `reports/<scope>-owner-view.md`
2.  `reports/<scope>-owner-decisions.md`
3.  `reports/<scope>-owner-review-GITHUB.md`

### `OWNER VIEW`

`<scope>-owner-view.md` ir cilvēkam ērti pārskatāms findingu fails.
Katram findingam tajā jābūt vismaz:

- Audit ID;
- Card/lesson/object ID;
- precīzam field/path;
- severity un category;
- `CURRENT`;
- DE/source kontekstam, ja vajadzīgs;
- LV MASTER reference, ja vajadzīgs;
- īsam problēmas skaidrojumam;
- audita `PROPOSED_*`, ja tāds ir;
- vietai OWNER lēmumam.

`OWNER VIEW` nedrīkst mainīt production un nedrīkst pasniegt
`PROPOSED_*` kā OWNER apstiprinātu gala vērtību.

### `OWNER DECISIONS`

`<scope>-owner-decisions.md` ir OWNER lēmumu darba fails. Tas jāizveido
uzreiz pēc audita ar visiem findingiem un sākotnēji neaizpildītu/PENDING
OWNER statusu.

Katram ierakstam jāparedz vismaz:

- Audit ID;
- ID / field/path;
- `CURRENT`;
- `PROPOSED_*` tikai kā audita ieteikums;
- `OWNER STATUS`;
- `OWNER_DECISION` / `NEW`, ja OWNER izvēlas `LABOT`;
- OWNER piezīme, ja vajadzīgs.

Atļautie gala statusi ir tikai tie, kas definēti OWNER REVIEW sadaļā:
`LABOT`, `NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW`.
`PENDING` drīkst būt tikai līdz OWNER faktiskajam lēmumam.

### GitHub atvēršanas indekss

`<scope>-owner-review-GITHUB.md` obligāti satur tiešas GitHub `blob`
saites vismaz uz:

- galveno audita atskaiti;
- `OWNER VIEW`;
- `OWNER DECISIONS`;
- mašīnlasāmo audit JSON, ja tāds tiek ģenerēts.

Saites jāveido uz aktuālo darba branch, lai OWNER failus var atvērt
GitHub uzreiz pēc audita bez papildu Cursor sagatavošanas uzdevuma.

Ja audits tiek veidots PR branch, OWNER GitHub indekss un abi OWNER faili
jācommit/push tajā pašā branch un jāiekļauj/atjaunina tajā pašā audit PR,
ja vien OWNER nav skaidri noteicis citu Git plūsmu.

### Audita stage gate

Ja `findings > 0`, AUDIT stage gala rezultāts drīkst būt
`NEEDS OWNER REVIEW` tikai tad, ja:

- audits ir pabeigts noteiktajā scope;
- `OWNER VIEW` ir izveidots;
- `OWNER DECISIONS` ir izveidots;
- `OWNER REVIEW GitHub` indekss ir izveidots;
- visi trīs faili ir commit/push un GitHub-atverami;
- production changes = 0.

Ja kāds no šiem OWNER-PREP artefaktiem nav sagatavots,
AUDIT stage rezultāts ir `BLOCKED: OWNER-PREP ARTIFACTS MISSING`.

Ja findings = 0, OWNER VIEW/DECISIONS faili nav obligāti, bet audit
atskaitei skaidri jānorāda `OWNER REVIEW NOT REQUIRED — FINDINGS 0`.

Pirms OWNER-PREP izveides obligāti jāizpilda `PRE_BACKLOG_HISTORY_GATE`
(sk. §7.18). OWNER backlog drīkst ietvert tikai findingus, kas iztur
§7.11–§7.19 discovery-stability klasifikāciju.

## 7.7. AUDIT BASELINE / FINDING STABILITY / REPRODUCIBILITY

Pilns LLM lingvistiskais audits ir **DISCOVERY posms**, nevis deterministisks
closure validators. Viena un tā paša production stāvokļa atkārtota neatkarīga
LLM discovery palaišana var dot atšķirīgu findingu kopu; tāpēc findingu skaitu
nedrīkst izmantot kā lineāru kvalitātes metriku bez baseline kontroles.

Katram pilnam discovery auditam obligāti jāfiksē:

- `DATASET_PRODUCTION_SHA`;
- `AUDIT_BASELINE_SHA`;
- modelis un precīzs modeļa variants;
- audit prompt / task versija vai hash;
- izmantoto skriptu SHA/versijas;
- batch izmērs un sadalījums;
- temperature/seed/other inference settings, ja pieejami;
- deterministic pre-processing, normalization un dedup versija;
- scope un coverage;
- severity/category definīcijas;
- audita datums;
- `AUDIT_MODE = FULL_DISCOVERY`.

Ja šie parametri būtiski atšķiras, divu audit run findingu skaitļi nav
automātiski tieši salīdzināmi.

### 7.7.1. Viena discovery baseline iesaldēšana

Kad pilnais discovery audits ir pabeigts un OWNER review sākts, tiek izveidots
**FROZEN FINDING BASELINE**.

Baseline satur visus OWNER pārskatā nodotos findingus un production SHA, pret
kuru tie tika atrasti.

Pēc baseline iesaldēšanas tajā pašā repair/closure ciklā:

- nedrīkst aizvietot baseline ar jaunu neatkarīgu full-discovery findingu kopu;
- nedrīkst skaitīt "jaunā audita findings" kā automātisku remonta neveiksmi;
- nedrīkst sākt bezgalīgu `full audit → repair → full audit → repair` ciklu;
- OWNER decisions un regression tiek sasaistīti ar vienu konkrētu frozen baseline.

Baseline drīkst atvērt no jauna tikai ar skaidru OWNER lēmumu, ja:

1. mainījies MASTER noteikums vai audit scope;
2. ir būtiski mainīts production ārpus apstiprinātā OWNER repair;
3. atrasts pierādāms sistemātisks audita defekts;
4. OWNER skaidri pieprasa jaunu discovery ciklu.

### 7.7.2. Finding identitāte

Findingu salīdzināšanai starp audit run nedrīkst paļauties tikai uz Audit ID.

Stabila finding identitāte jāveido vismaz no:

`dataset + object/card/lesson ID + precise field/path + normalized problem signature`

Ja iespējams, papildus glabā `CURRENT` hash, source/DE konteksta hash,
category un severity.

### 7.7.3. Jauns LLM finding pēc repair

Ja closure/regression laikā LLM atrod kandidātu, kas nav frozen baseline:

1. pārbauda, vai konkrētais field/path tika mainīts repair laikā;
2. ja **mainīts**, kandidātu drīkst klasificēt kā
   `POSSIBLE_REPAIR_REGRESSION`, bet tikai ar Git diff pierādījumu;
3. ja **nav mainīts**, tas nevar tikt saukts par repair regression;
4. nemainītā laukā atrasts LLM-only finding tiek klasificēts kā
   `PRE_EXISTING_MISSED_CANDIDATE` vai `STYLE/FALSE_POSITIVE_CANDIDATE`;
5. tas neiet automātiskā repair queue.

Lai nemainīta lauka jauns LLM-only finding kļūtu par jaunu OWNER findingu,
nepieciešams vismaz viens no:

- OWNER lingvistisks apstiprinājums;
- neatkarīgs otrais validācijas avots/modelis ar to pašu secinājumu;
- autoritatīvs valodas avots;
- deterministisks pārkāpums pret skaidru MASTER noteikumu.

### 7.7.4. LOW / style findingi

LOW, naturalness, capitalization, punctuation un style findingi nav automātiski
remontējami tikai tāpēc, ka LLM tos piedāvā.

Ja nav objektīvas kļūdas pret valodas normu, projekta terminoloģiju vai
MASTER noteikumu, tie paliek `FALSE_POSITIVE`, `NELABOT` vai OWNER kandidāti.

### 7.7.5. Audit stability diagnostic

Ja uz identiska production SHA neatkarīgi full-discovery run dod būtiski
atšķirīgu findingu skaitu, pirms jebkāda jauna repair jāveic READ-ONLY
stability/root-cause salīdzinājums.

Obligāti nosaka vismaz:

- old finding carry-forward;
- old finding fixed;
- repair regression;
- pre-existing but previously missed;
- audit-instability / non-reproducibility;
- false-positive / style-only;
- genuinely new non-repair defect.

Bez šīs klasifikācijas findingu delta nav izmantojams kā kvalitātes pierādījums.

## 7.8. NEXT AUDIT BASELINE GATE

Pirms jebkura nākamā `FULL_DISCOVERY` audita Cursor obligāti nosaka:

- pašreizējo `origin/main` SHA;
- auditējamā dataseta production file/blob SHA;
- pēdējā `FINAL_CLOSED` dataseta production blob SHA;
- pēdējā OWNER repair/closure integrācijas statusu;
- vai eksistē jaunāks closure/repair branch production stāvoklis, kas nav
  integrēts `origin/main`.

Katram auditam obligāti jāieraksta:

- `AUDIT_MODE`;
- `MASTER_VERSION`;
- `ORIGIN_MAIN_SHA`;
- `DATASET_PRODUCTION_SHA`;
- `DATASET_PRODUCTION_BLOB_SHA`;
- `LAST_FINAL_CLOSURE_MAIN_SHA`;
- `LAST_FINAL_CLOSURE_DATASET_BLOB_SHA`;
- `UNMERGED_REPAIR_BRANCHES_FOUND`;
- `BASELINE_STATUS`.

Atļautie `BASELINE_STATUS` vismaz:

- `MATCH_LAST_FINAL_CLOSURE`;
- `MAIN_ADVANCED_EXPECTED`;
- `FIRST_AUDIT_NO_CLOSURE_BASELINE`;
- `BLOCKED_UNMERGED_CLOSURE`;
- `BLOCKED_BASELINE_MISMATCH`;
- `BLOCKED_MULTIPLE_PRODUCTION_BASELINES`.

Ja eksistē jaunāks closure/repair branch production stāvoklis, kas nav
integrēts `origin/main`, audits **NEDRĪKST** sākties. Verdict:
`BLOCKED_UNMERGED_CLOSURE`.

Auditam nedrīkst klusējot izmantot vecāku `origin/main` un pēc tam
klasificēt iepriekš izlabotās kļūdas kā jaunus findings.

### 7.8.1. Main SHA vs dataset blob identitāte

`origin/main` SHA maiņa **pati par sevi nav automātiski blocker**.

Autoritatīvs ir **auditējamā dataseta production saturs/blob**, nevis
globālais main SHA.

Ja `origin/main` SHA ir mainījies citu datasetu vai projekta izmaiņu
dēļ, bet auditējamā dataseta production saturs/blob nav mainījies,
audits drīkst turpināties ar `BASELINE_STATUS = MAIN_ADVANCED_EXPECTED`.

Citu datasetu commit uz main nedrīkst radīt false baseline mismatch.

### 7.8.2. Baseline mismatch STOP rule

Ja audits konstatē, ka pašreizējais production baseline neatbilst
pēdējam verificētajam `FINAL_CLOSED` stāvoklim, vispirms jānoskaidro
delta. Verdict: `BLOCKED_BASELINE_MISMATCH`.

Aizliegts:

- automātiski izveidot jaunu OWNER backlog;
- atkārtoti remontēt vecos findings;
- interpretēt finding count pieaugumu kā kvalitātes regresiju;
- veikt COPY-ONLY apply uz nepareiza baseline;
- deklarēt jaunus production defects bez delta pierādījuma.

Vispirms jāklasificē cēlonis, piemēram:

- `UNMERGED_OWNER_REPAIR`;
- `WRONG_BRANCH`;
- `WRONG_PRODUCTION_SNAPSHOT`;
- `EXPECTED_POST_CLOSURE_CHANGE`;
- `UNEXPECTED_PRODUCTION_REGRESSION`;
- `AUDIT_PIPELINE_CHANGE`;
- `OTHER`.

### 7.8.3. Obligātais audita atskaites baseline header

Katras pilnās audita atskaites sākumā jābūt redzamam vismaz:

``` text
MASTER VERSION:
AUDIT MODE:
ORIGIN_MAIN_SHA:
DATASET_PRODUCTION_SHA/BLOB:
LAST FINAL CLOSURE:
LAST FINAL CLOSURE MAIN SHA:
LAST FINAL CLOSURE DATASET BLOB:
UNMERGED CLOSURE/REPAIR FOUND:
BASELINE STATUS:
OWNER HISTORY AVAILABLE:
OWNER HISTORY FILES LOADED:
OWNER APPROVED FIELDS TOTAL/CHECKED/MATCHING/DRIFTED:
OWNER HISTORY GATE:
RAW AUDIT HISTORY GATE:
DISCOVERY CHURN RATE:
AUDIT_DISCOVERY_NON_REPRODUCIBILITY:
DE READ-ONLY:
```

Ja `BASELINE STATUS` ir blocker, lingvistisko full-discovery auditu
nesākt.

## 7.9. AUTHORITATIVE PRODUCTION LINE

Katram datasetam jebkurā brīdī drīkst būt tikai **viens autoritatīvais
production stāvoklis**, pret kuru tiek veikts jauns `FULL_DISCOVERY`
audits.

Autoritatīvais production avots ir:

**CURRENT `origin/main`**

kopā ar pēdējā `FINAL_CLOSED` stāvokļa metadata.

Audit branch, repair branch, OWNER branch vai closure branch **NAV**
autoritatīvs nākamā pilnā audita avots.

`Branch PASS ≠ MAIN PASS`. `Branch CLOSED ≠ FINAL_CLOSED`.

Repair/closure production, kas nav integrēts `origin/main`, nedrīkst
kļūt par nākamā `FULL_DISCOVERY` audita baseline.

### 7.9.1. Single authoritative dataset state

Pirms jebkura jauna `FULL_DISCOVERY` audita obligāti jānosaka:

- `ORIGIN_MAIN_SHA`;
- `DATASET_PRODUCTION_SHA`;
- `DATASET_PRODUCTION_BLOB_SHA`;
- `WWW_DATASET_BLOB_SHA`, ja piemērojams mirror;
- `LAST_FINAL_CLOSURE_MAIN_SHA`;
- `LAST_FINAL_CLOSURE_DATASET_BLOB_SHA`.

Obligāti jāpārbauda:

`CURRENT_MAIN_DATASET` vs `LAST_AUTHORITATIVE_CLOSURE_DATASET`

Ja iepriekšējais OWNER-approved repair/closure ir pabeigts, bet tā
production nav `origin/main`:

`BLOCKED_UNMERGED_CLOSURE`

Auditu turpināt aizliegts.

### 7.9.2. Parallel production branch detection

Pirms audita jāpārbauda, vai eksistē branch ar:

- jaunāku OWNER-approved production;
- pabeigtu repair;
- pabeigtu targeted regression;
- closure PASS;
- production blob, kas atšķiras no `origin/main`.

Ja tāds branch eksistē un tā izmaiņas nav integrētas main:

`BLOCKED_UNMERGED_CLOSURE`

Ja eksistē vairāki savstarpēji atšķirīgi kandidāti uz authoritative
production:

`BLOCKED_MULTIPLE_PRODUCTION_BASELINES`

Šādā stāvoklī aizliegts:

- Luna audit;
- `FULL_DISCOVERY`;
- OWNER-PREP;
- repair backlog ģenerēšana.

Vispirms jānosaka authoritative production un jāintegrē tas main.

### 7.9.3. No A/B branch auditing

Aizliegts auditēt vienu datasetu pārmaiņus no dažādiem production
branchiem un salīdzināt rezultātus kā viena audit/repair cikla
turpinājumu.

Audit N un Audit N+1 drīkst salīdzināt tikai tad, ja ir pierādīts:

- `SAME_DATASET_IDENTITY`;
- `SAME_AUTHORITATIVE_LINEAGE`;

un ir fiksēts precīzs production blob katram auditam.

Ja production blobs atšķiras, audit delta vispirms jāizskaidro ar
production delta.

Finding count delta nedrīkst interpretēt kā kvalitātes izmaiņu, pirms
production lineage ir verificēts.

### 7.9.4. Force-baseline prohibition

Production valodas audit workflow aizliegts apiet baseline STOP gate.

Aizliegts izmantot:

- `--force-baseline`;
- jebkuru ekvivalentu mehānismu, kas ļauj turpināt `FULL_DISCOVERY`
  pēc:
  - `BLOCKED_UNMERGED_CLOSURE`;
  - `BLOCKED_BASELINE_MISMATCH`;
  - `BLOCKED_MULTIPLE_PRODUCTION_BASELINES`.

Audit scripts nedrīkst piedāvāt force override kā normālu production
audit opciju.

Ja tehniskiem/diagnostikas nolūkiem override mehānisms eksistē, tā
rezultāts obligāti ir:

`DIAGNOSTIC_ONLY`

un:

- `VALID_FOR_REPAIR = NO`;
- `VALID_FOR_OWNER_REVIEW = NO`;
- `VALID_FOR_CLOSURE = NO`.

No šāda run nedrīkst ģenerēt authoritative OWNER backlog.

## 7.10. OWNER REVIEW ARTIFACTS — OBLIGĀTI PĒC AUDITA

Pēc katra pabeigta `FULL_DISCOVERY` / `FULL LANGUAGE AUDIT`, ja audits
ir atradis vismaz vienu validētu findingu, obligāti jāizveido OWNER review
artefakti.

Audits **nav** uzskatāms par pilnībā pabeigtu, kamēr šie faili nav
izveidoti un pieejami OWNER atvēršanai GitHub.

### 7.10.1. Obligātie faili

Obligāti izveidot:

1.  `reports/<language>-<scope>-owner-view.md`
2.  `reports/<language>-<scope>-owner-decisions.md`
3.  `reports/<language>-<scope>-owner-review-GITHUB.md`

Failiem jāatrodas audit branch un jābūt commitotiem/pushotiem uz GitHub.

GitHub indeksa failā jābūt tiešām atveramām saitēm vismaz uz:

- pilno audita atskaiti;
- `OWNER VIEW`;
- `OWNER DECISIONS`.

Nedrīkst pabeigt audita uzdevumu, norādot tikai lokālus failu ceļus.

### 7.10.2. OWNER VIEW saturs

`owner-view.md` jāietver **VISI** validētie audita findingi.

Nedrīkst:

- atlasīt tikai HIGH/CRITICAL;
- izlaist MEDIUM vai LOW;
- izlaist sectionAccents findingus;
- izlaist Study findingus;
- izlaist strukturālos findingus;
- apvienot vairākus atsevišķus findingus vienā tā, ka OWNER vairs nevar
  pieņemt individuālu lēmumu.

Katram findingam obligāti norādīt:

- Audit ID;
- Card ID / Object ID;
- precīzu Field/path;
- Severity;
- Category;
- DE/source reference, ja attiecināms;
- `CURRENT`;
- `PROPOSED_<LANGUAGE>`;
- problēmas skaidrojumu;
- audita pamatojumu;
- `OWNER STATUS`: `PENDING`;
- `OWNER_DECISION`: tukšs.

Ja `MULTIPLE_TRANSLATIONS_DETECTED = true`, papildus obligāti (sk. §1.1.4):

- detected translation candidates;
- semantic assessment;
- recommended main translation (ja ir);
- `Status: OWNER_DECISION_REQUIRED` līdz OWNER lēmumam.

`PROPOSED_<LANGUAGE>` ir tikai audita ieteikums un **nav** OWNER
apstiprināts labojums.

### 7.10.3. OWNER DECISIONS saturs

`owner-decisions.md` jāietver tieši tas pats pilnais findingu kopums kā
`OWNER VIEW`.

Obligāti:

`OWNER VIEW findings == OWNER DECISIONS findings == validated audit findings`

Katram findingam jābūt vismaz:

- Audit ID;
- Card ID / Object ID;
- Field/path;
- `CURRENT`;
- `PROPOSED_<LANGUAGE>`;
- Severity;
- Category;
- `OWNER STATUS`;
- `OWNER_DECISION` / `NEW`;
- OWNER NOTE.

Sākotnējais `OWNER STATUS` visiem repair candidates:

`PENDING`

Audita process pats nedrīkst automātiski pārvērst `PROPOSED_<LANGUAGE>`
par OWNER apstiprinātu `NEW`.

### 7.10.4. 100% coverage gate

Pirms audita pabeigšanas obligāti verificēt:

```text
Validated findings: N
OWNER VIEW findings: N
OWNER DECISIONS findings: N

Missing in OWNER VIEW: 0
Missing in OWNER DECISIONS: 0
Duplicate Audit IDs: 0
Invalid/missing Card ID or Object ID: 0
Invalid/missing Field/path: 0

OWNER REVIEW ARTIFACT COVERAGE: 100%
```

Ja `OWNER REVIEW ARTIFACT COVERAGE < 100%`, AUDIT stage rezultāts ir
`BLOCKED: OWNER-PREP COVERAGE FAIL`.

Coverage gate jāpārbauda pirms commit/push un pirms `NEEDS OWNER REVIEW`
deklarācijas.

## 7.11 NEW-TO-AUDIT ≠ NEW-PRODUCTION-ERROR

Finding, kas pirmo reizi parādās pašreizējā auditā, NAV automātiski:

`NEW_VALIDATED_REAL_FINDING`

vai

`NEW_PRODUCTION_ERROR`.

Pirms finding drīkst kļūt par jaunu OWNER backlog, obligāti jāpārbauda:

- current production history;
- previous RAW LLM audit history;
- previous validated findings;
- OWNER history;
- repair history;
- semantic finding registry.

Ja pašreizējā problemātiskā production vērtība eksistēja jau iepriekšējā
FULL_DISCOVERY auditā, finding nav "new production error".

Tas jāklasificē atbilstoši tā faktiskajai izcelsmei.

### 7.11.1 OBLIGĀTĀS DISCOVERY ROOT-CAUSE KATEGORIJAS

Katrs atkārtota FULL_DISCOVERY audita kandidāts pirms OWNER backlog
obligāti jāklasificē vienā no šīm kategorijām:

- `PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE`
- `PRE_EXISTING_BUT_PREVIOUSLY_MISSED`
- `OWNER_DECISION_CONFIRMED`
- `OWNER_DECISION_REOPEN_REQUIRED`
- `REPAIR_REGRESSION`
- `FALSE_POSITIVE_OR_STYLE_ONLY`
- `GENUINELY_NEW_VALIDATED_REAL_FINDING`

Kategoriju `GENUINELY_NEW_VALIDATED_REAL_FINDING` drīkst izmantot tikai
tad, ja ir pierādīts, ka:

1. finding nav iepriekšējā RAW audit history;
2. finding nav validated finding history;
3. finding nav OWNER history;
4. finding nav semantiski ekvivalents iepriekšējam findingam;
5. finding nav repair regression;
6. current problematic value nav vienkārši iepriekš nepamanīta veca vērtība;
7. finding nav false positive/style-only;
8. ir pierādāms production delta vai objektīvs jaunuma pamatojums.

## 7.12 RAW AUDIT HISTORY IR OBLIGĀTS AUDITA AVOTS

Atkārtotā FULL_DISCOVERY auditā nepietiek ielādēt tikai OWNER history.

Obligāti ielādēt arī pieejamo:

- RAW LLM candidate history;
- validated finding history;
- previous audit PASS/FINDING state;
- previous semantic issue signatures.

Ja RAW audit history ir pieejama, bet nav ielādēta:

`RAW_AUDIT_HISTORY_GATE = FAIL`

un jaunais OWNER backlog nav autoritatīvs.

### 7.12.1 RAW FINDINGS NEDRĪKST TIKT PAZAUDĒTI

Katram FULL_DISCOVERY auditam jāsaglabā pilns RAW candidate registry.

Minimums:

- dataset;
- audit run ID;
- production blob;
- card/object ID;
- field/path;
- CURRENT;
- category;
- severity;
- problem signature;
- proposed replacement;
- raw model verdict;
- validated status.

RAW candidate, kas nav ticis OWNER review, nedrīkst pazust no vēstures.

Ja tas parādās atkārtotā auditā, klasificēt:

`PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE`

nevis `NEW_VALIDATED_REAL_FINDING`.

## 7.13 SEMANTIC FINDING REGISTRY

Katram datasetam jāuztur semantic finding registry.

Finding identity nedrīkst balstīties tikai uz Audit ID vai exact path +
wording.

Semantiskā finding identitāte jāveido vismaz no:

```text
dataset
+ card/object ID
+ semantic issue signature
+ affected pedagogical meaning
+ field/path family
```

Tas ļauj atpazīt vienu un to pašu problēmu arī tad, ja:

- Luna maina formulējumu;
- severity mainās;
- category mainās;
- finding pārvietojas uz blakus field/path;
- tas pats semantiskais defekts tiek konstatēts citā examples/comparison laukā.

### 7.13.1 BLĒKUS LAUKU SEMANTISKĀ DEDUPLIKĀCIJA

Ja iepriekšējais findings skāra vienu comparison/example lauku, bet
nākamais audits atrod to pašu semantisko problēmu blakus laukā, pirms
klasifikācijas NEW obligāti jāveic semantic-family comparison.

Ja tas ir tas pats semantiskais issue family:

`PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE`

vai cita atbilstoša history-aware kategorija.

Neveidot mākslīgi jaunu finding tikai cita path dēļ.

## 7.14 AUDIT DISCOVERY REPRODUCIBILITY GATE

Atkārtotam FULL_DISCOVERY auditam jāaprēķina discovery stability pret
iepriekšējo salīdzināmo audit run.

Obligāti:

- `PREVIOUS_RAW_COUNT`
- `CURRENT_RAW_COUNT`
- `EXACT_OVERLAP`
- `SEMANTIC_OVERLAP`
- `PREVIOUS_ONLY`
- `CURRENT_ONLY`
- `DISCOVERY_CHURN_RATE`

Ja production ir identisks vai attiecīgie lauki nav mainīti, bet findings
kopa būtiski mainās:

`AUDIT_DISCOVERY_NON_REPRODUCIBILITY = YES`

Tas nav automātisks audit failure, bet tas bloķē findingu klasifikāciju kā
"new production errors" bez forensic history validation.

### 7.14.1 DISCOVERY CHURN STOP RULE

Ja:

`AUDIT_DISCOVERY_NON_REPRODUCIBILITY = YES`

un current-only findings eksistē uz nemainīga production, tie nedrīkst
automātiski kļūt par OWNER backlog.

Obligāti jāiziet:

`DISCOVERY_HISTORY_VALIDATION`

pirms OWNER-PREP.

## 7.15 COVERAGE DISCLAIMER

`Luna coverage = 100%` vai `702/702` nozīmē tikai: visi objekti tika
nosūtīti audit modelim.

Tas NEPIERĀDA:

- ka atrastas visas iespējamās kļūdas;
- ka PASS kartīte ir absolūti bez kļūdām;
- ka nākamais audits nevar atrast iepriekš nepamanītu problēmu;
- ka modelis ir reproducējams.

Audit reportā pie LLM coverage obligāti jānorāda:

```text
OBJECT_COVERAGE = 100%
DISCOVERY_COMPLETENESS = NOT GUARANTEED
```

## 7.16 PASS NAV NEGATĪVS PIERĀDĪJUMS PAR ABSOLŪTU KOREKTUMU

Ja Luna iepriekš kartītei deva PASS, bet nākamajā auditā atrod findingu,
tas viens pats nepierāda production regresiju.

Vispirms jāpārbauda:

- vai CURRENT value bija identiska;
- vai field/path bija identisks;
- vai semantic issue jau eksistēja;
- vai repair skāra šo lauku.

Ja production nemainījās:

`PRE_EXISTING_BUT_PREVIOUSLY_MISSED`

nevis `NEW_PRODUCTION_ERROR`.

## 7.17 NEEDS_SOURCE_REVIEW CARRY-FORWARD

Finding ar `NEEDS_SOURCE_REVIEW` nedrīkst pazust nākamajā auditā tikai
tāpēc, ka Luna to neatrod.

Tam jāpaliek semantic finding registry līdz:

- OWNER source resolution;
- `NELABOT`;
- `FALSE_POSITIVE`;
- `LABOT` + verified apply.

Ja tas atkal parādās jaunā auditā, neveidot jaunu PENDING finding.

Saglabāt iepriekšējo statusu:

`NEEDS_SOURCE_REVIEW_CARRY_FORWARD`.

## 7.18 PRE-BACKLOG HISTORY GATE

Pirms OWNER VIEW / OWNER DECISIONS izveides:

```text
RAW candidates
        ↓
semantic deduplication
        ↓
RAW audit history comparison
        ↓
OWNER history comparison
        ↓
repair history comparison
        ↓
production history comparison
        ↓
root-cause classification
        ↓
ONLY THEN OWNER backlog
```

OWNER-PREP drīkst ietvert tikai:

- `GENUINELY_NEW_VALIDATED_REAL_FINDING`
- `OWNER_DECISION_REOPEN_REQUIRED`
- `REPAIR_REGRESSION`

un citus MASTER skaidri OWNER review paredzētus unresolved statusus.

Tas nedrīkst ietvert:

- `PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE`
- `PRE_EXISTING_BUT_PREVIOUSLY_MISSED` bez OWNER nepieciešamības
- `OWNER_DECISION_CONFIRMED`
- `FALSE_POSITIVE_OR_STYLE_ONLY`

## 7.19 AUDIT COMPLETENESS MODEL — SEMANTIC ≠ DETERMINISTIC

`FULL_DISCOVERY` satur divus atšķirīgus pierādījumu veidus.

### 7.19.1. Semantic discovery

Semantic/LLM audits nozīmē:

> all required objects inspected in this run

nevis:

> all possible linguistic defects mathematically exhausted.

Tāpēc:

```text
SEMANTIC_DISCOVERY_COMPLETENESS = NOT_GUARANTEED
```

ir korekts un obligāti skaidri norādāms.

### 7.19.2. Deterministic discovery

Deterministiski definētām kļūdu klasēm projekta toolingam jānodrošina
pilna enumerācija pār konkrēto scope.

Tāpēc:

```text
DETERMINISTIC_DISCOVERY_COMPLETENESS = 100% REQUIRED
```

nav LLM solījums; tas ir tooling / scan coverage kontrakts.

### 7.19.3. Closure interpretācija

Closure nedrīkst balstīt tikai uz:

-   vienu Luna PASS;
-   OWNER target retention;
-   finding count = 0 vienā stochastic runā;
-   statisku source validatoru.

Closure jābalsta uz:

-   deterministic full gates;
-   deterministic residual full scan;
-   semantic finding registry;
-   OWNER history;
-   unresolved finding registry;
-   repair verification;
-   targeted regression;
-   runtime/browser gates, ja attiecas;
-   authoritative `origin/main` post-merge verification.

## 7.20 AUTOMATIC OWNER ARTIFACT GENERATION

Ja:

`OWNER_BACKLOG_FINAL > 0`

audita orchestratoram tajā pašā audit run obligāti automātiski jāizveido:

1.  `reports/<scope>-owner-view.md`
2.  `reports/<scope>-owner-decisions.md`
3.  `reports/<scope>-owner-review-GITHUB.md`

Papildu group faili ir atļauti, bet tie nav authoritative minimums.

Authoritative OWNER artefakti ir:

- viens pilns OWNER VIEW;
- viens pilns OWNER DECISIONS;
- viens GitHub indekss.

Lietotājam nav jāpieprasa šo failu izveide atsevišķā uzdevumā.

### 7.20.1 SAME-RUN REQUIREMENT

OWNER artefakti jāģenerē tajā pašā audita workflow, kurā tiek noteikts
`OWNER_BACKLOG_FINAL`.

Aizliegts:

`FULL_DISCOVERY → NEEDS_OWNER_REVIEW → STOP → gaidīt lietotāja komandu → tikai tad ģenerēt OWNER failus.`

Pareizi:

`FULL_DISCOVERY → discovery/history validation → OWNER_BACKLOG_FINAL → OWNER artefaktu automātiska ģenerēšana → coverage verification → commit → push → GitHub link verification → NEEDS_OWNER_REVIEW`

### 7.20.2 AUDIT ORCHESTRATOR HARD REQUIREMENT

Katram aktīvajam `run-*-full-audit.*` vai ekvivalentam audit orchestratoram
pašam jāizsauc OWNER artifact builder.

Nedrīkst būt nepieciešama atsevišķa manuāla komanda `build-*-owner-review.*`,
lai audits kļūtu pabeigts.

Builder drīkst eksistēt kā reusable modulis vai CLI, bet audit orchestratoram
tas jāizsauc automātiski.

### 7.20.3 OWNER VIEW REQUIREMENTS

OWNER VIEW jāietver 100% no `OWNER_BACKLOG_FINAL`.

Katram findingam obligāti:

- Audit ID;
- Card / lesson / object ID;
- exact field/path;
- production file;
- severity;
- category;
- CURRENT;
- source / DE context, ja nepieciešams;
- LV MASTER reference, ja nepieciešams;
- problem description;
- PROPOSED_* kā audita ieteikums;
- OWNER history status, ja eksistē;
- OWNER STATUS = PENDING;
- OWNER_DECISION = tukšs.

PROPOSED_* nedrīkst tikt pasniegts kā OWNER lēmums.

### 7.20.4 OWNER DECISIONS REQUIREMENTS

OWNER DECISIONS jāietver precīzi tas pats findingu kopums kā OWNER VIEW.

Hard equality:

`OWNER_VIEW_FINDINGS == OWNER_DECISIONS_FINDINGS == OWNER_BACKLOG_FINAL`

Katram ierakstam:

- Audit ID;
- ID;
- field/path;
- CURRENT;
- PROPOSED_*;
- severity;
- category;
- OWNER STATUS = PENDING;
- OWNER_DECISION = tukšs;
- NEW = tukšs līdz OWNER lēmumam.

Atļautie gala OWNER statusi: `LABOT`, `NELABOT`, `FALSE_POSITIVE`,
`NEEDS_SOURCE_REVIEW`.

### 7.20.5 OWNER ARTIFACT COVERAGE GATE

Pirms audita verdict `NEEDS_OWNER_REVIEW` obligāti pārbaudīt:

```text
OWNER_BACKLOG_FINAL = N
OWNER_VIEW_FINDINGS = N
OWNER_DECISIONS_FINDINGS = N
MISSING_IN_OWNER_VIEW = 0
MISSING_IN_OWNER_DECISIONS = 0
DUPLICATE_AUDIT_IDS_VIEW = 0
DUPLICATE_AUDIT_IDS_DECISIONS = 0
OWNER_ARTIFACT_COVERAGE = 100%
```

Ja coverage < 100%:

`FINAL VERDICT = BLOCKED_OWNER_ARTIFACT_COVERAGE_FAIL`

Nevis `NEEDS_OWNER_REVIEW`.

## 7.21 AUTOMATIC GIT PUBLICATION

Ja `OWNER_BACKLOG_FINAL > 0`, OWNER artefaktu izveide vien nepietiek.

Audita workflow obligāti:

1.  saglabā failus;
2.  git add;
3.  commit;
4.  push uz audit branch;
5.  pārbauda, ka remote branch satur failus;
6.  ģenerē GitHub `blob` saites;
7.  verificē, ka saites norāda uz pareizo branch un failu.

Tikai pēc tam drīkst deklarēt:

`OWNER_ARTIFACT_PUBLICATION = PASS`.

### 7.21.1 GITHUB INDEX

`reports/<scope>-owner-review-GITHUB.md` obligāti jāietver tiešas GitHub
`blob` saites uz:

- full audit report;
- OWNER VIEW;
- OWNER DECISIONS;
- audit JSON, ja eksistē;
- group failiem, ja tie eksistē.

Relatīvas lokālas saites vien nepietiek.

### 7.21.2 FINAL RESPONSE REQUIREMENT

Audita gala atbildē lietotājam obligāti jāparāda:

```text
OWNER VIEW: <GitHub link>
OWNER DECISIONS: <GitHub link>
OWNER REVIEW INDEX: <GitHub link>
```

Ja `OWNER_BACKLOG_FINAL > 0` un šīs saites nav pieejamas, audits nav
pabeigts.

## 7.22 OWNER ARTIFACT PUBLICATION FAILURE

Ja OWNER artefaktu ģenerēšana, coverage validation, commit, push, GitHub
link generation vai link verification neizdodas:

`FINAL VERDICT = BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED`

Aizliegts deklarēt `NEEDS_OWNER_REVIEW`, kamēr artefakti nav publicēti un
atverami.

### 7.22.1 USER SHALL NOT BE THE TRIGGER

Aizliegts workflow:

- "Audits pabeigts. Ja vēlies, varu sagatavot OWNER VIEW / OWNER DECISIONS."
- "Nākamais solis: palūdz sagatavot OWNER failus."
- "Augšupielādē owner-view group failus."

Ja audita tooling spēj tos ģenerēt pats, tie jāģenerē automātiski.

OWNER failu ģenerēšana nav OWNER lēmums. Tā ir audita infrastruktūras
funkcija.

## 7.23 MONOLITHIC OWNER ARTIFACT RULE

Obligātais authoritative formāts:

- `reports/<scope>-owner-view.md`
- `reports/<scope>-owner-decisions.md`

Group faili drīkst eksistēt tikai kā navigācijas palīdzība, lielu failu
ērtāka apskate vai tehnisks secondary artifact.

Group faili nedrīkst aizstāt pilnos monolītos failus.

OWNER nedrīkst būt spiests vākt kopā group01, group02, group03…, lai
iegūtu pilnu backlog.

## 7.24 ATOMIC AUDIT COMPLETION CONTRACT

Audits ar `OWNER_BACKLOG_FINAL > 0` ir pabeigts tikai tad, ja:

```text
AUDIT_EXECUTION = PASS
DISCOVERY_HISTORY_GATES = PASS
OWNER_BACKLOG_FINAL calculated = PASS
OWNER_VIEW_GENERATED = PASS
OWNER_DECISIONS_GENERATED = PASS
OWNER_GITHUB_INDEX_GENERATED = PASS
OWNER_ARTIFACT_COVERAGE = 100%
OWNER_ARTIFACTS_COMMITTED = PASS
OWNER_ARTIFACTS_PUSHED = PASS
OWNER_GITHUB_LINKS_VERIFIED = PASS
```

Tikai tad:

`FINAL VERDICT = NEEDS_OWNER_REVIEW`

Ja kaut viens no šiem FAIL:

`FINAL VERDICT = BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED`

## 7.25 MULTI_TRANSLATION_SCAN

MASTER pilnajam deterministic discovery slānim obligāti pievienots:

`MULTI_TRANSLATION_SCAN`

Scope:

**100% visu kartīšu tipu learner-facing galveno tulkojuma lauku**
(atbilstoši `MAIN_TRANSLATION_FIELD_INVENTORY`).

Jāmeklē vismaz:

-   `•`;
-   `/`;
-   `;`;
-   newline/list konstrukcijas;
-   arrays vai citas struktūras, kas rendererī rada vairākus
    learner-facing tulkojumus;
-   citi deterministiski identificējami vairāku tulkojumu modeļi.

Svarīgi:

separatora atrašana ir **candidate detection**, nevis automātisks
lingvistisks spriedums.

False positive drīkst aizvērt tikai validācija/OWNER process atbilstoši
findinga tipam.

Ja `MULTIPLE_TRANSLATIONS_DETECTED = true`:

`OWNER_DECISION_REQUIRED` (sk. §1.1.3).

## 7.26. Pilna audita definīcija — CARD vs FIELD coverage (v1.13)

Pilns audits ir pabeigts tikai tad, ja izpildīti **abi** nosacījumi:

1. pārbaudītas visas scope kartītes;
2. pārbaudīti visi katras kartītes auditējamie lauki.

Aizliegts interpretēt:

```text
CARD_COVERAGE = 100%
```

kā pierādījumu tam, ka pārbaudīti visi kartīšu lauki.

Obligāti jāuzrāda atsevišķi:

```text
CARD_COVERAGE
FIELD_COVERAGE
STUDY_SECTION_COVERAGE
```

Šī prasība papildina §7.2, §7.19 un §7.10.4, bet tās neaizstāj.

## 7.27. Deterministisks lauku inventārs (v1.13)

Pirms Luna audita skriptam deterministiski jāizveido visu auditējamo objektu un
lauku inventārs.

Katram laukam obligāti jāsaglabā:

```text
Dataset
Card number
Card ID
Card type
Field/path
CURRENT
DE context
Card context
Study section
Source file
Production baseline SHA
```

Katram laukam jābūt stabilai unikālai atslēgai:

```text
(Dataset, Card ID, Field/path)
```

Ja viena atslēga atkārtojas:

```text
DUPLICATE_FIELD_KEY
```

un auditēšana nedrīkst tikt atzīta par pabeigtu.

Inventārs ir obligāts avots `FIELD_COVERAGE` un batch `EXPECTED_FIELDS`
aprēķinam.

## 7.28. Precīzs Card ID un Field/path (v1.13)

Katram findingam obligāti jānorāda:

- precīzs production `Card ID`;
- precīzs, tehniski atrisināms `Field/path`;
- precīzs `CURRENT`;
- atbilstošais DE teksts;
- nepieciešamais kartītes vai Study konteksts.

Aizliegti nenoteikti mērķi, piemēram:

```text
comparison[?]
sectionAccents (examples)
study field
some example
```

Ja auditam nav iespējams noteikt precīzu lauku:

```text
NEEDS_SOURCE_REVIEW
```

vai:

```text
TECHNICAL_DEFER
```

Šādu rindu nedrīkst nodot COPY-ONLY apply kā `LABOT`.

## 7.29. Obligāta pre-finding validācija (v1.13)

Pirms findinga publicēšanas skriptam jāpārbauda:

```text
Card ID exists
Field/path exists
CURRENT === production value
Card ID belongs to the actual target object
Field belongs to the reported Card ID
Finding is unique
```

Ja kāda pārbaude neizdodas, findings nedrīkst nonākt OWNER backlog kā
apply-gatavs atradums.

Statusi:

```text
INVALID_CARD_ID
INVALID_FIELD
CURRENT_VALUE_MISMATCH
TARGET_OBJECT_MISMATCH
DUPLICATE_FINDING
```

Šādi ieraksti jālabo audita slānī pirms OWNER faila publicēšanas.

Šī prasība papildina §1.1.13 `INVALID AUDIT GATE` un §11.9 OWNER backlog
validitāti.

## 7.30. Obligāta lauku līmeņa Luna atbilde (v1.13)

Luna jāatgriež rezultāts par **katru** inventārā iekļauto auditējamo lauku.

Atļautie rezultāti:

```text
PASS
FINDING
NEEDS_SOURCE_REVIEW
```

Nedrīkst uzskatīt lauku par pārbaudītu, ja tam nav neviena no šiem
rezultātiem.

Katram batch obligāti jābūt:

```text
EXPECTED_FIELDS
RETURNED_FIELD_RESULTS
MISSING_FIELD_RESULTS
DUPLICATE_FIELD_RESULTS
```

Batch ir `PASS` tikai tad, ja:

```text
EXPECTED_FIELDS === RETURNED_FIELD_RESULTS
MISSING_FIELD_RESULTS = 0
DUPLICATE_FIELD_RESULTS = 0
```

## 7.31. Obligāta audita sadalīšana — normatīvā Luna batch hierarhija (v1.13)

Lielus valodas failus nedrīkst nosūtīt Luna kā vienu nedalītu audita bloku.

**OWNER apstiprinātā normatīvā hierarhija** (dataset-specific limits vienmēr
prioritāri pār vispārīgu grupas limitu; sk. arī `PHASE_1_READ_ONLY_DISCOVERY_SPEC.md` §5.3):

| Scope / dataset | Maksimālais batch (`batchSizeConfigured`) |
| --------------- | ----------------------------------------: |
| G2 ordinary cards | 25 |
| G2 `minimalStudy` | 10 |
| G2 `standardStudy` | 5 |
| G1 `sentences` — pilni teikumu objekti | 25 |
| G1 `verbs` — pilni verba objekti (5 formas nedalāmas) | 10 |
| G1 `courseTrainingCards` — pilni training-card objekti | 50 |
| G3 `courseLessons` — pilni lesson objekti | 20 |

**Noteikumi:**

- specifiskais dataset limits vienmēr ir prioritārs pār vispārīgu grupas limitu;
- verba objekta piecas formas nedrīkst sadalīt starp batchiem;
- Study objekts nedrīkst tikt sadalīts starp batchiem;
- mazāks pēdējais batch ir atļauts;
- lielāks batch par tabulā noteikto ir **aizliegts**;
- batch limits **nemaina** prasību auditēt 100% objektu.

Ja konkrētā datu struktūra ir īpaši liela vai sarežģīta, batch jāsamazina
vēl vairāk (zem tabulas max).

Batch palielināšana virs tabulas max ir atļauta **tikai** ar OWNER lēmumu un
pierādītu pilnu `FIELD_COVERAGE`.

Visu batchu rezultāti jāapvieno vienā kopējā auditā un vienā OWNER backlog.
Batch sadalījums nedrīkst radīt vairākus neatkarīgus OWNER remonta procesus.

## 7.32. Parasto kartīšu lauku audits (v1.13)

Parastajai kartītei jāpārbauda visi faktiski eksistējošie auditējamie lauki,
tostarp:

- galvenais tulkojums;
- papildteksts;
- artikuls;
- daudzskaitlis;
- dzimte;
- gramatiskā forma;
- metadati;
- redzamie paskaidrojumi;
- atbilstība DE mērķvārdam;
- Learning First Principle.

Obligāti jāpārbauda, ka parastās kartītes galvenajā nozīmē nav:

- `•`;
- `/`;
- komatu virknes;
- vairākas savstarpēji atšķirīgas nozīmes;
- paskaidrojuma teksta galvenās nozīmes vietā.

Ja vajadzīgas vairākas nozīmes, jāizmanto `standardStudy`, nevis jāpārslogo
parastā kartīte (sk. arī §1.1).

## 7.33. Study kartīšu lauku audits (v1.13)

Katram `minimalStudy` un `standardStudy` objektam jāizveido pilns tā faktiski
eksistējošo lauku inventārs.

`standardStudy` auditā atsevišķi jāpārbauda:

- galvenā nozīme;
- virsraksts un DE apakšvirsraksts;
- Galvenā doma;
- `explanation`;
- visi `examples`;
- visi `comparison` ieraksti;
- `tip`;
- `important`;
- `sectionAccents`;
- tulkojuma savstarpējā konsekvence;
- DE–mērķvalodas semantiskā atbilstība;
- kartītes iekšējā konsekvence.

Katrs masīva elements jāuzskata par atsevišķu auditējamu lauku, piemēram:

```text
study.examples[0].lv
study.examples[1].lv
study.comparison[0].meaning
study.comparison[0].example
study.tip.text
study.important[0]
```

Nedrīkst atskaitē apvienot vairākus laukus vienā rindā ar:

```text
+N citi atradumi
```

Viena rinda ir viens precīzs:

```text
(Card ID, Field/path)
```

## 7.34. sectionAccents audits (v1.13)

`sectionAccents` jāauditē kā atsevišķs strukturāls slānis pēc redzamā
FR/mērķvalodas teksta pārbaudes (sk. arī §4).

Katram akcenta terminam jāpierāda:

- precīzs `sectionAccents` ceļš;
- sadaļa, kurā termins jāatrod;
- faktiskais sadaļas teksts;
- vai termins tekstā eksistē;
- vai reģistrs, diakritiskās zīmes un vārda forma atbilst.

Automātiski nedrīkst pieņemt, ka:

- mērķvalodas vārds Study tekstā ir `FOREIGN_REMNANT`;
- vācu mērķvārds DE–mērķvalodas Study skaidrojumā ir kļūda;
- `•` vai `/` Study salīdzinājumā vienmēr ir kļūda;
- trūkstošs `sectionAccents` objekts automātiski nozīmē lingvistisku kļūdu.

Ja akcenta termins ir novecojis, findings jānorāda ar precīzu masīva ceļu un
vērtību.

## 7.35. Trīs atsevišķi audita slāņi (v1.13)

Katram batch jāveic trīs atsevišķi pārbaudes slāņi.

### 7.35.1. Semantika un tulkojums

Pārbaudīt:

- mērķvalodas atbilstību DE vārdam;
- piemēra atbilstību DE teikumam;
- nepareizu nozīmi;
- sajauktus salīdzinājuma vārdus;
- nepareizu personu, dzimti, skaitli vai formalitāti;
- nevajadzīgi pievienotu vai izlaistu informāciju.

### 7.35.2. Gramatika un ortogrāfija

Pārbaudīt:

- gramatiskās formas;
- artikulus;
- dzimti un skaitli;
- darbības vārdu formas;
- pieturzīmes;
- diakritiskās zīmes;
- lielos un mazos burtus;
- dabisku mērķvalodas formulējumu.

### 7.35.3. Study struktūra un sectionAccents

Pārbaudīt:

- Study sadaļu pilnību;
- piemēru un comparison savstarpējo atbilstību;
- nepareizajā kartītē ievietotu Study saturu;
- novecojušus akcenta terminus;
- trūkstošus vai nepareizi kartētus laukus;
- `minimalStudy` un `standardStudy` struktūras atbilstību.

Findingus drīkst konsolidēt tikai pēc visu trīs slāņu pabeigšanas.

## 7.36. Findingu kvalitātes vārti (v1.13)

Pirms OWNER failu ģenerēšanas obligāti:

```text
INVALID_CARD_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
CURRENT_VALUE_MISMATCH = 0
DUPLICATE_FINDING = 0
MISSING_REQUIRED_CONTEXT = 0
```

Ja kaut viens rādītājs nav nulle:

```text
AUDIT_ARTIFACTS_BLOCKED
```

OWNER backlog nedrīkst publicēt kā apply-gatavu.

## 7.37. Obligātie gala audita rādītāji (v1.13)

Pilna audita atskaitē obligāti jānorāda:

```text
CARD_COVERAGE = audited cards / expected cards
FIELD_COVERAGE = returned field results / expected fields
STUDY_SECTION_COVERAGE = audited Study sections / expected Study sections
CURRENT_EXACT_MATCH = matched fields / checked fields
DUPLICATES = 0
MISSING_RESULTS = 0
INVALID_CARD_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
```

Pilns audits ir `PASS` tikai tad, ja:

```text
CARD_COVERAGE = 100%
FIELD_COVERAGE = 100%
STUDY_SECTION_COVERAGE = 100%
CURRENT_EXACT_MATCH = 100%
DUPLICATES = 0
MISSING_RESULTS = 0
INVALID_CARD_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
```

## 7.38. OWNER backlog ģenerēšana — apply-gatavības noteikumi (v1.13)

Vienā OWNER backlog drīkst iekļaut tikai validētus:

```text
FINDING
NEEDS_SOURCE_REVIEW
```

Katram `FINDING` obligāti:

```text
Audit ID
Card ID
Field/path
DE context
CURRENT
PROPOSED
Severity
Category
Evidence
OWNER STATUS
OWNER NEW
OWNER note
```

`PROPOSED` nav OWNER lēmums.

Cursor nedrīkst izmantot audita `PROPOSED` kā remonta avotu, kamēr OWNER nav
piešķīris:

```text
OWNER STATUS = LABOT
OWNER NEW = precīza gala vērtība
```

Šī prasība papildina §7.6, §7.20 un §9 COPY-ONLY repair.

## 7.39. Audita pabeigtības interpretācija (v1.13)

Aizliegts atskaitē rakstīt:

```text
100% audit complete
```

tikai tāpēc, ka modelim nosūtītas visas kartītes.

Atļauts rakstīt `100% audit complete` tikai tad, ja pierādīti visi:

```text
CARD_COVERAGE
FIELD_COVERAGE
STUDY_SECTION_COVERAGE
BATCH_COMPLETENESS
CURRENT_EXACT_MATCH
```

## 7.40. KURSS / LESSONS FULL AUDIT STANDARD — piemērošanas joma (v1.14)

Kurss audits ir **atsevišķs** pilna valodas audita modulis.

To nedrīkst aizstāt ar A1–C2:

- parasto kartīšu auditu;
- `minimalStudy` auditu;
- `standardStudy` auditu;
- vienkāršu Card ID paritātes pārbaudi.

Kurss audits aptver:

- visas 21 lekcijas;
- L1–6 legacy struktūru;
- L7 atsevišķo deck struktūru;
- L8–21 flashcard/training-card struktūru;
- dialogus;
- vārdu un frāžu sarakstus;
- gramatikas skaidrojumus;
- piemērus;
- vingrinājumus;
- jautājumu un atbilžu pārus;
- training cards;
- lesson flashcards;
- koplietotās UI atslēgas;
- Kurss HTML un renderer struktūru;
- primary/`www` spoguļus;
- LV fallback kontroli;
- vizuālo un funkcionālo paritāti.

Šī sadaļa papildina §5 Kurss master noteikumus un §7.26–§7.39 vispārējo
audita metodiku, bet tās neaizstāj.

## 7.41. LV Kurss etalona loma (v1.14)

LV Kurss ir obligātais etalons:

- lekciju skaitam;
- sadaļu secībai;
- sadaļu tipiem;
- objektu skaitam;
- Card ID;
- funkcionālajai uzvedībai;
- renderer darbībai;
- progress loģikai;
- flip/next darbībai;
- training režīmiem;
- vizuālajai struktūrai;
- pedagoģiskajai loģikai.

LV teksts **nav** automātisks mērķvalodas tulkojuma avots.

Aizliegts:

- automātiski kopēt LV tekstu uz mērķvalodu;
- burtiski pārtulkot LV tekstu bez DE konteksta;
- izmantot LV `CURRENT` kā mērķvalodas `OWNER NEW`;
- mainīt DE tekstu, lai tas atbilstu kļūdainam LV vai mērķvalodas tekstam.

Mērķvalodas lingvistiskā vērtība jāpārbauda pret:

1. DE saturu;
2. konkrētās lekcijas kontekstu;
3. mērķvalodas gramatiku un dabiskumu;
4. LV pedagoģisko un strukturālo etalonu.

## 7.42. Kurss DE STRICT READ-ONLY (v1.14)

Kurss audita un remonta laikā DE ir:

```text
STRICT READ-ONLY
```

Bez atsevišķa OWNER avota lēmuma aizliegts mainīt:

- DE dialogus;
- DE kartīšu aizmugures;
- DE piemērus;
- DE vingrinājumu tekstus;
- DE gramatikas skaidrojumus;
- DE metadatus;
- DE UI virknes.

Katras Kurss verifikācijas atskaitē obligāti:

```text
DE_UNAUTHORIZED_CHANGES = 0
```

## 7.43. Deterministisks Kurss inventārs (v1.14)

Pirms Luna audita skriptam jāizveido visu Kurss objektu un auditējamo lauku
inventārs (papildina §7.27).

Katram laukam obligāti:

```text
Language
Lesson number
Lesson ID
Section number
Section type
Object/Card ID
Object type
Field/path
CURRENT
DE reference
LV structural reference
Adjacent context
Source file
Mirror file
Production baseline SHA
```

Unikālā atslēga:

```text
(Language, Lesson number, Section type, Object/Card ID, Field/path)
```

Koplietotajiem UI laukiem papildus jāveido atsevišķa unikālā atslēga:

```text
(Language, File, Shared field/path)
```

## 7.44. Kurss objektu tipi (v1.14)

Inventārā atsevišķi jāklasificē:

```text
LESSON_TITLE
SECTION_TITLE
DIALOGUE_BLOCK
DIALOGUE_LINE
PERSON_NAME
VOCABULARY_ITEM
GRAMMAR_EXPLANATION
INFO_TEXT
EXAMPLE
EXERCISE_INSTRUCTION
EXERCISE_ITEM
QUESTION
ANSWER
TRAINING_CARD
FLASHCARD_FRONT
FLASHCARD_BACK
SHARED_UI_KEY
HTML_STRUCTURE
RENDERER_BINDING
PROGRESS_BINDING
```

Nevienu objektu nedrīkst uzskatīt par pārbaudītu tikai tāpēc, ka pārbaudīta
visa lekcija kopumā.

## 7.45. Obligātais Kurss pārklājums (v1.14)

Kurss pilna audita atskaitē obligāti jānorāda:

```text
LESSON_COVERAGE
SECTION_COVERAGE
OBJECT_COVERAGE
FIELD_COVERAGE
DIALOGUE_COVERAGE
EXERCISE_COVERAGE
TRAINING_CARD_COVERAGE
FLASHCARD_COVERAGE
SHARED_UI_KEY_COVERAGE
HTML_STRUCTURE_COVERAGE
VISUAL_VIEW_COVERAGE
```

Nepietiek tikai ar:

```text
LESSON_COVERAGE = 21/21
```

`21/21` pierāda tikai to, ka auditam nodotas visas lekcijas. Tas **nepierāda**
visu sadaļu, objektu un lauku pārbaudi (sk. arī §7.26).

## 7.46. Kurss batch sadalījums (v1.14)

Ieteicamais drošais sadalījums:

| Saturs                          | Maksimālais apjoms vienā Luna batch |
| ------------------------------- | ----------------------------------: |
| Parasta lekcija                 |                           1 lekcija |
| Liela lekcija                   |                            1 sadaļa |
| Dialogi                         |                     1 pilns dialogs |
| Training cards                  |                         25 kartītes |
| Flashcards                      |                         25 kartītes |
| Gramatikas skaidrojumi          |                          10 objekti |
| Vingrinājumu jautājumi/atbildes |                       20 pilni pāri |
| Koplietotās UI atslēgas         |        viens kopīgs globālais batch |

Ja viena lekcija satur pārāk daudz lauku, tā jāsadala pa sadaļām.

Aizliegts sadalīt:

- vienu dialogu tā, ka jautājums un atbilde nonāk dažādos batch;
- savstarpēji saistītas training cards bez blakus konteksta;
- vienas koplietotas UI atslēgas lietojumus dažādos neatkarīgos OWNER
  lēmumos.

Visu batch rezultāti jāapvieno vienā Kurss OWNER backlog.

## 7.47. Kurss lauku līmeņa rezultāts (v1.14)

Katram inventāra laukam Luna obligāti jāatgriež (sk. §7.30):

```text
PASS
FINDING
NEEDS_SOURCE_REVIEW
```

Katram batch obligāti:

```text
EXPECTED_FIELDS
RETURNED_FIELD_RESULTS
MISSING_FIELD_RESULTS
DUPLICATE_FIELD_RESULTS
```

Batch ir `PASS` tikai tad, ja:

```text
EXPECTED_FIELDS === RETURNED_FIELD_RESULTS
MISSING_FIELD_RESULTS = 0
DUPLICATE_FIELD_RESULTS = 0
```

## 7.48. Dialogu audits (v1.14)

Dialogi jāauditē kā veseli sarunas bloki.

Katram dialogam jāpārbauda:

- runātāju secība;
- personvārdi;
- dzimums;
- personas loma;
- formalitāte;
- jautājuma un atbildes savstarpējā atbilstība;
- vietniekvārdi;
- darbības vārdu personas;
- refleksīvās formas;
- laiks;
- noliegums;
- semantiskā saikne ar iepriekšējo un nākamo rindu.

Dialoga rindu nedrīkst vērtēt tikai izolēti pret vienu DE teikumu.

Obligātais konteksts:

```text
Previous dialogue line
Current dialogue line
Next dialogue line
Speaker
DE line
Target-language line
```

## 7.49. Jautājumu–atbilžu un training card audits (v1.14)

Saistītas kartītes jāauditē kopā.

Katram pārim vai blokam jāpārbauda:

```text
Previous card
Question/front
Answer/front
DE back
Next card
Lesson context
Verb identity
Reflexive/non-reflexive form
Person and number
```

Piemērs:

```text
¿Se van? → Sí, se van.
```

Atbildi nedrīkst pārrakstīt uz:

```text
Sí, van.
```

tikai tāpēc, ka izolētais DE teikums ir:

```text
Ja, sie gehen.
```

Dialoga vai blakus kartītes konteksts ir obligāts OWNER lēmuma pierādījums.

## 7.50. Personvārdu un personu lomu audits (v1.14)

Kurss personvārdi mērķvalodā drīkst būt lokalizēti, ja saglabāti:

- dzimums;
- runātāja loma;
- attiecības;
- personas identitāte dialoga ietvaros;
- vienāds vārds visos saistītajos laukos.

Personvārdu atšķirība no LV nav automātiska kļūda.

Kļūda ir:

- viena persona nosaukta dažādi vienā dialogā;
- mainīts dzimums;
- sajauktas lomas;
- jautājumā un atbildē izmantotas dažādas personas;
- mērķvalodai nedabisks vai nepareizi locīts vārds.

## 7.51. Gramatikas un info tekstu audits (v1.14)

Katram gramatikas vai info laukam jāpārbauda:

- valodas pareizība;
- atbilstība DE mācību mērķim;
- piemēru atbilstība skaidrojumam;
- terminoloģijas konsekvence;
- personas, skaitļa un laika konsekvence;
- jautājuma zīmes un citas valodas specifiskās pieturzīmes;
- vai tekstā nav palicis LV, EN vai citas valodas fragments;
- vai nav novecojis skaidrojums pēc iepriekšējiem kartīšu labojumiem.

Gramatikas tekstu nedrīkst vērtēt tikai pēc atsevišķa teikuma. Jāpievieno
visa attiecīgā gramatikas bloka konteksts.

## 7.52. Vingrinājumu audits (v1.14)

Katram vingrinājumam jāpārbauda kopā:

```text
Instruction
Prompt
Expected answer
Displayed answer
DE reference
Exercise type
Lesson grammar target
```

Obligāti jāpārbauda:

- instrukcija atbilst faktiskajai darbībai;
- vienskaitļa/daudzskaitļa prasība;
- locījums;
- konjugācija;
- persona;
- vārdu secība;
- pareizās atbildes variants;
- jautājuma un atbildes semantika.

Globālu UI instrukciju nedrīkst pielāgot vienai lekcijai, ja to izmanto
vairākas lekcijas ar atšķirīgiem mērķiem.

## 7.53. Koplietoto UI atslēgu audits (v1.14)

Visas Kurss koplietotās UI atslēgas jāauditē vienā globālā batch.

Pirms OWNER failu publicēšanas findings jāgrupē pēc:

```text
(File, Field/path)
```

Ja vienam production mērķim ir vairāki atšķirīgi `PROPOSED` vai OWNER `NEW`:

```text
SHARED_TARGET_CONFLICT
```

Šādā gadījumā apply ir bloķēts līdz vienas kanoniskas vērtības
apstiprināšanai.

OWNER authority jānorāda:

```text
Shared target
All source Audit IDs
All lessons using the target
Canonical CURRENT
Canonical OWNER NEW
Superseded proposals
OWNER justification
```

Vienu globālu lauku nedrīkst secīgi pārrakstīt ar katras lekcijas atšķirīgu
`NEW`.

## 7.54. Shared target deduplikācija (v1.14)

Pirms COPY-ONLY apply visi Kurss `LABOT` jādublē pēc faktiskā production
mērķa:

```text
(File, exact Field/path)
```

Obligātie rādītāji:

```text
SOURCE_OWNER_LABOT
DUPLICATE_SHARED_TARGETS
SUPERSEDED_DECISIONS
UNIQUE_PRODUCTION_TARGETS
SHARED_TARGET_CONFLICTS
```

Apply atļauts tikai unikālajiem production mērķiem pēc OWNER konflikta
atrisināšanas.

## 7.55. Kurss pre-finding validācija (v1.14)

Pirms Kurss findinga publicēšanas skriptam jāpārbauda (papildina §7.29):

```text
Lesson exists
Section exists
Object/Card ID exists
Field/path exists
CURRENT === production
Object belongs to reported lesson
Field belongs to reported object
DE context belongs to the same object
Adjacent context belongs to the same dialogue/card block
Shared target mapping is correct
```

Ja validācija neizdodas:

```text
INVALID_LESSON
INVALID_SECTION
INVALID_CARD_ID
INVALID_FIELD
CURRENT_VALUE_MISMATCH
TARGET_OBJECT_MISMATCH
CONTEXT_MISMATCH
SHARED_TARGET_CONFLICT
```

Šādu findingu nedrīkst publicēt kā apply-gatavu `LABOT`.

## 7.56. Kurss audita slāņi (v1.14)

Katrs Kurss batch jāpārbauda vismaz trīs slāņos (papildina §7.35).

### 7.56.1. Lingvistika un semantika

- DE–mērķvalodas nozīme;
- dialogs;
- jautājums–atbilde;
- darbības vārds;
- persona;
- skaitlis;
- dzimte;
- formalitāte;
- refleksivitāte;
- gramatika;
- ortogrāfija;
- dabiskums.

### 7.56.2. Pedagoģija un struktūra

- LV Kurss etalona sadaļu secība;
- mācību mērķis;
- piemēru atbilstība;
- vingrinājuma darbība;
- question/answer saistība;
- training-card secība;
- flashcard front/back saistība;
- trūkstoši vai lieki objekti.

### 7.56.3. Tehnika un vizuālā paritāte

- renderer;
- HTML struktūra;
- CSS klases;
- progress;
- flip;
- next;
- audio;
- primary/`www` spogulis;
- LV fallback;
- vizuālā paritāte;
- koplietotās UI atslēgas.

Findingus drīkst konsolidēt tikai pēc visu slāņu pabeigšanas.

## 7.57. L1–6, L7 un L8–21 atsevišķā kontrole (v1.14)

Audita atskaitē obligāti jāuzrāda atsevišķi:

```text
L1_6_LEGACY_COVERAGE
L7_DECK_COVERAGE
L8_21_FLASHCARD_COVERAGE
```

Nevienu no šīm grupām nedrīkst uzskatīt par pārbaudītu pēc citas grupas
struktūras.

Obligāti jāpārbauda:

- L1–6 legacy deck renderēšana;
- L7 deck Card ID un secība;
- L8–21 flashcards un training cards;
- lokalizētie nosaukumi;
- pogu teksti;
- sadaļu virsraksti;
- fallback neesamība.

## 7.58. Primary/`www` spoguļa kontrole (v1.14)

Katram Kurss production failam ar `www` spoguli obligāti:

```text
PRIMARY_WWW_MIRROR = PASS
```

Pārbaudīt vismaz:

- faila saturu;
- Card ID;
- objektu secību;
- lauku vērtības;
- shared UI vērtības;
- sintaksi.

Primary un `www` neatbilstība bloķē audit closure.

## 7.59. HTML un vizuālā paritāte (v1.14)

Kurss pilnais audits nav tikai datu audits (papildina §5.3).

Obligāti jāpārbauda:

- visas 21 lekcijas;
- visi Kurss skati;
- desktop un mobile;
- priekšpuse un aizmugure;
- training un flashcard režīmi;
- sadaļu virsraksti;
- kartīšu izmērs un izvietojums;
- pogas;
- audio kontroles;
- progress indikācija;
- tekstu pārplūde;
- LV etalona funkcionālā paritāte.

Obligātie rezultāti:

```text
HTML_STRUCTURE = PASS
VISUAL_PARITY = PASS
CONSOLE_ERRORS = 0
LV_FALLBACK = 0
```

## 7.60. Kurss OWNER backlog (v1.14)

Katram validētam Kurss findingam OWNER failā obligāti:

```text
Audit ID
Lesson
Section
Object/Card ID
Object type
File
Field/path
DE context
LV structural context
Adjacent context
CURRENT
PROPOSED
Severity
Category
Shared target status
OWNER STATUS
OWNER NEW
OWNER note
```

`PROPOSED` nav OWNER lēmums.

Apply atļauts tikai tad, ja:

```text
OWNER STATUS = LABOT
OWNER NEW = precīza gala vērtība
CURRENT = production exact-match
```

## 7.61. OWNER pierādījuma faili (v1.14)

Katrai lekcijai vai vienotajam Kurss OWNER ciklam jāizveido Markdown
pierādījums.

Katram lēmumam:

```text
1. Oriģinālais teksts
2. Veiktās izmaiņas
3. Gala rezultāts
```

Papildus:

```text
Lesson
Card/Object ID
Field/path
DE context
Adjacent context
OWNER status
OWNER justification
```

Pierādījumam 1:1 jāatbilst OWNER authority failam.

## 7.62. Kurss COPY-ONLY apply (v1.14)

Kurss remonts jāveic saskaņā ar `REPAIR_APPLY_SAFETY_STANDARD.md` un §9.

Obligāti:

- OWNER mapping ir vienīgais avots;
- tikai `LABOT`;
- precīzs Card/Object ID;
- precīzs Field/path;
- CURRENT exact-match;
- mismatch → SKIP tikai konkrēto rindu;
- OWNER NEW jākopē precīzi;
- DE nemainīt;
- blakus laukus nemainīt;
- shared targets iepriekš deduplicēt (§7.54);
- pēc ieraksta pārbaudīt NEW exact-match.

## 7.63. Post-repair Kurss audits (v1.14)

Pēc OWNER apply obligāti:

1. targeted regression visiem unikālajiem OWNER mērķiem;
2. pilns Kurss residual audits ar to pašu inventāru (§7.43);
3. shared UI konfliktu atkārtota pārbaude (§7.53–§7.54);
4. visu 21 lekciju strukturālā un vizuālā pārbaude (§7.59).

Targeted regression viena pati nav closure pierādījums (sk. §11.16).

## 7.64. Kurss closure vārti (v1.14)

Kurss ir `OWNER ACCEPTED / CLOSED` tikai tad, ja:

```text
LESSON_COVERAGE = 21/21
SECTION_COVERAGE = 100%
OBJECT_COVERAGE = 100%
FIELD_COVERAGE = 100%
DIALOGUE_COVERAGE = 100%
EXERCISE_COVERAGE = 100%
TRAINING_CARD_COVERAGE = 100%
FLASHCARD_COVERAGE = 100%
SHARED_UI_KEY_COVERAGE = 100%
L1_6_LEGACY_COVERAGE = 100%
L7_DECK_COVERAGE = 100%
L8_21_FLASHCARD_COVERAGE = 100%
CURRENT_EXACT_MATCH = 100%
APPLIED_VERIFIED = 100%
NEW_VALIDATED_REAL_FINDINGS = 0
REPAIR_REGRESSION = 0
SHARED_TARGET_CONFLICTS = 0
INVALID_LESSON = 0
INVALID_SECTION = 0
INVALID_CARD_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
CONTEXT_MISMATCH = 0
MISSING_RESULTS = 0
DUPLICATES = 0
LV_FALLBACK = 0
DE_UNAUTHORIZED_CHANGES = 0
PRIMARY_WWW_MIRROR = PASS
JAVASCRIPT_SYNTAX = PASS
HTML_STRUCTURE = PASS
VISUAL_PARITY = PASS
CONSOLE_ERRORS = 0
```

Ja kaut viens vārts nav izpildīts:

```text
KURSS_CLOSURE_BLOCKED
```

## 7.65. SENTENCES / SÄTZE FULL AUDIT STANDARD — piemērošanas joma (v1.15)

Teikumu sadaļas audits ir **atsevišķs** pilna valodas audita modulis.

To nedrīkst aizstāt ar:

- A1–C2 parasto kartīšu auditu;
- `minimalStudy` auditu;
- `standardStudy` auditu;
- Kurss/Lessons auditu;
- vienkāršu ID vai teikumu skaita paritātes pārbaudi;
- tikai deterministisku svešvalodu atlikumu meklēšanu.

Standarts attiecas uz visu mērķvalodu Teikumu/Sätze datu kopu.

## 7.66. Teikumu DE STRICT READ-ONLY (v1.15)

DE teikumi ir:

```text
STRICT READ-ONLY
```

Bez atsevišķa OWNER avota lēmuma aizliegts mainīt:

- DE teikuma tekstu;
- DE pieturzīmes;
- DE teikuma ID;
- DE secību;
- DE gramatiku;
- DE audio sasaisti;
- DE metadatus.

Katrā audita, remonta un closure atskaitē obligāti:

```text
DE_UNAUTHORIZED_CHANGES = 0
```

## 7.67. Deterministisks teikumu inventārs (v1.15)

Pirms Luna audita skriptam deterministiski jāizveido visu Teikumu objektu
un auditējamo lauku inventārs.

Katram teikumam obligāti jāsaglabā:

```text
Language
Sentence number
Sentence ID
Object index
Object type
Field/path
DE sentence
CURRENT target sentence
Previous sentence ID
Previous DE sentence
Previous target sentence
Next sentence ID
Next DE sentence
Next target sentence
Theme/block
Grammar context
Source file
Mirror file
Production baseline SHA
```

Unikālā atslēga:

```text
(Language, Sentence ID, Field/path)
```

Ja `Sentence ID` nav pieejams, pirms audita jāizveido stabila tehniskā
atslēga no production struktūras. Mainīgs masīva indekss viens pats nav
pietiekams OWNER mērķis.

## 7.68. Obligātais batch lielums — 25 teikumi (v1.15)

Teikumu audits obligāti jāsadala šādi:

```text
25 teikumi vienā Luna batch
```

Atļauts mazāks pēdējais batch, ja datu kopas atlikums ir mazāks par 25.

Piemērs datu kopai ar 796 teikumiem:

```text
31 batch × 25 teikumi
1 batch × 21 teikums
Kopā: 32 batch
```

Aizliegts:

- nosūtīt vairāk par 25 teikumiem vienā Luna batch;
- nosūtīt visu Teikumu failu vienā pieprasījumā;
- palielināt batch līdz 50 tikai ātruma dēļ;
- apvienot vairākus batch bez atsevišķas rezultātu validācijas;
- sadalīt vienu dialogu vai cieši saistītu teikumu bloku tā, ka zūd
  nepieciešamais konteksts.

Ja 25 teikumu robeža pārgriež dialogu vai cieši saistītu konteksta bloku,
batch robeža jāpārvieto tā, lai:

- vienā batch nebūtu vairāk par 25 auditējamiem teikumiem;
- saistītie teikumi paliktu kopā;
- trūkstošais konteksts tiktu pievienots kā read-only konteksts, nevis
  papildu auditējami teikumi.

## 7.69. Teikumu batch konteksts (v1.15)

Katram auditējamam teikumam Luna obligāti jāsaņem:

```text
Sentence ID
Field/path
DE sentence
CURRENT target sentence
Previous DE/target sentence
Next DE/target sentence
Theme or grammar block
```

Iepriekšējais un nākamais teikums ir konteksts, nevis automātisks remonta
mērķis.

Blakus teikumu nedrīkst mainīt, ja tam nav atsevišķa validēta findinga
un OWNER `LABOT`.

## 7.70. Teikumu lauku līmeņa rezultāts (v1.15)

Luna jāatgriež atsevišķs rezultāts par katru auditējamo teikumu un katru
tā auditējamo lauku.

Atļautie rezultāti:

```text
PASS
FINDING
NEEDS_SOURCE_REVIEW
```

Katram batch obligāti jāuzrāda:

```text
BATCH_ID
EXPECTED_SENTENCES
RETURNED_SENTENCE_RESULTS
EXPECTED_FIELDS
RETURNED_FIELD_RESULTS
MISSING_SENTENCE_RESULTS
MISSING_FIELD_RESULTS
DUPLICATE_SENTENCE_RESULTS
DUPLICATE_FIELD_RESULTS
```

Batch ir `PASS` tikai tad, ja:

```text
EXPECTED_SENTENCES = RETURNED_SENTENCE_RESULTS
EXPECTED_FIELDS = RETURNED_FIELD_RESULTS
MISSING_SENTENCE_RESULTS = 0
MISSING_FIELD_RESULTS = 0
DUPLICATE_SENTENCE_RESULTS = 0
DUPLICATE_FIELD_RESULTS = 0
```

## 7.71. Semantikas un tulkojuma audits (v1.15)

Katram teikumam jāpārbauda:

- pilna DE pamatnozīme;
- darbības vārda nozīme;
- subjekts;
- objekts;
- persona;
- skaitlis;
- dzimte;
- darbības laiks;
- modalitāte;
- noliegums;
- refleksivitāte;
- atdalāmais darbības vārds;
- vietniekvārdu atsauce;
- virziens;
- vieta;
- laiks;
- cēlonis;
- nosacījums;
- jautājuma funkcija;
- pievienota informācija;
- izlaista informācija.

Mērķvalodas teikums nedrīkst būt tikai tematiski līdzīgs. Tam semantiski
jāatbilst konkrētajam DE teikumam.

## 7.72. Teikumu gramatikas audits (v1.15)

Katram teikumam jāpārbauda:

- darbības vārda forma;
- personas un skaitļa saskaņa;
- lietvārdu dzimte;
- artikuli;
- vietniekvārdi;
- īpašības vārdu formas;
- prievārdi;
- locījumi;
- vārdu secība;
- jautājuma struktūra;
- nolieguma vieta;
- pagātnes, tagadnes un nākotnes forma;
- formālā un neformālā uzruna;
- refleksīvās konstrukcijas.

Gramatiski pareizs, bet DE nozīmei neatbilstošs teikums joprojām ir
`FINDING`.

## 7.73. Ortogrāfijas un punktuācijas audits (v1.15)

Katram teikumam jāpārbauda:

- lielie un mazie burti;
- diakritiskās zīmes;
- apostrofi;
- defises;
- komati;
- punkti;
- jautājuma zīmes;
- izsaukuma zīmes;
- pēdiņas;
- mērķvalodas atstarpju noteikumi;
- valodai specifiskās pieturzīmes.

Piemēram, franču valodā jāpārbauda pareizās atstarpes pirms:

```text
!
?
:
;
```

## 7.74. Dabiskuma audits (v1.15)

Katram teikumam atsevišķi jānovērtē:

- vai tas skan dabiski mērķvalodā;
- vai nav burtisks DE kalks;
- vai nav burtisks LV kalks;
- vai izmantotais vārds atbilst situācijai;
- vai reģistrs atbilst kontekstam;
- vai formalitāte ir konsekventa;
- vai teikums nav gramatisks, bet nedabisks.

`NATURALNESS` findingam obligāti jāpievieno konkrēts lingvistisks
pamatojums. Tikai subjektīvs apgalvojums "varētu skanēt labāk" nav
validēts findings.

## 7.75. Dialogu un saistīto teikumu kontrole (v1.15)

Ja Teikumu sadaļā vairāki ieraksti veido dialogu vai konteksta ķēdi,
jāpārbauda:

- runātāju secība;
- jautājuma un atbildes atbilstība;
- vietniekvārdu atsauces;
- personas dzimums;
- formalitāte;
- laika konsekvence;
- noliegums;
- refleksivitāte;
- notikumu secība.

Saistītu teikumu nedrīkst auditēt pilnīgi izolēti.

Tomēr katram findingam joprojām jābūt vienam precīzam:

```text
(Sentence ID, Field/path)
```

## 7.76. Viena rinda = viens findings (v1.15)

OWNER backlog viena rinda drīkst attiekties tikai uz vienu:

```text
(Sentence ID, Field/path)
```

Aizliegts:

```text
+N citi atradumi
multiple sentences
several fields
all similar entries
```

Ja viena un tā pati problēma atkārtojas vairākos teikumos, katram
teikumam jāizveido atsevišķs findings.

## 7.77. Teikumu dublikātu audits (v1.15)

Teikumu datu kopai deterministiski jāpārbauda:

```text
EXACT_DE_DUPLICATES
EXACT_TARGET_DUPLICATES
NORMALIZED_DE_DUPLICATES
NORMALIZED_TARGET_DUPLICATES
SAME_DE_DIFFERENT_TARGET
DIFFERENT_DE_SAME_TARGET
DUPLICATE_SENTENCE_ID
```

Dublikāts nav automātiski kļūda.

Pirms findinga jāizvērtē:

- vai teikumi atrodas dažādos tematiskos blokos;
- vai tulkojuma atšķirība ir kontekstuāli pamatota;
- vai vienāds mērķvalodas teikums korekti tulko vairākus līdzīgus DE
  teikumus;
- vai dublikāts ir pedagoģiski apzināts.

## 7.78. Teikumu svešvalodu atlikumu audits (v1.15)

Jāpārbauda, vai mērķvalodas laukos nav palicis:

- LV teksts;
- EN teksts;
- citas mērķvalodas teksts;
- tehniska placeholder vērtība;
- nepārtulkots paskaidrojums;
- sajaukta rakstība.

DE vārds vai frāze nav automātisks `FOREIGN_REMNANT`, ja tas apzināti
izmantots kā mācību objekts vai skaidrojuma piemērs.

## 7.79. Teikumu audio kontrole (v1.15)

Ja Teikumu sadaļai ir audio, obligāti jāpārbauda:

```text
AUDIO_FILE_EXISTS
AUDIO_ID_MATCH
TEXT_AUDIO_MAPPING
NO_ORPHAN_AUDIO
NO_MISSING_AUDIO
NO_DUPLICATE_AUDIO_MAPPING
```

Ja iespējama audio satura lingvistiska pārbaude, papildus:

```text
AUDIO_LANGUAGE_MATCH
AUDIO_TEXT_MATCH
AUDIO_PRONUNCIATION_REVIEW
```

Audio faila eksistence pati par sevi nepierāda, ka audio atbilst
teikumam.

## 7.80. ID un secības kontrole (v1.15)

Obligāti jāpārbauda:

```text
Sentence ID uniqueness
Sentence count
Sentence order
Primary/mirror order
Missing IDs
Unexpected IDs
Object index consistency
```

Obligātie rezultāti:

```text
DUPLICATE_SENTENCE_ID = 0
MISSING_SENTENCE_ID = 0
UNEXPECTED_SENTENCE_ID = 0
ID_ORDER = PASS
```

## 7.81. Teikumu primary/`www` spoguļa kontrole (v1.15)

Ja Teikumu production failam ir `www` spogulis:

```text
PRIMARY_WWW_MIRROR = PASS
```

Jāsalīdzina:

- teikumu skaits;
- ID;
- secība;
- DE lauki;
- mērķvalodas lauki;
- metadati;
- audio mapping;
- faila sintakse.

Spoguļa neatbilstība bloķē closure.

## 7.82. Teikumu pre-finding validācija (v1.15)

Pirms findinga publicēšanas skriptam obligāti jāpārbauda:

```text
Sentence ID exists
Field/path exists
Field belongs to reported Sentence ID
CURRENT === production value
DE context belongs to the same Sentence ID
Previous/next context is correctly mapped
Finding is unique
```

Ja validācija neizdodas:

```text
INVALID_SENTENCE_ID
INVALID_FIELD
TARGET_OBJECT_MISMATCH
CURRENT_VALUE_MISMATCH
CONTEXT_MISMATCH
DUPLICATE_FINDING
```

Šādu ierakstu nedrīkst publicēt OWNER backlog kā apply-gatavu `FINDING`.

## 7.83. Teikumu OWNER vēstures aizsardzība (v1.15)

Pirms jauna findinga publicēšanas jāpārbauda iepriekšējā OWNER vēsture
pēc:

```text
(Language, Sentence ID, Field/path, CURRENT)
```

Iepriekšējs:

```text
FALSE_POSITIVE
NELABOT
OWNER_ACCEPTED
```

nedrīkst tikt atkārtoti atvērts bez:

```text
OWNER_DECISION_REOPEN_REQUIRED
Previous OWNER status
Previous OWNER value
New evidence
Reason for reopening
```

## 7.84. Teikumu OWNER backlog (v1.15)

Katram validētam findingam obligāti:

```text
Audit ID
Batch ID
Sentence number
Sentence ID
Field/path
DE sentence
Previous context
Next context
CURRENT
PROPOSED
Severity
Category
Evidence
OWNER STATUS
OWNER NEW
OWNER note
```

`PROPOSED` nav OWNER lēmums.

Cursor nedrīkst izmantot `PROPOSED`, kamēr nav:

```text
OWNER STATUS = LABOT
OWNER NEW = precīza gala vērtība
```

## 7.85. Teikumu OWNER pierādījuma fails (v1.15)

Katram OWNER lēmumam pierādījuma `.md` failā obligāti:

```text
1. Oriģinālais teksts
2. Veiktās izmaiņas
3. Gala rezultāts
```

Papildus:

```text
Sentence ID
Field/path
DE sentence
Relevant context
OWNER status
OWNER justification
```

Pierādījuma failam 1:1 jāatbilst OWNER authority failam.

## 7.86. Teikumu COPY-ONLY apply (v1.15)

Teikumu remontam obligāti piemērot `REPAIR_APPLY_SAFETY_STANDARD.md`.

Atļauts mainīt tikai rindas ar:

```text
OWNER STATUS = LABOT
Sentence ID = precīzs
Field/path = precīzs
CURRENT = production exact-match
OWNER NEW = precīza gala vērtība
```

Ja CURRENT nesakrīt:

```text
CURRENT_VALUE_MISMATCH
SKIP
```

Aizliegts:

- pašam tulkot;
- pārfrāzēt OWNER NEW;
- mainīt līdzīgu teikumu;
- veikt globālu search/replace;
- mainīt DE;
- mainīt blakus teikumu;
- mainīt secību vai ID;
- veikt papildu cleanup.

## 7.87. Teikumu targeted regression (v1.15)

Pēc apply jāpārbauda visi OWNER `LABOT`.

Obligāti:

```text
REQUESTED
PROCESSED
APPLIED_VERIFIED
CURRENT_VALUE_MISMATCH
FAILED
UNEXPECTED_CHANGES
DE_CHANGES
```

Targeted regression ir `PASS` tikai tad, ja:

```text
APPLIED_VERIFIED = 100%
CURRENT_VALUE_MISMATCH = 0
FAILED = 0
UNEXPECTED_CHANGES = 0
DE_CHANGES = 0
```

## 7.88. Pilns post-repair Teikumu audits (v1.15)

Pēc targeted regression obligāti atkārtot pilnu Teikumu auditu:

- ar to pašu deterministisko inventāru;
- ar tiem pašiem 25 teikumu batch;
- ar visiem audita slāņiem;
- ar pilnu lauku līmeņa uzskaiti;
- ar OWNER vēstures aizsardzību.

Targeted regression viena pati nav closure pierādījums.

## 7.89. Teikumu gala audita vārti (v1.15)

Teikumu pilnā audita atskaitē obligāti:

```text
SENTENCE_COVERAGE = audited sentences / expected sentences
FIELD_COVERAGE = returned field results / expected fields
SEMANTIC_COVERAGE = 100%
GRAMMAR_COVERAGE = 100%
ORTHOGRAPHY_COVERAGE = 100%
NATURALNESS_COVERAGE = 100%
BATCH_COVERAGE = completed batches / expected batches
CURRENT_EXACT_MATCH = 100%
MISSING_SENTENCE_RESULTS = 0
MISSING_FIELD_RESULTS = 0
DUPLICATE_RESULTS = 0
INVALID_SENTENCE_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
CONTEXT_MISMATCH = 0
DUPLICATE_SENTENCE_ID = 0
MISSING_SENTENCE_ID = 0
DE_UNAUTHORIZED_CHANGES = 0
PRIMARY_WWW_MIRROR = PASS
ID_ORDER = PASS
AUDIO_MAPPING = PASS
```

## 7.90. Teikumu closure vārti (v1.15)

Teikumu sadaļa ir:

```text
OWNER ACCEPTED / CLOSED
```

tikai tad, ja:

```text
SENTENCE_COVERAGE = 100%
FIELD_COVERAGE = 100%
SEMANTIC_COVERAGE = 100%
GRAMMAR_COVERAGE = 100%
ORTHOGRAPHY_COVERAGE = 100%
NATURALNESS_COVERAGE = 100%
BATCH_COVERAGE = 100%
APPLIED_VERIFIED = 100%
CURRENT_EXACT_MATCH = 100%
NEW_VALIDATED_REAL_FINDINGS = 0
REPAIR_REGRESSION = 0
MISSING_RESULTS = 0
DUPLICATES = 0
INVALID_SENTENCE_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
CONTEXT_MISMATCH = 0
DE_UNAUTHORIZED_CHANGES = 0
PRIMARY_WWW_MIRROR = PASS
ID_ORDER = PASS
AUDIO_MAPPING = PASS
```

Ja kaut viens vārts nav izpildīts:

```text
SENTENCES_CLOSURE_BLOCKED
```

## 7.91. VERBS / VERBEN FULL AUDIT STANDARD — piemērošanas joma (v1.16)

Darbības vārdu sadaļas audits ir **atsevišķs** pilna valodas audita modulis.

To nedrīkst aizstāt ar:

- A1–C2 parasto kartīšu auditu;
- `minimalStudy` auditu;
- `standardStudy` auditu;
- Sentences/Sätze auditu;
- Kurss/Lessons auditu;
- tikai infinitīvu pārbaudi;
- tikai kartīšu vai formu skaita paritāti.

Standarts attiecas uz visiem Verbs/Verben objektiem un visām to formām.

## 7.92. Verbu DE STRICT READ-ONLY (v1.16)

Visi DE darbības vārdi un to formas ir:

```text
STRICT READ-ONLY
```

Bez atsevišķa OWNER avota lēmuma aizliegts mainīt:

- DE infinitīvu;
- DE `Präteritum`;
- DE `Partizip II`;
- DE trešās personas tagadnes formu;
- DE palīgdarbības vārdu;
- DE refleksīvo vietniekvārdu;
- DE atdalāmo priedēkli;
- DE piemērus;
- DE ID;
- DE secību;
- DE metadatus.

Katrā audita, remonta un closure atskaitē obligāti:

```text
DE_UNAUTHORIZED_CHANGES = 0
```

## 7.93. Darbības vārda objekts (v1.16)

Viens darbības vārda objekts ir nedalāma audita vienība.

Objektā obligāti jāpārbauda visas faktiski eksistējošās formas, tostarp:

```text
Infinitiv
Präteritum
Partizip II
3. Person Präsens
Hilfsverb
```

Ja production struktūrā ir papildu lauki, jāpārbauda arī:

```text
Reflexive form
Separable prefix
Non-separable prefix
Target-language main meaning
Examples
Grammar notes
Metadata
Audio mapping
```

Nevienu formu nedrīkst auditēt izolēti no pārējā verba objekta.

## 7.94. Obligātais batch lielums — 10 verba objekti (v1.16)

Darbības vārdu audits obligāti jāsadala:

```text
10 darbības vārdu objekti vienā Luna batch
```

Tas parasti nozīmē:

```text
10 verbi × 5 formas = 50 savstarpēji saistītas formas
```

Atļauts mazāks pēdējais batch.

189 verbu datu kopai:

```text
18 batch × 10 verbi
1 batch × 9 verbi
Kopā: 19 batch
```

Aizliegts:

- vienā batch dot vairāk par 10 verbu objektiem;
- sadalīt viena verba formas pa dažādiem batch;
- auditēt visas 945 formas vienā pieprasījumā;
- vienā batch skaitīt 10 formas, nevis 10 pilnus verbu objektus;
- palielināt batch tikai ātruma vai izmaksu dēļ.

Ja viens verba objekts ir īpaši apjomīgs, batch drīkst samazināt zem 10.

## 7.95. Deterministisks verbu inventārs (v1.16)

Pirms Luna audita skriptam deterministiski jāizveido visu verba objektu un
lauku inventārs.

Katram verbam obligāti:

```text
Language
Verb number
Verb ID
Object index
DE infinitive
Target-language main meaning
Verb class
Reflexive status
Separable-prefix status
Hilfsverb
Source file
Mirror file
Production baseline SHA
```

Katram formas laukam obligāti:

```text
Verb ID
Form type
Field/path
CURRENT
DE reference form
Target-language context
```

Unikālā lauka atslēga:

```text
(Language, Verb ID, Form type, Field/path)
```

Unikālā objekta atslēga:

```text
(Language, Verb ID)
```

## 7.96. Verbu klasifikācija (v1.16)

Pirms lingvistiskā audita katrs verbs jāklasificē, ja dati to ļauj:

```text
WEAK
STRONG
MIXED
MODAL
AUXILIARY
REFLEXIVE
SEPARABLE
INSEPARABLE
IRREGULAR
```

Vienam verbam var būt vairāki klasifikācijas statusi, piemēram:

```text
STRONG + SEPARABLE
WEAK + REFLEXIVE
MODAL + IRREGULAR
```

Klasifikācija jāizmanto formu savstarpējā pārbaudē.

## 7.97. Formu līmeņa rezultāts (v1.16)

Luna jāatgriež atsevišķs rezultāts par katru formas lauku:

```text
PASS
FINDING
NEEDS_SOURCE_REVIEW
```

Katram formas rezultātam obligāti:

```text
Verb ID
Form type
Field/path
DE form
CURRENT
Result
Evidence
```

Forma nav pārbaudīta, ja tai nav viena no trim atļautajiem rezultātiem.

## 7.98. Objekta līmeņa rezultāts (v1.16)

Pēc visu formu pārbaudes katram verbam obligāti jāpiešķir viens kopējais
statuss:

```text
VERB_OBJECT_CONSISTENT
VERB_OBJECT_INCONSISTENT
NEEDS_SOURCE_REVIEW
```

`VERB_OBJECT_CONSISTENT` atļauts tikai tad, ja:

- visas paredzētās formas eksistē;
- visas formas ir auditētas;
- visas formas pieder vienam DE infinitīvam;
- mērķvalodas pamatnozīme ir konsekventa;
- palīgdarbības vārds ir pārbaudīts;
- `Partizip II` ir pārbaudīts;
- refleksivitāte un priedēkļi ir konsekventi.

## 7.99. Verbu batch pilnības kontrole (v1.16)

Katram batch obligāti jāuzrāda:

```text
BATCH_ID
EXPECTED_VERB_OBJECTS
RETURNED_VERB_OBJECT_RESULTS
EXPECTED_FORMS
RETURNED_FORM_RESULTS
EXPECTED_FIELDS
RETURNED_FIELD_RESULTS
MISSING_VERB_RESULTS
MISSING_FORM_RESULTS
MISSING_FIELD_RESULTS
DUPLICATE_VERB_RESULTS
DUPLICATE_FORM_RESULTS
DUPLICATE_FIELD_RESULTS
```

Batch ir `PASS` tikai tad, ja:

```text
EXPECTED_VERB_OBJECTS = RETURNED_VERB_OBJECT_RESULTS
EXPECTED_FORMS = RETURNED_FORM_RESULTS
EXPECTED_FIELDS = RETURNED_FIELD_RESULTS
MISSING_VERB_RESULTS = 0
MISSING_FORM_RESULTS = 0
MISSING_FIELD_RESULTS = 0
DUPLICATE_VERB_RESULTS = 0
DUPLICATE_FORM_RESULTS = 0
DUPLICATE_FIELD_RESULTS = 0
```

## 7.100. Infinitīva audits (v1.16)

Katram infinitīvam jāpārbauda:

- precīza DE forma;
- pilna verba identitāte;
- refleksīvais vietniekvārds;
- atdalāmais priedēklis;
- neatdalāmais priedēklis;
- pareizrakstība;
- Card/Verb ID atbilstība;
- mērķvalodas viena galvenā nozīme.

Refleksīvu verbu nedrīkst auditēt kā nerefleksīvu verbu, ja tas maina
nozīmi.

## 7.101. Trešās personas tagadnes audits (v1.16)

`3. Person Präsens` jāpārbauda:

- personas galotne;
- saknes patskaņa maiņa;
- umlauts;
- līdzskaņu maiņa;
- atdalāmā priedēkļa novietojums;
- refleksīvais vietniekvārds;
- neregulārā forma.

Piemēri, kas obligāti jāatpazīst:

```text
fahren → er fährt
lesen → er liest
sprechen → er spricht
nehmen → er nimmt
laufen → er läuft
```

## 7.102. Präteritum audits (v1.16)

`Präteritum` jāpārbauda:

- vai forma pieder pareizajam infinitīvam;
- stiprā verba saknes maiņa;
- vājā verba `-te` forma;
- jauktā verba forma;
- modālā verba forma;
- refleksīvais vietniekvārds, ja tas tiek glabāts;
- pareizrakstība.

Nedrīkst secināt formas pareizību tikai pēc līdzības ar infinitīvu.

## 7.103. Partizip II audits (v1.16)

`Partizip II` jāpārbauda:

- `ge-` lietojums;
- atdalāma priedēkļa struktūra;
- neatdalāma priedēkļa forma bez `ge-`;
- verba galotne;
- stiprā vai vājā forma;
- jauktā forma;
- refleksīvais statuss;
- piederība pareizajam infinitīvam.

Piemēri:

```text
machen → gemacht
gehen → gegangen
mitkommen → mitgekommen
besuchen → besucht
studieren → studiert
```

## 7.104. Palīgdarbības vārda audits (v1.16)

Katram verbam jāpārbauda `Hilfsverb`:

```text
haben
sein
haben/sein
```

Jāņem vērā:

- kustība;
- stāvokļa maiņa;
- nepārejošs/pārejošs lietojums;
- refleksīvs lietojums;
- reģionāli vai kontekstuāli varianti.

Ja verbs var lietot gan `haben`, gan `sein`, nedrīkst automātiski izvēlēties
vienu bez konteksta.

Šādam gadījumam jāizmanto:

```text
NEEDS_SOURCE_REVIEW
```

vai OWNER apstiprināts precīzs variants.

## 7.105. Atdalāmo priedēkļu audits (v1.16)

Atdalāmajiem verbiem jāpārbauda:

- pilns infinitīvs;
- priedēklis;
- tagadnes formas vārdu secība;
- `Präteritum`;
- `Partizip II`;
- formas piederība vienam verbam.

Piemēram:

```text
aufstehen
er steht auf
stand auf
ist aufgestanden
```

Priedēkli nedrīkst pazaudēt nevienā formā.

## 7.106. Neatdalāmo priedēkļu audits (v1.16)

Neatdalāmajiem verbiem jāpārbauda:

- priedēkļa saglabāšana;
- `Partizip II` bez nepareiza `ge-`;
- formas pareizrakstība;
- verbs nav kļūdaini klasificēts kā atdalāms.

Īpaši pārbaudīt priedēkļus:

```text
be-
emp-
ent-
er-
ge-
miss-
ver-
zer-
```

## 7.107. Refleksīvo verbu audits (v1.16)

Refleksīvam verbam jāpārbauda:

- `sich` infinitīvā;
- vietniekvārda forma;
- vai refleksivitāte maina nozīmi;
- vai mērķvalodas tulkojumā saglabāta refleksivitāte;
- vai visas formas pieder refleksīvajam lietojumam.

Aizliegts automātiski noņemt refleksīvo elementu tikai tāpēc, ka izolēts
DE vai mērķvalodas teikums iespējams arī bez tā.

## 7.108. Modālo verbu audits (v1.16)

Modālajiem verbiem jāpārbauda:

- neregulārā tagadnes forma;
- `Präteritum`;
- `Partizip II`, ja tas ietilpst datu modelī;
- galvenā nozīme;
- modalitātes veids;
- atšķirība starp:
  - iespēju;
  - prasmi;
  - atļauju;
  - pienākumu;
  - vajadzību;
  - nodomu;
  - ieteikumu.

Īpaši auditēt:

```text
können
dürfen
müssen
sollen
wollen
mögen
```

## 7.109. Mērķvalodas nozīmes audits (v1.16)

Katram verba objektam jāpārbauda:

- viena galvenā nozīme;
- atbilstība DE infinitīvam;
- vienāda pamatnozīme visās formās;
- refleksivitāte;
- pārejošs/nepārejošs lietojums;
- reģistrs;
- dabiskums;
- vai nav sajaukts ar līdzīgu verbu.

Parastajā verba kartītē galvenajā nozīmē aizliegts:

```text
•
/
komatu virknes
vairāki nesaistīti tulkojumi
```

Ja vajadzīgas vairākas nozīmes, tās jāizskaidro Study struktūrā.

## 7.110. Piemēru un piezīmju audits (v1.16)

Ja verba objektā ir piemēri vai paskaidrojumi, jāpārbauda:

- piemērs izmanto pareizo verbu;
- piemērs izmanto pareizo formu;
- teikuma nozīme atbilst DE;
- persona un laiks atbilst;
- refleksivitāte saglabāta;
- palīgdarbības vārds ir pareizs;
- paskaidrojums nav sajaukts ar citu verbu;
- nav LV vai citas valodas atlikumu;
- nav novecojušu formu pēc iepriekšējiem labojumiem.

## 7.111. Dublikātu un sajauktu objektu kontrole (v1.16)

Deterministiski jāpārbauda:

```text
DUPLICATE_VERB_ID
DUPLICATE_INFINITIVE
SAME_ID_DIFFERENT_INFINITIVE
SAME_INFINITIVE_DIFFERENT_FORMS
FORM_ASSIGNED_TO_WRONG_VERB
MIXED_VERB_OBJECT
```

Vienādas formas dažādiem verbiem nav automātiska kļūda. Jāpārbauda pilns
verba objekts un konteksts.

## 7.112. Verbu pre-finding validācija (v1.16)

Pirms findinga publicēšanas skriptam jāpārbauda:

```text
Verb ID exists
Verb object exists
Form type exists
Field/path exists
Field belongs to reported Verb ID
CURRENT === production value
DE form belongs to the same infinitive
Finding is unique
```

Ja validācija neizdodas:

```text
INVALID_VERB_ID
INVALID_FORM_TYPE
INVALID_FIELD
TARGET_OBJECT_MISMATCH
CURRENT_VALUE_MISMATCH
FORM_OBJECT_MISMATCH
DUPLICATE_FINDING
```

Šādu ierakstu nedrīkst publicēt OWNER backlog kā apply-gatavu `FINDING`.

## 7.113. Verbu OWNER vēstures aizsardzība (v1.16)

Pirms jauna findinga publicēšanas jāpārbauda OWNER vēsture pēc:

```text
(Language, Verb ID, Form type, Field/path, CURRENT)
```

Iepriekšējs:

```text
FALSE_POSITIVE
NELABOT
OWNER_ACCEPTED
```

nedrīkst tikt atkārtoti atvērts bez:

```text
OWNER_DECISION_REOPEN_REQUIRED
Previous OWNER status
Previous OWNER value
New evidence
Reason for reopening
```

## 7.114. Verbu OWNER backlog (v1.16)

Katram validētam findingam obligāti:

```text
Audit ID
Batch ID
Verb number
Verb ID
DE infinitive
Form type
Field/path
DE form
CURRENT
PROPOSED
Verb object context
Severity
Category
Evidence
OWNER STATUS
OWNER NEW
OWNER note
```

`PROPOSED` nav OWNER lēmums.

Cursor nedrīkst izmantot `PROPOSED`, kamēr nav:

```text
OWNER STATUS = LABOT
OWNER NEW = precīza gala vērtība
```

## 7.115. Verbu OWNER pierādījuma fails (v1.16)

Katram OWNER lēmumam pierādījuma `.md` failā obligāti:

```text
1. Oriģinālais teksts
2. Veiktās izmaiņas
3. Gala rezultāts
```

Papildus:

```text
Verb ID
DE infinitive
Form type
Field/path
DE form
Verb object context
OWNER status
OWNER justification
```

Pierādījuma failam 1:1 jāatbilst OWNER authority failam.

## 7.116. Verbu COPY-ONLY apply (v1.16)

Verbu remontam obligāti piemērot `REPAIR_APPLY_SAFETY_STANDARD.md`.

Atļauts mainīt tikai rindas ar:

```text
OWNER STATUS = LABOT
Verb ID = precīzs
Form type = precīzs
Field/path = precīzs
CURRENT = production exact-match
OWNER NEW = precīza gala vērtība
```

Ja CURRENT nesakrīt:

```text
CURRENT_VALUE_MISMATCH
SKIP
```

Aizliegts:

- pašam ģenerēt formas;
- pašam labot līdzīgus verbus;
- mainīt visu paradigmu bez OWNER rindām;
- veikt globālu search/replace;
- mainīt DE;
- mainīt blakus verbu;
- mainīt ID vai secību;
- veikt papildu cleanup.

## 7.117. Verbu targeted regression (v1.16)

Pēc apply jāpārbauda:

- visi OWNER `LABOT`;
- visi skartie verba objekti;
- visas viena skartā verba piecas formas;
- palīgdarbības vārds;
- refleksivitāte;
- priedēkļi;
- primary/`www` spogulis.

Obligāti:

```text
REQUESTED
PROCESSED
APPLIED_VERIFIED
VERB_OBJECTS_RECHECKED
FORM_OBJECTS_RECHECKED
CURRENT_VALUE_MISMATCH
FAILED
UNEXPECTED_CHANGES
DE_CHANGES
```

## 7.118. Pilns post-repair Verbs audits (v1.16)

Pēc targeted regression obligāti atkārtot pilnu Verbs/Verben auditu:

- ar to pašu deterministisko inventāru;
- ar tiem pašiem 10 verbu batch;
- ar formu līmeņa rezultātiem;
- ar objekta līmeņa konsekvences rezultātiem;
- ar OWNER vēstures aizsardzību.

Targeted regression viena pati nav closure pierādījums.

## 7.119. Verbu gala audita vārti (v1.16)

Pilna Verbs/Verben audita atskaitē obligāti:

```text
VERB_COVERAGE = audited verb objects / expected verb objects
FORM_COVERAGE = audited forms / expected forms
FIELD_COVERAGE = returned field results / expected fields
VERB_OBJECT_CONSISTENCY = consistent objects / expected objects
BATCH_COVERAGE = completed batches / expected batches
HELPER_VERB_VALIDATION = 100%
PARTICIPLE_VALIDATION = 100%
PRESENT_FORM_VALIDATION = 100%
PRETERITE_VALIDATION = 100%
CURRENT_EXACT_MATCH = 100%
MISSING_VERB_RESULTS = 0
MISSING_FORM_RESULTS = 0
MISSING_FIELD_RESULTS = 0
DUPLICATE_VERB_ID = 0
INVALID_VERB_ID = 0
INVALID_FORM_TYPE = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
FORM_OBJECT_MISMATCH = 0
DE_UNAUTHORIZED_CHANGES = 0
PRIMARY_WWW_MIRROR = PASS
ID_ORDER = PASS
```

## 7.120. Verbu closure vārti (v1.16)

Verbs/Verben sadaļa ir:

```text
OWNER ACCEPTED / CLOSED
```

tikai tad, ja:

```text
VERB_COVERAGE = 100%
FORM_COVERAGE = 100%
FIELD_COVERAGE = 100%
VERB_OBJECT_CONSISTENCY = 100%
BATCH_COVERAGE = 100%
HELPER_VERB_VALIDATION = 100%
PARTICIPLE_VALIDATION = 100%
PRESENT_FORM_VALIDATION = 100%
PRETERITE_VALIDATION = 100%
APPLIED_VERIFIED = 100%
CURRENT_EXACT_MATCH = 100%
NEW_VALIDATED_REAL_FINDINGS = 0
REPAIR_REGRESSION = 0
MISSING_RESULTS = 0
DUPLICATES = 0
INVALID_VERB_ID = 0
INVALID_FORM_TYPE = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
FORM_OBJECT_MISMATCH = 0
DE_UNAUTHORIZED_CHANGES = 0
PRIMARY_WWW_MIRROR = PASS
ID_ORDER = PASS
```

Ja kaut viens vārts nav izpildīts:

```text
VERBS_CLOSURE_BLOCKED
```

## 7.121. UI / I18N / VISUAL RUNTIME AUDIT STANDARD — piemērošanas joma (v1.17)

UI un vizuālais audits ir **atsevišķs** pilna valodas audita modulis.

To nedrīkst aizstāt ar:

- A1–C2 datu auditu;
- Study auditu;
- Kurss/Lessons lingvistisko auditu;
- Sentences/Sätze auditu;
- Verbs/Verben auditu;
- tikai UI failu atslēgu salīdzināšanu;
- tikai vienas valodas ekrānuzņēmumu;
- tikai desktop pārbaudi;
- tikai HTML vai JavaScript sintakses pārbaudi.

UI audits ir pabeigts tikai tad, ja izpildīti abi slāņi:

```text
UI_I18N_AUDIT = PASS
VISUAL_RUNTIME_AUDIT = PASS
```

## 7.122. Divi obligātie UI audita slāņi (v1.17)

### 7.122.1. UI tekstu un i18n audits

Pārbauda:

- lokalizācijas atslēgas;
- mērķvalodas tekstus;
- trūkstošas un liekas atslēgas;
- tukšas vērtības;
- fallback;
- koplietoto atslēgu konfliktus;
- `aria-label`;
- `title`;
- placeholder;
- pogu tekstus;
- izvēļņu tekstus;
- tooltip;
- statusa paziņojumus;
- kļūdu paziņojumus;
- vienskaitli un daudzskaitli;
- valodas kodus;
- primary/`www` spoguli.

### 7.122.2. Vizuālais un funkcionālais runtime audits

Pārbauda faktiski palaistu lietotni:

- desktop;
- mobile;
- visas scope valodas;
- visus obligātos skatus;
- UI stāvokļus;
- responsīvo izkārtojumu;
- teksta pārplūdi;
- interakcijas;
- console kļūdas;
- vizuālo paritāti;
- pieejamību.

Viens slānis nevar aizstāt otru.

## 7.123. LV vizuālais un funkcionālais etalons (v1.17)

LV versija ir etalons:

- UI struktūrai;
- elementu secībai;
- renderer darbībai;
- navigācijai;
- pogu funkcijām;
- modalitātei;
- responsīvajam izkārtojumam;
- progress loģikai;
- kartīšu flip/next darbībai;
- vizuālajai hierarhijai.

LV tekstu nedrīkst automātiski kopēt uz mērķvalodu.

Vizuālā paritāte nenozīmē identisku teksta garumu. Mērķvalodas tekstam
jābūt dabiskam, bet izkārtojumam tas jāattēlo bez bojājumiem.

## 7.124. UI DE STRICT READ-ONLY (v1.17)

UI un vizuālā audita laikā DE saturs ir:

```text
STRICT READ-ONLY
```

Bez atsevišķa OWNER lēmuma aizliegts mainīt:

- DE UI tekstus;
- DE datus;
- DE kartītes;
- DE audio mapping;
- DE Kurss saturu;
- DE gramatikas tekstus.

Obligāti:

```text
DE_UNAUTHORIZED_CHANGES = 0
```

## 7.125. Deterministisks UI atslēgu inventārs (v1.17)

Pirms UI i18n audita skriptam jāizveido visu paredzēto UI atslēgu
inventārs.

Katram laukam obligāti:

```text
Language
Namespace
UI key
Field/path
CURRENT
LV reference
DE reference if applicable
Consumer/route
Shared-target status
Source file
Mirror file
Production baseline SHA
```

Unikālā atslēga:

```text
(Language, Namespace, UI key)
```

Obligāti jāpārbauda:

```text
KEY_EXISTS
VALUE_NOT_EMPTY
VALUE_LANGUAGE_MATCH
CONSUMER_EXISTS
NO_UNAUTHORIZED_FALLBACK
PRIMARY_WWW_MATCH
```

## 7.126. UI atslēgu paritāte (v1.17)

Katrai mērķvalodai jāsalīdzina atslēgu kopa ar kanonisko UI atslēgu
kopu.

Obligātie rādītāji:

```text
EXPECTED_UI_KEYS
ACTUAL_UI_KEYS
MISSING_UI_KEYS
EXTRA_UI_KEYS
EMPTY_UI_VALUES
DUPLICATE_UI_KEYS
INVALID_UI_KEYS
```

UI atslēgu paritāte ir `PASS` tikai tad, ja:

```text
MISSING_UI_KEYS = 0
EXTRA_UI_KEYS = 0
EMPTY_UI_VALUES = 0
DUPLICATE_UI_KEYS = 0
INVALID_UI_KEYS = 0
```

Papildu atslēga nav automātiski kļūda, ja tā ir dokumentēta kā konkrētās
valodas nepieciešamība. Šādā gadījumā nepieciešams OWNER pamatojums.

## 7.127. UI fallback kontrole (v1.17)

Katram runtime skatam jāpārbauda:

```text
LV_FALLBACK
EN_FALLBACK
DE_FALLBACK
RAW_KEY_FALLBACK
EMPTY_STRING_FALLBACK
UNDEFINED_FALLBACK
```

Mērķvalodas skatā nedrīkst parādīties:

- LV teksts;
- EN teksts;
- citas valodas teksts;
- neapstrādāts i18n atslēgas nosaukums;
- `undefined`;
- `null`;
- tukša poga vai virsraksts.

Fallback findings jānorāda ar precīzu:

```text
Language
Route
View ID
DOM selector
UI key
Rendered CURRENT
Expected source
```

## 7.128. UI koplietoto atslēgu kontrole (v1.17)

Visas koplietotās UI atslēgas jāgrupē pēc faktiskā production mērķa:

```text
(File, Field/path)
```

Ja viena atslēga tiek lietota vairākos moduļos, obligāti jāuzskaita:

```text
All consumers
All routes
All views
All source findings
All proposed values
Canonical CURRENT
Canonical OWNER NEW
```

Ja vienam production mērķim ir vairāki atšķirīgi OWNER `NEW`:

```text
SHARED_UI_KEY_CONFLICT
```

Apply ir bloķēts, līdz OWNER apstiprina vienu kanonisku vērtību vai
atsevišķas atslēgas izveidi.

## 7.129. UI tekstu lingvistiskais audits (v1.17)

Katram UI tekstam jāpārbauda:

- mērķvalodas pareizība;
- dabiskums;
- konteksts;
- formalitāte;
- darbības vārda forma;
- vienskaitlis un daudzskaitlis;
- dzimte;
- terminoloģijas konsekvence;
- pieturzīmes;
- lielie un mazie burti;
- valodai specifiskās diakritiskās zīmes;
- atbilstība faktiskajai UI darbībai.

Pogas tekstam jāapraksta faktiskā darbība.

Piemēram, instrukcija par locījumu nedrīkst kļūt par instrukciju par
darbības vārda konjugāciju.

## 7.130. Pieejamības tekstu audits (v1.17)

Atsevišķi jāpārbauda:

```text
aria-label
aria-labelledby
aria-describedby
title
alt
placeholder
role
tabindex
```

Obligāti:

- `aria-label` atbilst redzamajai darbībai;
- `title` nav citā valodā;
- attēliem ir korekts `alt`, ja tas nepieciešams;
- interaktīvi elementi ir sasniedzami ar tastatūru;
- focus ir redzams;
- nav vienādu, neskaidru label vairākiem atšķirīgiem elementiem.

## 7.131. Deterministisks vizuālo skatu inventārs (v1.17)

Pirms runtime audita jāizveido visu obligāto skatu inventārs.

Katram skatam:

```text
Language
Route
Module
View ID
View description
Viewport
UI state
Input data/state
Expected elements
Expected UI keys
Expected interactions
LV reference view
Screenshot path
DOM snapshot/reference
Production baseline SHA
```

Unikālā skata atslēga:

```text
(Language, Route, View ID, Viewport, UI state)
```

## 7.132. Skatu klasifikācija (v1.17)

Inventārā atsevišķi jāklasificē:

```text
HOME
LANGUAGE_SELECTOR
MAIN_MENU
LEVEL_SELECTOR
FLASHCARD_FRONT
FLASHCARD_BACK
STUDY_CARD
TRAINING_MODE
SENTENCES
VERBS
KURSS_LESSON
KURSS_DIALOGUE
KURSS_EXERCISE
SETTINGS
HELP
MODAL
TOOLTIP
ERROR_STATE
EMPTY_STATE
LOADING_STATE
COMPLETED_STATE
```

Nevienu moduli nedrīkst uzskatīt par vizuāli pārbaudītu tikai tāpēc, ka
pārbaudīta sākumlapa.

## 7.133. Obligātie viewport (v1.17)

Katram obligātajam skatam jāpārbauda vismaz:

```text
DESKTOP
MOBILE
```

Ieteicamie minimālie izmēri:

```text
DESKTOP: 1440 × 900
MOBILE: 390 × 844
```

Ja lietotnei ir īpaši tablet vai narrow-mobile izkārtojumi, papildus:

```text
TABLET
NARROW_MOBILE
```

Viewport izmēri atskaitē jānorāda precīzi.

## 7.134. Vizuālā batch lielums — 10 pilni UI skati (v1.17)

Runtime auditā jāizmanto:

```text
maksimums 10 pilni UI skati vienā pārbaudes batch
```

Viens pilns UI skats ietver:

- vienu valodu;
- vienu route/view;
- vienu UI stāvokli;
- desktop pārbaudi;
- mobile pārbaudi;
- DOM pārbaudi;
- console pārbaudi;
- interakcijas pārbaudi;
- ekrānuzņēmumus.

Sarežģītiem skatiem batch jāsamazina līdz 1–5 skatiem, piemēram:

- Kurss training režīms;
- Study kartīte;
- vairāku soļu modālais logs;
- valodas izvēle;
- audio stāvokļi.

Aizliegts palielināt batch virs 10 tikai ātruma dēļ.

## 7.135. UI stāvokļu audits (v1.17)

Katram interaktīvam skatam jāpārbauda faktiskie stāvokļi:

```text
DEFAULT
HOVER
FOCUS
ACTIVE
SELECTED
DISABLED
LOADING
ERROR
EMPTY
OPEN
CLOSED
FLIPPED
COMPLETED
```

Jāpārbauda tikai tie stāvokļi, kuri konkrētajam elementam faktiski
eksistē.

Obligāti jāreģistrē:

```text
EXPECTED_STATES
AUDITED_STATES
MISSING_STATES
```

## 7.136. Teksta pārplūdes kontrole (v1.17)

Katram skatam jāpārbauda:

```text
TEXT_OVERFLOW
TEXT_CLIPPING
ELEMENT_OVERLAP
BUTTON_OVERFLOW
MODAL_OVERFLOW
OFFSCREEN_CONTENT
BROKEN_LINE_WRAP
UNREADABLE_TEXT
```

Īpaši jāpārbauda:

- garākie mērķvalodas teksti;
- pogas;
- virsraksti;
- tooltip;
- modal logi;
- kartīšu front/back;
- mobile skati;
- Kurss instrukcijas;
- lietvārdi ar artikuliem;
- daudzrindu tulkojumi.

## 7.137. Funkcionālā runtime kontrole (v1.17)

Katram skatam jāpārbauda paredzētās darbības:

```text
CLICK
KEYBOARD
FOCUS
NAVIGATION
BACK
NEXT
FLIP
PROGRESS
AUDIO
MODAL_OPEN
MODAL_CLOSE
LANGUAGE_CHANGE
LEVEL_CHANGE
STATE_PERSISTENCE
```

Elementa vizuāla eksistence nepierāda, ka tas darbojas.

Katram interaction findingam jānorāda:

```text
Action
Expected result
Actual result
DOM selector
Console output
Screenshot evidence
```

## 7.138. Valodas maiņas kontrole (v1.17)

Pēc valodas maiņas jāpārbauda:

- visi redzamie UI teksti;
- route saglabāšana vai paredzētā navigācija;
- izvēlētās valodas stāvoklis;
- fallback neesamība;
- kartīšu valoda;
- Kurss valoda;
- UI label;
- audio mapping;
- local/session storage;
- pirmreizējās izvēles plūsma.

Obligāti:

```text
FIRST_LANGUAGE_SELECTION = PASS
LANGUAGE_SWITCH = PASS
LANGUAGE_STATE_PERSISTENCE = PASS
```

## 7.139. Kartīšu vizuālā kontrole (v1.17)

Parastajām un Study kartītēm jāpārbauda:

- front;
- back;
- flip;
- virsraksts;
- DE apakšvirsraksts;
- artikuls;
- plurālis;
- Galvenā doma;
- explanation;
- examples;
- comparison;
- tip;
- important;
- krāsu akcenti;
- audio;
- next;
- progress.

DE apakšvirsraksts nedrīkst saņemt neatļautu krāsu.

Krāsu akcentiem jābūt mācību funkcijai, ne dekorācijai.

## 7.140. Kurss runtime kontrole (v1.17)

Kurss vizuālajā auditā jāpiemēro arī v1.14 prasības.

Obligāti atsevišķi pārbaudīt:

```text
L1–6 legacy
L7 deck
L8–21 flashcards/training cards
```

Jāpārbauda:

- visas 21 lekcijas;
- dialogi;
- instrukcijas;
- training cards;
- front/back;
- progress;
- audio;
- shared UI keys;
- mobile/desktop;
- HTML struktūra;
- LV vizuālā un funkcionālā paritāte.

## 7.141. Console un runtime kļūdas (v1.17)

Katram pārbaudītajam skatam jāreģistrē:

```text
CONSOLE_ERRORS
UNHANDLED_EXCEPTIONS
NETWORK_ERRORS
MISSING_RESOURCES
FAILED_AUDIO_LOADS
BROKEN_IMAGE_LOADS
```

Brīdinājums nav automātiski closure bloķētājs, bet tas jāklasificē.

Runtime izņēmums vai resursa kļūda, kas bojā skatu vai darbību, bloķē
closure.

## 7.142. Vizuālā findinga struktūra (v1.17)

Katram findingam obligāti:

```text
Audit ID
Language
Route
Module
View ID
Viewport
UI state
DOM selector
UI key if applicable
CURRENT
Expected result
Actual result
Screenshot evidence
Console evidence
Severity
Category
OWNER STATUS
OWNER NEW/action
OWNER note
```

Viena rinda ir viens precīzs vizuālais vai funkcionālais mērķis.

Aizliegts:

```text
+N citi skati
all languages
several buttons
multiple related problems
```

## 7.143. UI pre-finding validācija (v1.17)

Pirms findinga publicēšanas jāpārbauda:

```text
Language exists
Route exists
View ID exists
Viewport exists
UI state exists
DOM selector resolves
UI key exists if reported
CURRENT matches rendered/production value
Screenshot belongs to the same view
Finding is unique
```

Ja validācija neizdodas:

```text
INVALID_LANGUAGE
INVALID_ROUTE
INVALID_VIEW
INVALID_VIEWPORT
INVALID_STATE
INVALID_SELECTOR
INVALID_UI_KEY
CURRENT_VALUE_MISMATCH
SCREENSHOT_CONTEXT_MISMATCH
DUPLICATE_FINDING
```

Šādu findingu nedrīkst publicēt kā apply-gatavu.

## 7.144. UI OWNER vēstures aizsardzība (v1.17)

Pirms findinga publicēšanas jāpārbauda OWNER vēsture pēc:

```text
(Language, Route, View ID, Viewport, UI state, DOM selector, CURRENT)
```

Iepriekšējs:

```text
FALSE_POSITIVE
NELABOT
OWNER_ACCEPTED
```

nedrīkst tikt atkārtoti atvērts bez:

```text
OWNER_DECISION_REOPEN_REQUIRED
Previous OWNER status
Previous OWNER value
New visual/runtime evidence
Reason for reopening
```

## 7.145. UI OWNER pierādījuma fails (v1.17)

Katram OWNER lēmumam pierādījuma `.md` failā obligāti:

```text
1. Oriģinālais stāvoklis
2. Veiktās izmaiņas
3. Gala rezultāts
```

Papildus:

```text
Language
Route
View ID
Viewport
UI state
DOM selector
UI key
Screenshot before
Screenshot after if repaired
OWNER status
OWNER justification
```

Pierādījuma failam 1:1 jāatbilst OWNER authority failam.

## 7.146. UI COPY-ONLY apply (v1.17)

UI remontam obligāti piemērot `REPAIR_APPLY_SAFETY_STANDARD.md`.

Atļauts mainīt tikai OWNER `LABOT` mērķus ar:

```text
File
Field/path or selector target
CURRENT
OWNER NEW/action
```

Aizliegts:

- improvizēt tulkojumu;
- mainīt citas valodas;
- veikt globālu cleanup;
- mainīt DE;
- pārrakstīt shared UI key bez konflikta atrisināšanas;
- mainīt blakus elementus bez OWNER rindas;
- piemērot screenshot pieņēmumu bez production target.

## 7.147. UI targeted regression (v1.17)

Pēc apply jāpārbauda:

- visi OWNER `LABOT`;
- visi skartie viewport;
- visi skartie stāvokļi;
- visas skartās valodas;
- shared UI key patērētāji;
- primary/`www` spogulis;
- console;
- negaidītas izmaiņas.

Obligāti:

```text
REQUESTED
PROCESSED
APPLIED_VERIFIED
VISUAL_TARGETS_RECHECKED
RUNTIME_TARGETS_RECHECKED
CURRENT_VALUE_MISMATCH
FAILED
UNEXPECTED_CHANGES
DE_CHANGES
```

## 7.148. Pilns post-repair UI audits (v1.17)

Pēc targeted regression obligāti atkārtot:

1. pilnu UI/i18n atslēgu auditu;
2. pilnu runtime vizuālo auditu;
3. visus obligātos viewport;
4. visus obligātos skatus;
5. shared UI key konfliktu pārbaudi;
6. fallback pārbaudi;
7. console pārbaudi.

Targeted regression viena pati nav closure pierādījums.

## 7.149. UI obligātie pārklājuma rādītāji (v1.17)

Pilnā atskaitē obligāti:

```text
LANGUAGE_COVERAGE
UI_KEY_COVERAGE
ROUTE_COVERAGE
VIEW_COVERAGE
VIEWPORT_COVERAGE
STATE_COVERAGE
UI_KEY_RENDER_COVERAGE
INTERACTION_COVERAGE
ACCESSIBILITY_COVERAGE
BATCH_COVERAGE
```

Piemēram, ja scope ir:

```text
32 valodas
29 obligātie skati
2 viewport
```

minimālais pamata skatu pārklājums ir:

```text
32 × 29 × 2 = 1856
VISUAL_VIEW_COVERAGE = 1856/1856
```

UI stāvokļu pārbaudes jāuzskaita papildus, nevis jāpaslēpj šajā skaitā.

## 7.150. UI/i18n gala vārti (v1.17)

```text
UI_KEY_COVERAGE = 100%
MISSING_UI_KEYS = 0
EXTRA_UI_KEYS = 0
EMPTY_UI_VALUES = 0
DUPLICATE_UI_KEYS = 0
INVALID_UI_KEYS = 0
SHARED_UI_KEY_CONFLICTS = 0
LV_FALLBACK = 0
EN_FALLBACK = 0
RAW_KEY_FALLBACK = 0
CURRENT_EXACT_MATCH = 100%
PRIMARY_WWW_MIRROR = PASS
```

## 7.151. Vizuālā runtime gala vārti (v1.17)

```text
LANGUAGE_COVERAGE = 100%
ROUTE_COVERAGE = 100%
VIEW_COVERAGE = 100%
VIEWPORT_COVERAGE = 100%
STATE_COVERAGE = 100%
INTERACTION_COVERAGE = 100%
ACCESSIBILITY_COVERAGE = 100%
TEXT_OVERFLOW = 0
TEXT_CLIPPING = 0
ELEMENT_OVERLAP = 0
BROKEN_INTERACTIONS = 0
MISSING_ELEMENTS = 0
CONSOLE_ERRORS = 0
UNHANDLED_EXCEPTIONS = 0
MISSING_RESOURCES = 0
HTML_STRUCTURE = PASS
VISUAL_PARITY = PASS
FIRST_LANGUAGE_SELECTION = PASS
LANGUAGE_SWITCH = PASS
LANGUAGE_STATE_PERSISTENCE = PASS
```

## 7.152. UI/vizuālā closure vārti (v1.17)

UI/i18n/vizuālais audits ir:

```text
OWNER ACCEPTED / CLOSED
```

tikai tad, ja:

```text
UI_I18N_AUDIT = PASS
VISUAL_RUNTIME_AUDIT = PASS
LANGUAGE_COVERAGE = 100%
UI_KEY_COVERAGE = 100%
ROUTE_COVERAGE = 100%
VIEW_COVERAGE = 100%
VIEWPORT_COVERAGE = 100%
STATE_COVERAGE = 100%
INTERACTION_COVERAGE = 100%
ACCESSIBILITY_COVERAGE = 100%
BATCH_COVERAGE = 100%
APPLIED_VERIFIED = 100%
CURRENT_EXACT_MATCH = 100%
NEW_VALIDATED_REAL_FINDINGS = 0
REPAIR_REGRESSION = 0
SHARED_UI_KEY_CONFLICTS = 0
LV_FALLBACK = 0
EN_FALLBACK = 0
RAW_KEY_FALLBACK = 0
TEXT_OVERFLOW = 0
TEXT_CLIPPING = 0
ELEMENT_OVERLAP = 0
BROKEN_INTERACTIONS = 0
MISSING_ELEMENTS = 0
CONSOLE_ERRORS = 0
DE_UNAUTHORIZED_CHANGES = 0
PRIMARY_WWW_MIRROR = PASS
HTML_STRUCTURE = PASS
VISUAL_PARITY = PASS
```

Ja kaut viens vārts nav izpildīts:

```text
UI_VISUAL_CLOSURE_BLOCKED
```

------------------------------------------------------------------------

# 8. OWNER REVIEW

Pēc audita visi reālie findings tiek nodoti OWNER review, izmantojot
AUDIT stage jau sagatavotos `OWNER VIEW` un `OWNER DECISIONS` failus.
OWNER nedrīkst būt spiests vispirms dot atsevišķu uzdevumu tikai šo failu
vai GitHub saišu izveidei.

Atļautie statusi: `LABOT`, `NELABOT`, `FALSE_POSITIVE`,
`NEEDS_SOURCE_REVIEW`.

**LABOT** --- OWNER apstiprinājis precīzu gala vērtību. **NELABOT** ---
CURRENT apzināti saglabājams. **FALSE_POSITIVE** --- auditā atrastais
nav kļūda. **NEEDS_SOURCE_REVIEW** --- nav pietiekama autoritatīva
pamata drošam lēmumam.

`LABOT` ierakstam jābūt pietiekamam deterministiskam COPY-ONLY apply:
precīzs ID, field/path, `CURRENT`, precīzs `NEW`/`OWNER_DECISION`. Ja
precīzu `NEW` nevar uzrakstīt, statuss nedrīkst būt `LABOT`.

## 8.1. Viens OWNER fails

Vienam datasetam izmanto **vienu autoritatīvu OWNER decisions failu**.
Ja tehniski nepieciešams pārskatīt pa daļām, pagaidu review daļas beigās
konsolidē vienā failā. Apply nedrīkst balstīties uz vairākiem
savstarpēji konkurējošiem OWNER failiem.

Ja viens `(ID, field)` parādās vairākas reizes, to deduplicē; spēkā ir
jaunākais skaidri apstiprinātais OWNER lēmums; pretrunas atrisina pirms
apply.

------------------------------------------------------------------------

# 9. COPY-ONLY REPAIR

Remonta aģents nedrīkst tulkot, pārfrāzēt, "uzlabot", veikt cleanup vai
improvizēt. Tas drīkst tikai izpildīt OWNER mappingu.

Pirms katras izmaiņas obligāti:
`actual production value === OWNER CURRENT`. Ja neatbilst: `SKIP` +
`CURRENT_VALUE_MISMATCH`; neko neminēt un nepārrakstīt.

Apply tikai `Status = LABOT`, precīzs OWNER target un precīzs OWNER NEW.
`NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW` netiek modificēti.

Vairāku tulkojumu gadījumā obligāti §1.1.5: bez OWNER `NEW` ar tieši
vienu galveno tulkojumu — `SKIP_OWNER_DECISION_REQUIRED`.

Nedrīkst mainīt blakus kartes, citus laukus tajā pašā objektā, DE, LV
MASTER, citas valodas, renderer/CSS/UI loģiku vai formatējumu visā failā
tikai cleanup dēļ.

------------------------------------------------------------------------

# 10. REGRESSION --- OBLIGĀTS PĒC APPLY

Pēc remonta obligāti pārbauda:

1.  visi OWNER `LABOT` NEW faktiski atrodas precīzajā target;
2.  visi `NELABOT` saglabāti;
3.  visi `FALSE_POSITIVE` saglabāti;
4.  visi `NEEDS_SOURCE_REVIEW` nav mehāniski mainīti;
5.  DE diff = 0;
6.  LV MASTER diff = 0;
7.  citu valodu diff = 0;
8.  ID/order PASS;
9.  syntax PASS;
10. data↔www mirror PASS;
11. Study/sectionAccents validator PASS atbilstoši projekta konvencijām;
12. Kurss validator PASS, ja attiecas;
13. placeholders/remnants/mojibake targeted recheck;
14. changed-target linguistic recheck;
15. unexpected production changes = 0;
16. **FULL deterministic residual scan** pār visu aktuālo dataseta
    production scope, ne tikai changed targets;
17. `FOREIGN_LANGUAGE_RESIDUAL = 0` visām aizliegtajām
    source-language/LV paliekām, ja datasetam jābūt pilnībā
    lokalizētam;
18. `EMPTY_REQUIRED_LOCALIZED_FIELDS = 0`;
19. `DETERMINISTIC_SCOPE_COVERAGE = 100%`;
20. `DETERMINISTIC_DISCOVERY_COMPLETENESS = 100%`;
21. parastajām flashkartēm `MULTI_MEANING_FRONT_UNRESOLVED = 0`;
22. Kurss gadījumā — `LIVE_RUNTIME_REQUIRED_PATHS = PASS`;
23. Kurss L8--L21 gadījumā — exercise/translate first-card
    initialization, progress, flip un next = PASS;
24. `legacyHtml` gadījumā — full learner-facing text-node residual scan
    = PASS.

**Hard rule:**

Targeted regression pierāda OWNER apply pareizību. Full deterministic
residual scan pierāda, ka visā production scope nav palikušas mehāniski
atrodamas closure-blocking kļūdas.

Neviens no šiem pierādījumiem neaizstāj otru.

Ja regression atrod kļūdu, dataset nav CLOSED.

## 10.1. Multiple translation OWNER lock

MASTER regression suite papildināts ar pārbaudi, ka:

1.  parastā flashcard ar `A • B • C` tiek atrasta;
2.  tooling neizvēlas `A`, `B` vai `C` automātiski;
3.  finding kļūst `OWNER_DECISION_REQUIRED`;
4.  bez OWNER `NEW` production netiek mainīts;
5.  pēc OWNER apstiprināta viena `NEW` COPY-ONLY apply strādā;
6.  post-repair full residual scan apstiprina
    `MAIN_TRANSLATION_COUNT_VIOLATIONS = 0`;
6.  Case A–D (§13): ordinary `dauerhaft → püsiv • pikaajaline • vastupidav`,
    standardStudy `finden → leidma • arvama`, `für → jaoks • eest`, `aus → -st • välja`
    → `MULTIPLE_MAIN_TRANSLATIONS_DETECTED = true`, `OWNER_DECISION_REQUIRED`;
7.  Case E (§13): `finden → leidma` ar `arvama` tikai Study explanation →
    `MAIN_TRANSLATION_COUNT = 1`, PASS;


------------------------------------------------------------------------

# 11. POST-REPAIR CLOSURE / RE-AUDIT STABILITY

Targeted regression un full discovery audits ir divi dažādi instrumenti, un pilnam kvalitātes closure ir vajadzīgi abi.

- **Targeted regression** pierāda, ka OWNER remonts izpildīts pareizi.
- **Deterministic full gates** pierāda struktūras, sintakses, mirror, routing, remnants, renderer un citu deterministisku kvalitātes prasību stāvokli.
- **Full LLM discovery re-audit** atkārtoti pārbauda visu datasetu, lai atrastu reālas kļūdas, kuras iepriekšējais discovery audits varēja nepamanīt.

## 11.1. Obligātais closure ceļš pēc OWNER repair

Pēc katra COPY-ONLY repair obligāti:

1. targeted regression pret aktuālo OWNER/frozen baseline;
2. changed-target linguistic recheck;
3. deterministic full gates visam datasetam;
4. Git diff / unexpected-change pārbaude;
5. **pilns 100% LLM discovery re-audits visam datasetam** ar to pašu MASTER, scope un pēc iespējas identisku audit metodiku;
6. visi jaunie findings tiek salīdzināti ar iepriekšējiem baseline/findings un iziet §11.3 acceptance gate;
7. ja `NEW_VALIDATED_REAL_FINDINGS > 0` → OWNER review → COPY-ONLY repair → targeted regression → vēl viens pilns 100% discovery re-audits;
8. ja `NEW_VALIDATED_REAL_FINDINGS = 0` un visi pārējie closure gates PASS → final closure.

Tātad pilns post-repair re-audits ir **OBLIGĀTS**. Targeted regression viens pats nav pietiekams pilnam kvalitātes closure, jo tas nevar pierādīt, ka sākotnējais audits nav palaidis garām citus defektus.

## 11.2. Iteratīvais discovery closure princips

Atļauts atkārtot ciklu:

`FULL AUDIT → OWNER → REPAIR → REGRESSION → FULL AUDIT`

kamēr jaunais pilnais audits atrod jaunus **validētus reālus** defektus.

Tomēr aizliegts izmantot neapstrādātu LLM finding count kā nosacījumu cikla turpināšanai. Katrs jaunais finding vispirms jāvalidē.

Closure nosacījums nav `RAW_FINDINGS = 0`. Closure nosacījums ir:

`NEW_VALIDATED_REAL_FINDINGS = 0`

plus visi deterministic, regression, integrity un READ-ONLY gates = PASS.

Ja atkārtots audits uz tā paša vai ekvivalenta production stāvokļa ģenerē tikai jaunus style/noise/false-positive kandidātus, tie neizraisa jaunu repair ciklu.

## 11.3. New finding acceptance gate

Katram findingam, kas nebija iepriekšējā frozen baseline, pirms OWNER repair queue obligāti piešķir vienu statusu:

- `REPAIR_REGRESSION`;
- `PRE_EXISTING_BUT_PREVIOUSLY_MISSED`;
- `AUDIT_INSTABILITY`;
- `FALSE_POSITIVE_OR_STYLE_ONLY`;
- `GENUINELY_NEW_NON_REPAIR_DEFECT`;
- `NEEDS_SOURCE_REVIEW`.

`REPAIR_REGRESSION` obligāts Git pierādījums: skartais field/path tika mainīts konkrētajā repair un pre/post diff parāda regresijas cēloni.

Ja skartais lauks repair laikā nav mainījies, finding **nedrīkst** tikt saukts par repair regression. Tas var būt iepriekš nepamanīts reāls defekts, audit instability, false positive/style-only vai source-review kandidāts.

Par `NEW_VALIDATED_REAL_FINDING` drīkst skaitīt tikai findingu, kuram pēc validācijas ir pietiekams pamats remontam: OWNER lingvistisks apstiprinājums, neatkarīgs otrais validācijas avots/modelis, autoritatīvs valodas avots vai deterministisks MASTER pārkāpums.

## 11.4. Finding count nav closure KPI

Findingu skaita pieaugums pats par sevi nenozīmē, ka production kļuvusi sliktāka.

Closure KPI ir:

- `NEW_VALIDATED_REAL_FINDINGS = 0` pēdējā pilnajā 100% discovery re-auditā;
- visi iepriekšējie OWNER `LABOT` exact-match regression = PASS;
- unresolved validēti CRITICAL/HIGH/MEDIUM/LOW = 0 vai OWNER `NELABOT/FALSE_POSITIVE/NEEDS_SOURCE_REVIEW` skaidri dokumentēti atbilstoši closure politikai;
- deterministic gates = PASS;
- repair regressions = 0;
- unexpected changes = 0;
- READ-ONLY integritāte = PASS;
- `ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS = 0` (sk. §11.14);
- `MULTIPLE_TRANSLATION_OWNER_UNRESOLVED = 0` (sk. §11.14).

Raw LLM finding count izmanto discovery uzskaitei, nevis kā vienīgo kvalitātes progresijas metriku.

## 11.5. Re-audit reproducibility

Katram atkārtotam full discovery re-auditam saglabā §7.7 reproducibility metadata un salīdzina ar iepriekšējo run. Ja production SHA nav mainījies, bet findingu kopa būtiski svārstās, obligāti veic audit-stability/root-cause klasifikāciju.

Tas **neatceļ** pilna re-audita pienākumu pēc repair; tas novērš LLM noise automātisku pārvēršanu par kļūdām.

------------------------------------------------------------------------

------------------------------------------------------------------------

## 11.6. OWNER DECISION PERSISTENCE / REOPEN RULE

OWNER apstiprināts un production piemērots lēmums nav vienreizējs repair
inputs. Tas kļūst par **pastāvīgu audita vēsturi un lokālu autoritatīvu
baseline konkrētajam `(object/card ID, field/path)`**.

Nākamajos pilnajos auditos un re-auditos auditoram obligāti jāidentificē,
vai pārbaudāmais lauks iepriekš ir mainīts ar OWNER decisions.

## 11.6.1. Obligātā OWNER vēsture

Ja laukam ir iepriekšējs OWNER repair, audita datos jābūt sasaistāmai
vismaz šādai informācijai:

- `OWNER_REPAIRED = YES`;
- `OWNER_DECISION_SOURCE` — autoritatīvais OWNER decisions fails;
- `OWNER_DECISION_ID` — finding/card/object identifikators;
- `OWNER_FIELD_PATH`;
- `OWNER_PREVIOUS_CURRENT`;
- `OWNER_APPROVED_VALUE` — precīzais OWNER `NEW`;
- `OWNER_APPLIED_SHA` — commit/SHA, kurā lēmums piemērots;
- `OWNER_APPLY_RESULT` — `APPLIED` / `ALREADY_APPLIED`;
- ja pieejams, iepriekšējā targeted regression rezultāts.

OWNER vēsture nedrīkst būt atkarīga tikai no sarunas atmiņas. Tai jābūt
rekonstruējamai no repozitorija artefaktiem un Git vēstures.

## 11.6.2. Auditora pienākums pirms jauna finding

Ja pilns audits vai re-audits flaggo lauku, kuram ir OWNER vēsture,
auditors **nedrīkst** to uzreiz klasificēt kā parastu jaunu `LABOT`
kandidātu.

Vispirms jāpārbauda:

1. vai production `CURRENT` precīzi sakrīt ar pēdējo
   `OWNER_APPROVED_VALUE`;
2. vai apply commit tiešām mainīja paredzēto field/path;
3. vai pēc OWNER lēmuma nav bijusi cita autorizēta production izmaiņa;
4. vai jaunais finding ir jauns objektīvs defekta pierādījums vai tikai
   cita LLM stilistiska/lingvistiska preference.

## 11.6.3. Obligātā klasifikācija OWNER laukiem

Atkārtoti flaggotam OWNER laukam pirms jebkāda jauna repair jāpiešķir
viens no statusiem:

- `OWNER_DECISION_CONFIRMED` — production sakrīt ar OWNER apstiprināto
  vērtību un nav pietiekama jauna pierādījuma lēmuma atvēršanai;
- `OWNER_DECISION_REOPEN_REQUIRED` — ir jauns objektīvs pierādījums, ka
  iepriekš OWNER apstiprinātā vērtība ir reāli kļūdaina;
- `REPAIR_REGRESSION` — production neatbilst OWNER `NEW`, un Git/apply
  pierādījums rāda, ka kļūdu radīja repair/apply;
- `FALSE_POSITIVE_OR_STYLE_ONLY` — jaunais audit finding ir preference,
  stila variants vai nepamatots atkārtots flags;
- `NEEDS_SOURCE_REVIEW` — bez avota/DE/LV MASTER vai citas autoritatīvas
  pārbaudes nav droši izlemt.

`OWNER_DECISION_CONFIRMED` un `FALSE_POSITIVE_OR_STYLE_ONLY` netiek
virzīti jaunā repair queue.

## 11.6.4. OWNER lock un reopen gate

Iepriekš OWNER apstiprinātu un korekti piemērotu vērtību nedrīkst mainīt
tikai tāpēc, ka nākamais LLM audits piedāvā citu formulējumu.

`OWNER_DECISION_REOPEN_REQUIRED` drīkst piešķirt tikai tad, ja ir
**REOPEN_JUSTIFICATION**.

Pietiekams reopen pamats ir vismaz viens no:

- skaidrs semantisks vai gramatisks defekts, ko var objektīvi pierādīt;
- neatbilstība DE avota nozīmei;
- neatbilstība LV MASTER struktūrai/pedagoģiskajai nozīmei, ja LV MASTER
  konkrētajā laukā ir autoritatīvs;
- deterministisks MASTER noteikuma pārkāpums;
- autoritatīvs valodas avots;
- OWNER atkārtota manuāla pārskatīšana, kas skaidri aizstāj iepriekšējo
  lēmumu.

Nepietiekams reopen pamats:

- “Luna/GPT tagad iesaka citādi”;
- sinonīms bez nozīmes kļūdas;
- tīra stilistiska preference;
- naturalness variants, ja esošais OWNER variants ir pareizs un dabisks;
- finding severity vien bez pierādījuma.

## 11.6.5. Reopen ieraksta obligātie lauki

Ja OWNER lēmums tiek atvērts no jauna, OWNER review jāparāda:

- `CURRENT`;
- `OWNER_HISTORY`;
- `OWNER_APPROVED_VALUE`;
- `OWNER_APPLIED_SHA`;
- `NEW_AUDIT_FINDING`;
- `REOPEN_JUSTIFICATION`;
- `PROPOSED_NEW`, ja tāds ir;
- jaunais OWNER statuss/lēmums.

Bez `REOPEN_JUSTIFICATION` iepriekš OWNER apstiprināts lauks nedrīkst
saņemt jaunu `LABOT` statusu.

## 11.6.6. Precedence vairākiem OWNER lēmumiem

Ja vienam `(object/card ID, field/path)` ir vairāki OWNER lēmumi,
autoritatīvs ir **jaunākais skaidri apstiprinātais OWNER lēmums**, kas:

1. atsaucas uz konkrēto field/path;
2. ir piemērots production vai skaidri paredzēts nākamajam apply;
3. nav vēlāk OWNER atsaukts.

Vecāki OWNER lēmumi paliek audit trail, bet nedrīkst pārrakstīt jaunāko
OWNER vērtību.

## 11.6.7. Pilna re-audita integrācija

MASTER v1.3 obligātais 100% post-repair full discovery re-audits paliek
spēkā.

v1.4 papildina to ar prasību:

**full re-audit = full discovery + OWNER history awareness.**

Tas nozīmē, ka audits joprojām drīkst atklāt iepriekš nepamanītas reālas
kļūdas, bet nedrīkst radīt “ping-pong repair” uz laukiem, kurus OWNER jau
apstiprinājis, bez jauna pierādījuma.

Closure laikā atsevišķi jāuzrāda:

- `OWNER_REPAIRED_FIELDS_CHECKED`;
- `OWNER_DECISION_CONFIRMED`;
- `OWNER_DECISION_REOPEN_REQUIRED`;
- `REPAIR_REGRESSION`;
- `FALSE_POSITIVE_OR_STYLE_ONLY`;
- `NEW_VALIDATED_REAL_FINDINGS`.

`FINAL CLOSED` nav atļauts, ja
`OWNER_DECISION_REOPEN_REQUIRED > 0` nav OWNER atrisināti.

## 11.7. MAIN INTEGRATION, CLOSURE PERSISTENCE & BRANCH ≠ FINAL_CLOSED

Darba branchā sasniegts OWNER repair = PASS, targeted regression = PASS,
micro-regression = PASS un closure = PASS **pats par sevi NEDOD** tiesības
deklarēt datasetu par galīgi `FINAL_CLOSED`.

Līdz integrācijai `origin/main` atļautais statuss ir:

`CLOSED_PENDING_MAIN_INTEGRATION`

Nevis `FINAL_CLOSED` vai ekvivalents gala statuss.

**Princips:** `BRANCH PASS ≠ FINAL CLOSED`. `MERGED + VERIFIED ON MAIN =
PERSISTED CLOSURE`.

Repair, kas eksistē tikai darba branchā, nav persistēts projekta
production stāvoklis. Nākamais audits vienmēr auditē verificētu
authoritative production baseline, nevis nejauši izvēlētu branch vai
novecojušu `main`.

### 11.7.1. Obligāta main integrācija

Pēc veiksmīga OWNER repair un closure obligāti jānodrošina, ka
apstiprinātais production stāvoklis ir integrēts `origin/main`.

Integrācijas posmā obligāti jāsaglabā:

- visi OWNER `LABOT` labojumi;
- OWNER `NELABOT`;
- OWNER `FALSE_POSITIVE`;
- OWNER `NEEDS_SOURCE_REVIEW`;
- Study papildinājumi;
- sectionAccents labojumi;
- struktūras labojumi;
- atļautie UI / Kurss / training labojumi;
- DE READ-ONLY integritāte;
- visi citi datasetam piemērotie OWNER-lock lēmumi.

Integrācija nedrīkst pārtulkot, pārfrāzēt vai no jauna interpretēt OWNER
lēmumus.

### 11.7.2. Root-cause klase: neintegrēts repair/closure

Vispārināta kļūdas klase, ko MASTER v1.5 novērš:

repair/closure saturs var būt pareizs darba branchā, bet nebūt integrēts
`origin/main`. Šādā gadījumā nākamais audits no main var atkārtoti atrast
jau izlabotus findings.

Šī ir **procesa/baseline kļūda**, ne jauns production defect un ne jauns
OWNER repair backlog. Konkrēti dataset/card ID vai finding skaitļi nav
universāla MASTER norma — tie ir tikai root-cause piemēri.

### 11.7.3. Historical OWNER traceability

Nākamajiem auditiem jābūt history-aware. Ja finding skar lauku, kuram
iepriekš bijis OWNER lēmums, auditam jāspēj identificēt vismaz:

- iepriekšējā OWNER decision statusu;
- OWNER OLD/CURRENT, ja saglabāts;
- OWNER NEW, ja piemērojams;
- repair commit;
- main integration commit;
- post-merge verification rezultātu.

Iepriekš OWNER apstiprinātu un uz main verificētu vērtību nedrīkst
klusējot prezentēt kā pilnīgi jaunu finding.

Ja jaunais audits to apstrīd, jāizmanto atbilstoša history-aware
klasifikācija, piemēram, `OWNER_DECISION_CONFIRMED` vai
`OWNER_DECISION_REOPEN_REQUIRED` ar konkrētu jaunu pierādījumu.

## 11.8. OWNER DECISION PERSISTENCE — RE-AUDIT HARD GATE

Šī sadaļa pastiprina §11.6. Atkārtots audits **nedrīkst** ignorēt
iepriekšējos OWNER lēmumus.

Pirms lingvistiskā audita obligāti jāielādē datasetam pieejamā
autoritatīvā OWNER history. Ja OWNER history eksistē, bet auditors to
nav ielādējis:

`OWNER_HISTORY_GATE = FAIL`

`FULL_DISCOVERY` rezultāts nedrīkst kļūt par authoritative OWNER
backlog.

### 11.8.1. OWNER-repaired field recognition

Katram iepriekš OWNER apstiprinātam un piemērotam laukam jābūt
rekonstruējamam vismaz pēc:

- `DATASET`;
- `OBJECT/CARD ID`;
- `FIELD/PATH`;
- `OWNER STATUS`;
- `OWNER CURRENT`;
- `OWNER NEW`;
- `OWNER DECISION SOURCE`;
- `OWNER APPLY SHA`;
- `POST-APPLY VALUE`;
- `MAIN-INTEGRATION SHA`;
- `CURRENT MAIN VALUE`.

Ja atkārtots audits atrod kandidātu laukā, kurš iepriekš tika OWNER
apstiprināts un remontēts, pirms jauna finding izveides obligāti
pārbaudīt:

`CURRENT_MAIN_VALUE === OWNER_APPROVED_NEW`

Ja sakrīt, finding nedrīkst automātiski kļūt par `LABOT`/`PENDING`.

Auditoram vispirms jānosaka `OWNER_DECISION_CONFIRMED` vai
`OWNER_DECISION_REOPEN_REQUIRED` (sk. §11.6.3 un §11.8.2–§11.8.4).

### 11.8.2. OWNER_DECISION_CONFIRMED

Izmantot, ja:

- current main vērtība sakrīt ar OWNER-approved `NEW`;
- nav pierādīta repair regression;
- nav jauna objektīva source/grammar/semantic evidence;
- jaunais kandidāts ir tikai LLM formulējuma, stila, preference vai
  audit-run variācijas rezultāts.

Šāds kandidāts nav repair backlog. Tas nedrīkst palielināt
`VALIDATED_REAL_FINDINGS`.

### 11.8.3. OWNER_DECISION_REOPEN_REQUIRED

Iepriekšēju OWNER lēmumu drīkst atvērt tikai tad, ja ir jauns objektīvs
pierādījums, ka OWNER-approved vērtība ir kļūdaina.

Obligāti jāsaglabā:

- `PREVIOUS_OWNER_DECISION`;
- `PREVIOUS_OWNER_VALUE`;
- `CURRENT_VALUE`;
- `NEW_EVIDENCE`;
- `REOPEN_JUSTIFICATION`;
- `PROPOSED_NEW_VALUE`.

`REOPEN_JUSTIFICATION` nedrīkst būt:

- "Luna iesaka";
- "varētu skanēt labāk";
- stilistiska preference;
- atšķirīgs LLM formulējums;
- cita audita severity;
- finding count izmaiņa.

Bez objektīva pierādījuma: `OWNER_DECISION_CONFIRMED`.

### 11.8.4. Repair regression (OWNER history context)

Ja:

`CURRENT_MAIN_VALUE != OWNER_APPROVED_NEW`

un Git history pierāda, ka OWNER-approved `NEW` iepriekš bija pareizi
piemērots:

`REPAIR_REGRESSION`

Obligāti identificēt:

- `OWNER_APPLY_SHA`;
- `LAST_KNOWN_GOOD_SHA`;
- `REGRESSION_INTRODUCED_SHA`;
- `CURRENT_VALUE`;
- `EXPECTED_OWNER_VALUE`.

Šādu problēmu nedrīkst kļūdaini klasificēt kā jaunu lingvistisku
finding.

### 11.8.5. OWNER history coverage

Audit reportā obligāti jānorāda:

- `OWNER_HISTORY_AVAILABLE`;
- `OWNER_HISTORY_FILES_LOADED`;
- `OWNER_APPROVED_FIELDS_TOTAL`;
- `OWNER_APPROVED_FIELDS_CHECKED`;
- `OWNER_APPROVED_FIELDS_MATCHING_CURRENT`;
- `OWNER_APPROVED_FIELDS_DRIFTED`;
- `OWNER_DECISION_CONFIRMED`;
- `OWNER_DECISION_REOPEN_REQUIRED`;
- `REPAIR_REGRESSION`.

## 11.9 OWNER BACKLOG VALIDITY

Katram OWNER-PREP failam jānorāda:

- `RAW_CANDIDATES`
- `SEMANTIC_DEDUPED`
- `PREVIOUS_RAW_MATCHES`
- `PREVIOUSLY_MISSED`
- `OWNER_CONFIRMED`
- `REPAIR_REGRESSION`
- `FALSE_POSITIVE`
- `GENUINELY_NEW`
- `OWNER_BACKLOG_FINAL`

Obligāti:

```text
OWNER_BACKLOG_FINAL
=
tikai findingi, kam patiešām nepieciešams jauns OWNER lēmums
```

## 11.10 OWNER PREP IS NOT A SEPARATE USER TASK

OWNER PREP ir audita daļa. Tas nav manual follow-up task.

Pareizais dalījums:

**AUDIT / TOOLING:** atrod findingus; klasificē; ģenerē OWNER VIEW; ģenerē
OWNER DECISIONS; publicē GitHub.

**OWNER:** tikai pieņem lēmumu saturu.

OWNER nedrīkst būt atbildīgs par failu ģenerēšanas ierosināšanu.

## 11.11. DETERMINISTIC COMPLETENESS — FINAL CLOSURE HARD GATE

Datasetu nedrīkst deklarēt `FINAL_CLOSED` / `FINAL_CLOSED_ON_MAIN`,
kamēr nav izpildīts:

```text
DETERMINISTIC_SCOPE_COVERAGE = 100%
DETERMINISTIC_DISCOVERY_COMPLETENESS = 100%

SYNTAX = PASS
MIRROR = PASS
ID_ORDER = PASS
STRUCTURE = PASS
PARITY = PASS / N/A

FOREIGN_LANGUAGE_RESIDUAL = 0
EMPTY_REQUIRED_LOCALIZED_FIELDS = 0
PLACEHOLDERS = 0
MOJIBAKE = 0

OWNER_BACKLOG_FINAL = 0
NEEDS_SOURCE_REVIEW = 0
PENDING = 0

UNEXPECTED_PRODUCTION_CHANGES = 0
DE_CHANGES = 0
```

Papildu dataset-specific gate piemēro, ja attiecas.

Ja kāds obligātais deterministic gate nav veikts:

```text
FINAL_CLOSED = FORBIDDEN
```

un verdict jābūt blocker statusam, nevis PASS.

### 11.11.1. Negative proof prasība

`0 findings` drīkst deklarēt tikai tad, ja scan ir enumerējis visu
definēto scope.

Nedrīkst secināt:

```text
finding netika atrasts → finding neeksistē
```

ja scan coverage nav pierādīts.

### 11.11.2. Production-visible defect automātiski atver closure

Ja pēc `FINAL_CLOSED_ON_MAIN` tiek pierādīts reāls production-visible
defekts, kas eksistēja closure brīdī, dataset statusu automātiski
uzskata par:

```text
REOPEN_REQUIRED
```

līdz:

-   root cause ir klasificēts;
-   defekts ir remontēts vai OWNER atrisināts;
-   attiecīgais deterministic/runtime gate ir pievienots vai
    pastiprināts, ja iepriekšējais closure to nespēja atklāt;
-   post-repair verification uz `origin/main` ir PASS.

Iepriekšējais `FINAL_CLOSED` statuss nedrīkst tikt izmantots, lai
ignorētu production-visible pierādījumu.

## 11.12. KURSS LIVE / BROWSER CLOSURE HARD GATE

Kurss `FINAL_CLOSED_ON_MAIN` papildus §11.11 obligāti prasa:

```text
KURSS_SOURCE_STRUCTURE = PASS
KURSS_DETERMINISTIC_CONTENT_SCAN = PASS
KURSS_FOREIGN_LANGUAGE_RESIDUAL = 0
KURSS_LEGACYHTML_TEXTNODE_SCAN = PASS
KURSS_RUNTIME_SMOKE = PASS
KURSS_REQUIRED_DYNAMIC_CARD_PATHS = PASS
```

Browser/runtime smoke jāaptver visas funkcionāli obligātās
lesson/section klases.

L8--L21 vismaz:

```text
EXERCISE_DECK_RESOLVED = PASS
TRANSLATE_DECK_RESOLVED = PASS
FIRST_CARD_VISIBLE = PASS
PROGRESS_VISIBLE = PASS
FLIP = PASS
NEXT = PASS
```

Ja konkrētā lokalizācija izmanto atšķirīgu section title, shared renderer
nedrīkst paļauties tikai uz hardcoded title allowlist, ja strukturālais
section līgums ļauj drošu identifikāciju.

**Hard rule:**

```text
validate-kurss = PASS
```

viens pats nav pietiekams Kurss final closure.

## 11.13. MULTI_TRANSLATION_RESIDUAL_SCAN (v1.11)

Pēc repair nepietiek pārbaudīt tikai labotās kartītes.

Obligāti atkārtoti jāpārbauda **100% parasto flashcard**:

`MULTI_TRANSLATION_RESIDUAL_SCAN = PASS`

## 11.14. v1.11 closure metrics — vairāku tulkojumu hard gate

Katras valodas/dataset gala closure atskaitē obligāti norādīt:

-   `ORDINARY_FLASHCARD_SCOPE = <count>/<count>`;
-   `MULTI_TRANSLATION_SCAN_COVERAGE = 100%`;
-   `MULTIPLE_TRANSLATION_CANDIDATES_RAW = <count>`;
-   `MULTIPLE_TRANSLATION_VALIDATED_REAL = 0`;
-   `MULTIPLE_TRANSLATION_OWNER_UNRESOLVED = 0`;
-   `ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS = 0`;
-   `OWNER_AUTOMATIC_SELECTION = 0`.

Ja:

`MULTIPLE_TRANSLATION_OWNER_UNRESOLVED > 0`

vai

`ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS > 0`

tad:

`FINAL_CLOSED_ON_MAIN = BLOCKED`

## 11.15. v1.12 closure metrics — universal main translation hard gate

Katras valodas/dataset gala closure atskaitē obligāti norādīt (papildus §11.14):

-   `CARD_SCOPE = <count>/<count>`;
-   `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%`;
-   `UNMAPPED_MAIN_TRANSLATION_FIELDS = 0`;
-   `MULTIPLE_MAIN_TRANSLATION_CANDIDATES_RAW = <count>`;
-   `MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0`;
-   `MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0`;
-   `MAIN_TRANSLATION_COUNT_VIOLATIONS = 0`.

Ja `MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED > 0` vai
`MAIN_TRANSLATION_COUNT_VIOLATIONS > 0` vai `UNMAPPED_MAIN_TRANSLATION_FIELDS > 0`
vai `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE < 100%` →
`FINAL_CLOSED_ON_MAIN = BLOCKED`.

## 11.16. Post-repair audits — v1.13 closure vārti

Pēc OWNER COPY-ONLY apply obligāti jāveic:

1. targeted regression visiem OWNER `LABOT`;
2. pilns post-repair residual audits ar **to pašu** lauku inventāru un batch
   metodiku (§7.27–§7.31).

Targeted regression viena pati nav closure pierādījums (sk. arī §7.2.1 un
§11.1).

Post-repair audits jāsalīdzina ar sākotnējo inventāru un OWNER vēsturi.

Closure ir atļauts tikai tad, ja:

```text
APPLIED_VERIFIED = 100%
REPAIR_REGRESSION = 0
NEW_VALIDATED_REAL_FINDINGS = 0
CARD_COVERAGE = 100%
FIELD_COVERAGE = 100%
STUDY_SECTION_COVERAGE = 100%
all technical gates = PASS
```

## 11.17. OWNER vēstures aizsardzība — FALSE_POSITIVE lock (v1.13)

Pirms jauna findinga publicēšanas jāpārbauda iepriekšējā OWNER vēsture pēc:

```text
(Dataset, Card ID, Field/path, CURRENT)
```

Iepriekšējs:

```text
FALSE_POSITIVE
NELABOT
OWNER_ACCEPTED
```

nedrīkst tikt atkārtoti atvērts bez jauna konkrēta pierādījuma.

Atkārtotai atvēršanai obligāti jānorāda:

```text
OWNER_DECISION_REOPEN_REQUIRED
Previous OWNER status
Previous OWNER value
New evidence
Why previous decision is no longer valid
```

Bez šiem laukiem iepriekšējais OWNER lēmums paliek spēkā.

Šī prasība papildina §11.6, §11.8 un §11.9, bet tās neaizstāj.

## 11.18. v1.13 closure metrics — field-level coverage hard gate

Katras valodas/dataset gala closure atskaitē obligāti norādīt (papildus
§11.15):

```text
FIELD_COVERAGE = 100%
STUDY_SECTION_COVERAGE = 100%
CURRENT_EXACT_MATCH = 100%
MISSING_RESULTS = 0
DUPLICATES = 0
INVALID_CARD_ID = 0
INVALID_FIELD = 0
TARGET_OBJECT_MISMATCH = 0
AUDIT_ARTIFACTS_BLOCKED = 0
```

Ja kāds no šiem rādītājiem nav izpildīts → `FINAL_CLOSED_ON_MAIN = BLOCKED`.

------------------------------------------------------------------------

# 12. GIT / BRANCH MASTER PROTOKOLS

Šī sadaļa ir obligāta, lai novērstu A/B/C branch haosu.

## 12.1. Pirms jebkura jauna posma

1.  `git fetch origin`;
2.  identificē aktuālo `origin/main` SHA;
3.  pārbauda, vai iepriekšējais apstiprinātais darbs jau ir integrēts;
4.  jauns darba branch tiek veidots no aktuālā `origin/main`, nevis no
    veca audit/remonta branch.

Atskaitē ieraksta `MAIN_BASE_SHA`, `WORK_BRANCH`, `SCOPE`,
`MASTER_STANDARD_VERSION`.

## 12.2. Viens aktīvs branch vienam posmam

Vienam datasetam/posmam nav paralēlu remonta branch bez skaidras OWNER
atļaujas. Audit report-only PR un repair PR drīkst būt atsevišķi, bet
tiem jābūt skaidri sasaistītiem ar vienu audit state un vienu OWNER
decisions state.

## 12.3. Nekad nebalstīt jaunu darbu uz vecu branch pēc inerces

Pirms darba aģentam jāpārbauda faktiskā Git vēsture. Branch nosaukums
vai iepriekšējā saruna nav pietiekams pierādījums.

## 12.4. Merge secība un stāvokļu ķēde

Normāla workflow secība:

``` text
FULL_DISCOVERY
→ OWNER_REVIEW
→ OWNER_DECISIONS_LOCKED
→ COPY_ONLY_REPAIR
→ TARGETED_REGRESSION
→ CLOSURE_PASS
→ CLOSED_PENDING_MAIN_INTEGRATION
→ MERGE_TO_MAIN
→ POST_MERGE_MAIN_VERIFICATION
→ FINAL_CLOSED
```

Nākamais pilnais audits drīkst sākties tikai pēc `FINAL_CLOSED`,
izņemot OWNER skaidri pieprasītu diagnostisku auditu.

`audit/report + OWNER-PREP GitHub package → OWNER decisions → repair →
regression/closure → CLOSED_PENDING_MAIN_INTEGRATION → merge →
POST_MERGE_MAIN_VERIFICATION → FINAL_CLOSED`

## 12.5. Branch drift

Ja darba laikā `origin/main` ir mainījies, neizdara aklu merge.
Pārbauda, vai izmaiņas skar to pašu scope; ja skar, reconciliē pret
jauno main un OWNER CURRENT guards pārbauda no jauna.

## 12.6. POST-MERGE MAIN VERIFICATION GATE

Pēc merge obligāti pārbaudīt **faktisko `origin/main`**, nevis merge
branch vai lokālo pre-merge HEAD.

Obligāti fiksēt:

- `MAIN_BEFORE_SHA`;
- `MERGE_SHA`;
- `MAIN_AFTER_SHA`;
- dataset production file/blob SHA pirms merge;
- dataset production file/blob SHA pēc merge;
- closure branch production blob SHA.

Ja datasetam ir `data/...` un `www/data/...` mirror, pārbaudīt abus.

Obligāts nosacījums:

`CLOSURE_PRODUCTION == MAIN_AFTER_PRODUCTION`

semantiski un paredzētajos OWNER targetos.

Ja tas nav patiess:

`BLOCKED_MAIN_INTEGRATION_MISMATCH`

un datasetu nedrīkst deklarēt `FINAL_CLOSED`.

## 12.7. OWNER DECISION PERSISTENCE VERIFICATION ON MAIN

Pēc merge jāveic deterministiska OWNER mapping pārbaude uz faktisko
`origin/main`.

Katram OWNER objektam ar `Status: LABOT`:

`actual origin/main value === OWNER NEW`

Katram OWNER lock / saglabājamam lēmumam jāpārbauda, ka integrācija to
nav nejauši atcēlusi.

Obligāti jāziņo:

- OWNER targets expected;
- OWNER targets verified on main;
- missing;
- mismatched;
- superseded;
- unexpected changes.

`FINAL_CLOSED` atļauts tikai tad, ja visi piemērojamie OWNER targeti ir
verificēti uz `origin/main`.

## 12.8. Mandatory repair → main → re-audit sequence

Turpmāk obligātā secība ir:

``` text
FULL_DISCOVERY
→ OWNER REVIEW
→ OWNER DECISIONS
→ COPY-ONLY REPAIR
→ TARGETED REGRESSION
→ CLOSURE CHECK
→ MAIN INTEGRATION
→ POST-MERGE MAIN VERIFICATION
→ BASELINE MATCH
→ NEW FULL_DISCOVERY
```

Aizliegts:

``` text
FULL_DISCOVERY → repair branch → closure branch PASS → jauns FULL_DISCOVERY no veca main
```

Aizliegts arī:

``` text
FULL_DISCOVERY → repair → FULL_DISCOVERY uz repair branch → deklarēt FINAL_CLOSED → neintegrēt main
```

### 12.8.1. Main integration is part of closure

Datasetu nevar deklarēt `FINAL_CLOSED`, kamēr authoritative
OWNER-approved production nav `origin/main`.

Pirms merge: `CLOSED_PENDING_MAIN_INTEGRATION`

Pēc merge un post-merge verification: `FINAL_CLOSED`

Tikai `FINAL_CLOSED` stāvoklis drīkst kļūt par nākamā audita
authoritative closure baseline.

### 12.8.2. Post-merge blob verification

Pēc merge obligāti:

1. `git fetch origin`;
2. fiksēt:
   - `MAIN_BEFORE`;
   - `INTEGRATION_COMMIT`;
   - `MAIN_AFTER`;
   - `MAIN_DATASET_BLOB`;
   - `AUTHORITATIVE_CLOSURE_BLOB`.

Obligātais rezultāts:

`MAIN_DATASET_BLOB === AUTHORITATIVE_CLOSURE_BLOB`

Ja nesakrīt:

`BLOCKED_POST_MERGE_PRODUCTION_MISMATCH`

`FINAL_CLOSED` aizliegts.

Šis statuss papildina §12.6 `BLOCKED_MAIN_INTEGRATION_MISMATCH` —
abi nozīmē, ka merge nav verificēts un closure nav persistēts.

------------------------------------------------------------------------

# 13. FINAL_CLOSED DEFINĪCIJA

Datasetu drīkst deklarēt `FINAL_CLOSED` tikai tad, ja izpildīti **VISI**
piemērojamie nosacījumi:

1. OWNER decisions pabeigti;
2. OWNER repair pabeigts;
3. COPY-ONLY verification PASS;
4. targeted regression PASS;
5. nepieciešamais closure process PASS;
6. DE READ-ONLY PASS;
7. unexpected production changes = 0;
8. repair/closure production integrēts `origin/main`;
9. OWNER targets verificēti uz faktiskā `origin/main`
   (`POST_MERGE_MAIN_VERIFICATION` PASS);
10. data↔www mirror PASS, ja piemērojams;
11. dataset production blob pēc integrācijas ir fiksēts kā jaunais
    authoritative closure baseline.

Tikai pēc tam šo baseline drīkst izmantot kā atskaites punktu nākamajam
auditam.

Papildus §11–§12 prasībām dataset drīkst saukt par `OWNER ACCEPTED /
CLOSED` tikai tad, ja:

-   audits aptvēris 100% noteikto scope;
-   visi findings ir OWNER-resolved vai skaidri dokumentēti source
    issues;
-   visi `LABOT` piemēroti vai skaidri dokumentēti mismatch;
-   unresolved `PENDING` = 0;
-   reāli unresolved CRITICAL/HIGH/MEDIUM = 0, ja OWNER nav
    apstiprinājis izņēmumu;
-   targeted regression pret frozen OWNER baseline PASS;
-   repair regressions = 0 vai visi OWNER-resolved;
-   new LLM-only findings nemainītos laukos ir izgājuši 7.7.3 acceptance gate;
-   deterministic full gates PASS;
-   LV MASTER READ-ONLY PASS;
-   syntax, ID/order, mirror un relevant validators PASS;
-   final Git state ir zināms;
-   `OWNER_DECISION_REOPEN_REQUIRED = 0` vai OWNER atrisināts;
-   `ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS = 0` (sk. §11.14);
-   `MULTIPLE_TRANSLATION_OWNER_UNRESOLVED = 0` (sk. §11.14);
-   `MULTI_TRANSLATION_RESIDUAL_SCAN = PASS` (sk. §11.13).

Līdz `POST_MERGE_MAIN_VERIFICATION` PASS atļautais stāvoklis ir
`CLOSED_PENDING_MAIN_INTEGRATION`, nevis `FINAL_CLOSED`.

`PR created` nav tas pats, kas `CLOSED ON MAIN`. `BRANCH PASS ≠ FINAL
CLOSED`.

------------------------------------------------------------------------

# 14. GALA ATSKAITES STANDARTS

Obligāti norāda:

### Kopsavilkums

Valodas pāris, dataset, statuss, PR, branch, `MAIN_BASE_SHA`,
final/merge SHA, MASTER versija.

### Saturs / scope

Kartīšu skaits, Study, sentences, verbs, Kurss, UI un citi attiecīgie
komponenti.

### OWNER

Findings, LABOT, NELABOT, FALSE_POSITIVE, NEEDS_SOURCE_REVIEW, PENDING.

### Apply

Requested, applied, already applied, mismatch, skipped, unexpected,
`SKIP_OWNER_DECISION_REQUIRED`.

### Validācija

Syntax, parity, mirror, Study design, sectionAccents, Kurss,
engine/i18n, mojibake/remnants, UI smoke un dataset-specifiskie
validator results. Ja pārbaude nav veikta, raksta `NOT RUN`, nevis
pieņem PASS.

Obligāti jānorāda (v1.10):

```text
OBJECT_COVERAGE:
SEMANTIC_DISCOVERY_COMPLETENESS:

DETERMINISTIC_SCOPE_COVERAGE:
DETERMINISTIC_DISCOVERY_COMPLETENESS:

FOREIGN_LANGUAGE_RESIDUAL:
EMPTY_REQUIRED_LOCALIZED_FIELDS:
PLACEHOLDERS:
MOJIBAKE:

OWNER_BACKLOG_FINAL:
NEEDS_SOURCE_REVIEW:
PENDING:

TARGETED_OWNER_REGRESSION:
FULL_DETERMINISTIC_RESIDUAL_SCAN:

RUNTIME_REQUIRED:
RUNTIME_REQUIRED_PATHS:
RUNTIME_RESULT:

DE_CHANGES:
UNEXPECTED_PRODUCTION_CHANGES:
```

Kurss papildus:

```text
KURSS_LEGACYHTML_TEXTNODE_SCAN:
KURSS_L1_L21_RENDER_SCOPE:
KURSS_DYNAMIC_EXERCISE:
KURSS_DYNAMIC_TRANSLATE:
KURSS_FIRST_CARD_INITIALIZATION:
KURSS_PROGRESS:
KURSS_FLIP:
KURSS_NEXT:
```

### READ-ONLY integritāte

DE changes = 0; LV MASTER changes = 0; other-language unexpected changes
= 0.

### Multi-translation closure (v1.12)

`CARD_SCOPE`, `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE`,
`UNMAPPED_MAIN_TRANSLATION_FIELDS`, `MULTI_TRANSLATION_SCAN_COVERAGE`,
`MULTIPLE_MAIN_TRANSLATION_CANDIDATES_RAW`,
`MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL`,
`MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED`,
`MAIN_TRANSLATION_COUNT_VIOLATIONS`, `OWNER_AUTOMATIC_SELECTION`,
`MULTI_TRANSLATION_SCAN` (VALID/INVALID), `MULTI_TRANSLATION_RESIDUAL_SCAN`.
### Zināmās problēmas

Tikai reāli neatrisinātais. Ja nav: `Nav zināmu neatrisinātu problēmu.`

------------------------------------------------------------------------

# 15. AĢENTA DARBA LĪGUMS

Katram Cursor/agent uzdevumam sākumā jāizlasa šis dokuments. Aģents
nedrīkst izveidot savu alternatīvu metodiku.

Minimālā uzdevuma galvene:

``` text
AUTHORITATIVE STANDARD:
PROJECT_LANGUAGE_MASTER_STANDARD.md

Pirms darba izlasi visu MASTER dokumentu.

LANGUAGE/DATASET: <...>
STAGE: CREATE | AUDIT | OWNER-REVIEW | COPY-ONLY-REPAIR | REGRESSION | CLOSURE
DE = STRICT READ-ONLY
LV MASTER = READ-ONLY
OTHER LANGUAGES = READ-ONLY

Strādā tikai noteiktajā STAGE.
Neizveido paralēlu workflow.
Pirms darba pārbaudi aktuālo origin/main un fiksē MAIN_BASE_SHA.

AUDIT STAGE OBLIGĀTS:
ja findings > 0, pirms AUDIT stage pabeigšanas izveido, commit un push:
- reports/<scope>-owner-view.md
- reports/<scope>-owner-decisions.md
- reports/<scope>-owner-review-GITHUB.md
```

Gala atskaitē obligāti:

``` text
MASTER STANDARD: PROJECT_LANGUAGE_MASTER_STANDARD.md
MASTER VERSION: 1.6
STANDARD LOADED: PASS
MAIN_BASE_SHA: <sha>
WORK_BRANCH: <branch>
SCOPE: <scope>
ORIGIN_MAIN_SHA: <sha>
DATASET_PRODUCTION_SHA/BLOB: <sha>
BASELINE STATUS: <status>
DE READ-ONLY: PASS/FAIL
LV MASTER READ-ONLY: PASS/FAIL
OTHER LANGUAGES READ-ONLY: PASS/FAIL
UNEXPECTED CHANGES: 0/<count>
STAGE RESULT: PASS / NEEDS OWNER REVIEW / BLOCKED
```

## 15.1. Agent non-bypass contract

Aģents nedrīkst:

1. apiet baseline STOP gate;
2. izmantot `--force-baseline` vai ekvivalentu production auditam;
3. auditēt no neautoritatīva repair/audit branch;
4. ignorēt neintegrētu OWNER-approved production;
5. ignorēt OWNER history;
6. atkārtoti atvērt OWNER decision bez `REOPEN_JUSTIFICATION`;
7. ģenerēt repair backlog no `DIAGNOSTIC_ONLY` audita;
8. salīdzināt finding counts starp dažādiem production blobs kā vienas
   kvalitātes līnijas metriku;
9. deklarēt `FINAL_CLOSED` pirms main integration;
10. izmantot branch PASS kā aizstājēju main verification.

Ja kāds no šiem nosacījumiem pārkāpts:

`AUDIT_VALIDITY = INVALID`

un audit findings nedrīkst izmantot repair.

## 15.2 Agent discovery non-bypass contract

Aģentam aizliegts:

1. interpretēt "first seen this run" kā "new production error";
2. veidot OWNER backlog bez RAW audit history pārbaudes;
3. ignorēt semantic overlap ar iepriekšējiem findingiem;
4. ignorēt unchanged production vērtību;
5. izmantot 100% object coverage kā discovery completeness pierādījumu;
6. pazaudēt `NEEDS_SOURCE_REVIEW` starp auditiem;
7. pārvērst Luna discovery drift par repair backlog;
8. deklarēt production quality regression bez production vai repair delta.

Pārkāpuma gadījumā:

`AUDIT_VALIDITY = INVALID_DISCOVERY_CLASSIFICATION`

## 15.3 AGENT OWNER-ARTIFACT NON-BYPASS CONTRACT

Agentam aizliegts:

1.  beigt auditu pirms OWNER artefaktu ģenerēšanas;
2.  gaidīt lietotāja komandu "sagatavo failus";
3.  prasīt lietotājam augšupielādēt group failus, ja tie jau ir ģenerējami repo;
4.  deklarēt `NEEDS_OWNER_REVIEW` bez GitHub-atveramiem artefaktiem;
5.  ģenerēt tikai group failus bez monolītā VIEW/DECISIONS;
6.  publicēt OWNER artefaktus bez 100% coverage;
7.  publicēt saites uz nepareizu/stale branch;
8.  izmantot lokālu faila esamību kā GitHub publication pierādījumu.

Pārkāpuma gadījumā:

`AUDIT_VALIDITY = INVALID_OWNER_ARTIFACT_WORKFLOW`

------------------------------------------------------------------------

# 16. AIZLIEGUMI

Bez OWNER atļaujas kategoriski aizliegts:

-   mainīt DE, LV MASTER vai citas valodas;
-   mainīt renderer, CSS, UI loģiku, datu arhitektūru, Study layout
    sistēmu vai sectionAccents formātu;
-   pārvietot kartes starp CEFR līmeņiem;
-   veikt cleanup ārpus target;
-   izmantot audita proposal kā automātisku repair;
-   izdomāt trūkstošu OWNER lēmumu;
-   veikt repair audita laikā;
-   pasludināt CLOSED tikai tāpēc, ka apply skripts izpildījās;
-   sākt nākamo posmu no novecojuša branch;
-   uzturēt paralēlas A/B/C "gala" versijas;
-   izmantot atkārtotu neatkarīgu full LLM discovery auditu kā obligātu closure
    skaitītāju uz tā paša production stāvokļa;
-   automātiski pārvērst jaunus LLM findings nemainītos laukos par repair
    regressions vai jaunu repair queue bez 7.7.3 acceptance gate;
-   pasludināt `FINAL_CLOSED`, ja repair/closure nav integrēts un
    verificēts uz `origin/main`;
-   sākt full-discovery auditu ar `BLOCKED_UNMERGED_CLOSURE` vai
    `BLOCKED_BASELINE_MISMATCH` bez delta analīzes;
-   interpretēt globālu `origin/main` SHA maiņu kā dataset baseline
    mismatch bez konkrētā dataseta production blob salīdzinājuma;
-   izmantot `--force-baseline` vai ekvivalentu production auditam (sk.
    §7.9.4);
-   auditēt no neautoritatīva repair/audit/closure branch (sk. §7.9);
-   salīdzināt finding counts starp dažādiem production blobs bez
    lineage verifikācijas (sk. §7.9.3);
-   ignorēt OWNER history pirms full discovery (sk. §11.8);
-   deklarēt `FINAL_CLOSED` pirms main integration un post-merge blob
    verification (sk. §12.8).

------------------------------------------------------------------------

# 17. VIENĪGAIS DARBA PROCESS

``` text
1. SYNC origin/main + BASELINE GATE (§7.8)
        ↓
2. CREATE / CURRENT DATA STATE
        ↓
3. FULL READ-ONLY DISCOVERY AUDIT (100%)
   + freeze DATASET_PRODUCTION_SHA
   + audit reproducibility metadata
   + baseline header (§7.8.3)
   + RAW audit history load (§7.12)
   + discovery reproducibility metrics (§7.14)
        ↓
4. DISCOVERY HISTORY VALIDATION + ROOT-CAUSE CLASSIFICATION (§7.11–§7.19)
        ↓
5. OWNER-PREP + FREEZE FINDING BASELINE (§7.18 PRE_BACKLOG_HISTORY_GATE)
        ↓
5. OWNER REVIEW
        ↓
6. ONE AUTHORITATIVE OWNER DECISIONS FILE
        ↓
7. COPY-ONLY REPAIR + CURRENT GUARDS
        ↓
8. TARGETED REGRESSION PRET OWNER BASELINE
        ↓
9. DETERMINISTIC FULL GATES
        ↓
10. FULL READ-ONLY DISCOVERY RE-AUDIT (100%)
        ↓
11. NEW FINDINGS VALIDATION / STABILITY CLASSIFICATION (§7.11–§7.19)
        ↓
12. NEW_VALIDATED_REAL_FINDINGS > 0 ?
      YES → OWNER REVIEW → COPY-ONLY REPAIR → REGRESSION → STEP 9/10
      NO  → STEP 13
        ↓
13. CLOSURE PASS → CLOSED_PENDING_MAIN_INTEGRATION
        ↓
14. MERGE TO origin/main
        ↓
15. POST_MERGE_MAIN_VERIFICATION (§12.6)
   + OWNER targets verified on main (§12.7)
        ↓
16. FINAL_CLOSED + authoritative closure baseline fixed
        ↓
17. NEXT DATASET / NEXT AUDIT STARTS FROM VERIFIED origin/main
```

Ja jebkurā punktā ir FAIL/BLOCKED, process nelec uz priekšu. Vispirms
novērš konkrēto blocker.

## 17.1. Authoritative audit cycle

Pareizais pilnais cikls:

``` text
AUTHORITATIVE origin/main
        ↓
BASELINE GATE (§7.8–§7.9)
        ↓
OWNER HISTORY LOAD (§11.6, §11.8)
        ↓
RAW AUDIT HISTORY LOAD (§7.12)
        ↓
FULL_DISCOVERY
        ↓
DISCOVERY HISTORY VALIDATION (§7.14, §7.18)
        ↓
VALIDATED FINDINGS / OWNER BACKLOG FINAL (§11.9)
        ↓
OWNER DECISIONS
        ↓
COPY-ONLY REPAIR
        ↓
TARGETED REGRESSION
        ↓
CLOSURE
        ↓
MAIN INTEGRATION
        ↓
POST-MERGE VERIFICATION (§12.6, §12.8)
        ↓
FINAL_CLOSED
        ↓
NEW FULL_DISCOVERY
```

Katrs jaunais `FULL_DISCOVERY` sākas no verificēta `origin/main`, nevis
no iepriekšējā darba branch.

## 17.2 AUTHORITATIVE AUDIT ENDING

```text
FULL_DISCOVERY
        ↓
deterministic + linguistic validation
        ↓
discovery/history classification
        ↓
OWNER_BACKLOG_FINAL
        ↓
if OWNER_BACKLOG_FINAL = 0:
    closure path

if OWNER_BACKLOG_FINAL > 0:
    AUTO GENERATE OWNER VIEW
        ↓
    AUTO GENERATE OWNER DECISIONS
        ↓
    AUTO GENERATE GitHub INDEX
        ↓
    100% COVERAGE CHECK
        ↓
    COMMIT
        ↓
    PUSH
        ↓
    VERIFY GITHUB LINKS
        ↓
    NEEDS_OWNER_REVIEW
```

No manual OWNER artifact preparation step exists.

------------------------------------------------------------------------

# 18. KVALITĀTES FILOZOFIJA

Mērķis nav radīt pēc iespējas vairāk findings vai procesa dokumentu.

Mērķis ir:

**kļūda → OWNER apstiprināts labojums → precīzs COPY-ONLY apply → 100%
pārbaude → gatavs rezultāts.**

Vienkāršība ir priekšrocība, ja tā nesamazina kvalitāti. Papildu batch,
branch, report vai starpposmu drīkst ieviest tikai tad, ja tam ir
konkrēts tehnisks vai kvalitātes iemesls.

------------------------------------------------------------------------

# 19. MASTER PRECEDENCE

No šīs versijas projekta valodu darbā
**`PROJECT_LANGUAGE_MASTER_STANDARD.md` ir vienīgais operatīvais
standarts**.

Vecie standarti ir uzskatāmi par konsolidētiem šajā dokumentā.

Ja nākotnē rodas jauns projekta noteikums: 1. vispirms atjaunina šo
MASTER dokumentu; 2. palielina versiju; 3. tikai tad izmanto jauno
noteikumu turpmākajos darbos.

Nedrīkst veidot vēl vienu paralēlu "papildu standartu", kas sāk konkurēt
ar MASTER.

------------------------------------------------------------------------

# 20. VERSION CHANGELOG

## Version 1.17

Atsevišķs UI/i18n/vizuālā runtime audita standarts — deterministisks UI
atslēgu un skatu inventārs; UI tekstu, fallback, accessibility un shared-key
kontrole; obligāts desktop/mobile runtime audits; maksimums 10 pilni UI skati
vienā batch; stāvokļu, interakciju, console, overflow un vizuālās paritātes
pārbaude; OWNER pierādījumi un pilni UI closure vārti.

Pievienots:

- §7.121–§7.152 UI / I18N / VISUAL RUNTIME AUDIT STANDARD;
- §6 atsauce uz UI/i18n un vizuālo runtime auditu (§7.121–§7.152);
- divi obligātie slāņi: `UI_I18N_AUDIT` un `VISUAL_RUNTIME_AUDIT`;
- deterministisks UI atslēgu inventārs un atslēgu paritāte;
- fallback, shared UI key un lingvistiskā UI tekstu kontrole;
- pieejamības tekstu audits (`aria-label`, `title`, `alt`, u.c.);
- deterministisks vizuālo skatu inventārs un skatu klasifikācija;
- obligātie viewport: **DESKTOP** un **MOBILE**;
- vizuālā batch lielums: maksimums **10 pilni UI skati**;
- UI stāvokļu, teksta pārplūdes un funkcionālās runtime kontrole;
- valodas maiņas, kartīšu un Kurss runtime kontrole;
- console un resursu kļūdu reģistrācija;
- vizuālā findinga struktūra un pre-finding validācija;
- UI OWNER vēstures aizsardzība, pierādījuma faili, COPY-ONLY apply;
- targeted regression un pilns post-repair UI audits;
- UI/i18n un vizuālā runtime gala vārti;
- UI closure vārti (`UI_VISUAL_CLOSURE_BLOCKED`).

**FINAL v1.17 RULE:** UI audits nav pabeigts bez abiem slāņiem — UI/i18n
atslēgu audits un faktiskais desktop/mobile runtime audits; closure pieļauts
tikai ar pierādītu 100% valodu, skatu, viewport un UI atslēgu pārklājumu
plus `UI_I18N_AUDIT = PASS`, `VISUAL_RUNTIME_AUDIT = PASS`, `VISUAL_PARITY =
PASS` un `DE_UNAUTHORIZED_CHANGES = 0`.

Version 1.16 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.17.

## Version 1.16

Atsevišķs Verbs/Verben pilnā audita standarts — deterministisks verbu, formu
un lauku inventārs; obligāti 10 pilni verba objekti vienā Luna batch; visu
piecu formu kopīga pārbaude; formu un objekta līmeņa rezultāti; stipro, vājo,
jaukto, modālo, refleksīvo un priedēkļu verbu kontrole; Hilfsverb, Partizip
II, Präteritum un 3. Person Präsens validācija; OWNER vēstures aizsardzība
un pilni closure vārti.

Pievienots:

- §7.91–§7.120 VERBS / VERBEN FULL AUDIT STANDARD;
- §2.1 atsauce uz Verbs pilno auditu (§7.91–§7.120);
- darbības vārda objekts kā nedalāma audita vienība;
- deterministisks verbu inventārs un verb/form/field atslēgas;
- obligātais batch lielums: maksimums **10 pilni verba objekti** vienā Luna
  batch;
- verbu klasifikācija (WEAK/STRONG/MIXED/MODAL/AUXILIARY/REFLEXIVE/SEPARABLE/
  INSEPARABLE/IRREGULAR);
- formu līmeņa `PASS`/`FINDING`/`NEEDS_SOURCE_REVIEW`;
- objekta līmeņa `VERB_OBJECT_CONSISTENT`/`VERB_OBJECT_INCONSISTENT`;
- batch pilnības kontrole (verb/form/field metrikas);
- Infinitiv, 3. Person Präsens, Präteritum, Partizip II, Hilfsverb audits;
- atdalāmo/neatdalāmo priedēkļu, refleksīvo un modālo verbu audits;
- mērķvalodas nozīmes un piemēru/piezīmju audits;
- dublikātu un sajauktu objektu kontrole;
- pre-finding validācija un OWNER vēstures aizsardzība;
- Verbu OWNER backlog, pierādījuma faili, COPY-ONLY apply;
- targeted regression un pilns post-repair audits;
- Verbu gala audita un closure vārti (`VERBS_CLOSURE_BLOCKED`).

**FINAL v1.16 RULE:** Verbs/Verben pilns audits nav aizstājams ar A1–C2
kartīšu, Study, Sentences, Kurss vai infinitīvu/skaita paritātes pārbaudi;
Luna batch nedrīkst pārsniegt 10 pilnus verba objektus un nedrīkst sadalīt
vienu verba formu pa batch; closure pieļauts tikai ar pierādītu 100% verbu,
formu un lauku pārklājumu plus `VERB_OBJECT_CONSISTENCY = 100%` un
`DE_UNAUTHORIZED_CHANGES = 0`.

Version 1.15 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.16.

## Version 1.15

Atsevišķs Sentences/Sätze pilnā audita standarts — deterministisks teikumu
un lauku inventārs; obligāti 25 teikumi vienā Luna batch; lauku līmeņa
`PASS`/`FINDING`/`NEEDS_SOURCE_REVIEW`; semantikas, gramatikas, ortogrāfijas
un dabiskuma slāņi; blakus konteksta kontrole; dublikātu, audio, ID/secības
un OWNER vēstures pārbaude; targeted regression un pilns post-repair audits.

Pievienots:

- §7.65–§7.90 SENTENCES / SÄTZE FULL AUDIT STANDARD;
- §2.1 atsauce uz Teikumu pilno auditu (§7.65–§7.90);
- deterministisks teikumu inventārs un stabila `Sentence ID` atslēga;
- obligātais batch lielums: maksimums **25 teikumi** vienā Luna batch;
- batch konteksts (previous/next teikumi kā read-only konteksts);
- lauku līmeņa batch completeness metrikas;
- semantikas, gramatikas, ortogrāfijas un dabiskuma audits;
- dialogu un saistīto teikumu kontrole;
- viena rinda = viens `(Sentence ID, Field/path)` findings;
- dublikātu, svešvalodu atlikumu un audio mapping audits;
- ID/secības un primary/`www` spoguļa kontrole;
- pre-finding validācija un OWNER vēstures aizsardzība;
- Teikumu OWNER backlog, pierādījuma faili, COPY-ONLY apply;
- targeted regression un pilns post-repair audits;
- Teikumu gala audita un closure vārti (`SENTENCES_CLOSURE_BLOCKED`).

**FINAL v1.15 RULE:** Teikumu pilns audits nav aizstājams ar A1–C2 kartīšu,
Study, Kurss vai vienkāršu ID/skaita paritātes pārbaudi; Luna batch
nedrīkst pārsniegt 25 auditējamos teikumus; closure pieļauts tikai ar
pierādītu 100% teikumu un lauku pārklājumu plus `DE_UNAUTHORIZED_CHANGES = 0`,
`PRIMARY_WWW_MIRROR = PASS`, `ID_ORDER = PASS` un `AUDIO_MAPPING = PASS`.

Version 1.14 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.15.

## Version 1.14

Atsevišķs Kurss/Lessons pilnā audita standarts — deterministisks lekciju,
sadaļu, objektu un lauku inventārs; dialogu un jautājumu–atbilžu konteksta
audits; L1–6/L7/L8–21 atsevišķa kontrole; shared UI mērķu konfliktu
noteikšana un deduplikācija; OWNER pierādījuma faili; HTML, vizuālās
paritātes un Kurss closure vārti.

Pievienots:

- §7.40–§7.64 KURSS / LESSONS FULL AUDIT STANDARD;
- §5 atsauce uz Kurss pilno auditu (§7.40–§7.64);
- deterministisks Kurss inventārs un objektu tipi;
- obligātais Kurss pārklājums (`LESSON_COVERAGE` ≠ pilns audits);
- Kurss batch sadalījums un lauku līmeņa rezultāti;
- dialogu, jautājumu–atbilžu un training card konteksta audits;
- personvārdu un personu lomu audits;
- gramatikas, info un vingrinājumu audits;
- koplietoto UI atslēgu audits un `SHARED_TARGET_CONFLICT`;
- shared target deduplikācija pirms COPY-ONLY apply;
- Kurss pre-finding validācija;
- trīs Kurss audita slāņi;
- L1–6, L7 un L8–21 atsevišķā kontrole;
- primary/`www` spoguļa, HTML un vizuālās paritātes vārti;
- Kurss OWNER backlog, pierādījuma faili un post-repair audits;
- Kurss closure vārti (`KURSS_CLOSURE_BLOCKED`).

**FINAL v1.14 RULE:** Kurss pilns audits nav aizstājams ar A1–C2 kartīšu,
Study vai Card ID paritātes pārbaudi; closure pieļauts tikai ar pierādītu
100% lekciju, sadaļu, objektu un lauku pārklājumu plus `PRIMARY_WWW_MIRROR`,
`HTML_STRUCTURE`, `VISUAL_PARITY` un `DE_UNAUTHORIZED_CHANGES = 0`.

Version 1.13 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.14.

## Version 1.13

Pilna audita metodika — deterministisks lauku inventārs, lauku līmeņa
`PASS`/`FINDING`/`NEEDS_SOURCE_REVIEW`, drošie Luna batch limiti 25/10/5,
trīs audita slāņi, pre-finding Card ID/Field/CURRENT validācija, OWNER
`FALSE_POSITIVE` vēstures aizsardzība un obligāts `FIELD_COVERAGE`
closure vārts.

Pievienots:

- §7.26 pilna audita definīcija (`CARD_COVERAGE` ≠ `FIELD_COVERAGE`);
- §7.27 deterministisks lauku inventārs un `DUPLICATE_FIELD_KEY`;
- §7.28 precīzs `Card ID` / `Field/path`;
- §7.29 pre-finding validācija (`INVALID_*`, `TARGET_OBJECT_MISMATCH`);
- §7.30 lauku līmeņa Luna atbilde un batch completeness;
- §7.31 obligāta audita sadalīšana (25/10/5);
- §7.32 parasto kartīšu lauku audits;
- §7.33 Study kartīšu lauku audits;
- §7.34 `sectionAccents` audits;
- §7.35 trīs audita slāņi;
- §7.36 findingu kvalitātes vārti (`AUDIT_ARTIFACTS_BLOCKED`);
- §7.37 obligātie gala audita rādītāji;
- §7.38 OWNER backlog apply-gatavības noteikumi;
- §7.39 audita pabeigtības interpretācija;
- §11.16 post-repair audits ar lauku inventāru;
- §11.17 OWNER vēstures aizsardzība;
- §11.18 v1.13 field-level closure metrics.

**FINAL v1.13 RULE:** `100% audit complete` nozīmē pierādītu kartīšu **un**
lauku pārklājumu ar precīzu `Card ID`, `Field/path` un `CURRENT`; findings ar
nepareizu mērķi nedrīkst nonākt apply-gatavā OWNER backlog.

Version 1.12 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.13.

## Version 1.12

Universal single main translation — viena kartīte = viena galvenā nozīme = viens
galvenais tulkojums visiem kartīšu tipiem (ordinary, minimalStudy, standardStudy,
comparisonStudy).

Pievienots:

- §1.1 universāls `MAIN_TRANSLATION_COUNT = 1` visiem renderer galvenajiem laukiem;
- `MAIN_TRANSLATION_FIELD_INVENTORY` ar 100% coverage prasību;
- pilns multi-translation scan visiem kartīšu tipiem un laukiem;
- Study exception precizēts (papildu nozīmes tikai skaidrojošajā saturā);
- §1.1.13 INVALID AUDIT GATE; §1.1.14 TOOLING_STANDARD_MISMATCH;
- §10.1 §13 regression fixtures (Cases A–E);
- §11.15 v1.12 closure metrics.

**FINAL v1.12 RULE:** Viena kartīte = viena galvenā mācāmā nozīme = viens
galvenais tulkojums. Study drīkst izskaidrot papildu nozīmes, bet galvenais
tulkojums vienmēr paliek viens. Gala izvēle pieder tikai OWNER.

Version 1.11 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.12.
## Version 1.11

Multiple translation OWNER hard gate — parastai flashcard tieši viens
galvenais tulkojums; vairāku tulkojumu reducēšana tikai ar OWNER lēmumu.

Pievienots:

- §1.1.1–§1.1.9 OWNER hard gate papildinājumi §1.1 (v1.10 §1.1 saglabāts);
- `MULTIPLE_TRANSLATIONS_DETECTED` → `OWNER_DECISION_REQUIRED` hard gate;
- §7.25 `MULTI_TRANSLATION_SCAN`;
- §10.1 multiple translation OWNER lock regression;
- §11.13 `MULTI_TRANSLATION_RESIDUAL_SCAN`;
- §11.14 v1.11 closure metrics un `FINAL_CLOSED_ON_MAIN = BLOCKED`;
- §13 un §14 papildinājumi multi-translation closure metrikām.

Šis PATCH nemaina v1.10 deterministic completeness, Kurss
runtime/browser, residual-scan vai closure prasības. Tas tās papildina.

**FINAL v1.11 RULE:** Parastai flashcard ir tieši viens galvenais
tulkojums. Vairāku tulkojumu gadījumā tooling drīkst atrast, analizēt
un rekomendēt, bet nedrīkst izvēlēties OWNER vietā. Jebkura vairāku
tulkojumu reducēšana līdz vienam ir OWNER lēmums un bez precīza OWNER
NEW production izmaiņa ir aizliegta.

Version 1.10 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.11.
## Version 1.10

Deterministic completeness, Kurss live/runtime gates, legacyHtml granular
scan, flashcard single-meaning rule, semantic ≠ deterministic closure
model.

Pievienots / atjaunināts:

- §1.1 Learning First — viena galvenā nozīme; multi-meaning separator
  scan;
- §5.3 Kurss LIVE / RUNTIME kvalitātes vārti;
- §5.4 `legacyHtml` pilna teksta deterministiska pārbaude;
- §7.2 divu slāņu coverage modelis (semantic vs deterministic);
- §7.2.1 deterministic residual scan pēc remonta;
- §7.19 semantic ≠ deterministic completeness model;
- §10 regression papildinājumi (16–24) un targeted ≠ full residual rule;
- §11.11 DETERMINISTIC COMPLETENESS — FINAL CLOSURE HARD GATE;
- §11.12 KURSS LIVE / BROWSER CLOSURE HARD GATE;
- §14 obligātas v1.10 closure metrikas;
- `REOPEN_REQUIRED` verdict noteikumi; `TOOLING_STANDARD_MISMATCH`.

Version 1.9 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.10.

## Version 1.9

Automatic OWNER artifact publication gate.

Pievienots:

- §7.20–§7.24 automatic OWNER artifact generation, same-run requirement,
  orchestrator hard wiring, monolithic artifact rule, atomic completion contract;
- §7.21 automatic Git publication un GitHub link verification;
- §7.22 `BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED`;
- §11.10 OWNER PREP is not a separate user task;
- §15.3 Agent OWNER-artifact non-bypass contract;
- §17.2 Authoritative audit ending ar auto OWNER publication posmu;
- prohibition on asking user to trigger OWNER file generation;
- `INVALID_OWNER_ARTIFACT_WORKFLOW`.

Version 1.8 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.9.

## Version 1.8

Audit discovery stability and semantic finding registry — balstīts uz
atkārtota FULL_DISCOVERY cikla diagnostiku, kur `GENUINELY_NEW = 0` uz
nemainīga production un `AUDIT_DISCOVERY_NON_REPRODUCIBILITY = YES`.

Pievienots:

- §7.11 NEW-TO-AUDIT ≠ NEW-PRODUCTION-ERROR;
- §7.11.1 Obligātās discovery root-cause kategorijas;
- §7.12 RAW audit history gate un RAW candidate persistence;
- §7.13 Semantic finding registry un path-family deduplication;
- §7.14 Audit discovery reproducibility gate un discovery churn metrics;
- §7.14.1 Discovery churn stop rule;
- §7.15 Coverage disclaimer (`OBJECT_COVERAGE` vs `DISCOVERY_COMPLETENESS`);
- §7.16 PASS ≠ absolute correctness;
- §7.17 NEEDS_SOURCE_REVIEW carry-forward;
- §7.18 Pre-backlog history gate;
- §7.19 Audit completeness model;
- §11.9 OWNER backlog validity metrics;
- §15.2 Agent discovery non-bypass contract;
- §7.8.3 baseline header papildinājumi: RAW history gate, discovery churn,
  non-reproducibility;
- §17 workflow papildinājumi: discovery validation pirms OWNER-PREP.

Version 1.7 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.8.

## Version 1.7

OWNER review artifacts — obligāti pēc audita un 100% coverage gate.

Pievienots:

- §7.10 OWNER REVIEW ARTIFACTS — OBLIGĀTI PĒC AUDITA;
- §7.10.1 Obligātie faili ar `<language>-<scope>` nosaukumu konvenciju un
  GitHub-atveramām saitēm;
- §7.10.2 OWNER VIEW saturs — pilns validated findingu kopums, aizliegumi
  atlasīt/selektīvi izlaist findingus;
- §7.10.3 OWNER DECISIONS saturs — identisks findingu kopums kā VIEW;
  `PROPOSED_*` nedrīkst automātiski kļūt par OWNER `NEW`;
- §7.10.4 100% coverage gate ar `BLOCKED: OWNER-PREP COVERAGE FAIL`;
- §7.6 atsauce uz §7.10 pilnajām prasībām.

Version 1.6 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.7.

## Version 1.6

Authoritative production line, baseline hard gates, OWNER history hard
gate un mandatory repair → main → re-audit secība.

Pievienots:

- §7.9 Authoritative production line — viens autoritatīvs production
  avots: `origin/main` + pēdējā `FINAL_CLOSED` metadata;
- §7.9.1 Single authoritative dataset state ar obligātajiem SHA/blob
  laukiem;
- §7.9.2 Parallel production branch detection ar
  `BLOCKED_MULTIPLE_PRODUCTION_BASELINES`;
- §7.9.3 No A/B branch auditing — audit delta vispirms ar production
  delta;
- §7.9.4 Force-baseline prohibition — production audit nedrīkst apiet STOP
  gate; override rezultāts tikai `DIAGNOSTIC_ONLY`;
- §11.8 OWNER decision persistence re-audit hard gate ar
  `OWNER_HISTORY_GATE = FAIL`;
- §11.8.1–§11.8.5 OWNER-repaired field recognition, history coverage
  metrikas un `REPAIR_REGRESSION` provenance;
- §12.8 Mandatory repair → main → re-audit sequence;
- §12.8.2 Post-merge blob verification ar
  `BLOCKED_POST_MERGE_PRODUCTION_MISMATCH`;
- §15.1 Agent non-bypass contract ar `AUDIT_VALIDITY = INVALID`;
- §17.1 Authoritative audit cycle;
- baseline header papildinājumi ar OWNER history coverage laukiem;
- `BLOCKED_MULTIPLE_PRODUCTION_BASELINES` baseline status.

Version 1.5 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.6.

## Version 1.5

Main integration, closure persistence un audit baseline gate.

Pievienots:

- `CLOSED_PENDING_MAIN_INTEGRATION` stāvoklis pirms `FINAL_CLOSED`;
- `BRANCH PASS ≠ FINAL CLOSED`; `MERGED + VERIFIED ON MAIN = PERSISTED CLOSURE`;
- obligāta repair/closure integrācija uz `origin/main`;
- `POST_MERGE_MAIN_VERIFICATION` ar `MAIN_BEFORE_SHA`, `MERGE_SHA`,
  `MAIN_AFTER_SHA` un production blob salīdzinājumu;
- `BLOCKED_MAIN_INTEGRATION_MISMATCH`;
- OWNER target verification uz faktiskā `origin/main` pēc merge;
- next-audit baseline gate (`§7.8`) ar `BLOCKED_UNMERGED_CLOSURE` un
  `BLOCKED_BASELINE_MISMATCH`;
- dataset production/blob identitāte atsevišķi no globālā main SHA;
- `MAIN_ADVANCED_EXPECTED` — main SHA maiņa citu datasetu dēļ nav
  automātiski blocker;
- baseline mismatch STOP rule un delta klasifikācija;
- pilna `FINAL_CLOSED` definīcija ar 11 nosacījumiem;
- obligāta workflow stāvokļu secība līdz `FINAL_CLOSED`;
- historical OWNER traceability ar main integration commit un
  post-merge verification;
- obligātais audita atskaites baseline header;
- vispārināta root-cause klase: neintegrēts repair/closure branch;
- §11.6 OWNER persistence (iepriekš dublētais §11.5 numurs labots).

Version 1.4 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.5.

## Version 1.4

OWNER decision persistence papildinājums.

Pievienots:

- OWNER apstiprināto repair vērtību pastāvīgs audit trail;
- obligāta OWNER history pārbaude nākamajos full audit/re-audit;
- `OWNER_DECISION_CONFIRMED`;
- `OWNER_DECISION_REOPEN_REQUIRED`;
- obligāts `REOPEN_JUSTIFICATION`;
- aizliegums atkārtoti virzīt OWNER-apstiprinātu lauku uz `LABOT` tikai
  cita LLM formulējuma/stila preferences dēļ;
- jaunākā OWNER lēmuma precedence vienam `(object/card ID, field/path)`;
- post-repair full re-audit tagad ir OWNER-history-aware;
- closure metrikas OWNER-repaired laukiem.

Version 1.3 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.4.

## Version 1.3

Closure completeness papildinājums: pēc katra OWNER repair pilns 100% LLM discovery re-audits ir obligāts. Closure sasniedz, kad pēdējā pilnajā re-auditā `NEW_VALIDATED_REAL_FINDINGS = 0`, nevis obligāti `RAW_FINDINGS = 0`. Jauni findings pirms repair obligāti iziet stability/acceptance klasifikāciju.

## Version 1.2

Audit stability papildinājums, balstīts uz ET–DE A1 reproducējamības
diagnostiku uz identiska production stāvokļa.

Pievienots:

- `AUDIT BASELINE / FINDING STABILITY / REPRODUCIBILITY`;
- audit run reproducibility metadata;
- frozen finding baseline;
- finding identity / carry-forward noteikumi;
- aizliegums closure laikā bezgalīgi atkārtot neatkarīgu full LLM discovery;
- new-finding acceptance gate;
- Git-pierādījuma prasība `REPAIR_REGRESSION`;
- nemainītu lauku LLM-only findingu atsevišķa klasifikācija;
- LOW/style findingu objektīvā standarta/OWNER gate;
- audit-instability root-cause diagnostic;
- closure KPI nodalīšana no LLM finding count;
- noklusētais closure ceļš: targeted regression → deterministic full gates →
  limited new-defect check → closure.

Version 1.1 prasības paliek spēkā, ja tās nav tieši precizētas ar v1.2.

------------------------------------------------------------------------

## 18. SAISTOŠAIS DARBA LĪGUMS UN FĀZE 0/1 SPEC (Crowdin / visu valodu saturs)

Papildus šim MASTER dokumentam obligāti piemērojami:

1. **`MASTER_1.12_BINDING_WORK_AGREEMENT.md`** — saistošais izpildes līgums
   visiem A1–C2, Teikumi, Verbi, Kurss un Crowdin darbiem; konfliktu
   protokols (pretruna → STOP → OWNER apstiprinājums). Binding Work Agreement
   ir **autoritatīvs izpildes secībai un konfliktu protokolam**.
2. **`PHASE_0_CROWDIN_DISCOVERY_SPEC.md`** — Fāze 0 tehniskā specifikācija
   (bridge atslēgu shēma, discovery orchestrator, READ-ONLY, bez apply).
3. **`PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`** — Fāze 1 pilna READ-ONLY
   discovery specifikācija (320 scope, F1-1…F1-9, F0-COMP-1…15 pirms izpildes).

Ja šo dokumentu prasības ir pretrunā ar iepriekšējām MASTER sadaļām, spēkā
ir šis MASTER dokuments. Saistītie dokumenti precizē **procesa secību un
Crowdin integrāciju**, nevis atceļ §1.1, §7, §9, §11 vai §17 prasības.


## MASTER 1.17 --- END
