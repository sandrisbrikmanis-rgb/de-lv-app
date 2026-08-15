# CS–DE Věty — All Findings by Card (OWNER SOURCE)

READ-ONLY export for OWNER linguistic review. Audit proposed replacements are informational only — not OWNER-approved NEW values.

Generated: 2026-08-15T11:30:55.011Z
Source production: `data/cs/sentences.js`
Source audit: `reports/cs-vety-full-audit.md`, `reports/temp/cs-vety-audit/`

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

## 051 — `sentence-50`

**DE**
`Kannst du das bitte wiederholen?`

**CS CURRENT**
`Můžete to prosím zopakovat?`

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
- Reason: Německé „kannst du“ i zdrojové LV používají neformální oslovení, zatímco český text je formální.
- Proposed replacement: Můžeš to prosím zopakovat?
- Audit CURRENT: Můžete to prosím zopakovat?
- Production CURRENT: Můžete to prosím zopakovat?

---

## 052 — `sentence-51`

**DE**
`Wir treffen uns am Bahnhof.`

**CS CURRENT**
`Scházíme se na nádraží.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 053 — `sentence-52`

**DE**
`Ich stimme dir teilweise zu.`

**CS CURRENT**
`Částečně s tebou souhlasím.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 054 — `sentence-53`

**DE**
`Diese Entscheidung hat weitreichende Folgen.`

**CS CURRENT**
`Toto rozhodnutí má dalekosáhlé důsledky.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 055 — `sentence-54`

**DE**
`Man sollte mehrere Perspektiven berücksichtigen.`

**CS CURRENT**
`Je třeba zvážit několik úhlů pohledu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 056 — `sentence-55`

**DE**
`Könnten Sie das näher erläutern?`

**CS CURRENT**
`Mohl byste to vysvětlit podrobněji?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 057 — `sentence-56`

**DE**
`Was mich anbelangt,...`

**CS CURRENT**
`Pokud jde o mě...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 058 — `sentence-57`

**DE**
`Wie alt sind Sie?`

**CS CURRENT**
`Kolik je Vám let?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 059 — `sentence-58`

**DE**
`Ich bin zwanzig Jahre alt.`

**CS CURRENT**
`Je mi dvacet let.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 060 — `sentence-59`

**DE**
`Von heute an.`

**CS CURRENT**
`Ode dneška.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 061 — `sentence-60`

**DE**
`Von jetzt an.`

**CS CURRENT**
`Od teď.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 062 — `sentence-61`

**DE**
`Anders geht es nicht.`

**CS CURRENT**
`Není jiné cesty.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 063 — `sentence-62`

**DE**
`Rufen Sie mich an.`

**CS CURRENT**
`Zavolej mi.`

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
- Reason: Německé „Sie“ i LV používají formální nebo množné oslovení, český překlad je neformální jednotné číslo.
- Proposed replacement: Zavolejte mi.
- Audit CURRENT: Zavolej mi.
- Production CURRENT: Zavolej mi.

---

## 064 — `sentence-63`

**DE**
`Bitte stellen Sie das Radio ab.`

**CS CURRENT**
`Prosím vypněte rádio.`

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
- Reason: Po úvodním „Prosím“ se v češtině píše čárka.
- Proposed replacement: Prosím, vypněte rádio.
- Audit CURRENT: Prosím vypněte rádio.
- Production CURRENT: Prosím vypněte rádio.

---

## 065 — `sentence-64`

**DE**
`Achte bitte auf den Verkehr.`

**CS CURRENT**
`Věnujte prosím pozornost provozu.`

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
- Reason: „Achte“ je neformální jednotné oslovení, zatímco český text používá formální množné číslo.
- Proposed replacement: Dávej prosím pozor na provoz.
- Audit CURRENT: Věnujte prosím pozornost provozu.
- Production CURRENT: Věnujte prosím pozornost provozu.

---

## 066 — `sentence-65`

**DE**
`Darauf musst du achten.`

**CS CURRENT**
`Na to byste měli dávat pozor.`

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
- Reason: Český text mění neformální „ty“ na formální/množné „vy“ a „musíš“ na méně závazné „měl bys“.
- Proposed replacement: Na to si musíš dát pozor.
- Audit CURRENT: Na to byste měli dávat pozor.
- Production CURRENT: Na to byste měli dávat pozor.

---

## 067 — `sentence-66`

**DE**
`Heute mache ich es anders.`

**CS CURRENT**
`Dnes to udělám jinak.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 068 — `sentence-67`

**DE**
`Wir warten auf den Bus.`

**CS CURRENT**
`Čekáme na autobus.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 069 — `sentence-68`

**DE**
`Er wohnt allein.`

**CS CURRENT**
`Žije sám.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 070 — `sentence-69`

**DE**
`Ich habe die Ausbildung absolviert.`

**CS CURRENT**
`Skončil jsem trénink. • Ukončila jsem vzdělání.`

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
- Reason: „Ausbildung“ znamená odborné vzdělání či přípravu, nikoli sportovní trénink ani obecné vzdělání.
- Proposed replacement: Absolvoval jsem odborné vzdělání. • Absolvovala jsem odborné vzdělání.
- Audit CURRENT: Skončil jsem trénink. • Ukončila jsem vzdělání.
- Production CURRENT: Skončil jsem trénink. • Ukončila jsem vzdělání.

---

## 071 — `sentence-70`

**DE**
`Ich warte den Regen ab.`

**CS CURRENT**
`Počkám, až přestane pršet.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 072 — `sentence-71`

**DE**
`Er arbeitet in der Verkaufsabteilung.`

**CS CURRENT**
`Pracuje v obchodním oddělení.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 073 — `sentence-72`

**DE**
`Ich bin allergisch gegen Katzen.`

**CS CURRENT**
`Jsem alergický na kočky.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 074 — `sentence-73`

**DE**
`Andererseits verstehe ich ihn.`

**CS CURRENT**
`Na druhou stranu ho chápu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 075 — `sentence-74`

**DE**
`Ich habe die Situation analysiert.`

**CS CURRENT**
`Analyzoval jsem situaci.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 076 — `sentence-75`

**DE**
`Sie hat meinen Vorschlag akzeptiert.`

**CS CURRENT**
`Přijala můj návrh.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 077 — `sentence-76`

**DE**
`Ich möchte das genauer analysieren.`

**CS CURRENT**
`Chci to analyzovat přesněji.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 078 — `sentence-77`

**DE**
`Ich möchte den Vertrag ändern.`

**CS CURRENT**
`Chci změnit smlouvu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 079 — `sentence-78`

**DE**
`Er ändert ständig seine Meinung.`

**CS CURRENT**
`Neustále mění svůj názor.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 080 — `sentence-79`

**DE**
`Ähnliche Probleme hatten wir schon früher.`

**CS CURRENT**
`Předtím jsme měli podobné problémy.`

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
- Reason: „Předtím“ obvykle odkazuje k určitému předchozímu okamžiku; zde má význam „už dříve“.
- Proposed replacement: Podobné problémy jsme měli už dříve.
- Audit CURRENT: Předtím jsme měli podobné problémy.
- Production CURRENT: Předtím jsme měli podobné problémy.

---

## 081 — `sentence-80`

**DE**
`Keine Ahnung!`

**CS CURRENT**
`Žádný nápad!`

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
- Reason: „Keine Ahnung“ je české idiomatické „Nemám ponětí“, ne doslovné „Žádný nápad“.
- Proposed replacement: Nemám ponětí!
- Audit CURRENT: Žádný nápad!
- Production CURRENT: Žádný nápad!

---

## 082 — `sentence-81`

**DE**
`Hör auf zu jammern.`

**CS CURRENT**
`Přestaň si stěžovat.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 083 — `sentence-82`

**DE**
`Dieses Kleid ist akademisch gekleidet.`

**CS CURRENT**
`Tyto šaty jsou stylově konzervativní.`

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
- Reason: Český text překládá „akademisch“ jako „konzervativní“, což není stejný význam; německá formulace je navíc neobvyklá.
- Proposed replacement: Tyto šaty jsou v akademickém stylu.
- Audit CURRENT: Tyto šaty jsou stylově konzervativní.
- Production CURRENT: Tyto šaty jsou stylově konzervativní.

---

## 084 — `sentence-83`

**DE**
`Ich höre gerne Akkordeonmusik.`

**CS CURRENT**
`Rád poslouchám hudbu na akordeon.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 085 — `sentence-84`

**DE**
`Kannst du das Gerät anklicken?`

**CS CURRENT**
`Můžete kliknout na zařízení?`

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
- Reason: Německé „kannst du“ i LV používají neformální oslovení, český překlad je formální.
- Proposed replacement: Můžeš kliknout na zařízení?
- Audit CURRENT: Můžete kliknout na zařízení?
- Production CURRENT: Můžete kliknout na zařízení?

---

## 086 — `sentence-85`

**DE**
`Bitte öffne die Datei und klicke darauf.`

**CS CURRENT**
`Otevřete soubor a klikněte na něj.`

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
- Reason: Německé i LV znění používá neformální jednotné oslovení, české znění formální množné číslo.
- Proposed replacement: Otevři soubor a klikni na něj.
- Audit CURRENT: Otevřete soubor a klikněte na něj.
- Production CURRENT: Otevřete soubor a klikněte na něj.

---

## 087 — `sentence-86`

**DE**
`Ich habe einen Unfall gehabt.`

**CS CURRENT**
`Měl jsem nehodu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 088 — `sentence-87`

**DE**
`Wir laufen zum Bahnhof.`

**CS CURRENT**
`Jdeme na nádraží.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 089 — `sentence-88`

**DE**
`Bitte schalte den Fernseher an.`

**CS CURRENT**
`Zapněte prosím televizi.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 090 — `sentence-89`

**DE**
`Mein Computer ist abgestürzt.`

**CS CURRENT**
`Můj počítač se zhroutil.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 091 — `sentence-90`

**DE**
`Am Wochenende gehe ich angeln.`

**CS CURRENT**
`O víkendu pojedu na ryby.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 092 — `sentence-91`

**DE**
`Ich habe den Anruf verpasst.`

**CS CURRENT**
`Zmeškal jsem hovor.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 093 — `sentence-92`

**DE**
`Kannst du mich später anrufen?`

**CS CURRENT**
`Můžeš mi zavolat později`

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
- Reason: České tázací souvětí postrádá koncové otazníkové znaménko.
- Proposed replacement: Můžeš mi zavolat později?
- Audit CURRENT: Můžeš mi zavolat později
- Production CURRENT: Můžeš mi zavolat později

---

## 094 — `sentence-93`

**DE**
`Bitte nimm meinen Vorschlag an.`

**CS CURRENT**
`Přijměte prosím můj návrh.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 095 — `sentence-94`

**DE**
`Ich nehme dein Angebot an.`

**CS CURRENT**
`Vaši nabídku přijímám.`

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
- Reason: Německé „dein“ i LV používají neformální přivlastnění, české „Vaši“ je formální.
- Proposed replacement: Tvoji nabídku přijímám.
- Audit CURRENT: Vaši nabídku přijímám.
- Production CURRENT: Vaši nabídku přijímám.

---

## 096 — `sentence-95`

**DE**
`Er nahm die Einladung an.`

**CS CURRENT**
`Pozvání přijal.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 097 — `sentence-96`

**DE**
`Ich habe Angst vor Spinnen.`

**CS CURRENT**
`Bojím se pavouků.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 098 — `sentence-97`

**DE**
`Keine Angst, alles wird gut.`

