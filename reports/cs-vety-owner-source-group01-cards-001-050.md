# CS–DE Věty OWNER SOURCE — Group 01

Cards 001–050 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

---

## 001 — `sentence-0`

**DE**
`Hüte dich davor!`

**CS CURRENT**
`Pozor na to!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 002 — `sentence-1`

**DE**
`Wenn nichts dazwischenkommt.`

**CS CURRENT**
`Pokud nic nepřekáží. • Pokud vše půjde podle plánu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 003 — `sentence-2`

**DE**
`Das kann ich mir denken!`

**CS CURRENT**
`Já to vím!`

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
- Reason: Německá věta znamená „To si umím představit“ nebo „To jsem si mohl myslet“, ne „Já to vím“.
- Proposed replacement: To si umím představit!
- Audit CURRENT: Já to vím!
- Production CURRENT: Já to vím!

---

## 004 — `sentence-3`

**DE**
`Ist er denn krank?`

**CS CURRENT**
`Je pak nemocný?`

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
- Reason: České „pak“ znamená spíše „potom“; částice „denn“ zde vyjadřuje podivení nebo zájem.
- Proposed replacement: Je snad nemocný?
- Audit CURRENT: Je pak nemocný?
- Production CURRENT: Je pak nemocný?

---

## 005 — `sentence-4`

**DE**
`Was denn?`

**CS CURRENT**
`Co potom?`

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
- Reason: „Co potom?“ znamená „co pak/následně“, zatímco „Was denn?“ zde znamená „Co je?“ nebo „Copak?“.
- Proposed replacement: Co je?
- Audit CURRENT: Co potom?
- Production CURRENT: Co potom?

---

## 006 — `sentence-5`

**DE**
`Desto mehr.`

**CS CURRENT**
`Čím více.`

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
- Reason: Samostatné „desto mehr“ znamená „o to více“; „čím více“ obvykle vyžaduje druhou část konstrukce.
- Proposed replacement: O to více.
- Audit CURRENT: Čím více.
- Production CURRENT: Čím více.

---

## 007 — `sentence-6`

**DE**
`Je mehr, desto besser.`

**CS CURRENT**
`Čím více, tím lépe.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 008 — `sentence-7`

**DE**
`Alles deutet auf Regen.`

**CS CURRENT**
`Vše ukazuje na případ.`

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
- Reason: Německé „Regen“ znamená „déšť“, nikoli „případ“.
- Proposed replacement: Vše ukazuje na déšť.
- Audit CURRENT: Vše ukazuje na případ.
- Production CURRENT: Vše ukazuje na případ.

---

## 009 — `sentence-8`

**DE**
`Damit ist mir wenig gedient.`

**CS CURRENT**
`Nedává mi to smysl.`

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
- Reason: Věta znamená, že je to pro mluvčího málo užitečné, ne že to nedává smysl.
- Proposed replacement: Málo mi to pomůže.
- Audit CURRENT: Nedává mi to smysl.
- Production CURRENT: Nedává mi to smysl.

---

## 010 — `sentence-9`

**DE**
`Er ist dienstlich verhindert.`

**CS CURRENT**
`Nemůže přijít kvůli práci.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 011 — `sentence-10`

**DE**
`Sprechen Sie doch!`

**CS CURRENT**
`Mluvte!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 012 — `sentence-11`

**DE**
`Es donnert.`

**CS CURRENT**
`Hrom burácí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 013 — `sentence-12`

**DE**
`Doppelt so groß.`

**CS CURRENT**
`Dvakrát větší.`

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
- Reason: „Dvakrát větší“ může v češtině znamenat o dvojnásobek větší; přesněji jde o dvojnásobnou velikost.
- Proposed replacement: Dvakrát tak velký.
- Audit CURRENT: Dvakrát větší.
- Production CURRENT: Dvakrát větší.

---

## 014 — `sentence-13`

**DE**
`Von dort.`

