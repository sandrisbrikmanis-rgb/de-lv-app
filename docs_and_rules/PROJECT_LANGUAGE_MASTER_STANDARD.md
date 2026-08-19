# PROJECT LANGUAGE MASTER STANDARD

**Versija:** 1.1\
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

`origin/main → darba branch → audits → OWNER review → COPY-ONLY repair → regression → closure → merge uz main`

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

# 11. PILNS POST-REPAIR RE-AUDIT

Targeted regression un pilns re-audits ir divas dažādas lietas. Targeted
regression pierāda OWNER remonta pareizību; full re-audit atkārtoti
pārbauda visu dataset un var atrast iepriekš nepamanītas problēmas.

Ja pilnā re-auditā rodas jauni findings, tos nedrīkst automātiski saukt
par remonta regresiju. Jāpārbauda, vai tie ir īsta regresija, eksistēja
jau iepriekš, radušies no mainītas audita granularitātes vai ir false
positive.

Audita metodikai un severity klasifikācijai jābūt stabilai starp
pre/post audit, lai skaitļi būtu salīdzināmi.

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

## 12.4. Merge secība

`audit/report + OWNER-PREP GitHub package → OWNER decisions → repair → regression/closure → merge → origin/main verification`

Pēc merge fiksē `origin/main` SHA, pārbauda, ka sagaidītais production
saturs tiešām ir main, un nākamais darbs sākas no šī jaunā main.

## 12.5. Branch drift

Ja darba laikā `origin/main` ir mainījies, neizdara aklu merge.
Pārbauda, vai izmaiņas skar to pašu scope; ja skar, reconciliē pret
jauno main un OWNER CURRENT guards pārbauda no jauna.

------------------------------------------------------------------------

# 13. CLOSED DEFINĪCIJA

Dataset drīkst saukt par `OWNER ACCEPTED / CLOSED` tikai tad, ja:

-   audits aptvēris 100% noteikto scope;
-   visi findings ir OWNER-resolved vai skaidri dokumentēti source
    issues;
-   visi `LABOT` piemēroti vai skaidri dokumentēti mismatch;
-   unresolved `PENDING` = 0;
-   reāli unresolved CRITICAL/HIGH/MEDIUM = 0, ja OWNER nav
    apstiprinājis izņēmumu;
-   targeted regression PASS;
-   DE READ-ONLY PASS;
-   LV MASTER READ-ONLY PASS;
-   unexpected changes = 0;
-   syntax, ID/order, mirror un relevant validators PASS;
-   final Git state ir zināms;
-   closure ir integrēts `origin/main` vai skaidri norādīts
    `CLOSED_NEEDS_INTEGRATION`.

`PR created` nav tas pats, kas `CLOSED ON MAIN`.

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
MASTER VERSION: 1.1
STANDARD LOADED: PASS
MAIN_BASE_SHA: <sha>
WORK_BRANCH: <branch>
SCOPE: <scope>
DE READ-ONLY: PASS/FAIL
LV MASTER READ-ONLY: PASS/FAIL
OTHER LANGUAGES READ-ONLY: PASS/FAIL
UNEXPECTED CHANGES: 0/<count>
STAGE RESULT: PASS / NEEDS OWNER REVIEW / BLOCKED
```

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
-   uzturēt paralēlas A/B/C "gala" versijas.

------------------------------------------------------------------------

# 17. VIENĪGAIS DARBA PROCESS

``` text
1. SYNC origin/main
        ↓
2. CREATE / CURRENT DATA STATE
        ↓
3. FULL READ-ONLY AUDIT
        ↓
4. OBLIGĀTA OWNER-PREP GITHUB PAKOTNE
   OWNER VIEW + OWNER DECISIONS + GITHUB INDEX
        ↓
5. OWNER REVIEW
        ↓
6. ONE AUTHORITATIVE OWNER DECISIONS FILE
        ↓
7. COPY-ONLY REPAIR + CURRENT GUARDS
        ↓
8. TARGETED REGRESSION
        ↓
9. FULL RE-AUDIT, JA NEPIECIEŠAMS
        ↓
10. FINAL CLOSURE
        ↓
11. MERGE TO MAIN
        ↓
12. VERIFY origin/main
        ↓
13. NEXT DATASET STARTS FROM NEW origin/main
```

Ja jebkurā punktā ir FAIL/BLOCKED, process nelec uz priekšu. Vispirms
novērš konkrēto blocker.

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

## MASTER 1.1 --- END
