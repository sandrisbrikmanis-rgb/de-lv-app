# CS–DE Věty OWNER SOURCE — Group 14

Cards 651–700 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 651 — `sentence-650`

**DE**
`Wo ist die Post?`

**CS CURRENT**
`Kde je pošta?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 652 — `sentence-651`

**DE**
`Erinnere mich morgen daran zu schreiben!`

**CS CURRENT**
`Připomeňte mi, abych se zítra podepsal!`

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
- Reason: Německé „schreiben“ znamená psát, ne podepsat se; navíc je použito vykání místo tykání.
- Proposed replacement: Připomeň mi, abych zítra napsal!
- Audit CURRENT: Připomeňte mi, abych se zítra podepsal!
- Production CURRENT: Připomeňte mi, abych se zítra podepsal!

---

## 653 — `sentence-652`

**DE**
`Werfen Sie bitte diesen Brief in den Briefkasten.`

**CS CURRENT**
`Vhoďte prosím tento dopis do poštovní schránky!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 654 — `sentence-653`

**DE**
`Hallo, hier spricht Emma.`

**CS CURRENT**
`Ahoj, tady Emma.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 655 — `sentence-654`

**DE**
`Kann ich dich später anrufen?`

**CS CURRENT**
`Můžu ti zavolat později?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 656 — `sentence-655`

**DE**
`Muss ich lange warten?`

**CS CURRENT**
`Musím dlouho čekat?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 657 — `sentence-656`

**DE**
`Bitte schneiden Sie mir die Haare.`

**CS CURRENT**
`Prosím ostříhej mi vlasy.`

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
- Reason: Německé „Sie“ vyžaduje v češtině vykání, tedy imperativ „ostříhejte“, nikoli „ostříhej“.
- Proposed replacement: Prosím, ostříhejte mi vlasy.
- Audit CURRENT: Prosím ostříhej mi vlasy.
- Production CURRENT: Prosím ostříhej mi vlasy.

---

## 658 — `sentence-657`

**DE**
`Hinten bitte nicht zu kurz.`

**CS CURRENT**
`Vzadu, prosím, ne příliš krátké.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 659 — `sentence-658`

**DE**
`Wann beginnt die Vorstellung?`

**CS CURRENT**
`Kdy představení začíná?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 660 — `sentence-659`

**DE**
`Es fängt um halb acht an.`

**CS CURRENT**
`Začíná se v půl deváté.`

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
- Reason: „Halb acht“ znamená 7:30, česky „v půl osmé“, nikoli „v půl deváté“.
- Proposed replacement: Začíná v půl osmé.
- Audit CURRENT: Začíná se v půl deváté.
- Production CURRENT: Začíná se v půl deváté.

---

## 661 — `sentence-660`

**DE**
`Alle Plätze sind ausverkauft.`

**CS CURRENT**
`Všechny vstupenky jsou vyprodány.`

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
- Reason: Německé „Plätze“ znamená místa/sedadla, ne vstupenky.
- Proposed replacement: Všechna místa jsou vyprodaná.
- Audit CURRENT: Všechny vstupenky jsou vyprodány.
- Production CURRENT: Všechny vstupenky jsou vyprodány.

---

## 662 — `sentence-661`

**DE**
`Drei Karten, bitte!`

**CS CURRENT**
`Tři lístky, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 663 — `sentence-662`

**DE**
`Wir lassen die Jacken in der Garderobe.`

**CS CURRENT**
`Nechme bundy v šatníku.`

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
- Reason: „Wir lassen“ je oznamovací „necháme“; divadelní „Garderobe“ je česky „šatna“, ne „šatník“.
- Proposed replacement: Bundy necháme v šatně.
- Audit CURRENT: Nechme bundy v šatníku.
- Production CURRENT: Nechme bundy v šatníku.

---

## 664 — `sentence-663`

**DE**
`Bitte schnell, der Vorhang geht gleich auf!`

**CS CURRENT**
`Rychleji, prosím, opona se právě otevírá!`

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
- Reason: „Gleich“ vyjadřuje bezprostřední budoucnost; „právě otevírá“ znamená, že se to děje právě teď.
- Proposed replacement: Rychle, prosím, opona se brzy zvedne!
- Audit CURRENT: Rychleji, prosím, opona se právě otevírá!
- Production CURRENT: Rychleji, prosím, opona se právě otevírá!

