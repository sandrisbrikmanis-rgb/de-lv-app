# A1 LRB two-generation verification (LRB-001…041)

Generated: 2026-09-17T14:23:46.032Z

## Gate

**A1_LRB_TWO_GENERATION_BOUNDARY_PASS**

All 41 batches have TWO_GENERATIONS_PROVEN with distinct SHA anchors.

Claimed RE_REVIEW_RANGE (not bound to classifier in this task): `LRB-001…LRB-041`

### Classification counts

- TWO_GENERATIONS_PROVEN: 41

### Proven subrange

```json
{
  "contiguous_from": "LRB-001",
  "contiguous_to": "LRB-041",
  "gaps_inside_span": [],
  "proven_batches": [
    "LRB-001",
    "LRB-002",
    "LRB-003",
    "LRB-004",
    "LRB-005",
    "LRB-006",
    "LRB-007",
    "LRB-008",
    "LRB-009",
    "LRB-010",
    "LRB-011",
    "LRB-012",
    "LRB-013",
    "LRB-014",
    "LRB-015",
    "LRB-016",
    "LRB-017",
    "LRB-018",
    "LRB-019",
    "LRB-020",
    "LRB-021",
    "LRB-022",
    "LRB-023",
    "LRB-024",
    "LRB-025",
    "LRB-026",
    "LRB-027",
    "LRB-028",
    "LRB-029",
    "LRB-030",
    "LRB-031",
    "LRB-032",
    "LRB-033",
    "LRB-034",
    "LRB-035",
    "LRB-036",
    "LRB-037",
    "LRB-038",
    "LRB-039",
    "LRB-040",
    "LRB-041"
  ],
  "proven_count": 41
}
```

## Narrative (OWNER questions)

### Why Group A is only LRB-001…007
- Group A (EARLY_INITIAL_REVIEW) in A1-LRB-RE-REVIEW-BOUNDARY is defined only by an explicit git commit subject matching Phase B / individual OWNER review on decisions.csv or related paths.
- Mechanically tagged Phase B on batch branches: LRB-001, LRB-002, LRB-003, LRB-004, LRB-005, LRB-006, LRB-007.
- LRB-008…020 lack Phase B commit text; their earlier OWNER work appears as OWNER authorization APPROVED, micro-repairs, or PDF-standard reaudit—not the Phase B label.
- LRB-021…040 use the pending→FULL_50_50 COPY-PASTE sequence without Phase B; that is a different two-generation pattern (not Group A).

### Where initial-review evidence lives for LRB-008…041
- LRB-008…020: initial anchors are earliest OWNER authorization APPROVED / micro-repair closure commits on the batch branch (see per-batch chron_subjects).
- LRB-008…020 PDF-standard reaudit batches (second wave marker): LRB-004, LRB-006, LRB-008, LRB-009, LRB-010, LRB-011, LRB-012, LRB-013, LRB-014, LRB-015.
- LRB-021…040: initial anchors are commits with subject 'review pending' before COPY-PASTE (19 batches with both tags).
- LRB-041: initial anchor is review-pending or authorization before IS mop-up COPY-PASTE; expanded anchor is mop-up COPY-PASTE + gala IS mop-up closed.

### What “final IS mop-up” proves
- LRB-041 proof scope text 'final IS mop-up' documents closure of the Icelandic (IS) language pool in the re-review wave, not a universal statement that every batch 001–040 had two git-visible generations.
- It is evidence that the sequential IS re-review mop-up ended at LRB-041; it does not by itself prove TWO_GENERATIONS_PROVEN for batches 008–040 without per-batch SHA/commit anchors.
- FI pool mop-up batches (e.g. LRB-052, LRB-055) are separate terminal markers and are outside LRB-001…041.

### Distinct OWNER/Gala states for all LRB-001…041?
- All LRB-001…041 have distinct initial vs expanded decisions/auth SHA at chosen anchors.

## Summary table

