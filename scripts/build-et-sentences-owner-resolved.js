#!/usr/bin/env node
"use strict";
/**
 * Build ET-DE sentences OWNER resolved JSON from merged audit + linguistic review.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadSentences, resolveSentenceCurrent } = require("./lib/et-owner-production-resolve");

const MERGED = path.join(ROOT, "reports/temp/et-sentences-merged-audit.json");
const OUT = path.join(ROOT, "reports/temp/et-sentences-owner-resolved.json");

/** @type {Record<string, {status: string, ownerNew: string, note: string}>} */
const DECISIONS = {
  "ET-SENT-0001": {
    status: "LABOT",
    ownerNew: "Kui miski ei sega.",
    note: "Esimene variant säilitab saksa negatsiooni; teine variant „plaanipäraselt” ei vasta DE tähendusele.",
  },
  "ET-SENT-0002": {
    status: "NELABOT",
    ownerNew: "",
    note: "„Seda ma juba tean!” on vastuvõetav idiomaatiline vaste väljendile „Das kann ich mir denken”.",
  },
  "ET-SENT-0003": {
    status: "LABOT",
    ownerNew: "Aeg surub tagant.",
    note: "„Die Zeit drängt” rõhutab aja survet, mitte liikumiskiirust.",
  },
  "ET-SENT-0004": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Läbipääs suletud!” väljendab saksa „Kein Durchgang” standardse märkuse vormis.",
  },
  "ET-SENT-0005": {
    status: "LABOT",
    ownerNew: "Kas ma tohin teid paluda?",
    note: "Verb „paluma” nõuab osastavat „teid”, mitte „teilt”.",
  },
  "ET-SENT-0006": {
    status: "LABOT",
    ownerNew: "Väga kiire!",
    note: "Elliptiline saksa väljend tähendab kiireloomulisust, mitte tegevuse viisi.",
  },
  "ET-SENT-0007": {
    status: "LABOT",
    ownerNew: "Kuidas sa julged?",
    note: "„Was fällt dir ein?” on etteheide, mitte küsimus pähe tuleva mõtte kohta.",
  },
  "ET-SENT-0008": {
    status: "LABOT",
    ownerNew: "Elas kord.",
    note: "Muinasjutu algusvormel „Elas kord” on eesti keeles loomulik.",
  },
  "ET-SENT-0009": {
    status: "LABOT",
    ownerNew: "Mis minusse puutub,...",
    note: "Idiomaatiline sõnajärg eesti keeles.",
  },
  "ET-SENT-0010": {
    status: "LABOT",
    ownerNew: "Nüüdsest.",
    note: "„Von jetzt an” = nüüdsest/siitpeale.",
  },
  "ET-SENT-0011": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Teisiti ei saa” sisaldab negatsiooni „ei”.",
  },
  "ET-SENT-0012": {
    status: "LABOT",
    ownerNew: "Ma läbisin väljaõppe.",
    note: "„Ausbildung absolviert” = väljaõppe läbimine; eemalda vale variant „haridus”.",
  },
  "ET-SENT-0013": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Pole aimugi!” väljendab negatsiooni vormiga „pole”.",
  },
  "ET-SENT-0014": {
    status: "NEEDS_SOURCE_REVIEW",
    ownerNew: "",
    note: "Saksa lause „akademisch gekleidet” on ebastandardne; täpne ET vaste sõltub allikast.",
  },
  "ET-SENT-0015": {
    status: "LABOT",
    ownerNew: "Kas sa saad seadmel klõpsata?",
    note: "Klõpsamise puhul kasutatakse alalütlevat käänet.",
  },
  "ET-SENT-0016": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära karda” väljendab saksa „Keine Angst” negatsiooni käskivas vormis.",
  },
  "ET-SENT-0017": {
    status: "LABOT",
    ownerNew: "Ära karda, kõik saab korda.",
    note: "„Kõik saab korda” on loomulik vaste „alles wird gut”.",
  },
  "ET-SENT-0018": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„ei usu” vastab saksa „nicht”.",
  },
  "ET-SENT-0019": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära teeskle” vastab saksa „nicht so anstellen”.",
  },
  "ET-SENT-0020": {
    status: "LABOT",
    ownerNew: "Ära tee numbrit!",
    note: "Täpsem idiomaatiline vaste dramatiseerimisele.",
  },
  "ET-SENT-0021": {
    status: "LABOT",
    ownerNew: "Ava palun uks!",
    note: "Saksa ainsuse mitteametlik käsk, mitte „avage”.",
  },
  "ET-SENT-0022": {
    status: "LABOT",
    ownerNew: "Rakendada kõiki jõude.",
    note: "Loomulik vaste jõupingutusele.",
  },
  "ET-SENT-0023": {
    status: "LABOT",
    ownerNew: "Palju vaeva nägema.",
    note: "„Viel Mühe aufwenden” = palju vaeva nägema.",
  },
  "ET-SENT-0024": {
    status: "LABOT",
    ownerNew: "Kao mu silmist!",
    note: "Idiomaatiline vaste „Geh mir aus den Augen”.",
  },
  "ET-SENT-0025": {
    status: "LABOT",
    ownerNew: "Kahekesi. • Nelja silma all.",
    note: "„Unter vier Augen” = nelja silma all; eemalda vale „vaikselt”.",
  },
  "ET-SENT-0026": {
    status: "LABOT",
    ownerNew: "Äärmisel juhul.",
    note: "„Äußersten” = äärmine, mitte halvim.",
  },
  "ET-SENT-0027": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Praegune ET on loomulik eesti keel; ET_LT artefakt ei kinnitust.",
  },
  "ET-SENT-0028": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Mit der Bahn” ja „Per Bahn” jagavad sama ET tõlget „Rongiga”.",
  },
  "ET-SENT-0029": {
    status: "LABOT",
    ownerNew: "Nii pea kui võimalik.",
    note: "„Möglichst bald” = võimalikult pea, mitte kiiresti.",
  },
  "ET-SENT-0030": {
    status: "LABOT",
    ownerNew: "Ma kardan väga.",
    note: "Hirmu väljendatakse eesti keeles verbiga, mitte „mul on hirm”.",
  },
  "ET-SENT-0031": {
    status: "LABOT",
    ownerNew: "Maaki kaevandada.",
    note: "„Erz bauen” = maaki kaevandama, mitte saama.",
  },
  "ET-SENT-0032": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Praegune ET on loomulik; ET_LT artefakt ei kinnitust.",
  },
  "ET-SENT-0033": {
    status: "LABOT",
    ownerNew: "Soovin väga teada saada.",
    note: "„Ich bin begierig zu wissen” = tahan teada.",
  },
  "ET-SENT-0034": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Am Beginn” ja „Zu Beginn” jagavad ET „Alguses”.",
  },
  "ET-SENT-0035": {
    status: "LABOT",
    ownerNew: "Alguses.",
    note: "„Bei Beginn” = alguses, mitte „alates”.",
  },
  "ET-SENT-0036": {
    status: "LABOT",
    ownerNew: "Seltsis.",
    note: "Iseseisev fraas „seltsis” on loomulik.",
  },
  "ET-SENT-0037": {
    status: "LABOT",
    ownerNew: "Tema kaaslasega.",
    note: "Säilita saksa possessiiv „seiner”.",
  },
  "ET-SENT-0038": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Sugugi mitte” väljendab negatsiooni.",
  },
  "ET-SENT-0039": {
    status: "LABOT",
    ownerNew: "Kaugeltki mitte nii.",
    note: "Säilita võrdlev „nii”, mida „sugugi mitte” ei väljenda.",
  },
  "ET-SENT-0040": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Avaldada kaastunnet” on mõistetav mõlema saksa fraasi jaoks.",
  },
  "ET-SENT-0041": {
    status: "LABOT",
    ownerNew: "Kattega võileivad.",
    note: "Loomulik toidukeel.",
  },
  "ET-SENT-0042": {
    status: "LABOT",
    ownerNew: "Uued luuad pühivad hästi.",
    note: "Saksa vanasõna on mitmuses.",
  },
  "ET-SENT-0043": {
    status: "LABOT",
    ownerNew: "Külas olla.",
    note: "„Zu Besuch sein” = külas olla; eemalda vale „külas käia”.",
  },
  "ET-SENT-0044": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Alle beiden” ja „Alle beide” jagavad ET „Mõlemad”.",
  },
  "ET-SENT-0045": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Tootmises juba „Millegi suhtes”; saksa fragment on allika küsimus.",
  },
  "ET-SENT-0046": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Bitte sehr” ja „Bitte schön” jagavad ET „Palun”.",
  },
  "ET-SENT-0047": {
    status: "LABOT",
    ownerNew: "Aitäh komplimendi eest!",
    note: "Idiomaatiline tänu komplimendi, mitte lillede eest.",
  },
  "ET-SENT-0048": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ma ei saa selle vastu midagi teha” sisaldab negatsiooni.",
  },
  "ET-SENT-0049": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Mul ei ole selle vastu midagi” sisaldab negatsiooni.",
  },
  "ET-SENT-0050": {
    status: "LABOT",
    ownerNew: "Käia lipuga.",
    note: "Male kontekstis loomulik vaste.",
  },
  "ET-SENT-0051": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Sellest ei tule midagi välja” sisaldab negatsiooni.",
  },
  "ET-SENT-0052": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära lase pead norgu” vastab saksa „nicht hängen”.",
  },
  "ET-SENT-0053": {
    status: "LABOT",
    ownerNew: "loomu poolest",
    note: "„Von Haus aus” = loomupäraselt, mitte lapsepõlvest.",
  },
  "ET-SENT-0054": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Olge nii lahke” on vastuvõetav vaste „Haben Sie die Güte”.",
  },
  "ET-SENT-0055": {
    status: "LABOT",
    ownerNew: "Mis sul viga on?",
    note: "Eemalda vale variant „Mis on juhtunud?”; see vastab teisele saksa fraasile.",
  },
  "ET-SENT-0056": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära tee rumalusi/nalja” vastab saksa „keine Geschichten”.",
  },
  "ET-SENT-0057": {
    status: "LABOT",
    ownerNew: "Ära aja jama!",
    note: "Täpsem idiomaatiline vaste „stseeni tegemisele”.",
  },
  "ET-SENT-0058": {
    status: "LABOT",
    ownerNew: "Küsi temalt aeg-ajalt, kas...",
    note: "„Gelegentlich” = aeg-ajalt.",
  },
  "ET-SENT-0059": {
    status: "LABOT",
    ownerNew: "Jätka!",
    note: "Eemalda tarbetud „samamoodi edasi”.",
  },
  "ET-SENT-0060": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Talle ei meeldi” väljendab „kein Freund von” tähendust.",
  },
  "ET-SENT-0061": {
    status: "LABOT",
    ownerNew: "Mul on valus näha...",
    note: "Saksa väljendab kõneleja valu, mitte lihtsalt kahju.",
  },
  "ET-SENT-0062": {
    status: "LABOT",
    ownerNew: "Kas ma saaksin rääkida proua N-iga?",
    note: "Lühendi käändelõpp „N-iga”.",
  },
  "ET-SENT-0063": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Mis on juhtunud?” on teise saksa fraasi jaoks; see finding on struktuuriline.",
  },
  "ET-SENT-0064": {
    status: "LABOT",
    ownerNew: "Mis lahti on?",
    note: "„Was ist los?” = mis lahti on / mis toimub.",
  },
  "ET-SENT-0065": {
    status: "LABOT",
    ownerNew: "See oli kurnav päev.",
    note: "„Anstrengend” = kurnav, mitte pingeline.",
  },
  "ET-SENT-0066": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„See ei ole sugugi nii raske” sisaldab negatsiooni.",
  },
  "ET-SENT-0067": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Mul ei ole üldse raha” sisaldab negatsiooni.",
  },
  "ET-SENT-0068": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ta ei öelnud üldse midagi” sisaldab negatsiooni.",
  },
  "ET-SENT-0069": {
    status: "LABOT",
    ownerNew: "Koer on lahti.",
    note: "„Der Hund ist los” = koer on lahti/vabalt.",
  },
  "ET-SENT-0070": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Mulle see ei meeldi” sisaldab negatsiooni.",
  },
  "ET-SENT-0071": {
    status: "LABOT",
    ownerNew: "Mis kasu sellest kõigest on?",
    note: "„Wozu nützt” küsib kasu, mitte eesmärki.",
  },
  "ET-SENT-0072": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Parkimine keelatud” väljendab saksa „Nicht parken” märkuse vormis.",
  },
  "ET-SENT-0073": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Parkimine keelatud” on mõistetav.",
  },
  "ET-SENT-0074": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Sellest ei saa juttugi olla” sisaldab negatsiooni.",
  },
  "ET-SENT-0075": {
    status: "LABOT",
    ownerNew: "Hea küll!",
    note: "„Schon gut” = hea küll, mitte „on juba hea”.",
  },
  "ET-SENT-0076": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Mitte ainult..., vaid ka...” sisaldab negatsiooni „mitte”.",
  },
  "ET-SENT-0077": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Kuidas läheb?” on mõistetav.",
  },
  "ET-SENT-0078": {
    status: "LABOT",
    ownerNew: "Ta elab minu kohal.",
    note: "Elukoha kontekstis loomulik vaste.",
  },
  "ET-SENT-0079": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Mis kell on?” on mõistetav.",
  },
  "ET-SENT-0080": {
    status: "LABOT",
    ownerNew: "Ja kuidas veel!",
    note: "Loomulik sõnajärg eesti keeles.",
  },
  "ET-SENT-0081": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Pole tänu väärt” väljendab negatsiooni vormiga „pole”.",
  },
  "ET-SENT-0082": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ta ei saa sellest midagi aru” sisaldab negatsiooni.",
  },
  "ET-SENT-0083": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Aeg-ajalt” on mõistetav.",
  },
  "ET-SENT-0084": {
    status: "LABOT",
    ownerNew: "Elukutselt.",
    note: "„Von Beruf” = elukutselt.",
  },
  "ET-SENT-0085": {
    status: "LABOT",
    ownerNew: "Ta on sünnilt berliinlane.",
    note: "„Von Geburt” = sünnilt.",
  },
  "ET-SENT-0086": {
    status: "LABOT",
    ownerNew: "Rõõmust.",
    note: "„Vor Freude” = rõõmust.",
  },
  "ET-SENT-0087": {
    status: "LABOT",
    ownerNew: "Tarvitusele võtta ettevaatusabinõud.",
    note: "„Vorkehrungen treffen” = ettevaatusabinõud.",
  },
  "ET-SENT-0088": {
    status: "LABOT",
    ownerNew: "Rääkida nagu seinale.",
    note: "Idiomaatiline vaste „gegen eine Wand reden”.",
  },
  "ET-SENT-0089": {
    status: "LABOT",
    ownerNew: "Õiguse järgi.",
    note: "„Von Rechts wegen” = õiguse järgi.",
  },
  "ET-SENT-0090": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Negatsiooni finding on artefakt; tegelik probleem on tähendus (vt 0091).",
  },
  "ET-SENT-0091": {
    status: "LABOT",
    ownerNew: "Ilma pikemata.",
    note: "„Ohne weiteres” = ilma pikemata/raskusteta.",
  },
  "ET-SENT-0092": {
    status: "LABOT",
    ownerNew: "Rohkem midagi pole.",
    note: "„Weiter nichts” = rohkem midagi pole; praegune „Muud midagi” on vale tähendus.",
  },
  "ET-SENT-0093": {
    status: "LABOT",
    ownerNew: "Võidu jooksma.",
    note: "„Um die Wette laufen” = võidu peale jooksma.",
  },
  "ET-SENT-0094": {
    status: "LABOT",
    ownerNew: "Mis on kihlveo panuseks?",
    note: "Küsimus panuse kohta.",
  },
  "ET-SENT-0095": {
    status: "LABOT",
    ownerNew: "Tere tulemast!",
    note: "Loomulik tervitus, mitte sõnasõnaline „südamlikult”.",
  },
  "ET-SENT-0096": {
    status: "LABOT",
    ownerNew: "Vorstiots.",
    note: "Loomulik liitsõna.",
  },
  "ET-SENT-0097": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Seda ma poleks temalt oodanud” sisaldab negatsiooni.",
  },
  "ET-SENT-0098": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Sissepääs keelatud” on mõistetav.",
  },
  "ET-SENT-0099": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Kahtlemata” vastab „Ohne Zweifel” kaudse negatsiooniga.",
  },
  "ET-SENT-0100": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Head reisi!” on mõistetav.",
  },
  "ET-SENT-0101": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära vaata aknast välja” sisaldab negatsiooni.",
  },
  "ET-SENT-0102": {
    status: "LABOT",
    ownerNew: "Tõuse üles, Hanna, kell heliseb!",
    note: "Eesti keeles heliseb kell.",
  },
  "ET-SENT-0103": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära unusta” sisaldab negatsiooni.",
  },
  "ET-SENT-0104": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "Duplikaattõlge „Mis uudist?” on mõistetav.",
  },
  "ET-SENT-0105": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära unusta hommikusööki” sisaldab negatsiooni.",
  },
  "ET-SENT-0106": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära unusta salvrätte” sisaldab negatsiooni.",
  },
  "ET-SENT-0107": {
    status: "LABOT",
    ownerNew: "Aitäh, mul juba on.",
    note: "Elliptilises vastuses „juba” enne verbi.",
  },
  "ET-SENT-0108": {
    status: "LABOT",
    ownerNew: "Aitäh, kõht on juba täis.",
    note: "„Satt” = täis kõht.",
  },
  "ET-SENT-0109": {
    status: "LABOT",
    ownerNew: "Palun, võta ise!",
    note: "„Bedien dich” = võta ise.",
  },
  "ET-SENT-0110": {
    status: "LABOT",
    ownerNew: "Kui ma töölt tulen, olen alati väsinud.",
    note: "„Von der Arbeit” = töölt.",
  },
  "ET-SENT-0111": {
    status: "LABOT",
    ownerNew: "Äikesetorm läheb üle.",
    note: "„Zieht vorüber” = läheb üle.",
  },
  "ET-SENT-0112": {
    status: "LABOT",
    ownerNew: "Talv on käes, on lund sadanud.",
    note: "Eemalda põhjendamata „öösel”.",
  },
  "ET-SENT-0113": {
    status: "LABOT",
    ownerNew: "Väljas on kiilasjää, ole ettevaatlik!",
    note: "„Glatteis” = kiilasjää.",
  },
  "ET-SENT-0114": {
    status: "LABOT",
    ownerNew: "Tulen sulle jalutama järele.",
    note: "Olevik ja loomulik vaste „abholen”.",
  },
  "ET-SENT-0115": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„ma ei jõua sulle järele” sisaldab negatsiooni.",
  },
  "ET-SENT-0116": {
    status: "LABOT",
    ownerNew: "Olen selles piirkonnas esimest korda.",
    note: "Säilita „selles piirkonnas”.",
  },
  "ET-SENT-0117": {
    status: "LABOT",
    ownerNew: "Kuidas ma kõige kiiremini jaama jõuan?",
    note: "„Am schnellsten” = kõige kiiremini.",
  },
  "ET-SENT-0118": {
    status: "LABOT",
    ownerNew: "Kas sõidad tööasjus või eraviisiliselt?",
    note: "„Privat” = eraviisiliselt.",
  },
  "ET-SENT-0119": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära unusta passi” sisaldab negatsiooni.",
  },
  "ET-SENT-0120": {
    status: "LABOT",
    ownerNew: "Sõida palun jaama!",
    note: "„Fahr” = sõida, mitte vii.",
  },
  "ET-SENT-0121": {
    status: "LABOT",
    ownerNew: "Üks pilet Kölni, palun.",
    note: "Sihtkoha vorm „Kölni”.",
  },
  "ET-SENT-0122": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ei, siin ei istu keegi” sisaldab negatsiooni.",
  },
  "ET-SENT-0123": {
    status: "LABOT",
    ownerNew: "Pane mu käsipagas pagasivõrku.",
    note: "„Gepäcknetz” = pagasivõrk.",
  },
  "ET-SENT-0124": {
    status: "LABOT",
    ownerNew: "Tuba kahe voodiga, palun.",
    note: "Täpsustab kahe voodi olemasolu.",
  },
  "ET-SENT-0125": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära lase kohvil jahtuda” sisaldab negatsiooni.",
  },
  "ET-SENT-0126": {
    status: "LABOT",
    ownerNew: "Tuleta mulle homme meelde, et ma kirjutaksin!",
    note: "Eemalda lisatud „kirja”.",
  },
  "ET-SENT-0127": {
    status: "LABOT",
    ownerNew: "Palun pange see kiri postkasti!",
    note: "Viisakas teie-vorm „pange”.",
  },
  "ET-SENT-0128": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„mitte liiga lühikeseks” sisaldab negatsiooni.",
  },
  "ET-SENT-0129": {
    status: "LABOT",
    ownerNew: "Tagant palun mitte liiga lühikeseks.",
    note: "Juuste kontekstis „tagant”.",
  },
  "ET-SENT-0130": {
    status: "LABOT",
    ownerNew: "See algab kell pool kaheksa.",
    note: "Kellaaja väljend vajab „kell”.",
  },
  "ET-SENT-0131": {
    status: "LABOT",
    ownerNew: "Kõik kohad on välja müüdud.",
    note: "„Plätze” = kohad, mitte piletid.",
  },
  "ET-SENT-0132": {
    status: "LABOT",
    ownerNew: "Kas ma tohin sind tantsule kutsuda?",
    note: "Säilita objekt „sind”.",
  },
  "ET-SENT-0133": {
    status: "LABOT",
    ownerNew: "Kas oled kõik juba sisse pakkinud?",
    note: "Aktiivne subjekt „oled”.",
  },
  "ET-SENT-0134": {
    status: "LABOT",
    ownerNew: "Olen oma sõbraga kontaktis.",
    note: "„In Kontakt” = kontaktis, mitte ainult kirjavahetuses.",
  },
  "ET-SENT-0135": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Ära uju liiga kaugele” sisaldab negatsiooni.",
  },
  "ET-SENT-0136": {
    status: "LABOT",
    ownerNew: "Ta on aga üsna palju muutunud.",
    note: "„aber” = aga; „recht” = üsna palju.",
  },
  "ET-SENT-0137": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Tunnen end halvasti” vastab „fühl mich nicht wohl”.",
  },
  "ET-SENT-0138": {
    status: "LABOT",
    ownerNew: "Heida voodisse!",
    note: "Eemalda tarbetud „pikali”.",
  },
  "ET-SENT-0139": {
    status: "LABOT",
    ownerNew: "Mul valutavad hambad.",
    note: "Saksa mitmus „Zahnschmerzen”.",
  },
  "ET-SENT-0140": {
    status: "LABOT",
    ownerNew: "Tahan oma korterit uuesti sisustada.",
    note: "Säilita „meine Wohnung”.",
  },
  "ET-SENT-0141": {
    status: "LABOT",
    ownerNew: "Olen juba aasta aega saksa keele tunde võtnud.",
    note: "Kestuse loomulik väljendus.",
  },
  "ET-SENT-0142": {
    status: "LABOT",
    ownerNew: "Kahjuks on raamat välja müüdud.",
    note: "„Välja müüdud” on loomulik vaste.",
  },
  "ET-SENT-0143": {
    status: "LABOT",
    ownerNew: "Kaaluge mulle palun kaks kilogrammi.",
    note: "Lisa „mulle”.",
  },
  "ET-SENT-0144": {
    status: "LABOT",
    ownerNew: "Andke mulle kaks kilogrammi hakkliha.",
    note: "Lisa „mulle”.",
  },
  "ET-SENT-0145": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„mitte liiga kõva” sisaldab negatsiooni.",
  },
  "ET-SENT-0146": {
    status: "LABOT",
    ownerNew: "Üks leivapäts, palun, aga mitte liiga krõbe.",
    note: "„Knusprig” = krõbe.",
  },
  "ET-SENT-0147": {
    status: "LABOT",
    ownerNew: "Andke mulle palun kilogramm riisi.",
    note: "Lisa „mulle”.",
  },
  "ET-SENT-0148": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„seekord mitte” sisaldab negatsiooni.",
  },
  "ET-SENT-0149": {
    status: "LABOT",
    ownerNew: "Kas te saate mööbli minu korterisse toimetada?",
    note: "Säilita „meine Wohnung”.",
  },
  "ET-SENT-0150": {
    status: "LABOT",
    ownerNew: "Lõigake mulle palun kolm meetrit.",
    note: "Lisa „mulle”.",
  },
  "ET-SENT-0151": {
    status: "LABOT",
    ownerNew: "Kas teil on ka teisi mustreid?",
    note: "„Muster” = muster.",
  },
  "ET-SENT-0152": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Mulle ei meeldi” sisaldab negatsiooni.",
  },
  "ET-SENT-0153": {
    status: "LABOT",
    ownerNew: "Andke mulle heledam.",
    note: "Lisa „mulle”.",
  },
  "ET-SENT-0154": {
    status: "LABOT",
    ownerNew: "Nii, nüüd sobivad need hästi.",
    note: "Mitmus ja verb ühilduvus.",
  },
  "ET-SENT-0155": {
    status: "LABOT",
    ownerNew: "Millal ta valmis saab?",
    note: "Säilita asesõna „er”.",
  },
  "ET-SENT-0156": {
    status: "LABOT",
    ownerNew: "Millal kleit valmis saab?",
    note: "Loomulik sõnajärg ja „valmis saab”.",
  },
  "ET-SENT-0157": {
    status: "LABOT",
    ownerNew: "Millal ma saan kingad kätte?",
    note: "„Abholen” = kätte saama.",
  },
  "ET-SENT-0158": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Minu käekell ei tööta” sisaldab negatsiooni.",
  },
  "ET-SENT-0159": {
    status: "LABOT",
    ownerNew: "Palun pakkige see sisse ja saatke see mulle koju.",
    note: "Lisa objektid ja „mulle”.",
  },
  "ET-SENT-0160": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„ärge liikuge” sisaldab negatsiooni.",
  },
  "ET-SENT-0161": {
    status: "LABOT",
    ownerNew: "Millal ma saan proovipilti näha?",
    note: "„Probebild” = proovipilt.",
  },
  "ET-SENT-0162": {
    status: "LABOT",
    ownerNew: "Millal fotod valmis saavad?",
    note: "Loomulik sõnajärg.",
  },
  "ET-SENT-0163": {
    status: "LABOT",
    ownerNew: "Näidake ilusaid kingiideid.",
    note: "Liitsõna „kingiideid”.",
  },
  "ET-SENT-0164": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„See ei ole ehtne kivi” sisaldab negatsiooni.",
  },
  "ET-SENT-0165": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Hind ei ole kõrge” sisaldab negatsiooni.",
  },
  "ET-SENT-0166": {
    status: "FALSE_POSITIVE",
    ownerNew: "",
    note: "„Kui mu naisele ei meeldi” sisaldab negatsiooni.",
  },
};

