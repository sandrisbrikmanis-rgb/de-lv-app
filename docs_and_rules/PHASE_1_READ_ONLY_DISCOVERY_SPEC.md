# Fāze 1 — Pilns READ-ONLY Discovery (320 scope)

**Statuss:** SPEC / OWNER-APPROVED — AWAITING IMPLEMENTATION  
**Saistīts ar:** `MASTER_1.12_BINDING_WORK_AGREEMENT.md` §D, §I, §J  
**Priekšnosacījums:** `PHASE_0_COMPLETE` uz `origin/main` (F0-1…F0-8 PASS)  
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

1. deterministiskie kolektori (struktūra, DE, mirror, inventory, multi-translation);
2. Luna lingvistiskais READ-ONLY audits (`gpt-5.6-luna`);
3. findings validācija un klasifikācija;
4. OWNER-PREP pakotne apjoma lēmumam par Fāzi 2.

### 1.2 Exit criteria (Fāze 1 DONE)

| Metrika | Prasība |
|---------|---------|
| `DETERMINISTIC_SCOPE_COVERAGE` | 100% (320/320 vai 318 + 2 dokumentēti N/A) |
| `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE` | 100% |
| `MULTI_TRANSLATION_SCAN_COVERAGE` | 100% |
| `LUNA_AUDIT_SCOPE_COVERAGE` | 100% |
| `PRODUCTION_DIFF` | 0 |
| `DE_CHANGES` | 0 |
| `LUNA_CALLS` | > 0 (obligāts Phase 1), bet **tikai READ-ONLY** |
| OWNER-PREP pakotne | gatava, ja `TOTAL_FINDINGS > 0` |
| OWNER Fāze 2 apstiprinājums | **nav dots** — tikai apjoma karte |

### 1.3 F1 vārti (exit matrix)

| Gate | Prasība |
|------|---------|
| F1-1 | BASELINE GATE PASS (`origin/main`, DE diff = 0, active unmerged closure = 0) |
| F1-2 | Deterministiskais discovery 320/320 scope |
| F1-3 | `MAIN_TRANSLATION_FIELD_INVENTORY` 100% coverage visos applicable scope |
| F1-4 | `MULTI_TRANSLATION_SCAN` 100% coverage visos applicable scope |
| F1-5 | Luna audits 100% applicable scope (`gpt-5.6-luna`) |
| F1-6 | Findings validācija (deterministic + Luna) bez schema kļūdām |
| F1-7 | Production git diff = 0 |
| F1-8 | OWNER-PREP artefakti sagatavoti (ja findings > 0) |
| F1-9 | Konsolidēta Phase 1 atskaite + JSON matrica |

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

Formāts: `{group}/{dataset}/{lang}`

Piemēri: `g2/a1/et`, `g1/sentences/da`, `g3/courseLessons/cs`.

### 2.3 NOT_APPLICABLE scope (dokumentēti izņēmumi)

| Scope ID | Iemesls | Deterministic | Luna | Inventory | Multi-scan |
|----------|---------|:-------------:|:----:|:---------:|:----------:|
| `g1/training/lv` | LV embedded `www/ui.js`, nav `courseTrainingCards.js` | N/A | N/A | N/A | N/A |
| `g1/training/et` | Nav `data/et/courseTrainingCards.js` | N/A | N/A | N/A | N/A |

**Applicable scope Luna/inventory:** 318 (320 − 2 N/A).

**Round-trip semantika (F0):** `g1-training/et` = SKIPPED; `g1-training/lv` = PASS (UI embedded). Fāze 1 discovery marķē abus kā `EXPECTED_NOT_APPLICABLE` structural/file collector līmenī.

### 2.4 Scope inventāra fails (mašīnlasāms)

Implementācijā ģenerēt:

`reports/phase1-scope-inventory.json`

