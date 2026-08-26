# Uzdevums — ES Kurss Consonantes COPY-ONLY labojums

## OWNER avots

Izmanto tikai:

`reports/es-kurss-consonants-visual-owner-decisions.json`

Failā ir precīzs `CURRENT` un pilns OWNER apstiprinātais `NEW`.

## Apply

1. Pārbaudi, ka katra targeta faktiskā vērtība precīzi sakrīt ar `CURRENT`.
2. Ja sakrīt, ieraksti precīzu `NEW`.
3. Ja production vērtība jau precīzi sakrīt ar `NEW`, atzīmē `ALREADY_APPLIED_VERIFIED`.
4. Cita neatbilstība jāatzīmē kā `CURRENT_VALUE_MISMATCH`; konkrēto targetu nemaini.
5. Neko netulko, nepārfrāzē un nepapildini.
6. DE saturu nemaini.
7. Maini tikai:
   - `data/es/courseLessons.js` → `COURSE_LESSON_HTML.kurssConsonantsLesson`;
   - `www/data/es/courseLessons.js` → identisko mirror lauku.

UI virsrakstu labojumus nedublē. Tie jau atrodas:

`reports/es-kurss-pronunciation-visual-owner-decisions.json`

## Pēc apply

Pārbaudi:

- OWNER targeti: **2/2**;
- `APPLIED_VERIFIED + ALREADY_APPLIED_VERIFIED = 2/2`;
- production un mirror ir precīzi identiski;
- JavaScript sintakse: **PASS**;
- HTML tagi ir sabalansēti;
- nav angļu atlikumu `not`, `quiet`, `many`;
- nav bojāto fragmentu:
  - `puesto (štal)`;
  - `Zahl (pollo)`;
  - `Klavier (piano)`;
  - `Mythe (boca)`;
  - `von (fon) - no`;
- saglabāti vācu vārdi `Stall`, `Zahl`, `Klavier`, `Mythe`;
- pārlūkā atver ES → Curso → Pronunciación → Consonantes y combinaciones de letras;
- pārbaudi desktop un mobile platumu;
- scroll darbojas;
- nav pārklājumu vai horizontālas pārplūdes;
- DE izmaiņas: **0**;
- neparedzētas production izmaiņas: **0**.

## Atskaites metrikas

- REQUESTED
- APPLIED_VERIFIED
- ALREADY_APPLIED_VERIFIED
- CURRENT_VALUE_MISMATCH
- FAILED
- mirror
- syntax
- HTML structure
- desktop/mobile visual smoke
- DE changes
- unexpected changes

Gala verdikts:

`PASS — ES KURSS CONSONANTS VISUAL REPAIR APPLIED AND VERIFIED`
