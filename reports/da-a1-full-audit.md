# DA–DE A1 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-16
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Production fails:** `data/da/a1.js` (primārais) + `www/data/da/a1.js` (mirror)
**Piezīme:** Lietotāja norādītais ceļš `languages/da/data/a1.js` nav; production DA A1 ir `data/da/a1.js`. Dāņu tulkojumi glabājas laukā `lv` (projekta konvencija).
**DE etalons (tikai lasīšana):** `data/a1.js`

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Production kartītes | **702** |
| Auditētas kartītes | **702/702 (100%)** |
| Parastās kartītes | **578** |
| Study objekti | **124** (etalons: **134**) |
| Coverage | **100%** |
| Kopējie validētie atradumi | **143** |
| CRITICAL | **1** |
| HIGH | **85** |
| MEDIUM | **57** |
| LOW | **0** |
| DE_SOURCE_ISSUE | **0** |
| FALSE_POSITIVE | **0** |
| Foreign-language remnants | **56** (Study laukos) |
| Zero-width artefakti | **30** kartītes |
| sectionAccents problēmas | **14** |
| Syntax | **PASS** |
| ID uniqueness/order | **PASS** (702/702, secība = LV) |
| Mirror/parity | **PASS** (data ↔ www identiski) |
| DE changes | **0** |
| Production changes | **0** |

### Gala rezultāts

## **DA–DE A1: NEEDS REPAIR**

Galvenās kartītes (`lv`) lielākoties ir aizpildītas dāņu valodā, bet **10 Study objekti trūkst**, **56+ Study laukos ir LV atlikumi**, un ir **zero-width** un **sectionAccents** defekti. Daļa Study kartīšu (piem. `bitte`) satur **semantiski nepareizus** piemērus.

---

## 2. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Kartīšu skaits | 702/702 PASS |
| DE lauku secība/identitāte | PASS |
| Study skaits | **124/134 FAIL** |
| JS syntax (`node --check`) | PASS |
| Mojibake | PASS (0) |
| Mirror data ↔ www | PASS |
| Study ID unikalitāte | PASS |

---

## 3. Pilns atradumu saraksts

### 3.1 CRITICAL — struktūra

#### DA-A1-0001

**Card ID:** STRUCT
**Field:** study.count
**CURRENT:** 124 (LV etalons: 134)
**NEW:** 134
**Problēma:** Trūkst 10 Study objektu salīdzinājumā ar DE/LV etalonu
**Pamatojums:** Study kartīšu skaitam jāatbilst etalonam (702 kartītes, 134 Study)
**Smagums:** CRITICAL
**Statuss:** LABOT

### 3.2 HIGH — LV atlikumi un semantika

#### DA-A1-0002

**Card ID:** a1-besuch-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-besuch) — skat. §5.1
**Problēma:** Trūkst Study objekta vārdam Besuch
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0003

**Card ID:** a1-besuchen-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-besuchen) — skat. §5.2
**Problēma:** Trūkst Study objekta vārdam besuchen
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0004

**Card ID:** a1-fußball-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-fußball) — skat. §5.3
**Problēma:** Trūkst Study objekta vārdam Fußball
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0005

**Card ID:** a1-ganz-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-ganz) — skat. §5.4
**Problēma:** Trūkst Study objekta vārdam ganz
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0006

**Card ID:** a1-gefallen-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-gefallen) — skat. §5.5
**Problēma:** Trūkst Study objekta vārdam gefallen
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0007

**Card ID:** a1-geschichte-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-geschichte) — skat. §5.6
**Problēma:** Trūkst Study objekta vārdam Geschichte
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0008

**Card ID:** a1-geschwister-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-geschwister) — skat. §5.7
**Problēma:** Trūkst Study objekta vārdam Geschwister
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0009

**Card ID:** a1-großeltern-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-großeltern) — skat. §5.8
**Problēma:** Trūkst Study objekta vārdam Großeltern
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0010

**Card ID:** a1-hand-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-hand) — skat. §5.9
**Problēma:** Trūkst Study objekta vārdam Hand
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0011

**Card ID:** a1-hübsch-study
**Field:** study
**CURRENT:** (nav Study objekta)
**NEW:** Pievienot pilnu standardStudy (id: a1-hübsch) — skat. §5.10
**Problēma:** Trūkst Study objekta vārdam hübsch
**Pamatojums:** LV etalonā ir standardStudy; DA režīmā lietotājs neredz Study saturu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0015

**Card ID:** a1-bitte
**Field:** study.explanation[4]
**CURRENT:** Ofte karakteriseret ved: navneord (dø).
**NEW:** Ofte karakteriseret ved: navneord (die).
**Problēma:** Artikula drukas kļūda dø → die
**Pamatojums:** die Bitte — pareizais vācu artikuls
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0017

**Card ID:** a1-bitte-study
**Field:** study.explanation[0]
**CURRENT:** Hovedidé: Navneord med artiklen dør og stort bogstav. En specifik anmodning eller anmodning.
**NEW:** Hovedidé: Navneord med artiklen die og stort B. En specifik anmodning.
**Problēma:** Artikula kļūda dør + dublēts anmodning
**Pamatojums:** die Bitte — pareizs artikuls un skaidra nozīme
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0019

**Card ID:** a1-bitte-study
**Field:** study.explanation[1]
**CURRENT:** Die Bitte betyder hovedsageligt: ​​høflighed.
**NEW:** Die Bitte betyder hovedsageligt: en anmodning.
**Problēma:** Nepareiza nozīme die Bitte ≠ høflighed
**Pamatojums:** die Bitte ir lietvārds «anmodning», nevis pieklājības vārds
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0020

**Card ID:** a1-bringen
**Field:** lv
**CURRENT:** Medbring • Take away
**NEW:** Medbringe
**Problēma:** Angļu atlikums Take away galvenajā laukā
**Pamatojums:** A1 kartītes priekšpusē jābūt tikai dāņu
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0021

**Card ID:** a1-bringen
**Field:** study.translation
**CURRENT:** Medbring • Take away
**NEW:** Medbringe
**Problēma:** Angļu atlikums Study translation
**Pamatojums:** Konsekvence ar galveno kartīti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0022

