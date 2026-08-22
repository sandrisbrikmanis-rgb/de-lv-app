# ET–DE A2 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**MAIN_BASE_SHA:** `8123cf4aba7b8e19df030fefac7d89753b4c9d44`
**WORK_BRANCH:** `cursor/et-de-c1c2-teikumi-full-audit-4a7c`
**Audit PR:** [#610](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/610)
**Findings:** **51** · sākotnēji visi **PENDING**

Pirmais ET–DE A2 FULL_DISCOVERY — nav iepriekšējas OWNER history. Aizpildi grupu tabulas vai šo indeksu.

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-c1c2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-review-GITHUB.md) |
| OWNER VIEW | [et-c1c2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-view.md) |
| Decisions grupa 1–50 | [et-c1c2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group01.md) |
| Decisions grupa 51–51 | [et-c1c2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group02.md) |

## Pilna tabula (visi findingi)
| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-C1C2-0001 | STRUCT-c1 | study.count | 16 | 15 | CRITICAL | STRUCTURE | PENDING | | |
| ET-C1C2-0002 | STRUCT-c2 | study.count | 3 | 1 | CRITICAL | STRUCTURE | PENDING | | |
| ET-C1C2-0003 | c1-gelegentlich | entry[340].study.comparison[0].example | Er kommt gelegentlich. = Viņš reizēm atnāk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0004 | c1-gelegentlich | entry[340].study.comparison[1].example | ein gelegentlicher Besuch = gadījuma apmeklējums | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0005 | c1-gelegentlich | entry[340].study.comparison[2].example | gelegentlich des Festes = svētku sakarā | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0006 | c1-gelegentlich | entry[340].study.comparison[3].example | Manchmal regnet es. = Reizēm līst. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0007 | c1-wahlberechtigt | entry[543].study.comparison[0].example | Er ist wahlberechtigt. = Viņam ir vēlēšanu tiesības. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0008 | c1-wahlberechtigt | entry[543].study.comparison[2].example | Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0009 | c1-wettbewerb | study.sectionAccents (examples) | v | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0010 | c1-wettbewerb | study.sectionAccents (examples) | õ | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0011 | c1-wettbewerb | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0012 | c1-wettbewerb | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0013 | c1-wettbewerb | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0014 | c1-wettbewerb | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0015 | c1-wettbewerb | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0017 | c1-wettbewerb | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0019 | c1-wettbewerb | study.sectionAccents (examples) | k | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0020 | c1-wettbewerb | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0021 | c1-wettbewerb | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0024 | c1-wettbewerb | study.sectionAccents (examples) | r | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0039 | c1-voraussetzen | study.sectionAccents (explanation) | voraus | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0040 | c1-aufrechterhalten | study.sectionAccents (explanation) | erhält | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0041 | c1-aufrechterhalten | study.sectionAccents (explanation) | auf | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0042 | c2-inwiefern | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0043 | c2-inwiefern | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0044 | c2-inwiefern | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0046 | c2-inwiefern | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0047 | c2-inwiefern | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0048 | c2-inwiefern | study.sectionAccents (examples) |  | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0049 | c2-inwiefern | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0051 | c2-inwiefern | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0061 | c2-inwiefern | study.sectionAccents (examples) | k | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0062 | c2-inwiefern | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0065 | c2-inwiefern | study.sectionAccents (examples) | p | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0068 | c2-inwiefern | study.sectionAccents (examples) | j | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0070 | c2-inwieweit | study.sectionAccents (examples) | k | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0071 | c2-inwieweit | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0072 | c2-inwieweit | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0073 | c2-inwieweit | study.sectionAccents (examples) |  | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0074 | c2-inwieweit | study.sectionAccents (examples) | p | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0075 | c2-inwieweit | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0076 | c2-inwieweit | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0077 | c2-inwieweit | study.sectionAccents (examples) | j | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0082 | c2-inwieweit | study.sectionAccents (examples) | v | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0083 | c2-inwieweit | study.sectionAccents (examples) | õ | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0084 | c2-inwieweit | study.sectionAccents (examples) | r | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0085 | c2-inwieweit | study.sectionAccents (examples) | d | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0086 | c2-inwieweit | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0090 | c2-inwieweit | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0091 | c2-inwieweit | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0093 | c2-inwieweit | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