function main() {
  const audit = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const findings = audit.findings || [];
  const sentences = loadSentences();

  if (findings.length !== 166) {
    console.error(`Expected 166 findings, got ${findings.length}`);
    process.exit(1);
  }

  const resolved = [];
  const counts = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, PENDING: 0 };
  const errors = [];

  for (const f of findings) {
    const d = DECISIONS[f.id];
    if (!d) {
      errors.push(`Missing decision for ${f.id}`);
      continue;
    }

    const currentEt = resolveSentenceCurrent(f.cardId, "lv", sentences);
    if (!currentEt && f.currentEt) {
      errors.push(`Missing production lv for ${f.id} (${f.cardId})`);
    }

    if (d.status === "LABOT") {
      if (!d.ownerNew || d.ownerNew.includes("(")) {
        errors.push(`LABOT ${f.id} missing real ownerNew`);
      }
      if (d.ownerNew === f.currentEt) {
        errors.push(`LABOT ${f.id} ownerNew equals current`);
      }
    } else {
      if (d.ownerNew) {
        errors.push(`Non-LABOT ${f.id} should have empty ownerNew`);
      }
    }

    counts[d.status] = (counts[d.status] || 0) + 1;

    resolved.push({
      id: f.id,
      cardId: f.cardId,
      deContext: f.deContext,
      currentEt: currentEt || f.currentEt,
      status: d.status,
      ownerNew: d.ownerNew,
      note: d.note,
    });
  }

  if (counts.PENDING > 0) {
    errors.push(`PENDING count: ${counts.PENDING}`);
  }

  if (errors.length) {
    console.error("Validation errors:");
    errors.forEach((e) => console.error(e));
    process.exit(1);
  }

  const out = {
    generatedAt: new Date().toISOString(),
    source: "reports/temp/et-sentences-merged-audit.json",
    productionFile: "data/et/sentences.js",
    meta: {
      totalFindings: resolved.length,
      PENDING: counts.PENDING || 0,
      LABOT: counts.LABOT || 0,
      NELABOT: counts.NELABOT || 0,
      FALSE_POSITIVE: counts.FALSE_POSITIVE || 0,
      NEEDS_SOURCE_REVIEW: counts.NEEDS_SOURCE_REVIEW || 0,
    },
    findings: resolved,
  };

  fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
  console.log(JSON.stringify(out.meta, null, 2));
  console.log(`Written ${OUT}`);
}

main();
