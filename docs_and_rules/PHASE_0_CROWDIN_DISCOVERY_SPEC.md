# Fāze 0 — Crowdin bridge + Discovery orchestrator spec

**Statuss:** SPEC / IMPLEMENTATION TARGET  
**Saistīts ar:** `MASTER_1.12_BINDING_WORK_AGREEMENT.md`, `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12  
**Režīms:** READ-ONLY — bez production apply, bez Crowdin import uz `data/` vai `www/`

Šis dokuments definē **ko būvēt Fāzē 0** un **kā strukturēt Fāzes 1 discovery**. Implementācija nedrīkst pārkāpt MASTER §7.9.4 (`--force-baseline` production workflow).

------------------------------------------------------------------------

## 1. Mērķis un exit criteria

### 1.1 Mērķis

Viena kopīga tehniskā bāze visām satura grupām (G1/G2/G3), kas ļauj:

1. deterministiski eksportēt translatable saturu flat JSON (Crowdin-ready);
2. validēt round-trip bez production izmaiņām;
3. palaist **READ-ONLY discovery** visām mērķvalodām vienā orchestratorā;
4. ģenerēt konsolidētu apjoma/finding matricu OWNER lēmumam.

### 1.2 Exit criteria (Fāze 0 DONE)

| Gate | Prasība |
|------|---------|
| F0-1 | `content-crowdin-bridge` bibliotēka ar unit testiem |
| F0-2 | Export skripti G1/G2/G3 — **dry-run only**, ne `--write` uz production |
| F0-3 | Round-trip tests: export → parse → semantic identity (kā UI bridge) |
| F0-4 | `run-content-discovery.js` orchestrators — READ-ONLY, visām valodām |
| F0-5 | Discovery atskaite + JSON matrica `reports/content-discovery-matrix.json` |
| F0-6 | Baseline header katrā run (§7.8.3) |
| F0-7 | Production git diff = 0 pēc visiem Fāzes 0 skriptiem |
| F0-8 | MASTER 1.12 multi-translation inventory integrēts discovery |

------------------------------------------------------------------------

## 2. Mērķvalodas un failu kartējums

### 2.1 Valodas

Avots: `scripts/lib/ui-crowdin-bridge.js` → `UI_LANGUAGES` (32).

| Lomu | Valodas |
|------|---------|
| LV master (struktūra + Crowdin source keys) | `lv` |
| Mērķvalodas (31) | visas pārējās no `UI_LANGUAGES` |

**Piezīme:** `audit-common.js` `KNOWN_LANGUAGES` (10) nav pilns — Fāze 0 paplašina uz pilnu `UI_LANGUAGES` sarakstu.

### 2.2 Datu ceļi

| Valoda | Flashcards / sentences / verbs | Mirror |
|--------|-------------------------------|--------|
| LV | `data/{dataset}.js` | `www/data/{dataset}.js` |
| Target | `data/{lang}/{dataset}.js` | `www/data/{lang}/{dataset}.js` |

| Grupa | LV master fails | Target fails |
|-------|-----------------|--------------|
| G2 | `data/a1.js` … `data/c2.js` | `data/{lang}/a1.js` … |
| G1 sentences | `data/sentences.js` | `data/{lang}/sentences.js` |
| G1 verbs | `data/verbs.js` | `data/{lang}/verbs.js` |
| G1 training | *(embedded LV)* | `data/{lang}/courseTrainingCards.js` |
| G3 | `data/courseLessons.js` | `data/{lang}/courseLessons.js` |

### 2.3 Globālie mainīgie (dataset identity)

| Dataset | Global | LV ierakstu skaits (apt.) |
|---------|--------|---------------------------|
| a1…c2 | `A1_WORDS` … `C2_WORDS` | 702 … 219 (kopā 8618) |
| sentences | `SENTENCE_ENTRIES` | 796 |
| verbs | `VERB_ENTRIES` | 189 (945 form slots) |

------------------------------------------------------------------------

## 3. Crowdin atslēgu shēma

### 3.1 Vispārīgie noteikumi

1. **Stabilitāte:** atslēgas balstās uz LV master identitāti, nevis uz tulkojuma tekstu.
2. **Semantiskais sufikss:** izmantot `.native`, ne `.lv` (repo konvencija `lv` lauks ≠ latviešu valoda).
3. **Read-only:** DE lauki, struktūra, `sectionAccents`, `comparison.word` (vācu) — **neeksportē**.
4. **Kārtošana:** JSON atslēgas alfabētiski (kā UI bridge).
5. **Unknown key:** importā noraidīt atslēgas, kas nav LV source set.

### 3.2 Card identity slug

Flashcard identitāte:

```text
cardSlug = study.id (ja ir) ELSE slugify(de)
```

`slugify(de)` = lowercase, diakritikas → ASCII (ä→ae), non-alnum → `-`, collapse `-`.

Piemērs: `de: "sprechen"` + `study.id: "a1-sprechen-study"` → izmanto `a1-sprechen-study`.

### 3.3 G2 — Flashcards (a1…c2)

Prefikss: `{level}.` kur `level ∈ {a1,a2,b1,b2,c1,c2}`.

| Atslēga | Avots | Translatable |
|---------|-------|--------------|
| `{level}.card.{cardSlug}.native` | `entry.lv` | ✓ (MAIN) |
| `{level}.card.{cardSlug}.study.translation` | `study.translation` | ✓ (MAIN ja Study) |
| `{level}.card.{cardSlug}.study.title` | `study.title` | ✓ (MAIN ja Study) |
| `{level}.card.{cardSlug}.study.explanation[{i}]` | `study.explanation[i]` | ✓ |
| `{level}.card.{cardSlug}.study.examples[{i}].native` | `examples[i].lv` | ✓ |
| `{level}.card.{cardSlug}.study.comparison[{i}].meaning` | `comparison[i].meaning` | ✓ |
| `{level}.card.{cardSlug}.study.comparison[{i}].example` | `comparison[i].example` | ✓ |
| `{level}.card.{cardSlug}.study.tip[{i}]` | `tip[i]` (string vai objekta teksts) | ✓ |
| `{level}.card.{cardSlug}.study.important[{i}]` | `important[i]` | ✓ |
| `{level}.card.{cardSlug}.study.note` | minimalStudy `note` | ✓ |
| `{level}.card.{cardSlug}.study.subtitle` | comparisonStudy | ✓ |
| `{level}.card.{cardSlug}.study.lead` | comparisonStudy | ✓ |
| `{level}.card.{cardSlug}.study.question` | comparisonStudy | ✓ |

**Read-only (neeksportē):**

- `de`, `de_article`, `de_plural`, `level`, `id`, `study.id`, `study.layout`
- `study.examples[{i}].de`, `comparison[{i}].word`
- `study.sectionAccents` (viss koks)
- `study.forms`, renderer-only struktūras bez native teksta

**Aptuvenais apjoms:** ~3 700 atslēgas / līmenis / valoda (LV master).

### 3.4 G1 — Sentences

Prefikss: `sentences.`

| Atslēga | Avots |
|---------|-------|
| `sentences.item.{index}.native` | `SENTENCE_ENTRIES[i].lv` |

Alternatīva (stabilitātei pret reorder): `sentences.de.{slug}.native` kur `slug = slugify(de)`.

**Ieteikums:** izmantot `slugify(de)` — neatkarīgs no masīva indeksa.

### 3.5 G1 — Verbs

Prefikss: `verbs.`

| Atslēga | Avots |
|---------|-------|
| `verbs.{infinitivSlug}.infinitiv.native` | `infinitiv.lv` |
| `verbs.{infinitivSlug}.praesens.native` | `praesens.lv` |
| `verbs.{infinitivSlug}.imperfektIndikativ.native` | `imperfektIndikativ.lv` |
| `verbs.{infinitivSlug}.imperfektKonjunktiv.native` | `imperfektKonjunktiv.lv` |
| `verbs.{infinitivSlug}.partizipVergangenheit.native` | `partizipVergangenheit.lv` |

`infinitivSlug = slugify(infinitiv.de)`.

DE formas (`*.de`) — read-only.

### 3.6 G1 — Course training cards

Prefikss: `kurss.training.`

| Atslēga | Avots |
|---------|-------|
| `kurss.training.{lessonId}.card[{i}].front` | `front` (native) |
| `kurss.training.{lessonId}.card[{i}].back` | `back` (DE) — **read-only** |

`lessonId` ∈ `lesson1` … `lesson7` atbilstoši globālim (`lesson1TrainingCardsDa` u.tml.).

### 3.7 G3 — Kurss structured (Fāze 0 — spec only, implementācija G3 posmā)

Prefikss: `kurss.lesson{N}.`

Eksportēt tikai strukturētos native laukus no `COURSE_LESSON_DATA` (L8–L21):

- section titles, card glosses, `translationCards[].native`, dialogue native rindas u.c.

**Nelikt Fāzē 0:** `COURSE_LESSON_HTML` blobu eksportu — atsevišķs HTML fragment extractors (G3 vēlāk).

------------------------------------------------------------------------

## 4. Bridge moduļu struktūra (faili)

```text
scripts/lib/content-crowdin-bridge/
  index.js                 # public API
  constants.js             # UI_LANGUAGES, READ_ONLY_PATHS, DATASETS
  slug.js                  # slugify, cardSlug resolver
  flatten-g2-flashcards.js
  flatten-g1-sentences.js
  flatten-g1-verbs.js
  flatten-g1-training.js
  unflatten.js             # flat → nested patch paths
  guards.js                # unknown key, placeholder, HTML tag multiset
  roundtrip.js             # semantic identity compare

