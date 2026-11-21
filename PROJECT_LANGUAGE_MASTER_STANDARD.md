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

Iepriekšējie dokumenti (`docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`,
`STUDY_CARD_RULES.md`, `APP_QUALITY_STANDARD.md`, `COMPARISON_STUDY_RULES.md`,
`UI_UX_VISUAL_COLOR_RULES.md` u.c.) ir **konsolidēti šajā MASTER** (v1.1) un
vairs nav atsevišķi operatīvi standarti. Git vēsturē tie var palikt kā
vēsturiski materiāli. Ja ir pretruna starp tiem un šo MASTER dokumentu, spēkā
ir šis dokuments.

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

## 2.4. `de_article` un `de_plural`

Katram ierakstam, kur LV MASTER satur `de_article` un/vai `de_plural`,
auditējamajā valodā tie ir **obligāti aizpildīti** ar to pašu DE vērtību
(STRICT READ-ONLY). Tukšs lauks, ja LV to satur, ir strukturāla kļūda.

Dokumentētie izņēmumi (tikai ja LV MASTER konkrētajam ierakstam tos
neparedz): darbības vārdi, partikulas, apstākļa vārdi un citi ieraksti,
kur LV etalonā nav `de_article`/`de_plural`. Ja LV etalonā lauks ir ---
auditējamajā valodā tas arī jābūt.

## 2.5. Fallback valodas (RU / PL / UK u.c.)

Kamēr valodai nav pilna `data/{lang}/*.js` komplekta un
`languages/registry.js` rāda `dataStatus: "fallback"` /
`hasStudyData: false`, tā izmanto LV fallback datus. Šim stāvoklim
piemēro **quality gate datu izveides uzdevumam**:

- pilns šī MASTER audits nav piemērojams, kamēr nav faktisko datu failu;
- jaunas valodas izveides posmā jānodrošina, ka fallback netiek uztverts
  par gatavu `{lang}-DE` produkciju;
- pēc datu failu izveides registry statusi jāatjaunina atbilstoši faktam
  (sk. §7.12).

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

Jaunām kartēm un pilnām `standardStudy` kartēm **obligātas pedagoģiskās
sadaļas** (ja LV analogam tās ir): ℹ️ Skaidrojums, ⏳ Piemēri, ⚖️
Salīdzinājums, 💡 Padoms, ❗ Svarīgi. Pirms karti uzskatīt par gatavu:
`examples`, `comparison` (ja attiecas), `tip`, `important` nedrīkst būt
tukši; `sectionAccents` jāeksistē.

**Akuzatīva / gramatikas skaidrojums:** ja vācu piemērā ir specifiska
gramatika (piem., Akuzatīvs pēc *an*, *für*, *durch*), `explanation`
sadaļā obligāti jāpaskaidro šī gramatiskā prasība auditējamajā valodā.

**Flashcard vs Study tulkojums:** atšķirība starp `{lang}` un
`study.translation` pati par sevi nav kļūda (sk. §1.1). Legacy prasība
par mehānisku identitāti nav spēkā.

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

**Obligātās UI sadaļas un badge:** augšā purpura badge `⚖ SALIDZINAJUMA
KARTITE`; liels `title`; īss `lead`; word cards ar ikonu, native label,
DE vārdu, īsu aprakstu un vienu piemēru; ⏳ Piemēri; ⚖ Salīdzinājums; 💡
Padoms; ❗ Svarīgi; 🎯 Tipiskas kļūdas; ⭐ Atceries (ja saturs attiecas).

**comparisonTable — obligātā 6 kolonnu shēma:**

`LV | DE | Galvenā nozīme | Raksturo | Piemērs | Tulkojums`

**Pedagoģiskais etalons:** salīdzinājuma satura dziļumam un kvalitātei
etalons ir `abholen` kartīte. **Aizliegts** grupēt vārdus tikai tāpēc,
ka tie sākas ar vienu burtu (kā nepareizais `anfechten` tips). Salīdzinājumā
drīkst tikai īsti sinonīmi ar nozīmes atšķirībām vai vārdi, ko studenti
reāli jauc. Tabulā nedrīkst dublēt vienu vārdu ar dažādiem tulkojumiem.
Katram salīdzinājuma vārdam obligāts unikāls piemēra teikums ar tulkojumu.
Ja nav ko salīdzināt — izmanto `standardStudy`, nevis tukšu/mākslīgu tabulu.

