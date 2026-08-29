# Fāze 1 — Pilns READ-ONLY Discovery (320 scope)

**Statuss:** `PHASE_0_INFRASTRUCTURE_COMPLETION_REQUIRED` — spec apstiprināta; F0-COMP-1…15 nav izpildīts; Fāze 1 discovery nav sākts  
**Saistīts ar:** `MASTER_1.12_BINDING_WORK_AGREEMENT.md` §D, §I, §J  
**Priekšnosacījums (secīgi):**

1. `PHASE_0_COMPLETE` uz `origin/main` (F0-1…F0-8 PASS — bridge u.c.)
2. `PHASE_0_INFRASTRUCTURE_COMPLETION` (F0-COMP-1…F0-COMP-15 PASS — §10)
3. Tikai tad — Fāzes 1 READ-ONLY discovery izpilde

**Režīms:** READ-ONLY — bez production apply, bez Crowdin import uz `data/` vai `www/`, bez repair

------------------------------------------------------------------------

## 0. OWNER apstiprinājums (2026-08-29)

OWNER apstiprina sākt **Fāzi 1 — pilnu READ-ONLY Discovery** visam verificētajam 320 scope:

| Grupa | Scope vienības | Apraksts |
|-------|---------------:|----------|
| G1 | 96 | 3 dataseti × 32 valodas |
| G2 | 192 | 6 līmeņi × 32 valodas |
| G3 | 32 | 1 datasets × 32 valodas |
| **Kopā** | **320** | |

**Sākotnējie 42 122 deterministiskie findings** (Fāzes 0 baseline) ir **kandidāti**, nevis automātiski OWNER apstiprinātas kļūdas.

**Fāze 2 nav apstiprināta.** Šī specifikācija neļauj sākt Crowdin round, apply vai repair.

------------------------------------------------------------------------

## 1. Mērķis un exit criteria

### 1.1 Mērķis

No verificēta `origin/main` iegūt **pilnu CURRENT stāvokļa karti** visām 320 scope vienībām:

1. deterministiskie kolektori (struktūra, DE, mirror, inventory, multi-translation, G3 `legacyHtml`);
2. Luna lingvistiskais READ-ONLY audits (`gpt-5.6-luna`);
3. findings validācija un klasifikācija (F1-6);
4. OWNER-PREP pakotne apjoma lēmumam par Fāzi 2 (ja `VALIDATED_FINDINGS > 0`).

### 1.2 Scope skaitītāji (normatīvi, atsevišķi)

| Skaitītājs | Vērtība | Aprēķins / nozīme |
|------------|--------:|-------------------|
| `EXPECTED_SCOPE` | **320** | G2(192) + G1(96) + G3(32) |
| `NOT_APPLICABLE` | **2** | `g1/training/lv`, `g1/training/et` |
| `LUNA_APPLICABLE` | **318** | `EXPECTED_SCOPE − NOT_APPLICABLE` |
| `INVENTORY_APPLICABLE` | **309** | Visi scope, kur `lang ≠ lv` un nav `EXPECTED_NOT_APPLICABLE` |
| `MULTI_SCAN_APPLICABLE` | **309** | Identisks `INVENTORY_APPLICABLE` (LV master + N/A izslēgti) |

```text
INVENTORY_APPLICABLE = 320 − 10 (lang=lv) − 1 (g1/training/et, jau N/A)
                     = 309

LUNA_APPLICABLE      = 320 − 2 (NOT_APPLICABLE)
                     = 318
```

**Aizliegts** jaukt šos skaitītājus vienā vārtā vai denominatorī.

### 1.3 Exit criteria (Fāze 1 DONE)

| Metrika | Prasība |
|---------|---------|
| `DETERMINISTIC_SCOPE_COVERAGE` | 100% (`PROCESSED = 320/320`) |
| `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE` | 100% (`309/309` applicable) |
| `MULTI_TRANSLATION_SCAN_COVERAGE` | 100% (`309/309` applicable) |
| `LUNA_AUDIT_SCOPE_COVERAGE` | 100% (`318/318` applicable) |
| `PRODUCTION_DIFF` | 0 |
| `DE_CHANGES` | 0 |
| `LUNA_CALLS` | > 0 (obligāts Phase 1), bet **tikai READ-ONLY** |
| OWNER-PREP pakotne | gatava, ja `VALIDATED_FINDINGS > 0` |
| OWNER Fāze 2 apstiprinājums | **nav dots** — tikai apjoma karte |

### 1.4 F1 vārti (exit matrix)

| Gate | Denominator / ievade | PASS kritērijs | FAIL kritērijs |
|------|----------------------|----------------|----------------|
| **F1-1** | `origin/main`, branch HEAD | Baseline PASS (F0-5): DE diff = 0, active unmerged closure = 0 | Jebkurš F0-5 baseline check FAIL |
| **F1-2** | `EXPECTED_SCOPE = 320` | `PROCESSED = 320`; katrs `scopeId` ir `summary[]` rindā; 2 rindas ar `applicability = EXPECTED_NOT_APPLICABLE` | `PROCESSED < 320`, trūkstošs `scopeId`, vai N/A nav matricā |
| **F1-3** | `INVENTORY_APPLICABLE = 309` | Katram applicable scope: `inventoryCoverage = 1.0` un `unmappedMainTranslationFields = 0` | Jebkurš applicable scope ar `inventoryCoverage < 1.0` vai `unmappedMainTranslationFields > 0`; `lang=lv` scope netiek skaitīts pret 309 |
| **F1-4** | `MULTI_SCAN_APPLICABLE = 309` | Katram applicable scope: `multiScanCoverage = 1.0` un `multiScanObjectsScanned = multiScanObjectsExpected` | Jebkurš applicable scope ar nepilnu multi-scan; G1 verbs / G3 bez F0-COMP |
| **F1-5** | `LUNA_APPLICABLE = 318` | Katram applicable scope: `lunaStatus = PASS`, `objectsReturned = objectsExpected`, `attemptCount ≤ 3` | Jebkurš batch ar izsmeltiem retry; partial response; implicit PASS; `objectsReturned ≠ objectsExpected` |
| **F1-6** | Visi raw findings | `schemaValid = 100%`, `classificationStatus` definēts visiem, `unclassifiedCount = 0` | Jebkurš schema-invalid vai neklasificēts finding; dedup konflikts bez rezolūcijas |
| **F1-7** | Branch vs `origin/main` | `git diff` tukšs visos aizliegtajos ceļos (§9.1) | Jebkura izmaiņa `data/`, `www/data/`, `languages/`, `crowdin/content/` |
| **F1-8** | `VALIDATED_FINDINGS` pēc F1-6 | Ja `VALIDATED_FINDINGS > 0`: pilna `phase1-full` OWNER-PREP (§8) + `PRE_BACKLOG_HISTORY_GATE = PASS` | Trūkst OWNER artefaktu; PRE_BACKLOG FAIL; aktivizēts pie `TOTAL_FINDINGS > 0` bet `VALIDATED_FINDINGS = 0` |
| **F1-9** | F1-1…F1-8 | `phase1-exit.json` satur **visu** vārtu statusu, skaitītājus, SHA, timestamp; `phase1-exit.md` cilvēkam lasāms kopsavilkums | Trūkst kāda vārta; neskaidri PASS/FAIL; neatbilst F1-1…F1-8 faktiskajam stāvoklim |

