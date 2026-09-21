# MASTER 1.12 — LINGVISTISKĀ AUDITA GROZĪJUMI

**Statuss:** AUTHORITATIVE / OBLIGĀTS (papildina `PROJECT_LANGUAGE_MASTER_STANDARD.md` §7.153–§7.158)  
**Saistīts ar:** `MASTER_1.12_BINDING_WORK_AGREEMENT.md`, valodu audita un OWNER-PREP procesu

## 1. TVĒRUMS

Šie noteikumi attiecas uz visu projekta lingvistisko auditu:

- A1
- A2
- B1
- B2
- C1
- C2
- Verbs
- Sentences
- Kurss
- Training
- Study
- comparisonStudy
- UI un terminoloģiju, kur piemērojams

Noteikumi attiecas uz **visām 33 auditā iesaistītajām valodām**:

**32 lietotnes valodas + vācu (`de`) avota valoda.**

---

# 2. GALVENAIS PRINCIPS — SOURCE-SUPPORTED AUDIT

Katra auditētā lingvistiskā rinda/kartīte jāpārbauda individuāli.

**Katrai rindai bez izņēmuma jābūt pārbaudāmam avotu pamatojumam.**

AI/LLM/Cursor secinājums pats par sevi NAV lingvistisks pierādījums.

Obligātā ķēde:

**AUTHORITATIVE SOURCE → SOURCE EVIDENCE → CONTEXTUAL ANALYSIS → AUDIT VERDICT**

Aizliegta ķēde:

**AI INTERPRETATION → AUDIT VERDICT**

---

# 3. LANGUAGE AUTHORITY REGISTRY — 33 VALODAS

MASTER jāuztur viens autoritatīvs valodu avotu reģistrs.

