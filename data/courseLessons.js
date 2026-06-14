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
  }
};



window.COURSE_LESSONS = COURSE_LESSONS;
window.COURSE_LESSON_HTML = COURSE_LESSON_HTML;

window.COURSE_LESSON_DATA = COURSE_LESSON_DATA;