**Verifikācija:**

```bash
npm run i18n:content:phase1-exit    # (jāievieš) F1-1…F1-9 matrica
```

------------------------------------------------------------------------

## 2. Scope inventārs (320)

### 2.1 Aprēķins

```text
G2: 6 līmeņi (a1,a2,b1,b2,c1,c2) × 32 valodas = 192
G1: 3 dataseti (sentences, verbs, training) × 32 valodas = 96
G3: 1 datasets (courseLessons) × 32 valodas = 32
KOPĀ = 320
```

Avots: `scripts/lib/content-discovery/discovery-scope.js` → `buildExpectedDiscoveryScopes()`.

Valodas: `UI_LANGUAGES` (32) no `scripts/lib/ui-crowdin-bridge.js`.

### 2.2 Stable scope ID

Formāts: `{group}/{dataset}/{lang}` — **vienīgais** identifikators visā specifikācijā.

Piemēri: `g2/a1/et`, `g1/sentences/da`, `g3/courseLessons/cs`.

**Aizliegts** lietot `scopeKey` vai citus alternatīvus identifikatorus reportos, progress failos vai matricā.

### 2.3 NOT_APPLICABLE scope (dokumentēti izņēmumi)

| scopeId | Iemesls | Deterministic | Luna | Inventory | Multi-scan |
|---------|---------|:-------------:|:----:|:---------:|:----------:|
| `g1/training/lv` | LV embedded `www/ui.js`, nav `courseTrainingCards.js` | N/A | N/A | N/A | N/A |
| `g1/training/et` | Nav `data/et/courseTrainingCards.js` | N/A | N/A | N/A | N/A |

Abas rindas **obligāti** ir F1-2 matricā ar `applicability = EXPECTED_NOT_APPLICABLE` un `verdict = NOT_APPLICABLE`.

### 2.4 Scope klases un denominatori

| Klase | Skaits | Iekļaušanas noteikums |
|-------|-------:|----------------------|
| `EXPECTED_SCOPE` | 320 | Visi `buildExpectedDiscoveryScopes()` objekti |
| `NOT_APPLICABLE` | 2 | `TRAINING_NOT_APPLICABLE_LANGS` + failu neesamība |
| `LUNA_APPLICABLE` | 318 | `EXPECTED_SCOPE − NOT_APPLICABLE` |
| `INVENTORY_APPLICABLE` | 309 | `lang ≠ lv` un nav `EXPECTED_NOT_APPLICABLE` |
| `MULTI_SCAN_APPLICABLE` | 309 | Identisks inventory (LV master nav skanējams) |

**LV master (`lang = lv`):** 10 scope vienības — strukturāli apstrādātas F1-2, bet **ne** F1-3/F1-4 denominatorī.

### 2.5 Scope inventāra fails (mašīnlasāms)

Implementācijā ģenerēt (F0-COMP-7):

`reports/phase1-scope-inventory.json`

```json
{
  "expectedScope": 320,
  "uniqueScopeIds": 320,
  "notApplicable": ["g1/training/lv", "g1/training/et"],
  "lunaApplicable": 318,
  "inventoryApplicable": 309,
  "multiScanApplicable": 309,
  "byGroup": { "g1": 96, "g2": 192, "g3": 32 },
  "scopes": [{
    "scopeId": "g2/a1/lv",
    "group": "g2",
    "dataset": "a1",
    "lang": "lv",
    "applicability": "LV_MASTER",
    "inventoryApplicable": false,
    "multiScanApplicable": false,
    "lunaApplicable": true
  }]
}
```

------------------------------------------------------------------------

## 3. Datu ceļi un avoti

Mantot no `PHASE_0_CROWDIN_DISCOVERY_SPEC.md` §2.2:

| Grupa | LV master | Target |
|-------|-----------|--------|
| G2 | `data/{level}.js` | `data/{lang}/{level}.js` |
| G1 sentences | `data/sentences.js` | `data/{lang}/sentences.js` |
| G1 verbs | `data/verbs.js` | `data/{lang}/verbs.js` |
| G1 training | `www/ui.js` (LV embedded) | `data/{lang}/courseTrainingCards.js` |
| G3 | `data/courseLessons.js` | `data/{lang}/courseLessons.js` |

Mirror: `www/data/...` — obligāta parity pārbaude.

### 3.1 G3 Phase 1 apjoms (OWNER lēmums R-018)

**Ietver Phase 1:**

- deterministisku `COURSE_LESSON_DATA` discovery (L8–L21 strukturētie lauki);
- pilnu G3 `legacyHtml` teksta mezglu skenēšanu atbilstoši MASTER §5.4.

**Neietver Phase 1 (atlikts uz Phase 3 / G3 closure):**

- G3 LIVE/runtime testi;
- browser closure;
- FLIP/NEXT/runtime smoke vārti.

Atsauce: MASTER §5.3, §11.12 — LIVE obligāts tikai Kurss **closure**, ne §D discovery.

------------------------------------------------------------------------

## 4. Kolektoru matrica (katram scope)

### 4.1 Obligātie deterministiskie kolektori

| Kolektors | Modulis | G2 | G1 sent | G1 verbs | G1 train | G3 | LV |
|-----------|---------|:--:|:-------:|:--------:|:--------:|:--:|:--:|
| Structural parity | `collectors/structural.js` | ✓ | ✓ | ✓ | ✓* | ✓ | ✓ |
| DE compliance | `collectors/de-compliance.js` | ✓ | — | — | — | — | — |
| Mojibake | `collectors/mojibake-mirror.js` | ✓ | ✓ | ✓ | ✓† | ✓ | — |
| Mirror sync | `collectors/mojibake-mirror.js` | ✓ | ✓ | ✓ | ✓† | ✓ | — |
| Foreign remnants | `collectors/remnants.js` | ✓ | — | — | — | — | — |
| MAIN_TRANSLATION_FIELD_INVENTORY | `main-translation-field-inventory.js` | ✓ | ✓ | ✓‡ | ✓† | ✓ | — |
| MULTI_TRANSLATION_SCAN | `collectors/multi-translation.js` | ✓ | ✓ | ✓‡ | ✓† | ✓ | — |
| `legacyHtml` text-node scan | `collectors/g3-legacy-html.js` (jauns) | — | — | — | — | ✓ | — |

\* `g1/training/lv` un `g1/training/et` → `EXPECTED_NOT_APPLICABLE`  
† Tikai ja `courseTrainingCards.js` eksistē  
‡ G1 verbs — paplašināts inventory/multi-scan (§4.6)

### 4.2 Fāzes 0 completion — infrastruktūras gaps (pirms Fāzes 1)

Šie gaps nav Fāzes 1 implementācija — tie ir **Fāzes 0 infrastructure completion** (§10, `F0-COMP-1…15`).

