HOW-TO: šo versiju A saņem Anthropic.
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
| cs-003752 | durchaus | Zcela | (1) pavisam (2) pilnīgi (3) gluži | — | — |
| cs-003936 | die Konsequenz | Posloupnost | (1) secība (2) secinājums (3) sekas (4) konsekvence | — | — |
| cs-002842 | anpassen | Upravit | (1) pielāgot | — | — |
| cs-000972 | gutmachen | Napravit | (1) izlabot | — | — |
| cs-003655 | austreten | Pronajmout | (1) nomīt (2) izstāties (3) izmīt | — | — |
| cs-005182 | quellen | Vzdálit se | (1) iztecēt (2) izmirkt (3) piemirkt (4) piebriest (5) izplūst | — | — |
| cs-001257 | die Muße | Volný čas | (1) brīvs laiks (2) vaļas brīdis | — | — |
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
| cs-005185 | befallen | Odpadnout | (1) uznākt (2) uzbrukt | — | — |
| cs-004262 | rezeptpflichtig | Na předpis | (1) pēc receptes | — | — |
| cs-003047 | übernachten | Strávit noc | (1) pārnakšņot | — | — |
| cs-000672 | verhören | [Vy]slechnout | (1) [no]pratināt | — | — |
| cs-001220 | durchkreuzen | Překazit | (1) pārvilkt krustu (2) šķērsot (3) izjaukt (4) pārsvītrot | — | — |
| cs-000364 | schlagfertig | Vynalézavý | (1) atjautīgs (2) asprātīgs | — | — |
| cs-005178 | der Großvater | Dědeček | (1) vectētiņš | — | — |
| cs-004276 | verpfänden | Dát do zástavy | (1) ieķīlāt | — | — |
| cs-003724 | sich verteidigen | Bránit se | (1) aizstāvēties | — | — |
| cs-000885 | hartnäckig | Vytrvalý | (1) stūrgalvīgs (2) neatlaidīgs | — | — |
| cs-002294 | der Durchbruch | Protržení hráze | (1) izlaušanās (2) pārrāvums dambī | — | — |
| cs-002868 | der Gummischuh | Galoše | (1) galoša | — | — |
| cs-001680 | härten | Ztvrdnout | (1) rūdīt | — | — |
| cs-005176 | groß | Velký | (1) liels | Das Haus ist groß. | māja ir liela. |
| cs-004721 | das Lid | Oční víčko | (1) plakstiņš | — | — |
| cs-003575 | der Umsturz | Puč | (1) pučs | — | — |
| cs-003728 | durchschauen | Odhalit | (1) redzēt cauri (2) atklāt | — | — |
| cs-002073 | das Bäckerhandwerk | Pekařské řemeslo | (1) maiznieka amats | — | — |
| cs-003600 | die Längeneinheit | Jednotka délky | (1) garuma mērvienība | Meter ist eine Längeneinheit. | metrs ir garuma mērvienība. |
| cs-002237 | willkommen | Vítejte | (1) laipni gaidīts | — | — |
| cs-004637 | der Bügel | Ramínko na šaty | (1) stīpa (2) drēbju pakaramais (3) kāpslis (4) rokturis | — | — |
| cs-002616 | der Apparat | Zařízení | (1) aparāts | — | — |
| cs-001872 | ausspannen | odpočívat | (1) atņemt partneri (2) atpūsties (3) izjūgt | — | — |
| cs-001388 | die Ohnmacht | Bezvědomí | (1) bezsamaņa | Sie fiel plötzlich in Ohnmacht. | viņa pēkšņi noģība. |
| cs-001597 | bekannt machen | Představit | (1) iepazīstināt | — | — |
| cs-002725 | die Hochzeitsreise | Líbánky | (1) kāzu ceļojums | — | — |
| cs-003414 | der Grimm | Zuřivost | (1) niknums (2) piktums (3) lielas dusmas | — | — |
| cs-004180 | rau | Neopracovaný | (1) raupjš (2) rupjš (3) aizsmacis (4) skarbs (5) nelaipns (6) neapstrādāts (7) nelīdzens | — | — |
| cs-005179 | grün | Zelený | (1) zaļš | — | — |
| cs-000383 | unbebaut | Neobdělaný o půdě | (1) neapstrādāts par zemi (2) neapbūvēts | — | — |
| cs-001035 | gebrechlich | Sešlý | (1) sanīcis (2) gaudens (3) kroplīgs (4) pilns vainām (5) vārgs | — | — |
| cs-001686 | die Deutung | Interpretace | (1) iztulkošana (2) izskaidrojums (3) iztulkojums (4) izskaidrošana | — | — |
| cs-003873 | sich fühlen | Cítit se | (1) justies | — | — |
| cs-004032 | die Rattenfalle | Past na krysy | (1) žurku slazds | — | — |
| cs-001032 | die Darstellung | Obrys | (1) attēlojums (2) izklāsts (3) tēlojums | — | — |
| cs-002780 | bewandert | Kompetentní | (1) lietpratīgs (2) kompetents | — | — |
| cs-003192 | vierzigste | Čtyřicátý | (1) četrdesmitais | — | — |
| cs-001027 | der Landwirt | Farmář | (1) lauksaimnieks | — | — |
| cs-001342 | übersiedeln | Přestěhovat se na jiné místo | (1) pārcelties uz dzīvi citur (2) mainīt dzīvesvietu | — | — |
| cs-005184 | das Eingemachte | Omezení dovozu | (1) ievārījums (2) konservēti augļi | — | — |
| cs-003823 | außerdem | Navíc | (1) turklāt | — | — |
| cs-001952 | der Spuk | Přízrak | (1) spoks (2) parādība (3) rēgs | — | — |
| cs-005183 | erleiden | Naspořit | (1) izciest (2) pārciest (3) tikt sakautam (4) ciest | — | — |
| cs-005181 | bergen | Pozdravit | (1) izglābt (2) novākt ražu (3) glābt | — | — |
| cs-000088 | der Blumenkranz | Věnec z květin | (1) ziedu vainags | — | — |
| cs-002056 | dürr | Seschlý | (1) izkaltis (2) nokaltis (3) kalsns (4) sauss | — | — |
| cs-003887 | das Gutachten | Odborné stanovisko | (1) atsauksme (2) lietpratēja atzinums | — | — |
| cs-001422 | die Futterpflanze | Krmná rostlina | (1) lopbarības augs | — | — |
| cs-002960 | der Plastikbecher | Plastový kelímek | (1) plastmasas glāze | — | — |
| cs-003671 | der Jahrgang | Rok vydání | (1) izdošanas gads | Dieser Wein ist Jahrgang 2018. | šis vīns ir 2018. gada raža. |
| cs-005186 | kurzfristig | Ve stejnou dobu | (1) īstermiņa (2) uz īsu brīdi | — | — |
| cs-002516 | das Raucherabteil | Kuřácké kupé | (1) smēķētāju nodalījums | — | — |
| cs-002970 | mündig | Plnoletý | (1) pilngadīgs | — | — |
| cs-001759 | sich erkälten | Nastydnout | (1) saaukstēties | — | — |
| cs-004425 | selbsttätig | Automatický | (1) automātisks | — | — |
| cs-001853 | die Energieerzeugung | Výroba energie | (1) enerģijas ražošana | — | — |
| cs-005177 | die Großmutter | Babička | (1) vecmāmiņa | — | — |
| cs-001249 | das Fließband | Dopravník | (1) konveijers | — | — |
| cs-001169 | die Berufserfahrung | Pracovní zkušenosti | (1) darba pieredze | — | — |
| cs-002038 | die Geldeinlage | Vklad | (1) naudas noguldījums (2) depozīts | — | — |
| cs-001408 | fälschlich | Scestný | (1) maldīgi (2) kļūdaini | — | — |
| cs-003537 | der Frosteinbruch | Nástup mrazů | (1) sala iestāšanās | — | — |
| cs-000397 | trotzdem | Stejně | (1) tomēr (2) tik un tā | Ich bin müde. Trotzdem gehe ich spazieren. | Es esmu noguris. Tomēr es eju pastaigā. |
| cs-001471 | die Selbstkosten | Nákladová cena | (1) pašizmaksa | — | — |
| cs-002291 | entflammen | Nadchnout | (1) iededzināt (2) sajūsmināt (3) aizdegties (4) aizdedzināt | — | — |
| cs-002799 | die gesetzgebende Gewalt | Zákonodárnou moc | (1) likumdevēja vara | — | — |
| cs-000269 | die Kost | Výživa | (1) uzturs | — | — |
| cs-003037 | gefüllt | Naplněný | (1) pildīts | — | — |
| cs-001490 | der Gewerkschaftsbeitrag | Odborový příspěvek | (1) arodbiedrības biedru maksa | — | — |
| cs-000046 | der Ursprung | [Pra]počátek | (1) cilme (2) [pirm]sākums (3) izcelšanās | — | — |
| cs-001079 | überlassen | Dovolit vybrat | (1) rīcībā (2) atļaut izvēlēties (3) atstāt kāda ziņā | — | — |
| cs-004706 | mehren | Rozmnožovat | (1) vairot | — | — |
| cs-003204 | der Nachruf | Nekrolog | (1) nekrologs | — | — |
| cs-003889 | erhaben | Velkolepý | (1) izliekts (2) dižs (3) dižens (4) cēls (5) cildens (6) izcils (7) reljefs | — | — |
| cs-005180 | die Gruppe | Skupina | (1) grupa | — | — |
| cs-002307 | die Volksbefragung | Referendum | (1) visas tautas aptauja (2) referendums | — | — |
| cs-001749 | abspielen | Hrát | (1) atskaņot | — | — |
| cs-003208 | pikiert | Pobouřený | (1) aizskarts (2) sašutis (3) aizvainots | — | — |
| cs-004097 | das Leid | Utrpení | (1) ciešanas (2) bēdas | — | — |
| cs-001313 | einmachen | Konzervovat | (1) iemarinēt (2) ievārīt (3) iekonservēt | — | — |
| cs-003743 | die Abrüstungsverhandlungen | Rozhovory o odzbrojení | (1) atbruņošanās sarunas | — | — |
| cs-004208 | pflegen | Udržovat | (1) kopt | Sie pflegt ihre Mutter zu Hause. | viņa mājās kopj savu māti. |
| cs-002392 | die Webseite | Webová stránka | (1) interneta lappuse | — | — |
