# CS–DE A1+A2 pilns audits

**Audita datums:** 2026-08-10  
**Audita veids:** Pilns CS–DE A1+A2 audits pēc `LANGUAGE_AUDIT_STANDARD`, `APP_QUALITY_STANDARD`, `STUDY_CARD_RULES`, `COMPARISON_STUDY_RULES`, `UI_UX_VISUAL_COLOR_RULES`  
**Režīms:** Tikai audits — datu faili netika mainīti  
**Luna modelis:** `gpt-5.6-luna` — ✅ pabeigts (2 342 kartītes, 618 873 tokeni)

---

## 1. Kopsavilkums

| Metrika | A1 | A2 | Kopā |
|---|---:|---:|---:|
| Ierakstu skaits | 702 | 1 640 | 2 342 |
| Study kartītes | 124 / 134 LV | 231 / 231 LV | 355 / 365 LV |
| comparisonStudy | 0 | 0 | 0 |
| DE integritātes kļūdas (study) | 97 lauki / 26 kartītes | 0 | 97 / 26 |
| Trūkstošas study kartītes | 10 | 0 | 10 |
| LV atliekas saturā (ne accents) | 5 lauki / 4 kartītes | 120 lauki / 108 kartītes | 125 / 112 |
| LV atliekas `sectionAccents` | 19 | 2 065 | 2 084 |
| Mojibake | 0 | 0 | 0 |
| `data/` ≡ `www/` | ✅ | ✅ | ✅ |
| Luna kvalitātes atradumi | 416 | 1 158 | **1 574** |
| Luna skartās kartītes | ~250 | ~521 | **771** |

### Statusi

| Statuss | A1 | A2 | Kopējais secinājums |
|---|---|---|---|
| **STRUCTURAL PASS** | ❌ NE | ✅ PASS | A1: 10 trūkstošas study kartītes + lauku neatbilstības |
| **DE READ-ONLY** | ❌ NE | ✅ PASS | A1: 97 DE lauku neatbilstības pret LV etalonu |
| **DETERMINISTIC AUDIT** | ❌ NE | ⚠️ DAĻĒJS | A2: masīvas LV atliekas `sectionAccents` un saturā |
| **LUNA AI AUDITED** | ✅ PASS | ✅ PASS | 1 574 kvalitātes atradumi (771 unikālas kartītes) |
| **PRODUCTION READY** | ❌ NE | ❌ NE | Nepieciešama labošanas kārta pirms izmantošanas |
| **FINAL – OWNER ACCEPTED** | ❌ NE | ❌ NE | Nav native speaker izlases |

**Galvenais secinājums:** A2 struktūra un DE lauki ir korekti, bet čehu tulkojumu kvalitāte (īpaši `sectionAccents` ar latviešu atliekām) nav produkcijas gatavībā. A1 papildus ir kritiskas strukturālas un DE integritātes problēmas — 10 pilnībā trūkstošas study kartītes un 26 kartītes ar nepareizu vācu saturu study sadaļās.

---

## 2. Auditētie faili un etalons

| Loma | A1 | A2 |
|---|---|---|
| LV–DE etalons (tikai lasīšana) | `data/a1.js` | `data/a2.js` |
| CS datu fails | `data/cs/a1.js` | `data/cs/a2.js` |
| CS www slānis | `www/data/cs/a1.js` | `www/data/cs/a2.js` |

**LV–DE etalons netika mainīts.**

---

## 3. Palaistie skripti

| Skripts | Komanda | Rezultāts |
|---|---|---|
| Valodu paritāte | `node scripts/audit-language-parity.js --lang=cs` | A1: ❌ (10+ missing fields, layout mismatch); A2: ✅ |
| DE integritāte | `node scripts/verify-cs-de-compliance.js` | ❌ 99 kopējas neatbilstības (97 A1, 2 citur) |
| Mojibake | `node scripts/audit-mojibake.js --lang=cs` | ✅ PASS (0 hits) |
| Study dizains | `node scripts/validate-study-design.js --lang=cs` | A1: 0 sectionAccentIssues; A2: 18 minimalStudy neredzamas, 1 tukšs sectionAccents |
| Study kartīšu audits | `node scripts/audit-study-cards.js --lang=cs` | A1: 7/124 pass; A2: 47/231 pass |
| Audita kolektors | `node reports/temp/audit-cs-a1a2-collect.js` | Struktūra, DE, LV atliekas, accents |
| Luna audits | `node reports/temp/audit-cs-a1a2-luna.js` | ✅ COMPLETE — 1 574 atradumi, 618 873 tokeni |
| JS sintakse | `node --check data/cs/a1.js` / `a2.js` | ✅ PASS |
| Slāņu identitāte | `diff -q data/cs/*.js www/data/cs/*.js` | ✅ Identiski |

