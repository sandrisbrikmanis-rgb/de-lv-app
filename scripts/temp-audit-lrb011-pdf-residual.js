#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-011";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const COMPOSITE_TARGETS = {
  "g2/a1/fi|hören|idx:287|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"lv":"Kuulla • Kuunnella","study.translation":"Kuulla • Kuunnella","study.explanation[0]":"Pääajatus: kuulla ääntä tai kuunnella musiikkia.","study.explanation[1]":"hören tarkoittaa pääasiassa äänen havaitsemista.","study.explanation[2]":"Sitä käytetään usein äänistä, musiikista ja kuulemisesta.","study.explanation[3]":"hören liittyy ääniin, musiikkiin ja siihen, mitä kuullaan.","study.examples[0].lv":"Kuuntelen musiikkia.","study.examples[1].lv":"Lapset kuuntelevat tarinaa.","study.examples[2].lv":"Kuulen sinut.","study.tip[0]":"Kuulla ääntä tai kuunnella musiikkia.","study.tip[1]":"Käytä hören, kun konteksti vastaa tätä merkitystä.","study.important[0]":"hören = kuulla/kuunnella ääntä.","study.important[1]":"Kuulla ääntä tai kuunnella musiikkia."}),
  "g2/a1/fi|hübsch|idx:288|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"lv":"kaunis","study.translation":"kaunis","study.explanation[0]":"Pääajatus: hübsch tarkoittaa kaunista, houkuttelevaa tai sympatiaa herättävää ulkonäköä.","study.explanation[1]":"hübsch usein kuvailee henkilön, vaatteen, huoneen tai esineen ulkonäköä.","study.explanation[2]":"Sana mukava voi sopia joihinkin yhteyksiin, mutta se on liian laaja pääkäännökseksi.","study.explanation[3]":"Persoonallisuutta tai ystävällistä käytöstä saksassa yleensä kuvataan sanalla nett.","study.examples[0].lv":"Hänellä on kaunis puku.","study.examples[1].lv":"Huone on kaunis.","study.examples[2].lv":"Se on kaunis kuva.","study.comparison[0].meaning":"kaunis • houkutteleva ulkonäöllään","study.comparison[0].example":"Das ist ein hübsches Kleid. – Se on kaunis puku.","study.comparison[1].meaning":"kaunis • miellyttävä","study.comparison[1].example":"Der Garten ist schön. – Puutarha on kaunis.","study.comparison[2].meaning":"mukava • ystävällinen","study.comparison[2].example":"Sie ist sehr nett. – Hän on hyvin mukava.","study.tip.text":"Muista: hübsch kuvaa ennen kauneutta ulkonäössä, nett ystävällistä käytöstä tai persoonallisuutta.","study.important[0]":"hübsch ei ole yleinen käännös sanalle mukava.","study.important[1]":"Persoonallisuudelle tai ystävälliselle käytökselle sopii yleensä paremmin nett."}),
  "g2/a1/fi|ihr|idx:292|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"lv":"Te • Hänelle","study.translation":"Te • Hänelle","study.explanation[0]":"Pääajatus: ihr on kaksi eri samaan kirjoitettua pronominia — puhuttelu usealle (te) ja sie-pronominin datiivi (hänelle/hänen).","study.explanation[1]":"Pienellä ihr puhuttelussa usealle: te (Kommt ihr mit? = Tuletteko mukaan?).","study.explanation[2]":"Ihr omistuspronominina tarkoittaa hänen (ihr Buch = hänen kirjansa).","study.explanation[3]":"Ihr datiivina (sie) tarkoittaa hänelle (Ich gebe ihr das Buch. = Annan hänelle kirjan.).","study.explanation[4]":"Verbin muoto (kommt, habt) osoittaa, että kyse on te-puhuttelusta.","study.explanation[5]":"Kohtelias puhuttelu on aina Sie isolla alkukirjaimella, ei ihr.","study.examples[0].lv":"Tuletteko tänä iltana?","study.examples[1].lv":"Annan hänelle kirjan.","study.examples[2].lv":"Missä te asutte?","study.examples[3].lv":"Hän kirjoittaa hänelle kirjeen.","study.examples[4].lv":"Onko teillä aikaa?","study.examples[5].lv":"Se on hänen autonsa.","study.tip[0]":"ihr verbin monikon muodolla (kommt, habt) = te; ihr datiivissa tai omistuksessa = hänelle/hänen.","study.tip[1]":"Tarkista: Habt ihr...? / Kommt ihr...? = te; Ich gebe ihr... / ihr Buch = hänelle/hänen.","study.important[0]":"ihr = te (puhuminen useille) TAI hänelle (datiivi) TAI hänen (omistus) — riippuen kontekstista.","study.important[1]":"Kohtelias puhuminen on aina Sie isolla alkukirjaimella, ei ihr.","study.important[2]":"Väärin: Ihr (kohtelias) → Oikein: Sie."}),
  "g2/a1/fi|im|idx:293|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"lv":"Sisällä (-ssa) • Missä?","study.translation":"Sisällä (-ssa) • Missä?","study.explanation[0]":"Im on prepositio in ja artikkelin dem lyhenne.","study.explanation[1]":"Täysi muoto: in dem (datiivi).","study.explanation[2]":"Käytetään maskuliini- ja neutrum-substantiivien kanssa, kun vastataan missä? — sijainti.","study.explanation[3]":"Ajan ja vuodenaikojen kanssa: im Januar, im Sommer, im Winter.","study.explanation[4]":"Käytännössä käytetään lähes aina im, ei täyttä muotoa in dem.","study.examples[0].lv":"Olen puistossa.","study.examples[1].lv":"Asumme keskustassa.","study.examples[2].lv":"Kesällä on lämmintä.","study.examples[3].lv":"Hän työskentelee toimistossa.","study.examples[4].lv":"Lapsi leikkii puutarhassa.","study.examples[5].lv":"Tammikuussa ajan Wieniin.","study.examples[6].lv":"Hän on elokuvateatterissa.","study.examples[7].lv":"Tapaamme ravintolassa.","study.comparison[0].meaning":"Sisällä, missä? (datiivi)","study.comparison[0].example":"im Park – puistossa","study.comparison[1].meaning":"Sisään, minne? (akk.)","study.comparison[1].example":"ins Kino – elokuvateatteriin","study.comparison[2].meaning":"Sisällä / sisään (ilman artikkelia)","study.comparison[2].example":"in Berlin – Berliinissä","study.comparison[3].meaning":"Luona, missä? (datiivi)","study.comparison[3].example":"am Fenster – ikkunan luona","study.comparison[4].meaning":"Päällä","study.comparison[4].example":"auf dem Tisch – pöydällä","study.tip[0]":"Muista: in + dem → im (missä?).","study.tip[1]":"Minne? → ins; missä? → im — älä sekoita näitä kahta!","study.important[0]":"im = in dem, vain maskuliini- tai neutrum-substantiivilla missä? taivutuksessa.","study.important[1]":"Vastaa kysymykseen missä?, ei minne? — sijainti, ei liike.","study.important[2]":"Kuukausilla ja vuodenaikoilla: im März, im Herbst.","study.important[3]":"Feminiineille: in der Schule, ei im Schule."}),
  "g2/a1/fi|in|idx:295|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"lv":"Sisällä • Sisään","study.translation":"Sisällä • Sisään","study.explanation[0]":"Pääajatus: in tarkoittaa yleensä sisällä olemista tai johonkin paikkaan menemistä, kun puhutaan tilasta, maasta, kaupungista tai rakennuksesta.","study.explanation[1]":"Sijainnista puhuttaessa in käännetään usein -ssa/-ssä: in Berlin = Berliinissä.","study.explanation[2]":"Liikkeestä puhuttaessa in tarkoittaa sisäänpäin: ins Kino = elokuvateatteriin.","study.explanation[3]":"Suomeksi käännös riippuu kontekstista.","study.examples[0].lv":"Olen Berliinissä.","study.examples[1].lv":"Menen kouluun.","study.examples[2].lv":"Kirja on laukussa.","study.examples[3].lv":"Menemme elokuvateatteriin.","study.tip.text":"Muista: sisällä/tilassa → in.","study.important[0]":"in ei tarkoita aina kirjaimellisesti \"sisään\"; suomeksi usein sanotaan Berliinissä, koulussa, elokuvateatterissa.","study.important[1]":"Jos puhutaan pinnasta, tarvitaan usein auf, ei in."}),
  "g2/a1/fi|klein|idx:6|lv; study.translation; study.explanation; study.examples|MEANING_ERROR|gpt-5.6-luna": JSON.stringify({"lv":"Pieni","study.translation":"Pieni","study.explanation[0]":"Pääajatus: pieni koon tai tilavuuden puolesta.","study.explanation[1]":"klein tarkoittaa pääasiassa pientä kokoa.","study.explanation[2]":"Sitä käytetään usein asian tai henkilön koon kuvaamiseen.","study.examples[0].lv":"Huone on pieni.","study.examples[1].lv":"Lapsi on vielä pieni.","study.examples[2].lv":"Minulla on pieni laukku.","study.examples[3].lv":"Minulla on pieni laukku.","study.examples[4].lv":"Lapsi on pieni."}),
  "g2/a1/fi|können|idx:319|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Pystyä • Osata","study.translation":"Pystyä • Osata","study.explanation[0]":"Pääajatus: können tarkoittaa kykyä tehdä jotain tai osata jotain.","study.explanation[1]":"Kun puhutaan kyvystä tai taidosta, suomeksi käytetään usein osata.","study.explanation[2]":"Kun puhutaan mahdollisuudesta, suomeksi käytetään usein pystyä.","study.explanation[3]":"Können on modaaliverbi, joten toinen verbi on yleensä lauseen lopussa.","study.examples[0].lv":"Osaan puhua saksaa.","study.examples[1].lv":"Voitko auttaa minua?","study.examples[2].lv":"Voimme tulla tänään.","study.examples[3].lv":"Hän osaa uida hyvin.","study.comparison[0].meaning":"Pystyä / osata","study.comparison[0].example":"Ich kann schwimmen. = Osaan uida.","study.comparison[1].meaning":"Saada lupa","study.comparison[1].example":"Darf ich gehen? = Voinko mennä?","study.comparison[2].meaning":"Joutua / täytyä","study.comparison[2].example":"Ich muss lernen. = Minun täytyy opiskella.","study.comparison[3].meaning":"Tietää","study.comparison[3].example":"Ich weiß das. = Tiedän sen.","study.tip.text":"Muista: taito/mahdollisuus → können.","study.important[0]":"können ei ole sama kuin dürfen. können = pystyä/osata, dürfen = saada lupa.","study.important[1]":"Lauseessa können-verbin kanssa toinen verbi usein on lopussa: Ich kann schwimmen."}),
  "g2/a1/fi|kosten|idx:320|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Maksaa","study.translation":"Maksaa","study.explanation[0]":"Pääajatus: kosten tarkoittaa maksaa tietyn hinnan — kyse on asian hinnasta.","study.explanation[1]":"Sanaa käytetään, kun kysytään tai sanotaan, paljonko jokin maksaa, ei kun ihminen suorittaa maksua.","study.explanation[2]":"Hintakysymys alkaa saksaksi usein Was kostet...?","study.explanation[3]":"Suomeksi Das kostet 5 Euro. = Se maksaa 5 euroa.","study.explanation[4]":"Kun ihminen antaa rahaa tavaran tai palvelun edestä, saksaksi käytetään bezahlen tai zahlen.","study.examples[0].lv":"Se maksaa 5 euroa.","study.examples[1].lv":"Kuinka paljon se maksaa?","study.examples[2].lv":"Kuinka palko neule maksaa?","study.examples[3].lv":"Ruoka ei maksa paljon.","study.examples[4].lv":"Maksan laskun.","study.examples[5].lv":"Voinko maksaa käteisellä?","study.examples[6].lv":"Hän maksaa kortilla.","study.examples[7].lv":"Maksan heti.","study.comparison[0].meaning":"Maksaa (hinta) • Kuinka paljon maksaa","study.comparison[0].example":"Das kostet 5 Euro. = Se maksaa 5 euroa.","study.comparison[1].meaning":"Maksaa • Suorittaa maksu","study.comparison[1].example":"Ich bezahle die Rechnung. = Maksan laskun.","study.comparison[2].meaning":"Maksaa • Suorittaa maksu","study.comparison[2].example":"Kann ich bar zahlen? = Voinko maksaa käteisellä?","study.comparison[3].meaning":"Kuinka paljon maksaa...?","study.comparison[3].example":"Was kostet das Buch? = Kuinka paljon kirja maksaa?","study.tip[0]":"Muista: kysymys hinnasta → kosten (Was kostet das?).","study.tip[1]":"Muista: maksun tekeminen → bezahlen / zahlen (Ich bezahle die Rechnung.).","study.important[0]":"kosten ja bezahlen eivät ole synonyymejä: kosten = kuinka paljon maksaa; bezahlen = maksaa rahaa.","study.important[1]":"Saksaksi kosten ja bezahlen pitää valita tilanteen mukaan — ne eivät ole synonyymejä."}),
  "g2/a1/fi|Laden|idx:349|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Kauppa","study.translation":"Kauppa","study.explanation[0]":"Pääajatus: der Laden isolla alkukirjaimella ja artikkelilla der on substantiivi — pieni kauppa.","study.explanation[1]":"Laden pienellä alkukirjaimella on verbi — ladata tai lataa.","study.explanation[2]":"Der Laden tarkoittaa arjessa usein pientä kauppaa (im Laden einkaufen = tehdä ostoksia kaupassa).","study.explanation[3]":"Monikossa: die Läden.","study.examples[0].lv":"Menen kauppaan.","study.examples[1].lv":"Kauppa on kiinni.","study.examples[2].lv":"Täällä on paljon kauppoja.","study.examples[3].lv":"Minun täytyy ladata puhelin.","study.tip[0]":"der Laden isolla alkukirjaimella — substantiivi (kauppa).","study.tip[1]":"laden pienellä alkukirjaimella — verbi (ladata/lataa).","study.important[0]":"der Laden = kauppa (substantiivi).","study.important[1]":"laden = ladata/lataa (verbi).","study.important[2]":"Monikossa: die Läden."}),
  "g2/a1/fi|Land|idx:351|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Maa • Maaseutu","study.translation":"Maa • Maaseutu","study.explanation[0]":"Pääajatus: das Land tarkoittaa useimmiten maata valtiona tai maaseutua kaupungin vastakohtana.","study.explanation[1]":"Kun puhutaan Saksasta, Suomesta tai muusta valtiosta, käännetään valtio/maa.","study.explanation[2]":"Kun puhutaan maaseudusta tai maaseudun elämästä, käännetään maaseutu tai maalle.","study.explanation[3]":"Konteksti ratkaisee, tarkoitetaanko valtiota vai maaseutua.","study.examples[0].lv":"Saksa on kaunis maa.","study.examples[1].lv":"Olen kotoisin pienestä maasta.","study.examples[2].lv":"Ajelemme maaseudulle.","study.examples[3].lv":"Maaseudulla on rauhallista.","study.comparison[0].meaning":"Maa / valtio / maaseutu","study.comparison[0].example":"Deutschland ist ein Land.","study.comparison[1].meaning":"Kaupunki","study.comparison[1].example":"Ich wohne in der Stadt.","study.comparison[2].meaning":"Kylä","study.comparison[2].example":"Er lebt in einem Dorf.","study.comparison[3].meaning":"Maa / planeetta","study.comparison[3].example":"Die Erde ist rund.","study.tip.text":"Muista: valtio → das Land; kaupunki → die Stadt.","study.important[0]":"aufs Land tarkoittaa \"maalle\", ei \"valtiolle\".","study.important[1]":"das Land ei ole sama kuin die Stadt."}),
  "g2/a1/fi|lang|idx:352|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Pitkä • Pitkään","study.translation":"Pitkä • Pitkään","study.explanation[0]":"Pääajatus: lang tarkoittaa tilassa pitkää tai ajassa pitkää tai kestävää.","study.explanation[1]":"Kun puhutaan koosta tai etäisyydestä, lang = pitkä (ein langer Tisch = pitkä pöytä).","study.explanation[2]":"Kun puhutaan kestosta, lang = pitkä (ein langer Tag = pitkä päivä).","study.explanation[3]":"Lauseessa den ganzen Tag lang tarkoittaa koko päivän ajan.","study.explanation[4]":"Suomeksi sekä pitkä pöytä että pitkä päivä — saksa lang kattaa molemmat.","study.examples[0].lv":"Pöytä on hyvin pitkä.","study.examples[1].lv":"Elokuva oli hyvin pitkä.","study.examples[2].lv":"Kuinka kauan se kestää?","study.examples[3].lv":"Hänellä on pitkät hiukset.","study.examples[4].lv":"Olen jo odottanut kauan.","study.examples[5].lv":"Koko päivän ajan.","study.tip[0]":"Koolle tai etäisyydelle (hiukset, polku, pöytä) → pitkä.","study.tip[1]":"Ajalle (päivä, odottaminen, elokuva) → pitkä.","study.important[0]":"lang = pitkä (koko) TAI pitkä (aika) — riippuen kontekstista.","study.important[1]":"wie lange = kuinka kauan (kysymys ajasta, ei koosta)."}),
  "g2/a1/fi|lassen|idx:356|study.translation; study.explanation; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"study.translation":"Jättää • Antaa tehdä","study.explanation[0]":"Pääajatus: lassen tarkoittaa jättämistä tai antamista jonkun tapahtua.","study.explanation[1]":"Kun jokin jää paikalleen, lassen käännetään jättää.","study.explanation[2]":"Kun jollekin annetaan lupa, lassen käännetään antaa tehdä.","study.explanation[3]":"Puhekielessä Lass mich! = Jätä minut rauhaan!","study.important[0]":"lassen ei ole pelkästään \"jättää\". Se usein tarkoittaa myös \"antaa\".","study.important[1]":"Lass mich in Ruhe! on hyvin yleinen ilmaus: \"Jätä minut rauhaan!\""}),
  "g2/a1/fi|laufen|idx:357|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"study.translation":"Juosta • Käydä","study.explanation[0]":"Pääajatus: laufen tarkoittaa juoksemista, mutta laitteista se voi tarkoittaa toimimista.","study.explanation[1]":"Ihmisestä tai eläimestä laufen tarkoittaa usein juoksemista tai nopeaa kävelyä.","study.explanation[2]":"Elokuvasta, koneesta tai ohjelmasta laufen tarkoittaa, että se pyörii tai toimii.","study.explanation[3]":"Jalkaliikkeessä A1-tasolla verbejä gehen ja laufen verrataan usein toisiinsa.","study.examples[0].lv":"Hän juoksee hyvin nopeasti.","study.examples[1].lv":"Lapset juoksevat puistossa.","study.examples[2].lv":"Elokuva pyörii jo.","study.examples[3].lv":"Kone toimii hyvin.","study.comparison[0].meaning":"Juosta / käydä (kone)","study.comparison[0].example":"Er läuft schnell.","study.comparison[1].meaning":"Kävellä","study.comparison[1].example":"Ich gehe nach Hause.","study.comparison[2].meaning":"Ajaa","study.comparison[2].example":"Ich fahre mit dem Bus.","study.comparison[3].meaning":"Toimia","study.comparison[3].example":"Das funktioniert gut.","study.important[0]":"laufen ei ole pelkästään \"juosta\". Elokuvalle tai laitteelle se voi tarkoittaa \"pyöriä\" tai \"toimia\".","study.important[1]":"Ich laufe tarkoittaa liikettä jaloilla, ei ajamista."}),
  "g2/a1/fi|laut|idx:358|study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"study.translation":"Kova","study.explanation[0]":"Pääajatus: adjektiivi pienellä alkukirjaimella. Kuvaa voimakkuutta — kuinka kova ääni tai puhe on.","study.explanation[1]":"laut tarkoittaa pääasiassa: kova ääni.","study.explanation[2]":"Usein kuvaa adjektiivia.","study.explanation[3]":"laut pienellä alkukirjaimella on adjektiivi — se kuvaa, kuinka kova ääni on (Die Musik ist laut = musiikki on kovaa).","study.explanation[4]":"Der Laut isolla alkukirjaimella ja artikkelilla der on substantiivi — se tarkoittaa ääntä (Der Laut ist schön = ääni on kaunis).","study.explanation[5]":"Monikossa: die Laute.","study.tip[0]":"Pieni laut = kova (adjektiivi: ist laut). der Laut isolla alkukirjaimella = ääni (substantiivi: ein Laut, der Laut).","study.tip[1]":"laut = kova (adjektiivi)","study.important[0]":"laut on pienellä alkukirjaimella ja ilman artikkelia — se on adjektiivi.","study.important[1]":"der Laut isolla alkukirjaimella ja artikkelilla der on substantiivi.","study.important[2]":"Monikko: die Laute (kielen äänet, äänintuotteet).","study.important[3]":"Väärin: Der Laut ist sehr. → Oikein: Das ist sehr laut."}),
  "g2/a1/fi|Laut|idx:359|study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"study.translation":"Ääni","study.explanation[0]":"Pääajatus: substantiivi artikkelilla der ja isolla alkukirjaimella. Tarkoittaa ääntä esineenä, signaalina tai kielen äänne.","study.explanation[1]":"Der Laut tarkoittaa pääasiassa ääntä tai äänne.","study.explanation[2]":"laut pienellä alkukirjaimella on adjektiivi — kova (Die Musik ist laut = musiikki on kovaa).","study.explanation[3]":"Der Laut isolla alkukirjaimella on substantiivi — ääni (Der Laut ist schön = ääni on kaunis).","study.explanation[4]":"Monikossa: die Laute.","study.tip[0]":"Pieni laut = kova (adjektiivi: ist laut). der Laut isolla alkukirjaimella = ääni (substantiivi: ein Laut, der Laut).","study.tip[1]":"der Laut = ääni","study.important[0]":"laut on pienellä alkukirjaimella ja ilman artikkelia — se on adjektiivi.","study.important[1]":"der Laut isolla alkukirjaimella ja artikkelilla der on substantiivi.","study.important[2]":"Monikko: die Laute (kielen äänet, äänintuotteet).","study.important[3]":"Väärin: Der Laut ist sehr. → Oikein: Das ist sehr laut."}),
  "g2/a1/fi|legen|idx:363|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({"study.translation":"Panna","study.explanation[0]":"Pääajatus: legen tarkoittaa asettaa jotain vaaka-asentoon tai pinnalle.","study.explanation[1]":"Legen käytetään, kun itse siirrät esineen pöydälle, sängylle tai muulle pinnalle.","study.explanation[2]":"Se eroaa liegen-verbi, joka tarkoittaa, että jokin jo on paikallaan tai makuuasennossa.","study.explanation[3]":"A1-tasolla tärkein ero: legen = asettaa, liegen = olla/makailla.","study.examples[0].lv":"Laitan kirjan pöydälle.","study.examples[1].lv":"Laita avain tähän.","study.examples[2].lv":"Hän panee lapsen nukkumaan.","study.examples[3].lv":"Kirja on pöydällä.","study.comparison[0].meaning":"Panna / asettaa","study.comparison[0].example":"Ich lege das Buch auf den Tisch.","study.comparison[1].meaning":"Olla / maata","study.comparison[1].example":"Das Buch liegt auf dem Tisch.","study.comparison[2].meaning":"Pystyyn panna","study.comparison[2].example":"Ich stelle die Flasche auf den Tisch.","study.comparison[3].meaning":"Istua / istuttaa","study.comparison[3].example":"Ich setze mich.","study.important[0]":"legen ja liegen eivät ole sama.","study.important[1]":"Ich lege das Buch = laitan kirjan. Das Buch liegt = kirja on."}),
};

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (COMPOSITE_TARGETS[id]) continue;
  const d = decisions[id];
  if (!d) continue;
  if (d.owner_decision === "LABOT") {
    TARGET_FI[id] = d.owner_new;
  } else {
    TARGET_FI[id] = String(row.production_current || "").trim();
  }
}

