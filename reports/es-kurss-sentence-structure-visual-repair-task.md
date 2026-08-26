# Uzdevums — ES Kurss Estructura de oraciones COPY-ONLY repair

Autoritatīvais OWNER fails:

`reports/es-kurss-sentence-structure-visual-owner-decisions.json`

## Darbs

1. Izveido jaunu branch no aktuālā `main`.
2. Piemēro abus `Status: LABOT` targetus.
3. Aizstāj visu `COURSE_LESSON_HTML.kurssSentenceStructureLesson` abos mirror failos. Nelabo vecās nobīdītās rindas pa vienai.
4. Pirms nomaiņas verificē precīzo `CURRENT`:
   - UTF-8/JavaScript virknes garums: `3306`;
   - SHA-256: `997fc48e93b82ff34e3bb8e0b27c3a73f39cd7e67e6d7226760f5b38f1cd9432`.
5. `www` targeta `NEW` ir precīzi `ES-KURSS-SENTENCE-STRUCTURE-0001.new`.
6. Pēc ieraksta pārlādē abus failus no diska un verificē precīzu `NEW`.

## Aizliegts

- mainīt redzamo UI title vai subtitle — tie ir OWNER `NELABOT`;
- mainīt citus Kurss lesson objektus;
- mainīt DE production failus;
- pārfrāzēt OWNER `NEW`;
- veikt Luna auditu apply posmā;
- mergot PR.

## Obligātā satura verifikācija

- lesson sadaļas: 4/4;
- pirmās sadaļas piemēri: 8/8;
- `was` piemēri: 4/4;
- `nicht` piemēri: 4/4;
- Lesson 2 teikumu pāri: 19/19;
- katrā kartītē vācu teikumam ir tā paša teikuma spāņu tulkojums;
- `ihr` jautājumi tulkoti daudzskaitlī: `¿Vais?`, `¿Cantáis?`;
- atjaunots noslēdzošais pāris `Sie kommen ... sie gehen.`;
- vecie nobīdītie pāri `Ich spiele nicht. — Paul no pregunta.`, `Paul fragt nicht. — No viene.`, `Sie singen nicht. — ¿Juegas?`, `Wir arbeiten. — Nosotros contar y dibujar.`: 0;
- visas sadaļas: `kurss-lesson-section`;
- visi konteineri: `kurss-examples`;
- visi piemēri: `kurss-example`.

## Tehniskie vārti

- OWNER coverage: 2/2;
- `APPLIED_VERIFIED`: 2/2;
- `CURRENT_VALUE_MISMATCH`: 0;
- `NEW_VALUE_MISMATCH`: 0;
- `FAILED`: 0;
- data/www mirror: PASS;
- JavaScript syntax: PASS;
- HTML struktūra: PASS;
- DE changes: 0;
- unexpected changes: 0;
- desktop un mobile browser smoke: PASS;
- console errors: 0.

## Deliverables

- `scripts/apply-es-kurss-sentence-structure-visual-owner-copy-only.js`
- `reports/es-kurss-sentence-structure-visual-owner-apply.md`
- `reports/es-kurss-sentence-structure-visual-repair-verification.md`

Push uz jaunu draft PR. PR nemergot.

Gala verdikts:

`PASS — ES KURSS SENTENCE STRUCTURE VISUAL REPAIR APPLIED AND VERIFIED`
