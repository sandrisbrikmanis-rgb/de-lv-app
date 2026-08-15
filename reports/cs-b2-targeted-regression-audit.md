# CS–DE B2 TARGETED REGRESSION AUDIT

**MODE:** READ-ONLY

## MODEL

GPT-5.6 Luna

## SCOPE

| Metric | Value |
|---|---|
| Raw changed mappings | 947 |
| Unique (cardId, field) | 947 |
| Unique cards | 926 |
| Main translation fields | 898 |
| Study fields | 49 |
| Scope exclusions (CONFIRMED_ABSENT) | 22/22 |
| Cards audited (Luna) | 926 |

## DETERMINISTIC GATES

| Gate | Status |
|---|---|
| Exact applied value | PASS (0 drift) |
| Syntax | PASS |
| ID/order | PASS |
| Card count | 2118/2118 |
| Study parity | PASS |
| Mirror parity | PASS |
| DE READ-ONLY | PASS |
| Outside-scope immutability | PASS (0 unexpected) |
| Production changes during audit | 0 |

## RAW vs VALIDATED

| Metric | Count |
|---|---:|
| Raw findings | 216 |
| Validated REAL | 0 |
| FALSE_POSITIVE | 16 |
| SOURCE_DE_ISSUE | 0 |

## SEVERITY SUMMARY

| Severity | Count |
|---|---:|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |

## LINGUISTIC FINDINGS

| # | Card ID | Field | Severity | Current | Proposed | Problem | Status |
|---:|---|---|---|---|---|---|---|
| — | — | — | — | — | — | No validated real findings | — |

## SCOPE EXCLUSIONS (22 CONFIRMED_ABSENT)

- `b2-Geldentwertung-902` (Geldentwertung) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Geldschein-903` (Geldschein) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Gelege-906` (Gelege) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Gespinst-951` (Gespinst) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Gestade-954` (Gestade) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Gestank-957` (Gestank) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Illusion-1154` (Illusion) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Imker-1156` (Imker) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Import-1158` (Import) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-importieren-1159` (importieren) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Industrieausrüstung-1162` (Industrieausrüstung) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Industrieware-1163` (Industrieware) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-inhaltslos-1165` (inhaltslos) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Inland-1166` (Inland) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Innenminister-1167` (Innenminister) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Insektenvertilgungsmittel-1169` (Insektenvertilgungsmittel) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Intensivhaltung-1171` (Intensivhaltung) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-internieren-1173` (internieren) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Intrige-1176` (Intrige) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Irrtum-1178` (Irrtum) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Jauche-1180` (Jauche) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE
- `b2-Joch-1181` (Joch) — OWNER_CONFIRMED_REMOVE_FROM_SCOPE

## LUNA API

| Metric | Value |
|---|---|
| Model | GPT-5.6 Luna (gpt-5.6-luna) |
| Requests | 24 |
| Tokens | 163549 |

## PRODUCTION CHANGES

0

## FINAL VERDICT

**CS–DE B2 TARGETED REGRESSION = PASS / READY FOR FINAL CLOSURE AUDIT**

_Generated: 2026-08-15T08:53:37.567Z_