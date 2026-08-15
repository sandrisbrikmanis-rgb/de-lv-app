# CS–DE Věty OWNER SOURCE — Group 13

Cards 601–650 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 601 — `sentence-600`

**DE**
`Hol mir bitte ein Taxi, ich verpasse sonst den Zug!`

**CS CURRENT**
`Zavolej si taxi, prosím, jinak zmeškám vlak!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: „Zavolej si taxi“ znamená zavolej taxi pro sebe; německé „mir“ znamená pro mě.
- Proposed replacement: Zavolej mi prosím taxi, jinak zmeškám vlak!
- Audit CURRENT: Zavolej si taxi, prosím, jinak zmeškám vlak!
- Production CURRENT: Zavolej si taxi, prosím, jinak zmeškám vlak!

---

## 602 — `sentence-601`

**DE**
`Fahr bitte zum Bahnhof!`

**CS CURRENT**
`Prosím, vezměte mě na stanici!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: Překlad přidává objekt „mě“, používá vykání místo tykání a „stanice“ není přirozené pro Bahnhof.
- Proposed replacement: Jeď prosím na nádraží!
- Audit CURRENT: Prosím, vezměte mě na stanici!
- Production CURRENT: Prosím, vezměte mě na stanici!

---

## 603 — `sentence-602`

**DE**
`Ich muss mich beeilen.`

**CS CURRENT**
`Musím si pospíšit.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 604 — `sentence-603`

**DE**
`Ist der Schalter schon offen?`

**CS CURRENT**
`Už je otevřená pokladna?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 605 — `sentence-604`

**DE**
`Eine Fahrkarte nach Köln, bitte.`

**CS CURRENT**
`Jeden lístek do Kolína, prosím.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 606 — `sentence-605`

**DE**
`Wann fährt der Zug ab?`

**CS CURRENT**
`Kdy jede vlak?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 607 — `sentence-606`

**DE**
`Der Zug fährt gleich ab.`

**CS CURRENT**
`Vlak brzy odjíždí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 608 — `sentence-607`

**DE**
`Muss ich in Koblenz umsteigen?`

**CS CURRENT**
`Musím v Koblenz změnit místo?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: „Umsteigen“ znamená přestoupit, nikoli změnit místo; název Koblenz má po „v“ lokál.
- Proposed replacement: Musím v Koblenzi přestoupit?
- Audit CURRENT: Musím v Koblenz změnit místo?
- Production CURRENT: Musím v Koblenz změnit místo?

---

## 609 — `sentence-608`

**DE**
`Ja, dort musst du umsteigen.`

**CS CURRENT**
`Ano, musíte si tam přesednout.`

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
- Reason: Německé „du“ vyžaduje tykání a „přesednout si“ znamená změnit sedadlo, ne přestoupit.
- Proposed replacement: Ano, tam musíš přestoupit.
- Audit CURRENT: Ano, musíte si tam přesednout.
- Production CURRENT: Ano, musíte si tam přesednout.

---

## 610 — `sentence-609`

**DE**
`Ist dieser Platz frei?`

**CS CURRENT**
`Je toto místo k dispozici?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 611 — `sentence-610`

**DE**
`Nein, hier sitzt niemand.`

**CS CURRENT**
`Ne, nikdo tu nesedí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 612 — `sentence-611`

**DE**
`Wo ist der Bahnsteigkartenautomat?`

**CS CURRENT**
`Kde je automat na jízdenky na nástupiště?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 613 — `sentence-612`

**DE**
`Stell mein Handgepäck ins Gepäcknetz.`

**CS CURRENT**
`Dejte mi příruční zavazadlo do mřížky.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: Překlad mění „moje“ na „mi“, vyká a „dej mi“ mění význam; Gepäcknetz není obecná mřížka.
- Proposed replacement: Dej moje příruční zavazadlo do sítě na zavazadla.
- Audit CURRENT: Dejte mi příruční zavazadlo do mřížky.
- Production CURRENT: Dejte mi příruční zavazadlo do mřížky.

---

## 614 — `sentence-613`

**DE**
`Kann ich das Fenster aufmachen?`