**Card ID:** a1-bringen
**Field:** study.examples[0].lv
**CURRENT:** Bring mig venligst vand
**NEW:** Jeg bringer dig en bog.
**Problēma:** DA piemērs nesakrīt ar DE (Ich bringe dir ein Buch.)
**Pamatojums:** Semantiska atbilstība obligāta
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0023

**Card ID:** a1-bringen
**Field:** study.examples[1].lv
**CURRENT:** Jeg tager dig hjem
**NEW:** Jeg bringer pakken til posthuset.
**Problēma:** DA piemērs nesakrīt ar DE (Ich bringe das Paket zur Post.)
**Pamatojums:** Semantiska atbilstība obligāta
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0024

**Card ID:** a1-bringen
**Field:** study.examples[2].lv
**CURRENT:** Han tager bogen med i skole.
**NEW:** Jeg kører børnene i skole.
**Problēma:** DA piemērs nesakrīt ar DE (Ich bringe die Kinder zur Schule.)
**Pamatojums:** Semantiska atbilstība obligāta
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0025

**Card ID:** a1-bringen
**Field:** study.comparison[0].example
**CURRENT:** Ich bringe dir ein Buch. – Bring mir Wasser.
**NEW:** Ich bringe dir ein Buch. – Jeg bringer dig en bog.
**Problēma:** Vācu teksts DA comparison piemērā
**Pamatojums:** Comparison example jābūt DE = DA formātā dāņu pusē
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0026

**Card ID:** a1-bringen
**Field:** study.comparison[1].example
**CURRENT:** Ich bringe das Paket zur Post. – Ich nehme das Buch.
**NEW:** Ich bringe das Paket zur Post. – Jeg bringer pakken til posthuset.
**Problēma:** Vācu teksts DA comparison piemērā
**Pamatojums:** Comparison example jābūt DE = DA formātā dāņu pusē
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0027

**Card ID:** a1-bringen
**Field:** study.comparison[2].example
**CURRENT:** Ich bringe die Kinder zur Schule. – Ich hole Wasser.
**NEW:** Ich bringe die Kinder zur Schule. – Jeg kører børnene i skole.
**Problēma:** Vācu teksts DA comparison piemērā
**Pamatojums:** Comparison example jābūt DE = DA formātā dāņu pusē
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0028

**Card ID:** a1-bringen
**Field:** study.comparison[3].example
**CURRENT:** Ich bringe dir ein Buch. – Bringst du Brot mit?
**NEW:** Ich bringe dir ein Buch. – Tager du brød med?
**Problēma:** Vācu teksts DA comparison piemērā
**Pamatojums:** mitbringen salīdzinājums jādod dāņu pusē
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0029

**Card ID:** a1-fahren
**Field:** lv
**CURRENT:** Kør • Bly • Take away
**NEW:** Køre
**Problēma:** Angļu/atlikuši fragmenti (Bly, Take away)
**Pamatojums:** A1 galvenajā laukā viena dabiska dāņu nozīme
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0033

**Card ID:** a1-sprechen-study
**Field:** study.examples[2].lv
**CURRENT:** Viņa runā ar savu skolotāju.
**NEW:** Hun taler med sin lærerinde.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0034

**Card ID:** a1-bitte
**Field:** study.comparison[0].meaning
**CURRENT:** lūdzu
**NEW:** venligst
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0035

**Card ID:** a1-bitte
**Field:** study.comparison[0].example
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**NEW:** Komm bitte herein. – Vær så venlig at komme ind.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0036

**Card ID:** a1-bitte
**Field:** study.comparison[1].meaning
**CURRENT:** lūgums
**NEW:** anmodning
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0037

**Card ID:** a1-bitte
**Field:** study.comparison[1].example
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**NEW:** Ich habe eine Bitte. – Jeg har en anmodning.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0038

**Card ID:** a1-bitte-study
**Field:** study.comparison[0].meaning
**CURRENT:** lūgums
**NEW:** anmodning
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0039

**Card ID:** a1-bitte-study
**Field:** study.comparison[0].example
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**NEW:** Ich habe eine Bitte. – Jeg har en anmodning.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0040

**Card ID:** a1-bitte-study
**Field:** study.comparison[1].meaning
**CURRENT:** lūdzu
**NEW:** venligst
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0041

**Card ID:** a1-bitte-study
**Field:** study.comparison[1].example
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**NEW:** Komm bitte herein. – Vær så venlig at komme ind.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0042

**Card ID:** a1-bringen
**Field:** study.comparison[4].meaning
**CURRENT:** paņemt
**NEW:** at tage
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0043

**Card ID:** a1-bringen
**Field:** study.comparison[4].example
**CURRENT:** Ich nehme das Buch. – Es paņemu grāmatu.
**NEW:** Ich nehme das Buch. – Jeg tager bogen.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0044

**Card ID:** a1-ein
**Field:** study.examples[3].lv
**CURRENT:** Bērns spēlējas.
**NEW:** Barnet leger.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0045

**Card ID:** a1-ein
**Field:** study.comparison[0].meaning
**CURRENT:** vīriešu dzimte
**NEW:** hankøn
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0046

**Card ID:** a1-ein
**Field:** study.comparison[1].meaning
**CURRENT:** sieviešu dzimte
**NEW:** hunkøn
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0047

**Card ID:** a1-ein
**Field:** study.comparison[3].meaning
**CURRENT:** akuzatīvs
**NEW:** akkusativ
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0048

**Card ID:** a1-eis
**Field:** study.comparison[0].example
**CURRENT:** Ich esse ein Eis. = Es ēdu saldējumu.
**NEW:** Ich esse ein Eis. = Jeg spiser en is.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0049

**Card ID:** a1-eis
**Field:** study.comparison[2].example
**CURRENT:** Das Wasser ist kalt. = Ūdens ir auksts.
**NEW:** Das Wasser ist kalt. = Vandet er koldt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0050

**Card ID:** a1-eis
**Field:** study.comparison[3].example
**CURRENT:** Eis ist ein Dessert. = Saldējums ir deserts.
**NEW:** Eis ist ein Dessert. = Is er en dessert.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0051

**Card ID:** a1-erst
**Field:** study.comparison[1].example
**CURRENT:** Zuerst frühstücken wir. = Vispirms mēs brokastojam.
**NEW:** Zuerst frühstücken wir. = Først spiser vi morgenmad.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0052

