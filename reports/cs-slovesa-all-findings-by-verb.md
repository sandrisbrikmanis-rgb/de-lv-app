# CS–DE Slovesa — All Findings by Verb (OWNER SOURCE)

READ-ONLY export for OWNER linguistic review. Audit proposed replacements are informational only — not OWNER-approved NEW values.
DE = STRICT READ-ONLY. SOURCE_DE_ISSUE findings document DE-side issues without implying DE production changes.

Generated: 2026-08-15T12:19:09.382Z
Source production: `data/cs/verbs.js`
Source audit: `reports/cs-slovesa-full-audit.md`, `reports/temp/cs-slovesa-audit/`

---

## 001 — `verb-0`

**DE lemma**
`backen`

**Forms (production CURRENT)**

### infinitiv
- DE: `backen`
- CS CURRENT: `Upéct`

### praesens
- DE: `er bäckt`
- CS CURRENT: `On peče`

### imperfektIndikativ
- DE: `er buk`
- CS CURRENT: `Pekl`

### imperfektKonjunktiv
- DE: `er büke`
- CS CURRENT: `Upekl by`

### partizipVergangenheit
- DE: `gebacken`
- CS CURRENT: `Smažené / pečené`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Smažené znamená smažené, nikoli pečené; německé gebacken odpovídá pečené.
- Proposed replacement: Pečené
- Audit CURRENT: Smažené / pečené
- Production CURRENT: Smažené / pečené
- DE (context): gebacken
- LV reference: cepts / izcepts

---

## 002 — `verb-1`

**DE lemma**
`befehlen`

**Forms (production CURRENT)**

### infinitiv
- DE: `befehlen`
- CS CURRENT: `Poroučet`

### praesens
- DE: `er befiehlt`
- CS CURRENT: `Přikazuje`

### imperfektIndikativ
- DE: `er befahl`
- CS CURRENT: `Přikázal`

### imperfektKonjunktiv
- DE: `er beföhle`
- CS CURRENT: `Rozkázal by`

### partizipVergangenheit
- DE: `befohlen`
- CS CURRENT: `Přikázal`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Přikázal je minulý čas, nikoli příčestí; befohlen zde znamená nařízeno.
- Proposed replacement: Nařízeno
- Audit CURRENT: Přikázal
- Production CURRENT: Přikázal
- DE (context): befohlen
- LV reference: pavēlēts

---

## 003 — `verb-2`

**DE lemma**
`beginnen`

**Forms (production CURRENT)**

### infinitiv
- DE: `beginnen`
- CS CURRENT: `Začít`

### praesens
- DE: `er beginnt`
- CS CURRENT: `On začíná`

### imperfektIndikativ
- DE: `er begann`
- CS CURRENT: `Začal`

### imperfektKonjunktiv
- DE: `er begönne / er begänne`
- CS CURRENT: `Začal by`

### partizipVergangenheit
- DE: `begonnen`
- CS CURRENT: `Začala`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Začala je ženský rod a minulý čas; pro neutrální es begonnen je vhodné začalo.
- Proposed replacement: Začalo
- Audit CURRENT: Začala
- Production CURRENT: Začala
- DE (context): begonnen
- LV reference: sākts

---

## 004 — `verb-3`

**DE lemma**
`beißen`

**Forms (production CURRENT)**

### infinitiv
- DE: `beißen`
- CS CURRENT: `Skus`

### praesens
- DE: `er beißt`
- CS CURRENT: `Kouše`

### imperfektIndikativ
- DE: `er biss`
- CS CURRENT: `Zakódoval`

### imperfektKonjunktiv
- DE: `er bisse`
- CS CURRENT: `Kouše`

### partizipVergangenheit
- DE: `gebissen`
- CS CURRENT: `Pokousaný / pokousaný`

### Findings

#### Finding 1
- Severity: HIGH
- Type: FINDING
- Source: deterministic
- Form/Field: imperfektIndikativ
- Issue: Foreign remnant in verb form imperfektIndikativ: PL_CHAR
- Proposed replacement: (Czech form)
- Audit CURRENT: Zakódoval
- Production CURRENT: Zakódoval
- DE (context): er biss
- LV reference: viņš koda

#### Finding 2
- Severity: HIGH
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: infinitiv
- Issue: Skus není spisovný český infinitiv a navíc působí jako slovenská kontaminace.
- Proposed replacement: Kousnout
- Audit CURRENT: Skus
- Production CURRENT: Skus
- DE (context): beißen
- LV reference: kost

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Zakódoval znamená zakódoval; německé biss je minulý čas slovesa kousat.
- Proposed replacement: Kousl
- Audit CURRENT: Zakódoval
- Production CURRENT: Zakódoval
- DE (context): er biss
- LV reference: viņš koda

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Kouše je přítomný indikativ; německý konjunktiv vyjadřuje podmiňovací způsob.
- Proposed replacement: Kousl by
- Audit CURRENT: Kouše
- Production CURRENT: Kouše
- DE (context): er bisse
- LV reference: viņš kostu

#### Finding 5
- Severity: LOW
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Význam je správný, ale překlad je omylem dvakrát identický.
- Proposed replacement: Pokousaný
- Audit CURRENT: Pokousaný / pokousaný
- Production CURRENT: Pokousaný / pokousaný
- DE (context): gebissen
- LV reference: kosts / sakosts

---

## 005 — `verb-4`

**DE lemma**
`bergen`

**Forms (production CURRENT)**

### infinitiv
- DE: `bergen`
- CS CURRENT: `Skrýt`

### praesens
- DE: `er birgt`
- CS CURRENT: `Schovává se`

### imperfektIndikativ
- DE: `er barg`
- CS CURRENT: `Schoval se`

### imperfektKonjunktiv
- DE: `er bürge / er bärge`
- CS CURRENT: `Schoval by se`

### partizipVergangenheit
- DE: `geborgen`
- CS CURRENT: `Skryté / uložené`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Bergen znamená zachránit nebo vyzvednout, nikoli skrýt.
- Proposed replacement: Zachránit
- Audit CURRENT: Skrýt
- Production CURRENT: Skrýt
- DE (context): bergen
- LV reference: slēpt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Schovává se znamená ukrývá se; německé birgt zde znamená zachraňuje.
- Proposed replacement: Zachraňuje
- Audit CURRENT: Schovává se
- Production CURRENT: Schovává se
- DE (context): er birgt
- LV reference: viņš slēpj

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Barg není schoval se, ale zachránil nebo vyzvedl.
- Proposed replacement: Zachránil
- Audit CURRENT: Schoval se
- Production CURRENT: Schoval se
- DE (context): er barg
- LV reference: viņš slēpa

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad zachovává chybný význam skrývání a navíc přidává reflexivitu.
- Proposed replacement: Zachránil by
- Audit CURRENT: Schoval by se
- Production CURRENT: Schoval by se
- DE (context): er bürge / er bärge
- LV reference: viņš slēptu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Geborgen znamená zachráněný nebo v bezpečí, ne skrytý či uložený.
- Proposed replacement: Zachráněný
- Audit CURRENT: Skryté / uložené
- Production CURRENT: Skryté / uložené
- DE (context): geborgen
- LV reference: paslēpts / paglābts

---

## 006 — `verb-5`

**DE lemma**
`bersten`

**Forms (production CURRENT)**

### infinitiv
- DE: `bersten`
- CS CURRENT: `Prasknutí`

### praesens
- DE: `er birst`
- CS CURRENT: `Praskne`

### imperfektIndikativ
- DE: `er barst / er borst`
- CS CURRENT: `Vybuchl`

### imperfektKonjunktiv
- DE: `er bärste / er börste`
- CS CURRENT: `Praskne`

### partizipVergangenheit
- DE: `geborsten (er ist)`
- CS CURRENT: `Zlomený`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Prasknutí je podstatné jméno; německý výraz je infinitiv.
- Proposed replacement: Prasknout
- Audit CURRENT: Prasknutí
- Production CURRENT: Prasknutí
- DE (context): bersten
- LV reference: plīst

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Bersten znamená prasknout nebo puknout, nikoli vybuchnout.
- Proposed replacement: Praskl
- Audit CURRENT: Vybuchl
- Production CURRENT: Vybuchl
- DE (context): er barst / er borst
- LV reference: viņš plīsa

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Praskne je indikativ; německý konjunktiv vyžaduje český kondicionál.
- Proposed replacement: Praskl by
- Audit CURRENT: Praskne
- Production CURRENT: Praskne
- DE (context): er bärste / er börste
- LV reference: viņš plīstu

#### Finding 4
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Zlomený odpovídá zlomení; geborsten znamená prasklý nebo puklý.
- Proposed replacement: Prasklý
- Audit CURRENT: Zlomený
- Production CURRENT: Zlomený
- DE (context): geborsten (er ist)
- LV reference: saplīsis

---

## 007 — `verb-6`

**DE lemma**
`bewegen`

**Forms (production CURRENT)**

### infinitiv
- DE: `bewegen`
- CS CURRENT: `Povzbudit`

### praesens
- DE: `er bewegt`
- CS CURRENT: `Nabádá`

### imperfektIndikativ
- DE: `er bewog`
- CS CURRENT: `Naléhal`

### imperfektKonjunktiv
- DE: `er bewöge`
- CS CURRENT: `Povzbudil by`

### partizipVergangenheit
- DE: `bewogen`
- CS CURRENT: `Povzbuzen`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Naléhal znamená naléhal; bewog zde znamená pohnul nebo povzbudil.
- Proposed replacement: Povzbudil
- Audit CURRENT: Naléhal
- Production CURRENT: Naléhal
- DE (context): er bewog
- LV reference: viņš pamudināja

---

## 008 — `verb-7`

**DE lemma**
`biegen`

**Forms (production CURRENT)**

### infinitiv
- DE: `biegen`
- CS CURRENT: `Ohyb`

### praesens
- DE: `er biegt`
- CS CURRENT: `Ukloní se`

### imperfektIndikativ
- DE: `er bog`
- CS CURRENT: `Prohnul se`

### imperfektKonjunktiv
- DE: `er böge`
- CS CURRENT: `Ohnul by se`

### partizipVergangenheit
- DE: `gebogen`
- CS CURRENT: `Ohnutý`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Ohyb je podstatné jméno; německý výraz je infinitiv.
- Proposed replacement: Ohýbat
- Audit CURRENT: Ohyb
- Production CURRENT: Ohyb
- DE (context): biegen
- LV reference: locīt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Ukloní se znamená pokloní se; biegen znamená ohýbat.
- Proposed replacement: Ohýbá
- Audit CURRENT: Ukloní se
- Production CURRENT: Ukloní se
- DE (context): er biegt
- LV reference: viņš loka

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Přidaná reflexivita mění význam; německé er bog je bez se.
- Proposed replacement: Ohnul
- Audit CURRENT: Prohnul se
- Production CURRENT: Prohnul se
- DE (context): er bog
- LV reference: viņš locīja

---

## 009 — `verb-8`

**DE lemma**
`bieten`

**Forms (production CURRENT)**

### infinitiv
- DE: `bieten`
- CS CURRENT: `Slíbit`

### praesens
- DE: `er bietet`
- CS CURRENT: `Slibuje`

### imperfektIndikativ
- DE: `er bot`
- CS CURRENT: `Slíbil`

### imperfektKonjunktiv
- DE: `er böte`
- CS CURRENT: `Slíbil by`

### partizipVergangenheit
- DE: `geboten`
- CS CURRENT: `Slíbil / nabídl`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Bieten znamená nabídnout, zatímco slíbit odpovídá německému versprechen.
- Proposed replacement: Nabídnout
- Audit CURRENT: Slíbit
- Production CURRENT: Slíbit
- DE (context): bieten
- LV reference: solīt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Slibuje znamená slibuje; bieten znamená nabízí.
- Proposed replacement: Nabízí
- Audit CURRENT: Slibuje
- Production CURRENT: Slibuje
- DE (context): er bietet
- LV reference: viņš sola

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Slíbil je významově jiné sloveso; bot je minulý čas nabídnout.
- Proposed replacement: Nabídl
- Audit CURRENT: Slíbil
- Production CURRENT: Slíbil
- DE (context): er bot
- LV reference: viņš solīja

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad zachovává chybný význam slibu místo nabídky.
- Proposed replacement: Nabídl by
- Audit CURRENT: Slíbil by
- Production CURRENT: Slíbil by
- DE (context): er böte
- LV reference: viņš solītu

#### Finding 5
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Slíbil je minulý čas a neodpovídá významu; geboten zde znamená nabídnuto.
- Proposed replacement: Nabídnuto
- Audit CURRENT: Slíbil / nabídl
- Production CURRENT: Slíbil / nabídl
- DE (context): geboten
- LV reference: solīts / piedāvāts

---

## 010 — `verb-9`

**DE lemma**
`binden`

**Forms (production CURRENT)**

### infinitiv
- DE: `binden`
- CS CURRENT: `Síto`

### praesens
- DE: `er bindet`
- CS CURRENT: `On seno`

### imperfektIndikativ
- DE: `er band`
- CS CURRENT: `Zaséval`

### imperfektKonjunktiv
- DE: `er bände`
- CS CURRENT: `Proséval`

### partizipVergangenheit
- DE: `gebunden`
- CS CURRENT: `Síto`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Síto je podstatné jméno; binden znamená vázat.
- Proposed replacement: Vázat
- Audit CURRENT: Síto
- Production CURRENT: Síto
- DE (context): binden
- LV reference: siet

#### Finding 2
- Severity: HIGH
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: praesens
- Issue: Současný text je chybný a nesrozumitelný; správně je on váže.
- Proposed replacement: On váže
- Audit CURRENT: On seno
- Production CURRENT: On seno
- DE (context): er bindet
- LV reference: viņš sien

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Zaséval znamená sowal; band je minulý čas vázat.
- Proposed replacement: Vázal
- Audit CURRENT: Zaséval
- Production CURRENT: Zaséval
- DE (context): er band
- LV reference: viņš sēja

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Proséval znamená prosíval nebo proséval; neodpovídá bind.
- Proposed replacement: Vázal by
- Audit CURRENT: Proséval
- Production CURRENT: Proséval
- DE (context): er bände
- LV reference: viņš sietu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Síto je podstatné jméno; gebunden znamená svázaný nebo vázaný.
- Proposed replacement: Svázaný
- Audit CURRENT: Síto
- Production CURRENT: Síto
- DE (context): gebunden
- LV reference: siets

---

## 011 — `verb-10`

**DE lemma**
`bitten`

**Forms (production CURRENT)**

### infinitiv
- DE: `bitten`
- CS CURRENT: `Zeptat se`

### praesens
- DE: `er bittet`
- CS CURRENT: `Prosí`

### imperfektIndikativ
- DE: `er bat`
- CS CURRENT: `Zeptal se`

### imperfektKonjunktiv
- DE: `er bäte`
- CS CURRENT: `Modlil by se`

### partizipVergangenheit
- DE: `gebeten`
- CS CURRENT: `Vyžádáno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Zeptat se znamená fragen; bitten znamená prosit nebo požádat.
- Proposed replacement: Prosit
- Audit CURRENT: Zeptat se
- Production CURRENT: Zeptat se
- DE (context): bitten
- LV reference: lūgt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Bat je minulý čas prosit/požádat, nikoli zeptat se.
- Proposed replacement: Požádal
- Audit CURRENT: Zeptal se
- Production CURRENT: Zeptal se
- DE (context): er bat
- LV reference: viņš lūdza

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Modlil by se znamená modlil by se; bäte znamená požádal by nebo prosil by.
- Proposed replacement: Požádal by
- Audit CURRENT: Modlil by se
- Production CURRENT: Modlil by se
- DE (context): er bäte
- LV reference: viņš lūgtu

#### Finding 4
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Vyžádáno vyjadřuje jiný význam; pro gebeten je vhodné požádáno nebo vyprošeno.
- Proposed replacement: Požádáno
- Audit CURRENT: Vyžádáno
- Production CURRENT: Vyžádáno
- DE (context): gebeten
- LV reference: lūgts

---

## 012 — `verb-11`

**DE lemma**
`blasen`

**Forms (production CURRENT)**

### infinitiv
- DE: `blasen`
- CS CURRENT: `Foukat`

### praesens
- DE: `er bläst`
- CS CURRENT: `Fouká`

### imperfektIndikativ
- DE: `er blies`
- CS CURRENT: `Zafoukal`

### imperfektKonjunktiv
- DE: `er bliese`
- CS CURRENT: `Foukal by`

### partizipVergangenheit
- DE: `geblasen`
- CS CURRENT: `Foukané`

### Findings

#### Finding 1
- Severity: LOW
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Zafoukal je dokonavé jednorázové dění; blies odpovídá nedokonavému foukal.
- Proposed replacement: Foukal
- Audit CURRENT: Zafoukal
- Production CURRENT: Zafoukal
- DE (context): er blies
- LV reference: viņš pūta

---

## 013 — `verb-12`

**DE lemma**
`gären`

**Forms (production CURRENT)**

### infinitiv
- DE: `gären`
- CS CURRENT: `Kvasit`

### praesens
- DE: `es gärt`
- CS CURRENT: `Fermentuje to`

### imperfektIndikativ
- DE: `es gor / es gärte`
- CS CURRENT: `Fermentuje to`

### imperfektKonjunktiv
- DE: `es göre / es gärte`
- CS CURRENT: `Bylo by to hořké`

### partizipVergangenheit
- DE: `gegoren / gegärt`
- CS CURRENT: `Žito`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Současný text je přítomný čas, zatímco německý tvar je minulý.
- Proposed replacement: Kvasilo to
- Audit CURRENT: Fermentuje to
- Production CURRENT: Fermentuje to
- DE (context): es gor / es gärte
- LV reference: tas rūga

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Hořké znamená bitter; německý tvar je kondicionál slovesa kvasit.
- Proposed replacement: Kvasilo by to
- Audit CURRENT: Bylo by to hořké
- Production CURRENT: Bylo by to hořké
- DE (context): es göre / es gärte
- LV reference: tas rūgtu

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Žito je obilnina; německé příčestí znamená vykvašené nebo zkvašené.
- Proposed replacement: Vykvašené
- Audit CURRENT: Žito
- Production CURRENT: Žito
- DE (context): gegoren / gegärt
- LV reference: rūdzis

---

## 014 — `verb-13`

**DE lemma**
`gebären`

**Forms (production CURRENT)**

### infinitiv
- DE: `gebären`
- CS CURRENT: `Porodit`

### praesens
- DE: `sie gebiert`
- CS CURRENT: `V jejím lůně`

### imperfektIndikativ
- DE: `sie gebar`
- CS CURRENT: `Porodila`

### imperfektKonjunktiv
- DE: `sie gebäre`
- CS CURRENT: `Porodila by`

### partizipVergangenheit
- DE: `geboren`
- CS CURRENT: `Narodil se / narodil se`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: V jejím lůně není slovesný překlad; gebiert znamená rodí nebo porodí.
- Proposed replacement: Rodí
- Audit CURRENT: V jejím lůně
- Production CURRENT: V jejím lůně
- DE (context): sie gebiert
- LV reference: viņa dzemdē

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Překlad je dvakrát stejný a narodil se je minulý čas, nikoli příčestí.
- Proposed replacement: Narozený
- Audit CURRENT: Narodil se / narodil se
- Production CURRENT: Narodil se / narodil se
- DE (context): geboren
- LV reference: dzemdēts / piedzimis

---

## 015 — `verb-14`

**DE lemma**
`gelingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `gelingen`
- CS CURRENT: `Uspět`

### praesens
- DE: `es gelingt`
- CS CURRENT: `Podaří se to`

### imperfektIndikativ
- DE: `es gelang`
- CS CURRENT: `Fungovalo to`

### imperfektKonjunktiv
- DE: `es gelänge`
- CS CURRENT: `Šlo by to`

### partizipVergangenheit
- DE: `gelungen (es ist)`
- CS CURRENT: `Podařilo`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Fungovalo to znamená fungovalo; gelang znamená podařilo se.
- Proposed replacement: Podařilo se
- Audit CURRENT: Fungovalo to
- Production CURRENT: Fungovalo to
- DE (context): es gelang
- LV reference: tas izdevās

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Šlo by to je obecnější a mění význam; gelänge znamená podařilo by se.
- Proposed replacement: Podařilo by se
- Audit CURRENT: Šlo by to
- Production CURRENT: Šlo by to
- DE (context): es gelänge
- LV reference: tas izdotos

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Chybí zvratné se; české podařilo je bez něj neúplné.
- Proposed replacement: Podařilo se
- Audit CURRENT: Podařilo
- Production CURRENT: Podařilo
- DE (context): gelungen (es ist)
- LV reference: izdevies

---

## 016 — `verb-15`

**DE lemma**
`gelten`

**Forms (production CURRENT)**

### infinitiv
- DE: `gelten`
- CS CURRENT: `Přijít vhod`

### praesens
- DE: `er gilt`
- CS CURRENT: `Hodí se / je platný`

### imperfektIndikativ
- DE: `er galt`
- CS CURRENT: `Hodil / byl fit`

### imperfektKonjunktiv
- DE: `er gölte / es gälte`
- CS CURRENT: `Hodilo by se / hodilo by se`

### partizipVergangenheit
- DE: `gegolten`
- CS CURRENT: `Použito / bylo platné`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Byl fit znamená tělesně zdatný; gelten zde znamená být platný nebo platit.
- Proposed replacement: Platilo / platil
- Audit CURRENT: Hodil / byl fit
- Production CURRENT: Hodil / byl fit
- DE (context): er galt
- LV reference: viņš derēja / bija spēkā

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Použito znamená used; gegolten zde znamená platilo nebo bylo platné.
- Proposed replacement: Platilo
- Audit CURRENT: Použito / bylo platné
- Production CURRENT: Použito / bylo platné
- DE (context): gegolten
- LV reference: derējis / bijis spēkā

---

## 017 — `verb-16`

**DE lemma**
`genesen`

**Forms (production CURRENT)**

### infinitiv
- DE: `genesen`
- CS CURRENT: `Uzdravit se`

### praesens
- DE: `er genest`
- CS CURRENT: `Uzdravuje se`

### imperfektIndikativ
- DE: `er genas`
- CS CURRENT: `Uzdravil se`

### imperfektKonjunktiv
- DE: `er genäse`
- CS CURRENT: `Uzdravil by se`

### partizipVergangenheit
- DE: `genesen (er ist)`
- CS CURRENT: `Uzdrav se`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Uzdrav se je rozkazovací způsob; genesen znamená uzdravený nebo zotavený.
- Proposed replacement: Uzdravený
- Audit CURRENT: Uzdrav se
- Production CURRENT: Uzdrav se
- DE (context): genesen (er ist)
- LV reference: izveseļojies

---

## 018 — `verb-17`

**DE lemma**
`genießen`

**Forms (production CURRENT)**

### infinitiv
- DE: `genießen`
- CS CURRENT: `Užívat si`

### praesens
- DE: `er genießt`
- CS CURRENT: `Užívá si`

### imperfektIndikativ
- DE: `er genoss`
- CS CURRENT: `Užíval si`

### imperfektKonjunktiv
- DE: `er genösse`
- CS CURRENT: `Užil by si`

### partizipVergangenheit
- DE: `genossen`
- CS CURRENT: `Užil si`

### Findings

#### Finding 1
- Severity: LOW
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Genoss vyjadřuje ukončený děj; užíval si je nedokonavé.
- Proposed replacement: Užil si
- Audit CURRENT: Užíval si
- Production CURRENT: Užíval si
- DE (context): er genoss
- LV reference: viņš baudīja

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Užil si je minulý čas; zde je potřeba příčestí vyjadřující vychutnaný děj.
- Proposed replacement: Vychutnaný
- Audit CURRENT: Užil si
- Production CURRENT: Užil si
- DE (context): genossen
- LV reference: baudīts

---

## 019 — `verb-18`

**DE lemma**
`geschehen`

**Forms (production CURRENT)**

### infinitiv
- DE: `geschehen`
- CS CURRENT: `Stát se`

### praesens
- DE: `es geschieht`
- CS CURRENT: `Stane se to`

### imperfektIndikativ
- DE: `es geschah`
- CS CURRENT: `Stalo se to`

### imperfektKonjunktiv
- DE: `es geschähe`
- CS CURRENT: `Stalo by se to`

### partizipVergangenheit
- DE: `geschehen (es ist)`
- CS CURRENT: `Stalo`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: praesens
- Issue: Stane se to je budoucí nebo dokonavý děj; geschieht je přítomné děje se.
- Proposed replacement: Děje se to
- Audit CURRENT: Stane se to
- Production CURRENT: Stane se to
- DE (context): es geschieht
- LV reference: tas notiek

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Chybí zvratné se; samotné stalo je neúplný překlad.
- Proposed replacement: Stalo se
- Audit CURRENT: Stalo
- Production CURRENT: Stalo
- DE (context): geschehen (es ist)
- LV reference: noticis

---

## 020 — `verb-19`

**DE lemma**
`gießen`

**Forms (production CURRENT)**

### infinitiv
- DE: `gießen`
- CS CURRENT: `Poručík`

### praesens
- DE: `er gießt`
- CS CURRENT: `Nalévá`

### imperfektIndikativ
- DE: `er goss`
- CS CURRENT: `Nalil`

### imperfektKonjunktiv
- DE: `er gösse`
- CS CURRENT: `Prší`

### partizipVergangenheit
- DE: `gegossen`
- CS CURRENT: `Věc`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Poručík je vojenská hodnost; gießen znamená lít nebo nalévat.
- Proposed replacement: Lít
- Audit CURRENT: Poručík
- Production CURRENT: Poručík
- DE (context): gießen
- LV reference: liet

#### Finding 2
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Nalil je dokonavé a znamená nalil; goss odpovídá nedokonavému lil.
- Proposed replacement: Lil
- Audit CURRENT: Nalil
- Production CURRENT: Nalil
- DE (context): er goss
- LV reference: viņš lēja

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Prší znamená prší; gösse je kondicionál slovesa lít.
- Proposed replacement: Lil by
- Audit CURRENT: Prší
- Production CURRENT: Prší
- DE (context): er gösse
- LV reference: viņš lietu

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Věc je podstatné jméno; gegossen znamená litý nebo odlitý.
- Proposed replacement: Litý
- Audit CURRENT: Věc
- Production CURRENT: Věc
- DE (context): gegossen
- LV reference: liets

---

## 021 — `verb-20`

**DE lemma**
`gleichen`

**Forms (production CURRENT)**

### infinitiv
- DE: `gleichen`
- CS CURRENT: `Podobat se`

### praesens
- DE: `er gleicht`
- CS CURRENT: `Podobá se`

### imperfektIndikativ
- DE: `er glich`
- CS CURRENT: `Napodoboval`

### imperfektKonjunktiv
- DE: `er gliche`
- CS CURRENT: `Napodoboval by`

### partizipVergangenheit
- DE: `geglichen`
- CS CURRENT: `Podobal`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Napodoboval znamená imitoval; gleichen znamená podobat se.
- Proposed replacement: Podobal se
- Audit CURRENT: Napodoboval
- Production CURRENT: Napodoboval
- DE (context): er glich
- LV reference: viņš līdzinājās

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad používá význam napodobování místo podobnosti.
- Proposed replacement: Podobal by se
- Audit CURRENT: Napodoboval by
- Production CURRENT: Napodoboval by
- DE (context): er gliche
- LV reference: viņš līdzinātos

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Podobal je minulý čas; vhodný přídavný tvar je podobný.
- Proposed replacement: Podobný
- Audit CURRENT: Podobal
- Production CURRENT: Podobal
- DE (context): geglichen
- LV reference: līdzinājies

