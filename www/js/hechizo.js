function iniciarHechizo() {
  //$("#hechizo").html("");
  //$("#proteccion").addClass("fondoPoderoso");
  /*
  $("#hechizo").html('  \
    <div id="contenedorHechizo" class="hechizandozz" width="' +  $("main").width() + '" height="' +  + '"> \
      <img id="rayos" width="' +  $("main").width() + '" height="' + $("main").height() + '" />  \
    </div>  \
  ');
  */
  /*
  $("#hechizo").html('  \
    <canvas id="canvasH"></canvas> \
    <svg>  \
      <defs>  \
        <filter id="goo"> \
          <fegaussianblur in="SourceGraphic" stddeviation="10" result="blur" /> \
          <fecolorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"/>  \
        </filter>   \
      </defs> \
    </svg>  \
    <img id="rayos" class="rayos" width="100%" height="100%" /> \
  ');
*/
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
  //$protecSound.play();
  /*
  $vibraciones = 1;
  navigator.vibrate(3000);
  vibraMovil();
  $vibr = setInterval(function() {
    navigator.vibrate(3000);
    vibraMovil();
    $vibraciones++;
    $("#nombreApp").html("Vibración " + $vibraciones);
  }, 6000);
  */


  contextH = document.getElementById("canvasH").getContext("2d");
  colorPallete = ["#66aac1", "#6644aa", "#cc1167", "#ff2827", "#ff5514", "#ffcc22" , "#89ba4e", "#99ddbb", "#ffcc22"];
  balls = [];
  count = 0;
  width = canvasH.width = $("main").width();
  height = canvasH.height = $("main").height();
  origin = {x: width / 2, y: height / 2};
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
      $("#nombreApp").html("Vibración " + $vibraciones + " Rayete");
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
  $("#nombreApp").html("AntiMonsterS");
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
  //$("#hechizo").hide();
  //$("#protegiendo").removeClass("hechizo");
  //$("#protegiendo").addClass("fondoPoderoso");

  //$("#agarraTlf").show();
  //$("#proteccion").removeClass("efectoRayoTrasero");
  //$("#efectoHechizo").remove();
  //$("#protegidoOk").attr("src", "./img/seguros.png");
  //$("#protegidoOk").addClass("bienHecho");

  window.plugins.NativeAudio.play("temaOk");
  //$okSound.play();
  $temp = setTimeout(function() {
    actualizaBotones("proteccion");
    mostrarSolo("proteccion");
    console.log("Se programa la vuelta a proteccion en 10 Seg");
    $accion = false;
    $("#protegidoOk").removeClass("bienHecho");
    $("#proteccion").addClass("fondoPoderoso");
  }, 6000);
  //}
}

function ejecutarHechizo (){
  contextH.clearRect(0, 0, width, height);
  if(count === randomCount){
    balls.push(new Ball());
    count = 0;
    randomCount = 3 + Math.floor(Math.random() * 5);
  }
  count++;
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    contextH.fillStyle = b.color;
    contextH.beginPath();
    contextH.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
    contextH.fill();
    b.update();
  }

  //origin.x += (mouse.x - origin.x) * .15;
  //origin.y += (mouse.y - origin.y) * .15;

  contextH.fillStyle = "#13fdfe";
  contextH.beginPath();
  contextH.arc(origin.x, origin.y, 40, 0, Math.PI * 2, false);
  contextH.fill();

  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    if(
      b.x + b.r < 0 ||
      b.x - b.r > width ||
      b.y + b.r < 0 ||
      b.y - b.r > height ||
      b.r < 0
    ){
      balls.splice(i, 1);
    }
  }
  $animacion = window.requestAnimationFrame(ejecutarHechizo);
}

class Ball{
  constructor(){
    this.x = origin.x;
    this.y = origin.y;
    this.angle = Math.PI * 2 * Math.random();
    this.vx = (1.3 + Math.random() * .3) * Math.cos(this.angle);
    this.vy = (1.3 + Math.random() * .3) * Math.sin(this.angle);
    this.r = 6 + 3 * Math.random();
    this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.r -= .01;
  }
}

function removeBall(){
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    if(
      b.x + b.r < 0 ||
      b.x - b.r > width ||
      b.y + b.r < 0 ||
      b.y - b.r > height ||
      b.r < 0
    ){
      balls.splice(i, 1);
    }
  }
}