**Card ID:** a1-erst
**Field:** study.comparison[2].example
**CURRENT:** Ich habe nur 5 Euro. = Man ir tikai 5 eiro.
**NEW:** Ich habe nur 5 Euro. = Jeg har kun 5 euro.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0053

**Card ID:** a1-erst
**Field:** study.comparison[3].example
**CURRENT:** Dann gehen wir nach Hause. = Tad mēs ejam mājās.
**NEW:** Dann gehen wir nach Hause. = Så går vi hjem.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0054

**Card ID:** a1-es
**Field:** study.comparison[0].example
**CURRENT:** Es regnet. – Līst.
**NEW:** Es regnet. – Det regner.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0055

**Card ID:** a1-es
**Field:** study.comparison[1].example
**CURRENT:** Ich lerne Deutsch. – Es mācos vācu valodu.
**NEW:** Ich lerne Deutsch. – Jeg lærer tysk.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0056

**Card ID:** a1-etwas
**Field:** study.comparison[0].example
**CURRENT:** Ich brauche etwas. = Man kaut kas vajadzīgs.
**NEW:** Ich brauche etwas. = Jeg har brug for noget.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0057

**Card ID:** a1-etwas
**Field:** study.comparison[2].example
**CURRENT:** Ich bin ein bisschen müde. = Es esmu mazliet noguris.
**NEW:** Ich bin ein bisschen müde. = Jeg er lidt træt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0058

**Card ID:** a1-euch
**Field:** study.comparison[0].example
**CURRENT:** Ihr seid freundlich. = Jūs esat draudzīgi.
**NEW:** Ihr seid freundlich. = I er venlige.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0059

**Card ID:** a1-euch
**Field:** study.comparison[1].example
**CURRENT:** Ich helfe euch. = Es jums palīdzu.
**NEW:** Ich helfe euch. = Jeg hjælper jer.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0060

**Card ID:** a1-euch
**Field:** study.comparison[2].example
**CURRENT:** Das ist euer Haus. = Tā ir jūsu māja.
**NEW:** Das ist euer Haus. = Det er jeres hus.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0061

**Card ID:** a1-finden
**Field:** study.comparison[0].example
**CURRENT:** Ich finde das gut. = Man tas šķiet labi.
**NEW:** Ich finde das gut. = Jeg synes, det er godt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0062

**Card ID:** a1-haben
**Field:** study.comparison[0].example
**CURRENT:** Ich habe Zeit. = Man ir laiks.
**NEW:** Ich habe Zeit. = Jeg har tid.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0063

**Card ID:** a1-haben
**Field:** study.comparison[1].example
**CURRENT:** Ich bin hier. = Es esmu šeit.
**NEW:** Ich bin hier. = Jeg er her.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0064

**Card ID:** a1-haben
**Field:** study.comparison[2].example
**CURRENT:** Ich bekomme ein Geschenk. = Es saņemu dāvanu.
**NEW:** Ich bekomme ein Geschenk. = Jeg får en gave.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0065

**Card ID:** a1-haben
**Field:** study.comparison[3].example
**CURRENT:** Ich mache das. = Es to daru.
**NEW:** Ich mache das. = Jeg gør det.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0066

**Card ID:** a1-haben
**Field:** study.tip.text
**CURRENT:** Husk: Ich habe → man ir.
**NEW:** Husk: Ich habe → jeg har.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0067

**Card ID:** a1-haben
**Field:** study.sectionAccents.tip.left.purple[0]
**CURRENT:** man ir
**NEW:** jeg har
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0068

**Card ID:** a1-halten
**Field:** study.comparison[1].example
**CURRENT:** Ich nehme die Tasche. = Es ņemu somu.
**NEW:** Ich nehme die Tasche. = Jeg tager tasken.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0069

**Card ID:** a1-halten
**Field:** study.comparison[2].example
**CURRENT:** Bitte halten Sie an. = Lūdzu, apstājieties.
**NEW:** Bitte halten Sie an. = Vær så venlig at stoppe.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0070

**Card ID:** a1-halten
**Field:** study.comparison[3].example
**CURRENT:** Ich denke, das ist richtig. = Es domāju, ka tas ir pareizi.
**NEW:** Ich denke, das ist richtig. = Jeg tror, det er rigtigt.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0071

**Card ID:** a1-heißen
**Field:** study.comparison[1].example
**CURRENT:** Er nennt mich Tom. = Viņš mani sauc par Tomu.
**NEW:** Er nennt mich Tom. = Han kalder mig Tom.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0072

**Card ID:** a1-heißen
**Field:** study.comparison[2].example
**CURRENT:** Was bedeutet das? = Ko tas nozīmē?
**NEW:** Was bedeutet das? = Hvad betyder det?
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0073

**Card ID:** a1-heißen
**Field:** study.comparison[3].example
**CURRENT:** Ich rufe dich. = Es tevi pasaucu.
**NEW:** Ich rufe dich. = Jeg kalder på dig.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0074

**Card ID:** a1-heißen
**Field:** study.comparison[4].meaning
**CURRENT:** zvanīt
**NEW:** at ringe
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0075

**Card ID:** a1-heißen
**Field:** study.comparison[4].example
**CURRENT:** Ich rufe dich an. = Es tev piezvanu.
**NEW:** Ich rufe dich an. = Jeg ringer til dig.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0076

**Card ID:** a1-können
**Field:** study.comparison[0].example
**CURRENT:** Ich kann schwimmen. = Es protu peldēt.
**NEW:** Ich kann schwimmen. = Jeg kan svømme.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0077

**Card ID:** a1-können
**Field:** study.comparison[1].example
**CURRENT:** Darf ich gehen? = Vai drīkstu iet?
**NEW:** Darf ich gehen? = Må jeg gå?
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0078

**Card ID:** a1-können
**Field:** study.comparison[2].example
**CURRENT:** Ich muss lernen. = Man jāmācās.
**NEW:** Ich muss lernen. = Jeg er nødt til at lære.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0079

**Card ID:** a1-können
**Field:** study.comparison[3].example
**CURRENT:** Ich weiß das. = Es to zinu.
**NEW:** Ich weiß das. = Jeg ved det.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0080

**Card ID:** a1-kosten
**Field:** study.comparison[0].example
**CURRENT:** Das kostet 5 Euro. = Tas maksā 5 eiro.
**NEW:** Das kostet 5 Euro. = Det koster 5 euro.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0081

