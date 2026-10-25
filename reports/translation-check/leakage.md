# Tulkojumu šūnu klasifikācija bez avota

Skripts: `scripts/audit-translation-leakage.js` no commita `c89235862d50334dc9da3c7297fd3eaa4c0b2945` (PR #861, zars `cursor/leakage-markers-f86b`).

Šūna ir `lv` lauks `data/{valoda}/{līmenis}.js`. Klases var pārklāties. Ekskluzīvā kārta, lai skaits summētos līdz 8618 × 31: EMPTY, SCRIPT_MISMATCH, LV_DIACRITIC_FOREIGN, MARKER_LEAK, SAME_AS_LV, FAMILY_COPY_STRICT, PLAUSIBLE.

SAME_AS_LV ir casefold (NFC, trim, lower). LV_DIACRITIC_FOREIGN ir skripta LV_DIACRITIC. sr SCRIPT_MISMATCH ekskluzīvajā tabulā izmanto kirilicas pieņēmumu. Otra tabula sr lieto latīņu pieņēmumu.

Ieraksti: 267158.

## Ekskluzīvie kopējie skaiti

- EMPTY: 0
- SCRIPT_MISMATCH: 8837
- LV_DIACRITIC_FOREIGN: 23614
- MARKER_LEAK: 9622
- SAME_AS_LV: 11149
- FAMILY_COPY_STRICT: 92202
- PLAUSIBLE: 121734

## Pārklājošie skaiti

- EMPTY: 0
- SAME_AS_LV: 33270
- LV_DIACRITIC_FOREIGN: 23746
- SCRIPT_MISMATCH: 8837
- SCRIPT_MISMATCH_SR_LATIN: 7918
- MARKER_LEAK: 40702
- MARKER_LEAK_SR_LATIN: 7918
- FAMILY_COPY_STRICT: 134739
- PLAUSIBLE_OVERLAP: 121734

## sr, abi raksti

| klase | kirilica | latīņu |
|---|---:|---:|
| EMPTY | 0 | 0 |
| SCRIPT_MISMATCH | 713 | 7918 |
| LV_DIACRITIC_FOREIGN | 0 | 128 |
| MARKER_LEAK | 0 | 0 |
| SAME_AS_LV | 0 | 3 |
| FAMILY_COPY_STRICT | 7870 | 548 |
| PLAUSIBLE | 35 | 21 |

## Ekskluzīvi pa valodām

| valoda | EMPTY | SCRIPT_MISMATCH | LV_DIACRITIC_FOREIGN | MARKER_LEAK | SAME_AS_LV | FAMILY_COPY_STRICT | PLAUSIBLE |
|---|---:|---:|---:|---:|---:|---:|---:|
| bg | 0 | 22 | 0 | 0 | 0 | 7600 | 996 |
| bs | 0 | 1 | 0 | 0 | 87 | 424 | 8106 |
| cs | 0 | 1 | 1 | 0 | 39 | 466 | 8111 |
| da | 0 | 0 | 0 | 0 | 27 | 433 | 8158 |
| en | 0 | 0 | 0 | 0 | 17 | 645 | 7956 |
| es | 0 | 0 | 0 | 0 | 17 | 38 | 8563 |
| et | 0 | 0 | 45 | 2 | 25 | 15 | 8531 |
| fi | 0 | 0 | 51 | 1039 | 26 | 7250 | 252 |
| fr | 0 | 0 | 0 | 0 | 15 | 491 | 8112 |
| gr | 0 | 40 | 0 | 0 | 0 | 0 | 8578 |
| hr | 0 | 7902 | 0 | 0 | 3 | 684 | 29 |
| hu | 0 | 0 | 0 | 1 | 15 | 89 | 8513 |
| is | 0 | 0 | 46 | 899 | 26 | 7369 | 278 |
| it | 0 | 7 | 4684 | 0 | 2020 | 903 | 1004 |
| lb | 0 | 2 | 5014 | 2 | 2042 | 321 | 1237 |
| lt | 0 | 0 | 0 | 0 | 161 | 43 | 8414 |
| mk | 0 | 20 | 0 | 0 | 0 | 8342 | 256 |
| nb | 0 | 0 | 46 | 899 | 26 | 7379 | 268 |
| nl | 0 | 0 | 5577 | 0 | 2557 | 310 | 174 |
| nn | 0 | 0 | 46 | 899 | 26 | 7376 | 271 |
| pl | 0 | 0 | 0 | 0 | 30 | 6397 | 2191 |
| pt | 0 | 5 | 2808 | 0 | 1196 | 719 | 3890 |
| ro | 0 | 0 | 0 | 0 | 15 | 389 | 8214 |
| ru | 0 | 7 | 0 | 0 | 0 | 3435 | 5176 |
| sk | 0 | 0 | 0 | 2538 | 27 | 3798 | 2255 |
| sl | 0 | 0 | 5245 | 0 | 2675 | 163 | 535 |
| sq | 0 | 0 | 0 | 2013 | 25 | 5155 | 1425 |
| sr | 0 | 713 | 0 | 0 | 0 | 7870 | 35 |
| sv | 0 | 0 | 51 | 1038 | 26 | 7241 | 262 |
| tr | 0 | 0 | 0 | 292 | 26 | 6856 | 1444 |
| uk | 0 | 117 | 0 | 0 | 0 | 1 | 8500 |

## Ekskluzīvi pa līmeņiem

| līmenis | EMPTY | SCRIPT_MISMATCH | LV_DIACRITIC_FOREIGN | MARKER_LEAK | SAME_AS_LV | FAMILY_COPY_STRICT | PLAUSIBLE |
|---|---:|---:|---:|---:|---:|---:|---:|
| a1 | 0 | 697 | 505 | 203 | 624 | 6269 | 13464 |
| a2 | 0 | 1705 | 3505 | 1195 | 2441 | 17149 | 24845 |
| b1 | 0 | 3429 | 8940 | 3367 | 5432 | 36256 | 46953 |
| b2 | 0 | 2199 | 7685 | 3609 | 2048 | 23624 | 26493 |
| c1 | 0 | 581 | 2160 | 832 | 435 | 6489 | 7235 |
| c2 | 0 | 226 | 819 | 416 | 169 | 2415 | 2744 |

## 10 piemēri

### EMPTY

Nav šūnu.

### SCRIPT_MISMATCH

- sr a1[0] de=Apfel lv=ābols value=Jabolko.
- sr a1[1] de=Brot lv=maize value=Sveže.
- sr a1[2] de=Wasser lv=ūdens value=Voda
- hr a1[3] de=Haus lv=māja value=Куќа
- sr a1[3] de=Haus lv=māja value=Куќа
- sr a1[4] de=lernen lv=mācīties value=Raziskave
- sr a1[5] de=sprechen lv=runāt value=Govor
- hr a1[6] de=klein lv=mazs value=Мали
- sr a1[6] de=klein lv=mazs value=Мали
- sr a1[7] de=alle lv=visi value=Svi

### LV_DIACRITIC_FOREIGN

- nl a1[2] de=Wasser lv=ūdens value=Ūdens
- nl a1[4] de=lernen lv=mācīties value=Mācīties
- nl a1[5] de=sprechen lv=runāt value=Runāt
- nl a1[13] de=Anfang lv=sākums value=Sākums
- it a1[14] de=anfangen lv=sākt value=Sākt
- nl a1[14] de=anfangen lv=sākt value=Sākt
- pt a1[14] de=anfangen lv=sākt value=Sākt
- nl a1[15] de=anders lv=citādi value=Citādi
- nl a1[16] de=anrufen lv=zvanīt value=Zvanīt
- it a1[19] de=Abendessen lv=vakariņas value=Vakariņas

### MARKER_LEAK

- fi a1[0] de=Apfel lv=ābols value=Õun
- sv a1[0] de=Apfel lv=ābols value=Õun
- fi a1[4] de=lernen lv=mācīties value=Õppima
- is a1[4] de=lernen lv=mācīties value=Õppima
- nb a1[4] de=lernen lv=mācīties value=Õppima
- nn a1[4] de=lernen lv=mācīties value=Õppima
- sv a1[4] de=lernen lv=mācīties value=Õppima
- fi a1[7] de=alle lv=visi value=Kõik
- sv a1[7] de=alle lv=visi value=Kõik
- fi a1[9] de=alles lv=viss value=Kõik

### SAME_AS_LV

- nl a1[6] de=klein lv=mazs value=Mazs
- lt a1[7] de=alle lv=visi value=visi
- nl a1[7] de=alle lv=visi value=Visi
- nl a1[8] de=allein lv=viens pats value=Viens pats
- nl a1[9] de=alles lv=viss value=Viss
- it a1[17] de=ab lv=no value=No
- nl a1[17] de=ab lv=no value=No
- lt a1[21] de=aber lv=bet value=bet
- nl a1[21] de=aber lv=bet value=Bet
- nl a1[23] de=Adresse lv=adrese value=Adrese

### FAMILY_COPY_STRICT

- bs a1[0] de=Apfel lv=ābols value=jabuka
- hr a1[0] de=Apfel lv=ābols value=jabuka
- is a1[0] de=Apfel lv=ābols value=Un
- nb a1[0] de=Apfel lv=ābols value=Un
- nn a1[0] de=Apfel lv=ābols value=Un
- fi a1[1] de=Brot lv=maize value=Leib
- hr a1[1] de=Brot lv=maize value=kruh
- is a1[1] de=Brot lv=maize value=Leib
- nb a1[1] de=Brot lv=maize value=Leib
- nn a1[1] de=Brot lv=maize value=Leib

### PLAUSIBLE

- bg a1[0] de=Apfel lv=ābols value=Ябълка
- cs a1[0] de=Apfel lv=ābols value=Jablko
- da a1[0] de=Apfel lv=ābols value=Et æble
- en a1[0] de=Apfel lv=ābols value=An apple
- es a1[0] de=Apfel lv=ābols value=una manzana
- et a1[0] de=Apfel lv=ābols value=õun
- fr a1[0] de=Apfel lv=ābols value=Une pomme
- gr a1[0] de=Apfel lv=ābols value=Ένα μήλο
- hu a1[0] de=Apfel lv=ābols value=Egy almát
- it a1[0] de=Apfel lv=ābols value=Oh, una mela.

## sr latīņu pieņēmuma piemēri, ja atšķiras

### SCRIPT_MISMATCH

- sr a1[3] value=Куќа
- sr a1[6] value=Мали
- sr a1[9] value=Сите
- sr a1[10] value=Стари
- sr a1[13] value=Започнете
- sr a1[14] value=Започнете
- sr a1[16] value=Јавете ми се
- sr a1[17] value=Од
- sr a1[19] value=Вечера
- sr a1[20] value=Во вечерните часови

### LV_DIACRITIC_FOREIGN

- sr a1[1] value=Sveže.
- sr a1[18] value=Večernje
- sr a1[32] value=Pošten je.
- sr a1[39] value=Narandžasta
- sr a1[45] value=Ručni sat
- sr a1[52] value=Drži se.
- sr a1[54] value=Oči
- sr a1[61] value=Znaš
- sr a1[62] value=Barva oči?
- sr a1[102] value=Svinčnik

### SAME_AS_LV

- sr a1[34] value=Antena
- sr a2[203] value=Baterija
- sr b2[1473] value=Propaganda

### FAMILY_COPY_STRICT

- sr a1[2] value=Voda
- sr a1[5] value=Govor
- sr a1[7] value=Svi
- sr a1[8] value=Jedan
- sr a1[11] value=Godine?
- sr a1[15] value=Sicer ...
- sr a1[21] value=Ampak.
- sr a1[23] value=Naslov
- sr a1[28] value=Dolazak
- sr a1[29] value=Pogledaj

### PLAUSIBLE

- sr a1[0] value=Jabolko.
- sr a1[4] value=Raziskave
- sr a1[12] value=V • Da • Predstavitev
- sr a1[41] value=April
- sr a1[119] value=Autobus
- sr a1[131] value=Datum
- sr a1[246] value=Gram
- sr a1[312] value=Kilogram
- sr a1[477] value=Plan
- sr a1[597] value=Tekst

## Daudzdaļu šūnas

Salīdzināšanā katra daļa tiek ņemta atsevišķi, atdalot ` • `, `/` vai `;`.

| valoda | • | / | ; | jebkurš |
|---|---:|---:|---:|---:|
| bg | 1334 | 3 | 0 | 1337 |
| bs | 1092 | 54 | 15 | 1161 |
| cs | 1343 | 4 | 0 | 1345 |
| da | 1362 | 2 | 0 | 1364 |
| en | 1391 | 101 | 22 | 1514 |
| es | 1191 | 4 | 0 | 1194 |
| et | 183 | 2 | 0 | 185 |
| fi | 1239 | 2 | 0 | 1241 |
| fr | 1365 | 3 | 0 | 1368 |
| gr | 1232 | 2 | 0 | 1234 |
| hr | 1330 | 2 | 0 | 1332 |
| hu | 1360 | 3 | 0 | 1363 |
| is | 1235 | 1 | 0 | 1236 |
| it | 1362 | 2 | 0 | 1364 |
| lb | 1358 | 3 | 0 | 1361 |
| lt | 1372 | 9 | 0 | 1379 |
| mk | 1331 | 2 | 0 | 1333 |
| nb | 1234 | 1 | 0 | 1235 |
| nl | 1364 | 2 | 0 | 1366 |
| nn | 1235 | 1 | 0 | 1236 |
| pl | 1362 | 2 | 0 | 1364 |
| pt | 1360 | 2 | 0 | 1362 |
| ro | 1362 | 2 | 0 | 1364 |
| ru | 1331 | 2 | 0 | 1333 |
| sk | 1365 | 3 | 0 | 1368 |
| sl | 1371 | 2 | 0 | 1373 |
| sq | 1349 | 3 | 0 | 1352 |
| sr | 1330 | 1 | 0 | 1331 |
| sv | 1244 | 2 | 0 | 1246 |
| tr | 1360 | 6 | 0 | 1363 |
| uk | 1362 | 2 | 0 | 1364 |

Kopā: • 39709, / 230, ; 37, jebkurš 39968.