```json
{
  "expectedScope": 320,
  "uniqueScopeIds": 320,
  "notApplicable": ["g1/training/lv", "g1/training/et"],
  "applicableForLuna": 318,
  "byGroup": { "g1": 96, "g2": 192, "g3": 32 },
  "scopes": [{ "scopeId": "g2/a1/lv", "group": "g2", "dataset": "a1", "lang": "lv", ... }]
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
| MAIN_TRANSLATION_FIELD_INVENTORY | `main-translation-field-inventory.js` | ✓ | ✓ | ✓ | ✓† | ✓ | — |
| MULTI_TRANSLATION_SCAN | `collectors/multi-translation.js` | ✓ | ✓ | **jāpaplašina** | ✓† | **jāievieš** | — |

\* `g1/training/lv` un `g1/training/et` → `EXPECTED_NOT_APPLICABLE`  
† Tikai ja `courseTrainingCards.js` eksistē

### 4.2 Fāzes 0 → Fāzes 1 infrastruktūras gaps (jāaizpilda pirms exit)

| Gap | Pašreizējais stāvoklis | Fāze 1 prasība |
|-----|------------------------|----------------|
| G1 verbs multi-translation | Nav `collectG1VerbsMultiTranslation` | Implementēt, 32 scope |
| G3 multi-translation + inventory | Nav G3 inventory scan | Implementēt `collectG3MultiTranslation` |
| G1 training inventory (30 lang) | Tikai structural | Inventory + multi-scan kur fails eksistē |
| Luna integrācija | Nav `run-content-discovery.js` | `--with-luna` + per-group Luna adapters |
| Inventory coverage gate | Nav atsevišķa F1-3 vārts | `evaluateInventoryCoverage()` |
| Luna coverage gate | Nav | `evaluateLunaCoverage()` |
| Phase 1 exit script | Nav | `run-phase1-exit-matrix.js` |
| OWNER-PREP module key | Nav `phase1-full` hook | `audit-post-run.js` + publisher |

### 4.3 Finding formāts (vienots)

```json
{
  "auditId": "DISC-G2-A1-ET-0042",
  "scopeId": "g2/a1/et",
  "group": "g2",
  "dataset": "a1",
  "lang": "et",
  "cardId": "sprechen",
  "fieldPath": "lv",
  "severity": "HIGH",
  "category": "MULTIPLE_TRANSLATIONS_DETECTED",
  "productionFile": "data/et/a1.js",
  "current": "rääkima • vestlema",
  "de": "sprechen",
  "proposed": null,
  "source": "deterministic/multi-translation-scan",
  "lunaVerdict": null
}
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

Luna obligāti katram **applicable** scope (318), izņemot `EXPECTED_NOT_APPLICABLE`.

| Grupa | Luna adapter (jauna vai adaptēta) | Objektu bloks |
|-------|-----------------------------------|---------------|
| G2 | `openai-luna-full-audit.js` pattern | flashcards / level |
| G1 sentences | jauns `luna-g1-sentences.js` | 796 teikumi |
| G1 verbs | jauns `luna-g1-verbs.js` | 189 darbības vārdi × formas |
| G1 training | jauns `luna-g1-training.js` | lesson decks (kur fails eksistē) |
| G3 | jauns `luna-g3-lessons.js` | structured L8–L21 native lauki |

**MASTER §7.14:** Luna coverage = 100% nozīmē, ka visi objekti tika **nosūtīti** auditam, nevis ka visi ir kļūdaini.

### 5.3 Batch politika

- Deterministisks batch izmērs: pēc grupas (G2: ~25 kartītes/batch, G1: pēc dataset)
- Progress faili: `scripts/.phase1-luna-{scopeKey}-progress.json` (gitignored)
- Raw Luna: `reports/temp/phase1-luna/{scopeId}/raw-*.json`
- Idempotence: `--fresh-luna` dzēš cache; `--resume-luna` turpina

### 5.4 Luna klasifikācija

Katram Luna atbildei:

| Verdict | Nozīme |
|---------|--------|
| `PASS` | Nav lingvistiskas kļūdas |
| `VALIDATED_REAL_FINDING` | Kandidāts OWNER backlog |
| `SOURCE_LV_ISSUE` | LV/DE avota jautājums — ne repair target |
| `DE_SOURCE_ISSUE` | DE avota jautājums — ne repair |
| `STYLE_ONLY` | Nav kvalitātes finding |
| `PROJECT_CONVENTION` | Learning First u.c. — ne error |
| `NEEDS_REVIEW` | Nepietiekama pārliecība → OWNER |

**Aizliegts:** automātiski izlaist `NEEDS_REVIEW` kā PASS.

------------------------------------------------------------------------

## 6. Orchestrator

### 6.1 Entry point

```bash
# Pilns Phase 1 discovery (deterministic + Luna)
npm run i18n:content:phase1-discovery

# Ekvivalents:
node scripts/run-phase1-discovery.js \
  --all-groups \
  --dataset all \
  --all-langs \
  --with-luna

# Tikai deterministika (diagnostika):
node scripts/run-phase1-discovery.js --skip-luna
```

### 6.2 Izpildes secība

```text
1. git fetch origin
2. BASELINE GATE (mantot F0-5)
3. Build / verify scope inventory (320)
4. For each scope in deterministic order (G2→G1→G3, dataset alpha, lang alpha):
   a. Skip if EXPECTED_NOT_APPLICABLE
   b. Run all applicable deterministic collectors
   c. Record inventory + multi-scan coverage per scope
   d. If --with-luna: run Luna adapter for scope
   e. Aggregate findings + stats into matrix row
5. Run findings validation (schema, dedup policy)
6. PRE_BACKLOG_HISTORY_GATE (§7.18) — ja prior OWNER history eksistē
7. OWNER-PREP (ja total findings > 0)
8. Write reports (§7)
9. Exit 1 if any F1 gate would FAIL; 0 if PHASE_1_COMPLETE candidate
```

### 6.3 Determinisms

- Scope secība fiksēta (alfabētiska)
- Timestamps (`generatedAt`) nedrīkst ietekmēt gate PASS/FAIL
- Divi secīgi `--skip-luna` runi → identisks deterministic findings skaits
- Luna runi var atšķirties tikai LLM stochastikā — obligāta `discovery-stability.js` disclaimer

------------------------------------------------------------------------

## 7. Artefakti

### 7.1 Obligātie izvades faili

| Fails | Mērķis |
|-------|--------|
| `reports/phase1-scope-inventory.json` | 320 scope mašīnlasāms inventārs |
| `reports/phase1-discovery-matrix.json` | Konsolidēta matrica + findings |
| `reports/phase1-discovery-READONLY.md` | Cilvēkam lasāma atskaite |
| `reports/phase1-exit.json` | F1-1…F1-9 gate matrica |
| `reports/phase1-exit.md` | Exit kopsavilkums |
| `reports/phase1-owner-prep/` | OWNER-PREP pakotne (ja findings > 0) |

### 7.2 Matricas shēma (paplašinājums pret F0)

