# BS–DE A1 izņemto sectionAccents pedagoģiskā regresijas pārbaude

**Audita datums:** 2026-08-06  
**Režīms:** Tikai audits — datu faili netika mainīti

---

## 1. Audita avoti

| Avots | Ceļš |
|---|---|
| Pilnais audits | `reports/bs-a1-full-audit.md` |
| Labošanas atskaite | `reports/bs-a1-section-accents-fix.md` |
| Labošanas žurnāls | `reports/temp/bs-a1-section-accents-fix-log.json` |
| Analīzes dati | `reports/temp/bs-a1-removed-section-accents-analysis.json` |
| LV–DE etalons | `data/a1.js` (tikai lasīšana) |
| BS dati | `data/bs/a1.js`, `www/data/bs/a1.js` |

---

## 2. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Pārbaudīto izņemto elementu skaits | **70** |
| Skarto kartīšu skaits | **34** |
| CORRECTLY REMOVED | **64** |
| SHOULD BE RESTORED | **0** |
| WARNING — MANUAL REVIEW | **6** |

### Secinājums

Pēc 70 izņemto elementu pedagoģiskās pārbaudes **nav konstatēts neviens apstiprināts SHOULD BE RESTORED gadījums**. Lielākā daļa (64/70) bija LV atlikumi, orphan DE/BS ieraksti vai termini, kas neeksistēja attiecīgajā BS tekstā. 6 elementi saņēma WARNING — ieteicama vizuāla pārbaude, bet nav pierādīts būtisks highlight trūkums.

**Pedagoģiskā līdzvērtība LV etalonam:** BS highlight sistēma pēc labojuma ir **funkcionāli līdzvērtīga** — galvenie mācību jēdzieni joprojām izcelti pašreizējā `sectionAccents` datos. Atsevišķās kartītēs akcentu skaits ir mazāks nekā LV, bet tas atspoguļo īsāku BS tekstu vai salīdzinājumu saīsinājumu, nevis pedagoģisku defektu.

---

## 3. SHOULD BE RESTORED saraksts

**Nav apstiprinātu ierakstu (0).**

---

## 4. WARNING — MANUAL REVIEW saraksts (6)

| ID | Ceļš | Iepriekšējā vērtība | Ieteicamais BS akcents |
|---|---|---|---|
| a1-bringen | `sectionAccents.comparison[0].meaning.purple[2]` | Odneti i doneti | — |
| a1-bringen | `sectionAccents.comparison[3].meaning.purple[0]` | Ponesite sa sobom | — |
| a1-die | `sectionAccents.important[1].purple[0]` | Svim rodovima | rodove |
| a1-ein | `sectionAccents.tip.left.purple[1]` | Nekoga | neodređeni |
| a1-wie | `sectionAccents.important[0].purple[1]` | cik vecs | godina |
| a1-wie | `sectionAccents.important[0].purple[2]` | cik ilgi | dugo |

---

## 5. Kopsavilkums pa kartītēm

