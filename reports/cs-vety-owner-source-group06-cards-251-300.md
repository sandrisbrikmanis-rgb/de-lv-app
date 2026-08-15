# CS–DE Věty OWNER SOURCE — Group 06

Cards 251–300 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 251 — `sentence-250`

**DE**
`gestern früh`

**CS CURRENT**
`Včera brzy ráno`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 252 — `sentence-251`

**DE**
`gestern Abend`

**CS CURRENT**
`Včera v noci`

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
- Reason: „Abend“ znamená večer, nikoli noc.
- Proposed replacement: Včera večer
- Audit CURRENT: Včera v noci
- Production CURRENT: Včera v noci

---

## 253 — `sentence-252`

**DE**
`Es ist mir gleichgültig, ob...`

**CS CURRENT**
`Je mi jedno, jestli...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 254 — `sentence-253`

**DE**
`Was ist geschehen?`

**CS CURRENT**
`Co se stalo?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 255 — `sentence-254`

**DE**
`Mach keine Geschichten!`

**CS CURRENT**
`Nedělejte nesmysly! • Nedělejte si legraci!`

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
- Reason: Německé „Mach“ je neformální jednotné číslo; druhá varianta mění význam na „nedělej si legraci“.
- Proposed replacement: Nedělej hlouposti!
- Audit CURRENT: Nedělejte nesmysly! • Nedělejte si legraci!
- Production CURRENT: Nedělejte nesmysly! • Nedělejte si legraci!

---

## 256 — `sentence-255`

**DE**
`Geschweige denn...`

**CS CURRENT**
`O tom nemluvě. • Kde jinde`

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
- Reason: „Kde jinde“ znamená „where else“, ne „natož“.
- Proposed replacement: O tom nemluvě. • Natož...
- Audit CURRENT: O tom nemluvě. • Kde jinde
- Production CURRENT: O tom nemluvě. • Kde jinde

---

## 257 — `sentence-256`

**DE**
`Gehen Sie geradeaus!`

**CS CURRENT**
`Jděte rovně!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 258 — `sentence-257`

**DE**
`Wie geht es Ihnen?`

**CS CURRENT**
`Jak se máš • Jak se máš?`

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
- Reason: „Ihnen“ vyžaduje vykání; současný text navíc obsahuje duplicitní neformální varianty.
- Proposed replacement: Jak se máte?
- Audit CURRENT: Jak se máš • Jak se máš?
- Production CURRENT: Jak se máš • Jak se máš?

---

## 259 — `sentence-258`

**DE**
`Frag ihn gelegentlich, ob...`

**CS CURRENT**
`Zeptejte se ho, jestli vyjde, jestli...`

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
- Reason: Text přidává význam „jestli vyjde“ a používá vykání místo neformálního imperativu „Frag“.
- Proposed replacement: Občas se ho zeptej, jestli...
- Audit CURRENT: Zeptejte se ho, jestli vyjde, jestli...
- Production CURRENT: Zeptejte se ho, jestli vyjde, jestli...

---

## 260 — `sentence-259`

**DE**
`morgen früh`

**CS CURRENT**
`Zítra ráno`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 261 — `sentence-260`

**DE**
`im Frühling`

**CS CURRENT**
`Na jaře`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 262 — `sentence-261`

**DE**
`Was gibt’s Neues?`

**CS CURRENT**
`Co je nového?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 263 — `sentence-262`

**DE**
`Aus diesem Brief folgt, dass...`

**CS CURRENT**
`Z tohoto dopisu vyplývá, že...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 264 — `sentence-263`

**DE**
`Fahre fort!`

**CS CURRENT**
`Jen tak dál!`

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
- Reason: „Fahre fort“ znamená „pokračuj“, zatímco „Jen tak dál“ znamená spíše „jen pokračuj v dobré práci“.
- Proposed replacement: Pokračuj!
- Audit CURRENT: Jen tak dál!
- Production CURRENT: Jen tak dál!

---

## 265 — `sentence-264`

**DE**
`Er ist kein Freund von...`

**CS CURRENT**
`Nemá rád...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 266 — `sentence-265`

**DE**
`Es erwies sich, dass...`