| Gap | Pašreizējais stāvoklis | F0 completion prasība | F0-COMP |
|-----|------------------------|----------------------|---------|
| G1 verbs multi-translation | Nav `collectG1VerbsMultiTranslation` | Implementēt, 32 scope | F0-COMP-1 |
| G3 multi-translation + inventory | Nav G3 inventory scan | `collectG3MultiTranslation` | F0-COMP-1 |
| G1 training inventory (30 lang) | Tikai structural | Inventory + multi-scan kur fails eksistē | F0-COMP-1 |
| G3 `legacyHtml` scan | Structural izslēdz `legacyHtml` | Pilns text-node scan §5.4 | F0-COMP-2 |
| G1 verbs inventory paths | G2/sentence-oriented | Verb form paths §4.6 | F0-COMP-3 |
| F1-6 validation module | Nav | `phase1-findings-validation.js` | F0-COMP-4 |
| Dedup policy | Nav | §4.5 | F0-COMP-5 |
| PRE_BACKLOG_HISTORY_GATE | Tikai dataset auditos | Phase 1 orchestrator integrācija | F0-COMP-6 |
| `phase1-scope-inventory.json` | Nav ģeneratora | §2.5 | F0-COMP-7 |
| Coverage gates | Nav | `evaluateInventoryCoverage()`, `evaluateLunaCoverage()` | F0-COMP-8 |
| Luna integrācija | Nav `run-content-discovery.js` | `--with-luna` + adapters | F0-COMP-10 |
| Phase 1 exit script | Nav | `run-phase1-exit-matrix.js` | F0-COMP-12 |
| OWNER-PREP module key | Nav `phase1-full` hook | `audit-post-run.js` + publisher | F0-COMP-13 |

### 4.3 Finding formāts (vienots)

```json
{
  "auditId": "DISC-G2-A1-ET-0042",
  "findingStableId": "g2/a1/et|sprechen|lv|MULTIPLE_TRANSLATIONS_DETECTED|deterministic/multi-translation-scan",
  "dedupKey": "g2|a1|sprechen|lv|MULTIPLE_TRANSLATIONS_DETECTED",
  "scopeId": "g2/a1/et",
  "group": "g2",
  "dataset": "a1",
  "lang": "et",
  "cardId": "sprechen",
  "fieldPath": "lv",
  "severity": "HIGH",
  "category": "MULTIPLE_TRANSLATIONS_DETECTED",
  "classificationStatus": "VALIDATED_REAL_FINDING",
  "productionFile": "data/et/a1.js",
  "current": "rääkima • vestlema",
  "de": "sprechen",
  "proposed": null,
  "source": "deterministic/multi-translation-scan",
  "lunaVerdict": null
}
```

**Finding Stable ID (normatīvs):**

```text
findingStableId = {scopeId}|{cardId}|{fieldPath}|{category}|{source}
```

**Dedup atslēga (normatīva, semantiskā):**

```text
dedupKey = {group}|{dataset}|{cardId}|{fieldPath}|{category}
```

Luna finding papildinājums:

```json
{
  "source": "gpt-5.6-luna",
  "lunaVerdict": "VALIDATED_REAL_FINDING",
  "confidence": "HIGH",
  "proposedNative": "..."
}
```

**Aizliegts:** automātiski pārvērst `proposed` / Luna ieteikumu par OWNER lēmumu vai production izmaiņu.

### 4.4 F1-6 findings validācijas shēma

Katram findingam pēc agregācijas obligāti:

| Lauks | Obligāts | Validācija |
|-------|:--------:|------------|
| `auditId` | ✓ | Unikāls string, ne tukšs |
| `findingStableId` | ✓ | §4.3 formāts |
| `dedupKey` | ✓ | §4.3 formāts |
| `scopeId` | ✓ | `{group}/{dataset}/{lang}` |
| `source` | ✓ | `deterministic/*` vai `gpt-5.6-luna` |
| `category` | ✓ | MASTER atļautā kategorija |
| `severity` | ✓ | CRITICAL/HIGH/MEDIUM/LOW/INFO |
| `classificationStatus` | ✓ | Skat. zemāk |
| `cardId` | ✓* | *Izņēmums: aggregate `legacyHtml` node ar `nodePath` |
| `fieldPath` | ✓ | Precīzs lauks vai `legacyHtml` node path |
| `current` | ✓ | String vai dokumentēts tukšums ar iemeslu |

**Atļautie `classificationStatus`:**

| Statuss | Ietver OWNER-PREP? |
|---------|:------------------:|
| `VALIDATED_REAL_FINDING` | ✓ |
| `OWNER_DECISION_REQUIRED` | ✓ |
| `SOURCE_LV_ISSUE` | ✓ (informācija) |
| `DE_SOURCE_ISSUE` | ✓ (informācija) |
| `FALSE_POSITIVE` | ✗ |
| `STYLE_ONLY` | ✗ |
| `PROJECT_CONVENTION` | ✗ |
| `NEEDS_REVIEW` | ✓ |
| `PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE` | ✗ (history) |
| `UNCLASSIFIED` | **aizliegts** — F1-6 FAIL |

**F1-6 PASS:** `schemaErrors = 0`, `unclassifiedCount = 0`, `validatedCount + excludedCount = totalRawFindings`.

**F1-6 FAIL:** jebkurš schema-invalid lauks; `classificationStatus` trūkst vai = `UNCLASSIFIED`; dedup bez `canonicalFindingId`.

### 4.5 Deterministiskā un Luna deduplikācija

Secība (normatīva):

```text
1. Normalizēt fieldPath (trim, collapse whitespace)
2. Aprēķināt dedupKey (§4.3)
3. Ja deterministic + Luna ar vienādu dedupKey:
   a. Saglabāt deterministic finding kā canonical
   b. Luna finding → classificationStatus = FALSE_POSITIVE vai pievienot lunaVerdict pie canonical
   c. Nedublēt OWNER backlog
4. Ja path-family semantiskā saime (MASTER §7.13.1):
   a. Salīdzināt ar semantic registry
   b. Ja tas pats issue family → PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE
5. Ierakstīt canonicalFindingId visiem merged findings
```

**Aizliegts:** divi `VALIDATED_REAL_FINDING` ar identisku `dedupKey` OWNER-PREP.

### 4.6 G1 verbs inventory un multi-scan ceļi

Balstīts uz `flatten-g1-verbs.js` → `VERB_FORMS`:

| Forma | Inventory `fieldPath` | Multi-scan |
|-------|----------------------|:----------:|
| `infinitiv` | `{form}.lv` (piem. `infinitiv.lv`) | ✓ |
| `praesens` | `praesens.lv` | ✓ |
| `imperfektIndikativ` | `imperfektIndikativ.lv` | ✓ |
| `imperfektKonjunktiv` | `imperfektKonjunktiv.lv` | ✓ |
| `partizipVergangenheit` | `partizipVergangenheit.lv` | ✓ |

`cardId` = verb slug no `infinitiv.de` (`slugify`).

Katram verb entry ar vismaz vienu ne-tukšu `.lv` formu obligāti jāskanē visi 5 ceļi; tukšas formas dokumentē kā `emptyByDesign` inventory statistikā, bet **ne** kā unmapped.

### 4.7 G3 `legacyHtml` deterministiskais kolektors

Katram `legacyHtml` laukam (MASTER §5.4):

1. Nolasīt **pilnu** production lauku no `data/{lang}/courseLessons.js`;
2. Parsēt / ekstrahēt visus learner-facing teksta mezglus;
3. Katram mezglam pārbaudīt: source remnants, LV remnants, mixed-language, placeholders, mojibake, tukšs saturs;
4. Finding `fieldPath` = `legacyHtml.{lessonKey}.{nodePath}` (piem. `legacyHtml.L3.section2.p`);
5. `cardId` = lesson key (`L1`…`L21`);
6. Plašs parent finding **nevar** aizstāt granular scan.

**Nav** Phase 1: browser render, FLIP, NEXT (§3.1).

