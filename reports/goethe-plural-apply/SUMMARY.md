# Goethe daudzskaitļu piemērošana

STAGE RESULT: PARTIAL

OWNER_DECISION 2026-10-04. Zars no `origin/main` `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`. #855, #856, #857, #858, #859, #860, #861 un #862 ir atvērti un nav apvienoti. MASTER šajā kokā ir 1.18. §7.158 šajā failā nav.

Atlase no `reports/plural-source-check.csv` (komits `9cdffb4173d61e17113a5dff3d0d20e42b844186`, SHA-256 `32d86dc3018b2e595587a6b00da3b6be0043def57b99df8c19ff3d9852124d0a`). CSV repozitorijā šajā zarā netiek glabāts, jo satur Duden gramatikas rindas. Šeit ir forma, statuss un lappuse.

PIEMĒROT: 7. NEPIEMĒROT: 3. Pfahlbau un citi tikai Duden trūkstošie daudzskaitļi nav mainīti.

## PIEMĒROT

| līmenis | indekss | de | artikuls | de_plural | Duden statuss | Duden forma | Goethe lappuse |
|---|---:|---|---|---|---|---|---|
| A1 | 161 | Ende | das | die Enden | NEEDS_SOURCE_REVIEW | Enden | Goethe-A2 p.13 -n |
| A1 | 418 | Morgen | der | die Morgen | NEEDS_SOURCE_REVIEW | Morgen | Goethe-A1-Fit1 p.8 - |
| A1 | 695 | Urlaub | der | die Urlaube | PLURAL_FOUND | Urlaube | Goethe-A2 p.28 -e Goethe-B1 p.91 -e |
| A2 | 1561 | Wäsche | die | die Wäschen | NEEDS_SOURCE_REVIEW | Wäschen | Goethe-A2 p.30 -n |
| A2 | 1579 | Werbung | die | die Werbungen | NEEDS_SOURCE_REVIEW | Werbungen | Goethe-B1 p.97 -en |
| A2 | 1588 | Wiedersehen | das | die Wiedersehen | PLURAL_FOUND | Wiedersehen | Goethe-A1-Fit1 p.20 - Goethe-A2 p.30 - |
| B1 | 3361 | Schaden | der | die Schäden | NEEDS_SOURCE_REVIEW | Schäden | Goethe-B1 p.76 ¨- |

Iemesls visiem septiņiem: Duden forma sakrīt ar Goethe un nav `(Plural selten)`.

## NEPIEMĒROT

### Duden AMBIGUOUS bez sakrītošas formas (1)

- A1[691] Essen, das. Goethe forma Essen. Duden statuss AMBIGUOUS, forma tukša.

### Duden NO_PLURAL_LISTED bez sakrītošas formas (1)

- B1[3260] Wiederhören, das. Goethe forma Wiederhören. Duden statuss NO_PLURAL_LISTED, forma tukša.

### SOURCES_DISAGREE (1)

- B1[867] Fasching, der. Goethe forma Fasching. Duden PLURAL_FOUND formas Faschinge un Faschings. Neviena nav Goethe forma.

## Verifikācija

`git diff` data un www/data: 192 faili, 448 pievienotas rindas, 128 dzēstas rindas. Visas 576 rindas ir `de_plural`. 448 = 64 × 7. 128 dzēšanas ir esošā `"de_plural": null` aizstāšana. Citu lauku rindas nav. `languages/`, `ui.js`, `crowdin/content/` un iepriekš esošie `scripts/` ir tukšs diff. Jaunais skripts ir `scripts/apply-goethe-plurals.js`.

Identitāte: katram no 7 ierakstiem `de_plural` ir vienāds 64 failos (32 valodas × 2 koki). Nesakritības: 0.

de-consistency (pagaidu kopija, `/tmp/cons-out`): `de_plural` MISMATCH 12, visi B2[1443] Pfahlbau EXTRA valodās et, fi, is, nb, nn, sv, abi koki. Kopējie MISMATCHES 7593, tāds pats skaits kā pirms šīs izmaiņas. CHECKED_FIELDS 2386054 → 2386364 (+310): 310 valodu failos lauks iepriekš nebija; 124 valodu failos bija `null`. LV anomālijas 618 → 611.

lv-de-verify (pagaidu kopija, `/tmp/verify-out`): EMPTY_PLURAL OBSERVATION 500 → 493. Lietvārdu tukšais daudzskaitlis 500 → 493 (der 172 → 169, die 194 → 192, das 134 → 132). Līmeņu kolonna EMPTY_PLURAL 4082 → 4075 (A1 −3, A2 −3, B1 −1). FINDING 80, NEEDS_SOURCE_REVIEW 7164, REVIEW 52, PLURAL_STEM_CHECK 21, CASE_AND_WHITESPACE 0, SAME_LV 53, DIFFERENT_LV 27. Indikācija keit/heit/schaft/ung tukšajiem lietvārdiem 9 → 8, jo Werbung vairs nav tukša.

plural-source-check no keša, bez jauna tīkla. Nemainītais selektors pēc aizpildes dod 499 rindas, nevis 506, jo 7 ieraksti vairs nav tukši un sakne sakrīt. Šajā 499 kopā MISSING_PLURAL_IN_DATA 65 → 58 (−7), CONSISTENT 291 → 291 (+0). Pārējās kategorijas nemainās.

Tie paši 7 ieraksti, ielikti atpakaļ salīdzinājumā ar aizpildītu `de_plural`:

| ieraksts | salīdzinājums pēc aizpildes | Duden puse | Goethe puse |
|---|---|---|---|
| Urlaub | CONSISTENT | CONSISTENT | CONSISTENT |
| Wiedersehen | CONSISTENT | CONSISTENT | CONSISTENT |
| Ende | NEEDS_SOURCE_REVIEW | NEEDS_SOURCE_REVIEW | CONSISTENT |
| Morgen | NEEDS_SOURCE_REVIEW | NEEDS_SOURCE_REVIEW | CONSISTENT |
| Wäsche | NEEDS_SOURCE_REVIEW | NEEDS_SOURCE_REVIEW | CONSISTENT |
| Werbung | NEEDS_SOURCE_REVIEW | NEEDS_SOURCE_REVIEW | CONSISTENT |
| Schaden | NEEDS_SOURCE_REVIEW | NEEDS_SOURCE_REVIEW | CONSISTENT |

CONSISTENT nepieaug par 7. Pieci Duden statusi ir NEEDS_SOURCE_REVIEW, jo šķirklī ir gan `Plural:` forma, gan `(ohne Plural)`. Esošais `compareSide` atgriež šo statusu pirms formu salīdzinājuma. Goethe puse šiem pieciem ir CONSISTENT. Tāpēc solis 10 nav izpildīts kā `CONSISTENT + N`. Dati ir piemēroti pēc formas sakritības noteikuma. Essen, Wiederhören, Fasching un Pfahlbau nav mainīti.

Šis solis kopē Goethe apstiprinātu daudzskaitli. Tas nepierāda DE pareizību.