**Card ID:** a1-kosten
**Field:** study.comparison[1].example
**CURRENT:** Ich bezahle die Rechnung. = Es maksāju rēķinu.
**NEW:** Ich bezahle die Rechnung. = Jeg betaler regningen.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0082

**Card ID:** a1-kosten
**Field:** study.comparison[2].example
**CURRENT:** Kann ich bar zahlen? = Vai varu maksāt skaidrā naudā?
**NEW:** Kann ich bar zahlen? = Kan jeg betale kontant?
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0083

**Card ID:** a1-kosten
**Field:** study.comparison[3].example
**CURRENT:** Was kostet das Buch? = Cik maksā grāmata?
**NEW:** Was kostet das Buch? = Hvad koster bogen?
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0084

**Card ID:** a1-sein
**Field:** study.tip.text
**CURRENT:** Husk: ich bin = es esmu; du bist = tu esi.
**NEW:** Husk: ich bin = jeg er; du bist = du er.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0085

**Card ID:** a1-sein
**Field:** study.sectionAccents.tip.left.purple[0]
**CURRENT:** es esmu
**NEW:** jeg er
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0086

**Card ID:** a1-fernsehen
**Field:** study.comparison[0].example
**CURRENT:** Ich sehe fern. = Es skatos televīziju.
**NEW:** Ich sehe fern. = Jeg ser fjernsyn.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0087

**Card ID:** a1-fernsehen
**Field:** study.comparison[1].example
**CURRENT:** Im Fernsehen läuft ein Film. = Televīzijā rāda filmu.
**NEW:** Im Fernsehen läuft ein Film. = Der vises en film i fjernsynet.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0088

**Card ID:** a1-fernsehen
**Field:** study.comparison[2].example
**CURRENT:** Ich sehe einen Film. = Es redzu filmu.
**NEW:** Ich sehe einen Film. = Jeg ser en film.
**Problēma:** Latviešu (vai jaukt LV/DE) teksts DA laukā
**Pamatojums:** Neatrisināts LV atlikums lietotājam redzamā Study saturā
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0124

**Card ID:** a1-bitte
**Field:** lv
**CURRENT:** Behage
**NEW:** Vær så venlig
**Problēma:** Nepareiza galvenā nozīme (bitte ≠ Behage som hovedoversættelse)
**Pamatojums:** A1 galvenajā laukā jābūt biežākajai nozīmei «venligst/tak»
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0125

**Card ID:** a1-bitte
**Field:** study.translation
**CURRENT:** Behage
**NEW:** Vær så venlig
**Problēma:** Study translation neatbilst dāņu lietojumam
**Pamatojums:** Konsekvence ar galveno kartīti
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0126

**Card ID:** a1-bitte
**Field:** study.examples[0].lv
**CURRENT:** Behage!
**NEW:** En kop kaffe, tak.
**Problēma:** Piemēra tulkojums nesakrīt ar DE teikumu
**Pamatojums:** Eine Tasse Kaffee, bitte → dansk kaffe-bestilling
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0127

**Card ID:** a1-bitte
**Field:** study.examples[1].lv
**CURRENT:** Behage!
**NEW:** Vær så venlig at komme ind.
**Problēma:** Piemēra tulkojums nesakrīt ar DE teikumu
**Pamatojums:** Komm bitte herein → indbydelse
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0128

**Card ID:** a1-bitte
**Field:** study.examples[2].lv
**CURRENT:** En kop kaffe, tak.
**NEW:** Vær så venlig!
**Problēma:** Piemēra tulkojums nesakrīt ar DE teikumu (Bitte schön!)
**Pamatojums:** DE/DA piemēru pāris salūzis
**Smagums:** HIGH
**Statuss:** LABOT

#### DA-A1-0130

**Card ID:** a1-um
**Field:** study.important[0]
**CURRENT:** um ar laiku parasti ir "pulksten".
**NEW:** Klokkeslæt udtrykkes normalt med klokken.
**Problēma:** Jauktas latviski/dāņu metavaloda
**Pamatojums:** Study important jābūt pilnībā dāņu
**Smagums:** HIGH
**Statuss:** LABOT

### 3.3 MEDIUM — zero-width, sectionAccents, struktūras trūkumi

#### DA-A1-0012

**Card ID:** a1-sprechen-study
**Field:** study.explanation[1]
**CURRENT:** Sprechen betyder hovedsageligt: ​​at tale eller tale.
**NEW:** Sprechen betyder hovedsageligt: at tale.
**Problēma:** Redundant og unaturlig formulering (at tale eller tale)
**Pamatojums:** Dāņu skaidrojumā pietiek ar én hovedbetydning
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0013

**Card ID:** a1-bitte
**Field:** study.explanation[1]
**CURRENT:** Bitte betyder hovedsageligt: ​​høflighed.
**NEW:** Bitte betyder hovedsageligt: høflighed.
**Problēma:** Zero-width artefakts + mehāniska formula
**Pamatojums:** Jānoņem ZW un jāgludina teksts
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0014

**Card ID:** a1-bitte
**Field:** study.explanation[3]
**CURRENT:** Bitte betyder hovedsageligt: ​​anmodning/anmodning.
**NEW:** Bitte betyder hovedsageligt: anmodning.
**Problēma:** Dublēta vārda anmodning/anmodning
**Pamatojums:** Dabisks dāņu skaidrojums bez atkārtojuma
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0016

**Card ID:** a1-bitte
**Field:** study.explanation[0]
**CURRENT:** Hovedidé: Høfligt ord med små bogstaver. Har været høflig - tak.
**NEW:** Hovedidé: Høfligt ord med små bogstaver — venligst, tak.
**Problēma:** Anglicisms/mehāniska frāze «Har været høflig»
**Pamatojums:** Dabisks dāņu pedagoģisks tonis A1 līmenim
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0018

**Card ID:** a1-bitte-study
**Field:** study.explanation[1]
**CURRENT:** Die Bitte betyder i bund og grund: anmodning/anmodning.
**NEW:** Die Bitte betyder i bund og grund: anmodning.
**Problēma:** Dublēts anmodning/anmodning
**Pamatojums:** Dabisks dāņu skaidrojums
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0030