---

## 665 — `sentence-664`

**DE**
`Der Vorhang fällt.`

**CS CURRENT**
`Opona padá.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 666 — `sentence-665`

**DE**
`Darf ich dich zum Tanz bitten?`

**CS CURRENT**
`Mohu vás požádat o tanec?`

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
- Reason: Německé „dich“ je tykání, zatímco české „vás“ je vykání nebo množné číslo.
- Proposed replacement: Mohu tě požádat o tanec?
- Audit CURRENT: Mohu vás požádat o tanec?
- Production CURRENT: Mohu vás požádat o tanec?

---

## 667 — `sentence-666`

**DE**
`Wann ist eure Hochzeit?`

**CS CURRENT**
`Kdy máš svatbu?`

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
- Reason: „Eure“ označuje druhou osobu množného čísla, proto má být „máte“, ne „máš“.
- Proposed replacement: Kdy máte svatbu?
- Audit CURRENT: Kdy máš svatbu?
- Production CURRENT: Kdy máš svatbu?

---

## 668 — `sentence-667`

**DE**
`Ich suche eine Wohnung.`

**CS CURRENT**
`Hledám byt.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 669 — `sentence-668`

**DE**
`Ist in diesem Haus eine Wohnung frei?`

**CS CURRENT**
`Je v tomto domě volný byt?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 670 — `sentence-669`

**DE**
`Wie viel kostet die Miete?`

**CS CURRENT**
`Kolik stojí nájem?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 671 — `sentence-670`

**DE**
`Die Wohnung hat drei Zimmer und eine Küche.`

**CS CURRENT**
`Byt má tři pokoje a kuchyň.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 672 — `sentence-671`

**DE**
`Heute ziehen wir um.`

**CS CURRENT**
`Dnes se stěhujeme.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 673 — `sentence-672`

**DE**
`Mia, pack die Sachen bitte in Kisten!`

**CS CURRENT**
`Mio, dej věci do krabic, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 674 — `sentence-673`

**DE**
`Hast du alles eingepackt?`

**CS CURRENT**
`Už je vše zabalené?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 675 — `sentence-674`

**DE**
`Ich stehe mit meinem Freund in Kontakt.`

**CS CURRENT**
`Jsem v korespondenci se svým přítelem.`

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
- Reason: „In Kontakt stehen“ znamená být v kontaktu; „korespondence“ označuje konkrétně písemnou komunikaci.
- Proposed replacement: Jsem v kontaktu se svým přítelem.
- Audit CURRENT: Jsem v korespondenci se svým přítelem.
- Production CURRENT: Jsem v korespondenci se svým přítelem.

---

## 676 — `sentence-675`

**DE**
`Gehen wir ins Theater?`

**CS CURRENT**
`Půjdeme do divadla?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 677 — `sentence-676`

**DE**
`Ist alles eingeladen?`

**CS CURRENT**
`Je vše nabité?`

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
- Reason: „Eingeladen“ zde znamená naložené, nikoli nabité ve smyslu elektrického zařízení.
- Proposed replacement: Je všechno naložené?
- Audit CURRENT: Je vše nabité?
- Production CURRENT: Je vše nabité?

---

## 678 — `sentence-677`

**DE**
`Welch schöne Aussicht!`

**CS CURRENT**
`Jaký krásný výhled!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 679 — `sentence-678`

**DE**
`Nun können wir alles wieder aufräumen.`

**CS CURRENT**
`Nyní můžeme dát vše zpět dohromady.`

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
- Reason: „Aufräumen“ znamená uklidit nebo uspořádat, ne dát věci dohromady.
- Proposed replacement: Nyní můžeme všechno znovu uklidit.
- Audit CURRENT: Nyní můžeme dát vše zpět dohromady.
- Production CURRENT: Nyní můžeme dát vše zpět dohromady.

---

## 680 — `sentence-679`

**DE**
`Wie viele Zimmer habt ihr?`

**CS CURRENT**
`Kolik pokojů máte?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 681 — `sentence-680`

**DE**
`Im Sommer fahre ich ans Meer.`

**CS CURRENT**
`V létě pojedu k moři.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 682 — `sentence-681`

**DE**
`Kannst du schwimmen?`

