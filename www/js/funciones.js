function dimensionarApp() {
  $("#scanner").css("width", "100%");
  $("#scanner").css("height", "100%");
  $("#proteccion").css("width", "100%");
  $("#proteccion").css("height", "100%");
  $("#hechizo").css("height", "100%");
  $("#hechizo").css("width", "100%");
  //dimensionarMapa();
}

// Carga los sonidos del sistema
/*
function cargarSonidos () {
  $scannerSound = document.getElementById('audioScanner');
  $scannerSound.addEventListener('ended', scanearDimensiones);
  $protecSound = document.getElementById('audioHechizo');
  $protecSound.addEventListener('ended', proteccionOK);
  $sonarSound = document.getElementById('audioSonar');
  $botonSound = document.getElementById('clickBoton');
  $okSound = document.getElementById('audioOk');
}
*/

function cargarSonidos() {
  window.plugins.NativeAudio.preloadComplex(
    "scanner",
    "audio/scanner.mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio Scanner Cargado correctamente");
    },
    function(error) {
      console.log("Audio Scanner Error: ", error);
    }
  );

  window.plugins.NativeAudio.preloadComplex(
    "hechizo",
    "audio/proteccion.mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio Hechizo Cargado correctamente");
    },
    function(error) {
      console.log("Audio Hechizo Error: ", error);
    }
  );

  window.plugins.NativeAudio.preloadComplex(
    "sonar",
    "audio/sonar.mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio sonar cargado correctamente");
    },
    function(error) {
      console.log("Audio sonar Error ", error);
    }
  );

  window.plugins.NativeAudio.preloadComplex(
    "boton",
    "audio/boton.mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio botón cargado correctamente");
    },
    function(error) {
      console.log("Audio botón Error", error);
    }
  );

  window.plugins.NativeAudio.preloadComplex(
    "temaOk",
    "audio/ok.mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio Ok Cargado correctamente");
    },
    function(error) {
      console.log("Audio Ok Error: ", error);
    }
  );

  var languaje = navigator.language || navigator.userLanguage;
  var lng = languaje.substring(0, 2);

  if (
    lng !== "es" &&
    lng !== "en" &&
    lng !== "de" &&
    lng !== "fr" &&
    lng !== "it"
  ) {
    lng = "en";
  }

  window.plugins.NativeAudio.preloadComplex(
    "zonaProtegida",
    "audio/Zona_Protegida_" + lng + ".mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio Zona Protegida Cargado correctamente");
    },
    function(error) {
      console.log("Audio Zona Protegida Error: ", error);
    }
  );

  window.plugins.NativeAudio.preloadComplex(
    "zonaSegura",
    "audio/Zona_Segura_" + lng + ".mp3",
    1,
    1,
    0,
    function(aux) {
      console.log("Audio Zona Segura Cargado correctamente");
    },
    function(error) {
      console.log("Audio Zona Segura Error: ", error);
    }
  );
}

function liberarSonidos() {
  window.plugins.NativeAudio.unload("hechizo");
  window.plugins.NativeAudio.unload("scanner");
  window.plugins.NativeAudio.unload("temaOk");
  window.plugins.NativeAudio.unload("boton");
  window.plugins.NativeAudio.unload("sonar");
  window.plugins.NativeAudio.unload("zonaSegura");
  window.plugins.NativeAudio.unload("zonaProtegida");

  /*
  $sonarSound.release();
  $protecSound.release();
  $scannerSound.release();
  $botonSound.release();
  $okSound.release();
  */
}

function actualizaBotones(ident) {
  var botones = ["scanner", "proteccion", "mapa"];
  var color = "yellow";
  botones.forEach(function(aux) {
    if (aux === ident) {
      $("#" + ident + "-text").addClass(color + "-text");
      $("#" + ident + "-boton").removeClass("indigo");
      $("#" + ident + "-boton").attr(
        "src",
        "./img/boton_" + ident + "_pulsado.png"
      );
      $("#" + ident + "-boton").addClass(color);
    } else {
      $("#" + aux + "-text").removeClass(color + "-text");
      $("#" + aux + "-boton").removeClass(color);
      $("#" + aux + "-boton").attr("src", "./img/boton_" + aux + ".png");
      $("#" + aux + "-boton").addClass("indigo");
    }
  });
  if (ident === "scanner" || ident === "proteccion") {
    $("#accion-boton").attr("src", "./img/boton_accion.png");
    $("#accion-text").html("Acción");
  } else {
    $("#accion-boton").attr("src", "./img/boton_accion_no_gps.png");
    $("#accion-text").html("Precisión");
  }
}

function mostrarSolo(ident) {
  var pantalla = ["scanner", "proteccion", "mapa"];
  pantalla.forEach(function(aux) {
    $("#" + aux).hide();
  });
  if (ident !== "scanner") {
    app.stopCamera();
  }
  if (ident !== "mapa") {
    //var onda = document.getElementById('onda');
    /*onda.removeEventListener("animationiteration", function(){"Sonido sonar quitado"}, false);*/
    //onda.removeEventListener("webkitAnimationIteration", function(){"Sonido sonar quitado"}, false);
    //$("#onda").removeClass("circulo");
    //manilla.removeEventListener("webkitAnimationIteration", function(){"Sonido sonar quitado"}, false);
  }

  if (ident === "mapa") {
    //var onda = document.getElementById("onda");
    /*
    onda.addEventListener("animationiteration", function() {
      //$sonarSound.play();
      window.plugins.NativeAudio.play('sonar',
        function(){
          console.log("Sonar Emitido");
        },
        function(){
          console.log("Error en Sonar");
        },
        function(){
          console.log("Sonar final");
        }
      );
    }, false);
    */
    /*
    onda.addEventListener("webkitAnimationIteration", function() {
      //$sonarSound.play();
      window.plugins.NativeAudio.play('sonar',
        function(){
          console.log("Sonar Emitido");
        },
        function(){
          console.log("Error en Sonar");
        },
        function(){
          console.log("Sonar final");
        }
      );
    }, false);*/
    window.plugins.NativeAudio.play(
      "sonar",
      function() {
        console.log("Sonar Emitido");
      },
      function() {
        console.log("Error en Sonar");
      },
      function() {
        console.log("Sonar final");
      }
    );
    //$("#onda").attr("width", $("#mapa").width());
    //$("#onda").attr("height", $("#mapa").width());
    //$("#manilla").attr("src", "./img/radar-manilla.png");
    //$("#manilla").addClass("girar");
    //var manilla = document.getElementById('manilla');
    //manilla.addEventListener("animationiteration", function(){
    //$sonarSound.play();
    //}, false);
    //manilla.addEventListener("webkitAnimationIteration", function(){
    //  $sonarSound.play();
    //}, false);
  } else if (ident === "proteccion") {
    //$("main").css("background-image
    /*
    $("#protegiendo").css("background-image","url('./img/azules.gif')");
    $("#agarraTlf").removeClass("bienHecho").removeClass("efectoRayo");
    $("#agarraTlf").attr("src", "./img/sujetar_telefono.png");
    */
    pantallaProteccion();
    $("#canvas").css("filter", "url('#liquid')");
    /*
    $("#proteccion").css("z-index", "-2");
    $("#canvas").css("z-index", "-1");
    */
  } else if (ident === "scanner") {
    $("#objetivo").removeClass("bienHecho");
    $("#objetivo").attr("src", "");
    console.log("Clase bienHecho removida");
    $("#objetivo").hide();
  }
  $("#" + ident).show();
}

function getMediaURL(s) {
  if (device.platform.toLowerCase() === "android")
    return "/android_asset/www/" + s;
  return s;
}
