# BS–DE C2 FULL LINGUISTIC AUDIT

**Date:** 2026-08-08
**Model:** GPT-5.6 Luna (card-level audit)
**Mode:** AUDIT ONLY — no data files modified

---

## Summary

```text
Cards reviewed: 219 / 219
Data modifications: NONE

CRITICAL: 0
HIGH: 8
MEDIUM: 24
LOW: 2
SOURCE ISSUES: 1
INFORMATIONAL: 3
Confirmed clean cards: 185
```

---

## Automatic checks

| Script | Result | Notes |
|---|---|---|
| audit-language-parity.js --lang=bs | PASS | C2: 219/219, order 0, layouts match |
| validate-study-design.js --lang=bs (C2) | PASS | sectionAccentIssues: 0 |
| verify-bs-de-compliance.js | PASS | DE READ-ONLY intact |
| audit-mojibake.js --lang=bs | PASS | hits: 0 |
| audit-translations.js --lang=bs (C2) | PASS | no C2-specific issues |
| audit-study-cards.js --lang=bs (C2) | WARNING | 0/1 — global standardStudy rules expect comparison/tip/important; LV C2 etalon has none → INFORMATIONAL |
| data/bs/c2.js ≡ www/data/bs/c2.js | PASS | identical |

---

## Known source issue review

**Unvoreingenommenheit → SOURCE ISSUE (LV gloss)**

German *Unvoreingenommenheit* = lack of prejudice/bias (Nepristrasnost), not objectivity/neutrality.
LV gloss `objektivitāte • neitralitāte` is semantically incorrect for the German lemma.
BS `Objektivnost • Neutralnost` faithfully mirrors the wrong LV gloss.
**Verdict:** SOURCE ISSUE in LV–DE etalon. BS should be updated only after LV source correction.

---

## Re-audit (manual fixes from translation PR)

| Card | Verdict | Notes |
|---|---|---|
| konterkarieren | **finding (MEDIUM)** | Current `Poremetiti` is acceptable but imprecise; `Osujetiti` better matches German *konterkarieren* (thwart/counteract). |
| gesellschaftlich | **finding (MEDIUM)** | `Društveni • Javni` mixes societal and public senses; flashcard should be `Društveni` (or `Društven • Društveni` if dual form needed). |

---

## Study card manual review

**Card:** `c2-gewichtseinheit` (standardStudy)

| Field | Verdict |
|---|---|
| translation | PASS — `Jedinica za mjerenje težine` is correct |
| explanation | PASS — semantically aligned with DE |
| examples (3) | PASS — DE↔BS correspondence correct |
| comparison / tip / important | N/A — absent in LV etalon (not a defect) |
| sectionAccents | N/A — absent in LV and BS (parity OK) |

Luna audit: PASS. Optional style note: flashcard could use shorter `Jedinica težine`, but current form is pedagoģiski precīzs.

---

## sectionAccents

C2 has no `sectionAccents` in LV or BS. **INFORMATIONAL — PASS** (structural parity, not a BS regression).

---

## INFORMATIONAL

1. **audit-study-cards 0/1** — Global script expects full standardStudy sections; LV C2 intentionally omits comparison/tip/important. Per project convention: WARNING only.
2. **sectionAccents absent** — Matches LV C2; not a translation defect.
3. **Study translation verbosity** — `Jedinica za mjerenje težine` is longer than flashcard ideal but acceptable for C2 precision.

---

## Findings (full format)

Total BS quality findings: **34** across **34** cards.

### HIGH — `c2-bereitschaftsdienst-101`

**Severity:** HIGH
**Card ID:** c2-bereitschaftsdienst-101
**German:** Bereitschaftsdienst
**Current BS:** Operativna služba
**Recommended BS:** Dežurna služba
**Reason:** Njemački izraz znači dežurnu službu ili pripravnost, a ne operativnu službu.
**Source/semantic note:** LV source: operatīvais dienests. Field: lv.

### HIGH — `c2-geschenkpackung-39`

