# ET–DE Verbs — OWNER review (Copy-Only workflow)

Tas pats princips kā **ET–DE A1/A2** un **Sätze**:

1. Zemāk tabulā **noklikšķini** uz Review vai Decisions faila (zilais links).
2. Katram finding — **CURRENT_ET** ir nepareizais teksts production failā (`data/et/verbs.js`, lauks `*.lv`).
3. **ChatGPT / OWNER** ieraksta pareizo eesti variantu laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply uz `data/et/verbs.js` + `www/data/et/verbs.js`.

**GitHub indekss:** [et-verbs-owner-review-GITHUB.md](./et-verbs-owner-review-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| verbs total | **189** |
| verb forms total | **945** |
| Kopā audit atradumi | **197** |
| OWNER kandidāti | **197** |
| CRITICAL | **0** |
| HIGH | **79** |
| MEDIUM | **115** |
| LOW | **3** |
| NEEDS_SOURCE_REVIEW | **0** |
| Review grupas | **4** (pa 50) |

## Grupu faili (pa 50 findingiem)

| Review | Findings | Skaits | Decisions template |
|--------|----------|--------|-------------------|
| [et-verbs-owner-review-group01.md](./et-verbs-owner-review-group01.md) | 1–50 | 50 | [et-verbs-owner-decisions-group01.md](./et-verbs-owner-decisions-group01.md) |
| [et-verbs-owner-review-group02.md](./et-verbs-owner-review-group02.md) | 51–100 | 50 | [et-verbs-owner-decisions-group02.md](./et-verbs-owner-decisions-group02.md) |
| [et-verbs-owner-review-group03.md](./et-verbs-owner-review-group03.md) | 101–150 | 50 | [et-verbs-owner-decisions-group03.md](./et-verbs-owner-decisions-group03.md) |
| [et-verbs-owner-review-group04.md](./et-verbs-owner-review-group04.md) | 151–197 | 47 | [et-verbs-owner-decisions-group04.md](./et-verbs-owner-decisions-group04.md) |

## Konsolidētie faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Visi findingi | [et-verbs-all-findings-by-verb.md](./et-verbs-all-findings-by-verb.md) | Apvienota tabula pēc verb order |
| Decisions (viss) | [et-verbs-owner-decisions.md](./et-verbs-owner-decisions.md) | PENDING — aizpildīt OWNER |
| Accepted (viss) | [et-verbs-owner-accepted.md](./et-verbs-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [et-verbs-owner-review-GITHUB.md](./et-verbs-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (`owner-decisions`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Mainīt tikai `(Verb/Card ID, field.lv)`.
- Pirms apply: `actual current value === CURRENT_ET`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Audits:** [et-verbs-full-audit.md](./et-verbs-full-audit.md)

**Production changes = 0 · DE changes = 0**
