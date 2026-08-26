# Uzdevums — ES Kurss Artículos visual COPY-ONLY repair

Izmanto vienīgo OWNER avotu:

`reports/es-kurss-articles-visual-owner-decisions.json`

## Darbs

1. Atrodi faktisko `Curso → Artículos` lesson HTML lauku `data/es/courseLessons.js` un tā `www/` mirror failā.
2. Pārbaudi, ka visi 19 `CURRENT` teksti precīzi eksistē production saturā.
3. Piemēro tikai `Statuss: LABOT` vērtības:
   - 18 precīzi `CURRENT → NEW` aizvietojumi;
   - 1 precīza dublētā elementa izņemšana (`ES-KURSS-ARTICLES-0014`).
4. Ja kāds `CURRENT` nesakrīt, izlaid tikai šo targetu un ziņo `CURRENT_VALUE_MISMATCH`; nemēģini atrast līdzīgu tekstu un neimprovizē.
5. Sinhronizē tikai attiecīgo `data/es/` un `www/data/es/` mirror saturu.

## Aizliegts

- mainīt DE production vai vācu piemēru saturu;
- tulkot vai pārfrāzēt ārpus OWNER `NEW`;
- veikt blakus sadaļu cleanup;
- mainīt citus Kurss moduļus;
- veikt Luna auditu šajā apply uzdevumā.

## Obligātā verifikācija

- OWNER targeti: 19;
- `APPLIED_VERIFIED`: 19/19;
- `CURRENT_VALUE_MISMATCH`: 0;
- `NEW_VALUE_MISMATCH`: 0;
- `FAILED`: 0;
- EN atlikumi labotajā Artículos saturā: 0;
- `article` spāņu tekstā: 0; korekti jābūt `artículo`;
- data/www mirror: PASS;
- JavaScript syntax: PASS;
- HTML struktūra: PASS;
- DE changes: 0;
- desktop un mobile browser smoke: PASS;
- console errors: 0.

## Deliverables

- `scripts/apply-es-kurss-articles-visual-owner-copy-only.js`
- `reports/es-kurss-articles-visual-owner-apply.md`
- `reports/es-kurss-articles-visual-repair-verification.md`

Push uz jaunu draft PR no aktuālā `main`. PR nemergot.

Gala verdikts, ja visi vārti iziet:

`PASS — ES KURSS ARTICLES VISUAL REPAIR APPLIED AND VERIFIED`