**CS CURRENT**
`Neboj se, všechno bude v pořádku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 099 — `sentence-98`

**DE**
`Anklang finden.`

**CS CURRENT**
`Najděte ozvěnu. • Najděte schopnost reagovat`

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
- Reason: Fráze znamená „najít ohlas/kladné přijetí“; český text má chybný imperativ a doslovné, nesmyslné významy.
- Proposed replacement: Najít ohlas. • Setkat se s kladným přijetím.
- Audit CURRENT: Najděte ozvěnu. • Najděte schopnost reagovat
- Production CURRENT: Najděte ozvěnu. • Najděte schopnost reagovat

---

## 100 — `sentence-99`

**DE**
`Es kommt darauf an.`

**CS CURRENT**
`Na tom záleží.`

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
- Reason: „Es kommt darauf an“ znamená „záleží na tom“ ve smyslu závislosti; aktuální slovosled přirozeněji vyjadřuje jiný význam.
- Proposed replacement: Záleží na tom.
- Audit CURRENT: Na tom záleží.
- Production CURRENT: Na tom záleží.

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

## 151 — `sentence-150`

**DE**
`Erz bauen.`

**CS CURRENT**
`Získejte rudu.`

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
- Reason: Německé „Erz bauen“ znamená těžit rudu, nikoli získat ji v imperativu.
- Proposed replacement: Těžit rudu.
- Audit CURRENT: Získejte rudu.
- Production CURRENT: Získejte rudu.

---

## 152 — `sentence-151`

**DE**
`Mist bauen.`

**CS CURRENT**
`Střílet. • Udělejte ze sebe blázna`

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
- Reason: Idiom znamená dělat hlouposti nebo chyby; „Střílet“ je významově nesprávné a druhá varianta je nepřesná.
- Proposed replacement: Vyvádět hlouposti. • Dělat chyby
- Audit CURRENT: Střílet. • Udělejte ze sebe blázna
- Production CURRENT: Střílet. • Udělejte ze sebe blázna

---

## 153 — `sentence-152`

**DE**
`Ich bin beauftragt.`

**CS CURRENT**
`Byla mi přidělena práce.`

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
- Reason: Německé „beauftragt“ znamená „pověřen“, ne „přidělena práce“; současně je uveden ženský rod.
- Proposed replacement: Jsem pověřen(a).
- Audit CURRENT: Byla mi přidělena práce.
- Production CURRENT: Byla mi přidělena práce.

---

## 154 — `sentence-153`

**DE**
`Nach Bedarf.`

**CS CURRENT**
`Podle potřeby.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 155 — `sentence-154`

**DE**
`Ich bedauere ihn.`

**CS CURRENT**
`Je mi ho líto.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 156 — `sentence-155`

**DE**
`Was bedeutet dieses Wort?`

**CS CURRENT**
`Co toto slovo znamená?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 157 — `sentence-156`

**DE**
`Unter der Bedingung, dass...`

**CS CURRENT**
`Pokud...`

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
- Reason: „Pokud“ vyjadřuje obecnou podmínku, ale vypouští význam výslovně uvedené podmínky.
- Proposed replacement: Za podmínky, že...
- Audit CURRENT: Pokud...
- Production CURRENT: Pokud...

---

## 158 — `sentence-157`

**DE**
`Sie sieht bedrückt aus.`

**CS CURRENT**
`Vypadá depresivně.`

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
- Reason: „Bedrückt“ zde znamená skleslý nebo zaražený; „depresivně“ zní nepřirozeně a klinicky.
- Proposed replacement: Vypadá sklesle.
- Audit CURRENT: Vypadá depresivně.
- Production CURRENT: Vypadá depresivně.

---

## 159 — `sentence-158`

**DE**
`Hinweise befolgen.`

**CS CURRENT**
`Postupujte podle pokynů.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 160 — `sentence-159`

**DE**
`Befehle befolgen.`

**CS CURRENT**
`Postupujte podle rozkazů.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 161 — `sentence-160`

**DE**
`Mit der Post befördern.`

**CS CURRENT**
`Poslat poštou.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 162 — `sentence-161`

**DE**
`Ich bin begierig zu wissen.`

**CS CURRENT**
`Opravdu to chci vědět.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 163 — `sentence-162`

**DE**
`Zu Beginn.`

**CS CURRENT**
`Na začátku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 164 — `sentence-163`

**DE**
`Am Beginn.`

**CS CURRENT**
`Na začátku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 165 — `sentence-164`

**DE**
`Bei Beginn.`

**CS CURRENT**
`Spuštění`

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
- Reason: Německé spojení znamená „na začátku“; „spuštění“ označuje zahájení procesu nebo zařízení.
- Proposed replacement: Na začátku.
- Audit CURRENT: Spuštění
- Production CURRENT: Spuštění

---

## 166 — `sentence-165`

**DE**
`In Begleitung.`

**CS CURRENT**
`V doprovodu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 167 — `sentence-166`

**DE**
`Mit seiner Begleitung.`

**CS CURRENT**
`S doprovodem.`

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
- Reason: Česká verze vypouští přivlastnění „jeho“, které je v německém originálu výslovně uvedeno.
- Proposed replacement: S jeho doprovodem.
- Audit CURRENT: S doprovodem.
- Production CURRENT: S doprovodem.

---

## 168 — `sentence-167`

**DE**
`Er ist schwer von Begriff.`

**CS CURRENT**
`Je pomalý na vnímání. • Má pomalé myšlení`

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
- Reason: „Pomalý na vnímání“ není přirozené české spojení; idiom označuje pomalé chápání.
- Proposed replacement: Pomalu chápe. • Má pomalé myšlení
- Audit CURRENT: Je pomalý na vnímání. • Má pomalé myšlení
- Production CURRENT: Je pomalý na vnímání. • Má pomalé myšlení

---

## 169 — `sentence-168`

**DE**
`Im Gedächtnis behalten.`

**CS CURRENT**
`Pamatujte si. • Uchovávejte v paměti`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 170 — `sentence-169`

**DE**
`Bei Tisch.`

**CS CURRENT**
`U stolu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 171 — `sentence-170`

**DE**
`Bei Sinnen sein.`

**CS CURRENT**
`Abych byl při smyslech.`

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
- Reason: Německý infinitiv je přeložen vedlejší větou v 1. osobě, což mění gramatickou strukturu i význam.
- Proposed replacement: Být při smyslech.
- Audit CURRENT: Abych byl při smyslech.
- Production CURRENT: Abych byl při smyslech.

---

## 172 — `sentence-171`

**DE**
`Bei Tage.`

**CS CURRENT**
`Během dne.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 173 — `sentence-172`

**DE**
`Bei weitem nicht so.`

**CS CURRENT**
`Vůbec ne.`

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
- Reason: „Bei weitem nicht so“ znamená „zdaleka ne tolik/tak“, nikoli obecné „vůbec ne“.
- Proposed replacement: Zdaleka ne tolik.
- Audit CURRENT: Vůbec ne.
- Production CURRENT: Vůbec ne.

---

## 174 — `sentence-173`

**DE**
`Alle beide.`

**CS CURRENT**
`Oba dva.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 175 — `sentence-174`

**DE**
`Stürmischer Beifall brach los.`

**CS CURRENT**
`Ozval se bouřlivý potlesk.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 176 — `sentence-175`

**DE**
`Beifall finden.`

**CS CURRENT**
`Získejte souhlas.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 177 — `sentence-176`

**DE**
`Beileid aussprechen.`

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

## 178 — `sentence-177`

**DE**
`Auf eigenen Beinen stehen.`

**CS CURRENT**
`Být finančně nezávislý.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 179 — `sentence-178`

**DE**
`Zum Beispiel.`

**CS CURRENT**
`Například.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 180 — `sentence-179`

**DE**
`Beistand leisten.`

**CS CURRENT**
`Na pomoc. • Poskytněte pomoc`

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
- Reason: „Na pomoc“ není významově ani gramaticky ekvivalentní infinitivu; druhá varianta je zbytečně v imperativu.
- Proposed replacement: Poskytnout pomoc.
- Audit CURRENT: Na pomoc. • Poskytněte pomoc
- Production CURRENT: Na pomoc. • Poskytněte pomoc

---

## 181 — `sentence-180`

**DE**
`Beitrag leisten.`

**CS CURRENT**
`Investujte svůj podíl.`

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
- Reason: „Beitrag leisten“ znamená přispět nebo podílet se, ne investovat svůj podíl.
- Proposed replacement: Přispět svým dílem.
- Audit CURRENT: Investujte svůj podíl.
- Production CURRENT: Investujte svůj podíl.

---

## 182 — `sentence-181`

**DE**
`Jemandes Bekanntschaft machen.`

**CS CURRENT**
`Seznamte se s někým.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 183 — `sentence-182`

**DE**
`Bekanntschaft anknüpfen.`

**CS CURRENT**
`Seznamte se navzájem. • Navažte kontakt`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 184 — `sentence-183`

**DE**
`Belegte Brötchen.`

**CS CURRENT**
`Sendviče s polevou.`

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
- Reason: „Belegt“ u housek znamená obložené nebo plněné; „poleva“ je icing/glazura.
- Proposed replacement: Obložené housky.
- Audit CURRENT: Sendviče s polevou.
- Production CURRENT: Sendviče s polevou.

---

## 185 — `sentence-184`

**DE**
`Nach Ihrem Belieben.`

**CS CURRENT**
`Jak si přejete.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 186 — `sentence-185`

**DE**
`Zu jeder beliebigen Zeit.`

**CS CURRENT**
`Kdykoli.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 187 — `sentence-186`

**DE**
`Schweigen beobachten.`

**CS CURRENT**
`Dodržovat ticho.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 188 — `sentence-187`

**DE**
`Zur Bequemlichkeit.`

**CS CURRENT**
`Pro pohodlí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 189 — `sentence-188`

**DE**
`Bereit sein.`

**CS CURRENT**
`Buďte připraveni. • Buďte v klidu`

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
- Reason: Druhá česká varianta znamená „být klidný“, nikoli „být připraven“, a přidává nesouvisející význam.
- Proposed replacement: Být připraven.
- Audit CURRENT: Buďte připraveni. • Buďte v klidu
- Production CURRENT: Buďte připraveni. • Buďte v klidu

---

## 190 — `sentence-189`

**DE**
`Unfallopfer bergen.`

**CS CURRENT**
`Záchrana obětí v případě nehody.`

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
- Reason: Německý infinitiv označuje činnost; česká verze je pouze podstatné jméno a navíc zní jako obecný popis.
- Proposed replacement: Zachraňovat oběti nehody.
- Audit CURRENT: Záchrana obětí v případě nehody.
- Production CURRENT: Záchrana obětí v případě nehody.

---

## 191 — `sentence-190`

**DE**
`Bericht erstatten.`

**CS CURRENT**
`Zpráva. • Poskytněte zprávu • Poskytněte přehled`

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
- Reason: Výraz znamená podat nebo předložit zprávu; „Zpráva“ je jen podstatné jméno a „přehled“ mění význam.
- Proposed replacement: Podat zprávu.
- Audit CURRENT: Zpráva. • Poskytněte zprávu • Poskytněte přehled
- Production CURRENT: Zpráva. • Poskytněte zprávu • Poskytněte přehled

---

## 192 — `sentence-191`

**DE**
`Alle Plätze sind besetzt.`

**CS CURRENT**
`Všechna místa jsou obsazena.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 193 — `sentence-192`

**DE**
`Neue Besen kehren gut.`

**CS CURRENT**
`Nové koště dobře mete.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 194 — `sentence-193`

**DE**
`Er besitzt ein Haus.`

**CS CURRENT**
`Vlastní dům.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 195 — `sentence-194`

**DE**
`Er besitzt viel Mut.`

**CS CURRENT**
`Má velkou odvahu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 196 — `sentence-195`

**DE**
`Desto besser.`

**CS CURRENT**
`Tím lépe.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 197 — `sentence-196`

**DE**
`Gute Besserung!`

**CS CURRENT**
`Uzdrav se! • Uzdravte se!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 198 — `sentence-197`

**DE**
`Beim besten Willen.`

**CS CURRENT**
`Cokoli chcete.`

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
- Reason: Německý výraz znamená „při nejlepší vůli“ nebo „i kdybych sebevíc chtěl“, ne „cokoli chcete“.
- Proposed replacement: Při nejlepší vůli.
- Audit CURRENT: Cokoli chcete.
- Production CURRENT: Cokoli chcete.

---

## 199 — `sentence-198`

**DE**
`Am besten.`

**CS CURRENT**
`Nejlepší.`

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
- Reason: „Am besten“ je příslovce „nejlépe“; „nejlepší“ je přídavné jméno.
- Proposed replacement: Nejlépe.
- Audit CURRENT: Nejlepší.
- Production CURRENT: Nejlepší.

---

## 200 — `sentence-199`

**DE**
`Es besteht Zweifel.`

**CS CURRENT**
`Existují pochybnosti.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 201 — `sentence-200`

**DE**
`Seine Aufgabe besteht darin...`

