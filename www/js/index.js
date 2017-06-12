
dimensionarApp();

var app = {

  startCameraAnotherPos: function(toBack){
    var tapEnabled = false; //enable tap take picture
    var dragEnabled = false; //enable preview box drag across the screen
    CameraPreview.startCamera({x: 0, y: 0, width: window.innerWidth, height: (window.innerHeight), camera: "back", tapEnabled, dragEnabled, toBack});
  },

  stopCamera: function(){
    CameraPreview.stopCamera();
  },

  iniciarScaneoProfundo: function() {
    console.log("Se inicia el scaneado");

    $("#accion-boton").attr("src", "./img/boton_accion_pulsado.png");
    $("#accion-boton").removeClass("indigo");
    $("#accion-boton").addClass("red");

    $("#objetivo").attr("src", "./img/mirilla3.png");
    //$("#objetivo").removeClass("bienHecho");
    $("#objetivo").css("height", "100%");
    $("#objetivo").css("width", "100%");
    $("#objetivo").attr("width", "100%");
    $("#objetivo").attr("height", "100%");
    $("#objetivo").show();

    CameraPreview.setFlashMode('torch');
    $efectIndex = 0;
    //$scannerSound.play();

    scanearDimensiones();
    /*
    window.plugins.NativeAudio.play("scanner",
      function() {
        console.log("Scanner de dimensión " + $efectIndex + " iniciado");
      },
      function() {
        console.log("Error scaneando dimensión" + $efectIndex);
      },
      function() {
        console.log("Scanner de dimensión " + $efectIndex + " completado");
        scanearDimensiones();
      }
    );
    */
  },

  pararScaneoProfundo: function() {
    console.log("Se para el scaneado");
    CameraPreview.setFlashMode('off');
    //$scannerSound.pause();

    window.plugins.NativeAudio.stop("scanner");
    //$scannerSound.seekTo(0);
    CameraPreview.setColorEffect("none");
    mostrarSolo("scanner");
    //$scan = setInterval(function(){$sonarSound.play();},5000);
    $("#accion-boton").removeClass("red");
    $("#accion-boton").addClass("indigo");
    $("#accion-boton").attr("src", "./img/boton_accion.png");
  },

  iniciarProteccion: function() {
    console.log("Se inicia la protección");
    $("#accion-boton").attr("src", "./img/boton_accion_pulsado.png");
    iniciarHechizo();
    //$("#canvasH").css("filter","url('#goo')");
    $vibraciones = 0;
    //navigator.vibrate(3000);
    vibraMovil();
    $vibr = setInterval(function() {
      vibraMovil();
      $("#nombreApp").html("Vibración " + $vibraciones);
    }, 6000);
  },

  pararProteccion: function() {
    console.log("Se para la protección");
    $hechizoAccion = false;
    window.cancelAnimationFrame($animacion);
    contextH = document.getElementById("canvasH").getContext("2d");
    contextH.clearRect(0, 0, width, height);
    window.plugins.NativeAudio.stop("hechizo");
    //$protecSound.pause(); // Hay que posicionar a 0
    //$protecSound.seekTo(0); // por si se vuelve a dar al play()
    clearInterval($vibr);
    $("#nombreApp").html("AntiMonsterS");
    $("#accion-boton").attr("src", "./img/boton_accion.png");
    mostrarSolo("proteccion");
  },

  escanear: function() {
    mostrarSolo("scanner");
    app.startCameraAnotherPos(true);
    $efectIndex = 0;
  },

  proteger: function() {
    mostrarSolo("proteccion");
  },

  aMapa: function() {
    $("#onda").addClass("circulo");
    dimensionarMapa();
    mostrarSolo("mapa");
    navigator.geolocation.getCurrentPosition(inicializaMapa, errorMapa);
    //$watchID = navigator.geolocation.watchPosition(inicializaMapa, errorMapa, { timeout: 15000, enableHighAccuracy: false});
    //$scan = setInterval(function(){$sonarSound.play();},5000);
  },

  iniciarLocalizacionPrecisa: function() {
    $("#accion-boton").attr("src", "./img/boton_accion_gps.png");
    $watchID = navigator.geolocation.watchPosition(actualizarMapa, errorMapa, { maximunAge:30000 ,timeout: 35000, enableHighAccuracy: true});
  },

  detenerLocalizacionPrecisa: function() {
    $("#accion-boton").attr("src", "./img/boton_accion_no_gps.png");
    navigator.geolocation.clearWatch($watchID);
    $watchID = null;
  },

  botonScanner: function(event) {
    event.stopImmediatePropagation();
    //$botonSound.play();
    window.plugins.NativeAudio.play('boton',
      function(){
        console.log("Botón Presionado");
      },
      function(){
        console.log("Error en Botón");
      },
      function(){
        console.log("Botón Ok");
      }
    );
    if ($enMapa) {
      //clearInterval($scan);
      //$sonarSound.stop();
      if ($watchID !== null) {
        navigator.geolocation.clearWatch($watchID);
        $watchID = null;
      }
    }
    if (!$enScanner) {
      actualizaBotones("scanner");
      app.escanear();
    }
    //app.estado("scanner-boton");

    $("body").css("background-image","");
    $("body").css("background-color", "transparent");
    $enScanner = true;
    $enProteccion = false;
    $enMapa = false;
  },

  botonProteccion: function(event) {
    event.stopImmediatePropagation();
    //$botonSound.play();
    //window.plugins.NativeAudio.play('boton');
    window.plugins.NativeAudio.play('boton',
      function(){
        console.log("Botón Presionado");
      },
      function(){
        console.log("Error en Botón");
      },
      function(){
        console.log("Botón Ok");
      }
    );

    if ($enMapa) {
      //clearInterval($scan);
      //$sonarSound.pause();
      if ($watchID !== null) {
        navigator.geolocation.clearWatch($watchID);
        $watchID = null;
      }
    }
    if (!$enProteccion) {
      actualizaBotones("proteccion");
      app.proteger();
    }
    $enScanner = false;
    $enProteccion = true;
    $enMapa = false;
    //app.estado("proteccion-boton");
  },

  botonMapa: function(event) {
    event.stopImmediatePropagation();
    //$botonSound.play();
    window.plugins.NativeAudio.play('boton',
      function(){
        console.log("Botón Presionado");
      },
      function(){
        console.log("Error en Botón");
      },
      function(){
        console.log("Botón Ok");
      }
    );
    $("body").css("background-image","");
    $("body").css("background-color", "transparent");
    $enScanner = false;
    $enProteccion = false;
    $enMapa = true;
    actualizaBotones("mapa");
    app.aMapa();
  },

  botonAccion: function(event) {
    event.stopImmediatePropagation();
    //$botonSound.play();
    window.plugins.NativeAudio.play('boton',
      function(){
        console.log("Botón Presionado");
      },
      function(){
        console.log("Error en Botón");
      },
      function(){
        console.log("Botón Ok");
      }
    );
    console.log("Botón Acción Pulsado");
    if (!$enMapa) {
      //app.estado("accion-boton");
      //liberarSonidos();
      if ($enScanner && !$accion) {
        // Zona escanner a la espera
        app.iniciarScaneoProfundo();
        console.log("Iniciar el escaneo");
      } else if ($enScanner && $accion) {
        // Zona escanner escaneando zona específica
        console.log("Quito escaneo!!");
        app.pararScaneoProfundo();

      } else if (!$enScanner && !$accion) {
        // Estamos en Proteccion a la espera
        app.iniciarProteccion();
        console.log("Iniciar la Proteccion");
      } else {
        // Estamos en Proteccion protegiendo
        app.pararProteccion();
        console.log(("Parar la protección"));
      }
    } else {
      if (!$accion) {
        app.iniciarLocalizacionPrecisa();
        console.log("Iniciar la Localización precisa");
      } else {
        app.detenerLocalizacionPrecisa();
        console.log("Parar Localización precisa");
      }
    }
    $accion = !$accion;
  },

  init: function(){

    window.addEventListener('load', function() {
      new FastClick(document.body);
      console.log("FastClick cargado");
    }, false);

    iniciarVariables();
    /*
    // Dimensionar App
    $camWidth = window.innerWidth;
                                      //botones = $("footer.page-footer").height();
    $camHeight = (window.innerHeight * 80) / 100; // - 40;
    */
    // Carga de Sonidos
    cargarSonidos();

    actualizaBotones("scanner");
    app.escanear();

    document.getElementById('scanner-boton').addEventListener('click', this.botonScanner, false);
    document.getElementById('proteccion-boton').addEventListener('click', this.botonProteccion, false);
    document.getElementById('mapa-boton').addEventListener('click', this.botonMapa, false);
    document.getElementById('accion-boton').addEventListener('click', this.botonAccion, false);

    var onda = document.getElementById("onda");
    onda.addEventListener("webkitAnimationIteration", function() {
      window.plugins.NativeAudio.play('sonar');
    }, false);
    window.plugins.insomnia.keepAwake();
    navigator.splashscreen.hide();
  }
};

document.addEventListener('deviceready', function(){
  app.init();
}, false);

document.addEventListener('resume', function(){
  if ($accion) {
    iniciarVariables();
    actualizaBotones("scanner");
    app.escanear();
  }
  //app.init();
  cargarSonidos();
}, false);

document.addEventListener('pause', function(){
  liberarSonidos();
  clearInterval($scan);
  clearInterval($temp);
  clearInterval($vibr);
}, false);