**CS CURRENT**
`Umíte plavat`

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
- Reason: Německé „du“ vyžaduje tykání; v češtině navíc chybí otazník.
- Proposed replacement: Umíš plavat?
- Audit CURRENT: Umíte plavat
- Production CURRENT: Umíte plavat

---

## 683 — `sentence-682`

**DE**
`Schwimm nicht zu weit hinaus!`

**CS CURRENT**
`Neplavte příliš daleko!`

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
- Reason: Německé „du“ je tykání, proto má být český imperativ „neplav“, nikoli „neplavte“.
- Proposed replacement: Neplav příliš daleko!
- Audit CURRENT: Neplavte příliš daleko!
- Production CURRENT: Neplavte příliš daleko!

---

## 684 — `sentence-683`

**DE**
`Badest du jeden Tag?`

**CS CURRENT**
`Plaveš každý den?`

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
- Reason: Německé „baden“ znamená koupat se, nikoli plavat; pro plavání se používá „schwimmen“.
- Proposed replacement: Koupeš se každý den?
- Audit CURRENT: Plaveš každý den?
- Production CURRENT: Plaveš každý den?

---

## 685 — `sentence-684`

**DE**
`Bei schönem Wetter gehe ich angeln.`

**CS CURRENT**
`Pokud je dobré počasí, chodím na ryby.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 686 — `sentence-685`

**DE**
`Wie sieht er aus?`

**CS CURRENT**
`Jak vypadá?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 687 — `sentence-686`

**DE**
`Er hat sich aber recht verändert.`

**CS CURRENT**
`Dost se však změnil.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 688 — `sentence-687`

**DE**
`Wie ist er als Mensch?`

**CS CURRENT**
`Jaký je jako člověk?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 689 — `sentence-688`

**DE**
`Er ist immer nett und freundlich.`

**CS CURRENT**
`Je vždy milý a hodný.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: LOW
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Hodný“ může znamenat poslušný nebo dobře vychovaný; „freundlich“ zde přesněji odpovídá „přátelský“.
- Proposed replacement: Je vždy milý a přátelský.
- Audit CURRENT: Je vždy milý a hodný.
- Production CURRENT: Je vždy milý a hodný.

---

## 690 — `sentence-689`

**DE**
`Ich fühle mich nicht wohl.`

**CS CURRENT**
`Cítím se špatně.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 691 — `sentence-690`

**DE**
`Ich habe starke Kopfschmerzen.`

**CS CURRENT**
`Velmi mě bolí hlava.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 692 — `sentence-691`

**DE**
`Ich habe mich erkältet.`

**CS CURRENT**
`Jsem nachlazený.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 693 — `sentence-692`

**DE**
`Ich habe Schnupfen.`

**CS CURRENT**
`Teče mi z nosu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 694 — `sentence-693`

**DE**
`Mir ist schwindlig.`

**CS CURRENT**
`Točí se mi hlava.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 695 — `sentence-694`

**DE**
`Ich muss zum Arzt gehen.`

**CS CURRENT**
`Musím k doktorovi.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 696 — `sentence-695`

**DE**
`Leg dich ins Bett!`

**CS CURRENT**
`Lehni si do postele!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 697 — `sentence-696`

**DE**
`Hast du Fieber?`

**CS CURRENT**
`Máte horečku?`

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
- Reason: Německé „du“ vyžaduje tykání; české „máte“ je vykání nebo množné číslo.
- Proposed replacement: Máš horečku?
- Audit CURRENT: Máte horečku?
- Production CURRENT: Máte horečku?

---

## 698 — `sentence-697`

**DE**
`Gestern hatte ich erhöhte Temperatur.`

**CS CURRENT**
`Včera jsem měl vysokou teplotu.`

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
- Reason: „Erhöhte Temperatur“ znamená zvýšenou teplotu; „vysoká“ je významově silnější a odpovídá „hohe Temperatur“.
- Proposed replacement: Včera jsem měl zvýšenou teplotu.
- Audit CURRENT: Včera jsem měl vysokou teplotu.
- Production CURRENT: Včera jsem měl vysokou teplotu.

---

## 699 — `sentence-698`

**DE**
`Ich habe Zahnschmerzen.`

**CS CURRENT**
`Bolí mě zub.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 700 — `sentence-699`

**DE**
`Ich muss zum Zahnarzt gehen.`

**CS CURRENT**
`Musím k zubaři.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