| # | Kods | Valoda | Primārais valodas normas / akadēmiskais avots | Oficiālā tīmekļa adrese |
|---:|---|---|---|---|
| 1 | `bs` | Bosniešu | Institut za jezik Univerziteta u Sarajevu | https://izj.unsa.ba/ |
| 2 | `en` | Britu angļu | Oxford English Dictionary / Oxford Learner's Dictionaries | https://www.oed.com/ ; https://www.oxfordlearnersdictionaries.com/ |
| 3 | `cs` | Čehu | Ústav pro jazyk český AV ČR — Internetová jazyková příručka | https://prirucka.ujc.cas.cz/ |
| 4 | `da` | Dāņu | Dansk Sprognævn — Retskrivningsordbogen | https://ro.dsn.dk/ |
| 5 | `et` | Igauņu | Eesti Keele Instituut — ÕS / Sõnaveeb | https://sonaveeb.ee/ |
| 6 | `es` | Spāņu | Real Academia Española — DLE / Ortografía | https://dle.rae.es/ ; https://www.rae.es/ortografia |
| 7 | `fr` | Franču | Académie française — Dictionnaire de l’Académie française | https://www.dictionnaire-academie.fr/ |
| 8 | `hr` | Horvātu | Institut za hrvatski jezik — Hrvatski pravopis | https://pravopis.hr/ |
| 9 | `is` | Islandiešu | Stofnun Árna Magnússonar — BÍN / Málið.is | https://bin.arnastofnun.is/ ; https://malid.is/ |
| 10 | `it` | Itāļu | Accademia della Crusca | https://accademiadellacrusca.it/ |
| 11 | `lv` | Latviešu | Latviešu valodas aģentūra + MLVV/Tēzaurs | https://valoda.lv/ ; https://mlvv.tezaurs.lv/ ; https://tezaurs.lv/ |
| 12 | `lb` | Luksemburgiešu | Zenter fir d'Lëtzebuerger Sprooch — LOD | https://zls.lu/ ; https://lod.lu/ |
| 13 | `lt` | Lietuviešu | Lietuvių kalbos institutas + VLKK | https://lki.lt/ ; https://vlkk.lt/ |
| 14 | `hu` | Ungāru | HUN-REN Nyelvtudományi Kutatóközpont | https://nytud.hu/ |
| 15 | `nl` | Nīderlandiešu | Nederlandse Taalunie — Woordenlijst Nederlandse Taal | https://taalunie.org/ ; https://woordenlijst.org/ |
| 16 | `nb` | Norvēģu Bokmål | Språkrådet / Bokmålsordboka | https://sprakradet.no/ ; https://ordbokene.no/bm |
| 17 | `nn` | Norvēģu Nynorsk | Språkrådet / Nynorskordboka | https://sprakradet.no/ ; https://ordbokene.no/nn |
| 18 | `pl` | Poļu | Rada Języka Polskiego + WSJP PAN | https://rjp.pan.pl/ ; https://wsjp.pl/ |
| 19 | `pt` | Portugāļu | Academia das Ciências de Lisboa | https://www.acad-ciencias.pt/ ; https://dicionario.acad-ciencias.pt/ |
| 20 | `ro` | Rumāņu | Academia Română / Institutul de Lingvistică — DOOM | https://acad.ro/ ; https://lingv.ro/ ; https://doom.lingv.ro/ |
| 21 | `sq` | Albāņu | Akademia e Shkencave e Shqipërisë | https://akad.gov.al/ |
| 22 | `sk` | Slovāku | Jazykovedný ústav Ľudovíta Štúra SAV | https://www.juls.savba.sk/ ; https://slovnik.juls.savba.sk/ |
| 23 | `sl` | Slovēņu | ZRC SAZU — FRAN | https://www.zrc-sazu.si/ ; https://fran.si/ |
| 24 | `sr` | Serbu | Institut za srpski jezik SANU + Matica srpska | https://www.isj.sanu.ac.rs/ ; https://www.maticasrpska.org.rs/ |
| 25 | `fi` | Somu | Kotimaisten kielten keskus — Kielitoimiston sanakirja | https://www.kotus.fi/ ; https://www.kielitoimistonsanakirja.fi/ |
| 26 | `sv` | Zviedru | Svenska Akademien — SAOL / SO / SAOB | https://www.svenskaakademien.se/ ; https://svenska.se/ |
| 27 | `tr` | Turku | Türk Dil Kurumu — Güncel Türkçe Sözlük / Yazım Kılavuzu | https://tdk.gov.tr/ ; https://sozluk.gov.tr/ |
| 28 | `el` / app `gr` | Grieķu | Κέντρο Ελληνικής Γλώσσας | https://www.greek-language.gr/ |
| 29 | `bg` | Bulgāru | Институт за български език, БАН — Официален правописен речник | https://ibl.bas.bg/ ; https://beron.mon.bg/ |
| 30 | `mk` | Maķedoniešu | Институт за македонски јазик „Крсте Мисирков“ | https://imj.ukim.edu.mk/ |
| 31 | `ru` | Krievu | Институт русского языка им. В. В. Виноградова РАН | https://ruslang.ru/ ; https://orfo.ruslang.ru/ |
| 32 | `uk` | Ukraiņu | Інститут української мови НАН України + Український правопис | https://iul-nasu.org.ua/ ; https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/ukrainskiy-pravopis |
| **33** | **`de`** | **Vācu** | **Rat für deutsche Rechtschreibung + Goethe-Institut + Duden + IDS/DWDS** | **https://www.rechtschreibrat.com/ ; https://www.goethe.de/ ; https://www.duden.de/ ; https://grammis.ids-mannheim.de/rechtschreibung ; https://www.dwds.de/** |

Reģistrā pie katras valodas jāglabā verificētas oficiālās saites.

## 3.1 STRUCTURED LANGUAGE AUTHORITY SOURCES — 33 VALODAS

Papildus §3 tabulas saīsinātajam URL laukam, repozitorijā uztur **pilnu trīsslāņu avotu reģistru** (33 valodas, ieskaitot `de`; app `gr` ↔ standarts `el`):