**CS CURRENT**
`Ukázalo se, že...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 267 — `sentence-266`

**DE**
`Gedenkst du meiner?`

**CS CURRENT**
`Pamatuješ si mě • Myslel jsi na mě?`

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
- Reason: První česká otázková varianta postrádá otazník.
- Proposed replacement: Pamatuješ si mě? • Myslel jsi na mě?
- Audit CURRENT: Pamatuješ si mě • Myslel jsi na mě?
- Production CURRENT: Pamatuješ si mě • Myslel jsi na mě?

---

## 268 — `sentence-267`

**DE**
`im Winter`

**CS CURRENT**
`V zimě`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 269 — `sentence-268`

**DE**
`Welcher Jahrgang sind Sie?`

**CS CURRENT**
`V jakém roce jsi se narodil?`

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
- Reason: „Sie“ vyžaduje vykání; současná verze je neformální a omezuje adresáta na muže.
- Proposed replacement: Který jste ročník?
- Audit CURRENT: V jakém roce jsi se narodil?
- Production CURRENT: V jakém roce jsi se narodil?

---

## 270 — `sentence-269`

**DE**
`Es jammert mich zu sehen...`

**CS CURRENT**
`Smutné sledovat...`

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
- Reason: Současná fráze je neúplná a „smutné sledovat“ nevyjadřuje „je mi líto vidět“.
- Proposed replacement: Je mi líto vidět...
- Audit CURRENT: Smutné sledovat...
- Production CURRENT: Smutné sledovat...

---

## 271 — `sentence-270`

**DE**
`je mehr, desto besser`

**CS CURRENT**
`Čím více, tím lépe`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 272 — `sentence-271`

**DE**
`bis jetzt`

**CS CURRENT**
`Až do teď`

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
- Reason: „Až do teď“ je méně přirozené; běžný krátký ekvivalent je „doteď“ nebo „dosud“.
- Proposed replacement: Doteď
- Audit CURRENT: Až do teď
- Production CURRENT: Až do teď

---

## 273 — `sentence-272`

**DE**
`Wie komme ich zum Bahnhof?`

**CS CURRENT**
`Jak se dostat na nádraží?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 274 — `sentence-273`

**DE**
`Komm her!`

**CS CURRENT**
`Pojď sem!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 275 — `sentence-274`

**DE**
`Könnte ich Frau N. sprechen?`

**CS CURRENT**
`Mohl bych mluvit s paní N.?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 276 — `sentence-275`

**DE**
`Was kostet das?`

**CS CURRENT**
`Kolik to stojí?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 277 — `sentence-276`

**DE**
`Wie lange dauert die Vorstellung?`

**CS CURRENT**
`Jak dlouho vystoupení potrvá?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 278 — `sentence-277`

**DE**
`Lass das!`

**CS CURRENT**
`Přestaň! • Pusťte to!`

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
- Reason: „Pusťte to“ znamená fyzicky něco pustit a navíc používá vykání; německé „Lass“ je neformální.
- Proposed replacement: Přestaň! • Nech toho!
- Audit CURRENT: Přestaň! • Pusťte to!
- Production CURRENT: Přestaň! • Pusťte to!

---

## 279 — `sentence-278`

**DE**
`Lass mich in Ruhe!`

**CS CURRENT**
`Nech mě být!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 280 — `sentence-279`

**DE**
`Lassen Sie mich Ihnen helfen!`

**CS CURRENT**
`Dovolte mi, abych vám pomohl!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 281 — `sentence-280`

**DE**
`Lasst uns gehen!`

**CS CURRENT**
`Jdeme na to!`

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
- Reason: „Jdeme na to“ znamená „pustíme se do toho“, ne „pojďme/jdeme“.
- Proposed replacement: Pojďme!
- Audit CURRENT: Jdeme na to!
- Production CURRENT: Jdeme na to!

---

## 282 — `sentence-281`

**DE**
`Na, wie läufts?`

**CS CURRENT**
`Jak se máte`

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
- Reason: Současná verze mění význam na vykání a postrádá otazník; originál je obecné „jak to jde“.
- Proposed replacement: Tak jak to jde?
- Audit CURRENT: Jak se máte
- Production CURRENT: Jak se máte

---

## 283 — `sentence-282`

**DE**
`Es lebe!`

**CS CURRENT**
`Ať žije!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 284 — `sentence-283`

**DE**
`Leben Sie wohl!`

**CS CURRENT**
`Žijte zdravě! • Sbohem!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: MEDIUM
- Type: NATURALNESS
- Source: Luna
- Field: lv
- Reason: „Žijte zdravě“ znamená žít zdravým způsobem, ne ustálené rozloučení „Leben Sie wohl“.
- Proposed replacement: Sbohem!
- Audit CURRENT: Žijte zdravě! • Sbohem!
- Production CURRENT: Žijte zdravě! • Sbohem!