---

## 022 — `verb-21`

**DE lemma**
`gleiten`

**Forms (production CURRENT)**

### infinitiv
- DE: `gleiten`
- CS CURRENT: `Klouzat`

### praesens
- DE: `er gleitet`
- CS CURRENT: `Klouže`

### imperfektIndikativ
- DE: `er glitt`
- CS CURRENT: `Klouzal`

### imperfektKonjunktiv
- DE: `er glitte`
- CS CURRENT: `Klouzal by`

### partizipVergangenheit
- DE: `geglitten (er ist)`
- CS CURRENT: `Uklouzl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Uklouzl znamená uklouzl nebo upadl; gleiten znamená klouzat.
- Proposed replacement: Klouzal
- Audit CURRENT: Uklouzl
- Production CURRENT: Uklouzl
- DE (context): geglitten (er ist)
- LV reference: slīdējis

---

## 023 — `verb-22`

**DE lemma**
`glimmen`

**Forms (production CURRENT)**

### infinitiv
- DE: `glimmen`
- CS CURRENT: `Řeřavý`

### praesens
- DE: `er glimmt`
- CS CURRENT: `Září`

### imperfektIndikativ
- DE: `er glimmte / glomm`
- CS CURRENT: `Zářil`

### imperfektKonjunktiv
- DE: `er glimmte`
- CS CURRENT: `Zářil by`

### partizipVergangenheit
- DE: `geglimmt / geglommen`
- CS CURRENT: `Řeřavý`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Řeřavý je přídavné jméno; německý výraz je slovesný infinitiv.
- Proposed replacement: Žhnout
- Audit CURRENT: Řeřavý
- Production CURRENT: Řeřavý
- DE (context): glimmen
- LV reference: kvēlot

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Září znamená svítí; glimmen znamená žhnout nebo doutnat.
- Proposed replacement: Žhne
- Audit CURRENT: Září
- Production CURRENT: Září
- DE (context): er glimmt
- LV reference: viņš kvēlo

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Zářil znamená svítil; glimmte/glomm znamená žhnul nebo doutnal.
- Proposed replacement: Žhnul
- Audit CURRENT: Zářil
- Production CURRENT: Zářil
- DE (context): er glimmte / er glomm
- LV reference: viņš kvēloja

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad používá význam záření místo žhnutí.
- Proposed replacement: Žhnul by
- Audit CURRENT: Zářil by
- Production CURRENT: Zářil by
- DE (context): er glimmte
- LV reference: viņš kvēlotu

#### Finding 5
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Řeřavý je sice významově blízké, ale není příčestí; vhodnější je rozžhavený.
- Proposed replacement: Rozžhavený
- Audit CURRENT: Řeřavý
- Production CURRENT: Řeřavý
- DE (context): geglimmt / geglommen
- LV reference: kvēlojis

---

## 024 — `verb-23`

**DE lemma**
`graben`

**Forms (production CURRENT)**

### infinitiv
- DE: `graben`
- CS CURRENT: `Kopat`

### praesens
- DE: `er gräbt`
- CS CURRENT: `On kope`

### imperfektIndikativ
- DE: `er grub`
- CS CURRENT: `Kopal`

### imperfektKonjunktiv
- DE: `er grübe`
- CS CURRENT: `Kopal by`

### partizipVergangenheit
- DE: `gegraben`
- CS CURRENT: `Kopat`

### Findings

NONE
---

## 025 — `verb-24`

**DE lemma**
`greifen`

**Forms (production CURRENT)**

### infinitiv
- DE: `greifen`
- CS CURRENT: `Chytit`

### praesens
- DE: `er greift`
- CS CURRENT: `Chytá`

### imperfektIndikativ
- DE: `er griff`
- CS CURRENT: `Chytil`

### imperfektKonjunktiv
- DE: `er griffe`
- CS CURRENT: `Chytil by se`

### partizipVergangenheit
- DE: `gegriffen`
- CS CURRENT: `Chytil / chytil`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad neoprávněně přidává zvratné se.
- Proposed replacement: Chytil by
- Audit CURRENT: Chytil by se
- Production CURRENT: Chytil by se
- DE (context): er griffe
- LV reference: viņš ķertu

---

## 026 — `verb-25`

**DE lemma**
`hauen`

**Forms (production CURRENT)**

### infinitiv
- DE: `hauen`
- CS CURRENT: `Řezat`

### praesens
- DE: `er haut`
- CS CURRENT: `Vybral`

### imperfektIndikativ
- DE: `er hieb`
- CS CURRENT: `Vyštěkl`

### imperfektKonjunktiv
- DE: `er hiebe`
- CS CURRENT: `Vyřezal by`

### partizipVergangenheit
- DE: `gehauen`
- CS CURRENT: `Vyřezávané`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Řezat znamená schneiden; hauen zde znamená sekat nebo udeřit.
- Proposed replacement: Sekat
- Audit CURRENT: Řezat
- Production CURRENT: Řezat
- DE (context): hauen
- LV reference: cirst

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Vybral znamená zvolil; haut znamená seká nebo udeřuje.
- Proposed replacement: Seká
- Audit CURRENT: Vybral
- Production CURRENT: Vybral
- DE (context): er haut
- LV reference: viņš cērt

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Vyštěkl znamená řekl ostře nebo zaštěkal; hieb znamená udeřil či sekal.
- Proposed replacement: Udeřil
- Audit CURRENT: Vyštěkl
- Production CURRENT: Vyštěkl
- DE (context): er hieb
- LV reference: viņš cirta

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Vyřezal by znamená vyřezal; hiebe je kondicionál udeřit nebo sekat.
- Proposed replacement: Udeřil by
- Audit CURRENT: Vyřezal by
- Production CURRENT: Vyřezal by
- DE (context): er hiebe
- LV reference: viņš cirstu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Vyřezávané znamená carved; gehauen znamená sekané nebo udeřené.
- Proposed replacement: Sekané
- Audit CURRENT: Vyřezávané
- Production CURRENT: Vyřezávané
- DE (context): gehauen
- LV reference: cirsts

---

## 027 — `verb-26`

**DE lemma**
`heben`

**Forms (production CURRENT)**

### infinitiv
- DE: `heben`
- CS CURRENT: `Zvýšit`

### praesens
- DE: `er hebt`
- CS CURRENT: `Zvedá`

### imperfektIndikativ
- DE: `er hob`
- CS CURRENT: `Přinesl`

### imperfektKonjunktiv
- DE: `er höbe`
- CS CURRENT: `Postavil by`

### partizipVergangenheit
- DE: `gehoben`
- CS CURRENT: `Postavený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Přinesl znamená brought; hob je minulý čas zvednout.
- Proposed replacement: Zvedl
- Audit CURRENT: Přinesl
- Production CURRENT: Přinesl
- DE (context): er hob
- LV reference: viņš cēla

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Postavil by znamená erected; höbe znamená zvedl by.
- Proposed replacement: Zvedl by
- Audit CURRENT: Postavil by
- Production CURRENT: Postavil by
- DE (context): er höbe
- LV reference: viņš celtu

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Postavený znamená erected; gehoben znamená zvednutý.
- Proposed replacement: Zvednutý
- Audit CURRENT: Postavený
- Production CURRENT: Postavený
- DE (context): gehoben
- LV reference: celts

---

## 028 — `verb-27`

**DE lemma**
`kennen`

**Forms (production CURRENT)**

### infinitiv
- DE: `kennen`
- CS CURRENT: `Vědět / vědět`

### praesens
- DE: `er kennt`
- CS CURRENT: `Ví`

### imperfektIndikativ
- DE: `kannte`
- CS CURRENT: `Věděl`

### imperfektKonjunktiv
- DE: `kannte`
- CS CURRENT: `Věděl`

### partizipVergangenheit
- DE: `gekannt`
- CS CURRENT: `Známost`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Kennen znamená znát; vědět odpovídá německému wissen. Překlad je navíc duplicitní.
- Proposed replacement: Znát
- Audit CURRENT: Vědět / vědět
- Production CURRENT: Vědět / vědět
- DE (context): kennen
- LV reference: pazīt / zināt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Ví znamená weiß; kennt znamená zná.
- Proposed replacement: Zná
- Audit CURRENT: Ví
- Production CURRENT: Ví
- DE (context): er kennt
- LV reference: viņš pazīst

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Věděl odpovídá wissen; kante je minulý čas znát.
- Proposed replacement: Znal
- Audit CURRENT: Věděl
- Production CURRENT: Věděl
- DE (context): kannte
- LV reference: pazina

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Tvar neodpovídá významu kennen ani podmiňovacímu způsobu.
- Proposed replacement: Znal by
- Audit CURRENT: Věděl
- Production CURRENT: Věděl
- DE (context): kannte
- LV reference: pazina

#### Finding 5
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Známost je podstatné jméno; gekannt znamená znal nebo poznal.
- Proposed replacement: Znal
- Audit CURRENT: Známost
- Production CURRENT: Známost
- DE (context): gekannt
- LV reference: pazinis

---

## 029 — `verb-28`

**DE lemma**
`klingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `klingen`
- CS CURRENT: `Zaznít`

### praesens
- DE: `er klingt`
- CS CURRENT: `Zní`

### imperfektIndikativ
- DE: `er klang`
- CS CURRENT: `Ozval se`

### imperfektKonjunktiv
- DE: `er klänge`
- CS CURRENT: `Ozval by se`

### partizipVergangenheit
- DE: `geklungen`
- CS CURRENT: `Zaznělo`

### Findings

#### Finding 1
- Severity: LOW
- Type: ASPECT
- Source: Luna
- Form/Field: infinitiv
- Issue: Zaznít je dokonavé a znamená začít znít; obecné klingen odpovídá znít.
- Proposed replacement: Znít
- Audit CURRENT: Zaznít
- Production CURRENT: Zaznít
- DE (context): klingen
- LV reference: skanēt

---

## 030 — `verb-29`

**DE lemma**
`kneifen`

**Forms (production CURRENT)**

### infinitiv
- DE: `kneifen`
- CS CURRENT: `Štípnout`

### praesens
- DE: `er kneift`
- CS CURRENT: `Vtipkuje`

### imperfektIndikativ
- DE: `er kniff`
- CS CURRENT: `Štípl`

### imperfektKonjunktiv
- DE: `er kniffe`
- CS CURRENT: `Štípl by se`

### partizipVergangenheit
- DE: `gekniffen`
- CS CURRENT: `Sevřený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Vtipkuje znamená žertuje; kneifen znamená štípat nebo svírat.
- Proposed replacement: Štípe
- Audit CURRENT: Vtipkuje
- Production CURRENT: Vtipkuje
- DE (context): er kneift
- LV reference: viņš kniebj

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad neoprávněně přidává zvratné se.
- Proposed replacement: Štípl by
- Audit CURRENT: Štípl by se
- Production CURRENT: Štípl by se
- DE (context): er kniffe
- LV reference: viņš kniebtu

#### Finding 3
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Sevřený znamená clenched; gekniffen zde znamená štípnutý.
- Proposed replacement: Štípnutý
- Audit CURRENT: Sevřený
- Production CURRENT: Sevřený
- DE (context): gekniffen
- LV reference: kniebts

---

## 031 — `verb-30`

**DE lemma**
`bleiben`

**Forms (production CURRENT)**

### infinitiv
- DE: `bleiben`
- CS CURRENT: `Pobyt`

### praesens
- DE: `er bleibt`
- CS CURRENT: `On zůstává`

### imperfektIndikativ
- DE: `er blieb`
- CS CURRENT: `Zůstal`

### imperfektKonjunktiv
- DE: `er bliebe`
- CS CURRENT: `Zůstal by`

### partizipVergangenheit
- DE: `geblieben (er ist)`
- CS CURRENT: `Vlevo`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Pobyt je podstatné jméno; německý výraz je infinitiv.
- Proposed replacement: Zůstat
- Audit CURRENT: Pobyt
- Production CURRENT: Pobyt
- DE (context): bleiben
- LV reference: palikt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Vlevo znamená left jako směr; geblieben znamená zůstal nebo zůstavší.
- Proposed replacement: Zůstal
- Audit CURRENT: Vlevo
- Production CURRENT: Vlevo
- DE (context): geblieben (er ist)
- LV reference: palicis

---

## 032 — `verb-31`

**DE lemma**
`bleichen`

**Forms (production CURRENT)**

### infinitiv
- DE: `bleichen`
- CS CURRENT: `Vybělit`

### praesens
- DE: `er bleicht`
- CS CURRENT: `On bělí`

### imperfektIndikativ
- DE: `blich`
- CS CURRENT: `Vybělené`

### imperfektKonjunktiv
- DE: `blich`
- CS CURRENT: `Vybělené`

### partizipVergangenheit
- DE: `geblichen`
- CS CURRENT: `Vybělené`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Vybělené je přídavné jméno, nikoli minulý čas; blich znamená vybledl.
- Proposed replacement: Vybledl
- Audit CURRENT: Vybělené
- Production CURRENT: Vybělené
- DE (context): blich
- LV reference: balināja

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí podmiňovací způsob a současný překlad není slovesný minulý tvar.
- Proposed replacement: Vybledl by
- Audit CURRENT: Vybělené
- Production CURRENT: Vybělené
- DE (context): blich
- LV reference: balināja

#### Finding 3
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Geblichen znamená vybledlý; vybělené označuje úmyslné bělení.
- Proposed replacement: Vybledlý
- Audit CURRENT: Vybělené
- Production CURRENT: Vybělené
- DE (context): geblichen
- LV reference: balināts

---

## 033 — `verb-32`

**DE lemma**
`braten`

**Forms (production CURRENT)**

### infinitiv
- DE: `braten`
- CS CURRENT: `Upéct`

### praesens
- DE: `er brät`
- CS CURRENT: `On peče`

### imperfektIndikativ
- DE: `er briet`
- CS CURRENT: `Pekl`

### imperfektKonjunktiv
- DE: `er briete`
- CS CURRENT: `Upekl by`

### partizipVergangenheit
- DE: `gebraten`
- CS CURRENT: `Smažené / pečené`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Braten označuje smažení nebo pečení na tuku; upéct posouvá význam k pečení.
- Proposed replacement: Smažit
- Audit CURRENT: Upéct
- Production CURRENT: Upéct
- DE (context): braten
- LV reference: cept

---

## 034 — `verb-33`

**DE lemma**
`brechen`

**Forms (production CURRENT)**

### infinitiv
- DE: `brechen`
- CS CURRENT: `Zlomit se`

### praesens
- DE: `er bricht`
- CS CURRENT: `Zlomí se`

### imperfektIndikativ
- DE: `er brach`
- CS CURRENT: `Zlomil se`

### imperfektKonjunktiv
- DE: `er bräche`
- CS CURRENT: `Zlomil by se`

### partizipVergangenheit
- DE: `gebrochen`
- CS CURRENT: `Zlomený / zlomený`

### Findings

#### Finding 1
- Severity: LOW
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Význam je správný, ale překlad je omylem dvakrát identický.
- Proposed replacement: Zlomený
- Audit CURRENT: Zlomený / zlomený
- Production CURRENT: Zlomený / zlomený
- DE (context): gebrochen
- LV reference: lauzts / salauzts

---

## 035 — `verb-34`

**DE lemma**
`brennen`

**Forms (production CURRENT)**

### infinitiv
- DE: `brennen`
- CS CURRENT: `Spálit`

### praesens
- DE: `er brennt`
- CS CURRENT: `Je v plamenech`

### imperfektIndikativ
- DE: `brannte`
- CS CURRENT: `Hořel`

### imperfektKonjunktiv
- DE: `brannte`
- CS CURRENT: `Hořel`

### partizipVergangenheit
- DE: `gebrannt`
- CS CURRENT: `Spálený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Spálit je tranzitivní a dokonavé; brennen zde znamená hořet.
- Proposed replacement: Hořet
- Audit CURRENT: Spálit
- Production CURRENT: Spálit
- DE (context): brennen
- LV reference: degt

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný překlad je indikativ bez podmiňovacího způsobu.
- Proposed replacement: Hořel by
- Audit CURRENT: Hořel
- Production CURRENT: Hořel
- DE (context): brannte
- LV reference: dega

---

## 036 — `verb-35`

**DE lemma**
`bringen`

**Forms (production CURRENT)**

### infinitiv
- DE: `bringen`
- CS CURRENT: `Nést`

### praesens
- DE: `er bringt`
- CS CURRENT: `On nese`

### imperfektIndikativ
- DE: `er brachte`
- CS CURRENT: `Nesl`

### imperfektKonjunktiv
- DE: `er brächte`
- CS CURRENT: `Nesl by`

### partizipVergangenheit
- DE: `gebracht`
- CS CURRENT: `Přinesl / přinesl`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Nést znamená tragen; bringen znamená přinést.
- Proposed replacement: Přinést
- Audit CURRENT: Nést
- Production CURRENT: Nést
- DE (context): bringen
- LV reference: nest

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: On nese znamená carries; bringt znamená přináší nebo přináší s sebou.
- Proposed replacement: Přináší
- Audit CURRENT: On nese
- Production CURRENT: On nese
- DE (context): er bringt
- LV reference: viņš nes

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Nesl odpovídá tragen; brachte je minulý čas přinést.
- Proposed replacement: Přinesl
- Audit CURRENT: Nesl
- Production CURRENT: Nesl
- DE (context): er brachte
- LV reference: viņš nesa

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Nesl by znamená carried; brächte znamená přinesl by.
- Proposed replacement: Přinesl by
- Audit CURRENT: Nesl by
- Production CURRENT: Nesl by
- DE (context): er brächte
- LV reference: viņš nestu

#### Finding 5
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Přinesl je minulý čas a překlad je navíc duplicitní; gebracht je příčestí.
- Proposed replacement: Přinesený
- Audit CURRENT: Přinesl / přinesl
- Production CURRENT: Přinesl / přinesl
- DE (context): gebracht
- LV reference: nests / atnests

---

## 037 — `verb-36`

**DE lemma**
`denken`

**Forms (production CURRENT)**

### infinitiv
- DE: `denken`
- CS CURRENT: `Přemýšlet`

### praesens
- DE: `er denkt`
- CS CURRENT: `Myslí si`

### imperfektIndikativ
- DE: `er dachte`
- CS CURRENT: `Pomyslel si`

### imperfektKonjunktiv
- DE: `er dächte`
- CS CURRENT: `Myslel by si`

### partizipVergangenheit
- DE: `gedacht`
- CS CURRENT: `Zamýšlený`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Zamýšlený znamená intended; jako slovesný tvar je vhodné myslel.
- Proposed replacement: Myslel
- Audit CURRENT: Zamýšlený
- Production CURRENT: Zamýšlený
- DE (context): gedacht
- LV reference: domāts

---

## 038 — `verb-37`

**DE lemma**
`dingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `dingen`
- CS CURRENT: `Najmout / dohodnout se`

### praesens
- DE: `er dingt`
- CS CURRENT: `Najímá`

### imperfektIndikativ
- DE: `dingte`
- CS CURRENT: `Najal`

### imperfektKonjunktiv
- DE: `dingte`
- CS CURRENT: `Najal`

### partizipVergangenheit
- DE: `gedungen`
- CS CURRENT: `Najal`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný překlad je indikativ minulý; německý tvar je konjunktiv.
- Proposed replacement: Najal by
- Audit CURRENT: Najal
- Production CURRENT: Najal
- DE (context): dingte
- LV reference: nolīga

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Najal je minulý čas; gedungen je příčestí najatý nebo najmutý.
- Proposed replacement: Najmutý
- Audit CURRENT: Najal
- Production CURRENT: Najal
- DE (context): gedungen
- LV reference: nolīgts

---

## 039 — `verb-38`

**DE lemma**
`dreschen`

**Forms (production CURRENT)**

### infinitiv
- DE: `dreschen`
- CS CURRENT: `Kult`

### praesens
- DE: `er drischt`
- CS CURRENT: `Mlátí`

### imperfektIndikativ
- DE: `er drasch / er drosch`
- CS CURRENT: `Mlátil`

### imperfektKonjunktiv
- DE: `er dräsche / er drösche`
- CS CURRENT: `Uctíval by`

### partizipVergangenheit
- DE: `gedroschen`
- CS CURRENT: `Kult`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Kult je podstatné jméno; dreschen je infinitiv mlátit nebo cepovat.
- Proposed replacement: Mlátit
- Audit CURRENT: Kult
- Production CURRENT: Kult
- DE (context): dreschen
- LV reference: kult

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Uctíval by znamená revered; německý tvar znamená mlátil by nebo cepoval by.
- Proposed replacement: Mlátil by
- Audit CURRENT: Uctíval by
- Production CURRENT: Uctíval by
- DE (context): er dräsche / er drösche
- LV reference: viņš kultu

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Kult je podstatné jméno; příčestí je vymlácený nebo vymláceno.
- Proposed replacement: Vymlácený
- Audit CURRENT: Kult
- Production CURRENT: Kult
- DE (context): gedroschen
- LV reference: kults

---

## 040 — `verb-39`

**DE lemma**
`dringen`

**Forms (production CURRENT)**

### infinitiv
- DE: `dringen`
- CS CURRENT: `Vtrhnout do`

### praesens
- DE: `er dringt`
- CS CURRENT: `Vtrhne dovnitř`

### imperfektIndikativ
- DE: `er drang`
- CS CURRENT: `Vloupal se dovnitř`

### imperfektKonjunktiv
- DE: `er dränge`
- CS CURRENT: `Vloupal by se dovnitř`

### partizipVergangenheit
- DE: `gedrungen (er ist)`
- CS CURRENT: `Vnikl do`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: praesens
- Issue: Vtrhne je dokonavý budoucí nebo jednorázový děj; dringt je přítomný nedokonavý tvar.
- Proposed replacement: Vniká dovnitř
- Audit CURRENT: Vtrhne dovnitř
- Production CURRENT: Vtrhne dovnitř
- DE (context): er dringt
- LV reference: viņš ielaužas

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Vloupal se přidává význam krádeže; drang znamená vnikl nebo pronikl.
- Proposed replacement: Vnikl dovnitř
- Audit CURRENT: Vloupal se dovnitř
- Production CURRENT: Vloupal se dovnitř
- DE (context): er drang
- LV reference: viņš ielauzās

#### Finding 3
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Vloupal by se přidává význam vloupání; německý tvar znamená vnikl by.
- Proposed replacement: Vnikl by dovnitř
- Audit CURRENT: Vloupal by se dovnitř
- Production CURRENT: Vloupal by se dovnitř
- DE (context): er dränge
- LV reference: viņš ielauztos

---

## 041 — `verb-40`

**DE lemma**
`dünken`

**Forms (production CURRENT)**

### infinitiv
- DE: `dünken`
- CS CURRENT: `Zdá se`

### praesens
- DE: `es dünkt`
- CS CURRENT: `Zdá se`

### imperfektIndikativ
- DE: `deuchte`
- CS CURRENT: `Zdálo se`

### imperfektKonjunktiv
- DE: `deuchte`
- CS CURRENT: `Zdálo se`

### partizipVergangenheit
- DE: `gedünkt`
- CS CURRENT: `Zdálo se`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Německý konjunktiv vyžaduje český kondicionál; současný text je indikativ.
- Proposed replacement: Zdálo by se
- Audit CURRENT: Zdálo se
- Production CURRENT: Zdálo se
- DE (context): deuchte
- LV reference: šķita

---

## 042 — `verb-41`

**DE lemma**
`dürfen`

**Forms (production CURRENT)**

### infinitiv
- DE: `dürfen`
- CS CURRENT: `Být dovoleno`

### praesens
- DE: `er darf`
- CS CURRENT: `Může`

### imperfektIndikativ
- DE: `durfte`
- CS CURRENT: `Bylo povoleno`

### imperfektKonjunktiv
- DE: `durfte`
- CS CURRENT: `Bylo povoleno`

### partizipVergangenheit
- DE: `gedurft`
- CS CURRENT: `Povoleno`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Může vyjadřuje obecnou možnost nebo schopnost; darf znamená smí nebo má dovoleno.
- Proposed replacement: Smí
- Audit CURRENT: Může
- Production CURRENT: Může
- DE (context): er darf
- LV reference: viņš drīkst

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný překlad je indikativ; německý tvar je uveden jako konjunktiv.
- Proposed replacement: Bylo by dovoleno
- Audit CURRENT: Bylo povoleno
- Production CURRENT: Bylo povoleno
- DE (context): durfte
- LV reference: drīkstēja

---

## 043 — `verb-42`

**DE lemma**
`empfehlen`

**Forms (production CURRENT)**

### infinitiv
- DE: `empfehlen`
- CS CURRENT: `Doporučit`

### praesens
- DE: `er empfiehlt`
- CS CURRENT: `Navrhuje`

### imperfektIndikativ
- DE: `er empfahl`
- CS CURRENT: `Navrhl`

### imperfektKonjunktiv
- DE: `er empfähle / er empföhle`
- CS CURRENT: `By doporučil`

### partizipVergangenheit
- DE: `empfohlen`
- CS CURRENT: `Doporučeno`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Navrhuje znamená proposes; empfiehlt znamená doporučuje.
- Proposed replacement: Doporučuje
- Audit CURRENT: Navrhuje
- Production CURRENT: Navrhuje
- DE (context): er empfiehlt
- LV reference: viņš iesaka

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Navrhl znamená navrhl; empfahl znamená doporučil.
- Proposed replacement: Doporučil
- Audit CURRENT: Navrhl
- Production CURRENT: Navrhl
- DE (context): er empfahl
- LV reference: viņš ieteica

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí přirozená česká kondicionálová konstrukce s příslušným slovosledem.
- Proposed replacement: Doporučil by
- Audit CURRENT: By doporučil
- Production CURRENT: By doporučil
- DE (context): er empfähle / er empföhle
- LV reference: viņš ieteiktu

---

## 044 — `verb-43`

**DE lemma**
`empfinden`

**Forms (production CURRENT)**

### infinitiv
- DE: `empfinden`
- CS CURRENT: `Cítit`

### praesens
- DE: `er empfindet`
- CS CURRENT: `Cítí`

### imperfektIndikativ
- DE: `er empfand`
- CS CURRENT: `Cítil`

### imperfektKonjunktiv
- DE: `er empfände`
- CS CURRENT: `Cítil by se`

### partizipVergangenheit
- DE: `empfunden`
- CS CURRENT: `Plstěný`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad neoprávněně přidává zvratné se a mění význam pociťování.
- Proposed replacement: Cítil by
- Audit CURRENT: Cítil by se
- Production CURRENT: Cítil by se
- DE (context): er empfände
- LV reference: viņš sajustu

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Plstěný znamená vyrobený z plsti; empfunden znamená pociťovaný nebo vnímaný.
- Proposed replacement: Pociťovaný
- Audit CURRENT: Plstěný
- Production CURRENT: Plstěný
- DE (context): empfunden
- LV reference: sajusts

