# CS–DE Věty OWNER SOURCE — Group 15

Cards 701–750 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 701 — `sentence-700`

**DE**
`Weißt du, dass Finn krank ist?`

**CS CURRENT**
`Víš, že je Finn nemocný?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 702 — `sentence-701`

**DE**
`Laut Arzt wird er bald wieder gesund.`

**CS CURRENT**
`Podle lékaře bude brzy zase v pořádku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 703 — `sentence-702`

**DE**
`Ich will meine Wohnung neu möblieren.`

**CS CURRENT**
`Chci zařídit byt.`

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
- Reason: Překlad vynechává význam opakovaného či nového zařizování vyjádřený slovem „neu“.
- Proposed replacement: Chci znovu zařídit byt.
- Audit CURRENT: Chci zařídit byt.
- Production CURRENT: Chci zařídit byt.

---

## 704 — `sentence-703`

**DE**
`Kann ich das auf Raten kaufen?`

**CS CURRENT**
`Mohu nakupovat na splátky?`

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
- Reason: „Nakupovat“ mění jednorázový nákup na opakovaný děj a chybí předmět „to“.
- Proposed replacement: Mohu to koupit na splátky?
- Audit CURRENT: Mohu nakupovat na splátky?
- Production CURRENT: Mohu nakupovat na splátky?

---

## 705 — `sentence-704`

**DE**
`Bleib im Bett, bis es dir besser geht!`

**CS CURRENT**
`Zůstaňte v posteli, dokud se nebudete cítit lépe!`

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
- Reason: Německý imperativ je v jednotném čísle neformální, ale čeština používá vykání.
- Proposed replacement: Zůstaň v posteli, dokud se nebudeš cítit lépe!
- Audit CURRENT: Zůstaňte v posteli, dokud se nebudete cítit lépe!
- Production CURRENT: Zůstaňte v posteli, dokud se nebudete cítit lépe!

---

## 706 — `sentence-705`

**DE**
`Noah hat in zwei Wochen schwimmen gelernt.`

**CS CURRENT**
`Noah se naučil plavat za dva týdny.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 707 — `sentence-706`

**DE**
`Sei mit dem Essen noch vorsichtig.`

**CS CURRENT**
`Buďte opatrní s jídlem.`

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
- Reason: Německý originál používá neformální jednotné číslo; český text používá formální nebo množné číslo.
- Proposed replacement: Buď ještě opatrný s jídlem.
- Audit CURRENT: Buďte opatrní s jídlem.
- Production CURRENT: Buďte opatrní s jídlem.

---

## 708 — `sentence-707`

**DE**
`Sprichst du Deutsch?`

**CS CURRENT**
`Mluvíš německy`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: LOW
- Type: ORTHOGRAPHY
- Source: Luna
- Field: lv
- Reason: Chybí otazník na konci otázky.
- Proposed replacement: Mluvíš německy?
- Audit CURRENT: Mluvíš německy
- Production CURRENT: Mluvíš německy

---

## 709 — `sentence-708`

**DE**
`Ja, ein bisschen.`

**CS CURRENT**
`Ano, trochu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 710 — `sentence-709`

**DE**
`Du sprichst ziemlich fließend.`

**CS CURRENT**
`Mluvíte docela plynule.`

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
- Reason: Německý originál je v neformálním jednotném čísle, zatímco čeština používá vykání.
- Proposed replacement: Mluvíš docela plynule.
- Audit CURRENT: Mluvíte docela plynule.
- Production CURRENT: Mluvíte docela plynule.

---

## 711 — `sentence-710`

**DE**
`Wo hast du Deutsch gelernt?`

**CS CURRENT**
`Kde jste se naučil německy?`

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
- Reason: Německý originál používá neformální „du“, ale český překlad používá vykání.
- Proposed replacement: Kde ses naučil německy?
- Audit CURRENT: Kde jste se naučil německy?
- Production CURRENT: Kde jste se naučil německy?

---

## 712 — `sentence-711`

**DE**
`Ich nehme seit einem Jahr Deutschstunden.`

**CS CURRENT**
`Už rok chodím na hodiny němčiny.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 713 — `sentence-712`

**DE**
`Ich suche immer Gelegenheit, Deutsch zu sprechen.`

**CS CURRENT**
`Vždy hledám příležitost domluvit se německy.`

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
- Reason: „Domluvit se“ znamená dorozumět se, nikoli pouze mluvit, což mění význam německého „sprechen“.
- Proposed replacement: Vždy hledám příležitost mluvit německy.
- Audit CURRENT: Vždy hledám příležitost domluvit se německy.
- Production CURRENT: Vždy hledám příležitost domluvit se německy.

---

## 714 — `sentence-713`

**DE**
`Ist das Buch noch vorrätig?`

**CS CURRENT**
`Je tato kniha ještě k dispozici?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 715 — `sentence-714`