| Lauks | Nozīme |
|---|---|
| `LANGUAGE_NORM_AUTHORITY` | ① Normatīvais / pareizrakstības / valodas padomes avots |
| `LANGUAGE_NORM_URLS` | ① Oficiālie URL |
| `PRIMARY_DICTIONARY_AUTHORITY` | ② Primārā vārdnīca / leksikogrāfiskais resurss |
| `PRIMARY_DICTIONARY_URLS` | ② Oficiālie URL |
| `ADDITIONAL_AUTHORITY` | ③ Papildu autoritatīvais avots (institūcijas oficiāls portāls) |
| `ADDITIONAL_AUTHORITY_URLS` | ③ Oficiālie URL |
| `LANGUAGE_LEARNING_CEFR_AUTHORITY` | CEFR / mācību līmeņa oficiālais avots (ja piemērojams) |
| `LANGUAGE_LEARNING_CEFR_URLS` | CEFR URL |
| `GERMAN_TARGET_BILINGUAL_SOURCES` | Vācu→TARGET profesionāli rediģētas / institucionālas divvalodu vārdnīcas (G2/A1 reģistrs; papildu ieraksti) |
| `GERMAN_TARGET_DICTIONARY_NAME` | Galvenā vācu–TARGET divvalodu vārdnīca (nosaukums) |
| `GERMAN_TARGET_DICTIONARY_URL` | Galvenā vācu–TARGET divvalodu vārdnīcas URL |
| `GERMAN_TARGET_DICTIONARY_TYPE` | Avota tips (piem. dict.cc, institucionāla, komerciāla) |
| `GERMAN_TARGET_DICTIONARY_ENTRY_COUNT` | Publiski redzamais ierakstu skaits (ja zināms) |
| `GERMAN_TARGET_DICTIONARY_ENTRY_COUNT_STATUS` | Skaita avota statuss (`PUBLICLY_CONFIRMED_*` vai `ENTRY_COUNT_NOT_PUBLICLY_CONFIRMED`) |
| `GERMAN_TARGET_DICTIONARY_ACCESS` | Piekļuves režīms (piem. `PUBLIC_BROWSER_SESSION`) |
| `GERMAN_TARGET_DICTIONARY_LANGUAGE_PAIR` | Valodu pāris (`de→TARGET`; `gr` ↔ `el`) |
| `GERMAN_TARGET_DICTIONARY_ROLE` | Vienmēr `PRIMARY_TRANSLATION_PAIR_SOURCE` šim reģistram |
| `ADDITIONAL_DICTIONARY_AUTHORITY` | ④ Papildu vārdnīca / leksisks avots (A1 auditam; primārie ①–③ avoti nemainīti) |
| `ADDITIONAL_DICTIONARY_URLS` | ④ Oficiālais URL (viena papildu vārdnīca katram TARGET `appCode`) |
| `ADDITIONAL_DICTIONARY_ROLE` | Loma (`SUPPLEMENTARY_LEXICAL_A1` — tulkojuma/nozīmes/lemmas/gramatikas/pareizrakstības pārbaudei) |

**Mašīnlasāms avots (GitHub autoritatīvs):** `scripts/lib/data/master-language-authority-sources-33.json`

**Papildu vārdnīcu manifest (32 TARGET valodas):** `scripts/lib/data/master-additional-dictionary-sources-32.json`

**Vācu–TARGET divvalodu vārdnīca (32 valodas):** kanoniskais manifests `scripts/lib/data/master-german-target-bilingual-dictionaries-32.json`.

Tulkojuma pareizības pārbaudē prioritāri izmanto vācu–TARGET divvalodu vārdnīcu, kurā konkrētajā rezultātā tieši redzams vācu vārds un TARGET tulkojums.

`TRANSLATION_PAIR_VERIFIED` drīkst piešķirt, ja izmantotajā divvalodu vārdnīcas rezultātā ir atrodams: pārbaudāmais vācu vārds vai vārdkopa; konkrētais TARGET tulkojums; tieša abu valodu savstarpējā atbilstība.

Vienvalodas TARGET vārdnīca viena pati neapstiprina vācu–TARGET tulkojuma pāri. To izmanto papildus TARGET pamatformas, rakstības, gramatikas vai nozīmes pārbaudei.

Vārdnīcas komerciālais vai kopienas statuss pats par sevi nav iemesls tās noraidīšanai.

`nb` un `nn` ir atsevišķas auditējamās valodas. App `gr` atbilst valodas kodam `el`.

Katrai TARGET valodai reģistrēts arī papildu vārdnīcas vai leksiskais avots. Papildu avotu drīkst izmantot tulkojuma, nozīmes, lemmas, gramatikas vai pareizrakstības pārbaudei. Komerciālas profesionāli rediģētas vārdnīcas ir atļautas. Kopienas vārdnīca izmantojama kā papildu salīdzināšanas avots, nevis kā vienīgais pamats production labojumam. AI un mašīntulkotāji nav lingvistiski avoti.

## 3.2 IZMANTOJAMO AVOTU PRIORITĀTE (A–F)

