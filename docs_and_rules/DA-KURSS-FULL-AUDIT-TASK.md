# UZDEVUMS — DA–DE KURSS PILNS LINGVISTISKAIS AUDITS — GPT-5.6 LUNA

## MĒRĶIS

Veikt pilnu READ-ONLY lingvistisko auditu **DA–DE Kurss** (21 lekcijas + extra topics + training cards).

Mērķis ir noteikt, vai pašreizējais `data/da/courseLessons.js`, `data/da/courseTrainingCards.js` un saistītie DA Kurss teksti ir lingvistiski un tehniski korekti, un vai nav palikusi neviena reāla DA kļūda.

**AUDITA MODELIS:** GPT-5.6 Luna  
**DE = STRICT READ-ONLY**  
**LV Kurss = MASTER** (struktūrai, ID/secībai, section tipiem, renderer/progress/flip/next, pedagoģiskajai loģikai)  
**ŠIS IR TIKAI AUDITS. PRODUCTION FAILUS NEMAINĪT.**

---

## 1. AUDITA AVOTI

### Production (auditēt)

| Fails | Apraksts |
|-------|----------|
| `data/da/courseLessons.js` | 21 lekcijas + extra HTML topics |
| `data/da/courseTrainingCards.js` | L1–7 training cards |
| `languages/da/ui.js` | Kurss UI (`kurss.*`, section labels) |
| `www/data/da/*` | Mirror (jāatbilst `data/da/`) |
| `www/languages/da/ui.js` | Mirror |

### MASTER (tikai salīdzināšanai — nemainīt)

| Fails | Loma |
|-------|------|
| `data/courseLessons.js` | **LV MASTER** — struktūra, ID, secība, section tipi, DE dialogue, card counts |
| `languages/lv/ui.js` | UI etalon struktūrai |
| `www/ui.js` | Renderer, progress, flip, next loģika |

**LV tekstu nedrīkst automātiski kopēt kā DA.** LV ir struktūras/pedagoģijas avots, ne DA tulkojuma avots.

---

## 2. OBLIGĀTAIS MODELIS

Visu lingvistisko auditu veikt ar **GPT-5.6 Luna**.

Nelietot vienkāršu regex/deterministisku pārbaudi kā lingvistiskā audita aizvietotāju. Deterministiskos validatorus drīkst izmantot **papildus**.

---

## 3. DE — ABSOLŪTI READ-ONLY

Vācu puse ir autoritatīvs avots DE laukos.

**NEKĀDĀ GADĪJUMĀ:** nemainīt DE; nepārrakstīt DE; nelabot DE gramatiku; nenormalizēt DE; nemainīt DE formu izvēli.

Ja šķiet, ka problēma ir pašā DE avotā → `NEEDS_SOURCE_REVIEW` (nekādu production labojumu).

---

## 4. AUDITA APJOMS — 100% COVERAGE

### 4.1. Visas 21 lekcijas

`kurssLesson1` … `kurssLesson21` — pilns saturs:

- L1–7: `legacyHtml` + metadata (`title`, `subtitle`)
- L8–21: `sections[]` — dialogi, vārdi, izruna, gramatika, tulkojums, vingrinājumi, lasīšana, vārdi (names)

### 4.2. Extra topics (HTML)

`kurssArticlesLesson`, `kurssPronounsLesson`, `kurssPronunciationLesson`, `kurssConsonantsLesson`, `kurssVerbBasicsLesson`, `kurssSentenceStructureLesson`

### 4.3. Training cards L1–7

`courseTrainingCards.js` — visi `front`/`back` pāri.

### 4.4. Kurss UI teksti

`languages/da/ui.js` — `kurss.*`, section i18n, lesson items, renderer atbalsts.

### 4.5. Visi DA lokalizētie lauki

Pārbaudīt katru DA teksta lauku, ieskaitot:

- `lv` (native front — DA teksts, ne LV!)
- `front` (training cards)
- `subtitle`, `intro`, `description`
- `heading`, `text`, `examples[]` (grammar blocks)
- section `title` (un UI mapping)
- legacy HTML visible UI strings
- **sectionAccents** — ja eksistē Kurss/Study kontekstā, pārbaudīt pilnīgumu pret LV MASTER

### 4.6. Coverage atskaitē

Norādīt:

- total lessons audited / 21
- extra topics audited / 6
- training card decks / fields
- total DA text fields / audited DA text fields
- UI keys audited

**Nepilns coverage = FAIL**

---

## 5. LINGVISTISKAIS AUDITS (Luna)

Katram DA laukam salīdzināt ar DE kontekstu un pedagoģisko mērķi.

### 5.1. Semantika

- nepareizs tulkojums
- cita nozīme nekā DE/avota mērķis
- pārāk plaša vai nepareiza nozīme
- semantiski maldinoša forma
- nepareizs subjekts
- nepareiza darbības nozīme

### 5.2. Dāņu gramatika

- pareizrakstība
- morfoloģija
- locījumi/determinanti kontekstā
- modālie/konstrukcijas
- dabiska vārdu secība

### 5.3. Konsekvence

- vienas lekcijas/kartītes DA teksti konsekventi
- terminoloģija starp lekcijām
- section title ↔ renderer ↔ ui.js mapping
- person name pairing (DE canonical ↔ DA localized)

### 5.4. Dabiskums

- kalki no vācu/latviešu
- nedabiska mācību forma
- bojāts automātiskais tulkojums

### 5.5. Fictional person name localization

