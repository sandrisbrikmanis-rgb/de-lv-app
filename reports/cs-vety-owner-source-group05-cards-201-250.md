# CS–DE Věty OWNER SOURCE — Group 05

Cards 201–250 (production order)

READ-ONLY OWNER source. No Cursor-selected NEW repairs.

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
