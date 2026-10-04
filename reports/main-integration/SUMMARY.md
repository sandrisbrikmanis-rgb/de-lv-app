# #859 un #863 integrācija uz datiem

STAGE RESULT: PASS

origin/main ir `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`. #859 un #863 ir OPEN, `mergedAt` ir tukšs. Neviens no tiem nav main.

Secība: vispirms #859 (`fc892441307135d49c4709b29957510d86b00ec4`), tad #863 (`71933349c999ad840840e125d4d1b25fa815627e`, manifests `f56fc2f9610ce8224e3b2ab7f7f53137b144d0ff`). Git auto-merge. Konflikta marķieru nav. b1.js satur abas rindas: `die Jagderlaubnisse` un `die Schäden`. Citos ceļos konflikta nebija.

No abiem PR zarā atstāti tikai datu faili. #859 atskaites un #863 `scripts/apply-goethe-plurals.js` plus `reports/goethe-plural-apply/` šajā kokā nav. languages/, ui.js, crowdin/content/ un esošie scripts/ nav mainīti.

Datu diff pret origin/main: 194 faili, 514 pievienotas rindas, 194 dzēstas rindas. Tas ir 66/66 no #859 plus 448/128 no #863. Kopīgie ir 64 b1.js faili. #859 papildus ir `data/c1.js` un `www/data/c1.js`.

`node --check` visiem 194 failiem: 0 kļūdas.

## Identitāte

Katrs de_plural ir vienāds LV un 31 valodā, kokos data un www/data.

| ieraksts | de_plural | trāpījumi |
|---|---|---:|
| Jagderlaubnis | die Jagderlaubnisse | 64 |
| Ende | die Enden | 64 |
| Morgen | die Morgen | 64 |
| Urlaub | die Urlaube | 128 |
| Wäsche | die Wäschen | 64 |
| Werbung | die Werbungen | 64 |
| Wiedersehen | die Wiedersehen | 64 |
| Schaden | die Schäden | 64 |

Urlaub ir divi ieraksti katrā valodā: A1 un A2. A2 `die Urlaube` jau bija origin/main. A1 vērtība pēc #863 ir tā pati.

Wetterleuchten `lv` ir `tālais zibens` tikai `data/c1.js` un `www/data/c1.js`. 31 valodu `lv` sakrīt ar origin/main. `de_plural` šim ierakstam nav lauka ne LV, ne 31 valodās.

## Auditi pagaidu kopijā

Skripți ņemti no audita zariem un palaisti pret šo koku. Izvade palika `/tmp`. Tīrā koka pārbaude pagaidu kopijā ir izlaista, jo šis zars datu izmaiņas satur ar nodomu.

de-consistency, zars `cursor/de-consistency-audit-f86b`: MISMATCHES 7593. No tiem `de_plural` ir 12, visi B2[1443] Pfahlbau, valodas et, fi, is, nb, nn, sv, koki data un www, LV vērtība null, valodas vērtība `die Pfahlbauten`. de_plural MISMATCH nav pieaudzis.

lv-de-verify, zars `cursor/lv-de-verify-f86b`: EMPTY_PLURAL observation 493, emptyPluralNouns 493, PLURAL_STEM_CHECK stemReview 20. Gaidītais 500 → 493 un 21 → 20 ir sasniegts.

## Actions un Pages

Repozitorijā ir viena Actions darbplūsma: `pages-build-deployment` (id 289308909, ceļš `dynamic/pages/pages-build-deployment`, state active). Citu workflow failu `.github/workflows` nav. Pages avots ir zars main, ceļš `/`, statuss built, lapa https://sandrisbrikmanis-rgb.github.io/de-lv-app/. Pēdējie pieci Pages palaišanas ir uz main ar notikumu dynamic. Sapludināšana ar main iedarbinās šo darbplūsmu. www/data ir publicētajā saknē, tāpēc šī PR datu faili www/data tiks publicēti kopā ar lapu.

Šis PR nav sapludināts. #859 un #863 paliek atvērti un ir atzīmēti kā aizstāti ar šo PR.