**CS CURRENT**
`Smím otevřít okno?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 615 — `sentence-614`

**DE**
`Es zieht, schließ bitte das Fenster!`

**CS CURRENT**
`Protáhněte se, prosím, zavřete okno!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: „Es zieht“ znamená „táhne“, nikoli „protáhněte se“; imperativ je v němčině v tykání.
- Proposed replacement: Táhne, prosím, zavři okno!
- Audit CURRENT: Protáhněte se, prosím, zavřete okno!
- Production CURRENT: Protáhněte se, prosím, zavřete okno!

---

## 616 — `sentence-615`

**DE**
`Welche ist die nächste Station?`

**CS CURRENT**
`Jaká je další zastávka?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 617 — `sentence-616`

**DE**
`Wie lange hält der Zug?`

**CS CURRENT**
`Jak dlouho vlak stojí?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 618 — `sentence-617`

**DE**
`Wo muss ich umsteigen?`

**CS CURRENT**
`Kam mám přestoupit?`

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
- Reason: Německé „wo“ se ptá na místo přestupu; „kam“ se ptá na cílový směr nebo spoj.
- Proposed replacement: Kde musím přestoupit?
- Audit CURRENT: Kam mám přestoupit?
- Production CURRENT: Kam mám přestoupit?

---

## 619 — `sentence-618`

**DE**
`Der Zug hat Verspätung.`

**CS CURRENT**
`Vlak má zpoždění.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 620 — `sentence-619`

**DE**
`Dieser Wagen ist für Nichtraucher.`

**CS CURRENT**
`Tento kočár je nekuřácký.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: „Kočár“ znamená kočárek nebo kočár; vlakový Wagen se česky překládá jako „vůz“.
- Proposed replacement: Tento vůz je pro nekuřáky.
- Audit CURRENT: Tento kočár je nekuřácký.
- Production CURRENT: Tento kočár je nekuřácký.

---

## 621 — `sentence-620`

**DE**
`Wir fahren jetzt über die Grenze.`

**CS CURRENT**
`Teď jedeme přes hranice.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 622 — `sentence-621`

**DE**
`Hast du etwas zu verzollen?`

**CS CURRENT**
`Máte něco na vymazání?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: „Zu verzollen“ znamená „k proclení“; „na vymazání“ je významově nesprávné a navíc mění tykání na vykání.
- Proposed replacement: Máte něco k proclení?
- Audit CURRENT: Máte něco na vymazání?
- Production CURRENT: Máte něco na vymazání?

---

## 623 — `sentence-622`

**DE**
`Wir sind in Berlin angekommen.`

**CS CURRENT**
`Dorazili jsme do Berlína.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 624 — `sentence-623`

**DE**
`Kannst du mir ein gutes Hotel empfehlen?`

**CS CURRENT**
`Můžete mi doporučit dobrý hotel?`

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
- Reason: Německé „du“ vyžaduje české tykání „můžeš“, ne vykání „můžete“.
- Proposed replacement: Můžeš mi doporučit dobrý hotel?
- Audit CURRENT: Můžete mi doporučit dobrý hotel?
- Production CURRENT: Můžete mi doporučit dobrý hotel?

---

## 625 — `sentence-624`

**DE**
`Haben Sie freie Zimmer?`

**CS CURRENT**
`Máte volné pokoje?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 626 — `sentence-625`

**DE**
`Ein Zimmer mit zwei Betten, bitte.`

**CS CURRENT**
`Pokoj se dvěma lůžky, prosím.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 627 — `sentence-626`

**DE**
`Was kostet das Zimmer pro Nacht?`

**CS CURRENT**
`Kolik stojí pokoj za noc?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 628 — `sentence-627`

**DE**
`Morgen reise ich ab. Weck mich um sieben Uhr!`

**CS CURRENT**
`Zítra odjíždím. Vzbuď mě v sedm!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 629 — `sentence-628`

**DE**
`Die Rechnung, bitte!`

**CS CURRENT**
`Bille, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: ORTHOGRAPHY
- Source: Luna
- Field: lv
- Reason: „Bille“ není správné české slovo; německé Rechnung se v tomto kontextu překládá jako „účet“.
- Proposed replacement: Účet, prosím!
- Audit CURRENT: Bille, prosím!
- Production CURRENT: Bille, prosím!

---

## 630 — `sentence-629`

**DE**
`Wo ist die Stadtbibliothek?`

**CS CURRENT**
`Kde je městská knihovna?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 631 — `sentence-630`

**DE**
`Wann hat das Museum geöffnet?`

**CS CURRENT**
`Kdy je muzeum otevřeno?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 632 — `sentence-631`

