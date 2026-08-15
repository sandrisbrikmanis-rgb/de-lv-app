# CS–DE Věty OWNER SOURCE — Group 08

Cards 351–400 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 351 — `sentence-350`

**DE**
`So ist es üblich.`

**CS CURRENT**
`Je to přijato.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Üblich“ znamená běžné nebo obvyklé, ne přijímané.
- Proposed replacement: Tak se to běžně dělá.
- Audit CURRENT: Je to přijato.
- Production CURRENT: Je to přijato.

---

## 352 — `sentence-351`

**DE**
`Deine Uhr geht nach.`

**CS CURRENT**
`Vaše hodinky jsou pozadu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Nesouhlasí osoba a vykání; německé „deine“ je neformální jednotné číslo.
- Proposed replacement: Tvoje hodinky jdou pozdě.
- Audit CURRENT: Vaše hodinky jsou pozadu.
- Production CURRENT: Vaše hodinky jsou pozadu.

---

## 353 — `sentence-352`

**DE**
`Wie viel Uhr ist es?`

**CS CURRENT**
`Kolik je hodin?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 354 — `sentence-353`

**DE**
`Um acht Uhr früh.`

**CS CURRENT**
`V osm hodin ráno.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 355 — `sentence-354`

**DE**
`umso mehr`

**CS CURRENT**
`Tím více`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 356 — `sentence-355`

**DE**
`Rechts um!`

**CS CURRENT**
`Odbočte doprava!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: Jde o povel k otočení vpravo, ne obecně o odbočení doprava.
- Proposed replacement: Vpravo v bok!
- Audit CURRENT: Odbočte doprava!
- Production CURRENT: Odbočte doprava!

---

## 357 — `sentence-356`

**DE**
`Und ob!`

**CS CURRENT**
`A co ještě!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: Německý obrat vyjadřuje důrazný souhlas, nikoli otázku nebo další požadavek.
- Proposed replacement: A jak!
- Audit CURRENT: A co ještě!
- Production CURRENT: A co ještě!

---

## 358 — `sentence-357`

**DE**
`und zwar`

**CS CURRENT**
`A to`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: LOW
- Type: NATURALNESS
- Source: Luna
- Field: lv
- Reason: „A to“ je možné, ale jako ustálený ekvivalent „und zwar“ je přirozenější „a sice“.
- Proposed replacement: A sice
- Audit CURRENT: A to
- Production CURRENT: A to

---

## 359 — `sentence-358`

**DE**
`Auf Unkosten von...`

**CS CURRENT**
`Na úkor...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 360 — `sentence-359`

**DE**
`Er saß unter den Zuschauern.`

**CS CURRENT**
`Seděl mezi publikem.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 361 — `sentence-360`

**DE**
`Keine Ursache!`

**CS CURRENT**
`Nic za nic!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Keine Ursache!“ je zdvořilá odpověď na poděkování; „nic za nic“ znamená něco jiného.
- Proposed replacement: Není zač!
- Audit CURRENT: Nic za nic!
- Production CURRENT: Nic za nic!

---

## 362 — `sentence-361`

**DE**
`Es geschah, wie verabredet.`

**CS CURRENT**
`Stalo se tak, jak bylo domluveno.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 363 — `sentence-362`

**DE**
`Rauchen verboten!`

**CS CURRENT**
`Kouření je zakázáno!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 364 — `sentence-363`

**DE**
`Falsch verbunden!`

**CS CURRENT**
`Špatné připojení!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Připojení“ označuje technické připojení; telefonní obrat je „špatné spojení“ nebo „špatně spojeno“.
- Proposed replacement: Špatné spojení!
- Audit CURRENT: Špatné připojení!
- Production CURRENT: Špatné připojení!

---

## 365 — `sentence-364`

**DE**
`Eintritt verboten!`

**CS CURRENT**
`Vstup zakázán!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 366 — `sentence-365`

**DE**
`Verstehen Sie mich?`

**CS CURRENT**
`Rozumíš mi?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Německé „Sie“ vyžaduje české vykání, nikoli neformální jednotné číslo.
- Proposed replacement: Rozumíte mi?
- Audit CURRENT: Rozumíš mi?
- Production CURRENT: Rozumíš mi?

