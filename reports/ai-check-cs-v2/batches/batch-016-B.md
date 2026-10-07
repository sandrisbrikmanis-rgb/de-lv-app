HOW-TO: šo versiju B saņem Gemini.
Saglabā atbildi kā CSV ar kolonnām id,meaning,confidence.
Anthropic -> ai-anthropic/batch-016.csv (versija A).
Gemini -> ai-gemini/batch-016.csv (versija B).
ChatGPT -> ai-chatgpt/batch-016.csv (versija C).
Katru AI lieto jaunā sesijā. Otra AI atbildi nerāda. Kontroļu atslēgu partijā neliek.
Ja divi AI nesakrīt vai kāds saka NONE vai UNSURE, trešajam AI dod tikai tās rindas.

Tu palīdzi pārbaudīt vārdu tulkojumus no vācu valodas uz čehu mācību lietotnei. Katrai rindai tu saņem: id, vācu vārdu (ar artikulu, ja ir), vienu čehu vārdu un latviešu
nozīmju sarakstu ar numuriem. Uzdevums: noteikt, kurai latviešu nozīmei (numuram) čehu vārds ir pareizs tulkojums vācu vārdam. Ja nevienai, raksti NONE. Ja neesi drošs, raksti UNSURE.
Noteikumi: 1) Seko latviešu nozīmēm, nevis vācu vārda citām nozīmēm. 2) Pārbaudi, vai čehu vārds ir īsts, mūsdienās lietots vārds, nevis izdomāts, burtisks kalks, saīsinājums vai svešvalodas
fragments. 3) Ignorē lielo vai mazo sākuma burtu, dokonāto vai nedokonāto veidu un atgriezenisko 'se/si'. 4) NEIERAKSTI un neieteic jaunu tulkojumu. Tikai numurs, NONE vai UNSURE.
Atbildi tikai kā CSV ar kolonnām id,meaning,confidence (confidence: high, medium vai low). Bez paskaidrojumiem.
Ja piemēra teikums neizšķir nozīmi, atbildi UNSURE.

