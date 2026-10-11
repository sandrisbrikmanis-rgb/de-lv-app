# DE konsekvences analīze 4

Avots ir `kurssPronunciationLesson` un `kurssConsonantsLesson` visās 31 mērķvalodās. www `courseLessons.js` ir SHA-256 identisks ar `data/`, tāpēc skaiti ir vienam kokam. Dati, `www/data`, `languages` un `ui.js` netiek mainīti. Analīze neizvēlas pareizo vācu formu un neizsauc modeli.

Audita bāze: zars `cursor/de-consistency-audit-f86b`, datums `2026-10-03`, origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`.

Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību. Sākotnējā audita verdikts paliek PARTIAL.

LV etalons ir `data/courseLessons.js`: pronunciation 99 piemēri, consonants 45 piemēri. Indeksa pāris ir tas pats piemēra numurs tajā pašā lekcijā. Vienīgā garuma nobīde ir `fr` consonants: 39 pret LV 45. Šī lekcija nav indeksēta pret LV; pārējās 61 lekcijas ir.

## 1. LV atlikumi tulkojuma pusē

Tulkojuma puse ir teksts aiz pirmās svītras. Atdalītājs ir tas pats, ko lieto DE audits: em dash `—`, en dash `–` vai atstarpes ieskauta defise ` - `. Kaila defise, piemēram `Wieder-ATKAL` vai `Zeit (cait) -laiks`, nav atdalītājs. Glosa ir šīs puses `trim`; identitāte ir glosas baitiska vienādība ar tā paša indeksa LV glosas `trim`. Malu atstarpes tiek noņemtas, iekšējās atstarpes paliek.

Latviešu diakritika ir `āčēģīķļņšūž` (arī lielie burti). Negaidīti ir burti, kas nav mērķvalodas ortogrāfijā. Kopīgie burti nav negaidīti: `lt` č š ž ū; `cs`, `sk`, `sl`, `hr`, `bs` č š ž. `sr` šajā salīdzinājumā č š ž neskaita kā savus, jo paredzētais pieraksts ir kirilica. Diakritikas skaitījums ietver arī `fr` consonants glosas, jo tam LV indekss nav vajadzīgs.

Atlikums ir rinda, kuras glosa ir identiska LV glosai vai kurā ir negaidīta LV diakritika. Abas kolonnas pārklājas, ja izpildās abi nosacījumi.

| valoda | piemēri | indeksēti | ar glosu | EM | EN | HY | bez svītras | identiska LV glosa | arī bez trim | negaidīta diakritika | abi | atlikums |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| bg | 144 | 144 | 144 | 35 | 62 | 47 | 0 | 35 | 35 | 0 | 0 | 35 |
| bs | 144 | 144 | 144 | 49 | 0 | 95 | 0 | 5 | 5 | 1 | 1 | 5 |
| cs | 144 | 144 | 144 | 78 | 2 | 64 | 0 | 2 | 1 | 0 | 0 | 2 |
| da | 144 | 144 | 144 | 1 | 0 | 143 | 0 | 2 | 0 | 0 | 0 | 2 |
| en | 144 | 144 | 144 | 7 | 0 | 137 | 0 | 3 | 0 | 0 | 0 | 3 |
| es | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| et | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| fi | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| fr | 138 | 99 | 138 | 1 | 0 | 137 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr | 144 | 144 | 144 | 142 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| hr | 144 | 144 | 143 | 32 | 57 | 54 | 1 | 31 | 31 | 0 | 0 | 31 |
| hu | 144 | 144 | 144 | 8 | 28 | 108 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| it | 144 | 144 | 144 | 140 | 0 | 4 | 0 | 139 | 139 | 69 | 69 | 139 |
| lb | 144 | 144 | 144 | 140 | 0 | 4 | 0 | 139 | 139 | 69 | 69 | 139 |
| lt | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 3 | 3 | 0 | 0 | 3 |
| mk | 144 | 144 | 144 | 33 | 60 | 51 | 0 | 32 | 32 | 0 | 0 | 32 |
| nb | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| nl | 144 | 144 | 144 | 140 | 0 | 4 | 0 | 140 | 140 | 69 | 69 | 140 |
| nn | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| pl | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 73 | 73 | 0 | 0 | 73 |
| pt | 144 | 144 | 144 | 50 | 20 | 74 | 0 | 104 | 44 | 60 | 57 | 107 |
| ro | 144 | 144 | 144 | 48 | 0 | 96 | 0 | 35 | 35 | 3 | 0 | 38 |
| ru | 144 | 144 | 144 | 60 | 68 | 16 | 0 | 35 | 35 | 0 | 0 | 35 |
| sk | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 72 | 72 | 0 | 0 | 72 |
| sl | 144 | 144 | 144 | 137 | 0 | 7 | 0 | 137 | 137 | 64 | 64 | 137 |
| sq | 144 | 144 | 141 | 141 | 0 | 0 | 3 | 69 | 69 | 0 | 0 | 69 |
| sr | 144 | 144 | 143 | 32 | 57 | 54 | 1 | 31 | 31 | 2 | 0 | 33 |
| sv | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| tr | 144 | 144 | 144 | 144 | 0 | 0 | 0 | 73 | 73 | 0 | 0 | 73 |
| uk | 144 | 144 | 144 | 99 | 2 | 43 | 0 | 2 | 2 | 0 | 0 | 2 |
| summa | 4458 | 4419 | 4453 | 2957 | 356 | 1140 | 5 | 1169 | 1103 | 337 | 329 | 1177 |

Identiskās glosas un glosas bez `trim` atšķirības: 66.

### Negaidīta LV diakritika, viens piemērs valodai

- bs `consonants`[1] burti=`"ņ"` glosa=`"riteņi"`
- it `pronunciation`[2] burti=`"ī"` glosa=`"darbs / rīcība"`
- lb `pronunciation`[2] burti=`"ī"` glosa=`"darbs / rīcība"`
- nl `pronunciation`[2] burti=`"ī"` glosa=`"darbs / rīcība"`
- pt `pronunciation`[2] burti=`"ī"` glosa=`"darbs/rīcība"`
- ro `pronunciation`[5] burti=`"ā"` glosa=`"o pālărie"`
- sl `pronunciation`[2] burti=`"ī"` glosa=`"darbs / rīcība"`
- sr `pronunciation`[35] burti=`"šč"` glosa=`"piščanec"`

### Identiska LV glosa bez negaidītas diakritikas, viens piemērs valodai

- bg `pronunciation`[0] glosa=`"silts"`
- bs `pronunciation`[39] glosa=`"lampa"`
- cs `pronunciation`[39] glosa=`"lampa"`
- da `consonants`[35] glosa=`"villa"`
- en `pronunciation`[12] glosa=`"ass"`
- es `consonants`[35] glosa=`"villa"`
- et `consonants`[35] glosa=`"villa"`
- fi `consonants`[35] glosa=`"villa"`
- hr `pronunciation`[0] glosa=`"silts"`
- is `consonants`[35] glosa=`"villa"`
- it `pronunciation`[1] glosa=`"labs"`
- lb `pronunciation`[0] glosa=`"silts"`
- lt `pronunciation`[60] glosa=`"siena"`
- mk `pronunciation`[0] glosa=`"silts"`
- nb `consonants`[35] glosa=`"villa"`
- nl `pronunciation`[0] glosa=`"silts"`
- nn `consonants`[35] glosa=`"villa"`
- pl `pronunciation`[0] glosa=`"silts"`
- pt `pronunciation`[3] glosa=`"gaitenis"`
- ro `pronunciation`[0] glosa=`"silts"`
- ru `pronunciation`[0] glosa=`"silts"`
- sk `pronunciation`[0] glosa=`"silts"`
- sl `pronunciation`[0] glosa=`"silts"`
- sq `pronunciation`[0] glosa=`"silts"`
- sr `pronunciation`[0] glosa=`"silts"`
- sv `consonants`[35] glosa=`"villa"`
- tr `pronunciation`[0] glosa=`"silts"`
- uk `pronunciation`[12] glosa=`"ass"`

### Rindas bez tulkojuma atdalītāja

- hr `consonants`[29] `"Zeit (cait) -laiks"`
- sq `consonants`[17] `"Grać-Grać"`
- sq `pronunciation`[27] `"Wieder-ATKAL"`
- sq `pronunciation`[45] `"Wieder-ATKAL"`
- sr `consonants`[29] `"Zeit (cait) -laiks"`

## 2. tr, sk un sq pret pl

Salīdzinājums ir ar `pl`, ne ar LV. Identiska rinda nozīmē, ka `kurss-example` iekšpuse ir baitiski tā pati tajā pašā lekcijā un tajā pašā indeksā. Visām četrām valodām katrā lekcijā ir 99 un 45 piemēri. Reģistra atšķirība ir atsevišķa: virknes sakrīt pēc `toLowerCase`, bet nav baitiski vienādas.

| valoda | rindas | identiskas ar pl | tikai reģistrs | cits saturs |
|---|---:|---:|---:|---:|
| tr | 144 | 121 | 23 | 0 |
| sk | 144 | 117 | 23 | 4 |
| sq | 144 | 115 | 23 | 6 |

### 20 identiski piemēri

- `consonants`[0] tr=sk=sq=pl `"Das Rad — ritenis"`
- `consonants`[10] tr=sk=sq=pl `"Straucha — Krzak"`
- `consonants`[16] tr=sk=sq=pl `"Schraubego — Śruba"`
- `consonants`[22] tr=sk=sq=pl `"Jakość — mokas"`
- `consonants`[28] tr=sk=sq=pl `"Zahl (kurczak) — skaitlis"`
- `consonants`[36] tr=sk=sq=pl `"Klavier (fortepian) — klavieres"`
- `consonants`[41] tr=sk=sq=pl `"Mit — Mit"`
- `pronunciation`[2] tr=sk=sq=pl `"Tat (tak) — Praca/działanie"`
- `pronunciation`[9] tr=sk=sq=pl `"Wort (vort) — Słowo"`
- `pronunciation`[17] tr=sk=sq=pl `"Garten (garten) — Ogród"`
- `pronunciation`[22] tr=sk=sq=pl `"Spiegla — spogulis"`
- `pronunciation`[29] tr=sk=sq=pl `"Rahmen — Rama"`
- `pronunciation`[34] tr=sk=sq=pl `"Do niego — Do niego"`
- `pronunciation`[39] tr=sk=sq=pl `"Lampe (lampe) — lampa"`
- `pronunciation`[44] tr=sk=sq=pl `"Die — To/te"`
- `pronunciation`[51] tr=sk=sq=pl `"Saal (trawa) — Trawa"`
- `pronunciation`[56] tr=sk=sq=pl `"Buraczany — dobe"`
- `pronunciation`[63] tr=sk=sq=pl `"Väter (filc) — Ojcowie"`
- `pronunciation`[68] tr=sk=sq=pl `"Tal (daleko) — ieleja"`
- `pronunciation`[73] tr=sk=sq=pl `"Öfen (öfen) — Piece"`

### Visas rindas, kas nav identiskas un nav tikai reģistrs

- sk `pronunciation`[7] pl=`"Schlafa — miegs"` sk=`"Schlafa — miegy"`
- sk `pronunciation`[50] pl=`"Tutaj — Tutaj"` sk=`"Tu — Tu"`
- sk `pronunciation`[62] pl=`"Vater — Ojciec"` sk=`"Vater — otec"`
- sk `consonants`[31] pl=`"Vater — Ojciec"` sk=`"Vater — otec"`
- sq `pronunciation`[6] pl=`"Hof (hōf) — pagalms"` sq=`"Hof (hōf) — pagale"`
- sq `pronunciation`[27] pl=`"Wieder — atkal"` sq=`"Wieder-ATKAL"`
- sq `pronunciation`[45] pl=`"Wieder — atkal"` sq=`"Wieder-ATKAL"`
- sq `pronunciation`[60] pl=`"Wand (vant) — siena"` sq=`"Skaner dore (vant) — siena"`
- sq `consonants`[17] pl=`"Grać — Grać"` sq=`"Grać-Grać"`
- sq `consonants`[30] pl=`"Zink (cink) — cinks"` sq=`"Zink (zink) — zink"`

### Reģistra atšķirības

Visi 23 reģistra indeksi ir tie paši tr, sk un sq.

- `pronunciation`[0] pl=`"warm (varm) — silts"` tr=`"Warm (varm) — silts"` sk=`"Warm (varm) — silts"` sq=`"Warm (varm) — silts"`
- `pronunciation`[11] pl=`"bald (balt) — Wkrótce"` tr=`"Bald (balt) — Wkrótce"` sk=`"Bald (balt) — Wkrótce"` sq=`"Bald (balt) — Wkrótce"`
- `pronunciation`[14] pl=`"voll (fol) — pilns"` tr=`"Voll (fol) — pilns"` sk=`"Voll (fol) — pilns"` sq=`"Voll (fol) — pilns"`
- `pronunciation`[15] pl=`"singen (zingen) — Śpiewać"` tr=`"Singen (zingen) — Śpiewać"` sk=`"Singen (zingen) — Śpiewać"` sq=`"Singen (zingen) — Śpiewać"`
- `pronunciation`[28] pl=`"breiter (braiter) — Szerszy"` tr=`"Breiter (braiter) — Szerszy"` sk=`"Breiter (braiter) — Szerszy"` sq=`"Breiter (braiter) — Szerszy"`
- `pronunciation`[76] pl=`"kurz (kurc) — Krótki"` tr=`"Kurz (kurc) — Krótki"` sk=`"Kurz (kurc) — Krótki"` sq=`"Kurz (kurc) — Krótki"`
- `pronunciation`[77] pl=`"kürzer (kurcer) — Krótszy"` tr=`"Kürzer (kurcer) — Krótszy"` sk=`"Kürzer (kurcer) — Krótszy"` sq=`"Kürzer (kurcer) — Krótszy"`
- `pronunciation`[90] pl=`"heute (hoite) — Dzisiaj"` tr=`"Heute (hoite) — Dzisiaj"` sk=`"Heute (hoite) — Dzisiaj"` sq=`"Heute (hoite) — Dzisiaj"`
- `pronunciation`[92] pl=`"neu (noi) — jauns"` tr=`"Neu (noi) — jauns"` sk=`"Neu (noi) — jauns"` sq=`"Neu (noi) — jauns"`
- `pronunciation`[93] pl=`"neun (noin) — Dziewięć"` tr=`"Neun (noin) — Dziewięć"` sk=`"Neun (noin) — Dziewięć"` sq=`"Neun (noin) — Dziewięć"`
- `pronunciation`[94] pl=`"mein (main) — mans"` tr=`"Mein (main) — mans"` sk=`"Mein (main) — mans"` sq=`"Mein (main) — mans"`
- `pronunciation`[95] pl=`"dein (dain) — tavs"` tr=`"Dein (dain) — tavs"` sk=`"Dein (dain) — tavs"` sq=`"Dein (dain) — tavs"`
- `pronunciation`[96] pl=`"sein (zain) — Ona / ona / być"` tr=`"Sein (zain) — Ona / ona / być"` sk=`"Sein (zain) — Ona / ona / być"` sq=`"Sein (zain) — Ona / ona / być"`
- `pronunciation`[97] pl=`"frei (frai) — Bezpłatny"` tr=`"Frei (frai) — Bezpłatny"` sk=`"Frei (frai) — Bezpłatny"` sq=`"Frei (frai) — Bezpłatny"`
- `pronunciation`[98] pl=`"arbeiten (arbaiten) — Pracować"` tr=`"Arbeiten (arbaiten) — Pracować"` sk=`"Arbeiten (arbaiten) — Pracować"` sq=`"Arbeiten (arbaiten) — Pracować"`
- `consonants`[4] pl=`"rechnen (rehnen) — Liczyć"` tr=`"Rechnen (rehnen) — Liczyć"` sk=`"Rechnen (rehnen) — Liczyć"` sq=`"Rechnen (rehnen) — Liczyć"`
- `consonants`[5] pl=`"zeichnen (caihnen) — Rysować"` tr=`"Zeichnen (caihnen) — Rysować"` sk=`"Zeichnen (caihnen) — Rysować"` sq=`"Zeichnen (caihnen) — Rysować"`
- `consonants`[6] pl=`"nicht (niht) — ne"` tr=`"Nicht (niht) — ne"` sk=`"Nicht (niht) — ne"` sq=`"Nicht (niht) — ne"`
- `consonants`[8] pl=`"mich (mih) — mani"` tr=`"Mich (mih) — mani"` sk=`"Mich (mih) — mani"` sq=`"Mich (mih) — mani"`
- `consonants`[9] pl=`"dich (dih) — tevi"` tr=`"Dich (dih) — tevi"` sk=`"Dich (dih) — tevi"` sq=`"Dich (dih) — tevi"`
- `consonants`[11] pl=`"noch (noh) — Już"` tr=`"Noch (noh) — Już"` sk=`"Noch (noh) — Już"` sq=`"Noch (noh) — Już"`
- `consonants`[26] pl=`"singen (zingen) — Śpiewać"` tr=`"Singen (zingen) — Śpiewać"` sk=`"Singen (zingen) — Śpiewać"` sq=`"Singen (zingen) — Śpiewać"`
- `consonants`[32] pl=`"von (fon) — no"` tr=`"Von (fon) — no"` sk=`"Von (fon) — no"` sq=`"Von (fon) — no"`

## 3. Vācu vārds aizstāts ar citas valodas vārdu

DE slots ir teksts pirms svītras. Galva ir slots pirms ` (`. Rinda skaitās, ja slota reģistrs atšķiras no LV un izpildās viens no diviem mehāniskiem nosacījumiem.

ENGLISH_TOKEN: mērķa slotā ir latīņu tokens no slēgtā saraksta, kura nav LV slotā un kurš nav šīs rindas LV galva. Saraksts: gut, hut, bald, scarf, felt, hoof, boot, rock, bad, beet, flu, fuss, see, wort, wand, bank, finger, mutter, moor, qual. Tokens `die` netiek meklēts, jo tas ir parasts vācu artikuls.

HEAD_REPLACED: LV galva ir slēgtajā homogrāfu kartē un mērķa galva nav šīs galvas transliterācija. Karte, vācu atslēga → angļu rakstība: gut, hut, bald, scharf→scarf, feld→felt, hof→hoof, boot, rock, bad, beet, die, qual, flur→flu, fuß→fuss, see, wort, finger, wand, bank, mutter, moor. Vairākvārdu galvai (`die Räder`) tiek ņemts pirmais vārds, ja tas ir kartē.

Transliterācija ir kirilicas, grieķu vai devanāgarī burti, pārvērsti latīņu burtos, plus Levenšteina. Īsām virknēm (līdz 4) pieļaujamais attālums ir 1, garākām `round(garums × 0.34)`. Гут, Бад, Хут, шарф un Χοφ ir transliterācijas un šajā sadaļā netiek skaitītas. Klase nešķiro, vai aizstājējs tulko angļu homogrāfa nozīmi vai vācu nozīmi.

`fr` consonants šajā sadaļā nav, jo 39 piemērus nevar pārot ar LV 45 pēc indeksa. Iekavu aizstājumi, kuros vācu galva paliek (`Feld (feutre)`, `Hof (οπλή)`, `Zahl (kurczak)`, `Weg (νερό)`), ir 4. sadaļā.

| valoda | ENGLISH_TOKEN | HEAD_REPLACED | kopā |
|---|---:|---:|---:|
| bg | 0 | 7 | 7 |
| bs | 0 | 4 | 4 |
| cs | 0 | 3 | 3 |
| da | 0 | 0 | 0 |
| en | 1 | 0 | 1 |
| es | 0 | 0 | 0 |
| et | 1 | 0 | 1 |
| fi | 1 | 0 | 1 |
| fr | 0 | 13 | 13 |
| gr | 0 | 10 | 10 |
| hr | 0 | 8 | 8 |
| hu | 1 | 7 | 8 |
| is | 1 | 0 | 1 |
| it | 1 | 1 | 2 |
| lb | 0 | 0 | 0 |
| lt | 0 | 0 | 0 |
| mk | 0 | 7 | 7 |
| nb | 1 | 0 | 1 |
| nl | 0 | 0 | 0 |
| nn | 1 | 0 | 1 |
| pl | 0 | 10 | 10 |
| pt | 0 | 14 | 14 |
| ro | 0 | 7 | 7 |
| ru | 0 | 3 | 3 |
| sk | 0 | 10 | 10 |
| sl | 0 | 0 | 0 |
| sq | 0 | 11 | 11 |
| sr | 0 | 8 | 8 |
| sv | 1 | 0 | 1 |
| tr | 0 | 10 | 10 |
| uk | 0 | 0 | 0 |
| summa | 9 | 133 | 142 |

### Skaits pēc LV vācu galvas

| LV galva | ENGLISH_TOKEN | HEAD_REPLACED | valodas |
|---|---:|---:|---:|
| `"Bad (bāt)"` | 0 | 8 | 8 |
| `"Bank (bank)"` | 0 | 2 | 2 |
| `"Beet (bēt)"` | 0 | 16 | 16 |
| `"Boot (bōt)"` | 0 | 2 | 2 |
| `"Finger (finger)"` | 0 | 4 | 4 |
| `"Flur (flūr)"` | 0 | 6 | 6 |
| `"Fuß (fūs)"` | 0 | 8 | 8 |
| `"Hof (hōf)"` | 6 | 0 | 6 |
| `"Hut (hūt)"` | 0 | 13 | 13 |
| `"Moor (mōr)"` | 0 | 4 | 4 |
| `"Mutter (muter)"` | 0 | 3 | 3 |
| `"Qual (kvāl)"` | 0 | 5 | 5 |
| `"See (zē)"` | 0 | 10 | 10 |
| `"Wand (vant)"` | 0 | 6 | 6 |
| `"Wort (vort)"` | 0 | 7 | 7 |
| `"bald (balt)"` | 0 | 11 | 11 |
| `"die (dī)"` | 0 | 6 | 6 |
| `"die Räder (rēder)"` | 0 | 4 | 4 |
| `"gut (gūt)"` | 0 | 12 | 12 |
| `"scharf (šarf)"` | 2 | 6 | 8 |
| `"schlecht (šleht)"` | 1 | 0 | 1 |

### 20 piemēri

- bs `consonants`[2] HEAD_REPLACED LV=`"Bad (bāt)"` DE=`"Loše (बाट)"`
- fr `pronunciation`[66] HEAD_REPLACED LV=`"Bank (bank)"` DE=`"Banque (banque)"`
- bg `pronunciation`[56] HEAD_REPLACED LV=`"Beet (bēt)"` DE=`"Цвекло (залог)"`
- gr `pronunciation`[57] HEAD_REPLACED LV=`"Boot (bōt)"` DE=`"Μπότα (μπότα)"`
- fr `pronunciation`[23] HEAD_REPLACED LV=`"Finger (finger)"` DE=`"Doigt (doigt)"`
- it `pronunciation`[3] HEAD_REPLACED LV=`"Flur (flūr)"` DE=`"Couloir (flūr)"`
- bg `consonants`[42] HEAD_REPLACED LV=`"Fuß (fūs)"` DE=`"Суетене"`
- et `pronunciation`[6] ENGLISH_TOKEN tokens=`"hoof"` LV=`"Hof (hōf)"` DE=`"Hof (hoof)"`
- bg `pronunciation`[5] HEAD_REPLACED LV=`"Hut (hūt)"` DE=`"Khata (hūt)"`
- fr `pronunciation`[58] HEAD_REPLACED LV=`"Moor (mōr)"` DE=`"Lande (mōr)"`
- fr `pronunciation`[80] HEAD_REPLACED LV=`"Mutter (muter)"` DE=`"Marmonner (muter)"`
- pl `consonants`[22] HEAD_REPLACED LV=`"Qual (kvāl)"` DE=`"Jakość"`
- bs `pronunciation`[55] HEAD_REPLACED LV=`"See (zē)"` DE=`"Vidi (zee)"`
- cs `pronunciation`[60] HEAD_REPLACED LV=`"Wand (vant)"` DE=`"Hůlka (vant)"`
- bg `pronunciation`[9] HEAD_REPLACED LV=`"Wort (vort)"` DE=`"Мъст"`
- bg `pronunciation`[11] HEAD_REPLACED LV=`"bald (balt)"` DE=`"Плешив (бял)"`
- fr `pronunciation`[43] HEAD_REPLACED LV=`"die (dī)"` DE=`"Mourir (dī)"`
- pl `consonants`[1] HEAD_REPLACED LV=`"die Räder (rēder)"` DE=`"Umrzyj Räder"`
- bg `pronunciation`[1] HEAD_REPLACED LV=`"gut (gūt)"` DE=`"Черво (да получи)"`
- bg `pronunciation`[12] HEAD_REPLACED LV=`"scharf (šarf)"` DE=`"Шал (шал)"`

## 4. Iekavās parasts vārds, ne izruna

Iekava ir DE slotā. Tā ir parasts vārds, ja tajā ir burts un (a) tajā ir atstarpe vai (b) tā nav LV iekavas un nav LV vācu galvas transliterācija. Izrunas locījums pirms otrās Levenšteinas pārbaudes sakrīt garos patskaņus, `ts` ar `c` un `w` ar `v`, tāpēc `tsaal`, `guut`, `veek`, `fluur`, `hoof`, `felt` un `varm` paliek izrunas. `Weg (νερό)`, `Zahl (kurczak)`, `Garten (градина)`, `Hof (οπλή)` un `Feld (τσόχα)` paliek parasti vārdi.

Viena rinda var būt gan 3., gan 4. sadaļā. Pārklājums ir parastā vārda iekavas, kuru rinda ir arī 3. sadaļas trāpījums. `fr` consonants atkal nav indeksēts.

| valoda | iekavas | parasts vārds | rindas | no tām 3. sadaļā |
|---|---:|---:|---:|---:|
| bg | 124 | 28 | 28 | 4 |
| bs | 132 | 13 | 13 | 1 |
| cs | 139 | 3 | 3 | 0 |
| da | 138 | 10 | 10 | 0 |
| en | 138 | 2 | 2 | 0 |
| es | 144 | 0 | 0 | 0 |
| et | 144 | 0 | 0 | 0 |
| fi | 144 | 0 | 0 | 0 |
| fr | 97 | 16 | 16 | 5 |
| gr | 138 | 37 | 37 | 8 |
| hr | 121 | 27 | 27 | 4 |
| hu | 132 | 21 | 21 | 2 |
| is | 144 | 0 | 0 | 0 |
| it | 144 | 2 | 2 | 0 |
| lb | 144 | 3 | 3 | 0 |
| lt | 144 | 0 | 0 | 0 |
| mk | 124 | 28 | 28 | 4 |
| nb | 144 | 0 | 0 | 0 |
| nl | 144 | 1 | 1 | 0 |
| nn | 144 | 0 | 0 | 0 |
| pl | 83 | 11 | 11 | 0 |
| pt | 144 | 14 | 14 | 3 |
| ro | 129 | 17 | 17 | 2 |
| ru | 132 | 17 | 17 | 1 |
| sk | 83 | 11 | 11 | 0 |
| sl | 144 | 0 | 0 | 0 |
| sq | 83 | 11 | 11 | 0 |
| sr | 121 | 27 | 27 | 4 |
| sv | 144 | 0 | 0 | 0 |
| tr | 83 | 11 | 11 | 0 |
| uk | 144 | 0 | 0 | 0 |
| summa | 4013 | 310 | 310 | 38 |

### Nosauktie paraugi

- gr `pronunciation`[4] LV=`"Weg (vēk)"` DE=`"Weg (νερό)"` iekava=`"νερό"`
- pl `pronunciation`[32] LV=`"Zahl (cāl)"` DE=`"Zahl (kurczak)"` iekava=`"kurczak"`
- gr `pronunciation`[6] LV=`"Hof (hōf)"` DE=`"Χοφ (οπλή)"` iekava=`"οπλή"`
- gr `pronunciation`[13] LV=`"Feld (felt)"` DE=`"Feld (τσόχα)"` iekava=`"τσόχα"`
- bg `pronunciation`[17] LV=`"Garten (garten)"` DE=`"Garten (градина)"` iekava=`"градина"`

### 20 piemēri

- bg `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Черво (да получи)"` iekava=`"да получи"` homogrāfa rinda arī 3. sadaļa
- bs `pronunciation`[11] LV=`"bald (balt)"` DE=`"ćelav (bijel)"` iekava=`"bijel"` homogrāfa rinda arī 3. sadaļa
- cs `pronunciation`[54] LV=`"Beere (bēre)"` DE=`"Pivo (pohřební)"` iekava=`"pohřební"`
- da `pronunciation`[17] LV=`"Garten (garten)"` DE=`"Have (have)"` iekava=`"have"`
- en `pronunciation`[68] LV=`"Tal (tāl)"` DE=`"Tal (far)"` iekava=`"far"`
- fr `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Intestin (obtenir)"` iekava=`"obtenir"` homogrāfa rinda arī 3. sadaļa
- gr `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Έντερο (έντερο)"` iekava=`"έντερο"` homogrāfa rinda arī 3. sadaļa
- hr `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Черво (да получи)"` iekava=`"да получи"` homogrāfa rinda arī 3. sadaļa
- hu `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Gut (kap)"` iekava=`"kap"` homogrāfa rinda
- it `pronunciation`[51] LV=`"Saal (zāl)"` DE=`"Saal (gras)"` iekava=`"gras"`
- lb `pronunciation`[6] LV=`"Hof (hōf)"` DE=`"Hof (Bauernhof)"` iekava=`"Bauernhof"` homogrāfa rinda
- mk `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Черво (да получи)"` iekava=`"да получи"` homogrāfa rinda arī 3. sadaļa
- nl `pronunciation`[51] LV=`"Saal (zāl)"` DE=`"Saal (gras)"` iekava=`"gras"`
- pl `pronunciation`[32] LV=`"Zahl (cāl)"` DE=`"Zahl (kurczak)"` iekava=`"kurczak"`
- pt `pronunciation`[17] LV=`"Garten (garten)"` DE=`"Garten (jardim)"` iekava=`"jardim"`
- ro `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Intestin (obține)"` iekava=`"obține"` homogrāfa rinda arī 3. sadaļa
- ru `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Гут (получить)"` iekava=`"получить"` homogrāfa rinda
- sk `pronunciation`[32] LV=`"Zahl (cāl)"` DE=`"Zahl (kurczak)"` iekava=`"kurczak"`
- sq `pronunciation`[32] LV=`"Zahl (cāl)"` DE=`"Zahl (kurczak)"` iekava=`"kurczak"`
- sr `pronunciation`[1] LV=`"gut (gūt)"` DE=`"Черво (да получи)"` iekava=`"да получи"` homogrāfa rinda arī 3. sadaļa

## 5. Verifikācija

`git diff -- data www/data languages ui.js` pirms ģenerēšanas ir tukšs. www `courseLessons.js` SHA-256 sakrīt ar data visām 31 valodām. Failā nav ģenerēšanas laika. Divas palaišanas dod vienādu SHA-256; kontrolsumma tiek salīdzināta ārpus faila.

## STAGE RESULT

STAGE RESULT: PASS

Šis PASS attiecas uz analīzes 1.–5. punktu. Sākotnējais DE konsekvences audits paliek PARTIAL.
