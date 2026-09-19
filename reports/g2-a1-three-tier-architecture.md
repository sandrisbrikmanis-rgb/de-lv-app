# G2/A1 — trīs līmeņu arhitektūra + četri obligātie vārti

**Classification:** `G2_A1_THREE_TIER_ARCHITECTURE_BINDING`
**Governing docs:** `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`
**Master sequence:** `reports/g2-a1-owner-review-repair-master-sequence.md`

## Kopsavilkums

A1 lingvistisko datu apstrāde sadalīta četros neatkarīgos loma slāņos. Neviens AI modelis nedrīkst vienlaikus tulkot, integrēt, auditēt un apstiprināt OWNER lēmumus.

```text
[OWNER — cilvēks]           → authorization only
        │
        ▼ APPROVED
[Luna — tulkotājs]          → tikai lingvistika (max 50 rindas)
        │
        ▼ decisions.csv
[anti-bulk skripts]         → deterministisks vārts (obligāts)
        │
        ▼ PASS
[ChatGPT — uzraugs]         → spot-check 15–20 rindas / batch
        │
        ▼ batch OK
[Cursor/Grok — izpildītājs] → split, merge, ingest, verify, push
        │
        ▼ OWNER closure + authorization
[Cursor/Grok — apply]       → COPY-ONLY apply (atsevišķs, pēdējais posms)
```

---

## Lomu sadalījums

### 1. Tulkotājs — Cursor + OpenAI GPT-5.6 Luna

| Atribūts | Vērtība |
|---|---|
| Uzdevums | Tīra, niansēta lingvistiskā lokalizācija |
| Ievade | `LRB-###-input.csv` (max 50 rindas) + konteksts (`lv_source`, `de_reference`, `field_path`) |
| Izvade | `LRB-###-decisions.csv` ar `owner_decision`, `owner_new`, `owner_note` |
| Aizliegts | Rakstīt sistēmas kodu, merge, ingest, apply, manifest no output |

Luna saņem **tikai** lingvistiskos uzdevumus. Struktūras dublēšanai izmanto `@codebase` atsauci uz DE/LV shēmu, nevis visu repo.

### 2. Izpildītājs — Cursor (koda rakstītājs / Grok)

| Atribūts | Vērtība |
|---|---|
| Uzdevums | Tehniska integrācija: split, merge, SHA, verify, commit, push |
| Ievade | Luna `decisions.csv` **tikai pēc** anti-bulk PASS |
| Izvade | merged CSV, ingest proof, verify exit 0 |
| Aizliegts | Lingvistiski labot rindas, pieņemt OWNER lēmumus, apply bez authorization |

Cursor/Grok **nedrīkst** aizstāt Luna tulkošanā un **nedrīkst** apiet anti-bulk vārtu.

### 3. Uzraugs — ChatGPT (neatkarīgs QA)

| Atribūts | Vērtība |
|---|---|
| Uzdevums | Spot-check kvalitātes filtrs |
| Ievade | 15–20 nejaušas rindas no **viena** `LRB-###` batch |
| Izvade | Batch-level verdikts: `BATCH_SPOT_CHECK_PASS` vai `FAIL` |
| Aizliegts | Dot zaļo gaismu visam 5 125 failam; aizstāt anti-bulk skriptu |

ChatGPT ir **papildinājums**, ne primārā aizsardzība. Bulk pattern (`recheck-350` prefiksi, viens LABOT noteikums) primāri atklāj anti-bulk skripts.

### 4. OWNER — cilvēks (authorization slānis)

| Atribūts | Vērtība |
|---|---|
| Uzdevums | Gala authorization katram batch, ingest un apply |
| Avots | `reports/g2-a1-owner/status-index.json` |
| Statusi | `PENDING` → `APPROVED` (tikai cilvēks maina) |

```text
OWNER_AUTHORIZATION = REQUIRED
OWNER_AUTHORIZATION_STATUS = PENDING | APPROVED
```

OWNER authorization **nav** CSV teksta rinda un **nav** AI ģenerēts prefikss.

---

## Četri obligātie strukturālie vārti

### Vārts 1 — anti-bulk starp Luna un Cursor

**Starp Luna output un Cursor merge obligāti:**

```bash
node scripts/audit-g2-a1-owner-anti-bulk.js \
  --input reports/g2-a1-owner/batches-reviewed/LRB-###-decisions.csv \
  --manifest reports/g2-a1-owner/manifests/LRB-###-start.json \
  --baseline reports/g2-a1-owner/batches-pending/LRB-###-input.csv
```

FAIL closed uz:

- prefix-only `NELABOT` (`OWNER_RECHECK_APPROVED_*:` + nemainīta vecā piezīme)
- single-rule `LABOT` (viens mehānisms visām rindām, piem. `X • X` → `X`)
- ≥95% reproducējama bulk transformācija
- trūkstošs `provenance_type = INDIVIDUAL_LINGUISTIC`

