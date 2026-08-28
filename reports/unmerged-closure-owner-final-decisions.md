# Unmerged closure — OWNER final decisions (53/53)

**Generated:** 2026-08-28T19:19:56.437Z
**ORIGIN_MAIN_SHA:** `93c372824359b00bd73d37ae3193bdf587118e75`
**PR #693 HEAD:** `a8b884df288293c118047d6c82788798c36ef048`
**OWNER_REVIEWED:** 53/53
**OWNER_PENDING:** 0/53
**VERDICT:** OWNER_DECISIONS_COMPLETE

## resolvedCategory

| Category | Count |
|----------|------:|
| CLOSED_SUPERSEDED | 43 |
| FALSE_POSITIVE | 1 |
| NEEDS_REPAIR | 9 |

## ownerDecision

| Decision | Count |
|----------|------:|
| APSTIPRINĀT | 43 |
| LABOT | 9 |
| NELABOT | 1 |

## Priority outcomes

### PR #343

- **resolvedCategory:** NEEDS_REPAIR
- **ownerDecision:** LABOT
- **reviewedFields:** 17/17
- **repairs:** 16
- All 17/17 fields reviewed. Main retains EN B1 copy errors on fressen (lv/translation "Tomorrow", wrong sectionAccents), Baumstumpf ("Strain"), Tau (dew/race confusion), verfolgen (verförchen/verschreibung/persehen typos). Branch B had correct fixes; 16 fields require COPY-ONLY repair. purple[2] "wolf down" optional — not repaired.

### PR #528

- **resolvedCategory:** CLOSED_SUPERSEDED
- **ownerDecision:** APSTIPRINĀT
- **reviewedFields:** 234/234
- **repairs:** 0
- All 234/234 fields reviewed. 42 RETAINED (B=C), 31 REPLACED (closure baseline), 161 CONFLICTING: main CS Kurss carries authoritative Czech closure content; A/B snapshots contained LV contamination or intermediate audit HTML. No repair — main is linguistically correct.

### PR #564

- **resolvedCategory:** FALSE_POSITIVE
- **ownerDecision:** NELABOT
- **reviewedFields:** 0/0
- **repairs:** 0
- PR #564 branch tip has 0 field-level production delta vs merge-base A; DA verbs final post-repair was applied on main via commits cb1456f576d6 (verb-119 Han skrev) and 64d6749a1c9b (63 COPY-ONLY repairs). Candidate is a classification artifact — no unmerged content remains.

### PR #508

- **resolvedCategory:** NEEDS_REPAIR
- **ownerDecision:** LABOT
- **reviewedFields:** 947/947
- **repairs:** 947
- All 947/947 fields reviewed. CS B2 main retains wrong top-level lv translations (e.g. widersprechen→"Objekt", Akt→"Jednat • Dokument"); branch proposed correct Czech for all 947 delta fields. 947 COPY-ONLY repairs required.

### PR #345

- **resolvedCategory:** NEEDS_REPAIR
- **ownerDecision:** LABOT
- **reviewedFields:** 159/159
- **repairs:** 16
- All 159/159 fields reviewed. 76 RETAINED on main; 16 fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. 32 CONFLICTING fields: main closure C accepted.

## 12 initial EVIDENCE_SUFFICIENT

- PR #455: **CLOSED_SUPERSEDED** / APSTIPRINĀT (106 fields)
- PR #454: **CLOSED_SUPERSEDED** / APSTIPRINĀT (56 fields)
- PR #438: **CLOSED_SUPERSEDED** / APSTIPRINĀT (20 fields)
- PR #439: **CLOSED_SUPERSEDED** / APSTIPRINĀT (36 fields)
- PR #421: **CLOSED_SUPERSEDED** / APSTIPRINĀT (6 fields)
- PR #508: **NEEDS_REPAIR** / LABOT (947 fields)
- PR #506: **NEEDS_REPAIR** / LABOT (947 fields)
- PR #507: **NEEDS_REPAIR** / LABOT (947 fields)
- PR #669: **CLOSED_SUPERSEDED** / APSTIPRINĀT (1 fields)
- PR #670: **CLOSED_SUPERSEDED** / APSTIPRINĀT (1 fields)
- PR #672: **CLOSED_SUPERSEDED** / APSTIPRINĀT (1 fields)
- PR #671: **CLOSED_SUPERSEDED** / APSTIPRINĀT (1 fields)
