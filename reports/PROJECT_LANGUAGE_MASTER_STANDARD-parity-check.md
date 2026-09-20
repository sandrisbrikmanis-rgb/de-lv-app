# PROJECT LANGUAGE MASTER STANDARD — parity check (v1.1 retirement)

Generated: 2026-08-18  
Purpose: verify 100% legacy parity before retiring competing standards.

## Summary

| Gate | Result |
|------|--------|
| MASTER version | **1.1** (`PROJECT_LANGUAGE_MASTER_STANDARD.md`) |
| Requirements checked | **52** |
| COVERED | **49** |
| SUPERSEDED_BY_NEWER_MASTER_RULE | **3** |
| MISSING | **0** |
| PARTIAL | **0** |
| AMBIGUOUS | **0** |
| Coverage | **100%** |
| Legacy standards deleted | **5** |
| Broken active references | **0** |
| Competing authoritative standards | **0** |
| Production changes | **0** |
| **Final verdict** | **MASTER_CONSOLIDATION_COMPLETE** |

---

## Parity table

| ID | SOURCE DOCUMENT | SOURCE SECTION | REQUIREMENT | MASTER SECTION | STATUS |
|----|-----------------|----------------|-------------|----------------|--------|
| REQ-001 | LANGUAGE_AUDIT_STANDARD | §1 | Konkrēts audita failu tvērums (a1–c2, sentences, verbs, Kurss, ui, manifest, registry, ui.js, style.css) abos slāņos | §7.2 | COVERED |
| REQ-002 | LANGUAGE_AUDIT_STANDARD | §2.1.1 | Ierakstu skaita identitāte vs LV katrā `{lang}/aX.js` | §7.2 | COVERED |
| REQ-003 | LANGUAGE_AUDIT_STANDARD | §2.1.6 | `ui.js` motors bez hardcoded valodas teksta | §6.1 | COVERED |
| REQ-004 | LANGUAGE_AUDIT_STANDARD | §2.2.7 | comparisonTable: DE zaļš, tulkojums purpurs | §4.3 | COVERED |
| REQ-005 | LANGUAGE_AUDIT_STANDARD | §2.2.8 | Highlight blīvums ≥ LV etalonkartes (`abfahren`, `das Band`, `kleiden`, `Holz`, `dabei`) | §4.2 | COVERED |
| REQ-006 | LANGUAGE_AUDIT_STANDARD | §2.2.10 | Fiksētie hex `#3FA7FF`, `#B565FF`, `#FFD34D`, `#FF5B5B` u.c. | §4.3 | COVERED |
| REQ-007 | LANGUAGE_AUDIT_STANDARD | §2.3.16 | Diakritikas renderēšanas pārbaude visos font/CSS kontekstos | §4.5 | COVERED |
| REQ-008 | LANGUAGE_AUDIT_STANDARD | §2.4.17 | Ekrānuzņēmumu salīdzinājums LV vs `{lang}` katram galvenajam skatam | §4.5, §7.9 | COVERED |
| REQ-009 | LANGUAGE_AUDIT_STANDARD | §3.1.18 | Semikolu aizliegums nozīmēs | §1.1 | COVERED |
| REQ-010 | LANGUAGE_AUDIT_STANDARD | §3.1.21 | `de_article` + `de_plural` obligāti katrā kartē (ja LV etalonā ir) | §2.4 | COVERED |
| REQ-011 | LANGUAGE_AUDIT_STANDARD | §3.2.27 | Native speaker izlase ~5% (min. 30 kartes) | §7.8 | COVERED |
| REQ-012 | LANGUAGE_AUDIT_STANDARD | §4.29 | Pārlūka console: 0 JS kļūdas katrā ekrānā | §6.1, §7.9 | COVERED |
| REQ-013 | LANGUAGE_AUDIT_STANDARD | §4.31 | Audio/izrunas funkciju neatkarīga pārbaude | §6.1, §7.9 | COVERED |
| REQ-014 | LANGUAGE_AUDIT_STANDARD | §4.32 | `registry.js` `dataStatus` / `hasStudyData` vs fakts | §7.12 | COVERED |
| REQ-015 | LANGUAGE_AUDIT_STANDARD | §5 | Konkrētu audita skriptu saraksts (8 skripti + `--lang`) | §7.7 | COVERED |
| REQ-016 | LANGUAGE_AUDIT_STANDARD | §6 | Obligāta audita posmu secība (motors → A1–A2 → … → Kurss) | §7.6 | COVERED |
| REQ-017 | LANGUAGE_AUDIT_STANDARD | §8 | Pieņemšana: 0 kritisku, 0 augstu vizuālajā slānī | §7.11, §13 | COVERED |
| REQ-018 | LANGUAGE_AUDIT_STANDARD | §9 | RU/PL/UK fallback quality gate piezīme | §2.5 | COVERED |
| REQ-019 | STUDY_CARD_RULES | LV locījumi | Visas reāli lietotās locījumu/formas obligātas `sectionAccents` | §4.1 | COVERED |
| REQ-020 | STUDY_CARD_RULES | Kvalitātes pārbaudes | Obligātas ne-tukšas sadaļas (`examples`, `tip`, `comparison`…) | §3.1 | COVERED |
| REQ-021 | STUDY_CARD_RULES | Highlight blīvums | “Ja šaubas → vairāk highlight”, etalons `abfahren` u.c. | §4.2 | COVERED |
| REQ-022 | STUDY_CARD_RULES | DE-LV DESIGN SPEC | Konkrēti hex foni `#0B1116`, `#101820`, sadaļu hex | §4.3 | COVERED |
| REQ-023 | STUDY_CARD_RULES | Comparison logic | `abholen` kā zelta etalons; aizliegts burta grupējums (`anfechten` tips) | §3.2 | COVERED |
| REQ-024 | STUDY_CARD_RULES | CARD TITLE | `•` atdalījums, bez numerācijas/semikoliem | §1.1, §3.3 | COVERED |
| REQ-025 | APP_QUALITY_STANDARD | §1 | JSON valīdums | §6.1 | SUPERSEDED_BY_NEWER_MASTER_RULE |
| REQ-026 | APP_QUALITY_STANDARD | §1 | Unikāls ID katram ierakstam | §2.2, §6.1 | COVERED |
| REQ-027 | APP_QUALITY_STANDARD | §2 | Akuzatīva paskaidrojums `explanation`, ja DE piemērs to prasa | §3.1 | COVERED |
| REQ-028 | COMPARISON_STUDY_RULES | Mandatory sections | UI badge `⚖ SALIDZINAJUMA KARTITE`, `🎯 Tipiskas kļūdas`, `⭐ Atceries` | §3.2 | COVERED |
| REQ-029 | COMPARISON_STUDY_RULES | comparisonTable | Kolonnas: LV \| DE \| Galvena nozīme \| Raksturo \| Piemērs \| Tulkojums | §3.2 | COVERED |
| REQ-030 | COMPARISON_STUDY_RULES | Colors | Konkrēti hex (`#24A8FF`, `#35D46A`…) | §4.3 | COVERED |
| REQ-031 | COMPARISON_STUDY_RULES | Stable id | `compare-` prefikss, umlaut mapēšana | §3.2 | COVERED |
| REQ-032 | COMPARISON_STUDY_RULES | Test links | Obligāti `?card=compare-*` piemēri | §3.2 | COVERED |
| REQ-033 | UI_UX_VISUAL_COLOR_RULES | §1–2 | 100% vienots stils visos līmeņos + comparisonStudy | §4.5, §6.1 | COVERED |
| REQ-034 | UI_UX_VISUAL_COLOR_RULES | §3 | `renderStudyCard()` automātiski krāso pat bez `sectionAccents` | §4.4 | SUPERSEDED_BY_NEWER_MASTER_RULE |
| REQ-035 | LANGUAGE_AUDIT_STANDARD | §3.1.20 | Placeholder/TODO/LV remnant meklēšana | §7.2, §6.1 | COVERED |
| REQ-036 | LANGUAGE_AUDIT_STANDARD | §3.1.22 | JS `--check` pirms/pēc izmaiņām | §6.1, §10 | COVERED |
| REQ-037 | LANGUAGE_AUDIT_STANDARD | §2.3.12 | Tukša sadaļa nedrīkst renderēties | §3.1, §6.1 | COVERED |
| REQ-038 | LANGUAGE_AUDIT_STANDARD | §2.3.13 | Responsive 4/2/1 kolonnas | §4.5 | COVERED |
| REQ-039 | STUDY_CARD_RULES | sectionAccents formāts | Konkrēts JSON piemērs (`explanation.de.blue`…) | §4.4 | COVERED |
| REQ-040 | LANGUAGE_AUDIT_STANDARD | §7 | Smaguma pakāpes tabula (Kritiska/Augsta/Vidēja/Zema) | §7.5 | COVERED |
| REQ-041 | LANGUAGE_AUDIT_STANDARD | §3.1.19 | `study.translation` jāsakrīt ar `{lang}` nozīmēm | §1.1, §3.1 | SUPERSEDED_BY_NEWER_MASTER_RULE |
| REQ-042 | LANGUAGE_AUDIT_STANDARD | §2.3.11 | Sadaļu secība identiska visās valodās | §4.5 | COVERED |
| REQ-043 | LANGUAGE_AUDIT_STANDARD | §2.3.15 | Mojibake regex meklēšana | §6.1, §7.7 | COVERED |
| REQ-044 | LANGUAGE_AUDIT_STANDARD | §4.28 | Pilna lietotāja plūsma bez LV teksta/tukšām kartēm | §6.1 | COVERED |
| REQ-045 | LANGUAGE_AUDIT_STANDARD | §4.30 | Visas UI `t()` atslēgas aizpildītas | §6.1 | COVERED |
| REQ-046 | STUDY_CARD_RULES | sectionAccents | Daļēju substring sakritību aizliegums | §4 | COVERED |
| REQ-047 | COMPARISON_STUDY_RULES | Visual rules | Tas pats renderer, krāsas, sectionAccents loģika | §3.2, §4 | COVERED |
| REQ-048 | STUDY_CARD_RULES | Learning principle | Vārdnīca vs learning-card — virsraksts īss, detaļas Study | §1.1 | COVERED |
| REQ-049 | LANGUAGE_AUDIT_STANDARD | §2.1.3 | `study.layout` un sadaļas = LV analogam | §7.2 | COVERED |
| REQ-050 | LANGUAGE_AUDIT_STANDARD | §2.1.4 | `sectionAccents` pilnīgums, kur LV tos satur | §4, §7.2 | COVERED |
| REQ-051 | LANGUAGE_AUDIT_STANDARD | §2.1.5 | Unikāls `id`; comparison `compare-*` prefikss | §3.2, §7.2 | COVERED |
| REQ-052 | COMPARISON_STUDY_RULES | Responsive | Desktop 4 / tablet 2 / mobile 1, bez overflow | §3.2, §4.5 | COVERED |