---

## 045 — `verb-44`

**DE lemma**
`erlöschen`

**Forms (production CURRENT)**

### infinitiv
- DE: `erlöschen`
- CS CURRENT: `Zhasne`

### praesens
- DE: `er erlischt`
- CS CURRENT: `Jde ven`

### imperfektIndikativ
- DE: `er erlosch`
- CS CURRENT: `Vyšel ven`

### imperfektKonjunktiv
- DE: `er erlösche`
- CS CURRENT: `Zmizel by`

### partizipVergangenheit
- DE: `erloschen (er ist)`
- CS CURRENT: `Vyhasl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Zhasne je časovaný tvar; německý výraz je infinitiv.
- Proposed replacement: Zhasnout
- Audit CURRENT: Zhasne
- Production CURRENT: Zhasne
- DE (context): erlöschen
- LV reference: izdzist

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Jde ven znamená odchází; erlischt znamená zhasíná nebo vyhasíná.
- Proposed replacement: Zhasíná
- Audit CURRENT: Jde ven
- Production CURRENT: Jde ven
- DE (context): er erlischt
- LV reference: viņš izdziest

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Vyšel ven znamená odešel; erlosch znamená zhasl nebo vyhasl.
- Proposed replacement: Zhasl
- Audit CURRENT: Vyšel ven
- Production CURRENT: Vyšel ven
- DE (context): er erlosch
- LV reference: viņš izdzisa

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Zmizel by znamená disappeared; konjunktiv erlöschen znamená zhasl by.
- Proposed replacement: Zhasl by
- Audit CURRENT: Zmizel by
- Production CURRENT: Zmizel by
- DE (context): er erlösche
- LV reference: viņš izdzistu

---

## 046 — `verb-45`

**DE lemma**
`erschrecken`

**Forms (production CURRENT)**

### infinitiv
- DE: `erschrecken`
- CS CURRENT: `Zmást`

### praesens
- DE: `er erschrickt`
- CS CURRENT: `Dostane strach`

### imperfektIndikativ
- DE: `er erschrak`
- CS CURRENT: `Dostal strach`

### imperfektKonjunktiv
- DE: `er erschräke`
- CS CURRENT: `Zbláznil by se`

### partizipVergangenheit
- DE: `erschrocken (er ist)`
- CS CURRENT: `Vyděšený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Zmást znamená confuse; erschrecken v tomto významu znamená leknout se.
- Proposed replacement: Lekt se
- Audit CURRENT: Zmást
- Production CURRENT: Zmást
- DE (context): erschrecken
- LV reference: sabīties

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Zbláznil by se znamená went crazy; erschräke znamená lekl by se.
- Proposed replacement: Lekl by se
- Audit CURRENT: Zbláznil by se
- Production CURRENT: Zbláznil by se
- DE (context): er erschräke
- LV reference: viņš sabītos

---

## 047 — `verb-46`

**DE lemma**
`essen`

**Forms (production CURRENT)**

### infinitiv
- DE: `essen`
- CS CURRENT: `Jíst`

### praesens
- DE: `er isst`
- CS CURRENT: `On jí`

### imperfektIndikativ
- DE: `er ass`
- CS CURRENT: `Jedl`

### imperfektKonjunktiv
- DE: `er äße`
- CS CURRENT: `Jedl by`

### partizipVergangenheit
- DE: `gegessen`
- CS CURRENT: `Sněden / sněden`

### Findings

#### Finding 1
- Severity: LOW
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Překlad je duplicitní a současný tvar je méně přirozený než příčestí snědený.
- Proposed replacement: Snědený
- Audit CURRENT: Sněden / sněden
- Production CURRENT: Sněden / sněden
- DE (context): gegessen
- LV reference: ēsts / apēsts

---

## 048 — `verb-47`

**DE lemma**
`fahren`

**Forms (production CURRENT)**

### infinitiv
- DE: `fahren`
- CS CURRENT: `Řídit`

### praesens
- DE: `er fährt`
- CS CURRENT: `On řídí`

### imperfektIndikativ
- DE: `er fuhr`
- CS CURRENT: `Řídil`

### imperfektKonjunktiv
- DE: `er führe`
- CS CURRENT: `Řídil by`

### partizipVergangenheit
- DE: `gefahren (er ist)`
- CS CURRENT: `Jel / odešel`

### Findings

#### Finding 1
- Severity: LOW
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Řídil znamená ovládal vozidlo; fuhr obecně znamená jel nebo cestoval.
- Proposed replacement: Jel
- Audit CURRENT: Řídil
- Production CURRENT: Řídil
- DE (context): er fuhr
- LV reference: viņš brauca

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Odešel se používá pro pěší odchod; gefahren odpovídá jízdě, případně odjel.
- Proposed replacement: Jel / odjel
- Audit CURRENT: Jel / odešel
- Production CURRENT: Jel / odešel
- DE (context): gefahren (er ist)
- LV reference: braucis / aizbraucis

---

## 049 — `verb-48`

**DE lemma**
`fallen`

**Forms (production CURRENT)**

### infinitiv
- DE: `fallen`
- CS CURRENT: `Padat`

### praesens
- DE: `er fällt`
- CS CURRENT: `On padá`

### imperfektIndikativ
- DE: `er fiel`
- CS CURRENT: `Spadl`

### imperfektKonjunktiv
- DE: `er fiele`
- CS CURRENT: `Spadl by`

### partizipVergangenheit
- DE: `gefallen (er ist)`
- CS CURRENT: `Spadl`

### Findings

NONE
---

## 050 — `verb-49`

**DE lemma**
`fangen`

**Forms (production CURRENT)**

### infinitiv
- DE: `fangen`
- CS CURRENT: `Chytit`

### praesens
- DE: `er fängt`
- CS CURRENT: `Chytá`

### imperfektIndikativ
- DE: `er fing`
- CS CURRENT: `Chytil`

### imperfektKonjunktiv
- DE: `er finge`
- CS CURRENT: `Chytil by se`

### partizipVergangenheit
- DE: `gefangen`
- CS CURRENT: `Chycený / chycený`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad neoprávněně přidává zvratné se.
- Proposed replacement: Chytil by
- Audit CURRENT: Chytil by se
- Production CURRENT: Chytil by se
- DE (context): er finge
- LV reference: viņš ķertu

#### Finding 2
- Severity: LOW
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Význam je správný, ale překlad je omylem dvakrát identický.
- Proposed replacement: Chycený
- Audit CURRENT: Chycený / chycený
- Production CURRENT: Chycený / chycený
- DE (context): gefangen
- LV reference: ķerts / noķerts

---

## 051 — `verb-50`

**DE lemma**
`finden`

**Forms (production CURRENT)**

### infinitiv
- DE: `finden`
- CS CURRENT: `Najít`

### praesens
- DE: `er findet`
- CS CURRENT: `Najde`

### imperfektIndikativ
- DE: `er fand`
- CS CURRENT: `Našel`

### imperfektKonjunktiv
- DE: `er fände`
- CS CURRENT: `Našel by`

### partizipVergangenheit
- DE: `gefunden`
- CS CURRENT: `Nalezeno`

### Findings

NONE
---

## 052 — `verb-51`

**DE lemma**
`fliegen`

**Forms (production CURRENT)**

### infinitiv
- DE: `fliegen`
- CS CURRENT: `Pustit`

### praesens
- DE: `er fliegt`
- CS CURRENT: `On létá`

### imperfektIndikativ
- DE: `er flog`
- CS CURRENT: `Letěl`

### imperfektKonjunktiv
- DE: `er flöge`
- CS CURRENT: `Létal by`

### partizipVergangenheit
- DE: `geflogen (er ist)`
- CS CURRENT: `Letěl`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Pustit“ znamená uvolnit nebo vypustit; německé fliegen znamená létat.
- Proposed replacement: Létat
- Audit CURRENT: Pustit
- Production CURRENT: Pustit
- DE (context): fliegen
- LV reference: laisties

---

## 053 — `verb-52`

**DE lemma**
`fliehen`

**Forms (production CURRENT)**

### infinitiv
- DE: `fliehen`
- CS CURRENT: `Utéci`

### praesens
- DE: `er flieht`
- CS CURRENT: `Utíká pryč`

### imperfektIndikativ
- DE: `er floh`
- CS CURRENT: `Utekl`

### imperfektKonjunktiv
- DE: `er flöhe`
- CS CURRENT: `Utekl by`

### partizipVergangenheit
- DE: `geflohen (er ist)`
- CS CURRENT: `Utekl`

### Findings

NONE
---

## 054 — `verb-53`

**DE lemma**
`fließen`

**Forms (production CURRENT)**

### infinitiv
- DE: `fließen`
- CS CURRENT: `Proudit`

### praesens
- DE: `er fließt`
- CS CURRENT: `Běží`

### imperfektIndikativ
- DE: `er floss`
- CS CURRENT: `Běžel`

### imperfektKonjunktiv
- DE: `er flösse`
- CS CURRENT: `Běžel by`

### partizipVergangenheit
- DE: `geflossen (er ist)`
- CS CURRENT: `Prošel`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: U kapaliny nebo toku se používá „téct“, nikoli „běžet“.
- Proposed replacement: Teče
- Audit CURRENT: Běží
- Production CURRENT: Běží
- DE (context): er fließt
- LV reference: viņš tek

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Běžel“ označuje běh; německé floss znamená „tekl“.
- Proposed replacement: Tekl
- Audit CURRENT: Běžel
- Production CURRENT: Běžel
- DE (context): er floss
- LV reference: viņš tecēja

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktiv slovesa fließen znamená „tekl by“, ne „běžel by“.
- Proposed replacement: Tekl by
- Audit CURRENT: Běžel by
- Production CURRENT: Běžel by
- DE (context): er flösse
- LV reference: viņš tecētu

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Prošel“ znamená prošel; příčestí od fließen je „tekl“ nebo „protekl“.
- Proposed replacement: Tekl
- Audit CURRENT: Prošel
- Production CURRENT: Prošel
- DE (context): geflossen (er ist)
- LV reference: tecējis

---

## 055 — `verb-54`

**DE lemma**
`fressen`

**Forms (production CURRENT)**

### infinitiv
- DE: `fressen`
- CS CURRENT: `Jíst zítra`

### praesens
- DE: `er frisst`
- CS CURRENT: `Jí / polyká`

### imperfektIndikativ
- DE: `er frass`
- CS CURRENT: `Snědl / spolkl`

### imperfektKonjunktiv
- DE: `er fräße`
- CS CURRENT: `Jedl/snídal`

### partizipVergangenheit
- DE: `gefressen`
- CS CURRENT: `Sněden/ráno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Zítra“ je chybný přidaný význam. Fressen u zvířat znamená „žrát“.
- Proposed replacement: Žrát
- Audit CURRENT: Jíst zítra
- Production CURRENT: Jíst zítra
- DE (context): fressen
- LV reference: ēst, rīt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Snídal“ znamená breakfast; fräße je podmiňovací tvar od „žrát“.
- Proposed replacement: Žral by
- Audit CURRENT: Jedl/snídal
- Production CURRENT: Jedl/snídal
- DE (context): er fräße
- LV reference: viņš ēstu / rītu

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Ráno“ je chybný význam; gefressen znamená „sežrán“ nebo „sežral“.
- Proposed replacement: Sežrán
- Audit CURRENT: Sněden/ráno
- Production CURRENT: Sněden/ráno
- DE (context): gefressen
- LV reference: apēsts / rīts

---

## 056 — `verb-55`

**DE lemma**
`frieren`

**Forms (production CURRENT)**

### infinitiv
- DE: `frieren`
- CS CURRENT: `Studený`

### praesens
- DE: `er friert`
- CS CURRENT: `Mrzne`

### imperfektIndikativ
- DE: `er fror`
- CS CURRENT: `On ostrov`

### imperfektKonjunktiv
- DE: `er fröre`
- CS CURRENT: `Mrzl`

### partizipVergangenheit
- DE: `gefroren`
- CS CURRENT: `Ostrov`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Studený“ je přídavné jméno; frieren je sloveso „mrznout“ nebo „být zmrzlý“.
- Proposed replacement: Mrznout
- Audit CURRENT: Studený
- Production CURRENT: Studený
- DE (context): frieren
- LV reference: salt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Text obsahuje nesouvisející slovo „ostrov“; správně je „mrzl“.
- Proposed replacement: Mrzl
- Audit CURRENT: On ostrov
- Production CURRENT: On ostrov
- DE (context): er fror
- LV reference: viņš sala

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí podmiňovací částice „by“ pro překlad německého Konjunktivu II.
- Proposed replacement: Mrzl by
- Audit CURRENT: Mrzl
- Production CURRENT: Mrzl
- DE (context): er fröre
- LV reference: viņš saltu

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Ostrov“ je zcela nesouvisející význam; gefroren znamená „zmrzlý“.
- Proposed replacement: Zmrzlý
- Audit CURRENT: Ostrov
- Production CURRENT: Ostrov
- DE (context): gefroren
- LV reference: salis

---

## 057 — `verb-56`

**DE lemma**
`geben`

**Forms (production CURRENT)**

### infinitiv
- DE: `geben`
- CS CURRENT: `Dát`

### praesens
- DE: `er gibt`
- CS CURRENT: `On dává`

### imperfektIndikativ
- DE: `er gab`
- CS CURRENT: `Dal`

### imperfektKonjunktiv
- DE: `er gäbe`
- CS CURRENT: `Dal by`

### partizipVergangenheit
- DE: `gegeben`
- CS CURRENT: `Daný`

### Findings

NONE
---

## 058 — `verb-57`

**DE lemma**
`gedeihen`

**Forms (production CURRENT)**

### infinitiv
- DE: `gedeihen`
- CS CURRENT: `Uspět`

### praesens
- DE: `er gedeiht`
- CS CURRENT: `Daří se mu to`

### imperfektIndikativ
- DE: `er gedieh`
- CS CURRENT: `Se mu to povedlo`

### imperfektKonjunktiv
- DE: `er gediehe`
- CS CURRENT: `Uspěl by`

### partizipVergangenheit
- DE: `gediehen (er ist)`
- CS CURRENT: `Podařilo`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Gedeihen znamená prospívat nebo dařit se, ne uspět v jednorázovém úkolu.
- Proposed replacement: Dařit se
- Audit CURRENT: Uspět
- Production CURRENT: Uspět
- DE (context): gedeihen
- LV reference: izdoties

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Povedlo se mu“ znamená uspěl; gedieh vyjadřuje prospívání nebo dobrý růst.
- Proposed replacement: Dařilo se mu
- Audit CURRENT: Se mu to povedlo
- Production CURRENT: Se mu to povedlo
- DE (context): er gedieh
- LV reference: viņam izdevās

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktiv od gedeihen vyjadřuje prospívání, nikoli jednorázový úspěch.
- Proposed replacement: Dařilo by se mu
- Audit CURRENT: Uspěl by
- Production CURRENT: Uspěl by
- DE (context): er gediehe
- LV reference: viņam izdotos

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Podařilo“ znamená povedlo se; gediehen znamená prospíval nebo dařilo se.
- Proposed replacement: Dařilo se mu
- Audit CURRENT: Podařilo
- Production CURRENT: Podařilo
- DE (context): gediehen (er ist)
- LV reference: izdevies

---

## 059 — `verb-58`

**DE lemma**
`gehen`

**Forms (production CURRENT)**

### infinitiv
- DE: `gehen`
- CS CURRENT: `Jít`

### praesens
- DE: `er geht`
- CS CURRENT: `On jde`

### imperfektIndikativ
- DE: `er ging`
- CS CURRENT: `Chodil`

### imperfektKonjunktiv
- DE: `er ginge`
- CS CURRENT: `Šel by`

### partizipVergangenheit
- DE: `gegangen (er ist)`
- CS CURRENT: `Šel`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Chodil“ vyjadřuje opakovaný děj; německé ging zde znamená jednorázově „šel“.
- Proposed replacement: Šel
- Audit CURRENT: Chodil
- Production CURRENT: Chodil
- DE (context): er ging
- LV reference: viņš gāja

---

## 060 — `verb-59`

**DE lemma**
`gewinnen`

**Forms (production CURRENT)**

### infinitiv
- DE: `gewinnen`
- CS CURRENT: `Získat`

### praesens
- DE: `er gewinnt`
- CS CURRENT: `Dostane`

### imperfektIndikativ
- DE: `er gewann`
- CS CURRENT: `Dostal`

### imperfektKonjunktiv
- DE: `er gewönne / er gewänne`
- CS CURRENT: `Dostal by`

### partizipVergangenheit
- DE: `gewonnen`
- CS CURRENT: `Získané`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Gewinnen ve významu soutěže nebo vítězství znamená „vyhrát“, ne obecně získat.
- Proposed replacement: Vyhrát
- Audit CURRENT: Získat
- Production CURRENT: Získat
- DE (context): gewinnen
- LV reference: iegūt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Dostane“ znamená obdrží; gewinnt znamená „vyhraje“.
- Proposed replacement: Vyhraje
- Audit CURRENT: Dostane
- Production CURRENT: Dostane
- DE (context): er gewinnt
- LV reference: viņš iegūst

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Dostal“ znamená obdržel; gewann znamená „vyhrál“.
- Proposed replacement: Vyhrál
- Audit CURRENT: Dostal
- Production CURRENT: Dostal
- DE (context): er gewann
- LV reference: viņš ieguva

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktiv od gewinnen je „vyhrál by“, ne „dostal by“.
- Proposed replacement: Vyhrál by
- Audit CURRENT: Dostal by
- Production CURRENT: Dostal by
- DE (context): er gewönne / er gewänne
- LV reference: viņš iegūtu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Získané“ nevyjadřuje vítězství; gewonnen je „vyhraný“ nebo „vyhrál“.
- Proposed replacement: Vyhraný
- Audit CURRENT: Získané
- Production CURRENT: Získané
- DE (context): gewonnen
- LV reference: iegūts

---

## 061 — `verb-60`

**DE lemma**
`haben`

**Forms (production CURRENT)**

### infinitiv
- DE: `haben`
- CS CURRENT: `Být / patřit`

### praesens
- DE: `er hat`
- CS CURRENT: `Má`

### imperfektIndikativ
- DE: `hatte`
- CS CURRENT: `Byl`

### imperfektKonjunktiv
- DE: `hatte`
- CS CURRENT: `Byl`

### partizipVergangenheit
- DE: `gehabt`
- CS CURRENT: `Byl`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Německé haben znamená „mít“, nikoli „být“ nebo „patřit“.
- Proposed replacement: Mít
- Audit CURRENT: Být / patřit
- Production CURRENT: Být / patřit
- DE (context): haben
- LV reference: būt / piederēt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Hat­te je minulý čas slovesa haben: „měl“, nikoli „byl“.
- Proposed replacement: Měl
- Audit CURRENT: Byl
- Production CURRENT: Byl
- DE (context): hatte
- LV reference: bija

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Pro podmiňovací význam haben je třeba „měl by“, ne „byl“.
- Proposed replacement: Měl by
- Audit CURRENT: Byl
- Production CURRENT: Byl
- DE (context): hatte
- LV reference: bija

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Gehabt je příčestí od haben a znamená „měl“, nikoli „byl“.
- Proposed replacement: Měl
- Audit CURRENT: Byl
- Production CURRENT: Byl
- DE (context): gehabt
- LV reference: bijis

---

## 062 — `verb-61`

**DE lemma**
`halten`

**Forms (production CURRENT)**

### infinitiv
- DE: `halten`
- CS CURRENT: `Držet`

### praesens
- DE: `er hält`
- CS CURRENT: `On tam`

### imperfektIndikativ
- DE: `er hielt`
- CS CURRENT: `Držel`

### imperfektKonjunktiv
- DE: `er hielte`
- CS CURRENT: `Držel by se`

### partizipVergangenheit
- DE: `gehalten`
- CS CURRENT: `Držený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: ORTHOGRAPHY
- Source: Luna
- Form/Field: praesens
- Issue: „On tam“ znamená „he there“; jde o zjevný překlep místo významu „drží“.
- Proposed replacement: Drží
- Audit CURRENT: On tam
- Production CURRENT: On tam
- DE (context): er hält
- LV reference: viņš tur

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Přidané „se“ mění význam na „držel by se“; halten zde znamená „držet“.
- Proposed replacement: Držel by
- Audit CURRENT: Držel by se
- Production CURRENT: Držel by se
- DE (context): er hielte
- LV reference: viņš turētu

---

## 063 — `verb-62`

**DE lemma**
`heißen`

**Forms (production CURRENT)**

### infinitiv
- DE: `heißen`
- CS CURRENT: `Zavolat`

### praesens
- DE: `er heißt`
- CS CURRENT: `Volá / je volán`

### imperfektIndikativ
- DE: `er hieß`
- CS CURRENT: `Volal / byl volán`

### imperfektKonjunktiv
- DE: `er hieße`
- CS CURRENT: `Zavolal by / byl by povolán`

### partizipVergangenheit
- DE: `geheißen`
- CS CURRENT: `Volal`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Heißen znamená „jmenovat se“ nebo „nazývat se“, ne „zavolat“.
- Proposed replacement: Jmenovat se
- Audit CURRENT: Zavolat
- Production CURRENT: Zavolat
- DE (context): heißen
- LV reference: saukt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Význam heißen jako mít jméno je „jmenuje se“, nikoli „volá“ nebo „je volán“.
- Proposed replacement: Jmenuje se
- Audit CURRENT: Volá / je volán
- Production CURRENT: Volá / je volán
- DE (context): er heißt
- LV reference: viņš sauc / viņu sauc

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Hieß znamená „jmenoval se“; současný překlad označuje volání nebo povolání.
- Proposed replacement: Jmenoval se
- Audit CURRENT: Volal / byl volán
- Production CURRENT: Volal / byl volán
- DE (context): er hieß
- LV reference: viņš sauca / viņu sauca

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Hieße je podmiňovací tvar od „jmenovat se“, ne „zavolat“ ani „povolat“.
- Proposed replacement: Jmenoval by se
- Audit CURRENT: Zavolal by / byl by povolán
- Production CURRENT: Zavolal by / byl by povolán
- DE (context): er hieße
- LV reference: viņš sauktu / viņu sauktu

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Volal“ je minulý čas slovesa volat; geheißen znamená „jmenován“ nebo „nazýván“.
- Proposed replacement: Jmenován
- Audit CURRENT: Volal
- Production CURRENT: Volal
- DE (context): geheißen
- LV reference: saukts

---

## 064 — `verb-63`

**DE lemma**
`helfen`

**Forms (production CURRENT)**

### infinitiv
- DE: `helfen`
- CS CURRENT: `Pomoci`

### praesens
- DE: `er hilft`
- CS CURRENT: `On pomáhá`

### imperfektIndikativ
- DE: `er half`
- CS CURRENT: `Pomohl`

### imperfektKonjunktiv
- DE: `er hülfe / er hälfe`
- CS CURRENT: `Pomohl by`

### partizipVergangenheit
- DE: `geholfen`
- CS CURRENT: `Pomohl`

### Findings

NONE
---

## 065 — `verb-64`

**DE lemma**
`kommen`

**Forms (production CURRENT)**

### infinitiv
- DE: `kommen`
- CS CURRENT: `Přijít`

### praesens
- DE: `er kommt`
- CS CURRENT: `On přichází`

### imperfektIndikativ
- DE: `er kam`
- CS CURRENT: `Přišel`

### imperfektKonjunktiv
- DE: `er käme`
- CS CURRENT: `Přišel by`

### partizipVergangenheit
- DE: `gekommen (er ist)`
- CS CURRENT: `Přišel`

### Findings

NONE
---

## 066 — `verb-65`

**DE lemma**
`können`

**Forms (production CURRENT)**

### infinitiv
- DE: `können`
- CS CURRENT: `Moci`

### praesens
- DE: `er kann`
- CS CURRENT: `Může`

### imperfektIndikativ
- DE: `konnte`
- CS CURRENT: `Mohl`

### imperfektKonjunktiv
- DE: `konnte`
- CS CURRENT: `Mohl`

### partizipVergangenheit
- DE: `gekonnt`
- CS CURRENT: `Mohl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: V poli Konjunktiv II chybí částice „by“; německý tvar vyjadřuje hypotetickou možnost.
- Proposed replacement: Mohl by
- Audit CURRENT: Mohl
- Production CURRENT: Mohl
- DE (context): konnte
- LV reference: varēja

---

## 067 — `verb-66`

**DE lemma**
`kriechen`

**Forms (production CURRENT)**

### infinitiv
- DE: `kriechen`
- CS CURRENT: `Prší`

### praesens
- DE: `er kriecht`
- CS CURRENT: `Nakloní se`

### imperfektIndikativ
- DE: `er kroch`
- CS CURRENT: `Pršelo`

### imperfektKonjunktiv
- DE: `er kröche`
- CS CURRENT: `On prší`

### partizipVergangenheit
- DE: `gekrochen (er ist)`
- CS CURRENT: `Zemřel`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Prší“ znamená pršet; kriechen znamená plazit se nebo lézt.
- Proposed replacement: Plazit se
- Audit CURRENT: Prší
- Production CURRENT: Prší
- DE (context): kriechen
- LV reference: līst

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Nakloní se“ znamená nakloní se; kriecht znamená „leze“ nebo „plazí se“.
- Proposed replacement: Leze
- Audit CURRENT: Nakloní se
- Production CURRENT: Nakloní se
- DE (context): er kriecht
- LV reference: viņš lien

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Pršelo“ znamená pršelo; kroch je minulý čas slovesa kriechen.
- Proposed replacement: Lezl
- Audit CURRENT: Pršelo
- Production CURRENT: Pršelo
- DE (context): er kroch
- LV reference: viņš līda

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text znamená „on prší“; kröche znamená „lezl by“.
- Proposed replacement: Lezl by
- Audit CURRENT: On prší
- Production CURRENT: On prší
- DE (context): er kröche
- LV reference: viņš līstu

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Zemřel“ znamená zemřel; gekrochen je příčestí od „plazit se“ nebo „lézt“.
- Proposed replacement: Lezl
- Audit CURRENT: Zemřel
- Production CURRENT: Zemřel
- DE (context): gekrochen (er ist)
- LV reference: līdis

---

## 068 — `verb-67`

**DE lemma**
`laden`

**Forms (production CURRENT)**

### infinitiv
- DE: `laden`
- CS CURRENT: `Načíst, pozvat`

### praesens
- DE: `er lädt`
- CS CURRENT: `Hromadí / zve`

### imperfektIndikativ
- DE: `er lud`
- CS CURRENT: `Naložil / pozval`

### imperfektKonjunktiv
- DE: `er lüde`
- CS CURRENT: `By naložil / pozval`

### partizipVergangenheit
- DE: `geladen`
- CS CURRENT: `Načteno / pozváno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Laden ve významu nakládání znamená „nakládá“; „hromadí“ význam mění.
- Proposed replacement: Nakládá / zve
- Audit CURRENT: Hromadí / zve
- Production CURRENT: Hromadí / zve
- DE (context): er lädt
- LV reference: viņš krauj / ielūdz

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Česká podmiňovací částice „by“ musí stát za slovesem: „naložil by“.
- Proposed replacement: Naložil by / pozval by
- Audit CURRENT: By naložil / pozval
- Production CURRENT: By naložil / pozval
- DE (context): er lüde
- LV reference: viņš krautu / ielūgtu