**Deep-link pārbaude:** pēc izveides pārbauda `?card=compare-*` (un
`?study=...` kur attiecas). Obligāti test piemēri ietver vismaz:
`compare-freundlich-nett-hoeflich-angenehm`, `compare-kennen-wissen`,
`compare-stehen-stellen`, `compare-liegen-legen`, `compare-bringen-holen`
un citus projekta etalonu salīdzinājumus. `standardStudy` var turpināt
izmantot `?card=<de>`.

**Renderer:** izmanto to pašu Study Card sistēmu, highlight funkciju,
krāsu mainīgos un responsive loģiku. Nav atļauts atsevišķs neatkarīgs
comparisonStudy renderer.

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
palīgvārdus, **daļēju sakritību cita vārda iekšpusē** (substring drošība),
DE subtitle, galveno title vai section nosaukumus. **Aizliegts** mehāniski
grupēt/iekrāsot burtu virknes vai daļējas substring sakritības.

## 4.1. Native-language locījumi un formas

Ja native nozīme tekstā parādās vairākās locījumu/formu variantos,
`sectionAccents` jāiekļauj **visas reāli izmantotās formas** (piem.,
`lente`/`lenti`/`lentē`; `doties ceļā`/`dodas ceļā`). Ja tekstā ir
`dodas ceļā`, nepietiek ar akcentu tikai `doties ceļā`.

## 4.2. Highlight blīvums un etalonkartes

Highlight ir mācību metodikas daļa, ne dekorācija. Nedrīkst samazināt
highlight daudzumu minimālisma dēļ. Ja šaubas — izvēlas **vairāk**
kvalitatīvu highlight, nevis mazāk.

Blīvumu salīdzina ar LV etalonkartēm: **`abfahren`**, **`das Band`**,
**`kleiden`**, **`Holz`**, **`dabei`**. Manāmi mazāk highlight nekā LV
analogam ir defekts, nevis apzināts minimālisms.

## 4.3. Krāsu sistēma — nosaukumi un fiksētie HEX

Izmanto tikai projekta esošās krāsu nosaukumus: `blue`, `green`, `yellow`,
`red`, `purple`, `orange`. Krāsas jālieto konsekventi vienas kartītes
ietvaros.

**Study keyword akcenti (sectionAccents / highlight):**

| Nosaukums | HEX |
|-----------|-----|
| blue | `#24A8FF` |
| green | `#35D46A` |
| yellow | `#FFD21F` |
| red | `#FF4D4D` |
| purple | `#B565FF` |
| orange | `#FFB020` |

**Study sadaļu foni (standardStudy vizuālais etalons — `abholen`):**

| Elements | HEX |
|----------|-----|
| Galvenais fons | `#0B1116` |
| Kartītes/bloku fons | `#101820` |
| Skaidrojums / Piemēri akcents | `#3FA7FF` |
| Salīdzinājums akcents | `#B565FF` |
| Padoms akcents | `#FFD34D` |
| Svarīgi akcents | `#FF5B5B` |

**Semantic mapping:** zils — galvenais DE vārds; violets/purpurs — galvenā
native nozīme; zaļš — cilvēki, vietas, DE termini comparison tabulā;
dzeltens — priekšmeti/objekti; sarkans — salīdzināmais vai viegli
jaucamais vārds. Comparison sadaļā DE termini/frāzes — zaļš; native
tulkojumi — purpurs (`#B565FF`). DE apakšvirsrakstam **nekur** nedrīkst
pielietot keyword krāsu.

Fiksētās krāsas failu/renderer līmenī nav maināmas bez atsevišķa OWNER
uzdevuma un MASTER atjaunināšanas.

## 4.4. sectionAccents datu formāts

Nemainīt esošo `sectionAccents` JSON formātu. Jaunām kartītēm izmantot
esošo struktūru, piemēram:

```js
sectionAccents: {
  explanation: {
    de: { blue: [...] },
    lv: { purple: [...] }
  },
  examples: [
    { de: { blue: [...] }, lv: { purple: [...] } }
  ],
  comparison: [
    { word: { blue: [...] }, meaning: { purple: [...] }, example: { green: [...] } }
  ],
  tip: {},
  important: {}
}
```

**Renderer noteikums:** datu objektā `sectionAccents` jābūt pilnībam.
Balti (neizcelti) DE/native vārdi comparison tabulās ir **kritiska
vizuālā kļūda**. Legacy prasība, ka `renderStudyCard()` automātiski
krāso pat bez `sectionAccents`, **nav spēkā** — datiem jābūt pilnīgiem;
renderer/CSS nedrīkst mainīt (sk. §16).

## 4.5. Layout, responsive un vizuālā konsekvence

Sadaļu secība identiska visās valodās: native virsraksts → DE virsraksts
→ ℹ️ Skaidrojums → ⏳ Piemēri → ⚖️ Salīdzinājums → 💡 Padoms → ❗ Svarīgi.

Piemēru tabula: `DE | = | LV`. Salīdzinājuma tabula (standardStudy):
`Vārds | Nozīme | Piemērs`.

Visiem datu failiem (A1–C2, comparisonStudy) **100% vienots** vizuālais
stils un krāsu akcenti visās sadaļās. Fonti, padding, border-radius,
ikonas vizuāli identiski — mainās tikai teksts.

Responsive: desktop līdz 4 kolonnām, tablet 2, mobile 1, **bez
horizontālas overflow** (desktop / tablet / mobile).

**Vizuālā regresija:** katram galvenajam skatam (A1 saraksts,
standardStudy, comparisonStudy, Kurss lekcija, izvēlne) jāuzņem LV un
`{lang}` ekrānuzņēmums blakus un jāsalīdzina **izkārtojums** (ne teksts)
pret LV vizuālo etalonu.

**Diakritikas render tests:** valodai specifiskās rakstzīmes (LT, PL,
RU/UK kirilica u.c.) jāpārbauda, ka renderējas pareizi visos
font/CSS kontekstos.

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

# 6. UI / UX UN APP QUALITY GATES

Visām UI virknēm jābūt pilnībā lokalizētām. Nedrīkst būt fallback uz LV
produkcijā, hardcoded konkrētas valodas tekstu kopīgajā renderer,
nekonsekventu terminu, valodu sajaukuma, tukšu vai key-name virkņu
lietotāja interfeisā.

Kopīgais renderer, CSS, spacing, fonti, ikonas, krāsas un responsive
uzvedība netiek lokalizēta.

## 6.1. Obligātie tehniskie quality gates

Pirms valodu/dataset slēgšanas jāpārbauda:

| Gate | Prasība |
|------|---------|
| **Sintakse** | Visi `.js` datu faili iziet `node --check` pirms un pēc izmaiņām |
| **Runtime** | Lietotne ielādējas bez JS throw/error visā `{lang}` plūsmā |
| **Navigation** | Pilna plūsma no valodas izvēles līdz katrai sadaļai bez dead-end |
| **Renderer** | Flashcard, Study, Kurss, izvēlne renderējas identiski LV struktūrai |
| **Progress** | Sesijas progress/skaitītāji darbojas `{lang}` režīmā |
| **Empty states** | Nav tukšu karšu, bezgalīga loading, tukšu sadaļu bloku |
| **Console** | Browser developer console: **0 JS kļūdas** katrā ekrānā |
| **Responsive** | Desktop / tablet / mobile — bez horizontālas overflow |
| **UI consistency** | Termini, ikonas, spacing, krāsas konsekventi visos līmeņos |
| **Data integrity** | ID unikāli; ierakstu skaits = LV; lauku shēma = LV |
| **Broken links** | Nav bojātu deep-link (`?card=`, Kurss, study) |
| **Localization** | Visas `languages/{lang}/ui.js` `t()` atslēgas aizpildītas |
| **Unexpected fallback** | Produkcijā nav negaidīta LV fallback auditētajā valodā |
| **Mojibake** | Regex meklēšana pēc `Ôîä`, `â€`, `Ã©` tipa artefaktiem |
| **Placeholders** | Nav `"..."`, `"TODO"`, `"TBD"`, tukšu virkņu |
| **Foreign remnants** | Nav svešvalodu/LV atlūzu auditētajā `{lang}` saturā |
| **Audio** | Izrunas/audio funkcijas jāpārbauda neatkarīgi no native valodas |
| **Mirror** | `data/{lang}/` ↔ `www/data/{lang}/` identiski |

