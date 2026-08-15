# CS–DE Věty OWNER SOURCE — Group 03

Cards 101–150 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 101 — `sentence-100`

**DE**
`Aus diesem Anlass.`

**CS CURRENT**
`Kvůli této době. • V tomto ohledu`

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
- Reason: Obě české varianty mají jiný význam: první odkazuje na dobu, druhá na hledisko.
- Proposed replacement: Při této příležitosti.
- Audit CURRENT: Kvůli této době. • V tomto ohledu
- Production CURRENT: Kvůli této době. • V tomto ohledu

---

## 102 — `sentence-101`

**DE**
`Nehmen wir an, dass...`

**CS CURRENT**
`Předpokládejme, že...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 103 — `sentence-102`

**DE**
`Was hast du da angerichtet?`

**CS CURRENT**
`Co jsi tam dělal`

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
- Reason: Angerichtet znamená „provedl/způsobil“, ne neutrální „dělal“; chybí také otazník.
- Proposed replacement: Co jsi tam provedl?
- Audit CURRENT: Co jsi tam dělal
- Production CURRENT: Co jsi tam dělal

---

## 104 — `sentence-103`

**DE**
`Bis ans Ende.`

**CS CURRENT**
`Až do konce.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 105 — `sentence-104`

**DE**
`Du glaubst mir anscheinend nicht.`

**CS CURRENT**
`Zdá se, že mi nevěříš.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 106 — `sentence-105`

**DE**
`Meiner Ansicht nach...`

**CS CURRENT**
`Podle mého názoru...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 107 — `sentence-106`

**DE**
`Stell dich nicht so an!`

**CS CURRENT**
`Nepředstírejte!`

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
- Reason: Německé rčení znamená nedělat scény nebo potíže, ne „nepředstírat“; navíc je zde vykání místo tykání.
- Proposed replacement: Nedělej takové cavyky!
- Audit CURRENT: Nepředstírejte!
- Production CURRENT: Nepředstírejte!

---

## 108 — `sentence-107`

**DE**
`An die Arbeit gehen.`

**CS CURRENT**
`Pusťte se do práce.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 109 — `sentence-108`

**DE**
`Außer Atem sein.`

**CS CURRENT**
`Být zadýchaný.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 110 — `sentence-109`

**DE**
`Guten Appetit!`

**CS CURRENT**
`Chuť k jídlu!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: HIGH
- Type: NATURALNESS
- Source: Luna
- Field: lv
- Reason: „Chuť k jídlu“ označuje apetit, není to běžné české přání před jídlem.
- Proposed replacement: Dobrou chuť!
- Audit CURRENT: Chuť k jídlu!
- Production CURRENT: Chuť k jídlu!

---

## 111 — `sentence-110`

**DE**
`In einem Atemzug.`

**CS CURRENT**
`Jedním dechem.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 112 — `sentence-111`

**DE**
`Auf jeden Fall.`

**CS CURRENT**
`V každém případě.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 113 — `sentence-112`

**DE**
`Auf einmal war alles still.`

**CS CURRENT**
`Najednou vše ztichlo.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 114 — `sentence-113`

**DE**
`Bitte mach die Tür auf!`

**CS CURRENT**
`Prosím, otevřete dveře!`

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
- Reason: Mach je tykání; české vykání mění adresáta a registr.
- Proposed replacement: Prosím, otevři dveře!
- Audit CURRENT: Prosím, otevřete dveře!
- Production CURRENT: Prosím, otevřete dveře!

---

## 115 — `sentence-114`

**DE**
`Er hat den Kredit aufgenommen.`

**CS CURRENT**
`Vzal si půjčku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 116 — `sentence-115`

**DE**
`Wir müssen heute aufräumen.`

**CS CURRENT**
`Dnes musíme uklidit pokoj.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 117 — `sentence-116`

**DE**
`Ich höre jetzt auf.`

**CS CURRENT**
`Teď se zastavím.`

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
- Reason: „Se zastavím“ znamená zastavit svůj pohyb; aufhören zde znamená přestat nebo skončit s činností.
- Proposed replacement: Teď přestanu.
- Audit CURRENT: Teď se zastavím.
- Production CURRENT: Teď se zastavím.