------------------------------------------------------------------------

## 5. Luna lingvistiskais audits

### 5.1 Modelis un autentifikācija

| Parametrs | Vērtība |
|-----------|---------|
| Modelis | `gpt-5.6-luna` |
| API atslēga | `OPENAI_API_KEY` (nav atsevišķas `LUNA_API_KEY`) |
| Bibliotēka | `openai` npm (`scripts/lib/openai-luna-*.js`) |
| Režīms | READ-ONLY — tikai findings, ne apply |

### 5.2 Scope coverage

Luna obligāti katram **LUNA_APPLICABLE** scope (318), izņemot `EXPECTED_NOT_APPLICABLE`.

| Grupa | Luna adapter | Objektu bloks |
|-------|--------------|---------------|
| G2 | `openai-luna-full-audit.js` pattern | flashcards / level |
| G1 sentences | `luna-g1-sentences.js` (jauns) | 796 teikumi |
| G1 verbs | `luna-g1-verbs.js` (jauns) | 189 darbības vārdi × formas |
| G1 training | `luna-g1-training.js` (jauns) | lesson decks (kur fails eksistē) |
| G3 | `luna-g3-lessons.js` (jauns) | structured L8–L21 native lauki |

**MASTER §7.14:** Luna coverage = 100% nozīmē, ka visi objekti tika **nosūtīti** un **katram ir explicit rezultāts** atbildē.

### 5.3 Batch politika (OWNER lēmums R-019; precizēts post-#688)

**Normatīvā Luna batch hierarhija** (saskaņota ar MASTER `§7.31`; dataset-specific limits prioritāri pār grupas limitu; nedrīkst mainīt izpildes laikā bez OWNER lēmuma):

| Scope / dataset | `batchSizeConfigured` | Objekta vienība |
| ----------------- | --------------------: | ---------------- |
| G2 ordinary cards | 25 | viena flashcard |
| G2 `minimalStudy` | 10 | viens Study objekts (nedalāms) |
| G2 `standardStudy` | 5 | viens Study objekts (nedalāms) |
| G1 `sentences` | 25 | pilns teikuma objekts |
| G1 `verbs` | 10 | pilns verba objekts (5 formas kopā) |
| G1 `courseTrainingCards` | 50 | pilns training-card objekts |
| G3 `courseLessons` | 20 | pilns lesson objekts |

**Noteikumi:**

- specifiskais dataset limits vienmēr ir prioritārs pār vispārīgu grupas limitu;
- verba objekta piecas formas nedrīkst sadalīt starp batchiem;
- Study objekts nedrīkst tikt sadalīts starp batchiem;
- mazāks pēdējais batch ir atļauts;
- lielāks batch par tabulā noteikto ir **aizliegts**;
- batch limits **nemaina** prasību auditēt 100% objektu.

Katram scope un batch obligāti ierakstīt matricā:

- `scopeId`
- `batchId`
- `batchSizeConfigured`
- `objectsExpected`
- `objectsReturned`
- `attemptCount`

Progress faili: `scripts/.phase1-luna-{scopeId}-progress.json` (gitignored)  
Raw Luna: `reports/temp/phase1-luna/{scopeId}/raw-{batchId}.json`  
Idempotence: `--fresh-luna` dzēš cache; `--resume-luna` turpina no pēdējā veiksmīgā batch

### 5.4 Timeout, retry un FAIL politika (OWNER lēmums R-021)

| Parametrs | Vērtība |
|-----------|--------|
| Viena API mēģinājuma timeout | **180 sekundes** |
| Maksimālais mēģinājumu skaits vienam batch | **3** kopā |
| Retry pēc sākotnējā mēģinājuma | ne vairāk par **2** |
| Backoff | **5 s**, pēc tam **15 s** |
| Batch maksimālais wall-clock | **10 minūtes** |

**Retry aktivizē:** malformed JSON, timeout, API kļūda, partial response, `objectsReturned ≠ objectsExpected`.

**Pēc 3. neveiksmīgā mēģinājuma:** batch = `FAIL`, scope = `FAIL`, **F1-5 = FAIL**.

**Aizliegts** turpināt līdz gala Phase 1 PASS ar nepilnu Luna coverage.

### 5.5 Explicit rezultāts katram objektam (OWNER lēmums R-020)

Katram uz Luna nosūtītajam objektam obligāti jābūt explicit ierakstam atbildes `items` masīvā.

Ja `objectsReturned !== objectsExpected` vai trūkst kaut viena nosūtītā objekta ID:

- batch ir nederīgs;
- retry pēc §5.4;
- pēc retry izsmelšanas scope = `FAIL`, F1-5 = `FAIL`.

**Implicit PASS aizliegts.** Esošā `openai-luna-full-audit.js` compact mode (kartes ārpus atbildes → PASS) **nedrīkst** tikt izmantota Phase 1 bez pārveides.

### 5.6 Luna klasifikācija

| Verdict | Nozīme | `classificationStatus` |
|---------|--------|------------------------|
| `PASS` | Nav lingvistiskas kļūdas | (nav finding) |
| `VALIDATED_REAL_FINDING` | Kandidāts OWNER backlog | `VALIDATED_REAL_FINDING` |
| `SOURCE_LV_ISSUE` | LV/DE avota jautājums | `SOURCE_LV_ISSUE` |
| `DE_SOURCE_ISSUE` | DE avota jautājums | `DE_SOURCE_ISSUE` |
| `STYLE_ONLY` | Nav kvalitātes finding | `STYLE_ONLY` |
| `PROJECT_CONVENTION` | Learning First u.c. | `PROJECT_CONVENTION` |
| `NEEDS_REVIEW` | Nepietiekama pārliecība | `NEEDS_REVIEW` |

**Aizliegts:** automātiski izlaist `NEEDS_REVIEW` kā PASS.

### 5.7 Token un izmaksu statistika

Katram Phase 1 run obligāti `reports/phase1-luna-stats.json`:

```json
{
  "scopeId": "g2/a1/et",
  "requestCount": 29,
  "batchCount": 29,
  "inputTokens": 0,
  "outputTokens": 0,
  "totalTokens": 0,
  "cachedInputTokens": 0,
  "reasoningTokens": 0,
  "retryCount": 0,
  "retryReasons": {}
}
```

Konsolidēts kopsavilkums `phase1-exit.json` → `lunaStats.totals`.

### 5.8 Resume, idempotency un item coverage pierādījums

Katram `scopeId` matricā obligāti:

- `lunaObjectsExpected` — skaitīts pirms nosūtīšanas;
- `lunaObjectsReturned` — skaitīts pēc validācijas;
- `lunaObjectIdsSent[]` — hash vai count + checksum;
- `lunaObjectIdsReturned[]` — explicit ID saraksts;
- `lunaCoverageProof = (lunaObjectsReturned === lunaObjectsExpected && missingIds.length === 0)`.

`--resume-luna`: turpina tikai no `lastSuccessfulBatchId + 1`; neveiksmīgie batch netiek atzīmēti kā PASS.

### 5.9 Luna atkārtotas izpildes variance (R-013)

| Metrika | Gate? | Noteikums |
|---------|:-----:|-----------|
| Deterministic findings skaits | **Jā** | Divi `--skip-luna` runi → identisks skaits |
| F1-3/F1-4 coverage | **Jā** | Deterministisks |
| Luna `VALIDATED_REAL_FINDING` skaits | **Nē** | Logēt `discovery-stability.js` churn; nav F1 FAIL |
| Luna token usage | **Nē** | Informatīvs |