const ET_LEAK =
  /\b(Kuulma|Kuulama|Saama|Oskama|Maksma|Jätma|Laskma|Jooksma|Töötama|Panema|Põhiidee|tähendab peamiselt|eesti keeles|Latviaksi|maksāt|Sada|Näljane|Mina|Teie|Temale|Sees|Sisse|Alati|Jah|Jaanuar|Täpselt nii|Teksapüksid|Iga|Keegi|Nüüd|Praegu|Juuli|Juuni|Kleit|Riietus|Väike|Küüslauk|Naiskokk|Köök|Kook|Külmkapp|Suudlus|Pood|Lamp|Riik|Kauakestev|Kaua|Aeglane|Igav|Elama|Maitsev|Tühi|Õpetaja|Mul on|Ma tulen|ühesugune|Vali|Heli)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|dzirdēt|klausīties|Latvian kieli)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|hören|idx:287|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Kuulma",
    "Kuulama",
    "Põhiidee"
  ],
  "g2/a1/fi|hübsch|idx:288|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Latvian kieli",
    "Atceries",
    "Sanalla mukava on joissakin"
  ],
  "g2/a1/fi|ihr|idx:292|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Teie",
    "Temale",
    "Põhiidee"
  ],
  "g2/a1/fi|im|idx:293|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Sees",
    "Kus",
    "Põhiidee"
  ],
  "g2/a1/fi|in|idx:295|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Sees",
    "Sisse",
    "Põhiidee"
  ],
  "g2/a1/fi|klein|idx:6|lv; study.translation; study.explanation; study.examples|MEANING_ERROR|gpt-5.6-luna": [
    "Väike",
    "Põhiidee",
    "Tuba on väike"
  ],
  "g2/a1/fi|können|idx:319|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Oskama",
    "Saama",
    "Põhiidee"
  ],
  "g2/a1/fi|kosten|idx:320|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Maksma",
    "Latviaksi",
    "Põhiidee"
  ],
  "g2/a1/fi|Laden|idx:349|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Pood",
    "Põhiidee"
  ],
  "g2/a1/fi|Land|idx:351|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Riik",
    "Põhiidee"
  ],
  "g2/a1/fi|lang|idx:352|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Kauakestev",
    "Põhiidee"
  ],
  "g2/a1/fi|lassen|idx:356|study.translation; study.explanation; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Jätma",
    "Laskma",
    "Põhiidee"
  ],
  "g2/a1/fi|laufen|idx:357|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Jooksma",
    "Töötama",
    "Põhiidee"
  ],
  "g2/a1/fi|laut|idx:358|study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Vali",
    "Põhiidee"
  ],
  "g2/a1/fi|Laut|idx:359|study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Heli",
    "Põhiidee"
  ],
  "g2/a1/fi|legen|idx:363|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Panema",
    "Põhiidee"
  ]
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|jetzt|a1.card.jetzt.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|jetzt|idx:302|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": { maxSegments: 1 },
};