**Card ID:** a1-ganz
**Field:** lv
**CURRENT:** Alt
**NEW:** Hel • Fuldstændig
**Problēma:** Neprecīza galvenā nozīme (ganz ≠ alt/everything)
**Pamatojums:** ganz = hel/fuldstændig/ret; alles = alt
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0031

**Card ID:** a1-bitte
**Field:** study.tip.text
**CURRENT:** (trūkst)
**NEW:** Husk: bitte med små bogstaver betyder venligst; die Bitte med stort bogstav betyder en anmodning.
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Pamatojums:** Strukturāla paritāte ar etalonu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0032

**Card ID:** a1-bitte-study
**Field:** study.tip.text
**CURRENT:** (trūkst)
**NEW:** Husk: die Bitte er et navneord — en anmodning; bitte med små bogstaver er venligst.
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Pamatojums:** Strukturāla paritāte ar etalonu
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0089

**Card ID:** a1-klein-study
**Field:** study.explanation[1]
**CURRENT:** Klein betyder hovedsageligt: ​​lille størrelse.
**NEW:** Klein betyder hovedsageligt: lille størrelse.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0090

**Card ID:** a1-klein-study
**Field:** study.explanation[2]
**CURRENT:** Beskriver ofte: størrelsen af ​​en ting/person.
**NEW:** Beskriver ofte: størrelsen af en ting/person.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0091

**Card ID:** a1-an
**Field:** study.explanation
**CURRENT:** Bruges når noget er i nærheden af ​​en væg, vindue, dør, flod, strand eller anden kant/overflade.
**NEW:** Bruges når noget er i nærheden af en væg, vindue, dør, flod, strand eller anden kant/overflade.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0092

**Card ID:** a1-an
**Field:** study.important[0]
**CURRENT:** da er ikke en hvilken som helst "tarte". Det betyder ofte ved siden af ​​en overflade, væg, vindue eller kant.
**NEW:** da er ikke en hvilken som helst "tarte". Det betyder ofte ved siden af en overflade, væg, vindue eller kant.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0093

**Card ID:** a1-auf
**Field:** study.explanation
**CURRENT:** Bruges til at angive en retning til et sted eller toppen af ​​en overflade.
**NEW:** Bruges til at angive en retning til et sted eller toppen af en overflade.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0094

**Card ID:** a1-auf
**Field:** study.important[1]
**CURRENT:** Hvis noget er i nærheden af ​​en lodret overflade, har du ofte brug for en; hvis inde, skal ind.
**NEW:** Hvis noget er i nærheden af en lodret overflade, har du ofte brug for en; hvis inde, skal ind.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0095

**Card ID:** a1-bei
**Field:** study.explanation
**CURRENT:** Bruges, når noget er i nærheden af ​​en person, organisation, sted eller under nogle omstændigheder sker.
**NEW:** Bruges, når noget er i nærheden af en person, organisation, sted eller under nogle omstændigheder sker.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0096

**Card ID:** a1-bei
**Field:** study.comparison[1].meaning
**CURRENT:** Ved væggen, kanten, kysten, kanten af ​​overfladen
**NEW:** Ved væggen, kanten, kysten, kanten af overfladen
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0097

**Card ID:** a1-dass
**Field:** study.examples[2].lv
**CURRENT:** Jeg tror, ​​det er rigtigt.
**NEW:** Jeg tror, det er rigtigt.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0098

**Card ID:** a1-finden
**Field:** study.comparison[3].example
**CURRENT:** Ich glaube, er kommt. = Jeg tror, ​​han kommer.
**NEW:** Ich glaube, er kommt. = Jeg tror, han kommer.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0099

**Card ID:** a1-gross-study
**Field:** study.explanation[5]
**CURRENT:** Groß beskriver størrelse generelt eller højden af ​​en person.
**NEW:** Groß beskriver størrelse generelt eller højden af en person.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0100

**Card ID:** a1-ihr
**Field:** study.explanation[0]
**CURRENT:** Hovedidé: ihr er to forskellige pronominer med samme stavemåde - henvender sig til flere personer (dig) og dativformen af ​​pronomenet sie (hende/hun).
**NEW:** Hovedidé: ihr er to forskellige pronominer med samme stavemåde - henvender sig til flere personer (dig) og dativformen af pronomenet sie (hende/hun).
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0101

**Card ID:** a1-ihr
**Field:** study.tip[0]
**CURRENT:** ihr med verbet dsk. form (kommt, habt) = dig; ihr ved siden af ​​et ord som dativ eller besiddelse = hendes/hendes.
**NEW:** ihr med verbet dsk. form (kommt, habt) = dig; ihr ved siden af et ord som dativ eller besiddelse = hendes/hendes.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0102

**Card ID:** a1-wissen-study
**Field:** study.explanation[1]
**CURRENT:** Wissen betyder hovedsageligt: ​​information/fakta.
**NEW:** Wissen betyder hovedsageligt: information/fakta.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0103

**Card ID:** a1-lang
**Field:** study.explanation[2]
**CURRENT:** Når det kommer til længden af ​​tid, lang = lang (ein langer Tag = lang dag).
**NEW:** Når det kommer til længden af tid, lang = lang (ein langer Tag = lang dag).
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0104

**Card ID:** a1-laut
**Field:** study.explanation[1]
**CURRENT:** Laut betyder hovedsageligt: ​​høj lyd.
**NEW:** Laut betyder hovedsageligt: høj lyd.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0105

**Card ID:** a1-laut-study
**Field:** study.explanation[0]
**CURRENT:** Hovedidé: Et navneord med en artikel passer til og skrives med stort. Betyder lyd som en ting, et signal eller lyden af ​​sprog.
**NEW:** Hovedidé: Et navneord med en artikel passer til og skrives med stort. Betyder lyd som en ting, et signal eller lyden af sprog.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0106

**Card ID:** a1-morgen
**Field:** study.explanation[1]
**CURRENT:** Morgen betyder hovedsageligt: ​​næste dag.
**NEW:** Morgen betyder hovedsageligt: næste dag.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0107

**Card ID:** a1-morgen-study
**Field:** study.explanation[1]
**CURRENT:** Der Morgen betyder hovedsageligt: ​​næste dag.
**NEW:** Der Morgen betyder hovedsageligt: næste dag.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0108

