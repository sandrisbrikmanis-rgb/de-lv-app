const COURSE_LESSONS = [
  {
    id: "lesson1",
    title: "Lekcija 1",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson2",
    title: "Lekcija 2",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson3",
    title: "Lekcija 3",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson4",
    title: "Lekcija 4",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson5",
    title: "Lekcija 5",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson6",
    title: "Lekcija 6",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson7",
    title: "Lekcija 7",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson8",
    title: "Lekcija 8",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson9",
    title: "Lekcija 9",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson10",
    title: "Lekcija 10",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  },
  {
    id: "lesson11",
    title: "Lekcija 11",
    pronunciation: [],
    grammar: [],
    verbs: [],
    sentenceStructure: [],
    exercises: []
  }
];



const COURSE_LESSON_HTML = {
  "kurssArticlesLesson": "\n  <h3>Artikuli</h3>\n\n  <div class=\"artikuli-info artikuli-intro-info\">\n    <span class=\"artikuli-info-icon\">i</span>\n    <div>Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Tāpēc lietvārdus vislabāk mācīties kopā ar artikulu.</div>\n  </div>\n\n  <section class=\"artikuli-block\">\n    <h4 class=\"artikuli-header\"><span>•</span>Artikulu piemēri</h4>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">der Tisch — galds</div>\n      <div class=\"kurss-example\">die Tür — durvis</div>\n      <div class=\"kurss-example\">das Messer — nazis</div>\n      <div class=\"kurss-example\">das Mädchen — meitene</div>\n    </div>\n  </section>\n\n  <section class=\"artikuli-block\">\n    <h4 class=\"artikuli-header\"><span>♂</span>Bieži DER</h4>\n    <p class=\"artikuli-explain\">DER bieži ir vīriešu personas, dienas, mēneši, gadalaiki un daži vārdi ar noteiktām galotnēm.</p>\n\n    <h5 class=\"artikuli-subtitle\">Noteikumi</h5>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">-er → bieži DER, piemēram: der Computer, der Lehrer <span class=\"artikuli-note\">bet ne vienmēr</span></div>\n      <div class=\"kurss-example\">-ling → bieži DER, piemēram: der Schmetterling</div>\n      <div class=\"kurss-example\">-ismus → bieži DER, piemēram: der Tourismus, der Kapitalismus</div>\n      <div class=\"kurss-example\">vīriešu personas → der Mann, der Vater</div>\n      <div class=\"kurss-example\">profesijas → der Lehrer, der Arzt</div>\n      <div class=\"kurss-example\">automobiļu markas → der BMW, der Mercedes</div>\n      <div class=\"kurss-example\">dienas → der Montag, der Dienstag</div>\n      <div class=\"kurss-example\">mēneši → der August, der Dezember</div>\n      <div class=\"kurss-example\">gadalaiki → der Sommer, der Winter</div>\n    </div>\n\n    <h5 class=\"artikuli-subtitle\">Piemēri</h5>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">der Mann — vīrietis</div>\n      <div class=\"kurss-example\">der Vater — tēvs</div>\n      <div class=\"kurss-example\">der Montag — pirmdiena</div>\n      <div class=\"kurss-example\">der August — augusts</div>\n      <div class=\"kurss-example\">der Sommer — vasara</div>\n      <div class=\"kurss-example\">der Lehrer — skolotājs</div>\n      <div class=\"kurss-example\">der Computer — dators</div>\n      <div class=\"kurss-example\">der Schmetterling — taurenis</div>\n    </div>\n  </section>\n\n  <section class=\"artikuli-block\">\n    <h4 class=\"artikuli-header\"><span>♀</span>Bieži DIE</h4>\n    <p class=\"artikuli-explain\">DIE bieži ir sieviešu personas, daudzskaitlis un vārdi ar galotnēm -ung, -heit, -keit, -schaft, -ion, -tät, -ei.</p>\n\n    <h5 class=\"artikuli-subtitle\">Noteikumi</h5>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">-ung → die Wohnung, die Rechnung</div>\n      <div class=\"kurss-example\">-heit → die Freiheit, die Gesundheit</div>\n      <div class=\"kurss-example\">-keit → die Möglichkeit</div>\n      <div class=\"kurss-example\">-schaft → die Mannschaft</div>\n      <div class=\"kurss-example\">-ion → die Nation</div>\n      <div class=\"kurss-example\">-tät → die Universität</div>\n      <div class=\"kurss-example\">-ei → die Polizei, die Bäckerei</div>\n      <div class=\"kurss-example\">sieviešu personas → die Frau, die Mutter</div>\n      <div class=\"kurss-example\">motociklu markas → die Harley-Davidson, die Yamaha</div>\n      <div class=\"kurss-example\">daudzskaitlis → die Autos, die Häuser</div>\n      <div class=\"kurss-example\">daudzskaitlis gandrīz vienmēr → die Autos, die Häuser, die Kinder</div>\n    </div>\n\n    <h5 class=\"artikuli-subtitle\">Piemēri</h5>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">die Frau — sieviete</div>\n      <div class=\"kurss-example\">die Mutter — māte</div>\n      <div class=\"kurss-example\">die Wohnung — dzīvoklis</div>\n      <div class=\"kurss-example\">die Rechnung — rēķins</div>\n      <div class=\"kurss-example\">die Freiheit — brīvība</div>\n      <div class=\"kurss-example\">die Möglichkeit — iespēja</div>\n      <div class=\"kurss-example\">die Mannschaft — komanda</div>\n      <div class=\"kurss-example\">die Nation — nācija</div>\n      <div class=\"kurss-example\">die Universität — universitāte</div>\n      <div class=\"kurss-example\">die Polizei — policija</div>\n    </div>\n  </section>\n\n  <section class=\"artikuli-block\">\n    <h4 class=\"artikuli-header\"><span>◇</span>Bieži DAS</h4>\n    <p class=\"artikuli-explain\">DAS bieži ir pamazināmie ar -chen / -lein, daudzi vārdi ar -ment / -um un darbības vārdi kā lietvārdi.</p>\n\n    <h5 class=\"artikuli-subtitle\">Noteikumi</h5>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">-chen → das Mädchen, das Häuschen</div>\n      <div class=\"kurss-example\">-lein → das Fräulein</div>\n      <div class=\"kurss-example\">-ment → das Instrument</div>\n      <div class=\"kurss-example\">-um → das Zentrum, das Museum</div>\n      <div class=\"kurss-example\">metāli → das Gold, das Silber, das Eisen</div>\n      <div class=\"kurss-example\">ķīmiskie elementi → das Eisen, das Sauerstoff</div>\n      <div class=\"kurss-example\">viesnīcas → das Hotel</div>\n      <div class=\"kurss-example\">krāsas kā lietvārdi → das Rot, das Blau</div>\n      <div class=\"kurss-example\">darbības vārds kā lietvārds → das Essen, das Lernen</div>\n      <div class=\"kurss-example\">darbības vārdi kā lietvārdi → das Essen, das Lernen, das Lesen</div>\n    </div>\n\n    <h5 class=\"artikuli-subtitle\">Piemēri</h5>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">das Kind — bērns</div>\n      <div class=\"kurss-example\">das Mädchen — meitene</div>\n      <div class=\"kurss-example\">das Häuschen — mājiņa</div>\n      <div class=\"kurss-example\">das Instrument — instruments</div>\n      <div class=\"kurss-example\">das Zentrum — centrs</div>\n      <div class=\"kurss-example\">das Museum — muzejs</div>\n      <div class=\"kurss-example\">das Essen — ēšana / ēdiens</div>\n      <div class=\"kurss-example\">das Lernen — mācīšanās</div>\n    </div>\n  </section>\n\n  <section class=\"artikuli-block\">\n    <h4 class=\"artikuli-header\"><span>!</span>Svarīgi izņēmumi / jāiemācās ar artikulu</h4>\n    <p class=\"artikuli-explain\">Dažiem vārdiem artikulu nevar droši noteikt pēc galotnes vai latviešu dzimtes. Tos vislabāk mācīties kopā ar artikulu.</p>\n    <div class=\"artikuli-grid\">\n      <div class=\"kurss-example\">die Tür — durvis</div>\n      <div class=\"kurss-example\">das Messer — nazis</div>\n      <div class=\"kurss-example\">die Sonne — saule</div>\n      <div class=\"kurss-example\">der Mond — mēness</div>\n      <div class=\"kurss-example\">das Mädchen — meitene</div>\n      <div class=\"kurss-example\">das Auto — automašīna</div>\n      <div class=\"kurss-example\">der Käse — siers</div>\n      <div class=\"kurss-example\">die Gabel — dakša</div>\n    </div>\n  </section>\n\n  <div class=\"artikuli-info artikuli-bottom-info\">\n    <span class=\"artikuli-info-icon\">i</span>\n    <div>Galotnes un vārdu grupas palīdz uzminēt artikulu, bet tās nav 100% drošs likums. Ja neesi pārliecināts, mācies vārdu kopā ar artikulu.</div>\n  </div>\n",
  "kurssPronunciationLesson": "\n            <h3>Patskaņi — garš un īss</h3>\n            <p class=\"kurss-lesson-intro\">Vācu valodā patskaņi var būt gari vai īsi. Tas ietekmē vārda izrunu.</p>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Garš patskanis</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">warm (varm) — silts</div><div class=\"kurss-example\">gut (gūt) — labs</div><div class=\"kurss-example\">Tat (tāt) — darbs / rīcība</div><div class=\"kurss-example\">Flur (flūr) — gaitenis</div><div class=\"kurss-example\">Weg (vēk) — ceļš</div><div class=\"kurss-example\">Hut (hūt) — cepure</div><div class=\"kurss-example\">Hof (hōf) — pagalms</div><div class=\"kurss-example\">Schlaf (šlāf) — miegs</div></div>\n              <p>Ja pēc patskaņa seko viens līdzskanis, patskani bieži izrunā gari.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Īss patskanis</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Pilz (pilc) — sēne</div><div class=\"kurss-example\">Wort (vort) — vārds</div><div class=\"kurss-example\">Mund (munt) — mute</div><div class=\"kurss-example\">bald (balt) — drīz</div><div class=\"kurss-example\">scharf (šarf) — ass</div><div class=\"kurss-example\">Feld (felt) — lauks</div><div class=\"kurss-example\">voll (fol) — pilns</div></div>\n              <p>Ja pēc patskaņa seko divi vai vairāk līdzskaņi, patskani bieži izrunā īsi.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Galotnes en / el / er</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">singen (zingen) — dziedāt</div><div class=\"kurss-example\">tragen (trāgen) — nest</div><div class=\"kurss-example\">Garten (garten) — dārzs</div><div class=\"kurss-example\">Vogel (fogel) — putns</div><div class=\"kurss-example\">Segel (zēgel) — bura</div><div class=\"kurss-example\">Braten (brāten) — cepetis</div><div class=\"kurss-example\">Bogen (bōgen) — loks</div><div class=\"kurss-example\">Spiegel (špīgel) — spogulis</div><div class=\"kurss-example\">Finger (finger) — pirksts</div><div class=\"kurss-example\">Halter (halter) — turētājs</div><div class=\"kurss-example\">Arbeiter (arbaiter) — strādnieks</div><div class=\"kurss-example\">Häuser (hoizer) — mājas</div><div class=\"kurss-example\">wieder (vīder) — atkal</div><div class=\"kurss-example\">breiter (braiter) — platāks</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Burts h kā garumzīme</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Rahmen (rāmen) — rāmis</div><div class=\"kurss-example\">Ohr (ōr) — auss</div><div class=\"kurss-example\">Kohle (kōle) — ogles</div><div class=\"kurss-example\">Zahl (cāl) — skaitlis</div><div class=\"kurss-example\">ihn (īn) — viņu</div><div class=\"kurss-example\">ihm (īm) — viņam</div><div class=\"kurss-example\">Huhn (hūn) — vista</div><div class=\"kurss-example\">nahm (nām) — ņēma</div><div class=\"kurss-example\">nehmen (nēmen) — ņemt</div><div class=\"kurss-example\">Schuh (šū) — kurpe</div></div>\n              <p>Dažos vārdos h pagarina iepriekšējo patskani. Šādos gadījumos h parasti neizrunā.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Galotnes ar e</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Lampe (lampe) — lampa</div><div class=\"kurss-example\">Hase (hāze) — zaķis</div><div class=\"kurss-example\">Knabe (knābe) — zēns</div><div class=\"kurss-example\">Rabe (rābe) — krauklis</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Garais i = ie</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">die (dī) — artikuls “die”</div><div class=\"kurss-example\">diese (dīze) — šī / šie</div><div class=\"kurss-example\">wieder (vīder) — atkal</div><div class=\"kurss-example\">Fliege (flīge) — muša</div><div class=\"kurss-example\">Ziege (cīge) — kaza</div><div class=\"kurss-example\">Stiel (štīl) — kāts</div><div class=\"kurss-example\">Dieb (dīp) — zaglis</div><div class=\"kurss-example\">hier (hīr) — šeit</div></div>\n              <p>Garais i vācu valodā bieži tiek rakstīts kā ie.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Dubultie patskaņi</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Saal (zāl) — zāle</div><div class=\"kurss-example\">Saat (zāt) — sēja</div><div class=\"kurss-example\">Staat (štāt) — valsts</div><div class=\"kurss-example\">Beere (bēre) — oga</div><div class=\"kurss-example\">See (zē) — ezers / jūra</div><div class=\"kurss-example\">Beet (bēt) — dobe</div><div class=\"kurss-example\">Boot (bōt) — laiva</div><div class=\"kurss-example\">Moor (mōr) — purvs</div><div class=\"kurss-example\">Moos (mōs) — sūnas</div></div>\n              <p>Dubultie patskaņi parasti tiek izrunāti gari.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>ä</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Wand (vant) — siena</div><div class=\"kurss-example\">Wände (vende) — sienas</div><div class=\"kurss-example\">Vater (fāter) — tēvs</div><div class=\"kurss-example\">Väter (fēter) — tēvi</div><div class=\"kurss-example\">Schrank (šrank) — skapis</div><div class=\"kurss-example\">Schränke (šrenke) — skapji</div><div class=\"kurss-example\">Bank (bank) — sols / banka</div><div class=\"kurss-example\">Bänke (benke) — soli</div><div class=\"kurss-example\">Tal (tāl) — ieleja</div><div class=\"kurss-example\">Täler (tēler) — ielejas</div></div>\n              <p>ä ir a pārskaņojums.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>ö</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Rose (rōze) — roze</div><div class=\"kurss-example\">Röschen (rēschen) — rozīte</div><div class=\"kurss-example\">Ofen (ōfen) — krāsns</div><div class=\"kurss-example\">Öfen (ēfen) — krāsnis</div><div class=\"kurss-example\">Rock (rok) — svārki</div><div class=\"kurss-example\">Röcke (röke) — svārki</div></div>\n              <p>ö ir o pārskaņojums.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>ü</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">kurz (kurc) — īss</div><div class=\"kurss-example\">kürzer (kurcer) — īsāks</div><div class=\"kurss-example\">Kunst (kunst) — māksla</div><div class=\"kurss-example\">Künste (künste) — mākslas</div><div class=\"kurss-example\">Mutter (muter) — māte</div><div class=\"kurss-example\">Mütter (mutter) — mātes</div></div>\n              <p>ü ir u pārskaņojums.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Divskaņi: äu</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Baum (baum) — koks</div><div class=\"kurss-example\">Bäume (boime) — koki</div><div class=\"kurss-example\">Haus (haus) — māja</div><div class=\"kurss-example\">Häuser (hoizer) — mājas</div><div class=\"kurss-example\">Strauch (štrauh) — krūms</div><div class=\"kurss-example\">Sträucher (štroiher) — krūmi</div><div class=\"kurss-example\">Maus (maus) — pele</div><div class=\"kurss-example\">Mäuse (moize) — peles</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Divskaņi: eu</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">heute (hoite) — šodien</div><div class=\"kurss-example\">Leute (loite) — cilvēki</div><div class=\"kurss-example\">neu (noi) — jauns</div><div class=\"kurss-example\">neun (noin) — deviņi</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Divskaņi: ei</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">mein (main) — mans</div><div class=\"kurss-example\">dein (dain) — tavs</div><div class=\"kurss-example\">sein (zain) — viņa / viņas / būt</div><div class=\"kurss-example\">frei (frai) — brīvs</div><div class=\"kurss-example\">arbeiten (arbaiten) — strādāt</div></div>\n            </section>\n            <section class=\"kurss-lesson-section\">\n              <h4>2. lekcijas izrunas piezīmes</h4>\n              <ul class=\"kurss-summary-list\"><li>vārdos ich, nicht, rechnen, zeichnen “ch” izrunā mīksti</li><li>vārdos arbeiten un zeichnen “ei” izrunā kā “ai”</li><li>“sp” vārda sākumā izrunā kā “šp”</li><li>darbības vārdā tun burts “u” izrunājams garš</li></ul>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Kopsavilkums</h4>\n              <ul class=\"kurss-summary-list\"><li>viens līdzskanis pēc patskaņa → bieži garš patskanis</li><li>divi vai vairāk līdzskaņi → bieži īss patskanis</li><li>h var pagarināt patskani</li><li>ie bieži nozīmē garo i</li><li>dubultie patskaņi parasti ir gari</li></ul>\n            </section>",
  "kurssConsonantsLesson": "\n            <h3>Līdzskaņi un burtu savienojumi</h3>\n            <p class=\"kurss-lesson-intro\">Vācu valodā daži līdzskaņi un burtu savienojumi tiek izrunāti citādi nekā tos raksta. Šajā lekcijā ir svarīgākie piemēri iesācējam.</p>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Līdzskaņi</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">das Rad (rāt) — ritenis</div><div class=\"kurss-example\">die Räder (rēder) — riteņi</div><div class=\"kurss-example\">Bad (bāt) — vanna</div><div class=\"kurss-example\">Bäder (bēder) — vannas</div></div>\n              <p>Vārda beigās līdzskaņi bieži netiek izrunāti tāpat kā rakstīti.</p>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>ch</h4>\n              <p>“ch” var izrunāt mīksti vai cieti. Dažos vārdos tas skan kā “h”, citos tuvāk “k”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">rechnen (rehnen) — rēķināt</div><div class=\"kurss-example\">zeichnen (caihnen) — zīmēt</div><div class=\"kurss-example\">nicht (niht) — ne</div><div class=\"kurss-example\">schlecht (šleht) — slikts</div><div class=\"kurss-example\">mich (mih) — mani</div><div class=\"kurss-example\">dich (dih) — tevi</div><div class=\"kurss-example\">Strauch (štrauh) — krūms</div><div class=\"kurss-example\">noch (noh) — vēl</div><div class=\"kurss-example\">Nacht (naht) — nakts</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>sch</h4>\n              <p>“sch” vācu valodā izrunā kā latviešu “š”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Schule (šūle) — skola</div><div class=\"kurss-example\">Schüler (šūler) — skolēns</div><div class=\"kurss-example\">Schiff (šif) — kuģis</div><div class=\"kurss-example\">Schraube (šraube) — skrūve</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>sp un st vārda sākumā</h4>\n              <p>Vārda vai zilbes sākumā “sp” bieži izrunā kā “šp”, bet “st” kā “št”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">spielen (špīlen) — spēlēt</div><div class=\"kurss-example\">Sprung (šprung) — lēciens</div><div class=\"kurss-example\">stehen (štēen) — stāvēt</div><div class=\"kurss-example\">Stall (štal) — kūts</div><div class=\"kurss-example\">Stand (štant) — stāvoklis / vieta</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>qu</h4>\n              <p>“qu” vācu valodā parasti izrunā kā “kv”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Qual (kvāl) — mokas</div><div class=\"kurss-example\">Quartier (kvartīr) — kvartāls / apmešanās vieta</div><div class=\"kurss-example\">quer (kvēr) — šķērsām</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>s un z</h4>\n              <p>Vārda sākumā “s” bieži skan kā “z”. Burts “z” vācu valodā skan kā latviešu “c”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">sagen (zāgen) — teikt</div><div class=\"kurss-example\">singen (zingen) — dziedāt</div><div class=\"kurss-example\">Rose (rōze) — roze</div><div class=\"kurss-example\">Zahl (cāl) — skaitlis</div><div class=\"kurss-example\">Zeit (cait) — laiks</div><div class=\"kurss-example\">Zink (cink) — cinks</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>v</h4>\n              <p>Vācu valodā “v” bieži izrunā kā “f”. Svešvārdos tas bieži skan kā latviešu “v”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Vater (fāter) — tēvs</div><div class=\"kurss-example\">von (fon) — no</div><div class=\"kurss-example\">viel (fīl) — daudz</div><div class=\"kurss-example\">vier (fīr) — četri</div><div class=\"kurss-example\">Villa (villa) — villa</div><div class=\"kurss-example\">Klavier (klavīr) — klavieres</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>x un y</h4>\n              <p>“x” izrunā kā “ks”. “y” dažos vārdos izrunā kā “ü”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Felix (fēliks) — Fēlikss</div><div class=\"kurss-example\">Axt (akst) — cirvis</div><div class=\"kurss-example\">Mystik (mūstik) — mistika</div><div class=\"kurss-example\">Nyx (nūks) — Nikse</div><div class=\"kurss-example\">Mythe (mūte) — mīts</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>ß</h4>\n              <p>“ß” vācu valodā izrunā kā “s”.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Fuß (fūs) — pēda</div><div class=\"kurss-example\">Füße (fūse) — pēdas</div><div class=\"kurss-example\">Grüße (grūse) — sveicieni</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Kopsavilkums</h4>\n              <ul class=\"kurss-summary-list\"><li>sch → š</li><li>sp / st sākumā → šp / št</li><li>qu → kv</li><li>z → c</li><li>v bieži → f</li><li>x → ks</li><li>ß → s</li></ul>\n            </section>",
  "kurssVerbBasicsLesson": "\n            <h3>Darbības vārdu pamati</h3>\n            <p class=\"kurss-lesson-intro\">1. lekcijas darbības vārdi un locījumi.</p>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Darbības vārdi</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">kommen — nākt</div><div class=\"kurss-example\">gehen — iet</div><div class=\"kurss-example\">stehen — stāvēt</div><div class=\"kurss-example\">singen — dziedāt</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>kommen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich komme — es nāku</div><div class=\"kurss-example\">du kommst — tu nāc</div><div class=\"kurss-example\">er kommt — viņš nāk</div><div class=\"kurss-example\">sie kommt — viņa nāk</div><div class=\"kurss-example\">wir kommen — mēs nākam</div><div class=\"kurss-example\">ihr kommt — jūs nākat</div><div class=\"kurss-example\">sie kommen — viņi / viņas nāk</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>gehen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich gehe — es eju</div><div class=\"kurss-example\">du gehst — tu ej</div><div class=\"kurss-example\">er geht — viņš iet</div><div class=\"kurss-example\">sie geht — viņa iet</div><div class=\"kurss-example\">wir gehen — mēs ejam</div><div class=\"kurss-example\">ihr geht — jūs ejat</div><div class=\"kurss-example\">sie gehen — viņi / viņas iet</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>stehen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich stehe — es stāvu</div><div class=\"kurss-example\">du stehst — tu stāvi</div><div class=\"kurss-example\">er steht — viņš stāv</div><div class=\"kurss-example\">sie steht — viņa stāv</div><div class=\"kurss-example\">wir stehen — mēs stāvam</div><div class=\"kurss-example\">ihr steht — jūs stāvat</div><div class=\"kurss-example\">sie stehen — viņi / viņas stāv</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>singen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich singe — es dziedu</div><div class=\"kurss-example\">du singst — tu dziedi</div><div class=\"kurss-example\">er singt — viņš dzied</div><div class=\"kurss-example\">sie singt — viņa dzied</div><div class=\"kurss-example\">wir singen — mēs dziedam</div><div class=\"kurss-example\">ihr singt — jūs dziedat</div><div class=\"kurss-example\">sie singen — viņi / viņas dzied</div></div>\n            </section>\n            <section class=\"kurss-lesson-section\">\n              <h4>2. lekcijas darbības vārdi</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">spielen — spēlēt</div><div class=\"kurss-example\">arbeiten — strādāt</div><div class=\"kurss-example\">fragen — jautāt</div><div class=\"kurss-example\">antworten — atbildēt</div><div class=\"kurss-example\">rechnen — rēķināt</div><div class=\"kurss-example\">zeichnen — zīmēt</div><div class=\"kurss-example\">tun — darīt</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>spielen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich spiele — es spēlēju</div><div class=\"kurss-example\">du spielst — tu spēlē</div><div class=\"kurss-example\">er spielt — viņš spēlē</div><div class=\"kurss-example\">sie spielt — viņa spēlē</div><div class=\"kurss-example\">wir spielen — mēs spēlējam</div><div class=\"kurss-example\">ihr spielt — jūs spēlējat</div><div class=\"kurss-example\">sie spielen — viņi / viņas spēlē</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>arbeiten</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich arbeite — es strādāju</div><div class=\"kurss-example\">du arbeitest — tu strādā</div><div class=\"kurss-example\">er arbeitet — viņš strādā</div><div class=\"kurss-example\">sie arbeitet — viņa strādā</div><div class=\"kurss-example\">wir arbeiten — mēs strādājam</div><div class=\"kurss-example\">ihr arbeitet — jūs strādājat</div><div class=\"kurss-example\">sie arbeiten — viņi / viņas strādā</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>fragen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich frage — es jautāju</div><div class=\"kurss-example\">du fragst — tu jautā</div><div class=\"kurss-example\">er fragt — viņš jautā</div><div class=\"kurss-example\">sie fragt — viņa jautā</div><div class=\"kurss-example\">wir fragen — mēs jautājam</div><div class=\"kurss-example\">ihr fragt — jūs jautājat</div><div class=\"kurss-example\">sie fragen — viņi / viņas jautā</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>antworten</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich antworte — es atbildu</div><div class=\"kurss-example\">du antwortest — tu atbildi</div><div class=\"kurss-example\">er antwortet — viņš atbild</div><div class=\"kurss-example\">sie antwortet — viņa atbild</div><div class=\"kurss-example\">wir antworten — mēs atbildam</div><div class=\"kurss-example\">ihr antwortet — jūs atbildat</div><div class=\"kurss-example\">sie antworten — viņi / viņas atbild</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>rechnen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich rechne — es rēķinu</div><div class=\"kurss-example\">du rechnest — tu rēķini</div><div class=\"kurss-example\">er rechnet — viņš rēķina</div><div class=\"kurss-example\">sie rechnet — viņa rēķina</div><div class=\"kurss-example\">wir rechnen — mēs rēķinām</div><div class=\"kurss-example\">ihr rechnet — jūs rēķināt</div><div class=\"kurss-example\">sie rechnen — viņi / viņas rēķina</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>zeichnen</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich zeichne — es zīmēju</div><div class=\"kurss-example\">du zeichnest — tu zīmē</div><div class=\"kurss-example\">er zeichnet — viņš zīmē</div><div class=\"kurss-example\">sie zeichnet — viņa zīmē</div><div class=\"kurss-example\">wir zeichnen — mēs zīmējam</div><div class=\"kurss-example\">ihr zeichnet — jūs zīmējat</div><div class=\"kurss-example\">sie zeichnen — viņi / viņas zīmē</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>tun</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">ich tue — es daru</div><div class=\"kurss-example\">du tust — tu dari</div><div class=\"kurss-example\">er tut — viņš dara</div><div class=\"kurss-example\">sie tut — viņa dara</div><div class=\"kurss-example\">wir tun — mēs darām</div><div class=\"kurss-example\">ihr tut — jūs darāt</div><div class=\"kurss-example\">sie tun — viņi / viņas dara</div></div>\n            </section>",
  "kurssSentenceStructureLesson": "\n            <h3>Teikumu uzbūve</h3>\n            <p class=\"kurss-lesson-intro\">Jautājuma teikumā darbības vārds vācu valodā parasti stāv pirmajā vietā.</p>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Piemēri</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Du kommst. — Tu nāc.</div><div class=\"kurss-example\">Kommst du? — Vai tu nāc?</div><div class=\"kurss-example\">Er singt. — Viņš dzied.</div><div class=\"kurss-example\">Singt er? — Vai viņš dzied?</div><div class=\"kurss-example\">Stehst du? — Vai tu stāvi?</div><div class=\"kurss-example\">Ja, ich stehe. — Jā, es stāvu.</div><div class=\"kurss-example\">Geht ihr? — Vai jūs ejat?</div><div class=\"kurss-example\">Ja, wir gehen. — Jā, mēs ejam.</div></div>\n            </section>\n            <section class=\"kurss-lesson-section\">\n              <h4>Jautājumi ar “was”</h4>\n              <p>Ja jautājums sākas ar jautājamo vārdu, darbības vārds vācu valodā parasti stāv tūlīt aiz jautājamā vārda.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Was tust du? — Ko tu dari?</div><div class=\"kurss-example\">Was tut er? — Ko viņš dara?</div><div class=\"kurss-example\">Was tut sie? — Ko viņa dara?</div><div class=\"kurss-example\">Was tun sie? — Ko viņi / viņas dara?</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Noliegums ar “nicht”</h4>\n              <p>Ja noliegums “nicht” attiecas uz darbības vārdu, tas vācu valodā parasti stāv pēc darbības vārda.</p>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Ich spiele nicht. — Es nespēlēju.</div><div class=\"kurss-example\">Paul fragt nicht. — Pauls nejautā.</div><div class=\"kurss-example\">Er kommt nicht. — Viņš nenāk.</div><div class=\"kurss-example\">Sie singen nicht. — Viņi / viņas nedzied.</div></div>\n            </section>\n\n            <section class=\"kurss-lesson-section\">\n              <h4>Teikumi no 2. lekcijas</h4>\n              <div class=\"kurss-examples\"><div class=\"kurss-example\">Spielst du? — Vai tu spēlē?</div><div class=\"kurss-example\">Nein, ich spiele nicht, ich arbeite. — Nē, es nespēlēju, es strādāju.</div><div class=\"kurss-example\">Paul fragt nicht, er arbeitet. — Pauls nejautā, viņš strādā.</div><div class=\"kurss-example\">Arbeitest du? — Vai tu strādā?</div><div class=\"kurss-example\">Nein, ich arbeite nicht, ich singe. — Nē, es nestrādāju, es dziedu.</div><div class=\"kurss-example\">Was tut Paul? — Ko dara Pauls?</div><div class=\"kurss-example\">Er spielt. — Viņš spēlē.</div><div class=\"kurss-example\">Was tut Marie? — Ko dara Marija?</div><div class=\"kurss-example\">Sie singt. — Viņa dzied.</div><div class=\"kurss-example\">Paul spielt, aber Marie singt. — Pauls spēlē, bet Marija dzied.</div><div class=\"kurss-example\">Singt ihr? — Vai jūs dziedat?</div><div class=\"kurss-example\">Nein, wir singen nicht, wir arbeiten. — Nē, mēs nedziedam, mēs strādājam.</div><div class=\"kurss-example\">Was tun Paul und Marie? — Ko dara Pauls un Marija?</div><div class=\"kurss-example\">Sie fragen. — Viņi jautā.</div><div class=\"kurss-example\">Sie antworten nicht. — Viņi neatbild.</div><div class=\"kurss-example\">Wer arbeitet? — Kas strādā?</div><div class=\"kurss-example\">Wir arbeiten. — Mēs strādājam.</div><div class=\"kurss-example\">Wir rechnen und zeichnen. — Mēs rēķinām un zīmējam.</div><div class=\"kurss-example\">Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen. — Viņi / viņas nāk, jautā, atbild, strādā, spēlē, dzied un iet.</div></div>\n            </section>",
  "kurssLesson2": "            \u003ch3\u003eLekcija 2\u003c/h3\u003e\n            \u003cp class=\"kurss-lesson-intro\"\u003eOtrā lekcija: dialogi, vārdi, izruna, gramatika un pārtulkošana.\u003c/p\u003e\n            \u003cdetails class=\"lesson1-accordion\" open\u003e\n              \u003csummary\u003e\u003cspan class=\"lesson1-number lesson1-number-red\"\u003e1.\u003c/span\u003e\u003cspan\u003eDialogi / teikumi\u003c/span\u003e\u003cspan class=\"lesson1-chevron\"\u003e⌃\u003c/span\u003e\u003c/summary\u003e\n              \u003cdiv class=\"lesson1-content\"\u003e\n                \u003cdiv class=\"lesson1-card-grid\"\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eSpielst du?\u003cbr\u003eNein, ich spiele nicht, ich arbeite.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003ePaul fragt nicht, er arbeitet.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eArbeitest du?\u003cbr\u003eNein, ich arbeite nicht, ich singe.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eWas tut Paul?\u003cbr\u003eEr spielt.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eWas tut Marie?\u003cbr\u003eSie singt.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003ePaul spielt, aber Marie singt.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eSingt ihr?\u003cbr\u003eNein, wir singen nicht, wir arbeiten.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eWas tun Paul und Marie?\u003cbr\u003eSie fragen.\u003cbr\u003eSie antworten nicht.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eWer arbeitet?\u003cbr\u003eWir arbeiten.\u003cbr\u003eWir rechnen und zeichnen.\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eSie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen.\u003c/div\u003e\n                \u003c/div\u003e\n              \u003c/div\u003e\n            \u003c/details\u003e\n            \u003cdetails class=\"lesson1-accordion\"\u003e\n              \u003csummary\u003e\u003cspan class=\"lesson1-number lesson1-number-green\"\u003e2.\u003c/span\u003e\u003cspan\u003eVārdi\u003c/span\u003e\u003cspan class=\"lesson1-chevron\"\u003e⌄\u003c/span\u003e\u003c/summary\u003e\n              \u003cdiv class=\"lesson1-content\"\u003e\n                \u003cdiv class=\"lesson1-card-grid\"\u003e\n                  \u003cdiv class=\"kurss-example\"\u003espielen — rotaļāties; spēlēt\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003enein — nē\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003enicht — ne\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003earbeiten — strādāt\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003efragen — jautāt\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003ewas tut er? — ko viņš dara?\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003ewas tun sie? — ko viņi / viņas dara?\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eaber — bet\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eantworten — atbildēt\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003erechnen — rēķināt\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003ezeichnen — zīmēt\u003c/div\u003e\n                  \u003cdiv class=\"kurss-example\"\u003eMarie — Marija\u003c/div\u003e\n                \u003c/div\u003e\n              \u003c/div\u003e\n            \u003c/details\u003e\n                        <details class=\"lesson1-accordion\">\n              <summary><span class=\"lesson1-number lesson1-number-purple\">3.</span><span>Izruna</span><span class=\"lesson1-chevron\">⌄</span></summary>\n              <div class=\"lesson1-content\">\n                <div class=\"lesson1-card-grid\"><div class=\"kurss-example\">Vārdos ich, nicht, rechnen, zeichnen skaņu ch izrunā mīksti, apmēram tā, kā latviski vārdos: technika, Frīdrihs.</div><div class=\"kurss-example\">Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.</div><div class=\"kurss-example\">Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).</div><div class=\"kurss-example\">Darbības vārdā tun u izrunājams gari visās personās.</div></div>\n              </div>\n            </details>\n\u003cdetails class=\"lesson1-accordion\"\u003e\n              \u003csummary\u003e\u003cspan class=\"lesson1-number lesson1-number-blue\"\u003e4.\u003c/span\u003e\u003cspan\u003eGramatika\u003c/span\u003e\u003cspan class=\"lesson1-chevron\"\u003e⌄\u003c/span\u003e\u003c/summary\u003e\n              \u003cdiv class=\"lesson1-content lesson1-grammar-content\"\u003e\n                \u003csection class=\"lesson1-block\"\u003e\n                  \u003ch4 class=\"lesson1-grammar-header\"\u003e\u003cspan\u003e1\u003c/span\u003eGalotnes ar e\u003c/h4\u003e\n                  \u003cdiv class=\"lesson1-grammar-note\"\u003eJa darbības vārda celms beidzas ar t, d, chn, tad lokot galotņu -st un -t priekšā stāv e.\u003c/div\u003e\n                  \u003ch5 class=\"lesson2-subtitle\"\u003earbeiten\u003c/h5\u003e\n                  \u003cdiv class=\"lesson1-card-grid\"\u003e\u003cdiv class=\"kurss-example\"\u003eich arbeite\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003edu arbeitest\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eer arbeitet\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003esie arbeitet\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003ewir arbeiten\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eihr arbeitet\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003esie arbeiten\u003c/div\u003e\u003c/div\u003e\n                  \u003ch5 class=\"lesson2-subtitle\"\u003erechnen\u003c/h5\u003e\n                  \u003cdiv class=\"lesson1-card-grid\"\u003e\u003cdiv class=\"kurss-example\"\u003eich rechne\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003edu rechnest\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eer rechnet\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003esie rechnet\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003ewir rechnen\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eihr rechnet\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003esie rechnen\u003c/div\u003e\u003c/div\u003e\n                  \u003ch5 class=\"lesson2-subtitle\"\u003etun\u003c/h5\u003e\n                  \u003cdiv class=\"lesson1-card-grid\"\u003e\u003cdiv class=\"kurss-example\"\u003eich tue\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003edu tust\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eer tut\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003esie tut\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003ewir tun\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eihr tut\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003esie tun\u003c/div\u003e\u003c/div\u003e\n                \u003c/section\u003e\n                \u003csection class=\"lesson1-block\"\u003e\n                  \u003ch4 class=\"lesson1-grammar-header\"\u003e\u003cspan\u003e2\u003c/span\u003eJautājamais vārds\u003c/h4\u003e\n                  \u003cdiv class=\"lesson1-grammar-note\"\u003eJautājamos teikumos, kas sākas ar jautājamo vārdu, piemēram: ko? kas? kurš? kāpēc? kādēļ? etc., darbības vārds stāv tūlīt aiz jautājamā vārda.\u003c/div\u003e\n                  \u003cdiv class=\"lesson1-card-grid\"\u003e\u003cdiv class=\"kurss-example\"\u003eWas tust du? — Ko tu dari?\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eWas tut er? — Ko viņš dara?\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eWas tut sie? — Ko viņa dara?\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eWas tun sie? — Ko viņi / viņas dara?\u003c/div\u003e\u003c/div\u003e\n                \u003c/section\u003e\n                \u003csection class=\"lesson1-block\"\u003e\n                  \u003ch4 class=\"lesson1-grammar-header\"\u003e\u003cspan\u003e3\u003c/span\u003eNoliegums ar nicht\u003c/h4\u003e\n                  \u003cdiv class=\"lesson1-grammar-note\"\u003eJa noliegums nicht attiecas uz darbības vārdu, tad noliedzamais vārds stāv pēc darbības vārda.\u003c/div\u003e\n                  \u003cdiv class=\"lesson1-card-grid\"\u003e\u003cdiv class=\"kurss-example\"\u003eEr kommt nicht. — Viņš nenāk.\u003c/div\u003e\u003cdiv class=\"kurss-example\"\u003eSie singen nicht. — Viņi nedzied.\u003c/div\u003e\u003c/div\u003e\n                \u003c/section\u003e\n              \u003c/div\u003e\n            \u003c/details\u003e\n                                    \u003cdetails class=\"lesson1-accordion\"\u003e\n              \u003csummary\u003e\u003cspan class=\"lesson1-number lesson1-number-orange\"\u003e5.\u003c/span\u003e\u003cspan\u003ePārtulko\u003c/span\u003e\u003cspan class=\"lesson1-chevron\"\u003e⌄\u003c/span\u003e\u003c/summary\u003e\n              \u003cdiv class=\"lesson1-content\"\u003e\n                \u003cdiv class=\"lesson1-training-wrap\"\u003e\n                  \u003cbutton class=\"lesson1-training-flashcard\" type=\"button\" data-lesson2-training-card data-training-index=\"0\" data-showing-back=\"false\" aria-label=\"Lekcija 2 pārtulkošanas kartīte\"\u003e\n                    \u003cspan class=\"lesson1-training-progress\"\u003eLekcija 2 · Pārtulko: 1 / 15\u003c/span\u003e\n                    \u003cspan class=\"lesson1-training-text\"\u003eKas jautā?\u003c/span\u003e\n                  \u003c/button\u003e\n                  \u003cp class=\"lesson1-training-hint\"\u003eKlikšķini uz kartītes, lai redzētu vācu tulkojumu. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.\u003c/p\u003e\n                \u003c/div\u003e\n              \u003c/div\u003e\n            \u003c/details\u003e",
  "kurssLesson6": `
    <h3>Lekcija 6</h3>
    <p class="kurss-lesson-intro">Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example">Edgar nimmt ein Messer, zwei Messer, drei Messer.</div><div class="kurss-example">Er legt die Messer wieder hin.</div><div class="kurss-example">Alle Messer sind scharf.</div><div class="kurss-example">Dann nimmt er wieder ein Messer.</div><div class="kurss-example">Er macht das Messer auf.</div><div class="kurss-example">Er nimmt den Bleistift.</div><div class="kurss-example">Er spitzt den Bleistift an.</div><div class="kurss-example">Er legt das Messer hin.</div><div class="kurss-example">Er setzt sich und zeichnet.</div><div class="kurss-example">Was zeichnet er? Er zeichnet einen Schlüssel.</div><div class="kurss-example">Gertrud zeichnet ein Fenster und eine Tafel.</div><div class="kurss-example">Anna zeichnet einen Garten.</div><div class="kurss-example">Hier liegen vier Löffel.</div><div class="kurss-example">Dort liegen fünf Nadeln.</div><div class="kurss-example">Gertrud kommt und zählt die Löffel: das ist ein Löffel; das sind zwei, drei, vier Löffel.</div><div class="kurss-example">Anna zählt die Nadeln: das ist eine Nadel; das sind zwei, drei, vier, fünf Nadeln.</div><div class="kurss-example">Wieviel Nadeln sind hier?</div><div class="kurss-example">Hier ist eine Nadel.</div><div class="kurss-example">Dort sind zwei, drei, vier Nadeln.</div><div class="kurss-example">Fünf Schlüssel sind hier.</div><div class="kurss-example">Sechs Löffel sind dort.</div><div class="kurss-example">Was ist das?</div><div class="kurss-example">Das ist ein Hammer. Das sind fünf Hämmer.</div><div class="kurss-example">Das ist ein Deckel. Das sind sechs Deckel.</div><div class="kurss-example">Das ist ein Eimer. Das sind sieben Eimer.</div><div class="kurss-example">Das ist ein Teller. Das sind acht Teller.</div><div class="kurss-example">Das ist ein Wagen. Das sind neun Wagen.</div><div class="kurss-example">Das ist ein Schlitten. Das sind zehn Schlitten.</div><div class="kurss-example">Wie sind die Dinge?</div><div class="kurss-example">Der Hammer ist klein. Die Hämmer sind klein.</div><div class="kurss-example">Der Deckel ist groß. Die Deckel sind groß.</div><div class="kurss-example">Der Eimer ist voll. Die Eimer sind voll.</div><div class="kurss-example">Der Teller ist leer. Die Teller sind leer.</div><div class="kurss-example">Der Wagen ist schwer. Die Wagen sind schwer.</div><div class="kurss-example">Der Schlitten ist leicht. Die Schlitten sind leicht.</div></div></div>
    </details>

    <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-green">2.</span><span>Vārdi</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">liegt — atrodas, ir, guļ</div><div class="kurss-example">der Bleistift (bleištift) — zīmulis</div><div class="kurss-example">einige (einige) — daži</div><div class="kurss-example">hinlegen — nolikt</div><div class="kurss-example">legt hin — noliek</div><div class="kurss-example">wieder (vīder) — atkal</div><div class="kurss-example">aufmachen — attaīsīt</div><div class="kurss-example">er macht auf — viņš attaisa</div><div class="kurss-example">anspitzen (anšpicen) — uzsmailināt</div><div class="kurss-example">er spitzt an — viņš uzsmailina</div><div class="kurss-example">sich setzen — apsēsties</div><div class="kurss-example">setzt sich — apsēžas</div><div class="kurss-example">der Schlüssel (šlūsel) — atslēga</div><div class="kurss-example">das Fenster (fenster) — logs</div><div class="kurss-example">die Tafel (dī tāfel) — tāfele</div><div class="kurss-example">der Garten — dārzs</div><div class="kurss-example">der Löffel — karote</div><div class="kurss-example">zählen (cēlen) — skaitīt</div><div class="kurss-example">die Nadel — adata</div><div class="kurss-example">was ist das — kas tas ir?</div><div class="kurss-example">der Hammer — veseris</div><div class="kurss-example">die Hämmer — veseri</div><div class="kurss-example">der Deckel (dēr dekel) — vāks</div><div class="kurss-example">der Teller — šķīvis</div><div class="kurss-example">der Wagen — rati</div><div class="kurss-example">der Schlitten — ragavas, kamanas</div><div class="kurss-example">das Ding — lieta</div><div class="kurss-example">die Dinge — lietas</div><div class="kurss-example">wie sind die Dinge? — kādas ir lietas?</div><div class="kurss-example">voll (fōl) — pilns</div><div class="kurss-example">leer (lēr) — tukšs</div><div class="kurss-example">schwer (švēr) — smags, grūts</div><div class="kurss-example">leicht — viegls</div><div class="kurss-example">der Eimer — spainis</div><div class="kurss-example">wieviel (vīfīl) — cik</div><div class="kurss-example">wieviel Nadeln — cik adatu</div><div class="kurss-example">hier (hīr) — šeit</div><div class="kurss-example">dort — tur</div></div></div>
    </details>

    <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-purple">3.</span><span>Izruna</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.</div><div class="kurss-example">Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).</div><div class="kurss-example">ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.</div><div class="kurss-example">Piemēri: fünf, der Schlüssel (šlūsel).</div><div class="kurss-example">ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.</div><div class="kurss-example">Divkāršots patskanis apzīmē garu patskani: leer (lēr).</div><div class="kurss-example">Divskani eu izrunā kā oi: neun (noin).</div></div></div>
    </details>

    <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-blue">4.</span><span>Gramatika</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content lesson1-grammar-content">
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">Gramatika un paskaidrojumi</h4><div class="lesson1-card-grid"><div class="kurss-example">Salikta darbības vārda uzsvērtais priedēklis tagadnē atdalās no darbības vārda un stāv teikuma beigās.</div><div class="kurss-example">Piemēri: hinlegen — er legt hin; aufmachen — er macht auf; anspitzen — er spitzt an.</div><div class="kurss-example">Skaitļa vārds viens ir visās trīs kārtās, ja to lieto ar lietvārdu: vīriešu kārtā ein, sieviešu kārtā eine, vidējā kārtā ein.</div><div class="kurss-example">Piemēri: ein Schüler — viens skolnieks; eine Schülerin — viena skolniece; ein Kind — viens bērns.</div><div class="kurss-example">Skaitļi: eins, zwei, drei, vier (fīr), fünf, sechs (zeks), sieben (zīben), acht, neun (noin), zehn (cēn).</div><div class="kurss-example">Saitaiņa vācu valodā ir vienskaitļa un daudzskaitļa forma: der Schüler ist klein; die Schüler sind klein.</div><div class="kurss-example">Norādāmais vietniekvārds tas latviešu valodā mainās skaitlī un kārtā, bet vācu valodā lieto vienu formu: das.</div><div class="kurss-example">Piemēri: tas ir veseris — das ist ein Hammer; tā ir adata — das ist eine Nadel; tie ir veseri — das sind Hämmer; tās ir adatas — das sind Nadeln.</div><div class="kurss-example">Der Wagen — rati un der Schlitten — ragavas latviešu valodā ir daudzskaitlinieki, bet vācu valodā šos vārdus lieto vienskaitlī un daudzskaitlī.</div><div class="kurss-example">Vīriešu un vidējās kārtas lietvārdi ar galotni -er, -el, -en daudzskaitlī bieži nepieņem galotni.</div><div class="kurss-example">Piemēri: der Hammer — die Hämmer; der Garten — die Gärten; das Fenster — die Fenster; das Messer — die Messer.</div><div class="kurss-example">Sieviešu kārtas lietvārdi ar galotni -el, -er daudzskaitlī pieņem -n.</div><div class="kurss-example">Piemēri: die Nadel — die Nadeln; die Feder — die Federn.</div><div class="kurss-example">Izņēmumi: die Mutter (māte) — die Mütter (mātes); die Tochter (meita) — die Töchter (meitas).</div><div class="kurss-example">Nenoteiktajam artikulam daudzskaitļa nav: das ist ein Wagen — das sind Wagen; das ist eine Nadel — das sind Nadeln.</div><div class="kurss-example">Stāstāmā teikumā izteicējs-darbības vārds stāv otrā vietā: er legt den Schlüssel hin; dann legt er den Schlüssel hin.</div></div></section>
      </div>
    </details>

    <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-orange">5.</span><span>Pārtulko</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-training-wrap"><button class="lesson1-training-flashcard" type="button" data-lesson6-training-card data-training-index="0" data-showing-back="false" aria-label="Lekcija 6 pārtulkošanas kartīte"><span class="lesson1-training-progress">Lekcija 6 · Pārtulko: 1 / 21</span><span class="lesson1-training-text">Pauls ņem zīmuli un zīmē.</span></button><p class="lesson1-training-hint">Klikšķini uz kartītes, lai redzētu vācu tulkojumu. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.</p></div></div>
    </details>
  `,

  "kurssLesson5": `
    <h3>Lekcija 5</h3>
    <p class="kurss-lesson-intro">Wen?, akuzatīvs, sitzen, fragen un -in galotne.</p>

    <details class="lesson1-accordion" open>
      <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid">
        <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div>
        <div class="kurss-example">Wer steht und antwortet? Der Schüler steht und antwortet.</div>
        <div class="kurss-example">Wie antwortet der Schüler? Der Schüler antwortet gut.</div>
        <div class="kurss-example">Wen lobt der Lehrer? Der Lehrer lobt den Schüler.</div>
        <div class="kurss-example">Wie ist der Schüler? Der Schüler ist klein.</div>
        <div class="kurss-example">Ist der Schüler klein oder groß? Er ist klein.</div>
        <div class="kurss-example">Wen fragt die Lehrerin? Die Lehrerin fragt die Schülerin.</div>
        <div class="kurss-example">Wie antwortet die Schülerin? Die Schülerin antwortet schlecht.</div>
        <div class="kurss-example">Was tut die Lehrerin? Sie tadelt die Schülerin.</div>
        <div class="kurss-example">Die Schülerin ist nicht klein, sie ist groß.</div>
        <div class="kurss-example">Ein Kind spielt. Das Kind ist artig.</div>
        <div class="kurss-example">Die Mutter liebt das Kind. Der Vater lobt das Kind.</div>
      </div></div>
    </details>

    <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-green">2.</span><span>Vārdi</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid">
        <div class="kurss-example">sitzen (zicen) — sēdēt</div>
        <div class="kurss-example">fragen (frāgen) — jautāt</div>
        <div class="kurss-example">der Lehrer (dēr lērer) — skolotājs</div>
        <div class="kurss-example">gut (gūt) — labi</div>
        <div class="kurss-example">wen (vēn) — ko</div>
        <div class="kurss-example">loben — slavēt</div>
        <div class="kurss-example">der Schüler (šūler) — skolnieks</div>
        <div class="kurss-example">klein — mazs</div>
        <div class="kurss-example">groß (grōs) — liels</div>
        <div class="kurss-example">die Lehrerin — skolotāja</div>
        <div class="kurss-example">die Schülerin — skolniece</div>
        <div class="kurss-example">schlecht (šleht) — slikti</div>
        <div class="kurss-example">tadeln — pelt</div>
        <div class="kurss-example">oder (ōder) — vai</div>
        <div class="kurss-example">das Kind (kint) — bērns</div>
        <div class="kurss-example">artig (ārtich) — rātns</div>
        <div class="kurss-example">die Mutter — māte</div>
        <div class="kurss-example">lieben (līben) — mīlēt</div>
        <div class="kurss-example">der Vater (fāter) — tēvs</div>
      </div></div>
    </details>

        <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-purple">3.</span><span>Izruna</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-card-grid">
        <div class="kurss-example">tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).</div>
        <div class="kurss-example">v vācu vārdos izrunā kā f: der Vater (fāter).</div>
        <div class="kurss-example">ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).</div>
      </div></div>
    </details>

<details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-blue">4.</span><span>Gramatika</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content lesson1-grammar-content">
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">Nominatīvs un akuzatīvs</h4><div class="lesson1-grammar-note">Latviešu valodā nominatīvs atbild uz jautājumu kas?, bet akuzatīvs uz jautājumu ko?.</div><div class="lesson1-card-grid"><div class="kurss-example">Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.</div><div class="kurss-example">Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.</div></div></section>
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">Artikulu maiņa akuzatīvā</h4><div class="lesson1-card-grid"><div class="kurss-example">Nominativ: der Vater, die Mutter, das Kind.</div><div class="kurss-example">Akkusativ: den Vater, die Mutter, das Kind.</div><div class="kurss-example">Nominativ: der Federhalter, die Feder, das Messer.</div><div class="kurss-example">Akkusativ: den Federhalter, die Feder, das Messer.</div></div></section>
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">sitzen</h4><div class="lesson1-card-grid"><div class="kurss-example">ich sitze</div><div class="kurss-example">du sitzt</div><div class="kurss-example">er/sie/es sitzt</div><div class="kurss-example">wir sitzen</div><div class="kurss-example">ihr sitzt</div><div class="kurss-example">sie sitzen</div></div></section>
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">fragen + akuzatīvs</h4><div class="lesson1-grammar-note">Darbības vārds fragen vācu valodā prasa akuzatīvu.</div><div class="lesson1-card-grid"><div class="kurss-example">Wen fragt der Lehrer?</div><div class="kurss-example">Der Lehrer fragt den Schüler.</div></div></section>
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">-in galotne</h4><div class="lesson1-card-grid"><div class="kurss-example">Daudz sieviešu kārtas vārdu atvasina ar galotni -in.</div><div class="kurss-example">die Lehrerin</div><div class="kurss-example">die Schülerin</div></div></section>
        <section class="lesson1-block"><h4 class="lesson1-grammar-header">Darbības vārda vieta</h4><div class="lesson1-card-grid"><div class="kurss-example">Stāstāmā teikumā darbības vārds stāv otrā vietā.</div><div class="kurss-example">Dann geht das Mädchen hinaus und arbeitet.</div><div class="kurss-example">Das Mädchen geht dann hinaus und arbeitet.</div></div></section>
      </div>
    </details>

    <details class="lesson1-accordion">
      <summary><span class="lesson1-number lesson1-number-orange">5.</span><span>Pārtulko</span><span class="lesson1-chevron">⌄</span></summary>
      <div class="lesson1-content"><div class="lesson1-training-wrap"><button class="lesson1-training-flashcard" type="button" data-lesson5-training-card data-training-index="0" data-showing-back="false" aria-label="Lekcija 5 pārtulkošanas kartīte"><span class="lesson1-training-progress">Lekcija 5 · Pārtulko: 1 / 16</span><span class="lesson1-training-text">Ko mīl tēvs?</span></button><p class="lesson1-training-hint">Klikšķini uz kartītes, lai redzētu vācu tulkojumu. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.</p></div></div>
    </details>
  `,
  "kurssLesson4": `            <h3>Lekcija 4</h3>
            <p class="kurss-lesson-intro">Akuzatīvs, nehmen, hinlegen, hinausgehen un īpašības vārdi.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class="kurss-example">Er fragt: „Wie ist der Federhalter?“</div><div class="kurss-example">Olga antwortet: „Der Federhalter ist schwarz.“</div><div class="kurss-example">Ist der Federhalter weiß? Nein, der Federhalter ist nicht weiß, er ist schwarz.</div><div class="kurss-example">Marie kommt und nimmt eine Feder.</div><div class="kurss-example">Sie fragt: „Wie ist die Feder?“</div><div class="kurss-example">Olga antwortet: „Die Feder ist spitz.“</div><div class="kurss-example">Ist die Feder stumpf? Nein, die Feder ist nicht stumpf, sie ist spitz.</div><div class="kurss-example">Was legt das Mädchen hin? Es legt die Feder hin.</div><div class="kurss-example">Was nimmst du? Ich nehme ein Messer.</div><div class="kurss-example">Wie ist das Messer? Das Messer ist scharf.</div><div class="kurss-example">Ist das Messer stumpf? Nein, es ist nicht stumpf, es ist scharf.</div><div class="kurss-example">Was legst du hin? Ich lege das Messer, die Feder und den Federhalter hin.</div><div class="kurss-example">Dann gehe ich hinaus und arbeite.</div></div></div>
            </details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-green">2.</span><span>Vārdi</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">nehmen (nēmen) — ņemt</div><div class="kurss-example">er nimmt (nimt) — viņš ņem</div><div class="kurss-example">der Federhalter (dēr fēderhalter) — spalvaskāts</div><div class="kurss-example">einen Federhalter — spalvaskātu</div><div class="kurss-example">zeigen — rādīt</div><div class="kurss-example">schwarz (švarc) — melns</div><div class="kurss-example">weiß (veis) — balts</div><div class="kurss-example">die Feder (dī fēder) — spalva</div><div class="kurss-example">eine Feder — spalvu</div><div class="kurss-example">spitz (špic) — smails</div><div class="kurss-example">hinlegen — nolikt</div><div class="kurss-example">legt hin — noliek</div><div class="kurss-example">das Mädchen (mētchen) — meitene</div><div class="kurss-example">das Messer — nazis</div><div class="kurss-example">ein Messer — nazi</div><div class="kurss-example">scharf — ass</div><div class="kurss-example">stumpf (štumpf) — neass, truls</div><div class="kurss-example">dann — tad</div><div class="kurss-example">hinaus — ārā</div><div class="kurss-example">hinausgehen — iziet, iet ārā</div></div></div></details>
                        <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-purple">3.</span><span>Izruna</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Galotnes -en, -er, -el ir neuzsvērtas, tāpēc e šajās galotnēs ir vāji sadzirdams: kommen, nehmen, der Federhalter.</div><div class="kurss-example">h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.</div><div class="kurss-example">Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).</div><div class="kurss-example">Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).</div></div></div></details>
<details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-blue">4.</span><span>Gramatika</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content lesson1-grammar-content"><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>1</span>Akuzatīvs</h4><div class="lesson1-grammar-note">Sieviešu un vidējā kārtā akuzatīvs ir vienāds ar nominatīvu. Mainās tikai vīriešu kārta.</div><div class="lesson1-card-grid"><div class="kurss-example">Nominativ: der Federhalter, die Feder, das Messer.</div><div class="kurss-example">Akkusativ: den Federhalter, die Feder, das Messer.</div><div class="kurss-example">Nominativ: ein Federhalter, eine Feder, ein Messer.</div><div class="kurss-example">Akkusativ: einen Federhalter, eine Feder, ein Messer.</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>2</span>nehmen</h4><div class="lesson1-card-grid"><div class="kurss-example">ich nehme</div><div class="kurss-example">du nimmst</div><div class="kurss-example">er/sie nimmt</div><div class="kurss-example">wir nehmen</div><div class="kurss-example">ihr nehmt</div><div class="kurss-example">sie nehmen</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>3</span>Vietniekvārdi</h4><div class="lesson1-card-grid"><div class="kurss-example">er — vīriešu kārta</div><div class="kurss-example">sie — sieviešu kārta</div><div class="kurss-example">es — vidējā kārta</div><div class="kurss-example">daudzskaitlī — sie</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>4</span>Atdalāmie darbības vārdi</h4><div class="lesson1-card-grid"><div class="kurss-example">hinlegen → ich lege das Messer hin</div><div class="kurss-example">hinausgehen → Marie geht hinaus</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>5</span>Īpašības vārdi</h4><div class="lesson1-grammar-note">Ja īpašības vārds teikumā ir izteicējs, tas nemainās ne kārtā, ne skaitlī.</div><div class="lesson1-card-grid"><div class="kurss-example">der Federhalter ist klein</div><div class="kurss-example">die Feder ist klein</div><div class="kurss-example">das Messer ist klein</div><div class="kurss-example">die Messer sind klein</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>6</span>Noliegums ar nicht</h4><div class="lesson1-grammar-note">Ja nicht noliedz īpašības vārdu, tas stāv noliedzamā vārda priekšā.</div><div class="lesson1-card-grid"><div class="kurss-example">der Federhalter ist nicht weiß</div><div class="kurss-example">das Messer ist nicht scharf</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>7</span>-chen / -lein</h4><div class="lesson1-card-grid"><div class="kurss-example">Lietvārdi ar galotni -chen un -lein ir vidējā kārtā: das Mädchen.</div></div></section></div></details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-orange">5.</span><span>Pārtulko</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-training-wrap"><button class="lesson1-training-flashcard" type="button" data-lesson4-training-card data-training-index="0" data-showing-back="false" aria-label="Lekcija 4 pārtulkošanas kartīte"><span class="lesson1-training-progress">Lekcija 4 · Pārtulko: 1 / 16</span><span class="lesson1-training-text">Meitene ņem spalvas kātu.</span></button><p class="lesson1-training-hint">Klikšķini uz kartītes, lai redzētu vācu tulkojumu. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.</p></div></div></details>`,
  "kurssLesson3": `            <h3>Lekcija 3</h3>
            <p class="kurss-lesson-intro">Trešā lekcija: dialogi, vārdi, izruna, gramatika un pārtulkošana.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br>Paul und Anna kommen.</div><div class="kurss-example">Was steht hier?<br>Hier steht ein Tisch.</div><div class="kurss-example">Was steht dort?<br>Dort steht eine Bank.</div><div class="kurss-example">Was liegt hier?<br>Hier liegt ein Buch.</div><div class="kurss-example">Was liegt dort?<br>Dort liegt ein Heft.</div><div class="kurss-example">Was hängt hier?<br>Hier hängt ein Bild.</div><div class="kurss-example">Was hängt dort?<br>Dort hängt eine Tafel.</div><div class="kurss-example">Wie ist das Buch?<br>Das Buch ist dick.</div><div class="kurss-example">Wie ist das Heft?<br>Das Heft ist dünn.</div><div class="kurss-example">Wie ist die Bank?<br>Die Bank ist niedrig.</div><div class="kurss-example">Wie ist der Tisch?<br>Der Tisch ist hoch.</div></div></div>
            </details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-green">2.</span><span>Vārdi</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">wer — kas</div><div class="kurss-example">was — kas</div><div class="kurss-example">hier — šeit</div><div class="kurss-example">dort — tur</div><div class="kurss-example">der Tisch — galds</div><div class="kurss-example">ein Tisch — galds</div><div class="kurss-example">die Bank — sols</div><div class="kurss-example">eine Bank — sols</div><div class="kurss-example">liegen — atrasties guļus</div><div class="kurss-example">liegt hier ein Buch? — vai šeit ir / atrodas grāmata?</div><div class="kurss-example">das Buch — grāmata</div><div class="kurss-example">ein Buch — grāmata</div><div class="kurss-example">hängen — karāties</div><div class="kurss-example">das Bild — bilde</div><div class="kurss-example">ein Bild — bilde</div><div class="kurss-example">die Tafel — tāfele</div><div class="kurss-example">eine Tafel — tāfele</div><div class="kurss-example">wie — kāds, kāda</div><div class="kurss-example">ist — ir</div><div class="kurss-example">dick — biezs, resns</div><div class="kurss-example">das Heft — burtnīca</div><div class="kurss-example">ein Heft — burtnīca</div><div class="kurss-example">dünn — plāns, tievs</div><div class="kurss-example">niedrig — zems</div><div class="kurss-example">hoch — augsts</div></div></div></details>
                        <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-purple">3.</span><span>Izruna</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).</div><div class="kurss-example">ck ir divkāršs k: dick (dikk).</div><div class="kurss-example">Īpašības un apstākļu vārdos galotne -ig izskan kā viegls -ich: niedrig (nīdrich).</div><div class="kurss-example">Ja galotne -ig beidzas ar e: -ige, tad g izrunā kā noteiktu g skaņu: niedrige (nīdrige) Bänke.</div></div></div></details>
<details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-blue">4.</span><span>Gramatika</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content lesson1-grammar-content"><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>1</span>Teikuma priekšmets</h4><div class="lesson1-grammar-note">Teikuma priekšmets vācu valodā atbild uz jautājumu wer? / was? un stāv nominatīvā.</div><div class="lesson1-card-grid"><div class="kurss-example">Ar wer? jautā pēc personām.</div><div class="kurss-example">Ar was? jautā pēc priekšmetiem.</div><div class="kurss-example">Wer singt? — Sie singt.</div><div class="kurss-example">Was liegt hier? — Hier liegt ein Buch.</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>2</span>Artikuli</h4><div class="lesson1-grammar-note">Vācu valodā lietas vārdam ir 3 kārtas: vīriešu, sieviešu un vidējā. Lietu vārdu priekšā parasti stāv vārdiņš, ko sauc par artikulu. Šo vārdiņu netulko.</div><h5 class="lesson2-subtitle">Noteiktais artikuls</h5><div class="lesson1-card-grid"><div class="kurss-example">vīriešu kārta — der</div><div class="kurss-example">sieviešu kārta — die</div><div class="kurss-example">vidējā kārta — das</div><div class="kurss-example">Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.</div><div class="kurss-example">der Tisch — die Tische</div><div class="kurss-example">die Bank — die Bänke</div><div class="kurss-example">das Heft — die Hefte</div></div><h5 class="lesson2-subtitle">Nenoteiktais artikuls</h5><div class="lesson1-card-grid"><div class="kurss-example">vīriešu kārta — ein</div><div class="kurss-example">sieviešu kārta — eine</div><div class="kurss-example">vidējā kārta — ein</div><div class="kurss-example">Nenoteiktajam artikulam daudzskaitļa nav.</div><div class="kurss-example">ein Tisch — Tische</div><div class="kurss-example">ein Heft — Hefte</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>3</span>Īpašvārdi</h4><div class="lesson1-grammar-note">Īpašvārdu priekšā artikulu nelieto.</div><div class="lesson1-card-grid"><div class="kurss-example">Hans spielt, aber Marie singt.</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>4</span>Darbības vārda vieta</h4><div class="lesson1-grammar-note">Stāstāmā teikumā darbības vārds stāv otrā vietā.</div><div class="lesson1-card-grid"><div class="kurss-example">Hier hängt eine Karte.</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>5</span>stehen / liegen / hängen</h4><div class="lesson1-card-grid"><div class="kurss-example">Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:<br>der Tisch steht<br>die Bank steht</div><div class="kurss-example">Par priekšmetiem, kas atrodas horizontālā stāvoklī, saka, ka tie guļ:<br>das Buch liegt<br>das Heft liegt</div><div class="kurss-example">Priekšmeti var arī karāties:<br>die Karte hängt<br>die Tafel hängt</div></div></section></div></details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-orange">5.</span><span>Pārtulko</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-training-wrap"><button class="lesson1-training-flashcard" type="button" data-lesson3-training-card data-training-index="0" data-showing-back="false" aria-label="Lekcija 3 pārtulkošanas kartīte"><span class="lesson1-training-progress">Lekcija 3 · Pārtulko: 1 / 22</span><span class="lesson1-training-text">Vai tu rēķini?</span></button><p class="lesson1-training-hint">Klikšķini uz kartītes, lai redzētu vācu tulkojumu. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.</p></div></div></details>`,
  "kurssLesson7": `            <h3>Lekcija 7</h3>
            <p class="kurss-lesson-intro">Septītā lekcija: pavēles izteiksme, uzrunas forma un daudzskaitlis.</p>
            <details class="lesson1-accordion" open>
              <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialogi / teikumi</span><span class="lesson1-chevron">⌃</span></summary>
              <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was tust du? Ich singe ein Lied.</div><div class="kurss-example">Hans und Olga, singt ein Lied! Was tut ihr? Wir singen ein Lied.</div><div class="kurss-example">Fräulein Müller, singen Sie, bitte, ein Lied! Was tun Sie? Ich singe ein Lied.</div><div class="kurss-example">Hans, zähle die Teller! Was tut Hans? Er zählt die Teller.</div><div class="kurss-example">Hans und Olga, zählt die Teller! Was tun Hans und Olga? Sie zählen die Teller.</div><div class="kurss-example">Fräulein Müller, zählen Sie, bitte, die Teller!</div><div class="kurss-example">Hans, öffne das Fenster! Was tut Hans? Er öffnet das Fenster.</div><div class="kurss-example">Hans und Olga, öffnet die Fenster! Was tun Hans und Olga? Sie öffnen die Fenster.</div><div class="kurss-example">Fräulein Müller, öffnen Sie, bitte, alle Fenster!</div><div class="kurss-example">Fräulein Müller öffnet alle Fenster.</div><div class="kurss-example">Das ist der Spiegel. Das sind die Spiegel.</div><div class="kurss-example">Das ist der Lappen. Das sind die Lappen.</div><div class="kurss-example">Das ist der Spaten. Das sind die Spaten.</div><div class="kurss-example">Das ist der Besen. Das sind die Besen.</div><div class="kurss-example">Das ist die Schaufel. Das sind die Schaufeln.</div><div class="kurss-example">Das ist die Schüssel. Das sind die Schüsseln.</div><div class="kurss-example">Das ist das Zimmer. Das sind die Zimmer.</div><div class="kurss-example">Das ist das Ufer. Das sind die Ufer.</div></div></div>
            </details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-green">2.</span><span>Vārdi</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">singen — dziedāt</div><div class="kurss-example">singe — dziedi</div><div class="kurss-example">singt — dziediet</div><div class="kurss-example">singen Sie — dziediet</div><div class="kurss-example">das Lied (das līt) — dziesma</div><div class="kurss-example">Sie — Jūs</div><div class="kurss-example">zählen — skaitīt</div><div class="kurss-example">das Fräulein (froilein) — jaunkundze</div><div class="kurss-example">der Müller — dzirnavnieks</div><div class="kurss-example">öffnen — atvērt</div><div class="kurss-example">das Fenster (fenster) — logs</div><div class="kurss-example">alle — visi</div><div class="kurss-example">der Spiegel (špīgel) — spogulis</div><div class="kurss-example">der Lappen — lupata, slaukis</div><div class="kurss-example">der Spaten — lāpsta</div><div class="kurss-example">der Besen — slota</div><div class="kurss-example">die Schaufel — lāpstiņa</div><div class="kurss-example">die Schüssel — bļoda</div><div class="kurss-example">das Zimmer — istaba</div><div class="kurss-example">das Ufer (ūfer) — krasts</div></div></div></details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-purple">3.</span><span>Izruna</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">sp vārda vai zilbes sākumā izrunā kā šp: der Spiegel (dēr špīgel).</div><div class="kurss-example">sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel).</div><div class="kurss-example">Divskani äu izrunā kā latviešu oi: das Fräulein (das froilein).</div></div></div></details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-blue">4.</span><span>Gramatika</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content lesson1-grammar-content"><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>1</span>Pavēles izteiksme</h4><div class="lesson1-card-grid"><div class="kurss-example">Pavēles izteiksme vienskaitļa 2. personā atbilst darbības vārda 2. personai vienskaitlī bez personu galotnes -st, pieliekot galotni -e.</div><div class="kurss-example">Piemēri: antworte!, arbeite!, öffne!, zeichne!</div><div class="kurss-example">Ļoti bieži galotne -e netiek lietota, ja pavēles forma ar to kļūst vienzilbīga: geh!, steh!, komm!, tu!, sing!, frag!</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>2</span>Daudzskaitļa pavēle</h4><div class="lesson1-card-grid"><div class="kurss-example">Pavēles forma 2. personā daudzskaitlī līdzinās tagadnes daudzskaitļa 2. personai, bet tiek lietota bez vietniekvārda.</div><div class="kurss-example">Piemēri: antwortet!, arbeitet!, öffnet!, zeichnet!, geht!, steht!, tut!</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>3</span>Uzrunas forma ar Sie</h4><div class="lesson1-card-grid"><div class="kurss-example">Uzrunas forma ar “Jūs” līdzinās daudzskaitļa 3. personai. Vietniekvārds Sie rakstāms ar lielo burtu un stāv pēc darbības vārda.</div><div class="kurss-example">Piemēri: antworten Sie!, arbeiten Sie!, öffnen Sie!, zeichnen Sie!, gehen Sie!, stehen Sie!, tun Sie!</div></div></section><section class="lesson1-block"><h4 class="lesson1-grammar-header"><span>4</span>öffnen</h4><div class="lesson1-card-grid"><div class="kurss-example">Darbības vārdam öffnen vieglākas izrunas dēļ 2. un 3. personā vienskaitlī un 2. personā daudzskaitlī starp celmu un galotni iesprauž e: du öffnest, er öffnet, ihr öffnet.</div></div></section></div></details>
            <details class="lesson1-accordion"><summary><span class="lesson1-number lesson1-number-orange">5.</span><span>Übung / Vingrinājums</span><span class="lesson1-chevron">⌄</span></summary><div class="lesson1-content"><div class="lesson1-training-wrap"><button class="lesson1-training-flashcard" type="button" data-lesson7-exercise-card data-training-index="0" data-showing-back="false" aria-label="Lekcija 7 vingrinājuma kartīte"><span class="lesson1-training-progress">Lekcija 7 · Übung: 1 / 16</span><span class="lesson1-training-text">fragen — jautāt</span></button><p class="lesson1-training-hint">Klikšķini uz kartītes, lai redzētu pavēles formas. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.</p></div></div></details>`,
  "kurssLesson1": "            <h3>Lekcija 1</h3>\n            <p class=\"kurss-lesson-intro\">Pirmā lekcija: darbības vārdi tagadnē, vārdiņi, izruna, gramatika un pārtulko.</p>\n            <details class=\"lesson1-accordion\" open>\n              <summary><span class=\"lesson1-number lesson1-number-red\">1.</span><span>Darbības vārdi tagadnē</span><span class=\"lesson1-chevron\">⌃</span></summary>\n              <div class=\"lesson1-content\">\n                <div class=\"lesson1-info\">Darbības vārdi un to locījumi tagadnē.</div>\n                <div class=\"lesson1-verb-cards\">\n                  <article class=\"lesson1-verb-card\">\n                    <h4><span class=\"lesson1-verb-icon\">♟</span>kommen — nākt</h4>\n                    <div class=\"lesson1-conjugation\"><span>ich</span><strong>komme</strong><span>es nāku</span><span>du</span><strong>kommst</strong><span>tu nāc</span><span>er / sie</span><strong>kommt</strong><span>viņš / viņa nāk</span><span>wir</span><strong>kommen</strong><span>mēs nākam</span><span>ihr</span><strong>kommt</strong><span>jūs nākat</span><span>sie / Sie</span><strong>kommen</strong><span>viņi / Jūs nāk</span></div>\n                  </article>\n                  <article class=\"lesson1-verb-card\">\n                    <h4><span class=\"lesson1-verb-icon\">♟</span>gehen — iet</h4>\n                    <div class=\"lesson1-conjugation\"><span>ich</span><strong>gehe</strong><span>es eju</span><span>du</span><strong>gehst</strong><span>tu ej</span><span>er / sie</span><strong>geht</strong><span>viņš / viņa iet</span><span>wir</span><strong>gehen</strong><span>mēs ejam</span><span>ihr</span><strong>geht</strong><span>jūs ejat</span><span>sie / Sie</span><strong>gehen</strong><span>viņi / Jūs iet</span></div>\n                  </article>\n                  <article class=\"lesson1-verb-card\">\n                    <h4><span class=\"lesson1-verb-icon\">♟</span>stehen — stāvēt</h4>\n                    <div class=\"lesson1-conjugation\"><span>ich</span><strong>stehe</strong><span>es stāvu</span><span>du</span><strong>stehst</strong><span>tu stāvi</span><span>er / sie</span><strong>steht</strong><span>viņš / viņa stāv</span><span>wir</span><strong>stehen</strong><span>mēs stāvam</span><span>ihr</span><strong>steht</strong><span>jūs stāvat</span><span>sie / Sie</span><strong>stehen</strong><span>viņi / Jūs stāv</span></div>\n                  </article>\n                  <article class=\"lesson1-verb-card\">\n                    <h4><span class=\"lesson1-verb-icon\">♟</span>singen — dziedāt</h4>\n                    <div class=\"lesson1-conjugation\"><span>ich</span><strong>singe</strong><span>es dziedu</span><span>du</span><strong>singst</strong><span>tu dziedi</span><span>er / sie</span><strong>singt</strong><span>viņš / viņa dzied</span><span>wir</span><strong>singen</strong><span>mēs dziedam</span><span>ihr</span><strong>singt</strong><span>jūs dziedat</span><span>sie / Sie</span><strong>singen</strong><span>viņi / Jūs dzied</span></div>\n                  </article>\n                </div>\n                <section class=\"lesson1-block\">\n                  <h4>Piemēri</h4>\n                  <div class=\"lesson1-card-grid\"><div class=\"kurss-example\">Stehst du?<br>Ja, ich stehe.</div><div class=\"kurss-example\">Steht Albert?<br>Ja, er steht.</div><div class=\"kurss-example\">Steht Marta?<br>Ja, sie steht.</div><div class=\"kurss-example\">Wer kommt und singt?<br>Albert und Marta kommen und singen.</div><div class=\"kurss-example\">Geht ihr?<br>Ja, wir gehen.</div><div class=\"kurss-example\">Wer steht und singt?<br>Albert und Marta stehen und singen.</div></div>\n                </section>\n              </div>\n            </details>\n            <details class=\"lesson1-accordion\">\n              <summary><span class=\"lesson1-number lesson1-number-green\">2.</span><span>Vārdiņi</span><span class=\"lesson1-chevron\">⌄</span></summary>\n              <div class=\"lesson1-content\">\n                <div class=\"lesson1-info lesson1-vardini-info\"><span class=\"lesson1-info-icon\" aria-hidden=\"true\">i</span><span>Vārdu aptuvenā izruna ir dota iekavās ar latviešu burtiem.<br>To jāievēro arī turpmākajās lekcijās.</span></div>\n                <div class=\"lesson1-card-grid\"><div class=\"kurss-example\">wir (vīr) — mēs</div><div class=\"kurss-example\">Vārdā “wir” burts i tiek izrunāts gari.</div><div class=\"kurss-example\">kommen (komen) — nākt</div><div class=\"kurss-example\">gehen (gē-en) — iet</div><div class=\"kurss-example\">stehen (štē-en) — stāvēt</div><div class=\"kurss-example\">singen (zingen) — dziedāt</div><div class=\"kurss-example\">du (dū) kommst — tu nāc</div><div class=\"kurss-example\">er (ēr) kommt — viņš nāk</div><div class=\"kurss-example\">sie (zī) kommt — viņa nāk</div><div class=\"kurss-example\">wer (vēr) — kas?</div><div class=\"kurss-example\">ja (jā) — jā</div></div>\n              </div>\n            </details>\n                        <details class=\"lesson1-accordion\">\n              <summary><span class=\"lesson1-number lesson1-number-purple\">3.</span><span>Izruna</span><span class=\"lesson1-chevron\">⌄</span></summary>\n              <div class=\"lesson1-content\">\n                <div class=\"lesson1-card-grid\"><div class=\"kurss-example\">Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.</div><div class=\"kurss-example\">Wir (vīr) — mēs. Vārdā wir ī izrunājams vienmēr gari.</div></div>\n              </div>\n            </details>\n<details class=\"lesson1-accordion\">\n              <summary><span class=\"lesson1-number lesson1-number-blue\">4.</span><span>Gramatika</span><span class=\"lesson1-chevron\">⌄</span></summary>\n              <div class=\"lesson1-content lesson1-grammar-content\">\n                <section class=\"lesson1-block\"><h4 class=\"lesson1-grammar-header\"><span>∞</span>Infinitīvs</h4><div class=\"lesson1-grammar-note\">Darbības vārda pamatforma. Parasti infinitīvs beidzas ar -en.</div><div class=\"lesson1-card-grid\"><div class=\"kurss-example\">kommen</div><div class=\"kurss-example\">gehen</div><div class=\"kurss-example\">stehen</div><div class=\"kurss-example\">singen</div></div></section>\n                <section class=\"lesson1-block\"><h4 class=\"lesson1-grammar-header\"><span>♟</span>Tagadnes galotnes</h4><div class=\"lesson1-ending-info\"><span class=\"lesson1-info-icon\" aria-hidden=\"true\">i</span><div class=\"lesson1-ending-info-body\"><p><strong>Noņem <span class=\"lesson1-ending-accent\">-en</span> no darbības vārda pamatformas un pieliec galotni.</strong></p><p>Piemērs: kommen → komm + galotne</p><div class=\"lesson1-ending-process\" aria-label=\"Tagadnes galotnes veidošanas process\"><div class=\"lesson1-ending-step\"><strong>kommen</strong><span>pamatforma</span></div><span class=\"lesson1-ending-arrow\">→</span><div class=\"lesson1-ending-step\"><strong>noņem <span class=\"lesson1-ending-accent\">-en</span></strong><span>paliek sakne</span></div><span class=\"lesson1-ending-arrow\">→</span><div class=\"lesson1-ending-step\"><strong>komm</strong><span>sakne</span></div><span class=\"lesson1-ending-arrow\">→</span><div class=\"lesson1-ending-step\"><strong>pieliec galotni</strong><span>e / st / t</span></div><span class=\"lesson1-ending-arrow\">→</span><div class=\"lesson1-ending-results\"><div>komm + <span class=\"lesson1-ending-accent\">e</span> = <strong>komme</strong></div><div>komm + <span class=\"lesson1-ending-accent\">st</span> = <strong>kommst</strong></div><div>komm + <span class=\"lesson1-ending-accent\">t</span> = <strong>kommt</strong></div></div></div></div></div><div class=\"lesson1-card-grid\"><div class=\"kurss-example\">ich → -e</div><div class=\"kurss-example\">du → -st</div><div class=\"kurss-example\">er / sie → -t</div><div class=\"kurss-example\">wir → -en</div><div class=\"kurss-example\">ihr → -t</div><div class=\"kurss-example\">sie → -en</div></div></section>\n                <section class=\"lesson1-block\"><h4 class=\"lesson1-grammar-header\"><span>●</span>Piemēri</h4><div class=\"lesson1-card-grid\"><div class=\"kurss-example\">ich komme</div><div class=\"kurss-example\">du kommst</div><div class=\"kurss-example\">er kommt</div><div class=\"kurss-example\">wir kommen</div></div></section>\n                <section class=\"lesson1-block\"><h4 class=\"lesson1-grammar-header\"><span>?</span>Jautājuma teikumi</h4><div class=\"lesson1-grammar-info\"><span class=\"lesson1-info-icon\" aria-hidden=\"true\">i</span><span>Vācu jautājuma teikumā darbības vārds parasti pārvietojas uz pirmo vietu.</span></div><div class=\"lesson1-card-grid\"><div class=\"kurss-example\">Latviešu valodā:<br>Tu nāc.<br>Vai tu nāc?</div><div class=\"kurss-example\">Vācu valodā:<br>Du kommst.<br>Kommst du?</div><div class=\"kurss-example\">du kommst — tu nāc<br>kommst du? — vai tu nāc?</div><div class=\"kurss-example\">er singt — viņš dzied<br>singt er? — vai viņš dzied?</div></div></section>\n                <section class=\"lesson1-block\"><h4 class=\"lesson1-grammar-header\"><span>♣</span>Personas atšķirība</h4><div class=\"lesson1-card-grid\"><div class=\"kurss-example\">er kommt — viņš nāk</div><div class=\"kurss-example\">sie kommt — viņa nāk</div><div class=\"kurss-example\">sie kommen — viņi / viņas nāk</div></div></section>\n              </div>\n            </details>\n                        <details class=\"lesson1-accordion\">\n              <summary><span class=\"lesson1-number lesson1-number-orange\">5.</span><span>Pārtulko</span><span class=\"lesson1-chevron\">⌄</span></summary>\n              <div class=\"lesson1-content\">\n                <div class=\"lesson1-training-wrap\">\n                  <button class=\"lesson1-training-flashcard\" type=\"button\" data-lesson1-training-card data-training-index=\"0\" data-showing-back=\"false\" aria-label=\"Lekcija 1 treniņa kartīte\">\n                    <span class=\"lesson1-training-progress\">Lekcija 1 · Pārtulko: 1 / 11</span>\n                    <span class=\"lesson1-training-text\">Vai tu nāc?</span>\n                  </button>\n                  <p class=\"lesson1-training-hint\">Klikšķini uz kartītes, lai redzētu vācu tulkojumu. Pēc atbildes nākamais klikšķis rāda nākamo kartīti.</p>\n                </div>\n              </div>\n            </details>",
};

