# CS–DE B2 FINAL CLOSURE AUDIT
**MODE:** READ-ONLY
## FINAL VERDICT
**CS–DE B2 FINAL CLOSURE AUDIT = PASS**
**CS–DE B2 — OWNER ACCEPTED / CLOSED**
## A. Dataset
| Metric | Value |
|---|---|
| Cards | 2118/2118 |
| Study objects | 60 |
| Production path | `data/cs/b2.js` |
| Mirror path | `www/data/cs/b2.js` |
| Branch | `cursor/cs-b2-final-closure-audit-6ea4` |
| HEAD SHA | `e276650a10b556812483568c47a755657ccfae87` |
| B2 production SHA256 | `d331852e635692232a84c5ac76e25f4c6e3a7a466461db5845fbfe69287f3cd2` |
| Pre-repair baseline SHA | `8400573aa829dff8ce953cb6e84526b6e550dcf6` |
## B. Repair chain
```
FULL AUDIT → 46 OWNER mappings → COPY-ONLY APPLY → CARD_NOT_FOUND RECONCILIATION
→ OWNER REMAP MICRO-REPAIR #1 → TARGETED REGRESSION (GPT-5.6 Luna) → FINAL CLOSURE
```
| Stage | Artifact value | Expected | Match |
|---|---:|---:|---|
| Full audit cards | 2118 | 2118 | ✓ |
| OWNER mapping files | 46 | 46 | ✓ |
| Raw mapping rows | 990 | 990 | ✓ |
| Unique LABOT | 969 | 969 | ✓ |
| COPY-ONLY APPLIED | 944 | 944 | ✓ |
| CURRENT_VALUE_MISMATCH | 0 | 0 | ✓ |
| CARD_NOT_FOUND | 25 | 25 | ✓ |
| Reconciliation total | 25 | 25 | ✓ |
| REMAP_SAFE | 1 | 1 | ✓ |
| OWNER_REVIEW_MISMATCH | 2 | 2 | ✓ |
| CONFIRMED_ABSENT | 22 | 22 | ✓ |
| Micro-repair APPLIED | 3 | 3 | ✓ |
| Scope exclusions | 22 | 22 | ✓ |
| Final OWNER (cardId, field) | 947 | 947 | ✓ |
| Final unique cards | 926 | 926 | ✓ |
## C. OWNER mappings
| Gate | Result |
|---|---|
| Final OWNER targets | 947 |
| Exact match | 947/947 |
| OWNER_VALUE_DRIFT | 0 |
| MISSING_TARGET | 0 |
| Gate | PASS |
## D. CARD_NOT_FOUND closure
| Metric | Value |
|---|---|
| Original CARD_NOT_FOUND | 25 |
| Resolved | 25/25 |
| Remap checks | 3/3 |
| CONFIRMED_ABSENT scope exclusions | 22/22 |
| Unexpected cards created | 0 |
| Gate | PASS |
### Remap post-checks
- `b2-Geständnis-962` → `Přiznání` : **PASS** (actual: `Přiznání`)
- `b2-Hypothek-1154` → `Hypotéka • Zástavní právo` : **PASS** (actual: `Hypotéka • Zástavní právo`)
- `b2-Gespött-959` → `Posměch • Terč posměchu` : **PASS** (actual: `Posměch • Terč posměchu`)
## E. Targeted Regression (GPT-5.6 Luna — reconfirmed, not re-run)
| Metric | Value | Expected |
|---|---:|---:|
| Model | GPT-5.6 Luna | GPT-5.6 Luna |
| API model | gpt-5.6-luna | gpt-5.6-luna |
| Cards audited | 926 | 926 |
| OWNER fields | 947 | 947 |
| API batches | 24 | 24 |
| Tokens | 163549 | 163549 |
| Raw findings | 216 | 216 |
| Validated REAL | 0 | 0 |
| FALSE_POSITIVE | 16 | 16 |
| SOURCE_DE_ISSUE | 0 | 0 |
| Production drift since targeted audit | NO | NO |
| Gate | PASS |
### Documented FALSE_POSITIVE terms (ó-valid Czech)
- Dóza: documented
- Monotónní: documented
- Tónovat: documented
- Narkóza: documented
- módní: documented
- b2-zuwider stale sectionAccent: FALSE_POSITIVE documented
## F. Severity
| Severity | Count |
|---|---:|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |
## G. Integrity
| Gate | Status |
|---|---|
| Syntax | PASS |
| ID/order | PASS |
| Card count | 2118/2118 |
| Study parity | PASS |
| Mirror parity | PASS |
| Duplicate IDs | 0 |
| Study fields exact (49) | 49/49 |
| Study LV remnants | 0 |
| Validated REAL stale sectionAccents | 0 |
## H. Read-only gates
| Gate | Status |
|---|---|
| DE changes | 0 |
| DE READ-ONLY | PASS |
| Other CS datasets changes | 0 |
| Other languages changes | 0 |
| Production changes during closure audit | 0 |
_Generated: 2026-08-15T09:00:25.650Z_