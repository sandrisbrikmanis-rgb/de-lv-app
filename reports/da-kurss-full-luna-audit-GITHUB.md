# DA–DE Kurss — pilns Luna audits (2026-08-18)

**Verdict:** **NEEDS OWNER REVIEW** — 77 validated findings pēc 1264 lauku pārbaudes.

## Atskaite

| Fails | Saturs |
|-------|--------|
| [`da-kurss-full-audit.md`](da-kurss-full-audit.md) | Galvenā atskaite (pirmie 150 findings) |
| [`reports/temp/da-kurss-full-audit.json`](../reports/temp/da-kurss-full-audit.json) | Pilns JSON (77 findings + gates + stats) |

## Coverage

| Metrika | Vērtība |
|---------|---------|
| DA lauki | **1264** |
| Lekcijas | **21** (+ 6 statiskie HTML paneļi) |
| Training kartītes | **101** |
| UI Kurss atslēgas | **96** |
| Luna batches | **26/26** (GPT-5.6 Luna API) |

## Severity

| CRITICAL | HIGH | MEDIUM | LOW |
|----------|------|--------|-----|
| 11 | 37 | 24 | 5 |

## Kategorijas

| Kategorija | Findings |
|------------|----------|
| FOREIGN_REMNANT | 20 |
| STRUCTURE | 16 |
| SEMANTICS | 14 |
| TRANSLATION | 11 |
| GRAMMAR | 4 |
| NAMES | 4 |
| NATURALNESS | 3 |
| CONSISTENCY | 2 |
| ORTHOGRAPHY | 2 |
| TECHNICAL | 1 |

## Technical gates

| Gate | Result |
|------|--------|
| Syntax | PASS |
| validate-kurss.js | PASS |
| Mirror data↔www | PASS |
| Luna coverage | PASS (26/26) |
| Structure vs LV MASTER | FAIL (16 — galvenokārt `lesson7ExerciseCardsDa` `.lv` lauki) |
| DE baseline changes | 0 (READ-ONLY) |

## Kritiskākie apgabali

1. **Statiskie HTML paneļi:** vowels (`gut/godt`), consonants (`Bad/Dårlig`), sentence structure (noliegums)
2. **Lekciju virsraksti metadata:** `Lekcija N` → jābūt `Lektion N` (vairākās lekcijās)
3. **LV transkripcijas/atlikumi** DA tekstā
4. **lesson7 exercise cards** — struktūras brīdinājumi par `.lv` lauku (iespējams PROJECT_CONVENTION — pārbaudīt OWNER)

## Atkārtota palaišana

```bash
node scripts/audit-da-kurss-full.js --export-only
OPENAI_API_KEY=... node scripts/audit-da-kurss-full-luna-api.js --force
node scripts/audit-da-kurss-full.js
```

**DE = STRICT READ-ONLY.** Production faili netika mainīti.