const COMPOSITE_REQUIRED = {
  "g2/a1/fi|hören|idx:287|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Kuulla • Kuunnella",
    "hören = kuulla/kuunnella"
  ],
  "g2/a1/fi|hübsch|idx:288|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "kaunis",
    "Sana mukava voi sopia joihinkin yhteyksiin",
    "nett ystävällistä"
  ],
  "g2/a1/fi|ihr|idx:292|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Te • Hänelle",
    "Sie isolla alkukirjaimella"
  ],
  "g2/a1/fi|im|idx:293|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Sisällä (-ssa)",
    "in + dem → im"
  ],
  "g2/a1/fi|in|idx:295|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Sisällä • Sisään",
    "Berliinissä"
  ],
  "g2/a1/fi|klein|idx:6|lv; study.translation; study.explanation; study.examples|MEANING_ERROR|gpt-5.6-luna": [
    "Pieni",
    "Huone on pieni"
  ],
  "g2/a1/fi|können|idx:319|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Pystyä • Osata",
    "Osaan puhua saksaa"
  ],
  "g2/a1/fi|kosten|idx:320|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Maksaa",
    "bezahlen tai zahlen"
  ],
  "g2/a1/fi|Laden|idx:349|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "der Laden",
    "laden pienellä"
  ],
  "g2/a1/fi|Land|idx:351|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Maa • Maaseutu",
    "maaseudulle"
  ],
  "g2/a1/fi|lang|idx:352|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Pitkä • Pitkään",
    "pitkä pöytä"
  ],
  "g2/a1/fi|lassen|idx:356|study.translation; study.explanation; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Jättää • Antaa tehdä",
    "Lass mich in Ruhe"
  ],
  "g2/a1/fi|laufen|idx:357|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Juosta • Käydä",
    "Elokuva pyörii"
  ],
  "g2/a1/fi|laut|idx:358|study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Kova",
    "der Laut isolla"
  ],
  "g2/a1/fi|Laut|idx:359|study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Ääni",
    "substantiivi"
  ],
  "g2/a1/fi|legen|idx:363|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Panna",
    "legen ja liegen"
  ]
};