| Kartīte | Izņemti | CORRECTLY | WARNING | Piezīme |
|---|---:|---:|---:|---|
| a1-bringen | 10 | 8 | 2 | Vizuāla pārbaude |
| a1-etwas | 7 | 7 | 0 | Visi lieki/orphan |
| a1-es | 5 | 5 | 0 | Visi lieki/orphan |
| a1-ins | 4 | 4 | 0 | Visi lieki/orphan |
| a1-bitte-study | 3 | 3 | 0 | Visi lieki/orphan |
| a1-ein | 3 | 2 | 1 | Vizuāla pārbaude |
| a1-im | 3 | 3 | 0 | Visi lieki/orphan |
| a1-kosten | 3 | 3 | 0 | Visi lieki/orphan |
| a1-sein | 3 | 3 | 0 | Visi lieki/orphan |
| a1-aufs | 2 | 2 | 0 | Visi lieki/orphan |
| a1-bleiben | 2 | 2 | 0 | Visi lieki/orphan |
| a1-mit | 2 | 2 | 0 | Visi lieki/orphan |
| a1-wie | 2 | 0 | 2 | Vizuāla pārbaude |
| a1-aber | 1 | 1 | 0 | Visi lieki/orphan |
| a1-baden | 1 | 1 | 0 | Visi lieki/orphan |
| a1-besuchen | 1 | 1 | 0 | Visi lieki/orphan |
| a1-die | 1 | 0 | 1 | Vizuāla pārbaude |
| a1-erst | 1 | 1 | 0 | Visi lieki/orphan |
| a1-finden | 1 | 1 | 0 | Visi lieki/orphan |
| a1-gleich | 1 | 1 | 0 | Visi lieki/orphan |
| a1-gross-study | 1 | 1 | 0 | Visi lieki/orphan |
| a1-haben | 1 | 1 | 0 | Visi lieki/orphan |
| a1-heißen | 1 | 1 | 0 | Visi lieki/orphan |
| a1-hoch-study | 1 | 1 | 0 | Visi lieki/orphan |
| a1-hoeren-study | 1 | 1 | 0 | Visi lieki/orphan |
| a1-in | 1 | 1 | 0 | Visi lieki/orphan |
| a1-lassen | 1 | 1 | 0 | Visi lieki/orphan |
| a1-liegen | 1 | 1 | 0 | Visi lieki/orphan |
| a1-über | 1 | 1 | 0 | Visi lieki/orphan |
| a1-um | 1 | 1 | 0 | Visi lieki/orphan |
| a1-unter | 1 | 1 | 0 | Visi lieki/orphan |
| a1-zu | 1 | 1 | 0 | Visi lieki/orphan |
| a1-zug | 1 | 1 | 0 | Visi lieki/orphan |
| a1-einmal | 1 | 1 | 0 | Visi lieki/orphan |

### Kartītes ar visvairāk izņemtiem elementiem (≥3)

- **a1-bringen** — 10 elementi (8 correctly removed)
- **a1-etwas** — 7 elementi (7 correctly removed)
- **a1-es** — 5 elementi (5 correctly removed)
- **a1-ins** — 4 elementi (4 correctly removed)
- **a1-bitte-study** — 3 elementi (3 correctly removed)
- **a1-ein** — 3 elementi (2 correctly removed)
- **a1-im** — 3 elementi (3 correctly removed)
- **a1-kosten** — 3 elementi (3 correctly removed)
- **a1-sein** — 3 elementi (3 correctly removed)

### Kartītes ar iespējamu nepietiekamu blīvumu (WARNING)

- a1-bringen
- a1-die
- a1-ein
- a1-wie

### Kartītes, kur visi izņemtie bija orphan/semantiski lieki

a1-aber, a1-aufs, a1-baden, a1-besuchen, a1-bitte-study, a1-bleiben, a1-einmal, a1-erst, a1-es, a1-etwas, a1-finden, a1-gleich, a1-gross-study, a1-haben, a1-heißen (+15 citas)

---

## 6. Visi 70 elementi (detalizēti)

