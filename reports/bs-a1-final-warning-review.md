# BS–DE A1 pēdējo 6 WARNING sectionAccents gala pārbaude

**Audita datums:** 2026-08-07  
**Režīms:** Tikai gala lēmuma audits — datu faili netika mainīti

---

## Audita avoti

| Avots | Ceļš |
|---|---|
| Izņemto akcentu audits | `reports/bs-a1-removed-section-accents-audit.md` |
| sectionAccents labošanas atskaite | `reports/bs-a1-section-accents-fix.md` |
| LV–DE etalons | `data/a1.js` (tikai lasīšana) |
| BS dati | `data/bs/a1.js`, `www/data/bs/a1.js` (tikai lasīšana) |

---

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Pārbaudītie WARNING gadījumi | **6** |
| CORRECTLY REMOVED | **6** |
| SHOULD BE RESTORED | **0** |

Visi 6 iepriekšējie WARNING gadījumi pēc manuālas salīdzināšanas ar LV etalonu, BS Study tekstu un pašreizējiem `sectionAccents` klasificēti kā **CORRECTLY REMOVED**. Iepriekšējie akcenti bija LV atlikumi, orphan ieraksti vai teksts, kas neeksistē attiecīgajā BS sadaļā. Pedagoģiskā highlight funkcija katrā gadījumā saglabāta ar esošajiem akcentiem vai ar pašu Study tekstu.

---

## Detalizēta analīze (6 gadījumi)

### 1. a1-bringen — `sectionAccents.comparison[0].meaning.purple[2]`

| Lauks | Vērtība |
|---|---|
| **Kartītes ID** | a1-bringen |
| **sectionAccents ceļš** | `sectionAccents.comparison[0].meaning.purple[2]` |
| **Iepriekšējais akcents** | Odneti i doneti |
| **Pašreizējais BS teksts** | `Donijeti` (comparison[0].meaning) |
| **Vai jēdziens izcelts citur?** | **Jā** — `Donijeti` jau izcelts `comparison[0].meaning.purple[0]`; explanation satur `donijeti` (purple); examples izceļ `Donela`/`Odnio`/`Odveo` |
| **LV etalona konteksts** | comparison[0].meaning: `atnest` (purple: atnest, aiznest, nogādāt) |
| **Pašreizējie akcenti šajā sadaļā** | `comparison[0].meaning.purple`: [`Donijeti`] |
| **Secinājums** | Iepriekšējais akcents „Odneti i doneti” pieder comparison[3] nozīmei, ne comparison[0]. comparison[0] teksts ir tikai „Donijeti”, un šis vārds jau ir izcelts. Bija orphan/misplaced ieraksts. |
| **Statuss** | **CORRECTLY REMOVED** |

---

### 2. a1-bringen — `sectionAccents.comparison[3].meaning.purple[0]`

| Lauks | Vērtība |
|---|---|
| **Kartītes ID** | a1-bringen |
| **sectionAccents ceļš** | `sectionAccents.comparison[3].meaning.purple[0]` |
| **Iepriekšējais akcents** | Ponesite sa sobom |
| **Pašreizējais BS teksts** | `Odneti i doneti` (comparison[3].meaning) |
| **Vai jēdziens izcelts citur?** | **Jā** — comparison[0] jau izceļ `Donijeti` ar to pašu vācu piemēru (`Ich bringe dir ein Buch`); explanation un important nodrošina `donijeti`/`dostaviti` semantiku |
| **LV etalona konteksts** | comparison[3].meaning: `nogādāt` (bijis mitbringen salīdzinājuma rindas atlikums LV struktūrā) |
| **Pašreizējie akcenti šajā sadaļā** | `comparison[3].meaning`: tukšs; `comparison[3].example`: green [`Donela`] |
| **Secinājums** | „Ponesite sa sobom” neeksistē BS tekstā — tas bija novecojis atlikums no citas salīdzinājuma rindas (mitbringen / paņemt līdzi). comparison[3] ir dublējoša rinda ar comparison[0]; galvenā nozīme jau izcelta. |
| **Statuss** | **CORRECTLY REMOVED** |

---

### 3. a1-die — `sectionAccents.important[1].purple[0]`

| Lauks | Vērtība |
|---|---|
| **Kartītes ID** | a1-die |
| **sectionAccents ceļš** | `sectionAccents.important[1].purple[0]` |
| **Iepriekšējais akcents** | Svim rodovima |
| **Pašreizējais BS teksts** | `U množini se die koristi i za sve rodove.` (important[1]) |
| **Vai jēdziens izcelts citur?** | **Daļēji** — `die` izcelts blue (`important[1].blue`); `U` izcelts green; tip.left izceļ `rod` (purple). Teksts „sve rodove” nav atsevišķi izcelts, bet teikums ir īss un skaidrs |
| **LV etalona konteksts** | important[1]: „Daudzskaitlī die lieto arī visām dzimtēm.” — purple: `visām dzimtēm` |
| **Pašreizējie akcenti šajā sadaļā** | blue: [`die`]; green: [`U`] |
| **Secinājums** | „Svim rodovima” neeksistē BS tekstā (tekstā ir „sve rodove”, nevis „svim rodovima”). Bija semantiski novecojis/gramatiski nepareizs atlikums. Galvenais mācību objekts `die` joprojām izcelts; daudzskaitļa nozīme ir pilnībā salasāma no īsā teikuma. |
| **Statuss** | **CORRECTLY REMOVED** |

---

### 4. a1-ein — `sectionAccents.tip.left.purple[1]`

