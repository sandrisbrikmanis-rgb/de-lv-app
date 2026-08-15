# CS–DE Slovesa OWNER SOURCE — Group 01

Verbs 001–050 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs. DE = STRICT READ-ONLY.

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
