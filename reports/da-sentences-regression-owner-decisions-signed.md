# DA–DE Sätze — REGRESSION OWNER decisions

**Avots:** `reports/da-sentences-targeted-regression-audit.md`  
**Auditors:** GPT-5.6 Luna (READ-ONLY targeted regression)  
**OWNER review:** ChatGPT GPT-5.6 Sol  
**DE = STRICT READ-ONLY.**

## OWNER lēmumi

| # | Audit ID | Card ID | CURRENT_DA | OWNER NEW | Statuss |
|---:|---|---|---|---|---|
| 1 | `DA-SENT-REG-0001` | `sentence-576` | `Hvordan har du det?` | `Hvordan har du det?` | **NELABOT** |
| 2 | `DA-SENT-REG-0002` | `sentence-383` | `Være til stede • Være tilgængelig` | `Være til stede` | **LABOT** |
| 3 | `DA-SENT-REG-0003` | `sentence-17` | `Ingen adgang!` | `Ingen gennemgang!` | **LABOT** |
| 4 | `DA-SENT-REG-0004` | `sentence-42` | `Kom nu frem med det!` | `Ud med sproget!` | **LABOT** |
| 5 | `DA-SENT-REG-0005` | `sentence-106` | `Lad nu være!` | `Lad være med at skabe dig!` | **LABOT** |
| 6 | `DA-SENT-REG-0006` | `sentence-129` | `Alene sammen.` | `Under fire øjne.` | **LABOT** |
| 7 | `DA-SENT-REG-0007` | `sentence-152` | `Jeg har fået til opgave.` | `Jeg har fået til opgave at gøre det.` | **LABOT** |
| 8 | `DA-SENT-REG-0008` | `sentence-176` | `Udtrykke medfølelse.` | `Udtrykke sin medfølelse.` | **LABOT** |
| 9 | `DA-SENT-REG-0009` | `sentence-215` | `Værsgo` | `Værsgo` | **NELABOT** |
| 10 | `DA-SENT-REG-0010` | `sentence-230` | `Spil damen` | `Træk med damen.` | **LABOT** |
| 11 | `DA-SENT-REG-0011` | `sentence-231` | `Det er ved at blive mørkt` | `Det dæmrer.` | **LABOT** |
| 12 | `DA-SENT-REG-0012` | `sentence-246` | `Hvad er der galt?` | `Hvad er der galt med dig?` | **LABOT** |
| 13 | `DA-SENT-REG-0013` | `sentence-283` | `Farvel!` | `Lev vel!` | **LABOT** |
| 14 | `DA-SENT-REG-0014` | `sentence-310` | `Seneste nyhed!` | `Sidste nyhed!` | **LABOT** |
| 15 | `DA-SENT-REG-0015` | `sentence-324` | `Det er okay` | `Det er okay` | **NELABOT** |
| 16 | `DA-SENT-REG-0016` | `sentence-335` | `Spøg til side!` | `Spøg til side!` | **NELABOT** |
| 17 | `DA-SENT-REG-0017` | `sentence-336` | `Hvad er klokken?` | `Hvad er klokken?` | **FALSE_POSITIVE** |
| 18 | `DA-SENT-REG-0018` | `sentence-374` | `Han er berliner af fødsel` | `Han er berliner af fødsel` | **FALSE_POSITIVE** |
| 19 | `DA-SENT-REG-0019` | `sentence-383` | `Være til stede • Være tilgængelig` | `Være til stede` | **LABOT** |
| 20 | `DA-SENT-REG-0020` | `sentence-409` | `Af ret.` | `Ifølge loven.` | **LABOT** |
| 21 | `DA-SENT-REG-0021` | `sentence-503` | `Rejs dig, Hanna, det ringer!` | `Rejs dig, Hanna, det ringer på!` | **LABOT** |
| 22 | `DA-SENT-REG-0022` | `sentence-559` | `Uvejret er passeret.` | `Uvejret er ved at gå over.` | **LABOT** |
| 23 | `DA-SENT-REG-0023` | `sentence-748` | `Hvilken slags handsker ønsker De?` | `Hvilke handsker ønsker De?` | **LABOT** |