---

## 069 — `verb-68`

**DE lemma**
`lassen`

**Forms (production CURRENT)**

### infinitiv
- DE: `lassen`
- CS CURRENT: `Dát, nechat`

### praesens
- DE: `er lässt`
- CS CURRENT: `Položí / nechá`

### imperfektIndikativ
- DE: `er ließ`
- CS CURRENT: `Nařídil / dovolil`

### imperfektKonjunktiv
- DE: `er ließe`
- CS CURRENT: `Dal by / nechal`

### partizipVergangenheit
- DE: `gelassen`
- CS CURRENT: `Dát / povoleno`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Položí“ je význam slovesa legen; lassen zde znamená „nechá“ nebo „dovolí“.
- Proposed replacement: Nechá / dovolí
- Audit CURRENT: Položí / nechá
- Production CURRENT: Položí / nechá
- DE (context): er lässt
- LV reference: viņš liek / ļauj

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Dát“ je infinitiv a „povoleno“ neodpovídá tvaru; gelassen znamená „nechaný“.
- Proposed replacement: Nechaný
- Audit CURRENT: Dát / povoleno
- Production CURRENT: Dát / povoleno
- DE (context): gelassen
- LV reference: likts / ļauts

---

## 070 — `verb-69`

**DE lemma**
`laufen`

**Forms (production CURRENT)**

### infinitiv
- DE: `laufen`
- CS CURRENT: `Běžet`

### praesens
- DE: `er läuft`
- CS CURRENT: `On běží`

### imperfektIndikativ
- DE: `er lief`
- CS CURRENT: `Běžel`

### imperfektKonjunktiv
- DE: `er liefe`
- CS CURRENT: `Běžel by`

### partizipVergangenheit
- DE: `gelaufen (er ist)`
- CS CURRENT: `Běžel`

### Findings

NONE
---

## 071 — `verb-70`

**DE lemma**
`leiden`

**Forms (production CURRENT)**

### infinitiv
- DE: `leiden`
- CS CURRENT: `Trpět`

### praesens
- DE: `er leidet`
- CS CURRENT: `On trpí`

### imperfektIndikativ
- DE: `er litt`
- CS CURRENT: `Trpěl`

### imperfektKonjunktiv
- DE: `er litte`
- CS CURRENT: `Trpěl by`

### partizipVergangenheit
- DE: `gelitten`
- CS CURRENT: `Trpěl`

### Findings

NONE
---

## 072 — `verb-71`

**DE lemma**
`leihen`

**Forms (production CURRENT)**

### infinitiv
- DE: `leihen`
- CS CURRENT: `Půjčit / vypůjčit`

### praesens
- DE: `er leiht`
- CS CURRENT: `Půjčuje / půjčuje`

### imperfektIndikativ
- DE: `er lieh`
- CS CURRENT: `Půjčil / vypůjčil`

### imperfektKonjunktiv
- DE: `er liehe`
- CS CURRENT: `By půjčil / půjčil`

### partizipVergangenheit
- DE: `geliehen`
- CS CURRENT: `Půjčil / vypůjčil`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Český překlad nerozlišuje „půjčovat někomu“ a „vypůjčovat si“.
- Proposed replacement: Půjčuje / vypůjčuje si
- Audit CURRENT: Půjčuje / půjčuje
- Production CURRENT: Půjčuje / půjčuje
- DE (context): er leiht
- LV reference: viņš aizdod / aizņemas

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybné pořadí částice „by“ a chybí rozlišení půjčení a vypůjčení.
- Proposed replacement: Půjčil by / vypůjčil by si
- Audit CURRENT: By půjčil / půjčil
- Production CURRENT: By půjčil / půjčil
- DE (context): er liehe
- LV reference: viņš aizdotu / aizņemtos

---

## 073 — `verb-72`

**DE lemma**
`lesen`

**Forms (production CURRENT)**

### infinitiv
- DE: `lesen`
- CS CURRENT: `Číst`

### praesens
- DE: `er liest`
- CS CURRENT: `On čte`

### imperfektIndikativ
- DE: `er las`
- CS CURRENT: `Četl`

### imperfektKonjunktiv
- DE: `er läse`
- CS CURRENT: `Četl by`

### partizipVergangenheit
- DE: `gelesen`
- CS CURRENT: `Číst`

### Findings

NONE
---

## 074 — `verb-73`

**DE lemma**
`liegen`

**Forms (production CURRENT)**

### infinitiv
- DE: `liegen`
- CS CURRENT: `Spát`

### praesens
- DE: `er liegt`
- CS CURRENT: `On spí`

### imperfektIndikativ
- DE: `er lag`
- CS CURRENT: `Spal`

### imperfektKonjunktiv
- DE: `er läge`
- CS CURRENT: `Spal by`

### partizipVergangenheit
- DE: `gelegen`
- CS CURRENT: `Spal`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Liegen znamená „ležet“, zatímco „spát“ je schlafen.
- Proposed replacement: Ležet
- Audit CURRENT: Spát
- Production CURRENT: Spát
- DE (context): liegen
- LV reference: gulēt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „On spí“ odpovídá schlafen; liegt znamená „leží“.
- Proposed replacement: Leží
- Audit CURRENT: On spí
- Production CURRENT: On spí
- DE (context): er liegt
- LV reference: viņš guļ

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Spal“ znamená spal; lag je minulý čas slovesa liegen: „ležel“.
- Proposed replacement: Ležel
- Audit CURRENT: Spal
- Production CURRENT: Spal
- DE (context): er lag
- LV reference: viņš gulēja

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Läge je podmiňovací tvar od liegen, tedy „ležel by“, ne „spal by“.
- Proposed replacement: Ležel by
- Audit CURRENT: Spal by
- Production CURRENT: Spal by
- DE (context): er läge
- LV reference: viņš gulētu

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Spal“ odpovídá schlafen; gelegen znamená „ležel“ nebo „položený“.
- Proposed replacement: Ležel
- Audit CURRENT: Spal
- Production CURRENT: Spal
- DE (context): gelegen
- LV reference: gulēts

---

## 075 — `verb-74`

**DE lemma**
`lügen`

**Forms (production CURRENT)**

### infinitiv
- DE: `lügen`
- CS CURRENT: `Lhát`

### praesens
- DE: `er lügt`
- CS CURRENT: `On lže`

### imperfektIndikativ
- DE: `er log`
- CS CURRENT: `Lhal`

### imperfektKonjunktiv
- DE: `er löge`
- CS CURRENT: `Lhal by`

### partizipVergangenheit
- DE: `gelogen`
- CS CURRENT: `Lhal`

### Findings

NONE
---

## 076 — `verb-75`

**DE lemma**
`mahlen`

**Forms (production CURRENT)**

### infinitiv
- DE: `mahlen`
- CS CURRENT: `Země`

### praesens
- DE: `er mahlt`
- CS CURRENT: `Mele`

### imperfektIndikativ
- DE: `er mahlte`
- CS CURRENT: `On okraj`

### imperfektKonjunktiv
- DE: `er malte`
- CS CURRENT: `Mele`

### partizipVergangenheit
- DE: `gemahlen`
- CS CURRENT: `Země`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Země“ je podstatné jméno; mahlen znamená „mlít“.
- Proposed replacement: Mlít
- Audit CURRENT: Země
- Production CURRENT: Země
- DE (context): mahlen
- LV reference: malt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Okraj“ je nesouvisející podstatné jméno; mahlte znamená „mlel“.
- Proposed replacement: Mlel
- Audit CURRENT: On okraj
- Production CURRENT: On okraj
- DE (context): er mahlte
- LV reference: viņš mala

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Mele“ je přítomný čas; Konjunktiv II vyžaduje „mlel by“.
- Proposed replacement: Mlel by
- Audit CURRENT: Mele
- Production CURRENT: Mele
- DE (context): er malte
- LV reference: viņš maltu

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Země“ neodpovídá gemahlen; správně je „mletý“ nebo „pomletý“.
- Proposed replacement: Mletý
- Audit CURRENT: Země
- Production CURRENT: Země
- DE (context): gemahlen
- LV reference: malts

---

## 077 — `verb-76`

**DE lemma**
`meiden`

**Forms (production CURRENT)**

### infinitiv
- DE: `meiden`
- CS CURRENT: `Vyhnout se`

### praesens
- DE: `er meidet`
- CS CURRENT: `Vyhýbá se`

### imperfektIndikativ
- DE: `er mied`
- CS CURRENT: `Vyhýbal se`

### imperfektKonjunktiv
- DE: `er miede`
- CS CURRENT: `Vyhnul by se`

### partizipVergangenheit
- DE: `gemieden`
- CS CURRENT: `Vyhnout`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Miede vyjadřuje průběžné vyhýbání; „vyhnul by se“ mění vid na jednorázový děj.
- Proposed replacement: Vyhýbal by se
- Audit CURRENT: Vyhnul by se
- Production CURRENT: Vyhnul by se
- DE (context): er miede
- LV reference: viņš izvairītos

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Vyhnout“ je infinitiv; příčestí gemieden vyžaduje tvar „vyhýbaný“ nebo „vyhnutý“.
- Proposed replacement: Vyhýbaný
- Audit CURRENT: Vyhnout
- Production CURRENT: Vyhnout
- DE (context): gemieden
- LV reference: izvairīts

---

## 078 — `verb-77`

**DE lemma**
`melken`

**Forms (production CURRENT)**

### infinitiv
- DE: `melken`
- CS CURRENT: `Na mléko`

### praesens
- DE: `er milkt / er melkt`
- CS CURRENT: `Zametá`

### imperfektIndikativ
- DE: `er molk / er melkte`
- CS CURRENT: `Zametl`

### imperfektKonjunktiv
- DE: `er mölke / er melkte`
- CS CURRENT: `Dojil by`

### partizipVergangenheit
- DE: `gemolken / gemelkt`
- CS CURRENT: `Nadojený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Na mléko“ není sloveso; melken znamená „dojit“.
- Proposed replacement: Dojit
- Audit CURRENT: Na mléko
- Production CURRENT: Na mléko
- DE (context): melken
- LV reference: slaukt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Zametá“ znamená sweep; melken znamená „dojí“.
- Proposed replacement: Dojí
- Audit CURRENT: Zametá
- Production CURRENT: Zametá
- DE (context): er milkt / er melkt
- LV reference: viņš slauc

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Zametl“ znamená swept; německé molk/melkte znamená „dojil“.
- Proposed replacement: Dojil
- Audit CURRENT: Zametl
- Production CURRENT: Zametl
- DE (context): er molk / er melkte
- LV reference: viņš slauca

#### Finding 4
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Význam je správný; tato položka je již bezchybná.
- Proposed replacement: Dojil by
- Audit CURRENT: Dojil by
- Production CURRENT: Dojil by
- DE (context): er mölke / er melkte
- LV reference: viņš slauktu

---

## 079 — `verb-78`

**DE lemma**
`messen`

**Forms (production CURRENT)**

### infinitiv
- DE: `messen`
- CS CURRENT: `Měřit`

### praesens
- DE: `er misst`
- CS CURRENT: `On měří`

### imperfektIndikativ
- DE: `er mass`
- CS CURRENT: `Změřil`

### imperfektKonjunktiv
- DE: `er mäße`
- CS CURRENT: `Změřil by`

### partizipVergangenheit
- DE: `gemessen`
- CS CURRENT: `Měřeno`

### Findings

NONE
---

## 080 — `verb-79`

**DE lemma**
`misslingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `misslingen`
- CS CURRENT: `Selhat`

### praesens
- DE: `es misslingt`
- CS CURRENT: `Selže`

### imperfektIndikativ
- DE: `misslang`
- CS CURRENT: `Nepodařilo`

### imperfektKonjunktiv
- DE: `misslang`
- CS CURRENT: `Nepodařilo`

### partizipVergangenheit
- DE: `misslungen`
- CS CURRENT: `Nepodařilo`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: U českého neosobního slovesa chybí zvratné „se“.
- Proposed replacement: Nepodařilo se
- Audit CURRENT: Nepodařilo
- Production CURRENT: Nepodařilo
- DE (context): misslang
- LV reference: neizdevās

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí „se“ i podmiňovací částice „by“; výsledkem je neúplný český tvar.
- Proposed replacement: Nepodařilo by se
- Audit CURRENT: Nepodařilo
- Production CURRENT: Nepodařilo
- DE (context): misslang
- LV reference: neizdevās

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Nepodařilo“ je neúplná věta; jako příčestí je vhodné „nezdařený“.
- Proposed replacement: Nezdařený
- Audit CURRENT: Nepodařilo
- Production CURRENT: Nepodařilo
- DE (context): misslungen
- LV reference: neizdevies

---

## 081 — `verb-80`

**DE lemma**
`mögen`

**Forms (production CURRENT)**

### infinitiv
- DE: `mögen`
- CS CURRENT: `Mít rád`

### praesens
- DE: `er mag`
- CS CURRENT: `Má rád`

### imperfektIndikativ
- DE: `mochte`
- CS CURRENT: `Se to líbilo`

### imperfektKonjunktiv
- DE: `mochte`
- CS CURRENT: `Se to líbilo`

### partizipVergangenheit
- DE: `gemocht`
- CS CURRENT: `Líbilo`

### Findings

NONE
---

## 082 — `verb-81`

**DE lemma**
`müssen`

**Forms (production CURRENT)**

### infinitiv
- DE: `müssen`
- CS CURRENT: `Potřebovat`

### praesens
- DE: `er muss`
- CS CURRENT: `Potřebuje`

### imperfektIndikativ
- DE: `musste`
- CS CURRENT: `By měl mít`

### imperfektKonjunktiv
- DE: `musste`
- CS CURRENT: `By měl mít`

### partizipVergangenheit
- DE: `gemusst`
- CS CURRENT: `Potřebná`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Müssen vyjadřuje nutnost „muset“, ne potřebu ve smyslu „potřebovat“.
- Proposed replacement: Muset
- Audit CURRENT: Potřebovat
- Production CURRENT: Potřebovat
- DE (context): müssen
- LV reference: vajadzēt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: Er muss znamená „musí“; „potřebuje“ odpovídá spíše brauchen.
- Proposed replacement: Musí
- Audit CURRENT: Potřebuje
- Production CURRENT: Potřebuje
- DE (context): er muss
- LV reference: viņam vajag

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Musste je minulý čas slovesa müssen: „musel“, ne „měl by mít“.
- Proposed replacement: Musel
- Audit CURRENT: By měl mít
- Production CURRENT: By měl mít
- DE (context): musste
- LV reference: vajadzēja

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Podmiňovací význam od müssen je „musel by“; současný překlad vyjadřuje should have.
- Proposed replacement: Musel by
- Audit CURRENT: By měl mít
- Production CURRENT: By měl mít
- DE (context): musste
- LV reference: vajadzēja

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Potřebná“ je přídavné jméno ženského rodu; gemusst souvisí s „muset“.
- Proposed replacement: Musel
- Audit CURRENT: Potřebná
- Production CURRENT: Potřebná
- DE (context): gemusst
- LV reference: vajadzējis

---

## 083 — `verb-82`

**DE lemma**
`nehmen`

**Forms (production CURRENT)**

### infinitiv
- DE: `nehmen`
- CS CURRENT: `Vzít`

### praesens
- DE: `er nimmt`
- CS CURRENT: `Bere`

### imperfektIndikativ
- DE: `er nahm`
- CS CURRENT: `Vzal`

### imperfektKonjunktiv
- DE: `er nähme`
- CS CURRENT: `Vzal by`

### partizipVergangenheit
- DE: `genommen`
- CS CURRENT: `Přijato`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Přijato“ znamená accepted; genommen znamená „vzato“.
- Proposed replacement: Vzato
- Audit CURRENT: Přijato
- Production CURRENT: Přijato
- DE (context): genommen
- LV reference: ņemts

---

## 084 — `verb-83`

**DE lemma**
`nennen`

**Forms (production CURRENT)**

### infinitiv
- DE: `nennen`
- CS CURRENT: `Jmenovat`

### praesens
- DE: `er nennt`
- CS CURRENT: `Jmenoval`

### imperfektIndikativ
- DE: `er nannte`
- CS CURRENT: `Zavolal`

### imperfektKonjunktiv
- DE: `er nennte`
- CS CURRENT: `Jmenoval by`

### partizipVergangenheit
- DE: `genannt`
- CS CURRENT: `Jmenoval`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: praesens
- Issue: „Jmenoval“ je minulý čas; německé nennt je přítomný čas „jmenuje“.
- Proposed replacement: Jmenuje
- Audit CURRENT: Jmenoval
- Production CURRENT: Jmenoval
- DE (context): er nennt
- LV reference: viņš nosauc

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Nannte znamená „jmenoval“ nebo „nazval“, nikoli „zavolal“.
- Proposed replacement: Jmenoval
- Audit CURRENT: Zavolal
- Production CURRENT: Zavolal
- DE (context): er nannte
- LV reference: viņš nosauca

---

## 085 — `verb-84`

**DE lemma**
`pfeifen`

**Forms (production CURRENT)**

### infinitiv
- DE: `pfeifen`
- CS CURRENT: `Pískat`

### praesens
- DE: `er pfeift`
- CS CURRENT: `Píská`

### imperfektIndikativ
- DE: `er pfiff`
- CS CURRENT: `Zapískal`

### imperfektKonjunktiv
- DE: `er pfiffe`
- CS CURRENT: `Pískal by`

### partizipVergangenheit
- DE: `gepfiffen`
- CS CURRENT: `Zapískal`

### Findings

NONE
---

## 086 — `verb-85`

**DE lemma**
`pflegen`

**Forms (production CURRENT)**

### infinitiv
- DE: `pflegen`
- CS CURRENT: `Udržovat`

### praesens
- DE: `er pflegt`
- CS CURRENT: `Stará se o něj`

### imperfektIndikativ
- DE: `pflegte vai pflog`
- CS CURRENT: `Soubor`

### imperfektKonjunktiv
- DE: `pflegte vai pflog`
- CS CURRENT: `Soubor`