const COURSE_LESSON_DATA = {
  kurssLesson1: {
    id: "lesson1",
    title: "Lekcija 1",
    subtitle: "Darbības vārdi tagadnē, vārdiņi, gramatika un pārtulko",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson1
  },
  kurssLesson2: {
    id: "lesson2",
    title: "Lekcija 2",
    subtitle: "Dialogi, vārdi, izruna, gramatika un pārtulko",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson2
  },
  kurssLesson3: {
    id: "lesson3",
    title: "Lekcija 3",
    subtitle: "Artikuli, vietas vārdi un pārtulko",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson3
  },
  kurssLesson4: {
    id: "lesson4",
    title: "Lekcija 4",
    subtitle: "Objekti klasē, īpašības un pārtulko",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson4
  },
  kurssLesson5: {
    id: "lesson5",
    title: "Lekcija 5",
    subtitle: "Wen?, akuzatīvs, sitzen, fragen un -in galotne.",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson5
  },
  kurssLesson6: {
    id: "lesson6",
    title: "Lekcija 6",
    subtitle: "Darbības vārdi, vietas apstākļi un pārtulko",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson6
  },
  kurssLesson7: {
    id: "lesson7",
    title: "Lekcija 7",
    subtitle: "Pavēles izteiksme, uzrunas forma un daudzskaitlis.",
    legacyHtml: COURSE_LESSON_HTML.kurssLesson7
  },  kurssLesson8: {
    id: "lesson8",
    title: "Lekcija 8",
    subtitle: "Refleksīvie darbības vārdi, e → i/ie maiņa un akuzatīvs.",
    sections: [
      {
        title: "Dialogi / teikumi",
        items: [
          "Der Lehrer kommt. Alle Schüler stehen auf und grüßen den Lehrer. Sie sagen: „Guten Morgen, Herr Lehrer!“",
          "Der Lehrer grüßt die Schüler und sagt: „Kinder, setzt euch!“",
          "Die Schüler setzen sich und nehmen die Bücher und die Hefte.",
          "Der Lehrer fragt die Schüler, Paul spricht aber sehr leise.",
          "Der Lehrer sagt: „Paul, sprich nicht leise, sprich laut!“",
          "Paul spricht jetzt laut, alle Schüler sprechen laut.",
          "Der Lehrer sagt: „Hans, nimm das Buch und lies!“",
          "Hans liest nicht gut, er liest schlecht.",
          "Zwei Schüler lesen nicht laut. Sie lesen leise.",
          "Der Lehrer sagt: „Lest laut und deutlich!“",
          "Alle Schüler lesen jetzt laut und deutlich.",
          "Dann schreiben die Schüler.",
          "Endlich erzählt der Lehrer, und die Schüler hören zu.",
          "Das ist der Arbeiter. Das sind zwei Arbeiter.",
          "Das ist der Müller. Das sind drei Müller.",
          "Das ist der Tischler. Das sind einige Tischler.",
          "Das ist der Bäcker. Das sind viele Bäcker.",
          "Das ist der Schneider. Das sind die Schneider.",
          "Das ist der Gärtner. Das sind die Gärtner.",
          "Das ist ein Schuster. Das sind Schuster."
        ]
      },
      {
        title: "Vārdi",
        items: [
          "alle — visi",
          "aufstehen — piecelties",
          "stehen auf — pieceļas",
          "grüßen (grüsen) — sveicināt",
          "guten Morgen — labrīt",
          "gut — labs",
          "der Morgen — rīts",
          "der Herr — kungs",
          "das Kind — bērns",
          "die Kinder — bērni",
          "setzt euch (zect oich) — sēstieties!",
          "sie setzen sich — viņi apsēžas",
          "fragen (ar akuzatīvu) — jautāt",
          "sprechen — runāt",
          "er spricht — viņš runā",
          "aber — bet",
          "sehr (zēr) — ļoti",
          "leise — klusi",
          "laut — skaļi",
          "jetzt (ject) — tagad",
          "lesen — lasīt",
          "lies! — lasi!",
          "gut — labi",
          "schlecht — slikti",
          "deutlich (doitlich) — skaidri, saprotami",
          "schreiben — rakstīt",
          "endlich (entlich) — beidzot",
          "erzählen (ercēlen) — stāstīt",
          "zuhören — klausīties",
          "sie hören zu — viņi klausās",
          "was ist das — kas tas ir?",
          "der Arbeiter — strādnieks",
          "der Müller — dzirnavnieks",
          "der Tischler — galdnieks",
          "der Bäcker (dēr beker) — maiznieks",
          "der Schneider (dēr šneider) — drēbnieks",
          "der Gärtner (dēr gertner) — dārznieks",
          "der Schuster — kurpnieks"
        ]
      },
      {
        title: "Izruna",
        items: [
          "ä, kā jau minēts, izrunā gan kā šauro īso vai garo e skaņu. Piemēri: der Bäcker (bēker), das Mädchen (mētchen).",
          "ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner).",
          "Vārdos Schüler, Bücher — ü ir garš (ū), bet Müller — īss ü.",
          "ie izrunā kā garo ī: liest (līst).",
          "ß izrunā kā s: grüßen (grüsen).",
          "eu izrunā kā oi: deutlich (doitlich)."
        ]
      },
      {
        title: "Gramatika",
        items: [
          "Daudziem darbības vārdiem ar patskani e celmā vienskaitļa 2. un 3. personā tagadnē e vietā ir i vai ie.",
          "sprechen — ich spreche, du sprichst, er spricht.",
          "geben — ich gebe, du gibst, er gibt.",
          "essen — ich esse, du ißt, er ißt.",
          "nehmen — ich nehme, du nimmst, er nimmt.",
          "lesen — ich lese, du liest, er liest.",
          "sehen — ich sehe, du siehst, er sieht.",
          "Šiem darbības vārdiem vienskaitļa pavēles formā arī celmā e vietā ir i vai ie: Paul, sprich! Lies! Paul und Hans, lest und sprecht!",
          "Latviešu valodā atgriezeniskiem darbības vārdiem ir sava galotne un konjugācija. Vācu valodā sevišķas konjugācijas nav. Tos loka tāpat kā citus darbības vārdus, pievienojot atgriezenisko vietniekvārdu sich.",
          "Präsens: ich setze mich, du setzt dich, er/sie/es setzt sich, wir setzen uns, ihr setzt euch, sie setzen sich.",
          "Pavēles izteiksme: setz(e) dich!, setzt euch!, setzen Sie sich!"
        ]
      },
      {
        title: "Übung / Vingrinājums",
        exerciseType: "mixed",
        description: "Übung I — lieto pareizo locījumu. Übung II — tulkošanas kartītes.",
        cards: [
          {
            type: "fill",
            prompt: "Das Kind grüßt d... Lehrer.",
            answer: "Das Kind grüßt den Lehrer."
          },
          {
            type: "fill",
            prompt: "Das Kind grüßt d... Lehrerin.",
            answer: "Das Kind grüßt die Lehrerin."
          },
          {
            type: "fill",
            prompt: "Das Kind grüßt d... Fräulein.",
            answer: "Das Kind grüßt das Fräulein."
          },
          {
            type: "fill",
            prompt: "Das Kind grüßt d... Schüler.",
            answer: "Das Kind grüßt den Schüler."
          },
          {
            type: "fill",
            prompt: "Das Kind grüßt d... Schülerin.",
            answer: "Das Kind grüßt die Schülerin."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Eimer.",
            answer: "Der Schüler nimmt den Eimer."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Teller.",
            answer: "Der Schüler nimmt den Teller."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Hammer.",
            answer: "Der Schüler nimmt den Hammer."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Schlüssel.",
            answer: "Der Schüler nimmt den Schlüssel."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Schüssel.",
            answer: "Der Schüler nimmt die Schüssel."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Nadel.",
            answer: "Der Schüler nimmt die Nadel."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Messer.",
            answer: "Der Schüler nimmt das Messer."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Spiegel.",
            answer: "Der Schüler nimmt den Spiegel."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Buch.",
            answer: "Der Schüler nimmt das Buch."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Heft.",
            answer: "Der Schüler nimmt das Heft."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Bleistift.",
            answer: "Der Schüler nimmt den Bleistift."
          },
          {
            type: "fill",
            prompt: "Der Schüler nimmt d... Federhalter.",
            answer: "Der Schüler nimmt den Federhalter."
          },
          {
            type: "translate",
            lv: "Sveicini skolotāju un skolotāju!",
            de: "Grüße den Lehrer und die Lehrerin!"
          },
          {
            type: "translate",
            lv: "Ko tu sveicini?",
            de: "Wen grüßt du?"
          },
          {
            type: "translate",
            lv: "Es sveicinu jaunkundzi.",
            de: "Ich grüße das Fräulein."
          },
          {
            type: "translate",
            lv: "Atveriet visus logus!",
            de: "Öffnet alle Fenster!"
          },
          {
            type: "translate",
            lv: "Mēs atveram visus logus.",
            de: "Wir öffnen alle Fenster."
          },
          {
            type: "translate",
            lv: "Vai tu atver logu?",
            de: "Öffnest du das Fenster?"
          },
          {
            type: "translate",
            lv: "Nē, es neatvēru logu.",
            de: "Nein, ich habe das Fenster nicht geöffnet."
          },
          {
            type: "translate",
            lv: "Visi skolēni apsēžas.",
            de: "Alle Schüler setzen sich."
          },
          {
            type: "translate",
            lv: "Paul, sēdini sevi!",
            de: "Paul, setz dich!"
          },
          {
            type: "translate",
            lv: "Bērni, sēdieties!",
            de: "Kinder, setzt euch!"
          },
          {
            type: "translate",
            lv: "Nerunā klusi!",
            de: "Sprich nicht leise!"
          },
          {
            type: "translate",
            lv: "Kā viņš runā?",
            de: "Wie spricht er?"
          },
          {
            type: "translate",
            lv: "Visi skolēni runā skaļi.",
            de: "Alle Schüler sprechen laut."
          },
          {
            type: "translate",
            lv: "Kas lasa skaļi?",
            de: "Wer liest laut?"
          },
          {
            type: "translate",
            lv: "Skolniece lasa skaļi un skaidri.",
            de: "Die Schülerin liest laut und deutlich."
          },
          {
            type: "translate",
            lv: "Lasi labi!",
            de: "Lies gut!"
          },
          {
            type: "translate",
            lv: "Nerunā klusi!",
            de: "Sprich nicht leise!"
          },
          {
            type: "translate",
            lv: "Lasiet labi!",
            de: "Lest gut!"
          },
          {
            type: "translate",
            lv: "Ansis raksta labi, bet Anna raksta slikti.",
            de: "Hans schreibt gut, aber Anna schreibt schlecht."
          },
          {
            type: "translate",
            lv: "Müller jaunkundze, lūdzu dziediet dziesmu!",
            de: "Fräulein Müller, singen Sie, bitte, ein Lied!"
          },
          {
            type: "translate",
            lv: "Skolotāja kungs, lūdzu sēdieties!",
            de: "Herr Lehrer, bitte, setzen Sie sich!"
          }
        ]
      },
      {
        title: "Pārtulko",
        exerciseType: "translate",
        description: "Tulko latviskos teikumus vāciski.",
        cards: [
          {
            lv: "Sveicini skolotāju un skolotāju.",
            de: "Grüße den Lehrer und die Lehrerin!"
          },
          {
            lv: "Atveriet visus logus!",
            de: "Öffnet alle Fenster!"
          },
          {
            lv: "Mēs atveram visus logus.",
            de: "Wir öffnen alle Fenster."
          },
          {
            lv: "Vai tu atvēri logu?",
            de: "Hast du das Fenster geöffnet?"
          },
          {
            lv: "Nē, es neatvēru logu.",
            de: "Nein, ich habe das Fenster nicht geöffnet."
          },
          {
            lv: "Visi skolnieki apsēžas.",
            de: "Alle Schüler setzen sich."
          },
          {
            lv: "Paul, sēdies!",
            de: "Paul, setz dich!"
          },
          {
            lv: "Bērni, sēdieties!",
            de: "Kinder, setzt euch!"
          },
          {
            lv: "Nerunā klusi!",
            de: "Sprich nicht leise!"
          },
          {
            lv: "Kā viņš runā?",
            de: "Wie spricht er?"
          },
          {
            lv: "Visi skolnieki runā skaļi.",
            de: "Alle Schüler sprechen laut."
          },
          {
            lv: "Kas lasa skaļi?",
            de: "Wer liest laut?"
          },
          {
            lv: "Skolniece lasa skaļi un skaidri.",
            de: "Die Schülerin liest laut und deutlich."
          },
          {
            lv: "Lasi labi!",
            de: "Lies gut!"
          },
          {
            lv: "Nerunā klusi!",
            de: "Sprich nicht leise!"
          },
          {
            lv: "Lasiet labi!",
            de: "Lest gut!"
          },
          {
            lv: "Ansis raksta labi, bet Anna raksta slikti.",
            de: "Hans schreibt gut, aber Anna schreibt schlecht."
          },
          {
            lv: "Müllera jaunkundze, lūdzu, dziediet dziesmu!",
            de: "Fräulein Müller, singen Sie, bitte, ein Lied!"
          },
          {
            lv: "Skolotāja kungs, lūdzu, sēdieties!",
            de: "Herr Lehrer, bitte, setzen Sie sich!"
          }
        ]
      }
    ]
  },
  kurssLesson9: {
    id: "lesson9",
    title: "Lekcija 9",
    subtitle: "Vairāki priekšmeti, dieser/jener, vienskaitlis un daudzskaitlis",
    intro: "Devītā lekcija: lietvārdu daudzskaitlis, norādāmie vietniekvārdi dieser/jener, vingrinājumi un pārtulkošana.",
    sections: [
      {
        title: "Dialogi / teikumi",
        items: [
          "Hier liegen mehrere Hefte.",
          "Dort liegen mehrere Bleistifte.",
          "Ich nehme ein Heft.",
          "Ich öffne das Heft.",
          "Ich nehme auch einen Bleistift.",
          "Ich spitze den Bleistift an.",
          "Ich setze mich und schreibe langsam.",
          "Ich schreibe schnell.",
          "Ich schreibe nicht mehr.",
          "Ich mache das Heft zu.",
          "Ich lege den Bleistift hin.",
          "Ich sitze ruhig.",
          "Dieser Brief ist lang.",
          "Dieses Buch ist dick.",
          "Diese Schüssel ist rein.",
          "Diese Briefe sind lang.",
          "Jener Brief ist kurz.",
          "Jenes Buch ist dünn.",
          "Jene Schüssel ist schmutzig.",
          "Jene Briefe sind kurz."
        ]
      },
      {
        title: "Vārdi",
        items: [
          "mehrere (mērere) — vairāki, vairākas",
          "hier (hīr) — šeit, te",
          "dort — tur",
          "auch — arī",
          "langsam (lankzām) — lēni",
          "schnell (šnel) — ātri",
          "mehr (mēr) — vairāk",
          "zumachen — aiztaisīt",
          "ich mache zu — es aiztaisu",
          "sitzen (zicen) — sēdēt",
          "ruhig (rū-ich) — mierīgi",
          "dieser (dīzer) — šis",
          "jener (jēner) — tas",
          "der Brief (dēr brīf) — vēstule",
          "die Briefe — vēstules",
          "kurz (kurc) — īss",
          "rein — tīrs",
          "schmutzig (šmucich) — netīrs"
        ]
      },
      {
        title: "Gramatika",
        items: [
          {
            heading: "Norādāmie vietniekvārdi",
            text: "Norādāmos vietniekvārdus dieser un jener loka kā noteikto artikulu."
          },
          {
            heading: "Vienskaitlis",
            table: [
              ["Nominativ", "dieser Bleistift", "jene Feder", "dieses Heft"],
              ["Akkusativ", "diesen Bleistift", "jene Feder", "dieses Heft"]
            ]
          },
          {
            heading: "Daudzskaitlis",
            table: [
              ["Nominativ", "diese Bleistifte", "jene Federn", "diese Hefte"],
              ["Akkusativ", "diese Bleistifte", "jene Federn", "diese Hefte"]
            ]
          },
          {
            heading: "Artikulu nelieto",
            text: "Ja lietvārda priekšā stāv vietniekvārds vai skaitļa vārds, artikulu nelieto."
          },
          {
            examples: [
              "viele Hefte",
              "mehrere Kinder",
              "einige Bücher",
              "alle Federn",
              "dieser Schüler",
              "jene Schülerin",
              "dieses Fenster",
              "jene Messer"
            ]
          }
        ]
      },
      {
        title: "Übung / Vingrinājums",
        type: "grammarTransformCards",
        cards: [
          { base: "Ich nehme ein Heft.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich nehme ein Heft." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er nimmt ein Heft." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir nehmen ein Heft." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich nehme Hefte." }
          ] },
          { base: "Ich öffne das Heft.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich öffne das Heft." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er öffnet das Heft." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir öffnen das Heft." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich öffne die Hefte." }
          ] },
          { base: "Ich nehme auch einen Bleistift.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich nehme auch einen Bleistift." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er nimmt auch einen Bleistift." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir nehmen auch einen Bleistift." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich nehme auch Bleistifte." }
          ] },
          { base: "Ich spitze den Bleistift an.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich spitze den Bleistift an." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er spitzt den Bleistift an." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir spitzen den Bleistift an." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich spitze die Bleistifte an." }
          ] },
          { base: "Ich setze mich und schreibe langsam.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich setze mich und schreibe langsam." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er setzt sich und schreibt langsam." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir setzen uns und schreiben langsam." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich setze mich und schreibe langsam." }
          ] },
          { base: "Ich schreibe schnell.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich schreibe schnell." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er schreibt schnell." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir schreiben schnell." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich schreibe schnell." }
          ] },
          { base: "Ich mache das Heft zu.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich mache das Heft zu." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er macht das Heft zu." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir machen das Heft zu." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich mache die Hefte zu." }
          ] },
          { base: "Ich lege den Bleistift hin.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich lege den Bleistift hin." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er legt den Bleistift hin." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir legen den Bleistift hin." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich lege die Bleistifte hin." }
          ] },
          { base: "Ich sitze ruhig.", forms: [
            { label: "1/4 Sākuma teikums", task: "Pārveido šo teikumu 3. personā vienskaitlī.", text: "Ich sitze ruhig." },
            { label: "2/4 Er forma", task: "Pārveido sākuma teikumu 1. personā daudzskaitlī.", text: "Er sitzt ruhig." },
            { label: "3/4 Wir forma", task: "Lieto lietas vārdu vienskaitļa vietā daudzskaitli.", text: "Wir sitzen ruhig." },
            { label: "4/4 Daudzskaitlis", task: "Gatavs. Nākamais klikšķis rāda nākamo kartīti.", text: "Ich sitze ruhig." }
          ] }
        ]
      },
      {
        title: "Pārtulko",
        type: "translationCards",
        cards: [
          {
            lv: "Meitene apsēžas un raksta vēstuli.",
            de: "Das Mädchen setzt sich und schreibt einen Brief."
          },
          {
            lv: "Vai vēstule ir īsa?",
            de: "Ist der Brief kurz?"
          },
          {
            lv: "Nē, vēstule nav īsa, tā ir gara.",
            de: "Nein, der Brief ist nicht kurz, er ist lang."
          },
          {
            lv: "Ko jūs darāt?",
            de: "Was machen Sie?"
          },
          {
            lv: "Mēs sēžam un lasām.",
            de: "Wir sitzen und lesen."
          },
          {
            lv: "Paul, apsēdies un lasi!",
            de: "Paul, setz dich und lies!"
          },
          {
            lv: "Skolotāja kungs, apsēdieties un lasiet!",
            de: "Herr Lehrer, setzen Sie sich und lesen Sie!"
          },
          {
            lv: "Kā bērni raksta?",
            de: "Wie schreiben die Kinder?"
          },
          {
            lv: "Vai viņi raksta ātri vai lēni?",
            de: "Schreiben sie schnell oder langsam?"
          },
          {
            lv: "Viņi raksta ļoti lēni.",
            de: "Sie schreiben sehr langsam."
          },
          {
            lv: "Kāds ir šis šķīvis?",
            de: "Wie ist dieser Teller?"
          },
          {
            lv: "Šis šķīvis nav tīrs, tas ir netīrs.",
            de: "Dieser Teller ist nicht rein, er ist schmutzig."
          },
          {
            lv: "Vai vēstules ir garas vai īsas?",
            de: "Sind die Briefe lang oder kurz?"
          },
          {
            lv: "Anna, uzasini šo zīmuli!",
            de: "Anna, spitz diesen Bleistift an!"
          },
          {
            lv: "Skolotāja kungs, lūdzu, uzasiniet šo zīmuli!",
            de: "Herr Lehrer, bitte spitzen Sie diesen Bleistift an!"
          },
          {
            lv: "Noliec to zīmuli!",
            de: "Leg jenen Bleistift hin!"
          },
          {
            lv: "Aiztaisi logu!",
            de: "Mach das Fenster zu!"
          },
          {
            lv: "Ko meitene beidzot dara?",
            de: "Was macht das Mädchen endlich?"
          },
          {
            lv: "Viņa aiztaisa logu un iziet ārā.",
            de: "Sie macht das Fenster zu und geht hinaus."
          }
        ]
      }
    ]
  },
  kurssLesson10: {
    id: "lesson10",
    title: "Lekcija 10",
    subtitle: "Sein, können, veselība, vecums un profesijas",
    intro: "Desmitā lekcija: sein, können, pavēles formas, veselība, vecums un profesijas.",
    sections: [
      {
        title: "Dialogi / teikumi",
        items: [
          "Ich bin gesund.",
          "Du bist gesund.",
          "Er ist gesund.",
          "Sie ist gesund.",
          "Es ist gesund.",
          "Wir sind gesund.",
          "Ihr seid gesund.",
          "Sie sind gesund.",
          "Ich kann arbeiten.",
          "Du kannst arbeiten.",
          "Er kann arbeiten.",
          "Sie kann arbeiten.",
          "Es kann arbeiten.",
          "Wir können arbeiten.",
          "Ihr könnt arbeiten.",
          "Sie können arbeiten.",
          "Otto, sei gesund!",
          "Otto und Franz, seid gesund!",
          "Fräulein Müller, seien Sie gesund!",
          "Ich bin ein Knabe.",
          "Du bist ein Mädchen.",
          "Er ist ein Schüler.",
          "Sie ist eine Schülerin.",
          "Was ist der Lehrer?",
          "Der Lehrer ist ein Mann.",
          "Wer ist ein Mann?",
          "Der Lehrer ist ein Mann.",
          "Was ist die Lehrerin?",
          "Die Lehrerin ist eine Frau.",
          "Wer ist eine Frau?",
          "Die Lehrerin ist eine Frau.",
          "Wer ist gesund?",
          "Ich bin gesund.",
          "Wir sind gesund.",
          "Ist der Großvater gesund?",
          "Nein, der Großvater ist krank.",
          "Er kann nicht arbeiten.",
          "Die Großmutter ist gesund.",
          "Sie kann arbeiten.",
          "Hans und Franz, seid ihr gesund?",
          "Ja, wir sind gesund.",
          "Wir können fleißig lernen.",
          "Alle Kinder sind gesund.",
          "Sie können fleißig lernen.",
          "Adolf, wie alt bist du?",
          "Ich bin zehn Jahre alt.",
          "Wie alt ist Anna?",
          "Anna ist acht Jahre alt."
        ]
      },
      {
        title: "Vārdi",
        items: [
          "gesund (gezunt) — vesels",
          "ich bin gesund — es esmu vesels",
          "du bist — tu esi",
          "wir sind — mēs esam",
          "ihr seid (īr zeit) — jūs esat",
          "ich kann — es varu",
          "du kannst — tu vari",
          "er kann — viņš var",
          "wir können — mēs varam",
          "ihr könnt — jūs varat",
          "sie können — viņi var",
          "sei gesund — esi vesels!",
          "seid gesund — esiet veseli!",
          "seien Sie gesund — esiet Jūs veseli!",
          "der Knabe (dēr knābe) — zēns",
          "der Mann — vīrs, vīrietis",
          "die Frau — sieva, sieviete",
          "der Großvater (dēr grōsfāter) — vectēvs",
          "krank — slims",
          "fleißig (fleišich) — čakls",
          "lernen — mācīties",
          "alt — vecs",
          "das Jahr (jār) — gads",
          "die Jahre — gadi",
          "wie — kā, kāds, cik"
        ]
      },
      {
        title: "Izruna",
        items: [
          "Pareizi jāizrunā patskaņu pārkaņojumi.",
          "ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel.",
          "ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher).",
          "Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.",
          "Ja patskanim seko viens līdzskanis, patskani izrunā gari: Vögel (fōgel), Schüler (šūler), Bücher (būcher).",
          "Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.",
          "Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.",
          "Pareizi izrunā: der Großvater (dēr grōsfāter).",
          "Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).",
          "Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats."
        ]
      },
      {
        title: "Gramatika",
        items: [
          {
            heading: "Sein",
            text: "Palīga darbības vārdu sein — būt loka nekārtni. Tāpēc tas labi jāiemācās."
          },
          {
            heading: "Sein — Präsens",
            table: [
              [
                "ich",
                "bin"
              ],
              [
                "du",
                "bist"
              ],
              [
                "er / sie / es",
                "ist"
              ],
              [
                "wir",
                "sind"
              ],
              [
                "ihr",
                "seid"
              ],
              [
                "sie",
                "sind"
              ]
            ]
          },
          {
            heading: "Sein — Imperativ",
            examples: [
              "sei!",
              "seid!",
              "seien Sie!"
            ]
          },
          {
            heading: "Können",
            text: "Tāpat nekārtni loka arī palīga darbības vārdu können — varēt."
          },
          {
            heading: "Können — Präsens",
            table: [
              [
                "ich",
                "kann"
              ],
              [
                "du",
                "kannst"
              ],
              [
                "er / sie / es",
                "kann"
              ],
              [
                "wir",
                "können"
              ],
              [
                "ihr",
                "könnt"
              ],
              [
                "sie",
                "können"
              ]
            ]
          }
        ]
      },
      {
        title: "Pārtulko",
        type: "translationCards",
        cards: [
          {
            lv: "Vai tu esi vesels?",
            de: "Bist du gesund?"
          },
          {
            lv: "Jā, es esmu vesels.",
            de: "Ja, ich bin gesund."
          },
          {
            lv: "Vai Pauls ir vesels?",
            de: "Ist Paul gesund?"
          },
          {
            lv: "Nē, Pauls nav vesels, viņš ir slims.",
            de: "Nein, Paul ist nicht gesund, er ist krank."
          },
          {
            lv: "Vai viņš var strādāt?",
            de: "Kann er arbeiten?"
          },
          {
            lv: "Nē, viņš nevar strādāt.",
            de: "Nein, er kann nicht arbeiten."
          },
          {
            lv: "Vai vectēvs ir vecs?",
            de: "Ist der Großvater alt?"
          },
          {
            lv: "Jā, viņš ir ļoti vecs.",
            de: "Ja, er ist sehr alt."
          },
          {
            lv: "Vectēvs un vecmāmiņa ir ļoti veci.",
            de: "Der Großvater und die Großmutter sind sehr alt."
          },
          {
            lv: "Cik vecs ir Adolfs?",
            de: "Wie alt ist Adolf?"
          },
          {
            lv: "Adolfs ir deviņus gadus vecs.",
            de: "Adolf ist neun Jahre alt."
          },
          {
            lv: "Kas tu esi?",
            de: "Was bist du?"
          },
          {
            lv: "Es esmu vīrietis.",
            de: "Ich bin ein Mann."
          },
          {
            lv: "Vai viņš ir skolotājs?",
            de: "Ist er ein Lehrer?"
          },
          {
            lv: "Nē, viņš ir strādnieks.",
            de: "Nein, er ist ein Arbeiter."
          },
          {
            lv: "Kas ir skolotājs?",
            de: "Was ist der Lehrer?"
          },
          {
            lv: "Skolotājs ir vīrietis.",
            de: "Der Lehrer ist ein Mann."
          },
          {
            lv: "Kas ir skolotāja?",
            de: "Was ist die Lehrerin?"
          },
          {
            lv: "Skolotāja ir sieviete.",
            de: "Die Lehrerin ist eine Frau."
          },
          {
            lv: "Kas var strādāt?",
            de: "Wer kann arbeiten?"
          },
          {
            lv: "Mēs visi varam strādāt.",
            de: "Wir können alle arbeiten."
          }
        ]
      }
    ]
  },
  kurssLesson11: {
    id: "lesson11",
    title: "Lekcija 11",
    subtitle: "Haben, kein/keine/keinen, piederība un saliktie lietvārdi",
    intro: "Vienpadsmitā lekcija: haben, noliegums ar kein, piederības izteikšana, saliktie lietvārdi un vārdu kārtība ar denn.",
    sections: [
      {
        title: "Dialogi / teikumi",
        items: [
          "Ich habe einen Bruder.",
          "Du hast einen Bruder.",
          "Er hat einen Bruder.",
          "Sie hat einen Bruder.",
          "Es hat einen Bruder.",
          "Wir haben einen Bruder.",
          "Ihr habt einen Bruder.",
          "Sie haben einen Bruder.",
          "Ich habe keinen Bruder.",
          "Du hast keinen Bruder.",
          "Er hat keinen Bruder.",
          "Sie hat keinen Bruder.",
          "Es hat keinen Bruder.",
          "Wir haben keinen Bruder.",
          "Ihr habt keinen Bruder.",
          "Sie haben keinen Bruder.",
          "Ich habe ein Zimmer.",
          "Das Zimmer ist nicht groß, aber es ist hell und warm.",
          "Das Zimmer hat ein Fenster.",
          "Das Fenster ist breit.",
          "Du hast einen Schreibtisch.",
          "Da liegen drei Bücher.",
          "Anna hat einen Federhalter, eine Feder und einen Bleistift.",
          "Anna schreibt und fragt: „Franz, schreibst du auch?“",
          "Franz antwortet: „Ich kann nicht schreiben. Ich habe kein Heft, keine Feder und keinen Bleistift.“",
          "Anna sagt: „Nimm dieses Heft und diesen Bleistift. Wir arbeiten zusammen.“",
          "Anna und Franz arbeiten oft zusammen.",
          "Sie sind Freunde.",
          "Was hast du?",
          "Ich habe einen Schrank, einen Tisch und zwei Stühle.",
          "Was habt ihr?",
          "Wir haben eine Tischlampe, ein Bücherbrett und eine Landkarte.",
          "Wer ist glücklich?",
          "Ich bin glücklich, denn ich habe einen Vater und eine Mutter.",
          "Wir sind glücklich, denn wir haben Brüder und Schwestern."
        ]
      },
      {
        title: "Vārdi",
        items: [
          "ich habe — man ir",
          "du hast — tev ir",
          "er hat — viņam ir",
          "wir haben — mums ir",
          "ihr habt — jums ir",
          "sie haben — viņiem ir",
          "der Bruder (dēr brūder) — brālis",
          "die Brüder — brāļi",
          "das Zimmer (das cimer) — istaba",
          "ist nicht — nav",
          "groß (grōs) — liels",
          "hell — gaišs",
          "breit — plats",
          "der Schreibtisch (dēr šreibtīš) — rakstāmgalds",
          "da — tur",
          "kein, keine, kein — neviens, neviena, neviens",
          "zusammen (cuzāmen) — kopā",
          "oft — bieži",
          "der Freund (dēr froint) — draugs",
          "die Freunde — draugi",
          "der Schrank — skapis",
          "der Stuhl (dēr štūl) — krēsls",
          "die Stühle — krēsli",
          "die Tischlampe — galda lampa",
          "das Bücherbrett — grāmatu plaukts",
          "die Landkarte (dī lantkarte) — ģeogrāfijas karte",
          "glücklich — laimīgs",
          "denn — jo",
          "die Schwester (dī švester) — māsa",
          "die Schwestern — māsas"
        ]
      },
      {
        title: "Izruna",
        items: [
          "eu izrunā kā oi: der Freund (dēr froint), neun (noin).",
          "h pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn).",
          "z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer)."
        ]
      },
      {
        title: "Gramatika",
        items: [
          {
            heading: "Haben",
            text: "Ar palīga darbības vārdu haben vācu valodā izsaka piederības jēdzienu. Latviski to bieži izsaka ar: man ir, tev ir, viņam ir u. t. t."
          },
          {
            heading: "Haben — Präsens",
            table: [
              ["ich habe", "man ir"],
              ["du hast", "tev ir"],
              ["er/sie/es hat", "viņam/viņai/tam ir"],
              ["wir haben", "mums ir"],
              ["ihr habt", "jums ir"],
              ["sie haben", "viņiem ir"]
            ]
          },
          {
            heading: "Latviešu datīvs un vācu nominatīvs/akuzatīvs",
            text: "Latviešu valodā persona, kam kas pieder, ir datīvā, bet priekšmets — nominatīvā. Vācu valodā persona ir nominatīvā, bet piederošais priekšmets — akuzatīvā."
          },
          {
            heading: "Piemēri",
            examples: [
              "Ich habe einen Tisch — man ir galds",
              "Der Vater hat ein Buch — tēvam ir grāmata",
              "Sie haben eine Feder — viņiem ir spalva"
            ]
          },
          {
            heading: "Salīdzinājums ar citām valodām",
            examples: [
              "krievu: я имею тетрадь; отец имеет книгу.",
              "angļu: I have a book; the father has a pencil."
            ]
          },
          {
            heading: "Imperativ",
            text: "Darbības vārdu haben vajag labi iemācīties un pareizi lietot. Arī pavēles formas jāzina."
          },
          {
            heading: "Imperativ — piemēri",
            examples: [
              "habe Geduld! — pacietību! / lai tev ir pacietība!",
              "habt Geduld! — lai jums ir pacietība!",
              "Fräulein Müller, haben Sie Geduld!"
            ]
          },
          {
            heading: "Kein / keine / keinen",
            text: "Latviešu valodas divkāršo noliegumu vāciski neizsaka ar noliedzamo vārdu kein. Noliedzamais vārds kein stāv tikai lietas vārda priekšā."
          },
          {
            heading: "Kein — vienskaitlis",
            table: [
              ["Nom.", "kein", "keine", "kein"],
              ["Akk.", "keinen", "keine", "kein"]
            ]
          },
          {
            heading: "Kein — daudzskaitlis",
            table: [
              ["Nom.", "keine"],
              ["Akk.", "keine"]
            ]
          },
          {
            heading: "Vārdu kārtība ar denn",
            text: "Ja stāstāmā teikumā ir saiklis denn, darbības vārds paliek 2. vietā. Saikli denn kā teikuma locekli neskaita."
          },
          {
            heading: "Denn — piemēri",
            examples: [
              "Ich bin glücklich, denn ich habe Brüder.",
              "Wir sind glücklich, denn wir haben Schwestern."
            ]
          },
          {
            heading: "Saliktie lietvārdi",
            text: "Salikto lietvārdu priekšā stāv pēdējā lietvārda artikuls. Uzsvars ir uz pirmā lietas vārda."
          },
          {
            heading: "Saliktie lietvārdi — piemēri",
            examples: [
              "der Tisch + die Lampe = die Tischlampe",
              "die Bücher + das Brett = das Bücherbrett",
              "das Land + die Karte = die Landkarte"
            ]
          }
        ]
      },
      {
        title: "Pārtulko",
        type: "translationCards",
        cards: [
          { lv: "Kas tev ir?", de: "Was hast du?" },
          { lv: "Man ir grāmatas.", de: "Ich habe Bücher." },
          { lv: "Kādas ir grāmatas?", de: "Wie sind die Bücher?" },
          { lv: "Grāmatas ir biezas.", de: "Die Bücher sind dick." },
          { lv: "Müller jaunkundze, vai Jums ir burtnīcas?", de: "Fräulein Müller, haben Sie Hefte?" },
          { lv: "Man nav nevienas burtnīcas.", de: "Ich habe keine Hefte." },
          { lv: "Francim nav nevienas spalvas un neviena zīmuļa.", de: "Franz hat keine Feder und keinen Bleistift." },
          { lv: "Kāda ir istaba?", de: "Wie ist das Zimmer?" },
          { lv: "Istaba ir liela, gaiša un silta.", de: "Das Zimmer ist groß, hell und warm." },
          { lv: "Vai tev ir rakstāmgalds?", de: "Hast du einen Schreibtisch?" },
          { lv: "Jā, man ir rakstāmgalds un galda lampa.", de: "Ja, ich habe einen Schreibtisch und eine Tischlampe." },
          { lv: "Kas ir skolotājam?", de: "Was hat der Lehrer?" },
          { lv: "Skolotājam ir daudz grāmatu un grāmatu plaukts.", de: "Der Lehrer hat viele Bücher und ein Bücherbrett." },
          { lv: "Kas ir laimīgs?", de: "Wer ist glücklich?" },
          { lv: "Bērns ir laimīgs, jo bērnam ir tēvs un māte.", de: "Das Kind ist glücklich, denn es hat einen Vater und eine Mutter." },
          { lv: "Ko dara Anna?", de: "Was tut Anna?" },
          { lv: "Viņa raksta.", de: "Sie schreibt." },
          { lv: "Vai Francis arī raksta?", de: "Schreibt Franz auch?" },
          { lv: "Nē, Francis neraksta, viņš zīmē.", de: "Nein, Franz schreibt nicht, er zeichnet." },
          { lv: "Vai viņi stāv?", de: "Stehen sie?" },
          { lv: "Nē, viņi apsēžas un mācās.", de: "Nein, sie setzen sich und lernen." }
        ]
      }
    ]
  },
  kurssLesson12: {
    id: "lesson12",
    title: "Lekcija 12",
    subtitle: "Salīdzināmās pakāpes, als / wie, vecums, īpašības vārdi un krāsas.",
    intro: "Divpadsmitā lekcija: salīdzināmās pakāpes, als / wie, vecums, īpašības vārdi un krāsas.",
    sections: [
      {
        title: "Dialogi / teikumi",
        items: [
          "Wie heißt du? Ich heiße Hans Grube.",
          "Wieviel Brüder hast du, Hans?",
          "Ich habe einen Bruder.",
          "Wie heißt er? Er heißt Max.",
          "Ist Max groß? Nein, er ist kleiner als ich.",
          "Wie alt bist du? Ich bin zwölf Jahre alt.",
          "Wie alt ist Max? Max ist zehn Jahre alt.",
          "Wieviel Schwestern hast du? Ich habe zwei Schwestern.",
          "Wie heißen sie? Sie heißen Elsa und Ida.",
          "Ida ist älter als ich; sie ist dreizehn Jahre alt.",
          "Sie ist so alt wie mein Vetter.",
          "Wer ist am ältesten? Die Großmutter ist am ältesten.",
          "Wer ist älter, die Lehrerin oder der Lehrer?",
          "Die Lehrerin ist ebenso alt wie der Lehrer.",
          "Wer ist am jüngsten? Elsa ist am jüngsten.",
          "Der Bruder ist faul, aber die Schwester ist fleißig.",
          "Der Schüler ist klein, aber der Lehrer ist groß.",
          "Die Schülerin ist jung, aber die Lehrerin ist alt.",
          "Der Sohn ist gesund, aber die Tochter ist krank.",
          "Der Federhalter ist blau, der Bleistift ist braun.",
          "Das Lineal ist gelb, das Gummi ist grau.",
          "Der Baum ist grün, die Blume ist rot.",
          "Die Tinte ist schwarz, die Kreide ist weiß."
        ]
      },
      {
        title: "Vārdi",
        items: [
          "heißen — saukt",
          "wie heißt du — kā tevi sauc",
          "ich heiße — mani sauc",
          "die Grube — bedre",
          "wieviel — cik",
          "Max (maks) — Maksis",
          "groß — liels",
          "klein — mazs",
          "kleiner als ich — mazāks par mani",
          "alt — vecs",
          "jung — jauns",
          "jünger als ich — jaunāks par mani",
          "so alt wie — tik vecs kā",
          "der Vetter (dēr feter) — brālēns",
          "am ältesten (am eltesten) — visvecākais",
          "ebenso — tāpat",
          "wie — kā",
          "am jüngsten — visjaunākais",
          "faul — slinks",
          "fleißig — čakls",
          "blau — zils",
          "braun — brūns",
          "gelb — dzeltens",
          "das Gummi (das gumī) — gumija",
          "grau — pelēks",
          "der Baum — koks",
          "grün — zaļš",
          "die Blume — puķe",
          "rot — sarkans",
          "die Tinte — tinte",
          "die Kreide — krīts",
          "weiß — balts",
          "schwarz — melns",
          "krank — slims",
          "gesund — vesels"
        ]
      },
      {
        title: "Izruna",
        items: [
          "x izrunā kā ks: Max (maks), Felix (feliks).",
          "Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).",
          "h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme."
        ]
      },
      {
        title: "Gramatika",
        items: [
          {
            heading: "Komparativ",
            text: "Īpašības vārdu pārāko pakāpi (Komparativ) darina no pamata pakāpes (Positiv) ar galotni -er.",
            examples: ["klein — kleiner", "alt — älter", "jung — jünger"]
          },
          {
            heading: "Umlaut pārākajā pakāpē",
            text: "Lielākai daļai vienzilbīgu īpašības vārdu ar celma patskani a, o, u pārākā pakāpē ir Umlaut.",
            examples: ["lang — länger", "groß — größer", "kurz — kürzer"]
          },
          {
            heading: "Salīdzināšana ar wie un als",
            text: "wie lieto, kad izsaka vienādību. als lieto, kad izsaka nevienādību.",
            examples: ["Elsa ist so alt wie mein Vetter.", "Ida ist älter als ich."]
          },
          {
            heading: "Superlativ",
            text: "Vispārāko pakāpi (Superlativ) darina, pieliekot pamata pakāpei galotni -sten vai -esten un priekšā satiksmes vārdu am.",
            examples: ["Ida ist am jüngsten.", "Die Großmutter ist am ältesten."]
          },
          {
            heading: "Neregulārās salīdzināmās pakāpes",
            table: [
              ["Positiv", "Komparativ", "Superlativ"],
              ["nah (tuvs)", "näher", "am nächsten"],
              ["hoch (augsts)", "höher", "am höchsten"],
              ["gut (labs)", "besser", "am besten"],
              ["viel (daudz)", "mehr", "am meisten"],
              ["bald (drīz)", "eher", "am ehesten"],
              ["gern (labprāt)", "lieber", "am liebsten"]
            ]
          }
        ]
      },
      {
        title: "Pārtulko",
        type: "translationCards",
        cards: [
          { lv: "Kas ir vecāks, tu vai es?", de: "Wer ist älter, du oder ich?" },
          { lv: "Tu esi vecāks par mani.", de: "Du bist älter als ich." },
          { lv: "Kas ir visvecākais?", de: "Wer ist am ältesten?" },
          { lv: "Pauls ir visvecākais.", de: "Paul ist am ältesten." },
          { lv: "Kā tevi sauc?", de: "Wie heißt du?" },
          { lv: "Mani sauc Pēteris.", de: "Ich heiße Peter." },
          { lv: "Kā viņu sauc?", de: "Wie heißt er?" },
          { lv: "Viņu sauc Jānis.", de: "Er heißt Johann." },
          { lv: "Kā Jūs sauc?", de: "Wie heißen Sie?" },
          { lv: "Cik vecs Jūs esat?", de: "Wie alt sind Sie?" },
          { lv: "Es esmu 20 gadus vecs.", de: "Ich bin zwanzig Jahre alt." },
          { lv: "Vai Maksis ir liels?", de: "Ist Max groß?" },
          { lv: "Nē, Maksis nav liels, Rūdolfs ir lielāks.", de: "Nein, Max ist nicht groß, Rudolf ist größer." },
          { lv: "Kas ir vislielākais?", de: "Wer ist am größten?" },
          { lv: "Francis ir vislielākais.", de: "Franz ist am größten." },
          { lv: "Cik veca ir māte?", de: "Wie alt ist die Mutter?" },
          { lv: "Māte ir tikpat veca kā tēvs.", de: "Die Mutter ist ebenso alt wie der Vater." },
          { lv: "Cik tev māsu?", de: "Wieviel Schwestern hast du?" },
          { lv: "Man ir trīs māsas.", de: "Ich habe drei Schwestern." },
          { lv: "Kā viņas sauc?", de: "Wie heißen sie?" },
          { lv: "Viņas sauc Elza, Marta un Alma.", de: "Sie heißen Elsa, Martha und Alma." },
          { lv: "Cik jums brāļu?", de: "Wieviel Brüder haben Sie?" },
          { lv: "Man ir viens brālis.", de: "Ich habe einen Bruder." },
          { lv: "Kāda ir tinte?", de: "Wie ist die Tinte?" },
          { lv: "Tā ir melna.", de: "Sie ist schwarz." },
          { lv: "Kāds ir krīts?", de: "Wie ist die Kreide?" },
          { lv: "Tas ir balts.", de: "Sie ist weiß." },
          { lv: "Kādas ir puķes?", de: "Wie sind die Blumen?" },
          { lv: "Tās ir zilas, sarkanas, dzeltenas un baltas.", de: "Sie sind blau, rot, gelb und weiß." },
          { lv: "Vai brālis ir vesels?", de: "Ist der Bruder gesund?" },
          { lv: "Jā, brālis ir vesels, bet māsa ir slima.", de: "Ja, der Bruder ist gesund, aber die Schwester ist krank." },
          { lv: "Vai jūs esat laimīgi?", de: "Sind Sie glücklich?" },
          { lv: "Jā, mēs esam laimīgi, jo mēs esam veseli.", de: "Ja, wir sind glücklich, denn wir sind gesund." }
        ]
      }
    ]
  },
  kurssLesson13: {
    id: "lesson13",
    title: "Lekcija 13",
    subtitle: "Der Körper, ķermeņa daļas, turnen, jeder un daudzskaitlis.",
    intro: "Trīspadsmitā lekcija: Der Körper, ķermeņa daļas, vingrošana, atgriezeniskie darbības vārdi un daudzskaitlis.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Der Mensch hat einen Kopf, einen Hals, einen Rumpf, zwei Arme, zwei Hände, zwei Beine und zwei Füße.",
        "Wie ist der Kopf? Der Kopf ist rund.", "Der Hals ist kurz.", "Der Rumpf ist lang.", "Der Arm ist auch lang.", "Die Hand ist klein.", "Das Bein ist dick.", "Der Fuß ist dünn.",
        "Die Brust ist vorn, aber der Rücken ist hinten.",
        "Jede Hand hat fünf Finger.", "Beide Hände haben zehn Finger.", "Jeder Fuß hat fünf Zehen.", "Beide Füße haben zehn Zehen.",
        "Jeder Finger und jede Zehe haben einen Nagel.", "Ich beschneide und reinige die Nägel oft."
      ] },
      { title: "Vārdiņi", items: [
        "der Körper — ķermenis", "der Mensch — cilvēks", "der Kopf — galva", "der Hals — kakls", "der Rumpf — rumpis", "der Arm — roka", "die Hand — plauksta", "die Hände — plaukstas", "das Bein — kāja", "die Beine — kājas", "der Fuß — kājas pēda", "die Füße — kāju pēdas", "rund — apaļš", "lang — garš", "kurz — īss", "klein — mazs", "groß — liels", "dick — resns / biezs", "dünn — tievs / plāns", "die Brust — krūtis", "vorn — priekšā", "der Rücken — mugura", "hinten — aizmugurē", "jeder — katrs", "jede — katra", "jedes — katrs", "der Finger — pirksts", "die Zehe — kājas pirksts", "beide — abi", "der Nagel — nags", "die Nägel — nagi", "beschneiden — apgriezt", "reinigen — tīrīt", "turnen — vingrot", "heben — celt", "machen — darīt / taisīt", "der Schritt — solis", "bleiben — palikt", "stehen — stāvēt", "sich umkehren — apgriezties", "ausstrecken — izstiept", "senken — nolaist", "drehen — griezt / pagriezt", "nach links — pa kreisi", "nach rechts — pa labi", "halten — turēt", "gerade — taisni", "atmen — elpot", "tief — dziļi"
      ] },
      { title: "Gramatika", items: [
        { heading: "Umlaut tagadnē", text: "Dažiem darbības vārdiem ar celma patskani a vai au tagadnes 2. un 3. personā vienskaitlī ir Umlaut.", examples: ["halten — ich halte, du hältst, er hält", "fallen — ich falle, du fällst, er fällt", "tragen — ich trage, du trägst, er trägt", "fangen — ich fange, du fängst, er fängt", "fahren — ich fahre, du fährst, er fährt", "laufen — ich laufe, du läufst, er läuft"] },
        { heading: "Atgriezeniskais darbības vārds", text: "sich umkehren — apgriezties", examples: ["ich kehre mich um", "du kehrst dich um", "er/sie/es kehrt sich um", "wir kehren uns um", "ihr kehrt euch um", "sie kehren sich um"] },
        { heading: "Pavēles forma ar sich umkehren", examples: ["kehr(e) dich um!", "kehrt euch um!", "Fräulein Müller, kehren Sie sich um!"] },
        { heading: "Darbības vārds atmen", text: "atmen — elpot", examples: ["ich atme", "du atmest", "er/sie/es atmet", "wir atmen", "ihr atmet", "sie atmen"] },
        { heading: "Pavēles forma ar atmen", examples: ["Paul, atme tief!", "Paul und Franz, atmet tief!", "Fräulein Müller, atmen Sie tief!"] },
        { heading: "Saliktie darbības vārdi", text: "Ja uzsvērta priedēkļa daļa, tā tagadnē atdalās un iet teikuma beigās.", examples: ["ausstrecken: ich strecke einen Arm aus.", "sich umkehren: ich kehre mich um."] },
        { heading: "Neatdalāmie priedēkļi", text: "Ja priedēklis nav uzsvērts, tas neatdalās.", examples: ["beschneiden: ich beschneide die Nägel.", "du beschneidest die Nägel."] },
        { heading: "Vietniekvārds jeder", text: "Vietniekvārds jeder lokās kā artikuli der / die / das.", table: [["", "Vīriešu", "Sieviešu", "Vidējā"], ["Nominatīvs", "jeder Finger", "jede Hand", "jedes Bein"], ["Akuzatīvs", "jeden Finger", "jede Hand", "jedes Bein"]] },
        { heading: "Daudzskaitlis bez galotnes", examples: ["der Bruder — die Brüder", "der Finger — die Finger", "der Körper — die Körper", "das Fenster — die Fenster", "das Mädchen — die Mädchen"] },
        { heading: "Daudzskaitlis ar galotni -e", examples: ["der Stuhl — die Stühle", "der Kopf — die Köpfe", "der Arm — die Arme", "der Fuß — die Füße", "das Bein — die Beine", "die Hand — die Hände", "der Baum — die Bäume"] },
        { heading: "Daudzskaitlis ar galotni -en vai -n", examples: ["die Feder — die Federn", "die Karte — die Karten", "die Frau — die Frauen", "die Lehrerin — die Lehrerinnen", "die Schülerin — die Schülerinnen"] },
        { heading: "Daudzskaitlis ar galotni -er", examples: ["das Buch — die Bücher", "das Haus — die Häuser", "das Kind — die Kinder", "der Mann — die Männer"] },
        { heading: "Sieviešu kārtas lietvārdi ar -in", text: "Sieviešu kārtas lietvārdi, kas veidoti ar -in, daudzskaitlī pieņem -nen.", examples: ["der Lehrer — die Lehrerin — die Lehrerinnen", "der Schüler — die Schülerin — die Schülerinnen", "der Bauer — die Bäuerin — die Bäuerinnen", "der Arbeiter — die Arbeiterin — die Arbeiterinnen"] }
      ] },
      { title: "Izruna", items: ["h vārdā halten ir dzirdama skaņa.", "h vārdā fahren rāda patskaņa garumu.", "a vārdā halten izrunā īsi: halten.", "a vārdā tragen izrunā gari: tragen.", "äu izrunā kā oi: du läufst, er läuft.", "pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt."] },
      { title: "Vingrinājums", cards: [
        { ich: "Ich hebe die Beine.", er: "Er hebt die Beine.", wir: "Wir heben die Beine." },
        { ich: "Ich hebe die Arme.", er: "Er hebt die Arme.", wir: "Wir heben die Arme." },
        { ich: "Ich mache zwei Schritte.", er: "Er macht zwei Schritte.", wir: "Wir machen zwei Schritte." },
        { ich: "Ich bleibe stehen.", er: "Er bleibt stehen.", wir: "Wir bleiben stehen." },
        { ich: "Ich kehre mich um.", er: "Er kehrt sich um.", wir: "Wir kehren uns um." },
        { ich: "Ich strecke einen Arm aus.", er: "Er streckt einen Arm aus.", wir: "Wir strecken einen Arm aus." },
        { ich: "Ich strecke beide Arme aus.", er: "Er streckt beide Arme aus.", wir: "Wir strecken beide Arme aus." },
        { ich: "Ich senke beide Arme.", er: "Er senkt beide Arme.", wir: "Wir senken beide Arme." },
        { ich: "Ich drehe den Kopf nach links.", er: "Er dreht den Kopf nach links.", wir: "Wir drehen den Kopf nach links." },
        { ich: "Ich drehe den Kopf nach rechts.", er: "Er dreht den Kopf nach rechts.", wir: "Wir drehen den Kopf nach rechts." },
        { ich: "Ich halte den Kopf gerade.", er: "Er hält den Kopf gerade.", wir: "Wir halten den Kopf gerade." },
        { ich: "Ich atme tief.", er: "Er atmet tief.", wir: "Wir atmen tief." }
      ] },      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Cik cilvēkam ir roku?", de: "Wie viele Arme hat der Mensch?" }, { lv: "Cik tev ir kāju?", de: "Wie viele Beine hast du?" }, { lv: "Kāda ir galva?", de: "Wie ist der Kopf?" }, { lv: "Kāds ir rumpis?", de: "Wie ist der Rumpf?" }, { lv: "Kāda ir roka?", de: "Wie ist der Arm?" }, { lv: "Kāda ir kāja?", de: "Wie ist das Bein?" }, { lv: "Roka ir maza, bet kāja ir liela.", de: "Der Arm ist klein, aber das Bein ist groß." }, { lv: "Kur ir krūtis?", de: "Wo ist die Brust?" }, { lv: "Kur ir mugura?", de: "Wo ist der Rücken?" }, { lv: "Krūtis ir priekšā, mugura ir aizmugurē.", de: "Die Brust ist vorn, der Rücken ist hinten." }, { lv: "Cik pirkstu ir plaukstai?", de: "Wie viele Finger hat die Hand?" }, { lv: "Plaukstai ir pieci pirksti.", de: "Die Hand hat fünf Finger." }, { lv: "Cik pirkstu ir divām rokām?", de: "Wie viele Finger haben zwei Hände?" }, { lv: "Divām rokām ir desmit pirkstu.", de: "Zwei Hände haben zehn Finger." }, { lv: "Kas ir pirkstam?", de: "Was hat der Finger?" }, { lv: "Pirkstam ir nags.", de: "Der Finger hat einen Nagel." }, { lv: "Ko tu dari?", de: "Was tust du?" }, { lv: "Es apgriežu un tīru nagus.", de: "Ich beschneide und reinige die Nägel." }, { lv: "Ko Pauls dara?", de: "Was tut Paul?" }, { lv: "Viņš vingro.", de: "Er turnt." }, { lv: "Kā viņi vingro?", de: "Wie turnen sie?" }, { lv: "Viņi ceļ kājas un rokas.", de: "Sie heben die Beine und die Arme." }, { lv: "Viņi izstiepj abas rokas.", de: "Sie strecken beide Arme aus." }, { lv: "Viņi nolaiž abas rokas.", de: "Sie senken beide Arme." }, { lv: "Viņi pagriež galvu pa labi.", de: "Sie drehen den Kopf nach rechts." }, { lv: "Kas elpo dziļi?", de: "Wer atmet tief?" }, { lv: "Pēteris un Anna elpo dziļi.", de: "Peter und Anna atmen tief." }, { lv: "Vai Roberts arī vingro?", de: "Turnt Robert auch?" }, { lv: "Nē, Roberts un Jānis nevingro.", de: "Nein, Robert und Johann turnen nicht." }, { lv: "Robert, vingro!", de: "Robert, turne!" }, { lv: "Robert un Jāni, vingrojiet!", de: "Robert und Johann, turnt!" }, { lv: "Müller jaunkundze, vingrojiet!", de: "Fräulein Müller, turnen Sie!" }, { lv: "Pasperiet divus soļus un tad palieciet stāvam!", de: "Machen Sie zwei Schritte, und dann bleiben Sie stehen!" }
      ] }
    ]
  },
  kurssLesson14: {
    id: "lesson14",
    title: "Lekcija 14",
    subtitle: "müssen, wollen, mögen",
    intro: "Četrpadsmitā lekcija: modālie darbības vārdi müssen, wollen un mögen.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Ich muß lernen, denn ich will vorwärts kommen.",
        "Du mußt lernen, denn du willst vorwärts kommen.",
        "Er muß lernen, denn er will vorwärts kommen.",
        "Sie muß lernen, denn sie will vorwärts kommen.",
        "Es muß lernen, denn es will vorwärts kommen.",
        "Wir müssen lernen, denn wir wollen vorwärts kommen.",
        "Ihr müßt lernen, denn ihr wollt vorwärts kommen.",
        "Sie müssen lernen, denn sie wollen vorwärts kommen.",
        "Ich mag die Suppe nicht essen, denn sie mundet mir nicht.",
        "Du magst die Suppe nicht essen, denn sie mundet dir nicht.",
        "Er mag die Suppe nicht essen, denn sie mundet ihm nicht.",
        "Sie mag die Suppe nicht essen, denn sie mundet ihr nicht.",
        "Es mag die Suppe nicht essen, denn sie mundet ihm nicht.",
        "Wir mögen die Suppe nicht essen, denn sie mundet uns nicht.",
        "Ihr mögt die Suppe nicht essen, denn sie mundet euch nicht.",
        "Sie mögen die Suppe nicht essen, denn sie mundet ihnen nicht."
      ] },
      { title: "Vārdiņi", items: [
        "müssen — vajadzēt / būt jādara", "ich muß — man vajag / man jādara", "du mußt — tev vajag / tev jādara", "er muß — viņam vajag / viņam jādara", "sie muß — viņai vajag / viņai jādara", "es muß — tam vajag / tam jādara", "wir müssen — mums vajag / mums jādara", "ihr müßt — jums vajag / jums jādara", "sie müssen — viņiem / viņām vajag",
        "lernen — mācīties", "vorwärts — uz priekšu", "vorwärts kommen — tikt uz priekšu", "wollen — gribēt", "ich will — es gribu", "du willst — tu gribi", "er will — viņš grib", "sie will — viņa grib", "es will — tas grib", "wir wollen — mēs gribam", "ihr wollt — jūs gribat", "sie wollen — viņi / viņas grib",
        "mögen — gribēt / vēlēties / patikt", "ich mag — es gribu / man patīk", "du magst — tu gribi / tev patīk", "er mag — viņš grib / viņam patīk", "sie mag — viņa grib / viņai patīk", "es mag — tas grib / tam patīk", "wir mögen — mēs gribam", "ihr mögt — jūs gribat", "sie mögen — viņi / viņas grib",
        "die Suppe — zupa", "munden — labi garšot", "mir — man", "dir — tev", "ihm — viņam", "ihr — viņai", "uns — mums", "euch — jums", "ihnen — viņiem / viņām", "denn — jo"
      ] },
      { title: "Gramatika", items: [
        { heading: "Modālie darbības vārdi", text: "Darbības vārdi müssen, wollen un mögen ir modālie darbības vārdi." },
        { heading: "1. un 3. persona vienskaitlī", text: "Tagadnes vienskaitlī 1. un 3. persona ir vienāda.", examples: ["ich muß", "er muß", "ich will", "er will", "ich mag", "er mag"] },
        { heading: "Müssen", examples: ["ich muß", "du mußt", "er/sie/es muß", "wir müssen", "ihr müßt", "sie müssen"] },
        { heading: "Wollen", examples: ["ich will", "du willst", "er/sie/es will", "wir wollen", "ihr wollt", "sie wollen"] },
        { heading: "Mögen", examples: ["ich mag", "du magst", "er/sie/es mag", "wir mögen", "ihr mögt", "sie mögen"] },
        { heading: "Celma patskaņu maiņa", examples: ["müssen: ich muß — wir müssen", "wollen: ich will — wir wollen", "mögen: ich mag — wir mögen"] },
        { heading: "Müssen", text: "Müssen nozīmē vajadzēt / būt nepieciešamam.", examples: ["Ich muß lernen. — Man jāmācās."] },
        { heading: "Wollen", text: "Wollen nozīmē apzināti gribēt kaut ko darīt.", examples: ["Ich will vorwärts kommen. — Es gribu tikt uz priekšu."] },
        { heading: "Mögen", text: "Mögen izsaka vēlēšanos vai patiku.", examples: ["Ich mag die Suppe nicht essen. — Es negribu zupu ēst.", "Die Suppe mundet mir nicht. — Zupa man negaršo."] },
        { heading: "Svarīgi", text: "Latviski bieži sakām “man jāmācās”, “tev jāraksta”, “viņam jānāk”. Vāciski šādos teikumos bieži lieto müssen.", examples: ["Ich muß lernen.", "Du mußt den Brief schreiben.", "Er muß heute kommen."] }
      ] },
      { title: "Izruna", items: [
        "ß izrunā kā latviešu s.",
        "ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muß, er muß.",
        "Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muß, du mußt, ihr müßt.",
        "ö vārdā mögen izrunā kā skaidru ö skaņu.",
        "Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.",
        "Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai."
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Kas grib čakli mācīties?", de: "Wer will fleißig lernen?" },
        { lv: "Visi skolnieki grib čakli mācīties.", de: "Alle Schüler wollen fleißig lernen." },
        { lv: "Kam šodien jānāk?", de: "Wer muß heute kommen?" },
        { lv: "Man šodien jānāk.", de: "Ich muß heute kommen." },
        { lv: "Tev jāraksta vēstule.", de: "Du mußt den Brief schreiben." },
        { lv: "Kam čakli jāmācās?", de: "Wer muß fleißig lernen?" },
        { lv: "Skolniekiem čakli jāmācās.", de: "Die Schüler müssen fleißig lernen." },
        { lv: "Es negribu zupu ēst, jo tā man negaršo.", de: "Ich mag die Suppe nicht essen, denn sie mundet mir nicht." },
        { lv: "Kas grib zupu ēst?", de: "Wer will die Suppe essen?" },
        { lv: "Elza grib zupu ēst.", de: "Elsa will die Suppe essen." },
        { lv: "Kam jālasa grāmata?", de: "Wer muß das Buch lesen?" },
        { lv: "Brālim jālasa grāmata.", de: "Der Bruder muß das Buch lesen." },
        { lv: "Es negribu dziedāt.", de: "Ich mag nicht singen." },
        { lv: "Tēvam jāpērk galds.", de: "Der Vater muß einen Tisch kaufen." }
      ] }
    ]
  },
  kurssLesson15: {
    id: "lesson15",
    title: "Lekcija 15",
    subtitle: "sollen, dürfen, essen, augļi",
    intro: "Piecpadsmitā lekcija: sollen, dürfen, essen un augļu vārdi.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Ich soll das Messer nicht nehmen, denn ich darf den Apfel nicht schälen.",
        "Du sollst das Messer nicht nehmen, denn du darfst den Apfel nicht schälen.",
        "Er soll das Messer nicht nehmen, denn er darf den Apfel nicht schälen.",
        "Sie soll das Messer nicht nehmen, denn sie darf den Apfel nicht schälen.",
        "Es soll das Messer nicht nehmen, denn es darf den Apfel nicht schälen.",
        "Wir sollen das Messer nicht nehmen, denn wir dürfen den Apfel nicht schälen.",
        "Ihr sollt das Messer nicht nehmen, denn ihr dürft den Apfel nicht schälen.",
        "Sie sollen das Messer nicht nehmen, denn sie dürfen den Apfel nicht schälen.",
        "Fritz, siehst du die Äpfel dort?",
        "Darf ich ein Messer nehmen?",
        "Ja, nimm ein Messer!",
        "Was tut der Knabe?",
        "Er nimmt ein Messer.",
        "Darf Hans einen Apfel schälen?",
        "Ja, er darf einen Apfel schälen.",
        "Dürfen Herta und Robert auch einen Apfel schälen und entzweischneiden?",
        "Ja, sie dürfen den Apfel schälen und entzweischneiden.",
        "Was essen die Kinder gern?",
        "Die Kinder essen Äpfel, Birnen, Pflaumen und Kirschen gern.",
        "Ißt den Apfel!",
        "Was tut Grete?",
        "Sie ißt den Apfel.",
        "Fräulein Müller, essen Sie auch einen Apfel!",
        "Mutter, dürfen wir diese Birnen essen?",
        "Nein, Kinder, diese Birnen sollt ihr nicht essen; sie sind nicht reif, sie sind unreif."
      ] },
      { title: "Vārdiņi", items: [
        "sollen — vajadzēt / būt pienākumam", "ich soll — man vajag / man jādara", "du sollst — tev vajag / tev jādara", "er soll — viņam vajag / viņam jādara", "wir sollen — mums vajag / mums jādara", "ihr sollt — jums vajag / jums jādara", "sie sollen — viņiem / viņām vajag",
        "dürfen — drīkstēt", "ich darf — es drīkstu", "du darfst — tu drīksti", "er darf — viņš drīkst", "wir dürfen — mēs drīkstam", "ihr dürft — jūs drīkstat", "sie dürfen — viņi / viņas drīkst",
        "nicht — ne", "das Messer — nazis", "der Apfel — ābols", "die Äpfel — āboli", "schälen — mizot", "entzweischneiden — pārgriezt uz pusēm", "die Birne — bumbieris", "die Birnen — bumbieri", "die Pflaume — plūme", "die Pflaumen — plūmes", "die Kirsche — ķirsis", "die Kirschen — ķirši", "gern — labprāt", "reif — ienācies / nogatavojies", "unreif — neienācies / nenogatavojies", "nehmen — ņemt", "ich nehme — es ņemu", "du nimmst — tu ņem", "er nimmt — viņš ņem", "essen — ēst", "ich esse — es ēdu", "du ißt — tu ēd", "er ißt — viņš ēd", "wir essen — mēs ēdam", "ihr eßt — jūs ēdat", "sie essen — viņi / viņas ēd"
      ] },
      { title: "Gramatika", items: [
        { heading: "Sollen", text: "Sollen nozīmē vajadzēt pienākuma nozīmē." },
        { heading: "Salīdzinājums", examples: ["müssen — vajadzēt aiz nepieciešamības vai pārliecības", "sollen — vajadzēt pienākuma nozīmē", "Ich muß lernen. — Man jāmācās, jo tas ir nepieciešams.", "Ich soll lernen. — Man jāmācās, jo tas ir mans pienākums."] },
        { heading: "Sollen formas", text: "Darbības vārdam sollen tagadnes vienskaitļa 1. un 3. persona ir vienāda.", examples: ["ich soll", "du sollst", "er/sie/es soll", "wir sollen", "ihr sollt", "sie sollen"] },
        { heading: "Dürfen", text: "Dürfen nozīmē drīkstēt. Dürfen vienskaitlī celma patskanis ir a, bet daudzskaitlī ü.", examples: ["ich darf", "du darfst", "er/sie/es darf", "wir dürfen", "ihr dürft", "sie dürfen"] },
        { heading: "Essen", text: "Essen loka šādi.", examples: ["ich esse", "du ißt", "er/sie/es ißt", "wir essen", "ihr eßt", "sie essen"] },
        { heading: "Mūsdienu rakstība", text: "Ja projektā izmanto mūsdienu rakstību, drīkst rakstīt: du isst, er/sie/es isst, ihr esst." },
        { heading: "entzweischneiden", text: "Saliktajā darbības vārdā entzweischneiden uzsvars ir uz priedēkļa entzweí-, tāpēc tagadnē priedēklis atdalās un nostājas teikuma beigās.", examples: ["Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm."] }
      ] },
      { title: "Izruna", items: [
        "ä vārdos Äpfel un schälen izrunā kā šauro e.",
        "Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.",
        "Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.",
        "Vārdā gern e ir īss un plats.",
        "Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif."
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Kas ir vesels, kas drīkst strādāt?", de: "Wer ist gesund, wer darf arbeiten?" },
        { lv: "Francis ir vesels, viņš drīkst strādāt.", de: "Franz ist gesund, er darf arbeiten." },
        { lv: "Vai vectēvs drīkst strādāt?", de: "Darf der Großvater arbeiten?" },
        { lv: "Nē, vectēvs nedrīkst strādāt, jo viņš ir slims.", de: "Nein, der Großvater darf nicht arbeiten, denn er ist krank." },
        { lv: "Māt, vai es drīkstu plūmes ēst?", de: "Mutter, darf ich die Pflaumen essen?" },
        { lv: "Nē, plūmes tev nevajag ēst, tās ir neienākušās.", de: "Nein, die Pflaumen sollst du nicht essen, sie sind unreif." },
        { lv: "Vai tu ēdi ābolu vai bumbieri?", de: "Ißt du einen Apfel oder eine Birne?" },
        { lv: "Es ēdu bumbieri.", de: "Ich esse eine Birne." },
        { lv: "Kā garšo bumbieris?", de: "Wie mundet die Birne?" },
        { lv: "Bumbieris garšo ļoti labi.", de: "Die Birne mundet sehr gut." },
        { lv: "Kam jāmācās?", de: "Wer muß lernen?" },
        { lv: "Skolniekam jāmācās.", de: "Der Schüler muß lernen." },
        { lv: "Vai viņš grib uz priekšu tikt?", de: "Will er vorwärts kommen?" },
        { lv: "Jā, viņš grib uz priekšu tikt.", de: "Ja, er will vorwärts kommen." },
        { lv: "Vai bērns drīkst nazi ņemt?", de: "Darf das Kind das Messer nehmen?" },
        { lv: "Bērnam nevajag nazi ņemt, jo nazis ir ass.", de: "Das Kind soll das Messer nicht nehmen, denn das Messer ist scharf." }
      ] }
    ]
  },
  kurssLesson16: {
    id: "lesson16",
    title: "Lekcija 16",
    subtitle: "Dativs, geben, sich nähern",
    intro: "Sešpadsmitā lekcija: datīvs, geben, sich nähern un datīva vingrinājumi.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Wem schenkt der Vater ein Buch?", "Der Vater schenkt dem Sohne ein Buch.", "Der Vater schenkt den Söhnen Bücher.",
        "Wem nähert sich die Mutter?", "Die Mutter nähert sich der Tochter.", "Die Mutter nähert sich den Töchtern.",
        "Wem gibt die Magd Brot und Milch?", "Die Magd gibt dem Kinde Brot und Milch.", "Die Magd gibt den Kindern Brot und Milch.",
        "Wem gehorchen die Kinder?", "Sie gehorchen den Eltern.",
        "Wem gehorcht der Hund?", "Der Hund gehorcht dem Knechte.",
        "Wem gehören die Felder, die Wiesen und die Wälder?", "Die Felder, die Wiesen und die Wälder gehören den Bauern und den Bäuerinnen.",
        "Wem folgt der Hund?", "Der Hund folgt dem Jäger.", "Der Hund ist dem Jäger treu."
      ] },
      { title: "Vārdiņi", items: [
        "wem — kam?", "schenken — dāvināt", "dem Sohne — dēlam", "den Söhnen — dēliem", "sich nähern — tuvoties", "ich nähere mich — es tuvojos", "du näherst dich — tu tuvojies", "geben — dot", "ich gebe — es dodu", "du gibst — tu dod", "er gibt — viņš dod", "die Magd — kalpone", "Brot — maize", "Milch — piens", "gehorchen — paklausīt", "der Knecht — kalps", "gehören — piederēt", "das Feld — lauks / tīrums", "die Felder — lauki / tīrumi", "die Wiese — pļava", "die Wiesen — pļavas", "der Wald — mežs", "die Wälder — meži", "der Bauer — zemnieks", "die Bäuerin — zemniece", "folgen — sekot", "der Jäger — mednieks", "treu — uzticīgs"
      ] },
      { title: "Gramatika", items: [
        { heading: "Dativs", text: "Dativs atbild uz jautājumu: wem? — kam?" },
        { heading: "Vienskaitlis", table: [["", "Vīriešu", "Sieviešu", "Vidējā"], ["Nominativ", "der Sohn", "die Tochter", "das Kind"], ["Dativ", "dem Sohn(e)", "der Tochter", "dem Kind(e)"], ["Akkusativ", "den Sohn", "die Tochter", "das Kind"]] },
        { heading: "Daudzskaitlis", table: [["", "Vīriešu", "Sieviešu", "Vidējā"], ["Nominativ", "die Söhne", "die Töchter", "die Kinder"], ["Dativ", "den Söhnen", "den Töchtern", "den Kindern"], ["Akkusativ", "die Söhne", "die Töchter", "die Kinder"]] },
        { heading: "Datīva -e", text: "Vīriešu un vidējās kārtas lietvārdi vienskaitļa datīvā var pieņemt galotni -e. Mūsdienās šī galotne bieži atkrīt.", examples: ["dem Sohne / dem Sohn", "dem Kinde / dem Kind", "dem Arme / dem Arm", "dem Beine / dem Bein"] },
        { heading: "Sieviešu kārta datīvā", text: "Sieviešu kārtas lietvārdi vienskaitļa datīvā nepieņem galotni.", examples: ["die Tochter — der Tochter", "die Wiese — der Wiese", "die Mutter — der Mutter"] },
        { heading: "Nenoteiktais artikuls datīvā", examples: ["ein Messer — einem Messer", "das Messer — dem Messer", "ein Apfel — einem Apfel", "der Apfel — dem Apfel", "eine Mutter — einer Mutter", "die Mutter — der Mutter"] },
        { heading: "Daudzskaitļa datīvs", text: "Daudzskaitļa datīvā artikuls un lietvārds bieži pieņem galotni -n.", examples: ["die Bücher — den Büchern", "die Schlüssel — den Schlüsseln", "die Söhne — den Söhnen", "die Kinder — den Kindern"] },
        { heading: "Ja daudzskaitlis jau beidzas ar -n", text: "Ja daudzskaitlis jau beidzas ar -n, vēl vienu -n nepievieno.", examples: ["die Wiesen — den Wiesen", "die Blumen — den Blumen", "die Wagen — den Wagen"] },
        { heading: "geben", text: "Darbības vārdā geben 2. un 3. personā vienskaitlī e pārvēršas par i.", examples: ["ich gebe", "du gibst", "er gibt"] },
        { heading: "sich nähern", text: "Atgriezeniskais darbības vārds: sich nähern — tuvoties.", examples: ["ich nähere mich", "du näherst dich", "er nähert sich"] },
        { heading: "Daudzskaitlis ar Umlaut", examples: ["die Mutter — die Mütter", "die Tochter — die Töchter"] },
        { heading: "Bez artikula", text: "Vārdi, kas bieži lietojami bez artikula: die Milch, das Brot." }
      ] },
      { title: "Izruna", items: ["Vārdos wem, dem, den, der — e ir garš un šaurs.", "Vārdā gehorchen h ir dzirdams: ge-hor-chen.", "die Wälder: ä izrunā kā šaurais īsais e.", "die Bäuerinnen: äu izrunā kā oi.", "-ie ir garā ī apzīmējums: die Wiese."] },
      { title: "Vingrinājums", cards: [
        { prompt: "Der Vater ruft d... Mann.", task: "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.", answer: "Der Vater ruft den Mann." }, { prompt: "Der Vater ruft d... Frau.", task: "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.", answer: "Der Vater ruft die Frau." }, { prompt: "Der Vater ruft d... Kind.", task: "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.", answer: "Der Vater ruft das Kind." }, { prompt: "Der Vater ruft d... Sohn.", task: "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.", answer: "Der Vater ruft den Sohn." }, { prompt: "Der Vater ruft d... Fräulein.", task: "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.", answer: "Der Vater ruft das Fräulein." }, { prompt: "Der Vater ruft d... Tante.", task: "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes.", answer: "Der Vater ruft die Tante." },
        { prompt: "Der Vater nähert sich d... Knechte.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich dem Knechte." }, { prompt: "Der Vater nähert sich d... Tochter.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich der Tochter." }, { prompt: "Der Vater nähert sich d... Magd.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich der Magd." }, { prompt: "Der Vater nähert sich d... Lehrer.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich dem Lehrer." }, { prompt: "Der Vater nähert sich d... Tischler.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich dem Tischler." }, { prompt: "Der Vater nähert sich d... Lehrerin.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich der Lehrerin." }, { prompt: "Der Vater nähert sich d... Mädchen.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich dem Mädchen." }, { prompt: "Der Vater nähert sich d... Jäger.", task: "Ieliec pareizo artikulu datīvā.", answer: "Der Vater nähert sich dem Jäger." },
        { prompt: "Der Vater ruft den Mann, die Frau, das Kind, den Sohn, das Fräulein, die Tante.", task: "Pārveido daudzskaitlī.", answer: "Der Vater ruft die Männer, die Frauen, die Kinder, die Söhne, die Fräulein, die Tanten." },
        { prompt: "Der Vater nähert sich dem Knechte, der Tochter, der Magd, dem Lehrer, dem Tischler, der Lehrerin, dem Mädchen, dem Jäger.", task: "Pārveido daudzskaitlī.", answer: "Der Vater nähert sich den Knechten, den Töchtern, den Mägden, den Lehrern, den Tischlern, den Lehrerinnen, den Mädchen, den Jägern." }
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Ko sauc tēvs?", de: "Wen ruft der Vater?" }, { lv: "Viņš sauc dēlu un meitu.", de: "Er ruft den Sohn und die Tochter." }, { lv: "Kam pieder šis mežs?", de: "Wem gehört dieser Wald?" }, { lv: "Šis mežs pieder zemniekam.", de: "Dieser Wald gehört dem Bauer." }, { lv: "Kam paklausa suns?", de: "Wem gehorcht der Hund?" }, { lv: "Suns paklausa kalpiem un kalponēm.", de: "Der Hund gehorcht den Knechten und den Mägden." }, { lv: "Cik suņu ir medniekam?", de: "Wieviel Hunde hat der Jäger?" }, { lv: "Medniekam ir pieci suņi.", de: "Der Jäger hat fünf Hunde." }, { lv: "Kāds ir suns?", de: "Wie ist der Hund?" }, { lv: "Suns ir uzticīgs.", de: "Der Hund ist treu." }, { lv: "Kādi ir suņi?", de: "Wie sind die Hunde?" }, { lv: "Suņi ir uzticīgi.", de: "Die Hunde sind treu." }, { lv: "Kas tuvojas skolniekiem un skolniecēm?", de: "Wer nähert sich den Schülern und Schülerinnen?" }, { lv: "Skolotājs tuvojas skolniekiem un skolniecēm.", de: "Der Lehrer nähert sich den Schülern und Schülerinnen." }
      ] }
    ]
  },
  kurssLesson17: {
    id: "lesson17",
    title: "Lekcija 17",
    subtitle: "mit + Dativ, womit / mit wem, darbības vārdi ar Umlaut",
    intro: "Septiņpadsmitā lekcija: mit + Dativ, womit / mit wem un darbības vārdi ar Umlaut.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Der Knabe hat einen Spaten.", "Er will eine Grube graben.", "Womit gräbt er die Grube?", "Er gräbt die Grube mit dem Spaten.",
        "Das Mädchen hat einen Ball.", "Das Mädchen spielt mit dem Ball.", "Es wirft den Ball.",
        "Womit fängt das Mädchen den Ball wieder auf?", "Das Mädchen fängt den Ball wieder mit den Händen auf.",
        "Der Schuldiener hat einen Besen.", "Womit fegt er die Diele?", "Er fegt die Diele mit dem Besen.",
        "Die Schuldienerin hat einen Lappen.", "Sie wischt den Staub mit dem Lappen ab.",
        "Wer hilft der Dienerin?", "Die Schwester hilft der Dienerin.", "Die Dienerin dankt der Schwester.",
        "Mit wem spricht der Bruder?", "Er spricht mit dem Freunde, mit der Freundin, mit dem Mädchen.", "Er spricht mit den Freunden, mit den Freundinnen, mit den Mädchen."
      ] },
      { title: "Vārdiņi", items: [
        "der Spaten — lāpsta", "die Grube — bedre", "graben — rakt", "womit — ar ko?", "der Ball — bumba", "werfen — mest", "fangen — ķert", "auffangen — uzķert / noķert", "wieder — atkal", "der Schuldiener — skolas apkalpotājs", "der Besen — slota", "fegen — slaucīt ar slotu", "die Diele — grīda", "der Lappen — lupata / drāna", "wischen — slaucīt / tīrīt", "abwischen — noslaucīt", "helfen — palīdzēt", "danken — pateikties", "der Freund — draugs", "die Freundin — draudzene", "die Freundinnen — draudzenes", "mit — ar", "mit wem — ar ko? / ar kuru?", "der Staub — putekļi", "der Bruder — brālis", "die Schwester — māsa", "die Dienerin — kalpone"
      ] },
      { title: "Gramatika", items: [
        { heading: "mit + Dativ", text: "Prievārds mit vienmēr stāv ar datīvu. Latviski: mit = ar." },
        { heading: "mit wem? / womit?", text: "Vāciski jautājumu “ar ko?” izsaka divējādi: mit wem? — par personām, womit? — par lietām/priekšmetiem.", examples: ["Mit wem spricht der Bruder? — Ar ko runā brālis?", "Womit gräbt der Knabe die Grube? — Ar ko zēns rok bedri?"] },
        { heading: "Mit + Dativ", examples: ["mit dem Spaten", "mit dem Ball", "mit dem Besen", "mit dem Lappen", "mit der Freundin", "mit der Schwester", "mit der Dienerin", "mit den Händen", "mit den Freunden", "mit den Freundinnen", "mit den Mädchen"] },
        { heading: "graben / fangen / auffangen", text: "Darbības vārdiem graben, fangen, auffangen 2. un 3. personā vienskaitlī ir Umlaut.", examples: ["ich grabe", "du gräbst", "er gräbt", "ich fange auf", "du fängst auf", "er fängt auf"] },
        { heading: "helfen / werfen", text: "Darbības vārdiem helfen un werfen 2. un 3. personā vienskaitlī celma e pārvēršas par i.", examples: ["ich helfe", "du hilfst", "er hilft", "ich werfe", "du wirfst", "er wirft"] },
        { heading: "Atdalāmie priedēkļi", text: "Saliktajiem darbības vārdiem auffangen un abwischen uzsvars ir uz priedēkļa. Tāpēc priedēklis tagadnē atdalās un nostājas teikuma beigās.", examples: ["Das Mädchen fängt den Ball auf.", "Die Schuldienerin wischt den Staub ab."] },
        { heading: "fegen / wischen", text: "Fegen un wischen abi nozīmē slaucīt, bet lietojums atšķiras.", examples: ["fegen — slaucīt ar slotu", "Wir fegen mit dem Besen.", "wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus", "Wir wischen den Staub ab.", "Wir wischen die Tafel ab."] }
      ] },
      { title: "Izruna", items: [
        "Vārdā werfen pirmais e ir plats: werfen.",
        "Vārdā wieder e ir plats: wieder.",
        "Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.",
        "Vārdā der Spaten sp izrunā kā šp: der Spaten."
      ] },
      { title: "Vingrinājums", cards: [
        { instruction: "Jautā un atbildi vienskaitlī un daudzskaitlī.", prompt: "Wen sieht der Knecht? (der Jäger, der Müller, der Tischler)", task: "Atbildi vienskaitlī, pēc tam daudzskaitlī.", task2: "Tagad atbildi daudzskaitlī.", answer: "Der Knecht sieht den Jäger, den Müller, den Tischler.", answer2: "Der Knecht sieht die Jäger, die Müller, die Tischler." },
        { instruction: "Jautā un atbildi vienskaitlī un daudzskaitlī.", prompt: "Was sieht der Knecht? (der Besen, die Schaufel, der Garten)", task: "Atbildi vienskaitlī, pēc tam daudzskaitlī.", task2: "Tagad atbildi daudzskaitlī.", answer: "Der Knecht sieht den Besen, die Schaufel, den Garten.", answer2: "Der Knecht sieht die Besen, die Schaufeln, die Gärten." },
        { instruction: "Jautā un atbildi vienskaitlī un daudzskaitlī.", prompt: "Mit wem spricht der Knecht? (der Vetter, die Base, das Mädchen)", task: "Atbildi vienskaitlī, pēc tam daudzskaitlī.", task2: "Tagad atbildi daudzskaitlī.", answer: "Der Knecht spricht mit dem Vetter, mit der Base, mit dem Mädchen.", answer2: "Der Knecht spricht mit den Vettern, mit den Basen, mit den Mädchen." },
        { instruction: "Jautā un atbildi vienskaitlī un daudzskaitlī.", prompt: "Womit arbeitet der Knecht? (der Spaten, dieses Beil, jene Säge)", task: "Atbildi vienskaitlī, pēc tam daudzskaitlī.", task2: "Tagad atbildi daudzskaitlī.", answer: "Der Knecht arbeitet mit dem Spaten, mit diesem Beil, mit jener Säge.", answer2: "Der Knecht arbeitet mit den Spaten, mit diesen Beilen, mit jenen Sägen." },
        { instruction: "Jautā un atbildi vienskaitlī un daudzskaitlī.", prompt: "Wem hilft der Knecht? (dieser Tischler, jene Frau, das Fräulein)", task: "Atbildi vienskaitlī, pēc tam daudzskaitlī.", task2: "Tagad atbildi daudzskaitlī.", answer: "Der Knecht hilft diesem Tischler, jener Frau, dem Fräulein.", answer2: "Der Knecht hilft diesen Tischlern, jenen Frauen, den Fräulein." }
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Kas ir platāks, durvis vai logs?", de: "Was ist breiter, die Tür oder das Fenster?" },
        { lv: "Durvis platākas par logu.", de: "Die Tür ist breiter als das Fenster." },
        { lv: "Ko meitene noslauka?", de: "Was wischt das Mädchen ab?" },
        { lv: "Meitene noslauka tāfeli.", de: "Das Mädchen wischt die Tafel ab." },
        { lv: "Ar ko meitene noslauka putekļus?", de: "Womit wischt das Mädchen den Staub ab?" },
        { lv: "Ar ko runā meitene?", de: "Mit wem spricht das Mädchen?" },
        { lv: "Viņa runā ar dārznieku.", de: "Sie spricht mit dem Gärtner." },
        { lv: "Vai viņa runā ar draugu?", de: "Spricht sie mit dem Freunde?" },
        { lv: "Nē, viņa runā ar draugiem.", de: "Nein, sie spricht mit den Freunden." },
        { lv: "Kam palīdz zēns?", de: "Wem hilft der Knabe?" },
        { lv: "Viņš palīdz dārzniekam.", de: "Er hilft dem Gärtner." },
        { lv: "Ar ko viņš pārgriež papīru?", de: "Womit schneidet er das Papier entzwei?" },
        { lv: "Viņš pārgriež papīru ar šķērēm.", de: "Er schneidet das Papier mit der Schere entzwei." },
        { lv: "Ar ko zīmē brālis?", de: "Womit zeichnet der Bruder?" },
        { lv: "Viņš zīmē ar zīmuli un krītu.", de: "Er zeichnet mit dem Bleistift und mit der Kreide." },
        { lv: "Ar ko tu turi lāpstu?", de: "Womit hältst du den Spaten?" },
        { lv: "Es turu lāpstu ar roku.", de: "Ich halte den Spaten mit der Hand." },
        { lv: "Ar ko mēs strādājam?", de: "Womit arbeiten wir?" },
        { lv: "Mēs strādājam ar rokām.", de: "Wir arbeiten mit den Händen." },
        { lv: "Ar ko mēs redzam?", de: "Womit sehen wir?" },
        { lv: "Mēs redzam ar acīm.", de: "Wir sehen mit den Augen." },
        { lv: "Ar ko mēs dzirdam?", de: "Womit hören wir?" },
        { lv: "Mēs dzirdam ar ausīm.", de: "Wir hören mit den Ohren." },
        { lv: "Ar ko iet brālis?", de: "Mit wem geht der Bruder?" },
        { lv: "Brālis iet ar tēvu, ar māti, ar skolotāju, ar onkuli, ar tanti, ar brālēnu, ar māsīcu.", de: "Der Bruder geht mit dem Vater, mit der Mutter, mit dem Lehrer, mit dem Onkel, mit der Tante, mit dem Vetter, mit der Base." }
      ] }
    ]
  },
  kurssLesson18: {
    id: "lesson18",
    title: "Lekcija 18",
    subtitle: "wohin / wo, Akkusativ vai Dativ ar an / in / auf",
    intro: "Astoņpadsmitā lekcija: wohin / wo, Akkusativ vai Dativ ar an / in / auf.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Wohin gehst du?", "Ich gehe an den Tisch.",
        "Wo stehst du?", "Ich stehe an dem Tische.",
        "Was trägst du?", "Ich trage einen Korb mit Äpfeln.",
        "Wohin stellst du den Korb?", "Ich stelle den Korb auf die Bank.",
        "Wo steht der Korb?", "Der Korb steht auf der Bank.",
        "Auf der Diele steht ein Körbchen.",
        "Wohin legst du zehn Äpfel?", "Ich lege zehn Äpfel in das Körbchen.",
        "Wo sind die Äpfel?", "Die Äpfel sind in dem Körbchen.",
        "Auf der Diele steht ein Eimer mit Wasser.", "Gieß das Wasser in den Krug!",
        "Wohin gießt du das Wasser?", "Ich gieße das Wasser in den Krug.",
        "Wo ist das Wasser jetzt?", "Das Wasser ist jetzt in dem Kruge."
      ] },
      { title: "Vārdiņi", items: [
        "wohin — kurp?", "wo — kur?", "tragen — nest", "ich trage — es nesu", "du trägst — tu nes", "er/sie/es trägt — viņš/viņa/tas nes", "der Korb — grozs / kurvis", "die Körbe — grozi / kurvji", "das Körbchen — groziņš / kurvītis", "stellen — novietot / nolikt stāvus", "legen — likt / nolikt guļus", "das Wasser — ūdens", "gießen — liet", "der Krug — krūze", "die Krüge — krūzes", "jetzt — tagad", "an — pie", "auf — uz", "in — iekšā / uz iekšpusi", "der Tisch — galds", "die Bank — sols", "die Diele — grīda", "der Eimer — spainis"
      ] },
      { title: "Gramatika", items: [
        { heading: "an / in / auf", text: "Prievārdi an, in, auf var stāvēt gan ar Akkusativ, gan ar Dativ." },
        { heading: "Akkusativ: wohin?", text: "Ja darbība norāda virzienu vai vietas maiņu, lieto Akkusativ. Jautājums: wohin? — kurp?", examples: ["Ich gehe an den Tisch. — Es eju pie galda.", "Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.", "Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā.", "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē."] },
        { heading: "Dativ: wo?", text: "Ja darbība norāda atrašanās vietu vai stāvokli, lieto Dativ. Jautājums: wo? — kur?", examples: ["Ich stehe an dem Tische. — Es stāvu pie galda.", "Der Korb steht auf der Bank. — Grozs stāv uz sola.", "Die Äpfel sind in dem Körbchen. — Āboli ir groziņā.", "Das Wasser ist in dem Kruge. — Ūdens ir krūzē."] },
        { heading: "Darbības vārdi ar wohin?", text: "Šie darbības vārdi bieži norāda virzienu un tāpēc atbild uz jautājumu wohin?.", examples: ["gehen — iet", "kommen — nākt", "fahren — braukt", "laufen — skriet", "fliegen — lidot", "springen — lēkt", "kriechen — rāpot", "schleichen — līst", "hängen — kārt", "sich setzen — apsēsties", "sich stellen — nostāties", "werfen — mest", "reiten — jāt"] },
        { heading: "Darbības vārdi ar wo?", text: "Šie darbības vārdi bieži norāda atrašanās vietu vai stāvokli un tāpēc atbild uz jautājumu wo?.", examples: ["sein — būt", "sich befinden — atrasties", "arbeiten — strādāt", "liegen — gulēt / atrasties guļus", "sitzen — sēdēt", "hängen — karāties", "finden — atrast", "suchen — meklēt", "spielen — spēlēt"] },
        { heading: "Vielu vārdi", text: "Vielu vārdi parasti stāv bez artikula.", examples: ["Ich trinke Milch. — Es dzeru pienu.", "In dem Eimer ist Wasser. — Spainī ir ūdens."] },
        { heading: "Konkrēta viela", text: "Ja viela tiek minēta noteiktā daudzumā vai konkrētā vietā, tad lieto artikulu.", examples: ["Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē."] },
        { heading: "in + vieta", text: "Ja prievārds in netulkojas kā “iekšā”, bet izsaka atrašanās vietu, to var tulkot ar lokatīvu.", examples: ["in dem Eimer — spainī", "in dem Zimmer — istabā"] },
        { heading: "Mūsdienu formas", text: "Vecās formas, piemēram, dem Tische, dem Kruge, im Walde, mūsdienās bieži lieto īsāk: dem Tisch, dem Krug, im Wald." }
      ] },
      { title: "Izruna", items: [
        "Vārdā wohin h ir dzirdams: wo-hin.",
        "Vārdā wo o ir garš: wo."
      ] },
      { title: "Vingrinājums", cards: [
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wohin geht das Mädchen?\n(in d... Wald, in d... Garten, auf d... Wiese, auf d... Hof)", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Das Mädchen geht in den Wald, in den Garten, auf die Wiese, auf den Hof." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wo spielt es?\n(in d... Wald, in d... Garten, auf d... Wiese, auf d... Hof)", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Es spielt in dem Walde, in dem Garten, auf der Wiese, auf dem Hofe." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wohin kommt die Magd?\n(in d... Küche, in d... Zimmer, in d... Saal, in d... Keller)", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Die Magd kommt in die Küche, in das Zimmer, in den Saal, in den Keller." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wo arbeitet sie?\n(in d... Küche, in d... Zimmer, in d... Saal, in d... Keller)", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Sie arbeitet in der Küche, in dem Zimmer, in dem Saal, in dem Keller." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wohin legst du den Teller?\n(auf d... Bank, d... Stuhl, d... Tisch, d... Fensterbrett)", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Ich lege den Teller auf die Bank, auf den Stuhl, auf den Tisch, auf das Fensterbrett." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wo steht er?\n(auf d... Bank, d... Stuhl, d... Tisch, d... Fensterbrett)", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Er steht auf der Bank, auf dem Stuhl, auf dem Tisch, auf dem Fensterbrett." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Der Mann stellt sich ...\nan dies... Fenster, an jen... Tisch, an d... Wand, an d... Baum.", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Der Mann stellt sich an dieses Fenster, an jenen Tisch, an die Wand, an den Baum." },
        { instruction: "Liec Dativ vai Akkusativ.", prompt: "Wo steht er?\nAn dies... Fenster, an jen... Tisch, an d... Wand, an d... Baum.", task: "Izvēlies pareizo locījumu: Dativ vai Akkusativ.", answer: "Er steht an diesem Fenster, an jenem Tisch, an der Wand, an dem Baum." }
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Kurp nāk apkalpotājs?", de: "Wohin kommt der Diener?" },
        { lv: "Viņš nāk istabā.", de: "Er kommt in das Zimmer." },
        { lv: "Kur viņš strādā?", de: "Wo arbeitet er?" },
        { lv: "Viņš strādā istabā.", de: "Er arbeitet in dem Zimmer." },
        { lv: "Vīrs noliek solu pie loga.", de: "Der Mann stellt die Bank an das Fenster." },
        { lv: "Sols stāv pie loga.", de: "Die Bank steht an dem Fenster." },
        { lv: "Bērni iet uz mežu.", de: "Die Kinder gehen in den Wald." },
        { lv: "Viņi mežā lasa ogas.", de: "Sie suchen Beeren in dem Walde." },
        { lv: "Viņi mežā atrod daudz ogu.", de: "Sie finden in dem Walde viele Beeren." },
        { lv: "Māte noliek grozu uz skapja.", de: "Die Mutter stellt den Korb auf den Schrank." },
        { lv: "Grozs stāv uz skapja.", de: "Der Korb steht auf dem Schrank." },
        { lv: "Skolnieks ieliek burtnīcas somā.", de: "Der Schüler legt die Hefte in die Mappe." },
        { lv: "Kur ir burtnīcas?", de: "Wo sind die Hefte?" },
        { lv: "Burtnīcas tagad ir somā.", de: "Die Hefte sind jetzt in der Mappe." },
        { lv: "Kurp iet skolotājs?", de: "Wohin geht der Lehrer?" },
        { lv: "Viņš iet klasē.", de: "Er geht in die Klasse." },
        { lv: "Kur sēž skolotājs?", de: "Wo sitzt der Lehrer?" },
        { lv: "Skolotājs sēž klasē.", de: "Der Lehrer sitzt in der Klasse." }
      ] }
    ]
  },
  kurssLesson19: {
    id: "lesson19",
    title: "Lekcija 19",
    subtitle: "Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen",
    intro: "Deviņpadsmitā lekcija: vor, hinter, unter, über, neben, zwischen ar Akkusativ vai Dativ.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Wohin geht die Frau?", "Sie geht vor den Spiegel.",
        "Wo steht sie?", "Sie steht vor dem Spiegel.",
        "Wohin wirft das Kind den Ball?", "Es wirft den Ball hinter den Schrank.",
        "Wo liegt der Ball?", "Der Ball liegt hinter dem Schrank.",
        "Wohin stellt der Knabe den Eimer?", "Er stellt den Eimer unter die Bank.",
        "Wo steht der Eimer?", "Der Eimer steht unter der Bank.",
        "Wohin hängt der Vater das Bild?", "Er hängt das Bild über das Klavier.",
        "Wo hängt das Bild?", "Das Bild hängt über dem Klavier.",
        "Wohin setzt sich der Knabe?", "Er setzt sich neben den Großvater und die Großmutter.",
        "Wo sitzt er?", "Er sitzt neben dem Großvater und der Großmutter.",
        "Wohin stellt die Magd den Stuhl?", "Sie stellt den Stuhl zwischen das Klavier und den Spiegel.",
        "Wo steht der Stuhl?", "Der Stuhl steht zwischen dem Klavier und dem Spiegel."
      ] },
      { title: "Vārdiņi", items: [
        "vor — priekšā / pirms", "hinter — aiz", "unter — zem", "über — virs / pāri", "neben — blakus", "zwischen — starp", "werfen — mest", "stellen — novietot / nostādīt / nolikt", "der Spiegel — spogulis", "der Schrank — skapis", "der Eimer — spainis", "die Bank — sols", "das Bild — attēls / bilde", "das Klavier — klavieres", "der Großvater — vectēvs", "die Großmutter — vecmāmiņa", "der Stuhl — krēsls", "der Zaun — žogs", "die Brücke — tilts", "pflanzen — stādīt", "der Strauch — krūms", "wachsen — augt", "die Mühle — dzirnavas", "die Scheune — šķūnis", "der Teich — dīķis", "der Garten — dārzs", "das Feld — lauks", "die Laube — lapene", "die Wand — siena", "die Karte — karte", "das Land — zeme", "die Stadt — pilsēta", "der Berg — kalns", "der See — ezers", "der Fluß — upe", "zeigen — rādīt", "nennen — nosaukt", "so — tā"
      ] },
      { title: "Gramatika", items: [
        { heading: "Wechselpräpositionen", text: "Šajā lekcijā turpinām prievārdus, kas var stāvēt gan ar Akkusativ, gan ar Dativ." },
        { heading: "Wohin? → Akkusativ", text: "Ja ir virziens / kustība uz kaut kurieni, jautājums ir wohin? un lieto Akkusativ.", examples: ["Ich gehe vor den Spiegel.", "Das Kind wirft den Ball hinter den Schrank.", "Er stellt den Eimer unter die Bank.", "Er hängt das Bild über das Klavier.", "Er setzt sich neben den Großvater.", "Sie stellt den Stuhl zwischen das Klavier und den Spiegel."] },
        { heading: "Wo? → Dativ", text: "Ja ir atrašanās vieta, jautājums ir wo? un lieto Dativ.", examples: ["Sie steht vor dem Spiegel.", "Der Ball liegt hinter dem Schrank.", "Der Eimer steht unter der Bank.", "Das Bild hängt über dem Klavier.", "Er sitzt neben dem Großvater und der Großmutter.", "Der Stuhl steht zwischen dem Klavier und dem Spiegel."] },
        { heading: "Prievārdi", examples: ["vor — priekšā", "hinter — aiz", "unter — zem", "über — virs / pāri", "neben — blakus", "zwischen — starp"] },
        { heading: "Kopsavilkums: wohin?", text: "Wohin? → Akkusativ", examples: ["in das Zimmer", "an das Klavier", "auf den Hof", "vor die Tafel", "hinter den Zaun", "unter den Baum", "über die Brücke", "neben die Laube", "zwischen den Bruder und die Schwester"] },
        { heading: "Kopsavilkums: wo?", text: "Wo? → Dativ", examples: ["in dem Zimmer", "an dem Klavier", "auf dem Hof", "vor der Tafel", "hinter dem Zaun", "unter dem Baum", "über der Brücke", "neben der Laube", "zwischen dem Bruder und der Schwester"] },
        { heading: "gehen / treten", text: "gehen — iet, ja darbība nozīmē nepārtrauktu iešanu. treten — ieiet, pieiet, uzkāpt, ja iešana beidzas ar darbības pārtraukumu.", examples: ["Der Schüler geht in die Schule.", "Der Lehrer tritt in die Klasse.", "Wir treten aus dem Hause.", "Der Schüler tritt an die Tafel."] }
      ] },
      { title: "Izruna", items: [
        "Vārdā vor o izrunā gari.",
        "Vārdā hinter h ir dzirdams, un e ir plats.",
        "Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts.",
        "Vārdā der Strauch: st izrunā kā št.",
        "Vārdā wachsen: ch izrunā kā k."
      ] },
      { title: "Vingrinājums", cards: [
        { instruction: "Lieto pareizo locījumu: Akkusativ vai Dativ.", prompt: "Anna geht in d... Garten, an d... Teich, vor d... Mühle, hinter d... Scheune, auf d... Feld, über d... Brücke, unter d... Baum, zwischen d... Strauch und d... Laube.", task: "Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.", answer: "Anna geht in den Garten, an den Teich, vor die Mühle, hinter die Scheune, auf das Feld, über die Brücke, unter den Baum, zwischen den Strauch und die Laube." },
        { instruction: "Lieto pareizo locījumu: Akkusativ vai Dativ.", prompt: "Anna befindet sich oft in d... Garten, an d... Teich, vor d... Mühle, hinter d... Scheune, auf d... Feld, über d... Wasser, unter d... Baum, zwischen d... Strauch und d... Laube.", task: "Izvēlies pareizo locījumu: wohin? → Akkusativ, wo? → Dativ.", answer: "Anna befindet sich oft in dem Garten, an dem Teich, vor der Mühle, hinter der Scheune, auf dem Feld, über dem Wasser, unter dem Baum, zwischen dem Strauch und der Laube." }
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Skolotājs nāk klasē.", de: "Der Lehrer kommt in die Klasse." },
        { lv: "Viņam ir karte rokā.", de: "Er hat eine Karte in der Hand." },
        { lv: "Viņš piekar karti pie sienas.", de: "Er hängt die Karte an die Wand." },
        { lv: "Viņš rāda skolniekiem un skolniecēm daudz pilsētu, zemi, kalnu, ezeru un upi.", de: "Er zeigt den Schülern und Schülerinnen viele Länder, Städte, Berge, Seen und Flüsse." },
        { lv: "Tad skolotājs uzsauc skolnieku.", de: "Dann ruft der Lehrer einen Schüler auf." },
        { lv: "Skolnieks pieiet pie kartes.", de: "Der Schüler tritt an die Karte." },
        { lv: "Viņš paliek kartes priekšā stāvam.", de: "Er bleibt vor der Karte stehen." },
        { lv: "Viņš nosauc un parāda skolotājam pilsētas, kalnus un upes.", de: "Er nennt und zeigt dem Lehrer die Städte, die Berge und die Flüsse." },
        { lv: "Tā strādā skolotājs klasē.", de: "So arbeitet der Lehrer in der Klasse." }
      ] }
    ]
  },
  kurssLesson20: {
    id: "lesson20",
    title: "Lekcija 20",
    subtitle: "Haus, Stockwerk, Dativ/Akkusativ, saliktie lietvārdi",
    intro: "Divdesmitā lekcija: māja, stāvi, Dativ/Akkusativ un saliktie lietvārdi.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Dieses Haus ist hoch.", "Es hat drei Stockwerke.",
        "In den Mauern sind Fenster und Türen.", "Die Mauern sind aus Stein.", "Die Wände und Türen sind aus Holz.", "Die Fenster sind aus Glas.",
        "In dem Hause sind zehn Wohnungen.", "Jede Wohnung hat drei Zimmer, ein Vorhaus und eine Küche.",
        "Unter dem Dache ist der Boden.", "Unter dem Hause ist der Keller.", "Auf dem Dache sind drei Schornsteine.",
        "Der Schornsteinfeger steigt aufs Dach und reinigt die Schornsteine.",
        "Die Stadt hat viele Häuser.", "In den Häusern sind viele Wohnungen.", "In den Wohnungen leben viele Menschen.", "Alle Menschen arbeiten.", "Alle Menschen müssen arbeiten.",
        "Wir wohnen in dem vierten Stockwerk.", "Ich muß das Holz in das vierte Stockwerk tragen.", "Ich bringe das Holz in die Küche.", "Ich stecke das Holz in den Ofen.", "Ich zünde das Holz an.", "Bald brennt das Holz licht und hell."
      ] },
      { title: "Vārdiņi", items: [
        "das Haus — māja", "das Stockwerk — stāvs", "die Mauer — mūris", "der Stein — akmens", "das Holz — koks / malka", "das Glas — stikls", "aus Glas — no stikla", "die Wohnung — dzīvoklis", "das Vorhaus — priekšnams / gaitenis", "die Küche — virtuve", "das Dach — jumts", "der Boden — bēniņi / grīda / zeme", "der Keller — pagrabs", "der Schornstein — skurstenis", "der Schornsteinfeger — skursteņslaucītājs", "die Stadt — pilsēta", "leben — dzīvot", "tragen — nest", "bringen — nest / atnest", "stecken — bāzt / ielikt", "der Ofen — krāsns", "anzünden — aizdedzināt", "bald — drīz", "brennen — degt", "licht — gaišs", "hell — gaišs / spožs", "die Tür — durvis", "das Fenster — logs", "der Mensch — cilvēks"
      ] },
      { title: "Gramatika", items: [
        { heading: "Dativs ar wann?", text: "Satiksmes vārdi, kas 19. un 20. lekcijā atbild uz jautājumu wann? — kad?, stāv ar Dativ. Dativs atbild ne tikai uz wo? — kur?, bet arī uz wann? — kad?.", examples: ["an dem Tage / am Tage — dienā", "in der Nacht — naktī", "in dem Sommer / im Sommer — vasarā", "in dem Januar / im Januar — janvārī", "vor drei Tagen — pirms trīs dienām"] },
        { heading: "Prievārds + artikuls", text: "Daudzas prepozīcijas savienojas ar artikulu.", examples: ["an das Fenster → ans Fenster", "an dem Fenster → am Fenster", "in das Zimmer → ins Zimmer", "in dem Zimmer → im Zimmer", "auf das Dach → aufs Dach", "über das Land → übers Land"] },
        { heading: "-e- starp celmu un galotni", text: "Ja darbības vārda celms beidzas ar t, d, m, n, tad 2. un 3. personā vienskaitlī un 2. personā daudzskaitlī starp celmu un galotni bieži iestarpina -e- labākai izrunai.", examples: ["anzünden: du zündest an, er zündet an, ihr zündet an", "arbeiten: du arbeitest, er arbeitet, ihr arbeitet", "atmen: du atmest, er atmet, ihr atmet", "öffnen: du öffnest, er öffnet, ihr öffnet"] },
        { heading: "Saliktie lietvārdi", text: "Saliktie lietvārdi parasti pieņem pēdējā vārda artikulu.", examples: ["der Stock + das Werk = das Stockwerk", "der Schornstein + der Feger = der Schornsteinfeger", "das Haus + die Tür = die Haustür"] },
        { heading: "Salikto lietvārdu veidošana", examples: ["jung + die Frau = die Jungfrau", "groß + die Mutter = die Großmutter", "vor + das Haus = das Vorhaus", "schreiben + der Tisch = der Schreibtisch"] },
        { heading: "tragen", text: "Darbības vārdā tragen 2. un 3. personā vienskaitlī celma patskanis a iegūst Umlaut.", examples: ["ich trage", "du trägst", "er trägt"] }
      ] },
      { title: "Izruna", items: [
        "Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št.",
        "Vārdos der Ofen, der Boden: o ir garš.",
        "sch izrunā kā š: der Schornstein, der Mensch.",
        "Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā.",
        "Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā.",
        "Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut.",
        "Vārdā das Vorhaus: v izrunā kā f."
      ] },
      { title: "Vingrinājums", cards: [
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Wolf lebt in (der Wald).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Wolf lebt in dem Wald." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Dieser Mann lebt in (das Haus).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Dieser Mann lebt in dem Haus." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Schornsteinfeger steht auf (das Dach).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Schornsteinfeger steht auf dem Dach." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Knecht arbeitet auf (das Feld).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Knecht arbeitet auf dem Feld." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Die Magd arbeitet auf (die Wiese).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Die Magd arbeitet auf der Wiese." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Holzhauer sägt das Holz in (die Scheune).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Holzhauer sägt das Holz in der Scheune." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Schüler stellt das Glas auf (die Kommode).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Schüler stellt das Glas auf die Kommode." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Jäger geht in (der Wald).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Jäger geht in den Wald." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Die Katze kriecht unter (die Bank).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Die Katze kriecht unter die Bank." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Ball rollt unter (der Schrank).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Ball rollt unter den Schrank." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Dieser Mann geht über (die Brücke).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Dieser Mann geht über die Brücke." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Jener Mann steht unter (die Brücke).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Jener Mann steht unter der Brücke." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Ein Spiegel hängt an (die Wand).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Ein Spiegel hängt an der Wand." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Der Bruder stellt die Vase vor (der Spiegel).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Der Bruder stellt die Vase vor den Spiegel." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Das Kind geht gern auf (die Straße).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Das Kind geht gern auf die Straße." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Das Kind spielt gern auf (die Straße).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Das Kind spielt gern auf der Straße." },
        { instruction: "Lieto Dativ vai Akkusativ.", prompt: "Das Kind spielt gern in (der Garten).", task: "Izvēlies pareizo locījumu: wo/wann → Dativ, wohin → Akkusativ.", answer: "Das Kind spielt gern in dem Garten." }
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Kas ir augsts?", de: "Was ist hoch?" },
        { lv: "Cik stāvu ir mājai?", de: "Wieviel Stockwerke hat das Haus?" },
        { lv: "Kur ir logi un durvis?", de: "Wo sind Fenster und Türen?" },
        { lv: "No kā ir mūri?", de: "Woraus sind die Mauern?" },
        { lv: "No kā ir durvis?", de: "Woraus sind die Türen?" },
        { lv: "No kā ir logi?", de: "Woraus sind die Fenster?" },
        { lv: "Kur ir desmit dzīvokļi?", de: "Wo sind zehn Wohnungen?" },
        { lv: "Kas ir katrā dzīvoklī?", de: "Was hat jede Wohnung?" },
        { lv: "Kur ir pagrabs?", de: "Wo ist der Keller?" },
        { lv: "Kur ir bēniņi?", de: "Wo ist der Boden?" },
        { lv: "Kur ir trīs skursteņi?", de: "Wo sind drei Schornsteine?" },
        { lv: "Kurp kāpj skursteņslaucītājs?", de: "Wohin steigt der Schornsteinfeger?" },
        { lv: "Kur viņš stāv?", de: "Wo steht er?" },
        { lv: "Ko viņš dara?", de: "Was tut er?" },
        { lv: "Kas ir pilsētai?", de: "Was hat die Stadt?" },
        { lv: "Kur ir daudz dzīvokļu?", de: "Wo sind viele Wohnungen?" },
        { lv: "Kur dzīvo daudz cilvēku?", de: "Wo leben viele Menschen?" },
        { lv: "Kas strādā?", de: "Wer arbeitet?" },
        { lv: "Kam jāstrādā?", de: "Wer muß arbeiten?" },
        { lv: "Kurā stāvā tu dzīvo?", de: "In welchem Stockwerk wohnst du?" },
        { lv: "Kurp tev jānes malka?", de: "Wohin mußt du das Holz tragen?" },
        { lv: "Kurp tu liec malku?", de: "Wohin steckst du das Holz?" },
        { lv: "Ko tu aizdedzini?", de: "Was zündest du an?" },
        { lv: "Kas deg gaiši?", de: "Was brennt hell?" }
      ] }
    ]
  },
  kurssLesson21: {
    id: "lesson21",
    title: "Lekcija 21",
    subtitle: "woher / wohin / wo, von / aus / mit + Dativ",
    intro: "Divdesmit pirmā lekcija: woher / wohin / wo, von / aus / mit + Dativ.",
    sections: [
      { title: "Teksts / Lasīšana", items: [
        "Die Holzhauer arbeiten in der Scheune.", "Sie sägen und spalten Holz.", "Sie haben Sägen und Beile.", "Zwei Männer sägen mit einer Säge; ein Mann spaltet mit einem Beil.",
        "Der Vater ist auf dem Felde.", "Er kommt von dem Felde.", "Er hat eine Axt in der Hand.", "Er will in die Scheune gehen.", "Er will den Holzhauern helfen.",
        "Ein Mann steigt von dem Berge.", "Er geht über die Brücke und kommt auf den Hof.", "Er will mit dem Vater sprechen.",
        "Die Mutter tritt aus dem Hause.", "Sie geht auf den Hof und ruft den Vater.",
        "Der Vater kommt aus der Scheune.", "Er grüßt den Mann und geht mit dem Mann ins Zimmer.",
        "Die Magd kommt aus der Küche.", "Sie muß Milch holen.", "Sie eilt in den Keller.", "Sie holt Milch.", "Sie steigt mit einem Eimer aus dem Keller.", "Sie geht in die Küche zurück.", "Sie arbeitet fleißig in der Küche."
      ] },
      { title: "Vārdiņi", items: [
        "der Holzhauer — malkas cirtējs", "sägen — zāģēt", "spalten — skaldīt", "die Axt — cirvis", "von — no", "aus — no / iz", "mit — ar", "helfen — palīdzēt", "treten — iet / nākt / spert soli", "du trittst — tu ej / tu sper soli", "er tritt — viņš iet / sper soli", "rufen — saukt", "holen — atnest / atgādāt", "eilen — steigties", "zurück — atpakaļ", "finden — atrast", "sehen — redzēt", "du siehst — tu redzi", "er sieht — viņš redz", "fleißig — čakli", "die Scheune — šķūnis", "das Feld — lauks", "der Berg — kalns", "die Brücke — tilts", "der Hof — pagalms", "der Keller — pagrabs", "die Küche — virtuve", "die Milch — piens", "der Eimer — spainis", "die Säge — zāģis", "das Beil — cirvis"
      ] },
      { title: "Gramatika", items: [
        { heading: "mit / von / aus + Dativ", text: "Prepozīcijas mit, von un aus vienmēr stāv ar Dativ.", examples: ["mit — ar", "von — no", "aus — no / iz", "mit dem Mann — ar vīru", "von dem Felde / vom Felde — no lauka", "aus der Küche — no virtuves"] },
        { heading: "von dem = vom", text: "Prepozīcija von var saplūst ar artikulu.", examples: ["von dem Felde = vom Felde", "von dem Berge = vom Berge", "Mūsdienu forma: vom Feld, vom Berg."] },
        { heading: "Woher? — no kurienes?", text: "Ja persona vai priekšmets atrodas kādā telpā, vietā vai traukā un nāk ārā no tās, lieto aus.", examples: ["Die Magd ist in der Küche.", "Woher kommt sie?", "Sie kommt aus der Küche.", "Das Buch ist im Schrank.", "Woher nehme ich das Buch?", "Ich nehme das Buch aus dem Schrank."] },
        { heading: "von", text: "Ja persona vai priekšmets atrodas virs kādas vietas vai uz kaut kā un pārvietojas prom no tās, lieto von.", examples: ["Der Knabe ist auf dem Dache.", "Woher steigt er?", "Er steigt vom Dache.", "Das Buch ist auf dem Schrank.", "Woher nehme ich das Buch?", "Ich nehme das Buch vom Schrank."] },
        { heading: "Materiāls", text: "Ja runā par materiālu, no kā priekšmets pagatavots, lieto aus.", examples: ["Die Türen sind aus Holz.", "Die Fenster sind aus Glas.", "Die Kissen sind aus Federn.", "Man macht aus Wolle Kleider."] }
      ] },
      { title: "Izruna", items: [
        "Vārdā die Axt: x izrunā kā ks.",
        "Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai.",
        "Vārdā die Scheune: eu izrunā kā oi.",
        "Vārdā die Brücke: ck izrunā kā dubultu k."
      ] },
      { title: "Vingrinājums", cards: [
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Woher kommt der Vater?", task: "Atbildi pēc lasīšanas teksta.", answer: "Der Vater kommt von dem Felde." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wohin geht er?", task: "Atbildi pēc lasīšanas teksta.", answer: "Er geht in die Scheune." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wo spricht er mit den Holzhauern?", task: "Atbildi pēc lasīšanas teksta.", answer: "Er spricht in der Scheune mit den Holzhauern." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Woher steigt der Mann?", task: "Atbildi pēc lasīšanas teksta.", answer: "Der Mann steigt von dem Berge." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wohin kommt er?", task: "Atbildi pēc lasīšanas teksta.", answer: "Er kommt auf den Hof." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wo findet er den Vater?", task: "Atbildi pēc lasīšanas teksta.", answer: "Er findet den Vater auf dem Hof." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Woher tritt die Mutter?", task: "Atbildi pēc lasīšanas teksta.", answer: "Die Mutter tritt aus dem Hause." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wohin geht sie?", task: "Atbildi pēc lasīšanas teksta.", answer: "Sie geht auf den Hof." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wo sieht sie den Mann?", task: "Atbildi pēc lasīšanas teksta.", answer: "Sie sieht den Mann auf dem Hof." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Woher kommt die Magd?", task: "Atbildi pēc lasīšanas teksta.", answer: "Die Magd kommt aus der Küche." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wohin eilt sie?", task: "Atbildi pēc lasīšanas teksta.", answer: "Sie eilt in den Keller." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wo steht ein Eimer mit Milch?", task: "Atbildi pēc lasīšanas teksta.", answer: "Ein Eimer mit Milch steht im Keller." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Woher steigt sie?", task: "Atbildi pēc lasīšanas teksta.", answer: "Sie steigt aus dem Keller." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wohin geht sie zurück?", task: "Atbildi pēc lasīšanas teksta.", answer: "Sie geht in die Küche zurück." },
        { instruction: "Atbildi uz jautājumiem pēc teksta.", prompt: "Wo arbeitet sie fleißig?", task: "Atbildi pēc lasīšanas teksta.", answer: "Sie arbeitet fleißig in der Küche." }
      ] },
      { title: "Pārtulko", type: "translationCards", cards: [
        { lv: "Visas burtnīcas ir somā.", de: "Alle Hefte sind in der Mappe." },
        { lv: "Es izņemu burtnīcas no somas.", de: "Ich nehme die Hefte aus der Mappe." },
        { lv: "Es nesēju pulksteni no kabatas.", de: "Ich ziehe die Uhr aus der Tasche." },
        { lv: "Spainis ar pienu stāv pagrabā.", de: "Ein Eimer mit Milch steht im Keller." },
        { lv: "Es nesu spaini no pagraba.", de: "Ich trage den Eimer aus dem Keller." },
        { lv: "Es noņemu cepuri no galvas.", de: "Ich nehme die Mütze vom Kopfe." },
        { lv: "Bilde karājas pie sienas.", de: "Das Bild hängt an der Wand." },
        { lv: "Tēvs noņem bildi no sienas.", de: "Der Vater nimmt das Bild von der Wand." },
        { lv: "Notis atrodas uz klavierēm.", de: "Die Noten liegen auf dem Klavier." },
        { lv: "Es noņemu notis no klavierēm.", de: "Ich nehme die Noten vom Klavier." },
        { lv: "Mēs nākam no drauga.", de: "Wir kommen vom Freunde." },
        { lv: "Mēs nākam no draudzenes.", de: "Wir kommen von der Freundin." },
        { lv: "Mēs nākam no skolotāja.", de: "Wir kommen vom Lehrer." },
        { lv: "Visi nāk no drauga, no draudzenes, no skolotāja.", de: "Alle kommen vom Freunde, von der Freundin, vom Lehrer." }
      ] }
    ]
  }
};



window.COURSE_LESSONS = COURSE_LESSONS;
window.COURSE_LESSON_HTML = COURSE_LESSON_HTML;

window.COURSE_LESSON_DATA = COURSE_LESSON_DATA;