**CS CURRENT**
`Jeho úkolem je...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 202 — `sentence-201`

**DE**
`Grüße bestellen.`

**CS CURRENT**
`Pozdravit.`

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
- Reason: Výraz znamená vyřídit někomu pozdravy, nikoli obecně někoho pozdravit.
- Proposed replacement: Vyřídit pozdravy.
- Audit CURRENT: Pozdravit.
- Production CURRENT: Pozdravit.

---

## 203 — `sentence-202`

**DE**
`Ganz bestimmt.`

**CS CURRENT**
`Rozhodně. • Zcela bezpečné`

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
- Reason: „Zcela bezpečné“ znamená úplně bezpečné, nikoli rozhodně nebo určitě.
- Proposed replacement: Rozhodně.
- Audit CURRENT: Rozhodně. • Zcela bezpečné
- Production CURRENT: Rozhodně. • Zcela bezpečné

---

## 204 — `sentence-203`

**DE**
`Zu Besuch kommen.`

**CS CURRENT**
`Přijďte navštívit.`

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
- Reason: Zdroj je infinitiv a znamená přijít na návštěvu; současný text je formální rozkaz s jinou vazbou.
- Proposed replacement: Přijít na návštěvu.
- Audit CURRENT: Přijďte navštívit.
- Production CURRENT: Přijďte navštívit.

---

## 205 — `sentence-204`

**DE**
`Zu Besuch sein.`

**CS CURRENT**
`Na návštěvu. • Navštívit`

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
- Reason: Obě současné možnosti vyjadřují směr nebo děj navštívení, ne stav být na návštěvě.
- Proposed replacement: Být na návštěvě.
- Audit CURRENT: Na návštěvu. • Navštívit
- Production CURRENT: Na návštěvu. • Navštívit

---

## 206 — `sentence-205`

**DE**
`Oft Konzerte besuchen.`

**CS CURRENT**
`Často chodí na koncerty.`

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
- Reason: Německý výraz je infinitivní fráze; český text má místo něj 3. osobu jednotného čísla.
- Proposed replacement: Často chodit na koncerty.
- Audit CURRENT: Často chodí na koncerty.
- Production CURRENT: Často chodí na koncerty.

---

## 207 — `sentence-206`

**DE**
`Welche Schule hat er besucht?`

**CS CURRENT**
`Na jakou školu chodil?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 208 — `sentence-207`

**DE**
`In Betracht ziehen.`

**CS CURRENT**
`Vzít v úvahu. • Zvažte`

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
- Reason: Druhá varianta je imperativ, zatímco německý výraz je infinitiv.
- Proposed replacement: Vzít v úvahu. • Zvážit
- Audit CURRENT: Vzít v úvahu. • Zvažte
- Production CURRENT: Vzít v úvahu. • Zvažte

---

## 209 — `sentence-208`

**DE**
`Außer Betracht lassen.`

**CS CURRENT**
`Ignorovat. • Neuvažujte`

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
- Reason: Druhá varianta mění infinitiv na rozkaz a první nevystihuje přesně vazbu „nebrat v úvahu“.
- Proposed replacement: Nevzít v úvahu. • Pominout
- Audit CURRENT: Ignorovat. • Neuvažujte
- Production CURRENT: Ignorovat. • Neuvažujte

---

## 210 — `sentence-209`

**DE**
`Er betreibt ein Hotel.`

**CS CURRENT**
`Provozuje hotel.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 211 — `sentence-210`

**DE**
`Alle beiden.`

**CS CURRENT**
`Oba dva.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 212 — `sentence-211`

**DE**
`Alles bezahlen.`

**CS CURRENT**
`Zaplať všechno.`

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
- Reason: Německý výraz je infinitiv, ale český překlad je rozkaz ve 2. osobě jednotného čísla.
- Proposed replacement: Zaplatit všechno.
- Audit CURRENT: Zaplať všechno.
- Production CURRENT: Zaplať všechno.

---

## 213 — `sentence-212`

**DE**
`Bezüglich auf etwas.`

**CS CURRENT**
`Ohledně něčeho.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 214 — `sentence-213`

**DE**
`Bitte schön.`

**CS CURRENT**
`Prosím`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 215 — `sentence-214`

**DE**
`Wie bitte?`

**CS CURRENT**
`Jak prosím`

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
- Reason: Česká ustálená replika pro „Wie bitte?“ je „Prosím?“; současné znění je nepřirozené a bez interpunkce.
- Proposed replacement: Prosím?
- Audit CURRENT: Jak prosím
- Production CURRENT: Jak prosím

---

## 216 — `sentence-215`

**DE**
`Bitte sehr.`

**CS CURRENT**
`Prosím`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 217 — `sentence-216`

**DE**
`Ich habe eine Bitte an Sie.`

**CS CURRENT**
`Mám na vás prosbu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 218 — `sentence-217`

**DE**
`Trompete blasen.`

**CS CURRENT**
`Trubte na trubku.`

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
- Reason: Současný text je rozkaz; německý výraz je infinitiv. Přirozené české sloveso je „troubit“.
- Proposed replacement: Troubit na trubku.
- Audit CURRENT: Trubte na trubku.
- Production CURRENT: Trubte na trubku.

---

## 219 — `sentence-218`

**DE**
`In einem Buch blättern.`

**CS CURRENT**
`Roztřiďte knihu.`

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
- Reason: „Roztřídit knihu“ znamená knihu kategorizovat; blättern znamená listovat.
- Proposed replacement: Listovat v knize.
- Audit CURRENT: Roztřiďte knihu.
- Production CURRENT: Roztřiďte knihu.

---

## 220 — `sentence-219`

**DE**
`Mit bloßen Füßen.`

**CS CURRENT**
`Bosé nohy.`

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
- Reason: Předložka „mit“ vyžaduje instrumentál; správně je „bosýma nohama“.
- Proposed replacement: Bosýma nohama.
- Audit CURRENT: Bosé nohy.
- Production CURRENT: Bosé nohy.

---

## 221 — `sentence-220`

**DE**
`Mit bloßem Auge.`

**CS CURRENT**
`Pouhým okem.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 222 — `sentence-221`

**DE**
`Danke für die Blumen!`

**CS CURRENT**
`Díky za květiny!`

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
- Reason: Jde o ustálenou ironickou reakci na pochvalu, ne obvykle o doslovné poděkování za květiny.
- Proposed replacement: Díky za kompliment!
- Audit CURRENT: Díky za květiny!
- Production CURRENT: Díky za květiny!

---

## 223 — `sentence-222`

**DE**
`Alles in Butter.`

**CS CURRENT**
`Všechno je v pořádku.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 224 — `sentence-223`

**DE**
`Bitte checken.`

**CS CURRENT**
`Kontrola. • Zkontrolujte`

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
- Reason: Německá fráze je zdvořilá žádost; „Kontrola“ není slovesný překlad a druhá varianta mění formát i význam.
- Proposed replacement: Prosím, zkontrolujte.
- Audit CURRENT: Kontrola. • Zkontrolujte
- Production CURRENT: Kontrola. • Zkontrolujte

---

## 225 — `sentence-224`

**DE**
`Da ist er!`

**CS CURRENT**
`Tady je!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 226 — `sentence-225`

**DE**
`Alles spricht dafür.`

**CS CURRENT**
`Všechno mluví dobře.`

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
- Reason: Výraz znamená, že všechny okolnosti hovoří ve prospěch něčeho nebo tomu nasvědčují.
- Proposed replacement: Všechno tomu nasvědčuje.
- Audit CURRENT: Všechno mluví dobře.
- Production CURRENT: Všechno mluví dobře.

---

## 227 — `sentence-226`

**DE**
`Ich kann nichts dafür.`

**CS CURRENT**
`Nemůžu tam nic dělat.`

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
- Reason: Německá věta znamená „není to moje vina“ nebo „nemohu za to“, nikoli nemožnost něco dělat tam.
- Proposed replacement: Nemůžu za to.
- Audit CURRENT: Nemůžu tam nic dělat.
- Production CURRENT: Nemůžu tam nic dělat.

---

## 228 — `sentence-227`

**DE**
`Ich bin dagegen.`

**CS CURRENT**
`Jsem proti tomu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 229 — `sentence-228`

**DE**
`Ich habe nichts dagegen.`

**CS CURRENT**
`K tomu nemám námitek.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 230 — `sentence-229`

**DE**
`Von daheim.`

**CS CURRENT**
`Z domova.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 231 — `sentence-230`

**DE**
`Mit der Dame ziehen.`

**CS CURRENT**
`Udělejte dámský tah.`

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
- Reason: Německý výraz je infinitiv; současný text je formální rozkaz. V šachu se přirozeně říká „táhnout dámou“.
- Proposed replacement: Táhnout dámou.
- Audit CURRENT: Udělejte dámský tah.
- Production CURRENT: Udělejte dámský tah.

---

## 232 — `sentence-231`

**DE**
`Es dämmert.`

**CS CURRENT**
`Už se stmívá. • Svítá.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 233 — `sentence-232`

**DE**
`Danke schön!`

**CS CURRENT**
`Děkuju! • Děkujeme!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 234 — `sentence-233`

**DE**
`Dann und wann.`

**CS CURRENT**
`Tu a tam.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 235 — `sentence-234`

**DE**
`Darauf kannst du dich verlassen.`

**CS CURRENT**
`Na to se můžete spolehnout.`

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
- Reason: Německé „du“ je neformální jednotné číslo, ale český překlad používá vykání nebo množné číslo.
- Proposed replacement: Na to se můžeš spolehnout.
- Audit CURRENT: Na to se můžete spolehnout.
- Production CURRENT: Na to se můžete spolehnout.

---

## 236 — `sentence-235`

**DE**
`Daraus wird nichts.`

**CS CURRENT**
`Z toho nic nebude.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 237 — `sentence-236`

**DE**
`So dass...`

**CS CURRENT**
`Aby...`

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
- Reason: „So dass“ vyjadřuje důsledek, zatímco „aby“ vyjadřuje účel.
- Proposed replacement: Takže...
- Audit CURRENT: Aby...
- Production CURRENT: Aby...

---

## 238 — `sentence-237`

**DE**
`Für wen halten Sie mich?`

**CS CURRENT**
`Co si myslíš, že jsem?`

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
- Reason: Současný text používá neformální „ty“ a významově se ptá, co jsem, nikoli za koho mě považujete.
- Proposed replacement: Za koho mě považujete?
- Audit CURRENT: Co si myslíš, že jsem?
- Production CURRENT: Co si myslíš, že jsem?

---

## 239 — `sentence-238`

**DE**
`Hände weg!`

**CS CURRENT**
`Ruce pryč!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 240 — `sentence-239`

**DE**
`Lass den Kopf nicht hängen!`

**CS CURRENT**
`Neskláněj hlavu!`

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
- Reason: Český ustálený ekvivalent tohoto povzbuzení je „Nevěš hlavu!“, ne doslovné „Neskláněj hlavu“.
- Proposed replacement: Nevěš hlavu!
- Audit CURRENT: Neskláněj hlavu!
- Production CURRENT: Neskláněj hlavu!

---

## 241 — `sentence-240`

**DE**
`zu Hause`

**CS CURRENT**
`Doma`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 242 — `sentence-241`

**DE**
`nach Hause gehen`

**CS CURRENT**
`Jít domů`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 243 — `sentence-242`

**DE**
`von Haus aus`

**CS CURRENT**
`Od dětství • Od samého počátku`

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
- Reason: „Von Haus aus“ znamená od přírody, původem nebo odjakživa, ne od dětství či od počátku.
- Proposed replacement: Od přírody • Odjakživa
- Audit CURRENT: Od dětství • Od samého počátku
- Production CURRENT: Od dětství • Od samého počátku

---

## 244 — `sentence-243`

**DE**
`Meinen herzlichsten Glückwunsch!`

**CS CURRENT**
`Gratuluji!`

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
- Reason: Současný překlad je obecný; vynechává význam „mé nejsrdečnější gratulace“ a zní méně vhodně jako samostatné přání.
- Proposed replacement: Srdečně blahopřeji!
- Audit CURRENT: Gratuluji!
- Production CURRENT: Gratuluji!

---

## 245 — `sentence-244`

**DE**
`Seien Sie so gut!`

**CS CURRENT**
`Buď tak laskav! • Buďte tak dobří!`

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
- Reason: Německé „Sie“ vyžaduje české vykání; první varianta je tykání a druhá je méně přirozená.
- Proposed replacement: Buďte tak laskav!
- Audit CURRENT: Buď tak laskav! • Buďte tak dobří!
- Production CURRENT: Buď tak laskav! • Buďte tak dobří!

---

## 246 — `sentence-245`

**DE**
`Haben Sie die Güte!`

**CS CURRENT**
`Buď tak laskav!`

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
- Reason: Německé „Sie“ je formální oslovení, ale český překlad používá neformální tykání.
- Proposed replacement: Buďte tak laskav!
- Audit CURRENT: Buď tak laskav!
- Production CURRENT: Buď tak laskav!

---

## 247 — `sentence-246`

**DE**
`Was hast du?`

**CS CURRENT**
`Co je s tebou? • Co se stalo?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 248 — `sentence-247`

**DE**
`Gestatten Sie bitte!`

**CS CURRENT**
`Dovolte mi, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 249 — `sentence-248`

**DE**
`Ist es gestattet zu rauchen?`

**CS CURRENT**
`Mohu kouřit?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 250 — `sentence-249`