### partizipVergangenheit
- DE: `gepflegt vai gepflogen`
- CS CURRENT: `Upravený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Soubor“ je podstatné jméno a nesouvisí s významem pflegen.
- Proposed replacement: Pečoval
- Audit CURRENT: Soubor
- Production CURRENT: Soubor
- DE (context): pflegte vai pflog
- LV reference: kopa

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Soubor“ je nesouvisející překlad; Konjunktiv II je „pečoval by“.
- Proposed replacement: Pečoval by
- Audit CURRENT: Soubor
- Production CURRENT: Soubor
- DE (context): pflegte vai pflog
- LV reference: kopa

---

## 087 — `verb-86`

**DE lemma**
`preisen`

**Forms (production CURRENT)**

### infinitiv
- DE: `preisen`
- CS CURRENT: `Chvála`

### praesens
- DE: `er preist`
- CS CURRENT: `Chválí`

### imperfektIndikativ
- DE: `er pries`
- CS CURRENT: `Chválil`

### imperfektKonjunktiv
- DE: `er priese`
- CS CURRENT: `Chválil by`

### partizipVergangenheit
- DE: `gepriesen`
- CS CURRENT: `Chválil`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Chvála“ je podstatné jméno; preisen je sloveso „chválit“.
- Proposed replacement: Chválit
- Audit CURRENT: Chvála
- Production CURRENT: Chvála
- DE (context): preisen
- LV reference: slavēt

---

## 088 — `verb-87`

**DE lemma**
`quellen`

**Forms (production CURRENT)**

### infinitiv
- DE: `quellen`
- CS CURRENT: `Nakypřít se`

### praesens
- DE: `er quillt`
- CS CURRENT: `Tloustne`

### imperfektIndikativ
- DE: `er quoll`
- CS CURRENT: `Vyzrál`

### imperfektKonjunktiv
- DE: `er quölle`
- CS CURRENT: `Je tlustý`

### partizipVergangenheit
- DE: `gequollen (er ist)`
- CS CURRENT: `Oteklý`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Quellen znamená bobtnat nebo nabývat, ne nakypřit půdu.
- Proposed replacement: Nabobtnat
- Audit CURRENT: Nakypřít se
- Production CURRENT: Nakypřít se
- DE (context): quellen
- LV reference: briest

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Tloustne“ se týká přibývání na váze; quillt znamená „bobtná“ nebo „kyne“.
- Proposed replacement: Bobtná
- Audit CURRENT: Tloustne
- Production CURRENT: Tloustne
- DE (context): er quillt
- LV reference: viņš briest

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Vyzrál“ znamená dozrál; quoll znamená „nabobtnal“ nebo „vyboulil se“.
- Proposed replacement: Nabobtnal
- Audit CURRENT: Vyzrál
- Production CURRENT: Vyzrál
- DE (context): er quoll
- LV reference: viņš brieda

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Je tlustý“ je stav, ne podmiňovací děj bobtnání.
- Proposed replacement: Nabobtnal by
- Audit CURRENT: Je tlustý
- Production CURRENT: Je tlustý
- DE (context): er quölle
- LV reference: viņš briestu

---

## 089 — `verb-88`

**DE lemma**
`raten`

**Forms (production CURRENT)**

### infinitiv
- DE: `raten`
- CS CURRENT: `Navrhnout / zmínit`

### praesens
- DE: `er rät`
- CS CURRENT: `On doporučuje / min`

### imperfektIndikativ
- DE: `er riet`
- CS CURRENT: `Navrhl / navrhl`

### imperfektKonjunktiv
- DE: `er riete`
- CS CURRENT: `By navrhl / zmínil`

### partizipVergangenheit
- DE: `geraten`
- CS CURRENT: `Navrhl / zmínil`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Raten znamená radit nebo hádat; „zmínit“ je jiný význam.
- Proposed replacement: Radit / hádat
- Audit CURRENT: Navrhnout / zmínit
- Production CURRENT: Navrhnout / zmínit
- DE (context): raten
- LV reference: ieteikt / minēt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: Druhý překlad je neúplný („min“); rät zde znamená „radí“ nebo „hádá“.
- Proposed replacement: Radí / hádá
- Audit CURRENT: On doporučuje / min
- Production CURRENT: On doporučuje / min
- DE (context): er rät
- LV reference: viņš iesaka / min

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Riet odpovídá „radil“ nebo „há­dal“, ne dvěma stejným překladům „navrhl“.
- Proposed replacement: Radil / hádal
- Audit CURRENT: Navrhl / navrhl
- Production CURRENT: Navrhl / navrhl
- DE (context): er riet
- LV reference: viņš ieteica / minēja

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybné umístění částice „by“ a nesprávný druhý význam.
- Proposed replacement: Radil by / hádal by
- Audit CURRENT: By navrhl / zmínil
- Production CURRENT: By navrhl / zmínil
- DE (context): er riete
- LV reference: viņš ieteiktu / minētu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Současné tvary jsou minulý čas a navíc neodpovídají významům radit/hádat.
- Proposed replacement: Radil / hádal
- Audit CURRENT: Navrhl / zmínil
- Production CURRENT: Navrhl / zmínil
- DE (context): geraten
- LV reference: ieteikts / minēts

---

## 090 — `verb-89`

**DE lemma**
`reiben`

**Forms (production CURRENT)**

### infinitiv
- DE: `reiben`
- CS CURRENT: `Třít`

### praesens
- DE: `er reibt`
- CS CURRENT: `Tře se`

### imperfektIndikativ
- DE: `er rieb`
- CS CURRENT: `Tře se`

### imperfektKonjunktiv
- DE: `er riebe`
- CS CURRENT: `Třel by`

### partizipVergangenheit
- DE: `gerieben`
- CS CURRENT: `Třel`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Přidané „se“ činí sloveso zvratným; německé reibt zde znamená „tře“.
- Proposed replacement: Tře
- Audit CURRENT: Tře se
- Production CURRENT: Tře se
- DE (context): er reibt
- LV reference: viņš berž

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Současný tvar je přítomný a zvratný; rieb znamená „třel“.
- Proposed replacement: Třel
- Audit CURRENT: Tře se
- Production CURRENT: Tře se
- DE (context): er rieb
- LV reference: viņš berza

---

## 091 — `verb-90`

**DE lemma**
`reißen`

**Forms (production CURRENT)**

### infinitiv
- DE: `reißen`
- CS CURRENT: `SEM`

### praesens
- DE: `er reißt`
- CS CURRENT: `Vyštěkne`

### imperfektIndikativ
- DE: `er riss`
- CS CURRENT: `Vyštěkl`

### imperfektKonjunktiv
- DE: `er risse`
- CS CURRENT: `Vyštěkl`

### partizipVergangenheit
- DE: `gerissen`
- CS CURRENT: `Roztrhaný`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „SEM“ není český překlad; reißen znamená „trhat“ nebo „vytrhnout“.
- Proposed replacement: Trhat
- Audit CURRENT: SEM
- Production CURRENT: SEM
- DE (context): reißen
- LV reference: raut

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Vyštěkne“ znamená pronese krátce; reißt znamená „trhá“.
- Proposed replacement: Trhá
- Audit CURRENT: Vyštěkne
- Production CURRENT: Vyštěkne
- DE (context): er reißt
- LV reference: viņš rauj

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Vyštěkl“ označuje krátký výrok; riss znamená „trhal“ nebo „roztrhl“.
- Proposed replacement: Trhal
- Audit CURRENT: Vyštěkl
- Production CURRENT: Vyštěkl
- DE (context): er riss
- LV reference: viņš rāva

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Risse je Konjunktiv II od reißen; současný překlad se týká mluvení.
- Proposed replacement: Trhal by
- Audit CURRENT: Vyštěkl
- Production CURRENT: Vyštěkl
- DE (context): er risse
- LV reference: viņš rautu

---

## 092 — `verb-91`

**DE lemma**
`reiten`

**Forms (production CURRENT)**

### infinitiv
- DE: `reiten`
- CS CURRENT: `Jezdit`

### praesens
- DE: `er reitet`
- CS CURRENT: `On jezdí`

### imperfektIndikativ
- DE: `er ritt`
- CS CURRENT: `Jezdil`

### imperfektKonjunktiv
- DE: `er ritte`
- CS CURRENT: `Jezdil by`

### partizipVergangenheit
- DE: `geritten (er ist)`
- CS CURRENT: `Jel`

### Findings

NONE
---

## 093 — `verb-92`

**DE lemma**
`rennen`

**Forms (production CURRENT)**

### infinitiv
- DE: `rennen`
- CS CURRENT: `Běžet`

### praesens
- DE: `er rennt`
- CS CURRENT: `On běží`

### imperfektIndikativ
- DE: `er rannte`
- CS CURRENT: `Běžel`

### imperfektKonjunktiv
- DE: `er rennte`
- CS CURRENT: `Běžel by`

### partizipVergangenheit
- DE: `gerannt`
- CS CURRENT: `Běžel`

### Findings

NONE
---

## 094 — `verb-93`

**DE lemma**
`riechen`

**Forms (production CURRENT)**

### infinitiv
- DE: `riechen`
- CS CURRENT: `Ost`

### praesens
- DE: `er riecht`
- CS CURRENT: `On voní`

### imperfektIndikativ
- DE: `er roch`
- CS CURRENT: `On zpívá`

### imperfektKonjunktiv
- DE: `er röche`
- CS CURRENT: `On port`

### partizipVergangenheit
- DE: `gerochen`
- CS CURRENT: `Přístav`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Ost“ není české sloveso; riechen znamená „čichat“ nebo „páchnout/vonět“.
- Proposed replacement: Čichat
- Audit CURRENT: Ost
- Production CURRENT: Ost
- DE (context): riechen
- LV reference: ost

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „On zpívá“ nesouvisí s riechen; roch znamená „čichal“ nebo „cítil pach“.
- Proposed replacement: Čichal
- Audit CURRENT: On zpívá
- Production CURRENT: On zpívá
- DE (context): er roch
- LV reference: viņš oda

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „On port“ je nesouvisející text; röche znamená „čichal by“ nebo „páchl by“.
- Proposed replacement: Čichal by
- Audit CURRENT: On port
- Production CURRENT: On port
- DE (context): er röche
- LV reference: viņš ostu

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Přístav“ je nesouvisející podstatné jméno; gerochen souvisí s čichem.
- Proposed replacement: Cítil
- Audit CURRENT: Přístav
- Production CURRENT: Přístav
- DE (context): gerochen
- LV reference: osts

---

## 095 — `verb-94`

**DE lemma**
`ringen`

**Forms (production CURRENT)**

### infinitiv
- DE: `ringen`
- CS CURRENT: `Zlomit se`

### praesens
- DE: `er ringt`
- CS CURRENT: `Zlomí se`

### imperfektIndikativ
- DE: `er rang`
- CS CURRENT: `Rozbil se`

### imperfektKonjunktiv
- DE: `er ränge`
- CS CURRENT: `Zlomil by se`

### partizipVergangenheit
- DE: `gerungen`
- CS CURRENT: `Počkejte`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Ringen znamená zápasit nebo se rvát; „zlomit se“ je jiný děj.
- Proposed replacement: Zápasit
- Audit CURRENT: Zlomit se
- Production CURRENT: Zlomit se
- DE (context): ringen
- LV reference: lauzties

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Zlomí se“ neodpovídá ringen; správně je „zápasí“ nebo „pere se“.
- Proposed replacement: Zápasí
- Audit CURRENT: Zlomí se
- Production CURRENT: Zlomí se
- DE (context): er ringt
- LV reference: viņš laužas

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Rang je minulý čas slovesa ringen: „zápasil“, ne „rozbil se“.
- Proposed replacement: Zápasil
- Audit CURRENT: Rozbil se
- Production CURRENT: Rozbil se
- DE (context): er rang
- LV reference: viņš lauzās

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktiv od ringen znamená „zápasil by“ nebo „pral by se“.
- Proposed replacement: Zápasil by
- Audit CURRENT: Zlomil by se
- Production CURRENT: Zlomil by se
- DE (context): er ränge
- LV reference: viņš lauztos

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Počkejte“ je rozkaz od čekat; gerungen znamená „zápasil“.
- Proposed replacement: Zápasil
- Audit CURRENT: Počkejte
- Production CURRENT: Počkejte
- DE (context): gerungen
- LV reference: laucies

---

## 096 — `verb-95`

**DE lemma**
`rinnen`

**Forms (production CURRENT)**

### infinitiv
- DE: `rinnen`
- CS CURRENT: `Proudit`

### praesens
- DE: `er rinnt`
- CS CURRENT: `Běží`

### imperfektIndikativ
- DE: `er rann`
- CS CURRENT: `Běžel`

### imperfektKonjunktiv
- DE: `er ränne / er rönne`
- CS CURRENT: `Běžel by`

### partizipVergangenheit
- DE: `geronnen (er ist)`
- CS CURRENT: `Tekla / koagulovala`

### Findings

NONE
---

## 097 — `verb-96`

**DE lemma**
`rufen`

**Forms (production CURRENT)**

### infinitiv
- DE: `rufen`
- CS CURRENT: `Zavolat`

### praesens
- DE: `er ruft`
- CS CURRENT: `Volá`

### imperfektIndikativ
- DE: `er rief`
- CS CURRENT: `Zavolal`

### imperfektKonjunktiv
- DE: `er riefe`
- CS CURRENT: `Zavolal by`

### partizipVergangenheit
- DE: `gerufen`
- CS CURRENT: `Volal`

### Findings

NONE
---

## 098 — `verb-97`

**DE lemma**
`salzen`

**Forms (production CURRENT)**

### infinitiv
- DE: `salzen`
- CS CURRENT: `Dosolit`

### praesens
- DE: `er salzt`
- CS CURRENT: `Osolil`

### imperfektIndikativ
- DE: `er salzte`
- CS CURRENT: `Osolil`

### imperfektKonjunktiv
- DE: `er salzte`
- CS CURRENT: `Osolil by`

### partizipVergangenheit
- DE: `gesalzen`
- CS CURRENT: `Osolené`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: praesens
- Issue: „Osolil“ je minulý čas; salzt je přítomný čas „solí“.
- Proposed replacement: Solí
- Audit CURRENT: Osolil
- Production CURRENT: Osolil
- DE (context): er salzt
- LV reference: viņš sāla

---

## 099 — `verb-98`

**DE lemma**
`saufen`

**Forms (production CURRENT)**

### infinitiv
- DE: `saufen`
- CS CURRENT: `Usušit / vypít`

### praesens
- DE: `er säuft`
- CS CURRENT: `Pije / pije`

### imperfektIndikativ
- DE: `er soff`
- CS CURRENT: `Pil / pil`

### imperfektKonjunktiv
- DE: `er söffe`
- CS CURRENT: `By pil / pil`

### partizipVergangenheit
- DE: `gesoffen`
- CS CURRENT: `Opilý`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Usušit“ a „vypít“ neodpovídají; saufen je hovorově „chlastat“ nebo „pít“.
- Proposed replacement: Chlastat / pít
- Audit CURRENT: Usušit / vypít
- Production CURRENT: Usušit / vypít
- DE (context): saufen
- LV reference: žūpot / dzert

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Překlad opakuje stejný neutrální tvar a ztrácí hovorový význam säuft.
- Proposed replacement: Chlastá / pije
- Audit CURRENT: Pije / pije
- Production CURRENT: Pije / pije
- DE (context): er säuft
- LV reference: viņš žūpo / dzer

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí správné umístění „by“ a rozlišení hovorového a neutrálního významu.
- Proposed replacement: Chlastal by / pil by
- Audit CURRENT: By pil / pil
- Production CURRENT: By pil / pil
- DE (context): er söffe
- LV reference: viņš žūpotu / dzertu

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Opilý“ znamená intoxikovaný; gesoffen znamená „chlastal“ nebo „pil“.
- Proposed replacement: Chlastal
- Audit CURRENT: Opilý
- Production CURRENT: Opilý
- DE (context): gesoffen
- LV reference: dzerts

---

## 100 — `verb-99`

**DE lemma**
`saugen`

**Forms (production CURRENT)**

### infinitiv
- DE: `saugen`
- CS CURRENT: `Sát`

### praesens
- DE: `er saugt`
- CS CURRENT: `Saje`

### imperfektIndikativ
- DE: `er sog`
- CS CURRENT: `Cucal`

### imperfektKonjunktiv
- DE: `er söge`
- CS CURRENT: `Cucal by`

### partizipVergangenheit
- DE: `gesogen`
- CS CURRENT: `Vysátý`

### Findings

NONE
---

## 101 — `verb-100`

**DE lemma**
`schaffen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schaffen`
- CS CURRENT: `Vytvořit`

### praesens
- DE: `er schafft`
- CS CURRENT: `On tvoří`

### imperfektIndikativ
- DE: `er schuf`
- CS CURRENT: `Vytvořil`

### imperfektKonjunktiv
- DE: `er schüfe`
- CS CURRENT: `Vytvořil by`

### partizipVergangenheit
- DE: `geschaffen`
- CS CURRENT: `Vytvořené`

### Findings

#### Finding 1
- Severity: LOW
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Samostatný překlad participia má být v základním mužském rodě, ne v neutru.
- Proposed replacement: Vytvořený
- Audit CURRENT: Vytvořené
- Production CURRENT: Vytvořené
- DE (context): geschaffen
- LV reference: radīts

---

## 102 — `verb-101`

**DE lemma**
`schallen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schallen`
- CS CURRENT: `Zaznít`

### praesens
- DE: `es schallt`
- CS CURRENT: `Zní to`

### imperfektIndikativ
- DE: `schallte vai scholl`
- CS CURRENT: `Zaznělo`

### imperfektKonjunktiv
- DE: `schallte vai scholl`
- CS CURRENT: `Zaznělo`

### partizipVergangenheit
- DE: `geschallt`
- CS CURRENT: `Zaznělo`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktiv vyjadřuje podmínku; českému překladu chybí částice „by“.
- Proposed replacement: Zaznělo by
- Audit CURRENT: Zaznělo
- Production CURRENT: Zaznělo
- DE (context): schallte vai scholl
- LV reference: skanēja

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Zaznělo“ je minulý čas ve středním rodě, nikoli přirozený překlad slovesa v základním tvaru.
- Proposed replacement: Zazněl
- Audit CURRENT: Zaznělo
- Production CURRENT: Zaznělo
- DE (context): geschallt
- LV reference: skanējis

---

## 103 — `verb-102`

**DE lemma**
`scheiden`

**Forms (production CURRENT)**

### infinitiv
- DE: `scheiden`
- CS CURRENT: `Rozvod / rozchod`

### praesens
- DE: `er scheidet`
- CS CURRENT: `On se rozvádí / rozvádí`

### imperfektIndikativ
- DE: `er schied`
- CS CURRENT: `Se rozvedl / rozvedl`

### imperfektKonjunktiv
- DE: `er schiede`
- CS CURRENT: `Rozvedl by se / rozvedl`

### partizipVergangenheit
- DE: `geschieden (er hat / er ist)`
- CS CURRENT: `Oddělený / rozvedený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Německý infinitiv je sloveso; český text obsahuje podstatná jména.
- Proposed replacement: Rozdělit / rozvést se
- Audit CURRENT: Rozvod / rozchod
- Production CURRENT: Rozvod / rozchod
- DE (context): scheiden
- LV reference: šķirt / šķirties

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Druhá možnost bez předmětu je nepřirozená a neodpovídá významu „oddělovat“.
- Proposed replacement: Rozvádí se / rozděluje
- Audit CURRENT: On se rozvádí / rozvádí
- Production CURRENT: On se rozvádí / rozvádí
- DE (context): er scheidet
- LV reference: viņš šķir / šķiras

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Druhá varianta postrádá podmiňovací částici „by“.
- Proposed replacement: Rozvedl by se / rozdělil by
- Audit CURRENT: Rozvedl by se / rozvedl
- Production CURRENT: Rozvedl by se / rozvedl
- DE (context): er schiede
- LV reference: viņš šķirtu / šķirtos

---

## 104 — `verb-103`

**DE lemma**
`scheinen`

**Forms (production CURRENT)**

### infinitiv
- DE: `scheinen`
- CS CURRENT: `Svítit / objevit se`

### praesens
- DE: `er scheint`
- CS CURRENT: `Září / zdá se`

### imperfektIndikativ
- DE: `er schien`
- CS CURRENT: `Zářil / zdálo se`

### imperfektKonjunktiv
- DE: `er schiene`
- CS CURRENT: `Leskl by se / zdál se`

### partizipVergangenheit
- DE: `geschienen`
- CS CURRENT: `Zářil / zdálo se`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Scheinen“ ve druhém významu znamená „zdát se“, nikoli „objevit se“.
- Proposed replacement: Svítit / zdát se
- Audit CURRENT: Svítit / objevit se
- Production CURRENT: Svítit / objevit se
- DE (context): scheinen
- LV reference: spīdēt / likties

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Leskl by se“ mění význam na odrážení světla a druhá varianta má chybnou konstrukci.
- Proposed replacement: Svítit by / zdál by se
- Audit CURRENT: Leskl by se / zdál se
- Production CURRENT: Leskl by se / zdál se
- DE (context): er schiene
- LV reference: viņš spīdētu / šķistu

---

## 105 — `verb-104`

**DE lemma**
`schelten`

**Forms (production CURRENT)**

### infinitiv
- DE: `schelten`
- CS CURRENT: `Bart`

### praesens
- DE: `er schilt`
- CS CURRENT: `Nadává`

### imperfektIndikativ
- DE: `er schalt`
- CS CURRENT: `Zatarasil`

### imperfektKonjunktiv
- DE: `er schölte / er schälte`
- CS CURRENT: `Oholí se`

### partizipVergangenheit
- DE: `gescholten`
- CS CURRENT: `Vousy`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Bart“ je podstatné jméno označující vousy; německé slovo je sloveso.
- Proposed replacement: Kárat / vynadat
- Audit CURRENT: Bart
- Production CURRENT: Bart
- DE (context): schelten
- LV reference: bārt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Zatarasil“ znamená zablokoval, nikoli káral nebo vynadal.
- Proposed replacement: Vynadal
- Audit CURRENT: Zatarasil
- Production CURRENT: Zatarasil
- DE (context): er schalt
- LV reference: viņš bāra

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text znamená „oholí se“ a je významově zcela nesouvisející.
- Proposed replacement: Vynadal by / káral by
- Audit CURRENT: Oholí se
- Production CURRENT: Oholí se
- DE (context): er schölte / er schälte
- LV reference: viņš bārtu

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Vousy“ je podstatné jméno; participium znamená káraný nebo pokáraný.
- Proposed replacement: Káraný
- Audit CURRENT: Vousy
- Production CURRENT: Vousy
- DE (context): gescholten
- LV reference: bārts

---

## 106 — `verb-105`

**DE lemma**
`scheren`

**Forms (production CURRENT)**

### infinitiv
- DE: `scheren`
- CS CURRENT: `Řezat`

### praesens
- DE: `er schert`
- CS CURRENT: `On řeže`

### imperfektIndikativ
- DE: `schor vai scherte`
- CS CURRENT: `Nůžky`

### imperfektKonjunktiv
- DE: `schor vai scherte`
- CS CURRENT: `Nůžky`

### partizipVergangenheit
- DE: `geschoren vai geschert`
- CS CURRENT: `Oříznuté`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Scheren“ znamená stříhat nebo holit, ne obecně řezat.
- Proposed replacement: Stříhat / oholit
- Audit CURRENT: Řezat
- Production CURRENT: Řezat
- DE (context): scheren
- LV reference: cirpt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Význam „řeže“ neodpovídá specifickému slovesu pro stříhání nebo holení.
- Proposed replacement: Stříhá
- Audit CURRENT: On řeže
- Production CURRENT: On řeže
- DE (context): er schert
- LV reference: viņš cirpj

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Nůžky“ jsou podstatné jméno, nikoli minulý čas slovesa.
- Proposed replacement: Stříhal
- Audit CURRENT: Nůžky
- Production CURRENT: Nůžky
- DE (context): schor vai scherte
- LV reference: cirpa

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Překlad je podstatné jméno a nevyjadřuje konjunktiv.
- Proposed replacement: Stříhal by
- Audit CURRENT: Nůžky
- Production CURRENT: Nůžky
- DE (context): schor vai scherte
- LV reference: cirpa

#### Finding 5
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Oříznutý“ se týká ořezávání; zde jde o stříhání nebo holení.
- Proposed replacement: Ostříhaný
- Audit CURRENT: Oříznuté
- Production CURRENT: Oříznuté
- DE (context): geschoren vai geschert
- LV reference: apcirpts

---

## 107 — `verb-106`

**DE lemma**
`schieben`

**Forms (production CURRENT)**

### infinitiv
- DE: `schieben`
- CS CURRENT: `Tlačit`

### praesens
- DE: `er schiebt`
- CS CURRENT: `Tlačí`

### imperfektIndikativ
- DE: `er schob`
- CS CURRENT: `Zatlačil`

### imperfektKonjunktiv
- DE: `er schöbe`
- CS CURRENT: `Tlačil by`

### partizipVergangenheit
- DE: `geschoben`
- CS CURRENT: `Tlačil`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Tlačil“ je minulý čas; německé participium vyžaduje české participium nebo přídavné jméno.
- Proposed replacement: Tlačený
- Audit CURRENT: Tlačil
- Production CURRENT: Tlačil
- DE (context): geschoben
- LV reference: stumts

---

## 108 — `verb-107`

**DE lemma**
`schießen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schießen`
- CS CURRENT: `Střílet`

### praesens
- DE: `er schießt`
- CS CURRENT: `Střílí`

### imperfektIndikativ
- DE: `er schoss`
- CS CURRENT: `Vystřelil`

### imperfektKonjunktiv
- DE: `er schösse`
- CS CURRENT: `Střílel by`

### partizipVergangenheit
- DE: `geschossen`
- CS CURRENT: `Shot`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Současný text je anglický, nikoli český překlad německého participia.
- Proposed replacement: Zastřelený
- Audit CURRENT: Shot
- Production CURRENT: Shot
- DE (context): geschossen
- LV reference: šauts

---

## 109 — `verb-108`

**DE lemma**
`schinden`

**Forms (production CURRENT)**

### infinitiv
- DE: `schinden`
- CS CURRENT: `Trápení`

### praesens
- DE: `er schindet`
- CS CURRENT: `Mučí`

### imperfektIndikativ
- DE: `schindete`
- CS CURRENT: `Utrápený`

### imperfektKonjunktiv
- DE: `schindete`
- CS CURRENT: `Utrápený`

### partizipVergangenheit
- DE: `geschunden`
- CS CURRENT: `Utrápený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Infinitiv musí být sloveso; „trápení“ je podstatné jméno.
- Proposed replacement: Mučit / trápit
- Audit CURRENT: Trápení
- Production CURRENT: Trápení
- DE (context): schinden
- LV reference: mocīt

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Utrápený“ je přídavné jméno, nikoli minulý čas slovesa.
- Proposed replacement: Mučil
- Audit CURRENT: Utrápený
- Production CURRENT: Utrápený
- DE (context): schindete
- LV reference: mocīja

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktivní překlad musí být slovesný a obsahovat „by“.
- Proposed replacement: Mučil by
- Audit CURRENT: Utrápený
- Production CURRENT: Utrápený
- DE (context): schindete
- LV reference: mocīja

---

## 110 — `verb-109`

**DE lemma**
`schlafen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schlafen`
- CS CURRENT: `Spát`

### praesens
- DE: `er schläft`
- CS CURRENT: `On spí`

### imperfektIndikativ
- DE: `er schlief`
- CS CURRENT: `Spal`

### imperfektKonjunktiv
- DE: `er schliefe`
- CS CURRENT: `Spal by`

### partizipVergangenheit
- DE: `geschlafen`
- CS CURRENT: `Spal`

### Findings

NONE
---

## 111 — `verb-110`

**DE lemma**
`schlagen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schlagen`
- CS CURRENT: `Hit`

### praesens
- DE: `er schlägt`
- CS CURRENT: `Zasáhne`

### imperfektIndikativ
- DE: `er schlug`
- CS CURRENT: `Trefil se`

### imperfektKonjunktiv
- DE: `er schlüge`
- CS CURRENT: `Trefil by se`

### partizipVergangenheit
- DE: `geschlagen`
- CS CURRENT: `Zbitý`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Současný text je anglický a není českým překladem slovesa.
- Proposed replacement: Bít / udeřit
- Audit CURRENT: Hit
- Production CURRENT: Hit
- DE (context): schlagen
- LV reference: sist

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: praesens
- Issue: „Zasáhne“ je budoucí nebo dokonavý význam; německý prézens zde znamená „bije“.
- Proposed replacement: Bije
- Audit CURRENT: Zasáhne
- Production CURRENT: Zasáhne
- DE (context): er schlägt
- LV reference: viņš sit

#### Finding 3
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Reflexivní „trefil se“ znamená zasáhl sám sebe nebo se trefil, což mění význam.
- Proposed replacement: Udeřil
- Audit CURRENT: Trefil se
- Production CURRENT: Trefil se
- DE (context): er schlug
- LV reference: viņš sita

#### Finding 4
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Reflexivní konstrukce mění význam a český překlad má být podmiňovací.
- Proposed replacement: Udeřil by
- Audit CURRENT: Trefil by se
- Production CURRENT: Trefil by se
- DE (context): er schlüge
- LV reference: viņš sistu

---

## 112 — `verb-111`

**DE lemma**
`schleichen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schleichen`
- CS CURRENT: `Prší`

### praesens
- DE: `er schleicht`
- CS CURRENT: `Nakloní se`

### imperfektIndikativ
- DE: `er schlich`
- CS CURRENT: `Pršelo`

### imperfektKonjunktiv
- DE: `er schliche`
- CS CURRENT: `On prší`

### partizipVergangenheit
- DE: `geschlichen (er ist)`
- CS CURRENT: `Zemřel`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Prší“ znamená pršet; německé sloveso znamená plížit se nebo šourat se.
- Proposed replacement: Plížit se
- Audit CURRENT: Prší
- Production CURRENT: Prší
- DE (context): schleichen
- LV reference: līda

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Nakloní se“ znamená naklonit se, nikoli pohybovat se tiše a pomalu.
- Proposed replacement: Plíží se
- Audit CURRENT: Nakloní se
- Production CURRENT: Nakloní se
- DE (context): er schleicht
- LV reference: viņš lien

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Pršelo“ je minulý čas slovesa pršet a s německým významem nesouvisí.
- Proposed replacement: Plížil se
- Audit CURRENT: Pršelo
- Production CURRENT: Pršelo
- DE (context): er schlich
- LV reference: viņš līda

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text obsahuje význam „on prší“ a postrádá správný český konjunktivní tvar.
- Proposed replacement: Plížil by se
- Audit CURRENT: On prší
- Production CURRENT: On prší
- DE (context): er schliche
- LV reference: viņš līstu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Zemřel“ znamená zemřel; německé participium znamená plížil se.
- Proposed replacement: Plížil se
- Audit CURRENT: Zemřel
- Production CURRENT: Zemřel
- DE (context): geschlichen (er ist)
- LV reference: līdis

---

## 113 — `verb-112`

**DE lemma**
`schleifen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schleifen`
- CS CURRENT: `Brousit`

### praesens
- DE: `er schleift`
- CS CURRENT: `Mele`

### imperfektIndikativ
- DE: `er schliff`
- CS CURRENT: `Mlel`

### imperfektKonjunktiv
- DE: `er schliffe`
- CS CURRENT: `Mlel by`

### partizipVergangenheit
- DE: `geschliffen`
- CS CURRENT: `Leštěný`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Mele“ znamená mlít; význam německého slovesa je brousit.
- Proposed replacement: Brousí
- Audit CURRENT: Mele
- Production CURRENT: Mele
- DE (context): er schleift
- LV reference: viņš slīpē

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Mlel“ je minulý čas slovesa mlít, nikoli brousit.
- Proposed replacement: Brousil
- Audit CURRENT: Mlel
- Production CURRENT: Mlel
- DE (context): er schliff
- LV reference: viņš slīpēja

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text odpovídá slovesu mlít místo brousit.
- Proposed replacement: Brousil by
- Audit CURRENT: Mlel by
- Production CURRENT: Mlel by
- DE (context): er schliffe
- LV reference: viņš slīpētu

---

## 114 — `verb-113`

**DE lemma**
`schließen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schließen`
- CS CURRENT: `Zavřít`

### praesens
- DE: `er schließt`
- CS CURRENT: `Zavírá`

### imperfektIndikativ
- DE: `er schloss`
- CS CURRENT: `Zavřel`

### imperfektKonjunktiv
- DE: `er schlösse`
- CS CURRENT: `Zavřel by se`

### partizipVergangenheit
- DE: `geschlossen`
- CS CURRENT: `ZAVŘENO`

### Findings

NONE
---

## 115 — `verb-114`

**DE lemma**
`schlingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schlingen`
- CS CURRENT: `Zítra`

### praesens
- DE: `er schlingt`
- CS CURRENT: `Polyká`

### imperfektIndikativ
- DE: `er schlang`
- CS CURRENT: `Polkl`

### imperfektKonjunktiv
- DE: `er schlänge`
- CS CURRENT: `On ráno`

### partizipVergangenheit
- DE: `geschlungen`
- CS CURRENT: `Ráno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Zítra“ je příslovce; „schlingen“ znamená hltat nebo polykat.
- Proposed replacement: Hltat
- Audit CURRENT: Zítra
- Production CURRENT: Zítra
- DE (context): schlingen
- LV reference: rīt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text je nesrozumitelný a nevyjadřuje německý význam ani konjunktiv.
- Proposed replacement: Hltal by
- Audit CURRENT: On ráno
- Production CURRENT: On ráno
- DE (context): er schlänge
- LV reference: viņš rītu

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Ráno“ je příslovce; participium znamená hltal nebo spolknutý podle kontextu.
- Proposed replacement: Hltal
- Audit CURRENT: Ráno
- Production CURRENT: Ráno
- DE (context): geschlungen
- LV reference: rīts

---

## 116 — `verb-115`

**DE lemma**
`schmeißen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schmeißen`
- CS CURRENT: `Hod`

### praesens
- DE: `er schmeißt`
- CS CURRENT: `Hází`

### imperfektIndikativ
- DE: `er schmiss`
- CS CURRENT: `Hodil`

### imperfektKonjunktiv
- DE: `er schmisse`
- CS CURRENT: `Hodil`

### partizipVergangenheit
- DE: `geschmissen`
- CS CURRENT: `Hozený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Infinitiv je sloveso; „hod“ je podstatné jméno.
- Proposed replacement: Hodit
- Audit CURRENT: Hod
- Production CURRENT: Hod
- DE (context): schmeißen
- LV reference: mest

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktivní překlad postrádá částici „by“.
- Proposed replacement: Hodil by
- Audit CURRENT: Hodil
- Production CURRENT: Hodil
- DE (context): er schmisse
- LV reference: viņš mestu

---

## 117 — `verb-116`

**DE lemma**
`schmelzen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schmelzen`
- CS CURRENT: `Pohybující se`

### praesens
- DE: `er schmilzt`
- CS CURRENT: `Roztaje se`

### imperfektIndikativ
- DE: `er schmolz`
- CS CURRENT: `Zasténal`

### imperfektKonjunktiv
- DE: `er schmölze`
- CS CURRENT: `Pohyboval se`

### partizipVergangenheit
- DE: `geschmolzen (er ist)`
- CS CURRENT: `Roztavený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: Současný text znamená pohybovat se; sloveso označuje tavení nebo rozpuštění.
- Proposed replacement: Tát / roztavit se
- Audit CURRENT: Pohybující se
- Production CURRENT: Pohybující se
- DE (context): schmelzen
- LV reference: kust

#### Finding 2
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: praesens
- Issue: „Roztaje se“ je dokonavý budoucí význam; německý prézens odpovídá „taje“.
- Proposed replacement: Taje
- Audit CURRENT: Roztaje se
- Production CURRENT: Roztaje se
- DE (context): er schmilzt
- LV reference: viņš kūst

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Zasténal“ znamená vydal sten, nikoli roztál.
- Proposed replacement: Tál
- Audit CURRENT: Zasténal
- Production CURRENT: Zasténal
- DE (context): er schmolz
- LV reference: viņš kusa

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text má zcela jiný význam a chybí mu podmiňovací částice.
- Proposed replacement: Tál by
- Audit CURRENT: Pohyboval se
- Production CURRENT: Pohyboval se
- DE (context): er schmölze
- LV reference: viņš kustu

