# DE↔CS / SK / UK — divvalodu avotu pilotpārbaude

Ģenerēts: 2026-09-28 (Playwright + HTTP, šī sesija)

Pilotlemmas: **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier** (DE→TARGET meklē vācu formu; TARGET→DE — kartei saskaņots mērķvalodas lemmas).

Production, MASTER un OWNER nav mainīti.

## Kopsavilkums

| Valoda | DE→TARGET (galvenais, verificēts) | TARGET→DE (galvenais, verificēts) | Piezīmes |
| --- | --- | --- | --- |
| **cs** | [PONS DE→CS](https://de.pons.com/übersetzung/deutsch-tschechisch/); [Langenscheidt DE→CS](https://en.langenscheidt.com/german-czech) | [PONS CS→DE](https://de.pons.com/übersetzung/tschechisch-deutsch/); [Langenscheidt CS→DE](https://en.langenscheidt.com/czech-german) | Machtgier nav tiešā šķirkļa (PONS ieteikumi / tukšs); Grenzkonflikt CS→DE: meklēt `pohraniční spor`. |
| **sk** | [Langenscheidt DE→SK](https://en.langenscheidt.com/german-slovak) | [Langenscheidt SK→DE](https://en.langenscheidt.com/slovak-german) | PONS **nav** DE↔SK (404). dict.cc (MASTER) papildina; SNK — tikai katalogs. |
| **uk** | [dict.cc DE→UK](https://deuk.dict.cc/) (MASTER) | [dict.cc UK→DE](https://ukde.dict.cc/) | Langenscheidt UK lemma URL pāradresē uz sākumlapu; UDEW (Leipzig) — piekļuve bloķēta šajā vidē. |

Pilna mašīnizlasāma tabula: [pdf-bilingual-dictionary-cs-sk-uk-modern-sources.json](./pdf-bilingual-dictionary-cs-sk-uk-modern-sources.json)

---

## Čeština (`cs`)

### PONS Deutsch–Tschechisch (DE→CS) — VERIFIED

| Lauks | Vērtība |
| --- | --- |
| Gads / bāze | PONS digitālais (redaktionell geprüft) |
| Apjoms | ~120k+ (publisks meklētājs) |
| Portāls | https://de.pons.com/übersetzung/deutsch-tschechisch/ |

| Lemma | Mērķvalodas gloss | URL |
| --- | --- | --- |
| Haus | dům (m); sněmovna (Parlament) | https://de.pons.com/übersetzung/deutsch-tschechisch/Haus |
| arbeiten | pracovat | https://de.pons.com/übersetzung/deutsch-tschechisch/arbeiten |
| Kleingeld | drobné | https://de.pons.com/übersetzung/deutsch-tschechisch/Kleingeld |
| bewirten | hostit | https://de.pons.com/übersetzung/deutsch-tschechisch/bewirten |
| Grenzkonflikt | pohraniční spor | https://de.pons.com/übersetzung/deutsch-tschechisch/Grenzkonflikt |
| Machtgier | **nav** (PONS: Machthaber u.c.) | https://de.pons.com/übersetzung/deutsch-tschechisch?q=Machtgier |

### PONS Tschechisch–Deutsch (CS→DE) — VERIFIED

| Lemma | Vaicājums | DE pāris | URL |
| --- | --- | --- | --- |
| Haus | dům | Haus | https://de.pons.com/übersetzung/tschechisch-deutsch/dům |
| arbeiten | pracovat | arbeiten | https://de.pons.com/übersetzung/tschechisch-deutsch/pracovat |
| Kleingeld | drobné | Kleingeld | https://de.pons.com/übersetzung/tschechisch-deutsch/drobné |
| bewirten | pohostit | bewirten | https://de.pons.com/übersetzung/tschechisch-deutsch/pohostit |
| Grenzkonflikt | pohraniční spor | Grenzkonflikt | https://de.pons.com/übersetzung/tschechisch-deutsch/pohraniční+spor |
| Machtgier | touha po moci | **nav** | — |

### Langenscheidt DE→CS / CS→DE — VERIFIED (profesionāls digitālais)

| Virziens | Portāls | Piloti (5/6 DE→CS; 4/6 CS→DE) |
| --- | --- | --- |
| DE→CS | https://en.langenscheidt.com/german-czech | Haus→dům; arbeiten→pracovat; Kleingeld→drobné; bewirten→hostit; Grenzkonflikt→pohraniční spor |
| CS→DE | https://en.langenscheidt.com/czech-german | dům→Haus; pracovat→arbeiten; drobné→Kleingeld; pohostit→bewirten |

Piemēru URL: https://en.langenscheidt.com/german-czech/haus , https://en.langenscheidt.com/czech-german/d%C5%AFm

### Papildinājums / noraidīts

- **Sterzinger, Encyklopedický německo-český slovník** (NKP Kramerius, 1916–1935) — vēsturisks OCR fonds; konkrēts viewer ar 6 pilotiem šajā runā nav atvērts.
- **dict.cc** (MASTER) — darbojas (piem. Haus→dūm); automātiskā ekstrakcija daļēji; lietot kā papildu, ne galveno profesionālo avotu cs.

---

## Slovenčina (`sk`)

### Langenscheidt Deutsch–Slowakisch / Slowakisch–Deutsch — VERIFIED

| Virziens | Portāls | Atrastie piloti |
| --- | --- | --- |
| DE→SK | https://en.langenscheidt.com/german-slovak | Haus→dom; arbeiten→pracovať/robiť; Kleingeld→drobné peniaze; bewirten→hostiť |
| SK→DE | https://en.langenscheidt.com/slovak-german | dom→Haus; pracovať→arbeiten; drobné→Kleingeld |

Piemēri: https://en.langenscheidt.com/german-slovak/haus , https://en.langenscheidt.com/slovak-german/dom

**Nav atrasti šajā avotā:** Grenzkonflikt, Machtgier (DE→SK); Grenzkonflikt, Machtgier, bewirten (SK→DE ar izvēlētajiem reverse lemmas).

### dict.cc (MASTER) — daļēji verificēts digitālais

- DE→SK: https://desk.dict.cc/ — Haus→dom, arbeiten→pracovať
- SK→DE: https://sk-de.dict.cc/ — dom→Haus, pracovať→arbeiten

### Noraidīts

- **PONS DE↔SK** — 404 (nav pāra de.pons.com).
- **SNK** (https://www.snk.sk/) — katalogs bez atvērta pilna teksta viewer URL.

---

## Ukraїnska (`uk`)

### dict.cc Deutsch–Ukrainisch / Ukrainisch–Deutsch — VERIFIED (digitālais, MASTER)

| Virziens | Portāls | Piloti (2/6 automātiskā probe; pārējie salikteņi) |
| --- | --- | --- |
| DE→UK | https://deuk.dict.cc/ | Haus→будинок; arbeiten→працювати |
| UK→DE | https://ukde.dict.cc/ | будинок→Haus (ar Gebäude); працювати→arbeiten |

### Noraidīts / bloķēts šajā runā

- **Langenscheidt DE↔UK** — `…/german-ukrainian/{lemma}` pāradresē uz https://en.langenscheidt.com/ (nav atvērts šķirkļa saturs).
- **UDEW** (Universität Leipzig) — https://udew.uni-leipzig.de/udew/en/ukrainisch_deutsch_online.htm — institucionālais akademiskais leksikons; piekļuve no Cloud Agent vides neizdevās (HTTP/2 / tukša atbilde). **Ieteicams atkārtot verifikāciju lokālā tīklā.**

---

## Ģenerēšana

```bash
node scripts/build-g2-a1-pdf-bilingual-dictionary-cs-sk-uk-pilot.js
node scripts/patch-cs-sk-uk-dictcc-pilot.js   # tikai dict.cc rindas atjaunošanai
```
