# MASTER 1.12 — LINGVISTISKĀ AUDITA GROZĪJUMI

**Statuss:** AUTHORITATIVE / OBLIGĀTS (papildina `PROJECT_LANGUAGE_MASTER_STANDARD.md` §7.153–§7.157)  
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

# 6. OBLIGĀTĀ DIVPUSĒJĀ PĀRBAUDE

Katrai lingvistiskajai rindai:

**DE AUTHORITY CHECK**

↓

**TARGET LANGUAGE AUTHORITY CHECK**

↓

**SEMANTIC / CONTEXTUAL ALIGNMENT**

↓

**AUDIT VERDICT**

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