| Klase | Nozīme |
|---|---|
| **A** | Valsts vai valodas institūcijas tulkojoša/skaidrojoša vārdnīca |
| **B** | Profesionāli rediģēta komerciāla izdevniecības vārdnīca (piem. PONS) |
| **C** | Universitātes, valsts iestādes vai atzīta izdevēja mācību materiāls |
| **D** | Oficiāla vienvalodas TARGET vārdnīca semantikas, lemmas, gramatikas vai ortogrāfijas papildu pārbaudei |
| **E** | Kopienas vārdnīca **tikai** kopā ar vismaz vienu neatkarīgu A–D avotu |
| **F** | Mašīntulkojums, AI atbilde vai nezināmas izcelsmes tulkojums — nav pierādījums viens pats |

Komerciālu vārdnīcu nedrīkst noraidīt tikai tāpēc, ka tā ir komerciāla. AI/LLM nav valodas autoritāte.

**SOURCE-SUPPORTED kopums:** DE avots (vācu vārds + nozīme) + vācu–TARGET vārdnīca (ekvivalents) + pēc vajadzības TARGET D avots (lemma/ortogrāfija). `PASS` tikai ja kopums sedz konkrēto kartītes nozīmi.

G2/A1 oficiālo avotu adapteri un domēnu allowlist izmanto **visu** šo JSON reģistru (①+②+③+④+CEFR+bilingvālo URL), ne tikai §3 tabulas pirmo URL kolonnu. URL bez izsekošanas parametriem (`utm_*` u.c.).

Ja §3.1 JSON ietver oficiālu resursu, kas nav §3 tabulas `urlField` sarakstā, tas ir dokumentēts JSON `registryGapNotes` un §3.1 paplašinājums — nevis neoficiāls avots.

---

# 4. DIVU AVOTU SLĀŅU SISTĒMA

Katrai valodai, kur tas ir iespējams, nodala:

## `LANGUAGE_NORM_AUTHORITY`

Pareizrakstība, nozīme, gramatika, morfoloģija, sintakse un standartvalodas lietojums.

## `LANGUAGE_LEARNING_CEFR_AUTHORITY`

A1–C2 mācību līmeņa un pedagoģiskās piemērotības pārbaudei:

1. Council of Europe CEFR;
2. konkrētās valodas RLD, ja pastāv;
3. oficiāla/nacionāli atzīta svešvalodas mācību vai sertifikācijas institūcija;
4. akadēmisks CEFR profils.

Neeksistējošu valodas RLD vai institūciju nedrīkst aizvietot ar AI pieņēmumu.

---

# 5. DE ĪPAŠAIS STATUSS

`de` ir 33. reģistra valoda, bet saglabā:

`SOURCE_LANGUAGE = TRUE`

`STRICT_READ_ONLY = TRUE`

DE avoti:

- Rat für deutsche Rechtschreibung — ortogrāfija/interpunkcija;
- Goethe-Institut — DaF, GeR/CEFR, A1–C2 un pedagoģiskais konteksts;
- Duden — leksika, nozīme, gramatika un formas;
- IDS/DWDS — korpusi, lietojums un nozīmju nianses.

Iespējama DE kļūda:

`SOURCE_DE_ISSUE / NEEDS_SOURCE_REVIEW`

DE netiek automātiski modificēts.

---

# 6. OBLIGĀTĀ DIVPUSĒJĀ PĀRBAUDE (SOURCE-SUPPORTED SECĪBA)

Katrai lingvistiskajai rindai obligāta secība:

1. Fiksēt DE šķirkli, artikulu, vārdšķiru un konkrēto nozīmi.
2. Saglabāt DE MASTER avota pierādījumu.
3. Pārbaudīt TARGET `CURRENT` vērtību attiecīgās valodas MASTER avotā.
4. Saglabāt konkrētu TARGET šķirkli un nozīmes pierādījumu.
5. Salīdzināt: nozīmi, vārdšķiru, lemmu, rakstību, diakritiku, alfabētu/rakstību,
   lielos/mazos burtus, reģistru un lietojumu.
6. Tikai pēc tam piešķirt `PASS`, `FINDING`, `NEEDS_SOURCE_REVIEW` vai
   `SOURCE_DE_ISSUE`.

`PASS` bez DE un TARGET evidence ir **aizliegts**.

`FINDING` un `PROPOSED_NEW` bez TARGET autoritatīvā pierādījuma ir **aizliegts**.

