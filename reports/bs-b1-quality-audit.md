# BS–DE B1 — pilns kvalitātes audits (GPT-5.6 Terra)

**Datums:** 2026-08-07
**Audita modelis:** gpt-5.6-terra
**Ģenerēšanas modelis:** gpt-5.6-luna (skat. reports/bs-b1-creation-report.md)

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| Ieraksti | 3367 |
| Study kartītes | 324 |
| standardStudy | 323 |
| minimalStudy | 1 |
| **CRITICAL** (Terra) | **129** |
| **HIGH** (Terra) | **1138** |
| **MEDIUM** (Terra) | **683** |
| **WARNING** (Terra + heuristika) | **1325** |
| LV atlikumi sectionAccents (automātiski) | 942 |
| EN atlikumi (galvenie lauki) | 0 |
| CACHE CONTEXT COLLISIONS | 529 |

**Gala rekomendācija:** B — REQUIRES FIX PASS

---

## 2. Statusu tabula

| Statuss | Rezultāts |
|---|---|
| STRUCTURAL PASS | ✅ PASS |
| AI AUDITED | ✅ PASS |
| sectionAccents TECHNICAL | ✅ PASS (0 issues — validate-study-design.js) |
| sectionAccents PEDAGOGICAL | ⚠️ ISSUES FOUND |
| DE READ-ONLY | ✅ PASS |
| CACHE CONTEXT | ⚠️ 529 potenciāli (lielākā daļa — pareizi) |
| PRODUCTION READY | ❌ NĒ |
| FINAL – OWNER ACCEPTED | ⏳ READY FOR OWNER REVIEW |

---

## 3. Obligātās tehniskās pārbaudes

| Pārbaude | Rezultāts |
|---|---|
| JavaScript sintakse (`node --check`) | ✅ PASS |
| UTF-8 / mojibake (`audit-mojibake.js`) | ✅ PASS |
| Ierakstu skaits (3367) | ✅ PASS |
| DE READ-ONLY (`verify-bs-de-compliance.js`) | ✅ PASS |
| Valodu paritāte (`audit-language-parity.js`) | ✅ PASS |
| Study design (`validate-study-design.js`) | ✅ PASS (B1: 0 sectionAccentIssues) |
| data ≡ www | ✅ PASS |

---

## 4. GPT-5.6 Terra API statistika

| Metrika | Vērtība |
|---|---:|
| Modelis | gpt-5.6-terra |
| Kopējie API requesti | 72 |
| Sākotnējie batch requesti | 72 |
| Retry requesti | 0 |
| Input tokeni | 395912 |
| Cached input tokeni | 0 |
| Output tokeni | 330543 |
| Reasoning tokeni | 137053 |
| Kopā tokeni | 726455 |
| Aptuvenās izmaksas (USD) | $0.7601 |

### Terra severity sadalījums

| CRITICAL | 129 |
| HIGH | 1138 |
| MEDIUM | 683 |
| WARNING | 0 |

---

## 5. sectionAccents sinhronizācija (ģenerēšanas posms)

| Metrika | Vērtība |
|---|---:|
| Termini pārbaudīti | 4792 |
| Kartēti | 1346 |
| Izņemti | 127 |
| Kartītes mainītas | 214 |

### Pedagoģiskā piezīme par 127 izņemtajiem terminiem

Izņemtie termini tika noņemti, jo BS tekstā nebija korektas atbilstības. Daļa var būt pedagoģiski apšaubāmi — jāizvērtē manuāli nākamajā fix pass.

---

## 6. LV atlikumi sectionAccents

Automātiskais kolektors atrada **942** LV atlikumus sectionAccents laukos (bosniešu study teksts ir pareizs, bet akcentu termini vēl satur latviešu vārdus).

Piemēri:

