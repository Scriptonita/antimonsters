function pantallaProteccion() {
  var x = $("#scanner").width();
  var y = $("#scanner").height();
  console.log("Entro en pantalla proteccion");
  /*
  $("#hechizo").html(
    '  \
    <canvas id="canvas"></canvas>  \
      <svg> \
        <defs>  \
          <filter id="liquid">  \
            <!--important code : [blur + contrast] , contrast on alpha channel to prevent change color--> \
            <fegaussianblur in="SourceGraphic" stddeviation="10" result="blur" /> \
            <!--<fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -10"/>-->  \
          </filter> \
        </defs> \
      </svg>  \
  '
  );
*/
  //const canvas = document.getElementById("canvas");

  //$("#canvas").css("z-index", "-1");
  $("body").css("background-image", "url(./img/azules.gif)");


  $("#hechizo").html("<img id='bola' src='./img/bola.gif' />");
  $("#bola").css("width", $("main").width());
  $("#bola").css("height", $("main").height());
  //$("#canvas").attr("width", $("#scanner").width());
  //$("#canvas").attr("height", $("#scanner").height());
  //$("#canvas").attr("margin", "12px")
  //context = document.getElementById("canvas").getContext("2d");

  //circles = new Circle;
  //renderCircles();
}

class Circle {
  constructor() {

    this.x = $("main").width() / 2;
    this.y = $("main").height() / 2;
    this.angle = Math.PI * 2 * Math.random();
    var speed = 1 + Math.random();
    this.vx = speed * Math.cos(this.angle);
    this.vy = speed * Math.sin(this.angle);

    // this.xr = 6 + 10 * Math.random();
    // this.yr = 2 + 10 * Math.random();
    this.r = 6 + 10 * Math.random();

    this.color =
      $colorPallete[Math.floor(Math.random() * $colorPallete.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // this.xr-= .01;
    // this.yr -= .01;
    // this.r=Math.min(this.yr,this.xr);
    this.r -= 0.01;
  }
}

function renderCircles() {
  var width = $("#canvas").width(),
    height = $("#canvas").height();
  context.clearRect(20, 20, width - 20, height - 20);

  if (Math.random() > 0.2) circles.push(new Circle());

  for (var i = 0; i < circles.length; i++) {
    var b = circles[i];
    context.fillStyle = b.color;
    context.beginPath();

    context.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
    // context.ellipse(b.x, b.y, b.xr, b.yr, b.angle, 0, 2 * Math.PI);

    context.fill();
    b.update();
  }
  for (var i = 0; i < circles.length; i++) {
    var b = circles[i];
    if (
      b.x + b.r < 0 ||
      b.x - b.r > width ||
      b.y + b.r < 0 ||
      b.y - b.r > height ||
      b.r < 0
    ) {
      circles.splice(i, 1);
    }
  }
  requestAnimationFrame(renderCircles);
}