**DE**
`Das Buch ist leider ausverkauft.`

**CS CURRENT**
`Kniha je bohužel vyprodaná.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 716 — `sentence-715`

**DE**
`Wann erscheint die neue Auflage?`

**CS CURRENT**
`Kdy vyjde nové vydání?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 717 — `sentence-716`

**DE**
`Womit kann ich Ihnen helfen?`

**CS CURRENT**
`Jak mohu pomoci?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 718 — `sentence-717`

**DE**
`Haben Sie ganz frische Eier?`

**CS CURRENT**
`Máte čerstvá vejce?`

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
- Reason: Překlad vynechává zesílení „ganz“, tedy požadavek na opravdu velmi čerstvá vejce.
- Proposed replacement: Máte opravdu čerstvá vejce?
- Audit CURRENT: Máte čerstvá vejce?
- Production CURRENT: Máte čerstvá vejce?

---

## 719 — `sentence-718`

**DE**
`Was kosten die?`

**CS CURRENT**
`Kolik stojí?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 720 — `sentence-719`

**DE**
`Das ist zu teuer.`

**CS CURRENT**
`Je to příliš drahé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 721 — `sentence-720`

**DE**
`Können Sie mir ein halbes Kilo abwiegen?`

**CS CURRENT**
`Dokážeš vážit půl kila?`

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
- Reason: Text používá nesprávné oslovení i sloveso; jde o zdvořilou žádost o odvážení množství.
- Proposed replacement: Můžete mi odvážit půl kila?
- Audit CURRENT: Dokážeš vážit půl kila?
- Production CURRENT: Dokážeš vážit půl kila?

---

## 722 — `sentence-721`

**DE**
`Wie viel muss ich zahlen?`

**CS CURRENT**
`Kolik musím zaplatit?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 723 — `sentence-722`

**DE**
`Wie viel kostet das Kilo?`

**CS CURRENT**
`Kolik stojí kilogram?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 724 — `sentence-723`

**DE**
`Wiegen Sie mir bitte zwei Kilo ab.`

**CS CURRENT**
`Navažte prosím dva kilogramy.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 725 — `sentence-724`

**DE**
`Haben Sie auch Karotten?`

**CS CURRENT**
`Máte taky mrkev?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 726 — `sentence-725`

**DE**
`Haben Sie gutes Rindfleisch?`

**CS CURRENT**
`Máte dobré hovězí?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 727 — `sentence-726`

**DE**
`Geben Sie mir zwei Kilo Hackfleisch.`

**CS CURRENT**
`Dejte dva kilogramy mletého masa.`

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
- Reason: V českém překladu chybí příjemce „mir“ („mi“), který je v německém originálu explicitně uveden.
- Proposed replacement: Dejte mi dva kilogramy mletého masa.
- Audit CURRENT: Dejte dva kilogramy mletého masa.
- Production CURRENT: Dejte dva kilogramy mletého masa.

---

## 728 — `sentence-727`

**DE**
`Ein Laib Brot, bitte, aber nicht zu knusprig.`

**CS CURRENT**
`Jeden bochník chleba, prosím, ale ne příliš tvrdý.`

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
- Reason: „Knusprig“ znamená křupavý; „tvrdý“ označuje tvrdost, nikoli křupavost.
- Proposed replacement: Jeden bochník chleba, prosím, ale ne příliš křupavý.
- Audit CURRENT: Jeden bochník chleba, prosím, ale ne příliš tvrdý.
- Production CURRENT: Jeden bochník chleba, prosím, ale ne příliš tvrdý.

---

## 729 — `sentence-728`

**DE**
`Das Brot ist frisch gebacken.`

**CS CURRENT**
`Chléb je čerstvě upečený.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 730 — `sentence-729`

**DE**
`Was für Obst haben Sie heute?`

**CS CURRENT**
`Jaké ovoce máte dnes?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 731 — `sentence-730`

**DE**
`Was kosten die Äpfel?`

**CS CURRENT**
`Kolik stojí jablka?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 732 — `sentence-731`

**DE**
`Dann nehme ich zwei Kilo Äpfel.`

**CS CURRENT**
`Pak si vezmu dva kilogramy jablek.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 733 — `sentence-732`

**DE**
`Die Birnen sind sehr teuer.`

**CS CURRENT**
`Hrušky jsou velmi drahé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 734 — `sentence-733`

**DE**
`Können Sie mir alles nach Hause liefern?`

**CS CURRENT**
`Můžete vše doručit až domů?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 735 — `sentence-734`

**DE**
`Haben Sie Reis?`

