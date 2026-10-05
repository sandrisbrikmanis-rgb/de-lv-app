# MASTER 1.12 — Saistošais darba līgums

**Crowdin satura kārtība šajā dokumentā: NOVECOJIS**

STATUS: DEPRECATED / NOT ACTIVE — balstīts uz Crowdin kārtību, kas ir
izņemta no MASTER (v1.19). Nav spēkā līdz OWNER atkārtotam apstiprinājumam.

Šis banners attiecas uz Crowdin satura tulkošanas kārtību (mērķa rindas vārds „Crowdin”, §B kolonna „Crowdin” grupām G1–G3, §C Content-Crowdin bridge, §E, §G Crowdin rindas, §J p.2, `PHASE_0_CROWDIN_DISCOVERY_SPEC.md`). Konfliktu protokols §0 paliek spēkā. G5 / `languages/{lang}/ui.js` rinda §B nav šī bannera tvērums. Satura avotu apstiprināšana: MASTER §7.158.

**Statuss:** AUTHORITATIVE / OBLIGĀTS — izņemot augstāk atzīmētās NOVECOJUŠĀS Crowdin satura daļas  
**Saistīts ar:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` (pašlaik v1.19; §7.153–§7.158)  
**Mērķis:** viens autoritatīvs ceļvedis visiem valodu satura darbiem (A1–C2, Teikumi, Verbi, Kurss). Agrākais mērķa vārds „Crowdin” ir **NOVECOJIS** (sk. banneri). Dokuments nav pretrunā ar MASTER, ciktāl Crowdin satura daļas ir atzīmētas kā NOVECOJUŠAS.

Ja šī dokumenta prasības ir pretrunā ar `PROJECT_LANGUAGE_MASTER_STANDARD.md`, spēkā ir MASTER dokuments. Šis līgums precizē **izpildes secību un konfliktu protokolu**. Crowdin integrācija kā satura tulkošanas ceļš ir **NOVECOJIS** (MASTER v1.19 §7.158).

**Lingvistiskais audits:** obligāti `MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md` + MASTER §7.153–§7.158 (avotu atbalstīts audits, 33 valodas, PASS slēgšana, OWNER tvērums, vārda līmeņa avotu apstiprināšana).

------------------------------------------------------------------------

## 0. Konfliktu protokols (obligāts visiem aģentiem)

Ja kāds no OWNER uzdevumiem ir pretrunā ar šo līgumu vai MASTER 1.12:

1. **Uzreiz norādīt** konkrētu pretrunu (šī līguma punkts + MASTER sadaļa).
2. **Pārtraukt darbu** — nekādu apply, commit ar production izmaiņām, Crowdin import uz production, closure.
3. **Turpināt tikai pēc OWNER apstiprinošas atbildes**, kurā skaidri izvēlēts: ievērot līgumu, grozīt līgumu, vai apzināti pieņemt izņēmumu.

------------------------------------------------------------------------

## A. Pamatprincipi (vienmēr spēkā)

| # | Princips | MASTER |
|---|----------|--------|
| A1 | Vienīgais autoritatīvais avots: `origin/main` + pēdējā `FINAL_CLOSED` metadata | §0.1, §7.9 |
| A2 | LV = struktūras/pedagoģijas master; DE = STRICT READ-ONLY | §1.2, §1.4, lingv. groz. §5 |
| A2b | Lingvistiskais audits = avotu atbalstīts; AI nav LANGUAGE AUTHORITY | §7.153–§7.156, `MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md` §2, §15 |
| A3 | Viena kartīte = viena galvenā nozīme = viens galvenais tulkojums | §1.1 |
| A4 | `PROPOSED` / Crowdin / Luna ≠ OWNER lēmums ≠ production `NEW` | §0.2, §1.1.4 |
| A5 | Vairāku tulkojumu gadījumā: `OWNER_DECISION_REQUIRED`; automātiska izvēle aizliegta | §1.1.3, §1.1.8 |
| A6 | Vienam datasetam — viens lineārs process, viens aktīvs repair branch | §0.1, §12.2 |
| A7 | `Branch PASS ≠ MAIN PASS`; `Branch CLOSED ≠ FINAL_CLOSED` | §7.9 |
| A8 | `--force-baseline` un līdzīgi override — tikai `DIAGNOSTIC_ONLY`, ne production | §7.9.4 |

------------------------------------------------------------------------

## B. Satura grupēšana

| Grupa | Datasets | Crowdin | Closure |
|-------|----------|---------|---------|
| **G0** | Kopīgā infrastruktūra | — | — |
| **G1** | `sentences`, `verbs`, `courseTrainingCards` | viens vienkāršs projekts **[NOVECOJIS]** | bez LIVE |
| **G2** | `a1`…`c2` flashcards | viena shēma, fāzēta tulkošana **[NOVECOJIS]** | bez LIVE |
| **G3** | `courseLessons` (L8–L21 strukturēts + L1–7 HTML) | daļēji **[NOVECOJIS]** | **obligāts LIVE** §11.12 |
| **G5** | `languages/{lang}/ui.js` | jau darbojas | atsevišķi |

Kolonna „Crowdin” grupām G1–G3 ir **NOVECOJIS** (sk. banneri faila augšā). G5 rinda nav mainīta.

**Kurss neliekams pie A1–C2** — cits datu modelis + runtime vārti.

Detalizēta Fāze 0 specifikācija: `PHASE_0_CROWDIN_DISCOVERY_SPEC.md` — **NOVECOJIS** (sk. banneri).

------------------------------------------------------------------------

## C. Fāze 0 — Infrastruktūra (pirms jebkura satura labojuma)

- Content-Crowdin bridge katram G1/G2/G3 (kopīga bibliotēka). **[NOVECOJIS]** — sk. banneri faila augšā.
- Deterministiskie vārti visām grupām, ieskaitot `MAIN_TRANSLATION_FIELD_INVENTORY` un `MULTI_TRANSLATION_SCAN` 100%.
- Orchestratori ar automātisku OWNER-PREP pēc audita.
- **Exit:** bridge tests PASS **[NOVECOJIS — Content-Crowdin bridge]**, production changes = 0 paliek spēkā.

------------------------------------------------------------------------

## D. Fāze 1 — READ-ONLY Discovery

**Mērķis:** pilns CURRENT stāvoklis + apjoma karte. **Nekādu tulkošanu, Crowdin import, apply.**

Pirms katra audita obligāti: BASELINE GATE (§7.8–§7.9).

Discovery exit:

- `DETERMINISTIC_SCOPE_COVERAGE = 100%`
- `MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%`
- `MULTI_TRANSLATION_SCAN` coverage = 100%
- Production changes = 0
- OWNER apstiprina nākamo fāzi

**Bez OWNER apstiprinājuma → uz Fāzi 2 netiek.**

------------------------------------------------------------------------

## E. Fāze 2 — Crowdin round (tulkošana, ne apply)

**NOVECOJIS.** STATUS: DEPRECATED / NOT ACTIVE — balstīts uz Crowdin kārtību, kas ir izņemta no MASTER (v1.19). Nav spēkā līdz OWNER atkārtotam apstiprinājumam. Satura tulkojumu avotu apstiprināšana ir MASTER §7.158.

- Export tikai translatable lauki; DE un struktūra ārpus.
- Tulkošana Crowdin; G2 fāzēti `A1 → A2 → B1 → B2 → C1 → C2`.
- Import **tikai uz staging**; post-import deterministiskie vārti.
- Crowdin output **vēl nav production** — tikai findings + PROPOSED.

------------------------------------------------------------------------

## F. Fāze 3 — §17 autoritatīvais cikls

Katram datasetam × valodai/posmam lineāri:

```text
1.  SYNC origin/main + BASELINE GATE
2.  FULL READ-ONLY DISCOVERY (100%)
3.  DISCOVERY HISTORY VALIDATION (§7.11–§7.19)
4.  PRE_BACKLOG_HISTORY_GATE (§7.18)
5.  OWNER-PREP artefakti (ja findings > 0) → commit + push
6.  OWNER lēmumi
7.  Viens autoritatīvs OWNER decisions fails (§8.1)
8.  COPY-ONLY apply (§9)
9.  TARGETED REGRESSION (§10)
10. DETERMINISTIC FULL GATES
11. FULL READ-ONLY DISCOVERY RE-AUDIT (100%) (§11.1)
12. NEW_VALIDATED_REAL_FINDINGS > 0 ? → atpakaļ uz 6. : turpināt
13. CLOSURE PASS → CLOSED_PENDING_MAIN_INTEGRATION
14. MERGE uz origin/main
15. POST_MERGE_MAIN_VERIFICATION (§12.6, §12.7)
16. FINAL_CLOSED + fiksēt closure baseline
17. Nākamais dataset sākas no verificēta origin/main
```

Jebkurš FAIL/BLOCKED → process apstājas.

------------------------------------------------------------------------

## G. OWNER un multi-translation (Crowdin kontekstā)

Virsraksta „Crowdin kontekstā” un Crowdin rindas tabulā ir **NOVECOJIS** (sk. banneri faila augšā). Pārējās rindas (PROPOSED, LABOT, NELABOT, NEEDS_SOURCE_REVIEW, SKIP) paliek spēkā.

| Situācija | Rīcība |
|-----------|--------|
| Crowdin atgriež `A • B` **[NOVECOJIS]** | `MULTIPLE_TRANSLATIONS_DETECTED` → OWNER |
| Crowdin viens variants, audits konflikts **[NOVECOJIS]** | OWNER |
| Audits iesaka `PROPOSED` | OWNER VIEW tikai; ne apply |
| OWNER `LABOT` | COPY-ONLY ar precīzu CURRENT + NEW |
| OWNER `NELABOT` | production nemainās |
| OWNER `NEEDS_SOURCE_REVIEW` | apply aizliegts, closure BLOCKED |
| Nav OWNER lēmuma | `SKIP_OWNER_DECISION_REQUIRED` |

**Aizliegts:** Crowdin → tieši production **[NOVECOJIS kā satura ceļš]**; automātiska variantu izvēle; `PROPOSED` kā `NEW` bez OWNER.

------------------------------------------------------------------------

## H. Closure hard gates (§11.11, §11.14, §11.15)

Pirms `FINAL_CLOSED_ON_MAIN`:

```text
DETERMINISTIC_SCOPE_COVERAGE = 100%
DETERMINISTIC_DISCOVERY_COMPLETENESS = 100%
SYNTAX / MIRROR / ID_ORDER / STRUCTURE / PARITY = PASS
FOREIGN_LANGUAGE_RESIDUAL = 0
EMPTY_REQUIRED_LOCALIZED_FIELDS = 0
PLACEHOLDERS = 0 / MOJIBAKE = 0
OWNER_BACKLOG_FINAL = 0 / NEEDS_SOURCE_REVIEW = 0 / PENDING = 0
UNEXPECTED_PRODUCTION_CHANGES = 0 / DE_CHANGES = 0
MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
UNMAPPED_MAIN_TRANSLATION_FIELDS = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0
MULTI_TRANSLATION_RESIDUAL_SCAN = PASS
```

G3 Kurss papildus: §11.12 LIVE/runtime gates.

------------------------------------------------------------------------

## I. Ieteicamā izpildes secība

| Posms | Darbs |
|-------|-------|
| 0 | Infrastruktūra (Fāze 0 spec) |
| 1 | Discovery viss (READ-ONLY) |
| 2a–c | G1: sentences → verbs → courseTrainingCards |
| 3a–f | G2: A1 → A2 → B1 → B2 → C1 → C2 |
| 4a–b | G3: COURSE_LESSON_DATA → COURSE_LESSON_HTML + LIVE |

**Vienā laikā aktīvs:** viens dataset × viens posms (vai skaidri apstiprināts valodu batch).

------------------------------------------------------------------------

## J. Absolūti aizliegts

1. Tulkošana/apply pirms discovery + OWNER apjoma apstiprinājuma  
2. Crowdin import tieši uz production **[NOVECOJIS]** — sk. banneri faila augšā  
3. DE lauku maiņa  
4. LV master struktūras maiņa  
5. Paralēli repair branch viena datasetam  
6. Audit no neintegrēta closure branch  
7. `--force-baseline` production workflow  
8. Closure bez pilna re-audit (§11.1)  
9. Closure bez §11.15 multi-translation metrikām  
10. Kurss closure bez LIVE regression  
11. OWNER-PREP izlaišana, ja findings > 0  
12. Automātiska multi-translation izvēle  
13. Vairāki konkurējoši OWNER decisions faili apply laikā  

------------------------------------------------------------------------

## K. Aģenta pienākumi katrā uzdevumā

**Pirms darba:** pretrunu pārbaude; baseline tīrība; iepriekšējā scope closure statuss.  
**Darba laikā:** READ-ONLY līdz OWNER; OWNER artefakti automātiski; commit + push iterācijās.  
**Pēc darba:** verdict PASS / NEEDS OWNER REVIEW / BLOCKED; closure metrikas; nākamais solis pēc šī līguma.

------------------------------------------------------------------------

**Saistītie dokumenti:**

- `PROJECT_LANGUAGE_MASTER_STANDARD.md` (v1.19)
- `MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md`
- `PHASE_0_CROWDIN_DISCOVERY_SPEC.md` — **NOVECOJIS** (sk. banneri faila augšā)
- `LANGUAGE_AUDIT_STANDARD.md` (vēsturisks; lingvistiskā metodika — MASTER §7.153+)