**Severity:** HIGH
**Card ID:** c2-geschenkpackung-39
**German:** Geschenkpackung
**Current BS:** Omot za poklon
**Recommended BS:** Poklon-pakovanje
**Reason:** Omot za poklon znači omot ili ambalažu za umotavanje poklona, a ne poklon-pakovanje kao proizvodni ili prodajni paket.
**Source/semantic note:** LV source: dāvanas iesaiņojums. Field: lv.

### HIGH — `c2-geschwindigkeits-berschreitung-149`

**Severity:** HIGH
**Card ID:** c2-geschwindigkeits-berschreitung-149
**German:** Geschwindigkeitsüberschreitung
**Current BS:** Nepoštivanje određene brzine • Prekoračenje
**Recommended BS:** Prekoračenje brzine
**Reason:** Lema označava prekoračenje brzine; postojeće varijante su neprecizne, a druga je nedovršena.
**Source/semantic note:** LV source: noteiktā ātruma neievērošana • pārkāpšana. Field: lv.

### HIGH — `c2-hausgemeinschaft-161`

**Severity:** HIGH
**Card ID:** c2-hausgemeinschaft-161
**German:** Hausgemeinschaft
**Current BS:** Članovi porodice • Ukućani
**Recommended BS:** Zajednica stanara
**Reason:** Hausgemeinschaft označava zajednicu ljudi koji žive u istoj zgradi, a ne članove porodice ili samo ukućane.
**Source/semantic note:** LV source: ģimenes locekļi • mājas iedzīvotāji. Field: lv.

### HIGH — `c2-krankenversicherung-47`

**Severity:** HIGH
**Card ID:** c2-krankenversicherung-47
**German:** Krankenversicherung
**Current BS:** Osiguranje u slučaju bolesti
**Recommended BS:** Zdravstveno osiguranje
**Reason:** Njemački pojam označava zdravstveno osiguranje; postojeća formulacija sužava ga na osiguranje u slučaju bolesti.
**Source/semantic note:** LV source: apdrošinājums slimības gadījumā. Field: lv.

### HIGH — `c2-lebenshaltungskosten-171`

**Severity:** HIGH
**Card ID:** c2-lebenshaltungskosten-171
**German:** Lebenshaltungskosten
**Current BS:** Sredstva za život • Troškovi
**Recommended BS:** Troškovi života
**Reason:** Značenje je troškovi potrebni za život; postojeći izrazi znače sredstva za život i opće troškove.
**Source/semantic note:** LV source: iztikai nepieciešamie līdzekļi • izmaksas. Field: lv.

### HIGH — `c2-meisterschaftsspiel-177`

**Severity:** HIGH
**Card ID:** c2-meisterschaftsspiel-177
**German:** Meisterschaftsspiel
**Current BS:** Prvenstvo
**Recommended BS:** Prvenstvena utakmica
**Reason:** Meisterschaftsspiel je konkretna utakmica u prvenstvu, dok prvenstvo označava cijelo takmičenje.
**Source/semantic note:** LV source: meistarsacīkstes. Field: lv.

### HIGH — `c2-stra-enunterf-hrung-67`

**Severity:** HIGH
**Card ID:** c2-stra-enunterf-hrung-67
**German:** Straßenunterführung
**Current BS:** Pješački tunel
**Recommended BS:** Cestovni podvožnjak
**Reason:** Njemački pojam označava podvožnjak za cestu, a ne posebno pješački tunel.
**Source/semantic note:** LV source: gājēju tunelis. Field: lv.

### MEDIUM — `c2-abgeordnetenhaus-78`

**Severity:** MEDIUM
**Card ID:** c2-abgeordnetenhaus-78
**German:** Abgeordnetenhaus
**Current BS:** Parlament
**Recommended BS:** Predstavnički dom
**Reason:** Pojam označava predstavnički dom ili dom zastupnika, a ne parlament u cjelini.
**Source/semantic note:** LV source: parlaments. Field: lv.

### MEDIUM — `c2-ausbildungsbeihilfe-84`

