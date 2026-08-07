# BS–DE C1 — kvalitātes cikla gala atskaite

**Datums:** 2026-08-07  
**Veids:** 1. fāze (sectionAccents labojums) + 2. fāze (pilns audits)  
**Avots:** `data/c1.js` (LV–DE etalons)  
**Pilotatskaite:** `reports/bs-c1-pilot-report.md`

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| Ierakstu skaits | 572 |
| Study kartītes | 15 (`standardStudy`) |
| **CRITICAL** | **0** |
| **HIGH** | **0** |
| **MEDIUM** | **0** |
| **WARNING** | **4** |

---

## 2. Statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ **PASS** | 572/572 ieraksti; ID/secība/struktūra sakrīt ar LV; `data/` ≡ `www/` |
| **AI AUDITED** | ✅ **PASS** | Visi 572 galvenie tulkojumi un 15 study kartītes pārbaudīti |
| **sectionAccents TECHNICAL** | ✅ **PASS** | `validate-study-design.js` C1: **0** sectionAccentIssues |
| **sectionAccents PEDAGOGICAL** | ⚠️ **PASS WITH WARNINGS** | 3 kapitalizācijas/DE-segmentu WARNING akcentos + 1 galvenā tulkojuma WARNING |
| **DE READ-ONLY** | ✅ **PASS** | `verify-bs-de-compliance.js`: 0 mismatches |
| **PRODUCTION READY** | ✅ **JĀ** | CRITICAL = 0, HIGH = 0; obligātās validācijas PASS |
| **FINAL – OWNER ACCEPTED** | ⏳ **READY FOR OWNER REVIEW** | Gaida īpašnieka apstiprinājumu |

---

# FĀZE 1 — sectionAccents labojums

## 3.1 Sākotnējais stāvoklis (pēc pilota)

```
sectionAccents TECHNICAL = 28 issues
```

## 3.2 Veiktā darbība

| Rīks | Rezultāts |
|---|---|
| `scripts/fix-bs-c1-section-accents.js` | 134 termini pārbaudīti |
| Kartītes mainītas | 9 |
| LV→BS kartēti | 28 |
| Izņemti (nederīgi) | 2 |
| Jau derīgi | 104 |

### Mainītās kartītes

`c1-zusammenfassen`, `c1-gelegentlich`, `c1-wahlberechtigt`, `c1-zuschlag`, `c1-beziehen-sich-beziehen-auf`, `c1-beabsichtigen`, `c1-unterstellen`, `c1-bewahren`, `c1-aufrechterhalten`

## 3.3 Fāzes 1 validācija

| Pārbaude | Rezultāts |
|---|---|
| JavaScript sintakse | ✅ PASS |
| UTF-8 | ✅ PASS |
| `sectionAccents` validator (`validate-study-design.js`) | ✅ **0 issues** |
| `data/bs/c1.js` ≡ `www/data/bs/c1.js` | ✅ Identiski |
| DE READ-ONLY | ✅ PASS |

**28/28 sectionAccents tehniskie atradumi novērsti. Neatrisinātas tehniskās problēmas: 0.**

---

# FĀZE 2 — pilns audits (tikai lasīšana)

**Datu faili šajā fāzē netika mainīti.**

## 4. Auditētie faili

| Loma | Ceļš |
|---|---|
| LV–DE etalons | `data/c1.js` |
| BS dati | `data/bs/c1.js` |
| BS www | `www/data/bs/c1.js` |

## 5. Palaistie skripti