scripts/export-content-crowdin.js    # --group g1|g2|g3 --lang --dry-run
scripts/verify-content-crowdin-roundtrip.js

scripts/lib/content-discovery/
  registry.js              # dataset × language matrix
  baseline-gate.js         # §7.8–§7.9 checks
  collectors/
    structural.js          # parity, ID, order, study layout
    de-compliance.js       # per-lang verify wrapper
    remnants.js            # configurable per-lang patterns
    multi-translation.js   # wraps main-translation-field-inventory.js
    mojibake.js
  report-builder.js        # MD + JSON matrix
  orchestrator.js

scripts/run-content-discovery.js     # READ-ONLY entry point
```

### 4.1 Bridge API (minimālais)

```javascript
// Export
exportContentToCrowdinJson({ group, lang, lvSourceKeys }) → string

// Import (Fāze 2+; Fāzē 0 tikai test harness)
mergeCrowdinImport({ group, lang, existingDataset, crowdinFlat }) → merged

// Validation
validateCrowdinKeySet(crowdinFlat, lvSourceKeys) → errors[]
validateImportGuards(existingFlat, crowdinFlat) → errors[]
verifyRoundTrip({ group, lang }) → { pass, details }
```

### 4.2 Import guardi (obligāti, kā UI bridge)

Katrai pārklājošai atslēgai:

- placeholder multiset (`{name}`) saglabājas;
- HTML tag struktūra saglabājas;
- tukšs → ne-tukšs vai otrādi bez OWNER = FAIL;
- multi-translation separatori importā → atsevišķs finding, ne silent merge.

------------------------------------------------------------------------

## 5. Discovery orchestrator struktūra

### 5.1 Entry point

```bash
# Pilns discovery (READ-ONLY)
node scripts/run-content-discovery.js \
  --groups g1,g2 \
  --langs all \
  --skip-luna          # Fāze 0: tikai deterministika
  # --with-luna        # Fāze 1 pilnam auditam