**DE**
`Ich muss gestehen, dass...`

**CS CURRENT**
`Musím přiznat, že...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
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

## 301 — `sentence-300`

**DE**
`Wir gehen mit Ihnen.`

**CS CURRENT**
`Jdeme s vámi.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 302 — `sentence-301`

**DE**
`Ich fahre mit der Eisenbahn.`

**CS CURRENT**
`Jedu vlakem.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 303 — `sentence-302`

**DE**
`am Mittwoch`

**CS CURRENT**
`Ve středu`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 304 — `sentence-303`

**DE**
`Es mag sein.`

**CS CURRENT**
`Možná.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 305 — `sentence-304`

**DE**
`Ich mag das nicht.`

**CS CURRENT**
`Nelíbí se mi to.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 306 — `sentence-305`

**DE**
`am Montag`

**CS CURRENT**
`V pondělí`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 307 — `sentence-306`

**DE**
`Guten Morgen!`

**CS CURRENT**
`Dobré ráno!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 308 — `sentence-307`

**DE**
`am Morgen`

**CS CURRENT**
`Ráno`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 309 — `sentence-308`

**DE**
`Gute Nacht!`

**CS CURRENT**
`Dobrou noc!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 310 — `sentence-309`

**DE**
`Nehmen Sie Platz!`

**CS CURRENT**
`Posaďte se!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 311 — `sentence-310`

**DE**
`Letzte Neuheit!`

**CS CURRENT**
`Nejnovější zprávy!`

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
- Reason: Czech changes the singular novelty/news item into plural news and shifts the meaning.
- Proposed replacement: Poslední novinka!
- Audit CURRENT: Nejnovější zprávy!
- Production CURRENT: Nejnovější zprávy!

---

## 312 — `sentence-311`

**DE**
`Nicht wahr?`

**CS CURRENT**
`Právo?`

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
- Reason: „Právo?“ means „right?“ in the sense of correctness or entitlement, not the tag question „isn't it?“.
- Proposed replacement: Že ano?
- Audit CURRENT: Právo?
- Production CURRENT: Právo?

---

## 313 — `sentence-312`

**DE**
`Nicht doch!`

**CS CURRENT**
`Ne, samozřejmě! • Ne!`

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
- Reason: „Ne, samozřejmě!“ means „No, of course!“ and contradicts the German exclamation; „Ne!“ is too incomplete as the main equivalent.
- Proposed replacement: Ale ne! • To ne!
- Audit CURRENT: Ne, samozřejmě! • Ne!
- Production CURRENT: Ne, samozřejmě! • Ne!

---

## 314 — `sentence-313`

**DE**
`Nun endlich!`

**CS CURRENT**
`No konečně!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 315 — `sentence-314`

**DE**
`Wozu nützt das?`

**CS CURRENT**
`K čemu je to dobré?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 316 — `sentence-315`

**DE**
`Wozu nützt das alles?`

**CS CURRENT**
`K čemu to všechno je?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 317 — `sentence-316`

**DE**
`Parken verboten!`

**CS CURRENT**
`Parkování je zakázáno!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 318 — `sentence-317`

**DE**
`Nicht parken!`

**CS CURRENT**
`Parkování je zakázáno!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 319 — `sentence-318`

**DE**
`Er hat Recht.`

**CS CURRENT**
`Má pravdu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 320 — `sentence-319`

**DE**
`Wovon ist die Rede?`

**CS CURRENT**
`O co jde?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 321 — `sentence-320`

**DE**
`Davon kann keine Rede sein.`

**CS CURRENT**
`To nepřipadá v úvahu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 322 — `sentence-321`

**DE**
`Glückliche Reise!`

**CS CURRENT**
`Šťastnou cestu!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 323 — `sentence-322`

**DE**
`Mir reißt die Geduld.`

**CS CURRENT**
`Už mi dochází trpělivost.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 324 — `sentence-323`

**DE**
`Man sagt, dass...`

**CS CURRENT**
`Říkají, že...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 325 — `sentence-324`

**DE**
`Schon gut!`

**CS CURRENT**
`Už je to dobré!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 326 — `sentence-325`

**DE**
`Bitte schön!`

**CS CURRENT**
`Prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 327 — `sentence-326`

**DE**
`Was bin ich schuldig?`

**CS CURRENT**
`Kolik Vám dlužím? • Kolik musím zaplatit?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 328 — `sentence-327`

**DE**
`Vor dem Gebrauch schütteln!`

**CS CURRENT**
`Před použitím protřepat!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 329 — `sentence-328`

**DE**
`Sehen Sie mal!`

**CS CURRENT**
`Podívejte se!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 330 — `sentence-329`

**DE**
`Wie sehr auch...`

**CS CURRENT**
`Kolik...`

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
- Reason: „Kolik“ means „how many/how much“, while the German phrase expresses „however much/how strongly“.
- Proposed replacement: Jakkoli...
- Audit CURRENT: Kolik...
- Production CURRENT: Kolik...

---

## 331 — `sentence-330`

**DE**
`Seit wann?`

**CS CURRENT**
`Od kdy?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 332 — `sentence-331`

**DE**
`Was soll ich tun?`

**CS CURRENT**
`Co mám dělat?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 333 — `sentence-332`

**DE**
`im Sommer`

**CS CURRENT**
`V létě`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 334 — `sentence-333`

**DE**
`Nicht nur..., sondern auch...`

**CS CURRENT**
`Nejen... ale i...`

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
- Reason: The correlative Czech construction requires a comma before „ale“ even when the first part ends with an ellipsis.
- Proposed replacement: Nejen..., ale i...
- Audit CURRENT: Nejen... ale i...
- Production CURRENT: Nejen... ale i...

---

## 335 — `sentence-334`

**DE**
`Sonst noch etwas?`

**CS CURRENT**
`Ještě něco?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 336 — `sentence-335`

**DE**
`Spaß beiseite!`

**CS CURRENT**
`Žádný vtip! • Vtipy na hraně!`

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
- Reason: The current variants mean „No joke“ and „edgy jokes“, not „joking aside“ or „seriously“.
- Proposed replacement: Ale vážně! • Žerty stranou!
- Audit CURRENT: Žádný vtip! • Vtipy na hraně!
- Production CURRENT: Žádný vtip! • Vtipy na hraně!

---

## 337 — `sentence-336`

**DE**
`Wie spät ist es?`

**CS CURRENT**
`Kolik je hodin`

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
- Reason: The Czech question is missing the required question mark.
- Proposed replacement: Kolik je hodin?
- Audit CURRENT: Kolik je hodin
- Production CURRENT: Kolik je hodin

---

## 338 — `sentence-337`

**DE**
`Durchfahrt gesperrt!`

**CS CURRENT**
`Projíždění je zakázáno!`

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
- Reason: „Gesperrt“ means closed or blocked, whereas „je zakázáno“ means prohibited.
- Proposed replacement: Průjezd uzavřen!
- Audit CURRENT: Projíždění je zakázáno!
- Production CURRENT: Projíždění je zakázáno!

---

## 339 — `sentence-338`

**DE**
`Sprechen Sie deutsch?`

**CS CURRENT**
`Mluvíte německy?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 340 — `sentence-339`

**DE**
`Statt zu...`

**CS CURRENT**
`Místo...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 341 — `sentence-340`

**DE**
`Wie steht’s?`

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
- Severity: LOW
- Type: ORTHOGRAPHY
- Source: Luna
- Field: lv
- Reason: The Czech question is missing the required question mark.
- Proposed replacement: Jak se máte?
- Audit CURRENT: Jak se máte
- Production CURRENT: Jak se máte

---

## 342 — `sentence-341`

**DE**
`Dieser Hut steht ihr gut.`

**CS CURRENT**
`Ten klobouk jí sluší.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 343 — `sentence-342`

**DE**
`Guten Tag!`

**CS CURRENT**
`Ahoj!`

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
- Reason: „Ahoj!“ is an informal greeting equivalent to „Hi“, not the neutral or formal „Good day“.
- Proposed replacement: Dobrý den!
- Audit CURRENT: Ahoj!
- Production CURRENT: Ahoj!

---

## 344 — `sentence-343`

**DE**
`Wo treffen wir uns?`

**CS CURRENT**
`Kde se potkáme?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 345 — `sentence-344`

**DE**
`Treten Sie näher!`

**CS CURRENT**
`Pojď blíž!`

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
- Reason: The German imperative is formal or plural; Czech „Pojď blíž!“ addresses one person informally.
- Proposed replacement: Pojďte blíž!
- Audit CURRENT: Pojď blíž!
- Production CURRENT: Pojď blíž!

---

## 346 — `sentence-345`

**DE**
`Ehrlichkeit ist eine Tugend.`

**CS CURRENT**
`Upřímnost je ctnost.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 347 — `sentence-346`

**DE**
`Ich habe viel zu tun.`

**CS CURRENT**
`Mám toho hodně na práci.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 348 — `sentence-347`

**DE**
`Nicht übel!`

**CS CURRENT**
`Velmi dobře! • Nejsou žádné námitky`

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
- Reason: „Velmi dobře!“ means „very good“, and „Nejsou žádné námitky“ means „there are no objections“, not „not bad“.
- Proposed replacement: Ujde! • Není to špatné
- Audit CURRENT: Velmi dobře! • Nejsou žádné námitky
- Production CURRENT: Velmi dobře! • Nejsou žádné námitky

---

## 349 — `sentence-348`

**DE**
`Er wohnt über mir.`

**CS CURRENT**
`Bydlí nade mnou.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 350 — `sentence-349`

**DE**
`Er ist davon überzeugt.`

**CS CURRENT**
`Je si tím jistý.`

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
- Reason: „Je si tím jistý“ means „he is sure of it“; the German specifically means „he is convinced of it“.
- Proposed replacement: Je o tom přesvědčen.
- Audit CURRENT: Je si tím jistý.
- Production CURRENT: Je si tím jistý.

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

## 401 — `sentence-400`

**DE**
`Bis wann?`

**CS CURRENT**
`Do kdy?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 402 — `sentence-401`

**DE**
`Es ist warm.`

**CS CURRENT**
`Je teplo.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 403 — `sentence-402`

**DE**
`Auf eine Nachricht warten.`

**CS CURRENT**
`Počkejte na zprávu.`

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
- Reason: Německý infinitiv je přeložen jako zdvořilý rozkaz.
- Proposed replacement: Čekat na zprávu.
- Audit CURRENT: Počkejte na zprávu.
- Production CURRENT: Počkejte na zprávu.

---

## 404 — `sentence-403`

**DE**
`Was wollen Sie?`

**CS CURRENT**
`Co chceš?`

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
- Reason: Sie vyžaduje vykání nebo množné číslo; chceš je neformální jednotné číslo.
- Proposed replacement: Co chcete?
- Audit CURRENT: Co chceš?
- Production CURRENT: Co chceš?

---

## 405 — `sentence-404`

**DE**
`Was für ein...?`

**CS CURRENT**
`Jaký...? • Co za...?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 406 — `sentence-405`

**DE**
`Auf halbem Wege.`

**CS CURRENT**
`V půli cesty.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 407 — `sentence-406`

**DE**
`Auf diesem Wege.`

**CS CURRENT**
`Takhle. • Za takové prostředky`

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
- Reason: Druhý význam má vyjadřovat prostředek; předložka za a pád jsou zde nesprávné.
- Proposed replacement: Takhle. • Takovými prostředky
- Audit CURRENT: Takhle. • Za takové prostředky
- Production CURRENT: Takhle. • Za takové prostředky

---

## 408 — `sentence-407`

**DE**
`Auf friedlichem Wege.`

**CS CURRENT**
`Na cestě míru.`

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
- Reason: Doslovné spojení není v češtině přirozené a nevystihuje ustálené vyjádření.
- Proposed replacement: Mírovou cestou.
- Audit CURRENT: Na cestě míru.
- Production CURRENT: Na cestě míru.

---

## 409 — `sentence-408`

**DE**
`Unserer Freundschaft wegen.`

**CS CURRENT**
`Kvůli našemu přátelství.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 410 — `sentence-409`

**DE**
`Von Rechts wegen.`

**CS CURRENT**
`Spravedlností.`

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
- Reason: Výraz znamená podle práva nebo právem, nikoli instrumentál spravedlností.
- Proposed replacement: Právem.
- Audit CURRENT: Spravedlností.
- Production CURRENT: Spravedlností.

---

## 411 — `sentence-410`

**DE**
`Weh tun.`

**CS CURRENT**
`Ublížit.`

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
- Reason: Weh tun znamená bolet; ublížit znamená někomu způsobit újmu.
- Proposed replacement: Bolet.
- Audit CURRENT: Ublížit.
- Production CURRENT: Ublížit.

---

## 412 — `sentence-411`

**DE**
`Zu Weihnachten.`

**CS CURRENT**
`O Vánocích.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 413 — `sentence-412`