| DE (canonical, nemainīt) | DA native — lokalizēt |
|--------------------------|------------------------|
| Paul, Marie, Anna, Hans, Olga, Edgar, Gertrud, Albert, Marta, Franz, Müller | Dāņu ekvivalents/natural form |

**Aizliegts DA slānī:** `Pēteris`, `Jānis`, `Rūdolfs`, `Roberts`, `Ansis` (Hans vietā), u.c. LV atlikumi.

### 5.6. Svešvalodu atlikumi

Meklēt: LV, CS, BS, EN, PL, DE fragmentus DA laukā, placeholderus, mapping artefaktus.

---

## 6. STRUKTŪRAS / PARITĀTES PĀRBAUDE (deterministiski + Luna)

Salīdzināt ar **LV MASTER**:

- lesson ID un secība (21)
- section count un section tipi
- exercise/translate card counts
- `de` lauku identitāte (DE = LV master DE)
- renderer atbalstītie section titles (`COURSE_SECTION_I18N_KEYS`)
- `www/` mirror
- JavaScript syntax
- nav tukšu DA lauku
- placeholders = 0

**DE changes vs baseline = 0**

---

## 7. FALSE POSITIVE DISCIPLĪNA

Neatzīmēt par kļūdu tikai tāpēc, ka eksistē cits iespējams tulkojums.

Finding jābūt **reālai problēmai**.

---

## 8. SEVERITY

| Severity | Piemēri |
|----------|---------|
| **CRITICAL** | svešvaloda/bojāts teksts; mapping artefakti; salauzta forma; renderer nevar renderēt |
| **HIGH** | nepareizs tulkojums; LV/EN atlikums; nepareiza person name; DE izmaiņa |
| **MEDIUM** | paradigma/konsekvence; nedabiska forma, kas maldina |
| **LOW** | neliela, bet reāla kvalitātes problēma |

---

## 9. FINDING FORMĀTS

Katram finding:

- Finding ID (piem. `DA-KURSS-0001`)
- Lesson/Card ID (`kurssLesson8`, `lesson3TrainingCardsDa`, u.c.)
- precīzs path (piem. `sections[2].cards[4].lv`)
- DE_CURRENT (ja attiecināms)
- DA_CURRENT
- PROPOSED_DA
- Severity
- Category (SEMANTICS, GRAMMAR, CONSISTENCY, FOREIGN, NAMES, STRUCTURE, RENDERER, …)
- problēmas skaidrojums
- lingvistiskais pamatojums

**PROPOSED_DA nav automātiski OWNER apstiprināts.**

---

## 10. OBLIGĀTIE VALIDATORI (papildus Luna)

```bash
node scripts/validate-kurss.js --lang=da
node scripts/verify-da-de-compliance.js
node --check data/da/courseLessons.js
node --check data/da/courseTrainingCards.js
```

Mirror: `data/da/` ↔ `www/data/da/`

---

## 11. FAILI (READ-ONLY izvade)

| Fails | Saturs |
|-------|--------|
| `reports/da-kurss-full-audit.md` | Galvenā atskaite |
| `reports/temp/da-kurss-full-audit.json` | Mašīnlasāms kopsavilkums |
| `reports/temp/da-kurss-full-audit-luna/` | Luna batch JSON + findings |

Pēc audita (ja findings > 0) automātiski ģenerēt OWNER review (A1/A2 pattern):

- `reports/da-kurss-owner-review-GITHUB.md`
- `reports/da-kurss-owner-decisions*.md`
- `reports/da-kurss-owner-accepted*.md`

---

## 12. GALA ATSKAITE

### COVERAGE

- lessons / extra topics / training cards / DA fields

### LINGUISTIC FINDINGS

- CRITICAL / HIGH / MEDIUM / LOW / total

### TECHNICAL

- syntax, structure, IDs/order, DE changes, placeholders, foreign remnants, mirror

### FINAL STATUS

**PASS** tikai ja:

- coverage = 100%
- CRITICAL = HIGH = MEDIUM = LOW = 0
- placeholders = 0
- foreign remnants = 0
- DE changes = 0
- syntax/structure/mirror = PASS

Citādi: **NEEDS OWNER REVIEW** + findings tabula.

---

## 13. AIZLIEGTS

- automātiski labot atrastās kļūdas
- mainīt DE
- kopēt LV tekstu kā DA
- refactorēt ID/secību
- pasludināt PASS bez pilna Luna audita
- production changes audita ietvaros

---

## 14. IETEICAMAIS WORKFLOW (Cursor agent)

```
CURRENT PRODUCTION
  → deterministiski (validate-kurss, DE parity, mirror, syntax)
  → 100% GPT-5.6 Luna audit (lessons batched)
  → findings validācija
  → OWNER review pack (ja NEEDS OWNER REVIEW)
  → 0 unresolved findings
  → PASS
```

**Zars:** `cursor/da-kurss-full-audit-fffe`  
**Skripti (jāizveido):** `scripts/audit-da-kurss-full.js`, `scripts/run-da-kurss-full-audit.js`

---

## 15. SAISTĪTIE DOKUMENTI

- `PROJECT_LANGUAGE_MASTER_STANDARD.md` — §5.1 fictional names, §7.10 Kurss lingvistiskās pārbaudes
- `reports/da-ui-full-localization-audit.md` — UI/renderer konteksts
- CS paraugs: `scripts/build-cs-kurss-full-audit-report.js`
- Verbs paraugs: `scripts/audit-da-verbs-final-post-repair.js`
