var languaje = navigator.language || navigator.userLanguage;
var lng = languaje.substring(0, 2);

lng = "ch";

if (["es", "en", "de", "fr", "it"].includes(lng) === false) {
  lng = "en";
}

var idioma;

switch (lng) {
  case "es":
    idioma = {
      bienvenida:
        "Bienvenido a AntiMonsterS.<br />Te invitamos a ver una pequeña guía de las funciones.",
      si: "Sí",
      no: "No",
      siguiente: "Seguir",
      salir: "Salir",
      tutorial: "Tutorial",
      creditos: "Créditos",
      scanner: "Escáner",
      scannerText1:
        "Un potente escáner de 5 dimensiones capaz de detectar monstruos y sus zonas de entrada.",
      scannerText2:
        "Actívalo pulsando <img class='img_accion' src='img/boton_accion.png' /> para escanear armarios, puertas, ventanas, debajo de la cama...",
      proteccion: "Protección",
      proteccionText1:
        "Lanza un poderoso hechizo de protección al pulsar sobre <img class='img_accion' src='img/boton_accion.png' /> que protege a las personas presentes y sella\
        las posibles entradas de monstruos en todas las dimensiones.",
      proteccionText2:
        "Puedes dormir tranquilamente ya que el hechizo es infalible",
      radar: "Radar",
      radarText1:
        "Te situa en el centro del mapa y emite una potente señal de radar para detectar la presencia de todo tipo de seres indeseables.",
      radarText2:
        "Pulsa sobre <img class='img_accion' src='img/boton_accion_no_gps.png' /> para una mayor precisión.<br />",
      cierreText1:
        "Puedes volver al tutorial pulsando sobre AntiMonsterS debajo de los botones.",
      cierreText2: "Gracias por usar AntiMonsterS"
    };
    break;
  case "en":
    idioma = {
      bienvenida:
        "Welcome to AntiMonsterS.<br />We invite you to see a small guide of the functions.",
      si: "Yes",
      no: "No",
      siguiente: "Next",
      salir: "Exit",
      tutorial: "Tutorial",
      creditos: "Credits",
      scanner: "Scanner",
      scannerText1:
        "A powerful scanner of 5 dimensions able to detect monsters and their zones of entrance.",
      scannerText2:
        "To activate click on <img class='img_accion' src='img/boton_accion.png' /> and yo will be able to scan closets, doors, windows, under the bed…",
      proteccion: "Protection",
      proteccionText1:
        "The protection sends a powerful spell of protection when clicking <img class='img_accion' src='img/boton_accion.png' /> that it protects the present people and it seals the possible entrances of monsters in all the dimensions",
      proteccionText2: "You can sleep calmly since the spell is infallible",
      radar: "Radar",
      radarText1:
        "It locates to you in center of the map and it emits a powerful signal of radar to detect the presence of all type of undesirable beings.",
      radarText2:
        "It beats on <img class='img_accion' src='img/boton_accion_no_gps.png' /> for a greater precision.<br />",
      cierreText1:
        "You can return to the tutorial clicking on AntiMonsterS below the buttons.",
      cierreText2: "Danke für die Verwendung von AntiMonsterS"
    };
    break;
  case "de":
    idioma = {
      bienvenida:
        "Willkommen zu AntiMonsterS.<br /> Wir laden Sie ein, einen kleinen Führer der Funktionen zu sehen..",
      si: "Ja",
      no: "Nein",
      siguiente: "Weiter",
      salir: "Abbrechen",
      tutorial: "Tutorium",
      creditos: "Anerkennung",
      scanner: "Scanner",
      scannerText1:
        "Ein leistungsfähiger Scanner von 5 Maßen fähig, Monster und ihre Zonen des Eingangs zu ermitteln.",
      scannerText2:
        "Um zu aktivieren klicken Sie auf  <img class='img_accion' src='img/boton_accion.png' /> und Sie können prüfen Schränke, Türen, Fenster, unter dem Bett ...",
      proteccion: "Schutz",
      proteccionText1:
        "Es wird einen starken Zauber des Schutzes starten, wenn Sie auf <img class='img_accion' src='img/boton_accion.png' /> Schützt alle Menschen in situ. Sie versiegelt die möglichen Eingänge von Monstern in allen Dimensionen",
      proteccionText2:
        "Sie können friedlich schlafen, da der Bann unfehlbar ist",
      radar: "Radar",
      radarText1:
        "Es findet auf Sie in der Mitte der Karte und es strahlt ein starkes Signal des Radars aus, das Vorhandensein aller Art unerwünschte Wesen zu ermitteln.",
      radarText2:
        "Klicken Sie <img class='img_accion' src='img/boton_accion_no_gps.png' /> für eine höhere Genauigkeit.<br />",
      cierreText1:
        "Sie können zum Tutorial zurückkehren, indem Sie auf AntiMonsterS unterhalb der Schaltflächen klicken.",
      cierreText2: "Gracias por usar AntiMonsterS"
    };
    break;
  case "fr":
    idioma = {
      bienvenida:
        "Bienvenu à AntiMonsterS.<br /> Nous l'invitons à voir un petit guide des fonctions.",
      si: "Oui",
      no: "Non",
      siguiente: "Prochain",
      salir: "Annuler",
      tutorial: "Tutorial",
      creditos: "Crédits",
      scanner: "Scanner",
      scannerText1:
        "Un scanner puissant 5 dimensions, capables de détecter les monstres et les portes d'entrée.",
      scannerText2:
        "Activez-le en cliquant sur <img class='img_accion' src='img/boton_accion.png' /> pour scanner armoires, portes, fenêtres, sous le lit ...",
      proteccion: "Protection",
      proteccionText1:
        "Il émet un puissant sortilège de protection en cliquant sur <img class='img_accion' src='img/boton_accion.png' /> qui protège les personnes présentes et bloque toutes les portes d'entrée pour les monstres.",
      proteccionText2:
        "Ton tu peux tranquillement dormir puisque l'envoûtement est infaillible",
      radar: "Radar",
      radarText1:
        "Il est situé dans le centre de la carte et envoie un signal radar puissant pour détecter la présence de tout type d'êtres indésirables.",
      radarText2:
        "Cliquez sur <img class='img_accion' src='img/boton_accion_no_gps.png' /> pour plus de précision.<br />",
      cierreText1:
        "Pour revenir à ce guide, vous pouvez cliquer sur AntiMonsterS.",
      cierreText2: "Nous vous remercions d'utiliser AntiMonsterS"
    };
    break;
  case "it":
    idioma = {
      bienvenida:
        "Benvenuto a AntiMonsterS.<br />Vi invitiamo a a vedere una piccola guida delle funzioni.",
      si: "Si",
      no: "No",
      siguiente: "Seguire",
      salir: "Uscire",
      tutorial: "Tutorial",
      creditos: "Crediti",
      scanner: "Scanner",
      scannerText1:
        "Un scanner potente in 5 dimensioni capaci di individuare i mostri e le loro zone dell'entrata.",
      scannerText2:
        "Per attivare clicca <img class='img_accion' src='img/boton_accion.png' /> per esaminare armadi, porte, finestre, sotto il letto ...",
      proteccion: "Protezione",
      proteccionText1:
        "manda un potente incantesimo di protezione quando si fa clic su  <img class='img_accion' src='img/boton_accion.png' /> che protegge le persone presenti e blocca tutte le possibili voci di mostri.",
      proteccionText2:
        "Tuo puoi dormire tranquillamente giacchè l'incantesimo è infallibile",
      radar: "Radar",
      radarText1:
        "E ti mette al centro della mappa ed emette un segnale radar potente per rilevare la presenza di tutti i tipi di esseri indesiderabili.",
      radarText2:
        "Clicca <img class='img_accion' src='img/boton_accion_no_gps.png' /> per una maggiore precisionen.<br />",
      cierreText1: "È possibile tornare a questa guida cliccando AntiMonsterS.",
      cierreText2: "Ringraziamenti per usando AntiMonsterS"
    };
    break;
  case "pt":
    idioma = {
      bienvenida:
        "Bem-vindo a AntiMonsterS.<br /> Convidamos-lhe a para ver um guia pequeno das funções.",
      si: "Sim",
      no: "Não",
      siguiente: "Seguir",
      salir: "Sair",
      tutorial: "Tutorial",
      creditos: "Créditos",
      scanner: "Scanner",
      scannerText1:
        "Um scanner poderosa capaz de detectar monstros e seus portais de entrada em 5 Dimensões.",
      scannerText2:
        "Ativá-lo clicando em <img class='img_accion' src='img/boton_accion.png' /> para examinar armários, portas, janelas, debaixo da cama ...",
      proteccion: "Proteção",
      proteccionText1:
        "Lança um feitiço poderoso de proteção a premir sobre <img class='img_accion' src='img/boton_accion.png' /> que protege as pessoas presentes e sela entradas posível de monstros em todas dimensões",
      proteccionText2:
        "Teu podes dormir tranquilamente já que o feitiço é infalível",
      radar: "Radar",
      radarText1:
        "Situa-te no centro do mapa e emite um sinal potente do radar para detectar a presença de tudo tipo dos seres indesejáveis.",
      radarText2:
        "Clique em <img class='img_accion' src='img/boton_accion_no_gps.png' /> para maior precisão.<br />",
      cierreText1: "Você pode retornar ao tutorial clicando em AntiMonsterS.",
      cierreText2: "Obrigado usar AntiMonsterS"
    };
    break;
  default:
    break;
}

