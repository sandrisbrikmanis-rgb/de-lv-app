"use strict";

module.exports = {
  SECTION_ACCENT_OVERRIDES: {
    gr: {
      also: {
        "examples[0].lv": { purple: ["γι' αυτό"] },
        "examples[1].lv": { purple: ["γι' αυτό"] },
      },
    },
  },

  LUNA_PATCHES: {
    fr: {
      unter: {
        lv: "Sous • Parmi",
        "study.translation": "Sous • Parmi",
        "study.examples[1].lv": "Le chat est couché sous la chaise.",
        "study.comparison": [
          {
            word: "unter",
            meaning: "Sous • Parmi",
            example: "Die Tasche ist unter dem Tisch. – Le sac est sous la table.",
          },
          {
            word: "über",
            meaning: "Au-dessus de",
            example: "Die Lampe hängt über dem Tisch. – La lampe est suspendue au-dessus de la table.",
          },
          {
            word: "zwischen",
            meaning: "Entre deux éléments",
            example: "Zwischen den Häusern. – Entre les maisons.",
          },
          {
            word: "auf",
            meaning: "Sur une surface",
            example: "Auf dem Tisch. – Sur la table.",
          },
        ],
      },

      Urlaub: {
        lv: "Vacances • Congé",
        "study.translation": "Vacances • Congé",
        "study.examples": [
          { de: "Mein Vater ist im Urlaub.", lv: "Mon père est en vacances." },
          { de: "Nächste Woche habe ich Urlaub.", lv: "Je suis en congé la semaine prochaine." },
          { de: "Wir machen Urlaub in Spanien.", lv: "Nous passons nos vacances en Espagne." },
          { de: "im Urlaub", lv: "en vacances" },
        ],
        "study.explanation": [
          "Idée principale : der Urlaub désigne les vacances ou le congé d’une personne, notamment par rapport au travail.",
          "On dit im Urlaub sein pour être en vacances et Urlaub machen pour prendre ou passer des vacances.",
          "Die Ferien désigne surtout les vacances scolaires ou universitaires et s’emploie au pluriel.",
        ],
        "study.comparison": [
          {
            word: "der Urlaub",
            meaning: "Vacances ou congé d’une personne",
            example: "Mein Vater ist im Urlaub. – Mon père est en vacances.",
          },
          {
            word: "die Ferien",
            meaning: "Vacances scolaires ou universitaires",
            example: "Die Kinder haben Ferien. – Les enfants sont en vacances.",
          },
        ],
        "study.important": [
          "Urlaub : im Urlaub sein / Urlaub machen.",
          "Ferien s’emploie surtout pour les vacances scolaires ou universitaires.",
        ],
      },

      verstehen: {
        "study.examples[0].lv": "Je te comprends.",
        "study.examples[1].lv": "Comprends-tu l’allemand ?",
        "study.examples[2].lv": "Je ne comprends pas cette phrase.",
        "study.examples[3].lv": "Nous nous comprenons bien.",
        "study.comparison": [
          {
            word: "verstehen",
            meaning: "Comprendre",
            example: "Ich verstehe dich. – Je te comprends.",
          },
          {
            word: "können",
            meaning: "Pouvoir • Savoir faire",
            example: "Ich kann schwimmen. – Je sais nager.",
          },
          {
            word: "wissen",
            meaning: "Savoir un fait",
            example: "Ich weiß das. – Je le sais.",
          },
          {
            word: "kennen",
            meaning: "Connaître",
            example: "Ich kenne ihn. – Je le connais.",
          },
        ],
        "study.important": [
          "verstehen = comprendre ; wissen = savoir ; kennen = connaître ; können = pouvoir ou savoir faire.",
        ],
      },

      vom: {
        lv: "Du • De la • De chez",
        "study.translation": "Du • De la • De chez",
        "study.explanation": [
          "vom est la contraction de von + dem.",
          "Il s’emploie avec un nom masculin ou neutre au datif.",
          "Selon le contexte, vom se traduit par du, de la ou de chez.",
        ],
        "study.examples[2].lv": "Il revient de chez le médecin.",
        "study.examples[3].lv": "Nous revenons de la fête.",
        "study.examples[4].lv": "Il va chercher du lait chez le fermier.",
        "study.tip": { text: "Retenez : von + dem = vom." },
        "study.important": [
          "vom est toujours la contraction de von + dem ; ne l’employez pas avec un nom féminin ou pluriel.",
        ],
      },

      vor: {
        "study.explanation": [
          "vor signifie avant dans le temps et devant dans l’espace.",
          "Pour l’heure, vor indique les minutes avant l’heure suivante : fünf vor acht.",
          "Selon le sens, vor régit l’accusatif ou le datif.",
        ],
        "study.comparison": [
          {
            word: "vor",
            meaning: "Avant • Devant",
            example: "Vor dem Essen… – Avant le repas…",
          },
          {
            word: "nach",
            meaning: "Après",
            example: "Nach dem Essen… – Après le repas…",
          },
          {
            word: "neben",
            meaning: "À côté de",
            example: "Neben dem Haus. – À côté de la maison.",
          },
          {
            word: "hinter",
            meaning: "Derrière",
            example: "Hinter dem Haus. – Derrière la maison.",
          },
        ],
        "study.tip": { text: "Temps : avant → vor ; espace : devant → vor." },
      },

      was: {
        lv: "Quoi • Que",
        "study.translation": "Quoi • Que",
        "study.explanation": [
          "Idée principale : was interroge sur une chose, un fait ou un événement.",
          "En français, il se traduit selon la construction par quoi, que, qu’est-ce que ou quel.",
          "La forme allemande was ne change pas selon sa fonction dans la phrase.",
        ],
        "study.examples": [
          { de: "Was ist das?", lv: "Qu’est-ce que c’est ?" },
          { de: "Was machst du?", lv: "Que fais-tu ?" },
          { de: "Was ist passiert?", lv: "Que s’est-il passé ?" },
          { de: "Was ist dein Lieblingsessen?", lv: "Quel est ton plat préféré ?" },
          { de: "Was hast du gesagt?", lv: "Qu’as-tu dit ?" },
        ],
        "study.tip": {
          text: "Choisissez en français quoi, que, qu’est-ce que ou quel selon la construction ; l’allemand garde was.",
        },
        "study.important": ["was concerne les choses ou les faits ; wer concerne les personnes."],
      },

      wenn: {
        "study.examples[0].lv": "Si tu as le temps, passe.",
        "study.examples[3].lv": "Je ne sais pas s’il vient.",
        "study.explanation": [
          "wenn signifie si pour une condition et quand pour une situation répétée ou future.",
          "Dans la proposition introduite par wenn, le verbe conjugué se place à la fin.",
          "Pour une question indirecte oui/non, utilisez ob ; pour demander à quel moment, utilisez wann.",
        ],
        "study.comparison": [
          {
            word: "wenn",
            meaning: "Si • Quand",
            example: "Wenn du Zeit hast… – Si tu as le temps…",
          },
          {
            word: "ob",
            meaning: "Si, dans une question indirecte",
            example: "Ich weiß nicht, ob… – Je ne sais pas si…",
          },
          {
            word: "wann",
            meaning: "Quand ? • À quel moment ?",
            example: "Wann kommst du? – Quand viens-tu ?",
          },
          {
            word: "weil",
            meaning: "Parce que",
            example: "Ich bleibe, weil ich krank bin. – Je reste parce que je suis malade.",
          },
        ],
        "study.important": [
          "wenn = condition ou moment ; ob = question indirecte ; wann = question sur le moment.",
        ],
      },

      wer: {
        "study.explanation": [
          "Idée principale : wer demande l’identité d’une personne et correspond à qui.",
          "wer est le nominatif et joue le rôle de sujet.",
          "Pour les autres cas, on rencontre notamment wen à l’accusatif et wem au datif.",
        ],
        "study.examples[3].lv": "Qui est ton enseignante ?",
        "study.tip": { text: "Personne comme sujet → wer = qui." },
        "study.important": [
          "wer concerne une personne ; was concerne une chose, un fait ou un événement.",
        ],
      },

      werden: {
        "study.explanation": [
          "Idée principale : werden signifie devenir ou indique un changement d’état.",
          "Au niveau A1, retenez surtout les formes ich werde, du wirst, er/sie/es wird.",
          "werden sert aussi d’auxiliaire pour le futur et le passif, mais ce ne sont pas les sens principaux de cette carte.",
        ],
        "study.examples[2].lv": "Il commence à faire froid.",
        "study.comparison": [
          {
            word: "werden",
            meaning: "Devenir • Changement",
            example: "Ich werde müde. – Je commence à être fatigué.",
          },
          {
            word: "sein",
            meaning: "Être • État",
            example: "Ich bin müde. – Je suis fatigué.",
          },
          {
            word: "bleiben",
            meaning: "Rester",
            example: "Ich bleibe hier. – Je reste ici.",
          },
          {
            word: "machen",
            meaning: "Faire",
            example: "Ich mache das. – Je fais cela.",
          },
        ],
        "study.important": [
          "Ich werde müde décrit un changement ; Ich bin müde décrit un état.",
        ],
      },

      Wetter: {
        "study.explanation[1]":
          "En allemand, das Wetter désigne la météo ; die Zeit désigne le temps disponible ou un moment.",
        "study.examples[4].lv": "Nous parlons de la météo.",
        "study.comparison": [
          {
            word: "Wetter",
            meaning: "Météo",
            example: "Das Wetter ist schön. – Il fait beau.",
          },
          {
            word: "Zeit",
            meaning: "Temps disponible • Moment",
            example: "Ich habe keine Zeit. – Je n’ai pas le temps.",
          },
          {
            word: "Regen",
            meaning: "Pluie",
            example: "Es gibt viel Regen. – Il pleut beaucoup.",
          },
          {
            word: "Sonne",
            meaning: "Soleil",
            example: "Die Sonne scheint. – Le soleil brille.",
          },
        ],
      },

      wie: {
        lv: "Comment • Combien",
        "study.translation": "Comment • Combien",
        "study.explanation": [
          "wie demande la manière, l’état ou la façon : Wie geht es dir?",
          "wie viel demande une quantité, wie alt un âge et wie lange une durée.",
          "Dans so … wie, wie sert à former une comparaison d’égalité.",
        ],
        "study.examples": [
          { de: "Wie geht es dir?", lv: "Comment vas-tu ?" },
          { de: "Wie heißt du?", lv: "Comment t’appelles-tu ?" },
          { de: "Wie viel kostet das?", lv: "Combien cela coûte-t-il ?" },
          { de: "Wie alt bist du?", lv: "Quel âge as-tu ?" },
          { de: "Wie lange bleibst du?", lv: "Combien de temps restes-tu ?" },
        ],
        "study.tip": {
          text: "Manière ou état → wie ; quantité → wie viel ; durée → wie lange.",
        },
        "study.important": [
          "Ne traduisez pas wie toujours par un seul mot français : la formulation dépend de la question.",
        ],
      },

      wissen: {
        "study.examples[1].lv": "Comment le savez-vous ?",
        "study.examples[3].lv": "Je sais la réponse.",
        "study.comparison": [
          {
            word: "wissen",
            meaning: "Savoir un fait",
            example: "Ich weiß das. – Je le sais.",
          },
          {
            word: "kennen",
            meaning: "Connaître une personne, un lieu ou une chose",
            example: "Ich kenne ihn. – Je le connais.",
          },
        ],
        "study.important": [
          "wissen = savoir une information ; kennen = connaître quelqu’un ou quelque chose.",
        ],
      },

      zu: {
        lv: "À • Chez • Trop",
        "study.translation": "À • Chez • Trop",
        "study.explanation": [
          "zu indique souvent une destination vers une personne ou un lieu fonctionnel : zum Arzt, zur Schule.",
          "Devant un adjectif ou un adverbe, zu signifie trop : zu teuer.",
          "zu introduit aussi l’infinitif dans certaines constructions.",
        ],
        "study.comparison": [
          {
            word: "zu",
            meaning: "À • Chez",
            example: "Ich gehe zum Arzt. – Je vais chez le médecin.",
          },
          {
            word: "nach",
            meaning: "Vers une ville ou un pays sans article",
            example: "Ich fahre nach Berlin. – Je vais à Berlin.",
          },
          {
            word: "in",
            meaning: "Dans • À l’intérieur de",
            example: "Ich gehe in die Schule. – Je vais à l’école.",
          },
          {
            word: "bei",
            meaning: "Chez • Auprès de, sans mouvement",
            example: "Ich bin bei Anna. – Je suis chez Anna.",
          },
        ],
        "study.important": ["zu teuer = trop cher ; zum = zu + dem ; zur = zu + der."],
      },

      Zug: {
        "study.explanation[2]":
          "Dans d’autres contextes, Zug peut aussi désigner un cortège, une traction, un courant d’air ou un trait du visage ; ce ne sont pas les sens principaux au niveau A1.",
        "study.comparison": [
          {
            word: "der Zug",
            meaning: "Train",
            example: "Der Zug kommt. – Le train arrive.",
          },
          {
            word: "die Bahn",
            meaning: "Chemin de fer • Transport ferroviaire",
            example: "Ich fahre mit der Bahn. – Je voyage en train.",
          },
          {
            word: "der Bus",
            meaning: "Bus",
            example: "Der Bus kommt. – Le bus arrive.",
          },
          {
            word: "die Straßenbahn",
            meaning: "Tramway",
            example: "Die Straßenbahn ist hier. – Le tramway est ici.",
          },
        ],
      },

      zum: {
        lv: "Au • À la • Chez le",
        "study.translation": "Au • À la • Chez le",
        "study.explanation": [
          "zum est la contraction de zu + dem.",
          "Il s’emploie devant un nom masculin ou neutre au datif.",
          "Selon le contexte, il se traduit notamment par au, à la ou chez le.",
        ],
        "study.examples[2].lv": "Viens manger !",
        "study.examples[4].lv": "Je lui souhaite un joyeux anniversaire.",
        "study.comparison": [
          {
            word: "zum",
            meaning: "zu + dem, masculin ou neutre",
            example: "Ich gehe zum Arzt. – Je vais chez le médecin.",
          },
          {
            word: "zur",
            meaning: "zu + der, féminin",
            example: "Ich gehe zur Schule. – Je vais à l’école.",
          },
          {
            word: "zu",
            meaning: "À • Chez",
            example: "Ich gehe zu Anna. – Je vais chez Anna.",
          },
        ],
        "study.important": ["zum = zu + dem ; zur = zu + der."],
      },
    },

    gr: {
      ab: {
        "study.tip.text": "Θυμήσου: αφετηρία στον χρόνο ή στον χώρο → ab.",
        "study.comparison[1]": {
          word: "aus",
          meaning: "Από μέσα προς τα έξω • Προέλευση",
          example: "Ich komme aus dem Haus. = Βγαίνω από το σπίτι.",
        },
      },

      aber: {
        "study.comparison[1].meaning": "Αλλά, μετά από άρνηση",
      },

      an: {
        lv: "Σε • Πάνω σε • Δίπλα σε",
        "study.translation": "Σε • Πάνω σε • Δίπλα σε",
        "study.examples[0].lv": "Η εικόνα κρέμεται στον τοίχο.",
        "study.tip.text": "Θυμήσου: επαφή με κάθετη επιφάνεια → an der Wand.",
        "study.important": [
          "Το an δηλώνει συχνά επαφή με όριο ή κάθετη επιφάνεια· η ακριβής μετάφραση εξαρτάται από τα συμφραζόμενα.",
        ],
      },

      Bitte: {
        lv: "Παράκληση • Αίτημα",
        "study.translation": "Παράκληση • Αίτημα",
        "study.examples": [
          { de: "Ich habe eine Bitte.", lv: "Έχω μια παράκληση." },
          { de: "Er erfüllt meine Bitte.", lv: "Ικανοποιεί το αίτημά μου." },
          { de: "Sie hat zwei Bitten.", lv: "Έχει δύο αιτήματα." },
        ],
        "study.explanation": [
          "Κύρια ιδέα: die Bitte είναι ουσιαστικό και σημαίνει παράκληση ή αίτημα.",
          "Γράφεται με κεφαλαίο αρχικό και έχει άρθρο die.",
          "Ο πληθυντικός είναι die Bitten.",
        ],
        "study.important": ["Bitte με κεφαλαίο = παράκληση ή αίτημα· bitte με πεζό = παρακαλώ."],
        "study.tip": ["Ουσιαστικό: die Bitte. Ευγενική λέξη: bitte."],
      },

      bitte: {
        lv: "Παρακαλώ",
        "study.translation": "Παρακαλώ",
        "study.examples": [
          { de: "Eine Tasse Kaffee, bitte.", lv: "Ένα φλιτζάνι καφέ, παρακαλώ." },
          { de: "Komm bitte herein.", lv: "Πέρασε μέσα, παρακαλώ." },
          { de: "Bitte schön!", lv: "Παρακαλώ!" },
        ],
        "study.explanation": [
          "Κύρια ιδέα: bitte είναι ευγενική λέξη και σημαίνει παρακαλώ.",
          "Με κεφαλαίο και άρθρο, die Bitte είναι ουσιαστικό: παράκληση ή αίτημα.",
        ],
        "study.comparison": [
          {
            word: "bitte",
            meaning: "Παρακαλώ",
            example: "Komm bitte herein. = Πέρασε μέσα, παρακαλώ.",
          },
          {
            word: "die Bitte",
            meaning: "Παράκληση • Αίτημα",
            example: "Ich habe eine Bitte. = Έχω μια παράκληση.",
          },
        ],
        "study.important": [
          "bitte με πεζό = παρακαλώ· die Bitte με κεφαλαίο = παράκληση ή αίτημα.",
        ],
      },

      bleiben: {
        "study.comparison[1].meaning": "Πηγαίνω • Φεύγω με τα πόδια",
        "study.comparison[2].meaning": "Πηγαίνω • Μετακινούμαι με όχημα",
        "study.comparison[3].meaning": "Περιμένω",
        "study.examples[0].lv": "Μένω στο σπίτι.",
        "study.examples[3].lv": "Πηγαίνω στο σπίτι.",
        "study.tip.text": "Θυμήσου: παραμένω → bleiben· φεύγω ή πηγαίνω → gehen/fahren.",
      },

      bringen: {
        "study.examples": [
          { de: "Ich bringe dir ein Buch.", lv: "Σου φέρνω ένα βιβλίο." },
          { de: "Ich bringe das Paket zur Post.", lv: "Μεταφέρω το δέμα στο ταχυδρομείο." },
          { de: "Ich bringe die Kinder zur Schule.", lv: "Πηγαίνω τα παιδιά στο σχολείο." },
        ],
        "study.explanation[3]":
          "holen σημαίνει πηγαίνω να πάρω κάτι και το φέρνω πίσω.",
        "study.comparison": [
          {
            word: "bringen",
            meaning: "Φέρνω • Μεταφέρω προς έναν προορισμό",
            example: "Ich bringe das Buch zu dir. = Σου φέρνω το βιβλίο.",
          },
          {
            word: "holen",
            meaning: "Πηγαίνω να πάρω και φέρνω",
            example: "Ich hole das Buch. = Πηγαίνω να πάρω το βιβλίο.",
          },
          {
            word: "nehmen",
            meaning: "Παίρνω",
            example: "Ich nehme das Buch. = Παίρνω το βιβλίο.",
          },
        ],
        "study.important": [
          "bringen = φέρνω προς έναν προορισμό· holen = πηγαίνω να πάρω και επιστρέφω με κάτι.",
        ],
      },

      da: {
        "study.examples[1].lv": "Να τος, έρχεται.",
        "study.explanation": [
          "Κύρια ιδέα: da δηλώνει συχνά εκεί ή παρουσιάζει κάτι που εμφανίζεται.",
          "Ανάλογα με τα συμφραζόμενα μπορεί επίσης να εισάγει αιτία με τη σημασία επειδή.",
        ],
        "study.tip.text": "Θυμήσου: da = εκεί· σε ορισμένες προτάσεις = επειδή.",
      },

      das: {
        lv: "Οριστικό άρθρο ουδέτερου • Αυτό",
        "study.translation": "Οριστικό άρθρο ουδέτερου • Αυτό",
        "study.explanation": [
          "Κύρια ιδέα: das είναι το οριστικό άρθρο ουδέτερων ουσιαστικών.",
          "Μπορεί επίσης να λειτουργεί ως δεικτική αντωνυμία με τη σημασία αυτό ή ως αναφορική αντωνυμία. ",
        ],
        "study.comparison[2]": {
          word: "welches",
          meaning: "Το οποίο",
          example: "Das Buch, welches ich lese. = Το βιβλίο το οποίο διαβάζω.",
        },
        "study.tip.text": "Θυμήσου: das + ουδέτερο ουσιαστικό· μόνο του μπορεί να σημαίνει αυτό.",
      },

      dass: {
        "study.comparison[1].meaning": "Επειδή",
        "study.comparison[2].meaning": "Αν, σε πλάγια ερώτηση",
      },

      ein: {
        lv: "Αόριστο άρθρο • Ένας • Ένα",
        "study.translation": "Αόριστο άρθρο • Ένας • Ένα",
        "study.examples[1].lv": "Ψάχνει ένα στυλό.",
        "study.examples[2].lv": "Ένα παιδί παίζει.",
      },

      Eis: {
        "study.explanation[1]": "Για παγωμένο νερό χρησιμοποιούμε συνήθως τη λέξη πάγος.",
        "study.important": [
          "Στα γερμανικά das Eis μπορεί να σημαίνει πάγος ή παγωτό· στα ελληνικά οι δύο έννοιες αποδίδονται με διαφορετικές λέξεις.",
        ],
      },

      erst: {
        "study.comparison[1].example": "Zuerst frühstücken wir. = Πρώτα τρώμε πρωινό.",
        "study.tip.text": "Θυμήσου: χρόνος ή σειρά → erst· περιορισμένη ποσότητα → nur.",
      },

      es: {
        "study.examples": [
          { de: "Es regnet.", lv: "Βρέχει." },
          { de: "Es ist kalt.", lv: "Κάνει κρύο." },
          { de: "Das Kind schläft.", lv: "Το παιδί κοιμάται." },
          { de: "Es ist müde.", lv: "Είναι κουρασμένο." },
        ],
        "study.explanation": [
          "Κύρια ιδέα: es είναι η ουδέτερη αντωνυμία αυτό, αλλά χρησιμοποιείται και σε απρόσωπες εκφράσεις.",
          "Σε προτάσεις όπως Es regnet, στα ελληνικά συνήθως δεν μεταφράζεται ως ξεχωριστή αντωνυμία.",
        ],
        "study.comparison[0].meaning": "Αυτό • Ουδέτερη αντωνυμία",
        "study.important": ["es ≠ ich: es = αυτό ή απρόσωπο υποκείμενο· ich = εγώ."],
        "study.tip.text": "Θυμήσου: es = αυτό ή απρόσωπο υποκείμενο, όχι εγώ.",
      },

      etwas: {
        "study.explanation[1]":
          "Όταν το etwas αντικαθιστά ένα άγνωστο ή απροσδιόριστο πράγμα, αποδίδεται συνήθως ως κάτι.",
        "study.tip.text": "Θυμήσου: απροσδιόριστο πράγμα → etwas· μικρή ποσότητα → ein bisschen.",
        "study.important[1]": "etwas trinken = να πιω κάτι· nichts trinken = να μην πιω τίποτα.",
      },

      euch: {
        lv: "Σας • Σε εσάς",
        "study.translation": "Σας • Σε εσάς",
        "study.examples": [
          { de: "Ich sehe euch.", lv: "Σας βλέπω." },
          { de: "Ich helfe euch.", lv: "Σας βοηθώ." },
          { de: "Ich gebe euch das Buch.", lv: "Σας δίνω το βιβλίο." },
          { de: "Ich danke euch.", lv: "Σας ευχαριστώ." },
          { de: "Ihr erinnert euch.", lv: "Θυμάστε." },
        ],
        "study.explanation": [
          "Κύρια ιδέα: euch είναι αντωνυμία β΄ προσώπου πληθυντικού.",
          "Χρησιμοποιείται ως άμεσο ή έμμεσο αντικείμενο και αποδίδεται συνήθως ως σας ή σε εσάς.",
        ],
        "study.tip.text": "Θυμήσου: ihr = εσείς· euch = σας / σε εσάς.",
      },

      Frau: {
        lv: "Γυναίκα • Σύζυγος",
        "study.translation": "Γυναίκα • Σύζυγος",
        "study.examples[0].lv": "Η γυναίκα μου είναι γιατρός.",
        "study.explanation": [
          "Κύρια ιδέα: die Frau σημαίνει γυναίκα και, με κτητικό όπως meine Frau, μπορεί να σημαίνει σύζυγος.",
          "Ο πληθυντικός είναι die Frauen.",
        ],
        "study.important": ["Frau = γυναίκα· meine Frau = η σύζυγός μου."],
      },

      Geschwister: {
        "study.comparison[0].example": "Meine Geschwister – τα αδέλφια μου",
      },

      gleich: {
        "study.examples[1].lv": "Το φαγητό θα είναι έτοιμο σε λίγο.",
        "study.tip.text": "Θυμήσου: αμέσως ή σε λίγο → gleich· ίδιος/ίση/ίδιο → gleich.",
        "study.important": [
          "gleich μπορεί να δηλώνει χρόνο ή ισότητα· η σωστή απόδοση εξαρτάται από τα συμφραζόμενα.",
        ],
      },

      groß: {
        "study.explanation": [
          "Κύρια ιδέα: groß σημαίνει μεγάλος ως προς το μέγεθος ή ψηλός για άνθρωπο.",
          "Η ακριβής ελληνική λέξη εξαρτάται από το ουσιαστικό: μεγάλο σπίτι, ψηλός άνθρωπος.",
        ],
        "study.important": [
          "Για ανθρώπους groß αποδίδεται συχνά ως ψηλός· για αντικείμενα ως μεγάλος.",
        ],
      },

      Großeltern: {
        "study.comparison[0].example": "meine Großeltern – οι παππούδες και οι γιαγιάδες μου",
        "study.comparison[1].example": "meine Großmutter – η γιαγιά μου",
        "study.comparison[2].example": "mein Großvater – ο παππούς μου",
        "study.explanation[0]":
          "Κύρια ιδέα: Großeltern σημαίνει παππούδες και γιαγιάδες ως σύνολο.",
      },

      gut: {
        lv: "Καλός • Καλά",
        "study.translation": "Καλός • Καλά",
        "study.explanation": [
          "Κύρια ιδέα: gut σημαίνει καλός ως επίθετο και καλά ως επίρρημα.",
          "Δεν πρέπει να συγχέεται με το ουσιαστικό das Gut, που έχει διαφορετική σημασία.",
        ],
        "study.tip.text": "Θυμήσου: ein gutes Essen = καλό φαγητό· gut sprechen = μιλάω καλά.",
        "study.important": ["gut = καλός/καλά· das Gut είναι διαφορετικό ουσιαστικό."],
      },

      haben: {
        "study.explanation": [
          "Κύρια ιδέα: haben σημαίνει έχω και δηλώνει κατοχή ή σχέση.",
          "Το αντικείμενο του haben βρίσκεται συνήθως σε αιτιατική.",
          "Μην το συγχέεις με sein = είμαι ή bekommen = λαμβάνω.",
        ],
        "study.important": ["Ich habe + Akkusativ = έχω κάτι· όχι *mir habe."],
      },

      halten: {
        "study.explanation[2]":
          "Στην έκφραση etwas für richtig halten, το halten σημαίνει θεωρώ.",
        "study.tip.text": "Θυμήσου: κρατώ → halten· σταματώ → anhalten· θεωρώ → für … halten.",
      },

      Hand: {
        "study.explanation[1]": "die Hand σημαίνει χέρι από τον καρπό ως τα δάχτυλα.",
        "study.tip": ["Hand = χέρι· Arm = βραχίονας."],
        "study.important": [
          "die Hand δεν σημαίνει μόνο παλάμη· καλύπτει το χέρι από τον καρπό ως τα δάχτυλα.",
        ],
      },

      heißen: {
        lv: "Ονομάζομαι • Σημαίνω",
        "study.translation": "Ονομάζομαι • Σημαίνω",
        "study.comparison[1]": {
          word: "nennen",
          meaning: "Ονομάζω • Αποκαλώ",
          example: "Er nennt mich Tom. = Με αποκαλεί Τομ.",
        },
        "study.tip.text": "Θυμήσου: Wie heißt du? = Πώς σε λένε; Was heißt das? = Τι σημαίνει αυτό;",
        "study.important": [
          "heißen χρησιμοποιείται για όνομα ή σημασία· nennen σημαίνει ονομάζω/αποκαλώ.",
        ],
      },

      hoch: {
        "study.explanation[0]": "Κύρια ιδέα: hoch σημαίνει ψηλός ή υψηλός.",
        "study.tip.text": "Θυμήσου: μεγάλο ύψος → hoch· μεγάλο μέγεθος → groß.",
        "study.important": [
          "hoch περιγράφει ύψος ή επίπεδο· groß περιγράφει γενικό μέγεθος και συχνά το ύψος ανθρώπου.",
        ],
      },

      können: {
        lv: "Μπορώ • Ξέρω να",
        "study.translation": "Μπορώ • Ξέρω να",
        "study.comparison[0].meaning": "Μπορώ • Ξέρω να",
        "study.comparison[1].meaning": "Επιτρέπεται",
        "study.comparison[2].meaning": "Πρέπει",
        "study.comparison[3].meaning": "Ξέρω ένα γεγονός",
        "study.important": [
          "können = ικανότητα ή δυνατότητα· dürfen = άδεια· müssen = υποχρέωση.",
        ],
      },

      kosten: {
        "study.tip.text": "Θυμήσου: Was kostet das? = Πόσο κοστίζει; bezahlen = πληρώνω.",
        "study.important": ["kosten = κοστίζω· bezahlen = πληρώνω. Δεν είναι συνώνυμα."],
      },

      Laden: {
        "study.explanation[2]":
          "Το ρήμα laden σημαίνει φορτώνω ή προσκαλώ, ανάλογα με τα συμφραζόμενα.",
        "study.tip": ["Ουσιαστικό: der Laden = κατάστημα. Ρήμα: laden = φορτώνω ή προσκαλώ."],
        "study.important": ["Laden με κεφαλαίο = κατάστημα· laden με πεζό = ρήμα."],
      },

      Land: {
        lv: "Χώρα • Ύπαιθρος",
        "study.translation": "Χώρα • Ύπαιθρος",
        "study.examples[2].lv": "Πηγαίνουμε στην ύπαιθρο.",
        "study.examples[3].lv": "Η ζωή στην ύπαιθρο είναι ήσυχη.",
        "study.explanation": [
          "Κύρια ιδέα: das Land σημαίνει χώρα ή ύπαιθρος, ανάλογα με τα συμφραζόμενα.",
          "Deutschland ist ein Land = η Γερμανία είναι χώρα.",
          "auf dem Land = στην ύπαιθρο· aufs Land = προς την ύπαιθρο.",
        ],
        "study.important": ["Land = χώρα· auf dem Land / aufs Land = ύπαιθρος."],
      },

      lang: {
        lv: "Μακρύς • Για πολύ",
        "study.translation": "Μακρύς • Για πολύ",
        "study.explanation": [
          "Κύρια ιδέα: lang περιγράφει μήκος ή διάρκεια.",
          "ein langer Tisch = ένα μακρύ τραπέζι· ein langer Tag = μια μεγάλη σε διάρκεια ημέρα.",
          "den ganzen Tag lang = όλη την ημέρα.",
        ],
        "study.tip.text": "Θυμήσου: μήκος ή διάρκεια → lang· απόσταση → weit.",
        "study.important": ["lang αφορά μήκος ή διάρκεια· weit αφορά απόσταση ή έκταση."],
      },

      lassen: {
        "study.examples[0].lv": "Αφήνω την τσάντα εδώ.",
        "study.examples[1].lv": "Άφησέ το στο τραπέζι, παρακαλώ.",
        "study.examples[2].lv": "Οι γονείς μου με αφήνουν να φύγω.",
        "study.examples[3].lv": "Άφησέ με ήσυχο!",
        "study.explanation[3]": "Lass mich in Ruhe! σημαίνει Άφησέ με ήσυχο!",
        "study.important": [
          "lassen = αφήνω ή επιτρέπω· Lass mich in Ruhe! = Άφησέ με ήσυχο!",
        ],
      },

      laufen: {
        lv: "Τρέχω • Λειτουργώ",
        "study.translation": "Τρέχω • Λειτουργώ",
        "study.explanation": [
          "Κύρια ιδέα: laufen σημαίνει τρέχω για άνθρωπο ή ζώο.",
          "Για μηχανή, συσκευή ή πρόγραμμα μπορεί να σημαίνει λειτουργώ.",
          "Για ταινία ή εκδήλωση μπορεί να σημαίνει προβάλλεται ή βρίσκεται σε εξέλιξη.",
        ],
        "study.important": ["Άνθρωπος: laufen = τρέχω· συσκευή: laufen = λειτουργώ."],
      },
    },
  },
};