**DE**
`Auf welche Weise?`

**CS CURRENT**
`Jakým způsobem?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 414 — `sentence-413`

**DE**
`Art und Weise.`

**CS CURRENT**
`Typ.`

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
- Reason: Art und Weise znamená způsob, nikoli typ.
- Proposed replacement: Způsob.
- Audit CURRENT: Typ.
- Production CURRENT: Typ.

---

## 415 — `sentence-414`

**DE**
`Ohne weiteres.`

**CS CURRENT**
`Ihned. • Okamžitě`

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
- Reason: Ohne weiteres znamená bez dalšího nebo bez problémů, ne ihned.
- Proposed replacement: Bez dalšího.
- Audit CURRENT: Ihned. • Okamžitě
- Production CURRENT: Ihned. • Okamžitě

---

## 416 — `sentence-415`

**DE**
`Bis auf weiteres.`

**CS CURRENT**
`Do odvolání.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 417 — `sentence-416`

**DE**
`Und so weiter.`

**CS CURRENT**
`A tak dále.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 418 — `sentence-417`

**DE**
`Weiter nichts.`

**CS CURRENT**
`Nic víc.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 419 — `sentence-418`

**DE**
`An welchem Tag?`

**CS CURRENT**
`Který den?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 420 — `sentence-419`

**DE**
`Alle Welt.`

**CS CURRENT**
`Celý svět. • Všichni`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 421 — `sentence-420`

**DE**
`In wenigen Tagen.`

**CS CURRENT**
`V některých dnech.`

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
- Reason: Několik dní vyjadřuje časový interval; některé dny znamená pouze vybrané dny.
- Proposed replacement: Za několik dní.
- Audit CURRENT: V některých dnech.
- Production CURRENT: V některých dnech.

---

## 422 — `sentence-421`

**DE**
`Zu wenig.`

**CS CURRENT**
`Příliš málo.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 423 — `sentence-422`

**DE**
`Wenn auch.`

**CS CURRENT**
`Ačkoli.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 424 — `sentence-423`

**DE**
`Wer da?`

**CS CURRENT**
`Co je tam?`

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
- Reason: Wer se ptá na osobu, proto musí být přeloženo jako kdo, ne co.
- Proposed replacement: Kdo tam?
- Audit CURRENT: Co je tam?
- Production CURRENT: Co je tam?

---

## 425 — `sentence-424`

**DE**
`Gesammelte Werke von Schiller.`

**CS CURRENT**
`Schillerovy sebrané spisy.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 426 — `sentence-425`

**DE**
`Ausgewählte Werke.`

**CS CURRENT**
`Výběr děl.`

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
- Reason: Německý výraz označuje díla, která byla vybrána, ne výběr jako celek.
- Proposed replacement: Vybraná díla.
- Audit CURRENT: Výběr děl.
- Production CURRENT: Výběr děl.

---

## 427 — `sentence-426`

**DE**
`Er ist wert, dass...`

**CS CURRENT**
`Zaslouží si...`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 428 — `sentence-427`

**DE**
`Es ist zwei Euro wert.`

**CS CURRENT**
`Stojí to dvě eura.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 429 — `sentence-428`

**DE**
`Nach Westen.`

**CS CURRENT**
`Na západ.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 430 — `sentence-429`

**DE**
`Von Westen.`

**CS CURRENT**
`Ze západu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 431 — `sentence-430`

**DE**
`In Wettbewerb treten.`

**CS CURRENT**
`Zapojte se do soutěže.`

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
- Reason: Německý infinitiv je přeložen jako rozkaz v množném čísle nebo vykání.
- Proposed replacement: Zapojit se do soutěže.
- Audit CURRENT: Zapojte se do soutěže.
- Production CURRENT: Zapojte se do soutěže.

---

## 432 — `sentence-431`

**DE**
`Um die Wette laufen.`

**CS CURRENT**
`Běžte závod.`

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
- Reason: Překlad je v rozkazovacím způsobu a spojení Běžte závod je navíc nepřirozené.
- Proposed replacement: Závodit.
- Audit CURRENT: Běžte závod.
- Production CURRENT: Běžte závod.

---

## 433 — `sentence-432`

**DE**
`Was gilt die Wette?`

**CS CURRENT**
`O čem vyjednáváme?`

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
- Reason: Výraz se ptá na předmět sázky, nikoli na předmět vyjednávání.
- Proposed replacement: O co se sázíme?
- Audit CURRENT: O čem vyjednáváme?
- Production CURRENT: O čem vyjednáváme?

---

## 434 — `sentence-433`

**DE**
`Wie wird das Wetter?`

**CS CURRENT**
`Jaké bude počasí?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 435 — `sentence-434`

**DE**
`Wettkampf im Turnen.`

**CS CURRENT**
`Závody v gymnastice.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 436 — `sentence-435`

**DE**
`Wider meinen Willen.`

**CS CURRENT**
`Proti mé vůli.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 437 — `sentence-436`

**DE**
`Widerspruch erheben.`

**CS CURRENT**
`Na protest. • Vznést námitky`

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
- Reason: Na protest není překladem výrazu; druhá varianta má navíc vhodnější jednotné číslo.
- Proposed replacement: Vznést námitku.
- Audit CURRENT: Na protest. • Vznést námitky
- Production CURRENT: Na protest. • Vznést námitky

---

## 438 — `sentence-437`

**DE**
`Wie alt ist er?`

**CS CURRENT**
`Jak je starý?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 439 — `sentence-438`

**DE**
`Wie lange?`

**CS CURRENT**
`Jak dlouho`

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
- Proposed replacement: Jak dlouho?
- Audit CURRENT: Jak dlouho
- Production CURRENT: Jak dlouho

---

## 440 — `sentence-439`

**DE**
`Auf Wiederhören!`

**CS CURRENT**
`Sbohem!`

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
- Reason: Telefonní rozloučení Auf Wiederhören znamená na slyšenou, nikoli obecné sbohem.
- Proposed replacement: Na slyšenou!
- Audit CURRENT: Sbohem!
- Production CURRENT: Sbohem!

---

## 441 — `sentence-440`

**DE**
`Auf Wiedersehen!`

**CS CURRENT**
`Sbohem!`

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
- Reason: Auf Wiedersehen odpovídá českému Na shledanou; sbohem vyjadřuje trvalejší rozloučení.
- Proposed replacement: Na shledanou!
- Audit CURRENT: Sbohem!
- Production CURRENT: Sbohem!

---

## 442 — `sentence-441`

**DE**
`Wilde Tiere.`

**CS CURRENT**
`Divoká zvířata.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 443 — `sentence-442`

**DE**
`Herzlich willkommen!`

**CS CURRENT**
`Srdečné pozdravy!`

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
- Reason: Německý výraz vítá příchozí; současný text znamená srdečné pozdravy.
- Proposed replacement: Srdečně vítejte!
- Audit CURRENT: Srdečné pozdravy!
- Production CURRENT: Srdečné pozdravy!

---

## 444 — `sentence-443`

**DE**
`Du musst ziehen.`

**CS CURRENT**
`Máš tah.`

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
- Reason: Německá věta vyjadřuje povinnost táhnout; Máš tah pouze oznamuje, že je na někom řada.
- Proposed replacement: Musíš táhnout.
- Audit CURRENT: Máš tah.
- Production CURRENT: Máš tah.

---

## 445 — `sentence-444`

**DE**
`Es zieht.`

**CS CURRENT**
`SEM`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: CRITICAL
- Type: TRANSLATION
- Source: Luna
- Field: lv
- Reason: Český text je placeholder a neobsahuje překlad německé věty.
- Proposed replacement: Táhne.
- Audit CURRENT: SEM
- Production CURRENT: SEM

---

## 446 — `sentence-445`

**DE**
`Ziemlich kalt.`

**CS CURRENT**
`Docela chladno.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 447 — `sentence-446`

**DE**
`Zipfel einer Wurst.`

**CS CURRENT**
`Tip na klobásu.`

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
- Reason: Zipfel označuje konec nebo špičku klobásy; „tip na klobásu“ má jiný význam.
- Proposed replacement: Konec klobásy.
- Audit CURRENT: Tip na klobásu.
- Production CURRENT: Tip na klobásu.

---

## 448 — `sentence-447`

**DE**
`Zu ihm gehen.`

**CS CURRENT**
`Jdi k němu.`

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
- Reason: Německý výraz je infinitiv, zatímco český překlad je rozkazovací způsob.
- Proposed replacement: Jít k němu.
- Audit CURRENT: Jdi k němu.
- Production CURRENT: Jdi k němu.

---

## 449 — `sentence-448`

**DE**
`Zur Schule gehen.`

**CS CURRENT**
`Jdi do školy.`

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
- Reason: Německý výraz je infinitiv, zatímco český překlad je rozkazovací způsob.
- Proposed replacement: Jít do školy.
- Audit CURRENT: Jdi do školy.
- Production CURRENT: Jdi do školy.

---

## 450 — `sentence-449`

**DE**
`Zu Hause bleiben.`

**CS CURRENT**
`Zůstaňte doma.`

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
- Reason: Německý výraz je infinitiv, zatímco český překlad je zdvořilý rozkaz.
- Proposed replacement: Zůstat doma.
- Audit CURRENT: Zůstaňte doma.
- Production CURRENT: Zůstaňte doma.

---

## 451 — `sentence-450`

**DE**
`Von Tag zu Tag.`

**CS CURRENT**
`Na denní bázi.`

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
- Reason: „Na denní bázi“ znamená denně, ne postupnou změnu či vývoj ze dne na den.
- Proposed replacement: Den ode dne.
- Audit CURRENT: Na denní bázi.
- Production CURRENT: Na denní bázi.

---

## 452 — `sentence-451`

**DE**
`Zum Glück.`

**CS CURRENT**
`Naštěstí.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 453 — `sentence-452`

**DE**
`Wasser zum Trinken.`

**CS CURRENT**
`Voda na pití.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 454 — `sentence-453`

**DE**
`Zu Fuß.`

**CS CURRENT**
`Pro nohy.`

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
- Reason: „Zu Fuß“ znamená „pěšky“; „pro nohy“ je chybný doslovný překlad.
- Proposed replacement: Pěšky.
- Audit CURRENT: Pro nohy.
- Production CURRENT: Pro nohy.

---

## 455 — `sentence-454`

**DE**
`Zu Pferde.`

**CS CURRENT**
`Ano.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: CRITICAL
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Ano“ znamená německy „ja“ a vůbec nevyjadřuje jízdu na koni.
- Proposed replacement: Na koni.
- Audit CURRENT: Ano.
- Production CURRENT: Ano.

---

## 456 — `sentence-455`

**DE**
`Zu Rad.`

**CS CURRENT**
`Na kole.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 457 — `sentence-456`

**DE**
`Es hörte auf zu regnen.`

**CS CURRENT**
`Přestalo pršet.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 458 — `sentence-457`

**DE**
`Ich habe noch viel zu tun.`

**CS CURRENT**
`Mám toho ještě hodně na práci.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 459 — `sentence-458`

**DE**
`Zu früh.`

**CS CURRENT**
`Příliš brzy.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 460 — `sentence-459`

**DE**
`Zu groß.`

**CS CURRENT**
`Příliš velké.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 461 — `sentence-460`

**DE**
`Mit den Achseln zucken.`

**CS CURRENT**
`Pokrčit rameny.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 462 — `sentence-461`

**DE**
`In einem Zug trinken.`

**CS CURRENT**
`Vypijte jedním douškem.`

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
- Reason: Německý infinitivní výraz je přeložen jako formální rozkaz.
- Proposed replacement: Vypít jedním douškem.
- Audit CURRENT: Vypijte jedním douškem.
- Production CURRENT: Vypijte jedním douškem.

---

## 463 — `sentence-462`

**DE**
`Zugrunde gehen.`

**CS CURRENT**
`Zahynout.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 464 — `sentence-463`

**DE**
`Zugrunde legen.`

**CS CURRENT**
`Položte na základ. • Vezměte jako základ.`

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
- Reason: Německý výraz je infinitiv, zatímco český text používá rozkazovací způsob.
- Proposed replacement: Položit za základ. • Brát jako základ.
- Audit CURRENT: Položte na základ. • Vezměte jako základ.
- Production CURRENT: Položte na základ. • Vezměte jako základ.

---

## 465 — `sentence-464`

**DE**
`Zum ersten Mal.`

**CS CURRENT**
`Poprvé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 466 — `sentence-465`