**Card ID:** a1-müssen
**Field:** study.important[1]
**CURRENT:** Det andet verbum går normalt i slutningen af ​​sætningen: Ich muss heute arbeiten.
**NEW:** Det andet verbum går normalt i slutningen af sætningen: Ich muss heute arbeiten.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0109

**Card ID:** a1-natuerlich
**Field:** study.tip[1]
**CURRENT:** Ved siden af ​​et substantiv, der beskriver en oprindelse eller kvalitet → naturlig.
**NEW:** Ved siden af et substantiv, der beskriver en oprindelse eller kvalitet → naturlig.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0110

**Card ID:** a1-neu
**Field:** study.explanation[4]
**CURRENT:** Neu bruges også billedligt: ​​nyt job, ny information, ny begyndelse.
**NEW:** Neu bruges også billedligt: nyt job, ny information, ny begyndelse.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0111

**Card ID:** a1-noch-study
**Field:** study.explanation[1]
**CURRENT:** Noch betyder hovedsageligt: ​​noget, der stadig foregår.
**NEW:** Noch betyder hovedsageligt: noget, der stadig foregår.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0112

**Card ID:** a1-oder
**Field:** study.explanation[3]
**CURRENT:** I samtaler kan oder også stå i slutningen af ​​sætningen: Du kommst, oder?
**NEW:** I samtaler kan oder også stå i slutningen af sætningen: Du kommst, oder?
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0113

**Card ID:** a1-sagen-study
**Field:** study.explanation[1]
**CURRENT:** Sagen betyder hovedsageligt: ​​at komme med en bestemt pointe.
**NEW:** Sagen betyder hovedsageligt: at komme med en bestemt pointe.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0114

**Card ID:** a1-schon-study
**Field:** study.explanation[1]
**CURRENT:** Schon betyder hovedsageligt: ​​noget er allerede sket eller er i kraft.
**NEW:** Schon betyder hovedsageligt: noget er allerede sket eller er i kraft.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0115

**Card ID:** a1-seite
**Field:** study.explanation[0]
**CURRENT:** Hovedidé: Die Seite kan betyde siden af ​​en bog/dokument eller siden/kanten af ​​noget.
**NEW:** Hovedidé: Die Seite kan betyde siden af en bog/dokument eller siden/kanten af noget.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0116

**Card ID:** a1-sie-study
**Field:** study.explanation[1]
**CURRENT:** Sie betyder hovedsageligt: ​​én kvinde.
**NEW:** Sie betyder hovedsageligt: én kvinde.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0117

**Card ID:** a1-sie-study
**Field:** study.explanation[3]
**CURRENT:** Sie betyder hovedsageligt: ​​flere personer.
**NEW:** Sie betyder hovedsageligt: flere personer.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0118

**Card ID:** a1-sie-study
**Field:** study.explanation[5]
**CURRENT:** Sie betyder hovedsageligt: ​​høflig adresse.
**NEW:** Sie betyder hovedsageligt: høflig adresse.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0119

**Card ID:** a1-sie-study-2
**Field:** study.explanation[3]
**CURRENT:** Sie betyder hovedsageligt: ​​flere personer.
**NEW:** Sie betyder hovedsageligt: flere personer.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0120

**Card ID:** a1-sie-study-2
**Field:** study.explanation[5]
**CURRENT:** Sie betyder hovedsageligt: ​​høflig adresse.
**NEW:** Sie betyder hovedsageligt: høflig adresse.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0121

**Card ID:** a1-zug
**Field:** study.explanation[2]
**CURRENT:** I nogle andre betydninger kan Zug være en march, et udkast eller et indslag, men disse er ikke hovedbetydningen af ​​A1.
**NEW:** I nogle andre betydninger kan Zug være en march, et udkast eller et indslag, men disse er ikke hovedbetydningen af A1.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0122

**Card ID:** a1-appetit
**Field:** study.explanation[0]
**CURRENT:** Hovedidé: Følelsen af ​​at ville spise. kun ental - ingen flertal.
**NEW:** Hovedidé: Følelsen af at ville spise. kun ental - ingen flertal.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0123

**Card ID:** a1-obst
**Field:** study.explanation[1]
**CURRENT:** Das Obst betyder hovedsageligt: ​​frugt generelt.
**NEW:** Das Obst betyder hovedsageligt: frugt generelt.
**Problēma:** Zero-width Unicode artefakts tekstā
**Pamatojums:** Bojājums renderēšanā un dabiskumā; jānoņem
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0129

**Card ID:** a1-sprechen-study
**Field:** study.comparison[1].meaning
**CURRENT:** Fortæl (en bestemt tekst)
**NEW:** Sig (en bestemt tekst)
**Problēma:** Unaturligt dansk ordvalg for sagen
**Pamatojums:** sagen = sige noget bestemt, ikke «fortælle» generelt
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0131

**Card ID:** a1-bis
**Field:** study.sectionAccents.comparison[2].example.yellow
**CURRENT:** bis dass
**NEW:** Noņemt «bis dass» no study.sectionAccents.comparison[2].example.yellow
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0132

**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples[0].de.yellow
**CURRENT:** Wasser
**NEW:** Noņemt «Wasser» no study.sectionAccents.examples[0].de.yellow (DE piemērā nav Wasser)
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0133

**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples[1].de.green
**CURRENT:** dich
**NEW:** Noņemt «dich» no study.sectionAccents.examples[1].de.green (DE piemērā nav dich)
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0134

**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples[2].de.blue
**CURRENT:** bringt
**NEW:** Noņemt «bringt» no study.sectionAccents.examples[2].de.blue (DE piemērā nav bringt)
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0135

**Card ID:** a1-bringen
**Field:** study.sectionAccents.examples[2].de.yellow
**CURRENT:** Buch
**NEW:** Labot DE piemēru un akcentu pēc salāgošanas — vai noņemt «Buch» no examples[2].de.yellow
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0136

**Card ID:** a1-bringen
**Field:** study.sectionAccents.comparison[1].word.green
**CURRENT:** nehmen
**NEW:** Noņemt «nehmen» no study.sectionAccents.comparison[1].word.green (nav atrodams comparison tekstā)
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0137

**Card ID:** a1-bringen
**Field:** study.sectionAccents.comparison[2].word.green
**CURRENT:** holen
**NEW:** Noņemt «holen» no study.sectionAccents.comparison[2].word.green
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0138