---

## Superseded legacy rules (resolved, not missing)

| ID | Legacy rule | Superseded by | Rationale |
|----|-------------|---------------|-----------|
| REQ-025 | JSON valīdums (APP_QUALITY §1) | §6.1 Sintakse | Dati ir JS moduļi; `node --check` ir projekta faktiskā konvencija |
| REQ-034 | `renderStudyCard()` auto-highlight bez `sectionAccents` | §4.4 | Renderer/CSS nedrīkst mainīt; datiem jābūt pilnīgiem `sectionAccents` |
| REQ-041 | `study.translation` mehāniska identitāte ar `{lang}` | §1.1, §3.1 | Study apzināti skaidro papildu nozīmes; Learning First principa daļa |

---

## Deleted legacy standards

| # | File | Retirement |
|---|------|------------|
| 1 | `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md` | **DELETED** — consolidated into MASTER v1.1 |
| 2 | `docs_and_rules/STUDY_CARD_RULES.md` | **DELETED** |
| 3 | `docs_and_rules/APP_QUALITY_STANDARD.md` | **DELETED** |
| 4 | `docs_and_rules/COMPARISON_STUDY_RULES.md` | **DELETED** |
| 5 | `docs_and_rules/UI_UX_VISUAL_COLOR_RULES.md` | **DELETED** |