Phase 1 exit **nedrīkst** būt atkarīgs no Luna finding skaita stabilitātes starp runiem.

------------------------------------------------------------------------

## 6. Orchestrator

### 6.1 Entry point

```bash
# F0 completion / infrastruktūras smoke (F0-COMP-15; bez Luna API)
npm run i18n:content:phase1-discovery -- --skip-luna

# Ekvivalents:
node scripts/run-phase1-discovery.js \
  --all-groups \
  --dataset all \
  --all-langs \
  --skip-luna

# Pilns Phase 1 discovery (deterministic + Luna) — TIKAI pēc PHASE_0_COMPLETION_PASS
npm run i18n:content:phase1-discovery -- --with-luna
```

### 6.2 Izpildes secība

**Priekšnosacījums:** `PHASE_0_INFRASTRUCTURE_COMPLETION = PASS` (§10, F0-COMP-1…15).

```text
1. git fetch origin
2. BASELINE GATE (mantot F0-5)
3. Build / verify scope inventory (320) → phase1-scope-inventory.json
4. For each scopeId in deterministic order (G2→G1→G3, dataset alpha, lang alpha):
   a. Record matrix row (visi 320, ieskaitot N/A)
   b. If EXPECTED_NOT_APPLICABLE → mark N/A, skip collectors
   c. Else run all applicable deterministic collectors (§4.1)
   d. Record inventory + multi-scan coverage per scope
   e. If --with-luna and lunaApplicable → run Luna adapter (§5)
   f. Aggregate findings + stats into matrix row
5. Run F1-6 findings validation (§4.4) + dedup (§4.5)
6. PRE_BACKLOG_HISTORY_GATE (§8.3) — discovery-stability.js
7. OWNER-PREP (ja VALIDATED_FINDINGS > 0)
8. Write reports (§7)
9. Run phase1-exit-matrix → F1-1…F1-9
10. Exit 1 if any F1 gate FAIL; 0 if PHASE_1_COMPLETE candidate
```

### 6.3 Determinisms

- Scope secība fiksēta (alfabētiska pēc `scopeId`)
- Timestamps (`generatedAt`) nedrīkst ietekmēt gate PASS/FAIL
- Divi secīgi `--skip-luna` runi → identisks deterministic findings skaits
- Luna runi var atšķirties LLM stochastikā — §5.9

------------------------------------------------------------------------

## 7. Artefakti

### 7.1 Obligātie izvades faili

| Fails | Mērķis |
|-------|--------|
| `reports/phase1-scope-inventory.json` | 320 scope mašīnlasāms inventārs |
| `reports/phase1-discovery-matrix.json` | Konsolidēta matrica + findings |
| `reports/phase1-discovery-READONLY.md` | Cilvēkam lasāma atskaite |
| `reports/phase1-exit.json` | F1-1…F1-9 gate matrica (pilna) |
| `reports/phase1-exit.md` | Exit kopsavilkums |
| `reports/phase1-luna-stats.json` | Luna token/retry statistika |
| `reports/phase1-owner-prep/` | OWNER-PREP pakotne (ja `VALIDATED_FINDINGS > 0`) |

### 7.2 Matricas shēma (paplašinājums pret F0)

**Piemērs A — F0 completion (`PHASE_0_COMPLETION_PASS`; F0-COMP-15 smoke ar `--skip-luna`):**

```json
{
  "phase": 1,
  "status": "PHASE_0_COMPLETION_PASS",
  "originMainSha": "...",
  "masterVersion": "1.12",
  "ownerDecisionRef": "OWNER-APPROVED-2026-08-29",
  "scope": {
    "expected": 320,
    "processed": 320,
    "notApplicable": 2,
    "lunaApplicable": 318,
    "inventoryApplicable": 309,
    "multiScanApplicable": 309
  },
  "gates": {
    "F1-1": "PASS",
    "F1-2": "PASS",
    "F1-3": "PASS",
    "F1-4": "PASS",
    "F1-5": "NOT_RUN",
    "F1-6": "NOT_RUN",
    "F1-7": "PASS",
    "F1-8": "NOT_RUN",
    "F1-9": "PASS"
  },
  "coverage": {
    "deterministic": "320/320",
    "mainTranslationFieldInventory": "309/309",
    "multiTranslationScan": "309/309",
    "lunaAudit": "NOT_RUN"
  },
  "summary": [{
    "scopeId": "g2/a1/et",
    "applicability": "APPLICABLE",
    "structuralIssues": 0,
    "inventoryCoverage": 1.0,
    "unmappedMainTranslationFields": 0,
    "multiScanCoverage": 1.0,
    "lunaProcessed": false,
    "lunaObjectsExpected": 0,
    "lunaObjectsReturned": 0,
    "findingsDeterministic": 42,
    "findingsLuna": 0,
    "findingsValidated": 0,
    "verdict": "INFRASTRUCTURE_SMOKE_PASS"
  }],
  "totals": {
    "findingsRaw": 42125,
    "findingsValidated": 0,
    "findingsExcluded": 0
  },
  "constraints": {
    "productionChanges": 0,
    "deChanges": 0,
    "lunaCalls": 0,
    "crowdinProductionImport": 0,
    "translationApply": 0
  }
}
```

**Piemērs B — pabeigta Fāze 1 (`PHASE_1_COMPLETE`; pēc `--with-luna` discovery):**

```json
{
  "phase": 1,
  "status": "PHASE_1_COMPLETE",
  "originMainSha": "...",
  "masterVersion": "1.12",
  "ownerDecisionRef": "OWNER-APPROVED-2026-08-29",
  "scope": {
    "expected": 320,
    "processed": 320,
    "notApplicable": 2,
    "lunaApplicable": 318,
    "inventoryApplicable": 309,
    "multiScanApplicable": 309
  },
  "gates": {
    "F1-1": "PASS",
    "F1-2": "PASS",
    "F1-3": "PASS",
    "F1-4": "PASS",
    "F1-5": "PASS",
    "F1-6": "PASS",
    "F1-7": "PASS",
    "F1-8": "PASS",
    "F1-9": "PASS"
  },
  "coverage": {
    "deterministic": "320/320",
    "mainTranslationFieldInventory": "309/309",
    "multiTranslationScan": "309/309",
    "lunaAudit": "318/318"
  },
  "summary": [{
    "scopeId": "g2/a1/et",
    "applicability": "APPLICABLE",
    "structuralIssues": 0,
    "inventoryCoverage": 1.0,
    "unmappedMainTranslationFields": 0,
    "multiScanCoverage": 1.0,
    "lunaProcessed": true,
    "lunaObjectsExpected": 702,
    "lunaObjectsReturned": 702,
    "findingsDeterministic": 42,
    "findingsLuna": 3,
    "findingsValidated": 40,
    "verdict": "NEEDS_OWNER_REVIEW"
  }],
  "totals": {
    "findingsRaw": 42125,
    "findingsValidated": 42100,
    "findingsExcluded": 25
  },
  "constraints": {
    "productionChanges": 0,
    "deChanges": 0,
    "lunaCalls": 318,
    "crowdinProductionImport": 0,
    "translationApply": 0
  }
}
```

### 7.3 Ceļu portabilitāte