var tour = {
  state0: {
    html: `<div class='center-align'>
            <img src='icon.png' />
            <br /><br />
            ${idioma.bienvenida}
            <br /><br /></div>`,
    buttons: {
      No: false,
      Ok: true
    },
    focus: 1,
    submit: function(e, v, m, f) {
      if (v) {
        e.preventDefault();
        $.prompt.goToState("state1", true);
        return false;
      }
      $("#nombreApp").css("color", "#ffffff");
      $.prompt.close();
    }
  },
  state1: {
    html: `<div class="center-align">
            <img src="img/boton_scanner.png" width="50%" />
            <br />
            <h6 class="title" > ${idioma.scanner}</h6>
            <p class="center-align">
              ${idioma.scannerText1}
            <br /><br />
              ${idioma.scannerText2}
            </p>
          </div>`,
    buttons: {
      Salir: false,
      Siguiente: true
    },
    focus: 1,
    submit: function(e, v, m, f) {
      if (v) {
        e.preventDefault();
        $.prompt.goToState("state2", true);
        return false;
      }
      $("#nombreApp").css("color", "#ffffff");
      $.prompt.close();
    }
  },
  state2: {
    html: `<div class="center-align">
            <img src="img/boton_proteccion.png" width="50%" />
            <br />
            <h6 class="title" > ${idioma.proteccion}</h6>
            <p class="center-align">
              ${idioma.proteccionText1}
            <br /><br />
              ${idioma.proteccionText2}
            </p>
          </div>`,
    buttons: {
      Salir: false,
      Siguiente: true
    },
    focus: 1,
    submit: function(e, v, m, f) {
      if (v) {
        e.preventDefault();
        $.prompt.goToState("state3", true);
        return false;
      }
      $("#nombreApp").css("color", "#ffffff");
      $.prompt.close();
    }
  },
  state3: {
    html: `<div class="center-align">
            <img src="img/boton_mapa.png" width="50%" />
            <br />
            <h6 class="title" > ${idioma.radar}</h5>
            <p class="center-align">
              ${idioma.radarText1}
            <br /><br />
              ${idioma.radarText2}
            </p>
          </div>`,
    buttons: {
      Salir: false,
      Siguiente: true
    },
    focus: 1,
    submit: function(e, v, m, f) {
      if (v) {
        e.preventDefault();
        $.prompt.goToState("state4", true);
        return false;
      }
      $("#nombreApp").css("color", "#ffffff");
      $.prompt.close();
    }
  },
  state4: {
    html: `<div class="center-align">
            <img src='icon.png' />
            <br />
            <h6 class="title" >AntiMonsterS</h5>
            <br />
            <p class="center-align">
              ${idioma.cierreText1}
            <br /><br />
              ${idioma.cierreText2}
            </p>
          </div>`,
    buttons: {
      Salir: false
    },
    submit: function(e, v, m, f) {
      e.preventDefault();
      $("#nombreApp").css("color", "#ffffff");
      $.prompt.close();
    }
  }
};