**Pagaidu faili:** `reports/temp/cs-a1-audit-data.json`, `reports/temp/cs-a2-audit-data.json`, `reports/temp/cs-a1a2-luna-linguistic-findings.json`, `reports/temp/cs-a1a2-luna-run.log`

**Audita palīgskripti (nemaina datus):** `reports/temp/audit-cs-a1a2-collect.js`, `reports/temp/openai-luna-cs-a1a2-audit.js`, `reports/temp/audit-cs-a1a2-luna.js`

---

## 4. A1 — detalizēti atradumi

### 4.1 Kritiski: trūkstošas study kartītes (10)

Šīm LV etalona kartēm CS failā **nav** `study` objekta:

`Besuch`, `besuchen`, `Fußball`, `ganz`, `gefallen`, `Geschichte`, `Geschwister`, `Großeltern`, `Hand`, `hübsch`

**Standarts:** `LANGUAGE_AUDIT_STANDARD` §2.1.3 — layout un sadaļām jāatbilst LV.

### 4.2 Kritiski: DE READ-ONLY pārkāpumi (26 kartītes, 97 lauki)

Study sadaļās (`examples[].de`, `comparison[].word`) CS dati **nesakrīt** ar LV etalonu. Piemēri:

| DE vārds | Problēma |
|---|---|
| `sprechen` | `study.examples[2].de`: CS `Ich spreche Deutsch.` ≠ LV `Sie spricht mit ihrer Lehrerin.` |
| `klein` | Piemēru DE teikumi pārkārtoti/nepareizi |
| `auch` | Piemēru DE teikumi nesakrīt ar LV secību un saturu |
| `Besuch` / `besuchen` | Study objekts trūkst, bet DE lauki no LV etalona arī nav sinhronizēti |

**Standarts:** `APP_QUALITY_STANDARD` §1 — DE lauki READ-ONLY; `verify-cs-de-compliance.js` = FAIL.

### 4.3 Augsti: latviešu atliekas saturā (4 kartītes)

| Kartīte | Vieta | Paraugs |
|---|---|---|
| `es` | `study.info` | `Český "es" = vācu "ich"` |
| `fahren` | `study.important`, `study.accents` | `Vācu valodā... Braukt • Vest • Aizvest`, `Transportlīdzekli` |
| `Reis` | `study.explanation` | `Lotyši však často říkají "rýže"` (pedagoģiski pieņemams, bet jāpārskata) |
| `Land` | `study.explanation` | `Lotyšsko` atsauce |

### 4.4 Vidēji: nepilnīgas study sadaļas

Kartēm `bitte`, `Bitte`, `ein`, `es` trūkst daļas no LV study struktūras (`comparison`, `tip.text`).

Kartēm `Wochenende`, `Frühstück` trūkst `de_plural`.

### 4.5 Study kartīšu kvalitāte

`audit-study-cards.js`: **7/124** study kartītes iziet globālo standardStudy pārbaudi.

Tipiskās problēmas: nepilnīgs `explanation`, `examples`, `comparison`, `tip`, `important` salīdzinājumā ar LV etalonu.

### 4.6 Nepatiesi pozitīvi (deterministiskais skeneris)

Kartes `Balkon`, `Million`, `Zitrone` — čehu diakritika (`Balkón`, `Milión`, `Citrón`) tika kļūdaini atzītas kā poļu atliekas. **Nav kļūda** — pareizs čehu ortogrāfijas variants.

---

## 5. A2 — detalizēti atradumi

### 5.1 Struktūra un DE integritāte — PASS

- 1 640/1 640 ieraksti
- 231/231 study kartītes
- 0 DE lauku neatbilstību pret LV etalonu
- `data/cs/a2.js` ≡ `www/data/cs/a2.js`

### 5.2 Kritiski: latviešu atliekas `sectionAccents` (~2 065 termini)