---

## 118 — `sentence-117`

**DE**
`Er ist schon auf.`

**CS CURRENT**
`Už je vzhůru.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 119 — `sentence-118`

**DE**
`Wir müssen das Treffen verschieben.`

**CS CURRENT**
`Schůzku musíme přeložit.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 120 — `sentence-119`

**DE**
`Sie hat mich aufgeregt.`

**CS CURRENT**
`Rozčilovala mě.`

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
- Reason: Perfektivní německý děj vyjadřuje jednorázové rozčilení; české imperfektivum naznačuje průběh či opakování.
- Proposed replacement: Rozčílila mě.
- Audit CURRENT: Rozčilovala mě.
- Production CURRENT: Rozčilovala mě.

---

## 121 — `sentence-120`

**DE**
`Auf einmal.`

**CS CURRENT**
`Najednou.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 122 — `sentence-121`

**DE**
`Auf der Stelle.`

**CS CURRENT**
`Ihned.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 123 — `sentence-122`

**DE**
`Für den Schaden aufkommen.`

**CS CURRENT**
`Pokryjte škody.`

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
- Reason: Německý infinitiv znamená nést náklady či uhradit škodu; české znění je vykací rozkaz a mění číslo.
- Proposed replacement: Uhradit škodu.
- Audit CURRENT: Pokryjte škody.
- Production CURRENT: Pokryjte škody.

---

## 124 — `sentence-123`

**DE**
`Bitte die Tür auf!`

**CS CURRENT**
`Otevřete dveře, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 125 — `sentence-124`

**DE**
`Aufrecht sitzen.`

**CS CURRENT**
`Posaďte se rovně.`

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
- Reason: „Posaďte se“ znamená sednout si, zatímco německé spojení znamená sedět ve vzpřímené poloze.
- Proposed replacement: Sedět vzpřímeně.
- Audit CURRENT: Posaďte se rovně.
- Production CURRENT: Posaďte se rovně.

---

## 126 — `sentence-125`

**DE**
`Er ist auf.`

**CS CURRENT**
`Vstal.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 127 — `sentence-126`

**DE**
`Alle Kräfte aufwenden.`

**CS CURRENT**
`Věnujte všechny své síly.`

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
- Reason: Původní české znění je rozkaz a znamená věnovat síly; německé spojení je infinitiv „vynaložit síly“.
- Proposed replacement: Vynaložit veškeré síly.
- Audit CURRENT: Věnujte všechny své síly.
- Production CURRENT: Věnujte všechny své síly.

---

## 128 — `sentence-127`

**DE**
`Viel Mühe aufwenden.`

**CS CURRENT**
`Velmi se snažte.`

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
- Reason: Německé spojení označuje vynaložení značného úsilí, ne pobídku „velmi se snažte“.
- Proposed replacement: Vynaložit velké úsilí.
- Audit CURRENT: Velmi se snažte.
- Production CURRENT: Velmi se snažte.

---

## 129 — `sentence-128`

**DE**
`Geh mir aus den Augen!`

**CS CURRENT**
`Už se na mě nedívej!`

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
- Reason: Německé rčení znamená odejít nebo zmizet z dohledu, ne přestat se na někoho dívat.
- Proposed replacement: Zmiz mi z očí!
- Audit CURRENT: Už se na mě nedívej!
- Production CURRENT: Už se na mě nedívej!

---

## 130 — `sentence-129`

**DE**
`Unter vier Augen.`

**CS CURRENT**
`Ve dvou. • Tiše`

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
- Reason: Ustálené rčení znamená soukromě mezi dvěma lidmi; „tiše“ má jiný význam a „ve dvou“ význam nevyjadřuje přesně.
- Proposed replacement: Mezi čtyřma očima.
- Audit CURRENT: Ve dvou. • Tiše
- Production CURRENT: Ve dvou. • Tiše

---

## 131 — `sentence-130`

