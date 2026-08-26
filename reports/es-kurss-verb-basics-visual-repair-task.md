# Uzdevums — ES Kurss Verb basics visual COPY-ONLY repair

Autoritatīvais OWNER fails:

`reports/es-kurss-verb-basics-visual-owner-decisions.json`

## Darbs

1. Izveido jaunu branch no aktuālā `main`.
2. Piemēro visus 6 `Status: LABOT` targetus.
3. `kurssVerbBasicsLesson` jāaizstāj kā viens pilns HTML objekts abos mirror failos. Neveic bojātā satura daļēju labošanu.
4. Pirms lesson HTML nomaiņas verificē:
   - UTF-8 garums: `6519`;
   - SHA-256: `4706c81f6a5f84bd573bf288d520657444668086e2de9279b62b359452c95233`.
5. `www` lesson `NEW` ir precīzi tas pats, kas targeta `ES-KURSS-VERB-BASICS-0001.new`.
6. UI targetiem obligāts precīzs `CURRENT` salīdzinājums.
7. Pēc ieraksta pārlādē visus failus no diska un verificē precīzu `NEW`.

## Aizliegts

- mainīt citus Kurss lesson objektus;
- mainīt DE production failus;
- tulkot, pārfrāzēt vai papildināt OWNER `NEW`;
- saglabāt kādu vecās bojātās konjugācijas fragmentu;
- veikt Luna auditu apply posmā;
- mergot PR.

## Obligātā satura verifikācija

- 11 darbības vārdi: `kommen`, `gehen`, `stehen`, `singen`, `spielen`, `arbeiten`, `fragen`, `antworten`, `rechnen`, `zeichnen`, `tun`;
- katram darbības vārdam tieši 7 personas/formas;
- kopā 77 konjugāciju rindas;
- vācu forma un spāņu persona katrā rindā savstarpēji atbilst;
- `ihr` visur tulkots kā `vosotros/vosotras`, nevis `tú`;
- `sie` daudzskaitlī tulkots kā `ellos/ellas`;
- aizliegtie bojātie fragmenti: `singen - to cantar`, `ich kommt`, `sie kommen — ellos / ella en el juego`, `ich gehe — yo trabajo`, `ich stehe — ellos`, `du singst — tú calcula`, `er singt — ellos / ella factura`, `<h4>allí</h4>` — 0;
- visas sadaļas izmanto `kurss-lesson-section`;
- visi piemēru konteineri izmanto `kurss-examples` un `kurss-example`.

## Tehniskie vārti

- OWNER coverage: 6/6;
- `APPLIED_VERIFIED`: 6/6;
- `CURRENT_VALUE_MISMATCH`: 0;
- `NEW_VALUE_MISMATCH`: 0;
- `FAILED`: 0;
- data/www mirror: PASS;
- languages/www mirror: PASS;
- JavaScript syntax: PASS;
- HTML struktūra: PASS;
- DE changes: 0;
- unexpected changes: 0;
- desktop un mobile browser smoke: PASS;
- console errors: 0.

## Deliverables

- `scripts/apply-es-kurss-verb-basics-visual-owner-copy-only.js`
- `reports/es-kurss-verb-basics-visual-owner-apply.md`
- `reports/es-kurss-verb-basics-visual-repair-verification.md`

Push uz jaunu draft PR.

Gala verdikts:

`PASS — ES KURSS VERB BASICS VISUAL REPAIR APPLIED AND VERIFIED`