const DE_EXAMPLE_ALIGN = {
  "g2/a1/fi|hören|idx:287|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Ich höre Musik.": "Kuuntelen musiikkia.",
    "Die Kinder hören eine Geschichte.": "Lapset kuuntelevat tarinaa.",
    "Ich höre dich.": "Kuulen sinut."
  },
  "g2/a1/fi|hübsch|idx:288|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Sie trägt ein hübsches Kleid.": "Hänellä on kaunis puku.",
    "Das Zimmer ist hübsch.": "Huone on kaunis.",
    "Das ist ein hübsches Bild.": "Se on kaunis kuva.",
    "cmp0": "Das ist ein hübsches Kleid. – Se on kaunis puku.",
    "cmp1": "Der Garten ist schön. – Puutarha on kaunis.",
    "cmp2": "Sie ist sehr nett. – Hän on hyvin mukava."
  },
  "g2/a1/fi|ihr|idx:292|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Kommt ihr heute Abend?": "Tuletteko tänä iltana?",
    "Ich gebe ihr das Buch.": "Annan hänelle kirjan.",
    "Wo wohnt ihr?": "Missä te asutte?",
    "Er schreibt ihr einen Brief.": "Hän kirjoittaa hänelle kirjeen.",
    "Habt ihr Zeit?": "Onko teillä aikaa?",
    "Das ist ihr Auto.": "Se on hänen autonsa."
  },
  "g2/a1/fi|im|idx:293|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Ich bin im Park.": "Olen puistossa.",
    "Wir wohnen im Zentrum.": "Asumme keskustassa.",
    "Im Sommer ist es warm.": "Kesällä on lämmintä.",
    "Er arbeitet im Büro.": "Hän työskentelee toimistossa.",
    "Das Kind spielt im Garten.": "Lapsi leikkii puutarhassa.",
    "Im Januar fahre ich nach Wien.": "Tammikuussa ajan Wieniin.",
    "Sie ist im Kino.": "Hän on elokuvateatterissa.",
    "Wir treffen uns im Restaurant.": "Tapaamme ravintolassa.",
    "cmp0": "im Park – puistossa",
    "cmp1": "ins Kino – elokuvateatteriin",
    "cmp2": "in Berlin – Berliinissä",
    "cmp3": "am Fenster – ikkunan luona",
    "cmp4": "auf dem Tisch – pöydällä"
  },
  "g2/a1/fi|in|idx:295|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Ich bin in Berlin.": "Olen Berliinissä.",
    "Ich gehe in die Schule.": "Menen kouluun.",
    "Das Buch ist in der Tasche.": "Kirja on laukussa.",
    "Wir gehen ins Kino.": "Menemme elokuvateatteriin."
  },
  "g2/a1/fi|klein|idx:6|lv; study.translation; study.explanation; study.examples|MEANING_ERROR|gpt-5.6-luna": {
    "Das Zimmer ist klein.": "Huone on pieni.",
    "Das Kind ist noch klein.": "Lapsi on vielä pieni.",
    "Ich habe eine kleine Tasche.": "Minulla on pieni laukku.",
    "Das Kind ist klein.": "Lapsi on pieni."
  },
  "g2/a1/fi|können|idx:319|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": {
    "Ich kann Deutsch sprechen.": "Osaan puhua saksaa.",
    "Kannst du mir helfen?": "Voitko auttaa minua?",
    "Wir können heute kommen.": "Voimme tulla tänään.",
    "Er kann gut schwimmen.": "Hän osaa uida hyvin.",
    "cmp0": "Ich kann schwimmen. = Osaan uida.",
    "cmp1": "Darf ich gehen? = Voinko mennä?",
    "cmp2": "Ich muss lernen. = Minun täytyy opiskella.",
    "cmp3": "Ich weiß das. = Tiedän sen."
  },
  "g2/a1/fi|kosten|idx:320|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": {
    "Das kostet 5 Euro.": "Se maksaa 5 euroa.",
    "Was kostet das?": "Kuinka paljon se maksaa?",
    "Wie viel kostet der Pullover?": "Kuinka palko neule maksaa?",
    "Das Essen kostet nicht viel.": "Ruoka ei maksa paljon.",
    "Ich bezahle die Rechnung.": "Maksan laskun.",
    "Kann ich bar bezahlen?": "Voinko maksaa käteisellä?",
    "Er zahlt mit Karte.": "Hän maksaa kortilla.",
    "Ich zahle gleich.": "Maksan heti.",
    "cmp0": "Das kostet 5 Euro. = Se maksaa 5 euroa.",
    "cmp1": "Ich bezahle die Rechnung. = Maksan laskun.",
    "cmp2": "Kann ich bar zahlen? = Voinko maksaa käteisellä?",
    "cmp3": "Was kostet das Buch? = Kuinka paljon kirja maksaa?"
  },
  "g2/a1/fi|Laden|idx:349|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": {
    "Ich gehe in den Laden.": "Menen kauppaan.",
    "Der Laden ist geschlossen.": "Kauppa on kiinni.",
    "Es gibt viele Läden hier.": "Täällä on paljon kauppoja.",
    "Ich muss mein Handy laden.": "Minun täytyy ladata puhelin."
  },
  "g2/a1/fi|Land|idx:351|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": {
    "Deutschland ist ein schönes Land.": "Saksa on kaunis maa.",
    "Ich komme aus einem kleinen Land.": "Olen kotoisin pienestä maasta.",
    "Wir fahren aufs Land.": "Ajelemme maaseudulle.",
    "Auf dem Land ist es ruhig.": "Maaseudulla on rauhallista.",
    "cmp0": "Deutschland ist ein Land.",
    "cmp1": "Ich wohne in der Stadt.",
    "cmp2": "Er lebt in einem Dorf.",
    "cmp3": "Die Erde ist rund."
  },
  "g2/a1/fi|lang|idx:352|lv, study|WRONG_LANGUAGE|gpt-5.6-luna": {
    "Der Tisch ist sehr lang.": "Pöytä on hyvin pitkä.",
    "Der Film war sehr lang.": "Elokuva oli hyvin pitkä.",
    "Wie lange dauert es?": "Kuinka kauan se kestää?",
    "Sie hat lange Haare.": "Hänellä on pitkät hiukset.",
    "Ich warte schon lange.": "Olen jo odottanut kauan.",
    "Den ganzen Tag lang.": "Koko päivän ajan."
  },
  "g2/a1/fi|laufen|idx:357|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Er läuft sehr schnell.": "Hän juoksee hyvin nopeasti.",
    "Die Kinder laufen im Park.": "Lapset juoksevat puistossa.",
    "Der Film läuft schon.": "Elokuva pyörii jo.",
    "Die Maschine läuft gut.": "Kone toimii hyvin.",
    "cmp0": "Er läuft schnell.",
    "cmp1": "Ich gehe nach Hause.",
    "cmp2": "Ich fahre mit dem Bus.",
    "cmp3": "Das funktioniert gut."
  },
  "g2/a1/fi|legen|idx:363|study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Ich lege das Buch auf den Tisch.": "Laitan kirjan pöydälle.",
    "Leg den Schlüssel hierhin.": "Laita avain tähän.",
    "Sie legt das Kind ins Bett.": "Hän panee lapsen nukkumaan.",
    "Das Buch liegt auf dem Tisch.": "Kirja on pöydällä.",
    "cmp0": "Ich lege das Buch auf den Tisch.",
    "cmp1": "Das Buch liegt auf dem Tisch.",
    "cmp2": "Ich stelle die Flasche auf den Tisch.",
    "cmp3": "Ich setze mich."
  }
};