**DE**
`Aus Mangel an Zeit.`

**CS CURRENT**
`Kvůli nedostatku času.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 132 — `sentence-131`

**DE**
`Aus diesem Grunde.`

**CS CURRENT**
`Z tohoto důvodu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 133 — `sentence-132`

**DE**
`Alle außer dir.`

**CS CURRENT**
`Všichni kromě tebe.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 134 — `sentence-133`

**DE**
`Auf Äußerlichkeiten Wert legen.`

**CS CURRENT**
`Dejte důraz na vzhled.`

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
- Reason: České znění je rozkaz; německý infinitiv označuje obecně dbát na vnější stránku.
- Proposed replacement: Dbát na vnější vzhled.
- Audit CURRENT: Dejte důraz na vzhled.
- Production CURRENT: Dejte důraz na vzhled.

---

## 135 — `sentence-134`

**DE**
`Im äußersten Fall.`

**CS CURRENT**
`V nejhorším případě.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 136 — `sentence-135`

**DE**
`Äußerst wichtig.`

**CS CURRENT**
`Nesmírně důležité.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 137 — `sentence-136`

**DE**
`Aussicht auf die See.`

**CS CURRENT**
`Výhled na moře.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 138 — `sentence-137`

**DE**
`Er hat gute Aussichten.`

**CS CURRENT**
`Má dobrou šanci.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 139 — `sentence-138`

**DE**
`Wie wird dieses Wort ausgesprochen?`

**CS CURRENT**
`Jak se toto slovo vyslovuje?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 140 — `sentence-139`

**DE**
`Sein Beileid aussprechen.`

**CS CURRENT**
`Vyjádřete soustrast.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 141 — `sentence-140`

**DE**
`Wann wurden die Meisterschaftskämpfe ausgetragen?`

**CS CURRENT**
`Kdy bylo mistrovství?`

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
- Reason: České znění zobecňuje množné číslo „mistrovské zápasy“ na celou soutěž nebo mistrovství.
- Proposed replacement: Kdy se konaly mistrovské zápasy?
- Audit CURRENT: Kdy bylo mistrovství?
- Production CURRENT: Kdy bylo mistrovství?

---

## 142 — `sentence-141`

**DE**
`Welchen Beruf üben Sie aus?`

**CS CURRENT**
`Jaké je vaše povolání?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 143 — `sentence-142`

**DE**
`Einfluss ausüben.`

**CS CURRENT**
`Ovlivňovat.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 144 — `sentence-143`

**DE**
`Auswärts essen.`

**CS CURRENT**
`Jezte venku.`

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
- Reason: Auswärts essen znamená jíst mimo domov, typicky v restauraci; „jezte venku“ znamená jíst venku či pod širým nebem.
- Proposed replacement: Jíst mimo domov.
- Audit CURRENT: Jezte venku.
- Production CURRENT: Jezte venku.

---

## 145 — `sentence-144`

**DE**
`Per Bahn.`

**CS CURRENT**
`Vlakem.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 146 — `sentence-145`

**DE**
`Mit der Bahn.`

**CS CURRENT**
`Vlakem.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 147 — `sentence-146`

**DE**
`Möglichst bald.`

**CS CURRENT**
`Co nejdříve.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 148 — `sentence-147`

**DE**
`Mir ist Angst und bange.`

**CS CURRENT**
`Velmi se bojím.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 149 — `sentence-148`

**DE**
`Auf die lange Bank schieben.`

**CS CURRENT**
`Odkládat. • Přetáhněte na délku • Odložte na neurčito`

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
- Reason: „Přetáhněte na délku“ je nepřirozené a imperativní; druhý význam je protahovat či vléct.
- Proposed replacement: Odkládat. • Protahovat. • Odkládat na neurčito.
- Audit CURRENT: Odkládat. • Přetáhněte na délku • Odložte na neurčito
- Production CURRENT: Odkládat. • Přetáhněte na délku • Odložte na neurčito

---

## 150 — `sentence-149`

**DE**
`Bar zahlen.`

**CS CURRENT**
`Platit v hotovosti.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