Report artefaktos **obligāti repo-relative POSIX ceļi** (piem. `reports/...`, `data/et/a1.js`).

Aizliegts saglabāt VM-absolūtos ceļus (`/workspace/...`) operacionāli lasāmos laukos.

Informatīvs `generatedOnHost` drīkst būt atsevišķā metadata blokā, bet **nevienam gate consumer** to nelasīt.

------------------------------------------------------------------------

## 8. OWNER-PREP pakotne (`phase1-full`)

### 8.1 Kad obligāta

Ja `VALIDATED_FINDINGS > 0` pēc F1-6 validācijas un dedup → obligāta OWNER-PREP (MASTER §7.6, §J.11).

Ja `VALIDATED_FINDINGS = 0` → OWNER-PREP nav obligāta; atskaitē `OWNER REVIEW NOT REQUIRED — VALIDATED FINDINGS 0`.

**Aizliegts** aktivizēt OWNER-PREP tikai pēc `TOTAL_FINDINGS > 0` (ieskaitot `FALSE_POSITIVE`, `STYLE_ONLY`).

### 8.2 Obligātie faili (MASTER §7.6)

Module key: `phase1-full`  
Direktorija: `reports/phase1-owner-prep/`

| Fails | Saturs |
|-------|--------|
| `reports/phase1-full-owner-view.md` | Cilvēkam lasāms — **visi** `VALIDATED_FINDINGS` + `NEEDS_REVIEW` + `OWNER_DECISION_REQUIRED` |
| `reports/phase1-full-owner-decisions.md` | Identisks findingu kopums; sākotnēji `OWNER STATUS = PENDING` |
| `reports/phase1-full-owner-review-GITHUB.md` | GitHub `blob` saites uz visiem artefaktiem |

### 8.3 Katram findingam OWNER VIEW / DECISIONS

Obligātie lauki (MASTER §7.6):

- Audit ID (`auditId`);
- Finding Stable ID (`findingStableId`);
- Dedup key (`dedupKey`);
- Card/lesson/object ID (`cardId`);
- Field/path (`fieldPath`);
- Severity + category;
- `CURRENT`;
- DE/source konteksts (ja vajadzīgs);
- LV MASTER reference (ja vajadzīgs);
- īss problēmas skaidrojums;
- `PROPOSED_*` tikai kā audita ieteikums;
- `source` + report artifact ref;
- vieta OWNER lēmumam.

**OWNER DECISIONS** papildus:

- `OWNER STATUS` (sākotnēji `PENDING`);
- `OWNER_DECISION` / `NEW` (tikai pēc OWNER `LABOT`);
- OWNER piezīme.

Atļautie gala statusi: `LABOT`, `NELABOT`, `FALSE_POSITIVE`, `NEEDS_SOURCE_REVIEW`.

### 8.4 GitHub indekss (`phase1-full-owner-review-GITHUB.md`)

Obligāti `blob` saites uz:

- `reports/phase1-discovery-READONLY.md`
- `reports/phase1-discovery-matrix.json`
- `reports/phase1-exit.json` / `phase1-exit.md`
- `reports/phase1-full-owner-view.md`
- `reports/phase1-full-owner-decisions.md`
- aktuālo darba branch

### 8.5 PRE_BACKLOG_HISTORY_GATE (§7.18)

Implementācija: `scripts/lib/discovery-stability.js` → `validateHistoryGates()`.

Pirms OWNER-PREP:

```text
RAW candidates
    → semantic deduplication (§4.5)
    → RAW audit history comparison
    → OWNER history comparison
    → repair history comparison
    → production history comparison
    → root-cause classification
    → ONLY THEN OWNER backlog
```

OWNER-PREP drīkst ietvert tikai:

- `GENUINELY_NEW_VALIDATED_REAL_FINDING`
- `OWNER_DECISION_REOPEN_REQUIRED`
- `REPAIR_REGRESSION`

Ja `PRE_BACKLOG_HISTORY_GATE = FAIL` → F1-8 = FAIL, OWNER-PREP bloķēts.

### 8.6 Ko OWNER-PREP **nedrīkst** saturēt

- Automātiskus OWNER lēmumus
- Production patch instrukcijas
- Crowdin import komandas uz `data/`
- `FALSE_POSITIVE` / `STYLE_ONLY` kā backlog

------------------------------------------------------------------------

## 9. Aizliegumi (Fāze 1)

### 9.1 F1-7 aizliegtie production ceļi

```bash
git diff --name-only origin/main...HEAD -- \
  data \
  www/data \
  languages \
  crowdin/content
```

Jebkura izmaiņa šajos ceļos → **F1-7 FAIL**.

| # | Aizliegts |
|---|-----------|
| 1 | Production failu maiņa (`data/`, `www/data/`, `languages/`, `crowdin/content/`) |
| 2 | Translation apply vai repair |
| 3 | Crowdin import uz production |
| 4 | Automātiski OWNER lēmumi no findings |
| 5 | Fāzes 2 sākšana |
| 6 | Paralēli dataset repair cikli |
| 7 | `--force-baseline` production workflow |
| 8 | DE lauku maiņa |
| 9 | Luna proposed → production bez OWNER |
| 10 | Atsevišķu batch (piem. tikai G1 sentences) kā Fāzes 1 aizvietotājs |
| 11 | G3 LIVE/runtime testi Phase 1 ietvaros |
| 12 | Implicit Luna PASS (§5.5) |

------------------------------------------------------------------------

## 10. Fāzes 0 completion — infrastruktūra pirms Fāzes 1 (`F0-COMP-1…15`)

**Klasifikācija (MASTER 1.12 saskaņošana):** visi šie soļi ir **PHASE 0 INFRASTRUCTURE COMPLETION BEFORE PHASE 1**, ne Fāzes 1 implementācija un ne Fāzes 1 discovery izpilde.

```text
Fāzes 0 completion
  → visi F0-COMP-1…15 izpildīti un verificēti
  → production changes = 0
  → Fāzes 0 completion PASS
  → tikai tad Fāzes 1 READ-ONLY discovery
```

**F0 completion PASS kritēriji:**

| Metrika | Prasība |
|---------|---------|
| `F0-COMP-1…15` | Visi soļi PASS (§10.1–10.15) |
| `PRODUCTION_DIFF` | 0 |
| `DE_CHANGES` | 0 |
| F0 regression | `npm run i18n:content:phase0-exit` joprojām PASS |

**Aizliegts** sākt pilnu 320 scope + Luna discovery, kamēr `PHASE_0_INFRASTRUCTURE_COMPLETION ≠ PASS`.

### 10.1 F0-COMP-1 — G1 verbs + G3 + G1 training collectors

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/collectors/multi-translation.js`, `registry.js`, `main-translation-field-inventory.js` (G3 hooks) |
| **Tests** | `node scripts/run-content-discovery.js --group g1 --dataset verbs --lang da --skip-luna`; G3 `--group g3 --lang cs` |
| **PASS** | `collectG1VerbsMultiTranslation`, `collectG3MultiTranslation`, G1 training inventory where file exists |
| **FAIL** | Missing collector export; 0 objects scanned where file exists |
| **Fail-safe** | `--skip-luna` partial scope; exit 1 ar skaidru gap ziņu |

### 10.2 F0-COMP-2 — G3 `legacyHtml` text-node collector

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/collectors/g3-legacy-html.js`, `registry.js` |
| **Tests** | Unit: parse sample `legacyHtml`; integration: `g3/courseLessons/da` |
| **PASS** | ≥1 text node per non-empty `legacyHtml`; findings ar `fieldPath` node granularity |
| **FAIL** | Parent-only finding bez node paths |
| **Fail-safe** | Collector error → scope row `legacyHtmlScan = ERROR`, F1-2/F1-4 FAIL |