```json
{
  "phase": 1,
  "status": "PHASE_1_COMPLETE",
  "originMainSha": "...",
  "masterVersion": "1.12",
  "ownerDecisionRef": "OWNER-APPROVED-2026-08-29",
  "scope": { "expected": 320, "processed": 320, "notApplicable": 2 },
  "coverage": {
    "deterministic": "100%",
    "mainTranslationFieldInventory": "100%",
    "multiTranslationScan": "100%",
    "lunaAudit": "100%"
  },
  "summary": [{
    "scopeId": "g2/a1/et",
    "structuralIssues": 0,
    "inventoryCoverage": 1.0,
    "multiScanCoverage": 1.0,
    "lunaProcessed": true,
    "lunaObjects": 702,
    "findingsDeterministic": 42,
    "findingsLuna": 3,
    "verdict": "NEEDS_OWNER_REVIEW"
  }],
  "totals": {
    "findingsDeterministic": 42122,
    "findingsLuna": 0,
    "findingsCombined": 0
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

### 7.3 Ceļu portabilitāte

Report artefaktos **obligāti repo-relative POSIX ceļi** (piem. `reports/...`, `data/et/a1.js`).

Aizliegts saglabāt VM-absolūtos ceļus (`/workspace/...`) operacionāli lasāmos laukos.

Informatīvs `generatedOnHost` drīkst būt atsevišķā metadata blokā, bet **nevienam gate consumer** to nelasīt.

------------------------------------------------------------------------

## 8. OWNER-PREP pakotne

### 8.1 Kad obligāta

Ja `TOTAL_FINDINGS > 0` pēc deterministic + Luna validācijas → obligāta OWNER-PREP (MASTER §7.6, §J.11).

### 8.2 Saturam jāietver

1. Kopsavilkums pa grupām (G1/G2/G3) un valodām
2. Findings pa severitāti (CRITICAL/HIGH/MEDIUM/LOW)
3. Multi-translation kandidātu saraksts ar `OWNER_DECISION_REQUIRED`
4. Luna `VALIDATED_REAL_FINDING` saraksts (nevis tikai deterministika)
5. Apjoma aprēķins Fāzei 2 (Crowdin round) — **tikai ieteikums**, ne apstiprinājums
6. GitHub-review-friendly indekss (`phase1-owner-review-GITHUB.md`)
7. Explicit: `PRODUCTION_CHANGES = 0`, `APPLY = NOT_STARTED`, `PHASE_2 = NOT_APPROVED`

### 8.3 PRE_BACKLOG_HISTORY_GATE (§7.18)

Pirms OWNER-PREP:

- Validēt pret iepriekšējo OWNER history (ja eksistē datasetam)
- Atzīmēt drift (`ownerApprovedFieldsDrifted`)
- Backlog drīkst ietvert tikai validētus findingus

### 8.4 Ko OWNER-PREP **nedrīkst** saturēt

- Automātiskus OWNER lēmumus
- Production patch instrukcijas
- Crowdin import komandas uz `data/`

------------------------------------------------------------------------

## 9. Aizliegumi (Fāze 1)

| # | Aizliegts |
|---|-----------|
| 1 | Production failu maiņa (`data/`, `www/data/`, `languages/`) |
| 2 | Translation apply vai repair |
| 3 | Crowdin import uz production |
| 4 | Automātiski OWNER lēmumi no findings |
| 5 | Fāzes 2 sākšana |
| 6 | Paralēli dataset repair cikli |
| 7 | `--force-baseline` production workflow |
| 8 | DE lauku maiņa |
| 9 | Luna proposed → production bez OWNER |
| 10 | Atsevišķu batch (piem. tikai G1 sentences) kā Fāzes 1 aizvietotājs |

------------------------------------------------------------------------

## 10. Implementācijas secība (izstrāde, ne izpilde)

Šī secība ir **infrastruktūras būve**, ne discovery izpilde. Discovery drīkst sākt tikai pēc šīs spec apstiprināšanas un F1 exit skripta gatavības.

```text
P1-IMPL-1  Paplašināt multi-translation + inventory uz G1 verbs, G1 training, G3
P1-IMPL-2  Repo-relative ceļi visos report ģeneratoros
P1-IMPL-3  Luna adapters (G2 reuse, G1/G3 jauni)
P1-IMPL-4  run-phase1-discovery.js orchestrator
P1-IMPL-5  run-phase1-exit-matrix.js (F1-1…F1-9)
P1-IMPL-6  OWNER-PREP module `phase1-full` + audit-post-run hook
P1-IMPL-7  package.json: i18n:content:phase1-discovery, i18n:content:phase1-exit
P1-IMPL-8  Dry-run: --skip-luna 320/320 deterministic PASS
P1-IMPL-9  Pilns run: --with-luna 318/318 Luna PASS
P1-IMPL-10 phase1-exit 2× determinisms + OWNER-PREP verify
```

**Fāzes 1 discovery izpilde** (320 scope + Luna) = atsevišķs uzdevums pēc spec review.

------------------------------------------------------------------------

## 11. Fāzes 0 baseline (reference)

| Metrika | F0 vērtība (main pēc PR #694) |
|---------|-------------------------------|
| `origin/main` | `0bf5767b0c667dbf56874e7027a5319d7c7fba90` |
| Deterministic findings | 42 122 (kandidāti) |
| Scope processed | 320/320 |
| NOT_APPLICABLE | 2 (`g1/training/lv`, `g1/training/et`) |
| Luna calls | 0 |

Fāze 1 **neatceļ** F0 rezultātus — paplašina ar inventory 100%, multi-scan 100%, Luna 100%.

------------------------------------------------------------------------

## 12. MASTER 1.12 atbilstības karte

| MASTER | Fāze 1 implementācija |
|--------|----------------------|
| §D Discovery exit | F1-1…F1-9 vārti |
| §1.1.10 MAIN_TRANSLATION_FIELD_INVENTORY | F1-3, `main-translation-field-inventory.js` |
| §1.1.11 MULTI_TRANSLATION_SCAN | F1-4, visi card types |
| §7.6 OWNER-PREP | F1-8 |
| §7.18 PRE_BACKLOG_HISTORY_GATE | Pirms OWNER-PREP |
| §7.25 MULTI_TRANSLATION_SCAN | 100% scope |
| §A4 Luna ≠ OWNER | Finding classification |
| §J.1 | Nav apply pirms OWNER apjoma apstiprinājuma Fāzei 2 |

------------------------------------------------------------------------

## 13. Statusa definīcijas

| Statuss | Nozīme |
|---------|--------|
| `PHASE_1_NOT_STARTED` | Spec apstiprināta, implementācija/nav runs |
| `PHASE_1_IN_PROGRESS` | Discovery/Luna runs aktīvi |
| `PHASE_1_TECHNICAL_PASS` | F1 vārti PASS branch; gaida review |
| `PHASE_1_COMPLETE` | F1 PASS + post-merge uz `main` (A7) |
| `NEEDS_PHASE_1_COMPLETION` | Trūkst coverage/Luna/OWNER-PREP |

------------------------------------------------------------------------

## 14. Fāze 1 vs Fāze 2 robeža

| Darbība | Fāze 1 | Fāze 2 |
|---------|--------|--------|
| READ-ONLY discovery | ✓ | — |
| Luna linguistic | ✓ | — |
| OWNER-PREP | ✓ | — |
| Crowdin export JSON | ✓ (dry-run) | ✓ |
| Crowdin tulkošana | ✗ | ✓ |
| Crowdin import staging | ✗ | ✓ |
| COPY-ONLY apply | ✗ | ✗ |
| OWNER Fāze 2 apstiprinājums | **Nav** | Obligāts pirms turpināšanas |

------------------------------------------------------------------------

## 15. Pārbaudes komandas (pēc implementācijas)

```bash
# Baseline + F0 regression (joprojām obligāts)
npm run i18n:content:phase0-exit

# Phase 1 pilns discovery
npm run i18n:content:phase1-discovery

# Phase 1 exit matrix (2× determinisms)
npm run i18n:content:phase1-exit
npm run i18n:content:phase1-exit

# Production diff pierādījums
git diff --name-only origin/main...HEAD -- data www/data languages
```

------------------------------------------------------------------------

**Nākamais solis pēc šīs specifikācijas OWNER review:**

1. Apstiprināt spec (vai norādīt labojumus)
2. Implementēt P1-IMPL-1…P1-IMPL-10
3. Tikai tad — pilns 320 scope discovery + Luna izpilde

**Discovery izpilde šajā posmā nav sākta.**