**CS CURRENT**
`Odtamtud.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 015 — `sentence-14`

**DE**
`Die Zeit drängt.`

**CS CURRENT**
`Čas běží.`

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
- Reason: Německé rčení vyjadřuje naléhavost a nedostatek času, ne pouze jeho plynutí.
- Proposed replacement: Čas tlačí.
- Audit CURRENT: Čas běží.
- Production CURRENT: Čas běží.

---

## 016 — `sentence-15`

**DE**
`Ihn drücken Sorgen.`

**CS CURRENT**
`Je přemožen starostí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 017 — `sentence-16`

**DE**
`Hast du das Buch durchgearbeitet?`

**CS CURRENT**
`Prošli jste knihu pečlivě?`

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
- Reason: Německé „du“ je jednotné číslo; české „jste“ je množné číslo nebo vykání.
- Proposed replacement: Prošel jsi knihu pečlivě?
- Audit CURRENT: Prošli jste knihu pečlivě?
- Production CURRENT: Prošli jste knihu pečlivě?

---

## 018 — `sentence-17`

**DE**
`Kein Durchgang!`

**CS CURRENT**
`Neprocházejte! • Výjezd uzavřen!`

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
- Reason: „Durchgang“ znamená průchod, nikoli výjezd; druhá česká varianta mění význam.
- Proposed replacement: Neprocházejte! • Průchod uzavřen!
- Audit CURRENT: Neprocházejte! • Výjezd uzavřen!
- Production CURRENT: Neprocházejte! • Výjezd uzavřen!

---

## 019 — `sentence-18`

**DE**
`Darf ich Sie bitten?`

**CS CURRENT**
`Můžu se tě zeptat?`

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
- Reason: „Sie“ vyžaduje vykání a „bitten“ znamená poprosit, ne zeptat se.
- Proposed replacement: Mohu vás poprosit?
- Audit CURRENT: Můžu se tě zeptat?
- Production CURRENT: Můžu se tě zeptat?

---

## 020 — `sentence-19`

**DE**
`Ich bin durstig.`

**CS CURRENT**
`Mám žízeň.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 021 — `sentence-20`

**DE**
`Eben das meine ich.`

**CS CURRENT**
`Přesně to mám na mysli.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 022 — `sentence-21`

**DE**
`Es ist ganz egal.`

**CS CURRENT**
`Na tom vůbec nezáleží.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 023 — `sentence-22`

**DE**
`Was wollen Sie eigentlich?`

**CS CURRENT**
`Co vlastně chceš?`

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
- Reason: Německé „Sie“ je formální druhá osoba množného čísla; české „chceš“ je tykání.
- Proposed replacement: Co vlastně chcete?
- Audit CURRENT: Co vlastně chceš?
- Production CURRENT: Co vlastně chceš?

---

## 024 — `sentence-23`

**DE**
`Eilt es mit dieser Sache?`

**CS CURRENT**
`Je tato záležitost naléhavá?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 025 — `sentence-24`

**DE**
`Eilt sehr!`

**CS CURRENT**
`Velmi naléhavé!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 026 — `sentence-25`

**DE**
`Ich habe es eilig.`

**CS CURRENT**
`Spěchám.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 027 — `sentence-26`

**DE**
`Du bildest dir nur ein, krank zu sein.`

**CS CURRENT**
`Představte si, že jste nemocní.`

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
- Reason: Originál je oznamovací věta v tykání; současný text je vykací rozkaz a mění význam.
- Proposed replacement: Jen si namlouváš, že jsi nemocný.
- Audit CURRENT: Představte si, že jste nemocní.
- Production CURRENT: Představte si, že jste nemocní.

---

## 028 — `sentence-27`

**DE**
`Was fällt dir ein?`

**CS CURRENT**
`Co tě napadne?`

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
- Reason: Ustálené „Was fällt dir ein?“ vyjadřuje pohoršení, nikoli otázku, co člověka napadne.
- Proposed replacement: Jak se opovažuješ?
- Audit CURRENT: Co tě napadne?
- Production CURRENT: Co tě napadne?

---

## 029 — `sentence-28`

**DE**
`Es war einmal.`