---

## 118 — `verb-117`

**DE lemma**
`schnauben`

**Forms (production CURRENT)**

### infinitiv
- DE: `schnauben`
- CS CURRENT: `Zasyčet`

### praesens
- DE: `er schnaubt`
- CS CURRENT: `Odfrkne si`

### imperfektIndikativ
- DE: `schnaubte vai schnob`
- CS CURRENT: `Odfrkl si`

### imperfektKonjunktiv
- DE: `schnaubte vai schnob`
- CS CURRENT: `Odfrkl si`

### partizipVergangenheit
- DE: `geschnaubt vai geschnoben`
- CS CURRENT: `Šňupat`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Schnauben“ označuje funění nebo odfrkávání, ne zasyčení.
- Proposed replacement: Funět / odfrkávat
- Audit CURRENT: Zasyčet
- Production CURRENT: Zasyčet
- DE (context): schnauben
- LV reference: šņākt

#### Finding 2
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: praesens
- Issue: „Odfrkne si“ je dokonavý jednorázový děj; německý prézens je nedokonavý.
- Proposed replacement: Odfrkuje si
- Audit CURRENT: Odfrkne si
- Production CURRENT: Odfrkne si
- DE (context): er schnaubt
- LV reference: viņš šņāc

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktivní překlad postrádá částici „by“.
- Proposed replacement: Odfrkl by si
- Audit CURRENT: Odfrkl si
- Production CURRENT: Odfrkl si
- DE (context): schnaubte vai schnob
- LV reference: šņāca

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Šňupat“ je infinitiv a znamená vdechovat nosem; neodpovídá participiu.
- Proposed replacement: Odfrknutý
- Audit CURRENT: Šňupat
- Production CURRENT: Šňupat
- DE (context): geschnaubt vai geschnoben
- LV reference: nošņācies

---

## 119 — `verb-118`

**DE lemma**
`schneiden`

**Forms (production CURRENT)**

### infinitiv
- DE: `schneiden`
- CS CURRENT: `Řezat`

### praesens
- DE: `er schneidet`
- CS CURRENT: `Točí se`

### imperfektIndikativ
- DE: `er schnitt`
- CS CURRENT: `Řezal`

### imperfektKonjunktiv
- DE: `er schnitte`
- CS CURRENT: `Řezal by`

### partizipVergangenheit
- DE: `geschnitten`
- CS CURRENT: `Střih`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Točí se“ znamená otáčí se; německé sloveso znamená krájí nebo řeže.
- Proposed replacement: Krájí
- Audit CURRENT: Točí se
- Production CURRENT: Točí se
- DE (context): er schneidet
- LV reference: viņš griež

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Střih“ je podstatné jméno; německé participium vyžaduje přídavné jméno.
- Proposed replacement: Nakrájený
- Audit CURRENT: Střih
- Production CURRENT: Střih
- DE (context): geschnitten
- LV reference: griezts

---

## 120 — `verb-119`

**DE lemma**
`schreiben`

**Forms (production CURRENT)**

### infinitiv
- DE: `schreiben`
- CS CURRENT: `Psát`

### praesens
- DE: `er schreibt`
- CS CURRENT: `On píše`

### imperfektIndikativ
- DE: `er schrieb`
- CS CURRENT: `Napsal`

### imperfektKonjunktiv
- DE: `er schriebe`
- CS CURRENT: `Napsal by`

### partizipVergangenheit
- DE: `geschrieben`
- CS CURRENT: `Napsáno`

### Findings

NONE
---

## 121 — `verb-120`

**DE lemma**
`schreien`

**Forms (production CURRENT)**

### infinitiv
- DE: `schreien`
- CS CURRENT: `Křičet`

### praesens
- DE: `er schreit`
- CS CURRENT: `Křičí`

### imperfektIndikativ
- DE: `er schrie`
- CS CURRENT: `Vykřikl`

### imperfektKonjunktiv
- DE: `er schriee`
- CS CURRENT: `Křičel by`

### partizipVergangenheit
- DE: `geschrien`
- CS CURRENT: `Křičel`

### Findings

NONE
---

## 122 — `verb-121`

**DE lemma**
`schreiten`

**Forms (production CURRENT)**

### infinitiv
- DE: `schreiten`
- CS CURRENT: `Chůze`

### praesens
- DE: `er schreitet`
- CS CURRENT: `On chodí`

### imperfektIndikativ
- DE: `er schritt`
- CS CURRENT: `Chodil`

### imperfektKonjunktiv
- DE: `er schritte`
- CS CURRENT: `Chodil by`

### partizipVergangenheit
- DE: `geschritten (er ist)`
- CS CURRENT: `Chodil`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Infinitiv je sloveso; „chůze“ je podstatné jméno.
- Proposed replacement: Kráčet
- Audit CURRENT: Chůze
- Production CURRENT: Chůze
- DE (context): schreiten
- LV reference: soļot

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Schreiten“ označuje důstojnou nebo pravidelnou chůzi; obecné „chodí“ význam oslabuje.
- Proposed replacement: Kráčí
- Audit CURRENT: On chodí
- Production CURRENT: On chodí
- DE (context): er schreitet
- LV reference: viņš soļo

---

## 123 — `verb-122`

**DE lemma**
`schweigen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schweigen`
- CS CURRENT: `Mlčet`

### praesens
- DE: `er schweigt`
- CS CURRENT: `Mlčí`

### imperfektIndikativ
- DE: `er schwieg`
- CS CURRENT: `Mlčel`

### imperfektKonjunktiv
- DE: `er schwiege`
- CS CURRENT: `Mlčel by`

### partizipVergangenheit
- DE: `geschwiegen`
- CS CURRENT: `Umlčen`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Umlčen“ znamená ztichlý nebo umlčený někým; „geschwiegen“ znamená mlčel.
- Proposed replacement: Mlčel
- Audit CURRENT: Umlčen
- Production CURRENT: Umlčen
- DE (context): geschwiegen
- LV reference: klusēts

---

## 124 — `verb-123`

**DE lemma**
`schwellen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schwellen`
- CS CURRENT: `Pamp`

### praesens
- DE: `er schwillt`
- CS CURRENT: `Našpulí se`

### imperfektIndikativ
- DE: `er schwoll`
- CS CURRENT: `On pampa`

### imperfektKonjunktiv
- DE: `er schwölle`
- CS CURRENT: `Pumpoval by`

### partizipVergangenheit
- DE: `geschwollen (er ist)`
- CS CURRENT: `Čerpadlo`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Pamp“ je podstatné jméno nebo neúplný tvar; infinitiv musí být slovesný.
- Proposed replacement: Otékat / puchnout
- Audit CURRENT: Pamp
- Production CURRENT: Pamp
- DE (context): schwellen
- LV reference: pampt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Našpulí se“ znamená vypoulí nebo našpulí, nikoli nabobtná či oteče.
- Proposed replacement: Oteče
- Audit CURRENT: Našpulí se
- Production CURRENT: Našpulí se
- DE (context): er schwillt
- LV reference: viņš pampst

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Současný text je gramaticky neúplný a neodpovídá českému minulému času.
- Proposed replacement: Otekl
- Audit CURRENT: On pampa
- Production CURRENT: On pampa
- DE (context): er schwoll
- LV reference: viņš pampa

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Pumpoval by“ znamená čerpal nebo nafukoval; německé sloveso znamená nabobtnat.
- Proposed replacement: Otekl by
- Audit CURRENT: Pumpoval by
- Production CURRENT: Pumpoval by
- DE (context): er schwölle
- LV reference: viņš pamptu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Čerpadlo“ je podstatné jméno a významově nesouvisí s německým participiem.
- Proposed replacement: Oteklý
- Audit CURRENT: Čerpadlo
- Production CURRENT: Čerpadlo
- DE (context): geschwollen (er ist)
- LV reference: pampis

---

## 125 — `verb-124`

**DE lemma**
`schwimmen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schwimmen`
- CS CURRENT: `Plavat`

### praesens
- DE: `er schwimmt`
- CS CURRENT: `On plave`

### imperfektIndikativ
- DE: `er schwamm`
- CS CURRENT: `Plaval`

### imperfektKonjunktiv
- DE: `er schwömme / er schwämme`
- CS CURRENT: `Plaval by`

### partizipVergangenheit
- DE: `geschwommen (er ist)`
- CS CURRENT: `Plaval`

### Findings

NONE
---

## 126 — `verb-125`

**DE lemma**
`schwinden`

**Forms (production CURRENT)**

### infinitiv
- DE: `schwinden`
- CS CURRENT: `Zmizet`

### praesens
- DE: `er schwindet`
- CS CURRENT: `Zmizí`

### imperfektIndikativ
- DE: `er schwand`
- CS CURRENT: `Zmizel`

### imperfektKonjunktiv
- DE: `er schwände`
- CS CURRENT: `Zmizel by`

### partizipVergangenheit
- DE: `geschwunden (er ist)`
- CS CURRENT: `Ztracený`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: praesens
- Issue: „Zmizí“ je dokonavý budoucí význam; prézens slovesa „schwinden“ je „mizí“.
- Proposed replacement: Mizí
- Audit CURRENT: Zmizí
- Production CURRENT: Zmizí
- DE (context): er schwindet
- LV reference: viņš zūd

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Ztracený“ znamená ztracen, zatímco participium zde znamená zmizelý nebo ubývající.
- Proposed replacement: Zmizelý
- Audit CURRENT: Ztracený
- Production CURRENT: Ztracený
- DE (context): geschwunden (er ist)
- LV reference: zudis

---

## 127 — `verb-126`

**DE lemma**
`schwingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `schwingen`
- CS CURRENT: `Vlna`

### praesens
- DE: `er schwingt`
- CS CURRENT: `Mává`

### imperfektIndikativ
- DE: `er schwang`
- CS CURRENT: `Zamával`

### imperfektKonjunktiv
- DE: `er schwänge`
- CS CURRENT: `Zamával by`

### partizipVergangenheit
- DE: `geschwungen`
- CS CURRENT: `Zamával`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Vlna“ je podstatné jméno; infinitiv německého slovesa znamená kývat nebo mávat.
- Proposed replacement: Kývat / mávat
- Audit CURRENT: Vlna
- Production CURRENT: Vlna
- DE (context): schwingen
- LV reference: vicināt

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Mává“ je možné jen pro význam mávání; základní význam slovesa je kývat nebo houpat.
- Proposed replacement: Kývá
- Audit CURRENT: Mává
- Production CURRENT: Mává
- DE (context): er schwingt
- LV reference: viņš vicina

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Zamával“ je minulý čas dokonavého slovesa, nikoli participiální překlad.
- Proposed replacement: Kýval
- Audit CURRENT: Zamával
- Production CURRENT: Zamával
- DE (context): geschwungen
- LV reference: vicināts

---

## 128 — `verb-127`

**DE lemma**
`schwören`

**Forms (production CURRENT)**

### infinitiv
- DE: `schwören`
- CS CURRENT: `Nadávat`

### praesens
- DE: `er schwört`
- CS CURRENT: `Přísahá`

### imperfektIndikativ
- DE: `er schwur / er schwor`
- CS CURRENT: `Zaklel`

### imperfektKonjunktiv
- DE: `er schwöre`
- CS CURRENT: `Přísahal by`

### partizipVergangenheit
- DE: `geschworen`
- CS CURRENT: `Přísežný`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Schwören“ znamená přísahat; „nadávat“ je významově jiné sloveso.
- Proposed replacement: Přísahat
- Audit CURRENT: Nadávat
- Production CURRENT: Nadávat
- DE (context): schwören
- LV reference: zvērēt

#### Finding 2
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Zaklel“ může znamenat proklel nebo použil vulgaritu; německý význam je přísahal.
- Proposed replacement: Přísahal
- Audit CURRENT: Zaklel
- Production CURRENT: Zaklel
- DE (context): er schwur / er schwor
- LV reference: viņš zvērēja

#### Finding 3
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Přísežný“ je přídavné jméno; současný překlad nevyjadřuje slovesný význam participia.
- Proposed replacement: Přísahal
- Audit CURRENT: Přísežný
- Production CURRENT: Přísežný
- DE (context): geschworen
- LV reference: zvērēts

---

## 129 — `verb-128`

**DE lemma**
`sehen`

**Forms (production CURRENT)**

### infinitiv
- DE: `sehen`
- CS CURRENT: `Vidět`

### praesens
- DE: `er sieht`
- CS CURRENT: `On vidí`

### imperfektIndikativ
- DE: `er sah`
- CS CURRENT: `Viděl`

### imperfektKonjunktiv
- DE: `er sähe`
- CS CURRENT: `Viděl by`

### partizipVergangenheit
- DE: `gesehen`
- CS CURRENT: `Viděl`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Viděl“ je minulý čas; „gesehen“ zde odpovídá participiu „viděný“ nebo „spatřený“.
- Proposed replacement: Viděný
- Audit CURRENT: Viděl
- Production CURRENT: Viděl
- DE (context): gesehen
- LV reference: redzēts

---

## 130 — `verb-129`

**DE lemma**
`sein`

**Forms (production CURRENT)**

### infinitiv
- DE: `sein`
- CS CURRENT: `Být`

### praesens
- DE: `er ist`
- CS CURRENT: `On je`

### imperfektIndikativ
- DE: `war`
- CS CURRENT: `Byl`

### imperfektKonjunktiv
- DE: `war`
- CS CURRENT: `Byl`

### partizipVergangenheit
- DE: `gewesen`
- CS CURRENT: `Byl`

### Findings

NONE
---

## 131 — `verb-130`

**DE lemma**
`senden`

**Forms (production CURRENT)**

### infinitiv
- DE: `senden`
- CS CURRENT: `Poslat`

### praesens
- DE: `er sendet`
- CS CURRENT: `Posílá`

### imperfektIndikativ
- DE: `er sandte / er sendete`
- CS CURRENT: `Poslal`

### imperfektKonjunktiv
- DE: `er sendete`
- CS CURRENT: `Poslal by`

### partizipVergangenheit
- DE: `gesandt / gesendet`
- CS CURRENT: `Odesláno`

### Findings

NONE
---

## 132 — `verb-131`

**DE lemma**
`sieden`

**Forms (production CURRENT)**

### infinitiv
- DE: `sieden`
- CS CURRENT: `Vařit`

### praesens
- DE: `er siedet`
- CS CURRENT: `On vaří`

### imperfektIndikativ
- DE: `sott vai siedete`
- CS CURRENT: `Vařené`

### imperfektKonjunktiv
- DE: `sott vai siedete`
- CS CURRENT: `Vařené`

### partizipVergangenheit
- DE: `gesotten vai gesiedet`
- CS CURRENT: `Vařený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Vařené“ je přídavné jméno, nikoli minulý čas slovesa.
- Proposed replacement: Vařil
- Audit CURRENT: Vařené
- Production CURRENT: Vařené
- DE (context): sott vai siedete
- LV reference: vārīja

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktiv vyžaduje slovesný tvar s částicí „by“.
- Proposed replacement: Vařil by
- Audit CURRENT: Vařené
- Production CURRENT: Vařené
- DE (context): sott vai siedete
- LV reference: vārīja

---

## 133 — `verb-132`

**DE lemma**
`singen`

**Forms (production CURRENT)**

### infinitiv
- DE: `singen`
- CS CURRENT: `Zpívat`

### praesens
- DE: `er singt`
- CS CURRENT: `On zpívá`

### imperfektIndikativ
- DE: `er sang`
- CS CURRENT: `Zpíval`

### imperfektKonjunktiv
- DE: `er sänge`
- CS CURRENT: `Zpíval by`

### partizipVergangenheit
- DE: `gesungen`
- CS CURRENT: `Zpívaný`

### Findings

NONE
---

## 134 — `verb-133`

**DE lemma**
`sinken`

**Forms (production CURRENT)**

### infinitiv
- DE: `sinken`
- CS CURRENT: `Potopit se`

### praesens
- DE: `er sinkt`
- CS CURRENT: `Potápí se`

### imperfektIndikativ
- DE: `er sank`
- CS CURRENT: `Vymýšlel`

### imperfektKonjunktiv
- DE: `er sänke`
- CS CURRENT: `Potopil by se`

### partizipVergangenheit
- DE: `gesunken (er ist)`
- CS CURRENT: `Make up`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Potopit se“ je dokonavé; německý infinitiv vyjadřuje průběhové klesání.
- Proposed replacement: Klesat / potápět se
- Audit CURRENT: Potopit se
- Production CURRENT: Potopit se
- DE (context): sinken
- LV reference: grimt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Vymýšlel“ je zcela jiný význam než „klesal“ nebo „potápěl se“.
- Proposed replacement: Klesal
- Audit CURRENT: Vymýšlel
- Production CURRENT: Vymýšlel
- DE (context): er sank
- LV reference: viņš grima

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Současný text je anglický; německé participium znamená kleslý nebo potopený.
- Proposed replacement: Kleslý
- Audit CURRENT: Make up
- Production CURRENT: Make up
- DE (context): gesunken (er ist)
- LV reference: grimis

---

## 135 — `verb-134`

**DE lemma**
`sinnen`

**Forms (production CURRENT)**

### infinitiv
- DE: `sinnen`
- CS CURRENT: `Divit se`

### praesens
- DE: `er sinnt`
- CS CURRENT: `Diví se`

### imperfektIndikativ
- DE: `er sann`
- CS CURRENT: `Divil se`

### imperfektKonjunktiv
- DE: `er sönne / er sänne`
- CS CURRENT: `Divil by se`

### partizipVergangenheit
- DE: `gesonnen`
- CS CURRENT: `Smýšlející`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Sinnen“ znamená přemýšlet nebo rozjímat, nikoli divit se.
- Proposed replacement: Přemýšlet / rozjímat
- Audit CURRENT: Divit se
- Production CURRENT: Divit se
- DE (context): sinnen
- LV reference: prātot

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Diví se“ znamená být překvapený; německé sloveso znamená přemýšlí.
- Proposed replacement: Přemýšlí
- Audit CURRENT: Diví se
- Production CURRENT: Diví se
- DE (context): er sinnt
- LV reference: viņš prāto

#### Finding 3
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Minulý čas „divil se“ neodpovídá významu německého „sann“.
- Proposed replacement: Přemýšlel
- Audit CURRENT: Divil se
- Production CURRENT: Divil se
- DE (context): er sann
- LV reference: viņš prātoja

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text používá jiný význam slovesa než německý originál.
- Proposed replacement: Přemýšlel by
- Audit CURRENT: Divil by se
- Production CURRENT: Divil by se
- DE (context): er sönne / er sänne
- LV reference: viņš prātotu

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Smýšlející“ je přítomné participium; zde je třeba minulý slovesný význam.
- Proposed replacement: Smýšlel
- Audit CURRENT: Smýšlející
- Production CURRENT: Smýšlející
- DE (context): gesonnen
- LV reference: prātots

---

## 136 — `verb-135`

**DE lemma**
`sitzen`

**Forms (production CURRENT)**

### infinitiv
- DE: `sitzen`
- CS CURRENT: `Sedět`

### praesens
- DE: `er sitzt`
- CS CURRENT: `On sedí`

### imperfektIndikativ
- DE: `er sass`
- CS CURRENT: `Seděl`

### imperfektKonjunktiv
- DE: `er säße`
- CS CURRENT: `Seděl by`

### partizipVergangenheit
- DE: `gesessen`
- CS CURRENT: `Posadil se`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Posadil se“ znamená usedl, zatímco „gesessen“ znamená seděl.
- Proposed replacement: Seděl
- Audit CURRENT: Posadil se
- Production CURRENT: Posadil se
- DE (context): gesessen
- LV reference: sēdēts

---

## 137 — `verb-136`

**DE lemma**
`sollen`

**Forms (production CURRENT)**

### infinitiv
- DE: `sollen`
- CS CURRENT: `Potřebovat / být povinen`

### praesens
- DE: `er soll`
- CS CURRENT: `Potřebuje`

### imperfektIndikativ
- DE: `sollte`
- CS CURRENT: `By měl mít`

### imperfektKonjunktiv
- DE: `sollte`
- CS CURRENT: `By měl mít`

### partizipVergangenheit
- DE: `gesollt`
- CS CURRENT: `Potřebná`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Sollen“ vyjadřuje povinnost nebo očekávání, ne potřebu.
- Proposed replacement: Mít / být povinen
- Audit CURRENT: Potřebovat / být povinen
- Production CURRENT: Potřebovat / být povinen
- DE (context): sollen
- LV reference: vajadzēt / būt pienākumam

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Potřebuje“ odpovídá slovu brauchen; „sollen“ vyjadřuje povinnost nebo příkaz.
- Proposed replacement: Má / má povinnost
- Audit CURRENT: Potřebuje
- Production CURRENT: Potřebuje
- DE (context): er soll
- LV reference: viņam vajag

#### Finding 3
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Současný překlad neopodstatněně přidává význam vlastnění („mít“).
- Proposed replacement: Měl / měl by
- Audit CURRENT: By měl mít
- Production CURRENT: By měl mít
- DE (context): sollte
- LV reference: vajadzēja

#### Finding 4
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Přidané „mít“ mění význam německého modálního slovesa.
- Proposed replacement: Měl by
- Audit CURRENT: By měl mít
- Production CURRENT: By měl mít
- DE (context): sollte
- LV reference: vajadzēja

---

## 138 — `verb-137`

**DE lemma**
`speien`

**Forms (production CURRENT)**

### infinitiv
- DE: `speien`
- CS CURRENT: `Plivat`

### praesens
- DE: `er speit`
- CS CURRENT: `Plive`

### imperfektIndikativ
- DE: `er spie`
- CS CURRENT: `Odplivl si`

### imperfektKonjunktiv
- DE: `er spie`
- CS CURRENT: `Plival by`

### partizipVergangenheit
- DE: `gespien`
- CS CURRENT: `Vyplivl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Německý tvar je jednorázový konjunktiv; „plival by“ vyjadřuje opakovaný děj.
- Proposed replacement: Odplivl by si
- Audit CURRENT: Plival by
- Production CURRENT: Plival by
- DE (context): er spie
- LV reference: viņš spļautu

---

## 139 — `verb-138`

**DE lemma**
`spinnen`

**Forms (production CURRENT)**

### infinitiv
- DE: `spinnen`
- CS CURRENT: `Roztočit`

### praesens
- DE: `er spinnt`
- CS CURRENT: `Kroutí se`

### imperfektIndikativ
- DE: `er spann`
- CS CURRENT: `Točil se`

### imperfektKonjunktiv
- DE: `er spönne / er spänne`
- CS CURRENT: `Točil by se`

### partizipVergangenheit
- DE: `gesponnen`
- CS CURRENT: `Předený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Spinnen“ znamená příst nebo v jiném významu bláznit; „roztočit“ mění valenci i aspekt.
- Proposed replacement: Příst / točit se
- Audit CURRENT: Roztočit
- Production CURRENT: Roztočit
- DE (context): spinnen
- LV reference: vērpt

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: Podle zdroje jde o význam předení; „kroutí se“ jej nepřekládá.
- Proposed replacement: Přede
- Audit CURRENT: Kroutí se
- Production CURRENT: Kroutí se
- DE (context): er spinnt
- LV reference: viņš vērpj

---

## 140 — `verb-139`

**DE lemma**
`spleißen`

**Forms (production CURRENT)**

### infinitiv
- DE: `spleißen`
- CS CURRENT: `Připojit se`

### praesens
- DE: `er spleißt`
- CS CURRENT: `Spojuje se`

### imperfektIndikativ
- DE: `spliss`
- CS CURRENT: `Připojeno`

### imperfektKonjunktiv
- DE: `spliss`
- CS CURRENT: `Připojeno`

### partizipVergangenheit
- DE: `gesplissen`
- CS CURRENT: `Připojeno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Spleißen“ znamená spojit nebo splést, ne připojit se jako osoba.
- Proposed replacement: Spojit / splétat
- Audit CURRENT: Připojit se
- Production CURRENT: Připojit se
- DE (context): spleißen
- LV reference: savienot

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Připojeno“ je pasivní participium, zatímco německý tvar je minulý čas aktivní.
- Proposed replacement: Spojil
- Audit CURRENT: Připojeno
- Production CURRENT: Připojeno
- DE (context): spliss
- LV reference: savienoja

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text je participium a postrádá podmiňovací částici „by“.
- Proposed replacement: Spojil by
- Audit CURRENT: Připojeno
- Production CURRENT: Připojeno
- DE (context): spliss
- LV reference: savienoja

---

## 141 — `verb-140`

**DE lemma**
`sprechen`

**Forms (production CURRENT)**

### infinitiv
- DE: `sprechen`
- CS CURRENT: `Mluvit`

### praesens
- DE: `er spricht`
- CS CURRENT: `On mluví`

### imperfektIndikativ
- DE: `er sprach`
- CS CURRENT: `Promluvil`

### imperfektKonjunktiv
- DE: `er spräche`
- CS CURRENT: `Mluvil by`

### partizipVergangenheit
- DE: `gesprochen`
- CS CURRENT: `Mluvený`

### Findings

NONE
---

## 142 — `verb-141`

**DE lemma**
`sprießen`

**Forms (production CURRENT)**

### infinitiv
- DE: `sprießen`
- CS CURRENT: `Vzkvétat`

### praesens
- DE: `er sprießt`
- CS CURRENT: `Daří se mu`

### imperfektIndikativ
- DE: `er spross`
- CS CURRENT: `Prospíval`

### imperfektKonjunktiv
- DE: `er sprösse`
- CS CURRENT: `On police`

### partizipVergangenheit
- DE: `gesprossen (er ist)`
- CS CURRENT: `Rameno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Sprießen“ znamená rašit nebo vyrážet; „daří se mu“ má obecný jiný význam.
- Proposed replacement: Raší
- Audit CURRENT: Daří se mu
- Production CURRENT: Daří se mu
- DE (context): er sprießt
- LV reference: viņš plaukst

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Prospíval“ znamená dařilo se mu, nikoli rašil.
- Proposed replacement: Rašil
- Audit CURRENT: Prospíval
- Production CURRENT: Prospíval
- DE (context): er spross
- LV reference: viņš plauka

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Text je kontaminovaný jiným jazykem a neobsahuje český překlad.
- Proposed replacement: Rašil by
- Audit CURRENT: On police
- Production CURRENT: On police
- DE (context): er sprösse
- LV reference: viņš plauktu

#### Finding 4
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Rameno“ je podstatné jméno a s německým participiem významově nesouvisí.
- Proposed replacement: Vyrašil
- Audit CURRENT: Rameno
- Production CURRENT: Rameno
- DE (context): gesprossen (er ist)
- LV reference: plaucis

---

## 143 — `verb-142`

**DE lemma**
`springen`

**Forms (production CURRENT)**

### infinitiv
- DE: `springen`
- CS CURRENT: `Skočit`

### praesens
- DE: `er springt`
- CS CURRENT: `Skáče`

### imperfektIndikativ
- DE: `er sprang`
- CS CURRENT: `Skočil`

### imperfektKonjunktiv
- DE: `er spränge`
- CS CURRENT: `Skočil by`

