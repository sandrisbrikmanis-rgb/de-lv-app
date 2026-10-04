# Verifikācija

Apply nav izpildīts, jo prognoze pārkāpj EXTRA A1–C2 = 0.

- Klasifikators: `node scripts/realign-study-elements.js` (izejas kods 2 = vārti nav izpildīti)
- Atjaunošanas pārbaude: `node scripts/restore-study-realign.js`
- Study indeksa data koks pirms: {"TEXT":4,"MISSING":0,"EXTRA":542}
- Study indeksa data koks pēc atļautās prognozes: {"TEXT":3,"MISSING":0,"EXTRA":237}
- Prognoze abiem kokiem: {"TEXT":5426,"MISSING":307,"EXTRA":476,"ORDER":0,"extraA1C2":474}
- #869 pilnais audits (temp kopija, dati netika mainīti): TEXT 5428, MISSING 307, EXTRA 1086, ORDER 0
- Audita sadalījums: EXTRA a1 998, c1 74, c2 12, courseLessons 2; TEXT a1 14, courseLessons 5414; MISSING courseLessons 292 un citi nemaināmie datu kopumi 15.
- data un www/data līmeņu faili ir baitu identiski, tāpēc study EXTRA 542 data kokā ir 1084 abos kokos.