**Severity:** MEDIUM
**Card ID:** c2-ausbildungsbeihilfe-84
**German:** Ausbildungsbeihilfe
**Current BS:** Naknada za školovanje
**Recommended BS:** Naknada za stručno osposobljavanje
**Reason:** Ausbildung ovdje prvenstveno označava stručno osposobljavanje, a ne općenito školovanje.
**Source/semantic note:** LV source: mācību pabalsts. Field: lv.

### MEDIUM — `c2-behandlungsraum-16`

**Severity:** MEDIUM
**Card ID:** c2-behandlungsraum-16
**German:** Behandlungsraum
**Current BS:** Ordinacija
**Recommended BS:** Prostorija za liječenje
**Reason:** „Behandlungsraum“ je prostorija za liječenje/tretman; „ordinacija“ označava širi pojam, ljekarsku praksu ili kabinet.
**Source/semantic note:** LV source: ārsta kabinets. Field: lv.

### MEDIUM — `c2-berufsbezeichnung-87`

**Severity:** MEDIUM
**Card ID:** c2-berufsbezeichnung-87
**German:** Berufsbezeichnung
**Current BS:** Naziv radnog mjesta
**Recommended BS:** Naziv zanimanja
**Reason:** Berufsbezeichnung označava naziv zanimanja ili profesije, ne nužno naziv konkretnog radnog mjesta.
**Source/semantic note:** LV source: amata nosaukums. Field: lv.

### MEDIUM — `c2-beschwerdeschrift-191`

**Severity:** MEDIUM
**Card ID:** c2-beschwerdeschrift-191
**German:** Beschwerdeschrift
**Current BS:** Žalba
**Recommended BS:** Pisana žalba
**Reason:** The German compound explicitly denotes a written complaint or appeal, not merely a žalba in general.
**Source/semantic note:** LV source: sūdzība. Field: bsText.

### MEDIUM — `c2-dorfgemeinschaft-136`

**Severity:** MEDIUM
**Card ID:** c2-dorfgemeinschaft-136
**German:** Dorfgemeinschaft
**Current BS:** Stanovnici sela
**Recommended BS:** Seoska zajednica
**Reason:** Lema označava zajednicu sela, ne samo njegove stanovnike.
**Source/semantic note:** LV source: ciema iedzīvotāji. Field: lv.

### MEDIUM — `c2-durchkreuzen-103`

**Severity:** MEDIUM
**Card ID:** c2-durchkreuzen-103
**German:** durchkreuzen
**Current BS:** Precrtati • Prekrižiti • Preći • Rastaviti
**Recommended BS:** Precrtati • Prekrižiti • Preći • Osujetiti
**Reason:** U značenju ometanja ili sprečavanja, durchkreuzen znači osujetiti, ne rastaviti.
**Source/semantic note:** LV source: pārsvītrot • pārvilkt krustu • šķērsot • izjaukt. Field: lv.

### MEDIUM — `c2-durchschnittsleistung-106`

**Severity:** MEDIUM
**Card ID:** c2-durchschnittsleistung-106
**German:** Durchschnittsleistung
**Current BS:** Osrednji učinak • Prosječan učinak
**Recommended BS:** Prosječan učinak
**Reason:** Osrednji učinak u bosanskom obično znači mediokritetski ili slab učinak, a ne neutralni prosjek.
**Source/semantic note:** LV source: viduvējs sniegums • caurmēra sniegums. Field: lv.

### MEDIUM — `c2-empfehlungsschreiben-110`

**Severity:** MEDIUM
**Card ID:** c2-empfehlungsschreiben-110
**German:** Empfehlungsschreiben
**Current BS:** Pismena preporuka
**Recommended BS:** Preporučno pismo
**Reason:** Empfehlungsschreiben označava konkretno preporučno pismo, dok pismena preporuka zvuči opisno i manje terminološki precizno.
**Source/semantic note:** LV source: rakstisks ieteikums. Field: lv.

### MEDIUM — `c2-entschlossenheit-113`