**CS CURRENT**
`Máš rýži?`

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
- Reason: Německý originál používá zdvořilé „Sie“, ale český překlad neformální jednotné číslo.
- Proposed replacement: Máte rýži?
- Audit CURRENT: Máš rýži?
- Production CURRENT: Máš rýži?

---

## 736 — `sentence-735`

**DE**
`Geben Sie mir bitte ein Kilo Reis.`

**CS CURRENT**
`Dejte mi kilogram rýže, prosím.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 737 — `sentence-736`

**DE**
`Danke, diesmal nicht.`

**CS CURRENT**
`Díky, tentokrát ne.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 738 — `sentence-737`

**DE**
`Wie viel kostet dieser Teppich?`

**CS CURRENT**
`Kolik stojí tento koberec?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 739 — `sentence-738`

**DE**
`Können Sie die Möbel in meine Wohnung liefern?`

**CS CURRENT**
`Můžete dodat nábytek do bytu?`

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
- Reason: Překlad vynechává příjemce „mi“ a přivlastnění „mé“, které jsou v německém originálu uvedeny.
- Proposed replacement: Můžete mi doručit nábytek do mého bytu?
- Audit CURRENT: Můžete dodat nábytek do bytu?
- Production CURRENT: Můžete dodat nábytek do bytu?

---

## 740 — `sentence-739`

**DE**
`Bitte an der Kasse zahlen.`

**CS CURRENT**
`Plaťte prosím na pokladně.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 741 — `sentence-740`

**DE**
`Bitte, machen Sie die Rechnung.`

**CS CURRENT**
`Prosím o vystavení faktury.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 742 — `sentence-741`

**DE**
`Was kostet das Meter?`

**CS CURRENT**
`Kolik stojí metr?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 743 — `sentence-742`

**DE**
`Dieser Stoff gefällt mir.`

**CS CURRENT**
`Miluji tuto látku.`

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
- Reason: „Miluji“ znamená milovat a je výrazně silnější než německé „gefällt mir“ („líbí se mi“).
- Proposed replacement: Tato látka se mi líbí.
- Audit CURRENT: Miluji tuto látku.
- Production CURRENT: Miluji tuto látku.

---

## 744 — `sentence-743`

**DE**
`Schneiden Sie mir bitte drei Meter ab.`

**CS CURRENT**
`Prosím, uřízněte tři metry.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: U látky je přirozené „odstřihnout“ a chybí příjemce „mi“ z německého originálu.
- Proposed replacement: Prosím, odstřihněte mi tři metry.
- Audit CURRENT: Prosím, uřízněte tři metry.
- Production CURRENT: Prosím, uřízněte tři metry.

---

## 745 — `sentence-744`

**DE**
`Haben Sie auch andere Muster?`

**CS CURRENT**
`Máte jiné vzorky?`

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
- Reason: „Muster“ zde znamená vzory či dezény, nikoli „vzorky“ jako exempláře nebo samples.
- Proposed replacement: Máte také jiné vzory?
- Audit CURRENT: Máte jiné vzorky?
- Production CURRENT: Máte jiné vzorky?

---

## 746 — `sentence-745`

**DE**
`Diese Farbe gefällt mir nicht.`

**CS CURRENT**
`Tato barva se mi nelíbí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 747 — `sentence-746`

**DE**
`Geben Sie mir eine hellere.`

**CS CURRENT**
`Dejte jasnější.`

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
- Reason: U barvy „heller“ znamená světlejší, ne jasnější; současně chybí příklonka „mi“.
- Proposed replacement: Dejte mi světlejší.
- Audit CURRENT: Dejte jasnější.
- Production CURRENT: Dejte jasnější.

---

## 748 — `sentence-747`

**DE**
`Was kosten diese Socken?`

**CS CURRENT**
`Kolik jsou tyto ponožky?`

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
- Reason: České „Kolik jsou“ je v tomto významu negramatické; cena se vyjadřuje slovesem „stát“.
- Proposed replacement: Kolik stojí tyto ponožky?
- Audit CURRENT: Kolik jsou tyto ponožky?
- Production CURRENT: Kolik jsou tyto ponožky?

---

## 749 — `sentence-748`

**DE**
`Welche Handschuhe wünschen Sie?`

**CS CURRENT**
`Jaké chceš rukavice?`

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
- Reason: Německý originál používá zdvořilé „Sie“, ale český překlad neformální „chceš“.
- Proposed replacement: Jaké rukavice si přejete?
- Audit CURRENT: Jaké chceš rukavice?
- Production CURRENT: Jaké chceš rukavice?

---

## 750 — `sentence-749`

**DE**
`Die sind mir etwas zu eng.`

**CS CURRENT**
`Jsou mi trochu těsné.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