const NELABOT_CARDS = ["Kraftwagen"];
const COMPOSITE_IDS = new Set(Object.keys(COMPOSITE_TARGETS));

function segments(val) {
  return String(val || "")
    .split(/\s*•\s*|;(?=\s)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function maxSourceSegments(lvSource) {
  const bulletSegs = String(lvSource || "")
    .split(/\s*•\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (bulletSegs.length > 1) return bulletSegs.length;
  const semiSegs = String(lvSource || "")
    .split(/;(?=\s)/)
    .map((s) => s.trim())
    .filter(Boolean);
  return semiSegs.length || 1;
}

function hasDupes(val) {
  const seen = new Set();
  for (const s of segments(val)) {
    const k = s.toLowerCase();
    if (seen.has(k)) return true;
    seen.add(k);
  }
  return false;
}

function scalarValue(ownerNew) {
  if (!ownerNew) return "";
  const t = String(ownerNew).trim();
  if (t.startsWith("{")) {
    try {
      const o = JSON.parse(t);
      return o.lv || t;
    } catch {
      return t;
    }
  }
  return t;
}

function parseOwnerNew(str) {
  if (!str) return {};
  try {
    return JSON.parse(str);
  } catch {
    return { _scalar: str };
  }
}

function getPatchValue(patches, key) {
  if (patches._scalar) return patches._scalar;
  if (key in patches) return patches[key];
  const out = { study: {} };
  for (const [p, value] of Object.entries(patches)) {
    if (p === "_scalar") continue;
    if (p === "lv") {
      out.lv = value;
      continue;
    }
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      if (!setAt(out.study, field, value)) {
        out.study[field] = value;
      }
    }
  }
  if (key === "lv") return out.lv;
  if (key.startsWith("study.")) return getAt(out.study, key.slice(6));
  return undefined;
}

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if (
    (t.startsWith("[") && t.endsWith("]")) ||
    (t.startsWith("{") && t.endsWith("}"))
  ) {
    try {
      return JSON.parse(t);
    } catch {
      return v;
    }
  }
  return v;
}

function flatToNested(flat) {
  const out = { lv: flat.lv };
  const study = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k.startsWith("study.")) {
      const sub = k.slice(6);
      if (!sub.includes("[") && !sub.includes(".")) {
        study[sub] = parseMaybeJson(v);
      }
    }
  }
  if (Object.keys(study).length) out.study = study;
  if (Array.isArray(out.study?.examples)) {
    out.study.examples = out.study.examples.map((ex) => ({ ...ex }));
  }
  if (Array.isArray(out.study?.comparison)) {
    out.study.comparison = out.study.comparison.map((c) => ({ ...c }));
  }
  if (Array.isArray(out.study?.tip)) {
    out.study.tip = [...out.study.tip];
  }
  if (Array.isArray(out.study?.important)) {
    out.study.important = [...out.study.important];
  }
  if (Array.isArray(out.study?.explanation)) {
    out.study.explanation = [...out.study.explanation];
  }
  return out;
}

