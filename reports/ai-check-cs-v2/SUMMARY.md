# Čehu AI pārbaudes partijas v2

STAGE RESULT: PASS

Ir 49 partijas, katrā 100 rindas un trīs nozīmju secības A, B un C. Īstie pāri ir 4318, tie sakrīt ar #882. Četri zināmie grūtie gadījumi (wider/Vs, der Wechsel/Posun, austreten/Vystěhovat, die These/Práce) ir pirmajā partijā kā NEG_NEAR un atslēgā kā KNOWN_HARD. Papildu kontroles ir 582: 292 pozitīvās, 241 tuvā kļūda un 49 vieglās. Kopā ar četriem zināmajiem kontroļu rindas ir 586, visu rindu skaits ir 4900. Vārti G1–G10 ir izpildīti. Kalibrācija no batch-001 atbildēm ir NOT_RUN, jo ielīmēto CSV nav. AI_CONSENSUS_OK nav vārdnīcas apstiprinājums.

## Skaits

| | skaits |
|---|---:|
| partijas | 49 |
| rindas partijā | 100 |
| versijas | A, B, C |
| īstie pāri | 4318 |
| POS | 292 |
| NEG_NEAR, ieskaitot 4 KNOWN_HARD | 245 |
| NEG_EASY | 49 |
| kontroļu rindas | 586 |
| sintētiskās kontroles | 582 |

Sēkla: 20261007. Negatīvās kontroles ir esošu čehu vārdu pārstādījumi. Tuvajām kļūdām ir kopīgs vācu celms, priedēklis, saliktenis, kopīgs sākums vai tā pati LV nozīme. Vieglās ir tas pats vārdšķiras tips bez šīs tuvības.

## Vārti

- G1: `git diff -- data www/data languages ui.js www/ui.js crowdin/content scripts` ir tukšs.
- G2: dubulti vācu vārdi 0, kontroļu de/čehu sakritība ar īstu rindu 0.
- G3: katrā partijā NEG_NEAR ir vismaz 4% un POS vismaz 4%. Negatīvo ir vismaz 6%, un vismaz 70% no tiem ir NEG_NEAR.
- G4: A/B/C secības atšķiras vismaz 50% rindu ar 2+ nozīmēm. Atpakaļ pārvēršana ir 100%. Vismaz vienā versijā kanoniskā nozīme 1 ir pirmā ne vairāk kā 40% šādu rindu.
- G5: piemēri ir burtiski no `study.examples`. Ja piemēra nav vai tajā ir čehu tulkojums, šūnā ir —.
- G6: `SELF_TEST_PASS`.
- G7: divas palaišanas deva vienādus SHA-256 visiem partiju un atslēgu failiem.
- G8: īstie pāri 4318. Kontroles 586.
- G9: pret `9b44e89506a66a39e6ca375d6106566396ef8f10` MASTER diff ir tikai versija 1.21, §7.158.E, §20 un beigu atzīme.
- G10: lielākais fails ir `keys/control-key.csv`, 62017 baiti.

`node reports/ai-check-cs-v2/scripts/compare-ai-translation-check.js` izdrukā SELF_TEST_PASS, CALIBRATION NOT_RUN un MISSING_AI 147. Skripts slieksni neizvēlas un `data/` neraksta.

## Atvēršanai un lejupielādei

Saites tiks pievienotas pēc satura commita.
