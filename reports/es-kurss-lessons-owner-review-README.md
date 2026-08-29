# ES–DE Kurss Lessons — OWNER review

**Auditors:** GPT-5.6 Luna v2 + deterministic (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9

Avots: [es-kurss-lessons-full-audit-v2.md](./es-kurss-lessons-full-audit-v2.md) · [GitHub indekss](./es-kurss-lessons-owner-review-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| ES lauki audited | **2951** |
| Lekcijas | **21/21** |
| Kopā findings | **993** |
| CRITICAL | **22** |
| HIGH | **562** |
| MEDIUM | **380** |
| LOW | **29** |

## Faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Preview | [es-kurss-lessons-owner-view.md](./es-kurss-lessons-owner-view.md) | Pilns OWNER VIEW |
| Decisions | [es-kurss-lessons-owner-decisions.md](./es-kurss-lessons-owner-decisions.md) | **Aizpildīt šeit** |
| Accepted | [es-kurss-lessons-owner-accepted.md](./es-kurss-lessons-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [es-kurss-lessons-owner-review-GITHUB.md](./es-kurss-lessons-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis
- **LABOT** — OWNER apstiprina precīzu gala vērtību
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Pirms apply: `actual current value === CURRENT_ES`, citādi SKIP.
- Mainīt tikai norādīto ES lauku; **DE = STRICT READ-ONLY**.

**Production changes = 0 · DE changes = 0**