SK→CS ģenerēšanas pipeline nav pārtulkojis `sectionAccents` masīvus — tajos palikuši latviešu highlight termini, kas nerenderējas kartītēs.

Piemēri (`abfahren` / `entry[2]`):

- `doties ceļā`, `cilvēkiem`, `ceļojumā`, `Nozīmēt`, `Vārds`, `Ceļā`, `Ceļu`

**Standarts:** `STUDY_CARD_RULES` §sectionAccents — obligāti un jāsakrīt ar faktisko čehu tekstu; `UI_UX_VISUAL_COLOR_RULES` §3 — tukši/nepilnīgi accents = kritiska vizuālā kļūda.

### 5.3 Augsti: latviešu atliekas saturā (108 kartītes, 120 lauki)

| Kartīte | Vieta | Paraugs |
|---|---|---|
| `abfahren` | `study.important.example` | `Der Zug fährt ab = vilciens atiet. Wir fahren ab = mēs aizbraucam.` |
| `schließen` | galvenais `lv` | `Aizvērt` (latviešu, ne čehu) |
| `Saison` | galvenais `lv` | `Některé ne. sezóna` (sabojāts mašīntulkojums) |

### 5.4 Vidēji: minimalStudy kartītes (18)

`validate-study-design.js` atzīmē 18 A2 `minimalStudy` kartītes kā `studyObjectNoRenderable` (piem., `Aschenputtel`, `Gott`, `Keller`). LV etalonā tās ir `minimalStudy` — **INFORMATIONAL**, nevis CS specifiska kļūda.

### 5.5 Study kartīšu audits

`audit-study-cards.js`: **47/231** study kartītes iziet. Lielākā daļa neiziet tāpēc, ka globālais skripts salīdzina ar pilnu LV standardStudy struktūru; daļa ir `minimalStudy` vai nepilnīgas sadaļas.

### 5.6 Nepatiesi pozitīvi

`Balón`, `Bonbón`, `Kupón`, `Móda`, `Stadión` — pareiza čehu ortogrāfija, ne poļu atliekas.

---

## 6. Salīdzinājums A1 vs A2

| Aspekts | A1 | A2 |
|---|---|---|
| Ierakstu skaits | ✅ 702/702 | ✅ 1640/1640 |
| Study skaits | ❌ 124/134 | ✅ 231/231 |
| DE READ-ONLY | ❌ 97 lauki | ✅ 0 |
| LV saturs | ⚠️ 4 kartītes | ❌ 108 kartītes |
| sectionAccents LV | ⚠️ 19 | ❌ ~2065 |
| Mojibake | ✅ | ✅ |
| Kopējais risks | **Kritisks** (struktūra + DE) | **Augsts** (tulkojumu kvalitāte) |

---

## 7. Ieteicamā labošanas secība (tikai informatīvi — audits nemaina datus)

1. **A1 DE atjaunošana** — palaist `scripts/fix-cs-de-fields.js` un pārbaudīt 26 kartītes ar study DE neatbilstībām.
2. **A1 trūkstošās study kartītes** — ģenerēt 10 pilnas `standardStudy` kartītes no LV etalona.
3. **A2 sectionAccents** — palaist `scripts/fix-cs-highlight-mismatches.js` vai lv→cs pārtulkošanu visiem accent terminiem.
4. **LV/SK atliekas saturā** — palaist `scripts/fix-cs-audit-findings.js` (lv→cs native content rebuild).
5. **Luna regressija** — pēc labojumiem atkārtot `audit-cs-a1a2-luna.js` ar `gpt-5.6-luna`.
6. **Native speaker izlase** — ~5% izlase (min. 30 kartes/līmenis) pēc automātiskās labošanas.

---

## 8. Luna audits (GPT-5.6 Luna) — ✅ PABEIGTS

| Parametrs | Vērtība |
|---|---|
| Modelis | `gpt-5.6-luna` |
| Statuss | **COMPLETE** |
| Auditētas kartītes | 2 342 (578+1 427 flash + 124+231 study) |
| Unikālas kartītes ar atradumiem | **771** (33% no kopējā) |
| Kopējie atradumi | **1 574** |
| API tokeni | 618 873 |
| Izvades fails | `reports/temp/cs-a1a2-luna-linguistic-findings.json` |

### 8.1 Smagums pa līmeņiem

