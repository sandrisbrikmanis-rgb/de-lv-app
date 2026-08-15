# CS–DE Věty OWNER SOURCE — Group 16

Cards 751–796 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 751 — `sentence-750`

**DE**
`So, nun passen sie gut.`

**CS CURRENT**
`Takže teď to funguje dobře.`

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
- Reason: „Passen“ zde znamená dobře sedět (např. oděv), ne fungovat; navíc „sie“ je množné číslo.
- Proposed replacement: Tak, teď dobře sedí.
- Audit CURRENT: Takže teď to funguje dobře.
- Production CURRENT: Takže teď to funguje dobře.

---

## 752 — `sentence-751`

**DE**
`Kannst du mir einen guten Schneider empfehlen?`

**CS CURRENT**
`Můžete mi doporučit dobrého krejčího?`

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
- Reason: Německé „du“ odpovídá českému tykání, nikoli vykání „můžete“.
- Proposed replacement: Můžeš mi doporučit dobrého krejčího?
- Audit CURRENT: Můžete mi doporučit dobrého krejčího?
- Production CURRENT: Můžete mi doporučit dobrého krejčího?

---

## 753 — `sentence-752`

**DE**
`Ich will einen Anzug bestellen.`

**CS CURRENT**
`Chci si objednat oblek.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 754 — `sentence-753`

**DE**
`Wann wird er fertig sein?`

**CS CURRENT**
`Kdy to bude hotové?`

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
- Reason: „Er“ odkazuje na předchozí mužský „Anzug“; české „to“ mění rod i referenci.
- Proposed replacement: Kdy bude hotový?
- Audit CURRENT: Kdy to bude hotové?
- Production CURRENT: Kdy to bude hotové?

---

## 755 — `sentence-754`

**DE**
`Der Anzug sitzt gut.`

**CS CURRENT**
`Oblek dobře sedí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 756 — `sentence-755`

**DE**
`Die Hose ist zu lang.`

**CS CURRENT**
`Kalhoty jsou příliš dlouhé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 757 — `sentence-756`

**DE**
`Bitte reinigen und bügeln Sie ihn!`

**CS CURRENT**
`Prosím vyčistěte a vyžehlete!`

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
- Reason: Česká věta vynechává předmět „ihn“; je třeba uvést zájmeno „ho“.
- Proposed replacement: Prosím, vyčistěte ho a vyžehlete ho!
- Audit CURRENT: Prosím vyčistěte a vyžehlete!
- Production CURRENT: Prosím vyčistěte a vyžehlete!

---

## 758 — `sentence-757`

**DE**
`Wann wird das Kleid fertig sein?`

**CS CURRENT**
`Kdy budou šaty hotové?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 759 — `sentence-758`

**DE**
`Die Schuhe sind zu eng.`

**CS CURRENT**
`Boty jsou příliš těsné.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 760 — `sentence-759`

**DE**
`Können Sie die Schuhe heute reparieren?`

**CS CURRENT**
`Můžete si dnes opravit boty?`

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
- Reason: „Opravit si“ znamená opravit si je pro sebe; německá věta žádá opravu bot zákazníka.
- Proposed replacement: Můžete mi dnes opravit boty?
- Audit CURRENT: Můžete si dnes opravit boty?
- Production CURRENT: Můžete si dnes opravit boty?

---

## 761 — `sentence-760`

**DE**
`Wann kann ich die Schuhe abholen?`

**CS CURRENT**
`Kdy mohu přinést boty?`

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
- Reason: „Abholen“ znamená vyzvednout, nikoli přinést.
- Proposed replacement: Kdy si mohu vyzvednout boty?
- Audit CURRENT: Kdy mohu přinést boty?
- Production CURRENT: Kdy mohu přinést boty?

---

## 762 — `sentence-761`

**DE**
`Meine Armbanduhr funktioniert nicht.`

**CS CURRENT**
`Moje náramkové hodinky nefungují.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 763 — `sentence-762`

**DE**
`Sie geht fünf Minuten vor.`

**CS CURRENT**
`Je pět minut dřív.`

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
- Reason: U hodinek se říká „jdou napřed“; současná formulace nevyjadřuje, že hodinky předcházejí skutečný čas.
- Proposed replacement: Jdou pět minut napřed.
- Audit CURRENT: Je pět minut dřív.
- Production CURRENT: Je pět minut dřív.

