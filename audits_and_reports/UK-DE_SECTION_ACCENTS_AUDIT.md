# UK-DE papildu audits — `sectionAccents` neatbilstības

**Audita datums:** 2026-07-31  
**Standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md` §43, 2.2. sadaļa  
**Datu avots:** `data/uk/a1.js` … `c2.js` (salīdzinājums ar `data/a*.js` LV-DE bāzi)  
**Validācijas skripts:** `scripts/validate-study-design.js --lang=uk`

---

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Neatbilstības pirms šī audita | **975** |
| Neatbilstības pēc UK kļūdu labojumiem | **967** |
| Salīdzinājums: LV-DE bāze | 2335 |
| Salīdzinājums: LT-DE (mērķa kvalitāte) | 0 |
| Salīdzinājums: ET-DE | 0 |

### Klasifikācija (pēc labojumiem)

| Kategorija | Skaits | Apraksts |
|---|---:|---|
| **1. Mantota no LV-DE bāzes** | **967** | Neatbilstība jau eksistē oriģinālajos LV datos vai ir strukturāli identiska problēma |
| **2. Objektīvi neizlabojama** | **0** | — |
| **3. UK datu kļūda** | **8** atrastas, **8** izlabotas | Tulkošanas/lokalizācijas kļūdas, kas tika novērstas |
| **4. Cits iemesls** | **0** | — |

---

## UK datu kļūdas — atrastas un izlabotas (8)

Šīs kļūdas radīja UK-specifiskas neatbilstības, kurās LV bāzē termins **atrādās** atbilstošajā tekstā, bet UK datos — nē.

| # | Karte | Fails | Problēma | Labojums |
|---|---|---|---|---|
| 1 | `probieren` | `a1.js` | Salīdzinājuma piemērs bojāts: `Ich зонд die Jacke an.` (vācu darbības vārds aizstāts ar kirilicu) | Atjaunots: `Ich probiere die Jacke an.` |
| 2 | `Kamm` | `a2.js` | Piemēra tulkojums nepareizs: `стать півня червона.`; `sectionAccents` saturēja `sext` (daļējs LV `sekste` atlikums) | Teksts: `гребінь півня червоний.`; akcenti: `гребінь`, `півня` |
| 3 | `berichten` | `b1.js` | `sectionAccents.important` saturēja latviski `über + ko?` | Aizstāts ar `über + кого?` (atbilst `important.text`) |
| 4–8 | `sich empören`, `sich entrüsten`, `sich erbarmen`, `sich erregen`, `sich verwundern` | `b2.js` | `sectionAccents` saturēja `über + ko?` (nelokalizēts LV fragments) | Aizstāts ar `über + кого?` (atbilst `explanation`/`rektion`/`forms`) |

**Papildu labojums** (neietekmēja `sectionAccents` skaitu): `probieren` salīdzinājumā `Ich versuche мене.` → `Ich versuche es.`

---

## Kategorija 1 — Mantota no LV-DE bāzes (967 gadījumi)

### Kāpēc tās pastāv

Gandrīz visas atlikušās neatbilstības (**966 no 967**) ir **vācu valodas highlight termini** `sectionAccents` datos, kas validācijas skriptā netiek atrasts atbilstošajā tekstā. Galvenais iemesls:

1. **`sectionAccents` satur pamatformu** (infinitīvu, artikulu, saīsinājumu), bet faktiskais teksts izmanto **locītu/konjugētu formu** (piem., akcents `sprechen`, teksts `Ich spreche`).
2. **Validācijas `stemMatch` loģika** (`validate-study-design.js`) nevar atrast locītas formas, jo `boundaryPattern()` pievieno slēguma robežu pirms infleksijas sufiksa (`sprech` + `(?![\\p{L}])` + `e` → nesakrīt ar `spreche`).
3. **Tā pati problēma pastāv LV-DE bāzē** — 2335 neatbilstības. UK versija pēc automātiskās sinhronizācijas ir pat **labākā** par LV (967 < 2335).

### Apakštipu sadalījums

| Apakštips | Skaits | Piemērs |
|---|---:|---|
| `examples` lauks `de` — konjugācija/locījums | 334 | `sprechen` akcentā, tekstā `Ich spreche Deutsch.` |
| `comparison` — vācu termini salīdzinājuma tabulā | 484 | `der` akcentā, piemērā `die Katze` |
| `tip.left` — saīsinājumi un salikteņi | 16 | `aufs` akcentā, tekstā `auf das` |
| `explanation` — vācu fragmenti skaidrojumā | 34 | `kochen` akcentā, tekstā cita forma |
| `important` — artikuls vai sinonīms | 25 | `die Bitte` akcentā, tekstā `Bitte` |
| Kirilicas mantotā struktūra | 1 | `– (немає)` ← LV `– (nav)` |
| Citi (tip bez lauka u.c.) | 73 | `anbauen` tip sadaļā |

### Reprezentatīvi piemēri

**Piemērs A — infinitīvs vs. konjugācija (`examples.de`):**
```
Karte: sprechen
sectionAccents: { "examples[0].de.green": ["sprechen", "sprechen"] }
Teksts:         "Ich spreche Deutsch."
LV bāzē:        identiska situācija (termins "sprechen", teksts "Ich spreche")
```

**Piemērs B — saīsinājums vs. pilna forma (`tip.left`):**
```
Karte: aufs
sectionAccents: { "tip.left.blue": ["aufs"], "tip.left.purple": ["auf das"] }
Teksts:         "aufs = auf das (Akkusativ)"
LV bāzē:        identiski
```

**Piemērs C — artikuls (`important`):**
```
Karte: Bitte
sectionAccents: { "important.green": ["die Bitte"] }
Teksts:         "... Bitte ..." (bez artikula)
LV bāzē:        identiski
```

**Piemērs D — kirilicas mantojums (`comparison.word`):**
```
Karte: ein
sectionAccents: { "comparison[3].word.green": ["– (немає)"] }
Teksts:         salīdzinājuma tabulā nav tieši šīs frāzes
LV bāzē:        "– (nav)" — tā pati strukturālā neatbilstība
```

---

## Kategorija 2 — Objektīvi neizlabojama (0 pēc labojumiem)

Sākotnējā analīzē 8 gadījumi tika provizoriski klasificēti šeit (LV termins atrādās LV tekstā, bet UK — nē). Pēc padziļinātas pārbaudes **visi 8 izrādījās UK datu kļūdas** (sk. tabulu augšā) un tika izlaboti.

Atlikušās 967 neatbilstības nav “neizlabojamas” tehniskā nozīmē — tās ir mantotas no LV struktūras. To masveida labošana (piem., visu vācu akcentu pārrakstīšana uz locītām formām) pasliktinātu datu uzturēšanu un neatbilstu LT/ET pieejai (kur šīs problēmas tika risinātas ar atsevišķu LT/ET specifisku labojumu ciklu, nevis LV bāzes kopēšanu).

---

## Kategorija 3 — UK datu kļūda (8 atrastas, 8 izlabotas)

Skatīt tabulu sadaļā “UK datu kļūdas”.

---

## Kategorija 4 — Cits iemesls (0)

Pēc UK kļūdu labojumiem atsevišķu gadījumu, kas neiekļautos 1.–3. kategorijā, nav.

---

## Secinājums

- **975 → 967** neatbilstības: 8 UK-specifiskas kļūdas novērstas.
- **Visas atlikušās 967 neatbilstības** ir **mantotas no LV-DE bāzes** vai strukturāli ar to identiskas.
- UK `sectionAccents` kvalitāte ir **labāka par LV bāzi** (967 vs. 2335) un **salīdzināma ar LT/ET mērķi** attiecībā uz ukraiņu valodas terminiem (visi kirilicas highlight termini, izņemot 1 mantoto struktūru, ir sinhronizēti).
- Papildu uzlabojums līdz 0 neatbilstībām (kā LT/ET) prasītu atsevišķu UK-specifisku highlight sinhronizācijas ciklu vācu terminiem — analogu `scripts/fix-lt-section-accents.js`, bet ar DE locītu formu atpazīšanu. Šis nav iekļauts šī audita ietvaros, jo attiecas uz visu LV bāzes dizaina paraugu, nevis UK tulkošanas kļūdām.

---

## Verifikācija

```bash
node scripts/validate-study-design.js --lang=uk
# totals.sectionAccentIssues: 967

node scripts/validate-study-design.js --lang=lv
# totals.sectionAccentIssues: 2335 (bāzes līnija)
```

**Labotie faili:** `data/uk/a1.js`, `a2.js`, `b1.js`, `b2.js` + `www/data/uk/` kopijas.
