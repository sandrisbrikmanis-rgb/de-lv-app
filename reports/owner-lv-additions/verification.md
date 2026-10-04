# Verifikācija

Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.

Bāze: PR #866 galva `1071a13e3c6c534542aba7163e00208eaec80d4d`. origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d` nav apvienojis #866.

## D1

`git diff --numstat -- data www/data`: 52 faili, katrā `1 0`. Vienīgā pievienotā rinda ir `"de_plural": "die Pfahlbauten",` Pfahlbau objektā. 12 faili (et, fi, is, nb, nn, sv abos kokos) jau bija ar šo vērtību un diff nav.

## D2

`node --check` katram mainītajam `b2.js` un `scripts/audit-owner-lv-additions.js`: exit 0.

## D3

`node scripts/audit-de-consistency.js` pagaidu saknē, bez tīkla. Pirms: `/tmp/cons-before` (dati pirms Pfahlbau rindas). Pēc: `/tmp/cons-after` (symlink uz pašreizējiem datiem).

| rādītājs | pirms | pēc | delta |
|---|---:|---:|---:|
| MISMATCHES | 7593 | 7581 | -12 |
| EXTRA | 1098 | 1086 | -12 |
| de_plural EXTRA | 12 | 0 | -12 |
| B2 EXTRA | 12 | 0 | -12 |
| A1 EXTRA | 998 | 998 | 0 |
| C1 EXTRA | 74 | 74 | 0 |
| C2 EXTRA | 12 | 12 | 0 |
| courseLessons EXTRA | 2 | 2 | 0 |
| TEXT | 5428 | 5428 | 0 |
| UNICODE_ONLY | 760 | 760 | 0 |
| MISSING | 307 | 307 | 0 |
| ORDER | 0 | 0 | 0 |
| MATCH | 2380176 | 2380238 | +62 |
| CHECKED_FIELDS | 2386364 | 2386426 | +62 |

+62 MATCH ir 25 valodas × 2 koki, kur lauks parādījās abās pusēs ar vienādu vērtību, plus 6 valodas × 2 koki, kur EXTRA kļuva par MATCH.

## D4

`node scripts/audit-lv-de-verify.js` bez `--source-file`. Pass 2 nav palaists. Neviens ieraksts nav PASS.

| rādītājs | pirms | pēc |
|---|---:|---:|
| OBSERVATION | 493 | 492 |
| EMPTY_PLURAL lietvārds | 493 | 492 |
| EMPTY_PLURAL der | 169 | 168 |
| FINDING | 80 | 80 |
| REVIEW | 51 | 51 |
| PLURAL_STEM_CHECK | 20 | 20 |

EMPTY_PLURAL samazinājās par 1 (Pfahlbau). FINDING un REVIEW nepasliktinājās. `die Pfahlbauten` pret `Pfahlbau` sakrīt ar sufiksu `ten`.

## D5

`git diff -- languages ui.js www/ui.js crowdin/content` ir tukšs. Esošie `scripts/` nav mainīti. Jauns fails ir `scripts/audit-owner-lv-additions.js`.

Divas `node scripts/audit-owner-lv-additions.js` palaišanas deva vienādus SHA-256:

| fails | baiti | SHA-256 |
|---|---:|---|
| `owner-lv-additions.csv` | 87097 | `213a7b6ab34d6bf260b2c9e2fd51161d0ca8b353eb3e5e39149a4b228c2659d6` |
| `small-group.md` | 38309 | `7f8aae5de64691a26d52b478a2ab881decf86f622e7819aa69c8550b3b664c25` |
| `stats.json` | 16638 | `d8335ae304b2c6c5bd40d3c1335c74790772041b5e021650c2c257f6fed6901f` |
| `code-index.md` | 14611 | `c00bf1caf93e5d0852e81da26ddd50cf44178d0fd2da4b26ddefb5bbeffd712f` |
| `tip-text-only.md` | 3038 | `05e0c7af84f64eb35ae8827659ca1a61fa25a652c7d54559356ed21de6ded805` |
| `a1-bis-languages.md` | 1642 | `753f6a078280885bbb3d139661ab9123c6053b498ba4e2d26da127695d89983f` |