---

## 367 — `sentence-366`

**DE**
`Er versteht nichts davon.`

**CS CURRENT**
`Nic z toho nechápe.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 368 — `sentence-367`

**DE**
`Seine Ansicht vertreten.`

**CS CURRENT**
`Obhajujte svůj názor.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Německý infinitiv byl změněn na rozkaz a „seine“ na „svůj“; jde o jinou osobu i význam.
- Proposed replacement: Zastávat jeho názor.
- Audit CURRENT: Obhajujte svůj názor.
- Production CURRENT: Obhajujte svůj názor.

---

## 369 — `sentence-368`

**DE**
`Streit verursachen.`

**CS CURRENT**
`Vyvolat hádku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 370 — `sentence-369`

**DE**
`Viel besser.`

**CS CURRENT**
`Mnohem lepší.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 371 — `sentence-370`

**DE**
`Zu viel.`

**CS CURRENT**
`Příliš mnoho.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 372 — `sentence-371`

**DE**
`Vom Hörensagen.`

**CS CURRENT**
`Po vyslechnutí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Vom Hörensagen“ znamená z doslechu, ne po vyslechnutí.
- Proposed replacement: Z doslechu.
- Audit CURRENT: Po vyslechnutí.
- Production CURRENT: Po vyslechnutí.

---

## 373 — `sentence-372`

**DE**
`Von Zeit zu Zeit.`

**CS CURRENT**
`Čas od času.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 374 — `sentence-373`

**DE**
`Von Beruf.`

**CS CURRENT**
`Podle povolání.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Von Beruf“ znamená povoláním; „podle povolání“ má jiný význam.
- Proposed replacement: Povoláním.
- Audit CURRENT: Podle povolání.
- Production CURRENT: Podle povolání.

---

## 375 — `sentence-374`

**DE**
`Er ist Berliner von Geburt.`

**CS CURRENT**
`Je rodem Berlíňan.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 376 — `sentence-375`

**DE**
`Er steht vor dem Fenster.`

**CS CURRENT**
`Stojí u okna.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: Německé „vor dem Fenster“ znamená před oknem, ne u okna.
- Proposed replacement: Stojí před oknem.
- Audit CURRENT: Stojí u okna.
- Production CURRENT: Stojí u okna.

---

## 377 — `sentence-376`

**DE**
`Vor Sonnenaufgang.`

**CS CURRENT**
`Před východem slunce.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 378 — `sentence-377`

**DE**
`Vor vierzehn Tagen.`

**CS CURRENT**
`Před dvěma týdny.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: Překlad nahrazuje přesný údaj čtrnáct dní přibližným údajem dva týdny.
- Proposed replacement: Před čtrnácti dny.
- Audit CURRENT: Před dvěma týdny.
- Production CURRENT: Před dvěma týdny.

---

## 379 — `sentence-378`

**DE**
`Vor Freude.`

**CS CURRENT**
`Pro zábavu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Vor Freude“ znamená radostí, nikoli pro zábavu.
- Proposed replacement: Radostí.
- Audit CURRENT: Pro zábavu.
- Production CURRENT: Pro zábavu.

---

## 380 — `sentence-379`

**DE**
`Vor allem.`

**CS CURRENT**
`Především. • Především`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: LOW
- Type: STUDY
- Source: Luna
- Field: lv
- Reason: Český text obsahuje dvakrát stejný překlad místo jediné smysluplné položky.
- Proposed replacement: Především.
- Audit CURRENT: Především. • Především
- Production CURRENT: Především. • Především

---

## 381 — `sentence-380`

**DE**
`Im Voraus.`

**CS CURRENT**
`Dříve.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Im Voraus“ znamená předem, nikoli obecně dříve.
- Proposed replacement: Předem.
- Audit CURRENT: Dříve.
- Production CURRENT: Dříve.

---

## 382 — `sentence-381`

**DE**
`Unter der Voraussetzung, dass...`

**CS CURRENT**
`Za předpokladu, že...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 383 — `sentence-382`

**DE**
`Unter dem Vorbehalt.`

**CS CURRENT**
`Podmíněně.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Unter dem Vorbehalt“ znamená s výhradou nebo s výhradou podmínek.
- Proposed replacement: S výhradou.
- Audit CURRENT: Podmíněně.
- Production CURRENT: Podmíněně.

