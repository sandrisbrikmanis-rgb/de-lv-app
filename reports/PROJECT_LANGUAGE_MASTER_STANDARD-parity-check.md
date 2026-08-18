# PROJECT LANGUAGE MASTER STANDARD — parity check (pre-retirement)

Generated: 2026-08-18  
Purpose: verify whether legacy workflow standards can be deleted after MASTER adoption.

## Summary

| Gate | Result |
|------|--------|
| MASTER exists | **PASS** (`PROJECT_LANGUAGE_MASTER_STANDARD.md`) |
| Old standards discovered | **5** (in repo) + **3** (listed in MASTER §0, not found in repo) |
| Requirements checked | **52** |
| Requirements represented in MASTER | **31 / 52 (59.6%)** |
| Coverage | **NOT 100%** |
| Superseded standards removed | **0** (STOP) |
| Broken references | **0** (nothing deleted) |
| Competing authoritative standards | **5 legacy docs remain active** |
| Production changes | **0** |
| **Final verdict** | **BLOCKED — do not retire legacy standards yet** |

---

## Discovered old standards

### In repository (`docs_and_rules/`)

| # | File | Role |
|---|------|------|
| 1 | `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md` | Full audit scope, phases, tools, acceptance |
| 2 | `docs_and_rules/STUDY_CARD_RULES.md` | standardStudy/comparisonStudy, sectionAccents, titles, visual spec |
| 3 | `docs_and_rules/APP_QUALITY_STANDARD.md` | Technical + linguistic baseline |
| 4 | `docs_and_rules/COMPARISON_STUDY_RULES.md` | comparisonStudy layout, table, IDs, test links |
| 5 | `docs_and_rules/UI_UX_VISUAL_COLOR_RULES.md` | comparisonTable color enforcement |

### Listed in MASTER §0 but **not found** in repository

| Document | Status |
|----------|--------|
| `LANGUAGE_AUDIT_STANDARD_3_3_Projekta_konvenciju_interpretacija` | **NOT FOUND** — nothing to delete |
| `NEW LANGUAGE CREATION STANDARD` | **NOT FOUND** |
| `NEW LANGUAGE CREATION — FINAL REPORT STANDARD` | **NOT FOUND** |

### Explicitly **NOT** superseded (kept)

| File | Reason |
|------|--------|
| `docs_and_rules/DA-KURSS-FULL-AUDIT-TASK.md` | Dataset-specific task pack, not a global workflow standard |
| All `reports/**` audit/OWNER files | Historical dataset reports — out of scope |
| All `audits_and_reports/**` | Historical audit outputs — out of scope |

---

## Parity table