### partizipVergangenheit
- DE: `gesprungen (er ist)`
- CS CURRENT: `Čočka`

### Findings

NONE
---

## 144 — `verb-143`

**DE lemma**
`stechen`

**Forms (production CURRENT)**

### infinitiv
- DE: `stechen`
- CS CURRENT: `Bodnout`

### praesens
- DE: `er sticht`
- CS CURRENT: `Bodá`

### imperfektIndikativ
- DE: `er stach`
- CS CURRENT: `Udeřil pěstí`

### imperfektKonjunktiv
- DE: `er stäche`
- CS CURRENT: `Bodl by`

### partizipVergangenheit
- DE: `gestochen`
- CS CURRENT: `Pobodán`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Stechen“ znamená píchnout nebo bodnout; úder pěstí je jiný děj.
- Proposed replacement: Píchl
- Audit CURRENT: Udeřil pěstí
- Production CURRENT: Udeřil pěstí
- DE (context): er stach
- LV reference: viņš dūra

---

## 145 — `verb-144`

**DE lemma**
`stecken`

**Forms (production CURRENT)**

### infinitiv
- DE: `stecken`
- CS CURRENT: `Přilepit / zapíchnout`

### praesens
- DE: `er steckt`
- CS CURRENT: `Tlačí`

### imperfektIndikativ
- DE: `stak vai steckte`
- CS CURRENT: `Plněné`

### imperfektKonjunktiv
- DE: `stak vai steckte`
- CS CURRENT: `Plněné`

### partizipVergangenheit
- DE: `gesteckt`
- CS CURRENT: `Plněné`

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: infinitiv
- Issue: „Stecken“ znamená strčit, vložit nebo být zasunutý; „přilepit“ je jiný význam.
- Proposed replacement: Strčit / zasunout
- Audit CURRENT: Přilepit / zapíchnout
- Production CURRENT: Přilepit / zapíchnout
- DE (context): stecken
- LV reference: bāzt / iespraust

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Tlačí“ znamená tlačit, zatímco německé sloveso zde znamená strká nebo zasouvá.
- Proposed replacement: Strká
- Audit CURRENT: Tlačí
- Production CURRENT: Tlačí
- DE (context): er steckt
- LV reference: viņš bāž

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Plněné“ je přídavné jméno a neodpovídá minulému času slovesa.
- Proposed replacement: Strčil
- Audit CURRENT: Plněné
- Production CURRENT: Plněné
- DE (context): stak vai steckte
- LV reference: iebāza

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Konjunktivní překlad musí být slovesný a obsahovat „by“.
- Proposed replacement: Strčil by
- Audit CURRENT: Plněné
- Production CURRENT: Plněné
- DE (context): stak vai steckte
- LV reference: iebāza

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Plněné“ znamená naplněné; participium „gesteckt“ znamená zasunutý nebo vložený.
- Proposed replacement: Zasunutý
- Audit CURRENT: Plněné
- Production CURRENT: Plněné
- DE (context): gesteckt
- LV reference: iebāzts

---

## 146 — `verb-145`

**DE lemma**
`stehen`

**Forms (production CURRENT)**

### infinitiv
- DE: `stehen`
- CS CURRENT: `Stát`

### praesens
- DE: `er steht`
- CS CURRENT: `On stojí`

### imperfektIndikativ
- DE: `er stand`
- CS CURRENT: `Stál`

### imperfektKonjunktiv
- DE: `er stände / er stünde`
- CS CURRENT: `Stál by`

### partizipVergangenheit
- DE: `gestanden`
- CS CURRENT: `Stojící`

### Findings

NONE
---

## 147 — `verb-146`

**DE lemma**
`stehlen`

**Forms (production CURRENT)**

### infinitiv
- DE: `stehlen`
- CS CURRENT: `Krást`

### praesens
- DE: `er stiehlt`
- CS CURRENT: `Krade`

### imperfektIndikativ
- DE: `er stahl`
- CS CURRENT: `Ukradl`

### imperfektKonjunktiv
- DE: `er stöhle / er stähle`
- CS CURRENT: `Ukradl by`

### partizipVergangenheit
- DE: `gestohlen`
- CS CURRENT: `Ukradený`

### Findings

NONE
---

## 148 — `verb-147`

**DE lemma**
`steigen`

**Forms (production CURRENT)**

### infinitiv
- DE: `steigen`
- CS CURRENT: `Lézt`

### praesens
- DE: `er steigt`
- CS CURRENT: `Leze`

### imperfektIndikativ
- DE: `er stieg`
- CS CURRENT: `Vylezl`

### imperfektKonjunktiv
- DE: `er stiege`
- CS CURRENT: `Lezl by`

### partizipVergangenheit
- DE: `gestiegen (er ist)`
- CS CURRENT: `Vylezl`

### Findings

NONE
---

## 149 — `verb-148`

**DE lemma**
`sterben`

**Forms (production CURRENT)**

### infinitiv
- DE: `sterben`
- CS CURRENT: `Zemřít`

### praesens
- DE: `er stirbt`
- CS CURRENT: `On umírá`

### imperfektIndikativ
- DE: `er starb`
- CS CURRENT: `Zemřel`

### imperfektKonjunktiv
- DE: `er stürbe`
- CS CURRENT: `Zemřel by`

### partizipVergangenheit
- DE: `gestorben (er ist)`
- CS CURRENT: `Mrtvý`

### Findings

NONE
---

## 150 — `verb-149`

**DE lemma**
`stieben`

**Forms (production CURRENT)**

### infinitiv
- DE: `stieben`
- CS CURRENT: `Pěna / víření`

### praesens
- DE: `es stiebt`
- CS CURRENT: `Fouká`

### imperfektIndikativ
- DE: `stob vai stiebte`
- CS CURRENT: `Napěněný`

### imperfektKonjunktiv
- DE: `stob vai stiebte`
- CS CURRENT: `Napěněný`

### partizipVergangenheit
- DE: `gestoben vai gestiebt`
- CS CURRENT: `Rozmazlený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Infinitiv je sloveso; současný překlad obsahuje podstatná jména.
- Proposed replacement: Pěnit / vířit
- Audit CURRENT: Pěna / víření
- Production CURRENT: Pěna / víření
- DE (context): stieben
- LV reference: putēt / virpuļot

#### Finding 2
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: praesens
- Issue: „Stieben“ označuje pěnění nebo víření částic, nikoli foukání větru.
- Proposed replacement: Pění / víří
- Audit CURRENT: Fouká
- Production CURRENT: Fouká
- DE (context): es stiebt
- LV reference: tas put

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Napěněný“ je přídavné jméno, nikoli minulý čas slovesa.
- Proposed replacement: Pěnil / vířil
- Audit CURRENT: Napěněný
- Production CURRENT: Napěněný
- DE (context): stob vai stiebte
- LV reference: putēja

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text není slovesný konjunktiv a neobsahuje částici „by“.
- Proposed replacement: Pěnil by / vířil by
- Audit CURRENT: Napěněný
- Production CURRENT: Napěněný
- DE (context): stob vai stiebte
- LV reference: putēja

#### Finding 5
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Rozmazlený“ znamená spoiled; s významem německého slovesa nesouvisí.
- Proposed replacement: Vířil
- Audit CURRENT: Rozmazlený
- Production CURRENT: Rozmazlený
- DE (context): gestoben vai gestiebt
- LV reference: izputējis

---

## 151 — `verb-150`

**DE lemma**
`stinken`

**Forms (production CURRENT)**

### infinitiv
- DE: `stinken`
- CS CURRENT: `Vonět`

### praesens
- DE: `es stinkt`
- CS CURRENT: `Smrdí to`

### imperfektIndikativ
- DE: `stank`
- CS CURRENT: `Voněl`

### imperfektKonjunktiv
- DE: `stank`
- CS CURRENT: `Voněl`

### partizipVergangenheit
- DE: `gestunken`
- CS CURRENT: `Páchnoucí`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Vonět“ znamená příjemně vonět, což je opačný význam německého slovesa.
- Proposed replacement: Smrdět
- Audit CURRENT: Vonět
- Production CURRENT: Vonět
- DE (context): stinken
- LV reference: smirdēt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Voněl“ znamená příjemně voněl; německé „stank“ znamená smrděl.
- Proposed replacement: Smrděl
- Audit CURRENT: Voněl
- Production CURRENT: Voněl
- DE (context): stank
- LV reference: smirdēja

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí konjunktivní význam a zároveň je použit opačný význam „voněl“.
- Proposed replacement: Smrděl by
- Audit CURRENT: Voněl
- Production CURRENT: Voněl
- DE (context): stank
- LV reference: smirdēja

#### Finding 4
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Páchnoucí“ je přítomné příčestí, nikoli minulý význam německého participia.
- Proposed replacement: Smrděl
- Audit CURRENT: Páchnoucí
- Production CURRENT: Páchnoucí
- DE (context): gestunken
- LV reference: smirdējis

---

## 152 — `verb-151`

**DE lemma**
`stoßen`

**Forms (production CURRENT)**

### infinitiv
- DE: `stoßen`
- CS CURRENT: `TAM`

### praesens
- DE: `er stößt`
- CS CURRENT: `Tlačí`

### imperfektIndikativ
- DE: `er stieß`
- CS CURRENT: `Zatlačil`

### imperfektKonjunktiv
- DE: `er stieße`
- CS CURRENT: `Tlačil`

### partizipVergangenheit
- DE: `gestoßen`
- CS CURRENT: `Tlačil`

### Findings

#### Finding 1
- Severity: CRITICAL
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Text „TAM“ není český překlad slovesa a nevyjadřuje jeho význam.
- Proposed replacement: Strkat / tlačit
- Audit CURRENT: TAM
- Production CURRENT: TAM
- DE (context): stoßen
- LV reference: grūst

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí podmiňovací význam německého Konjunktivu II.
- Proposed replacement: Tlačil by
- Audit CURRENT: Tlačil
- Production CURRENT: Tlačil
- DE (context): er stieße
- LV reference: viņš grūstu

---

## 153 — `verb-152`

**DE lemma**
`streichen`

**Forms (production CURRENT)**

### infinitiv
- DE: `streichen`
- CS CURRENT: `Barva / páska`

### praesens
- DE: `er streicht`
- CS CURRENT: `Maluje / pruhuje`

### imperfektIndikativ
- DE: `er strich`
- CS CURRENT: `Maloval / pruhoval`

### imperfektKonjunktiv
- DE: `er striche`
- CS CURRENT: `By maloval / svlékal`

### partizipVergangenheit
- DE: `gestrichen`
- CS CURRENT: `Malované / pruhované`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Současný text obsahuje podstatná jména místo infinitivů.
- Proposed replacement: Malovat / pruhovat
- Audit CURRENT: Barva / páska
- Production CURRENT: Barva / páska
- DE (context): streichen
- LV reference: krāsot / strīpot

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Svlékal“ je významově chybné a první varianta má nepřirozený slovosled.
- Proposed replacement: Maloval by / pruhoval by
- Audit CURRENT: By maloval / svlékal
- Production CURRENT: By maloval / svlékal
- DE (context): er striche
- LV reference: viņš krāsotu / strīpotu

---

## 154 — `verb-153`

**DE lemma**
`streiten`

**Forms (production CURRENT)**

### infinitiv
- DE: `streiten`
- CS CURRENT: `Bojovat`

### praesens
- DE: `er streitet`
- CS CURRENT: `On bojuje`

### imperfektIndikativ
- DE: `er stritt`
- CS CURRENT: `Bojoval`

### imperfektKonjunktiv
- DE: `er stritte`
- CS CURRENT: `Bojoval by`

### partizipVergangenheit
- DE: `gestritten`
- CS CURRENT: `Bojoval`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Streiten“ znamená hádat se, nikoli obecně bojovat.
- Proposed replacement: Hádat se
- Audit CURRENT: Bojovat
- Production CURRENT: Bojovat
- DE (context): streiten
- LV reference: cīnīties

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: Překlad používá význam „bojovat“ místo „hádat se“.
- Proposed replacement: Hádá se
- Audit CURRENT: On bojuje
- Production CURRENT: On bojuje
- DE (context): er streitet
- LV reference: viņš cīnās

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Minulý tvar má být od českého „hádat se“.
- Proposed replacement: Hádal se
- Audit CURRENT: Bojoval
- Production CURRENT: Bojoval
- DE (context): er stritt
- LV reference: viņš cīnījās

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Je použit chybný význam slovesa a chybí zvratné „se“.
- Proposed replacement: Hádal by se
- Audit CURRENT: Bojoval by
- Production CURRENT: Bojoval by
- DE (context): er stritte
- LV reference: viņš cīnītos

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Překlad zachovává chybný význam „bojovat“.
- Proposed replacement: Hádal se
- Audit CURRENT: Bojoval
- Production CURRENT: Bojoval
- DE (context): gestritten
- LV reference: cīnījies

---

## 155 — `verb-154`

**DE lemma**
`tragen`

**Forms (production CURRENT)**

### infinitiv
- DE: `tragen`
- CS CURRENT: `Nést`

### praesens
- DE: `er trägt`
- CS CURRENT: `On nese`

### imperfektIndikativ
- DE: `er trug`
- CS CURRENT: `Nesl`

### imperfektKonjunktiv
- DE: `er trüge`
- CS CURRENT: `Nesl by`

### partizipVergangenheit
- DE: `getragen`
- CS CURRENT: `Nesl`

### Findings

NONE
---

## 156 — `verb-155`

**DE lemma**
`treffen`

**Forms (production CURRENT)**

### infinitiv
- DE: `treffen`
- CS CURRENT: `Setkat se`

### praesens
- DE: `er trifft`
- CS CURRENT: `Potkává`

### imperfektIndikativ
- DE: `er traf`
- CS CURRENT: `Setkal se`

### imperfektKonjunktiv
- DE: `er träfe`
- CS CURRENT: `Setkal by se`

### partizipVergangenheit
- DE: `getroffen`
- CS CURRENT: `Setkali`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Setkali“ je množné číslo; německý vzor má jednotné číslo „er“.
- Proposed replacement: Setkal se
- Audit CURRENT: Setkali
- Production CURRENT: Setkali
- DE (context): getroffen
- LV reference: sastapts

---

## 157 — `verb-156`

**DE lemma**
`treiben`

**Forms (production CURRENT)**

### infinitiv
- DE: `treiben`
- CS CURRENT: `Honit`

### praesens
- DE: `er treibt`
- CS CURRENT: `On řídí`

### imperfektIndikativ
- DE: `er trieb`
- CS CURRENT: `Řídil`

### imperfektKonjunktiv
- DE: `er triebe`
- CS CURRENT: `Řídil by`

### partizipVergangenheit
- DE: `getrieben`
- CS CURRENT: `Honil`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: Pro význam německého „treiben“ a lotyšského zdroje je vhodnější „hnát“.
- Proposed replacement: Hnát
- Audit CURRENT: Honit
- Production CURRENT: Honit
- DE (context): treiben
- LV reference: dzīt

#### Finding 2
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Řídí“ znamená vést nebo ovládat vozidlo; zde jde o význam „hnát“.
- Proposed replacement: Žene
- Audit CURRENT: On řídí
- Production CURRENT: On řídí
- DE (context): er treibt
- LV reference: viņš dzen

#### Finding 3
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Minulý překlad odpovídá „řídit“, nikoli běžnému významu „treiben“.
- Proposed replacement: Hnal
- Audit CURRENT: Řídil
- Production CURRENT: Řídil
- DE (context): er trieb
- LV reference: viņš dzina

#### Finding 4
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Je zachován chybný význam „řídit“ místo „hnát“.
- Proposed replacement: Hnal by
- Audit CURRENT: Řídil by
- Production CURRENT: Řídil by
- DE (context): er triebe
- LV reference: viņš dzītu

#### Finding 5
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Honil“ znamená opakovanou činnost; zde je vhodnější minulý tvar „hnal“.
- Proposed replacement: Hnal
- Audit CURRENT: Honil
- Production CURRENT: Honil
- DE (context): getrieben
- LV reference: dzīts

---

## 158 — `verb-157`

**DE lemma**
`treten`

**Forms (production CURRENT)**

### infinitiv
- DE: `treten`
- CS CURRENT: `Vstoupit / jít`

### praesens
- DE: `er tritt`
- CS CURRENT: `Vchází / odchází`

### imperfektIndikativ
- DE: `er trat`
- CS CURRENT: `Stál / chodil`

### imperfektKonjunktiv
- DE: `er träte`
- CS CURRENT: `Stál/šel by`

### partizipVergangenheit
- DE: `getreten (er ist)`
- CS CURRENT: `Stál / chodil`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Odchází“ neodpovídá významu „treten“; druhý význam je v češtině posunutý.
- Proposed replacement: Vstupuje / kráčí
- Audit CURRENT: Vchází / odchází
- Production CURRENT: Vchází / odchází
- DE (context): er tritt
- LV reference: viņš stājas / iet

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Stál“ vyjadřuje stát, nikoli vstoupit nebo šlápnout.
- Proposed replacement: Vstoupil / kráčel
- Audit CURRENT: Stál / chodil
- Production CURRENT: Stál / chodil
- DE (context): er trat
- LV reference: viņš stājās / gāja

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: První význam je chybný a zápis bez mezer je nekonzistentní.
- Proposed replacement: Vstoupil by / kráčel by
- Audit CURRENT: Stál/šel by
- Production CURRENT: Stál/šel by
- DE (context): er träte
- LV reference: viņš stātos / ietu

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Současné výrazy vyjadřují stav nebo zvykovou činnost, ne dokončený děj.
- Proposed replacement: Vstoupil / kráčel
- Audit CURRENT: Stál / chodil
- Production CURRENT: Stál / chodil
- DE (context): getreten (er ist)
- LV reference: stājies / gājis

---

## 159 — `verb-158`

**DE lemma**
`trinken`

**Forms (production CURRENT)**

### infinitiv
- DE: `trinken`
- CS CURRENT: `Pít`

### praesens
- DE: `er trinkt`
- CS CURRENT: `On pije`

### imperfektIndikativ
- DE: `er trank`
- CS CURRENT: `On pil`

### imperfektKonjunktiv
- DE: `er tränke`
- CS CURRENT: `Pil by`

### partizipVergangenheit
- DE: `getrunken`
- CS CURRENT: `Opilý`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Opilý“ znamená drunk; „getrunken“ znamená pil nebo vypil.
- Proposed replacement: Pil
- Audit CURRENT: Opilý
- Production CURRENT: Opilý
- DE (context): getrunken
- LV reference: dzerts

---

## 160 — `verb-159`

**DE lemma**
`trügen`

**Forms (production CURRENT)**

### infinitiv
- DE: `trügen`
- CS CURRENT: `Podvádět`

### praesens
- DE: `er trögt`
- CS CURRENT: `Podvádí`

### imperfektIndikativ
- DE: `er trog`
- CS CURRENT: `Podváděl`

### imperfektKonjunktiv
- DE: `er tröge`
- CS CURRENT: `Podváděl by`

### partizipVergangenheit
- DE: `getrogen`
- CS CURRENT: `Podvedený`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Podvedený“ je pasivní stav; německé participium zde označuje aktivní klamání.
- Proposed replacement: Podváděl
- Audit CURRENT: Podvedený
- Production CURRENT: Podvedený
- DE (context): getrogen
- LV reference: krāpts

---

## 161 — `verb-160`

**DE lemma**
`tun`

**Forms (production CURRENT)**

### infinitiv
- DE: `tun`
- CS CURRENT: `Dělat`

### praesens
- DE: `er tut`
- CS CURRENT: `Dělá`

### imperfektIndikativ
- DE: `er tat`
- CS CURRENT: `Udělal`

### imperfektKonjunktiv
- DE: `er täte`
- CS CURRENT: `Udělal by to`

### partizipVergangenheit
- DE: `getan`
- CS CURRENT: `Hotovo`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Hotovo“ znamená dokončeno, zatímco německé „getan“ je tvar slovesa dělat.
- Proposed replacement: Udělal
- Audit CURRENT: Hotovo
- Production CURRENT: Hotovo
- DE (context): getan
- LV reference: darīts

---

## 162 — `verb-161`

**DE lemma**
`verderben`

**Forms (production CURRENT)**

### infinitiv
- DE: `verderben`
- CS CURRENT: `Poškodit`

### praesens
- DE: `er verdirbt`
- CS CURRENT: `On ničí`

### imperfektIndikativ
- DE: `er verdarb`
- CS CURRENT: `Poškodil`

### imperfektKonjunktiv
- DE: `er verdürbe`
- CS CURRENT: `Poškodil by`

### partizipVergangenheit
- DE: `verdorben`
- CS CURRENT: `Poškozené`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Verderben“ běžně znamená zkazit nebo způsobit zkázu, ne pouze poškodit.
- Proposed replacement: Zkazit
- Audit CURRENT: Poškodit
- Production CURRENT: Poškodit
- DE (context): verderben
- LV reference: bojāt

#### Finding 2
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Ničí“ je výrazně silnější význam než „verderben“ ve smyslu kazit.
- Proposed replacement: Kazí
- Audit CURRENT: On ničí
- Production CURRENT: On ničí
- DE (context): er verdirbt
- LV reference: viņš bojā

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Poškozené“ nevyjadřuje běžný význam „verdorben“ = zkažený.
- Proposed replacement: Zkažený
- Audit CURRENT: Poškozené
- Production CURRENT: Poškozené
- DE (context): verdorben
- LV reference: bojāts

---

## 163 — `verb-162`

**DE lemma**
`verdrießen`

**Forms (production CURRENT)**

### infinitiv
- DE: `verdrießen`
- CS CURRENT: `Způsobit obtěžování`

### praesens
- DE: `er verdrießt`
- CS CURRENT: `Způsobuje obtěžování`

### imperfektIndikativ
- DE: `er verdross`
- CS CURRENT: `Způsobil nepříjemnost`

### imperfektKonjunktiv
- DE: `er verdrösse`
- CS CURRENT: `Způsobil by nepříjemnost`

### partizipVergangenheit
- DE: `verdrossen`
- CS CURRENT: `Naštvaný`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: NATURALNESS
- Source: Luna
- Form/Field: infinitiv
- Issue: Současný překlad je nepřirozený kalk; běžný český infinitiv je „obtěžovat“.
- Proposed replacement: Obtěžovat
- Audit CURRENT: Způsobit obtěžování
- Production CURRENT: Způsobit obtěžování
- DE (context): verdrießen
- LV reference: sacelt īgnumu

#### Finding 2
- Severity: MEDIUM
- Type: NATURALNESS
- Source: Luna
- Form/Field: praesens
- Issue: Současná formulace je nepřirozená a zbytečně opisná.
- Proposed replacement: Obtěžuje
- Audit CURRENT: Způsobuje obtěžování
- Production CURRENT: Způsobuje obtěžování
- DE (context): er verdrießt
- LV reference: viņš izraisa īgnumu

#### Finding 3
- Severity: MEDIUM
- Type: NATURALNESS
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Jednoduchý český slovesný tvar lépe odpovídá německému významu i učebnímu formátu.
- Proposed replacement: Obtěžoval
- Audit CURRENT: Způsobil nepříjemnost
- Production CURRENT: Způsobil nepříjemnost
- DE (context): er verdross
- LV reference: viņš izraisīja īgnumu

#### Finding 4
- Severity: MEDIUM
- Type: NATURALNESS
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Opis je nepřirozený; vhodný je podmiňovací tvar slovesa „obtěžovat“.
- Proposed replacement: Obtěžoval by
- Audit CURRENT: Způsobil by nepříjemnost
- Production CURRENT: Způsobil by nepříjemnost
- DE (context): er verdrösse
- LV reference: viņš izraisītu īgnumu

#### Finding 5
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Verdrossen“ znamená rozmrzelý nebo znechucený, ne nutně naštvaný.
- Proposed replacement: Rozmrzelý
- Audit CURRENT: Naštvaný
- Production CURRENT: Naštvaný
- DE (context): verdrossen
- LV reference: sarūgtināts

---

## 164 — `verb-163`

**DE lemma**
`vergessen`

**Forms (production CURRENT)**

### infinitiv
- DE: `vergessen`
- CS CURRENT: `Zapomenout`

### praesens
- DE: `er vergisst`
- CS CURRENT: `Zapomíná`

### imperfektIndikativ
- DE: `er vergass`
- CS CURRENT: `Zapomněl`

### imperfektKonjunktiv
- DE: `er vergäße`
- CS CURRENT: `Zapomněl by`

### partizipVergangenheit
- DE: `vergessen`
- CS CURRENT: `Zapomenutý`

### Findings

NONE
---

## 165 — `verb-164`

**DE lemma**
`verlieren`

**Forms (production CURRENT)**

### infinitiv
- DE: `verlieren`
- CS CURRENT: `Prohrát`

### praesens
- DE: `er verliert`
- CS CURRENT: `Prohrává`

### imperfektIndikativ
- DE: `er verlor`
- CS CURRENT: `Prohrál`

### imperfektKonjunktiv
- DE: `er verlöre`
- CS CURRENT: `Prohrál by`

### partizipVergangenheit
- DE: `verloren`
- CS CURRENT: `Ztracený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Prohrát“ se týká hlavně soutěže; německé „verlieren“ zde odpovídá „ztratit“.
- Proposed replacement: Ztratit
- Audit CURRENT: Prohrát
- Production CURRENT: Prohrát
- DE (context): verlieren
- LV reference: pazaudēt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: Překlad používá význam prohry místo obecného „ztrácet“.
- Proposed replacement: Ztrácí
- Audit CURRENT: Prohrává
- Production CURRENT: Prohrává
- DE (context): er verliert
- LV reference: viņš pazaudē

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Prohrál“ znamená prohrál zápas; zde má být obecné „ztratil“.
- Proposed replacement: Ztratil
- Audit CURRENT: Prohrál
- Production CURRENT: Prohrál
- DE (context): er verlor
- LV reference: viņš pazaudēja

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Je použit chybný význam slovesa „prohrát“.
- Proposed replacement: Ztratil by
- Audit CURRENT: Prohrál by
- Production CURRENT: Prohrál by
- DE (context): er verlöre
- LV reference: viņš pazaudētu

---

## 166 — `verb-165`

**DE lemma**
`wachsen`

**Forms (production CURRENT)**

### infinitiv
- DE: `wachsen`
- CS CURRENT: `Růst`

### praesens
- DE: `er wächst`
- CS CURRENT: `On roste`

### imperfektIndikativ
- DE: `er wuchs`
- CS CURRENT: `Vyrůstal`

### imperfektKonjunktiv
- DE: `er wüchse`
- CS CURRENT: `Vyrostl by`