- `b1-bau` — `entry[246].study.sectionAccents.tip.leftBlocks[0].text.purple[2]`: "būvlaukumā"
- `b1-bedeutend` — `entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[2]`: "ievērojami"
- `b1-sich-bedienen` — `entry[264].study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: "ņemiet paši"
- `b1-bemerken` — `entry[337].study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: "kļūdu"
- `b1-bemerken` — `entry[337].study.sectionAccents.tip.leftBlocks[0].text.purple[1]`: "izmaiņu"
- `b1-beraten` — `entry[346].study.sectionAccents.tip.leftBlocks[0].text.purple[2]`: "cilvēki"
- `b1-berichten` — `entry[363].study.sectionAccents.tip.leftBlocks[0].text.purple[1]`: "rezultātiem"
- `b1-sich-beruhigen` — `entry[369].study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: "nomierinās"
- `b1-berühmtheit` — `entry[370].study.sectionAccents.tip.leftBlocks[0].text.purple[1]`: "slavenības"
- `b1-beschließen` — `entry[379].study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: "lēmums"

---

## 7. CACHE CONTEXT COLLISIONS

Identificētas **529** potenciālas situācijas, kur identiska LV virkne ar atšķirīgu DE kontekstu saņēmusi identisku BS tulkojumu.

Pirmie piemēri:

- LV: "izlemt..." — 3 gadījumi, 3 DE konteksti, BS: "Odlučiti"
- LV: "viedoklis..." — 3 gadījumi, 3 DE konteksti, BS: "Mišljenje"
- LV: "apkārtne..." — 2 gadījumi, 2 DE konteksti, BS: "Susjedstvo"
- LV: "tomēr..." — 2 gadījumi, 2 DE konteksti, BS: "Međutim"
- LV: "veco ļaužu pansionāts..." — 2 gadījumi, 2 DE konteksti, BS: "Starački dom za stare"
- LV: "stādīt..." — 2 gadījumi, 2 DE konteksti, BS: "Saditi"
- LV: "pieprasījums..." — 3 gadījumi, 2 DE konteksti, BS: "Zahtjev"
- LV: "norādīt..." — 4 gadījumi, 3 DE konteksti, BS: "Ukazuju"

---

## 8. Study kartīšu audits (324)

Terra audits aptvēra visas 324 study kartītes (323 standardStudy, 1 minimalStudy).

| Kategorija | Terra atradumi |
|---|---:|
| study.explanation | 145 |
| study.translation | 110 |
| study.tip | 122 |
| study.important | 124 |
| study.comparison | 283 |
| study.examples | 119 |

Learning First: study kartīšu skaidrojumi un piemēri lielākoties ir pedagoģiski lietderīgi, bet daļai nepieciešami semantiski labojumi (īpaši comparison un explanation lauki).

---

## 9. Terra AI atradumi (izlase)