| LRB | initial_commit | initial_scope | expanded_commit | expanded_scope | initial_sha | expanded_sha | classification |
|-----|----------------|---------------|-----------------|----------------|-------------|--------------|----------------|
| LRB-001 | fb440a2db961 | G2/A1 Phase B: complete LRB-001 individual OWNER review (50/ | b5c25e532cc9 | OWNER authorization after GPT-5.6 Luna gala repair and full  | e29016bb42edef00 | e192d1b8ac472c7f | TWO_GENERATIONS_PROVEN |
| LRB-002 | e7fbd3509146 | G2/A1 Phase B: complete LRB-002 individual OWNER review (100 | 93431f749212 | OWNER authorization recorded after GPT-5.6 Luna individual t | 7bee0c76fea577b4 | d59544080c6bd074 | TWO_GENERATIONS_PROVEN |
| LRB-003 | 2d105e40ceaf | G2/A1 Phase B: complete LRB-003 individual OWNER review (150 | 99061ac628bb | OWNER authorization recorded after GPT-5.6 Luna gala repair  | c288d719d8fcc2f8 | e8dd8e66583892e9 | TWO_GENERATIONS_PROVEN |
| LRB-004 | d7de39e007f5 | G2/A1 Phase B: LRB-004 individual review (50 rows, 5 LABOT / | 3ad1e1821635 | OWNER authorization recorded after GPT-5.6 Luna gala repair  | 42192ea38301f2ad | d1911c03d8aaf78d | TWO_GENERATIONS_PROVEN |
| LRB-005 | 182e06a7cf6f | G2/A1 Phase B: LRB-005 individual review (50 FI MULTI_TRANSL | cb3961d50af3 | OWNER authorization recorded after GPT-5.6 Luna gala repair  | c242901db2867187 | eb3ed377b3365fc5 | TWO_GENERATIONS_PROVEN |
| LRB-006 | 8c87c4f29c5d | G2/A1 Phase B: LRB-006 individual review (50 FI, 50 LABOT ET | 60e672cc51e9 | OWNER authorization recorded after GPT-5.6 Luna gala repair  | 7d05e36b1ccdb1bb | 81de6404f6328a35 | TWO_GENERATIONS_PROVEN |
| LRB-007 | a46ee647c8f4 | G2/A1 Phase B: LRB-007 individual review (50 FI, 49 LABOT ET | da6f236f71c0 | OWNER authorization recorded after GPT-5.6 Luna individual l | 14e6c41bb8e48305 | bb4bcc3d2136cdff | TWO_GENERATIONS_PROVEN |
| LRB-008 | b4e6d5c2abc1 | OWNER authorization recorded after GPT-5.6 Luna individual F | c6a7a4322796 | OWNER authorization APPROVED. PDF-standard reaudit repair (b | 868b1e3f8dd033de | a724ace07efd2157 | TWO_GENERATIONS_PROVEN |
| LRB-009 | dc659d323f3b | OWNER authorization APPROVED after GPT-5.6 Luna individual F | 7f99312a352e | OWNER authorization APPROVED. PDF-standard reaudit repair (e | 21a91cd4063002e7 | d9a2cd1ab55468a6 | TWO_GENERATIONS_PROVEN |
| LRB-010 | ed97a322619e | OWNER authorization APPROVED after GPT-5.6 Luna individual F | 980ae6b9a4cb | OWNER authorization APPROVED. PDF-standard reaudit repair (G | 82f7153fe89ad7a6 | 933e2abcb2e1fc2b | TWO_GENERATIONS_PROVEN |
| LRB-011 | 11bee796ee3d | OWNER authorization APPROVED after GPT-5.6 Luna individual F | 30b2976afa0d | OWNER authorization APPROVED. PDF-standard reaudit repair (h | d4b85a1fb5a62f15 | baf0fe6895ae1cc9 | TWO_GENERATIONS_PROVEN |
| LRB-012 | 409fca93b300 | OWNER authorization APPROVED after GPT-5.6 Luna individual F | bba1be74ab91 | OWNER authorization APPROVED. PDF-standard reaudit repair (l | 414899e1f9a8028b | abff65c445cf8bed | TWO_GENERATIONS_PROVEN |
| LRB-013 | 0803f9549c73 | OWNER authorization APPROVED. GPT-5.6 Luna individual FI lin | 17ff31d70e97 | OWNER authorization APPROVED. PDF-standard reaudit repair (n | 3abb8ba7398cc71f | 0b115113566f6bdc | TWO_GENERATIONS_PROVEN |
| LRB-014 | c703fecc9b08 | OWNER authorization APPROVED. GPT-5.6 Luna individual FI lin | 7fd84d8ed5ef | OWNER authorization APPROVED. PDF-standard reaudit repair (p | 077805e2677f2c6c | 8d7e82ccc1e0f720 | TWO_GENERATIONS_PROVEN |
| LRB-015 | d44cedae8319 | Schaf..Staat | 930e246d7bb5 | Schaf..Staat | 06d73dbc00b54592 | f00e071ab7083e2c | TWO_GENERATIONS_PROVEN |
| LRB-016 | 335be7831eed | Stadt..Vogel | 93d6e35b62dd | Stadt..Vogel | 0cc775044db4ba92 | f383f6737dea70b9 | TWO_GENERATIONS_PROVEN |
| LRB-017 | 40ff92b4eb59 | voll..zweimal | 169845d42cda | voll..zweimal | c9c93813b6ab16a1 | 3e394eae91b019e3 | TWO_GENERATIONS_PROVEN |
| LRB-018 | b6a3263bcf22 | zweite..zum (mixed FI scalars + FR MULTI/Luna) | 457d495e2609 | zweite..zum (5 FI scalars + 45 FR full composite repairs fro | 91cb6d73f6fb2626 | d1459c9322a8d3c5 | TWO_GENERATIONS_PROVEN |
| LRB-019 | 95ba9cfcf26b | Owner prep complete; awaiting GPT-5.6 Luna linguistic review | ac46a001895c | Owner prep complete; awaiting GPT-5.6 Luna linguistic review | ed0979cf83da1a13 | 44cce78ac2262e6c | TWO_GENERATIONS_PROVEN |
| LRB-020 | 954d2b55e082 | unter..zum (15 FR) + ab..laufen (35 GR) Luna copy/paste roun | 50499e33c9a4 | unter..zum (15 FR) + ab..laufen (35 GR) Luna copy/paste roun | 511d5f36b0abb330 | c7b243b2c7da8ba3 | TWO_GENERATIONS_PROVEN |
| LRB-021 | ddc9ac39a09a | laut..Zug (26 GR) + a1-uhr..groß (24 HR) full composite repa | d00af7c9f6a9 | laut..Zug (26 GR) + a1-uhr..groß (24 HR) GPT-5.6 Luna FULL_5 | 1344f5b2d3cd766a | 26c2a7200388f756 | TWO_GENERATIONS_PROVEN |
| LRB-022 | 7e40964743d6 | Großeltern..zusammen (48 HR) + a1-ab, a1-aber (2 HU) — GPT-5 | 1047a2940e73 | Großeltern..zusammen (48 HR) + a1-ab, a1-aber (2 HU) GPT-5.6 |  | 134e1d09ea17fc2f | TWO_GENERATIONS_PROVEN |
| LRB-023 | ee21b2580d96 | a1-also..a1-hoeren-study (50 HU rows, 28 unique cards) — GPT | a678b028852d | a1-also..a1-hoeren-study (50 HU rows, 28 unique cards) GPT-5 |  | 84d98dc5593403ad | TWO_GENERATIONS_PROVEN |
| LRB-024 | 11ccf9619d67 | a1-huebsch..a1-ueber (50 HU rows, 27 unique cards) — GPT-5.6 | 669b210daae8 | a1-huebsch..a1-ueber (50 HU rows, 27 unique cards) GPT-5.6 L |  | 566f1a4d00ea7712 | TWO_GENERATIONS_PROVEN |
| LRB-025 | ebb8f6e7e6e4 | Besuch..finden (50 HU rows, 41 unique cards) — GPT-5.6 Luna  | 5dd447e783a1 | Besuch..finden (50 HU rows, 41 unique cards) GPT-5.6 Luna FU |  | 11b9aaa0bca1538c | TWO_GENERATIONS_PROVEN |
| LRB-026 | 0e5feb3619f9 | Gemüse..werden (50 HU rows, 50 unique cards) — GPT-5.6 Luna  | d13ad7a130f2 | Gemüse..werden (50 HU rows, 50 unique cards) GPT-5.6 Luna FU |  | 316b4ba0a3d00609 | TWO_GENERATIONS_PROVEN |
| LRB-027 | df5936b0c3b4 | Wetter..Zug (5 HU) + a1-ab..a1-halten (45 IS, 27 unique card | 24707d5ce50a | Wetter..Zug (5 HU) + a1-ab..a1-halten (45 IS, 27 unique card |  | f8c102606bec183d | TWO_GENERATIONS_PROVEN |
| LRB-028 | 0def4be9bdbd | a1-halten..a1-seite (50 IS rows, 27 unique cards) — GPT-5.6  | 2fcdff516346 | a1-halten..a1-seite (50 IS rows, 27 unique cards) GPT-5.6 Lu |  | cb54616e4fc5bd80 | TWO_GENERATIONS_PROVEN |
| LRB-029 | 093b73641b7f | Abend..anziehen + a1-sich..a1-zum (50 IS rows, 38 unique car | 2298040a5a66 | Abend..anziehen + a1-sich..a1-zum (50 IS rows, 38 unique car |  | b01335ad73fcc686 | TWO_GENERATIONS_PROVEN |
| LRB-030 | 34f7fa2aa3ab | Arbeit..Ärztin (50 IS rows, 50 unique cards: 38 scalar lv +  | ffe45f10a833 | Arbeit..Ärztin (50 IS rows, 50 unique cards: 12 study compos |  | cf71a582636c9888 | TWO_GENERATIONS_PROVEN |
| LRB-031 | 6ada637447ee | Blume..er (50 IS rows, 50 unique cards: 4 study composite +  | f8874f38d321 | Blume..er (50 IS rows, 50 unique cards: 4 study composite +  |  | 63b1254957fe2f84 | TWO_GENERATIONS_PROVEN |
| LRB-032 | f3c610b16726 | erst..gleich (50 IS rows, 50 unique cards: 18 study composit | 95ed4557a6ff | erst..gleich (50 IS rows, 50 unique cards: 20 study composit | 55c6f075d3f88fde | b864767aab39b8ad | TWO_GENERATIONS_PROVEN |
| LRB-033 | 7905b78ab704 | Grammatik..Karotte (50 IS rows, 49 unique cards + jetzt mult | 8565af78418e | Grammatik..Karotte (50 IS rows, 49 unique cards + jetzt mult |  | be22bee8a5b0c1ac | TWO_GENERATIONS_PROVEN |
| LRB-034 | 78dcace69c8e | Kartoffel..leider (50 IS rows, 50 unique cards) — GPT-5.6 Lu | ae9d7723ac7e | Kartoffel..leider (50 IS rows, 50 unique cards) GPT-5.6 Luna |  | d9ac208886892b2c | TWO_GENERATIONS_PROVEN |
| LRB-035 | ee89db858328 | leise..Montag (50 IS rows, 48 unique cards) — GPT-5.6 Luna F | f1ee90d838dd | leise..Montag (50 IS rows, 48 unique cards + links/malen mul |  | 5cf04f2ee5254977 | TWO_GENERATIONS_PROVEN |
| LRB-036 | 2d7f1b652534 | morgen..Orange (50 IS rows, 50 unique cards) — GPT-5.6 Luna  | d685733334fc | morgen..Orange (50 IS rows, 50 unique cards) GPT-5.6 Luna FU |  | 23344d4b6a0136e9 | TWO_GENERATIONS_PROVEN |
| LRB-037 | 75df6b7372b6 | Ostern..schneien (50 IS rows, 50 unique cards) — GPT-5.6 Lun | 95f9e2941520 | Ostern..schneien (50 IS rows, 50 unique cards) GPT-5.6 Luna  |  | 02cfc1d33148e08a | TWO_GENERATIONS_PROVEN |
| LRB-038 | 00d725d19ed8 | schnell..spazieren gehen (50 IS rows, 50 unique cards) — GPT | 60fd809dcbd0 | schnell..spazieren gehen (50 IS rows, 50 unique cards) GPT-5 |  | 386854f5ee5c7147 | TWO_GENERATIONS_PROVEN |
| LRB-039 | ec1f058274b0 | Spiel..vierzigste (50 IS rows, 50 unique cards) — GPT-5.6 Lu | 4c074af9e206 | Spiel..vierzigste (50 IS rows, 50 unique cards) GPT-5.6 Luna |  | 869cb29cba125516 | TWO_GENERATIONS_PROVEN |
| LRB-040 | 6f32e75ff4b5 | Vogel..zwölf (50 IS rows, 50 unique cards) — GPT-5.6 Luna FU | 1ace82f70338 | Vogel..zwölf (50 IS rows, 50 unique cards) GPT-5.6 Luna FULL |  | b1f07b3c298c8aa3 | TWO_GENERATIONS_PROVEN |
| LRB-041 | 7def03da7a43 | Wasser..rechts (11 IS rows, 11 unique findings) — final IS m | 9e0461d7b1f1 | Wasser..rechts (11 IS rows, 11 unique findings) final IS mop |  | 8f9075398ac13c2b | TWO_GENERATIONS_PROVEN |

## Batches not TWO_GENERATIONS_PROVEN


Full evidence: `A1-LRB-TWO-GENERATION-PROOF.json`.