Autoritatīvs TARGET pierādījums nav ierobežots tikai ar klasisku tīmekļa vārdnīcas
entry lapu. Drīkst izmantot arī oficiālas digitālās vārdnīcas, API, lejupielādējamas
institūciju datu kopas, terminoloģijas datubāzes, valodas korpusus, ortogrāfijas un
morfoloģijas resursus, institūciju PDF/XML/JSON/CSV/TEI publikācijas un citus oficiālus
valodas materiālus. Ja viens avots nepierāda visu, drīkst izmantot vairāku oficiālu
avotu pierādījumu komplektu. AI nav avots un nedrīkst aizpildīt pierādījuma trūkumu.

Joprojām obligāti: DE nozīmes pierādījums; TARGET lemmas pierādījums; TARGET nozīmes
pierādījums; vārdšķira; rakstība; diakritika; kapitalizācija; reproducējams avots;
OWNER apstiprinājums MASTER reģistra izmaiņām.

Tehnisku piekļuves kļūdu nedrīkst pārvērst par lingvistisku `FINDING` bez
TARGET avota šķirkļa.

Katrai rindai joprojām piemēro divslāņu plūsmu:

**DE AUTHORITY CHECK** → **TARGET LANGUAGE AUTHORITY CHECK** →
**SEMANTIC / CONTEXTUAL ALIGNMENT** → **AUDIT VERDICT**

Nepietiek tikai ar vārda atrašanu vārdnīcā.

---

# 7. KATRAI RINDAI OBLIGĀTS PIERĀDĪJUMS

Katram audit record:

```text
DE_AUTHORITY
DE_SOURCE_URL
DE_SOURCE_ENTRY_OR_RULE
DE_SOURCE_EVIDENCE

TARGET_AUTHORITY
TARGET_SOURCE_URL
TARGET_SOURCE_ENTRY_OR_RULE
TARGET_SOURCE_EVIDENCE

CONTEXT_REASONING
AUDIT_VERDICT
```

Ja tiek pārbaudīta CEFR/līmeņa atbilstība:

```text
CEFR_AUTHORITY
CEFR_SOURCE_URL
CEFR_LEVEL
CEFR_EVIDENCE
```

Avotam jābūt pietiekami konkrētam, lai pierādījumu var pārbaudīt.

---

# 8. AUDITA VERDIKTI

Audita rezultāts un OWNER lēmums ir divas dažādas lietas.

Atļautie lingvistiskā audita verdikti:

### `PASS`

Rinda ir individuāli pārbaudīta un avotu pierādījumi + konteksta analīze pamato `CURRENT`.

`PASS` nozīmē:

**SOURCE-SUPPORTED CORRECT**

### `FINDING`

Audits konstatējis pamatotu problēmu ar `CURRENT`.

Jāsagatavo:

- `CURRENT_PROBLEM`;
- avotu pierādījumi;
- `PROPOSED_NEW`;
- `NEW_SOURCE_EVIDENCE`.

### `NEEDS_SOURCE_REVIEW`

Ar pieejamajiem autoritatīvajiem avotiem drošu secinājumu nevar izdarīt.

### `SOURCE_DE_ISSUE`

Konstatēta iespējama problēma STRICT READ-ONLY DE avotā.

---

# 9. `PASS` IR SLĒGTS AUDITA REZULTĀTS

Ja rindai ir:

- individuāla pārbaude;
- derīgs DE avota pierādījums;
- derīgs target avota pierādījums;
- konteksta analīze;
- `AUDIT_VERDICT = PASS`;

tad šī rinda ir **lingvistiski pabeigta audita ietvaros**.

Tā:

- netiek ievietota OWNER labošanas rindā;
- neprasa atkārtotu OWNER lingvistisko pārbaudi;
- netiek vēlreiz auditēta tajā pašā audit/repair ciklā bez konkrēta iemesla;
- netiek pārvērsta par `NELABOT`, jo `NELABOT` ir OWNER lēmums par findingu, nevis parastu PASS rindu.

Tas novērš:

**AUDIT PASS → OWNER atkārtots pilns audits**

---

# 10. KAD `PASS` DRĪKST ATVĒRT NO JAUNA

`PASS` rindu atkārtoti pārbauda tikai tad, ja ir konkrēts pamats:

