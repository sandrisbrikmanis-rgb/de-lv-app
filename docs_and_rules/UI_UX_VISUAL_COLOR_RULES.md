## 🎨 STINGRI NOTEIKUMI VIZUĀLAJAM DIZAINAM UN KRĀSĀM (UI/UX)

1. Visiem datu failiem (a1, a2, b1, b2, c1, c2, comparisonStudy) OBLIGĀTI jānodrošina 100% vienots vizuālais stils un krāsu akcenti visās sadaļās (Piemēri, Salīdzinājums, Padoms, Svarīgi).
2. Sadaļā "Salīdzinājums" (comparisonTable / comparison) vācu vārdi un frāzes NEKAD nedrīkst būt parastā baltā krāsā. Tiem obligāti jābūt iekrāsotiem ZAĻĀ krāsā, bet latviešu tulkojumiem – PURPURSARKANĀ (rozā) krāsā, precīzi kā A1 līmenī.
3. Ja kartītei tiek ģenerēti dati, laukam `sectionAccents` (vai attiecīgajai highlight loģikai ui.js) jābūt pilnībā aizpildītam gan parastajām frāzēm, gan salīdzinājuma tabulām. Datos nedrīkst palikt tukši vai nepilnīgi krāsu lauki.
4. Funkcijai `renderStudyCard()` un tabulu zīmētājiem failā `ui.js` ir automātiski jāpiemēro šīs krāsu klases, pat ja konkrētajā datu objektā izstrādātājs ir aizmirsis manuāli ierakstīt `sectionAccents`. Balti (neizcelts) teksti tabulās ir uzskatāmi par kritisku vizuālo kļūdu.