Cursor merge/ingest **bloķēts**, kamēr anti-bulk ≠ PASS.

Detalizēti: `reports/cursor-task-g2-a1-owner-anti-bulk-audit.md`

### Vārts 2 — manifest pirms output

Katrā `LRB-###` sesijā secība ir neapgriezenama:

```text
1. split → batches-pending/LRB-###-input.csv
2. manifest → manifests/LRB-###-start.json   (input SHA + finding_stable_ids)
3. Luna review → batches-reviewed/LRB-###-decisions.csv
4. anti-bulk audit
```

Manifest **nedrīkst** tikt ģenerēts no decisions CSV. Ingest skripts noraida self-referential manifest (`input_csv_sha256 == output_sha256`).

### Vārts 3 — OWNER authorization kā atsevišķs statuss

Authorization glabājas `reports/g2-a1-owner/status-index.json`, nevis CSV piezīmēs:

```json
{
  "ownerAuthorization": {
    "required": true,
    "status": "PENDING",
    "approvedBatches": [],
    "ingestApproved": false,
    "applyApproved": false
  }
}
```

Batch commit atļauts tikai kad:

```text
anti_bulk_pass = true
spot_check_pass = true   (ja veikts)
owner_authorization_status = APPROVED   (cilvēks)
```

### Vārts 4 — apply kā atsevišķs, pēdējais posms

```text
review (Luna) → anti-bulk → spot-check → merge → ingest → [OWNER APPROVED] → COPY-ONLY apply
```

| Posms | Kad | Kas drīkst |
|---|---|---|
| Ingest | Pēc consolidated anti-bulk PASS | Rakstīt OWNER CSV/JSON repozitorijā |
| Apply | Pēc `PENDING_LINGUISTIC = 0` + OWNER apply authorization | Rakstīt `data/{lang}/a1.js` |

Apply **nedrīkst** palaist:

- automātiski pēc tulkošanas;
- daļēji (tikai 1 476 LABOT), ja nav explicit OWNER frozen-partial authorization;
- kamēr `recheck-350` vai `5241` vēl QUARANTINE/INVALID.

Detalizēti: `reports/cursor-task-g2-a1-owner-final-copy-only-apply.md`

---

## Per-batch darba cikls (obligāts)

```text
┌─ Cursor (skripts) ─────────────────────────────────────┐
│ split LRB-###-input.csv (≤50)                        │
│ manifest LRB-###-start.json (pirms review)            │
└──────────────────────────┬───────────────────────────┘
                           ▼
┌─ Luna (tulkošana) ───────────────────────────────────┐
│ LRB-###-decisions.csv                                 │
│ provenance_type = INDIVIDUAL_LINGUISTIC               │
└──────────────────────────┬───────────────────────────┘
                           ▼
┌─ anti-bulk skripts ───────────────────────────────────┐
│ PASS / FAIL closed                                    │
└──────────────────────────┬───────────────────────────┘
                           ▼ PASS
┌─ ChatGPT (spot-check) ─────────────────────────────────┐
│ 15–20 rindas no šī batch                              │
│ BATCH_SPOT_CHECK_PASS / FAIL                          │
└──────────────────────────┬───────────────────────────┘
                           ▼ PASS
┌─ OWNER (cilvēks) ────────────────────────────────────┐
│ owner_authorization_status = APPROVED                 │
└──────────────────────────┬───────────────────────────┘
                           ▼ APPROVED
┌─ Cursor (skripts) ─────────────────────────────────────┐
│ merge → commit → push                                 │
└───────────────────────────────────────────────────────┘
```

---

## Absolūtie aizliegumi (visi līmeņi)

- Luna raksta kodu vai merge skriptus
- Cursor/Grok tulko vai pieņem lingvistiskus lēmumus
- ChatGPT aizstāj anti-bulk skriptu vai dod ingest/apply authorization
- Jebkurš AI maina `owner_authorization_status` uz `APPROVED`
- Manifest ģenerēts no output un izmantots kā OWNER pierādījums
- Apply pirms ingest + OWNER closure

---

## Saistītie dokumenti

| Dokuments | Loma |
|---|---|
| `reports/g2-a1-owner-review-repair-master-sequence.md` | Phase 0–E secība |
| `reports/cursor-task-g2-a1-owner-review-recheck-350.md` | Phase A (350 invalid) |
| `reports/cursor-task-g2-a1-owner-review-pending-5125.md` | Phase B (5 125 pending) |
| `reports/cursor-task-g2-a1-owner-anti-bulk-audit.md` | Vārts 1 |
| `reports/cursor-task-g2-a1-owner-reviewed-ingest.md` | Phase D |
| `reports/cursor-task-g2-a1-owner-final-copy-only-apply.md` | Vārts 4 / Phase E |
| `reports/g2-a1-owner/status-index.json` | Vārts 3 — authorization state |