1. mainīts tās `CURRENT`;
2. mainīts DE/source saturs, no kura tā atkarīga;
3. mainīts attiecīgais MASTER noteikums;
4. mainījusies attiecīgā normatīvā valodas norma;
5. avota saite/pierādījums izrādās nederīgs vai neattiecas uz konkrēto secinājumu;
6. deterministic/regression pārbaude atrod konkrētu neatbilstību;
7. ir konkrēts jauns pierādījums par iespējamu kļūdu;
8. OWNER skaidri pieprasa konkrētās rindas atkārtotu pārbaudi.

**Ja šāda trigger nav, `PASS` netiek pārbaudīts atkārtoti.**

---

# 11. OWNER REVIEW TVĒRUMS

OWNER review saņem tikai:

- `FINDING`;
- `NEEDS_SOURCE_REVIEW`;
- `SOURCE_DE_ISSUE`;
- citus skaidri dokumentētus unresolved gadījumus.

Parastas `PASS` rindas OWNER review rindā neiet.

Audita atskaitē tās joprojām saglabājas kā pierādījums 100% coverage.

---

# 12. OWNER LĒMUMU KRITĒRIJI

OWNER nepārtaisa jau veikto pilno auditu.

OWNER izvērtē tikai OWNER review rindā nonākušos gadījumus.

Atļautie OWNER statusi:

### `LABOT`

Piešķir, ja:

- finding ir pamatots;
- `CURRENT` jāmaina;
- ir precīza apstiprināta `NEW` vērtība.

Tikai `LABOT` drīkst nonākt COPY-ONLY apply.

### `NELABOT`

Piešķir findingam, ja pēc OWNER izvērtēšanas `CURRENT` tomēr saglabājams.

Tas nav tas pats, kas audita `PASS`.

### `NEEDS_SOURCE_REVIEW`

Piešķir, ja vēl nav pietiekama pamata drošam gala lēmumam.

### `FALSE_POSITIVE`

Piešķir, ja audita finding pēc OWNER pārbaudes nav reāla problēma.

### `PENDING`

Pagaidu statuss līdz OWNER faktiskajam lēmumam.

---

# 13. OWNER-PREP

OWNER-PREP artefaktos pilnā 100% audita coverage ir saglabājama, bet OWNER darbam paredzētajā rindā jāiekļauj tikai unresolved/problemātiskie ieraksti.

Obligāti atsevišķi uzrāda:

```text
TOTAL_CHECKED
AUDIT_PASS
FINDING
NEEDS_SOURCE_REVIEW
SOURCE_DE_ISSUE
OWNER_REVIEW_REQUIRED
```

Jāizpildās:

```text
TOTAL_CHECKED =
AUDIT_PASS +
FINDING +
NEEDS_SOURCE_REVIEW +
SOURCE_DE_ISSUE
```

`AUDIT_PASS` ieraksti paliek audit evidence datos, bet neprasa individuālu OWNER verdictu.

---

# 14. INDIVIDUĀLS AUDITS — BULK VERDIKTI AIZLIEGTI

Aizliegts:

```text
UNCHANGED_SINCE_DISCOVERY → PASS
WORD_EXISTS → PASS
TARGET_VALUE_VALID → PASS
LANGUAGE_PRESENT → PASS
AI_CONFIDENCE_HIGH → PASS
TRANSLATOR_MATCH → PASS
```

Katram `PASS` jābūt iegūtam no konkrētās rindas individuālas pārbaudes.

Vienu avota pierādījumu nedrīkst mehāniski izmantot vairākām rindām, ja tas nepierāda katras konkrētās rindas nozīmi/formu/kontekstu.

---

# 15. AI/LLM LOMA

AI/LLM/Cursor ir:

**AUDIT EXECUTOR / ANALYSIS TOOL**

AI nav:

**LANGUAGE AUTHORITY**

Autoritatīvais pamats ir MASTER noteiktie valodas avoti, nevis AI modelis.

**AI/LLM drīkst:**

- atrast MASTER atļauta avota šķirkli;
- nolasīt un strukturēt pierādījumu;
- salīdzināt DE un TARGET avotu ierakstus;
- atklāt pierādāmu neatbilstību;
- sagatavot OWNER pārbaudes artefaktus.

**AI/LLM nedrīkst:**

