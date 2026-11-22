const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Méfie-t'en !",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Sauf imprévu. • Si tout se passe comme prévu.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Je m'en doute bien !",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Il est donc malade ?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Quoi donc ?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "D'autant plus.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Plus il y en a, mieux c'est.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Tout annonce la pluie.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Cela ne m'avance guère.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Il est retenu pour raisons professionnelles.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Parlez donc !",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Il tonne.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Deux fois plus grand.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "De là-bas.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Le temps presse.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Les soucis l'accablent.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "As-tu étudié le livre à fond ?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Passage interdit !",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "M'accordez-vous cette danse ? • Voulez-vous bien me suivre ?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "J'ai soif.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "C'est exactement ce que je veux dire.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Cela n'a aucune importance.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Que voulez-vous au juste ?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Cette affaire est-elle urgente ?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Très urgent !",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Je suis pressé.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Tu t'imagines simplement que tu es malade.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Qu'est-ce qui te prend ? • Qu'est-ce qui te vient à l'esprit ?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Il était une fois.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Montez, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Entrez !",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Certaines choses m'y ont plu.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "C'est recommandé.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Cette bouteille contient du vinaigre.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Excusez-moi, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Soit... soit...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Qui était le premier ?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Qui est absent aujourd'hui ?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Qu'est-ce que tu as ?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Comment vous appelez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Qu'est-ce que cela veut dire ?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Approchez-vous, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Allez, parle !",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "en automne",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Mesdames et Messieurs !",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "à partir d'aujourd'hui",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "ce matin",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "cette nuit",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Au secours !",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "J'apprends l'allemand tous les jours.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Peux-tu répéter, s'il te plaît ?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Nous nous retrouvons à la gare.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Je suis en partie d'accord avec toi.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Cette décision a des conséquences considérables.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Il faudrait prendre en compte plusieurs points de vue.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Pourriez-vous expliquer cela plus en détail ?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "En ce qui me concerne,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Quel âge avez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "J'ai vingt ans.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "À partir d'aujourd'hui.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Désormais.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Il n'y a pas d'autre moyen.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Appelez-moi.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Éteignez la radio, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Fais attention à la circulation, s'il te plaît.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Tu dois faire attention à cela.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Aujourd'hui, je fais autrement.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Nous attendons le bus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Il vit seul.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "J'ai terminé ma formation. • J'ai terminé mes études.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "J'attends que la pluie cesse.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Il travaille au service des ventes.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Je suis allergique aux chats.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "D'un autre côté, je le comprends.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "J'ai analysé la situation.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Elle a accepté ma proposition.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Je voudrais analyser cela plus en détail.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Je voudrais modifier le contrat.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Il change sans cesse d'avis.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Nous avons déjà eu des problèmes similaires auparavant.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Aucune idée !",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Arrête de te plaindre.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Cette robe est d'une élégance classique.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "J'aime écouter de la musique d'accordéon.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Peux-tu cliquer sur l'appareil ?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Ouvre le fichier et clique dessus, s'il te plaît.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "J'ai eu un accident.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Nous allons à la gare à pied.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Allume la télévision, s'il te plaît.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mon ordinateur s'est bloqué.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Le week-end, je vais à la pêche.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "J'ai manqué l'appel.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Peux-tu m'appeler plus tard ?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Accepte ma proposition, s'il te plaît.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "J'accepte ton offre.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Il a accepté l'invitation.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "J'ai peur des araignées.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Pas d'inquiétude, tout ira bien.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Être bien accueilli. • Trouver un écho.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Cela dépend.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "À cette occasion.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Supposons que...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Qu'est-ce que tu as fait là ?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Jusqu'au bout.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Tu n'as pas l'air de me croire.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "À mon avis...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne fais pas tant d'histoires !",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Se mettre au travail.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Être à bout de souffle.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Bon appétit !",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "D'une seule traite.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "En tout cas. • Sans aucun doute.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Tout à coup, tout est devenu silencieux.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Ouvre la porte, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Il a contracté le prêt.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Nous devons ranger aujourd'hui.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "J'arrête maintenant.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Il est déjà levé.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Nous devons reporter la réunion.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Elle m'a énervé.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Tout à coup.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Sur-le-champ.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Prendre en charge les dégâts.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Ouvrez la porte, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Être assis bien droit.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Il est levé.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Déployer toutes ses forces.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Se donner beaucoup de mal.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Disparais de ma vue !",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "En tête à tête.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Faute de temps.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Pour cette raison.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Tout le monde sauf toi.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Attacher de l'importance aux apparences.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Dans le pire des cas.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Extrêmement important.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Vue sur la mer.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Il a de bonnes chances.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Comment se prononce ce mot ?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Présenter ses condoléances.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Quand le championnat s'est-il disputé ?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Quelle profession exercez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Exercer une influence.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Manger à l'extérieur.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Par chemin de fer.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "En train.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Le plus tôt possible.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "J'ai une peur bleue.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Remettre à plus tard. • Faire traîner les choses.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Payer en espèces.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Extraire du minerai.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Faire des bêtises.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "On m'en a chargé.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Au besoin.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Je le plains.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Que signifie ce mot ?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "À condition que...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Elle a l'air abattue.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Suivre les indications.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Obéir aux ordres.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Envoyer par la poste.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Je suis impatient de savoir.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Au début.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Au début.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Dès le début.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Accompagné.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Avec son accompagnateur.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Il est lent à comprendre.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Garder en mémoire.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "À table.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Avoir toute sa tête.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "De jour.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Loin de là.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Tous les deux.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Un tonnerre d'applaudissements a éclaté.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Recevoir un accueil favorable.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Exprimer ses condoléances.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Voler de ses propres ailes.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Par exemple.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Prêter assistance.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Apporter sa contribution.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Faire la connaissance de quelqu'un.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Lier connaissance.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Petits pains garnis.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Comme vous voudrez.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "À n'importe quel moment.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Garder le silence.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Pour plus de commodité.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Être prêt. • Être disposé.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Secourir les victimes d'un accident.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Faire un rapport.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Toutes les places sont prises.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Tout nouveau, tout beau.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Il possède une maison.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Il a beaucoup de courage.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tant mieux.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Bon rétablissement !",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Avec la meilleure volonté du monde.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Le mieux.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Il y a des doutes.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Sa tâche consiste à...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Transmettre ses amitiés.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Sans aucun doute.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Venir en visite.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Être en visite.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Aller souvent au concert.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Dans quelle école est-il allé ?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Prendre en considération. • Envisager.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Ne pas prendre en considération.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Il tient un hôtel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Tous les deux.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Tout payer.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Concernant quelque chose.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "De rien. • Voilà.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Pardon ?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Il n'y a pas de quoi. • Voici.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "J'ai un service à vous demander.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Jouer de la trompette.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Feuilleter un livre.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Pieds nus.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "À l'œil nu.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Merci du compliment !",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Tout va comme sur des roulettes.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Prière de vérifier.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Le voilà !",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Tout porte à le croire.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Ce n'est pas ma faute.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Je suis contre.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Je n'y vois pas d'inconvénient.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "De la maison.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Déplacer la dame.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Le jour tombe. • Le jour se lève.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Merci beaucoup !",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "De temps en temps.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Tu peux compter là-dessus.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Il n'en sortira rien.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "De sorte que...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Pour qui me prenez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Bas les pattes !",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne te laisse pas abattre !",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "à la maison",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "rentrer à la maison",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "d'origine • par nature",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Toutes mes félicitations !",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Soyez gentil !",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Ayez la bonté !",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Qu'est-ce que tu as ?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Permettez-moi, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Est-il permis de fumer ?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Je dois avouer que...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "hier matin",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "hier soir",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Peu m'importe que...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Que s'est-il passé ?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne fais pas d'histoires ! • Ne fais pas de bêtises !",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Et encore moins...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Allez tout droit !",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Comment allez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Demande-lui à l'occasion si...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "demain matin",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "au printemps",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Quoi de neuf ?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Il ressort de cette lettre que...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Continue !",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Il n'est pas amateur de...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Il s'est avéré que...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Te souviens-tu de moi ? • Penses-tu à moi ?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "en hiver",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "En quelle année êtes-vous né ?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Cela me fait de la peine de voir...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "plus il y en a, mieux c'est",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "jusqu'à présent",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Comment puis-je aller à la gare ?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Viens ici !",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Pourrais-je parler à madame N. ?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Combien cela coûte-t-il ?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Combien de temps dure la représentation ?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Arrête ! • Laisse ça !",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Laisse-moi tranquille !",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Permettez-moi de vous aider !",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Allons-y !",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Alors, comment ça se passe ?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Vive !",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Adieu !",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Qu'est-ce qui se passe ?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Ce travail est épuisant.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Cette journée a été épuisante.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Apprendre l'allemand peut être fatigant.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Il exige une explication.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Le vendeur demande trop d'argent.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "La loi l'exige.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Ce n'est vraiment pas si difficile.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Je n'ai pas du tout d'argent.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Il n'a rien dit du tout.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Le chien est en liberté.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Il se passe beaucoup de choses ici.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Tais-toi donc ! • N'exagère pas !",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Qu'est-ce que tu fais ?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Dis donc !",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Que voulez-vous dire par là ?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Nous venons avec vous.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Je voyage en train.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "mercredi",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "C'est possible.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Je n'aime pas ça.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "lundi",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Bonjour !",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "le matin",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Bonne nuit !",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Prenez place !",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Dernière nouveauté !",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "N'est-ce pas ?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Mais non ! • Surtout pas !",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Enfin !",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "À quoi cela sert-il ?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "À quoi bon tout cela ?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Stationnement interdit !",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ne pas stationner !",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Il a raison.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "De quoi s'agit-il ?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Il n'en est pas question.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Bon voyage !",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Je suis à bout de patience.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "On dit que...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "C'est bon !",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Voilà ! • De rien !",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Combien vous dois-je ?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Agiter avant emploi !",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Regardez !",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Si fort que...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Depuis quand ?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Que dois-je faire ?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "en été",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Non seulement..., mais aussi...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Autre chose ?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Trêve de plaisanteries !",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Quelle heure est-il ?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Route barrée !",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Parlez-vous allemand ?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Au lieu de...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Comment ça va ?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ce chapeau lui va bien.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Bonjour !",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Où nous retrouvons-nous ?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Approchez-vous !",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "L'honnêteté est une vertu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "J'ai beaucoup à faire.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Pas mal !",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Il habite au-dessus de chez moi.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Il en est convaincu.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "C'est l'usage.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Ta montre retarde.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Quelle heure est-il ?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "À huit heures du matin.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "d'autant plus",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "À droite, droite !",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Et comment !",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "à savoir",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Aux dépens de...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Il était assis parmi les spectateurs.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Il n'y a pas de quoi !",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Cela s'est passé comme convenu.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Défense de fumer !",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Vous vous êtes trompé de numéro !",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Entrée interdite !",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Me comprenez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Il n'y connaît rien.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Défendre son point de vue.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Provoquer une dispute.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Beaucoup mieux.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Trop.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Par ouï-dire.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "De temps en temps.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "De profession.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Il est berlinois de naissance.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Il se tient devant la fenêtre.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Avant le lever du soleil.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Il y a quinze jours.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "De joie.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Avant tout.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "D'avance.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "À condition que...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Sous cette réserve.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Exister. • Être disponible.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "La semaine dernière.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Prendre des précautions.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Elle me dit quelque chose.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Il a une prédilection pour la littérature.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Ce matin.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "De face. • Depuis le début.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "En avant.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "D'emblée.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Avoir l'avantage.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Être éveillé.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Se réveiller.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Être de garde.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Pendant un an.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Pendant la guerre.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Parler à un mur.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Ici, les murs ont des oreilles.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Jusqu'à quand ?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Il fait chaud.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Attendre un message.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Que voulez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Quel genre de... ?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "À mi-chemin.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "De cette manière. • Par ce moyen.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Par des moyens pacifiques.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Par égard pour notre amitié.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "En toute justice. • Selon la loi.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Faire mal.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "À Noël.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "De quelle manière ?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Manière.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Sans plus attendre. • Sans difficulté.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Jusqu'à nouvel ordre.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Et ainsi de suite.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Rien de plus.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Quel jour ?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Le monde entier. • Tout le monde.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Dans quelques jours.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Trop peu.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Même si.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Qui vive ? • Qui est là ?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Œuvres complètes de Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Œuvres choisies.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Il mérite que...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Cela vaut deux euros.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Vers l'ouest.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "De l'ouest.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Entrer en compétition.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Faire la course.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Qu'est-ce qu'on parie ?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Quel temps va-t-il faire ?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Compétition de gymnastique.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Contre ma volonté.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protester. • Soulever une objection.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Quel âge a-t-il ?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Combien de temps ?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Au revoir !",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Au revoir !",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Animaux sauvages.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Bienvenue !",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "C'est à toi de jouer.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Il y a un courant d'air.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Assez froid.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Bout de saucisse.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Aller le voir.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Aller à l'école.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Rester à la maison.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "De jour en jour.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Heureusement.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "De l'eau à boire.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "À pied.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "À cheval.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "À vélo.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Il a cessé de pleuvoir.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "J'ai encore beaucoup à faire.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Trop tôt.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Trop grand.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Hausser les épaules.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Boire d'un trait.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Périr.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Prendre pour base.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Pour la première fois.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Fermez la porte, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Il a grossi.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Les jours s'allongent.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Être lié à quelque chose.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "La porte est fermée.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Je ne l'en aurais pas cru capable.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Entrée libre.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Entrée interdite !",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "C'en est trop !",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Devenir répugnant. • Finir par dégoûter.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "À savoir.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Cela ne fait aucun doute.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Sans aucun doute.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Deuxièmement.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Bonne année !",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Joyeux anniversaire !",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Bon voyage !",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Enchanté de faire votre connaissance.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Seriez-vous assez aimable ?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Je vous suis très reconnaissant.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Asseyez-vous, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, viens au tableau, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Ouvrez vos manuels, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Allez au gymnase, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Tu dors encore ?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Dormez-vous encore ?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Il s'est profondément endormi.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Réveille-le, s'il te plaît, il est déjà tard !",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Je suis vraiment désolé !",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Merci beaucoup !",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, commence, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Suivez la lecture, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ne regarde pas par la fenêtre, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, apporte les cahiers, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Retourne à ta place, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Il est sept heures et demie.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "À quelle heure te réveilles-tu d'habitude ?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Je me lève tout de suite.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Lève-toi, Hanna, le réveil sonne ! • Lève-toi, Hanna, on sonne à la porte !",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Laisse-moi dormir encore cinq minutes !",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "N'oublie pas d'aérer la chambre !",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Où est la serviette ?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Je voudrais me brosser les dents.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Avec quoi te brosses-tu les dents ?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Je voudrais m'habiller.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Habille-toi vite, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Couvre-toi davantage, il fait frais dehors.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Bonjour, comment vas-tu ?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Je vais bien, merci.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Quoi de neuf ?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Quel désordre ici !",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Puis-je aider à ranger ?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Que bois-tu le matin, du café ou du thé ?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "D'habitude, je bois une tasse de café le matin.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Je préfère le café noir.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Bonjour, as-tu bien dormi ?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Je suis encore très fatigué.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Veux-tu du café ou du lait ?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Donne-moi un petit pain au fromage, s'il te plaît.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Je dois partir maintenant !",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "N'oublie pas ton petit déjeuner !",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, mets la table, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "N'oublie pas les serviettes !",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "À quelle heure déjeunez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "C'est l'heure de manger.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Qu'est-ce qu'il y a pour le déjeuner aujourd'hui ?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Comment trouves-tu la soupe ?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "À vrai dire, elle est un peu trop salée.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Puis-je te donner un morceau de pain ?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Merci, j'en ai déjà.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "La viande est excellente.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Merci, je n'ai plus faim.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Aujourd'hui, nous avons de la visite.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Es-tu libre ce soir ?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Passe donc déjeuner aujourd'hui !",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Mettons-nous à table.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Je t'en prie, sers-toi !",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Est-ce que ça te dérange que je fume ?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Merci pour l'aimable accueil !",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "À quelle heure vas-tu te coucher ?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Quand je rentre du travail, je suis toujours fatigué.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Il est temps d'aller se coucher.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Il fait beau.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Veux-tu aller te promener avec moi ?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Regarde, il va bientôt pleuvoir.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Prends le parapluie !",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Il pleut.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Je suis déjà tout mouillé.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Crois-tu qu'il va pleuvoir toute la journée ?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Il cesse de pleuvoir.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Le soleil brille de nouveau.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Il fait très chaud.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "On dirait qu'il va pleuvoir.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Il va y avoir un orage d'un instant à l'autre.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "L'orage passe.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Les nuages se dissipent.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Tu vois l'arc-en-ciel ?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "L'hiver est là, il a neigé.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Il neige.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Comme la forêt est belle en hiver !",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "J'ai froid, je gèle.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Il y a du verglas dehors, fais attention !",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Si on allait à la patinoire ?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Mets ta veste, tu pourrais prendre froid.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Il est six heures et demie.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Ma montre avance de cinq minutes.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Réveille-moi demain matin à sept heures !",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Quelle est la date aujourd'hui ?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Aujourd'hui, nous sommes le onze juillet.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Que fais-tu d'habitude le soir ?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Il y a longtemps que nous ne nous sommes pas vus.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Comment vas-tu ?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Excuse-moi, je voudrais discuter de quelque chose avec toi.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Allons nous promener !",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "As-tu envie d'aller au parc avec moi ?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Je viens te chercher pour faire une promenade.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Marche un peu moins vite, s'il te plaît, je n'arrive pas à te suivre !",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "C'est la première fois que je viens dans ce quartier.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Reposons-nous un peu.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Maintenant, nous pouvons rentrer.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "À vrai dire, je suis assez fatigué.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Excuse-moi, où est la station de métro la plus proche ?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Quel est le chemin le plus court ?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Prends la deuxième rue à gauche, puis continue tout droit.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Quel est le chemin le plus rapide pour aller à la gare ?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "J'ai l'intention de partir en voyage demain.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Où veux-tu aller ?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Tu voyages pour affaires ou pour le plaisir ?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn vient avec nous jusqu'à Berlin, puis il part à la mer.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Quand le bateau part-il ?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Dans une demi-heure.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Puis-je encore avoir une cabine ?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "N'oublie pas ton passeport !",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Il est temps de faire la valise.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Le train part à six heures et demie.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Appelle-moi un taxi, s'il te plaît, sinon je vais rater le train !",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Emmène-moi à la gare, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Je dois me dépêcher.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Le guichet est-il déjà ouvert ?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Un billet pour Cologne, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Quand le train part-il ?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Le train va partir.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Dois-je changer à Coblence ?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Oui, tu dois changer là-bas.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Cette place est-elle libre ?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Non, personne n'est assis ici.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Où est le distributeur de billets de quai ?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Mets mon bagage à main dans le filet à bagages.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Puis-je ouvrir la fenêtre ?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Il y a un courant d'air, ferme la fenêtre, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Quelle est la prochaine gare ?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Combien de temps le train s'arrête-t-il ?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Où dois-je changer ?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Le train a du retard.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Cette voiture est réservée aux non-fumeurs.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nous passons la frontière maintenant.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Tu as quelque chose à déclarer ?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Nous sommes arrivés à Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Peux-tu me recommander un bon hôtel ?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Avez-vous des chambres libres ?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Une chambre avec deux lits, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Combien coûte la chambre par nuit ?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Je pars demain. Réveille-moi à sept heures !",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "L'addition, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Où est la bibliothèque municipale ?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Quand le musée est-il ouvert ?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Et si nous allions au musée ?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Nous y allons en bus ou en métro ?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Où est l'arrêt de bus le plus proche ?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "J'ai très faim.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "On va manger ensemble ?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Monsieur, la carte, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Le poisson est-il frais ?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "C'est excellent !",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Monsieur, l'addition, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Je vais au café prendre un café.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Tu veux venir avec moi ?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Une tasse de café au lait, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Plus vite, s'il vous plaît, je suis pressé !",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ne laisse pas refroidir ton café !",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Avez-vous quelque chose de rafraîchissant ?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Une glace, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Ce matin, j'ai reçu une lettre.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Je dois lui écrire tout de suite.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Où est la boîte aux lettres la plus proche ?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Où est la poste ?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Rappelle-moi demain d'écrire !",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Mettez cette lettre dans la boîte aux lettres, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Allô, ici Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Je peux t'appeler plus tard ?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Est-ce que je dois attendre longtemps ?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Coupez-moi les cheveux, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Pas trop court derrière, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Quand commence le spectacle ?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Il commence à sept heures et demie.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Toutes les places sont vendues.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Trois billets, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Nous laissons les vestes au vestiaire.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Vite, s'il vous plaît, le rideau va se lever !",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Le rideau tombe.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Puis-je t'inviter à danser ?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Quand a lieu votre mariage ?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Je cherche un appartement.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Y a-t-il un appartement libre dans cet immeuble ?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Combien coûte le loyer ?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "L'appartement a trois pièces et une cuisine.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Aujourd'hui, nous déménageons.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, mets les affaires dans des cartons, s'il te plaît !",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Tu as tout emballé ?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Je suis en contact avec mon ami.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "On va au théâtre ?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Est-ce que tout est chargé ?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Quelle belle vue !",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Maintenant, nous pouvons tout remettre en ordre.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Combien de pièces avez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "En été, je vais à la mer.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Tu sais nager ?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne nage pas trop loin !",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Tu te baignes tous les jours ?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Quand il fait beau, je vais à la pêche.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "À quoi ressemble-t-il ?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Il a quand même bien changé.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Quel genre de personne est-il ?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Il est toujours gentil et aimable.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Je ne me sens pas bien.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "J'ai un violent mal de tête.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Je me suis enrhumé.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "J'ai un rhume.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "J'ai la tête qui tourne.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Je dois aller chez le médecin.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Mets-toi au lit !",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Tu as de la fièvre ?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Hier, j'avais un peu de fièvre.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "J'ai mal aux dents.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Je dois aller chez le dentiste.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Sais-tu que Finn est malade ?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "D'après le médecin, il sera bientôt rétabli.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Je veux remeubler mon appartement.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Puis-je l'acheter en plusieurs fois ?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Reste au lit jusqu'à ce que tu ailles mieux !",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah a appris à nager en deux semaines.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Fais encore attention à ce que tu manges.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Tu parles allemand ?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Oui, un peu.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Tu parles assez couramment.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Où as-tu appris l'allemand ?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Je prends des cours d'allemand depuis un an.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Je cherche toujours l'occasion de parler allemand.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Le livre est-il encore en stock ?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Le livre est malheureusement épuisé.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Quand la nouvelle édition paraîtra-t-elle ?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "En quoi puis-je vous aider ?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Avez-vous des œufs bien frais ?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Combien coûtent-ils ?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "C'est trop cher.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Pouvez-vous me peser un demi-kilo ?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Combien dois-je payer ?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Combien coûte le kilo ?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Pesez-moi deux kilos, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Avez-vous aussi des carottes ?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Avez-vous du bon bœuf ?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Donnez-moi deux kilos de viande hachée.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Une miche de pain, s'il vous plaît, mais pas trop croustillante.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Le pain sort tout juste du four.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Quels fruits avez-vous aujourd'hui ?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Combien coûtent les pommes ?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Alors je prends deux kilos de pommes.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Les poires sont très chères.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Pouvez-vous tout me livrer à domicile ?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Avez-vous du riz ?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Donnez-moi un kilo de riz, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Merci, pas cette fois.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Combien coûte ce tapis ?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Pouvez-vous me livrer les meubles dans mon appartement ?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Prière de payer à la caisse.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Faites-moi la facture, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Combien coûte le mètre ?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Ce tissu me plaît.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Coupez-m'en trois mètres, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Avez-vous aussi d'autres motifs ? • Avez-vous aussi d'autres échantillons ?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Cette couleur ne me plaît pas.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Donnez-m'en une plus claire.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Combien coûtent ces chaussettes ?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Quels gants désirez-vous ?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Ils sont un peu trop serrés pour moi.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Voilà, maintenant ils vont bien.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Peux-tu me recommander un bon tailleur ?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Je veux commander un costume.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Quand sera-t-il prêt ?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Le costume tombe bien.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Le pantalon est trop long.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Nettoyez-le et repassez-le, s'il vous plaît !",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Quand la robe sera-t-elle prête ?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Les chaussures sont trop étroites.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Pouvez-vous réparer les chaussures aujourd'hui ?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Quand puis-je venir chercher les chaussures ?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Ma montre ne marche pas.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Elle avance de cinq minutes.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Es-tu myope ou hypermétrope ?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Je voudrais acheter des lunettes.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Pouvez-vous réparer mes lunettes ?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Cela ne prendra qu'un quart d'heure.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Le prix est trop élevé pour moi.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "J'ai besoin de deux photos pour mon passeport.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Veuillez l'emballer et me l'envoyer à domicile.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Nous avons des prix fixes.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Prenez-moi en photo, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Asseyez-vous, regardez droit dans l'objectif et ne bougez pas !",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Quand puis-je voir l'épreuve ?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Quand les photos seront-elles prêtes ?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "La photo est réussie.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Les photos sont bien réussies.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Pouvez-vous aussi agrandir la photo ?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Ces pierres sont-elles véritables ?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Est-ce de l'or véritable ?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Montrez-moi des alliances, s'il vous plaît.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "La bague est un peu trop grande pour moi.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Je peux la rétrécir.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Cette bague me va.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Montrez-moi de jolies idées de cadeaux.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Comment trouves-tu ces boucles d'oreilles ?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Cette broche est vraiment belle.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "La pierre est un saphir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Ce n'est pas une vraie pierre, c'est du verre.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Je peux tout particulièrement vous recommander ce bracelet.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Il est particulièrement bien travaillé.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Le prix n'est pas élevé.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Est-ce que la boîte m'est offerte ?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Tous les bijoux sont poinçonnés.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Si cela ne plaît pas à ma femme, puis-je l'échanger ?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Bien sûr, à tout moment.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