**Severity:** MEDIUM
**Card ID:** c2-entschlossenheit-113
**German:** Entschlossenheit
**Current BS:** Sigurnost • Odlučnost • Nepokolebljivost
**Recommended BS:** Odlučnost • Odlučnost • Nepokolebljivost
**Reason:** Entschlossenheit znači odlučnost ili čvrstu riješenost; sigurnost znači izvjesnost, bezbjednost ili samopouzdanje.
**Source/semantic note:** LV source: noteiktība • apņēmība • nešaubīgums. Field: lv.

### MEDIUM — `c2-errungenschaft-117`

**Severity:** MEDIUM
**Card ID:** c2-errungenschaft-117
**German:** Errungenschaft
**Current BS:** Postignuće • Korist • Dobitak
**Recommended BS:** Postignuće
**Reason:** Errungenschaft znači dostignuće ili postignuće; korist i dobitak označavaju benefit ili materijalni dobitak.
**Source/semantic note:** LV source: sasniegums • ieguvums • guvums. Field: lv.

### MEDIUM — `c2-ged-chtnisst-rung-127`

**Severity:** MEDIUM
**Card ID:** c2-ged-chtnisst-rung-127
**German:** Gedächtnisstörung
**Current BS:** Poremećaji pamćenja
**Recommended BS:** Poremećaj pamćenja
**Reason:** Njemačka lema je u jednini; bosanski prijevod treba zadržati isti broj.
**Source/semantic note:** LV source: atmiņas traucējumi. Field: lv.

### MEDIUM — `c2-geistesgegenwart-131`

**Severity:** MEDIUM
**Card ID:** c2-geistesgegenwart-131
**German:** Geistesgegenwart
**Current BS:** Snalažljivost
**Recommended BS:** Prisebnost
**Reason:** Geistesgegenwart znači prisebnost i prisutnost duha, a snalažljivost označava širu sposobnost snalaženja.
**Source/semantic note:** LV source: attapība. Field: lv.

### MEDIUM — `c2-gep-ckaufbewahrung-35`

**Severity:** MEDIUM
**Card ID:** c2-gep-ckaufbewahrung-35
**German:** Gepäckaufbewahrung
**Current BS:** Prostorija za čuvanje prtljaga
**Recommended BS:** Prostor za čuvanje prtljage
**Reason:** Nakon čuvanje potreban je genitiv prtljage; prostor za čuvanje prtljage prirodnije označava uslugu ili prostor.
**Source/semantic note:** LV source: bagāžas glabātava. Field: lv.

### MEDIUM — `c2-gerechtigkeitsgef-hl-141`

**Severity:** MEDIUM
**Card ID:** c2-gerechtigkeitsgef-hl-141
**German:** Gerechtigkeitsgefühl
**Current BS:** Pravda • Osjećaj za pravdu
**Recommended BS:** Osjećaj za pravdu
**Reason:** Pravda označava sam pojam pravde, dok lema znači osjećaj ili smisao za pravdu.
**Source/semantic note:** LV source: taisnīgums • taisnības izjūta. Field: lv.

### MEDIUM — `c2-gesellschaftlich-150`

**Severity:** MEDIUM
**Card ID:** c2-gesellschaftlich-150
**German:** gesellschaftlich
**Current BS:** Društveni • Javni
**Recommended BS:** Društveni
**Reason:** Gesellschaftlich znači društveni ili vezan za društvo; javni znači public, što je drugo značenje.
**Source/semantic note:** LV source: sabiedrisks • sabiedrības. Field: lv.

### MEDIUM — `c2-gewinnauszahlung-156`

**Severity:** MEDIUM
**Card ID:** c2-gewinnauszahlung-156
**German:** Gewinnauszahlung
**Current BS:** Isplata dobitka na lutriji
**Recommended BS:** Isplata dobitka
**Reason:** Bosanski izraz neopravdano sužava značenje na dobitak na lutriji; njemački označava isplatu dobiti ili dobitka općenito.
**Source/semantic note:** LV source: loterijas laimesta izmaksa. Field: lv.

### MEDIUM — `c2-konterkarieren-1`

