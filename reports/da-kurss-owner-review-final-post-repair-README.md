# DA–DE Kurss — OWNER review final post-repair (Copy-Only workflow)

Tas pats princips kā **DA–DE Verbs/A1/A2**:

1. Atver review failus (lokāli vai caur [GitHub indeksu](./da-kurss-owner-review-final-post-repair-GITHUB.md)).
2. Katram finding — **CURRENT_DA** ir faktiskais production teksts.
3. **OWNER** apstiprina **PROPOSED_DA** laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply.

**GitHub indekss:** [da-kurss-owner-review-final-post-repair-GITHUB.md](./da-kurss-owner-review-final-post-repair-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Final post-repair audit | [da-kurss-final-post-repair-audit.md](./da-kurss-final-post-repair-audit.md) |
| DA fields audited | **1266** |
| **Jaunie FPR findings** | **248** |
| **Prior NEEDS_SOURCE_REVIEW** | **73** |
| Kopā OWNER review | **321** |
| CRITICAL | **27** |
| HIGH | **153** |
| MEDIUM | **63** |
| LOW | **5** |
| FPR review grupas | **5** (pa 50) |
| NSR carry-forward grupas | **2** |
| DE changes | **0** |

> **Piezīme:** 16 lesson7 `.lv` STRUCTURE ieraksti var pārklāties starp FPR un NSR — pārskati abus trackus pirms apply.

## FPR grupu faili (248 findings)

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
| 1–50 | [Preview](./da-kurss-owner-review-final-post-repair-group01.md) | [Decisions](./da-kurss-owner-decisions-final-post-repair-group01.md) | 50 |
| 51–100 | [Preview](./da-kurss-owner-review-final-post-repair-group02.md) | [Decisions](./da-kurss-owner-decisions-final-post-repair-group02.md) | 50 |
| 101–150 | [Preview](./da-kurss-owner-review-final-post-repair-group03.md) | [Decisions](./da-kurss-owner-decisions-final-post-repair-group03.md) | 50 |
| 151–200 | [Preview](./da-kurss-owner-review-final-post-repair-group04.md) | [Decisions](./da-kurss-owner-decisions-final-post-repair-group04.md) | 50 |
| 201–248 | [Preview](./da-kurss-owner-review-final-post-repair-group05.md) | [Decisions](./da-kurss-owner-decisions-final-post-repair-group05.md) | 48 |

## NSR carry-forward (73 prior NEEDS_SOURCE_REVIEW)

| Items | Decisions | Skaits |
|-------|-----------|--------|
| 1–50 | [NSR decisions](./da-kurss-owner-decisions-nsr-carryforward-group01.md) | 50 |
| 51–73 | [NSR decisions](./da-kurss-owner-decisions-nsr-carryforward-group02.md) | 23 |

| Konsolidēts NSR | [da-kurss-owner-decisions-nsr-carryforward.md](./da-kurss-owner-decisions-nsr-carryforward.md) |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions FPR (viss, PENDING) | [da-kurss-owner-decisions-final-post-repair.md](./da-kurss-owner-decisions-final-post-repair.md) |
| Accepted FPR (ieteicamais LABOT) | [da-kurss-owner-accepted-final-post-repair.md](./da-kurss-owner-accepted-final-post-repair.md) |
| NSR carry-forward (viss) | [da-kurss-owner-decisions-nsr-carryforward.md](./da-kurss-owner-decisions-nsr-carryforward.md) |
| GitHub | [da-kurss-owner-review-final-post-repair-GITHUB.md](./da-kurss-owner-review-final-post-repair-GITHUB.md) |

## OWNER statusi

- **LABOT** — copy-paste PROPOSED/OWNER_DECISION
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag pilnu production/LV MASTER kontekstu

## Apply noteikumi

- COPY-ONLY pēc OWNER lēmuma.
- Pirms apply: `actual current === CURRENT_DA`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