---

## 384 — `sentence-383`

**DE**
`Vorhanden sein.`

**CS CURRENT**
`Být. • Buďte přítomni • Buďte k dispozici`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Dvě položky jsou chybně v rozkazovacím způsobu a první „být“ je příliš obecné.
- Proposed replacement: Být k dispozici • Být přítomen
- Audit CURRENT: Být. • Buďte přítomni • Buďte k dispozici
- Production CURRENT: Být. • Buďte přítomni • Buďte k dispozici

---

## 385 — `sentence-384`

**DE**
`In der vorigen Woche.`

**CS CURRENT**
`Minulý týden.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 386 — `sentence-385`

**DE**
`Vorkehrungen treffen.`

**CS CURRENT**
`Přijměte opatření na ochranu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Infinitiv byl změněn na rozkaz a byl přidán význam ochrany, který v německém výrazu není.
- Proposed replacement: Učinit opatření.
- Audit CURRENT: Přijměte opatření na ochranu.
- Production CURRENT: Přijměte opatření na ochranu.

---

## 387 — `sentence-386`

**DE**
`Sie kommt mir bekannt vor.`

**CS CURRENT**
`Připadá mi povědomá.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 388 — `sentence-387`

**DE**
`Er hat Vorliebe für Literatur.`

**CS CURRENT**
`Má velmi rád literaturu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 389 — `sentence-388`

**DE**
`Heute Vormittag.`

**CS CURRENT**
`Dnes ráno. • Dnes ráno`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Vormittag“ znamená dopoledne, ne pouze ráno; navíc je překlad duplicitní.
- Proposed replacement: Dnes dopoledne.
- Audit CURRENT: Dnes ráno. • Dnes ráno
- Production CURRENT: Dnes ráno. • Dnes ráno

---

## 390 — `sentence-389`

**DE**
`Von vorn.`

**CS CURRENT**
`Zepředu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 391 — `sentence-390`

**DE**
`Nach vorn.`

**CS CURRENT**
`Vpřed.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 392 — `sentence-391`

**DE**
`Von vornherein.`

**CS CURRENT**
`Na úplném začátku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 393 — `sentence-392`

**DE**
`Im Vorteil sein.`

**CS CURRENT**
`Buďte v lepší pozici.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Infinitiv byl změněn na rozkaz a „ve výhodě“ je přesnější než „v lepší pozici“.
- Proposed replacement: Být ve výhodě.
- Audit CURRENT: Buďte v lepší pozici.
- Production CURRENT: Buďte v lepší pozici.

---

## 394 — `sentence-393`

**DE**
`Wach sein.`

**CS CURRENT**
`Být vzhůru.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 395 — `sentence-394`

**DE**
`Wach werden.`

**CS CURRENT**
`Probuď se.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Německý infinitiv byl chybně přeložen českým rozkazem.
- Proposed replacement: Probudit se.
- Audit CURRENT: Probuď se.
- Production CURRENT: Probuď se.

---

## 396 — `sentence-395`

**DE**
`Auf Wache sein.`

**CS CURRENT**
`Stůj na stráži.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Německý výraz je infinitivní fráze, nikoli rozkaz „stůj“.
- Proposed replacement: Být na stráži.
- Audit CURRENT: Stůj na stráži.
- Production CURRENT: Stůj na stráži.

---

## 397 — `sentence-396`

**DE**
`Während eines Jahres.`

**CS CURRENT**
`V průběhu roku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 398 — `sentence-397`

**DE**
`Während des Krieges.`

**CS CURRENT**
`Během války.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 399 — `sentence-398`

**DE**
`Gegen eine Wand reden.`

**CS CURRENT**
`Marné řeči.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: Jde o ustálené rčení „mluvit do zdi“, ne o obecné označení marných řečí.
- Proposed replacement: Mluvit do zdi.
- Audit CURRENT: Marné řeči.
- Production CURRENT: Marné řeči.

---

## 400 — `sentence-399`

**DE**
`Hier haben die Wände Ohren.`

**CS CURRENT**
`Tady mají stěny uši.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
