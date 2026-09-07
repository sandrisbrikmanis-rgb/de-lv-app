# G2/A1 Crowdin AI — HTML OWNER view

**Datums:** 2026-09-07  
**Klasifikācija:** `G2_A1_CROWDIN_AI_RECONCILIATION_PASS_OWNER_MAPPING_READY`  
**Avots:** Crowdin AI pre-translation job `9147332b-a97d-46c1-b5c7-c0033ee07b1a`  
**Crowdin file:** `16` — `/main/crowdin/content/g2/lv-a1.json`  
**Prompt:** `DE-LV App G2-A1 Translation` (ID `671153`)  
**Statuss:** READ-ONLY mapping — **nav apply**

## Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| Skartas tulkojumu vērtības | **5** |
| Lieki HTML tagu tokeni | **10** (`<b>`, `</b>`) |
| `fi` | 1 vērtība / 2 tokeni |
| `sl` | 4 vērtības / 8 tokeni |
| OWNER_DECISION (visas rindas) | **LABOT** (5/5) |
| Crowdin apply | **Nav veikts** |

**Problēma:** AI pievienoja `<b>`/`</b>` tagus ap iekavām, kaut gan LV avotā HTML nav.

| # | Valoda | Key | String ID | Extra tokeni |
|---:|---|---|---|---:|
| 1 | fi | `a1.card.a1-mann.study.tip[0]` | 9366 | 2 |
| 2 | sl | `a1.card.a1-appetit.study.explanation[2]` | 6672 | 2 |
| 3 | sl | `a1.card.a1-aufs.study.important[0]` | 6794 | 2 |
| 4 | sl | `a1.card.a1-lang.study.examples[5].native` | 8980 | 2 |
| 5 | sl | `a1.card.a1-lang.study.explanation[3]` | 8988 | 2 |

---

## Rinda 1: fi — `a1.card.a1-mann.study.tip[0]`

- **Crowdin string ID:** 9366
- **LV avots:** Ar piederības vārdu (mein/dein/ihr Mann) gandrīz vienmēr domāts vīrs (laulātais).
- **OWNER_DECISION:** LABOT

**CURRENT:**
```
Omistusavulla <b>(mein/dein/ihr Mann)</b> lähes aina tarkoitetaan aviomiestä.
```

**PROPOSED_NEW:**
```
Omistusavulla (mein/dein/ihr Mann) lähes aina tarkoitetaan aviomiestä.
```

- Liekie tokeni: `<b>`, `</b>`
- Tikai `<b>`/`</b>` noņemšana: ✓
- Pārējais teksts identisks: ✓

---

## Rinda 2: sl — `a1.card.a1-appetit.study.explanation[2]`

- **Crowdin string ID:** 6672
- **LV avots:** Bieži raksturo: sajūtu (tikai vienskaitlī).
- **OWNER_DECISION:** LABOT

**CURRENT:**
```
Pogosto značilno: <b>(</b>samo ednina<b>)</b>.
```

**PROPOSED_NEW:**
```
Pogosto značilno: (samo ednina).
```

- Liekie tokeni: `<b>`, `</b>`
- Tikai `<b>`/`</b>` noņemšana: ✓
- Pārējais teksts identisks: ✓

---

## Rinda 3: sl — `a1.card.a1-aufs.study.important[0]`

- **Crowdin string ID:** 6794
- **LV avots:** aufs = auf das, tikai ar nekatras dzimtes lietvārdu kurp? locījumā.
- **OWNER_DECISION:** LABOT

**CURRENT:**
```
aufs = auf das, samo pri srednjem spolu <b>(</b>das<b>)</b> kam? sklonu.
```

**PROPOSED_NEW:**
```
aufs = auf das, samo pri srednjem spolu (das) kam? sklonu.
```

- Liekie tokeni: `<b>`, `</b>`
- Tikai `<b>`/`</b>` noņemšana: ✓
- Pārējais teksts identisks: ✓

---

## Rinda 4: sl — `a1.card.a1-lang.study.examples[5].native`

- **Crowdin string ID:** 8980
- **LV avots:** visu dienu (garumā).
- **OWNER_DECISION:** LABOT

**CURRENT:**
```
ves dan <b>(</b>po dolžini<b>)</b>.
```

**PROPOSED_NEW:**
```
ves dan (po dolžini).
```

- Liekie tokeni: `<b>`, `</b>`
- Tikai `<b>`/`</b>` noņemšana: ✓
- Pārējais teksts identisks: ✓

---

## Rinda 5: sl — `a1.card.a1-lang.study.explanation[3]`

- **Crowdin string ID:** 8988
- **LV avots:** Frāzē den ganzen Tag lang tas nozīmē visu dienu (garumā).
- **OWNER_DECISION:** LABOT

**CURRENT:**
```
V stavku den ganzen Tag lang to pomeni ves dan <b>(</b>po dolžini<b>)</b>.
```

**PROPOSED_NEW:**
```
V stavku den ganzen Tag lang to pomeni ves dan (po dolžini).
```

- Liekie tokeni: `<b>`, `</b>`
- Tikai `<b>`/`</b>` noņemšana: ✓
- Pārējais teksts identisks: ✓

---

## Saistītie faili

- [OWNER decisions](g2-a1-crowdin-ai-html-owner-decisions.md)
- [Proof JSON](g2-a1-crowdin-ai-html-owner-proof.json)
- [OWNER accepted (LABOT)](g2-a1-crowdin-ai-html-owner-accepted.md)

**Piezīme:** OWNER apstiprinājis LABOT (5/5). Crowdin apply **vēl nav veikts** — nepieciešams kontrolēts 5 rindu apply un fi/sl re-validācija.