**Severity:** MEDIUM
**Card ID:** c2-konterkarieren-1
**German:** konterkarieren
**Current BS:** Poremetiti
**Recommended BS:** Osujetiti
**Reason:** Znači aktivno osujetiti, poništiti ili djelovati protiv nečega; „poremetiti“ je preširoko i slabije precizno.
**Source/semantic note:** LV source: izjaukt. Field: lv.

### MEDIUM — `c2-preisausschreiben-187`

**Severity:** MEDIUM
**Card ID:** c2-preisausschreiben-187
**German:** Preisausschreiben
**Current BS:** Konkurs
**Recommended BS:** Nagradni konkurs
**Reason:** Preisausschreiben denotes a competition specifically offering a prize; Konkurs omits this defining semantic component.
**Source/semantic note:** LV source: konkurss. Field: bsText.

### MEDIUM — `c2-satelliten-bertragung-189`

**Severity:** MEDIUM
**Card ID:** c2-satelliten-bertragung-189
**German:** Satellitenübertragung
**Current BS:** Satelitski televizijski prijenos
**Recommended BS:** Satelitski prijenos
**Reason:** The German term means satellite transmission generally; adding televizijski narrows it to television transmission.
**Source/semantic note:** LV source: satelīttelevīzijas pārraide. Field: bsText.

### MEDIUM — `c2-scheidungsprozess-190`

**Severity:** MEDIUM
**Card ID:** c2-scheidungsprozess-190
**German:** Scheidungsprozess
**Current BS:** Brakorazvodna parnica
**Recommended BS:** Brakorazvodni postupak
**Reason:** Scheidungsprozess refers to divorce proceedings broadly; parnica specifically denotes civil litigation and is narrower.
**Source/semantic note:** LV source: šķiršanās prāva. Field: bsText.

### MEDIUM — `c2-schlafwagenzimmer-58`

**Severity:** MEDIUM
**Card ID:** c2-schlafwagenzimmer-58
**German:** Schlafwagenzimmer
**Current BS:** Spavaća soba
**Recommended BS:** Kabina u spavaćem vagonu
**Reason:** Njemački pojam označava kupe ili odjeljak u spavaćim kolima, dok latvijski i bosanski označavaju običnu spavaću sobu.
**Source/semantic note:** LV source: guļamistaba. Field: lv.

### MEDIUM — `c2-schlittschuhkufe-59`

**Severity:** MEDIUM
**Card ID:** c2-schlittschuhkufe-59
**German:** Schlittschuhkufe
**Current BS:** Kliznica saonica
**Recommended BS:** Klizna krama
**Reason:** Njemački pojam označava oštricu klizaljke, dok latvijski i bosanski označavaju kliznicu saonica.
**Source/semantic note:** LV source: ragavu sliece. Field: lv.

### MEDIUM — `c2-selbstverteidigung-195`

**Severity:** MEDIUM
**Card ID:** c2-selbstverteidigung-195
**German:** Selbstverteidigung
**Current BS:** Skup tehnika samoodbrane
**Recommended BS:** Samoodbrana
**Reason:** The German term means self-defence generally; the current translation restricts it to a set of techniques.
**Source/semantic note:** LV source: pašaizsardzības paņēmienu kopums. Field: bsText.

### LOW — `c2-fallschirmspringen-119`

**Severity:** LOW
**Card ID:** c2-fallschirmspringen-119
**German:** Fallschirmspringen
**Current BS:** Skakanje padobranom
**Recommended BS:** Padobranstvo
**Reason:** Skakanje padobranom je razumljivo, ali padobranstvo je prirodniji i terminološki precizniji naziv aktivnosti.
**Source/semantic note:** LV source: lēkšana ar izpletni. Field: lv.

### LOW — `c2-vaterschaftsklage-200`

**Severity:** LOW
**Card ID:** c2-vaterschaftsklage-200
**German:** Vaterschaftsklage
**Current BS:** Tužba sudu za utvrđivanje očinstva
**Recommended BS:** Tužba za utvrđivanje očinstva
**Reason:** The phrase Tužba sudu is a literal, non-idiomatic rendering; Bosnian legal usage omits sudu here.
**Source/semantic note:** LV source: sūdzība tiesā paternitātes noteikšanai. Field: bsText.