| Kartīte | Lauks | Severity | Problēma | Ieteicamais labojums |
|---|---|---|---|---|
| `b1-sich erinnern-7` | lv | HIGH | „Zapamtiti“ znači memorisati, a ne prisjetiti se nečega. | Sjetiti se |
| `b1-Aktentasche-8` | lv | HIGH | „Portfolio“ nije aktovka/torba za spise. | Aktovka |
| `b1-Alarm-11` | lv | HIGH | „Anksioznost“ je stanje tjeskobe, a ne alarm ili uzbuna. | Alarm; uzbuna |
| `b1-Amateur-17` | lv | HIGH | „Amaterski“ je pridjev, dok „Amateur“ označava osobu. | Amater |
| `b1-Angabe-21` | lv | HIGH | „Indikacija“ se prvenstveno koristi u medicinskom značenju i ne prevodi opće zna | Podatak; navod |
| `b1-Angehörige-23` | lv | HIGH | „Pripadajući“ je pridjev, a „Angehörige“ označava člana porodice odnosno bliskog | Član porodice; srodnik |
| `b1-allzu-30` | lv | CRITICAL | „Takođe“ znači „also“, što nema značenjsku vezu s „allzu“. | Previše; suviše |
| `b1-anfeuern-33` | lv | HIGH | „Razveseliti se“ znači postati veseo, dok „anfeuern“ znači bodriti ili navijati  | Bodriti; navijati za |
| `b1-abbuchen-41` | lv | HIGH | Konstrukcija nije prirodna: tereti se račun, a novac se skida s računa. | Skinuti novac s računa; teretiti račun |
| `b1-abfragen-46` | lv | HIGH | „Tražiti“ znači zahtijevati ili tražiti nešto, a ne provjeravati/ispitivati poda | Ispitati; provjeriti; upitati |
| `b1-abhängig-54` | lv | HIGH | „Zavisi“ je glagolski oblik, dok „abhängig“ znači „zavisan/ovis(an)“. | Zavisan; ovisan |
| `b1-Abiturient-57` | lv | HIGH | „Srednjoškolac“ je bilo koji učenik srednje škole, a „Abiturient“ je učenik zavr | Maturant |
| `b1-Ablauf-59` | lv | HIGH | „Napredak“ znači progres, a ne tok, odvijanje ili procedura. | Tok; odvijanje |
| `b1-Abrechnung-68` | lv | CRITICAL | „Naselje“ nema značenjsku vezu s obračunom ili računom. | Obračun; račun |
| `b1-abschaffen-71` | lv | HIGH | „Otkaži“ je imperativ i znači otkazati, dok „abschaffen“ znači ukinuti ili stavi | Ukinuti |
| `b1-absolvieren-83` | lv | HIGH | Prevod je imperativ u množini/uljudnom obraćanju, a njemačka natuknica je infini | Završiti studije |
| `b1-absperren-84` | lv | HIGH | „Razgraničenje“ je imenica i ne znači ograđivanje/blokiranje pristupa. | Ograditi; blokirati; zatvoriti pristup |
| `b1-abspielen-85` | lv | HIGH | „Igrati“ se obično odnosi na igru ili sport, a ovdje „abspielen“ znači pustiti s | Pustiti; reproducirati |
| `b1-absprechen-86` | lv | HIGH | Prevod je neprirodna zavisna konstrukcija u prvom licu i nije infinitiv. Također | Dogovoriti se; usaglasiti se |
| `b1-abwechseln-89` | lv | HIGH | „Promijeniti“ znači izvršiti promjenu, dok „abwechseln“ znači smjenjivati se ili | Smjenjivati se; izmjenjivati se |
| `b1-adrett-97` | lv | HIGH | „Očišćeno“ znači „cleaned“ i nije odgovarajući pridjev za „adrett“ u značenju ur | Uredan |
| `b1-alkoholisch-103` | lv | HIGH | „Alkoholičar“ je osoba ovisna o alkoholu, a ne pridjev „alkoholisch“. | Alkoholičan |
| `b1-sich amüsieren-108` | lv | HIGH | Prijevod je zapovjedni oblik u množini, a ne infinitiv povratnog glagola. | Zabavljati se |
| `b1-angrenzen-114` | lv | HIGH | Prijevod je prijedložni izraz, ne glagol, i ne izražava značenje „graničiti s“. | Graničiti (s) |
| `b1-Anklang-115` | lv | HIGH | „Responzivnost“ znači responsivnost/odazivnost, a ne pozitivnu recepciju ili odj | Odjek; prihvaćenost |

---

## 9. GPT-5.6 Terra audit evaluation

| Aspekts | Novērtējums |
|---|---|
| Audita izmaksas | ~$0.76 |
| Requestu skaits | 72 |
| CRITICAL/HIGH/MEDIUM/WARNING | 129/1138/683/0 |
| Piemērots pilnam auditam | Jā — strukturēts batch formāts darbojas |
| Ekonomiski pamatots | Jā B1 apjomam (~$1-2) |

Terra neatkarīgi pārbaudīja visus ierakstus. Daudzi HIGH atradumi saistīti ar sectionAccents LV atlikumiem un galveno tulkojumu precizitāti.

---

## 10. Secinājums

B1 prasa fix pass: novērst identificētos CRITICAL/HIGH atradumus pirms production. Detalizēts saraksts: `reports/temp/bs-b1-terra-findings.json` un `reports/temp/bs-b1-findings-consolidated.json`.

**NEKO CITU NEAIZTIKT. DATU FAILI NAV MAINĪTI.**
