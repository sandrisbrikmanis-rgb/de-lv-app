# CURSOR TASK — ET–DE A1 OWNER APPLY

Use `et-a1-owner-accepted-all.md` as authoritative OWNER mapping.

Rules:
1. DE = STRICT READ-ONLY.
2. Apply only rows with `Status = LABOT` AND a concrete `NEW`.
3. Before each change require actual current value === `CURRENT`; mismatch => SKIP + report.
4. Do not translate, paraphrase, clean up, infer, or touch adjacent fields/cards.
5. Do not apply `NEEDS_SOURCE_REVIEW`, `SOURCE_REQUIRED`, or `[SKAT. ET STUDY MAPPING FAILU]`.
6. Deduplicate by `(Card ID, Field)`.
7. Production file scope: `data/et/a1.js` and its required mirror only.
8. After apply run syntax, ID/order, mirror/parity, foreign-remnant, sectionAccents and targeted regression checks.
9. Report APPLIED / SKIPPED / CURRENT_VALUE_MISMATCH / DE changes / unexpected changes.