**DE**
`Machen Sie bitte die Tür zu!`

**CS CURRENT**
`Zavřete prosím dveře!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 467 — `sentence-466`

**DE**
`Er hat zugenommen.`

**CS CURRENT**
`Přibral.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 468 — `sentence-467`

**DE**
`Die Tage nehmen zu.`

**CS CURRENT**
`Dny se prodlužují.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 469 — `sentence-468`

**DE**
`Zusammenhängen mit etwas.`

**CS CURRENT**
`Být s něčím spojen.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 470 — `sentence-469`

**DE**
`Die Tür ist zu.`

**CS CURRENT**
`Dveře jsou zavřené.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 471 — `sentence-470`

**DE**
`Das hätte ich ihm nicht zugetraut.`

**CS CURRENT**
`To bych od něj nečekal.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 472 — `sentence-471`

**DE**
`Freier Zutritt.`

**CS CURRENT**
`Vstup zdarma.`

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
- Reason: „Vstup zdarma“ znamená bezplatný vstup; „freier Zutritt“ znamená volný nebo povolený vstup.
- Proposed replacement: Volný vstup.
- Audit CURRENT: Vstup zdarma.
- Production CURRENT: Vstup zdarma.

---

## 473 — `sentence-472`

**DE**
`Zutritt verboten!`

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

## 474 — `sentence-473`

**DE**
`Das ist zu viel!`

**CS CURRENT**
`To je moc!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 475 — `sentence-474`

**DE**
`Zuwider werden.`

**CS CURRENT**
`Staňte se nechutnými. • Onemocnět`

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
- Reason: Infinitiv byl chybně převeden na rozkaz a „onemocnět“ neodpovídá významu „zprotivit se“.
- Proposed replacement: Stát se protivným. • Zprotivit se.
- Audit CURRENT: Staňte se nechutnými. • Onemocnět
- Production CURRENT: Staňte se nechutnými. • Onemocnět

---

## 476 — `sentence-475`

**DE**
`Und zwar.`

**CS CURRENT**
`A to.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 477 — `sentence-476`

**DE**
`Es steht außer Zweifel.`

**CS CURRENT**
`Není pochyb.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 478 — `sentence-477`

**DE**
`Ohne Zweifel.`

**CS CURRENT**
`Bez váhání.`

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
- Reason: „Bez váhání“ znamená bez rozmýšlení; správný význam je „bez pochyb“ nebo „bez pochyby“.
- Proposed replacement: Bez pochyby.
- Audit CURRENT: Bez váhání.
- Production CURRENT: Bez váhání.

---

## 479 — `sentence-478`

**DE**
`Zum Zweiten.`

**CS CURRENT**
`Za druhé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 480 — `sentence-479`

**DE**
`Frohes neues Jahr!`

**CS CURRENT**
`Šťastný nový rok!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 481 — `sentence-480`

**DE**
`Herzlichen Glückwunsch zum Geburtstag!`

**CS CURRENT**
`Všechno nejlepší k narozeninám!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 482 — `sentence-481`

**DE**
`Gute Reise!`

**CS CURRENT**
`Šťastnou cestu!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 483 — `sentence-482`

**DE**
`Es freut mich, Sie kennenzulernen.`

**CS CURRENT**
`Rád tě poznávám.`

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
- Reason: Německé „Sie“ je vykání, ale český překlad používá neformální „tě“.
- Proposed replacement: Rád vás poznávám.
- Audit CURRENT: Rád tě poznávám.
- Production CURRENT: Rád tě poznávám.

---

## 484 — `sentence-483`

**DE**
`Wären Sie bitte so nett?`

**CS CURRENT**
`Byl bys prosím tak laskav?`

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
- Reason: Německé „Sie“ vyžaduje vykání; české „bys“ je neformální jednotné číslo.
- Proposed replacement: Byl byste prosím tak laskav?
- Audit CURRENT: Byl bys prosím tak laskav?
- Production CURRENT: Byl bys prosím tak laskav?

---

## 485 — `sentence-484`

**DE**
`Ich bin Ihnen sehr dankbar.`

**CS CURRENT**
`Jsem vám velmi vděčný.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 486 — `sentence-485`

**DE**
`Setzt euch bitte hin!`

**CS CURRENT**
`Posaďte se, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 487 — `sentence-486`

**DE**
`Ben, komm bitte an die Tafel!`

**CS CURRENT**
`Bene, prosím, pojď k tabuli!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 488 — `sentence-487`

**DE**
`Schlagt bitte die Lehrbücher auf!`

**CS CURRENT**
`Otevřete učebnice, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 489 — `sentence-488`

**DE**
`Geht bitte in die Sporthalle!`

**CS CURRENT**
`Prosím, jděte do posilovny!`

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
- Reason: „Sporthalle“ je sportovní hala, nikoli „posilovna“ neboli fitness centrum.
- Proposed replacement: Prosím, jděte do sportovní haly!
- Audit CURRENT: Prosím, jděte do posilovny!
- Production CURRENT: Prosím, jděte do posilovny!

---

## 490 — `sentence-489`

**DE**
`Schläfst du noch?`

**CS CURRENT**
`Ještě spíš?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 491 — `sentence-490`

**DE**
`Schlafen Sie noch?`

**CS CURRENT**
`Ty ještě spíš?`

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
- Reason: Německé „Sie“ vyžaduje české vykání, nikoli neformální „ty“.
- Proposed replacement: Spíte ještě?
- Audit CURRENT: Ty ještě spíš?
- Production CURRENT: Ty ještě spíš?

---

## 492 — `sentence-491`

**DE**
`Er ist fest eingeschlafen.`

**CS CURRENT**
`Tvrdě spí.`

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
- Reason: Překlad mění dokonavý význam „usnul“ na průběhové „spí“ a ztrácí děj usnutí.
- Proposed replacement: Pevně usnul.
- Audit CURRENT: Tvrdě spí.
- Production CURRENT: Tvrdě spí.

---

## 493 — `sentence-492`

**DE**
`Wecke ihn bitte auf, es ist schon spät!`

**CS CURRENT**
`Prosím, vzbuďte ho, už je pozdě!`

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
- Reason: Německý rozkaz je v neformálním jednotném čísle; „vzbuďte“ je vykání nebo množné číslo.
- Proposed replacement: Prosím, vzbuď ho, už je pozdě!
- Audit CURRENT: Prosím, vzbuďte ho, už je pozdě!
- Production CURRENT: Prosím, vzbuďte ho, už je pozdě!

---

## 494 — `sentence-493`

**DE**
`Es tut mir sehr leid!`

**CS CURRENT**
`Je mi to moc líto!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 495 — `sentence-494`

**DE**
`Vielen Dank!`

**CS CURRENT**
`Děkuji mnohokrát!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 496 — `sentence-495`

**DE**
`Finn, fang bitte an!`

**CS CURRENT**
`Finne, začni, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 497 — `sentence-496`

**DE**
`Lest bitte mit!`

**CS CURRENT**
`Čtěte, prosím!`

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
- Reason: Český překlad vynechává význam částice „mit“: číst spolu nebo současně s ostatními.
- Proposed replacement: Čtěte s námi, prosím!
- Audit CURRENT: Čtěte, prosím!
- Production CURRENT: Čtěte, prosím!

---

## 498 — `sentence-497`

**DE**
`Emma, schau bitte nicht aus dem Fenster!`

**CS CURRENT**
`Emmo, prosím, nedívej se z okna!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 499 — `sentence-498`

**DE**
`Jonas, bring bitte die Hefte!`

**CS CURRENT**
`Jonasi, prosím, přines sešity!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 500 — `sentence-499`

**DE**
`Geh bitte zurück an deinen Platz!`

**CS CURRENT**
`Vraťte se na své místo!`

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
- Reason: Německý rozkaz je neformální jednotné číslo a obsahuje „bitte“; české znění vyká a částici vynechává.
- Proposed replacement: Vrať se prosím na své místo!
- Audit CURRENT: Vraťte se na své místo!
- Production CURRENT: Vraťte se na své místo!

---

## 501 — `sentence-500`

**DE**
`Es ist halb acht.`

**CS CURRENT**
`Je půl osmé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 502 — `sentence-501`

**DE**
`Wann wachst du gewöhnlich auf?`

**CS CURRENT**
`Kdy obvykle vstáváš?`

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
- Reason: „Vstávat“ znamená get up, zatímco německé „aufwachen“ znamená probudit se.
- Proposed replacement: Kdy se obvykle probouzíš?
- Audit CURRENT: Kdy obvykle vstáváš?
- Production CURRENT: Kdy obvykle vstáváš?

---

## 503 — `sentence-502`

**DE**
`Ich stehe gleich auf.`

**CS CURRENT**
`Hned vstanu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 504 — `sentence-503`

**DE**
`Steh auf, Hanna, es klingelt!`

**CS CURRENT**
`Vstávej, Hannah, zvonek zvoní!`

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
- Reason: V češtině je při oslovení jména Hanna správný vokativ „Hanno“; „zvoní“ přirozeně odpovídá německému „es klingelt“.
- Proposed replacement: Vstávej, Hanno, zvoní!
- Audit CURRENT: Vstávej, Hannah, zvonek zvoní!
- Production CURRENT: Vstávej, Hannah, zvonek zvoní!

---

## 505 — `sentence-504`

**DE**
`Lass mich noch fünf Minuten schlafen!`

**CS CURRENT**
`Nech mě spát ještě pět minut!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 506 — `sentence-505`

**DE**
`Vergiss nicht, das Zimmer zu lüften!`

**CS CURRENT**
`Nezapomeňte místnost větrat!`

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
- Reason: Německé „du“ vyžaduje neformální imperativ; „vyvětrat pokoj“ je přirozenější než „místnost větrat“.
- Proposed replacement: Nezapomeň vyvětrat pokoj!
- Audit CURRENT: Nezapomeňte místnost větrat!
- Production CURRENT: Nezapomeňte místnost větrat!

---

## 507 — `sentence-506`

**DE**
`Wo ist das Handtuch?`

**CS CURRENT**
`Kde je ručník`

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
- Proposed replacement: Kde je ručník?
- Audit CURRENT: Kde je ručník
- Production CURRENT: Kde je ručník

---

## 508 — `sentence-507`

**DE**
`Ich möchte mir die Zähne putzen.`

**CS CURRENT**
`Chci si vyčistit zuby.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 509 — `sentence-508`

**DE**
`Mit was putzt du dir die Zähne?`

**CS CURRENT**
`Čím si čistíte zuby?`

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
- Reason: Německé „du“ je neformální jednotné číslo, nikoli vykání nebo množné číslo.
- Proposed replacement: Čím si čistíš zuby?
- Audit CURRENT: Čím si čistíte zuby?
- Production CURRENT: Čím si čistíte zuby?

---

## 510 — `sentence-509`

**DE**
`Ich möchte mich anziehen.`

**CS CURRENT**
`Chci se obléknout.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 511 — `sentence-510`

**DE**
`Zieh dich bitte schnell an!`

**CS CURRENT**
`Rychle se obleč, prosím!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 512 — `sentence-511`

**DE**
`Kleide dich wärmer an, draußen ist es kühl.`

**CS CURRENT**
`Teple se oblečte, venku je zima.`

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
- Reason: Je třeba zachovat neformální „du“; „kühl“ znamená „chladno“, ne nutně „zima“.
- Proposed replacement: Obleč se tepleji, venku je chladno.
- Audit CURRENT: Teple se oblečte, venku je zima.
- Production CURRENT: Teple se oblečte, venku je zima.

---

## 513 — `sentence-512`

**DE**
`Guten Morgen, wie geht es dir?`

**CS CURRENT**
`Dobré ráno, jak se máš?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 514 — `sentence-513`

**DE**
`Mir geht es gut, danke.`

**CS CURRENT**
`Mám se dobře, díky.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 515 — `sentence-514`

**DE**
`Was gibt es Neues?`

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

## 516 — `sentence-515`

**DE**
`Was für ein Chaos hier!`

**CS CURRENT**
`Jaký je tady nepořádek!`

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
- Reason: Význam je srozumitelný, ale česká exklamativní konstrukce „To je ale…“ lépe odpovídá německému zvolání.
- Proposed replacement: To je ale nepořádek!
- Audit CURRENT: Jaký je tady nepořádek!
- Production CURRENT: Jaký je tady nepořádek!

---

## 517 — `sentence-516`

**DE**
`Darf ich beim Aufräumen helfen?`

**CS CURRENT**
`Mohu pomoci uklidit?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 518 — `sentence-517`

**DE**
`Was trinkst du morgens, Kaffee oder Tee?`