| OLD DOCUMENT | UNIQUE REQUIREMENT (obligāta) | PRESENT IN MASTER | RESULT |
|--------------|-------------------------------|-------------------|--------|
| LANGUAGE_AUDIT §1 | Konkrēts audita failu tvērums (a1–c2, sentences, verbs, Kurss, ui, manifest…) | §7.2 coverage (vispārīgi) | **PARTIAL** |
| LANGUAGE_AUDIT §2.1.1 | Ierakstu skaita identitāte vs LV katrā `{lang}/aX.js` | §2.2, §7.2 structure/parity | **PARTIAL** |
| LANGUAGE_AUDIT §2.1.6 | `ui.js` motors bez hardcoded valodas teksta | §6 UI | **YES** |
| LANGUAGE_AUDIT §2.2.7 | comparisonTable: DE zaļš, tulkojums purpurs | §4 sectionAccents / comparison | **YES** |
| LANGUAGE_AUDIT §2.2.8 | Highlight blīvums ≥ LV etalonkartes (`abfahren`, `das Band`, `kleiden`, `Holz`, `dabei`) | §4 (vispārīgi, bez etalonu nosaukumiem/min blīvuma) | **NO** |
| LANGUAGE_AUDIT §2.2.10 | Fiksētie hex `#3FA7FF`, `#B565FF`, `#FFD34D`, `#FF5B5B` u.c. | §4 krāsu nosaukumi (`blue`, `green`…), hex nav | **NO** |
| LANGUAGE_AUDIT §2.3.16 | Diakritikas renderēšanas pārbaude visos font/CSS kontekstos | nav | **NO** |
| LANGUAGE_AUDIT §2.4.17 | Ekrānuzņēmumu salīdzinājums LV vs `{lang}` katram galvenajam skatam | nav | **NO** |
| LANGUAGE_AUDIT §3.1.18 | Semikolu aizliegums nozīmēs | §1.1 | **YES** |
| LANGUAGE_AUDIT §3.1.21 | `de_article` + `de_plural` obligāti katrā kartē | nav skaidri | **NO** |
| LANGUAGE_AUDIT §3.2.27 | Native speaker izlase ~5% (min. 30 kartes) | nav | **NO** |
| LANGUAGE_AUDIT §4.29 | Pārlūka console: 0 JS kļūdas katrā ekrānā | nav | **NO** |
| LANGUAGE_AUDIT §4.31 | Audio/izrunas funkciju neatkarīga pārbaude | nav | **NO** |
| LANGUAGE_AUDIT §4.32 | `registry.js` `dataStatus` / `hasStudyData` vs fakts | nav | **NO** |
| LANGUAGE_AUDIT §5 | Konkrētu audita skriptu saraksts (8 skripti + `--lang`) | §10 validatori vispārīgi | **PARTIAL** |
| LANGUAGE_AUDIT §6 | Obligāta audita posmu secība (motors → A1–A2 → … → Kurss) | nav kā obligāta secība | **NO** |
| LANGUAGE_AUDIT §8 | Pieņemšana: 0 kritisku, 0 augstu vizuālajā slānī | §13 CLOSED (līdzīgi, citā formulējumā) | **PARTIAL** |
| LANGUAGE_AUDIT §9 | RU/PL/UK fallback quality gate piezīme | nav | **NO** |
| STUDY_CARD §LV locījumi | Visas reāli lietotās locījumu/formas obligātas `sectionAccents` | nav | **NO** |
| STUDY_CARD §Kvalitātes pārbaudes | Obligātas ne-tukšas sadaļas (`examples`, `tip`, `comparison`…) | §3.1 (konvencija > validators) | **PARTIAL** |
| STUDY_CARD §Highlight blīvums | “Ja šaubas → vairāk highlight”, etalons `abfahren` u.c. | §4 (bez min blīvuma/etalona) | **NO** |
| STUDY_CARD §DE-LV DESIGN SPEC | Konkrēti hex foni `#0B1116`, `#101820`, sadaļu hex | §4 krāsu nosaukumi | **NO** |
| STUDY_CARD §Comparison logic | `abholen` kā zelta etalons; aizliegts burta grupējums (`anfechten` tips) | §3.2 pedagoģiski salīdzinājumi (bez etalona/aizlieguma) | **NO** |
| STUDY_CARD §CARD TITLE | `•` atdalījums, bez numerācijas/semikoliem | §1.1, §3.3 | **YES** |
| APP_QUALITY §1 | JSON valīdums | nav (MASTER runā par JS/syntax) | **NO** |
| APP_QUALITY §1 | Unikāls ID katram ierakstam | §2.2 structure | **PARTIAL** |
| APP_QUALITY §2 | Akuzatīva paskaidrojums `explanation`, ja DE piemērs to prasa | nav | **NO** |
| COMPARISON §Mandatory sections | UI badge `⚖ SALIDZINAJUMA KARTITE`, `🎯 Tipiskas kļūdas`, `⭐ Atceries` | §3.2 (lauki minēti opcionāli) | **NO** |
| COMPARISON §comparisonTable | Kolonnas: LV \| DE \| Galvena nozīme \| Raksturo \| Piemērs \| Tulkojums | nav precīzas shēmas | **NO** |
| COMPARISON §Colors | Konkrēti hex (`#24A8FF`, `#35D46A`…) | §4 nosaukumi | **NO** |
| COMPARISON §Stable id | `compare-` prefikss, umlaut mapēšana | §3.2 | **YES** |
| COMPARISON §Test links | Obligāti `?card=compare-*` piemēri | nav | **NO** |
| UI_UX §1–2 | 100% vienots stils visos līmeņos + comparisonStudy | §4, §6 | **PARTIAL** |
| UI_UX §3 | `renderStudyCard()` automātiski krāso pat bez `sectionAccents` | nav (MASTER aizliedz mainīt renderer) | **NO** |
| MASTER-only (new) | Viena integration branch / nav A-B-C paralēli | §0.1, §12 | **NEW in MASTER** |
| MASTER-only (new) | OWNER CURRENT guards pirms apply | §9 | **NEW in MASTER** |
| MASTER-only (new) | 47/41 style reconciliation protocol | §12.4 | **NEW in MASTER** |
| LANGUAGE_AUDIT §3.1.20 | Placeholder/TODO/LV remnant meklēšana | §7.2 | **YES** |
| LANGUAGE_AUDIT §3.1.22 | JS `--check` pirms/pēc izmaiņām | §10 syntax | **YES** |
| LANGUAGE_AUDIT §2.3.12 | Tukša sadaļa nedrīkst renderēties | §3.1, §6 | **YES** |
| LANGUAGE_AUDIT §2.3.13 | Responsive 4/2/1 kolonnas | §4 | **YES** |
| STUDY_CARD §sectionAccents formāts | Konkrēts JSON piemērs (`explanation.de.blue`…) | §4 (formāts nemainīt, bez piemēra) | **PARTIAL** |
| LANGUAGE_AUDIT §7 | Smaguma pakāpes tabula (Kritiska/Augsta/Vidēja/Zema) | §7.5 CRITICAL/HIGH/MEDIUM/LOW | **YES** |
| MASTER §2.3 | Autoritatīvi avoti (Goethe, Duden, valsts vārdnīcas) | nav vecos standartos | **MASTER-only** |
| MASTER §5.2 legacyHtml | Pilns lauks, NEEDS_SOURCE_REVIEW, ne fragmentu minējums | LANGUAGE_AUDIT minēja personvārdus, ne legacyHtml protokolu | **MASTER-only** |
| MASTER §8.1 | Viens OWNER decisions fails / deduplikācija | nav vecos standartos | **MASTER-only** |
| MASTER §11 | Post-repair audit salīdzināmība / severity stabilitāte | nav vecos standartos | **MASTER-only** |
| MASTER §15 | Aģenta uzdevuma galvene ar MAIN_BASE_SHA | nav vecos standartos | **MASTER-only** |