---

## 764 — `sentence-763`

**DE**
`Bist du kurzsichtig oder weitsichtig?`

**CS CURRENT**
`Jste krátkozraký nebo dalekozraký?`

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
- Reason: Německé „du“ odpovídá českému tykání „jsi“, ne vykání „jste“.
- Proposed replacement: Jsi krátkozraký nebo dalekozraký?
- Audit CURRENT: Jste krátkozraký nebo dalekozraký?
- Production CURRENT: Jste krátkozraký nebo dalekozraký?

---

## 765 — `sentence-764`

**DE**
`Ich möchte eine Brille kaufen.`

**CS CURRENT**
`Chci si koupit brýle.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 766 — `sentence-765`

**DE**
`Können Sie meine Brille reparieren?`

**CS CURRENT**
`Můžete mi opravit brýle?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 767 — `sentence-766`

**DE**
`Das dauert nur eine Viertelstunde.`

**CS CURRENT**
`Zabere to jen patnáct minut.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 768 — `sentence-767`

**DE**
`Der Preis ist mir zu hoch.`

**CS CURRENT**
`Cena je pro mě příliš vysoká.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 769 — `sentence-768`

**DE**
`Ich brauche zwei Fotos für meinen Pass.`

**CS CURRENT**
`Potřebuji dvě pasové fotografie.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 770 — `sentence-769`

**DE**
`Bitte packen Sie es ein und schicken Sie es mir nach Hause.`

**CS CURRENT**
`Prosím zabalte a pošlete domů.`

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
- Reason: Chybí oba předměty i příjemce „mi“; „pošlete domů“ je významově neúplné.
- Proposed replacement: Prosím, zabalte to a pošlete mi to domů.
- Audit CURRENT: Prosím zabalte a pošlete domů.
- Production CURRENT: Prosím zabalte a pošlete domů.

---

## 771 — `sentence-770`

**DE**
`Wir haben feste Preise.`

**CS CURRENT**
`Máme pevné ceny.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 772 — `sentence-771`

**DE**
`Bitte, fotografieren Sie mich.`

**CS CURRENT**
`Prosím, vyfoťte mě.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 773 — `sentence-772`

**DE**
`Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!`

**CS CURRENT**
`Sedněte si, dívejte se přímo do kamery a nehýbejte se!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 774 — `sentence-773`

**DE**
`Wann kann ich das Probebild sehen?`

**CS CURRENT**
`Kdy mohu vidět vzorek?`

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
- Reason: „Probebild“ je zkušební nebo náhledová fotografie, ne obecný „vzorek“.
- Proposed replacement: Kdy mohu vidět zkušební fotografii?
- Audit CURRENT: Kdy mohu vidět vzorek?
- Production CURRENT: Kdy mohu vidět vzorek?

---

## 775 — `sentence-774`

**DE**
`Wann sind die Fotos fertig?`

**CS CURRENT**
`Kdy budou fotografie hotové?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 776 — `sentence-775`

**DE**
`Die Aufnahme ist gelungen.`

**CS CURRENT**
`Fotka se povedla.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 777 — `sentence-776`

**DE**
`Die Fotos sind gut geworden.`

**CS CURRENT**
`Fotky dopadly dobře.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 778 — `sentence-777`

**DE**
`Können Sie das Foto auch vergrößern?`

**CS CURRENT**
`Můžete také zvětšit fotografii?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 779 — `sentence-778`

**DE**
`Sind diese Steine echt?`

**CS CURRENT**
`Jsou tyto kameny pravé?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 780 — `sentence-779`

**DE**
`Ist das echtes Gold?`

**CS CURRENT**
`Je to skutečné zlato?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 781 — `sentence-780`

**DE**
`Zeigen Sie mir bitte Trauringe.`

**CS CURRENT**
`Ukažte mi snubní prsteny, prosím.`

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
- Reason: „Trauringe“ jsou snubní/svatební prsteny jako pár; současné znění je významově správné, pouze přirozenější je bez čárky po „mi“.
- Proposed replacement: Ukažte mi prosím snubní prsteny.
- Audit CURRENT: Ukažte mi snubní prsteny, prosím.
- Production CURRENT: Ukažte mi snubní prsteny, prosím.

---

## 782 — `sentence-781`

**DE**
`Der Ring ist mir etwas zu weit.`