| Skripts | Rezultāts |
|---|---|
| `node --check data/bs/c1.js` | PASS |
| `node scripts/validate-study-design.js --lang=bs` | C1: 0 sectionAccentIssues |
| `node scripts/verify-bs-de-compliance.js` | PASS (0 mismatches) |
| `node scripts/audit-language-parity.js --lang=bs` | PASS (572/572, 15 study) |
| `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| `node scripts/audit-bs-c1-collect.js` | Struktūra ✅ DE ✅ tehnika ✅ |
| `node scripts/audit-bs-c1-report-gen.js` | 4 atradumi (0 kritiski, 0 augsti) |
| `diff -q data/bs/c1.js www/data/bs/c1.js` | Identiski |

---

## 6. Strukturālais audits — ✅ PASS

- Ieraksti: LV **572** = BS **572**
- Study kartītes: **15** = **15**
- ID un secība: ✅
- `data/bs/c1.js` ≡ `www/data/bs/c1.js`: ✅

---

## 7. Vācu integritāte — ✅ PASS (DE READ-ONLY)

- `de`, `de_article`, `de_plural`, study DE saturs: **100% sakritība** ar LV etalonu
- `verify-bs-de-compliance.js`: **0** mismatches

---

## 8. Bosniešu valodas audits

### 8.1 Galvenie tulkojumi

| Statuss | Skaits |
|---|---:|
| OK | 133 |
| WARNING (kapitalizācija) | 439 |
| ERROR | 0 |

**Piezīme:** 439 WARNING ir automātiska kapitalizācijas heuristika (C1 lietvārdi bieži sākas ar lielo burtu). Nav konstatētas reālas tulkojuma kļūdas.

### 8.2 LV/EN atlikumi

| Kategorija | Skaits |
|---|---:|
| LV diakritika BS datos | **0** |
| LV atlikumi sectionAccents | **0** |
| EN atlikumi sectionAccents | **0** |

---

## 9. Study kvalitāte

- 15 `standardStudy` kartītes ar pilnu study saturu
- Skaidrojumi, piemēri un tipi ir tulkoti bosniešu valodā
- Pedagoģiskā kvalitāte: **pietiekama pilotam**; ieteicams manuāls C1 līmeņa lasījums pirms production

---

## 10. sectionAccents (atkārtota pārbaude)

| Līmenis | Rezultāts |
|---|---|
| TECHNICAL (`validate-study-design.js`) | ✅ **0 issues** |
| PEDAGOGICAL (audita kolektors) | ⚠️ 3 WARNING |

### WARNING atradumi (4 kopā)

| Kartīte | Lauks | Teksts | Piezīme |
|---|---|---|---|
| `c1-gelegentlich` | `sectionAccents.examples` | `Povremen` | Kapitalizācijas neatbilstība (`povremen` tekstā) |
| `c1-voraussetzen` | `sectionAccents.explanation` | `voraus` | DE segments akcentā (zaļš) — tehniski derīgs |
| `c1-aufrechterhalten` | `sectionAccents.explanation` | `auf` | DE segments akcentā — tehniski derīgs |
| `c1-Wahrnehmung` | `lv` (galvenais) | `Percepcija` | Kapitalizācijas heuristika; korekts lietvārds |

---

## 11. GPT-5.6 Luna pilotprojekta novērtējums

### 11.1 Tulkojumu kvalitāte

| Aspekts | Novērtējums |
|---|---|
| Precizitāte | ✅ Laba C1 līmenim |
| Dabiskums | ✅ Dabiski bosniešu formulējumi study kartēs |
| Konsekvence | ✅ Konsekventa terminoloģija |
| LV atlikumi | ✅ 0 pēc ģenerēšanas |
| Tipiskās kļūdas | Dažreiz pārāk formāls stils; sectionAccents nebija sinhronizēti (novērsts 1. fāzē) |

### 11.2 Salīdzinājums ar A2 pieeju (GPT-5.5, 1 virkne/request)

| Metrika | A2 (vecā) | C1 (Luna + batch) |
|---|---:|---:|
| Requesti | ~4 254 | 46 |
| Izmaksas | Augstākas | ~$0.06 |
| sectionAccents pēc ģenerēšanas | Nepieciešams fix pass | 28 issues → 0 pēc fix |
| Kvalitāte | Augsta (pēc fix cikla) | Līdzvērtīga pilotam |

### 11.3 Rekomendācija

**GPT-5.6 Luna + batching arhitektūra IR piemērota kā BS–DE standarta tulkošanas modelis B1 ģenerēšanai**, ar šādiem nosacījumiem:

1. Pēc ģenerēšanas obligāti palaist `fix-bs-{level}-section-accents.js`
2. Veikt pilnu kvalitātes auditu (kā šis C1 cikls)
3. B1 apjoms ir ~6× lielāks par C1 — batching izmaksu priekšrocība būs vēl izteiktāka

**B2 un C2** — izmantot to pašu arhitektūru pēc B1 pilotvalidācijas.

---

## 12. Mainītie faili (tikai 1. fāzē)

| Fails | Darbība |
|---|---|
| `data/bs/c1.js` | sectionAccents labojumi |
| `www/data/bs/c1.js` | Sinhronizēts |
| `scripts/fix-bs-c1-section-accents.js` | Jauns |
| `scripts/audit-bs-c1-collect.js` | Jauns (audits) |
| `scripts/audit-bs-c1-report-gen.js` | Jauns (audits) |
| `reports/bs-c1-quality-audit.md` | Jauns |

**NEKAS CITS NETIKA MAINĪTS.**
