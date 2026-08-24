# ET–DE B1 — MULTI-TRANSLATION OWNER DECISIONS ACCEPTED — 25/25

**MASTER:** v1.12  
**Source OWNER review:** `reports/et-b1-multitranslation-owner-decisions.md`  
**Source review PR:** #650  
**Scope:** 25 validated B1 multiple-main-translation findings only  
**DE:** STRICT READ-ONLY  
**OWNER status:** ACCEPTED

## OWNER mapping

| Audit ID | Card ID | Field/path | DE | CURRENT | OWNER NEW | Status |
|---|---|---|---|---|---|---|
| ET-B1-MT-0001 | `b1-sich-bedienen` | `study.translation` | sich bedienen | endale võtma • kasutama | **kasutama** | LABOT |
| ET-B1-MT-0002 | `b1-betragen-407` | `lv` | betragen | ulatuma • moodustama | **ulatuma** | LABOT |
| ET-B1-MT-0003 | `b1-Burg-528` | `lv` | Burg | kindlus • loss | **kindlus** | LABOT |
| ET-B1-MT-0004 | `b1-Dasein-565` | `lv` | Dasein | olemasolu • eksistents | **olemasolu** | LABOT |
| ET-B1-MT-0005 | `b1-Elend-738` | `lv` | Elend | häda • armetu olukord | **häda** | LABOT |
| ET-B1-MT-0006 | `b1-ganztaegig` | `study.translation` | ganztägig | kogu päeva kestev • terve päeva pikkune | **kogu päeva kestev** | LABOT |
| ET-B1-MT-0007 | `b1-hort` | `study.translation` | Hort | pikapäevarühm • laste päevakeskus | **pikapäevarühm** | LABOT |
| ET-B1-MT-0008 | `b1-hupe` | `study.translation` | Hupe | signaalpasun • pasun | **signaalpasun** | LABOT |
| ET-B1-MT-0009 | `b1-juenger` | `study.translation` | Jünger | jünger • järgija | **jünger** | LABOT |
| ET-B1-MT-0010 | `b1-kader` | `study.translation` | Kader | koosseis • tuumik | **koosseis** | LABOT |
| ET-B1-MT-0011 | `b1-Nachteil-1950` | `lv` | Nachteil | puudus • miinus | **puudus** | LABOT |
| ET-B1-MT-0012 | `b1-Neuheit-1978` | `lv` | Neuheit | uudsus • uuendus | **uudsus** | LABOT |
| ET-B1-MT-0013 | `b1-rüsten` | `study.translation` | rüsten | varustama, relvastama; valmistuma | **varustama** | LABOT |
| ET-B1-MT-0014 | `b1-saat` | `study.translation` | Saat | seeme, külv | **külv** | LABOT |
| ET-B1-MT-0015 | `b1-sowie` | `study.translation` | sowie | samuti, nagu ka; ning | **samuti** | LABOT |
| ET-B1-MT-0016 | `b1-Streifen-2792` | `lv` | Streifen | triip • riba | **triip** | LABOT |
| ET-B1-MT-0017 | `b1-versäumen-3102` | `lv` | versäumen | vahele jätma • tegemata jätma | **vahele jätma** | LABOT |
| ET-B1-MT-0018 | `b1-wagen` | `study.translation` | Wagen | auto • vagun | **auto** | LABOT |
| ET-B1-MT-0019 | `b1-Chef-3321` | `lv` | Chef | ülemus • juht | **ülemus** | LABOT |
| ET-B1-MT-0020 | `b1-weil` | `study.translation` | weil | sest • kuna | **sest** | LABOT |
| ET-B1-MT-0021 | `b1-da` | `study.translation` | da | kuna • sest | **kuna** | LABOT |
| ET-B1-MT-0022 | `b1-obwohl` | `study.translation` | obwohl | kuigi • ehkki | **kuigi** | LABOT |
| ET-B1-MT-0023 | `b1-trotzdem` | `study.translation` | trotzdem | sellegipoolest • ikkagi | **sellegipoolest** | LABOT |
| ET-B1-MT-0024 | `b1-schaden` | `study.translation` | Schaden | kahju • kahjustus | **kahju** | LABOT |
| ET-B1-MT-0025 | `b1-trotz` | `study.translation` | Trotz | jonn • kangekaelsus | **jonn** | LABOT |

## OWNER overrides vs source recommendation

Two source recommendations are intentionally overridden:

1. `Hort`: source recommendation `laste päevakeskus` → OWNER NEW **`pikapäevarühm`**
   - German `Hort` in the school/childcare sense is more specifically after-school care / extended-day group; `pikapäevarühm` is the tighter learner-facing equivalent.

2. `Saat`: source recommendation `seeme` → OWNER NEW **`külv`**
   - `Saat` is more naturally the sowing/sown crop concept; an individual seed is more specifically `Samen`. The existing Study context itself notes this distinction.

All other OWNER NEW values follow the reviewed recommendation.

## Apply safety

- COPY-ONLY these 25 exact mappings.
- Before each write: actual production value must equal `CURRENT`.
- Mismatch → `SKIP_CURRENT_VALUE_MISMATCH` for that row only.
- Do not modify DE.
- Do not modify Study explanation/examples/comparison/tip/important.
- Do not perform cleanup or neighboring-field edits.
- Mirror `data/et/b1.js` ↔ `www/data/et/b1.js`.

## Mandatory post-apply full B1 scan

```text
B1_CARDS = 3367
REQUESTED_LABOT = 25
APPLIED_VERIFIED = 25/25
CURRENT_VALUE_MISMATCH = 0

MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0

DE_CHANGES = 0
UNEXPECTED_PRODUCTION_CHANGES = 0
MIRROR = PASS
SYNTAX = PASS
STRUCTURE = PASS
ID_ORDER = PASS
```

If any residual multi-translation finding remains outside these 25, do not auto-fix it. Return it for OWNER decision.

**OWNER VERDICT:** `ET_B1_MULTITRANSLATION_OWNER_ACCEPTED_25`