**JSON vs JS:** dati ir JavaScript moduļi, ne JSON faili. Valīdums =
sintakses pārbaude (`node --check`), ne atsevišķs JSON parseris.

**ui.js motors:** kopīgajā `ui.js` nedrīkst būt hardcoded konkrētas
valodas teksta tulkojumi — tikai motors un konstantes.

------------------------------------------------------------------------

# 7. PILNA AUDITA STANDARTS

## 7.1. Audits ir READ-ONLY

Audita laikā production dati netiek mainīti. Audita rezultāts =
findings + pierādījums, nevis remonts.

## 7.2. Coverage

Pilnam valodas auditam jāpārbauda 100% faktiskā tvēruma katram gan
`data/{lang}/...`, gan `www/data/{lang}/...` slānī:

| Apgabals | Faili |
|----------|-------|
| Vārdu kartītes A1–C2 | `data/{lang}/a1.js` … `c2.js` |
| Teikumi | `data/{lang}/sentences.js` |
| Darbības vārdi | `data/{lang}/verbs.js` |
| Kurss/Lekcijas | `data/{lang}/courseLessons.js`, `courseTrainingCards.js` |
| Lietvārdu artikuli | `data/{lang}/nounArticles.js` |
| Dialogu ID karte | `data/{lang}/dialogueIdMap.js` |
| UI virknes | `languages/{lang}/ui.js` |
| Manifests/datu ceļi | `languages/{lang}/data/manifest.js`, `languages/registry.js` |
| Kopīgais renderer | `ui.js` (motors, bez valodas specifiska teksta) |
| Vizuālais slānis | `style.css` (kopīgs) |

Strukturāli: ierakstu skaits katrā `{lang}/aX.js` = LV; identiski lauki;
`study.layout` = LV; `sectionAccents` pilnīgums, kur LV tos satur;
unikāls `id`; comparisonStudy `compare-*` prefikss.

Papildus: A1--C2, sentences, verbs, Kurss, training, UI, Study,
comparisonStudy, sectionAccents, manifests/routing, data↔www mirror,
sintakse, ID/order/parity, foreign remnants, placeholders, mojibake,
terminoloģija, gramatika, pareizrakstība, semantika, dabiskums,
ekrānuzņēmumu salīdzinājums, diakritikas render, audio, console,
registry status. Auditā skaidri jānorāda `checked / total`.

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

## 7.6. Obligātā audita posmu secība

Audits jāveic pa posmiem (nevis vienā virspusējā piegājienā):

1. Strukturālais/motora slānis (`ui.js`, maršrutēšana, `manifest.js`) —
   **vienmēr pirmais**.
2. A1–A2 dati.
3. B1–B2 dati.
4. C1–C2 dati.
5. Teikumi + darbības vārdi.
6. Kurss/Lekcijas.
7. Vizuālais salīdzinājums (ekrānuzņēmumi — var paralēli 2.–6.).
8. Native speaker izlase + gala konsolidēts ziņojums.

## 7.7. Audita validatoru / skriptu minimums

Visi skripti pieņem `--lang=<code>`. Kopīgā palīgloģika:
`scripts/lib/audit-common.js`.

| Skripts | Lietojums |
|---------|-----------|
| `scripts/validate-study-design.js` | sectionAccents, layout, `www/` sinhronizācija |
| `scripts/validate-flashcard-routing.js` | `ui.js` motors bez hardcoded citas valodas datiem |
| `scripts/validate-kurss.js` | Kurss struktūra, exercise karšu skaits, LV atlūzas |
| `scripts/smoke-test-ui.js` | End-to-end HTTP/DOM pārbaude |
| `scripts/audit-translations.js` | Semikolu/nesakritības pārbaude, 6 līmeņi |
| `scripts/audit-study-cards.js` | Study datu audits `data/{lang}/*.js` |
| `scripts/audit-language-parity.js` | Ierakstu skaits, lauku shēma, `study.layout` vs LV |
| `scripts/audit-mojibake.js` | Bojātu kodējuma artefaktu meklēšana |