---

## CONFIRMED REPAIRS

### HIGH

**c2-bereitschaftsdienst-101** (`Bereitschaftsdienst`)

```text
Current BS: Operativna služba
→
Exact recommended BS: Dežurna služba
```

**c2-geschenkpackung-39** (`Geschenkpackung`)

```text
Current BS: Omot za poklon
→
Exact recommended BS: Poklon-pakovanje
```

**c2-geschwindigkeits-berschreitung-149** (`Geschwindigkeitsüberschreitung`)

```text
Current BS: Nepoštivanje određene brzine • Prekoračenje
→
Exact recommended BS: Prekoračenje brzine
```

**c2-hausgemeinschaft-161** (`Hausgemeinschaft`)

```text
Current BS: Članovi porodice • Ukućani
→
Exact recommended BS: Zajednica stanara
```

**c2-krankenversicherung-47** (`Krankenversicherung`)

```text
Current BS: Osiguranje u slučaju bolesti
→
Exact recommended BS: Zdravstveno osiguranje
```

**c2-lebenshaltungskosten-171** (`Lebenshaltungskosten`)

```text
Current BS: Sredstva za život • Troškovi
→
Exact recommended BS: Troškovi života
```

**c2-meisterschaftsspiel-177** (`Meisterschaftsspiel`)

```text
Current BS: Prvenstvo
→
Exact recommended BS: Prvenstvena utakmica
```

**c2-stra-enunterf-hrung-67** (`Straßenunterführung`)

```text
Current BS: Pješački tunel
→
Exact recommended BS: Cestovni podvožnjak
```

### MEDIUM

**c2-abgeordnetenhaus-78** (`Abgeordnetenhaus`)

```text
Current BS: Parlament
→
Exact recommended BS: Predstavnički dom
```

**c2-ausbildungsbeihilfe-84** (`Ausbildungsbeihilfe`)

```text
Current BS: Naknada za školovanje
→
Exact recommended BS: Naknada za stručno osposobljavanje
```

**c2-behandlungsraum-16** (`Behandlungsraum`)

```text
Current BS: Ordinacija
→
Exact recommended BS: Prostorija za liječenje
```

**c2-berufsbezeichnung-87** (`Berufsbezeichnung`)

```text
Current BS: Naziv radnog mjesta
→
Exact recommended BS: Naziv zanimanja
```

**c2-beschwerdeschrift-191** (`Beschwerdeschrift`)

```text
Current BS: Žalba
→
Exact recommended BS: Pisana žalba
```

**c2-dorfgemeinschaft-136** (`Dorfgemeinschaft`)

```text
Current BS: Stanovnici sela
→
Exact recommended BS: Seoska zajednica
```

**c2-durchkreuzen-103** (`durchkreuzen`)

```text
Current BS: Precrtati • Prekrižiti • Preći • Rastaviti
→
Exact recommended BS: Precrtati • Prekrižiti • Preći • Osujetiti
```

**c2-durchschnittsleistung-106** (`Durchschnittsleistung`)

```text
Current BS: Osrednji učinak • Prosječan učinak
→
Exact recommended BS: Prosječan učinak
```

**c2-empfehlungsschreiben-110** (`Empfehlungsschreiben`)

```text
Current BS: Pismena preporuka
→
Exact recommended BS: Preporučno pismo
```

**c2-entschlossenheit-113** (`Entschlossenheit`)

```text
Current BS: Sigurnost • Odlučnost • Nepokolebljivost
→
Exact recommended BS: Odlučnost • Odlučnost • Nepokolebljivost
```

**c2-errungenschaft-117** (`Errungenschaft`)

```text
Current BS: Postignuće • Korist • Dobitak
→
Exact recommended BS: Postignuće
```

**c2-ged-chtnisst-rung-127** (`Gedächtnisstörung`)

```text
Current BS: Poremećaji pamćenja
→
Exact recommended BS: Poremećaj pamćenja
```

