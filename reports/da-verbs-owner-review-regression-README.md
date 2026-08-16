# DA–DE Verbs — OWNER review regression (Copy-Only workflow)

Tas pats princips kā **DA–DE A1/A2**:

1. Atver review failus (lokāli vai caur [GitHub indeksu](./da-verbs-owner-review-regression-GITHUB.md)).
2. Katram finding — **CURRENT_DA** ir faktiskais production teksts (`data/da/verbs.js`, `*.lv`).
3. **OWNER** apstiprina **PROPOSED_DA** laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply.

**GitHub indekss:** [da-verbs-owner-review-regression-GITHUB.md](./da-verbs-owner-review-regression-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Regression audit | [da-verbs-owner-repairs-final-regression-audit.md](./da-verbs-owner-repairs-final-regression-audit.md) |
| Reapply (LABOT corruption) | **175** |
| Linguistic micro-repair | **13** |
| Kopā OWNER review | **188** |
| DE changes | **0** |

## Divi trases

| Trase | Apraksts | Grupas |
|-------|----------|--------|
| **Reapply** | Signed OWNER lēmumi nav nonākuši production (parser bug) | 4 × 50 |
| **Linguistic** | Jauni regression findingi uz jau apply-otiem laukiem | 1 × 13 |

## Reapply grupas

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
| 1–50 | [Preview](./da-verbs-owner-review-regression-reapply-group01.md) | [Decisions](./da-verbs-owner-decisions-regression-reapply-group01.md) | 50 |
| 51–100 | [Preview](./da-verbs-owner-review-regression-reapply-group02.md) | [Decisions](./da-verbs-owner-decisions-regression-reapply-group02.md) | 50 |
| 101–150 | [Preview](./da-verbs-owner-review-regression-reapply-group03.md) | [Decisions](./da-verbs-owner-decisions-regression-reapply-group03.md) | 50 |
| 151–175 | [Preview](./da-verbs-owner-review-regression-reapply-group04.md) | [Decisions](./da-verbs-owner-decisions-regression-reapply-group04.md) | 25 |

## Linguistic micro-repair

| Preview | Decisions | Skaits |
|---------|-----------|--------|
| [Preview](./da-verbs-owner-review-regression-linguistic.md) | [Decisions](./da-verbs-owner-decisions-regression-linguistic.md) | **13** |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions (viss, PENDING) | [da-verbs-owner-decisions-regression.md](./da-verbs-owner-decisions-regression.md) |
| Accepted (ieteicamais LABOT) | [da-verbs-owner-accepted-regression.md](./da-verbs-owner-accepted-regression.md) |
| GitHub | [da-verbs-owner-review-regression-GITHUB.md](./da-verbs-owner-review-regression-GITHUB.md) |

## OWNER statusi

- **LABOT** — copy-paste PROPOSED/OWNER_DECISION
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- COPY-ONLY pēc OWNER lēmuma.
- Pirms apply: `actual current === CURRENT_DA`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