Piemērs: `node scripts/validate-study-design.js --lang=da`

`scripts/validate-lt-highlight-density.js` nav vispārināts — satur
valodas specifisku zināšanu; highlight blīvumu pārbauda salīdzinājumā ar
LV etalonkartēm (§4.2).

## 7.8. Native speaker izlase

Nejauši izvēlēta izlase **~5% no katra CEFR līmeņa**, **minimums 30
kartes** kopā, jāpārbauda cilvēkam ar dzimtās valodas kompetenci.
Automātiskie skripti neaizstāj stilistisku dabiskumu.

## 7.9. Browser, audio un vizuālā pārbaude

- **Console:** 0 JS kļūdas katrā ekrānā auditētās valodas plūsmā.
- **Audio:** izrunas/audio pogas jāpārbauda neatkarīgi no izvēlētās
  native valodas.
- **Screenshots:** LV vs `{lang}` blakus katram galvenajam skatam —
  layout salīdzinājums (sk. §4.5).

## 7.10. Valodas specifiskās lingvistiskās pārbaudes

Gramatika, pareizrakstība, dabiskums, terminoloģijas konsekvence,
fiktīvo personvārdu lokalizācija (sk. §5.1) — katrai valodai ar
valodas eksperta kritērijiem, bet vienādu procesu.

## 7.11. Audita pieņemšanas kritēriji

Valoda/dataset ir auditēts un gatavs CLOSED tikai ja:

- 0 kritisku atradumu;
- 0 augstu atradumu **vizuālajā slānī**;
- visi §7.7 skripti PASS;
- native speaker izlase bez sistemātiskām gramatikas kļūdām;
- ekrānuzņēmumu salīdzinājums bez layout atšķirībām no LV;
- `languages/registry.js` statusi atbilst faktam.

## 7.12. Registry stāvoklis

Pēc audita `languages/registry.js` ierakstam `{lang}` laukiem
`dataStatus`, `hasStudyData` (un citi attiecīgie statusi) jāatbilst
faktiskajam datu stāvoklim. Fallback valodām — sk. §2.5.

------------------------------------------------------------------------

# 8. OWNER REVIEW

Pēc audita visi reālie findings tiek nodoti OWNER review.

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

`audit/report → OWNER decisions → repair → regression/closure → merge → origin/main verification`

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
-   §7.7 audita skripti PASS;
-   §7.11 vizuālā/lingvistiskā pieņemšana PASS;
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
STAGE: CREATE | AUDIT | OWNER-PREP | COPY-ONLY-REPAIR | REGRESSION | CLOSURE
DE = STRICT READ-ONLY
LV MASTER = READ-ONLY
OTHER LANGUAGES = READ-ONLY

Strādā tikai noteiktajā STAGE.
Neizveido paralēlu workflow.
Pirms darba pārbaudi aktuālo origin/main un fiksē MAIN_BASE_SHA.
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
4. OWNER REVIEW
        ↓
5. ONE AUTHORITATIVE OWNER DECISIONS FILE
        ↓
6. COPY-ONLY REPAIR + CURRENT GUARDS
        ↓
7. TARGETED REGRESSION
        ↓
8. FULL RE-AUDIT, JA NEPIECIEŠAMS
        ↓
9. FINAL CLOSURE
        ↓
10. MERGE TO MAIN
        ↓
11. VERIFY origin/main
        ↓
12. NEXT DATASET STARTS FROM NEW origin/main
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

## Version 1.1

- achieved full parity with legacy active standards
- added missing audit/runtime/visual gates
- added complete Study/comparisonStudy requirements
- added fixed color/visual requirements
- added Git single-authoritative-branch workflow
- resolved superseded legacy conflicts

------------------------------------------------------------------------

## MASTER 1.1 --- END
