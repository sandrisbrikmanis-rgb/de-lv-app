# PROJECT LANGUAGE MASTER STANDARD

**Versija:** 1.6\
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

## 1.1. Learning First

Šī lietotne nav vārdnīca. Galvenajai flashkartei jābūt ātri uztveramai.

-   priekšpusē rāda vienu galveno vai dažas praktiski svarīgākās
    nozīmes;
-   papildu nozīmes, konstrukcijas un nianses skaidro Study saturā;
-   virsrakstu nedrīkst pārvērst vārdnīcas ierakstā;
-   vairākas galvenās nozīmes atdala tikai ar `•`;
-   semikoli nozīmju uzskaitījumos nav atļauti.

Atšķirība starp flashkartes `{lang}` un `study.translation` pati par
sevi nav kļūda. Kļūda ir tikai tad, ja tulkojums ir nepareizs, sajaukti
vācu vārdi/konstrukcijas vai saturs ir savstarpēji pretrunīgs.

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

------------------------------------------------------------------------

# 6. UI / UX

Visām UI virknēm jābūt pilnībā lokalizētām. Nedrīkst būt fallback uz LV
produkcijā, hardcoded konkrētas valodas tekstu kopīgajā renderer,
nekonsekventu terminu, valodu sajaukuma, tukšu vai key-name virkņu
lietotāja interfeisā.

Kopīgais renderer, CSS, spacing, fonti, ikonas, krāsas un responsive
uzvedība netiek lokalizēta.

------------------------------------------------------------------------

# 7. PILNA AUDITA STANDARTS

## 7.1. Audits ir READ-ONLY

Audita laikā production dati netiek mainīti. Audita rezultāts =
findings + pierādījums, nevis remonts.

## 7.2. Coverage

Pilnam valodas auditam jāpārbauda 100% faktiskā tvēruma: A1--C2,
sentences, verbs, Kurss, training, UI, Study, comparisonStudy,
sectionAccents, manifests/routing, data↔www mirror, sintakse,
ID/order/parity, foreign remnants, placeholders, mojibake,
terminoloģija, gramatika, pareizrakstība, semantika un dabiskums. Auditā
skaidri jānorāda `checked / total`.

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
15. unexpected production changes = 0.

Ja regression atrod kļūdu, dataset nav CLOSED.

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
- READ-ONLY integritāte = PASS.

Raw LLM finding count izmanto discovery uzskaitei, nevis kā vienīgo kvalitātes progresijas metriku.

## 11.5. Re-audit reproducibility

Katram atkārtotam full discovery re-auditam saglabā §7.7 reproducibility metadata un salīdzina ar iepriekšējo run. Ja production SHA nav mainījies, bet findingu kopa būtiski svārstās, obligāti veic audit-stability/root-cause klasifikāciju.

Tas **neatceļ** pilna re-audita pienākumu pēc repair; tas novērš LLM noise automātisku pārvēršanu par kļūdām.

------------------------------------------------------------------------

------------------------------------------------------------------------

# 11.6. OWNER DECISION PERSISTENCE / REOPEN RULE

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
-   `OWNER_DECISION_REOPEN_REQUIRED = 0` vai OWNER atrisināts.

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

Requested, applied, already applied, mismatch, skipped, unexpected.

### Validācija

Syntax, parity, mirror, Study design, sectionAccents, Kurss,
engine/i18n, mojibake/remnants, UI smoke un dataset-specifiskie
validator results. Ja pārbaude nav veikta, raksta `NOT RUN`, nevis
pieņem PASS.

### READ-ONLY integritāte

DE changes = 0; LV MASTER changes = 0; other-language unexpected changes
= 0.

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
        ↓
4. OWNER-PREP + FREEZE FINDING BASELINE
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
11. NEW FINDINGS VALIDATION / STABILITY CLASSIFICATION
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
FULL_DISCOVERY
        ↓
VALIDATED FINDINGS
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

## MASTER 1.6 --- END