### a1-aber — `sectionAccents.important[1].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].purple[1]
- **Iepriekšējā vērtība:** bet gan
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Ako je suprotnost „ne..., nego...”, u njemačkom se obično koristi sondern.
- **LV etalona konteksts:** bet gan
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV „bet gan” neeksistē BS tekstā. Kontrasts „ne..., nego...” pedagoģiski nodrošināts: sondern (yellow), salīdzinājuma piemērā „nego”, un important ievads ar „Ako”.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-aufs — `sectionAccents.comparison[0].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[0]
- **Iepriekšējā vērtība:** određeni
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Na konkretnu stvar (Akk.)
- **LV etalona konteksts:** uz konkrētu lietu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „određeni” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 0 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-aufs — `sectionAccents.comparison[1].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[0]
- **Iepriekšējā vērtība:** uz virsmu
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Na površinu ili prema gore
- **LV etalona konteksts:** uz virsmu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „uz virsmu” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-baden — `sectionAccents.comparison[0].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[1]
- **Iepriekšējā vērtība:** Glavna
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Plivati ​​/ biti u vodi / oprati se
- **LV etalona konteksts:** atrasties ūdenī
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Glavna” ir LV etalona struktūras atlikums (no „Galvenā ideja”), ne BS mācību vārds. Nav tekstā kā atsevišķs akcentējams elements.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-besuchen — `sectionAccents.tip.left.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip.left.purple[1]
- **Iepriekšējā vērtība:** apciemot
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Zapamti: mjesto se posjećuje, ali se osoba na bosanskom često obilazi.
- **LV etalona konteksts:** apciemot
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV „apciemot” aizstāts ar BS „obilazi” tip.left akcentos (blue un purple). Pedagoģiskā funkcija saglabāta.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bitte-study — `sectionAccents.tip.left.blue[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip.left.blue[1]
- **Iepriekšējā vērtība:** Molim te
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Zapamti: die Bitte je imenica, a bitte je učtiva riječ.
- **LV etalona konteksts:** lūdzu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Molim te” neeksistē tip tekstā. BS izmanto „bitte”/„Bitte” — jau izcelts citā blue akcentā.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-bitte-study — `sectionAccents.important[0].green[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[0].green[1]
- **Iepriekšējā vērtība:** die Bitten
- **Krāsa:** green
- **Attiecīgais BS teksts:** Član: die Bitte.
- **LV etalona konteksts:** die Bitten
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „die Bitten” neeksistē important[0] tekstā („Član: die Bitte.”). Orphan DE forma no LV struktūras.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** green
- **Vai nepieciešams labojums:** NĒ

### a1-bitte-study — `sectionAccents.important[1].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].purple[1]
- **Iepriekšējā vērtība:** Veliko početno slovo
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Množina: die Bitten.
- **LV etalona konteksts:** lielais sākumburts
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Frāze neeksistē BS tekstā. Množina important[1] izceļ „die Bitten” — pietiekami.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bleiben — `sectionAccents.explanation.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.explanation.purple[1]
- **Iepriekšējā vērtība:** neiet prom
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Glavna ideja: bleiben znači ostati. Bleiben se koristi kada osoba ili stvar ne nestane i ostane na istom mjestu ili stanju. To je suprotno od gehena i fahrena kada je u pitanju odlazak. Vrlo česta fra
- **LV etalona konteksts:** neiet prom
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „neiet prom” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bleiben — `sectionAccents.comparison[1].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[1]
- **Iepriekšējā vērtība:** doties prom
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Ići / otići pješice
- **LV etalona konteksts:** doties prom
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „doties prom” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.examples[0].de.yellow[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[0].de.yellow[0]
- **Iepriekšējā vērtība:** Wasser
- **Krāsa:** yellow
- **Attiecīgais BS teksts:** Ich bringe dir ein Buch.
- **LV etalona konteksts:** Wasser
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** DE akcents „Wasser” neeksistē attiecīgajā vācu piemērā („Ich bringe dir ein Buch.”). Bija nepareizs/orphan DE ieraksts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** yellow
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.examples[2].de.yellow[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[2].de.yellow[0]
- **Iepriekšējā vērtība:** Buch
- **Krāsa:** yellow
- **Attiecīgais BS teksts:** Ich bringe die Kinder zur Schule.
- **LV etalona konteksts:** Buch
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** DE akcents „Buch” neeksistē attiecīgajā vācu piemērā („Ich bringe die Kinder zur Schule.”). Bija nepareizs/orphan DE ieraksts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** yellow
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[0].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[1]
- **Iepriekšējā vērtība:** aiznest
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Donijeti
- **LV etalona konteksts:** aiznest
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „aiznest” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[0].meaning.purple[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[2]
- **Iepriekšējā vērtība:** Odneti i doneti
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Donijeti
- **LV etalona konteksts:** nogādāt
- **Statuss:** WARNING — MANUAL REVIEW
- **Pamatojums:** Termins „Odneti i doneti” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 1 BS akcenti.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[1].word.green[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].word.green[0]
- **Iepriekšējā vērtība:** nehmen
- **Krāsa:** green
- **Attiecīgais BS teksts:** bringen
- **LV etalona konteksts:** nehmen
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Salīdzinājuma vārds „nehmen” neeksistē šajā BS comparison rindā (tika saīsināts salīdzinājumu saraksts). Orphan DE/semantiska neatbilstība.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** green
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[2].word.green[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[2].word.green[0]
- **Iepriekšējā vērtība:** holen
- **Krāsa:** green
- **Attiecīgais BS teksts:** bringen
- **LV etalona konteksts:** holen
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Salīdzinājuma vārds „holen” neeksistē šajā BS comparison rindā (tika saīsināts salīdzinājumu saraksts). Orphan DE/semantiska neatbilstība.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** green
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[2].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[2].meaning.purple[1]
- **Iepriekšējā vērtība:** atnest
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Idi za / dohvati
- **LV etalona konteksts:** atnest
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „atnest” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[3].word.green[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].word.green[0]
- **Iepriekšējā vērtība:** mitbringen
- **Krāsa:** green
- **Attiecīgais BS teksts:** bringen
- **LV etalona konteksts:** mitbringen
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Salīdzinājuma vārds „mitbringen” neeksistē šajā BS comparison rindā (tika saīsināts salīdzinājumu saraksts). Orphan DE/semantiska neatbilstība.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** green
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[3].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].meaning.purple[0]
- **Iepriekšējā vērtība:** Ponesite sa sobom
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Odneti i doneti
- **LV etalona konteksts:** paņemt līdzi
- **Statuss:** WARNING — MANUAL REVIEW
- **Pamatojums:** Termins „Ponesite sa sobom” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 0 BS akcenti.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-bringen — `sectionAccents.comparison[3].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].meaning.purple[1]
- **Iepriekšējā vērtība:** atnest
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Odneti i doneti
- **LV etalona konteksts:** atnest
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „atnest” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-die — `sectionAccents.important[1].purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].purple[0]
- **Iepriekšējā vērtība:** Svim rodovima
- **Krāsa:** purple
- **Attiecīgais BS teksts:** U množini se die koristi i za sve rodove.
- **LV etalona konteksts:** visām dzimtēm
- **Statuss:** WARNING — MANUAL REVIEW
- **Pamatojums:** BS teksts min rodove; iespējams vēlams akcents „rodove”.
- **Ieteicamais BS akcents:** rodove
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-ein — `sectionAccents.tip.left.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip.left.purple[1]
- **Iepriekšējā vērtība:** Nekoga
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Zapamti: ein nije samo „jedan”. Često je to samo neodređeni član.
- **LV etalona konteksts:** kāds
- **Statuss:** WARNING — MANUAL REVIEW
- **Pamatojums:** Tip par neodređeni član; „Nekoga” neeksistē tekstā. Iespējams akcentēt „neodređeni” vai „jedan”, bet nav obligāti.
- **Ieteicamais BS akcents:** neodređeni
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-ein — `sectionAccents.important[1].blue[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].blue[1]
- **Iepriekšējā vērtība:** die
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Ein — srednji rod.
- **LV etalona konteksts:** die
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** DE forma „die” neeksistē important[1] tekstā („Ein — srednji rod.”). Orphan no LV struktūras.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-ein — `sectionAccents.important[1].blue[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].blue[2]
- **Iepriekšējā vērtība:** das
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Ein — srednji rod.
- **LV etalona konteksts:** das
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** DE forma „das” neeksistē important[1] tekstā („Ein — srednji rod.”). Orphan no LV struktūras.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-erst — `sectionAccents.important[1].green[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].green[1]
- **Iepriekšējā vērtība:** Najprije
- **Krāsa:** green
- **Attiecīgais BS teksts:** Erst često znači: samo.
- **LV etalona konteksts:** secību
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Najprije” neeksistē important tekstā („Erst često znači: samo.”). Semantiski atšķirīgs no LV „secību”.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** green
- **Vai nepieciešams labojums:** NĒ

### a1-es — `sectionAccents.examples[0].blue[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[0].blue[0]
- **Iepriekšējā vērtība:** Ich
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Es regnet. Pada kiša.
- **LV etalona konteksts:** Ich
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Orphan examples[0] akcents — BS kartei ir mazāk piemēru nekā LV sectionAccents rindas. DE vārds „Ich” neattiecas uz šo BS piemēra tekstu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-es — `sectionAccents.examples[1].blue[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[1].blue[0]
- **Iepriekšējā vērtība:** Er
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Es ist kalt. On je umoran.
- **LV etalona konteksts:** Er
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Orphan examples[1] akcents — BS kartei ir mazāk piemēru nekā LV sectionAccents rindas. DE vārds „Er” neattiecas uz šo BS piemēra tekstu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-es — `sectionAccents.examples[2].red[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[2].red[0]
- **Iepriekšējā vērtība:** Sie
- **Krāsa:** red
- **Attiecīgais BS teksts:** Das Kind schläft. Dijete spava.
- **LV etalona konteksts:** Sie
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Orphan examples[2] akcents — BS kartei ir mazāk piemēru nekā LV sectionAccents rindas. DE vārds „Sie” neattiecas uz šo BS piemēra tekstu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** red
- **Vai nepieciešams labojums:** NĒ

### a1-es — `sectionAccents.examples[3].yellow[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[3].yellow[0]
- **Iepriekšējā vērtība:** Das
- **Krāsa:** yellow
- **Attiecīgais BS teksts:** Es ist müde. To je moja knjiga.
- **LV etalona konteksts:** Das
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Orphan examples[3] akcents — BS kartei ir mazāk piemēru nekā LV sectionAccents rindas. DE vārds „Das” neattiecas uz šo BS piemēra tekstu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** yellow
- **Vai nepieciešams labojums:** NĒ

### a1-es — `sectionAccents.important[1].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].purple[1]
- **Iepriekšējā vērtība:** Tako
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Njemačko es nije bosansko „ja“.
- **LV etalona konteksts:** tā
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Orphan examples[1] akcents — BS kartei ir mazāk piemēru nekā LV sectionAccents rindas. DE vārds „Tako” neattiecas uz šo BS piemēra tekstu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.explanation.yellow[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.explanation.yellow[1]
- **Iepriekšējā vērtība:** daudzuma
- **Krāsa:** yellow
- **Attiecīgais BS teksts:** Glavna ideja: etwas uglavnom znači nešto. Kod pridjeva može značiti pomalo. Ich habe etwas gesehen. — Vidio sam nešto. Das ist etwas teuer. — To je malo preskupo.
- **LV etalona konteksts:** daudzuma
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „daudzuma” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** yellow
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.explanation.purple[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.explanation.purple[2]
- **Iepriekšējā vērtība:** kaut ko
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Glavna ideja: etwas uglavnom znači nešto. Kod pridjeva može značiti pomalo. Ich habe etwas gesehen. — Vidio sam nešto. Das ist etwas teuer. — To je malo preskupo.
- **LV etalona konteksts:** kaut ko
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV „kaut ko” aizstāts; BS explanation jau akcentē „nešto” un „malo”.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.comparison[0].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[0]
- **Iepriekšējā vērtība:** kaut kas
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Nešto / malo
- **LV etalona konteksts:** kaut kas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kaut kas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.comparison[0].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[1]
- **Iepriekšējā vērtība:** nedaudz
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Nešto / malo
- **LV etalona konteksts:** nedaudz
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „nedaudz” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.comparison[1].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[0]
- **Iepriekšējā vērtība:** kaut kas
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Nešto (kolokvijalno)
- **LV etalona konteksts:** kaut kas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kaut kas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.important[0].red[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[0].red[1]
- **Iepriekšējā vērtība:** nekas
- **Krāsa:** red
- **Attiecīgais BS teksts:** Uz pridjeve etwas često znači malo.
- **LV etalona konteksts:** nekas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „nekas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** red
- **Vai nepieciešams labojums:** NĒ

### a1-etwas — `sectionAccents.important[1].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].purple[1]
- **Iepriekšējā vērtība:** kaut kas
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Etwas nije isto što i nichts: etwas znači da nešto postoji, a nichts znači ništa.
- **LV etalona konteksts:** kaut kas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kaut kas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-finden — `sectionAccents.examples[1].de.blue[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.examples[1].de.blue[0]
- **Iepriekšējā vērtība:** gefunden
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Ich finde das gut.
- **LV etalona konteksts:** gefunden
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** DE akcents „gefunden” neeksistē attiecīgajā vācu piemērā („Ich finde das gut.”). Bija nepareizs/orphan DE ieraksts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-gleich — `sectionAccents.tip[1].green[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip[1].green[0]
- **Iepriekšējā vērtība:** Glavna
- **Krāsa:** green
- **Attiecīgais BS teksts:** Za poređenje (isto) → isto.
- **LV etalona konteksts:** vienāds
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Glavna” ir LV etalona struktūras atlikums (no „Galvenā ideja”), ne BS mācību vārds. Nav tekstā kā atsevišķs akcentējams elements.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** green
- **Vai nepieciešams labojums:** NĒ

### a1-gross-study — `sectionAccents.tip[0].purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip[0].purple[0]
- **Iepriekšējā vērtība:** liels
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Groß = veliko
- **LV etalona konteksts:** liels
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „liels” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-haben — `sectionAccents.comparison[0].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[0]
- **Iepriekšējā vērtība:** man ir
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Imam
- **LV etalona konteksts:** man ir
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „man ir” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-heißen — `sectionAccents.comparison[3].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].meaning.purple[1]
- **Iepriekšējā vērtība:** pasaukt
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Poziv / poziv
- **LV etalona konteksts:** pasaukt
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „pasaukt” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-hoch-study — `sectionAccents.tip[0].purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip[0].purple[0]
- **Iepriekšējā vērtība:** augsts
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Hoch = visoko
- **LV etalona konteksts:** augsts
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „augsts” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-hoeren-study — `sectionAccents.tip[1].purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip[1].purple[0]
- **Iepriekšējā vērtība:** Glavna
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Koristi hören kada kontekst odgovara ovom značenju.
- **LV etalona konteksts:** klausīties
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Glavna” ir LV etalona struktūras atlikums (no „Galvenā ideja”), ne BS mācību vārds. Nav tekstā kā atsevišķs akcentējams elements.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-im — `sectionAccents.comparison[0].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[1]
- **Iepriekšējā vērtība:** kur?
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Unutra gde? (kome?)
- **LV etalona konteksts:** kur?
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kur?” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-im — `sectionAccents.comparison[1].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[1]
- **Iepriekšējā vērtība:** kurp?
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Unutra, gde? (U skladu)
- **LV etalona konteksts:** kurp?
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kurp?” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-im — `sectionAccents.comparison[4].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[4].meaning.purple[0]
- **Iepriekšējā vērtība:** uz virsmas
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Na površini
- **LV etalona konteksts:** uz virsmas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „uz virsmas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-in — `sectionAccents.important[0].purple[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[0].purple[2]
- **Iepriekšējā vērtība:** uz kino
- **Krāsa:** purple
- **Attiecīgais BS teksts:** In nije uvijek doslovno „unutra” • Na bosanskom se često kaže u Berlinu, u školi, u kino.
- **LV etalona konteksts:** uz kino
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „uz kino” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-ins — `sectionAccents.comparison[0].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[0].meaning.purple[1]
- **Iepriekšējā vērtība:** kurp?
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Unutra, gde? (U skladu)
- **LV etalona konteksts:** kurp?
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kurp?” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-ins — `sectionAccents.comparison[1].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[1]
- **Iepriekšējā vērtība:** kur?
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Unutra gde? (kome?)
- **LV etalona konteksts:** kur?
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „kur?” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-ins — `sectionAccents.comparison[2].meaning.purple[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[2].meaning.purple[2]
- **Iepriekšējā vērtība:** nezavisnim
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Unutra / na (sa samostalnim članom)
- **LV etalona konteksts:** patstāvīgu artikulu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „nezavisnim” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 2 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-ins — `sectionAccents.comparison[3].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].meaning.purple[0]
- **Iepriekšējā vērtība:** uz virsmu
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Na površinu (Akk.)
- **LV etalona konteksts:** uz virsmu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „uz virsmu” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-kosten — `sectionAccents.explanation.purple[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.explanation.purple[2]
- **Iepriekšējā vērtība:** Osnovna
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Glavna ideja: kosten znači koštati toliko i toliko — govori se o cijeni stvari. Ova riječ se koristi kada se pita ili kaže koliko nešto košta, a ne kada osoba vrši plaćanje. Pitanje o cijeni na njemač
- **LV etalona konteksts:** cik kaut kas maksā
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „Osnovna” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 6 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-kosten — `sectionAccents.comparison[3].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].meaning.purple[0]
- **Iepriekšējā vērtība:** Platiti
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Koliko kosta...?
- **LV etalona konteksts:** cik maksā
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „Platiti” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 0 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-kosten — `sectionAccents.tip[0].blue[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip[0].blue[1]
- **Iepriekšējā vērtība:** Was kostet
- **Krāsa:** blue
- **Attiecīgais BS teksts:** Zapamtite: pitanje o cijeni → kosten (Je li kostet das?).
- **LV etalona konteksts:** Was kostet
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „Was kostet” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 2 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** blue
- **Vai nepieciešams labojums:** NĒ

### a1-lassen — `sectionAccents.important[0].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[0].purple[1]
- **Iepriekšējā vērtība:** Glavna
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Lassen nije samo „ostaviti“. Često znači i „dopustiti“.
- **LV etalona konteksts:** ļaut
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Glavna” ir LV etalona struktūras atlikums (no „Galvenā ideja”), ne BS mācību vārds. Nav tekstā kā atsevišķs akcentējams elements.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-liegen — `sectionAccents.important[1].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[1].purple[1]
- **Iepriekšējā vērtība:** noliek
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Legen označava radnju: neko nešto polaže.
- **LV etalona konteksts:** noliek
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „noliek” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 2 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-mit — `sectionAccents.explanation.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.explanation.purple[1]
- **Iepriekšējā vērtība:** Zajedno sa
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Glavna ideja: mit najčešće znači sa. Mit se koristi kada je osoba s nekim ili nešto radi s nekom stvari. Kod prijevoza, mit često znači ići autobusom, vozom ili autom. Na nivou A1 vrlo česte fraze su 
- **LV etalona konteksts:** kopā ar
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** „Zajedno sa” neeksistē BS tekstā; BS izmanto „sa” — jau akcentēts explanation purple[0].
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-mit — `sectionAccents.tip.left.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip.left.purple[1]
- **Iepriekšējā vērtība:** ar transportu
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Zapamtite: zajedno s nekim ili sa prijevozom → mit.
- **LV etalona konteksts:** ar transportu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV „ar transportu” nav BS tekstā; tip min „prijevozom” — akcentēts citā purple slotā.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-sein — `sectionAccents.explanation.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.explanation.purple[1]
- **Iepriekšējā vērtība:** Liegen
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Glavna ideja: sein znači biti. Sein je jedan od najvažnijih njemačkih glagola. Na nivou A1 posebno su važni oblici ich bin, du bist, er ist i wir sind. Sein se također koristi u mnogim rečenicama s mj
- **LV etalona konteksts:** atrašanās vietu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „Liegen” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 7 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-sein — `sectionAccents.comparison[1].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[0]
- **Iepriekšējā vērtība:** man ir
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Imam
- **LV etalona konteksts:** man ir
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „man ir” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-sein — `sectionAccents.tip.left.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip.left.purple[1]
- **Iepriekšējā vērtība:** tu esi
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Zapamtite: ich bin = ja sam • Du bist = jesi.
- **LV etalona konteksts:** tu esi
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „tu esi” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 3 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-über — `sectionAccents.comparison[1].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[0]
- **Iepriekšējā vērtība:** uz virsmas
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Na površini
- **LV etalona konteksts:** uz virsmas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „uz virsmas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-um — `sectionAccents.comparison[2].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[2].meaning.purple[0]
- **Iepriekšējā vērtība:** ap laiku
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Oko vremena / vs
- **LV etalona konteksts:** ap laiku
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „ap laiku” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 1 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-unter — `sectionAccents.comparison[3].meaning.purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[3].meaning.purple[0]
- **Iepriekšējā vērtība:** uz virsmas
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Na površini
- **LV etalona konteksts:** uz virsmas
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV atlikums „uz virsmas” neeksistē BS tekstā. Semantiski aizstāts ar lokalizētu BS saturu.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-wie — `sectionAccents.important[0].purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[0].purple[1]
- **Iepriekšējā vērtība:** cik vecs
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Wie viel(e) = koliko • Wie alt = koliko godina • Wie lange = koliko dugo.
- **LV etalona konteksts:** cik vecs
- **Statuss:** WARNING — MANUAL REVIEW
- **Pamatojums:** BS important izmanto formulu „Wie alt = koliko godina”. LV akcentēja atsevišķi „cik vecs”. Iespējams akcentēt „godina”, bet pašlaik „Wie” pārklāj visu formulu bloku.
- **Ieteicamais BS akcents:** godina
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-wie — `sectionAccents.important[0].purple[2]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.important[0].purple[2]
- **Iepriekšējā vērtība:** cik ilgi
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Wie viel(e) = koliko • Wie alt = koliko godina • Wie lange = koliko dugo.
- **LV etalona konteksts:** cik ilgi
- **Statuss:** WARNING — MANUAL REVIEW
- **Pamatojums:** Analogi — BS „koliko dugo” atbilst LV „cik ilgi”. Iespējams akcentēt „dugo”.
- **Ieteicamais BS akcents:** dugo
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-zu — `sectionAccents.comparison[2].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[2].meaning.purple[1]
- **Iepriekšējā vērtība:** uz vietu
- **Krāsa:** purple
- **Attiecīgais BS teksts:** U / na mjesto
- **LV etalona konteksts:** uz vietu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „uz vietu” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 1 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-zug — `sectionAccents.comparison[1].meaning.purple[1]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.comparison[1].meaning.purple[1]
- **Iepriekšējā vērtība:** vilcienu
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Željeznica / vožnja vozom
- **LV etalona konteksts:** vilcienu
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** Termins „vilcienu” neeksistē attiecīgajā BS tekstā. Nevarēja droši kartēt. Pašreizējā sadaļa: 1 BS akcenti. Pārklājums saglabāts.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ

### a1-einmal — `sectionAccents.tip[1].purple[0]`

- **Fails:** data/bs/a1.js
- **Lauks:** sectionAccents.tip[1].purple[0]
- **Iepriekšējā vērtība:** reiz
- **Krāsa:** purple
- **Attiecīgais BS teksts:** Koristi einmal kada kontekst odgovara ovom značenju.
- **LV etalona konteksts:** reiz
- **Statuss:** CORRECTLY REMOVED
- **Pamatojums:** LV „reiz” aizstāts ar BS „jednom” explanation/tip akcentos.
- **Ieteicamais BS akcents:** —
- **Ieteicamā krāsa:** purple
- **Vai nepieciešams labojums:** NĒ


---

## 7. BS–DE A1 statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ PASS | 702/702, struktūra nemainīta |
| **AI AUDITED** | ✅ PASS | Iepriekšējais pilnais audits pabeigts |
| **sectionAccents TECHNICAL** | ✅ PASS | validate-study-design A1: 0 issues |
| **sectionAccents PEDAGOGICAL** | ⚠️ **PASS WITH WARNINGS** | 0 SHOULD RESTORE; 6 WARNING bez apstiprināta trūkuma |
| **PRODUCTION READY** | ❌ **NĒ** | Pedagoģiskais audits nav pilns PASS (ir 6 WARNING); ieteicama vizuāla izlase |
| **FINAL – OWNER ACCEPTED** | ❌ **NĒ** | Nav native speaker izlases un īpašnieka apstiprinājuma |

### Pedagoģiskā statusa pamatojums: **PASS WITH WARNINGS**

- Visi 70 elementi pārbaudīti pret konkrēto BS tekstu un LV etalonu.
- **0** elementi klasificēti kā obligāti atjaunojami.
- **6** elementi prasa iespējamu vizuālu pārbaudi (`a1-bringen`×2, `a1-die`, `a1-ein`, `a1-wie`×2), bet nav pierādīts, ka pēc izņemšanas pazudis būtisks mācību fokuss.
- **64** elementi patiesi bija lieki, novecojuši, orphan vai nekartējami.

---

## 8. Apliecinājumi

1. Audita laikā **netika mainīts** neviens datu vai aplikācijas fails.
2. Pārbaudīti **visi 70** izņemtie elementi no `bs-a1-section-accents-fix-log.json` (pilns saraksts, nav rekonstrukcijas).
3. Nav veikti automātiski labojumi vai atjaunošana.

---

## 9. Izveidotie faili

| Fails | Git |
|---|---|
| `reports/bs-a1-removed-section-accents-audit.md` | Jā (šis dokuments) |
| `reports/temp/bs-a1-removed-section-accents-analysis.json` | Nē (pagaidu) |
| `scripts/audit-bs-a1-removed-accents.js` | Jā (palīgskripts) |
| `scripts/audit-bs-a1-removed-write-report.js` | Jā (palīgskripts) |

---

*Atskaite ģenerēta 2026-08-06T18:56:21.186Z*