## OWNER piezīmes

### `sentence-576`
Regresijas finding nav pamatots lingvistiski. `Wie geht es dir?` → `Hvordan har du det?` ir precīzs un dabisks dāņu ekvivalents. Šeit jāatrisina signed OWNER faila statusu konflikts, nevis jāmaina production teksts.

### `sentence-106`
Auditora ieteiktais `Hold op med at stille dig sådan an!` ir pārāk burtisks. Dabiskāks dāņu ekvivalents vācu `Stell dich nicht so an!` ir `Lad være med at skabe dig!`.

### `sentence-152`
Auditora `Jeg er blevet bemyndiget.` sašaurina nozīmi uz pilnvarojumu. `Ich bin beauftragt.` bez plašāka konteksta drošāk atveidot kā uzdevuma saņemšanu: `Jeg har fået til opgave at gøre det.`

### `sentence-176`
`Udtrykke medfølelse` nav nepareizs, bet `Udtrykke sin medfølelse.` ir idiomātiskāks un saglabā `Beileid aussprechen` funkciju bez neveiklā `udtrykke kondolence`.

### `sentence-215`
`Bitte sehr.` ir kontekstatkarīgs. `Værsgo` ir derīgs dāņu ekvivalents, īpaši pasniedzot/dodot kaut ko. Bez konteksta nav pamata obligāti mainīt uz `Selv tak`.

### `sentence-283`
Dāņu fiksētā atvadu formula ir `Lev vel!`, nevis auditora `Leve vel!`.

### `sentence-310`
`Letzte Neuheit!` šādā izolētā frāzē ir semantiski problemātisks arī pašā DE avotā. Tā kā DE ir STRICT READ-ONLY, OWNER saglabā tiešu DA atveidi `Sidste nyhed!`; DE avotu neaiztikt.

### `sentence-324`
`Det er okay` ir derīgs kontekstatkarīgs `Schon gut!` ekvivalents. Auditora finding nav pietiekams obligātam labojumam.

### `sentence-335`
`Spøg til side!` ir saprotama un lietojama dāņu formula; nav pietiekama pamata to klasificēt kā reālu kļūdu.

### `sentence-336`
CURRENT jau satur jautājuma zīmi. Finding ir **FALSE_POSITIVE**.

### `sentence-374`
Dāņu valodā iedzīvotāju apzīmējumus raksta ar mazo sākumburtu. `berliner` ir pareizi. Finding ir **FALSE_POSITIVE**.

## Deduplicēšana

`sentence-383 / lv` parādās divreiz (`REG-0002` un `REG-0019`) ar vienu un to pašu problēmu. Production apply laikā tas ir **viens unikāls `(Card ID, Field)` labojums**:

`Være til stede • Være tilgængelig` → `Være til stede`

## Kopsavilkums

- Regresijas findingi pārskatīti: **23/23**
- LABOT findingi: **17**
- Unikāli LABOT `(Card ID, Field)`: **16**
- NELABOT: **4**
- FALSE_POSITIVE: **2**
- NEEDS_SOURCE_REVIEW: **0**
- DE izmaiņas: **0**
- Production izmaiņas OWNER review laikā: **0**

## Apply noteikums

Composer/Cursor drīkst veikt tikai precīzu **COPY-ONLY** apply šiem **16 unikālajiem LABOT laukiem**.

Pirms katra apply:

`actual current value === CURRENT_DA`

Ja nesakrīt:

`CURRENT_VALUE_MISMATCH → SKIP`

Nekādu tulkošanu, pārfrāzēšanu, cleanup, blakus lauku/kartīšu izmaiņu vai DE izmaiņu.
