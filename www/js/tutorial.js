var languaje = navigator.language || navigator.userLanguage;
var lng = languaje.substring(0, 2);

if (["es", "en", "de", "fr", "it"].includes(lng) === false) {
  lng = "en";
}

const babel = {
  es: {
    bienvenida:
      "Bienvenido a AntiMonsterS.<br />Te invitamos a ver una pequeña guía de las funciones.",
    si: "Sí",
    no: "No",
    siguiente: "Seguir",
    salir: "Salir",
    tutorial: "Tutorial",
    creditos: "Créditos",
    scanner: "Escaner",
    scannerText1:
      "Un potente escaner de 5 dimensiones capaz de detectar monstruos y sus zonas de entrada.",
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
      "Pulsa sobre <img class='img_accion' src='img/boton_accion_no_gps.png' />, para una mayor precisión.<br />",
    localizacion: "Localizacion Precisa",
    localizacionText1:
      "Activa la localización precisa si tienes problemas con la localización básica.",
    localizacionText2:
      "O si usas AntiMonsterS en movimiento, como en un coche. Ten en cuenta que gastará más batería y consumo de datos.",
    accion: "Acción",
    accionText1: "Activa el escaner",
    accionText2: "Activa la protección",
    volverMenu:
      "Puedes volver al tutorial pulsando en AntiMonsterS debajo de los botones.",
    graficos: "Gráficos",
    sonidos: "Sonidos",
    librerias: "Librerías",
    cierreText1:
      "Puedes volver al tutorial pulsando sobre AntiMonsterS debajo de los botones.",
    cierreText2: "Gracias por usar AntiMonsterS"
  },
  en: {},
  de: {},
  fr: {},
  it: {}
};

var tour = {
  state0: {
    html: `<div class='center-align'>
            <img src='icon.png' />
            <br /><br />
            ${babel[lng].bienvenida}
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
            <h6 class="title" > ${babel[lng].scanner}</h6>
            <p class="center-align">
              ${babel[lng].scannerText1}
            <br /><br />
              ${babel[lng].scannerText2}
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
            <h6 class="title" > ${babel[lng].proteccion}</h6>
            <p class="center-align">
              ${babel[lng].proteccionText1}
            <br /><br />
              ${babel[lng].proteccionText2}
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
            <h6 class="title" > ${babel[lng].radar}</h5>
            <p class="center-align">
              ${babel[lng].radarText1}
            <br /><br />
              ${babel[lng].radarText2}
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
              ${babel[lng].cierreText1}
            <br /><br />
              ${babel[lng].cierreText2}
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
