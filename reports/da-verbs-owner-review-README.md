# DA–DE Verbs — OWNER review (Copy-Only workflow)

Tas pats princips kā **DA–DE A1/A2** un **Sätze**:

1. Zemāk tabulā **noklikšķini** uz Review vai Decisions faila (zilais links).
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (`data/da/verbs.js`, lauks `*.lv`).
3. **ChatGPT / OWNER** ieraksta pareizo dāņu variantu laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply uz `data/da/verbs.js` + `www/data/da/verbs.js`.

**GitHub indekss:** [da-verbs-owner-review-GITHUB.md](./da-verbs-owner-review-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| verbs total | **189** |
| verb forms total | **945** |
| Kopā audit atradumi | **569** |
| OWNER kandidāti | **569** |
| CRITICAL | **189** |
| HIGH | **273** |
| MEDIUM | **102** |
| LOW | **3** |
| NEEDS_SOURCE_REVIEW | **2** |
| Review grupas | **12** (pa 50) |

## Grupu faili (pa 50 findingiem)

| Review | Findings | Skaits | Decisions template |
|--------|----------|--------|-------------------|
| [da-verbs-owner-review-group01.md](./da-verbs-owner-review-group01.md) | 1–50 | 50 | [da-verbs-owner-decisions-group01.md](./da-verbs-owner-decisions-group01.md) |
| [da-verbs-owner-review-group02.md](./da-verbs-owner-review-group02.md) | 51–100 | 50 | [da-verbs-owner-decisions-group02.md](./da-verbs-owner-decisions-group02.md) |
| [da-verbs-owner-review-group03.md](./da-verbs-owner-review-group03.md) | 101–150 | 50 | [da-verbs-owner-decisions-group03.md](./da-verbs-owner-decisions-group03.md) |
| [da-verbs-owner-review-group04.md](./da-verbs-owner-review-group04.md) | 151–200 | 50 | [da-verbs-owner-decisions-group04.md](./da-verbs-owner-decisions-group04.md) |
| [da-verbs-owner-review-group05.md](./da-verbs-owner-review-group05.md) | 201–250 | 50 | [da-verbs-owner-decisions-group05.md](./da-verbs-owner-decisions-group05.md) |
| [da-verbs-owner-review-group06.md](./da-verbs-owner-review-group06.md) | 251–300 | 50 | [da-verbs-owner-decisions-group06.md](./da-verbs-owner-decisions-group06.md) |
| [da-verbs-owner-review-group07.md](./da-verbs-owner-review-group07.md) | 301–350 | 50 | [da-verbs-owner-decisions-group07.md](./da-verbs-owner-decisions-group07.md) |
| [da-verbs-owner-review-group08.md](./da-verbs-owner-review-group08.md) | 351–400 | 50 | [da-verbs-owner-decisions-group08.md](./da-verbs-owner-decisions-group08.md) |
| [da-verbs-owner-review-group09.md](./da-verbs-owner-review-group09.md) | 401–450 | 50 | [da-verbs-owner-decisions-group09.md](./da-verbs-owner-decisions-group09.md) |
| [da-verbs-owner-review-group10.md](./da-verbs-owner-review-group10.md) | 451–500 | 50 | [da-verbs-owner-decisions-group10.md](./da-verbs-owner-decisions-group10.md) |
| [da-verbs-owner-review-group11.md](./da-verbs-owner-review-group11.md) | 501–550 | 50 | [da-verbs-owner-decisions-group11.md](./da-verbs-owner-decisions-group11.md) |
| [da-verbs-owner-review-group12.md](./da-verbs-owner-review-group12.md) | 551–569 | 19 | [da-verbs-owner-decisions-group12.md](./da-verbs-owner-decisions-group12.md) |

## Konsolidētie faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Visi findingi | [da-verbs-all-findings-by-verb.md](./da-verbs-all-findings-by-verb.md) | Apvienota tabula pēc verb order |
| Decisions (viss) | [da-verbs-owner-decisions.md](./da-verbs-owner-decisions.md) | PENDING — aizpildīt OWNER |
| Accepted (viss) | [da-verbs-owner-accepted.md](./da-verbs-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [da-verbs-owner-review-GITHUB.md](./da-verbs-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (`owner-decisions`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Mainīt tikai `(Verb/Card ID, field.lv)`.
- Pirms apply: `actual current value === CURRENT_DA`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Audits:** [da-verbs-full-audit.md](./da-verbs-full-audit.md)

**Production changes = 0 · DE changes = 0**