---

## 285 — `sentence-284`

**DE**
`Was ist los?`

**CS CURRENT**
`Co se stalo?`

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
- Reason: „Co se stalo?“ se ptá na minulou událost; „Was ist los?“ znamená „Co se děje?“ nebo „Co je?“.
- Proposed replacement: Co se děje?
- Audit CURRENT: Co se stalo?
- Production CURRENT: Co se stalo?

---

## 286 — `sentence-285`

**DE**
`Der Job ist anstrengend.`

**CS CURRENT**
`Práce je vyčerpávající.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 287 — `sentence-286`

**DE**
`Das war ein anstrengender Tag.`

**CS CURRENT**
`Byl to rušný den.`

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
- Reason: „Anstrengend“ znamená náročný nebo vyčerpávající, nikoli „rušný“ ve smyslu busy.
- Proposed replacement: Byl to náročný den.
- Audit CURRENT: Byl to rušný den.
- Production CURRENT: Byl to rušný den.

---

## 288 — `sentence-287`

**DE**
`Deutsch lernen kann anstrengend sein.`

**CS CURRENT**
`Učení němčiny může být vyčerpávající.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 289 — `sentence-288`

**DE**
`Er verlangt eine Erklärung.`

**CS CURRENT**
`Požaduje vysvětlení.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 290 — `sentence-289`

**DE**
`Der Verkäufer verlangt zu viel Geld.`

**CS CURRENT**
`Prodejce požaduje příliš mnoho peněz.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 291 — `sentence-290`

**DE**
`Das Gesetz verlangt es so.`

**CS CURRENT**
`Zákon to vyžaduje.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 292 — `sentence-291`

**DE**
`Das ist gar nicht so schwer.`

**CS CURRENT**
`Není to vůbec tak těžké.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 293 — `sentence-292`

**DE**
`Ich habe gar kein Geld.`

**CS CURRENT**
`Nemám vůbec žádné peníze.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 294 — `sentence-293`

**DE**
`Er hat gar nichts gesagt.`

**CS CURRENT**
`Neřekl vůbec nic.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 295 — `sentence-294`

**DE**
`Der Hund ist los.`

**CS CURRENT**
`Pes byl propuštěn.`

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
- Reason: „Ist los“ znamená, že pes je volně nebo utekl; současný minulý čas znamená, že byl propuštěn.
- Proposed replacement: Pes je na volno.
- Audit CURRENT: Pes byl propuštěn.
- Production CURRENT: Pes byl propuštěn.

---

## 296 — `sentence-295`

**DE**
`Hier ist viel los.`

**CS CURRENT**
`Tady se toho děje hodně.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 297 — `sentence-296`

**DE**
`Halt die Luft an!`

**CS CURRENT**
`Zadržte dech!`

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
- Reason: „Halt“ je neformální imperativ jednotného čísla; současné „Zadržte“ je vykání nebo množné číslo.
- Proposed replacement: Zadrž dech!
- Audit CURRENT: Zadržte dech!
- Production CURRENT: Zadržte dech!

---

## 298 — `sentence-297`

**DE**
`Was machst du?`

**CS CURRENT**
`Co to děláš`

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
- Reason: Česká otázka postrádá otazník.
- Proposed replacement: Co to děláš?
- Audit CURRENT: Co to děláš
- Production CURRENT: Co to děláš

---

## 299 — `sentence-298`

**DE**
`Sag mal!`

**CS CURRENT**
`Řekni ano!`

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
- Reason: „Sag mal!“ je oslovení ve smyslu „Hele!/Poslyš!“, ne příkaz „Řekni ano!“.
- Proposed replacement: Hele!
- Audit CURRENT: Řekni ano!
- Production CURRENT: Řekni ano!

---

## 300 — `sentence-299`

**DE**
`Was meinen Sie damit?`

**CS CURRENT**
`Co tím myslíš? • Co si myslíte?`

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
- Reason: „Sie“ vyžaduje vykání a „Co si myslíte?“ neodpovídá vazbě „damit“ ve významu „co tím myslíte“.
- Proposed replacement: Co tím myslíte?
- Audit CURRENT: Co tím myslíš? • Co si myslíte?
- Production CURRENT: Co tím myslíš? • Co si myslíte?

---
