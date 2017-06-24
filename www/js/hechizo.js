function iniciarHechizo() {
  $("#hechizo").append(
    `<img id="rayos" class="rayos" width="100%" height="100%" />`
  );
  $("#rayos").hide();
  $("#trasero").hide();
  $alternar_rayos = false;
  window.plugins.NativeAudio.play(
    "hechizo",
    function() {
      console.log("Hechizo iniciado correctamente");
    },
    function() {
      console.log("Error en el Hechizo");
    },
    function() {
      console.log("Hechizo Completado");
      proteccionOK();
    }
  );

  contextH = document.getElementById("canvasH").getContext("2d");
  colorPallete = [
    "#66aac1",
    "#6644aa",
    "#cc1167",
    "#ff2827",
    "#ff5514",
    "#ffcc22",
    "#89ba4e",
    "#99ddbb",
    "#ffcc22"
  ];
  balls = [];
  count = 0;
  width = canvasH.width = $("main").width();
  height = canvasH.height = $("main").height();
  origin = { x: width / 2, y: height / 2 };
  //mouse = {x: width / 2, y: height / 2};
  randomCount = 1;
  ejecutarHechizo();
}

function vibraMovil() {
  //console.log("3seg de vibración!!!");

  $alternar_rayos = !$alternar_rayos;
  navigator.vibrate(3000);
  //navigator.vibrate(3000);
  if ($vibraciones === 5) {
    $vibraciones = 1;
  }

  if ($alternar_rayos === true) {
    console.log("$vibraciones: " + $vibraciones);
    $("#rayos").attr("src", "./img/vibr-" + $vibraciones + ".png");
    $("#rayos").show();
    $("#rayos").addClass("efectoRayo");
    $vibraciones++;
  } else {
    $("#trasero").attr("src", "./img/rayos_backgr_" + $vibraciones + ".png");
    $("#trasero").show();
    $("#trasero").addClass("efectoRayo");
  }

  //navigator.vibrate(3000);

  $temp = setTimeout(function() {
    if ($alternar_rayos === true) {
      console.log("Delante: alternar_rayos: " + $alternar_rayos);
      $("#rayos").attr("src", "");
      $("#rayos").removeClass("efectoRayo");
      $("#rayos").hide();
    } else {
      console.log("Atras: alternar_rayos: " + $alternar_rayos);
      $("#trasero").attr("src", "");
      $("#trasero").hide();
      $("#trasero").removeClass("efectoRayo");
    }
  }, 2500);
}

function proteccionOK() {
  //$("main").css("background-color", "transparent");
  //if ($protectStatus !== 3) {
  console.log("La proteccion finaliza correctamente");
  clearInterval($vibr);
  window.cancelAnimationFrame($animacion);
  contextH.clearRect(0, 0, width, height);
  $hechizoAccion = false;
  $("#hechizo").html("");
  $("#hechizo").html(
    '  \
      <div id="contenedorHechizo" width="' +
      $("main").width() +
      '" height="' +
      $("main").height() +
      '"> \
        <img id="protegidoOk" src="./img/seguros.png" class="bienHecho" width="' +
      $("main").width() +
      '" height="' +
      $("main").height() +
      '" />  \
      </div>  \
    '
  );

  window.plugins.NativeAudio.play(
    "temaOk",
    function() {
      console.log("Animación fin de scanner iniciado");
    },
    function() {
      console.log("Fallo en el audio de animación");
    },
    function() {
      window.plugins.NativeAudio.play(
        "zonaProtegida",
        function() {
          console.log("Audio fin de scanner iniciado");
        },
        function() {
          console.log("Error audio fin de scanner iniciado");
        },
        function() {
          $temp = setTimeout(function() {
            actualizaBotones("proteccion");
            mostrarSolo("proteccion");
            $("#hechizo").show();
            console.log("Se programa la vuelta a proteccion en 6 Seg");
            $accion = false;
            $("#protegidoOk").removeClass("bienHecho");
            $("#proteccion").addClass("fondoPoderoso");
          }, 2000);
        }
      );
    }
  );
}

function ejecutarHechizo() {
  contextH.clearRect(0, 0, width, height);
  if (count === randomCount) {
    balls.push(new Ball());
    count = 0;
    randomCount = 3 + Math.floor(Math.random() * 5);
  }
  count++;
  for (var i = 0; i < balls.length; i++) {
    var b = balls[i];
    contextH.fillStyle = b.color;
    contextH.beginPath();
    contextH.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
    contextH.fill();
    b.update();
  }

  contextH.fillStyle = "#13fdfe";
  contextH.beginPath();
  contextH.arc(origin.x, origin.y, 40, 0, Math.PI * 2, false);
  contextH.fill();

  for (var i = 0; i < balls.length; i++) {
    var b = balls[i];
    if (
      b.x + b.r < 0 ||
      b.x - b.r > width ||
      b.y + b.r < 0 ||
      b.y - b.r > height ||
      b.r < 0
    ) {
      balls.splice(i, 1);
    }
  }
  $animacion = window.requestAnimationFrame(ejecutarHechizo);
}

class Ball {
  constructor() {
    this.x = origin.x;
    this.y = origin.y;
    this.angle = Math.PI * 2 * Math.random();
    this.vx = (1.3 + Math.random() * 0.3) * Math.cos(this.angle);
    this.vy = (1.3 + Math.random() * 0.3) * Math.sin(this.angle);
    this.r = 6 + 3 * Math.random();
    this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.r -= 0.01;
  }
}

function removeBall() {
  for (var i = 0; i < balls.length; i++) {
    var b = balls[i];
    if (
      b.x + b.r < 0 ||
      b.x - b.r > width ||
      b.y + b.r < 0 ||
      b.y - b.r > height ||
      b.r < 0
    ) {
      balls.splice(i, 1);
    }
  }
}