| Lauks | Vērtība |
|---|---|
| **Kartītes ID** | a1-ein |
| **sectionAccents ceļš** | `sectionAccents.tip.left.purple[1]` |
| **Iepriekšējais akcents** | Nekoga |
| **Pašreizējais BS teksts** | `Zapamti: ein nije samo „jedan". Često je to samo neodređeni član.` (tip) |
| **Vai jēdziens izcelts citur?** | **Jā** — tip.left izceļ `ein` (blue) un `jedan` (purple + green); explanation vairākkārt izceļ `neodređeni član`, `ein`, `eine`, `einen`; important izceļ rod/formas |
| **LV etalona konteksts** | tip.left purple: `viens`, `kāds` |
| **Pašreizējie akcenti šajā sadaļā** | blue: [`ein`]; purple: [`jedan`]; green: [`jedan`] |
| **Secinājums** | „Nekoga” neeksistē BS tekstā — LV „kāds” atlikums. Tipa galvenā pedagoģiskā pretestība (ein ≠ tikai jedan) jau nodrošināta ar `ein` un `jedan` akcentiem. „neodređeni član” koncepts pilnībā pārklāts explanation sadaļā. |
| **Statuss** | **CORRECTLY REMOVED** |

---

### 5. a1-wie — `sectionAccents.important[0].purple[1]`

| Lauks | Vērtība |
|---|---|
| **Kartītes ID** | a1-wie |
| **sectionAccents ceļš** | `sectionAccents.important[0].purple[1]` |
| **Iepriekšējais akcents** | cik vecs |
| **Pašreizējais BS teksts** | `Wie viel(e) = koliko • Wie alt = koliko godina • Wie lange = koliko dugo.` (important[0]) |
| **Vai jēdziens izcelts citur?** | **Jā** — important[0] izceļ `Wie` (purple); explanation izceļ `wie` (blue) un formulas; examples izceļ `Koliko` pie Wie alt / Wie lange piemēriem; tip izceļ `kako` un `koliko` |
| **LV etalona konteksts** | important[0] purple: `cik daudz`, `cik vecs`, `cik ilgi` |
| **Pašreizējie akcenti šajā sadaļā** | purple: [`Wie`] |
| **Secinājums** | „cik vecs” ir LV atlikums — neeksistē BS tekstā (BS ekvivalents ir „koliko godina”). BS formulas teksts ir salasāms; `Wie` akcentē visu formulu bloku no vācu puses; `koliko`/`godina` semantika pārklāta examples un explanation. |
| **Statuss** | **CORRECTLY REMOVED** |

---

### 6. a1-wie — `sectionAccents.important[0].purple[2]`

| Lauks | Vērtība |
|---|---|
| **Kartītes ID** | a1-wie |
| **sectionAccents ceļš** | `sectionAccents.important[0].purple[2]` |
| **Iepriekšējais akcents** | cik ilgi |
| **Pašreizējais BS teksts** | `Wie viel(e) = koliko • Wie alt = koliko godina • Wie lange = koliko dugo.` (important[0]) |
| **Vai jēdziens izcelts citur?** | **Jā** — analogi gadījumam 5; examples `Wie lange dauert der Film?` izceļ `Koliko`; explanation satur `koliko dugo` |
| **LV etalona konteksts** | important[0] purple: `cik ilgi` (trešais elements) |
| **Pašreizējie akcenti šajā sadaļā** | purple: [`Wie`] |
| **Secinājums** | „cik ilgi” ir LV atlikums — neeksistē BS tekstā (BS ekvivalents ir „koliko dugo”). Ilguma nozīme nodrošināta ar examples, explanation un tip; `Wie` akcents sedz vācu formulu struktūru. |
| **Statuss** | **CORRECTLY REMOVED** |

---

## SHOULD BE RESTORED saraksts

**Nav (0).**

Neviens no 6 gadījumiem neatbilst SHOULD BE RESTORED kritērijiem: iepriekšējie akcenti bija kļūdaini vai novecojuši, un to atjaunošana neuzlabotu mācību kvalitāti. Ja nākotnē tiktu pievienoti jauni BS akcenti (piem., `rodove`, `neodređeni`, `godina`, `dugo`), tie būtu jauni labojumi, nevis šo 6 konkrēto vērtību atjaunošana.

---

## Gala secinājums

Visi 6 WARNING gadījumi ir **CORRECTLY REMOVED**. Pēc akcentu izņemšanas:

- nav pazudusi būtiska mācību informācija nevienā no 6 sadaļām;
- galvenie jēdzieni joprojām izcelti ar esošajiem `sectionAccents` vai ar citām Study sadaļām;
- highlight sistēma ir pedagoģiski pilnvērtīga salīdzinājumā ar LV etalonu (funkcionāla līdzvērtība, ne mehāniska identitāte).

---

## BS–DE A1 statusi

| Statuss | Rezultāts |
|---|---|
| **STRUCTURAL PASS** | PASS |
| **AI AUDITED** | PASS |
| **sectionAccents TECHNICAL** | PASS |
| **sectionAccents PEDAGOGICAL** | **PASS** |
| **PRODUCTION READY** | **JĀ** |
| **FINAL – OWNER ACCEPTED** | **NĒ** (native speaker pārbaude nav veikta) |

---

## Apliecinājumi

1. Audita laikā **netika mainīts** neviens datu vai aplikācijas fails.
2. Pārbaudīti **visi 6** WARNING gadījumi no `reports/bs-a1-removed-section-accents-audit.md`.
3. Nav veikti automātiski labojumi vai akcentu atjaunošana.

---

## Izveidotie faili

| Fails | Git |
|---|---|
| `reports/bs-a1-final-warning-review.md` | Jā (šis dokuments) |

---

*Atskaite izveidota 2026-08-07*
