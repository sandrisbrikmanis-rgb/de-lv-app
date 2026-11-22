const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "¡Cuidado con eso!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Si no surge nada. • Si todo sale según lo previsto.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "¡Ya me lo imagino!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "¿Es que está enfermo?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "¿Qué pasa?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Tanto más.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Cuanto más, mejor.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Todo apunta a que lloverá.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Eso me sirve de poco.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "No puede venir por motivos de trabajo.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "¡Hable de una vez!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Truena.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "El doble de grande.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "De allí.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "El tiempo apremia.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Le agobian las preocupaciones.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "¿Has estudiado a fondo el libro?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "¡Prohibido el paso!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "¿Me concede este baile? • ¿Me acompaña, por favor?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Tengo sed.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Eso es exactamente lo que quiero decir.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "No importa en absoluto.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "¿Qué es lo que realmente quiere?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "¿Corre prisa este asunto?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "¡Muy urgente!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Tengo prisa.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Simplemente te imaginas que estás enfermo.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "¿Cómo te atreves? • ¿Qué se te ocurre?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Érase una vez.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "¡Suba, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "¡Entre, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Me gustaron algunas cosas allí.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Se recomienda.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Esta botella contiene vinagre.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "¡Discúlpeme, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "O... o...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "¿Quién fue el primero?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "¿Quién falta hoy?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "¿Qué te pasa?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "¿Cómo se llama?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "¿Qué significa eso?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "¡Por favor, acérquese!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "¡Desembucha!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "en otoño",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "¡Damas y caballeros!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "a partir de hoy",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "esta mañana",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "esta noche • anoche",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "¡Socorro!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Estudio alemán todos los días.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "¿Puedes repetir eso, por favor?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Quedamos en la estación.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Estoy en parte de acuerdo contigo.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Esta decisión tiene consecuencias de gran alcance.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Se deberían considerar varias perspectivas.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "¿Podría explicar esto con más detalle?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Por lo que a mí respecta,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "¿Cuántos años tiene?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Tengo veinte años.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "A partir de hoy.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "De aquí en adelante.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "No hay otra manera.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Llámeme.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Por favor, apague la radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Por favor, presta atención al tráfico.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Tienes que prestar atención a eso.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Hoy lo haré de otra manera.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Estamos esperando el autobús.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Vive solo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "He terminado mi formación. • He terminado mis estudios.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Esperaré a que pare la lluvia.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Trabaja en el departamento de ventas.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Soy alérgico a los gatos.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Por otro lado, lo entiendo.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "He analizado la situación.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ha aceptado mi propuesta.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Me gustaría analizarlo con más detalle.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Me gustaría modificar el contrato.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Cambia constantemente de opinión.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Ya hemos tenido problemas parecidos antes.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "¡Ni idea!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Deja de quejarte.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Este vestido es de un estilo elegante y conservador.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Me gusta escuchar música de acordeón.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "¿Puedes hacer clic en el dispositivo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Por favor, abre el archivo y haz clic en él.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "He tenido un accidente.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Vamos andando a la estación.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Por favor, enciende la televisión.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mi ordenador se ha colgado.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Iré a pescar el fin de semana.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "He perdido la llamada.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "¿Puedes llamarme más tarde?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Por favor, acepta mi propuesta.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Acepto tu oferta.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Aceptó la invitación.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Tengo miedo de las arañas.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "No tengas miedo, todo saldrá bien.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Tener buena acogida.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Depende.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Con este motivo.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Supongamos que...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "¿Qué lío has armado ahí?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Hasta el final.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Parece que no me crees.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "En mi opinión...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "¡No hagas tanto teatro!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Empezar a trabajar.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Estar sin aliento.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "¡Buen provecho!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "De un tirón.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "En cualquier caso. • Sin duda.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "De repente todo quedó en silencio.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "¡Por favor, abre la puerta!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Ha contratado el préstamo.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Tenemos que recoger hoy.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Ahora paro.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Ya está levantado.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Tenemos que aplazar la reunión.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ella me irritó.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "De repente.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "En el acto.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Hacerse cargo de los daños.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "¡Abre la puerta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sentarse derecho.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Está levantado.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Emplear todas las fuerzas.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Esforzarse mucho.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "¡Quítate de mi vista!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "A solas.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Por falta de tiempo.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Por esta razón.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Todos menos tú.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Dar importancia a las apariencias.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "En el peor de los casos.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Extremadamente importante.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Vista al mar.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Tiene buenas posibilidades.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "¿Cómo se pronuncia esta palabra?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Dar el pésame.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "¿Cuándo se disputó el campeonato?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "¿Qué profesión ejerce usted?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Influir.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Comer fuera.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Por ferrocarril.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "En tren.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Lo antes posible.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Tengo mucho miedo.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Aplazar. • Dar largas.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Pagar en metálico.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Extraer mineral.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Meter la pata.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Me lo han encargado.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Según sea necesario.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Lo siento por él.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "¿Qué significa esta palabra?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "A condición de que...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Parece abatida.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Seguir las indicaciones.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Obedecer órdenes.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Enviar por correo.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Tengo muchas ganas de saberlo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Al principio.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Al principio.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Al comenzar.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "En compañía.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Con su acompañante.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Es duro de mollera.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Guardar en la memoria.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "A la mesa.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Estar en sus cabales.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "De día.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ni mucho menos.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Ambos.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Estalló un aplauso atronador.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Tener buena acogida.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Expresar sus condolencias.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Valerse por sí mismo.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Por ejemplo.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Prestar ayuda.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Hacer una aportación.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Conocer a alguien.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Entablar una relación. • Establecer contacto.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Panecillos rellenos.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Como desee.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "En cualquier momento.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Guardar silencio.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Por comodidad.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Estar preparado. • Estar dispuesto.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Rescatar a las víctimas de un accidente.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Presentar un informe.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Todos los asientos están ocupados.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Una escoba nueva barre bien.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Es dueño de una casa.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Tiene mucho valor.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Tanto mejor.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "¡Que te mejores!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Por más que quisiera.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Lo mejor.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Hay dudas.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Su tarea consiste en...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Dar recuerdos.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Sin duda.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Venir de visita.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Estar de visita.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Ir a menudo a conciertos.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "¿A qué escuela fue?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Tener en cuenta. • Considerar.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "No tener en cuenta.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Dirige un hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Ambos.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Pagar todo.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Respecto a algo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "De nada. • Aquí tiene.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "¿Perdón?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "No hay de qué. • Aquí tiene.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Tengo que pedirle un favor.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Tocar la trompeta.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Hojear un libro.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Con los pies descalzos.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "A simple vista.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "¡Gracias por el cumplido!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Todo va sobre ruedas.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Por favor, comprobar.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "¡Ahí está!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Todo apunta a ello.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "No es culpa mía.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Estoy en contra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "No tengo nada en contra.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Desde casa.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Mover la dama.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Se está haciendo de noche. • Amanece.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "¡Muchas gracias!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "De vez en cuando.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Puedes contar con eso.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "No saldrá nada de ello.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "De modo que...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "¿Por quién me toma?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "¡Fuera las manos!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "¡No te desanimes!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "en casa",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "ir a casa",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "de origen • por naturaleza",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "¡Mi más cordial enhorabuena!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "¡Haga el favor!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "¡Tenga la bondad!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "¿Qué te pasa?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "¡Permítame, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "¿Se puede fumar?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Tengo que admitir que...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "ayer por la mañana",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "anoche",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "No me importa si...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "¿Qué ha pasado?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "¡No armes jaleo! • ¡No hagas tonterías!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Mucho menos...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "¡Siga recto!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "¿Cómo está usted?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pregúntale cuando tengas ocasión si...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "mañana por la mañana",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "en primavera",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "¿Qué hay de nuevo?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "De esta carta se desprende que...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "¡Continúa!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "No es amigo de...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Resultó que...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "¿Te acuerdas de mí? • ¿Piensas en mí?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "en invierno",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "¿De qué año es usted?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Me da pena ver...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "cuanto más, mejor",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "hasta ahora",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "¿Cómo llego a la estación?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "¡Ven aquí!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "¿Podría hablar con la señora N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "¿Cuánto cuesta?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "¿Cuánto dura la función?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "¡Basta! • ¡Déjalo!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "¡Déjame en paz!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "¡Permítame ayudarle!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "¡Vamos!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Bueno, ¿qué tal va?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "¡Viva!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "¡Que le vaya bien!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "¿Qué pasa?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "El trabajo es agotador.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Fue un día agotador.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Aprender alemán puede resultar agotador.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Exige una explicación.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "El vendedor pide demasiado dinero.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "La ley lo exige.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "No es tan difícil, ni mucho menos.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "No tengo nada de dinero.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "No ha dicho nada de nada.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "El perro anda suelto.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Aquí pasan muchas cosas.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "¡Cállate ya! • ¡No exageres!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "¿Qué estás haciendo?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "¡Dime!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "¿Qué quiere decir con eso?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vamos con usted.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Viajo en tren.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "el miércoles",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Puede ser.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "No me gusta.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "el lunes",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "¡Buenos días!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "por la mañana",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "¡Buenas noches!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "¡Tome asiento!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "¡La última novedad!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "¿Verdad?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "¡Qué va! • ¡No, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "¡Por fin!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "¿Para qué sirve?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "¿Para qué sirve todo esto?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "¡Prohibido aparcar!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "¡No aparcar!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Tiene razón.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "¿De qué se trata?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "De eso, ni hablar.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "¡Buen viaje!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Se me está acabando la paciencia.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Dicen que...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "¡Está bien!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "¡Aquí tiene! • ¡De nada!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "¿Cuánto debo? • ¿Cuánto tengo que pagar?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "¡Agite antes de usar!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "¡Mire!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Por mucho que...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "¿Desde cuándo?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "¿Qué tengo que hacer?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "en verano",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "No solo..., sino también...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "¿Algo más?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "¡Bromas aparte!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "¿Qué hora es?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "¡Cerrado al tráfico!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "¿Habla alemán?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "En lugar de...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "¿Cómo va?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Este sombrero le sienta bien.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "¡Buenos días! • ¡Buenas tardes!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "¿Dónde quedamos?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "¡Acérquese!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "La honestidad es una virtud.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Tengo mucho que hacer.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "¡No está mal!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Vive encima de mí.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Está convencido de ello.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Así se acostumbra.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tu reloj atrasa.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "¿Qué hora es?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "A las ocho de la mañana.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "tanto más",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "¡Derecha, ar!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "¡Y tanto!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "a saber",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "A costa de...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Estaba sentado entre los espectadores.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "¡De nada!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Sucedió según lo acordado.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "¡Prohibido fumar!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "¡Se ha equivocado de número!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "¡Prohibida la entrada!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "¿Me entiende?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "No entiende nada de eso.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Defender su opinión.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Provocar una discusión.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mucho mejor.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Demasiado.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "De oídas.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "De vez en cuando.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "De profesión.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Es berlinés de nacimiento.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Está de pie delante de la ventana.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Antes del amanecer.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Hace dos semanas.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "De alegría.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Sobre todo.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "De antemano.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "A condición de que...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Bajo reserva.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Existir. • Estar disponible.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "La semana pasada.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Tomar precauciones.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ella me resulta familiar.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Le gusta mucho la literatura.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Esta mañana.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Desde delante. • Desde el principio.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Hacia adelante.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Desde el primer momento.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Estar en ventaja.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Estar despierto.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Despertarse.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Estar de guardia.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Durante un año.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Durante la guerra.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Predicar en el desierto.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Aquí las paredes oyen.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "¿Hasta cuándo?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Hace calor.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Esperar un mensaje.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "¿Qué quiere usted?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "¿Qué clase de...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "A medio camino.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "De esta manera. • Por este medio.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Por medios pacíficos.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Por nuestra amistad.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Por derecho.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Doler. • Hacer daño.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Por Navidad.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "¿De qué manera?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Manera.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Sin más. • Sin dificultad.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Hasta nuevo aviso.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Y así sucesivamente.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nada más.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "¿Qué día?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Todo el mundo.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Dentro de unos días.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Demasiado poco.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Aunque.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "¿Quién vive? • ¿Quién está ahí?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Obras completas de Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Obras escogidas.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Merece que...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Vale dos euros.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Al oeste.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Del oeste.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Competir.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Echar una carrera.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "¿Qué nos apostamos?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "¿Qué tiempo hará?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Competición de gimnasia.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Contra mi voluntad.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestar. • Plantear objeciones.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "¿Cuántos años tiene?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "¿Cuánto tiempo?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "¡Hasta pronto!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "¡Adiós!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Animales salvajes.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "¡Bienvenido!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Te toca mover.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Hay corriente.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Bastante frío.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Punta de salchicha.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Ir a verlo.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ir a la escuela.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Quedarse en casa.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "De día en día.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Afortunadamente.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Agua para beber.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "A pie.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "A caballo.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "En bicicleta.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Dejó de llover.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Todavía tengo mucho que hacer.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Demasiado pronto.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Demasiado grande.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Encogerse de hombros.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Beber de un trago.",
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
    "lv": "Por primera vez.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "¡Cierre la puerta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Ha engordado.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Los días son cada vez más largos.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Estar relacionado con algo.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "La puerta está cerrada.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "No lo habría creído capaz de algo así.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Entrada libre.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "¡Prohibida la entrada!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "¡Es demasiado!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Volverse repugnante.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "A saber.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Está fuera de toda duda.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Sin duda.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "En segundo lugar.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "¡Feliz año nuevo!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "¡Feliz cumpleaños!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "¡Buen viaje!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Es un placer conocerlo.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "¿Sería tan amable, por favor?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Le estoy muy agradecido.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "¡Sentaos, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, ¡ven a la pizarra, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "¡Abrid los libros de texto, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "¡Id al gimnasio, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "¿Todavía estás durmiendo?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "¿Todavía está durmiendo?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Se ha quedado profundamente dormido.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "¡Por favor, despiértalo; ya es tarde!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "¡Lo siento mucho!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "¡Muchas gracias!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, ¡empieza, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "¡Seguid la lectura, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ¡no mires por la ventana, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, ¡trae los cuadernos, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "¡Vuelve a tu sitio, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Son las siete y media.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "¿Cuándo sueles despertarte?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Me levanto enseguida.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "¡Levántate, Hanna, que suena el despertador! • ¡Levántate, Hanna, que llaman a la puerta!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "¡Déjame dormir cinco minutos más!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "¡No olvides ventilar la habitación!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "¿Dónde está la toalla?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Quiero cepillarme los dientes.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "¿Con qué te cepillas los dientes?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Quiero vestirme.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "¡Vístete rápido, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Abrígate más, que fuera hace fresco.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Buenos días, ¿cómo estás?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Estoy bien, gracias.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "¿Qué hay de nuevo?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "¡Qué desastre hay aquí!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "¿Puedo ayudar a ordenar?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "¿Qué bebes por la mañana, café o té?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Normalmente tomo una taza de café por la mañana.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Prefiero el café solo.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Buenos días, ¿has dormido bien?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Todavía estoy muy cansado.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "¿Quieres café o leche?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Dame un panecillo con queso, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "¡Me tengo que ir ahora!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "¡No olvides el desayuno!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, ¡pon la mesa, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "¡No te olvides de las servilletas!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "¿Cuándo coméis?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Es hora de comer.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "¿Qué hay de comer hoy?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "¿Qué te parece la sopa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Sinceramente, está un poco salada de más.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "¿Puedo darte una rebanada de pan?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Gracias, ya tengo.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "La carne está exquisita.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Gracias, ya estoy lleno.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Hoy tenemos visitas.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "¿Estás libre esta noche?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "¡Pásate hoy a comer!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sentémonos a la mesa.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "¡Por favor, sírvete!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "¿Te molesta que fume?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "¡Gracias por la amable acogida!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "¿Cuándo te acuestas?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Siempre estoy cansado cuando llego a casa del trabajo.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Es hora de ir a dormir.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Hace buen tiempo.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "¿Quieres dar un paseo conmigo?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Mira, va a llover enseguida.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "¡Llévate el paraguas!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Está lloviendo.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Ya estoy completamente mojado.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "¿Crees que va a llover todo el día?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Deja de llover.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "El sol vuelve a brillar.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Hace mucho calor.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Parece que va a llover.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Enseguida va a haber tormenta.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "La tormenta está pasando.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Las nubes se están dispersando.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "¿Ves el arcoíris?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "El invierno ya está aquí, ha nevado.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Está nevando.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "¡Qué bonito es el bosque en invierno!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Tengo frío, me estoy congelando.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Fuera hay placas de hielo, ¡ten cuidado!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "¿Vamos a patinar sobre hielo?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Ponte la chaqueta, podrías resfriarte.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Son las seis y media.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mi reloj adelanta cinco minutos.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "¡Despiértame mañana a las siete!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "¿Qué fecha es hoy?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Hoy es once de julio.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "¿Qué sueles hacer por las noches?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Hace mucho tiempo que no nos vemos.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "¿Cómo estás?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Perdona, quiero hablar contigo de algo.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "¡Vamos a dar un paseo!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "¿Te apetece ir al parque conmigo?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Vengo a recogerte para dar un paseo.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "¡Ve un poco más despacio, por favor, no puedo seguirte!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Es la primera vez que estoy en esta zona.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Descansemos un poco.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Ahora podemos volver.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Francamente, estoy bastante cansado.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Perdona, ¿dónde está la estación de metro más cercana?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "¿Cuál es el camino más corto?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Aquí toma la segunda calle a la izquierda y luego sigue todo recto.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "¿Cómo llego más rápido a la estación?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Tengo pensado irme de viaje mañana.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "¿A dónde quieres ir?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "¿Viajas por trabajo o por placer?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn viene con nosotros hasta Berlín y luego se va al mar.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "¿Cuándo sale el barco?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Dentro de media hora.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "¿Aún puedo conseguir un camarote?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "¡No olvides tu pasaporte!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Es hora de hacer la maleta.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "El tren sale a las seis y media.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "¡Pídeme un taxi, por favor, o perderé el tren!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "¡Llévame a la estación, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Tengo que darme prisa.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "¿Ya está abierta la taquilla?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Un billete a Colonia, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "¿Cuándo sale el tren?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "El tren está a punto de salir.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "¿Tengo que hacer transbordo en Coblenza?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Sí, tienes que hacer transbordo allí.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "¿Está libre este asiento?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "No, no hay nadie sentado aquí.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "¿Dónde está la máquina expendedora de billetes de andén?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Pon mi equipaje de mano en el portaequipajes.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "¿Puedo abrir la ventana?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Hay corriente, ¡cierra la ventana, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "¿Cuál es la próxima parada?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "¿Cuánto tiempo está parado el tren?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "¿Dónde tengo que hacer transbordo?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "El tren lleva retraso.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Este vagón es para no fumadores.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Ahora estamos cruzando la frontera.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "¿Tienes algo que declarar?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Hemos llegado a Berlín.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "¿Puedes recomendarme un buen hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "¿Tiene habitaciones disponibles?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Una habitación con dos camas, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "¿Cuánto cuesta la habitación por noche?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Me voy mañana. ¡Despiértame a las siete!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "¡La cuenta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "¿Dónde está la biblioteca de la ciudad?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "¿Cuándo está abierto el museo?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "¿Vamos al museo?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "¿Vamos en autobús o en metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "¿Dónde está la parada de autobús más cercana?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Tengo mucha hambre.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "¿Vamos a comer juntos?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Camarero, ¡la carta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "¿Está fresco el pescado?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "¡Esto sabe de maravilla!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Camarero, ¡la cuenta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Voy a la cafetería a tomar un café.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "¿Quieres venir?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "¡Una taza de café con leche, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "¡Más rápido, por favor, que tengo prisa!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "¡No dejes que el café se enfríe!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "¿Tiene algo refrescante?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "¡Un helado, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Esta mañana he recibido una carta.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Debo escribirle enseguida.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "¿Dónde está el buzón más cercano?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "¿Dónde está la oficina de correos?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "¡Recuérdame mañana que escriba!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Por favor, eche esta carta al buzón.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hola, soy Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "¿Puedo llamarte más tarde?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "¿Tengo que esperar mucho?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Por favor, córteme el pelo.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Por detrás, por favor, no demasiado corto.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "¿Cuándo empieza la función?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Empieza a las siete y media.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Todas las entradas están agotadas.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "¡Tres entradas, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Dejamos las chaquetas en el guardarropa.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "¡Deprisa, por favor, que el telón está a punto de levantarse!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Cae el telón.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "¿Puedo invitarte a bailar?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "¿Cuándo es vuestra boda?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Estoy buscando piso.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "¿Hay algún piso libre en este edificio?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "¿Cuánto cuesta el alquiler?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "El piso tiene tres habitaciones y una cocina.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Nos mudamos hoy.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, ¡mete las cosas en cajas, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "¿Lo has empaquetado todo?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Estoy en contacto con mi amigo.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "¿Vamos al teatro?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "¿Está todo cargado?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "¡Qué hermosa vista!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Ahora podemos volver a ordenar todo.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "¿Cuántas habitaciones tenéis?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "En verano iré a la playa.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "¿Sabes nadar?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "¡No nades demasiado lejos!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "¿Te bañas todos los días?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Si hace buen tiempo, voy a pescar.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "¿Qué aspecto tiene?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Pues sí que ha cambiado bastante.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "¿Cómo es él como persona?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Siempre es agradable y simpático.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "No me encuentro bien.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Tengo un fuerte dolor de cabeza.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Me he resfriado.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Me moquea la nariz.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Estoy mareado.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Tengo que ir al médico.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "¡Métete en la cama!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "¿Tienes fiebre?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Ayer tuve unas décimas de fiebre.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Tengo dolor de muelas.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Tengo que ir al dentista.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "¿Sabes que Finn está enfermo?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Según el médico, pronto se recuperará.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Quiero amueblar de nuevo mi piso.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "¿Puedo comprarlo a plazos?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "¡Quédate en la cama hasta que te encuentres mejor!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah aprendió a nadar en dos semanas.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Sigue teniendo cuidado con la comida.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "¿Hablas alemán?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Sí, un poco.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Hablas con bastante fluidez.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "¿Dónde aprendiste alemán?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Llevo un año tomando clases de alemán.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Siempre busco la oportunidad de hablar alemán.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "¿Todavía tienen el libro en existencias?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Lamentablemente, el libro está agotado.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "¿Cuándo saldrá la nueva edición?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "¿En qué puedo ayudarle?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "¿Tiene huevos muy frescos?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "¿Cuánto cuestan?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Es demasiado caro.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "¿Puede pesarme medio kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "¿Cuánto tengo que pagar?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "¿Cuánto cuesta el kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Péseme dos kilos, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "¿Tiene también zanahorias?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "¿Tiene buena carne de vacuno?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Deme dos kilos de carne picada.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Una hogaza de pan, por favor, pero no demasiado crujiente.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "El pan está recién horneado.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "¿Qué tipo de fruta tiene hoy?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "¿Cuánto cuestan las manzanas?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Entonces me llevo dos kilos de manzanas.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Las peras son muy caras.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "¿Puede llevármelo todo a casa?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "¿Tiene arroz?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Deme un kilo de arroz, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Gracias, esta vez no.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "¿Cuánto cuesta esta alfombra?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "¿Pueden llevarme los muebles a mi piso?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Por favor, pague en caja.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Por favor, hágame la factura.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "¿Cuánto cuesta el metro?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Me gusta esta tela.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Por favor, córteme tres metros.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "¿Tiene también otros estampados? • ¿Tiene también otras muestras?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "No me gusta este color.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Deme uno más claro.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "¿Cuánto cuestan estos calcetines?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "¿Qué guantes desea?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Me quedan un poco estrechos.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Bueno, ahora sí que quedan bien.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "¿Puedes recomendarme un buen sastre?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Quiero encargar un traje.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "¿Cuándo estará listo?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "El traje queda bien.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Los pantalones son demasiado largos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "¡Por favor, límpielo y plánchelo!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "¿Cuándo estará listo el vestido?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Los zapatos son demasiado estrechos.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "¿Puede arreglar los zapatos hoy?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "¿Cuándo puedo recoger los zapatos?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mi reloj de pulsera no funciona.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Adelanta cinco minutos.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "¿Eres miope o hipermétrope?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Me gustaría comprar unas gafas.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "¿Puede arreglar mis gafas?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Eso solo tardará un cuarto de hora.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "El precio es demasiado alto para mí.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Necesito dos fotos para mi pasaporte.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Por favor, empaquételo y envíemelo a casa.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Tenemos precios fijos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Por favor, hágame una foto.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "¡Siéntese, mire directamente a la cámara y no se mueva!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "¿Cuándo puedo ver la foto de prueba?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "¿Cuándo van a estar listas las fotos?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "La foto ha salido muy bien.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Las fotos han salido bien.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "¿También puede ampliar la foto?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "¿Son auténticas estas piedras?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "¿Es oro auténtico?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Enséñeme unas alianzas, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "El anillo me queda un poco grande.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Puedo estrecharlo.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Este anillo me queda bien.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Enséñeme algunas ideas bonitas para regalar.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "¿Qué te parecen estos pendientes?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Este broche es muy bonito.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "La piedra es un zafiro.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Esta no es una piedra auténtica, es vidrio.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Puedo recomendarle especialmente esta pulsera.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Está especialmente bien elaborada.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "El precio no es alto.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "¿Me dan la caja gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Todas las joyas llevan contraste.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Si a mi esposa no le gusta, ¿puedo cambiarlo?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Por supuesto, en cualquier momento.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