**CS CURRENT**
`Jednou tam bylo.`

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
- Reason: Pohádková formule „Es war einmal“ se česky překládá „Bylo nebylo“ nebo „Byl jednou jeden“.
- Proposed replacement: Bylo nebylo.
- Audit CURRENT: Jednou tam bylo.
- Production CURRENT: Jednou tam bylo.

---

## 030 — `sentence-29`

**DE**
`Steigen Sie bitte ein!`

**CS CURRENT**
`Vstupte prosím!`

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
- Reason: „Einsteigen“ znamená nastoupit do dopravního prostředku; „vstupte“ znamená vejít.
- Proposed replacement: Nastupte prosím!
- Audit CURRENT: Vstupte prosím!
- Production CURRENT: Vstupte prosím!

---

## 031 — `sentence-30`

**DE**
`Treten Sie ein!`

**CS CURRENT**
`Prosím, vstupte!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 032 — `sentence-31`

**DE**
`Einzelnes hat mir dort gefallen.`

**CS CURRENT**
`Některé věci se mi tam líbily.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 033 — `sentence-32`

**DE**
`Es empfiehlt sich.`

**CS CURRENT**
`Doporučuje se.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 034 — `sentence-33`

**DE**
`Diese Flasche enthält Essig.`

**CS CURRENT**
`Tato láhev obsahuje ocet.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 035 — `sentence-34`

**DE**
`Entschuldigen Sie bitte!`

**CS CURRENT**
`Promiňte, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 036 — `sentence-35`

**DE**
`Entweder... oder...`

**CS CURRENT**
`Buď... nebo...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 037 — `sentence-36`

**DE**
`Wer war der Erste?`

**CS CURRENT**
`Kdo byl první?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 038 — `sentence-37`

**DE**
`Wer fehlt heute?`

**CS CURRENT**
`Kdo dnes nepřišel?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 039 — `sentence-38`

**DE**
`Was fehlt dir?`

**CS CURRENT**
`Co je s tebou?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 040 — `sentence-39`

**DE**
`Wie heißen Sie?`

**CS CURRENT**
`Jak se jmenuješ`

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
- Reason: Je nutné vykání podle německého „Sie“ a chybí koncové české otazníkové znaménko.
- Proposed replacement: Jak se jmenujete?
- Audit CURRENT: Jak se jmenuješ
- Production CURRENT: Jak se jmenuješ

---

## 041 — `sentence-40`

**DE**
`Was soll das heißen?`

**CS CURRENT**
`Co to znamená?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 042 — `sentence-41`

**DE**
`Bitte treten Sie näher heran!`

**CS CURRENT**
`Prosím, pojďte blíž!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 043 — `sentence-42`

**DE**
`Heraus mit der Sprache!`

**CS CURRENT**
`Mluvit! • Příběhy!`

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
- Reason: Ustálené zvolání znamená „Ven s tím!“ nebo „Mluvte!“; „Příběhy“ je chybný význam.
- Proposed replacement: Ven s tím! • Mluvte!
- Audit CURRENT: Mluvit! • Příběhy!
- Production CURRENT: Mluvit! • Příběhy!

---

## 044 — `sentence-43`

**DE**
`im Herbst`

**CS CURRENT**
`Na podzim`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 045 — `sentence-44`

**DE**
`Meine Herrschaften!`

**CS CURRENT**
`Dámy a pánové!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 046 — `sentence-45`

**DE**
`von heute an`

**CS CURRENT**
`Počínaje dneškem`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 047 — `sentence-46`

**DE**
`heute früh`

**CS CURRENT**
`Dnes ráno`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 048 — `sentence-47`

**DE**
`heute Nacht`

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
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: „Heute Nacht“ znamená „dnes v noci“ nebo „dnešní noc“, nikoli „včera v noci“.
- Proposed replacement: Dnes v noci
- Audit CURRENT: Včera v noci
- Production CURRENT: Včera v noci

---

## 049 — `sentence-48`

**DE**
`Zu Hilfe!`

**CS CURRENT**
`Pomoc!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 050 — `sentence-49`

**DE**
`Ich lerne jeden Tag Deutsch.`

**CS CURRENT**
`Německy se učím každý den.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---