### partizipVergangenheit
- DE: `gewachsen (er ist)`
- CS CURRENT: `Vyrostl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Wüchse“ vyjadřuje průběhový růst, nikoli dokončené „vyrostl“.
- Proposed replacement: Rostl by
- Audit CURRENT: Vyrostl by
- Production CURRENT: Vyrostl by
- DE (context): er wüchse
- LV reference: viņš augtu

---

## 167 — `verb-166`

**DE lemma**
`waschen`

**Forms (production CURRENT)**

### infinitiv
- DE: `waschen`
- CS CURRENT: `Umýt se`

### praesens
- DE: `er wäscht`
- CS CURRENT: `Myje`

### imperfektIndikativ
- DE: `er wusch`
- CS CURRENT: `Umyl se`

### imperfektKonjunktiv
- DE: `er wüsche`
- CS CURRENT: `Umyl by se`

### partizipVergangenheit
- DE: `gewaschen`
- CS CURRENT: `Vyprané`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Vyprané“ se týká praní prádla; „gewaschen“ zde odpovídá „umytý“.
- Proposed replacement: Umytý
- Audit CURRENT: Vyprané
- Production CURRENT: Vyprané
- DE (context): gewaschen
- LV reference: mazgāts

---

## 168 — `verb-167`

**DE lemma**
`weben`

**Forms (production CURRENT)**

### infinitiv
- DE: `weben`
- CS CURRENT: `Vazba`

### praesens
- DE: `er webt`
- CS CURRENT: `On tká`

### imperfektIndikativ
- DE: `wob`
- CS CURRENT: `Tkáň`

### imperfektKonjunktiv
- DE: `wob`
- CS CURRENT: `Tkáň`

### partizipVergangenheit
- DE: `gewoben`
- CS CURRENT: `Tkaný`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Vazba“ je podstatné jméno, nikoli český infinitiv.
- Proposed replacement: Tkat
- Audit CURRENT: Vazba
- Production CURRENT: Vazba
- DE (context): weben
- LV reference: aust

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Tkáň“ je podstatné jméno; minulý čas slovesa je „tkal“.
- Proposed replacement: Tkal
- Audit CURRENT: Tkáň
- Production CURRENT: Tkáň
- DE (context): wob
- LV reference: auda

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí slovesný tvar i podmiňovací význam.
- Proposed replacement: Tkal by
- Audit CURRENT: Tkáň
- Production CURRENT: Tkáň
- DE (context): wob
- LV reference: auda

---

## 169 — `verb-168`

**DE lemma**
`weichen`

**Forms (production CURRENT)**

### infinitiv
- DE: `weichen`
- CS CURRENT: `Stáhnout se`

### praesens
- DE: `er weicht`
- CS CURRENT: `Ustoupí`

### imperfektIndikativ
- DE: `er wich`
- CS CURRENT: `Ustoupil`

### imperfektKonjunktiv
- DE: `er wiche`
- CS CURRENT: `Ustoupil by`

### partizipVergangenheit
- DE: `gewichen (er ist)`
- CS CURRENT: `Ustoupit`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: praesens
- Issue: Německý prézens je průběhový; dokonavé „ustoupí“ posouvá časový význam.
- Proposed replacement: Ustupuje
- Audit CURRENT: Ustoupí
- Production CURRENT: Ustoupí
- DE (context): er weicht
- LV reference: viņš atkāpjas

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Ustoupit“ je infinitiv, nikoli minulý tvar odpovídající participiu.
- Proposed replacement: Ustoupil
- Audit CURRENT: Ustoupit
- Production CURRENT: Ustoupit
- DE (context): gewichen (er ist)
- LV reference: atkāpies

---

## 170 — `verb-169`

**DE lemma**
`weisen`

**Forms (production CURRENT)**

### infinitiv
- DE: `weisen`
- CS CURRENT: `Show`

### praesens
- DE: `er weist`
- CS CURRENT: `On ukazuje`

### imperfektIndikativ
- DE: `er wies`
- CS CURRENT: `Ukázal`

### imperfektKonjunktiv
- DE: `er wiese`
- CS CURRENT: `Ukázal by`

### partizipVergangenheit
- DE: `gewiesen`
- CS CURRENT: `Zobrazeno`

### Findings

#### Finding 1
- Severity: CRITICAL
- Type: SECTIONACCENTS_LANGUAGE
- Source: Luna
- Form/Field: infinitiv
- Issue: Anglické slovo v českém poli je jazyková kontaminace; překlad má být český.
- Proposed replacement: Ukázat
- Audit CURRENT: Show
- Production CURRENT: Show
- DE (context): weisen
- LV reference: rādīt

#### Finding 2
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Zobrazeno“ znamená zobrazené, zatímco „weisen“ znamená ukázat nebo poukázat.
- Proposed replacement: Ukázal
- Audit CURRENT: Zobrazeno
- Production CURRENT: Zobrazeno
- DE (context): gewiesen
- LV reference: rādīts

---

## 171 — `verb-170`

**DE lemma**
`wenden`

**Forms (production CURRENT)**

### infinitiv
- DE: `wenden`
- CS CURRENT: `Upravit / oříznout`

### praesens
- DE: `er wendet`
- CS CURRENT: `Kroutí / obrací`

### imperfektIndikativ
- DE: `er wandte / es wendete`
- CS CURRENT: `Zkroutil / otočil`

### imperfektKonjunktiv
- DE: `er wendete`
- CS CURRENT: `By upravil / obrátil`

### partizipVergangenheit
- DE: `gewandt / gewendet`
- CS CURRENT: `Změněno / obráceno`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Wenden“ znamená otočit nebo obrátit, ne upravit či oříznout.
- Proposed replacement: Otočit / obrátit
- Audit CURRENT: Upravit / oříznout
- Production CURRENT: Upravit / oříznout
- DE (context): wenden
- LV reference: grozīt / apgriezt

#### Finding 2
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Kroutí“ znamená kroutit nebo deformovat; správný význam je „otáčí“.
- Proposed replacement: Otáčí / obrací
- Audit CURRENT: Kroutí / obrací
- Production CURRENT: Kroutí / obrací
- DE (context): er wendet
- LV reference: viņš groza / apgriež

#### Finding 3
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Zkroutil“ neodpovídá významu „wenden“ ve smyslu otočit nebo obrátit.
- Proposed replacement: Otočil / obrátil
- Audit CURRENT: Zkroutil / otočil
- Production CURRENT: Zkroutil / otočil
- DE (context): er wandte / es wendete
- LV reference: viņš grozīja / apgrieza

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: První význam je chybný a podmiňovací částice musí stát za slovesem.
- Proposed replacement: Otočil by / obrátil by
- Audit CURRENT: By upravil / obrátil
- Production CURRENT: By upravil / obrátil
- DE (context): er wendete
- LV reference: viņš grozītu / apgrieztu

#### Finding 5
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Změněno“ znamená změněno, nikoli otočeno.
- Proposed replacement: Otočeno / obráceno
- Audit CURRENT: Změněno / obráceno
- Production CURRENT: Změněno / obráceno
- DE (context): gewandt / gewendet
- LV reference: grozīts / apgriezts

---

## 172 — `verb-171`

**DE lemma**
`werben`

**Forms (production CURRENT)**

### infinitiv
- DE: `werben`
- CS CURRENT: `Navrhnout`

### praesens
- DE: `er wirbt`
- CS CURRENT: `Navrhuje`

### imperfektIndikativ
- DE: `er warb`
- CS CURRENT: `Navrhl`

### imperfektKonjunktiv
- DE: `er würbe`
- CS CURRENT: `Navrhl by`

### partizipVergangenheit
- DE: `geworben`
- CS CURRENT: `Navrženo`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Navrhnout“ neodpovídá významům „werben“ = ucházet se nebo propagovat.
- Proposed replacement: Ucházet se / propagovat
- Audit CURRENT: Navrhnout
- Production CURRENT: Navrhnout
- DE (context): werben
- LV reference: bildināt

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: „Navrhuje“ znamená předkládá návrh, nikoli uchází se nebo propaguje.
- Proposed replacement: Uchází se / propaguje
- Audit CURRENT: Navrhuje
- Production CURRENT: Navrhuje
- DE (context): er wirbt
- LV reference: viņš bildina

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Minulý překlad má chybný význam „navrhnout“.
- Proposed replacement: Ucházel se / propagoval
- Audit CURRENT: Navrhl
- Production CURRENT: Navrhl
- DE (context): er warb
- LV reference: viņš bildināja

#### Finding 4
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Je použit chybný význam slovesa „navrhnout“.
- Proposed replacement: Ucházel by se / propagoval by
- Audit CURRENT: Navrhl by
- Production CURRENT: Navrhl by
- DE (context): er würbe
- LV reference: viņš bildinātu

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Navrženo“ znamená navrženo, ne propagováno nebo ucházeno se.
- Proposed replacement: Ucházel se / propagoval
- Audit CURRENT: Navrženo
- Production CURRENT: Navrženo
- DE (context): geworben
- LV reference: bildināts

---

## 173 — `verb-172`

**DE lemma**
`werden`

**Forms (production CURRENT)**

### infinitiv
- DE: `werden`
- CS CURRENT: `Stát se`

### praesens
- DE: `er wird`
- CS CURRENT: `Stává se`

### imperfektIndikativ
- DE: `wurde`
- CS CURRENT: `Se stal`

### imperfektKonjunktiv
- DE: `wurde`
- CS CURRENT: `Se stal`

### partizipVergangenheit
- DE: `geworden`
- CS CURRENT: `Se stal`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí podmiňovací význam a přirozený slovosled zvratného slovesa.
- Proposed replacement: Stal by se
- Audit CURRENT: Se stal
- Production CURRENT: Se stal
- DE (context): wurde
- LV reference: kļuva

#### Finding 2
- Severity: LOW
- Type: GRAMMAR
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Se stal“ je indikativní minulý tvar; pro participium je vhodnější „stal se“.
- Proposed replacement: Stal se
- Audit CURRENT: Se stal
- Production CURRENT: Se stal
- DE (context): geworden
- LV reference: kļuvis

---

## 174 — `verb-173`

**DE lemma**
`werfen`

**Forms (production CURRENT)**

### infinitiv
- DE: `werfen`
- CS CURRENT: `Hod`

### praesens
- DE: `er wirft`
- CS CURRENT: `Hází`

### imperfektIndikativ
- DE: `er warf`
- CS CURRENT: `Hodil`

### imperfektKonjunktiv
- DE: `er würfe`
- CS CURRENT: `Hodil`

### partizipVergangenheit
- DE: `geworfen`
- CS CURRENT: `Hozený`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Hod“ je podstatné jméno, nikoli infinitiv slovesa.
- Proposed replacement: Házet
- Audit CURRENT: Hod
- Production CURRENT: Hod
- DE (context): werfen
- LV reference: mest

#### Finding 2
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí podmiňovací význam německého Konjunktivu II.
- Proposed replacement: Hodil by
- Audit CURRENT: Hodil
- Production CURRENT: Hodil
- DE (context): er würfe
- LV reference: viņš mestu

---

## 175 — `verb-174`

**DE lemma**
`wiegen`

**Forms (production CURRENT)**

### infinitiv
- DE: `wiegen`
- CS CURRENT: `Vážit`

### praesens
- DE: `er wiegt`
- CS CURRENT: `On váží`

### imperfektIndikativ
- DE: `er wog`
- CS CURRENT: `Vážil`

### imperfektKonjunktiv
- DE: `er wöge`
- CS CURRENT: `Vážil by`

### partizipVergangenheit
- DE: `gewogen`
- CS CURRENT: `Vážený`

### Findings

#### Finding 1
- Severity: LOW
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Vážený“ běžně znamená respektovaný; pro „gewogen“ je přesnější „zvážený“.
- Proposed replacement: Zvážený
- Audit CURRENT: Vážený
- Production CURRENT: Vážený
- DE (context): gewogen
- LV reference: svērts

---

## 176 — `verb-175`

**DE lemma**
`winden`

**Forms (production CURRENT)**

### infinitiv
- DE: `winden`
- CS CURRENT: `Prýmek`

### praesens
- DE: `er windet`
- CS CURRENT: `On pin`

### imperfektIndikativ
- DE: `er wand`
- CS CURRENT: `Plete copánky`

### imperfektKonjunktiv
- DE: `er wände`
- CS CURRENT: `Zapletl by cop`

### partizipVergangenheit
- DE: `gewunden`
- CS CURRENT: `Pletené`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Prýmek“ je podstatné jméno, nikoli infinitiv slovesa.
- Proposed replacement: Plést / vinout
- Audit CURRENT: Prýmek
- Production CURRENT: Prýmek
- DE (context): winden
- LV reference: pīt

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Současný text je v přítomném čase; německý tvar je minulý.
- Proposed replacement: Pletl copánky
- Audit CURRENT: Plete copánky
- Production CURRENT: Plete copánky
- DE (context): wand
- LV reference: viņš pina

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Dokonavé „zapletl“ mění význam a jednotné „cop“ neodpovídá zdroji.
- Proposed replacement: Pletl by copánky
- Audit CURRENT: Zapletl by cop
- Production CURRENT: Zapletl by cop
- DE (context): wände
- LV reference: viņš pītu

---

## 177 — `verb-176`

**DE lemma**
`wissen`

**Forms (production CURRENT)**

### infinitiv
- DE: `wissen`
- CS CURRENT: `Vědět`

### praesens
- DE: `er weiß`
- CS CURRENT: `Ví`

### imperfektIndikativ
- DE: `er wusste`
- CS CURRENT: `Věděl`

### imperfektKonjunktiv
- DE: `er wüsste`
- CS CURRENT: `Věděl by`

### partizipVergangenheit
- DE: `gewusst`
- CS CURRENT: `Známý`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Známý“ znamená známý; „gewusst“ je minulý tvar slovesa vědět.
- Proposed replacement: Věděl
- Audit CURRENT: Známý
- Production CURRENT: Známý
- DE (context): gewusst
- LV reference: zināts

---

## 178 — `verb-177`

**DE lemma**
`wollen`

**Forms (production CURRENT)**

### infinitiv
- DE: `wollen`
- CS CURRENT: `Chtít`

### praesens
- DE: `er will`
- CS CURRENT: `Chce`

### imperfektIndikativ
- DE: `wollte`
- CS CURRENT: `Chtěl`

### imperfektKonjunktiv
- DE: `wollte`
- CS CURRENT: `Chtěl`

### partizipVergangenheit
- DE: `gewollt`
- CS CURRENT: `Chtěl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí podmiňovací význam německého Konjunktivu II.
- Proposed replacement: Chtěl by
- Audit CURRENT: Chtěl
- Production CURRENT: Chtěl
- DE (context): wollte
- LV reference: gribēja

---

## 179 — `verb-178`

**DE lemma**
`wringen`

**Forms (production CURRENT)**

### infinitiv
- DE: `wringen`
- CS CURRENT: `Vystřihnout / vymáčknout`

### praesens
- DE: `er wringt`
- CS CURRENT: `Vystřihne`

### imperfektIndikativ
- DE: `wrang`
- CS CURRENT: `Vystřihnout`

### imperfektKonjunktiv
- DE: `wrang`
- CS CURRENT: `Vystřihnout`

### partizipVergangenheit
- DE: `gewrungen`
- CS CURRENT: `Vystřihnout`

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: infinitiv
- Issue: „Wringen“ znamená ždímat nebo kroutit, ne vystřihovat.
- Proposed replacement: Ždímat / vyždímat
- Audit CURRENT: Vystřihnout / vymáčknout
- Production CURRENT: Vystřihnout / vymáčknout
- DE (context): wringen
- LV reference: izgriezt / izspiest

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: praesens
- Issue: Současný překlad znamená vystřihnout a neodpovídá německému slovesu.
- Proposed replacement: Ždímá
- Audit CURRENT: Vystřihne
- Production CURRENT: Vystřihne
- DE (context): er wringt
- LV reference: viņš izgriež

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Vystřihnout“ je infinitiv a navíc chybný význam.
- Proposed replacement: Ždímal
- Audit CURRENT: Vystřihnout
- Production CURRENT: Vystřihnout
- DE (context): wrang
- LV reference: izgrieza

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybí minulý i podmiňovací slovesný tvar a překlad je významově chybný.
- Proposed replacement: Ždímal by
- Audit CURRENT: Vystřihnout
- Production CURRENT: Vystřihnout
- DE (context): wrang
- LV reference: izgrieza

#### Finding 5
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: Současný text je infinitiv a znamená vystřihnout, nikoli vyždímat.
- Proposed replacement: Vyždímaný
- Audit CURRENT: Vystřihnout
- Production CURRENT: Vystřihnout
- DE (context): gewrungen
- LV reference: izgriezts

---

## 180 — `verb-179`

**DE lemma**
`zeihen`

**Forms (production CURRENT)**

### infinitiv
- DE: `zeihen`
- CS CURRENT: `Obviňovat`

### praesens
- DE: `er zeiht`
- CS CURRENT: `Obviňuje`

### imperfektIndikativ
- DE: `zieh`
- CS CURRENT: `Obviňován`

### imperfektKonjunktiv
- DE: `zieh`
- CS CURRENT: `Obviňován`

### partizipVergangenheit
- DE: `geziehen`
- CS CURRENT: `Obviňován`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Obviňován“ je pasivum; německý tvar je aktivní minulý tvar.
- Proposed replacement: Obvinil
- Audit CURRENT: Obviňován
- Production CURRENT: Obviňován
- DE (context): zieh
- LV reference: vainoja

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Současný text je pasivní a chybí podmiňovací význam.
- Proposed replacement: Obvinil by
- Audit CURRENT: Obviňován
- Production CURRENT: Obviňován
- DE (context): zieh
- LV reference: vainoja

---

## 181 — `verb-180`

**DE lemma**
`ziehen`

**Forms (production CURRENT)**

### infinitiv
- DE: `ziehen`
- CS CURRENT: `Tahat`

### praesens
- DE: `er zieht`
- CS CURRENT: `Táhne`

### imperfektIndikativ
- DE: `er zog`
- CS CURRENT: `Vytáhl`

### imperfektKonjunktiv
- DE: `er zöge`
- CS CURRENT: `Přetáhl by`

### partizipVergangenheit
- DE: `gezogen`
- CS CURRENT: `Přetáhl`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: „Vytáhl“ znamená vytáhl ven; německé „zog“ odpovídá obecnému „táhl“ a zdroj to potvrzuje.
- Proposed replacement: Táhl
- Audit CURRENT: Vytáhl
- Production CURRENT: Vytáhl
- DE (context): er zog
- LV reference: viņš vilka

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Přetáhl“ znamená přemístil nebo přetáhl přes něco, ne obecně táhl.
- Proposed replacement: Táhl by
- Audit CURRENT: Přetáhl by
- Production CURRENT: Přetáhl by
- DE (context): er zöge
- LV reference: viņš vilktu

#### Finding 3
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Přetáhl“ zužuje význam oproti obecnému „gezogen“ = táhl.
- Proposed replacement: Táhl
- Audit CURRENT: Přetáhl
- Production CURRENT: Přetáhl
- DE (context): gezogen
- LV reference: vilkts

---

## 182 — `verb-181`

**DE lemma**
`zwingen`

**Forms (production CURRENT)**

### infinitiv
- DE: `zwingen`
- CS CURRENT: `Donutit`

### praesens
- DE: `er zwingt`
- CS CURRENT: `On nutí`

### imperfektIndikativ
- DE: `er zwang`
- CS CURRENT: `Donutil`

### imperfektKonjunktiv
- DE: `er zwänge`
- CS CURRENT: `Nutil by`

### partizipVergangenheit
- DE: `gezwungen`
- CS CURRENT: `Nucený`

### Findings

NONE
---

## 183 — `verb-182`

**DE lemma**
`empfangen`

**Forms (production CURRENT)**

### infinitiv
- DE: `empfangen`
- CS CURRENT: `Přijímat`

### praesens
- DE: `er empfängt`
- CS CURRENT: `Přijímá`

### imperfektIndikativ
- DE: `er empfing`
- CS CURRENT: `Dostal`

### imperfektKonjunktiv
- DE: `er empfinge`
- CS CURRENT: `Obdržel by`

### partizipVergangenheit
- DE: `empfangen`
- CS CURRENT: `Přijaté`

### Findings

NONE
---

## 184 — `verb-183`

**DE lemma**
`erwägen`

**Forms (production CURRENT)**

### infinitiv
- DE: `erwägen`
- CS CURRENT: `Zvážit`

### praesens
- DE: `er erwägt`
- CS CURRENT: `Uvažuje`

### imperfektIndikativ
- DE: `er erwog`
- CS CURRENT: `Uvažoval`

### imperfektKonjunktiv
- DE: `er erwöge`
- CS CURRENT: `Zvážil by`

### partizipVergangenheit
- DE: `erwogen`
- CS CURRENT: `Zvážil`

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Německé „erwöge“ vyjadřuje zvažování; „zvážil by“ je dokončený děj.
- Proposed replacement: Zvažoval by
- Audit CURRENT: Zvážil by
- Production CURRENT: Zvážil by
- DE (context): er erwöge
- LV reference: viņš apsvērtu

---

## 185 — `verb-184`

**DE lemma**
`fechten`

**Forms (production CURRENT)**

### infinitiv
- DE: `fechten`
- CS CURRENT: `Bojovat`

### praesens
- DE: `er ficht`
- CS CURRENT: `On bojuje`

### imperfektIndikativ
- DE: `er focht`
- CS CURRENT: `Bojoval`

### imperfektKonjunktiv
- DE: `er föchte`
- CS CURRENT: `Bojoval by`

### partizipVergangenheit
- DE: `gefochten`
- CS CURRENT: `Bojoval`

### Findings

NONE
---

## 186 — `verb-185`

**DE lemma**
`flechten`

**Forms (production CURRENT)**

### infinitiv
- DE: `flechten`
- CS CURRENT: `Prýmek`

### praesens
- DE: `er flicht`
- CS CURRENT: `On pin`

### imperfektIndikativ
- DE: `er flocht`
- CS CURRENT: `Plete copánky`

### imperfektKonjunktiv
- DE: `er flöchte`
- CS CURRENT: `Zapletl by cop`

### partizipVergangenheit
- DE: `geflochten`
- CS CURRENT: `Pletené`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: „Prýmek“ je podstatné jméno; infinitiv slovesa je „plést“.
- Proposed replacement: Plést
- Audit CURRENT: Prýmek
- Production CURRENT: Prýmek
- DE (context): flechten
- LV reference: pīt

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Současný český tvar je přítomný čas, zatímco německý tvar je minulý.
- Proposed replacement: Pletl copánky
- Audit CURRENT: Plete copánky
- Production CURRENT: Plete copánky
- DE (context): er flocht
- LV reference: viņš pina

#### Finding 3
- Severity: MEDIUM
- Type: ASPECT
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Zapletl“ je dokonavé a mění průběhový význam; vhodnější je „pletl by“.
- Proposed replacement: Pletl by copánky
- Audit CURRENT: Zapletl by cop
- Production CURRENT: Zapletl by cop
- DE (context): er flöchte
- LV reference: viņš pītu

---

## 187 — `verb-186`

**DE lemma**
`hangen`

**Forms (production CURRENT)**

### infinitiv
- DE: `hangen`
- CS CURRENT: `Pověsit`

### praesens
- DE: `er hängt`
- CS CURRENT: `On visí`

### imperfektIndikativ
- DE: `er hing`
- CS CURRENT: `Visel`

### imperfektKonjunktiv
- DE: `er hinge`
- CS CURRENT: `Oběsil by se`

### partizipVergangenheit
- DE: `gehangen`
- CS CURRENT: `Vydrž`

### Findings

#### Finding 1
- Severity: HIGH
- Type: ASPECT
- Source: Luna
- Form/Field: infinitiv
- Issue: „Pověsit“ je kauzativní a dokonavé; německé „hangen“ znamená viset.
- Proposed replacement: Viset
- Audit CURRENT: Pověsit
- Production CURRENT: Pověsit
- DE (context): hangen
- LV reference: karāties

#### Finding 2
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: „Oběsil by se“ znamená sebevražedné oběšení, nikoli být zavěšený.
- Proposed replacement: Visel by
- Audit CURRENT: Oběsil by se
- Production CURRENT: Oběsil by se
- DE (context): er hinge
- LV reference: viņš karātos

#### Finding 3
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Vydrž“ znamená vydržet; neodpovídá slovesu „hangen“.
- Proposed replacement: Visel
- Audit CURRENT: Vydrž
- Production CURRENT: Vydrž
- DE (context): gehangen
- LV reference: karājies

---

## 188 — `verb-187`

**DE lemma**
`spalten`

**Forms (production CURRENT)**

### infinitiv
- DE: `spalten`
- CS CURRENT: `Rozdělit se`

### praesens
- DE: `er spaltet`
- CS CURRENT: `Rozdělí se`

### imperfektIndikativ
- DE: `er spaltete`
- CS CURRENT: `Rozdělil se`

### imperfektKonjunktiv
- DE: `er spaltete`
- CS CURRENT: `Rozdělil by se`

### partizipVergangenheit
- DE: `gespalten`
- CS CURRENT: `Rozdělit`

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: infinitiv
- Issue: Německé sloveso je tranzitivní; zvratné „se“ význam mění.
- Proposed replacement: Štípat / rozdělit
- Audit CURRENT: Rozdělit se
- Production CURRENT: Rozdělit se
- DE (context): spalten
- LV reference: skaldīt

#### Finding 2
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: praesens
- Issue: Současný tvar je dokonavý a zvratný, zatímco zdroj označuje aktivní dělení.
- Proposed replacement: Štípe
- Audit CURRENT: Rozdělí se
- Production CURRENT: Rozdělí se
- DE (context): er spaltet
- LV reference: viņš skalda

#### Finding 3
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektIndikativ
- Issue: Je použit zvratný dokonavý tvar místo aktivního minulého děje.
- Proposed replacement: Štípal
- Audit CURRENT: Rozdělil se
- Production CURRENT: Rozdělil se
- DE (context): er spaltete
- LV reference: viņš skaldīja

#### Finding 4
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Form/Field: imperfektKonjunktiv
- Issue: Chybně je použit zvratný dokonavý tvar; německý vzor je aktivní.
- Proposed replacement: Štípal by
- Audit CURRENT: Rozdělil by se
- Production CURRENT: Rozdělil by se
- DE (context): er spaltete
- LV reference: viņš skaldītu

#### Finding 5
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Form/Field: partizipVergangenheit
- Issue: „Rozdělit“ je infinitiv, nikoli překlad minulého participia.
- Proposed replacement: Rozštípaný
- Audit CURRENT: Rozdělit
- Production CURRENT: Rozdělit
- DE (context): gespalten
- LV reference: skaldīts

---

## 189 — `verb-188`

**DE lemma**
`verzeihen`

**Forms (production CURRENT)**

### infinitiv
- DE: `verzeihen`
- CS CURRENT: `Odpustit`

### praesens
- DE: `er verzeiht`
- CS CURRENT: `Odpouští`

### imperfektIndikativ
- DE: `er verzieh`
- CS CURRENT: `Odpustil`

### imperfektKonjunktiv
- DE: `er verziehe`
- CS CURRENT: `Odpustil by`

### partizipVergangenheit
- DE: `verziehen`
- CS CURRENT: `Odpuštěno`

### Findings

NONE
---

## Integrity summary

```text
productionVerbs: 189
masterVerbs: 189
uniqueProductionIds: 189
missingProductionVerbsInMaster: 0
duplicatedProductionVerbs: 0
groups: 4
groupCoverage: 001–189
orderParityWithProduction: PASS
fullAuditFindings: 418
transferredToMaster: 418
unresolvedFindingReferences: 0
auditCurrentMismatches: 0
sourceDeIssueFindings: 0
verbsWithFindings: 150
productionChanges: 0
deChanges: 0
csChanges: 0
```