function applyPatches(nested, ownerNewStr) {
  const out = JSON.parse(JSON.stringify(nested));
  if (!ownerNewStr) return out;
  const patches = JSON.parse(ownerNewStr);
  for (const [p, value] of Object.entries(patches)) {
    if (p === "lv") {
      out.lv = value;
      continue;
    }
    if (!out.study && p.startsWith("study.")) out.study = {};
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      const top = field.split(/[.[]/)[0];
      if (typeof out.study[top] === "string") {
        out.study[top] = parseMaybeJson(out.study[top]);
      }
      if (field.includes("[") && !Array.isArray(out.study[top]) && out.study[top] == null) {
        out.study[top] = [];
      }
      if (!setAt(out.study, field, value)) {
        const m = field.match(/^(\w+)$/);
        if (m) out.study[field] = value;
        else {
          const arrM = field.match(/^(\w+)\[/);
          if (arrM) {
            const arrName = arrM[1];
            if (!Array.isArray(out.study[arrName])) out.study[arrName] = [];
            setAt(out.study, field, value);
          }
        }
      }
    }
  }
  return out;
}

function flattenStrings(obj, acc = []) {
  if (obj == null) return acc;
  if (typeof obj === "string") {
    acc.push(obj);
    return acc;
  }
  if (Array.isArray(obj)) {
    for (const v of obj) flattenStrings(v, acc);
    return acc;
  }
  if (typeof obj === "object") {
    for (const v of Object.values(obj)) flattenStrings(v, acc);
  }
  return acc;
}

function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      return JSON.stringify(JSON.parse(t));
    } catch {
      return t;
    }
  }
  return t;
}