| id | vācu vārds (ar artikulu) | čehu vārds | LV nozīmes (1) … (2) … | vācu piemērs | LV piemērs |
|---|---|---|---|---|---|
| cs-003752 | durchaus | Zcela | (1) pilnīgi (2) pavisam (3) gluži | — | — |
| cs-003936 | die Konsequenz | Posloupnost | (1) sekas (2) secinājums (3) secība (4) konsekvence | — | — |
| cs-002842 | anpassen | Upravit | (1) pielāgot | — | — |
| cs-000972 | gutmachen | Napravit | (1) izlabot | — | — |
| cs-003655 | austreten | Pronajmout | (1) izstāties (2) nomīt (3) izmīt | — | — |
| cs-005182 | quellen | Vzdálit se | (1) piebriest (2) piemirkt (3) izmirkt (4) iztecēt (5) izplūst | — | — |
| cs-001257 | die Muße | Volný čas | (1) vaļas brīdis (2) brīvs laiks | — | — |
| cs-001429 | der Schadenersatz | Hmotná náhrada za škodu | (1) materiāla kompensācija par zaudējumiem | — | — |
| cs-000171 | listig | Mazaný | (1) viltīgs | — | — |
| cs-002734 | fertig | Připraven | (1) gatavs | — | — |
| cs-004455 | erhalten | Přijímat | (1) saņemt | Ich habe Ihre Nachricht erhalten. | es saņēmu jūsu ziņu. |
| cs-003099 | kleiden | Obléknout se | (1) ģērbt | Sie kleidet das Kind. | viņa apģērbj bērnu. |
| cs-001549 | das Tomatenmark | Rajčatový protlak | (1) tomātu biezenis | — | — |
| cs-000513 | streichen | Vymazat | (1) svītrot | Wir streichen diesen Punkt von der Liste. | mēs svītrojam šo punktu no saraksta. |
| cs-005175 | grau | Šedý | (1) pelēks | — | — |
| cs-003003 | die Teilzahlung | Platba ve splátkách | (1) nomaksa pa daļām | — | — |
| cs-002982 | blamieren | Ztrapnit | (1) apkaunot | — | — |
| cs-005185 | befallen | Odpadnout | (1) uzbrukt (2) uznākt | — | — |
| cs-004262 | rezeptpflichtig | Na předpis | (1) pēc receptes | — | — |
| cs-003047 | übernachten | Strávit noc | (1) pārnakšņot | — | — |
| cs-000672 | verhören | [Vy]slechnout | (1) [no]pratināt | — | — |
| cs-001220 | durchkreuzen | Překazit | (1) izjaukt (2) šķērsot (3) pārvilkt krustu (4) pārsvītrot | — | — |
| cs-000364 | schlagfertig | Vynalézavý | (1) asprātīgs (2) atjautīgs | — | — |
| cs-005178 | der Großvater | Dědeček | (1) vectētiņš | — | — |
| cs-004276 | verpfänden | Dát do zástavy | (1) ieķīlāt | — | — |
| cs-003724 | sich verteidigen | Bránit se | (1) aizstāvēties | — | — |
| cs-000885 | hartnäckig | Vytrvalý | (1) neatlaidīgs (2) stūrgalvīgs | — | — |
| cs-002294 | der Durchbruch | Protržení hráze | (1) pārrāvums dambī (2) izlaušanās | — | — |
| cs-002868 | der Gummischuh | Galoše | (1) galoša | — | — |
| cs-001680 | härten | Ztvrdnout | (1) rūdīt | — | — |
| cs-005176 | groß | Velký | (1) liels | Das Haus ist groß. | māja ir liela. |
| cs-004721 | das Lid | Oční víčko | (1) plakstiņš | — | — |
| cs-003575 | der Umsturz | Puč | (1) pučs | — | — |
| cs-003728 | durchschauen | Odhalit | (1) atklāt (2) redzēt cauri | — | — |
| cs-002073 | das Bäckerhandwerk | Pekařské řemeslo | (1) maiznieka amats | — | — |
| cs-003600 | die Längeneinheit | Jednotka délky | (1) garuma mērvienība | Meter ist eine Längeneinheit. | metrs ir garuma mērvienība. |
| cs-002237 | willkommen | Vítejte | (1) laipni gaidīts | — | — |
| cs-004637 | der Bügel | Ramínko na šaty | (1) kāpslis (2) drēbju pakaramais (3) stīpa (4) rokturis | — | — |
| cs-002616 | der Apparat | Zařízení | (1) aparāts | — | — |
| cs-001872 | ausspannen | odpočívat | (1) atpūsties (2) atņemt partneri (3) izjūgt | — | — |
| cs-001388 | die Ohnmacht | Bezvědomí | (1) bezsamaņa | Sie fiel plötzlich in Ohnmacht. | viņa pēkšņi noģība. |
| cs-001597 | bekannt machen | Představit | (1) iepazīstināt | — | — |
| cs-002725 | die Hochzeitsreise | Líbánky | (1) kāzu ceļojums | — | — |
| cs-003414 | der Grimm | Zuřivost | (1) piktums (2) niknums (3) lielas dusmas | — | — |
| cs-004180 | rau | Neopracovaný | (1) neapstrādāts (2) nelaipns (3) skarbs (4) aizsmacis (5) rupjš (6) raupjš (7) nelīdzens | — | — |
| cs-005179 | grün | Zelený | (1) zaļš | — | — |
| cs-000383 | unbebaut | Neobdělaný o půdě | (1) neapbūvēts (2) neapstrādāts par zemi | — | — |
| cs-001035 | gebrechlich | Sešlý | (1) pilns vainām (2) kroplīgs (3) gaudens (4) sanīcis (5) vārgs | — | — |
| cs-001686 | die Deutung | Interpretace | (1) iztulkojums (2) izskaidrojums (3) iztulkošana (4) izskaidrošana | — | — |
| cs-003873 | sich fühlen | Cítit se | (1) justies | — | — |
| cs-004032 | die Rattenfalle | Past na krysy | (1) žurku slazds | — | — |
| cs-001032 | die Darstellung | Obrys | (1) izklāsts (2) attēlojums (3) tēlojums | — | — |
| cs-002780 | bewandert | Kompetentní | (1) kompetents (2) lietpratīgs | — | — |
| cs-003192 | vierzigste | Čtyřicátý | (1) četrdesmitais | — | — |
| cs-001027 | der Landwirt | Farmář | (1) lauksaimnieks | — | — |
| cs-001342 | übersiedeln | Přestěhovat se na jiné místo | (1) mainīt dzīvesvietu (2) pārcelties uz dzīvi citur | — | — |
| cs-005184 | das Eingemachte | Omezení dovozu | (1) konservēti augļi (2) ievārījums | — | — |
| cs-003823 | außerdem | Navíc | (1) turklāt | — | — |
| cs-001952 | der Spuk | Přízrak | (1) parādība (2) spoks (3) rēgs | — | — |
| cs-005183 | erleiden | Naspořit | (1) tikt sakautam (2) pārciest (3) izciest (4) ciest | — | — |
| cs-005181 | bergen | Pozdravit | (1) novākt ražu (2) izglābt (3) glābt | — | — |
| cs-000088 | der Blumenkranz | Věnec z květin | (1) ziedu vainags | — | — |
| cs-002056 | dürr | Seschlý | (1) kalsns (2) nokaltis (3) izkaltis (4) sauss | — | — |
| cs-003887 | das Gutachten | Odborné stanovisko | (1) lietpratēja atzinums (2) atsauksme | — | — |
| cs-001422 | die Futterpflanze | Krmná rostlina | (1) lopbarības augs | — | — |
| cs-002960 | der Plastikbecher | Plastový kelímek | (1) plastmasas glāze | — | — |
| cs-003671 | der Jahrgang | Rok vydání | (1) izdošanas gads | Dieser Wein ist Jahrgang 2018. | šis vīns ir 2018. gada raža. |
| cs-005186 | kurzfristig | Ve stejnou dobu | (1) uz īsu brīdi (2) īstermiņa | — | — |
| cs-002516 | das Raucherabteil | Kuřácké kupé | (1) smēķētāju nodalījums | — | — |
| cs-002970 | mündig | Plnoletý | (1) pilngadīgs | — | — |
| cs-001759 | sich erkälten | Nastydnout | (1) saaukstēties | — | — |
| cs-004425 | selbsttätig | Automatický | (1) automātisks | — | — |
| cs-001853 | die Energieerzeugung | Výroba energie | (1) enerģijas ražošana | — | — |
| cs-005177 | die Großmutter | Babička | (1) vecmāmiņa | — | — |
| cs-001249 | das Fließband | Dopravník | (1) konveijers | — | — |
| cs-001169 | die Berufserfahrung | Pracovní zkušenosti | (1) darba pieredze | — | — |
| cs-002038 | die Geldeinlage | Vklad | (1) depozīts (2) naudas noguldījums | — | — |
| cs-001408 | fälschlich | Scestný | (1) kļūdaini (2) maldīgi | — | — |
| cs-003537 | der Frosteinbruch | Nástup mrazů | (1) sala iestāšanās | — | — |
| cs-000397 | trotzdem | Stejně | (1) tik un tā (2) tomēr | Ich bin müde. Trotzdem gehe ich spazieren. | Es esmu noguris. Tomēr es eju pastaigā. |
| cs-001471 | die Selbstkosten | Nákladová cena | (1) pašizmaksa | — | — |
| cs-002291 | entflammen | Nadchnout | (1) aizdegties (2) sajūsmināt (3) iededzināt (4) aizdedzināt | — | — |
| cs-002799 | die gesetzgebende Gewalt | Zákonodárnou moc | (1) likumdevēja vara | — | — |
| cs-000269 | die Kost | Výživa | (1) uzturs | — | — |
| cs-003037 | gefüllt | Naplněný | (1) pildīts | — | — |
| cs-001490 | der Gewerkschaftsbeitrag | Odborový příspěvek | (1) arodbiedrības biedru maksa | — | — |
| cs-000046 | der Ursprung | [Pra]počátek | (1) [pirm]sākums (2) cilme (3) izcelšanās | — | — |
| cs-001079 | überlassen | Dovolit vybrat | (1) atļaut izvēlēties (2) rīcībā (3) atstāt kāda ziņā | — | — |
| cs-004706 | mehren | Rozmnožovat | (1) vairot | — | — |
| cs-003204 | der Nachruf | Nekrolog | (1) nekrologs | — | — |
| cs-003889 | erhaben | Velkolepý | (1) izcils (2) cildens (3) cēls (4) dižens (5) dižs (6) izliekts (7) reljefs | — | — |
| cs-005180 | die Gruppe | Skupina | (1) grupa | — | — |
| cs-002307 | die Volksbefragung | Referendum | (1) referendums (2) visas tautas aptauja | — | — |
| cs-001749 | abspielen | Hrát | (1) atskaņot | — | — |
| cs-003208 | pikiert | Pobouřený | (1) sašutis (2) aizskarts (3) aizvainots | — | — |
| cs-004097 | das Leid | Utrpení | (1) bēdas (2) ciešanas | — | — |
| cs-001313 | einmachen | Konzervovat | (1) ievārīt (2) iemarinēt (3) iekonservēt | — | — |
| cs-003743 | die Abrüstungsverhandlungen | Rozhovory o odzbrojení | (1) atbruņošanās sarunas | — | — |
| cs-004208 | pflegen | Udržovat | (1) kopt | Sie pflegt ihre Mutter zu Hause. | viņa mājās kopj savu māti. |
| cs-002392 | die Webseite | Webová stránka | (1) interneta lappuse | — | — |