**c2-geistesgegenwart-131** (`Geistesgegenwart`)

```text
Current BS: Snalažljivost
→
Exact recommended BS: Prisebnost
```

**c2-gep-ckaufbewahrung-35** (`Gepäckaufbewahrung`)

```text
Current BS: Prostorija za čuvanje prtljaga
→
Exact recommended BS: Prostor za čuvanje prtljage
```

**c2-gerechtigkeitsgef-hl-141** (`Gerechtigkeitsgefühl`)

```text
Current BS: Pravda • Osjećaj za pravdu
→
Exact recommended BS: Osjećaj za pravdu
```

**c2-gesellschaftlich-150** (`gesellschaftlich`)

```text
Current BS: Društveni • Javni
→
Exact recommended BS: Društveni
```

**c2-gewinnauszahlung-156** (`Gewinnauszahlung`)

```text
Current BS: Isplata dobitka na lutriji
→
Exact recommended BS: Isplata dobitka
```

**c2-konterkarieren-1** (`konterkarieren`)

```text
Current BS: Poremetiti
→
Exact recommended BS: Osujetiti
```

**c2-preisausschreiben-187** (`Preisausschreiben`)

```text
Current BS: Konkurs
→
Exact recommended BS: Nagradni konkurs
```

**c2-satelliten-bertragung-189** (`Satellitenübertragung`)

```text
Current BS: Satelitski televizijski prijenos
→
Exact recommended BS: Satelitski prijenos
```

**c2-scheidungsprozess-190** (`Scheidungsprozess`)

```text
Current BS: Brakorazvodna parnica
→
Exact recommended BS: Brakorazvodni postupak
```

**c2-schlafwagenzimmer-58** (`Schlafwagenzimmer`)

```text
Current BS: Spavaća soba
→
Exact recommended BS: Kabina u spavaćem vagonu
```

**c2-schlittschuhkufe-59** (`Schlittschuhkufe`)

```text
Current BS: Kliznica saonica
→
Exact recommended BS: Klizna krama
```

**c2-selbstverteidigung-195** (`Selbstverteidigung`)

```text
Current BS: Skup tehnika samoodbrane
→
Exact recommended BS: Samoodbrana
```

### LOW

**c2-fallschirmspringen-119** (`Fallschirmspringen`)

```text
Current BS: Skakanje padobranom
→
Exact recommended BS: Padobranstvo
```

**c2-vaterschaftsklage-200** (`Vaterschaftsklage`)

```text
Current BS: Tužba sudu za utvrđivanje očinstva
→
Exact recommended BS: Tužba za utvrđivanje očinstva
```

---

## SOURCE ISSUES — DO NOT FIX IN BS C2

### c2-unvoreingenommenheit-0 — Unvoreingenommenheit

| | |
|---|---|
| LV gloss (current) | objektivitāte • neitralitāte |
| BS (current) | Objektivnost • Neutralnost |
| Problem | LV gloss and BS mirror describe objectivity/neutrality, but German Unvoreingenommenheit means lack of prejudice/bias (Nepristrasnost). |
| Recommended LV fix | nepristrasnost • bez predrasuda |
| Recommended BS (after LV fix) | Nepristrasnost • Bez predrasuda |
| Note | BS faithfully follows incorrect LV gloss. Fix LV–DE source first; then align BS. |

---

## API usage

| Metric | Value |
|---|---:|
| Model | `gpt-5.6-luna` |
| API requests | 9 |
| Retries | 0 |
| Input tokens | 16366 |
| Output tokens | 19564 |
| Total tokens | 35930 |

---

## Status

**BS–DE C2 FULL LINGUISTIC AUDIT = COMPLETE**

- Cards reviewed: **219 / 219**
- Data files changed: **0**
- Quality findings: **35** (34 BS repairs + 1 reclassified SOURCE ISSUE)

This audit is **not** `FINAL – OWNER ACCEPTED` and **not** `PRODUCTION READY`.

**NEKO NELABOT. AUDIT ONLY.**