- izdomāt tulkojumu;
- izvēlēties “labāk skanošu” variantu bez avota;
- aizvietot nepieejamu oficiālo avotu ar nejaušu vārdnīcu;
- piešķirt `PASS` pēc valodas izjūtas;
- izmantot cita AI verdictu kā avotu;
- pārvērst tehnisku piekļuves kļūdu par lingvistisku verdictu;
- automātiski mainīt production saturu;
- noteikt kapitalizāciju pēc “izskata” bez TARGET normas un avota pierādījuma.

AI drīkst meklēt avotus, analizēt, salīdzināt, sagatavot findings un `PROPOSED_NEW`.

AI apgalvojums bez nepieciešamā ārējā pierādījuma nav pietiekams `PASS` vai `FINDING`.

---

# 16. COPY-ONLY

Pēc OWNER review:

- tikai `OWNER_STATUS = LABOT` tiek modificēts;
- izmanto tikai precīzi apstiprināto `NEW`;
- Cursor neveic jaunu lingvistisko analīzi apply laikā;
- `PASS`, `NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW` netiek modificēti.

---

# 17. REGRESSION / GALA PĀRBAUDE

Pēc COPY-ONLY remonta pārbauda:

- visi `LABOT` precīzi piemēroti;
- `CURRENT → NEW` atbilst OWNER mappingam;
- DE diff = 0, ja DE remonts nav atsevišķi autorizēts;
- citas valodas nav nejauši mainītas;
- struktūra/ID/order/mirror/syntax PASS;
- nav unexpected changes.

**Regresijas pārbaude nav automātisks atkārtots pilns lingvistiskais audits visām iepriekšējām `PASS` rindām.**

Iepriekšējās `PASS` rindas atkārtoti lingvistiski pārbauda tikai pēc §10 noteiktajiem triggeriem.

---

# 18. FULL LINGUISTIC DISCOVERY AUDIT

MASTER terminoloģijā:

`FULL LLM LINGUISTIC AUDIT`

aizstāt ar:

**`FULL LINGUISTIC DISCOVERY AUDIT`**

Obligātā metadata:

```text
AUDIT_EXECUTOR
MODEL_IF_USED
MODEL_VERSION
PROMPT_VERSION
LANGUAGE_AUTHORITY_REGISTRY_VERSION
SOURCE_ACCESS_DATE
DATASET_PRODUCTION_SHA
AUDIT_BASELINE_SHA
SCOPE
COVERAGE
AUDIT_DATE
```

---

# 19. GALA DARBA PLŪSMA

```text
100% INDIVIDUAL SOURCE-SUPPORTED AUDIT
                │
                ├── PASS ──────────────────────► AUDIT CLOSED
                │
                ├── FINDING ───────┐
                │                  │
                ├── NEEDS_SOURCE ──┼──► OWNER REVIEW
                │                  │
                └── SOURCE_DE ─────┘
                                      │
                         ┌────────────┼────────────┐
                         │            │            │
                       LABOT       NELABOT     unresolved
                         │            │
                         ▼            └──► CLOSED
                    COPY-ONLY
                         │
                         ▼
                    REGRESSION
                         │
                         ▼
                       CLOSED
```

## Pamatnoteikums

**Vienreiz kvalitatīvi, individuāli un ar autoritatīviem avotiem pierādīts `PASS` netiek bez konkrēta iemesla pārbaudīts vēlreiz.**

100% audit coverage saglabājas, bet OWNER laiks tiek izmantots tikai tur, kur audits ir atradis reālu problēmu vai nevarējis pieņemt drošu secinājumu.

---

# 20. MĒRĶVALODAS PAMATFORMA, ORTOGRĀFIJA UN KAPITALIZĀCIJA

## 20.1. Pamatnoteikums

1. Vārdnīcas tipa laukā mērķvalodas vērtība jāraksta attiecīgās mērķvalodas
   normatīvajā pamatformā.

2. Mērķvalodas lemmu, vārdšķiru, rakstību, diakritiku, alfabētu/rakstības
   sistēmu un lielo vai mazo sākumburtu nosaka attiecīgās mērķvalodas norma un
   MASTER reģistrētais autoritatīvais avots.

3. **Vācu lietvārda lielais sākumburts netiek automātiski pārnests uz TARGET
   tulkojumu.**

4. Lielākajā daļā App mērķvalodu sugasvārda vārdnīcas pamatforma sākas ar
   mazo burtu, ja attiecīgās valodas norma nenosaka citādi.

5. Tas pats princips attiecas uz latīņu, kirilicu, grieķu un citām App
   izmantotajām rakstības sistēmām.