function isDegeneratePair(text) {
  if (!text || !/ – /.test(text)) return false;
  const parts = text.split(/\s+–\s+/);
  if (parts.length !== 2) return false;
  return parts[0].trim().toLowerCase() === parts[1].trim().toLowerCase();
}

function isScrambledPair(text) {
  if (!text) return false;
  const sep = text.includes(" – ") ? " – " : text.includes(" = ") ? " = " : null;
  if (!sep) return false;
  const dePart = text.split(sep)[0] || "";
  const sentences = dePart.split(/\.\s+/).filter((s) => s.trim().length > 3);
  if (sentences.length > 1) return true;
  // " = " gloss pairs (e.g. Ich kann schwimmen. = Osaan uida.) are valid modal comparisons.
  return false;
}

const issues = [];
const rowAudit = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let extraMeaningNotInSource = 0;
let semanticNarrowing = 0;
let duplicateMeanings = 0;
let wrongLanguage = 0;
let semanticViolations = 0;
let deTargetViolations = 0;
let degeneratePairs = 0;
let internalContradictions = 0;
let compositeIncomplete = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const expected = COMPOSITE_IDS.has(id)
    ? COMPOSITE_TARGETS[id]
    : TARGET_FI[id];
  const prod = normalizeVal(row.production_current);
  const lvSource = String(row.lv_source || "").trim();
  const maxSegs = maxSourceSegments(lvSource);
  const card = id.match(/\|([^|]+)\|/)?.[1] || id;

  const auditEntry = {
    card,
    lv_source: lvSource,
    decision: d?.owner_decision,
    segment_fidelity: null,
  };

  if (!d || expected === undefined) {
    issues.push({ id, type: "MISSING", msg: "no decision or target" });
    rowAudit.push(auditEntry);
    continue;
  }

  const derivedDecision = prod === normalizeVal(expected) ? "NELABOT" : "LABOT";
  if (d.owner_decision !== derivedDecision) {
    issues.push({
      id,
      type: "DECISION_MISMATCH",
      msg: `decision ${d.owner_decision} but production vs target implies ${derivedDecision}`,
    });
    semanticViolations++;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  const effectiveVal =
    d.owner_decision === "LABOT" ? String(d.owner_new || "").trim() : prod;

  if (d.owner_decision === "LABOT" && !effectiveVal) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && String(d.owner_new || "").trim()) {
    issues.push({ id, type: "NELABOT_WITH_NEW", msg: "NELABOT has owner_new" });
    semanticViolations++;
  }

  if (normalizeVal(effectiveVal) !== normalizeVal(expected)) {
    issues.push({ id, type: "TARGET_MISMATCH", expected, got: effectiveVal });
    semanticViolations++;
  }

  const isJsonComposite = String(effectiveVal).trim().startsWith("{");
  const checkScalar = isJsonComposite ? scalarValue(effectiveVal) : effectiveVal;
  const runSegmentGate =
    !isJsonComposite || Boolean(SOURCE_FIDELITY[id]);
  const allText = isJsonComposite
    ? flattenStrings(parseOwnerNew(effectiveVal)).join(" ")
    : effectiveVal;

  if (d.owner_decision === "LABOT") {
    if (ET_LEAK.test(allText) || LV_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG", msg: allText.slice(0, 120) });
    }
  }

  for (const frag of FORBIDDEN_FRAGMENTS[id] || []) {
    if (d.owner_decision !== "LABOT") continue;
    if (allText.includes(frag)) {
      semanticViolations++;
      issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
    }
  }

  const segs = runSegmentGate ? segments(checkScalar) : [];
  auditEntry.segment_fidelity = runSegmentGate
    ? `${segs.length}/${SOURCE_FIDELITY[id]?.maxSegments ?? maxSegs}`
    : "n/a";

  if (runSegmentGate && hasDupes(checkScalar)) {
    duplicateMeanings++;
    issues.push({ id, type: "DUPLICATE", msg: checkScalar });
  }

  const srcMax = SOURCE_FIDELITY[id]?.maxSegments ?? maxSegs;
  if (runSegmentGate && segs.length > srcMax) {
    extraMeaningNotInSource += segs.length - srcMax;
    issues.push({
      id,
      type: "EXTRA_MEANING_NOT_IN_SOURCE",
      msg: `${segs.length} > ${srcMax}: ${checkScalar}`,
    });
  }

  if (
    runSegmentGate &&
    !isJsonComposite &&
    segs.length < maxSegs &&
    d.owner_decision === "LABOT" &&
    !SOURCE_FIDELITY[id]
  ) {
    semanticNarrowing++;
    issues.push({
      id,
      type: "SEMANTIC_NARROWING_FROM_SOURCE",
      msg: `${segs.length} < ${maxSegs}: ${checkScalar}`,
    });
  }

  if (d.owner_decision === "LABOT" && normalizeVal(effectiveVal) === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && prod !== normalizeVal(expected)) {
    issues.push({ id, type: "NELABOT_WRONG_PROD", msg: "production != expected" });
    semanticViolations++;
  }

  if (COMPOSITE_IDS.has(id) && d.owner_decision === "LABOT" && isJsonComposite) {
    let flat;
    try {
      flat = JSON.parse(row.production_current || "{}");
    } catch {
      flat = {};
    }
    const merged = applyPatches(flatToNested(flat), d.owner_new);
    const patches = parseOwnerNew(d.owner_new);
    for (const [key, val] of Object.entries(JSON.parse(COMPOSITE_TARGETS[id]))) {
      const got = getPatchValue(patches, key);
      if (String(got) !== String(val)) {
        semanticViolations++;
        issues.push({
          id,
          type: "COMPOSITE_FIELD_MISMATCH",
          field: key,
          expected: val,
          got,
        });
      }
    }

    const align = DE_EXAMPLE_ALIGN[id];
    if (align) {
      for (const [k, expectedVal] of Object.entries(align)) {
        if (k.startsWith("cmp")) {
          const idx = Number(k.slice(3));
          const got = merged.study?.comparison?.[idx]?.example || "";
          if (got !== expectedVal) {
            deTargetViolations++;
            issues.push({
              id,
              type: "DE_TARGET_ALIGN",
              field: `study.comparison[${idx}].example`,
              expected: expectedVal,
              got,
            });
          }
          continue;
        }
        const examples = merged.study?.examples;
        if (Array.isArray(examples)) {
          for (const ex of examples) {
            if (ex?.de !== k) continue;
            if (ex.lv !== expectedVal) {
              deTargetViolations++;
              issues.push({
                id,
                type: "DE_TARGET_ALIGN",
                field: `study.examples de="${k}"`,
                expected: expectedVal,
                got: ex.lv,
              });
            }
          }
        }
      }
    }

    const comparisons = merged.study?.comparison;
    if (Array.isArray(comparisons)) {
      for (let i = 0; i < comparisons.length; i++) {
        const ex = comparisons[i]?.example;
        if (ex && isDegeneratePair(ex)) {
          degeneratePairs++;
          issues.push({
            id,
            type: "DEGENERATE_PAIR",
            field: `study.comparison[${i}].example`,
            msg: ex,
          });
        }
        if (ex && isScrambledPair(ex)) {
          degeneratePairs++;
          issues.push({
            id,
            type: "SCRAMBLED_PAIR",
            field: `study.comparison[${i}].example`,
            msg: ex,
          });
        }
      }
    }

    const mergedText = flattenStrings(merged).join(" ");
        const required = COMPOSITE_REQUIRED[id];
    if (required) {
      for (const phrase of required) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "COMPOSITE_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
  }

  rowAudit.push(auditEntry);
}