### 10.3 F0-COMP-3 — G1 verbs inventory field paths

| | |
|---|---|
| **Faili** | `scripts/lib/main-translation-field-inventory.js`, `scripts/lib/content-crowdin-bridge/flatten-g1-verbs.js` (reference) |
| **Tests** | Inventory scan `g1/verbs/da` → 5 forms × 189 verbs mapped |
| **PASS** | `unmappedMainTranslationFields = 0` for applicable verb scopes |
| **FAIL** | Uses G2 `entry.lv` only; misses inflected forms |
| **Fail-safe** | Log unmapped paths; do not silent PASS |

### 10.4 F0-COMP-4 — F1-6 findings validation module

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/phase1-findings-validation.js` |
| **Tests** | `node scripts/test-phase1-findings-validation.js` (jauns) |
| **PASS** | Schema validate §4.4; reject `UNCLASSIFIED` |
| **FAIL** | Missing mandatory field passes through |
| **Fail-safe** | Return `{ valid: false, errors[] }`; orchestrator exit 1 |

### 10.5 F0-COMP-5 — Deterministic + Luna deduplication

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/phase1-findings-dedup.js` |
| **Tests** | Fixture: same `dedupKey` from deterministic + Luna → single canonical |
| **PASS** | §4.5 rules; `canonicalFindingId` assigned |
| **FAIL** | Duplicate `VALIDATED_REAL_FINDING` in output |
| **Fail-safe** | Dedup conflict → F1-6 FAIL with conflict list |

### 10.6 F0-COMP-6 — PRE_BACKLOG_HISTORY_GATE integration

| | |
|---|---|
| **Faili** | `scripts/lib/discovery-stability.js`, `scripts/run-phase1-discovery.js` |
| **Tests** | Mock: `preBacklogReady = false` → OWNER-PREP blocked |
| **PASS** | Gate runs before OWNER-PREP; status in `phase1-exit.json` |
| **FAIL** | OWNER-PREP generated when gate FAIL |
| **Fail-safe** | `BLOCKED: PRE_BACKLOG_HISTORY_GATE` stderr message |

### 10.7 F0-COMP-7 — `phase1-scope-inventory.json` generator

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/phase1-scope-inventory.js`, hook in orchestrator |
| **Tests** | JSON `expectedScope=320`, `inventoryApplicable=309` |
| **PASS** | Matches §2.4 counts; all `scopeId` unique |
| **FAIL** | Count mismatch vs `discovery-scope.js` |
| **Fail-safe** | Exit 1 before discovery loop |

### 10.8 F0-COMP-8 — Coverage gate evaluators

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/phase1-coverage-gates.js` |
| **Tests** | `evaluateInventoryCoverage(matrix)` → 309/309; `evaluateLunaCoverage(syntheticFixture)` → 318/318 (sintētiska fixture, bez Luna API) |
| **PASS** | Correct denominators per §1.2 |
| **FAIL** | Uses 318 for inventory or mixes LV |
| **Fail-safe** | Return `{ pass: false, failures[] }` |

### 10.9 F0-COMP-9 — Repo-relative report paths

| | |
|---|---|
| **Faili** | `scripts/lib/content-discovery/report-builder.js`, phase1 report writers |
| **Tests** | Grep reports for `/workspace/` → 0 matches in operational fields |
| **PASS** | All paths POSIX repo-relative |
| **FAIL** | Absolute VM paths in matrix |
| **Fail-safe** | Path normalizer in report-builder |

### 10.10 F0-COMP-10 — Luna adapters (G2 reuse, G1/G3 jauni)

| | |
|---|---|
| **Faili** | `scripts/lib/luna-g1-sentences.js`, `luna-g1-verbs.js`, `luna-g1-training.js`, `luna-g3-lessons.js`; patch `openai-luna-full-audit.js` (no implicit PASS) |
| **Tests** | Dry mock batch: `objectsReturned === objectsExpected` |
| **PASS** | §5.3–5.5 contract; per-group batch sizes |
| **FAIL** | Implicit PASS; wrong batch size at runtime |
| **Fail-safe** | `--skip-luna` bypass for infra-only runs |

### 10.11 F0-COMP-11 — `run-phase1-discovery.js` orchestrator

| | |
|---|---|
| **Faili** | `scripts/run-phase1-discovery.js` |
| **Tests** | `node scripts/run-phase1-discovery.js --skip-luna --lang da` (smoke) |
| **PASS** | §6.2 sequence; all F0-COMP-1…10 wired |
| **FAIL** | Missing step; wrong scope order |
| **Fail-safe** | `--skip-luna`, `--group`, `--lang` filters |

### 10.12 F0-COMP-12 — `run-phase1-exit-matrix.js` (F1-1…F1-9)

| | |
|---|---|
| **Faili** | `scripts/run-phase1-exit-matrix.js` |
| **Tests** | Exit after mock matrix; all 9 gates evaluated |
| **PASS** | `phase1-exit.json` embeds every gate §1.4 |
| **FAIL** | Partial gate set; wrong denominator |
| **Fail-safe** | Exit 1 with gate failure table |

### 10.13 F0-COMP-13 — OWNER-PREP `phase1-full` + audit-post-run hook

| | |
|---|---|
| **Faili** | `scripts/lib/audit-post-run.js`, `scripts/build-phase1-owner-review.js`, `scripts/build-phase1-github-index.js` |
| **Tests** | `node scripts/lib/audit-post-run.js --module phase1-full` (after mock findings) |
| **PASS** | §8.2 trīs faili; MASTER §7.6 fields |
| **FAIL** | Missing `owner-decisions.md`; wrong trigger (`TOTAL_FINDINGS`) |
| **Fail-safe** | Skip when `VALIDATED_FINDINGS = 0` |

### 10.14 F0-COMP-14 — `package.json` npm scripts

| | |
|---|---|
| **Faili** | `package.json` |
| **Tests** | `npm run i18n:content:phase1-discovery -- --help`; `npm run i18n:content:phase1-exit` |
| **PASS** | Scripts resolve and delegate |
| **FAIL** | Missing script entry |
| **Fail-safe** | — |

### 10.15 F0-COMP-15 — F0 completion verification runs

**Robeža:** F0-COMP-15 **nedrīkst** veikt reālus Luna API izsaukumus vai pilno Fāzes 1 discovery. F0-COMP-15 ir infrastruktūras smoke un determinisma verifikācija.

| | |
|---|---|
| **Atļautās komandas** | `npm run i18n:content:phase1-discovery -- --skip-luna` → 320/320; `npm run i18n:content:phase1-exit` ×2 (determinisms); `npm run i18n:content:phase0-exit` (regression) |
| **Atļautie testi** | Deterministiskie kolektori 320/320; inventory 309/309; multi-scan 309/309; Luna adapteru mock/dry-run testi; `evaluateLunaCoverage()` ar sintētisku 318/318 fixture; exit determinisma tests bez Luna API |
| **PASS** | F1-2 320/320; F1-3 309/309; F1-4 309/309; F1-7 PASS; F1-9 PASS; 2× exit determinism (`--skip-luna`); Phase 0 regression PASS; `PRODUCTION_DIFF = 0` |
| **FAIL** | Jebkurš deterministiskais vārts FAIL; exit JSON atšķiras (deterministic fields); reāli Luna API izsaukumi (`LUNA_CALLS > 0`) |
| **Fail-safe** | `--skip-luna` obligāts; bez `OPENAI_API_KEY` prasības F0-COMP-15 laikā |