---

## What MASTER is missing (must add before retirement)

Priority gaps blocking 100% coverage:

1. **Visual QA:** ekrānuzņēmumu salīdzinājums (LANGUAGE_AUDIT §2.4.17)
2. **Human QA:** native speaker izlase ~5% (§3.2.27)
3. **Runtime QA:** browser console 0 errors, audio check (§4.29, §4.31)
4. **Registry gate:** `languages/registry.js` status fields (§4.32)
5. **Audit phasing:** obligāta posmu secība (§6)
6. **Tools inventory:** pilns audita skriptu saraksts ar `--lang` (§5)
7. **Highlight density:** LV etalonkartes + minimum blīvuma noteikums (§2.2.8, STUDY_CARD)
8. **Hex color spec:** fiksētie `#3FA7FF` u.c. (vairāki veci docs)
9. **LV locījumu formas** sectionAccents (STUDY_CARD)
10. **comparisonTable shēma** (6 kolonnas) + UI badge sadaļas (COMPARISON_STUDY)
11. **Comparison pedagogy:** `abholen` etalons, burta-grupējuma aizliegums (STUDY_CARD)
12. **`de_article` / `de_plural` obligātums** (APP_QUALITY, LANGUAGE_AUDIT)
13. **Diakritikas render tests** (§2.3.16)
14. **Akuzatīva explanation rule** (APP_QUALITY)
15. **RU/PL/UK fallback quality gate** (§9)

---

## Active references to legacy standards (unchanged — docs not deleted)

| Location | Reference |
|----------|-----------|
| `scripts/validate-study-design.js` | `LANGUAGE_AUDIT_STANDARD.md §5` |
| `scripts/lib/audit-common.js` | `LANGUAGE_AUDIT_STANDARD.md §5` |
| `scripts/validate-kurss.js` | `LANGUAGE_AUDIT_STANDARD.md` |
| `docs_and_rules/DA-KURSS-FULL-AUDIT-TASK.md` | `LANGUAGE_AUDIT_STANDARD.md §3.2.25` |
| `audits_and_reports/UK-DE_*.md` | historical — kept |

---

## Recommended next step

1. Papildināt `PROJECT_LANGUAGE_MASTER_STANDARD.md` ar trūkstošajām 21 prasībām (vai apzināti noraidīt tās ar OWNER lēmumu).
2. Palielināt MASTER versiju uz **1.1**.
3. Atkārtot parity check → ja 100%, tad:
   - dzēst 5 `docs_and_rules/*` standartus;
   - pārmeklēt un pārlikt visas atsauces uz `PROJECT_LANGUAGE_MASTER_STANDARD.md`.

**This commit:** adds MASTER + parity report only. **No deletions. No reference rewrites. No production changes.**