### Explicitly retained (not global workflow standards)

| File | Reason |
|------|--------|
| `docs_and_rules/DA-KURSS-FULL-AUDIT-TASK.md` | Dataset-specific task pack |
| `reports/**`, `audits_and_reports/**` | Historical audit outputs — references preserved as-is |

---

## Active references updated

| Location | Change |
|----------|--------|
| `scripts/validate-study-design.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7` |
| `scripts/lib/audit-common.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7` |
| `scripts/validate-kurss.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7` |
| `scripts/validate-flashcard-routing.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7` |
| `scripts/smoke-test-ui.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7` |
| `scripts/validate-lt-highlight-density.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §4.2` |
| `scripts/fix-cs-audit-findings.js` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §7` |
| `docs_and_rules/DA-KURSS-FULL-AUDIT-TASK.md` | → `PROJECT_LANGUAGE_MASTER_STANDARD.md §5.1, §7.10` |

Historical `reports/**` and repair spec JSON rationale strings — **unchanged** (out of scope).

---

## Remaining authoritative standards

| Standard | Role |
|----------|------|
| `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1 | **Only** operative global language/workflow standard |
| `docs_and_rules/DA-KURSS-FULL-AUDIT-TASK.md` | Dataset-specific DA Kurss audit task pack |

**Competing authoritative standards:** 0