# Viens dataset tests
node scripts/run-content-discovery.js --group g2 --dataset a1 --lang et
```

### 5.2 Izpildes secība katram run

```text
1. git fetch origin
2. BASELINE GATE
   - ORIGIN_MAIN_SHA
   - DE_CHANGES on branch = 0
   - BLOCKED_UNMERGED_CLOSURE check
   - BLOCKED_MULTIPLE_PRODUCTION_BASELINES check
3. For each (group, dataset, lang) in scope:
   a. STRUCTURAL collector
   b. DE compliance
   c. MOJIBAKE / placeholders
   d. FOREIGN remnants (per-lang config)
   e. MAIN_TRANSLATION_FIELD_INVENTORY scan
   f. MULTI_TRANSLATION_SCAN (§7.25)
   g. (optional) Luna linguistic — Fāze 1, ne Fāze 0
4. Aggregate → reports/content-discovery-matrix.json
5. Build MD: reports/content-discovery-READONLY.md
6. Baseline header + MASTER_STANDARD_VERSION=1.12
7. Exit 1 if blocker findings; 0 if clean (retāk discovery sākumā)
```

### 5.3 Collector izvade (vienots finding formāts)

Katram findingam (§7.4):

```json
{
  "auditId": "DISC-G2-A1-ET-0042",
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
  "source": "deterministic/multi-translation-scan"
}
```

### 5.4 Konsolidētā matrica

`reports/content-discovery-matrix.json`:

```json
{
  "originMainSha": "...",
  "masterVersion": "1.12",
  "generatedAt": "ISO-8601",
  "scope": { "groups": ["g1","g2"], "langs": 31, "datasets": ["a1", "..."] },
  "summary": [
    {
      "group": "g2",
      "dataset": "a1",
      "lang": "et",
      "cards": 702,
      "structuralIssues": 0,
      "multiTranslationCandidates": 12,
      "foreignRemnants": 3,
      "ownerBacklogEstimate": 15,
      "verdict": "NEEDS_OWNER_REVIEW"
    }
  ],
  "blockers": [],
  "findings": []
}
```

### 5.4 MD atskaite (cilvēkam)

`reports/content-discovery-READONLY.md` sadaļas:

1. Baseline header (SHA, blob, DE status)
2. Scope (grupas, valodas, dataseti)
3. Kopsavilkuma tabula: dataset × valoda × verdict
4. Top blockers (struktūra, DE, unmerged closure)
5. Multi-translation kopskaits pa grupām
6. Apjoma aprēķins OWNER (kopējais finding count, paredzamais Crowdin round)
7. **Explicit:** `PRODUCTION_CHANGES = 0`, `APPLY = NOT_STARTED`

### 5.5 Atkārtoti izmantojamā loģika

| Esošais modulis | Loma discovery |
|-----------------|----------------|
| `scripts/lib/et-a1-c2-full-audit-core.js` | Paraugs G2 per-level audit |
| `scripts/lib/main-translation-field-inventory.js` | §1.1.10 / §7.25 |
| `scripts/lib/discovery-stability.js` | §7.14 reproducibility |
| `scripts/lib/audit-post-run.js` | OWNER-PREP (Fāze 1+, ja findings > 0) |
| `scripts/lib/ui-crowdin-bridge.js` | Bridge pattern reference |

------------------------------------------------------------------------

## 6. Fāze 0 vs Fāze 1 robeža

| Darbība | Fāze 0 | Fāze 1 |
|---------|--------|--------|
| Bridge export dry-run | ✓ | ✓ |
| Round-trip tests | ✓ | ✓ |
| Deterministic discovery all-lang | ✓ | ✓ |
| Luna 100% linguistic | ✗ | ✓ |
| Crowdin export uz `crowdin/content/` | ✓ (faili repo) | ✓ |
| Crowdin import `--write` | ✗ | ✗ (staging only Fāze 2) |
| OWNER-PREP | ✗ (nav findings workflow vēl) | ✓ ja findings |
| COPY-ONLY apply | ✗ | ✗ |

------------------------------------------------------------------------

## 7. Implementācijas secība (izstrāde)

1. `constants.js` + `slug.js` + unit tests  
2. `flatten-g2-flashcards.js` + export dry-run A1 LV  
3. `verify-content-crowdin-roundtrip.js` A1 × 3 valodas (et, da, cs)  
4. `flatten-g1-sentences.js`, `flatten-g1-verbs.js`  
5. `baseline-gate.js` + `structural.js` collector  
6. `multi-translation.js` collector (visi G2 dataseti)  
7. `run-content-discovery.js` — G2 a1 all-langs dry run  
8. Paplašināt uz a2…c2, tad G1  
9. Dokumentēt exit criteria F0-1…F0-8 PASS  

------------------------------------------------------------------------

## 8. MASTER 1.12 atbilstības karte

| MASTER | Fāze 0 implementācija |
|--------|----------------------|
| §1.1.10 MAIN_TRANSLATION_FIELD_INVENTORY | `multi-translation.js` + inventory modulis |
| §7.25 MULTI_TRANSLATION_SCAN | 100% scope discovery |
| §7.8.3 baseline header | `baseline-gate.js` output |
| §7.9 authoritative production | discovery tikai no `origin/main` |
| §7.9.4 no force-baseline | nav `--force-baseline` production opcijas |
| §1.1.14 TOOLING_STANDARD_MISMATCH | inventory aptver visus card types |
| §11.11 negative proof | discovery neclaimē 0 bez coverage pierādījuma |

------------------------------------------------------------------------

## 9. Nav šajā fāzē

- Crowdin SaaS integrācija (API push) — tikai lokāls JSON formāts `crowdin/content/{group}/{lang}.json`
- Production import/write
- OWNER decisions / apply
- Kurss HTML (`legacyHtml`) Crowdin eksports — atsevišķs G3 posms
- Luna 100% linguistic audits — Fāze 1

------------------------------------------------------------------------

## 10. Fāzes 0 statusa definīcijas

| Statuss | Nozīme |
|---------|--------|
| `PHASE_0_IN_PROGRESS` | Infrastruktūra tiek būvēta; F0 vārti vēl nav pilni |
| `PHASE_0_TECHNICAL_PASS` | F0-1…F0-8 PASS uz branch; gaida merge uz `origin/main` |
| `PHASE_0_COMPLETE` | F0 PASS + post-merge verification uz `main` (A7) |
| `NEEDS_PHASE_0_COMPLETION` | Trūkst bridge/collectors/coverage; Fāze 1 aizliegta |

**A7 / Master §7.9:** `Branch PASS ≠ MAIN PASS`. F0 PASS uz feature branch
nav pietiekams, lai sāktu Fāzi 1, kamēr nav `POST_MERGE_MAIN_VERIFICATION`.

Pārbaudes komanda:

```bash
npm run i18n:content:verify-roundtrip   # 32 langs × g2 a1-c2 + g1 + g3
npm run i18n:content:phase0-exit          # F0-1…F0-8 matrica
```

------------------------------------------------------------------------

**Nākamais solis pēc Fāzes 0 merge uz main:** Fāze 1 pilns READ-ONLY discovery ar Luna + OWNER apjoma apstiprinājums (sk. `MASTER_1.12_BINDING_WORK_AGREEMENT.md` §D).