**Card ID:** a1-bringen
**Field:** study.sectionAccents.comparison[3].word.green
**CURRENT:** mitbringen
**NEW:** Noņemt «mitbringen» no study.sectionAccents.comparison[3].word.green
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0139

**Card ID:** a1-es
**Field:** study.sectionAccents.examples[0].root.blue
**CURRENT:** Ich
**NEW:** Noņemt «Ich» no study.sectionAccents.examples[0].blue
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0140

**Card ID:** a1-es
**Field:** study.sectionAccents.examples[2].root.red
**CURRENT:** Sie
**NEW:** Noņemt «Sie» no study.sectionAccents.examples[2].red
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0141

**Card ID:** a1-es
**Field:** study.sectionAccents.examples[3].root.yellow
**CURRENT:** Das
**NEW:** Noņemt «Das» no study.sectionAccents.examples[3].yellow
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0142

**Card ID:** a1-finden
**Field:** study.sectionAccents.examples[1].de.blue
**CURRENT:** gefunden
**NEW:** Noņemt «gefunden» no study.sectionAccents.examples[1].de.blue
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

#### DA-A1-0143

**Card ID:** a1-halten
**Field:** study.sectionAccents.comparison[2].example.red
**CURRENT:** Stoppen
**NEW:** Aizstāt «Stoppen» ar «stop» study.sectionAccents.comparison[2].example.red (DA teksts: Bitte halten Sie an.)
**Problēma:** sectionAccents termins nav atrodams attiecīgajā Study tekstā
**Pamatojums:** validate-study-design.js sectionAccentIssues (14 A1)
**Smagums:** MEDIUM
**Statuss:** LABOT

---

## 4. Metodoloģija

1. `node scripts/audit-language-parity.js --lang=da`
2. `node scripts/audit-mojibake.js --lang=da`
3. `node scripts/validate-study-design.js --lang=da`
4. `node --check data/da/a1.js`
5. `reports/temp/audit-da-a1-collect.js` + `audit-da-a1-report-gen.js`
6. Pilna 702/702 kartīšu coverage ar automātisku DA lauku caurskanēšanu un AI lingvistisko interpretāciju

**Production changes = 0**

**DE changes = 0**

---

## 5. Trūkstošie Study objekti — copy-ready saturs

Zemāk — gatavi `study` bloki 10 trūkstošajām kartītēm. DE lauki un `sectionAccents` jāņem no LV etalona (`data/a1.js`); DA teksts — no šī pielikuma.

### 5.1 Besuch

**study.id:** `a1-besuch`

```json
{
  "id": "a1-besuch",
  "layout": "standardStudy",
  "translation": "Et besøg",
  "explanation": [
    "Hovedidé: der Besuch betyder et besøg på et sted, en begivenhed eller hos nogen.",
    "Når det handler om et sted eller en begivenhed, er besøg det naturlige ord på dansk.",
    "Når det handler om at besøge en person, kan man sige et besøg eller at komme forbi.",
    "Flertal: die Besuche."
  ],
  "examples": [
    {
      "de": "Der Besuch im Museum war interessant.",
      "lv": "Besøget på museet var interessant."
    },
    {
      "de": "Danke für deinen Besuch.",
      "lv": "Tak for dit besøg."
    },
    {
      "de": "Der Arzt macht einen Besuch.",
      "lv": "Lægen kommer på hjemmebesøg."
    }
  ],
  "tip": {
    "text": "Husk: Besuch er besøget eller begivenheden, mens Besucher er personen."
  },
  "important": [
    "der Besuch er ikke kun et socialt besøg; det kan også være et stedbesøg eller et hjemmebesøg.",
    "Flertal: die Besuche."
  ]
}
```

### 5.2 besuchen

**study.id:** `a1-besuchen`

```json
{
  "id": "a1-besuchen",
  "layout": "standardStudy",
  "translation": "At besøge • At deltage",
  "explanation": [
    "Hovedidé: besuchen bruges, når man deltager et sted, en begivenhed eller besøger en person.",
    "Til steder og begivenheder: at besøge / at deltage i.",
    "Til personer: at besøge / at komme forbi.",
    "Bøjes: ich besuche, du besuchst, er/sie/es besucht."
  ],
  "examples": [
    {
      "de": "Ich besuche meine Großeltern.",
      "lv": "Jeg besøger mine bedsteforældre."
    },
    {
      "de": "Wir besuchen das Museum.",
      "lv": "Vi besøger museet."
    },
    {
      "de": "Er besucht einen Freund.",
      "lv": "Han besøger en ven."
    }
  ],
  "tip": {
    "text": "Husk: besuchen = at besøge (person/sted); deltage i (begivenhed)."
  },
  "important": [
    "besuchen kræver akkusativ.",
    "Ikke det samme som sehen (at se)."
  ]
}
```

### 5.3 Fußball

**study.id:** `a1-fussball`

```json
{
  "id": "a1-fussball",
  "layout": "standardStudy",
  "translation": "Fodbold",
  "explanation": [
    "Hovedidé: Fußball betyder som regel fodbold som sport.",
    "Bruges om sporten, en kamp eller en bold.",
    "Flertal: die Fußbälle (bolde)."
  ],
  "examples": [
    {
      "de": "Ich spiele Fußball.",
      "lv": "Jeg spiller fodbold."
    },
    {
      "de": "Der Fußball ist rund.",
      "lv": "Fodbolden er rund."
    },
    {
      "de": "Wir schauen Fußball im Fernsehen.",
      "lv": "Vi ser fodbold i fjernsynet."
    }
  ],
  "tip": {
    "text": "Husk: Fußball = sporten; der Ball = bolden."
  },
  "important": [
    "der Fußball kan betyde sporten eller bolden."
  ]
}
```

### 5.4 ganz

**study.id:** `a1-ganz`

