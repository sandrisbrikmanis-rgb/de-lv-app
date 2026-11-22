const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Watch out for that!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "If nothing comes up. • If all goes to plan.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "I can well imagine!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Is he ill, then?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "What is it?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "All the more.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "The more, the better.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "It looks like rain.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "That's not much use to me.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "He can't make it because of work commitments.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Do say something!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "It's thundering.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Twice as big.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "From there.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Time's running out.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "He's weighed down by worries.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Have you worked through the book?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "No thoroughfare!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "May I have this dance? • Would you come this way, please?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "I'm thirsty.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "That's exactly what I mean.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "It doesn't matter at all.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "What is it you actually want?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Is this matter urgent?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Very urgent!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "I'm in a hurry.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "You're only imagining you're ill.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "What do you think you're doing? • What comes to mind?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Once upon a time.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Please get in! • Please get on!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Please come in!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "I liked a few things there.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "It's advisable.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "This bottle contains vinegar.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Excuse me, please!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Either... or...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Who was first?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Who's absent today?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "What's the matter?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "What's your name?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "What's that supposed to mean?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Please come closer!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Out with it!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "in autumn",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Ladies and gentlemen!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "from today onwards",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "this morning",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "tonight • last night",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Help!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "I study German every day.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Can you repeat that, please?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "We're meeting at the station.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "I partly agree with you.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "This decision has far-reaching consequences.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Several points of view should be taken into account.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Could you explain that in more detail?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "As far as I'm concerned,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "How old are you?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "I'm twenty years old.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "From today.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "From now on.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "There's no other way.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Give me a call.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Please turn the radio off.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Please watch out for the traffic.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "You have to pay attention to that.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "I'm doing it differently today.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "We're waiting for the bus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "He lives alone.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "I've completed my training. • I've finished my education.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "I'm waiting for the rain to stop.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "He works in the sales department.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "I'm allergic to cats.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "On the other hand, I can understand him.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "I've analysed the situation.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "She accepted my suggestion.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "I'd like to analyse this in more detail.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "I'd like to amend the contract.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "He keeps changing his mind.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "We've had similar problems before.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "No idea!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Stop moaning.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "This dress is stylishly conservative.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "I like listening to accordion music.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Can you click on the device?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Please open the file and click on it.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "I've had an accident.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "We're walking to the station.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Please turn the TV on.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "My computer's crashed.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "I'm going fishing at the weekend.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "I missed the call.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Can you ring me later?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Please accept my suggestion.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "I accept your offer.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "He accepted the invitation.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "I'm afraid of spiders.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Don't worry, everything's going to be fine.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "To meet with approval. • To strike a chord.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "It depends.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "On this occasion. • For this reason.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Let's suppose that...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "What on earth have you done?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Right to the end.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "You don't seem to believe me.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "In my view...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Don't make such a fuss!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "To get down to work.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "To be out of breath.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Enjoy your meal!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "In one breath.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "In any case. • Definitely.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Suddenly everything went quiet.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Please open the door!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "He took out the loan.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "We have to tidy up today.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "I'll stop now.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "He's already up.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "We have to postpone the meeting.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "She got me worked up.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "All of a sudden.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "On the spot.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "To pay for the damage.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Open the door, please!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "To sit up straight.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "He's up.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "To exert all one's strength.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "To go to a lot of trouble.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Get out of my sight!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "In private.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "For lack of time.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "For this reason.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Everyone except you.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "To set great store by appearances.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "If the worst comes to the worst.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Extremely important.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "A view of the sea.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "He has good prospects.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "How is this word pronounced?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "To offer one's condolences.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "When were the championships held?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "What do you do for a living?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "To exert influence.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "To eat out.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "By rail.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "By train.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "As soon as possible.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "I'm scared stiff.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "To put something off.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "To pay in cash.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "To mine ore.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "To mess things up.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "I've been given the task.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "As required.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "I feel sorry for him.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "What does this word mean?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "On condition that...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "She looks downcast.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "To follow the instructions.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "To obey orders.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "To send by post.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "I'm eager to know.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "At the beginning.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "At the beginning.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "At the start.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Accompanied.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "With his companion.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "He's slow on the uptake.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "To remember.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "At table.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "To be in one's right mind.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "By day.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Not nearly so.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Both of them.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Thunderous applause broke out.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "To meet with approval.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "To express one's condolences.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "To stand on one's own two feet.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "For example.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "To lend support.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "To make a contribution.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "To make someone's acquaintance.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "To strike up an acquaintance.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Filled rolls.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "As you wish.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "At any time.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "To observe silence.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "For convenience.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "To be ready. • To be willing.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "To rescue accident victims.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "To give a report.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "All the seats are taken.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "A new broom sweeps clean.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "He owns a house.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "He has a lot of courage.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "So much the better.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Get well soon!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "With the best will in the world.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Best of all.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "There is some doubt.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "His task is...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "To pass on someone's regards.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Definitely.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "To come for a visit.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "To be visiting.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "To go to concerts often.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Which school did he go to?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "To take into consideration.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "To leave out of consideration.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "He runs a hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Both of them.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "To pay for everything.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "With regard to something.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "You're welcome. • Here you are.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Pardon?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "You're very welcome. • There you are.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "I have a favour to ask of you.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "To play the trumpet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "To leaf through a book.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "With bare feet.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "With the naked eye.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Thanks for the compliment!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Everything's hunky-dory.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Please check.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "There he is!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Everything points to it.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "It's not my fault.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "I'm against it.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "I have no objection.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "From home.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "To move the queen.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "It's getting dark. • It's getting light.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Thank you very much!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Now and then.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "You can count on it.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Nothing will come of it.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "So that...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Who do you take me for?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Hands off!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Keep your chin up!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "at home",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "to go home",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "originally • by nature",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "My warmest congratulations!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "If you'd be so kind!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "If you would be so good!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "What's the matter?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Excuse me, please! • Allow me, please!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Is smoking allowed?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "I must admit that...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "yesterday morning",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "yesterday evening",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "It's all the same to me whether...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "What's happened?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Don't make a fuss! • Don't do anything silly!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Let alone...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Go straight on!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "How are you?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Ask him when you get the chance whether...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "tomorrow morning",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "in spring",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "What's new?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "It follows from this letter that...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Carry on!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "He's not a fan of...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "It turned out that...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Do you remember me? • Do you think of me?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "in winter",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Which year were you born in?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "It pains me to see...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "the more, the better",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "until now",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "How do I get to the station?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Come here!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Could I speak to Mrs N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "How much is that?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "How long does the performance last?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Stop it! • Leave it!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Leave me alone!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Allow me to help you!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Let's go!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "So, how's it going?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Long live!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Farewell!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "What's the matter? • What's going on?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "The job is exhausting.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "That was a tiring day.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Learning German can be hard work.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "He demands an explanation.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "The seller is asking too much money.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "The law requires it.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "It's not that hard at all.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "I've got no money at all.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "He didn't say anything at all.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "The dog is loose.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "There's a lot going on here.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Pipe down! • Come off it!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "What are you doing?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Tell me!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "What do you mean by that?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "We're going with you.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "I'm travelling by train.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "on Wednesday",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "That may be so.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "I don't like that.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "on Monday",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Good morning!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "in the morning",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Good night!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Please take a seat!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "The latest thing!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Isn't that right?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Oh no! • Don't!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "At last!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "What good is that?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "What's the point of all this?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parking prohibited!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Do not park!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "He's right.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "What's it about?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "That's out of the question.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Have a good journey!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "I'm losing my patience.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "They say that...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "That's all right!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Here you are! • You're welcome!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "How much do I owe you?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Shake before use!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Take a look!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "However much...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Since when?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "What should I do?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "in summer",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Not only..., but also...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Anything else?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Joking aside!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "What's the time?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "No through traffic!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Do you speak German?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Instead of...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "How are things?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "This hat suits her.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Hello!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Where shall we meet?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Please come closer!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Honesty is a virtue.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "I've got a lot to do.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Not bad!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "He lives above me.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "He's convinced of it.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "That's the custom.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Your watch is slow.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "What time is it?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "At eight o'clock in the morning.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "all the more",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Right turn!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "I should say so!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "namely",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "At the expense of...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "He was sitting in the audience.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Not at all!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "It happened as arranged.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "No smoking!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Wrong number!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "No entry!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Do you understand me?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "He knows nothing about it.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "To defend one's opinion.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "To cause an argument.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Much better.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Too much.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "From hearsay.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "From time to time.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "By profession.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "He's a Berliner by birth.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "He's standing in front of the window.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Before sunrise.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "A fortnight ago.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "For joy.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Above all.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "In advance.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "On condition that...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "With that reservation.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "To exist. • To be available.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Last week.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "To take precautions.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "She seems familiar.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "He's particularly fond of literature.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "This morning.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "From the front. • From the beginning.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Forwards.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "From the outset.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "To be at an advantage.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "To be awake.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "To wake up.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "To be on guard duty.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "In the course of a year.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "During the war.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "To talk to a brick wall.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "The walls have ears here.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Until when? • By when?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "It's warm.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "To wait for a message.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "What do you want?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "What kind of...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Halfway.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "In this way. • By this means.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "By peaceful means.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "For the sake of our friendship.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "By rights. • By law.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "To hurt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "At Christmas.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "In what way?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Manner.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Without further ado. • Without difficulty.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Until further notice.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "And so on.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nothing else.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "On which day?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "The whole world. • Everybody.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "In a few days.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Too little.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Even though. • Even if.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Who goes there? • Who's there?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schiller's collected works.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Selected works.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "He deserves to...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "It's worth two euros.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "To the west.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "From the west.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "To enter into competition.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "To race each other.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "What shall we bet?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "What's the weather going to be like?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Gymnastics competition.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Against my will.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "To raise an objection.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "How old is he?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "How long?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Speak to you soon!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Goodbye!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Wild animals.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "A warm welcome!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "It's your move.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "There's a draught.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Quite cold.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "The end of a sausage.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "To go to him.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "To go to school.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "To stay at home.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Day by day.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Luckily.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Drinking water.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "On foot.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "On horseback.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "By bike.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "It stopped raining.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "I've still got a lot to do.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Too early.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Too big.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "To shrug one's shoulders.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "To drink in one go.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "To perish.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "To take as a basis.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "For the first time.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Please close the door!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "He's put on weight.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "The days are getting longer.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "To be connected with something.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "The door's shut.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "I wouldn't have thought him capable of that.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Free admission.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "No entry!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "That's too much!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "To become repugnant.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Namely.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "It's beyond doubt.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Without a doubt.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Secondly.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Happy New Year!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Happy birthday!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Have a good trip!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "It's a pleasure to meet you.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Would you be so kind?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "I'm very grateful to you.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sit down, please!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, please come up to the board!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Open your textbooks, please!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Please go to the sports hall!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Are you still asleep?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Are you still asleep?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "He's fallen fast asleep.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Please wake him up, it's late already!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "I'm terribly sorry!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Many thanks!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, please start!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Read along, please!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, please don't look out of the window!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, please bring the exercise books!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Please go back to your seat!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "It's half past seven.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "When do you usually wake up?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "I'll get up in a minute.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Get up, Hanna, the alarm's going off! • Get up, Hanna, someone's at the door!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Let me sleep for five more minutes!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Don't forget to air the room!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Where's the towel?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "I'd like to brush my teeth.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "What do you brush your teeth with?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "I'd like to get dressed.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Get dressed quickly, please!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Dress more warmly, it's chilly outside.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Good morning, how are you?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "I'm fine, thanks.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "What's new?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "What a mess in here!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "May I help you tidy up?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "What do you drink in the morning, coffee or tea?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "I usually have a cup of coffee in the morning.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "I like black coffee best.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Good morning, did you sleep well?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "I'm still very tired.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Do you want coffee or milk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Give me a cheese roll, please.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "I've got to go now!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Don't forget your breakfast!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, please lay the table!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Don't forget the napkins!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "When do you have lunch?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "It's time to eat.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "What's for lunch today?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "How do you like the soup?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "To be honest, it's a bit too salty.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "May I offer you a piece of bread?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Thanks, I've already got some.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "The meat tastes excellent.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Thanks, I'm already full.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "We've got visitors today.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Are you free this evening?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Do come round for lunch today!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Let's sit down at the table.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Please, help yourself!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Does the smoking bother you?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Thank you for the kind welcome!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "When do you go to bed?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "When I get home from work, I'm always tired.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "It's time to go to bed.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "The weather's lovely.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Do you want to go for a walk with me?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Look, it's going to rain any minute.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Take the umbrella with you!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "It's raining.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "I'm already soaking wet.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Do you think it'll rain all day?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "The rain's stopping.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "The sun's shining again.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "It's very warm.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "It looks like rain.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "There's going to be a thunderstorm any minute.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "The thunderstorm is passing over.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "The clouds are clearing.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Can you see the rainbow?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Winter's here, it's been snowing.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "It's snowing.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "How lovely it is in the woods in winter!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "I'm cold, I'm freezing.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "There's black ice outside, watch out!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Shall we go to the ice rink?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Put your jacket on, you could catch a cold.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "It's half past six.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "My watch is five minutes fast.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Wake me at seven o'clock tomorrow morning!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "What's the date today?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Today is the eleventh of July.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "What do you usually do in the evening?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "It's been a long time since we last saw each other.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "How are you?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Sorry, there's something I'd like to discuss with you.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Let's go for a walk!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Do you fancy going to the park with me?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "I've come to take you out for a walk.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Please walk a bit more slowly, I can't keep up with you!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "This is my first time in this area.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Let's have a little rest.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Now we can go back.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "To be honest, I'm rather tired.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Excuse me, where's the nearest underground station?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Which is the shortest way?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Take the second street on the left here and then keep going straight on.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "What's the quickest way to the station?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "I'm planning to go away tomorrow.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Where do you want to go?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Are you travelling on business or for pleasure?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn's coming with us as far as Berlin, then he's going to the seaside.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "When does the ship sail?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "In half an hour.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Can I still get a cabin?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Don't forget your passport!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "It's time to pack the suitcase.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "The train leaves at half past six.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Get me a taxi, please, or I'll miss the train!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Take me to the station, please!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "I have to hurry.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Is the ticket office open yet?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "A ticket to Cologne, please.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "When does the train leave?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "The train's about to leave.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Do I have to change in Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Yes, you have to change there.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Is this seat free?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "No, nobody's sitting here.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Where's the platform ticket machine?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Put my hand luggage in the luggage rack.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Can I open the window?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "There's a draught, please close the window!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "What's the next station?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "How long does the train stop for?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Where do I have to change?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "The train's delayed.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "This carriage is non-smoking.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "We're crossing the border now.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Have you got anything to declare?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "We've arrived in Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Can you recommend a good hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Do you have any rooms available?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "A room with two beds, please.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "How much is the room per night?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "I'm leaving tomorrow. Wake me at seven o'clock!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "The bill, please!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Where's the city library?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "When's the museum open?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Shall we go to the museum?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Are we going by bus or by underground?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Where's the nearest bus stop?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "I'm really hungry.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Shall we go out for a meal together?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Waiter, the menu, please!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Is the fish fresh?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "This tastes excellent!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Waiter, the bill, please!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "I'm going to the café for a coffee.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Do you want to come along?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "A cup of coffee with milk, please!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Faster, please, I'm in a hurry!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Don't let your coffee go cold!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Have you got anything refreshing?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "An ice cream, please!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "I got a letter this morning.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "I must write to him straight away.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Where's the nearest postbox?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Where's the post office?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Remind me tomorrow to write!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Please put this letter in the postbox.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hello, this is Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Can I call you later?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Will I have to wait long?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Please cut my hair.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Not too short at the back, please.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "When does the performance start?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "It starts at half past seven.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "All the seats are sold out.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Three tickets, please!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "We'll leave our jackets in the cloakroom.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Quickly, please, the curtain's about to go up!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "The curtain falls.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "May I have this dance?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "When's your wedding?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "I'm looking for a flat.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Is there a flat available in this building?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "How much is the rent?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "The flat has three rooms and a kitchen.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "We're moving house today.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, please pack the things into boxes!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Have you packed everything?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "I'm in touch with my friend.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Shall we go to the theatre?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Is everything loaded?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "What a beautiful view!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Now we can tidy everything up again.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "How many rooms have you got?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "In the summer I'm going to the seaside.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Can you swim?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Don't swim out too far!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Do you go swimming every day?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "When the weather's nice, I go fishing.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "What does he look like?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "He really has changed quite a lot.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "What's he like as a person?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "He's always nice and friendly.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "I don't feel well.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "I've got a bad headache.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "I've caught a cold.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "I've got a runny nose.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "I feel dizzy.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "I need to go to the doctor's.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Go and lie down in bed!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Have you got a temperature?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "I had a slight temperature yesterday.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "I've got toothache.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "I need to go to the dentist's.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Did you know that Finn's ill?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "According to the doctor, he'll soon be well again.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "I want to refurnish my flat.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Can I buy it in instalments?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Stay in bed until you feel better!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah learnt to swim in two weeks.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Be careful with what you eat for a while yet.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Do you speak German?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Yes, a little.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "You speak quite fluently.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Where did you learn German?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "I've been having German lessons for a year.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "I'm always looking for chances to speak German.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Is the book still in stock?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "I'm afraid the book is sold out.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "When's the new edition coming out?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "How can I help you?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Have you got really fresh eggs?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "How much are they?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "That's too expensive.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Could you weigh out half a kilo for me?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "How much do I have to pay?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "How much is it a kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Please weigh out two kilos for me.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Have you got carrots as well?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Have you got any good beef?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Please give me two kilos of mince.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "A loaf of bread, please, but not too crusty.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "The bread is freshly baked.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "What fruit have you got today?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "How much are the apples?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Then I'll take two kilos of apples.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "The pears are very expensive.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Could you deliver everything to my home?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Have you got any rice?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Please give me a kilo of rice.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Thanks, but not this time.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "How much is this rug?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Could you deliver the furniture to my flat?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Please pay at the till.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Please make out the bill.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "How much is it a metre?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "I like this fabric.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Please cut off three metres for me.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Have you got any other patterns? • Have you got any other samples?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "I don't like this colour.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Please give me a lighter one.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "How much are these socks?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Which gloves would you like?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "They're a bit too tight for me.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "There, now they fit well.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Can you recommend a good tailor?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "I want to have a suit made.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "When will it be ready?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "The suit fits well.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "The trousers are too long.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Please clean and press it!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "When will the dress be ready?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "The shoes are too tight.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Could you repair the shoes today?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "When can I collect the shoes?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "My watch isn't working.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "It's five minutes fast.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Are you short-sighted or long-sighted?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "I'd like to buy a pair of glasses.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Could you repair my glasses?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "It'll only take a quarter of an hour.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "The price is too high for me.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "I need two photos for my passport.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Please wrap it up and send it to my home.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "We have fixed prices.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Please take a photo of me.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sit down, look straight into the camera and don't move!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "When can I see the proof?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "When will the photos be ready?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "The shot has come out well.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "The photos have turned out well.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Can you enlarge the photo as well?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Are these stones real?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Is that real gold?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Please show me some wedding rings.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "The ring's a bit too loose for me.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "I can make it smaller.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "This ring fits me.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Please show me some nice gift ideas.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "How do you like these earrings?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "This brooch is really lovely.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "The stone is a sapphire.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "That's not a real stone, it's glass.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "I can particularly recommend this bracelet.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "It's exceptionally well made.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "The price isn't high.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Do I get the box free of charge?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "All the jewellery is hallmarked.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "If my wife doesn't like it, can I exchange it?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Of course, any time.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
