# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.6
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `6f74ddf4e721eed5e264132dc5f96d445f45586e`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-v17-ba9e`
**Audit PR:** [#597](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/597)
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **23**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [et-a1-owner-decisions.md](et-a1-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-ba9e/reports/et-a1-owner-review-GITHUB.md) |
| OWNER README | [et-a1-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-ba9e/reports/et-a1-owner-review-README.md) |
| OWNER DECISIONS | [et-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-ba9e/reports/et-a1-owner-decisions.md) |
| Pilns audits | [et-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-ba9e/reports/et-a1-full-audit.md) |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–23 | 23 | [et-a1-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-ba9e/reports/et-a1-owner-view-group01.md) | [et-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-ba9e/reports/et-a1-owner-decisions-group01.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `a1-huebsch` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0002** `a1-huebsch` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0003** `a1-sicher` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0004** `a1-sitzen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0005** `a1-sitzen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0006** `a1-stehen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A1-0007** `a1-baden` · `study.sectionAccents.comparison.meaning` · MEDIUM · sectionAccents termins "ujuma" nav atrodams sadaļā comparison
- **ET-A1-0008** `a1-baden` · `study.sectionAccents.comparison.meaning` · MEDIUM · sectionAccents termins "liikumisena" nav atrodams sadaļā comparison
- **ET-A1-0009** `a1-baden` · `study.sectionAccents.comparison.meaning` · MEDIUM · sectionAccents termins "spordina" nav atrodams sadaļā comparison
- **ET-A1-0010** `a1-gleich` · `study.sectionAccents.examples.lv` · MEDIUM · sectionAccents termins "kohe" nav atrodams sadaļā examples
- **ET-A1-0011** `a1-hübsch` · `study.sectionAccents.examples.lv` · MEDIUM · sectionAccents termins "seljas" nav atrodams sadaļā examples
- **ET-A1-0012** `a1-Freundin-202` · `etText` · MEDIUM · Sõbratar tähendab peamiselt romantilist tüdruksõpra; Freundin võib tähendada ka …
- **ET-A1-0013** `a1-Handschuh-268` · `etText` · HIGH · Estonian entry is the inessive plural form; the German singular noun requires th…
- **ET-A1-0014** `a1-bis` · `study.examples[1].lv` · LOW · Lause algus peab eesti keeles olema suure algustähega.
- **ET-A1-0015** `a1-bis` · `study.examples[2].lv` · LOW · Lause algus peab eesti keeles olema suure algustähega.
- **ET-A1-0016** `a1-hand-study` · `study.examples[2].lv` · MEDIUM · German Hand means käsi; käsivars specifically means forearm and is too narrow fo…
- **ET-A1-0017** `a1-heißen` · `study.translation` · MEDIUM · „Nimi olema” is not an idiomatic Estonian infinitive expression for being called…
- **ET-A1-0019** `a1-ihr` · `study.examples[5].lv` · LOW · The sentence begins with a lowercase letter.
- **ET-A1-0020** `a1-reis` · `study.examples[2].lv` · MEDIUM · Keetmine on valmistamise üks viis, kuid saksa Reis ei piira tegevust keetmisega.
- **ET-A1-0022** `a1-sitzen` · `study.examples[2].lv` · HIGH · Lätikeelne näide tähendab, et ta seisab; eestikeelne „istub” annab vastupidise t…
- **ET-A1-0023** `a1-sitzen` · `study.examples[3].lv` · HIGH · Lätikeelne näide tähendab, et kass lamab; „istub” on vale asend.
- **ET-A1-0024** `a1-stehen` · `study.examples[2].lv` · HIGH · Lätikeelne näide tähendab, et ta istub; eestikeelne „seisab” annab vastupidise t…
- **ET-A1-0025** `a1-werden` · `study.examples[3].lv` · MEDIUM · „Ma olen väsinud” tähendab „ich bin müde” ega väljenda muutumist, mida „werden” …