```json
{
  "id": "a1-ganz",
  "layout": "standardStudy",
  "translation": "Hel • Fuldstændig",
  "explanation": [
    "Hovedidé: ganz med et navneord betyder hel eller fuld.",
    "Med adjektiv: ganz = meget / ret (ganz gut = ret godt).",
    "ganz allein = helt alene."
  ],
  "examples": [
    {
      "de": "Ich esse den ganzen Apfel.",
      "lv": "Jeg spiser hele æblet."
    },
    {
      "de": "Das ist ganz gut.",
      "lv": "Det er ret godt."
    },
    {
      "de": "Er ist ganz allein.",
      "lv": "Han er helt alene."
    }
  ],
  "tip": {
    "text": "Husk: ganz + navneord = hel; ganz + adjektiv = meget/ret."
  },
  "important": [
    "Betydningen afhænger af, om ganz står foran navneord eller adjektiv."
  ]
}
```

### 5.5 gefallen

**study.id:** `a1-gefallen`

```json
{
  "id": "a1-gefallen",
  "layout": "standardStudy",
  "translation": "At kunne lide",
  "explanation": [
    "Hovedidé: gefallen betyder at kunne lide, men tyske sætninger bygges anderledes end på dansk.",
    "Typisk: Das gefällt mir = Det kan jeg godt lide.",
    "Genstanden står først; personen i dativ."
  ],
  "examples": [
    {
      "de": "Das Buch gefällt mir.",
      "lv": "Jeg kan godt lide bogen."
    },
    {
      "de": "Der Film gefällt uns.",
      "lv": "Vi kan godt lide filmen."
    },
    {
      "de": "Wie gefällt dir das?",
      "lv": "Hvad synes du om det?"
    }
  ],
  "tip": {
    "text": "Husk: Das gefällt mir — ikke «jeg kan lide det» ord-for-ord."
  },
  "important": [
    "gefallen tager dativ (mir, dir, ihm)."
  ]
}
```

### 5.6 Geschichte

**study.id:** `a1-geschichte`

```json
{
  "id": "a1-geschichte",
  "layout": "standardStudy",
  "translation": "Historie • Fortælling",
  "explanation": [
    "Hovedidé: Geschichte kan betyde en fortælling eller historie.",
    "Som fortælling: en historie (Die Geschichte ist spannend).",
    "Som fag/emne: historie (Geschichte lernen)."
  ],
  "examples": [
    {
      "de": "Die Geschichte ist interessant.",
      "lv": "Historien er interessant."
    },
    {
      "de": "Ich lese eine Geschichte.",
      "lv": "Jeg læser en historie."
    },
    {
      "de": "Wir lernen Geschichte in der Schule.",
      "lv": "Vi lærer historie i skolen."
    }
  ],
  "tip": {
    "text": "Husk: eine Geschichte = en historie/fortælling; das Fach Geschichte = historie."
  },
  "important": [
    "die Geschichte (f.) — artikel die."
  ]
}
```

### 5.7 Geschwister

**study.id:** `a1-geschwister`

```json
{
  "id": "a1-geschwister",
  "layout": "standardStudy",
  "translation": "Brødre og søstre",
  "explanation": [
    "Hovedidé: Geschwister betyder brødre og søstre tilsammen.",
    "Bruges om søskende som gruppe.",
    "Flertal: die Geschwister (samme form)."
  ],
  "examples": [
    {
      "de": "Ich habe zwei Geschwister.",
      "lv": "Jeg har to søskende."
    },
    {
      "de": "Meine Geschwister wohnen in Berlin.",
      "lv": "Mine søskende bor i Berlin."
    },
    {
      "de": "Die Geschwister spielen zusammen.",
      "lv": "Søskende leger sammen."
    }
  ],
  "tip": {
    "text": "Husk: Geschwister = søskende (både brødre og søstre)."
  },
  "important": [
    "Intet ental — kun flertalsform."
  ]
}
```

### 5.8 Großeltern

**study.id:** `a1-grosseltern`

```json
{
  "id": "a1-grosseltern",
  "layout": "standardStudy",
  "translation": "Bedsteforældre",
  "explanation": [
    "Hovedidé: Großeltern betyder bedstemor og bedstefar tilsammen.",
    "Bruges om bedsteforældre som par/gruppe.",
    "Flertal: die Großeltern."
  ],
  "examples": [
    {
      "de": "Meine Großeltern wohnen auf dem Land.",
      "lv": "Mine bedsteforældre bor på landet."
    },
    {
      "de": "Ich besuche meine Großeltern.",
      "lv": "Jeg besøger mine bedsteforældre."
    },
    {
      "de": "Die Großeltern sind alt.",
      "lv": "Bedsteforældrene er gamle."
    }
  ],
  "tip": {
    "text": "Husk: Großeltern = bedsteforældre (bedstemor + bedstefar)."
  },
  "important": [
    "Kun flertal — die Großeltern."
  ]
}
```

### 5.9 Hand

**study.id:** `a1-hand`

```json
{
  "id": "a1-hand",
  "layout": "standardStudy",
  "translation": "Hånd",
  "explanation": [
    "Hovedidé: die Hand betyder hånden, især håndfladen.",
    "Bruges om kropsdelen.",
    "Flertal: die Hände."
  ],
  "examples": [
    {
      "de": "Ich wasche mir die Hände.",
      "lv": "Jeg vasker mine hænder."
    },
    {
      "de": "Gib mir deine Hand.",
      "lv": "Giv mig din hånd."
    },
    {
      "de": "Er hält das Buch in der Hand.",
      "lv": "Han holder bogen i hånden."
    }
  ],
  "tip": {
    "text": "Husk: die Hand (f.) — flertal die Hände."
  },
  "important": [
    "Ausdruck: in der Hand = i hånden."
  ]
}
```

### 5.10 hübsch

**study.id:** `a1-hübsch`

```json
{
  "id": "a1-hübsch",
  "layout": "standardStudy",
  "translation": "Pæn • Smuk",
  "explanation": [
    "Hovedidé: hübsch betyder pæn, tiltalende eller smuk.",
    "Om personer: pæn / smuk.",
    "Om ting: pæn / flot."
  ],
  "examples": [
    {
      "de": "Das Mädchen ist hübsch.",
      "lv": "Pigen er pæn."
    },
    {
      "de": "Ein hübsches Kleid.",
      "lv": "En pæn kjole."
    },
    {
      "de": "Dein Zimmer ist hübsch.",
      "lv": "Dit værelse er pænt."
    }
  ],
  "tip": {
    "text": "Husk: hübsch = pæn/smuk — ikke kun «pænt ord»."
  },
  "important": [
    "hübsch bøjes: hübscher, am hübschesten."
  ]
}
```