**CS CURRENT**
`Prsten je na mě trochu moc velký.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 783 — `sentence-782`

**DE**
`Ich kann ihn enger machen.`

**CS CURRENT**
`Můžu to zúžit.`

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
- Reason: „Ihn“ odkazuje na mužský „Ring“; české neutrální „to“ má nesprávný rod.
- Proposed replacement: Můžu ho zúžit.
- Audit CURRENT: Můžu to zúžit.
- Production CURRENT: Můžu to zúžit.

---

## 784 — `sentence-783`

**DE**
`Dieser Ring passt mir.`

**CS CURRENT**
`Tento prsten mi vyhovuje.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 785 — `sentence-784`

**DE**
`Zeigen Sie mir schöne Geschenkideen.`

**CS CURRENT**
`Ukažte nápady na krásné dárky.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 786 — `sentence-785`

**DE**
`Wie gefallen dir diese Ohrringe?`

**CS CURRENT**
`Jak se vám líbí tyto náušnice?`

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
- Reason: Německé „dir“ odpovídá českému tykání „ti“, nikoli vykání „vám“.
- Proposed replacement: Jak se ti líbí tyto náušnice?
- Audit CURRENT: Jak se vám líbí tyto náušnice?
- Production CURRENT: Jak se vám líbí tyto náušnice?

---

## 787 — `sentence-786`

**DE**
`Diese Brosche ist wirklich schön.`

**CS CURRENT**
`Tato brož je moc krásná.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 788 — `sentence-787`

**DE**
`Der Stein ist ein Saphir.`

**CS CURRENT**
`Tento kámen je safír.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 789 — `sentence-788`

**DE**
`Das ist kein echter Stein, das ist Glas.`

**CS CURRENT**
`Toto není skutečný kámen, je to sklo.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 790 — `sentence-789`

**DE**
`Dieses Armband kann ich Ihnen besonders empfehlen.`

**CS CURRENT**
`Tento náramek mohu především doporučit.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 791 — `sentence-790`

**DE**
`Es ist besonders schön gearbeitet.`

**CS CURRENT**
`Je mimořádně jemně zpracovaná.`

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
- Reason: „Es“ odkazuje na mužský „náramek“; příčestí musí být v mužském rodě „zpracovaný“.
- Proposed replacement: Je mimořádně jemně zpracovaný.
- Audit CURRENT: Je mimořádně jemně zpracovaná.
- Production CURRENT: Je mimořádně jemně zpracovaná.

---

## 792 — `sentence-791`

**DE**
`Der Preis ist nicht hoch.`

**CS CURRENT**
`Cena není vysoká.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 793 — `sentence-792`

**DE**
`Bekomme ich die Schachtel gratis?`

**CS CURRENT**
`Dostal jsem krabici zdarma?`

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
- Reason: Německý přítomný čas je žádost/dotaz „Dostanu?“, nikoli minulý čas „Dostal jsem“.
- Proposed replacement: Dostanu krabičku zdarma?
- Audit CURRENT: Dostal jsem krabici zdarma?
- Production CURRENT: Dostal jsem krabici zdarma?

---

## 794 — `sentence-793`

**DE**
`Alle Schmuckstücke sind gestempelt.`

**CS CURRENT**
`Všechny šperky jsou vyraženy.`

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
- Reason: U šperků „gestempelt“ znamená opatřené puncem; „vyraženy“ tento význam nevyjadřuje přesně.
- Proposed replacement: Všechny šperky jsou označené puncem.
- Audit CURRENT: Všechny šperky jsou vyraženy.
- Production CURRENT: Všechny šperky jsou vyraženy.

---

## 795 — `sentence-794`

**DE**
`Falls es meiner Frau nicht gefällt, kann ich es umtauschen?`

**CS CURRENT**
`Pokud se mé ženě nelíbí, mohu ji vyměnit?`

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
- Reason: Chybí budoucí čas a zájmeno „es“ je chybně přeloženo ženským „ji“ místo neutrálního „to“.
- Proposed replacement: Pokud se mé ženě nebude líbit, mohu to vyměnit?
- Audit CURRENT: Pokud se mé ženě nelíbí, mohu ji vyměnit?
- Production CURRENT: Pokud se mé ženě nelíbí, mohu ji vyměnit?

---

## 796 — `sentence-795`

**DE**
`Natürlich, jederzeit.`

**CS CURRENT**
`Kdykoli, samozřejmě.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