| Smagums | A1 | A2 | Kopā |
|---|---:|---:|---:|
| CRITICAL | 4 | 4 | **8** |
| HIGH | 210 | 577 | **787** |
| MEDIUM | 164 | 514 | **678** |
| LOW | 38 | 63 | **101** |

### 8.2 Kategorijas (kopā)

| Kategorija | Skaits | Apraksts |
|---|---:|---|
| SEMANTICS | 607 | Nepareiza nozīme (slovensko→čeština jaucības) |
| TRANSLATION | 434 | Burtisks vai nepareizs tulkojums |
| GRAMMAR | 266 | Vārdu šķira, dzimte, locījums |
| NATURALNESS | 119 | Nedabiska frāze |
| ORTHOGRAPHY | 78 | Ortogrāfija/diakritika |
| FOREIGN_REMNANT | 36 | Angļu/latviešu/slovāku atliekas |
| STUDY | 26 | Study kartīšu satura kļūdas |
| COMPARISON | 6 | Salīdzinājuma tabulas kļūdas |

### 8.3 CRITICAL atradumi (8)

| Līmenis | Kartīte | Problēma |
|---|---|---|
| A1 | `die` | Study skaidrojumā `umřít` nepareizi aizstāj `die` |
| A1 | `erst` | Čehu teikums pilnīgi atšķiras no avota |
| A1 | `es` | `Učím se německy` / `Ona tady pracuje` — nesakrīt ar avotu |
| A2 | `Achse` | `Osel` (ēzelis) nevis `Osa` (ass) |
| A2 | `angespannt` | `Čas` (laiks) nevis `Napjatý` |
| A2 | `halt!` | `Stánek` (kiosks) nevis `Stůj!` |
| A2 | `die Birne` | `cibule` nevis `hruška/žárovka` |

### 8.4 Tipiski HIGH atradumi (A1 paraugi)

| DE | Esošais CS | Luna ieteikums | Iemesls |
|---|---|---|---|
| `alle` | Každý | Všichni | alle = visi, ne katrs |
| `bedeuten` | Střední | Znamenat | střední = vidējs, ne nozīmēt |
| `Buch` | Rezervovat | Kniha | rezervovat = rezervēt, ne grāmata |
| `Buchstabe` | Dopis | Písmeno | dopis = vēstule, ne burts |
| `du` | Vy | Ty | du = tu, ne jūs |
| `fett` | Tuk | Tučný | tuk = tauks, ne resns |

### 8.5 FOREIGN_REMNANT (36 atradumi)

Angļu atliekas: `Drink`, `Notebook`, `Cookie`, `Fit`, `At`, `Snack`, `Hit`, `Miss`, `Peeling`  
Vācu atliekas: `Schnout` (trocken)  
Citu valodu: `Tuta`, `Mocihnen`, latviešu `Aizvērt` (schließen)

### 8.6 Luna secinājums

Luna audits apstiprina deterministiskos atradumus un atklāj plašu **semantisko kļūdu slāni** — lielākā daļa A1/A2 tulkojumu ir mašīntulkojuma kvalitātē ar biežām slovensko/poļu/angļu ietekmēm. **~33% kartīšu** satur vismaz vienu Luna atzītu kļūdu.

**Atkārtot Luna pēc labojumiem:**

```bash
node reports/temp/audit-cs-a1a2-luna.js
```

---

## 9. Gala secinājums

**CS–DE A1+A2 nav gatavs produkcijai.**

- **A1** prasa strukturālu un DE integritātes labošanu (10 trūkstošas study kartītes, 26 kartītes ar nepareizu vācu saturu study sadaļās).
- **A2** ir strukturāli korekts, bet satur masīvas tulkojumu kvalitātes problēmas — īpaši neiztulkoti latviešu `sectionAccents` termini un latviešu teksts 108+ study kartītēs.
- **Luna valodnieciskais audits** — ✅ pabeigts: **1 574** atradumi, **771** skartās kartītes, 8 CRITICAL.

✅ Tikai audits — datu faili netika mainīti.  
✅ Mojibake, JS sintakse, `www` sinhronizācija — PASS.  
✅ Luna AI AUDITED — PASS (ar atradumiem).  
❌ PRODUCTION READY — NE.  
❌ FINAL – OWNER ACCEPTED — NE.