**CS CURRENT**
`Co piješ ráno, kávu nebo čaj?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 519 — `sentence-518`

**DE**
`Gewöhnlich trinke ich morgens eine Tasse Kaffee.`

**CS CURRENT**
`Ráno obvykle piju šálek kávy.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 520 — `sentence-519`

**DE**
`Am liebsten trinke ich schwarzen Kaffee.`

**CS CURRENT**
`Nejlépe piju černou kávu.`

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
- Reason: „Am liebsten“ vyjadřuje preferenci („nejraději“), nikoli způsob nebo kvalitu („nejlépe“).
- Proposed replacement: Nejraději piju černou kávu.
- Audit CURRENT: Nejlépe piju černou kávu.
- Production CURRENT: Nejlépe piju černou kávu.

---

## 521 — `sentence-520`

**DE**
`Guten Morgen, hast du gut geschlafen?`

**CS CURRENT**
`Dobré ráno, vyspali jste se dobře?`

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
- Reason: Německé „du“ vyžaduje neformální jednotné číslo, nikoli vykání nebo množné číslo.
- Proposed replacement: Dobré ráno, vyspal ses dobře?
- Audit CURRENT: Dobré ráno, vyspali jste se dobře?
- Production CURRENT: Dobré ráno, vyspali jste se dobře?

---

## 522 — `sentence-521`

**DE**
`Ich bin noch sehr müde.`

**CS CURRENT**
`Jsem stále velmi unavený.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 523 — `sentence-522`

**DE**
`Willst du Kaffee oder Milch?`

**CS CURRENT**
`Dáš si kávu nebo mléko?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 524 — `sentence-523`

**DE**
`Gib mir bitte ein Brötchen mit Käse.`

**CS CURRENT**
`Dejte mi sýrovou buchtu, prosím.`

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
- Reason: „Brötchen“ je houska, ne buchta; „sýrovou“ mění význam na housku s náplní či příchutí sýra.
- Proposed replacement: Dej mi prosím housku se sýrem.
- Audit CURRENT: Dejte mi sýrovou buchtu, prosím.
- Production CURRENT: Dejte mi sýrovou buchtu, prosím.

---

## 525 — `sentence-524`

**DE**
`Ich muss jetzt los!`

**CS CURRENT**
`Už musím jít!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 526 — `sentence-525`

**DE**
`Vergiss dein Frühstück nicht!`

**CS CURRENT**
`Nezapomeňte na snídani!`

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
- Reason: Německé „du“ vyžaduje neformální jednotné číslo.
- Proposed replacement: Nezapomeň na snídani!
- Audit CURRENT: Nezapomeňte na snídani!
- Production CURRENT: Nezapomeňte na snídani!

---

## 527 — `sentence-526`

**DE**
`Klara, deck bitte den Tisch!`

**CS CURRENT**
`Claro, prosím prostřeš stůl!`

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
- Reason: Oslovení je „Klaro“ a rozkazovací způsob slovesa „prostřít“ je „prostři“, nikoli „prostřeš“.
- Proposed replacement: Klaro, prosím, prostři stůl!
- Audit CURRENT: Claro, prosím prostřeš stůl!
- Production CURRENT: Claro, prosím prostřeš stůl!

---

## 528 — `sentence-527`

**DE**
`Vergiss die Servietten nicht!`

**CS CURRENT**
`Nezapomeňte na ubrousky!`

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
- Reason: Německé „du“ vyžaduje neformální jednotné číslo.
- Proposed replacement: Nezapomeň na ubrousky!
- Audit CURRENT: Nezapomeňte na ubrousky!
- Production CURRENT: Nezapomeňte na ubrousky!

---

## 529 — `sentence-528`

**DE**
`Wann esst ihr zu Mittag?`

**CS CURRENT**
`Kdy obědváš`

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
- Reason: Německé „ihr“ je množné číslo; český text má jednotné číslo a chybí otazník.
- Proposed replacement: Kdy obědváte?
- Audit CURRENT: Kdy obědváš
- Production CURRENT: Kdy obědváš

---

## 530 — `sentence-529`

**DE**
`Es ist Zeit zu essen.`

**CS CURRENT**
`Je čas jíst.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 531 — `sentence-530`

**DE**
`Was gibt es heute zu Mittag?`

**CS CURRENT**
`Co je dnes k obědu?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 532 — `sentence-531`

**DE**
`Wie schmeckt dir die Suppe?`

**CS CURRENT**
`Jak vám chutná polévka?`

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
- Reason: Německé „dir“ je neformální jednotné číslo, nikoli české vykání.
- Proposed replacement: Jak ti chutná polévka?
- Audit CURRENT: Jak vám chutná polévka?
- Production CURRENT: Jak vám chutná polévka?

---

## 533 — `sentence-532`

**DE**
`Ehrlich gesagt ist sie etwas zu salzig.`

**CS CURRENT**
`Upřímně řečeno, je to trochu příliš slané.`

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
- Reason: „Sie“ odkazuje na ženský rod „polévka“; přísudek proto musí být „slaná“, ne neutrální „slané“.
- Proposed replacement: Upřímně řečeno, je trochu příliš slaná.
- Audit CURRENT: Upřímně řečeno, je to trochu příliš slané.
- Production CURRENT: Upřímně řečeno, je to trochu příliš slané.

---

## 534 — `sentence-533`

**DE**
`Darf ich dir ein Stück Brot geben?`

**CS CURRENT**
`Můžu ti dát krajíc chleba?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 535 — `sentence-534`

**DE**
`Danke, ich habe schon.`

**CS CURRENT**
`Díky, už mám.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 536 — `sentence-535`

**DE**
`Das Fleisch schmeckt ausgezeichnet.`

**CS CURRENT**
`Maso chutná skvěle.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 537 — `sentence-536`

**DE**
`Danke, ich bin schon satt.`

**CS CURRENT**
`Díky, už mám plno.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 538 — `sentence-537`

**DE**
`Heute haben wir Besuch.`

**CS CURRENT**
`Dnes máme návštěvníky.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 539 — `sentence-538`

**DE**
`Bist du heute Abend frei?`

**CS CURRENT**
`Máš dnes večer volno`

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
- Proposed replacement: Máš dnes večer volno?
- Audit CURRENT: Máš dnes večer volno
- Production CURRENT: Máš dnes večer volno

---

## 540 — `sentence-539`

**DE**
`Komm doch heute zum Mittagessen vorbei!`

**CS CURRENT**
`Přijďte dnes na oběd!`

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
- Reason: Německé „du“ vyžaduje neformální jednotné číslo, nikoli vykání nebo množné číslo.
- Proposed replacement: Přijď dnes na oběd!
- Audit CURRENT: Přijďte dnes na oběd!
- Production CURRENT: Přijďte dnes na oběd!

---

## 541 — `sentence-540`

**DE**
`Setzen wir uns an den Tisch.`

**CS CURRENT**
`Sedneme si ke stolu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 542 — `sentence-541`

**DE**
`Bitte, bedien dich!`

**CS CURRENT**
`Jezte, prosím, kolik chcete!`

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
- Reason: „Bedien dich“ znamená „posluž si“; současný text přidává význam „jez, kolik chceš“ a používá vykání.
- Proposed replacement: Posluž si, prosím!
- Audit CURRENT: Jezte, prosím, kolik chcete!
- Production CURRENT: Jezte, prosím, kolik chcete!

---

## 543 — `sentence-542`

**DE**
`Stört dich das Rauchen?`

**CS CURRENT**
`Vadí vám kouření?`

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
- Reason: Německé „dich“ je neformální jednotné číslo, nikoli české vykání.
- Proposed replacement: Vadí ti kouření?
- Audit CURRENT: Vadí vám kouření?
- Production CURRENT: Vadí vám kouření?

---

## 544 — `sentence-543`

**DE**
`Danke für die nette Aufnahme!`

**CS CURRENT**
`Děkujeme za vřelé přivítání!`

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
- Reason: Německý mluvčí říká „ich“, proto má být české „děkuji“, ne množné „děkujeme“.
- Proposed replacement: Děkuji za vřelé přivítání!
- Audit CURRENT: Děkujeme za vřelé přivítání!
- Production CURRENT: Děkujeme za vřelé přivítání!

---

## 545 — `sentence-544`

**DE**
`Wann gehst du ins Bett?`

**CS CURRENT**
`Kdy jdeš spát`

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
- Proposed replacement: Kdy jdeš spát?
- Audit CURRENT: Kdy jdeš spát
- Production CURRENT: Kdy jdeš spát

---

## 546 — `sentence-545`

**DE**
`Wenn ich von der Arbeit komme, bin ich immer müde.`

**CS CURRENT**
`Jsem vždy unavený, když přijdu z práce.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 547 — `sentence-546`

**DE**
`Es ist Zeit, ins Bett zu gehen.`

**CS CURRENT**
`Je čas jít spát.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 548 — `sentence-547`

**DE**
`Es ist schönes Wetter.`

**CS CURRENT**
`Je to pěkný čas.`

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
- Reason: Německé „Wetter“ znamená počasí; „čas“ zde představuje chybný význam.
- Proposed replacement: Je hezké počasí.
- Audit CURRENT: Je to pěkný čas.
- Production CURRENT: Je to pěkný čas.

---

## 549 — `sentence-548`

**DE**
`Willst du mit mir spazieren gehen?`

**CS CURRENT**
`Chceš jít se mnou?`

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
- Reason: Český text vynechává význam „spazieren gehen“, tedy jít na procházku nebo projít se.
- Proposed replacement: Chceš se se mnou projít?
- Audit CURRENT: Chceš jít se mnou?
- Production CURRENT: Chceš jít se mnou?

---

## 550 — `sentence-549`

**DE**
`Sieh mal, es wird gleich regnen.`

**CS CURRENT**
`Podívej, brzy bude pršet.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 551 — `sentence-550`

**DE**
`Nimm den Regenschirm mit!`

**CS CURRENT**
`Vezměte si s sebou deštník!`

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
- Reason: Německé „Nimm“ je neformální jednotné číslo, zatímco české „Vezměte“ je vykání nebo množné číslo.
- Proposed replacement: Vezmi si s sebou deštník!
- Audit CURRENT: Vezměte si s sebou deštník!
- Production CURRENT: Vezměte si s sebou deštník!

---

## 552 — `sentence-551`

**DE**
`Es regnet.`

**CS CURRENT**
`Prší.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 553 — `sentence-552`

**DE**
`Ich bin schon ganz nass.`

**CS CURRENT**
`Už jsem úplně mokrá.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 554 — `sentence-553`

**DE**
`Glaubst du, dass es den ganzen Tag regnen wird?`

**CS CURRENT**
`Myslíte, že bude celý den pršet?`

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
- Reason: Německé „du“ vyžaduje neformální oslovení; „Myslíte“ je vykání nebo množné číslo.
- Proposed replacement: Myslíš, že bude celý den pršet?
- Audit CURRENT: Myslíte, že bude celý den pršet?
- Production CURRENT: Myslíte, že bude celý den pršet?

---

## 555 — `sentence-554`

**DE**
`Es hört auf zu regnen.`

**CS CURRENT**
`Déšť ustává.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 556 — `sentence-555`

**DE**
`Die Sonne scheint wieder.`

**CS CURRENT**
`Už zase svítí sluníčko.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 557 — `sentence-556`

**DE**
`Es ist sehr warm.`

**CS CURRENT**
`Je velmi horko.`

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
- Reason: „Warm“ znamená teplo, nikoli „horko“, které označuje výrazně vyšší teplotu.
- Proposed replacement: Je velmi teplo.
- Audit CURRENT: Je velmi horko.
- Production CURRENT: Je velmi horko.

---

## 558 — `sentence-557`

**DE**
`Es sieht nach Regen aus.`

**CS CURRENT**
`Vypadá to, že bude pršet.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 559 — `sentence-558`

**DE**
`Wir bekommen gleich ein Gewitter.`

**CS CURRENT**
`Čeká nás bouřka.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 560 — `sentence-559`

**DE**
`Das Gewitter zieht vorüber.`

**CS CURRENT**
`Bouře přešla.`

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
- Reason: „Gewitter“ je bouřka a německý přítomný čas popisuje právě probíhající přechod, ne již ukončený děj.
- Proposed replacement: Bouřka přechází.
- Audit CURRENT: Bouře přešla.
- Production CURRENT: Bouře přešla.

---

## 561 — `sentence-560`

**DE**
`Die Wolken verziehen sich.`

**CS CURRENT**
`Mraky se rozptýlí.`

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
- Reason: Německý přítomný čas popisuje probíhající odchod či rozptylování mraků; český dokonavý tvar vyjadřuje budoucí dokončení.
- Proposed replacement: Mraky se rozptylují.
- Audit CURRENT: Mraky se rozptýlí.
- Production CURRENT: Mraky se rozptýlí.

