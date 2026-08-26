# Uzdevums — ES Kurss izrunas lapas COPY-ONLY labojums

## Avots

Izmanto tikai:

`reports/es-kurss-pronunciation-visual-owner-decisions.json`

Failā ir visi OWNER apstiprinātie `CURRENT` un `NEW` labojumi.

## Apply

1. Katram targetam pārbaudi, ka faktiskā production vērtība precīzi sakrīt ar `CURRENT`.
2. Ja sakrīt, ieraksti precīzu `NEW`.
3. Ja nesakrīt, apturi tikai konkrēto targetu un ziņo `CURRENT_VALUE_MISMATCH`.
4. Neko netulko un nepārfrāzē.
5. DE saturu nemaini.
6. Maini tikai mappingā norādītos laukus:
   - `data/es/courseLessons.js`
   - `www/data/es/courseLessons.js`
   - `languages/es/ui.js`
   - `www/languages/es/ui.js`

## Pēc apply

Obligāti pārbaudi:

- visi OWNER `LABOT` targeti ir `APPLIED_VERIFIED`;
- `data/es/courseLessons.js` un `www/data/es/courseLessons.js` ir precīzi mirror;
- `languages/es/ui.js` un `www/languages/es/ui.js` ir precīzi mirror;
- JavaScript sintakse: PASS;
- HTML tagi `kurssPronunciationLesson`: sabalansēti;
- nav `</sección>`;
- nav bojāto virkņu: `cálida (varm)`, `tripa (get)`, `Cabaña (hūt)`, `calvo (balt)`, `bufanda`, `culo`, `Dedo (dedo)`, `Cabestro`, `Sonidos de inmersión`, `Dip: eu`, `Diplomática: ei`;
- vācu piemēri `warm`, `gut`, `Hut`, `bald`, `scharf`, `Finger`, `Halter`, `Hase`, `Knabe`, `Saal`, `Saat`, `See`, `Beet`, `Boot` ir saglabāti;
- pārlūkā atver ES → Curso → Pronunciación → Vocales: largas y cortas;
- pārbaudi desktop un mobile platumu;
- saturs ir lasāms, scroll darbojas, nav pārklājumu vai horizontālas pārplūdes;
- production izmaiņas ārpus četriem atļautajiem failiem: 0;
- DE izmaiņas: 0.

## Atskaites vārti

- REQUESTED
- APPLIED_VERIFIED
- CURRENT_VALUE_MISMATCH
- FAILED
- mirror
- syntax
- HTML structure
- desktop/mobile visual smoke
- DE changes
- unexpected changes

Gala verdikts:

`PASS — ES KURSS PRONUNCIATION VISUAL REPAIR APPLIED AND VERIFIED`