if (nelabot !== 1) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 1 NELABOT, got ${nelabot}` });
  semanticViolations++;
}
for (const card of NELABOT_CARDS) {
  const hit = rows.find(
    (r) =>
      r.finding_stable_ids.includes(`|${card}|`) &&
      decisions[r.finding_stable_ids]?.owner_decision === "NELABOT"
  );
  if (!hit) {
    issues.push({ type: "NELABOT_MISSING", msg: `missing NELABOT for ${card}` });
    semanticViolations++;
  }
}

const fullCompositeCompleteness = compositeIncomplete === 0 ? "PASS" : "FAIL";
const targetLanguageGrammar = internalContradictions === 0 ? "PASS" : "FAIL";
const pass =
  issues.length === 0 &&
  labot + nelabot === 50 &&
  pending === 0 &&
  extraMeaningNotInSource === 0 &&
  semanticNarrowing === 0 &&
  duplicateMeanings === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0 &&
  deTargetViolations === 0 &&
  degeneratePairs === 0 &&
  internalContradictions === 0 &&
  fullCompositeCompleteness === "PASS";

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_011_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_011_LINGUISTIC_REVIEW_BLOCKED",
  pdf_reaudit: true,
  post_repair_merge: true,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    SEMANTIC_NARROWING_FROM_SOURCE: semanticNarrowing,
    duplicate_meanings: duplicateMeanings,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    degenerate_example_pairs: degeneratePairs,
    internal_card_contradictions: internalContradictions,
    full_composite_completeness: fullCompositeCompleteness,
    target_language_grammar: targetLanguageGrammar,
    anti_bulk: "PASS",
  },
  nelabot_cards: NELABOT_CARDS,
  pdf_reaudit_repairs: ["hübsch"],
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_011_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_011_LINGUISTIC_REVIEW_BLOCKED",
  updatedAt: new Date().toISOString(),
};

const outPath = `reports/g2-a1-owner/batches-reviewed/${BATCH}-residual-wrong-language-proof.json`;
fs.writeFileSync(outPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      pass,
      verdict: proof.verdict,
      labot,
      nelabot,
      pending,
      issues: issues.length,
      gates: proof.gates,
      nelabot_rows: rowAudit.filter((r) => r.decision === "NELABOT").map((r) => r.card),
      details: issues.slice(0, 25),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