**DE**
`Wollen wir ins Museum gehen?`

**CS CURRENT**
`Půjdeme do muzea?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 633 — `sentence-632`

**DE**
`Fahren wir mit dem Bus oder der U-Bahn?`

**CS CURRENT**
`Jedeme autobusem nebo metrem?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 634 — `sentence-633`

**DE**
`Wo ist die nächste Bushaltestelle?`

**CS CURRENT**
`Kde je nejbližší autobusová zastávka?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 635 — `sentence-634`

**DE**
`Ich habe großen Hunger.`

**CS CURRENT**
`Mám velký hlad.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 636 — `sentence-635`

**DE**
`Gehen wir zusammen essen?`

**CS CURRENT**
`Půjdeme spolu jíst?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 637 — `sentence-636`

**DE**
`Kellner, die Speisekarte, bitte!`

**CS CURRENT**
`Číšníci, menu, prosím!`

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
- Reason: Oslovení „Kellner“ je jednotné číslo; české „číšníci“ je množné číslo a není ve správném pádě.
- Proposed replacement: Číšníku, jídelní lístek, prosím!
- Audit CURRENT: Číšníci, menu, prosím!
- Production CURRENT: Číšníci, menu, prosím!

---

## 638 — `sentence-637`

**DE**
`Ist der Fisch frisch?`

**CS CURRENT**
`Je ryba čerstvá?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 639 — `sentence-638`

**DE**
`Das schmeckt ausgezeichnet!`

**CS CURRENT**
`Chutná skvěle!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 640 — `sentence-639`

**DE**
`Kellner, zahlen bitte!`

**CS CURRENT**
`Číšníci, prosím zaplaťte!`

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
- Reason: Oslovení má být jednotné „číšníku“ a německé „zahlen“ zde znamená „zaplatíme“, ne příkaz číšníkovi.
- Proposed replacement: Číšníku, zaplatíme, prosím!
- Audit CURRENT: Číšníci, prosím zaplaťte!
- Production CURRENT: Číšníci, prosím zaplaťte!

---

## 641 — `sentence-640`

**DE**
`Ich gehe ins Café einen Kaffee trinken.`

**CS CURRENT**
`Půjdu do kavárny vypít kávu.`

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
- Reason: „Vypít kávu“ je doslovné a méně přirozené; běžná česká kolokace je „jít do kavárny na kávu“.
- Proposed replacement: Půjdu do kavárny na kávu.
- Audit CURRENT: Půjdu do kavárny vypít kávu.
- Production CURRENT: Půjdu do kavárny vypít kávu.

---

## 642 — `sentence-641`

**DE**
`Willst du mitkommen?`

**CS CURRENT**
`Chceš se přidat?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 643 — `sentence-642`

**DE**
`Eine Tasse Kaffee mit Milch, bitte!`

**CS CURRENT**
`Šálek kávy s mlékem, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 644 — `sentence-643`

**DE**
`Bitte schneller, ich habe es eilig!`

**CS CURRENT**
`Rychleji prosím, musím si pospíšit!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 645 — `sentence-644`

**DE**
`Lass deinen Kaffee nicht kalt werden!`

**CS CURRENT**
`Nenechte kávu vychladnout!`

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
- Reason: Německé „deinen“ ukazuje na tykání; české „nenechte“ je vykání nebo množné číslo.
- Proposed replacement: Nenech kávu vychladnout!
- Audit CURRENT: Nenechte kávu vychladnout!
- Production CURRENT: Nenechte kávu vychladnout!

---

## 646 — `sentence-645`

**DE**
`Haben Sie etwas Erfrischendes?`

**CS CURRENT**
`Máte něco osvěžujícího?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 647 — `sentence-646`

**DE**
`Eine Portion Eis, bitte!`

**CS CURRENT**
`Porce zmrzliny, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 648 — `sentence-647`

**DE**
`Heute Morgen habe ich einen Brief bekommen.`

**CS CURRENT**
`Dnes ráno jsem dostal dopis.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 649 — `sentence-648`

**DE**
`Ich muss ihm gleich schreiben.`

**CS CURRENT**
`Teď mu musím napsat.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 650 — `sentence-649`

**DE**
`Wo ist der nächste Briefkasten?`

**CS CURRENT**
`Kde je nejbližší poštovní schránka?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