6. Lielo sākumburtu drīkst saglabāt tikai tad, ja to pamato konkrētās
   mērķvalodas norma, piemēram: īpašvārds, oficiāls nosaukums, saīsinājums,
   normatīvs ortogrāfisks izņēmums, vai teikuma sākums laukā, kas tiešām ir
   pilns teikums.

7. Kartītes, saraksta, tabulas vai UI elementa pirmā pozīcija pati par sevi
   **nav** lingvistisks pamatojums mainīt vārdnīcas lemmu uz lielo sākumburtu.

8. Vārdnīcas lauks un pilna teikuma lauks jāvērtē atsevišķi:

   - vārdnīcas laukā saglabā normatīvo lemmu;
   - teikuma sākumā izmanto attiecīgās valodas teikuma kapitalizācijas
     noteikumus;
   - nedrīkst mehāniski pazemināt teikuma pirmo burtu;
   - nedrīkst mehāniski paaugstināt lemmu tikai UI noformējuma dēļ.

9. AI/LLM nedrīkst noteikt kapitalizāciju pēc “izskata” vai valodas izjūtas.
   Nepieciešams TARGET valodas normatīvā avota pierādījums vai skaidri
   piemērojams valodas noteikums no MASTER reģistrētā avota.

10. Ja avota šķirklī tehniska noformējuma dēļ visi headword burti parādīti ar
    lielajiem burtiem, šo vizuālo noformējumu nedrīkst automātiski interpretēt
    kā normatīvu kapitalizāciju. Jāizmanto strukturētais headword,
    ortogrāfijas noteikums vai cits autoritatīvs pierādījums.

## 20.2. Normatīvs piemērs (`das Haus`)

**DE:** `das Haus` — vācu valodā lietvārds normatīvi sākas ar lielo burtu.

**TARGET vārdnīcas pamatformas (illustratīvi, ne automātiska apply):**

| Valoda | Piemērs | Nevis |
|--------|---------|-------|
| LV | `māja` | `Māja` |
| EN | `house` | `House` |
| CS | `dům` | `Dům` |
| BG | `къща` | `Къща` |
| GR | `σπίτι` | `Σπίτι` |
| TR | `ev` | `Ev` |

Paskaidrojums: tās ir vārdnīcas pamatformas; vācu kapitalizācija netiek
pārnesta; piemērs nenozīmē automātisku visu TARGET vērtību pārveidošanu uz
mazo burtu; katrai valodai joprojām nepieciešama tās normu pārbaude;
īpašvārdiem, saīsinājumiem un pilniem teikumiem piemēro attiecīgās valodas
noteikumus.

## 20.2.1. OWNER iepriekš autorizēta sākumburta normalizācija

OWNER iepriekš autorizē automātisku TARGET vārdnīcas pamatformas sākumburta
labošanu no lielā uz mazo tikai tad, ja MASTER norādītais oficiālais TARGET
valodas avots validē identisku lemmu ar mazo sākumburtu un CURRENT/NEW atšķiras
tikai ar pirmā burta reģistru. Šāda korekcija ir deterministiska ortogrāfiska
normalizācija, nevis jauna tulkojuma izvēle. Jebkura leksiska, semantiska,
gramatiskā, diakritiska, skripta vai vairāk nekā sākumburta izmaiņa prasa
atsevišķu OWNER lēmumu. Automātiskais apply drīkst ietvert tikai šo klasi
(`OWNER_PREAUTHORIZED_CAPITALIZATION_ONLY`) ar reproducējamu entry evidence — ne
leksiskus tulkojumu labojumus un ne NSR slēgšanu.

## 20.3. Unikālās lingvistiskās vienības princips

Dublētu darbu drīkst samazināt ar unikālo lingvistisko vienību reģistru
(DE nozīmes ID, mērķvaloda, mērķvalodas lemma, konteksts/nozīme, DE evidence,
TARGET evidence).

**Aizliegts:**

- viena vārda evidence akli izmantot citai nozīmei;
- lemmu evidence automātiski attiecināt uz visiem locījumiem;
- kartītes līmeņa verdictu pavairot visiem laukiem;
- viena teikuma evidence izmantot citiem kontekstiem;
- pierādījumu kopēt uz citu valodu.

(Saistīts ar §14 — bulk verdikti un evidence atkārtota lietošana bez konteksta.)
