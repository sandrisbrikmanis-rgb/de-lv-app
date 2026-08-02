const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "¡Cuidado con eso!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Si nada interfiere. • Si todo va según lo planeado.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "¡Yo sé eso!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "¿Está enfermo entonces?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "¿Entonces qué?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Cuanto más.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Cuanto más mejor.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Todo apunta al caso.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Para mí tiene poco sentido.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "No puede venir por motivos de trabajo.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "¡Hablar alto!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "El trueno ruge.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "El doble de grande.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "De eso.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "El tiempo se acaba.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Está abrumado por la preocupación.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "¿Has leído el libro detenidamente?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "¡No pases! • ¡Salida cerrada!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "¿puedo preguntarte?",
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
    "lv": "¿Qué es lo que realmente quieres?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "¿Es este asunto urgente?",
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
    "lv": "Simplemente imagina que estás enfermo.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "¿Qué te viene a la mente?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Una vez lo hubo.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "¡Por favor entra!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "¡Por favor entra!",
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
    "lv": "¡Discúlpame, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "O... o...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "¿Quién fue primero?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "¿Quién no ha venido hoy?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "¿Qué sucede contigo?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "¿Cómo te llamas?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "¿Qué significa eso?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "¡Por favor acércate!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "¡Hablar! • ¡Historias!",
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
    "lv": "anoche",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "¡Ayuda!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Estudio alemán todos los días.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "¿Puedes repetir eso por favor?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Nos encontramos en la estación de tren.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Estoy en parte de acuerdo contigo.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Esta decisión tiene consecuencias de largo alcance.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Se deben considerar varias perspectivas.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "¿Podrías explicar esto con más detalle?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "En cuanto a mí...",
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
    "lv": "Llámame.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Por favor apaga la radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Por favor preste atención al tráfico.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Deberías prestar atención a eso.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Hoy lo haré diferente.",
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
    "lv": "Terminé mi entrenamiento. • Terminé mi educación.",
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
    "lv": "Analicé la situación.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ella aceptó mi propuesta.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Quiero analizarlo con mayor precisión.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Quiero cambiar el contrato.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Cambia constantemente de opinión.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Tuvimos problemas similares antes.",
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
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Este vestido es elegantemente conservador.",
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
    "lv": "Abra el archivo y haga clic en él.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Tuve un accidente.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Nos dirigimos a la estación.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Por favor enciende la televisión.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mi computadora ha fallado.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Iré a pescar el fin de semana.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Perdí la llamada.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "¿Puedes llamarme más tarde?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Por favor acepte mi propuesta.",
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
    "lv": "No tengas miedo, todo estará bien.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Encuentra un eco. • Encuentre capacidad de respuesta",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Depende de eso.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Por esta época. • A este respecto",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Supongamos que...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "¿Qué has hecho allí?",
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
    "lv": "¡No finjas!",
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
    "lv": "¡Buen apetito!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "En un suspiro.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "En cada caso.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "De repente todo quedó en silencio.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "¡Por favor abre la puerta!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Tomó un préstamo.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Tenemos que ordenar la habitación hoy.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Me detendré ahora.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Él ya está levantado.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Tenemos que reprogramar la reunión.",
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
    "lv": "Inmediatamente.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Cubrir los daños.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "¡Abre la puerta, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Erguirse.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Se ha puesto de pie.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Dedica todas tus fuerzas.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Esfuérzate mucho.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "¡No me mires más!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "En dos. • En silencio",
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
    "lv": "Dale importancia a la apariencia.",
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
    "lv": "Expresar condolencias.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "¿Cuándo fue el campeonato?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "¿Cuál es tu profesión?",
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
    "lv": "Por ferrocarril.",
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
    "lv": "Aplazar. • Arrastrar hasta el final • Posponer indefinidamente",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Pagar en metálico.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Consigue mineral.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Disparar. • Haz el ridículo",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Me han asignado un trabajo.",
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
    "lv": "Siempre que...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Parece deprimida.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Sigue las instrucciones.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Sigue órdenes.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Enviar por correo.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Realmente quiero saberlo.",
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
    "lv": "A partir de",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Acompañado.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Con acompañamiento.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Es lento para percibir. • Tiene un pensamiento lento",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Recordar. • Mantener en la memoria",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "A la mesa.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Estar cuerdo.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Durante el día.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "De nada.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Ambos dos.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Hubo un estruendoso aplauso.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Obtener el consentimiento.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Expresar condolencias.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Ser financieramente independiente.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Por ejemplo.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Para ayudar. • Proporcionar asistencia",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Invierta su parte.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Conoce a alguien.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Conózcanse unos a otros. • Establecer contacto",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sándwiches con aderezos.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Como desées.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "En cualquier momento.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Observar el silencio.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Por conveniencia.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Estar preparado. • Estar en paz",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Rescatar a las víctimas en caso de accidente.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Informe. • Proporcionar un informe. • Proporcionar una descripción general.",
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
    "lv": "Tiene un gran coraje.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Cuanto mejor.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "¡Reponerse! • ¡Reponerse!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Lo que quieras.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "El mejor.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Hay dudas.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Su tarea es...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Saluda.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Definitivamente. • Completamente seguro",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Ven a visitarnos.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Para visitar. • Para visitar",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "A menudo van a conciertos.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "¿A qué escuela fue?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Tener en cuenta. • Considerar",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Indiferencia. • No considere",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Dirige un hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Ambos dos.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Paga todo.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Respecto a algo.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Por favor",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "como por favor",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Por favor",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Tengo una solicitud para ti.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Toca la trompeta.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Ordena el libro.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Pies descalzos.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "A simple vista.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "¡Gracias por las flores!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Todo está bien.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Controlar. • Controlar",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "¡Aquí está!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Todo habla bien.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "No puedo hacer nada allí.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Estoy en contra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "No tengo ninguna objeción a eso.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Desde casa.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Haz un movimiento de dama.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Se está haciendo de noche. • Amanece.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "¡Gracias! • ¡Gracias!",
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
    "lv": "¿Qué crees que soy?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "¡Fuera las manos!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "¡No bajes la cabeza!",
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
    "lv": "desde la niñez • desde el principio",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "¡Felicidades!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "¡Sea tan amable! • ¡Sé tan bueno!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "¡Sea tan amable!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "¿Qué sucede contigo? • ¿Qué pasó?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "¡Permíteme, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "¿Puedo fumar?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Tengo que admitir que...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "temprano ayer por la mañana",
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
    "lv": "¿Qué pasó?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "¡No hagas tonterías! • ¡No hagas bromas!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Sin mencionar eso. • ¿Dónde más?",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "¡Sigue recto!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "¿Cómo estás? ¿Cómo estás?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pregúntale si sale si...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "mañana por la mañana",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "en la primavera",
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
    "lv": "¡Avanza!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "A él no le gusta...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Resultó que...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "¿Te acuerdas de mí? ¿Has pensado en mí?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "en invierno",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "¿En qué año naciste?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Triste de ver...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "cuanto más mejor",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "hasta ahora",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "¿Cómo llegar a la estación?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "¡Ven aquí!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "¿Puedo hablar con la señora N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "¿Cuánto cuesta?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "¿Cuánto durará la actuación?",
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
    "lv": "¡Déjame ayudarte!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "¡Vamos!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Cómo estás",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "¡Viva!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "¡Viva sano! • ¡Adiós!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "¿Qué pasó?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "El trabajo es agotador.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Fue un día ajetreado.",
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
    "lv": "No es tan difícil en absoluto.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "No tengo dinero en absoluto.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "No dijo nada en absoluto.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "El perro ha sido liberado.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Están sucediendo muchas cosas aquí.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "¡Contén la respiración!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "qué estás haciendo",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "¡Di que sí!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "¿Qué quieres decir con eso? • ¿Qué opinas?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Nosotros vamos contigo.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Viajo en tren.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "El miércoles",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Tal vez.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "No me gusta.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "los lunes",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "¡Buen día!",
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
    "lv": "¡Sentarse!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "¡Las últimas noticias!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "¿bien?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "¡No, por supuesto! • ¡No!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Bueno, ¡por fin!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "¿Para qué sirve?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "¿Para qué es todo esto?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "¡Está prohibido aparcar!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "¡Está prohibido aparcar!",
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
    "lv": "Eso está fuera de discusión.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "¡Se usa viaje!",
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
    "lv": "¡Ya está bueno!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "¡Por favor!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "¿Cuánto debo? • ¿Cuánto tengo que pagar?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Agitar antes de usar!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "¡Echa un vistazo!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Cuánto cuesta...",
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
    "lv": "en el verano",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "No sólo... sino también...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "¿Algo más?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "¡No es broma! • ¡Bromas al límite!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "¿qué hora es?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "¡Está prohibido circular!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "¿Hablas alemán?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "En lugar de...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Cómo estás",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Este sombrero le sienta bien.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "¡Hola!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "¿Dónde nos encontraremos?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "¡Acércate!",
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
    "lv": "¡Muy bien! • No hay ninguna objeción",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Él vive encima de mí.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Está seguro de ello.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Se acepta.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tu reloj está atrasado.",
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
    "lv": "cuanto más",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "¡Gire a la derecha!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "¡Y qué más!",
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
    "lv": "Se sentó entre la audiencia.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "¡Nada por nada!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Sucedió según lo acordado.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "¡Está prohibido fumar!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "¡Conexión incorrecta!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "¡La entrada está prohibida!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "¿Me entiendes?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Él no entiende nada al respecto.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Defiende tu opinión.",
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
    "lv": "Después de escuchar.",
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
    "lv": "Él está parado junto a la ventana.",
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
    "lv": "Por diversión.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "En primer lugar. • En primer lugar",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Previamente.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Suponiendo que...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Condicionalmente.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Ser. • Estar presente • Estar disponible",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "La semana pasada.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Tomar medidas de protección.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ella me resulta familiar.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Le gusta mucho la literatura.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Esta mañana. • Hoy por la mañana",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Desde el frente.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Adelante.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Al principio.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Estar en una mejor posición.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Estar despierto.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Despertar.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Haz guardia.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Durante el año.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Durante la guerra.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Habla en vano.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Aquí las paredes tienen oídos.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "¿Hasta cuando?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Es cálido.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Espere el mensaje.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "¿Qué deseas?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "OMS...? • ¿Qué pasa con...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "A medio camino.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "De esa manera. • Para dichos fondos",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "En el camino de la paz.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Por nuestra amistad.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Por la justicia.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Para lastimar.",
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
    "lv": "Tipo.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Inmediatamente. • Inmediatamente",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Hasta nuevo aviso.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Etcétera.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Nada más.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "¿En qué día?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "El mundo entero. • Todos",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "En algunos días.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Muy poco.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "A pesar de.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "¿Qué hay ahí?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Los escritos completos de Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Una selección de obras.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Él merece...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Cuesta dos euros.",
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
    "lv": "Entra en la competición.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Corre la carrera.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "¿Qué estamos negociando?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "¿Cómo será el clima?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Competiciones de gimnasia.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Contra mi voluntad.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Para protestar. • Plantear objeciones",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "¿Cuántos años tiene él?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "cuánto tiempo",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "¡Adiós!",
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
    "lv": "¡Saludos cordiales!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Tienes un movimiento.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Jalar",
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
    "lv": "Ve con él.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Ve a la escuela.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Quedarse en casa.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "A diario.",
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
    "lv": "Para piernas.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Sí.",
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
    "lv": "Encogimiento de hombros.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Bebe de un trago.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Perecer.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Poner sobre la base. • Tomar como base.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Por primera vez.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "¡Por favor cierra la puerta!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Ganó peso.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Los días son cada vez más largos.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Estar asociado con algo.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "La puerta está cerrada.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "No hubiera esperado eso de él.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Entrada gratuita.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "¡La entrada está prohibida!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "¡Es demasiado!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Vuélvete repugnante. • enfermarse",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "A saber.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "No hay duda.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Sin dudarlo.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "En segundo lugar.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "¡Se usa año nuevo!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "¡Se usa cumpleaños!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "¡Se usa viaje!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Me alegro de conocerte.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "¿Serías tan amable por favor?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Te estoy muy agradecido.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "¡Siéntate, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "¡Ben, por favor ven al tablero!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "¡Abre los libros de texto, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "¡Por favor ve al gimnasio!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "¿Todavía estás durmiendo?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "¿Todavía estás durmiendo?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Está profundamente dormido.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "¡Por favor despiértalo, ya es tarde!",
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
    "lv": "¡Finn, empieza, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "¡Sigue leyendo, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​¡por favor no mires por la ventana!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "¡Jonas, por favor trae los cuadernos!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "¡Vuelve a tu casa!",
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
    "lv": "Me levantaré enseguida.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "¡Levántate, Hannah, que suena el timbre!",
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
    "lv": "donde esta la toalla",
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
    "lv": "Vístase abrigado, hace frío afuera.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Buenos días, ¿cómo estás?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Estoy bien gracias.",
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
    "lv": "Yo bebo mejor café negro.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Buenos días, ¿dormiste bien?",
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
    "lv": "Dame un panecillo de queso, por favor.",
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
    "lv": "¡Clara, por favor pon la mesa!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "¡No te olvides de las servilletas!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "cuando almuerzas",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Es hora de comer.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "¿Qué hay para almorzar hoy?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "¿Cómo te gusta la sopa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Francamente, es demasiado salado.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "¿Puedo darte una rebanada de pan?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Gracias, ya lo tengo.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "La carne sabe muy bien.",
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
    "lv": "¡Ven a almorzar hoy!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sentémonos a la mesa.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "¡Por favor come todo lo que quieras!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "¿Le molesta fumar?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "¡Gracias por la cálida bienvenida!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "cuando te vas a dormir",
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
    "lv": "Es un buen momento.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "¿Quieres caminar conmigo?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Mira, pronto lloverá.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "¡Lleva un paraguas contigo!",
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
    "lv": "La lluvia cesa.",
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
    "lv": "Estamos a punto de tener una tormenta.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "La tormenta ha pasado.",
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
    "lv": "El invierno ya está aquí, nevó por la noche.",
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
    "lv": "Afuera está resbaladizo, ¡cuidado!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "¿Vamos a patinar sobre hielo?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Ponte una chaqueta, podrías resfriarte.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Son las siete y media.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mi reloj está adelantado cinco minutos.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "¡Despiértame mañana a las siete!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "¿Cuál es la fecha de hoy?",
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
    "lv": "Cómo estás",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Disculpe, quiero discutir algo con usted.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "¡Vamos a caminar!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "¿Quieres ir al parque conmigo?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Vine a llevarte a caminar.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "¡Ve un poco más lento, no puedo seguirte!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Estoy aquí por primera vez.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Descansemos un poco.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Ahora podemos regresar.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Francamente, estoy bastante cansado.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Disculpe, ¿dónde está la estación de metro más cercana?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "¿Cuál es el camino más corto?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Aquí toma la segunda calle a la izquierda y sigue recto.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "¿Cómo llegar más rápido a la estación?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Tengo la intención de irme mañana.",
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
    "lv": "Finn conducirá hasta Berlín y luego irá al mar.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "¿Cuándo sale el barco?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Después de media hora.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "¿Aún puedo conseguir una cabaña?",
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
    "lv": "El tren sale a las siete y media.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "¡Llame a un taxi, por favor, sino perderé el tren!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "¡Por favor llévame a la estación!",
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
    "lv": "El tren sale pronto.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "¿Tengo que cambiar de asiento en Coblenza?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Sí, tienes que cambiar de asiento allí.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "¿Está disponible este lugar?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "No, no hay nadie sentado aquí.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "¿Dónde está la máquina expendedora de billetes del andén?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Pon mi equipaje de mano en la parrilla.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "¿Puedo abrir la ventana?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "¡Sal, por favor cierra la ventana!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "¿Cuál es la próxima parada?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "¿Cuánto tiempo permanece parado el tren?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "¿A dónde debo transferirme?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "El tren llega tarde.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Este carruaje es para no fumadores.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Ahora estamos cruzando la frontera.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "¿Tienes algo que aclarar?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Hemos llegado a Berlín.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "¿Puedes recomendar un buen hotel?",
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
    "lv": "Camareros, menú, ¡por favor!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "¿Está fresco el pescado?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "¡Sabe muy bien!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "¡Camareros, por favor paguen!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Iré a una cafetería a tomar café.",
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
    "lv": "¡Más rápido por favor, tengo que darme prisa!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "¡No dejes que el café se enfríe!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "¿Tienes algo refrescante?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "¡Una ración de helado, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Recibí una carta esta mañana.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Debo escribirle ahora.",
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
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "¡Recuérdame firmar mañana!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "¡Por favor deje esta carta en el buzón!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hola, ella es Emma.",
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
    "lv": "Por favor córtame el pelo.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "En la parte de atrás, por favor, no demasiado corta.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "¿Cuándo empieza el espectáculo?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Empieza a las ocho y media.",
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
    "lv": "Dejemos las chaquetas en el armario.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "¡Más rápido, por favor, que el telón está a punto de abrirse!",
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
    "lv": "¿Cuándo es tu boda?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Estoy buscando un apartamento.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "¿Hay algún apartamento disponible en esta casa?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "¿A cuánto asciende el alquiler?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "El apartamento tiene tres habitaciones y una cocina.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Nos mudamos hoy.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "¡Mía, pon las cosas en cajas, por favor!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "¿Está todo ya en caja?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Estoy en correspondencia con mi amigo.",
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
    "lv": "Ahora podemos volver a armar todo.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "¿Cuántas habitaciones tienes?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Iré al mar en verano.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Sabes nadar",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "¡No nades demasiado lejos!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "¿Nadas todos los días?",
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
    "lv": "Sin embargo, ha cambiado bastante.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "¿Cómo es él como persona?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Él siempre es agradable y amable.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Me siento mal.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Tengo un fuerte dolor de cabeza.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Tengo un resfrío.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Tengo la nariz que moquea.",
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
    "lv": "¡Acuéstate en la cama!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "¿Tienes fiebre?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Ayer tuve temperatura alta.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Tengo dolor de muela.",
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
    "lv": "Quiero reformar el apartamento.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "¿Puedo comprar a plazos?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "¡Quédate en cama hasta que te sientas mejor!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah aprendió a nadar en dos semanas.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Ten cuidado con la comida.",
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
    "lv": "Siempre buscando la oportunidad de hablar alemán.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "¿Este libro todavía está disponible?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Lamentablemente el libro está agotado.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "¿Cuándo saldrá la nueva edición?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "¿Cómo puedo ayudar?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "¿Tienes huevos frescos?",
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
    "lv": "¿Puedes pesar medio kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "¿Cuanto tengo que pagar?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "¿Cuánto cuesta un kilogramo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Por favor pesa dos kilogramos.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "¿Tienes zanahorias también?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "¿Tienes buena carne?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dale dos kilogramos de carne picada.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Una barra de pan, por favor, pero no demasiado dura.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "El pan está recién horneado.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "¿Qué fruta tienes hoy?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "¿Cuánto cuestan las manzanas?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Luego tomaré dos kilogramos de manzanas.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Las peras son muy caras.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "¿Puedes entregar todo a tu casa?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "¿Tienes arroz?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Dame un kilo de arroz, por favor.",
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
    "lv": "¿Pueden entregar muebles al apartamento?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Por favor pague en caja.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Por favor emita una factura.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "¿Cuánto cuesta un medidor?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Me encanta esta tela.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Por favor corte tres metros.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "¿Tienes otras muestras?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "No me gusta este color.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dar más brillo.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "¿Cuánto cuestan estos calcetines?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "¿Qué tipo de guantes quieres?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Me quedan un poco ajustados.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Entonces, funciona bien ahora.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "¿Puedes recomendar un buen sastre?",
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
    "lv": "El traje le queda bien.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Los pantalones son demasiado largos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "¡Límpielo y plánchelo!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "¿Cuándo estará listo el vestido?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Los zapatos están demasiado apretados.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "¿Puedes arreglar tus zapatos hoy?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "¿Cuándo puedo traer los zapatos?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mi reloj de pulsera no funciona.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Son cinco minutos antes.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "¿Es usted miope o hipermétrope?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Quiero comprar gafas.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "¿Puedes arreglar mis gafas?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Sólo te llevará quince minutos.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "El precio es demasiado alto para mí.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Necesito dos fotografías de pasaporte.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Por favor empaquete y envíe a casa.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Tenemos precios fijos.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Por favor tomame una foto.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "¡Siéntate, mira directamente a la cámara y no te muevas!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "¿Cuándo puedo ver una muestra?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "¿Cuándo van a estar listas las fotos?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "La foto fue un éxito.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Las fotos salieron bien.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "¿También puedes ampliar la foto?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "¿Son reales estas piedras?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "¿Es oro real?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Muéstrame los anillos de boda, por favor.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "El anillo me queda un poco grande.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Puedo reducirlo.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Este anillo me queda bien.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Muestre hermosas ideas para regalos.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "¿Cómo te gustan estos pendientes?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Este broche es muy bonito.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Esta piedra es un zafiro.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Esto no es piedra real, es vidrio.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Puedo recomendar especialmente esta pulsera.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Está extremadamente finamente elaborado.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "El precio no es alto.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "¿Recibí la caja gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Todas las joyas están estampadas.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Si a mi esposa no le gusta, ¿puedo cambiarlo?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "En cualquier momento, por supuesto.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