---

## 562 — `sentence-561`

**DE**
`Siehst du den Regenbogen?`

**CS CURRENT**
`Vidíš duhu?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 563 — `sentence-562`

**DE**
`Der Winter ist da, es hat geschneit.`

**CS CURRENT**
`Zima je tady, v noci sněžilo.`

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
- Reason: Český překlad bez opory v německém originálu doplňuje údaj, že sněžilo v noci.
- Proposed replacement: Zima je tady, sněžilo.
- Audit CURRENT: Zima je tady, v noci sněžilo.
- Production CURRENT: Zima je tady, v noci sněžilo.

---

## 564 — `sentence-563`

**DE**
`Es schneit.`

**CS CURRENT**
`Sněží.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 565 — `sentence-564`

**DE**
`Wie schön ist es im Wald im Winter!`

**CS CURRENT**
`Jak je v zimě v lese krásně!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 566 — `sentence-565`

**DE**
`Mir ist kalt, ich friere.`

**CS CURRENT**
`Je mi zima, mrznu.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 567 — `sentence-566`

**DE**
`Draußen ist Glatteis, pass auf!`

**CS CURRENT**
`Venku to klouže, pozor!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 568 — `sentence-567`

**DE**
`Wollen wir auf die Eisbahn gehen?`

**CS CURRENT**
`Půjdeme bruslit?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 569 — `sentence-568`

**DE**
`Zieh die Jacke an, du kannst dich erkälten.`

**CS CURRENT**
`Oblečte si bundu, mohli byste nastydnout.`

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
- Reason: Německé „du“ je neformální jednotné číslo, ale český překlad používá vykání nebo množné číslo.
- Proposed replacement: Obleč si bundu, mohl bys nastydnout.
- Audit CURRENT: Oblečte si bundu, mohli byste nastydnout.
- Production CURRENT: Oblečte si bundu, mohli byste nastydnout.

---

## 570 — `sentence-569`

**DE**
`Es ist halb sieben.`

**CS CURRENT**
`Je půl osmé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: CRITICAL
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: V češtině „půl osmé“ znamená 7:30, zatímco německé „halb sieben“ znamená 6:30, tedy „půl sedmé“.
- Proposed replacement: Je půl sedmé.
- Audit CURRENT: Je půl osmé.
- Production CURRENT: Je půl osmé.

---

## 571 — `sentence-570`

**DE**
`Meine Uhr geht fünf Minuten vor.`

**CS CURRENT**
`Moje hodinky jsou rychlé pět minut.`

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
- Reason: Doslovné „jsou rychlé pět minut“ není v češtině přirozené vyjádření předcházejících hodinek.
- Proposed replacement: Moje hodinky jdou o pět minut napřed.
- Audit CURRENT: Moje hodinky jsou rychlé pět minut.
- Production CURRENT: Moje hodinky jsou rychlé pět minut.

---

## 572 — `sentence-571`

**DE**
`Weck mich morgen früh um sieben Uhr!`

**CS CURRENT**
`Vzbuď mě zítra v sedm hodin!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 573 — `sentence-572`

**DE**
`Was ist heute für ein Datum?`

**CS CURRENT**
`Jaké je dnes datum?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 574 — `sentence-573`

**DE**
`Heute ist der elfte Juli.`

**CS CURRENT**
`Dnes je jedenáctého července.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 575 — `sentence-574`

**DE**
`Was machst du gewöhnlich am Abend?`

**CS CURRENT**
`Co obvykle děláš po večerech?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 576 — `sentence-575`

**DE**
`Es ist schon lange her, dass wir uns gesehen haben.`

**CS CURRENT**
`Dlouho jsme se neviděli.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 577 — `sentence-576`

**DE**
`Wie geht es dir?`

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
- Type: GRAMMAR
- Source: Luna
- Field: lv
- Reason: Německé „dir“ je neformální jednotné číslo; český text navíc postrádá otazník.
- Proposed replacement: Jak se máš?
- Audit CURRENT: Jak se máte
- Production CURRENT: Jak se máte

---

## 578 — `sentence-577`

**DE**
`Entschuldige, ich möchte etwas mit dir besprechen.`

**CS CURRENT**
`Promiňte, chci s vámi něco probrat.`

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
- Reason: Originál používá neformální „du/dir“, ale čeština přešla na vykání („Promiňte, s vámi“).
- Proposed replacement: Promiň, chci s tebou něco probrat.
- Audit CURRENT: Promiňte, chci s vámi něco probrat.
- Production CURRENT: Promiňte, chci s vámi něco probrat.

---

## 579 — `sentence-578`

**DE**
`Gehen wir spazieren!`

**CS CURRENT**
`Pojďme se projít!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 580 — `sentence-579`

**DE**
`Hast du Lust, mit mir in den Park zu gehen?`

**CS CURRENT**
`Chceš jít se mnou do parku?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 581 — `sentence-580`

**DE**
`Ich komme, um dich zum Spaziergang abzuholen.`

**CS CURRENT**
`Přišel jsem tě vzít na procházku.`

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
- Reason: „Ich komme“ vyjadřuje příchod nyní, ne minulý příchod; „abholen“ znamená vyzvednout, ne pouze vzít.
- Proposed replacement: Jdu tě vyzvednout na procházku.
- Audit CURRENT: Přišel jsem tě vzít na procházku.
- Production CURRENT: Přišel jsem tě vzít na procházku.

---

## 582 — `sentence-581`

**DE**
`Geh bitte etwas langsamer, ich kann dir nicht folgen!`

**CS CURRENT**
`Jdi trochu pomaleji, nestíhám s tebou!`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 583 — `sentence-582`

**DE**
`Ich bin zum ersten Mal in dieser Gegend.`

**CS CURRENT**
`Jsem tu poprvé.`

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
- Reason: České „tady“ je obecnější a vypouští význam konkrétní oblasti vyjádřený „in dieser Gegend“.
- Proposed replacement: V této části města jsem poprvé.
- Audit CURRENT: Jsem tu poprvé.
- Production CURRENT: Jsem tu poprvé.

---

## 584 — `sentence-583`

**DE**
`Ruhen wir uns ein wenig aus.`

**CS CURRENT**
`Pojďme si trochu odpočinout.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 585 — `sentence-584`

**DE**
`Jetzt können wir zurückgehen.`

**CS CURRENT**
`Teď se můžeme vrátit.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 586 — `sentence-585`

**DE**
`Ehrlich gesagt bin ich ziemlich müde.`

**CS CURRENT**
`Upřímně, jsem docela unavený.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 587 — `sentence-586`

**DE**
`Entschuldige, wo ist die nächste U-Bahn-Station?`

**CS CURRENT**
`Promiňte, kde je nejbližší stanice metra?`

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
- Reason: Německé „Entschuldige“ je neformální oslovení, zatímco „Promiňte“ vyjadřuje vykání nebo množné číslo.
- Proposed replacement: Promiň, kde je nejbližší stanice metra?
- Audit CURRENT: Promiňte, kde je nejbližší stanice metra?
- Production CURRENT: Promiňte, kde je nejbližší stanice metra?

---

## 588 — `sentence-587`

**DE**
`Welcher ist der kürzeste Weg?`

**CS CURRENT**
`Jaká je nejkratší cesta?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 589 — `sentence-588`

**DE**
`Geh hier die zweite Straße links und dann immer geradeaus.`

**CS CURRENT**
`Zde odbočte druhou ulicí doleva a jděte rovně.`

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
- Reason: Německé „Geh“ je neformální jednotné číslo, ale české rozkazy používají vykání nebo množné číslo.
- Proposed replacement: Tady odboč druhou ulicí doleva a pak jdi pořád rovně.
- Audit CURRENT: Zde odbočte druhou ulicí doleva a jděte rovně.
- Production CURRENT: Zde odbočte druhou ulicí doleva a jděte rovně.

---

## 590 — `sentence-589`

**DE**
`Wie komme ich am schnellsten zum Bahnhof?`

**CS CURRENT**
`Jak se rychleji dostat na nádraží?`

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
- Reason: Česká věta je infinitivní a „rychleji“ znamená spíše rychlejším způsobem; originál se ptá na nejrychlejší cestu mluvčího.
- Proposed replacement: Jak se nejrychleji dostanu na nádraží?
- Audit CURRENT: Jak se rychleji dostat na nádraží?
- Production CURRENT: Jak se rychleji dostat na nádraží?

---

## 591 — `sentence-590`

**DE**
`Ich habe vor, morgen zu verreisen.`

**CS CURRENT**
`Mám v úmyslu zítra odjet.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 592 — `sentence-591`

**DE**
`Wohin willst du fahren?`

**CS CURRENT**
`Kam chceš jít?`

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
- Reason: Německé „fahren“ označuje cestu dopravním prostředkem; české „jít“ znamená jít pěšky.
- Proposed replacement: Kam chceš jet?
- Audit CURRENT: Kam chceš jít?
- Production CURRENT: Kam chceš jít?

---

## 593 — `sentence-592`

**DE**
`Reist du geschäftlich oder privat?`

**CS CURRENT**
`Cestujete za prací nebo za zábavou?`

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
- Reason: Originál používá neformální „du“ a rozlišení služebně versus soukromě, ne za prací versus za zábavou.
- Proposed replacement: Cestuješ služebně, nebo soukromě?
- Audit CURRENT: Cestujete za prací nebo za zábavou?
- Production CURRENT: Cestujete za prací nebo za zábavou?

---

## 594 — `sentence-593`

**DE**
`Finn fährt bis Berlin mit, dann geht er ans Meer.`

**CS CURRENT**
`Finn jede do Berlína, pak pojede k moři.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 595 — `sentence-594`

**DE**
`Wann fährt das Schiff ab?`

**CS CURRENT**
`Kdy loď odplouvá?`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 596 — `sentence-595`

**DE**
`In einer halben Stunde.`

**CS CURRENT**
`Po půl hodině.`

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
- Reason: V běžném kontextu odjezdu německé „in einer halben Stunde“ znamená „za půl hodiny“, ne „po půl hodině“.
- Proposed replacement: Za půl hodiny.
- Audit CURRENT: Po půl hodině.
- Production CURRENT: Po půl hodině.

---

## 597 — `sentence-596`

**DE**
`Kann ich noch eine Kabine bekommen?`

**CS CURRENT**
`Mohu ještě dostat chatu?`

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
- Reason: „Kabine“ je kajuta, nikoli „chata“; český překlad označuje jiný typ ubytování.
- Proposed replacement: Mohu ještě dostat kajutu?
- Audit CURRENT: Mohu ještě dostat chatu?
- Production CURRENT: Mohu ještě dostat chatu?

---

## 598 — `sentence-597`

**DE**
`Vergiss deinen Pass nicht!`

**CS CURRENT**
`Nezapomeňte si pas!`

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
- Reason: Německé „Vergiss“ je neformální jednotné číslo, ale „Nezapomeňte“ je vykání nebo množné číslo.
- Proposed replacement: Nezapomeň si pas!
- Audit CURRENT: Nezapomeňte si pas!
- Production CURRENT: Nezapomeňte si pas!

---

## 599 — `sentence-598`

**DE**
`Es ist Zeit, den Koffer zu packen.`

**CS CURRENT**
`Je čas sbalit si kufr.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

NONE
---

## 600 — `sentence-599`

**DE**
`Der Zug fährt um halb sieben ab.`

**CS CURRENT**
`Vlak odjíždí v půl osmé.`

**Other localized fields**
```json
{
  "level": "Sätze"
}
```

### Findings

#### Finding 1
- Severity: CRITICAL
- Type: SEMANTICS
- Source: Luna
- Field: lv
- Reason: „Halb sieben“ znamená 6:30, tedy česky „v půl sedmé“; „v půl osmé“ znamená 7:30.
- Proposed replacement: Vlak odjíždí v půl sedmé.
- Audit CURRENT: Vlak odjíždí v půl osmé.
- Production CURRENT: Vlak odjíždí v půl osmé.

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

## Integrity summary

```text
productionVetyCount: 796
masterCards: 796
uniqueProductionIds: 796
missingProductionCardsInMaster: 0
duplicatedProductionCards: 0
groups: 16
groupCoverage: 001–796
orderParityWithProduction: PASS
fullAuditFindings: 308
fullAuditMdDetailedFindings: 101
transferredToMaster: 308
mdFindingsAlsoPresentInMaster: 101
unresolvedFindingReferences: 0
auditCurrentMismatches: 0
cardsWithFindings: 308
productionChanges: 0
deChanges: 0
csChanges: 0
```