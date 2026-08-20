# ET–DE A2 — NEEDS_SOURCE_REVIEW (5 atvērti)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Baseline:** `origin/main` post PR #617
**DE:** STRICT READ-ONLY

> Production nav mainīts. Šie 5 gadījumi gaida OWNER source-review lēmumu.

## ET-A2-0194

| Lauks | Vērtība |
|-------|---------|
| **Audit ID** | ET-A2-0194 |
| **Card ID** | `a2-Traube-1464` |
| **Field/path** | `entry[1464].lv` |
| **Severity** | HIGH |
| **Category** | FOREIGN_REMNANT |
| **OWNER STATUS** | NEEDS_SOURCE_REVIEW |

**DE (read-only):** Traube
**LV MASTER reference:** —
**CURRENT (accepted):** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta
**Actual production (main):** "Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta"
**PROPOSED_ET (audit):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami soor

**Ieteikums (nav automātiska apply):** Ieteicams: OWNER nosaka precīzu tīru ET vērtību no DE avota „Ich lerne, damit ich die Prüfung bestehe.” → „Ma õpin, et eksamist sooritada.” (NEEDS_SOURCE_REVIEW līdz OWNER apstiprina NEW).

---

## ET-A2-0337

| Lauks | Vērtība |
|-------|---------|
| **Audit ID** | ET-A2-0337 |
| **Card ID** | `a2-ehrlich` |
| **Field/path** | `study.examples[4].lv` |
| **Severity** | HIGH |
| **Category** | SEMANTICS |
| **OWNER STATUS** | NEEDS_SOURCE_REVIEW |

**DE (read-only):** ehrlich
**LV MASTER reference:** viņš ir jauks.
**CURRENT (accepted):** ta on tore.
**Actual production (main):** "ta on tore."
**PROPOSED_ET (audit):** ta on aus.
**Problēma:** „Tore” tähendab kena või meeldivat, mitte saksa ehrlich tähendust „aus”.
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Kaffeesatz bleibt im Glas. = valodas Kohvipaks jääb klaasi.

**Ieteikums (nav automātiska apply):** Ieteicams variants A: **NELABOT** „ta on tore.” (LV MASTER „viņš ir jauks”). Variants B: **LABOT** → „ta on aus.” ja OWNER apstiprina ehrlich semantiku.

---

## ET-A2-0393

| Lauks | Vērtība |
|-------|---------|
| **Audit ID** | ET-A2-0393 |
| **Card ID** | `a2-rasen-study` |
| **Field/path** | `study.examples[2].lv` |
| **Severity** | MEDIUM |
| **Category** | TRANSLATION |
| **OWNER STATUS** | NEEDS_SOURCE_REVIEW |

**DE (read-only):** Rasen
**LV MASTER reference:** —
**CURRENT (accepted):** MEDIUM
**Actual production (main):** "auto kihutab läbi linna."
**PROPOSED_ET (audit):** —
**Problēma:** —
**OWNER history:** —
**OWNER approved (iepriekš):** —

**Ieteikums (nav automātiska apply):** Trūkst DE/LV avota piemēra teksta repo. Atstāt NSR līdz OWNER norāda pareizo tukšā lauka saturu.

---

## ET-A2-0402

| Lauks | Vērtība |
|-------|---------|
| **Audit ID** | ET-A2-0402 |
| **Card ID** | `a2-sich-befinden` |
| **Field/path** | `study.examples[4].lv` |
| **Severity** | HIGH |
| **Category** | SEMANTICS |
| **OWNER STATUS** | NEEDS_SOURCE_REVIEW |

**DE (read-only):** sich befinden
**LV MASTER reference:** es šodien jūtos labi.
**CURRENT (accepted):** ma tunnen end täna hästi.
**Actual production (main):** "ma tunnen end täna hästi."
**PROPOSED_ET (audit):** ma asun täna siin.
**Problēma:** Praegune lause tähendab „sich fühlen”, mitte asukohta väljendavat „sich befinden”.
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Treffen war nett. = Kohtumine oli meeldiv.

**Ieteikums (nav automātiska apply):** Ieteicams variants A: **NELABOT** CURRENT (sich fühlen). Variants B: **LABOT** → „ma asun täna siin.” ja OWNER apstiprina sich befinden asukoha tähendust.

---

## ET-A2-0426

| Lauks | Vērtība |
|-------|---------|
| **Audit ID** | ET-A2-0426 |
| **Card ID** | `a2-wiegen` |
| **Field/path** | `study.examples[5].lv` |
| **Severity** | MEDIUM |
| **Category** | STUDY |
| **OWNER STATUS** | NEEDS_SOURCE_REVIEW |

**DE (read-only):** wiegen
**LV MASTER reference:** automašīna stāv ārā.
**CURRENT (accepted):** auto seisab õues.
**Actual production (main):** "auto seisab õues."
**PROPOSED_ET (audit):** auto kaalub kaks tonni.
**Problēma:** Lause on grammatiliselt korrektne, kuid ei näitlikusta verbi wiegen tähendust „kaaluma“.
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar

**Ieteikums (nav automātiska apply):** Ieteicams variants A: **NELABOT** CURRENT. Variants B: **LABOT** → „auto kaalub kaks tonni.” ja OWNER vēlas wiegen=kaaluma näidet.

---
