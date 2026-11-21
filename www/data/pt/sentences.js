const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Tem cuidado com isso!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Se não houver imprevistos. • Se tudo correr como previsto.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Imagino bem!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Então ele está doente?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "O que é?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Tanto mais.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Quanto mais, melhor.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Tudo indica que vai chover.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Isso pouco me serve.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Ele não pode vir por motivos de trabalho.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Fale lá!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Está a trovejar.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Duas vezes maior.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "De lá.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "O tempo urge.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "As preocupações afligem-no.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Estudaste o livro a fundo?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Passagem proibida!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Concede-me esta dança? • Acompanha-me, por favor?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Tenho sede.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "É precisamente isso que quero dizer.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "É completamente indiferente.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Afinal, o que é que o senhor quer?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Este assunto é urgente?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Muito urgente!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Estou com pressa.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Estás apenas a imaginar que estás doente.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Como te atreves? • O que te vem à cabeça?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Era uma vez.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Entre, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Faça favor de entrar!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Gostei de algumas coisas de lá.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "É aconselhável.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Esta garrafa contém vinagre.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Desculpe, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Ou..., ou...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Quem foi o primeiro?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Quem falta hoje?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "O que é que tens?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Como se chama?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "O que quer isso dizer?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Por favor, aproxime-se!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Desembucha!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "no outono",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Minhas senhoras e meus senhores!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "a partir de hoje",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "hoje de manhã",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "esta noite • ontem à noite",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Socorro!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Estudo alemão todos os dias.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Podes repetir isso, por favor?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Encontramo-nos na estação.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Concordo em parte contigo.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Esta decisão tem consequências de grande alcance.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Deviam ter-se em conta várias perspetivas.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Poderia explicar isso com mais pormenor?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "No que me diz respeito,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Quantos anos tem?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Tenho vinte anos.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "A partir de hoje.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "De agora em diante.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Não há outra maneira.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Telefone-me.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Por favor, desligue o rádio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Presta atenção ao trânsito, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Tens de prestar atenção a isso.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Hoje faço-o de outra maneira.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Estamos à espera do autocarro.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Ele vive sozinho.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Concluí a minha formação. • Terminei os meus estudos.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Vou esperar que a chuva pare.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Ele trabalha no departamento de vendas.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Sou alérgico a gatos.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Por outro lado, compreendo-o.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Analisei a situação.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ela aceitou a minha proposta.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Gostaria de analisar isto com mais pormenor.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Gostaria de alterar o contrato.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Ele está sempre a mudar de opinião.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Já tivemos problemas semelhantes no passado.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Não faço ideia!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Deixa de te queixar.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Este vestido tem um estilo elegante e conservador.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Gosto de ouvir música de acordeão.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Podes clicar no dispositivo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Por favor, abre o ficheiro e clica nele.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Tive um acidente.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Vamos a pé para a estação.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Por favor, liga a televisão.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "O meu computador foi abaixo.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "No fim de semana vou à pesca.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Perdi a chamada.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Podes ligar-me mais tarde?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Por favor, aceita a minha proposta.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Aceito a tua oferta.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Ele aceitou o convite.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Tenho medo de aranhas.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Não tenhas medo, vai correr tudo bem.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Ter boa aceitação.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Depende.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Por este motivo.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Suponhamos que...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Que disparate fizeste aí?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Até ao fim.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Parece que não acreditas em mim.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Na minha opinião...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Não faças tanto drama!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Pôr mãos à obra.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Estar sem fôlego.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Bom apetite!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "De um só fôlego.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Em todo o caso. • Sem dúvida.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "De repente, ficou tudo em silêncio.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Abre a porta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Ele contraiu o empréstimo.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Temos de arrumar hoje.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Vou parar agora.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Ele já está levantado.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Temos de adiar a reunião.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ela enervou-me.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "De repente.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Imediatamente.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Arcar com os danos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Abra a porta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Estar sentado direito.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Ele está levantado.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Empregar todas as forças.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Esforçar-se muito.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Desaparece da minha vista!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "A sós.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Por falta de tempo.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Por esta razão.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Todos menos tu.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Dar importância às aparências.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Na pior das hipóteses.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Extremamente importante.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Vista para o mar.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Ele tem boas perspetivas.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Como se pronuncia esta palavra?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Dar os pêsames.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Quando se disputaram os campeonatos?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Que profissão exerce?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Exercer influência.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Comer fora.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Por caminho de ferro.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "De comboio.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "O mais cedo possível.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Tenho um medo terrível.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Adiar. • Protelar.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Pagar em dinheiro.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Extrair minério.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Fazer asneira.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Encarregaram-me disso.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Conforme necessário.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Tenho pena dele.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "O que significa esta palavra?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Com a condição de que...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ela parece abatida.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Seguir as indicações.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Cumprir ordens.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Enviar pelo correio.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Tenho muita curiosidade em saber.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "No início.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "No começo.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Ao começar.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Acompanhado.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Com o seu acompanhante.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Ele é lento a perceber. • Ele é duro de entendimento.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Lembrar-se. • Guardar na memória.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "À mesa.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Estar no seu perfeito juízo.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "De dia.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Nem de longe.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Ambos.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Irromperam aplausos estrondosos.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Ter boa aceitação.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Exprimir as suas condolências.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Ser independente.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Por exemplo.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Prestar assistência. • Dar apoio.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Dar o seu contributo.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Travar conhecimento com alguém.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Travar conhecimento. • Estabelecer contacto.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Pãezinhos recheados.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Como quiser.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "A qualquer hora.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Guardar silêncio.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Por comodidade.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Estar pronto. • Estar disposto.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Resgatar as vítimas de um acidente.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Informar. • Apresentar um relatório.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Todos os lugares estão ocupados.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Vassoura nova varre bem.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Ele possui uma casa.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Ele tem muita coragem.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tanto melhor.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "As melhoras!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Com a melhor das vontades.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "O melhor.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Há dúvidas.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "A tarefa dele consiste em...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Mandar cumprimentos.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Com toda a certeza.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Vir de visita.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Estar de visita.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Ir muitas vezes a concertos.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Que escola frequentou ele?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Ter em consideração. • Ponderar.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Não ter em consideração.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Gere um hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Ambos.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Pagar tudo.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Relativamente a algo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "De nada. • Aqui tem.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Como?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Não tem de quê. • Aqui tem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Tenho um favor a pedir-lhe.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Tocar trompete.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Folhear um livro.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "De pés descalços.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "A olho nu.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Obrigado pelo elogio!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Tudo às mil maravilhas.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Verificar, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Ali está ele!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Tudo aponta nesse sentido.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Não tenho culpa.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Sou contra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Não tenho nada contra.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "De casa.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Mover a dama.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Está a anoitecer. • Está a amanhecer.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Muito obrigado!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "De vez em quando.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Podes contar com isso.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Isso não vai dar em nada.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "De modo que...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Por quem me toma?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Tira as mãos daí!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Não te deixes abater!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "em casa",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "ir para casa",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "de origem • por natureza",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Os meus mais sinceros parabéns!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Faça o favor!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Tenha a bondade!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "O que é que tens?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Com licença!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "É permitido fumar?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Tenho de confessar que...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "ontem de manhã",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "ontem à noite",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "É-me indiferente se...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "O que aconteceu?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Não faças fitas! • Não faças disparates!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Para não falar de... • Muito menos...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Siga em frente!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Como está?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pergunta-lhe, quando tiveres oportunidade, se...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "amanhã de manhã",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "na primavera",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Que há de novo?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Desta carta depreende-se que...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Continua!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Não é grande apreciador de...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Verificou-se que...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Lembras-te de mim? • Pensas em mim?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "no inverno",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Em que ano nasceu?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Custa-me ver...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "quanto mais, melhor",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "até agora",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Como chego à estação?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Vem cá!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Poderia falar com a senhora N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Quanto custa?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Quanto tempo dura o espetáculo?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Para com isso! • Deixa isso!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Deixa-me em paz!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Deixe-me ajudá-lo!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Vamos embora!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Então, como vai isso?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Viva!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Passe bem! • Adeus!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "O que se passa?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "O trabalho é cansativo.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Foi um dia cansativo.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Aprender alemão pode ser cansativo.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Exige uma explicação.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "O vendedor pede demasiado dinheiro.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "A lei assim o exige.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Não é assim tão difícil.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Não tenho dinheiro nenhum.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Não disse absolutamente nada.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "O cão está à solta.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Aqui há muito movimento.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Cala-te lá! • Não exageres!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "O que estás a fazer?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Diz lá!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "O que quer dizer com isso?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vamos com o senhor.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Vou de comboio.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "na quarta-feira",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Pode ser.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Não gosto disso.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "na segunda-feira",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Bom dia!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "de manhã",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Boa noite!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Sente-se!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Última novidade!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Não é verdade?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nada disso! • Não, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Até que enfim!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Para que serve isso?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Para que serve tudo isto?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Proibido estacionar!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Não estacionar!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Ele tem razão.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "De que se trata?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Isso está fora de questão.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Boa viagem!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Estou a perder a paciência.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Diz-se que...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Está bem!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Aqui tem! • De nada!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Quanto lhe devo? • Quanto é?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Agitar antes de usar!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Olhe só!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Por mais que...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Desde quando?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Que hei de fazer?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "no verão",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Não só..., mas também...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Mais alguma coisa?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Brincadeiras à parte!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Que horas são?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Trânsito proibido!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Fala alemão?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Em vez de...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Como vão as coisas?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Este chapéu fica-lhe bem.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Bom dia! • Boa tarde!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Onde nos encontramos?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Aproxime-se!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "A honestidade é uma virtude.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Tenho muito que fazer.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Nada mau!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Ele mora por cima de mim.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Ele está convencido disso.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "É o costume.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "O teu relógio está atrasado.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Que horas são?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Às oito da manhã.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "tanto mais",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Direita, volver!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "E de que maneira!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nomeadamente",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Por conta de... • À custa de...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Ele estava sentado no meio do público.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Não tem de quê!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Aconteceu como estava combinado.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Proibido fumar!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Enganou-se no número!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Entrada proibida!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Compreende-me?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Ele não percebe nada disso.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Defender a sua opinião.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Provocar uma discussão.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Muito melhor.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Demasiado.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Por ouvir dizer.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "De vez em quando.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "De profissão.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Ele é berlinense de nascimento.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Ele está em frente da janela.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Antes do nascer do sol.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Há quinze dias.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "De alegria.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Acima de tudo.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Antecipadamente.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Com a condição de que...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Com essa reserva.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Existir. • Estar disponível.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Na semana passada.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Tomar precauções.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ela parece-me conhecida.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Ele tem uma predileção pela literatura.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Hoje de manhã.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "De frente. • Desde o início.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Para a frente.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Logo de início.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Estar em vantagem.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Estar acordado.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Acordar.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Estar de guarda.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Durante um ano.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Durante a guerra.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Falar para as paredes.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Aqui as paredes têm ouvidos.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Até quando?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Está calor.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Esperar por uma mensagem.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "O que deseja?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Que tipo de...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "A meio caminho.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Desta maneira. • Por este meio.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Por meios pacíficos.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Pela nossa amizade.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Por lei. • Com toda a justiça.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Doer.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "No Natal.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "De que maneira?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Maneira.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Sem demora. • Sem dificuldade.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Até nova ordem.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "E assim por diante.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Mais nada.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Em que dia?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "O mundo inteiro. • Toda a gente.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Daqui a poucos dias.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Demasiado pouco.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Ainda que.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Quem vem lá? • Quem está aí?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Obras completas de Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Obras escolhidas.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Ele merece que...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Vale dois euros.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Para oeste.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "De oeste.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Entrar em competição.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Fazer uma corrida.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Quanto apostamos?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Que tempo vai fazer?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Competição de ginástica.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Contra a minha vontade.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestar. • Levantar objeções.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Quantos anos tem ele?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Quanto tempo?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Até à próxima!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Adeus!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Animais selvagens.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Seja muito bem-vindo!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "É a tua vez de jogar.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Há uma corrente de ar.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Bastante frio.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Ponta de uma salsicha.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Ir ter com ele.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ir à escola.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Ficar em casa.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "De dia para dia.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Por sorte.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Água para beber.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "A pé.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "A cavalo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "De bicicleta.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Parou de chover.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Ainda tenho muito que fazer.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Demasiado cedo.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Demasiado grande.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Encolher os ombros.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Beber de um trago.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Perecer.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Tomar como base.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Pela primeira vez.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Feche a porta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Ele engordou.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Os dias estão a ficar mais compridos.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Estar relacionado com alguma coisa.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "A porta está fechada.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Não o teria julgado capaz disso.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Entrada livre.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Entrada proibida!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Isto é demais!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Tornar-se repugnante. • Começar a enjoar alguém.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nomeadamente.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Está fora de dúvida.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Sem dúvida.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Em segundo lugar.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Feliz Ano Novo!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Muitos parabéns pelo aniversário!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Boa viagem!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "É um prazer conhecê-lo.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Seria tão amável?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Estou-lhe muito grato.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sentem-se, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, vem ao quadro, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Abram os manuais, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Vão para o pavilhão desportivo, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Ainda estás a dormir?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Ainda está a dormir?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Ele adormeceu profundamente.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Acorda-o, por favor, que já é tarde!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Lamento muito!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Muito obrigado!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, começa, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Acompanhem a leitura, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, não olhes pela janela, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, traz os cadernos, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Volta para o teu lugar, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "São sete e meia.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "A que horas costumas acordar?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Já me levanto.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Levanta-te, Hanna, está a tocar o despertador! • Levanta-te, Hanna, estão a tocar à campainha!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Deixa-me dormir mais cinco minutos!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Não te esqueças de arejar o quarto!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Onde está a toalha?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Queria lavar os dentes.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Com que é que lavas os dentes?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Queria vestir-me.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Veste-te depressa, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Agasalha-te melhor, lá fora está fresco.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Bom dia, como estás?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Estou bem, obrigado.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "O que há de novo?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Que desarrumação aqui!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Posso ajudar a arrumar?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "O que bebes de manhã, café ou chá?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Normalmente bebo uma chávena de café de manhã.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Prefiro café sem leite.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Bom dia, dormiste bem?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Ainda estou muito cansado.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Queres café ou leite?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Dá-me um pãozinho com queijo, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Agora tenho de ir!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Não te esqueças do pequeno-almoço!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, põe a mesa, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Não te esqueças dos guardanapos!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "A que horas almoçam?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Está na hora de comer.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "O que há hoje para o almoço?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Que tal achas a sopa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Para ser sincero, está um pouco salgada demais.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Posso dar-te um bocado de pão?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Obrigado, já tenho.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "A carne está excelente.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Obrigado, já estou satisfeito.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Hoje temos visitas.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Estás livre hoje à noite?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Passa cá hoje para almoçar!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sentemo-nos à mesa.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Por favor, serve-te!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Incomoda-te que eu fume?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Obrigado pelo simpático acolhimento!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "A que horas te deitas?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Quando chego do trabalho, estou sempre cansado.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Está na hora de ir para a cama.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Está bom tempo.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Queres ir passear comigo?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Olha, está quase a chover.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Leva o guarda-chuva!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Está a chover.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Já estou todo molhado.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Achas que vai chover o dia todo?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Está a parar de chover.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "O sol está outra vez a brilhar.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Está muito calor.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Parece que vai chover.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Vamos ter trovoada daqui a nada.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "A trovoada está a passar.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "As nuvens estão a dissipar-se.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Vês o arco-íris?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "O inverno chegou, nevou.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Está a nevar.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Como é bonito o bosque no inverno!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Tenho frio, estou a gelar.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Lá fora há gelo no chão, tem cuidado!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Vamos à pista de gelo?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Veste o casaco, podes constipar-te.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "São seis e meia.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "O meu relógio está cinco minutos adiantado.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Acorda-me amanhã de manhã às sete!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "A quantos estamos hoje?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Hoje é dia onze de julho.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "O que costumas fazer à noite?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Já há muito tempo que não nos vemos.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Como estás?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Desculpa, queria falar contigo sobre uma coisa.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Vamos passear!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Apetece-te ir ao parque comigo?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Venho buscar-te para irmos passear.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Anda um pouco mais devagar, por favor, não te consigo acompanhar!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "É a primeira vez que estou nesta zona.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Descansemos um pouco.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Agora podemos voltar.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Para ser sincero, estou bastante cansado.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Desculpa, onde fica a estação de metro mais próxima?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Qual é o caminho mais curto?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Vira aqui na segunda rua à esquerda e depois segue sempre em frente.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Como é que chego mais depressa à estação?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Tenciono partir de viagem amanhã.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Para onde queres ir?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Viajas em trabalho ou por lazer?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "O Finn vai connosco até Berlim, depois segue para a praia.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Quando é que o navio parte?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Daqui a meia hora.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Ainda posso arranjar um camarote?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Não te esqueças do passaporte!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Está na hora de fazer a mala.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "O comboio parte às seis e meia.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Chama-me um táxi, por favor, senão perco o comboio!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Leva-me à estação, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Tenho de me apressar.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "A bilheteira já está aberta?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Um bilhete para Colónia, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Quando parte o comboio?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "O comboio está quase a partir.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Tenho de mudar de comboio em Coblença?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Sim, tens de mudar de comboio aí.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Este lugar está livre?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Não, não está ninguém sentado aqui.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Onde está a máquina dos bilhetes de gare?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Põe a minha bagagem de mão no porta-bagagens.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Posso abrir a janela?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Há corrente de ar, fecha a janela, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Qual é a próxima estação?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Quanto tempo fica o comboio parado?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Onde tenho de mudar de comboio?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "O comboio está atrasado.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Esta carruagem é para não fumadores.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Estamos agora a atravessar a fronteira.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Tens alguma coisa a declarar?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Chegámos a Berlim.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Podes recomendar-me um bom hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Tem quartos livres?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Um quarto com duas camas, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Quanto custa o quarto por noite?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Amanhã vou-me embora. Acorda-me às sete horas!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "A conta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Onde fica a biblioteca municipal?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Quando é que o museu está aberto?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Vamos ao museu?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Vamos de autocarro ou de metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Onde fica a paragem de autocarro mais próxima?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Tenho muita fome.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Vamos comer juntos?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Empregado, a ementa, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "O peixe é fresco?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Isto está excelente!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Empregado, a conta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Vou ao café tomar um café.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Queres vir comigo?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Uma chávena de café com leite, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Mais depressa, por favor, que estou com pressa!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Não deixes o teu café arrefecer!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Tem alguma coisa refrescante?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Um gelado, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Hoje de manhã recebi uma carta.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Tenho de lhe escrever já.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Onde fica o marco do correio mais próximo?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Onde ficam os correios?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Lembra-me amanhã de escrever!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Por favor, ponha esta carta no marco do correio.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Olá, fala a Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Posso ligar-te mais tarde?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Tenho de esperar muito?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Por favor, corte-me o cabelo.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Atrás, por favor, não muito curto.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Quando começa o espetáculo?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Começa às sete e meia.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Os lugares estão todos esgotados.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Três bilhetes, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Deixamos os casacos no bengaleiro.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Depressa, por favor, que o pano está quase a subir!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Cai o pano.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Posso convidar-te para dançar?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Quando é o vosso casamento?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Estou à procura de um apartamento.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Há algum apartamento livre neste prédio?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Quanto é a renda?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "O apartamento tem três assoalhadas e uma cozinha.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Hoje mudamos de casa.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, põe as coisas em caixas, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Empacotaste tudo?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Estou em contacto com o meu amigo.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Vamos ao teatro?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Está tudo carregado?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Que bela vista!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Agora podemos arrumar tudo outra vez.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Quantas assoalhadas têm?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "No verão vou para a praia.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Sabes nadar?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Não nades para muito longe!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Vais nadar todos os dias?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Quando está bom tempo, vou pescar.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Que aspeto tem ele?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Ele mudou mesmo bastante.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Como é ele como pessoa?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Ele é sempre simpático e amável.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Não me sinto bem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Tenho uma dor de cabeça forte.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Constipei-me.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Estou com o nariz a pingar.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Estou com tonturas.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Tenho de ir ao médico.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Deita-te na cama!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Tens febre?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Ontem tive um pouco de febre.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Tenho dor de dentes.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Tenho de ir ao dentista.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Sabes que o Finn está doente?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Segundo o médico, em breve vai ficar bom outra vez.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Quero mobilar de novo o meu apartamento.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Posso comprar isto a prestações?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Fica na cama até te sentires melhor!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "O Noah aprendeu a nadar em duas semanas.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Continua a ter cuidado com a comida.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Falas alemão?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Sim, um pouco.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Falas com bastante fluência.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Onde aprendeste alemão?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Tenho aulas de alemão há um ano.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Procuro sempre oportunidades para falar alemão.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "O livro ainda está disponível?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Infelizmente, o livro está esgotado.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Quando sai a nova edição?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Em que posso ajudá-lo?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Tem ovos bem frescos?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Quanto custam?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Isso é demasiado caro.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Pode pesar-me meio quilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Quanto tenho de pagar?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Quanto custa o quilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Pese-me dois quilos, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Também tem cenouras?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Tem carne de vaca boa?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dê-me dois quilos de carne picada.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Um pão, por favor, mas não muito estaladiço.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "O pão está acabado de cozer.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Que fruta tem hoje?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Quanto custam as maçãs?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Então levo dois quilos de maçãs.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "As peras estão muito caras.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Pode entregar-me tudo em casa?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Tem arroz?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dê-me um quilo de arroz, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Obrigado, desta vez não.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Quanto custa este tapete?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Pode entregar os móveis no meu apartamento?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Pagar na caixa, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Por favor, faça-me a fatura.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Quanto custa o metro?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Gosto deste tecido.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Corte-me três metros, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Também tem outros padrões? • Também tem outras amostras?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Não gosto desta cor.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dê-me uma mais clara.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Quanto custam estas peúgas?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Que luvas deseja?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Estas ficam-me um pouco apertadas.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Pronto, agora servem bem.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Podes recomendar-me um bom alfaiate?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Quero encomendar um fato.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Quando estará pronto?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "O fato assenta bem.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "As calças estão demasiado compridas.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Por favor, limpe-o e passe-o a ferro!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Quando estará pronto o vestido?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Os sapatos estão demasiado apertados.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Pode reparar os sapatos hoje?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Quando posso ir buscar os sapatos?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "O meu relógio de pulso não funciona.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Está adiantado cinco minutos.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "És míope ou hipermetrope?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Gostaria de comprar uns óculos.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Pode arranjar os meus óculos?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Isso só demora um quarto de hora.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "O preço é demasiado alto para mim.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Preciso de duas fotografias para o meu passaporte.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Por favor, embrulhe-o e envie-mo para casa.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Temos preços fixos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Por favor, tire-me uma fotografia.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sente-se, olhe diretamente para a câmara e não se mexa!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Quando posso ver a prova?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Quando ficam prontas as fotografias?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "A fotografia ficou bem conseguida.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "As fotografias ficaram boas.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Também pode ampliar a fotografia?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Estas pedras são verdadeiras?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Isto é ouro verdadeiro?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Mostre-me umas alianças, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "O anel está-me um pouco largo.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Posso apertá-lo.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Este anel serve-me.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Mostre-me algumas ideias bonitas para presentes.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Que achas destes brincos?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Este broche é realmente bonito.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "A pedra é uma safira.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Isto não é uma pedra verdadeira, é vidro.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Posso recomendar-lhe especialmente esta pulseira.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Está particularmente bem trabalhada.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "O preço não é alto.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Dão-me a caixa de graça?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Todas as joias estão contrastadas.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Se a minha mulher não gostar, posso trocá-lo?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Claro, a qualquer altura.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