**F0-COMP-15 laikā obligāti:**

| Metrika | Vērtība |
|---------|---------|
| `LUNA_CALLS` | **0** |
| `F1-5` | **NOT_RUN** |
| `LUNA_AUDIT_SCOPE_COVERAGE` | **NOT_RUN** |
| `PHASE_1_DISCOVERY` | **NOT_STARTED** |

**Aizliegts F0-COMP-15 laikā:** `npm run i18n:content:phase1-discovery -- --with-luna` (reālais Luna discovery).

Reālais `npm run i18n:content:phase1-discovery -- --with-luna` paliek atļauts **tikai pēc** `PHASE_0_COMPLETION_PASS` un **tikai** atsevišķā Fāzes 1 uzdevumā (§6.1, §15).

Pēc F0-COMP-15 PASS → `PHASE_0_COMPLETION_PASS` → `PHASE_0_INFRASTRUCTURE_COMPLETION = PASS` → atļauta **Fāzes 1 discovery izpilde** (320 scope + Luna) kā atsevišķs uzdevums.

------------------------------------------------------------------------

## 11. Fāzes 0 baseline (reference)

| Metrika | F0 vērtība (main pēc PR #694) |
|---------|-------------------------------|
| `origin/main` | `0bf5767b0c667dbf56874e7027a5319d7c7fba90` |
| Deterministic findings | 42 122 (kandidāti) |
| Scope processed | 320/320 |
| NOT_APPLICABLE | 2 (`g1/training/lv`, `g1/training/et`) |
| Luna calls | 0 |

Fāze 1 **neatceļ** F0 rezultātus — paplašina ar inventory 100%, multi-scan 100%, Luna 100%, G3 `legacyHtml`.

------------------------------------------------------------------------

## 12. MASTER 1.12 atbilstības karte

| MASTER | Fāze 1 / F0 completion |
|--------|------------------------|
| §C Fāze 0 infrastruktūra | F0-COMP-1…15 (§10) |
| §D Discovery exit | F1-1…F1-9 vārti |
| §1.1.10 MAIN_TRANSLATION_FIELD_INVENTORY | F1-3, 309/309 |
| §1.1.11 MULTI_TRANSLATION_SCAN | F1-4, 309/309 |
| §5.4 `legacyHtml` scan | F0-COMP-2, §4.7 |
| §5.3 LIVE/runtime | **OUT OF PHASE 1** → Phase 3 |
| §7.6 OWNER-PREP | F1-8, `phase1-full` |
| §7.13 Semantic dedup | §4.5 |
| §7.18 PRE_BACKLOG_HISTORY_GATE | F0-COMP-6, §8.5 |
| §7.25 MULTI_TRANSLATION_SCAN | 100% applicable scope |
| §11.12 G3 LIVE closure | Phase 3, ne Phase 1 |
| §A4 Luna ≠ OWNER | §4.4, §5.6 |
| §J.1 | Nav apply pirms OWNER apjoma apstiprinājuma Fāzei 2 |

------------------------------------------------------------------------

## 13. Statusa definīcijas

| Statuss | Nozīme |
|---------|--------|
| `PHASE_0_INFRASTRUCTURE_COMPLETION_REQUIRED` | Spec apstiprināta; F0-COMP-1…15 nav izpildīts |
| `PHASE_0_INFRASTRUCTURE_COMPLETION` | F0-COMP-1…15 izpilde/verifikācija notiek (§10) |
| `PHASE_0_COMPLETION_PASS` | F0-COMP-1…15 PASS + `PRODUCTION_DIFF = 0` |
| `PHASE_1_NOT_STARTED` | F0 completion PASS, bet discovery vēl nav sākts |
| `PHASE_1_IN_PROGRESS` | Discovery/Luna runs aktīvi |
| `PHASE_1_TECHNICAL_PASS` | F1 vārti PASS branch; gaida review |
| `PHASE_1_COMPLETE` | F1 PASS + post-merge uz `main` (A7) |
| `NEEDS_PHASE_1_COMPLETION` | Trūkst coverage/Luna/OWNER-PREP |

**Obligātā secība:**

```text
PHASE_0_INFRASTRUCTURE_COMPLETION_REQUIRED
  → PHASE_0_COMPLETION_PASS
  → PHASE_1_NOT_STARTED
  → PHASE_1_IN_PROGRESS
  → PHASE_1_TECHNICAL_PASS / PHASE_1_COMPLETE
```

`PHASE_1_NOT_STARTED` drīkst iestāties **tikai pēc** `PHASE_0_COMPLETION_PASS`.

**Pašreizējais statuss:** `PHASE_0_INFRASTRUCTURE_COMPLETION_REQUIRED`.

------------------------------------------------------------------------

## 14. Fāze 1 vs Fāze 2 robeža

| Darbība | Fāze 1 | Fāze 2 |
|---------|--------|--------|
| READ-ONLY discovery | ✓ | — |
| Luna linguistic | ✓ | — |
| OWNER-PREP | ✓ (ja `VALIDATED_FINDINGS > 0`) | — |
| Crowdin export JSON (dry-run) | ✓ opcionāli, **nav** F1 exit vārts | ✓ obligāts pirms tulkošanas |
| Crowdin tulkošana | ✗ | ✓ |
| Crowdin import staging | ✗ | ✓ |
| COPY-ONLY apply | ✗ | ✗ |
| OWNER Fāze 2 apstiprinājums | **Nav** | Obligāts pirms turpināšanas |

**Crowdin export Phase 1:** drīkst izmantot kā diagnostiku (`export-content-crowdin.js --write` uz `reports/temp/`), bet **nav** F1-1…F1-9 prasība un neietekmē exit.

------------------------------------------------------------------------

## 15. Pārbaudes komandas

```bash
# F0 regression (joprojām obligāts)
npm run i18n:content:phase0-exit

# F0 completion verification (F0-COMP-15; pēc F0-COMP-1…14)
npm run i18n:content:phase1-discovery -- --skip-luna   # 320/320
npm run i18n:content:phase1-exit                       # 2× determinisms

# Fāzes 1 pilns discovery (tikai pēc PHASE_0_INFRASTRUCTURE_COMPLETION = PASS)
npm run i18n:content:phase1-discovery -- --with-luna

# Production diff pierādījums
git diff --name-only origin/main...HEAD -- data www/data languages crowdin/content
```

------------------------------------------------------------------------

**Nākamais solis (secība):**

1. Apstiprināt spec (vai norādīt labojumus)
2. Izpildīt F0-COMP-1…F0-COMP-15 → `PHASE_0_COMPLETION_PASS` (`PHASE_0_INFRASTRUCTURE_COMPLETION = PASS`)
3. Tikai tad — pilns 320 scope Fāzes 1 READ-ONLY discovery + Luna izpilde (`--with-luna`)

**Discovery izpilde šajā posmā nav sākta.**
